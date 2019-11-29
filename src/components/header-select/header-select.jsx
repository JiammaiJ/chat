import React from 'react'
// antd design mobile
import {
    Grid
} from 'antd-mobile'
// style
import headerStyle from './header-select.module.css'

class HeaderSelect extends React.Component {
    constructor(props){
        super(props)
        this.state={
            icon:null
        }   
    }
    headerClick = (el,number) => {
        console.log(el,number)
        this.setState({
            icon:el.icon
        })
        this.props.setHeader(`h${number+1}`)
    }
    render() {
        const data=Array.from(new Array(6)).map((item,index) => ({
            icon:require(`../../assets/img/h${index+1}.png`)
        }))
        return (
            <div>
                <Grid data={data} columnNum="3" onClick={this.headerClick} />
                {
                    this.state.icon?
                    <div className={headerStyle.header}>
                        <p>已选头像:</p>
                        <img src={this.state.icon} alt="header-img" />
                    </div>
                    :null
                }
            </div>
        )
    }
}

export default HeaderSelect