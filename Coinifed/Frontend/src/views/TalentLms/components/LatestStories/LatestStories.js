import React from 'react';
import PropTypes from 'prop-types';
import AppConfig  from '../../../../config/appConfig';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import  Grid  from '@material-ui/core/Grid';
import  Typography  from '@material-ui/core/Typography';
import { Image } from 'components/atoms';
import { DescriptionCta } from 'components/molecules';
import { CardProduct } from 'components/organisms';
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    cursor:"pointer",
    borderRadius: theme.spacing(1),
    '& .card-product__content': {
      padding: theme.spacing(2),
    },
    '& .card-product__media': {
      minHeight: 300,
    },
  },
  image: {
    objectFit: 'cover',
  },
  blogTitle: {
    fontWeight: 700,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tag: {
    fontWeight: 700,
    margin: theme.spacing(0, 1, 1, 0),
  },
  author: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 0),
    },
  },
  title: {
    fontWeight: 'bold',
  },
  descriptionCta: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
}));

const LatestStories = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const router = useRouter()

  const handleRedirect = (id)=>{
    router.push(`/blog-details/${id}`)
  }

  const BlogMediaContent = props => (
    <Image
      {...props}
      className={classes.image}
      lazyProps={{ width: '100%', height: '100%' }}
    />
  );

  const BlogContent = props => (
    <div >
      {/* <div className={classes.tags}>
        {props.tags.map((item, index) => (
          <Typography
            variant="overline"
            color="primary"
            className={classes.tag}
            key={index}
          >
            {item}
          </Typography>
        ))}
      </div> */}
      <Typography
        variant="h6"
        color="textPrimary"
        className={classes.blogTitle}
        align="center"
      >
        {props.title}
      </Typography>
      <Typography
        variant="body2"
        color="textPrimary"
        className={classes.author}
        align="center"
      >
        <i>
          {props.categoryName}
        </i>
      </Typography>
      <Typography variant="body1" color="textPrimary" align="center">
        {props.subtitle}
      </Typography>
    </div>
  );


  return (
    <div className={className} {...rest}>
      <DescriptionCta
        title="Latest Blogs"
        align={'left'}
        titleProps={{
          variant: 'h4',
          color: 'textPrimary',
          className: classes.title,
        }}
        className={classes.descriptionCta}
        data-aos="fade-up"
      />
      <Grid container spacing={2}>
        {data && data.length > 0 ? <>{data.map((item, index) => (
          <Grid item xs={12} sm={6} key={index} data-aos="fade-up" onClick={()=>handleRedirect(item._id)}>
            <CardProduct
              withShadow
              liftUp
              className={classes.cardProduct}
              mediaContent={
                <BlogMediaContent
                  src={`${AppConfig.IMAGE_URL}/${item.featureImage}`}
                  srcSet={`${AppConfig.IMAGE_URL}/${item.featureImage}`}
                  alt={item.title}
                />
              }
              cardContent={
                <BlogContent
                  title={item.title}
                  subtitle={item.subtitle}
                  categoryName={item.categoryName}
                  date={item.date}
                  tags={item.tags}
                />
              }
            />
          </Grid>
        ))}</> :
        <>
        <p>No Blog Found related to search</p>
        </> }

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
