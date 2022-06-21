import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Loader from 'components/common/Loader/loader';
import Toast from 'components/toaster';
import { ApiRoutes } from 'config';
import { ApiHelper } from 'helper';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import validate from 'validate.js';
import CircularProgress from '@material-ui/core/CircularProgress';

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
      minimum:3
    },
  },
  lastName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
      minimum:3
    },
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  },
};


const useStyles = makeStyles((theme) => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
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
}));

const General = (props) => { 
  const { className, userDetails, authToken, insideLoader,handleLoaderDeactive,...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);
  
  useEffect(()=>
  {
    handleLoaderDeactive("general")
  },[])

  useEffect(() => {
    if (userDetails) {
      setFormState((formState) => ({
        ...formState,
        values: {
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          email: userDetails.email,
          role: userDetails.role,
          corporate: userDetails.corporate,
          university: userDetails.university,
        },
      }));
    }
  }, []);

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
    if(formState.isValid) 
    {
      setLoader(true)
      const data = {
        firstName: formState.values.firstName,
        lastName: formState.values.lastName,
        email: formState.values.email,
        password: formState.values.password,
      };
      const response = await new ApiHelper().FetchFromServer(
        ApiRoutes.USERDETAILSUPDATE.service,
        ApiRoutes.USERDETAILSUPDATE.url,
        ApiRoutes.USERDETAILSUPDATE.method,
        ApiRoutes.USERDETAILSUPDATE.authenticate,
        authToken,
        undefined,
        data
      );
      if (response && !response.isError) {
        Toast.fire({
          icon: "success",
          title: response.data.message,
        });
        setLoader(false)
      } else {
        Toast.fire({
          icon: "error",
          title: response.data.message,
        });
        setLoader(false)
      }
    }
  };
  const [loader,setLoader]=useState(false)
  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;
  return (
  <>
    { loader ? <Loader/> : null }
    {
      insideLoader ? 
      <div >
        <Loader/>
      </div> : null }
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 2 : 2}>
        <Grid item xs={12}>
          <Typography variant='h6' color='textPrimary'>
            Profile Settings
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant='subtitle1'
            color='textPrimary'
            className={classes.inputTitle}
          >
            First Name
          </Typography>
          <TextField
            placeholder='First name*'
            label=''
            variant='outlined'
            size='medium'
            fullWidth
            name='firstName'
            helpertext={
              hasError("firstName") ? formState.errors.firstName[0] : null
            }
            error={hasError("firstName")}
            onChange={handleChange}
            type='firstName'
            value={formState.values.firstName || ""}
          />
              {
                hasError("firstName") ?
                  <span className={classes.errorText}>
                    {formState.errors.firstName[0]}
                  </span>
                  :
                  null
              }
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant='subtitle1'
            color='textPrimary'
            className={classes.inputTitle}
          >
            Last Name
          </Typography>
          <TextField
            placeholder='Last Name *'
            label=''
            variant='outlined'
            size='medium'
            fullWidth
            name='lastName'
            helpertext={
              hasError("lastName") ? formState.errors.lastName[0] : null
            }
            error={hasError("lastName")}
            onChange={handleChange}
            type='lastName'
            value={formState.values.lastName || ""}
          />
           {
                hasError("lastName") ?
                  <span className={classes.errorText}>
                    {formState.errors.lastName[0]}
                  </span>
                  :
                  null
              }
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant='subtitle1'
            color='textPrimary'
            className={classes.inputTitle}
          >
            E-mail
          </Typography>
          <TextField
            placeholder='Email'
            label=''
            variant='outlined'
            size='medium'
            fullWidth
            disabled
            name='email'
            helpertext={
              hasError("email") ? formState.errors.email[0] : null
            }
            error={hasError("email")}
            onChange={handleChange}
            type='email'
            value={formState.values.email || ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant='subtitle1'
            color='textPrimary'
            className={classes.inputTitle}
          >
            Role
          </Typography>
          <TextField
            placeholder='Last Name *'
            label=''
            variant='outlined'
            size='medium'
            fullWidth
            disabled
            name='lastName'
            helpertext={
              hasError("lastName") ? formState.errors.lastName[0] : null
            }
            error={hasError("lastName")}
            onChange={handleChange}
            type='lastName'
            value={formState.values.role || ""}
          />
        </Grid>
        {formState.values.corporate || formState.values.university ? (
          <Grid item xs={12} sm={6}>
            <Typography
              variant='subtitle1'
              color='textPrimary'
              className={classes.inputTitle}
            >
              {formState.values.corporate ? "Corporation" : "University"}
            </Typography>
            <TextField
              placeholder='Last Name *'
              label=''
              variant='outlined'
              size='medium'
              fullWidth
              name='corporate'
              disabled
              type='corporate'
              value={
                formState.values.corporate
                  ? formState.values.corporate
                  : formState.values.university || ""
              }
            />
          </Grid>
        ) : (
          ""
        )}
        <Grid item container justifyContent='flex-start' xs={12}>
          <Button
            variant='contained'
            type='submit'
            color='primary'
            onClick={handleSubmit}
            className={classes.commonBtn}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </div>
    </>
  );
};

General.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default General;
