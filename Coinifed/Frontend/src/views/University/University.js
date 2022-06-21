import Box from '@material-ui/core/Box';
import blue from '@material-ui/core/colors/blue';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import { Image } from 'components/atoms';
import { HeroBackground, Section } from 'components/organisms';
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from "react-html-parser";
import bannerBottom from "../../../public/assets/banner-shape.png";
// For get Cms Data
import AppConfig from "../../config/appConfig";

const useStyles = makeStyles((theme) => ({
  loader: {
    display: "flex",
    minHeight: "700px",
    justifyContent: "center",
    alignItems: "center",
  },
  courseDetailWrap: {
    minHeight: "800px",
  },
  sectionDescription: {
    background: blue[900],
  },
  sectionAlternateForm: {
    background: "transparent",
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 300px, ${theme.palette.primary.dark} 0%)`,
  },
  textWhite: {
    color: "#fff",
  },
  image: {
    maxWidth: "85%",
    margin: "auto auto",
    boxShadow: "20px 20px 0px -3px #d6d6d6",
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
  },
  fontWeight700: {
    fontWeight: "700",
  },
  marginTop: {
    marginTop: "12px",
  },
  ul_listings: {
    marginTop: "12px",
    "& li": {
      fontSize: "15px",
      color: "#8585bd !important",
    },
  },
  color_light_blue: {
    marginTop: "12px",
    fontSize: "17px !important",
    margintTop: "12px",
    color: "#8585bd !important",
  },
  bannerImage: {
    width: "350px",
    minHeight: "300px",
    backgroundColor: "#CCC",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    margin: "0 auto",
    position: "relative",
    top: "60px",
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
    },
  },
  heroContainer: {
    minWidth: "1236px",
  },
  icon: {
    fontSize: "24px",
    width: "100px",
    height: "100px",
    color: "#fff",
  },
  contentSection: {
    padding: theme.spacing(5, 6),
    "& p": {
      fontSize: "18px",
    },
    "& h1": {
      lineHeight: "28px",
      paddingBottom: "30px",
      "&::after": {
        content: "",
        display: "inline-block",
        width: "100px",
        borderBottom: "5px solid #5120FF",
      },
    },
    "& ul": {
      paddingLeft: "30px",
    },
    "& li": {
      paddingBottom: "10px",
      fontSize: "18px",
    },
  },
  sectionHeader: {
    paddingBottom: "30px",
  },
  contentSectionReverse: {
    color: "#fff",
    "& p": {
      fontSize: "18px",
      lineHeight: "28px",
    },
  },
  btnBlock: {
    padding: "20px 0 0",
  },
  sectionDescription: {
    textAlign: "center",
    "& h1": {
      paddingBottom: "30px",
    },
  },
  paper: {
    minHeight: "350px",
    height: "100%",
    padding: "30px",
    [theme.breakpoints.down("xs")]: {
      minHeight: "auto",
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
  heading: {
    position: "relative",
    paddingBottom: "30px",
    fontWeight: "700",
    "&::after": {
      content: '" "',
      display: "block",
      width: "150px",
      borderBottom: "3px solid #5120ff",
      position: "absolute",
      bottom: "15px",
    },
  },
  blogchain_heading: {
    fontSize: "34px",
    fontWeight: 600,
    marginBottom: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      marginBottom: "5px",
    },
  },
  card_para: {
    fontSize: "15px",
    color: "#8585bd !important",
    fontWeight: 600,
    lineHeight: "1.9em",
    [theme.breakpoints.down("sm")]: {
      lineHeight: "1.4em",
    },
  },
  card_icons: {
    fontSize: "40px",
    color: "white",
    padding: "20px",
    backgroundColor: "#5120ff",
    borderRadius: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "16px",
      fontSize: "28px",
    },
  },
  card_icons_modified: {
    fontSize: "40px",
    color: "white",
    padding: "20px 28px",
    backgroundColor: "#5120ff",
    borderRadius: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 20px",
      fontSize: "28px",
    },
  },
  img_fluid: {
    maxWidth: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      height: 472,
      width: "100%",
      objectFit: "cover",
      objectPosition: "center top",
      marginBottom: 12,
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
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
  bannerWrap: {
    paddingRight: 20,
    [theme.breakpoints.down("xs")]: {
      paddingRight: 40,
    },
  },
  fullImage: {
    "& > span": {
      width: "100% !important",
    },
  },
  orderSp: {
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
  certificateWrap: {
    padding: 0,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  certificateImgWrap: {
    textAlign: "center",
  },
  bannerBottom: {
    "& > span": {
      display: "block !important",
    },
  },
  whyBlockchain: {
    padding: theme.spacing(5, 6, 2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(5, 4, 2),
    },
    "& .MuiPaper-elevation2": {
      boxShadow: "none",
      padding: "30px 0 0",
      minHeight: 330,
    },
  },
  pb_60: {
    paddingBottom: 60,
  },
  sp_p_0: {
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  fontSize_18: {
    fontSize: 18,
  },
  certificateWrapper: {
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      padding: 20,
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
  certificateDetails: {
    height: "auto",
  },
  textCenter: {
    textAlign: "center",
  },
  commonList: {
    "& li": {
      marginBottom: "10px !important"
    }
  },
  roundIconImages:{
    height:"80px",
    borderRadius:"100%",
    // width:"80px"
  },
  marginTop:{
    marginTop:"15px"
  }
}));

const University = ({cmsData}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  // For Fetch CMS Data
  const [getTemplateData, setGetTemplateData] = useState(null);
  // For Get Template Data
  useEffect(() => {
    if (cmsData && cmsData.length) {
      let getData = cmsData.filter((e) => e.titleSlug === "university");
      setGetTemplateData(...getData);
    }
  }, [cmsData]);
  return (
    <div className={classes.courseDetailWrap}>
      <>
        <HeroBackground backgroundColor={"#5120FF"}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} data-aos='fade-up' className={classes.bannerWrap}>
              <Typography
                variant={isMd ? "h3" : "h4"}
                className={clsx(classes.textWhite, classes.fontWeight700)}
              >
                Let Your Students Lead the Blockchain Revolution
              </Typography>
              <br />
              <Typography
                variant={isMd ? "h6" : "body2"}
                className={clsx(classes.textWhite, classes.fontWeight700)}
              >
                Blockchain is changing the way our world operates. Create the
                industry’s next generation of bright minds with immersive
                educational content and hands-on simulation tools from
                Coinifide.
              </Typography>
            </Grid>
          </Grid>
        </HeroBackground>
        <div className={classes.bannerBottom}>
          <Image src={bannerBottom} srcSet={bannerBottom} alt='banner-bottom' />
        </div>
        <Section className={classes.whyBlockchain}>
          {getTemplateData ?
            <>
              <Paper elevation={2} className={classes.paper}>
                <Typography align='center' className={classes.blogchain_heading}>
                  {getTemplateData ? getTemplateData.blockTitle4 : null}
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={4}>
                    <Box pt={3}>
                      <div align='center'>
                      <img src={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage4}`}
                       className={classes.roundIconImages}
                       alt="card image1"/>
                      </div>
                      <Box pt={3}>
                        <div>
                          <Typography
                            variant='body1'
                            align='center'
                            color='textPrimary'
                            className={classes.fontSize_18}
                          >
                            {getTemplateData ? ReactHtmlParser(getTemplateData.block4) : null}
                          </Typography>
                        </div>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box pt={3}>
                      <div align='center'>
                       <img src={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage5}`}
                       className={classes.roundIconImages}
                       alt="card image2"/>
                      </div>
                      <Box pt={3}>
                        <div>
                          <Typography
                            variant='body1'
                            align='center'
                            color='textPrimary'
                            className={classes.fontSize_18}
                          >
                            {getTemplateData ? ReactHtmlParser(getTemplateData.block5) : null}
                          </Typography>
                        </div>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box pt={3}>
                      <div align='center'>
                      <div align='center'>
                      <img src={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage6}`}
                       className={classes.roundIconImages}
                       alt="card image1"/>
                      </div>
                      </div>
                      <Box pt={3}>
                        <div>
                          <Typography
                            variant='body1'
                            align='center'
                            color='textPrimary'
                            className={classes.fontSize_18}
                          >
                            {getTemplateData ? ReactHtmlParser(getTemplateData.block6) : null}
                          </Typography>
                        </div>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </>
            : null}
        </Section>
        <Section className={clsx(classes.contentSection,classes.marginTop)}>
          <Grid container spacing={isMd ? 4 : 2}>
            {getTemplateData && getTemplateData.blockImage1.length ? (
              <Grid item xs={12} md={6} data-aos='fade-up'>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  height={"100%"}
                  pl={isMd ? 2 : 0}
                  pr={isMd ? 2 : 0}
                >
                  <img
                    src={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage1}`}
                    alt='girl explaining'
                    className={classes.img_fluid}
                  />
                </Box>
              </Grid>
            ) : null}
            {getTemplateData && getTemplateData.blockTitle1.length ? (
              <Grid item xs={12} md={6} data-aos='fade-up'>
                <Paper elevation={2} className={classes.paper}>
                  <Typography
                    variant='h5'
                    color='textPrimary'
                    className={classes.heading}
                  >
                    {getTemplateData.blockTitle1}
                  </Typography>
                  {ReactHtmlParser(getTemplateData.block1)}
                </Paper>
              </Grid>
            ) : null}
          </Grid>
        </Section>
        <Section className={clsx(classes.contentSection, classes.pb_60)}>
          <Grid container spacing={isMd ? 4 : 2}>
            {getTemplateData && getTemplateData.blockTitle2.length ? (
              <Grid item xs={12} md={6} data-aos='fade-up' className={classes.orderSp}>
                <Paper elevation={2} className={classes.paper}>
                  <Typography
                    variant='h5'
                    color='textPrimary'
                    className={classes.heading}
                  >
                    {getTemplateData.blockTitle2}
                  </Typography>
                  {ReactHtmlParser(getTemplateData.block2)}
                </Paper>
              </Grid>
            ) : null}
            {getTemplateData && getTemplateData.blockImage2.length ? (
              <Grid item xs={12} md={6} data-aos='fade-up'>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  height={"100%"}
                  pl={isMd ? 2 : 0}
                  pr={isMd ? 2 : 0}
                  className={classes.fullImage}
                >
                  <Image
                    src={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage2}`}
                    alt='girl explaining'
                    className={classes.img_fluid}
                  />
                </Box>
              </Grid>
            ) : null}
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
            {getTemplateData && getTemplateData.blockImage3.length ? (
              <Grid
                item
                xs={12}
                md={6}
                data-aos='fade-up'
                className={classes.textCenter}
              >
                <Image
                  src={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage3}`}
                  srcSet={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage3}`}
                  alt='girl explaining'
                  className={classes.img_certificate}
                />
              </Grid>
            ) : null}
            {getTemplateData && getTemplateData.blockTitle3.length ? (
              <Grid item xs={12} md={6} data-aos='fade-up'>
                <Paper
                  elevation={2}
                  className={clsx(classes.paper, classes.certificateDetails)}
                >
                  <Typography
                    variant='h5'
                    color='textPrimary'
                    className={classes.heading}
                  >
                    {getTemplateData.blockTitle3}
                  </Typography>
                  {ReactHtmlParser(getTemplateData.block3)}
                </Paper>
              </Grid>
            ) : null}
          </Grid>
        </HeroBackground>
      </>
      {/* :
      <div className={classes.loader}>
        <CircularProgress />
      </div>
      } */}
    </div>
  );
};

export default University;
