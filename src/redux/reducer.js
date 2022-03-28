import { Add, Low } from "./actionTypes"

const init={
    result:[]
}
export const reducer=((store=init,{type,payload})=>{
switch(type){
    case Add:{
        // console.log(payload)
        return {...store,result:payload}
    }
    case Low:{
        if(payload=="asc"){
            var query=store.result.sort(function(a,b){
                return a.price-b.price
            })
        }else{
            var query=store.result.sort(function(a,b){
                return b.price-a.price
            })
        }
        return {...store,result:query}
    }
    default:
        return store
}
})