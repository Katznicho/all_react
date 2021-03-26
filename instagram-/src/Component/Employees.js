import React from 'react';
import EmployeeForm from './Employee/EmployeeForm'; 
import PeopleIcon from '@material-ui/icons/People';
import PageHeader from '../Component/PageHeader';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        margin:"20px"
    }
}));
function Employees() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
        <PageHeader
        title="New Employ"
        subTitle="Form with Validation"
        Icon={<PeopleIcon/>}
        />
            <EmployeeForm/>
        </div>
    )
}

export default Employees
