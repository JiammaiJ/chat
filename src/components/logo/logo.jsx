import React from 'react'

// assets
// import loginImg from '../../assets/img/login.png'

// style
import logoStyle from './logo.module.css'

class Logo extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
    }
    render() {
        return (
            <div className={logoStyle.logo}>
                <img src={this.props.img} alt="login img" />
            </div>
        )
    }
}

export default Logo