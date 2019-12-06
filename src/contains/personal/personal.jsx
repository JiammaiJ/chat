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
       return(
           <div style={{marginTop:'50px',marginBottom:'50px'}}>
               <Result 
                    img={<img src={require('../../assets/img/h4.png')} alt="img" style={{width:'50px',height:'50px'}} />}
                    title="jober1"
                    message={<div>compony</div>}
               />
                <List renderHeader={() => '基本信息'}>
                        <Item>
                            <Brief>1:123</Brief>
                            <Brief>1:123</Brief>
                            <Brief>1:123</Brief>
                            <Brief>1:123</Brief>
                            <Brief>1:123</Brief>
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
    state => ({}),
    {loginout}
)(Personal)