import Divider from '@material-ui/core/Divider';
import { Section, SectionAlternate } from 'components/organisms';
import React from 'react';
import { Contact, Form, Hero, Newsletter } from './components';

const ContactPage = ({cmsData,socialLinkesData}) => (
  <div>
    <Hero />
    <Contact socialLinkesData={socialLinkesData}/>
    <SectionAlternate>
      <Form />
    </SectionAlternate>
    <Section>
      <Newsletter cmsData={cmsData} />
    </Section>
    <Divider />
  </div>
);

export default ContactPage;
