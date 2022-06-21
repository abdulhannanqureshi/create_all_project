import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Image } from "components/atoms";
import { Section } from "components/organisms";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import bannerBottom from "../../../public/assets/banner-shape.png";
import { Hero } from "./components";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    "& .description-cta__button-group": {
      flexWrap: "nowrap",
    },
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5),
    },
  },
  fontWeightBold: {
    fontWeight: "bold",
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(5, 0),
    },
  },
  textWhite: {
    color: "white",
  },
  cardHighlighted: {
    background: theme.palette.primary.dark,
  },
  checkBox: {
    background: "transparent",
    borderRadius: 0,
    width: 30,
    height: 30,
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  link: {
    color: theme.palette.primary.main,
  },
  wrapperSection: {
    padding: theme.spacing(4, 0, 5),
  },
  sectionWrapper: {
    padding: theme.spacing(0, 6, 2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 3, 2),
    },
    "& h4": {
      color: "#2d3748",
      fontSize: "2.0243rem",
      lineHeight: "1.235",
      fontFamily: "Lato",
    },
    "& p": {
      color: "#2d3748",
      lineHeight: "1.6",
      fontFamily: "Lato",
    },
    "& li": {
      paddingBottom: "15px",
      fontSize: "18px",
    },
  },
  loader: {
    display: "flex",
    minHeight: "500px",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const RefundPolicy = ({cmsData}) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  // For Get Template Data
  const [getTemplateData, setGetTemplateData] = useState(null);
  useEffect(() => {
    if (cmsData && cmsData.length) {
      let getData = cmsData.filter((e) => e.pageName === "Refund Policy");
      setGetTemplateData(...getData);
    }
  }, [cmsData]);
  return (
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
      <div className={classes.wrapperSection}>
        <Section className={classes.sectionWrapper}>
          {getTemplateData && getTemplateData.content.length
            ? ReactHtmlParser(getTemplateData.content)
            : null}
        </Section>
      </div>
    </div>
  );
};

export default RefundPolicy;
