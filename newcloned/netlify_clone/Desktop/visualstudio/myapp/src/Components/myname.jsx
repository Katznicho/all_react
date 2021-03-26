import React, { Component } from 'react'

export class MyName extends Component {
    mystyle = () => {
        const { name } = this.props
        return {
            color:name.completed?'red':'blue'
        }
        
    }
    buttonStyle = () => {
        return {
            padding: 10,
            margin: 5,
            color: 'white',
            borderRadius:'50%',
            backgroundColor: 'blue',
            textDecoration:'none'
            
        }
    }
    
    render() {
        const {name, handleChange, handleClick} = this.props
        return (
            <div>
                <h3
                    style={this.mystyle()}>
                    <input type='checkbox' onChange={() => handleChange(name.id)} />
                    {' '}{name.name} {'  '}
                    <button
                        style={this.buttonStyle()}
                        onClick = {()=>handleClick(name.id)}
                    >
                        Delete
                        </button>
                </h3> 
            </div>
        )
    }
}

export default MyName
