 import PressRelease from '../src/views/PressReleases';
 import {ApiHelper} from 'helper'
 import { ApiRoutes } from 'config';

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
   // For Get Course LIst
   const response = await new ApiHelper().FetchFromServer(
    ApiRoutes.PRESS_RELEASE.service,
    ApiRoutes.PRESS_RELEASE.url,
    ApiRoutes.PRESS_RELEASE.method,
    ApiRoutes.PRESS_RELEASE.authenticate,
    undefined,
    undefined,
    undefined
   );
   let pressData = [];
   if (response && !response.isError) {
      pressData = response.data.data;
   }

   return {
     props: {
      pressData,
      cmsData
     },
     revalidate: 10,
   }
 }
 export default PressRelease;
