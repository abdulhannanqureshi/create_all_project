/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import BlogArticle from 'views/BlogArticle';
import { ApiHelper } from "helper";
import { ApiRoutes } from "config";

export async function getStaticPaths () {
    // For Get Blog LIst
    const response = await new ApiHelper().FetchFromServer(
        ApiRoutes.BLOGLIST.service,
        ApiRoutes.BLOGLIST.url,
        ApiRoutes.BLOGLIST.method,
        ApiRoutes.BLOGLIST.authenticate,
        undefined,
        undefined
      );
      let blogData = [];
      if (response && !response.isError) {
        blogData = response.data.data;
      }

    const paths = blogData.map((e) => {
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
  // For Get Blog Details Data
  const response = await new ApiHelper().FetchFromServer(
    ApiRoutes.BLOGDETAIL.service,
    ApiRoutes.BLOGDETAIL.url.replace(":id",id),
    ApiRoutes.BLOGDETAIL.method,
    ApiRoutes.BLOGDETAIL.authenticate,
    undefined,
    undefined
  );
  let blogDetails = [];
  if (response && !response.isError) {
    blogDetails = response.data.data;
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
        blogDetails,
        cmsData,
    },
    revalidate: 1,
  }
}

export default BlogArticle;
