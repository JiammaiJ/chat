
import {
    AUTH_SUCCESS,
    ERR_MESSAGE,
    UPDATE_INFO
} from './action-type'

// api
import {
    reqLogin,
    reqRegister,
    reqUpdate,
    reqGetUser
} from '../api/index'


// err toast
    export const errmsg =(data) => ({type:ERR_MESSAGE,data:data})
// auth_success 
    export const authsuccess = (data) => ({type:AUTH_SUCCESS,data:data})
// update_info
    export const updateinfo = (data) => ({type:UPDATE_INFO,data:data})


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
            return errmsg('请正确完善信息')
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
                return dispatch(authsuccess(result))
            }else if(result.code === 1){
                return dispatch(errmsg(result.msg))
            }
        }
    }