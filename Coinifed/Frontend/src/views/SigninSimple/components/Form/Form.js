import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import clsx from "clsx";
import Toast from 'components/toaster';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import validate from 'validate.js';
import { LearnMoreLink } from "components/atoms";
import { ApiRoutes } from "../../../../config/ApiRoutes";
import { ApiHelper } from "../../../../helper";
import Cookies from 'js-cookie'
import { useStore } from '../../../../store'
import { Consumer } from '../../../../helper/ContextAPI'
import { useState } from 'react';
import Loader from '../../../../components/common/Loader/loader'
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  link: {
    color: "#3f51b5",
    cursor: "pointer",
    fontWeight: "600",
  },
  commonBtn: {
    padding: "7px 10px",
    backgroundColor: "#5120FF",
    fontSize: 16,
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
  cusTextPrimary: {
    "& .MuiTypography-colorPrimary": {
      color: "#5120ff",
    },
  },
  eyeWrapper: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    lineHeight: "10px",
    right: 20,
    cursor: "pointer",
    "& svg": {
      fill: "#5120ff",
    },
  },
  positionRelative: {
    position: "relative",
  },
  authLink: {
    color: '#5120ff',
    fontWeight: 'bold',
  },
  errorText:
  {
    color: 'red',
    fontSize: "14px"
  }
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 40,
    },
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 8,
    },
  },
};

const Form = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const { tokenHandle, getCartLength } = useStore()

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  const [eyeStatus, setEyeStatus] = React.useState(true);
  React.useEffect(() => {
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
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formState.isValid) {
      setIsLoading(true)
      const data = {
        email: formState.values.email,
        password: formState.values.password,
      };
      const response = await new ApiHelper().FetchFromServer(
        ApiRoutes.LOGIN.service,
        ApiRoutes.LOGIN.url,
        ApiRoutes.LOGIN.method,
        ApiRoutes.LOGIN.authenticate,
        undefined,
        undefined,
        data
      );
      if (response && !response.isError) {
        Toast.fire({
          icon: "success",
          title: response.data.message,
        });
        localStorage.setItem("token", response.data.token);
        // Set Cookies for Auth
        Cookies.set('token', response.data.token, { expires: 1 })
        tokenHandle();
        getCartLength(0)
        if (props.categoryId && props.categoryId !== "") {
          props.handleAuthModalClose();
          //props.setOrderModalOpen(true);
          props.pageReload();
        } else {
          router.push("/dashboard");
        }
      } else {
        Toast.fire({
          icon: "error",
          title: response.messages[0],
        });
        setIsLoading(false)
      }
    }

    setFormState((formState) => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      {
        isLoading ? <Loader /> : null
      }
      <div className={classes.root}>
        <form name='password-reset-form' method='post' onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                placeholder='E-mail'
                label='E-mail *'
                variant='outlined'
                size='medium'
                name='email'
                fullWidth
                helpertext={hasError("email") ? formState.errors.email[0] : null}
                error={hasError("email")}
                onChange={handleChange}
                type='email'
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
            <Grid item xs={12}>
              <Box className={classes.positionRelative}>
                <TextField
                  placeholder='Password'
                  label='Password *'
                  variant='outlined'
                  size='medium'
                  name='password'
                  fullWidth
                  helpertext={
                    hasError("password") ? formState.errors.password[0] : null
                  }
                  error={hasError("password")}
                  onChange={handleChange}
                  type={eyeStatus ? "password" : "text"}
                  value={formState.values.password || ""}
                />
                {eyeStatus ? (
                  <Box
                    className={clsx(classes.eyeWrapper, classes.eyeOff)}
                    onClick={() => setEyeStatus(!eyeStatus)}
                  >
                    <VisibilityOffIcon />
                  </Box>
                ) : (

                  <Box
                    className={clsx(classes.eyeWrapper, classes.eyeVisible)}
                    onClick={() => setEyeStatus(!eyeStatus)}
                  >
                    <VisibilityIcon />
                  </Box>
                )}
              </Box>
              {
                hasError("password") ?
                  <span className={classes.errorText}>
                    {formState.errors.password[0]}
                  </span>
                  :
                  null
              }
            </Grid>
            <Grid item xs={12}>
              <i>
                <Typography variant='subtitle2'>
                  Fields that are marked with an asterisk (*) sign are required.
                </Typography>
              </i>
            </Grid>
            <Grid item xs={12}>
              <Button
                size='large'
                variant='contained'
                type='submit'
                color='primary'
                className={classes.commonBtn}
                fullWidth>
                Sign in
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant='subtitle1'
                color='textPrimary'
                align='center'
                className={classes.cusTextPrimary}
              >
                Forgot your password?{" "}
                <Link href='/forgot-password'>
                  <a className={classes.authLink}>
                    <LearnMoreLink title='Click Here' />
                  </a>
                </Link>
              </Typography>
            </Grid>
            {props.setLoginOpen ? (
              <Grid item xs={12}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Typography
                    variant='subtitle1'
                    color='textPrimary'
                    align='center'
                    className={classes.cusTextPrimary}
                  >
                    Don't Have Account Please
                  </Typography>
                  <span
                    onClick={() => props.setSignUpOpen(true)}
                    className={classes.link}
                  >
                    &nbsp; Sign Up
                  </span>
                </Box>
              </Grid>
            ) : (
              <Grid item xs={12}>
                <Typography
                  variant='subtitle1'
                  color='textPrimary'
                  align='center'
                  className={classes.cusTextPrimary}
                >
                  Don't have an account?{" "}
                  <Link href='/signup'>
                    <a className={classes.authLink}>
                      <LearnMoreLink title='Sign Up' />
                    </a>
                  </Link>
                </Typography>
              </Grid>
            )}
          </Grid>
        </form>
      </div></>

  );
};

export default Form;
