/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
 import PressReleaseDetail from 'views/PressReleaseDetail';
 import { ApiHelper } from "helper";
import { ApiRoutes } from "config";

 export async function getStaticPaths () {
    // For Get Blog LIst
    const response = await new ApiHelper().FetchFromServer(
        ApiRoutes.PRESS_RELEASE.service,
        ApiRoutes.PRESS_RELEASE.url,
        ApiRoutes.PRESS_RELEASE.method,
        ApiRoutes.PRESS_RELEASE.authenticate,
        undefined,
        undefined
      );
    let pressData = [];
    if (response && !response.isError) {
        pressData = response.data.data;
    }

    const paths = pressData.map((e) => {
      return {
        params: {
          id:  e._id,
        }
      }
    })

    return {
      paths,
      fallback: false
    }
  }

 export async function getStaticProps(context) {
    const id = await context.params.id
  // For Get Press Release Details Data
  const response = await new ApiHelper().FetchFromServer(
    ApiRoutes.PRESS_DETAILS.service,
    ApiRoutes.PRESS_DETAILS.url.replace(":id", id),
    ApiRoutes.PRESS_DETAILS.method,
    ApiRoutes.PRESS_DETAILS.authenticate,
    undefined,
    undefined
  );
  let pressReleaseDetails = [];
  if (response && !response.isError) {
    pressReleaseDetails = response.data.data;
  }

  // For Get CMS Data
  const responseCMS = await new ApiHelper().FetchFromServer(
    ApiRoutes.FRONT_PAGE_DATA.service,
    ApiRoutes.FRONT_PAGE_DATA.url,
    ApiRoutes.FRONT_PAGE_DATA.method,
    ApiRoutes.FRONT_PAGE_DATA.authenticate,
    undefined,
    undefined
  );
  let cmsData = [];
  if (responseCMS && !responseCMS.isError) {
    cmsData = responseCMS.data.data;
  }

  return {
    props: {
        pressReleaseDetails,
        cmsData,
    },
    revalidate: 1,
  }
}

 export default PressReleaseDetail;
