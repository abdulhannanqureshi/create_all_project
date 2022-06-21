/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
 import Course from 'views/Course';
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
    ApiRoutes.COURSELIST.service,
    ApiRoutes.COURSELIST.url,
    ApiRoutes.COURSELIST.method,
    ApiRoutes.COURSELIST.authenticate,
    undefined,
    undefined,
    undefined
  );
  let courseData = [];
  if (response && !response.isError) {
    const data = response.data.data;
    courseData = data.filter((course) => course.isActive);
  }

  return {
    props: {
      cmsData,
      courseData,
    },
    revalidate: 10,
  }
}

 export default Course;
