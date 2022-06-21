import React from 'react';
import { SectionHeader } from 'components/molecules';
import { SectionAlternate } from 'components/organisms';
import { Account, Landings, Pages, Hero } from './components';
import { landings, pages, account } from './data';
import makeStyles from '@material-ui/core/styles/makeStyles';
import  useTheme  from '@material-ui/core/styles/useTheme';
import  Button  from '@material-ui/core/Button';
import  Divider  from '@material-ui/core/Divider';
import  useMediaQuery  from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
}));

const Home = ({ themeMode }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <div>
      <Hero />
      <SectionAlternate>
        <SectionHeader
          title="theFront in action"
          subtitle="All examples you find below are included in the download package."
          align={isMd ? 'center': 'left'}
          titleVariant="h4"
          titleProps={{ className: classes.fontWeight900 }}
          ctaGroup={[
            <Button
              size="large"
              component="a"
              target="blank"
              href="https://material-ui.com/store/items/the-front-landing-page/"
              variant="contained"
              color="primary"
            >
              Buy now
            </Button>
          ]}
        />
        <Landings data={landings} themeMode={themeMode} />
      </SectionAlternate>
      <Divider />
      <SectionAlternate>
        <Pages data={pages} themeMode={themeMode} />
      </SectionAlternate>
      <Divider />
      <SectionAlternate>
        <Account data={account} themeMode={themeMode} />
      </SectionAlternate>
    </div>
  );
}

export default Home;
