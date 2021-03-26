import React from 'react'
import {Button} from '@material-ui/core'
function Counters({
    countersData: { id, value, completed, todo },
    handleDelete,
    handleIncrement,
    handleDecrement,
    markCompleted
}) {
    const checkCompleted = () => {
        return {
            color:completed?"gray":"red"
        }
    }
    return (
        <div>
            <h1>
                {
                  value
                }{'  '}
                <Button
                    variant="contained"
                    onClick = {()=>handleIncrement(id)}
                    color="primary">
                    Increment
                </Button>
                {'  '}
                <Button
                    variant="contained"
                    onClick = {()=>handleDecrement(id)}
                    color="primary">
                    Decrement
                </Button>
                {' '}
                <Button
                    variant="contained"
                    onClick = {()=>handleDelete(id)}
                    color="secondary">
                    Delete
                </Button>
                {' '}
                <input type="checkbox"
                    onChange = {()=>markCompleted(id)}
                />
                <span style={checkCompleted()}>{todo}</span>
                
                
            </h1>
        </div>
    )
}

export default Counters
