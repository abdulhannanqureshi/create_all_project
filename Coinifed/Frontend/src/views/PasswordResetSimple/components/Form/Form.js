import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import makeStyles from '@material-ui/core/styles/makeStyles';
import validate from 'validate.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { LearnMoreLink } from 'components/atoms';
import { ApiHelper } from "../../../../helper";
import { ApiRoutes } from "../../../../config/ApiRoutes";
import Toast from "../../../../components/toaster"
import Link from 'next/link';
import VisibilityIcon from "@material-ui/icons/Visibility";
import Box from '@material-ui/core/Box';
import clsx from "clsx";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  errorText:
  {
    color: 'red',
    fontSize: "14px"
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
  positionRelative: {
    position: "relative",
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
}));

const schema = {
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 8,
    },
  },
  confirmPassword: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 8,
    },
    equality: "password",
  },
};

const Form = () => {
  const classes = useStyles();
  const [userId, setUserId] = useState("");
  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      setUserId(id);
    }
  }, [router.query]);

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
      const data = {
        password: formState.values.password,
        verifyToken: userId,
      };
      if (formState.isValid) {
        const response = await new ApiHelper().FetchFromServer(
          ApiRoutes.RESETPASSWORD.service,
          ApiRoutes.RESETPASSWORD.url,
          ApiRoutes.RESETPASSWORD.method,
          ApiRoutes.RESETPASSWORD.authenticate,
          undefined,
          undefined,
          data
        );
        if (response && !response.isError) {
          Toast.fire({
            icon: "success",
            title: response.data.message,
          });
          router.push("/signin");
        } else {
          Toast.fire({
            icon: "error",
            title: response.messages[0],
          });
        }
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

  const [eyeStatus, setEyeStatus] = React.useState(true);
  const [eyeStatus1, setEyeStatus1] = React.useState(true);
  return (
    <div className={classes.root}>
      <form name='password-reset-form' method='post' onSubmit={handleSubmit}>
        <Grid container spacing={2}>
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
          <Box className={classes.positionRelative}>
            <TextField
              placeholder='Confirm Password'
              label='Confirm Password *'
              variant='outlined'
              size='medium'
              name='confirmPassword'
              fullWidth
              helpertext={
                hasError("confirmPassword")
                  ? formState.errors.confirmPassword[0]
                  : null
              }
              error={hasError("confirmPassword")}
              onChange={handleChange}
              type={eyeStatus1 ? "password" : "text"}
              value={formState.values.confirmPassword || ""}
            />
             {eyeStatus1 ? (
                <Box
                  className={clsx(classes.eyeWrapper, classes.eyeOff)}
                  onClick={() => setEyeStatus1(!eyeStatus1)}
                >
                  <VisibilityOffIcon />
                </Box>
              ) : (

                <Box
                  className={clsx(classes.eyeWrapper, classes.eyeVisible)}
                  onClick={() => setEyeStatus1(!eyeStatus1)}
                >
                  <VisibilityIcon />
                </Box>
              )}
             </Box>
            {
              hasError("confirmPassword") ?
                <span className={classes.errorText}>
                  {formState.errors.confirmPassword[0]}
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
              fullWidth
              className={classes.commonBtn}
            >
              Reset Password
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant='subtitle1'
              color='textPrimary'
              align='center'
              className={classes.cusTextPrimary}
            >
              Remember your password?{" "}
              <Link href='/signin'>
                <LearnMoreLink title='Sign in here' />
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;