import React from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import  Button  from '@material-ui/core/Button';
import  List  from '@material-ui/core/List';
import  ListItem  from '@material-ui/core/ListItem';
import  ListItemText  from '@material-ui/core/ListItemText';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { SectionHeader } from 'components/molecules';
import { Section, Parallax } from 'components/organisms';
import  makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    background: 'white',
    overflow: 'hidden',
  },
  sectionWrapper: {
    height: 400,
    backgroundColor: '#5120FF',
  },
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    textTransform:"capitalize"
  },
  section: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  avatar: {
    height: 60,
    width: 60,
  },
  backButton:{
    top: "25px",
    zIndex: "1",
    background: "transparent",
    color: "#fff"
  }
}));

const Hero = props => {
  const { className, cover, title, subtitle, date, ...rest } = props;
  const classes = useStyles();
  const router = useRouter()
  
  const handleRedirect = ()=>{
    router.push(`/press-release`)
  }

  return (
    <div className={clsx(classes.root, className)} {...rest}>

      <Parallax backgroundImage={cover}>
        <div className={classes.sectionWrapper}>
          <Section className={classes.section}>
            <>
            <SectionHeader
              title={title}
              subtitle={subtitle}
              align="left"
              data-aos="fade-up"
              titleProps={{
                className: clsx(classes.title, classes.textWhite),
                variant: 'h3',
              }}
              subtitleProps={{
                className: classes.textWhite,
              }}
            />
            <List disablePadding>
              <ListItem disableGutters>
                {/* <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    {...author.photo}
                    alt={author.name}
                    className={classes.avatar}
                  />
                </ListItemAvatar> */}
                <ListItemText
                  primary={`Published by Admin`}
                  secondary={`on ${moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")}`}
                  primaryTypographyProps={{
                    className: classes.textWhite,
                    variant: 'subtitle1',
                  }}
                  secondaryTypographyProps={{
                    className: classes.textWhite,
                    variant: 'subtitle1',
                  }}
                />
              </ListItem>
            </List>
            </>
            <Button 
              variant="contained" 
              className={classes.backButton}
              onClick={handleRedirect}
            >
              <ArrowBackIosIcon /> Back to list
            </Button>
          </Section>
        </div>
      </Parallax>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Cover of the hero
   */
  cover: PropTypes.object.isRequired,
  /**
   * Title of the hero
   */
  title: PropTypes.string.isRequired,
  /**
   * Subtitle of the hero
   */
  subtitle: PropTypes.string.isRequired,
  /**
   * Author of the post
   */
  author: PropTypes.object.isRequired,
};

export default Hero;
