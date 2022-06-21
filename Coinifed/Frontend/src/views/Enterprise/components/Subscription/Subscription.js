import React from 'react';
import PropTypes from 'prop-types';
import  useTheme  from '@material-ui/core/styles/useTheme';
import  Button  from '@material-ui/core/Button';
import  useMediaQuery  from '@material-ui/core/useMediaQuery';
import  Grid  from '@material-ui/core/Grid';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import  TextField   from '@material-ui/core/TextField';

const Subscription = props => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <CardBase withShadow>
        <SectionHeader
          title="Subscribe To Our Newsletter"
          subtitle="Don't lose a chance to be among the firsts to know about our upcoming news and updates."
          fadeUp
        />
        <Grid container spacing={1} alignItems="center" data-aos="fade-up">
          <Grid item xs={12} sm={9}>
            <TextField
              size="small"
              fullWidth
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size={isMd ? 'large' : 'medium'}
            >
              subscribe
            </Button>
          </Grid>
        </Grid>
      </CardBase>
    </div>
  );
};

Subscription.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Subscription;
