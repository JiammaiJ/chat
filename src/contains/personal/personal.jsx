import React from 'react'
import {
    Result,
    List,
    Button,
    WhiteSpace,
    WingBlank,
    Modal
} from 'antd-mobile'
import Cookie from 'js-cookie'
import {connect} from 'react-redux'
import {loginout} from '../../store/action'
const Item = List.Item
const Brief = Item.Brief;
class Personal extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    loginOut = () => {
        Modal.alert('退出', '确定退出登陆吗?', [
            {text: '取消'},
            {
              text: '确定',
              onPress: ()=> {
                  Cookie.remove('userid')
                  this.props.loginout()
              }
            }
          ])
    }
    render() {
        const { user } = this.props
       return(
           <div style={{marginTop:'50px',marginBottom:'50px'}}>
               <Result 
                    img={user.header?<img src={require(`../../assets/img/${user.header}.png`)} alt="img" style={{width:'50px',height:'50px'}} />:null}
                    title={user.username}
                    message={user.company?<div>{user.company}</div>:null}
               />
                <List renderHeader={() => '基本信息'}>
                        <Item>
                            {user.company?<Brief>公司:{user.company}</Brief>:null}
                            {user.salary?<Brief>薪资:{user.salary}</Brief>:null}
                            {user.post?<Brief>岗位:{user.post}</Brief>:null}
                            {user.skill?<Brief>技能:{user.skill}</Brief>:null}
                        </Item>
                </List>
                <WingBlank>
                    <WhiteSpace />
                    <Button type="warning" onClick={this.loginOut}>退出登入</Button>
                </WingBlank>
           </div>
       )
    }
}

export default connect(
    state => ({user:state.user}),
    {loginout}
)(Personal)