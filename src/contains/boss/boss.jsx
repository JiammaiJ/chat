import React from 'react'
import {
    WingBlank,
    WhiteSpace,
    Card
} from 'antd-mobile'
import bossStyle from './boss.module.css'
import {connect} from 'react-redux'
import {getUserList} from '../../store/action'
class Boss extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    componentDidMount() {
        this.props.getUserList({type:'jober'})
    }
    componentDidUpdate() {
        
    }
    render(){
        const content = this.props.userlist.map(item => {
            return (
                <div key={item._id}>
                    <WhiteSpace />
                    <Card onClick={() => {this.props.history.push(`/chat/${item._id}`)}}>
                        <Card.Header
                            thumb={require(`../../assets/img/${item.header}.png`)}
                            extra={<span>{item.username}</span>}
                            className={bossStyle.c_header}
                        />
                        <Card.Body>
                            {item.post?<div>职位:{item.post}</div>:null}
                            {item.skill?<div>技能:{item.skill}</div>:null}
                            {item.salary?<div>期望薪水:{item.salary}</div>:null}
                        </Card.Body>
                    </Card>
                </div>
            )
        })
        return (
            <div>
                    <WingBlank style={{marginTop:'50px',marginBottom:'50px'}}>
                        {content}
                    </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({userlist:state.userlist}),
    {getUserList}
)(Boss)