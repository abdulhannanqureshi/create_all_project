/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import RefundPolicyPage from "views/RefundPolicy";
import { ApiHelper } from "helper";
import { ApiRoutes } from "config";

 export async function getStaticProps() {
  // For Get CMS Data
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

  return {
    props: {
      cmsData
    },
    revalidate: 10,
  }
}

export default RefundPolicyPage;
