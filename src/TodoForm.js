export default function TodoForm(props){

    const addItem = (evt) => {
        evt.preventDefault()

        props.dispatch({type:'add'})
    }

    const onChange = (evt) => {
        props.dispatch({type:'valChange', value: evt.target.value})
    }

    return(
        <form onSubmit={addItem}>
            <input value={props.state.itemName} onChange={onChange} name="itemName"></input>
            <button>Add</button>
        </form>
    )
}