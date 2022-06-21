/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
 import CourseDetail from 'views/CourseDetail';
 import { ApiHelper } from "helper";
 import { ApiRoutes } from "config";
 export async function getServerSideProps({req}) {
    const authToken = req.cookies.token || null;
    const responseCMS = await new ApiHelper().FetchFromServer(
      ApiRoutes.CERTIFICATE_DATA.service,
      ApiRoutes.CERTIFICATE_DATA.url,
      ApiRoutes.CERTIFICATE_DATA.method,
      ApiRoutes.CERTIFICATE_DATA.authenticate,
      undefined,
      undefined,
      undefined
   );
   let cmsData = [];
   if (responseCMS && !responseCMS.isError) {
     cmsData = responseCMS.data.data;
   }
  //  For get University Data
  const responseUniversity = await new ApiHelper().FetchFromServer(
      ApiRoutes.GETUNIVERSITY.service,
      ApiRoutes.GETUNIVERSITY.url,
      ApiRoutes.GETUNIVERSITY.method,
      ApiRoutes.GETUNIVERSITY.authenticate,
      undefined,
      undefined,
      undefined
  );
  let universityData = [];
  if (responseUniversity && !responseUniversity.isError) {
      universityData = responseUniversity.data.data;
  }
  // For get Corporate data
  const responseCorporate = await new ApiHelper().FetchFromServer(
      ApiRoutes.GETCORPORATE.service,
      ApiRoutes.GETCORPORATE.url,
      ApiRoutes.GETCORPORATE.method,
      ApiRoutes.GETCORPORATE.authenticate,
      undefined,
      undefined,
      undefined
  );
  let corporateData = [];
  if (responseCorporate && !responseCorporate.isError) {
      corporateData = responseCorporate.data.data;
  }
    return {
      props: {
        authToken,
        cmsData,
        universityData,
        corporateData
      }
    }
  }

 export default CourseDetail;
