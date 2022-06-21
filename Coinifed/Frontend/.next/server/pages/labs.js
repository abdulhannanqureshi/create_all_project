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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/labs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/labs.js":
/*!***********************!*\
  !*** ./pages/labs.js ***!
  \***********************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var views_Labs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! views/Labs */ "./src/views/Labs/index.js");
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
  }

  return {
    props: {
      cmsData
    },
    revalidate: 10
  };
}
/* harmony default export */ __webpack_exports__["default"] = (views_Labs__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./public/assets/banner-shape.png":
/*!****************************************!*\
  !*** ./public/assets/banner-shape.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-shape-356d0b701eaf0bdaf7a8daa283b902d0.png";

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

/***/ "./src/views/Labs/Labs.js":
/*!********************************!*\
  !*** ./src/views/Labs/Labs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/useTheme */ "@material-ui/core/styles/useTheme");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_assets_banner_shape_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../public/assets/banner-shape.png */ "./public/assets/banner-shape.png");
/* harmony import */ var _public_assets_banner_shape_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_assets_banner_shape_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_assets_images_Certificate_page_certificate_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../src/assets/images/Certificate-page/certificate.jpg */ "./src/assets/images/Certificate-page/certificate.jpg");
/* harmony import */ var _src_assets_images_Certificate_page_certificate_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_assets_images_Certificate_page_certificate_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../config/appConfig */ "./src/config/appConfig.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components */ "./src/views/Labs/components/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\Labs\\Labs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

















const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default()(theme => ({
  certificate_sec: {
    display: "flex",
    alignItems: "center",
    padding: "90px 0px 100px 0px",
    justifyContent: "center",
    background: "#f5f5f5",
    minHeight: "800px"
  },
  certificate_box: {
    backgroundImage: `url(${_src_assets_images_Certificate_page_certificate_jpg__WEBPACK_IMPORTED_MODULE_13___default.a})`,
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
  },
  commonList: {
    "& li": {
      marginBottom: "10px !important"
    }
  }
}));

const Labs = ({
  cmsData
}) => {
  const theme = _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_4___default()();
  const isMd = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default()(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  const classes = useStyles(); // For Fetch CMS Data

  const {
    0: getTemplateData,
    1: setGetTemplateData
  } = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(null); // For Get Template Data

  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(() => {
    if (cmsData && cmsData.length) {
      let getData = cmsData.filter(e => e.titleSlug === "labs");
      setGetTemplateData(...getData);
    }
  }, [cmsData]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  }, "Coinifide | Labs"), __jsx("meta", {
    name: "description",
    content: "We marry our carefully curated content and courses with interactive videos and hands-on labs.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_15__["Hero"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.bannerBottom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 7
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: _public_assets_banner_shape_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    srcSet: _public_assets_banner_shape_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "banner-bottom",
    className: classes.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: classes.wrapperSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 7
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_9__["Section"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_7___default()(classes.contentSection, classes.subTitle, classes.pb_60),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: isMd ? 0 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 11
    }
  }, getTemplateData && getTemplateData.blockImage1.length ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
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
      lineNumber: 253,
      columnNumber: 15
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_14__["default"].IMAGE_URL}/${getTemplateData.blockImage1}`,
    srcSet: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_14__["default"].IMAGE_URL}/${getTemplateData.blockImage1}`,
    alt: "Labs",
    className: classes.imageLabs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 17
    }
  }))) : null, getTemplateData && getTemplateData.block1.length ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    "data-aos": "fade-up",
    className: classes.order_sp_30,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    elevation: 2,
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 15
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_11___default()(getTemplateData.block1))) : null)), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_9__["Section"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_7___default()(classes.contentSection, classes.subTitle, classes.pb_60),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: isMd ? 0 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 11
    }
  }, getTemplateData && getTemplateData.block2.length ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    "data-aos": "fade-up",
    className: classes.order_sp_30,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    elevation: 2,
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 15
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_11___default()(getTemplateData.block2))) : null, getTemplateData && getTemplateData.blockImage2.length ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
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
      lineNumber: 309,
      columnNumber: 15
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_14__["default"].IMAGE_URL}/${getTemplateData.blockImage2}`,
    srcSet: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_14__["default"].IMAGE_URL}/${getTemplateData.blockImage2}`,
    alt: "Labs",
    className: classes.imageLabs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 17
    }
  }))) : null)), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_9__["Section"], {
    className: classes.sectionWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 9
    }
  }, getTemplateData && getTemplateData.blockTitle4.length ? __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
    mb: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "h4",
    align: "center",
    color: "textPrimary",
    className: classes.blogchain_heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 13
    }
  }, getTemplateData.blockTitle4)) : null, getTemplateData && getTemplateData.block3.length ? react_html_parser__WEBPACK_IMPORTED_MODULE_11___default()(getTemplateData.block3) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Labs);

/***/ }),

/***/ "./src/views/Labs/components/Hero/Hero.js":
/*!************************************************!*\
  !*** ./src/views/Labs/components/Hero/Hero.js ***!
  \************************************************/
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
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\Labs\\components\\Hero\\Hero.js";
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
    title: "Labs",
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

/***/ "./src/views/Labs/components/Hero/index.js":
/*!*************************************************!*\
  !*** ./src/views/Labs/components/Hero/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero */ "./src/views/Labs/components/Hero/Hero.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Hero__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Labs/components/index.js":
/*!********************************************!*\
  !*** ./src/views/Labs/components/index.js ***!
  \********************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero */ "./src/views/Labs/components/Hero/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _Hero__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Labs/index.js":
/*!*********************************!*\
  !*** ./src/views/Labs/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Labs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Labs */ "./src/views/Labs/Labs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Labs__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbGFicy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2Jhbm5lci1zaGFwZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvQ2VydGlmaWNhdGUtcGFnZS9jZXJ0aWZpY2F0ZS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGVhZmxldC1hc3NldHMvbWFya2VyLWljb24tMngucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2xlYWZsZXQtYXNzZXRzL21hcmtlci1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9sZWFmbGV0LWFzc2V0cy9tYXJrZXItc2hhZG93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9EYXJrTW9kZVRvZ2dsZXIvRGFya01vZGVUb2dnbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL0RhcmtNb2RlVG9nZ2xlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JY29uL0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvSWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JY29uVGV4dC9JY29uVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JY29uVGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JbWFnZS9JbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9MZWFybk1vcmVMaW5rL0xlYXJuTW9yZUxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvTGVhcm5Nb3JlTGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9TY3JvbGxUb3AvU2Nyb2xsVG9wLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL1Njcm9sbFRvcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvQ291bnRVcE51bWJlci9Db3VudFVwTnVtYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Db3VudFVwTnVtYmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9EZXNjcmlwdGlvbkN0YS9EZXNjcmlwdGlvbkN0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvRGVzY3JpcHRpb25DdGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL0ljb25BbHRlcm5hdGUvSWNvbkFsdGVybmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvSWNvbkFsdGVybmF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvT3ZlcmxhcGVkSW1hZ2VzL092ZXJsYXBlZEltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvT3ZlcmxhcGVkSW1hZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9TZWN0aW9uSGVhZGVyL1NlY3Rpb25IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1NlY3Rpb25IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1N3aXBlckltYWdlL1N3aXBlckltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Td2lwZXJJbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU3dpcGVyTnVtYmVyL1N3aXBlck51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU3dpcGVyTnVtYmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9UeXBlZFRleHQvVHlwZWRUZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9UeXBlZFRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9BY2NvcmRpb24vQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9BY2NvcmRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRCYXNlL0NhcmRCYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkQmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZENhdGVnb3J5L0NhcmRDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZENhdGVnb3J5L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkQ2F0ZWdvcnlMaW5rL0NhcmRDYXRlZ29yeUxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRDYXRlZ29yeUxpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2IvQ2FyZEpvYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYkNvbXBhbnkvQ2FyZEpvYkNvbXBhbnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2JDb21wYW55L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkSm9iTWluaW1hbC9DYXJkSm9iTWluaW1hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYk1pbmltYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2JUYWcvQ2FyZEpvYlRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYlRhZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFByaWNpbmdTdGFuZGFyZC9DYXJkUHJpY2luZ1N0YW5kYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkUHJpY2luZ1N0YW5kYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkUHJvZHVjdC9DYXJkUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFByb2R1Y3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRQcm9tby9DYXJkUHJvbW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRQcm9tby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFJldmlldy9DYXJkUmV2aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkUmV2aWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9Db250YWN0Rm9ybS9Db250YWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ29udGFjdEZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0Rlc2NyaXB0aW9uTGlzdEljb24vRGVzY3JpcHRpb25MaXN0SWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvRGVzY3JpcHRpb25MaXN0SWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvSGVyb0JhY2tncm91bmQvSGVyb0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9CYWNrZ3JvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9IZXJvU2hhcGVkL0hlcm9TaGFwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9TaGFwZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9TaWRlSW1hZ2UvSGVyb1NpZGVJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvSGVyb1NpZGVJbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvSGVyb1NpbXBsZUJhY2tncm91bmQvSGVyb1NpbXBsZUJhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9TaW1wbGVCYWNrZ3JvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9NYXAvTWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9NYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL1BhcmFsbGF4L1BhcmFsbGF4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9QYXJhbGxheC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvU2VjdGlvbi9TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9TZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9TZWN0aW9uQWx0ZXJuYXRlL1NlY3Rpb25BbHRlcm5hdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL1NlY3Rpb25BbHRlcm5hdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvQXBpUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvYXBwQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9BcGlIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9FcnJvckhhbmRsZXJIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9TdWNjZXNzSGFuZGxlckhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9MYWJzL0xhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0xhYnMvY29tcG9uZW50cy9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0V4cG8vY29tcG9uZW50cy9IZXJvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9DZXJ0aWZpY2F0ZS9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9MYWJzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL05vU3NyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvWm9vbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3VzZVRoZW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dSaWdodEFsdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dVcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImphcmFsbGF4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibGVhZmxldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvdW50dXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1odG1sLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sZWFmbGV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdHlwZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3aXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZhbGlkYXRlLmpzXCIiXSwibmFtZXMiOlsiZ2V0U3RhdGljUHJvcHMiLCJyZXNwb25zZUNNUyIsIkFwaUhlbHBlciIsIkZldGNoRnJvbVNlcnZlciIsIkFwaVJvdXRlcyIsIkZST05UX1BBR0VfREFUQSIsInNlcnZpY2UiLCJ1cmwiLCJtZXRob2QiLCJhdXRoZW50aWNhdGUiLCJ1bmRlZmluZWQiLCJjbXNEYXRhIiwiaXNFcnJvciIsImRhdGEiLCJwcm9wcyIsInJldmFsaWRhdGUiLCJMYWJzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsInBvc2l0aW9uIiwiYm9yZGVyIiwid2lkdGgiLCJzcGFjaW5nIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJwYWxldHRlIiwiZGl2aWRlciIsImJhY2tncm91bmRDb2xvciIsImJyZWFrcG9pbnRzIiwidXAiLCJib3JkZXJEYXJrIiwiY29sb3JzIiwiaW5kaWdvIiwibW9kZVRvZ2dsZXIiLCJ0b3AiLCJsZWZ0IiwidGV4dCIsInByaW1hcnkiLCJ0cmFuc2l0aW9uIiwiY3Vyc29yIiwibW9kZVRvZ2dsZXJEYXJrIiwidHJhbnNmb3JtIiwibW9kZVRvZ2dsZXJJY29uIiwiZmlsbCIsInNlY29uZGFyeSIsIm1haW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiRGFya01vZGVUb2dnbGVyIiwidGhlbWVNb2RlIiwib25DbGljayIsImNsYXNzTmFtZSIsInJlc3QiLCJjbGFzc2VzIiwiY2xzeCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZXh0cmFTbWFsbCIsImZvbnRTaXplIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsIkljb24iLCJmb250SWNvbkNsYXNzIiwic2l6ZSIsImZvbnRJY29uQ29sb3IiLCJjb2xvciIsImRlZmF1bHRQcm9wcyIsIm9uZU9mIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYWxpZ25JdGVtcyIsInRpdGxlIiwiSWNvblRleHQiLCJpY29uUHJvcHMiLCJ0eXBvZ3JhcGh5UHJvcHMiLCJvYmplY3QiLCJkQmxvY2siLCJJbWFnZSIsInNyYyIsInNyY1NldCIsImFsdCIsImxhenkiLCJsYXp5UHJvcHMiLCJib29sIiwidGV4dERlY29yYXRpb24iLCJmb250V2VpZ2h0IiwiaWNvbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiTGVhcm5Nb3JlTGluayIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJocmVmIiwiY2hpbGRyZW4iLCJib3R0b20iLCJyaWdodCIsIlNjcm9sbFRvcCIsInRyaWdnZXIiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwiZGlzYWJsZUh5c3RlcmVzaXMiLCJ0aHJlc2hvbGQiLCJoYW5kbGVDbGljayIsIndpbmRvdyIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJDb3VudFVwTnVtYmVyIiwic3RhcnQiLCJlbmQiLCJzdWZmaXgiLCJwcmVmaXgiLCJsYWJlbCIsInRleHRDb2xvciIsImxhYmVsQ29sb3IiLCJ2aXNpYmlsaXR5U2Vuc29yUHJvcHMiLCJ3cmFwcGVyUHJvcHMiLCJjb3VudFdyYXBwZXJQcm9wcyIsImNvdW50TnVtYmVyUHJvcHMiLCJsYWJlbFByb3BzIiwidmlld1BvcnRFbnRlcmVkIiwic2V0Vmlld1BvcnRFbnRlcmVkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldFZpZXdQb3J0VmlzaWJpbGl0eSIsImlzVmlzaWJsZSIsIm51bWJlciIsIkRlc2NyaXB0aW9uQ3RhIiwic3VidGl0bGUiLCJwcmltYXJ5Q3RhIiwic2Vjb25kYXJ5Q3RhIiwiYWxpZ24iLCJ0aXRsZVByb3BzIiwic3VidGl0bGVQcm9wcyIsImJ1dHRvbkdyb3VwUHJvcHMiLCJwcmltYXJ5QnV0dG9uV3JhcHBlclByb3BzIiwic2Vjb25kYXJ5QnV0dG9uV3JhcHBlclByb3BzIiwidXNlVGhlbWUiLCJpc1NtIiwidXNlTWVkaWFRdWVyeSIsImRlZmF1bHRNYXRjaGVzIiwianVzdGlmeUdyaWQiLCJub2RlIiwiY2lyY2xlIiwic3F1YXJlIiwiSWNvbkFsdGVybmF0ZSIsInNoYXBlIiwidXNlQmFja2dyb3VuZFN0eWxlcyIsImJhY2tncm91bmRDbGFzc2VzIiwicmVkIiwicGluayIsInB1cnBsZSIsImRlZXBQdXJwbGUiLCJibHVlIiwibGlnaHRCbHVlIiwiY3lhbiIsInRlYWwiLCJncmVlbiIsImxpZ2h0R3JlZW4iLCJsaW1lIiwieWVsbG93IiwiYW1iZXIiLCJvcmFuZ2UiLCJkZWVwT3JhbmdlIiwiYnJvd24iLCJncmV5IiwiYmx1ZUdyZXkiLCJpbWFnZUdyaWQiLCJib3hTaGFkb3ciLCJwYXBlciIsIm1heFdpZHRoIiwidmVydGljYWxBbGlnbiIsImJvcmRlclN0eWxlIiwiaW1hZ2VHcmlkRmlyc3RJdGVtIiwiaW1hZ2VHcmlkTGFzdEl0ZW0iLCJmbG9hdCIsIk92ZXJsYXBlZEltYWdlcyIsImltYWdlMSIsImltYWdlMiIsImltYWdlMyIsInNyY3NldCIsIm1hcmdpbkJvdHRvbSIsImRpc2FibGVHdXR0ZXIiLCJjdGEiLCJTZWN0aW9uSGVhZGVyIiwidGl0bGVWYXJpYW50Iiwic3VidGl0bGVWYXJpYW50Iiwic3VidGl0bGVDb2xvciIsIm92ZXJsaW5lIiwiZmFkZVVwIiwiY3RhR3JvdXAiLCJ0aXRsZUNsYXNzZXMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwiekluZGV4Iiwic3dpcGVyU2xpZGUiLCJzd2lwZXJOYXYiLCJqdXN0aWZ5Q29udGVudCIsImNhcmRTaGFkb3ciLCJpbWFnZSIsIm9iamVjdEZpdCIsIlN3aXBlckltYWdlIiwiaXRlbXMiLCJuYXZpZ2F0aW9uQnV0dG9uU3R5bGUiLCJpbWFnZUNsYXNzTmFtZSIsInVzZUVmZmVjdCIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwicGFkZGluZ0JvdHRvbSIsIlN3aXBlck51bWJlciIsIm51bWJlclByb3BzIiwiaXNNZCIsInBhZ2luYXRpb24iLCJlbCIsInR5cGUiLCJjbGlja2FibGUiLCJhdXRvcGxheSIsImRlbGF5IiwiVHlwZWRUZXh0IiwidHlwZWRQcm9wcyIsImZsZXhEaXJlY3Rpb24iLCJleHBhbmRPcGVuIiwiZGFyayIsImxpc3RJdGVtIiwiQWNjb3JkaW9uIiwidGV4dFByb3BzIiwibGlua1Byb3BzIiwiaWQiLCJsaW5rIiwiYXJyYXkiLCJ3aXRoU2hhZG93Iiwibm9TaGFkb3ciLCJub0JvcmRlciIsIm5vQmciLCJsaWZ0VXAiLCJjb250ZW50IiwiY2VudGVyIiwiQ2FyZEJhc2UiLCJjYXJkQ29udGVudFByb3BzIiwiQ2FyZENhdGVnb3J5IiwiZm9udFdlaWdodDcwMCIsImhlYWRpbmciLCJjYXRlZ29yeUljb25CdXR0b24iLCJzdWJoZWFkaW5nIiwiQ2FyZENhdGVnb3J5TGluayIsImljb25BbHRlcm5hdGVQcm9wcyIsImRvdCIsIm1hcmdpblJpZ2h0IiwiZG90QmlnIiwiZG90U21hbGwiLCJqb2JUaXRsZSIsImRvdE1hcmdpbiIsIm1hcmdpbiIsIkNhcmRKb2IiLCJiYWRnZUNvbG9yIiwiYmFkZ2VUaXRsZSIsImpvYkxvY2F0aW9uIiwiam9iVHlwZSIsImpvYkRhdGUiLCJjb21wYW55TG9nbyIsImNvbXBhbnlOYW1lIiwiY29tcGFueUF2YXRhciIsIkNhcmRKb2JDb21wYW55Iiwiam9ic0NvdW50IiwiY29tcGFueUluZm8iLCJjYXJkSm9iTWluaW1hbEJvZHkiLCJDYXJkSm9iTWluaW1hbCIsInNob3dBcnJvdyIsImJvcmRlclJpZ2h0IiwidGFnIiwidGV4dFdoaXRlIiwiQ2FyZEpvYlRhZyIsImZlYXR1cmVDaGVjayIsIkNhcmRQcmljaW5nU3RhbmRhcmQiLCJwcmljZUNvbXBvbmVudCIsImZlYXR1cmVDaGVja0NvbXBvbmVudCIsImZlYXR1cmVzIiwiZGlzY2xhaW1lciIsImRpc2NsYWltZXJQcm9wcyIsImZlYXR1cmVUaXRsZVByb3BzIiwibWVkaWEiLCJDYXJkUHJvZHVjdCIsIm1lZGlhQ2xhc3NOYW1lIiwiY2FyZENvbnRlbnQiLCJtZWRpYUNvbnRlbnQiLCJhbnkiLCJ0ZXh0Qmx1ZSIsImltZ0ZsdWlkIiwicGJfMCIsInBiX3B0XzAiLCJwYWRkaW5nVG9wIiwiQ2FyZFByb21vIiwidGl0bGVDb2xvciIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25Qcm9wcyIsIkNhcmRSZXZpZXciLCJhdXRob3JQaG90byIsImF1dGhvck5hbWUiLCJhdXRob3JUaXRsZSIsInRleHRWYXJpYW50IiwibGlzdEl0ZW1QcmltYXJ5VHlwb2dyYXBoeVByb3BzIiwibGlzdEl0ZW1TZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHMiLCJzY2hlbWEiLCJmdWxsbmFtZSIsInByZXNlbmNlIiwiYWxsb3dFbXB0eSIsIm1lc3NhZ2UiLCJtYXhpbXVtIiwiZW1haWwiLCJDb250YWN0Rm9ybSIsImZvcm1TdGF0ZSIsInNldEZvcm1TdGF0ZSIsImlzVmFsaWQiLCJ2YWx1ZXMiLCJ0b3VjaGVkIiwiZXJyb3JzIiwidmFsaWRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInBlcnNpc3QiLCJ0YXJnZXQiLCJuYW1lIiwiY2hlY2tlZCIsInZhbHVlIiwiaGFzRXJyb3IiLCJmaWVsZCIsIkRlc2NyaXB0aW9uTGlzdEljb24iLCJncmlkSnVzdGlmeSIsIm92ZXJmbG93IiwiY29sb3JEZWZhdWx0IiwiaGVyb1dyYXBwZXIiLCJoZXJvQ292ZXIiLCJvcGFjaXR5IiwiaGVyb0JnIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0Iiwibm9Db3Zlck9wYWNpdHkiLCJIZXJvQmFja2dyb3VuZCIsImRpc2JhbGVDb3Zlck9wYWNpdHkiLCJiYWNrZ3JvdW5kSW1nIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiY29udGVudFNlY3Rpb25DbGFzc05hbWUiLCJ1c2VDdXN0b21TdHlsZXMiLCJjb3ZlckJnIiwiYmFja2dyb3VuZEltYWdlIiwiY3VzdG9tQ2xhc3NlcyIsImhlcm8iLCJsYXlvdXQiLCJjb250ZW50V2lkdGgiLCJkb3duIiwiaGVyb0xlZnRTaWRlIiwiaGVyb1JpZ2h0U2lkZSIsImZsZXgiLCJoZXJvSW1hZ2VDb250YWluZXIiLCJoZXJvSW1hZ2UiLCJzaGFwZU91dHNpZGUiLCJjbGlwUGF0aCIsIkhlcm9TaGFwZWQiLCJsZWZ0U2lkZSIsInJpZ2h0U2lkZSIsImltYWdlV3JhcHBlciIsIm1heEhlaWdodCIsImNvdmVyIiwiSGVyb1NpZGVJbWFnZSIsImltYWdlU3JjIiwiaW1hZ2VTcmNTZXQiLCJyZXZlcnNlIiwiSGVyb1NpbXBsZUJhY2tncm91bmQiLCJ1c2VCYWNrZ3JvdW5kIiwiTWFwIiwiem9vbSIsInBpbnMiLCJMIiwicmVxdWlyZSIsIkRlZmF1bHQiLCJwcm90b3R5cGUiLCJfZ2V0SWNvblVybCIsIm1hcmtlckljb24yeCIsIm1hcmtlckljb24iLCJtYXJrZXJTaGFkb3ciLCJtZXJnZU9wdGlvbnMiLCJpY29uUmV0aW5hVXJsIiwiZGVmYXVsdCIsImljb25VcmwiLCJzaGFkb3dVcmwiLCJSZWFjdE1hcCIsIlRpbGVMYXllciIsIk1hcmtlciIsImkiLCJsb2NhdGlvbiIsInkiLCJ4IiwiZm9udEZhbWlseSIsIlBhcmFsbGF4IiwiamFyYWxsYXhFbGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImphcmFsbGF4Iiwic3BlZWQiLCJmdWxsV2lkdGgiLCJkaXNhYmxlUGFkZGluZyIsIm5hcnJvdyIsIlNlY3Rpb24iLCJhbHRlcm5hdGUiLCJpbm5lciIsImlubmVyTmFycm93ZWQiLCJTZWN0aW9uQWx0ZXJuYXRlIiwiaW5uZXJuYXJyb3dlZCIsIlNJR05VUCIsIkxPR0lOIiwiUkVTRVRQQVNTV09SRCIsIkZPUkdPVFBBU1NXT1JEIiwiR0VUVVNFUkRFVEFJTFMiLCJVU0VSREVUQUlMU1VQREFURSIsIlVTRVJQQVNTV09SRFVQREFURSIsIlVTRVJGT1JHT1RQQVNTV09SRFVQREFURSIsIkNPVVJTRUxJU1QiLCJDT1VSU0VERVRBSUxTIiwiQ09VUlNFREVUQUlMU0FVVEgiLCJBUFBMWUNPVVBPTiIsIk1BS0VQQVlNRU5UIiwiUEFZTUVOVEhJU1RPUlkiLCJQVVJDSEFTRURDT1VSU0UiLCJDRVJUSUZJQ0FURVJFUVVFU1QiLCJCTE9HTElTVCIsIkJMT0dERVRBSUwiLCJHRVRVTklWRVJTSVRZIiwiR0VUQ09SUE9SQVRFIiwiQ09OVEFDVF9VUyIsIlBSRVNTX1JFTEVBU0UiLCJQUkVTU19ERVRBSUxTIiwiR0VUX0xNU0RBVEFfQ09VUlNFIiwiR0VUX0xNU0RBVEFfQ0FURUdPUlkiLCJORVdTTEVUVEVSU1VCU0NSSUJFIiwiR0VUU09DSUFMTElOS0VTIiwiR0VUUEFZTUVOVENFUlRJRklDQVRFREVUQUlMUyIsIk1BS0VQQVlNRU5UQ0VSVElGSUNBVEUiLCJDRVJUSUZJQ0FURV9EQVRBIiwiR0VUX1RFQU1fREFUQSIsIkFwcENvbmZpZyIsIkFQSV9FTkRQT0lOVCIsInByb2Nlc3MiLCJJTUFHRV9VUkwiLCJTSVRFX05BTUUiLCJDYW5jZWxUb2tlbiIsIkF4aW9zIiwiY2FuY2VsIiwiY29uc3RydWN0b3IiLCJob3N0IiwiX3BvcnRhbEdhdGV3YXkiLCJ2ZXJzaW9uIiwiX2FwaVZlcnNpb24iLCJlcnIiLCJzb3VyY2UiLCJjYW5jZWxUb2tlbiIsInRva2VuIiwiZW5kcG9pbnQiLCJhdXRoZW50aWNhdGVkIiwiYXV0aFRva2VuIiwicXVlcnlPcHRpb25zIiwiYm9keSIsInJlc3BvbnNlVHlwZSIsImhlYWRlcnMiLCJzdG9yYWdlU2Vzc2lvbiIsIkF1dGhvcml6YXRpb24iLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlIiwicmVxdWVzdCIsInBhcmFtcyIsImV4ZWN1dG9yIiwiYyIsIm9rIiwic3RhdHVzIiwiZXJyb3JPYmplY3QiLCJjb2RlIiwiU3VjY2Vzc0hhbmRsZXJIZWxwZXIiLCJpc0NhbmNlbCIsImVycm9yIiwibWVzc2FnZXMiLCJlcnJvckhlbHBlciIsIkVycm9ySGFuZGxlckhlbHBlciIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJyYXdFcnJvciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwic2V0RXJyb3IiLCJyYXdEYXRhIiwic2V0U3VjY2Nlc3MiLCJjZXJ0aWZpY2F0ZV9zZWMiLCJtaW5IZWlnaHQiLCJjZXJ0aWZpY2F0ZV9ib3giLCJpbWciLCJ0ZXh0QWxpZ24iLCJoZWFkaW5nMSIsImxldHRlclNwYWNpbmciLCJsYWJlbGV4dHJhIiwiaGVhZGluZzMiLCJoZWFkaW5nNCIsImhlYWRpbmc1IiwiZm9udFN0eWxlIiwiYm9yZGVyVG9wIiwic2VjdGlvbkhlYWRlciIsInNpZ24iLCJzaWduX2RpdiIsImJhbm5lckJvdHRvbSIsIndyYXBwZXJTZWN0aW9uIiwic2VjdGlvbldyYXBwZXIiLCJib3JkZXJCb3R0b20iLCJibG9nY2hhaW5faGVhZGluZyIsImZvbnRTaXplXzE4IiwiY29udGVudFNlY3Rpb24iLCJsaW5lSGVpZ2h0IiwicGFkZGluZ0xlZnQiLCJpbWFnZUxhYnMiLCJzdWJUaXRsZSIsImNvbW1vbkxpc3QiLCJnZXRUZW1wbGF0ZURhdGEiLCJzZXRHZXRUZW1wbGF0ZURhdGEiLCJnZXREYXRhIiwiZmlsdGVyIiwiZSIsInRpdGxlU2x1ZyIsInBiXzYwIiwiYmxvY2tJbWFnZTEiLCJibG9jazEiLCJvcmRlcl9zcF8zMCIsIlJlYWN0SHRtbFBhcnNlciIsImJsb2NrMiIsImJsb2NrSW1hZ2UyIiwiYmxvY2tUaXRsZTQiLCJibG9jazMiLCJzZWN0aW9uIiwic2VhcmNoSW5wdXRDb250YWluZXIiLCJzZWFyY2hCdXR0b24iLCJtaW5XaWR0aCIsIkhlcm8iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7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QUpOLENBQWpCO0FBT2UyZSxtRUFBZixFOzs7Ozs7Ozs7Ozs7QUN2R0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9sYWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9sYWJzLmpzXCIpO1xuIiwiLyoqXHJcbiAqIENhdXRpb246IENvbnNpZGVyIHRoaXMgZmlsZSB3aGVuIHVzaW5nIE5leHRKUyBvciBHYXRzYnlKU1xyXG4gKlxyXG4gKiBZb3UgbWF5IGRlbGV0ZSB0aGlzIGZpbGUgYW5kIGl0cyBvY2N1cnJlbmNlcyBmcm9tIHRoZSBwcm9qZWN0IGZpbGVzeXN0ZW0gaWYgeW91IGFyZSB1c2luZyByZWFjdC1zY3JpcHRzXHJcbiAqL1xyXG4gaW1wb3J0IExhYnMgZnJvbSAndmlld3MvTGFicyc7XHJcbiBpbXBvcnQgeyBBcGlIZWxwZXIgfSBmcm9tIFwiaGVscGVyXCI7XHJcbiBpbXBvcnQgeyBBcGlSb3V0ZXMgfSBmcm9tIFwiY29uZmlnXCI7XHJcblxyXG4gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vIEZvciBHZXQgQ01TIERhdGFcclxuICBjb25zdCByZXNwb25zZUNNUyA9IGF3YWl0IG5ldyBBcGlIZWxwZXIoKS5GZXRjaEZyb21TZXJ2ZXIoXHJcbiAgICBBcGlSb3V0ZXMuRlJPTlRfUEFHRV9EQVRBLnNlcnZpY2UsXHJcbiAgICBBcGlSb3V0ZXMuRlJPTlRfUEFHRV9EQVRBLnVybCxcclxuICAgIEFwaVJvdXRlcy5GUk9OVF9QQUdFX0RBVEEubWV0aG9kLFxyXG4gICAgQXBpUm91dGVzLkZST05UX1BBR0VfREFUQS5hdXRoZW50aWNhdGUsXHJcbiAgICB1bmRlZmluZWQsXHJcbiAgICB1bmRlZmluZWQsXHJcbiAgICB1bmRlZmluZWRcclxuICApO1xyXG4gIGxldCBjbXNEYXRhID0gW107XHJcbiAgaWYgKHJlc3BvbnNlQ01TICYmICFyZXNwb25zZUNNUy5pc0Vycm9yKSB7XHJcbiAgICBjbXNEYXRhID0gcmVzcG9uc2VDTVMuZGF0YS5kYXRhO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNtc0RhdGFcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxMCxcclxuICB9XHJcbn1cclxuXHJcbiBleHBvcnQgZGVmYXVsdCBMYWJzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyLXNoYXBlLTM1NmQwYjcwMWVhZjBiZGFmN2E4ZGFhMjgzYjkwMmQwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jZXJ0aWZpY2F0ZS1iODAyMjE3ZjFiMzUxM2VmZmZjZDNjOTA2ZmFiNDRlZC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUJTQ0FNQUFBQWhGWGZaQUFBQzkxQk1WRVZNYVhFemVhazJmN0k0ZzdnM2c3Y3VhNWd6ZUtnOGhKbzNnclk0ZzdjM2dyVTBnTEkyZnJFMGRhQXViSmMyZ2JRd2Q2UXplS2syZ0xNdGQ1c3hkS0l1YTVnMWZyQTJmN0l5ZGFNMGU2dzJmcTQxZkswMWVxbzNncmd1YkpndGE1Y3hkS0kxZjdBeWRhUXlkYU14YzZFdWJKZ3ZiSmt3Y1o0dWJaa3djSnd1YlpndWJKY3lkcVV5ZEtJeGFwZ3ViSmN0YkpjdWJaY3ViSmN2YkpZdWJKY3ZiWmt1YkpjdGJKY3RiWmN1YkpnMmY3QXViSmNyYlpjdWJKY3ViSmN1YTVnM2dyWTBmcTh1YkpjdWJKZEVrZEV3aHN3Nmk4OHZoc3d1aGNzdWhNdEJqTWd0aE1zcmc4c3Jnc3M2aXM4cWdjczhpOUE5aU1ZdGc4c3BnY29vZ01vN2hjTW5nTW9uZjhvbGZzbzRncjhrZmNrNWlNOGpmTWs0aU04aGU4azFmcm83aXRBZ2VzazJoczhlZWNnemZMY29mc3NkZU1nMGhjNGNkOGcyaGNzeGVMUWJkc2daZGNneGVMSW1mY3N6aE0wdmRhNHhnY2t6aE00eGc4NHdmOFl4Z3M0dWRLc3ZmY1F1Y3FoVW5kUk9tZE0xZkswd2NaOHZiNXcwZXFwUW05TXplS2hYb05WY3BkWXlkS05XbjlWWm90VktsdEpGanNJd2NKMVJtczlPbHNsTG10SC8vLzgra2M5ZXBkWXpkNmRibzlWSGtNTTJmN0ZIbU5CQ2xNOHlkcVZjcE5ZOWhybzNnTE05aExjemVhbFFtY3czZmE0NmY3QThnTE14YzZJM2VhZ3ljNkZJbGRKTWw5SlNuTlJTbnROTmw5SlBuTkpGaTc1VW5NOVpvZFZLa3NnOGtNNDVqYzA5ZTZaSGx0RkJrODgzZ2JSQmg3cERrOUV3Y2FCem43ODRnN2RLa2NZMmk4MU9tOU03ajg1TGxjODFpczA5ZzdRNGdyWS9qOUEwZXF4S21kRkZsdEJFamNYZjZmRkltZEJDaUx4Smw5RkdsTkZCaTc4eWlNeFZuZEV2YnBvNmpzNzQrdngrcHNQUDMrby9rczVIa2NwR21OQ2p3ZFpDa05ETTNlaFlvTkpFbHMrbHhOa3hoOHhIa3MwK2pkQzF6ZDVMZzZyKy92L0gydWZ6OS9vM2pNM3Q4L2VkdmRNL2s4OVRoNjFPaUxCU2piWmtsYmFUdDlCZnB0ZGptTDFBaWNCSGo4aEdrOUZBZ0sxZGtMTlRqTFJla3JkQ2xjL2s3Zk0waWN5MHk5dGdwOWM0amMyTnRNOURsYzh6aWN4ZVhabjNBQUFBUTNSU1RsTUFIRGRUYjR5UEErTHRuRVFtQzRMMkVtSHFCN1hBMGQwc3I0Nzh4NC9ZZDVpMXpPZnlQa2Yxc0xWcTROaDNGdmp4b3BRMi9TVE51RnpVd0ZJd3hLYWVqSUxwSUJFVjl3QUFCaFZKUkVGVWVGNnMxTmR5RkVjWUJlQmVvUUloUkFrTGxSREdyaElnWTNCSkw4Q1ZlS3p1eVhGenpqa241Wnh6enVTY2czUE84Y0t6dTcwSmtPMExmeGRUVS8vcE05dlR1N1hnZjZLcU9WVGI5WDd0b1JyVkVmQmYxSFRWalpjY3JULzJieTFWVjkyOFl0eTlaYlZ1dWNkejkwZnJHOERCamw5cFZBcGJPc3R2bU11dlZnYU5YU2ZBQWQ2cEd4cHk2eXhmNXBoNDNwUy80ZjN1b2FHbTJyZHU3MlM5eHpPdk15bWtaRnEvcHREcms5MG1oVzdlNHpsN0hMemh4R1dQUjIweG1TeEovVnFsZEc1bTlYaGFWT0ExRGFkc05oM1B1NUwyTjZRdFBPLzMySnBxUUJWVmsyMG95L1BpMnMyM1dFdnlmSGJlMXRoYWRWUXR0dm03TGxmNjVnR21YSzY3WHR1cHlvTTdIUWhtWGRMUzhvR1dKTmVPSjNDNWZHNVhDRUpua2V6My9vRmRzdmdKNGwyQU5ad2hySktrLzdPU1hhKzNWdzJXSk1sS25Ha29ib3VZazZUMFR5WDMwa2xPVW5URDlISjVxcGNrTDNFVy93NFhGM1hkMEZHeXdYVXJzdHJjbFZzcXo1UGQvc1hGWXlEblBkckxjUU9EbUdPSzQ3SVpiNENtaWJtTW4rTVlSekZaNWpnMzNaTC9FSnJXY3N6SG1BTnkzQVJCSy9JWHRjaUp5OFZzaXRQU2RFM3V1SHh6b3Vnb2pjVWRyOC8zMmF0bnovZXYzZi9LNXd0cHhVVHBjYUk0NXp1c1ZEcFl0Wmkramcwb1U5YjN4NzRoNytuOUFCdllFWmVLYVZxMHNoMEF0TEtzRnRxTkJkZVQwTXJTend3bHE5K3g2eEFPNHRnT3RTemJDanJOUVFpTnZRVWJVRXVidnpCVWVHdzI2eURDc1JIQ29Ma1RIRGE3SWRPTElUaHMvZ0h2Q2hzemgyQ2ltRThwZVJzNDdjeEFOSTBsWU5CNXkxRGxqcE9GMEloekJEUE9abkRPcVlZYmVHS0VDYlB6V25YbHVkUHBodzVjMllCcTV6bHdYcGhJYk80VkRDWjBnblBmVU8xVHdab1l3QXMyRXhQQ2VkQXU5REFqZlFVanpJVFFiM2pOajBLRzJTZ3Q2QkhhUVVkWXpXeitYbUJrdE9Id2FuWGphU1Rjd3d6aUJjdU1PdHdCbXFQclRPeEZRUi9EUktLUHF5dXIwYWlXNmNVTFlzeDZ0Qm0walhwUi9BVVdSNkhScTlXVlc2TVJoSXE1akx5amJhQ1REQ2lqeVlKTnBDYWpkeW9iUC9lVHcwaWV4QkFLa0ozZ0E1S2NRYjJ6QlhzSUJja24reFZ2OGprWlNhRUZIRStqRkVsZUFFZmF5UlUwTW91Tm9CbUIvTDUwQWkvSFNMSUh4Y3JwQ3ZuaFNRQXVha0twMkMvWWJDeWxKalhSVnkvejMrS3YvUnJOY0NvK1dVemxWRWh6S2ZmblRRbnhlTjlmV0Y4OGZpTkNVZFNUc2F1ZmFDaEtXSW5IZXlzeWdmcElxYWdvYWtXK3ZWMjBKOHV5bDZUeU5LRVpXVjRvUlNQeUNrV3BnT0xTYmtDT2JUOG8ycjZ0bEc1OEhRcXVmNk8wdjUwdEI3Sk03RjRFT1JkMmR4L0swdy9LSHNWa0xQYW9ZcndnUC95N2tycjNTU01BNHpqK09CZ21qWWt4Y2RJSlF5UVJLZ2cydmlYOUhkZGk5VUJiMjlMcktSN0NWVkVFRVhXb2pVa1hOeWZUTkRFMTRXOWdiSEpOdWhqRGV0dE4zWnZiT3ZkT3FDRDNKcC85bCsvd0pFKzlQa1lHangvZnFreXMzUzJyTW96TS9vMjEwNnJmTVVJTm82aFZxeitldS9oZDFjNHhUZzBUQWZ5NWtWKzRVRzYrSXRoSFRVOXdvV214dUtOYlRmdUNTZm92QkN4cTdFdEhxdllMNFNtNkY4R1Z4c1NYSE1RMDdUT2kxREt0WnhqV2FhSXlpNENYV2p4UGNjVXc4V1ZiTVlZNXd4QzFtekV5WE1KV2tsbHBSbG9pK0trb3E2OXN4QlRsRWxGNmFBeFlVYmpYTmxobERaaWxEbk00VTVTbE41YmlSc1JIbmJ4M21iZVdqRWg0bUV5aXVKRGw1WGNXVm1YNUd2TmtGZ0xXWk01cXdzb3A0L0FXZkxoVTFjUjdrMVZWdmNZQ1dSa09JNlh5NWdtbnBoQ1lJa3Z6dU5Zekh6b3NxMm9OazJSdFNzOGtoZlVPZkhJRGdSNnlzWUJhTXBsNHVFZ2syVS9vSlRzOUFhVFN3bWE3ZFQ2OWdlQUUyWnBFalVzbjJpZUpOSGVLZnJJM0VjQUdKMlphTmdWdUM4RUJjdENMYzU3UDV1NWxlZDZJT0JrSVlrdVFNcm1takNoczRWa2ZPZXJIcVNCa1B6WmxoZTA2UnNsWjN6TWprMnNzY3FLd1kwUmNqS0srTFdiemQ3S2lIaGtuY3Mvc2lGSitWNWVYeEQzNEI4blZ1SkVwR0pObXhOMmdIM3ZTdnA3SjcwdEYrRDFFajhxVUpEMVRrRXJBTkQyR1p3VEZnL0x1YnZtZ2lCRzNTT3ZkbHNxRlFya0V6SkNMMXJzdGxuVkZST2l4Wm9ERFN1WFFGSEVTd1ZHbGN1UWNNYi9iNDJOZ2pMb3doNU1UREZFM3ZOQjVxU3RSSUVyZENRRWg2cExQUjkyYW5TVWIvd0FJaGxkQWFETXBHZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmtBQUFBcENBWUFBQURBazRMT0FBQUZnVWxFUVZSNEFhMVhBNUJqV1JUTjJvVzE3ZDNZYVp0cjI5NjJIVXpiRE5wanN6VzI0bVJ0MjhwNDd2N3pxL2JYWnRycC9sV25YcjMzN2ozblBDZTg1TmN5cGdTRmR1Z0NwVzVZb0RBTVJhSU1xUmk2YUtxNUUzWXFEUU8zcUF3alZXckQ4TmNxL1JCcHlrZDhvWlViL2thSnV0b3c4cjFhUDlJSTBXbUxLTElzSnl2MXcva3F3OUNoMk1ZZEIrKzEyT254ZWUvUU13dmY0L0RrL0xmcC9pNG54VFh0T29RNHBXNUFqN3dwaWNpMUE5ZXJkQU4yT0g2NHg4T1NQOWozRnQzYjdhV2tUZy9GbTkxc2lUcmEwZjlvbjVzUXI5SU5lakg2Q1VVVXBhdmpGTnExQitPYWRoeG1uZmE4UmZFbU44Vk5Bc1FoUHFGNTV4SGtNenozalNtQ2hXVTZmNy9YWktOSCs5K2hCTE9IWW96dUtRUHh5TVBVS2tyWC9LMHVXbmZGYUpHUzFRUFJ0WnNPUHRyM05zVzB1eWg2Tk5DT2tVM1l6K2JYYlQzSThHM3hFNUVYTFh0Q1hiYnF3Q085elBRWVBSVFo1dklEWEQ3VSt3N3JGREVvVVVmN2liSElSNHk2YkxWUFhyejhKVlpFcWwxM3RyeHd1ZS91RGl2ZDNma1dSYlM2L0lBMmJJRDR1azBVcEYxTjhxTGxiQmxYczRFZTdITFRmVjFqNTRBUHZPRG5TZk9XQnF0S1Z2amdMS3pGNVlkRWs1ZXdSa0dsSzBpMzNFb2ZmZmM3SFQ1NmpENy82VStxSDNDeDdTQkxObnRINVlJUHZPRG55ZklYWllSVkRQcWdIdExzNUFCSEQzWXpMdWVzcGI3dDc5RlkzNERqTXdyVnJjVHV3bFQ1NVlNUHZPQm5Scko0VlhUZE5uWXVnNXVjSExCakVwdDMwNzAxQTNUcytIRWE3M3U2ZFQzRk5Xd2ZsWTg2ZU1IUGsrWXUraTZwelVwUnJXN1NORGc1SkhSNEthcG1NNVd2MkU4VGZjYjFIb3FxSE1IVSt1V0REN3pnNTRtejUvMkJTbml6aTlUMURnNFFRWExUb0dOQ2tiNnRiMU5VK1FBbEdyMSsrZUFEcnpobi91OFEyWVpoUVZsWjUrQ0FPdHFmYmhtYVVDUzFlek5GVm0yaW1EYlBtUG5nNXdteitnd2grb0hEY2UwZVV0UTZPR0RJeVIwdVVoVXNvTzN2ZkRtbWdPZXpIMG1aTjU5eDdNQmkrK1dETDFnL2VFaVUzYXZsaWRPNjcxYmtMZndidzVYVjJQOFB6bzB5ZHk0dDIvMGV1MzN4WVNPTU9EOGhUZjRDckJ0R01Tb1hmUExjaFgrSjBydVNlUHczTFplSzBqdVBKYll6cmhrSDBpbzdCM2sxNjRoaUd2YXdoT0tNTGtyUUx5VnBaZzhySEZXN0UydUhPTDg4OElCUGxOWjFGUHpzdFNKTTY5NGZXcjZSd3B2Y0pLNjArMEhDSUxUQnpaTEZOZHRBekphb2h6ZTYwVDhxQnp5aDVadU9nNWU3dXdRcHBvZkVtZjIrK0RZdm15U3FHQnVLYWljRjFibFFqaHVIZHZDSU12cDh3aFRUZlp6STdSbGRwd3RTekwrRjErd2tkWjJUQk9XMmdJRjg4UEJUekQvZ3BlUkVBTUVieG5KY2FKSE5IcnB6amkwZ1FDUzZoZGtFZVl0OURGLzJxUGNFQzhSTTI4SHdtcjNzZE55aHQwMGJ5QXV0MmszZ3VmV050Z3RPRU9GR1V3Y1hXTkRiZE5icGdCR3hFdktrT1FzeGl2SngzM2lvdzBWdzVTNlNWVHJwVnExMXlzQTJScDdnVGZQZmt0YzZ6aHRYQkJDK2FkUkxzaGY2c0cyUmZIUFo1RUFjNHNWWjgzeUNOMDBGay80a2dndTQwWlR2SUVtNWcyNHF0VTRLakJyeC9CVFRIOGlmVkFTQUc3Z0tybld4SkRjVTd4OFg2RWNjemhtM282WWljdnNMWFdmaDNDaDFXMGs4eDBuWEYrMGZGeGd0NHBoejhRdnlwaXdDQ0ZLTXFYQ25xWEV4anExMGJlSCtVVUE3K25HNm1kRy9QdTBmM0xnRmNHcmwyczBrTk5qcG1vSjlvNEIyOUNNTzhkTVQ0UTVveDh1aXRGNmZxc3JKT3I4cW53TmJSenY2aFNuRzV3UCs2NEM3aDlscDMwaEtOdEtkV2p0ZGtidVBBMTluSjdUejN6Ui9pYmdBUmJoYjRBbGhhdmNCZWJtVEhjRmwyZnZZRW5XMG94OXhNeEtCUzhidEorS2lFYnE5ekE0UnRoUVhEaFBhMFQ5VEVlNjlnV3Vwd2M2dUJVcGhxdVhnZisvRnJJandlSFFTNC9wZHVNZTVFUlVNSFVkOXh2OFpSOThDeGtTNEYybjNFVXJVWjEwRVlOdzdCV205eDFHaVBzc2kzR2dpR1JES1dSWVpmWGxPTitkZk5iTStHZ0l3WWR3QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNrQUFBQXBDQVFBQUFBQ2FjaDlBQUFDTVVsRVFWUjRBZTNTaFk3alFCQUUwQW96L2Y5L0hUTXpoZzF6cmRLVXJKYmR4K0tkMm5EOFZOdWRmc0wvVGgvLy9keVFOMlRINmYzeS9CR3BDMzc5clYrUytxcWV0Qk94SW1OUVhMOEpDQXIyVjRpTVFYSEdOSnhlQ2ZaWGhTUkJjUU1mdmtPV1VkdGZ6bExnQUVObVpEY21vMlRWbXQ4T1NNMmVYeEJwM0RqSFNNRnV0cVM3U2JtZW16QmlSK3hwS0NOVUlSa2Rra1l4aEFreUdvQnZ5UUZFSkVlZndTbW12QmZKdUo2YUtxS1duQWt2R1pPYVpYVFVnRnFZVUxXTlNIVWNrWnVSMUhJSWltVUV4dXRSeHd6T0xST0lHNHZLbUNLUXQzNjRtSWxoU3l6QWYxbTlsSFpISlpybEFPTU16dFJSaUtpbXAvcnBkSkRjOUF3cnk1eFRaQ3RlN0ZIdHVTOHdKZ2VZR3JleDI4eE5UZDA4NkRpazd2VU1zY1FPYTh5NERvR3RDQ1NrQUtsTndwZ050cGhqckM2TUlIVWtSNllXeHhzNlNjNXhxbjIyMm1tQ1JGekl0OGxFZEt4K2lrQ3RnOTFxUzJXcHdWZkJlbEpDaVFKd3Z6aXhmSTljeFpRV2dpU0plbEtud0JFbEtZdERPYjJNRmJobVVpZ2JSZVFCVjBDZzQrcU1YU3hYU3lHVW40VWJGOGwrN3FkU0duVEMwWExDbWFoSWdVSExoTE9ocFZDdHc0Q3pZWHZMUVdRYkpObXhvQ3NPS0F4U2dCSm5vNzVhdm9sa1J3OGlJQUZjc2RjMDJlOWl5Q2Q4dEh3bWVTU29LVG93SWd2c2NTR1pVT0E3UHVDTjViMkJYOW1RTTdTMHdZaE1OVTc0emdzUEJqM0hVN3dndUFmbnh4akZRR0JFNnB3TitHak1FOXpIWTd6R3A4d1Z4TVNoWVg5Tlh2RVdEM0hid0pmNGdpTzRDRklReFhTY0gxL1RNKzA0a2tCaUFBQUFBRWxGVGtTdVFtQ0NcIiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjb2xvcnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBib3JkZXI6IHtcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDUpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgYm9yZGVyOiAnM3B4IHNvbGlkJyxcclxuICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLmRpdmlkZXIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDYpLFxyXG4gICAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICB9XHJcbiAgfSxcclxuICBib3JkZXJEYXJrOiB7XHJcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLmluZGlnb1s3MDBdLFxyXG4gIH0sXHJcbiAgbW9kZVRvZ2dsZXI6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiBgLSR7dGhlbWUuc3BhY2luZygxLzIpfXB4YCxcclxuICAgIGxlZnQ6IGAtJHt0aGVtZS5zcGFjaW5nKDEvMil9cHhgLFxyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgIHRyYW5zaXRpb246IGB0cmFuc2Zvcm0gLjNzIGN1YmljLWJlemllciguNCwuMDMsMCwxKWAsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAgIGhlaWdodDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgIH1cclxuICB9LFxyXG4gIG1vZGVUb2dnbGVyRGFyazoge1xyXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RoZW1lLnNwYWNpbmcoMyl9cHgpYCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmluZGlnb1s5MDBdLFxyXG4gIH0sXHJcbiAgbW9kZVRvZ2dsZXJJY29uOiB7XHJcbiAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEvMiksXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEvMiksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH1cclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGRhcmsgbW9kZSB0b2dnbGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgRGFya01vZGVUb2dnbGVyID0gKHsgdGhlbWVNb2RlID0gJ2xpZ2h0Jywgb25DbGljaywgY2xhc3NOYW1lLCAuLi5yZXN0IH0pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ucmVzdH0gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICBjbGFzc2VzLmJvcmRlcixcclxuICAgICAgICAgIHRoZW1lTW9kZSA9PT0gJ2RhcmsnID8gY2xhc3Nlcy5ib3JkZXJEYXJrIDogJycsXHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgIGNsYXNzZXMubW9kZVRvZ2dsZXIsXHJcbiAgICAgICAgICB0aGVtZU1vZGUgPT09ICdkYXJrJyA/IGNsYXNzZXMubW9kZVRvZ2dsZXJEYXJrIDogJycsXHJcbiAgICAgICAgKX0+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGVUb2dnbGVySWNvbn1cclxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjE0XCJcclxuICAgICAgICAgIGhlaWdodD1cIjEzXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTQgMTNcIlxyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgZD1cIk00LjUyMjA4IDcuNzE3NTRDNy41NzgyIDcuNzE3NTQgMTAuMDU1NyA1LjI0MDA2IDEwLjA1NTcgMi4xODM5NEMxMC4wNTU3IDEuOTM0OTggMTAuMDM5MiAxLjY4OTg2IDEwLjAwNzQgMS40NDk2MUM5Ljk1ODAxIDEuMDc3MjcgMTAuMzQ5NSAwLjc3MTE1OSAxMC42NDc0IDAuOTk5OTJDMTIuMTE1MyAyLjEyNzE2IDEzLjA2MTUgMy44OTk5OSAxMy4wNjE1IDUuODkzODNDMTMuMDYxNSA5LjI5OTU4IDEwLjMwMDYgMTIuMDYwNSA2Ljg5NDg1IDEyLjA2MDVDMy45NTMzNCAxMi4wNjA1IDEuNDkyODYgMTAuMDAxIDAuODc2NzI4IDcuMjQ1MjdDMC43OTQ4NDEgNi44NzkwMiAxLjIzNjY4IDYuNjUyODkgMS41NTMyMSA2Ljg1NDUxQzIuNDExMDYgNy40MDA5NSAzLjQyOTYgNy43MTc1NCA0LjUyMjA4IDcuNzE3NTRaXCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufTtcclxuXHJcbkRhcmtNb2RlVG9nZ2xlci5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgdGhlbWUgbW9kZVxyXG4gICAqL1xyXG4gIHRoZW1lTW9kZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGVtZSB0b2dnbGVyIGZ1bmN0aW9uXHJcbiAgICovXHJcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhcmtNb2RlVG9nZ2xlcjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRGFya01vZGVUb2dnbGVyJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTm9Tc3IgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTm9Tc3InO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gIGV4dHJhU21hbGw6IHtcclxuICAgIGZvbnRTaXplOiAxMCxcclxuICB9LFxyXG4gIHNtYWxsOiB7XHJcbiAgICBmb250U2l6ZTogMjAsXHJcbiAgfSxcclxuICBtZWRpdW06IHtcclxuICAgIGZvbnRTaXplOiAzMCxcclxuICB9LFxyXG4gIGxhcmdlOiB7XHJcbiAgICBmb250U2l6ZTogNDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBpY29uXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgSWNvbiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGZvbnRJY29uQ2xhc3MsIHNpemUsIGZvbnRJY29uQ29sb3IsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOb1Nzcj5cclxuICAgICAgPGlcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAnaWNvbicsXHJcbiAgICAgICAgICBmb250SWNvbkNsYXNzLFxyXG4gICAgICAgICAgY2xhc3Nlc1tzaXplXSxcclxuICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICApfVxyXG4gICAgICAgIHN0eWxlPXt7IGNvbG9yOiBmb250SWNvbkNvbG9yIH19XHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgIC8+XHJcbiAgICA8L05vU3NyPlxyXG4gICk7XHJcbn07XHJcblxyXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzaXplOiAnc21hbGwnLFxyXG59O1xyXG5cclxuSWNvbi5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgY2xhc3NlcyBvZiB0aGUgZm9udCBpY29uXHJcbiAgICovXHJcbiAgZm9udEljb25DbGFzczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFNvdXJjZSBzZXQgZm9yIHRoZSByZXNwb25zaXZlIGltYWdlc1xyXG4gICAqL1xyXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ2V4dHJhU21hbGwnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxyXG4gIC8qKlxyXG4gICAqIENvbG9yIG9mIHRoZSBpY29uXHJcbiAgICovXHJcbiAgZm9udEljb25Db2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0ljb24nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICBmbGV4V3JhcDogJ25vd3JhcCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGljb24gdGV4dFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEljb25UZXh0ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlLFxyXG4gICAgY29sb3IsXHJcbiAgICBmb250SWNvbkNsYXNzLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgaWNvblByb3BzLFxyXG4gICAgdHlwb2dyYXBoeVByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2ljb24tdGV4dCcsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8SWNvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImljb24tdGV4dF9faWNvblwiXHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICBmb250SWNvbkNsYXNzPXtmb250SWNvbkNsYXNzfVxyXG4gICAgICAgIGZvbnRJY29uQ29sb3I9e2NvbG9yfVxyXG4gICAgICAgIHsuLi5pY29uUHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgdmFyaWFudD1cImgzXCJcclxuICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2ljb24tdGV4dF9fdHlwb2dyYXBoeScsIGNsYXNzZXMudGl0bGUpfVxyXG4gICAgICAgIHsuLi50eXBvZ3JhcGh5UHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5JY29uVGV4dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaWNvblByb3BzOiB7fSxcclxuICB0eXBvZ3JhcGh5UHJvcHM6IHt9LFxyXG59O1xyXG5cclxuSWNvblRleHQucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNsYXNzZXMgb2YgdGhlIGZvbnQgaWNvblxyXG4gICAqL1xyXG4gIGZvbnRJY29uQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTb3VyY2Ugc2V0IGZvciB0aGUgcmVzcG9uc2l2ZSBpbWFnZXNcclxuICAgKi9cclxuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaXRsZSBvZiB0aGUgaWNvbi10ZXh0XHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgSWNvbiBjb21wb25lbnRcclxuICAgKi9cclxuICBpY29uUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdHlwb2dyYXBoeVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvblRleHQ7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0ljb25UZXh0JztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzJztcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICB9LFxyXG4gIGRCbG9jazoge1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGltYWdlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEltYWdlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgc3JjLCBzcmNTZXQsIGFsdCwgbGF6eSwgbGF6eVByb3BzLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgaWYgKGxhenkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdpbWFnZScsIGNsYXNzZXMucm9vdCwgY2xhc3Nlcy5kQmxvY2ssIGNsYXNzTmFtZSl9XHJcbiAgICAgICAgYWx0PXthbHR9XHJcbiAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgc3JjU2V0PXtzcmNTZXR9XHJcbiAgICAgICAgZWZmZWN0PVwib3BhY2l0eVwiXHJcbiAgICAgICAgey4uLmxhenlQcm9wc31cclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGltZ1xyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2ltYWdlJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICBhbHQ9e2FsdH1cclxuICAgICAgc3JjPXtzcmN9XHJcbiAgICAgIHNyY1NldD17c3JjU2V0fVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkltYWdlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbHQ6ICcuLi4nLFxyXG4gIGxhenk6IHRydWUsXHJcbiAgbGF6eVByb3BzOiB7XHJcbiAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgfSxcclxufTtcclxuXHJcbkltYWdlLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFNvdXJjZSBvZiB0aGUgaW1hZ2VcclxuICAgKi9cclxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTb3VyY2Ugc2V0IGZvciB0aGUgcmVzcG9uc2l2ZSBpbWFnZXNcclxuICAgKi9cclxuICBzcmNTZXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogSW1hZ2UgdGl0bGVcclxuICAgKi9cclxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogTGF6eSBsb2FkaW5nIHByb3BlcnRpZXNcclxuICAgKi9cclxuICBsYXp5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogU2hvdWxkIGxhenkgbG9hZCB0aGUgaW1hZ2VcclxuICAgKi9cclxuICBsYXp5OiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9JbWFnZSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEFycm93UmlnaHRBbHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd1JpZ2h0QWx0JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgXCJMZWFybiBNb3JlXCIgbGlua1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IExlYXJuTW9yZUxpbmsgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY29sb3IsXHJcbiAgICBjb21wb25lbnQsXHJcbiAgICB2YXJpYW50LFxyXG4gICAgdGl0bGUsXHJcbiAgICBocmVmLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgaWNvblByb3BzLFxyXG4gICAgdHlwb2dyYXBoeVByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBjaGlsZHJlbiA9IChcclxuICAgIDw+XHJcbiAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdsZWFybi1tb3JlLWxpbmtfX3R5cG9ncmFwaHknLCBjbGFzc2VzLnRpdGxlKX1cclxuICAgICAgICB2YXJpYW50PXt2YXJpYW50fVxyXG4gICAgICAgIGNvbG9yPXtjb2xvciB8fCAncHJpbWFyeSd9XHJcbiAgICAgICAgey4uLnR5cG9ncmFwaHlQcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnbGVhcm4tbW9yZS1saW5rX19pY29uLWJ1dHRvbicsIGNsYXNzZXMuaWNvbil9XHJcbiAgICAgICAgY29sb3I9e2NvbG9yIHx8ICdwcmltYXJ5J31cclxuICAgICAgICB7Li4uaWNvblByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEFycm93UmlnaHRBbHRJY29uIGNsYXNzTmFtZT1cImxlYXJuLW1vcmUtbGlua19fYXJyb3dcIiAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+XHJcbiAgICA8Lz5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdsZWFybi1tb3JlLWxpbmsnLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuXHJcbkxlYXJuTW9yZUxpbmsuZGVmYXVsdFByb3BzID0ge1xyXG4gIHZhcmlhbnQ6ICdzdWJ0aXRsZTEnLFxyXG4gIGhyZWY6ICcjJyxcclxuICB0eXBvZ3JhcGh5UHJvcHM6IHt9LFxyXG4gIGljb25Qcm9wczoge30sXHJcbiAgY29tcG9uZW50OiAnYScsXHJcbn07XHJcblxyXG5MZWFybk1vcmVMaW5rLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb21wb25lbnQgdG8gbG9hZCBhcyBhIG1haW4gRE9NXHJcbiAgICovXHJcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMub25lT2YoWydMaW5rJywgJ2EnXSksXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgdGhlIGxpbmtcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFZhcmlhbnQgb2YgdGhlIGxpbmtcclxuICAgKi9cclxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydoNicsICdzdWJ0aXRsZTEnLCAnc3VidGl0bGUyJywgJ2JvZHkxJywgJ2JvZHkyJ10pLFxyXG4gIC8qKlxyXG4gICAqIEhyZWYgb2YgdGhlIGxpbmtcclxuICAgKi9cclxuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIENvbG9yIG9mIHRoZSBsaW5rXHJcbiAgICovXHJcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIEljb24gY29tcG9uZW50XHJcbiAgICovXHJcbiAgaWNvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHR5cG9ncmFwaHlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlYXJuTW9yZUxpbms7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0xlYXJuTW9yZUxpbmsnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlcic7XHJcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dVcEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dVcCc7XHJcbmltcG9ydCBab29tIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1pvb20nO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICByaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBTY3JvbGxUb3AgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKHtcclxuICAgIGRpc2FibGVIeXN0ZXJlc2lzOiB0cnVlLFxyXG4gICAgdGhyZXNob2xkOiAxMDAsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdykge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxab29tIGluPXt0cmlnZ2VyfT5cclxuICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVDbGlja30gcm9sZT1cInByZXNlbnRhdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICA8RmFiIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiIGFyaWEtbGFiZWw9XCJzY3JvbGwgYmFjayB0byB0b3BcIj5cclxuICAgICAgICAgIDxLZXlib2FyZEFycm93VXBJY29uIC8+XHJcbiAgICAgICAgPC9GYWI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9ab29tPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFRvcDsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TY3JvbGxUb3AnOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgSW1hZ2UgfSBmcm9tICcuL0ltYWdlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uIH0gZnJvbSAnLi9JY29uJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMZWFybk1vcmVMaW5rIH0gZnJvbSAnLi9MZWFybk1vcmVMaW5rJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uVGV4dCB9IGZyb20gJy4vSWNvblRleHQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERhcmtNb2RlVG9nZ2xlciB9IGZyb20gJy4vRGFya01vZGVUb2dnbGVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTY3JvbGxUb3AgfSBmcm9tICcuL1Njcm9sbFRvcCc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xyXG5pbXBvcnQgQ291bnRVcCBmcm9tICdyZWFjdC1jb3VudHVwJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIENvdW50IFVwIE51bWJlcnNcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDb3VudFVwTnVtYmVyID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHN0YXJ0LFxyXG4gICAgZW5kLFxyXG4gICAgc3VmZml4LFxyXG4gICAgcHJlZml4LFxyXG4gICAgbGFiZWwsXHJcbiAgICB0ZXh0Q29sb3IsXHJcbiAgICBsYWJlbENvbG9yLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdmlzaWJpbGl0eVNlbnNvclByb3BzLFxyXG4gICAgd3JhcHBlclByb3BzLFxyXG4gICAgY291bnRXcmFwcGVyUHJvcHMsXHJcbiAgICBjb3VudE51bWJlclByb3BzLFxyXG4gICAgbGFiZWxQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFt2aWV3UG9ydEVudGVyZWQsIHNldFZpZXdQb3J0RW50ZXJlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgc2V0Vmlld1BvcnRWaXNpYmlsaXR5ID0gaXNWaXNpYmxlID0+IHtcclxuICAgIGlmICh2aWV3UG9ydEVudGVyZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZpZXdQb3J0RW50ZXJlZChpc1Zpc2libGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnY291bnR1cC1udW1iZXInLCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxWaXNpYmlsaXR5U2Vuc29yXHJcbiAgICAgICAgb25DaGFuZ2U9e2lzVmlzaWJsZSA9PiBzZXRWaWV3UG9ydFZpc2liaWxpdHkoaXNWaXNpYmxlKX1cclxuICAgICAgICBkZWxheWVkQ2FsbFxyXG4gICAgICAgIHsuLi52aXNpYmlsaXR5U2Vuc29yUHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50dXAtbnVtYmVyX193cmFwcGVyXCIgey4uLndyYXBwZXJQcm9wc30+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxyXG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBjb2xvcj17dGV4dENvbG9yIHx8ICd0ZXh0UHJpbWFyeSd9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdW50dXAtbnVtYmVyX19jb3VudC13cmFwcGVyXCJcclxuICAgICAgICAgICAgey4uLmNvdW50V3JhcHBlclByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q291bnRVcFxyXG4gICAgICAgICAgICAgIGRlbGF5PXsxfVxyXG4gICAgICAgICAgICAgIHJlZHJhdz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZW5kPXt2aWV3UG9ydEVudGVyZWQgPyBlbmQgOiBzdGFydH1cclxuICAgICAgICAgICAgICBzdGFydD17c3RhcnR9XHJcbiAgICAgICAgICAgICAgc3VmZml4PXtzdWZmaXggfHwgJyd9XHJcbiAgICAgICAgICAgICAgcHJlZml4PXtwcmVmaXggfHwgJyd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY291bnR1cC1udW1iZXJfX2NvdW50XCJcclxuICAgICAgICAgICAgICB7Li4uY291bnROdW1iZXJQcm9wc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICBjb2xvcj17bGFiZWxDb2xvciB8fCAndGV4dFNlY29uZGFyeSd9XHJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY291bnR1cC1udW1iZXJfX2xhYmVsXCJcclxuICAgICAgICAgICAgey4uLmxhYmVsUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkNvdW50VXBOdW1iZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0YXJ0OiAwLFxyXG4gIHZpc2liaWxpdHlTZW5zb3JQcm9wczoge30sXHJcbiAgd3JhcHBlclByb3BzOiB7fSxcclxuICBjb3VudFdyYXBwZXJQcm9wczoge30sXHJcbiAgY291bnROdW1iZXJQcm9wczoge30sXHJcbiAgbGFiZWxQcm9wczoge30sXHJcbn07XHJcblxyXG5Db3VudFVwTnVtYmVyLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBTdWZmaXggb2YgdGhlIGNvdW50IHVwIG51bWJlclxyXG4gICAqL1xyXG4gIHN1ZmZpeDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgUHJlZml4IG9mIHRoZSBjb3VudCB1cCBudW1iZXJcclxuICAgKi9cclxuICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGxhYmVsIHRleHQgb2YgdGhlIGNvdW50IHVwIG51bWJlclxyXG4gICAqL1xyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU3RhcnRpbmcgbnVtYmVyXHJcbiAgICovXHJcbiAgc3RhcnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgLyoqXHJcbiAgICogRW5kIG51bWJlclxyXG4gICAqL1xyXG4gIGVuZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRleHQgY29sb3JcclxuICAgKi9cclxuICB0ZXh0Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogTGFiZWwgY29sb3JcclxuICAgKi9cclxuICBsYWJlbENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBWaXNpYmlsaXR5U2Vuc29yIENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHZpc2liaWxpdHlTZW5zb3JQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgd3JhcHBlciBkaXZcclxuICAgKi9cclxuICB3cmFwcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIGNvdW50IHdyYXBwZXIgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBjb3VudFdyYXBwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgQ291bnRVcCBSZWFjdCBjb21wb25lbnRcclxuICAgKi9cclxuICBjb3VudE51bWJlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBsYWJlbCBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGxhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudFVwTnVtYmVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Db3VudFVwTnVtYmVyJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgZGVzY3JpcHRpb24gd2l0aCBDVEEnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IERlc2NyaXB0aW9uQ3RhID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlLFxyXG4gICAgc3VidGl0bGUsXHJcbiAgICBwcmltYXJ5Q3RhLFxyXG4gICAgc2Vjb25kYXJ5Q3RhLFxyXG4gICAgYWxpZ24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB3cmFwcGVyUHJvcHMsXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIGJ1dHRvbkdyb3VwUHJvcHMsXHJcbiAgICBwcmltYXJ5QnV0dG9uV3JhcHBlclByb3BzLFxyXG4gICAgc2Vjb25kYXJ5QnV0dG9uV3JhcHBlclByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzU20gPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpLCB7XHJcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgbGV0IGp1c3RpZnlHcmlkID0gJ2NlbnRlcic7XHJcbiAgaWYgKGFsaWduID09PSAnbGVmdCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gaXNTbSA/ICdmbGV4LWVuZCcgOiAnZmxleC1zdGFydCc7XHJcbiAgfSBlbHNlIGlmIChhbGlnbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAganVzdGlmeUdyaWQgPSBpc1NtID8gJ2ZsZXgtc3RhcnQnIDogJ2ZsZXgtZW5kJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBjb250YWluZXJcclxuICAgICAgc3BhY2luZz17Mn1cclxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnZGVzY3JpcHRpb24tY3RhJywgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tY3RhX193cmFwcGVyXCIgey4uLndyYXBwZXJQcm9wc30+XHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXHJcbiAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWN0YV9fdGl0bGVcIlxyXG4gICAgICAgICAgey4uLnRpdGxlUHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICB7c3VidGl0bGUgJiYgKFxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tY3RhX19zdWJ0aXRsZVwiXHJcbiAgICAgICAgICAgIHsuLi5zdWJ0aXRsZVByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtqdXN0aWZ5R3JpZH1cclxuICAgICAgICAgIHNwYWNpbmc9ezF9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1jdGFfX2J1dHRvbi1ncm91cFwiXHJcbiAgICAgICAgICB7Li4uYnV0dG9uR3JvdXBQcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWN0YV9fcHJpbWFyeS1idXR0b24td3JhcHBlclwiXHJcbiAgICAgICAgICAgIHsuLi5wcmltYXJ5QnV0dG9uV3JhcHBlclByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJpbWFyeUN0YX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIHtzZWNvbmRhcnlDdGEgJiYgKFxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2Rlc2NyaXB0aW9uLWN0YV9fc2Vjb25kYXJ5LWJ1dHRvbi13cmFwcGVyJyl9XHJcbiAgICAgICAgICAgICAgey4uLnNlY29uZGFyeUJ1dHRvbldyYXBwZXJQcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzZWNvbmRhcnlDdGF9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkRlc2NyaXB0aW9uQ3RhLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgd3JhcHBlclByb3BzOiB7fSxcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxuICBidXR0b25Hcm91cFByb3BzOiB7fSxcclxuICBwcmltYXJ5QnV0dG9uV3JhcHBlclByb3BzOiB7fSxcclxuICBzZWNvbmRhcnlCdXR0b25XcmFwcGVyUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuRGVzY3JpcHRpb25DdGEucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgdGhlIGxpc3RcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFN1YnRpdGxlIG9mIHRoZSBsaXN0XHJcbiAgICovXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogUHJpbWFyeSBDVEEgb2YgdGhlIGxpc3RcclxuICAgKi9cclxuICBwcmltYXJ5Q3RhOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFNlY29uZGFyeSBDVEEgb2YgdGhlIGxpc3RcclxuICAgKi9cclxuICBzZWNvbmRhcnlDdGE6IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIEFsaWdubWVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgd3JhcHBlciBHcmlkIGl0ZW0gY29tcG9uZW50c1xyXG4gICAqL1xyXG4gIHdyYXBwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRzXHJcbiAgICovXHJcbiAgdGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRzXHJcbiAgICovXHJcbiAgc3VidGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgYnV0dG9uIGdyb3VwIGRpdiBjb250YWluZXJcclxuICAgKi9cclxuICBidXR0b25Hcm91cFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBwcmltYXJ5IGJ1dHRvbiB3cmFwcGVyIGRpdiBjb250YWluZXJcclxuICAgKi9cclxuICBwcmltYXJ5QnV0dG9uV3JhcHBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBzZWNvbmRhcnkgYnV0dG9uIHdyYXBwZXIgZGl2IGNvbnRhaW5lclxyXG4gICAqL1xyXG4gIHNlY29uZGFyeUJ1dHRvbldyYXBwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2NyaXB0aW9uQ3RhO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9EZXNjcmlwdGlvbkN0YSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQXZhdGFyLCBjb2xvcnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBleHRyYVNtYWxsOiB7XHJcbiAgICB3aWR0aDogMjAsXHJcbiAgICBoZWlnaHQ6IDIwLFxyXG4gIH0sXHJcbiAgc21hbGw6IHtcclxuICAgIHdpZHRoOiA1MCxcclxuICAgIGhlaWdodDogNTAsXHJcbiAgfSxcclxuICBtZWRpdW06IHtcclxuICAgIHdpZHRoOiA3MCxcclxuICAgIGhlaWdodDogNzAsXHJcbiAgfSxcclxuICBsYXJnZToge1xyXG4gICAgd2lkdGg6IDkwLFxyXG4gICAgaGVpZ2h0OiA5MCxcclxuICB9LFxyXG4gIGNpcmNsZToge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXHJcbiAgfSxcclxuICBzcXVhcmU6IHtcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGFsdGVybmF0ZSBpY29uXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgSWNvbkFsdGVybmF0ZSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpY29uUHJvcHMsXHJcbiAgICBmb250SWNvbkNsYXNzLFxyXG4gICAgc2l6ZSxcclxuICAgIGNvbG9yLFxyXG4gICAgc2hhcGUsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdXNlQmFja2dyb3VuZFN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCIjZTNmMmZkXCIsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuICBjb25zdCBiYWNrZ3JvdW5kQ2xhc3NlcyA9IHVzZUJhY2tncm91bmRTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdmF0YXJcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgIFwiaWNvbi1hbHRlcm5hdGVcIixcclxuICAgICAgICBjbGFzc2VzW3NpemVdLFxyXG4gICAgICAgIGNsYXNzZXNbc2hhcGVdLFxyXG4gICAgICAgIGJhY2tncm91bmRDbGFzc2VzLmJhY2tncm91bmQsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8SWNvblxyXG4gICAgICAgIHNpemU9e3NpemV9XHJcbiAgICAgICAgZm9udEljb25DbGFzcz17Zm9udEljb25DbGFzc31cclxuICAgICAgICBmb250SWNvbkNvbG9yPXtcIiM1MTIwZmZcIn1cclxuICAgICAgICBjbGFzc05hbWU9J2ljb24tYWx0ZXJuYXRlX19pY29uJ1xyXG4gICAgICAgIHsuLi5pY29uUHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICA8L0F2YXRhcj5cclxuICApO1xyXG59O1xyXG5cclxuSWNvbkFsdGVybmF0ZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc2l6ZTogJ21lZGl1bScsXHJcbiAgc2hhcGU6ICdzcXVhcmUnLFxyXG4gIGljb25Qcm9wczoge30sXHJcbn07XHJcblxyXG5JY29uQWx0ZXJuYXRlLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjbGFzc2VzIG9mIHRoZSBmb250IGljb25cclxuICAgKi9cclxuICBmb250SWNvbkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU2l6ZXMgb2YgdGhlIGljb25cclxuICAgKi9cclxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydleHRyYVNtYWxsJywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcclxuICAvKipcclxuICAgKiBDb2xvciBvZiB0aGUgaWNvblxyXG4gICAqL1xyXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgY29sb3JzLnJlZCxcclxuICAgIGNvbG9ycy5waW5rLFxyXG4gICAgY29sb3JzLnB1cnBsZSxcclxuICAgIGNvbG9ycy5kZWVwUHVycGxlLFxyXG4gICAgY29sb3JzLmluZGlnbyxcclxuICAgIGNvbG9ycy5ibHVlLFxyXG4gICAgY29sb3JzLmxpZ2h0Qmx1ZSxcclxuICAgIGNvbG9ycy5jeWFuLFxyXG4gICAgY29sb3JzLnRlYWwsXHJcbiAgICBjb2xvcnMuZ3JlZW4sXHJcbiAgICBjb2xvcnMubGlnaHRHcmVlbixcclxuICAgIGNvbG9ycy5saW1lLFxyXG4gICAgY29sb3JzLnllbGxvdyxcclxuICAgIGNvbG9ycy5hbWJlcixcclxuICAgIGNvbG9ycy5vcmFuZ2UsXHJcbiAgICBjb2xvcnMuZGVlcE9yYW5nZSxcclxuICAgIGNvbG9ycy5icm93bixcclxuICAgIGNvbG9ycy5ncmV5LFxyXG4gICAgY29sb3JzLmJsdWVHcmV5LFxyXG4gIF0pLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBzaGFwZSBvZiB0aGUgYWx0ZXJuYXRlIGljb25cclxuICAgKi9cclxuICBzaGFwZTogUHJvcFR5cGVzLm9uZU9mKFsnY2lyY2xlJywgJ3NxdWFyZSddKSxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgSWNvbiBjb21wb25lbnRcclxuICAgKi9cclxuICBpY29uUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uQWx0ZXJuYXRlO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9JY29uQWx0ZXJuYXRlJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGltYWdlR3JpZDoge1xyXG4gICAgcGFkZGluZzogJy4yNXJlbScsXHJcbiAgICB3aWR0aDogJzE1MCUnLFxyXG4gICAgYm94U2hhZG93OiAnMCAxLjVyZW0gNHJlbSByZ2JhKDIyLDI4LDQ1LC4xKScsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAnJiBpbWcnOiB7XHJcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgICAgYm9yZGVyU3R5bGU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZUdyaWRGaXJzdEl0ZW06IHtcclxuICAgIG1hcmdpblRvcDogJzRyZW0nLFxyXG4gIH0sXHJcbiAgaW1hZ2VHcmlkTGFzdEl0ZW06IHtcclxuICAgIG1hcmdpblRvcDogJzZyZW0nLFxyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBvdmVybGFwZWQgaW1hZ2VzXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgT3ZlcmxhcGVkSW1hZ2VzID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgaW1hZ2UxLCBpbWFnZTIsIGltYWdlMywgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRcclxuICAgICAgY29udGFpbmVyXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnb3ZlcmxhcGVkLWltYWdlcycsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXs0fSBjbGFzc05hbWU9XCJvdmVybGFwZWQtaW1hZ2VzX19pdGVtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgJ292ZXJsYXBlZC1pbWFnZXNfX2l0ZW0td3JhcHBlcicsXHJcbiAgICAgICAgICAgIGNsYXNzZXMuaW1hZ2VHcmlkLFxyXG4gICAgICAgICAgICBjbGFzc2VzLmltYWdlR3JpZEZpcnN0SXRlbSxcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2UxLnNyY31cclxuICAgICAgICAgICAgc3JjU2V0PXtpbWFnZTEuc3Jjc2V0fVxyXG4gICAgICAgICAgICBhbHQ9e2ltYWdlMS5hbHR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJsYXBlZC1pbWFnZXNfX2l0ZW0taW1hZ2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXs0fSBjbGFzc05hbWU9XCJvdmVybGFwZWQtaW1hZ2VzX19pdGVtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnb3ZlcmxhcGVkLWltYWdlc19faXRlbS13cmFwcGVyJywgY2xhc3Nlcy5pbWFnZUdyaWQpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e2ltYWdlMi5zcmN9XHJcbiAgICAgICAgICAgIHNyY1NldD17aW1hZ2UyLnNyY3NldH1cclxuICAgICAgICAgICAgYWx0PXtpbWFnZTIuYWx0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVybGFwZWQtaW1hZ2VzX19pdGVtLWltYWdlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17NH0gY2xhc3NOYW1lPVwib3ZlcmxhcGVkLWltYWdlc19faXRlbS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICdvdmVybGFwZWQtaW1hZ2VzX19pdGVtLXdyYXBwZXInLFxyXG4gICAgICAgICAgICBjbGFzc2VzLmltYWdlR3JpZCxcclxuICAgICAgICAgICAgY2xhc3Nlcy5pbWFnZUdyaWRMYXN0SXRlbSxcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2UzLnNyY31cclxuICAgICAgICAgICAgc3JjU2V0PXtpbWFnZTMuc3Jjc2V0fVxyXG4gICAgICAgICAgICBhbHQ9e2ltYWdlMy5hbHR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJsYXBlZC1pbWFnZXNfX2l0ZW0taW1hZ2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5PdmVybGFwZWRJbWFnZXMucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogSW1hZ2UgaXRlbSAtIE9iamVjdCBvZiBzcmMsIHNyY3NldCBhbmQgYWx0IHByb3BlcnRpZXNcclxuICAgKi9cclxuICBpbWFnZTE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBJbWFnZSBpdGVtIC0gT2JqZWN0IG9mIHNyYywgc3Jjc2V0IGFuZCBhbHQgcHJvcGVydGllc1xyXG4gICAqL1xyXG4gIGltYWdlMjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEltYWdlIGl0ZW0gLSBPYmplY3Qgb2Ygc3JjLCBzcmNzZXQgYW5kIGFsdCBwcm9wZXJ0aWVzXHJcbiAgICovXHJcbiAgaW1hZ2UzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVybGFwZWRJbWFnZXM7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL092ZXJsYXBlZEltYWdlcyc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkaXNhYmxlR3V0dGVyOiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIH0sXHJcbiAgY3RhOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgJyY6Zmlyc3QtY2hpbGQnOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMCksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgc2VjdGlvbiBoZWFkZXJzXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgU2VjdGlvbkhlYWRlciA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSxcclxuICAgIHRpdGxlVmFyaWFudCxcclxuICAgIHN1YnRpdGxlVmFyaWFudCxcclxuICAgIHN1YnRpdGxlLFxyXG4gICAgc3VidGl0bGVDb2xvcixcclxuICAgIGxhYmVsLFxyXG4gICAgb3ZlcmxpbmUsXHJcbiAgICBmYWRlVXAsXHJcbiAgICBhbGlnbixcclxuICAgIGN0YUdyb3VwLFxyXG4gICAgZGlzYWJsZUd1dHRlcixcclxuICAgIHRpdGxlQ2xhc3NlcyxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIGxhYmVsUHJvcHMsXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBsZXQganVzdGlmeUdyaWQgPSAnY2VudGVyJztcclxuICBpZiAoYWxpZ24gPT09ICdsZWZ0Jykge1xyXG4gICAganVzdGlmeUdyaWQgPSAnZmxleC1zdGFydCc7XHJcbiAgfSBlbHNlIGlmIChhbGlnbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAganVzdGlmeUdyaWQgPSAnZmxleC1lbmQnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIGNvbnRhaW5lclxyXG4gICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICBkYXRhLWFvcz17ZmFkZVVwID8gXCJmYWRlLXVwXCIgOiBcIlwifVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgXCJzZWN0aW9uLWhlYWRlclwiLFxyXG4gICAgICAgIGNsYXNzZXMucm9vdCxcclxuICAgICAgICBkaXNhYmxlR3V0dGVyID8gY2xhc3Nlcy5kaXNhYmxlR3V0dGVyIDoge30sXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICB7b3ZlcmxpbmUgJiYgKFxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtqdXN0aWZ5R3JpZH1cclxuICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgIGNsYXNzTmFtZT0nc2VjdGlvbi1oZWFkZXJfX292ZXJsaW5lLXdyYXBwZXInXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge292ZXJsaW5lfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKX1cclxuICAgICAge2xhYmVsICYmIChcclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPSdzZWN0aW9uLWhlYWRlcl9fbGFiZWwtd3JhcHBlcic+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PSdvdmVybGluZSdcclxuICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcclxuICAgICAgICAgICAgYWxpZ249e2FsaWduIHx8IFwiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgIHsuLi5sYWJlbFByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApfVxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPSdzZWN0aW9uLWhlYWRlcl9fdGl0bGUtd3JhcHBlcic+XHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIHZhcmlhbnQ9e3RpdGxlVmFyaWFudH1cclxuICAgICAgICAgIGFsaWduPXthbGlnbiB8fCBcImNlbnRlclwifVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICBcInNlY3Rpb24taGVhZGVyX190aXRsZVwiLFxyXG4gICAgICAgICAgICBjbGFzc2VzLnRpdGxlLFxyXG4gICAgICAgICAgICB0aXRsZUNsYXNzZXMgPyB0aXRsZUNsYXNzZXMgOiB7fVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIGNvbG9yPSd0ZXh0UHJpbWFyeSdcclxuICAgICAgICAgIHsuLi50aXRsZVByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAge3N1YnRpdGxlICYmIChcclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPSdzZWN0aW9uLWhlYWRlcl9fc3VidGl0bGUtd3JhcHBlcic+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PXtzdWJ0aXRsZVZhcmlhbnQgfHwgXCJoNlwifVxyXG4gICAgICAgICAgICBhbGlnbj17YWxpZ24gfHwgXCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgY29sb3I9e3N1YnRpdGxlQ29sb3IgfHwgXCJ0ZXh0UHJpbWFyeVwifVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3NlY3Rpb24taGVhZGVyX19zdWJ0aXRsZSdcclxuICAgICAgICAgICAgey4uLnN1YnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzdWJ0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjdGFHcm91cCAmJiBjdGFHcm91cC5sZW5ndGggJiYgKFxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9J3NlY3Rpb24taGVhZGVyX19jdGEtd3JhcHBlcic+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e2p1c3RpZnlHcmlkfVxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICAgIHdyYXA9J25vd3JhcCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uLWhlYWRlcl9fY3RhLWNvbnRhaW5lcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2N0YUdyb3VwLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICBcInNlY3Rpb24taGVhZGVyX19jdGEtaXRlbS13cmFwcGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXMuY3RhXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcblNlY3Rpb25IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRpdGxlVmFyaWFudDogJ2g0JyxcclxuICBsYWJlbFByb3BzOiB7fSxcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxufTtcclxuXHJcblNlY3Rpb25IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgdGhlIHNlY3Rpb24gaGVhZGVyXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTdWJ0aXRsZSBvZiB0aGUgc2VjdGlvbiBoZWFkZXJcclxuICAgKi9cclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcclxuICAvKipcclxuICAgKiBMYWJlbCB0aXRsZSBvZiB0aGUgc2VjdGlvbiBoZWFkZXJcclxuICAgKi9cclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgb3ZlcmxpbmUgY29tcG9uZW50IGluIHRoZSBzZWN0aW9uIGhlYWRlclxyXG4gICAqL1xyXG4gIG92ZXJsaW5lOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBBcnJheSBvZiB0aGUgQ1RBc1xyXG4gICAqL1xyXG4gIGN0YUdyb3VwOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBmYWRlIHVwIG9uIHNjcm9sbFxyXG4gICAqL1xyXG4gIGZhZGVVcDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogSGVhZGVyIGNvbnRlbnQgKHRpdGxlLCBzdWJ0aXRsZSwgQ1RBcykgYWxpZ25tZW50XHJcbiAgICovXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ3JpZ2h0JywgJ2xlZnQnLCAnY2VudGVyJ10pLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gZGlzYWJsZSBib3R0b20gbWFyZ2luIG9mIHRoZSBzZWN0aW9uXHJcbiAgICovXHJcbiAgZGlzYWJsZUd1dHRlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogU3R5bGVzIGNsYXNzZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHRpdGxlIGZyb20gdGhlIHBhcmVudCBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZUNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgdmFyaWFudFxyXG4gICAqL1xyXG4gIHRpdGxlVmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXSlcclxuICAgIC5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFN1YlRpdGxlIHZhcmlhbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICAnaDEnLFxyXG4gICAgJ2gyJyxcclxuICAgICdoMycsXHJcbiAgICAnaDQnLFxyXG4gICAgJ2g1JyxcclxuICAgICdoNicsXHJcbiAgICAnc3VidGl0bGUxJyxcclxuICAgICdzdWJ0aXRsZTInLFxyXG4gICAgJ2JvZHkxJyxcclxuICAgICdib2R5MicsXHJcbiAgXSksXHJcbiAgLyoqXHJcbiAgICogU3ViVGl0bGUgY29sb3JcclxuICAgKi9cclxuICBzdWJ0aXRsZUNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgJ3RleHRQcmltYXJ5JyxcclxuICAgICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgICdwcmltYXJ5JyxcclxuICAgICdzZWNvbmRhcnknLFxyXG4gIF0pLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBsYWJlbCBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGxhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkhlYWRlcjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU2VjdGlvbkhlYWRlcic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB6SW5kZXg6ICdhdXRvJyxcclxuICB9LFxyXG4gIHN3aXBlclNsaWRlOiB7XHJcbiAgICB3aWR0aDogJ2F1dG8nLFxyXG4gIH0sXHJcbiAgc3dpcGVyTmF2OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB3aWR0aDogODgsXHJcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICByaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHpJbmRleDogNCxcclxuICAgICcmIC5zd2lwZXItYnV0dG9uLXByZXYsICYgLnN3aXBlci1idXR0b24tbmV4dCc6IHtcclxuICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgYm94U2hhZG93OiBgMCAycHggMTBweCAwICR7dGhlbWUucGFsZXR0ZS5jYXJkU2hhZG93fWAsXHJcbiAgICAgIGJvcmRlcjogYDJweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcn1gLFxyXG4gICAgICAnJjphZnRlcic6IHtcclxuICAgICAgICBmb250U2l6ZTogJ2luaXRpYWwnLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgLnN3aXBlci1idXR0b24tcHJldic6IHtcclxuICAgICAgbGVmdDogMCxcclxuICAgIH0sXHJcbiAgICAnJiAuc3dpcGVyLWJ1dHRvbi1uZXh0Jzoge1xyXG4gICAgICByaWdodDogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgaW1hZ2Ugc3dpcGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgU3dpcGVySW1hZ2UgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaXRlbXMsXHJcbiAgICBuYXZpZ2F0aW9uQnV0dG9uU3R5bGUsXHJcbiAgICBpbWFnZUNsYXNzTmFtZSxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgJ3N3aXBlci1jb250YWluZXInLFxyXG4gICAgICAgICdzd2lwZXItaW1hZ2UnLFxyXG4gICAgICAgIGNsYXNzZXMucm9vdCxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1pbWFnZV9fd3JhcHBlciwgc3dpcGVyLXdyYXBwZXJcIj5cclxuICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgJ3N3aXBlci1pbWFnZV9fc2xpZGUnLFxyXG4gICAgICAgICAgICAgICdzd2lwZXItc2xpZGUnLFxyXG4gICAgICAgICAgICAgIGNsYXNzZXMuc3dpcGVyU2xpZGUsXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aXRlbS5zcmN9XHJcbiAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdH1cclxuICAgICAgICAgICAgICBzcmNTZXQ9e2l0ZW0uc3JjU2V0fVxyXG4gICAgICAgICAgICAgIGxhenlQcm9wcz17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAgICdzd2lwZXItaW1hZ2VfX2l0ZW0nLFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5pbWFnZSxcclxuICAgICAgICAgICAgICAgIGltYWdlQ2xhc3NOYW1lID8gaW1hZ2VDbGFzc05hbWUgOiB7fSxcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnc3dpcGVyLWltYWdlX19uYXZpZ2F0aW9uJywgY2xhc3Nlcy5zd2lwZXJOYXYpfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICdzd2lwZXItaW1hZ2VfX25hdmlnYXRpb24tYnV0dG9uJyxcclxuICAgICAgICAgICAgJ3N3aXBlci1pbWFnZV9fbmF2aWdhdGlvbi1idXR0b24tLXByZXYnLFxyXG4gICAgICAgICAgICAnc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJ1dHRvblN0eWxlIHx8IHt9LFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgJ3N3aXBlci1pbWFnZV9fbmF2aWdhdGlvbi1idXR0b24nLFxyXG4gICAgICAgICAgICAnc3dpcGVyLWltYWdlX19uYXZpZ2F0aW9uLWJ1dHRvbi0tbmV4dCcsXHJcbiAgICAgICAgICAgICdzd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQnV0dG9uU3R5bGUgfHwge30sXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblN3aXBlckltYWdlLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXMgZm9yIHRoZSBpbWFnZXNcclxuICAgKi9cclxuICBpbWFnZUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgYXJyYXkgb2YgaW1hZ2VzIG9iamVjdCB3aGljaCBzaG91bGQgY29uc2lzdCBvZiBzcmMsIGFsdCBhbmQgc3Jjc2V0IGF0dHJpYnV0ZXNcclxuICAgKi9cclxuICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTdHlsZXMgY2xhc3NlcyBvZiB0aGUgbmF2aWdhdGlvbiBidXR0b25cclxuICAgKi9cclxuICBuYXZpZ2F0aW9uQnV0dG9uU3R5bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2lwZXJJbWFnZTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU3dpcGVySW1hZ2UnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5LCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgc3dpcGVyU2xpZGU6IHtcclxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoNiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbnVtYmVyOiB7XHJcbiAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBudW1iZXIgc3dpcGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgU3dpcGVyTnVtYmVyID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGl0ZW1zLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgbnVtYmVyUHJvcHMsXHJcbiAgICBsYWJlbFByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyksIHtcclxuICAgIGRlZmF1bHRNYXRjaGVzOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IGlzTWQgPyA0IDogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBhdXRvcGxheToge1xyXG4gICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAnc3dpcGVyLW51bWJlcicsXHJcbiAgICAgICAgJ3N3aXBlci1jb250YWluZXInLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLW51bWJlcl9fd3JhcHBlciBzd2lwZXItd3JhcHBlclwiPlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAnc3dpcGVyLW51bWJlcl9faXRlbScsXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcy5zd2lwZXJTbGlkZSxcclxuICAgICAgICAgICAgICAnc3dpcGVyLXNsaWRlJyxcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICdhdXRvJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezF9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dpcGVyLW51bWJlcl9faXRlbS1jb250YWluZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cInN3aXBlci1udW1iZXJfX251bWJlci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnc3dpcGVyLW51bWJlcl9fbnVtYmVyJywgY2xhc3Nlcy5udW1iZXIpfVxyXG4gICAgICAgICAgICAgICAgICB7Li4ubnVtYmVyUHJvcHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLm51bWJlcn1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cInN3aXBlci1udW1iZXJfX2xhYmVsLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlci1udW1iZXJfX2xhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmxhYmVsUHJvcHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1udW1iZXJfX3BhZ2luYXRpb24gc3dpcGVyLXBhZ2luYXRpb25cIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblN3aXBlck51bWJlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbnVtYmVyUHJvcHM6IHt9LFxyXG4gIGxhYmVsUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuU3dpcGVyTnVtYmVyLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBhcnJheSBvZiBudW1iZXJzIG9iamVjdCB3aGljaCBzaG91bGQgY29uc2lzdCBvZiBudW1iZXIgYW5kIHRpdGxlXHJcbiAgICovXHJcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBudW1iZXIgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBudW1iZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBUaGUgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIGxhYmVsIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgbGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3aXBlck51bWJlcjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU3dpcGVyTnVtYmVyJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBUeXBlZCBmcm9tICdyZWFjdC10eXBlZCc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHR5cGVkIGFuaW1hdGVkIHRleHRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgVHlwZWRUZXh0ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCB0eXBlZFByb3BzLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgndHlwZWQtdGV4dCcsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8VHlwZWQgY2xhc3NOYW1lPVwidHlwZWQtdGV4dF9faXRlbVwiIHsuLi50eXBlZFByb3BzfSAvPlxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICk7XHJcbn07XHJcblxyXG5UeXBlZFRleHQucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogcmVhY3QtdHlwZWQgcHJvcGVydGllcy4gRm9yIG1vcmUgaW5mbyB2aXNpdCBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yZWFjdC10eXBlZFxyXG4gICAqL1xyXG4gIHR5cGVkUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR5cGVkVGV4dDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVHlwZWRUZXh0JztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWN0aW9uSGVhZGVyIH0gZnJvbSAnLi9TZWN0aW9uSGVhZGVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uQWx0ZXJuYXRlIH0gZnJvbSAnLi9JY29uQWx0ZXJuYXRlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTd2lwZXJJbWFnZSB9IGZyb20gJy4vU3dpcGVySW1hZ2UnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERlc2NyaXB0aW9uQ3RhIH0gZnJvbSAnLi9EZXNjcmlwdGlvbkN0YSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ291bnRVcE51bWJlciB9IGZyb20gJy4vQ291bnRVcE51bWJlcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT3ZlcmxhcGVkSW1hZ2VzIH0gZnJvbSAnLi9PdmVybGFwZWRJbWFnZXMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN3aXBlck51bWJlciB9IGZyb20gJy4vU3dpcGVyTnVtYmVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUeXBlZFRleHQgfSBmcm9tICcuL1R5cGVkVGV4dCc7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLW11bHRpLWNvbXAgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGlzcGxheS1uYW1lICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtcclxuICBUeXBvZ3JhcGh5LFxyXG4gIEdyaWQsXHJcbiAgQWNjb3JkaW9uIGFzIE11aUFjY29yZGlvbixcclxuICBBY2NvcmRpb25TdW1tYXJ5IGFzIE11aUFjY29yZGlvblN1bW1hcnksXHJcbiAgQWNjb3JkaW9uRGV0YWlscyBhcyBNdWlBY2NvcmRpb25EZXRhaWxzLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcclxuXHJcbmltcG9ydCB7IExlYXJuTW9yZUxpbmsgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICB9LFxyXG4gIGV4cGFuZE9wZW46IHtcclxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgYWNjb3JkaW9uIHZpZXdcclxuICpcclxuICogQHBhcmFtIHsqfSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQWNjb3JkaW9uID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGl0ZW1zLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdGl0bGVQcm9wcyxcclxuICAgIHN1YnRpdGxlUHJvcHMsXHJcbiAgICB0ZXh0UHJvcHMsXHJcbiAgICBsaW5rUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHsuLi5yZXN0fSBjbGFzc05hbWU9e2Nsc3goJ2FjY29yZGlvbicsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0+XHJcbiAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgPE11aUFjY29yZGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdhY2NvcmRpb25fX2l0ZW0td3JhcHBlcicsIGNsYXNzZXMubGlzdEl0ZW0pfVxyXG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNdWlBY2NvcmRpb25TdW1tYXJ5XHJcbiAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz17YCR7aXRlbS5pZH0tY29udGVudGB9XHJcbiAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3Jpb25fX2l0ZW0tdGV4dC1jb250YWluZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImFjY29yaW9uX19pdGVtLXRpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yaW9uX2l0ZW0tdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIHtpdGVtLnN1YnRpdGxlICYmIChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJhY2Nvcmlvbl9pdGVtLXN1YnRpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3Jpb25faXRlbS1zdWJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnN1YnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvTXVpQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICAgIDxNdWlBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX19jb2xsYXBzYWJsZS10ZXh0LWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX19jb2xsYXBzYWJsZS10ZXh0LXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb25fX2NvbGxhcHNhYmxlLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4udGV4dFByb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICB7aXRlbS5saW5rICYmIChcclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb25fX2NvbGxhcHNhYmxlLWxpbmstd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMZWFybk1vcmVMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubGlua31cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9fY29sbGFwc2FibGUtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmxpbmtQcm9wc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L011aUFjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgPC9NdWlBY2NvcmRpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkFjY29yZGlvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGl0bGVQcm9wczoge30sXHJcbiAgc3VidGl0bGVQcm9wczoge30sXHJcbiAgdGV4dFByb3BzOiB7fSxcclxuICBsaW5rUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQWNjb3JkaW9uLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBDbGFzc25hbWUgZnJvbSB0aGUgcGFyZW50IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBJdGVtcyB0byBzaG93IGluc2lkZSB0aGUgYWNjb3JkaW9uXHJcbiAgICovXHJcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHN1YnRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgdGV4dCBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRleHRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgbGluayBjb21wb25lbnRcclxuICAgKi9cclxuICBsaW5rUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0FjY29yZGlvbic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgd2l0aFNoYWRvdzoge1xyXG4gICAgYm94U2hhZG93OiBgMCAycHggMTBweCAwICR7dGhlbWUucGFsZXR0ZS5jYXJkU2hhZG93fWAsXHJcbiAgfSxcclxuICBub1NoYWRvdzoge1xyXG4gICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgfSxcclxuICBub0JvcmRlcjoge1xyXG4gICAgYm9yZGVyOiAwLFxyXG4gIH0sXHJcbiAgbm9CZzoge1xyXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICB9LFxyXG4gIGxpZnRVcDoge1xyXG4gICAgdHJhbnNpdGlvbjpcclxuICAgICAgJ2JveC1zaGFkb3cgLjI1cyBlYXNlLHRyYW5zZm9ybSAuMjVzIGVhc2UsLXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBlYXNlJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgJzAgMS41cmVtIDIuNXJlbSByZ2JhKDIyLDI4LDQ1LC4xKSwwIC4zcmVtIDAuNXJlbSAtLjUwcmVtIHJnYmEoMjIsMjgsNDUsLjA1KSAhaW1wb3J0YW50JyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwtNXB4LDApJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDIpLFxyXG4gICAgJyY6bGFzdC1jaGlsZCc6IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCAyKSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMyksXHJcbiAgICAgICcmOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAzKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsZWZ0OiB7XHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgfSxcclxuICByaWdodDoge1xyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcclxuICB9LFxyXG4gIGNlbnRlcjoge1xyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBiYXNpYyBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZEJhc2UgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgd2l0aFNoYWRvdyxcclxuICAgIG5vU2hhZG93LFxyXG4gICAgbm9Cb3JkZXIsXHJcbiAgICBub0JnLFxyXG4gICAgbGlmdFVwLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBhbGlnbixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIGNhcmRDb250ZW50UHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZFxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgJ2NhcmQtYmFzZScsXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIHdpdGhTaGFkb3cgPyBjbGFzc2VzLndpdGhTaGFkb3cgOiB7fSxcclxuICAgICAgICBub1NoYWRvdyA/IGNsYXNzZXMubm9TaGFkb3cgOiB7fSxcclxuICAgICAgICBub0JvcmRlciA/IGNsYXNzZXMubm9Cb3JkZXIgOiB7fSxcclxuICAgICAgICBub0JnID8gY2xhc3Nlcy5ub0JnIDoge30sXHJcbiAgICAgICAgbGlmdFVwID8gY2xhc3Nlcy5saWZ0VXAgOiB7fSxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8Q2FyZENvbnRlbnRcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2NhcmQtYmFzZV9fY29udGVudCcsIGNsYXNzZXMuY29udGVudCwgY2xhc3Nlc1thbGlnbl0pfVxyXG4gICAgICAgIHsuLi5jYXJkQ29udGVudFByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkQmFzZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdjZW50ZXInLFxyXG4gIGNhcmRDb250ZW50UHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQ2FyZEJhc2UucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNoaWxkcmVuIGNvbnRlbnQgb2YgdGhlIGJhc2ljIGNhcmRcclxuICAgKi9cclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHNob3cgY3VzdG9tIHNoYWRvd1xyXG4gICAqL1xyXG4gIHdpdGhTaGFkb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gcmVuZGVyIHRoZSBjYXJkIHdpdGhvdXQgc2hhZG93XHJcbiAgICovXHJcbiAgbm9TaGFkb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gaGlkZSB0aGUgY2FyZCBib3JkZXJzXHJcbiAgICovXHJcbiAgbm9Cb3JkZXI6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gc2hvdyB0cmFuc3BhcmVudCBiYWNrZ3JvdW5kXHJcbiAgICovXHJcbiAgbm9CZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBsaWZ0IHVwIG9uIGhvdmVyXHJcbiAgICovXHJcbiAgbGlmdFVwOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudCBhbGlnbm1lbnRcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBDYXJkQ29udGVudCBjb21wb25lbnRcclxuICAgKi9cclxuICBjYXJkQ29udGVudFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEJhc2U7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRCYXNlJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSwgRGVzY3JpcHRpb25MaXN0SWNvbiB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBjYXRlZ29yeSBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZENhdGVnb3J5ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgaWNvbiwgdGl0bGUsIGFsaWduLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEJhc2UgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8RGVzY3JpcHRpb25MaXN0SWNvbiBpY29uPXtpY29ufSB0aXRsZT17dGl0bGV9IGFsaWduPXthbGlnbn0gLz5cclxuICAgIDwvQ2FyZEJhc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRDYXRlZ29yeS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdjZW50ZXInLFxyXG59O1xyXG5cclxuQ2FyZENhdGVnb3J5LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEljb24gdG8gc2hvdyBpbnNpZGUgdGhlIGNhdGVnb3J5IGNhcmRcclxuICAgKi9cclxuICBpY29uOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIENhdGVnb3J5IHRpdGxlIHRvIHNob3cgaW5zaWRlIHRoZSBjYXRlZ29yeSBjYXJkXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudCBhbGlnbm1lbnRcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkQ2F0ZWdvcnk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRDYXRlZ29yeSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgY29sb3JzLCBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQXJyb3dSaWdodEFsdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHRBbHQnO1xyXG5pbXBvcnQgeyBJY29uQWx0ZXJuYXRlIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBmb250V2VpZ2h0NzAwOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxuICBoZWFkaW5nOntcclxuICAgIGZvbnRTaXplOlwiMjRweFwiXHJcbiAgfSxcclxuICBjYXRlZ29yeUljb25CdXR0b246IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICB9LFxyXG4gIHN1YmhlYWRpbmc6e31cclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBjYXRlZ29yeSBsaW5rIGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkQ2F0ZWdvcnlMaW5rID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGZvbnRJY29uQ2xhc3MsXHJcbiAgICBjb2xvcixcclxuICAgIHRpdGxlLFxyXG4gICAgc3VidGl0bGUsXHJcbiAgICBocmVmLFxyXG4gICAgYWxpZ24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBpY29uQWx0ZXJuYXRlUHJvcHMsXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgbGV0IGp1c3RpZnlHcmlkID0gJ2ZsZXgtc3RhcnQnO1xyXG4gIGlmIChhbGlnbiA9PT0gJ2NlbnRlcicpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gJ2NlbnRlcic7XHJcbiAgfSBlbHNlIGlmIChhbGlnbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAganVzdGlmeUdyaWQgPSAnZmxleC1lbmQnO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRCYXNlXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcImNhcmQtY2F0ZWdvcnktbGlua1wiLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBjbGFzc05hbWU9J2NhcmQtY2F0ZWdvcnktbGlua19fd3JhcHBlcic+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5Q29udGVudD17anVzdGlmeUdyaWR9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxJY29uQWx0ZXJuYXRlXHJcbiAgICAgICAgICAgICAgZm9udEljb25DbGFzcz17Zm9udEljb25DbGFzc31cclxuICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgICAgICAgICAgc2l6ZT0nbWVkaXVtJ1xyXG4gICAgICAgICAgICAgIHsuLi5pY29uQWx0ZXJuYXRlUHJvcHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0naDYnXHJcbiAgICAgICAgICAgICAgY29sb3I9J3RleHRQcmltYXJ5J1xyXG4gICAgICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5mb250V2VpZ2h0NzAwKX1cclxuICAgICAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAge3N1YnRpdGxlICYmIChcclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MSdcclxuICAgICAgICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJoZWFkaW5nfVxyXG4gICAgICAgICAgICAgICAgY29sb3I9J3RleHRQcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgey4uLnN1YnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgIFwiY2FyZC1jYXRlZ29yeS1saW5rX19pdGVtXCIsXHJcbiAgICAgICAgICAgIGNsYXNzZXMuY2F0ZWdvcnlJY29uQnV0dG9uXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT0nY2FyZC1jYXRlZ29yeS1saW5rX19pY29uLWJ1dHRvbic+XHJcbiAgICAgICAgICAgIDxBcnJvd1JpZ2h0QWx0SWNvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2FyZC1jYXRlZ29yeS1saW5rX19pY29uJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiM1MTIwZmZcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC8+XHJcbiAgICA8L0NhcmRCYXNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkQ2F0ZWdvcnlMaW5rLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2xlZnQnLFxyXG4gIGhyZWY6ICcjJyxcclxuICBpY29uQWx0ZXJuYXRlUHJvcHM6IHt9LFxyXG4gIHRpdGxlUHJvcHM6IHt9LFxyXG4gIHN1YnRpdGxlUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQ2FyZENhdGVnb3J5TGluay5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBQcm9tbyB0aXRsZSB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gc3VidGl0bGUgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBQcm9tbyBkZXNjcmlwdGlvbiB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBQcm9tbyBmb250IGljb24gY2xhc3MgbmFtZSB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGZvbnRJY29uQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gaWNvbiBjb2xvciB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgY29sb3JzLnJlZCxcclxuICAgIGNvbG9ycy5waW5rLFxyXG4gICAgY29sb3JzLnB1cnBsZSxcclxuICAgIGNvbG9ycy5kZWVwUHVycGxlLFxyXG4gICAgY29sb3JzLmluZGlnbyxcclxuICAgIGNvbG9ycy5ibHVlLFxyXG4gICAgY29sb3JzLmxpZ2h0Qmx1ZSxcclxuICAgIGNvbG9ycy5jeWFuLFxyXG4gICAgY29sb3JzLnRlYWwsXHJcbiAgICBjb2xvcnMuZ3JlZW4sXHJcbiAgICBjb2xvcnMubGlnaHRHcmVlbixcclxuICAgIGNvbG9ycy5saW1lLFxyXG4gICAgY29sb3JzLnllbGxvdyxcclxuICAgIGNvbG9ycy5hbWJlcixcclxuICAgIGNvbG9ycy5vcmFuZ2UsXHJcbiAgICBjb2xvcnMuZGVlcE9yYW5nZSxcclxuICAgIGNvbG9ycy5icm93bixcclxuICAgIGNvbG9ycy5ncmV5LFxyXG4gICAgY29sb3JzLmJsdWVHcmV5LFxyXG4gIF0pLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRlbnQgYWxpZ25tZW50XHJcbiAgICovXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJ10pLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgSWNvbkFsdGVybmF0ZSBjb21wb25lbnRcclxuICAgKi9cclxuICBpY29uQWx0ZXJuYXRlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBzdWJ0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkQ2F0ZWdvcnlMaW5rO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkQ2F0ZWdvcnlMaW5rJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge1xyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUF2YXRhcixcclxuICBBdmF0YXIsXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgQ2FyZEJhc2UgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgZG90OiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgZG90QmlnOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIGRvdFNtYWxsOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxIC8gMiksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gIH0sXHJcbiAgam9iVGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICB9LFxyXG4gIGRvdE1hcmdpbjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgam9iIGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkSm9iID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGJhZGdlQ29sb3IsXHJcbiAgICBiYWRnZVRpdGxlLFxyXG4gICAgam9iVGl0bGUsXHJcbiAgICBqb2JMb2NhdGlvbixcclxuICAgIGpvYlR5cGUsXHJcbiAgICBqb2JEYXRlLFxyXG4gICAgY29tcGFueUxvZ28sXHJcbiAgICBjb21wYW55TmFtZSxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2NhcmQtam9iJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICBhbGlnbj1cImxlZnRcIlxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB4cz17MTJ9PlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZG90LCBjbGFzc2VzLmRvdEJpZyl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGJhZGdlQ29sb3IgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJzcGFuXCIgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxyXG4gICAgICAgICAgICB7YmFkZ2VUaXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmpvYlRpdGxlfT5cclxuICAgICAgICAgICAge2pvYlRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtqb2JMb2NhdGlvbn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRvdCwgY2xhc3Nlcy5kb3RTbWFsbCwgY2xhc3Nlcy5kb3RNYXJnaW4pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2pvYlR5cGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxMaXN0SXRlbSBkaXNhYmxlR3V0dGVycz5cclxuICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICA8QXZhdGFyIHNyYz17Y29tcGFueUxvZ299IGFsdD17Y29tcGFueU5hbWV9IC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2NvbXBhbnlOYW1lfSBzZWNvbmRhcnk9e2pvYkRhdGV9IC8+XHJcbiAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICA8L0NhcmRCYXNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkSm9iLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEJhZGdlIGNvbG9yIG9mIHRoZSBqb2IgY2FyZFxyXG4gICAqL1xyXG4gIGJhZGdlQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBCYWRnZSB0aXRsZSBvZiB0aGUgam9iIGNhcmRcclxuICAgKi9cclxuICBiYWRnZVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIHRpdGxlIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgbG9jYXRpb24gb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JMb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiB0eXBlIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iVHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiBsb2NhdGlvbiBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYkRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDb21wYW55IGxvZ28gb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBjb21wYW55TG9nbzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIENvbXBhbnkgbmFtZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGNvbXBhbnlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkSm9iO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkSm9iJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCBBdmF0YXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5pbXBvcnQgeyBMZWFybk1vcmVMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgY29tcGFueUF2YXRhcjoge1xyXG4gICAgd2lkdGg6IDYwLFxyXG4gICAgaGVpZ2h0OiA2MCxcclxuICB9LFxyXG4gIGRvdDoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGRvdFNtYWxsOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxIC8gMiksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gIH0sXHJcbiAgY29tcGFueU5hbWU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICB9LFxyXG4gIGRvdE1hcmdpbjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgam9iIGNhcmQgY29tcGFueVxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRKb2JDb21wYW55ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGpvYlRpdGxlLFxyXG4gICAgam9iTG9jYXRpb24sXHJcbiAgICBjb21wYW55TG9nbyxcclxuICAgIGNvbXBhbnlOYW1lLFxyXG4gICAgam9ic0NvdW50LFxyXG4gICAgY29tcGFueUluZm8sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEJhc2VcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjYXJkLWNvbXBhbnknLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICBzcmM9e2NvbXBhbnlMb2dvfVxyXG4gICAgICAgICAgICBhbHQ9e2NvbXBhbnlOYW1lfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29tcGFueUF2YXRhcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wYW55TmFtZX0+XHJcbiAgICAgICAgICAgIHtjb21wYW55TmFtZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIHtqb2JUaXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRvdCwgY2xhc3Nlcy5kb3RTbWFsbCwgY2xhc3Nlcy5kb3RNYXJnaW4pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgzXCIgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cclxuICAgICAgICAgICAge2pvYkxvY2F0aW9ufVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8TGVhcm5Nb3JlTGluayB0aXRsZT17am9ic0NvdW50fSB2YXJpYW50PVwic3VidGl0bGUxXCIgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwic3BhblwiIHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICB7Y29tcGFueUluZm99XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NhcmRCYXNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkSm9iQ29tcGFueS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBKb2IgdGl0bGUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiBsb2NhdGlvbiBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYkxvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQ29tcGFueSBsb2dvIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgY29tcGFueUxvZ286IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDb21wYW55IG5hbWUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBjb21wYW55TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIENvdW50IG9mIHRoZSBqb2JzIGluIHRoZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYnNDb3VudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIENvbXBhbnkgaW5mbyBpbiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGNvbXBhbnlJbmZvOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkSm9iQ29tcGFueTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZEpvYkNvbXBhbnknO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGNvbG9ycywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGJvcmRlcjogYHNvbGlkIDFweCByZ2JhKDQzLCA0MSwgNDUsIDAuMilgLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIH0sXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICAnMCAxMXB4IDU1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDcpLCAwIDEzcHggMThweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSknLFxyXG4gICAgICAnJiAuY2FyZC1qb2ItbWluaW1hbF9fdGl0bGUsICYgLmNhcmQtam9iLW1pbmltYWxfX2xvY2F0aW9uLCAmIC5jYXJkLWpvYi1taW5pbWFsX19hcnJvdyc6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcmRKb2JNaW5pbWFsQm9keToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBqb2IgY2FyZCBjb21wYW55XHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZEpvYk1pbmltYWwgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdGl0bGUsXHJcbiAgICBzdWJ0aXRsZSxcclxuICAgIHNob3dBcnJvdyxcclxuICAgIHRpdGxlUHJvcHMsXHJcbiAgICBzdWJ0aXRsZVByb3BzLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCAnY2FyZC1qb2ItbWluaW1hbCcpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5jYXJkSm9iTWluaW1hbEJvZHksICdjYXJkLWpvYi1taW5pbWFsX19ib2R5Jyl9XHJcbiAgICAgICAgc3R5bGU9eyFzaG93QXJyb3cgPyB7IG1hcmdpblJpZ2h0OiAwIH0gOiB7fX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1qb2ItbWluaW1hbF9fdGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMudGl0bGUsICdjYXJkLWpvYi1taW5pbWFsX190aXRsZScpfVxyXG4gICAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1qb2ItbWluaW1hbF9fbG9jYXRpb24tY29uYXRpbmVyXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWpvYi1taW5pbWFsX19sb2NhdGlvblwiXHJcbiAgICAgICAgICAgIHsuLi5zdWJ0aXRsZVByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0Fycm93ID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1qb2ItbWluaW1hbF9fYXJyb3ctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICBmb250SWNvbkNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCJcclxuICAgICAgICAgICAgZm9udEljb25Db2xvcj17Y29sb3JzLmdyZXlbNzAwXX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1qb2ItbWluaW1hbF9fYXJyb3dcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZEpvYk1pbmltYWwuZGVmYXVsdFByb3BzID0ge1xyXG4gIHNob3dBcnJvdzogZmFsc2UsXHJcbiAgdGl0bGVQcm9wczoge30sXHJcbiAgc3VidGl0bGVQcm9wczoge30sXHJcbn07XHJcblxyXG5DYXJkSm9iTWluaW1hbC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBKb2IgdGl0bGUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiBzdWJ0aXRsZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU2hvdWxkIHNob3cgYXJyb3cgb3Igbm90XHJcbiAgICovXHJcbiAgc2hvd0Fycm93OiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHN1YnRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRKb2JNaW5pbWFsO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkSm9iTWluaW1hbCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgY29sb3JzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm9yZGVyUmlnaHQ6IGAke3RoZW1lLnNwYWNpbmcoMSl9cHggc29saWQgJHtjb2xvcnMucmVkWzUwMF19YCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBkb3RCaWc6IHtcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgZG90U21hbGw6IHtcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygxIC8gMiksXHJcbiAgfSxcclxuICBqb2JUaXRsZToge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gIH0sXHJcbiAgZG90TWFyZ2luOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgfSxcclxuICB0YWc6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxIC8gMiksXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICB9LFxyXG4gIHRleHRXaGl0ZToge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBqb2IgY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRKb2JUYWcgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgYmFkZ2VDb2xvcixcclxuICAgIGJhZGdlVGl0bGUsXHJcbiAgICBqb2JUaXRsZSxcclxuICAgIGpvYkxvY2F0aW9uLFxyXG4gICAgam9iVHlwZSxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZSBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSBhbGlnbj1cImxlZnRcIiB7Li4ucmVzdH0+XHJcbiAgICAgIDw+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgeHM9ezEyfT5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWd9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmFkZ2VDb2xvcixcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYmFkZ2VDb2xvcixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0V2hpdGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YmFkZ2VUaXRsZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMuam9iVGl0bGV9PlxyXG4gICAgICAgICAgICB7am9iVGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgeHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2pvYkxvY2F0aW9ufVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZG90LCBjbGFzc2VzLmRvdFNtYWxsLCBjbGFzc2VzLmRvdE1hcmdpbil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7am9iVHlwZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPC8+XHJcbiAgICA8L0NhcmRCYXNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkSm9iVGFnLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEJhZGdlIGNvbG9yIG9mIHRoZSBqb2IgY2FyZFxyXG4gICAqL1xyXG4gIGJhZGdlQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBCYWRnZSB0aXRsZSBvZiB0aGUgam9iIGNhcmRcclxuICAgKi9cclxuICBiYWRnZVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIHRpdGxlIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgbG9jYXRpb24gb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JMb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiB0eXBlIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iVHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEpvYlRhZztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZEpvYlRhZyc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgTGlzdEl0ZW0sIERpdmlkZXIsIExpc3QsIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGZlYXR1cmVDaGVjazoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBqb2IgY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRQcmljaW5nU3RhbmRhcmQgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdGl0bGUsXHJcbiAgICBzdWJ0aXRsZSxcclxuICAgIHByaWNlQ29tcG9uZW50LFxyXG4gICAgZmVhdHVyZUNoZWNrQ29tcG9uZW50LFxyXG4gICAgZmVhdHVyZXMsXHJcbiAgICBjdGEsXHJcbiAgICBkaXNjbGFpbWVyLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdGl0bGVQcm9wcyxcclxuICAgIHN1YnRpdGxlUHJvcHMsXHJcbiAgICBkaXNjbGFpbWVyUHJvcHMsXHJcbiAgICBmZWF0dXJlVGl0bGVQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2NhcmQtcHJpY2luZy1zdGFuZGFyZCcsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgYWxpZ249XCJsZWZ0XCJcclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX3dyYXBwZXJcIj5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19oZWFkbGluZVwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcclxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fdGl0bGVcIlxyXG4gICAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAge3N1YnRpdGxlICYmIChcclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fc3VidGl0bGVcIlxyXG4gICAgICAgICAgICAgIHsuLi5zdWJ0aXRsZVByb3BzfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19kaXZpZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19kaXZpZGVyXCIgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fY29udGVudFwiPlxyXG4gICAgICAgICAge3ByaWNlQ29tcG9uZW50fVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICB7ZmVhdHVyZXMgJiYgKFxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fZmVhdHVyZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxMaXN0IGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fZmVhdHVyZS1saXN0XCI+XHJcbiAgICAgICAgICAgICAge2ZlYXR1cmVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlR3V0dGVyc1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2ZlYXR1cmUtbGlzdC1pdGVtXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2ZlYXR1cmVDaGVja0NvbXBvbmVudCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnY2FyZC1wcmljaW5nLXN0YW5kYXJkX19mZWF0dXJlLWNoZWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5mZWF0dXJlQ2hlY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlQ2hlY2tDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2ZlYXR1cmUtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5mZWF0dXJlVGl0bGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19jdGEtd3JhcHBlclwiPlxyXG4gICAgICAgICAge2N0YX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAge2Rpc2NsYWltZXIgJiYgKFxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fZGlzY2xhaW1lci13cmFwcGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fZGlzY2xhaW1lci10aXRsZVwiXHJcbiAgICAgICAgICAgICAgey4uLmRpc2NsYWltZXJQcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkaXNjbGFpbWVyfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZFByaWNpbmdTdGFuZGFyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGl0bGVQcm9wczoge30sXHJcbiAgc3VidGl0bGVQcm9wczoge30sXHJcbiAgZGlzY2xhaW1lclByb3BzOiB7fSxcclxuICBmZWF0dXJlVGl0bGVQcm9wczoge30sXHJcbn07XHJcblxyXG5DYXJkUHJpY2luZ1N0YW5kYXJkLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiAgRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaXRsZSBvZiB0aGUgcHJpY2luZyBjYXJkXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiAgU3VidGl0bGUgb2YgdGhlIHByaWNpbmcgY2FyZFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBwcmljaW5nIGNvbXBvbmVudCBvZiB0aGUgcHJpY2luZyBjYXJkXHJcbiAgICovXHJcbiAgcHJpY2VDb21wb25lbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGZlYXR1cmVzIGNoZWNrIGNvbXBvbmVudCBvZiB0aGUgcHJpY2luZyBjYXJkXHJcbiAgICovXHJcbiAgZmVhdHVyZUNoZWNrQ29tcG9uZW50OiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBGZWF0dXJlcyBhcnJheSBvZiB0aGUgcHJpY2luZyBjYXJkXHJcbiAgICovXHJcbiAgZmVhdHVyZXM6IFByb3BUeXBlcy5hcnJheSxcclxuICAvKipcclxuICAgKiAgQ1RBIGJ1dHRvbiBvZiB0aGUgcHJpY2luZyBjYXJkXHJcbiAgICovXHJcbiAgY3RhOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIERpY2xhaW1lciBvZiB0aGUgcHJpY2luZyBjYXJkXHJcbiAgICovXHJcbiAgZGlzY2xhaW1lcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHN1YnRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIGRpc2NsYWltZXIgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBkaXNjbGFpbWVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBmZWF0dXJlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgZmVhdHVyZVRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUHJpY2luZ1N0YW5kYXJkO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkUHJpY2luZ1N0YW5kYXJkJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZE1lZGlhIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIHdpdGhTaGFkb3c6IHtcclxuICAgIGJveFNoYWRvdzogYDAgMnB4IDEwcHggMCAke3RoZW1lLnBhbGV0dGUuY2FyZFNoYWRvd31gLFxyXG4gIH0sXHJcbiAgbm9TaGFkb3c6IHtcclxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gIH0sXHJcbiAgbm9Cb3JkZXI6IHtcclxuICAgIGJvcmRlcjogMCxcclxuICB9LFxyXG4gIG5vQmc6IHtcclxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgfSxcclxuICBsaWZ0VXA6IHtcclxuICAgIHRyYW5zaXRpb246XHJcbiAgICAgICdib3gtc2hhZG93IC4yNXMgZWFzZSx0cmFuc2Zvcm0gLjI1cyBlYXNlLC13ZWJraXQtdHJhbnNmb3JtIC4yNXMgZWFzZScsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgICcwIDEuNXJlbSAyLjVyZW0gcmdiYSgyMiwyOCw0NSwuMSksMCAuM3JlbSAwLjVyZW0gLS41MHJlbSByZ2JhKDIyLDI4LDQ1LC4wNSkgIWltcG9ydGFudCcsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsLTVweCwwKScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWVkaWE6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgaGVpZ2h0OiAzMDAsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDQsIDIpLFxyXG4gICAgJyY6bGFzdC1jaGlsZCc6IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg0LCAyKSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiwgMyksXHJcbiAgICAgICcmOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2LCAzKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsZWZ0OiB7XHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgfSxcclxuICByaWdodDoge1xyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcclxuICB9LFxyXG4gIGNlbnRlcjoge1xyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBwcm9kdWN0IGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkUHJvZHVjdCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBtZWRpYUNsYXNzTmFtZSxcclxuICAgIHdpdGhTaGFkb3csXHJcbiAgICBub1NoYWRvdyxcclxuICAgIG5vQm9yZGVyLFxyXG4gICAgbm9CZyxcclxuICAgIGxpZnRVcCxcclxuICAgIGNhcmRDb250ZW50LFxyXG4gICAgbWVkaWFDb250ZW50LFxyXG4gICAgYWxpZ24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZFxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgJ2NhcmQtcHJvZHVjdCcsXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIHdpdGhTaGFkb3cgPyBjbGFzc2VzLndpdGhTaGFkb3cgOiB7fSxcclxuICAgICAgICBub1NoYWRvdyA/IGNsYXNzZXMubm9TaGFkb3cgOiB7fSxcclxuICAgICAgICBub0JvcmRlciA/IGNsYXNzZXMubm9Cb3JkZXIgOiB7fSxcclxuICAgICAgICBub0JnID8gY2xhc3Nlcy5ub0JnIDoge30sXHJcbiAgICAgICAgbGlmdFVwID8gY2xhc3Nlcy5saWZ0VXAgOiB7fSxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjYXJkLXByb2R1Y3RfX21lZGlhJywgY2xhc3Nlcy5tZWRpYSwgbWVkaWFDbGFzc05hbWUpfVxyXG4gICAgICA+XHJcbiAgICAgICAge21lZGlhQ29udGVudH1cclxuICAgICAgPC9DYXJkTWVkaWE+XHJcbiAgICAgIDxDYXJkQ29udGVudFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICdjYXJkLXByb2R1Y3RfX2NvbnRlbnQnLFxyXG4gICAgICAgICAgY2xhc3Nlcy5jb250ZW50LFxyXG4gICAgICAgICAgY2xhc3Nlc1thbGlnbl0sXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjYXJkQ29udGVudH1cclxuICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZFByb2R1Y3QuZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsaWduOiAnbGVmdCcsXHJcbn07XHJcblxyXG5DYXJkUHJvZHVjdC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzIGZvciB0aGUgbWVkaWFcclxuICAgKi9cclxuICBtZWRpYUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHNob3cgY3VzdG9tIHNoYWRvd1xyXG4gICAqL1xyXG4gIHdpdGhTaGFkb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gcmVuZGVyIHRoZSBjYXJkIHdpdGhvdXQgc2hhZG93XHJcbiAgICovXHJcbiAgbm9TaGFkb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gaGlkZSB0aGUgY2FyZCBib3JkZXJzXHJcbiAgICovXHJcbiAgbm9Cb3JkZXI6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gc2hvdyB0cmFuc3BhcmVudCBiYWNrZ3JvdW5kXHJcbiAgICovXHJcbiAgbm9CZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBsaWZ0IHVwIG9uIGhvdmVyXHJcbiAgICovXHJcbiAgbGlmdFVwOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBUaGUgQ2FyZCBjb250ZW50XHJcbiAgICovXHJcbiAgY2FyZENvbnRlbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgQ2FyZCBNZWRpYSBjb250ZW50XHJcbiAgICovXHJcbiAgbWVkaWFDb250ZW50OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRlbnQgYWxpZ25tZW50XHJcbiAgICovXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJ10pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFByb2R1Y3Q7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRQcm9kdWN0JztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCBjb2xvcnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IEljb25BbHRlcm5hdGUgfSBmcm9tICdjb21wb25lbnRzL21vbGVjdWxlcyc7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGZvbnRXZWlnaHQ3MDA6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICB9LFxyXG4gIHRleHRCbHVlOiB7XHJcbiAgICBjb2xvcjogXCIjNTEyMEZGXCIsXHJcbiAgfSxcclxuICBpbWdGbHVpZDpcclxuICB7XHJcbiAgICB3aWR0aDpcIjUwcHhcIixcclxuICAgIGhlaWdodDpcIjUwcHhcIlxyXG4gIH0sXHJcbiAgcGJfMDoge1xyXG4gICAgcGFkZGluZ0JvdHRvbTogXCIwICFpbXBvcnRhbnRcIixcclxuICB9LFxyXG4gIHBiX3B0XzA6IHtcclxuICAgIHBhZGRpbmdUb3A6IFwiMCAhaW1wb3J0YW50XCIsXHJcbiAgICBwYWRkaW5nQm90dG9tOiBcIjAgIWltcG9ydGFudFwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgcHJvbW8gY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRQcm9tbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlQ29sb3IsXHJcbiAgICBmb250SWNvbkNsYXNzLFxyXG4gICAgY29sb3IsXHJcbiAgICB0aXRsZSxcclxuICAgIHN1YnRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBhbGlnbixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHNyYyxcclxuICAgIGljb25BbHRlcm5hdGVQcm9wcyxcclxuICAgIHRpdGxlUHJvcHMsXHJcbiAgICBzdWJ0aXRsZVByb3BzLFxyXG4gICAgZGVzY3JpcHRpb25Qcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgbGV0IGp1c3RpZnlHcmlkID0gXCJmbGV4LXN0YXJ0XCI7XHJcbiAgaWYgKGFsaWduID09PSBcImNlbnRlclwiKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9IFwiY2VudGVyXCI7XHJcbiAgfSBlbHNlIGlmIChhbGlnbiA9PT0gXCJyaWdodFwiKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9IFwiZmxleC1lbmRcIjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXCJjYXJkX19wcm9tb1wiLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gY2xhc3NOYW1lPSdjYXJkLXByb21vX193cmFwcGVyJz5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17anVzdGlmeUdyaWR9XHJcbiAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9J2NhcmQtcHJvbW9fX2ljb24td3JhcHBlcidcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz17c3JjfSBhbHQ9e3NyY30gY2xhc3NOYW1lPXtjbGFzc2VzLmltZ0ZsdWlkfS8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXCJjYXJkLXByb21vX190aXRsZS13cmFwcGVyXCIsIGNsYXNzZXMucGJfMCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD0naDQnXHJcbiAgICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgIFwiY2FyZC1wcm9tb19fdGl0bGVcIixcclxuICAgICAgICAgICAgICBjbGFzc2VzLmZvbnRXZWlnaHQ3MDAsXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcy50ZXh0Qmx1ZVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICB7c3VidGl0bGUgJiYgKFxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcImNhcmQtcHJvbW9fX3N1YnRpdGxlLXdyYXBwZXJcIiwgY2xhc3Nlcy5wYl9wdF8wKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICB2YXJpYW50PSdoNidcclxuICAgICAgICAgICAgICBjb2xvcj0ndGV4dFByaW1hcnknXHJcbiAgICAgICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcImNhcmQtcHJvbW9fX3N1YnRpdGxlXCIsIGNsYXNzZXMuZm9udFdlaWdodDcwMCl9XHJcbiAgICAgICAgICAgICAgey4uLnN1YnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFwiY2FyZC1wcm9tb19fZGVzY3JpcHRpb24td3JhcHBlclwiLCBjbGFzc2VzLnBiX3B0XzApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2JvZHkxJ1xyXG4gICAgICAgICAgICAgIGNvbG9yPSd0ZXh0UHJpbWFyeSdcclxuICAgICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXJkLXByb21vX19kZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICB7Li4uZGVzY3JpcHRpb25Qcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ2FyZEJhc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRQcm9tby5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdsZWZ0JyxcclxuICBpY29uQWx0ZXJuYXRlUHJvcHM6IHt9LFxyXG4gIHRpdGxlUHJvcHM6IHt9LFxyXG4gIHN1YnRpdGxlUHJvcHM6IHt9LFxyXG4gIGRlc2NyaXB0aW9uUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQ2FyZFByb21vLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIHRpdGxlIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBQcm9tbyBzdWJ0aXRsZSB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIGRlc2NyaXB0aW9uIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gZm9udCBpY29uIGNsYXNzIG5hbWUgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBmb250SWNvbkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIGljb24gY29sb3IgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgIGNvbG9ycy5yZWQsXHJcbiAgICBjb2xvcnMucGluayxcclxuICAgIGNvbG9ycy5wdXJwbGUsXHJcbiAgICBjb2xvcnMuZGVlcFB1cnBsZSxcclxuICAgIGNvbG9ycy5pbmRpZ28sXHJcbiAgICBjb2xvcnMuYmx1ZSxcclxuICAgIGNvbG9ycy5saWdodEJsdWUsXHJcbiAgICBjb2xvcnMuY3lhbixcclxuICAgIGNvbG9ycy50ZWFsLFxyXG4gICAgY29sb3JzLmdyZWVuLFxyXG4gICAgY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICBjb2xvcnMubGltZSxcclxuICAgIGNvbG9ycy55ZWxsb3csXHJcbiAgICBjb2xvcnMuYW1iZXIsXHJcbiAgICBjb2xvcnMub3JhbmdlLFxyXG4gICAgY29sb3JzLmRlZXBPcmFuZ2UsXHJcbiAgICBjb2xvcnMuYnJvd24sXHJcbiAgICBjb2xvcnMuZ3JleSxcclxuICAgIGNvbG9ycy5ibHVlR3JleSxcclxuICBdKS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250ZW50IGFsaWdubWVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxuICAvKipcclxuICAgKiBUaXRsZSBjb2xvclxyXG4gICAqL1xyXG4gIHRpdGxlQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBJY29uQWx0ZXJuYXRlIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGljb25BbHRlcm5hdGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHN1YnRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIGRlc2NpcHRpb24gVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBkZXNjcmlwdGlvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFByb21vO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkUHJvbW8nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcbiAgR3JpZCxcclxuICBBdmF0YXIsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtQXZhdGFyLFxyXG4gIExpc3RJdGVtVGV4dCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHJldmlldyBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZFJldmlldyA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpY29uLFxyXG4gICAgdGV4dCxcclxuICAgIGF1dGhvclBob3RvLFxyXG4gICAgYXV0aG9yTmFtZSxcclxuICAgIGF1dGhvclRpdGxlLFxyXG4gICAgYWxpZ24sXHJcbiAgICB0ZXh0VmFyaWFudCxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHRleHRQcm9wcyxcclxuICAgIGxpc3RJdGVtUHJpbWFyeVR5cG9ncmFwaHlQcm9wcyxcclxuICAgIGxpc3RJdGVtU2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBsZXQganVzdGlmeUdyaWQgPSAnY2VudGVyJztcclxuICBpZiAoYWxpZ24gPT09ICdsZWZ0Jykge1xyXG4gICAganVzdGlmeUdyaWQgPSAnZmxleC1zdGFydCc7XHJcbiAgfSBlbHNlIGlmIChhbGlnbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAganVzdGlmeUdyaWQgPSAnZmxleC1lbmQnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2NhcmQtcmV2aWV3JywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X193cmFwcGVyXCI+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9e2p1c3RpZnlHcmlkfVxyXG4gICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2ljb24td3JhcHBlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2ljb259XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fdGV4dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PXt0ZXh0VmFyaWFudH1cclxuICAgICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgey4uLnRleHRQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RleHR9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fbGl0cy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17anVzdGlmeUdyaWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X19saXN0LXdyYXBwZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGlzdCBkaXNhYmxlUGFkZGluZyBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXIgY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2xpc3QtaXRlbS1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5hdXRob3JQaG90b31cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2F1dGhvck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2F2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fbGlzdC1pdGVtLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PXthdXRob3JOYW1lfVxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e2F1dGhvclRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5VHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ubGlzdEl0ZW1QcmltYXJ5VHlwb2dyYXBoeVByb3BzLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAuLi5saXN0SXRlbVNlY29uZGFyeVR5cG9ncmFwaHlQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZFJldmlldy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdjZW50ZXInLFxyXG4gIHRleHRWYXJpYW50OiAnaDYnLFxyXG4gIHRleHRQcm9wczoge30sXHJcbiAgbGlzdEl0ZW1QcmltYXJ5VHlwb2dyYXBoeVByb3BzOiB7fSxcclxuICBsaXN0SXRlbVNlY29uZGFyeVR5cG9ncmFwaHlQcm9wczoge30sXHJcbn07XHJcblxyXG5DYXJkUmV2aWV3LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEljb24gdG8gc2hvdyBpbnNpZGUgdGhlIHJldmlldyBjYXJkXHJcbiAgICovXHJcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBSZXZpZXcgdGV4dCB0byBzaG93IGluc2lkZSB0aGUgcmV2aWV3IGNhcmRcclxuICAgKi9cclxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUmV2aWV3ZXIgcGhvdG8gdG8gc2hvdyBpbnNpZGUgdGhlIHJldmlldyBjYXJkLlNob3VsZCBiZSBhbiBvYmplY3Qgd2l0aCBzcmMgYW5kIHNyY1NldCBwcm9wZXJ0aWVzXHJcbiAgICovXHJcbiAgYXV0aG9yUGhvdG86IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBSZXZpZXdlciBuYW1lIHRvIHNob3cgaW5zaWRlIHRoZSByZXZpZXcgY2FyZFxyXG4gICAqL1xyXG4gIGF1dGhvck5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBSZXZpZXdlciB0aXRsZSB0byBzaG93IGluc2lkZSB0aGUgcmV2aWV3IGNhcmRcclxuICAgKi9cclxuICBhdXRob3JUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBBbGlnbm1lbnQgb2YgdGhlIGNvbnRlbnRcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbiAgLyoqXHJcbiAgICogUmV2aWV3IHRleHQgdmFyaWFudFxyXG4gICAqL1xyXG4gIHRleHRWYXJpYW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgdGV4dCBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRleHRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIGxpc3QgaXRlbSBwcmltYXJ5IHRleHQgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBsaXN0SXRlbVByaW1hcnlUeXBvZ3JhcGh5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBsaXN0IGl0ZW0gc2Vjb25kYXJ5IHRleHQgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBsaXN0SXRlbVNlY29uZGFyeVR5cG9ncmFwaHlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRSZXZpZXc7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRSZXZpZXcnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgR3JpZCwgQnV0dG9uLCBUZXh0RmllbGQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICd2YWxpZGF0ZS5qcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBzY2hlbWEgPSB7XHJcbiAgZnVsbG5hbWU6IHtcclxuICAgIHByZXNlbmNlOiB7IGFsbG93RW1wdHk6IGZhbHNlLCBtZXNzYWdlOiAnaXMgcmVxdWlyZWQnIH0sXHJcbiAgICBsZW5ndGg6IHtcclxuICAgICAgbWF4aW11bTogMTI4LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICBwcmVzZW5jZTogeyBhbGxvd0VtcHR5OiBmYWxzZSwgbWVzc2FnZTogJ2lzIHJlcXVpcmVkJyB9LFxyXG4gICAgZW1haWw6IHRydWUsXHJcbiAgICBsZW5ndGg6IHtcclxuICAgICAgbWF4aW11bTogMzAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1lc3NhZ2U6IHtcclxuICAgIHByZXNlbmNlOiB7IGFsbG93RW1wdHk6IGZhbHNlLCBtZXNzYWdlOiAnaXMgcmVxdWlyZWQnIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgdmFsdWVzOiB7fSxcclxuICAgIHRvdWNoZWQ6IHt9LFxyXG4gICAgZXJyb3JzOiB7fSxcclxuICB9KTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVycm9ycyA9IHZhbGlkYXRlKGZvcm1TdGF0ZS52YWx1ZXMsIHNjaGVtYSk7XHJcblxyXG4gICAgc2V0Rm9ybVN0YXRlKGZvcm1TdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5mb3JtU3RhdGUsXHJcbiAgICAgIGlzVmFsaWQ6IGVycm9ycyA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgZXJyb3JzOiBlcnJvcnMgfHwge30sXHJcbiAgICB9KSk7XHJcbiAgfSwgW2Zvcm1TdGF0ZS52YWx1ZXNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgZXZlbnQucGVyc2lzdCgpO1xyXG5cclxuICAgIHNldEZvcm1TdGF0ZShmb3JtU3RhdGUgPT4gKHtcclxuICAgICAgLi4uZm9ybVN0YXRlLFxyXG4gICAgICB2YWx1ZXM6IHtcclxuICAgICAgICAuLi5mb3JtU3RhdGUudmFsdWVzLFxyXG4gICAgICAgIFtldmVudC50YXJnZXQubmFtZV06XHJcbiAgICAgICAgICBldmVudC50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94J1xyXG4gICAgICAgICAgICA/IGV2ZW50LnRhcmdldC5jaGVja2VkXHJcbiAgICAgICAgICAgIDogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgICB0b3VjaGVkOiB7XHJcbiAgICAgICAgLi4uZm9ybVN0YXRlLnRvdWNoZWQsXHJcbiAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYXNFcnJvciA9IGZpZWxkID0+XHJcbiAgICBmb3JtU3RhdGUudG91Y2hlZFtmaWVsZF0gJiYgZm9ybVN0YXRlLmVycm9yc1tmaWVsZF0gPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBuYW1lPVwiY29udGFjdC1mb3JtXCJcclxuICAgICAgICBtZXRob2Q9XCJwb3N0XCJcclxuICAgICAgICBhY3Rpb249XCIvc3VibWl0aW9uLmh0bWw/Y29udGFjdC1mb3JtLXN1Ym1pdC1zdWNjZXNzPXRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybS1uYW1lXCIgdmFsdWU9XCJjb250YWN0LWZvcm1cIiAvPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPkNvbnRhY3QgVXM8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIFdlIGNhcmVmdWxseSByZWFkIGFuZCBhbnN3ZXIgdG8gYWxsIG91ciBlbWFpbHMuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJGdWxsIE5hbWUgKlwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZnVsbG5hbWVcIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIGhlbHBlcnRleHQ9e1xyXG4gICAgICAgICAgICAgICAgaGFzRXJyb3IoJ2Z1bGxuYW1lJykgPyBmb3JtU3RhdGUuZXJyb3JzLmZ1bGxuYW1lWzBdIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlcnJvcj17aGFzRXJyb3IoJ2Z1bGxuYW1lJyl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS52YWx1ZXMuZnVsbG5hbWUgfHwgJyd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLW1haWxcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRS1tYWlsICpcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBoZWxwZXJ0ZXh0PXtoYXNFcnJvcignZW1haWwnKSA/IGZvcm1TdGF0ZS5lcnJvcnMuZW1haWxbMF0gOiBudWxsfVxyXG4gICAgICAgICAgICAgIGVycm9yPXtoYXNFcnJvcignZW1haWwnKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS52YWx1ZXMuZW1haWwgfHwgJyd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTWVzc2FnZSAqXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBoZWxwZXJ0ZXh0PXtcclxuICAgICAgICAgICAgICAgIGhhc0Vycm9yKCdtZXNzYWdlJykgPyBmb3JtU3RhdGUuZXJyb3JzLm1lc3NhZ2VbMF0gOiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVycm9yPXtoYXNFcnJvcignbWVzc2FnZScpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVN0YXRlLnZhbHVlcy5tZXNzYWdlIHx8ICcnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgIEZpZWxkcyB0aGF0IGFyZSBtYXJrZWQgd2l0aCBhbiBhc3RlcmlzayAoKikgc2lnbiBhcmUgcmVxdWlyZWQuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWZvcm1TdGF0ZS5pc1ZhbGlkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ29udGFjdEZvcm0nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGRlc2NyaXB0aW9uIGxpc3Qgd2l0aCBpY29uXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgRGVzY3JpcHRpb25MaXN0SWNvbiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSxcclxuICAgIHN1YnRpdGxlLFxyXG4gICAgaWNvbixcclxuICAgIGFsaWduLFxyXG4gICAgdGl0bGVWYXJpYW50LFxyXG4gICAgc3VidGl0bGVWYXJpYW50LFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdGl0bGVQcm9wcyxcclxuICAgIHN1YnRpdGxlUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGxldCBncmlkSnVzdGlmeSA9ICdjZW50ZXInO1xyXG5cclxuICBpZiAoYWxpZ24gPT09ICdsZWZ0Jykge1xyXG4gICAgZ3JpZEp1c3RpZnkgPSAnZmxleC1zdGFydCc7XHJcbiAgfSBlbHNlIGlmIChhbGlnbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgZ3JpZEp1c3RpZnkgPSAnZmxleC1lbmQnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIGNvbnRhaW5lclxyXG4gICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdkZXNjcmlwdGlvbi1saXN0LWljb24nLCBjbGFzc05hbWUpfVxyXG4gICAgPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGl0ZW1cclxuICAgICAgICBjb250YWluZXJcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD17Z3JpZEp1c3RpZnl9XHJcbiAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWxpc3QtaWNvbl9faWNvbi13cmFwcGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtpY29ufVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1saXN0LWljb25fX3RpdGxlLXdyYXBwZXJcIj5cclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgdmFyaWFudD17dGl0bGVWYXJpYW50fVxyXG4gICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXHJcbiAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50aXRsZSwgJ2Rlc2NyaXB0aW9uLWxpc3QtaWNvbl9fdGl0bGUnKX1cclxuICAgICAgICAgIHsuLi50aXRsZVByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAge3N1YnRpdGxlICYmIChcclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tbGlzdC1pY29uX19zdWJ0aXRsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PXtzdWJ0aXRsZVZhcmlhbnR9XHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tbGlzdC1pY29uX19zdWJ0aXRsZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzdWJ0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkRlc2NyaXB0aW9uTGlzdEljb24uZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsaWduOiAnY2VudGVyJyxcclxuICB0aXRsZVZhcmlhbnQ6ICdoNicsXHJcbiAgc3VidGl0bGVWYXJpYW50OiAnYm9keTEnLFxyXG4gIHRpdGxlUHJvcHM6IHt9LFxyXG4gIHN1YnRpdGxlUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuRGVzY3JpcHRpb25MaXN0SWNvbi5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgdGl0bGVcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIHRoZSBzdWJ0aXRsZVxyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgc2hvdWxkIHNob3cgdGhlIGFsdGVybmF0ZSBpY29uXHJcbiAgICovXHJcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgYWxpZ25tZW50IG9mIHRoZSBpdGVtc1xyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxuICAvKipcclxuICAgKiBUaXRsZSB2YXJpYW50XHJcbiAgICovXHJcbiAgdGl0bGVWYXJpYW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFN1YnRpdGxlIHZhcmlhbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVZhcmlhbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBzdWJ0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbkxpc3RJY29uO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9EZXNjcmlwdGlvbkxpc3RJY29uJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIG92ZXJmbG93OiAndmlzaWJsZScsXHJcbiAgfSxcclxuICBjb2xvckRlZmF1bHQ6IHtcclxuICAgIGJhY2tncm91bmQ6IGNvbG9ycy5pbmRpZ29bOTAwXSxcclxuICB9LFxyXG4gIGhlcm9XcmFwcGVyOiB7XHJcbiAgICB6SW5kZXg6IDIsXHJcbiAgfSxcclxuICBoZXJvQ292ZXI6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgb3BhY2l0eTogMC4yLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgekluZGV4OiAxLFxyXG4gIH0sXHJcbiAgaGVyb0JnOiB7XHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2F1dG8nLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgfSxcclxuICBub0NvdmVyT3BhY2l0eToge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGJhY2tncm91bmQgaGVyb1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEhlcm9CYWNrZ3JvdW5kID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgZGlzYmFsZUNvdmVyT3BhY2l0eSxcclxuICAgIGJhY2tncm91bmRJbWcsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb24sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICBjb250ZW50U2VjdGlvbkNsYXNzTmFtZSxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgdXNlQ3VzdG9tU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gICAgY292ZXJCZzoge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kSW1nfSlgLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRDb2xvcjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiB7XHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYmFja2dyb3VuZFBvc2l0aW9uLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIGNvbnN0IGN1c3RvbUNsYXNzZXMgPSB1c2VDdXN0b21TdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICdoZXJvLWJhY2tncm91bmQnLFxyXG4gICAgICAgIGNsYXNzZXMucm9vdCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPyBjdXN0b21DbGFzc2VzLmJhY2tncm91bmRDb2xvciA6IGNsYXNzZXMuY29sb3JEZWZhdWx0LFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLWJhY2tncm91bmRfX3dyYXBwZXInLCBjbGFzc2VzLmhlcm9XcmFwcGVyKX0+XHJcbiAgICAgICAgPFNlY3Rpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgY29udGVudFNlY3Rpb25DbGFzc05hbWUgPyBjb250ZW50U2VjdGlvbkNsYXNzTmFtZSA6ICcnLFxyXG4gICAgICAgICAgICAnaGVyby1iYWNrZ3JvdW5kX19zZWN0aW9uJyxcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAnaGVyby1iYWNrZ3JvdW5kX19jb3ZlcicsXHJcbiAgICAgICAgICBjbGFzc2VzLmhlcm9CZyxcclxuICAgICAgICAgIGNsYXNzZXMuaGVyb0NvdmVyLFxyXG4gICAgICAgICAgY3VzdG9tQ2xhc3Nlcy5jb3ZlckJnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uID8gY3VzdG9tQ2xhc3Nlcy5iYWNrZ3JvdW5kUG9zaXRpb24gOiB7fSxcclxuICAgICAgICAgIGRpc2JhbGVDb3Zlck9wYWNpdHkgPyBjbGFzc2VzLm5vQ292ZXJPcGFjaXR5IDoge30sXHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvQmFja2dyb3VuZC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDaGlsZHJlbiB0byBwbGFjZWQgaW5zaWRlIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIEJhY2tncm91bmQgaW1hZ2Ugb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBiYWNrZ3JvdW5kSW1nOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEJhY2tncm91bmQgY29sb3Igb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBiYWNrZ3JvdW5kQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQmFja2dyb3VuZCBwb3NpdGlvbiBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGJhY2tncm91bmRQb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDdXN0b20gY2xhc3NlcyBmb3IgdGhlIGNvbnRlbnQgc2VjdGlvblxyXG4gICAqL1xyXG4gIGNvbnRlbnRTZWN0aW9uQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCBkaXNhYmxlIGhlcmUgY292ZXIgb3BhY2l0eVxyXG4gICAqL1xyXG4gIGRpc2JhbGVDb3Zlck9wYWNpdHk6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0JhY2tncm91bmQ7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0hlcm9CYWNrZ3JvdW5kJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gIH0sXHJcbiAgaGVybzoge1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIG1heFdpZHRoOiB0aGVtZS5sYXlvdXQuY29udGVudFdpZHRoLFxyXG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW4tcmV2ZXJzZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlcm9MZWZ0U2lkZToge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCA4KSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlcm9SaWdodFNpZGU6IHtcclxuICAgIG1heFdpZHRoOiBcIjUwJVwiLFxyXG4gICAgZmxleDogXCIwIDAgNTAlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBmbGV4OiBcIjAgMCAxMDAlXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaGVyb0NvdmVyOiB7XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgd2lkdGg6IFwiNTB2d1wiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZXJvSW1hZ2VDb250YWluZXI6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICB9LFxyXG4gIGhlcm9JbWFnZToge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIGxlZnQ6IFwiMCVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgc2hhcGVPdXRzaWRlOiBcInBvbHlnb24oMTAlIDAlLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCUgMTAwJSlcIixcclxuICAgICAgY2xpcFBhdGg6IFwicG9seWdvbigxMCUgMCUsIDEwMCUgMCwgMTAwJSAxMDAlLCAwJSAxMDAlKVwiLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxyXG4gICAgfSxcclxuICAgIFwiJiBpbWdcIjoge1xyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICAgIGhlaWdodDogNDUwLFxyXG4gICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHNoYXBlZCBoZXJvXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgSGVyb1NoYXBlZCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGxlZnRTaWRlLCByaWdodFNpZGUsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgJ2hlcm8tc2hhcGVkJywgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaGFwZWRfX3dyYXBwZXInLCBjbGFzc2VzLmhlcm8pfT5cclxuICAgICAgICA8U2VjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNoYXBlZF9fbGVmdC1zaWRlJywgY2xhc3Nlcy5oZXJvTGVmdFNpZGUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsZWZ0U2lkZX1cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2hhcGVkX19yaWdodC1zaWRlJywgY2xhc3Nlcy5oZXJvUmlnaHRTaWRlKX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaGFwZWRfX2NvdmVyJywgY2xhc3Nlcy5oZXJvQ292ZXIpfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAgICdoZXJvLXNoYXBlZF9faW1hZ2UtY29udGFpbmVyJyxcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMuaGVyb0ltYWdlQ29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaGFwZWRfX2ltYWdlJywgY2xhc3Nlcy5oZXJvSW1hZ2UpfT5cclxuICAgICAgICAgICAgICAgIHtyaWdodFNpZGV9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm9TaGFwZWQucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ2hpbGRyZW4gdG8gcGxhY2VkIGluc2lkZSB0aGUgc2VjdGlvbiByaWdodCBzaWRlXHJcbiAgICovXHJcbiAgcmlnaHRTaWRlOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIENoaWxkcmVuIHRvIHBsYWNlZCBpbnNpZGUgdGhlIHNlY3Rpb24gbGVmdCBzaWRlXHJcbiAgICovXHJcbiAgbGVmdFNpZGU6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvU2hhcGVkO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9IZXJvU2hhcGVkJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjb2xvcnMsIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBpbWFnZVdyYXBwZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgbWF4SGVpZ2h0OiA0MDAsXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gIH0sXHJcbiAgY292ZXI6IHtcclxuICAgIGJhY2tncm91bmQ6IGNvbG9ycy5pbmRpZ29bOTAwXSxcclxuICAgIG9wYWNpdHk6IDAuNixcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgdG9wOiAnNTAlJyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICdub25lJyxcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCA0KSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBzaWRlIGltYWdlIGhlcm9cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBIZXJvU2lkZUltYWdlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGltYWdlU3JjLFxyXG4gICAgaW1hZ2VTcmNTZXQsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIGJhY2tncm91bmRDb2xvcixcclxuICAgIHJldmVyc2UsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHVzZUN1c3RvbVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIGNvdmVyQmc6IHtcclxuICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZENvbG9yLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIGNvbnN0IGN1c3RvbUNsYXNzZXMgPSB1c2VDdXN0b21TdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIGNvbnRhaW5lclxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2lkZS1pbWFnZScsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgZGlyZWN0aW9uPXtyZXZlcnNlID8gJ3Jvdy1yZXZlcnNlJyA6ICdyb3cnfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWRcclxuICAgICAgICBpdGVtXHJcbiAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgIG1kPXs2fVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaWRlLWltYWdlX19pbWFnZS13cmFwcGVyJywgY2xhc3Nlcy5pbWFnZVdyYXBwZXIpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e2ltYWdlU3JjfVxyXG4gICAgICAgICAgc3JjU2V0PXtpbWFnZVNyY1NldCA/IGltYWdlU3JjU2V0IDogJyd9XHJcbiAgICAgICAgICBhbHQ9eycuLi4nfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNpZGUtaW1hZ2VfX2ltYWdlJywgY2xhc3Nlcy5pbWFnZSl9XHJcbiAgICAgICAgICBsYXp5PXtmYWxzZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgJ2hlcm8tc2lkZS1pbWFnZV9fY292ZXInLFxyXG4gICAgICAgICAgICBjbGFzc2VzLmNvdmVyLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPyBjdXN0b21DbGFzc2VzLmNvdmVyQmcgOiB7fSxcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGl0ZW1cclxuICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNpZGUtaW1hZ2VfX2NvbnRlbnQnLCBjbGFzc2VzLmNvbnRlbnQpfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm9TaWRlSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ2hpbGRyZW4gdG8gcGxhY2VkIGluc2lkZSB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgYmFja2dyb3VuZENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFNpZGUgaW1hZ2VcclxuICAgKi9cclxuICBpbWFnZVNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFNpZGUgaW1hZ2Ugc3Jjc2V0XHJcbiAgICovXHJcbiAgaW1hZ2VTcmNTZXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogU2hvdWxkIHNob3cgaW4gcmV2ZXJzZSBvcmRlclxyXG4gICAqL1xyXG4gIHJldmVyc2U6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb1NpZGVJbWFnZTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSGVyb1NpZGVJbWFnZSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEhlcm9TaW1wbGVCYWNrZ3JvdW5kID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgYmFja2dyb3VuZFNpemUsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgdXNlQmFja2dyb3VuZCA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIGJhY2tncm91bmRJbWFnZToge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWAsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZFNpemU6IHtcclxuICAgICAgYmFja2dyb3VuZFNpemU6IGJhY2tncm91bmRTaXplLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjoge1xyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGJhY2tncm91bmRQb3NpdGlvbixcclxuICAgIH0sXHJcbiAgfSkpO1xyXG4gIGNvbnN0IGJhY2tncm91bmRDbGFzc2VzID0gdXNlQmFja2dyb3VuZCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgJ2hlcm8tc2ltcGxlLWJhY2tncm91bmQnLFxyXG4gICAgICAgIGNsYXNzZXMucm9vdCxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgYmFja2dyb3VuZENsYXNzZXMuYmFja2dyb3VuZEltYWdlLFxyXG4gICAgICAgIGJhY2tncm91bmRDbGFzc2VzLmJhY2tncm91bmRTaXplLFxyXG4gICAgICAgIGJhY2tncm91bmRDbGFzc2VzLmJhY2tncm91bmRQb3NpdGlvbixcclxuICAgICAgKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT1cImhlcm8tc2ltcGxlLWJhY2tncm91bmRfX3NlY3Rpb25cIj57Y2hpbGRyZW59PC9TZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm9TaW1wbGVCYWNrZ3JvdW5kLmRlZmF1bHRQcm9wcyA9IHtcclxuICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG59O1xyXG5cclxuSGVyb1NpbXBsZUJhY2tncm91bmQucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIG1haW4gY29udGVudFxyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBiYWNrZ3JvdW5kIGltYWdlIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgYmFja2dyb3VuZEltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGJhY2tncm91bmQgc2l6ZSBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGJhY2tncm91bmRTaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBiYWNrZ3JvdW5kIHBvc2l0aW9uIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb1NpbXBsZUJhY2tncm91bmQ7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0hlcm9TaW1wbGVCYWNrZ3JvdW5kJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgbWFwXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgTWFwID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgem9vbSwgY2VudGVyLCBwaW5zLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBMID0gcmVxdWlyZSgnbGVhZmxldCcpO1xyXG4gICAgZGVsZXRlIEwuSWNvbi5EZWZhdWx0LnByb3RvdHlwZS5fZ2V0SWNvblVybDtcclxuXHJcbiAgICBjb25zdCBtYXJrZXJJY29uMnggPSByZXF1aXJlKCdhc3NldHMvaW1hZ2VzL2xlYWZsZXQtYXNzZXRzL21hcmtlci1pY29uLTJ4LnBuZycpO1xyXG4gICAgY29uc3QgbWFya2VySWNvbiA9IHJlcXVpcmUoJ2Fzc2V0cy9pbWFnZXMvbGVhZmxldC1hc3NldHMvbWFya2VyLWljb24ucG5nJyk7XHJcbiAgICBjb25zdCBtYXJrZXJTaGFkb3cgPSByZXF1aXJlKCdhc3NldHMvaW1hZ2VzL2xlYWZsZXQtYXNzZXRzL21hcmtlci1zaGFkb3cucG5nJyk7XHJcblxyXG4gICAgTC5JY29uLkRlZmF1bHQubWVyZ2VPcHRpb25zKHtcclxuICAgICAgaWNvblJldGluYVVybDogdHlwZW9mIG1hcmtlckljb24yeCA9PT0gJ29iamVjdCcgPyBtYXJrZXJJY29uMnguZGVmYXVsdCA6IG1hcmtlckljb24yeCxcclxuICAgICAgaWNvblVybDogdHlwZW9mIG1hcmtlckljb24gPT09ICdvYmplY3QnID8gbWFya2VySWNvbi5kZWZhdWx0IDogbWFya2VySWNvbixcclxuICAgICAgc2hhZG93VXJsOiB0eXBlb2YgbWFya2VyU2hhZG93ID09PSAnb2JqZWN0JyA/IG1hcmtlclNoYWRvdy5kZWZhdWx0IDogbWFya2VyU2hhZG93LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBSZWFjdE1hcCA9IHJlcXVpcmUoJ3JlYWN0LWxlYWZsZXQnKS5NYXA7XHJcbiAgY29uc3QgVGlsZUxheWVyID0gcmVxdWlyZSgncmVhY3QtbGVhZmxldCcpLlRpbGVMYXllcjtcclxuICBjb25zdCBNYXJrZXIgPSByZXF1aXJlKCdyZWFjdC1sZWFmbGV0JykuTWFya2VyO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0TWFwXHJcbiAgICAgIHpvb209e3pvb219XHJcbiAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ21hcCcsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxUaWxlTGF5ZXJcclxuICAgICAgICBjbGFzc05hbWU9XCJtYXBfX3RpbGUtbGF5ZXJcIlxyXG4gICAgICAgIGRldGVjdFJldGluYT17dHJ1ZX1cclxuICAgICAgICBhdHRyaWJ1dGlvbj0nJmFtcDtjb3B5IDxhIGhyZWY9XCJodHRwOi8vb3NtLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXHJcbiAgICAgICAgdXJsPVwiaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIlxyXG4gICAgICAvPlxyXG4gICAgICB7cGlucyAmJlxyXG4gICAgICAgIHBpbnMubGVuZ3RoICYmXHJcbiAgICAgICAgcGlucy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgIDxNYXJrZXJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFwX19tYXJrZXJcIlxyXG4gICAgICAgICAgICBwb3NpdGlvbj17W2l0ZW0ubG9jYXRpb24ueSwgaXRlbS5sb2NhdGlvbi54XX1cclxuICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgIDwvUmVhY3RNYXA+XHJcbiAgKTtcclxufTtcclxuXHJcbk1hcC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgem9vbTogMTAsXHJcbiAgY2VudGVyOiBbMCwgMF0sXHJcbn07XHJcblxyXG5NYXAucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogTWFwIHpvb21cclxuICAgKi9cclxuICB6b29tOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBNYXAgY2VudGVyXHJcbiAgICovXHJcbiAgY2VudGVyOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBkYXRhIG9mIHRoZSBsb2NhdGlvbnMuIEV4YW1wbGU6IFt7IGxvY2F0aW9uOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0gfV1cclxuICAgKi9cclxuICBwaW5zOiBQcm9wVHlwZXMuYXJyYXksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXA7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL01hcCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgIC8qIHN1cHBvcnQgZm9yIHBsdWdpbiBodHRwczovL2dpdGh1Yi5jb20vYmZyZWQtaXQvb2JqZWN0LWZpdC1pbWFnZXMgKi9cclxuICAgIGZvbnRGYW1pbHk6ICdvYmplY3QtZml0OiBjb3ZlcjsnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHpJbmRleDogLTEsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBQYXJhbGxheCBiYWNrZ3JvdW5kc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFBhcmFsbGF4ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgYmFja2dyb3VuZEltYWdlLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgamFyYWxsYXhFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qYXJhbGxheCcpO1xyXG4gICAgaWYgKCFqYXJhbGxheEVsZW1zIHx8IChqYXJhbGxheEVsZW1zICYmIGphcmFsbGF4RWxlbXMubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgamFyYWxsYXggPSByZXF1aXJlKCdqYXJhbGxheCcpLmphcmFsbGF4O1xyXG4gICAgamFyYWxsYXgoamFyYWxsYXhFbGVtcywgeyBzcGVlZDogMC4yIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2phcmFsbGF4JywgJ3BhcmFsbGF4JywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICBkYXRhLWphcmFsbGF4XHJcbiAgICAgIGRhdGEtc3BlZWQ9XCIwLjJcIlxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnamFyYWxsYXgtaW1nJywgJ3BhcmFsbGF4X19pbWFnZScsIGNsYXNzZXMuaW1hZ2UpfVxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRJbWFnZX0pYCB9fVxyXG4gICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5QYXJhbGxheC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudFxyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBUaGUgcGFyYWxsYXggYmFja2dyb3VuZCBpbWFnZVxyXG4gICAqL1xyXG4gIGJhY2tncm91bmRJbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFyYWxsYXg7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1BhcmFsbGF4JztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWF4V2lkdGg6IHRoZW1lLmxheW91dC5jb250ZW50V2lkdGgsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYsIDIpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgOCwgNCksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOCwgNiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZnVsbFdpZHRoOiB7XHJcbiAgICBtYXhXaWR0aDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBkaXNhYmxlUGFkZGluZzoge1xyXG4gICAgcGFkZGluZzogMCxcclxuICB9LFxyXG4gIG5hcnJvdzoge1xyXG4gICAgbWF4V2lkdGg6IDgwMCxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHNlY3Rpb25zXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgU2VjdGlvbiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBjaGlsZHJlbixcclxuICAgIGZ1bGxXaWR0aCxcclxuICAgIG5hcnJvdyxcclxuICAgIGRpc2FibGVQYWRkaW5nLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICdzZWN0aW9uJyxcclxuICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbiAgICAgICAgZnVsbFdpZHRoID8gY2xhc3Nlcy5mdWxsV2lkdGggOiB7fSxcclxuICAgICAgICBuYXJyb3cgPyBjbGFzc2VzLm5hcnJvdyA6IHt9LFxyXG4gICAgICAgIGRpc2FibGVQYWRkaW5nID8gY2xhc3Nlcy5kaXNhYmxlUGFkZGluZyA6IHt9LFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuU2VjdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDaGlsZHJlbiB0byBwbGFjZWQgaW5zaWRlIHRoZSBzZWN0aW9uXHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCBzaG93IG5hcnJvdyBzZWN0aW9uc1xyXG4gICAqL1xyXG4gIG5hcnJvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogU2hvdWxkIHRoZSBzZWN0aW9uIGJlIGZ1bGwgd2lkdGhcclxuICAgKi9cclxuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCB0aGUgc2VjdGlvbiByZW5kZXIgd2l0aCBubyBwYWRkaW5nXHJcbiAgICovXHJcbiAgZGlzYWJsZVBhZGRpbmc6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU2VjdGlvbic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmFsdGVybmF0ZS5tYWluLFxyXG4gIH0sXHJcbiAgaW5uZXI6IHtcclxuICAgIG1heFdpZHRoOiB0aGVtZS5sYXlvdXQuY29udGVudFdpZHRoLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYsIDIpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgsIDgpLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxMiwgOCksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5uZXJOYXJyb3dlZDoge1xyXG4gICAgbWF4V2lkdGg6IDgwMCxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGFsdGVybmF0aXZlIHNlY3Rpb25zXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgU2VjdGlvbkFsdGVybmF0ZSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lcm5hcnJvd2VkLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ3NlY3Rpb24tYWx0ZXJuYXRlJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICdzZWN0aW9uLWFsdGVybmF0ZV9fY29udGVudCcsXHJcbiAgICAgICAgICBjbGFzc2VzLmlubmVyLFxyXG4gICAgICAgICAgaW5uZXJuYXJyb3dlZCA/IGNsYXNzZXMuaW5uZXJOYXJyb3dlZCA6IHt9LFxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5TZWN0aW9uQWx0ZXJuYXRlLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIENoaWxkcmVuIHRvIHBsYWNlZCBpbnNpZGUgdGhlIHNlY3Rpb25cclxuICAgKi9cclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgLyoqXHJcbiAgICogU2hvdWxkIHNob3cgbmFycm93IHNlY3Rpb25zXHJcbiAgICovXHJcbiAgaW5uZXJuYXJyb3dlZDogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uQWx0ZXJuYXRlO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TZWN0aW9uQWx0ZXJuYXRlJztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWN0aW9uIH0gZnJvbSAnLi9TZWN0aW9uJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWN0aW9uQWx0ZXJuYXRlIH0gZnJvbSAnLi9TZWN0aW9uQWx0ZXJuYXRlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZXNjcmlwdGlvbkxpc3RJY29uIH0gZnJvbSAnLi9EZXNjcmlwdGlvbkxpc3RJY29uJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkQmFzZSB9IGZyb20gJy4vQ2FyZEJhc2UnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRSZXZpZXcgfSBmcm9tICcuL0NhcmRSZXZpZXcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRDYXRlZ29yeSB9IGZyb20gJy4vQ2FyZENhdGVnb3J5JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkSm9iIH0gZnJvbSAnLi9DYXJkSm9iJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkSm9iTWluaW1hbCB9IGZyb20gJy4vQ2FyZEpvYk1pbmltYWwnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRKb2JUYWcgfSBmcm9tICcuL0NhcmRKb2JUYWcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRKb2JDb21wYW55IH0gZnJvbSAnLi9DYXJkSm9iQ29tcGFueSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWNjb3JkaW9uIH0gZnJvbSAnLi9BY2NvcmRpb24nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlcm9TaGFwZWQgfSBmcm9tICcuL0hlcm9TaGFwZWQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRQcm9kdWN0IH0gZnJvbSAnLi9DYXJkUHJvZHVjdCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFwIH0gZnJvbSAnLi9NYXAnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlcm9CYWNrZ3JvdW5kIH0gZnJvbSAnLi9IZXJvQmFja2dyb3VuZCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVyb1NpZGVJbWFnZSB9IGZyb20gJy4vSGVyb1NpZGVJbWFnZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZFByb21vIH0gZnJvbSAnLi9DYXJkUHJvbW8nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRDYXRlZ29yeUxpbmsgfSBmcm9tICcuL0NhcmRDYXRlZ29yeUxpbmsnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlcm9TaW1wbGVCYWNrZ3JvdW5kIH0gZnJvbSAnLi9IZXJvU2ltcGxlQmFja2dyb3VuZCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZFByaWNpbmdTdGFuZGFyZCB9IGZyb20gJy4vQ2FyZFByaWNpbmdTdGFuZGFyZCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFyYWxsYXggfSBmcm9tICcuL1BhcmFsbGF4JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb250YWN0Rm9ybSB9IGZyb20gJy4vQ29udGFjdEZvcm0nOyIsImV4cG9ydCBjb25zdCBBcGlSb3V0ZXMgPSB7XHJcbiAgICAgICAgIFNJR05VUDoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL3NpZ251cFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgTE9HSU46IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi9sb2dpblwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgUkVTRVRQQVNTV09SRDoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL3Jlc2V0LXBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBGT1JHT1RQQVNTV09SRDoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL2ZvcmdvdC1wYXNzd29yZFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUVVNFUkRFVEFJTFM6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi9kZXRhaWxzXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgVVNFUkRFVEFJTFNVUERBVEU6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi91cGRhdGVcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBVU0VSUEFTU1dPUkRVUERBVEU6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi9jaGFuZ2UtcGFzc3dvcmRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBVU0VSRk9SR09UUEFTU1dPUkRVUERBVEU6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi9mb3Jnb3QtcGFzc3dvcmRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIENPVVJTRUxJU1Q6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9jb3Vyc2UtdG9waWMvP2xpbWl0PWFsbFwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgQ09VUlNFREVUQUlMUzoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2NvdXJzZS10b3BpY1wiLFxyXG4gICAgICAgICAgIHVybDogXCIvOmlkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIENPVVJTRURFVEFJTFNBVVRIOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvY291cnNlLXRvcGljXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi86aWRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBBUFBMWUNPVVBPTjoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL3RyYW5zYWN0aW9uXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi9hcHBseVByb21vXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIE1BS0VQQVlNRU5UOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvdHJhbnNhY3Rpb25cIixcclxuICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIFBBWU1FTlRISVNUT1JZOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvdHJhbnNhY3Rpb25cIixcclxuICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgUFVSQ0hBU0VEQ09VUlNFOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvY291cnNlXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi9wdXJjaGFzZWQtY291cnNlXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgQ0VSVElGSUNBVEVSRVFVRVNUOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvY2VydGlmaWNhdGUtcmVxdWVzdFwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgQkxPR0xJU1Q6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9ibG9nXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBCTE9HREVUQUlMOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvYmxvZ1wiLFxyXG4gICAgICAgICAgIHVybDogXCIvOmlkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEdFVFVOSVZFUlNJVFk6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi91bml2ZXJzaXRpZXNcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUQ09SUE9SQVRFOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvYXV0aFwiLFxyXG4gICAgICAgICAgIHVybDogXCIvY29ycG9yYXRpb25cIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgQ09OVEFDVF9VUzoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2VudGVycHJpc2VcIixcclxuICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBQUkVTU19SRUxFQVNFOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvcHJlc3MtcmVsZWFzZVwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgUFJFU1NfREVUQUlMUzoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL3ByZXNzLXJlbGVhc2VcIixcclxuICAgICAgICAgICB1cmw6IFwiLzppZFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBHRVRfTE1TREFUQV9DT1VSU0U6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi90YWxlbnRMbXNcIixcclxuICAgICAgICAgICB1cmw6IFwiL2NvdXJzZXNcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUX0xNU0RBVEFfQ0FURUdPUlk6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi90YWxlbnRMbXNcIixcclxuICAgICAgICAgICB1cmw6IFwiL2NhdGVnb3J5XCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIE5FV1NMRVRURVJTVUJTQ1JJQkU6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9uZXdzLWxldHRlclwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEdFVFNPQ0lBTExJTktFUzoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL3NldHRpbmdcIixcclxuICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEdFVFBBWU1FTlRDRVJUSUZJQ0FURURFVEFJTFM6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9jZXJ0aWZpY2F0ZS1yZXF1ZXN0L3BheW1lbnQtaW5mb1wiLFxyXG4gICAgICAgICAgIHVybDogXCIvOmlkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIE1BS0VQQVlNRU5UQ0VSVElGSUNBVEU6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9jZXJ0aWZpY2F0ZS1yZXF1ZXN0L3BheW1lbnRcIixcclxuICAgICAgICAgICB1cmw6IFwiLzppZFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgQ0VSVElGSUNBVEVfREFUQToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2Ntc1wiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgRlJPTlRfUEFHRV9EQVRBOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvbWFya2V0LWNvbnRlbnRcIixcclxuICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEdFVF9URUFNX0RBVEE6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi90ZWFtXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgfTtcclxuIiwiY29uc3QgQXBwQ29uZmlnID0ge1xyXG4gICAgLy8gRklMRVNfRU5EUE9JTlQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSUxFU19FTkRQT0lOVCxcclxuICAgIC8vIEFQUF9FTkRQT0lOVDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0VORFBPSU5ULFxyXG4gICAgQVBJX0VORFBPSU5UOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlQsXHJcbiAgICBJTUFHRV9VUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lNQUdFX1VSTCxcclxuICAgIFNJVEVfTkFNRTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0lURV9OQU1FXHJcbiAgICAvLyBBUElfVkVSU0lPTjogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9WRVJTSU9OLFxyXG4gICAgLy8gREVGQVVMVF9EQVRFX0ZPUk1BVDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0RFRkFVTFRfREFURV9GT1JNQVQsXHJcbiAgfTtcclxuICBcclxuZXhwb3J0IGRlZmF1bHQgQXBwQ29uZmlnOyIsImV4cG9ydCAqIGZyb20gJy4vQXBpUm91dGVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9hcHBDb25maWcnOyIsImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgRXJyb3JIYW5kbGVySGVscGVyIH0gZnJvbSBcIi4vRXJyb3JIYW5kbGVySGVscGVyXCI7XHJcbmltcG9ydCB7IFN1Y2Nlc3NIYW5kbGVySGVscGVyIH0gZnJvbSBcIi4vU3VjY2Vzc0hhbmRsZXJIZWxwZXJcIjtcclxuaW1wb3J0IEFwcENvbmZpZyAgZnJvbSBcIi4uL2NvbmZpZy9hcHBDb25maWdcIjtcclxuLyoqXHJcbiAqIEFwaUhlbHBlciBDbGFzcyAtIEZvciBtYWtpbmcgQXBpIFJlcXVlc3RzXHJcbiAqIFxyXG4gKi9cclxubGV0IENhbmNlbFRva2VuID0gQXhpb3MuQ2FuY2VsVG9rZW47XHJcbmxldCBjYW5jZWw7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBpSGVscGVyIHtcclxuICBfcG9ydGFsR2F0ZXdheTtcclxuICBfYXBpVmVyc2lvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9wb3J0YWxHYXRld2F5ID0gQXBwQ29uZmlnLkFQSV9FTkRQT0lOVDtcclxuICAgIHRoaXMuX2FwaVZlcnNpb24gPSBcIlwiO1xyXG4gICAgdGhpcy5zb3VyY2UgPSBBeGlvcy5DYW5jZWxUb2tlbi5zb3VyY2UoKTtcclxuICAgIHRoaXMuY2FuY2VsVG9rZW4gPSB0aGlzLnNvdXJjZS50b2tlbjtcclxuICB9XHJcbiAgc2V0SG9zdCA9IChob3N0KSA9PiB7XHJcbiAgICB0aGlzLl9wb3J0YWxHYXRld2F5ID0gaG9zdDtcclxuICB9O1xyXG4gIHNldEFwaVZlcnNpb24gPSAodmVyc2lvbikgPT4ge1xyXG4gICAgdGhpcy5fYXBpVmVyc2lvbiA9IHZlcnNpb247XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBGZXRjaGVzIGZyb20gdGhlIEdhdGV3YXkgZGVmaW5lZCBieSB0aGUgaW5zdGFudGlhdGVkIG9iamVjdC4gQWNjZXB0cyA8VD4gYXMgb3V0cHV0IG9iamVjdC5cclxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5cIi9BdXRoL1VzZXJBY2NvdW50XCIsIFwiL0dldEN1cnJlbnRVc2VyXCIsIFwiR0VUXCIsIFwiSldUIENvbnRlbnRcIjwvY2FwdGlvbj5cclxuICAgKiBAcGFyYW0ge3NlcnZpY2V9IHNlcnZpY2UgLSB3YW50aW5nIHRvIGJlIGFjY2VzcyBleC4gXCJVc2VyQXV0aC9BdXRoXCJcclxuICAgKiBAcGFyYW0ge2VuZHBvaW50fSBlbmRwb2ludCAtIHlvdSB3aXNoIHRvIGNhbGwgZXguIFwiL0xvZ2luXCJcclxuICAgKiBAcGFyYW0ge21ldGhvZH0gbWVob3RkIC0gbWV0aG9kIChHRVQsIFVQREFURSwgREVMRVRFLCBQT1NUKVxyXG4gICAqIEBwYXJhbSB7and0fSBKV1QgLSBKU09OIFdlYiBUb2tlbiAoT3B0aW9uYWwpXHJcbiAgICogQHBhcmFtIHtxdWVyeU9wdGlvbnN9IFF1ZXJ5IC0gcXVlcnkgb3B0aW9ucyBmb3IgXCJHRVRcIiBtZXRob2RzIChPcHRpb25hbClcclxuICAgKiBAcGFyYW0ge2JvZHl9IGJvZHkgLSBKU09OIGJvZHkgZm9yIFwiVVBEQVRFLCBERUxFVEUgYW5kIFBPU1RcIiBtZXRob2RzIChPcHRpb25hbClcclxuICAgKi9cclxuICBhc3luYyBGZXRjaEZyb21TZXJ2ZXIoXHJcbiAgICBzZXJ2aWNlLFxyXG4gICAgZW5kcG9pbnQsXHJcbiAgICBtZXRob2QsXHJcbiAgICBhdXRoZW50aWNhdGVkID0gZmFsc2UsXHJcbiAgICBhdXRoVG9rZW4sXHJcbiAgICBxdWVyeU9wdGlvbnMgPSB1bmRlZmluZWQsXHJcbiAgICBib2R5ID0gdW5kZWZpbmVkLFxyXG4gICAgcmVzcG9uc2VUeXBlLFxyXG4gICkge1xyXG4gICAgbGV0IHVybCA9IHRoaXMuX3BvcnRhbEdhdGV3YXkgKyBzZXJ2aWNlICsgZW5kcG9pbnQ7XHJcbiAgICBsZXQgaGVhZGVycyA9IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfTtcclxuICAgIGlmIChhdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgIC8vIGNvbnN0IHN0b3JhZ2VTZXNzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgY29uc3Qgc3RvcmFnZVNlc3Npb24gPSBhdXRoVG9rZW47XHJcbiAgICAgIGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHN0b3JhZ2VTZXNzaW9uO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgbWV0aG9kID0gbWV0aG9kLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZCxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZGF0YTogYm9keSxcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczogcXVlcnlPcHRpb25zLFxyXG4gICAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xyXG4gICAgICAgICAgLy8gQW4gZXhlY3V0b3IgZnVuY3Rpb24gcmVjZWl2ZXMgYSBjYW5jZWwgZnVuY3Rpb24gYXMgYSBwYXJhbWV0ZXJcclxuICAgICAgICAgIGNhbmNlbCA9IGM7XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rID09PSBmYWxzZSB8fCByZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgIGxldCBlcnJvck9iamVjdCA9IHtcclxuICAgICAgICAgIGNvZGU6IHJlc3BvbnNlLnN0YXR1cyxcclxuICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhyb3cgZXJyb3JPYmplY3Q7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBTdWNjZXNzSGFuZGxlckhlbHBlcihyZXNwb25zZS5kYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoQXhpb3MuaXNDYW5jZWwoZXJyKSB8fCAhZXJyLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlzRXJyb3I6IHRydWUsXHJcbiAgICAgICAgICBlcnJvcjogXCJSZXF1ZXN0IGNhbmNlbGxlZFwiLFxyXG4gICAgICAgICAgbWVzc2FnZXM6IGVyci5tZXNzYWdlID09PSBcImNhbmNlbFwiID8gW10gOiBbXCJSZXF1ZXN0IGNhbmNlbGxlZFwiXSxcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGVycm9ySGVscGVyID0gbmV3IEVycm9ySGFuZGxlckhlbHBlcihlcnIucmVzcG9uc2UpO1xyXG4gICAgICAgIHJldHVybiBlcnJvckhlbHBlci5lcnJvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBDYW5jZWxzIHRoZSBsYXN0IHJlcXVlc3QuXHJcbiAgICovXHJcbiAgY2FuY2VsUmVxdWVzdCA9IChlcnIpID0+IHtcclxuICAgIGNhbmNlbCAmJiBjYW5jZWwoZXJyKTtcclxuICB9O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBFcnJvckhhbmRsZXJIZWxwZXIgQ2xhc3MgLSBGb3IgbWFuYWdpbmcgZXJyb3JzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXJyb3JIYW5kbGVySGVscGVyIHtcclxuXHRyYXdFcnJvcjtcclxuXHRlcnJvciA9IHtcclxuXHRcdGNvZGU6IDUwMCxcclxuXHRcdGlzRXJyb3I6IHRydWUsXHJcblx0XHR0aW1lc3RhbXA6IERhdGUubm93KCksXHJcblx0XHRlcnJvcjogJ1Vua25vd24gZXJyb3InLFxyXG5cdFx0bWVzc2FnZXM6IFtdLFxyXG5cdFx0ZGF0YTogdW5kZWZpbmVkLFxyXG5cdH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKGVycikge1xyXG5cdFx0dGhpcy5yYXdFcnJvciA9IGVycjtcclxuXHRcdHRoaXMuc2V0RXJyb3IoKTtcclxuXHR9XHJcblxyXG5cdHNldEVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBcclxuXHRcdHRoaXMucmF3RXJyb3IgJiYgdGhpcy5yYXdFcnJvci5jb2RlXHJcblx0XHRcdD8gdGhpcy5yYXdFcnJvci5jb2RlXHJcbiAgICAgICAgICAgIDogdGhpcy5lcnJvci5jb2RlO1xyXG5cdFx0XHR0aGlzLmVycm9yLmNvZGUgPSB0aGlzLnJhd0Vycm9yLnN0YXR1cyA9PT0gNDAyID8gdGhpcy5yYXdFcnJvci5zdGF0dXMgOiAoY29kZSA/IGNvZGUgOiA0MDApO1xyXG5cdFx0dGhpcy5lcnJvci50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cdFx0dGhpcy5lcnJvci5tZXNzYWdlcyA9IFtdO1xyXG5cdFxyXG5cdFx0aWYgKHRoaXMucmF3RXJyb3IuZGF0YSAmJiB0eXBlb2YgdGhpcy5yYXdFcnJvci5kYXRhID09PSAnb2JqZWN0JyAmJiB0aGlzLnJhd0Vycm9yLmRhdGEubWVzc2FnZSkge1xyXG5cdFx0XHRpZiAoKHRoaXMucmF3RXJyb3IgJiYgdGhpcy5yYXdFcnJvci5kYXRhLm1lc3NhZ2UgPT09IFwiVG9rZW4gaGFzIGV4cGlyZWRcIikgfHwgKHRoaXMucmF3RXJyb3IgJiYgdGhpcy5yYXdFcnJvci5kYXRhLm1lc3NhZ2UgPT09IFwiVW5hdXRob3JpemVkLCBJbnZhbGlkIHRva2VuIVwiKSl7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcclxuXHRcdFx0fWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yLm1lc3NhZ2VzLnB1c2godGhpcy5yYXdFcnJvci5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblx0XHR9XHJcblx0XHRpZiAoIXRoaXMuZXJyb3IubWVzc2FnZXMubGVuZ3RoKSB7XHJcblx0XHRcdHRoaXMuZXJyb3IuZXJyb3IgPSAnVW5rbm93bic7XHJcblx0XHRcdHRoaXMuZXJyb3IubWVzc2FnZXMgPSBbbnVsbF07XHJcblx0XHR9XHJcblx0fTtcclxufSIsIi8qKlxyXG4gKiBTdWNjZXNzSGFuZGxlckhlbHBlciBDbGFzcyAtIEZvciBtYW5hZ2luZyBzdWNjZXNzZnVsIHJlc3BvbnNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3VjY2Vzc0hhbmRsZXJIZWxwZXIge1xyXG4gICAgcmF3RGF0YTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgaXNFcnJvcjogZmFsc2UsXHJcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcclxuICAgICAgbWVzc2FnZXM6IFtdLFxyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgdGhpcy5yYXdEYXRhID0gZGF0YTtcclxuICAgICAgdGhpcy5zZXRTdWNjY2VzcygpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0U3VjY2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XHJcbiAgXHJcbiAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5yYXdEYXRhKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJhd0RhdGFbaV0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgIG1lc3NhZ2VzLnB1c2godGhpcy5yYXdEYXRhW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXRhLmRhdGEgPSB0aGlzLnJhd0RhdGE7XHJcbiAgICAgIHRoaXMuZGF0YS5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xyXG4gICAgfTtcclxuICB9IiwiZXhwb3J0ICogZnJvbSAnLi9BcGlIZWxwZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1N1Y2Nlc3NIYW5kbGVySGVscGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9FcnJvckhhbmRsZXJIZWxwZXInOyIsImltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXMnO1xyXG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3VzZVRoZW1lJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJjb21wb25lbnRzL2F0b21zXCI7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tIFwiY29tcG9uZW50cy9vcmdhbmlzbXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdEh0bWxQYXJzZXIgZnJvbSBcInJlYWN0LWh0bWwtcGFyc2VyXCI7XHJcbmltcG9ydCBiYW5uZXJCb3R0b20gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9hc3NldHMvYmFubmVyLXNoYXBlLnBuZ1wiO1xyXG5pbXBvcnQgaW1nIGZyb20gXCIuLi8uLi8uLi9zcmMvYXNzZXRzL2ltYWdlcy9DZXJ0aWZpY2F0ZS1wYWdlL2NlcnRpZmljYXRlLmpwZ1wiO1xyXG5pbXBvcnQgQXBwQ29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcvYXBwQ29uZmlnXCI7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNlcnRpZmljYXRlX3NlYzoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgcGFkZGluZzogXCI5MHB4IDBweCAxMDBweCAwcHhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgYmFja2dyb3VuZDogXCIjZjVmNWY1XCIsXHJcbiAgICBtaW5IZWlnaHQ6IFwiODAwcHhcIixcclxuICB9LFxyXG4gIGNlcnRpZmljYXRlX2JveDoge1xyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1nfSlgLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgIGJhY2tncm91bmRTaXplOiBcIjEwMCUgMTAwJVwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgd2lkdGg6IFwiNzgwcHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXHJcbiAgICBib3JkZXI6IFwiMTVweCBzb2xpZCAjMWEyMzdlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiLFxyXG4gIH0sXHJcbiAgaGVhZGluZzE6IHtcclxuICAgIG1hcmdpblRvcDogXCI0NXB4XCIsXHJcbiAgICBmb250U2l6ZTogXCIzMnB4XCIsXHJcbiAgICBmb250V2VpZ2h0OiBcIjgwMFwiLFxyXG4gICAgbWFyZ2luOiBcIjIwcHggMCAyMHB4XCIsXHJcbiAgICBmb250RmFtaWx5OiBcIidWaWdhJywgc2Fucy1zZXJpZlwiLFxyXG4gICAgbGV0dGVyU3BhY2luZzogXCIxcHhcIixcclxuICB9LFxyXG4gIGxhYmVsOiB7XHJcbiAgICBmb250V2VpZ2h0OiBcIjYwMFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXHJcbiAgfSxcclxuICBsYWJlbGV4dHJhOiB7XHJcbiAgICBmb250V2VpZ2h0OiBcIjYwMFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgbWFyZ2luTGVmdDogXCI1cHhcIixcclxuICB9LFxyXG4gIGhlYWRpbmczOiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgZm9udFdlaWdodDogXCI3MDBcIixcclxuICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICB9LFxyXG4gIGhlYWRpbmc0OiB7XHJcbiAgICBmb250V2VpZ2h0OiBcIjgwMFwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gIH0sXHJcbiAgaGVhZGluZzU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IFwiODAwXCIsXHJcbiAgICBmb250U2l6ZTogXCIxN3B4XCIsXHJcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXHJcbiAgICBwYWRkaW5nOiBcIjNweCA0MHB4IDBcIixcclxuICAgIGJvcmRlclRvcDogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcclxuICB9LFxyXG4gIHNlY3Rpb25IZWFkZXI6IHtcclxuICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMjBweFwiLFxyXG4gICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgZm9udFNpemU6IFwiMzVweFwiLFxyXG4gIH0sXHJcbiAgc2lnbjoge1xyXG4gICAgcGFkZGluZzogXCIzcHggNDBweFwiLFxyXG4gICAgbWFyZ2luOiBcIjcwcHggMHB4IDEwcHggMHB4XCIsXHJcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXHJcbiAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgfSxcclxuICBzaWduX2Rpdjoge1xyXG4gICAgbWFyZ2luVG9wOiBcIjcwcHhcIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCI0MHB4XCIsXHJcbiAgfSxcclxuICBiYW5uZXJCb3R0b206IHtcclxuICAgIFwiJiA+IHNwYW5cIjoge1xyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrICFpbXBvcnRhbnRcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB3cmFwcGVyU2VjdGlvbjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg0LCAwLCAwKSxcclxuICB9LFxyXG4gIHNlY3Rpb25XcmFwcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDcsIDYpLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIG1pbkhlaWdodDogXCIzNTBweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHBhZGRpbmc6IFwiMzBweFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgbWluSGVpZ2h0OiBcImF1dG9cIixcclxuICAgICAgcGFkZGluZzogXCIxNXB4XCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGgxXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgXCImOjphZnRlclwiOiB7XHJcbiAgICAgICAgY29udGVudDogJ1wiIFwiJyxcclxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTUwcHhcIixcclxuICAgICAgICBib3JkZXJCb3R0b206IFwiM3B4IHNvbGlkICM1MTIwZmZcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIGJvdHRvbTogXCIxNXB4XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYmxvZ2NoYWluX2hlYWRpbmc6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogXCIxNXB4XCIsXHJcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjI1cHhcIixcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZvbnRTaXplXzE4OiB7XHJcbiAgICBmb250U2l6ZTogMTgsXHJcbiAgfSxcclxuICBjb250ZW50U2VjdGlvbjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg1LCA2LCAwKSxcclxuICAgIFwiJiBwXCI6IHtcclxuICAgICAgZm9udFNpemU6IFwiMS4yNXJlbVwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjEuNlwiLFxyXG4gICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjEuMTI1cmVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImIGgxXCI6IHtcclxuICAgICAgbGluZUhlaWdodDogXCIxLjIzNVwiLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjMwcHhcIixcclxuICAgICAgZm9udFNpemU6IFwiMi4wMjQzcmVtXCIsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMS44MjE5cmVtXCIsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIyMHB4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMS41NjI1cmVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiJjo6YWZ0ZXJcIjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogXCI1cHggc29saWQgIzUxMjBGRlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiJiB1bFwiOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiBcIjMwcHhcIixcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDogMTUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImIGxpXCI6IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogOCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZUxhYnM6IHtcclxuICAgIG1heFdpZHRoOiBcIjEwMCVcIixcclxuICAgIG1hcmdpbjogXCJhdXRvIGF1dG9cIixcclxuICAgIGJvcmRlcjogXCIwXCIsXHJcbiAgfSxcclxuICBpbWFnZVdyYXBwZXI6IHtcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgIFwiJiA+IHNwYW5cIjoge1xyXG4gICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdWJUaXRsZToge1xyXG4gICAgXCImIGgxXCI6IHtcclxuICAgICAgZm9udFNpemU6IFwiMS40OTkzcmVtXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIHBcIjoge1xyXG4gICAgICBmb250U2l6ZTogXCIxOHB4XCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXHJcbiAgICB9LFxyXG4gICAgXCImIHAgPiBzcGFuXCI6IHtcclxuICAgICAgZm9udFNpemU6IFwiMThweCAhaW1wb3J0YW50XCIsXHJcbiAgICAgIGZvbnRGYW1pbHk6IFwiTGF0byAhaW1wb3J0YW50XCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwICFpbXBvcnRhbnRcIixcclxuICAgICAgY29sb3I6IFwiIzJkMzc0OCAhaW1wb3J0YW50XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tbW9uTGlzdDoge1xyXG4gICAgXCImIGxpXCI6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHggIWltcG9ydGFudFwiXHJcbiAgICB9XHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgTGFicyA9ICh7Y21zRGF0YX0pID0+IHtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKSwge1xyXG4gICAgZGVmYXVsdE1hdGNoZXM6IHRydWUsXHJcbiAgfSk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAvLyBGb3IgRmV0Y2ggQ01TIERhdGFcclxuICBjb25zdCBbZ2V0VGVtcGxhdGVEYXRhLCBzZXRHZXRUZW1wbGF0ZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgLy8gRm9yIEdldCBUZW1wbGF0ZSBEYXRhXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjbXNEYXRhICYmIGNtc0RhdGEubGVuZ3RoKSB7XHJcbiAgICAgIGxldCBnZXREYXRhID0gY21zRGF0YS5maWx0ZXIoKGUpID0+IGUudGl0bGVTbHVnID09PSBcImxhYnNcIik7XHJcbiAgICAgIHNldEdldFRlbXBsYXRlRGF0YSguLi5nZXREYXRhKTtcclxuICAgIH1cclxuICB9LCBbY21zRGF0YV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q29pbmlmaWRlIHwgTGFiczwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIldlIG1hcnJ5IG91ciBjYXJlZnVsbHkgY3VyYXRlZCBjb250ZW50IGFuZCBjb3Vyc2VzIHdpdGggaW50ZXJhY3RpdmUgdmlkZW9zIGFuZCBoYW5kcy1vbiBsYWJzLlwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlcm8gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFubmVyQm90dG9tfT5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17YmFubmVyQm90dG9tfVxyXG4gICAgICAgICAgc3JjU2V0PXtiYW5uZXJCb3R0b219XHJcbiAgICAgICAgICBhbHQ9J2Jhbm5lci1ib3R0b20nXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJTZWN0aW9ufT5cclxuICAgICAgICA8U2VjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICBjbGFzc2VzLmNvbnRlbnRTZWN0aW9uLFxyXG4gICAgICAgICAgICBjbGFzc2VzLnN1YlRpdGxlLFxyXG4gICAgICAgICAgICBjbGFzc2VzLnBiXzYwXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXtpc01kID8gMCA6IDJ9PlxyXG4gICAgICAgICAge2dldFRlbXBsYXRlRGF0YSAmJiBnZXRUZW1wbGF0ZURhdGEuYmxvY2tJbWFnZTEubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9IGRhdGEtYW9zPSdmYWRlLXVwJz5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PXtcImZsZXhcIn1cclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifVxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17XCIxMDAlXCJ9XHJcbiAgICAgICAgICAgICAgICBwbD17aXNNZCA/IDIgOiAwfVxyXG4gICAgICAgICAgICAgICAgcHI9e2lzTWQgPyAyIDogMH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVdyYXBwZXJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7QXBwQ29uZmlnLklNQUdFX1VSTH0vJHtnZXRUZW1wbGF0ZURhdGEuYmxvY2tJbWFnZTF9YH1cclxuICAgICAgICAgICAgICAgICAgc3JjU2V0PXtgJHtBcHBDb25maWcuSU1BR0VfVVJMfS8ke2dldFRlbXBsYXRlRGF0YS5ibG9ja0ltYWdlMX1gfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e1wiTGFic1wifVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VMYWJzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApOm51bGx9XHJcbiAgICAgICAgICAgIHtnZXRUZW1wbGF0ZURhdGEgJiYgZ2V0VGVtcGxhdGVEYXRhLmJsb2NrMS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICBkYXRhLWFvcz0nZmFkZS11cCdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMub3JkZXJfc3BfMzB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXsyfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgIHtSZWFjdEh0bWxQYXJzZXIoZ2V0VGVtcGxhdGVEYXRhLmJsb2NrMSl9XHJcbiAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApOm51bGx9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDxTZWN0aW9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgIGNsYXNzZXMuY29udGVudFNlY3Rpb24sXHJcbiAgICAgICAgICAgIGNsYXNzZXMuc3ViVGl0bGUsXHJcbiAgICAgICAgICAgIGNsYXNzZXMucGJfNjBcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e2lzTWQgPyAwIDogMn0+XHJcbiAgICAgICAgICB7Z2V0VGVtcGxhdGVEYXRhICYmIGdldFRlbXBsYXRlRGF0YS5ibG9jazIubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9J2ZhZGUtdXAnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9yZGVyX3NwXzMwfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17Mn0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICB7UmVhY3RIdG1sUGFyc2VyKGdldFRlbXBsYXRlRGF0YS5ibG9jazIpfVxyXG4gICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKTpudWxsfVxyXG4gICAgICAgICAgICB7Z2V0VGVtcGxhdGVEYXRhICYmIGdldFRlbXBsYXRlRGF0YS5ibG9ja0ltYWdlMi5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0gZGF0YS1hb3M9J2ZhZGUtdXAnPlxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjEwMCVcIn1cclxuICAgICAgICAgICAgICAgIHBsPXtpc01kID8gMiA6IDB9XHJcbiAgICAgICAgICAgICAgICBwcj17aXNNZCA/IDIgOiAwfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlV3JhcHBlcn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBcHBDb25maWcuSU1BR0VfVVJMfS8ke2dldFRlbXBsYXRlRGF0YS5ibG9ja0ltYWdlMn1gfVxyXG4gICAgICAgICAgICAgICAgICBzcmNTZXQ9e2Ake0FwcENvbmZpZy5JTUFHRV9VUkx9LyR7Z2V0VGVtcGxhdGVEYXRhLmJsb2NrSW1hZ2UyfWB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17XCJMYWJzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUxhYnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICk6bnVsbH1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25XcmFwcGVyfT5cclxuICAgICAgICB7Z2V0VGVtcGxhdGVEYXRhICYmIGdldFRlbXBsYXRlRGF0YS5ibG9ja1RpdGxlNC5sZW5ndGggPyAoXHJcbiAgICAgICAgICA8Qm94IG1iPXszfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICB2YXJpYW50PXtcImg0XCJ9XHJcbiAgICAgICAgICAgICAgYWxpZ249e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgY29sb3I9J3RleHRQcmltYXJ5J1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9nY2hhaW5faGVhZGluZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtnZXRUZW1wbGF0ZURhdGEuYmxvY2tUaXRsZTR9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKTpudWxsfVxyXG4gICAgICAgICAge2dldFRlbXBsYXRlRGF0YSAmJiBnZXRUZW1wbGF0ZURhdGEuYmxvY2szLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgUmVhY3RIdG1sUGFyc2VyKGdldFRlbXBsYXRlRGF0YS5ibG9jazMpXHJcbiAgICAgICAgICAgICk6bnVsbH1cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhYnM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0ICBtYWtlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzJztcclxuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gXCJjb21wb25lbnRzL21vbGVjdWxlc1wiO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSBcImNvbXBvbmVudHMvb3JnYW5pc21zXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM1MTIwRkZcIixcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICBtaW5IZWlnaHQ6IDQwMCxcclxuICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRleHRXaGl0ZToge1xyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICB9LFxyXG4gIHNlY3Rpb246IHtcclxuICAgIC8vIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgLy8gdG9wOiAnNTAlJyxcclxuICAgIC8vIGxlZnQ6ICc1MCUnLFxyXG4gICAgLy8gdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIC8vIHBhZGRpbmdUb3A6IDAsXHJcbiAgICAvLyBwYWRkaW5nQm90dG9tOiAwLFxyXG4gIH0sXHJcbiAgc2VhcmNoSW5wdXRDb250YWluZXI6IHtcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBib3hTaGFkb3c6IFwiMCA0cHggMTRweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSlcIixcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBcIiYgLk11aU91dGxpbmVkSW5wdXQtbm90Y2hlZE91dGxpbmVcIjoge1xyXG4gICAgICBib3JkZXI6IFwiMCAhaW1wb3J0YW50XCIsXHJcbiAgICB9LFxyXG4gICAgXCImIC5NdWlJbnB1dEFkb3JubWVudC1wb3NpdGlvblN0YXJ0XCI6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG4gICAgXCImIC5NdWlPdXRsaW5lZElucHV0LWFkb3JuZWRTdGFydFwiOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAwLFxyXG4gICAgfSxcclxuICAgIFwiJiAuTXVpT3V0bGluZWRJbnB1dC1pbnB1dFwiOiB7XHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWFyY2hCdXR0b246IHtcclxuICAgIG1heEhlaWdodDogNDUsXHJcbiAgICBtaW5XaWR0aDogMTM1LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgbWluV2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBIZXJvID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICAgIHRpdGxlPSdMYWJzJ1xyXG4gICAgICAgICAgICBzdWJ0aXRsZT0nV2UgbWFycnkgb3VyIGNhcmVmdWxseSBjdXJhdGVkIGNvbnRlbnQgYW5kIGNvdXJzZXMgd2l0aCBpbnRlcmFjdGl2ZSB2aWRlb3MgYW5kIGhhbmRzLW9uIGxhYnMuJ1xyXG4gICAgICAgICAgICBhbGlnbj0nbGVmdCdcclxuICAgICAgICAgICAgdGl0bGVQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnRpdGxlLCBjbGFzc2VzLnRleHRXaGl0ZSksXHJcbiAgICAgICAgICAgICAgdmFyaWFudDogXCJoM1wiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdWJ0aXRsZVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRleHRXaGl0ZSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSGVybyc7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgSGVybyB9IGZyb20gXCIuL0hlcm9cIjtcclxuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL0xhYnMnIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ZhYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL05vU3NyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvWm9vbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3VzZVRoZW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dSaWdodEFsdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiamFyYWxsYXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibGVhZmxldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb3VudHVwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWh0bWwtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbGVhZmxldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10eXBlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2lwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmFsaWRhdGUuanNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==