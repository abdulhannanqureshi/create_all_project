import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Image } from 'components/atoms';
import { Section } from 'components/organisms';
import React from 'react';
import bannerBottom from "../../../public/assets/banner-shape.png";
import {
  Hero,
  LatestStories,
  SidebarNewsletter
} from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    minHeight: "500px",
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

const PressRelease = ({pressData, cmsData}) => {
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
            <LatestStories data={pressData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarNewsletter cmsData={cmsData} className={classes.sidebarNewsletter} />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
};

export default PressRelease;
