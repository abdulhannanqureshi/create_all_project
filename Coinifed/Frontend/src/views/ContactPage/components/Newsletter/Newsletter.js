import { CircularProgress } from '@material-ui/core';
import indigo from '@material-ui/core/colors/indigo';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import Toast from 'components/toaster';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import validate from 'validate.js';
import { ApiRoutes } from "../../../../config/ApiRoutes";
import { ApiHelper } from "../../../../helper";

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
    background: `rgb(83 98 252) `,
    backgroundSize: "cover",
    borderRadius: theme.spacing(2),
  },
  textWhite: {
    color: "white",
  },
  paperPlane:
  {
    cursor: "pointer"
  },
  errorText:
  {
    color:'red',
    fontSize:"14px",
    backgroundColor:"white",
    marginTop:"3px"
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
  },
  loaderCommon:
  {
    width: "20px !important",
    height: "20px !important",
    color: "white",
  },
  formControl: {
    maxWidth: 400,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& .MuiInputAdornment-root i": {
      color: "white !important",
    },
  },
}));

const Newsletter = (props) => {
  const { className, cmsData, ...rest } = props;
  const classes = useStyles();
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
      <Section>
        <>
          <SectionHeader
            title={
              <span className={classes.textWhite}>{getTemplateData ? getTemplateData.blockTitle12 : null}
              </span>
            }
            subtitle={
              <span className={classes.textWhite}>{getTemplateData ? getTemplateData.blockTitle13 : null}
              </span>
            }
            fadeUp
          />
          <form
            name='password-reset-form'
            method='post'
            onSubmit={handleSubmit}
          >
            <div className={classes.inputContainer}>
              <FormControl
                fullWidth
                variant='outlined'
                data-aos='fade-up'
                className={classes.formControl}
              >
                <OutlinedInput
                  name='email'
                  fullWidth
                  helpertext={
                    hasError("email") ? formState.errors.email[0] : null
                  }
                  error={hasError("email")}
                  onChange={handleChange}
                  type='email'
                  value={formState.values.email || ""}
                  endAdornment={
                    <InputAdornment position='end'>
                      {
                        isLoading ? <CircularProgress className={classes.loaderCommon} />
                          :
                          <Icon
                            className={classes.paperPlane}
                            fontIconClass='fas fa-paper-plane'
                            fontIconColor={indigo[900]}
                            onClick={handleSubmit}
                          />
                      }
                    </InputAdornment>
                  }
                  placeholder='Enter your email'
                />
                {
                  hasError("email") ?
                    <span className={classes.errorText}>
                      {formState.errors.email[0]}
                    </span>
                    :
                    null
                }
              </FormControl>
              {/* <TextField
            placeholder="Email"
            label="Email *"
            variant="outlined"
            size="medium"
            name="email"
            fullWidth
            helpertext={
              hasError('email') ? formState.errors.email[0] : null
            }
            error={hasError('email')}
            onChange={handleChange}
            type="email"
            value={formState.values.email || ''}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
             <Icon
                fontIconClass="fas fa-paper-plane"
                fontIconColor={colors.indigo[900]}
              />
          </Button> */}
            </div>
          </form>
        </>
      </Section>
    </div>
  );
};

Newsletter.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Newsletter;
