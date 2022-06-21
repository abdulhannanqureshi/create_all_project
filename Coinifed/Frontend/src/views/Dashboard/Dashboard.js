import React, { useState } from 'react';
import { useRouter } from 'next/router'
import clsx from 'clsx';
import { parse } from 'query-string';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { SectionAlternate, CardBase } from 'components/organisms';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Hero, General, Security, Notifications, Billing } from './components';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useStore } from '../../store';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  mainBlock: {
    width: "100%",
  },
  section: {
    minHeight: "700px",
    "& .section-alternate__content": {
      paddingTop: 0,
      marginTop: theme.spacing(-5),
      position: "relative",
      zIndex: 1,
    },
    "& .card-base__content": {
      padding: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(3),
      },
    },
  },
  menu: {
    height: "auto",
    "& .card-base__content": {
      paddingLeft: 0,
      paddingRight: 0,
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2),
      },
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(2, 2, 2, 0),
      },
    },
  },
  list: {
    display: "inline-flex",
    overflow: "auto",
    flexWrap: "nowrap",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
      marginRight: theme.spacing(-3),
      marginLeft: theme.spacing(-3),
    },
  },
  listWrap: {
    marginLeft: 0,
    marginRight: 0,
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  listItem: {
    marginRight: theme.spacing(2),
    flex: 0,
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      borderLeft: "2px solid transparent",
    },
  },
  listItemWrap: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(3),
    },
    [theme.breakpoints.down(767)]: {
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(0),
      paddingLeft: theme.spacing(2),
    },
  },
  listItemActive: {
    [theme.breakpoints.up("md")]: {
      borderLeft: `2px solid ${theme.palette.primary.dark}`,
    },
    [theme.breakpoints.down("xs")]: {
      borderLeft: `2px solid ${theme.palette.primary.dark}`,
    },
    "& .menu__item": {
      color: theme.palette.text.primary,
    },
  },
  tabWrap: {
    minHeight: "600px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "auto",
    },
  },
}));

const subPages = [
  {
    id: "general",
    href: "/dashboard/?pid=general",
    title: "Profile Settings",
  },
  {
    id: "security",
    href: "/dashboard/?pid=security",
    title: "Password",
  },
  {
    id: "transaction",
    href: "/dashboard/?pid=transaction",
    title: "My Transactions",
  },
  {
    id: "billing",
    href: "/dashboard/?pid=billing",
    title: "My Courses",
  },
];

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box width={"100%"} component='div' hidden={value !== index} {...other}>
      {value === index && children}
    </Box>
  );
};

const Dashboard = ({ paymentHistory, userDetails, purchaseCourseData, authToken,responseCode }) => {
  const classes = useStyles();
  const { tokenStatus , tokenHandle, logoutTokenHandle, cartLength, getCartLength } = useStore();

  const router = useRouter();
  let pageId = parse(window.location.search).pid || "general";

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/signin");
    }
    if (responseCode === 402) {
      localStorage.removeItem('token');
      localStorage.removeItem('SelectedCourseModules');
      Cookies.remove('token');
      router.push('/signin');
      logoutTokenHandle()
    }
  });
  const [loaderStates, setLoaderStates] = useState(
    {
      general: false,
      security: false,
      transaction: false,
      billing: false
    }
  )
  const { general, security, transaction, billing } = loaderStates
  const handleLoader = (id) => {
    setLoaderStates({
      ...loaderStates,
      general:matchExact("general",id) ? false : true,
      security:matchExact("security",id) ? false : true,
      transaction:matchExact("transaction",id) ? false : true,
      billing:matchExact("billing",id) ? false : true
    })

  }
  const matchExact = (r, str) => {
    var match = str.match(r);
    return match && str === match[0];
 }
 ///deactive loader 
 const handleLoaderDeactive = (name) =>
 {
  setLoaderStates({
    ...loaderStates,
    [name]:false
  })
 }
  return (
    <div className={classes.root}>
      <Hero />
      <SectionAlternate className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <CardBase withShadow align='left' className={classes.menu}>
              <List
                disablePadding
                className={clsx(classes.list, classes.listWrap)}
              >
                {subPages.map((item, index) => (
                  <ListItem
                    key={index}
                    className={clsx(
                      classes.listItem,
                      classes.listItemWrap,
                      pageId === item.id ? classes.listItemActive : {}
                    )}
                    disableGutters
                    onClick={() => handleLoader(item.id)}
                  >
                    <Link href={item.href}>
                      <a className={classes.authLink}>
                        <Typography
                          variant='subtitle1'
                          noWrap
                          color='textSecondary'
                          className='menu__item'
                        >
                          {item.title}
                        </Typography></a>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </CardBase>
          </Grid>
          <Grid item xs={12} md={9}> 
            <CardBase withShadow align='left' className={classes.tabWrap}>
              <TabPanel value={pageId} index={"general"}>
                <General userDetails={userDetails} authToken={authToken} insideLoader={general} handleLoaderDeactive={handleLoaderDeactive}/>
              </TabPanel>
              <TabPanel value={pageId} index={"security"}>
                <Security authToken={authToken} insideLoader={security} handleLoaderDeactive={handleLoaderDeactive}/>
              </TabPanel>
              <TabPanel value={pageId} index={"transaction"}>
                <Notifications paymentHistory={paymentHistory} authToken={authToken} insideLoader={transaction} handleLoaderDeactive={handleLoaderDeactive}/>
              </TabPanel>
              <TabPanel value={pageId} index={"billing"} >
                <Billing purchaseCourseData={purchaseCourseData} authToken={authToken} insideLoader={billing} handleLoaderDeactive={handleLoaderDeactive}/>
              </TabPanel>
            </CardBase>
          </Grid>
        </Grid>
      </SectionAlternate>
    </div>
  );
};

export default Dashboard;
