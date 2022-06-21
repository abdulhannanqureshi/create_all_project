import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    loaderWrapper:{
        height:"100vh",
        background:"trasparent",
        zIndex:"999",
        position:"fixed",
        top:"0",
        width:"100%",
        left:"0",
        backgroundColor:"rgb(240 240 240 / 50%)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
  }));
const Loader=()=>
{
    const theme = useTheme();
    const classes = useStyles();
    return(
        <>
        <div className={classes.loaderWrapper}>
            <CircularProgress className={classes.loader}/>
        </div>
        </>
    )
}
export default Loader