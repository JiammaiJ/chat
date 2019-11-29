import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import 'lib-flexible/flexible'
import App from './contains/app/app'

// redux
import {Provider} from 'react-redux'
import store from './store/store'

ReactDOM.render(
    (
        <Provider store={store}> 
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    ),
    document.querySelector('#root')
)