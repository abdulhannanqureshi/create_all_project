import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link'
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import AppConfig from '../../../../config/appConfig';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import Loader from '../../../../components/common/Loader/loader'
const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "0 9px 18px 0 rgba(0, 0, 0, 0.1)",
    borderRadius: theme.spacing(2),
    width: "100%",
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
    padding: theme.spacing(3),
    minHeight: "210px",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-around",
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(2, 3, 2, 3),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3, 5),
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "auto",
    },
  },
  cardBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > span": {
      width: "100% !important",
    },
  },
  imageCard: {
    boxShadow: "none",
    padding: "30px",
  },
  image: {
    objectFit: "cover",
    maxWidth: "100%",
    height: 260,
    cursor:"pointer"
  },
  fontWeightBold: {
    fontWeight: "bold",
  },
  contentBlock: {
    padding: "5px 0",
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
    borderTop: "1px solid #eee",
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
  smallCommonBtn: {
    minWidth: 132,
    padding: "8px 10px",
    fontSize: 15,
  },
  anotherCommonBtn: {
    backgroundColor: "#fff",
    color: "#5120FF",
    "&:hover": {
      backgroundColor: "#5120FF",
      color: "#fff",
    },
  },
  dFlex: {
    display: "flex",
  },
  mb_20: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 20,
    },
  },
}));

const Products = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const [isLoading,setIsLoading]=useState(false);
  const changeLoader=()=>
  {
    setIsLoading(true)
  }

  return (
    <>
     <div className={className} {...rest}>
            <SectionHeader
              title='Our Latest Courses'
              subtitle='Blockchain is creating huge changes in almost every industry. Our wide range of highly acclaimed subject-matter experts means we can offer 36 individual courses and 6 Master Series, with many more on the way.'
              data-aos='fade-up'
            />
            <Grid container spacing={isMd ? 4 : 2}>
              {props.data.map((data, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    data-aos='fade-up'
                    key={data._id}
                    className={clsx(classes.dFlex, classes.mb_20)}
                  >
                    <Card className={classes.card}>
                      <div className={classes.cardBlock}>
                      <Link href={`/course-detail/${data._id}`}>
                        <Image
                          src={`${AppConfig.IMAGE_URL}/${data.bannerImage}`}
                          srcSet={`${AppConfig.IMAGE_URL}/${data.bannerImage}`}
                          alt={"item.title"}
                          className={classes.image}
                          onClick={changeLoader}
                        />
                        </Link>
                      </div>
                      <CardContent className={classes.cardContent}>
                        <Typography
                          color='textPrimary'
                          variant='h5'
                          className={clsx(classes.fontWeightBold, classes.textCenter)}
                        >
                          {data.title.substring(0, 40) +
                            (data.title.length > 40 ? "..." : "")}
                        </Typography>
                        <div
                          className={clsx(
                            classes.ratingContainer,
                            classes.textCenter
                          )}
                        >
                          {data.decscrion}
                        </div>
                        <div className={classes.priceCta}>
                          <Link href={`/course-detail/${data._id}`}>
                            <a className={clsx(classes.commonBtn)} onClick={changeLoader}>View Course</a>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
              <Grid item xs={12} container justifyContent='center' data-aos='fade-up'>
                <Link href={"/courses"}>
                  <a className={clsx(classes.commonBtn, classes.anotherCommonBtn)}>
                    View All Courses
                  </a>
                </Link>
              </Grid>
            </Grid>
          </div>
      {
        isLoading ? <Loader /> : null  
      }
    </>
  );
};

Products.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Products;
