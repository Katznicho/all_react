import React from 'react'
import {FormControlLabel,FormControl, FormLabel, Radio, RadioGroup as MyRadio} from '@material-ui/core'
function RadioGroup({ name, label, onChange, value, items }) {
    console.log(items)
    return (
        <FormControl>

            <FormLabel>{label}</FormLabel>
             <MyRadio
                                row
                                name={name}
                                value={value}
                                onChange={onChange}
            >
                {
                    items.map(({ id, title }) => (
                        <FormControlLabel value={id} key={id} control={<Radio />} label={ title}/>
                    ))
                }
          </MyRadio>
            
         </FormControl>
    )
}

export default RadioGroup
