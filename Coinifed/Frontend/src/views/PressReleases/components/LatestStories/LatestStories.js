import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { Image } from 'components/atoms';
import { CardProduct } from 'components/organisms';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import AppConfig from '../../../../config/appConfig';
import noImage from "../../../../../public/assets/No_Image_Available.jpg";

const useStyles = makeStyles((theme) => ({
  cardProduct: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    borderRadius: theme.spacing(1),
    "& .card-product__content": {
      padding: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        height: "auto",
      },
    },
    "& .card-product__media": {
      minHeight: 250,
      [theme.breakpoints.down("md")]: {
        minHeight: "auto",
        height: 240,
      },
      [theme.breakpoints.down("sm")]: {
        height: 250,
      },
      [theme.breakpoints.down(767)]: {
        height: 220,
      },
      [theme.breakpoints.down("xs")]: {
        height: "auto",
      },
    },
  },
  image: {
    objectFit: 'contain',
    background: '#e9e9e9',
  },
  blogTitle: {
    fontWeight: 700,
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  tag: {
    fontWeight: 700,
    margin: theme.spacing(0, 1, 1, 0),
  },
  author: {
    textTransform: "capitalize",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(2, 0),
    },
  },
  title: {
    fontWeight: "bold",
  },
  descriptionCta: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  w100: {
    width: "100%",
  },
}));

const LatestStories = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const router = useRouter();

  const handleRedirect = (id) => {
    router.push(`/press-release-detail/${id}`);
  };

  const PressMediaContent = (props) => {
    const {featureImage , ...rest} = props
    const {alt} = props
    if(featureImage){
      return <Image
        {...rest}
        className={classes.image}
        lazyProps={{ width: "100%", height: "100%" }}
      />
    }
    else{
      return <Image
        src={noImage}
        srcSet={noImage}
        alt={alt}
        className={classes.image}
        lazyProps={{ width: "100%", height: "100%" }}
      />
    }
  };

  const PressContent = (props) => (
    <div className={classes.w100}>
      <Typography
        variant='h6'
        color='textPrimary'
        className={classes.blogTitle}
        align='center'
      >
        {props.title}
      </Typography>
      <Typography
        variant='body1'
        color='textPrimary'
        className={classes.author}
        align='center'
      >
        <i>{props.categoryName}</i>
      </Typography>
      <Typography variant='body1' color='textPrimary' align='center'>
        {props.subtitle}
      </Typography>
    </div>
  );

  return (
    <div className={className} {...rest}>
      <Typography
        variant="h4"
        color="textPrimary"
        className={clsx(classes.title, classes.descriptionCta)}
      >
        Latest Releases
      </Typography>
      <Grid container spacing={2}>
        {data && data.length > 0 ? (
          <>
            {data.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={index}
                data-aos='fade-up'
                onClick={() => handleRedirect(item._id)}
              >
                <CardProduct
                  withShadow
                  liftUp
                  className={classes.cardProduct}
                  mediaContent={
                    <PressMediaContent
                      src={`${AppConfig.IMAGE_URL}/${item.pressFeatureImage}`}
                      srcSet={`${AppConfig.IMAGE_URL}/${item.pressFeatureImage}`}
                      alt={item.title}
                      featureImage={item.pressFeatureImage}
                    />
                  }
                  cardContent={
                    <PressContent
                      title={item.title}
                      subtitle={item.subtitle}
                      categoryName={item.categoryName}
                      date={item.date}
                      tags={item.tags}
                    />
                  }
                />
              </Grid>
            ))}
          </>
        ) : (
          <>
            <p>No Press Release Found related to search</p>
          </>
        )}
      </Grid>
    </div>
  );
};

LatestStories.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default LatestStories;
