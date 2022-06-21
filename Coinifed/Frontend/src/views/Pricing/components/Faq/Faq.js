import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import  useTheme  from '@material-ui/core/styles/useTheme';
import { SectionHeader } from 'components/molecules';
import  ListItem  from '@material-ui/core/ListItem';
import  ListItemText  from '@material-ui/core/ListItemText';
import  useMediaQuery  from '@material-ui/core/useMediaQuery';
import  Grid  from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  fontWeightBold: {
    fontWeight: 'bold',
  },
  faqTitle: {
    display: 'block',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(2),
    },
  },
}));

const Faq = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Frequently asked questions"
        titleProps={{
          className: classes.fontWeightBold,
        }}
      />
      <Grid container spacing={isMd ? 4 : 0}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ListItem disableGutters key={index} data-aos="fade-up">
              <ListItemText
                primary={item.title}
                secondary={item.text}
                primaryTypographyProps={{
                  variant: 'h6',
                  className: clsx(classes.fontWeightBold, classes.faqTitle),
                }}
                secondaryTypographyProps={{
                  variant: 'subtitle1',
                  color: 'textPrimary',
                }}
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Faq.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Faq;
