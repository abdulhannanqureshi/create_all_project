import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link from 'next/link'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Image } from 'components/atoms';
import AppConfig from '../../../config/appConfig';


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
    paddingTop: "10px",
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
}));

const CourseCard = (props) => {
  const { data, title, className,handleLoader, ...rest } = props;
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <div className={classes.cardBlock}>
        <Link href={`/course-detail/${data._id}`}>
          <Image
            src={`${AppConfig.IMAGE_URL}/${data.bannerImage}`}
            srcSet={`${AppConfig.IMAGE_URL}/${data.bannerImage}`}
            alt={data.title}
            className={classes.image}
            onClick={handleLoader}
           
          />
          </Link>
        </div>
        <CardContent className={classes.cardContent}>
          <Typography
            color='textPrimary'
            variant='h6'
            className={clsx(classes.fontWeightBold)}
          >
            {data.topicName.substring(0, 70) +
              (data.topicName.length > 70 ? "..." : "")}
          </Typography>
          <div className={clsx(classes.contentBlock)}>
            <Typography color='textPrimary' variant='body1'>
              {data.subTitle.substring(0, 70) + "..."}
            </Typography>
          </div>
          <div className={classes.priceCta}>
            <Link href={`/course-detail/${data._id}`}>
              <a className={clsx(classes.commonBtn)} onClick={handleLoader}>View Course</a>
            </Link>
          </div>
        </CardContent>
      </Card>
     
    </>
  );
};

CourseCard.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object,
  title: PropTypes.string
};

export default CourseCard;
