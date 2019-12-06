import React from 'react'
import {
    InputItem,
    Flex,
} from 'antd-mobile'
import Header from '../../components/header/header'
import './chat.css'
import {sendMsg} from '../../store/action'
import {connect} from 'react-redux'
class Chat extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content:''
        }
    }
    componentDidMount() {
        console.log(this.props.chat)
        window.scrollTo(0, document.body.scrollHeight)
    }
    componentDidUpdate(){
        window.scrollTo(0, document.body.scrollHeight)
    }
    sendHandle = () => {
        const content = this.state.content;
        const from = this.props._id;
        const to = this.props.match.params.id
        this.props.sendMsg({content,from,to})
        this.setState({
            content:''
        })
    }
    render() {
        // problem：当刷新的时候，由于是redux异步获取数据,先是main界面去getuser的同时去执行了InitGetMsg
        // 但是第一次render的时候，数据还没有拿到，所以会报错，因此先判断数据是否存在，如果不存在，return null
        const userid = this.props._id
        const otherOneId = this.props.match.params.id
        if(!this.props.chat.users[userid]){
            return null
        }
        const chat_id = [userid,otherOneId].sort().join('_')
        // 筛选和当前用户相关的chat message
        const currentMsgs = this.props.chat.data.filter(item => item.chat_id === chat_id)
        // 头像问题{1：从用户列表users中找出头像对应的静态图片2：require获取图片}
        const otherOneHeader = this.props.chat.users[otherOneId].header
        const meHeader = this.props.chat.users[userid].header
        const otherOneImg = require(`../../assets/img/${otherOneHeader}.png`)
        const meHeaderImg = require(`../../assets/img/${meHeader}.png`)
        console.log(otherOneHeader)
        const content=currentMsgs.map(item => {
            if(userid===item.from){
                return (
                    <Flex.Item style={{width:'100%'}} key={item._id}>
                        <div className="chat_right">
                            <div>
                                <p>{item.content}</p>
                            </div>
                            <div>
                                <img src={meHeaderImg} alt="img" />
                            </div>
                        </div>
                    </Flex.Item>
                )
            }else{
                return (
                    <Flex.Item style={{width:'100%'}} key={item._id}>
                        <div className="chat_left">
                            <div><img src={otherOneImg} alt="img" /></div>
                            <div>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    </Flex.Item>
                )
            }
        })
        return (
            <div>
                <Header title="chat" />
                
                <Flex style={{marginTop:'50px',marginBottom:'50px'}} direction="column" align="start" >
                    {content}
                </Flex>

                <div style={{position:'fixed',left:'0',bottom:'0',width:'100%'}}>
                    <InputItem
                        placeholder="send message"
                        value={this.state.content}
                        onChange={(val) => {this.setState({content:val})}}
                        extra={
                            <div>
                                <span style={{marginRight:'20px'}}>O</span>
                                <span onClick={this.sendHandle}>send</span>
                            </div>
                        }
                    />
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({_id:state.user._id,chat:state.chat}),
    {sendMsg}
)(Chat)