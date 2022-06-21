import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import  useMediaQuery  from '@material-ui/core/useMediaQuery';
import  Grid  from '@material-ui/core/Grid';
import  Typography  from '@material-ui/core/Typography';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import  useTheme  from '@material-ui/core/styles/useTheme';
import { Image } from 'components/atoms';
import quote from "../../../../../public/assets/quote.png";
import quoteBg from "../../../../../public/assets/quoteBg.png"

const useStyles = makeStyles(() => ({
  sectionHeadlineStars: {
    maxWidth: 120,
  },
  fontWeightBold:{
    fontWeight:"600"
  },
  testimonialBlock:{
    display:"flex",
    flexFlow:"column",
    alignItems:"center",
    listStyle:"none",
    '& li':{
        paddingBottom:"50px"
    },
    '& li span':{
        display:"inline-flex",
        background:"#CCCCCC",
        minWidth: "50px",
        minHeight: "50px",
        borderRadius: "50%",
        position:"relative"
    },
  },
  firstCircle:{
    width:"105px",
    height:"105px"
  },
  secondCircle:{
    width:"215px",
    height:"215px",
    left:"-100px"
  },
  thirdCircle:{
    width:"128px",
    height:"128px"
  },
  fourthCircle:{
    width:"160px",
    height:"160px"
  },
  fifthCircle:{
    width:"105px",
    height:"105px",
    right:"-100px"
  },
  sixthCircle:{
    width:"185px",
    height:"185px"
  },
  clientQuote:{
    height:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    position:"relative",
    '& img':{
      maxWidth:"480px",
      maxHeight:"300px"
    },
    '& p':{
      position:"absolute",
      maxWidth:"480px",
      padding:"50px",
      fontSize:"18px"
    }
  },
  clientsSection:{
    position:"relative"
  },
  bgImage:{
    position: "absolute",
    maxWidth: "500px",
    top: "-400px",
    left: "-8px",
    maxHeight: "900px",
  }
}));

const Testimonial = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
     <div className={classes.clientsSection}>
     <Image
        src={quoteBg}
        srcSet={quoteBg}
        alt={"item.title"}
        className={classes.bgImage}
        lazy={false}
      />
      <Typography
        color="textPrimary"
        variant="h3"
        className={clsx(classes.fontWeightBold)}
        align={"center"}
      >
        Our Clients
      </Typography>
      <Section>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} sm={3} md={3} data-aos="fade-up">
            <ul className={clsx(classes.testimonialBlock)}>
              <li>
                <span className={clsx(classes.firstCircle)}></span>
              </li>
              <li>
                <span className={clsx(classes.secondCircle)} ></span>
              </li>
              <li>
                <span className={clsx(classes.thirdCircle)}></span>
              </li>
            </ul>
          </Grid>
          <Grid 
            item xs={12} sm={6} md={6} data-aos="fade-up" display={"flex"} justifyContent={"center"} alignContent={"center"} className={classes.p-0}>
            <div className={classes.clientQuote}>
              <img src={quote} />
              <p>No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} md={3} data-aos="fade-up">
            <ul className={clsx(classes.testimonialBlock)}>
              <li>
                <span className={clsx(classes.fourthCircle)}></span>
              </li>
              <li>
                <span className={clsx(classes.fifthCircle)} ></span>
              </li>
              <li>
                <span className={clsx(classes.sixthCircle)}></span>
              </li>
            </ul>    
          </Grid>                    
        </Grid>
      </Section>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Testimonial;
