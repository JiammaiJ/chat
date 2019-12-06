import React from 'react'
import {withRouter} from 'react-router-dom'
import {
    TabBar 
} from 'antd-mobile'
import  footerStyle from './footer.module.css'
class Footer extends React.Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    render() {
        const path = this.props.location.pathname
        const content = this.props.navList.filter(item => item.show).map(item => {
            return (
                <TabBar.Item
                    key={item.title}
                    title={item.title}
                    icon={{uri:item.icon}}
                    selectedIcon={{uri:item.selectedIcon}}
                    selected={path===item.selected}
                    onPress={ () => {this.props.history.replace(item.selected)} }
                >
                </TabBar.Item>
            )
        })  
        return (
            <div className={footerStyle.fixed}>
                <TabBar>
                    {content}
                </TabBar>

            </div>
        )
    }
}

export default withRouter(Footer)