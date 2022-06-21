import React from 'react';
import { useRouter } from 'next/router';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import  Button  from '@material-ui/core/Button';
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

const ForgotPasswordSimple = () => {
  const classes = useStyles();
  const router = useRouter();
  const [status, setStatus] = React.useState(false)
  return (
    <>
    <div>
      {!status ? 
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title="Forgot Password"
            subtitle="Enter your email to reset your password."
            titleProps={{
              variant: 'h3',
            }}
          />
          <Form setStatus={setStatus}/>
        </div>
      </Section>
      :
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title="Success!!"
            subtitle="Password reset request was sent successfully. Please check your email to reset your password."
            titleProps={{
              variant: 'h3',
            }}
          />
          <Button 
          onClick={()=>router.push('/signin')}
          size="large"
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
          >
            Back to Login
          </Button>
        </div>
      </Section>
  }
    </div>
    </>
  );
};

export default ForgotPasswordSimple;
