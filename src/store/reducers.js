
// redux
import {combineReducers} from 'redux'

import {
    AUTH_SUCCESS,
    ERR_MESSAGE,
    UPDATE_INFO
} from './action-type'

// user reducers
    const initUser={
        username:'',
        type:'',
        msg:'',
        _id:'',
        header:'',
        post:'',
        salary:'',
        company:'',
        skill:''
    }
    const user = (state=initUser,action) => {
        switch(action.type){
            case AUTH_SUCCESS :
                return {...state,...action.data.data,msg:action.data.msg}
            case ERR_MESSAGE :
                return {...state,msg:action.data}
            case UPDATE_INFO:
                return {...state,...action.data}
            default :
                return {...state}
        }
    }

export default combineReducers({
    user
})