import { useReducer } from 'react'
import {initialState, reducer} from './reducers/reducer'


export default function Todo (props){
    // const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <div onClick={props.onClick} className= {props.completed ? "completed" : "incomplete"}>
            {props.name}
        </div>
    )
}