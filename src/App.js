import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm'

import { useReducer } from 'react'
import {initialState, reducer} from './reducers/reducer'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearTodos = () => {
    dispatch({type:'clear'})
  }

  return (
    <div>
    <TodoForm state={state} dispatch={dispatch}></TodoForm>
    <TodoList state={state} dispatch={dispatch}></TodoList>
    <button onClick={clearTodos}>Clear All</button>
    </div>
  );
}

export default App;
