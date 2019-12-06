import React from 'react'
import {
    NavBar
} from 'antd-mobile'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return (
            <NavBar style={{
                position:'fixed',
                left:'0',
                top:'0',
                width:'100%',
                height:'45px',
                zIndex:'11'
            }}>{this.props.title}</NavBar>
        )
    }
}

export default Header