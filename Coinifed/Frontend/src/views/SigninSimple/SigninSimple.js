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
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const SigninSimple = () => {
  const classes = useStyles();
  const router = useRouter();

  // React.useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if(token){
  //     router.push('/dashboard')
  //   }
  // })

  return (
    <div>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title="Sign In"
            subtitle={""
              // <span>
              //   Don’t have an account?{' '}
              //   <LearnMoreLink
              //     title="Sign up."
              //     href="/signup"
              //     typographyProps={{ variant: 'h6' }}
              //   />
              // </span>
            }
            titleProps={{
              variant: 'h3',
            }}
          />
          <Form />
        </div>
      </Section>
    </div>
  );
};

export default SigninSimple;
