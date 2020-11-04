// import { render } from '@testing-library/react'

import Todo from './Todo'

export default function TodoList (props) {

    console.log(props)

    return(
        <div>
            {props.state.allTodos.map((item)=>{
                return (
                    <Todo onClick={()=>{props.dispatch({type:'toggle', id:item.id})}}  name={item.item} id={item.id} completed={item.completed}></Todo>
                )
            })}
        </div>
    )
}

