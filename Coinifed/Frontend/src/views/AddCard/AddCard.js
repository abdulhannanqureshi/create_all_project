import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import clsx from 'clsx';
import { Modal } from 'components/common';
import { Section } from 'components/organisms';
import Toast from 'components/toaster';
import { ApiRoutes } from 'config';
import { ApiHelper } from 'helper';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import validate from 'validate.js';
import { useStore } from '../../store';
import { OrderDetail } from "./components";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  box:
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  box_shadow: {
    boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
  },
  commonBtn: {
    display: "inline-block",
    padding: 10,
    backgroundColor: "#5120FF",
    color: "#fff",
    fontSize: 16,
    borderRadius: 5,
    minWidth: 200,
    border: "solid 1px #5120FF",
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#5120FF",
    },
  },
  cardHeading: {
    marginLeft: "22px"
  },
  headingCard: {
    fontSize: "30px !important",
    marginLeft: "8px",
    marginTop: "5px"
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
  redIcon: {
    color: "red"
  },
  disabledIcon: {
    color: "red",
    opacity: "0.4",
    cursor: "not-allowed",
  },
  table: {
    minWidth: 650,
  },
  shoppingIcon: {
    fontSize: "30px",
  },
  promoCodeBlock: {
    fontSize: "16px"
  },
  centering: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  space_between:
  {
    display: "flex"
  },
  calculationBlock: {
    paddingBottom: "15px"
  },
  calcTitle: {
    paddingRight: "20px",
    textAlign: "right",
    width: "calc(100% - 150px)",
    fontSize: '17px'
  },
  collapseSmooth: {
    transition: "all 3s ease-out",
    boxShadow: 'none',
  },
  calcValue: {
    width: "150px",
    fontSize: '17px',
    fontWeight: '600',
    textAlign: 'right',
    paddingRight: 25,
  },
  error_msg: {
    color: "red"
  },
  success_msg: {
    color: "green"
  },
  promoCode: {
    padding: "5px 10px",
    fontWeight: "900",
    color: "#f95c20",
    border: "1px solid #f96b36",
    margin: "0px 5px",
    borderRadius: "20px"
  },
  noPromoCode: {
    opacity: "0.4",
    fontSize: 18,
    marginLeft: 5,
  },
  cardHeader: {
    backgroundColor: "#5120ff"
  },
  text_white:
  {
    color: "white"
  },
  rightSide:
  {
    display: "flex",
    justifyContent: "end"
  },
  buttonBox:
  {
    display: "flex",
    justifyContent: "end"
  },
  distance_apart:
  {
    display: "flex",
    justifyContent: "space-between"
  },
  margin_right:
  {
    marginRight: "32px",
    paddingRight: "20px"
  },
  emptyCart: {
    padding: "30px 20px",
    textAlign: "center"
  },
  apply_field: {
    "& .MuiOutlinedInput-root": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  apply_promo_btn: {
    minWidth: 120,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    boxShadow: 'none',
  },
  paymentLoader: {
    position: 'fixed',
    zIndex: '10',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  removeDiscount:
  {
    marginTop: "18px",
    marginLeft: "-27px",
    cursor:"pointer",
    fontSize: "19px",
    color: "red",
    zIndex:"999"
  },
  modifiedBox: {
    [theme.breakpoints.down('md')]: {
      overflowX: "auto",
      display: "block"
    }
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

const AddCard = (props) => {
  const { authToken } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [promoCode, setPromoCode] = useState([]);
  const [OrderTotal, setOrderTotal] = useState("");
  const [loader, setLoader] = useState(false);
  const [couponLoader, setCouponLoader] = useState(false);
  const [formError, setFormError] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [coupanValue, setCoupanValue] = useState("");
  const [coupanCode, setCoupanCode] = useState("");
  const [promoId, setPromoId] = useState("");
  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [SelectedData, setSelectedData] = useState([]);
  const [parentid, setParentId] = useState([]);
  const [moduleIdApi, setModuleIdApi] = useState([]);
  const [generalPromoCode, setGeneralPromoCode] = useState([]);
  const [isCompleteCourse, setIscompleteCourse] = useState(false);
  const [completeCourseDetails, setCompleteCourseDetails] = useState([]);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [checkoutModules, setCheckoutModules] = useState([]);

  const [loaderDashboard, setLoaderDashboard] = useState(false);
  const handleLoader = (status) => {
    setLoaderDashboard(status);
    if (status) {
      setSelectedData([]);
    }
  };
  const [cancelBtn, setCancelBtn] = useState(false);
  const handleCancelBtn = (status) => {
    setCancelBtn(status);
  };

  const getTotalPrice = (cartList, parentId) => {
    const cartModule = cartList.filter(
      (ev) => ev.parentId === parentId || ev._id === parentId
    );
    if (!cartModule.length) return 0;
    return cartModule.map((e) => e.amount).reduce((n, r) => +n + +r);
  };
  const getTotal = (cartList) => {
    const getAllCourse = JSON.parse(localStorage.getItem("allCourseModules"));
    if (getAllCourse && getAllCourse.length) {
      let allModulesData = getAllCourse.map((e) => ({
        parentId: e._id,
        moduleLength: e.modules ? e.modules.length : "",
        price: e.price,
      }));
      const cartDistribute = allModulesData.map((e) => ({
        parentId: e.parentId,
        moduleLength: e.moduleLength,
        courses: cartList.filter((ev) => ev.parentId === e.parentId),
        price:
          e.moduleLength &&
          e.moduleLength ===
            cartList
              .filter((ev) => ev.parentId === e.parentId)
              .filter((e) => !e.labId).length
            ? +e.price
              ? +e.price
              : getTotalPrice(cartList, e.parentId)
            : getTotalPrice(cartList, e.parentId),
      }));
      return cartDistribute.map((e) => e.price).length
        ? cartDistribute.map((e) => e.price).reduce((n, p) => +n + +p)
        : 0;
    }
    return 0;
  };

  const getOrderTotal = (cartList) => {
    const getAllCourse = JSON.parse(localStorage.getItem("allCourseModules"));

    if (getAllCourse && getAllCourse.length) {
      let allModulesData = getAllCourse.map((e) => ({
        parentId: e._id,
        moduleLength: e.modules ? e.modules.length : "",
        price: e.price,
        totalModuleAmount: e.modules.length
          ? e.modules.map((ev) => ev.amount).reduce((n, p) => +n + +p)
          : "",
      }));
      const cartDistribute = allModulesData.map((e) => ({
        parentId: e.parentId,
        moduleLength: e.moduleLength,
        courses: cartList.filter((ev) => ev.parentId === e.parentId),
        price:
          e.moduleLength &&
          e.moduleLength ===
            cartList
              .filter((ev) => ev.parentId === e.parentId)
              .filter((e) => !e.labId).length
            ? +e.totalModuleAmount
            : getTotalPrice(cartList, e.parentId),
      }));
      return cartDistribute.map((e) => e.price).length
        ? cartDistribute.map((e) => e.price).reduce((n, p) => +n + +p)
        : 0;
    }
    return 0;
  };
  // For Save Money
  // const isSaveMoney = (cartList) => {
  //   const totalCartAmount = cartList.map(e => e.amount).reduce((n, p) => +n + +p);
  //   const disCartAmount = getTotal(cartList);
  //   return totalCartAmount - disCartAmount;
  // }

  // For lab free
  const isLabFree = (parentId, cartList) => {
    const getAllCourse = JSON.parse(localStorage.getItem("allCourseModules"));
    let moduleLength = "";
    if (getAllCourse && getAllCourse.length) {
      moduleLength = getAllCourse.find((e) => e._id === parentId).modules
        .length;
    }
    let catModuleLength = cartList
      .filter((ev) => ev.parentId === parentId)
      .filter((e) => !e.labId).length;
    return moduleLength === catModuleLength;
  };

  //getting data from local storage
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const getSessionStored = JSON.parse(
      localStorage.getItem("SelectedCourseModules")
    );
    const allCourseModules = JSON.parse(
      localStorage.getItem("allCourseModules")
    );
    if (allCourseModules !== null) {
      setCompleteCourseDetails(allCourseModules);
    }

    const GeneralPromoCode = JSON.parse(
      localStorage.getItem("GeneralPromoCode")
    );
    if (GeneralPromoCode !== null) {
      setGeneralPromoCode(GeneralPromoCode);
    }
    const promoCode = JSON.parse(localStorage.getItem("promoCode"));
    const ParentIds = JSON.parse(localStorage.getItem("parentIds"));
    if (getSessionStored && getSessionStored.length) {
      setSelectedData(getSessionStored);
    }
    if (promoCode && promoCode.length) {
      setPromoCode(promoCode);
    }
    setIsLoaded(true);
  }, []);

  //re-rendering after the deleting from the cards
  useEffect(() => {
    if (SelectedData && SelectedData.length) {
      localStorage.setItem(
        "SelectedCourseModules",
        JSON.stringify(SelectedData)
      );
      normalDiscount();
      if (SelectedData.length) {
        let Code = SelectedData.map((xyz) => {
          return xyz.promoCode;
        });
        let arrayPromoCode = [].concat(...removeDuplicates(Code, "promoCode"));
        if (arrayPromoCode && arrayPromoCode.length) {
          setPromoCode(arrayPromoCode);
        }
        let countTotal = SelectedData.map((item) => item.amount).reduce(
          (prev, next) => parseInt(prev) + parseInt(next)
        );
        setOrderTotal(countTotal);
        let parentIdentity = SelectedData.map((xyz) => xyz.parentId);
        let resultingParentIds = removeDuplicates(parentIdentity, "parentId");
        setParentId(resultingParentIds);
      }
    } else {
      setOrderTotal("");
    }
  }, [SelectedData]);

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  ///remove duplicacy
  function removeDuplicates(originalArray) {
    var seen = {};
    return originalArray.filter(function (item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }

  //removing course from cards
  const deleteSelected = (id) => {
    if (SelectedData && SelectedData.length) {
      const result = SelectedData.filter((data) => data._id !== id);
      setSelectedData(result);
      setCoupanCode("");
      setPromoId("");
      setCoupanValue("");
      setShowRemove(false);
      setFormState({
        ...formState,
        values: {},
      });
      if (result.length === 0) {
        localStorage.setItem("SelectedCourseModules", JSON.stringify([]));
      }
    }
  };

  //handling text for the coupon
  const handleChange = (event) => {
    event.persist();
    setCoupanValue(event.target.value);
    setShowRemove(false);
    setCoupanValue("");
    setCoupanCode("");
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
    setFormError("");
  };
  // For get parent ids
  const [moduleParentIds, setModuleParentIds] = useState([]);
  useEffect((props) => {
    let getParentsId = JSON.parse(localStorage.getItem("parentIds"));
    if (getParentsId && getParentsId.length) {
      setModuleParentIds(getParentsId);
    }
  }, []);

  ///filtering id wrt to parent id
  const filterIds = () => {
    let testingArray = [];
    const result = group(SelectedData, "parentId");
    function group(arr, key) {
      return [
        ...arr
          .reduce(
            (acc, o) => acc.set(o[key], (acc.get(o[key]) || []).concat(o)),
            new Map()
          )
          .values(),
      ];
    }
    let getWithOutLabelId = SelectedData.filter((e) => !e.labId);
    let getLabelId = SelectedData.filter((e) => e.labId);
    let getLabObj = [];
    getLabelId.map((e) => {
      getLabObj.push({
        parentId: e._id,
        labId: e.labId,
      });
    });

    let moduleIds = [];
    moduleParentIds.map((parentId) => {
      let getLabIds = getLabObj.filter((e) => e.parentId === parentId);
      let getModules = getWithOutLabelId.filter((e) => e.parentId === parentId);
      if (getModules && getModules.length) {
        let getIds = getModules.map((e) => e._id);
        moduleIds.push({
          moduleIds: getIds,
          courseId: parentId,
        });
      } else {
        if (getLabIds && getLabIds.length) {
          moduleIds.push({
            moduleIds: [],
            courseId: parentId,
          });
        }
      }
    });
    ////Balvinder  starts coding
    const apiDataPureArray = [];
    const courseData = completeCourseDetails.map((e) => {
      return apiDataPureArray.push({
        parentId: e._id,
        moduleLength: e.modules ? e.modules.length : "",
        price: e.price,
      });
    });
    const FinalFunction = (cartItem, getLabId) => {
      let labPurchasedVariable = completeCourseDetails.filter(
        (e) => e._id === cartItem.courseId
      );
      const labPurchasedValue = labPurchasedVariable[0].lab.labPurchased;
      let getCurrentItem = apiDataPureArray.filter(
        (e) => e.parentId === cartItem.courseId
      );
      // check with lab
      // if (!labPurchasedValue) {
      //   if (
      //     getCurrentItem[0].moduleLength === cartItem.moduleIds.length &&
      //     getLabId &&
      //     getLabId.length
      //   ) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // } else return false;
      if (getCurrentItem[0].moduleLength === cartItem.moduleIds.length) {
        if (+getCurrentItem[0].price) return true;
        return false;
      } else {
        return false;
      }
    };

    ////Balvinder  ends the coding....
    if (moduleIds && moduleIds.length) {
      moduleIds.map((e) => {
        let labId = completeCourseDetails
          .filter((ev) => ev._id === e.courseId)
          .map((labId) => labId.lab._id);
        if (typeof labId[0] == "undefined") {
          labId = null;
        }
        let getLabId = getLabObj
          .filter((item) => item.parentId === e.courseId)
          .map((e) => e.labId);
        testingArray.push({
          ...e,
          moduleIds: e.moduleIds.length ? e.moduleIds : null,
          labId: getLabId[0] ? getLabId[0] : null,
          isCourseComplete: FinalFunction(e, getLabId),
        });
      });
    } else {
      getLabObj.map((e) => {
        testingArray.push({
          moduleIds: null,
          courseId: e.parentId,
          labId: e.labId,
          isCourseComplete: false,
        });
      });
    }
    return testingArray;
  };

  //handle coupan after the button click
  const handleApplyCoupon = () => {
    if (!formState.values.couponValue) {
      setError("Please enter a valid Coupon code");
    } else {
      let one = filterIds();
      setCouponLoader(true);
      setCoupanValue(formState.values.couponValue);
      applyCoupon({
        promoCode: formState.values.couponValue,
        siteDiscount: siteDiscountTemp,
        moduleId: one,
      });
    }
  };

  const [showRemove, setShowRemove] = useState(false);
  //for applying promocode
  const applyCoupon = async (data) => {
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.APPLYCOUPON.service,
      ApiRoutes.APPLYCOUPON.url,
      ApiRoutes.APPLYCOUPON.method,
      ApiRoutes.APPLYCOUPON.authenticate,
      authToken,
      undefined,
      data
    );
    if (response && !response.isError) {
      const data = response.data.data;
      setCoupanCode(data);
      setCouponLoader(false);
      setSuccessMsg(response.data.message);
      setPromoId(response.data.data.promoId);
      setShowRemove(true);
      Toast.fire({
        icon: "success",
        title: response.messages[0],
      });
      setError("");
    } else {
      setError("");
      Toast.fire({
        icon: "error",
        title: response.messages[0],
      });
      setCouponLoader(false);
    }
  };

  //copying promocode
  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    Toast.fire({
      icon: "success",
      title: "Promo Code copied.",
    });
  };

  ///order modal opening
  const orderDetailOpen = () => {
    const token = localStorage.getItem("token");
    if (token) {
      let one = filterIds();
      setCheckoutModules(one);
      setOrderModalOpen(true);
    }
  };
  // const [count, setCount] = useState(0)
  const handleOrderModalClose = () => {
    setOrderModalOpen(false);
  };
  // For Cart Icon item remove
  const { removeCartHandler } = useStore();

  const removeCoupanEffect = () => {
    setCoupanValue("");
    setCoupanCode("");
    setShowRemove(false);
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        couponValue: "",
      },
      touched: {
        ...formState.touched,
        couponValue: true,
      },
    }));
  };
  const [siteDiscountTemp, setSiteDiscount] = useState("");
  const normalDiscount = () => {
    let orderTotalAmount = getOrderTotal(SelectedData)
      ? `${getOrderTotal(SelectedData).toFixed(2)}`
      : 0.0;
    let GrandTotalAmount = getTotal(SelectedData)
      ? `${getTotal(SelectedData).toFixed(2)}`
      : 0.0;
    let normalDiscountTemp =
      parseInt(orderTotalAmount) - parseInt(GrandTotalAmount);
    setSiteDiscount(normalDiscountTemp);
  };

  return (
    <>
      <Section>
        {loaderDashboard ? (
          <div className={classes.paymentLoader}>
            <Box>
              <CircularProgress />
            </Box>
          </div>
        ) : (
          ""
        )}
        <Card className={classes.root}>
          <CardHeader
            className={classes.cardHeader}
            title={
              <div className={clsx(classes.flex, classes.text_white)}>
                <span>Cart</span>
                <LocalMallOutlinedIcon className={classes.headingCard} />
              </div>
            }
            titleTypographyProps={{ variant: "h4" }}
          />
          <CardContent>
            <div
              className={classes.root}
              className={clsx(classes.box, classes.modifiedBox)}
            >
              <Box width={1100} className={classes.box_shadow}>
                <Grid container>
                  <Grid item xs={12}>
                    <TableContainer
                      component={Paper}
                      className={classes.collapseSmooth}
                    >
                      <Table
                        className={classes.table}
                        aria-label='simple table'
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell>S.No</TableCell>
                            <TableCell>Course name</TableCell>
                            <TableCell>Module name</TableCell>
                            <TableCell>Price($)</TableCell>
                            <TableCell>Remove</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {SelectedData.map((row, index) => (
                            <TableRow key={row._id}>
                              <TableCell component='th' scope='row'>
                                {index + 1}
                              </TableCell>
                              <TableCell>{row.title}</TableCell>
                              <TableCell>{row.moduleName}</TableCell>
                              {!row.labId ? (
                                <TableCell>{row.amount}</TableCell>
                              ) : isLabFree(row._id, SelectedData) ? (
                                <TableCell>
                                  <b>Included</b>
                                </TableCell>
                              ) : (
                                <TableCell>{row.amount}</TableCell>
                              )}
                              <TableCell>
                                <div title='remove'>
                                  {!row.labId ? (
                                    <DeleteOutlineTwoToneIcon
                                      className={classes.redIcon}
                                      onClick={() => {
                                        deleteSelected(row._id);
                                        removeCartHandler();
                                      }}
                                    />
                                  ) : isLabFree(row._id, SelectedData) ? (
                                    <DeleteOutlineTwoToneIcon
                                      className={classes.disabledIcon}
                                    />
                                  ) : (
                                    <DeleteOutlineTwoToneIcon
                                      className={classes.redIcon}
                                      onClick={() => {
                                        deleteSelected(row._id);
                                        removeCartHandler();
                                      }}
                                    />
                                  )}
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                          {!SelectedData.length && isLoaded ? (
                            <TableRow>
                              <TableCell colSpan={5}>
                                <div className={classes.emptyCart}>
                                  <Typography variant={"h5"}>
                                    Your Cart is empty
                                  </Typography>
                                </div>
                              </TableCell>
                            </TableRow>
                          ) : null}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Grid container mt={5} className={classes.distance_apart}>
                      {OrderTotal > 0 ? (
                        <Grid item xs={6}>
                          <Box
                            display='flex'
                            justifyContent='center'
                            ml={2}
                            mt={5}
                          >
                            <TextField
                              placeholder='Coupon Code'
                              label='Coupon Code'
                              variant='outlined'
                              size='medium'
                              name='couponValue'
                              fullWidth
                              type='couponValue'
                              onChange={handleChange}
                              value={
                                coupanValue
                                  ? coupanValue
                                  : formState.values.couponValue || ""
                              }
                              className={classes.apply_field}
                            />
                            {showRemove ? (
                              <HighlightOffIcon
                                onClick={removeCoupanEffect}
                                className={classes.removeDiscount}
                                Tooltip='Remove coupan'
                              />
                            ) : (
                              <>
                                {couponLoader ? (
                                  <Button
                                    variant='contained'
                                    color='secondary'
                                    className={classes.apply_btn}
                                  >
                                    Processing....
                                  </Button>
                                ) : (
                                  <Button
                                    variant='contained'
                                    color='secondary'
                                    className={classes.apply_promo_btn}
                                    onClick={handleApplyCoupon}
                                  >
                                    Apply Code
                                  </Button>
                                )}
                              </>
                            )}
                          </Box>
                          <Box display='flex' ml={2}>
                            <p className={classes.error_msg}>{error}</p>
                          </Box>
                        </Grid>
                      ) : null}
                      <Grid xs={6} item mt={5} className={classes.centering}>
                        {OrderTotal > 0 ? (
                          <Grid xs={12} item>
                            <Box
                              display='flex'
                              alignItems='center'
                              justifyContent='space-between'
                              className={classes.calculationBlock}
                              mt={5}
                            >
                              <Box className={classes.calcTitle}>
                                Order total:
                              </Box>
                              <Box className={classes.calcValue}>
                                {/* {getTotal(SelectedData) ? `$${getTotal(SelectedData).toFixed(2)}` : 'N.A'} */}
                                {getOrderTotal(SelectedData)
                                  ? `$${getOrderTotal(SelectedData).toFixed(2)}`
                                  : "N.A"}
                              </Box>
                            </Box>
                            <Box
                              display='flex'
                              alignItems='center'
                              justifyContent='space-between'
                              className={classes.calculationBlock}
                            >
                              <Box className={classes.calcTitle}>Discount:</Box>
                              <Box className={classes.calcValue}>
                                ${siteDiscountTemp.toFixed(2)}
                              </Box>
                              <Box></Box>
                            </Box>
                            <Box
                              display='flex'
                              alignItems='center'
                              justifyContent='space-between'
                              className={classes.calculationBlock}
                            >
                              <Box className={classes.calcTitle}>
                                Coupon Discount:
                              </Box>
                              <Box className={classes.calcValue}>
                                $
                                {coupanCode.discountedAmount
                                  ? coupanCode.discountedAmount.toFixed(2)
                                  : "0.00"}
                              </Box>
                              <Box></Box>
                            </Box>
                            <Box
                              display='flex'
                              alignItems='center'
                              justifyContent='space-between'
                              className={classes.calculationBlock}
                            >
                              <Box className={classes.calcTitle}>
                                Grand total:
                              </Box>
                              <Box className={classes.calcValue}>
                                {coupanCode.grandTotal
                                  ? `$${coupanCode.grandTotal.toFixed(2)}`
                                  : getTotal(SelectedData)
                                  ? `$${getTotal(SelectedData).toFixed(2)}`
                                  : "0.00"}
                              </Box>
                            </Box>
                          </Grid>
                        ) : null}
                      </Grid>
                    </Grid>
                    <Box className={classes.buttonBox}>
                      <Box my={1} mx={2} className={classes.rightSide}>
                        <Link href='/courses'>
                          <a className={clsx(classes.commonBtn)}>
                            Continue Shopping
                          </a>
                        </Link>
                      </Box>
                      {OrderTotal > 0 ? (
                        <Box my={1} mx={2} className={classes.rightSide}>
                          <Button
                            variant={"outlined"}
                            onClick={orderDetailOpen}
                            className={classes.commonBtn}
                          >
                            Checkout
                          </Button>
                        </Box>
                      ) : null}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </CardContent>
        </Card>
      </Section>
      <Modal
        fullWidth={false}
        maxWidth={"sm"}
        open={orderModalOpen}
        handleClose={!cancelBtn ? handleOrderModalClose : null}
        iFrame={false}
        title={""}
        content={
          <OrderDetail
            modualData='this'
            selectedId={checkoutModules}
            siteDiscountTemp={siteDiscountTemp}
            courseId=''
            handleOrderModalClose={handleOrderModalClose}
            courseTitle=''
            promoId={promoId ? promoId : null}
            handleLoader={handleLoader}
            handleCancelBtn={handleCancelBtn}
            authToken={authToken}
          />
        }
      />
    </>
  );
};


export default AddCard;
