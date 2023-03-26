import { useGloble } from "./hooks"; 
import {actions} from "../globlestate"

function AppFake(){
    const [state,dispatch] = useGloble()
    const {todos,todoInput} = state
    const handleAddToDo = ()=>{
        dispatch(actions.addToDoInput(todoInput))
    }
    return (
        <div>
            <input type="text" 
            value={todoInput}
            placeholder="Nhập công việc"
            onChange={e=>{
                dispatch(actions.setToDoInput(e.target.value))
            }}/>
            <button onClick={handleAddToDo}>Add</button>
            <ul>
                {todos.map((todo,index)=>{
                    return (
                        <div key={index}>{todo}</div>
                    )
                })}
            </ul>
        </div>
    )
}
export default AppFake