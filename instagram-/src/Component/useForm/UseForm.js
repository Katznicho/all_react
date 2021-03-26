import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core';
export function UseForm(initialFormValues) {
    const [form, setForm] = useState(initialFormValues)
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({...form, [name]:value})
    }
    return ({
        form,
        setForm,
        handleChange
    }
    )
}
const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: "80%",
            margin:theme.spacing(1)
        }

    }
}))

export function Form({ children }) {
    const classes = useStyles()
    return (
        <form className={classes.root} autoComplete="off">
            {children}
        </form>
    )
}


