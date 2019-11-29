import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Jober from '../../contains/jober/jober'
import Boss from '../../contains/boss/boss'
import BossInfo from '../boss-info/boss-info'
import JoberInfo from '../jober-info/jober-info'
import Cookie from 'js-cookie'
import {getUser} from '../../store/action' 
import judgePath from '../../util/index'
class Main extends React.Component {
    constructor(props){
        super(props)
        this.state={}
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
        let path = this.props.location.pathname
        if(!userid){
            return <Redirect to="/login" />
        }
        if(!_id){
            return null
        }else {
            console.log(this.props.user)
            if(path==='/') {
                path = judgePath(type, header)
                console.log(path)
            }
        }
        return (
            <Switch>
                <Route path="/jober" component={Jober} />
                <Route path="/boss" component={Boss} />
                <Route path="/bossinfo" component={BossInfo} />
                <Route path="/joberinfo" component={JoberInfo} />
                <Redirect to={path} />
            </Switch>
        )
    }
}

export default connect(
    state => ({user:state.user}),
    {getUser}
)(Main)