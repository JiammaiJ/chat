import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import BossInfo from '../boss-info/boss-info'
import JoberInfo from '../jober-info/jober-info'
import Cookie from 'js-cookie'
import {getUser} from '../../store/action' 
import judgePath from '../../util/index'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

// page
import Jober from '../../contains/jober/jober'
import Boss from '../../contains/boss/boss'
import Message from '../message/message'
import Personal from '../personal/personal'
import Chat from '../chat/chat'
// import NotFound from '../../components/404/404not_found'
class Main extends React.Component {
    constructor(props){
        super(props)
        this.state={
            navList:[
                {
                    title:'职位列表',
                    icon:require('../../assets/img/home.png'),
                    selectedIcon:require('../../assets/img/home-selected.png'),
                    selected:'/jober',
                    show:true,
                    component:Jober
                },
                {
                    title:'求职列表',
                    icon:require('../../assets/img/home.png'),
                    selectedIcon:require('../../assets/img/home-selected.png'),
                    selected:'/boss',
                    show:true,
                    component:Boss
                },
                {
                    title:'消息',
                    icon:require('../../assets/img/message.png'),
                    selectedIcon:require('../../assets/img/message-selected.png'),
                    selected:'/message',
                    show:true,
                    component:Message
                },
                {
                    title:'个人',
                    icon:require('../../assets/img/personal.png'),
                    selectedIcon:require('../../assets/img/personal-selected.png'),
                    selected:'/personal',
                    show:true,
                    component:Personal
                }
            ]
        }
    }
    componentDidMount() {
        const userid = Cookie.get('userid')
        const {_id} = this.props.user
        if(userid && !_id){
            this.props.getUser()
        }
    }
    render() {
        const userid = Cookie.get('userid')
        const {header,type,_id} = this.props.user
        const {navList} = this.state
        let path = this.props.location.pathname
        if(!userid){
            return <Redirect to="/userlogin" />
        }
        if(!_id){
            return null
        }else {
            if(path==='/') {
                path = judgePath(type, header)
                return <Redirect to={path} />
            }
        }
        if(type === 'jober'){
            navList[1].show=false;
        }else if(type === 'boss'){
            navList[0].show=false;
        }
        const h_f_show = navList.find(item => item.selected===path)
        return (
            <div>
                {
                    h_f_show?<Header title={h_f_show.title} />:null
                }
                <Switch>
                    {/* <Route component={NotFound} /> */}
                    {navList.filter(item => item.show).map(item => {
                        return <Route key={item.title} path={item.selected} component={item.component} />
                    })}
                    <Route path="/bossinfo" component={BossInfo} />
                    <Route path="/joberinfo" component={JoberInfo} />
                    <Route path="/chat/:id" component={Chat} />
                </Switch>
                {
                    h_f_show?<Footer navList={navList} unRead={this.props.unRead} />:null
                }
            </div>
        )
    }
}

export default connect(
    state => ({user:state.user,unRead:state.chat.unRead}),
    {getUser}
)(Main)