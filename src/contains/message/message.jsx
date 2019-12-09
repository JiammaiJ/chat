import React from 'react'
import {
    List,
    Badge 
} from 'antd-mobile'
import  messageStyle from './message.module.css'
import {connect} from 'react-redux'
const Item = List.Item
const Brief = Item.Brief
class Message extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        // 展示当前用户和其它用户的聊天列表，通过time排序展示
        // 1：从redux管理的chat中filter出当前用户和其它用户的最后一条聊天信息
        // 2：filter出来的数据在排序，根据time
        // 3：还需要冲chat里面根据Id从users里面查询出header,username
        // 4:未读消息怎么显示，怎么判断和修改，肯定是每组里面分开
        // {from,to,content,chat_id,read,time} =====>[{1},{2},{3}] ==> {_id}
        const {data,users} = this.props.chat
        const _id = this.props._id
        const filterMsg = () => {
            const msgs={}
            data.forEach(item => {
                const otherOneId = _id===item.from?item.to:item.from
                const chat_id = [_id,otherOneId].sort().join('_')
                item.unRead = item.to===_id&&!item.read?1:0
                if(!msgs[chat_id]){
                    msgs[chat_id] = item
                }else{
                    // 比较后台保存的时间time
                    const unRead = msgs[chat_id].unRead + item.unRead;
                    if(item.time > msgs[chat_id].time){
                        msgs[chat_id] = item
                    }
                    msgs[chat_id].unRead = unRead
                }
            })
            const msgsArr = Object.values(msgs);
            msgsArr.sort((m1,m2) => m2.time-m1.time)
            return msgsArr;
        }
        const content = filterMsg().map(item => {
            const otherOneId = _id === item.from?item.to:item.from
            const otherOneHeader = users[otherOneId].header
            const otherOneName = users[otherOneId].username
            return (
                <Item   
                    extra={<Badge text={item.unRead} />} 
                    align="middle" 
                    thumb={require(`../../assets/img/${otherOneHeader}.png`)} 
                    multipleLine
                    arrow="horizontal"
                    className={messageStyle.rew_Item}
                    key={item.chat_id}
                    onClick={() => {this.props.history.push(`/chat/${otherOneId}`)}}
                >
                {item.content} 
                <Brief>{otherOneName}</Brief>
                </Item>
            )
        })
        return (
            <div style={{marginTop:'50px',marginBottom:'50px'}}>
                <List>
                    {content}
                </List>
            </div>
        )
    }
}

export default connect(
    state => ({
        _id:state.user._id,
        header:state.user.header,
        chat:state.chat
    }),
    {}
)(Message)