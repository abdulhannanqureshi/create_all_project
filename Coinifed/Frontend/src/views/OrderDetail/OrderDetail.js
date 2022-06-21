import React,{useEffect, useState} from 'react';
import clsx from 'clsx';
import Swal from 'sweetalert2'
// import CreditCardInput from 'react-credit-card-input';
import {ApiHelper} from 'helper'
import { ApiRoutes } from 'config';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import  useTheme  from '@material-ui/core/styles/useTheme';
import Toast from 'components/toaster';
import  Button  from '@material-ui/core/Button';
import  TextField   from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import  useMediaQuery  from '@material-ui/core/useMediaQuery';
import  Grid  from '@material-ui/core/Grid';
import  Typography  from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import { Section, SectionAlternate } from 'components/organisms';
import { HeroBackground } from 'components/organisms';
import router from 'next/router';

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
  creditInput:{
    border:'5px solid #000'
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
}));

const OrderDetail = () => {
  const classes = useStyles();
  const [loader, setLoader] = useState(false);
  const [couponLoader, setCouponLoader] = useState(false);
  const [paymentloader, setPaymentLoader] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [courseData, setCourseData] = useState('');
  const [modualList, setModualList] = useState([]);
  const [modualFinal, setModualFinal] = useState([]);
  const [countTotal, setCountTotal] = useState(0);
  const [error, setError] = useState('');
  const [coupanValue, setCoupanValue] = useState('');
  const [coupanCode, setCoupanCode] = useState('');

  const [formState, setFormState] = React.useState({
    values: {
      firstName:'',
      lastName:'',
      email:'',
      couponValue:'',
      cardHolderName:''
    },
  });
  const [fieldStyle, setFieldStyle] = useState({
    border : '2px solid #ccc',
  });
  const [inputStyle, setInputStyle] = useState({
    fontSize:'16px'
  });
  const [containerStyle, setContainerStyle] = useState({
    width :'100%'
  });

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  useEffect(() => {
    const localData = localStorage.getItem('orderDetails');
    if(localData){
    const courseId  = JSON.parse(localData).courseId
      if(courseId){
        fetchUserData()
        fetchData(courseId)
      }
      else{
        router.push('/courses')
      }
    }
    else{
      router.push('/courses')
    }

  },[]);

  useEffect(() => {
    const localData = localStorage.getItem('orderDetails');
    const modualData = JSON.parse(localData).modualData
    if(modualList.length > 0){
      const filteredList = modualList.filter((item) => modualData.includes(item._id))
      setModualFinal(filteredList)
      const countTotal = filteredList.map(item => item.amount).reduce((prev, next) => parseInt(prev) + parseInt(next));
      setCountTotal(countTotal)
    }
  },[modualList])

  const handleCardNumberChange =(event)=>{
    setCardNumber(event.target.value)
  }

  const handleCardExpiryChange =(event)=>{
    setExpiry(event.target.value)
  }

  const handleCardCVCChange =(event)=>{
    setCvc(event.target.value)
  }

  const handleChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value,
      },
    }));
    setError("")
  };

  const fetchData =async(id)=>{
    setLoader(true)
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.COURSEDETAILS.service,
      ApiRoutes.COURSEDETAILS.url.replace(":id",id),
      ApiRoutes.COURSEDETAILS.method,
      ApiRoutes.COURSEDETAILS.authenticate,
      undefined,
      undefined,
      id
    );
    if (response && !response.isError) {
      const data = response.data.data.course
      const modualData = response.data.data.moduleDetails
      setCourseData({
        ...courseData,
        data
      });
      setModualList(modualData)
      setLoader(false)

    }
    else{
      Toast.fire({
        icon: 'error',
        title: "Something went wrong"
      })
    }
  }

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
        'moduleId' : modualFinal
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
    }
    else{
      Toast.fire({
        icon: 'error',
        title: response.messages[0]
      })
      setCouponLoader(false)
    }
  }

  const handlePayment=()=>{
    if(cardNumber === '' || expiry === '' || cvc === ''){
      Swal.fire('Please fill required details')
      return
    }
    else{
      const localData = localStorage.getItem('orderDetails');
      const modualData = JSON.parse(localData).modualData
      const {firstName,lastName,email,cardHolderName} = formState.values
      const card_exp_month = expiry.slice(0, 2);
      const card_exp_year = expiry.substring(5, 7);

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
      }
      makePayment(data)
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
      localStorage.setItem('orderDetails', '');
      alertBox()
    }
    else{
      Toast.fire({
        icon: 'error',
        title: response.message
      })
    }
  }

  const alertBox =()=>{
    Swal.fire({
      title: 'Your Order has been Successfully Placed',
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Go  To Dashboard',
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/dashboard')
      }
    })
  }

  return (
    <div>

      <HeroBackground backgroundColor={"#5120FF"}>
        <Section className={classes.heroContainer}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} sm={12} md={12} data-aos="fade-up" >
            <Typography
                variant={isMd ? 'h3' : 'body1'}
                className={clsx(
                  classes.textWhite,
                  classes.fontWeight700,
                )}
              >
                Order Detail
            </Typography>
          </Grid>
        </Grid>
        </Section>
      </HeroBackground>
      <Section className={classes.contentSection}>
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
              <Grid item xs={12} sm={6} md={6}  >
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
                {courseData.data &&courseData.data.title ? courseData.data.title : ""}
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
                       {entity.amount ? `$${entity.amount}` : null}
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
                <Box className={classes.calcTitle}>Discount Applied : </Box>
                <Box className={classes.calcValue}>
                  {`${coupanCode ? `$${coupanCode.discountedAmount}` : '-'}`}
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                className={classes.calculationBlock}
              >
                <Box className={classes.calcTitle}>Total : </Box>
                <Box className={classes.calcValue}>
                  {`$${coupanCode ? coupanCode.grandTotal : countTotal}`}
                </Box>
              </Box>

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
              </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}  >
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
                    cardNumberInputProps={{ value: cardNumber, onChange: handleCardNumberChange }}
                    cardExpiryInputProps={{ value: expiry, onChange: handleCardExpiryChange }}
                    cardCVCInputProps={{ value: cvc, onChange: handleCardCVCChange }}
                    fieldClassName="creditInput"
                    fieldStyle={fieldStyle}
                    inputStyle={inputStyle}
                    containerStyle={containerStyle}
                  /> */}
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
                >
                  Make Payment
                </Button>
                </Grid>
                </Grid>
                </Box>
              </Grid>
            </Grid>
        </>
          :""
        }
      </Section>
    </div>
  );
};

export default OrderDetail;
