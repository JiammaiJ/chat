
const judgePath = (type,header) => {
    if(header){
        if(type==='boss'){
            return '/boss'
        }else if(type === 'jober'){
            return '/jober'
        }
    }else{
        if(type==='boss'){
            return '/bossinfo'
        }else if(type === 'jober'){
            return '/joberinfo'
        }
    }
}

export default judgePath