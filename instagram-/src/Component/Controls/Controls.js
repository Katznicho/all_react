import React from 'react'
import {TextField} from '@material-ui/core' 
function Controls({name, label, value, onChange, }) {
    return (
        <div>
        <TextField
        variant="outlined"
        label={label}
        value={value}
        name={name}
        onChange={onChange}
    /> 
        </div>
    )
}

export default Controls
