import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import { ApiHelper } from 'helper'
import { ApiRoutes } from 'config';
import Toast from 'components/toaster';
import Box from "@material-ui/core/Box";
import img from "../../../src/assets/images/Certificate-page/certificate.jpg";
import { Button } from '@material-ui/core';
import { Hero } from "./components";
import { Image } from "components/atoms";
import { Section } from "components/organisms";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppConfig from "../../config/appConfig";
import { SectionAlternate, HeroBackground } from 'components/organisms';
import ReactHtmlParser from "react-html-parser";


import {
  Categories,
  Courses,
  PromoNumbers,
  Reviews,
  Subscription,
  PressRelease
} from './components';
import {
  promoNumbers,
  courseCategories,
  popularCourses,
  reviews,
} from './data';

const useStyles = makeStyles((theme) => ({
  coursesSection: {
    maxWidth: 800,
    margin: "0 auto",
  },
  paddingBottom0: {
    paddingBottom: 0,
  },
  sectionAlternate: {
    background: "transparent",
    backgroundImage: ` linear-gradient(
      180deg
      , #fff 62%, rgb(83 98 252) 60%)`,
  },
  fontWeight700: {
    fontWeight: "700",
  },
  textWhite: {
    color: "#fff",
  },
  textCenter: {
    textAlign: "center",
  },
  affilateBlock: {
    padding: "0 100px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px !important",
    },
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
  whiteBtn: {
    backgroundColor: "#fff",
    color: "#5120FF",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#5120FF",
      color: "#fff",
      border: "solid 1px #fff",
    },
  },
  categoriesWrapper: {
    "& .section-alternate__content": {
      padding: theme.spacing(6, 8),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(5, 3),
      },
    },
  },
  affiliateWrapper: {
    padding: theme.spacing(2, 6, 3),
  },
  subscriptionWrapper: {
    "& .section-alternate__content": {
      padding: theme.spacing(7, 8, 6),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(7, 2, 6),
      },
    },
  },
  certificate_sec: {
    display: "flex",
    alignItems: "center",
    padding: "90px 0px 100px 0px",
    justifyContent: "center",
    background: "#f5f5f5",
    minHeight: "800px",
  },
  certificate_box: {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    textAlign: "center",
    width: "780px",
    fontWeight: "600",
    border: "15px solid #1a237e",
    position: "relative",
    fontFamily: "'Roboto', sans-serif",
  },
  heading1: {
    marginTop: "45px",
    fontSize: "32px",
    fontWeight: "800",
    margin: "20px 0 20px",
    fontFamily: "'Viga', sans-serif",
    letterSpacing: "1px",
  },
  label: {
    fontWeight: "600",
    fontSize: "16px",
    marginRight: "5px",
  },
  labelextra: {
    fontWeight: "600",
    fontSize: "16px",
    marginLeft: "5px",
  },
  heading3: {
    marginBottom: "10px",
    fontWeight: "700",
    fontSize: "18px",
  },
  heading4: {
    fontWeight: "800",
    marginBottom: "10px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  heading5: {
    fontWeight: "800",
    fontSize: "17px",
    fontStyle: "italic",
    padding: "3px 40px 0",
    borderTop: "1px solid black",
    fontFamily: "'Roboto', sans-serif",
  },
  sectionHeader: {
    marginTop: "20px",
    marginBottom: "20px",
    fontWeight: 600,
    fontSize: "35px",
  },
  sign: {
    padding: "3px 40px",
    margin: "70px 0px 10px 0px",
    fontStyle: "italic",
    borderTop: "1px solid black",
  },
  sign_div: {
    marginTop: "70px",
    marginBottom: "40px",
  },
  bannerBottom: {
    "& > span": {
      display: "block !important",
    },
  },
  wrapperSection: {
    padding: theme.spacing(4, 0, 0),
  },
  sectionWrapper: {
    padding: theme.spacing(7, 6),
  },
  paper: {
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
  anotherCommonBtn: {
    backgroundColor: "#fff",
    color: "#5120FF",
    "&:hover": {
      backgroundColor: "#5120FF",
      color: "#fff",
    },
  },

  blogchain_heading: {
    marginBottom: "15px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      marginBottom: "5px",
    },
  },
  fontSize_18: {
    fontSize: 18,
  },
  contentSection: {
    padding: theme.spacing(5, 6, 0),
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
  imageLabs: {
    maxWidth: "100%",
    margin: "auto auto",
    border: "0",
  },
  imageWrapper: {
    flexWrap: "wrap",
    "& > span": {
      width: "100% !important",
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
}));

const Marketing = ({ blogData, courseData, pressData, marketData }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const classes = useStyles();
  const [loader, setLoader] = React.useState(false);
  const [getTemplateData, setGetTemplateData] = useState(null);
  const [courseTempData, setCourseTempData] = useState([]);
  // const [blogData, setBlogData] = useState([]);
  // const [pressData, setPressData] = useState([]);

  useEffect(() => {
    console.log(courseData,"this is data")
    const data = courseData
    if(data && data.length)
    {
      let filterData = data.filter((course) => course.isActive);
      setCourseTempData(filterData);
    }
  }, []);
  useEffect(() => {
    if (marketData && marketData.length) {
      let getData = marketData.filter((e) => e.titleSlug === "marketing");
      setGetTemplateData(...getData);
    }
  }, [marketData]);

  return (
    <div>
      <Hero />
      <Section>
        <PromoNumbers data={getTemplateData} />
      </Section>
      <SectionAlternate className={classes.categoriesWrapper}>
        <>
          <Categories courseData={courseTempData} />
        </>
      </SectionAlternate>

      <div className={classes.wrapperSection}>
        <Section
          className={clsx(
            classes.contentSection,
            classes.subTitle,
            classes.pb_60
          )}
        >
          {
            getTemplateData ?
              <Grid container spacing={isMd ? 0 : 2}>
                <Grid xs={12} md={6} data-aos='fade-up'>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    height={"100%"}
                    pl={isMd ? 2 : 0}
                    pr={isMd ? 2 : 0}
                    className={classes.imageWrapper}
                  >
                    <Image
                      src={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage5}`}
                      srcSet={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage5}`}
                      height="100%"
                      alt={"marketing image"}
                      className={classes.imageLabs}
                    />
                  </Box>
                </Grid>
                <Grid
                  xs={12}
                  md={6}
                  data-aos='fade-up'
                  className={classes.order_sp_30}
                >
                  <Paper elevation={2} className={classes.paper}>
                    <Box mb={2}>
                      <Typography
                        variant='body1'
                        color='textPrimary'
                        className={classes.fontSize_18}
                      >
                        {getTemplateData ? ReactHtmlParser(getTemplateData.block5) : null}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
              : null
          }

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
              md={12}
              data-aos='fade-up'
              className={classes.order_sp_30}
            >
              {/* <Paper elevation={2} className={classes.paper}> */}
                <Box mb={2} mt={3}>
                  <Typography
                    variant='body1'
                    color='textPrimary'
                    className={classes.fontSize_18}
                  >
                    {getTemplateData ? ReactHtmlParser(getTemplateData.block6) : null}

                  </Typography>
                </Box>
              {/* </Paper> */}
            </Grid>
            {/* <Grid xs={12} md={6} data-aos='fade-up'>
              {
                getTemplateData ?
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    height={"100%"}
                    pl={isMd ? 2 : 0}
                    pr={isMd ? 2 : 0}
                    className={classes.imageWrapper}
                  >
                    <Image
                      src={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage6}`}
                      srcSet={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage6}`}
                      alt={"marketingImage2"}
                      className={classes.imageLabs}
                    />
                  </Box>
                  :
                  null
              }
            </Grid> */}
          </Grid>
        </Section>
      </div>
      <SectionAlternate
        // innernarrowed
        className={clsx(classes.sectionAlternate, classes.subscriptionWrapper)}
      >
        <Subscription sending={getTemplateData} />
      </SectionAlternate>
    </div>

  );
};

export default Marketing;
