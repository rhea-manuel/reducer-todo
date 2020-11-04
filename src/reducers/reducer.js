import React, {useReducer} from 'react'

const initialState = [
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
]

const reducer = (state, action) => {
    // const newState = [ ...state ]
    // console.log(state)
    switch(action.type){
        case 'toggle':
            const newState = state.map((item)=>{
                if (item.id===action.id){
                    return {...item, completed:!item.completed}
                }
                return item
            })

            return newState

    }
    return state
}

export {initialState, reducer}