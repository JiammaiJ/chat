import React from 'react'
import {
    List,
    Badge 
} from 'antd-mobile'
import  messageStyle from './message.module.css'
const Item = List.Item
const Brief = Item.Brief
class Message extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return (
            <div style={{marginTop:'50px',marginBottom:'50px'}}>
                <List>
                    <Item   extra={<Badge text={1} />} 
                            align="middle" 
                            thumb={require('../../assets/img/h3.png')} 
                            multipleLine
                            arrow="horizontal"
                            className={messageStyle.rew_Item}
                    >
                        content 
                        <Brief>jober1</Brief>
                    </Item>
                    <Item   extra={<Badge text={1} />} 
                            align="middle" 
                            thumb={require('../../assets/img/h3.png')} 
                            multipleLine
                            arrow="horizontal"
                            className={messageStyle.rew_Item}
                    >
                        content 
                        <Brief>jober1</Brief>
                    </Item>
                    <Item   extra={<Badge text={1} />} 
                            align="middle" 
                            thumb={require('../../assets/img/h3.png')} 
                            multipleLine
                            arrow="horizontal"
                            className={messageStyle.rew_Item}
                    >
                        content 
                        <Brief>jober1</Brief>
                    </Item>
                    <Item   extra={<Badge text={1} />} 
                            align="middle" 
                            thumb={require('../../assets/img/h3.png')} 
                            multipleLine
                            arrow="horizontal"
                            className={messageStyle.rew_Item}
                    >
                        content 
                        <Brief>jober1</Brief>
                    </Item>
                    <Item   extra={<Badge text={1} />} 
                            align="middle" 
                            thumb={require('../../assets/img/h3.png')} 
                            multipleLine
                            arrow="horizontal"
                            className={messageStyle.rew_Item}
                    >
                        content 
                        <Brief>jober1</Brief>
                    </Item>
                    <Item   extra={<Badge text={1} />} 
                            align="middle" 
                            thumb={require('../../assets/img/h3.png')} 
                            multipleLine
                            arrow="horizontal"
                            className={messageStyle.rew_Item}
                    >
                        content 
                        <Brief>jober1</Brief>
                    </Item>
                    <Item   extra={<Badge text={1} />} 
                            align="middle" 
                            thumb={require('../../assets/img/h3.png')} 
                            multipleLine
                            arrow="horizontal"
                            className={messageStyle.rew_Item}
                    >
                        content 
                        <Brief>jober1</Brief>
                    </Item>
                    <Item   extra={<Badge text={1} />} 
                            align="middle" 
                            thumb={require('../../assets/img/h3.png')} 
                            multipleLine
                            arrow="horizontal"
                            className={messageStyle.rew_Item}
                    >
                        content 
                        <Brief>jober1</Brief>
                    </Item>
                    <Item   extra={<Badge text={1} />} 
                            align="middle" 
                            thumb={require('../../assets/img/h3.png')} 
                            multipleLine
                            arrow="horizontal"
                            className={messageStyle.rew_Item}
                    >
                        content 
                        <Brief>jober1</Brief>
                    </Item>
                </List>
            </div>
        )
    }
}

export default Message