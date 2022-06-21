import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from "clsx";
import { Image } from "components/atoms";
import { Section } from "components/organisms";
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from "react-html-parser";
import bannerBottom from "../../../public/assets/banner-shape.png";
import img from "../../../src/assets/images/Certificate-page/certificate.jpg";
import AppConfig from "../../config/appConfig";
import { Hero } from "./components";
import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
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
  commonList: {
    "& li": {
      marginBottom: "10px !important"
    }
  },
}));

const Labs = ({cmsData}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const classes = useStyles();

  // For Fetch CMS Data
  const [getTemplateData, setGetTemplateData] = useState(null);
  // For Get Template Data
  useEffect(() => {
    if (cmsData && cmsData.length) {
      let getData = cmsData.filter((e) => e.titleSlug === "labs");
      setGetTemplateData(...getData);
    }
  }, [cmsData]);
  return (
    <div>
      <Head>
        <title>Coinifide | Labs</title>
        <meta name="description" content="We marry our carefully curated content and courses with interactive videos and hands-on labs." />
      </Head>
      <Hero />
      <div className={classes.bannerBottom}>
        <Image
          src={bannerBottom}
          srcSet={bannerBottom}
          alt='banner-bottom'
          className={classes.image}
        />
      </div>
      <div className={classes.wrapperSection}>
        <Section
          className={clsx(
            classes.contentSection,
            classes.subTitle,
            classes.pb_60
          )}
        >
          <Grid container spacing={isMd ? 0 : 2}>
          {getTemplateData && getTemplateData.blockImage1.length ? (
            <Grid item xs={12} md={6} data-aos='fade-up'>
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
                  src={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage1}`}
                  srcSet={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage1}`}
                  alt={"Labs"}
                  className={classes.imageLabs}
                />
              </Box>
            </Grid>
            ):null}
            {getTemplateData && getTemplateData.block1.length ? (
            <Grid
              item
              xs={12}
              md={6}
              data-aos='fade-up'
              className={classes.order_sp_30}
            >
              <Paper elevation={2} className={classes.paper}>
              {ReactHtmlParser(getTemplateData.block1)}
              </Paper>
            </Grid>
            ):null}
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
          {getTemplateData && getTemplateData.block2.length ? (
            <Grid
              item
              xs={12}
              md={6}
              data-aos='fade-up'
              className={classes.order_sp_30}
            >
              <Paper elevation={2} className={classes.paper}>
              {ReactHtmlParser(getTemplateData.block2)}
              </Paper>
            </Grid>
            ):null}
            {getTemplateData && getTemplateData.blockImage2.length ? (
            <Grid item xs={12} md={6} data-aos='fade-up'>
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
                  src={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage2}`}
                  srcSet={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage2}`}
                  alt={"Labs"}
                  className={classes.imageLabs}
                />
              </Box>
            </Grid>
            ):null}
          </Grid>
        </Section>
        <Section className={classes.sectionWrapper}>
        {getTemplateData && getTemplateData.blockTitle4.length ? (
          <Box mb={3}>
            <Typography
              variant={"h4"}
              align={"center"}
              color='textPrimary'
              className={classes.blogchain_heading}
            >
              {getTemplateData.blockTitle4}
            </Typography>
          </Box>
          ):null}
          {getTemplateData && getTemplateData.block3.length ? (
            ReactHtmlParser(getTemplateData.block3)
            ):null}
        </Section>
      </div>
    </div>
  );
};

export default Labs;
