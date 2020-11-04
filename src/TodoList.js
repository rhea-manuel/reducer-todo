// import { render } from '@testing-library/react'
import { useReducer } from 'react'
import {initialState, reducer} from './reducers/reducer'
import Todo from './Todo'

export default function TodoList () {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            {state.map((item)=>{
                return (
                    <Todo onClick={()=>{dispatch({type:'toggle', id:item.id})}}  name={item.item} id={item.id} completed={item.completed}></Todo>
                )
            })}
        </div>
    )
}

