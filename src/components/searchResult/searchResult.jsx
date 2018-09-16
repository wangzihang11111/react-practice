import React,{Component} from 'react';
import {Button,Input,InputNumber,Select,Table} from 'antd';
import '../../scss/searchResult.scss'
import {columnsData,selectData} from "../../filters/data";

class SearchResult extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let {search,searchData} = this.props;
        return (
            <div data-page="searchResult">
                <SelectCondition search={search}/>
                <SelectContent searchData={searchData}/>
            </div>
        );
    }
}
class SelectCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            urgency: "",
            address: "",
            oddNumber:"",
            approvalStatus:""
        };
        this.search = this.search.bind(this);
        this.reset = this.reset.bind(this);
    }
    changeValue(value,type){
        this.setState({
            [type]:value.target?value.target.value:value
        })
    }
    search(){
        this.props.search(this.state);
    }
    reset(){
        this.setState({
            name: "",
            urgency: "",
            address: "",
            oddNumber:"",
            approvalStatus:""
        },()=>{
            this.search();
        })
    }
    render() {
        return (
            <div className="search-condition-container">
                <ul>
                    <li className="search-condition-item">
                        <div className="item-name"><span>提交人：</span></div>
                        <div className="item-content"><Input ref="name" placeholder="请输入内容" onChange={(e)=>{this.changeValue(e,'name')}} value={this.state.name}/></div>
                    </li>
                    <li className="search-condition-item">
                        <div className="item-name"><span>紧急度：</span></div>
                        <div className="item-content"><InputNumber ref="urgency" style={{width:'100%'}} min={1} max={10} placeholder="请输入内容" onChange={(e)=>{this.changeValue(e,'urgency')}} value={this.state.urgency}/></div>
                    </li>
                    <li className="search-condition-item">
                        <div className="item-name"><span>位置信息：</span></div>
                        <div className="item-content">
                            <Select ref="address" style={{width:'100%'}}  onChange={(e)=>{this.changeValue(e,'address')}} value={this.state.address}>
                                {
                                    selectData.map(function(item,index){
                                        return <Select.Option key={index} value={item.id}>{item.name}</Select.Option>
                                    })
                                }
                            </Select>
                        </div>
                    </li>
                    <li className="search-condition-item">
                        <div className="item-name"><span>单号：</span></div>
                        <div className="item-content"><Input ref="oddNumber" placeholder="请输入内容"  onChange={(e)=>{this.changeValue(e,'oddNumber')}} value={this.state.oddNumber}/></div>
                    </li>
                    <li className="search-condition-item">
                        <div className="item-name"><span>审批状态：</span></div>
                        <div className="item-content"><Input ref="approvalStatus" placeholder="请输入内容"  onChange={(e)=>{this.changeValue(e,'approvalStatus')}} value={this.state.approvalStatus}/></div>
                    </li>
                    <li className="search-condition-item search-action-button">
                        <Button type="primary" onClick={this.search}>搜索</Button>
                        <Button style={{marginLeft:10}} onClick={this.reset}>重置</Button>
                    </li>
                </ul>
            </div>
        );
    }
}
class SelectContent extends Component {
    constructor(props){
        super(props);
    }
    formatAddress(address){
        let addressName = '';
        for(let item of selectData){
            if(item.id==address){
                addressName = item.name;
                break;
            }
        }
        return addressName;
    }
    formatList(list){
        return list.map((item)=>{
            let addressText = this.formatAddress(item.address);
            return {...item,address:addressText}
        })
    }
    render() {
        let list = this.formatList(this.props.searchData.list)
        return (
            <div className="container">
                <Table dataSource={list} columns={columnsData} pagination={{pageSize:5}}/>
            </div>
        );
    }
}

export default SearchResult;