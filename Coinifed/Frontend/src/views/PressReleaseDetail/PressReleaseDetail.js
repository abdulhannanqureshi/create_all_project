import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Section } from 'components/organisms';
import React from 'react';
import {
  Content, Hero, SidebarNewsletter
} from './components';


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
  title_heading: {
    fontWeight: "bold",
    paddingTop: "20px",
    textTransform: "uppercase"
  },
  card_section: {
    paddingTop: "50px",
    paddingBottom: "50px"
  },
  press_img: {
    width: "100%",
    height: "auto"
  },
  description_text: {
    textAlign: "justify",
    fontSize: "16px",
    marginTop: "12px",
    paddingBottom: "30px"
  },
  marginTop: {
    marginTop: "12px"
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  date_text: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#1a237e"
  },
  box_shadow:
  {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
  },
  similarReleases:{
    fontSize:"28px",
    textAlign:"center"
  },
}));

const PressReleaseDetailing = ({pressReleaseDetails, cmsData}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      { pressReleaseDetails ? <>
        <Hero
          cover={pressReleaseDetails[0].featureImage}
          title={pressReleaseDetails[0].title}
          subtitle={pressReleaseDetails[0].subtitle}
          date={pressReleaseDetails[0].createdAt}
        />
        <Section>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Content
              data={pressReleaseDetails[0]}
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

export default PressReleaseDetailing;
