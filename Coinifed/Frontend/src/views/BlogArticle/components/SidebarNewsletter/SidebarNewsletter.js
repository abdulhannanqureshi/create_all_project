import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ApiHelper } from "../../../../helper";
import { ApiRoutes } from "../../../../config/ApiRoutes";
import validate from 'validate.js';
import Toast from 'components/toaster';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Image } from 'components/atoms';
import  Button  from '@material-ui/core/Button';
import  Grid  from '@material-ui/core/Grid';
import  Typography  from '@material-ui/core/Typography';
import  TextField   from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import {colors} from '@material-ui/core';
import  useMediaQuery  from '@material-ui/core/useMediaQuery';
import { SectionHeader } from 'components/molecules';
import { Icon } from 'components/atoms';
import CheckIcon from '@material-ui/icons/Check';

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 120,
    },
  },
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    borderRadius: theme.spacing(2),
    background: theme.palette.alternate.dark,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3),
    },
  },
  cover: {
    width: 200,
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    marginBottom: theme.spacing(3),
  },
  form: {
    "& .MuiTextField-root": {
      background: theme.palette.background.paper,
    },
    "& .MuiOutlinedInput-input": {
      background: theme.palette.background.paper,
    },
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  successBox: {
    padding: "20px",
    flexFlow: "column",
    background: "#fff",
    borderRadius: "8px",
    margin: "0 auto",
  },
  successIcon: {
    display: "flex",
    width: "75px",
    height: "75px",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "14px",
    border: "2px solid #fab935",
    borderRadius: "50%",
  },
  checkIcon: {
    width: "60px",
    height: "60px",
  },
  errorText:
  {
    color:'red',
    fontSize:"14px"
  },
  commonBtn: {
    display: "inline-block",
    padding: "7px 10px",
    backgroundColor: "#5120FF",
    fontSize: 16,
    minWidth: 200,
    border: "solid 1px #5120FF",
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#5120FF",
      boxShadow: "none",
    },
  },
  smallCommonBtn: {
    minWidth: 132,
    padding: "8px 10px",
    fontSize: 15,
  },
}));

const Form = (props) => {
  const { className, cmsData, ...rest } = props;
  const classes = useStyles();
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
     setFormState((formState) => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
    if (formState.isValid) {
      const data = {
        email: formState.values.email,
      };
      const response = await new ApiHelper().FetchFromServer(
        ApiRoutes.NEWSLETTERSUBSCRIBE.service,
        ApiRoutes.NEWSLETTERSUBSCRIBE.url,
        ApiRoutes.NEWSLETTERSUBSCRIBE.method,
        ApiRoutes.NEWSLETTERSUBSCRIBE.authenticate,
        undefined,
        undefined,
        data
      );
      if (response && !response.isError) {
        Toast.fire({
          icon: "success",
          title: response.messages[0],
        });
        setSubscribeSuccess(true);
        setFormState((formState) => ({
          ...formState,
          values:{},
          touched:{}
        }));
      } else {
        Toast.fire({
          icon: "error",
          title: response.messages[0],
        });
      }
    }
   
  };

  const hasError = (field) => formState.touched[field] && formState.errors[field] ? true : false;

  // For Get Template Data
  const [getTemplateData, setGetTemplateData] = useState(null);
  useEffect(() => {
    if (cmsData && cmsData.length) {
      let getData = cmsData.filter((e) => e.titleSlug === "marketing");
      setGetTemplateData(...getData);
    }
  }, [cmsData]);

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.cover}>
        <Image src='https://assets.maccarianagency.com/the-front/illustrations/want-to-work.svg' />
      </div>
      <SectionHeader
         title={getTemplateData ? getTemplateData.blockTitle12 : null}
         subtitle={getTemplateData ? getTemplateData.blockTitle13 : null}
        titleProps={{
          variant: "h4",
          color: "textPrimary",
        }}
        subtitleProps={{
          variant: "body1",
          color: "textPrimary",
        }}
        data-aos='fade-up'
        align='left'
      />

      <div className={classes.form}>
        <Grid container spacing={isMd ? 4 : 2}>
          {!subscribeSuccess ? (
            <>
              <Grid item xs={12} data-aos='fade-up'>
                <Typography
                  variant='subtitle1'
                  color='textPrimary'
                  className={classes.inputTitle}
                >
                  E-mail
                </Typography>
                <TextField
                  placeholder='Your e-mail address'
                  variant='outlined'
                  size='medium'
                  name='email'
                  fullWidth
                  type='email'
                  helpertext={
                    hasError("email") ? formState.errors.email[0] : null
                  }
                  error={hasError("email")}
                  onChange={handleChange}
                  value={formState.values.email || ""}
                />
                {
                  hasError("email") ?
                    <span className={classes.errorText}>
                      {formState.errors.email[0]}
                    </span>
                    :
                    null
                }
              </Grid>
              <Grid item container justifyContent='center' xs={12}>
                <Button
                  variant='contained'
                  type='submit'
                  color='primary'
                  onClick={handleSubmit}
                  className={clsx(classes.commonBtn, classes.smallCommonBtn)}
                >
                  Subscribe
                </Button>
              </Grid>
            </>
          ) : (
            <Box
              className={classes.successBox}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant={"span"} className={classes.successIcon}>
                <CheckIcon
                  color={"secondary"}
                  width={"50"}
                  className={classes.checkIcon}
                />
              </Typography>

              <Typography
                variant={isMd ? "h5" : "body1"}
                className={classes.inputTitle}
              >
                Thank You For Subscribe
              </Typography>
            </Box>
          )}

        </Grid>
      </div>
    </div>
  );
};

Form.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Form;
