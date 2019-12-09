import React from 'react'

// components 
import Logo from '../../components/logo/logo'

// antd-mobile
import {
    NavBar,
    WhiteSpace,
    InputItem,
    WingBlank,
    Button,
    Toast
} from 'antd-mobile'

// assets 
import loginImg from '../../assets/img/login.png'

// redux
import {connect} from 'react-redux'
import {login} from '../../store/action'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.msg!==this.props.msg){
            Toast.info(this.props.msg,1.5,() => {
                if(this.props._id){
                    this.props.history.replace('/')
                }
            })
        }
    }
    changeHandle =(val,type) => {
        this.setState({
            [type]:val
        })
    }
    loginHandle = () => {
        this.props.login(this.state)
    }
    goRegister = () => {
        console.log(this.props)
        this.props.history.replace('/userregister')
    }
    render() {
        return (
            <div>
                <NavBar>login</NavBar>
                <WhiteSpace />
                <Logo img={loginImg} />
                <WingBlank>
                    <InputItem
                        placeholder="请输入账号"
                        type="text"
                        onChange={val => {this.changeHandle(val,'username')}}
                    />
                    <WhiteSpace />
                    <InputItem 
                        placeholder="请输入密码"
                        type="password"
                        onChange={val => {this.changeHandle(val,'password')}}
                    />
                    <WhiteSpace />
                    <Button type="primary" onClick={this.loginHandle}>登入</Button>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.goRegister}>点我去注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({msg:state.user.msg,_id:state.user._id}),
    {login}
)(Login)