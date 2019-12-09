import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Main from '../main/main'
import Login from '../login/login'
import Register from '../register/register'
// import BossInfo from '../boss-info/boss-info'
// import JoberInfo from '../jober-info/jober-info'
class App extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return (
            <Switch>
                <Route path="/userlogin" component={Login} />
                <Route path="/userregister" component={Register} />
                <Route component={Main} />
            </Switch>
        )
    }
}

export default App