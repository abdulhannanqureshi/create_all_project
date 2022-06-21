/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
 import AddCard from 'views/AddCard';

 export async function getServerSideProps({req}) {
    const authToken = req.cookies.token || null;

    return {
      props: {
        authToken,
      }
    }
  }
 export default AddCard;
