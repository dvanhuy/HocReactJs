// mọi việc useReducer thì useState đều làm được cx như ngược lại
// useReducer thường được sử dụng nếu giá trị giới đầu phức tạp như mảng,...
// hoặc các state bị phụ thuộc nhau

import { useReducer } from "react"

//usestate
//1.init
//2.action
//useReducer
//1.init
//2.action
//3.reducer
//4.dispatch

//init
const initReducer = 0
//action
const UP_ACTION = "up"
const DOWN_ACTION = "down"
//reducer
const reducer = (state,action) =>{
    switch (action){
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state -1
        default:
            throw new Error("lỗi cú pháp")        
    }
}


function UseReducerrr(){

    const [count, dispatch] = useReducer(reducer, initReducer);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={()=>dispatch(UP_ACTION)}>Up</button>
        </div>
    )
}
export default UseReducerrr