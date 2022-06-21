/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CloseIcon from '@material-ui/icons/Close';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { useStore } from '../../../../../../store';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Link from 'next/link';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(theme => ({
  root: {
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    marginRight: theme.spacing(8),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  divider: {
    width: '100%',
  },
  badgesWrap: {
    marginTop:"8px",
    marginBottom:"8px",
    "& .MuiBadge-badge":{
      background: "#5120ff",
      color: "white",
    }
  },
  linkText: {
    color:"#2d3748 !important",
    "&.active": {
    color:"#2d3748 !important",
    },
  },
}));

const SidebarNav = props => {
  const { pages, onClose, onCloseLogOut, className, ...rest } = props;
  const classes = useStyles();

  const blockchain = pages.blockchain;
  const supportedPages = pages.pages;
  const account = pages.account;
  const accountLoggedIn = pages.accountLoggedIn
  const { tokenStatus, tokenHandle, logoutTokenHandle, cartLength, getCartLength } = useStore();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const cartItem = JSON.parse(localStorage.getItem('SelectedCourseModules'));
    if (cartItem) {
      getCartLength(cartItem.length)
    }
    if (token) {
      tokenHandle();
    }
  }, []);

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body2"
              component={'a'}
              href={page.href}
              className={clsx(classes.navLink, 'submenu-item')}
              color="textPrimary"
              onClick={() => onClose()}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };
  const MenuGroupLoggedin = props => {
    const { item, onClose } = props;
    return (
      <List disablePadding>
        <ListItem disableGutters className={classes.menuGroupItem}>
          <Typography
            variant="body2"
            component={'a'}
            href={item.href ? item.href : null}
            className={clsx(classes.navLink, 'submenu-item')}
            color="textPrimary"
            onClick={onClose}
          >
            {item.title}
          </Typography>
        </ListItem>
      </List>
    );
  };

  const LandingPages = () => {
    const { services } = blockchain.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={services} />
        </div>
      </div>
    );
  };

  const SupportedPages = () => {
    const {
      career,
    } = supportedPages.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={career} />
        </div>
      </div>
    );
  };

  const AccountPages = () => {
    const { settings } = account.children;
    const { page1 } = accountLoggedIn.children.settingsLoggedin
    const { page2 } = accountLoggedIn.children.settingsLoggedin
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          {tokenStatus ?
            <>
              <Link href={'/add-cart'} as={'/add-cart'}>
                <a className={classes.linkText} onClick={()=> onClose()}>
                  <Badge badgeContent={cartLength} className={classes.badgesWrap}>
                    <ShoppingCartIcon />
                  </Badge>
                </a>
              </Link>
              <MenuGroupLoggedin item={page1} onClose={() => onClose()} />
              <MenuGroupLoggedin item={page2} onClose={() => onCloseLogOut()} />
            </> :
            <MenuGroup item={settings} />
          }
        </div>
      </div>
    );
  };

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={() => onClose()}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Block Chain
        </Typography>
        <LandingPages />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Pages
        </Typography>
        <SupportedPages />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Account
        </Typography>
        <AccountPages />
      </ListItem>

    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
