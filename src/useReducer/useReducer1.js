import { useReducer, useRef } from "react"

const initReducer = {
    job:"",
    jobs:[]
}

const SET_JOB = "set_job"
const ADD_JOB = "add_job"
const DEL_JOB = "del_job"

// dư liệu mạng theo để hiểu . ghi payload
const setJobfunction = (dulieumangtheo)=>{
    return {
        type: SET_JOB,
        dulieumangtheo
    }
}

const addJobsfunction = (dulieumangtheo)=>{
    return {
        type: ADD_JOB,
        dulieumangtheo
    }
}

const delJobsfunction = (dulieumangtheo)=>{
    return {
        type: DEL_JOB,
        dulieumangtheo
    }
}



const reducer = (state,action)=>{
    console.log("Action",action);
    console.log("Prev state",state);
    let newstate;
    switch (action.type) {
        case SET_JOB:
            newstate = {
                ...state,
                job: action.dulieumangtheo
            }
            break;
        case ADD_JOB:
            newstate = {
                ...state,
                jobs:[...state.jobs,action.dulieumangtheo]
            }
            break;
        case DEL_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.dulieumangtheo,1)
            newstate = {
                ...state,
                jobs:newJobs
            }
            break;
        default:
            throw new Error("Lỗi tại reducer")
    }
    console.log("new state ",newstate);
    return newstate
}

function UseReducer1(){
    const [state, dispatch] = useReducer(reducer, initReducer);
    const {job,jobs} = state
    const inputRef = useRef();

    const handleAdd = ()=>{
        dispatch(addJobsfunction(job))
        dispatch(setJobfunction(""))
        inputRef.current.focus()
    }

    return (
        <div>
            <h2>Todolist</h2>
            <input
                ref={inputRef}
                type="text"
                placeholder="Nhập công việc"
                value={job} 
                onChange={(ev)=>{
                    dispatch(setJobfunction(ev.target.value));
                }}
               />
            <button style={{marginLeft:"20px"}} onClick={handleAdd} >Add</button>
            <ul>
                {
                    jobs.map((job,index)=>(
                        <li key={index}>{job} 
                            <span onClick={()=>dispatch(delJobsfunction(index))}>
                                &times;
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default UseReducer1