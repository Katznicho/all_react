import React , {useState} from 'react'

function MyForm({addTodo}) {
    const [todo, setTodo] = useState("")
    const handleInput = (event) => {
        const { value } = event.target
        setTodo(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(todo)
        setTodo("")
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    value={todo}
                    placeholder="addTodo"
                    onChange = {handleInput}

                />
                <button
                    type="submit"
                    className="btn btn-primary px-2 ml-2">
                    Submit
                </button>
                
            </form> 
        </div>
    )
}

export default MyForm
