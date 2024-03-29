import React from 'react';
import PropTypes from 'prop-types';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import  useTheme  from '@material-ui/core/styles/useTheme';
import  useMediaQuery  from '@material-ui/core/useMediaQuery';
import  Grid  from '@material-ui/core/Grid';
import  Typography  from '@material-ui/core/Typography';
import  Avatar  from '@material-ui/core/Avatar';  
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles(() => ({
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 0,
    background: 'transparent',
  },
}));

const Browsers = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <span>
            <Typography component="span" variant="inherit" color="primary">Compatible</Typography> With
            All Major Browsers
          </span>
        }
        subtitle="The Kit is fully compatible with all major browsers and devices."
        fadeUp
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            md={4}
            data-aos={'fade-up'}
          >
            <DescriptionListIcon
              icon={
                <Avatar className={classes.avatar}>
                  <Image src={item.logo} alt={item.name} />
                </Avatar>
              }
              title={item.name}
              subtitle={item.title}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Browsers.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Browsers;
