import {SET_DATA,SET_CROP,CLEAN_DATA} from '../actions/queries'

const initialState={
    data:[],
    crop:""
}

export default function query(state=initialState,action){
    if(action.type===SET_DATA){
        return{
            ...state,
            data:action.payload
        }
    }
    if(action.type===SET_CROP){
        return{
            ...state,
            crop:action.payload
        }
    }
    if(action.type===CLEAN_DATA){
        return state=initialState
    }

    return state
}