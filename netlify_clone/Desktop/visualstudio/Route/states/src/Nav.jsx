import React from 'react'
import {Button} from '@material-ui/core'

function Nav({ navData, handleReset }) {
    const total = () => {
        let sum = 0;
        navData.map(obj => sum += obj.value)
        return sum
    }
    return (
        <div>
            <h1>
                 Incremented{'  '}
                {navData.filter(obj => obj.value > 0).length}
                {'  '}
                TotalIncrements {'  '}
                {total()}
            </h1>
            <h1>{
                <Button
                    variant="contained"
                    onClick = {()=>handleReset()}
                    color="secondary">
                    Reset
                </Button>
            }</h1>
        </div>
    )
}

export default Nav
