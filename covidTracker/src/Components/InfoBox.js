import React from 'react'
import './InfoBox.css';
import { Card, CardContent, Typography } from '@material-ui/core';
function InfoBox({title , cases, total}) {
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography className="infoBox__title"color="textSecondary">
                    {title}
                </Typography>
                <Typography className="infoBox__cases" color="textSecondary" variant="h2">
                {cases}
                </Typography>
                <Typography className="infoBox__total" color="textSecondary">
                {total} total
            </Typography>
            </CardContent>
            
        </Card>
    )
}
export default InfoBox
