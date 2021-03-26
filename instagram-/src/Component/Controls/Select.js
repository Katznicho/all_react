import { FormControl, InputLabel, MenuItem, Select as MySelected } from '@material-ui/core'
import React from 'react'

function Select({ name, label, value, onChange, options }) {
    console.log(name)
    return (
        
        <FormControl
            variant="outlined"
        >
            <InputLabel>{ label}</InputLabel>
                <MySelected
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    <MenuItem value="">None</MenuItem>
                    {
                        options.map(({ departmentId, title }) => (
                            <MenuItem value={departmentId}>{ title}</MenuItem>
                        ))
                    }
                </MySelected>

            </FormControl> 
    )
}

export default Select

