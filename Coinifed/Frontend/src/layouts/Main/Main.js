import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import  useMediaQuery  from '@material-ui/core/useMediaQuery';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import  useTheme  from '@material-ui/core/styles/useTheme';
import { Topbar, Footer, Sidebar } from './components';
import { useRouter } from 'next/router';
import  Typography  from '@material-ui/core/Typography';
import WifiOffIcon from '@material-ui/icons/WifiOff';
import { ApiHelper } from "helper";
import { ApiRoutes } from "config";
import { useStore } from '../../store';
import Cookies from 'js-cookie';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  noConnection:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    flexDirection: 'column',
  },
  fontSize_18: {
    fontSize: 18,
  },
  fontSize_50: {
    fontSize: 50,
  },
  blogchain_heading: {
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
}));

const Main = ({ children, themeToggler, themeMode }) => {
  const router = useRouter();
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const pages = {
    blockchain: {
      title: 'Blockchain',
      id: 'blockchain',
      children: {
        services: {
          groupTitle: '',
          pages: [
            {
              title: 'For Higher Education',
              href: '/university',
            },
            {
              title: 'For Enterprise',
              href: '/enterprise',
            },
          ],
        },
      },
    },
    pages: {
      title: 'Pages',
      id: 'supported-pages',
      children: {
        career: {
          groupTitle: '',
          pages: [
            {
              title: 'Explore Courses',
              href: '/courses',
            },
            {
              title: 'Labs',
              href: '/labs',
            },
            {
              title: 'Certification',
              href: '/certificate',
            },
            {
              title: 'Marketing',
              href: '/marketing',
            },
            {
              title: 'Blogs',
              href: '/blog',
            },
            {
              title: 'About',
              href: '/about',
            },
            {
              title: 'Contact',
              href: '/contact-page',
            },
           
          ],
        },
      },
    },
    account: {
      title: 'Account',
      id: 'account loggedin',
      children: {
        settings: {
          groupTitle: '',
          pages: [
            {
              title: 'Sign up',
              href: '/signup',
            },
            {
              title: 'Sign in',
              href: '/signin',
            },
          ],
        },
      },
    },
    accountLoggedIn: {
      title: 'Account',
      id: 'account',
      children: {
        settingsLoggedin: {
          groupTitle: '',
          page1: 
            {
              title: 'Dashboard',
              href: '/dashboard',
            },
          page2:
          {
            title: 'Logout',
            ///href is managed by router.push
          }
        },
      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };
  ///For logout and closing sidebar
  const {  logoutTokenHandle} = useStore();

  const handleLogoutClose = () =>
  {
    setOpenSidebar(false);
    localStorage.removeItem('token');
    localStorage.removeItem('SelectedCourseModules');
    Cookies.remove('token')
    logoutTokenHandle();
    router.push('/signin');
  }
  const open = isMd ? false : openSidebar;

  const [online , setOnline] = useState(true)
  React.useEffect(() => {
    const onlineStatus = navigator.onLine;
    if(!onlineStatus){
      setOnline(false)
    }
  },[]);

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
    {online ?
      (
        <>
        <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} themeMode={themeMode} themeToggler={themeToggler} />
        <Sidebar
          onClose={handleSidebarClose}
          onCloseLogOut={handleLogoutClose}
          open={open}
          variant="temporary"
          pages={pages}
        />
        <main>
          {children}
        </main>
        <Footer pages={pages} />
        </>
      )
    :
     <div className={classes.noConnection}>
        <WifiOffIcon className={classes.fontSize_50} />
        <Typography
           variant={"h4"}
           align={"center"}
           color='textPrimary'
           key="Learn"
           className={classes.blogchain_heading}
         >
         Connection Error
        </Typography>
        <Typography
          variant='body1'
          align='center'
          color='textPrimary'
          className={classes.fontSize_18}
        >
        Please check your network connectivity and try again
        </Typography>
     </div>
     }
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Main;