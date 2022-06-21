import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import yellow from '@material-ui/core/colors/yellow';
import AppConfig from "../../../../config/appConfig";
import { Image } from 'components/atoms';
import { useEffect } from 'react';
import ReactHtmlParser from "react-html-parser";
import { HeroBackground } from 'components/organisms';
import { Section } from "components/organisms";


const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "0 9px 18px 0 rgba(0, 0, 0, 0.1)",
    borderRadius: theme.spacing(2),
  },
  cardMedia: {
    padding: theme.spacing(3, 3, 0, 3),
    position: "relative",
    // background: colors.indigo[50],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    padding: theme.spacing(5),
    minHeight: "550px",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 3),
      minHeight: "auto",
      textAlign: "center",
    },
  },
  imageCard: {
    boxShadow: "none",
    padding: "30px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "20px 15px",
    },
  },
  image: {
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "500px",
    },
  },
  fontWeightBold: {
    fontWeight: "bold",
  },
  hearIconContainer: {
    position: "absolute",
    top: theme.spacing(3),
    right: theme.spacing(3),
  },
  ratingContainer: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(4, 0),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1, 0),
      padding: theme.spacing(1, 0),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  commonText: {
    "& .MuiTypography-body1": {
      fontSize: 18,
    },
  },
  ratingIcon: {
    color: yellow[700],
    marginRight: theme.spacing(1 / 2),
  },
  affiliateWrapper: {
    padding: theme.spacing(2, 6, 3),
  },
  affilateBlock: {
    padding: "0 80px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px !important",
    },
  },
  textWhite: {
    color: "#fff",
  },
  textCenter: {
    textAlign: "center",
  },
  fontWeight700: {
    fontWeight: "700",
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
  priceCta: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10px",
  },
  textCenter: {
    textAlign: "center",
  },
  contentWrap: {
    padding: "50px 10px",
  },
  contentWrap2: {
    padding: "10px 10px",
  },
  orderSm: {
    [theme.breakpoints.down("sm")]: {
      order: 1,
      textAlign: "center",
    },
  },
  orderSm1: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center !important"

    },
    [theme.breakpoints.down("xs")]: {
      display: "flex !important",
      justifyContent: "center !important",
    },

  },
  orderSm2: {

    [theme.breakpoints.down("xs")]: {
      display: "flex !important",
      justifyContent: "center !important",
    },

  },
  borderRadius:{
    borderRadius:"20px"
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
  smallCommonBtn: {
    minWidth: 132,
    padding: "8px 10px",
    fontSize: 15,
  },
}));

const Content = (props) => {
  // const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  // useEffect(() => {

  // }, [props])

  // const rating = (count) => {
  //   const ratingArray = [];
  //   for (let i = 1; i <= 5; i += 1) {
  //     ratingArray.push(
  //       <i
  //         className={clsx(
  //           i <= count ? "fas fa-star" : "far fa-star",
  //           classes.ratingIcon
  //         )}
  //         key={i}
  //       />
  //     );
  //   }
  //   return ratingArray;
  // };

  return (
    // <div className={className} {...rest}>
    <div>
      <div className={classes.contentWrap}>
        <Grid container spacing={isMd ? 4 : 2}>
          {
            props.sending ?
              <>
                <Grid item xs={12} md={6} data-aos='fade-up'>
                  <Card className={classes.imageCard}>
                    <Image
                      src={`${AppConfig.IMAGE_URL}/${props.sending.blockImage1}`}
                      srcSet={`${AppConfig.IMAGE_URL}/${props.sending.blockImage1}`}
                      alt={"item.title"}
                      className={classes.image}
                    />
                  </Card>
                </Grid>

                <Grid item xs={12} md={6} data-aos='fade-up'>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography
                        color='textPrimary'
                        variant='h4'
                        className={clsx(classes.fontWeightBold)}
                      >
                        {ReactHtmlParser(props.sending.blockTitle1)}
                      </Typography>
                      <div
                        className={clsx(classes.ratingContainer, classes.commonText)}
                      >
                        <Typography color='textPrimary' variant='body1'>
                          {ReactHtmlParser(props.sending.block1)}
                        </Typography>
                      </div>
                      <div className={classes.priceCta}>
                        <Button
                          variant='contained'
                          color='primary'
                          className={clsx(classes.commonBtn, classes.smallCommonBtn)}
                          onClick={() => router.push('/labs')}
                        >
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </>
              : null
          }

        </Grid>
      </div>
      <div className={classes.contentWrap}>
        <HeroBackground backgroundColor={"#5120FF"} className={classes.borderRadius}>
          <Section
          //  innernarrowed
           className={classes.affiliateWrapper}>
            <Box className={clsx(classes.affilateBlock)}>
              <Typography
                variant='h3'
                className={clsx(
                  classes.textWhite,
                  classes.fontWeight700,
                  classes.textCenter
                )}
              >
                {props.sending ? props.sending.blockTitle3 : "Affilate block content"}
              </Typography>
              <Box
                pt={3}
              >
                <Grid container spacing={isMd ? 4 : 2} className={classes.orderSm2}>
                  <Grid item md={6} sm={12} className={classes.orderSm1} >
                    <Button className={clsx(classes.commonBtn, classes.whiteBtn)}
                      onClick={() => router.push('/marketing')}>
                      Become Affiliate
                    </Button>
                  </Grid>
                  <Grid item md={6} sm={12} className={classes.orderSm1} >
                    <Button className={clsx(classes.commonBtn, classes.whiteBtn)}
                      onClick={() => router.push('/marketing')}>
                      Become Referral
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Section>
        </HeroBackground>
      </div>
      <div className={classes.contentWrap2}>
        <Box pt={0} pb={5} />
        <Grid container spacing={isMd ? 4 : 2}>
          {
            props.sending ?
              <>
                <Grid
                  item
                  xs={12}
                  md={6}
                  data-aos='fade-up'
                  className={classes.orderSm}
                >
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography
                        color='textPrimary'
                        variant='h4'
                        className={clsx(classes.fontWeightBold)}
                      >
                        {props.sending.blockTitle2}
                      </Typography>
                      <div
                        className={clsx(classes.ratingContainer, classes.commonText)}
                      >
                        <Typography color='textPrimary' variant='body1'>
                          {ReactHtmlParser(props.sending.block2)}
                        </Typography>
                      </div>
                      <div className={classes.priceCta}>
                        <Button
                          variant='contained'
                          color='primary'
                          className={clsx(classes.commonBtn, classes.smallCommonBtn)}
                          onClick={() => router.push('/certificate')}
                        >
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6} data-aos='fade-up'>
                  <Card className={classes.imageCard}>
                    <Image
                      src={`${AppConfig.IMAGE_URL}/${props.sending.blockImage2}`}
                      srcSet={`${AppConfig.IMAGE_URL}/${props.sending.blockImage2}`}
                      alt={"item.title"}
                      className={classes.image}
                    />
                  </Card>
                </Grid>
              </>
              : null
          }
        </Grid>
      </div>
    </div>
  );
};

// Content.propTypes = {
//   /**
//    * External classes
//    */
//   className: PropTypes.string,
//   /**
//    * data to be rendered
//    */
//   data: PropTypes.array.isRequired,
// };

export default Content;
