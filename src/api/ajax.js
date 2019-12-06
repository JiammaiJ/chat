import axios from 'axios'
// url:地址
// data:数据
// type:请求类型
// ?a=1&b=2
const ajax = (url,data={},type="GET") => {
    let paramsStr = '';
    Object.keys(data).forEach(item => {
        paramsStr+=`${item}=${data[item]}&`
    })
    if(type==="GET"){
        paramsStr=paramsStr.substring(0,paramsStr.length-1);
        if(paramsStr){
            return axios.get(`${url}?${paramsStr}`)
        }else{
            return axios.get(url)
        }
    }else if(type==="POST"){
        return axios.post(url,data)
    }
}
export default ajax