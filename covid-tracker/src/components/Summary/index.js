import React from 'react';
import Grid from '@material-ui/core/Grid';

import LineChart from '../Charts/LineChart';


export default function Summary({ report }) {

    return (
        <div style={{ height: '500px', marginTop: 10 }}>
            <Grid container spacing={3}>
                <Grid item sm={12} xs={12}>
                    <LineChart data={report} />
                </Grid>
            </Grid>
        </div>
    );
}