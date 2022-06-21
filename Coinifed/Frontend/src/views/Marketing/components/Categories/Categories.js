import React from 'react';
import PropTypes from 'prop-types';
import { SectionHeader } from 'components/molecules';
import { CardCategoryLink } from 'components/organisms';
import  useMediaQuery  from '@material-ui/core/useMediaQuery';
import  Grid  from '@material-ui/core/Grid';
import  Typography  from '@material-ui/core/Typography';
import purple from '@material-ui/core/colors/purple';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import  useTheme  from '@material-ui/core/styles/useTheme';
const useStyles = makeStyles(() => ({
  textBlue: {
    color: "#5120FF",
  },
}));

const Categories = (props) => {
  const classes = useStyles();
  const { data, courseData, className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <span>
            Choose your best{" "}
            <Typography
              variant='inherit'
              component='span'
              className={classes.textBlue}
            >
              Courses 
            </Typography>
          </span>
        }
        subtitle='Browse the available course categories, choose your favorite one and start learning.'
        fadeUp
      />
      <Grid container spacing={isMd ? 4 : 2} justifyContent={"center"}>
        {courseData && courseData.length
          ? courseData.map((item, index) => (
              <Grid
                key={index}
                item
                container
                alignItems='center'
                direction='column'
                xs={12}
                sm={6}
                md={4}
                data-aos='fade-up'
              >
                <CardCategoryLink
                  variant='outlined'
                  align={isMd ? "left" : "center"}
                  liftUp
                  title={item.title}
                  subtitle={item.subTitle}
                  href={`/course-detail/${item._id}`}
                  fontIconClass={"fas fa-funnel-dollar"}
                  color={purple}
                />
              </Grid>
            ))
          : ""}
      </Grid>
    </div>
  );
};

Categories.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Categories;
