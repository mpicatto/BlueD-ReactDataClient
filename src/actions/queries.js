export const SET_DATA ='SET_DATA'
export const SET_CROP ='SET_CROP'
export const CLEAN_DATA ='CLEAN_DATA'

export function setData(data){
    return{type:SET_DATA, payload:data}
}

export function setCrop(crop){
    return{type:SET_CROP, payload:crop}
}

export function cleanData(){
    return {type:CLEAN_DATA}
}