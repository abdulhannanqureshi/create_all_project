/**
 * Caution: Consider this file when using NextJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or react-scripts version
 */
import PropTypes from 'prop-types';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import 'assets/css/index.css';
import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <WithLayout
       component={Component}
       layout={Main}
       {...pageProps}
     />
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
