import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  commonBtn: {
    display: "inline-block",
    padding: "6px 22px",
    backgroundColor: "#5120FF",
    color: "#fff",
    fontSize: 16,
    borderRadius: 5,
    minWidth: 142,
    border: "solid 1px #5120FF",
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#5120FF",
      boxShadow: "none",
    },
  },
  anotherCommonBtn: {
    backgroundColor: "#fff",
    color: "#5120FF",
    "&:hover": {
      backgroundColor: "#5120FF",
      color: "#fff",
    },
  },
  iFrameModification:
  {
    width:"500px",
    height:"350px",
    margin:"auto",
    [theme.breakpoints.down('676')]: {
      width:"320px",
      height:"320px"
    },
    [theme.breakpoints.down('430')]: {
      width:"100%",
      height:"250px"
    }
  },
  iFrameDialogue:
  {
      margin:"auto"
  }
}));

const Modal = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Dialog
        fullWidth={props.fullWidth}
        maxWidth={props.maxWidth}
        fullScreen={props.fullScreen ? fullScreen : props.fullScreen}
        open={props.open}
        onRequestClose={props.handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>
          {props.title ? props.title : ""}
        </DialogTitle>
        <DialogContent className={classes.iFrameDialogue}>
          {props.contentText ? (
            <DialogContentText>{props.contentText}</DialogContentText>
          ) : (
            ""
          )}
          {props.url ? (
            <iframe
              class='embed-responsive-item m-auto'
              src={`${props.url}?rel=0&amp;enablejsapi=1&amp;`}
              allowfullscreen=''
              data-gtm-yt-inspected-1170188_142='true'
              id='438041764'
              className={classes.iFrameModification}
            ></iframe>
          ) : (
            ""
          )}
          {props.content ? props.content : ""}
        </DialogContent>
        <DialogActions>
          {props.cancleStatus ? (
            <Button autoFocus onClick={props.handleClose}>
              {props.cancleName ? props.cancleName : "Close"}
            </Button>
          ) : (
            ""
          )}
          <Button
            className={clsx(classes.commonBtn, classes.anotherCommonBtn)}
            variant={"outline"}
            color={"secondary"}
            onClick={props.handleClose}
            autoFocus
          >
            {props.saveName ? props.saveName : "Cancel"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal
