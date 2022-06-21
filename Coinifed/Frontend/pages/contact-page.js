/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import ContactPage from 'views/ContactPage';
import { ApiHelper } from "helper";
import { ApiRoutes } from "config";

export async function getStaticProps() {
    // For Get CMS Data
    const responseCMS = await new ApiHelper().FetchFromServer(
     ApiRoutes.FRONT_PAGE_DATA.service,
     ApiRoutes.FRONT_PAGE_DATA.url,
     ApiRoutes.FRONT_PAGE_DATA.method,
     ApiRoutes.FRONT_PAGE_DATA.authenticate,
     undefined,
     undefined,
     undefined 
   );
   let cmsData = [];
   if (responseCMS && !responseCMS.isError) {
     cmsData = responseCMS.data.data;
   }

     // For Get marketing data
     const responseSocialLinkes = await new ApiHelper().FetchFromServer(
      ApiRoutes.GETSOCIALLINKES.service,
      ApiRoutes.GETSOCIALLINKES.url,
      ApiRoutes.GETSOCIALLINKES.method,
      ApiRoutes.GETSOCIALLINKES.authenticate,
      undefined,
      undefined,
      undefined
  );
  let socialLinkesData = [];
  if (responseSocialLinkes && !responseSocialLinkes.isError) {
    socialLinkesData = responseSocialLinkes.data.data;
  }

   return {
     props: {
       cmsData,
       socialLinkesData
     },
     revalidate: 10,
   }
 }

export default ContactPage;
