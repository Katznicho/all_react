import React from 'react';
import './SideMenu.css';
import {makeStyles, withStyles} from '@material-ui/core'
const styles = {
    display:'flex',
    flexDirection: 'column',
    position: "absolute",
    left: 0,
    width:"20%",
    backgroundColor: 'black',
    color:"#fff",
    height:'100vh'
}
const useStyles = makeStyles({
    styles
})
function SideMenu() {
    const classes = useStyles()
    return (
        <div className={classes.styles}>
            sidemenu
        </div>
    )
}

export default SideMenu
