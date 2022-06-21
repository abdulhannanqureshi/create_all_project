import React from 'react';
import { useRouter } from 'next/router'
import  makeStyles from '@material-ui/core/styles/makeStyles';
import { Form } from './components';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`,
  },
  section: {
    paddingTop: "30px",
    paddingBottom: "70px",
  },
}));

const SignupSimple = ({cmsData, universityData, corporateData}) => {
  const classes = useStyles();
  const router = useRouter();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      router.push('/dashboard')
    }
  })

  return (
    <div>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title="Sign Up"
            subtitle=""
            titleProps={{
              variant: 'h3',
            }}
          />
          <Form cmsData={cmsData} universityData={universityData} corporateData={corporateData} />
        </div>
      </Section>
    </div>
  );
};

export default SignupSimple;
