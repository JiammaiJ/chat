
import ajax from './ajax'

// login 登入
export const reqLogin = (data) => ajax('/login',data,'POST')
// register 注册
export const reqRegister = (data) => ajax('/register',data,'POST')
// update 更新用户信息
export const reqUpdate = (data) => ajax('/update',data,'POST')
// userinfo 根据cookie获取用户信息
export const reqGetUser = () => ajax('/userinfo')
// userlist 获取用户对应需要展示的jober或者Boss列表数据
export const reqGetUserList = (type) => ajax('/userlist',type)
// msglist 获取聊天信息和用户列表
export const reqGetMsgList =() => ajax('/msglist')