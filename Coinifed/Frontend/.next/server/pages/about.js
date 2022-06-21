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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var views_About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! views/About */ "./src/views/About/index.js");
/* harmony import */ var helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helper */ "./src/helper/index.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config */ "./src/config/index.js");
/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */



async function getStaticProps() {
  // For Get CMS Data
  const responseCMS = await new helper__WEBPACK_IMPORTED_MODULE_1__["ApiHelper"]().FetchFromServer(config__WEBPACK_IMPORTED_MODULE_2__["ApiRoutes"].FRONT_PAGE_DATA.service, config__WEBPACK_IMPORTED_MODULE_2__["ApiRoutes"].FRONT_PAGE_DATA.url, config__WEBPACK_IMPORTED_MODULE_2__["ApiRoutes"].FRONT_PAGE_DATA.method, config__WEBPACK_IMPORTED_MODULE_2__["ApiRoutes"].FRONT_PAGE_DATA.authenticate, undefined, undefined, undefined);
  let cmsData = [];

  if (responseCMS && !responseCMS.isError) {
    cmsData = responseCMS.data.data;
  } // For Get Team Data


  const responseTeam = await new helper__WEBPACK_IMPORTED_MODULE_1__["ApiHelper"]().FetchFromServer(config__WEBPACK_IMPORTED_MODULE_2__["ApiRoutes"].GET_TEAM_DATA.service, config__WEBPACK_IMPORTED_MODULE_2__["ApiRoutes"].GET_TEAM_DATA.url, config__WEBPACK_IMPORTED_MODULE_2__["ApiRoutes"].GET_TEAM_DATA.method, config__WEBPACK_IMPORTED_MODULE_2__["ApiRoutes"].GET_TEAM_DATA.authenticate, undefined, undefined, undefined);
  let teamList = "";

  if (responseTeam && !responseTeam.isError) {
    teamList = responseTeam.data.data;
  }

  return {
    props: {
      cmsData,
      teamList
    },
    revalidate: 10
  };
}
/* harmony default export */ __webpack_exports__["default"] = (views_About__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/assets/images/about/img_about_banner.png":
/*!******************************************************!*\
  !*** ./src/assets/images/about/img_about_banner.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img_about_banner-78fcf22188f11c44c15b6724b77f21a7.png";

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

/***/ "./src/views/About/About.js":
/*!**********************************!*\
  !*** ./src/views/About/About.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/views/About/components/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\About\\About.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_0___default()(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  sectionNoPaddingTop: {
    paddingTop: 0
  },
  sectionPartners: {
    boxShadow: '0 5px 20px 0 rgba(90, 202, 157, 0.05)',
    '& .section-alternate__content': {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5)
    }
  }
}));

const About = ({
  cmsData,
  teamList
}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Hero"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_1__["Section"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Story"], {
    cmsData: cmsData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_1__["Section"], {
    className: classes.sectionNoPaddingTop,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Team"], {
    cmsData: cmsData,
    teamList: teamList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/views/About/components/Contact/Contact.js":
/*!*******************************************************!*\
  !*** ./src/views/About/components/Contact/Contact.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "@material-ui/core/ListItemAvatar");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\About\\components\\Contact\\Contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2___default()(() => ({
  map: {
    zIndex: 9
  },
  icon: {
    background: 'transparent',
    borderRadius: 0
  }
}));

const Contact = props => {
  const {
    data,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["data", "className"]);

  const classes = useStyles();
  return __jsx("div", _extends({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_9__["HeroShaped"], {
    leftSide: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_8__["SectionHeader"], {
      title: "Contact us",
      subtitle: "Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.",
      subtitleProps: {
        variant: 'body1',
        color: 'textPrimary'
      },
      "data-aos": "fade-up",
      align: "left",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
      disablePadding: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
      disableGutters: true,
      "data-aos": "fade-up",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7___default.a, {
      src: "https://assets.maccarianagency.com/the-front/illustrations/contact-icon-phone.png",
      srcSet: "https://assets.maccarianagency.com/the-front/illustrations/contact-icon-phone@2x.png 2x",
      className: classes.icon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 19
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
      primary: "Phone",
      secondary: "+1 866-298-9696",
      primaryTypographyProps: {
        variant: 'subtitle1',
        color: 'textSecondary'
      },
      secondaryTypographyProps: {
        variant: 'subtitle1',
        color: 'textPrimary'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
      disableGutters: true,
      "data-aos": "fade-up",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7___default.a, {
      src: "https://assets.maccarianagency.com/the-front/illustrations/contact-icon-pin.png",
      srcSet: "https://assets.maccarianagency.com/the-front/illustrations/contact-icon-pin@2x.png 2x",
      className: classes.icon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 19
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
      primary: "Head Office",
      secondary: "410 Mercantile Court\r Wheeling, IL 60090",
      primaryTypographyProps: {
        variant: 'subtitle1',
        color: 'textSecondary'
      },
      secondaryTypographyProps: {
        variant: 'subtitle1',
        color: 'textPrimary'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    })))),
    rightSide: __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_9__["Map"], {
      center: [45.464211, 9.011383],
      pins: data,
      className: classes.map,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }));
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/views/About/components/Contact/index.js":
/*!*****************************************************!*\
  !*** ./src/views/About/components/Contact/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact */ "./src/views/About/components/Contact/Contact.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Contact__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/About/components/Gallery/Gallery.js":
/*!*******************************************************!*\
  !*** ./src/views/About/components/Gallery/Gallery.js ***!
  \*******************************************************/
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
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/useTheme */ "@material-ui/core/styles/useTheme");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/GridList */ "@material-ui/core/GridList");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "@material-ui/core/GridListTile");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\About\\components\\Gallery\\Gallery.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5___default()(theme => ({
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(1)
  }
}));

const Gallery = props => {
  const {
    data,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["data", "className"]);

  const classes = useStyles();
  const theme = _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_6___default()();
  const isMd = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  return __jsx("div", _extends({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_3__["SectionHeader"], {
    title: "Checkout our gallery",
    subtitle: "After 3 days all of your offers will arrive and you will have another 7 days to select your new company.",
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_7___default.a, {
    cellHeight: isMd ? 360 : 260,
    cols: 4,
    spacing: isMd ? 24 : 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, data.map((item, index) => __jsx(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: index,
    cols: isMd ? item.cols : 4 || false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_2__["Image"], _extends({}, item.image, {
    alt: item.location,
    className: classes.image,
    lazyProps: {
      width: '100%',
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }))))));
};

Gallery.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./src/views/About/components/Gallery/index.js":
/*!*****************************************************!*\
  !*** ./src/views/About/components/Gallery/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery */ "./src/views/About/components/Gallery/Gallery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Gallery__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/About/components/Hero/Hero.js":
/*!*************************************************!*\
  !*** ./src/views/About/components/Hero/Hero.js ***!
  \*************************************************/
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
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var _assets_images_about_img_about_banner_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/images/about/img_about_banner.png */ "./src/assets/images/about/img_about_banner.png");
/* harmony import */ var _assets_images_about_img_about_banner_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_about_img_about_banner_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\About\\components\\Hero\\Hero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default()(theme => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden"
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
  section: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    paddingTop: 0,
    paddingBottom: 0
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
      lineNumber: 44,
      columnNumber: 5
    }
  }), __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: _assets_images_about_img_about_banner_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    srcSet: _assets_images_about_img_about_banner_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "About",
    className: classes.image,
    lazyProps: {
      width: "100%",
      height: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_6__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_5__["SectionHeader"], {
    title: "About Us",
    subtitle: "Our mission is to educate the world about blockchain and crypto. And we\u2019re having fun doing it!",
    align: "left",
    "data-aos": "fade-up",
    disableGutter: true,
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
      lineNumber: 56,
      columnNumber: 9
    }
  })));
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/views/About/components/Hero/index.js":
/*!**************************************************!*\
  !*** ./src/views/About/components/Hero/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero */ "./src/views/About/components/Hero/Hero.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Hero__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/About/components/Partners/Partners.js":
/*!*********************************************************!*\
  !*** ./src/views/About/components/Partners/Partners.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/useTheme */ "@material-ui/core/styles/useTheme");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\About\\components\\Partners\\Partners.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2___default()(theme => ({
  promoLogo: {
    maxWidth: 120
  },
  title: {
    fontWeight: 'bold'
  }
}));

const Partners = props => {
  const {
    data,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["data", "className"]);

  const classes = useStyles();
  const theme = _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_3___default()();
  const isMd = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default()(theme.breakpoints.up('md'), {
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
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_7__["SectionHeader"], {
    title: "Trusted by Millions of People",
    subtitle: "We are registered as a distributor with AMFI, as an investment advisor with SEBI and platform partners with BSE.",
    fadeUp: true,
    disableGutter: true,
    align: isMd ? 'left' : 'center',
    titleProps: {
      className: classes.title
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    container: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, data.map((partner, index) => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    container: true,
    justifyContent: "center",
    alignItems: "center",
    xs: 4,
    key: index,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: partner.logo,
    alt: partner.name,
    className: classes.promoLogo,
    lazy: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }))))));
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Partners);

/***/ }),

/***/ "./src/views/About/components/Partners/index.js":
/*!******************************************************!*\
  !*** ./src/views/About/components/Partners/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Partners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Partners */ "./src/views/About/components/Partners/Partners.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Partners__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/About/components/Story/Story.js":
/*!***************************************************!*\
  !*** ./src/views/About/components/Story/Story.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/useTheme */ "@material-ui/core/styles/useTheme");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../config/appConfig */ "./src/config/appConfig.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\About\\components\\Story\\Story.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1___default()(theme => ({
  image: {
    maxWidth: 420
  },
  spCenter: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      justifyContent: "center"
    },
    "& h4": {
      textAlign: "center",
      marginTop: 10
    },
    "& p": {
      textAlign: "center",
      fontSize: 18
    }
  }
}));

const Story = props => {
  const {
    className,
    cmsData
  } = props,
        rest = _objectWithoutProperties(props, ["className", "cmsData"]);

  const classes = useStyles();
  const theme = _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_2___default()();
  const isMd = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()(theme.breakpoints.up("md"), {
    defaultMatches: true
  }); // For Get Template Data

  const {
    0: getTemplateData,
    1: setGetTemplateData
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    if (cmsData && cmsData.length) {
      let getData = cmsData.filter(e => e.titleSlug === "aboutUs");
      setGetTemplateData(...getData);
    }
  }, [cmsData]);
  return __jsx("div", _extends({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    container: true,
    justifyContent: "space-between",
    spacing: isMd ? 4 : 2,
    direction: isMd ? "row" : "column-reverse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    item: true,
    container: true,
    alignItems: "center",
    justifyContent: "flex-start",
    xs: 12,
    md: 7,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_5__["SectionHeader"], {
    title: getTemplateData && getTemplateData.blockTitle1.length ? getTemplateData.blockTitle1 : "Our story",
    subtitle: getTemplateData && getTemplateData.block1.length ? react_html_parser__WEBPACK_IMPORTED_MODULE_8___default()(getTemplateData.block1) : null,
    align: "left",
    disableGutter: true,
    subtitleProps: {
      color: "textPrimary",
      variant: "body1"
    },
    className: classes.spCenter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }))), getTemplateData && getTemplateData.blockImage1.length ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    item: true,
    container: true,
    justifyContent: isMd ? "flex-end" : "flex-start",
    alignItems: "center",
    xs: 12,
    md: 5,
    "data-aos": "fade-up",
    className: classes.spCenter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_9__["default"].IMAGE_URL}/${getTemplateData.blockImage1}`,
    srcSet: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_9__["default"].IMAGE_URL}/${getTemplateData.blockImage1}`,
    alt: "Our story",
    className: classes.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  })) : null));
};

Story.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Story);

/***/ }),

/***/ "./src/views/About/components/Story/index.js":
/*!***************************************************!*\
  !*** ./src/views/About/components/Story/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Story__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Story */ "./src/views/About/components/Story/Story.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Story__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/About/components/Team/Team.js":
/*!*************************************************!*\
  !*** ./src/views/About/components/Team/Team.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "@material-ui/core/ListItemAvatar");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Popover */ "@material-ui/core/Popover");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles/useTheme */ "@material-ui/core/styles/useTheme");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../config/appConfig */ "./src/config/appConfig.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\About\\components\\Team\\Team.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


















const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7___default()(theme => ({
  cardBase: {
    boxShadow: "none",
    background: theme.palette.alternate.main,
    borderRadius: theme.spacing(1),
    "& .card-base__content": {
      padding: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(3)
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(1)
      }
    },
    "& a": {
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.7rem"
      }
    }
  },
  avatar: {
    width: 110,
    objectFit: "cover",
    objectPosition: "center top",
    height: 110,
    border: `4px solid ${theme.palette.alternate.dark}`,
    borderRadius: "100%",
    boxShadow: "0 5px 10px 0 rgba(0, 0, 0, 0.1)",
    [theme.breakpoints.down("md")]: {
      width: 80,
      height: 80
    }
  },
  listItem: {
    padding: 0,
    marginBottom: 10,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  listItemAvatar: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(1.5)
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0)
    }
  },
  listItemText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: 0,
    height: "100%"
  },
  title: {
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem"
    }
  },
  popover_div: {
    maxWidth: "400px",
    textAlign: "justify",
    padding: "10px"
  },
  customised_popover: {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
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
  smallCommonBtn: {
    minWidth: 132,
    padding: "8px 10px",
    fontSize: 15
  }
}));

const Team = props => {
  const {
    className,
    cmsData,
    teamList
  } = props,
        rest = _objectWithoutProperties(props, ["className", "cmsData", "teamList"]);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_14___default.a.useState(null);
  const theme = _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_8___default()();
  const isMd = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9___default()(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  const [authorDetail, setauthorDetails] = react__WEBPACK_IMPORTED_MODULE_14___default.a.useState([]);

  const handleClick = (event, id) => {
    setAnchorEl(null);
    let required_id = event.currentTarget.id;
    let newData = teamList.filter((newArray, index) => index == required_id);
    setauthorDetails(newData);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? `simple-popover` : undefined; // For Get Template Data

  const {
    0: getTemplateData,
    1: setGetTemplateData
  } = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_14__["useEffect"])(() => {
    if (cmsData && cmsData.length) {
      let getData = cmsData.filter(e => e.titleSlug === "aboutUs");
      setGetTemplateData(...getData);
    }
  }, [cmsData]);
  return __jsx("div", _extends({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_11__["SectionHeader"], {
    title: getTemplateData && getTemplateData.blockTitle2.length ? getTemplateData.blockTitle2 : "Meet our team",
    subtitle: getTemplateData && getTemplateData.block2.length ? react_html_parser__WEBPACK_IMPORTED_MODULE_15___default()(getTemplateData.block2) : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: isMd ? 2 : 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }, teamList && teamList.length ? teamList.map((item, index) => item.isActive ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 6,
    sm: 6,
    md: 4,
    key: index,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 15
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_12__["CardBase"], {
    className: classes.cardBase,
    liftUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    disableGutters: true,
    className: classes.listItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItemAvatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_16__["default"].IMAGE_URL}/${item.teamMemberImage}`,
    srcSet: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_16__["default"].IMAGE_URL}/${item.teamMemberImage}`,
    className: classes.avatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 23
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.listItemText,
    primary: `${item.firstName} ${item.lastName}`,
    secondary: item.designation,
    primaryTypographyProps: {
      className: classes.title,
      variant: "h6",
      align: isMd ? "left" : "center"
    },
    secondaryTypographyProps: {
      color: "textPrimary",
      align: isMd ? "left" : "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 23
    }
  }))), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: index,
    href: "#outlined-buttons",
    "aria-describedby": id,
    variant: "contained",
    color: "primary",
    onClick: handleClick,
    className: clsx__WEBPACK_IMPORTED_MODULE_10___default()(classes.commonBtn, classes.smallCommonBtn),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 19
    }
  }, "More Details")), authorDetail.map(data => {
    return __jsx(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_6___default.a, {
      id: id,
      open: open,
      anchorEl: anchorEl,
      onClose: handleClose,
      elevation: 2,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      className: classes.customised_popover,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: classes.popover_div,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 23
      }
    }, react_html_parser__WEBPACK_IMPORTED_MODULE_15___default()(data.aboutUs)));
  })) : null) : null));
};

Team.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ }),

/***/ "./src/views/About/components/Team/index.js":
/*!**************************************************!*\
  !*** ./src/views/About/components/Team/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Team */ "./src/views/About/components/Team/Team.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Team__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/About/components/WhoWeAre/WhoWeAre.js":
/*!*********************************************************!*\
  !*** ./src/views/About/components/WhoWeAre/WhoWeAre.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/useTheme */ "@material-ui/core/styles/useTheme");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\About\\components\\WhoWeAre\\WhoWeAre.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const WhoWeAre = props => {
  const {
    className
  } = props,
        rest = _objectWithoutProperties(props, ["className"]);

  const theme = _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_3___default()();
  const isMd = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default()(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  return __jsx("div", _extends({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_5__["SectionHeader"], {
    title: "Who are we?",
    subtitle: "Our sign up is dead simple. We only require your basic company information and what type of data storage you want. Our sign up is dead simple. We only require your basic company information and what type of data storage you want.",
    disableGutter: true,
    align: "left",
    subtitleProps: {
      variant: 'body1',
      color: 'textPrimary'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_5__["SectionHeader"], {
    title: "What\u2019s up with the name?",
    subtitle: "We support bulk uploading via SQL, integrations with most data storage products, or you can use our API. Simply select where you'd like to transfer your data and we'll being the process of migrating it instantly.",
    disableGutter: true,
    align: "left",
    subtitleProps: {
      variant: 'body1',
      color: 'textPrimary'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }))));
};

WhoWeAre.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (WhoWeAre);

/***/ }),

/***/ "./src/views/About/components/WhoWeAre/index.js":
/*!******************************************************!*\
  !*** ./src/views/About/components/WhoWeAre/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WhoWeAre__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WhoWeAre */ "./src/views/About/components/WhoWeAre/WhoWeAre.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _WhoWeAre__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/About/components/index.js":
/*!*********************************************!*\
  !*** ./src/views/About/components/index.js ***!
  \*********************************************/
/*! exports provided: Contact, Gallery, Hero, Partners, Story, Team, WhoWeAre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact */ "./src/views/About/components/Contact/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return _Contact__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery */ "./src/views/About/components/Gallery/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return _Gallery__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hero */ "./src/views/About/components/Hero/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _Hero__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Partners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Partners */ "./src/views/About/components/Partners/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Partners", function() { return _Partners__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Story__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Story */ "./src/views/About/components/Story/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Story", function() { return _Story__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Team */ "./src/views/About/components/Team/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return _Team__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _WhoWeAre__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WhoWeAre */ "./src/views/About/components/WhoWeAre/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhoWeAre", function() { return _WhoWeAre__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./src/views/About/index.js":
/*!**********************************!*\
  !*** ./src/views/About/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About */ "./src/views/About/About.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _About__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

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

/***/ "@material-ui/core/GridList":
/*!*********************************************!*\
  !*** external "@material-ui/core/GridList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridList");

/***/ }),

/***/ "@material-ui/core/GridListTile":
/*!*************************************************!*\
  !*** external "@material-ui/core/GridListTile" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTile");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemAvatar":
/*!***************************************************!*\
  !*** external "@material-ui/core/ListItemAvatar" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/NoSsr":
/*!******************************************!*\
  !*** external "@material-ui/core/NoSsr" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/NoSsr");

/***/ }),

/***/ "@material-ui/core/Popover":
/*!********************************************!*\
  !*** external "@material-ui/core/Popover" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvYWJvdXQvaW1nX2Fib3V0X2Jhbm5lci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGVhZmxldC1hc3NldHMvbWFya2VyLWljb24tMngucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2xlYWZsZXQtYXNzZXRzL21hcmtlci1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9sZWFmbGV0LWFzc2V0cy9tYXJrZXItc2hhZG93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9EYXJrTW9kZVRvZ2dsZXIvRGFya01vZGVUb2dnbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL0RhcmtNb2RlVG9nZ2xlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JY29uL0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvSWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JY29uVGV4dC9JY29uVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JY29uVGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JbWFnZS9JbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9MZWFybk1vcmVMaW5rL0xlYXJuTW9yZUxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvTGVhcm5Nb3JlTGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9TY3JvbGxUb3AvU2Nyb2xsVG9wLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL1Njcm9sbFRvcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvQ291bnRVcE51bWJlci9Db3VudFVwTnVtYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Db3VudFVwTnVtYmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9EZXNjcmlwdGlvbkN0YS9EZXNjcmlwdGlvbkN0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvRGVzY3JpcHRpb25DdGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL0ljb25BbHRlcm5hdGUvSWNvbkFsdGVybmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvSWNvbkFsdGVybmF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvT3ZlcmxhcGVkSW1hZ2VzL092ZXJsYXBlZEltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvT3ZlcmxhcGVkSW1hZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9TZWN0aW9uSGVhZGVyL1NlY3Rpb25IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1NlY3Rpb25IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1N3aXBlckltYWdlL1N3aXBlckltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Td2lwZXJJbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU3dpcGVyTnVtYmVyL1N3aXBlck51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU3dpcGVyTnVtYmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9UeXBlZFRleHQvVHlwZWRUZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9UeXBlZFRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9BY2NvcmRpb24vQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9BY2NvcmRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRCYXNlL0NhcmRCYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkQmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZENhdGVnb3J5L0NhcmRDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZENhdGVnb3J5L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkQ2F0ZWdvcnlMaW5rL0NhcmRDYXRlZ29yeUxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRDYXRlZ29yeUxpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2IvQ2FyZEpvYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYkNvbXBhbnkvQ2FyZEpvYkNvbXBhbnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2JDb21wYW55L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkSm9iTWluaW1hbC9DYXJkSm9iTWluaW1hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYk1pbmltYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2JUYWcvQ2FyZEpvYlRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYlRhZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFByaWNpbmdTdGFuZGFyZC9DYXJkUHJpY2luZ1N0YW5kYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkUHJpY2luZ1N0YW5kYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkUHJvZHVjdC9DYXJkUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFByb2R1Y3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRQcm9tby9DYXJkUHJvbW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRQcm9tby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFJldmlldy9DYXJkUmV2aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkUmV2aWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9Db250YWN0Rm9ybS9Db250YWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ29udGFjdEZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0Rlc2NyaXB0aW9uTGlzdEljb24vRGVzY3JpcHRpb25MaXN0SWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvRGVzY3JpcHRpb25MaXN0SWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvSGVyb0JhY2tncm91bmQvSGVyb0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9CYWNrZ3JvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9IZXJvU2hhcGVkL0hlcm9TaGFwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9TaGFwZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9TaWRlSW1hZ2UvSGVyb1NpZGVJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvSGVyb1NpZGVJbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvSGVyb1NpbXBsZUJhY2tncm91bmQvSGVyb1NpbXBsZUJhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9TaW1wbGVCYWNrZ3JvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9NYXAvTWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9NYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL1BhcmFsbGF4L1BhcmFsbGF4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9QYXJhbGxheC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvU2VjdGlvbi9TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9TZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9TZWN0aW9uQWx0ZXJuYXRlL1NlY3Rpb25BbHRlcm5hdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL1NlY3Rpb25BbHRlcm5hdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvQXBpUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvYXBwQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9BcGlIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9FcnJvckhhbmRsZXJIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9TdWNjZXNzSGFuZGxlckhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9BYm91dC9BYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQWJvdXQvY29tcG9uZW50cy9Db250YWN0L0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0V4cG8vY29tcG9uZW50cy9Db250YWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9BYm91dC9jb21wb25lbnRzL0dhbGxlcnkvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvRXhwby9jb21wb25lbnRzL0dhbGxlcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0Fib3V0L2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9FeHBvL2NvbXBvbmVudHMvSGVyby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQWJvdXQvY29tcG9uZW50cy9QYXJ0bmVycy9QYXJ0bmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQWJvdXQvY29tcG9uZW50cy9QYXJ0bmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQWJvdXQvY29tcG9uZW50cy9TdG9yeS9TdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQWJvdXQvY29tcG9uZW50cy9TdG9yeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQWJvdXQvY29tcG9uZW50cy9UZWFtL1RlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0Fib3V0L2NvbXBvbmVudHMvVGVhbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQWJvdXQvY29tcG9uZW50cy9XaG9XZUFyZS9XaG9XZUFyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQWJvdXQvY29tcG9uZW50cy9XaG9XZUFyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQWJvdXQvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvRXhwby9jb21wb25lbnRzL0Fib3V0L2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ob1NzclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvWm9vbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3VzZVRoZW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dSaWdodEFsdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dVcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImphcmFsbGF4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibGVhZmxldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvdW50dXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1odG1sLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sZWFmbGV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdHlwZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3aXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZhbGlkYXRlLmpzXCIiXSwibmFtZXMiOlsiZ2V0U3RhdGljUHJvcHMiLCJyZXNwb25zZUNNUyIsIkFwaUhlbHBlciIsIkZldGNoRnJvbVNlcnZlciIsIkFwaVJvdXRlcyIsIkZST05UX1BBR0VfREFUQSIsInNlcnZpY2UiLCJ1cmwiLCJtZXRob2QiLCJhdXRoZW50aWNhdGUiLCJ1bmRlZmluZWQiLCJjbXNEYXRhIiwiaXNFcnJvciIsImRhdGEiLCJyZXNwb25zZVRlYW0iLCJHRVRfVEVBTV9EQVRBIiwidGVhbUxpc3QiLCJwcm9wcyIsInJldmFsaWRhdGUiLCJBYm91dCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwb3NpdGlvbiIsImJvcmRlciIsIndpZHRoIiwic3BhY2luZyIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwicGFsZXR0ZSIsImRpdmlkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJicmVha3BvaW50cyIsInVwIiwiYm9yZGVyRGFyayIsImNvbG9ycyIsImluZGlnbyIsIm1vZGVUb2dnbGVyIiwidG9wIiwibGVmdCIsInRleHQiLCJwcmltYXJ5IiwidHJhbnNpdGlvbiIsImN1cnNvciIsIm1vZGVUb2dnbGVyRGFyayIsInRyYW5zZm9ybSIsIm1vZGVUb2dnbGVySWNvbiIsImZpbGwiLCJzZWNvbmRhcnkiLCJtYWluIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIkRhcmtNb2RlVG9nZ2xlciIsInRoZW1lTW9kZSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJyZXN0IiwiY2xhc3NlcyIsImNsc3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiaXNSZXF1aXJlZCIsImV4dHJhU21hbGwiLCJmb250U2l6ZSIsInNtYWxsIiwibWVkaXVtIiwibGFyZ2UiLCJJY29uIiwiZm9udEljb25DbGFzcyIsInNpemUiLCJmb250SWNvbkNvbG9yIiwiY29sb3IiLCJkZWZhdWx0UHJvcHMiLCJvbmVPZiIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImFsaWduSXRlbXMiLCJ0aXRsZSIsIkljb25UZXh0IiwiaWNvblByb3BzIiwidHlwb2dyYXBoeVByb3BzIiwib2JqZWN0IiwiZEJsb2NrIiwiSW1hZ2UiLCJzcmMiLCJzcmNTZXQiLCJhbHQiLCJsYXp5IiwibGF6eVByb3BzIiwiYm9vbCIsInRleHREZWNvcmF0aW9uIiwiZm9udFdlaWdodCIsImljb24iLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsIkxlYXJuTW9yZUxpbmsiLCJjb21wb25lbnQiLCJ2YXJpYW50IiwiaHJlZiIsImNoaWxkcmVuIiwiYm90dG9tIiwicmlnaHQiLCJTY3JvbGxUb3AiLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsImRpc2FibGVIeXN0ZXJlc2lzIiwidGhyZXNob2xkIiwiaGFuZGxlQ2xpY2siLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiQ291bnRVcE51bWJlciIsInN0YXJ0IiwiZW5kIiwic3VmZml4IiwicHJlZml4IiwibGFiZWwiLCJ0ZXh0Q29sb3IiLCJsYWJlbENvbG9yIiwidmlzaWJpbGl0eVNlbnNvclByb3BzIiwid3JhcHBlclByb3BzIiwiY291bnRXcmFwcGVyUHJvcHMiLCJjb3VudE51bWJlclByb3BzIiwibGFiZWxQcm9wcyIsInZpZXdQb3J0RW50ZXJlZCIsInNldFZpZXdQb3J0RW50ZXJlZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRWaWV3UG9ydFZpc2liaWxpdHkiLCJpc1Zpc2libGUiLCJudW1iZXIiLCJEZXNjcmlwdGlvbkN0YSIsInN1YnRpdGxlIiwicHJpbWFyeUN0YSIsInNlY29uZGFyeUN0YSIsImFsaWduIiwidGl0bGVQcm9wcyIsInN1YnRpdGxlUHJvcHMiLCJidXR0b25Hcm91cFByb3BzIiwicHJpbWFyeUJ1dHRvbldyYXBwZXJQcm9wcyIsInNlY29uZGFyeUJ1dHRvbldyYXBwZXJQcm9wcyIsInVzZVRoZW1lIiwiaXNTbSIsInVzZU1lZGlhUXVlcnkiLCJkZWZhdWx0TWF0Y2hlcyIsImp1c3RpZnlHcmlkIiwibm9kZSIsImNpcmNsZSIsInNxdWFyZSIsIkljb25BbHRlcm5hdGUiLCJzaGFwZSIsInVzZUJhY2tncm91bmRTdHlsZXMiLCJiYWNrZ3JvdW5kQ2xhc3NlcyIsInJlZCIsInBpbmsiLCJwdXJwbGUiLCJkZWVwUHVycGxlIiwiYmx1ZSIsImxpZ2h0Qmx1ZSIsImN5YW4iLCJ0ZWFsIiwiZ3JlZW4iLCJsaWdodEdyZWVuIiwibGltZSIsInllbGxvdyIsImFtYmVyIiwib3JhbmdlIiwiZGVlcE9yYW5nZSIsImJyb3duIiwiZ3JleSIsImJsdWVHcmV5IiwiaW1hZ2VHcmlkIiwiYm94U2hhZG93IiwicGFwZXIiLCJtYXhXaWR0aCIsInZlcnRpY2FsQWxpZ24iLCJib3JkZXJTdHlsZSIsImltYWdlR3JpZEZpcnN0SXRlbSIsImltYWdlR3JpZExhc3RJdGVtIiwiZmxvYXQiLCJPdmVybGFwZWRJbWFnZXMiLCJpbWFnZTEiLCJpbWFnZTIiLCJpbWFnZTMiLCJzcmNzZXQiLCJtYXJnaW5Cb3R0b20iLCJkaXNhYmxlR3V0dGVyIiwiY3RhIiwiU2VjdGlvbkhlYWRlciIsInRpdGxlVmFyaWFudCIsInN1YnRpdGxlVmFyaWFudCIsInN1YnRpdGxlQ29sb3IiLCJvdmVybGluZSIsImZhZGVVcCIsImN0YUdyb3VwIiwidGl0bGVDbGFzc2VzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4Iiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsInpJbmRleCIsInN3aXBlclNsaWRlIiwic3dpcGVyTmF2IiwianVzdGlmeUNvbnRlbnQiLCJjYXJkU2hhZG93IiwiaW1hZ2UiLCJvYmplY3RGaXQiLCJTd2lwZXJJbWFnZSIsIml0ZW1zIiwibmF2aWdhdGlvbkJ1dHRvblN0eWxlIiwiaW1hZ2VDbGFzc05hbWUiLCJ1c2VFZmZlY3QiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInBhZGRpbmdCb3R0b20iLCJTd2lwZXJOdW1iZXIiLCJudW1iZXJQcm9wcyIsImlzTWQiLCJwYWdpbmF0aW9uIiwiZWwiLCJ0eXBlIiwiY2xpY2thYmxlIiwiYXV0b3BsYXkiLCJkZWxheSIsIlR5cGVkVGV4dCIsInR5cGVkUHJvcHMiLCJmbGV4RGlyZWN0aW9uIiwiZXhwYW5kT3BlbiIsImRhcmsiLCJsaXN0SXRlbSIsIkFjY29yZGlvbiIsInRleHRQcm9wcyIsImxpbmtQcm9wcyIsImlkIiwibGluayIsImFycmF5Iiwid2l0aFNoYWRvdyIsIm5vU2hhZG93Iiwibm9Cb3JkZXIiLCJub0JnIiwibGlmdFVwIiwiY29udGVudCIsImNlbnRlciIsIkNhcmRCYXNlIiwiY2FyZENvbnRlbnRQcm9wcyIsIkNhcmRDYXRlZ29yeSIsImZvbnRXZWlnaHQ3MDAiLCJoZWFkaW5nIiwiY2F0ZWdvcnlJY29uQnV0dG9uIiwic3ViaGVhZGluZyIsIkNhcmRDYXRlZ29yeUxpbmsiLCJpY29uQWx0ZXJuYXRlUHJvcHMiLCJkb3QiLCJtYXJnaW5SaWdodCIsImRvdEJpZyIsImRvdFNtYWxsIiwiam9iVGl0bGUiLCJkb3RNYXJnaW4iLCJtYXJnaW4iLCJDYXJkSm9iIiwiYmFkZ2VDb2xvciIsImJhZGdlVGl0bGUiLCJqb2JMb2NhdGlvbiIsImpvYlR5cGUiLCJqb2JEYXRlIiwiY29tcGFueUxvZ28iLCJjb21wYW55TmFtZSIsImNvbXBhbnlBdmF0YXIiLCJDYXJkSm9iQ29tcGFueSIsImpvYnNDb3VudCIsImNvbXBhbnlJbmZvIiwiY2FyZEpvYk1pbmltYWxCb2R5IiwiQ2FyZEpvYk1pbmltYWwiLCJzaG93QXJyb3ciLCJib3JkZXJSaWdodCIsInRhZyIsInRleHRXaGl0ZSIsIkNhcmRKb2JUYWciLCJmZWF0dXJlQ2hlY2siLCJDYXJkUHJpY2luZ1N0YW5kYXJkIiwicHJpY2VDb21wb25lbnQiLCJmZWF0dXJlQ2hlY2tDb21wb25lbnQiLCJmZWF0dXJlcyIsImRpc2NsYWltZXIiLCJkaXNjbGFpbWVyUHJvcHMiLCJmZWF0dXJlVGl0bGVQcm9wcyIsIm1lZGlhIiwiQ2FyZFByb2R1Y3QiLCJtZWRpYUNsYXNzTmFtZSIsImNhcmRDb250ZW50IiwibWVkaWFDb250ZW50IiwiYW55IiwidGV4dEJsdWUiLCJpbWdGbHVpZCIsInBiXzAiLCJwYl9wdF8wIiwicGFkZGluZ1RvcCIsIkNhcmRQcm9tbyIsInRpdGxlQ29sb3IiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUHJvcHMiLCJDYXJkUmV2aWV3IiwiYXV0aG9yUGhvdG8iLCJhdXRob3JOYW1lIiwiYXV0aG9yVGl0bGUiLCJ0ZXh0VmFyaWFudCIsImxpc3RJdGVtUHJpbWFyeVR5cG9ncmFwaHlQcm9wcyIsImxpc3RJdGVtU2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzIiwic2NoZW1hIiwiZnVsbG5hbWUiLCJwcmVzZW5jZSIsImFsbG93RW1wdHkiLCJtZXNzYWdlIiwibWF4aW11bSIsImVtYWlsIiwiQ29udGFjdEZvcm0iLCJmb3JtU3RhdGUiLCJzZXRGb3JtU3RhdGUiLCJpc1ZhbGlkIiwidmFsdWVzIiwidG91Y2hlZCIsImVycm9ycyIsInZhbGlkYXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwZXJzaXN0IiwidGFyZ2V0IiwibmFtZSIsImNoZWNrZWQiLCJ2YWx1ZSIsImhhc0Vycm9yIiwiZmllbGQiLCJEZXNjcmlwdGlvbkxpc3RJY29uIiwiZ3JpZEp1c3RpZnkiLCJvdmVyZmxvdyIsImNvbG9yRGVmYXVsdCIsImhlcm9XcmFwcGVyIiwiaGVyb0NvdmVyIiwib3BhY2l0eSIsImhlcm9CZyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsIm5vQ292ZXJPcGFjaXR5IiwiSGVyb0JhY2tncm91bmQiLCJkaXNiYWxlQ292ZXJPcGFjaXR5IiwiYmFja2dyb3VuZEltZyIsImJhY2tncm91bmRQb3NpdGlvbiIsImNvbnRlbnRTZWN0aW9uQ2xhc3NOYW1lIiwidXNlQ3VzdG9tU3R5bGVzIiwiY292ZXJCZyIsImJhY2tncm91bmRJbWFnZSIsImN1c3RvbUNsYXNzZXMiLCJoZXJvIiwibGF5b3V0IiwiY29udGVudFdpZHRoIiwiZG93biIsImhlcm9MZWZ0U2lkZSIsImhlcm9SaWdodFNpZGUiLCJmbGV4IiwiaGVyb0ltYWdlQ29udGFpbmVyIiwiaGVyb0ltYWdlIiwic2hhcGVPdXRzaWRlIiwiY2xpcFBhdGgiLCJIZXJvU2hhcGVkIiwibGVmdFNpZGUiLCJyaWdodFNpZGUiLCJpbWFnZVdyYXBwZXIiLCJtYXhIZWlnaHQiLCJjb3ZlciIsIkhlcm9TaWRlSW1hZ2UiLCJpbWFnZVNyYyIsImltYWdlU3JjU2V0IiwicmV2ZXJzZSIsIkhlcm9TaW1wbGVCYWNrZ3JvdW5kIiwidXNlQmFja2dyb3VuZCIsIk1hcCIsInpvb20iLCJwaW5zIiwiTCIsInJlcXVpcmUiLCJEZWZhdWx0IiwicHJvdG90eXBlIiwiX2dldEljb25VcmwiLCJtYXJrZXJJY29uMngiLCJtYXJrZXJJY29uIiwibWFya2VyU2hhZG93IiwibWVyZ2VPcHRpb25zIiwiaWNvblJldGluYVVybCIsImRlZmF1bHQiLCJpY29uVXJsIiwic2hhZG93VXJsIiwiUmVhY3RNYXAiLCJUaWxlTGF5ZXIiLCJNYXJrZXIiLCJpIiwibG9jYXRpb24iLCJ5IiwieCIsImZvbnRGYW1pbHkiLCJQYXJhbGxheCIsImphcmFsbGF4RWxlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJqYXJhbGxheCIsInNwZWVkIiwiZnVsbFdpZHRoIiwiZGlzYWJsZVBhZGRpbmciLCJuYXJyb3ciLCJTZWN0aW9uIiwiYWx0ZXJuYXRlIiwiaW5uZXIiLCJpbm5lck5hcnJvd2VkIiwiU2VjdGlvbkFsdGVybmF0ZSIsImlubmVybmFycm93ZWQiLCJTSUdOVVAiLCJMT0dJTiIsIlJFU0VUUEFTU1dPUkQiLCJGT1JHT1RQQVNTV09SRCIsIkdFVFVTRVJERVRBSUxTIiwiVVNFUkRFVEFJTFNVUERBVEUiLCJVU0VSUEFTU1dPUkRVUERBVEUiLCJVU0VSRk9SR09UUEFTU1dPUkRVUERBVEUiLCJDT1VSU0VMSVNUIiwiQ09VUlNFREVUQUlMUyIsIkNPVVJTRURFVEFJTFNBVVRIIiwiQVBQTFlDT1VQT04iLCJNQUtFUEFZTUVOVCIsIlBBWU1FTlRISVNUT1JZIiwiUFVSQ0hBU0VEQ09VUlNFIiwiQ0VSVElGSUNBVEVSRVFVRVNUIiwiQkxPR0xJU1QiLCJCTE9HREVUQUlMIiwiR0VUVU5JVkVSU0lUWSIsIkdFVENPUlBPUkFURSIsIkNPTlRBQ1RfVVMiLCJQUkVTU19SRUxFQVNFIiwiUFJFU1NfREVUQUlMUyIsIkdFVF9MTVNEQVRBX0NPVVJTRSIsIkdFVF9MTVNEQVRBX0NBVEVHT1JZIiwiTkVXU0xFVFRFUlNVQlNDUklCRSIsIkdFVFNPQ0lBTExJTktFUyIsIkdFVFBBWU1FTlRDRVJUSUZJQ0FURURFVEFJTFMiLCJNQUtFUEFZTUVOVENFUlRJRklDQVRFIiwiQ0VSVElGSUNBVEVfREFUQSIsIkFwcENvbmZpZyIsIkFQSV9FTkRQT0lOVCIsInByb2Nlc3MiLCJJTUFHRV9VUkwiLCJTSVRFX05BTUUiLCJDYW5jZWxUb2tlbiIsIkF4aW9zIiwiY2FuY2VsIiwiY29uc3RydWN0b3IiLCJob3N0IiwiX3BvcnRhbEdhdGV3YXkiLCJ2ZXJzaW9uIiwiX2FwaVZlcnNpb24iLCJlcnIiLCJzb3VyY2UiLCJjYW5jZWxUb2tlbiIsInRva2VuIiwiZW5kcG9pbnQiLCJhdXRoZW50aWNhdGVkIiwiYXV0aFRva2VuIiwicXVlcnlPcHRpb25zIiwiYm9keSIsInJlc3BvbnNlVHlwZSIsImhlYWRlcnMiLCJzdG9yYWdlU2Vzc2lvbiIsIkF1dGhvcml6YXRpb24iLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlIiwicmVxdWVzdCIsInBhcmFtcyIsImV4ZWN1dG9yIiwiYyIsIm9rIiwic3RhdHVzIiwiZXJyb3JPYmplY3QiLCJjb2RlIiwiU3VjY2Vzc0hhbmRsZXJIZWxwZXIiLCJpc0NhbmNlbCIsImVycm9yIiwibWVzc2FnZXMiLCJlcnJvckhlbHBlciIsIkVycm9ySGFuZGxlckhlbHBlciIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJyYXdFcnJvciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwic2V0RXJyb3IiLCJyYXdEYXRhIiwic2V0U3VjY2Nlc3MiLCJzZWN0aW9uTm9QYWRkaW5nVG9wIiwic2VjdGlvblBhcnRuZXJzIiwiQ29udGFjdCIsIkdhbGxlcnkiLCJjb2xzIiwibWluSGVpZ2h0Iiwic2VjdGlvbiIsIkhlcm8iLCJBYm91dEltYWdlIiwicHJvbW9Mb2dvIiwiUGFydG5lcnMiLCJwYXJ0bmVyIiwibG9nbyIsInNwQ2VudGVyIiwidGV4dEFsaWduIiwiU3RvcnkiLCJnZXRUZW1wbGF0ZURhdGEiLCJzZXRHZXRUZW1wbGF0ZURhdGEiLCJnZXREYXRhIiwiZmlsdGVyIiwiZSIsInRpdGxlU2x1ZyIsImJsb2NrVGl0bGUxIiwiYmxvY2sxIiwiUmVhY3RIdG1sUGFyc2VyIiwiYmxvY2tJbWFnZTEiLCJjYXJkQmFzZSIsImF2YXRhciIsIm9iamVjdFBvc2l0aW9uIiwibGlzdEl0ZW1BdmF0YXIiLCJsaXN0SXRlbVRleHQiLCJwb3BvdmVyX2RpdiIsImN1c3RvbWlzZWRfcG9wb3ZlciIsImNvbW1vbkJ0biIsIm1pbldpZHRoIiwic21hbGxDb21tb25CdG4iLCJUZWFtIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImF1dGhvckRldGFpbCIsInNldGF1dGhvckRldGFpbHMiLCJyZXF1aXJlZF9pZCIsImN1cnJlbnRUYXJnZXQiLCJuZXdEYXRhIiwibmV3QXJyYXkiLCJoYW5kbGVDbG9zZSIsIm9wZW4iLCJCb29sZWFuIiwiYmxvY2tUaXRsZTIiLCJibG9jazIiLCJpc0FjdGl2ZSIsInRlYW1NZW1iZXJJbWFnZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZGVzaWduYXRpb24iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJhYm91dFVzIiwiV2hvV2VBcmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYWJvdXQuanNcIik7XG4iLCIvKipcclxuICogQ2F1dGlvbjogQ29uc2lkZXIgdGhpcyBmaWxlIHdoZW4gdXNpbmcgTmV4dEpTIG9yIEdhdHNieUpTXHJcbiAqXHJcbiAqIFlvdSBtYXkgZGVsZXRlIHRoaXMgZmlsZSBhbmQgaXRzIG9jY3VycmVuY2VzIGZyb20gdGhlIHByb2plY3QgZmlsZXN5c3RlbSBpZiB5b3UgYXJlIHVzaW5nIHJlYWN0LXNjcmlwdHNcclxuICovXHJcbmltcG9ydCBBYm91dCBmcm9tICd2aWV3cy9BYm91dCc7XHJcbmltcG9ydCB7IEFwaUhlbHBlciB9IGZyb20gXCJoZWxwZXJcIjtcclxuaW1wb3J0IHsgQXBpUm91dGVzIH0gZnJvbSBcImNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgLy8gRm9yIEdldCBDTVMgRGF0YVxyXG4gICAgY29uc3QgcmVzcG9uc2VDTVMgPSBhd2FpdCBuZXcgQXBpSGVscGVyKCkuRmV0Y2hGcm9tU2VydmVyKFxyXG4gICAgICBBcGlSb3V0ZXMuRlJPTlRfUEFHRV9EQVRBLnNlcnZpY2UsXHJcbiAgICAgIEFwaVJvdXRlcy5GUk9OVF9QQUdFX0RBVEEudXJsLFxyXG4gICAgICBBcGlSb3V0ZXMuRlJPTlRfUEFHRV9EQVRBLm1ldGhvZCxcclxuICAgICAgQXBpUm91dGVzLkZST05UX1BBR0VfREFUQS5hdXRoZW50aWNhdGUsXHJcbiAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICB1bmRlZmluZWRcclxuICAgICk7XHJcbiAgICBsZXQgY21zRGF0YSA9IFtdO1xyXG4gICAgaWYgKHJlc3BvbnNlQ01TICYmICFyZXNwb25zZUNNUy5pc0Vycm9yKSB7XHJcbiAgICAgIGNtc0RhdGEgPSByZXNwb25zZUNNUy5kYXRhLmRhdGE7XHJcbiAgICB9XHJcbiAgICAvLyBGb3IgR2V0IFRlYW0gRGF0YVxyXG4gICAgY29uc3QgcmVzcG9uc2VUZWFtID0gYXdhaXQgbmV3IEFwaUhlbHBlcigpLkZldGNoRnJvbVNlcnZlcihcclxuICAgICAgQXBpUm91dGVzLkdFVF9URUFNX0RBVEEuc2VydmljZSxcclxuICAgICAgQXBpUm91dGVzLkdFVF9URUFNX0RBVEEudXJsLFxyXG4gICAgICBBcGlSb3V0ZXMuR0VUX1RFQU1fREFUQS5tZXRob2QsXHJcbiAgICAgIEFwaVJvdXRlcy5HRVRfVEVBTV9EQVRBLmF1dGhlbnRpY2F0ZSxcclxuICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICB1bmRlZmluZWQsXHJcbiAgICAgIHVuZGVmaW5lZFxyXG4gICAgKTtcclxuICAgIGxldCB0ZWFtTGlzdCA9IFwiXCI7XHJcbiAgICBpZiAocmVzcG9uc2VUZWFtICYmICFyZXNwb25zZVRlYW0uaXNFcnJvcikge1xyXG4gICAgICB0ZWFtTGlzdCA9IHJlc3BvbnNlVGVhbS5kYXRhLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBjbXNEYXRhLFxyXG4gICAgICAgIHRlYW1MaXN0XHJcbiAgICAgIH0sXHJcbiAgICAgIHJldmFsaWRhdGU6IDEwLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW1nX2Fib3V0X2Jhbm5lci03OGZjZjIyMTg4ZjExYzQ0YzE1YjY3MjRiNzdmMjFhNy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUJTQ0FNQUFBQWhGWGZaQUFBQzkxQk1WRVZNYVhFemVhazJmN0k0ZzdnM2c3Y3VhNWd6ZUtnOGhKbzNnclk0ZzdjM2dyVTBnTEkyZnJFMGRhQXViSmMyZ2JRd2Q2UXplS2syZ0xNdGQ1c3hkS0l1YTVnMWZyQTJmN0l5ZGFNMGU2dzJmcTQxZkswMWVxbzNncmd1YkpndGE1Y3hkS0kxZjdBeWRhUXlkYU14YzZFdWJKZ3ZiSmt3Y1o0dWJaa3djSnd1YlpndWJKY3lkcVV5ZEtJeGFwZ3ViSmN0YkpjdWJaY3ViSmN2YkpZdWJKY3ZiWmt1YkpjdGJKY3RiWmN1YkpnMmY3QXViSmNyYlpjdWJKY3ViSmN1YTVnM2dyWTBmcTh1YkpjdWJKZEVrZEV3aHN3Nmk4OHZoc3d1aGNzdWhNdEJqTWd0aE1zcmc4c3Jnc3M2aXM4cWdjczhpOUE5aU1ZdGc4c3BnY29vZ01vN2hjTW5nTW9uZjhvbGZzbzRncjhrZmNrNWlNOGpmTWs0aU04aGU4azFmcm83aXRBZ2VzazJoczhlZWNnemZMY29mc3NkZU1nMGhjNGNkOGcyaGNzeGVMUWJkc2daZGNneGVMSW1mY3N6aE0wdmRhNHhnY2t6aE00eGc4NHdmOFl4Z3M0dWRLc3ZmY1F1Y3FoVW5kUk9tZE0xZkswd2NaOHZiNXcwZXFwUW05TXplS2hYb05WY3BkWXlkS05XbjlWWm90VktsdEpGanNJd2NKMVJtczlPbHNsTG10SC8vLzgra2M5ZXBkWXpkNmRibzlWSGtNTTJmN0ZIbU5CQ2xNOHlkcVZjcE5ZOWhybzNnTE05aExjemVhbFFtY3czZmE0NmY3QThnTE14YzZJM2VhZ3ljNkZJbGRKTWw5SlNuTlJTbnROTmw5SlBuTkpGaTc1VW5NOVpvZFZLa3NnOGtNNDVqYzA5ZTZaSGx0RkJrODgzZ2JSQmg3cERrOUV3Y2FCem43ODRnN2RLa2NZMmk4MU9tOU03ajg1TGxjODFpczA5ZzdRNGdyWS9qOUEwZXF4S21kRkZsdEJFamNYZjZmRkltZEJDaUx4Smw5RkdsTkZCaTc4eWlNeFZuZEV2YnBvNmpzNzQrdngrcHNQUDMrby9rczVIa2NwR21OQ2p3ZFpDa05ETTNlaFlvTkpFbHMrbHhOa3hoOHhIa3MwK2pkQzF6ZDVMZzZyKy92L0gydWZ6OS9vM2pNM3Q4L2VkdmRNL2s4OVRoNjFPaUxCU2piWmtsYmFUdDlCZnB0ZGptTDFBaWNCSGo4aEdrOUZBZ0sxZGtMTlRqTFJla3JkQ2xjL2s3Zk0waWN5MHk5dGdwOWM0amMyTnRNOURsYzh6aWN4ZVhabjNBQUFBUTNSU1RsTUFIRGRUYjR5UEErTHRuRVFtQzRMMkVtSHFCN1hBMGQwc3I0Nzh4NC9ZZDVpMXpPZnlQa2Yxc0xWcTROaDNGdmp4b3BRMi9TVE51RnpVd0ZJd3hLYWVqSUxwSUJFVjl3QUFCaFZKUkVGVWVGNnMxTmR5RkVjWUJlQmVvUUloUkFrTGxSREdyaElnWTNCSkw4Q1ZlS3p1eVhGenpqa241Wnh6enVTY2czUE84Y0t6dTcwSmtPMExmeGRUVS8vcE05dlR1N1hnZjZLcU9WVGI5WDd0b1JyVkVmQmYxSFRWalpjY3JULzJieTFWVjkyOFl0eTlaYlZ1dWNkejkwZnJHOERCamw5cFZBcGJPc3R2bU11dlZnYU5YU2ZBQWQ2cEd4cHk2eXhmNXBoNDNwUy80ZjN1b2FHbTJyZHU3MlM5eHpPdk15bWtaRnEvcHREcms5MG1oVzdlNHpsN0hMemh4R1dQUjIweG1TeEovVnFsZEc1bTlYaGFWT0ExRGFkc05oM1B1NUwyTjZRdFBPLzMySnBxUUJWVmsyMG95L1BpMnMyM1dFdnlmSGJlMXRoYWRWUXR0dm03TGxmNjVnR21YSzY3WHR1cHlvTTdIUWhtWGRMUzhvR1dKTmVPSjNDNWZHNVhDRUpua2V6My9vRmRzdmdKNGwyQU5ad2hySktrLzdPU1hhKzNWdzJXSk1sS25Ha29ib3VZazZUMFR5WDMwa2xPVW5URDlISjVxcGNrTDNFVy93NFhGM1hkMEZHeXdYVXJzdHJjbFZzcXo1UGQvc1hGWXlEblBkckxjUU9EbUdPSzQ3SVpiNENtaWJtTW4rTVlSekZaNWpnMzNaTC9FSnJXY3N6SG1BTnkzQVJCSy9JWHRjaUp5OFZzaXRQU2RFM3V1SHh6b3Vnb2pjVWRyOC8zMmF0bnovZXYzZi9LNXd0cHhVVHBjYUk0NXp1c1ZEcFl0Wmkramcwb1U5YjN4NzRoNytuOUFCdllFWmVLYVZxMHNoMEF0TEtzRnRxTkJkZVQwTXJTend3bHE5K3g2eEFPNHRnT3RTemJDanJOUVFpTnZRVWJVRXVidnpCVWVHdzI2eURDc1JIQ29Ma1RIRGE3SWRPTElUaHMvZ0h2Q2hzemgyQ2ltRThwZVJzNDdjeEFOSTBsWU5CNXkxRGxqcE9GMEloekJEUE9abkRPcVlZYmVHS0VDYlB6V25YbHVkUHBodzVjMllCcTV6bHdYcGhJYk80VkRDWjBnblBmVU8xVHdab1l3QXMyRXhQQ2VkQXU5REFqZlFVanpJVFFiM2pOajBLRzJTZ3Q2QkhhUVVkWXpXeitYbUJrdE9Id2FuWGphU1Rjd3d6aUJjdU1PdHdCbXFQclRPeEZRUi9EUktLUHF5dXIwYWlXNmNVTFlzeDZ0Qm0walhwUi9BVVdSNkhScTlXVlc2TVJoSXE1akx5amJhQ1REQ2lqeVlKTnBDYWpkeW9iUC9lVHcwaWV4QkFLa0ozZ0E1S2NRYjJ6QlhzSUJja24reFZ2OGprWlNhRUZIRStqRkVsZUFFZmF5UlUwTW91Tm9CbUIvTDUwQWkvSFNMSUh4Y3JwQ3ZuaFNRQXVha0twMkMvWWJDeWxKalhSVnkvejMrS3YvUnJOY0NvK1dVemxWRWh6S2ZmblRRbnhlTjlmV0Y4OGZpTkNVZFNUc2F1ZmFDaEtXSW5IZXlzeWdmcElxYWdvYWtXK3ZWMjBKOHV5bDZUeU5LRVpXVjRvUlNQeUNrV3BnT0xTYmtDT2JUOG8ycjZ0bEc1OEhRcXVmNk8wdjUwdEI3Sk03RjRFT1JkMmR4L0swdy9LSHNWa0xQYW9ZcndnUC95N2tycjNTU01BNHpqK09CZ21qWWt4Y2RJSlF5UVJLZ2cydmlYOUhkZGk5VUJiMjlMcktSN0NWVkVFRVhXb2pVa1hOeWZUTkRFMTRXOWdiSEpOdWhqRGV0dE4zWnZiT3ZkT3FDRDNKcC85bCsvd0pFKzlQa1lHangvZnFreXMzUzJyTW96TS9vMjEwNnJmTVVJTm82aFZxeitldS9oZDFjNHhUZzBUQWZ5NWtWKzRVRzYrSXRoSFRVOXdvV214dUtOYlRmdUNTZm92QkN4cTdFdEhxdllMNFNtNkY4R1Z4c1NYSE1RMDdUT2kxREt0WnhqV2FhSXlpNENYV2p4UGNjVXc4V1ZiTVlZNXd4QzFtekV5WE1KV2tsbHBSbG9pK0trb3E2OXN4QlRsRWxGNmFBeFlVYmpYTmxobERaaWxEbk00VTVTbE41YmlSc1JIbmJ4M21iZVdqRWg0bUV5aXVKRGw1WGNXVm1YNUd2TmtGZ0xXWk01cXdzb3A0L0FXZkxoVTFjUjdrMVZWdmNZQ1dSa09JNlh5NWdtbnBoQ1lJa3Z6dU5Zekh6b3NxMm9OazJSdFNzOGtoZlVPZkhJRGdSNnlzWUJhTXBsNHVFZ2syVS9vSlRzOUFhVFN3bWE3ZFQ2OWdlQUUyWnBFalVzbjJpZUpOSGVLZnJJM0VjQUdKMlphTmdWdUM4RUJjdENMYzU3UDV1NWxlZDZJT0JrSVlrdVFNcm1takNoczRWa2ZPZXJIcVNCa1B6WmxoZTA2UnNsWjN6TWprMnNzY3FLd1kwUmNqS0srTFdiemQ3S2lIaGtuY3Mvc2lGSitWNWVYeEQzNEI4blZ1SkVwR0pObXhOMmdIM3ZTdnA3SjcwdEYrRDFFajhxVUpEMVRrRXJBTkQyR1p3VEZnL0x1YnZtZ2lCRzNTT3ZkbHNxRlFya0V6SkNMMXJzdGxuVkZST2l4Wm9ERFN1WFFGSEVTd1ZHbGN1UWNNYi9iNDJOZ2pMb3doNU1UREZFM3ZOQjVxU3RSSUVyZENRRWg2cExQUjkyYW5TVWIvd0FJaGxkQWFETXBHZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmtBQUFBcENBWUFBQURBazRMT0FBQUZnVWxFUVZSNEFhMVhBNUJqV1JUTjJvVzE3ZDNZYVp0cjI5NjJIVXpiRE5wanN6VzI0bVJ0MjhwNDd2N3pxL2JYWnRycC9sV25YcjMzN2ozblBDZTg1TmN5cGdTRmR1Z0NwVzVZb0RBTVJhSU1xUmk2YUtxNUUzWXFEUU8zcUF3alZXckQ4TmNxL1JCcHlrZDhvWlViL2thSnV0b3c4cjFhUDlJSTBXbUxLTElzSnl2MXcva3F3OUNoMk1ZZEIrKzEyT254ZWUvUU13dmY0L0RrL0xmcC9pNG54VFh0T29RNHBXNUFqN3dwaWNpMUE5ZXJkQU4yT0g2NHg4T1NQOWozRnQzYjdhV2tUZy9GbTkxc2lUcmEwZjlvbjVzUXI5SU5lakg2Q1VVVXBhdmpGTnExQitPYWRoeG1uZmE4UmZFbU44Vk5Bc1FoUHFGNTV4SGtNenozalNtQ2hXVTZmNy9YWktOSCs5K2hCTE9IWW96dUtRUHh5TVBVS2tyWC9LMHVXbmZGYUpHUzFRUFJ0WnNPUHRyM05zVzB1eWg2Tk5DT2tVM1l6K2JYYlQzSThHM3hFNUVYTFh0Q1hiYnF3Q085elBRWVBSVFo1dklEWEQ3VSt3N3JGREVvVVVmN2liSElSNHk2YkxWUFhyejhKVlpFcWwxM3RyeHd1ZS91RGl2ZDNma1dSYlM2L0lBMmJJRDR1azBVcEYxTjhxTGxiQmxYczRFZTdITFRmVjFqNTRBUHZPRG5TZk9XQnF0S1Z2amdMS3pGNVlkRWs1ZXdSa0dsSzBpMzNFb2ZmZmM3SFQ1NmpENy82VStxSDNDeDdTQkxObnRINVlJUHZPRG55ZklYWllSVkRQcWdIdExzNUFCSEQzWXpMdWVzcGI3dDc5RlkzNERqTXdyVnJjVHV3bFQ1NVlNUHZPQm5Scko0VlhUZE5uWXVnNXVjSExCakVwdDMwNzAxQTNUcytIRWE3M3U2ZFQzRk5Xd2ZsWTg2ZU1IUGsrWXUraTZwelVwUnJXN1NORGc1SkhSNEthcG1NNVd2MkU4VGZjYjFIb3FxSE1IVSt1V0REN3pnNTRtejUvMkJTbml6aTlUMURnNFFRWExUb0dOQ2tiNnRiMU5VK1FBbEdyMSsrZUFEcnpobi91OFEyWVpoUVZsWjUrQ0FPdHFmYmhtYVVDUzFlek5GVm0yaW1EYlBtUG5nNXdteitnd2grb0hEY2UwZVV0UTZPR0RJeVIwdVVoVXNvTzN2ZkRtbWdPZXpIMG1aTjU5eDdNQmkrK1dETDFnL2VFaVUzYXZsaWRPNjcxYmtMZndidzVYVjJQOFB6bzB5ZHk0dDIvMGV1MzN4WVNPTU9EOGhUZjRDckJ0R01Tb1hmUExjaFgrSjBydVNlUHczTFplSzBqdVBKYll6cmhrSDBpbzdCM2sxNjRoaUd2YXdoT0tNTGtyUUx5VnBaZzhySEZXN0UydUhPTDg4OElCUGxOWjFGUHpzdFNKTTY5NGZXcjZSd3B2Y0pLNjArMEhDSUxUQnpaTEZOZHRBekphb2h6ZTYwVDhxQnp5aDVadU9nNWU3dXdRcHBvZkVtZjIrK0RZdm15U3FHQnVLYWljRjFibFFqaHVIZHZDSU12cDh3aFRUZlp6STdSbGRwd3RTekwrRjErd2tkWjJUQk9XMmdJRjg4UEJUekQvZ3BlUkVBTUVieG5KY2FKSE5IcnB6amkwZ1FDUzZoZGtFZVl0OURGLzJxUGNFQzhSTTI4SHdtcjNzZE55aHQwMGJ5QXV0MmszZ3VmV050Z3RPRU9GR1V3Y1hXTkRiZE5icGdCR3hFdktrT1FzeGl2SngzM2lvdzBWdzVTNlNWVHJwVnExMXlzQTJScDdnVGZQZmt0YzZ6aHRYQkJDK2FkUkxzaGY2c0cyUmZIUFo1RUFjNHNWWjgzeUNOMDBGay80a2dndTQwWlR2SUVtNWcyNHF0VTRLakJyeC9CVFRIOGlmVkFTQUc3Z0tybld4SkRjVTd4OFg2RWNjemhtM282WWljdnNMWFdmaDNDaDFXMGs4eDBuWEYrMGZGeGd0NHBoejhRdnlwaXdDQ0ZLTXFYQ25xWEV4anExMGJlSCtVVUE3K25HNm1kRy9QdTBmM0xnRmNHcmwyczBrTk5qcG1vSjlvNEIyOUNNTzhkTVQ0UTVveDh1aXRGNmZxc3JKT3I4cW53TmJSenY2aFNuRzV3UCs2NEM3aDlscDMwaEtOdEtkV2p0ZGtidVBBMTluSjdUejN6Ui9pYmdBUmJoYjRBbGhhdmNCZWJtVEhjRmwyZnZZRW5XMG94OXhNeEtCUzhidEorS2lFYnE5ekE0UnRoUVhEaFBhMFQ5VEVlNjlnV3Vwd2M2dUJVcGhxdVhnZisvRnJJandlSFFTNC9wZHVNZTVFUlVNSFVkOXh2OFpSOThDeGtTNEYybjNFVXJVWjEwRVlOdzdCV205eDFHaVBzc2kzR2dpR1JES1dSWVpmWGxPTitkZk5iTStHZ0l3WWR3QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNrQUFBQXBDQVFBQUFBQ2FjaDlBQUFDTVVsRVFWUjRBZTNTaFk3alFCQUUwQW96L2Y5L0hUTXpoZzF6cmRLVXJKYmR4K0tkMm5EOFZOdWRmc0wvVGgvLy9keVFOMlRINmYzeS9CR3BDMzc5clYrUytxcWV0Qk94SW1OUVhMOEpDQXIyVjRpTVFYSEdOSnhlQ2ZaWGhTUkJjUU1mdmtPV1VkdGZ6bExnQUVObVpEY21vMlRWbXQ4T1NNMmVYeEJwM0RqSFNNRnV0cVM3U2JtZW16QmlSK3hwS0NOVUlSa2Rra1l4aEFreUdvQnZ5UUZFSkVlZndTbW12QmZKdUo2YUtxS1duQWt2R1pPYVpYVFVnRnFZVUxXTlNIVWNrWnVSMUhJSWltVUV4dXRSeHd6T0xST0lHNHZLbUNLUXQzNjRtSWxoU3l6QWYxbTlsSFpISlpybEFPTU16dFJSaUtpbXAvcnBkSkRjOUF3cnk1eFRaQ3RlN0ZIdHVTOHdKZ2VZR3JleDI4eE5UZDA4NkRpazd2VU1zY1FPYTh5NERvR3RDQ1NrQUtsTndwZ050cGhqckM2TUlIVWtSNllXeHhzNlNjNXhxbjIyMm1tQ1JGekl0OGxFZEt4K2lrQ3RnOTFxUzJXcHdWZkJlbEpDaVFKd3Z6aXhmSTljeFpRV2dpU0plbEtud0JFbEtZdERPYjJNRmJobVVpZ2JSZVFCVjBDZzQrcU1YU3hYU3lHVW40VWJGOGwrN3FkU0duVEMwWExDbWFoSWdVSExoTE9ocFZDdHc0Q3pZWHZMUVdRYkpObXhvQ3NPS0F4U2dCSm5vNzVhdm9sa1J3OGlJQUZjc2RjMDJlOWl5Q2Q4dEh3bWVTU29LVG93SWd2c2NTR1pVT0E3UHVDTjViMkJYOW1RTTdTMHdZaE1OVTc0emdzUEJqM0hVN3dndUFmbnh4akZRR0JFNnB3TitHak1FOXpIWTd6R3A4d1Z4TVNoWVg5Tlh2RVdEM0hid0pmNGdpTzRDRklReFhTY0gxL1RNKzA0a2tCaUFBQUFBRWxGVGtTdVFtQ0NcIiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjb2xvcnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBib3JkZXI6IHtcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDUpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgYm9yZGVyOiAnM3B4IHNvbGlkJyxcclxuICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLmRpdmlkZXIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDYpLFxyXG4gICAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICB9XHJcbiAgfSxcclxuICBib3JkZXJEYXJrOiB7XHJcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLmluZGlnb1s3MDBdLFxyXG4gIH0sXHJcbiAgbW9kZVRvZ2dsZXI6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiBgLSR7dGhlbWUuc3BhY2luZygxLzIpfXB4YCxcclxuICAgIGxlZnQ6IGAtJHt0aGVtZS5zcGFjaW5nKDEvMil9cHhgLFxyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgIHRyYW5zaXRpb246IGB0cmFuc2Zvcm0gLjNzIGN1YmljLWJlemllciguNCwuMDMsMCwxKWAsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAgIGhlaWdodDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgIH1cclxuICB9LFxyXG4gIG1vZGVUb2dnbGVyRGFyazoge1xyXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RoZW1lLnNwYWNpbmcoMyl9cHgpYCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmluZGlnb1s5MDBdLFxyXG4gIH0sXHJcbiAgbW9kZVRvZ2dsZXJJY29uOiB7XHJcbiAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEvMiksXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEvMiksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH1cclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGRhcmsgbW9kZSB0b2dnbGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgRGFya01vZGVUb2dnbGVyID0gKHsgdGhlbWVNb2RlID0gJ2xpZ2h0Jywgb25DbGljaywgY2xhc3NOYW1lLCAuLi5yZXN0IH0pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ucmVzdH0gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICBjbGFzc2VzLmJvcmRlcixcclxuICAgICAgICAgIHRoZW1lTW9kZSA9PT0gJ2RhcmsnID8gY2xhc3Nlcy5ib3JkZXJEYXJrIDogJycsXHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgIGNsYXNzZXMubW9kZVRvZ2dsZXIsXHJcbiAgICAgICAgICB0aGVtZU1vZGUgPT09ICdkYXJrJyA/IGNsYXNzZXMubW9kZVRvZ2dsZXJEYXJrIDogJycsXHJcbiAgICAgICAgKX0+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGVUb2dnbGVySWNvbn1cclxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjE0XCJcclxuICAgICAgICAgIGhlaWdodD1cIjEzXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTQgMTNcIlxyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgZD1cIk00LjUyMjA4IDcuNzE3NTRDNy41NzgyIDcuNzE3NTQgMTAuMDU1NyA1LjI0MDA2IDEwLjA1NTcgMi4xODM5NEMxMC4wNTU3IDEuOTM0OTggMTAuMDM5MiAxLjY4OTg2IDEwLjAwNzQgMS40NDk2MUM5Ljk1ODAxIDEuMDc3MjcgMTAuMzQ5NSAwLjc3MTE1OSAxMC42NDc0IDAuOTk5OTJDMTIuMTE1MyAyLjEyNzE2IDEzLjA2MTUgMy44OTk5OSAxMy4wNjE1IDUuODkzODNDMTMuMDYxNSA5LjI5OTU4IDEwLjMwMDYgMTIuMDYwNSA2Ljg5NDg1IDEyLjA2MDVDMy45NTMzNCAxMi4wNjA1IDEuNDkyODYgMTAuMDAxIDAuODc2NzI4IDcuMjQ1MjdDMC43OTQ4NDEgNi44NzkwMiAxLjIzNjY4IDYuNjUyODkgMS41NTMyMSA2Ljg1NDUxQzIuNDExMDYgNy40MDA5NSAzLjQyOTYgNy43MTc1NCA0LjUyMjA4IDcuNzE3NTRaXCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufTtcclxuXHJcbkRhcmtNb2RlVG9nZ2xlci5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgdGhlbWUgbW9kZVxyXG4gICAqL1xyXG4gIHRoZW1lTW9kZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGVtZSB0b2dnbGVyIGZ1bmN0aW9uXHJcbiAgICovXHJcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhcmtNb2RlVG9nZ2xlcjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRGFya01vZGVUb2dnbGVyJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTm9Tc3IgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTm9Tc3InO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gIGV4dHJhU21hbGw6IHtcclxuICAgIGZvbnRTaXplOiAxMCxcclxuICB9LFxyXG4gIHNtYWxsOiB7XHJcbiAgICBmb250U2l6ZTogMjAsXHJcbiAgfSxcclxuICBtZWRpdW06IHtcclxuICAgIGZvbnRTaXplOiAzMCxcclxuICB9LFxyXG4gIGxhcmdlOiB7XHJcbiAgICBmb250U2l6ZTogNDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBpY29uXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgSWNvbiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGZvbnRJY29uQ2xhc3MsIHNpemUsIGZvbnRJY29uQ29sb3IsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOb1Nzcj5cclxuICAgICAgPGlcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAnaWNvbicsXHJcbiAgICAgICAgICBmb250SWNvbkNsYXNzLFxyXG4gICAgICAgICAgY2xhc3Nlc1tzaXplXSxcclxuICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICApfVxyXG4gICAgICAgIHN0eWxlPXt7IGNvbG9yOiBmb250SWNvbkNvbG9yIH19XHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgIC8+XHJcbiAgICA8L05vU3NyPlxyXG4gICk7XHJcbn07XHJcblxyXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzaXplOiAnc21hbGwnLFxyXG59O1xyXG5cclxuSWNvbi5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgY2xhc3NlcyBvZiB0aGUgZm9udCBpY29uXHJcbiAgICovXHJcbiAgZm9udEljb25DbGFzczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFNvdXJjZSBzZXQgZm9yIHRoZSByZXNwb25zaXZlIGltYWdlc1xyXG4gICAqL1xyXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ2V4dHJhU21hbGwnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxyXG4gIC8qKlxyXG4gICAqIENvbG9yIG9mIHRoZSBpY29uXHJcbiAgICovXHJcbiAgZm9udEljb25Db2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0ljb24nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICBmbGV4V3JhcDogJ25vd3JhcCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGljb24gdGV4dFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEljb25UZXh0ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlLFxyXG4gICAgY29sb3IsXHJcbiAgICBmb250SWNvbkNsYXNzLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgaWNvblByb3BzLFxyXG4gICAgdHlwb2dyYXBoeVByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2ljb24tdGV4dCcsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8SWNvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImljb24tdGV4dF9faWNvblwiXHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICBmb250SWNvbkNsYXNzPXtmb250SWNvbkNsYXNzfVxyXG4gICAgICAgIGZvbnRJY29uQ29sb3I9e2NvbG9yfVxyXG4gICAgICAgIHsuLi5pY29uUHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgdmFyaWFudD1cImgzXCJcclxuICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2ljb24tdGV4dF9fdHlwb2dyYXBoeScsIGNsYXNzZXMudGl0bGUpfVxyXG4gICAgICAgIHsuLi50eXBvZ3JhcGh5UHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5JY29uVGV4dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaWNvblByb3BzOiB7fSxcclxuICB0eXBvZ3JhcGh5UHJvcHM6IHt9LFxyXG59O1xyXG5cclxuSWNvblRleHQucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNsYXNzZXMgb2YgdGhlIGZvbnQgaWNvblxyXG4gICAqL1xyXG4gIGZvbnRJY29uQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTb3VyY2Ugc2V0IGZvciB0aGUgcmVzcG9uc2l2ZSBpbWFnZXNcclxuICAgKi9cclxuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaXRsZSBvZiB0aGUgaWNvbi10ZXh0XHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgSWNvbiBjb21wb25lbnRcclxuICAgKi9cclxuICBpY29uUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdHlwb2dyYXBoeVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvblRleHQ7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0ljb25UZXh0JztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzJztcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICB9LFxyXG4gIGRCbG9jazoge1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGltYWdlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEltYWdlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgc3JjLCBzcmNTZXQsIGFsdCwgbGF6eSwgbGF6eVByb3BzLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgaWYgKGxhenkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdpbWFnZScsIGNsYXNzZXMucm9vdCwgY2xhc3Nlcy5kQmxvY2ssIGNsYXNzTmFtZSl9XHJcbiAgICAgICAgYWx0PXthbHR9XHJcbiAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgc3JjU2V0PXtzcmNTZXR9XHJcbiAgICAgICAgZWZmZWN0PVwib3BhY2l0eVwiXHJcbiAgICAgICAgey4uLmxhenlQcm9wc31cclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGltZ1xyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2ltYWdlJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICBhbHQ9e2FsdH1cclxuICAgICAgc3JjPXtzcmN9XHJcbiAgICAgIHNyY1NldD17c3JjU2V0fVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkltYWdlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbHQ6ICcuLi4nLFxyXG4gIGxhenk6IHRydWUsXHJcbiAgbGF6eVByb3BzOiB7XHJcbiAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgfSxcclxufTtcclxuXHJcbkltYWdlLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFNvdXJjZSBvZiB0aGUgaW1hZ2VcclxuICAgKi9cclxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTb3VyY2Ugc2V0IGZvciB0aGUgcmVzcG9uc2l2ZSBpbWFnZXNcclxuICAgKi9cclxuICBzcmNTZXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogSW1hZ2UgdGl0bGVcclxuICAgKi9cclxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogTGF6eSBsb2FkaW5nIHByb3BlcnRpZXNcclxuICAgKi9cclxuICBsYXp5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogU2hvdWxkIGxhenkgbG9hZCB0aGUgaW1hZ2VcclxuICAgKi9cclxuICBsYXp5OiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9JbWFnZSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEFycm93UmlnaHRBbHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd1JpZ2h0QWx0JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgXCJMZWFybiBNb3JlXCIgbGlua1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IExlYXJuTW9yZUxpbmsgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY29sb3IsXHJcbiAgICBjb21wb25lbnQsXHJcbiAgICB2YXJpYW50LFxyXG4gICAgdGl0bGUsXHJcbiAgICBocmVmLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgaWNvblByb3BzLFxyXG4gICAgdHlwb2dyYXBoeVByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBjaGlsZHJlbiA9IChcclxuICAgIDw+XHJcbiAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdsZWFybi1tb3JlLWxpbmtfX3R5cG9ncmFwaHknLCBjbGFzc2VzLnRpdGxlKX1cclxuICAgICAgICB2YXJpYW50PXt2YXJpYW50fVxyXG4gICAgICAgIGNvbG9yPXtjb2xvciB8fCAncHJpbWFyeSd9XHJcbiAgICAgICAgey4uLnR5cG9ncmFwaHlQcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnbGVhcm4tbW9yZS1saW5rX19pY29uLWJ1dHRvbicsIGNsYXNzZXMuaWNvbil9XHJcbiAgICAgICAgY29sb3I9e2NvbG9yIHx8ICdwcmltYXJ5J31cclxuICAgICAgICB7Li4uaWNvblByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEFycm93UmlnaHRBbHRJY29uIGNsYXNzTmFtZT1cImxlYXJuLW1vcmUtbGlua19fYXJyb3dcIiAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+XHJcbiAgICA8Lz5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdsZWFybi1tb3JlLWxpbmsnLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuXHJcbkxlYXJuTW9yZUxpbmsuZGVmYXVsdFByb3BzID0ge1xyXG4gIHZhcmlhbnQ6ICdzdWJ0aXRsZTEnLFxyXG4gIGhyZWY6ICcjJyxcclxuICB0eXBvZ3JhcGh5UHJvcHM6IHt9LFxyXG4gIGljb25Qcm9wczoge30sXHJcbiAgY29tcG9uZW50OiAnYScsXHJcbn07XHJcblxyXG5MZWFybk1vcmVMaW5rLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb21wb25lbnQgdG8gbG9hZCBhcyBhIG1haW4gRE9NXHJcbiAgICovXHJcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMub25lT2YoWydMaW5rJywgJ2EnXSksXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgdGhlIGxpbmtcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFZhcmlhbnQgb2YgdGhlIGxpbmtcclxuICAgKi9cclxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydoNicsICdzdWJ0aXRsZTEnLCAnc3VidGl0bGUyJywgJ2JvZHkxJywgJ2JvZHkyJ10pLFxyXG4gIC8qKlxyXG4gICAqIEhyZWYgb2YgdGhlIGxpbmtcclxuICAgKi9cclxuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIENvbG9yIG9mIHRoZSBsaW5rXHJcbiAgICovXHJcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIEljb24gY29tcG9uZW50XHJcbiAgICovXHJcbiAgaWNvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHR5cG9ncmFwaHlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlYXJuTW9yZUxpbms7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0xlYXJuTW9yZUxpbmsnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlcic7XHJcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dVcEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dVcCc7XHJcbmltcG9ydCBab29tIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1pvb20nO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICByaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBTY3JvbGxUb3AgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKHtcclxuICAgIGRpc2FibGVIeXN0ZXJlc2lzOiB0cnVlLFxyXG4gICAgdGhyZXNob2xkOiAxMDAsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdykge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxab29tIGluPXt0cmlnZ2VyfT5cclxuICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVDbGlja30gcm9sZT1cInByZXNlbnRhdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICA8RmFiIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiIGFyaWEtbGFiZWw9XCJzY3JvbGwgYmFjayB0byB0b3BcIj5cclxuICAgICAgICAgIDxLZXlib2FyZEFycm93VXBJY29uIC8+XHJcbiAgICAgICAgPC9GYWI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9ab29tPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFRvcDsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TY3JvbGxUb3AnOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgSW1hZ2UgfSBmcm9tICcuL0ltYWdlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uIH0gZnJvbSAnLi9JY29uJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMZWFybk1vcmVMaW5rIH0gZnJvbSAnLi9MZWFybk1vcmVMaW5rJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uVGV4dCB9IGZyb20gJy4vSWNvblRleHQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERhcmtNb2RlVG9nZ2xlciB9IGZyb20gJy4vRGFya01vZGVUb2dnbGVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTY3JvbGxUb3AgfSBmcm9tICcuL1Njcm9sbFRvcCc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xyXG5pbXBvcnQgQ291bnRVcCBmcm9tICdyZWFjdC1jb3VudHVwJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIENvdW50IFVwIE51bWJlcnNcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDb3VudFVwTnVtYmVyID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHN0YXJ0LFxyXG4gICAgZW5kLFxyXG4gICAgc3VmZml4LFxyXG4gICAgcHJlZml4LFxyXG4gICAgbGFiZWwsXHJcbiAgICB0ZXh0Q29sb3IsXHJcbiAgICBsYWJlbENvbG9yLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdmlzaWJpbGl0eVNlbnNvclByb3BzLFxyXG4gICAgd3JhcHBlclByb3BzLFxyXG4gICAgY291bnRXcmFwcGVyUHJvcHMsXHJcbiAgICBjb3VudE51bWJlclByb3BzLFxyXG4gICAgbGFiZWxQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFt2aWV3UG9ydEVudGVyZWQsIHNldFZpZXdQb3J0RW50ZXJlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgc2V0Vmlld1BvcnRWaXNpYmlsaXR5ID0gaXNWaXNpYmxlID0+IHtcclxuICAgIGlmICh2aWV3UG9ydEVudGVyZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZpZXdQb3J0RW50ZXJlZChpc1Zpc2libGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnY291bnR1cC1udW1iZXInLCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxWaXNpYmlsaXR5U2Vuc29yXHJcbiAgICAgICAgb25DaGFuZ2U9e2lzVmlzaWJsZSA9PiBzZXRWaWV3UG9ydFZpc2liaWxpdHkoaXNWaXNpYmxlKX1cclxuICAgICAgICBkZWxheWVkQ2FsbFxyXG4gICAgICAgIHsuLi52aXNpYmlsaXR5U2Vuc29yUHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50dXAtbnVtYmVyX193cmFwcGVyXCIgey4uLndyYXBwZXJQcm9wc30+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxyXG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBjb2xvcj17dGV4dENvbG9yIHx8ICd0ZXh0UHJpbWFyeSd9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdW50dXAtbnVtYmVyX19jb3VudC13cmFwcGVyXCJcclxuICAgICAgICAgICAgey4uLmNvdW50V3JhcHBlclByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q291bnRVcFxyXG4gICAgICAgICAgICAgIGRlbGF5PXsxfVxyXG4gICAgICAgICAgICAgIHJlZHJhdz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZW5kPXt2aWV3UG9ydEVudGVyZWQgPyBlbmQgOiBzdGFydH1cclxuICAgICAgICAgICAgICBzdGFydD17c3RhcnR9XHJcbiAgICAgICAgICAgICAgc3VmZml4PXtzdWZmaXggfHwgJyd9XHJcbiAgICAgICAgICAgICAgcHJlZml4PXtwcmVmaXggfHwgJyd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY291bnR1cC1udW1iZXJfX2NvdW50XCJcclxuICAgICAgICAgICAgICB7Li4uY291bnROdW1iZXJQcm9wc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICBjb2xvcj17bGFiZWxDb2xvciB8fCAndGV4dFNlY29uZGFyeSd9XHJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY291bnR1cC1udW1iZXJfX2xhYmVsXCJcclxuICAgICAgICAgICAgey4uLmxhYmVsUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkNvdW50VXBOdW1iZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0YXJ0OiAwLFxyXG4gIHZpc2liaWxpdHlTZW5zb3JQcm9wczoge30sXHJcbiAgd3JhcHBlclByb3BzOiB7fSxcclxuICBjb3VudFdyYXBwZXJQcm9wczoge30sXHJcbiAgY291bnROdW1iZXJQcm9wczoge30sXHJcbiAgbGFiZWxQcm9wczoge30sXHJcbn07XHJcblxyXG5Db3VudFVwTnVtYmVyLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBTdWZmaXggb2YgdGhlIGNvdW50IHVwIG51bWJlclxyXG4gICAqL1xyXG4gIHN1ZmZpeDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgUHJlZml4IG9mIHRoZSBjb3VudCB1cCBudW1iZXJcclxuICAgKi9cclxuICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGxhYmVsIHRleHQgb2YgdGhlIGNvdW50IHVwIG51bWJlclxyXG4gICAqL1xyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU3RhcnRpbmcgbnVtYmVyXHJcbiAgICovXHJcbiAgc3RhcnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgLyoqXHJcbiAgICogRW5kIG51bWJlclxyXG4gICAqL1xyXG4gIGVuZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRleHQgY29sb3JcclxuICAgKi9cclxuICB0ZXh0Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogTGFiZWwgY29sb3JcclxuICAgKi9cclxuICBsYWJlbENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBWaXNpYmlsaXR5U2Vuc29yIENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHZpc2liaWxpdHlTZW5zb3JQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgd3JhcHBlciBkaXZcclxuICAgKi9cclxuICB3cmFwcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIGNvdW50IHdyYXBwZXIgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBjb3VudFdyYXBwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgQ291bnRVcCBSZWFjdCBjb21wb25lbnRcclxuICAgKi9cclxuICBjb3VudE51bWJlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBsYWJlbCBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGxhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudFVwTnVtYmVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Db3VudFVwTnVtYmVyJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgZGVzY3JpcHRpb24gd2l0aCBDVEEnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IERlc2NyaXB0aW9uQ3RhID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlLFxyXG4gICAgc3VidGl0bGUsXHJcbiAgICBwcmltYXJ5Q3RhLFxyXG4gICAgc2Vjb25kYXJ5Q3RhLFxyXG4gICAgYWxpZ24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB3cmFwcGVyUHJvcHMsXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIGJ1dHRvbkdyb3VwUHJvcHMsXHJcbiAgICBwcmltYXJ5QnV0dG9uV3JhcHBlclByb3BzLFxyXG4gICAgc2Vjb25kYXJ5QnV0dG9uV3JhcHBlclByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzU20gPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpLCB7XHJcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgbGV0IGp1c3RpZnlHcmlkID0gJ2NlbnRlcic7XHJcbiAgaWYgKGFsaWduID09PSAnbGVmdCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gaXNTbSA/ICdmbGV4LWVuZCcgOiAnZmxleC1zdGFydCc7XHJcbiAgfSBlbHNlIGlmIChhbGlnbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAganVzdGlmeUdyaWQgPSBpc1NtID8gJ2ZsZXgtc3RhcnQnIDogJ2ZsZXgtZW5kJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBjb250YWluZXJcclxuICAgICAgc3BhY2luZz17Mn1cclxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnZGVzY3JpcHRpb24tY3RhJywgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tY3RhX193cmFwcGVyXCIgey4uLndyYXBwZXJQcm9wc30+XHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXHJcbiAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWN0YV9fdGl0bGVcIlxyXG4gICAgICAgICAgey4uLnRpdGxlUHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICB7c3VidGl0bGUgJiYgKFxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tY3RhX19zdWJ0aXRsZVwiXHJcbiAgICAgICAgICAgIHsuLi5zdWJ0aXRsZVByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtqdXN0aWZ5R3JpZH1cclxuICAgICAgICAgIHNwYWNpbmc9ezF9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1jdGFfX2J1dHRvbi1ncm91cFwiXHJcbiAgICAgICAgICB7Li4uYnV0dG9uR3JvdXBQcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWN0YV9fcHJpbWFyeS1idXR0b24td3JhcHBlclwiXHJcbiAgICAgICAgICAgIHsuLi5wcmltYXJ5QnV0dG9uV3JhcHBlclByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJpbWFyeUN0YX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIHtzZWNvbmRhcnlDdGEgJiYgKFxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2Rlc2NyaXB0aW9uLWN0YV9fc2Vjb25kYXJ5LWJ1dHRvbi13cmFwcGVyJyl9XHJcbiAgICAgICAgICAgICAgey4uLnNlY29uZGFyeUJ1dHRvbldyYXBwZXJQcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzZWNvbmRhcnlDdGF9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkRlc2NyaXB0aW9uQ3RhLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgd3JhcHBlclByb3BzOiB7fSxcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxuICBidXR0b25Hcm91cFByb3BzOiB7fSxcclxuICBwcmltYXJ5QnV0dG9uV3JhcHBlclByb3BzOiB7fSxcclxuICBzZWNvbmRhcnlCdXR0b25XcmFwcGVyUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuRGVzY3JpcHRpb25DdGEucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgdGhlIGxpc3RcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFN1YnRpdGxlIG9mIHRoZSBsaXN0XHJcbiAgICovXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogUHJpbWFyeSBDVEEgb2YgdGhlIGxpc3RcclxuICAgKi9cclxuICBwcmltYXJ5Q3RhOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFNlY29uZGFyeSBDVEEgb2YgdGhlIGxpc3RcclxuICAgKi9cclxuICBzZWNvbmRhcnlDdGE6IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIEFsaWdubWVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgd3JhcHBlciBHcmlkIGl0ZW0gY29tcG9uZW50c1xyXG4gICAqL1xyXG4gIHdyYXBwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRzXHJcbiAgICovXHJcbiAgdGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRzXHJcbiAgICovXHJcbiAgc3VidGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgYnV0dG9uIGdyb3VwIGRpdiBjb250YWluZXJcclxuICAgKi9cclxuICBidXR0b25Hcm91cFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBwcmltYXJ5IGJ1dHRvbiB3cmFwcGVyIGRpdiBjb250YWluZXJcclxuICAgKi9cclxuICBwcmltYXJ5QnV0dG9uV3JhcHBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBzZWNvbmRhcnkgYnV0dG9uIHdyYXBwZXIgZGl2IGNvbnRhaW5lclxyXG4gICAqL1xyXG4gIHNlY29uZGFyeUJ1dHRvbldyYXBwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2NyaXB0aW9uQ3RhO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9EZXNjcmlwdGlvbkN0YSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQXZhdGFyLCBjb2xvcnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBleHRyYVNtYWxsOiB7XHJcbiAgICB3aWR0aDogMjAsXHJcbiAgICBoZWlnaHQ6IDIwLFxyXG4gIH0sXHJcbiAgc21hbGw6IHtcclxuICAgIHdpZHRoOiA1MCxcclxuICAgIGhlaWdodDogNTAsXHJcbiAgfSxcclxuICBtZWRpdW06IHtcclxuICAgIHdpZHRoOiA3MCxcclxuICAgIGhlaWdodDogNzAsXHJcbiAgfSxcclxuICBsYXJnZToge1xyXG4gICAgd2lkdGg6IDkwLFxyXG4gICAgaGVpZ2h0OiA5MCxcclxuICB9LFxyXG4gIGNpcmNsZToge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXHJcbiAgfSxcclxuICBzcXVhcmU6IHtcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGFsdGVybmF0ZSBpY29uXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgSWNvbkFsdGVybmF0ZSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpY29uUHJvcHMsXHJcbiAgICBmb250SWNvbkNsYXNzLFxyXG4gICAgc2l6ZSxcclxuICAgIGNvbG9yLFxyXG4gICAgc2hhcGUsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdXNlQmFja2dyb3VuZFN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCIjZTNmMmZkXCIsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuICBjb25zdCBiYWNrZ3JvdW5kQ2xhc3NlcyA9IHVzZUJhY2tncm91bmRTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdmF0YXJcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgIFwiaWNvbi1hbHRlcm5hdGVcIixcclxuICAgICAgICBjbGFzc2VzW3NpemVdLFxyXG4gICAgICAgIGNsYXNzZXNbc2hhcGVdLFxyXG4gICAgICAgIGJhY2tncm91bmRDbGFzc2VzLmJhY2tncm91bmQsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8SWNvblxyXG4gICAgICAgIHNpemU9e3NpemV9XHJcbiAgICAgICAgZm9udEljb25DbGFzcz17Zm9udEljb25DbGFzc31cclxuICAgICAgICBmb250SWNvbkNvbG9yPXtcIiM1MTIwZmZcIn1cclxuICAgICAgICBjbGFzc05hbWU9J2ljb24tYWx0ZXJuYXRlX19pY29uJ1xyXG4gICAgICAgIHsuLi5pY29uUHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICA8L0F2YXRhcj5cclxuICApO1xyXG59O1xyXG5cclxuSWNvbkFsdGVybmF0ZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc2l6ZTogJ21lZGl1bScsXHJcbiAgc2hhcGU6ICdzcXVhcmUnLFxyXG4gIGljb25Qcm9wczoge30sXHJcbn07XHJcblxyXG5JY29uQWx0ZXJuYXRlLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjbGFzc2VzIG9mIHRoZSBmb250IGljb25cclxuICAgKi9cclxuICBmb250SWNvbkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU2l6ZXMgb2YgdGhlIGljb25cclxuICAgKi9cclxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydleHRyYVNtYWxsJywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcclxuICAvKipcclxuICAgKiBDb2xvciBvZiB0aGUgaWNvblxyXG4gICAqL1xyXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgY29sb3JzLnJlZCxcclxuICAgIGNvbG9ycy5waW5rLFxyXG4gICAgY29sb3JzLnB1cnBsZSxcclxuICAgIGNvbG9ycy5kZWVwUHVycGxlLFxyXG4gICAgY29sb3JzLmluZGlnbyxcclxuICAgIGNvbG9ycy5ibHVlLFxyXG4gICAgY29sb3JzLmxpZ2h0Qmx1ZSxcclxuICAgIGNvbG9ycy5jeWFuLFxyXG4gICAgY29sb3JzLnRlYWwsXHJcbiAgICBjb2xvcnMuZ3JlZW4sXHJcbiAgICBjb2xvcnMubGlnaHRHcmVlbixcclxuICAgIGNvbG9ycy5saW1lLFxyXG4gICAgY29sb3JzLnllbGxvdyxcclxuICAgIGNvbG9ycy5hbWJlcixcclxuICAgIGNvbG9ycy5vcmFuZ2UsXHJcbiAgICBjb2xvcnMuZGVlcE9yYW5nZSxcclxuICAgIGNvbG9ycy5icm93bixcclxuICAgIGNvbG9ycy5ncmV5LFxyXG4gICAgY29sb3JzLmJsdWVHcmV5LFxyXG4gIF0pLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBzaGFwZSBvZiB0aGUgYWx0ZXJuYXRlIGljb25cclxuICAgKi9cclxuICBzaGFwZTogUHJvcFR5cGVzLm9uZU9mKFsnY2lyY2xlJywgJ3NxdWFyZSddKSxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgSWNvbiBjb21wb25lbnRcclxuICAgKi9cclxuICBpY29uUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uQWx0ZXJuYXRlO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9JY29uQWx0ZXJuYXRlJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGltYWdlR3JpZDoge1xyXG4gICAgcGFkZGluZzogJy4yNXJlbScsXHJcbiAgICB3aWR0aDogJzE1MCUnLFxyXG4gICAgYm94U2hhZG93OiAnMCAxLjVyZW0gNHJlbSByZ2JhKDIyLDI4LDQ1LC4xKScsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAnJiBpbWcnOiB7XHJcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgICAgYm9yZGVyU3R5bGU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZUdyaWRGaXJzdEl0ZW06IHtcclxuICAgIG1hcmdpblRvcDogJzRyZW0nLFxyXG4gIH0sXHJcbiAgaW1hZ2VHcmlkTGFzdEl0ZW06IHtcclxuICAgIG1hcmdpblRvcDogJzZyZW0nLFxyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBvdmVybGFwZWQgaW1hZ2VzXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgT3ZlcmxhcGVkSW1hZ2VzID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgaW1hZ2UxLCBpbWFnZTIsIGltYWdlMywgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRcclxuICAgICAgY29udGFpbmVyXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnb3ZlcmxhcGVkLWltYWdlcycsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXs0fSBjbGFzc05hbWU9XCJvdmVybGFwZWQtaW1hZ2VzX19pdGVtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgJ292ZXJsYXBlZC1pbWFnZXNfX2l0ZW0td3JhcHBlcicsXHJcbiAgICAgICAgICAgIGNsYXNzZXMuaW1hZ2VHcmlkLFxyXG4gICAgICAgICAgICBjbGFzc2VzLmltYWdlR3JpZEZpcnN0SXRlbSxcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2UxLnNyY31cclxuICAgICAgICAgICAgc3JjU2V0PXtpbWFnZTEuc3Jjc2V0fVxyXG4gICAgICAgICAgICBhbHQ9e2ltYWdlMS5hbHR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJsYXBlZC1pbWFnZXNfX2l0ZW0taW1hZ2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXs0fSBjbGFzc05hbWU9XCJvdmVybGFwZWQtaW1hZ2VzX19pdGVtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnb3ZlcmxhcGVkLWltYWdlc19faXRlbS13cmFwcGVyJywgY2xhc3Nlcy5pbWFnZUdyaWQpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e2ltYWdlMi5zcmN9XHJcbiAgICAgICAgICAgIHNyY1NldD17aW1hZ2UyLnNyY3NldH1cclxuICAgICAgICAgICAgYWx0PXtpbWFnZTIuYWx0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVybGFwZWQtaW1hZ2VzX19pdGVtLWltYWdlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17NH0gY2xhc3NOYW1lPVwib3ZlcmxhcGVkLWltYWdlc19faXRlbS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICdvdmVybGFwZWQtaW1hZ2VzX19pdGVtLXdyYXBwZXInLFxyXG4gICAgICAgICAgICBjbGFzc2VzLmltYWdlR3JpZCxcclxuICAgICAgICAgICAgY2xhc3Nlcy5pbWFnZUdyaWRMYXN0SXRlbSxcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2UzLnNyY31cclxuICAgICAgICAgICAgc3JjU2V0PXtpbWFnZTMuc3Jjc2V0fVxyXG4gICAgICAgICAgICBhbHQ9e2ltYWdlMy5hbHR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJsYXBlZC1pbWFnZXNfX2l0ZW0taW1hZ2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5PdmVybGFwZWRJbWFnZXMucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogSW1hZ2UgaXRlbSAtIE9iamVjdCBvZiBzcmMsIHNyY3NldCBhbmQgYWx0IHByb3BlcnRpZXNcclxuICAgKi9cclxuICBpbWFnZTE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBJbWFnZSBpdGVtIC0gT2JqZWN0IG9mIHNyYywgc3Jjc2V0IGFuZCBhbHQgcHJvcGVydGllc1xyXG4gICAqL1xyXG4gIGltYWdlMjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEltYWdlIGl0ZW0gLSBPYmplY3Qgb2Ygc3JjLCBzcmNzZXQgYW5kIGFsdCBwcm9wZXJ0aWVzXHJcbiAgICovXHJcbiAgaW1hZ2UzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVybGFwZWRJbWFnZXM7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL092ZXJsYXBlZEltYWdlcyc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkaXNhYmxlR3V0dGVyOiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIH0sXHJcbiAgY3RhOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgJyY6Zmlyc3QtY2hpbGQnOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMCksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgc2VjdGlvbiBoZWFkZXJzXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgU2VjdGlvbkhlYWRlciA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSxcclxuICAgIHRpdGxlVmFyaWFudCxcclxuICAgIHN1YnRpdGxlVmFyaWFudCxcclxuICAgIHN1YnRpdGxlLFxyXG4gICAgc3VidGl0bGVDb2xvcixcclxuICAgIGxhYmVsLFxyXG4gICAgb3ZlcmxpbmUsXHJcbiAgICBmYWRlVXAsXHJcbiAgICBhbGlnbixcclxuICAgIGN0YUdyb3VwLFxyXG4gICAgZGlzYWJsZUd1dHRlcixcclxuICAgIHRpdGxlQ2xhc3NlcyxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIGxhYmVsUHJvcHMsXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBsZXQganVzdGlmeUdyaWQgPSAnY2VudGVyJztcclxuICBpZiAoYWxpZ24gPT09ICdsZWZ0Jykge1xyXG4gICAganVzdGlmeUdyaWQgPSAnZmxleC1zdGFydCc7XHJcbiAgfSBlbHNlIGlmIChhbGlnbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAganVzdGlmeUdyaWQgPSAnZmxleC1lbmQnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIGNvbnRhaW5lclxyXG4gICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICBkYXRhLWFvcz17ZmFkZVVwID8gXCJmYWRlLXVwXCIgOiBcIlwifVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgXCJzZWN0aW9uLWhlYWRlclwiLFxyXG4gICAgICAgIGNsYXNzZXMucm9vdCxcclxuICAgICAgICBkaXNhYmxlR3V0dGVyID8gY2xhc3Nlcy5kaXNhYmxlR3V0dGVyIDoge30sXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICB7b3ZlcmxpbmUgJiYgKFxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtqdXN0aWZ5R3JpZH1cclxuICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgIGNsYXNzTmFtZT0nc2VjdGlvbi1oZWFkZXJfX292ZXJsaW5lLXdyYXBwZXInXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge292ZXJsaW5lfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKX1cclxuICAgICAge2xhYmVsICYmIChcclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPSdzZWN0aW9uLWhlYWRlcl9fbGFiZWwtd3JhcHBlcic+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PSdvdmVybGluZSdcclxuICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcclxuICAgICAgICAgICAgYWxpZ249e2FsaWduIHx8IFwiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgIHsuLi5sYWJlbFByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApfVxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPSdzZWN0aW9uLWhlYWRlcl9fdGl0bGUtd3JhcHBlcic+XHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIHZhcmlhbnQ9e3RpdGxlVmFyaWFudH1cclxuICAgICAgICAgIGFsaWduPXthbGlnbiB8fCBcImNlbnRlclwifVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICBcInNlY3Rpb24taGVhZGVyX190aXRsZVwiLFxyXG4gICAgICAgICAgICBjbGFzc2VzLnRpdGxlLFxyXG4gICAgICAgICAgICB0aXRsZUNsYXNzZXMgPyB0aXRsZUNsYXNzZXMgOiB7fVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIGNvbG9yPSd0ZXh0UHJpbWFyeSdcclxuICAgICAgICAgIHsuLi50aXRsZVByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAge3N1YnRpdGxlICYmIChcclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPSdzZWN0aW9uLWhlYWRlcl9fc3VidGl0bGUtd3JhcHBlcic+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PXtzdWJ0aXRsZVZhcmlhbnQgfHwgXCJoNlwifVxyXG4gICAgICAgICAgICBhbGlnbj17YWxpZ24gfHwgXCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgY29sb3I9e3N1YnRpdGxlQ29sb3IgfHwgXCJ0ZXh0UHJpbWFyeVwifVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3NlY3Rpb24taGVhZGVyX19zdWJ0aXRsZSdcclxuICAgICAgICAgICAgey4uLnN1YnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzdWJ0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjdGFHcm91cCAmJiBjdGFHcm91cC5sZW5ndGggJiYgKFxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9J3NlY3Rpb24taGVhZGVyX19jdGEtd3JhcHBlcic+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e2p1c3RpZnlHcmlkfVxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICAgIHdyYXA9J25vd3JhcCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uLWhlYWRlcl9fY3RhLWNvbnRhaW5lcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2N0YUdyb3VwLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICBcInNlY3Rpb24taGVhZGVyX19jdGEtaXRlbS13cmFwcGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXMuY3RhXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcblNlY3Rpb25IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRpdGxlVmFyaWFudDogJ2g0JyxcclxuICBsYWJlbFByb3BzOiB7fSxcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxufTtcclxuXHJcblNlY3Rpb25IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgdGhlIHNlY3Rpb24gaGVhZGVyXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTdWJ0aXRsZSBvZiB0aGUgc2VjdGlvbiBoZWFkZXJcclxuICAgKi9cclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcclxuICAvKipcclxuICAgKiBMYWJlbCB0aXRsZSBvZiB0aGUgc2VjdGlvbiBoZWFkZXJcclxuICAgKi9cclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgb3ZlcmxpbmUgY29tcG9uZW50IGluIHRoZSBzZWN0aW9uIGhlYWRlclxyXG4gICAqL1xyXG4gIG92ZXJsaW5lOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBBcnJheSBvZiB0aGUgQ1RBc1xyXG4gICAqL1xyXG4gIGN0YUdyb3VwOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBmYWRlIHVwIG9uIHNjcm9sbFxyXG4gICAqL1xyXG4gIGZhZGVVcDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogSGVhZGVyIGNvbnRlbnQgKHRpdGxlLCBzdWJ0aXRsZSwgQ1RBcykgYWxpZ25tZW50XHJcbiAgICovXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ3JpZ2h0JywgJ2xlZnQnLCAnY2VudGVyJ10pLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gZGlzYWJsZSBib3R0b20gbWFyZ2luIG9mIHRoZSBzZWN0aW9uXHJcbiAgICovXHJcbiAgZGlzYWJsZUd1dHRlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogU3R5bGVzIGNsYXNzZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHRpdGxlIGZyb20gdGhlIHBhcmVudCBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZUNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgdmFyaWFudFxyXG4gICAqL1xyXG4gIHRpdGxlVmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXSlcclxuICAgIC5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFN1YlRpdGxlIHZhcmlhbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICAnaDEnLFxyXG4gICAgJ2gyJyxcclxuICAgICdoMycsXHJcbiAgICAnaDQnLFxyXG4gICAgJ2g1JyxcclxuICAgICdoNicsXHJcbiAgICAnc3VidGl0bGUxJyxcclxuICAgICdzdWJ0aXRsZTInLFxyXG4gICAgJ2JvZHkxJyxcclxuICAgICdib2R5MicsXHJcbiAgXSksXHJcbiAgLyoqXHJcbiAgICogU3ViVGl0bGUgY29sb3JcclxuICAgKi9cclxuICBzdWJ0aXRsZUNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgJ3RleHRQcmltYXJ5JyxcclxuICAgICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgICdwcmltYXJ5JyxcclxuICAgICdzZWNvbmRhcnknLFxyXG4gIF0pLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBsYWJlbCBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGxhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkhlYWRlcjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU2VjdGlvbkhlYWRlcic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB6SW5kZXg6ICdhdXRvJyxcclxuICB9LFxyXG4gIHN3aXBlclNsaWRlOiB7XHJcbiAgICB3aWR0aDogJ2F1dG8nLFxyXG4gIH0sXHJcbiAgc3dpcGVyTmF2OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB3aWR0aDogODgsXHJcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICByaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHpJbmRleDogNCxcclxuICAgICcmIC5zd2lwZXItYnV0dG9uLXByZXYsICYgLnN3aXBlci1idXR0b24tbmV4dCc6IHtcclxuICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgYm94U2hhZG93OiBgMCAycHggMTBweCAwICR7dGhlbWUucGFsZXR0ZS5jYXJkU2hhZG93fWAsXHJcbiAgICAgIGJvcmRlcjogYDJweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcn1gLFxyXG4gICAgICAnJjphZnRlcic6IHtcclxuICAgICAgICBmb250U2l6ZTogJ2luaXRpYWwnLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgLnN3aXBlci1idXR0b24tcHJldic6IHtcclxuICAgICAgbGVmdDogMCxcclxuICAgIH0sXHJcbiAgICAnJiAuc3dpcGVyLWJ1dHRvbi1uZXh0Jzoge1xyXG4gICAgICByaWdodDogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgaW1hZ2Ugc3dpcGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgU3dpcGVySW1hZ2UgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaXRlbXMsXHJcbiAgICBuYXZpZ2F0aW9uQnV0dG9uU3R5bGUsXHJcbiAgICBpbWFnZUNsYXNzTmFtZSxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgJ3N3aXBlci1jb250YWluZXInLFxyXG4gICAgICAgICdzd2lwZXItaW1hZ2UnLFxyXG4gICAgICAgIGNsYXNzZXMucm9vdCxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1pbWFnZV9fd3JhcHBlciwgc3dpcGVyLXdyYXBwZXJcIj5cclxuICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgJ3N3aXBlci1pbWFnZV9fc2xpZGUnLFxyXG4gICAgICAgICAgICAgICdzd2lwZXItc2xpZGUnLFxyXG4gICAgICAgICAgICAgIGNsYXNzZXMuc3dpcGVyU2xpZGUsXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aXRlbS5zcmN9XHJcbiAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdH1cclxuICAgICAgICAgICAgICBzcmNTZXQ9e2l0ZW0uc3JjU2V0fVxyXG4gICAgICAgICAgICAgIGxhenlQcm9wcz17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAgICdzd2lwZXItaW1hZ2VfX2l0ZW0nLFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5pbWFnZSxcclxuICAgICAgICAgICAgICAgIGltYWdlQ2xhc3NOYW1lID8gaW1hZ2VDbGFzc05hbWUgOiB7fSxcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnc3dpcGVyLWltYWdlX19uYXZpZ2F0aW9uJywgY2xhc3Nlcy5zd2lwZXJOYXYpfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICdzd2lwZXItaW1hZ2VfX25hdmlnYXRpb24tYnV0dG9uJyxcclxuICAgICAgICAgICAgJ3N3aXBlci1pbWFnZV9fbmF2aWdhdGlvbi1idXR0b24tLXByZXYnLFxyXG4gICAgICAgICAgICAnc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJ1dHRvblN0eWxlIHx8IHt9LFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgJ3N3aXBlci1pbWFnZV9fbmF2aWdhdGlvbi1idXR0b24nLFxyXG4gICAgICAgICAgICAnc3dpcGVyLWltYWdlX19uYXZpZ2F0aW9uLWJ1dHRvbi0tbmV4dCcsXHJcbiAgICAgICAgICAgICdzd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQnV0dG9uU3R5bGUgfHwge30sXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblN3aXBlckltYWdlLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXMgZm9yIHRoZSBpbWFnZXNcclxuICAgKi9cclxuICBpbWFnZUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgYXJyYXkgb2YgaW1hZ2VzIG9iamVjdCB3aGljaCBzaG91bGQgY29uc2lzdCBvZiBzcmMsIGFsdCBhbmQgc3Jjc2V0IGF0dHJpYnV0ZXNcclxuICAgKi9cclxuICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTdHlsZXMgY2xhc3NlcyBvZiB0aGUgbmF2aWdhdGlvbiBidXR0b25cclxuICAgKi9cclxuICBuYXZpZ2F0aW9uQnV0dG9uU3R5bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2lwZXJJbWFnZTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU3dpcGVySW1hZ2UnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5LCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgc3dpcGVyU2xpZGU6IHtcclxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoNiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbnVtYmVyOiB7XHJcbiAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBudW1iZXIgc3dpcGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgU3dpcGVyTnVtYmVyID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGl0ZW1zLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgbnVtYmVyUHJvcHMsXHJcbiAgICBsYWJlbFByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyksIHtcclxuICAgIGRlZmF1bHRNYXRjaGVzOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IGlzTWQgPyA0IDogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBhdXRvcGxheToge1xyXG4gICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAnc3dpcGVyLW51bWJlcicsXHJcbiAgICAgICAgJ3N3aXBlci1jb250YWluZXInLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLW51bWJlcl9fd3JhcHBlciBzd2lwZXItd3JhcHBlclwiPlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAnc3dpcGVyLW51bWJlcl9faXRlbScsXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcy5zd2lwZXJTbGlkZSxcclxuICAgICAgICAgICAgICAnc3dpcGVyLXNsaWRlJyxcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICdhdXRvJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezF9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dpcGVyLW51bWJlcl9faXRlbS1jb250YWluZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cInN3aXBlci1udW1iZXJfX251bWJlci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnc3dpcGVyLW51bWJlcl9fbnVtYmVyJywgY2xhc3Nlcy5udW1iZXIpfVxyXG4gICAgICAgICAgICAgICAgICB7Li4ubnVtYmVyUHJvcHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLm51bWJlcn1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cInN3aXBlci1udW1iZXJfX2xhYmVsLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlci1udW1iZXJfX2xhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmxhYmVsUHJvcHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1udW1iZXJfX3BhZ2luYXRpb24gc3dpcGVyLXBhZ2luYXRpb25cIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblN3aXBlck51bWJlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbnVtYmVyUHJvcHM6IHt9LFxyXG4gIGxhYmVsUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuU3dpcGVyTnVtYmVyLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBhcnJheSBvZiBudW1iZXJzIG9iamVjdCB3aGljaCBzaG91bGQgY29uc2lzdCBvZiBudW1iZXIgYW5kIHRpdGxlXHJcbiAgICovXHJcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBudW1iZXIgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBudW1iZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBUaGUgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIGxhYmVsIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgbGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3aXBlck51bWJlcjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU3dpcGVyTnVtYmVyJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBUeXBlZCBmcm9tICdyZWFjdC10eXBlZCc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHR5cGVkIGFuaW1hdGVkIHRleHRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgVHlwZWRUZXh0ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCB0eXBlZFByb3BzLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgndHlwZWQtdGV4dCcsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8VHlwZWQgY2xhc3NOYW1lPVwidHlwZWQtdGV4dF9faXRlbVwiIHsuLi50eXBlZFByb3BzfSAvPlxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICk7XHJcbn07XHJcblxyXG5UeXBlZFRleHQucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogcmVhY3QtdHlwZWQgcHJvcGVydGllcy4gRm9yIG1vcmUgaW5mbyB2aXNpdCBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yZWFjdC10eXBlZFxyXG4gICAqL1xyXG4gIHR5cGVkUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR5cGVkVGV4dDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVHlwZWRUZXh0JztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWN0aW9uSGVhZGVyIH0gZnJvbSAnLi9TZWN0aW9uSGVhZGVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uQWx0ZXJuYXRlIH0gZnJvbSAnLi9JY29uQWx0ZXJuYXRlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTd2lwZXJJbWFnZSB9IGZyb20gJy4vU3dpcGVySW1hZ2UnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERlc2NyaXB0aW9uQ3RhIH0gZnJvbSAnLi9EZXNjcmlwdGlvbkN0YSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ291bnRVcE51bWJlciB9IGZyb20gJy4vQ291bnRVcE51bWJlcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT3ZlcmxhcGVkSW1hZ2VzIH0gZnJvbSAnLi9PdmVybGFwZWRJbWFnZXMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN3aXBlck51bWJlciB9IGZyb20gJy4vU3dpcGVyTnVtYmVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUeXBlZFRleHQgfSBmcm9tICcuL1R5cGVkVGV4dCc7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLW11bHRpLWNvbXAgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGlzcGxheS1uYW1lICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtcclxuICBUeXBvZ3JhcGh5LFxyXG4gIEdyaWQsXHJcbiAgQWNjb3JkaW9uIGFzIE11aUFjY29yZGlvbixcclxuICBBY2NvcmRpb25TdW1tYXJ5IGFzIE11aUFjY29yZGlvblN1bW1hcnksXHJcbiAgQWNjb3JkaW9uRGV0YWlscyBhcyBNdWlBY2NvcmRpb25EZXRhaWxzLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcclxuXHJcbmltcG9ydCB7IExlYXJuTW9yZUxpbmsgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICB9LFxyXG4gIGV4cGFuZE9wZW46IHtcclxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgYWNjb3JkaW9uIHZpZXdcclxuICpcclxuICogQHBhcmFtIHsqfSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQWNjb3JkaW9uID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGl0ZW1zLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdGl0bGVQcm9wcyxcclxuICAgIHN1YnRpdGxlUHJvcHMsXHJcbiAgICB0ZXh0UHJvcHMsXHJcbiAgICBsaW5rUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHsuLi5yZXN0fSBjbGFzc05hbWU9e2Nsc3goJ2FjY29yZGlvbicsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0+XHJcbiAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgPE11aUFjY29yZGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdhY2NvcmRpb25fX2l0ZW0td3JhcHBlcicsIGNsYXNzZXMubGlzdEl0ZW0pfVxyXG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNdWlBY2NvcmRpb25TdW1tYXJ5XHJcbiAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz17YCR7aXRlbS5pZH0tY29udGVudGB9XHJcbiAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3Jpb25fX2l0ZW0tdGV4dC1jb250YWluZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImFjY29yaW9uX19pdGVtLXRpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yaW9uX2l0ZW0tdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIHtpdGVtLnN1YnRpdGxlICYmIChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJhY2Nvcmlvbl9pdGVtLXN1YnRpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3Jpb25faXRlbS1zdWJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnN1YnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvTXVpQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICAgIDxNdWlBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX19jb2xsYXBzYWJsZS10ZXh0LWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX19jb2xsYXBzYWJsZS10ZXh0LXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb25fX2NvbGxhcHNhYmxlLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4udGV4dFByb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICB7aXRlbS5saW5rICYmIChcclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb25fX2NvbGxhcHNhYmxlLWxpbmstd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMZWFybk1vcmVMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubGlua31cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9fY29sbGFwc2FibGUtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmxpbmtQcm9wc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L011aUFjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgPC9NdWlBY2NvcmRpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkFjY29yZGlvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGl0bGVQcm9wczoge30sXHJcbiAgc3VidGl0bGVQcm9wczoge30sXHJcbiAgdGV4dFByb3BzOiB7fSxcclxuICBsaW5rUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQWNjb3JkaW9uLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBDbGFzc25hbWUgZnJvbSB0aGUgcGFyZW50IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBJdGVtcyB0byBzaG93IGluc2lkZSB0aGUgYWNjb3JkaW9uXHJcbiAgICovXHJcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHN1YnRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgdGV4dCBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRleHRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgbGluayBjb21wb25lbnRcclxuICAgKi9cclxuICBsaW5rUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0FjY29yZGlvbic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgd2l0aFNoYWRvdzoge1xyXG4gICAgYm94U2hhZG93OiBgMCAycHggMTBweCAwICR7dGhlbWUucGFsZXR0ZS5jYXJkU2hhZG93fWAsXHJcbiAgfSxcclxuICBub1NoYWRvdzoge1xyXG4gICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgfSxcclxuICBub0JvcmRlcjoge1xyXG4gICAgYm9yZGVyOiAwLFxyXG4gIH0sXHJcbiAgbm9CZzoge1xyXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICB9LFxyXG4gIGxpZnRVcDoge1xyXG4gICAgdHJhbnNpdGlvbjpcclxuICAgICAgJ2JveC1zaGFkb3cgLjI1cyBlYXNlLHRyYW5zZm9ybSAuMjVzIGVhc2UsLXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBlYXNlJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgJzAgMS41cmVtIDIuNXJlbSByZ2JhKDIyLDI4LDQ1LC4xKSwwIC4zcmVtIDAuNXJlbSAtLjUwcmVtIHJnYmEoMjIsMjgsNDUsLjA1KSAhaW1wb3J0YW50JyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwtNXB4LDApJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDIpLFxyXG4gICAgJyY6bGFzdC1jaGlsZCc6IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCAyKSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMyksXHJcbiAgICAgICcmOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAzKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsZWZ0OiB7XHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgfSxcclxuICByaWdodDoge1xyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcclxuICB9LFxyXG4gIGNlbnRlcjoge1xyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBiYXNpYyBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZEJhc2UgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgd2l0aFNoYWRvdyxcclxuICAgIG5vU2hhZG93LFxyXG4gICAgbm9Cb3JkZXIsXHJcbiAgICBub0JnLFxyXG4gICAgbGlmdFVwLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBhbGlnbixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIGNhcmRDb250ZW50UHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZFxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgJ2NhcmQtYmFzZScsXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIHdpdGhTaGFkb3cgPyBjbGFzc2VzLndpdGhTaGFkb3cgOiB7fSxcclxuICAgICAgICBub1NoYWRvdyA/IGNsYXNzZXMubm9TaGFkb3cgOiB7fSxcclxuICAgICAgICBub0JvcmRlciA/IGNsYXNzZXMubm9Cb3JkZXIgOiB7fSxcclxuICAgICAgICBub0JnID8gY2xhc3Nlcy5ub0JnIDoge30sXHJcbiAgICAgICAgbGlmdFVwID8gY2xhc3Nlcy5saWZ0VXAgOiB7fSxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8Q2FyZENvbnRlbnRcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2NhcmQtYmFzZV9fY29udGVudCcsIGNsYXNzZXMuY29udGVudCwgY2xhc3Nlc1thbGlnbl0pfVxyXG4gICAgICAgIHsuLi5jYXJkQ29udGVudFByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkQmFzZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdjZW50ZXInLFxyXG4gIGNhcmRDb250ZW50UHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQ2FyZEJhc2UucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNoaWxkcmVuIGNvbnRlbnQgb2YgdGhlIGJhc2ljIGNhcmRcclxuICAgKi9cclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHNob3cgY3VzdG9tIHNoYWRvd1xyXG4gICAqL1xyXG4gIHdpdGhTaGFkb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gcmVuZGVyIHRoZSBjYXJkIHdpdGhvdXQgc2hhZG93XHJcbiAgICovXHJcbiAgbm9TaGFkb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gaGlkZSB0aGUgY2FyZCBib3JkZXJzXHJcbiAgICovXHJcbiAgbm9Cb3JkZXI6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gc2hvdyB0cmFuc3BhcmVudCBiYWNrZ3JvdW5kXHJcbiAgICovXHJcbiAgbm9CZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBsaWZ0IHVwIG9uIGhvdmVyXHJcbiAgICovXHJcbiAgbGlmdFVwOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudCBhbGlnbm1lbnRcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBDYXJkQ29udGVudCBjb21wb25lbnRcclxuICAgKi9cclxuICBjYXJkQ29udGVudFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEJhc2U7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRCYXNlJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSwgRGVzY3JpcHRpb25MaXN0SWNvbiB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBjYXRlZ29yeSBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZENhdGVnb3J5ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgaWNvbiwgdGl0bGUsIGFsaWduLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEJhc2UgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8RGVzY3JpcHRpb25MaXN0SWNvbiBpY29uPXtpY29ufSB0aXRsZT17dGl0bGV9IGFsaWduPXthbGlnbn0gLz5cclxuICAgIDwvQ2FyZEJhc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRDYXRlZ29yeS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdjZW50ZXInLFxyXG59O1xyXG5cclxuQ2FyZENhdGVnb3J5LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEljb24gdG8gc2hvdyBpbnNpZGUgdGhlIGNhdGVnb3J5IGNhcmRcclxuICAgKi9cclxuICBpY29uOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIENhdGVnb3J5IHRpdGxlIHRvIHNob3cgaW5zaWRlIHRoZSBjYXRlZ29yeSBjYXJkXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudCBhbGlnbm1lbnRcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkQ2F0ZWdvcnk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRDYXRlZ29yeSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgY29sb3JzLCBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQXJyb3dSaWdodEFsdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHRBbHQnO1xyXG5pbXBvcnQgeyBJY29uQWx0ZXJuYXRlIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBmb250V2VpZ2h0NzAwOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxuICBoZWFkaW5nOntcclxuICAgIGZvbnRTaXplOlwiMjRweFwiXHJcbiAgfSxcclxuICBjYXRlZ29yeUljb25CdXR0b246IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICB9LFxyXG4gIHN1YmhlYWRpbmc6e31cclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBjYXRlZ29yeSBsaW5rIGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkQ2F0ZWdvcnlMaW5rID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGZvbnRJY29uQ2xhc3MsXHJcbiAgICBjb2xvcixcclxuICAgIHRpdGxlLFxyXG4gICAgc3VidGl0bGUsXHJcbiAgICBocmVmLFxyXG4gICAgYWxpZ24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBpY29uQWx0ZXJuYXRlUHJvcHMsXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgbGV0IGp1c3RpZnlHcmlkID0gJ2ZsZXgtc3RhcnQnO1xyXG4gIGlmIChhbGlnbiA9PT0gJ2NlbnRlcicpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gJ2NlbnRlcic7XHJcbiAgfSBlbHNlIGlmIChhbGlnbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAganVzdGlmeUdyaWQgPSAnZmxleC1lbmQnO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRCYXNlXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcImNhcmQtY2F0ZWdvcnktbGlua1wiLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBjbGFzc05hbWU9J2NhcmQtY2F0ZWdvcnktbGlua19fd3JhcHBlcic+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5Q29udGVudD17anVzdGlmeUdyaWR9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxJY29uQWx0ZXJuYXRlXHJcbiAgICAgICAgICAgICAgZm9udEljb25DbGFzcz17Zm9udEljb25DbGFzc31cclxuICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgICAgICAgICAgc2l6ZT0nbWVkaXVtJ1xyXG4gICAgICAgICAgICAgIHsuLi5pY29uQWx0ZXJuYXRlUHJvcHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0naDYnXHJcbiAgICAgICAgICAgICAgY29sb3I9J3RleHRQcmltYXJ5J1xyXG4gICAgICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5mb250V2VpZ2h0NzAwKX1cclxuICAgICAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAge3N1YnRpdGxlICYmIChcclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MSdcclxuICAgICAgICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJoZWFkaW5nfVxyXG4gICAgICAgICAgICAgICAgY29sb3I9J3RleHRQcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgey4uLnN1YnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgIFwiY2FyZC1jYXRlZ29yeS1saW5rX19pdGVtXCIsXHJcbiAgICAgICAgICAgIGNsYXNzZXMuY2F0ZWdvcnlJY29uQnV0dG9uXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT0nY2FyZC1jYXRlZ29yeS1saW5rX19pY29uLWJ1dHRvbic+XHJcbiAgICAgICAgICAgIDxBcnJvd1JpZ2h0QWx0SWNvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2FyZC1jYXRlZ29yeS1saW5rX19pY29uJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiM1MTIwZmZcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC8+XHJcbiAgICA8L0NhcmRCYXNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkQ2F0ZWdvcnlMaW5rLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2xlZnQnLFxyXG4gIGhyZWY6ICcjJyxcclxuICBpY29uQWx0ZXJuYXRlUHJvcHM6IHt9LFxyXG4gIHRpdGxlUHJvcHM6IHt9LFxyXG4gIHN1YnRpdGxlUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQ2FyZENhdGVnb3J5TGluay5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBQcm9tbyB0aXRsZSB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gc3VidGl0bGUgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBQcm9tbyBkZXNjcmlwdGlvbiB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBQcm9tbyBmb250IGljb24gY2xhc3MgbmFtZSB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGZvbnRJY29uQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gaWNvbiBjb2xvciB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgY29sb3JzLnJlZCxcclxuICAgIGNvbG9ycy5waW5rLFxyXG4gICAgY29sb3JzLnB1cnBsZSxcclxuICAgIGNvbG9ycy5kZWVwUHVycGxlLFxyXG4gICAgY29sb3JzLmluZGlnbyxcclxuICAgIGNvbG9ycy5ibHVlLFxyXG4gICAgY29sb3JzLmxpZ2h0Qmx1ZSxcclxuICAgIGNvbG9ycy5jeWFuLFxyXG4gICAgY29sb3JzLnRlYWwsXHJcbiAgICBjb2xvcnMuZ3JlZW4sXHJcbiAgICBjb2xvcnMubGlnaHRHcmVlbixcclxuICAgIGNvbG9ycy5saW1lLFxyXG4gICAgY29sb3JzLnllbGxvdyxcclxuICAgIGNvbG9ycy5hbWJlcixcclxuICAgIGNvbG9ycy5vcmFuZ2UsXHJcbiAgICBjb2xvcnMuZGVlcE9yYW5nZSxcclxuICAgIGNvbG9ycy5icm93bixcclxuICAgIGNvbG9ycy5ncmV5LFxyXG4gICAgY29sb3JzLmJsdWVHcmV5LFxyXG4gIF0pLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRlbnQgYWxpZ25tZW50XHJcbiAgICovXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJ10pLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgSWNvbkFsdGVybmF0ZSBjb21wb25lbnRcclxuICAgKi9cclxuICBpY29uQWx0ZXJuYXRlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBzdWJ0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkQ2F0ZWdvcnlMaW5rO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkQ2F0ZWdvcnlMaW5rJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge1xyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUF2YXRhcixcclxuICBBdmF0YXIsXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgQ2FyZEJhc2UgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgZG90OiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgZG90QmlnOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIGRvdFNtYWxsOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxIC8gMiksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gIH0sXHJcbiAgam9iVGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICB9LFxyXG4gIGRvdE1hcmdpbjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgam9iIGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkSm9iID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGJhZGdlQ29sb3IsXHJcbiAgICBiYWRnZVRpdGxlLFxyXG4gICAgam9iVGl0bGUsXHJcbiAgICBqb2JMb2NhdGlvbixcclxuICAgIGpvYlR5cGUsXHJcbiAgICBqb2JEYXRlLFxyXG4gICAgY29tcGFueUxvZ28sXHJcbiAgICBjb21wYW55TmFtZSxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2NhcmQtam9iJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICBhbGlnbj1cImxlZnRcIlxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB4cz17MTJ9PlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZG90LCBjbGFzc2VzLmRvdEJpZyl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGJhZGdlQ29sb3IgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJzcGFuXCIgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxyXG4gICAgICAgICAgICB7YmFkZ2VUaXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmpvYlRpdGxlfT5cclxuICAgICAgICAgICAge2pvYlRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtqb2JMb2NhdGlvbn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRvdCwgY2xhc3Nlcy5kb3RTbWFsbCwgY2xhc3Nlcy5kb3RNYXJnaW4pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2pvYlR5cGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxMaXN0SXRlbSBkaXNhYmxlR3V0dGVycz5cclxuICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICA8QXZhdGFyIHNyYz17Y29tcGFueUxvZ299IGFsdD17Y29tcGFueU5hbWV9IC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2NvbXBhbnlOYW1lfSBzZWNvbmRhcnk9e2pvYkRhdGV9IC8+XHJcbiAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICA8L0NhcmRCYXNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkSm9iLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEJhZGdlIGNvbG9yIG9mIHRoZSBqb2IgY2FyZFxyXG4gICAqL1xyXG4gIGJhZGdlQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBCYWRnZSB0aXRsZSBvZiB0aGUgam9iIGNhcmRcclxuICAgKi9cclxuICBiYWRnZVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIHRpdGxlIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgbG9jYXRpb24gb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JMb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiB0eXBlIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iVHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiBsb2NhdGlvbiBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYkRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDb21wYW55IGxvZ28gb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBjb21wYW55TG9nbzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIENvbXBhbnkgbmFtZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGNvbXBhbnlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkSm9iO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkSm9iJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCBBdmF0YXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5pbXBvcnQgeyBMZWFybk1vcmVMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgY29tcGFueUF2YXRhcjoge1xyXG4gICAgd2lkdGg6IDYwLFxyXG4gICAgaGVpZ2h0OiA2MCxcclxuICB9LFxyXG4gIGRvdDoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGRvdFNtYWxsOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxIC8gMiksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gIH0sXHJcbiAgY29tcGFueU5hbWU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICB9LFxyXG4gIGRvdE1hcmdpbjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgam9iIGNhcmQgY29tcGFueVxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRKb2JDb21wYW55ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGpvYlRpdGxlLFxyXG4gICAgam9iTG9jYXRpb24sXHJcbiAgICBjb21wYW55TG9nbyxcclxuICAgIGNvbXBhbnlOYW1lLFxyXG4gICAgam9ic0NvdW50LFxyXG4gICAgY29tcGFueUluZm8sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEJhc2VcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjYXJkLWNvbXBhbnknLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICBzcmM9e2NvbXBhbnlMb2dvfVxyXG4gICAgICAgICAgICBhbHQ9e2NvbXBhbnlOYW1lfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29tcGFueUF2YXRhcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wYW55TmFtZX0+XHJcbiAgICAgICAgICAgIHtjb21wYW55TmFtZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIHtqb2JUaXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRvdCwgY2xhc3Nlcy5kb3RTbWFsbCwgY2xhc3Nlcy5kb3RNYXJnaW4pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgzXCIgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cclxuICAgICAgICAgICAge2pvYkxvY2F0aW9ufVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8TGVhcm5Nb3JlTGluayB0aXRsZT17am9ic0NvdW50fSB2YXJpYW50PVwic3VidGl0bGUxXCIgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwic3BhblwiIHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICB7Y29tcGFueUluZm99XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NhcmRCYXNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkSm9iQ29tcGFueS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBKb2IgdGl0bGUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiBsb2NhdGlvbiBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYkxvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQ29tcGFueSBsb2dvIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgY29tcGFueUxvZ286IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDb21wYW55IG5hbWUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBjb21wYW55TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIENvdW50IG9mIHRoZSBqb2JzIGluIHRoZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYnNDb3VudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIENvbXBhbnkgaW5mbyBpbiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGNvbXBhbnlJbmZvOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkSm9iQ29tcGFueTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZEpvYkNvbXBhbnknO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGNvbG9ycywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGJvcmRlcjogYHNvbGlkIDFweCByZ2JhKDQzLCA0MSwgNDUsIDAuMilgLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIH0sXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICAnMCAxMXB4IDU1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDcpLCAwIDEzcHggMThweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSknLFxyXG4gICAgICAnJiAuY2FyZC1qb2ItbWluaW1hbF9fdGl0bGUsICYgLmNhcmQtam9iLW1pbmltYWxfX2xvY2F0aW9uLCAmIC5jYXJkLWpvYi1taW5pbWFsX19hcnJvdyc6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcmRKb2JNaW5pbWFsQm9keToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBqb2IgY2FyZCBjb21wYW55XHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZEpvYk1pbmltYWwgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdGl0bGUsXHJcbiAgICBzdWJ0aXRsZSxcclxuICAgIHNob3dBcnJvdyxcclxuICAgIHRpdGxlUHJvcHMsXHJcbiAgICBzdWJ0aXRsZVByb3BzLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCAnY2FyZC1qb2ItbWluaW1hbCcpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5jYXJkSm9iTWluaW1hbEJvZHksICdjYXJkLWpvYi1taW5pbWFsX19ib2R5Jyl9XHJcbiAgICAgICAgc3R5bGU9eyFzaG93QXJyb3cgPyB7IG1hcmdpblJpZ2h0OiAwIH0gOiB7fX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1qb2ItbWluaW1hbF9fdGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMudGl0bGUsICdjYXJkLWpvYi1taW5pbWFsX190aXRsZScpfVxyXG4gICAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1qb2ItbWluaW1hbF9fbG9jYXRpb24tY29uYXRpbmVyXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWpvYi1taW5pbWFsX19sb2NhdGlvblwiXHJcbiAgICAgICAgICAgIHsuLi5zdWJ0aXRsZVByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0Fycm93ID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1qb2ItbWluaW1hbF9fYXJyb3ctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICBmb250SWNvbkNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCJcclxuICAgICAgICAgICAgZm9udEljb25Db2xvcj17Y29sb3JzLmdyZXlbNzAwXX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1qb2ItbWluaW1hbF9fYXJyb3dcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZEpvYk1pbmltYWwuZGVmYXVsdFByb3BzID0ge1xyXG4gIHNob3dBcnJvdzogZmFsc2UsXHJcbiAgdGl0bGVQcm9wczoge30sXHJcbiAgc3VidGl0bGVQcm9wczoge30sXHJcbn07XHJcblxyXG5DYXJkSm9iTWluaW1hbC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBKb2IgdGl0bGUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiBzdWJ0aXRsZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU2hvdWxkIHNob3cgYXJyb3cgb3Igbm90XHJcbiAgICovXHJcbiAgc2hvd0Fycm93OiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHN1YnRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRKb2JNaW5pbWFsO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkSm9iTWluaW1hbCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgY29sb3JzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm9yZGVyUmlnaHQ6IGAke3RoZW1lLnNwYWNpbmcoMSl9cHggc29saWQgJHtjb2xvcnMucmVkWzUwMF19YCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBkb3RCaWc6IHtcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgZG90U21hbGw6IHtcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygxIC8gMiksXHJcbiAgfSxcclxuICBqb2JUaXRsZToge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gIH0sXHJcbiAgZG90TWFyZ2luOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgfSxcclxuICB0YWc6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxIC8gMiksXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICB9LFxyXG4gIHRleHRXaGl0ZToge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBqb2IgY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRKb2JUYWcgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgYmFkZ2VDb2xvcixcclxuICAgIGJhZGdlVGl0bGUsXHJcbiAgICBqb2JUaXRsZSxcclxuICAgIGpvYkxvY2F0aW9uLFxyXG4gICAgam9iVHlwZSxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZSBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSBhbGlnbj1cImxlZnRcIiB7Li4ucmVzdH0+XHJcbiAgICAgIDw+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgeHM9ezEyfT5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWd9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmFkZ2VDb2xvcixcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYmFkZ2VDb2xvcixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0V2hpdGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YmFkZ2VUaXRsZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMuam9iVGl0bGV9PlxyXG4gICAgICAgICAgICB7am9iVGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgeHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2pvYkxvY2F0aW9ufVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZG90LCBjbGFzc2VzLmRvdFNtYWxsLCBjbGFzc2VzLmRvdE1hcmdpbil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7am9iVHlwZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPC8+XHJcbiAgICA8L0NhcmRCYXNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkSm9iVGFnLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEJhZGdlIGNvbG9yIG9mIHRoZSBqb2IgY2FyZFxyXG4gICAqL1xyXG4gIGJhZGdlQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBCYWRnZSB0aXRsZSBvZiB0aGUgam9iIGNhcmRcclxuICAgKi9cclxuICBiYWRnZVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIHRpdGxlIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgbG9jYXRpb24gb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JMb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiB0eXBlIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iVHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEpvYlRhZztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZEpvYlRhZyc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgTGlzdEl0ZW0sIERpdmlkZXIsIExpc3QsIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGZlYXR1cmVDaGVjazoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBqb2IgY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRQcmljaW5nU3RhbmRhcmQgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdGl0bGUsXHJcbiAgICBzdWJ0aXRsZSxcclxuICAgIHByaWNlQ29tcG9uZW50LFxyXG4gICAgZmVhdHVyZUNoZWNrQ29tcG9uZW50LFxyXG4gICAgZmVhdHVyZXMsXHJcbiAgICBjdGEsXHJcbiAgICBkaXNjbGFpbWVyLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdGl0bGVQcm9wcyxcclxuICAgIHN1YnRpdGxlUHJvcHMsXHJcbiAgICBkaXNjbGFpbWVyUHJvcHMsXHJcbiAgICBmZWF0dXJlVGl0bGVQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2NhcmQtcHJpY2luZy1zdGFuZGFyZCcsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgYWxpZ249XCJsZWZ0XCJcclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX3dyYXBwZXJcIj5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19oZWFkbGluZVwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcclxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fdGl0bGVcIlxyXG4gICAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAge3N1YnRpdGxlICYmIChcclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fc3VidGl0bGVcIlxyXG4gICAgICAgICAgICAgIHsuLi5zdWJ0aXRsZVByb3BzfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19kaXZpZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19kaXZpZGVyXCIgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fY29udGVudFwiPlxyXG4gICAgICAgICAge3ByaWNlQ29tcG9uZW50fVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICB7ZmVhdHVyZXMgJiYgKFxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fZmVhdHVyZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxMaXN0IGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fZmVhdHVyZS1saXN0XCI+XHJcbiAgICAgICAgICAgICAge2ZlYXR1cmVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlR3V0dGVyc1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2ZlYXR1cmUtbGlzdC1pdGVtXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2ZlYXR1cmVDaGVja0NvbXBvbmVudCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnY2FyZC1wcmljaW5nLXN0YW5kYXJkX19mZWF0dXJlLWNoZWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5mZWF0dXJlQ2hlY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlQ2hlY2tDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2ZlYXR1cmUtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5mZWF0dXJlVGl0bGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19jdGEtd3JhcHBlclwiPlxyXG4gICAgICAgICAge2N0YX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAge2Rpc2NsYWltZXIgJiYgKFxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fZGlzY2xhaW1lci13cmFwcGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fZGlzY2xhaW1lci10aXRsZVwiXHJcbiAgICAgICAgICAgICAgey4uLmRpc2NsYWltZXJQcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkaXNjbGFpbWVyfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZFByaWNpbmdTdGFuZGFyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGl0bGVQcm9wczoge30sXHJcbiAgc3VidGl0bGVQcm9wczoge30sXHJcbiAgZGlzY2xhaW1lclByb3BzOiB7fSxcclxuICBmZWF0dXJlVGl0bGVQcm9wczoge30sXHJcbn07XHJcblxyXG5DYXJkUHJpY2luZ1N0YW5kYXJkLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiAgRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaXRsZSBvZiB0aGUgcHJpY2luZyBjYXJkXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiAgU3VidGl0bGUgb2YgdGhlIHByaWNpbmcgY2FyZFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBwcmljaW5nIGNvbXBvbmVudCBvZiB0aGUgcHJpY2luZyBjYXJkXHJcbiAgICovXHJcbiAgcHJpY2VDb21wb25lbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGZlYXR1cmVzIGNoZWNrIGNvbXBvbmVudCBvZiB0aGUgcHJpY2luZyBjYXJkXHJcbiAgICovXHJcbiAgZmVhdHVyZUNoZWNrQ29tcG9uZW50OiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBGZWF0dXJlcyBhcnJheSBvZiB0aGUgcHJpY2luZyBjYXJkXHJcbiAgICovXHJcbiAgZmVhdHVyZXM6IFByb3BUeXBlcy5hcnJheSxcclxuICAvKipcclxuICAgKiAgQ1RBIGJ1dHRvbiBvZiB0aGUgcHJpY2luZyBjYXJkXHJcbiAgICovXHJcbiAgY3RhOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIERpY2xhaW1lciBvZiB0aGUgcHJpY2luZyBjYXJkXHJcbiAgICovXHJcbiAgZGlzY2xhaW1lcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHN1YnRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIGRpc2NsYWltZXIgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBkaXNjbGFpbWVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBmZWF0dXJlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgZmVhdHVyZVRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUHJpY2luZ1N0YW5kYXJkO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkUHJpY2luZ1N0YW5kYXJkJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZE1lZGlhIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIHdpdGhTaGFkb3c6IHtcclxuICAgIGJveFNoYWRvdzogYDAgMnB4IDEwcHggMCAke3RoZW1lLnBhbGV0dGUuY2FyZFNoYWRvd31gLFxyXG4gIH0sXHJcbiAgbm9TaGFkb3c6IHtcclxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gIH0sXHJcbiAgbm9Cb3JkZXI6IHtcclxuICAgIGJvcmRlcjogMCxcclxuICB9LFxyXG4gIG5vQmc6IHtcclxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgfSxcclxuICBsaWZ0VXA6IHtcclxuICAgIHRyYW5zaXRpb246XHJcbiAgICAgICdib3gtc2hhZG93IC4yNXMgZWFzZSx0cmFuc2Zvcm0gLjI1cyBlYXNlLC13ZWJraXQtdHJhbnNmb3JtIC4yNXMgZWFzZScsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgICcwIDEuNXJlbSAyLjVyZW0gcmdiYSgyMiwyOCw0NSwuMSksMCAuM3JlbSAwLjVyZW0gLS41MHJlbSByZ2JhKDIyLDI4LDQ1LC4wNSkgIWltcG9ydGFudCcsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsLTVweCwwKScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWVkaWE6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgaGVpZ2h0OiAzMDAsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDQsIDIpLFxyXG4gICAgJyY6bGFzdC1jaGlsZCc6IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg0LCAyKSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiwgMyksXHJcbiAgICAgICcmOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2LCAzKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsZWZ0OiB7XHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgfSxcclxuICByaWdodDoge1xyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcclxuICB9LFxyXG4gIGNlbnRlcjoge1xyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBwcm9kdWN0IGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkUHJvZHVjdCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBtZWRpYUNsYXNzTmFtZSxcclxuICAgIHdpdGhTaGFkb3csXHJcbiAgICBub1NoYWRvdyxcclxuICAgIG5vQm9yZGVyLFxyXG4gICAgbm9CZyxcclxuICAgIGxpZnRVcCxcclxuICAgIGNhcmRDb250ZW50LFxyXG4gICAgbWVkaWFDb250ZW50LFxyXG4gICAgYWxpZ24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZFxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgJ2NhcmQtcHJvZHVjdCcsXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIHdpdGhTaGFkb3cgPyBjbGFzc2VzLndpdGhTaGFkb3cgOiB7fSxcclxuICAgICAgICBub1NoYWRvdyA/IGNsYXNzZXMubm9TaGFkb3cgOiB7fSxcclxuICAgICAgICBub0JvcmRlciA/IGNsYXNzZXMubm9Cb3JkZXIgOiB7fSxcclxuICAgICAgICBub0JnID8gY2xhc3Nlcy5ub0JnIDoge30sXHJcbiAgICAgICAgbGlmdFVwID8gY2xhc3Nlcy5saWZ0VXAgOiB7fSxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjYXJkLXByb2R1Y3RfX21lZGlhJywgY2xhc3Nlcy5tZWRpYSwgbWVkaWFDbGFzc05hbWUpfVxyXG4gICAgICA+XHJcbiAgICAgICAge21lZGlhQ29udGVudH1cclxuICAgICAgPC9DYXJkTWVkaWE+XHJcbiAgICAgIDxDYXJkQ29udGVudFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICdjYXJkLXByb2R1Y3RfX2NvbnRlbnQnLFxyXG4gICAgICAgICAgY2xhc3Nlcy5jb250ZW50LFxyXG4gICAgICAgICAgY2xhc3Nlc1thbGlnbl0sXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjYXJkQ29udGVudH1cclxuICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZFByb2R1Y3QuZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsaWduOiAnbGVmdCcsXHJcbn07XHJcblxyXG5DYXJkUHJvZHVjdC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzIGZvciB0aGUgbWVkaWFcclxuICAgKi9cclxuICBtZWRpYUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHNob3cgY3VzdG9tIHNoYWRvd1xyXG4gICAqL1xyXG4gIHdpdGhTaGFkb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gcmVuZGVyIHRoZSBjYXJkIHdpdGhvdXQgc2hhZG93XHJcbiAgICovXHJcbiAgbm9TaGFkb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gaGlkZSB0aGUgY2FyZCBib3JkZXJzXHJcbiAgICovXHJcbiAgbm9Cb3JkZXI6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gc2hvdyB0cmFuc3BhcmVudCBiYWNrZ3JvdW5kXHJcbiAgICovXHJcbiAgbm9CZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBsaWZ0IHVwIG9uIGhvdmVyXHJcbiAgICovXHJcbiAgbGlmdFVwOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBUaGUgQ2FyZCBjb250ZW50XHJcbiAgICovXHJcbiAgY2FyZENvbnRlbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgQ2FyZCBNZWRpYSBjb250ZW50XHJcbiAgICovXHJcbiAgbWVkaWFDb250ZW50OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRlbnQgYWxpZ25tZW50XHJcbiAgICovXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJ10pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFByb2R1Y3Q7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRQcm9kdWN0JztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCBjb2xvcnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IEljb25BbHRlcm5hdGUgfSBmcm9tICdjb21wb25lbnRzL21vbGVjdWxlcyc7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGZvbnRXZWlnaHQ3MDA6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICB9LFxyXG4gIHRleHRCbHVlOiB7XHJcbiAgICBjb2xvcjogXCIjNTEyMEZGXCIsXHJcbiAgfSxcclxuICBpbWdGbHVpZDpcclxuICB7XHJcbiAgICB3aWR0aDpcIjUwcHhcIixcclxuICAgIGhlaWdodDpcIjUwcHhcIlxyXG4gIH0sXHJcbiAgcGJfMDoge1xyXG4gICAgcGFkZGluZ0JvdHRvbTogXCIwICFpbXBvcnRhbnRcIixcclxuICB9LFxyXG4gIHBiX3B0XzA6IHtcclxuICAgIHBhZGRpbmdUb3A6IFwiMCAhaW1wb3J0YW50XCIsXHJcbiAgICBwYWRkaW5nQm90dG9tOiBcIjAgIWltcG9ydGFudFwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgcHJvbW8gY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRQcm9tbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlQ29sb3IsXHJcbiAgICBmb250SWNvbkNsYXNzLFxyXG4gICAgY29sb3IsXHJcbiAgICB0aXRsZSxcclxuICAgIHN1YnRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBhbGlnbixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHNyYyxcclxuICAgIGljb25BbHRlcm5hdGVQcm9wcyxcclxuICAgIHRpdGxlUHJvcHMsXHJcbiAgICBzdWJ0aXRsZVByb3BzLFxyXG4gICAgZGVzY3JpcHRpb25Qcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgbGV0IGp1c3RpZnlHcmlkID0gXCJmbGV4LXN0YXJ0XCI7XHJcbiAgaWYgKGFsaWduID09PSBcImNlbnRlclwiKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9IFwiY2VudGVyXCI7XHJcbiAgfSBlbHNlIGlmIChhbGlnbiA9PT0gXCJyaWdodFwiKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9IFwiZmxleC1lbmRcIjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXCJjYXJkX19wcm9tb1wiLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gY2xhc3NOYW1lPSdjYXJkLXByb21vX193cmFwcGVyJz5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17anVzdGlmeUdyaWR9XHJcbiAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9J2NhcmQtcHJvbW9fX2ljb24td3JhcHBlcidcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz17c3JjfSBhbHQ9e3NyY30gY2xhc3NOYW1lPXtjbGFzc2VzLmltZ0ZsdWlkfS8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXCJjYXJkLXByb21vX190aXRsZS13cmFwcGVyXCIsIGNsYXNzZXMucGJfMCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD0naDQnXHJcbiAgICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgIFwiY2FyZC1wcm9tb19fdGl0bGVcIixcclxuICAgICAgICAgICAgICBjbGFzc2VzLmZvbnRXZWlnaHQ3MDAsXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcy50ZXh0Qmx1ZVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICB7c3VidGl0bGUgJiYgKFxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcImNhcmQtcHJvbW9fX3N1YnRpdGxlLXdyYXBwZXJcIiwgY2xhc3Nlcy5wYl9wdF8wKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICB2YXJpYW50PSdoNidcclxuICAgICAgICAgICAgICBjb2xvcj0ndGV4dFByaW1hcnknXHJcbiAgICAgICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcImNhcmQtcHJvbW9fX3N1YnRpdGxlXCIsIGNsYXNzZXMuZm9udFdlaWdodDcwMCl9XHJcbiAgICAgICAgICAgICAgey4uLnN1YnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFwiY2FyZC1wcm9tb19fZGVzY3JpcHRpb24td3JhcHBlclwiLCBjbGFzc2VzLnBiX3B0XzApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2JvZHkxJ1xyXG4gICAgICAgICAgICAgIGNvbG9yPSd0ZXh0UHJpbWFyeSdcclxuICAgICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXJkLXByb21vX19kZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICB7Li4uZGVzY3JpcHRpb25Qcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ2FyZEJhc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRQcm9tby5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdsZWZ0JyxcclxuICBpY29uQWx0ZXJuYXRlUHJvcHM6IHt9LFxyXG4gIHRpdGxlUHJvcHM6IHt9LFxyXG4gIHN1YnRpdGxlUHJvcHM6IHt9LFxyXG4gIGRlc2NyaXB0aW9uUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQ2FyZFByb21vLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIHRpdGxlIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBQcm9tbyBzdWJ0aXRsZSB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIGRlc2NyaXB0aW9uIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gZm9udCBpY29uIGNsYXNzIG5hbWUgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBmb250SWNvbkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIGljb24gY29sb3IgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgIGNvbG9ycy5yZWQsXHJcbiAgICBjb2xvcnMucGluayxcclxuICAgIGNvbG9ycy5wdXJwbGUsXHJcbiAgICBjb2xvcnMuZGVlcFB1cnBsZSxcclxuICAgIGNvbG9ycy5pbmRpZ28sXHJcbiAgICBjb2xvcnMuYmx1ZSxcclxuICAgIGNvbG9ycy5saWdodEJsdWUsXHJcbiAgICBjb2xvcnMuY3lhbixcclxuICAgIGNvbG9ycy50ZWFsLFxyXG4gICAgY29sb3JzLmdyZWVuLFxyXG4gICAgY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICBjb2xvcnMubGltZSxcclxuICAgIGNvbG9ycy55ZWxsb3csXHJcbiAgICBjb2xvcnMuYW1iZXIsXHJcbiAgICBjb2xvcnMub3JhbmdlLFxyXG4gICAgY29sb3JzLmRlZXBPcmFuZ2UsXHJcbiAgICBjb2xvcnMuYnJvd24sXHJcbiAgICBjb2xvcnMuZ3JleSxcclxuICAgIGNvbG9ycy5ibHVlR3JleSxcclxuICBdKS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250ZW50IGFsaWdubWVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxuICAvKipcclxuICAgKiBUaXRsZSBjb2xvclxyXG4gICAqL1xyXG4gIHRpdGxlQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBJY29uQWx0ZXJuYXRlIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGljb25BbHRlcm5hdGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHN1YnRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIGRlc2NpcHRpb24gVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBkZXNjcmlwdGlvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFByb21vO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkUHJvbW8nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcbiAgR3JpZCxcclxuICBBdmF0YXIsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtQXZhdGFyLFxyXG4gIExpc3RJdGVtVGV4dCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHJldmlldyBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZFJldmlldyA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpY29uLFxyXG4gICAgdGV4dCxcclxuICAgIGF1dGhvclBob3RvLFxyXG4gICAgYXV0aG9yTmFtZSxcclxuICAgIGF1dGhvclRpdGxlLFxyXG4gICAgYWxpZ24sXHJcbiAgICB0ZXh0VmFyaWFudCxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHRleHRQcm9wcyxcclxuICAgIGxpc3RJdGVtUHJpbWFyeVR5cG9ncmFwaHlQcm9wcyxcclxuICAgIGxpc3RJdGVtU2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBsZXQganVzdGlmeUdyaWQgPSAnY2VudGVyJztcclxuICBpZiAoYWxpZ24gPT09ICdsZWZ0Jykge1xyXG4gICAganVzdGlmeUdyaWQgPSAnZmxleC1zdGFydCc7XHJcbiAgfSBlbHNlIGlmIChhbGlnbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAganVzdGlmeUdyaWQgPSAnZmxleC1lbmQnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2NhcmQtcmV2aWV3JywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X193cmFwcGVyXCI+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9e2p1c3RpZnlHcmlkfVxyXG4gICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2ljb24td3JhcHBlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2ljb259XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fdGV4dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PXt0ZXh0VmFyaWFudH1cclxuICAgICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgey4uLnRleHRQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RleHR9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fbGl0cy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17anVzdGlmeUdyaWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X19saXN0LXdyYXBwZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGlzdCBkaXNhYmxlUGFkZGluZyBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXIgY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2xpc3QtaXRlbS1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5hdXRob3JQaG90b31cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2F1dGhvck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2F2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fbGlzdC1pdGVtLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PXthdXRob3JOYW1lfVxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e2F1dGhvclRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5VHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ubGlzdEl0ZW1QcmltYXJ5VHlwb2dyYXBoeVByb3BzLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAuLi5saXN0SXRlbVNlY29uZGFyeVR5cG9ncmFwaHlQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZFJldmlldy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdjZW50ZXInLFxyXG4gIHRleHRWYXJpYW50OiAnaDYnLFxyXG4gIHRleHRQcm9wczoge30sXHJcbiAgbGlzdEl0ZW1QcmltYXJ5VHlwb2dyYXBoeVByb3BzOiB7fSxcclxuICBsaXN0SXRlbVNlY29uZGFyeVR5cG9ncmFwaHlQcm9wczoge30sXHJcbn07XHJcblxyXG5DYXJkUmV2aWV3LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEljb24gdG8gc2hvdyBpbnNpZGUgdGhlIHJldmlldyBjYXJkXHJcbiAgICovXHJcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBSZXZpZXcgdGV4dCB0byBzaG93IGluc2lkZSB0aGUgcmV2aWV3IGNhcmRcclxuICAgKi9cclxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUmV2aWV3ZXIgcGhvdG8gdG8gc2hvdyBpbnNpZGUgdGhlIHJldmlldyBjYXJkLlNob3VsZCBiZSBhbiBvYmplY3Qgd2l0aCBzcmMgYW5kIHNyY1NldCBwcm9wZXJ0aWVzXHJcbiAgICovXHJcbiAgYXV0aG9yUGhvdG86IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBSZXZpZXdlciBuYW1lIHRvIHNob3cgaW5zaWRlIHRoZSByZXZpZXcgY2FyZFxyXG4gICAqL1xyXG4gIGF1dGhvck5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBSZXZpZXdlciB0aXRsZSB0byBzaG93IGluc2lkZSB0aGUgcmV2aWV3IGNhcmRcclxuICAgKi9cclxuICBhdXRob3JUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBBbGlnbm1lbnQgb2YgdGhlIGNvbnRlbnRcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbiAgLyoqXHJcbiAgICogUmV2aWV3IHRleHQgdmFyaWFudFxyXG4gICAqL1xyXG4gIHRleHRWYXJpYW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgdGV4dCBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRleHRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIGxpc3QgaXRlbSBwcmltYXJ5IHRleHQgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBsaXN0SXRlbVByaW1hcnlUeXBvZ3JhcGh5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBsaXN0IGl0ZW0gc2Vjb25kYXJ5IHRleHQgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBsaXN0SXRlbVNlY29uZGFyeVR5cG9ncmFwaHlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRSZXZpZXc7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRSZXZpZXcnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgR3JpZCwgQnV0dG9uLCBUZXh0RmllbGQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICd2YWxpZGF0ZS5qcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBzY2hlbWEgPSB7XHJcbiAgZnVsbG5hbWU6IHtcclxuICAgIHByZXNlbmNlOiB7IGFsbG93RW1wdHk6IGZhbHNlLCBtZXNzYWdlOiAnaXMgcmVxdWlyZWQnIH0sXHJcbiAgICBsZW5ndGg6IHtcclxuICAgICAgbWF4aW11bTogMTI4LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICBwcmVzZW5jZTogeyBhbGxvd0VtcHR5OiBmYWxzZSwgbWVzc2FnZTogJ2lzIHJlcXVpcmVkJyB9LFxyXG4gICAgZW1haWw6IHRydWUsXHJcbiAgICBsZW5ndGg6IHtcclxuICAgICAgbWF4aW11bTogMzAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1lc3NhZ2U6IHtcclxuICAgIHByZXNlbmNlOiB7IGFsbG93RW1wdHk6IGZhbHNlLCBtZXNzYWdlOiAnaXMgcmVxdWlyZWQnIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgdmFsdWVzOiB7fSxcclxuICAgIHRvdWNoZWQ6IHt9LFxyXG4gICAgZXJyb3JzOiB7fSxcclxuICB9KTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVycm9ycyA9IHZhbGlkYXRlKGZvcm1TdGF0ZS52YWx1ZXMsIHNjaGVtYSk7XHJcblxyXG4gICAgc2V0Rm9ybVN0YXRlKGZvcm1TdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5mb3JtU3RhdGUsXHJcbiAgICAgIGlzVmFsaWQ6IGVycm9ycyA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgZXJyb3JzOiBlcnJvcnMgfHwge30sXHJcbiAgICB9KSk7XHJcbiAgfSwgW2Zvcm1TdGF0ZS52YWx1ZXNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgZXZlbnQucGVyc2lzdCgpO1xyXG5cclxuICAgIHNldEZvcm1TdGF0ZShmb3JtU3RhdGUgPT4gKHtcclxuICAgICAgLi4uZm9ybVN0YXRlLFxyXG4gICAgICB2YWx1ZXM6IHtcclxuICAgICAgICAuLi5mb3JtU3RhdGUudmFsdWVzLFxyXG4gICAgICAgIFtldmVudC50YXJnZXQubmFtZV06XHJcbiAgICAgICAgICBldmVudC50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94J1xyXG4gICAgICAgICAgICA/IGV2ZW50LnRhcmdldC5jaGVja2VkXHJcbiAgICAgICAgICAgIDogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgICB0b3VjaGVkOiB7XHJcbiAgICAgICAgLi4uZm9ybVN0YXRlLnRvdWNoZWQsXHJcbiAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYXNFcnJvciA9IGZpZWxkID0+XHJcbiAgICBmb3JtU3RhdGUudG91Y2hlZFtmaWVsZF0gJiYgZm9ybVN0YXRlLmVycm9yc1tmaWVsZF0gPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBuYW1lPVwiY29udGFjdC1mb3JtXCJcclxuICAgICAgICBtZXRob2Q9XCJwb3N0XCJcclxuICAgICAgICBhY3Rpb249XCIvc3VibWl0aW9uLmh0bWw/Y29udGFjdC1mb3JtLXN1Ym1pdC1zdWNjZXNzPXRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybS1uYW1lXCIgdmFsdWU9XCJjb250YWN0LWZvcm1cIiAvPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPkNvbnRhY3QgVXM8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIFdlIGNhcmVmdWxseSByZWFkIGFuZCBhbnN3ZXIgdG8gYWxsIG91ciBlbWFpbHMuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJGdWxsIE5hbWUgKlwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZnVsbG5hbWVcIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIGhlbHBlcnRleHQ9e1xyXG4gICAgICAgICAgICAgICAgaGFzRXJyb3IoJ2Z1bGxuYW1lJykgPyBmb3JtU3RhdGUuZXJyb3JzLmZ1bGxuYW1lWzBdIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlcnJvcj17aGFzRXJyb3IoJ2Z1bGxuYW1lJyl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS52YWx1ZXMuZnVsbG5hbWUgfHwgJyd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLW1haWxcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRS1tYWlsICpcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBoZWxwZXJ0ZXh0PXtoYXNFcnJvcignZW1haWwnKSA/IGZvcm1TdGF0ZS5lcnJvcnMuZW1haWxbMF0gOiBudWxsfVxyXG4gICAgICAgICAgICAgIGVycm9yPXtoYXNFcnJvcignZW1haWwnKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS52YWx1ZXMuZW1haWwgfHwgJyd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTWVzc2FnZSAqXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBoZWxwZXJ0ZXh0PXtcclxuICAgICAgICAgICAgICAgIGhhc0Vycm9yKCdtZXNzYWdlJykgPyBmb3JtU3RhdGUuZXJyb3JzLm1lc3NhZ2VbMF0gOiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVycm9yPXtoYXNFcnJvcignbWVzc2FnZScpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVN0YXRlLnZhbHVlcy5tZXNzYWdlIHx8ICcnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgIEZpZWxkcyB0aGF0IGFyZSBtYXJrZWQgd2l0aCBhbiBhc3RlcmlzayAoKikgc2lnbiBhcmUgcmVxdWlyZWQuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWZvcm1TdGF0ZS5pc1ZhbGlkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ29udGFjdEZvcm0nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGRlc2NyaXB0aW9uIGxpc3Qgd2l0aCBpY29uXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgRGVzY3JpcHRpb25MaXN0SWNvbiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSxcclxuICAgIHN1YnRpdGxlLFxyXG4gICAgaWNvbixcclxuICAgIGFsaWduLFxyXG4gICAgdGl0bGVWYXJpYW50LFxyXG4gICAgc3VidGl0bGVWYXJpYW50LFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdGl0bGVQcm9wcyxcclxuICAgIHN1YnRpdGxlUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGxldCBncmlkSnVzdGlmeSA9ICdjZW50ZXInO1xyXG5cclxuICBpZiAoYWxpZ24gPT09ICdsZWZ0Jykge1xyXG4gICAgZ3JpZEp1c3RpZnkgPSAnZmxleC1zdGFydCc7XHJcbiAgfSBlbHNlIGlmIChhbGlnbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgZ3JpZEp1c3RpZnkgPSAnZmxleC1lbmQnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIGNvbnRhaW5lclxyXG4gICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdkZXNjcmlwdGlvbi1saXN0LWljb24nLCBjbGFzc05hbWUpfVxyXG4gICAgPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGl0ZW1cclxuICAgICAgICBjb250YWluZXJcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD17Z3JpZEp1c3RpZnl9XHJcbiAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWxpc3QtaWNvbl9faWNvbi13cmFwcGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtpY29ufVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1saXN0LWljb25fX3RpdGxlLXdyYXBwZXJcIj5cclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgdmFyaWFudD17dGl0bGVWYXJpYW50fVxyXG4gICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXHJcbiAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50aXRsZSwgJ2Rlc2NyaXB0aW9uLWxpc3QtaWNvbl9fdGl0bGUnKX1cclxuICAgICAgICAgIHsuLi50aXRsZVByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAge3N1YnRpdGxlICYmIChcclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tbGlzdC1pY29uX19zdWJ0aXRsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PXtzdWJ0aXRsZVZhcmlhbnR9XHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tbGlzdC1pY29uX19zdWJ0aXRsZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzdWJ0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkRlc2NyaXB0aW9uTGlzdEljb24uZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsaWduOiAnY2VudGVyJyxcclxuICB0aXRsZVZhcmlhbnQ6ICdoNicsXHJcbiAgc3VidGl0bGVWYXJpYW50OiAnYm9keTEnLFxyXG4gIHRpdGxlUHJvcHM6IHt9LFxyXG4gIHN1YnRpdGxlUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuRGVzY3JpcHRpb25MaXN0SWNvbi5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgdGl0bGVcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIHRoZSBzdWJ0aXRsZVxyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgc2hvdWxkIHNob3cgdGhlIGFsdGVybmF0ZSBpY29uXHJcbiAgICovXHJcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgYWxpZ25tZW50IG9mIHRoZSBpdGVtc1xyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxuICAvKipcclxuICAgKiBUaXRsZSB2YXJpYW50XHJcbiAgICovXHJcbiAgdGl0bGVWYXJpYW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFN1YnRpdGxlIHZhcmlhbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVZhcmlhbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBzdWJ0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbkxpc3RJY29uO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9EZXNjcmlwdGlvbkxpc3RJY29uJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIG92ZXJmbG93OiAndmlzaWJsZScsXHJcbiAgfSxcclxuICBjb2xvckRlZmF1bHQ6IHtcclxuICAgIGJhY2tncm91bmQ6IGNvbG9ycy5pbmRpZ29bOTAwXSxcclxuICB9LFxyXG4gIGhlcm9XcmFwcGVyOiB7XHJcbiAgICB6SW5kZXg6IDIsXHJcbiAgfSxcclxuICBoZXJvQ292ZXI6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgb3BhY2l0eTogMC4yLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgekluZGV4OiAxLFxyXG4gIH0sXHJcbiAgaGVyb0JnOiB7XHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2F1dG8nLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgfSxcclxuICBub0NvdmVyT3BhY2l0eToge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGJhY2tncm91bmQgaGVyb1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEhlcm9CYWNrZ3JvdW5kID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgZGlzYmFsZUNvdmVyT3BhY2l0eSxcclxuICAgIGJhY2tncm91bmRJbWcsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb24sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICBjb250ZW50U2VjdGlvbkNsYXNzTmFtZSxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgdXNlQ3VzdG9tU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gICAgY292ZXJCZzoge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kSW1nfSlgLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRDb2xvcjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiB7XHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYmFja2dyb3VuZFBvc2l0aW9uLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIGNvbnN0IGN1c3RvbUNsYXNzZXMgPSB1c2VDdXN0b21TdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICdoZXJvLWJhY2tncm91bmQnLFxyXG4gICAgICAgIGNsYXNzZXMucm9vdCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPyBjdXN0b21DbGFzc2VzLmJhY2tncm91bmRDb2xvciA6IGNsYXNzZXMuY29sb3JEZWZhdWx0LFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLWJhY2tncm91bmRfX3dyYXBwZXInLCBjbGFzc2VzLmhlcm9XcmFwcGVyKX0+XHJcbiAgICAgICAgPFNlY3Rpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgY29udGVudFNlY3Rpb25DbGFzc05hbWUgPyBjb250ZW50U2VjdGlvbkNsYXNzTmFtZSA6ICcnLFxyXG4gICAgICAgICAgICAnaGVyby1iYWNrZ3JvdW5kX19zZWN0aW9uJyxcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAnaGVyby1iYWNrZ3JvdW5kX19jb3ZlcicsXHJcbiAgICAgICAgICBjbGFzc2VzLmhlcm9CZyxcclxuICAgICAgICAgIGNsYXNzZXMuaGVyb0NvdmVyLFxyXG4gICAgICAgICAgY3VzdG9tQ2xhc3Nlcy5jb3ZlckJnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uID8gY3VzdG9tQ2xhc3Nlcy5iYWNrZ3JvdW5kUG9zaXRpb24gOiB7fSxcclxuICAgICAgICAgIGRpc2JhbGVDb3Zlck9wYWNpdHkgPyBjbGFzc2VzLm5vQ292ZXJPcGFjaXR5IDoge30sXHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvQmFja2dyb3VuZC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDaGlsZHJlbiB0byBwbGFjZWQgaW5zaWRlIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIEJhY2tncm91bmQgaW1hZ2Ugb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBiYWNrZ3JvdW5kSW1nOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEJhY2tncm91bmQgY29sb3Igb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBiYWNrZ3JvdW5kQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQmFja2dyb3VuZCBwb3NpdGlvbiBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGJhY2tncm91bmRQb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDdXN0b20gY2xhc3NlcyBmb3IgdGhlIGNvbnRlbnQgc2VjdGlvblxyXG4gICAqL1xyXG4gIGNvbnRlbnRTZWN0aW9uQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCBkaXNhYmxlIGhlcmUgY292ZXIgb3BhY2l0eVxyXG4gICAqL1xyXG4gIGRpc2JhbGVDb3Zlck9wYWNpdHk6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0JhY2tncm91bmQ7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0hlcm9CYWNrZ3JvdW5kJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gIH0sXHJcbiAgaGVybzoge1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIG1heFdpZHRoOiB0aGVtZS5sYXlvdXQuY29udGVudFdpZHRoLFxyXG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW4tcmV2ZXJzZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlcm9MZWZ0U2lkZToge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCA4KSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlcm9SaWdodFNpZGU6IHtcclxuICAgIG1heFdpZHRoOiBcIjUwJVwiLFxyXG4gICAgZmxleDogXCIwIDAgNTAlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBmbGV4OiBcIjAgMCAxMDAlXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaGVyb0NvdmVyOiB7XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgd2lkdGg6IFwiNTB2d1wiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZXJvSW1hZ2VDb250YWluZXI6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICB9LFxyXG4gIGhlcm9JbWFnZToge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIGxlZnQ6IFwiMCVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgc2hhcGVPdXRzaWRlOiBcInBvbHlnb24oMTAlIDAlLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCUgMTAwJSlcIixcclxuICAgICAgY2xpcFBhdGg6IFwicG9seWdvbigxMCUgMCUsIDEwMCUgMCwgMTAwJSAxMDAlLCAwJSAxMDAlKVwiLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxyXG4gICAgfSxcclxuICAgIFwiJiBpbWdcIjoge1xyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICAgIGhlaWdodDogNDUwLFxyXG4gICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHNoYXBlZCBoZXJvXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgSGVyb1NoYXBlZCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGxlZnRTaWRlLCByaWdodFNpZGUsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgJ2hlcm8tc2hhcGVkJywgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaGFwZWRfX3dyYXBwZXInLCBjbGFzc2VzLmhlcm8pfT5cclxuICAgICAgICA8U2VjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNoYXBlZF9fbGVmdC1zaWRlJywgY2xhc3Nlcy5oZXJvTGVmdFNpZGUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsZWZ0U2lkZX1cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2hhcGVkX19yaWdodC1zaWRlJywgY2xhc3Nlcy5oZXJvUmlnaHRTaWRlKX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaGFwZWRfX2NvdmVyJywgY2xhc3Nlcy5oZXJvQ292ZXIpfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAgICdoZXJvLXNoYXBlZF9faW1hZ2UtY29udGFpbmVyJyxcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMuaGVyb0ltYWdlQ29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaGFwZWRfX2ltYWdlJywgY2xhc3Nlcy5oZXJvSW1hZ2UpfT5cclxuICAgICAgICAgICAgICAgIHtyaWdodFNpZGV9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm9TaGFwZWQucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ2hpbGRyZW4gdG8gcGxhY2VkIGluc2lkZSB0aGUgc2VjdGlvbiByaWdodCBzaWRlXHJcbiAgICovXHJcbiAgcmlnaHRTaWRlOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIENoaWxkcmVuIHRvIHBsYWNlZCBpbnNpZGUgdGhlIHNlY3Rpb24gbGVmdCBzaWRlXHJcbiAgICovXHJcbiAgbGVmdFNpZGU6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvU2hhcGVkO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9IZXJvU2hhcGVkJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjb2xvcnMsIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBpbWFnZVdyYXBwZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgbWF4SGVpZ2h0OiA0MDAsXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gIH0sXHJcbiAgY292ZXI6IHtcclxuICAgIGJhY2tncm91bmQ6IGNvbG9ycy5pbmRpZ29bOTAwXSxcclxuICAgIG9wYWNpdHk6IDAuNixcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgdG9wOiAnNTAlJyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICdub25lJyxcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCA0KSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBzaWRlIGltYWdlIGhlcm9cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBIZXJvU2lkZUltYWdlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGltYWdlU3JjLFxyXG4gICAgaW1hZ2VTcmNTZXQsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIGJhY2tncm91bmRDb2xvcixcclxuICAgIHJldmVyc2UsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHVzZUN1c3RvbVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIGNvdmVyQmc6IHtcclxuICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZENvbG9yLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIGNvbnN0IGN1c3RvbUNsYXNzZXMgPSB1c2VDdXN0b21TdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIGNvbnRhaW5lclxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2lkZS1pbWFnZScsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgZGlyZWN0aW9uPXtyZXZlcnNlID8gJ3Jvdy1yZXZlcnNlJyA6ICdyb3cnfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWRcclxuICAgICAgICBpdGVtXHJcbiAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgIG1kPXs2fVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaWRlLWltYWdlX19pbWFnZS13cmFwcGVyJywgY2xhc3Nlcy5pbWFnZVdyYXBwZXIpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e2ltYWdlU3JjfVxyXG4gICAgICAgICAgc3JjU2V0PXtpbWFnZVNyY1NldCA/IGltYWdlU3JjU2V0IDogJyd9XHJcbiAgICAgICAgICBhbHQ9eycuLi4nfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNpZGUtaW1hZ2VfX2ltYWdlJywgY2xhc3Nlcy5pbWFnZSl9XHJcbiAgICAgICAgICBsYXp5PXtmYWxzZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgJ2hlcm8tc2lkZS1pbWFnZV9fY292ZXInLFxyXG4gICAgICAgICAgICBjbGFzc2VzLmNvdmVyLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPyBjdXN0b21DbGFzc2VzLmNvdmVyQmcgOiB7fSxcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGl0ZW1cclxuICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNpZGUtaW1hZ2VfX2NvbnRlbnQnLCBjbGFzc2VzLmNvbnRlbnQpfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm9TaWRlSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ2hpbGRyZW4gdG8gcGxhY2VkIGluc2lkZSB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgYmFja2dyb3VuZENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFNpZGUgaW1hZ2VcclxuICAgKi9cclxuICBpbWFnZVNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFNpZGUgaW1hZ2Ugc3Jjc2V0XHJcbiAgICovXHJcbiAgaW1hZ2VTcmNTZXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogU2hvdWxkIHNob3cgaW4gcmV2ZXJzZSBvcmRlclxyXG4gICAqL1xyXG4gIHJldmVyc2U6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb1NpZGVJbWFnZTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSGVyb1NpZGVJbWFnZSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEhlcm9TaW1wbGVCYWNrZ3JvdW5kID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgYmFja2dyb3VuZFNpemUsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgdXNlQmFja2dyb3VuZCA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIGJhY2tncm91bmRJbWFnZToge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWAsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZFNpemU6IHtcclxuICAgICAgYmFja2dyb3VuZFNpemU6IGJhY2tncm91bmRTaXplLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjoge1xyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGJhY2tncm91bmRQb3NpdGlvbixcclxuICAgIH0sXHJcbiAgfSkpO1xyXG4gIGNvbnN0IGJhY2tncm91bmRDbGFzc2VzID0gdXNlQmFja2dyb3VuZCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgJ2hlcm8tc2ltcGxlLWJhY2tncm91bmQnLFxyXG4gICAgICAgIGNsYXNzZXMucm9vdCxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgYmFja2dyb3VuZENsYXNzZXMuYmFja2dyb3VuZEltYWdlLFxyXG4gICAgICAgIGJhY2tncm91bmRDbGFzc2VzLmJhY2tncm91bmRTaXplLFxyXG4gICAgICAgIGJhY2tncm91bmRDbGFzc2VzLmJhY2tncm91bmRQb3NpdGlvbixcclxuICAgICAgKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT1cImhlcm8tc2ltcGxlLWJhY2tncm91bmRfX3NlY3Rpb25cIj57Y2hpbGRyZW59PC9TZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm9TaW1wbGVCYWNrZ3JvdW5kLmRlZmF1bHRQcm9wcyA9IHtcclxuICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG59O1xyXG5cclxuSGVyb1NpbXBsZUJhY2tncm91bmQucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIG1haW4gY29udGVudFxyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBiYWNrZ3JvdW5kIGltYWdlIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgYmFja2dyb3VuZEltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGJhY2tncm91bmQgc2l6ZSBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGJhY2tncm91bmRTaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBiYWNrZ3JvdW5kIHBvc2l0aW9uIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb1NpbXBsZUJhY2tncm91bmQ7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0hlcm9TaW1wbGVCYWNrZ3JvdW5kJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgbWFwXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgTWFwID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgem9vbSwgY2VudGVyLCBwaW5zLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBMID0gcmVxdWlyZSgnbGVhZmxldCcpO1xyXG4gICAgZGVsZXRlIEwuSWNvbi5EZWZhdWx0LnByb3RvdHlwZS5fZ2V0SWNvblVybDtcclxuXHJcbiAgICBjb25zdCBtYXJrZXJJY29uMnggPSByZXF1aXJlKCdhc3NldHMvaW1hZ2VzL2xlYWZsZXQtYXNzZXRzL21hcmtlci1pY29uLTJ4LnBuZycpO1xyXG4gICAgY29uc3QgbWFya2VySWNvbiA9IHJlcXVpcmUoJ2Fzc2V0cy9pbWFnZXMvbGVhZmxldC1hc3NldHMvbWFya2VyLWljb24ucG5nJyk7XHJcbiAgICBjb25zdCBtYXJrZXJTaGFkb3cgPSByZXF1aXJlKCdhc3NldHMvaW1hZ2VzL2xlYWZsZXQtYXNzZXRzL21hcmtlci1zaGFkb3cucG5nJyk7XHJcblxyXG4gICAgTC5JY29uLkRlZmF1bHQubWVyZ2VPcHRpb25zKHtcclxuICAgICAgaWNvblJldGluYVVybDogdHlwZW9mIG1hcmtlckljb24yeCA9PT0gJ29iamVjdCcgPyBtYXJrZXJJY29uMnguZGVmYXVsdCA6IG1hcmtlckljb24yeCxcclxuICAgICAgaWNvblVybDogdHlwZW9mIG1hcmtlckljb24gPT09ICdvYmplY3QnID8gbWFya2VySWNvbi5kZWZhdWx0IDogbWFya2VySWNvbixcclxuICAgICAgc2hhZG93VXJsOiB0eXBlb2YgbWFya2VyU2hhZG93ID09PSAnb2JqZWN0JyA/IG1hcmtlclNoYWRvdy5kZWZhdWx0IDogbWFya2VyU2hhZG93LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBSZWFjdE1hcCA9IHJlcXVpcmUoJ3JlYWN0LWxlYWZsZXQnKS5NYXA7XHJcbiAgY29uc3QgVGlsZUxheWVyID0gcmVxdWlyZSgncmVhY3QtbGVhZmxldCcpLlRpbGVMYXllcjtcclxuICBjb25zdCBNYXJrZXIgPSByZXF1aXJlKCdyZWFjdC1sZWFmbGV0JykuTWFya2VyO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0TWFwXHJcbiAgICAgIHpvb209e3pvb219XHJcbiAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ21hcCcsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxUaWxlTGF5ZXJcclxuICAgICAgICBjbGFzc05hbWU9XCJtYXBfX3RpbGUtbGF5ZXJcIlxyXG4gICAgICAgIGRldGVjdFJldGluYT17dHJ1ZX1cclxuICAgICAgICBhdHRyaWJ1dGlvbj0nJmFtcDtjb3B5IDxhIGhyZWY9XCJodHRwOi8vb3NtLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXHJcbiAgICAgICAgdXJsPVwiaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIlxyXG4gICAgICAvPlxyXG4gICAgICB7cGlucyAmJlxyXG4gICAgICAgIHBpbnMubGVuZ3RoICYmXHJcbiAgICAgICAgcGlucy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgIDxNYXJrZXJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFwX19tYXJrZXJcIlxyXG4gICAgICAgICAgICBwb3NpdGlvbj17W2l0ZW0ubG9jYXRpb24ueSwgaXRlbS5sb2NhdGlvbi54XX1cclxuICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgIDwvUmVhY3RNYXA+XHJcbiAgKTtcclxufTtcclxuXHJcbk1hcC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgem9vbTogMTAsXHJcbiAgY2VudGVyOiBbMCwgMF0sXHJcbn07XHJcblxyXG5NYXAucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogTWFwIHpvb21cclxuICAgKi9cclxuICB6b29tOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBNYXAgY2VudGVyXHJcbiAgICovXHJcbiAgY2VudGVyOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBkYXRhIG9mIHRoZSBsb2NhdGlvbnMuIEV4YW1wbGU6IFt7IGxvY2F0aW9uOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0gfV1cclxuICAgKi9cclxuICBwaW5zOiBQcm9wVHlwZXMuYXJyYXksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXA7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL01hcCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgIC8qIHN1cHBvcnQgZm9yIHBsdWdpbiBodHRwczovL2dpdGh1Yi5jb20vYmZyZWQtaXQvb2JqZWN0LWZpdC1pbWFnZXMgKi9cclxuICAgIGZvbnRGYW1pbHk6ICdvYmplY3QtZml0OiBjb3ZlcjsnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHpJbmRleDogLTEsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBQYXJhbGxheCBiYWNrZ3JvdW5kc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFBhcmFsbGF4ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgYmFja2dyb3VuZEltYWdlLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgamFyYWxsYXhFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qYXJhbGxheCcpO1xyXG4gICAgaWYgKCFqYXJhbGxheEVsZW1zIHx8IChqYXJhbGxheEVsZW1zICYmIGphcmFsbGF4RWxlbXMubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgamFyYWxsYXggPSByZXF1aXJlKCdqYXJhbGxheCcpLmphcmFsbGF4O1xyXG4gICAgamFyYWxsYXgoamFyYWxsYXhFbGVtcywgeyBzcGVlZDogMC4yIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2phcmFsbGF4JywgJ3BhcmFsbGF4JywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICBkYXRhLWphcmFsbGF4XHJcbiAgICAgIGRhdGEtc3BlZWQ9XCIwLjJcIlxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnamFyYWxsYXgtaW1nJywgJ3BhcmFsbGF4X19pbWFnZScsIGNsYXNzZXMuaW1hZ2UpfVxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRJbWFnZX0pYCB9fVxyXG4gICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5QYXJhbGxheC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudFxyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBUaGUgcGFyYWxsYXggYmFja2dyb3VuZCBpbWFnZVxyXG4gICAqL1xyXG4gIGJhY2tncm91bmRJbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFyYWxsYXg7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1BhcmFsbGF4JztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWF4V2lkdGg6IHRoZW1lLmxheW91dC5jb250ZW50V2lkdGgsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYsIDIpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgOCwgNCksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOCwgNiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZnVsbFdpZHRoOiB7XHJcbiAgICBtYXhXaWR0aDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBkaXNhYmxlUGFkZGluZzoge1xyXG4gICAgcGFkZGluZzogMCxcclxuICB9LFxyXG4gIG5hcnJvdzoge1xyXG4gICAgbWF4V2lkdGg6IDgwMCxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHNlY3Rpb25zXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgU2VjdGlvbiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBjaGlsZHJlbixcclxuICAgIGZ1bGxXaWR0aCxcclxuICAgIG5hcnJvdyxcclxuICAgIGRpc2FibGVQYWRkaW5nLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICdzZWN0aW9uJyxcclxuICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbiAgICAgICAgZnVsbFdpZHRoID8gY2xhc3Nlcy5mdWxsV2lkdGggOiB7fSxcclxuICAgICAgICBuYXJyb3cgPyBjbGFzc2VzLm5hcnJvdyA6IHt9LFxyXG4gICAgICAgIGRpc2FibGVQYWRkaW5nID8gY2xhc3Nlcy5kaXNhYmxlUGFkZGluZyA6IHt9LFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuU2VjdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDaGlsZHJlbiB0byBwbGFjZWQgaW5zaWRlIHRoZSBzZWN0aW9uXHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCBzaG93IG5hcnJvdyBzZWN0aW9uc1xyXG4gICAqL1xyXG4gIG5hcnJvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogU2hvdWxkIHRoZSBzZWN0aW9uIGJlIGZ1bGwgd2lkdGhcclxuICAgKi9cclxuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCB0aGUgc2VjdGlvbiByZW5kZXIgd2l0aCBubyBwYWRkaW5nXHJcbiAgICovXHJcbiAgZGlzYWJsZVBhZGRpbmc6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU2VjdGlvbic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmFsdGVybmF0ZS5tYWluLFxyXG4gIH0sXHJcbiAgaW5uZXI6IHtcclxuICAgIG1heFdpZHRoOiB0aGVtZS5sYXlvdXQuY29udGVudFdpZHRoLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYsIDIpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgsIDgpLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxMiwgOCksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5uZXJOYXJyb3dlZDoge1xyXG4gICAgbWF4V2lkdGg6IDgwMCxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGFsdGVybmF0aXZlIHNlY3Rpb25zXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgU2VjdGlvbkFsdGVybmF0ZSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lcm5hcnJvd2VkLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ3NlY3Rpb24tYWx0ZXJuYXRlJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICdzZWN0aW9uLWFsdGVybmF0ZV9fY29udGVudCcsXHJcbiAgICAgICAgICBjbGFzc2VzLmlubmVyLFxyXG4gICAgICAgICAgaW5uZXJuYXJyb3dlZCA/IGNsYXNzZXMuaW5uZXJOYXJyb3dlZCA6IHt9LFxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5TZWN0aW9uQWx0ZXJuYXRlLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIENoaWxkcmVuIHRvIHBsYWNlZCBpbnNpZGUgdGhlIHNlY3Rpb25cclxuICAgKi9cclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgLyoqXHJcbiAgICogU2hvdWxkIHNob3cgbmFycm93IHNlY3Rpb25zXHJcbiAgICovXHJcbiAgaW5uZXJuYXJyb3dlZDogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uQWx0ZXJuYXRlO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TZWN0aW9uQWx0ZXJuYXRlJztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWN0aW9uIH0gZnJvbSAnLi9TZWN0aW9uJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWN0aW9uQWx0ZXJuYXRlIH0gZnJvbSAnLi9TZWN0aW9uQWx0ZXJuYXRlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZXNjcmlwdGlvbkxpc3RJY29uIH0gZnJvbSAnLi9EZXNjcmlwdGlvbkxpc3RJY29uJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkQmFzZSB9IGZyb20gJy4vQ2FyZEJhc2UnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRSZXZpZXcgfSBmcm9tICcuL0NhcmRSZXZpZXcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRDYXRlZ29yeSB9IGZyb20gJy4vQ2FyZENhdGVnb3J5JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkSm9iIH0gZnJvbSAnLi9DYXJkSm9iJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkSm9iTWluaW1hbCB9IGZyb20gJy4vQ2FyZEpvYk1pbmltYWwnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRKb2JUYWcgfSBmcm9tICcuL0NhcmRKb2JUYWcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRKb2JDb21wYW55IH0gZnJvbSAnLi9DYXJkSm9iQ29tcGFueSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWNjb3JkaW9uIH0gZnJvbSAnLi9BY2NvcmRpb24nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlcm9TaGFwZWQgfSBmcm9tICcuL0hlcm9TaGFwZWQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRQcm9kdWN0IH0gZnJvbSAnLi9DYXJkUHJvZHVjdCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFwIH0gZnJvbSAnLi9NYXAnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlcm9CYWNrZ3JvdW5kIH0gZnJvbSAnLi9IZXJvQmFja2dyb3VuZCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVyb1NpZGVJbWFnZSB9IGZyb20gJy4vSGVyb1NpZGVJbWFnZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZFByb21vIH0gZnJvbSAnLi9DYXJkUHJvbW8nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRDYXRlZ29yeUxpbmsgfSBmcm9tICcuL0NhcmRDYXRlZ29yeUxpbmsnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlcm9TaW1wbGVCYWNrZ3JvdW5kIH0gZnJvbSAnLi9IZXJvU2ltcGxlQmFja2dyb3VuZCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZFByaWNpbmdTdGFuZGFyZCB9IGZyb20gJy4vQ2FyZFByaWNpbmdTdGFuZGFyZCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFyYWxsYXggfSBmcm9tICcuL1BhcmFsbGF4JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb250YWN0Rm9ybSB9IGZyb20gJy4vQ29udGFjdEZvcm0nOyIsImV4cG9ydCBjb25zdCBBcGlSb3V0ZXMgPSB7XHJcbiAgICAgICAgIFNJR05VUDoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL3NpZ251cFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgTE9HSU46IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi9sb2dpblwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgUkVTRVRQQVNTV09SRDoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL3Jlc2V0LXBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBGT1JHT1RQQVNTV09SRDoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL2ZvcmdvdC1wYXNzd29yZFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUVVNFUkRFVEFJTFM6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi9kZXRhaWxzXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgVVNFUkRFVEFJTFNVUERBVEU6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi91cGRhdGVcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBVU0VSUEFTU1dPUkRVUERBVEU6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi9jaGFuZ2UtcGFzc3dvcmRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBVU0VSRk9SR09UUEFTU1dPUkRVUERBVEU6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi9mb3Jnb3QtcGFzc3dvcmRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIENPVVJTRUxJU1Q6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9jb3Vyc2UtdG9waWMvP2xpbWl0PWFsbFwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgQ09VUlNFREVUQUlMUzoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2NvdXJzZS10b3BpY1wiLFxyXG4gICAgICAgICAgIHVybDogXCIvOmlkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIENPVVJTRURFVEFJTFNBVVRIOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvY291cnNlLXRvcGljXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi86aWRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBBUFBMWUNPVVBPTjoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL3RyYW5zYWN0aW9uXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi9hcHBseVByb21vXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIE1BS0VQQVlNRU5UOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvdHJhbnNhY3Rpb25cIixcclxuICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIFBBWU1FTlRISVNUT1JZOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvdHJhbnNhY3Rpb25cIixcclxuICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgUFVSQ0hBU0VEQ09VUlNFOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvY291cnNlXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi9wdXJjaGFzZWQtY291cnNlXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgQ0VSVElGSUNBVEVSRVFVRVNUOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvY2VydGlmaWNhdGUtcmVxdWVzdFwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgQkxPR0xJU1Q6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9ibG9nXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBCTE9HREVUQUlMOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvYmxvZ1wiLFxyXG4gICAgICAgICAgIHVybDogXCIvOmlkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEdFVFVOSVZFUlNJVFk6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi91bml2ZXJzaXRpZXNcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUQ09SUE9SQVRFOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvYXV0aFwiLFxyXG4gICAgICAgICAgIHVybDogXCIvY29ycG9yYXRpb25cIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgQ09OVEFDVF9VUzoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2VudGVycHJpc2VcIixcclxuICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBQUkVTU19SRUxFQVNFOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvcHJlc3MtcmVsZWFzZVwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgUFJFU1NfREVUQUlMUzoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL3ByZXNzLXJlbGVhc2VcIixcclxuICAgICAgICAgICB1cmw6IFwiLzppZFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBHRVRfTE1TREFUQV9DT1VSU0U6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi90YWxlbnRMbXNcIixcclxuICAgICAgICAgICB1cmw6IFwiL2NvdXJzZXNcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUX0xNU0RBVEFfQ0FURUdPUlk6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi90YWxlbnRMbXNcIixcclxuICAgICAgICAgICB1cmw6IFwiL2NhdGVnb3J5XCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIE5FV1NMRVRURVJTVUJTQ1JJQkU6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9uZXdzLWxldHRlclwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEdFVFNPQ0lBTExJTktFUzoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL3NldHRpbmdcIixcclxuICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEdFVFBBWU1FTlRDRVJUSUZJQ0FURURFVEFJTFM6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9jZXJ0aWZpY2F0ZS1yZXF1ZXN0L3BheW1lbnQtaW5mb1wiLFxyXG4gICAgICAgICAgIHVybDogXCIvOmlkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIE1BS0VQQVlNRU5UQ0VSVElGSUNBVEU6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9jZXJ0aWZpY2F0ZS1yZXF1ZXN0L3BheW1lbnRcIixcclxuICAgICAgICAgICB1cmw6IFwiLzppZFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgQ0VSVElGSUNBVEVfREFUQToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2Ntc1wiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgRlJPTlRfUEFHRV9EQVRBOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvbWFya2V0LWNvbnRlbnRcIixcclxuICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEdFVF9URUFNX0RBVEE6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi90ZWFtXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgfTtcclxuIiwiY29uc3QgQXBwQ29uZmlnID0ge1xyXG4gICAgLy8gRklMRVNfRU5EUE9JTlQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSUxFU19FTkRQT0lOVCxcclxuICAgIC8vIEFQUF9FTkRQT0lOVDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0VORFBPSU5ULFxyXG4gICAgQVBJX0VORFBPSU5UOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlQsXHJcbiAgICBJTUFHRV9VUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lNQUdFX1VSTCxcclxuICAgIFNJVEVfTkFNRTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0lURV9OQU1FXHJcbiAgICAvLyBBUElfVkVSU0lPTjogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9WRVJTSU9OLFxyXG4gICAgLy8gREVGQVVMVF9EQVRFX0ZPUk1BVDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0RFRkFVTFRfREFURV9GT1JNQVQsXHJcbiAgfTtcclxuICBcclxuZXhwb3J0IGRlZmF1bHQgQXBwQ29uZmlnOyIsImV4cG9ydCAqIGZyb20gJy4vQXBpUm91dGVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9hcHBDb25maWcnOyIsImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgRXJyb3JIYW5kbGVySGVscGVyIH0gZnJvbSBcIi4vRXJyb3JIYW5kbGVySGVscGVyXCI7XHJcbmltcG9ydCB7IFN1Y2Nlc3NIYW5kbGVySGVscGVyIH0gZnJvbSBcIi4vU3VjY2Vzc0hhbmRsZXJIZWxwZXJcIjtcclxuaW1wb3J0IEFwcENvbmZpZyAgZnJvbSBcIi4uL2NvbmZpZy9hcHBDb25maWdcIjtcclxuLyoqXHJcbiAqIEFwaUhlbHBlciBDbGFzcyAtIEZvciBtYWtpbmcgQXBpIFJlcXVlc3RzXHJcbiAqIFxyXG4gKi9cclxubGV0IENhbmNlbFRva2VuID0gQXhpb3MuQ2FuY2VsVG9rZW47XHJcbmxldCBjYW5jZWw7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBpSGVscGVyIHtcclxuICBfcG9ydGFsR2F0ZXdheTtcclxuICBfYXBpVmVyc2lvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9wb3J0YWxHYXRld2F5ID0gQXBwQ29uZmlnLkFQSV9FTkRQT0lOVDtcclxuICAgIHRoaXMuX2FwaVZlcnNpb24gPSBcIlwiO1xyXG4gICAgdGhpcy5zb3VyY2UgPSBBeGlvcy5DYW5jZWxUb2tlbi5zb3VyY2UoKTtcclxuICAgIHRoaXMuY2FuY2VsVG9rZW4gPSB0aGlzLnNvdXJjZS50b2tlbjtcclxuICB9XHJcbiAgc2V0SG9zdCA9IChob3N0KSA9PiB7XHJcbiAgICB0aGlzLl9wb3J0YWxHYXRld2F5ID0gaG9zdDtcclxuICB9O1xyXG4gIHNldEFwaVZlcnNpb24gPSAodmVyc2lvbikgPT4ge1xyXG4gICAgdGhpcy5fYXBpVmVyc2lvbiA9IHZlcnNpb247XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBGZXRjaGVzIGZyb20gdGhlIEdhdGV3YXkgZGVmaW5lZCBieSB0aGUgaW5zdGFudGlhdGVkIG9iamVjdC4gQWNjZXB0cyA8VD4gYXMgb3V0cHV0IG9iamVjdC5cclxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5cIi9BdXRoL1VzZXJBY2NvdW50XCIsIFwiL0dldEN1cnJlbnRVc2VyXCIsIFwiR0VUXCIsIFwiSldUIENvbnRlbnRcIjwvY2FwdGlvbj5cclxuICAgKiBAcGFyYW0ge3NlcnZpY2V9IHNlcnZpY2UgLSB3YW50aW5nIHRvIGJlIGFjY2VzcyBleC4gXCJVc2VyQXV0aC9BdXRoXCJcclxuICAgKiBAcGFyYW0ge2VuZHBvaW50fSBlbmRwb2ludCAtIHlvdSB3aXNoIHRvIGNhbGwgZXguIFwiL0xvZ2luXCJcclxuICAgKiBAcGFyYW0ge21ldGhvZH0gbWVob3RkIC0gbWV0aG9kIChHRVQsIFVQREFURSwgREVMRVRFLCBQT1NUKVxyXG4gICAqIEBwYXJhbSB7and0fSBKV1QgLSBKU09OIFdlYiBUb2tlbiAoT3B0aW9uYWwpXHJcbiAgICogQHBhcmFtIHtxdWVyeU9wdGlvbnN9IFF1ZXJ5IC0gcXVlcnkgb3B0aW9ucyBmb3IgXCJHRVRcIiBtZXRob2RzIChPcHRpb25hbClcclxuICAgKiBAcGFyYW0ge2JvZHl9IGJvZHkgLSBKU09OIGJvZHkgZm9yIFwiVVBEQVRFLCBERUxFVEUgYW5kIFBPU1RcIiBtZXRob2RzIChPcHRpb25hbClcclxuICAgKi9cclxuICBhc3luYyBGZXRjaEZyb21TZXJ2ZXIoXHJcbiAgICBzZXJ2aWNlLFxyXG4gICAgZW5kcG9pbnQsXHJcbiAgICBtZXRob2QsXHJcbiAgICBhdXRoZW50aWNhdGVkID0gZmFsc2UsXHJcbiAgICBhdXRoVG9rZW4sXHJcbiAgICBxdWVyeU9wdGlvbnMgPSB1bmRlZmluZWQsXHJcbiAgICBib2R5ID0gdW5kZWZpbmVkLFxyXG4gICAgcmVzcG9uc2VUeXBlLFxyXG4gICkge1xyXG4gICAgbGV0IHVybCA9IHRoaXMuX3BvcnRhbEdhdGV3YXkgKyBzZXJ2aWNlICsgZW5kcG9pbnQ7XHJcbiAgICBsZXQgaGVhZGVycyA9IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfTtcclxuICAgIGlmIChhdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgIC8vIGNvbnN0IHN0b3JhZ2VTZXNzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgY29uc3Qgc3RvcmFnZVNlc3Npb24gPSBhdXRoVG9rZW47XHJcbiAgICAgIGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHN0b3JhZ2VTZXNzaW9uO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgbWV0aG9kID0gbWV0aG9kLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZCxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZGF0YTogYm9keSxcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczogcXVlcnlPcHRpb25zLFxyXG4gICAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xyXG4gICAgICAgICAgLy8gQW4gZXhlY3V0b3IgZnVuY3Rpb24gcmVjZWl2ZXMgYSBjYW5jZWwgZnVuY3Rpb24gYXMgYSBwYXJhbWV0ZXJcclxuICAgICAgICAgIGNhbmNlbCA9IGM7XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rID09PSBmYWxzZSB8fCByZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgIGxldCBlcnJvck9iamVjdCA9IHtcclxuICAgICAgICAgIGNvZGU6IHJlc3BvbnNlLnN0YXR1cyxcclxuICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhyb3cgZXJyb3JPYmplY3Q7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBTdWNjZXNzSGFuZGxlckhlbHBlcihyZXNwb25zZS5kYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoQXhpb3MuaXNDYW5jZWwoZXJyKSB8fCAhZXJyLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlzRXJyb3I6IHRydWUsXHJcbiAgICAgICAgICBlcnJvcjogXCJSZXF1ZXN0IGNhbmNlbGxlZFwiLFxyXG4gICAgICAgICAgbWVzc2FnZXM6IGVyci5tZXNzYWdlID09PSBcImNhbmNlbFwiID8gW10gOiBbXCJSZXF1ZXN0IGNhbmNlbGxlZFwiXSxcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGVycm9ySGVscGVyID0gbmV3IEVycm9ySGFuZGxlckhlbHBlcihlcnIucmVzcG9uc2UpO1xyXG4gICAgICAgIHJldHVybiBlcnJvckhlbHBlci5lcnJvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBDYW5jZWxzIHRoZSBsYXN0IHJlcXVlc3QuXHJcbiAgICovXHJcbiAgY2FuY2VsUmVxdWVzdCA9IChlcnIpID0+IHtcclxuICAgIGNhbmNlbCAmJiBjYW5jZWwoZXJyKTtcclxuICB9O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBFcnJvckhhbmRsZXJIZWxwZXIgQ2xhc3MgLSBGb3IgbWFuYWdpbmcgZXJyb3JzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXJyb3JIYW5kbGVySGVscGVyIHtcclxuXHRyYXdFcnJvcjtcclxuXHRlcnJvciA9IHtcclxuXHRcdGNvZGU6IDUwMCxcclxuXHRcdGlzRXJyb3I6IHRydWUsXHJcblx0XHR0aW1lc3RhbXA6IERhdGUubm93KCksXHJcblx0XHRlcnJvcjogJ1Vua25vd24gZXJyb3InLFxyXG5cdFx0bWVzc2FnZXM6IFtdLFxyXG5cdFx0ZGF0YTogdW5kZWZpbmVkLFxyXG5cdH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKGVycikge1xyXG5cdFx0dGhpcy5yYXdFcnJvciA9IGVycjtcclxuXHRcdHRoaXMuc2V0RXJyb3IoKTtcclxuXHR9XHJcblxyXG5cdHNldEVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBcclxuXHRcdHRoaXMucmF3RXJyb3IgJiYgdGhpcy5yYXdFcnJvci5jb2RlXHJcblx0XHRcdD8gdGhpcy5yYXdFcnJvci5jb2RlXHJcbiAgICAgICAgICAgIDogdGhpcy5lcnJvci5jb2RlO1xyXG5cdFx0XHR0aGlzLmVycm9yLmNvZGUgPSB0aGlzLnJhd0Vycm9yLnN0YXR1cyA9PT0gNDAyID8gdGhpcy5yYXdFcnJvci5zdGF0dXMgOiAoY29kZSA/IGNvZGUgOiA0MDApO1xyXG5cdFx0dGhpcy5lcnJvci50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cdFx0dGhpcy5lcnJvci5tZXNzYWdlcyA9IFtdO1xyXG5cdFxyXG5cdFx0aWYgKHRoaXMucmF3RXJyb3IuZGF0YSAmJiB0eXBlb2YgdGhpcy5yYXdFcnJvci5kYXRhID09PSAnb2JqZWN0JyAmJiB0aGlzLnJhd0Vycm9yLmRhdGEubWVzc2FnZSkge1xyXG5cdFx0XHRpZiAoKHRoaXMucmF3RXJyb3IgJiYgdGhpcy5yYXdFcnJvci5kYXRhLm1lc3NhZ2UgPT09IFwiVG9rZW4gaGFzIGV4cGlyZWRcIikgfHwgKHRoaXMucmF3RXJyb3IgJiYgdGhpcy5yYXdFcnJvci5kYXRhLm1lc3NhZ2UgPT09IFwiVW5hdXRob3JpemVkLCBJbnZhbGlkIHRva2VuIVwiKSl7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcclxuXHRcdFx0fWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yLm1lc3NhZ2VzLnB1c2godGhpcy5yYXdFcnJvci5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblx0XHR9XHJcblx0XHRpZiAoIXRoaXMuZXJyb3IubWVzc2FnZXMubGVuZ3RoKSB7XHJcblx0XHRcdHRoaXMuZXJyb3IuZXJyb3IgPSAnVW5rbm93bic7XHJcblx0XHRcdHRoaXMuZXJyb3IubWVzc2FnZXMgPSBbbnVsbF07XHJcblx0XHR9XHJcblx0fTtcclxufSIsIi8qKlxyXG4gKiBTdWNjZXNzSGFuZGxlckhlbHBlciBDbGFzcyAtIEZvciBtYW5hZ2luZyBzdWNjZXNzZnVsIHJlc3BvbnNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3VjY2Vzc0hhbmRsZXJIZWxwZXIge1xyXG4gICAgcmF3RGF0YTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgaXNFcnJvcjogZmFsc2UsXHJcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcclxuICAgICAgbWVzc2FnZXM6IFtdLFxyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgdGhpcy5yYXdEYXRhID0gZGF0YTtcclxuICAgICAgdGhpcy5zZXRTdWNjY2VzcygpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0U3VjY2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XHJcbiAgXHJcbiAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5yYXdEYXRhKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJhd0RhdGFbaV0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgIG1lc3NhZ2VzLnB1c2godGhpcy5yYXdEYXRhW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXRhLmRhdGEgPSB0aGlzLnJhd0RhdGE7XHJcbiAgICAgIHRoaXMuZGF0YS5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xyXG4gICAgfTtcclxuICB9IiwiZXhwb3J0ICogZnJvbSAnLi9BcGlIZWxwZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1N1Y2Nlc3NIYW5kbGVySGVscGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9FcnJvckhhbmRsZXJIZWxwZXInOyIsImltcG9ydCBtYWtlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzJztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBIZXJvLCBTdG9yeSxcclxuICBUZWFtXHJcbn0gZnJvbSAnLi9jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBzZWN0aW9uTm9QYWRkaW5nVG9wOiB7XHJcbiAgICBwYWRkaW5nVG9wOiAwLFxyXG4gIH0sXHJcbiAgc2VjdGlvblBhcnRuZXJzOiB7XHJcbiAgICBib3hTaGFkb3c6ICcwIDVweCAyMHB4IDAgcmdiYSg5MCwgMjAyLCAxNTcsIDAuMDUpJyxcclxuICAgICcmIC5zZWN0aW9uLWFsdGVybmF0ZV9fY29udGVudCc6IHtcclxuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg1KSxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg1KSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoe2Ntc0RhdGEsIHRlYW1MaXN0fSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8SGVybyAvPlxyXG4gICAgICA8U2VjdGlvbj5cclxuICAgICAgICA8U3RvcnkgY21zRGF0YT17Y21zRGF0YX0gLz5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk5vUGFkZGluZ1RvcH0+XHJcbiAgICAgICAgPFRlYW0gY21zRGF0YT17Y21zRGF0YX0gdGVhbUxpc3Q9e3RlYW1MaXN0fSAvPlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAgbWFrZVN0eWxlcyAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXMnO1xyXG5pbXBvcnQgIExpc3QgIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgIExpc3RJdGVtICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCAgTGlzdEl0ZW1BdmF0YXIgIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcclxuaW1wb3J0ICBMaXN0SXRlbVRleHQgIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCAgQXZhdGFyICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xyXG5pbXBvcnQgeyBIZXJvU2hhcGVkLCBNYXAgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgbWFwOiB7XHJcbiAgICB6SW5kZXg6IDksXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IENvbnRhY3QgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5yZXN0fT5cclxuICAgICAgPEhlcm9TaGFwZWRcclxuICAgICAgICBsZWZ0U2lkZT17XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiQ29udGFjdCB1c1wiXHJcbiAgICAgICAgICAgICAgc3VidGl0bGU9XCJLZWVwIHRyYWNrIG9mIHdoYXQncyBoYXBwZW5pbmcgd2l0aCB5b3VyIGRhdGEsIGNoYW5nZSBwZXJtaXNzaW9ucywgYW5kIHJ1biByZXBvcnRzIGFnYWluc3QgeW91ciBkYXRhIGFueXdoZXJlIGluIHRoZSB3b3JsZC4gS2VlcCB0cmFjayBvZiB3aGF0J3MgaGFwcGVuaW5nIHdpdGggeW91ciBkYXRhLCBjaGFuZ2UgcGVybWlzc2lvbnMuXCJcclxuICAgICAgICAgICAgICBzdWJ0aXRsZVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50OiAnYm9keTEnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd0ZXh0UHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxMaXN0IGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBkaXNhYmxlR3V0dGVycyBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L2lsbHVzdHJhdGlvbnMvY29udGFjdC1pY29uLXBob25lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjU2V0PVwiaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvaWxsdXN0cmF0aW9ucy9jb250YWN0LWljb24tcGhvbmVAMngucG5nIDJ4XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9XCJQaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT1cIisxIDg2Ni0yOTgtOTY5NlwiXHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnlUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAnc3VidGl0bGUxJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3RleHRTZWNvbmRhcnknLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAnc3VidGl0bGUxJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3RleHRQcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICB7LyogPExpc3RJdGVtIGRpc2FibGVHdXR0ZXJzIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hc3NldHMubWFjY2FyaWFuYWdlbmN5LmNvbS90aGUtZnJvbnQvaWxsdXN0cmF0aW9ucy9jb250YWN0LWljb24tbWFpbC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyY1NldD1cImh0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L2lsbHVzdHJhdGlvbnMvY29udGFjdC1pY29uLW1haWxAMngucG5nIDJ4XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT1cImhpQG1hY2NhcmlhbmFnZW5jeS5jb21cIlxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5VHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogJ3N1YnRpdGxlMScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogJ3N1YnRpdGxlMScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd0ZXh0UHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+ICovfVxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBkaXNhYmxlR3V0dGVycyBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L2lsbHVzdHJhdGlvbnMvY29udGFjdC1pY29uLXBpbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyY1NldD1cImh0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L2lsbHVzdHJhdGlvbnMvY29udGFjdC1pY29uLXBpbkAyeC5wbmcgMnhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT1cIkhlYWQgT2ZmaWNlXCJcclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PVwiNDEwIE1lcmNhbnRpbGUgQ291cnRcclxuICAgICAgICAgICAgICAgICAgV2hlZWxpbmcsIElMIDYwMDkwXCJcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdzdWJ0aXRsZTEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndGV4dFNlY29uZGFyeScsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdzdWJ0aXRsZTEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndGV4dFByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmlnaHRTaWRlPXtcclxuICAgICAgICAgIDxNYXBcclxuICAgICAgICAgICAgY2VudGVyPXtbNDUuNDY0MjExLCA5LjAxMTM4M119XHJcbiAgICAgICAgICAgIHBpbnM9e2RhdGF9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Db250YWN0LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIGRhdGEgdG8gYmUgcmVuZGVyZWRcclxuICAgKi9cclxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NvbnRhY3QnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xyXG5pbXBvcnQgIHVzZU1lZGlhUXVlcnkgIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgIG1ha2VTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXMnO1xyXG5pbXBvcnQgIHVzZVRoZW1lICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvdXNlVGhlbWUnO1xyXG5pbXBvcnQgIEdyaWRMaXN0ICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdCc7XHJcbmltcG9ydCAgR3JpZExpc3RUaWxlICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGltYWdlOiB7XHJcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgR2FsbGVyeSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyksIHtcclxuICAgIGRlZmF1bHRNYXRjaGVzOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnJlc3R9PlxyXG4gICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgIHRpdGxlPVwiQ2hlY2tvdXQgb3VyIGdhbGxlcnlcIlxyXG4gICAgICAgIHN1YnRpdGxlPVwiQWZ0ZXIgMyBkYXlzIGFsbCBvZiB5b3VyIG9mZmVycyB3aWxsIGFycml2ZSBhbmQgeW91IHdpbGwgaGF2ZSBhbm90aGVyIDcgZGF5cyB0byBzZWxlY3QgeW91ciBuZXcgY29tcGFueS5cIlxyXG4gICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxHcmlkTGlzdCBjZWxsSGVpZ2h0PXtpc01kID8gMzYwIDogMjYwfSBjb2xzPXs0fSBzcGFjaW5nPXtpc01kID8gMjQgOiA4fT5cclxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8R3JpZExpc3RUaWxlIGtleT17aW5kZXh9IGNvbHM9e2lzTWQgPyBpdGVtLmNvbHMgOiA0IHx8IDF9PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICB7Li4uaXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0ubG9jYXRpb259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgICAgICAgICAgIGxhenlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWRMaXN0VGlsZT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9HcmlkTGlzdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5HYWxsZXJ5LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIGRhdGEgdG8gYmUgcmVuZGVyZWRcclxuICAgKi9cclxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0dhbGxlcnknO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0ICBtYWtlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzJztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuaW1wb3J0IEFib3V0SW1hZ2UgZnJvbSBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQvaW1nX2Fib3V0X2Jhbm5lci5wbmdcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgbWluSGVpZ2h0OiA0MDAsXHJcbiAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB0ZXh0V2hpdGU6IHtcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgfSxcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgbGVmdDogXCI1MCVcIixcclxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICAgIHBhZGRpbmdUb3A6IDAsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEhlcm8gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgc3JjPXtBYm91dEltYWdlfVxyXG4gICAgICAgIHNyY1NldD17QWJvdXRJbWFnZX1cclxuICAgICAgICBhbHQ9XCJBYm91dFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgICAgIGxhenlQcm9wcz17e1xyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHRpdGxlPSdBYm91dCBVcydcclxuICAgICAgICAgIHN1YnRpdGxlPSdPdXIgbWlzc2lvbiBpcyB0byBlZHVjYXRlIHRoZSB3b3JsZCBhYm91dCBibG9ja2NoYWluIGFuZCBjcnlwdG8uIEFuZCB3ZeKAmXJlIGhhdmluZyBmdW4gZG9pbmcgaXQhJ1xyXG4gICAgICAgICAgYWxpZ249J2xlZnQnXHJcbiAgICAgICAgICBkYXRhLWFvcz0nZmFkZS11cCdcclxuICAgICAgICAgIGRpc2FibGVHdXR0ZXJcclxuICAgICAgICAgIHRpdGxlUHJvcHM9e3tcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMudGl0bGUsIGNsYXNzZXMudGV4dFdoaXRlKSxcclxuICAgICAgICAgICAgdmFyaWFudDogXCJoM1wiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHN1YnRpdGxlUHJvcHM9e3tcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRleHRXaGl0ZSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm8ucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9IZXJvJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICBtYWtlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzJztcclxuaW1wb3J0ICB1c2VUaGVtZSAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3VzZVRoZW1lJztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuaW1wb3J0ICBHcmlkICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0ICB1c2VNZWRpYVF1ZXJ5ICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBwcm9tb0xvZ286IHtcclxuICAgIG1heFdpZHRoOiAxMjAsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFBhcnRuZXJzID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc01kID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKSwge1xyXG4gICAgZGVmYXVsdE1hdGNoZXM6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXtpc01kID8gNCA6IDJ9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgICB0aXRsZT1cIlRydXN0ZWQgYnkgTWlsbGlvbnMgb2YgUGVvcGxlXCJcclxuICAgICAgICAgICAgc3VidGl0bGU9XCJXZSBhcmUgcmVnaXN0ZXJlZCBhcyBhIGRpc3RyaWJ1dG9yIHdpdGggQU1GSSwgYXMgYW4gaW52ZXN0bWVudCBhZHZpc29yIHdpdGggU0VCSSBhbmQgcGxhdGZvcm0gcGFydG5lcnMgd2l0aCBCU0UuXCJcclxuICAgICAgICAgICAgZmFkZVVwXHJcbiAgICAgICAgICAgIGRpc2FibGVHdXR0ZXJcclxuICAgICAgICAgICAgYWxpZ249e2lzTWQgPyAnbGVmdCcgOiAnY2VudGVyJ31cclxuICAgICAgICAgICAgdGl0bGVQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50aXRsZSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChwYXJ0bmVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgeHM9ezR9XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e3BhcnRuZXIubG9nb31cclxuICAgICAgICAgICAgICAgIGFsdD17cGFydG5lci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnByb21vTG9nb31cclxuICAgICAgICAgICAgICAgIGxhenk9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblBhcnRuZXJzLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIGRhdGEgdG8gYmUgcmVuZGVyZWRcclxuICAgKi9cclxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRuZXJzO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9QYXJ0bmVycyc7XHJcbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgbWFrZVN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlcyc7XHJcbmltcG9ydCB1c2VUaGVtZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvdXNlVGhlbWUnO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwiY29tcG9uZW50cy9hdG9tc1wiO1xyXG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSBcImNvbXBvbmVudHMvbW9sZWN1bGVzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciBmcm9tIFwicmVhY3QtaHRtbC1wYXJzZXJcIjtcclxuaW1wb3J0IEFwcENvbmZpZyBmcm9tIFwiLi4vLi4vLi4vLi4vY29uZmlnL2FwcENvbmZpZ1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgaW1hZ2U6IHtcclxuICAgIG1heFdpZHRoOiA0MjAsXHJcbiAgfSxcclxuICBzcENlbnRlcjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBcIiYgaDRcIjoge1xyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICB9LFxyXG4gICAgXCImIHBcIjoge1xyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU3RvcnkgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgY21zRGF0YSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKSwge1xyXG4gICAgZGVmYXVsdE1hdGNoZXM6IHRydWUsXHJcbiAgfSk7XHJcbiAgLy8gRm9yIEdldCBUZW1wbGF0ZSBEYXRhXHJcbiAgY29uc3QgW2dldFRlbXBsYXRlRGF0YSwgc2V0R2V0VGVtcGxhdGVEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY21zRGF0YSAmJiBjbXNEYXRhLmxlbmd0aCkge1xyXG4gICAgICBsZXQgZ2V0RGF0YSA9IGNtc0RhdGEuZmlsdGVyKChlKSA9PiBlLnRpdGxlU2x1ZyA9PT0gXCJhYm91dFVzXCIpO1xyXG4gICAgICBzZXRHZXRUZW1wbGF0ZURhdGEoLi4uZ2V0RGF0YSk7XHJcbiAgICB9XHJcbiAgfSwgW2Ntc0RhdGFdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5yZXN0fT5cclxuICAgICAgPEdyaWRcclxuICAgICAgICBjb250YWluZXJcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD0nc3BhY2UtYmV0d2VlbidcclxuICAgICAgICBzcGFjaW5nPXtpc01kID8gNCA6IDJ9XHJcbiAgICAgICAgZGlyZWN0aW9uPXtpc01kID8gXCJyb3dcIiA6IFwiY29sdW1uLXJldmVyc2VcIn1cclxuICAgICAgPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PSdmbGV4LXN0YXJ0J1xyXG4gICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgbWQ9ezd9XHJcbiAgICAgICAgICBkYXRhLWFvcz17XCJmYWRlLXVwXCJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICBnZXRUZW1wbGF0ZURhdGEgJiYgZ2V0VGVtcGxhdGVEYXRhLmJsb2NrVGl0bGUxLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICA/IGdldFRlbXBsYXRlRGF0YS5ibG9ja1RpdGxlMVxyXG4gICAgICAgICAgICAgICAgICA6IFwiT3VyIHN0b3J5XCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgc3VidGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgZ2V0VGVtcGxhdGVEYXRhICYmIGdldFRlbXBsYXRlRGF0YS5ibG9jazEubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgID8gUmVhY3RIdG1sUGFyc2VyKGdldFRlbXBsYXRlRGF0YS5ibG9jazEpXHJcbiAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhbGlnbj0nbGVmdCdcclxuICAgICAgICAgICAgICBkaXNhYmxlR3V0dGVyXHJcbiAgICAgICAgICAgICAgc3VidGl0bGVQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwidGV4dFByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiYm9keTFcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcENlbnRlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICB7Z2V0VGVtcGxhdGVEYXRhICYmIGdldFRlbXBsYXRlRGF0YS5ibG9ja0ltYWdlMS5sZW5ndGggPyAoXHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17aXNNZCA/IFwiZmxleC1lbmRcIiA6IFwiZmxleC1zdGFydFwifVxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgbWQ9ezV9XHJcbiAgICAgICAgICAgIGRhdGEtYW9zPXtcImZhZGUtdXBcIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNwQ2VudGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2Ake0FwcENvbmZpZy5JTUFHRV9VUkx9LyR7Z2V0VGVtcGxhdGVEYXRhLmJsb2NrSW1hZ2UxfWB9XHJcbiAgICAgICAgICAgICAgc3JjU2V0PXtgJHtBcHBDb25maWcuSU1BR0VfVVJMfS8ke2dldFRlbXBsYXRlRGF0YS5ibG9ja0ltYWdlMX1gfVxyXG4gICAgICAgICAgICAgIGFsdD0nT3VyIHN0b3J5J1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblN0b3J5LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Rvcnk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1N0b3J5JztcclxuIiwiaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCI7XHJcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzJztcclxuaW1wb3J0IHVzZVRoZW1lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy91c2VUaGVtZSc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSBcImNvbXBvbmVudHMvbW9sZWN1bGVzXCI7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSBcImNvbXBvbmVudHMvb3JnYW5pc21zXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciBmcm9tIFwicmVhY3QtaHRtbC1wYXJzZXJcIjtcclxuaW1wb3J0IEFwcENvbmZpZyBmcm9tIFwiLi4vLi4vLi4vLi4vY29uZmlnL2FwcENvbmZpZ1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY2FyZEJhc2U6IHtcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmFsdGVybmF0ZS5tYWluLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgXCImIC5jYXJkLWJhc2VfX2NvbnRlbnRcIjoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImIGFcIjoge1xyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjAuN3JlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGF2YXRhcjoge1xyXG4gICAgd2lkdGg6IDExMCxcclxuICAgIG9iamVjdEZpdDpcImNvdmVyXCIsXHJcbiAgICBvYmplY3RQb3NpdGlvbjpcImNlbnRlciB0b3BcIixcclxuICAgIGhlaWdodDogMTEwLFxyXG4gICAgYm9yZGVyOiBgNHB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5hbHRlcm5hdGUuZGFya31gLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIixcclxuICAgIGJveFNoYWRvdzogXCIwIDVweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICB3aWR0aDogODAsXHJcbiAgICAgIGhlaWdodDogODAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaXN0SXRlbUF2YXRhcjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxLjUpLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDApLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpc3RJdGVtVGV4dDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICBtYXJnaW46IDAsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiMXJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBvcG92ZXJfZGl2OiB7XHJcbiAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIixcclxuICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gIH0sXHJcbiAgY3VzdG9taXNlZF9wb3BvdmVyOiB7XHJcbiAgICBib3hTaGFkb3c6IFwicmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweFwiLFxyXG4gIH0sXHJcbiAgY29tbW9uQnRuOiB7XHJcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgcGFkZGluZzogXCI3cHggMTBweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM1MTIwRkZcIixcclxuICAgIGZvbnRTaXplOiAxNixcclxuICAgIG1pbldpZHRoOiAyMDAsXHJcbiAgICBib3JkZXI6IFwic29saWQgMXB4ICM1MTIwRkZcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgZWFzZS1pbi1vdXRcIixcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICBjb2xvcjogXCIjNTEyMEZGXCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc21hbGxDb21tb25CdG46IHtcclxuICAgIG1pbldpZHRoOiAxMzIsXHJcbiAgICBwYWRkaW5nOiBcIjhweCAxMHB4XCIsXHJcbiAgICBmb250U2l6ZTogMTUsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgVGVhbSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjbXNEYXRhLCB0ZWFtTGlzdCwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc01kID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpLCB7XHJcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcclxuICB9KTtcclxuICBjb25zdCBbYXV0aG9yRGV0YWlsLCBzZXRhdXRob3JEZXRhaWxzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQsIGlkKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICAgIGxldCByZXF1aXJlZF9pZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQ7XHJcbiAgICBsZXQgbmV3RGF0YSA9IHRlYW1MaXN0LmZpbHRlcigobmV3QXJyYXksIGluZGV4KSA9PiBpbmRleCA9PSByZXF1aXJlZF9pZCk7XHJcbiAgICBzZXRhdXRob3JEZXRhaWxzKG5ld0RhdGEpO1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgY29uc3QgaWQgPSBvcGVuID8gYHNpbXBsZS1wb3BvdmVyYCA6IHVuZGVmaW5lZDtcclxuXHJcbiAgLy8gRm9yIEdldCBUZW1wbGF0ZSBEYXRhXHJcbiAgY29uc3QgW2dldFRlbXBsYXRlRGF0YSwgc2V0R2V0VGVtcGxhdGVEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY21zRGF0YSAmJiBjbXNEYXRhLmxlbmd0aCkge1xyXG4gICAgICBsZXQgZ2V0RGF0YSA9IGNtc0RhdGEuZmlsdGVyKChlKSA9PiBlLnRpdGxlU2x1ZyA9PT0gXCJhYm91dFVzXCIpO1xyXG4gICAgICBzZXRHZXRUZW1wbGF0ZURhdGEoLi4uZ2V0RGF0YSk7XHJcbiAgICB9XHJcbiAgfSwgW2Ntc0RhdGFdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5yZXN0fT5cclxuICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICBnZXRUZW1wbGF0ZURhdGEgJiYgZ2V0VGVtcGxhdGVEYXRhLmJsb2NrVGl0bGUyLmxlbmd0aFxyXG4gICAgICAgICAgICA/IGdldFRlbXBsYXRlRGF0YS5ibG9ja1RpdGxlMlxyXG4gICAgICAgICAgICA6IFwiTWVldCBvdXIgdGVhbVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1YnRpdGxlPXtcclxuICAgICAgICAgIGdldFRlbXBsYXRlRGF0YSAmJiBnZXRUZW1wbGF0ZURhdGEuYmxvY2syLmxlbmd0aFxyXG4gICAgICAgICAgICA/IFJlYWN0SHRtbFBhcnNlcihnZXRUZW1wbGF0ZURhdGEuYmxvY2syKVxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXtpc01kID8gMiA6IDF9PlxyXG4gICAgICAgIHt0ZWFtTGlzdCAmJiB0ZWFtTGlzdC5sZW5ndGhcclxuICAgICAgICAgID8gdGVhbUxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICBpdGVtLmlzQWN0aXZlID9cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17Nn0gbWQ9ezR9IGtleT17aW5kZXh9IGRhdGEtYW9zPSdmYWRlLXVwJz5cclxuICAgICAgICAgICAgICAgIDxDYXJkQmFzZSBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZEJhc2V9IGxpZnRVcD5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGRpc2FibGVHdXR0ZXJzIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbUF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7QXBwQ29uZmlnLklNQUdFX1VSTH0vJHtpdGVtLnRlYW1NZW1iZXJJbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNTZXQ9e2Ake0FwcENvbmZpZy5JTUFHRV9VUkx9LyR7aXRlbS50ZWFtTWVtYmVySW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW1UZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtgJHtpdGVtLmZpcnN0TmFtZX0gJHtpdGVtLmxhc3ROYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17aXRlbS5kZXNpZ25hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcImg2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246IGlzTWQgPyBcImxlZnRcIiA6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInRleHRQcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246IGlzTWQgPyBcImxlZnRcIiA6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9JyNvdXRsaW5lZC1idXR0b25zJ1xyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5jb21tb25CdG4sIGNsYXNzZXMuc21hbGxDb21tb25CdG4pfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTW9yZSBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQmFzZT5cclxuICAgICAgICAgICAgICAgIHthdXRob3JEZXRhaWwubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJib3R0b21cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbWlzZWRfcG9wb3Zlcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3BvdmVyX2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtSZWFjdEh0bWxQYXJzZXIoZGF0YS5hYm91dFVzKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIDogbnVsbH1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblRlYW0ucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UZWFtJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICBtYWtlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzJztcclxuaW1wb3J0ICB1c2VUaGVtZSAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3VzZVRoZW1lJztcclxuaW1wb3J0ICBHcmlkICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcclxuaW1wb3J0ICB1c2VNZWRpYVF1ZXJ5ICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuXHJcbmNvbnN0IFdob1dlQXJlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzTWQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpLCB7XHJcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5yZXN0fT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e2lzTWQgPyA0IDogMn0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICAgIHRpdGxlPVwiV2hvIGFyZSB3ZT9cIlxyXG4gICAgICAgICAgICBzdWJ0aXRsZT1cIk91ciBzaWduIHVwIGlzIGRlYWQgc2ltcGxlLiBXZSBvbmx5IHJlcXVpcmUgeW91ciBiYXNpYyBjb21wYW55IGluZm9ybWF0aW9uIGFuZCB3aGF0IHR5cGUgb2YgZGF0YSBzdG9yYWdlIHlvdSB3YW50LiBPdXIgc2lnbiB1cCBpcyBkZWFkIHNpbXBsZS4gV2Ugb25seSByZXF1aXJlIHlvdXIgYmFzaWMgY29tcGFueSBpbmZvcm1hdGlvbiBhbmQgd2hhdCB0eXBlIG9mIGRhdGEgc3RvcmFnZSB5b3Ugd2FudC5cIlxyXG4gICAgICAgICAgICBkaXNhYmxlR3V0dGVyXHJcbiAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHN1YnRpdGxlUHJvcHM9e3tcclxuICAgICAgICAgICAgICB2YXJpYW50OiAnYm9keTEnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAndGV4dFByaW1hcnknLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICAgIHRpdGxlPVwiV2hhdOKAmXMgdXAgd2l0aCB0aGUgbmFtZT9cIlxyXG4gICAgICAgICAgICBzdWJ0aXRsZT1cIldlIHN1cHBvcnQgYnVsayB1cGxvYWRpbmcgdmlhIFNRTCwgaW50ZWdyYXRpb25zIHdpdGggbW9zdCBkYXRhIHN0b3JhZ2UgcHJvZHVjdHMsIG9yIHlvdSBjYW4gdXNlIG91ciBBUEkuIFNpbXBseSBzZWxlY3Qgd2hlcmUgeW91J2QgbGlrZSB0byB0cmFuc2ZlciB5b3VyIGRhdGEgYW5kIHdlJ2xsIGJlaW5nIHRoZSBwcm9jZXNzIG9mIG1pZ3JhdGluZyBpdCBpbnN0YW50bHkuXCJcclxuICAgICAgICAgICAgZGlzYWJsZUd1dHRlclxyXG4gICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBzdWJ0aXRsZVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgdmFyaWFudDogJ2JvZHkxJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJ3RleHRQcmltYXJ5JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuV2hvV2VBcmUucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaG9XZUFyZTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vV2hvV2VBcmUnO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENvbnRhY3QgfSBmcm9tICcuL0NvbnRhY3QnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdhbGxlcnkgfSBmcm9tICcuL0dhbGxlcnknO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlcm8gfSBmcm9tICcuL0hlcm8nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcnRuZXJzIH0gZnJvbSAnLi9QYXJ0bmVycyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcnkgfSBmcm9tICcuL1N0b3J5JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZWFtIH0gZnJvbSAnLi9UZWFtJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBXaG9XZUFyZSB9IGZyb20gJy4vV2hvV2VBcmUnO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9BYm91dCc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL05vU3NyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9ab29tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvdXNlVGhlbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd1JpZ2h0QWx0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93VXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xzeFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqYXJhbGxheFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsZWFmbGV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY291bnR1cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1odG1sLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxlYWZsZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHlwZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dpcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZhbGlkYXRlLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=