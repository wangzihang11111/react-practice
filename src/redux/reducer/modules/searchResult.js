import createReducers from '../createReducers';
import {searchData} from "../../../filters/data";

const initialState = {
    searchInfo:{
        name: "",
        urgency: "",
        address: "",
        oddNumber:"",
        approvalStatus:""
    },
    searchData
};
function noEmpty(searchInfo){
    let filterInfo = {};
    for(let i in searchInfo){
        if(searchInfo[i]){
            filterInfo[i] = searchInfo[i];
        }
    }
    return filterInfo;
}
function filterSearchDataBySearchInfo(searchInfo){
    let filterInfo = noEmpty(searchInfo);
    let list = [...searchData.list];
    let filterKeys = Object.keys(filterInfo);
    return list.filter(function(item){
        let flag = true;
        for(let key of filterKeys){
            if(filterInfo[key]!=item[key]){
                flag = false;
                break;
            }
        }
        return flag;
    })

}
function getSearchResultInfo(state,searchInfo){
    let newList = filterSearchDataBySearchInfo(searchInfo);;
    return {
        ...state,
        searchInfo,
        searchData:{list:newList}
    };
}

function searchResultReducer(state = initialState, action){
    switch (action.type){
        case 'search':
            return getSearchResultInfo(state,action.searchInfo);
        default:
            return state;
    }
}

export default createReducers("searchResult", searchResultReducer, initialState );