import React, { useState}from 'react'

function Form({addName}) {
    const [name, setName] = useState('')
    const handleName = (event) => {
        const { value } = event.target
        setName(value)
        
    }
    console.log(name)
    const handleSubmit = (e) => {
        e.preventDefault()
        addName(name)
        setName('')
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="add your name"
                    onChange = {handleName}
                    
                />
                <button className="btn btn-primary" type="submit">Submit</button>
                
            </form>
        </div>
    )
}

export default Form
