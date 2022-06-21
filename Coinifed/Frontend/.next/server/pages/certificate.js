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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/certificate.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/certificate.js":
/*!******************************!*\
  !*** ./pages/certificate.js ***!
  \******************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var _src_views_Certificate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/views/Certificate */ "./src/views/Certificate/index.js");
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
/* harmony default export */ __webpack_exports__["default"] = (_src_views_Certificate__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./src/views/Certificate/Certificate.js":
/*!**********************************************!*\
  !*** ./src/views/Certificate/Certificate.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ "./src/config/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helper */ "./src/helper/index.js");
/* harmony import */ var components_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/toaster */ "./src/components/toaster/index.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/useTheme */ "@material-ui/core/styles/useTheme");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./src/views/Certificate/components/index.js");
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var _public_assets_banner_shape_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/assets/banner-shape.png */ "./public/assets/banner-shape.png");
/* harmony import */ var _public_assets_banner_shape_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_banner_shape_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_assets_images_Certificate_page_certificate_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../src/assets/images/Certificate-page/certificate.jpg */ "./src/assets/images/Certificate-page/certificate.jpg");
/* harmony import */ var _src_assets_images_Certificate_page_certificate_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_assets_images_Certificate_page_certificate_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../config/appConfig */ "./src/config/appConfig.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\Certificate\\Certificate.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



















const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5___default()(theme => ({
  certificate_sec: {
    display: "flex",
    alignItems: "center",
    padding: "90px 0px 100px 0px",
    justifyContent: "center",
    background: "#f5f5f5",
    minHeight: "800px"
  },
  certificate_box: {
    backgroundImage: `url(${_src_assets_images_Certificate_page_certificate_jpg__WEBPACK_IMPORTED_MODULE_11___default.a})`,
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
  heading: {
    position: "relative",
    paddingBottom: "30px",
    fontWeight: "700",
    "&::after": {
      content: '" "',
      display: "block",
      width: "150px",
      borderBottom: "3px solid #5120ff",
      position: "absolute",
      bottom: "15px"
    }
  },
  commonList: {
    "& li": {
      marginBottom: "15px !important"
    }
  },
  sectionCertificate: {
    paddingTop: 15,
    paddingBottom: 30
  }
}));

const Certificate = ({
  cmsData
}) => {
  const theme = _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_6___default()();
  const isMd = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_12___default()(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  const classes = useStyles();
  const {
    0: getTemplateData,
    1: setGetTemplateData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null); // For Get Template Data

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (cmsData && cmsData.length) {
      let getData = cmsData.filter(e => e.titleSlug === "certification");
      setGetTemplateData(...getData);
    }
  }, [cmsData]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Hero"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: classes.bannerBottom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 9
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_9__["Image"], {
    src: _public_assets_banner_shape_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    srcSet: _public_assets_banner_shape_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "banner-bottom",
    className: classes.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: classes.wrapperSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 9
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    className: classes.sectionCertificate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 9
    }
  }, getTemplateData && getTemplateData.blockTitle5.length ? __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_16___default.a, {
    mb: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
    variant: "h4",
    align: "center",
    color: "textPrimary",
    className: classes.blogchain_heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 15
    }
  }, getTemplateData.blockTitle5)) : null, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 13
    }
  }, getTemplateData && getTemplateData.block4.length ? react_html_parser__WEBPACK_IMPORTED_MODULE_17___default()(getTemplateData.block4) : null)), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    className: classes.contentSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 11
    }
  }, getTemplateData && getTemplateData.blockImage1.length ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    item: true,
    xs: 12,
    md: 6,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_16___default.a, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    pl: isMd ? 2 : 0,
    pr: isMd ? 2 : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_18__["default"].IMAGE_URL}/${getTemplateData.blockImage1}`,
    alt: "girl explaining",
    className: classes.img_fluid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 17
    }
  }))) : null, getTemplateData && getTemplateData.blockTitle1.length ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    item: true,
    xs: 12,
    md: 6,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default.a, {
    elevation: 2,
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
    variant: "h5",
    color: "textPrimary",
    className: classes.heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 17
    }
  }, getTemplateData.blockTitle1), react_html_parser__WEBPACK_IMPORTED_MODULE_17___default()(getTemplateData.block1))) : null)), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.contentSection, classes.subTitle, classes.pb_60),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    container: true,
    spacing: isMd ? 0 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 13
    }
  }, getTemplateData && getTemplateData.blockTitle2.length ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    item: true,
    xs: 12,
    md: 6,
    "data-aos": "fade-up",
    className: classes.order_sp_30,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default.a, {
    elevation: 2,
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
    variant: "h5",
    color: "textPrimary",
    className: classes.heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 17
    }
  }, getTemplateData.blockTitle2), react_html_parser__WEBPACK_IMPORTED_MODULE_17___default()(getTemplateData.block2))) : null, getTemplateData && getTemplateData.blockImage2.length ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    item: true,
    xs: 12,
    md: 6,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_16___default.a, {
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
      lineNumber: 343,
      columnNumber: 17
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_9__["Image"], {
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_18__["default"].IMAGE_URL}/${getTemplateData.blockImage2}`,
    srcSet: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_18__["default"].IMAGE_URL}/${getTemplateData.blockImage2}`,
    alt: "Labs",
    className: classes.imageLabs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 19
    }
  }))) : null)), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    className: classes.sectionWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 11
    }
  }, getTemplateData && getTemplateData.blockTitle4.length ? __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_16___default.a, {
    mb: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
    variant: "h4",
    align: "center",
    color: "textPrimary",
    className: classes.blogchain_heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 15
    }
  }, getTemplateData.blockTitle4)) : null, __jsx("div", {
    className: classes.commonList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 13
    }
  }, getTemplateData && getTemplateData.block3.length ? react_html_parser__WEBPACK_IMPORTED_MODULE_17___default()(getTemplateData.block3) : null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Certificate);

/***/ }),

/***/ "./src/views/Certificate/components/Hero/Hero.js":
/*!*******************************************************!*\
  !*** ./src/views/Certificate/components/Hero/Hero.js ***!
  \*******************************************************/
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
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\Certificate\\components\\Hero\\Hero.js";
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
    title: "Certification",
    subtitle: "In this certificate series, you will dive into the world of blockchain technology and the promise it\r\nholds for global business.",
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

/***/ "./src/views/Certificate/components/Hero/index.js":
/*!********************************************************!*\
  !*** ./src/views/Certificate/components/Hero/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero */ "./src/views/Certificate/components/Hero/Hero.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Hero__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Certificate/components/index.js":
/*!***************************************************!*\
  !*** ./src/views/Certificate/components/index.js ***!
  \***************************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero */ "./src/views/Certificate/components/Hero/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _Hero__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Certificate/index.js":
/*!****************************************!*\
  !*** ./src/views/Certificate/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Certificate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Certificate */ "./src/views/Certificate/Certificate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Certificate__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2VydGlmaWNhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9iYW5uZXItc2hhcGUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL0NlcnRpZmljYXRlLXBhZ2UvY2VydGlmaWNhdGUuanBnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2xlYWZsZXQtYXNzZXRzL21hcmtlci1pY29uLTJ4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9sZWFmbGV0LWFzc2V0cy9tYXJrZXItaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGVhZmxldC1hc3NldHMvbWFya2VyLXNoYWRvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvRGFya01vZGVUb2dnbGVyL0RhcmtNb2RlVG9nZ2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9EYXJrTW9kZVRvZ2dsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvSWNvbi9JY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL0ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvSWNvblRleHQvSWNvblRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvSWNvblRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvSW1hZ2UvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvSW1hZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvTGVhcm5Nb3JlTGluay9MZWFybk1vcmVMaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL0xlYXJuTW9yZUxpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvU2Nyb2xsVG9wL1Njcm9sbFRvcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9TY3JvbGxUb3AvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL0NvdW50VXBOdW1iZXIvQ291bnRVcE51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvQ291bnRVcE51bWJlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvRGVzY3JpcHRpb25DdGEvRGVzY3JpcHRpb25DdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL0Rlc2NyaXB0aW9uQ3RhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9JY29uQWx0ZXJuYXRlL0ljb25BbHRlcm5hdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL0ljb25BbHRlcm5hdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL092ZXJsYXBlZEltYWdlcy9PdmVybGFwZWRJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL092ZXJsYXBlZEltYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU2VjdGlvbkhlYWRlci9TZWN0aW9uSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9TZWN0aW9uSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Td2lwZXJJbWFnZS9Td2lwZXJJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU3dpcGVySW1hZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1N3aXBlck51bWJlci9Td2lwZXJOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1N3aXBlck51bWJlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvVHlwZWRUZXh0L1R5cGVkVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvVHlwZWRUZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQWNjb3JkaW9uL0FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQWNjb3JkaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkQmFzZS9DYXJkQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRDYXRlZ29yeS9DYXJkQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRDYXRlZ29yeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZENhdGVnb3J5TGluay9DYXJkQ2F0ZWdvcnlMaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkQ2F0ZWdvcnlMaW5rL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkSm9iL0NhcmRKb2IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2JDb21wYW55L0NhcmRKb2JDb21wYW55LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkSm9iQ29tcGFueS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYk1pbmltYWwvQ2FyZEpvYk1pbmltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2JNaW5pbWFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkSm9iVGFnL0NhcmRKb2JUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2JUYWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRQcmljaW5nU3RhbmRhcmQvQ2FyZFByaWNpbmdTdGFuZGFyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFByaWNpbmdTdGFuZGFyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFByb2R1Y3QvQ2FyZFByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRQcm9kdWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkUHJvbW8vQ2FyZFByb21vLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkUHJvbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRSZXZpZXcvQ2FyZFJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFJldmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ29udGFjdEZvcm0vQ29udGFjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NvbnRhY3RGb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9EZXNjcmlwdGlvbkxpc3RJY29uL0Rlc2NyaXB0aW9uTGlzdEljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0Rlc2NyaXB0aW9uTGlzdEljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9CYWNrZ3JvdW5kL0hlcm9CYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9IZXJvQmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvSGVyb1NoYXBlZC9IZXJvU2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9IZXJvU2hhcGVkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9IZXJvU2lkZUltYWdlL0hlcm9TaWRlSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9TaWRlSW1hZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9TaW1wbGVCYWNrZ3JvdW5kL0hlcm9TaW1wbGVCYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9IZXJvU2ltcGxlQmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvTWFwL01hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvTWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9QYXJhbGxheC9QYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUGFyYWxsYXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL1NlY3Rpb24vU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvU2VjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvU2VjdGlvbkFsdGVybmF0ZS9TZWN0aW9uQWx0ZXJuYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9TZWN0aW9uQWx0ZXJuYXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b2FzdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvQXBpUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvYXBwQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9BcGlIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9FcnJvckhhbmRsZXJIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9TdWNjZXNzSGFuZGxlckhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9DZXJ0aWZpY2F0ZS9DZXJ0aWZpY2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQ2VydGlmaWNhdGUvY29tcG9uZW50cy9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0V4cG8vY29tcG9uZW50cy9IZXJvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9DZXJ0aWZpY2F0ZS9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9DZXJ0aWZpY2F0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ob1NzclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1pvb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy91c2VUaGVtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHRBbHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93VXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsc3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqYXJhbGxheFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxlYWZsZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3VudHVwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaHRtbC1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbGVhZmxldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXR5cGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2VldGFsZXJ0MlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3aXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZhbGlkYXRlLmpzXCIiXSwibmFtZXMiOlsiZ2V0U3RhdGljUHJvcHMiLCJyZXNwb25zZUNNUyIsIkFwaUhlbHBlciIsIkZldGNoRnJvbVNlcnZlciIsIkFwaVJvdXRlcyIsIkZST05UX1BBR0VfREFUQSIsInNlcnZpY2UiLCJ1cmwiLCJtZXRob2QiLCJhdXRoZW50aWNhdGUiLCJ1bmRlZmluZWQiLCJjbXNEYXRhIiwiaXNFcnJvciIsImRhdGEiLCJwcm9wcyIsInJldmFsaWRhdGUiLCJDZXJ0aWZpY2F0ZSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwb3NpdGlvbiIsImJvcmRlciIsIndpZHRoIiwic3BhY2luZyIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwicGFsZXR0ZSIsImRpdmlkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJicmVha3BvaW50cyIsInVwIiwiYm9yZGVyRGFyayIsImNvbG9ycyIsImluZGlnbyIsIm1vZGVUb2dnbGVyIiwidG9wIiwibGVmdCIsInRleHQiLCJwcmltYXJ5IiwidHJhbnNpdGlvbiIsImN1cnNvciIsIm1vZGVUb2dnbGVyRGFyayIsInRyYW5zZm9ybSIsIm1vZGVUb2dnbGVySWNvbiIsImZpbGwiLCJzZWNvbmRhcnkiLCJtYWluIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIkRhcmtNb2RlVG9nZ2xlciIsInRoZW1lTW9kZSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJyZXN0IiwiY2xhc3NlcyIsImNsc3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiaXNSZXF1aXJlZCIsImV4dHJhU21hbGwiLCJmb250U2l6ZSIsInNtYWxsIiwibWVkaXVtIiwibGFyZ2UiLCJJY29uIiwiZm9udEljb25DbGFzcyIsInNpemUiLCJmb250SWNvbkNvbG9yIiwiY29sb3IiLCJkZWZhdWx0UHJvcHMiLCJvbmVPZiIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImFsaWduSXRlbXMiLCJ0aXRsZSIsIkljb25UZXh0IiwiaWNvblByb3BzIiwidHlwb2dyYXBoeVByb3BzIiwib2JqZWN0IiwiZEJsb2NrIiwiSW1hZ2UiLCJzcmMiLCJzcmNTZXQiLCJhbHQiLCJsYXp5IiwibGF6eVByb3BzIiwiYm9vbCIsInRleHREZWNvcmF0aW9uIiwiZm9udFdlaWdodCIsImljb24iLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsIkxlYXJuTW9yZUxpbmsiLCJjb21wb25lbnQiLCJ2YXJpYW50IiwiaHJlZiIsImNoaWxkcmVuIiwiYm90dG9tIiwicmlnaHQiLCJTY3JvbGxUb3AiLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsImRpc2FibGVIeXN0ZXJlc2lzIiwidGhyZXNob2xkIiwiaGFuZGxlQ2xpY2siLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiQ291bnRVcE51bWJlciIsInN0YXJ0IiwiZW5kIiwic3VmZml4IiwicHJlZml4IiwibGFiZWwiLCJ0ZXh0Q29sb3IiLCJsYWJlbENvbG9yIiwidmlzaWJpbGl0eVNlbnNvclByb3BzIiwid3JhcHBlclByb3BzIiwiY291bnRXcmFwcGVyUHJvcHMiLCJjb3VudE51bWJlclByb3BzIiwibGFiZWxQcm9wcyIsInZpZXdQb3J0RW50ZXJlZCIsInNldFZpZXdQb3J0RW50ZXJlZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRWaWV3UG9ydFZpc2liaWxpdHkiLCJpc1Zpc2libGUiLCJudW1iZXIiLCJEZXNjcmlwdGlvbkN0YSIsInN1YnRpdGxlIiwicHJpbWFyeUN0YSIsInNlY29uZGFyeUN0YSIsImFsaWduIiwidGl0bGVQcm9wcyIsInN1YnRpdGxlUHJvcHMiLCJidXR0b25Hcm91cFByb3BzIiwicHJpbWFyeUJ1dHRvbldyYXBwZXJQcm9wcyIsInNlY29uZGFyeUJ1dHRvbldyYXBwZXJQcm9wcyIsInVzZVRoZW1lIiwiaXNTbSIsInVzZU1lZGlhUXVlcnkiLCJkZWZhdWx0TWF0Y2hlcyIsImp1c3RpZnlHcmlkIiwibm9kZSIsImNpcmNsZSIsInNxdWFyZSIsIkljb25BbHRlcm5hdGUiLCJzaGFwZSIsInVzZUJhY2tncm91bmRTdHlsZXMiLCJiYWNrZ3JvdW5kQ2xhc3NlcyIsInJlZCIsInBpbmsiLCJwdXJwbGUiLCJkZWVwUHVycGxlIiwiYmx1ZSIsImxpZ2h0Qmx1ZSIsImN5YW4iLCJ0ZWFsIiwiZ3JlZW4iLCJsaWdodEdyZWVuIiwibGltZSIsInllbGxvdyIsImFtYmVyIiwib3JhbmdlIiwiZGVlcE9yYW5nZSIsImJyb3duIiwiZ3JleSIsImJsdWVHcmV5IiwiaW1hZ2VHcmlkIiwiYm94U2hhZG93IiwicGFwZXIiLCJtYXhXaWR0aCIsInZlcnRpY2FsQWxpZ24iLCJib3JkZXJTdHlsZSIsImltYWdlR3JpZEZpcnN0SXRlbSIsImltYWdlR3JpZExhc3RJdGVtIiwiZmxvYXQiLCJPdmVybGFwZWRJbWFnZXMiLCJpbWFnZTEiLCJpbWFnZTIiLCJpbWFnZTMiLCJzcmNzZXQiLCJtYXJnaW5Cb3R0b20iLCJkaXNhYmxlR3V0dGVyIiwiY3RhIiwiU2VjdGlvbkhlYWRlciIsInRpdGxlVmFyaWFudCIsInN1YnRpdGxlVmFyaWFudCIsInN1YnRpdGxlQ29sb3IiLCJvdmVybGluZSIsImZhZGVVcCIsImN0YUdyb3VwIiwidGl0bGVDbGFzc2VzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4Iiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsInpJbmRleCIsInN3aXBlclNsaWRlIiwic3dpcGVyTmF2IiwianVzdGlmeUNvbnRlbnQiLCJjYXJkU2hhZG93IiwiaW1hZ2UiLCJvYmplY3RGaXQiLCJTd2lwZXJJbWFnZSIsIml0ZW1zIiwibmF2aWdhdGlvbkJ1dHRvblN0eWxlIiwiaW1hZ2VDbGFzc05hbWUiLCJ1c2VFZmZlY3QiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInBhZGRpbmdCb3R0b20iLCJTd2lwZXJOdW1iZXIiLCJudW1iZXJQcm9wcyIsImlzTWQiLCJwYWdpbmF0aW9uIiwiZWwiLCJ0eXBlIiwiY2xpY2thYmxlIiwiYXV0b3BsYXkiLCJkZWxheSIsIlR5cGVkVGV4dCIsInR5cGVkUHJvcHMiLCJmbGV4RGlyZWN0aW9uIiwiZXhwYW5kT3BlbiIsImRhcmsiLCJsaXN0SXRlbSIsIkFjY29yZGlvbiIsInRleHRQcm9wcyIsImxpbmtQcm9wcyIsImlkIiwibGluayIsImFycmF5Iiwid2l0aFNoYWRvdyIsIm5vU2hhZG93Iiwibm9Cb3JkZXIiLCJub0JnIiwibGlmdFVwIiwiY29udGVudCIsImNlbnRlciIsIkNhcmRCYXNlIiwiY2FyZENvbnRlbnRQcm9wcyIsIkNhcmRDYXRlZ29yeSIsImZvbnRXZWlnaHQ3MDAiLCJoZWFkaW5nIiwiY2F0ZWdvcnlJY29uQnV0dG9uIiwic3ViaGVhZGluZyIsIkNhcmRDYXRlZ29yeUxpbmsiLCJpY29uQWx0ZXJuYXRlUHJvcHMiLCJkb3QiLCJtYXJnaW5SaWdodCIsImRvdEJpZyIsImRvdFNtYWxsIiwiam9iVGl0bGUiLCJkb3RNYXJnaW4iLCJtYXJnaW4iLCJDYXJkSm9iIiwiYmFkZ2VDb2xvciIsImJhZGdlVGl0bGUiLCJqb2JMb2NhdGlvbiIsImpvYlR5cGUiLCJqb2JEYXRlIiwiY29tcGFueUxvZ28iLCJjb21wYW55TmFtZSIsImNvbXBhbnlBdmF0YXIiLCJDYXJkSm9iQ29tcGFueSIsImpvYnNDb3VudCIsImNvbXBhbnlJbmZvIiwiY2FyZEpvYk1pbmltYWxCb2R5IiwiQ2FyZEpvYk1pbmltYWwiLCJzaG93QXJyb3ciLCJib3JkZXJSaWdodCIsInRhZyIsInRleHRXaGl0ZSIsIkNhcmRKb2JUYWciLCJmZWF0dXJlQ2hlY2siLCJDYXJkUHJpY2luZ1N0YW5kYXJkIiwicHJpY2VDb21wb25lbnQiLCJmZWF0dXJlQ2hlY2tDb21wb25lbnQiLCJmZWF0dXJlcyIsImRpc2NsYWltZXIiLCJkaXNjbGFpbWVyUHJvcHMiLCJmZWF0dXJlVGl0bGVQcm9wcyIsIm1lZGlhIiwiQ2FyZFByb2R1Y3QiLCJtZWRpYUNsYXNzTmFtZSIsImNhcmRDb250ZW50IiwibWVkaWFDb250ZW50IiwiYW55IiwidGV4dEJsdWUiLCJpbWdGbHVpZCIsInBiXzAiLCJwYl9wdF8wIiwicGFkZGluZ1RvcCIsIkNhcmRQcm9tbyIsInRpdGxlQ29sb3IiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUHJvcHMiLCJDYXJkUmV2aWV3IiwiYXV0aG9yUGhvdG8iLCJhdXRob3JOYW1lIiwiYXV0aG9yVGl0bGUiLCJ0ZXh0VmFyaWFudCIsImxpc3RJdGVtUHJpbWFyeVR5cG9ncmFwaHlQcm9wcyIsImxpc3RJdGVtU2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzIiwic2NoZW1hIiwiZnVsbG5hbWUiLCJwcmVzZW5jZSIsImFsbG93RW1wdHkiLCJtZXNzYWdlIiwibWF4aW11bSIsImVtYWlsIiwiQ29udGFjdEZvcm0iLCJmb3JtU3RhdGUiLCJzZXRGb3JtU3RhdGUiLCJpc1ZhbGlkIiwidmFsdWVzIiwidG91Y2hlZCIsImVycm9ycyIsInZhbGlkYXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwZXJzaXN0IiwidGFyZ2V0IiwibmFtZSIsImNoZWNrZWQiLCJ2YWx1ZSIsImhhc0Vycm9yIiwiZmllbGQiLCJEZXNjcmlwdGlvbkxpc3RJY29uIiwiZ3JpZEp1c3RpZnkiLCJvdmVyZmxvdyIsImNvbG9yRGVmYXVsdCIsImhlcm9XcmFwcGVyIiwiaGVyb0NvdmVyIiwib3BhY2l0eSIsImhlcm9CZyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsIm5vQ292ZXJPcGFjaXR5IiwiSGVyb0JhY2tncm91bmQiLCJkaXNiYWxlQ292ZXJPcGFjaXR5IiwiYmFja2dyb3VuZEltZyIsImJhY2tncm91bmRQb3NpdGlvbiIsImNvbnRlbnRTZWN0aW9uQ2xhc3NOYW1lIiwidXNlQ3VzdG9tU3R5bGVzIiwiY292ZXJCZyIsImJhY2tncm91bmRJbWFnZSIsImN1c3RvbUNsYXNzZXMiLCJoZXJvIiwibGF5b3V0IiwiY29udGVudFdpZHRoIiwiZG93biIsImhlcm9MZWZ0U2lkZSIsImhlcm9SaWdodFNpZGUiLCJmbGV4IiwiaGVyb0ltYWdlQ29udGFpbmVyIiwiaGVyb0ltYWdlIiwic2hhcGVPdXRzaWRlIiwiY2xpcFBhdGgiLCJIZXJvU2hhcGVkIiwibGVmdFNpZGUiLCJyaWdodFNpZGUiLCJpbWFnZVdyYXBwZXIiLCJtYXhIZWlnaHQiLCJjb3ZlciIsIkhlcm9TaWRlSW1hZ2UiLCJpbWFnZVNyYyIsImltYWdlU3JjU2V0IiwicmV2ZXJzZSIsIkhlcm9TaW1wbGVCYWNrZ3JvdW5kIiwidXNlQmFja2dyb3VuZCIsIk1hcCIsInpvb20iLCJwaW5zIiwiTCIsInJlcXVpcmUiLCJEZWZhdWx0IiwicHJvdG90eXBlIiwiX2dldEljb25VcmwiLCJtYXJrZXJJY29uMngiLCJtYXJrZXJJY29uIiwibWFya2VyU2hhZG93IiwibWVyZ2VPcHRpb25zIiwiaWNvblJldGluYVVybCIsImRlZmF1bHQiLCJpY29uVXJsIiwic2hhZG93VXJsIiwiUmVhY3RNYXAiLCJUaWxlTGF5ZXIiLCJNYXJrZXIiLCJpIiwibG9jYXRpb24iLCJ5IiwieCIsImZvbnRGYW1pbHkiLCJQYXJhbGxheCIsImphcmFsbGF4RWxlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJqYXJhbGxheCIsInNwZWVkIiwiZnVsbFdpZHRoIiwiZGlzYWJsZVBhZGRpbmciLCJuYXJyb3ciLCJTZWN0aW9uIiwiYWx0ZXJuYXRlIiwiaW5uZXIiLCJpbm5lck5hcnJvd2VkIiwiU2VjdGlvbkFsdGVybmF0ZSIsImlubmVybmFycm93ZWQiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0Iiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiU0lHTlVQIiwiTE9HSU4iLCJSRVNFVFBBU1NXT1JEIiwiRk9SR09UUEFTU1dPUkQiLCJHRVRVU0VSREVUQUlMUyIsIlVTRVJERVRBSUxTVVBEQVRFIiwiVVNFUlBBU1NXT1JEVVBEQVRFIiwiVVNFUkZPUkdPVFBBU1NXT1JEVVBEQVRFIiwiQ09VUlNFTElTVCIsIkNPVVJTRURFVEFJTFMiLCJDT1VSU0VERVRBSUxTQVVUSCIsIkFQUExZQ09VUE9OIiwiTUFLRVBBWU1FTlQiLCJQQVlNRU5USElTVE9SWSIsIlBVUkNIQVNFRENPVVJTRSIsIkNFUlRJRklDQVRFUkVRVUVTVCIsIkJMT0dMSVNUIiwiQkxPR0RFVEFJTCIsIkdFVFVOSVZFUlNJVFkiLCJHRVRDT1JQT1JBVEUiLCJDT05UQUNUX1VTIiwiUFJFU1NfUkVMRUFTRSIsIlBSRVNTX0RFVEFJTFMiLCJHRVRfTE1TREFUQV9DT1VSU0UiLCJHRVRfTE1TREFUQV9DQVRFR09SWSIsIk5FV1NMRVRURVJTVUJTQ1JJQkUiLCJHRVRTT0NJQUxMSU5LRVMiLCJHRVRQQVlNRU5UQ0VSVElGSUNBVEVERVRBSUxTIiwiTUFLRVBBWU1FTlRDRVJUSUZJQ0FURSIsIkNFUlRJRklDQVRFX0RBVEEiLCJHRVRfVEVBTV9EQVRBIiwiQXBwQ29uZmlnIiwiQVBJX0VORFBPSU5UIiwicHJvY2VzcyIsIklNQUdFX1VSTCIsIlNJVEVfTkFNRSIsIkNhbmNlbFRva2VuIiwiQXhpb3MiLCJjYW5jZWwiLCJjb25zdHJ1Y3RvciIsImhvc3QiLCJfcG9ydGFsR2F0ZXdheSIsInZlcnNpb24iLCJfYXBpVmVyc2lvbiIsImVyciIsInNvdXJjZSIsImNhbmNlbFRva2VuIiwidG9rZW4iLCJlbmRwb2ludCIsImF1dGhlbnRpY2F0ZWQiLCJhdXRoVG9rZW4iLCJxdWVyeU9wdGlvbnMiLCJib2R5IiwicmVzcG9uc2VUeXBlIiwiaGVhZGVycyIsInN0b3JhZ2VTZXNzaW9uIiwiQXV0aG9yaXphdGlvbiIsInRvTG93ZXJDYXNlIiwicmVzcG9uc2UiLCJyZXF1ZXN0IiwicGFyYW1zIiwiZXhlY3V0b3IiLCJjIiwib2siLCJzdGF0dXMiLCJlcnJvck9iamVjdCIsImNvZGUiLCJTdWNjZXNzSGFuZGxlckhlbHBlciIsImlzQ2FuY2VsIiwiZXJyb3IiLCJtZXNzYWdlcyIsImVycm9ySGVscGVyIiwiRXJyb3JIYW5kbGVySGVscGVyIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInJhd0Vycm9yIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJzZXRFcnJvciIsInJhd0RhdGEiLCJzZXRTdWNjY2VzcyIsImNlcnRpZmljYXRlX3NlYyIsIm1pbkhlaWdodCIsImNlcnRpZmljYXRlX2JveCIsImltZyIsInRleHRBbGlnbiIsImhlYWRpbmcxIiwibGV0dGVyU3BhY2luZyIsImxhYmVsZXh0cmEiLCJoZWFkaW5nMyIsImhlYWRpbmc0IiwiaGVhZGluZzUiLCJmb250U3R5bGUiLCJib3JkZXJUb3AiLCJzZWN0aW9uSGVhZGVyIiwic2lnbiIsInNpZ25fZGl2IiwiYmFubmVyQm90dG9tIiwid3JhcHBlclNlY3Rpb24iLCJzZWN0aW9uV3JhcHBlciIsImJvcmRlckJvdHRvbSIsImJsb2djaGFpbl9oZWFkaW5nIiwiZm9udFNpemVfMTgiLCJjb250ZW50U2VjdGlvbiIsImxpbmVIZWlnaHQiLCJwYWRkaW5nTGVmdCIsImltYWdlTGFicyIsInN1YlRpdGxlIiwiY29tbW9uTGlzdCIsInNlY3Rpb25DZXJ0aWZpY2F0ZSIsImdldFRlbXBsYXRlRGF0YSIsInNldEdldFRlbXBsYXRlRGF0YSIsImdldERhdGEiLCJmaWx0ZXIiLCJlIiwidGl0bGVTbHVnIiwiYmxvY2tUaXRsZTUiLCJibG9jazQiLCJSZWFjdEh0bWxQYXJzZXIiLCJibG9ja0ltYWdlMSIsImltZ19mbHVpZCIsImJsb2NrVGl0bGUxIiwiYmxvY2sxIiwicGJfNjAiLCJibG9ja1RpdGxlMiIsIm9yZGVyX3NwXzMwIiwiYmxvY2syIiwiYmxvY2tJbWFnZTIiLCJibG9ja1RpdGxlNCIsImJsb2NrMyIsInNlY3Rpb24iLCJzZWFyY2hJbnB1dENvbnRhaW5lciIsInNlYXJjaEJ1dHRvbiIsIm1pbldpZHRoIiwiSGVybyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvY2VydGlmaWNhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NlcnRpZmljYXRlLmpzXCIpO1xuIiwiLyoqXHJcbiAqIENhdXRpb246IENvbnNpZGVyIHRoaXMgZmlsZSB3aGVuIHVzaW5nIE5leHRKUyBvciBHYXRzYnlKU1xyXG4gKlxyXG4gKiBZb3UgbWF5IGRlbGV0ZSB0aGlzIGZpbGUgYW5kIGl0cyBvY2N1cnJlbmNlcyBmcm9tIHRoZSBwcm9qZWN0IGZpbGVzeXN0ZW0gaWYgeW91IGFyZSB1c2luZyByZWFjdC1zY3JpcHRzXHJcbiAqL1xyXG4gaW1wb3J0IENlcnRpZmljYXRlIGZyb20gJy4uL3NyYy92aWV3cy9DZXJ0aWZpY2F0ZSc7XHJcbiBpbXBvcnQgeyBBcGlIZWxwZXIgfSBmcm9tIFwiaGVscGVyXCI7XHJcbiBpbXBvcnQgeyBBcGlSb3V0ZXMgfSBmcm9tIFwiY29uZmlnXCI7XHJcblxyXG4gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vIEZvciBHZXQgQ01TIERhdGFcclxuICBjb25zdCByZXNwb25zZUNNUyA9IGF3YWl0IG5ldyBBcGlIZWxwZXIoKS5GZXRjaEZyb21TZXJ2ZXIoXHJcbiAgICBBcGlSb3V0ZXMuRlJPTlRfUEFHRV9EQVRBLnNlcnZpY2UsXHJcbiAgICBBcGlSb3V0ZXMuRlJPTlRfUEFHRV9EQVRBLnVybCxcclxuICAgIEFwaVJvdXRlcy5GUk9OVF9QQUdFX0RBVEEubWV0aG9kLFxyXG4gICAgQXBpUm91dGVzLkZST05UX1BBR0VfREFUQS5hdXRoZW50aWNhdGUsXHJcbiAgICB1bmRlZmluZWQsXHJcbiAgICB1bmRlZmluZWQsXHJcbiAgICB1bmRlZmluZWRcclxuICApO1xyXG4gIGxldCBjbXNEYXRhID0gW107XHJcbiAgaWYgKHJlc3BvbnNlQ01TICYmICFyZXNwb25zZUNNUy5pc0Vycm9yKSB7XHJcbiAgICBjbXNEYXRhID0gcmVzcG9uc2VDTVMuZGF0YS5kYXRhO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNtc0RhdGFcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxMCxcclxuICB9XHJcbn1cclxuXHJcbiBleHBvcnQgZGVmYXVsdCBDZXJ0aWZpY2F0ZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jhbm5lci1zaGFwZS0zNTZkMGI3MDFlYWYwYmRhZjdhOGRhYTI4M2I5MDJkMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvY2VydGlmaWNhdGUtYjgwMjIxN2YxYjM1MTNlZmZmY2QzYzkwNmZhYjQ0ZWQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFCU0NBTUFBQUFoRlhmWkFBQUM5MUJNVkVWTWFYRXplYWsyZjdJNGc3ZzNnN2N1YTVnemVLZzhoSm8zZ3JZNGc3YzNnclUwZ0xJMmZyRTBkYUF1YkpjMmdiUXdkNlF6ZUtrMmdMTXRkNXN4ZEtJdWE1ZzFmckEyZjdJeWRhTTBlNncyZnE0MWZLMDFlcW8zZ3JndWJKZ3RhNWN4ZEtJMWY3QXlkYVF5ZGFNeGM2RXViSmd2Ykprd2NaNHViWmt3Y0p3dWJaZ3ViSmN5ZHFVeWRLSXhhcGd1YkpjdGJKY3ViWmN1YkpjdmJKWXViSmN2YlprdWJKY3RiSmN0YlpjdWJKZzJmN0F1YkpjcmJaY3ViSmN1YkpjdWE1ZzNnclkwZnE4dWJKY3ViSmRFa2RFd2hzdzZpODh2aHN3dWhjc3VoTXRCak1ndGhNc3JnOHNyZ3NzNmlzOHFnY3M4aTlBOWlNWXRnOHNwZ2Nvb2dNbzdoY01uZ01vbmY4b2xmc280Z3I4a2ZjazVpTThqZk1rNGlNOGhlOGsxZnJvN2l0QWdlc2syaHM4ZWVjZ3pmTGNvZnNzZGVNZzBoYzRjZDhnMmhjc3hlTFFiZHNnWmRjZ3hlTEltZmNzemhNMHZkYTR4Z2NremhNNHhnODR3ZjhZeGdzNHVkS3N2ZmNRdWNxaFVuZFJPbWRNMWZLMHdjWjh2YjV3MGVxcFFtOU16ZUtoWG9OVmNwZFl5ZEtOV245VlpvdFZLbHRKRmpzSXdjSjFSbXM5T2xzbExtdEgvLy84K2tjOWVwZFl6ZDZkYm85VkhrTU0yZjdGSG1OQkNsTTh5ZHFWY3BOWTlocm8zZ0xNOWhMY3plYWxRbWN3M2ZhNDZmN0E4Z0xNeGM2STNlYWd5YzZGSWxkSk1sOUpTbk5SU250Tk5sOUpQbk5KRmk3NVVuTTlab2RWS2tzZzhrTTQ1amMwOWU2WkhsdEZCazg4M2diUkJoN3BEazlFd2NhQnpuNzg0ZzdkS2tjWTJpODFPbTlNN2o4NUxsYzgxaXMwOWc3UTRnclkvajlBMGVxeEttZEZGbHRCRWpjWGY2ZkZJbWRCQ2lMeEpsOUZHbE5GQmk3OHlpTXhWbmRFdmJwbzZqczc0K3Z4K3BzUFAzK28va3M1SGtjcEdtTkNqd2RaQ2tORE0zZWhZb05KRWxzK2x4Tmt4aDh4SGtzMCtqZEMxemQ1TGc2cisvdi9IMnVmejkvbzNqTTN0OC9lZHZkTS9rODlUaDYxT2lMQlNqYlprbGJhVHQ5QmZwdGRqbUwxQWljQkhqOGhHazlGQWdLMWRrTE5UakxSZWtyZENsYy9rN2ZNMGljeTB5OXRncDljNGpjMk50TTlEbGM4emljeGVYWm4zQUFBQVEzUlNUbE1BSERkVGI0eVBBK0x0bkVRbUM0TDJFbUhxQjdYQTBkMHNyNDc4eDQvWWQ1aTF6T2Z5UGtmMXNMVnE0TmgzRnZqeG9wUTIvU1ROdUZ6VXdGSXd4S2FlaklMcElCRVY5d0FBQmhWSlJFRlVlRjZzMU5keUZFY1lCZUJlb1FJaFJBa0xsUkRHcmhJZ1kzQkpMOENWZUt6dXlYRnp6amtuNVp4enp1U2NnM1BPOGNLenU3MEprTzBMZnhkVFUvL3BNOXZUdTdYZ2Y2S3FPVlRiOVg3dG9SclZFZkJmMUhUVmpaY2NyVC8yYnkxVlY5MjhZdHk5WmJWdXVjZHo5MGZyRzhEQmpsOXBWQXBiT3N0dm1NdXZWZ2FOWFNmQUFkNnBHeHB5Nnl4ZjVwaDQzcFMvNGYzdW9hR20ycmR1NzJTOXh6T3ZNeW1rWkZxL3B0RHJrOTBtaFc3ZTR6bDdITHpoeEdXUFIyMHhtU3hKL1ZxbGRHNW05WGhhVk9BMURhZHNOaDNQdTVMMk42UXRQTy8zMkpwcVFCVlZrMjBveS9QaTJzMjNXRXZ5ZkhiZTF0aGFkVlF0dHZtN0xsZjY1Z0dtWEs2N1h0dXB5b003SFFobVhkTFM4b0dXSk5lT0ozQzVmRzVYQ0VKbmtlejMvb0Zkc3ZnSjRsMkFOWndockpLay83T1NYYSszVncyV0pNbEtuR2tvYm91WWs2VDBUeVgzMGtsT1VuVEQ5SEo1cXBja0wzRVcvdzRYRjNYZDBGR3l3WFVyc3RyY2xWc3F6NVBkL3NYRll5RG5QZHJMY1FPRG1HT0s0N0laYjRDbWlibU1uK01ZUnpGWjVqZzMzWkwvRUpyV2NzekhtQU55M0FSQksvSVh0Y2lKeThWc2l0UFNkRTN1dUh4em91Z29qY1VkcjgvMzJhdG56L2V2M2YvSzV3dHB4VVRwY2FJNDV6dXNWRHBZdFppK2pnMG9VOWIzeDc0aDcrbjlBQnZZRVplS2FWcTBzaDBBdExLc0Z0cU5CZGVUME1yU3p3d2xxOSt4NnhBTzR0Z090U3piQ2pyTlFRaU52UVViVUV1YnZ6QlVlR3cyNnlEQ3NSSENvTGtUSERhN0lkT0xJVGhzL2dIdkNoc3poMkNpbUU4cGVSczQ3Y3hBTkkwbFlOQjV5MURsanBPRjBJaHpCRFBPWm5ET3FZWWJlR0tFQ2JQelduWGx1ZFBwaHc1YzJZQnE1emx3WHBoSWJPNFZEQ1owZ25QZlVPMVR3Wm9Zd0FzMkV4UENlZEF1OURBamZRVWp6SVRRYjNqTmowS0cyU2d0NkJIYVFVZFl6V3orWG1Ca3RPSHdhblhqYVNUY3d3emlCY3VNT3R3Qm1xUHJUT3hGUVIvRFJLS1BxeXVyMGFpVzZjVUxZc3g2dEJtMGpYcFIvQVVXUjZIUnE5V1ZXNk1SaElxNWpMeWpiYUNURENpanlZSk5wQ2FqZHlvYlAvZVR3MGlleEJBS2tKM2dBNUtjUWIyekJYc0lCY2tuK3hWdjhqa1pTYUVGSEUrakZFbGVBRWZheVJVME1vdU5vQm1CL0w1MEFpL0hTTElIeGNycEN2bmhTUUF1YWtLcDJDL1liQ3lsSmpYUlZ5L3ozK0t2L1JyTmNDbytXVXpsVkVoektmZm5UUW54ZU45ZldGODhmaU5DVWRTVHNhdWZhQ2hLV0luSGV5c3lnZnBJcWFnb2FrVyt2VjIwSjh1eWw2VHlOS0VaV1Y0b1JTUHlDa1dwZ09MU2JrQ09iVDhvMnI2dGxHNThIUXF1ZjZPMHY1MHRCN0pNN0Y0RU9SZDJkeC9LMHcvS0hzVmtMUGFvWXJ3Z1AveTdrcnIzU1NNQTR6aitPQmdtallreGNkSUpReVFSS2dnMnZpWDlIZGRpOVVCYjI5THJLUjdDVlZFRUVYV29qVWtYTnlmVE5ERTE0VzlnYkhKTnVoakRldHROM1p2Yk92ZE9xQ0QzSnAvOWwrL3dKRSs5UGtZR2p4L2Zxa3lzM1Myck1vek0vbzIxMDZyZk1VSU5vNmhWcXorZXUvaGQxYzR4VGcwVEFmeTVrVis0VUc2K0l0aEhUVTl3b1dteHVLTmJUZnVDU2ZvdkJDeHE3RXRIcXZZTDRTbTZGOEdWeHNTWEhNUTA3VE9pMURLdFp4aldhYUl5aTRDWFdqeFBjY1V3OFdWYk1ZWTV3eEMxbXpFeVhNSldrbGxwUmxvaStLa29xNjlzeEJUbEVsRjZhQXhZVWJqWE5saGxEWmlsRG5NNFU1U2xONWJpUnNSSG5ieDNtYmVXakVoNG1FeWl1SkRsNVhjV1ZtWDVHdk5rRmdMV1pNNXF3c29wNC9BV2ZMaFUxY1I3azFWVnZjWUNXUmtPSTZYeTVnbW5waENZSWt2enVOWXpIem9zcTJvTmsyUnRTczhraGZVT2ZISURnUjZ5c1lCYU1wbDR1RWdrMlUvb0pUczlBYVRTd21hN2RUNjlnZUFFMlpwRWpVc24yaWVKTkhlS2ZySTNFY0FHSjJaYU5nVnVDOEVCY3RDTGM1N1A1dTVsZWQ2SU9Ca0lZa3VRTXJtbWpDaHM0VmtmT2VySHFTQmtQelpsaGUwNlJzbFozek1qazJzc2NxS3dZMFJjaktLK0xXYnpkN0tpSGhrbmNzL3NpRkorVjVlWHhEMzRCOG5WdUpFcEdKTm14TjJnSDN2U3ZwN0o3MHRGK0QxRWo4cVVKRDFUa0VyQU5EMkdad1RGZy9MdWJ2bWdpQkczU092ZGxzcUZRcmtFekpDTDFyc3RsblZGUk9peFpvRERTdVhRRkhFU3dWR2xjdVFjTWIvYjQyTmdqTG93aDVNVERGRTN2TkI1cVN0UklFcmRDUUVoNnBMUFI5MmFuU1ViL3dBSWhsZEFhRE1wR2dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJrQUFBQXBDQVlBQUFEQWs0TE9BQUFGZ1VsRVFWUjRBYTFYQTVCaldSVE4yb1cxN2QzWWFadHIyOTYySFV6YkROcGpzelcyNG1SdDI4cDQ3djd6cS9iWFp0cnAvbFduWHIzMzdqM25QQ2U4NU5jeXBnU0ZkdWdDcFc1WW9EQU1SYUlNcVJpNmFLcTVFM1lxRFFPM3FBd2pWV3JEOE5jcS9SQnB5a2Q4b1pVYi9rYUp1dG93OHIxYVA5SUkwV21MS0xJc0p5djF3L2txdzlDaDJNWWRCKysxMk9ueGVlL1FNd3ZmNC9Eay9MZnAvaTRueFRYdE9vUTRwVzVBajd3cGljaTFBOWVyZEFOMk9INjR4OE9TUDlqM0Z0M2I3YVdrVGcvRm05MXNpVHJhMGY5b241c1FyOUlOZWpINkNVVVVwYXZqRk5xMUIrT2FkaHhtbmZhOFJmRW1OOFZOQXNRaFBxRjU1eEhrTXp6M2pTbUNoV1U2ZjcvWFpLTkgrOStoQkxPSFlvenVLUVB4eU1QVUtrclgvSzB1V25mRmFKR1MxUVBSdFpzT1B0cjNOc1cwdXloNk5OQ09rVTNZeitiWGJUM0k4RzN4RTVFWExYdENYYmJxd0NPOXpQUVlQUlRaNXZJRFhEN1UrdzdyRkRFb1VVZjdpYkhJUjR5NmJMVlBYcno4SlZaRXFsMTN0cnh3dWUvdURpdmQzZmtXUmJTNi9JQTJiSUQ0dWswVXBGMU44cUxsYkJsWHM0RWU3SExUZlYxajU0QVB2T0RuU2ZPV0JxdEtWdmpnTEt6RjVZZEVrNWV3UmtHbEswaTMzRW9mZmZjN0hUNTZqRDcvNlUrcUgzQ3g3U0JMTm50SDVZSVB2T0RueWZJWFpZUlZEUHFnSHRMczVBQkhEM1l6THVlc3BiN3Q3OUZZMzREak13clZyY1R1d2xUNTVZTVB2T0JuUnJKNFZYVGRObll1ZzV1Y0hMQmpFcHQzMDcwMUEzVHMrSEVhNzN1NmRUM0ZOV3dmbFk4NmVNSFBrK1l1K2k2cHpVcFJyVzdTTkRnNUpIUjRLYXBtTTVXdjJFOFRmY2IxSG9xcUhNSFUrdVdERDd6ZzU0bXo1LzJCU25pemk5VDFEZzRRUVhMVG9HTkNrYjZ0YjFOVStRQWxHcjErK2VBRHJ6aG4vdThRMllaaFFWbFo1K0NBT3RxZmJobWFVQ1MxZXpORlZtMmltRGJQbVBuZzV3bXorZ3doK29IRGNlMGVVdFE2T0dESXlSMHVVaFVzb08zdmZEbW1nT2V6SDBtWk41OXg3TUJpKytXREwxZy9lRWlVM2F2bGlkTzY3MWJrTGZ3Ync1WFYyUDhQem8weWR5NHQyLzBldTMzeFlTT01PRDhoVGY0Q3JCdEdNU29YZlBMY2hYK0owcnVTZVB3M0xaZUswanVQSmJZenJoa0gwaW83QjNrMTY0aGlHdmF3aE9LTUxrclFMeVZwWmc4ckhGVzdFMnVIT0w4ODhJQlBsTloxRlB6c3RTSk02OTRmV3I2UndwdmNKSzYwKzBIQ0lMVEJ6WkxGTmR0QXpKYW9oemU2MFQ4cUJ6eWg1WnVPZzVlN3V3UXBwb2ZFbWYyKytEWXZteVNxR0J1S2FpY0YxYmxRamh1SGR2Q0lNdnA4d2hUVGZaekk3UmxkcHd0U3pMK0YxK3drZFoyVEJPVzJnSUY4OFBCVHpEL2dwZVJFQU1FYnhuSmNhSkhOSHJwemppMGdRQ1M2aGRrRWVZdDlERi8ycVBjRUM4Uk0yOEh3bXIzc2ROeWh0MDBieUF1dDJrM2d1ZldOdGd0T0VPRkdVd2NYV05EYmROYnBnQkd4RXZLa09Rc3hpdkp4MzNpb3cwVnc1UzZTVlRycFZxMTF5c0EyUnA3Z1RmUGZrdGM2emh0WEJCQythZFJMc2hmNnNHMlJmSFBaNUVBYzRzVlo4M3lDTjAwRmsvNGtnZ3U0MFpUdklFbTVnMjRxdFU0S2pCcngvQlRUSDhpZlZBU0FHN2dLcm5XeEpEY1U3eDhYNkVjY3pobTNvNllpY3ZzTFhXZmgzQ2gxVzBrOHgwblhGKzBmRnhndDRwaHo4UXZ5cGl3Q0NGS01xWENucVhFeGpxMTBiZUgrVVVBNytuRzZtZEcvUHUwZjNMZ0ZjR3JsMnMwa05OanBtb0o5bzRCMjlDTU84ZE1UNFE1b3g4dWl0RjZmcXNySk9yOHFud05iUnp2NmhTbkc1d1ArNjRDN2g5bHAzMGhLTnRLZFdqdGRrYnVQQTE5bko3VHozelIvaWJnQVJiaGI0QWxoYXZjQmVibVRIY0ZsMmZ2WUVuVzBveDl4TXhLQlM4YnRKK0tpRWJxOXpBNFJ0aFFYRGhQYTBUOVRFZTY5Z1d1cHdjNnVCVXBocXVYZ2YrL0ZySWp3ZUhRUzQvcGR1TWU1RVJVTUhVZDl4djhaUjk4Q3hrUzRGMm4zRVVyVVoxMEVZTnc3QldtOXgxR2lQc3NpM0dnaUdSREtXUllaZlhsT04rZGZOYk0rR2dJd1lkd0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDa0FBQUFwQ0FRQUFBQUNhY2g5QUFBQ01VbEVRVlI0QWUzU2hZN2pRQkFFMEFvei9mOS9IVE16aGcxenJkS1VySmJkeCtLZDJuRDhWTnVkZnNML1RoLy8vZHlRTjJUSDZmM3kvQkdwQzM3OXJWK1MrcXFldEJPeEltTlFYTDhKQ0FyMlY0aU1RWEhHTkp4ZUNmWlhoU1JCY1FNZnZrT1dVZHRmemxMZ0FFTm1aRGNtbzJUVm10OE9TTTJlWHhCcDNEakhTTUZ1dHFTN1NibWVtekJpUit4cEtDTlVJUmtka2tZeGhBa3lHb0J2eVFGRUpFZWZ3U21tdkJmSnVKNmFLcUtXbkFrdkdaT2FaWFRVZ0ZxWVVMV05TSFVja1p1UjFISUlpbVVFeHV0Unh3ek9MUk9JRzR2S21DS1F0MzY0bUlsaFN5ekFmMW05bEhaSEpacmxBT01NenRSUmlLaW1wL3JwZEpEYzlBd3J5NXhUWkN0ZTdGSHR1Uzh3SmdlWUdyZXgyOHhOVGQwODZEaWs3dlVNc2NRT2E4eTREb0d0Q0NTa0FLbE53cGdOdHBoanJDNk1JSFVrUjZZV3h4czZTYzV4cW4yMjJtbUNSRnpJdDhsRWRLeCtpa0N0ZzkxcVMyV3B3VmZCZWxKQ2lRSnd2eml4Zkk5Y3haUVdnaVNKZWxLbndCRWxLWXRET2IyTUZiaG1VaWdiUmVRQlYwQ2c0K3FNWFN4WFN5R1VuNFViRjhsKzdxZFNHblRDMFhMQ21haElnVUhMaExPaHBWQ3R3NEN6WVh2TFFXUWJKTm14b0NzT0tBeFNnQkpubzc1YXZvbGtSdzhpSUFGY3NkYzAyZTlpeUNkOHRId21lU1NvS1Rvd0lndnNjU0daVU9BN1B1Q041YjJCWDltUU03UzB3WWhNTlU3NHpnc1BCajNIVTd3Z3VBZm54eGpGUUdCRTZwd04rR2pNRTl6SFk3ekdwOHdWeE1TaFlYOU5YdkVXRDNIYndKZjRnaU80Q0ZJUXhYU2NIMS9UTSswNGtrQmlBQUFBQUVsRlRrU3VRbUNDXCIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgY29sb3JzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbiAgYm9yZGVyOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg1KSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIGJvcmRlcjogJzNweCBzb2xpZCcsXHJcbiAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5kaXZpZGVyLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg2KSxcclxuICAgICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYm9yZGVyRGFyazoge1xyXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5pbmRpZ29bNzAwXSxcclxuICB9LFxyXG4gIG1vZGVUb2dnbGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogYC0ke3RoZW1lLnNwYWNpbmcoMS8yKX1weGAsXHJcbiAgICBsZWZ0OiBgLSR7dGhlbWUuc3BhY2luZygxLzIpfXB4YCxcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICB0cmFuc2l0aW9uOiBgdHJhbnNmb3JtIC4zcyBjdWJpYy1iZXppZXIoLjQsLjAzLDAsMSlgLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb2RlVG9nZ2xlckRhcms6IHtcclxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0aGVtZS5zcGFjaW5nKDMpfXB4KWAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5pbmRpZ29bOTAwXSxcclxuICB9LFxyXG4gIG1vZGVUb2dnbGVySWNvbjoge1xyXG4gICAgZmlsbDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxLzIpLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxLzIpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9XHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBkYXJrIG1vZGUgdG9nZ2xlclxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IERhcmtNb2RlVG9nZ2xlciA9ICh7IHRoZW1lTW9kZSA9ICdsaWdodCcsIG9uQ2xpY2ssIGNsYXNzTmFtZSwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgY2xhc3Nlcy5ib3JkZXIsXHJcbiAgICAgICAgICB0aGVtZU1vZGUgPT09ICdkYXJrJyA/IGNsYXNzZXMuYm9yZGVyRGFyayA6ICcnLFxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICBjbGFzc2VzLm1vZGVUb2dnbGVyLFxyXG4gICAgICAgICAgdGhlbWVNb2RlID09PSAnZGFyaycgPyBjbGFzc2VzLm1vZGVUb2dnbGVyRGFyayA6ICcnLFxyXG4gICAgICAgICl9PlxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RlVG9nZ2xlckljb259XHJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgd2lkdGg9XCIxNFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxM1wiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE0IDEzXCJcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgIGQ9XCJNNC41MjIwOCA3LjcxNzU0QzcuNTc4MiA3LjcxNzU0IDEwLjA1NTcgNS4yNDAwNiAxMC4wNTU3IDIuMTgzOTRDMTAuMDU1NyAxLjkzNDk4IDEwLjAzOTIgMS42ODk4NiAxMC4wMDc0IDEuNDQ5NjFDOS45NTgwMSAxLjA3NzI3IDEwLjM0OTUgMC43NzExNTkgMTAuNjQ3NCAwLjk5OTkyQzEyLjExNTMgMi4xMjcxNiAxMy4wNjE1IDMuODk5OTkgMTMuMDYxNSA1Ljg5MzgzQzEzLjA2MTUgOS4yOTk1OCAxMC4zMDA2IDEyLjA2MDUgNi44OTQ4NSAxMi4wNjA1QzMuOTUzMzQgMTIuMDYwNSAxLjQ5Mjg2IDEwLjAwMSAwLjg3NjcyOCA3LjI0NTI3QzAuNzk0ODQxIDYuODc5MDIgMS4yMzY2OCA2LjY1Mjg5IDEuNTUzMjEgNi44NTQ1MUMyLjQxMTA2IDcuNDAwOTUgMy40Mjk2IDcuNzE3NTQgNC41MjIwOCA3LjcxNzU0WlwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcblxyXG5EYXJrTW9kZVRvZ2dsZXIucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIHRoZW1lIG1vZGVcclxuICAgKi9cclxuICB0aGVtZU1vZGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlbWUgdG9nZ2xlciBmdW5jdGlvblxyXG4gICAqL1xyXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXJrTW9kZVRvZ2dsZXI7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0RhcmtNb2RlVG9nZ2xlcic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE5vU3NyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL05vU3NyJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICBleHRyYVNtYWxsOiB7XHJcbiAgICBmb250U2l6ZTogMTAsXHJcbiAgfSxcclxuICBzbWFsbDoge1xyXG4gICAgZm9udFNpemU6IDIwLFxyXG4gIH0sXHJcbiAgbWVkaXVtOiB7XHJcbiAgICBmb250U2l6ZTogMzAsXHJcbiAgfSxcclxuICBsYXJnZToge1xyXG4gICAgZm9udFNpemU6IDQwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgaWNvblxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEljb24gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBmb250SWNvbkNsYXNzLCBzaXplLCBmb250SWNvbkNvbG9yLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Tm9Tc3I+XHJcbiAgICAgIDxpXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgJ2ljb24nLFxyXG4gICAgICAgICAgZm9udEljb25DbGFzcyxcclxuICAgICAgICAgIGNsYXNzZXNbc2l6ZV0sXHJcbiAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgKX1cclxuICAgICAgICBzdHlsZT17eyBjb2xvcjogZm9udEljb25Db2xvciB9fVxyXG4gICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAvPlxyXG4gICAgPC9Ob1Nzcj5cclxuICApO1xyXG59O1xyXG5cclxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc2l6ZTogJ3NtYWxsJyxcclxufTtcclxuXHJcbkljb24ucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNsYXNzZXMgb2YgdGhlIGZvbnQgaWNvblxyXG4gICAqL1xyXG4gIGZvbnRJY29uQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTb3VyY2Ugc2V0IGZvciB0aGUgcmVzcG9uc2l2ZSBpbWFnZXNcclxuICAgKi9cclxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydleHRyYVNtYWxsJywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcclxuICAvKipcclxuICAgKiBDb2xvciBvZiB0aGUgaWNvblxyXG4gICAqL1xyXG4gIGZvbnRJY29uQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9JY29uJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICdub3dyYXAnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBpY29uIHRleHRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBJY29uVGV4dCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSxcclxuICAgIGNvbG9yLFxyXG4gICAgZm9udEljb25DbGFzcyxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIGljb25Qcm9wcyxcclxuICAgIHR5cG9ncmFwaHlQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdpY29uLXRleHQnLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cclxuICAgICAgPEljb25cclxuICAgICAgICBjbGFzc05hbWU9XCJpY29uLXRleHRfX2ljb25cIlxyXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgZm9udEljb25DbGFzcz17Zm9udEljb25DbGFzc31cclxuICAgICAgICBmb250SWNvbkNvbG9yPXtjb2xvcn1cclxuICAgICAgICB7Li4uaWNvblByb3BzfVxyXG4gICAgICAvPlxyXG4gICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgIG5vV3JhcFxyXG4gICAgICAgIHZhcmlhbnQ9XCJoM1wiXHJcbiAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdpY29uLXRleHRfX3R5cG9ncmFwaHknLCBjbGFzc2VzLnRpdGxlKX1cclxuICAgICAgICB7Li4udHlwb2dyYXBoeVByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSWNvblRleHQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGljb25Qcm9wczoge30sXHJcbiAgdHlwb2dyYXBoeVByb3BzOiB7fSxcclxufTtcclxuXHJcbkljb25UZXh0LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjbGFzc2VzIG9mIHRoZSBmb250IGljb25cclxuICAgKi9cclxuICBmb250SWNvbkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU291cmNlIHNldCBmb3IgdGhlIHJlc3BvbnNpdmUgaW1hZ2VzXHJcbiAgICovXHJcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgdGhlIGljb24tdGV4dFxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIEljb24gY29tcG9uZW50XHJcbiAgICovXHJcbiAgaWNvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHR5cG9ncmFwaHlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25UZXh0O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9JY29uVGV4dCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgbWFrZVN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlcyc7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgfSxcclxuICBkQmxvY2s6IHtcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBpbWFnZXNcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBJbWFnZSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IHNyYywgc3JjU2V0LCBhbHQsIGxhenksIGxhenlQcm9wcywgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGlmIChsYXp5KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnaW1hZ2UnLCBjbGFzc2VzLnJvb3QsIGNsYXNzZXMuZEJsb2NrLCBjbGFzc05hbWUpfVxyXG4gICAgICAgIGFsdD17YWx0fVxyXG4gICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgIHNyY1NldD17c3JjU2V0fVxyXG4gICAgICAgIGVmZmVjdD1cIm9wYWNpdHlcIlxyXG4gICAgICAgIHsuLi5sYXp5UHJvcHN9XHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxpbWdcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdpbWFnZScsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgYWx0PXthbHR9XHJcbiAgICAgIHNyYz17c3JjfVxyXG4gICAgICBzcmNTZXQ9e3NyY1NldH1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5JbWFnZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWx0OiAnLi4uJyxcclxuICBsYXp5OiB0cnVlLFxyXG4gIGxhenlQcm9wczoge1xyXG4gICAgd2lkdGg6ICdhdXRvJyxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gIH0sXHJcbn07XHJcblxyXG5JbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBTb3VyY2Ugb2YgdGhlIGltYWdlXHJcbiAgICovXHJcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU291cmNlIHNldCBmb3IgdGhlIHJlc3BvbnNpdmUgaW1hZ2VzXHJcbiAgICovXHJcbiAgc3JjU2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEltYWdlIHRpdGxlXHJcbiAgICovXHJcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIExhenkgbG9hZGluZyBwcm9wZXJ0aWVzXHJcbiAgICovXHJcbiAgbGF6eVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCBsYXp5IGxvYWQgdGhlIGltYWdlXHJcbiAgICovXHJcbiAgbGF6eTogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSW1hZ2UnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBBcnJvd1JpZ2h0QWx0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dSaWdodEFsdCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIFwiTGVhcm4gTW9yZVwiIGxpbmtcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBMZWFybk1vcmVMaW5rID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNvbG9yLFxyXG4gICAgY29tcG9uZW50LFxyXG4gICAgdmFyaWFudCxcclxuICAgIHRpdGxlLFxyXG4gICAgaHJlZixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIGljb25Qcm9wcyxcclxuICAgIHR5cG9ncmFwaHlQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgY2hpbGRyZW4gPSAoXHJcbiAgICA8PlxyXG4gICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnbGVhcm4tbW9yZS1saW5rX190eXBvZ3JhcGh5JywgY2xhc3Nlcy50aXRsZSl9XHJcbiAgICAgICAgdmFyaWFudD17dmFyaWFudH1cclxuICAgICAgICBjb2xvcj17Y29sb3IgfHwgJ3ByaW1hcnknfVxyXG4gICAgICAgIHsuLi50eXBvZ3JhcGh5UHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2xlYXJuLW1vcmUtbGlua19faWNvbi1idXR0b24nLCBjbGFzc2VzLmljb24pfVxyXG4gICAgICAgIGNvbG9yPXtjb2xvciB8fCAncHJpbWFyeSd9XHJcbiAgICAgICAgey4uLmljb25Qcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIDxBcnJvd1JpZ2h0QWx0SWNvbiBjbGFzc05hbWU9XCJsZWFybi1tb3JlLWxpbmtfX2Fycm93XCIgLz5cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhXHJcbiAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnbGVhcm4tbW9yZS1saW5rJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcblxyXG5MZWFybk1vcmVMaW5rLmRlZmF1bHRQcm9wcyA9IHtcclxuICB2YXJpYW50OiAnc3VidGl0bGUxJyxcclxuICBocmVmOiAnIycsXHJcbiAgdHlwb2dyYXBoeVByb3BzOiB7fSxcclxuICBpY29uUHJvcHM6IHt9LFxyXG4gIGNvbXBvbmVudDogJ2EnLFxyXG59O1xyXG5cclxuTGVhcm5Nb3JlTGluay5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgY29tcG9uZW50IHRvIGxvYWQgYXMgYSBtYWluIERPTVxyXG4gICAqL1xyXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mKFsnTGluaycsICdhJ10pLFxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIG9mIHRoZSBsaW5rXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBWYXJpYW50IG9mIHRoZSBsaW5rXHJcbiAgICovXHJcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnaDYnLCAnc3VidGl0bGUxJywgJ3N1YnRpdGxlMicsICdib2R5MScsICdib2R5MiddKSxcclxuICAvKipcclxuICAgKiBIcmVmIG9mIHRoZSBsaW5rXHJcbiAgICovXHJcbiAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDb2xvciBvZiB0aGUgbGlua1xyXG4gICAqL1xyXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBJY29uIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGljb25Qcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0eXBvZ3JhcGh5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWFybk1vcmVMaW5rO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9MZWFybk1vcmVMaW5rJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB1c2VTY3JvbGxUcmlnZ2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXInO1xyXG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYic7XHJcbmltcG9ydCBLZXlib2FyZEFycm93VXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93VXAnO1xyXG5pbXBvcnQgWm9vbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9ab29tJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU2Nyb2xsVG9wID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcih7XHJcbiAgICBkaXNhYmxlSHlzdGVyZXNpczogdHJ1ZSxcclxuICAgIHRocmVzaG9sZDogMTAwLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIGlmICh3aW5kb3cpIHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Wm9vbSBpbj17dHJpZ2dlcn0+XHJcbiAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlQ2xpY2t9IHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPEZhYiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIiBhcmlhLWxhYmVsPVwic2Nyb2xsIGJhY2sgdG8gdG9wXCI+XHJcbiAgICAgICAgICA8S2V5Ym9hcmRBcnJvd1VwSWNvbiAvPlxyXG4gICAgICAgIDwvRmFiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvWm9vbT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxUb3A7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU2Nyb2xsVG9wJzsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEltYWdlIH0gZnJvbSAnLi9JbWFnZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvbiB9IGZyb20gJy4vSWNvbic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGVhcm5Nb3JlTGluayB9IGZyb20gJy4vTGVhcm5Nb3JlTGluayc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvblRleHQgfSBmcm9tICcuL0ljb25UZXh0JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEYXJrTW9kZVRvZ2dsZXIgfSBmcm9tICcuL0RhcmtNb2RlVG9nZ2xlcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2Nyb2xsVG9wIH0gZnJvbSAnLi9TY3JvbGxUb3AnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcclxuaW1wb3J0IENvdW50VXAgZnJvbSAncmVhY3QtY291bnR1cCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBDb3VudCBVcCBOdW1iZXJzXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ291bnRVcE51bWJlciA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBzdGFydCxcclxuICAgIGVuZCxcclxuICAgIHN1ZmZpeCxcclxuICAgIHByZWZpeCxcclxuICAgIGxhYmVsLFxyXG4gICAgdGV4dENvbG9yLFxyXG4gICAgbGFiZWxDb2xvcixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHZpc2liaWxpdHlTZW5zb3JQcm9wcyxcclxuICAgIHdyYXBwZXJQcm9wcyxcclxuICAgIGNvdW50V3JhcHBlclByb3BzLFxyXG4gICAgY291bnROdW1iZXJQcm9wcyxcclxuICAgIGxhYmVsUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBbdmlld1BvcnRFbnRlcmVkLCBzZXRWaWV3UG9ydEVudGVyZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHNldFZpZXdQb3J0VmlzaWJpbGl0eSA9IGlzVmlzaWJsZSA9PiB7XHJcbiAgICBpZiAodmlld1BvcnRFbnRlcmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWaWV3UG9ydEVudGVyZWQoaXNWaXNpYmxlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2NvdW50dXAtbnVtYmVyJywgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8VmlzaWJpbGl0eVNlbnNvclxyXG4gICAgICAgIG9uQ2hhbmdlPXtpc1Zpc2libGUgPT4gc2V0Vmlld1BvcnRWaXNpYmlsaXR5KGlzVmlzaWJsZSl9XHJcbiAgICAgICAgZGVsYXllZENhbGxcclxuICAgICAgICB7Li4udmlzaWJpbGl0eVNlbnNvclByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudHVwLW51bWJlcl9fd3JhcHBlclwiIHsuLi53cmFwcGVyUHJvcHN9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cImg0XCJcclxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgY29sb3I9e3RleHRDb2xvciB8fCAndGV4dFByaW1hcnknfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb3VudHVwLW51bWJlcl9fY291bnQtd3JhcHBlclwiXHJcbiAgICAgICAgICAgIHsuLi5jb3VudFdyYXBwZXJQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENvdW50VXBcclxuICAgICAgICAgICAgICBkZWxheT17MX1cclxuICAgICAgICAgICAgICByZWRyYXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGVuZD17dmlld1BvcnRFbnRlcmVkID8gZW5kIDogc3RhcnR9XHJcbiAgICAgICAgICAgICAgc3RhcnQ9e3N0YXJ0fVxyXG4gICAgICAgICAgICAgIHN1ZmZpeD17c3VmZml4IHx8ICcnfVxyXG4gICAgICAgICAgICAgIHByZWZpeD17cHJlZml4IHx8ICcnfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdW50dXAtbnVtYmVyX19jb3VudFwiXHJcbiAgICAgICAgICAgICAgey4uLmNvdW50TnVtYmVyUHJvcHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgY29sb3I9e2xhYmVsQ29sb3IgfHwgJ3RleHRTZWNvbmRhcnknfVxyXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdW50dXAtbnVtYmVyX19sYWJlbFwiXHJcbiAgICAgICAgICAgIHsuLi5sYWJlbFByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Db3VudFVwTnVtYmVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzdGFydDogMCxcclxuICB2aXNpYmlsaXR5U2Vuc29yUHJvcHM6IHt9LFxyXG4gIHdyYXBwZXJQcm9wczoge30sXHJcbiAgY291bnRXcmFwcGVyUHJvcHM6IHt9LFxyXG4gIGNvdW50TnVtYmVyUHJvcHM6IHt9LFxyXG4gIGxhYmVsUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQ291bnRVcE51bWJlci5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgU3VmZml4IG9mIHRoZSBjb3VudCB1cCBudW1iZXJcclxuICAgKi9cclxuICBzdWZmaXg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIFByZWZpeCBvZiB0aGUgY291bnQgdXAgbnVtYmVyXHJcbiAgICovXHJcbiAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBsYWJlbCB0ZXh0IG9mIHRoZSBjb3VudCB1cCBudW1iZXJcclxuICAgKi9cclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0aW5nIG51bWJlclxyXG4gICAqL1xyXG4gIHN0YXJ0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIC8qKlxyXG4gICAqIEVuZCBudW1iZXJcclxuICAgKi9cclxuICBlbmQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUZXh0IGNvbG9yXHJcbiAgICovXHJcbiAgdGV4dENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIExhYmVsIGNvbG9yXHJcbiAgICovXHJcbiAgbGFiZWxDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgVmlzaWJpbGl0eVNlbnNvciBDb21wb25lbnRcclxuICAgKi9cclxuICB2aXNpYmlsaXR5U2Vuc29yUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHdyYXBwZXIgZGl2XHJcbiAgICovXHJcbiAgd3JhcHBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBjb3VudCB3cmFwcGVyIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgY291bnRXcmFwcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIENvdW50VXAgUmVhY3QgY29tcG9uZW50XHJcbiAgICovXHJcbiAgY291bnROdW1iZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgbGFiZWwgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBsYWJlbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRVcE51bWJlcjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ291bnRVcE51bWJlcic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnksIEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGRlc2NyaXB0aW9uIHdpdGggQ1RBJ3NcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBEZXNjcmlwdGlvbkN0YSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSxcclxuICAgIHN1YnRpdGxlLFxyXG4gICAgcHJpbWFyeUN0YSxcclxuICAgIHNlY29uZGFyeUN0YSxcclxuICAgIGFsaWduLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgd3JhcHBlclByb3BzLFxyXG4gICAgdGl0bGVQcm9wcyxcclxuICAgIHN1YnRpdGxlUHJvcHMsXHJcbiAgICBidXR0b25Hcm91cFByb3BzLFxyXG4gICAgcHJpbWFyeUJ1dHRvbldyYXBwZXJQcm9wcyxcclxuICAgIHNlY29uZGFyeUJ1dHRvbldyYXBwZXJQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc1NtID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnc20nKSwge1xyXG4gICAgZGVmYXVsdE1hdGNoZXM6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGxldCBqdXN0aWZ5R3JpZCA9ICdjZW50ZXInO1xyXG4gIGlmIChhbGlnbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9IGlzU20gPyAnZmxleC1lbmQnIDogJ2ZsZXgtc3RhcnQnO1xyXG4gIH0gZWxzZSBpZiAoYWxpZ24gPT09ICdyaWdodCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gaXNTbSA/ICdmbGV4LXN0YXJ0JyA6ICdmbGV4LWVuZCc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRcclxuICAgICAgY29udGFpbmVyXHJcbiAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2Rlc2NyaXB0aW9uLWN0YScsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWN0YV9fd3JhcHBlclwiIHsuLi53cmFwcGVyUHJvcHN9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICB2YXJpYW50PVwiaDVcIlxyXG4gICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1jdGFfX3RpdGxlXCJcclxuICAgICAgICAgIHsuLi50aXRsZVByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAge3N1YnRpdGxlICYmIChcclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWN0YV9fc3VidGl0bGVcIlxyXG4gICAgICAgICAgICB7Li4uc3VidGl0bGVQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17anVzdGlmeUdyaWR9XHJcbiAgICAgICAgICBzcGFjaW5nPXsxfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tY3RhX19idXR0b24tZ3JvdXBcIlxyXG4gICAgICAgICAgey4uLmJ1dHRvbkdyb3VwUHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1jdGFfX3ByaW1hcnktYnV0dG9uLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICB7Li4ucHJpbWFyeUJ1dHRvbldyYXBwZXJQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3ByaW1hcnlDdGF9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICB7c2Vjb25kYXJ5Q3RhICYmIChcclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdkZXNjcmlwdGlvbi1jdGFfX3NlY29uZGFyeS1idXR0b24td3JhcHBlcicpfVxyXG4gICAgICAgICAgICAgIHsuLi5zZWNvbmRhcnlCdXR0b25XcmFwcGVyUHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2Vjb25kYXJ5Q3RhfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5EZXNjcmlwdGlvbkN0YS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdjZW50ZXInLFxyXG4gIHdyYXBwZXJQcm9wczoge30sXHJcbiAgdGl0bGVQcm9wczoge30sXHJcbiAgc3VidGl0bGVQcm9wczoge30sXHJcbiAgYnV0dG9uR3JvdXBQcm9wczoge30sXHJcbiAgcHJpbWFyeUJ1dHRvbldyYXBwZXJQcm9wczoge30sXHJcbiAgc2Vjb25kYXJ5QnV0dG9uV3JhcHBlclByb3BzOiB7fSxcclxufTtcclxuXHJcbkRlc2NyaXB0aW9uQ3RhLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIG9mIHRoZSBsaXN0XHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTdWJ0aXRsZSBvZiB0aGUgbGlzdFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByaW1hcnkgQ1RBIG9mIHRoZSBsaXN0XHJcbiAgICovXHJcbiAgcHJpbWFyeUN0YTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTZWNvbmRhcnkgQ1RBIG9mIHRoZSBsaXN0XHJcbiAgICovXHJcbiAgc2Vjb25kYXJ5Q3RhOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBBbGlnbm1lbnRcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHdyYXBwZXIgR3JpZCBpdGVtIGNvbXBvbmVudHNcclxuICAgKi9cclxuICB3cmFwcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50c1xyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHN1YnRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50c1xyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIGJ1dHRvbiBncm91cCBkaXYgY29udGFpbmVyXHJcbiAgICovXHJcbiAgYnV0dG9uR3JvdXBQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgcHJpbWFyeSBidXR0b24gd3JhcHBlciBkaXYgY29udGFpbmVyXHJcbiAgICovXHJcbiAgcHJpbWFyeUJ1dHRvbldyYXBwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiB3cmFwcGVyIGRpdiBjb250YWluZXJcclxuICAgKi9cclxuICBzZWNvbmRhcnlCdXR0b25XcmFwcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbkN0YTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRGVzY3JpcHRpb25DdGEnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEF2YXRhciwgY29sb3JzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgZXh0cmFTbWFsbDoge1xyXG4gICAgd2lkdGg6IDIwLFxyXG4gICAgaGVpZ2h0OiAyMCxcclxuICB9LFxyXG4gIHNtYWxsOiB7XHJcbiAgICB3aWR0aDogNTAsXHJcbiAgICBoZWlnaHQ6IDUwLFxyXG4gIH0sXHJcbiAgbWVkaXVtOiB7XHJcbiAgICB3aWR0aDogNzAsXHJcbiAgICBoZWlnaHQ6IDcwLFxyXG4gIH0sXHJcbiAgbGFyZ2U6IHtcclxuICAgIHdpZHRoOiA5MCxcclxuICAgIGhlaWdodDogOTAsXHJcbiAgfSxcclxuICBjaXJjbGU6IHtcclxuICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxyXG4gIH0sXHJcbiAgc3F1YXJlOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBhbHRlcm5hdGUgaWNvblxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEljb25BbHRlcm5hdGUgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWNvblByb3BzLFxyXG4gICAgZm9udEljb25DbGFzcyxcclxuICAgIHNpemUsXHJcbiAgICBjb2xvcixcclxuICAgIHNoYXBlLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHVzZUJhY2tncm91bmRTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IFwiI2UzZjJmZFwiLFxyXG4gICAgfSxcclxuICB9KSk7XHJcbiAgY29uc3QgYmFja2dyb3VuZENsYXNzZXMgPSB1c2VCYWNrZ3JvdW5kU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXZhdGFyXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICBcImljb24tYWx0ZXJuYXRlXCIsXHJcbiAgICAgICAgY2xhc3Nlc1tzaXplXSxcclxuICAgICAgICBjbGFzc2VzW3NoYXBlXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ2xhc3Nlcy5iYWNrZ3JvdW5kLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEljb25cclxuICAgICAgICBzaXplPXtzaXplfVxyXG4gICAgICAgIGZvbnRJY29uQ2xhc3M9e2ZvbnRJY29uQ2xhc3N9XHJcbiAgICAgICAgZm9udEljb25Db2xvcj17XCIjNTEyMGZmXCJ9XHJcbiAgICAgICAgY2xhc3NOYW1lPSdpY29uLWFsdGVybmF0ZV9faWNvbidcclxuICAgICAgICB7Li4uaWNvblByb3BzfVxyXG4gICAgICAvPlxyXG4gICAgPC9BdmF0YXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkljb25BbHRlcm5hdGUuZGVmYXVsdFByb3BzID0ge1xyXG4gIHNpemU6ICdtZWRpdW0nLFxyXG4gIHNoYXBlOiAnc3F1YXJlJyxcclxuICBpY29uUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuSWNvbkFsdGVybmF0ZS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgY2xhc3NlcyBvZiB0aGUgZm9udCBpY29uXHJcbiAgICovXHJcbiAgZm9udEljb25DbGFzczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFNpemVzIG9mIHRoZSBpY29uXHJcbiAgICovXHJcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnZXh0cmFTbWFsbCcsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSksXHJcbiAgLyoqXHJcbiAgICogQ29sb3Igb2YgdGhlIGljb25cclxuICAgKi9cclxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgIGNvbG9ycy5yZWQsXHJcbiAgICBjb2xvcnMucGluayxcclxuICAgIGNvbG9ycy5wdXJwbGUsXHJcbiAgICBjb2xvcnMuZGVlcFB1cnBsZSxcclxuICAgIGNvbG9ycy5pbmRpZ28sXHJcbiAgICBjb2xvcnMuYmx1ZSxcclxuICAgIGNvbG9ycy5saWdodEJsdWUsXHJcbiAgICBjb2xvcnMuY3lhbixcclxuICAgIGNvbG9ycy50ZWFsLFxyXG4gICAgY29sb3JzLmdyZWVuLFxyXG4gICAgY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICBjb2xvcnMubGltZSxcclxuICAgIGNvbG9ycy55ZWxsb3csXHJcbiAgICBjb2xvcnMuYW1iZXIsXHJcbiAgICBjb2xvcnMub3JhbmdlLFxyXG4gICAgY29sb3JzLmRlZXBPcmFuZ2UsXHJcbiAgICBjb2xvcnMuYnJvd24sXHJcbiAgICBjb2xvcnMuZ3JleSxcclxuICAgIGNvbG9ycy5ibHVlR3JleSxcclxuICBdKSxcclxuICAvKipcclxuICAgKiBUaGUgc2hhcGUgb2YgdGhlIGFsdGVybmF0ZSBpY29uXHJcbiAgICovXHJcbiAgc2hhcGU6IFByb3BUeXBlcy5vbmVPZihbJ2NpcmNsZScsICdzcXVhcmUnXSksXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIEljb24gY29tcG9uZW50XHJcbiAgICovXHJcbiAgaWNvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbkFsdGVybmF0ZTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSWNvbkFsdGVybmF0ZSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBpbWFnZUdyaWQ6IHtcclxuICAgIHBhZGRpbmc6ICcuMjVyZW0nLFxyXG4gICAgd2lkdGg6ICcxNTAlJyxcclxuICAgIGJveFNoYWRvdzogJzAgMS41cmVtIDRyZW0gcmdiYSgyMiwyOCw0NSwuMSknLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgJyYgaW1nJzoge1xyXG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXHJcbiAgICAgIGJvcmRlclN0eWxlOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2VHcmlkRmlyc3RJdGVtOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICc0cmVtJyxcclxuICB9LFxyXG4gIGltYWdlR3JpZExhc3RJdGVtOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICc2cmVtJyxcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgb3ZlcmxhcGVkIGltYWdlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IE92ZXJsYXBlZEltYWdlcyA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGltYWdlMSwgaW1hZ2UyLCBpbWFnZTMsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIGNvbnRhaW5lclxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ292ZXJsYXBlZC1pbWFnZXMnLCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17NH0gY2xhc3NOYW1lPVwib3ZlcmxhcGVkLWltYWdlc19faXRlbS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICdvdmVybGFwZWQtaW1hZ2VzX19pdGVtLXdyYXBwZXInLFxyXG4gICAgICAgICAgICBjbGFzc2VzLmltYWdlR3JpZCxcclxuICAgICAgICAgICAgY2xhc3Nlcy5pbWFnZUdyaWRGaXJzdEl0ZW0sXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e2ltYWdlMS5zcmN9XHJcbiAgICAgICAgICAgIHNyY1NldD17aW1hZ2UxLnNyY3NldH1cclxuICAgICAgICAgICAgYWx0PXtpbWFnZTEuYWx0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVybGFwZWQtaW1hZ2VzX19pdGVtLWltYWdlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17NH0gY2xhc3NOYW1lPVwib3ZlcmxhcGVkLWltYWdlc19faXRlbS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ292ZXJsYXBlZC1pbWFnZXNfX2l0ZW0td3JhcHBlcicsIGNsYXNzZXMuaW1hZ2VHcmlkKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtpbWFnZTIuc3JjfVxyXG4gICAgICAgICAgICBzcmNTZXQ9e2ltYWdlMi5zcmNzZXR9XHJcbiAgICAgICAgICAgIGFsdD17aW1hZ2UyLmFsdH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmxhcGVkLWltYWdlc19faXRlbS1pbWFnZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IGNsYXNzTmFtZT1cIm92ZXJsYXBlZC1pbWFnZXNfX2l0ZW0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAnb3ZlcmxhcGVkLWltYWdlc19faXRlbS13cmFwcGVyJyxcclxuICAgICAgICAgICAgY2xhc3Nlcy5pbWFnZUdyaWQsXHJcbiAgICAgICAgICAgIGNsYXNzZXMuaW1hZ2VHcmlkTGFzdEl0ZW0sXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e2ltYWdlMy5zcmN9XHJcbiAgICAgICAgICAgIHNyY1NldD17aW1hZ2UzLnNyY3NldH1cclxuICAgICAgICAgICAgYWx0PXtpbWFnZTMuYWx0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVybGFwZWQtaW1hZ2VzX19pdGVtLWltYWdlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuT3ZlcmxhcGVkSW1hZ2VzLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEltYWdlIGl0ZW0gLSBPYmplY3Qgb2Ygc3JjLCBzcmNzZXQgYW5kIGFsdCBwcm9wZXJ0aWVzXHJcbiAgICovXHJcbiAgaW1hZ2UxOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSW1hZ2UgaXRlbSAtIE9iamVjdCBvZiBzcmMsIHNyY3NldCBhbmQgYWx0IHByb3BlcnRpZXNcclxuICAgKi9cclxuICBpbWFnZTI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBJbWFnZSBpdGVtIC0gT2JqZWN0IG9mIHNyYywgc3Jjc2V0IGFuZCBhbHQgcHJvcGVydGllc1xyXG4gICAqL1xyXG4gIGltYWdlMzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3ZlcmxhcGVkSW1hZ2VzO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9PdmVybGFwZWRJbWFnZXMnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGlzYWJsZUd1dHRlcjoge1xyXG4gICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICB9LFxyXG4gIGN0YToge1xyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICcmOmZpcnN0LWNoaWxkJzoge1xyXG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDApLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHNlY3Rpb24gaGVhZGVyc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdGl0bGUsXHJcbiAgICB0aXRsZVZhcmlhbnQsXHJcbiAgICBzdWJ0aXRsZVZhcmlhbnQsXHJcbiAgICBzdWJ0aXRsZSxcclxuICAgIHN1YnRpdGxlQ29sb3IsXHJcbiAgICBsYWJlbCxcclxuICAgIG92ZXJsaW5lLFxyXG4gICAgZmFkZVVwLFxyXG4gICAgYWxpZ24sXHJcbiAgICBjdGFHcm91cCxcclxuICAgIGRpc2FibGVHdXR0ZXIsXHJcbiAgICB0aXRsZUNsYXNzZXMsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBsYWJlbFByb3BzLFxyXG4gICAgdGl0bGVQcm9wcyxcclxuICAgIHN1YnRpdGxlUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgbGV0IGp1c3RpZnlHcmlkID0gJ2NlbnRlcic7XHJcbiAgaWYgKGFsaWduID09PSAnbGVmdCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gJ2ZsZXgtc3RhcnQnO1xyXG4gIH0gZWxzZSBpZiAoYWxpZ24gPT09ICdyaWdodCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gJ2ZsZXgtZW5kJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBjb250YWluZXJcclxuICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgZGF0YS1hb3M9e2ZhZGVVcCA/IFwiZmFkZS11cFwiIDogXCJcIn1cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgIFwic2VjdGlvbi1oZWFkZXJcIixcclxuICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbiAgICAgICAgZGlzYWJsZUd1dHRlciA/IGNsYXNzZXMuZGlzYWJsZUd1dHRlciA6IHt9LFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAge292ZXJsaW5lICYmIChcclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17anVzdGlmeUdyaWR9XHJcbiAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9J3NlY3Rpb24taGVhZGVyX19vdmVybGluZS13cmFwcGVyJ1xyXG4gICAgICAgID5cclxuICAgICAgICAgIHtvdmVybGluZX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICl9XHJcbiAgICAgIHtsYWJlbCAmJiAoXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT0nc2VjdGlvbi1oZWFkZXJfX2xhYmVsLXdyYXBwZXInPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD0nb3ZlcmxpbmUnXHJcbiAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICBjb21wb25lbnQ9J3AnXHJcbiAgICAgICAgICAgIGFsaWduPXthbGlnbiB8fCBcImNlbnRlclwifVxyXG4gICAgICAgICAgICB7Li4ubGFiZWxQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKX1cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT0nc2VjdGlvbi1oZWFkZXJfX3RpdGxlLXdyYXBwZXInPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICB2YXJpYW50PXt0aXRsZVZhcmlhbnR9XHJcbiAgICAgICAgICBhbGlnbj17YWxpZ24gfHwgXCJjZW50ZXJcIn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgXCJzZWN0aW9uLWhlYWRlcl9fdGl0bGVcIixcclxuICAgICAgICAgICAgY2xhc3Nlcy50aXRsZSxcclxuICAgICAgICAgICAgdGl0bGVDbGFzc2VzID8gdGl0bGVDbGFzc2VzIDoge31cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBjb2xvcj0ndGV4dFByaW1hcnknXHJcbiAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIHtzdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT0nc2VjdGlvbi1oZWFkZXJfX3N1YnRpdGxlLXdyYXBwZXInPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD17c3VidGl0bGVWYXJpYW50IHx8IFwiaDZcIn1cclxuICAgICAgICAgICAgYWxpZ249e2FsaWduIHx8IFwiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgIGNvbG9yPXtzdWJ0aXRsZUNvbG9yIHx8IFwidGV4dFByaW1hcnlcIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uLWhlYWRlcl9fc3VidGl0bGUnXHJcbiAgICAgICAgICAgIHsuLi5zdWJ0aXRsZVByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApfVxyXG4gICAgICB7Y3RhR3JvdXAgJiYgY3RhR3JvdXAubGVuZ3RoICYmIChcclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPSdzZWN0aW9uLWhlYWRlcl9fY3RhLXdyYXBwZXInPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtqdXN0aWZ5R3JpZH1cclxuICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAgICB3cmFwPSdub3dyYXAnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VjdGlvbi1oZWFkZXJfX2N0YS1jb250YWluZXInXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjdGFHcm91cC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAgICAgXCJzZWN0aW9uLWhlYWRlcl9fY3RhLWl0ZW0td3JhcHBlclwiLFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzLmN0YVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApfVxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5TZWN0aW9uSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0aXRsZVZhcmlhbnQ6ICdoNCcsXHJcbiAgbGFiZWxQcm9wczoge30sXHJcbiAgdGl0bGVQcm9wczoge30sXHJcbiAgc3VidGl0bGVQcm9wczoge30sXHJcbn07XHJcblxyXG5TZWN0aW9uSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIG9mIHRoZSBzZWN0aW9uIGhlYWRlclxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU3VidGl0bGUgb2YgdGhlIHNlY3Rpb24gaGVhZGVyXHJcbiAgICovXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXHJcbiAgLyoqXHJcbiAgICogTGFiZWwgdGl0bGUgb2YgdGhlIHNlY3Rpb24gaGVhZGVyXHJcbiAgICovXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIG92ZXJsaW5lIGNvbXBvbmVudCBpbiB0aGUgc2VjdGlvbiBoZWFkZXJcclxuICAgKi9cclxuICBvdmVybGluZTogUHJvcFR5cGVzLm5vZGUsXHJcbiAgLyoqXHJcbiAgICogQXJyYXkgb2YgdGhlIENUQXNcclxuICAgKi9cclxuICBjdGFHcm91cDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gZmFkZSB1cCBvbiBzY3JvbGxcclxuICAgKi9cclxuICBmYWRlVXA6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIEhlYWRlciBjb250ZW50ICh0aXRsZSwgc3VidGl0bGUsIENUQXMpIGFsaWdubWVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydyaWdodCcsICdsZWZ0JywgJ2NlbnRlciddKSxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGRpc2FibGUgYm90dG9tIG1hcmdpbiBvZiB0aGUgc2VjdGlvblxyXG4gICAqL1xyXG4gIGRpc2FibGVHdXR0ZXI6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFN0eWxlcyBjbGFzc2VzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSB0aXRsZSBmcm9tIHRoZSBwYXJlbnQgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGl0bGVDbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIHZhcmlhbnRcclxuICAgKi9cclxuICB0aXRsZVZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2J10pXHJcbiAgICAuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTdWJUaXRsZSB2YXJpYW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVWYXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgJ2gxJyxcclxuICAgICdoMicsXHJcbiAgICAnaDMnLFxyXG4gICAgJ2g0JyxcclxuICAgICdoNScsXHJcbiAgICAnaDYnLFxyXG4gICAgJ3N1YnRpdGxlMScsXHJcbiAgICAnc3VidGl0bGUyJyxcclxuICAgICdib2R5MScsXHJcbiAgICAnYm9keTInLFxyXG4gIF0pLFxyXG4gIC8qKlxyXG4gICAqIFN1YlRpdGxlIGNvbG9yXHJcbiAgICovXHJcbiAgc3VidGl0bGVDb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgICd0ZXh0UHJpbWFyeScsXHJcbiAgICAndGV4dFNlY29uZGFyeScsXHJcbiAgICAncHJpbWFyeScsXHJcbiAgICAnc2Vjb25kYXJ5JyxcclxuICBdKSxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgbGFiZWwgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBsYWJlbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHN1YnRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25IZWFkZXI7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1NlY3Rpb25IZWFkZXInO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuXHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgekluZGV4OiAnYXV0bycsXHJcbiAgfSxcclxuICBzd2lwZXJTbGlkZToge1xyXG4gICAgd2lkdGg6ICdhdXRvJyxcclxuICB9LFxyXG4gIHN3aXBlck5hdjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgd2lkdGg6IDg4LFxyXG4gICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB6SW5kZXg6IDQsXHJcbiAgICAnJiAuc3dpcGVyLWJ1dHRvbi1wcmV2LCAmIC5zd2lwZXItYnV0dG9uLW5leHQnOiB7XHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIGJveFNoYWRvdzogYDAgMnB4IDEwcHggMCAke3RoZW1lLnBhbGV0dGUuY2FyZFNoYWRvd31gLFxyXG4gICAgICBib3JkZXI6IGAycHggc29saWQgJHt0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJ9YCxcclxuICAgICAgJyY6YWZ0ZXInOiB7XHJcbiAgICAgICAgZm9udFNpemU6ICdpbml0aWFsJyxcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIC5zd2lwZXItYnV0dG9uLXByZXYnOiB7XHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICB9LFxyXG4gICAgJyYgLnN3aXBlci1idXR0b24tbmV4dCc6IHtcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGltYWdlIHN3aXBlclxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFN3aXBlckltYWdlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGl0ZW1zLFxyXG4gICAgbmF2aWdhdGlvbkJ1dHRvblN0eWxlLFxyXG4gICAgaW1hZ2VDbGFzc05hbWUsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICdzd2lwZXItY29udGFpbmVyJyxcclxuICAgICAgICAnc3dpcGVyLWltYWdlJyxcclxuICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItaW1hZ2VfX3dyYXBwZXIsIHN3aXBlci13cmFwcGVyXCI+XHJcbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICdzd2lwZXItaW1hZ2VfX3NsaWRlJyxcclxuICAgICAgICAgICAgICAnc3dpcGVyLXNsaWRlJyxcclxuICAgICAgICAgICAgICBjbGFzc2VzLnN3aXBlclNsaWRlLFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uc3JjfVxyXG4gICAgICAgICAgICAgIGFsdD17aXRlbS5hbHR9XHJcbiAgICAgICAgICAgICAgc3JjU2V0PXtpdGVtLnNyY1NldH1cclxuICAgICAgICAgICAgICBsYXp5UHJvcHM9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICAnc3dpcGVyLWltYWdlX19pdGVtJyxcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBpbWFnZUNsYXNzTmFtZSA/IGltYWdlQ2xhc3NOYW1lIDoge30sXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ3N3aXBlci1pbWFnZV9fbmF2aWdhdGlvbicsIGNsYXNzZXMuc3dpcGVyTmF2KX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAnc3dpcGVyLWltYWdlX19uYXZpZ2F0aW9uLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICdzd2lwZXItaW1hZ2VfX25hdmlnYXRpb24tYnV0dG9uLS1wcmV2JyxcclxuICAgICAgICAgICAgJ3N3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CdXR0b25TdHlsZSB8fCB7fSxcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICdzd2lwZXItaW1hZ2VfX25hdmlnYXRpb24tYnV0dG9uJyxcclxuICAgICAgICAgICAgJ3N3aXBlci1pbWFnZV9fbmF2aWdhdGlvbi1idXR0b24tLW5leHQnLFxyXG4gICAgICAgICAgICAnc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJ1dHRvblN0eWxlIHx8IHt9LFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Td2lwZXJJbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzIGZvciB0aGUgaW1hZ2VzXHJcbiAgICovXHJcbiAgaW1hZ2VDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGFycmF5IG9mIGltYWdlcyBvYmplY3Qgd2hpY2ggc2hvdWxkIGNvbnNpc3Qgb2Ygc3JjLCBhbHQgYW5kIHNyY3NldCBhdHRyaWJ1dGVzXHJcbiAgICovXHJcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU3R5bGVzIGNsYXNzZXMgb2YgdGhlIG5hdmlnYXRpb24gYnV0dG9uXHJcbiAgICovXHJcbiAgbmF2aWdhdGlvbkJ1dHRvblN0eWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3dpcGVySW1hZ2U7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1N3aXBlckltYWdlJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHN3aXBlclNsaWRlOiB7XHJcbiAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDYpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG51bWJlcjoge1xyXG4gICAgZm9udFdlaWdodDogOTAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgbnVtYmVyIHN3aXBlclxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFN3aXBlck51bWJlciA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpdGVtcyxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIG51bWJlclByb3BzLFxyXG4gICAgbGFiZWxQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzTWQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpLCB7XHJcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiBpc01kID8gNCA6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICBkZWxheTogNTAwMCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgJ3N3aXBlci1udW1iZXInLFxyXG4gICAgICAgICdzd2lwZXItY29udGFpbmVyJyxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1udW1iZXJfX3dyYXBwZXIgc3dpcGVyLXdyYXBwZXJcIj5cclxuICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgJ3N3aXBlci1udW1iZXJfX2l0ZW0nLFxyXG4gICAgICAgICAgICAgIGNsYXNzZXMuc3dpcGVyU2xpZGUsXHJcbiAgICAgICAgICAgICAgJ3N3aXBlci1zbGlkZScsXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnYXV0bycgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlci1udW1iZXJfX2l0ZW0tY29udGFpbmVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJzd2lwZXItbnVtYmVyX19udW1iZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImgzXCJcclxuICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ3N3aXBlci1udW1iZXJfX251bWJlcicsIGNsYXNzZXMubnVtYmVyKX1cclxuICAgICAgICAgICAgICAgICAgey4uLm51bWJlclByb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5udW1iZXJ9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJzd2lwZXItbnVtYmVyX19sYWJlbC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2lwZXItbnVtYmVyX19sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYWJlbFByb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItbnVtYmVyX19wYWdpbmF0aW9uIHN3aXBlci1wYWdpbmF0aW9uXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Td2lwZXJOdW1iZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIG51bWJlclByb3BzOiB7fSxcclxuICBsYWJlbFByb3BzOiB7fSxcclxufTtcclxuXHJcblN3aXBlck51bWJlci5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgYXJyYXkgb2YgbnVtYmVycyBvYmplY3Qgd2hpY2ggc2hvdWxkIGNvbnNpc3Qgb2YgbnVtYmVyIGFuZCB0aXRsZVxyXG4gICAqL1xyXG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgbnVtYmVyIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgbnVtYmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogVGhlIGFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBsYWJlbCBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGxhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2lwZXJOdW1iZXI7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1N3aXBlck51bWJlcic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgVHlwZWQgZnJvbSAncmVhY3QtdHlwZWQnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSB0eXBlZCBhbmltYXRlZCB0ZXh0c1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFR5cGVkVGV4dCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgdHlwZWRQcm9wcywgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ3R5cGVkLXRleHQnLCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPFR5cGVkIGNsYXNzTmFtZT1cInR5cGVkLXRleHRfX2l0ZW1cIiB7Li4udHlwZWRQcm9wc30gLz5cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59O1xyXG5cclxuVHlwZWRUZXh0LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIHJlYWN0LXR5cGVkIHByb3BlcnRpZXMuIEZvciBtb3JlIGluZm8gdmlzaXQgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmVhY3QtdHlwZWRcclxuICAgKi9cclxuICB0eXBlZFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeXBlZFRleHQ7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1R5cGVkVGV4dCc7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2VjdGlvbkhlYWRlciB9IGZyb20gJy4vU2VjdGlvbkhlYWRlcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvbkFsdGVybmF0ZSB9IGZyb20gJy4vSWNvbkFsdGVybmF0ZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3dpcGVySW1hZ2UgfSBmcm9tICcuL1N3aXBlckltYWdlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZXNjcmlwdGlvbkN0YSB9IGZyb20gJy4vRGVzY3JpcHRpb25DdGEnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvdW50VXBOdW1iZXIgfSBmcm9tICcuL0NvdW50VXBOdW1iZXInO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE92ZXJsYXBlZEltYWdlcyB9IGZyb20gJy4vT3ZlcmxhcGVkSW1hZ2VzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTd2lwZXJOdW1iZXIgfSBmcm9tICcuL1N3aXBlck51bWJlcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHlwZWRUZXh0IH0gZnJvbSAnLi9UeXBlZFRleHQnO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1tdWx0aS1jb21wICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rpc3BsYXktbmFtZSAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcbiAgVHlwb2dyYXBoeSxcclxuICBHcmlkLFxyXG4gIEFjY29yZGlvbiBhcyBNdWlBY2NvcmRpb24sXHJcbiAgQWNjb3JkaW9uU3VtbWFyeSBhcyBNdWlBY2NvcmRpb25TdW1tYXJ5LFxyXG4gIEFjY29yZGlvbkRldGFpbHMgYXMgTXVpQWNjb3JkaW9uRGV0YWlscyxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSc7XHJcblxyXG5pbXBvcnQgeyBMZWFybk1vcmVMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgfSxcclxuICBleHBhbmRPcGVuOiB7XHJcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKScsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IGFjY29yZGlvbiB2aWV3XHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcclxuICovXHJcbmNvbnN0IEFjY29yZGlvbiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpdGVtcyxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHRpdGxlUHJvcHMsXHJcbiAgICBzdWJ0aXRsZVByb3BzLFxyXG4gICAgdGV4dFByb3BzLFxyXG4gICAgbGlua1Byb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiB7Li4ucmVzdH0gY2xhc3NOYW1lPXtjbHN4KCdhY2NvcmRpb24nLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9PlxyXG4gICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgIDxNdWlBY2NvcmRpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnYWNjb3JkaW9uX19pdGVtLXdyYXBwZXInLCBjbGFzc2VzLmxpc3RJdGVtKX1cclxuICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TXVpQWNjb3JkaW9uU3VtbWFyeVxyXG4gICAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XHJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e2Ake2l0ZW0uaWR9LWNvbnRlbnRgfVxyXG4gICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICBzcGFjaW5nPXswfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yaW9uX19pdGVtLXRleHQtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJhY2Nvcmlvbl9faXRlbS10aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2Nvcmlvbl9pdGVtLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgey4uLnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICB7aXRlbS5zdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiYWNjb3Jpb25faXRlbS1zdWJ0aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yaW9uX2l0ZW0tc3VidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5zdWJ0aXRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L011aUFjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICA8TXVpQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9fY29sbGFwc2FibGUtdGV4dC1jb250YWluZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9fY29sbGFwc2FibGUtdGV4dC13cmFwcGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX19jb2xsYXBzYWJsZS10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgey4uLnRleHRQcm9wc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAge2l0ZW0ubGluayAmJiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX19jb2xsYXBzYWJsZS1saW5rLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGVhcm5Nb3JlTGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb25fX2NvbGxhcHNhYmxlLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5saW5rUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9NdWlBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgIDwvTXVpQWNjb3JkaW9uPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5BY2NvcmRpb24uZGVmYXVsdFByb3BzID0ge1xyXG4gIHRpdGxlUHJvcHM6IHt9LFxyXG4gIHN1YnRpdGxlUHJvcHM6IHt9LFxyXG4gIHRleHRQcm9wczoge30sXHJcbiAgbGlua1Byb3BzOiB7fSxcclxufTtcclxuXHJcbkFjY29yZGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogQ2xhc3NuYW1lIGZyb20gdGhlIHBhcmVudCBjb21wb25lbnRcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogSXRlbXMgdG8gc2hvdyBpbnNpZGUgdGhlIGFjY29yZGlvblxyXG4gICAqL1xyXG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBzdWJ0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHRleHQgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0ZXh0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIGxpbmsgY29tcG9uZW50XHJcbiAgICovXHJcbiAgbGlua1Byb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9BY2NvcmRpb24nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIHdpdGhTaGFkb3c6IHtcclxuICAgIGJveFNoYWRvdzogYDAgMnB4IDEwcHggMCAke3RoZW1lLnBhbGV0dGUuY2FyZFNoYWRvd31gLFxyXG4gIH0sXHJcbiAgbm9TaGFkb3c6IHtcclxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gIH0sXHJcbiAgbm9Cb3JkZXI6IHtcclxuICAgIGJvcmRlcjogMCxcclxuICB9LFxyXG4gIG5vQmc6IHtcclxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgfSxcclxuICBsaWZ0VXA6IHtcclxuICAgIHRyYW5zaXRpb246XHJcbiAgICAgICdib3gtc2hhZG93IC4yNXMgZWFzZSx0cmFuc2Zvcm0gLjI1cyBlYXNlLC13ZWJraXQtdHJhbnNmb3JtIC4yNXMgZWFzZScsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgICcwIDEuNXJlbSAyLjVyZW0gcmdiYSgyMiwyOCw0NSwuMSksMCAuM3JlbSAwLjVyZW0gLS41MHJlbSByZ2JhKDIyLDI4LDQ1LC4wNSkgIWltcG9ydGFudCcsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsLTVweCwwKScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCAyKSxcclxuICAgICcmOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgMiksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDMpLFxyXG4gICAgICAnJjpsYXN0LWNoaWxkJzoge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMyksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGVmdDoge1xyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gIH0sXHJcbiAgcmlnaHQ6IHtcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXHJcbiAgfSxcclxuICBjZW50ZXI6IHtcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgYmFzaWMgY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRCYXNlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHdpdGhTaGFkb3csXHJcbiAgICBub1NoYWRvdyxcclxuICAgIG5vQm9yZGVyLFxyXG4gICAgbm9CZyxcclxuICAgIGxpZnRVcCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgYWxpZ24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBjYXJkQ29udGVudFByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICdjYXJkLWJhc2UnLFxyXG4gICAgICAgIGNsYXNzZXMucm9vdCxcclxuICAgICAgICB3aXRoU2hhZG93ID8gY2xhc3Nlcy53aXRoU2hhZG93IDoge30sXHJcbiAgICAgICAgbm9TaGFkb3cgPyBjbGFzc2VzLm5vU2hhZG93IDoge30sXHJcbiAgICAgICAgbm9Cb3JkZXIgPyBjbGFzc2VzLm5vQm9yZGVyIDoge30sXHJcbiAgICAgICAgbm9CZyA/IGNsYXNzZXMubm9CZyA6IHt9LFxyXG4gICAgICAgIGxpZnRVcCA/IGNsYXNzZXMubGlmdFVwIDoge30sXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPENhcmRDb250ZW50XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjYXJkLWJhc2VfX2NvbnRlbnQnLCBjbGFzc2VzLmNvbnRlbnQsIGNsYXNzZXNbYWxpZ25dKX1cclxuICAgICAgICB7Li4uY2FyZENvbnRlbnRQcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZEJhc2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsaWduOiAnY2VudGVyJyxcclxuICBjYXJkQ29udGVudFByb3BzOiB7fSxcclxufTtcclxuXHJcbkNhcmRCYXNlLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjaGlsZHJlbiBjb250ZW50IG9mIHRoZSBiYXNpYyBjYXJkXHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBzaG93IGN1c3RvbSBzaGFkb3dcclxuICAgKi9cclxuICB3aXRoU2hhZG93OiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHJlbmRlciB0aGUgY2FyZCB3aXRob3V0IHNoYWRvd1xyXG4gICAqL1xyXG4gIG5vU2hhZG93OiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGhpZGUgdGhlIGNhcmQgYm9yZGVyc1xyXG4gICAqL1xyXG4gIG5vQm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHNob3cgdHJhbnNwYXJlbnQgYmFja2dyb3VuZFxyXG4gICAqL1xyXG4gIG5vQmc6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gbGlmdCB1cCBvbiBob3ZlclxyXG4gICAqL1xyXG4gIGxpZnRVcDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRlbnQgYWxpZ25tZW50XHJcbiAgICovXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJ10pLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgQ2FyZENvbnRlbnQgY29tcG9uZW50XHJcbiAgICovXHJcbiAgY2FyZENvbnRlbnRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRCYXNlO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkQmFzZSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQ2FyZEJhc2UsIERlc2NyaXB0aW9uTGlzdEljb24gfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgY2F0ZWdvcnkgY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRDYXRlZ29yeSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGljb24sIHRpdGxlLCBhbGlnbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRCYXNlIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cclxuICAgICAgPERlc2NyaXB0aW9uTGlzdEljb24gaWNvbj17aWNvbn0gdGl0bGU9e3RpdGxlfSBhbGlnbj17YWxpZ259IC8+XHJcbiAgICA8L0NhcmRCYXNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkQ2F0ZWdvcnkuZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsaWduOiAnY2VudGVyJyxcclxufTtcclxuXHJcbkNhcmRDYXRlZ29yeS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBJY29uIHRvIHNob3cgaW5zaWRlIHRoZSBjYXRlZ29yeSBjYXJkXHJcbiAgICovXHJcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDYXRlZ29yeSB0aXRsZSB0byBzaG93IGluc2lkZSB0aGUgY2F0ZWdvcnkgY2FyZFxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRlbnQgYWxpZ25tZW50XHJcbiAgICovXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJ10pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZENhdGVnb3J5O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkQ2F0ZWdvcnknO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHksIGNvbG9ycywgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEFycm93UmlnaHRBbHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd1JpZ2h0QWx0JztcclxuaW1wb3J0IHsgSWNvbkFsdGVybmF0ZSB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcclxuaW1wb3J0IHsgQ2FyZEJhc2UgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgZm9udFdlaWdodDcwMDoge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gIH0sXHJcbiAgaGVhZGluZzp7XHJcbiAgICBmb250U2l6ZTpcIjI0cHhcIlxyXG4gIH0sXHJcbiAgY2F0ZWdvcnlJY29uQnV0dG9uOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgfSxcclxuICBzdWJoZWFkaW5nOnt9XHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgY2F0ZWdvcnkgbGluayBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZENhdGVnb3J5TGluayA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBmb250SWNvbkNsYXNzLFxyXG4gICAgY29sb3IsXHJcbiAgICB0aXRsZSxcclxuICAgIHN1YnRpdGxlLFxyXG4gICAgaHJlZixcclxuICAgIGFsaWduLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgaWNvbkFsdGVybmF0ZVByb3BzLFxyXG4gICAgdGl0bGVQcm9wcyxcclxuICAgIHN1YnRpdGxlUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGxldCBqdXN0aWZ5R3JpZCA9ICdmbGV4LXN0YXJ0JztcclxuICBpZiAoYWxpZ24gPT09ICdjZW50ZXInKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9ICdjZW50ZXInO1xyXG4gIH0gZWxzZSBpZiAoYWxpZ24gPT09ICdyaWdodCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gJ2ZsZXgtZW5kJztcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXCJjYXJkLWNhdGVnb3J5LWxpbmtcIiwgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPD5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gY2xhc3NOYW1lPSdjYXJkLWNhdGVnb3J5LWxpbmtfX3dyYXBwZXInPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9e2p1c3RpZnlHcmlkfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8SWNvbkFsdGVybmF0ZVxyXG4gICAgICAgICAgICAgIGZvbnRJY29uQ2xhc3M9e2ZvbnRJY29uQ2xhc3N9XHJcbiAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICAgICAgICAgIHNpemU9J21lZGl1bSdcclxuICAgICAgICAgICAgICB7Li4uaWNvbkFsdGVybmF0ZVByb3BzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2g2J1xyXG4gICAgICAgICAgICAgIGNvbG9yPSd0ZXh0UHJpbWFyeSdcclxuICAgICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZm9udFdlaWdodDcwMCl9XHJcbiAgICAgICAgICAgICAgey4uLnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIHtzdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nYm9keTEnXHJcbiAgICAgICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3ViaGVhZGluZ31cclxuICAgICAgICAgICAgICAgIGNvbG9yPSd0ZXh0UHJpbWFyeSdcclxuICAgICAgICAgICAgICAgIHsuLi5zdWJ0aXRsZVByb3BzfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzdWJ0aXRsZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPXtocmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICBcImNhcmQtY2F0ZWdvcnktbGlua19faXRlbVwiLFxyXG4gICAgICAgICAgICBjbGFzc2VzLmNhdGVnb3J5SWNvbkJ1dHRvblxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9J2NhcmQtY2F0ZWdvcnktbGlua19faWNvbi1idXR0b24nPlxyXG4gICAgICAgICAgICA8QXJyb3dSaWdodEFsdEljb25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQtY2F0ZWdvcnktbGlua19faWNvbidcclxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjNTEyMGZmXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZENhdGVnb3J5TGluay5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdsZWZ0JyxcclxuICBocmVmOiAnIycsXHJcbiAgaWNvbkFsdGVybmF0ZVByb3BzOiB7fSxcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxufTtcclxuXHJcbkNhcmRDYXRlZ29yeUxpbmsucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gdGl0bGUgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIHN1YnRpdGxlIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gZGVzY3JpcHRpb24gdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gZm9udCBpY29uIGNsYXNzIG5hbWUgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBmb250SWNvbkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIGljb24gY29sb3IgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgIGNvbG9ycy5yZWQsXHJcbiAgICBjb2xvcnMucGluayxcclxuICAgIGNvbG9ycy5wdXJwbGUsXHJcbiAgICBjb2xvcnMuZGVlcFB1cnBsZSxcclxuICAgIGNvbG9ycy5pbmRpZ28sXHJcbiAgICBjb2xvcnMuYmx1ZSxcclxuICAgIGNvbG9ycy5saWdodEJsdWUsXHJcbiAgICBjb2xvcnMuY3lhbixcclxuICAgIGNvbG9ycy50ZWFsLFxyXG4gICAgY29sb3JzLmdyZWVuLFxyXG4gICAgY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICBjb2xvcnMubGltZSxcclxuICAgIGNvbG9ycy55ZWxsb3csXHJcbiAgICBjb2xvcnMuYW1iZXIsXHJcbiAgICBjb2xvcnMub3JhbmdlLFxyXG4gICAgY29sb3JzLmRlZXBPcmFuZ2UsXHJcbiAgICBjb2xvcnMuYnJvd24sXHJcbiAgICBjb2xvcnMuZ3JleSxcclxuICAgIGNvbG9ycy5ibHVlR3JleSxcclxuICBdKS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250ZW50IGFsaWdubWVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIEljb25BbHRlcm5hdGUgY29tcG9uZW50XHJcbiAgICovXHJcbiAgaWNvbkFsdGVybmF0ZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZENhdGVnb3J5TGluaztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZENhdGVnb3J5TGluayc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1BdmF0YXIsXHJcbiAgQXZhdGFyLFxyXG4gIExpc3RJdGVtVGV4dCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGRvdDoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGRvdEJpZzoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBkb3RTbWFsbDoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcclxuICB9LFxyXG4gIGpvYlRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxuICBkb3RNYXJnaW46IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGpvYiBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZEpvYiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBiYWRnZUNvbG9yLFxyXG4gICAgYmFkZ2VUaXRsZSxcclxuICAgIGpvYlRpdGxlLFxyXG4gICAgam9iTG9jYXRpb24sXHJcbiAgICBqb2JUeXBlLFxyXG4gICAgam9iRGF0ZSxcclxuICAgIGNvbXBhbnlMb2dvLFxyXG4gICAgY29tcGFueU5hbWUsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEJhc2VcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjYXJkLWpvYicsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgYWxpZ249XCJsZWZ0XCJcclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgeHM9ezEyfT5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRvdCwgY2xhc3Nlcy5kb3RCaWcpfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBiYWRnZUNvbG9yIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwic3BhblwiIHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cclxuICAgICAgICAgICAge2JhZGdlVGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5qb2JUaXRsZX0+XHJcbiAgICAgICAgICAgIHtqb2JUaXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7am9iTG9jYXRpb259XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5kb3QsIGNsYXNzZXMuZG90U21hbGwsIGNsYXNzZXMuZG90TWFyZ2luKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtqb2JUeXBlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8TGlzdEl0ZW0gZGlzYWJsZUd1dHRlcnM+XHJcbiAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgPEF2YXRhciBzcmM9e2NvbXBhbnlMb2dvfSBhbHQ9e2NvbXBhbnlOYW1lfSAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtjb21wYW55TmFtZX0gc2Vjb25kYXJ5PXtqb2JEYXRlfSAvPlxyXG4gICAgICA8L0xpc3RJdGVtPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZEpvYi5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBCYWRnZSBjb2xvciBvZiB0aGUgam9iIGNhcmRcclxuICAgKi9cclxuICBiYWRnZUNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQmFkZ2UgdGl0bGUgb2YgdGhlIGpvYiBjYXJkXHJcbiAgICovXHJcbiAgYmFkZ2VUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiB0aXRsZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYlRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIGxvY2F0aW9uIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iTG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgdHlwZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYlR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgbG9jYXRpb24gb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JEYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQ29tcGFueSBsb2dvIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgY29tcGFueUxvZ286IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDb21wYW55IG5hbWUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBjb21wYW55TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEpvYjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZEpvYic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgQXZhdGFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuaW1wb3J0IHsgTGVhcm5Nb3JlTGluayB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGNvbXBhbnlBdmF0YXI6IHtcclxuICAgIHdpZHRoOiA2MCxcclxuICAgIGhlaWdodDogNjAsXHJcbiAgfSxcclxuICBkb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBkb3RTbWFsbDoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcclxuICB9LFxyXG4gIGNvbXBhbnlOYW1lOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxuICBkb3RNYXJnaW46IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGpvYiBjYXJkIGNvbXBhbnlcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkSm9iQ29tcGFueSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBqb2JUaXRsZSxcclxuICAgIGpvYkxvY2F0aW9uLFxyXG4gICAgY29tcGFueUxvZ28sXHJcbiAgICBjb21wYW55TmFtZSxcclxuICAgIGpvYnNDb3VudCxcclxuICAgIGNvbXBhbnlJbmZvLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRCYXNlXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY2FyZC1jb21wYW55JywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICBhbGlnbj1cImxlZnRcIlxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgc3JjPXtjb21wYW55TG9nb31cclxuICAgICAgICAgICAgYWx0PXtjb21wYW55TmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBhbnlBdmF0YXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMuY29tcGFueU5hbWV9PlxyXG4gICAgICAgICAgICB7Y29tcGFueU5hbWV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDNcIiB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxyXG4gICAgICAgICAgICB7am9iVGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5kb3QsIGNsYXNzZXMuZG90U21hbGwsIGNsYXNzZXMuZG90TWFyZ2luKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIHtqb2JMb2NhdGlvbn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPExlYXJuTW9yZUxpbmsgdGl0bGU9e2pvYnNDb3VudH0gdmFyaWFudD1cInN1YnRpdGxlMVwiIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInNwYW5cIiB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAge2NvbXBhbnlJbmZvfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZEpvYkNvbXBhbnkucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogSm9iIHRpdGxlIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgbG9jYXRpb24gb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JMb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIENvbXBhbnkgbG9nbyBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGNvbXBhbnlMb2dvOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQ29tcGFueSBuYW1lIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgY29tcGFueU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDb3VudCBvZiB0aGUgam9icyBpbiB0aGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JzQ291bnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDb21wYW55IGluZm8gaW4gdGhlIGNhcmRcclxuICAgKi9cclxuICBjb21wYW55SW5mbzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEpvYkNvbXBhbnk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRKb2JDb21wYW55JztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjb2xvcnMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBib3JkZXI6IGBzb2xpZCAxcHggcmdiYSg0MywgNDEsIDQ1LCAwLjIpYCxcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgJzAgMTFweCA1NXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA3KSwgMCAxM3B4IDE4cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMTUpJyxcclxuICAgICAgJyYgLmNhcmQtam9iLW1pbmltYWxfX3RpdGxlLCAmIC5jYXJkLWpvYi1taW5pbWFsX19sb2NhdGlvbiwgJiAuY2FyZC1qb2ItbWluaW1hbF9fYXJyb3cnOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkSm9iTWluaW1hbEJvZHk6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgam9iIGNhcmQgY29tcGFueVxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRKb2JNaW5pbWFsID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlLFxyXG4gICAgc3VidGl0bGUsXHJcbiAgICBzaG93QXJyb3csXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgJ2NhcmQtam9iLW1pbmltYWwnKX0gey4uLnJlc3R9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuY2FyZEpvYk1pbmltYWxCb2R5LCAnY2FyZC1qb2ItbWluaW1hbF9fYm9keScpfVxyXG4gICAgICAgIHN0eWxlPXshc2hvd0Fycm93ID8geyBtYXJnaW5SaWdodDogMCB9IDoge319XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtam9iLW1pbmltYWxfX3RpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRpdGxlLCAnY2FyZC1qb2ItbWluaW1hbF9fdGl0bGUnKX1cclxuICAgICAgICAgICAgey4uLnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtam9iLW1pbmltYWxfX2xvY2F0aW9uLWNvbmF0aW5lclwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1qb2ItbWluaW1hbF9fbG9jYXRpb25cIlxyXG4gICAgICAgICAgICB7Li4uc3VidGl0bGVQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dBcnJvdyA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtam9iLW1pbmltYWxfX2Fycm93LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgZm9udEljb25DbGFzcz1cImZhcyBmYS1hbmdsZS1yaWdodFwiXHJcbiAgICAgICAgICAgIGZvbnRJY29uQ29sb3I9e2NvbG9ycy5ncmV5WzcwMF19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtam9iLW1pbmltYWxfX2Fycm93XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRKb2JNaW5pbWFsLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzaG93QXJyb3c6IGZhbHNlLFxyXG4gIHRpdGxlUHJvcHM6IHt9LFxyXG4gIHN1YnRpdGxlUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQ2FyZEpvYk1pbmltYWwucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogSm9iIHRpdGxlIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2Igc3VidGl0bGUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCBzaG93IGFycm93IG9yIG5vdFxyXG4gICAqL1xyXG4gIHNob3dBcnJvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBzdWJ0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkSm9iTWluaW1hbDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZEpvYk1pbmltYWwnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHksIGNvbG9ycyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgQ2FyZEJhc2UgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJvcmRlclJpZ2h0OiBgJHt0aGVtZS5zcGFjaW5nKDEpfXB4IHNvbGlkICR7Y29sb3JzLnJlZFs1MDBdfWAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZG90OiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgZG90QmlnOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIGRvdFNtYWxsOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxIC8gMiksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gIH0sXHJcbiAgam9iVGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICB9LFxyXG4gIGRvdE1hcmdpbjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gIH0sXHJcbiAgdGFnOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXHJcbiAgfSxcclxuICB0ZXh0V2hpdGU6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgam9iIGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkSm9iVGFnID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGJhZGdlQ29sb3IsXHJcbiAgICBiYWRnZVRpdGxlLFxyXG4gICAgam9iVGl0bGUsXHJcbiAgICBqb2JMb2NhdGlvbixcclxuICAgIGpvYlR5cGUsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEJhc2UgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gYWxpZ249XCJsZWZ0XCIgey4uLnJlc3R9PlxyXG4gICAgICA8PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHhzPXsxMn0+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGFnfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJhZGdlQ29sb3IsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJhZGdlQ29sb3IsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFdoaXRlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2JhZGdlVGl0bGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmpvYlRpdGxlfT5cclxuICAgICAgICAgICAge2pvYlRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtqb2JMb2NhdGlvbn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRvdCwgY2xhc3Nlcy5kb3RTbWFsbCwgY2xhc3Nlcy5kb3RNYXJnaW4pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2pvYlR5cGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZEpvYlRhZy5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBCYWRnZSBjb2xvciBvZiB0aGUgam9iIGNhcmRcclxuICAgKi9cclxuICBiYWRnZUNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQmFkZ2UgdGl0bGUgb2YgdGhlIGpvYiBjYXJkXHJcbiAgICovXHJcbiAgYmFkZ2VUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiB0aXRsZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYlRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIGxvY2F0aW9uIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iTG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgdHlwZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYlR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRKb2JUYWc7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRKb2JUYWcnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIExpc3RJdGVtLCBEaXZpZGVyLCBMaXN0LCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBmZWF0dXJlQ2hlY2s6IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgam9iIGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkUHJpY2luZ1N0YW5kYXJkID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlLFxyXG4gICAgc3VidGl0bGUsXHJcbiAgICBwcmljZUNvbXBvbmVudCxcclxuICAgIGZlYXR1cmVDaGVja0NvbXBvbmVudCxcclxuICAgIGZlYXR1cmVzLFxyXG4gICAgY3RhLFxyXG4gICAgZGlzY2xhaW1lcixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHRpdGxlUHJvcHMsXHJcbiAgICBzdWJ0aXRsZVByb3BzLFxyXG4gICAgZGlzY2xhaW1lclByb3BzLFxyXG4gICAgZmVhdHVyZVRpdGxlUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEJhc2VcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjYXJkLXByaWNpbmctc3RhbmRhcmQnLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX193cmFwcGVyXCI+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9faGVhZGxpbmVcIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXHJcbiAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX3RpdGxlXCJcclxuICAgICAgICAgICAgey4uLnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIHtzdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX3N1YnRpdGxlXCJcclxuICAgICAgICAgICAgICB7Li4uc3VidGl0bGVQcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzdWJ0aXRsZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fZGl2aWRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fZGl2aWRlclwiIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2NvbnRlbnRcIj5cclxuICAgICAgICAgIHtwcmljZUNvbXBvbmVudH1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAge2ZlYXR1cmVzICYmIChcclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2ZlYXR1cmUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8TGlzdCBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2ZlYXR1cmUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZUd1dHRlcnNcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19mZWF0dXJlLWxpc3QtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtmZWF0dXJlQ2hlY2tDb21wb25lbnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcmQtcHJpY2luZy1zdGFuZGFyZF9fZmVhdHVyZS1jaGVjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuZmVhdHVyZUNoZWNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZUNoZWNrQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19mZWF0dXJlLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICB7Li4uZmVhdHVyZVRpdGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fY3RhLXdyYXBwZXJcIj5cclxuICAgICAgICAgIHtjdGF9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIHtkaXNjbGFpbWVyICYmIChcclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2Rpc2NsYWltZXItd3JhcHBlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2Rpc2NsYWltZXItdGl0bGVcIlxyXG4gICAgICAgICAgICAgIHsuLi5kaXNjbGFpbWVyUHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGlzY2xhaW1lcn1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ2FyZEJhc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRQcmljaW5nU3RhbmRhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRpdGxlUHJvcHM6IHt9LFxyXG4gIHN1YnRpdGxlUHJvcHM6IHt9LFxyXG4gIGRpc2NsYWltZXJQcm9wczoge30sXHJcbiAgZmVhdHVyZVRpdGxlUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQ2FyZFByaWNpbmdTdGFuZGFyZC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgdGhlIHByaWNpbmcgY2FyZFxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogIFN1YnRpdGxlIG9mIHRoZSBwcmljaW5nIGNhcmRcclxuICAgKi9cclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgcHJpY2luZyBjb21wb25lbnQgb2YgdGhlIHByaWNpbmcgY2FyZFxyXG4gICAqL1xyXG4gIHByaWNlQ29tcG9uZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBmZWF0dXJlcyBjaGVjayBjb21wb25lbnQgb2YgdGhlIHByaWNpbmcgY2FyZFxyXG4gICAqL1xyXG4gIGZlYXR1cmVDaGVja0NvbXBvbmVudDogUHJvcFR5cGVzLm5vZGUsXHJcbiAgLyoqXHJcbiAgICogRmVhdHVyZXMgYXJyYXkgb2YgdGhlIHByaWNpbmcgY2FyZFxyXG4gICAqL1xyXG4gIGZlYXR1cmVzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgLyoqXHJcbiAgICogIENUQSBidXR0b24gb2YgdGhlIHByaWNpbmcgY2FyZFxyXG4gICAqL1xyXG4gIGN0YTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBEaWNsYWltZXIgb2YgdGhlIHByaWNpbmcgY2FyZFxyXG4gICAqL1xyXG4gIGRpc2NsYWltZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBzdWJ0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBkaXNjbGFpbWVyIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgZGlzY2xhaW1lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgZmVhdHVyZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGZlYXR1cmVUaXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFByaWNpbmdTdGFuZGFyZDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZFByaWNpbmdTdGFuZGFyZCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRNZWRpYSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICB3aXRoU2hhZG93OiB7XHJcbiAgICBib3hTaGFkb3c6IGAwIDJweCAxMHB4IDAgJHt0aGVtZS5wYWxldHRlLmNhcmRTaGFkb3d9YCxcclxuICB9LFxyXG4gIG5vU2hhZG93OiB7XHJcbiAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICB9LFxyXG4gIG5vQm9yZGVyOiB7XHJcbiAgICBib3JkZXI6IDAsXHJcbiAgfSxcclxuICBub0JnOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gIH0sXHJcbiAgbGlmdFVwOiB7XHJcbiAgICB0cmFuc2l0aW9uOlxyXG4gICAgICAnYm94LXNoYWRvdyAuMjVzIGVhc2UsdHJhbnNmb3JtIC4yNXMgZWFzZSwtd2Via2l0LXRyYW5zZm9ybSAuMjVzIGVhc2UnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICAnMCAxLjVyZW0gMi41cmVtIHJnYmEoMjIsMjgsNDUsLjEpLDAgLjNyZW0gMC41cmVtIC0uNTByZW0gcmdiYSgyMiwyOCw0NSwuMDUpICFpbXBvcnRhbnQnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLC01cHgsMCknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1lZGlhOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGhlaWdodDogMzAwLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg0LCAyKSxcclxuICAgICcmOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCwgMiksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYsIDMpLFxyXG4gICAgICAnJjpsYXN0LWNoaWxkJzoge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiwgMyksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGVmdDoge1xyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gIH0sXHJcbiAgcmlnaHQ6IHtcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXHJcbiAgfSxcclxuICBjZW50ZXI6IHtcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgcHJvZHVjdCBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZFByb2R1Y3QgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbWVkaWFDbGFzc05hbWUsXHJcbiAgICB3aXRoU2hhZG93LFxyXG4gICAgbm9TaGFkb3csXHJcbiAgICBub0JvcmRlcixcclxuICAgIG5vQmcsXHJcbiAgICBsaWZ0VXAsXHJcbiAgICBjYXJkQ29udGVudCxcclxuICAgIG1lZGlhQ29udGVudCxcclxuICAgIGFsaWduLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICdjYXJkLXByb2R1Y3QnLFxyXG4gICAgICAgIGNsYXNzZXMucm9vdCxcclxuICAgICAgICB3aXRoU2hhZG93ID8gY2xhc3Nlcy53aXRoU2hhZG93IDoge30sXHJcbiAgICAgICAgbm9TaGFkb3cgPyBjbGFzc2VzLm5vU2hhZG93IDoge30sXHJcbiAgICAgICAgbm9Cb3JkZXIgPyBjbGFzc2VzLm5vQm9yZGVyIDoge30sXHJcbiAgICAgICAgbm9CZyA/IGNsYXNzZXMubm9CZyA6IHt9LFxyXG4gICAgICAgIGxpZnRVcCA/IGNsYXNzZXMubGlmdFVwIDoge30sXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY2FyZC1wcm9kdWN0X19tZWRpYScsIGNsYXNzZXMubWVkaWEsIG1lZGlhQ2xhc3NOYW1lKX1cclxuICAgICAgPlxyXG4gICAgICAgIHttZWRpYUNvbnRlbnR9XHJcbiAgICAgIDwvQ2FyZE1lZGlhPlxyXG4gICAgICA8Q2FyZENvbnRlbnRcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAnY2FyZC1wcm9kdWN0X19jb250ZW50JyxcclxuICAgICAgICAgIGNsYXNzZXMuY29udGVudCxcclxuICAgICAgICAgIGNsYXNzZXNbYWxpZ25dLFxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2FyZENvbnRlbnR9XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRQcm9kdWN0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2xlZnQnLFxyXG59O1xyXG5cclxuQ2FyZFByb2R1Y3QucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3NlcyBmb3IgdGhlIG1lZGlhXHJcbiAgICovXHJcbiAgbWVkaWFDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBzaG93IGN1c3RvbSBzaGFkb3dcclxuICAgKi9cclxuICB3aXRoU2hhZG93OiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHJlbmRlciB0aGUgY2FyZCB3aXRob3V0IHNoYWRvd1xyXG4gICAqL1xyXG4gIG5vU2hhZG93OiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGhpZGUgdGhlIGNhcmQgYm9yZGVyc1xyXG4gICAqL1xyXG4gIG5vQm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHNob3cgdHJhbnNwYXJlbnQgYmFja2dyb3VuZFxyXG4gICAqL1xyXG4gIG5vQmc6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gbGlmdCB1cCBvbiBob3ZlclxyXG4gICAqL1xyXG4gIGxpZnRVcDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogVGhlIENhcmQgY29udGVudFxyXG4gICAqL1xyXG4gIGNhcmRDb250ZW50OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIENhcmQgTWVkaWEgY29udGVudFxyXG4gICAqL1xyXG4gIG1lZGlhQ29udGVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250ZW50IGFsaWdubWVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQcm9kdWN0O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkUHJvZHVjdCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgY29sb3JzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uQWx0ZXJuYXRlIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBmb250V2VpZ2h0NzAwOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxuICB0ZXh0Qmx1ZToge1xyXG4gICAgY29sb3I6IFwiIzUxMjBGRlwiLFxyXG4gIH0sXHJcbiAgaW1nRmx1aWQ6XHJcbiAge1xyXG4gICAgd2lkdGg6XCI1MHB4XCIsXHJcbiAgICBoZWlnaHQ6XCI1MHB4XCJcclxuICB9LFxyXG4gIHBiXzA6IHtcclxuICAgIHBhZGRpbmdCb3R0b206IFwiMCAhaW1wb3J0YW50XCIsXHJcbiAgfSxcclxuICBwYl9wdF8wOiB7XHJcbiAgICBwYWRkaW5nVG9wOiBcIjAgIWltcG9ydGFudFwiLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogXCIwICFpbXBvcnRhbnRcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHByb21vIGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkUHJvbW8gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZUNvbG9yLFxyXG4gICAgZm9udEljb25DbGFzcyxcclxuICAgIGNvbG9yLFxyXG4gICAgdGl0bGUsXHJcbiAgICBzdWJ0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgYWxpZ24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBzcmMsXHJcbiAgICBpY29uQWx0ZXJuYXRlUHJvcHMsXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIGRlc2NyaXB0aW9uUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGxldCBqdXN0aWZ5R3JpZCA9IFwiZmxleC1zdGFydFwiO1xyXG4gIGlmIChhbGlnbiA9PT0gXCJjZW50ZXJcIikge1xyXG4gICAganVzdGlmeUdyaWQgPSBcImNlbnRlclwiO1xyXG4gIH0gZWxzZSBpZiAoYWxpZ24gPT09IFwicmlnaHRcIikge1xyXG4gICAganVzdGlmeUdyaWQgPSBcImZsZXgtZW5kXCI7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEJhc2VcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFwiY2FyZF9fcHJvbW9cIiwgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT0nY2FyZC1wcm9tb19fd3JhcHBlcic+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9e2p1c3RpZnlHcmlkfVxyXG4gICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdjYXJkLXByb21vX19pY29uLXdyYXBwZXInXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9e3NyY30gYWx0PXtzcmN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdGbHVpZH0vPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFwiY2FyZC1wcm9tb19fdGl0bGUtd3JhcHBlclwiLCBjbGFzc2VzLnBiXzApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J2g0J1xyXG4gICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICBcImNhcmQtcHJvbW9fX3RpdGxlXCIsXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcy5mb250V2VpZ2h0NzAwLFxyXG4gICAgICAgICAgICAgIGNsYXNzZXMudGV4dEJsdWVcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgey4uLnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAge3N1YnRpdGxlICYmIChcclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXCJjYXJkLXByb21vX19zdWJ0aXRsZS13cmFwcGVyXCIsIGNsYXNzZXMucGJfcHRfMCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0naDYnXHJcbiAgICAgICAgICAgICAgY29sb3I9J3RleHRQcmltYXJ5J1xyXG4gICAgICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXCJjYXJkLXByb21vX19zdWJ0aXRsZVwiLCBjbGFzc2VzLmZvbnRXZWlnaHQ3MDApfVxyXG4gICAgICAgICAgICAgIHsuLi5zdWJ0aXRsZVByb3BzfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcImNhcmQtcHJvbW9fX2Rlc2NyaXB0aW9uLXdyYXBwZXJcIiwgY2xhc3Nlcy5wYl9wdF8wKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MSdcclxuICAgICAgICAgICAgICBjb2xvcj0ndGV4dFByaW1hcnknXHJcbiAgICAgICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2FyZC1wcm9tb19fZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgey4uLmRlc2NyaXB0aW9uUHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NhcmRCYXNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkUHJvbW8uZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsaWduOiAnbGVmdCcsXHJcbiAgaWNvbkFsdGVybmF0ZVByb3BzOiB7fSxcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxuICBkZXNjcmlwdGlvblByb3BzOiB7fSxcclxufTtcclxuXHJcbkNhcmRQcm9tby5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBQcm9tbyB0aXRsZSB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gc3VidGl0bGUgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBQcm9tbyBkZXNjcmlwdGlvbiB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIGZvbnQgaWNvbiBjbGFzcyBuYW1lIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgZm9udEljb25DbGFzczogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBQcm9tbyBpY29uIGNvbG9yIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICBjb2xvcnMucmVkLFxyXG4gICAgY29sb3JzLnBpbmssXHJcbiAgICBjb2xvcnMucHVycGxlLFxyXG4gICAgY29sb3JzLmRlZXBQdXJwbGUsXHJcbiAgICBjb2xvcnMuaW5kaWdvLFxyXG4gICAgY29sb3JzLmJsdWUsXHJcbiAgICBjb2xvcnMubGlnaHRCbHVlLFxyXG4gICAgY29sb3JzLmN5YW4sXHJcbiAgICBjb2xvcnMudGVhbCxcclxuICAgIGNvbG9ycy5ncmVlbixcclxuICAgIGNvbG9ycy5saWdodEdyZWVuLFxyXG4gICAgY29sb3JzLmxpbWUsXHJcbiAgICBjb2xvcnMueWVsbG93LFxyXG4gICAgY29sb3JzLmFtYmVyLFxyXG4gICAgY29sb3JzLm9yYW5nZSxcclxuICAgIGNvbG9ycy5kZWVwT3JhbmdlLFxyXG4gICAgY29sb3JzLmJyb3duLFxyXG4gICAgY29sb3JzLmdyZXksXHJcbiAgICBjb2xvcnMuYmx1ZUdyZXksXHJcbiAgXSkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudCBhbGlnbm1lbnRcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgY29sb3JcclxuICAgKi9cclxuICB0aXRsZUNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgSWNvbkFsdGVybmF0ZSBjb21wb25lbnRcclxuICAgKi9cclxuICBpY29uQWx0ZXJuYXRlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBzdWJ0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBkZXNjaXB0aW9uIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb25Qcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQcm9tbztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZFByb21vJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge1xyXG4gIEdyaWQsXHJcbiAgQXZhdGFyLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUF2YXRhcixcclxuICBMaXN0SXRlbVRleHQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSByZXZpZXcgY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRSZXZpZXcgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWNvbixcclxuICAgIHRleHQsXHJcbiAgICBhdXRob3JQaG90byxcclxuICAgIGF1dGhvck5hbWUsXHJcbiAgICBhdXRob3JUaXRsZSxcclxuICAgIGFsaWduLFxyXG4gICAgdGV4dFZhcmlhbnQsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB0ZXh0UHJvcHMsXHJcbiAgICBsaXN0SXRlbVByaW1hcnlUeXBvZ3JhcGh5UHJvcHMsXHJcbiAgICBsaXN0SXRlbVNlY29uZGFyeVR5cG9ncmFwaHlQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgbGV0IGp1c3RpZnlHcmlkID0gJ2NlbnRlcic7XHJcbiAgaWYgKGFsaWduID09PSAnbGVmdCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gJ2ZsZXgtc3RhcnQnO1xyXG4gIH0gZWxzZSBpZiAoYWxpZ24gPT09ICdyaWdodCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gJ2ZsZXgtZW5kJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEJhc2VcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjYXJkLXJldmlldycsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fd3JhcHBlclwiPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtqdXN0aWZ5R3JpZH1cclxuICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X19pY29uLXdyYXBwZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX3RleHQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD17dGV4dFZhcmlhbnR9XHJcbiAgICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgIHsuLi50ZXh0UHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2xpdHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e2p1c3RpZnlHcmlkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fbGlzdC13cmFwcGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpc3QgZGlzYWJsZVBhZGRpbmcgY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2xpc3RcIj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2xpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyIGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X19saXN0LWl0ZW0tYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICB7Li4uYXV0aG9yUGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXthdXRob3JOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X19hdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2xpc3QtaXRlbS10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17YXV0aG9yTmFtZX1cclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXthdXRob3JUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmxpc3RJdGVtUHJpbWFyeVR5cG9ncmFwaHlQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ubGlzdEl0ZW1TZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ2FyZEJhc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRSZXZpZXcuZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsaWduOiAnY2VudGVyJyxcclxuICB0ZXh0VmFyaWFudDogJ2g2JyxcclxuICB0ZXh0UHJvcHM6IHt9LFxyXG4gIGxpc3RJdGVtUHJpbWFyeVR5cG9ncmFwaHlQcm9wczoge30sXHJcbiAgbGlzdEl0ZW1TZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQ2FyZFJldmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBJY29uIHRvIHNob3cgaW5zaWRlIHRoZSByZXZpZXcgY2FyZFxyXG4gICAqL1xyXG4gIGljb246IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUmV2aWV3IHRleHQgdG8gc2hvdyBpbnNpZGUgdGhlIHJldmlldyBjYXJkXHJcbiAgICovXHJcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFJldmlld2VyIHBob3RvIHRvIHNob3cgaW5zaWRlIHRoZSByZXZpZXcgY2FyZC5TaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggc3JjIGFuZCBzcmNTZXQgcHJvcGVydGllc1xyXG4gICAqL1xyXG4gIGF1dGhvclBob3RvOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUmV2aWV3ZXIgbmFtZSB0byBzaG93IGluc2lkZSB0aGUgcmV2aWV3IGNhcmRcclxuICAgKi9cclxuICBhdXRob3JOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUmV2aWV3ZXIgdGl0bGUgdG8gc2hvdyBpbnNpZGUgdGhlIHJldmlldyBjYXJkXHJcbiAgICovXHJcbiAgYXV0aG9yVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQWxpZ25tZW50IG9mIHRoZSBjb250ZW50XHJcbiAgICovXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJ10pLFxyXG4gIC8qKlxyXG4gICAqIFJldmlldyB0ZXh0IHZhcmlhbnRcclxuICAgKi9cclxuICB0ZXh0VmFyaWFudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHRleHQgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0ZXh0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBsaXN0IGl0ZW0gcHJpbWFyeSB0ZXh0IFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgbGlzdEl0ZW1QcmltYXJ5VHlwb2dyYXBoeVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgbGlzdCBpdGVtIHNlY29uZGFyeSB0ZXh0IFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgbGlzdEl0ZW1TZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUmV2aWV3O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkUmV2aWV3JztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEdyaWQsIEJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAndmFsaWRhdGUuanMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3Qgc2NoZW1hID0ge1xyXG4gIGZ1bGxuYW1lOiB7XHJcbiAgICBwcmVzZW5jZTogeyBhbGxvd0VtcHR5OiBmYWxzZSwgbWVzc2FnZTogJ2lzIHJlcXVpcmVkJyB9LFxyXG4gICAgbGVuZ3RoOiB7XHJcbiAgICAgIG1heGltdW06IDEyOCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBlbWFpbDoge1xyXG4gICAgcHJlc2VuY2U6IHsgYWxsb3dFbXB0eTogZmFsc2UsIG1lc3NhZ2U6ICdpcyByZXF1aXJlZCcgfSxcclxuICAgIGVtYWlsOiB0cnVlLFxyXG4gICAgbGVuZ3RoOiB7XHJcbiAgICAgIG1heGltdW06IDMwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtZXNzYWdlOiB7XHJcbiAgICBwcmVzZW5jZTogeyBhbGxvd0VtcHR5OiBmYWxzZSwgbWVzc2FnZTogJ2lzIHJlcXVpcmVkJyB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IFtmb3JtU3RhdGUsIHNldEZvcm1TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgIHZhbHVlczoge30sXHJcbiAgICB0b3VjaGVkOiB7fSxcclxuICAgIGVycm9yczoge30sXHJcbiAgfSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlcnJvcnMgPSB2YWxpZGF0ZShmb3JtU3RhdGUudmFsdWVzLCBzY2hlbWEpO1xyXG5cclxuICAgIHNldEZvcm1TdGF0ZShmb3JtU3RhdGUgPT4gKHtcclxuICAgICAgLi4uZm9ybVN0YXRlLFxyXG4gICAgICBpc1ZhbGlkOiBlcnJvcnMgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgIGVycm9yczogZXJyb3JzIHx8IHt9LFxyXG4gICAgfSkpO1xyXG4gIH0sIFtmb3JtU3RhdGUudmFsdWVzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnBlcnNpc3QoKTtcclxuXHJcbiAgICBzZXRGb3JtU3RhdGUoZm9ybVN0YXRlID0+ICh7XHJcbiAgICAgIC4uLmZvcm1TdGF0ZSxcclxuICAgICAgdmFsdWVzOiB7XHJcbiAgICAgICAgLi4uZm9ybVN0YXRlLnZhbHVlcyxcclxuICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOlxyXG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCdcclxuICAgICAgICAgICAgPyBldmVudC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgICAgICA6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgfSxcclxuICAgICAgdG91Y2hlZDoge1xyXG4gICAgICAgIC4uLmZvcm1TdGF0ZS50b3VjaGVkLFxyXG4gICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFzRXJyb3IgPSBmaWVsZCA9PlxyXG4gICAgZm9ybVN0YXRlLnRvdWNoZWRbZmllbGRdICYmIGZvcm1TdGF0ZS5lcnJvcnNbZmllbGRdID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgbmFtZT1cImNvbnRhY3QtZm9ybVwiXHJcbiAgICAgICAgbWV0aG9kPVwicG9zdFwiXHJcbiAgICAgICAgYWN0aW9uPVwiL3N1Ym1pdGlvbi5odG1sP2NvbnRhY3QtZm9ybS1zdWJtaXQtc3VjY2Vzcz10cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZvcm0tbmFtZVwiIHZhbHVlPVwiY29udGFjdC1mb3JtXCIgLz5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5Db250YWN0IFVzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICBXZSBjYXJlZnVsbHkgcmVhZCBhbmQgYW5zd2VyIHRvIGFsbCBvdXIgZW1haWxzLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRnVsbCBOYW1lICpcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImZ1bGxuYW1lXCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBoZWxwZXJ0ZXh0PXtcclxuICAgICAgICAgICAgICAgIGhhc0Vycm9yKCdmdWxsbmFtZScpID8gZm9ybVN0YXRlLmVycm9ycy5mdWxsbmFtZVswXSA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXJyb3I9e2hhc0Vycm9yKCdmdWxsbmFtZScpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtU3RhdGUudmFsdWVzLmZ1bGxuYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkUtbWFpbCAqXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgaGVscGVydGV4dD17aGFzRXJyb3IoJ2VtYWlsJykgPyBmb3JtU3RhdGUuZXJyb3JzLmVtYWlsWzBdIDogbnVsbH1cclxuICAgICAgICAgICAgICBlcnJvcj17aGFzRXJyb3IoJ2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtU3RhdGUudmFsdWVzLmVtYWlsIHx8ICcnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk1lc3NhZ2UgKlwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgaGVscGVydGV4dD17XHJcbiAgICAgICAgICAgICAgICBoYXNFcnJvcignbWVzc2FnZScpID8gZm9ybVN0YXRlLmVycm9ycy5tZXNzYWdlWzBdIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlcnJvcj17aGFzRXJyb3IoJ21lc3NhZ2UnKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS52YWx1ZXMubWVzc2FnZSB8fCAnJ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICBGaWVsZHMgdGhhdCBhcmUgbWFya2VkIHdpdGggYW4gYXN0ZXJpc2sgKCopIHNpZ24gYXJlIHJlcXVpcmVkLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFmb3JtU3RhdGUuaXNWYWxpZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NvbnRhY3RGb3JtJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBkZXNjcmlwdGlvbiBsaXN0IHdpdGggaWNvblxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IERlc2NyaXB0aW9uTGlzdEljb24gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdGl0bGUsXHJcbiAgICBzdWJ0aXRsZSxcclxuICAgIGljb24sXHJcbiAgICBhbGlnbixcclxuICAgIHRpdGxlVmFyaWFudCxcclxuICAgIHN1YnRpdGxlVmFyaWFudCxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHRpdGxlUHJvcHMsXHJcbiAgICBzdWJ0aXRsZVByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBsZXQgZ3JpZEp1c3RpZnkgPSAnY2VudGVyJztcclxuXHJcbiAgaWYgKGFsaWduID09PSAnbGVmdCcpIHtcclxuICAgIGdyaWRKdXN0aWZ5ID0gJ2ZsZXgtc3RhcnQnO1xyXG4gIH0gZWxzZSBpZiAoYWxpZ24gPT09ICdyaWdodCcpIHtcclxuICAgIGdyaWRKdXN0aWZ5ID0gJ2ZsZXgtZW5kJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBjb250YWluZXJcclxuICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnZGVzY3JpcHRpb24tbGlzdC1pY29uJywgY2xhc3NOYW1lKX1cclxuICAgID5cclxuICAgICAgPEdyaWRcclxuICAgICAgICBpdGVtXHJcbiAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9e2dyaWRKdXN0aWZ5fVxyXG4gICAgICAgIHhzPXsxMn1cclxuICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1saXN0LWljb25fX2ljb24td3JhcHBlclwiXHJcbiAgICAgID5cclxuICAgICAgICB7aWNvbn1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tbGlzdC1pY29uX190aXRsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIHZhcmlhbnQ9e3RpdGxlVmFyaWFudH1cclxuICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxyXG4gICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMudGl0bGUsICdkZXNjcmlwdGlvbi1saXN0LWljb25fX3RpdGxlJyl9XHJcbiAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIHtzdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWxpc3QtaWNvbl9fc3VidGl0bGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD17c3VidGl0bGVWYXJpYW50fVxyXG4gICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWxpc3QtaWNvbl9fc3VidGl0bGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApfVxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5EZXNjcmlwdGlvbkxpc3RJY29uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgdGl0bGVWYXJpYW50OiAnaDYnLFxyXG4gIHN1YnRpdGxlVmFyaWFudDogJ2JvZHkxJyxcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxufTtcclxuXHJcbkRlc2NyaXB0aW9uTGlzdEljb24ucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIHRpdGxlXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiB0aGUgc3VidGl0bGVcclxuICAgKi9cclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHNob3VsZCBzaG93IHRoZSBhbHRlcm5hdGUgaWNvblxyXG4gICAqL1xyXG4gIGljb246IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGFsaWdubWVudCBvZiB0aGUgaXRlbXNcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgdmFyaWFudFxyXG4gICAqL1xyXG4gIHRpdGxlVmFyaWFudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBTdWJ0aXRsZSB2YXJpYW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVWYXJpYW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb25MaXN0SWNvbjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRGVzY3JpcHRpb25MaXN0SWNvbic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBvdmVyZmxvdzogJ3Zpc2libGUnLFxyXG4gIH0sXHJcbiAgY29sb3JEZWZhdWx0OiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuaW5kaWdvWzkwMF0sXHJcbiAgfSxcclxuICBoZXJvV3JhcHBlcjoge1xyXG4gICAgekluZGV4OiAyLFxyXG4gIH0sXHJcbiAgaGVyb0NvdmVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIG9wYWNpdHk6IDAuMixcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHpJbmRleDogMSxcclxuICB9LFxyXG4gIGhlcm9CZzoge1xyXG4gICAgYmFja2dyb3VuZFNpemU6ICdhdXRvJyxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gIH0sXHJcbiAgbm9Db3Zlck9wYWNpdHk6IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBiYWNrZ3JvdW5kIGhlcm9cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBIZXJvQmFja2dyb3VuZCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBjaGlsZHJlbixcclxuICAgIGRpc2JhbGVDb3Zlck9wYWNpdHksXHJcbiAgICBiYWNrZ3JvdW5kSW1nLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uLFxyXG4gICAgYmFja2dyb3VuZENvbG9yLFxyXG4gICAgY29udGVudFNlY3Rpb25DbGFzc05hbWUsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHVzZUN1c3RvbVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIGNvdmVyQmc6IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZEltZ30pYCxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcclxuICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZENvbG9yLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjoge1xyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGJhY2tncm91bmRQb3NpdGlvbixcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBjdXN0b21DbGFzc2VzID0gdXNlQ3VzdG9tU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAnaGVyby1iYWNrZ3JvdW5kJyxcclxuICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID8gY3VzdG9tQ2xhc3Nlcy5iYWNrZ3JvdW5kQ29sb3IgOiBjbGFzc2VzLmNvbG9yRGVmYXVsdCxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnaGVyby1iYWNrZ3JvdW5kX193cmFwcGVyJywgY2xhc3Nlcy5oZXJvV3JhcHBlcil9PlxyXG4gICAgICAgIDxTZWN0aW9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgIGNvbnRlbnRTZWN0aW9uQ2xhc3NOYW1lID8gY29udGVudFNlY3Rpb25DbGFzc05hbWUgOiAnJyxcclxuICAgICAgICAgICAgJ2hlcm8tYmFja2dyb3VuZF9fc2VjdGlvbicsXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgJ2hlcm8tYmFja2dyb3VuZF9fY292ZXInLFxyXG4gICAgICAgICAgY2xhc3Nlcy5oZXJvQmcsXHJcbiAgICAgICAgICBjbGFzc2VzLmhlcm9Db3ZlcixcclxuICAgICAgICAgIGN1c3RvbUNsYXNzZXMuY292ZXJCZyxcclxuICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbiA/IGN1c3RvbUNsYXNzZXMuYmFja2dyb3VuZFBvc2l0aW9uIDoge30sXHJcbiAgICAgICAgICBkaXNiYWxlQ292ZXJPcGFjaXR5ID8gY2xhc3Nlcy5ub0NvdmVyT3BhY2l0eSA6IHt9LFxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb0JhY2tncm91bmQucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ2hpbGRyZW4gdG8gcGxhY2VkIGluc2lkZSB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBCYWNrZ3JvdW5kIGltYWdlIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgYmFja2dyb3VuZEltZzogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgYmFja2dyb3VuZENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEJhY2tncm91bmQgcG9zaXRpb24gb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBiYWNrZ3JvdW5kUG9zaXRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ3VzdG9tIGNsYXNzZXMgZm9yIHRoZSBjb250ZW50IHNlY3Rpb25cclxuICAgKi9cclxuICBjb250ZW50U2VjdGlvbkNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBTaG91bGQgZGlzYWJsZSBoZXJlIGNvdmVyIG9wYWNpdHlcclxuICAgKi9cclxuICBkaXNiYWxlQ292ZXJPcGFjaXR5OiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9CYWNrZ3JvdW5kO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9IZXJvQmFja2dyb3VuZCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICB9LFxyXG4gIGhlcm86IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBtYXhXaWR0aDogdGhlbWUubGF5b3V0LmNvbnRlbnRXaWR0aCxcclxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uLXJldmVyc2VcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZXJvTGVmdFNpZGU6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgOCksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAyKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZXJvUmlnaHRTaWRlOiB7XHJcbiAgICBtYXhXaWR0aDogXCI1MCVcIixcclxuICAgIGZsZXg6IFwiMCAwIDUwJVwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgZmxleDogXCIwIDAgMTAwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlcm9Db3Zlcjoge1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHdpZHRoOiBcIjUwdndcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaGVyb0ltYWdlQ29udGFpbmVyOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgfSxcclxuICBoZXJvSW1hZ2U6IHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICBsZWZ0OiBcIjAlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIHNoYXBlT3V0c2lkZTogXCJwb2x5Z29uKDEwJSAwJSwgMTAwJSAwLCAxMDAlIDEwMCUsIDAlIDEwMCUpXCIsXHJcbiAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oMTAlIDAlLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCUgMTAwJSlcIixcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcclxuICAgIH0sXHJcbiAgICBcIiYgaW1nXCI6IHtcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgICBoZWlnaHQ6IDQ1MCxcclxuICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBzaGFwZWQgaGVyb1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEhlcm9TaGFwZWQgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBsZWZ0U2lkZSwgcmlnaHRTaWRlLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsICdoZXJvLXNoYXBlZCcsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2hhcGVkX193cmFwcGVyJywgY2xhc3Nlcy5oZXJvKX0+XHJcbiAgICAgICAgPFNlY3Rpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaGFwZWRfX2xlZnQtc2lkZScsIGNsYXNzZXMuaGVyb0xlZnRTaWRlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bGVmdFNpZGV9XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNoYXBlZF9fcmlnaHQtc2lkZScsIGNsYXNzZXMuaGVyb1JpZ2h0U2lkZSl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2hhcGVkX19jb3ZlcicsIGNsYXNzZXMuaGVyb0NvdmVyKX0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICAnaGVyby1zaGFwZWRfX2ltYWdlLWNvbnRhaW5lcicsXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLmhlcm9JbWFnZUNvbnRhaW5lcixcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2hhcGVkX19pbWFnZScsIGNsYXNzZXMuaGVyb0ltYWdlKX0+XHJcbiAgICAgICAgICAgICAgICB7cmlnaHRTaWRlfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvU2hhcGVkLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIENoaWxkcmVuIHRvIHBsYWNlZCBpbnNpZGUgdGhlIHNlY3Rpb24gcmlnaHQgc2lkZVxyXG4gICAqL1xyXG4gIHJpZ2h0U2lkZTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDaGlsZHJlbiB0byBwbGFjZWQgaW5zaWRlIHRoZSBzZWN0aW9uIGxlZnQgc2lkZVxyXG4gICAqL1xyXG4gIGxlZnRTaWRlOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb1NoYXBlZDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSGVyb1NoYXBlZCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY29sb3JzLCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbiAgaW1hZ2VXcmFwcGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIG1heEhlaWdodDogNDAwLFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICB9LFxyXG4gIGNvdmVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuaW5kaWdvWzkwMF0sXHJcbiAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHRvcDogJzUwJScsXHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgdHJhbnNmb3JtOiAnbm9uZScsXHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgNCksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgc2lkZSBpbWFnZSBoZXJvXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgSGVyb1NpZGVJbWFnZSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpbWFnZVNyYyxcclxuICAgIGltYWdlU3JjU2V0LFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICByZXZlcnNlLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB1c2VDdXN0b21TdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgICBjb3ZlckJnOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmRDb2xvcixcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBjdXN0b21DbGFzc2VzID0gdXNlQ3VzdG9tU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBjb250YWluZXJcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNpZGUtaW1hZ2UnLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIGRpcmVjdGlvbj17cmV2ZXJzZSA/ICdyb3ctcmV2ZXJzZScgOiAncm93J31cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgaXRlbVxyXG4gICAgICAgIHhzPXsxMn1cclxuICAgICAgICBtZD17Nn1cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2lkZS1pbWFnZV9faW1hZ2Utd3JhcHBlcicsIGNsYXNzZXMuaW1hZ2VXcmFwcGVyKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtpbWFnZVNyY31cclxuICAgICAgICAgIHNyY1NldD17aW1hZ2VTcmNTZXQgPyBpbWFnZVNyY1NldCA6ICcnfVxyXG4gICAgICAgICAgYWx0PXsnLi4uJ31cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaWRlLWltYWdlX19pbWFnZScsIGNsYXNzZXMuaW1hZ2UpfVxyXG4gICAgICAgICAgbGF6eT17ZmFsc2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICdoZXJvLXNpZGUtaW1hZ2VfX2NvdmVyJyxcclxuICAgICAgICAgICAgY2xhc3Nlcy5jb3ZlcixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yID8gY3VzdG9tQ2xhc3Nlcy5jb3ZlckJnIDoge30sXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWRcclxuICAgICAgICBpdGVtXHJcbiAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgIG1kPXs2fVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaWRlLWltYWdlX19jb250ZW50JywgY2xhc3Nlcy5jb250ZW50KX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvU2lkZUltYWdlLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIENoaWxkcmVuIHRvIHBsYWNlZCBpbnNpZGUgdGhlIGhlcm9cclxuICAgKi9cclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgLyoqXHJcbiAgICogQmFja2dyb3VuZCBjb2xvciBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBTaWRlIGltYWdlXHJcbiAgICovXHJcbiAgaW1hZ2VTcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTaWRlIGltYWdlIHNyY3NldFxyXG4gICAqL1xyXG4gIGltYWdlU3JjU2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCBzaG93IGluIHJldmVyc2Ugb3JkZXJcclxuICAgKi9cclxuICByZXZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9TaWRlSW1hZ2U7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0hlcm9TaWRlSW1hZ2UnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBIZXJvU2ltcGxlQmFja2dyb3VuZCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBjaGlsZHJlbixcclxuICAgIGJhY2tncm91bmRTaXplLFxyXG4gICAgYmFja2dyb3VuZEltYWdlLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHVzZUJhY2tncm91bmQgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRTaXplOiB7XHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBiYWNrZ3JvdW5kU2l6ZSxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHtcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBiYWNrZ3JvdW5kUG9zaXRpb24sXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuICBjb25zdCBiYWNrZ3JvdW5kQ2xhc3NlcyA9IHVzZUJhY2tncm91bmQoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICdoZXJvLXNpbXBsZS1iYWNrZ3JvdW5kJyxcclxuICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIGJhY2tncm91bmRDbGFzc2VzLmJhY2tncm91bmRJbWFnZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ2xhc3Nlcy5iYWNrZ3JvdW5kU2l6ZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ2xhc3Nlcy5iYWNrZ3JvdW5kUG9zaXRpb24sXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8U2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvLXNpbXBsZS1iYWNrZ3JvdW5kX19zZWN0aW9uXCI+e2NoaWxkcmVufTwvU2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvU2ltcGxlQmFja2dyb3VuZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxufTtcclxuXHJcbkhlcm9TaW1wbGVCYWNrZ3JvdW5kLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBtYWluIGNvbnRlbnRcclxuICAgKi9cclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgYmFja2dyb3VuZCBpbWFnZSBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGJhY2tncm91bmRJbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBiYWNrZ3JvdW5kIHNpemUgb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBiYWNrZ3JvdW5kU2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgYmFja2dyb3VuZCBwb3NpdGlvbiBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGJhY2tncm91bmRQb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9TaW1wbGVCYWNrZ3JvdW5kO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9IZXJvU2ltcGxlQmFja2dyb3VuZCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIG1hcFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IE1hcCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IHpvb20sIGNlbnRlciwgcGlucywgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgTCA9IHJlcXVpcmUoJ2xlYWZsZXQnKTtcclxuICAgIGRlbGV0ZSBMLkljb24uRGVmYXVsdC5wcm90b3R5cGUuX2dldEljb25Vcmw7XHJcblxyXG4gICAgY29uc3QgbWFya2VySWNvbjJ4ID0gcmVxdWlyZSgnYXNzZXRzL2ltYWdlcy9sZWFmbGV0LWFzc2V0cy9tYXJrZXItaWNvbi0yeC5wbmcnKTtcclxuICAgIGNvbnN0IG1hcmtlckljb24gPSByZXF1aXJlKCdhc3NldHMvaW1hZ2VzL2xlYWZsZXQtYXNzZXRzL21hcmtlci1pY29uLnBuZycpO1xyXG4gICAgY29uc3QgbWFya2VyU2hhZG93ID0gcmVxdWlyZSgnYXNzZXRzL2ltYWdlcy9sZWFmbGV0LWFzc2V0cy9tYXJrZXItc2hhZG93LnBuZycpO1xyXG5cclxuICAgIEwuSWNvbi5EZWZhdWx0Lm1lcmdlT3B0aW9ucyh7XHJcbiAgICAgIGljb25SZXRpbmFVcmw6IHR5cGVvZiBtYXJrZXJJY29uMnggPT09ICdvYmplY3QnID8gbWFya2VySWNvbjJ4LmRlZmF1bHQgOiBtYXJrZXJJY29uMngsXHJcbiAgICAgIGljb25Vcmw6IHR5cGVvZiBtYXJrZXJJY29uID09PSAnb2JqZWN0JyA/IG1hcmtlckljb24uZGVmYXVsdCA6IG1hcmtlckljb24sXHJcbiAgICAgIHNoYWRvd1VybDogdHlwZW9mIG1hcmtlclNoYWRvdyA9PT0gJ29iamVjdCcgPyBtYXJrZXJTaGFkb3cuZGVmYXVsdCA6IG1hcmtlclNoYWRvdyxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgUmVhY3RNYXAgPSByZXF1aXJlKCdyZWFjdC1sZWFmbGV0JykuTWFwO1xyXG4gIGNvbnN0IFRpbGVMYXllciA9IHJlcXVpcmUoJ3JlYWN0LWxlYWZsZXQnKS5UaWxlTGF5ZXI7XHJcbiAgY29uc3QgTWFya2VyID0gcmVxdWlyZSgncmVhY3QtbGVhZmxldCcpLk1hcmtlcjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdE1hcFxyXG4gICAgICB6b29tPXt6b29tfVxyXG4gICAgICBjZW50ZXI9e2NlbnRlcn1cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdtYXAnLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8VGlsZUxheWVyXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWFwX190aWxlLWxheWVyXCJcclxuICAgICAgICBkZXRlY3RSZXRpbmE9e3RydWV9XHJcbiAgICAgICAgYXR0cmlidXRpb249JyZhbXA7Y29weSA8YSBocmVmPVwiaHR0cDovL29zbS5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xyXG4gICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcclxuICAgICAgLz5cclxuICAgICAge3BpbnMgJiZcclxuICAgICAgICBwaW5zLmxlbmd0aCAmJlxyXG4gICAgICAgIHBpbnMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcF9fbWFya2VyXCJcclxuICAgICAgICAgICAgcG9zaXRpb249e1tpdGVtLmxvY2F0aW9uLnksIGl0ZW0ubG9jYXRpb24ueF19XHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L1JlYWN0TWFwPlxyXG4gICk7XHJcbn07XHJcblxyXG5NYXAuZGVmYXVsdFByb3BzID0ge1xyXG4gIHpvb206IDEwLFxyXG4gIGNlbnRlcjogWzAsIDBdLFxyXG59O1xyXG5cclxuTWFwLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIE1hcCB6b29tXHJcbiAgICovXHJcbiAgem9vbTogUHJvcFR5cGVzLm5vZGUsXHJcbiAgLyoqXHJcbiAgICogTWFwIGNlbnRlclxyXG4gICAqL1xyXG4gIGNlbnRlcjogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogZGF0YSBvZiB0aGUgbG9jYXRpb25zLiBFeGFtcGxlOiBbeyBsb2NhdGlvbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9IH1dXHJcbiAgICovXHJcbiAgcGluczogUHJvcFR5cGVzLmFycmF5LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9NYXAnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAvKiBzdXBwb3J0IGZvciBwbHVnaW4gaHR0cHM6Ly9naXRodWIuY29tL2JmcmVkLWl0L29iamVjdC1maXQtaW1hZ2VzICovXHJcbiAgICBmb250RmFtaWx5OiAnb2JqZWN0LWZpdDogY292ZXI7JyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB6SW5kZXg6IC0xLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgUGFyYWxsYXggYmFja2dyb3VuZHNcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBQYXJhbGxheCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGJhY2tncm91bmRJbWFnZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGphcmFsbGF4RWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuamFyYWxsYXgnKTtcclxuICAgIGlmICghamFyYWxsYXhFbGVtcyB8fCAoamFyYWxsYXhFbGVtcyAmJiBqYXJhbGxheEVsZW1zLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGphcmFsbGF4ID0gcmVxdWlyZSgnamFyYWxsYXgnKS5qYXJhbGxheDtcclxuICAgIGphcmFsbGF4KGphcmFsbGF4RWxlbXMsIHsgc3BlZWQ6IDAuMiB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdqYXJhbGxheCcsICdwYXJhbGxheCcsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgZGF0YS1qYXJhbGxheFxyXG4gICAgICBkYXRhLXNwZWVkPVwiMC4yXCJcclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2phcmFsbGF4LWltZycsICdwYXJhbGxheF9faW1hZ2UnLCBjbGFzc2VzLmltYWdlKX1cclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWAgfX1cclxuICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAvPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUGFyYWxsYXgucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRlbnRcclxuICAgKi9cclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgLyoqXHJcbiAgICogVGhlIHBhcmFsbGF4IGJhY2tncm91bmQgaW1hZ2VcclxuICAgKi9cclxuICBiYWNrZ3JvdW5kSW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcmFsbGF4O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9QYXJhbGxheCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1heFdpZHRoOiB0aGVtZS5sYXlvdXQuY29udGVudFdpZHRoLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2LCAyKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDgsIDQpLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgsIDYpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZ1bGxXaWR0aDoge1xyXG4gICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgZGlzYWJsZVBhZGRpbmc6IHtcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgfSxcclxuICBuYXJyb3c6IHtcclxuICAgIG1heFdpZHRoOiA4MDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBzZWN0aW9uc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFNlY3Rpb24gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBmdWxsV2lkdGgsXHJcbiAgICBuYXJyb3csXHJcbiAgICBkaXNhYmxlUGFkZGluZyxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAnc2VjdGlvbicsXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIGZ1bGxXaWR0aCA/IGNsYXNzZXMuZnVsbFdpZHRoIDoge30sXHJcbiAgICAgICAgbmFycm93ID8gY2xhc3Nlcy5uYXJyb3cgOiB7fSxcclxuICAgICAgICBkaXNhYmxlUGFkZGluZyA/IGNsYXNzZXMuZGlzYWJsZVBhZGRpbmcgOiB7fSxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblNlY3Rpb24ucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ2hpbGRyZW4gdG8gcGxhY2VkIGluc2lkZSB0aGUgc2VjdGlvblxyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBTaG91bGQgc2hvdyBuYXJyb3cgc2VjdGlvbnNcclxuICAgKi9cclxuICBuYXJyb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCB0aGUgc2VjdGlvbiBiZSBmdWxsIHdpZHRoXHJcbiAgICovXHJcbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBTaG91bGQgdGhlIHNlY3Rpb24gcmVuZGVyIHdpdGggbm8gcGFkZGluZ1xyXG4gICAqL1xyXG4gIGRpc2FibGVQYWRkaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1NlY3Rpb24nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5hbHRlcm5hdGUubWFpbixcclxuICB9LFxyXG4gIGlubmVyOiB7XHJcbiAgICBtYXhXaWR0aDogdGhlbWUubGF5b3V0LmNvbnRlbnRXaWR0aCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2LCAyKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCA4KSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMTIsIDgpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGlubmVyTmFycm93ZWQ6IHtcclxuICAgIG1heFdpZHRoOiA4MDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBhbHRlcm5hdGl2ZSBzZWN0aW9uc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFNlY3Rpb25BbHRlcm5hdGUgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgaW5uZXJuYXJyb3dlZCwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdzZWN0aW9uLWFsdGVybmF0ZScsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAnc2VjdGlvbi1hbHRlcm5hdGVfX2NvbnRlbnQnLFxyXG4gICAgICAgICAgY2xhc3Nlcy5pbm5lcixcclxuICAgICAgICAgIGlubmVybmFycm93ZWQgPyBjbGFzc2VzLmlubmVyTmFycm93ZWQgOiB7fSxcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuU2VjdGlvbkFsdGVybmF0ZS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDaGlsZHJlbiB0byBwbGFjZWQgaW5zaWRlIHRoZSBzZWN0aW9uXHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCBzaG93IG5hcnJvdyBzZWN0aW9uc1xyXG4gICAqL1xyXG4gIGlubmVybmFycm93ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkFsdGVybmF0ZTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU2VjdGlvbkFsdGVybmF0ZSc7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2VjdGlvbiB9IGZyb20gJy4vU2VjdGlvbic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VjdGlvbkFsdGVybmF0ZSB9IGZyb20gJy4vU2VjdGlvbkFsdGVybmF0ZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVzY3JpcHRpb25MaXN0SWNvbiB9IGZyb20gJy4vRGVzY3JpcHRpb25MaXN0SWNvbic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZEJhc2UgfSBmcm9tICcuL0NhcmRCYXNlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkUmV2aWV3IH0gZnJvbSAnLi9DYXJkUmV2aWV3JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkQ2F0ZWdvcnkgfSBmcm9tICcuL0NhcmRDYXRlZ29yeSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZEpvYiB9IGZyb20gJy4vQ2FyZEpvYic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZEpvYk1pbmltYWwgfSBmcm9tICcuL0NhcmRKb2JNaW5pbWFsJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkSm9iVGFnIH0gZnJvbSAnLi9DYXJkSm9iVGFnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkSm9iQ29tcGFueSB9IGZyb20gJy4vQ2FyZEpvYkNvbXBhbnknO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFjY29yZGlvbiB9IGZyb20gJy4vQWNjb3JkaW9uJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZXJvU2hhcGVkIH0gZnJvbSAnLi9IZXJvU2hhcGVkJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkUHJvZHVjdCB9IGZyb20gJy4vQ2FyZFByb2R1Y3QnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hcCB9IGZyb20gJy4vTWFwJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZXJvQmFja2dyb3VuZCB9IGZyb20gJy4vSGVyb0JhY2tncm91bmQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlcm9TaWRlSW1hZ2UgfSBmcm9tICcuL0hlcm9TaWRlSW1hZ2UnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRQcm9tbyB9IGZyb20gJy4vQ2FyZFByb21vJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkQ2F0ZWdvcnlMaW5rIH0gZnJvbSAnLi9DYXJkQ2F0ZWdvcnlMaW5rJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZXJvU2ltcGxlQmFja2dyb3VuZCB9IGZyb20gJy4vSGVyb1NpbXBsZUJhY2tncm91bmQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRQcmljaW5nU3RhbmRhcmQgfSBmcm9tICcuL0NhcmRQcmljaW5nU3RhbmRhcmQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcmFsbGF4IH0gZnJvbSAnLi9QYXJhbGxheCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFjdEZvcm0gfSBmcm9tICcuL0NvbnRhY3RGb3JtJzsiLCJpbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuXHJcbmNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgVG9hc3RcclxuIiwiZXhwb3J0IGNvbnN0IEFwaVJvdXRlcyA9IHtcclxuICAgICAgICAgU0lHTlVQOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvYXV0aFwiLFxyXG4gICAgICAgICAgIHVybDogXCIvc2lnbnVwXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBMT0dJTjoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL2xvZ2luXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBSRVNFVFBBU1NXT1JEOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvYXV0aFwiLFxyXG4gICAgICAgICAgIHVybDogXCIvcmVzZXQtcGFzc3dvcmRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEZPUkdPVFBBU1NXT1JEOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvYXV0aFwiLFxyXG4gICAgICAgICAgIHVybDogXCIvZm9yZ290LXBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBHRVRVU0VSREVUQUlMUzoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL2RldGFpbHNcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBVU0VSREVUQUlMU1VQREFURToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL3VwZGF0ZVwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIFVTRVJQQVNTV09SRFVQREFURToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL2NoYW5nZS1wYXNzd29yZFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIFVTRVJGT1JHT1RQQVNTV09SRFVQREFURToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL2ZvcmdvdC1wYXNzd29yZFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgQ09VUlNFTElTVDoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2NvdXJzZS10b3BpYy8/bGltaXQ9YWxsXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBDT1VSU0VERVRBSUxTOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvY291cnNlLXRvcGljXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi86aWRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgQ09VUlNFREVUQUlMU0FVVEg6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9jb3Vyc2UtdG9waWNcIixcclxuICAgICAgICAgICB1cmw6IFwiLzppZFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEFQUExZQ09VUE9OOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvdHJhbnNhY3Rpb25cIixcclxuICAgICAgICAgICB1cmw6IFwiL2FwcGx5UHJvbW9cIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgTUFLRVBBWU1FTlQ6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi90cmFuc2FjdGlvblwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgUEFZTUVOVEhJU1RPUlk6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi90cmFuc2FjdGlvblwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBQVVJDSEFTRURDT1VSU0U6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9jb3Vyc2VcIixcclxuICAgICAgICAgICB1cmw6IFwiL3B1cmNoYXNlZC1jb3Vyc2VcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBDRVJUSUZJQ0FURVJFUVVFU1Q6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9jZXJ0aWZpY2F0ZS1yZXF1ZXN0XCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBCTE9HTElTVDoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2Jsb2dcIixcclxuICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEJMT0dERVRBSUw6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9ibG9nXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi86aWRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUVU5JVkVSU0lUWToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL3VuaXZlcnNpdGllc1wiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBHRVRDT1JQT1JBVEU6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi9jb3Jwb3JhdGlvblwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBDT05UQUNUX1VTOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvZW50ZXJwcmlzZVwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIFBSRVNTX1JFTEVBU0U6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9wcmVzcy1yZWxlYXNlXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBQUkVTU19ERVRBSUxTOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvcHJlc3MtcmVsZWFzZVwiLFxyXG4gICAgICAgICAgIHVybDogXCIvOmlkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEdFVF9MTVNEQVRBX0NPVVJTRToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL3RhbGVudExtc1wiLFxyXG4gICAgICAgICAgIHVybDogXCIvY291cnNlc1wiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBHRVRfTE1TREFUQV9DQVRFR09SWToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL3RhbGVudExtc1wiLFxyXG4gICAgICAgICAgIHVybDogXCIvY2F0ZWdvcnlcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgTkVXU0xFVFRFUlNVQlNDUklCRToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL25ld3MtbGV0dGVyXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUU09DSUFMTElOS0VTOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvc2V0dGluZ1wiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUUEFZTUVOVENFUlRJRklDQVRFREVUQUlMUzoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2NlcnRpZmljYXRlLXJlcXVlc3QvcGF5bWVudC1pbmZvXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi86aWRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgTUFLRVBBWU1FTlRDRVJUSUZJQ0FURToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2NlcnRpZmljYXRlLXJlcXVlc3QvcGF5bWVudFwiLFxyXG4gICAgICAgICAgIHVybDogXCIvOmlkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBDRVJUSUZJQ0FURV9EQVRBOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvY21zXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBGUk9OVF9QQUdFX0RBVEE6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9tYXJrZXQtY29udGVudFwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUX1RFQU1fREFUQToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL3RlYW1cIixcclxuICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICB9O1xyXG4iLCJjb25zdCBBcHBDb25maWcgPSB7XHJcbiAgICAvLyBGSUxFU19FTkRQT0lOVDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJTEVTX0VORFBPSU5ULFxyXG4gICAgLy8gQVBQX0VORFBPSU5UOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRU5EUE9JTlQsXHJcbiAgICBBUElfRU5EUE9JTlQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCxcclxuICAgIElNQUdFX1VSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU1BR0VfVVJMLFxyXG4gICAgU0lURV9OQU1FOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSVRFX05BTUVcclxuICAgIC8vIEFQSV9WRVJTSU9OOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX1ZFUlNJT04sXHJcbiAgICAvLyBERUZBVUxUX0RBVEVfRk9STUFUOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREVGQVVMVF9EQVRFX0ZPUk1BVCxcclxuICB9O1xyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb25maWc7IiwiZXhwb3J0ICogZnJvbSAnLi9BcGlSb3V0ZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FwcENvbmZpZyc7IiwiaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBFcnJvckhhbmRsZXJIZWxwZXIgfSBmcm9tIFwiLi9FcnJvckhhbmRsZXJIZWxwZXJcIjtcclxuaW1wb3J0IHsgU3VjY2Vzc0hhbmRsZXJIZWxwZXIgfSBmcm9tIFwiLi9TdWNjZXNzSGFuZGxlckhlbHBlclwiO1xyXG5pbXBvcnQgQXBwQ29uZmlnICBmcm9tIFwiLi4vY29uZmlnL2FwcENvbmZpZ1wiO1xyXG4vKipcclxuICogQXBpSGVscGVyIENsYXNzIC0gRm9yIG1ha2luZyBBcGkgUmVxdWVzdHNcclxuICogXHJcbiAqL1xyXG5sZXQgQ2FuY2VsVG9rZW4gPSBBeGlvcy5DYW5jZWxUb2tlbjtcclxubGV0IGNhbmNlbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGlIZWxwZXIge1xyXG4gIF9wb3J0YWxHYXRld2F5O1xyXG4gIF9hcGlWZXJzaW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3BvcnRhbEdhdGV3YXkgPSBBcHBDb25maWcuQVBJX0VORFBPSU5UO1xyXG4gICAgdGhpcy5fYXBpVmVyc2lvbiA9IFwiXCI7XHJcbiAgICB0aGlzLnNvdXJjZSA9IEF4aW9zLkNhbmNlbFRva2VuLnNvdXJjZSgpO1xyXG4gICAgdGhpcy5jYW5jZWxUb2tlbiA9IHRoaXMuc291cmNlLnRva2VuO1xyXG4gIH1cclxuICBzZXRIb3N0ID0gKGhvc3QpID0+IHtcclxuICAgIHRoaXMuX3BvcnRhbEdhdGV3YXkgPSBob3N0O1xyXG4gIH07XHJcbiAgc2V0QXBpVmVyc2lvbiA9ICh2ZXJzaW9uKSA9PiB7XHJcbiAgICB0aGlzLl9hcGlWZXJzaW9uID0gdmVyc2lvbjtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIEZldGNoZXMgZnJvbSB0aGUgR2F0ZXdheSBkZWZpbmVkIGJ5IHRoZSBpbnN0YW50aWF0ZWQgb2JqZWN0LiBBY2NlcHRzIDxUPiBhcyBvdXRwdXQgb2JqZWN0LlxyXG4gICAqIEBleGFtcGxlIDxjYXB0aW9uPlwiL0F1dGgvVXNlckFjY291bnRcIiwgXCIvR2V0Q3VycmVudFVzZXJcIiwgXCJHRVRcIiwgXCJKV1QgQ29udGVudFwiPC9jYXB0aW9uPlxyXG4gICAqIEBwYXJhbSB7c2VydmljZX0gc2VydmljZSAtIHdhbnRpbmcgdG8gYmUgYWNjZXNzIGV4LiBcIlVzZXJBdXRoL0F1dGhcIlxyXG4gICAqIEBwYXJhbSB7ZW5kcG9pbnR9IGVuZHBvaW50IC0geW91IHdpc2ggdG8gY2FsbCBleC4gXCIvTG9naW5cIlxyXG4gICAqIEBwYXJhbSB7bWV0aG9kfSBtZWhvdGQgLSBtZXRob2QgKEdFVCwgVVBEQVRFLCBERUxFVEUsIFBPU1QpXHJcbiAgICogQHBhcmFtIHtqd3R9IEpXVCAtIEpTT04gV2ViIFRva2VuIChPcHRpb25hbClcclxuICAgKiBAcGFyYW0ge3F1ZXJ5T3B0aW9uc30gUXVlcnkgLSBxdWVyeSBvcHRpb25zIGZvciBcIkdFVFwiIG1ldGhvZHMgKE9wdGlvbmFsKVxyXG4gICAqIEBwYXJhbSB7Ym9keX0gYm9keSAtIEpTT04gYm9keSBmb3IgXCJVUERBVEUsIERFTEVURSBhbmQgUE9TVFwiIG1ldGhvZHMgKE9wdGlvbmFsKVxyXG4gICAqL1xyXG4gIGFzeW5jIEZldGNoRnJvbVNlcnZlcihcclxuICAgIHNlcnZpY2UsXHJcbiAgICBlbmRwb2ludCxcclxuICAgIG1ldGhvZCxcclxuICAgIGF1dGhlbnRpY2F0ZWQgPSBmYWxzZSxcclxuICAgIGF1dGhUb2tlbixcclxuICAgIHF1ZXJ5T3B0aW9ucyA9IHVuZGVmaW5lZCxcclxuICAgIGJvZHkgPSB1bmRlZmluZWQsXHJcbiAgICByZXNwb25zZVR5cGUsXHJcbiAgKSB7XHJcbiAgICBsZXQgdXJsID0gdGhpcy5fcG9ydGFsR2F0ZXdheSArIHNlcnZpY2UgKyBlbmRwb2ludDtcclxuICAgIGxldCBoZWFkZXJzID0geyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9O1xyXG4gICAgaWYgKGF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgLy8gY29uc3Qgc3RvcmFnZVNlc3Npb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICBjb25zdCBzdG9yYWdlU2Vzc2lvbiA9IGF1dGhUb2tlbjtcclxuICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gc3RvcmFnZVNlc3Npb247XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBtZXRob2QgPSBtZXRob2QudG9Mb3dlckNhc2UoKTtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBkYXRhOiBib2R5LFxyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiBxdWVyeU9wdGlvbnMsXHJcbiAgICAgICAgY2FuY2VsVG9rZW46IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XHJcbiAgICAgICAgICAvLyBBbiBleGVjdXRvciBmdW5jdGlvbiByZWNlaXZlcyBhIGNhbmNlbCBmdW5jdGlvbiBhcyBhIHBhcmFtZXRlclxyXG4gICAgICAgICAgY2FuY2VsID0gYztcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2sgPT09IGZhbHNlIHx8IHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgICAgbGV0IGVycm9yT2JqZWN0ID0ge1xyXG4gICAgICAgICAgY29kZTogcmVzcG9uc2Uuc3RhdHVzLFxyXG4gICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aHJvdyBlcnJvck9iamVjdDtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IFN1Y2Nlc3NIYW5kbGVySGVscGVyKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YS5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChBeGlvcy5pc0NhbmNlbChlcnIpIHx8ICFlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaXNFcnJvcjogdHJ1ZSxcclxuICAgICAgICAgIGVycm9yOiBcIlJlcXVlc3QgY2FuY2VsbGVkXCIsXHJcbiAgICAgICAgICBtZXNzYWdlczogZXJyLm1lc3NhZ2UgPT09IFwiY2FuY2VsXCIgPyBbXSA6IFtcIlJlcXVlc3QgY2FuY2VsbGVkXCJdLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JIZWxwZXIgPSBuZXcgRXJyb3JIYW5kbGVySGVscGVyKGVyci5yZXNwb25zZSk7XHJcbiAgICAgICAgcmV0dXJuIGVycm9ySGVscGVyLmVycm9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIENhbmNlbHMgdGhlIGxhc3QgcmVxdWVzdC5cclxuICAgKi9cclxuICBjYW5jZWxSZXF1ZXN0ID0gKGVycikgPT4ge1xyXG4gICAgY2FuY2VsICYmIGNhbmNlbChlcnIpO1xyXG4gIH07XHJcbn1cclxuIiwiLyoqXHJcbiAqIEVycm9ySGFuZGxlckhlbHBlciBDbGFzcyAtIEZvciBtYW5hZ2luZyBlcnJvcnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBFcnJvckhhbmRsZXJIZWxwZXIge1xyXG5cdHJhd0Vycm9yO1xyXG5cdGVycm9yID0ge1xyXG5cdFx0Y29kZTogNTAwLFxyXG5cdFx0aXNFcnJvcjogdHJ1ZSxcclxuXHRcdHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuXHRcdGVycm9yOiAnVW5rbm93biBlcnJvcicsXHJcblx0XHRtZXNzYWdlczogW10sXHJcblx0XHRkYXRhOiB1bmRlZmluZWQsXHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoZXJyKSB7XHJcblx0XHR0aGlzLnJhd0Vycm9yID0gZXJyO1xyXG5cdFx0dGhpcy5zZXRFcnJvcigpO1xyXG5cdH1cclxuXHJcblx0c2V0RXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IFxyXG5cdFx0dGhpcy5yYXdFcnJvciAmJiB0aGlzLnJhd0Vycm9yLmNvZGVcclxuXHRcdFx0PyB0aGlzLnJhd0Vycm9yLmNvZGVcclxuICAgICAgICAgICAgOiB0aGlzLmVycm9yLmNvZGU7XHJcblx0XHRcdHRoaXMuZXJyb3IuY29kZSA9IHRoaXMucmF3RXJyb3Iuc3RhdHVzID09PSA0MDIgPyB0aGlzLnJhd0Vycm9yLnN0YXR1cyA6IChjb2RlID8gY29kZSA6IDQwMCk7XHJcblx0XHR0aGlzLmVycm9yLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XHJcblx0XHR0aGlzLmVycm9yLm1lc3NhZ2VzID0gW107XHJcblx0XHJcblx0XHRpZiAodGhpcy5yYXdFcnJvci5kYXRhICYmIHR5cGVvZiB0aGlzLnJhd0Vycm9yLmRhdGEgPT09ICdvYmplY3QnICYmIHRoaXMucmF3RXJyb3IuZGF0YS5tZXNzYWdlKSB7XHJcblx0XHRcdGlmICgodGhpcy5yYXdFcnJvciAmJiB0aGlzLnJhd0Vycm9yLmRhdGEubWVzc2FnZSA9PT0gXCJUb2tlbiBoYXMgZXhwaXJlZFwiKSB8fCAodGhpcy5yYXdFcnJvciAmJiB0aGlzLnJhd0Vycm9yLmRhdGEubWVzc2FnZSA9PT0gXCJVbmF1dGhvcml6ZWQsIEludmFsaWQgdG9rZW4hXCIpKXtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG5cdFx0XHR9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IubWVzc2FnZXMucHVzaCh0aGlzLnJhd0Vycm9yLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH1cclxuXHRcdGlmICghdGhpcy5lcnJvci5tZXNzYWdlcy5sZW5ndGgpIHtcclxuXHRcdFx0dGhpcy5lcnJvci5lcnJvciA9ICdVbmtub3duJztcclxuXHRcdFx0dGhpcy5lcnJvci5tZXNzYWdlcyA9IFtudWxsXTtcclxuXHRcdH1cclxuXHR9O1xyXG59IiwiLyoqXHJcbiAqIFN1Y2Nlc3NIYW5kbGVySGVscGVyIENsYXNzIC0gRm9yIG1hbmFnaW5nIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdWNjZXNzSGFuZGxlckhlbHBlciB7XHJcbiAgICByYXdEYXRhO1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgY29kZTogMjAwLFxyXG4gICAgICBpc0Vycm9yOiBmYWxzZSxcclxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICBlcnJvcjogdW5kZWZpbmVkLFxyXG4gICAgICBtZXNzYWdlczogW10sXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICB0aGlzLnJhd0RhdGEgPSBkYXRhO1xyXG4gICAgICB0aGlzLnNldFN1Y2NjZXNzKCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzZXRTdWNjY2VzcyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgbWVzc2FnZXMgPSBbXTtcclxuICBcclxuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnJhd0RhdGEpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucmF3RGF0YVtpXSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgbWVzc2FnZXMucHVzaCh0aGlzLnJhd0RhdGFbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhdGEuZGF0YSA9IHRoaXMucmF3RGF0YTtcclxuICAgICAgdGhpcy5kYXRhLm1lc3NhZ2VzID0gbWVzc2FnZXM7XHJcbiAgICB9O1xyXG4gIH0iLCJleHBvcnQgKiBmcm9tICcuL0FwaUhlbHBlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU3VjY2Vzc0hhbmRsZXJIZWxwZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0Vycm9ySGFuZGxlckhlbHBlcic7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXBpUm91dGVzIH0gZnJvbSBcImNvbmZpZ1wiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBBcGlIZWxwZXIgfSBmcm9tIFwiaGVscGVyXCI7XHJcbmltcG9ydCBUb2FzdCBmcm9tIFwiY29tcG9uZW50cy90b2FzdGVyXCI7XHJcbmltcG9ydCAgbWFrZVN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlcyc7XHJcbmltcG9ydCAgdXNlVGhlbWUgIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy91c2VUaGVtZSc7XHJcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25BbHRlcm5hdGUgfSBmcm9tIFwiY29tcG9uZW50cy9vcmdhbmlzbXNcIjtcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwiY29tcG9uZW50cy9hdG9tc1wiO1xyXG5pbXBvcnQgYmFubmVyQm90dG9tIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2Jhbm5lci1zaGFwZS5wbmdcIjtcclxuaW1wb3J0IGltZyBmcm9tIFwiLi4vLi4vLi4vc3JjL2Fzc2V0cy9pbWFnZXMvQ2VydGlmaWNhdGUtcGFnZS9jZXJ0aWZpY2F0ZS5qcGdcIjtcclxuaW1wb3J0ICB1c2VNZWRpYVF1ZXJ5ICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0ICBHcmlkICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0ICBUeXBvZ3JhcGh5ICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0ICBQYXBlciAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIjtcclxuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciBmcm9tIFwicmVhY3QtaHRtbC1wYXJzZXJcIjtcclxuaW1wb3J0IEFwcENvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2FwcENvbmZpZ1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY2VydGlmaWNhdGVfc2VjOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBwYWRkaW5nOiBcIjkwcHggMHB4IDEwMHB4IDBweFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiNmNWY1ZjVcIixcclxuICAgIG1pbkhlaWdodDogXCI4MDBweFwiLFxyXG4gIH0sXHJcbiAgY2VydGlmaWNhdGVfYm94OiB7XHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWd9KWAsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgYmFja2dyb3VuZFNpemU6IFwiMTAwJSAxMDAlXCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICB3aWR0aDogXCI3ODBweFwiLFxyXG4gICAgZm9udFdlaWdodDogXCI2MDBcIixcclxuICAgIGJvcmRlcjogXCIxNXB4IHNvbGlkICMxYTIzN2VcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCBzYW5zLXNlcmlmXCIsXHJcbiAgfSxcclxuICBoZWFkaW5nMToge1xyXG4gICAgbWFyZ2luVG9wOiBcIjQ1cHhcIixcclxuICAgIGZvbnRTaXplOiBcIjMycHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiODAwXCIsXHJcbiAgICBtYXJnaW46IFwiMjBweCAwIDIwcHhcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiJ1ZpZ2EnLCBzYW5zLXNlcmlmXCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIjFweFwiLFxyXG4gIH0sXHJcbiAgbGFiZWw6IHtcclxuICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXHJcbiAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICBtYXJnaW5SaWdodDogXCI1cHhcIixcclxuICB9LFxyXG4gIGxhYmVsZXh0cmE6IHtcclxuICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXHJcbiAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICBtYXJnaW5MZWZ0OiBcIjVweFwiLFxyXG4gIH0sXHJcbiAgaGVhZGluZzM6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxyXG4gICAgZm9udFNpemU6IFwiMThweFwiLFxyXG4gIH0sXHJcbiAgaGVhZGluZzQ6IHtcclxuICAgIGZvbnRXZWlnaHQ6IFwiODAwXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgfSxcclxuICBoZWFkaW5nNToge1xyXG4gICAgZm9udFdlaWdodDogXCI4MDBcIixcclxuICAgIGZvbnRTaXplOiBcIjE3cHhcIixcclxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcclxuICAgIHBhZGRpbmc6IFwiM3B4IDQwcHggMFwiLFxyXG4gICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiLFxyXG4gIH0sXHJcbiAgc2VjdGlvbkhlYWRlcjoge1xyXG4gICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXHJcbiAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICBmb250U2l6ZTogXCIzNXB4XCIsXHJcbiAgfSxcclxuICBzaWduOiB7XHJcbiAgICBwYWRkaW5nOiBcIjNweCA0MHB4XCIsXHJcbiAgICBtYXJnaW46IFwiNzBweCAwcHggMTBweCAwcHhcIixcclxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcclxuICAgIGJvcmRlclRvcDogXCIxcHggc29saWQgYmxhY2tcIixcclxuICB9LFxyXG4gIHNpZ25fZGl2OiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiNzBweFwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjQwcHhcIixcclxuICB9LFxyXG4gIGJhbm5lckJvdHRvbToge1xyXG4gICAgXCImID4gc3BhblwiOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2sgIWltcG9ydGFudFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHdyYXBwZXJTZWN0aW9uOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDQsIDAsIDApLFxyXG4gIH0sXHJcbiAgc2VjdGlvbldyYXBwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNywgNiksXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgbWluSGVpZ2h0OiBcIjM1MHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgcGFkZGluZzogXCIzMHB4XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICBwYWRkaW5nOiBcIjE1cHhcIixcclxuICAgIH0sXHJcbiAgICBcIiYgaDFcIjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICBcIiY6OmFmdGVyXCI6IHtcclxuICAgICAgICBjb250ZW50OiAnXCIgXCInLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICB3aWR0aDogXCIxNTBweFwiLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogXCIzcHggc29saWQgIzUxMjBmZlwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgYm90dG9tOiBcIjE1cHhcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBibG9nY2hhaW5faGVhZGluZzoge1xyXG4gICAgbWFyZ2luQm90dG9tOiBcIjE1cHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiMjVweFwiLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZm9udFNpemVfMTg6IHtcclxuICAgIGZvbnRTaXplOiAxOCxcclxuICB9LFxyXG4gIGNvbnRlbnRTZWN0aW9uOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDUsIDYsIDApLFxyXG4gICAgXCImIHBcIjoge1xyXG4gICAgICBmb250U2l6ZTogXCIxLjI1cmVtXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMS42XCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMS4xMjVyZW1cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiYgaDFcIjoge1xyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjEuMjM1XCIsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IFwiMzBweFwiLFxyXG4gICAgICBmb250U2l6ZTogXCIyLjAyNDNyZW1cIixcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgICBmb250U2l6ZTogXCIxLjgyMTlyZW1cIixcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgICBmb250U2l6ZTogXCIxLjU2MjVyZW1cIixcclxuICAgICAgfSxcclxuICAgICAgXCImOjphZnRlclwiOiB7XHJcbiAgICAgICAgY29udGVudDogXCJcIixcclxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjVweCBzb2xpZCAjNTEyMEZGXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImIHVsXCI6IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6IFwiMzBweFwiLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiAxNSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiYgbGlcIjoge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgZm9udFNpemU6IFwiMThweFwiLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiA4LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlTGFiczoge1xyXG4gICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgbWFyZ2luOiBcImF1dG8gYXV0b1wiLFxyXG4gICAgYm9yZGVyOiBcIjBcIixcclxuICB9LFxyXG4gIGltYWdlV3JhcHBlcjoge1xyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgXCImID4gc3BhblwiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHN1YlRpdGxlOiB7XHJcbiAgICBcIiYgaDFcIjoge1xyXG4gICAgICBmb250U2l6ZTogXCIxLjQ5OTNyZW1cIixcclxuICAgIH0sXHJcbiAgICBcIiYgcFwiOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgICAgbGluZUhlaWdodDogXCIxLjVcIixcclxuICAgIH0sXHJcbiAgICBcIiYgcCA+IHNwYW5cIjoge1xyXG4gICAgICBmb250U2l6ZTogXCIxOHB4ICFpbXBvcnRhbnRcIixcclxuICAgICAgZm9udEZhbWlseTogXCJMYXRvICFpbXBvcnRhbnRcIixcclxuICAgICAgZm9udFdlaWdodDogXCI0MDAgIWltcG9ydGFudFwiLFxyXG4gICAgICBjb2xvcjogXCIjMmQzNzQ4ICFpbXBvcnRhbnRcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZWFkaW5nOiB7XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogXCIzMHB4XCIsXHJcbiAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxyXG4gICAgXCImOjphZnRlclwiOiB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcIiBcIicsXHJcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgd2lkdGg6IFwiMTUwcHhcIixcclxuICAgICAgYm9yZGVyQm90dG9tOiBcIjNweCBzb2xpZCAjNTEyMGZmXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGJvdHRvbTogXCIxNXB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tbW9uTGlzdDoge1xyXG4gICAgXCImIGxpXCI6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjE1cHggIWltcG9ydGFudFwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBzZWN0aW9uQ2VydGlmaWNhdGU6IHtcclxuICAgIHBhZGRpbmdUb3A6IDE1LFxyXG4gICAgcGFkZGluZ0JvdHRvbTogMzAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQ2VydGlmaWNhdGUgPSAoe2Ntc0RhdGF9KSA9PiB7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzTWQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIiksIHtcclxuICAgIGRlZmF1bHRNYXRjaGVzOiB0cnVlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgW2dldFRlbXBsYXRlRGF0YSwgc2V0R2V0VGVtcGxhdGVEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIC8vIEZvciBHZXQgVGVtcGxhdGUgRGF0YVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY21zRGF0YSAmJiBjbXNEYXRhLmxlbmd0aCkge1xyXG4gICAgICBsZXQgZ2V0RGF0YSA9IGNtc0RhdGEuZmlsdGVyKChlKSA9PiBlLnRpdGxlU2x1ZyA9PT0gXCJjZXJ0aWZpY2F0aW9uXCIpO1xyXG4gICAgICBzZXRHZXRUZW1wbGF0ZURhdGEoLi4uZ2V0RGF0YSk7XHJcbiAgICB9XHJcbiAgfSwgW2Ntc0RhdGFdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVybyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhbm5lckJvdHRvbX0+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtiYW5uZXJCb3R0b219XHJcbiAgICAgICAgICAgIHNyY1NldD17YmFubmVyQm90dG9tfVxyXG4gICAgICAgICAgICBhbHQ9J2Jhbm5lci1ib3R0b20nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlclNlY3Rpb259PlxyXG4gICAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uQ2VydGlmaWNhdGV9PlxyXG4gICAgICAgICAge2dldFRlbXBsYXRlRGF0YSAmJiBnZXRUZW1wbGF0ZURhdGEuYmxvY2tUaXRsZTUubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICA8Qm94IG1iPXszfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD17XCJoNFwifVxyXG4gICAgICAgICAgICAgICAgYWxpZ249e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj0ndGV4dFByaW1hcnknXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ2NoYWluX2hlYWRpbmd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICB7Z2V0VGVtcGxhdGVEYXRhLmJsb2NrVGl0bGU1fVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICk6bnVsbH1cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2dldFRlbXBsYXRlRGF0YSAmJiBnZXRUZW1wbGF0ZURhdGEuYmxvY2s0Lmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICBSZWFjdEh0bWxQYXJzZXIoZ2V0VGVtcGxhdGVEYXRhLmJsb2NrNClcclxuICAgICAgICAgICAgICApOm51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50U2VjdGlvbn0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17aXNNZCA/IDQgOiAyfT5cclxuICAgICAgICAgIHtnZXRUZW1wbGF0ZURhdGEgJiYgZ2V0VGVtcGxhdGVEYXRhLmJsb2NrSW1hZ2UxLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fSBkYXRhLWFvcz0nZmFkZS11cCc+XHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMTAwJVwifVxyXG4gICAgICAgICAgICAgICAgcGw9e2lzTWQgPyAyIDogMH1cclxuICAgICAgICAgICAgICAgIHByPXtpc01kID8gMiA6IDB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2Ake0FwcENvbmZpZy5JTUFHRV9VUkx9LyR7Z2V0VGVtcGxhdGVEYXRhLmJsb2NrSW1hZ2UxfWB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD0nZ2lybCBleHBsYWluaW5nJ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nX2ZsdWlkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApOm51bGx9XHJcbiAgICAgICAgICAgIHtnZXRUZW1wbGF0ZURhdGEgJiYgZ2V0VGVtcGxhdGVEYXRhLmJsb2NrVGl0bGUxLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fSBkYXRhLWFvcz0nZmFkZS11cCc+XHJcbiAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17Mn0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2g1J1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcj0ndGV4dFByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkaW5nfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7Z2V0VGVtcGxhdGVEYXRhLmJsb2NrVGl0bGUxfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAge1JlYWN0SHRtbFBhcnNlcihnZXRUZW1wbGF0ZURhdGEuYmxvY2sxKX1cclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICk6bnVsbH1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICA8U2VjdGlvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcy5jb250ZW50U2VjdGlvbixcclxuICAgICAgICAgICAgICBjbGFzc2VzLnN1YlRpdGxlLFxyXG4gICAgICAgICAgICAgIGNsYXNzZXMucGJfNjBcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e2lzTWQgPyAwIDogMn0+XHJcbiAgICAgICAgICAgIHtnZXRUZW1wbGF0ZURhdGEgJiYgZ2V0VGVtcGxhdGVEYXRhLmJsb2NrVGl0bGUyLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz0nZmFkZS11cCdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vcmRlcl9zcF8zMH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXsyfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD0naDUnXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPSd0ZXh0UHJpbWFyeSdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtnZXRUZW1wbGF0ZURhdGEuYmxvY2tUaXRsZTJ9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICB7UmVhY3RIdG1sUGFyc2VyKGdldFRlbXBsYXRlRGF0YS5ibG9jazIpfVxyXG4gICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICk6bnVsbH1cclxuICAgICAgICAgICAgICB7Z2V0VGVtcGxhdGVEYXRhICYmIGdldFRlbXBsYXRlRGF0YS5ibG9ja0ltYWdlMi5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fSBkYXRhLWFvcz0nZmFkZS11cCc+XHJcbiAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjEwMCVcIn1cclxuICAgICAgICAgICAgICAgICAgcGw9e2lzTWQgPyAyIDogMH1cclxuICAgICAgICAgICAgICAgICAgcHI9e2lzTWQgPyAyIDogMH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlV3JhcHBlcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBcHBDb25maWcuSU1BR0VfVVJMfS8ke2dldFRlbXBsYXRlRGF0YS5ibG9ja0ltYWdlMn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyY1NldD17YCR7QXBwQ29uZmlnLklNQUdFX1VSTH0vJHtnZXRUZW1wbGF0ZURhdGEuYmxvY2tJbWFnZTJ9YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e1wiTGFic1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUxhYnN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgKTpudWxsfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbldyYXBwZXJ9PlxyXG4gICAgICAgICAge2dldFRlbXBsYXRlRGF0YSAmJiBnZXRUZW1wbGF0ZURhdGEuYmxvY2tUaXRsZTQubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICA8Qm94IG1iPXszfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD17XCJoNFwifVxyXG4gICAgICAgICAgICAgICAgYWxpZ249e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj0ndGV4dFByaW1hcnknXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ2NoYWluX2hlYWRpbmd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICB7Z2V0VGVtcGxhdGVEYXRhLmJsb2NrVGl0bGU0fVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICk6bnVsbH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29tbW9uTGlzdH0+XHJcbiAgICAgICAgICAgIHtnZXRUZW1wbGF0ZURhdGEgJiYgZ2V0VGVtcGxhdGVEYXRhLmJsb2NrMy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgUmVhY3RIdG1sUGFyc2VyKGdldFRlbXBsYXRlRGF0YS5ibG9jazMpXHJcbiAgICAgICAgICAgICAgKTpudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlclNlY3Rpb259PlxyXG4gICAgICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25XcmFwcGVyfT5cclxuICAgICAgICAgICAge2dldFRlbXBsYXRlRGF0YSAmJiBnZXRUZW1wbGF0ZURhdGEuYmFubmVyVGl0bGUubGVuZ3RoXHJcbiAgICAgICAgICAgICAgPyBnZXRUZW1wbGF0ZURhdGEuYmFubmVyVGl0bGVcclxuICAgICAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7Z2V0VGVtcGxhdGVEYXRhICYmIGdldFRlbXBsYXRlRGF0YS5sZW5ndGhcclxuICAgICAgICAgICAgICA/IFJlYWN0SHRtbFBhcnNlcihnZXRUZW1wbGF0ZURhdGEuYmxvY2sxKVxyXG4gICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAge2xvYWRlciA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2FkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDZXJ0aWZpY2F0ZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgIG1ha2VTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSBcImNvbXBvbmVudHMvbW9sZWN1bGVzXCI7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tIFwiY29tcG9uZW50cy9vcmdhbmlzbXNcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzUxMjBGRlwiLFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIG1pbkhlaWdodDogNDAwLFxyXG4gICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGV4dFdoaXRlOiB7XHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gIH0sXHJcbiAgc2VjdGlvbjoge1xyXG4gICAgLy8gcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAvLyB0b3A6ICc1MCUnLFxyXG4gICAgLy8gbGVmdDogJzUwJScsXHJcbiAgICAvLyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgLy8gcGFkZGluZ1RvcDogMCxcclxuICAgIC8vIHBhZGRpbmdCb3R0b206IDAsXHJcbiAgfSxcclxuICBzZWFyY2hJbnB1dENvbnRhaW5lcjoge1xyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGJveFNoYWRvdzogXCIwIDRweCAxNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjExKVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIFwiJiAuTXVpT3V0bGluZWRJbnB1dC1ub3RjaGVkT3V0bGluZVwiOiB7XHJcbiAgICAgIGJvcmRlcjogXCIwICFpbXBvcnRhbnRcIixcclxuICAgIH0sXHJcbiAgICBcIiYgLk11aUlucHV0QWRvcm5tZW50LXBvc2l0aW9uU3RhcnRcIjoge1xyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgICBcIiYgLk11aU91dGxpbmVkSW5wdXQtYWRvcm5lZFN0YXJ0XCI6IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6IDAsXHJcbiAgICB9LFxyXG4gICAgXCImIC5NdWlPdXRsaW5lZElucHV0LWlucHV0XCI6IHtcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlYXJjaEJ1dHRvbjoge1xyXG4gICAgbWF4SGVpZ2h0OiA0NSxcclxuICAgIG1pbldpZHRoOiAxMzUsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICBtaW5XaWR0aDogXCJhdXRvXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEhlcm8gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgICAgdGl0bGU9J0NlcnRpZmljYXRpb24nXHJcbiAgICAgICAgICAgIHN1YnRpdGxlPSdJbiB0aGlzIGNlcnRpZmljYXRlIHNlcmllcywgeW91IHdpbGwgZGl2ZSBpbnRvIHRoZSB3b3JsZCBvZiBibG9ja2NoYWluIHRlY2hub2xvZ3kgYW5kIHRoZSBwcm9taXNlIGl0XHJcbmhvbGRzIGZvciBnbG9iYWwgYnVzaW5lc3MuJ1xyXG4gICAgICAgICAgICBhbGlnbj0nbGVmdCdcclxuICAgICAgICAgICAgdGl0bGVQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnRpdGxlLCBjbGFzc2VzLnRleHRXaGl0ZSksXHJcbiAgICAgICAgICAgICAgdmFyaWFudDogXCJoM1wiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdWJ0aXRsZVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRleHRXaGl0ZSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSGVybyc7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgSGVybyB9IGZyb20gXCIuL0hlcm9cIjtcclxuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL0NlcnRpZmljYXRlJyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ob1NzclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1pvb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy91c2VUaGVtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHRBbHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dVcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbHN4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImphcmFsbGF4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxlYWZsZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb3VudHVwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWh0bWwtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbGVhZmxldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10eXBlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2VldGFsZXJ0MlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2lwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmFsaWRhdGUuanNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==