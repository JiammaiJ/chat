import React from 'react'

// components 
import Logo from '../../components/logo/logo'

// antd-mobile
import {
    NavBar,
    WhiteSpace,
    WingBlank,
    InputItem,
    Radio,
    Flex,
    Button,
    Toast
} from 'antd-mobile'

// style
import registerStyle from './register.module.css'
import registerImg from '../../assets/img/register.png'

// redux
import {connect} from 'react-redux'
import {register} from '../../store/action'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password1:'',
            password2:'',
            type:''
        }
    }
    componentDidUpdate(prevProps,prevState){
        
        const {type,msg} = this.props.user
        if(prevProps.user.msg!==msg){
            Toast.info(msg,1.5,() => {
                if(type==='jober'){
                    this.props.history.replace('/joberinfo')
                }else if(type==='boss'){
                    this.props.history.replace('/bossinfo')
                }
            })
        }
    }
    changeHandle =(val,type) => {
        this.setState({
            [type]:val
        })
    }
    registerHandle = () => {
        this.props.register(this.state)
    }
    goLogin = () => {
        this.props.history.replace('/login')
    }
    render() {
        return (
            <div>
                <NavBar>register</NavBar>
                <WhiteSpace />
                <Logo img={registerImg} />
                <WhiteSpace />
                <WingBlank>
                    <InputItem 
                        type="text" 
                        placeholder="请输入账号" 
                        onChange={val => {this.changeHandle(val,'username')}}
                    />
                    <WhiteSpace />
                    <InputItem 
                        type="password" 
                        placeholder="请输入密码"
                        onChange={val => {this.changeHandle(val,'password1')}} 
                    />
                    <WhiteSpace />
                    <InputItem 
                        type="password" 
                        placeholder="请确认密码"
                        onChange={val => {this.changeHandle(val,'password2')}} 
                    />
                    <WhiteSpace />
                    <Flex justify="center">
                        <Flex.Item>
                            <Radio 
                                className={registerStyle.radio}
                                checked={this.state.type==='jober'?true:false}
                                onChange={() => {this.changeHandle('jober','type')}}
                            >Jober
                            </Radio>
                        </Flex.Item>
                        <Flex.Item>
                            <Radio 
                                className={registerStyle.radio}
                                checked={this.state.type==='boss'?true:false}
                                onChange={() => {this.changeHandle('boss','type')}}
                            >Boss
                            </Radio>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.registerHandle}>注册</Button>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.goLogin}>已有账号,去登入</Button>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({
        user:state.user
    }),
    {register}
)(Register)