import { ADD_TO_DO_INPUT, SET_TO_DO_INPUT } from "./constants"

export const setToDoInput = payload =>({
    type : SET_TO_DO_INPUT,
    payload
})

export const addToDoInput = payload =>({
    type : ADD_TO_DO_INPUT,
    payload
})