import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Swal from 'sweetalert2'
import InputMask from 'react-input-mask'
import { ApiHelper } from 'helper'
import { ApiRoutes } from 'config';
import validate from 'validate.js';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import  useTheme  from '@material-ui/core/styles/useTheme';
import  Button  from '@material-ui/core/Button';
import  useMediaQuery  from '@material-ui/core/useMediaQuery';
import  Grid  from '@material-ui/core/Grid';
import  Typography  from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import  TextField   from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Toast from 'components/toaster';
import { useRouter } from 'next/router'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Loader from 'components/common/Loader/loader';
const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      backgroundColor: '#fff'
    },
  },
  paddingExtra:
  {
    padding: "20px 60px 20px 60px",
    boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
  },
  sectionDescription: {
    background: blue[900],
  },
  sectionAlternateForm: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 300px, ${theme.palette.primary.dark} 0%)`,
  },
  textWhite: {
    color: '#fff'
  },
  error_msg: {
    color: "red"
  },
  success_msg: {
    color: "green"
  },
  heroContainer: {
    minWidth: "1236px",
  },
  contentSection: {
    minHeight: "500px",
    position: "relative",
    '& p': {
      fontSize: "18px",
      lineHeight: "28px"
    }
  },
  sectionHeader: {
    paddingBottom: "30px",
    borderBottom: "1px solid #ddd",
    marginBottom: "20px"
  },
  fullHeight: {
    height: "100%"
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  modualWrap: {
    borderBottom: "1px solid #ddd",
    marginBottom: "20px"
  },
  modualAmount: {
    width: "100px",
    fontWeight: "700"
  },
  cardPayment: {
    marginTop: "70px",
    marginBottom: "70px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
  },
  card1: {
    marginTop: "30px",
  },
  modualList: {
    fontSize: "18px",
    position: "relative",
    paddingLeft: "20px",
    paddingBottom: "20px",
    fontWeight: "300",
    color: "#020202",
    '&::before': {
      content: ' "" ',
      display: "block",
      width: "10px",
      height: "10px",
      position: "absolute",
      backgroundColor: '#000',
      top: '5px',
      left: '0px',
      borderRadius: "50%"
    },
  },
  calculationBlock: {
    paddingBottom: "15px"
  },
  calcTitle: {
    paddingRight: "20px",
    textAlign: "right",
    width: "calc(100% - 100px)",
    fontSize: '18px'
  },
  calcValue: {
    width: "100px",
    fontSize: '18px',
    fontWeight: '800'
  },
  apply_btn: {
    width: "200px"
  },
  paymentWrap: {
    borderRight: "1px solid #ddd"
  },
  paymentwrapColor:
  {
    backgroundColor: "#eeeeee85",
  },
  paymentLoader: {
    position: 'absolute',
    zIndex: '10',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  formError: {
    color: "red",
    fontSize: "18px",
  },
  cardInput: {
    border: "1px solid rgba(0, 0, 0, 0.23)",
    padding: "18.5px 14px",
    height: "1.1876em",
    margin: "0",
    display: "block",
    minWidth: "0",
    background: "none",
    // boxSizing: "content-box",
    letterSpacing: "inherit",
    animationDuration: "10ms",
    borderRadius: "4px",
    backgroundColor: "#fff",
    height: "61px",
    fontSize: "1rem",
    width: "100%"
  },
  paymentButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    padding: '10px 30px',
    color: '#fff',
    fontWeight: '900',
    fontSize: '16px',
    width: "100%"
  },
  fontWeight700: {
    fontWeight: "700"
  },
  displayFlex: {
    display: "flex",
    justifyContent: "space-between",

  },
  errorRed: {
    color: "red"
  },
  commonBtn: {
    display: "inline-block",
    padding: "6px 22px",
    backgroundColor: "#5120FF",
    color: "#fff",
    fontSize: 16,
    borderRadius: 5,
    minWidth: 142,
    border: "solid 1px #5120FF",
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#5120FF",
      boxShadow: "none",
    },
  },
  paymentLoader: {
    position: 'absolute',
    zIndex: '10',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  paddingx: {
    padding: "0 0 0 12px"
  },
  loader: {
    display: "flex",
    minHeight: "500px",
    justifyContent: "center",
    alignItems: "center",
  },
  fontSm:
  {
    fontSize: "20px"
  },
  fontDynamic:
  {
    fontSize: "18px"
  },
  marginTopHeading:
  {
    marginTop: "40px"
  },
  marginTopsm:
  {
    marginTop: "61px",
    fontSize: "16px"
  },
  centerAlign:
  {
    display:"flex",
    justifyContent:"center"
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
  }

}

const CertificatePayment = props => {
  const classes = useStyles();
  const { modualData, selectedId, courseId, courseTitle, promoCode } = props
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
  const [errorState, setErrorState] = useState('');
  const [coupanValue, setCoupanValue] = useState('');
  const [coupanCode, setCoupanCode] = useState('');
  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  const [fetchResponseData, setfetchResponseData] = React.useState({
    certificateAmount: "",
    courseTitle: "",
    courseTitle: "",
    firstName: "",
    lastName: "",
    linkExpireDate: "",
    email: "email",
  });
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const router = useRouter();
  const id = router.query;
  const [CourseId, setCourseId] = useState("")
  const [responseStatus, setResponseStatus] = useState(false)
  const [isLoading, setIsloading] = useState(true)
  useEffect(() => {

    if (id.id) {
      setCourseId(id.id);
      fetchUserData(id.id);
    }
  }, [router.query]);

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();
    setFormState(formState => ({
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
    setFormError('')
  };
  function createData(name, content) {
    return { name, content };
  }
  const rows = [
    createData('First name', fetchResponseData.firstName),
    createData('Last name', fetchResponseData.lastName),
    createData('Email', fetchResponseData.email),
    createData('Course title', fetchResponseData.courseTitle),
    createData('Certificate Amount', `${fetchResponseData.certificateAmount} USD`),
  ];
  const fetchUserData = async (id) => {
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.GETPAYMENTCERTIFICATEDETAILS.service,
      ApiRoutes.GETPAYMENTCERTIFICATEDETAILS.url.replace(":id", id),
      ApiRoutes.GETPAYMENTCERTIFICATEDETAILS.method,
      ApiRoutes.GETPAYMENTCERTIFICATEDETAILS.authenticate,
      undefined,
      undefined,
      undefined
    );

    if (response && !response.isError) {
      setfetchResponseData(name => ({
        ...name,
        certificateAmount: response.data.data.certificateAmount,
        courseTitle: response.data.data.courseTitle,
        courseTitle: response.data.data.courseTitle,
        firstName: response.data.data.firstName,
        lastName: response.data.data.lastName,
        linkExpireDate: response.data.data.linkExpireDate,
        email: response.data.data.email,

      }));
      setLoader(false);
      setIsloading(false)
      setResponseStatus(true)
    }
    else {
      Toast.fire({
        icon: 'error',
        title: response.messages
      })
      localStorage.setItem('orderDetails', '');
      setIsloading(false)
      setResponseStatus(false);
      setErrorState(response.messages)
      // router.push('/dashboard?pid=billing')
    }
  }

  const handlePayment = () => {
    if (formState.isValid) {
      const { firstName, lastName, email, cardHolderName, cardNumber, cvc, expiry } = formState.values
      const getCurrentYear = new Date().getFullYear()
      const currentYear = getCurrentYear.toString().substring(2)
      const card_exp_month = expiry.substring(0, 2);
      const card_exp_year = expiry.substring(3);
      if (card_exp_month > 12) {
        setFormError("Please enter a valid month")
        return
      }
      if (card_exp_year < currentYear) {
        setFormError("Card expiry can not be set to less than current year")
        return
      }
      const data = {
        cardNumber: cardNumber.replace(/\s/g, ""),
        cardExpMonth: card_exp_month,
        cardExpYear: card_exp_year,
        cardCvc: cvc,
        cardName: cardHolderName,
        certificateAmount: fetchResponseData.certificateAmount,
        courseTitle: fetchResponseData.courseTitle
      }
      makePayment(data)
    }
    else {
      setFormError("Please fill all required details")
    }
  }

  const makePayment = async (data) => {
    setIsPaymentProgessive(true)
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.MAKEPAYMENTCERTIFICATE.service,
      ApiRoutes.MAKEPAYMENTCERTIFICATE.url.replace(":id", CourseId),
      ApiRoutes.MAKEPAYMENTCERTIFICATE.method,
      ApiRoutes.MAKEPAYMENTCERTIFICATE.authenticate,
      undefined,
      undefined,
      data
    );
    if (response && !response.isError) {
      const data = response.data.data
      Toast.fire({
        icon: 'success',
        title: "Payment successful"
      })
      setIsPaymentProgessive(false);
      setFormState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
      })
      alertBox('Your Payment for certificate has been processed successfully.')
    }
    else {
      Toast.fire({
        icon: 'error',
        title: response.message
      })
      setIsPaymentProgessive(false)
      setFormError(response.messages[0])
     
    }
  }

  const convertedDate = (date) => {
    return (new Date(date).toLocaleString())


  }
  const alertBox = (text) => {
    Swal.fire({
      text: text,
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

  // For full page loader 
  const [isPaymentProgessive,setIsPaymentProgessive] = useState(false)
  return (
    <>
    {
      isPaymentProgessive ? <Loader/> : null
    }
      {isLoading ? <div className={classes.paymentLoader}>
        <Box>
          <CircularProgress />
        </Box>
      </div> : <>
        {responseStatus ?
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box width={1200} className={classes.cardPayment}>
              <Grid container >
                <Grid item md="6" className={classes.paymentwrapColor}>
                  <Box p={2} className={clsx(classes.paymentWrap, classes.root)}>
                    <Typography
                      variant={isMd ? 'h5' : 'body1'}
                      className={clsx(
                        classes.fontWeight700,
                        classes.sectionHeader,
                        classes.fullHeight
                      )}
                    >
                      Other details
                    </Typography>
                    <TableContainer component={Paper}>
                      <Table className={classes.table} aria-label="simple table">
                        <TableBody>

                          {rows.map((row) => (
                            <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">{row.content}</TableCell>
                            </TableRow>
                          ))}

                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Typography
                      variant='h6'
                      className={classes.marginTopsm}
                    >
                      {fetchResponseData.linkExpireDate ?
                        <>
                          This link will expire on:-  {convertedDate(fetchResponseData.linkExpireDate)}
                        </>
                        :
                        <>
                          <span className={classes.errorRed}>This link is expired.</span>
                        </>}

                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={5} md={6}>
                  <Box p={2} className={clsx(classes.paymentWrap, classes.root)}>
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
            </Box>
          </Box> :
          <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
            <Box >
              <Grid>
                <Card className={clsx(classes.root, classes.paddingExtra)}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Welcome to Coinifide
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {errorState}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.centerAlign}>
                    <Button
                      className={clsx(classes.commonBtn, classes.anotherCommonBtn)}
                      variant={"outline"}
                      color={"secondary"}
                      onClick={() => router.push('/dashboard?pid=billing')}
                      autoFocus
                    >
                      Go To Dashboard
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Box>
          </Box>


        }
      </>}

    </>

  );
};

export default CertificatePayment;
