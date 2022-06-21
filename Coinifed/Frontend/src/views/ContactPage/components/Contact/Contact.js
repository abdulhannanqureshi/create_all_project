import React from 'react';
import PropTypes from 'prop-types';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import  List  from '@material-ui/core/List';
import  ListItem  from '@material-ui/core/ListItem';
import  ListItemAvatar  from '@material-ui/core/ListItemAvatar';
import  ListItemText  from '@material-ui/core/ListItemText';
import  Avatar  from '@material-ui/core/Avatar';
import { SectionHeader } from 'components/molecules';
import  Divider  from '@material-ui/core/Divider';
import { Section } from 'components/organisms';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  hero: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    maxWidth: theme.layout.contentWidth,
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  heroLeftSide: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3, 8),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3, 2),
    },
  },
  heroRightSide: {
    maxWidth: "50%",
    flex: "0 0 50%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      flex: "0 0 100%",
    },
  },
  heroCover: {
    position: "relative",
    width: "50vw",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  heroImageContainer: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  heroImage: {
    position: "absolute",
    right:"12px",
    width: "100%",
    height: "100%",

    [theme.breakpoints.down("sm")]: {
      position: "static",
    },
    "& img": {
      [theme.breakpoints.down("sm")]: {
        height: 450,
        objectFit: "cover",
      },
      [theme.breakpoints.down("xs")]: {
        height: 350,
      },
    },
  },
  map: {
    zIndex: 9,
    border:"none",
    padding:"25px"
  },
  icon: {
    background: "transparent",
    borderRadius: 0,
  },
  cardAddress: {
    "& gm-style": {
      paddingLeft: "120px",
      background: "red !important"
    }
  },
  contactAtr: {
    "& > span": {
      fontWeight: "700",
    },
  },
}));

const Contact = (props) => {
  const { socialLinkesData ,className,...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <div className={clsx(classes.root, 'hero-shaped', className)} {...rest}>
        <div className={clsx('hero-shaped__wrapper', classes.hero)}>
          <Section
            className={clsx('hero-shaped__left-side', classes.heroLeftSide)}
          >
            <SectionHeader
              title='Contact Details'
              subtitle='Have questions or ready to launch your blockchain course? We’d love to hear from you.
              Fill out the form below and someone on our team will respond soon.'
              subtitleProps={{
                variant: "body1",
                color: "textPrimary",
              }}
              data-aos='fade-up'
              align='left'
            />
            <List disablePadding>
              <ListItem disableGutters data-aos='fade-up'>
                <ListItemAvatar>
                  <Avatar
                    src='https://assets.maccarianagency.com/the-front/illustrations/contact-icon-phone.png'
                    srcSet='https://assets.maccarianagency.com/the-front/illustrations/contact-icon-phone@2x.png 2x'
                    className={classes.icon}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary='Phone'
                  secondary={socialLinkesData ? socialLinkesData.phone : ""}
                  className={classes.contactAtr}
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>
              <ListItem disableGutters data-aos='fade-up'>
                <ListItemAvatar>
                  <Avatar
                    src='https://assets.maccarianagency.com/the-front/illustrations/contact-icon-mail.png'
                    srcSet='https://assets.maccarianagency.com/the-front/illustrations/contact-icon-mail@2x.png 2x'
                    className={classes.icon}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary='Email'
                  secondary={socialLinkesData ? socialLinkesData.email : ""}
                  className={classes.contactAtr}
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>
              <ListItem disableGutters data-aos='fade-up'>
                <ListItemAvatar>
                  <Avatar
                    src='https://assets.maccarianagency.com/the-front/illustrations/contact-icon-pin.png'
                    srcSet='https://assets.maccarianagency.com/the-front/illustrations/contact-icon-pin@2x.png 2x'
                    className={classes.icon}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary='Head Office'
                  secondary={socialLinkesData ? socialLinkesData.headOfficeAddress : ""}
                  className={classes.contactAtr}
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </ListItem>
            </List>
          </Section>
          <div className={clsx('hero-shaped__right-side', classes.heroRightSide)}>
            <div className={clsx('hero-shaped__cover', classes.heroCover)}>
              <div
                className={clsx(
                  'hero-shaped__image-container',
                  classes.heroImageContainer,
                )}
              >
                <div className={clsx('hero-shaped__image', classes.heroImage)}>
                  <iframe id="myiFrame"
                    className={clsx(classes.map, classes.cardAddress)}
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.8072446395954!2d-87.9311548485238!3d42.133009579100595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb956b18faec5%3A0xb4cae18357954cf2!2s410%20Mercantile%20Ct%2C%20Wheeling%2C%20IL%2060090%2C%20USA!5e0!3m2!1sen!2sin!4v1636463790635!5m2!1sen!2sin'
                    width='100%'
                    height='550'
                    loading='lazy'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Contact;
