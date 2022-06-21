import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ApiHelper } from "../../../../helper";
import { ApiRoutes } from "../../../../config/ApiRoutes";
import validate from 'validate.js';
import Toast from 'components/toaster';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from "clsx";
import { CircularProgress } from '@material-ui/core';

const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 120,
    },
  },
};

const useStyles = makeStyles((theme) => ({
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
      "& $loaderCommon": {
        color: "#5120FF !important"
      }
    },
    "&:disabled": {
      backgroundColor: "#5362fc !important"
    }
  },

  boxShadowHighlight:
  {
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
  },
  smallCommonBtn: {
    minWidth: 132,
    padding: "8px 10px",
    fontSize: 15,
  },
  customField: {
    "& input": {
      padding: "15px",
      height: 44,
      boxSizing: " border-box",
    },
  },
  loaderCommon:
  {
    width: "17px !important",
    height: "17px !important",
    color: "white",
  },
  errorText:
  {
    color: 'red',
    fontSize: "14px"
  },
}));

const Subscription = (props) => {
  const classes = useStyles();
  const { className, ...rest } = props;
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
  useEffect(() => {

  }, [props])

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
  const [isLoading, setIsLoading] = useState(false)

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
      setIsLoading(true)
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
        setIsLoading(false)
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
        setIsLoading(false)
      }
    }
  
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={className} {...rest}>
      <CardBase withShadow data-aos='fade-up' className={classes.boxShadowHighlight}>
        <SectionHeader
          title={props.sending ? props.sending.blockTitle12 : null}
          subtitle={props.sending ? props.sending.blockTitle13 : null}
          fadeUp
        />
        <Grid container spacing={1} alignItems='center'>
          <Grid item xs={12} sm={9}>
            <TextField
              placeholder='Your e-mail address'
              variant='outlined'
              size='medium'
              name='email'
              fullWidth
              type='email'
              helpertext={hasError("email") ? formState.errors.email[0] : null}
              error={hasError("email")}
              onChange={handleChange}
              value={formState.values.email || ""}
              className={classes.customField}
            />

          </Grid>
          <Grid item xs={12} sm={3}>
            <Button
              fullWidth
              variant='contained'
              color='primary'
              onClick={handleSubmit}
              disabled={isLoading}
              className={
                clsx(classes.commonBtn, classes.smallCommonBtn)
              }
            >
              {
                isLoading ? <CircularProgress className={classes.loaderCommon} />
                  : "subscribe"
              }
            </Button>
          </Grid>
          {
            hasError("email") ?
              <span className={classes.errorText}>
                {formState.errors.email[0]}
              </span>
              :
              null
          }
        </Grid>

      </CardBase>
    </div>
  );
};

Subscription.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Subscription;
