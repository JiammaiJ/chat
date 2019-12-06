import io from 'socket.io-client'
import {
    AUTH_SUCCESS,
    ERR_MESSAGE,
    UPDATE_INFO,
    LOGIN_OUT,
    GET_USERLIST,
    INIT_CHAT,
    NEW_CHAT
} from './action-type'

// api
import {
    reqLogin,
    reqRegister,
    reqUpdate,
    reqGetUser,
    reqGetUserList,
    reqGetMsgList
} from '../api/index'


// err toast
    export const errmsg =(data) => ({type:ERR_MESSAGE,data:data})
// auth_success 
    export const authsuccess = (data) => ({type:AUTH_SUCCESS,data:data})
// update_info
    export const updateinfo = (data) => ({type:UPDATE_INFO,data:data})
// 推出登入
    export const loginout = () => ({type:LOGIN_OUT})

// 获取对应用户列表
    export const getuserlist = (data) => ({type:GET_USERLIST,data:data})

// 初始化聊天数据存储
    export const initchat = (data) => ({type:INIT_CHAT,data:data})
// new chat
    export const newchat = (data) => ({type:NEW_CHAT,data:data})
// login action
    export const login = (data) => {
        const {username,password} = data
        if(!username){
            return errmsg('请正确输入账号')
        }else if (!password){
            return errmsg('密码不能为空')
        }else {
            return async dispatch => {
                const response = await reqLogin({username,password})
                const result = response.data
                if(result.code===1){
                    dispatch(errmsg(result.msg))
                }else if(result.code===0){
                    initGetMsg(dispatch,result.data._id)
                    dispatch(authsuccess(result))
                }
            }
        }
    }  
// register action
    export const register = (data) => {
        const {username,password1,password2,type} = data
        if(!username){
            return errmsg('请正确输入要注册的账号')
        }else if(!password1 || !password2){
            return errmsg('请输入密码')
        }else if(password1!==password2){
            return errmsg('两次输入的密码不一致')
        }else if(!type){
            return errmsg('请正确选择注册类型')
        }else {
            return async dispatch => {
                const response = await reqRegister({username,type,password:password1})
                const data=response.data
                if(data.code===0){
                    initGetMsg(dispatch,data.data._id)
                    return dispatch(authsuccess(data))
                }else if(data.code===1){
                    return dispatch(errmsg(data.msg))
                }else {
                    return dispatch(errmsg('未知错误'))
                }
            }
        }
    }

// update action
    export const update=(data) => {
        const {post,header,skill} = data
        if(!post || !header || !skill){
            return errmsg('信息不完善')
        }else {
            return async dispatch => {
                const response = await reqUpdate(data)
                const result = response.data
                if(result.code===1){
                    dispatch(errmsg('保存失败'))
                }else if(result.code===0){
                    dispatch(updateinfo(result.data))
                }
            }
        } 
    } 

// get user info
    export const getUser = () => {
        return async dispatch => {
            const response = await reqGetUser()
            const result = response.data
            if(result.code === 0){
                initGetMsg(dispatch,result.data._id)
                return dispatch(authsuccess(result))
            }else if(result.code === 1){
                return dispatch(errmsg(result.msg))
            }
        }
    }

// 获取对应需要展示的用户列表
    export const getUserList = (type) => {
        return async dispatch => {
            const response = await reqGetUserList(type)
            const result = response.data
            if(result.code === 0){
                return dispatch(getuserlist(result.data))
            }
        }
    }

// 初始化socket.io
    function initIO(dispatch,userid) {
        if(!io.socket){
            io.socket = io('ws://192.168.6.177:5000')
            io.socket.on('receiveMsg',(data) => {
                if(userid === data.from || userid === data.to){
                    dispatch(newchat(data))
                }
                console.log(data)
            })
        }
    }
// chat页面发送消息的action
    export const sendMsg = (data) => {
        return dispatch => {
            io.socket.emit('sendMsg',data)
        }
    }

// 初始化的同时,获取和当前Id相关的聊天信息
async function initGetMsg(dispatch,userid) {
    initIO(dispatch,userid)
    const response = await reqGetMsgList()
    const result = response.data
    return dispatch(initchat(result.data))
}