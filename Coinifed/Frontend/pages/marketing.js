/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import Marketing from 'views/Marketing';
import { ApiHelper } from 'helper'
import { ApiRoutes } from 'config';

export async function getStaticProps() {
    // For Get COURSE Data
    const responseCourse = await new ApiHelper().FetchFromServer(
        ApiRoutes.COURSELIST.service,
        `${ApiRoutes.COURSELIST.url}?limit=${4}&isActive=${"true"}`,
        ApiRoutes.COURSELIST.method,
        ApiRoutes.COURSELIST.authenticate,
        undefined,
        undefined,
        undefined
    );
    let courseData = [];
    if (responseCourse && !responseCourse.isError) {
        courseData = responseCourse.data.data;
    }


    // For Get marketing data
    const responseMarketing = await new ApiHelper().FetchFromServer(
        ApiRoutes.FRONT_PAGE_DATA.service,
        ApiRoutes.FRONT_PAGE_DATA.url,
        ApiRoutes.FRONT_PAGE_DATA.method,
        ApiRoutes.FRONT_PAGE_DATA.authenticate,
        undefined,
        undefined,
        undefined
    );
    let marketData = [];
    if (responseMarketing && !responseMarketing.isError) {
        marketData = responseMarketing.data.data;
    }

    return {
        props: {
            courseData,
            marketData
        },
        revalidate: 5,
    }
}
export default Marketing;
