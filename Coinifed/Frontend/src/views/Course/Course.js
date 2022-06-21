import React, { useEffect, useState } from 'react';
import { ApiHelper } from 'helper'
import { ApiRoutes } from 'config';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import blue from "@material-ui/core/colors/blue";
import Box from '@material-ui/core/Box';
import  Grid  from '@material-ui/core/Grid';
import  Typography  from '@material-ui/core/Typography';
import  useMediaQuery  from '@material-ui/core/useMediaQuery';
import CircularProgress from '@material-ui/core/CircularProgress';
import Toast from "components/toaster";
import { CourseCard, Hero } from "./components";
import AppConfig from "../../config/appConfig";
import { Section } from "components/organisms";
import { Image } from "components/atoms";
import bannerBottom from "../../../public/assets/banner-shape.png";
import ReactHtmlParser from "react-html-parser";
import Loader from 'components/common/Loader/loader';

const useStyles = makeStyles((theme) => ({
  loader: {
    display: "flex",
    minHeight: "500px",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionDescription: {
    background: blue[900],
  },
  sectionAlternateForm: {
    background: "transparent",
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 300px, ${theme.palette.primary.dark} 0%)`,
  },
  dFlex: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  whyLearnWrap: {
    padding: theme.spacing(4, 6, 0),
  },
  paper: {
    minHeight: "350px",
    height: "100%",
    paddingTop: "30px",
    boxShadow: "none",
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
  card_icons_modified: {
    fontSize: "40px",
    color: "white",
    padding: "20px 26px",
    backgroundColor: "#5120ff",
    borderRadius: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 20px",
      fontSize: "28px",
    },
  },
  card_icons_puzzle: {
    fontSize: "35px",
    color: "white",
    padding: "23px 21px",
    backgroundColor: "#5120ff",
    borderRadius: "100%",
  },
  bannerBottom: {
    "& > span": {
      display: "block !important",
    },
  },
  roundIconImages:{
    height:"80px",
    borderRadius:"100%",
    width:"80px"
  },
  marginTop:{
    marginTop:"15px"
  },
  loaderDiv:
  {
    height:"100vh",
    display:'flex',
    alignItems:"center",
    justifyContent:"center"
  }
}));

const Course = ({cmsData, courseData}) => {
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
      let getData = cmsData.filter((e) => e.titleSlug === "course");
      setGetTemplateData(...getData);
    }
  }, [cmsData]);

  //For applying loader when course view is clicked
  const [isLoadingStatus,setIsLoadingStatus]=useState(false);
  const closeLoader=()=>
  {
    setIsLoadingStatus(true);
  }
  return (
    <>
    { isLoadingStatus ? <Loader/> : null  }
     <div>
      <Hero />
      <div className={classes.bannerBottom}>
        <Image
          src={bannerBottom}
          srcSet={bannerBottom}
          alt='banner-bottom'
          className={classes.image}
        />
      </div>
      <Section className={classes.whyLearnWrap}>
       {
         getTemplateData ?
         <Paper elevation={2} className={classes.paper}>
         <Typography
           variant={"h4"}
           align={"center"}
           color='textPrimary'
           className={classes.blogchain_heading}
           key="Learn"
         >
           {getTemplateData ? getTemplateData.blockTitle1 : null}
         </Typography>
         <Grid container spacing={4}>
           <Grid item xs={12} sm={4} key="SMEs">
             <Box pt={3}>
               <div align='center'>
                 <img src={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage1}`}
                   className={classes.roundIconImages}
                   alt="card image1" />
               </div>
               <Box pt={3}>
                 <div>
                   <Typography
                     variant='body1'
                     align='center'
                     color='textPrimary'
                     className={classes.fontSize_18}
                   >
                     {getTemplateData ? ReactHtmlParser(getTemplateData.block1) : null}
                   </Typography>
                 </div>
               </Box>
             </Box>
           </Grid>
           <Grid item xs={12} sm={4} key="cutting-edge">
             <Box pt={3}>
               <div align='center'>
               <div align='center'>
                      <img src={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage2}`}
                      className={classes.roundIconImages}
                      alt="card image2"/>
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
                     {getTemplateData ? ReactHtmlParser(getTemplateData.block2) : null}

                   </Typography>
                 </div>
               </Box>
             </Box>
           </Grid>
           <Grid item xs={12} sm={4} key="Certifications">
             <Box pt={3}>
               <div align='center'>
                 <img src={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage3}`}
                   className={classes.roundIconImages}
                   alt="card image3" />
               </div>
               <Box pt={3}>
                 <div>
                   <Typography
                     variant='body1'
                     align='center'
                     color='textPrimary'
                     className={classes.fontSize_18}
                   >
                     {getTemplateData ? ReactHtmlParser(getTemplateData.block3) : null}

                   </Typography>
                 </div>
               </Box>
             </Box>
           </Grid>
         </Grid>
       </Paper>
       :
       null
       }
      </Section>
      <Section>
        <Box mb={4}>
          <Typography
            variant={"h4"}
            align={"center"}
            color='textPrimary'
            className={classes.blogchain_heading}
            key="exploreCourses"
          >
            Explore Courses
          </Typography>
        </Box>
        <Grid container spacing={isMd ? 4 : 2}>
          {courseData ?
            courseData.map((data, index) =>
              (<Grid xs={12} sm={6} md={4} data-aos='fade-up' key={index} item className={classes.dFlex}>
                  <CourseCard data={data} key={`${index}1`} handleLoader={closeLoader}/>
                </Grid>)) :
              ""}
        </Grid>
      </Section>
    </div>
    
   </>
  );
};

export default Course;
