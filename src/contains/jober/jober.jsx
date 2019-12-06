import React from 'react'
import {
    Card, WingBlank, WhiteSpace
} from 'antd-mobile'
import joberStyle from './jober.module.css'
import {getUserList} from '../../store/action'
import {connect} from 'react-redux'
class Jober extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    componentDidMount() {
        this.props.getUserList({type:'boss'});
    }
    componentDidUpdate() {
    }
    render() {
        const content = this.props.userlist.map(item => {
            return (
                <div key={item._id}>
                    <WhiteSpace />
                    <Card onClick={() => {this.props.history.push(`/chat/${item._id}`)}}>
                        <Card.Header
                            thumb={require(`../../assets/img/${item.header}.png`)}
                            extra={<span>{item.username}</span>}
                            className={joberStyle.c_header}
                        />
                        <Card.Body>
                            {item.post?<div>职位:{item.post}</div>:null}
                            {item.company?<div>公司:{item.company}</div>:null}
                            {item.salary?<div>月薪:{item.salary}</div>:null}
                            {item.skill?<div>技能:{item.skill}</div>:null}
                        </Card.Body>
                    </Card>
                </div>
            )
        })
        return (
            <div style={{marginBottom:'50px',marginTop:'50px'}}>
                <WingBlank>
                    {content}
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({userlist:state.userlist}),
    {getUserList}
)(Jober)