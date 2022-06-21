import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from 'clsx';
import { Image } from 'components/atoms';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import logo from '../../../../../public/assets/Coinifide-white-logo.png';
import { useStore } from '../../../../store';

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2.2, 4),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  navLink: {
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: "pointer",
    color: "#fff",
    "&:hover > .menu-item, &:hover svg": {
      color: "#fff",
    },
    "&.menu-item--no-dropdown": {
      paddingRight: 0,
    },
    "& p": {
      color: "#fff",
    },
  },
  listItemActive: {
    "&> .menu-item": {
      color: "#fff",
    },
  },
  listItemText: {
    flex: "0 0 auto",
    marginRight: theme.spacing(2),
    whiteSpace: "nowrap",
    [theme.breakpoints.down(1200)]: {
      marginRight: theme.spacing(0.5),
    },
  },
  listItemButton: {
    whiteSpace: "nowrap",
  },
  listItemIcon: {
    minWidth: "auto",
    color: "#fff",
  },
  popover: {
    padding: theme.spacing(2),
    border: theme.spacing(1),
    boxShadow: "0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)",
    minWidth: 150,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  menuIcon: {
    fill: "#fff",
  },
  expandOpen: {
    transform: "rotate(180deg)",
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 60,
    height: 60,
    [theme.breakpoints.down(1200)]: {
      width: 40,
      height: 40,
    },
    "& a": {
      color: "#fff",
    },
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuItem: {
    marginRight: theme.spacing(5),
    "&:last-child": {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: "uppercase",
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down(1200)]: {
      marginLeft: theme.spacing(1),
    },
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `capitalize`,
    color: `#fff`,
    fontSize: 16,
    whiteSpace: "nowrap",
    [theme.breakpoints.down(1200)]: {
      fontSize: 14,
    },
  },
  headerWrap: {
    backgroundColor: "#5120FF",
  },
  headerButton: {
    color: "#fff",
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: "16px",
    borderColor: "#fff",
  },
  badgesWrap: {
    "& .MuiBadge-badge":{
      background: "#fff",
      color: "#5120ff",
    }
  }
}));

const Topbar = ({
  themeMode,
  themeToggler,
  onSidebarOpen,
  pages,
  className,
  ...rest
}) => {
  const classes = useStyles();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const handleRedirect = (link) => {
    router.push(`/${link}`);
  };

  const navLinks = [
    { title: `Labs`, path: `/labs` },
    { title: `Certification`, path: `/certificate` },
    { title: `Marketing`, path: `/marketing` },
    { title: `Blogs`, path: `/blog` },
    { title: `About`, path: `/about` },
    { title: `Contact`, path: `/contact-page` },
  ];
  const { tokenStatus , tokenHandle, logoutTokenHandle, cartLength, getCartLength } = useStore();
  // For Logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('SelectedCourseModules');
    Cookies.remove('token')
    logoutTokenHandle();
    router.push('/signin');
  };

  React.useEffect(() => {
    const token =  localStorage.getItem("token");
    const cartItem =  JSON.parse(localStorage.getItem('SelectedCourseModules'));
    if(cartItem){
      getCartLength(cartItem.length)
    }
    if(token){
      tokenHandle();
    }
  },[]);
  return (
    <div className={classes.headerWrap}>
      <Toolbar disableGutters className={classes.toolbar} {...rest}>
        <div className={classes.logoContainer}>
          <Link href={'/'} as={'/'}>
            <a>
              <Image className={classes.logoImage} src={logo} />
            </a>
          </Link>
        </div>
        <div className={classes.flexGrow}>
          <Hidden smDown>
            <List
              component='nav'
              aria-labelledby='main navigation'
              className={classes.navDisplayFlex}
            >
              <ListItem>
                <Link href={'/courses'} as={'/courses'}>
                  <a className={classes.linkText}>Explore Courses</a>
                </Link>
              </ListItem>
              <ListItem
                aria-describedby={'blockchain'}
                onClick={(e) => handleClick(e, 'blockchain')}
                className={clsx(
                  classes.listItem,
                  openedPopoverId === 'blockchain' ? classes.listItemActive : ''
                )}
              >
                <Typography
                  variant='body1'
                  color='textPrimary'
                  className={clsx(classes.listItemText, 'menu-item')}
                >
                  Blockchain
                </Typography>
                <ListItemIcon className={classes.listItemIcon}>
                  <ExpandMoreIcon
                    className={
                      openedPopoverId === 'blockchain' ? classes.expandOpen : ''
                    }
                    fontSize='small'
                  />
                </ListItemIcon>
              </ListItem>
              <Popover
                elevation={1}
                id={'blockchain'}
                open={openedPopoverId === 'blockchain'}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                classes={{ paper: classes.popover }}
              >
                <div>
                  <div className={classes.menu}>
                    <div className={classes.menuItem}>
                      <MenuItem
                        onClick={() => {
                          handleRedirect('university')
                          handleClose()
                        }}>
                        For Higher Education
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleRedirect('enterprise')
                          handleClose()
                        }}>
                        For Enterprise
                      </MenuItem>
                    </div>
                  </div>
                </div>
              </Popover>
              {navLinks.map(({ title, path }) => (
                <ListItem key={title}>
                  <Link href={path} as={path} key={title}>
                    <a className={classes.linkText}>{title}</a>
                  </Link>
                </ListItem>
              ))}
            </List>
            <List disablePadding className={classes.navigationContainer}>
                {tokenStatus ? (
                  <>
                    <ListItem>
                      <Link href={'/add-cart'} as={'/add-cart'}>
                        <a className={classes.linkText}>
                          <Badge badgeContent={cartLength} className={classes.badgesWrap}>
                            <ShoppingCartIcon />
                          </Badge>
                        </a> 
                      </Link>
                    </ListItem>
                    <ListItem
                      aria-describedby={'profile'}
                      onClick={(e) => handleClick(e, 'profile')}
                      className={clsx(
                        classes.listItem,
                        openedPopoverId === 'profile'
                          ? classes.listItemActive
                          : ''
                      )}
                    >
                      <Typography
                        variant='body1'
                        color='textPrimary'
                        className={clsx(classes.listItemText, 'menu-item')}
                      >
                        Profile
                      </Typography>
                      <ListItemIcon className={classes.listItemIcon}>
                        <ExpandMoreIcon
                          className={
                            openedPopoverId === 'profile'
                              ? classes.expandOpen
                              : ''
                          }
                          fontSize='small'
                        />
                      </ListItemIcon>
                    </ListItem>
                    <Popover
                      elevation={1}
                      id={'profile'}
                      open={openedPopoverId === 'profile'}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      classes={{ paper: classes.popover }}
                    >
                      <div>
                        <div className={classes.menu}>
                          <div className={classes.menuItem}>
                            <MenuItem
                              onClick={() => {
                                handleRedirect('dashboard')
                                handleClose()
                              }}
                            >
                              Dashboard
                            </MenuItem>
                            <MenuItem
                              onClick={() => {
                                handleLogout()
                                handleClose()
                              }}>
                              Logout
                            </MenuItem>
                          </div>
                        </div>
                      </div>
                    </Popover>
                  </>
                ) : (
                  <>
                    <ListItem
                      aria-describedby={'account'}
                      onClick={(e) => handleClick(e, 'account')}
                      className={clsx(
                        classes.listItem,
                        openedPopoverId === 'account'
                          ? classes.listItemActive
                          : ''
                      )}
                    >
                      <Typography
                        variant='body1'
                        color='textPrimary'
                        className={clsx(classes.listItemText, 'menu-item')}
                      >
                        Account
                      </Typography>
                      <ListItemIcon className={classes.listItemIcon}>
                        <ExpandMoreIcon
                          className={
                            openedPopoverId === 'profile'
                              ? classes.expandOpen
                              : ''
                          }
                          fontSize='small'
                        />
                      </ListItemIcon>
                    </ListItem>
                    <Popover
                      elevation={1}
                      id={'account'}
                      open={openedPopoverId === 'account'}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      classes={{ paper: classes.popover }}
                    >
                      <div>
                        <div className={classes.menu}>
                          <div className={classes.menuItem}>
                            <MenuItem
                              onClick={() => {
                                handleRedirect('signin')
                                handleClose()
                              }}
                              >
                              Sign In
                            </MenuItem>
                            <MenuItem
                              onClick={() => {
                                handleRedirect('signup')
                                handleClose()
                              }}>
                              Sign Up
                            </MenuItem>
                          </div>
                        </div>
                      </div>
                    </Popover>
                  </>
                )
                }
            </List>
          </Hidden>
        </div>
        <Hidden mdUp>
          <IconButton
            className={classes.iconButton}
            onClick={onSidebarOpen}
            aria-label='Menu'
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Hidden>
      </Toolbar>
    </div>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;