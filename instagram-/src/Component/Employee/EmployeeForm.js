import React, { useState, useEffect } from 'react';
import {Grid, makeStyles} from '@material-ui/core'
import { UseForm, Form } from '../useForm/UseForm';
import Controls from '../Controls/Controls';
import RadioGroup from '../Controls/RadioGroup';
import Select from '../Controls/Select';
import {DepartData} from '../Services/Data'
import CheckBoxes from '../Controls/CheckBoxes';
const genderItems = [
    {
        id:"male", title:"Male"
    },
    {
        id:"femal", title:"Female"
    },
    {
        id:"other", title:"Other"
    }
    
]
const initialValues = {
    departmentId: 1,
    fullName: "",
    email: "",
    mobile: "",
    gender: "male",
    city: "",
    hireDate: new Date(),
    isPermanent:false
}
const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: "80%",
            margin:theme.spacing(1)
        }

    }
}))
function EmployeeForm() {
    //const [form, setForm] = useState(initialValues)
    console.log(DepartData)
    const classes = useStyles()
    const { form , setForm, handleChange} = UseForm(initialValues)
    return (
        <div>
            <Form className={classes.root}>
                <Grid container>
                    <Grid item md={6}>
                        <Controls
                            label="FullName"
                            value={form.fullName}
                            name="fullName"
                            onChange={handleChange}
                        /> 
                        <Controls
                            label="Email"
                            value={form.email}
                            name="email"
                            onChange={handleChange}
                        /> 
                    </Grid>
                    <Grid item md={6}>
                        <RadioGroup
                            value={form.gender}
                            name="gender"
                            items={genderItems}
                            label="Gender"
                            onChange ={handleChange}
                        ></RadioGroup>
                        <Select
                            onChange={handleChange}
                            name="departmentId"
                            value={form.departmentId}
                            label="DepartmentId"
                            options = {DepartData}
                            
                        />
                        <CheckBoxes
                            name="isPermanent"
                            label="PermanentEmployee"
                            onChange={handleChange}
                            value = {form.isPermanent}
                        />
                    </Grid>

                </Grid>
            </Form>
        </div>
    )
}

export default EmployeeForm
