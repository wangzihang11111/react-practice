import { connect } from 'react-redux';
import SearchResult from '../components/searchResult/searchResult.jsx'
import {concatPageAndType} from '../redux/action/actionCreator';

const createActions = concatPageAndType('searchResult');
function mapStateToProps(state) {
    return {
        ...state.searchResult
    }
}

function mapDispatchToProps(dispatch) {
    return {
        search: (searchInfo) => dispatch(createActions('search',{searchInfo}))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResult);