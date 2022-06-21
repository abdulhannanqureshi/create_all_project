import React from 'react';
import PropTypes from 'prop-types';
import AppConfig  from '../../../../config/appConfig';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import  useTheme from '@material-ui/core/styles/useTheme';
import FacebookIcon from '@material-ui/icons/Facebook';
import  Typography  from '@material-ui/core/Typography';
import  useMediaQuery  from '@material-ui/core/useMediaQuery';
import  GridList  from '@material-ui/core/GridList';
import  GridListTile  from '@material-ui/core/GridListTile';
import  IconButton  from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { Image } from 'components/atoms';
const useStyles = makeStyles(theme => ({
  section: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(1),
  },
  socialIcon: {
    borderRadius: 0,
    marginRight: theme.spacing(2),
    color: theme.palette.text.primary,
    background: theme.palette.alternate.main,
    '&:last-child': {
      marginRight: 0,
    },
  },
}));

const Content = props => {
  const {data, className,dataSocial,socialLinkes, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <div className={className} {...rest}>
      <div className={classes.section}>
        <Image
          src={`${AppConfig.IMAGE_URL}${data.blogFeatureImage}`}
          srcSet={`${AppConfig.IMAGE_URL}${data.blogFeatureImage}`}
          className={classes.image}
          lazyProps={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className={classes.section}>
        <Typography
          component="div"
          variant="h6"
          color="textPrimary"
          dangerouslySetInnerHTML={{__html: data.description}}
        >
        </Typography>
      </div>
      <div>
        <IconButton className={classes.socialIcon} target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${socialLinkes}`}>
          <FacebookIcon />
        </IconButton>
        <IconButton className={classes.socialIcon} target="_blank" href={`https://twitter.com/share?text=message_here&url=${socialLinkes}`}>
        <LinkedInIcon/>
        </IconButton>
        <IconButton className={classes.socialIcon} target="_blank" href={`http://www.linkedin.com/shareArticle?mini=true&url=${socialLinkes}`}>
          <TwitterIcon />
        </IconButton>
        {/* <IconButton className={classes.socialIcon} href={`${dataSocial.pinterest}`}>
          <PinterestIcon />
        </IconButton> */}
      </div>
    </div>
  );
};

Content.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default Content;
