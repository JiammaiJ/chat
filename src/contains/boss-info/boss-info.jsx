import React from 'react'
import {
    NavBar,
    WingBlank,
    WhiteSpace,
    InputItem,
    Button,
    Toast
} from 'antd-mobile'
import {connect} from 'react-redux'
import {update} from '../../store/action'
import HeaderSelect from '../../components/header-select/header-select'
import {Redirect} from 'react-router-dom'
class BossInfo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            post:'',
            salary:'',
            company:'',
            skill:'',
            header:''
        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps.msg!==this.props.msg){
            Toast.info(this.props.msg)
        }
    }
    changeHandle = (val,type) => {
        this.setState({
            [type]:val
        })
    }
    save = () => {
        this.props.update(this.state)
    }
    setHeader = (header) => {
        this.setState({
            header
        })
    }
    render() {
        const {header} = this.props;
        if(header){
            return <Redirect to="/" />
        }
        return (
            <div>
                <NavBar>完善信息</NavBar>
                <WhiteSpace />
                <WingBlank>
                    <HeaderSelect setHeader={this.setHeader}/>
                    <WhiteSpace />
                    <InputItem placeholder="请输入招聘岗位" onChange={(val) => {this.changeHandle(val,'post')}}>招聘岗位:</InputItem>
                    <WhiteSpace />
                    <InputItem placeholder="岗位薪资" onChange={val => {this.changeHandle(val,'salary')}}>薪资:</InputItem>
                    <WhiteSpace />
                    <InputItem placeholder="公司" onChange={val => {this.changeHandle(val,'company')}}>公司:</InputItem>
                    <WhiteSpace />
                    <InputItem placeholder="技能要求" onChange={val => {this.changeHandle(val,'skill')}}>技能要求:</InputItem>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.save}>保存</Button>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({msg:state.user.msg,header:state.user.header}),
    {update}
)(BossInfo)