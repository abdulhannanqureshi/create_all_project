module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/marketing.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/marketing.js":
/*!****************************!*\
  !*** ./pages/marketing.js ***!
  \****************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var views_Marketing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! views/Marketing */ "./src/views/Marketing/index.js");
/* harmony import */ var helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helper */ "./src/helper/index.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config */ "./src/config/index.js");
/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */



async function getStaticProps() {
  // For Get COURSE Data
  const responseCourse = await new helper__WEBPACK_IMPORTED_MODULE_1__["ApiHelper"]().FetchFromServer(config__WEBPACK_IMPORTED_MODULE_2__["ApiRoutes"].COURSELIST.service, `${config__WEBPACK_IMPORTED_MODULE_2__["ApiRoutes"].COURSELIST.url}?limit=${4}&isActive=${"true"}`, config__WEBPACK_IMPORTED_MODULE_2__["ApiRoutes"].COURSELIST.method, config__WEBPACK_IMPORTED_MODULE_2__["ApiRoutes"].COURSELIST.authenticate, undefined, undefined, undefined);
  let courseData = [];

  if (responseCourse && !responseCourse.isError) {
    courseData = responseCourse.data.data;
  } // For Get marketing data


  const responseMarketing = await new helper__WEBPACK_IMPORTED_MODULE_1__["ApiHelper"]().FetchFromServer(config__WEBPACK_IMPORTED_MODULE_2__["ApiRoutes"].FRONT_PAGE_DATA.service, config__WEBPACK_IMPORTED_MODULE_2__["ApiRoutes"].FRONT_PAGE_DATA.url, config__WEBPACK_IMPORTED_MODULE_2__["ApiRoutes"].FRONT_PAGE_DATA.method, config__WEBPACK_IMPORTED_MODULE_2__["ApiRoutes"].FRONT_PAGE_DATA.authenticate, undefined, undefined, undefined);
  let marketData = [];

  if (responseMarketing && !responseMarketing.isError) {
    marketData = responseMarketing.data.data;
  }

  return {
    props: {
      courseData,
      marketData
    },
    revalidate: 5
  };
}
/* harmony default export */ __webpack_exports__["default"] = (views_Marketing__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/assets/images/Certificate-page/certificate.jpg":
/*!************************************************************!*\
  !*** ./src/assets/images/Certificate-page/certificate.jpg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/certificate-b802217f1b3513efffcd3c906fab44ed.jpg";

/***/ }),

/***/ "./src/assets/images/leaflet-assets/marker-icon-2x.png":
/*!*************************************************************!*\
  !*** ./src/assets/images/leaflet-assets/marker-icon-2x.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcY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"

/***/ }),

/***/ "./src/assets/images/leaflet-assets/marker-icon.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/leaflet-assets/marker-icon.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/leaflet-assets/marker-shadow.png":
/*!************************************************************!*\
  !*** ./src/assets/images/leaflet-assets/marker-shadow.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/components/atoms/DarkModeToggler/DarkModeToggler.js":
/*!*****************************************************************!*\
  !*** ./src/components/atoms/DarkModeToggler/DarkModeToggler.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\atoms\\DarkModeToggler\\DarkModeToggler.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    position: 'relative'
  },
  border: {
    width: theme.spacing(5),
    height: theme.spacing(2),
    borderRadius: theme.spacing(3),
    border: '3px solid',
    borderColor: theme.palette.divider,
    backgroundColor: 'transparent',
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(6),
      height: theme.spacing(3)
    }
  },
  borderDark: {
    borderColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["colors"].indigo[700]
  },
  modeToggler: {
    position: 'absolute',
    top: `-${theme.spacing(1 / 2)}px`,
    left: `-${theme.spacing(1 / 2)}px`,
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: '50%',
    backgroundColor: theme.palette.text.primary,
    transition: `transform .3s cubic-bezier(.4,.03,0,1)`,
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(4),
      height: theme.spacing(4)
    }
  },
  modeTogglerDark: {
    transform: `translateX(${theme.spacing(3)}px)`,
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["colors"].indigo[900]
  },
  modeTogglerIcon: {
    fill: theme.palette.secondary.main,
    marginTop: theme.spacing(1 / 2),
    marginLeft: theme.spacing(1 / 2),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1)
    }
  }
}));
/**
 * Component to display the dark mode toggler
 *
 * @param {Object} props
 */

const DarkModeToggler = (_ref) => {
  let {
    themeMode = 'light',
    onClick,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["themeMode", "onClick", "className"]);

  const classes = useStyles();
  return __jsx("span", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, className)
  }, rest, {
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.border, themeMode === 'dark' ? classes.borderDark : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.modeToggler, themeMode === 'dark' ? classes.modeTogglerDark : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("svg", {
    className: classes.modeTogglerIcon,
    "aria-hidden": "true",
    width: "14",
    height: "13",
    viewBox: "0 0 14 13",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.52208 7.71754C7.5782 7.71754 10.0557 5.24006 10.0557 2.18394C10.0557 1.93498 10.0392 1.68986 10.0074 1.44961C9.95801 1.07727 10.3495 0.771159 10.6474 0.99992C12.1153 2.12716 13.0615 3.89999 13.0615 5.89383C13.0615 9.29958 10.3006 12.0605 6.89485 12.0605C3.95334 12.0605 1.49286 10.001 0.876728 7.24527C0.794841 6.87902 1.23668 6.65289 1.55321 6.85451C2.41106 7.40095 3.4296 7.71754 4.52208 7.71754Z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }))));
};

DarkModeToggler.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The theme mode
   */
  themeMode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Theme toggler function
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DarkModeToggler);

/***/ }),

/***/ "./src/components/atoms/DarkModeToggler/index.js":
/*!*******************************************************!*\
  !*** ./src/components/atoms/DarkModeToggler/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DarkModeToggler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DarkModeToggler */ "./src/components/atoms/DarkModeToggler/DarkModeToggler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DarkModeToggler__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/atoms/Icon/Icon.js":
/*!*******************************************!*\
  !*** ./src/components/atoms/Icon/Icon.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/NoSsr */ "@material-ui/core/NoSsr");
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\atoms\\Icon\\Icon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
  extraSmall: {
    fontSize: 10
  },
  small: {
    fontSize: 20
  },
  medium: {
    fontSize: 30
  },
  large: {
    fontSize: 40
  }
}));
/**
 * Component to display the icon
 *
 * @param {Object} props
 */

const Icon = props => {
  const {
    fontIconClass,
    size,
    fontIconColor,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["fontIconClass", "size", "fontIconColor", "className"]);

  const classes = useStyles();
  return __jsx(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("i", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('icon', fontIconClass, classes[size], className),
    style: {
      color: fontIconColor
    }
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  })));
};

Icon.defaultProps = {
  size: 'small'
};
Icon.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The classes of the font icon
   */
  fontIconClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Source set for the responsive images
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['extraSmall', 'small', 'medium', 'large']),

  /**
   * Color of the icon
   */
  fontIconColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./src/components/atoms/Icon/index.js":
/*!********************************************!*\
  !*** ./src/components/atoms/Icon/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./src/components/atoms/Icon/Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/atoms/IconText/IconText.js":
/*!***************************************************!*\
  !*** ./src/components/atoms/IconText/IconText.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\atoms\\IconText\\IconText.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default()(theme => ({
  root: {
    display: 'inline-flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    width: '100%'
  },
  title: {
    marginLeft: theme.spacing(1)
  }
}));
/**
 * Component to display the icon text
 *
 * @param {Object} props
 */

const IconText = props => {
  const {
    title,
    color,
    fontIconClass,
    className,
    iconProps,
    typographyProps
  } = props,
        rest = _objectWithoutProperties(props, ["title", "color", "fontIconClass", "className", "iconProps", "typographyProps"]);

  const classes = useStyles();
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('icon-text', classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_5__["Icon"], _extends({
    className: "icon-text__icon",
    size: "small",
    fontIconClass: fontIconClass,
    fontIconColor: color
  }, iconProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    noWrap: true,
    variant: "h3",
    color: "textPrimary",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('icon-text__typography', classes.title)
  }, typographyProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), title));
};

IconText.defaultProps = {
  iconProps: {},
  typographyProps: {}
};
IconText.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The classes of the font icon
   */
  fontIconClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Source set for the responsive images
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Title of the icon-text
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Additional properties to pass to the Icon component
   */
  iconProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the Typography component
   */
  typographyProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (IconText);

/***/ }),

/***/ "./src/components/atoms/IconText/index.js":
/*!************************************************!*\
  !*** ./src/components/atoms/IconText/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconText */ "./src/components/atoms/IconText/IconText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _IconText__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/atoms/Image/Image.js":
/*!*********************************************!*\
  !*** ./src/components/atoms/Image/Image.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\atoms\\Image\\Image.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default()(() => ({
  root: {
    width: '100%',
    height: '100%'
  },
  dBlock: {
    display: 'block'
  }
}));
/**
 * Component to display the images
 *
 * @param {Object} props
 */

const Image = props => {
  const {
    src,
    srcSet,
    alt,
    lazy,
    lazyProps,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["src", "srcSet", "alt", "lazy", "lazyProps", "className"]);

  const classes = useStyles();

  if (lazy) {
    return __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImage"], _extends({
      className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('image', classes.root, classes.dBlock, className),
      alt: alt,
      src: src,
      srcSet: srcSet,
      effect: "opacity"
    }, lazyProps, rest, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }));
  }

  return __jsx("img", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('image', classes.root, className),
    alt: alt,
    src: src,
    srcSet: srcSet
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }));
};

Image.defaultProps = {
  alt: '...',
  lazy: true,
  lazyProps: {
    width: 'auto',
    height: 'auto'
  }
};
Image.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Source of the image
   */
  src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Source set for the responsive images
   */
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Image title
   */
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Lazy loading properties
   */
  lazyProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Should lazy load the image
   */
  lazy: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/atoms/Image/index.js":
/*!*********************************************!*\
  !*** ./src/components/atoms/Image/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ "./src/components/atoms/Image/Image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Image__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/atoms/LearnMoreLink/LearnMoreLink.js":
/*!*************************************************************!*\
  !*** ./src/components/atoms/LearnMoreLink/LearnMoreLink.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowRightAlt */ "@material-ui/icons/ArrowRightAlt");
/* harmony import */ var _material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\atoms\\LearnMoreLink\\LearnMoreLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none'
  },
  title: {
    fontWeight: 'bold'
  },
  icon: {
    padding: 0,
    marginLeft: theme.spacing(1),
    '&:hover': {
      background: 'transparent'
    }
  }
}));
/**
 * Component to display the "Learn More" link
 *
 * @param {Object} props
 */

const LearnMoreLink = props => {
  const {
    color,
    component,
    variant,
    title,
    href,
    className,
    iconProps,
    typographyProps
  } = props,
        rest = _objectWithoutProperties(props, ["color", "component", "variant", "title", "href", "className", "iconProps", "typographyProps"]);

  const classes = useStyles();

  const children = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    component: "span",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('learn-more-link__typography', classes.title),
    variant: variant,
    color: color || 'primary'
  }, typographyProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('learn-more-link__icon-button', classes.icon),
    color: color || 'primary'
  }, iconProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), __jsx(_material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "learn-more-link__arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  })));

  return __jsx("a", _extends({
    href: href,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('learn-more-link', classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }), children);
};

LearnMoreLink.defaultProps = {
  variant: 'subtitle1',
  href: '#',
  typographyProps: {},
  iconProps: {},
  component: 'a'
};
LearnMoreLink.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The component to load as a main DOM
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['Link', 'a']),

  /**
   * Title of the link
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Variant of the link
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['h6', 'subtitle1', 'subtitle2', 'body1', 'body2']),

  /**
   * Href of the link
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Color of the link
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Additional properties to pass to the Icon component
   */
  iconProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the Typography component
   */
  typographyProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (LearnMoreLink);

/***/ }),

/***/ "./src/components/atoms/LearnMoreLink/index.js":
/*!*****************************************************!*\
  !*** ./src/components/atoms/LearnMoreLink/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LearnMoreLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LearnMoreLink */ "./src/components/atoms/LearnMoreLink/LearnMoreLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _LearnMoreLink__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/atoms/ScrollTop/ScrollTop.js":
/*!*****************************************************!*\
  !*** ./src/components/atoms/ScrollTop/ScrollTop.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "@material-ui/core/useScrollTrigger");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowUp */ "@material-ui/icons/KeyboardArrowUp");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Zoom */ "@material-ui/core/Zoom");
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\atoms\\ScrollTop\\ScrollTop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const ScrollTop = () => {
  const classes = useStyles();
  const trigger = _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default()({
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return __jsx(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_5___default.a, {
    in: trigger,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("div", {
    onClick: handleClick,
    role: "presentation",
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: "primary",
    size: "small",
    "aria-label": "scroll back to top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ScrollTop);

/***/ }),

/***/ "./src/components/atoms/ScrollTop/index.js":
/*!*************************************************!*\
  !*** ./src/components/atoms/ScrollTop/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScrollTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollTop */ "./src/components/atoms/ScrollTop/ScrollTop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ScrollTop__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/atoms/index.js":
/*!***************************************!*\
  !*** ./src/components/atoms/index.js ***!
  \***************************************/
/*! exports provided: Image, Icon, LearnMoreLink, IconText, DarkModeToggler, ScrollTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ "./src/components/atoms/Image/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ "./src/components/atoms/Icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _LearnMoreLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LearnMoreLink */ "./src/components/atoms/LearnMoreLink/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LearnMoreLink", function() { return _LearnMoreLink__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _IconText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconText */ "./src/components/atoms/IconText/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconText", function() { return _IconText__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _DarkModeToggler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DarkModeToggler */ "./src/components/atoms/DarkModeToggler/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DarkModeToggler", function() { return _DarkModeToggler__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ScrollTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScrollTop */ "./src/components/atoms/ScrollTop/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollTop", function() { return _ScrollTop__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./src/components/molecules/CountUpNumber/CountUpNumber.js":
/*!*****************************************************************!*\
  !*** ./src/components/molecules/CountUpNumber/CountUpNumber.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\molecules\\CountUpNumber\\CountUpNumber.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







/**
 * Component to display the Count Up Numbers
 *
 * @param {Object} props
 */

const CountUpNumber = props => {
  const {
    start,
    end,
    suffix,
    prefix,
    label,
    textColor,
    labelColor,
    className,
    visibilitySensorProps,
    wrapperProps,
    countWrapperProps,
    countNumberProps,
    labelProps
  } = props,
        rest = _objectWithoutProperties(props, ["start", "end", "suffix", "prefix", "label", "textColor", "labelColor", "className", "visibilitySensorProps", "wrapperProps", "countWrapperProps", "countNumberProps", "labelProps"]);

  const [viewPortEntered, setViewPortEntered] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const setViewPortVisibility = isVisible => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()('countup-number', className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    onChange: isVisible => setViewPortVisibility(isVisible),
    delayedCall: true
  }, visibilitySensorProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx("div", _extends({
    className: "countup-number__wrapper"
  }, wrapperProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], _extends({
    variant: "h4",
    gutterBottom: true,
    align: "center",
    color: textColor || 'textPrimary',
    className: "countup-number__count-wrapper"
  }, countWrapperProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    delay: 1,
    redraw: false,
    end: viewPortEntered ? end : start,
    start: start,
    suffix: suffix || '',
    prefix: prefix || '',
    className: "countup-number__count"
  }, countNumberProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], _extends({
    variant: "subtitle1",
    color: labelColor || 'textSecondary',
    align: "center",
    className: "countup-number__label"
  }, labelProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }), label))));
};

CountUpNumber.defaultProps = {
  start: 0,
  visibilitySensorProps: {},
  wrapperProps: {},
  countWrapperProps: {},
  countNumberProps: {},
  labelProps: {}
};
CountUpNumber.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The Suffix of the count up number
   */
  suffix: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The Prefix of the count up number
   */
  prefix: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The label text of the count up number
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,

  /**
   * Starting number
   */
  start: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /**
   * End number
   */
  end: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,

  /**
   * Text color
   */
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Label color
   */
  labelColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Additional properties to pass to the VisibilitySensor Component
   */
  visibilitySensorProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Additional properties to pass to the wrapper div
   */
  wrapperProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Additional properties to pass to the count wrapper Typography component
   */
  countWrapperProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Additional properties to pass to the CountUp React component
   */
  countNumberProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Additional properties to pass to the label Typography component
   */
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CountUpNumber);

/***/ }),

/***/ "./src/components/molecules/CountUpNumber/index.js":
/*!*********************************************************!*\
  !*** ./src/components/molecules/CountUpNumber/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CountUpNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountUpNumber */ "./src/components/molecules/CountUpNumber/CountUpNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CountUpNumber__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/DescriptionCta/DescriptionCta.js":
/*!*******************************************************************!*\
  !*** ./src/components/molecules/DescriptionCta/DescriptionCta.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\molecules\\DescriptionCta\\DescriptionCta.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * Component to display the description with CTA's
 *
 * @param {Object} props
 */

const DescriptionCta = props => {
  const {
    title,
    subtitle,
    primaryCta,
    secondaryCta,
    align,
    className,
    wrapperProps,
    titleProps,
    subtitleProps,
    buttonGroupProps,
    primaryButtonWrapperProps,
    secondaryButtonWrapperProps
  } = props,
        rest = _objectWithoutProperties(props, ["title", "subtitle", "primaryCta", "secondaryCta", "align", "className", "wrapperProps", "titleProps", "subtitleProps", "buttonGroupProps", "primaryButtonWrapperProps", "secondaryButtonWrapperProps"]);

  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  const isSm = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["useMediaQuery"])(theme.breakpoints.up('sm'), {
    defaultMatches: true
  });
  let justifyGrid = 'center';

  if (align === 'left') {
    justifyGrid = isSm ? 'flex-end' : 'flex-start';
  } else if (align === 'right') {
    justifyGrid = isSm ? 'flex-start' : 'flex-end';
  }

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    container: true,
    spacing: 2,
    justifyContent: "space-between",
    alignItems: "center",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('description-cta', className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    item: true,
    className: "description-cta__wrapper"
  }, wrapperProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "h5",
    align: align,
    gutterBottom: true,
    className: "description-cta__title"
  }, titleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), title), subtitle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "subtitle1",
    align: align,
    color: "textSecondary",
    className: "description-cta__subtitle"
  }, subtitleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), subtitle)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    container: true,
    justifyContent: justifyGrid,
    spacing: 1,
    className: "description-cta__button-group"
  }, buttonGroupProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    item: true,
    className: "description-cta__primary-button-wrapper"
  }, primaryButtonWrapperProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }), primaryCta), secondaryCta && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    item: true,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('description-cta__secondary-button-wrapper')
  }, secondaryButtonWrapperProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), secondaryCta))));
};

DescriptionCta.defaultProps = {
  align: 'center',
  wrapperProps: {},
  titleProps: {},
  subtitleProps: {},
  buttonGroupProps: {},
  primaryButtonWrapperProps: {},
  secondaryButtonWrapperProps: {}
};
DescriptionCta.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Title of the list
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Subtitle of the list
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Primary CTA of the list
   */
  primaryCta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * Secondary CTA of the list
   */
  secondaryCta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Alignment
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right', 'center']),

  /**
   * Additional properties to pass to the wrapper Grid item components
   */
  wrapperProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the title Typography components
   */
  titleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the subtitle Typography components
   */
  subtitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the button group div container
   */
  buttonGroupProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the primary button wrapper div container
   */
  primaryButtonWrapperProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the secondary button wrapper div container
   */
  secondaryButtonWrapperProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DescriptionCta);

/***/ }),

/***/ "./src/components/molecules/DescriptionCta/index.js":
/*!**********************************************************!*\
  !*** ./src/components/molecules/DescriptionCta/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DescriptionCta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DescriptionCta */ "./src/components/molecules/DescriptionCta/DescriptionCta.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DescriptionCta__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/IconAlternate/IconAlternate.js":
/*!*****************************************************************!*\
  !*** ./src/components/molecules/IconAlternate/IconAlternate.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\molecules\\IconAlternate\\IconAlternate.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  extraSmall: {
    width: 20,
    height: 20
  },
  small: {
    width: 50,
    height: 50
  },
  medium: {
    width: 70,
    height: 70
  },
  large: {
    width: 90,
    height: 90
  },
  circle: {
    borderRadius: '100%'
  },
  square: {
    borderRadius: theme.spacing(2)
  }
}));
/**
 * Component to display the alternate icon
 *
 * @param {Object} props
 */

const IconAlternate = props => {
  const {
    iconProps,
    fontIconClass,
    size,
    color,
    shape,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["iconProps", "fontIconClass", "size", "color", "shape", "className"]);

  const classes = useStyles();
  const useBackgroundStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
    background: {
      background: "#e3f2fd"
    }
  }));
  const backgroundClasses = useBackgroundStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("icon-alternate", classes[size], classes[shape], backgroundClasses.background, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }), __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_5__["Icon"], _extends({
    size: size,
    fontIconClass: fontIconClass,
    fontIconColor: "#5120ff",
    className: "icon-alternate__icon"
  }, iconProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  })));
};

IconAlternate.defaultProps = {
  size: 'medium',
  shape: 'square',
  iconProps: {}
};
IconAlternate.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The classes of the font icon
   */
  fontIconClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Sizes of the icon
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['extraSmall', 'small', 'medium', 'large']),

  /**
   * Color of the icon
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].red, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].pink, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].purple, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].deepPurple, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].indigo, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].blue, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lightBlue, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].cyan, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].teal, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].green, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lightGreen, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lime, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].yellow, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].amber, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].orange, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].deepOrange, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].brown, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].grey, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].blueGrey]),

  /**
   * The shape of the alternate icon
   */
  shape: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['circle', 'square']),

  /**
   * Additional properties to pass to the Icon component
   */
  iconProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (IconAlternate);

/***/ }),

/***/ "./src/components/molecules/IconAlternate/index.js":
/*!*********************************************************!*\
  !*** ./src/components/molecules/IconAlternate/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconAlternate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconAlternate */ "./src/components/molecules/IconAlternate/IconAlternate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _IconAlternate__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/OverlapedImages/OverlapedImages.js":
/*!*********************************************************************!*\
  !*** ./src/components/molecules/OverlapedImages/OverlapedImages.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\molecules\\OverlapedImages\\OverlapedImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  imageGrid: {
    padding: '.25rem',
    width: '150%',
    boxShadow: '0 1.5rem 4rem rgba(22,28,45,.1)',
    background: theme.palette.background.paper,
    '& img': {
      maxWidth: '100%',
      height: 'auto',
      verticalAlign: 'middle',
      borderStyle: 'none'
    }
  },
  imageGridFirstItem: {
    marginTop: '4rem'
  },
  imageGridLastItem: {
    marginTop: '6rem',
    float: 'right'
  }
}));
/**
 * Component to display the overlaped images
 *
 * @param {Object} props
 */

const OverlapedImages = props => {
  const {
    image1,
    image2,
    image3,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["image1", "image2", "image3", "className"]);

  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    container: true,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('overlaped-images', className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 4,
    className: "overlaped-images__item-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('overlaped-images__item-wrapper', classes.imageGrid, classes.imageGridFirstItem),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: image1.src,
    srcSet: image1.srcset,
    alt: image1.alt,
    className: "overlaped-images__item-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 4,
    className: "overlaped-images__item-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('overlaped-images__item-wrapper', classes.imageGrid),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: image2.src,
    srcSet: image2.srcset,
    alt: image2.alt,
    className: "overlaped-images__item-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 4,
    className: "overlaped-images__item-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('overlaped-images__item-wrapper', classes.imageGrid, classes.imageGridLastItem),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: image3.src,
    srcSet: image3.srcset,
    alt: image3.alt,
    className: "overlaped-images__item-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }))));
};

OverlapedImages.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Image item - Object of src, srcset and alt properties
   */
  image1: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
   * Image item - Object of src, srcset and alt properties
   */
  image2: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
   * Image item - Object of src, srcset and alt properties
   */
  image3: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (OverlapedImages);

/***/ }),

/***/ "./src/components/molecules/OverlapedImages/index.js":
/*!***********************************************************!*\
  !*** ./src/components/molecules/OverlapedImages/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OverlapedImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OverlapedImages */ "./src/components/molecules/OverlapedImages/OverlapedImages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _OverlapedImages__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/SectionHeader/SectionHeader.js":
/*!*****************************************************************!*\
  !*** ./src/components/molecules/SectionHeader/SectionHeader.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\molecules\\SectionHeader\\SectionHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4)
    }
  },
  disableGutter: {
    marginBottom: 0
  },
  title: {
    fontWeight: 'bold'
  },
  cta: {
    marginLeft: theme.spacing(1),
    '&:first-child': {
      marginLeft: theme.spacing(0)
    }
  }
}));
/**
 * Component to display the section headers
 *
 * @param {Object} props
 */

const SectionHeader = props => {
  const {
    title,
    titleVariant,
    subtitleVariant,
    subtitle,
    subtitleColor,
    label,
    overline,
    fadeUp,
    align,
    ctaGroup,
    disableGutter,
    titleClasses,
    className,
    labelProps,
    titleProps,
    subtitleProps
  } = props,
        rest = _objectWithoutProperties(props, ["title", "titleVariant", "subtitleVariant", "subtitle", "subtitleColor", "label", "overline", "fadeUp", "align", "ctaGroup", "disableGutter", "titleClasses", "className", "labelProps", "titleProps", "subtitleProps"]);

  const classes = useStyles();
  let justifyGrid = 'center';

  if (align === 'left') {
    justifyGrid = 'flex-start';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    container: true,
    spacing: 2,
    "data-aos": fadeUp ? "fade-up" : "",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("section-header", classes.root, disableGutter ? classes.disableGutter : {}, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }), overline && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justifyContent: justifyGrid,
    xs: 12,
    className: "section-header__overline-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, overline), label && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "section-header__label-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "overline",
    color: "primary",
    component: "p",
    align: align || "center"
  }, labelProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }), label)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "section-header__title-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: titleVariant,
    align: align || "center",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("section-header__title", classes.title, titleClasses ? titleClasses : {}),
    color: "textPrimary"
  }, titleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }), title)), subtitle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "section-header__subtitle-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: subtitleVariant || "h6",
    align: align || "center",
    color: subtitleColor || "textPrimary",
    className: "section-header__subtitle"
  }, subtitleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }), subtitle)), ctaGroup && ctaGroup.length && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "section-header__cta-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    justifyContent: justifyGrid,
    alignItems: "center",
    wrap: "nowrap",
    className: "section-header__cta-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, ctaGroup.map((item, index) => __jsx("div", {
    key: index,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("section-header__cta-item-wrapper", classes.cta),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, item)))));
};

SectionHeader.defaultProps = {
  titleVariant: 'h4',
  labelProps: {},
  titleProps: {},
  subtitleProps: {}
};
SectionHeader.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Title of the section header
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]).isRequired,

  /**
   * Subtitle of the section header
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),

  /**
   * Label title of the section header
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The overline component in the section header
   */
  overline: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Array of the CTAs
   */
  ctaGroup: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node),

  /**
   * Whether to fade up on scroll
   */
  fadeUp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Header content (title, subtitle, CTAs) alignment
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['right', 'left', 'center']),

  /**
   * Whether to disable bottom margin of the section
   */
  disableGutter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Styles classes to be attached to the title from the parent component
   */
  titleClasses: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Title variant
   */
  titleVariant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,

  /**
   * SubTitle variant
   */
  subtitleVariant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2']),

  /**
   * SubTitle color
   */
  subtitleColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['textPrimary', 'textSecondary', 'primary', 'secondary']),

  /**
   * Additional properties to pass to the label Typography component
   */
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the title Typography component
   */
  titleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the subtitle Typography component
   */
  subtitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (SectionHeader);

/***/ }),

/***/ "./src/components/molecules/SectionHeader/index.js":
/*!*********************************************************!*\
  !*** ./src/components/molecules/SectionHeader/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SectionHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionHeader */ "./src/components/molecules/SectionHeader/SectionHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SectionHeader__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/SwiperImage/SwiperImage.js":
/*!*************************************************************!*\
  !*** ./src/components/molecules/SwiperImage/SwiperImage.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\molecules\\SwiperImage\\SwiperImage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 'auto'
  },
  swiperSlide: {
    width: 'auto'
  },
  swiperNav: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    width: 88,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 4,
    '& .swiper-button-prev, & .swiper-button-next': {
      width: theme.spacing(3),
      height: theme.spacing(3),
      padding: theme.spacing(2),
      background: theme.palette.primary.main,
      borderRadius: '100%',
      position: 'relative',
      boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
      border: `2px solid ${theme.palette.background.paper}`,
      '&:after': {
        fontSize: 'initial',
        color: theme.palette.background.paper
      }
    },
    '& .swiper-button-prev': {
      left: 0
    },
    '& .swiper-button-next': {
      right: 0
    }
  },
  image: {
    objectFit: 'cover'
  }
}));
/**
 * Component to display the image swiper
 *
 * @param {Object} props
 */

const SwiperImage = props => {
  const {
    items,
    navigationButtonStyle,
    imageClassName,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["items", "navigationButtonStyle", "imageClassName", "className"]);

  const classes = useStyles();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    new swiper__WEBPACK_IMPORTED_MODULE_4___default.a('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-container .swiper-button-next',
        prevEl: '.swiper-container .swiper-button-prev'
      }
    });
  });
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-container', 'swiper-image', classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "swiper-image__wrapper, swiper-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, items.map((item, index) => __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-image__slide', 'swiper-slide', classes.swiperSlide),
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: item.src,
    alt: item.alt,
    srcSet: item.srcSet,
    lazyProps: {
      width: '100%',
      height: '100%'
    },
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-image__item', classes.image, imageClassName ? imageClassName : {}),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-image__navigation', classes.swiperNav),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-image__navigation-button', 'swiper-image__navigation-button--prev', 'swiper-button-prev', navigationButtonStyle || {}),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-image__navigation-button', 'swiper-image__navigation-button--next', 'swiper-button-next', navigationButtonStyle || {}),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  })));
};

SwiperImage.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * External classes for the images
   */
  imageClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The array of images object which should consist of src, alt and srcset attributes
   */
  items: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired,

  /**
   * Styles classes of the navigation button
   */
  navigationButtonStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SwiperImage);

/***/ }),

/***/ "./src/components/molecules/SwiperImage/index.js":
/*!*******************************************************!*\
  !*** ./src/components/molecules/SwiperImage/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwiperImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwiperImage */ "./src/components/molecules/SwiperImage/SwiperImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SwiperImage__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/SwiperNumber/SwiperNumber.js":
/*!***************************************************************!*\
  !*** ./src/components/molecules/SwiperNumber/SwiperNumber.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\molecules\\SwiperNumber\\SwiperNumber.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  swiperSlide: {
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(6)
    }
  },
  number: {
    fontWeight: 900
  }
}));
/**
 * Component to display the number swiper
 *
 * @param {Object} props
 */

const SwiperNumber = props => {
  const {
    items,
    className,
    numberProps,
    labelProps
  } = props,
        rest = _objectWithoutProperties(props, ["items", "className", "numberProps", "labelProps"]);

  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  const isMd = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["useMediaQuery"])(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    new swiper__WEBPACK_IMPORTED_MODULE_5___default.a('.swiper-container', {
      slidesPerView: isMd ? 4 : 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-container .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      autoplay: {
        delay: 5000
      }
    });
  });
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-number', 'swiper-container', className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "swiper-number__wrapper swiper-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, items.map((item, index) => __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-number__item', classes.swiperSlide, 'swiper-slide'),
    key: index,
    style: {
      width: 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 1,
    className: "swiper-number__item-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "swiper-number__number-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "h3",
    align: "center",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-number__number', classes.number)
  }, numberProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), item.number)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "swiper-number__label-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "subtitle1",
    color: "textSecondary",
    align: "center",
    className: "swiper-number__label"
  }, labelProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }), item.title)))))), __jsx("div", {
    className: "swiper-number__pagination swiper-pagination",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }));
};

SwiperNumber.defaultProps = {
  numberProps: {},
  labelProps: {}
};
SwiperNumber.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The array of numbers object which should consist of number and title
   */
  items: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired,

  /**
   * The additional properties to pass to the number Typography component
   */
  numberProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * The additional properties to pass to the label Typography component
   */
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (SwiperNumber);

/***/ }),

/***/ "./src/components/molecules/SwiperNumber/index.js":
/*!********************************************************!*\
  !*** ./src/components/molecules/SwiperNumber/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwiperNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwiperNumber */ "./src/components/molecules/SwiperNumber/SwiperNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SwiperNumber__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/TypedText/TypedText.js":
/*!*********************************************************!*\
  !*** ./src/components/molecules/TypedText/TypedText.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-typed */ "react-typed");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\molecules\\TypedText\\TypedText.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * Component to display the typed animated texts
 *
 * @param {Object} props
 */

const TypedText = props => {
  const {
    className,
    typedProps
  } = props,
        rest = _objectWithoutProperties(props, ["className", "typedProps"]);

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('typed-text', className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), __jsx(react_typed__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    className: "typed-text__item"
  }, typedProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  })));
};

TypedText.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * react-typed properties. For more info visit https://www.npmjs.com/package/react-typed
   */
  typedProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TypedText);

/***/ }),

/***/ "./src/components/molecules/TypedText/index.js":
/*!*****************************************************!*\
  !*** ./src/components/molecules/TypedText/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TypedText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TypedText */ "./src/components/molecules/TypedText/TypedText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TypedText__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/index.js":
/*!*******************************************!*\
  !*** ./src/components/molecules/index.js ***!
  \*******************************************/
/*! exports provided: SectionHeader, IconAlternate, SwiperImage, DescriptionCta, CountUpNumber, OverlapedImages, SwiperNumber, TypedText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SectionHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionHeader */ "./src/components/molecules/SectionHeader/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionHeader", function() { return _SectionHeader__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _IconAlternate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconAlternate */ "./src/components/molecules/IconAlternate/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconAlternate", function() { return _IconAlternate__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SwiperImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwiperImage */ "./src/components/molecules/SwiperImage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperImage", function() { return _SwiperImage__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _DescriptionCta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DescriptionCta */ "./src/components/molecules/DescriptionCta/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionCta", function() { return _DescriptionCta__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _CountUpNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CountUpNumber */ "./src/components/molecules/CountUpNumber/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountUpNumber", function() { return _CountUpNumber__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _OverlapedImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OverlapedImages */ "./src/components/molecules/OverlapedImages/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlapedImages", function() { return _OverlapedImages__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _SwiperNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SwiperNumber */ "./src/components/molecules/SwiperNumber/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperNumber", function() { return _SwiperNumber__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _TypedText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TypedText */ "./src/components/molecules/TypedText/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypedText", function() { return _TypedText__WEBPACK_IMPORTED_MODULE_7__["default"]; });










/***/ }),

/***/ "./src/components/organisms/Accordion/Accordion.js":
/*!*********************************************************!*\
  !*** ./src/components/organisms/Accordion/Accordion.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\Accordion\\Accordion.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/no-multi-comp */

/* eslint-disable react/display-name */







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark
  },
  listItem: {
    cursor: 'pointer'
  }
}));
/**
 * Component to display accordion view
 *
 * @param {*} props
 */

const Accordion = props => {
  const {
    items,
    className,
    titleProps,
    subtitleProps,
    textProps,
    linkProps
  } = props,
        rest = _objectWithoutProperties(props, ["items", "className", "titleProps", "subtitleProps", "textProps", "linkProps"]);

  const classes = useStyles();
  return __jsx("div", _extends({}, rest, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('accordion', classes.root, className),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }), items.map(item => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Accordion"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('accordion__item-wrapper', classes.listItem),
    key: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionSummary"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    }),
    "aria-controls": `${item.id}-content`,
    id: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 0,
    className: "accorion__item-text-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "accorion__item-title-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "h6",
    color: "textPrimary",
    className: "accorion_item-title"
  }, titleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), item.title)), item.subtitle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "accorion_item-subtitle-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "subtitle1",
    color: "textSecondary",
    className: "accorion_item-subtitle"
  }, subtitleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }), item.subtitle)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionDetails"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    className: "accordion__collapsable-text-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "accordion__collapsable-text-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "body1",
    color: "textPrimary",
    className: "accordion__collapsable-text"
  }, textProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }), item.text)), item.link && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "accordion__collapsable-link-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_6__["LearnMoreLink"], _extends({
    title: item.link,
    variant: "body1",
    className: "accordion__collapsable-link"
  }, linkProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }))))))));
};

Accordion.defaultProps = {
  titleProps: {},
  subtitleProps: {},
  textProps: {},
  linkProps: {}
};
Accordion.propTypes = {
  /**
   * Classname from the parent component
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Items to show inside the accordion
   */
  items: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,

  /**
   * Additional properties to pass to the title Typography component
   */
  titleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the subtitle Typography component
   */
  subtitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the text Typography component
   */
  textProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the link component
   */
  linkProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./src/components/organisms/Accordion/index.js":
/*!*****************************************************!*\
  !*** ./src/components/organisms/Accordion/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accordion */ "./src/components/organisms/Accordion/Accordion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Accordion__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardBase/CardBase.js":
/*!*******************************************************!*\
  !*** ./src/components/organisms/CardBase/CardBase.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\CardBase\\CardBase.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  withShadow: {
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`
  },
  noShadow: {
    boxShadow: 'none'
  },
  noBorder: {
    border: 0
  },
  noBg: {
    background: 'transparent'
  },
  liftUp: {
    transition: 'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
    '&:hover': {
      boxShadow: '0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important',
      transform: 'translate3d(0,-5px,0)'
    }
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2, 2),
    '&:last-child': {
      padding: theme.spacing(2, 2)
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3, 3),
      '&:last-child': {
        padding: theme.spacing(3, 3)
      }
    }
  },
  left: {
    alignItems: 'flex-start'
  },
  right: {
    alignItems: 'flex-end'
  },
  center: {
    alignItems: 'center'
  }
}));
/**
 * Component to display the basic card
 *
 * @param {Object} props
 */

const CardBase = props => {
  const {
    withShadow,
    noShadow,
    noBorder,
    noBg,
    liftUp,
    children,
    align,
    className,
    cardContentProps
  } = props,
        rest = _objectWithoutProperties(props, ["withShadow", "noShadow", "noBorder", "noBg", "liftUp", "children", "align", "className", "cardContentProps"]);

  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-base', classes.root, withShadow ? classes.withShadow : {}, noShadow ? classes.noShadow : {}, noBorder ? classes.noBorder : {}, noBg ? classes.noBg : {}, liftUp ? classes.liftUp : {}, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-base__content', classes.content, classes[align])
  }, cardContentProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }), children));
};

CardBase.defaultProps = {
  align: 'center',
  cardContentProps: {}
};
CardBase.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The children content of the basic card
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * Whether to show custom shadow
   */
  withShadow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Whether to render the card without shadow
   */
  noShadow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Whether to hide the card borders
   */
  noBorder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Whether to show transparent background
   */
  noBg: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Whether to lift up on hover
   */
  liftUp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The content alignment
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right', 'center']),

  /**
   * Additional props to pass to the CardContent component
   */
  cardContentProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CardBase);

/***/ }),

/***/ "./src/components/organisms/CardBase/index.js":
/*!****************************************************!*\
  !*** ./src/components/organisms/CardBase/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardBase */ "./src/components/organisms/CardBase/CardBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardBase__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardCategory/CardCategory.js":
/*!***************************************************************!*\
  !*** ./src/components/organisms/CardCategory/CardCategory.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\CardCategory\\CardCategory.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  }
}));
/**
 * Component to display the category card
 *
 * @param {Object} props
 */

const CardCategory = props => {
  const {
    icon,
    title,
    align,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["icon", "title", "align", "className"]);

  const classes = useStyles();
  return __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_4__["CardBase"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_4__["DescriptionListIcon"], {
    icon: icon,
    title: title,
    align: align,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }));
};

CardCategory.defaultProps = {
  align: 'center'
};
CardCategory.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Icon to show inside the category card
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * Category title to show inside the category card
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * The content alignment
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right', 'center'])
};
/* harmony default export */ __webpack_exports__["default"] = (CardCategory);

/***/ }),

/***/ "./src/components/organisms/CardCategory/index.js":
/*!********************************************************!*\
  !*** ./src/components/organisms/CardCategory/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardCategory */ "./src/components/organisms/CardCategory/CardCategory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardCategory__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardCategoryLink/CardCategoryLink.js":
/*!***********************************************************************!*\
  !*** ./src/components/organisms/CardCategoryLink/CardCategoryLink.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowRightAlt */ "@material-ui/icons/ArrowRightAlt");
/* harmony import */ var _material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\CardCategoryLink\\CardCategoryLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  fontWeight700: {
    fontWeight: 700
  },
  heading: {
    fontSize: "24px"
  },
  categoryIconButton: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end'
  },
  subheading: {}
}));
/**
 * Component to display the category link card
 *
 * @param {Object} props
 */

const CardCategoryLink = props => {
  const {
    fontIconClass,
    color,
    title,
    subtitle,
    href,
    align,
    className,
    iconAlternateProps,
    titleProps,
    subtitleProps
  } = props,
        rest = _objectWithoutProperties(props, ["fontIconClass", "color", "title", "subtitle", "href", "align", "className", "iconAlternateProps", "titleProps", "subtitleProps"]);

  const classes = useStyles();
  let justifyGrid = 'flex-start';

  if (align === 'center') {
    justifyGrid = 'center';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  return __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_7__["CardBase"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("card-category-link", classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    className: "card-category-link__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justifyContent: justifyGrid,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_6__["IconAlternate"], _extends({
    fontIconClass: fontIconClass,
    color: color,
    size: "medium"
  }, iconAlternateProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "h6",
    color: "textPrimary",
    align: align,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.fontWeight700)
  }, titleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), title)), subtitle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "body1",
    align: align,
    className: classes.subheading,
    color: "textPrimary"
  }, subtitleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }), subtitle))), __jsx("a", {
    href: href,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("card-category-link__item", classes.categoryIconButton),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
    className: "card-category-link__icon-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "card-category-link__icon",
    style: {
      color: "#5120ff"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  })))));
};

CardCategoryLink.defaultProps = {
  align: 'left',
  href: '#',
  iconAlternateProps: {},
  titleProps: {},
  subtitleProps: {}
};
CardCategoryLink.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Promo title to show inside the card
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Promo subtitle to show inside the card
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Promo description to show inside the card
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Promo font icon class name to show inside the card
   */
  fontIconClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Promo icon color to show inside the card
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].red, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].pink, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].purple, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].deepPurple, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].indigo, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].blue, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lightBlue, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].cyan, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].teal, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].green, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lightGreen, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lime, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].yellow, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].amber, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].orange, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].deepOrange, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].brown, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].grey, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].blueGrey]).isRequired,

  /**
   * The content alignment
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right', 'center']),

  /**
   * Additional props to pass to the IconAlternate component
   */
  iconAlternateProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CardCategoryLink);

/***/ }),

/***/ "./src/components/organisms/CardCategoryLink/index.js":
/*!************************************************************!*\
  !*** ./src/components/organisms/CardCategoryLink/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardCategoryLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardCategoryLink */ "./src/components/organisms/CardCategoryLink/CardCategoryLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardCategoryLink__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardJob/CardJob.js":
/*!*****************************************************!*\
  !*** ./src/components/organisms/CardJob/CardJob.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\CardJob\\CardJob.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  dot: {
    display: 'inline-block',
    width: theme.spacing(1),
    height: theme.spacing(1),
    background: theme.palette.text.primary,
    borderRadius: '100%',
    marginRight: theme.spacing(1)
  },
  dotBig: {
    width: theme.spacing(2),
    height: theme.spacing(2)
  },
  dotSmall: {
    width: theme.spacing(1 / 2),
    height: theme.spacing(1 / 2)
  },
  jobTitle: {
    fontWeight: 700
  },
  dotMargin: {
    margin: theme.spacing(0, 1)
  }
}));
/**
 * Component to display the job card
 *
 * @param {Object} props
 */

const CardJob = props => {
  const {
    badgeColor,
    badgeTitle,
    jobTitle,
    jobLocation,
    jobType,
    jobDate,
    companyLogo,
    companyName,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["badgeColor", "badgeTitle", "jobTitle", "jobLocation", "jobType", "jobDate", "companyLogo", "companyName", "className"]);

  const classes = useStyles();
  return __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["CardBase"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-job', classes.root, className),
    align: "left"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.dot, classes.dotBig),
    style: {
      background: badgeColor
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "span",
    variant: "body2",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, badgeTitle)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h6",
    className: classes.jobTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, jobTitle))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "span",
    variant: "subtitle1",
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, jobLocation), __jsx("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.dot, classes.dotSmall, classes.dotMargin),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "span",
    variant: "subtitle1",
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, jobType))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    disableGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemAvatar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
    src: companyLogo,
    alt: companyName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: companyName,
    secondary: jobDate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  })));
};

CardJob.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Badge color of the job card
   */
  badgeColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Badge title of the job card
   */
  badgeTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job title of the card
   */
  jobTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job location of the card
   */
  jobLocation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job type of the card
   */
  jobType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job location of the card
   */
  jobDate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Company logo of the card
   */
  companyLogo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Company name of the card
   */
  companyName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CardJob);

/***/ }),

/***/ "./src/components/organisms/CardJob/index.js":
/*!***************************************************!*\
  !*** ./src/components/organisms/CardJob/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardJob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardJob */ "./src/components/organisms/CardJob/CardJob.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardJob__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardJobCompany/CardJobCompany.js":
/*!*******************************************************************!*\
  !*** ./src/components/organisms/CardJobCompany/CardJobCompany.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\CardJobCompany\\CardJobCompany.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  companyAvatar: {
    width: 60,
    height: 60
  },
  dot: {
    display: 'inline-block',
    width: theme.spacing(1),
    height: theme.spacing(1),
    background: theme.palette.text.primary,
    borderRadius: '100%',
    marginRight: theme.spacing(1)
  },
  dotSmall: {
    width: theme.spacing(1 / 2),
    height: theme.spacing(1 / 2)
  },
  companyName: {
    fontWeight: 700
  },
  dotMargin: {
    margin: theme.spacing(0, 1)
  }
}));
/**
 * Component to display the job card company
 *
 * @param {Object} props
 */

const CardJobCompany = props => {
  const {
    jobTitle,
    jobLocation,
    companyLogo,
    companyName,
    jobsCount,
    companyInfo,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["jobTitle", "jobLocation", "companyLogo", "companyName", "jobsCount", "companyInfo", "className"]);

  const classes = useStyles();
  return __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["CardBase"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-company', classes.root, className),
    align: "left"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
    src: companyLogo,
    alt: companyName,
    className: classes.companyAvatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h6",
    className: classes.companyName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, companyName)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "h3",
    variant: "subtitle1",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, jobTitle), __jsx("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.dot, classes.dotSmall, classes.dotMargin),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "h3",
    variant: "subtitle1",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, jobLocation)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_6__["LearnMoreLink"], {
    title: jobsCount,
    variant: "subtitle1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "span",
    variant: "body2",
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, companyInfo))));
};

CardJobCompany.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Job title of the card
   */
  jobTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job location of the card
   */
  jobLocation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Company logo of the card
   */
  companyLogo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Company name of the card
   */
  companyName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Count of the jobs in the the card
   */
  jobsCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Company info in the card
   */
  companyInfo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CardJobCompany);

/***/ }),

/***/ "./src/components/organisms/CardJobCompany/index.js":
/*!**********************************************************!*\
  !*** ./src/components/organisms/CardJobCompany/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardJobCompany__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardJobCompany */ "./src/components/organisms/CardJobCompany/CardJobCompany.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardJobCompany__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardJobMinimal/CardJobMinimal.js":
/*!*******************************************************************!*\
  !*** ./src/components/organisms/CardJobMinimal/CardJobMinimal.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\CardJobMinimal\\CardJobMinimal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: `solid 1px rgba(43, 41, 45, 0.2)`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    background: 'transparent',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3)
    },
    '&:hover': {
      background: theme.palette.primary.main,
      boxShadow: '0 11px 55px 10px rgba(0, 0, 0, 0.07), 0 13px 18px -8px rgba(0, 0, 0, 0.15)',
      '& .card-job-minimal__title, & .card-job-minimal__location, & .card-job-minimal__arrow': {
        color: 'white !important'
      }
    }
  },
  cardJobMinimalBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginRight: theme.spacing(8)
    }
  },
  title: {
    fontWeight: 'bold'
  }
}));
/**
 * Component to display the job card company
 *
 * @param {Object} props
 */

const CardJobMinimal = props => {
  const {
    title,
    subtitle,
    showArrow,
    titleProps,
    subtitleProps,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["title", "subtitle", "showArrow", "titleProps", "subtitleProps", "className"]);

  const classes = useStyles();
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, 'card-job-minimal')
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.cardJobMinimalBody, 'card-job-minimal__body'),
    style: !showArrow ? {
      marginRight: 0
    } : {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card-job-minimal__title-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "subtitle1",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.title, 'card-job-minimal__title')
  }, titleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }), title)), __jsx("div", {
    className: "card-job-minimal__location-conatiner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "body2",
    color: "textSecondary",
    className: "card-job-minimal__location"
  }, subtitleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }), subtitle))), showArrow ? __jsx("div", {
    className: "card-job-minimal__arrow-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    fontIconClass: "fas fa-angle-right",
    fontIconColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].grey[700],
    className: "card-job-minimal__arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  })) : null);
};

CardJobMinimal.defaultProps = {
  showArrow: false,
  titleProps: {},
  subtitleProps: {}
};
CardJobMinimal.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Job title of the card
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job subtitle of the card
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Should show arrow or not
   */
  showArrow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CardJobMinimal);

/***/ }),

/***/ "./src/components/organisms/CardJobMinimal/index.js":
/*!**********************************************************!*\
  !*** ./src/components/organisms/CardJobMinimal/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardJobMinimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardJobMinimal */ "./src/components/organisms/CardJobMinimal/CardJobMinimal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardJobMinimal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardJobTag/CardJobTag.js":
/*!***********************************************************!*\
  !*** ./src/components/organisms/CardJobTag/CardJobTag.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\CardJobTag\\CardJobTag.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%',
    '&:hover': {
      borderRight: `${theme.spacing(1)}px solid ${_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].red[500]}`
    }
  },
  dot: {
    display: 'inline-block',
    width: theme.spacing(1),
    height: theme.spacing(1),
    background: theme.palette.text.primary,
    borderRadius: '100%',
    marginRight: theme.spacing(1)
  },
  dotBig: {
    width: theme.spacing(2),
    height: theme.spacing(2)
  },
  dotSmall: {
    width: theme.spacing(1 / 2),
    height: theme.spacing(1 / 2)
  },
  jobTitle: {
    fontWeight: 700
  },
  dotMargin: {
    margin: theme.spacing(0, 1)
  },
  tag: {
    display: 'inline-block',
    padding: theme.spacing(1 / 2),
    borderRadius: theme.spacing(1 / 2),
    border: '1px solid'
  },
  textWhite: {
    color: 'white'
  }
}));
/**
 * Component to display the job card
 *
 * @param {Object} props
 */

const CardJobTag = props => {
  const {
    badgeColor,
    badgeTitle,
    jobTitle,
    jobLocation,
    jobType,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["badgeColor", "badgeTitle", "jobTitle", "jobLocation", "jobType", "className"]);

  const classes = useStyles();
  return __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["CardBase"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, className),
    align: "left"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.tag,
    style: {
      background: badgeColor,
      borderColor: badgeColor
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "span",
    variant: "body2",
    className: classes.textWhite,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, badgeTitle))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h6",
    className: classes.jobTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, jobTitle))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "span",
    variant: "subtitle1",
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, jobLocation), __jsx("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.dot, classes.dotSmall, classes.dotMargin),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "span",
    variant: "subtitle1",
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, jobType)))));
};

CardJobTag.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Badge color of the job card
   */
  badgeColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Badge title of the job card
   */
  badgeTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job title of the card
   */
  jobTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job location of the card
   */
  jobLocation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job type of the card
   */
  jobType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CardJobTag);

/***/ }),

/***/ "./src/components/organisms/CardJobTag/index.js":
/*!******************************************************!*\
  !*** ./src/components/organisms/CardJobTag/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardJobTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardJobTag */ "./src/components/organisms/CardJobTag/CardJobTag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardJobTag__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardPricingStandard/CardPricingStandard.js":
/*!*****************************************************************************!*\
  !*** ./src/components/organisms/CardPricingStandard/CardPricingStandard.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\CardPricingStandard\\CardPricingStandard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  featureCheck: {
    marginRight: theme.spacing(1)
  }
}));
/**
 * Component to display the job card
 *
 * @param {Object} props
 */

const CardPricingStandard = props => {
  const {
    title,
    subtitle,
    priceComponent,
    featureCheckComponent,
    features,
    cta,
    disclaimer,
    className,
    titleProps,
    subtitleProps,
    disclaimerProps,
    featureTitleProps
  } = props,
        rest = _objectWithoutProperties(props, ["title", "subtitle", "priceComponent", "featureCheckComponent", "features", "cta", "disclaimer", "className", "titleProps", "subtitleProps", "disclaimerProps", "featureTitleProps"]);

  const classes = useStyles();
  return __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["CardBase"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-pricing-standard', classes.root, className),
    align: "left"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    className: "card-pricing-standard__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__headline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "h5",
    gutterBottom: true,
    className: "card-pricing-standard__title"
  }, titleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), title), subtitle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "subtitle1",
    color: "textSecondary",
    className: "card-pricing-standard__subtitle"
  }, subtitleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), subtitle)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__divider-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    className: "card-pricing-standard__divider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, priceComponent), features && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__feature-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["List"], {
    className: "card-pricing-standard__feature-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, features.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    key: index,
    disableGutters: true,
    className: "card-pricing-standard__feature-list-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, featureCheckComponent && __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-pricing-standard__feature-check', classes.featureCheck),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, featureCheckComponent), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "h6",
    noWrap: true,
    className: "card-pricing-standard__feature-title"
  }, featureTitleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }
  }), item))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__cta-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, cta), disclaimer && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__disclaimer-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "caption",
    component: "p",
    align: "center",
    className: "card-pricing-standard__disclaimer-title"
  }, disclaimerProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }), disclaimer))));
};

CardPricingStandard.defaultProps = {
  titleProps: {},
  subtitleProps: {},
  disclaimerProps: {},
  featureTitleProps: {}
};
CardPricingStandard.propTypes = {
  /**
   *  External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Title of the pricing card
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   *  Subtitle of the pricing card
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The pricing component of the pricing card
   */
  priceComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * The features check component of the pricing card
   */
  featureCheckComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Features array of the pricing card
   */
  features: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,

  /**
   *  CTA button of the pricing card
   */
  cta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * Diclaimer of the pricing card
   */
  disclaimer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the disclaimer Typography component
   */
  disclaimerProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the feature title Typography component
   */
  featureTitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CardPricingStandard);

/***/ }),

/***/ "./src/components/organisms/CardPricingStandard/index.js":
/*!***************************************************************!*\
  !*** ./src/components/organisms/CardPricingStandard/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardPricingStandard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardPricingStandard */ "./src/components/organisms/CardPricingStandard/CardPricingStandard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardPricingStandard__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardProduct/CardProduct.js":
/*!*************************************************************!*\
  !*** ./src/components/organisms/CardProduct/CardProduct.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\CardProduct\\CardProduct.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  withShadow: {
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`
  },
  noShadow: {
    boxShadow: 'none'
  },
  noBorder: {
    border: 0
  },
  noBg: {
    background: 'transparent'
  },
  liftUp: {
    transition: 'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
    '&:hover': {
      boxShadow: '0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important',
      transform: 'translate3d(0,-5px,0)'
    }
  },
  media: {
    position: 'relative',
    height: 300
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4, 2),
    '&:last-child': {
      padding: theme.spacing(4, 2)
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 3),
      '&:last-child': {
        padding: theme.spacing(6, 3)
      }
    }
  },
  left: {
    alignItems: 'flex-start'
  },
  right: {
    alignItems: 'flex-end'
  },
  center: {
    alignItems: 'center'
  }
}));
/**
 * Component to display the product card
 *
 * @param {Object} props
 */

const CardProduct = props => {
  const {
    mediaClassName,
    withShadow,
    noShadow,
    noBorder,
    noBg,
    liftUp,
    cardContent,
    mediaContent,
    align,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["mediaClassName", "withShadow", "noShadow", "noBorder", "noBg", "liftUp", "cardContent", "mediaContent", "align", "className"]);

  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-product', classes.root, withShadow ? classes.withShadow : {}, noShadow ? classes.noShadow : {}, noBorder ? classes.noBorder : {}, noBg ? classes.noBg : {}, liftUp ? classes.liftUp : {}, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardMedia"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-product__media', classes.media, mediaClassName),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, mediaContent), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-product__content', classes.content, classes[align]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, cardContent));
};

CardProduct.defaultProps = {
  align: 'left'
};
CardProduct.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * External classes for the media
   */
  mediaClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Whether to show custom shadow
   */
  withShadow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Whether to render the card without shadow
   */
  noShadow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Whether to hide the card borders
   */
  noBorder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Whether to show transparent background
   */
  noBg: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Whether to lift up on hover
   */
  liftUp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The Card content
   */
  cardContent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,

  /**
   * The Card Media content
   */
  mediaContent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,

  /**
   * The content alignment
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right', 'center'])
};
/* harmony default export */ __webpack_exports__["default"] = (CardProduct);

/***/ }),

/***/ "./src/components/organisms/CardProduct/index.js":
/*!*******************************************************!*\
  !*** ./src/components/organisms/CardProduct/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardProduct */ "./src/components/organisms/CardProduct/CardProduct.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardProduct__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardPromo/CardPromo.js":
/*!*********************************************************!*\
  !*** ./src/components/organisms/CardPromo/CardPromo.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\CardPromo\\CardPromo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: "100%",
    width: "100%"
  },
  fontWeight700: {
    fontWeight: 700
  },
  textBlue: {
    color: "#5120FF"
  },
  imgFluid: {
    width: "50px",
    height: "50px"
  },
  pb_0: {
    paddingBottom: "0 !important"
  },
  pb_pt_0: {
    paddingTop: "0 !important",
    paddingBottom: "0 !important"
  }
}));
/**
 * Component to display the promo card
 *
 * @param {Object} props
 */

const CardPromo = props => {
  const {
    titleColor,
    fontIconClass,
    color,
    title,
    subtitle,
    description,
    align,
    className,
    src,
    iconAlternateProps,
    titleProps,
    subtitleProps,
    descriptionProps
  } = props,
        rest = _objectWithoutProperties(props, ["titleColor", "fontIconClass", "color", "title", "subtitle", "description", "align", "className", "src", "iconAlternateProps", "titleProps", "subtitleProps", "descriptionProps"]);

  const classes = useStyles();
  let justifyGrid = "flex-start";

  if (align === "center") {
    justifyGrid = "center";
  } else if (align === "right") {
    justifyGrid = "flex-end";
  }

  return __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_6__["CardBase"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("card__promo", classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    className: "card-promo__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justifyContent: justifyGrid,
    xs: 12,
    className: "card-promo__icon-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: src,
    alt: src,
    className: classes.imgFluid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("card-promo__title-wrapper", classes.pb_0),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "h4",
    align: align,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("card-promo__title", classes.fontWeight700, classes.textBlue)
  }, titleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }), title)), subtitle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("card-promo__subtitle-wrapper", classes.pb_pt_0),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "h6",
    color: "textPrimary",
    align: align,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("card-promo__subtitle", classes.fontWeight700)
  }, subtitleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }), subtitle)), description && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("card-promo__description-wrapper", classes.pb_pt_0),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "body1",
    color: "textPrimary",
    align: align,
    className: "card-promo__description"
  }, descriptionProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }), description))));
};

CardPromo.defaultProps = {
  align: 'left',
  iconAlternateProps: {},
  titleProps: {},
  subtitleProps: {},
  descriptionProps: {}
};
CardPromo.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Promo title to show inside the card
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Promo subtitle to show inside the card
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Promo description to show inside the card
   */
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Promo font icon class name to show inside the card
   */
  fontIconClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Promo icon color to show inside the card
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].red, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].pink, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].purple, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].deepPurple, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].indigo, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].blue, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lightBlue, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].cyan, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].teal, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].green, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lightGreen, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lime, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].yellow, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].amber, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].orange, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].deepOrange, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].brown, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].grey, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].blueGrey]).isRequired,

  /**
   * The content alignment
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right', 'center']),

  /**
   * Title color
   */
  titleColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Additional props to pass to the IconAlternate component
   */
  iconAlternateProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the desciption Typography component
   */
  descriptionProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CardPromo);

/***/ }),

/***/ "./src/components/organisms/CardPromo/index.js":
/*!*****************************************************!*\
  !*** ./src/components/organisms/CardPromo/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardPromo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardPromo */ "./src/components/organisms/CardPromo/CardPromo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardPromo__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardReview/CardReview.js":
/*!***********************************************************!*\
  !*** ./src/components/organisms/CardReview/CardReview.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\CardReview\\CardReview.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  }
}));
/**
 * Component to display the review card
 *
 * @param {Object} props
 */

const CardReview = props => {
  const {
    icon,
    text,
    authorPhoto,
    authorName,
    authorTitle,
    align,
    textVariant,
    className,
    textProps,
    listItemPrimaryTypographyProps,
    listItemSecondaryTypographyProps
  } = props,
        rest = _objectWithoutProperties(props, ["icon", "text", "authorPhoto", "authorName", "authorTitle", "align", "textVariant", "className", "textProps", "listItemPrimaryTypographyProps", "listItemSecondaryTypographyProps"]);

  const classes = useStyles();
  let justifyGrid = 'center';

  if (align === 'left') {
    justifyGrid = 'flex-start';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  return __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["CardBase"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-review', classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    className: "card-review__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justifyContent: justifyGrid,
    xs: 12,
    className: "card-review__icon-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, icon), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-review__text-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: textVariant,
    align: align,
    component: "p"
  }, textProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), text)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-review__lits-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    justifyContent: justifyGrid,
    className: "card-review__list-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["List"], {
    disablePadding: true,
    className: "card-review__list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    className: "card-review__list-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemAvatar"], {
    className: "card-review__list-item-avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], _extends({}, authorPhoto, {
    alt: authorName,
    className: "card-review__avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    className: "card-review__list-item-text",
    primary: authorName,
    secondary: authorTitle,
    primaryTypographyProps: _objectSpread({}, listItemPrimaryTypographyProps),
    secondaryTypographyProps: _objectSpread({}, listItemSecondaryTypographyProps),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  })))))));
};

CardReview.defaultProps = {
  align: 'center',
  textVariant: 'h6',
  textProps: {},
  listItemPrimaryTypographyProps: {},
  listItemSecondaryTypographyProps: {}
};
CardReview.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Icon to show inside the review card
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * Review text to show inside the review card
   */
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Reviewer photo to show inside the review card.Should be an object with src and srcSet properties
   */
  authorPhoto: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
   * Reviewer name to show inside the review card
   */
  authorName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Reviewer title to show inside the review card
   */
  authorTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Alignment of the content
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right', 'center']),

  /**
   * Review text variant
   */
  textVariant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Additional props to pass to the text Typography component
   */
  textProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the list item primary text Typography component
   */
  listItemPrimaryTypographyProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the list item secondary text Typography component
   */
  listItemSecondaryTypographyProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CardReview);

/***/ }),

/***/ "./src/components/organisms/CardReview/index.js":
/*!******************************************************!*\
  !*** ./src/components/organisms/CardReview/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardReview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardReview */ "./src/components/organisms/CardReview/CardReview.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardReview__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/ContactForm/ContactForm.js":
/*!*************************************************************!*\
  !*** ./src/components/organisms/ContactForm/ContactForm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validate.js */ "validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\ContactForm\\ContactForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    width: '100%'
  }
}));
const schema = {
  fullname: {
    presence: {
      allowEmpty: false,
      message: 'is required'
    },
    length: {
      maximum: 128
    }
  },
  email: {
    presence: {
      allowEmpty: false,
      message: 'is required'
    },
    email: true,
    length: {
      maximum: 300
    }
  },
  message: {
    presence: {
      allowEmpty: false,
      message: 'is required'
    }
  }
};

const ContactForm = () => {
  const classes = useStyles();
  const [formState, setFormState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const errors = validate_js__WEBPACK_IMPORTED_MODULE_3___default()(formState.values, schema);
    setFormState(formState => _objectSpread(_objectSpread({}, formState), {}, {
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();
    setFormState(formState => _objectSpread(_objectSpread({}, formState), {}, {
      values: _objectSpread(_objectSpread({}, formState.values), {}, {
        [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
      }),
      touched: _objectSpread(_objectSpread({}, formState.touched), {}, {
        [event.target.name]: true
      })
    }));
  };

  const hasError = field => formState.touched[field] && formState.errors[field] ? true : false;

  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx("form", {
    name: "contact-form",
    method: "post",
    action: "/submition.html?contact-form-submit-success=true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "hidden",
    name: "form-name",
    value: "contact-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, "Contact Us")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "textSecondary",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "We carefully read and answer to all our emails.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    placeholder: "Full Name",
    label: "Full Name *",
    variant: "outlined",
    size: "medium",
    name: "fullname",
    fullWidth: true,
    helpertext: hasError('fullname') ? formState.errors.fullname[0] : null,
    error: hasError('fullname'),
    onChange: handleChange,
    type: "text",
    value: formState.values.fullname || '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    placeholder: "E-mail",
    label: "E-mail *",
    variant: "outlined",
    size: "medium",
    name: "email",
    fullWidth: true,
    helpertext: hasError('email') ? formState.errors.email[0] : null,
    error: hasError('email'),
    onChange: handleChange,
    type: "email",
    value: formState.values.email || '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    placeholder: "Message",
    label: "Message *",
    variant: "outlined",
    name: "message",
    fullWidth: true,
    helpertext: hasError('message') ? formState.errors.message[0] : null,
    error: hasError('message'),
    onChange: handleChange,
    multiline: true,
    rows: 4,
    value: formState.values.message || '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle2",
    gutterBottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, "Fields that are marked with an asterisk (*) sign are required."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "large",
    variant: "contained",
    type: "submit",
    color: "primary",
    disabled: !formState.isValid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, "Send")))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./src/components/organisms/ContactForm/index.js":
/*!*******************************************************!*\
  !*** ./src/components/organisms/ContactForm/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactForm */ "./src/components/organisms/ContactForm/ContactForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ContactForm__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/DescriptionListIcon/DescriptionListIcon.js":
/*!*****************************************************************************!*\
  !*** ./src/components/organisms/DescriptionListIcon/DescriptionListIcon.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\DescriptionListIcon\\DescriptionListIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  title: {
    fontWeight: 700
  }
}));
/**
 * Component to display the description list with icon
 *
 * @param {Object} props
 */

const DescriptionListIcon = props => {
  const {
    title,
    subtitle,
    icon,
    align,
    titleVariant,
    subtitleVariant,
    className,
    titleProps,
    subtitleProps
  } = props,
        rest = _objectWithoutProperties(props, ["title", "subtitle", "icon", "align", "titleVariant", "subtitleVariant", "className", "titleProps", "subtitleProps"]);

  const classes = useStyles();
  let gridJustify = 'center';

  if (align === 'left') {
    gridJustify = 'flex-start';
  } else if (align === 'right') {
    gridJustify = 'flex-end';
  }

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    container: true,
    spacing: 2
  }, rest, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('description-list-icon', className),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justifyContent: gridJustify,
    xs: 12,
    className: "description-list-icon__icon-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, icon), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "description-list-icon__title-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: titleVariant,
    color: "textPrimary",
    align: align,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.title, 'description-list-icon__title')
  }, titleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), title)), subtitle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "description-list-icon__subtitle-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: subtitleVariant,
    color: "textSecondary",
    align: align,
    className: "description-list-icon__subtitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, subtitle)));
};

DescriptionListIcon.defaultProps = {
  align: 'center',
  titleVariant: 'h6',
  subtitleVariant: 'body1',
  titleProps: {},
  subtitleProps: {}
};
DescriptionListIcon.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The title
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * the subtitle
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Whether should show the alternate icon
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * The alignment of the items
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right', 'center']),

  /**
   * Title variant
   */
  titleVariant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Subtitle variant
   */
  subtitleVariant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DescriptionListIcon);

/***/ }),

/***/ "./src/components/organisms/DescriptionListIcon/index.js":
/*!***************************************************************!*\
  !*** ./src/components/organisms/DescriptionListIcon/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DescriptionListIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DescriptionListIcon */ "./src/components/organisms/DescriptionListIcon/DescriptionListIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DescriptionListIcon__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/HeroBackground/HeroBackground.js":
/*!*******************************************************************!*\
  !*** ./src/components/organisms/HeroBackground/HeroBackground.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\HeroBackground\\HeroBackground.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible'
  },
  colorDefault: {
    background: _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].indigo[900]
  },
  heroWrapper: {
    zIndex: 2
  },
  heroCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.2,
    width: '100%',
    height: '100%',
    zIndex: 1
  },
  heroBg: {
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat'
  },
  noCoverOpacity: {
    opacity: 1
  }
}));
/**
 * Component to display the background hero
 *
 * @param {Object} props
 */

const HeroBackground = props => {
  const {
    children,
    disbaleCoverOpacity,
    backgroundImg,
    backgroundPosition,
    backgroundColor,
    contentSectionClassName,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "disbaleCoverOpacity", "backgroundImg", "backgroundPosition", "backgroundColor", "contentSectionClassName", "className"]);

  const classes = useStyles();
  const useCustomStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
    coverBg: {
      backgroundImage: `url(${backgroundImg})`
    },
    backgroundColor: {
      background: backgroundColor
    },
    backgroundPosition: {
      backgroundPosition: backgroundPosition
    }
  }));
  const customClasses = useCustomStyles();
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-background', classes.root, backgroundColor ? customClasses.backgroundColor : classes.colorDefault, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-background__wrapper', classes.heroWrapper),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(contentSectionClassName ? contentSectionClassName : '', 'hero-background__section'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, children)), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-background__cover', classes.heroBg, classes.heroCover, customClasses.coverBg, backgroundPosition ? customClasses.backgroundPosition : {}, disbaleCoverOpacity ? classes.noCoverOpacity : {}),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }));
};

HeroBackground.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Children to placed inside the hero
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Background image of the hero
   */
  backgroundImg: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Background color of the hero
   */
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Background position of the hero
   */
  backgroundPosition: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Custom classes for the content section
   */
  contentSectionClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Should disable here cover opacity
   */
  disbaleCoverOpacity: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (HeroBackground);

/***/ }),

/***/ "./src/components/organisms/HeroBackground/index.js":
/*!**********************************************************!*\
  !*** ./src/components/organisms/HeroBackground/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroBackground */ "./src/components/organisms/HeroBackground/HeroBackground.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _HeroBackground__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/HeroShaped/HeroShaped.js":
/*!***********************************************************!*\
  !*** ./src/components/organisms/HeroShaped/HeroShaped.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\HeroShaped\\HeroShaped.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden"
  },
  hero: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    maxWidth: theme.layout.contentWidth,
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse"
    }
  },
  heroLeftSide: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3, 8)
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3, 2)
    }
  },
  heroRightSide: {
    maxWidth: "50%",
    flex: "0 0 50%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      flex: "0 0 100%"
    }
  },
  heroCover: {
    position: "relative",
    width: "50vw",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  heroImageContainer: {
    height: "100%",
    width: "100%",
    overflow: "hidden"
  },
  heroImage: {
    position: "absolute",
    left: "0%",
    width: "100%",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      shapeOutside: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
      clipPath: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)"
    },
    [theme.breakpoints.down("sm")]: {
      position: "static"
    },
    "& img": {
      [theme.breakpoints.down("sm")]: {
        height: 450,
        objectFit: "cover"
      },
      [theme.breakpoints.down("xs")]: {
        height: 350
      }
    }
  }
}));
/**
 * Component to display the shaped hero
 *
 * @param {Object} props
 */

const HeroShaped = props => {
  const {
    leftSide,
    rightSide,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["leftSide", "rightSide", "className"]);

  const classes = useStyles();
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, 'hero-shaped', className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-shaped__wrapper', classes.hero),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-shaped__left-side', classes.heroLeftSide),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, leftSide), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-shaped__right-side', classes.heroRightSide),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-shaped__cover', classes.heroCover),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-shaped__image-container', classes.heroImageContainer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-shaped__image', classes.heroImage),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, rightSide))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }));
};

HeroShaped.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Children to placed inside the section right side
   */
  rightSide: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * Children to placed inside the section left side
   */
  leftSide: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (HeroShaped);

/***/ }),

/***/ "./src/components/organisms/HeroShaped/index.js":
/*!******************************************************!*\
  !*** ./src/components/organisms/HeroShaped/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroShaped__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroShaped */ "./src/components/organisms/HeroShaped/HeroShaped.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _HeroShaped__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/HeroSideImage/HeroSideImage.js":
/*!*****************************************************************!*\
  !*** ./src/components/organisms/HeroSideImage/HeroSideImage.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\HeroSideImage\\HeroSideImage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    position: 'relative'
  },
  imageWrapper: {
    position: 'relative',
    maxHeight: 400
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cover: {
    background: _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].indigo[900],
    opacity: 0.6,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%'
  },
  content: {
    position: 'absolute',
    padding: theme.spacing(2),
    top: '50%',
    transform: 'translateY(-50%)',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      transform: 'none',
      padding: theme.spacing(0, 4)
    }
  }
}));
/**
 * Component to display the side image hero
 *
 * @param {Object} props
 */

const HeroSideImage = props => {
  const {
    imageSrc,
    imageSrcSet,
    children,
    backgroundColor,
    reverse,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["imageSrc", "imageSrcSet", "children", "backgroundColor", "reverse", "className"]);

  const classes = useStyles();
  const useCustomStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
    coverBg: {
      background: backgroundColor
    }
  }));
  const customClasses = useCustomStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    container: true,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-side-image', classes.root, className),
    direction: reverse ? 'row-reverse' : 'row'
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-side-image__image-wrapper', classes.imageWrapper),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: imageSrc,
    srcSet: imageSrcSet ? imageSrcSet : '',
    alt: '...',
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-side-image__image', classes.image),
    lazy: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-side-image__cover', classes.cover, backgroundColor ? customClasses.coverBg : {}),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-side-image__content', classes.content),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, children));
};

HeroSideImage.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Children to placed inside the hero
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Background color of the hero
   */
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Side image
   */
  imageSrc: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Side image srcset
   */
  imageSrcSet: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Should show in reverse order
   */
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (HeroSideImage);

/***/ }),

/***/ "./src/components/organisms/HeroSideImage/index.js":
/*!*********************************************************!*\
  !*** ./src/components/organisms/HeroSideImage/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroSideImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroSideImage */ "./src/components/organisms/HeroSideImage/HeroSideImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _HeroSideImage__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/HeroSimpleBackground/HeroSimpleBackground.js":
/*!*******************************************************************************!*\
  !*** ./src/components/organisms/HeroSimpleBackground/HeroSimpleBackground.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\HeroSimpleBackground\\HeroSimpleBackground.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
  root: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}));

const HeroSimpleBackground = props => {
  const {
    children,
    backgroundSize,
    backgroundImage,
    backgroundPosition,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "backgroundSize", "backgroundImage", "backgroundPosition", "className"]);

  const classes = useStyles();
  const useBackground = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
    backgroundImage: {
      backgroundImage: `url(${backgroundImage})`
    },
    backgroundSize: {
      backgroundSize: backgroundSize
    },
    backgroundPosition: {
      backgroundPosition: backgroundPosition
    }
  }));
  const backgroundClasses = useBackground();
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()('hero-simple-background', classes.root, className, backgroundClasses.backgroundImage, backgroundClasses.backgroundSize, backgroundClasses.backgroundPosition)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_4__["Section"], {
    className: "hero-simple-background__section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, children));
};

HeroSimpleBackground.defaultProps = {
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};
HeroSimpleBackground.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The main content
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,

  /**
   * The background image of the hero
   */
  backgroundImage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * The background size of the hero
   */
  backgroundSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The background position of the hero
   */
  backgroundPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (HeroSimpleBackground);

/***/ }),

/***/ "./src/components/organisms/HeroSimpleBackground/index.js":
/*!****************************************************************!*\
  !*** ./src/components/organisms/HeroSimpleBackground/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroSimpleBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroSimpleBackground */ "./src/components/organisms/HeroSimpleBackground/HeroSimpleBackground.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _HeroSimpleBackground__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/Map/Map.js":
/*!*********************************************!*\
  !*** ./src/components/organisms/Map/Map.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\Map\\Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%'
  }
}));
/**
 * Component to display the map
 *
 * @param {Object} props
 */

const Map = props => {
  const {
    zoom,
    center,
    pins,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["zoom", "center", "pins", "className"]);

  const classes = useStyles();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const L = __webpack_require__(/*! leaflet */ "leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    const markerIcon2x = __webpack_require__(/*! assets/images/leaflet-assets/marker-icon-2x.png */ "./src/assets/images/leaflet-assets/marker-icon-2x.png");

    const markerIcon = __webpack_require__(/*! assets/images/leaflet-assets/marker-icon.png */ "./src/assets/images/leaflet-assets/marker-icon.png");

    const markerShadow = __webpack_require__(/*! assets/images/leaflet-assets/marker-shadow.png */ "./src/assets/images/leaflet-assets/marker-shadow.png");

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: typeof markerIcon2x === 'object' ? markerIcon2x.default : markerIcon2x,
      iconUrl: typeof markerIcon === 'object' ? markerIcon.default : markerIcon,
      shadowUrl: typeof markerShadow === 'object' ? markerShadow.default : markerShadow
    });
  });

  if (true) {
    return null;
  }

  const ReactMap = __webpack_require__(/*! react-leaflet */ "react-leaflet").Map;

  const TileLayer = __webpack_require__(/*! react-leaflet */ "react-leaflet").TileLayer;

  const Marker = __webpack_require__(/*! react-leaflet */ "react-leaflet").Marker;

  return __jsx(ReactMap, _extends({
    zoom: zoom,
    center: center,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('map', classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }), __jsx(TileLayer, {
    className: "map__tile-layer",
    detectRetina: true,
    attribution: "&copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), pins && pins.length && pins.map((item, i) => __jsx(Marker, {
    className: "map__marker",
    position: [item.location.y, item.location.x],
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  })));
};

Map.defaultProps = {
  zoom: 10,
  center: [0, 0]
};
Map.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Map zoom
   */
  zoom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Map center
   */
  center: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,

  /**
   * data of the locations. Example: [{ location: { x: number, y: number } }]
   */
  pins: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./src/components/organisms/Map/index.js":
/*!***********************************************!*\
  !*** ./src/components/organisms/Map/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map */ "./src/components/organisms/Map/Map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Map__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/Parallax/Parallax.js":
/*!*******************************************************!*\
  !*** ./src/components/organisms/Parallax/Parallax.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\Parallax\\Parallax.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    position: 'relative'
  },
  image: {
    position: 'absolute',
    objectFit: 'cover',

    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }
}));
/**
 * Component to display the Parallax backgrounds
 *
 * @param {Object} props
 */

const Parallax = props => {
  const {
    backgroundImage,
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["backgroundImage", "children", "className"]);

  const classes = useStyles();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const jarallaxElems = document.querySelectorAll('.jarallax');

    if (!jarallaxElems || jarallaxElems && jarallaxElems.length === 0) {
      return;
    }

    const jarallax = __webpack_require__(/*! jarallax */ "jarallax").jarallax;

    jarallax(jarallaxElems, {
      speed: 0.2
    });
  });
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('jarallax', 'parallax', classes.root, className),
    "data-jarallax": true,
    "data-speed": "0.2"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('jarallax-img', 'parallax__image', classes.image),
    style: {
      backgroundImage: `url(${backgroundImage})`
    },
    alt: "...",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), children);
};

Parallax.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The content
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * The parallax background image
   */
  backgroundImage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Parallax);

/***/ }),

/***/ "./src/components/organisms/Parallax/index.js":
/*!****************************************************!*\
  !*** ./src/components/organisms/Parallax/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Parallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Parallax */ "./src/components/organisms/Parallax/Parallax.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Parallax__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/Section/Section.js":
/*!*****************************************************!*\
  !*** ./src/components/organisms/Section/Section.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\Section\\Section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3, 8, 4)
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8, 6)
    }
  },
  fullWidth: {
    maxWidth: "100%"
  },
  disablePadding: {
    padding: 0
  },
  narrow: {
    maxWidth: 800
  }
}));
/**
 * Component to display the sections
 *
 * @param {Object} props
 */

const Section = props => {
  const {
    children,
    fullWidth,
    narrow,
    disablePadding,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "fullWidth", "narrow", "disablePadding", "className"]);

  const classes = useStyles();
  return __jsx("section", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('section', classes.root, fullWidth ? classes.fullWidth : {}, narrow ? classes.narrow : {}, disablePadding ? classes.disablePadding : {}, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }), children);
};

Section.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Children to placed inside the section
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Should show narrow sections
   */
  narrow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Should the section be full width
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Should the section render with no padding
   */
  disablePadding: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./src/components/organisms/Section/index.js":
/*!***************************************************!*\
  !*** ./src/components/organisms/Section/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/components/organisms/Section/Section.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Section__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/SectionAlternate/SectionAlternate.js":
/*!***********************************************************************!*\
  !*** ./src/components/organisms/SectionAlternate/SectionAlternate.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\components\\organisms\\SectionAlternate\\SectionAlternate.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    background: theme.palette.alternate.main
  },
  inner: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 8)
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 8)
    }
  },
  innerNarrowed: {
    maxWidth: 800
  }
}));
/**
 * Component to display the alternative sections
 *
 * @param {Object} props
 */

const SectionAlternate = props => {
  const {
    children,
    innernarrowed,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "innernarrowed", "className"]);

  const classes = useStyles();
  return __jsx("section", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('section-alternate', classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('section-alternate__content', classes.inner, innernarrowed ? classes.innerNarrowed : {}),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, children));
};

SectionAlternate.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Children to placed inside the section
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Should show narrow sections
   */
  innernarrowed: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (SectionAlternate);

/***/ }),

/***/ "./src/components/organisms/SectionAlternate/index.js":
/*!************************************************************!*\
  !*** ./src/components/organisms/SectionAlternate/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SectionAlternate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionAlternate */ "./src/components/organisms/SectionAlternate/SectionAlternate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SectionAlternate__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/index.js":
/*!*******************************************!*\
  !*** ./src/components/organisms/index.js ***!
  \*******************************************/
/*! exports provided: Section, SectionAlternate, DescriptionListIcon, CardBase, CardReview, CardCategory, CardJob, CardJobMinimal, CardJobTag, CardJobCompany, Accordion, HeroShaped, CardProduct, Map, HeroBackground, HeroSideImage, CardPromo, CardCategoryLink, HeroSimpleBackground, CardPricingStandard, Parallax, ContactForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/components/organisms/Section/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _Section__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _SectionAlternate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionAlternate */ "./src/components/organisms/SectionAlternate/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionAlternate", function() { return _SectionAlternate__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _DescriptionListIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DescriptionListIcon */ "./src/components/organisms/DescriptionListIcon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionListIcon", function() { return _DescriptionListIcon__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _CardBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardBase */ "./src/components/organisms/CardBase/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardBase", function() { return _CardBase__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _CardReview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardReview */ "./src/components/organisms/CardReview/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardReview", function() { return _CardReview__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _CardCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardCategory */ "./src/components/organisms/CardCategory/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardCategory", function() { return _CardCategory__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _CardJob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardJob */ "./src/components/organisms/CardJob/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardJob", function() { return _CardJob__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _CardJobMinimal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardJobMinimal */ "./src/components/organisms/CardJobMinimal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardJobMinimal", function() { return _CardJobMinimal__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _CardJobTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardJobTag */ "./src/components/organisms/CardJobTag/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardJobTag", function() { return _CardJobTag__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _CardJobCompany__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CardJobCompany */ "./src/components/organisms/CardJobCompany/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardJobCompany", function() { return _CardJobCompany__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Accordion */ "./src/components/organisms/Accordion/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return _Accordion__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _HeroShaped__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HeroShaped */ "./src/components/organisms/HeroShaped/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroShaped", function() { return _HeroShaped__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _CardProduct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CardProduct */ "./src/components/organisms/CardProduct/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardProduct", function() { return _CardProduct__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Map */ "./src/components/organisms/Map/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _Map__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _HeroBackground__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HeroBackground */ "./src/components/organisms/HeroBackground/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroBackground", function() { return _HeroBackground__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _HeroSideImage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./HeroSideImage */ "./src/components/organisms/HeroSideImage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroSideImage", function() { return _HeroSideImage__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _CardPromo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CardPromo */ "./src/components/organisms/CardPromo/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardPromo", function() { return _CardPromo__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _CardCategoryLink__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CardCategoryLink */ "./src/components/organisms/CardCategoryLink/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardCategoryLink", function() { return _CardCategoryLink__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _HeroSimpleBackground__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./HeroSimpleBackground */ "./src/components/organisms/HeroSimpleBackground/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroSimpleBackground", function() { return _HeroSimpleBackground__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _CardPricingStandard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./CardPricingStandard */ "./src/components/organisms/CardPricingStandard/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardPricingStandard", function() { return _CardPricingStandard__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _Parallax__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Parallax */ "./src/components/organisms/Parallax/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parallax", function() { return _Parallax__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ContactForm */ "./src/components/organisms/ContactForm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactForm", function() { return _ContactForm__WEBPACK_IMPORTED_MODULE_21__["default"]; });
























/***/ }),

/***/ "./src/components/toaster/index.js":
/*!*****************************************!*\
  !*** ./src/components/toaster/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: toast => {
    toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.stopTimer);
    toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.resumeTimer);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Toast);

/***/ }),

/***/ "./src/config/ApiRoutes.js":
/*!*********************************!*\
  !*** ./src/config/ApiRoutes.js ***!
  \*********************************/
/*! exports provided: ApiRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRoutes", function() { return ApiRoutes; });
const ApiRoutes = {
  SIGNUP: {
    service: "/auth",
    url: "/signup",
    method: "POST",
    authenticate: false
  },
  LOGIN: {
    service: "/auth",
    url: "/login",
    method: "POST",
    authenticate: false
  },
  RESETPASSWORD: {
    service: "/auth",
    url: "/reset-password",
    method: "POST",
    authenticate: false
  },
  FORGOTPASSWORD: {
    service: "/auth",
    url: "/forgot-password",
    method: "POST",
    authenticate: false
  },
  GETUSERDETAILS: {
    service: "/auth",
    url: "/details",
    method: "GET",
    authenticate: true
  },
  USERDETAILSUPDATE: {
    service: "/auth",
    url: "/update",
    method: "PUT",
    authenticate: true
  },
  USERPASSWORDUPDATE: {
    service: "/auth",
    url: "/change-password",
    method: "PUT",
    authenticate: true
  },
  USERFORGOTPASSWORDUPDATE: {
    service: "/auth",
    url: "/forgot-password",
    method: "POST",
    authenticate: false
  },
  COURSELIST: {
    service: "/course-topic/?limit=all",
    url: "",
    method: "GET",
    authenticate: false
  },
  COURSEDETAILS: {
    service: "/course-topic",
    url: "/:id",
    method: "GET",
    authenticate: false
  },
  COURSEDETAILSAUTH: {
    service: "/course-topic",
    url: "/:id",
    method: "GET",
    authenticate: true
  },
  APPLYCOUPON: {
    service: "/transaction",
    url: "/applyPromo",
    method: "POST",
    authenticate: true
  },
  MAKEPAYMENT: {
    service: "/transaction",
    url: "",
    method: "POST",
    authenticate: true
  },
  PAYMENTHISTORY: {
    service: "/transaction",
    url: "",
    method: "GET",
    authenticate: true
  },
  PURCHASEDCOURSE: {
    service: "/course",
    url: "/purchased-course",
    method: "GET",
    authenticate: true
  },
  CERTIFICATEREQUEST: {
    service: "/certificate-request",
    url: "",
    method: "POST",
    authenticate: true
  },
  BLOGLIST: {
    service: "/blog",
    url: "",
    method: "GET",
    authenticate: false
  },
  BLOGDETAIL: {
    service: "/blog",
    url: "/:id",
    method: "GET",
    authenticate: false
  },
  GETUNIVERSITY: {
    service: "/auth",
    url: "/universities",
    method: "GET",
    authenticate: false
  },
  GETCORPORATE: {
    service: "/auth",
    url: "/corporation",
    method: "GET",
    authenticate: false
  },
  CONTACT_US: {
    service: "/enterprise",
    url: "",
    method: "POST",
    authenticate: false
  },
  PRESS_RELEASE: {
    service: "/press-release",
    url: "",
    method: "GET",
    authenticate: false
  },
  PRESS_DETAILS: {
    service: "/press-release",
    url: "/:id",
    method: "GET",
    authenticate: false
  },
  GET_LMSDATA_COURSE: {
    service: "/talentLms",
    url: "/courses",
    method: "GET",
    authenticate: false
  },
  GET_LMSDATA_CATEGORY: {
    service: "/talentLms",
    url: "/category",
    method: "GET",
    authenticate: false
  },
  NEWSLETTERSUBSCRIBE: {
    service: "/news-letter",
    url: "",
    method: "POST",
    authenticate: false
  },
  GETSOCIALLINKES: {
    service: "/setting",
    url: "",
    method: "GET",
    authenticate: false
  },
  GETPAYMENTCERTIFICATEDETAILS: {
    service: "/certificate-request/payment-info",
    url: "/:id",
    method: "GET",
    authenticate: false
  },
  MAKEPAYMENTCERTIFICATE: {
    service: "/certificate-request/payment",
    url: "/:id",
    method: "POST",
    authenticate: false
  },
  CERTIFICATE_DATA: {
    service: "/cms",
    url: "",
    method: "GET",
    authenticate: false
  },
  FRONT_PAGE_DATA: {
    service: "/market-content",
    url: "",
    method: "GET",
    authenticate: false
  },
  GET_TEAM_DATA: {
    service: "/team",
    url: "",
    method: "GET",
    authenticate: false
  }
};

/***/ }),

/***/ "./src/config/appConfig.js":
/*!*********************************!*\
  !*** ./src/config/appConfig.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const AppConfig = {
  // FILES_ENDPOINT: process.env.REACT_APP_FILES_ENDPOINT,
  // APP_ENDPOINT: process.env.REACT_APP_ENDPOINT,
  API_ENDPOINT: "http://localhost:8080/api/v1.0.1",
  IMAGE_URL: "http://localhost:8080",
  SITE_NAME: "Coinifide" // API_VERSION: process.env.REACT_APP_API_VERSION,
  // DEFAULT_DATE_FORMAT: process.env.REACT_APP_DEFAULT_DATE_FORMAT,

};
/* harmony default export */ __webpack_exports__["default"] = (AppConfig);

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: ApiRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiRoutes */ "./src/config/ApiRoutes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiRoutes", function() { return _ApiRoutes__WEBPACK_IMPORTED_MODULE_0__["ApiRoutes"]; });

/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appConfig */ "./src/config/appConfig.js");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "./src/helper/ApiHelper.js":
/*!*********************************!*\
  !*** ./src/helper/ApiHelper.js ***!
  \*********************************/
/*! exports provided: ApiHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiHelper", function() { return ApiHelper; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorHandlerHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorHandlerHelper */ "./src/helper/ErrorHandlerHelper.js");
/* harmony import */ var _SuccessHandlerHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuccessHandlerHelper */ "./src/helper/SuccessHandlerHelper.js");
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/appConfig */ "./src/config/appConfig.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * ApiHelper Class - For making Api Requests
 * 
 */

let CancelToken = axios__WEBPACK_IMPORTED_MODULE_0___default.a.CancelToken;
let cancel;
class ApiHelper {
  constructor() {
    _defineProperty(this, "_portalGateway", void 0);

    _defineProperty(this, "_apiVersion", void 0);

    _defineProperty(this, "setHost", host => {
      this._portalGateway = host;
    });

    _defineProperty(this, "setApiVersion", version => {
      this._apiVersion = version;
    });

    _defineProperty(this, "cancelRequest", err => {
      cancel && cancel(err);
    });

    this._portalGateway = _config_appConfig__WEBPACK_IMPORTED_MODULE_3__["default"].API_ENDPOINT;
    this._apiVersion = "";
    this.source = axios__WEBPACK_IMPORTED_MODULE_0___default.a.CancelToken.source();
    this.cancelToken = this.source.token;
  }

  /**
   * Fetches from the Gateway defined by the instantiated object. Accepts <T> as output object.
   * @example <caption>"/Auth/UserAccount", "/GetCurrentUser", "GET", "JWT Content"</caption>
   * @param {service} service - wanting to be access ex. "UserAuth/Auth"
   * @param {endpoint} endpoint - you wish to call ex. "/Login"
   * @param {method} mehotd - method (GET, UPDATE, DELETE, POST)
   * @param {jwt} JWT - JSON Web Token (Optional)
   * @param {queryOptions} Query - query options for "GET" methods (Optional)
   * @param {body} body - JSON body for "UPDATE, DELETE and POST" methods (Optional)
   */
  async FetchFromServer(service, endpoint, method, authenticated = false, authToken, queryOptions = undefined, body = undefined, responseType) {
    let url = this._portalGateway + service + endpoint;
    let headers = {
      "Content-Type": "application/json"
    };

    if (authenticated) {
      // const storageSession = localStorage.getItem("token");
      const storageSession = authToken;
      headers.Authorization = storageSession;
    }

    try {
      method = method.toLowerCase();
      let response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.request({
        method,
        url,
        data: body,
        headers: headers,
        params: queryOptions,
        cancelToken: new CancelToken(function executor(c) {
          // An executor function receives a cancel function as a parameter
          cancel = c;
        })
      });

      if (response.ok === false || response.status !== 200) {
        let errorObject = {
          code: response.status,
          data: response.data
        };
        throw errorObject;
      }

      const data = new _SuccessHandlerHelper__WEBPACK_IMPORTED_MODULE_2__["SuccessHandlerHelper"](response.data);
      return data.data;
    } catch (err) {
      if (axios__WEBPACK_IMPORTED_MODULE_0___default.a.isCancel(err) || !err.response) {
        return {
          isError: true,
          error: "Request cancelled",
          messages: err.message === "cancel" ? [] : ["Request cancelled"]
        };
      } else {
        const errorHelper = new _ErrorHandlerHelper__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlerHelper"](err.response);
        return errorHelper.error;
      }
    }
  }
  /**
   * Cancels the last request.
   */


}

/***/ }),

/***/ "./src/helper/ErrorHandlerHelper.js":
/*!******************************************!*\
  !*** ./src/helper/ErrorHandlerHelper.js ***!
  \******************************************/
/*! exports provided: ErrorHandlerHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerHelper", function() { return ErrorHandlerHelper; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * ErrorHandlerHelper Class - For managing errors
 */
class ErrorHandlerHelper {
  constructor(err) {
    _defineProperty(this, "rawError", void 0);

    _defineProperty(this, "error", {
      code: 500,
      isError: true,
      timestamp: Date.now(),
      error: 'Unknown error',
      messages: [],
      data: undefined
    });

    _defineProperty(this, "setError", () => {
      const code = this.rawError && this.rawError.code ? this.rawError.code : this.error.code;
      this.error.code = this.rawError.status === 402 ? this.rawError.status : code ? code : 400;
      this.error.timestamp = Date.now();
      this.error.messages = [];

      if (this.rawError.data && typeof this.rawError.data === 'object' && this.rawError.data.message) {
        if (this.rawError && this.rawError.data.message === "Token has expired" || this.rawError && this.rawError.data.message === "Unauthorized, Invalid token!") {
          localStorage.removeItem("token");
          window.location.href = "/";
        } else {
          this.error.messages.push(this.rawError.data.message);
        }
      }

      if (!this.error.messages.length) {
        this.error.error = 'Unknown';
        this.error.messages = [null];
      }
    });

    this.rawError = err;
    this.setError();
  }

}

/***/ }),

/***/ "./src/helper/SuccessHandlerHelper.js":
/*!********************************************!*\
  !*** ./src/helper/SuccessHandlerHelper.js ***!
  \********************************************/
/*! exports provided: SuccessHandlerHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessHandlerHelper", function() { return SuccessHandlerHelper; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * SuccessHandlerHelper Class - For managing successful response
 */
class SuccessHandlerHelper {
  constructor(data) {
    _defineProperty(this, "rawData", void 0);

    _defineProperty(this, "data", {
      code: 200,
      isError: false,
      timestamp: Date.now(),
      error: undefined,
      messages: []
    });

    _defineProperty(this, "setSucccess", () => {
      const messages = [];

      for (let i in this.rawData) {
        if (typeof this.rawData[i] === "string") {
          messages.push(this.rawData[i]);
        }
      }

      this.data.data = this.rawData;
      this.data.messages = messages;
    });

    this.rawData = data;
    this.setSucccess();
  }

}

/***/ }),

/***/ "./src/helper/index.js":
/*!*****************************!*\
  !*** ./src/helper/index.js ***!
  \*****************************/
/*! exports provided: ApiHelper, SuccessHandlerHelper, ErrorHandlerHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiHelper */ "./src/helper/ApiHelper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiHelper", function() { return _ApiHelper__WEBPACK_IMPORTED_MODULE_0__["ApiHelper"]; });

/* harmony import */ var _SuccessHandlerHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuccessHandlerHelper */ "./src/helper/SuccessHandlerHelper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuccessHandlerHelper", function() { return _SuccessHandlerHelper__WEBPACK_IMPORTED_MODULE_1__["SuccessHandlerHelper"]; });

/* harmony import */ var _ErrorHandlerHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorHandlerHelper */ "./src/helper/ErrorHandlerHelper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerHelper", function() { return _ErrorHandlerHelper__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerHelper"]; });





/***/ }),

/***/ "./src/views/Marketing/Marketing.js":
/*!******************************************!*\
  !*** ./src/views/Marketing/Marketing.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helper */ "./src/helper/index.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! config */ "./src/config/index.js");
/* harmony import */ var components_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/toaster */ "./src/components/toaster/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_assets_images_Certificate_page_certificate_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/assets/images/Certificate-page/certificate.jpg */ "./src/assets/images/Certificate-page/certificate.jpg");
/* harmony import */ var _src_assets_images_Certificate_page_certificate_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_assets_images_Certificate_page_certificate_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components */ "./src/views/Marketing/components/index.js");
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../config/appConfig */ "./src/config/appConfig.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./data */ "./src/views/Marketing/data/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\Marketing\\Marketing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  coursesSection: {
    maxWidth: 800,
    margin: "0 auto"
  },
  paddingBottom0: {
    paddingBottom: 0
  },
  sectionAlternate: {
    background: "transparent",
    backgroundImage: ` linear-gradient(
      180deg
      , #fff 62%, rgb(83 98 252) 60%)`
  },
  fontWeight700: {
    fontWeight: "700"
  },
  textWhite: {
    color: "#fff"
  },
  textCenter: {
    textAlign: "center"
  },
  affilateBlock: {
    padding: "0 100px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px !important"
    }
  },
  commonBtn: {
    display: "inline-block",
    padding: "7px 10px",
    backgroundColor: "#5120FF",
    fontSize: 16,
    minWidth: 200,
    border: "solid 1px #5120FF",
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#5120FF",
      boxShadow: "none"
    }
  },
  whiteBtn: {
    backgroundColor: "#fff",
    color: "#5120FF",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#5120FF",
      color: "#fff",
      border: "solid 1px #fff"
    }
  },
  categoriesWrapper: {
    "& .section-alternate__content": {
      padding: theme.spacing(6, 8),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(5, 3)
      }
    }
  },
  affiliateWrapper: {
    padding: theme.spacing(2, 6, 3)
  },
  subscriptionWrapper: {
    "& .section-alternate__content": {
      padding: theme.spacing(7, 8, 6),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(7, 2, 6)
      }
    }
  },
  certificate_sec: {
    display: "flex",
    alignItems: "center",
    padding: "90px 0px 100px 0px",
    justifyContent: "center",
    background: "#f5f5f5",
    minHeight: "800px"
  },
  certificate_box: {
    backgroundImage: `url(${_src_assets_images_Certificate_page_certificate_jpg__WEBPACK_IMPORTED_MODULE_7___default.a})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    textAlign: "center",
    width: "780px",
    fontWeight: "600",
    border: "15px solid #1a237e",
    position: "relative",
    fontFamily: "'Roboto', sans-serif"
  },
  heading1: {
    marginTop: "45px",
    fontSize: "32px",
    fontWeight: "800",
    margin: "20px 0 20px",
    fontFamily: "'Viga', sans-serif",
    letterSpacing: "1px"
  },
  label: {
    fontWeight: "600",
    fontSize: "16px",
    marginRight: "5px"
  },
  labelextra: {
    fontWeight: "600",
    fontSize: "16px",
    marginLeft: "5px"
  },
  heading3: {
    marginBottom: "10px",
    fontWeight: "700",
    fontSize: "18px"
  },
  heading4: {
    fontWeight: "800",
    marginBottom: "10px",
    fontSize: "14px",
    fontWeight: "bold"
  },
  heading5: {
    fontWeight: "800",
    fontSize: "17px",
    fontStyle: "italic",
    padding: "3px 40px 0",
    borderTop: "1px solid black",
    fontFamily: "'Roboto', sans-serif"
  },
  sectionHeader: {
    marginTop: "20px",
    marginBottom: "20px",
    fontWeight: 600,
    fontSize: "35px"
  },
  sign: {
    padding: "3px 40px",
    margin: "70px 0px 10px 0px",
    fontStyle: "italic",
    borderTop: "1px solid black"
  },
  sign_div: {
    marginTop: "70px",
    marginBottom: "40px"
  },
  bannerBottom: {
    "& > span": {
      display: "block !important"
    }
  },
  wrapperSection: {
    padding: theme.spacing(4, 0, 0)
  },
  sectionWrapper: {
    padding: theme.spacing(7, 6)
  },
  paper: {
    minHeight: "350px",
    height: "100%",
    padding: "30px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "auto",
      padding: "15px"
    },
    "& h1": {
      position: "relative",
      "&::after": {
        content: '" "',
        display: "block",
        width: "150px",
        borderBottom: "3px solid #5120ff",
        position: "absolute",
        bottom: "15px"
      }
    }
  },
  commonBtn: {
    display: "inline-block",
    padding: 10,
    backgroundColor: "#5120FF",
    color: "#fff",
    fontSize: 16,
    borderRadius: 5,
    minWidth: 200,
    border: "solid 1px #5120FF",
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#5120FF"
    }
  },
  anotherCommonBtn: {
    backgroundColor: "#fff",
    color: "#5120FF",
    "&:hover": {
      backgroundColor: "#5120FF",
      color: "#fff"
    }
  },
  blogchain_heading: {
    marginBottom: "15px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      marginBottom: "5px"
    }
  },
  fontSize_18: {
    fontSize: 18
  },
  contentSection: {
    padding: theme.spacing(5, 6, 0),
    "& p": {
      fontSize: "1.25rem",
      lineHeight: "1.6",
      fontWeight: "500",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.125rem"
      }
    },
    "& h1": {
      lineHeight: "1.235",
      paddingBottom: "30px",
      fontSize: "2.0243rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.8219rem",
        paddingBottom: "20px"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5625rem"
      },
      "&::after": {
        content: "",
        display: "inline-block",
        width: "100px",
        borderBottom: "5px solid #5120FF"
      }
    },
    "& ul": {
      paddingLeft: "30px",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: 15
      }
    },
    "& li": {
      paddingBottom: "10px",
      fontSize: "18px",
      [theme.breakpoints.down("sm")]: {
        fontSize: 16,
        paddingBottom: 8
      }
    }
  },
  imageLabs: {
    maxWidth: "100%",
    margin: "auto auto",
    border: "0"
  },
  imageWrapper: {
    flexWrap: "wrap",
    "& > span": {
      width: "100% !important"
    }
  },
  subTitle: {
    "& h1": {
      fontSize: "1.4993rem"
    },
    "& p": {
      fontSize: "18px",
      fontWeight: "400",
      lineHeight: "1.5"
    },
    "& p > span": {
      fontSize: "18px !important",
      fontFamily: "Lato !important",
      fontWeight: "400 !important",
      color: "#2d3748 !important"
    }
  }
}));

const Marketing = ({
  blogData,
  courseData,
  pressData,
  marketData
}) => {
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  const isMd = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_12___default()(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  const classes = useStyles();
  const [loader, setLoader] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const {
    0: getTemplateData,
    1: setGetTemplateData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: courseTempData,
    1: setCourseTempData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // const [blogData, setBlogData] = useState([]);
  // const [pressData, setPressData] = useState([]);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(courseData, "this is data");
    const data = courseData;

    if (data && data.length) {
      let filterData = data.filter(course => course.isActive);
      setCourseTempData(filterData);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (marketData && marketData.length) {
      let getData = marketData.filter(e => e.titleSlug === "marketing");
      setGetTemplateData(...getData);
    }
  }, [marketData]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_9__["Hero"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 7
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_11__["Section"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_9__["PromoNumbers"], {
    data: getTemplateData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 9
    }
  })), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_11__["SectionAlternate"], {
    className: classes.categoriesWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components__WEBPACK_IMPORTED_MODULE_9__["Categories"], {
    courseData: courseTempData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: classes.wrapperSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 7
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_11__["Section"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.contentSection, classes.subTitle, classes.pb_60),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 9
    }
  }, getTemplateData ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    container: true,
    spacing: isMd ? 0 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    xs: 12,
    md: 6,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default.a, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    pl: isMd ? 2 : 0,
    pr: isMd ? 2 : 0,
    className: classes.imageWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 19
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_10__["Image"], {
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_16__["default"].IMAGE_URL}/${getTemplateData.blockImage5}`,
    srcSet: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_16__["default"].IMAGE_URL}/${getTemplateData.blockImage5}`,
    height: "100%",
    alt: "marketing image",
    className: classes.imageLabs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 21
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    xs: 12,
    md: 6,
    "data-aos": "fade-up",
    className: classes.order_sp_30,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13___default.a, {
    elevation: 2,
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default.a, {
    mb: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, {
    variant: "body1",
    color: "textPrimary",
    className: classes.fontSize_18,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 23
    }
  }, getTemplateData ? react_html_parser__WEBPACK_IMPORTED_MODULE_17___default()(getTemplateData.block5) : null))))) : null), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_11__["Section"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.contentSection, classes.subTitle, classes.pb_60),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    container: true,
    spacing: isMd ? 0 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    xs: 12,
    md: 12,
    "data-aos": "fade-up",
    className: classes.order_sp_30,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default.a, {
    mb: 2,
    mt: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, {
    variant: "body1",
    color: "textPrimary",
    className: classes.fontSize_18,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 19
    }
  }, getTemplateData ? react_html_parser__WEBPACK_IMPORTED_MODULE_17___default()(getTemplateData.block6) : null)))))), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_11__["SectionAlternate"] // innernarrowed
  , {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.sectionAlternate, classes.subscriptionWrapper),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_9__["Subscription"], {
    sending: getTemplateData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Marketing);

/***/ }),

/***/ "./src/views/Marketing/components/Categories/Categories.js":
/*!*****************************************************************!*\
  !*** ./src/views/Marketing/components/Categories/Categories.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors/purple */ "@material-ui/core/colors/purple");
/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles/useTheme */ "@material-ui/core/styles/useTheme");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\Marketing\\components\\Categories\\Categories.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_8___default()(() => ({
  textBlue: {
    color: "#5120FF"
  }
}));

const Categories = props => {
  const classes = useStyles();

  const {
    data,
    courseData,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["data", "courseData", "className"]);

  const theme = _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_9___default()();
  const isMd = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  return __jsx("div", _extends({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_2__["SectionHeader"], {
    title: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, "Choose your best", " ", __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "inherit",
      component: "span",
      className: classes.textBlue,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, "Courses")),
    subtitle: "Browse the available course categories, choose your favorite one and start learning.",
    fadeUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    spacing: isMd ? 4 : 2,
    justifyContent: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, courseData && courseData.length ? courseData.map((item, index) => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    key: index,
    item: true,
    container: true,
    alignItems: "center",
    direction: "column",
    xs: 12,
    sm: 6,
    md: 4,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["CardCategoryLink"], {
    variant: "outlined",
    align: isMd ? "left" : "center",
    liftUp: true,
    title: item.title,
    subtitle: item.subTitle,
    href: `/course-detail/${item._id}`,
    fontIconClass: "fas fa-funnel-dollar",
    color: _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }))) : ""));
};

Categories.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Categories);

/***/ }),

/***/ "./src/views/Marketing/components/Categories/index.js":
/*!************************************************************!*\
  !*** ./src/views/Marketing/components/Categories/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories */ "./src/views/Marketing/components/Categories/Categories.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Categories__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Marketing/components/Courses/Courses.js":
/*!***********************************************************!*\
  !*** ./src/views/Marketing/components/Courses/Courses.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors/yellow */ "@material-ui/core/colors/yellow");
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles/useTheme */ "@material-ui/core/styles/useTheme");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../config/appConfig */ "./src/config/appConfig.js");
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\Marketing\\components\\Courses\\Courses.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6___default()(theme => ({
  cardProduct: {
    borderRadius: theme.spacing(3)
  },
  courseCardPrice: {
    padding: theme.spacing(1),
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(1)
  },
  courseCardReviewAvatar: {
    marginLeft: theme.spacing(-2),
    border: `3px solid ${theme.palette.background.paper}`,
    '&:first-child': {
      marginLeft: 0
    }
  },
  courseCardReviewStar: {
    color: _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_5___default.a[800],
    marginRight: theme.spacing(1 / 2)
  },
  reviewCount: {
    marginLeft: theme.spacing(1)
  },
  image: {
    objectFit: 'cover'
  },
  fontWeight700: {
    fontWeight: 700
  }
}));

const Courses = props => {
  const {
    data,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["data", "className"]);

  const classes = useStyles();
  const theme = _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_7___default()();
  const isMd = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default()(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  return __jsx("div", _extends({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_10__["SectionHeader"], {
    title: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }, "Browse our ", __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      color: "secondary",
      variant: "inherit",
      component: "span",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 24
      }
    }, "Popular Blogs")),
    subtitle: "Here are our popular course you might want to learn from your tutor.",
    fadeUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, data.map((item, index) => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: index,
    item: true,
    xs: 12,
    sm: 12,
    md: 6,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_11__["CardProduct"], {
    className: classes.cardProduct,
    withShadow: true,
    liftUp: true,
    mediaContent: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_9__["Image"], {
      src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_8__["default"].IMAGE_URL}${item.blogFeatureImage}`,
      srcSet: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_8__["default"].IMAGE_URL}${item.blogFeatureImage}`,
      alt: item.title,
      lazyProps: {
        width: '100%',
        height: '100%'
      },
      className: classes.image,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: classes.courseCardPrice,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "body1",
      color: "primary",
      className: classes.fontWeight700,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    }, item.price))),
    cardContent: __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      spacing: 1,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      xs: 12,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h6",
      color: "textPrimary",
      align: "left",
      className: classes.fontWeight700,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }
    }, item.title)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      xs: 12,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "body1",
      color: "textSecondary",
      align: "left",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    }, item.address)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      container: true,
      justifyContent: "space-between",
      xs: 12,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 19
      }
    }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      xs: 12,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 19
      }
    }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_9__["LearnMoreLink"], {
      title: "Learn more",
      variant: "body1",
      color: "primary",
      href: `/blog-details/${item._id}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 21
      }
    }))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  })))));
};

Courses.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Courses);

/***/ }),

/***/ "./src/views/Marketing/components/Courses/index.js":
/*!*********************************************************!*\
  !*** ./src/views/Marketing/components/Courses/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Courses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Courses */ "./src/views/Marketing/components/Courses/Courses.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Courses__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Marketing/components/Hero/Hero.js":
/*!*****************************************************!*\
  !*** ./src/views/Marketing/components/Hero/Hero.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\Marketing\\components\\Hero\\Hero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default()(theme => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#5120FF"
  },
  image: {
    minHeight: 400,
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "auto"
    }
  },
  textWhite: {
    color: "white"
  },
  title: {
    fontWeight: "bold"
  },
  section: {// position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // paddingTop: 0,
    // paddingBottom: 0,
  },
  searchInputContainer: {
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.11)",
    borderRadius: theme.spacing(1),
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0 !important"
    },
    "& .MuiInputAdornment-positionStart": {
      marginRight: theme.spacing(2)
    },
    "& .MuiOutlinedInput-adornedStart": {
      paddingLeft: 0
    },
    "& .MuiOutlinedInput-input": {
      padding: 0
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1)
    }
  },
  searchButton: {
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down("sm")]: {
      minWidth: "auto"
    }
  }
}));

const Hero = props => {
  const {
    className
  } = props,
        rest = _objectWithoutProperties(props, ["className"]);

  const classes = useStyles();
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_4__["SectionHeader"], {
    title: "Marketing",
    subtitle: "We marry our carefully curated content and courses with interactive videos and hands-on labs.",
    align: "left",
    titleProps: {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.title, classes.textWhite),
      variant: "h3"
    },
    subtitleProps: {
      className: classes.textWhite
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }))));
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/views/Marketing/components/Hero/index.js":
/*!******************************************************!*\
  !*** ./src/views/Marketing/components/Hero/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero */ "./src/views/Marketing/components/Hero/Hero.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Hero__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Marketing/components/PressRelease/PressRelease.js":
/*!*********************************************************************!*\
  !*** ./src/views/Marketing/components/PressRelease/PressRelease.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/useTheme */ "@material-ui/core/styles/useTheme");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors/purple */ "@material-ui/core/colors/purple");
/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\Marketing\\components\\PressRelease\\PressRelease.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const PressRelease = props => {
  const {
    data,
    courseData,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["data", "courseData", "className"]);

  const theme = _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_4___default()();
  const isMd = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  return __jsx("div", _extends({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_2__["SectionHeader"], {
    title: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, "Checkout Our Latest ", ' ', __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
      color: "secondary",
      variant: "inherit",
      component: "span",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, "Press Release")),
    subtitle: "Browse the available course categories, choose your favorite one and start learning.",
    fadeUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, courseData && courseData.length ? courseData.map((item, index) => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: index,
    item: true,
    container: true,
    alignItems: "center",
    direction: "column",
    xs: 12,
    sm: 6,
    md: 3,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["CardCategoryLink"], {
    variant: "outlined",
    align: isMd ? 'left' : 'center',
    liftUp: true,
    title: item.title,
    subtitle: item.subTitle,
    href: `/course-detail/${item._id}`,
    fontIconClass: 'fas fa-funnel-dollar',
    color: _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }))) : ""));
};

PressRelease.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PressRelease);

/***/ }),

/***/ "./src/views/Marketing/components/PressRelease/index.js":
/*!**************************************************************!*\
  !*** ./src/views/Marketing/components/PressRelease/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PressRelease__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PressRelease */ "./src/views/Marketing/components/PressRelease/PressRelease.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PressRelease__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Marketing/components/PromoNumbers/PromoNumbers.js":
/*!*********************************************************************!*\
  !*** ./src/views/Marketing/components/PromoNumbers/PromoNumbers.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles/useTheme */ "@material-ui/core/styles/useTheme");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../config/appConfig */ "./src/config/appConfig.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\Marketing\\components\\PromoNumbers\\PromoNumbers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6___default()(() => ({
  textBlue: {
    color: "#5120FF"
  }
}));

const PromoNumbers = props => {
  const classes = useStyles();

  const {
    data,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["data", "className"]);

  const theme = _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_7___default()();
  const isMd = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(props => {}, [props]);
  return __jsx("div", _extends({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_2__["SectionHeader"], {
    title: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, data ? data.blockTitle1 : ""),
    subtitle: data ? data.blockTitle2 : "",
    fadeUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, data ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    container: true,
    alignItems: "center",
    direction: "column",
    xs: 12,
    sm: 6,
    md: 3,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["CardPromo"], {
    variant: "outlined",
    liftUp: true,
    align: isMd ? "left" : "center",
    title: data.blockTitle4 + `+`,
    subtitle: data.blockTitle3,
    description: react_html_parser__WEBPACK_IMPORTED_MODULE_8___default()(data.block1),
    fontIconClass: data.blockImage1,
    titleColor: "primary",
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_9__["default"].IMAGE_URL}/${data.blockImage1}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    container: true,
    alignItems: "center",
    direction: "column",
    xs: 12,
    sm: 6,
    md: 3,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["CardPromo"], {
    variant: "outlined",
    liftUp: true,
    align: isMd ? "left" : "center",
    title: data.blockTitle6 + `+`,
    subtitle: data.blockTitle5,
    description: react_html_parser__WEBPACK_IMPORTED_MODULE_8___default()(data.block2),
    fontIconClass: data.blockImage2,
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_9__["default"].IMAGE_URL}/${data.blockImage2}`,
    titleColor: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    container: true,
    alignItems: "center",
    direction: "column",
    xs: 12,
    sm: 6,
    md: 3,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["CardPromo"], {
    variant: "outlined",
    liftUp: true,
    align: isMd ? "left" : "center",
    title: data.blockTitle8 + `+`,
    subtitle: data.blockTitle7,
    description: react_html_parser__WEBPACK_IMPORTED_MODULE_8___default()(data.block3),
    fontIconClass: data.blockImage3,
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_9__["default"].IMAGE_URL}/${data.blockImage3}`,
    titleColor: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    container: true,
    alignItems: "center",
    direction: "column",
    xs: 12,
    sm: 6,
    md: 3,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["CardPromo"], {
    variant: "outlined",
    liftUp: true,
    align: isMd ? "left" : "center",
    title: data.blockTitle10 + `+`,
    subtitle: data.blockTitle9,
    description: react_html_parser__WEBPACK_IMPORTED_MODULE_8___default()(data.block4),
    fontIconClass: data.blockImage4,
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_9__["default"].IMAGE_URL}/${data.blockImage4}`,
    titleColor: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }))) : null));
};

PromoNumbers.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PromoNumbers);

/***/ }),

/***/ "./src/views/Marketing/components/PromoNumbers/index.js":
/*!**************************************************************!*\
  !*** ./src/views/Marketing/components/PromoNumbers/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PromoNumbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PromoNumbers */ "./src/views/Marketing/components/PromoNumbers/PromoNumbers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PromoNumbers__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Marketing/components/Reviews/Reviews.js":
/*!***********************************************************!*\
  !*** ./src/views/Marketing/components/Reviews/Reviews.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "@material-ui/core/colors/blue");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles/useTheme */ "@material-ui/core/styles/useTheme");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\Marketing\\components\\Reviews\\Reviews.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_10___default()(() => ({
  sectionHeadlineStars: {
    maxWidth: 120
  }
}));

const Reviews = props => {
  const {
    data,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["data", "className"]);

  const classes = useStyles();
  const theme = _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_11___default()();
  const isMd = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  return __jsx("div", _extends({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_3__["SectionHeader"], {
    overline: __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: "https://assets.maccarianagency.com/the-front/illustrations/rated-by-our-customer.png",
      alt: "rating",
      className: classes.sectionHeadlineStars,
      width: "auto",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }),
    title: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
      component: "span",
      variant: "inherit",
      color: "primary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, "Rated 5 out of 5"), ' ', "stars by our customers!"),
    subtitle: "Companies from across the globe have had fantastic experiences using TheFront. Here\u2019s what they have to say.",
    fadeUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, data.map((review, index) => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: index,
    item: true,
    container: true,
    alignItems: "center",
    direction: "column",
    xs: 12,
    sm: 12,
    md: 4,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_4__["CardReview"], {
    variant: "outlined",
    text: review.feedback,
    icon: __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_3__["IconAlternate"], {
      color: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_8___default.a,
      fontIconClass: "fas fa-quote-right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }),
    authorName: review.authorName,
    authorTitle: review.authorOccupation,
    authorPhoto: review.authorPhoto,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    item: true,
    container: true,
    xs: 12,
    justifyContent: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "outlined",
    size: "large",
    color: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, "See all reviews"))));
};

Reviews.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Reviews);

/***/ }),

/***/ "./src/views/Marketing/components/Reviews/index.js":
/*!*********************************************************!*\
  !*** ./src/views/Marketing/components/Reviews/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reviews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reviews */ "./src/views/Marketing/components/Reviews/Reviews.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Reviews__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Marketing/components/Subscription/Subscription.js":
/*!*********************************************************************!*\
  !*** ./src/views/Marketing/components/Subscription/Subscription.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helper */ "./src/helper/index.js");
/* harmony import */ var _config_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/ApiRoutes */ "./src/config/ApiRoutes.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! validate.js */ "validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/toaster */ "./src/components/toaster/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\Marketing\\components\\Subscription\\Subscription.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const schema = {
  email: {
    presence: {
      allowEmpty: false,
      message: "is required"
    },
    email: true,
    length: {
      maximum: 120
    }
  }
};
const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_11___default()(theme => ({
  commonBtn: {
    display: "inline-block",
    padding: "7px 10px",
    backgroundColor: "#5120FF",
    fontSize: 16,
    minWidth: 200,
    border: "solid 1px #5120FF",
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#5120FF",
      boxShadow: "none",
      "& $loaderCommon": {
        color: "#5120FF !important"
      }
    },
    "&:disabled": {
      backgroundColor: "#5362fc !important"
    }
  },
  boxShadowHighlight: {
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
  },
  smallCommonBtn: {
    minWidth: 132,
    padding: "8px 10px",
    fontSize: 15
  },
  customField: {
    "& input": {
      padding: "15px",
      height: 44,
      boxSizing: " border-box"
    }
  },
  loaderCommon: {
    width: "17px !important",
    height: "17px !important",
    color: "white"
  },
  errorText: {
    color: 'red',
    fontSize: "14px"
  }
}));

const Subscription = props => {
  const classes = useStyles();

  const {
    className
  } = props,
        rest = _objectWithoutProperties(props, ["className"]);

  const [formState, setFormState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const errors = validate_js__WEBPACK_IMPORTED_MODULE_4___default()(formState.values, schema);
    setFormState(formState => _objectSpread(_objectSpread({}, formState), {}, {
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {}, [props]);

  const handleChange = event => {
    event.persist();
    setFormState(formState => _objectSpread(_objectSpread({}, formState), {}, {
      values: _objectSpread(_objectSpread({}, formState.values), {}, {
        [event.target.name]: event.target.value
      }),
      touched: _objectSpread(_objectSpread({}, formState.touched), {}, {
        [event.target.name]: true
      })
    }));
  };

  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setFormState(formState => _objectSpread(_objectSpread({}, formState), {}, {
      touched: _objectSpread(_objectSpread({}, formState.touched), formState.errors)
    }));

    if (formState.isValid) {
      const data = {
        email: formState.values.email
      };
      setIsLoading(true);
      const response = await new _helper__WEBPACK_IMPORTED_MODULE_2__["ApiHelper"]().FetchFromServer(_config_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__["ApiRoutes"].NEWSLETTERSUBSCRIBE.service, _config_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__["ApiRoutes"].NEWSLETTERSUBSCRIBE.url, _config_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__["ApiRoutes"].NEWSLETTERSUBSCRIBE.method, _config_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__["ApiRoutes"].NEWSLETTERSUBSCRIBE.authenticate, undefined, undefined, data);

      if (response && !response.isError) {
        components_toaster__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          icon: "success",
          title: response.messages[0]
        });
        setIsLoading(false);
        setFormState(formState => _objectSpread(_objectSpread({}, formState), {}, {
          values: {},
          touched: {}
        }));
      } else {
        components_toaster__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          icon: "error",
          title: response.messages[0]
        });
        setIsLoading(false);
      }
    }
  };

  const hasError = field => formState.touched[field] && formState.errors[field] ? true : false;

  return __jsx("div", _extends({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_10__["CardBase"], {
    withShadow: true,
    "data-aos": "fade-up",
    className: classes.boxShadowHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_9__["SectionHeader"], {
    title: props.sending ? props.sending.blockTitle12 : null,
    subtitle: props.sending ? props.sending.blockTitle13 : null,
    fadeUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    spacing: 1,
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    sm: 9,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a, {
    placeholder: "Your e-mail address",
    variant: "outlined",
    size: "medium",
    name: "email",
    fullWidth: true,
    type: "email",
    helpertext: hasError("email") ? formState.errors.email[0] : null,
    error: hasError("email"),
    onChange: handleChange,
    value: formState.values.email || "",
    className: classes.customField,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    sm: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    onClick: handleSubmit,
    disabled: isLoading,
    className: clsx__WEBPACK_IMPORTED_MODULE_12___default()(classes.commonBtn, classes.smallCommonBtn),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }, isLoading ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["CircularProgress"], {
    className: classes.loaderCommon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 29
    }
  }) : "subscribe")), hasError("email") ? __jsx("span", {
    className: classes.errorText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 15
    }
  }, formState.errors.email[0]) : null)));
};

Subscription.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Subscription);

/***/ }),

/***/ "./src/views/Marketing/components/Subscription/index.js":
/*!**************************************************************!*\
  !*** ./src/views/Marketing/components/Subscription/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ "./src/views/Marketing/components/Subscription/Subscription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Subscription__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Marketing/components/index.js":
/*!*************************************************!*\
  !*** ./src/views/Marketing/components/index.js ***!
  \*************************************************/
/*! exports provided: Categories, Courses, Hero, PromoNumbers, Reviews, Subscription, PressRelease */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories */ "./src/views/Marketing/components/Categories/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Categories", function() { return _Categories__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Courses */ "./src/views/Marketing/components/Courses/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Courses", function() { return _Courses__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hero */ "./src/views/Marketing/components/Hero/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _Hero__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _PromoNumbers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PromoNumbers */ "./src/views/Marketing/components/PromoNumbers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PromoNumbers", function() { return _PromoNumbers__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Reviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Reviews */ "./src/views/Marketing/components/Reviews/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reviews", function() { return _Reviews__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Subscription */ "./src/views/Marketing/components/Subscription/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return _Subscription__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _PressRelease__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PressRelease */ "./src/views/Marketing/components/PressRelease/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PressRelease", function() { return _PressRelease__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./src/views/Marketing/data/index.js":
/*!*******************************************!*\
  !*** ./src/views/Marketing/data/index.js ***!
  \*******************************************/
/*! exports provided: promoNumbers, courseCategories, popularCourses, reviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promoNumbers", function() { return promoNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courseCategories", function() { return courseCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popularCourses", function() { return popularCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviews", function() { return reviews; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);

const promoNumbers = [{
  color: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blue,
  icon: 'fas fa-graduation-cap',
  title: '1000+',
  subtitle: 'Online Courses',
  description: 'Choose from over 1000+ online video courses.'
}, {
  color: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].purple,
  icon: 'fas fa-book',
  title: '800+',
  subtitle: 'Expert Instructors',
  description: 'Expert instructors to make sure courses are well.'
}, {
  color: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].pink,
  icon: 'fas fa-user-graduate',
  title: '100K+',
  subtitle: 'Active Students',
  description: '100K+ active students arround the world.'
}, {
  color: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].indigo,
  icon: 'fas fa-gift',
  title: '400+',
  subtitle: 'Free Resources',
  description: 'Free resources for all students arround the world.'
}];
const courseCategories = [{
  color: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blue,
  icon: 'fas fa-pen-nib',
  title: 'Web Design',
  subtitle: 'Choose thousands of web design online course.'
}, {
  color: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].purple,
  icon: 'fas fa-book-open',
  title: 'Business Analytics',
  subtitle: 'Choose thousands of business analytics online course.'
}, {
  color: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].amber,
  icon: 'fas fa-camera-retro',
  title: 'Photography',
  subtitle: 'Choose thousands of photography online course.'
}, {
  color: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].indigo,
  icon: 'fas fa-video',
  title: 'Video Creating',
  subtitle: 'Choose thousands of video creating online course.'
}, {
  color: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].pink,
  icon: 'fas fa-heartbeat',
  title: 'Health & Fitness',
  subtitle: 'Choose thousands of health & fitness online course.'
}, {
  color: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].green,
  icon: 'fas fa-bullhorn',
  title: 'Marketing',
  subtitle: 'Choose thousands of marketing online course.'
}, {
  color: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].deepOrange,
  icon: 'fas fa-funnel-dollar',
  title: 'Finances & Sales',
  subtitle: 'Choose thousands of finaces & sales online course.'
}, {
  color: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].red,
  icon: 'fas fa-paint-brush',
  title: 'Graphic Design',
  subtitle: 'Choose thousands of graphic design online course.'
}];
const popularCourses = [{
  image: {
    src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/coworking/place1@2x.jpg 2x'
  },
  title: 'UX & Web Design',
  address: 'Michael Corse',
  price: '$59 / month',
  reviews: [{
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x'
    },
    authorName: 'Veronica Adams'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x'
    },
    authorName: 'Akachi Luccini'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x'
    },
    authorName: 'Jack Smith'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x'
    },
    authorName: 'Kate Segelson'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/alex-johnson.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/alex-johnson@2x.jpg 2x'
    },
    authorName: 'Alex Johnson'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/valeria-kogan.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/valeria-kogan@2x.jpg 2x'
    },
    authorName: 'Valeria Kogan'
  }],
  score: '5.0',
  reviewCount: 28
}, {
  image: {
    src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2@2x.jpg 2x'
  },
  title: 'Principles of Software Engineering',
  address: 'Jhon Smith',
  price: '$69 / month',
  reviews: [{
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x'
    },
    authorName: 'Veronica Adams'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x'
    },
    authorName: 'Akachi Luccini'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x'
    },
    authorName: 'Jack Smith'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x'
    },
    authorName: 'Kate Segelson'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/alex-johnson.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/alex-johnson@2x.jpg 2x'
    },
    authorName: 'Alex Johnson'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/valeria-kogan.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/valeria-kogan@2x.jpg 2x'
    },
    authorName: 'Valeria Kogan'
  }],
  score: '4.9',
  reviewCount: 38
}, {
  image: {
    src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3@2x.jpg 2x'
  },
  title: 'Graphic Design for Beginners',
  address: 'Nicol Adams',
  price: '$49 / month',
  reviews: [{
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x'
    },
    authorName: 'Veronica Adams'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x'
    },
    authorName: 'Akachi Luccini'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x'
    },
    authorName: 'Jack Smith'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x'
    },
    authorName: 'Kate Segelson'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/alex-johnson.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/alex-johnson@2x.jpg 2x'
    },
    authorName: 'Alex Johnson'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/valeria-kogan.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/valeria-kogan@2x.jpg 2x'
    },
    authorName: 'Valeria Kogan'
  }],
  score: '5.0',
  reviewCount: 18
}, {
  image: {
    src: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1@2x.jpg 2x'
  },
  title: 'Marketing VS Sales',
  address: 'Joshua Karamaki',
  price: '$59 / month',
  reviews: [{
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x'
    },
    authorName: 'Veronica Adams'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x'
    },
    authorName: 'Akachi Luccini'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x'
    },
    authorName: 'Jack Smith'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x'
    },
    authorName: 'Kate Segelson'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/alex-johnson.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/alex-johnson@2x.jpg 2x'
    },
    authorName: 'Alex Johnson'
  }, {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/valeria-kogan.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/valeria-kogan@2x.jpg 2x'
    },
    authorName: 'Valeria Kogan'
  }],
  score: '4.8',
  reviewCount: 24
}];
const reviews = [{
  authorPhoto: {
    src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x'
  },
  authorName: 'Veronica Adams',
  authorOccupation: 'Growth Marketer, Crealytics',
  feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}, {
  authorPhoto: {
    src: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x'
  },
  authorName: 'Akachi Luccini',
  authorOccupation: 'Lead Generation, Alternative Capital',
  feedback: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}, {
  authorPhoto: {
    src: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x'
  },
  authorName: 'Jack Smith',
  authorOccupation: 'Head of Operations, Parkfield Commerce',
  feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}];

/***/ }),

/***/ "./src/views/Marketing/index.js":
/*!**************************************!*\
  !*** ./src/views/Marketing/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Marketing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Marketing */ "./src/views/Marketing/Marketing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Marketing__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/NoSsr":
/*!******************************************!*\
  !*** external "@material-ui/core/NoSsr" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/NoSsr");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/Zoom":
/*!*****************************************!*\
  !*** external "@material-ui/core/Zoom" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Zoom");

/***/ }),

/***/ "@material-ui/core/colors/blue":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/blue" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/blue");

/***/ }),

/***/ "@material-ui/core/colors/purple":
/*!**************************************************!*\
  !*** external "@material-ui/core/colors/purple" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/purple");

/***/ }),

/***/ "@material-ui/core/colors/yellow":
/*!**************************************************!*\
  !*** external "@material-ui/core/colors/yellow" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/yellow");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/makeStyles":
/*!******************************************************!*\
  !*** external "@material-ui/core/styles/makeStyles" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/makeStyles");

/***/ }),

/***/ "@material-ui/core/styles/useTheme":
/*!****************************************************!*\
  !*** external "@material-ui/core/styles/useTheme" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/useTheme");

/***/ }),

/***/ "@material-ui/core/useMediaQuery":
/*!**************************************************!*\
  !*** external "@material-ui/core/useMediaQuery" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "@material-ui/core/useScrollTrigger":
/*!*****************************************************!*\
  !*** external "@material-ui/core/useScrollTrigger" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useScrollTrigger");

/***/ }),

/***/ "@material-ui/icons/ArrowRightAlt":
/*!***************************************************!*\
  !*** external "@material-ui/icons/ArrowRightAlt" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowRightAlt");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowUp":
/*!*****************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowUp" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowUp");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "jarallax":
/*!***************************!*\
  !*** external "jarallax" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jarallax");

/***/ }),

/***/ "leaflet":
/*!**************************!*\
  !*** external "leaflet" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("leaflet");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ "react-lazy-load-image-component":
/*!**************************************************!*\
  !*** external "react-lazy-load-image-component" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ "react-leaflet":
/*!********************************!*\
  !*** external "react-leaflet" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-leaflet");

/***/ }),

/***/ "react-typed":
/*!******************************!*\
  !*** external "react-typed" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typed");

/***/ }),

/***/ "react-visibility-sensor":
/*!******************************************!*\
  !*** external "react-visibility-sensor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "validate.js":
/*!******************************!*\
  !*** external "validate.js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validate.js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWFya2V0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL0NlcnRpZmljYXRlLXBhZ2UvY2VydGlmaWNhdGUuanBnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2xlYWZsZXQtYXNzZXRzL21hcmtlci1pY29uLTJ4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9sZWFmbGV0LWFzc2V0cy9tYXJrZXItaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGVhZmxldC1hc3NldHMvbWFya2VyLXNoYWRvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvRGFya01vZGVUb2dnbGVyL0RhcmtNb2RlVG9nZ2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9EYXJrTW9kZVRvZ2dsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvSWNvbi9JY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL0ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvSWNvblRleHQvSWNvblRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvSWNvblRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvSW1hZ2UvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvSW1hZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvTGVhcm5Nb3JlTGluay9MZWFybk1vcmVMaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL0xlYXJuTW9yZUxpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvU2Nyb2xsVG9wL1Njcm9sbFRvcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9TY3JvbGxUb3AvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL0NvdW50VXBOdW1iZXIvQ291bnRVcE51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvQ291bnRVcE51bWJlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvRGVzY3JpcHRpb25DdGEvRGVzY3JpcHRpb25DdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL0Rlc2NyaXB0aW9uQ3RhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9JY29uQWx0ZXJuYXRlL0ljb25BbHRlcm5hdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL0ljb25BbHRlcm5hdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL092ZXJsYXBlZEltYWdlcy9PdmVybGFwZWRJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL092ZXJsYXBlZEltYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU2VjdGlvbkhlYWRlci9TZWN0aW9uSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9TZWN0aW9uSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Td2lwZXJJbWFnZS9Td2lwZXJJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU3dpcGVySW1hZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1N3aXBlck51bWJlci9Td2lwZXJOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1N3aXBlck51bWJlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvVHlwZWRUZXh0L1R5cGVkVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvVHlwZWRUZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQWNjb3JkaW9uL0FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQWNjb3JkaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkQmFzZS9DYXJkQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRDYXRlZ29yeS9DYXJkQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRDYXRlZ29yeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZENhdGVnb3J5TGluay9DYXJkQ2F0ZWdvcnlMaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkQ2F0ZWdvcnlMaW5rL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkSm9iL0NhcmRKb2IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2JDb21wYW55L0NhcmRKb2JDb21wYW55LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkSm9iQ29tcGFueS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYk1pbmltYWwvQ2FyZEpvYk1pbmltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2JNaW5pbWFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkSm9iVGFnL0NhcmRKb2JUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2JUYWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRQcmljaW5nU3RhbmRhcmQvQ2FyZFByaWNpbmdTdGFuZGFyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFByaWNpbmdTdGFuZGFyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFByb2R1Y3QvQ2FyZFByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRQcm9kdWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkUHJvbW8vQ2FyZFByb21vLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkUHJvbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRSZXZpZXcvQ2FyZFJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFJldmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ29udGFjdEZvcm0vQ29udGFjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NvbnRhY3RGb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9EZXNjcmlwdGlvbkxpc3RJY29uL0Rlc2NyaXB0aW9uTGlzdEljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0Rlc2NyaXB0aW9uTGlzdEljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9CYWNrZ3JvdW5kL0hlcm9CYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9IZXJvQmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvSGVyb1NoYXBlZC9IZXJvU2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9IZXJvU2hhcGVkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9IZXJvU2lkZUltYWdlL0hlcm9TaWRlSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9TaWRlSW1hZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9TaW1wbGVCYWNrZ3JvdW5kL0hlcm9TaW1wbGVCYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9IZXJvU2ltcGxlQmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvTWFwL01hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvTWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9QYXJhbGxheC9QYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUGFyYWxsYXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL1NlY3Rpb24vU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvU2VjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvU2VjdGlvbkFsdGVybmF0ZS9TZWN0aW9uQWx0ZXJuYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9TZWN0aW9uQWx0ZXJuYXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b2FzdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvQXBpUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvYXBwQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9BcGlIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9FcnJvckhhbmRsZXJIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9TdWNjZXNzSGFuZGxlckhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9NYXJrZXRpbmcvTWFya2V0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9NYXJrZXRpbmcvY29tcG9uZW50cy9DYXRlZ29yaWVzL0NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL01hcmtldGluZy9jb21wb25lbnRzL0NhdGVnb3JpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL01hcmtldGluZy9jb21wb25lbnRzL0NvdXJzZXMvQ291cnNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvTWFya2V0aW5nL2NvbXBvbmVudHMvQ291cnNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvTWFya2V0aW5nL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9FeHBvL2NvbXBvbmVudHMvSGVyby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvTWFya2V0aW5nL2NvbXBvbmVudHMvUHJlc3NSZWxlYXNlL1ByZXNzUmVsZWFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvTWFya2V0aW5nL2NvbXBvbmVudHMvUHJlc3NSZWxlYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9NYXJrZXRpbmcvY29tcG9uZW50cy9Qcm9tb051bWJlcnMvUHJvbW9OdW1iZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9FeHBvL2NvbXBvbmVudHMvUHJvbW9OdW1iZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9NYXJrZXRpbmcvY29tcG9uZW50cy9SZXZpZXdzL1Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0V4cG8vY29tcG9uZW50cy9SZXZpZXdzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9NYXJrZXRpbmcvY29tcG9uZW50cy9TdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9NYXJrZXRpbmcvY29tcG9uZW50cy9TdWJzY3JpcHRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL01hcmtldGluZy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9NYXJrZXRpbmcvZGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvTWFya2V0aW5nL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL05vU3NyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvWm9vbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3B1cnBsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy95ZWxsb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy91c2VUaGVtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHRBbHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93VXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsc3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqYXJhbGxheFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxlYWZsZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3VudHVwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaHRtbC1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbGVhZmxldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXR5cGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2VldGFsZXJ0MlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3aXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZhbGlkYXRlLmpzXCIiXSwibmFtZXMiOlsiZ2V0U3RhdGljUHJvcHMiLCJyZXNwb25zZUNvdXJzZSIsIkFwaUhlbHBlciIsIkZldGNoRnJvbVNlcnZlciIsIkFwaVJvdXRlcyIsIkNPVVJTRUxJU1QiLCJzZXJ2aWNlIiwidXJsIiwibWV0aG9kIiwiYXV0aGVudGljYXRlIiwidW5kZWZpbmVkIiwiY291cnNlRGF0YSIsImlzRXJyb3IiLCJkYXRhIiwicmVzcG9uc2VNYXJrZXRpbmciLCJGUk9OVF9QQUdFX0RBVEEiLCJtYXJrZXREYXRhIiwicHJvcHMiLCJyZXZhbGlkYXRlIiwiTWFya2V0aW5nIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsInBvc2l0aW9uIiwiYm9yZGVyIiwid2lkdGgiLCJzcGFjaW5nIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJwYWxldHRlIiwiZGl2aWRlciIsImJhY2tncm91bmRDb2xvciIsImJyZWFrcG9pbnRzIiwidXAiLCJib3JkZXJEYXJrIiwiY29sb3JzIiwiaW5kaWdvIiwibW9kZVRvZ2dsZXIiLCJ0b3AiLCJsZWZ0IiwidGV4dCIsInByaW1hcnkiLCJ0cmFuc2l0aW9uIiwiY3Vyc29yIiwibW9kZVRvZ2dsZXJEYXJrIiwidHJhbnNmb3JtIiwibW9kZVRvZ2dsZXJJY29uIiwiZmlsbCIsInNlY29uZGFyeSIsIm1haW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiRGFya01vZGVUb2dnbGVyIiwidGhlbWVNb2RlIiwib25DbGljayIsImNsYXNzTmFtZSIsInJlc3QiLCJjbGFzc2VzIiwiY2xzeCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZXh0cmFTbWFsbCIsImZvbnRTaXplIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsIkljb24iLCJmb250SWNvbkNsYXNzIiwic2l6ZSIsImZvbnRJY29uQ29sb3IiLCJjb2xvciIsImRlZmF1bHRQcm9wcyIsIm9uZU9mIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYWxpZ25JdGVtcyIsInRpdGxlIiwiSWNvblRleHQiLCJpY29uUHJvcHMiLCJ0eXBvZ3JhcGh5UHJvcHMiLCJvYmplY3QiLCJkQmxvY2siLCJJbWFnZSIsInNyYyIsInNyY1NldCIsImFsdCIsImxhenkiLCJsYXp5UHJvcHMiLCJib29sIiwidGV4dERlY29yYXRpb24iLCJmb250V2VpZ2h0IiwiaWNvbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiTGVhcm5Nb3JlTGluayIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJocmVmIiwiY2hpbGRyZW4iLCJib3R0b20iLCJyaWdodCIsIlNjcm9sbFRvcCIsInRyaWdnZXIiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwiZGlzYWJsZUh5c3RlcmVzaXMiLCJ0aHJlc2hvbGQiLCJoYW5kbGVDbGljayIsIndpbmRvdyIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJDb3VudFVwTnVtYmVyIiwic3RhcnQiLCJlbmQiLCJzdWZmaXgiLCJwcmVmaXgiLCJsYWJlbCIsInRleHRDb2xvciIsImxhYmVsQ29sb3IiLCJ2aXNpYmlsaXR5U2Vuc29yUHJvcHMiLCJ3cmFwcGVyUHJvcHMiLCJjb3VudFdyYXBwZXJQcm9wcyIsImNvdW50TnVtYmVyUHJvcHMiLCJsYWJlbFByb3BzIiwidmlld1BvcnRFbnRlcmVkIiwic2V0Vmlld1BvcnRFbnRlcmVkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldFZpZXdQb3J0VmlzaWJpbGl0eSIsImlzVmlzaWJsZSIsIm51bWJlciIsIkRlc2NyaXB0aW9uQ3RhIiwic3VidGl0bGUiLCJwcmltYXJ5Q3RhIiwic2Vjb25kYXJ5Q3RhIiwiYWxpZ24iLCJ0aXRsZVByb3BzIiwic3VidGl0bGVQcm9wcyIsImJ1dHRvbkdyb3VwUHJvcHMiLCJwcmltYXJ5QnV0dG9uV3JhcHBlclByb3BzIiwic2Vjb25kYXJ5QnV0dG9uV3JhcHBlclByb3BzIiwidXNlVGhlbWUiLCJpc1NtIiwidXNlTWVkaWFRdWVyeSIsImRlZmF1bHRNYXRjaGVzIiwianVzdGlmeUdyaWQiLCJub2RlIiwiY2lyY2xlIiwic3F1YXJlIiwiSWNvbkFsdGVybmF0ZSIsInNoYXBlIiwidXNlQmFja2dyb3VuZFN0eWxlcyIsImJhY2tncm91bmRDbGFzc2VzIiwicmVkIiwicGluayIsInB1cnBsZSIsImRlZXBQdXJwbGUiLCJibHVlIiwibGlnaHRCbHVlIiwiY3lhbiIsInRlYWwiLCJncmVlbiIsImxpZ2h0R3JlZW4iLCJsaW1lIiwieWVsbG93IiwiYW1iZXIiLCJvcmFuZ2UiLCJkZWVwT3JhbmdlIiwiYnJvd24iLCJncmV5IiwiYmx1ZUdyZXkiLCJpbWFnZUdyaWQiLCJib3hTaGFkb3ciLCJwYXBlciIsIm1heFdpZHRoIiwidmVydGljYWxBbGlnbiIsImJvcmRlclN0eWxlIiwiaW1hZ2VHcmlkRmlyc3RJdGVtIiwiaW1hZ2VHcmlkTGFzdEl0ZW0iLCJmbG9hdCIsIk92ZXJsYXBlZEltYWdlcyIsImltYWdlMSIsImltYWdlMiIsImltYWdlMyIsInNyY3NldCIsIm1hcmdpbkJvdHRvbSIsImRpc2FibGVHdXR0ZXIiLCJjdGEiLCJTZWN0aW9uSGVhZGVyIiwidGl0bGVWYXJpYW50Iiwic3VidGl0bGVWYXJpYW50Iiwic3VidGl0bGVDb2xvciIsIm92ZXJsaW5lIiwiZmFkZVVwIiwiY3RhR3JvdXAiLCJ0aXRsZUNsYXNzZXMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwiekluZGV4Iiwic3dpcGVyU2xpZGUiLCJzd2lwZXJOYXYiLCJqdXN0aWZ5Q29udGVudCIsImNhcmRTaGFkb3ciLCJpbWFnZSIsIm9iamVjdEZpdCIsIlN3aXBlckltYWdlIiwiaXRlbXMiLCJuYXZpZ2F0aW9uQnV0dG9uU3R5bGUiLCJpbWFnZUNsYXNzTmFtZSIsInVzZUVmZmVjdCIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwicGFkZGluZ0JvdHRvbSIsIlN3aXBlck51bWJlciIsIm51bWJlclByb3BzIiwiaXNNZCIsInBhZ2luYXRpb24iLCJlbCIsInR5cGUiLCJjbGlja2FibGUiLCJhdXRvcGxheSIsImRlbGF5IiwiVHlwZWRUZXh0IiwidHlwZWRQcm9wcyIsImZsZXhEaXJlY3Rpb24iLCJleHBhbmRPcGVuIiwiZGFyayIsImxpc3RJdGVtIiwiQWNjb3JkaW9uIiwidGV4dFByb3BzIiwibGlua1Byb3BzIiwiaWQiLCJsaW5rIiwiYXJyYXkiLCJ3aXRoU2hhZG93Iiwibm9TaGFkb3ciLCJub0JvcmRlciIsIm5vQmciLCJsaWZ0VXAiLCJjb250ZW50IiwiY2VudGVyIiwiQ2FyZEJhc2UiLCJjYXJkQ29udGVudFByb3BzIiwiQ2FyZENhdGVnb3J5IiwiZm9udFdlaWdodDcwMCIsImhlYWRpbmciLCJjYXRlZ29yeUljb25CdXR0b24iLCJzdWJoZWFkaW5nIiwiQ2FyZENhdGVnb3J5TGluayIsImljb25BbHRlcm5hdGVQcm9wcyIsImRvdCIsIm1hcmdpblJpZ2h0IiwiZG90QmlnIiwiZG90U21hbGwiLCJqb2JUaXRsZSIsImRvdE1hcmdpbiIsIm1hcmdpbiIsIkNhcmRKb2IiLCJiYWRnZUNvbG9yIiwiYmFkZ2VUaXRsZSIsImpvYkxvY2F0aW9uIiwiam9iVHlwZSIsImpvYkRhdGUiLCJjb21wYW55TG9nbyIsImNvbXBhbnlOYW1lIiwiY29tcGFueUF2YXRhciIsIkNhcmRKb2JDb21wYW55Iiwiam9ic0NvdW50IiwiY29tcGFueUluZm8iLCJjYXJkSm9iTWluaW1hbEJvZHkiLCJDYXJkSm9iTWluaW1hbCIsInNob3dBcnJvdyIsImJvcmRlclJpZ2h0IiwidGFnIiwidGV4dFdoaXRlIiwiQ2FyZEpvYlRhZyIsImZlYXR1cmVDaGVjayIsIkNhcmRQcmljaW5nU3RhbmRhcmQiLCJwcmljZUNvbXBvbmVudCIsImZlYXR1cmVDaGVja0NvbXBvbmVudCIsImZlYXR1cmVzIiwiZGlzY2xhaW1lciIsImRpc2NsYWltZXJQcm9wcyIsImZlYXR1cmVUaXRsZVByb3BzIiwibWVkaWEiLCJDYXJkUHJvZHVjdCIsIm1lZGlhQ2xhc3NOYW1lIiwiY2FyZENvbnRlbnQiLCJtZWRpYUNvbnRlbnQiLCJhbnkiLCJ0ZXh0Qmx1ZSIsImltZ0ZsdWlkIiwicGJfMCIsInBiX3B0XzAiLCJwYWRkaW5nVG9wIiwiQ2FyZFByb21vIiwidGl0bGVDb2xvciIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25Qcm9wcyIsIkNhcmRSZXZpZXciLCJhdXRob3JQaG90byIsImF1dGhvck5hbWUiLCJhdXRob3JUaXRsZSIsInRleHRWYXJpYW50IiwibGlzdEl0ZW1QcmltYXJ5VHlwb2dyYXBoeVByb3BzIiwibGlzdEl0ZW1TZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHMiLCJzY2hlbWEiLCJmdWxsbmFtZSIsInByZXNlbmNlIiwiYWxsb3dFbXB0eSIsIm1lc3NhZ2UiLCJtYXhpbXVtIiwiZW1haWwiLCJDb250YWN0Rm9ybSIsImZvcm1TdGF0ZSIsInNldEZvcm1TdGF0ZSIsImlzVmFsaWQiLCJ2YWx1ZXMiLCJ0b3VjaGVkIiwiZXJyb3JzIiwidmFsaWRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInBlcnNpc3QiLCJ0YXJnZXQiLCJuYW1lIiwiY2hlY2tlZCIsInZhbHVlIiwiaGFzRXJyb3IiLCJmaWVsZCIsIkRlc2NyaXB0aW9uTGlzdEljb24iLCJncmlkSnVzdGlmeSIsIm92ZXJmbG93IiwiY29sb3JEZWZhdWx0IiwiaGVyb1dyYXBwZXIiLCJoZXJvQ292ZXIiLCJvcGFjaXR5IiwiaGVyb0JnIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0Iiwibm9Db3Zlck9wYWNpdHkiLCJIZXJvQmFja2dyb3VuZCIsImRpc2JhbGVDb3Zlck9wYWNpdHkiLCJiYWNrZ3JvdW5kSW1nIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiY29udGVudFNlY3Rpb25DbGFzc05hbWUiLCJ1c2VDdXN0b21TdHlsZXMiLCJjb3ZlckJnIiwiYmFja2dyb3VuZEltYWdlIiwiY3VzdG9tQ2xhc3NlcyIsImhlcm8iLCJsYXlvdXQiLCJjb250ZW50V2lkdGgiLCJkb3duIiwiaGVyb0xlZnRTaWRlIiwiaGVyb1JpZ2h0U2lkZSIsImZsZXgiLCJoZXJvSW1hZ2VDb250YWluZXIiLCJoZXJvSW1hZ2UiLCJzaGFwZU91dHNpZGUiLCJjbGlwUGF0aCIsIkhlcm9TaGFwZWQiLCJsZWZ0U2lkZSIsInJpZ2h0U2lkZSIsImltYWdlV3JhcHBlciIsIm1heEhlaWdodCIsImNvdmVyIiwiSGVyb1NpZGVJbWFnZSIsImltYWdlU3JjIiwiaW1hZ2VTcmNTZXQiLCJyZXZlcnNlIiwiSGVyb1NpbXBsZUJhY2tncm91bmQiLCJ1c2VCYWNrZ3JvdW5kIiwiTWFwIiwiem9vbSIsInBpbnMiLCJMIiwicmVxdWlyZSIsIkRlZmF1bHQiLCJwcm90b3R5cGUiLCJfZ2V0SWNvblVybCIsIm1hcmtlckljb24yeCIsIm1hcmtlckljb24iLCJtYXJrZXJTaGFkb3ciLCJtZXJnZU9wdGlvbnMiLCJpY29uUmV0aW5hVXJsIiwiZGVmYXVsdCIsImljb25VcmwiLCJzaGFkb3dVcmwiLCJSZWFjdE1hcCIsIlRpbGVMYXllciIsIk1hcmtlciIsImkiLCJsb2NhdGlvbiIsInkiLCJ4IiwiZm9udEZhbWlseSIsIlBhcmFsbGF4IiwiamFyYWxsYXhFbGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImphcmFsbGF4Iiwic3BlZWQiLCJmdWxsV2lkdGgiLCJkaXNhYmxlUGFkZGluZyIsIm5hcnJvdyIsIlNlY3Rpb24iLCJhbHRlcm5hdGUiLCJpbm5lciIsImlubmVyTmFycm93ZWQiLCJTZWN0aW9uQWx0ZXJuYXRlIiwiaW5uZXJuYXJyb3dlZCIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJTSUdOVVAiLCJMT0dJTiIsIlJFU0VUUEFTU1dPUkQiLCJGT1JHT1RQQVNTV09SRCIsIkdFVFVTRVJERVRBSUxTIiwiVVNFUkRFVEFJTFNVUERBVEUiLCJVU0VSUEFTU1dPUkRVUERBVEUiLCJVU0VSRk9SR09UUEFTU1dPUkRVUERBVEUiLCJDT1VSU0VERVRBSUxTIiwiQ09VUlNFREVUQUlMU0FVVEgiLCJBUFBMWUNPVVBPTiIsIk1BS0VQQVlNRU5UIiwiUEFZTUVOVEhJU1RPUlkiLCJQVVJDSEFTRURDT1VSU0UiLCJDRVJUSUZJQ0FURVJFUVVFU1QiLCJCTE9HTElTVCIsIkJMT0dERVRBSUwiLCJHRVRVTklWRVJTSVRZIiwiR0VUQ09SUE9SQVRFIiwiQ09OVEFDVF9VUyIsIlBSRVNTX1JFTEVBU0UiLCJQUkVTU19ERVRBSUxTIiwiR0VUX0xNU0RBVEFfQ09VUlNFIiwiR0VUX0xNU0RBVEFfQ0FURUdPUlkiLCJORVdTTEVUVEVSU1VCU0NSSUJFIiwiR0VUU09DSUFMTElOS0VTIiwiR0VUUEFZTUVOVENFUlRJRklDQVRFREVUQUlMUyIsIk1BS0VQQVlNRU5UQ0VSVElGSUNBVEUiLCJDRVJUSUZJQ0FURV9EQVRBIiwiR0VUX1RFQU1fREFUQSIsIkFwcENvbmZpZyIsIkFQSV9FTkRQT0lOVCIsInByb2Nlc3MiLCJJTUFHRV9VUkwiLCJTSVRFX05BTUUiLCJDYW5jZWxUb2tlbiIsIkF4aW9zIiwiY2FuY2VsIiwiY29uc3RydWN0b3IiLCJob3N0IiwiX3BvcnRhbEdhdGV3YXkiLCJ2ZXJzaW9uIiwiX2FwaVZlcnNpb24iLCJlcnIiLCJzb3VyY2UiLCJjYW5jZWxUb2tlbiIsInRva2VuIiwiZW5kcG9pbnQiLCJhdXRoZW50aWNhdGVkIiwiYXV0aFRva2VuIiwicXVlcnlPcHRpb25zIiwiYm9keSIsInJlc3BvbnNlVHlwZSIsImhlYWRlcnMiLCJzdG9yYWdlU2Vzc2lvbiIsIkF1dGhvcml6YXRpb24iLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlIiwicmVxdWVzdCIsInBhcmFtcyIsImV4ZWN1dG9yIiwiYyIsIm9rIiwic3RhdHVzIiwiZXJyb3JPYmplY3QiLCJjb2RlIiwiU3VjY2Vzc0hhbmRsZXJIZWxwZXIiLCJpc0NhbmNlbCIsImVycm9yIiwibWVzc2FnZXMiLCJlcnJvckhlbHBlciIsIkVycm9ySGFuZGxlckhlbHBlciIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJyYXdFcnJvciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwic2V0RXJyb3IiLCJyYXdEYXRhIiwic2V0U3VjY2Nlc3MiLCJjb3Vyc2VzU2VjdGlvbiIsInBhZGRpbmdCb3R0b20wIiwic2VjdGlvbkFsdGVybmF0ZSIsInRleHRDZW50ZXIiLCJ0ZXh0QWxpZ24iLCJhZmZpbGF0ZUJsb2NrIiwiY29tbW9uQnRuIiwibWluV2lkdGgiLCJ3aGl0ZUJ0biIsImNhdGVnb3JpZXNXcmFwcGVyIiwiYWZmaWxpYXRlV3JhcHBlciIsInN1YnNjcmlwdGlvbldyYXBwZXIiLCJjZXJ0aWZpY2F0ZV9zZWMiLCJtaW5IZWlnaHQiLCJjZXJ0aWZpY2F0ZV9ib3giLCJpbWciLCJoZWFkaW5nMSIsImxldHRlclNwYWNpbmciLCJsYWJlbGV4dHJhIiwiaGVhZGluZzMiLCJoZWFkaW5nNCIsImhlYWRpbmc1IiwiZm9udFN0eWxlIiwiYm9yZGVyVG9wIiwic2VjdGlvbkhlYWRlciIsInNpZ24iLCJzaWduX2RpdiIsImJhbm5lckJvdHRvbSIsIndyYXBwZXJTZWN0aW9uIiwic2VjdGlvbldyYXBwZXIiLCJib3JkZXJCb3R0b20iLCJhbm90aGVyQ29tbW9uQnRuIiwiYmxvZ2NoYWluX2hlYWRpbmciLCJmb250U2l6ZV8xOCIsImNvbnRlbnRTZWN0aW9uIiwibGluZUhlaWdodCIsInBhZGRpbmdMZWZ0IiwiaW1hZ2VMYWJzIiwic3ViVGl0bGUiLCJibG9nRGF0YSIsInByZXNzRGF0YSIsImxvYWRlciIsInNldExvYWRlciIsImdldFRlbXBsYXRlRGF0YSIsInNldEdldFRlbXBsYXRlRGF0YSIsImNvdXJzZVRlbXBEYXRhIiwic2V0Q291cnNlVGVtcERhdGEiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyRGF0YSIsImZpbHRlciIsImNvdXJzZSIsImlzQWN0aXZlIiwiZ2V0RGF0YSIsImUiLCJ0aXRsZVNsdWciLCJwYl82MCIsImJsb2NrSW1hZ2U1Iiwib3JkZXJfc3BfMzAiLCJSZWFjdEh0bWxQYXJzZXIiLCJibG9jazUiLCJibG9jazYiLCJDYXRlZ29yaWVzIiwiX2lkIiwiY2FyZFByb2R1Y3QiLCJjb3Vyc2VDYXJkUHJpY2UiLCJjb3Vyc2VDYXJkUmV2aWV3QXZhdGFyIiwiY291cnNlQ2FyZFJldmlld1N0YXIiLCJyZXZpZXdDb3VudCIsIkNvdXJzZXMiLCJibG9nRmVhdHVyZUltYWdlIiwicHJpY2UiLCJhZGRyZXNzIiwic2VjdGlvbiIsInNlYXJjaElucHV0Q29udGFpbmVyIiwic2VhcmNoQnV0dG9uIiwiSGVybyIsIlByZXNzUmVsZWFzZSIsIlByb21vTnVtYmVycyIsImJsb2NrVGl0bGUxIiwiYmxvY2tUaXRsZTIiLCJibG9ja1RpdGxlNCIsImJsb2NrVGl0bGUzIiwiYmxvY2sxIiwiYmxvY2tJbWFnZTEiLCJibG9ja1RpdGxlNiIsImJsb2NrVGl0bGU1IiwiYmxvY2syIiwiYmxvY2tJbWFnZTIiLCJibG9ja1RpdGxlOCIsImJsb2NrVGl0bGU3IiwiYmxvY2szIiwiYmxvY2tJbWFnZTMiLCJibG9ja1RpdGxlMTAiLCJibG9ja1RpdGxlOSIsImJsb2NrNCIsImJsb2NrSW1hZ2U0Iiwic2VjdGlvbkhlYWRsaW5lU3RhcnMiLCJSZXZpZXdzIiwicmV2aWV3IiwiZmVlZGJhY2siLCJhdXRob3JPY2N1cGF0aW9uIiwiYm94U2hhZG93SGlnaGxpZ2h0Iiwic21hbGxDb21tb25CdG4iLCJjdXN0b21GaWVsZCIsImJveFNpemluZyIsImxvYWRlckNvbW1vbiIsImVycm9yVGV4dCIsIlN1YnNjcmlwdGlvbiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZmlyZSIsInNlbmRpbmciLCJibG9ja1RpdGxlMTIiLCJibG9ja1RpdGxlMTMiLCJwcm9tb051bWJlcnMiLCJjb3Vyc2VDYXRlZ29yaWVzIiwicG9wdWxhckNvdXJzZXMiLCJyZXZpZXdzIiwic2NvcmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxlQUFlQSxjQUFmLEdBQWdDO0FBQ25DO0FBQ0EsUUFBTUMsY0FBYyxHQUFHLE1BQU0sSUFBSUMsZ0RBQUosR0FBZ0JDLGVBQWhCLENB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QURmO0FBS0VnTyxZQUFVLEVBQUUsZ0JBTGQ7QUFNRWlULGtCQUFnQixFQUFFLHNDQU5wQjtBQU9FRCxVQUFRLEVBQ047QUFSSixDQVhxQixFQXFCckI7QUFDRWpULGFBQVcsRUFBRTtBQUNYaE8sT0FBRyxFQUFFLDJFQURNO0FBRVhDLFVBQU0sRUFBRTtBQUZHLEdBRGY7QUFLRWdPLFlBQVUsRUFBRSxZQUxkO0FBTUVpVCxrQkFBZ0IsRUFBRSx3Q0FOcEI7QUFPRUQsVUFBUSxFQUNOO0FBUkosQ0FyQnFCLENBQWhCLEM7Ozs7Ozs7Ozs7OztBQ25UUDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvbWFya2V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9tYXJrZXRpbmcuanNcIik7XG4iLCIvKipcclxuICogQ2F1dGlvbjogQ29uc2lkZXIgdGhpcyBmaWxlIHdoZW4gdXNpbmcgTmV4dEpTIG9yIEdhdHNieUpTXHJcbiAqXHJcbiAqIFlvdSBtYXkgZGVsZXRlIHRoaXMgZmlsZSBhbmQgaXRzIG9jY3VycmVuY2VzIGZyb20gdGhlIHByb2plY3QgZmlsZXN5c3RlbSBpZiB5b3UgYXJlIHVzaW5nIHJlYWN0LXNjcmlwdHNcclxuICovXHJcbmltcG9ydCBNYXJrZXRpbmcgZnJvbSAndmlld3MvTWFya2V0aW5nJztcclxuaW1wb3J0IHsgQXBpSGVscGVyIH0gZnJvbSAnaGVscGVyJ1xyXG5pbXBvcnQgeyBBcGlSb3V0ZXMgfSBmcm9tICdjb25maWcnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgLy8gRm9yIEdldCBDT1VSU0UgRGF0YVxyXG4gICAgY29uc3QgcmVzcG9uc2VDb3Vyc2UgPSBhd2FpdCBuZXcgQXBpSGVscGVyKCkuRmV0Y2hGcm9tU2VydmVyKFxyXG4gICAgICAgIEFwaVJvdXRlcy5DT1VSU0VMSVNULnNlcnZpY2UsXHJcbiAgICAgICAgYCR7QXBpUm91dGVzLkNPVVJTRUxJU1QudXJsfT9saW1pdD0kezR9JmlzQWN0aXZlPSR7XCJ0cnVlXCJ9YCxcclxuICAgICAgICBBcGlSb3V0ZXMuQ09VUlNFTElTVC5tZXRob2QsXHJcbiAgICAgICAgQXBpUm91dGVzLkNPVVJTRUxJU1QuYXV0aGVudGljYXRlLFxyXG4gICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgdW5kZWZpbmVkXHJcbiAgICApO1xyXG4gICAgbGV0IGNvdXJzZURhdGEgPSBbXTtcclxuICAgIGlmIChyZXNwb25zZUNvdXJzZSAmJiAhcmVzcG9uc2VDb3Vyc2UuaXNFcnJvcikge1xyXG4gICAgICAgIGNvdXJzZURhdGEgPSByZXNwb25zZUNvdXJzZS5kYXRhLmRhdGE7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIEZvciBHZXQgbWFya2V0aW5nIGRhdGFcclxuICAgIGNvbnN0IHJlc3BvbnNlTWFya2V0aW5nID0gYXdhaXQgbmV3IEFwaUhlbHBlcigpLkZldGNoRnJvbVNlcnZlcihcclxuICAgICAgICBBcGlSb3V0ZXMuRlJPTlRfUEFHRV9EQVRBLnNlcnZpY2UsXHJcbiAgICAgICAgQXBpUm91dGVzLkZST05UX1BBR0VfREFUQS51cmwsXHJcbiAgICAgICAgQXBpUm91dGVzLkZST05UX1BBR0VfREFUQS5tZXRob2QsXHJcbiAgICAgICAgQXBpUm91dGVzLkZST05UX1BBR0VfREFUQS5hdXRoZW50aWNhdGUsXHJcbiAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICB1bmRlZmluZWRcclxuICAgICk7XHJcbiAgICBsZXQgbWFya2V0RGF0YSA9IFtdO1xyXG4gICAgaWYgKHJlc3BvbnNlTWFya2V0aW5nICYmICFyZXNwb25zZU1hcmtldGluZy5pc0Vycm9yKSB7XHJcbiAgICAgICAgbWFya2V0RGF0YSA9IHJlc3BvbnNlTWFya2V0aW5nLmRhdGEuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGNvdXJzZURhdGEsXHJcbiAgICAgICAgICAgIG1hcmtldERhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6IDUsXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWFya2V0aW5nO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvY2VydGlmaWNhdGUtYjgwMjIxN2YxYjM1MTNlZmZmY2QzYzkwNmZhYjQ0ZWQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFCU0NBTUFBQUFoRlhmWkFBQUM5MUJNVkVWTWFYRXplYWsyZjdJNGc3ZzNnN2N1YTVnemVLZzhoSm8zZ3JZNGc3YzNnclUwZ0xJMmZyRTBkYUF1YkpjMmdiUXdkNlF6ZUtrMmdMTXRkNXN4ZEtJdWE1ZzFmckEyZjdJeWRhTTBlNncyZnE0MWZLMDFlcW8zZ3JndWJKZ3RhNWN4ZEtJMWY3QXlkYVF5ZGFNeGM2RXViSmd2Ykprd2NaNHViWmt3Y0p3dWJaZ3ViSmN5ZHFVeWRLSXhhcGd1YkpjdGJKY3ViWmN1YkpjdmJKWXViSmN2YlprdWJKY3RiSmN0YlpjdWJKZzJmN0F1YkpjcmJaY3ViSmN1YkpjdWE1ZzNnclkwZnE4dWJKY3ViSmRFa2RFd2hzdzZpODh2aHN3dWhjc3VoTXRCak1ndGhNc3JnOHNyZ3NzNmlzOHFnY3M4aTlBOWlNWXRnOHNwZ2Nvb2dNbzdoY01uZ01vbmY4b2xmc280Z3I4a2ZjazVpTThqZk1rNGlNOGhlOGsxZnJvN2l0QWdlc2syaHM4ZWVjZ3pmTGNvZnNzZGVNZzBoYzRjZDhnMmhjc3hlTFFiZHNnWmRjZ3hlTEltZmNzemhNMHZkYTR4Z2NremhNNHhnODR3ZjhZeGdzNHVkS3N2ZmNRdWNxaFVuZFJPbWRNMWZLMHdjWjh2YjV3MGVxcFFtOU16ZUtoWG9OVmNwZFl5ZEtOV245VlpvdFZLbHRKRmpzSXdjSjFSbXM5T2xzbExtdEgvLy84K2tjOWVwZFl6ZDZkYm85VkhrTU0yZjdGSG1OQkNsTTh5ZHFWY3BOWTlocm8zZ0xNOWhMY3plYWxRbWN3M2ZhNDZmN0E4Z0xNeGM2STNlYWd5YzZGSWxkSk1sOUpTbk5SU250Tk5sOUpQbk5KRmk3NVVuTTlab2RWS2tzZzhrTTQ1amMwOWU2WkhsdEZCazg4M2diUkJoN3BEazlFd2NhQnpuNzg0ZzdkS2tjWTJpODFPbTlNN2o4NUxsYzgxaXMwOWc3UTRnclkvajlBMGVxeEttZEZGbHRCRWpjWGY2ZkZJbWRCQ2lMeEpsOUZHbE5GQmk3OHlpTXhWbmRFdmJwbzZqczc0K3Z4K3BzUFAzK28va3M1SGtjcEdtTkNqd2RaQ2tORE0zZWhZb05KRWxzK2x4Tmt4aDh4SGtzMCtqZEMxemQ1TGc2cisvdi9IMnVmejkvbzNqTTN0OC9lZHZkTS9rODlUaDYxT2lMQlNqYlprbGJhVHQ5QmZwdGRqbUwxQWljQkhqOGhHazlGQWdLMWRrTE5UakxSZWtyZENsYy9rN2ZNMGljeTB5OXRncDljNGpjMk50TTlEbGM4emljeGVYWm4zQUFBQVEzUlNUbE1BSERkVGI0eVBBK0x0bkVRbUM0TDJFbUhxQjdYQTBkMHNyNDc4eDQvWWQ1aTF6T2Z5UGtmMXNMVnE0TmgzRnZqeG9wUTIvU1ROdUZ6VXdGSXd4S2FlaklMcElCRVY5d0FBQmhWSlJFRlVlRjZzMU5keUZFY1lCZUJlb1FJaFJBa0xsUkRHcmhJZ1kzQkpMOENWZUt6dXlYRnp6amtuNVp4enp1U2NnM1BPOGNLenU3MEprTzBMZnhkVFUvL3BNOXZUdTdYZ2Y2S3FPVlRiOVg3dG9SclZFZkJmMUhUVmpaY2NyVC8yYnkxVlY5MjhZdHk5WmJWdXVjZHo5MGZyRzhEQmpsOXBWQXBiT3N0dm1NdXZWZ2FOWFNmQUFkNnBHeHB5Nnl4ZjVwaDQzcFMvNGYzdW9hR20ycmR1NzJTOXh6T3ZNeW1rWkZxL3B0RHJrOTBtaFc3ZTR6bDdITHpoeEdXUFIyMHhtU3hKL1ZxbGRHNW05WGhhVk9BMURhZHNOaDNQdTVMMk42UXRQTy8zMkpwcVFCVlZrMjBveS9QaTJzMjNXRXZ5ZkhiZTF0aGFkVlF0dHZtN0xsZjY1Z0dtWEs2N1h0dXB5b003SFFobVhkTFM4b0dXSk5lT0ozQzVmRzVYQ0VKbmtlejMvb0Zkc3ZnSjRsMkFOWndockpLay83T1NYYSszVncyV0pNbEtuR2tvYm91WWs2VDBUeVgzMGtsT1VuVEQ5SEo1cXBja0wzRVcvdzRYRjNYZDBGR3l3WFVyc3RyY2xWc3F6NVBkL3NYRll5RG5QZHJMY1FPRG1HT0s0N0laYjRDbWlibU1uK01ZUnpGWjVqZzMzWkwvRUpyV2NzekhtQU55M0FSQksvSVh0Y2lKeThWc2l0UFNkRTN1dUh4em91Z29qY1VkcjgvMzJhdG56L2V2M2YvSzV3dHB4VVRwY2FJNDV6dXNWRHBZdFppK2pnMG9VOWIzeDc0aDcrbjlBQnZZRVplS2FWcTBzaDBBdExLc0Z0cU5CZGVUME1yU3p3d2xxOSt4NnhBTzR0Z090U3piQ2pyTlFRaU52UVViVUV1YnZ6QlVlR3cyNnlEQ3NSSENvTGtUSERhN0lkT0xJVGhzL2dIdkNoc3poMkNpbUU4cGVSczQ3Y3hBTkkwbFlOQjV5MURsanBPRjBJaHpCRFBPWm5ET3FZWWJlR0tFQ2JQelduWGx1ZFBwaHc1YzJZQnE1emx3WHBoSWJPNFZEQ1owZ25QZlVPMVR3Wm9Zd0FzMkV4UENlZEF1OURBamZRVWp6SVRRYjNqTmowS0cyU2d0NkJIYVFVZFl6V3orWG1Ca3RPSHdhblhqYVNUY3d3emlCY3VNT3R3Qm1xUHJUT3hGUVIvRFJLS1BxeXVyMGFpVzZjVUxZc3g2dEJtMGpYcFIvQVVXUjZIUnE5V1ZXNk1SaElxNWpMeWpiYUNURENpanlZSk5wQ2FqZHlvYlAvZVR3MGlleEJBS2tKM2dBNUtjUWIyekJYc0lCY2tuK3hWdjhqa1pTYUVGSEUrakZFbGVBRWZheVJVME1vdU5vQm1CL0w1MEFpL0hTTElIeGNycEN2bmhTUUF1YWtLcDJDL1liQ3lsSmpYUlZ5L3ozK0t2L1JyTmNDbytXVXpsVkVoektmZm5UUW54ZU45ZldGODhmaU5DVWRTVHNhdWZhQ2hLV0luSGV5c3lnZnBJcWFnb2FrVyt2VjIwSjh1eWw2VHlOS0VaV1Y0b1JTUHlDa1dwZ09MU2JrQ09iVDhvMnI2dGxHNThIUXF1ZjZPMHY1MHRCN0pNN0Y0RU9SZDJkeC9LMHcvS0hzVmtMUGFvWXJ3Z1AveTdrcnIzU1NNQTR6aitPQmdtallreGNkSUpReVFSS2dnMnZpWDlIZGRpOVVCYjI5THJLUjdDVlZFRUVYV29qVWtYTnlmVE5ERTE0VzlnYkhKTnVoakRldHROM1p2Yk92ZE9xQ0QzSnAvOWwrL3dKRSs5UGtZR2p4L2Zxa3lzM1Myck1vek0vbzIxMDZyZk1VSU5vNmhWcXorZXUvaGQxYzR4VGcwVEFmeTVrVis0VUc2K0l0aEhUVTl3b1dteHVLTmJUZnVDU2ZvdkJDeHE3RXRIcXZZTDRTbTZGOEdWeHNTWEhNUTA3VE9pMURLdFp4aldhYUl5aTRDWFdqeFBjY1V3OFdWYk1ZWTV3eEMxbXpFeVhNSldrbGxwUmxvaStLa29xNjlzeEJUbEVsRjZhQXhZVWJqWE5saGxEWmlsRG5NNFU1U2xONWJpUnNSSG5ieDNtYmVXakVoNG1FeWl1SkRsNVhjV1ZtWDVHdk5rRmdMV1pNNXF3c29wNC9BV2ZMaFUxY1I3azFWVnZjWUNXUmtPSTZYeTVnbW5waENZSWt2enVOWXpIem9zcTJvTmsyUnRTczhraGZVT2ZISURnUjZ5c1lCYU1wbDR1RWdrMlUvb0pUczlBYVRTd21hN2RUNjlnZUFFMlpwRWpVc24yaWVKTkhlS2ZySTNFY0FHSjJaYU5nVnVDOEVCY3RDTGM1N1A1dTVsZWQ2SU9Ca0lZa3VRTXJtbWpDaHM0VmtmT2VySHFTQmtQelpsaGUwNlJzbFozek1qazJzc2NxS3dZMFJjaktLK0xXYnpkN0tpSGhrbmNzL3NpRkorVjVlWHhEMzRCOG5WdUpFcEdKTm14TjJnSDN2U3ZwN0o3MHRGK0QxRWo4cVVKRDFUa0VyQU5EMkdad1RGZy9MdWJ2bWdpQkczU092ZGxzcUZRcmtFekpDTDFyc3RsblZGUk9peFpvRERTdVhRRkhFU3dWR2xjdVFjTWIvYjQyTmdqTG93aDVNVERGRTN2TkI1cVN0UklFcmRDUUVoNnBMUFI5MmFuU1ViL3dBSWhsZEFhRE1wR2dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJrQUFBQXBDQVlBQUFEQWs0TE9BQUFGZ1VsRVFWUjRBYTFYQTVCaldSVE4yb1cxN2QzWWFadHIyOTYySFV6YkROcGpzelcyNG1SdDI4cDQ3djd6cS9iWFp0cnAvbFduWHIzMzdqM25QQ2U4NU5jeXBnU0ZkdWdDcFc1WW9EQU1SYUlNcVJpNmFLcTVFM1lxRFFPM3FBd2pWV3JEOE5jcS9SQnB5a2Q4b1pVYi9rYUp1dG93OHIxYVA5SUkwV21MS0xJc0p5djF3L2txdzlDaDJNWWRCKysxMk9ueGVlL1FNd3ZmNC9Eay9MZnAvaTRueFRYdE9vUTRwVzVBajd3cGljaTFBOWVyZEFOMk9INjR4OE9TUDlqM0Z0M2I3YVdrVGcvRm05MXNpVHJhMGY5b241c1FyOUlOZWpINkNVVVVwYXZqRk5xMUIrT2FkaHhtbmZhOFJmRW1OOFZOQXNRaFBxRjU1eEhrTXp6M2pTbUNoV1U2ZjcvWFpLTkgrOStoQkxPSFlvenVLUVB4eU1QVUtrclgvSzB1V25mRmFKR1MxUVBSdFpzT1B0cjNOc1cwdXloNk5OQ09rVTNZeitiWGJUM0k4RzN4RTVFWExYdENYYmJxd0NPOXpQUVlQUlRaNXZJRFhEN1UrdzdyRkRFb1VVZjdpYkhJUjR5NmJMVlBYcno4SlZaRXFsMTN0cnh3dWUvdURpdmQzZmtXUmJTNi9JQTJiSUQ0dWswVXBGMU44cUxsYkJsWHM0RWU3SExUZlYxajU0QVB2T0RuU2ZPV0JxdEtWdmpnTEt6RjVZZEVrNWV3UmtHbEswaTMzRW9mZmZjN0hUNTZqRDcvNlUrcUgzQ3g3U0JMTm50SDVZSVB2T0RueWZJWFpZUlZEUHFnSHRMczVBQkhEM1l6THVlc3BiN3Q3OUZZMzREak13clZyY1R1d2xUNTVZTVB2T0JuUnJKNFZYVGRObll1ZzV1Y0hMQmpFcHQzMDcwMUEzVHMrSEVhNzN1NmRUM0ZOV3dmbFk4NmVNSFBrK1l1K2k2cHpVcFJyVzdTTkRnNUpIUjRLYXBtTTVXdjJFOFRmY2IxSG9xcUhNSFUrdVdERDd6ZzU0bXo1LzJCU25pemk5VDFEZzRRUVhMVG9HTkNrYjZ0YjFOVStRQWxHcjErK2VBRHJ6aG4vdThRMllaaFFWbFo1K0NBT3RxZmJobWFVQ1MxZXpORlZtMmltRGJQbVBuZzV3bXorZ3doK29IRGNlMGVVdFE2T0dESXlSMHVVaFVzb08zdmZEbW1nT2V6SDBtWk41OXg3TUJpKytXREwxZy9lRWlVM2F2bGlkTzY3MWJrTGZ3Ync1WFYyUDhQem8weWR5NHQyLzBldTMzeFlTT01PRDhoVGY0Q3JCdEdNU29YZlBMY2hYK0owcnVTZVB3M0xaZUswanVQSmJZenJoa0gwaW83QjNrMTY0aGlHdmF3aE9LTUxrclFMeVZwWmc4ckhGVzdFMnVIT0w4ODhJQlBsTloxRlB6c3RTSk02OTRmV3I2UndwdmNKSzYwKzBIQ0lMVEJ6WkxGTmR0QXpKYW9oemU2MFQ4cUJ6eWg1WnVPZzVlN3V3UXBwb2ZFbWYyKytEWXZteVNxR0J1S2FpY0YxYmxRamh1SGR2Q0lNdnA4d2hUVGZaekk3UmxkcHd0U3pMK0YxK3drZFoyVEJPVzJnSUY4OFBCVHpEL2dwZVJFQU1FYnhuSmNhSkhOSHJwemppMGdRQ1M2aGRrRWVZdDlERi8ycVBjRUM4Uk0yOEh3bXIzc2ROeWh0MDBieUF1dDJrM2d1ZldOdGd0T0VPRkdVd2NYV05EYmROYnBnQkd4RXZLa09Rc3hpdkp4MzNpb3cwVnc1UzZTVlRycFZxMTF5c0EyUnA3Z1RmUGZrdGM2emh0WEJCQythZFJMc2hmNnNHMlJmSFBaNUVBYzRzVlo4M3lDTjAwRmsvNGtnZ3U0MFpUdklFbTVnMjRxdFU0S2pCcngvQlRUSDhpZlZBU0FHN2dLcm5XeEpEY1U3eDhYNkVjY3pobTNvNllpY3ZzTFhXZmgzQ2gxVzBrOHgwblhGKzBmRnhndDRwaHo4UXZ5cGl3Q0NGS01xWENucVhFeGpxMTBiZUgrVVVBNytuRzZtZEcvUHUwZjNMZ0ZjR3JsMnMwa05OanBtb0o5bzRCMjlDTU84ZE1UNFE1b3g4dWl0RjZmcXNySk9yOHFud05iUnp2NmhTbkc1d1ArNjRDN2g5bHAzMGhLTnRLZFdqdGRrYnVQQTE5bko3VHozelIvaWJnQVJiaGI0QWxoYXZjQmVibVRIY0ZsMmZ2WUVuVzBveDl4TXhLQlM4YnRKK0tpRWJxOXpBNFJ0aFFYRGhQYTBUOVRFZTY5Z1d1cHdjNnVCVXBocXVYZ2YrL0ZySWp3ZUhRUzQvcGR1TWU1RVJVTUhVZDl4djhaUjk4Q3hrUzRGMm4zRVVyVVoxMEVZTnc3QldtOXgxR2lQc3NpM0dnaUdSREtXUllaZlhsT04rZGZOYk0rR2dJd1lkd0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDa0FBQUFwQ0FRQUFBQUNhY2g5QUFBQ01VbEVRVlI0QWUzU2hZN2pRQkFFMEFvei9mOS9IVE16aGcxenJkS1VySmJkeCtLZDJuRDhWTnVkZnNML1RoLy8vZHlRTjJUSDZmM3kvQkdwQzM3OXJWK1MrcXFldEJPeEltTlFYTDhKQ0FyMlY0aU1RWEhHTkp4ZUNmWlhoU1JCY1FNZnZrT1dVZHRmemxMZ0FFTm1aRGNtbzJUVm10OE9TTTJlWHhCcDNEakhTTUZ1dHFTN1NibWVtekJpUit4cEtDTlVJUmtka2tZeGhBa3lHb0J2eVFGRUpFZWZ3U21tdkJmSnVKNmFLcUtXbkFrdkdaT2FaWFRVZ0ZxWVVMV05TSFVja1p1UjFISUlpbVVFeHV0Unh3ek9MUk9JRzR2S21DS1F0MzY0bUlsaFN5ekFmMW05bEhaSEpacmxBT01NenRSUmlLaW1wL3JwZEpEYzlBd3J5NXhUWkN0ZTdGSHR1Uzh3SmdlWUdyZXgyOHhOVGQwODZEaWs3dlVNc2NRT2E4eTREb0d0Q0NTa0FLbE53cGdOdHBoanJDNk1JSFVrUjZZV3h4czZTYzV4cW4yMjJtbUNSRnpJdDhsRWRLeCtpa0N0ZzkxcVMyV3B3VmZCZWxKQ2lRSnd2eml4Zkk5Y3haUVdnaVNKZWxLbndCRWxLWXRET2IyTUZiaG1VaWdiUmVRQlYwQ2c0K3FNWFN4WFN5R1VuNFViRjhsKzdxZFNHblRDMFhMQ21haElnVUhMaExPaHBWQ3R3NEN6WVh2TFFXUWJKTm14b0NzT0tBeFNnQkpubzc1YXZvbGtSdzhpSUFGY3NkYzAyZTlpeUNkOHRId21lU1NvS1Rvd0lndnNjU0daVU9BN1B1Q041YjJCWDltUU03UzB3WWhNTlU3NHpnc1BCajNIVTd3Z3VBZm54eGpGUUdCRTZwd04rR2pNRTl6SFk3ekdwOHdWeE1TaFlYOU5YdkVXRDNIYndKZjRnaU80Q0ZJUXhYU2NIMS9UTSswNGtrQmlBQUFBQUVsRlRrU3VRbUNDXCIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgY29sb3JzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbiAgYm9yZGVyOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg1KSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIGJvcmRlcjogJzNweCBzb2xpZCcsXHJcbiAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5kaXZpZGVyLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg2KSxcclxuICAgICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYm9yZGVyRGFyazoge1xyXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5pbmRpZ29bNzAwXSxcclxuICB9LFxyXG4gIG1vZGVUb2dnbGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogYC0ke3RoZW1lLnNwYWNpbmcoMS8yKX1weGAsXHJcbiAgICBsZWZ0OiBgLSR7dGhlbWUuc3BhY2luZygxLzIpfXB4YCxcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICB0cmFuc2l0aW9uOiBgdHJhbnNmb3JtIC4zcyBjdWJpYy1iZXppZXIoLjQsLjAzLDAsMSlgLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb2RlVG9nZ2xlckRhcms6IHtcclxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0aGVtZS5zcGFjaW5nKDMpfXB4KWAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5pbmRpZ29bOTAwXSxcclxuICB9LFxyXG4gIG1vZGVUb2dnbGVySWNvbjoge1xyXG4gICAgZmlsbDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxLzIpLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxLzIpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9XHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBkYXJrIG1vZGUgdG9nZ2xlclxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IERhcmtNb2RlVG9nZ2xlciA9ICh7IHRoZW1lTW9kZSA9ICdsaWdodCcsIG9uQ2xpY2ssIGNsYXNzTmFtZSwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgY2xhc3Nlcy5ib3JkZXIsXHJcbiAgICAgICAgICB0aGVtZU1vZGUgPT09ICdkYXJrJyA/IGNsYXNzZXMuYm9yZGVyRGFyayA6ICcnLFxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICBjbGFzc2VzLm1vZGVUb2dnbGVyLFxyXG4gICAgICAgICAgdGhlbWVNb2RlID09PSAnZGFyaycgPyBjbGFzc2VzLm1vZGVUb2dnbGVyRGFyayA6ICcnLFxyXG4gICAgICAgICl9PlxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RlVG9nZ2xlckljb259XHJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgd2lkdGg9XCIxNFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxM1wiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE0IDEzXCJcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgIGQ9XCJNNC41MjIwOCA3LjcxNzU0QzcuNTc4MiA3LjcxNzU0IDEwLjA1NTcgNS4yNDAwNiAxMC4wNTU3IDIuMTgzOTRDMTAuMDU1NyAxLjkzNDk4IDEwLjAzOTIgMS42ODk4NiAxMC4wMDc0IDEuNDQ5NjFDOS45NTgwMSAxLjA3NzI3IDEwLjM0OTUgMC43NzExNTkgMTAuNjQ3NCAwLjk5OTkyQzEyLjExNTMgMi4xMjcxNiAxMy4wNjE1IDMuODk5OTkgMTMuMDYxNSA1Ljg5MzgzQzEzLjA2MTUgOS4yOTk1OCAxMC4zMDA2IDEyLjA2MDUgNi44OTQ4NSAxMi4wNjA1QzMuOTUzMzQgMTIuMDYwNSAxLjQ5Mjg2IDEwLjAwMSAwLjg3NjcyOCA3LjI0NTI3QzAuNzk0ODQxIDYuODc5MDIgMS4yMzY2OCA2LjY1Mjg5IDEuNTUzMjEgNi44NTQ1MUMyLjQxMTA2IDcuNDAwOTUgMy40Mjk2IDcuNzE3NTQgNC41MjIwOCA3LjcxNzU0WlwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcblxyXG5EYXJrTW9kZVRvZ2dsZXIucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIHRoZW1lIG1vZGVcclxuICAgKi9cclxuICB0aGVtZU1vZGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlbWUgdG9nZ2xlciBmdW5jdGlvblxyXG4gICAqL1xyXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXJrTW9kZVRvZ2dsZXI7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0RhcmtNb2RlVG9nZ2xlcic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE5vU3NyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL05vU3NyJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICBleHRyYVNtYWxsOiB7XHJcbiAgICBmb250U2l6ZTogMTAsXHJcbiAgfSxcclxuICBzbWFsbDoge1xyXG4gICAgZm9udFNpemU6IDIwLFxyXG4gIH0sXHJcbiAgbWVkaXVtOiB7XHJcbiAgICBmb250U2l6ZTogMzAsXHJcbiAgfSxcclxuICBsYXJnZToge1xyXG4gICAgZm9udFNpemU6IDQwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgaWNvblxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEljb24gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBmb250SWNvbkNsYXNzLCBzaXplLCBmb250SWNvbkNvbG9yLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Tm9Tc3I+XHJcbiAgICAgIDxpXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgJ2ljb24nLFxyXG4gICAgICAgICAgZm9udEljb25DbGFzcyxcclxuICAgICAgICAgIGNsYXNzZXNbc2l6ZV0sXHJcbiAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgKX1cclxuICAgICAgICBzdHlsZT17eyBjb2xvcjogZm9udEljb25Db2xvciB9fVxyXG4gICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAvPlxyXG4gICAgPC9Ob1Nzcj5cclxuICApO1xyXG59O1xyXG5cclxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc2l6ZTogJ3NtYWxsJyxcclxufTtcclxuXHJcbkljb24ucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNsYXNzZXMgb2YgdGhlIGZvbnQgaWNvblxyXG4gICAqL1xyXG4gIGZvbnRJY29uQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTb3VyY2Ugc2V0IGZvciB0aGUgcmVzcG9uc2l2ZSBpbWFnZXNcclxuICAgKi9cclxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydleHRyYVNtYWxsJywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcclxuICAvKipcclxuICAgKiBDb2xvciBvZiB0aGUgaWNvblxyXG4gICAqL1xyXG4gIGZvbnRJY29uQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9JY29uJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICdub3dyYXAnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBpY29uIHRleHRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBJY29uVGV4dCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSxcclxuICAgIGNvbG9yLFxyXG4gICAgZm9udEljb25DbGFzcyxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIGljb25Qcm9wcyxcclxuICAgIHR5cG9ncmFwaHlQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdpY29uLXRleHQnLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cclxuICAgICAgPEljb25cclxuICAgICAgICBjbGFzc05hbWU9XCJpY29uLXRleHRfX2ljb25cIlxyXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgZm9udEljb25DbGFzcz17Zm9udEljb25DbGFzc31cclxuICAgICAgICBmb250SWNvbkNvbG9yPXtjb2xvcn1cclxuICAgICAgICB7Li4uaWNvblByb3BzfVxyXG4gICAgICAvPlxyXG4gICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgIG5vV3JhcFxyXG4gICAgICAgIHZhcmlhbnQ9XCJoM1wiXHJcbiAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdpY29uLXRleHRfX3R5cG9ncmFwaHknLCBjbGFzc2VzLnRpdGxlKX1cclxuICAgICAgICB7Li4udHlwb2dyYXBoeVByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSWNvblRleHQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGljb25Qcm9wczoge30sXHJcbiAgdHlwb2dyYXBoeVByb3BzOiB7fSxcclxufTtcclxuXHJcbkljb25UZXh0LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjbGFzc2VzIG9mIHRoZSBmb250IGljb25cclxuICAgKi9cclxuICBmb250SWNvbkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU291cmNlIHNldCBmb3IgdGhlIHJlc3BvbnNpdmUgaW1hZ2VzXHJcbiAgICovXHJcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgdGhlIGljb24tdGV4dFxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIEljb24gY29tcG9uZW50XHJcbiAgICovXHJcbiAgaWNvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHR5cG9ncmFwaHlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25UZXh0O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9JY29uVGV4dCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgbWFrZVN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlcyc7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgfSxcclxuICBkQmxvY2s6IHtcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBpbWFnZXNcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBJbWFnZSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IHNyYywgc3JjU2V0LCBhbHQsIGxhenksIGxhenlQcm9wcywgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGlmIChsYXp5KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnaW1hZ2UnLCBjbGFzc2VzLnJvb3QsIGNsYXNzZXMuZEJsb2NrLCBjbGFzc05hbWUpfVxyXG4gICAgICAgIGFsdD17YWx0fVxyXG4gICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgIHNyY1NldD17c3JjU2V0fVxyXG4gICAgICAgIGVmZmVjdD1cIm9wYWNpdHlcIlxyXG4gICAgICAgIHsuLi5sYXp5UHJvcHN9XHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxpbWdcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdpbWFnZScsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgYWx0PXthbHR9XHJcbiAgICAgIHNyYz17c3JjfVxyXG4gICAgICBzcmNTZXQ9e3NyY1NldH1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5JbWFnZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWx0OiAnLi4uJyxcclxuICBsYXp5OiB0cnVlLFxyXG4gIGxhenlQcm9wczoge1xyXG4gICAgd2lkdGg6ICdhdXRvJyxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gIH0sXHJcbn07XHJcblxyXG5JbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBTb3VyY2Ugb2YgdGhlIGltYWdlXHJcbiAgICovXHJcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU291cmNlIHNldCBmb3IgdGhlIHJlc3BvbnNpdmUgaW1hZ2VzXHJcbiAgICovXHJcbiAgc3JjU2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEltYWdlIHRpdGxlXHJcbiAgICovXHJcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIExhenkgbG9hZGluZyBwcm9wZXJ0aWVzXHJcbiAgICovXHJcbiAgbGF6eVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCBsYXp5IGxvYWQgdGhlIGltYWdlXHJcbiAgICovXHJcbiAgbGF6eTogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSW1hZ2UnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBBcnJvd1JpZ2h0QWx0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dSaWdodEFsdCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIFwiTGVhcm4gTW9yZVwiIGxpbmtcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBMZWFybk1vcmVMaW5rID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNvbG9yLFxyXG4gICAgY29tcG9uZW50LFxyXG4gICAgdmFyaWFudCxcclxuICAgIHRpdGxlLFxyXG4gICAgaHJlZixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIGljb25Qcm9wcyxcclxuICAgIHR5cG9ncmFwaHlQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgY2hpbGRyZW4gPSAoXHJcbiAgICA8PlxyXG4gICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnbGVhcm4tbW9yZS1saW5rX190eXBvZ3JhcGh5JywgY2xhc3Nlcy50aXRsZSl9XHJcbiAgICAgICAgdmFyaWFudD17dmFyaWFudH1cclxuICAgICAgICBjb2xvcj17Y29sb3IgfHwgJ3ByaW1hcnknfVxyXG4gICAgICAgIHsuLi50eXBvZ3JhcGh5UHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2xlYXJuLW1vcmUtbGlua19faWNvbi1idXR0b24nLCBjbGFzc2VzLmljb24pfVxyXG4gICAgICAgIGNvbG9yPXtjb2xvciB8fCAncHJpbWFyeSd9XHJcbiAgICAgICAgey4uLmljb25Qcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIDxBcnJvd1JpZ2h0QWx0SWNvbiBjbGFzc05hbWU9XCJsZWFybi1tb3JlLWxpbmtfX2Fycm93XCIgLz5cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhXHJcbiAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnbGVhcm4tbW9yZS1saW5rJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcblxyXG5MZWFybk1vcmVMaW5rLmRlZmF1bHRQcm9wcyA9IHtcclxuICB2YXJpYW50OiAnc3VidGl0bGUxJyxcclxuICBocmVmOiAnIycsXHJcbiAgdHlwb2dyYXBoeVByb3BzOiB7fSxcclxuICBpY29uUHJvcHM6IHt9LFxyXG4gIGNvbXBvbmVudDogJ2EnLFxyXG59O1xyXG5cclxuTGVhcm5Nb3JlTGluay5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgY29tcG9uZW50IHRvIGxvYWQgYXMgYSBtYWluIERPTVxyXG4gICAqL1xyXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mKFsnTGluaycsICdhJ10pLFxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIG9mIHRoZSBsaW5rXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBWYXJpYW50IG9mIHRoZSBsaW5rXHJcbiAgICovXHJcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnaDYnLCAnc3VidGl0bGUxJywgJ3N1YnRpdGxlMicsICdib2R5MScsICdib2R5MiddKSxcclxuICAvKipcclxuICAgKiBIcmVmIG9mIHRoZSBsaW5rXHJcbiAgICovXHJcbiAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDb2xvciBvZiB0aGUgbGlua1xyXG4gICAqL1xyXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBJY29uIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGljb25Qcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0eXBvZ3JhcGh5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWFybk1vcmVMaW5rO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9MZWFybk1vcmVMaW5rJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB1c2VTY3JvbGxUcmlnZ2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXInO1xyXG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYic7XHJcbmltcG9ydCBLZXlib2FyZEFycm93VXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93VXAnO1xyXG5pbXBvcnQgWm9vbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9ab29tJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU2Nyb2xsVG9wID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcih7XHJcbiAgICBkaXNhYmxlSHlzdGVyZXNpczogdHJ1ZSxcclxuICAgIHRocmVzaG9sZDogMTAwLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIGlmICh3aW5kb3cpIHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Wm9vbSBpbj17dHJpZ2dlcn0+XHJcbiAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlQ2xpY2t9IHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPEZhYiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIiBhcmlhLWxhYmVsPVwic2Nyb2xsIGJhY2sgdG8gdG9wXCI+XHJcbiAgICAgICAgICA8S2V5Ym9hcmRBcnJvd1VwSWNvbiAvPlxyXG4gICAgICAgIDwvRmFiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvWm9vbT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxUb3A7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU2Nyb2xsVG9wJzsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEltYWdlIH0gZnJvbSAnLi9JbWFnZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvbiB9IGZyb20gJy4vSWNvbic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGVhcm5Nb3JlTGluayB9IGZyb20gJy4vTGVhcm5Nb3JlTGluayc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvblRleHQgfSBmcm9tICcuL0ljb25UZXh0JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEYXJrTW9kZVRvZ2dsZXIgfSBmcm9tICcuL0RhcmtNb2RlVG9nZ2xlcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2Nyb2xsVG9wIH0gZnJvbSAnLi9TY3JvbGxUb3AnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcclxuaW1wb3J0IENvdW50VXAgZnJvbSAncmVhY3QtY291bnR1cCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBDb3VudCBVcCBOdW1iZXJzXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ291bnRVcE51bWJlciA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBzdGFydCxcclxuICAgIGVuZCxcclxuICAgIHN1ZmZpeCxcclxuICAgIHByZWZpeCxcclxuICAgIGxhYmVsLFxyXG4gICAgdGV4dENvbG9yLFxyXG4gICAgbGFiZWxDb2xvcixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHZpc2liaWxpdHlTZW5zb3JQcm9wcyxcclxuICAgIHdyYXBwZXJQcm9wcyxcclxuICAgIGNvdW50V3JhcHBlclByb3BzLFxyXG4gICAgY291bnROdW1iZXJQcm9wcyxcclxuICAgIGxhYmVsUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBbdmlld1BvcnRFbnRlcmVkLCBzZXRWaWV3UG9ydEVudGVyZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHNldFZpZXdQb3J0VmlzaWJpbGl0eSA9IGlzVmlzaWJsZSA9PiB7XHJcbiAgICBpZiAodmlld1BvcnRFbnRlcmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWaWV3UG9ydEVudGVyZWQoaXNWaXNpYmxlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2NvdW50dXAtbnVtYmVyJywgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8VmlzaWJpbGl0eVNlbnNvclxyXG4gICAgICAgIG9uQ2hhbmdlPXtpc1Zpc2libGUgPT4gc2V0Vmlld1BvcnRWaXNpYmlsaXR5KGlzVmlzaWJsZSl9XHJcbiAgICAgICAgZGVsYXllZENhbGxcclxuICAgICAgICB7Li4udmlzaWJpbGl0eVNlbnNvclByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudHVwLW51bWJlcl9fd3JhcHBlclwiIHsuLi53cmFwcGVyUHJvcHN9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cImg0XCJcclxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgY29sb3I9e3RleHRDb2xvciB8fCAndGV4dFByaW1hcnknfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb3VudHVwLW51bWJlcl9fY291bnQtd3JhcHBlclwiXHJcbiAgICAgICAgICAgIHsuLi5jb3VudFdyYXBwZXJQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENvdW50VXBcclxuICAgICAgICAgICAgICBkZWxheT17MX1cclxuICAgICAgICAgICAgICByZWRyYXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGVuZD17dmlld1BvcnRFbnRlcmVkID8gZW5kIDogc3RhcnR9XHJcbiAgICAgICAgICAgICAgc3RhcnQ9e3N0YXJ0fVxyXG4gICAgICAgICAgICAgIHN1ZmZpeD17c3VmZml4IHx8ICcnfVxyXG4gICAgICAgICAgICAgIHByZWZpeD17cHJlZml4IHx8ICcnfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdW50dXAtbnVtYmVyX19jb3VudFwiXHJcbiAgICAgICAgICAgICAgey4uLmNvdW50TnVtYmVyUHJvcHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgY29sb3I9e2xhYmVsQ29sb3IgfHwgJ3RleHRTZWNvbmRhcnknfVxyXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdW50dXAtbnVtYmVyX19sYWJlbFwiXHJcbiAgICAgICAgICAgIHsuLi5sYWJlbFByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Db3VudFVwTnVtYmVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzdGFydDogMCxcclxuICB2aXNpYmlsaXR5U2Vuc29yUHJvcHM6IHt9LFxyXG4gIHdyYXBwZXJQcm9wczoge30sXHJcbiAgY291bnRXcmFwcGVyUHJvcHM6IHt9LFxyXG4gIGNvdW50TnVtYmVyUHJvcHM6IHt9LFxyXG4gIGxhYmVsUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQ291bnRVcE51bWJlci5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgU3VmZml4IG9mIHRoZSBjb3VudCB1cCBudW1iZXJcclxuICAgKi9cclxuICBzdWZmaXg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIFByZWZpeCBvZiB0aGUgY291bnQgdXAgbnVtYmVyXHJcbiAgICovXHJcbiAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBsYWJlbCB0ZXh0IG9mIHRoZSBjb3VudCB1cCBudW1iZXJcclxuICAgKi9cclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0aW5nIG51bWJlclxyXG4gICAqL1xyXG4gIHN0YXJ0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIC8qKlxyXG4gICAqIEVuZCBudW1iZXJcclxuICAgKi9cclxuICBlbmQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUZXh0IGNvbG9yXHJcbiAgICovXHJcbiAgdGV4dENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIExhYmVsIGNvbG9yXHJcbiAgICovXHJcbiAgbGFiZWxDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgVmlzaWJpbGl0eVNlbnNvciBDb21wb25lbnRcclxuICAgKi9cclxuICB2aXNpYmlsaXR5U2Vuc29yUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHdyYXBwZXIgZGl2XHJcbiAgICovXHJcbiAgd3JhcHBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBjb3VudCB3cmFwcGVyIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgY291bnRXcmFwcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIENvdW50VXAgUmVhY3QgY29tcG9uZW50XHJcbiAgICovXHJcbiAgY291bnROdW1iZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgbGFiZWwgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBsYWJlbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRVcE51bWJlcjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ291bnRVcE51bWJlcic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnksIEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGRlc2NyaXB0aW9uIHdpdGggQ1RBJ3NcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBEZXNjcmlwdGlvbkN0YSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSxcclxuICAgIHN1YnRpdGxlLFxyXG4gICAgcHJpbWFyeUN0YSxcclxuICAgIHNlY29uZGFyeUN0YSxcclxuICAgIGFsaWduLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgd3JhcHBlclByb3BzLFxyXG4gICAgdGl0bGVQcm9wcyxcclxuICAgIHN1YnRpdGxlUHJvcHMsXHJcbiAgICBidXR0b25Hcm91cFByb3BzLFxyXG4gICAgcHJpbWFyeUJ1dHRvbldyYXBwZXJQcm9wcyxcclxuICAgIHNlY29uZGFyeUJ1dHRvbldyYXBwZXJQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc1NtID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnc20nKSwge1xyXG4gICAgZGVmYXVsdE1hdGNoZXM6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGxldCBqdXN0aWZ5R3JpZCA9ICdjZW50ZXInO1xyXG4gIGlmIChhbGlnbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9IGlzU20gPyAnZmxleC1lbmQnIDogJ2ZsZXgtc3RhcnQnO1xyXG4gIH0gZWxzZSBpZiAoYWxpZ24gPT09ICdyaWdodCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gaXNTbSA/ICdmbGV4LXN0YXJ0JyA6ICdmbGV4LWVuZCc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRcclxuICAgICAgY29udGFpbmVyXHJcbiAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2Rlc2NyaXB0aW9uLWN0YScsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWN0YV9fd3JhcHBlclwiIHsuLi53cmFwcGVyUHJvcHN9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICB2YXJpYW50PVwiaDVcIlxyXG4gICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1jdGFfX3RpdGxlXCJcclxuICAgICAgICAgIHsuLi50aXRsZVByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAge3N1YnRpdGxlICYmIChcclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWN0YV9fc3VidGl0bGVcIlxyXG4gICAgICAgICAgICB7Li4uc3VidGl0bGVQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17anVzdGlmeUdyaWR9XHJcbiAgICAgICAgICBzcGFjaW5nPXsxfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tY3RhX19idXR0b24tZ3JvdXBcIlxyXG4gICAgICAgICAgey4uLmJ1dHRvbkdyb3VwUHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1jdGFfX3ByaW1hcnktYnV0dG9uLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICB7Li4ucHJpbWFyeUJ1dHRvbldyYXBwZXJQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3ByaW1hcnlDdGF9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICB7c2Vjb25kYXJ5Q3RhICYmIChcclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdkZXNjcmlwdGlvbi1jdGFfX3NlY29uZGFyeS1idXR0b24td3JhcHBlcicpfVxyXG4gICAgICAgICAgICAgIHsuLi5zZWNvbmRhcnlCdXR0b25XcmFwcGVyUHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2Vjb25kYXJ5Q3RhfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5EZXNjcmlwdGlvbkN0YS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdjZW50ZXInLFxyXG4gIHdyYXBwZXJQcm9wczoge30sXHJcbiAgdGl0bGVQcm9wczoge30sXHJcbiAgc3VidGl0bGVQcm9wczoge30sXHJcbiAgYnV0dG9uR3JvdXBQcm9wczoge30sXHJcbiAgcHJpbWFyeUJ1dHRvbldyYXBwZXJQcm9wczoge30sXHJcbiAgc2Vjb25kYXJ5QnV0dG9uV3JhcHBlclByb3BzOiB7fSxcclxufTtcclxuXHJcbkRlc2NyaXB0aW9uQ3RhLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIG9mIHRoZSBsaXN0XHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTdWJ0aXRsZSBvZiB0aGUgbGlzdFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByaW1hcnkgQ1RBIG9mIHRoZSBsaXN0XHJcbiAgICovXHJcbiAgcHJpbWFyeUN0YTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTZWNvbmRhcnkgQ1RBIG9mIHRoZSBsaXN0XHJcbiAgICovXHJcbiAgc2Vjb25kYXJ5Q3RhOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBBbGlnbm1lbnRcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHdyYXBwZXIgR3JpZCBpdGVtIGNvbXBvbmVudHNcclxuICAgKi9cclxuICB3cmFwcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50c1xyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHN1YnRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50c1xyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIGJ1dHRvbiBncm91cCBkaXYgY29udGFpbmVyXHJcbiAgICovXHJcbiAgYnV0dG9uR3JvdXBQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgcHJpbWFyeSBidXR0b24gd3JhcHBlciBkaXYgY29udGFpbmVyXHJcbiAgICovXHJcbiAgcHJpbWFyeUJ1dHRvbldyYXBwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiB3cmFwcGVyIGRpdiBjb250YWluZXJcclxuICAgKi9cclxuICBzZWNvbmRhcnlCdXR0b25XcmFwcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbkN0YTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRGVzY3JpcHRpb25DdGEnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEF2YXRhciwgY29sb3JzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgZXh0cmFTbWFsbDoge1xyXG4gICAgd2lkdGg6IDIwLFxyXG4gICAgaGVpZ2h0OiAyMCxcclxuICB9LFxyXG4gIHNtYWxsOiB7XHJcbiAgICB3aWR0aDogNTAsXHJcbiAgICBoZWlnaHQ6IDUwLFxyXG4gIH0sXHJcbiAgbWVkaXVtOiB7XHJcbiAgICB3aWR0aDogNzAsXHJcbiAgICBoZWlnaHQ6IDcwLFxyXG4gIH0sXHJcbiAgbGFyZ2U6IHtcclxuICAgIHdpZHRoOiA5MCxcclxuICAgIGhlaWdodDogOTAsXHJcbiAgfSxcclxuICBjaXJjbGU6IHtcclxuICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxyXG4gIH0sXHJcbiAgc3F1YXJlOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBhbHRlcm5hdGUgaWNvblxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEljb25BbHRlcm5hdGUgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWNvblByb3BzLFxyXG4gICAgZm9udEljb25DbGFzcyxcclxuICAgIHNpemUsXHJcbiAgICBjb2xvcixcclxuICAgIHNoYXBlLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHVzZUJhY2tncm91bmRTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IFwiI2UzZjJmZFwiLFxyXG4gICAgfSxcclxuICB9KSk7XHJcbiAgY29uc3QgYmFja2dyb3VuZENsYXNzZXMgPSB1c2VCYWNrZ3JvdW5kU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXZhdGFyXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICBcImljb24tYWx0ZXJuYXRlXCIsXHJcbiAgICAgICAgY2xhc3Nlc1tzaXplXSxcclxuICAgICAgICBjbGFzc2VzW3NoYXBlXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ2xhc3Nlcy5iYWNrZ3JvdW5kLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEljb25cclxuICAgICAgICBzaXplPXtzaXplfVxyXG4gICAgICAgIGZvbnRJY29uQ2xhc3M9e2ZvbnRJY29uQ2xhc3N9XHJcbiAgICAgICAgZm9udEljb25Db2xvcj17XCIjNTEyMGZmXCJ9XHJcbiAgICAgICAgY2xhc3NOYW1lPSdpY29uLWFsdGVybmF0ZV9faWNvbidcclxuICAgICAgICB7Li4uaWNvblByb3BzfVxyXG4gICAgICAvPlxyXG4gICAgPC9BdmF0YXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkljb25BbHRlcm5hdGUuZGVmYXVsdFByb3BzID0ge1xyXG4gIHNpemU6ICdtZWRpdW0nLFxyXG4gIHNoYXBlOiAnc3F1YXJlJyxcclxuICBpY29uUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuSWNvbkFsdGVybmF0ZS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgY2xhc3NlcyBvZiB0aGUgZm9udCBpY29uXHJcbiAgICovXHJcbiAgZm9udEljb25DbGFzczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFNpemVzIG9mIHRoZSBpY29uXHJcbiAgICovXHJcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnZXh0cmFTbWFsbCcsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSksXHJcbiAgLyoqXHJcbiAgICogQ29sb3Igb2YgdGhlIGljb25cclxuICAgKi9cclxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgIGNvbG9ycy5yZWQsXHJcbiAgICBjb2xvcnMucGluayxcclxuICAgIGNvbG9ycy5wdXJwbGUsXHJcbiAgICBjb2xvcnMuZGVlcFB1cnBsZSxcclxuICAgIGNvbG9ycy5pbmRpZ28sXHJcbiAgICBjb2xvcnMuYmx1ZSxcclxuICAgIGNvbG9ycy5saWdodEJsdWUsXHJcbiAgICBjb2xvcnMuY3lhbixcclxuICAgIGNvbG9ycy50ZWFsLFxyXG4gICAgY29sb3JzLmdyZWVuLFxyXG4gICAgY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICBjb2xvcnMubGltZSxcclxuICAgIGNvbG9ycy55ZWxsb3csXHJcbiAgICBjb2xvcnMuYW1iZXIsXHJcbiAgICBjb2xvcnMub3JhbmdlLFxyXG4gICAgY29sb3JzLmRlZXBPcmFuZ2UsXHJcbiAgICBjb2xvcnMuYnJvd24sXHJcbiAgICBjb2xvcnMuZ3JleSxcclxuICAgIGNvbG9ycy5ibHVlR3JleSxcclxuICBdKSxcclxuICAvKipcclxuICAgKiBUaGUgc2hhcGUgb2YgdGhlIGFsdGVybmF0ZSBpY29uXHJcbiAgICovXHJcbiAgc2hhcGU6IFByb3BUeXBlcy5vbmVPZihbJ2NpcmNsZScsICdzcXVhcmUnXSksXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIEljb24gY29tcG9uZW50XHJcbiAgICovXHJcbiAgaWNvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbkFsdGVybmF0ZTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSWNvbkFsdGVybmF0ZSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBpbWFnZUdyaWQ6IHtcclxuICAgIHBhZGRpbmc6ICcuMjVyZW0nLFxyXG4gICAgd2lkdGg6ICcxNTAlJyxcclxuICAgIGJveFNoYWRvdzogJzAgMS41cmVtIDRyZW0gcmdiYSgyMiwyOCw0NSwuMSknLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgJyYgaW1nJzoge1xyXG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXHJcbiAgICAgIGJvcmRlclN0eWxlOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2VHcmlkRmlyc3RJdGVtOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICc0cmVtJyxcclxuICB9LFxyXG4gIGltYWdlR3JpZExhc3RJdGVtOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICc2cmVtJyxcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgb3ZlcmxhcGVkIGltYWdlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IE92ZXJsYXBlZEltYWdlcyA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGltYWdlMSwgaW1hZ2UyLCBpbWFnZTMsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIGNvbnRhaW5lclxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ292ZXJsYXBlZC1pbWFnZXMnLCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17NH0gY2xhc3NOYW1lPVwib3ZlcmxhcGVkLWltYWdlc19faXRlbS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICdvdmVybGFwZWQtaW1hZ2VzX19pdGVtLXdyYXBwZXInLFxyXG4gICAgICAgICAgICBjbGFzc2VzLmltYWdlR3JpZCxcclxuICAgICAgICAgICAgY2xhc3Nlcy5pbWFnZUdyaWRGaXJzdEl0ZW0sXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e2ltYWdlMS5zcmN9XHJcbiAgICAgICAgICAgIHNyY1NldD17aW1hZ2UxLnNyY3NldH1cclxuICAgICAgICAgICAgYWx0PXtpbWFnZTEuYWx0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVybGFwZWQtaW1hZ2VzX19pdGVtLWltYWdlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17NH0gY2xhc3NOYW1lPVwib3ZlcmxhcGVkLWltYWdlc19faXRlbS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ292ZXJsYXBlZC1pbWFnZXNfX2l0ZW0td3JhcHBlcicsIGNsYXNzZXMuaW1hZ2VHcmlkKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtpbWFnZTIuc3JjfVxyXG4gICAgICAgICAgICBzcmNTZXQ9e2ltYWdlMi5zcmNzZXR9XHJcbiAgICAgICAgICAgIGFsdD17aW1hZ2UyLmFsdH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmxhcGVkLWltYWdlc19faXRlbS1pbWFnZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IGNsYXNzTmFtZT1cIm92ZXJsYXBlZC1pbWFnZXNfX2l0ZW0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAnb3ZlcmxhcGVkLWltYWdlc19faXRlbS13cmFwcGVyJyxcclxuICAgICAgICAgICAgY2xhc3Nlcy5pbWFnZUdyaWQsXHJcbiAgICAgICAgICAgIGNsYXNzZXMuaW1hZ2VHcmlkTGFzdEl0ZW0sXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e2ltYWdlMy5zcmN9XHJcbiAgICAgICAgICAgIHNyY1NldD17aW1hZ2UzLnNyY3NldH1cclxuICAgICAgICAgICAgYWx0PXtpbWFnZTMuYWx0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVybGFwZWQtaW1hZ2VzX19pdGVtLWltYWdlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuT3ZlcmxhcGVkSW1hZ2VzLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEltYWdlIGl0ZW0gLSBPYmplY3Qgb2Ygc3JjLCBzcmNzZXQgYW5kIGFsdCBwcm9wZXJ0aWVzXHJcbiAgICovXHJcbiAgaW1hZ2UxOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSW1hZ2UgaXRlbSAtIE9iamVjdCBvZiBzcmMsIHNyY3NldCBhbmQgYWx0IHByb3BlcnRpZXNcclxuICAgKi9cclxuICBpbWFnZTI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBJbWFnZSBpdGVtIC0gT2JqZWN0IG9mIHNyYywgc3Jjc2V0IGFuZCBhbHQgcHJvcGVydGllc1xyXG4gICAqL1xyXG4gIGltYWdlMzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3ZlcmxhcGVkSW1hZ2VzO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9PdmVybGFwZWRJbWFnZXMnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGlzYWJsZUd1dHRlcjoge1xyXG4gICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICB9LFxyXG4gIGN0YToge1xyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICcmOmZpcnN0LWNoaWxkJzoge1xyXG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDApLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHNlY3Rpb24gaGVhZGVyc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdGl0bGUsXHJcbiAgICB0aXRsZVZhcmlhbnQsXHJcbiAgICBzdWJ0aXRsZVZhcmlhbnQsXHJcbiAgICBzdWJ0aXRsZSxcclxuICAgIHN1YnRpdGxlQ29sb3IsXHJcbiAgICBsYWJlbCxcclxuICAgIG92ZXJsaW5lLFxyXG4gICAgZmFkZVVwLFxyXG4gICAgYWxpZ24sXHJcbiAgICBjdGFHcm91cCxcclxuICAgIGRpc2FibGVHdXR0ZXIsXHJcbiAgICB0aXRsZUNsYXNzZXMsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBsYWJlbFByb3BzLFxyXG4gICAgdGl0bGVQcm9wcyxcclxuICAgIHN1YnRpdGxlUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgbGV0IGp1c3RpZnlHcmlkID0gJ2NlbnRlcic7XHJcbiAgaWYgKGFsaWduID09PSAnbGVmdCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gJ2ZsZXgtc3RhcnQnO1xyXG4gIH0gZWxzZSBpZiAoYWxpZ24gPT09ICdyaWdodCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gJ2ZsZXgtZW5kJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBjb250YWluZXJcclxuICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgZGF0YS1hb3M9e2ZhZGVVcCA/IFwiZmFkZS11cFwiIDogXCJcIn1cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgIFwic2VjdGlvbi1oZWFkZXJcIixcclxuICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbiAgICAgICAgZGlzYWJsZUd1dHRlciA/IGNsYXNzZXMuZGlzYWJsZUd1dHRlciA6IHt9LFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAge292ZXJsaW5lICYmIChcclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17anVzdGlmeUdyaWR9XHJcbiAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9J3NlY3Rpb24taGVhZGVyX19vdmVybGluZS13cmFwcGVyJ1xyXG4gICAgICAgID5cclxuICAgICAgICAgIHtvdmVybGluZX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICl9XHJcbiAgICAgIHtsYWJlbCAmJiAoXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT0nc2VjdGlvbi1oZWFkZXJfX2xhYmVsLXdyYXBwZXInPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD0nb3ZlcmxpbmUnXHJcbiAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICBjb21wb25lbnQ9J3AnXHJcbiAgICAgICAgICAgIGFsaWduPXthbGlnbiB8fCBcImNlbnRlclwifVxyXG4gICAgICAgICAgICB7Li4ubGFiZWxQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKX1cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT0nc2VjdGlvbi1oZWFkZXJfX3RpdGxlLXdyYXBwZXInPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICB2YXJpYW50PXt0aXRsZVZhcmlhbnR9XHJcbiAgICAgICAgICBhbGlnbj17YWxpZ24gfHwgXCJjZW50ZXJcIn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgXCJzZWN0aW9uLWhlYWRlcl9fdGl0bGVcIixcclxuICAgICAgICAgICAgY2xhc3Nlcy50aXRsZSxcclxuICAgICAgICAgICAgdGl0bGVDbGFzc2VzID8gdGl0bGVDbGFzc2VzIDoge31cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBjb2xvcj0ndGV4dFByaW1hcnknXHJcbiAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIHtzdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT0nc2VjdGlvbi1oZWFkZXJfX3N1YnRpdGxlLXdyYXBwZXInPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD17c3VidGl0bGVWYXJpYW50IHx8IFwiaDZcIn1cclxuICAgICAgICAgICAgYWxpZ249e2FsaWduIHx8IFwiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgIGNvbG9yPXtzdWJ0aXRsZUNvbG9yIHx8IFwidGV4dFByaW1hcnlcIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uLWhlYWRlcl9fc3VidGl0bGUnXHJcbiAgICAgICAgICAgIHsuLi5zdWJ0aXRsZVByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApfVxyXG4gICAgICB7Y3RhR3JvdXAgJiYgY3RhR3JvdXAubGVuZ3RoICYmIChcclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPSdzZWN0aW9uLWhlYWRlcl9fY3RhLXdyYXBwZXInPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtqdXN0aWZ5R3JpZH1cclxuICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAgICB3cmFwPSdub3dyYXAnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VjdGlvbi1oZWFkZXJfX2N0YS1jb250YWluZXInXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjdGFHcm91cC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAgICAgXCJzZWN0aW9uLWhlYWRlcl9fY3RhLWl0ZW0td3JhcHBlclwiLFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzLmN0YVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApfVxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5TZWN0aW9uSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0aXRsZVZhcmlhbnQ6ICdoNCcsXHJcbiAgbGFiZWxQcm9wczoge30sXHJcbiAgdGl0bGVQcm9wczoge30sXHJcbiAgc3VidGl0bGVQcm9wczoge30sXHJcbn07XHJcblxyXG5TZWN0aW9uSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIG9mIHRoZSBzZWN0aW9uIGhlYWRlclxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU3VidGl0bGUgb2YgdGhlIHNlY3Rpb24gaGVhZGVyXHJcbiAgICovXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXHJcbiAgLyoqXHJcbiAgICogTGFiZWwgdGl0bGUgb2YgdGhlIHNlY3Rpb24gaGVhZGVyXHJcbiAgICovXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIG92ZXJsaW5lIGNvbXBvbmVudCBpbiB0aGUgc2VjdGlvbiBoZWFkZXJcclxuICAgKi9cclxuICBvdmVybGluZTogUHJvcFR5cGVzLm5vZGUsXHJcbiAgLyoqXHJcbiAgICogQXJyYXkgb2YgdGhlIENUQXNcclxuICAgKi9cclxuICBjdGFHcm91cDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gZmFkZSB1cCBvbiBzY3JvbGxcclxuICAgKi9cclxuICBmYWRlVXA6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIEhlYWRlciBjb250ZW50ICh0aXRsZSwgc3VidGl0bGUsIENUQXMpIGFsaWdubWVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydyaWdodCcsICdsZWZ0JywgJ2NlbnRlciddKSxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGRpc2FibGUgYm90dG9tIG1hcmdpbiBvZiB0aGUgc2VjdGlvblxyXG4gICAqL1xyXG4gIGRpc2FibGVHdXR0ZXI6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFN0eWxlcyBjbGFzc2VzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSB0aXRsZSBmcm9tIHRoZSBwYXJlbnQgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGl0bGVDbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIHZhcmlhbnRcclxuICAgKi9cclxuICB0aXRsZVZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2J10pXHJcbiAgICAuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTdWJUaXRsZSB2YXJpYW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVWYXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgJ2gxJyxcclxuICAgICdoMicsXHJcbiAgICAnaDMnLFxyXG4gICAgJ2g0JyxcclxuICAgICdoNScsXHJcbiAgICAnaDYnLFxyXG4gICAgJ3N1YnRpdGxlMScsXHJcbiAgICAnc3VidGl0bGUyJyxcclxuICAgICdib2R5MScsXHJcbiAgICAnYm9keTInLFxyXG4gIF0pLFxyXG4gIC8qKlxyXG4gICAqIFN1YlRpdGxlIGNvbG9yXHJcbiAgICovXHJcbiAgc3VidGl0bGVDb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgICd0ZXh0UHJpbWFyeScsXHJcbiAgICAndGV4dFNlY29uZGFyeScsXHJcbiAgICAncHJpbWFyeScsXHJcbiAgICAnc2Vjb25kYXJ5JyxcclxuICBdKSxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgbGFiZWwgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBsYWJlbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHN1YnRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25IZWFkZXI7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1NlY3Rpb25IZWFkZXInO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuXHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgekluZGV4OiAnYXV0bycsXHJcbiAgfSxcclxuICBzd2lwZXJTbGlkZToge1xyXG4gICAgd2lkdGg6ICdhdXRvJyxcclxuICB9LFxyXG4gIHN3aXBlck5hdjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgd2lkdGg6IDg4LFxyXG4gICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB6SW5kZXg6IDQsXHJcbiAgICAnJiAuc3dpcGVyLWJ1dHRvbi1wcmV2LCAmIC5zd2lwZXItYnV0dG9uLW5leHQnOiB7XHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIGJveFNoYWRvdzogYDAgMnB4IDEwcHggMCAke3RoZW1lLnBhbGV0dGUuY2FyZFNoYWRvd31gLFxyXG4gICAgICBib3JkZXI6IGAycHggc29saWQgJHt0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJ9YCxcclxuICAgICAgJyY6YWZ0ZXInOiB7XHJcbiAgICAgICAgZm9udFNpemU6ICdpbml0aWFsJyxcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIC5zd2lwZXItYnV0dG9uLXByZXYnOiB7XHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICB9LFxyXG4gICAgJyYgLnN3aXBlci1idXR0b24tbmV4dCc6IHtcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGltYWdlIHN3aXBlclxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFN3aXBlckltYWdlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGl0ZW1zLFxyXG4gICAgbmF2aWdhdGlvbkJ1dHRvblN0eWxlLFxyXG4gICAgaW1hZ2VDbGFzc05hbWUsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICdzd2lwZXItY29udGFpbmVyJyxcclxuICAgICAgICAnc3dpcGVyLWltYWdlJyxcclxuICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItaW1hZ2VfX3dyYXBwZXIsIHN3aXBlci13cmFwcGVyXCI+XHJcbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICdzd2lwZXItaW1hZ2VfX3NsaWRlJyxcclxuICAgICAgICAgICAgICAnc3dpcGVyLXNsaWRlJyxcclxuICAgICAgICAgICAgICBjbGFzc2VzLnN3aXBlclNsaWRlLFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uc3JjfVxyXG4gICAgICAgICAgICAgIGFsdD17aXRlbS5hbHR9XHJcbiAgICAgICAgICAgICAgc3JjU2V0PXtpdGVtLnNyY1NldH1cclxuICAgICAgICAgICAgICBsYXp5UHJvcHM9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICAnc3dpcGVyLWltYWdlX19pdGVtJyxcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBpbWFnZUNsYXNzTmFtZSA/IGltYWdlQ2xhc3NOYW1lIDoge30sXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ3N3aXBlci1pbWFnZV9fbmF2aWdhdGlvbicsIGNsYXNzZXMuc3dpcGVyTmF2KX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAnc3dpcGVyLWltYWdlX19uYXZpZ2F0aW9uLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICdzd2lwZXItaW1hZ2VfX25hdmlnYXRpb24tYnV0dG9uLS1wcmV2JyxcclxuICAgICAgICAgICAgJ3N3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CdXR0b25TdHlsZSB8fCB7fSxcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICdzd2lwZXItaW1hZ2VfX25hdmlnYXRpb24tYnV0dG9uJyxcclxuICAgICAgICAgICAgJ3N3aXBlci1pbWFnZV9fbmF2aWdhdGlvbi1idXR0b24tLW5leHQnLFxyXG4gICAgICAgICAgICAnc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJ1dHRvblN0eWxlIHx8IHt9LFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Td2lwZXJJbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzIGZvciB0aGUgaW1hZ2VzXHJcbiAgICovXHJcbiAgaW1hZ2VDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGFycmF5IG9mIGltYWdlcyBvYmplY3Qgd2hpY2ggc2hvdWxkIGNvbnNpc3Qgb2Ygc3JjLCBhbHQgYW5kIHNyY3NldCBhdHRyaWJ1dGVzXHJcbiAgICovXHJcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU3R5bGVzIGNsYXNzZXMgb2YgdGhlIG5hdmlnYXRpb24gYnV0dG9uXHJcbiAgICovXHJcbiAgbmF2aWdhdGlvbkJ1dHRvblN0eWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3dpcGVySW1hZ2U7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1N3aXBlckltYWdlJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHN3aXBlclNsaWRlOiB7XHJcbiAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDYpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG51bWJlcjoge1xyXG4gICAgZm9udFdlaWdodDogOTAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgbnVtYmVyIHN3aXBlclxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFN3aXBlck51bWJlciA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpdGVtcyxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIG51bWJlclByb3BzLFxyXG4gICAgbGFiZWxQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzTWQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpLCB7XHJcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiBpc01kID8gNCA6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICBkZWxheTogNTAwMCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgJ3N3aXBlci1udW1iZXInLFxyXG4gICAgICAgICdzd2lwZXItY29udGFpbmVyJyxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1udW1iZXJfX3dyYXBwZXIgc3dpcGVyLXdyYXBwZXJcIj5cclxuICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgJ3N3aXBlci1udW1iZXJfX2l0ZW0nLFxyXG4gICAgICAgICAgICAgIGNsYXNzZXMuc3dpcGVyU2xpZGUsXHJcbiAgICAgICAgICAgICAgJ3N3aXBlci1zbGlkZScsXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnYXV0bycgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlci1udW1iZXJfX2l0ZW0tY29udGFpbmVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJzd2lwZXItbnVtYmVyX19udW1iZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImgzXCJcclxuICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ3N3aXBlci1udW1iZXJfX251bWJlcicsIGNsYXNzZXMubnVtYmVyKX1cclxuICAgICAgICAgICAgICAgICAgey4uLm51bWJlclByb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5udW1iZXJ9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJzd2lwZXItbnVtYmVyX19sYWJlbC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2lwZXItbnVtYmVyX19sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYWJlbFByb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItbnVtYmVyX19wYWdpbmF0aW9uIHN3aXBlci1wYWdpbmF0aW9uXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Td2lwZXJOdW1iZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIG51bWJlclByb3BzOiB7fSxcclxuICBsYWJlbFByb3BzOiB7fSxcclxufTtcclxuXHJcblN3aXBlck51bWJlci5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgYXJyYXkgb2YgbnVtYmVycyBvYmplY3Qgd2hpY2ggc2hvdWxkIGNvbnNpc3Qgb2YgbnVtYmVyIGFuZCB0aXRsZVxyXG4gICAqL1xyXG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgbnVtYmVyIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgbnVtYmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogVGhlIGFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBsYWJlbCBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGxhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2lwZXJOdW1iZXI7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1N3aXBlck51bWJlcic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgVHlwZWQgZnJvbSAncmVhY3QtdHlwZWQnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSB0eXBlZCBhbmltYXRlZCB0ZXh0c1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFR5cGVkVGV4dCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgdHlwZWRQcm9wcywgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ3R5cGVkLXRleHQnLCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPFR5cGVkIGNsYXNzTmFtZT1cInR5cGVkLXRleHRfX2l0ZW1cIiB7Li4udHlwZWRQcm9wc30gLz5cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59O1xyXG5cclxuVHlwZWRUZXh0LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIHJlYWN0LXR5cGVkIHByb3BlcnRpZXMuIEZvciBtb3JlIGluZm8gdmlzaXQgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmVhY3QtdHlwZWRcclxuICAgKi9cclxuICB0eXBlZFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeXBlZFRleHQ7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1R5cGVkVGV4dCc7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2VjdGlvbkhlYWRlciB9IGZyb20gJy4vU2VjdGlvbkhlYWRlcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvbkFsdGVybmF0ZSB9IGZyb20gJy4vSWNvbkFsdGVybmF0ZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3dpcGVySW1hZ2UgfSBmcm9tICcuL1N3aXBlckltYWdlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZXNjcmlwdGlvbkN0YSB9IGZyb20gJy4vRGVzY3JpcHRpb25DdGEnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvdW50VXBOdW1iZXIgfSBmcm9tICcuL0NvdW50VXBOdW1iZXInO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE92ZXJsYXBlZEltYWdlcyB9IGZyb20gJy4vT3ZlcmxhcGVkSW1hZ2VzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTd2lwZXJOdW1iZXIgfSBmcm9tICcuL1N3aXBlck51bWJlcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHlwZWRUZXh0IH0gZnJvbSAnLi9UeXBlZFRleHQnO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1tdWx0aS1jb21wICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rpc3BsYXktbmFtZSAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcbiAgVHlwb2dyYXBoeSxcclxuICBHcmlkLFxyXG4gIEFjY29yZGlvbiBhcyBNdWlBY2NvcmRpb24sXHJcbiAgQWNjb3JkaW9uU3VtbWFyeSBhcyBNdWlBY2NvcmRpb25TdW1tYXJ5LFxyXG4gIEFjY29yZGlvbkRldGFpbHMgYXMgTXVpQWNjb3JkaW9uRGV0YWlscyxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSc7XHJcblxyXG5pbXBvcnQgeyBMZWFybk1vcmVMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgfSxcclxuICBleHBhbmRPcGVuOiB7XHJcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKScsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IGFjY29yZGlvbiB2aWV3XHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcclxuICovXHJcbmNvbnN0IEFjY29yZGlvbiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpdGVtcyxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHRpdGxlUHJvcHMsXHJcbiAgICBzdWJ0aXRsZVByb3BzLFxyXG4gICAgdGV4dFByb3BzLFxyXG4gICAgbGlua1Byb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiB7Li4ucmVzdH0gY2xhc3NOYW1lPXtjbHN4KCdhY2NvcmRpb24nLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9PlxyXG4gICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgIDxNdWlBY2NvcmRpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnYWNjb3JkaW9uX19pdGVtLXdyYXBwZXInLCBjbGFzc2VzLmxpc3RJdGVtKX1cclxuICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TXVpQWNjb3JkaW9uU3VtbWFyeVxyXG4gICAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XHJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e2Ake2l0ZW0uaWR9LWNvbnRlbnRgfVxyXG4gICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICBzcGFjaW5nPXswfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yaW9uX19pdGVtLXRleHQtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJhY2Nvcmlvbl9faXRlbS10aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2Nvcmlvbl9pdGVtLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgey4uLnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICB7aXRlbS5zdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiYWNjb3Jpb25faXRlbS1zdWJ0aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yaW9uX2l0ZW0tc3VidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5zdWJ0aXRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L011aUFjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICA8TXVpQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9fY29sbGFwc2FibGUtdGV4dC1jb250YWluZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9fY29sbGFwc2FibGUtdGV4dC13cmFwcGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX19jb2xsYXBzYWJsZS10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgey4uLnRleHRQcm9wc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAge2l0ZW0ubGluayAmJiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX19jb2xsYXBzYWJsZS1saW5rLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGVhcm5Nb3JlTGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb25fX2NvbGxhcHNhYmxlLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5saW5rUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9NdWlBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgIDwvTXVpQWNjb3JkaW9uPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5BY2NvcmRpb24uZGVmYXVsdFByb3BzID0ge1xyXG4gIHRpdGxlUHJvcHM6IHt9LFxyXG4gIHN1YnRpdGxlUHJvcHM6IHt9LFxyXG4gIHRleHRQcm9wczoge30sXHJcbiAgbGlua1Byb3BzOiB7fSxcclxufTtcclxuXHJcbkFjY29yZGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogQ2xhc3NuYW1lIGZyb20gdGhlIHBhcmVudCBjb21wb25lbnRcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogSXRlbXMgdG8gc2hvdyBpbnNpZGUgdGhlIGFjY29yZGlvblxyXG4gICAqL1xyXG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBzdWJ0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHRleHQgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0ZXh0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIGxpbmsgY29tcG9uZW50XHJcbiAgICovXHJcbiAgbGlua1Byb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9BY2NvcmRpb24nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIHdpdGhTaGFkb3c6IHtcclxuICAgIGJveFNoYWRvdzogYDAgMnB4IDEwcHggMCAke3RoZW1lLnBhbGV0dGUuY2FyZFNoYWRvd31gLFxyXG4gIH0sXHJcbiAgbm9TaGFkb3c6IHtcclxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gIH0sXHJcbiAgbm9Cb3JkZXI6IHtcclxuICAgIGJvcmRlcjogMCxcclxuICB9LFxyXG4gIG5vQmc6IHtcclxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgfSxcclxuICBsaWZ0VXA6IHtcclxuICAgIHRyYW5zaXRpb246XHJcbiAgICAgICdib3gtc2hhZG93IC4yNXMgZWFzZSx0cmFuc2Zvcm0gLjI1cyBlYXNlLC13ZWJraXQtdHJhbnNmb3JtIC4yNXMgZWFzZScsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgICcwIDEuNXJlbSAyLjVyZW0gcmdiYSgyMiwyOCw0NSwuMSksMCAuM3JlbSAwLjVyZW0gLS41MHJlbSByZ2JhKDIyLDI4LDQ1LC4wNSkgIWltcG9ydGFudCcsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsLTVweCwwKScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCAyKSxcclxuICAgICcmOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgMiksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDMpLFxyXG4gICAgICAnJjpsYXN0LWNoaWxkJzoge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMyksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGVmdDoge1xyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gIH0sXHJcbiAgcmlnaHQ6IHtcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXHJcbiAgfSxcclxuICBjZW50ZXI6IHtcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgYmFzaWMgY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRCYXNlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHdpdGhTaGFkb3csXHJcbiAgICBub1NoYWRvdyxcclxuICAgIG5vQm9yZGVyLFxyXG4gICAgbm9CZyxcclxuICAgIGxpZnRVcCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgYWxpZ24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBjYXJkQ29udGVudFByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICdjYXJkLWJhc2UnLFxyXG4gICAgICAgIGNsYXNzZXMucm9vdCxcclxuICAgICAgICB3aXRoU2hhZG93ID8gY2xhc3Nlcy53aXRoU2hhZG93IDoge30sXHJcbiAgICAgICAgbm9TaGFkb3cgPyBjbGFzc2VzLm5vU2hhZG93IDoge30sXHJcbiAgICAgICAgbm9Cb3JkZXIgPyBjbGFzc2VzLm5vQm9yZGVyIDoge30sXHJcbiAgICAgICAgbm9CZyA/IGNsYXNzZXMubm9CZyA6IHt9LFxyXG4gICAgICAgIGxpZnRVcCA/IGNsYXNzZXMubGlmdFVwIDoge30sXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPENhcmRDb250ZW50XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjYXJkLWJhc2VfX2NvbnRlbnQnLCBjbGFzc2VzLmNvbnRlbnQsIGNsYXNzZXNbYWxpZ25dKX1cclxuICAgICAgICB7Li4uY2FyZENvbnRlbnRQcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZEJhc2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsaWduOiAnY2VudGVyJyxcclxuICBjYXJkQ29udGVudFByb3BzOiB7fSxcclxufTtcclxuXHJcbkNhcmRCYXNlLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjaGlsZHJlbiBjb250ZW50IG9mIHRoZSBiYXNpYyBjYXJkXHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBzaG93IGN1c3RvbSBzaGFkb3dcclxuICAgKi9cclxuICB3aXRoU2hhZG93OiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHJlbmRlciB0aGUgY2FyZCB3aXRob3V0IHNoYWRvd1xyXG4gICAqL1xyXG4gIG5vU2hhZG93OiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGhpZGUgdGhlIGNhcmQgYm9yZGVyc1xyXG4gICAqL1xyXG4gIG5vQm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHNob3cgdHJhbnNwYXJlbnQgYmFja2dyb3VuZFxyXG4gICAqL1xyXG4gIG5vQmc6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gbGlmdCB1cCBvbiBob3ZlclxyXG4gICAqL1xyXG4gIGxpZnRVcDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRlbnQgYWxpZ25tZW50XHJcbiAgICovXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJ10pLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgQ2FyZENvbnRlbnQgY29tcG9uZW50XHJcbiAgICovXHJcbiAgY2FyZENvbnRlbnRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRCYXNlO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkQmFzZSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQ2FyZEJhc2UsIERlc2NyaXB0aW9uTGlzdEljb24gfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgY2F0ZWdvcnkgY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRDYXRlZ29yeSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGljb24sIHRpdGxlLCBhbGlnbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRCYXNlIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cclxuICAgICAgPERlc2NyaXB0aW9uTGlzdEljb24gaWNvbj17aWNvbn0gdGl0bGU9e3RpdGxlfSBhbGlnbj17YWxpZ259IC8+XHJcbiAgICA8L0NhcmRCYXNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkQ2F0ZWdvcnkuZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsaWduOiAnY2VudGVyJyxcclxufTtcclxuXHJcbkNhcmRDYXRlZ29yeS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBJY29uIHRvIHNob3cgaW5zaWRlIHRoZSBjYXRlZ29yeSBjYXJkXHJcbiAgICovXHJcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDYXRlZ29yeSB0aXRsZSB0byBzaG93IGluc2lkZSB0aGUgY2F0ZWdvcnkgY2FyZFxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRlbnQgYWxpZ25tZW50XHJcbiAgICovXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJ10pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZENhdGVnb3J5O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkQ2F0ZWdvcnknO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHksIGNvbG9ycywgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEFycm93UmlnaHRBbHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd1JpZ2h0QWx0JztcclxuaW1wb3J0IHsgSWNvbkFsdGVybmF0ZSB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcclxuaW1wb3J0IHsgQ2FyZEJhc2UgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgZm9udFdlaWdodDcwMDoge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gIH0sXHJcbiAgaGVhZGluZzp7XHJcbiAgICBmb250U2l6ZTpcIjI0cHhcIlxyXG4gIH0sXHJcbiAgY2F0ZWdvcnlJY29uQnV0dG9uOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgfSxcclxuICBzdWJoZWFkaW5nOnt9XHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgY2F0ZWdvcnkgbGluayBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZENhdGVnb3J5TGluayA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBmb250SWNvbkNsYXNzLFxyXG4gICAgY29sb3IsXHJcbiAgICB0aXRsZSxcclxuICAgIHN1YnRpdGxlLFxyXG4gICAgaHJlZixcclxuICAgIGFsaWduLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgaWNvbkFsdGVybmF0ZVByb3BzLFxyXG4gICAgdGl0bGVQcm9wcyxcclxuICAgIHN1YnRpdGxlUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGxldCBqdXN0aWZ5R3JpZCA9ICdmbGV4LXN0YXJ0JztcclxuICBpZiAoYWxpZ24gPT09ICdjZW50ZXInKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9ICdjZW50ZXInO1xyXG4gIH0gZWxzZSBpZiAoYWxpZ24gPT09ICdyaWdodCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gJ2ZsZXgtZW5kJztcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXCJjYXJkLWNhdGVnb3J5LWxpbmtcIiwgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPD5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gY2xhc3NOYW1lPSdjYXJkLWNhdGVnb3J5LWxpbmtfX3dyYXBwZXInPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9e2p1c3RpZnlHcmlkfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8SWNvbkFsdGVybmF0ZVxyXG4gICAgICAgICAgICAgIGZvbnRJY29uQ2xhc3M9e2ZvbnRJY29uQ2xhc3N9XHJcbiAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICAgICAgICAgIHNpemU9J21lZGl1bSdcclxuICAgICAgICAgICAgICB7Li4uaWNvbkFsdGVybmF0ZVByb3BzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2g2J1xyXG4gICAgICAgICAgICAgIGNvbG9yPSd0ZXh0UHJpbWFyeSdcclxuICAgICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZm9udFdlaWdodDcwMCl9XHJcbiAgICAgICAgICAgICAgey4uLnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIHtzdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nYm9keTEnXHJcbiAgICAgICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3ViaGVhZGluZ31cclxuICAgICAgICAgICAgICAgIGNvbG9yPSd0ZXh0UHJpbWFyeSdcclxuICAgICAgICAgICAgICAgIHsuLi5zdWJ0aXRsZVByb3BzfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzdWJ0aXRsZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPXtocmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICBcImNhcmQtY2F0ZWdvcnktbGlua19faXRlbVwiLFxyXG4gICAgICAgICAgICBjbGFzc2VzLmNhdGVnb3J5SWNvbkJ1dHRvblxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9J2NhcmQtY2F0ZWdvcnktbGlua19faWNvbi1idXR0b24nPlxyXG4gICAgICAgICAgICA8QXJyb3dSaWdodEFsdEljb25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQtY2F0ZWdvcnktbGlua19faWNvbidcclxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjNTEyMGZmXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZENhdGVnb3J5TGluay5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdsZWZ0JyxcclxuICBocmVmOiAnIycsXHJcbiAgaWNvbkFsdGVybmF0ZVByb3BzOiB7fSxcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxufTtcclxuXHJcbkNhcmRDYXRlZ29yeUxpbmsucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gdGl0bGUgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIHN1YnRpdGxlIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gZGVzY3JpcHRpb24gdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gZm9udCBpY29uIGNsYXNzIG5hbWUgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBmb250SWNvbkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIGljb24gY29sb3IgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgIGNvbG9ycy5yZWQsXHJcbiAgICBjb2xvcnMucGluayxcclxuICAgIGNvbG9ycy5wdXJwbGUsXHJcbiAgICBjb2xvcnMuZGVlcFB1cnBsZSxcclxuICAgIGNvbG9ycy5pbmRpZ28sXHJcbiAgICBjb2xvcnMuYmx1ZSxcclxuICAgIGNvbG9ycy5saWdodEJsdWUsXHJcbiAgICBjb2xvcnMuY3lhbixcclxuICAgIGNvbG9ycy50ZWFsLFxyXG4gICAgY29sb3JzLmdyZWVuLFxyXG4gICAgY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICBjb2xvcnMubGltZSxcclxuICAgIGNvbG9ycy55ZWxsb3csXHJcbiAgICBjb2xvcnMuYW1iZXIsXHJcbiAgICBjb2xvcnMub3JhbmdlLFxyXG4gICAgY29sb3JzLmRlZXBPcmFuZ2UsXHJcbiAgICBjb2xvcnMuYnJvd24sXHJcbiAgICBjb2xvcnMuZ3JleSxcclxuICAgIGNvbG9ycy5ibHVlR3JleSxcclxuICBdKS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250ZW50IGFsaWdubWVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIEljb25BbHRlcm5hdGUgY29tcG9uZW50XHJcbiAgICovXHJcbiAgaWNvbkFsdGVybmF0ZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZENhdGVnb3J5TGluaztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZENhdGVnb3J5TGluayc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1BdmF0YXIsXHJcbiAgQXZhdGFyLFxyXG4gIExpc3RJdGVtVGV4dCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGRvdDoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGRvdEJpZzoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBkb3RTbWFsbDoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcclxuICB9LFxyXG4gIGpvYlRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxuICBkb3RNYXJnaW46IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGpvYiBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZEpvYiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBiYWRnZUNvbG9yLFxyXG4gICAgYmFkZ2VUaXRsZSxcclxuICAgIGpvYlRpdGxlLFxyXG4gICAgam9iTG9jYXRpb24sXHJcbiAgICBqb2JUeXBlLFxyXG4gICAgam9iRGF0ZSxcclxuICAgIGNvbXBhbnlMb2dvLFxyXG4gICAgY29tcGFueU5hbWUsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEJhc2VcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjYXJkLWpvYicsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgYWxpZ249XCJsZWZ0XCJcclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgeHM9ezEyfT5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRvdCwgY2xhc3Nlcy5kb3RCaWcpfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBiYWRnZUNvbG9yIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwic3BhblwiIHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cclxuICAgICAgICAgICAge2JhZGdlVGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5qb2JUaXRsZX0+XHJcbiAgICAgICAgICAgIHtqb2JUaXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7am9iTG9jYXRpb259XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5kb3QsIGNsYXNzZXMuZG90U21hbGwsIGNsYXNzZXMuZG90TWFyZ2luKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtqb2JUeXBlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8TGlzdEl0ZW0gZGlzYWJsZUd1dHRlcnM+XHJcbiAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgPEF2YXRhciBzcmM9e2NvbXBhbnlMb2dvfSBhbHQ9e2NvbXBhbnlOYW1lfSAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtjb21wYW55TmFtZX0gc2Vjb25kYXJ5PXtqb2JEYXRlfSAvPlxyXG4gICAgICA8L0xpc3RJdGVtPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZEpvYi5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBCYWRnZSBjb2xvciBvZiB0aGUgam9iIGNhcmRcclxuICAgKi9cclxuICBiYWRnZUNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQmFkZ2UgdGl0bGUgb2YgdGhlIGpvYiBjYXJkXHJcbiAgICovXHJcbiAgYmFkZ2VUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiB0aXRsZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYlRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIGxvY2F0aW9uIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iTG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgdHlwZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYlR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgbG9jYXRpb24gb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JEYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQ29tcGFueSBsb2dvIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgY29tcGFueUxvZ286IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDb21wYW55IG5hbWUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBjb21wYW55TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEpvYjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZEpvYic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgQXZhdGFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuaW1wb3J0IHsgTGVhcm5Nb3JlTGluayB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGNvbXBhbnlBdmF0YXI6IHtcclxuICAgIHdpZHRoOiA2MCxcclxuICAgIGhlaWdodDogNjAsXHJcbiAgfSxcclxuICBkb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBkb3RTbWFsbDoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcclxuICB9LFxyXG4gIGNvbXBhbnlOYW1lOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxuICBkb3RNYXJnaW46IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGpvYiBjYXJkIGNvbXBhbnlcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkSm9iQ29tcGFueSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBqb2JUaXRsZSxcclxuICAgIGpvYkxvY2F0aW9uLFxyXG4gICAgY29tcGFueUxvZ28sXHJcbiAgICBjb21wYW55TmFtZSxcclxuICAgIGpvYnNDb3VudCxcclxuICAgIGNvbXBhbnlJbmZvLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRCYXNlXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY2FyZC1jb21wYW55JywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICBhbGlnbj1cImxlZnRcIlxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgc3JjPXtjb21wYW55TG9nb31cclxuICAgICAgICAgICAgYWx0PXtjb21wYW55TmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBhbnlBdmF0YXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMuY29tcGFueU5hbWV9PlxyXG4gICAgICAgICAgICB7Y29tcGFueU5hbWV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDNcIiB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxyXG4gICAgICAgICAgICB7am9iVGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5kb3QsIGNsYXNzZXMuZG90U21hbGwsIGNsYXNzZXMuZG90TWFyZ2luKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIHtqb2JMb2NhdGlvbn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPExlYXJuTW9yZUxpbmsgdGl0bGU9e2pvYnNDb3VudH0gdmFyaWFudD1cInN1YnRpdGxlMVwiIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInNwYW5cIiB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAge2NvbXBhbnlJbmZvfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZEpvYkNvbXBhbnkucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogSm9iIHRpdGxlIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgbG9jYXRpb24gb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JMb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIENvbXBhbnkgbG9nbyBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGNvbXBhbnlMb2dvOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQ29tcGFueSBuYW1lIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgY29tcGFueU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDb3VudCBvZiB0aGUgam9icyBpbiB0aGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JzQ291bnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDb21wYW55IGluZm8gaW4gdGhlIGNhcmRcclxuICAgKi9cclxuICBjb21wYW55SW5mbzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEpvYkNvbXBhbnk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRKb2JDb21wYW55JztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjb2xvcnMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBib3JkZXI6IGBzb2xpZCAxcHggcmdiYSg0MywgNDEsIDQ1LCAwLjIpYCxcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgJzAgMTFweCA1NXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA3KSwgMCAxM3B4IDE4cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMTUpJyxcclxuICAgICAgJyYgLmNhcmQtam9iLW1pbmltYWxfX3RpdGxlLCAmIC5jYXJkLWpvYi1taW5pbWFsX19sb2NhdGlvbiwgJiAuY2FyZC1qb2ItbWluaW1hbF9fYXJyb3cnOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkSm9iTWluaW1hbEJvZHk6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgam9iIGNhcmQgY29tcGFueVxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRKb2JNaW5pbWFsID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlLFxyXG4gICAgc3VidGl0bGUsXHJcbiAgICBzaG93QXJyb3csXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgJ2NhcmQtam9iLW1pbmltYWwnKX0gey4uLnJlc3R9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuY2FyZEpvYk1pbmltYWxCb2R5LCAnY2FyZC1qb2ItbWluaW1hbF9fYm9keScpfVxyXG4gICAgICAgIHN0eWxlPXshc2hvd0Fycm93ID8geyBtYXJnaW5SaWdodDogMCB9IDoge319XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtam9iLW1pbmltYWxfX3RpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRpdGxlLCAnY2FyZC1qb2ItbWluaW1hbF9fdGl0bGUnKX1cclxuICAgICAgICAgICAgey4uLnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtam9iLW1pbmltYWxfX2xvY2F0aW9uLWNvbmF0aW5lclwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1qb2ItbWluaW1hbF9fbG9jYXRpb25cIlxyXG4gICAgICAgICAgICB7Li4uc3VidGl0bGVQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dBcnJvdyA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtam9iLW1pbmltYWxfX2Fycm93LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgZm9udEljb25DbGFzcz1cImZhcyBmYS1hbmdsZS1yaWdodFwiXHJcbiAgICAgICAgICAgIGZvbnRJY29uQ29sb3I9e2NvbG9ycy5ncmV5WzcwMF19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtam9iLW1pbmltYWxfX2Fycm93XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRKb2JNaW5pbWFsLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzaG93QXJyb3c6IGZhbHNlLFxyXG4gIHRpdGxlUHJvcHM6IHt9LFxyXG4gIHN1YnRpdGxlUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQ2FyZEpvYk1pbmltYWwucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogSm9iIHRpdGxlIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2Igc3VidGl0bGUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCBzaG93IGFycm93IG9yIG5vdFxyXG4gICAqL1xyXG4gIHNob3dBcnJvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBzdWJ0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkSm9iTWluaW1hbDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZEpvYk1pbmltYWwnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHksIGNvbG9ycyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgQ2FyZEJhc2UgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJvcmRlclJpZ2h0OiBgJHt0aGVtZS5zcGFjaW5nKDEpfXB4IHNvbGlkICR7Y29sb3JzLnJlZFs1MDBdfWAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZG90OiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgZG90QmlnOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIGRvdFNtYWxsOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxIC8gMiksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gIH0sXHJcbiAgam9iVGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICB9LFxyXG4gIGRvdE1hcmdpbjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gIH0sXHJcbiAgdGFnOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXHJcbiAgfSxcclxuICB0ZXh0V2hpdGU6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgam9iIGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkSm9iVGFnID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGJhZGdlQ29sb3IsXHJcbiAgICBiYWRnZVRpdGxlLFxyXG4gICAgam9iVGl0bGUsXHJcbiAgICBqb2JMb2NhdGlvbixcclxuICAgIGpvYlR5cGUsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEJhc2UgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gYWxpZ249XCJsZWZ0XCIgey4uLnJlc3R9PlxyXG4gICAgICA8PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHhzPXsxMn0+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGFnfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJhZGdlQ29sb3IsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJhZGdlQ29sb3IsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFdoaXRlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2JhZGdlVGl0bGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmpvYlRpdGxlfT5cclxuICAgICAgICAgICAge2pvYlRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtqb2JMb2NhdGlvbn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRvdCwgY2xhc3Nlcy5kb3RTbWFsbCwgY2xhc3Nlcy5kb3RNYXJnaW4pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2pvYlR5cGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZEpvYlRhZy5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBCYWRnZSBjb2xvciBvZiB0aGUgam9iIGNhcmRcclxuICAgKi9cclxuICBiYWRnZUNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQmFkZ2UgdGl0bGUgb2YgdGhlIGpvYiBjYXJkXHJcbiAgICovXHJcbiAgYmFkZ2VUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiB0aXRsZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYlRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIGxvY2F0aW9uIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iTG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgdHlwZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYlR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRKb2JUYWc7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRKb2JUYWcnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIExpc3RJdGVtLCBEaXZpZGVyLCBMaXN0LCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBmZWF0dXJlQ2hlY2s6IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgam9iIGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkUHJpY2luZ1N0YW5kYXJkID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlLFxyXG4gICAgc3VidGl0bGUsXHJcbiAgICBwcmljZUNvbXBvbmVudCxcclxuICAgIGZlYXR1cmVDaGVja0NvbXBvbmVudCxcclxuICAgIGZlYXR1cmVzLFxyXG4gICAgY3RhLFxyXG4gICAgZGlzY2xhaW1lcixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHRpdGxlUHJvcHMsXHJcbiAgICBzdWJ0aXRsZVByb3BzLFxyXG4gICAgZGlzY2xhaW1lclByb3BzLFxyXG4gICAgZmVhdHVyZVRpdGxlUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEJhc2VcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjYXJkLXByaWNpbmctc3RhbmRhcmQnLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX193cmFwcGVyXCI+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9faGVhZGxpbmVcIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXHJcbiAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX3RpdGxlXCJcclxuICAgICAgICAgICAgey4uLnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIHtzdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX3N1YnRpdGxlXCJcclxuICAgICAgICAgICAgICB7Li4uc3VidGl0bGVQcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzdWJ0aXRsZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fZGl2aWRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fZGl2aWRlclwiIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2NvbnRlbnRcIj5cclxuICAgICAgICAgIHtwcmljZUNvbXBvbmVudH1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAge2ZlYXR1cmVzICYmIChcclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2ZlYXR1cmUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8TGlzdCBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2ZlYXR1cmUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZUd1dHRlcnNcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19mZWF0dXJlLWxpc3QtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtmZWF0dXJlQ2hlY2tDb21wb25lbnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmQtcHJpY2luZy1zdGFuZGFyZF9fZmVhdHVyZS1jaGVjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuZmVhdHVyZUNoZWNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZUNoZWNrQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19mZWF0dXJlLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICB7Li4uZmVhdHVyZVRpdGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fY3RhLXdyYXBwZXJcIj5cclxuICAgICAgICAgIHtjdGF9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIHtkaXNjbGFpbWVyICYmIChcclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2Rpc2NsYWltZXItd3JhcHBlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2Rpc2NsYWltZXItdGl0bGVcIlxyXG4gICAgICAgICAgICAgIHsuLi5kaXNjbGFpbWVyUHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGlzY2xhaW1lcn1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ2FyZEJhc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRQcmljaW5nU3RhbmRhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRpdGxlUHJvcHM6IHt9LFxyXG4gIHN1YnRpdGxlUHJvcHM6IHt9LFxyXG4gIGRpc2NsYWltZXJQcm9wczoge30sXHJcbiAgZmVhdHVyZVRpdGxlUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQ2FyZFByaWNpbmdTdGFuZGFyZC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgdGhlIHByaWNpbmcgY2FyZFxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogIFN1YnRpdGxlIG9mIHRoZSBwcmljaW5nIGNhcmRcclxuICAgKi9cclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgcHJpY2luZyBjb21wb25lbnQgb2YgdGhlIHByaWNpbmcgY2FyZFxyXG4gICAqL1xyXG4gIHByaWNlQ29tcG9uZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBmZWF0dXJlcyBjaGVjayBjb21wb25lbnQgb2YgdGhlIHByaWNpbmcgY2FyZFxyXG4gICAqL1xyXG4gIGZlYXR1cmVDaGVja0NvbXBvbmVudDogUHJvcFR5cGVzLm5vZGUsXHJcbiAgLyoqXHJcbiAgICogRmVhdHVyZXMgYXJyYXkgb2YgdGhlIHByaWNpbmcgY2FyZFxyXG4gICAqL1xyXG4gIGZlYXR1cmVzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgLyoqXHJcbiAgICogIENUQSBidXR0b24gb2YgdGhlIHByaWNpbmcgY2FyZFxyXG4gICAqL1xyXG4gIGN0YTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBEaWNsYWltZXIgb2YgdGhlIHByaWNpbmcgY2FyZFxyXG4gICAqL1xyXG4gIGRpc2NsYWltZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBzdWJ0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBkaXNjbGFpbWVyIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgZGlzY2xhaW1lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgZmVhdHVyZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGZlYXR1cmVUaXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFByaWNpbmdTdGFuZGFyZDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZFByaWNpbmdTdGFuZGFyZCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRNZWRpYSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICB3aXRoU2hhZG93OiB7XHJcbiAgICBib3hTaGFkb3c6IGAwIDJweCAxMHB4IDAgJHt0aGVtZS5wYWxldHRlLmNhcmRTaGFkb3d9YCxcclxuICB9LFxyXG4gIG5vU2hhZG93OiB7XHJcbiAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICB9LFxyXG4gIG5vQm9yZGVyOiB7XHJcbiAgICBib3JkZXI6IDAsXHJcbiAgfSxcclxuICBub0JnOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gIH0sXHJcbiAgbGlmdFVwOiB7XHJcbiAgICB0cmFuc2l0aW9uOlxyXG4gICAgICAnYm94LXNoYWRvdyAuMjVzIGVhc2UsdHJhbnNmb3JtIC4yNXMgZWFzZSwtd2Via2l0LXRyYW5zZm9ybSAuMjVzIGVhc2UnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICAnMCAxLjVyZW0gMi41cmVtIHJnYmEoMjIsMjgsNDUsLjEpLDAgLjNyZW0gMC41cmVtIC0uNTByZW0gcmdiYSgyMiwyOCw0NSwuMDUpICFpbXBvcnRhbnQnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLC01cHgsMCknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1lZGlhOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGhlaWdodDogMzAwLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg0LCAyKSxcclxuICAgICcmOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCwgMiksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYsIDMpLFxyXG4gICAgICAnJjpsYXN0LWNoaWxkJzoge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiwgMyksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGVmdDoge1xyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gIH0sXHJcbiAgcmlnaHQ6IHtcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXHJcbiAgfSxcclxuICBjZW50ZXI6IHtcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgcHJvZHVjdCBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZFByb2R1Y3QgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbWVkaWFDbGFzc05hbWUsXHJcbiAgICB3aXRoU2hhZG93LFxyXG4gICAgbm9TaGFkb3csXHJcbiAgICBub0JvcmRlcixcclxuICAgIG5vQmcsXHJcbiAgICBsaWZ0VXAsXHJcbiAgICBjYXJkQ29udGVudCxcclxuICAgIG1lZGlhQ29udGVudCxcclxuICAgIGFsaWduLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICdjYXJkLXByb2R1Y3QnLFxyXG4gICAgICAgIGNsYXNzZXMucm9vdCxcclxuICAgICAgICB3aXRoU2hhZG93ID8gY2xhc3Nlcy53aXRoU2hhZG93IDoge30sXHJcbiAgICAgICAgbm9TaGFkb3cgPyBjbGFzc2VzLm5vU2hhZG93IDoge30sXHJcbiAgICAgICAgbm9Cb3JkZXIgPyBjbGFzc2VzLm5vQm9yZGVyIDoge30sXHJcbiAgICAgICAgbm9CZyA/IGNsYXNzZXMubm9CZyA6IHt9LFxyXG4gICAgICAgIGxpZnRVcCA/IGNsYXNzZXMubGlmdFVwIDoge30sXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY2FyZC1wcm9kdWN0X19tZWRpYScsIGNsYXNzZXMubWVkaWEsIG1lZGlhQ2xhc3NOYW1lKX1cclxuICAgICAgPlxyXG4gICAgICAgIHttZWRpYUNvbnRlbnR9XHJcbiAgICAgIDwvQ2FyZE1lZGlhPlxyXG4gICAgICA8Q2FyZENvbnRlbnRcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAnY2FyZC1wcm9kdWN0X19jb250ZW50JyxcclxuICAgICAgICAgIGNsYXNzZXMuY29udGVudCxcclxuICAgICAgICAgIGNsYXNzZXNbYWxpZ25dLFxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2FyZENvbnRlbnR9XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRQcm9kdWN0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2xlZnQnLFxyXG59O1xyXG5cclxuQ2FyZFByb2R1Y3QucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3NlcyBmb3IgdGhlIG1lZGlhXHJcbiAgICovXHJcbiAgbWVkaWFDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBzaG93IGN1c3RvbSBzaGFkb3dcclxuICAgKi9cclxuICB3aXRoU2hhZG93OiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHJlbmRlciB0aGUgY2FyZCB3aXRob3V0IHNoYWRvd1xyXG4gICAqL1xyXG4gIG5vU2hhZG93OiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGhpZGUgdGhlIGNhcmQgYm9yZGVyc1xyXG4gICAqL1xyXG4gIG5vQm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHNob3cgdHJhbnNwYXJlbnQgYmFja2dyb3VuZFxyXG4gICAqL1xyXG4gIG5vQmc6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gbGlmdCB1cCBvbiBob3ZlclxyXG4gICAqL1xyXG4gIGxpZnRVcDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogVGhlIENhcmQgY29udGVudFxyXG4gICAqL1xyXG4gIGNhcmRDb250ZW50OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIENhcmQgTWVkaWEgY29udGVudFxyXG4gICAqL1xyXG4gIG1lZGlhQ29udGVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250ZW50IGFsaWdubWVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQcm9kdWN0O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkUHJvZHVjdCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgY29sb3JzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uQWx0ZXJuYXRlIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBmb250V2VpZ2h0NzAwOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxuICB0ZXh0Qmx1ZToge1xyXG4gICAgY29sb3I6IFwiIzUxMjBGRlwiLFxyXG4gIH0sXHJcbiAgaW1nRmx1aWQ6XHJcbiAge1xyXG4gICAgd2lkdGg6XCI1MHB4XCIsXHJcbiAgICBoZWlnaHQ6XCI1MHB4XCJcclxuICB9LFxyXG4gIHBiXzA6IHtcclxuICAgIHBhZGRpbmdCb3R0b206IFwiMCAhaW1wb3J0YW50XCIsXHJcbiAgfSxcclxuICBwYl9wdF8wOiB7XHJcbiAgICBwYWRkaW5nVG9wOiBcIjAgIWltcG9ydGFudFwiLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogXCIwICFpbXBvcnRhbnRcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHByb21vIGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkUHJvbW8gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZUNvbG9yLFxyXG4gICAgZm9udEljb25DbGFzcyxcclxuICAgIGNvbG9yLFxyXG4gICAgdGl0bGUsXHJcbiAgICBzdWJ0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgYWxpZ24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBzcmMsXHJcbiAgICBpY29uQWx0ZXJuYXRlUHJvcHMsXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIGRlc2NyaXB0aW9uUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGxldCBqdXN0aWZ5R3JpZCA9IFwiZmxleC1zdGFydFwiO1xyXG4gIGlmIChhbGlnbiA9PT0gXCJjZW50ZXJcIikge1xyXG4gICAganVzdGlmeUdyaWQgPSBcImNlbnRlclwiO1xyXG4gIH0gZWxzZSBpZiAoYWxpZ24gPT09IFwicmlnaHRcIikge1xyXG4gICAganVzdGlmeUdyaWQgPSBcImZsZXgtZW5kXCI7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEJhc2VcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFwiY2FyZF9fcHJvbW9cIiwgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT0nY2FyZC1wcm9tb19fd3JhcHBlcic+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9e2p1c3RpZnlHcmlkfVxyXG4gICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdjYXJkLXByb21vX19pY29uLXdyYXBwZXInXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9e3NyY30gYWx0PXtzcmN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdGbHVpZH0vPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFwiY2FyZC1wcm9tb19fdGl0bGUtd3JhcHBlclwiLCBjbGFzc2VzLnBiXzApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J2g0J1xyXG4gICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICBcImNhcmQtcHJvbW9fX3RpdGxlXCIsXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcy5mb250V2VpZ2h0NzAwLFxyXG4gICAgICAgICAgICAgIGNsYXNzZXMudGV4dEJsdWVcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgey4uLnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAge3N1YnRpdGxlICYmIChcclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXCJjYXJkLXByb21vX19zdWJ0aXRsZS13cmFwcGVyXCIsIGNsYXNzZXMucGJfcHRfMCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0naDYnXHJcbiAgICAgICAgICAgICAgY29sb3I9J3RleHRQcmltYXJ5J1xyXG4gICAgICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXCJjYXJkLXByb21vX19zdWJ0aXRsZVwiLCBjbGFzc2VzLmZvbnRXZWlnaHQ3MDApfVxyXG4gICAgICAgICAgICAgIHsuLi5zdWJ0aXRsZVByb3BzfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcImNhcmQtcHJvbW9fX2Rlc2NyaXB0aW9uLXdyYXBwZXJcIiwgY2xhc3Nlcy5wYl9wdF8wKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MSdcclxuICAgICAgICAgICAgICBjb2xvcj0ndGV4dFByaW1hcnknXHJcbiAgICAgICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2FyZC1wcm9tb19fZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgey4uLmRlc2NyaXB0aW9uUHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NhcmRCYXNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkUHJvbW8uZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsaWduOiAnbGVmdCcsXHJcbiAgaWNvbkFsdGVybmF0ZVByb3BzOiB7fSxcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxuICBkZXNjcmlwdGlvblByb3BzOiB7fSxcclxufTtcclxuXHJcbkNhcmRQcm9tby5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBQcm9tbyB0aXRsZSB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gc3VidGl0bGUgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBQcm9tbyBkZXNjcmlwdGlvbiB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIGZvbnQgaWNvbiBjbGFzcyBuYW1lIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgZm9udEljb25DbGFzczogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBQcm9tbyBpY29uIGNvbG9yIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICBjb2xvcnMucmVkLFxyXG4gICAgY29sb3JzLnBpbmssXHJcbiAgICBjb2xvcnMucHVycGxlLFxyXG4gICAgY29sb3JzLmRlZXBQdXJwbGUsXHJcbiAgICBjb2xvcnMuaW5kaWdvLFxyXG4gICAgY29sb3JzLmJsdWUsXHJcbiAgICBjb2xvcnMubGlnaHRCbHVlLFxyXG4gICAgY29sb3JzLmN5YW4sXHJcbiAgICBjb2xvcnMudGVhbCxcclxuICAgIGNvbG9ycy5ncmVlbixcclxuICAgIGNvbG9ycy5saWdodEdyZWVuLFxyXG4gICAgY29sb3JzLmxpbWUsXHJcbiAgICBjb2xvcnMueWVsbG93LFxyXG4gICAgY29sb3JzLmFtYmVyLFxyXG4gICAgY29sb3JzLm9yYW5nZSxcclxuICAgIGNvbG9ycy5kZWVwT3JhbmdlLFxyXG4gICAgY29sb3JzLmJyb3duLFxyXG4gICAgY29sb3JzLmdyZXksXHJcbiAgICBjb2xvcnMuYmx1ZUdyZXksXHJcbiAgXSkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudCBhbGlnbm1lbnRcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgY29sb3JcclxuICAgKi9cclxuICB0aXRsZUNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgSWNvbkFsdGVybmF0ZSBjb21wb25lbnRcclxuICAgKi9cclxuICBpY29uQWx0ZXJuYXRlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBzdWJ0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBkZXNjaXB0aW9uIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb25Qcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQcm9tbztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZFByb21vJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge1xyXG4gIEdyaWQsXHJcbiAgQXZhdGFyLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUF2YXRhcixcclxuICBMaXN0SXRlbVRleHQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSByZXZpZXcgY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRSZXZpZXcgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWNvbixcclxuICAgIHRleHQsXHJcbiAgICBhdXRob3JQaG90byxcclxuICAgIGF1dGhvck5hbWUsXHJcbiAgICBhdXRob3JUaXRsZSxcclxuICAgIGFsaWduLFxyXG4gICAgdGV4dFZhcmlhbnQsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB0ZXh0UHJvcHMsXHJcbiAgICBsaXN0SXRlbVByaW1hcnlUeXBvZ3JhcGh5UHJvcHMsXHJcbiAgICBsaXN0SXRlbVNlY29uZGFyeVR5cG9ncmFwaHlQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgbGV0IGp1c3RpZnlHcmlkID0gJ2NlbnRlcic7XHJcbiAgaWYgKGFsaWduID09PSAnbGVmdCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gJ2ZsZXgtc3RhcnQnO1xyXG4gIH0gZWxzZSBpZiAoYWxpZ24gPT09ICdyaWdodCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gJ2ZsZXgtZW5kJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEJhc2VcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjYXJkLXJldmlldycsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fd3JhcHBlclwiPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtqdXN0aWZ5R3JpZH1cclxuICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X19pY29uLXdyYXBwZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX3RleHQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD17dGV4dFZhcmlhbnR9XHJcbiAgICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgIHsuLi50ZXh0UHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2xpdHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e2p1c3RpZnlHcmlkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fbGlzdC13cmFwcGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpc3QgZGlzYWJsZVBhZGRpbmcgY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2xpc3RcIj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2xpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyIGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X19saXN0LWl0ZW0tYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICB7Li4uYXV0aG9yUGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXthdXRob3JOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X19hdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2xpc3QtaXRlbS10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17YXV0aG9yTmFtZX1cclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXthdXRob3JUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmxpc3RJdGVtUHJpbWFyeVR5cG9ncmFwaHlQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ubGlzdEl0ZW1TZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ2FyZEJhc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRSZXZpZXcuZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsaWduOiAnY2VudGVyJyxcclxuICB0ZXh0VmFyaWFudDogJ2g2JyxcclxuICB0ZXh0UHJvcHM6IHt9LFxyXG4gIGxpc3RJdGVtUHJpbWFyeVR5cG9ncmFwaHlQcm9wczoge30sXHJcbiAgbGlzdEl0ZW1TZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQ2FyZFJldmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBJY29uIHRvIHNob3cgaW5zaWRlIHRoZSByZXZpZXcgY2FyZFxyXG4gICAqL1xyXG4gIGljb246IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUmV2aWV3IHRleHQgdG8gc2hvdyBpbnNpZGUgdGhlIHJldmlldyBjYXJkXHJcbiAgICovXHJcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFJldmlld2VyIHBob3RvIHRvIHNob3cgaW5zaWRlIHRoZSByZXZpZXcgY2FyZC5TaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggc3JjIGFuZCBzcmNTZXQgcHJvcGVydGllc1xyXG4gICAqL1xyXG4gIGF1dGhvclBob3RvOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUmV2aWV3ZXIgbmFtZSB0byBzaG93IGluc2lkZSB0aGUgcmV2aWV3IGNhcmRcclxuICAgKi9cclxuICBhdXRob3JOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUmV2aWV3ZXIgdGl0bGUgdG8gc2hvdyBpbnNpZGUgdGhlIHJldmlldyBjYXJkXHJcbiAgICovXHJcbiAgYXV0aG9yVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQWxpZ25tZW50IG9mIHRoZSBjb250ZW50XHJcbiAgICovXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJ10pLFxyXG4gIC8qKlxyXG4gICAqIFJldmlldyB0ZXh0IHZhcmlhbnRcclxuICAgKi9cclxuICB0ZXh0VmFyaWFudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHRleHQgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0ZXh0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBsaXN0IGl0ZW0gcHJpbWFyeSB0ZXh0IFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgbGlzdEl0ZW1QcmltYXJ5VHlwb2dyYXBoeVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgbGlzdCBpdGVtIHNlY29uZGFyeSB0ZXh0IFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgbGlzdEl0ZW1TZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUmV2aWV3O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkUmV2aWV3JztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEdyaWQsIEJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAndmFsaWRhdGUuanMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3Qgc2NoZW1hID0ge1xyXG4gIGZ1bGxuYW1lOiB7XHJcbiAgICBwcmVzZW5jZTogeyBhbGxvd0VtcHR5OiBmYWxzZSwgbWVzc2FnZTogJ2lzIHJlcXVpcmVkJyB9LFxyXG4gICAgbGVuZ3RoOiB7XHJcbiAgICAgIG1heGltdW06IDEyOCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBlbWFpbDoge1xyXG4gICAgcHJlc2VuY2U6IHsgYWxsb3dFbXB0eTogZmFsc2UsIG1lc3NhZ2U6ICdpcyByZXF1aXJlZCcgfSxcclxuICAgIGVtYWlsOiB0cnVlLFxyXG4gICAgbGVuZ3RoOiB7XHJcbiAgICAgIG1heGltdW06IDMwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtZXNzYWdlOiB7XHJcbiAgICBwcmVzZW5jZTogeyBhbGxvd0VtcHR5OiBmYWxzZSwgbWVzc2FnZTogJ2lzIHJlcXVpcmVkJyB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IFtmb3JtU3RhdGUsIHNldEZvcm1TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgIHZhbHVlczoge30sXHJcbiAgICB0b3VjaGVkOiB7fSxcclxuICAgIGVycm9yczoge30sXHJcbiAgfSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlcnJvcnMgPSB2YWxpZGF0ZShmb3JtU3RhdGUudmFsdWVzLCBzY2hlbWEpO1xyXG5cclxuICAgIHNldEZvcm1TdGF0ZShmb3JtU3RhdGUgPT4gKHtcclxuICAgICAgLi4uZm9ybVN0YXRlLFxyXG4gICAgICBpc1ZhbGlkOiBlcnJvcnMgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgIGVycm9yczogZXJyb3JzIHx8IHt9LFxyXG4gICAgfSkpO1xyXG4gIH0sIFtmb3JtU3RhdGUudmFsdWVzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnBlcnNpc3QoKTtcclxuXHJcbiAgICBzZXRGb3JtU3RhdGUoZm9ybVN0YXRlID0+ICh7XHJcbiAgICAgIC4uLmZvcm1TdGF0ZSxcclxuICAgICAgdmFsdWVzOiB7XHJcbiAgICAgICAgLi4uZm9ybVN0YXRlLnZhbHVlcyxcclxuICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOlxyXG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCdcclxuICAgICAgICAgICAgPyBldmVudC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgICAgICA6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgfSxcclxuICAgICAgdG91Y2hlZDoge1xyXG4gICAgICAgIC4uLmZvcm1TdGF0ZS50b3VjaGVkLFxyXG4gICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFzRXJyb3IgPSBmaWVsZCA9PlxyXG4gICAgZm9ybVN0YXRlLnRvdWNoZWRbZmllbGRdICYmIGZvcm1TdGF0ZS5lcnJvcnNbZmllbGRdID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgbmFtZT1cImNvbnRhY3QtZm9ybVwiXHJcbiAgICAgICAgbWV0aG9kPVwicG9zdFwiXHJcbiAgICAgICAgYWN0aW9uPVwiL3N1Ym1pdGlvbi5odG1sP2NvbnRhY3QtZm9ybS1zdWJtaXQtc3VjY2Vzcz10cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZvcm0tbmFtZVwiIHZhbHVlPVwiY29udGFjdC1mb3JtXCIgLz5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5Db250YWN0IFVzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICBXZSBjYXJlZnVsbHkgcmVhZCBhbmQgYW5zd2VyIHRvIGFsbCBvdXIgZW1haWxzLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRnVsbCBOYW1lICpcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImZ1bGxuYW1lXCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBoZWxwZXJ0ZXh0PXtcclxuICAgICAgICAgICAgICAgIGhhc0Vycm9yKCdmdWxsbmFtZScpID8gZm9ybVN0YXRlLmVycm9ycy5mdWxsbmFtZVswXSA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXJyb3I9e2hhc0Vycm9yKCdmdWxsbmFtZScpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtU3RhdGUudmFsdWVzLmZ1bGxuYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkUtbWFpbCAqXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgaGVscGVydGV4dD17aGFzRXJyb3IoJ2VtYWlsJykgPyBmb3JtU3RhdGUuZXJyb3JzLmVtYWlsWzBdIDogbnVsbH1cclxuICAgICAgICAgICAgICBlcnJvcj17aGFzRXJyb3IoJ2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtU3RhdGUudmFsdWVzLmVtYWlsIHx8ICcnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk1lc3NhZ2UgKlwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgaGVscGVydGV4dD17XHJcbiAgICAgICAgICAgICAgICBoYXNFcnJvcignbWVzc2FnZScpID8gZm9ybVN0YXRlLmVycm9ycy5tZXNzYWdlWzBdIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlcnJvcj17aGFzRXJyb3IoJ21lc3NhZ2UnKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS52YWx1ZXMubWVzc2FnZSB8fCAnJ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICBGaWVsZHMgdGhhdCBhcmUgbWFya2VkIHdpdGggYW4gYXN0ZXJpc2sgKCopIHNpZ24gYXJlIHJlcXVpcmVkLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFmb3JtU3RhdGUuaXNWYWxpZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NvbnRhY3RGb3JtJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBkZXNjcmlwdGlvbiBsaXN0IHdpdGggaWNvblxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IERlc2NyaXB0aW9uTGlzdEljb24gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdGl0bGUsXHJcbiAgICBzdWJ0aXRsZSxcclxuICAgIGljb24sXHJcbiAgICBhbGlnbixcclxuICAgIHRpdGxlVmFyaWFudCxcclxuICAgIHN1YnRpdGxlVmFyaWFudCxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHRpdGxlUHJvcHMsXHJcbiAgICBzdWJ0aXRsZVByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBsZXQgZ3JpZEp1c3RpZnkgPSAnY2VudGVyJztcclxuXHJcbiAgaWYgKGFsaWduID09PSAnbGVmdCcpIHtcclxuICAgIGdyaWRKdXN0aWZ5ID0gJ2ZsZXgtc3RhcnQnO1xyXG4gIH0gZWxzZSBpZiAoYWxpZ24gPT09ICdyaWdodCcpIHtcclxuICAgIGdyaWRKdXN0aWZ5ID0gJ2ZsZXgtZW5kJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBjb250YWluZXJcclxuICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnZGVzY3JpcHRpb24tbGlzdC1pY29uJywgY2xhc3NOYW1lKX1cclxuICAgID5cclxuICAgICAgPEdyaWRcclxuICAgICAgICBpdGVtXHJcbiAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9e2dyaWRKdXN0aWZ5fVxyXG4gICAgICAgIHhzPXsxMn1cclxuICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1saXN0LWljb25fX2ljb24td3JhcHBlclwiXHJcbiAgICAgID5cclxuICAgICAgICB7aWNvbn1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tbGlzdC1pY29uX190aXRsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIHZhcmlhbnQ9e3RpdGxlVmFyaWFudH1cclxuICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxyXG4gICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMudGl0bGUsICdkZXNjcmlwdGlvbi1saXN0LWljb25fX3RpdGxlJyl9XHJcbiAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIHtzdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWxpc3QtaWNvbl9fc3VidGl0bGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD17c3VidGl0bGVWYXJpYW50fVxyXG4gICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWxpc3QtaWNvbl9fc3VidGl0bGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApfVxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5EZXNjcmlwdGlvbkxpc3RJY29uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgdGl0bGVWYXJpYW50OiAnaDYnLFxyXG4gIHN1YnRpdGxlVmFyaWFudDogJ2JvZHkxJyxcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxufTtcclxuXHJcbkRlc2NyaXB0aW9uTGlzdEljb24ucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIHRpdGxlXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiB0aGUgc3VidGl0bGVcclxuICAgKi9cclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHNob3VsZCBzaG93IHRoZSBhbHRlcm5hdGUgaWNvblxyXG4gICAqL1xyXG4gIGljb246IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGFsaWdubWVudCBvZiB0aGUgaXRlbXNcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgdmFyaWFudFxyXG4gICAqL1xyXG4gIHRpdGxlVmFyaWFudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBTdWJ0aXRsZSB2YXJpYW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVWYXJpYW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb25MaXN0SWNvbjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRGVzY3JpcHRpb25MaXN0SWNvbic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBvdmVyZmxvdzogJ3Zpc2libGUnLFxyXG4gIH0sXHJcbiAgY29sb3JEZWZhdWx0OiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuaW5kaWdvWzkwMF0sXHJcbiAgfSxcclxuICBoZXJvV3JhcHBlcjoge1xyXG4gICAgekluZGV4OiAyLFxyXG4gIH0sXHJcbiAgaGVyb0NvdmVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIG9wYWNpdHk6IDAuMixcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHpJbmRleDogMSxcclxuICB9LFxyXG4gIGhlcm9CZzoge1xyXG4gICAgYmFja2dyb3VuZFNpemU6ICdhdXRvJyxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gIH0sXHJcbiAgbm9Db3Zlck9wYWNpdHk6IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBiYWNrZ3JvdW5kIGhlcm9cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBIZXJvQmFja2dyb3VuZCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBjaGlsZHJlbixcclxuICAgIGRpc2JhbGVDb3Zlck9wYWNpdHksXHJcbiAgICBiYWNrZ3JvdW5kSW1nLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uLFxyXG4gICAgYmFja2dyb3VuZENvbG9yLFxyXG4gICAgY29udGVudFNlY3Rpb25DbGFzc05hbWUsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHVzZUN1c3RvbVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIGNvdmVyQmc6IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZEltZ30pYCxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcclxuICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZENvbG9yLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjoge1xyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGJhY2tncm91bmRQb3NpdGlvbixcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBjdXN0b21DbGFzc2VzID0gdXNlQ3VzdG9tU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAnaGVyby1iYWNrZ3JvdW5kJyxcclxuICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID8gY3VzdG9tQ2xhc3Nlcy5iYWNrZ3JvdW5kQ29sb3IgOiBjbGFzc2VzLmNvbG9yRGVmYXVsdCxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnaGVyby1iYWNrZ3JvdW5kX193cmFwcGVyJywgY2xhc3Nlcy5oZXJvV3JhcHBlcil9PlxyXG4gICAgICAgIDxTZWN0aW9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgIGNvbnRlbnRTZWN0aW9uQ2xhc3NOYW1lID8gY29udGVudFNlY3Rpb25DbGFzc05hbWUgOiAnJyxcclxuICAgICAgICAgICAgJ2hlcm8tYmFja2dyb3VuZF9fc2VjdGlvbicsXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgJ2hlcm8tYmFja2dyb3VuZF9fY292ZXInLFxyXG4gICAgICAgICAgY2xhc3Nlcy5oZXJvQmcsXHJcbiAgICAgICAgICBjbGFzc2VzLmhlcm9Db3ZlcixcclxuICAgICAgICAgIGN1c3RvbUNsYXNzZXMuY292ZXJCZyxcclxuICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbiA/IGN1c3RvbUNsYXNzZXMuYmFja2dyb3VuZFBvc2l0aW9uIDoge30sXHJcbiAgICAgICAgICBkaXNiYWxlQ292ZXJPcGFjaXR5ID8gY2xhc3Nlcy5ub0NvdmVyT3BhY2l0eSA6IHt9LFxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb0JhY2tncm91bmQucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ2hpbGRyZW4gdG8gcGxhY2VkIGluc2lkZSB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBCYWNrZ3JvdW5kIGltYWdlIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgYmFja2dyb3VuZEltZzogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgYmFja2dyb3VuZENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEJhY2tncm91bmQgcG9zaXRpb24gb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBiYWNrZ3JvdW5kUG9zaXRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ3VzdG9tIGNsYXNzZXMgZm9yIHRoZSBjb250ZW50IHNlY3Rpb25cclxuICAgKi9cclxuICBjb250ZW50U2VjdGlvbkNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBTaG91bGQgZGlzYWJsZSBoZXJlIGNvdmVyIG9wYWNpdHlcclxuICAgKi9cclxuICBkaXNiYWxlQ292ZXJPcGFjaXR5OiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9CYWNrZ3JvdW5kO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9IZXJvQmFja2dyb3VuZCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICB9LFxyXG4gIGhlcm86IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBtYXhXaWR0aDogdGhlbWUubGF5b3V0LmNvbnRlbnRXaWR0aCxcclxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uLXJldmVyc2VcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZXJvTGVmdFNpZGU6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgOCksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAyKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZXJvUmlnaHRTaWRlOiB7XHJcbiAgICBtYXhXaWR0aDogXCI1MCVcIixcclxuICAgIGZsZXg6IFwiMCAwIDUwJVwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgZmxleDogXCIwIDAgMTAwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlcm9Db3Zlcjoge1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHdpZHRoOiBcIjUwdndcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaGVyb0ltYWdlQ29udGFpbmVyOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgfSxcclxuICBoZXJvSW1hZ2U6IHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICBsZWZ0OiBcIjAlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIHNoYXBlT3V0c2lkZTogXCJwb2x5Z29uKDEwJSAwJSwgMTAwJSAwLCAxMDAlIDEwMCUsIDAlIDEwMCUpXCIsXHJcbiAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oMTAlIDAlLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCUgMTAwJSlcIixcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcclxuICAgIH0sXHJcbiAgICBcIiYgaW1nXCI6IHtcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgICBoZWlnaHQ6IDQ1MCxcclxuICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBzaGFwZWQgaGVyb1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEhlcm9TaGFwZWQgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBsZWZ0U2lkZSwgcmlnaHRTaWRlLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsICdoZXJvLXNoYXBlZCcsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2hhcGVkX193cmFwcGVyJywgY2xhc3Nlcy5oZXJvKX0+XHJcbiAgICAgICAgPFNlY3Rpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaGFwZWRfX2xlZnQtc2lkZScsIGNsYXNzZXMuaGVyb0xlZnRTaWRlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bGVmdFNpZGV9XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNoYXBlZF9fcmlnaHQtc2lkZScsIGNsYXNzZXMuaGVyb1JpZ2h0U2lkZSl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2hhcGVkX19jb3ZlcicsIGNsYXNzZXMuaGVyb0NvdmVyKX0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICAnaGVyby1zaGFwZWRfX2ltYWdlLWNvbnRhaW5lcicsXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLmhlcm9JbWFnZUNvbnRhaW5lcixcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2hhcGVkX19pbWFnZScsIGNsYXNzZXMuaGVyb0ltYWdlKX0+XHJcbiAgICAgICAgICAgICAgICB7cmlnaHRTaWRlfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvU2hhcGVkLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIENoaWxkcmVuIHRvIHBsYWNlZCBpbnNpZGUgdGhlIHNlY3Rpb24gcmlnaHQgc2lkZVxyXG4gICAqL1xyXG4gIHJpZ2h0U2lkZTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDaGlsZHJlbiB0byBwbGFjZWQgaW5zaWRlIHRoZSBzZWN0aW9uIGxlZnQgc2lkZVxyXG4gICAqL1xyXG4gIGxlZnRTaWRlOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb1NoYXBlZDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSGVyb1NoYXBlZCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY29sb3JzLCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbiAgaW1hZ2VXcmFwcGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIG1heEhlaWdodDogNDAwLFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICB9LFxyXG4gIGNvdmVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuaW5kaWdvWzkwMF0sXHJcbiAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHRvcDogJzUwJScsXHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgdHJhbnNmb3JtOiAnbm9uZScsXHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgNCksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgc2lkZSBpbWFnZSBoZXJvXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgSGVyb1NpZGVJbWFnZSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpbWFnZVNyYyxcclxuICAgIGltYWdlU3JjU2V0LFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICByZXZlcnNlLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB1c2VDdXN0b21TdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgICBjb3ZlckJnOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmRDb2xvcixcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBjdXN0b21DbGFzc2VzID0gdXNlQ3VzdG9tU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBjb250YWluZXJcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNpZGUtaW1hZ2UnLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIGRpcmVjdGlvbj17cmV2ZXJzZSA/ICdyb3ctcmV2ZXJzZScgOiAncm93J31cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgaXRlbVxyXG4gICAgICAgIHhzPXsxMn1cclxuICAgICAgICBtZD17Nn1cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2lkZS1pbWFnZV9faW1hZ2Utd3JhcHBlcicsIGNsYXNzZXMuaW1hZ2VXcmFwcGVyKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtpbWFnZVNyY31cclxuICAgICAgICAgIHNyY1NldD17aW1hZ2VTcmNTZXQgPyBpbWFnZVNyY1NldCA6ICcnfVxyXG4gICAgICAgICAgYWx0PXsnLi4uJ31cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaWRlLWltYWdlX19pbWFnZScsIGNsYXNzZXMuaW1hZ2UpfVxyXG4gICAgICAgICAgbGF6eT17ZmFsc2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICdoZXJvLXNpZGUtaW1hZ2VfX2NvdmVyJyxcclxuICAgICAgICAgICAgY2xhc3Nlcy5jb3ZlcixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yID8gY3VzdG9tQ2xhc3Nlcy5jb3ZlckJnIDoge30sXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWRcclxuICAgICAgICBpdGVtXHJcbiAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgIG1kPXs2fVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaWRlLWltYWdlX19jb250ZW50JywgY2xhc3Nlcy5jb250ZW50KX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvU2lkZUltYWdlLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIENoaWxkcmVuIHRvIHBsYWNlZCBpbnNpZGUgdGhlIGhlcm9cclxuICAgKi9cclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgLyoqXHJcbiAgICogQmFja2dyb3VuZCBjb2xvciBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBTaWRlIGltYWdlXHJcbiAgICovXHJcbiAgaW1hZ2VTcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTaWRlIGltYWdlIHNyY3NldFxyXG4gICAqL1xyXG4gIGltYWdlU3JjU2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCBzaG93IGluIHJldmVyc2Ugb3JkZXJcclxuICAgKi9cclxuICByZXZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9TaWRlSW1hZ2U7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0hlcm9TaWRlSW1hZ2UnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBIZXJvU2ltcGxlQmFja2dyb3VuZCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBjaGlsZHJlbixcclxuICAgIGJhY2tncm91bmRTaXplLFxyXG4gICAgYmFja2dyb3VuZEltYWdlLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHVzZUJhY2tncm91bmQgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRTaXplOiB7XHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBiYWNrZ3JvdW5kU2l6ZSxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHtcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBiYWNrZ3JvdW5kUG9zaXRpb24sXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuICBjb25zdCBiYWNrZ3JvdW5kQ2xhc3NlcyA9IHVzZUJhY2tncm91bmQoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICdoZXJvLXNpbXBsZS1iYWNrZ3JvdW5kJyxcclxuICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIGJhY2tncm91bmRDbGFzc2VzLmJhY2tncm91bmRJbWFnZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ2xhc3Nlcy5iYWNrZ3JvdW5kU2l6ZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ2xhc3Nlcy5iYWNrZ3JvdW5kUG9zaXRpb24sXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8U2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvLXNpbXBsZS1iYWNrZ3JvdW5kX19zZWN0aW9uXCI+e2NoaWxkcmVufTwvU2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvU2ltcGxlQmFja2dyb3VuZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxufTtcclxuXHJcbkhlcm9TaW1wbGVCYWNrZ3JvdW5kLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBtYWluIGNvbnRlbnRcclxuICAgKi9cclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgYmFja2dyb3VuZCBpbWFnZSBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGJhY2tncm91bmRJbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBiYWNrZ3JvdW5kIHNpemUgb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBiYWNrZ3JvdW5kU2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgYmFja2dyb3VuZCBwb3NpdGlvbiBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGJhY2tncm91bmRQb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9TaW1wbGVCYWNrZ3JvdW5kO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9IZXJvU2ltcGxlQmFja2dyb3VuZCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIG1hcFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IE1hcCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IHpvb20sIGNlbnRlciwgcGlucywgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgTCA9IHJlcXVpcmUoJ2xlYWZsZXQnKTtcclxuICAgIGRlbGV0ZSBMLkljb24uRGVmYXVsdC5wcm90b3R5cGUuX2dldEljb25Vcmw7XHJcblxyXG4gICAgY29uc3QgbWFya2VySWNvbjJ4ID0gcmVxdWlyZSgnYXNzZXRzL2ltYWdlcy9sZWFmbGV0LWFzc2V0cy9tYXJrZXItaWNvbi0yeC5wbmcnKTtcclxuICAgIGNvbnN0IG1hcmtlckljb24gPSByZXF1aXJlKCdhc3NldHMvaW1hZ2VzL2xlYWZsZXQtYXNzZXRzL21hcmtlci1pY29uLnBuZycpO1xyXG4gICAgY29uc3QgbWFya2VyU2hhZG93ID0gcmVxdWlyZSgnYXNzZXRzL2ltYWdlcy9sZWFmbGV0LWFzc2V0cy9tYXJrZXItc2hhZG93LnBuZycpO1xyXG5cclxuICAgIEwuSWNvbi5EZWZhdWx0Lm1lcmdlT3B0aW9ucyh7XHJcbiAgICAgIGljb25SZXRpbmFVcmw6IHR5cGVvZiBtYXJrZXJJY29uMnggPT09ICdvYmplY3QnID8gbWFya2VySWNvbjJ4LmRlZmF1bHQgOiBtYXJrZXJJY29uMngsXHJcbiAgICAgIGljb25Vcmw6IHR5cGVvZiBtYXJrZXJJY29uID09PSAnb2JqZWN0JyA/IG1hcmtlckljb24uZGVmYXVsdCA6IG1hcmtlckljb24sXHJcbiAgICAgIHNoYWRvd1VybDogdHlwZW9mIG1hcmtlclNoYWRvdyA9PT0gJ29iamVjdCcgPyBtYXJrZXJTaGFkb3cuZGVmYXVsdCA6IG1hcmtlclNoYWRvdyxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgUmVhY3RNYXAgPSByZXF1aXJlKCdyZWFjdC1sZWFmbGV0JykuTWFwO1xyXG4gIGNvbnN0IFRpbGVMYXllciA9IHJlcXVpcmUoJ3JlYWN0LWxlYWZsZXQnKS5UaWxlTGF5ZXI7XHJcbiAgY29uc3QgTWFya2VyID0gcmVxdWlyZSgncmVhY3QtbGVhZmxldCcpLk1hcmtlcjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdE1hcFxyXG4gICAgICB6b29tPXt6b29tfVxyXG4gICAgICBjZW50ZXI9e2NlbnRlcn1cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdtYXAnLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8VGlsZUxheWVyXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWFwX190aWxlLWxheWVyXCJcclxuICAgICAgICBkZXRlY3RSZXRpbmE9e3RydWV9XHJcbiAgICAgICAgYXR0cmlidXRpb249JyZhbXA7Y29weSA8YSBocmVmPVwiaHR0cDovL29zbS5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xyXG4gICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcclxuICAgICAgLz5cclxuICAgICAge3BpbnMgJiZcclxuICAgICAgICBwaW5zLmxlbmd0aCAmJlxyXG4gICAgICAgIHBpbnMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcF9fbWFya2VyXCJcclxuICAgICAgICAgICAgcG9zaXRpb249e1tpdGVtLmxvY2F0aW9uLnksIGl0ZW0ubG9jYXRpb24ueF19XHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L1JlYWN0TWFwPlxyXG4gICk7XHJcbn07XHJcblxyXG5NYXAuZGVmYXVsdFByb3BzID0ge1xyXG4gIHpvb206IDEwLFxyXG4gIGNlbnRlcjogWzAsIDBdLFxyXG59O1xyXG5cclxuTWFwLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIE1hcCB6b29tXHJcbiAgICovXHJcbiAgem9vbTogUHJvcFR5cGVzLm5vZGUsXHJcbiAgLyoqXHJcbiAgICogTWFwIGNlbnRlclxyXG4gICAqL1xyXG4gIGNlbnRlcjogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogZGF0YSBvZiB0aGUgbG9jYXRpb25zLiBFeGFtcGxlOiBbeyBsb2NhdGlvbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9IH1dXHJcbiAgICovXHJcbiAgcGluczogUHJvcFR5cGVzLmFycmF5LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9NYXAnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAvKiBzdXBwb3J0IGZvciBwbHVnaW4gaHR0cHM6Ly9naXRodWIuY29tL2JmcmVkLWl0L29iamVjdC1maXQtaW1hZ2VzICovXHJcbiAgICBmb250RmFtaWx5OiAnb2JqZWN0LWZpdDogY292ZXI7JyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB6SW5kZXg6IC0xLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgUGFyYWxsYXggYmFja2dyb3VuZHNcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBQYXJhbGxheCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGJhY2tncm91bmRJbWFnZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGphcmFsbGF4RWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuamFyYWxsYXgnKTtcclxuICAgIGlmICghamFyYWxsYXhFbGVtcyB8fCAoamFyYWxsYXhFbGVtcyAmJiBqYXJhbGxheEVsZW1zLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGphcmFsbGF4ID0gcmVxdWlyZSgnamFyYWxsYXgnKS5qYXJhbGxheDtcclxuICAgIGphcmFsbGF4KGphcmFsbGF4RWxlbXMsIHsgc3BlZWQ6IDAuMiB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdqYXJhbGxheCcsICdwYXJhbGxheCcsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgZGF0YS1qYXJhbGxheFxyXG4gICAgICBkYXRhLXNwZWVkPVwiMC4yXCJcclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2phcmFsbGF4LWltZycsICdwYXJhbGxheF9faW1hZ2UnLCBjbGFzc2VzLmltYWdlKX1cclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWAgfX1cclxuICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAvPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUGFyYWxsYXgucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRlbnRcclxuICAgKi9cclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgLyoqXHJcbiAgICogVGhlIHBhcmFsbGF4IGJhY2tncm91bmQgaW1hZ2VcclxuICAgKi9cclxuICBiYWNrZ3JvdW5kSW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcmFsbGF4O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9QYXJhbGxheCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1heFdpZHRoOiB0aGVtZS5sYXlvdXQuY29udGVudFdpZHRoLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2LCAyKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDgsIDQpLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgsIDYpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZ1bGxXaWR0aDoge1xyXG4gICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgZGlzYWJsZVBhZGRpbmc6IHtcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgfSxcclxuICBuYXJyb3c6IHtcclxuICAgIG1heFdpZHRoOiA4MDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBzZWN0aW9uc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFNlY3Rpb24gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBmdWxsV2lkdGgsXHJcbiAgICBuYXJyb3csXHJcbiAgICBkaXNhYmxlUGFkZGluZyxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAnc2VjdGlvbicsXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIGZ1bGxXaWR0aCA/IGNsYXNzZXMuZnVsbFdpZHRoIDoge30sXHJcbiAgICAgICAgbmFycm93ID8gY2xhc3Nlcy5uYXJyb3cgOiB7fSxcclxuICAgICAgICBkaXNhYmxlUGFkZGluZyA/IGNsYXNzZXMuZGlzYWJsZVBhZGRpbmcgOiB7fSxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblNlY3Rpb24ucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ2hpbGRyZW4gdG8gcGxhY2VkIGluc2lkZSB0aGUgc2VjdGlvblxyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBTaG91bGQgc2hvdyBuYXJyb3cgc2VjdGlvbnNcclxuICAgKi9cclxuICBuYXJyb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCB0aGUgc2VjdGlvbiBiZSBmdWxsIHdpZHRoXHJcbiAgICovXHJcbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBTaG91bGQgdGhlIHNlY3Rpb24gcmVuZGVyIHdpdGggbm8gcGFkZGluZ1xyXG4gICAqL1xyXG4gIGRpc2FibGVQYWRkaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1NlY3Rpb24nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5hbHRlcm5hdGUubWFpbixcclxuICB9LFxyXG4gIGlubmVyOiB7XHJcbiAgICBtYXhXaWR0aDogdGhlbWUubGF5b3V0LmNvbnRlbnRXaWR0aCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2LCAyKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCA4KSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMTIsIDgpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGlubmVyTmFycm93ZWQ6IHtcclxuICAgIG1heFdpZHRoOiA4MDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBhbHRlcm5hdGl2ZSBzZWN0aW9uc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFNlY3Rpb25BbHRlcm5hdGUgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgaW5uZXJuYXJyb3dlZCwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdzZWN0aW9uLWFsdGVybmF0ZScsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAnc2VjdGlvbi1hbHRlcm5hdGVfX2NvbnRlbnQnLFxyXG4gICAgICAgICAgY2xhc3Nlcy5pbm5lcixcclxuICAgICAgICAgIGlubmVybmFycm93ZWQgPyBjbGFzc2VzLmlubmVyTmFycm93ZWQgOiB7fSxcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuU2VjdGlvbkFsdGVybmF0ZS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDaGlsZHJlbiB0byBwbGFjZWQgaW5zaWRlIHRoZSBzZWN0aW9uXHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCBzaG93IG5hcnJvdyBzZWN0aW9uc1xyXG4gICAqL1xyXG4gIGlubmVybmFycm93ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkFsdGVybmF0ZTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU2VjdGlvbkFsdGVybmF0ZSc7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2VjdGlvbiB9IGZyb20gJy4vU2VjdGlvbic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VjdGlvbkFsdGVybmF0ZSB9IGZyb20gJy4vU2VjdGlvbkFsdGVybmF0ZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVzY3JpcHRpb25MaXN0SWNvbiB9IGZyb20gJy4vRGVzY3JpcHRpb25MaXN0SWNvbic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZEJhc2UgfSBmcm9tICcuL0NhcmRCYXNlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkUmV2aWV3IH0gZnJvbSAnLi9DYXJkUmV2aWV3JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkQ2F0ZWdvcnkgfSBmcm9tICcuL0NhcmRDYXRlZ29yeSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZEpvYiB9IGZyb20gJy4vQ2FyZEpvYic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZEpvYk1pbmltYWwgfSBmcm9tICcuL0NhcmRKb2JNaW5pbWFsJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkSm9iVGFnIH0gZnJvbSAnLi9DYXJkSm9iVGFnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkSm9iQ29tcGFueSB9IGZyb20gJy4vQ2FyZEpvYkNvbXBhbnknO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFjY29yZGlvbiB9IGZyb20gJy4vQWNjb3JkaW9uJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZXJvU2hhcGVkIH0gZnJvbSAnLi9IZXJvU2hhcGVkJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkUHJvZHVjdCB9IGZyb20gJy4vQ2FyZFByb2R1Y3QnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hcCB9IGZyb20gJy4vTWFwJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZXJvQmFja2dyb3VuZCB9IGZyb20gJy4vSGVyb0JhY2tncm91bmQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlcm9TaWRlSW1hZ2UgfSBmcm9tICcuL0hlcm9TaWRlSW1hZ2UnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRQcm9tbyB9IGZyb20gJy4vQ2FyZFByb21vJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkQ2F0ZWdvcnlMaW5rIH0gZnJvbSAnLi9DYXJkQ2F0ZWdvcnlMaW5rJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZXJvU2ltcGxlQmFja2dyb3VuZCB9IGZyb20gJy4vSGVyb1NpbXBsZUJhY2tncm91bmQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRQcmljaW5nU3RhbmRhcmQgfSBmcm9tICcuL0NhcmRQcmljaW5nU3RhbmRhcmQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcmFsbGF4IH0gZnJvbSAnLi9QYXJhbGxheCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFjdEZvcm0gfSBmcm9tICcuL0NvbnRhY3RGb3JtJzsiLCJpbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuXHJcbmNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgVG9hc3RcclxuIiwiZXhwb3J0IGNvbnN0IEFwaVJvdXRlcyA9IHtcclxuICAgICAgICAgU0lHTlVQOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvYXV0aFwiLFxyXG4gICAgICAgICAgIHVybDogXCIvc2lnbnVwXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBMT0dJTjoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL2xvZ2luXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBSRVNFVFBBU1NXT1JEOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvYXV0aFwiLFxyXG4gICAgICAgICAgIHVybDogXCIvcmVzZXQtcGFzc3dvcmRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEZPUkdPVFBBU1NXT1JEOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvYXV0aFwiLFxyXG4gICAgICAgICAgIHVybDogXCIvZm9yZ290LXBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBHRVRVU0VSREVUQUlMUzoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL2RldGFpbHNcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBVU0VSREVUQUlMU1VQREFURToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL3VwZGF0ZVwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIFVTRVJQQVNTV09SRFVQREFURToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL2NoYW5nZS1wYXNzd29yZFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIFVTRVJGT1JHT1RQQVNTV09SRFVQREFURToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL2ZvcmdvdC1wYXNzd29yZFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgQ09VUlNFTElTVDoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2NvdXJzZS10b3BpYy8/bGltaXQ9YWxsXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBDT1VSU0VERVRBSUxTOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvY291cnNlLXRvcGljXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi86aWRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgQ09VUlNFREVUQUlMU0FVVEg6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9jb3Vyc2UtdG9waWNcIixcclxuICAgICAgICAgICB1cmw6IFwiLzppZFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEFQUExZQ09VUE9OOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvdHJhbnNhY3Rpb25cIixcclxuICAgICAgICAgICB1cmw6IFwiL2FwcGx5UHJvbW9cIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgTUFLRVBBWU1FTlQ6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi90cmFuc2FjdGlvblwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgUEFZTUVOVEhJU1RPUlk6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi90cmFuc2FjdGlvblwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBQVVJDSEFTRURDT1VSU0U6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9jb3Vyc2VcIixcclxuICAgICAgICAgICB1cmw6IFwiL3B1cmNoYXNlZC1jb3Vyc2VcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBDRVJUSUZJQ0FURVJFUVVFU1Q6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9jZXJ0aWZpY2F0ZS1yZXF1ZXN0XCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBCTE9HTElTVDoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2Jsb2dcIixcclxuICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEJMT0dERVRBSUw6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9ibG9nXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi86aWRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUVU5JVkVSU0lUWToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL3VuaXZlcnNpdGllc1wiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBHRVRDT1JQT1JBVEU6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi9jb3Jwb3JhdGlvblwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBDT05UQUNUX1VTOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvZW50ZXJwcmlzZVwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIFBSRVNTX1JFTEVBU0U6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9wcmVzcy1yZWxlYXNlXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBQUkVTU19ERVRBSUxTOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvcHJlc3MtcmVsZWFzZVwiLFxyXG4gICAgICAgICAgIHVybDogXCIvOmlkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEdFVF9MTVNEQVRBX0NPVVJTRToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL3RhbGVudExtc1wiLFxyXG4gICAgICAgICAgIHVybDogXCIvY291cnNlc1wiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBHRVRfTE1TREFUQV9DQVRFR09SWToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL3RhbGVudExtc1wiLFxyXG4gICAgICAgICAgIHVybDogXCIvY2F0ZWdvcnlcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgTkVXU0xFVFRFUlNVQlNDUklCRToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL25ld3MtbGV0dGVyXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUU09DSUFMTElOS0VTOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvc2V0dGluZ1wiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUUEFZTUVOVENFUlRJRklDQVRFREVUQUlMUzoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2NlcnRpZmljYXRlLXJlcXVlc3QvcGF5bWVudC1pbmZvXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi86aWRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgTUFLRVBBWU1FTlRDRVJUSUZJQ0FURToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2NlcnRpZmljYXRlLXJlcXVlc3QvcGF5bWVudFwiLFxyXG4gICAgICAgICAgIHVybDogXCIvOmlkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBDRVJUSUZJQ0FURV9EQVRBOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvY21zXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBGUk9OVF9QQUdFX0RBVEE6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9tYXJrZXQtY29udGVudFwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUX1RFQU1fREFUQToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL3RlYW1cIixcclxuICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICB9O1xyXG4iLCJjb25zdCBBcHBDb25maWcgPSB7XHJcbiAgICAvLyBGSUxFU19FTkRQT0lOVDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJTEVTX0VORFBPSU5ULFxyXG4gICAgLy8gQVBQX0VORFBPSU5UOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRU5EUE9JTlQsXHJcbiAgICBBUElfRU5EUE9JTlQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCxcclxuICAgIElNQUdFX1VSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU1BR0VfVVJMLFxyXG4gICAgU0lURV9OQU1FOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSVRFX05BTUVcclxuICAgIC8vIEFQSV9WRVJTSU9OOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX1ZFUlNJT04sXHJcbiAgICAvLyBERUZBVUxUX0RBVEVfRk9STUFUOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREVGQVVMVF9EQVRFX0ZPUk1BVCxcclxuICB9O1xyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb25maWc7IiwiZXhwb3J0ICogZnJvbSAnLi9BcGlSb3V0ZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FwcENvbmZpZyc7IiwiaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBFcnJvckhhbmRsZXJIZWxwZXIgfSBmcm9tIFwiLi9FcnJvckhhbmRsZXJIZWxwZXJcIjtcclxuaW1wb3J0IHsgU3VjY2Vzc0hhbmRsZXJIZWxwZXIgfSBmcm9tIFwiLi9TdWNjZXNzSGFuZGxlckhlbHBlclwiO1xyXG5pbXBvcnQgQXBwQ29uZmlnICBmcm9tIFwiLi4vY29uZmlnL2FwcENvbmZpZ1wiO1xyXG4vKipcclxuICogQXBpSGVscGVyIENsYXNzIC0gRm9yIG1ha2luZyBBcGkgUmVxdWVzdHNcclxuICogXHJcbiAqL1xyXG5sZXQgQ2FuY2VsVG9rZW4gPSBBeGlvcy5DYW5jZWxUb2tlbjtcclxubGV0IGNhbmNlbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGlIZWxwZXIge1xyXG4gIF9wb3J0YWxHYXRld2F5O1xyXG4gIF9hcGlWZXJzaW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3BvcnRhbEdhdGV3YXkgPSBBcHBDb25maWcuQVBJX0VORFBPSU5UO1xyXG4gICAgdGhpcy5fYXBpVmVyc2lvbiA9IFwiXCI7XHJcbiAgICB0aGlzLnNvdXJjZSA9IEF4aW9zLkNhbmNlbFRva2VuLnNvdXJjZSgpO1xyXG4gICAgdGhpcy5jYW5jZWxUb2tlbiA9IHRoaXMuc291cmNlLnRva2VuO1xyXG4gIH1cclxuICBzZXRIb3N0ID0gKGhvc3QpID0+IHtcclxuICAgIHRoaXMuX3BvcnRhbEdhdGV3YXkgPSBob3N0O1xyXG4gIH07XHJcbiAgc2V0QXBpVmVyc2lvbiA9ICh2ZXJzaW9uKSA9PiB7XHJcbiAgICB0aGlzLl9hcGlWZXJzaW9uID0gdmVyc2lvbjtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIEZldGNoZXMgZnJvbSB0aGUgR2F0ZXdheSBkZWZpbmVkIGJ5IHRoZSBpbnN0YW50aWF0ZWQgb2JqZWN0LiBBY2NlcHRzIDxUPiBhcyBvdXRwdXQgb2JqZWN0LlxyXG4gICAqIEBleGFtcGxlIDxjYXB0aW9uPlwiL0F1dGgvVXNlckFjY291bnRcIiwgXCIvR2V0Q3VycmVudFVzZXJcIiwgXCJHRVRcIiwgXCJKV1QgQ29udGVudFwiPC9jYXB0aW9uPlxyXG4gICAqIEBwYXJhbSB7c2VydmljZX0gc2VydmljZSAtIHdhbnRpbmcgdG8gYmUgYWNjZXNzIGV4LiBcIlVzZXJBdXRoL0F1dGhcIlxyXG4gICAqIEBwYXJhbSB7ZW5kcG9pbnR9IGVuZHBvaW50IC0geW91IHdpc2ggdG8gY2FsbCBleC4gXCIvTG9naW5cIlxyXG4gICAqIEBwYXJhbSB7bWV0aG9kfSBtZWhvdGQgLSBtZXRob2QgKEdFVCwgVVBEQVRFLCBERUxFVEUsIFBPU1QpXHJcbiAgICogQHBhcmFtIHtqd3R9IEpXVCAtIEpTT04gV2ViIFRva2VuIChPcHRpb25hbClcclxuICAgKiBAcGFyYW0ge3F1ZXJ5T3B0aW9uc30gUXVlcnkgLSBxdWVyeSBvcHRpb25zIGZvciBcIkdFVFwiIG1ldGhvZHMgKE9wdGlvbmFsKVxyXG4gICAqIEBwYXJhbSB7Ym9keX0gYm9keSAtIEpTT04gYm9keSBmb3IgXCJVUERBVEUsIERFTEVURSBhbmQgUE9TVFwiIG1ldGhvZHMgKE9wdGlvbmFsKVxyXG4gICAqL1xyXG4gIGFzeW5jIEZldGNoRnJvbVNlcnZlcihcclxuICAgIHNlcnZpY2UsXHJcbiAgICBlbmRwb2ludCxcclxuICAgIG1ldGhvZCxcclxuICAgIGF1dGhlbnRpY2F0ZWQgPSBmYWxzZSxcclxuICAgIGF1dGhUb2tlbixcclxuICAgIHF1ZXJ5T3B0aW9ucyA9IHVuZGVmaW5lZCxcclxuICAgIGJvZHkgPSB1bmRlZmluZWQsXHJcbiAgICByZXNwb25zZVR5cGUsXHJcbiAgKSB7XHJcbiAgICBsZXQgdXJsID0gdGhpcy5fcG9ydGFsR2F0ZXdheSArIHNlcnZpY2UgKyBlbmRwb2ludDtcclxuICAgIGxldCBoZWFkZXJzID0geyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9O1xyXG4gICAgaWYgKGF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgLy8gY29uc3Qgc3RvcmFnZVNlc3Npb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICBjb25zdCBzdG9yYWdlU2Vzc2lvbiA9IGF1dGhUb2tlbjtcclxuICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gc3RvcmFnZVNlc3Npb247XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBtZXRob2QgPSBtZXRob2QudG9Mb3dlckNhc2UoKTtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBkYXRhOiBib2R5LFxyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiBxdWVyeU9wdGlvbnMsXHJcbiAgICAgICAgY2FuY2VsVG9rZW46IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XHJcbiAgICAgICAgICAvLyBBbiBleGVjdXRvciBmdW5jdGlvbiByZWNlaXZlcyBhIGNhbmNlbCBmdW5jdGlvbiBhcyBhIHBhcmFtZXRlclxyXG4gICAgICAgICAgY2FuY2VsID0gYztcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2sgPT09IGZhbHNlIHx8IHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgICAgbGV0IGVycm9yT2JqZWN0ID0ge1xyXG4gICAgICAgICAgY29kZTogcmVzcG9uc2Uuc3RhdHVzLFxyXG4gICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aHJvdyBlcnJvck9iamVjdDtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IFN1Y2Nlc3NIYW5kbGVySGVscGVyKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YS5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChBeGlvcy5pc0NhbmNlbChlcnIpIHx8ICFlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaXNFcnJvcjogdHJ1ZSxcclxuICAgICAgICAgIGVycm9yOiBcIlJlcXVlc3QgY2FuY2VsbGVkXCIsXHJcbiAgICAgICAgICBtZXNzYWdlczogZXJyLm1lc3NhZ2UgPT09IFwiY2FuY2VsXCIgPyBbXSA6IFtcIlJlcXVlc3QgY2FuY2VsbGVkXCJdLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JIZWxwZXIgPSBuZXcgRXJyb3JIYW5kbGVySGVscGVyKGVyci5yZXNwb25zZSk7XHJcbiAgICAgICAgcmV0dXJuIGVycm9ySGVscGVyLmVycm9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIENhbmNlbHMgdGhlIGxhc3QgcmVxdWVzdC5cclxuICAgKi9cclxuICBjYW5jZWxSZXF1ZXN0ID0gKGVycikgPT4ge1xyXG4gICAgY2FuY2VsICYmIGNhbmNlbChlcnIpO1xyXG4gIH07XHJcbn1cclxuIiwiLyoqXHJcbiAqIEVycm9ySGFuZGxlckhlbHBlciBDbGFzcyAtIEZvciBtYW5hZ2luZyBlcnJvcnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBFcnJvckhhbmRsZXJIZWxwZXIge1xyXG5cdHJhd0Vycm9yO1xyXG5cdGVycm9yID0ge1xyXG5cdFx0Y29kZTogNTAwLFxyXG5cdFx0aXNFcnJvcjogdHJ1ZSxcclxuXHRcdHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuXHRcdGVycm9yOiAnVW5rbm93biBlcnJvcicsXHJcblx0XHRtZXNzYWdlczogW10sXHJcblx0XHRkYXRhOiB1bmRlZmluZWQsXHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoZXJyKSB7XHJcblx0XHR0aGlzLnJhd0Vycm9yID0gZXJyO1xyXG5cdFx0dGhpcy5zZXRFcnJvcigpO1xyXG5cdH1cclxuXHJcblx0c2V0RXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IFxyXG5cdFx0dGhpcy5yYXdFcnJvciAmJiB0aGlzLnJhd0Vycm9yLmNvZGVcclxuXHRcdFx0PyB0aGlzLnJhd0Vycm9yLmNvZGVcclxuICAgICAgICAgICAgOiB0aGlzLmVycm9yLmNvZGU7XHJcblx0XHRcdHRoaXMuZXJyb3IuY29kZSA9IHRoaXMucmF3RXJyb3Iuc3RhdHVzID09PSA0MDIgPyB0aGlzLnJhd0Vycm9yLnN0YXR1cyA6IChjb2RlID8gY29kZSA6IDQwMCk7XHJcblx0XHR0aGlzLmVycm9yLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XHJcblx0XHR0aGlzLmVycm9yLm1lc3NhZ2VzID0gW107XHJcblx0XHJcblx0XHRpZiAodGhpcy5yYXdFcnJvci5kYXRhICYmIHR5cGVvZiB0aGlzLnJhd0Vycm9yLmRhdGEgPT09ICdvYmplY3QnICYmIHRoaXMucmF3RXJyb3IuZGF0YS5tZXNzYWdlKSB7XHJcblx0XHRcdGlmICgodGhpcy5yYXdFcnJvciAmJiB0aGlzLnJhd0Vycm9yLmRhdGEubWVzc2FnZSA9PT0gXCJUb2tlbiBoYXMgZXhwaXJlZFwiKSB8fCAodGhpcy5yYXdFcnJvciAmJiB0aGlzLnJhd0Vycm9yLmRhdGEubWVzc2FnZSA9PT0gXCJVbmF1dGhvcml6ZWQsIEludmFsaWQgdG9rZW4hXCIpKXtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG5cdFx0XHR9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IubWVzc2FnZXMucHVzaCh0aGlzLnJhd0Vycm9yLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH1cclxuXHRcdGlmICghdGhpcy5lcnJvci5tZXNzYWdlcy5sZW5ndGgpIHtcclxuXHRcdFx0dGhpcy5lcnJvci5lcnJvciA9ICdVbmtub3duJztcclxuXHRcdFx0dGhpcy5lcnJvci5tZXNzYWdlcyA9IFtudWxsXTtcclxuXHRcdH1cclxuXHR9O1xyXG59IiwiLyoqXHJcbiAqIFN1Y2Nlc3NIYW5kbGVySGVscGVyIENsYXNzIC0gRm9yIG1hbmFnaW5nIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdWNjZXNzSGFuZGxlckhlbHBlciB7XHJcbiAgICByYXdEYXRhO1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgY29kZTogMjAwLFxyXG4gICAgICBpc0Vycm9yOiBmYWxzZSxcclxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICBlcnJvcjogdW5kZWZpbmVkLFxyXG4gICAgICBtZXNzYWdlczogW10sXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICB0aGlzLnJhd0RhdGEgPSBkYXRhO1xyXG4gICAgICB0aGlzLnNldFN1Y2NjZXNzKCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzZXRTdWNjY2VzcyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgbWVzc2FnZXMgPSBbXTtcclxuICBcclxuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnJhd0RhdGEpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucmF3RGF0YVtpXSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgbWVzc2FnZXMucHVzaCh0aGlzLnJhd0RhdGFbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhdGEuZGF0YSA9IHRoaXMucmF3RGF0YTtcclxuICAgICAgdGhpcy5kYXRhLm1lc3NhZ2VzID0gbWVzc2FnZXM7XHJcbiAgICB9O1xyXG4gIH0iLCJleHBvcnQgKiBmcm9tICcuL0FwaUhlbHBlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU3VjY2Vzc0hhbmRsZXJIZWxwZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0Vycm9ySGFuZGxlckhlbHBlcic7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBBcGlIZWxwZXIgfSBmcm9tICdoZWxwZXInXHJcbmltcG9ydCB7IEFwaVJvdXRlcyB9IGZyb20gJ2NvbmZpZyc7XHJcbmltcG9ydCBUb2FzdCBmcm9tICdjb21wb25lbnRzL3RvYXN0ZXInO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIjtcclxuaW1wb3J0IGltZyBmcm9tIFwiLi4vLi4vLi4vc3JjL2Fzc2V0cy9pbWFnZXMvQ2VydGlmaWNhdGUtcGFnZS9jZXJ0aWZpY2F0ZS5qcGdcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSBcIi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJjb21wb25lbnRzL2F0b21zXCI7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tIFwiY29tcG9uZW50cy9vcmdhbmlzbXNcIjtcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEFwcENvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2FwcENvbmZpZ1wiO1xyXG5pbXBvcnQgeyBTZWN0aW9uQWx0ZXJuYXRlLCBIZXJvQmFja2dyb3VuZCB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciBmcm9tIFwicmVhY3QtaHRtbC1wYXJzZXJcIjtcclxuXHJcblxyXG5pbXBvcnQge1xyXG4gIENhdGVnb3JpZXMsXHJcbiAgQ291cnNlcyxcclxuICBQcm9tb051bWJlcnMsXHJcbiAgUmV2aWV3cyxcclxuICBTdWJzY3JpcHRpb24sXHJcbiAgUHJlc3NSZWxlYXNlXHJcbn0gZnJvbSAnLi9jb21wb25lbnRzJztcclxuaW1wb3J0IHtcclxuICBwcm9tb051bWJlcnMsXHJcbiAgY291cnNlQ2F0ZWdvcmllcyxcclxuICBwb3B1bGFyQ291cnNlcyxcclxuICByZXZpZXdzLFxyXG59IGZyb20gJy4vZGF0YSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb3Vyc2VzU2VjdGlvbjoge1xyXG4gICAgbWF4V2lkdGg6IDgwMCxcclxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICB9LFxyXG4gIHBhZGRpbmdCb3R0b20wOiB7XHJcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxyXG4gIH0sXHJcbiAgc2VjdGlvbkFsdGVybmF0ZToge1xyXG4gICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTgwZGVnXHJcbiAgICAgICwgI2ZmZiA2MiUsIHJnYig4MyA5OCAyNTIpIDYwJSlgLFxyXG4gIH0sXHJcbiAgZm9udFdlaWdodDcwMDoge1xyXG4gICAgZm9udFdlaWdodDogXCI3MDBcIixcclxuICB9LFxyXG4gIHRleHRXaGl0ZToge1xyXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gIH0sXHJcbiAgdGV4dENlbnRlcjoge1xyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgYWZmaWxhdGVCbG9jazoge1xyXG4gICAgcGFkZGluZzogXCIwIDEwMHB4XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICBwYWRkaW5nOiBcIjBweCAhaW1wb3J0YW50XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tbW9uQnRuOiB7XHJcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgcGFkZGluZzogXCI3cHggMTBweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM1MTIwRkZcIixcclxuICAgIGZvbnRTaXplOiAxNixcclxuICAgIG1pbldpZHRoOiAyMDAsXHJcbiAgICBib3JkZXI6IFwic29saWQgMXB4ICM1MTIwRkZcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgZWFzZS1pbi1vdXRcIixcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICBjb2xvcjogXCIjNTEyMEZGXCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd2hpdGVCdG46IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICBjb2xvcjogXCIjNTEyMEZGXCIsXHJcbiAgICBmb250V2VpZ2h0OiBcIjYwMFwiLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM1MTIwRkZcIixcclxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICBib3JkZXI6IFwic29saWQgMXB4ICNmZmZcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXRlZ29yaWVzV3JhcHBlcjoge1xyXG4gICAgXCImIC5zZWN0aW9uLWFsdGVybmF0ZV9fY29udGVudFwiOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiwgOCksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg1LCAzKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhZmZpbGlhdGVXcmFwcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDYsIDMpLFxyXG4gIH0sXHJcbiAgc3Vic2NyaXB0aW9uV3JhcHBlcjoge1xyXG4gICAgXCImIC5zZWN0aW9uLWFsdGVybmF0ZV9fY29udGVudFwiOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNywgOCwgNiksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg3LCAyLCA2KSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjZXJ0aWZpY2F0ZV9zZWM6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIHBhZGRpbmc6IFwiOTBweCAwcHggMTAwcHggMHB4XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGJhY2tncm91bmQ6IFwiI2Y1ZjVmNVwiLFxyXG4gICAgbWluSGVpZ2h0OiBcIjgwMHB4XCIsXHJcbiAgfSxcclxuICBjZXJ0aWZpY2F0ZV9ib3g6IHtcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltZ30pYCxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCIxMDAlIDEwMCVcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIHdpZHRoOiBcIjc4MHB4XCIsXHJcbiAgICBmb250V2VpZ2h0OiBcIjYwMFwiLFxyXG4gICAgYm9yZGVyOiBcIjE1cHggc29saWQgIzFhMjM3ZVwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcclxuICB9LFxyXG4gIGhlYWRpbmcxOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiNDVweFwiLFxyXG4gICAgZm9udFNpemU6IFwiMzJweFwiLFxyXG4gICAgZm9udFdlaWdodDogXCI4MDBcIixcclxuICAgIG1hcmdpbjogXCIyMHB4IDAgMjBweFwiLFxyXG4gICAgZm9udEZhbWlseTogXCInVmlnYScsIHNhbnMtc2VyaWZcIixcclxuICAgIGxldHRlclNwYWNpbmc6IFwiMXB4XCIsXHJcbiAgfSxcclxuICBsYWJlbDoge1xyXG4gICAgZm9udFdlaWdodDogXCI2MDBcIixcclxuICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICAgIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gIH0sXHJcbiAgbGFiZWxleHRyYToge1xyXG4gICAgZm9udFdlaWdodDogXCI2MDBcIixcclxuICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICAgIG1hcmdpbkxlZnQ6IFwiNXB4XCIsXHJcbiAgfSxcclxuICBoZWFkaW5nMzoge1xyXG4gICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXHJcbiAgICBmb250U2l6ZTogXCIxOHB4XCIsXHJcbiAgfSxcclxuICBoZWFkaW5nNDoge1xyXG4gICAgZm9udFdlaWdodDogXCI4MDBcIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXHJcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICB9LFxyXG4gIGhlYWRpbmc1OiB7XHJcbiAgICBmb250V2VpZ2h0OiBcIjgwMFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTdweFwiLFxyXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxyXG4gICAgcGFkZGluZzogXCIzcHggNDBweCAwXCIsXHJcbiAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCBzYW5zLXNlcmlmXCIsXHJcbiAgfSxcclxuICBzZWN0aW9uSGVhZGVyOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgIGZvbnRTaXplOiBcIjM1cHhcIixcclxuICB9LFxyXG4gIHNpZ246IHtcclxuICAgIHBhZGRpbmc6IFwiM3B4IDQwcHhcIixcclxuICAgIG1hcmdpbjogXCI3MHB4IDBweCAxMHB4IDBweFwiLFxyXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxyXG4gICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gIH0sXHJcbiAgc2lnbl9kaXY6IHtcclxuICAgIG1hcmdpblRvcDogXCI3MHB4XCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiNDBweFwiLFxyXG4gIH0sXHJcbiAgYmFubmVyQm90dG9tOiB7XHJcbiAgICBcIiYgPiBzcGFuXCI6IHtcclxuICAgICAgZGlzcGxheTogXCJibG9jayAhaW1wb3J0YW50XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd3JhcHBlclNlY3Rpb246IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCwgMCwgMCksXHJcbiAgfSxcclxuICBzZWN0aW9uV3JhcHBlcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg3LCA2KSxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBtaW5IZWlnaHQ6IFwiMzUwcHhcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBwYWRkaW5nOiBcIjMwcHhcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIG1pbkhlaWdodDogXCJhdXRvXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBoMVwiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIFwiJjo6YWZ0ZXJcIjoge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcIiBcIicsXHJcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgIHdpZHRoOiBcIjE1MHB4XCIsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjNweCBzb2xpZCAjNTEyMGZmXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICBib3R0b206IFwiMTVweFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbW1vbkJ0bjoge1xyXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM1MTIwRkZcIixcclxuICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgIGZvbnRTaXplOiAxNixcclxuICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIG1pbldpZHRoOiAyMDAsXHJcbiAgICBib3JkZXI6IFwic29saWQgMXB4ICM1MTIwRkZcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgZWFzZS1pbi1vdXRcIixcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgIGNvbG9yOiBcIiM1MTIwRkZcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBhbm90aGVyQ29tbW9uQnRuOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgY29sb3I6IFwiIzUxMjBGRlwiLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM1MTIwRkZcIixcclxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBibG9nY2hhaW5faGVhZGluZzoge1xyXG4gICAgbWFyZ2luQm90dG9tOiBcIjE1cHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiMjVweFwiLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZm9udFNpemVfMTg6IHtcclxuICAgIGZvbnRTaXplOiAxOCxcclxuICB9LFxyXG4gIGNvbnRlbnRTZWN0aW9uOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDUsIDYsIDApLFxyXG4gICAgXCImIHBcIjoge1xyXG4gICAgICBmb250U2l6ZTogXCIxLjI1cmVtXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMS42XCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMS4xMjVyZW1cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiYgaDFcIjoge1xyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjEuMjM1XCIsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IFwiMzBweFwiLFxyXG4gICAgICBmb250U2l6ZTogXCIyLjAyNDNyZW1cIixcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgICBmb250U2l6ZTogXCIxLjgyMTlyZW1cIixcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgICBmb250U2l6ZTogXCIxLjU2MjVyZW1cIixcclxuICAgICAgfSxcclxuICAgICAgXCImOjphZnRlclwiOiB7XHJcbiAgICAgICAgY29udGVudDogXCJcIixcclxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjVweCBzb2xpZCAjNTEyMEZGXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImIHVsXCI6IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6IFwiMzBweFwiLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiAxNSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiYgbGlcIjoge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgZm9udFNpemU6IFwiMThweFwiLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiA4LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlTGFiczoge1xyXG4gICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgbWFyZ2luOiBcImF1dG8gYXV0b1wiLFxyXG4gICAgYm9yZGVyOiBcIjBcIixcclxuICB9LFxyXG4gIGltYWdlV3JhcHBlcjoge1xyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgXCImID4gc3BhblwiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHN1YlRpdGxlOiB7XHJcbiAgICBcIiYgaDFcIjoge1xyXG4gICAgICBmb250U2l6ZTogXCIxLjQ5OTNyZW1cIixcclxuICAgIH0sXHJcbiAgICBcIiYgcFwiOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgICAgbGluZUhlaWdodDogXCIxLjVcIixcclxuICAgIH0sXHJcbiAgICBcIiYgcCA+IHNwYW5cIjoge1xyXG4gICAgICBmb250U2l6ZTogXCIxOHB4ICFpbXBvcnRhbnRcIixcclxuICAgICAgZm9udEZhbWlseTogXCJMYXRvICFpbXBvcnRhbnRcIixcclxuICAgICAgZm9udFdlaWdodDogXCI0MDAgIWltcG9ydGFudFwiLFxyXG4gICAgICBjb2xvcjogXCIjMmQzNzQ4ICFpbXBvcnRhbnRcIixcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgTWFya2V0aW5nID0gKHsgYmxvZ0RhdGEsIGNvdXJzZURhdGEsIHByZXNzRGF0YSwgbWFya2V0RGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzTWQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIiksIHtcclxuICAgIGRlZmF1bHRNYXRjaGVzOiB0cnVlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtnZXRUZW1wbGF0ZURhdGEsIHNldEdldFRlbXBsYXRlRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY291cnNlVGVtcERhdGEsIHNldENvdXJzZVRlbXBEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyBjb25zdCBbYmxvZ0RhdGEsIHNldEJsb2dEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyBjb25zdCBbcHJlc3NEYXRhLCBzZXRQcmVzc0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY291cnNlRGF0YSxcInRoaXMgaXMgZGF0YVwiKVxyXG4gICAgY29uc3QgZGF0YSA9IGNvdXJzZURhdGFcclxuICAgIGlmKGRhdGEgJiYgZGF0YS5sZW5ndGgpXHJcbiAgICB7XHJcbiAgICAgIGxldCBmaWx0ZXJEYXRhID0gZGF0YS5maWx0ZXIoKGNvdXJzZSkgPT4gY291cnNlLmlzQWN0aXZlKTtcclxuICAgICAgc2V0Q291cnNlVGVtcERhdGEoZmlsdGVyRGF0YSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobWFya2V0RGF0YSAmJiBtYXJrZXREYXRhLmxlbmd0aCkge1xyXG4gICAgICBsZXQgZ2V0RGF0YSA9IG1hcmtldERhdGEuZmlsdGVyKChlKSA9PiBlLnRpdGxlU2x1ZyA9PT0gXCJtYXJrZXRpbmdcIik7XHJcbiAgICAgIHNldEdldFRlbXBsYXRlRGF0YSguLi5nZXREYXRhKTtcclxuICAgIH1cclxuICB9LCBbbWFya2V0RGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlcm8gLz5cclxuICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgPFByb21vTnVtYmVycyBkYXRhPXtnZXRUZW1wbGF0ZURhdGF9IC8+XHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgPFNlY3Rpb25BbHRlcm5hdGUgY2xhc3NOYW1lPXtjbGFzc2VzLmNhdGVnb3JpZXNXcmFwcGVyfT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPENhdGVnb3JpZXMgY291cnNlRGF0YT17Y291cnNlVGVtcERhdGF9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvU2VjdGlvbkFsdGVybmF0ZT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJTZWN0aW9ufT5cclxuICAgICAgICA8U2VjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICBjbGFzc2VzLmNvbnRlbnRTZWN0aW9uLFxyXG4gICAgICAgICAgICBjbGFzc2VzLnN1YlRpdGxlLFxyXG4gICAgICAgICAgICBjbGFzc2VzLnBiXzYwXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0VGVtcGxhdGVEYXRhID9cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17aXNNZCA/IDAgOiAyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIHhzPXsxMn0gbWQ9ezZ9IGRhdGEtYW9zPSdmYWRlLXVwJz5cclxuICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifVxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjEwMCVcIn1cclxuICAgICAgICAgICAgICAgICAgICBwbD17aXNNZCA/IDIgOiAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHByPXtpc01kID8gMiA6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlV3JhcHBlcn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBcHBDb25maWcuSU1BR0VfVVJMfS8ke2dldFRlbXBsYXRlRGF0YS5ibG9ja0ltYWdlNX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjU2V0PXtgJHtBcHBDb25maWcuSU1BR0VfVVJMfS8ke2dldFRlbXBsYXRlRGF0YS5ibG9ja0ltYWdlNX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1wibWFya2V0aW5nIGltYWdlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VMYWJzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3M9J2ZhZGUtdXAnXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vcmRlcl9zcF8zMH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17Mn0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1iPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2JvZHkxJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ndGV4dFByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb250U2l6ZV8xOH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2dldFRlbXBsYXRlRGF0YSA/IFJlYWN0SHRtbFBhcnNlcihnZXRUZW1wbGF0ZURhdGEuYmxvY2s1KSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPFNlY3Rpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgY2xhc3Nlcy5jb250ZW50U2VjdGlvbixcclxuICAgICAgICAgICAgY2xhc3Nlcy5zdWJUaXRsZSxcclxuICAgICAgICAgICAgY2xhc3Nlcy5wYl82MFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17aXNNZCA/IDAgOiAyfT5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPSdmYWRlLXVwJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vcmRlcl9zcF8zMH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHsvKiA8UGFwZXIgZWxldmF0aW9uPXsyfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PiAqL31cclxuICAgICAgICAgICAgICAgIDxCb3ggbWI9ezJ9IG10PXszfT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MSdcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj0ndGV4dFByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZvbnRTaXplXzE4fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldFRlbXBsYXRlRGF0YSA/IFJlYWN0SHRtbFBhcnNlcihnZXRUZW1wbGF0ZURhdGEuYmxvY2s2KSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICB7LyogPC9QYXBlcj4gKi99XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgey8qIDxHcmlkIHhzPXsxMn0gbWQ9ezZ9IGRhdGEtYW9zPSdmYWRlLXVwJz5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnZXRUZW1wbGF0ZURhdGEgP1xyXG4gICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMTAwJVwifVxyXG4gICAgICAgICAgICAgICAgICAgIHBsPXtpc01kID8gMiA6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHI9e2lzTWQgPyAyIDogMH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VXcmFwcGVyfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0FwcENvbmZpZy5JTUFHRV9VUkx9LyR7Z2V0VGVtcGxhdGVEYXRhLmJsb2NrSW1hZ2U2fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmNTZXQ9e2Ake0FwcENvbmZpZy5JTUFHRV9VUkx9LyR7Z2V0VGVtcGxhdGVEYXRhLmJsb2NrSW1hZ2U2fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1wibWFya2V0aW5nSW1hZ2UyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VMYWJzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvR3JpZD4gKi99XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFNlY3Rpb25BbHRlcm5hdGVcclxuICAgICAgICAvLyBpbm5lcm5hcnJvd2VkXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuc2VjdGlvbkFsdGVybmF0ZSwgY2xhc3Nlcy5zdWJzY3JpcHRpb25XcmFwcGVyKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxTdWJzY3JpcHRpb24gc2VuZGluZz17Z2V0VGVtcGxhdGVEYXRhfSAvPlxyXG4gICAgICA8L1NlY3Rpb25BbHRlcm5hdGU+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcmtldGluZztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcclxuaW1wb3J0IHsgQ2FyZENhdGVnb3J5TGluayB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuaW1wb3J0ICB1c2VNZWRpYVF1ZXJ5ICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0ICBHcmlkICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0ICBUeXBvZ3JhcGh5ICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHB1cnBsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcHVycGxlJztcclxuaW1wb3J0ICBtYWtlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzJztcclxuaW1wb3J0ICB1c2VUaGVtZSAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3VzZVRoZW1lJztcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gIHRleHRCbHVlOiB7XHJcbiAgICBjb2xvcjogXCIjNTEyMEZGXCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQ2F0ZWdvcmllcyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGRhdGEsIGNvdXJzZURhdGEsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc01kID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpLCB7XHJcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5yZXN0fT5cclxuICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgQ2hvb3NlIHlvdXIgYmVzdHtcIiBcIn1cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICB2YXJpYW50PSdpbmhlcml0J1xyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD0nc3BhbidcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEJsdWV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb3Vyc2VzIFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1YnRpdGxlPSdCcm93c2UgdGhlIGF2YWlsYWJsZSBjb3Vyc2UgY2F0ZWdvcmllcywgY2hvb3NlIHlvdXIgZmF2b3JpdGUgb25lIGFuZCBzdGFydCBsZWFybmluZy4nXHJcbiAgICAgICAgZmFkZVVwXHJcbiAgICAgIC8+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXtpc01kID8gNCA6IDJ9IGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifT5cclxuICAgICAgICB7Y291cnNlRGF0YSAmJiBjb3Vyc2VEYXRhLmxlbmd0aFxyXG4gICAgICAgICAgPyBjb3Vyc2VEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXHJcbiAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICBzbT17Nn1cclxuICAgICAgICAgICAgICAgIG1kPXs0fVxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9J2ZhZGUtdXAnXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDYXRlZ29yeUxpbmtcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduPXtpc01kID8gXCJsZWZ0XCIgOiBcImNlbnRlclwifVxyXG4gICAgICAgICAgICAgICAgICBsaWZ0VXBcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL2NvdXJzZS1kZXRhaWwvJHtpdGVtLl9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICBmb250SWNvbkNsYXNzPXtcImZhcyBmYS1mdW5uZWwtZG9sbGFyXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtwdXJwbGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIDogXCJcIn1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhdGVnb3JpZXMucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogZGF0YSB0byBiZSByZW5kZXJlZFxyXG4gICAqL1xyXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllcztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2F0ZWdvcmllcyc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAgdXNlTWVkaWFRdWVyeSAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCAgR3JpZCAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCAgVHlwb2dyYXBoeSAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB5ZWxsb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3llbGxvdyc7XHJcbmltcG9ydCAgbWFrZVN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlcyc7XHJcbmltcG9ydCAgdXNlVGhlbWUgIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy91c2VUaGVtZSc7XHJcbmltcG9ydCBBcHBDb25maWcgIGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZy9hcHBDb25maWcnO1xyXG5pbXBvcnQgeyBJbWFnZSwgTGVhcm5Nb3JlTGluayB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xyXG5pbXBvcnQgeyBDYXJkUHJvZHVjdCB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBjYXJkUHJvZHVjdDoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gIH0sXHJcbiAgY291cnNlQ2FyZFByaWNlOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICByaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGNvdXJzZUNhcmRSZXZpZXdBdmF0YXI6IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoLTIpLFxyXG4gICAgYm9yZGVyOiBgM3B4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyfWAsXHJcbiAgICAnJjpmaXJzdC1jaGlsZCc6IHtcclxuICAgICAgbWFyZ2luTGVmdDogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb3Vyc2VDYXJkUmV2aWV3U3Rhcjoge1xyXG4gICAgY29sb3I6IHllbGxvd1s4MDBdLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gIH0sXHJcbiAgcmV2aWV3Q291bnQ6IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gIH0sXHJcbiAgZm9udFdlaWdodDcwMDoge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IENvdXJzZXMgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzTWQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpLCB7XHJcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5yZXN0fT5cclxuICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgQnJvd3NlIG91ciA8VHlwb2dyYXBoeSBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJpbmhlcml0XCIgY29tcG9uZW50PVwic3BhblwiPlBvcHVsYXIgQmxvZ3M8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1YnRpdGxlPVwiSGVyZSBhcmUgb3VyIHBvcHVsYXIgY291cnNlIHlvdSBtaWdodCB3YW50IHRvIGxlYXJuIGZyb20geW91ciB0dXRvci5cIlxyXG4gICAgICAgIGZhZGVVcFxyXG4gICAgICAvPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17aXNNZCA/IDQgOiAyfT5cclxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8R3JpZCBrZXk9e2luZGV4fSBpdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0gZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICAgIDxDYXJkUHJvZHVjdFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkUHJvZHVjdH1cclxuICAgICAgICAgICAgICB3aXRoU2hhZG93XHJcbiAgICAgICAgICAgICAgbGlmdFVwXHJcbiAgICAgICAgICAgICAgbWVkaWFDb250ZW50PXtcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YCR7QXBwQ29uZmlnLklNQUdFX1VSTH0ke2l0ZW0uYmxvZ0ZlYXR1cmVJbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyY1NldD17YCR7QXBwQ29uZmlnLklNQUdFX1VSTH0ke2l0ZW0uYmxvZ0ZlYXR1cmVJbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBsYXp5UHJvcHM9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvdXJzZUNhcmRQcmljZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZvbnRXZWlnaHQ3MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjYXJkQ29udGVudD17XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb250V2VpZ2h0NzAwfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17Nn0gd3JhcD1cIm5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucmV2aWV3cy5tYXAoKHJldmlldywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvdXJzZUNhcmRSZXZpZXdBdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtyZXZpZXcuYXV0aG9yTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmV2aWV3LmF1dGhvclBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHhzPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxOb1Nzcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmFzIGZhLXN0YXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5jb3Vyc2VDYXJkUmV2aWV3U3RhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ob1Nzcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZm9udFdlaWdodDcwMH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXZpZXdDb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKHtpdGVtLnJldmlld0NvdW50fSByZXZpZXdzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMZWFybk1vcmVMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkxlYXJuIG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2Jsb2ctZGV0YWlscy8ke2l0ZW0uX2lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkNvdXJzZXMucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogZGF0YSB0byBiZSByZW5kZXJlZFxyXG4gICAqL1xyXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291cnNlcztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ291cnNlcyc7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0ICBtYWtlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzJztcclxuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gXCJjb21wb25lbnRzL21vbGVjdWxlc1wiO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSBcImNvbXBvbmVudHMvb3JnYW5pc21zXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM1MTIwRkZcIixcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICBtaW5IZWlnaHQ6IDQwMCxcclxuICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRleHRXaGl0ZToge1xyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICB9LFxyXG4gIHNlY3Rpb246IHtcclxuICAgIC8vIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgLy8gdG9wOiAnNTAlJyxcclxuICAgIC8vIGxlZnQ6ICc1MCUnLFxyXG4gICAgLy8gdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIC8vIHBhZGRpbmdUb3A6IDAsXHJcbiAgICAvLyBwYWRkaW5nQm90dG9tOiAwLFxyXG4gIH0sXHJcbiAgc2VhcmNoSW5wdXRDb250YWluZXI6IHtcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBib3hTaGFkb3c6IFwiMCA0cHggMTRweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSlcIixcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBcIiYgLk11aU91dGxpbmVkSW5wdXQtbm90Y2hlZE91dGxpbmVcIjoge1xyXG4gICAgICBib3JkZXI6IFwiMCAhaW1wb3J0YW50XCIsXHJcbiAgICB9LFxyXG4gICAgXCImIC5NdWlJbnB1dEFkb3JubWVudC1wb3NpdGlvblN0YXJ0XCI6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG4gICAgXCImIC5NdWlPdXRsaW5lZElucHV0LWFkb3JuZWRTdGFydFwiOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAwLFxyXG4gICAgfSxcclxuICAgIFwiJiAuTXVpT3V0bGluZWRJbnB1dC1pbnB1dFwiOiB7XHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWFyY2hCdXR0b246IHtcclxuICAgIG1heEhlaWdodDogNDUsXHJcbiAgICBtaW5XaWR0aDogMTM1LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgbWluV2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBIZXJvID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICAgIHRpdGxlPSdNYXJrZXRpbmcnXHJcbiAgICAgICAgICAgIHN1YnRpdGxlPSdXZSBtYXJyeSBvdXIgY2FyZWZ1bGx5IGN1cmF0ZWQgY29udGVudCBhbmQgY291cnNlcyB3aXRoIGludGVyYWN0aXZlIHZpZGVvcyBhbmQgaGFuZHMtb24gbGFicy4nXHJcbiAgICAgICAgICAgIGFsaWduPSdsZWZ0J1xyXG4gICAgICAgICAgICB0aXRsZVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMudGl0bGUsIGNsYXNzZXMudGV4dFdoaXRlKSxcclxuICAgICAgICAgICAgICB2YXJpYW50OiBcImgzXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN1YnRpdGxlUHJvcHM9e3tcclxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGV4dFdoaXRlLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm8ucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9IZXJvJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcclxuaW1wb3J0IHsgQ2FyZENhdGVnb3J5TGluayB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuaW1wb3J0ICB1c2VUaGVtZSAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3VzZVRoZW1lJztcclxuaW1wb3J0ICB1c2VNZWRpYVF1ZXJ5ICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0ICBHcmlkICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0ICBUeXBvZ3JhcGh5ICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHB1cnBsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcHVycGxlJztcclxuY29uc3QgUHJlc3NSZWxlYXNlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSxjb3Vyc2VEYXRhLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyksIHtcclxuICAgIGRlZmF1bHRNYXRjaGVzOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIENoZWNrb3V0IE91ciBMYXRlc3QgeycgJ31cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiaW5oZXJpdFwiIGNvbXBvbmVudD1cInNwYW5cIj5QcmVzcyBSZWxlYXNlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIH1cclxuICAgICAgICBzdWJ0aXRsZT1cIkJyb3dzZSB0aGUgYXZhaWxhYmxlIGNvdXJzZSBjYXRlZ29yaWVzLCBjaG9vc2UgeW91ciBmYXZvcml0ZSBvbmUgYW5kIHN0YXJ0IGxlYXJuaW5nLlwiXHJcbiAgICAgICAgZmFkZVVwXHJcbiAgICAgIC8+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXtpc01kID8gNCA6IDJ9PlxyXG4gICAgICAgIHtjb3Vyc2VEYXRhICYmIGNvdXJzZURhdGEubGVuZ3RoID8gY291cnNlRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICBzbT17Nn1cclxuICAgICAgICAgICAgbWQ9ezN9XHJcbiAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkQ2F0ZWdvcnlMaW5rXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBhbGlnbj17aXNNZCA/ICdsZWZ0JyA6ICdjZW50ZXInfVxyXG4gICAgICAgICAgICAgIGxpZnRVcFxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YlRpdGxlfVxyXG4gICAgICAgICAgICAgIGhyZWY9e2AvY291cnNlLWRldGFpbC8ke2l0ZW0uX2lkfWB9XHJcbiAgICAgICAgICAgICAgZm9udEljb25DbGFzcz17J2ZhcyBmYS1mdW5uZWwtZG9sbGFyJ31cclxuICAgICAgICAgICAgICBjb2xvcj17cHVycGxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICkpIDpcIlwifVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUHJlc3NSZWxlYXNlLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIGRhdGEgdG8gYmUgcmVuZGVyZWRcclxuICAgKi9cclxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZXNzUmVsZWFzZTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vUHJlc3NSZWxlYXNlJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcclxuaW1wb3J0IHsgQ2FyZFByb21vIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAgdXNlTWVkaWFRdWVyeSAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCAgR3JpZCAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCAgbWFrZVN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlcyc7XHJcbmltcG9ydCAgdXNlVGhlbWUgIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy91c2VUaGVtZSc7XHJcbmltcG9ydCBSZWFjdEh0bWxQYXJzZXIgZnJvbSBcInJlYWN0LWh0bWwtcGFyc2VyXCI7XHJcbmltcG9ydCBBcHBDb25maWcgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbmZpZy9hcHBDb25maWdcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICB0ZXh0Qmx1ZToge1xyXG4gICAgY29sb3I6IFwiIzUxMjBGRlwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFByb21vTnVtYmVycyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGRhdGEsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc01kID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpLCB7XHJcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcclxuICB9KTtcclxuICB1c2VFZmZlY3QoKHByb3BzKSA9PiB7XHJcblxyXG4gIH0sIFtwcm9wc10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIHtkYXRhID8gZGF0YS5ibG9ja1RpdGxlMSA6IFwiXCJ9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1YnRpdGxlPXtkYXRhID8gZGF0YS5ibG9ja1RpdGxlMiA6IFwiXCJ9XHJcbiAgICAgICAgZmFkZVVwXHJcbiAgICAgIC8+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXtpc01kID8gNCA6IDJ9PlxyXG4gICAgICAgIHtkYXRhID9cclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgICAgICBkaXJlY3Rpb249J2NvbHVtbidcclxuICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgc209ezZ9XHJcbiAgICAgICAgICAgICAgbWQ9ezN9XHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9J2ZhZGUtdXAnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2FyZFByb21vXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgIGxpZnRVcFxyXG4gICAgICAgICAgICAgICAgYWxpZ249e2lzTWQgPyBcImxlZnRcIiA6IFwiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17ZGF0YS5ibG9ja1RpdGxlNCArIGArYH1cclxuICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtkYXRhLmJsb2NrVGl0bGUzfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1JlYWN0SHRtbFBhcnNlcihkYXRhLmJsb2NrMSl9XHJcbiAgICAgICAgICAgICAgICBmb250SWNvbkNsYXNzPXtkYXRhLmJsb2NrSW1hZ2UxfVxyXG4gICAgICAgICAgICAgICAgdGl0bGVDb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgIHNyYz17YCR7QXBwQ29uZmlnLklNQUdFX1VSTH0vJHtkYXRhLmJsb2NrSW1hZ2UxfWB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXHJcbiAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgIHNtPXs2fVxyXG4gICAgICAgICAgICAgIG1kPXszfVxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPSdmYWRlLXVwJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENhcmRQcm9tb1xyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICBsaWZ0VXBcclxuICAgICAgICAgICAgICAgIGFsaWduPXtpc01kID8gXCJsZWZ0XCIgOiBcImNlbnRlclwifVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2RhdGEuYmxvY2tUaXRsZTYgKyBgK2B9XHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZT17ZGF0YS5ibG9ja1RpdGxlNX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtSZWFjdEh0bWxQYXJzZXIoZGF0YS5ibG9jazIpfVxyXG4gICAgICAgICAgICAgICAgZm9udEljb25DbGFzcz17ZGF0YS5ibG9ja0ltYWdlMn1cclxuICAgICAgICAgICAgICAgIHNyYz17YCR7QXBwQ29uZmlnLklNQUdFX1VSTH0vJHtkYXRhLmJsb2NrSW1hZ2UyfWB9XHJcbiAgICAgICAgICAgICAgICB0aXRsZUNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj0nY29sdW1uJ1xyXG4gICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICBzbT17Nn1cclxuICAgICAgICAgICAgICBtZD17M31cclxuICAgICAgICAgICAgICBkYXRhLWFvcz0nZmFkZS11cCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDYXJkUHJvbW9cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgbGlmdFVwXHJcbiAgICAgICAgICAgICAgICBhbGlnbj17aXNNZCA/IFwibGVmdFwiIDogXCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtkYXRhLmJsb2NrVGl0bGU4ICsgYCtgfVxyXG4gICAgICAgICAgICAgICAgc3VidGl0bGU9e2RhdGEuYmxvY2tUaXRsZTd9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17UmVhY3RIdG1sUGFyc2VyKGRhdGEuYmxvY2szKX1cclxuICAgICAgICAgICAgICAgIGZvbnRJY29uQ2xhc3M9e2RhdGEuYmxvY2tJbWFnZTN9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2Ake0FwcENvbmZpZy5JTUFHRV9VUkx9LyR7ZGF0YS5ibG9ja0ltYWdlM31gfVxyXG4gICAgICAgICAgICAgICAgdGl0bGVDb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgICAgICBkaXJlY3Rpb249J2NvbHVtbidcclxuICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgc209ezZ9XHJcbiAgICAgICAgICAgICAgbWQ9ezN9XHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9J2ZhZGUtdXAnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2FyZFByb21vXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgIGxpZnRVcFxyXG4gICAgICAgICAgICAgICAgYWxpZ249e2lzTWQgPyBcImxlZnRcIiA6IFwiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17ZGF0YS5ibG9ja1RpdGxlMTAgKyBgK2B9XHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZT17ZGF0YS5ibG9ja1RpdGxlOX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtSZWFjdEh0bWxQYXJzZXIoZGF0YS5ibG9jazQpfVxyXG4gICAgICAgICAgICAgICAgZm9udEljb25DbGFzcz17ZGF0YS5ibG9ja0ltYWdlNH1cclxuICAgICAgICAgICAgICAgIHNyYz17YCR7QXBwQ29uZmlnLklNQUdFX1VSTH0vJHtkYXRhLmJsb2NrSW1hZ2U0fWB9XHJcbiAgICAgICAgICAgICAgICB0aXRsZUNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICA6IG51bGx9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Qcm9tb051bWJlcnMucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogZGF0YSB0byBiZSByZW5kZXJlZFxyXG4gICAqL1xyXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvbW9OdW1iZXJzO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Qcm9tb051bWJlcnMnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyLCBJY29uQWx0ZXJuYXRlIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xyXG5pbXBvcnQgeyBDYXJkUmV2aWV3IH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5pbXBvcnQgIHVzZU1lZGlhUXVlcnkgIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgIEdyaWQgIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgIFR5cG9ncmFwaHkgIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSc7XHJcbmltcG9ydCAgQnV0dG9uICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgIG1ha2VTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXMnO1xyXG5pbXBvcnQgIHVzZVRoZW1lICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvdXNlVGhlbWUnO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgc2VjdGlvbkhlYWRsaW5lU3RhcnM6IHtcclxuICAgIG1heFdpZHRoOiAxMjAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgUmV2aWV3cyA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyksIHtcclxuICAgIGRlZmF1bHRNYXRjaGVzOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnJlc3R9PlxyXG4gICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgIG92ZXJsaW5lPXtcclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9pbGx1c3RyYXRpb25zL3JhdGVkLWJ5LW91ci1jdXN0b21lci5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJyYXRpbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbkhlYWRsaW5lU3RhcnN9XHJcbiAgICAgICAgICAgIHdpZHRoPVwiYXV0b1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwic3BhblwiIHZhcmlhbnQ9XCJpbmhlcml0XCIgY29sb3I9XCJwcmltYXJ5XCI+UmF0ZWQgNSBvdXQgb2YgNTwvVHlwb2dyYXBoeT57JyAnfVxyXG4gICAgICAgICAgICBzdGFycyBieSBvdXIgY3VzdG9tZXJzIVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIH1cclxuICAgICAgICBzdWJ0aXRsZT1cIkNvbXBhbmllcyBmcm9tIGFjcm9zcyB0aGUgZ2xvYmUgaGF2ZSBoYWQgZmFudGFzdGljIGV4cGVyaWVuY2VzIHVzaW5nIFRoZUZyb250LiBIZXJl4oCZcyB3aGF0IHRoZXkgaGF2ZSB0byBzYXkuXCJcclxuICAgICAgICBmYWRlVXBcclxuICAgICAgLz5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e2lzTWQgPyA0IDogMn0+XHJcbiAgICAgICAge2RhdGEubWFwKChyZXZpZXcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgIG1kPXs0fVxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZFJldmlld1xyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgdGV4dD17cmV2aWV3LmZlZWRiYWNrfVxyXG4gICAgICAgICAgICAgIGljb249e1xyXG4gICAgICAgICAgICAgICAgPEljb25BbHRlcm5hdGVcclxuICAgICAgICAgICAgICAgICAgY29sb3I9e2JsdWV9XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRJY29uQ2xhc3M9XCJmYXMgZmEtcXVvdGUtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYXV0aG9yTmFtZT17cmV2aWV3LmF1dGhvck5hbWV9XHJcbiAgICAgICAgICAgICAgYXV0aG9yVGl0bGU9e3Jldmlldy5hdXRob3JPY2N1cGF0aW9ufVxyXG4gICAgICAgICAgICAgIGF1dGhvclBob3RvPXtyZXZpZXcuYXV0aG9yUGhvdG99XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgeHM9ezEyfSBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgU2VlIGFsbCByZXZpZXdzXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXZpZXdzLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIGRhdGEgdG8gYmUgcmVuZGVyZWRcclxuICAgKi9cclxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld3M7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1Jldmlld3MnO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgQXBpSGVscGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlclwiO1xyXG5pbXBvcnQgeyBBcGlSb3V0ZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uZmlnL0FwaVJvdXRlc1wiO1xyXG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAndmFsaWRhdGUuanMnO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnY29tcG9uZW50cy90b2FzdGVyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3Qgc2NoZW1hID0ge1xyXG4gIGVtYWlsOiB7XHJcbiAgICBwcmVzZW5jZTogeyBhbGxvd0VtcHR5OiBmYWxzZSwgbWVzc2FnZTogXCJpcyByZXF1aXJlZFwiIH0sXHJcbiAgICBlbWFpbDogdHJ1ZSxcclxuICAgIGxlbmd0aDoge1xyXG4gICAgICBtYXhpbXVtOiAxMjAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb21tb25CdG46IHtcclxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICBwYWRkaW5nOiBcIjdweCAxMHB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzUxMjBGRlwiLFxyXG4gICAgZm9udFNpemU6IDE2LFxyXG4gICAgbWluV2lkdGg6IDIwMCxcclxuICAgIGJvcmRlcjogXCJzb2xpZCAxcHggIzUxMjBGRlwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zcyBlYXNlLWluLW91dFwiLFxyXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgIGNvbG9yOiBcIiM1MTIwRkZcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgXCImICRsb2FkZXJDb21tb25cIjoge1xyXG4gICAgICAgIGNvbG9yOiBcIiM1MTIwRkYgIWltcG9ydGFudFwiXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIiY6ZGlzYWJsZWRcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzUzNjJmYyAhaW1wb3J0YW50XCJcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBib3hTaGFkb3dIaWdobGlnaHQ6XHJcbiAge1xyXG4gICAgYm94U2hhZG93OiBcInJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDAuMDYyNWVtIDAuMDYyNWVtLCByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAwLjEyNWVtIDAuNWVtLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IDBweCAwcHggMXB4IGluc2V0XCJcclxuICB9LFxyXG4gIHNtYWxsQ29tbW9uQnRuOiB7XHJcbiAgICBtaW5XaWR0aDogMTMyLFxyXG4gICAgcGFkZGluZzogXCI4cHggMTBweFwiLFxyXG4gICAgZm9udFNpemU6IDE1LFxyXG4gIH0sXHJcbiAgY3VzdG9tRmllbGQ6IHtcclxuICAgIFwiJiBpbnB1dFwiOiB7XHJcbiAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxyXG4gICAgICBoZWlnaHQ6IDQ0LFxyXG4gICAgICBib3hTaXppbmc6IFwiIGJvcmRlci1ib3hcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsb2FkZXJDb21tb246XHJcbiAge1xyXG4gICAgd2lkdGg6IFwiMTdweCAhaW1wb3J0YW50XCIsXHJcbiAgICBoZWlnaHQ6IFwiMTdweCAhaW1wb3J0YW50XCIsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIH0sXHJcbiAgZXJyb3JUZXh0OlxyXG4gIHtcclxuICAgIGNvbG9yOiAncmVkJyxcclxuICAgIGZvbnRTaXplOiBcIjE0cHhcIlxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFN1YnNjcmlwdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgdmFsdWVzOiB7fSxcclxuICAgIHRvdWNoZWQ6IHt9LFxyXG4gICAgZXJyb3JzOiB7fSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVycm9ycyA9IHZhbGlkYXRlKGZvcm1TdGF0ZS52YWx1ZXMsIHNjaGVtYSk7XHJcblxyXG4gICAgc2V0Rm9ybVN0YXRlKChmb3JtU3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmZvcm1TdGF0ZSxcclxuICAgICAgaXNWYWxpZDogZXJyb3JzID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICBlcnJvcnM6IGVycm9ycyB8fCB7fSxcclxuICAgIH0pKTtcclxuICB9LCBbZm9ybVN0YXRlLnZhbHVlc10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gIH0sIFtwcm9wc10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucGVyc2lzdCgpO1xyXG5cclxuICAgIHNldEZvcm1TdGF0ZSgoZm9ybVN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5mb3JtU3RhdGUsXHJcbiAgICAgIHZhbHVlczoge1xyXG4gICAgICAgIC4uLmZvcm1TdGF0ZS52YWx1ZXMsXHJcbiAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgICB0b3VjaGVkOiB7XHJcbiAgICAgICAgLi4uZm9ybVN0YXRlLnRvdWNoZWQsXHJcbiAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pKTtcclxuICB9O1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0Rm9ybVN0YXRlKChmb3JtU3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmZvcm1TdGF0ZSxcclxuICAgICAgdG91Y2hlZDoge1xyXG4gICAgICAgIC4uLmZvcm1TdGF0ZS50b3VjaGVkLFxyXG4gICAgICAgIC4uLmZvcm1TdGF0ZS5lcnJvcnMsXHJcbiAgICAgIH0sXHJcbiAgICB9KSk7XHJcbiAgICBpZiAoZm9ybVN0YXRlLmlzVmFsaWQpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBlbWFpbDogZm9ybVN0YXRlLnZhbHVlcy5lbWFpbCxcclxuICAgICAgfTtcclxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV3IEFwaUhlbHBlcigpLkZldGNoRnJvbVNlcnZlcihcclxuICAgICAgICBBcGlSb3V0ZXMuTkVXU0xFVFRFUlNVQlNDUklCRS5zZXJ2aWNlLFxyXG4gICAgICAgIEFwaVJvdXRlcy5ORVdTTEVUVEVSU1VCU0NSSUJFLnVybCxcclxuICAgICAgICBBcGlSb3V0ZXMuTkVXU0xFVFRFUlNVQlNDUklCRS5tZXRob2QsXHJcbiAgICAgICAgQXBpUm91dGVzLk5FV1NMRVRURVJTVUJTQ1JJQkUuYXV0aGVudGljYXRlLFxyXG4gICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmlzRXJyb3IpIHtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLm1lc3NhZ2VzWzBdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRGb3JtU3RhdGUoKGZvcm1TdGF0ZSkgPT4gKHtcclxuICAgICAgICAgIC4uLmZvcm1TdGF0ZSxcclxuICAgICAgICAgIHZhbHVlczp7fSxcclxuICAgICAgICAgIHRvdWNoZWQ6e31cclxuICAgICAgICB9KSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICB0aXRsZTogcmVzcG9uc2UubWVzc2FnZXNbMF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFzRXJyb3IgPSAoZmllbGQpID0+XHJcbiAgICBmb3JtU3RhdGUudG91Y2hlZFtmaWVsZF0gJiYgZm9ybVN0YXRlLmVycm9yc1tmaWVsZF0gPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxDYXJkQmFzZSB3aXRoU2hhZG93IGRhdGEtYW9zPSdmYWRlLXVwJyBjbGFzc05hbWU9e2NsYXNzZXMuYm94U2hhZG93SGlnaGxpZ2h0fT5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgdGl0bGU9e3Byb3BzLnNlbmRpbmcgPyBwcm9wcy5zZW5kaW5nLmJsb2NrVGl0bGUxMiA6IG51bGx9XHJcbiAgICAgICAgICBzdWJ0aXRsZT17cHJvcHMuc2VuZGluZyA/IHByb3BzLnNlbmRpbmcuYmxvY2tUaXRsZTEzIDogbnVsbH1cclxuICAgICAgICAgIGZhZGVVcFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IGFsaWduSXRlbXM9J2NlbnRlcic+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezl9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1lvdXIgZS1tYWlsIGFkZHJlc3MnXHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgc2l6ZT0nbWVkaXVtJ1xyXG4gICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgIGhlbHBlcnRleHQ9e2hhc0Vycm9yKFwiZW1haWxcIikgPyBmb3JtU3RhdGUuZXJyb3JzLmVtYWlsWzBdIDogbnVsbH1cclxuICAgICAgICAgICAgICBlcnJvcj17aGFzRXJyb3IoXCJlbWFpbFwiKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtU3RhdGUudmFsdWVzLmVtYWlsIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbUZpZWxkfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17M30+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGNsc3goY2xhc3Nlcy5jb21tb25CdG4sIGNsYXNzZXMuc21hbGxDb21tb25CdG4pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nID8gPENpcmN1bGFyUHJvZ3Jlc3MgY2xhc3NOYW1lPXtjbGFzc2VzLmxvYWRlckNvbW1vbn0gLz5cclxuICAgICAgICAgICAgICAgICAgOiBcInN1YnNjcmliZVwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGFzRXJyb3IoXCJlbWFpbFwiKSA/XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmVycm9yVGV4dH0+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybVN0YXRlLmVycm9ycy5lbWFpbFswXX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICA8L0NhcmRCYXNlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblN1YnNjcmlwdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1YnNjcmlwdGlvbjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXRlZ29yaWVzIH0gZnJvbSAnLi9DYXRlZ29yaWVzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb3Vyc2VzIH0gZnJvbSAnLi9Db3Vyc2VzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZXJvIH0gZnJvbSAnLi9IZXJvJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9tb051bWJlcnMgfSBmcm9tICcuL1Byb21vTnVtYmVycyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmV2aWV3cyB9IGZyb20gJy4vUmV2aWV3cyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xyXG5leHBvcnQge2RlZmF1bHQgYXMgUHJlc3NSZWxlYXNlfSBmcm9tICAnLi9QcmVzc1JlbGVhc2UnXHJcbiIsImltcG9ydCB7IGNvbG9ycyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9tb051bWJlcnMgPSBbXHJcbiAge1xyXG4gICAgY29sb3I6IGNvbG9ycy5ibHVlLFxyXG4gICAgaWNvbjogJ2ZhcyBmYS1ncmFkdWF0aW9uLWNhcCcsXHJcbiAgICB0aXRsZTogJzEwMDArJyxcclxuICAgIHN1YnRpdGxlOiAnT25saW5lIENvdXJzZXMnLFxyXG4gICAgZGVzY3JpcHRpb246ICdDaG9vc2UgZnJvbSBvdmVyIDEwMDArIG9ubGluZSB2aWRlbyBjb3Vyc2VzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2xvcjogY29sb3JzLnB1cnBsZSxcclxuICAgIGljb246ICdmYXMgZmEtYm9vaycsXHJcbiAgICB0aXRsZTogJzgwMCsnLFxyXG4gICAgc3VidGl0bGU6ICdFeHBlcnQgSW5zdHJ1Y3RvcnMnLFxyXG4gICAgZGVzY3JpcHRpb246ICdFeHBlcnQgaW5zdHJ1Y3RvcnMgdG8gbWFrZSBzdXJlIGNvdXJzZXMgYXJlIHdlbGwuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGNvbG9yOiBjb2xvcnMucGluayxcclxuICAgIGljb246ICdmYXMgZmEtdXNlci1ncmFkdWF0ZScsXHJcbiAgICB0aXRsZTogJzEwMEsrJyxcclxuICAgIHN1YnRpdGxlOiAnQWN0aXZlIFN0dWRlbnRzJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnMTAwSysgYWN0aXZlIHN0dWRlbnRzIGFycm91bmQgdGhlIHdvcmxkLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2xvcjogY29sb3JzLmluZGlnbyxcclxuICAgIGljb246ICdmYXMgZmEtZ2lmdCcsXHJcbiAgICB0aXRsZTogJzQwMCsnLFxyXG4gICAgc3VidGl0bGU6ICdGcmVlIFJlc291cmNlcycsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0ZyZWUgcmVzb3VyY2VzIGZvciBhbGwgc3R1ZGVudHMgYXJyb3VuZCB0aGUgd29ybGQuJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvdXJzZUNhdGVnb3JpZXMgPSBbXHJcbiAge1xyXG4gICAgY29sb3I6IGNvbG9ycy5ibHVlLFxyXG4gICAgaWNvbjogJ2ZhcyBmYS1wZW4tbmliJyxcclxuICAgIHRpdGxlOiAnV2ViIERlc2lnbicsXHJcbiAgICBzdWJ0aXRsZTogJ0Nob29zZSB0aG91c2FuZHMgb2Ygd2ViIGRlc2lnbiBvbmxpbmUgY291cnNlLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2xvcjogY29sb3JzLnB1cnBsZSxcclxuICAgIGljb246ICdmYXMgZmEtYm9vay1vcGVuJyxcclxuICAgIHRpdGxlOiAnQnVzaW5lc3MgQW5hbHl0aWNzJyxcclxuICAgIHN1YnRpdGxlOiAnQ2hvb3NlIHRob3VzYW5kcyBvZiBidXNpbmVzcyBhbmFseXRpY3Mgb25saW5lIGNvdXJzZS4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29sb3I6IGNvbG9ycy5hbWJlcixcclxuICAgIGljb246ICdmYXMgZmEtY2FtZXJhLXJldHJvJyxcclxuICAgIHRpdGxlOiAnUGhvdG9ncmFwaHknLFxyXG4gICAgc3VidGl0bGU6ICdDaG9vc2UgdGhvdXNhbmRzIG9mIHBob3RvZ3JhcGh5IG9ubGluZSBjb3Vyc2UuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGNvbG9yOiBjb2xvcnMuaW5kaWdvLFxyXG4gICAgaWNvbjogJ2ZhcyBmYS12aWRlbycsXHJcbiAgICB0aXRsZTogJ1ZpZGVvIENyZWF0aW5nJyxcclxuICAgIHN1YnRpdGxlOiAnQ2hvb3NlIHRob3VzYW5kcyBvZiB2aWRlbyBjcmVhdGluZyBvbmxpbmUgY291cnNlLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2xvcjogY29sb3JzLnBpbmssXHJcbiAgICBpY29uOiAnZmFzIGZhLWhlYXJ0YmVhdCcsXHJcbiAgICB0aXRsZTogJ0hlYWx0aCAmIEZpdG5lc3MnLFxyXG4gICAgc3VidGl0bGU6ICdDaG9vc2UgdGhvdXNhbmRzIG9mIGhlYWx0aCAmIGZpdG5lc3Mgb25saW5lIGNvdXJzZS4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29sb3I6IGNvbG9ycy5ncmVlbixcclxuICAgIGljb246ICdmYXMgZmEtYnVsbGhvcm4nLFxyXG4gICAgdGl0bGU6ICdNYXJrZXRpbmcnLFxyXG4gICAgc3VidGl0bGU6ICdDaG9vc2UgdGhvdXNhbmRzIG9mIG1hcmtldGluZyBvbmxpbmUgY291cnNlLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2xvcjogY29sb3JzLmRlZXBPcmFuZ2UsXHJcbiAgICBpY29uOiAnZmFzIGZhLWZ1bm5lbC1kb2xsYXInLFxyXG4gICAgdGl0bGU6ICdGaW5hbmNlcyAmIFNhbGVzJyxcclxuICAgIHN1YnRpdGxlOiAnQ2hvb3NlIHRob3VzYW5kcyBvZiBmaW5hY2VzICYgc2FsZXMgb25saW5lIGNvdXJzZS4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29sb3I6IGNvbG9ycy5yZWQsXHJcbiAgICBpY29uOiAnZmFzIGZhLXBhaW50LWJydXNoJyxcclxuICAgIHRpdGxlOiAnR3JhcGhpYyBEZXNpZ24nLFxyXG4gICAgc3VidGl0bGU6ICdDaG9vc2UgdGhvdXNhbmRzIG9mIGdyYXBoaWMgZGVzaWduIG9ubGluZSBjb3Vyc2UuJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvcHVsYXJDb3Vyc2VzID0gW1xyXG4gIHtcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9jb3dvcmtpbmcvcGxhY2UxLmpwZycsXHJcbiAgICAgIHNyY1NldDogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9jb3dvcmtpbmcvcGxhY2UxQDJ4LmpwZyAyeCcsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6ICdVWCAmIFdlYiBEZXNpZ24nLFxyXG4gICAgYWRkcmVzczogJ01pY2hhZWwgQ29yc2UnLFxyXG4gICAgcHJpY2U6ICckNTkgLyBtb250aCcsXHJcbiAgICByZXZpZXdzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBhdXRob3JQaG90bzoge1xyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS92ZXJvbmljYS1hZGFtcy5qcGcnLFxyXG4gICAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS92ZXJvbmljYS1hZGFtc0AyeC5qcGcgMngnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXV0aG9yTmFtZTogJ1Zlcm9uaWNhIEFkYW1zJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGF1dGhvclBob3RvOiB7XHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL2FrYWNoaS1sdWNjaW5pLmpwZycsXHJcbiAgICAgICAgICBzcmNTZXQ6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL2FrYWNoaS1sdWNjaW5pQDJ4LmpwZyAyeCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRob3JOYW1lOiAnQWthY2hpIEx1Y2NpbmknLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYXV0aG9yUGhvdG86IHtcclxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9wZW9wbGUvamFjay1zbWl0aC5qcGcnLFxyXG4gICAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS9qYWNrLXNtaXRoQDJ4LmpwZyAyeCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRob3JOYW1lOiAnSmFjayBTbWl0aCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhdXRob3JQaG90bzoge1xyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS9rYXRlLXNlZ2Vsc29uLmpwZycsXHJcbiAgICAgICAgICBzcmNTZXQ6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL2thdGUtc2VnZWxzb25AMnguanBnIDJ4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dGhvck5hbWU6ICdLYXRlIFNlZ2Vsc29uJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGF1dGhvclBob3RvOiB7XHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL2FsZXgtam9obnNvbi5qcGcnLFxyXG4gICAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS9hbGV4LWpvaG5zb25AMnguanBnIDJ4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dGhvck5hbWU6ICdBbGV4IEpvaG5zb24nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYXV0aG9yUGhvdG86IHtcclxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9wZW9wbGUvdmFsZXJpYS1rb2dhbi5qcGcnLFxyXG4gICAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS92YWxlcmlhLWtvZ2FuQDJ4LmpwZyAyeCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRob3JOYW1lOiAnVmFsZXJpYSBLb2dhbicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgc2NvcmU6ICc1LjAnLFxyXG4gICAgcmV2aWV3Q291bnQ6IDI4LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL2Nvd29ya2luZy9wbGFjZTIuanBnJyxcclxuICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL2Nvd29ya2luZy9wbGFjZTJAMnguanBnIDJ4JyxcclxuICAgIH0sXHJcbiAgICB0aXRsZTogJ1ByaW5jaXBsZXMgb2YgU29mdHdhcmUgRW5naW5lZXJpbmcnLFxyXG4gICAgYWRkcmVzczogJ0pob24gU21pdGgnLFxyXG4gICAgcHJpY2U6ICckNjkgLyBtb250aCcsXHJcbiAgICByZXZpZXdzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBhdXRob3JQaG90bzoge1xyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS92ZXJvbmljYS1hZGFtcy5qcGcnLFxyXG4gICAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS92ZXJvbmljYS1hZGFtc0AyeC5qcGcgMngnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXV0aG9yTmFtZTogJ1Zlcm9uaWNhIEFkYW1zJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGF1dGhvclBob3RvOiB7XHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL2FrYWNoaS1sdWNjaW5pLmpwZycsXHJcbiAgICAgICAgICBzcmNTZXQ6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL2FrYWNoaS1sdWNjaW5pQDJ4LmpwZyAyeCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRob3JOYW1lOiAnQWthY2hpIEx1Y2NpbmknLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYXV0aG9yUGhvdG86IHtcclxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9wZW9wbGUvamFjay1zbWl0aC5qcGcnLFxyXG4gICAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS9qYWNrLXNtaXRoQDJ4LmpwZyAyeCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRob3JOYW1lOiAnSmFjayBTbWl0aCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhdXRob3JQaG90bzoge1xyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS9rYXRlLXNlZ2Vsc29uLmpwZycsXHJcbiAgICAgICAgICBzcmNTZXQ6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL2thdGUtc2VnZWxzb25AMnguanBnIDJ4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dGhvck5hbWU6ICdLYXRlIFNlZ2Vsc29uJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGF1dGhvclBob3RvOiB7XHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL2FsZXgtam9obnNvbi5qcGcnLFxyXG4gICAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS9hbGV4LWpvaG5zb25AMnguanBnIDJ4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dGhvck5hbWU6ICdBbGV4IEpvaG5zb24nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYXV0aG9yUGhvdG86IHtcclxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9wZW9wbGUvdmFsZXJpYS1rb2dhbi5qcGcnLFxyXG4gICAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS92YWxlcmlhLWtvZ2FuQDJ4LmpwZyAyeCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRob3JOYW1lOiAnVmFsZXJpYSBLb2dhbicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgc2NvcmU6ICc0LjknLFxyXG4gICAgcmV2aWV3Q291bnQ6IDM4LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL2Nvd29ya2luZy9wbGFjZTMuanBnJyxcclxuICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL2Nvd29ya2luZy9wbGFjZTNAMnguanBnIDJ4JyxcclxuICAgIH0sXHJcbiAgICB0aXRsZTogJ0dyYXBoaWMgRGVzaWduIGZvciBCZWdpbm5lcnMnLFxyXG4gICAgYWRkcmVzczogJ05pY29sIEFkYW1zJyxcclxuICAgIHByaWNlOiAnJDQ5IC8gbW9udGgnLFxyXG4gICAgcmV2aWV3czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYXV0aG9yUGhvdG86IHtcclxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9wZW9wbGUvdmVyb25pY2EtYWRhbXMuanBnJyxcclxuICAgICAgICAgIHNyY1NldDogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9wZW9wbGUvdmVyb25pY2EtYWRhbXNAMnguanBnIDJ4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dGhvck5hbWU6ICdWZXJvbmljYSBBZGFtcycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhdXRob3JQaG90bzoge1xyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS9ha2FjaGktbHVjY2luaS5qcGcnLFxyXG4gICAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS9ha2FjaGktbHVjY2luaUAyeC5qcGcgMngnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXV0aG9yTmFtZTogJ0FrYWNoaSBMdWNjaW5pJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGF1dGhvclBob3RvOiB7XHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL2phY2stc21pdGguanBnJyxcclxuICAgICAgICAgIHNyY1NldDogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9wZW9wbGUvamFjay1zbWl0aEAyeC5qcGcgMngnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXV0aG9yTmFtZTogJ0phY2sgU21pdGgnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYXV0aG9yUGhvdG86IHtcclxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9wZW9wbGUva2F0ZS1zZWdlbHNvbi5qcGcnLFxyXG4gICAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS9rYXRlLXNlZ2Vsc29uQDJ4LmpwZyAyeCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRob3JOYW1lOiAnS2F0ZSBTZWdlbHNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhdXRob3JQaG90bzoge1xyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS9hbGV4LWpvaG5zb24uanBnJyxcclxuICAgICAgICAgIHNyY1NldDogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9wZW9wbGUvYWxleC1qb2huc29uQDJ4LmpwZyAyeCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRob3JOYW1lOiAnQWxleCBKb2huc29uJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGF1dGhvclBob3RvOiB7XHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL3ZhbGVyaWEta29nYW4uanBnJyxcclxuICAgICAgICAgIHNyY1NldDogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9wZW9wbGUvdmFsZXJpYS1rb2dhbkAyeC5qcGcgMngnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXV0aG9yTmFtZTogJ1ZhbGVyaWEgS29nYW4nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHNjb3JlOiAnNS4wJyxcclxuICAgIHJldmlld0NvdW50OiAxOCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9leHBvLWdhbGxlcnkvZ2FsbGVyeTEuanBnJyxcclxuICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL2V4cG8tZ2FsbGVyeS9nYWxsZXJ5MUAyeC5qcGcgMngnLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiAnTWFya2V0aW5nIFZTIFNhbGVzJyxcclxuICAgIGFkZHJlc3M6ICdKb3NodWEgS2FyYW1ha2knLFxyXG4gICAgcHJpY2U6ICckNTkgLyBtb250aCcsXHJcbiAgICByZXZpZXdzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBhdXRob3JQaG90bzoge1xyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS92ZXJvbmljYS1hZGFtcy5qcGcnLFxyXG4gICAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS92ZXJvbmljYS1hZGFtc0AyeC5qcGcgMngnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXV0aG9yTmFtZTogJ1Zlcm9uaWNhIEFkYW1zJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGF1dGhvclBob3RvOiB7XHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL2FrYWNoaS1sdWNjaW5pLmpwZycsXHJcbiAgICAgICAgICBzcmNTZXQ6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL2FrYWNoaS1sdWNjaW5pQDJ4LmpwZyAyeCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRob3JOYW1lOiAnQWthY2hpIEx1Y2NpbmknLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYXV0aG9yUGhvdG86IHtcclxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9wZW9wbGUvamFjay1zbWl0aC5qcGcnLFxyXG4gICAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS9qYWNrLXNtaXRoQDJ4LmpwZyAyeCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRob3JOYW1lOiAnSmFjayBTbWl0aCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhdXRob3JQaG90bzoge1xyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS9rYXRlLXNlZ2Vsc29uLmpwZycsXHJcbiAgICAgICAgICBzcmNTZXQ6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL2thdGUtc2VnZWxzb25AMnguanBnIDJ4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dGhvck5hbWU6ICdLYXRlIFNlZ2Vsc29uJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGF1dGhvclBob3RvOiB7XHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL2FsZXgtam9obnNvbi5qcGcnLFxyXG4gICAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS9hbGV4LWpvaG5zb25AMnguanBnIDJ4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dGhvck5hbWU6ICdBbGV4IEpvaG5zb24nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYXV0aG9yUGhvdG86IHtcclxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9wZW9wbGUvdmFsZXJpYS1rb2dhbi5qcGcnLFxyXG4gICAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvcGhvdG9zL3Blb3BsZS92YWxlcmlhLWtvZ2FuQDJ4LmpwZyAyeCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRob3JOYW1lOiAnVmFsZXJpYSBLb2dhbicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgc2NvcmU6ICc0LjgnLFxyXG4gICAgcmV2aWV3Q291bnQ6IDI0LFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcmV2aWV3cyA9IFtcclxuICB7XHJcbiAgICBhdXRob3JQaG90bzoge1xyXG4gICAgICBzcmM6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL3Zlcm9uaWNhLWFkYW1zLmpwZycsXHJcbiAgICAgIHNyY1NldDogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9wZW9wbGUvdmVyb25pY2EtYWRhbXNAMnguanBnIDJ4JyxcclxuICAgIH0sXHJcbiAgICBhdXRob3JOYW1lOiAnVmVyb25pY2EgQWRhbXMnLFxyXG4gICAgYXV0aG9yT2NjdXBhdGlvbjogJ0dyb3d0aCBNYXJrZXRlciwgQ3JlYWx5dGljcycsXHJcbiAgICBmZWVkYmFjazpcclxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBhdXRob3JQaG90bzoge1xyXG4gICAgICBzcmM6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL2FrYWNoaS1sdWNjaW5pLmpwZycsXHJcbiAgICAgIHNyY1NldDogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9wZW9wbGUvYWthY2hpLWx1Y2NpbmlAMnguanBnIDJ4JyxcclxuICAgIH0sXHJcbiAgICBhdXRob3JOYW1lOiAnQWthY2hpIEx1Y2NpbmknLFxyXG4gICAgYXV0aG9yT2NjdXBhdGlvbjogJ0xlYWQgR2VuZXJhdGlvbiwgQWx0ZXJuYXRpdmUgQ2FwaXRhbCcsXHJcbiAgICBmZWVkYmFjazpcclxuICAgICAgJ0V4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGF1dGhvclBob3RvOiB7XHJcbiAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L3Bob3Rvcy9wZW9wbGUvamFjay1zbWl0aC5qcGcnLFxyXG4gICAgICBzcmNTZXQ6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9waG90b3MvcGVvcGxlL2phY2stc21pdGhAMnguanBnIDJ4JyxcclxuICAgIH0sXHJcbiAgICBhdXRob3JOYW1lOiAnSmFjayBTbWl0aCcsXHJcbiAgICBhdXRob3JPY2N1cGF0aW9uOiAnSGVhZCBvZiBPcGVyYXRpb25zLCBQYXJrZmllbGQgQ29tbWVyY2UnLFxyXG4gICAgZmVlZGJhY2s6XHJcbiAgICAgICdVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LicsXHJcbiAgfSxcclxuXTtcclxuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL01hcmtldGluZyciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ZhYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL05vU3NyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1pvb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3B1cnBsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMveWVsbG93XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvdXNlVGhlbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd1JpZ2h0QWx0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93VXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xzeFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqYXJhbGxheFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsZWFmbGV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY291bnR1cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1odG1sLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxlYWZsZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHlwZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dpcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZhbGlkYXRlLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=