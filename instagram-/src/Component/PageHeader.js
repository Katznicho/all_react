import React from 'react';
import { Paper, Card, Typography, makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme=>{
    return {
        root: {
            backgroundColor: "#fdfdff",
            transform:"translateZ(0)"
        },
        PageHeader: {
            padding: theme.spacing(4),
            display: "flex",
            marginBottom:theme.spacing(2)
        },
        pageIcon: {
            display: "inline-block",
            padding: theme.spacing(2),
            color:"#1c478e"

        },
        pageTitle: {
            backgroundColor: "#000",
            '& .MuiTypography-subtitle': {
                color: "#222",
                opacity:0.8
            }
        }

    }
})
function PageHeader({ Icon, title, subTitle }) {
    const classes = useStyles()
    return (
        <div>
            <Paper square elevation={0} className={classes.root}>
                <div className={classes.PageHeader}>
                    <Card className={classes.pageIcon}>
                {Icon}
            </Card>
            <div>
                <Typography
                    variant="h6"
                    component="div"
                >{
                        title
                }
                </Typography>
                <Typography
                variant="subtitle"
                component="div"
            >{
        subTitle
            }
            </Typography>
            </div>
    
                </div>
                
            </Paper>
        </div>
    )
}

export default PageHeader
