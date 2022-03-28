import { Add, High, Low } from "./actionTypes"

export const ADD_pro=((payload)=>{
    return {
    type:Add,
    payload
}})
export const LOW=((payload)=>{
    return {
        type:Low,
        payload
    }
})
