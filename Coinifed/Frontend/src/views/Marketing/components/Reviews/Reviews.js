import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardReview } from 'components/organisms';
import  useMediaQuery  from '@material-ui/core/useMediaQuery';
import  Grid  from '@material-ui/core/Grid';
import  Typography  from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import  Button  from '@material-ui/core/Button';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import  useTheme  from '@material-ui/core/styles/useTheme';
const useStyles = makeStyles(() => ({
  sectionHeadlineStars: {
    maxWidth: 120,
  },
}));

const Reviews = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        overline={
          <Image
            src="https://assets.maccarianagency.com/the-front/illustrations/rated-by-our-customer.png"
            alt="rating"
            className={classes.sectionHeadlineStars}
            width="auto"
          />
        }
        title={
          <span>
            <Typography component="span" variant="inherit" color="primary">Rated 5 out of 5</Typography>{' '}
            stars by our customers!
          </span>
        }
        subtitle="Companies from across the globe have had fantastic experiences using TheFront. Here’s what they have to say."
        fadeUp
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((review, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={12}
            md={4}
            data-aos="fade-up"
          >
            <CardReview
              variant="outlined"
              text={review.feedback}
              icon={
                <IconAlternate
                  color={blue}
                  fontIconClass="fas fa-quote-right"
                />
              }
              authorName={review.authorName}
              authorTitle={review.authorOccupation}
              authorPhoto={review.authorPhoto}
            />
          </Grid>
        ))}
        <Grid item container xs={12} justifyContent="center">
          <Button variant="outlined" size="large" color="primary">
            See all reviews
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Reviews.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Reviews;
