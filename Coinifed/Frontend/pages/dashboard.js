/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import Dashboard from 'views/Dashboard';
import { ApiHelper } from "helper";
import { ApiRoutes } from "config";
import { useRouter } from 'next/router';


const Component = (props) => {
  const router = useRouter();
  return (
    <NoSsr>
      <Dashboard {...props} />
    </NoSsr>
  );
};

export async function getServerSideProps({ req }) {
  const authToken = req.cookies.token || null;
  // For Get Payment History
  const resPayHistory = await new ApiHelper().FetchFromServer(
    ApiRoutes.PAYMENTHISTORY.service,
    ApiRoutes.PAYMENTHISTORY.url,
    ApiRoutes.PAYMENTHISTORY.method,
    ApiRoutes.PAYMENTHISTORY.authenticate,
    authToken,
    undefined,
    undefined,
  );
  let paymentHistory = [];
  let responseCode = "";
  responseCode = resPayHistory.code;
  if (resPayHistory && !resPayHistory.isError) {
    paymentHistory = resPayHistory.data.data;
  }
  // For Get Profile Data
  const resUserDetails = await new ApiHelper().FetchFromServer(
    ApiRoutes.GETUSERDETAILS.service,
    ApiRoutes.GETUSERDETAILS.url,
    ApiRoutes.GETUSERDETAILS.method,
    ApiRoutes.GETUSERDETAILS.authenticate,
    authToken,
    undefined,
    undefined,
  );
  let userDetails = [];
  if (resUserDetails && !resUserDetails.isError) {
    userDetails = resUserDetails.data.data;
  }
  // For Get Purchased Course
  const resPurchaseCourse = await new ApiHelper().FetchFromServer(
    ApiRoutes.PURCHASEDCOURSE.service,
    ApiRoutes.PURCHASEDCOURSE.url,
    ApiRoutes.PURCHASEDCOURSE.method,
    ApiRoutes.PURCHASEDCOURSE.authenticate,
    authToken,
    undefined,
    undefined,
  );
  let purchaseCourse = [];
  let courseDuration = []
  if (resPurchaseCourse && !resPurchaseCourse.isError) {
    purchaseCourse = resPurchaseCourse.data.data;
    courseDuration = resPurchaseCourse.data.courseDuration;
  }

  return {
    props: {
      responseCode,
      authToken,
      paymentHistory,
      userDetails,
      purchaseCourseData: {
        purchaseCourse,
        courseDuration,
      }
    }
  }
}

export default Component;
