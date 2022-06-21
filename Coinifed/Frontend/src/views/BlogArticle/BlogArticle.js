import React,{useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import {ApiHelper} from 'helper'
import { ApiRoutes } from 'config';
import Toast from 'components/toaster';
import { makeStyles } from '@material-ui/core/styles';
import  CircularProgress from '@material-ui/core/CircularProgress';
import  Grid  from '@material-ui/core/Grid';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Content,
  FooterNewsletter,
  Hero,
  SidebarArticles,
  SidebarNewsletter,
  SimilarStories,
} from './components';

import { content, sidebarArticles, similarStories } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  loader: {
    display: 'flex',
    minHeight: '700px',
    justifyContent : 'center',
    alignItems: 'center'
  },
  sidebarNewsletter: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  footerNewsletterSection: {
    background: theme.palette.primary.dark,
  },
  sociallink_nav:{
    position:"fixed",
    right:"0",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background: "#fff",
    zIndex: "10",
    flexFlow: "column",
    width: "50px",
    listStyle: "none",
    padding: "5px 0",
    boxShadow: "0 0 3px #180267b8"
  },
  sociallink_li:{
    display: "block",
    fontSize: "24px",
    color: "#000",
    padding: "10px 0",
    "& a":{
      color:"#000"
    }
  },
  paddingModified:
  {
    
    [theme.breakpoints.down('600')]: {
      paddingLeft:"28px !important"
    }
  }
}));

const BlogArticle = ({blogDetails, cmsData}) => {
  const classes = useStyles();
  const router = useRouter()
  const { id } = router.query
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (id) {
      setCurrentUrl(window.location.href)
    }
  },[router.query]);

  return (
    <div className={classes.root}>
      {blogDetails ? <>
        <ul className={classes.sociallink_nav}>
           <li className={classes.sociallink_li}><a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}><i className={"fa fa-facebook"}></i></a></li>
          <li className={classes.sociallink_li}><a target="_blank" href={`https://twitter.com/share?text=message_here&url=${currentUrl}`}><i className={"fa fa-twitter"}></i></a></li>
          <li className={classes.sociallink_li}><a target="_blank" href={`http://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`}><i className={"fa fa-linkedin"}></i></a></li>
      </ul>
      <Hero
        cover={blogDetails[0].featureImage || ''}
        title={blogDetails[0].title}
        subtitle={blogDetails[0].subtitle}
        date={blogDetails[0].createdAt}
      />
      <Section>
        <Grid container spacing={4} >
          <Grid item xs={12} md={8} className={classes.paddingModified}>
            <Content
              data={blogDetails[0] } socialLinkes={currentUrl}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarNewsletter cmsData={cmsData} className={classes.sidebarNewsletter} />
          </Grid>
        </Grid>
      </Section>
      </>
      :
      <div className={classes.loader}>
        <CircularProgress />
      </div>
      }
    </div>
  );
};

export default BlogArticle;