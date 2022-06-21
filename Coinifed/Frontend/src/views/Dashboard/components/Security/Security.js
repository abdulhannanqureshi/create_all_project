import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { ApiHelper } from "../../../../helper";
import CircularProgress from '@material-ui/core/CircularProgress';
import { ApiRoutes } from "../../../../config/ApiRoutes";
import Toast from 'components/toaster';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Loader from 'components/common/Loader/loader';

const schema = {
  oldPassword: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 8,
    },
  },
  newPassword: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 8,
    },
  },
  repeatPassword: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 8,
    },
    equality: "newPassword"
  }
};

const useStyles = makeStyles((theme) => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  switchTitle: {
    fontWeight: 700,
  },
  titleCta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnWrapper: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  errorText:
  {
    color: 'red',
    fontSize: "14px"
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
  loaderDiv:
  {
    display:"flex",
    justifyContent:"center",
    marginTop:"90px"
  }
}));

const Security = (props) => {
  const { className, authToken, insideLoader,handleLoaderDeactive, ...rest } = props;
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
    if (formState.isValid) {
      setLoader(true)
      const data = {
        oldPassword: formState.values.oldPassword,
        newPassword: formState.values.newPassword,
      };
      const response = await new ApiHelper().FetchFromServer(
        ApiRoutes.USERPASSWORDUPDATE.service,
        ApiRoutes.USERPASSWORDUPDATE.url,
        ApiRoutes.USERPASSWORDUPDATE.method,
        ApiRoutes.USERPASSWORDUPDATE.authenticate,
        authToken,
        undefined,
        data
      );
      if (response && !response.isError) {
        Toast.fire({
          icon: "success",
          title: response.messages,
        });
        setLoader(false)
      } else {
        Toast.fire({
          icon: "error",
          title: response.messages,
        });
        setLoader(false)
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
  const [loader, setLoader] = useState(false)

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

    useEffect(()=>
    {
      handleLoaderDeactive("security")
    },[])
  return (
    <>
      {loader ? <Loader /> : null}
      {
        insideLoader ?
          <div className={classes.loaderDiv}>
            <Loader />
          </div> : null }
          <div className={className} {...rest}>
            <form name='password-reset-form' method='post' onSubmit={handleSubmit}>
              <Grid container spacing={isMd ? 4 : 2}>
                <Grid item xs={12}>
                  <div className={classes.titleCta}>
                    <Typography variant='h6' color='textPrimary'>
                      Change Password
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant='subtitle1'
                    color='textPrimary'
                    className={classes.inputTitle}
                  >
                    Current password
                  </Typography>
                  <TextField
                    placeholder='Current password'
                    variant='outlined'
                    size='medium'
                    name='oldPassword'
                    fullWidth
                    type='password'
                    helpertext={
                      hasError("oldPassword") ? formState.errors.oldPassword[0] : null
                    }
                    error={hasError("oldPassword")}
                    onChange={handleChange}
                  />
                  {
                    hasError("oldPassword") ?
                      <span className={classes.errorText}>
                        {formState.errors.oldPassword[0]}
                      </span>
                      :
                      null
                  }
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant='subtitle1'
                    color='textPrimary'
                    className={classes.inputTitle}
                  >
                    New password
                  </Typography>
                  <TextField
                    placeholder='New password'
                    variant='outlined'
                    size='medium'
                    name='newPassword'
                    fullWidth
                    type='password'
                    helpertext={
                      hasError("newPassword") ? formState.errors.newPassword[0] : null
                    }
                    error={hasError("newPassword")}
                    onChange={handleChange}
                  />
                  {
                    hasError("newPassword") ?
                      <span className={classes.errorText}>
                        {formState.errors.newPassword[0]}
                      </span>
                      :
                      null
                  }
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant='subtitle1'
                    color='textPrimary'
                    className={classes.inputTitle}
                  >
                    Confirm Password
                  </Typography>
                  <TextField
                    placeholder='Confirm Password'
                    variant='outlined'
                    size='medium'
                    name='repeatPassword'
                    fullWidth
                    type='password'
                    helpertext={
                      hasError("repeatPassword")
                        ? formState.errors.repeatPassword[0]
                        : null
                    }
                    error={hasError("repeatPassword")}
                    onChange={handleChange}
                  />
                  {
                    hasError("repeatPassword") ?
                      <span className={classes.errorText}>
                        {formState.errors.repeatPassword[0]}
                      </span>
                      :
                      null
                  }
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent='flex-start'
                  xs={12}
                  className={classes.btnWrapper}
                >
                  <Button
                    variant='contained'
                    type='submit'
                    color='primary'
                    onClick={handleSubmit}
                    className={classes.commonBtn}
                  >
                    Reset Password
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
    </>
  );
};

Security.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Security;
