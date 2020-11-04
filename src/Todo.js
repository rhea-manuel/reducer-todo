import { useReducer } from 'react'
import {initialState, reducer} from './reducers/reducer'


export default function Todo (props){
    
    return (
        <div onClick={props.onClick} className= {props.completed ? "item completed" : "item incomplete"}>
            {props.name}
        </div>
    )
}