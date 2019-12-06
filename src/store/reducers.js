
// redux
import {combineReducers} from 'redux'

import {
    AUTH_SUCCESS,
    ERR_MESSAGE,
    UPDATE_INFO,
    LOGIN_OUT,
    GET_USERLIST,
    INIT_CHAT,
    NEW_CHAT
} from './action-type'

// user reducers 用户信息管理
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
            case LOGIN_OUT:
                return {...initUser}
            default :
                return {...state}
        }
    }

// 用户对应的列表数据
const initUserList=[]
    const userlist = (state=initUserList,action) => {
        switch(action.type){
            case GET_USERLIST:
                return action.data
            default:
                return state
        }
    }

// 当前用户的聊天信息管理
const initChat={
    data:[],
    users:{},
    unRead:0
}
    const chat = (state=initChat,action) => {
        switch(action.type){
            case INIT_CHAT:
                return {
                    data:action.data.data,
                    users:action.data.users,
                    unRead:0
                }
            case NEW_CHAT:
                return {
                    data:[...state.data,action.data],
                    users:state.users,
                    unRead:state.unRead
                }
            default :
            return state
        }
    }

export default combineReducers({
    user,
    userlist,
    chat
})