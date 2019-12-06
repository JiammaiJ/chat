import React from 'react'
import {
    NavBar,
    WhiteSpace,
    WingBlank,
    InputItem,
    TextareaItem,
    Button,
    Toast 
} from 'antd-mobile'
import HeaderSelect from '../../components/header-select/header-select'
import {connect} from 'react-redux'
import {update} from '../../store/action'
import {Redirect} from 'react-router-dom'
class JoberInfo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            header:'',
            post:'',
            skill:''
        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps.msg!==this.props.msg){
            Toast.info(this.props.msg)
        }
    }
    setHeader = (header) => {
        this.setState({
            header
        })
    }
    changeHandle =(val,type) => {
        this.setState({
            [type]:val
        })
    }
    save = () => {
        this.props.update(this.state)
        console.log(1)
    }
    render() {
        const {header} =this.props.user
        if(header) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <NavBar>完善信息</NavBar>
                <WhiteSpace />
                <WingBlank>
                    <HeaderSelect setHeader={this.setHeader} />
                    <WhiteSpace />
                    <InputItem placeholder="岗位" onChange={val => {this.changeHandle(val,'post')}}>求职岗位</InputItem>
                    <WhiteSpace />
                    <InputItem placeholder="薪资" onChange={val => {this.changeHandle(val,'salary')}}>期望薪资</InputItem>
                    <WhiteSpace />
                    <TextareaItem 
                        title="掌握技能"
                        rows="3"
                        onChange={val => {this.changeHandle(val,'skill')}}
                    />
                    <WhiteSpace />
                    <Button type="primary" onClick={this.save}>保存</Button>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({user:state.user,msg:state.user.msg}),
    {update}
)(JoberInfo)