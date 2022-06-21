import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2'
import Toast from "../../../../components/toaster"
import  makeStyles from '@material-ui/core/styles/makeStyles';
import validate from 'validate.js';
import  TextField   from '@material-ui/core/TextField';
import { LearnMoreLink } from 'components/atoms';
import  Button  from '@material-ui/core/Button';
import  Grid  from '@material-ui/core/Grid';
import  Typography  from '@material-ui/core/Typography';
import { ApiHelper } from "../../../../helper";
import {ApiRoutes} from "../../../../config/ApiRoutes";
import Loader from '../../../../components/common/Loader/loader'
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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
  errorText:
  {
    color:'red',
    fontSize:"14px"
  },
  cusTextPrimary: {
    "& .MuiTypography-colorPrimary": {
      color: "#5120ff",
    },
  },
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  },
};

const Form = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });


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
      };
      if (formState.isValid) {
        const response = await new ApiHelper().FetchFromServer(
          ApiRoutes.USERFORGOTPASSWORDUPDATE.service,
          ApiRoutes.USERFORGOTPASSWORDUPDATE.url,
          ApiRoutes.USERFORGOTPASSWORDUPDATE.method,
          ApiRoutes.USERFORGOTPASSWORDUPDATE.authenticate,
          undefined,
          undefined,
          data
        );
        if (response && !response.isError) {
          Toast.fire({
            icon: "success",
            title: response.data.message,
          });
          setIsLoading(false)
        } else {
          Toast.fire({
            icon: "error",
            title: response.messages[0],
          });
          setIsLoading(false)
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

  const alertBox = () => {
    Swal.fire({
      title:
        "Reset password link has been sent to your mail, please check Inbox",
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Go  To Dashboard",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/signin");
      }
    });
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;
  const [isLoading,setIsLoading]=useState(false)
  return (
   <>
    {
      isLoading ? <Loader/> : null 
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
              Submit
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
              <LearnMoreLink
                title='Sign in here'
                onClick={() => router.push("/signin")}
              />
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
   </>
  );
};

export default Form;
