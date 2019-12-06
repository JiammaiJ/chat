import React from 'react'

class NotFound extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return (
            <div style={{Zindex:'-1'}}>
                <h1>route is 404 not found</h1>
            </div>
        )
    }
}

export default NotFound