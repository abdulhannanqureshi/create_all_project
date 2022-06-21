import makeStyles from '@material-ui/core/styles/makeStyles';
import { Section } from 'components/organisms';
import React from 'react';
import {
  Hero, Story,
  Team
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionPartners: {
    boxShadow: '0 5px 20px 0 rgba(90, 202, 157, 0.05)',
    '& .section-alternate__content': {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
}));

const About = ({cmsData, teamList}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <Section>
        <Story cmsData={cmsData} />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Team cmsData={cmsData} teamList={teamList} />
      </Section>
    </div>
  );
};

export default About;
