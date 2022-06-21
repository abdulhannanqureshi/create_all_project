import React,{useEffect, useState} from 'react';
import {ApiHelper} from 'helper'
import { ApiRoutes } from 'config';
import Toast from 'components/toaster';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import { Image } from 'components/atoms';
import { Section} from 'components/organisms';
import {
  Hero,
  Products,
  Content
} from './components';
import leftHalfCircle from "../../../public/assets/left-half-circle.png"
import rightyHalfCircle from "../../../public/assets/right-half-circle.png"

const useStyles = makeStyles((theme) => ({
  sectionDescription: {
    background: "#F8FCFF",
    background: "linear-gradient(90deg, #F8FCFF 0%, #E0ECFF 100%)",
  },
  sectionAlternateForm: {
    background: "transparent",
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 300px, ${theme.palette.primary.dark} 0%)`,
  },
  shapBlock: {
    position: "relative",
  },
  leftShapeImage: {
    position: "absolute",
    width: "500px",
    height: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      height: "400px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "150px",
      height: "300px",
    },
  },
  rightShapeImage: {
    position: "absolute",
    width: "500px",
    height: "500px",
    right: "0px",
    [theme.breakpoints.down(1200)]: {
      width: "300px",
      height: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "260px",
      height: "360px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "150px",
      height: "160px",
    },
  },
}));

const Expo = () => {
  const classes = useStyles();
  const [loader, setLoader] = React.useState(false);
  const [courseData, setCourseData] = useState([]);
  const [templateData, setTemplateData] = useState([]);
  const [getTemplateData, setGetTemplateData] = useState(null);
  useEffect(() => {
    fetchData();
    fetchCertificateData();
  }, []);

  const fetchData = async () => {
    setLoader(true);
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.COURSELIST.service,
      `${ApiRoutes.COURSELIST.url}?limit=${3}&isActive=${"true"}`,
      ApiRoutes.COURSELIST.method,
      ApiRoutes.COURSELIST.authenticate,
      undefined,
      undefined,
      undefined
    );
    if (response && !response.isError) {
      const data = response.data.data;
      let filterData = data.filter((course) => course.isActive);
      setCourseData(filterData);
      setLoader(false);
    } else {
      Toast.fire({
        icon: "error",
        title: "Something went wrong",
      });
    }
  };
  const fetchCertificateData = async () => {
    setLoader(true);
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.FRONT_PAGE_DATA.service,
      ApiRoutes.FRONT_PAGE_DATA.url,
      ApiRoutes.FRONT_PAGE_DATA.method,
      ApiRoutes.FRONT_PAGE_DATA.authenticate,
      undefined,
      undefined,
      undefined
    );
    if (response && !response.isError) {
      const data = response.data.data;
      setTemplateData(data);
      setLoader(false);
    } else {
      Toast.fire({
        icon: "error",
        title: "Something went wrong",
      });
    }
  };
  // For Get Template Data
  useEffect(() => {
    if (templateData && templateData.length) {
      let getData = templateData.filter((e) => e.titleSlug === "home");
      setGetTemplateData(...getData);
    }
  }, [templateData]);

  return (
    <div>
      <Hero />
      <div className={classes.sectionDescription}>
        <Section>
          <Products data={courseData} />
        </Section>
      </div>
      <div className={classes.shapBlock}>
        <Image
          src={leftHalfCircle}
          srcSet={leftHalfCircle}
          lazy={false}
          alt={"left side vector"}
          className={classes.leftShapeImage}
        />
        <Image
          src={rightyHalfCircle}
          srcSet={rightyHalfCircle}
          lazy={false}
          alt={"left side vector"}
          className={classes.rightShapeImage}
        />
      </div>
      <Section>
      {getTemplateData ? (
        <Content sending={getTemplateData}/>
      ) : null}
      </Section>
    </div>
  );
};

export default Expo;
