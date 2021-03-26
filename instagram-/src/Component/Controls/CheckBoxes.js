import { FormControl, FormControlLabel } from '@material-ui/core'
import { CheckBox } from '@material-ui/icons'
import React from 'react'

function CheckBoxes({ name, value, label, onChange }) {
    const converTo = (name, value)=>(
        {
            target: {
                name:value
            }
        }
    )
    return (
        <FormControl>
            <FormControlLabel
                control={<CheckBox
                name={name}
                onChange = {(e)=>onChange(converTo(name, e.target.checked))}
                color="primary"
                checked={value}
                />}
                
                label={label}
                
            ></FormControlLabel>
        </FormControl>
    )
}

export default CheckBoxes
