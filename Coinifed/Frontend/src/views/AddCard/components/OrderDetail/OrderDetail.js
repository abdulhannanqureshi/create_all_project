import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import blue from '@material-ui/core/colors/blue';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import Toast from 'components/toaster';
import { ApiRoutes } from 'config';
import { ApiHelper } from 'helper';
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';
import validate from 'validate.js';
import { useStore } from '../../../../store';
import Cookies from 'js-cookie';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      backgroundColor:'#fff'
    },
  },
  sectionDescription: {
    background: blue[900],
  },
  sectionAlternateForm: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 300px, ${theme.palette.primary.dark} 0%)`,
  },
  textWhite:{
    color: '#fff'
  },
  error_msg:{
    color:"red"
  },
  success_msg:{
    color:"green"
  },
  heroContainer:{
    minWidth:"1236px",
  },
  contentSection:{
    minHeight:"500px",
    position:"relative",
    '& p':{
      fontSize:"18px",
      lineHeight:"28px"
    }
  },
  sectionHeader:{
    paddingBottom:"30px",
    borderBottom:"1px solid #ddd",
    marginBottom:"20px"
  },
  listItem:{
    display:'flex',
    justifyContent: 'space-between'
  },
  modualWrap:{
    borderBottom:"1px solid #ddd",
    marginBottom:"20px"
  },
  modualAmount:{
    width:"100px",
    fontWeight:"700"
  },
  modualList:{
    fontSize:"18px",
    position:"relative",
    paddingLeft:"20px",
    paddingBottom:"20px",
    fontWeight: "300",
    color: "#020202",
    '&::before': {
      content:' "" ',
      display:"block",
      width:"10px",
      height:"10px",
      position:"absolute",
      backgroundColor: '#000',
      top: '5px',
      left: '0px',
      borderRadius:"50%"
    },
  },
  calculationBlock:{
    paddingBottom:"15px"
  },
  calcTitle:{
    paddingRight:"20px",
    textAlign:"right",
    width:"calc(100% - 100px)",
    fontSize: '18px'
  },
  calcValue:{
    width:"100px",
    fontSize: '18px',
    fontWeight: '800'
  },
  apply_btn:{
    width:"200px"
  },
  paymentWrap:{
    backgroundColor:"#eeeeee85",
    border:"1px solid #ddd"
  },
  paymentLoader:{
    position: 'absolute',
    zIndex: '10',
    top: '0',
    left:'0',
    width: '100%',
    height: '100%',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  formError:{
    color:"red",
    fontSize:"18px",
  },
  cardInput:{
    border:"1px solid rgba(0, 0, 0, 0.23)",
    padding:"18.5px 14px",
    height: "1.1876em",
    margin: "0",
    display: "block",
    minWidth: "0",
    background: "none",
    // boxSizing: "content-box",
    letterSpacing: "inherit",
    animationDuration: "10ms",
    borderRadius: "4px",
    backgroundColor:"#fff",
    height:"61px",
    fontSize:"1rem",
    width:"100%"
  },
  promoCodeBlock:{
    fontSize:"16px"
  },
  promoCode:{
    padding:"5px 10px",
    fontWeight:"900",
    color: "#f95c20",
    border: "1px solid #f96b36",
    margin: "0px 5px",
    borderRadius: "20px"
  },
  paymentButton:{
    background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    padding: '10px 30px',
    color: '#fff',
    fontWeight: '900',
    fontSize: '16px',
    width:"100%"
  },
  fontWeight700:{
    fontWeight:"700"
  },
  errorText:{
    color: 'red',
    fontSize: "14px"
  },
}));

const schema = {
  cardHolderName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  cardNumber: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 17,
      maximum: 19,
    },
  },
  expiry: {
    presence: { allowEmpty: false, message: 'date is required' },
  },
  cvc: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 3,
      maximum: 4,
    },
  },
}

const OrderDetail = props => {
  const { authToken } = props;
  const classes = useStyles();
  const {modualData, selectedId, courseId,siteDiscountTemp, courseTitle,promoId} = props
  const [loader, setLoader] = useState(false);
  const [paymentloader, setPaymentLoader] = useState(false);
  const [modualFinal, setModualFinal] = useState([]);
  // As per condition 4 module 1000 and 8 module 2000
  const [error, setError] = useState('');
  const [formError, setFormError] = useState('');
  const { getCartLength } = useStore();
  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  useEffect((props) => {
    fetchUserData();
  },[]);

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, []);
  const { logoutTokenHandle } = useStore();
  const [siteDiscount,setSiteDiscount] = useState("")
  useEffect(() => {
    const modualData = []
    setModualFinal(props.selectedId)
    setSiteDiscount(siteDiscountTemp)
  },[props])
  
  const handleChange = event => {
    event.persist();
    const errors = validate(
      {
        ...formState.values,
        [event.target.name]:event.target.value,
      },
      schema);
    setFormState(formState => ({
      ...formState,
      errors: {
        ...errors
      },
      values: {
        ...formState.values,
        [event.target.name]:event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
      isValid: errors ? false : true,
    }));
    setFormError('')
    setPaymentResponse('')
  };

  const fetchUserData =async()=>{
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.GETUSERDETAILS.service,
      ApiRoutes.GETUSERDETAILS.url,
      ApiRoutes.GETUSERDETAILS.method,
      ApiRoutes.GETUSERDETAILS.authenticate,
      authToken,
      undefined,
      undefined
    );
    if (response && !response.isError) {
      const data = response.data.data
      setFormState(formState => ({
        ...formState,
        values:{
          firstName:data.firstName,
          lastName:data.lastName,
          email:data.email
        }
      }));
      setLoader(false)
    }
    else{
      Toast.fire({
        icon: 'error',
        title: response.messages[0]
      })
      router.push('/signin')
      logoutTokenHandle();
      localStorage.removeItem('token');
      localStorage.removeItem('SelectedCourseModules');
      Cookies.remove('token');
    }
  }

  const handlePayment=()=>{
    if (formState.isValid) {
      const {firstName,lastName,email,cardHolderName,cardNumber,cvc,expiry} = formState.values
      const getCurrentYear = new Date().getFullYear()
      const currentYear = getCurrentYear.toString().substring(2)
      const card_exp_month = expiry.substring(0,2);
      const card_exp_year = expiry.substring(3);
      if(card_exp_month > 12 ){
        setFormError("Please enter a valid month")
        return
      }
      if(card_exp_year < currentYear ){
        setFormError("Card expiry can not be set to less than current year")
        return
      }
      const data={
        email,
        name:`${firstName}${lastName}`,
        cardNumber:cardNumber.replace(/\s/g, ""),
        cardExpMonth:card_exp_month,
        cardExpYear:card_exp_year,
        cardCvc:cvc,
        cardName:cardHolderName,
        promoId:promoId,
        siteDiscount:siteDiscount,
        moduleId:modualFinal,
      }
      makePayment(data)
    }
    else{
      setFormState((formState) => ({
        ...formState,
        touched: {
          ...formState.touched,
          ...formState.errors,
        },
        isValid: false,
      }));
    }
  }
  const [paymentResponse, setPaymentResponse] = useState('');
  const makePayment =async(data)=>{
    setPaymentLoader(true)
    props.handleCancelBtn(true)
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.MAKEPAYMENT.service,
      ApiRoutes.MAKEPAYMENT.url,
      ApiRoutes.MAKEPAYMENT.method,
      ApiRoutes.MAKEPAYMENT.authenticate,
      authToken,
      undefined,
      data
    );
    if (response && !response.isError) {
      const data = response.data.data
      Toast.fire({
        icon: 'success',
        title: "Payment successfull"
      })
      props.handleOrderModalClose()
      props.handleLoader(true)
      localStorage.setItem("SelectedCourseModules", JSON.stringify([]));
      localStorage.setItem("purchaseCompleteCourse", JSON.stringify({}));
      localStorage.setItem("allCourseModules", JSON.stringify([]));
      getCartLength(0)
      alertBox()
    }
    else{
      Toast.fire({
        icon: 'error',
        title: response.messages[0]
      })
      setPaymentResponse(response.messages[0])
      setPaymentLoader(false)
      props.handleCancelBtn(false)
    }
  }

  const alertBox =()=>{
    Swal.fire({
      text: 'Your Order has been successfully placed.',
      padding: '2em',
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Go  To Dashboard',
    }).then((result) => {
      router.push('/dashboard?pid=billing');
    })
  }

  const hasError = field =>
  formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div>
      <Box className={classes.contentSection}>
      {paymentloader ?
        <div className={classes.paymentLoader}>
          <Box>
            <CircularProgress />
          </Box>
          <Box pt={2}>
            <Typography variant="h6">
              Please Wait....
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">
              Don't refresh page or don't use back button while payment is in progress.
            </Typography>
          </Box>
        </div>
        :""
      }
        {!loader ?
        <>
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                <Box p={2} className={clsx(classes.paymentWrap,classes.root)}>
                <Typography
                  variant={isMd ? 'h5' : 'body1'}
                  className={clsx(
                    classes.fontWeight700,
                    classes.sectionHeader,
                  )}
                >
                Payment Details
                </Typography>
                <Grid container spacing={isMd ? 2 : 2}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    First Name
                  </Typography>
                    <TextField
                      placeholder="First name*"
                      label=""
                      variant="outlined"
                      size="medium"
                      fullWidth
                      name="firstName"
                      type="firstName"
                      error={hasError('firstName')}
                      value={formState.values.firstName || ''}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    Last Name
                  </Typography>
                  <TextField
                    placeholder="Last Name *"
                    label=""
                    variant="outlined"
                    size="medium"
                    fullWidth
                    name="lastName"
                    type="lastName"
                    value={formState.values.lastName || ''}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    E-mail
                  </Typography>
                  <TextField
                    placeholder="Email"
                    label=""
                    variant="outlined"
                    size="medium"
                    fullWidth
                    name="email"
                    type="email"
                    value={formState.values.email || ''}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    Card Details*
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    Card Number*
                  </Typography>
                  <InputMask
                    mask="9999-9999-9999-9999"
                    maskChar=" "
                    onChange={handleChange}
                    value={formState.values.cardNumber || ''}
                  >
                  {inputProps =>
                    <TextField
                      placeholder="9999-9999-9999-9999"
                      label=""
                      variant="outlined"
                      size="medium"
                      fullWidth
                      name="cardNumber"
                      helpertext={
                        hasError('cardNumber') ? formState.errors.cardNumber[0] : null
                      }
                      error={hasError('cardNumber')}
                    >
                    </TextField>
                  }
                  </InputMask>
                  {hasError('cardNumber') ?
                    <span className={classes.errorText}>
                      {formState.errors.cardNumber[0]}
                    </span> : null}
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    Expiry* (MM-YY)
                  </Typography>
                  <InputMask
                    mask="99-99"
                    maskChar=" "
                    onChange={handleChange}
                    value={formState.values.expiry || ''}
                  >
                  {inputProps =>
                  <TextField
                    placeholder="MM-YY"
                    label=""
                    variant="outlined"
                    size="medium"
                    fullWidth
                    name="expiry"
                    helpertext={
                      hasError('expiry') ? formState.errors.expiry[0] : null
                    }
                    error={hasError('expiry')}
                  />
                  }
                  </InputMask>
                  {hasError('expiry') ?
                    <span className={classes.errorText}>
                      {formState.errors.expiry[0]}
                    </span> : null}

                    {formError ?
                      <span className={classes.errorText}>
                       {formError}
                    </span> : null}
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    CVC*
                  </Typography>
                    <TextField
                      // placeholder="CVC*"
                      label=""
                      variant="outlined"
                      size="medium"
                      type={"password"}
                      fullWidth
                      name="cvc"
                      onChange={handleChange}
                      value={formState.values.cvc || ''}
                      helpertext={
                        hasError('cvc') ? formState.errors.cvc[0] : null
                      }
                      error={hasError('cvc')}
                    />
                    {hasError('cvc') ?
                    <span className={classes.errorText}>
                      {formState.errors.cvc[0]}
                    </span> : null}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    Card Holder Name*
                  </Typography>
                    <TextField
                      placeholder="Card holder name*"
                      label=""
                      variant="outlined"
                      size="medium"
                      fullWidth
                      name="cardHolderName"
                      helpertext={
                        hasError('cardHolderName') ? formState.errors.cardHolderName[0] : null
                      }
                      error={hasError('cardHolderName')}
                      type="cardHolderName"
                      onChange={handleChange}
                      value={formState.values.cardHolderName || ''}
                    />
                     {hasError('cardHolderName') ?
                    <span className={classes.errorText}>
                      {formState.errors.cardHolderName[0]}
                    </span> : null}
                </Grid>
                <Grid item xs={12} sm={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handlePayment}
                  size="large"
                  className={classes.paymentButton}
                >
                  Make Payment
                </Button>
                </Grid>
                  <Box className={classes.formError} pt={3}>{paymentResponse}</Box>
                </Grid>
                </Box>
              </Grid>
            </Grid>
        </>
          :""
        }
      </Box>
    </div>
  );
};

export default OrderDetail;
