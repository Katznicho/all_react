import React from 'react';
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles(
    {
        root: {
            backgroundColor:"#fff"
        },
        searchInput: {
            padding: "20px",
            opacity: 0.7,
            marginLeft:"20px",
            '&:hover': {
                color: "red",
                cursor:"pointer"
            }
        }
    }
);
function Headr() {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                 <Grid container alignItems="center">
                        <Grid item>
                            <InputBase
                                className={classes.searchInput}
                                placeholder="help man"
                                color="primary"
                                startAdornment = {<SearchIcon fontSize="small"/>}
                            />
                        </Grid>
                        <Grid item sm={true}></Grid>
                        <Grid item >
                            <IconButton>
                                <Badge badgeContent={2} color="secondary">
                                    <NotificationsIcon/>
                                </Badge>
                                <Badge badgeContent={2} color="primary">
                                    <ChatIcon/>
                                </Badge>
                                <ExitToAppIcon/>
                            </IconButton>

                        </Grid>
                 </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Headr
