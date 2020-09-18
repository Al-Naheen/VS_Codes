import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Infobox.css";

function Infobox({ title, cases, total }) {
    return (
        <Card className='infobox'>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <h2 className='infobox__cases'>
                    {cases}
                </h2>

                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
        </Typography>
            </CardContent>
        </Card>
    )
}

export default Infobox
