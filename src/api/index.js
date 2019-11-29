
import ajax from './ajax'

// login
export const reqLogin = (data) => ajax('/login',data,'POST')
// register
export const reqRegister = (data) => ajax('/register',data,'POST')
// update
export const reqUpdate = (data) => ajax('/update',data,'POST')
// userinfo
export const reqGetUser = () => ajax('/userinfo')