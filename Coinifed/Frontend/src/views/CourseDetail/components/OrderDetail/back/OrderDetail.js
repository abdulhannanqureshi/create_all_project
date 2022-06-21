import React,{useEffect, useState} from 'react';
import clsx from 'clsx';
import Swal from 'sweetalert2'
import InputMask from 'react-input-mask'
import {ApiHelper} from 'helper'
import { ApiRoutes } from 'config';
import validate from 'validate.js';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { colors, Grid, useMediaQuery, Typography,Button, List, ListItem, ListItemIcon, TextField, ListItemText, Box, CircularProgress} from '@material-ui/core';
import Toast from 'components/toaster';
import { Section } from 'components/organisms';
import router from 'next/router';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      backgroundColor:'#fff'
    },
  },
  sectionDescription: {
    background: colors.blue[900],
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
  }
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
      minimum: 19,
      maximum: 19,
    },
  },
  expiry: {
    presence: { allowEmpty: false, message: 'is required' },
  },
  cvc: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 3,
      maximum: 3,
    },
  },
}

const OrderDetail = props => {
  const classes = useStyles();
  const {modualData, selectedId, courseId, courseTitle,promoCode} = props
  const [loader, setLoader] = useState(false);
  const [couponLoader, setCouponLoader] = useState(false);
  const [paymentStatusLoader, setPaymentStatusLoader] = useState(true);
  const [paymentloader, setPaymentLoader] = useState(false);
  const [modualFinal, setModualFinal] = useState([]);
  const [countTotal, setCountTotal] = useState(0);
  const [countDiscountTotal, setCountDiscountTotal] = useState(0);
  const [countDiscountValue, setCountDiscountValue] = useState(0);
  // As per condition 4 module 1000 and 8 module 2000
  const [isCompleteCourse, setIsCompleteCourse] = useState(false);
  const [error, setError] = useState('');
  const [formError, setFormError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [coupanValue, setCoupanValue] = useState('');
  const [coupanCode, setCoupanCode] = useState('');
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

  useEffect(() => {
    fetchUserData()
  },[]);

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  useEffect(() => {
    console.log(props,'props')
    // const modualData = props.modualData
    if(modualData.length > 0){
      const filteredList = modualData.filter((item) => selectedId.includes(item._id))
      setModualFinal(filteredList)
      let countTotal = filteredList.map(item => item.amount).reduce((prev, next) => parseInt(prev) + parseInt(next));
      setCountTotal(countTotal)
      if(modualData.length == selectedId.length){
        setIsCompleteCourse(true)
        setCountDiscountTotal(modualData.length == 4 ? 1000 : modualData.length == 8 ? 2000 : countTotal)
        setCountDiscountValue(modualData.length == 4 ? 200 : modualData.length == 8 ? 400 : countTotal)
      }
    }
  },[modualData])

  const handleChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
    setFormError('')
  };

  const fetchUserData =async()=>{
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.GETUSERDETAILS.service,
      ApiRoutes.GETUSERDETAILS.url,
      ApiRoutes.GETUSERDETAILS.method,
      ApiRoutes.GETUSERDETAILS.authenticate,
      undefined,
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
        title: "Something went wrong"
      })
      router.push('/signin')
      localStorage.setItem('orderDetails', '');
    }
  }

  const handleApplyCoupon = () => {
    if(!formState.values.couponValue){
      setError("Please enter a valid Coupon code")
    }
    else{
      setCouponLoader(true)
      setCoupanValue(formState.values.couponValue)
      applyCoupon({
        'promoCode': formState.values.couponValue,
        'moduleId' : selectedId,
        'courseId' : courseId,
        'isCompleteCourse':isCompleteCourse
      })
    }
  };

  const applyCoupon = async(data)=>{
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.APPLYCOUPON.service,
      ApiRoutes.APPLYCOUPON.url,
      ApiRoutes.APPLYCOUPON.method,
      ApiRoutes.APPLYCOUPON.authenticate,
      undefined,
      data
    );
    if (response && !response.isError) {
      const data = response.data.data
      setCoupanCode(data)
      setCouponLoader(false)
      setSuccessMsg(response.data.message)
    }
    else{
      setError(response.messages[0])
      Toast.fire({
        icon: 'error',
        title: response.messages[0]
      })
      setCouponLoader(false)
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
        promoId:coupanCode.promoId,
        moduleId:modualFinal,
        isCompleteCourse
      }
      makePayment(data)
    }
    else{
      setFormError("Please fill all required details")
    }
  }

  const makePayment =async(data)=>{
    setPaymentLoader(true)
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.MAKEPAYMENT.service,
      ApiRoutes.MAKEPAYMENT.url,
      ApiRoutes.MAKEPAYMENT.method,
      ApiRoutes.MAKEPAYMENT.authenticate,
      undefined,
      data
    );
    if (response && !response.isError) {
      const data = response.data.data
      Toast.fire({
        icon: 'success',
        title: "Payment successfull"
      })
      setPaymentLoader(false)
      props.handleOrderModalClose()
      alertBox()
    }
    else{
      Toast.fire({
        icon: 'error',
        title: response.message
      })

      setFormError(response.messages[0])
      setPaymentLoader(false)
    }
  }

  const alertBox =()=>{
    Swal.fire({
      text: 'Your Order has been Successfully Placed',
      padding: '2em',
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Go  To Dashboard',
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/dashboard?pid=billing')
      }
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
            <Grid container spacing={isMd ? 2 : 2}>
              <Grid item xs={12} sm={7} md={7}  >
                <Typography
                  variant={isMd ? 'h5' : 'body1'}
                  className={clsx(
                    classes.fontWeight700,
                    classes.sectionHeader,
                  )}
                >
                Review Your Order Details
                </Typography>
                <Typography
                  variant={isMd ? 'h5' : 'body1'}
                  className={clsx(
                    classes.fontWeight700,
                  )}
                >
                {courseTitle || ""}
                </Typography>
                <Box pt={5} pb={3} className={classes.modualWrap}>
                {modualFinal.map((entity, index) => {
                    return (
                    <Box key={index}
                      display={'flex'} justifyContent={"space-between"}
                      className={classes.modualList}
                    >
                      <Box className={classes.modualTitle}>
                        {entity.moduleName}
                      </Box>
                      <Box className={classes.modualAmount}>
                       {entity.amount ? `$${entity.amount.toFixed(2)}` : null}
                      </Box>
                    </Box>
                    );
                  })}
                </Box>
                <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                className={classes.calculationBlock}
              >
                <Box className={classes.calcTitle}>Order Total : </Box>
                <Box className={classes.calcValue}>
                  {`$${countTotal ? countTotal.toFixed(2) : 0}`}
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                className={classes.calculationBlock}
              >
                <Box className={classes.calcTitle}>Promo Discount Applied : </Box>
                <Box className={classes.calcValue}>
                  {`${coupanCode ? `$${coupanCode.discountedAmount.toFixed(2)}` : '-'}`}
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                className={classes.calculationBlock}
              >
                <Box className={classes.calcTitle}>Grand Total : </Box>
                <Box className={classes.calcValue}>
                  {`$${countDiscountTotal && coupanCode ? (countDiscountTotal - coupanCode.discountedAmount).toFixed(2) :  countDiscountTotal && !coupanCode ? countDiscountTotal.toFixed(2) : countTotal.toFixed(2)}`}
                  {/* {`$${coupanCode ? coupanCode.grandTotal.toFixed(2) : countTotal.toFixed(2)}`} */}
                </Box>
              </Box>
              {/* <Box textAlign={'right'}>
              <p className={classes.success_msg}>Hurry!! Discount has applied on Complete Course Purchase</p>
              </Box> */}

              <Box display="flex" justifyContent="center" p={3}>
                <TextField
                  placeholder="Coupon Code"
                  label="Coupon Code"
                  variant="outlined"
                  size="medium"
                  name="couponValue"
                  fullWidth
                  type="couponValue"
                  onChange={handleChange}
                  value={coupanValue ? coupanValue : formState.values.couponValue || ''}
                  />
                  {couponLoader ?
                    <Button variant="contained" color="secondary" className={classes.apply_btn}>
                        Processing....
                    </Button>
                    :
                    <Button variant="contained" color="secondary" onClick={handleApplyCoupon} className={classes.apply_btn}>
                        Apply Code
                    </Button>
                  }
              </Box>
              <Box display="flex" pl={3} >
                <p className={classes.error_msg}>{error}</p>
                <p className={classes.success_msg}>{successMsg}</p>
              </Box>
              <Box pl={3} pt={2}>
                <Typography
                  variant={'span'}
                  className={classes.promoCodeBlock}
                >
                Available Promo Codes For Course -:
                </Typography>
                {promoCode.length ? promoCode.map((code,index)=>{
                  return(
                    <Typography
                      variant={'span'}
                      key={index}
                      className={classes.promoCode}
                    >
                      {code}
                    </Typography>
                  )
                }) :
                <Typography
                variant={'span'}
                className={classes.promoCode}
                >
                  No any Promo Code is availble for This Course
                </Typography> }
              </Box>
              </Grid>
              <Grid item xs={12} sm={5} md={5}>
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
                  {/* <CreditCardInput
                    cardNumberInputProps={{ value: cardNumber, onChange: handleCardNumberChange,className:classes.cardInput }}
                    cardExpiryInputProps={{ value: expiry, onChange: handleCardExpiryChange }}
                    cardCVCInputProps={{ value: cvc, onChange: handleCardCVCChange }}
                    fieldClassName="creditInput"
                    fieldStyle={fieldStyle}
                    inputStyle={inputStyle}
                    containerStyle={containerStyle}
                    customTextLabels={"Hello"}
                  /> */}
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
                <Box className={classes.formError} pt={3}>{formError}</Box>
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
