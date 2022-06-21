import React, { useState } from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import validate from 'validate.js';
import { ApiHelper } from '../../../../helper';
import { ApiRoutes } from '../../../../config/ApiRoutes';
import Toast from 'components/toaster';
import { SectionHeader } from 'components/molecules';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Loader from '../../../../components/common/Loader/loader'
const useStyles = makeStyles((theme) => ({
  form: {
    maxWidth: 550,
    margin: `0 auto`,
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
  redStar: {
    color: "red"
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
}));
const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 120,
    },
  },
  firstName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 120,
      minimum: 3,
    },
  },
  lastName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 120,
      minimum: 3,
    },
  },
  topics: {
    presence: { allowEmpty: false, message: "is required" },
  },
  contactNumber: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 20,
      minimum:9,
    },
    numericality: {
      onlyInteger: true,
    },
  },
  message: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 1000,
      minimum: 10,
    },
  },
};
const Form = (props) => {
  const { className, ...rest } = props;
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
    console.log(event.target.value,"this si form")
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
    setFormState((formState) => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
    console.log("handle submit")
    if (formState.isValid) {
      setIsLoading(true)
      const data = {
        firstName: formState.values.firstName,
        lastName: formState.values.lastName,
        email: formState.values.email,
        topics: formState.values.topics,
        contactNumber: formState.values.contactNumber,
        message: formState.values.message,
      };
      const response = await new ApiHelper().FetchFromServer(
        ApiRoutes.CONTACT_US.service,
        ApiRoutes.CONTACT_US.url,
        ApiRoutes.CONTACT_US.method,
        ApiRoutes.CONTACT_US.authenticate,
        undefined,
        undefined,
        data
      );
      if (response && !response.isError) {
        setIsLoading(false)
        Toast.fire({
          icon: "success",
          title: response.messages[0],
        });
        setFormState((formState) => ({
          ...formState,
          values:{},
          touched:{}
        }));
        document.getElementById("contact_form").reset()

      } else {
        setIsLoading(false)
        Toast.fire({
          icon: "error",
          title: response.messages[0],
        });
        setFormState((formState) => ({
          ...formState,
          values:{},
          touched:{}
        }));
      }
    }
   
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
    {
      console.log(formState)
    }
      {isLoading ? <Loader /> : null}
      <div className={className} {...rest}>
        <SectionHeader
          title="Can't find the answer you need?"
          subtitle='Have questions or ready to launch your blockchain course? We’d love to hear from you. Fill out the form below and someone on our team will respond soon.'
          subtitleProps={{
            variant: "h6",
            color: "textPrimary",
          }}
          data-aos='fade-up'
          align={isMd ? "center" : "left"}
        />
        <div className={classes.form}>
          <form
            name='contact_us_form'
            method='post'
            onSubmit={handleSubmit}
            id='contact_form'
          >
            <Grid container spacing={isMd ? 2 : 2}>
              <Grid item xs={6} data-aos='fade-up'>
                <Typography
                  variant='subtitle1'
                  color='textPrimary'
                  className={classes.inputTitle}
                >
                  First name <span className={classes.redStar}>*</span>
                </Typography>
                <TextField
                  placeholder='First name'
                  // label='First name *'
                  variant='outlined'
                  size='medium'
                  name='firstName'
                  fullWidth
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
              <Grid item xs={6} data-aos='fade-up'>
                <Typography
                  variant='subtitle1'
                  color='textPrimary'
                  className={classes.inputTitle}
                >
                  Last name <span className={classes.redStar}>*</span>
                </Typography>
                <TextField
                  placeholder='Last name'
                  // label='Last name *'
                  variant='outlined'
                  size='medium'
                  name='lastName'
                  fullWidth
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
              <Grid item xs={12} data-aos='fade-up'>
                <Typography
                  variant='subtitle1'
                  color='textPrimary'
                  className={classes.inputTitle}
                >
                  Email <span className={classes.redStar}>*</span>
                </Typography>
                <TextField
                  placeholder='Email'
                  // label='Email *'
                  variant='outlined'
                  size='medium'
                  name='email'
                  fullWidth
                  helpertext={
                    hasError("email") ? formState.errors.email[0] : null
                  }
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
              <Grid item xs={12} data-aos='fade-up'>
                <Typography
                  variant='subtitle1'
                  color='textPrimary'
                  className={classes.inputTitle}
                >
                  Topic <span className={classes.redStar}>*</span>
                </Typography>
                <TextField
                  id='outlined-select-currency-native'
                  select
                  size='medium'
                  name={"topics"}
                  fullWidth
                  value={formState.values.topics}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  error={hasError("topics")}
                  helpertext={
                    hasError("topics") ? formState.errors.topics[0] : null
                  }
                  variant='outlined'
                >
                  <option value={""}>Select a topic</option>
                  <option value={"Affiliate/Referral Program"}>Affiliate/Referral Program</option>
                  <option value={"Custom Course Request"}>Custom Course Request</option>
                  <option value={"General or Payment Question"}>
                    General or Payment Question
                  </option>
                  <option value={"Partnership Opportunity"}>
                    Partnership Opportunity
                  </option>
                  <option value={"Other – Please Explain"}>
                    Other – Please Explain
                  </option>
                </TextField>
                {
                  hasError("topics") ?
                    <span className={classes.errorText}>
                      {formState.errors.topics[0]}
                    </span>
                    :
                    null
                }
              </Grid>
              <Grid item xs={12} data-aos='fade-up'>
                <Typography
                  variant='subtitle1'
                  color='textPrimary'
                  className={classes.inputTitle}
                >
                  Contact number <span className={classes.redStar}>*</span>
                </Typography>
                <TextField
                  placeholder='Contact Number'
                  // label='Contact Number *'
                  variant='outlined'
                  size='medium'
                  name='contactNumber'
                  fullWidth
                  helpertext={
                    hasError("contactNumber")
                      ? formState.errors.contactNumber[0]
                      : null
                  }
                  error={hasError("contactNumber")}
                  onChange={handleChange}
                  type='contactNumber'
                  value={formState.values.contactNumber || ""}
                />
                {
                  hasError("contactNumber") ?
                    <span className={classes.errorText}>
                      {formState.errors.contactNumber[0]}
                    </span>
                    :
                    null
                }
              </Grid>
              <Grid item xs={12} data-aos='fade-up'>
                <Typography
                  variant='subtitle1'
                  color='textPrimary'
                  className={classes.inputTitle}
                >
                  Message <span className={classes.redStar}>*</span>
                </Typography>
                <TextField
                  placeholder='Your question about our services'
                  variant='outlined'
                  name='message'
                  fullWidth
                  value={formState.values.message || ""}
                  multiline
                  helpertext={
                    hasError("message") ? formState.errors.message[0] : null
                  }
                  error={hasError("message")}
                  onChange={handleChange}
                  type='message'
                  rows={4}
                />
                {
                  hasError("message") ?
                    <span className={classes.errorText}>
                      {formState.errors.message[0]}
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
                  className={classes.commonBtn}
                >
                  submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </>
  );
};

Form.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Form;
