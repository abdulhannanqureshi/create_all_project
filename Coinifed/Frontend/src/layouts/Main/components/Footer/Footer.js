import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {ApiHelper} from 'helper'
import { ApiRoutes } from 'config';
import Toast from 'components/toaster';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import  Typography  from '@material-ui/core/Typography';
import  Grid  from '@material-ui/core/Grid';
import  List  from '@material-ui/core/List';
import  ListItem  from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import LockIcon from '@material-ui/icons/Lock';
import logo from "../../../../../public/assets/Coinifide-white-logo.png"
import { Section } from 'components/organisms';
// import { Image } from 'components/atoms';
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4, 0),
    },
    background: "linear-gradient(180deg, #5363FC 0%, #5120FF 100%)",
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 1),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 2),
    },
  },
  logoContainerItem: {
    paddingTop: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: 80,
    height: 80,
  },
  logoImage: {
    width: "80px",
    height: "80px",
    marginBottom: theme.spacing(0, 0, 2),
  },
  groupTitle: {
    textTransform: "uppercase",
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: "rgba(255,255,255,.6)",
    "&:hover": {
      background: "transparent",
    },
    "&:last-child": {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: "0 !important",
  },
  menu: {
    display: "flex",
  },
  menuItem: {
    margin: theme.spacing(2),
    "&:last-child": {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: "uppercase",
    color: "white",
  },
  divider: {
    width: "100%",
  },
  navLink: {
    color: "rgba(255,255,255,.6)",
  },
  supportIcon: {
    color: "#fff",
    fontSize: "44px",
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
  },
  supportBlock: {
    color: "#fff",
    "& div": {
      fontSize: "18px",
      paddingLeft: "20px",
      [theme.breakpoints.down("md")]: {
        paddingLeft: "10px",
        fontSize: "17px",
      },
    },
  },
  footerLink: {
    paddingLeft: "0px",
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& li a": {
      color: "#fff",
      fontSize: "18px",
      display: "block",
      padding: "15px",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1, 2),
      },
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(0.7, 1),
      },
    },
  },
  contactSection: {
    backgroundColor: "#5120FF",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2.5, 0),
    },
  },
  getInWrap: {
    flexWrap: "wrap",
    alignItems: "center",
    [theme.breakpoints.down(767)]: {
      display: "block",
      textAlign: "center",
    },
  },
  getInTouchBtn: {
    display: "inline-block",
    color: "#5120FF",
    backgroundColor: "#fff",
    padding: "12px 25px",
    borderRadius: "30px",
    fontWeight: "900",
    fontSize: "16px",
    minWidth: 200,
    textAlign: "center",
    [theme.breakpoints.down(767)]: {
      marginTop: 10,
    },
  },
  copyRight: {
    color: "#fff",
  },
  ventureLink: {
    color: "white",
  },
}));

const Footer = (props) => {

  const { pages, className, ...rest } = props;
  const classes = useStyles();
  const landings = pages.landings;
  const supportedPages = pages.pages;
  const account = pages.account;
  const [socialLinkes, setsocialLinkes] = useState("");
  const [loader, setLoader] = React.useState(false);
  const [templateData, setTemplateData] = useState([]);
  const [getTemplateData, setGetTemplateData] = useState(null);

  useEffect(() => {
    getSocialLinkes();
    fetchMarketingData()
  }, []);

  const fetchMarketingData = async () => {
    setLoader(true);
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.FRONT_PAGE_DATA.service,
      ApiRoutes.FRONT_PAGE_DATA.url,
      ApiRoutes.FRONT_PAGE_DATA.method,
      ApiRoutes.FRONT_PAGE_DATA.authenticate,
      undefined,
      undefined,
      undefined
    );
    if (response && !response.isError) {
      const data = response.data.data;
      setTemplateData(data);
      setLoader(false);
    } else {
      Toast.fire({
        icon: "error",
        title: "Something went wrong",
      });
    }
  }
  useEffect(() => {
    if (templateData && templateData.length) {
      let getData = templateData.filter((e) => e.titleSlug === "footer");
      setGetTemplateData(...getData);
    }

  }, [templateData]);

  const getSocialLinkes = async () => {
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.GETSOCIALLINKES.service,
      ApiRoutes.GETSOCIALLINKES.url,
      ApiRoutes.GETSOCIALLINKES.method,
      ApiRoutes.GETSOCIALLINKES.authenticate,
      undefined,
      undefined,
      undefined
    );
    if (response && !response.isError) {
      const data = response.data.data;
      setsocialLinkes(data);
      // console.log(data, "social links");
    } else {
      Toast.fire({
        icon: "error",
        title: "Something went wrong",
      });
    }
  };

  const MenuGroup = (props) => {
    const { item } = props;
    return (
      <List disablePadding className={classes.menuItem}>
        <ListItem disableGutters className={classes.menuGroupItem}>
          <Typography variant='body2' className={classes.menuGroupTitle}>
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant='body2'
              component={"a"}
              href={page.href}
              className={clsx(classes.navLink, "submenu-item")}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  const LandingPages = () => {
    const { services, apps, web } = landings.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={services} />
          <MenuGroup item={apps} />
        </div>
        <div>
          <MenuGroup item={web} />
        </div>
      </div>
    );
  };

  const SupportedPages = () => {
    const {
      career,
      helpCenter,
      company,
      contact,
      blog,
      portfolio,
    } = supportedPages.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={career} />
          <MenuGroup item={helpCenter} />
        </div>
        <div>
          <MenuGroup item={company} />
          <MenuGroup item={contact} />
        </div>
        <div>
          <MenuGroup item={blog} />
          <MenuGroup item={portfolio} />
        </div>
      </div>
    );
  };

  const AccountPages = () => {
    const { settings, signup, signin, password, error } = account.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={settings} />
          <MenuGroup item={signup} />
        </div>
        <div>
          <MenuGroup item={signin} />
          <MenuGroup item={password} />
          <MenuGroup item={error} />
        </div>
      </div>
    );
  };

  const navLinks = [
    { title: `About`, path: `/about` },
    { title: `Explore Courses`, path: `/courses` },
    { title: `Labs`, path: `/labs` },
    { title: `Certification`, path: `/certificate` },
    { title: `Blogs`, path: `/blog` },
    { title: `Press Releases`, path: `/press-release` },
    { title: `Contact`, path: `/contact-page` },
    { title: `Refund Policy`, path: `/refund-policy` },
    { title: `Privacy Policy`, path: `/privacy-policy` },
    { title: `Terms & Conditions`, path: `/terms-conditions` },
  ];

  return (
    <>
      <Box component='div' p={5} className={classes.contactSection}>
        <Section disablePadding={true}>
          <Box
            display={"flex"}
            pl={6}
            pr={6}
            justifyContent={"space-between"}
            className={classes.getInWrap}
          >

            <Typography variant='h6' className={clsx(classes.fontWeightBold)}>
              { getTemplateData   ?  getTemplateData.blockTitle1
                : "" }
            </Typography>
            <Link href={"/contact-page"}>
              <a className={classes.getInTouchBtn}>
                { getTemplateData   ?  getTemplateData.blockTitle2
                : "" }</a>
            </Link>
          </Box>
        </Section>
      </Box>
      <div {...rest} className={clsx(classes.root, className)}>
        <div className={classes.footerContainer}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                className={classes.supportBlock}
              >
                <CheckCircleIcon className={classes.supportIcon} />
                <div>
                  { getTemplateData   ?  getTemplateData.blockTitle3
                : "" }
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                className={classes.supportBlock}
              >
                <ControlCameraIcon className={classes.supportIcon} />
                <div>
                  { getTemplateData   ?  getTemplateData.blockTitle4
                : "" }
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                className={classes.supportBlock}
              >
                <LockIcon className={classes.supportIcon} />
                <div>{ getTemplateData   ?  getTemplateData.blockTitle5
                : "" }</div>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} md={12}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <List disablePadding>
                  <ListItem
                    disableGutters
                    className={classes.logoContainerItem}
                  >
                    <div className={classes.logoContainer}>
                      <Link href={'/'} as={'/'}>
                        <a>
                          <Image
                            className={classes.logoImage}
                            src={logo}
                            alt='Coinifide'
                            width={80}
                            height={80}
                          />
                        </a>
                      </Link>
                    </div>
                  </ListItem>
                  <ListItem disableGutters>
                    <IconButton
                      className={classes.socialIcon}
                      href={socialLinkes.facebook}
                      target={"_blank"}
                    >
                      <FacebookIcon className={classes.icon} />
                    </IconButton>
                    <IconButton
                      className={classes.socialIcon}
                      href={socialLinkes.linkedin}
                      target={"_blank"}
                    >
                      <LinkedInIcon className={classes.icon} />
                    </IconButton>
                    <IconButton
                      className={classes.socialIcon}
                      href={socialLinkes.twitter}
                      target={"_blank"}
                    >
                      <TwitterIcon className={classes.icon} />
                    </IconButton>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} md={12}>
              <ul className={classes.footerLink}>
                {navLinks.map((data, index) => {
                  return (
                    <li key={index}>
                      <Link href={data.path} as={data.path}>
                        <a className={classes.linkText}>{data.title}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography
                variant='subtitle1'
                color='textPrimary'
                align='center'
                className={classes.copyRight}
              >
                <a
                  href='http://initioventures.com/'
                  className={classes.ventureLink}
                  target={"_blank"}
                >
                  { getTemplateData   ?  getTemplateData.blockTitle6
                : "" }
                </a>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;