import React, { useReducer } from 'react'
import { act } from 'react-dom/test-utils'

const initialState =
{
    allTodos:
        [
            {
                item: 'Learn about reducers',
                completed: false,
                id: 3892987589
            },
            {
                item: 'Study',
                completed: false,
                id: 3892987590
            }
        ],

        itemName: ''
}

const reducer = (state, action) => {
    // const newState = [ ...state ]
    // console.log(state)

    // const newState

    switch (action.type) {

        case 'toggle':
            const toReturnToggle = state.allTodos.map((item) => {
                if (item.id === action.id) {
                    return { ...item, completed: !item.completed }
                }
                return item
            })

            return {
                allTodos: toReturnToggle
            }

        case 'add':
            let newList = [...state.allTodos]

            newList.push(
                {
                    item: state.itemName,
                    completed: false,
                    date: Date.now()
                }
            )

            return {
                allTodos: newList,
                itemName: ''
            }

        case 'valChange':
            return {allTodos: state.allTodos, itemName: action.value}

        case 'clear':
            const clearedList = state.allTodos.filter((item)=>{
                return !item.completed
            })

            return {...state, allTodos:clearedList}

    }

    console.log("default case")
    return state
}

export { initialState, reducer }