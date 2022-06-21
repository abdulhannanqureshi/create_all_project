import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import  useMediaQuery  from '@material-ui/core/useMediaQuery';
import  Grid  from '@material-ui/core/Grid';
import  Typography  from '@material-ui/core/Typography';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import  useTheme  from '@material-ui/core/styles/useTheme';
import {  Image } from 'components/atoms';
import { Section } from 'components/organisms';
import bannerBottom from "../../../../../public/assets/banner-shape.png"
import bannerBackgroundImg from "../../../../../public/assets/banner-image.png"
const useStyles = makeStyles((theme) => ({
  textWhite: {
    color: "white",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
    },
  },
  heroDetails: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
  },
  bannerWrap: {
    backgroundColor: "#5120FF",
    padding: theme.spacing(3, 0, 0, 0),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2, 0, 0, 0),
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    zIndex: "2",
  },
  bannerBottom: {
    height: "164px",
    position: "relative",
    background: "linear-gradient(90deg, #F8FCFF 0%, #E0ECFF 100%)",
    [theme.breakpoints.down("sm")]: {
      height: "90px",
    },
    "& > span": {
      display: "block !important",
    },
  },
  bannerImage: {
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "500px",
    },
  },
  orderSm: {
    [theme.breakpoints.down("sm")]: {
      order: 1,
      textAlign: "center",
    },
  },
}));

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <div className={classes.bannerWrap}>
        <Section>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7} className={classes.orderSm}>
              <Typography
                variant='h3'
                className={clsx(classes.textWhite, classes.title)}
              >
                Bridging the blockchain knowledge gap with expert-led learning
              </Typography>
              <Typography
                variant='h5'
                className={clsx(classes.textWhite, classes.heroDetails)}
                gutterBottom
              >
                Coinifide provides industry-leading blockchain education content and hands-on simulations for universities, enterprises and learners of all levels. Join the blockchain revolution with our industry-leading courses, hands-on labs and blockchain-backed certification today.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Image
                src={bannerBackgroundImg}
                srcSet={bannerBackgroundImg}
                alt='banner-bottom'
                className={classes.bannerImage}
              />
            </Grid>
          </Grid>
        </Section>
      </div>
      <div className={classes.bannerBottom}>
        <Image
          src={bannerBottom}
          srcSet={bannerBottom}
          alt='banner-bottom'
          className={classes.image}
        />
      </div>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
