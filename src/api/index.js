
import ajax from './ajax'

// login 登入
export const reqLogin = (data) => ajax('/api/login',data,'POST')
// register 注册
export const reqRegister = (data) => ajax('/api/register',data,'POST')
// update 更新用户信息
export const reqUpdate = (data) => ajax('/api/update',data,'POST')
// userinfo 根据cookie获取用户信息
export const reqGetUser = () => ajax('/api/userinfo')
// userlist 获取用户对应需要展示的jober或者Boss列表数据
export const reqGetUserList = (type) => ajax('/api/userlist',type)
// msglist 获取聊天信息和用户列表
export const reqGetMsgList =() => ajax('/api/msglist')
// 修改当前用户连接的对象的消息为已读
export const reqReadMsg = (data) => ajax('/api/readmsg',data,'POST')