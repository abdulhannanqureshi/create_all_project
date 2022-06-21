import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import clsx from 'clsx';
import { ApiHelper } from 'helper'
import { ApiRoutes } from 'config';
import AppConfig from '../../config/appConfig';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Swal from 'sweetalert2'
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Toast from 'components/toaster';
import { Image } from 'components/atoms';
import { Section, SectionAlternate } from 'components/organisms';
import { HeroBackground } from 'components/organisms';
import { Modal } from 'components/common';
import bannerBottom from "../../../public/assets/banner-shape.png"
import bannerCourse from "../../assets/images/Course/bg_banner_course.png";
import { Form } from "../SigninSimple/components";
import { Form as SignupForm } from "../SignupSimple/components";
import { Tooltip } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Consumer } from '../../helper/ContextAPI'
import LabModal from './components/LabModal';
import { useStore } from '../../store';

const useStyles = makeStyles((theme) => ({
  loader: {
    display: "flex",
    minHeight: "700px",
    justifyContent: "center",
    alignItems: "center",
  },
  courseDetailWrap: {
    minHeight: "800px",
    // backgroundColor: "#eee",
  },
  sectionDescription: {
    background: blue[700],
  },
  sectionAlternateForm: {
    background: "transparent",
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 300px, ${theme.palette.primary.dark} 0%)`,
  },
  textWhite: {
    color: "#fff",
  },
  image: {
    maxWidth: "100%",
    margin: "auto auto",
    // boxShadow: "20px 20px 0px -3px #d6d6d6",
    border: "5px solid #fff",
  },
  btnVideo: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "100px",
    borderRadius: "50%",
    marginTop: "150px",
    color: "#fff",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      justifyContent: "left",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },
  fontWeight700: {
    fontWeight: "700",
  },
  bannerImage: {
    width: "350px",
    height: "300px",
    backgroundColor: "#CCC",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    margin: "0 auto",
    position: "relative",
    top: "60px",
    [theme.breakpoints.down("md")]: {
      width: "300px",
      height: "260px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "200px",
      height: "200px",
      top: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "160px",
      height: "160px",
      top: 0,
    },
    "&::after": {
      content: ' "" ',
      display: "block",
      width: "150px",
      height: "150px",
      position: "absolute",
      backgroundColor: "#DCDCDC",
      top: "-65px",
      right: "-75px",
      zIndex: "-1",
      [theme.breakpoints.down("sm")]: {
        width: "90px",
        height: "90px",
        right: "-40px",
        top: "-32px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "70px",
        height: "70px",
        right: "-25px",
        top: "-25px",
      },
    },
    "&::before": {
      content: ' "" ',
      display: "block",
      width: "150px",
      height: "150px",
      position: "absolute",
      backgroundColor: "#DCDCDC",
      bottom: "-65px",
      left: "-75px",
      zIndex: "-1",
      [theme.breakpoints.down("sm")]: {
        width: "90px",
        height: "90px",
        left: "-40px",
        bottom: "-32px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "70px",
        height: "70px",
        left: "-24px",
        bottom: "-25px",
      },
    },
  },
  bannerMiddleImage: {
    height: 300,
    width: 350,
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      height: 260,
      width: 300,
    },
    [theme.breakpoints.down("sm")]: {
      height: 200,
      width: 200,
    },
    [theme.breakpoints.down("xs")]: {
      height: 160,
      width: 160,
    },
  },
  heroContainer: {
    minWidth: "1236px",
    [theme.breakpoints.down(1400)]: {
      minWidth: "100%",
    },
  },
  bannerDetails: {
    [theme.breakpoints.down("xs")]: {
      order: 1,
      marginTop: 50,
    },
  },
  icon: {
    fontSize: "24px",
    width: "100px",
    height: "100px",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      width: "70px",
      height: "70px",
    },
  },
  contentSection: {
    padding: theme.spacing(5, 6),
    "& p": {
      fontSize: "1.25rem",
      lineHeight: "1.6",
      fontWeight: "500",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.125rem",
      },
    },
    "& h1": {
      lineHeight: "1.235",
      paddingBottom: "30px",
      fontSize: "2.0243rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.8219rem",
        paddingBottom: "20px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5625rem",
      },
      "&::after": {
        content: "",
        display: "inline-block",
        width: "100px",
        borderBottom: "5px solid #5120FF",
      },
    },
    "& ul": {
      paddingLeft: "30px",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: 15,
      },
    },
    "& li": {
      paddingBottom: "10px",
      fontSize: "18px",
      [theme.breakpoints.down("sm")]: {
        fontSize: 16,
        paddingBottom: 8,
      },
    },
  },
  sectionHeader: {
    paddingBottom: "30px",
  },
  contentSectionReverse: {
    backgroundColor: "#5120ff",
    backgroundImage: `url(${bannerCourse})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    "& p": {
      fontSize: "18px",
      lineHeight: "28px",
    },
    "& .hero-background__section": {
      paddingTop: 40,
      [theme.breakpoints.down("sm")]: {
        paddingLeft: 20,
        paddingRight: 20,
      },
    },
    "& .hero-background__wrapper": {
      width: "100%",
    },
  },
  modualSection: {
    marginBottom: "0px",
    boxShadow:
      "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
    padding: "30px 40px",
    background: "#5120ffbf",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      padding: "20px",
    },
    "& .MuiTabs-flexContainer": {
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
  },
  modualHeader: {
    color: "#ffffff",
    wordSpacing: "5px",
    paddingBottom: "30px",
    textTransform: "capitalize",
    textShadow: "-1px 1px 3px #000",
    fontWeight: "900",
  },
  modualListWrap: {
    minHeight: "300px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "auto",
    },
    "& .MuiListItemIcon-root": {
      minWidth: 30,
      [theme.breakpoints.down("sm")]: {
        minWidth: 30,
      },
    },
    "& .MuiListItem-gutters": {
      [theme.breakpoints.down("sm")]: {
        padding: 0,
        flexWrap: "wrap",
        alignItems: "flex-start",
      },
    },
    "& .Mui-checked": {
      color: "#fff",
    },
  },
  modualListWrap2: {
    [theme.breakpoints.down("sm")]: {
      minHeight: "auto",
    },
    "& .MuiListItemIcon-root": {
      minWidth: 30,
      [theme.breakpoints.down("sm")]: {
        minWidth: 30,
      },
    },
    "& .MuiListItem-gutters": {
      [theme.breakpoints.down("sm")]: {
        padding: 0,
        flexWrap: "wrap",
        alignItems: "flex-start",
      },
    },
    "& .Mui-checked": {
      color: "#fff",
    },
  },
  modualList: {
    fontSize: "24px",
    color: "#fff",
    padding: 0,
  },
  modualListTitle: {
    width: "calc(100% - 100px)",
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
    },
    "& span": {
      fontSize: "16px",
      fontWeight: "500",
      paddingRight: 12,
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
      },
    },
  },
  modualListAmount: {
    width: "100px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0,
    },
    "& span": {
      fontSize: "17px",
      fontWeight: "700",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        paddingLeft: 30,
      },
    },
  },
  modualCart: {
    width: "35px",
  },
  modualSelected: {
    // backgroundColor:"#ddd",
    // borderBottom:"1px solid #fff",
    // borderTop:"1px solid #fff"
  },
  btnBlock: {
    padding: "20px 0 0",
  },
  btnWrapper: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  purchaseBtn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    padding: "10px 30px",
    color: "#fff",
    fontWeight: "600",
    fontSize: "16px",
    minWidth: "200px",
    [theme.breakpoints.down("sm")]: {
      padding: "8px 15px",
      fontSize: "14px",
    },
  },
  commonBtn: {
    padding: "8px 22px",
    background: "#fff",
    fontWeight: "700",
    color: "#5120ff",
    border: "solid 1px #fff",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      padding: "8px 14px",
      fontSize: "14px",
    },
    "&:hover": {
      borderColor: "#fff",
      color: "#fff",
      background: "#5120ff",
    },
  },
  anotherBtn: {
    borderColor: "#878eff",
    color: "#fff",
    backgroundImage: "linear-gradient(45deg, #5238fe, #6875ff)",
    "&:hover": {
      borderColor: "#878eff",
      backgroundImage: "linear-gradient(45deg, #6875ff, #5238fe)",
    },
  },
  sectionDescription: {
    textAlign: "center",
    "& h1": {
      paddingBottom: "30px",
    },
  },
  paper: {
    // padding:"15px",
    minHeight: "350px",
    height: "100%",
    padding: "30px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "auto",
      padding: "15px",
    },
    "& h1": {
      position: "relative",
      "&::after": {
        content: '" "',
        display: "block",
        width: "150px",
        borderBottom: "3px solid #5120ff",
        position: "absolute",
        bottom: "15px",
      },
    },
  },
  sociallink_nav: {
    position: "fixed",
    right: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
    zIndex: "10",
    flexFlow: "column",
    width: "50px",
    listStyle: "none",
    padding: "5px 0",
    boxShadow: "0 0 3px #180267b8",
    [theme.breakpoints.down("md")]: {
      width: 40,
    },
  },
  sociallink_li: {
    display: "block",
    fontSize: "24px",
    color: "#000",
    padding: "10px 0",
    [theme.breakpoints.down("md")]: {
      padding: "8px 0",
      fontSize: "20px",
    },
    "& a": {
      color: "#000",
    },
  },
  tabPanel: {
    color: "#000",
    padding: "0 0 0 25px",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 15px 10px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "20px 5px 10px",
    },
  },
  tabWrapper: {
    backgroundColor: "transparent",
    border: "solid 1px #fff",
    width: "100%",
    "& .Mui-selected": {
      background: "#fff",
      color: "#5120ff",
    },
    "& .MuiTabs-indicator": {
      display: "none",
      backgroundImage: "linear-gradient(45deg, #5a62af, #8087d1)",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    "& .MuiTabs-scroller": {
      whiteSpace: "normal",
    },
    "& .MuiTabs-flexContainer": {
      display: "block",
      maxHeight: "334px",
      overflow: "auto",
      "&::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#fff",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#5643fe",
      },
    },
  },
  tabButton: {
    minWidth: "0",
    maxWidth: "100%",
    width: "100%",
    flexGrow: "1",
    fontWeight: "600",
    color: "#fff",
    opacity: "1",
    borderBottom: "solid 1px #fff",
    "&:last-child": {
      border: 0,
    },
  },
  img_certificate: {
    maxWidth: "100%",
    height: "350px",
    border: "5px solid #fff",
    [theme.breakpoints.down("md")]: {
      height: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "280px",
    },
  },
  pb_0: {
    paddingBottom: 0,
  },
  pb_30: {
    paddingBottom: 30,
  },
  pb_60: {
    paddingBottom: 60,
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 30,
    },
  },
  pr_16: {
    paddingRight: 16,
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
    },
  },
  order_sp_30: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 12,
      order: 1,
    },
  },
  mb_sp_30: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 12,
    },
  },
  certificateDetails: {
    height: "auto",
  },
  certificateWrapper: {
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  textCenter: {
    textAlign: "center",
  },
  justifySpCenter: {
    paddingRight: 0,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
    },
  },
  bannerBottom: {
    "& > span": {
      display: "block !important",
    },
  },
  dividerWhite: {
    backgroundColor: "#fff",
  },
  hugDiscount: {
    [theme.breakpoints.down("md")]: {
      paddingRight: 10,
      fontSize: "14px !important",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      paddingRight: 0,
      order: 1,
    },
  },
  subTitle: {
    "& h1": {
      fontSize: "1.4993rem",
    },
    "& p": {
      fontSize: "18px",
      fontWeight: "400",
      lineHeight: "1.5",
    },
    "& p > span": {
      fontSize: "18px !important",
      fontFamily: "Lato !important",
      fontWeight: "400 !important",
      color: "#2d3748 !important",
    },
  },
  dFlex: {
    display: "flex",
  },
  disabled: {
    opacity: "0.4",
    cursor: "not-allowed",
    pointerEvents: "none",
  },
  disabledTab: {
    opacity: "0.5",
    pointerEvents: "none",
  },
  btnDisabled: {
    opacity: "0.7",
    color: "#fff !important",
  },
  btnDisabled1: {
    opacity: "0.5",
    color: "#5120ff !important",
  },
  alignItemsCenter: {
    [theme.breakpoints.down("960")]: {
      display: "flex",
      alignItems: "center !important",
    },
  },
  widthHalfSm: {
    [theme.breakpoints.down("960")]: {
      width: "50% !important",
      paddingLeft: "0px !important",
    },
    "& span": {
      paddingLeft: "0px !important",
    },
  },
}));

const CourseDetails = ({
  authToken,
  cmsData,
  universityData,
  corporateData,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignUpOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [authloader, setAuthLoader] = useState(false);
  const [auth, setAuth] = useState(false);
  const [courseId, setCourseId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [courseData, setCourseData] = useState("");
  const [modualList, setModualList] = useState([]);
  const [selectedModualList, setSelectedModualList] = useState([]);
  const [promoCode, setPromoCode] = useState([]);
  const [purchasedModualList, setPurchasedModualList] = useState([]);
  const [checked, setChecked] = React.useState([]);
  const [courseChecked, setCourseChecked] = React.useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [tabValue, setTabValue] = React.useState(0);
  const [cardData, setCardData] = React.useState([]);
  const [parentIds, setParentIds] = React.useState([]);
  const [GeneralPromoCode, setGeneralPromoCode] = React.useState("");
  const [state, setState] = React.useState(false);
  const [labOpen, setLabOpen] = useState(false);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (id) {
      if (token) {
        setAuth(true);
        fetchDataAuth(id);
        setCategoryId(id);
      } else {
        fetchData(id);
        setCategoryId(id);
      }
    }
    setCurrentUrl(window.location.href);
  }, [router.query]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLoginOpen = () => {
    setLoginOpen(true);
  };
  const handleAuthModalClose = () => {
    setLoginOpen(false);
    setSignUpOpen(false);
  };
  // const handleOrderModalClose = () => {
  //   setOrderModalOpen(false);
  //   setChecked([]);
  // };
  // const handleChangeCheckbox = (event) => {
  //   setState(event.target.checked);
  // };
  // const [checkCourse, setCheckCourse] = useState([]);
  // const handleToggle = (item) => {
  //   if (checkCourse.map(e => e._id).includes(item._id)) {
  //     let checkIds = [...checkCourse];
  //     const index = checkCourse.findIndex(e => e._id === item._id)
  //     checkIds.splice(index, 1)
  //     setCheckCourse(checkIds)
  //   }
  //   else {
  //     setCheckCourse([...checkCourse, ...[item]]);
  //   }
  // };

  function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};
    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }
    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }
  // For Add to Cart
  const [update, forceUpdate] = useState(false);
  const addToCard = (item, props, labCustomData) => {
    const token = localStorage.getItem("token");

    // let finalSelection = removeDuplicates(checkCourse, "_id")
    const filteredList = props.modules.filter((item) => !item.isPurchased);
    let courseTotalAmount = "";
    if (props.modules && props.modules.length) {
      courseTotalAmount = props.modules
        .map((e) => e.amount)
        .reduce((prev, next) => parseInt(prev) + parseInt(next));
    }
    let courseDiscount = courseTotalAmount - props.coursePrice;
    if (!token) {
      handleLoginOpen();
    } else {
      localStorage.setItem(
        "GeneralPromoCode",
        JSON.stringify(GeneralPromoCode)
      );
      let allCourse = JSON.parse(localStorage.getItem("allCourseModules"));
      if (allCourse) {
        let storageCourseId = allCourse.map((e) => e._id);
        let fetchCourseId = modualList.map((e) => e._id);
        let checkBothCourse = storageCourseId.some((value) =>
          fetchCourseId.includes(value)
        );
        if (!checkBothCourse) {
          let concatAllCourse = [...allCourse, ...modualList];
          localStorage.setItem(
            "allCourseModules",
            JSON.stringify(concatAllCourse)
          );
          let parentVariableId = concatAllCourse.map((e) => e._id);
          localStorage.setItem("parentIds", JSON.stringify(parentVariableId));
        }
      } else {
        localStorage.setItem("allCourseModules", JSON.stringify(modualList));
        let parentVariableId = modualList.map((e) => e._id);
        localStorage.setItem("parentIds", JSON.stringify(parentVariableId));
      }
      let courseModule = JSON.parse(
        localStorage.getItem("SelectedCourseModules")
      );
      if (courseModule) {
        let getCartData = [...courseModule, ...[item]];
        localStorage.setItem(
          "SelectedCourseModules",
          JSON.stringify(getCartData)
        );
      } else {
        localStorage.setItem("SelectedCourseModules", JSON.stringify([item]));
        Toast.fire({
          icon: "success",
          title: "Courses added to cart successfully.",
        });
      }
      // For Complete Course by Cart
      if (props.modules.length === filteredList.length) {
        if (courseModule) {
          let moduleListId = props.modules.map((e) => e._id);
          let getCartData = [...courseModule, ...[item]];
          let cartItemCheck = getCartData
            .filter((e) => e.parentId === props.singleCourseId)
            .map((e) => e._id);
          let checkCartComplete = [];
          moduleListId.map((moduleId) => {
            checkCartComplete.push(cartItemCheck.includes(moduleId));
          });
          let cartCompleteCheck = checkCartComplete.every((e) => e === true);
          // let moduleListWithLab = props.modules;
          if (cartCompleteCheck) {
            // Add Lab by all item cart
            let getLabID = courseModule
              .filter((e) => e.labId && e._id === props.singleCourseId)
              .map((e) => e.labId);
            if (labCustomData.labId === item.labId) {
              if (getLabID.length === 0) {
                if (labCustomData.labId) {
                  let getCartData = [...courseModule, labCustomData];
                  localStorage.setItem(
                    "SelectedCourseModules",
                    JSON.stringify(getCartData)
                  );
                }
              }
            } else {
              if (getLabID.length === 0 && !labCustomData.labPurchased) {
                let getCartData = [...courseModule, ...[item], labCustomData];
                // localStorage.setItem("SelectedCourseModules", JSON.stringify(getCartData));
              }
            }
          }
        }
      }
      forceUpdate(!update);
    }
  };

  const checkCart = (id) => {
    let courseModule = JSON.parse(
      localStorage.getItem("SelectedCourseModules")
    );
    if (courseModule) {
      return courseModule.map((e) => e._id).includes(id);
    }
    return false;
  };

  const openCart = (courseModules, labId) => {
    const token = localStorage.getItem("token");
    let parentVariableId = modualList.map((e) => e._id);
    let checkCart = JSON.parse(localStorage.getItem("SelectedCourseModules"));
    if (!checkCart) {
      Swal.fire({
        text: "Please add at least one course to the cart in order to make a purchase.",
        padding: "2em",
      });
    } else if (!token) {
      handleLoginOpen();
    } else {
      if (checkCart.length > 0) {
        // localStorage.setItem("parentIds", JSON.stringify(parentVariableId));
        localStorage.setItem(
          "GeneralPromoCode",
          JSON.stringify(GeneralPromoCode)
        );
        let courseCartModule = JSON.parse(
          localStorage.getItem("SelectedCourseModules")
        );
        let getCartIds = courseCartModule.map((e) => e._id);
        let getOnlyCourseIds = courseModules.map((e) => e._id);
        let getCourseIds = getOnlyCourseIds.concat(labId);
        let checkCart = false;
        getCartIds.map((cartItem) => {
          getCourseIds.map((moduleItem) => {
            if (moduleItem === cartItem) {
              checkCart = true;
            }
          });
        });
        if (checkCart) {
          router.push("/add-cart");
        } else {
          Swal.fire({
            text: "Please add at least one course to the cart in order to make a purchase.",
            padding: "2em",
          });
        }
      } else {
        Toast.fire({
          icon: "error",
          text: "Please add at least one course to the cart in order to make a purchase.",
        });
      }
    }
  };
  const { getCartLength } = useStore();
  const handleCourseToggle = (data, labData) => () => {
    const token = localStorage.getItem("token");
    // For Add Complete Course & Parent Course Id on Local Storage For Each Course Start
    let allCourse = JSON.parse(localStorage.getItem("allCourseModules"));
    if (allCourse) {
      let storageCourseId = allCourse.map((e) => e._id);
      let fetchCourseId = modualList.map((e) => e._id);
      let checkBothCourse = storageCourseId.some((value) =>
        fetchCourseId.includes(value)
      );
      if (!checkBothCourse) {
        let concatAllCourse = [...allCourse, ...modualList];
        localStorage.setItem(
          "allCourseModules",
          JSON.stringify(concatAllCourse)
        );
        let parentVariableId = concatAllCourse.map((e) => e._id);
        localStorage.setItem("parentIds", JSON.stringify(parentVariableId));
      }
    } else {
      localStorage.setItem("allCourseModules", JSON.stringify(modualList));
      let parentVariableId = modualList.map((e) => e._id);
      localStorage.setItem("parentIds", JSON.stringify(parentVariableId));
    }
    // For Add Complete Course & Parent Course Id on Local Storage For Each Course End
    localStorage.setItem("GeneralPromoCode", JSON.stringify(GeneralPromoCode));
    setCourseChecked(!courseChecked);
    setSelectedModualList(data.modules);
    setCourseId(data.singleCourseId);
    setPromoCode(data.parentPromoCode);
    const newChecked = [];
    const filteredList1 = data.modules.filter((item) => !item.isPurchased);
    if (!labData.labPurchased) {
      var filteredList = filteredList1.concat(labData);
    } else if (labData.labPurchased) {
      var filteredList = filteredList1;
    }
    let courseTotalAmount = "";
    if (data.modules && data.modules.length) {
      courseTotalAmount = data.modules
        .map((e) => e.amount)
        .reduce((prev, next) => parseInt(prev) + parseInt(next));
    }
    let cartData = filteredList
      .filter((e) => e.amount || e.labId)
      .map((e) => ({
        ...e,
        promoCode: data.promoCode,
        title: data.title,
        parentId: data.parentId,
        buyNow: "Buy",
      }));
    if (filteredList.length > 0) {
      if (!token) {
        handleLoginOpen();
      } else {
        let courseModule = JSON.parse(
          localStorage.getItem("SelectedCourseModules")
        );
        if (courseModule) {
          let duplicateCourse = [...cartData, ...courseModule];
          const unique = [
            ...new Map(
              duplicateCourse.map((item, key) => [item._id, item])
            ).values(),
          ];
          localStorage.setItem("SelectedCourseModules", JSON.stringify(unique));
          getCartLength(unique.length);
        } else {
          localStorage.setItem(
            "SelectedCourseModules",
            JSON.stringify(cartData)
          );
          getCartLength(cartData.length);
        }
        alertBox();
      }
      if (!courseChecked) {
        for (let i in filteredList) {
          newChecked.push(filteredList[i]._id);
          setChecked([...newChecked]);
        }
      } else {
        setChecked([]);
      }
    } else {
      Swal.fire({
        text: "You have already purchased complete course",
        padding: "2em",
      });
    }
  };

  const alertBox = () => {
    Swal.fire({
      text: "Your complete course has been added to the cart",
      padding: "2em",
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Go To Cart",
    }).then((result) => {
      // if (result.isConfirmed) {
      // }
      router.push("/add-cart");
    });
  };

  const handleTabChange = (event, tabValue) => {
    setTabValue(tabValue);
    setChecked([]);
  };

  const fetchData = async (id) => {
    setLoader(true);
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.COURSEDETAILS.service,
      ApiRoutes.COURSEDETAILS.url.replace(":id", id),
      ApiRoutes.COURSEDETAILS.method,
      ApiRoutes.COURSEDETAILS.authenticate,
      undefined,
      undefined,
      id
    );
    if (response && !response.isError) {
      const data = response.data.data.course;
      const modualData = response.data.data.moduleDetails;
      setCourseData({
        ...courseData,
        data,
      });
      setModualList(modualData);
      setLoader(false);
    } else {
      Toast.fire({
        icon: "error",
        title: response.messages[0],
      });
    }
  };

  const pageReload = () => {
    router.reload(window.location.pathname);
  };

  const fetchDataAuth = async (id) => {
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.COURSEDETAILSAUTH.service,
      ApiRoutes.COURSEDETAILSAUTH.url.replace(":id", id),
      ApiRoutes.COURSEDETAILSAUTH.method,
      ApiRoutes.COURSEDETAILSAUTH.authenticate,
      authToken,
      undefined,
      id
    );
    if (response && !response.isError) {
      const data = response.data.data.course;
      const data1 = response.data.data.generalPromoCode;
      const modualData = response.data.data.moduleDetails;
      setCourseData({
        ...courseData,
        data,
      });
      setModualList(modualData);
      setGeneralPromoCode(data1);
      const filteredList = modualData.filter((item) => item.isPurchased);
      setPurchasedModualList(filteredList);
      setLoader(false);
    }
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={1} className={classes.tabPanel}>
            {children}
          </Box>
        )}
      </div>
    );
  };

  const CourseList = (props) => {
    const {
      modules,
      promoCode,
      title,
      _id: parentId,
      lab,
    } = props.parentOption;

    const { singleCourseId, promoCode: parentPromoCode, coursePrice } = props;

    const { title: moduleName, _id: labId, ...restLab } = lab;
    const labCustomData = {
      ...restLab,
      moduleName,
      title,
      promoCode,
      _id: parentId,
      labId,
    };
    const cartCustomItem = { promoCode, title, parentId };
    const completePurchaseItem = {
      modules,
      promoCode,
      title,
      parentId,
      singleCourseId,
      parentPromoCode,
      coursePrice,
    };

    const [purchaseComplete, setPurchaseComplete] = useState(false);
    const [labCheck, setLabCheck] = useState({});
    const [completeCoursePrice, setCompleteCoursePrice] = useState("");
    useEffect(() => {
      const filteredList = props.modules.filter((item) => !item.isPurchased);
      const getLab = props.parentOption.lab;
      setLabCheck(getLab);
      setPurchaseComplete(filteredList);
      setCompleteCoursePrice(props.coursePrice);
    }, []);
    const openLabModal = () => {
      setLabOpen(true);
    };
    const closeLabModal = () => {
      setLabOpen(false);
    };
    const { cartHandler } = useStore();
    return (
      <>
        <List className={classes.modualListWrap}>
          {modules.map((entity, index) => {
            const labelId = `${entity._id}`;
            return (
              <ListItem
                key={index}
                role={undefined}
                dense
                button
                className={clsx(classes.modualList, classes.alignItemsCenter)}
                disabled={entity.isPurchased ? true : false}
              >
                <ListItemText
                  id={labelId}
                  primary={entity.moduleName}
                  className={classes.modualListTitle}
                />
                <ListItemText
                  id={labelId}
                  primary={`$ ${entity.amount.toFixed(2)}`}
                  className={clsx(
                    classes.modualListAmount,
                    classes.widthHalfSm
                  )}
                />
                <Tooltip
                  title={
                    checkCart(entity._id) ? "Added to Cart" : "Add to Cart"
                  }
                  placement='top'
                  arrow
                  className={classes.tooltipWar}
                >
                  <Button>
                    <ListItemText
                      id={labelId}
                      primary={<ShoppingCartIcon />}
                      className={clsx(
                        classes.modualList,
                        checkCart(entity._id) ? classes.disabled : ""
                      )}
                      onClick={() => {
                        if (!checkCart(entity._id))
                          addToCard(
                            { ...entity, ...cartCustomItem },
                            props,
                            labCustomData
                          );
                        cartHandler();
                      }}
                    />
                  </Button>
                </Tooltip>
              </ListItem>
            );
          })}
          {lab && lab._id ? (
            <ListItem
              key={lab._id ? lab._id : null}
              role={undefined}
              dense
              button
              className={clsx(classes.modualList, classes.alignItemsCenter)}
              disabled={lab.labPurchased ? true : false}
            >
              <ListItemText
                id={lab._id ? lab._id : null}
                primary={lab.title ? lab.title : null}
                onClick={openLabModal}
                className={classes.modualListTitle}
              />
              <ListItemText
                id={lab._id ? lab._id : null}
                primary={` $ ${lab.amount ? lab.amount.toFixed(2) : null} `}
                className={clsx(classes.modualListAmount, classes.widthHalfSm)}
              />
              <Tooltip
                title={checkCart(parentId) ? "Added to Cart" : "Add to Cart"}
                placement='top'
                arrow
                className={classes.tooltipWar}
              >
                <Button>
                  <ListItemText
                    id={lab._id ? lab._id : null}
                    primary={<ShoppingCartIcon />}
                    className={clsx(
                      classes.modualList,
                      checkCart(parentId) ? classes.disabled : ""
                    )}
                    onClick={() => {
                      if (!checkCart(parentId))
                        addToCard(labCustomData, props, labCustomData);
                      cartHandler();
                    }}
                  />
                </Button>
              </Tooltip>
            </ListItem>
          ) : null}
        </List>
        <Divider className={classes.dividerWhite} />
        <Box
          pt={2}
          display={"flex"}
          justifyContent={"space-between"}
          pr={5}
          className={classes.justifySpCenter}
        >
          {purchaseComplete.length && Object.keys(labCheck).length ? (
            <Typography
              variant={"body1"}
              className={clsx(classes.hugDiscount, classes.textWhite)}
            >
              Purchase the Master Series to receive a discount and <br /> access
              to the course lab included in the price.
            </Typography>
          ) : null}

          {purchaseComplete.length &&
          !Object.keys(labCheck).length &&
          +completeCoursePrice ? (
            <Typography
              variant={"body1"}
              className={clsx(classes.hugDiscount, classes.textWhite)}
            >
              Purchase the Master Series to receive a discount. <br /> The
              discount is reflected in the final price.
            </Typography>
          ) : null}

          {purchaseComplete.length && +completeCoursePrice ? (
            <Typography
              textalign={"right"}
              variant={isMd ? "h6" : "body1"}
              style={{ fontWeight: 600, fontSize: 18 }}
              className={classes.textWhite}
            >
              {props.coursePrice
                ? `Complete Course Price : $${props.coursePrice}.00`
                : ""}
            </Typography>
          ) : null}

          {!purchaseComplete.length ? (
            <Typography
              variant={"body1"}
              className={clsx(classes.hugDiscount, classes.textWhite)}
            >
              You have already purchased a complete course. Please check another
              course.
            </Typography>
          ) : null}
        </Box>
        {props.modules.length || lab ? (
          <Grid item xs={12} sm={12} md={12}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              className={classes.btnWrapper}
            >
              {purchaseComplete.length && +completeCoursePrice ? (
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  className={classes.btnBlock}
                >
                  <Button
                    variant={"outlined"}
                    onClick={handleCourseToggle(
                      completePurchaseItem,
                      labCustomData
                    )}
                    // disabled={!purchaseComplete.length && lab.labPurchased}
                    disabled={!purchaseComplete.length}
                    className={clsx(
                      classes.commonBtn,
                      // !purchaseComplete.length && lab.labPurchased
                      !purchaseComplete.length ? classes.btnDisabled1 : ""
                    )}
                  >
                    Purchase Complete Course
                  </Button>
                </Box>
              ) : null}
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                className={classes.btnBlock}
              >
                <Button
                  className={clsx(
                    classes.commonBtn,
                    classes.anotherBtn,
                    // !purchaseComplete.length && lab.labPurchased
                    !purchaseComplete.length ? classes.btnDisabled : ""
                  )}
                  onClick={() => openCart(modules, parentId)}
                  // disabled={!purchaseComplete.length && lab.labPurchased}
                  disabled={!purchaseComplete.length}
                >
                  Buy now
                </Button>
              </Box>
            </Box>
          </Grid>
        ) : (
          ""
        )}
        <Modal
          fullWidth={true}
          maxWidth={"lg"}
          open={labOpen}
          handleClose={closeLabModal}
          iFrame={false}
          title={""}
          content={<LabModal labData={lab} />}
        />
      </>
    );
  };

  return (
    <div className={classes.courseDetailWrap}>
      {!loader && courseData && !authloader ? (
        <>
          <ul className={classes.sociallink_nav}>
            <li className={classes.sociallink_li}>
              <a
                target='_blank'
                href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
              >
                <i className={"fa fa-facebook"}></i>
              </a>
            </li>
            <li className={classes.sociallink_li}>
              <a
                target='_blank'
                href={`https://twitter.com/share?text=message_here&url=${currentUrl}`}
              >
                <i className={"fa fa-twitter"}></i>
              </a>
            </li>
            <li className={classes.sociallink_li}>
              <a
                target='_blank'
                href={`http://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`}
              >
                <i className={"fa fa-linkedin"}></i>
              </a>
            </li>
            {/* <li className={classes.sociallink_li}><a href={`whatsapp://send?text=${currentUrl}`} style="background: #4cae4c;"><i className={"fa fa-whatsapp"} aria-hidden="true"></i></a></li> */}
          </ul>
          <HeroBackground backgroundColor={"#5120FF"}>
            <Box className={classes.heroContainer}>
              <Grid container spacing={isMd ? 4 : 2}>
                <Grid
                  xs={12}
                  sm={6}
                  md={6}
                  data-aos='fade-up'
                  item
                  className={classes.bannerDetails}
                >
                  <Typography
                    variant={isMd ? "h3" : "body1"}
                    className={clsx(classes.textWhite, classes.fontWeight700)}
                  >
                    {courseData.data && courseData.data.title
                      ? courseData.data.title
                      : ""}
                  </Typography>
                  <br />
                  <Typography
                    variant={isMd ? "h6" : "body2"}
                    className={clsx(classes.textWhite, classes.fontWeight700)}
                  >
                    {courseData.data && courseData.data.subTitle
                      ? courseData.data.subTitle
                      : ""}
                  </Typography>
                  <span
                    className={clsx(classes.btnVideo)}
                    onClick={handleClickOpen}
                  >
                    <PlayCircleFilledIcon className={classes.icon} />
                    Watch Video
                  </span>
                </Grid>
                <Grid item xs={12} sm={6} md={6} data-aos='fade-up'>
                  <div className={clsx(classes.bannerRightBlock)}>
                    <div className={clsx(classes.bannerImage)}>
                      <Image
                        src={`${AppConfig.IMAGE_URL}/${courseData.data.bannerImage}`}
                        srcSet={`${AppConfig.IMAGE_URL}/${courseData.data.bannerImage}`}
                        alt='banner-bottom'
                        className={classes.bannerMiddleImage}
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </HeroBackground>
          <div className={classes.bannerBottom}>
            <Image
              src={bannerBottom}
              srcSet={bannerBottom}
              alt='banner-bottom'
            />
          </div>
          <Section
            className={clsx(
              classes.contentSection,
              classes.sectionDescription,
              classes.pb_0
            )}
          >
            <Grid container spacing={0}>
              <Grid xs={12} item data-aos='fade-up'>
                {courseData.data ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: courseData.data.description,
                    }}
                  ></div>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </Section>
          <Section
            className={clsx(
              classes.contentSection,
              classes.subTitle,
              classes.pb_60
            )}
          >
            <Grid container spacing={isMd ? 0 : 2}>
              <Grid
                xs={12}
                md={6}
                item
                data-aos='fade-up'
                className={classes.order_sp_30}
              >
                <Paper elevation={2} className={classes.paper}>
                  {courseData.data ? (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: courseData.data.bodySection1,
                      }}
                    ></p>
                  ) : (
                    ""
                  )}
                </Paper>
              </Grid>
              <Grid xs={12} md={6} item data-aos='fade-up'>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  height={"100%"}
                  pl={isMd ? 2 : 0}
                  pr={isMd ? 2 : 0}
                >
                  <Image
                    src={`${AppConfig.IMAGE_URL}/${courseData.data.bodySectionImage1}`}
                    srcSet={`${AppConfig.IMAGE_URL}/${courseData.data.bodySectionImage1}`}
                    alt={"item.title"}
                    className={classes.image}
                  />
                </Box>
              </Grid>
            </Grid>
          </Section>
          <HeroBackground className={classes.contentSectionReverse}>
            <Typography
              variant='h4'
              className={clsx(classes.fontWeight700, classes.modualHeader)}
              align='center'
            >
              {courseData.data && courseData.data.title
                ? courseData.data.title
                : ""}
            </Typography>
            <Box className={classes.modualSection}>
              <Grid container spacing={2} data-aos='fade-up'>
                <Grid xs={12} sm={12} md={3} item>
                  <AppBar position='static' className={classes.tabWrapper}>
                    <Tabs
                      value={tabValue}
                      onChange={handleTabChange}
                      aria-label='simple tabs example'
                    >
                      {modualList.map((data, index) => {
                        return data.modules && data.modules.length ? (
                          <Tab
                            label={data.title}
                            key={index}
                            className={classes.tabButton}
                          />
                        ) : null;
                      })}
                    </Tabs>
                  </AppBar>
                </Grid>
                <Grid xs={12} sm={12} md={9} item>
                  {modualList
                    .filter((e) => e.modules.length)
                    .map((data, index) => (
                      <TabPanel value={tabValue} index={index} key={index}>
                        <Box>
                          <Typography
                            variant={isMd ? "h5" : "body2"}
                            className={clsx(
                              classes.fontWeight700,
                              classes.textWhite
                            )}
                            color='primary'
                          >
                            {data.title}
                          </Typography>
                        </Box>
                        <CourseList
                          modules={data.modules}
                          parentOption={data}
                          singleCourseId={data._id}
                          promoCode={data.promoCode}
                          coursePrice={data.price}
                        />
                      </TabPanel>
                    ))}
                </Grid>
              </Grid>
            </Box>
          </HeroBackground>
          <Section
            className={clsx(
              classes.contentSection,
              classes.subTitle,
              classes.pb_30
            )}
          >
            <Grid container spacing={isMd ? 4 : 2}>
              <Grid
                xs={12}
                md={6}
                item
                data-aos='fade-up'
                className={classes.mb_sp_30}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  height={"100%"}
                  pr={isMd ? 2 : 0}
                >
                  <Image
                    src={`${AppConfig.IMAGE_URL}/${courseData.data.bodySectionImage2}`}
                    srcSet={`${AppConfig.IMAGE_URL}/${courseData.data.bodySectionImage2}`}
                    alt={"item.title"}
                    className={classes.image}
                  />
                </Box>
              </Grid>
              <Grid xs={12} md={6} item data-aos='fade-up'>
                <Paper elevation={2} className={classes.paper}>
                  {courseData.data ? (
                    <Typography
                      component='div'
                      dangerouslySetInnerHTML={{
                        __html: courseData.data.bodySection2,
                      }}
                    ></Typography>
                  ) : (
                    ""
                  )}
                </Paper>
              </Grid>
            </Grid>
          </Section>
          <Section className={clsx(classes.contentSection, classes.subTitle)}>
            <Grid container spacing={isMd ? 4 : 2}>
              <Grid
                xs={12}
                md={6}
                data-aos='fade-up'
                item
                className={clsx(classes.pr_16, classes.order_sp_30)}
              >
                <Paper elevation={2} className={classes.paper}>
                  {courseData.data ? (
                    <Typography
                      component='div'
                      dangerouslySetInnerHTML={{
                        __html: courseData.data.bodySection3,
                      }}
                    ></Typography>
                  ) : (
                    ""
                  )}
                </Paper>
              </Grid>
              <Grid xs={12} md={6} data-aos='fade-up' item>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  height={"100%"}
                >
                  <Image
                    src={`${AppConfig.IMAGE_URL}/${courseData.data.bodySectionImage3}`}
                    srcSet={`${AppConfig.IMAGE_URL}/${courseData.data.bodySectionImage3}`}
                    alt={"item.title"}
                    className={classes.image}
                  />
                </Box>
              </Grid>
            </Grid>
          </Section>
          <HeroBackground
            className={clsx(
              classes.contentSection,
              classes.certificateWrapper,
              classes.subTitle
            )}
            backgroundColor={"rgb(247, 249, 252)"}
          >
            <Grid container spacing={isMd ? 4 : 2}>
              <Grid
                xs={12}
                md={6}
                data-aos='fade-up'
                item
                className={classes.textCenter}
              >
                <Image
                  src={`${AppConfig.IMAGE_URL}/${courseData.data.bodySectionImage4}`}
                  srcSet={`${AppConfig.IMAGE_URL}/${courseData.data.bodySectionImage4}`}
                  alt={"item.title"}
                  className={classes.img_certificate}
                />
              </Grid>
              <Grid xs={12} md={6} data-aos='fade-up' item>
                <Paper
                  elevation={2}
                  className={clsx(classes.paper, classes.certificateDetails)}
                >
                  {courseData.data ? (
                    <Typography
                      component='div'
                      dangerouslySetInnerHTML={{
                        __html: courseData.data.bodySection4,
                      }}
                      height={"100%"}
                    ></Typography>
                  ) : (
                    ""
                  )}
                </Paper>
              </Grid>
            </Grid>
          </HeroBackground>
          <Modal
            fullWidth={false}
            maxWidth={"md"}
            open={open}
            handleClose={handleClose}
            fullScreen={false}
            iFrame={true}
            title={
              courseData.data && courseData.data.title
                ? courseData.data.title
                : ""
            }
            url={
              courseData.data && courseData.data.media
                ? courseData.data.media
                : ""
            }
          />
          <Modal
            open={loginOpen}
            handleClose={handleAuthModalClose}
            iFrame={false}
            title={signupOpen ? "Sign Up" : "Sign In"}
            contentText={
              signupOpen ? (
                <SignupForm
                  categoryId={categoryId}
                  setSignUpOpen={setSignUpOpen}
                  setLoginOpen={setLoginOpen}
                  setOrderModalOpen={setOrderModalOpen}
                  handleAuthModalClose={handleAuthModalClose}
                  pageReload={pageReload}
                  cmsData={cmsData}
                  universityData={universityData}
                  corporateData={corporateData}
                />
              ) : (
                <Form
                  categoryId={categoryId}
                  setLoginOpen={setLoginOpen}
                  setSignUpOpen={setSignUpOpen}
                  setOrderModalOpen={setOrderModalOpen}
                  handleAuthModalClose={handleAuthModalClose}
                  pageReload={pageReload}
                />
              )
            }
          />
        </>
      ) : (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
