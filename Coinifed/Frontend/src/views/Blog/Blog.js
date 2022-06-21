import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Image } from 'components/atoms';
import { Section } from 'components/organisms';
import React from 'react';
import bannerBottom from "../../../public/assets/banner-shape.png";
import {
  Hero,
  LatestStories, SidebarNewsletter
} from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    minHeight: "500px",
  },
  loader: {
    display: "flex",
    minHeight: "500px",
    justifyContent: "center",
    alignItems: "center",
  },
  sidebarNewsletter: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
  footerNewsletterSection: {
    background: theme.palette.primary.dark,
  },
  bannerBottom: {
    "& > span": {
      display: "block !important",
    },
  },
}));

const Blog = ({blogData, cmsData}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={classes.root}>
      <Hero />
      <div className={classes.bannerBottom}>
        <Image
          src={bannerBottom}
          srcSet={bannerBottom}
          alt='banner-bottom'
          className={classes.image}
        />
      </div>
      <Section>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} md={8}>
           <LatestStories data={blogData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarNewsletter cmsData={cmsData} className={classes.sidebarNewsletter} />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
};

export default Blog;
