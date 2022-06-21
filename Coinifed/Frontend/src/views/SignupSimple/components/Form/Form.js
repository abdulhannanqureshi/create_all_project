import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import clsx from "clsx";
import { LearnMoreLink } from "components/atoms";
import { Modal } from "components/common";
import Toast from "components/toaster";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import validate from "validate.js";
import Link from 'next/link';
import { ApiRoutes } from "../../../../config/ApiRoutes";
import { ApiHelper } from "../../../../helper";
import Loader from "../../../../components/common/Loader/loader"
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
  modalNoneTriggerText:
  {
    marginRight: "5px",
    fontWeight: "500",
    verticalAlign: "middle",
    paddingRight: "17px",
    marginLeft: "-14px"
  },
  modalTriggerLable: {
    marginLeft: "-16px",
    cursor: "pointer",
    color: "#5120ff",
    fontWeight: "500",
    verticalAlign: "middle",
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
  negativeMarginTop: {
    marginTop: "-2px",
  },
  marginNegative:
  {
    marginTop: "-28px"
  },
  listings: {
    marginLeft: "15px",
  },
  modalTitle: {
    fontSize: "18px",
    marginBottom: "-15px",
  },
  modalHeading: {
    fontSize: "18px",
    marginTop: "15px",
    marginBottom: "8px",
  },
  positionRelative: {
    position: "relative",
  },
  errorText:
  {
    color: 'red',
    fontSize: "14px"
  },
  loader: {
    display: "flex",
    minHeight: "200px",
    justifyContent: "center",
    alignItems: "center",
  },
}));



const userRoles = [
  {
    value: "Individual",
    label: "Individual",
  },
  {
    value: "Student",
    label: "Student",
  },
  {
    value: "Corporate Employee",
    label: "Corporate Employee",
  },
];

const Form = (props) => {
 
  const { cmsData, universityData, corporateData } = props
  const classes = useStyles();
  const router = useRouter();
  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  ///Schema starts here
  const schema = {
    email: {
      presence: { allowEmpty: false, message: "is required" },
      email: true,
      length: {
        maximum: 40,
      },
    },
    firstName: {
      presence: { allowEmpty: false, message: "is required" },
      length: {
        maximum: 25,
        minimum:3
      },
    },
    lastName: {
      presence: { allowEmpty: false, message: "is required" },
      length: {
        maximum: 25,
        minimum:3
      },
    },
    userRole: {
      presence: { allowEmpty: false, message: "is required" },
    },
    university: {
      presence: formState.values.userRole === "Student"  ? { allowEmpty: false, message: "is required" }:
      {allowEmpty:true},
    },
    corporation: {
      presence: formState.values.userRole === "Corporate Employee"  ? { allowEmpty: false, message: "is required" }:
      {allowEmpty:true},
    },
  
    password: {
      presence: { allowEmpty: false, message: "is required" },
      length: {
        minimum: 8,
        maximum:20
      },
    },
  };
  ///Schema ends here
  const [doNotSell, setDoNotSell] = React.useState(false);
  const [templeteCheckboxes, setTempleteCheckboxes] = React.useState({
    termsConditions: true,
    privacyPolicy: true
  });
  const [modalState, setModalState] = React.useState(false);
  const [modalOneState, setModalOneState] = React.useState(false);
  const [modalTwoState, setModalTwoState] = React.useState(false);
  const [eyeStatus, setEyeStatus] = React.useState(true);

  // For Get Do not sell Modal Content
  const [getTemplateData, setGetTemplateData] = useState(null);
  const [termsNcondtionData, setTermsNcondtionData] = useState(null);
  const [privayPolicyData, setPrivacyPolicyData] = useState(null);
  const [disableState, setDisableState] = useState(true)


  // For Get Template Data
  useEffect(() => {
    if (cmsData && cmsData.length) {
      let getData = cmsData.filter((e) => e.pageName === "Do Not Sell");
      setGetTemplateData(...getData);
      let termsConditionData = cmsData.filter((e) => e.pageName === "Terms And Condition")
      setTermsNcondtionData(...termsConditionData)
      let privacyPolicyData = cmsData.filter((e) => e.pageName === "Privacy Policy")
      setPrivacyPolicyData(...privacyPolicyData);
    }
  }, [cmsData]);

  React.useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  React.useEffect(() => {
    const { userRole } = formState.values;
    if (userRole === "Student") {
      // getUniversityData();
      setFormState((prevFormstate) => ({
        ...prevFormstate,
        values: {
          ...prevFormstate.values,
          corporation: "",
        },
      }));
    } else if (userRole === "Corporate Employee") {
      // getCorporateData();
      setFormState((prevFormstate) => ({
        ...prevFormstate,
        values: {
          ...prevFormstate.values,
          university: "",
        },
      }));
    } else if (userRole === "Individual") {
      setFormState((prevFormstate) => ({
        ...prevFormstate,
        values: {
          ...prevFormstate.values,
          corporation: "",
          university: "",
        },
      }));
    }
  }, [formState.values.userRole]);

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
        firstName: formState.values.firstName,
        lastName: formState.values.lastName,
        email: formState.values.email,
        password: formState.values.password,
        role: formState.values.userRole,
        university: formState.values.university,
        corporate: formState.values.corporation,
        doNotSell: doNotSell,
      };
      const response = await new ApiHelper().FetchFromServer(
        ApiRoutes.SIGNUP.service,
        ApiRoutes.SIGNUP.url,
        ApiRoutes.SIGNUP.method,
        ApiRoutes.SIGNUP.authenticate,
        undefined,
        undefined,
        data
      );
      if (response && !response.isError) {
        Toast.fire({
          icon: "success",
          title: response.data.message,
        });
        if (props.categoryId && props.categoryId !== "") {
          props.setSignUpOpen(false);
          setIsLoading(false)

          //props.handleAuthModalClose()
        } else {
          router.push("/signin");
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

  const handleCheckboxChange = (event) => {
    setDoNotSell(event.target.checked);
  };
  const handleCheckboxChange1 = (e) => {

    setTempleteCheckboxes({ ...templeteCheckboxes, [e.target.name]: e.target.checked });
  }
  useEffect(() => {
    if (templeteCheckboxes.privacyPolicy && templeteCheckboxes.termsConditions) {
      setDisableState(false)
    }
    else {
      setDisableState(true)
    }
  }, [templeteCheckboxes])
  const modalTriggering = () => {
    setModalState(true);
  };
  const modalTriggering1 = () => {
    setModalOneState(true);
  };
  const modalTriggering2 = () => {
    setModalTwoState(true);
  };
  const handleClose = () => {
    setModalState(false);
  };
  const handleClose1 = () => {
    setModalOneState(false);
  };
  const handleClose2 = () => {
    setModalTwoState(false);
  };
  const [isLoading, setIsLoading] = useState(false)
  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;
  return (
    <>
      {
        isLoading ? <Loader /> : null
      }
      <div className={classes.root}>
        <form name='password-reset-form' method='post' onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                placeholder='First name'
                label='First name *'
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
            <Grid item xs={6}>
              <TextField
                placeholder='Last name'
                label='Last name *'
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
            <Grid item xs={12}>
              <TextField
                id='outlined-select-currency-native'
                select
                size='medium'
                name={"userRole"}
                fullWidth
                label=''
                value={formState.values.userRole}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                helpertext={
                  hasError("userRole") ? formState.errors.userRole[0] : null
                }
                variant='outlined'
              >
                <option value={""}>Please select Type</option>

                {userRoles && userRoles.length ?
                  userRoles.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))
                  : null}
              </TextField>
              {
                hasError("userRole") ?
                  <span className={classes.errorText}>
                    {formState.errors.userRole[0]}
                  </span>
                  :
                  null
              }
            </Grid>
            {formState.values.userRole === "Student" ? (
              <Grid item xs={12}>
                <TextField
                  id='outlined-select-currency-native'
                  select
                  size='medium'
                  name={"university"}
                  fullWidth
                  value={formState.values.university}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  helpertext={
                    hasError("university") ? formState.errors.university[0] : null
                  }
                  variant='outlined'
                >
                  <option value={""}>Please select University</option>
                  {universityData.map((option, index) => (
                    <option key={index} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </TextField>
                {
                  hasError("university") ?
                    <span className={classes.errorText}>
                      {formState.errors.university[0]}
                    </span>
                    :
                    null
                }
              </Grid>
            ) : (
              ""
            )}
            {formState.values.userRole === "Corporate Employee" ? (
              <Grid item xs={12}>
                <TextField
                  id='outlined-select-currency-native'
                  select
                  size='medium'
                  name={"corporation"}
                  fullWidth
                  value={formState.values.corporation}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  helpertext={
                    hasError("corporation") ? formState.errors.corporation[0] : null
                  }
                  variant='outlined'
                >
                  <option value={""}>Please select Corporate</option>
                  {corporateData.map((option, index) => (
                    <option key={option.index} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </TextField>
                {
                  hasError("corporation") ?
                    <span className={classes.errorText}>
                      {formState.errors.corporation[0]}
                    </span>
                    :
                    null
                }
              </Grid>
            ) : (
              ""
            )}
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
                {
                  hasError("password") ?
                    <span className={classes.errorText}>
                      {formState.errors.password[0]}
                    </span>
                    :
                    null
                }
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    name='doNotSell'
                    color='primary'
                  />
                }
              />
              <span
                className={classes.modalTriggerLable}
                onClick={modalTriggering}
              >
                Do not sell my personal information.
              </span>
              <Modal
                fullWidth={true}
                open={modalState}
                handleClose={handleClose}
                iFrame={true}
                title={<h4 className={classes.modalTitle}>MY DATA RIGHTS</h4>}
                content={
                  getTemplateData && getTemplateData.content.length
                    ? ReactHtmlParser(getTemplateData.content)
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} className={classes.marginNegative}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange1}
                    name='privacyPolicy'
                    color='primary'
                    checked={templeteCheckboxes.privacyPolicy}
                  />
                }
              /><span className={classes.modalNoneTriggerText}>I accept</span>
              <span
                className={classes.modalTriggerLable}
                onClick={modalTriggering1}
              >
                privacy policy
              </span>

              <Modal
                fullWidth={true}
                open={modalOneState}
                handleClose={handleClose1}
                iFrame={true}
                // title={<h4 className={classes.modalTitle}>Privacy Policy</h4>}
                content={
                  privayPolicyData && privayPolicyData.content.length
                    ? ReactHtmlParser(privayPolicyData.content)
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} className={classes.marginNegative}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange1}
                    name='termsConditions'
                    color='primary'
                    checked={templeteCheckboxes.termsConditions}

                  />
                }
              />
              <span className={classes.modalNoneTriggerText}>
                I have read and understood
              </span>
              <span
                className={classes.modalTriggerLable}
                onClick={modalTriggering2}
              >
                terms and conditions.
              </span>

              <Modal
                fullWidth={true}
                open={modalTwoState}
                handleClose={handleClose2}
                iFrame={true}
                // title={<h4 className={classes.modalTitle}></h4>}

                content={
                  termsNcondtionData && termsNcondtionData.content.length
                    ? ReactHtmlParser(termsNcondtionData.content)
                    : null

                }
              />

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
                disabled={disableState}
                type='submit'
                color='primary'
                fullWidth
                className={classes.commonBtn}
              >
                Sign Up
              </Button>
            </Grid>
            {props.setSignUpOpen ? (
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
                    Already have an account?
                  </Typography>
                  <span
                    onClick={() => props.setSignUpOpen(false)}
                    className={classes.link}
                  >
                    &nbsp; Sign In
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
                  Already have an account?{" "}
                  <Link href='/signin'>
                    <a className={classes.authLink}>
                      <LearnMoreLink title='Sign in' />
                    </a>
                  </Link>

                </Typography>
              </Grid>
            )}
          </Grid>
        </form>
      </div>
    </>
  );
};

export default Form;
