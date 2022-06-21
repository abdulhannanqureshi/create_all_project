import React, { useEffect, useState } from 'react';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import  useTheme  from '@material-ui/core/styles/useTheme';
import AppConfig from "../../../../config/appConfig";
import ReactHtmlParser from "react-html-parser";
import  useMediaQuery  from '@material-ui/core/useMediaQuery';
import  Grid  from '@material-ui/core/Grid';
import  Typography  from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    imageFluid:
    {
        width: "100%"
    }
}));
const labModal = props => {
    const classes = useStyles();
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });
const {labData}=props
    return (
        <Box component="span" width={600} >
            {
                labData  ?
                <>
                <Box pb={3}>
                <Typography variant="h4">{labData.title}</Typography>
            </Box>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {
                        console.log(labData.labsImage)
                    }
                    <Grid item xs={6}>
                        <img
                        src={`${AppConfig.IMAGE_URL}/${labData.labsImage}`}
                        srcSet={`${AppConfig.IMAGE_URL}/${labData.labsImage}`}
                         alt={labData.title} className={classes.imageFluid} />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5">{ReactHtmlParser(labData.description)}</Typography>
                    </Grid>
                </Grid>
            </div> 
                </>
                :
                <>
                Content not available.
                </>
            }
        </Box>

    );
};

export default labModal;




