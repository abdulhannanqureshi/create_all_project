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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/enterprise.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/enterprise.js":
/*!*****************************!*\
  !*** ./pages/enterprise.js ***!
  \*****************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var _src_views_Enterprise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/views/Enterprise */ "./src/views/Enterprise/index.js");
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
/* harmony default export */ __webpack_exports__["default"] = (_src_views_Enterprise__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./public/assets/banner-shape.png":
/*!****************************************!*\
  !*** ./public/assets/banner-shape.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-shape-356d0b701eaf0bdaf7a8daa283b902d0.png";

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

/***/ "./src/views/Enterprise/Enterprise.js":
/*!********************************************!*\
  !*** ./src/views/Enterprise/Enterprise.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "@material-ui/core/colors/blue");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles/useTheme */ "@material-ui/core/styles/useTheme");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_assets_banner_shape_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../public/assets/banner-shape.png */ "./public/assets/banner-shape.png");
/* harmony import */ var _public_assets_banner_shape_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_assets_banner_shape_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../config/appConfig */ "./src/config/appConfig.js");
var _jsxFileName = "C:\\xampp\\htdocs\\coinfield\\coinfied\\frontend\\src\\views\\Enterprise\\Enterprise.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;













 // For get Cms Data


const useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default()(theme => ({
  loader: {
    display: "flex",
    minHeight: "700px",
    justifyContent: "center",
    alignItems: "center"
  },
  courseDetailWrap: {
    minHeight: "800px"
  },
  sectionDescription: {
    background: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_1___default.a[900]
  },
  sectionAlternateForm: {
    background: "transparent",
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 300px, ${theme.palette.primary.dark} 0%)`
  },
  textWhite: {
    color: "#fff"
  },
  image: {
    maxWidth: "85%",
    margin: "auto auto",
    boxShadow: "20px 20px 0px -3px #d6d6d6",
    border: "5px solid #fff"
  },
  btnVideo: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "100px",
    borderRadius: "50%",
    marginTop: "150px",
    color: "#fff",
    cursor: "pointer"
  },
  fontWeight700: {
    fontWeight: "700"
  },
  marginTop: {
    marginTop: "12px"
  },
  ul_listings: {
    marginTop: "12px",
    "& li": {
      fontSize: "18px",
      marginBottom: 5
    }
  },
  color_light_blue: {
    marginTop: "12px",
    fontSize: "17px !important",
    margintTop: "12px",
    color: "#8585bd !important"
  },
  bannerImage: {
    width: "350px",
    minHeight: "300px",
    backgroundColor: "#CCC",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    margin: "0 auto",
    position: "relative",
    top: "60px",
    "&::after": {
      content: ' "" ',
      display: "block",
      width: "150px",
      height: "150px",
      position: "absolute",
      backgroundColor: "#DCDCDC",
      top: "-65px",
      right: "-75px",
      zIndex: "-1"
    },
    "&::before": {
      content: ' "" ',
      display: "block",
      width: "150px",
      height: "150px",
      position: "absolute",
      backgroundColor: "#DCDCDC",
      bottom: "-65px",
      left: "-75px",
      zIndex: "-1"
    }
  },
  heroContainer: {
    minWidth: "1236px"
  },
  icon: {
    fontSize: "24px",
    width: "100px",
    height: "100px",
    color: "#fff"
  },
  contentSection: {
    padding: theme.spacing(5, 6),
    "& p": {
      fontSize: "18px"
    },
    "& h1": {
      lineHeight: "28px",
      paddingBottom: "30px",
      "&::after": {
        content: "",
        display: "inline-block",
        width: "100px",
        borderBottom: "5px solid #5120FF"
      }
    },
    "& ul": {
      paddingLeft: "30px"
    },
    "& li": {
      paddingBottom: "10px",
      fontSize: "18px"
    }
  },
  sectionHeader: {
    paddingBottom: "30px"
  },
  contentSectionReverse: {
    color: "#fff",
    "& p": {
      fontSize: "18px",
      lineHeight: "28px"
    }
  },
  btnBlock: {
    padding: "20px 0 0"
  },
  purchaseBtn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    padding: "10px 30px",
    color: "#fff",
    fontWeight: "900",
    fontSize: "16px",
    minWidth: "200px"
  },
  sectionDescription: {
    textAlign: "center",
    "& h1": {
      paddingBottom: "30px"
    }
  },
  paper: {
    minHeight: "350px",
    height: "100%",
    padding: "30px",
    [theme.breakpoints.down("xs")]: {
      minHeight: "auto"
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
  sociallink_nav: {
    position: "fixed",
    right: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
    zIndex: "10",
    flexFlow: "column",
    width: "50px",
    listStyle: "none",
    padding: "5px 0",
    boxShadow: "0 0 3px #180267b8",
    [theme.breakpoints.down("md")]: {
      width: 40
    }
  },
  sociallink_li: {
    display: "block",
    fontSize: "24px",
    color: "#000",
    padding: "10px 0",
    [theme.breakpoints.down("md")]: {
      padding: "8px 0",
      fontSize: "20px"
    },
    "& a": {
      color: "#000"
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
  blogchain_heading: {
    marginBottom: "15px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      marginBottom: "5px"
    }
  },
  card_para: {
    fontSize: "15px",
    color: "#8585bd !important",
    fontWeight: 600,
    lineHeight: "1.9em",
    [theme.breakpoints.down("sm")]: {
      lineHeight: "1.4em"
    }
  },
  card_icons: {
    fontSize: "40px",
    color: "white",
    padding: "20px",
    backgroundColor: "#5120ff",
    borderRadius: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "16px",
      fontSize: "28px"
    }
  },
  img_fluid: {
    maxWidth: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      height: 472,
      width: "100%",
      objectFit: "cover",
      objectPosition: "center top",
      marginBottom: 12
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto"
    }
  },
  img_certificate: {
    maxWidth: "100%",
    height: "350px",
    border: "5px solid #fff",
    [theme.breakpoints.down("md")]: {
      height: "350px"
    },
    [theme.breakpoints.down("sm")]: {
      height: "280px"
    }
  },
  bannerWrap: {
    paddingRight: 20,
    [theme.breakpoints.down("xs")]: {
      paddingRight: 40
    }
  },
  fullImage: {
    "& > span": {
      width: "100% !important"
    }
  },
  orderSp: {
    order: 1
  },
  certificateWrap: {
    padding: 0,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  certificateImgWrap: {
    textAlign: "center"
  },
  bannerBottom: {
    "& > span": {
      display: "block !important"
    }
  },
  whyBlockchain: {
    padding: theme.spacing(5, 6, 2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(5, 4, 2)
    },
    "& .MuiPaper-elevation2": {
      boxShadow: "none",
      padding: "30px 0 0",
      minHeight: 330
    }
  },
  pb_60: {
    paddingBottom: 60
  },
  sp_p_0: {
    [theme.breakpoints.down("xs")]: {
      padding: 0
    }
  },
  fontSize_18: {
    fontSize: 18
  },
  certificateWrapper: {
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      padding: 20
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
  certificateDetails: {
    height: "auto"
  },
  textCenter: {
    textAlign: "center"
  },
  linkWrapper: {
    "& a": {
      color: "#5120ff",
      textDecoration: "none",
      display: "inline-block"
    }
  },
  commonList: {
    "& li": {
      marginBottom: "10px !important"
    }
  },
  roundIconImages: {
    height: "80px",
    borderRadius: "100%",
    width: "80px"
  },
  wordWrapper: {
    wordBreak: "break-all"
  },
  marginTop: {
    marginTop: "15px"
  },
  paddingX: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "15px !important"
    }
  }
}));

const Enterprise = ({
  cmsData
}) => {
  const classes = useStyles();
  const theme = _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_5___default()();
  const isMd = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7___default()(theme.breakpoints.up("md"), {
    defaultMatches: true
  }); // For Fetch CMS Data

  const {
    0: getTemplateData,
    1: setGetTemplateData
  } = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(null); // For Get Template Data

  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(() => {
    if (cmsData && cmsData.length) {
      let getData = cmsData.filter(e => e.titleSlug === "enterprise");
      setGetTemplateData(...getData);
    }
  }, [cmsData]);
  return __jsx("div", {
    className: classes.courseDetailWrap,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_10__["HeroBackground"], {
    backgroundColor: "#5120FF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    "data-aos": "fade-up",
    className: classes.bannerWrap,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: isMd ? "h3" : "h4",
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.textWhite, classes.fontWeight700),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 15
    }
  }, "Is Your Business Blockchain-ready?"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: isMd ? "h6" : "body2",
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.textWhite, classes.fontWeight700),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 15
    }
  }, "Get ahead by becoming an expert in this world-changing technology. Give your teams the competitive edge with customizable and fully-certified learning solutions from Coinifide.")))), __jsx("div", {
    className: classes.bannerBottom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 9
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_9__["Image"], {
    src: _public_assets_banner_shape_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    srcSet: _public_assets_banner_shape_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "banner-bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 11
    }
  })), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_10__["Section"], {
    className: classes.whyBlockchain,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 9
    }
  }, getTemplateData ? __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    elevation: 2,
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "h4",
    align: "center",
    color: "textPrimary",
    className: classes.blogchain_heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 15
    }
  }, getTemplateData ? getTemplateData.blockTitle1 : null), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
    pt: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 19
    }
  }, __jsx("div", {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_14__["default"].IMAGE_URL}/${getTemplateData.blockImage5}`,
    className: classes.roundIconImages,
    alt: "card image4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 23
    }
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
    pt: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 23
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "body1",
    align: "center",
    color: "textPrimary",
    className: classes.fontSize_18,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 25
    }
  }, getTemplateData ? react_html_parser__WEBPACK_IMPORTED_MODULE_12___default()(getTemplateData.block5) : null))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
    pt: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 19
    }
  }, __jsx("div", {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_14__["default"].IMAGE_URL}/${getTemplateData.blockImage6}`,
    className: classes.roundIconImages,
    alt: "card image5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 23
    }
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
    pt: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 23
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "body1",
    align: "center",
    color: "textPrimary",
    className: classes.fontSize_18,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 25
    }
  }, getTemplateData ? react_html_parser__WEBPACK_IMPORTED_MODULE_12___default()(getTemplateData.block6) : null))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
    pt: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 19
    }
  }, __jsx("div", {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_14__["default"].IMAGE_URL}/${getTemplateData.blockImage7}`,
    className: classes.roundIconImages,
    alt: "card image5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 23
    }
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
    pt: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 23
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "body1",
    align: "center",
    color: "textPrimary",
    className: classes.fontSize_18,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 25
    }
  }, getTemplateData ? react_html_parser__WEBPACK_IMPORTED_MODULE_12___default()(getTemplateData.block7) : null))))))) : null), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_10__["Section"], {
    className: classes.contentSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 11
    }
  }, getTemplateData && getTemplateData.blockImage1.length ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    md: 6,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    pl: isMd ? 2 : 0,
    pr: isMd ? 2 : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_14__["default"].IMAGE_URL}/${getTemplateData.blockImage1}`,
    srcSet: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_14__["default"].IMAGE_URL}/${getTemplateData.blockImage1}`,
    alt: "girl explaining",
    className: classes.img_fluid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 19
    }
  }))) : null, getTemplateData && getTemplateData.block1.length ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    md: 6,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    elevation: 2,
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 17
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_12___default()(getTemplateData.block1))) : null)), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_10__["Section"], {
    className: classes.contentSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 11
    }
  }, getTemplateData && getTemplateData.block2.length ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    md: 6,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    elevation: 2,
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.paper, classes.wordWrapper),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 17
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_12___default()(getTemplateData.block2))) : null, getTemplateData && getTemplateData.blockImage2.length ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    md: 6,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    pl: isMd ? 2 : 0,
    pr: isMd ? 2 : 0,
    className: classes.fullImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_14__["default"].IMAGE_URL}/${getTemplateData.blockImage2}`,
    srcSet: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_14__["default"].IMAGE_URL}/${getTemplateData.blockImage2}`,
    alt: "girl explaining",
    className: classes.img_fluid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 19
    }
  }))) : null)), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_10__["Section"], {
    className: classes.contentSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 11
    }
  }, getTemplateData && getTemplateData.block3.length ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    md: 6,
    "data-aos": "fade-up",
    className: classes.orderSp,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    elevation: 2,
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 17
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_12___default()(getTemplateData.block3))) : null, getTemplateData && getTemplateData.blockImage3.length ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    md: 6,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    pl: isMd ? 2 : 0,
    pr: isMd ? 2 : 0,
    className: classes.fullImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_14__["default"].IMAGE_URL}/${getTemplateData.blockImage3}`,
    srcSet: `${_config_appConfig__WEBPACK_IMPORTED_MODULE_14__["default"].IMAGE_URL}/${getTemplateData.blockImage3}`,
    alt: "girl explaining",
    className: classes.img_fluid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 19
    }
  }))) : null)), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_10__["Section"], {
    className: classes.sectionWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 9
    }
  }, getTemplateData && getTemplateData.blockTitle4.length ? __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {
    mb: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "h4",
    align: "center",
    color: "textPrimary",
    className: classes.blogchain_heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 15
    }
  }, getTemplateData.blockTitle4)) : null, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.commonList, classes.paddingX),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621,
      columnNumber: 11
    }
  }, getTemplateData && getTemplateData.blockTitle4.length ? react_html_parser__WEBPACK_IMPORTED_MODULE_12___default()(getTemplateData.block4) : null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Enterprise);

/***/ }),

/***/ "./src/views/Enterprise/index.js":
/*!***************************************!*\
  !*** ./src/views/Enterprise/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Enterprise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enterprise */ "./src/views/Enterprise/Enterprise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Enterprise__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "@material-ui/core/colors/blue":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/blue" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/blue");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZW50ZXJwcmlzZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2Jhbm5lci1zaGFwZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGVhZmxldC1hc3NldHMvbWFya2VyLWljb24tMngucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2xlYWZsZXQtYXNzZXRzL21hcmtlci1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9sZWFmbGV0LWFzc2V0cy9tYXJrZXItc2hhZG93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9EYXJrTW9kZVRvZ2dsZXIvRGFya01vZGVUb2dnbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL0RhcmtNb2RlVG9nZ2xlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JY29uL0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvSWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JY29uVGV4dC9JY29uVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JY29uVGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JbWFnZS9JbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9MZWFybk1vcmVMaW5rL0xlYXJuTW9yZUxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvTGVhcm5Nb3JlTGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9TY3JvbGxUb3AvU2Nyb2xsVG9wLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL1Njcm9sbFRvcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvQ291bnRVcE51bWJlci9Db3VudFVwTnVtYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Db3VudFVwTnVtYmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9EZXNjcmlwdGlvbkN0YS9EZXNjcmlwdGlvbkN0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvRGVzY3JpcHRpb25DdGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL0ljb25BbHRlcm5hdGUvSWNvbkFsdGVybmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvSWNvbkFsdGVybmF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvT3ZlcmxhcGVkSW1hZ2VzL092ZXJsYXBlZEltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvT3ZlcmxhcGVkSW1hZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9TZWN0aW9uSGVhZGVyL1NlY3Rpb25IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1NlY3Rpb25IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1N3aXBlckltYWdlL1N3aXBlckltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Td2lwZXJJbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU3dpcGVyTnVtYmVyL1N3aXBlck51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU3dpcGVyTnVtYmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9UeXBlZFRleHQvVHlwZWRUZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9UeXBlZFRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9BY2NvcmRpb24vQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9BY2NvcmRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRCYXNlL0NhcmRCYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkQmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZENhdGVnb3J5L0NhcmRDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZENhdGVnb3J5L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkQ2F0ZWdvcnlMaW5rL0NhcmRDYXRlZ29yeUxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRDYXRlZ29yeUxpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2IvQ2FyZEpvYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYkNvbXBhbnkvQ2FyZEpvYkNvbXBhbnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2JDb21wYW55L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkSm9iTWluaW1hbC9DYXJkSm9iTWluaW1hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYk1pbmltYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2JUYWcvQ2FyZEpvYlRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYlRhZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFByaWNpbmdTdGFuZGFyZC9DYXJkUHJpY2luZ1N0YW5kYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkUHJpY2luZ1N0YW5kYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkUHJvZHVjdC9DYXJkUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFByb2R1Y3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRQcm9tby9DYXJkUHJvbW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRQcm9tby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFJldmlldy9DYXJkUmV2aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkUmV2aWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9Db250YWN0Rm9ybS9Db250YWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ29udGFjdEZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0Rlc2NyaXB0aW9uTGlzdEljb24vRGVzY3JpcHRpb25MaXN0SWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvRGVzY3JpcHRpb25MaXN0SWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvSGVyb0JhY2tncm91bmQvSGVyb0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9CYWNrZ3JvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9IZXJvU2hhcGVkL0hlcm9TaGFwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9TaGFwZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9TaWRlSW1hZ2UvSGVyb1NpZGVJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvSGVyb1NpZGVJbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvSGVyb1NpbXBsZUJhY2tncm91bmQvSGVyb1NpbXBsZUJhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9TaW1wbGVCYWNrZ3JvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9NYXAvTWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9NYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL1BhcmFsbGF4L1BhcmFsbGF4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9QYXJhbGxheC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvU2VjdGlvbi9TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9TZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9TZWN0aW9uQWx0ZXJuYXRlL1NlY3Rpb25BbHRlcm5hdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL1NlY3Rpb25BbHRlcm5hdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvQXBpUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvYXBwQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9BcGlIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9FcnJvckhhbmRsZXJIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9TdWNjZXNzSGFuZGxlckhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9FbnRlcnByaXNlL0VudGVycHJpc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0VudGVycHJpc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTm9Tc3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9ab29tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy91c2VUaGVtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHRBbHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93VXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsc3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqYXJhbGxheFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxlYWZsZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3VudHVwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaHRtbC1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbGVhZmxldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXR5cGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2lwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YWxpZGF0ZS5qc1wiIl0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwicmVzcG9uc2VDTVMiLCJBcGlIZWxwZXIiLCJGZXRjaEZyb21TZXJ2ZXIiLCJBcGlSb3V0ZXMiLCJGUk9OVF9QQUdFX0RBVEEiLCJzZXJ2aWNlIiwidXJsIiwibWV0aG9kIiwiYXV0aGVudGljYXRlIiwidW5kZWZpbmVkIiwiY21zRGF0YSIsImlzRXJyb3IiLCJkYXRhIiwicHJvcHMiLCJyZXZhbGlkYXRlIiwiRW50ZXJwcmlzZSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwb3NpdGlvbiIsImJvcmRlciIsIndpZHRoIiwic3BhY2luZyIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwicGFsZXR0ZSIsImRpdmlkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJicmVha3BvaW50cyIsInVwIiwiYm9yZGVyRGFyayIsImNvbG9ycyIsImluZGlnbyIsIm1vZGVUb2dnbGVyIiwidG9wIiwibGVmdCIsInRleHQiLCJwcmltYXJ5IiwidHJhbnNpdGlvbiIsImN1cnNvciIsIm1vZGVUb2dnbGVyRGFyayIsInRyYW5zZm9ybSIsIm1vZGVUb2dnbGVySWNvbiIsImZpbGwiLCJzZWNvbmRhcnkiLCJtYWluIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIkRhcmtNb2RlVG9nZ2xlciIsInRoZW1lTW9kZSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJyZXN0IiwiY2xhc3NlcyIsImNsc3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiaXNSZXF1aXJlZCIsImV4dHJhU21hbGwiLCJmb250U2l6ZSIsInNtYWxsIiwibWVkaXVtIiwibGFyZ2UiLCJJY29uIiwiZm9udEljb25DbGFzcyIsInNpemUiLCJmb250SWNvbkNvbG9yIiwiY29sb3IiLCJkZWZhdWx0UHJvcHMiLCJvbmVPZiIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImFsaWduSXRlbXMiLCJ0aXRsZSIsIkljb25UZXh0IiwiaWNvblByb3BzIiwidHlwb2dyYXBoeVByb3BzIiwib2JqZWN0IiwiZEJsb2NrIiwiSW1hZ2UiLCJzcmMiLCJzcmNTZXQiLCJhbHQiLCJsYXp5IiwibGF6eVByb3BzIiwiYm9vbCIsInRleHREZWNvcmF0aW9uIiwiZm9udFdlaWdodCIsImljb24iLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsIkxlYXJuTW9yZUxpbmsiLCJjb21wb25lbnQiLCJ2YXJpYW50IiwiaHJlZiIsImNoaWxkcmVuIiwiYm90dG9tIiwicmlnaHQiLCJTY3JvbGxUb3AiLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsImRpc2FibGVIeXN0ZXJlc2lzIiwidGhyZXNob2xkIiwiaGFuZGxlQ2xpY2siLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiQ291bnRVcE51bWJlciIsInN0YXJ0IiwiZW5kIiwic3VmZml4IiwicHJlZml4IiwibGFiZWwiLCJ0ZXh0Q29sb3IiLCJsYWJlbENvbG9yIiwidmlzaWJpbGl0eVNlbnNvclByb3BzIiwid3JhcHBlclByb3BzIiwiY291bnRXcmFwcGVyUHJvcHMiLCJjb3VudE51bWJlclByb3BzIiwibGFiZWxQcm9wcyIsInZpZXdQb3J0RW50ZXJlZCIsInNldFZpZXdQb3J0RW50ZXJlZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRWaWV3UG9ydFZpc2liaWxpdHkiLCJpc1Zpc2libGUiLCJudW1iZXIiLCJEZXNjcmlwdGlvbkN0YSIsInN1YnRpdGxlIiwicHJpbWFyeUN0YSIsInNlY29uZGFyeUN0YSIsImFsaWduIiwidGl0bGVQcm9wcyIsInN1YnRpdGxlUHJvcHMiLCJidXR0b25Hcm91cFByb3BzIiwicHJpbWFyeUJ1dHRvbldyYXBwZXJQcm9wcyIsInNlY29uZGFyeUJ1dHRvbldyYXBwZXJQcm9wcyIsInVzZVRoZW1lIiwiaXNTbSIsInVzZU1lZGlhUXVlcnkiLCJkZWZhdWx0TWF0Y2hlcyIsImp1c3RpZnlHcmlkIiwibm9kZSIsImNpcmNsZSIsInNxdWFyZSIsIkljb25BbHRlcm5hdGUiLCJzaGFwZSIsInVzZUJhY2tncm91bmRTdHlsZXMiLCJiYWNrZ3JvdW5kQ2xhc3NlcyIsInJlZCIsInBpbmsiLCJwdXJwbGUiLCJkZWVwUHVycGxlIiwiYmx1ZSIsImxpZ2h0Qmx1ZSIsImN5YW4iLCJ0ZWFsIiwiZ3JlZW4iLCJsaWdodEdyZWVuIiwibGltZSIsInllbGxvdyIsImFtYmVyIiwib3JhbmdlIiwiZGVlcE9yYW5nZSIsImJyb3duIiwiZ3JleSIsImJsdWVHcmV5IiwiaW1hZ2VHcmlkIiwiYm94U2hhZG93IiwicGFwZXIiLCJtYXhXaWR0aCIsInZlcnRpY2FsQWxpZ24iLCJib3JkZXJTdHlsZSIsImltYWdlR3JpZEZpcnN0SXRlbSIsImltYWdlR3JpZExhc3RJdGVtIiwiZmxvYXQiLCJPdmVybGFwZWRJbWFnZXMiLCJpbWFnZTEiLCJpbWFnZTIiLCJpbWFnZTMiLCJzcmNzZXQiLCJtYXJnaW5Cb3R0b20iLCJkaXNhYmxlR3V0dGVyIiwiY3RhIiwiU2VjdGlvbkhlYWRlciIsInRpdGxlVmFyaWFudCIsInN1YnRpdGxlVmFyaWFudCIsInN1YnRpdGxlQ29sb3IiLCJvdmVybGluZSIsImZhZGVVcCIsImN0YUdyb3VwIiwidGl0bGVDbGFzc2VzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4Iiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsInpJbmRleCIsInN3aXBlclNsaWRlIiwic3dpcGVyTmF2IiwianVzdGlmeUNvbnRlbnQiLCJjYXJkU2hhZG93IiwiaW1hZ2UiLCJvYmplY3RGaXQiLCJTd2lwZXJJbWFnZSIsIml0ZW1zIiwibmF2aWdhdGlvbkJ1dHRvblN0eWxlIiwiaW1hZ2VDbGFzc05hbWUiLCJ1c2VFZmZlY3QiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInBhZGRpbmdCb3R0b20iLCJTd2lwZXJOdW1iZXIiLCJudW1iZXJQcm9wcyIsImlzTWQiLCJwYWdpbmF0aW9uIiwiZWwiLCJ0eXBlIiwiY2xpY2thYmxlIiwiYXV0b3BsYXkiLCJkZWxheSIsIlR5cGVkVGV4dCIsInR5cGVkUHJvcHMiLCJmbGV4RGlyZWN0aW9uIiwiZXhwYW5kT3BlbiIsImRhcmsiLCJsaXN0SXRlbSIsIkFjY29yZGlvbiIsInRleHRQcm9wcyIsImxpbmtQcm9wcyIsImlkIiwibGluayIsImFycmF5Iiwid2l0aFNoYWRvdyIsIm5vU2hhZG93Iiwibm9Cb3JkZXIiLCJub0JnIiwibGlmdFVwIiwiY29udGVudCIsImNlbnRlciIsIkNhcmRCYXNlIiwiY2FyZENvbnRlbnRQcm9wcyIsIkNhcmRDYXRlZ29yeSIsImZvbnRXZWlnaHQ3MDAiLCJoZWFkaW5nIiwiY2F0ZWdvcnlJY29uQnV0dG9uIiwic3ViaGVhZGluZyIsIkNhcmRDYXRlZ29yeUxpbmsiLCJpY29uQWx0ZXJuYXRlUHJvcHMiLCJkb3QiLCJtYXJnaW5SaWdodCIsImRvdEJpZyIsImRvdFNtYWxsIiwiam9iVGl0bGUiLCJkb3RNYXJnaW4iLCJtYXJnaW4iLCJDYXJkSm9iIiwiYmFkZ2VDb2xvciIsImJhZGdlVGl0bGUiLCJqb2JMb2NhdGlvbiIsImpvYlR5cGUiLCJqb2JEYXRlIiwiY29tcGFueUxvZ28iLCJjb21wYW55TmFtZSIsImNvbXBhbnlBdmF0YXIiLCJDYXJkSm9iQ29tcGFueSIsImpvYnNDb3VudCIsImNvbXBhbnlJbmZvIiwiY2FyZEpvYk1pbmltYWxCb2R5IiwiQ2FyZEpvYk1pbmltYWwiLCJzaG93QXJyb3ciLCJib3JkZXJSaWdodCIsInRhZyIsInRleHRXaGl0ZSIsIkNhcmRKb2JUYWciLCJmZWF0dXJlQ2hlY2siLCJDYXJkUHJpY2luZ1N0YW5kYXJkIiwicHJpY2VDb21wb25lbnQiLCJmZWF0dXJlQ2hlY2tDb21wb25lbnQiLCJmZWF0dXJlcyIsImRpc2NsYWltZXIiLCJkaXNjbGFpbWVyUHJvcHMiLCJmZWF0dXJlVGl0bGVQcm9wcyIsIm1lZGlhIiwiQ2FyZFByb2R1Y3QiLCJtZWRpYUNsYXNzTmFtZSIsImNhcmRDb250ZW50IiwibWVkaWFDb250ZW50IiwiYW55IiwidGV4dEJsdWUiLCJpbWdGbHVpZCIsInBiXzAiLCJwYl9wdF8wIiwicGFkZGluZ1RvcCIsIkNhcmRQcm9tbyIsInRpdGxlQ29sb3IiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUHJvcHMiLCJDYXJkUmV2aWV3IiwiYXV0aG9yUGhvdG8iLCJhdXRob3JOYW1lIiwiYXV0aG9yVGl0bGUiLCJ0ZXh0VmFyaWFudCIsImxpc3RJdGVtUHJpbWFyeVR5cG9ncmFwaHlQcm9wcyIsImxpc3RJdGVtU2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzIiwic2NoZW1hIiwiZnVsbG5hbWUiLCJwcmVzZW5jZSIsImFsbG93RW1wdHkiLCJtZXNzYWdlIiwibWF4aW11bSIsImVtYWlsIiwiQ29udGFjdEZvcm0iLCJmb3JtU3RhdGUiLCJzZXRGb3JtU3RhdGUiLCJpc1ZhbGlkIiwidmFsdWVzIiwidG91Y2hlZCIsImVycm9ycyIsInZhbGlkYXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwZXJzaXN0IiwidGFyZ2V0IiwibmFtZSIsImNoZWNrZWQiLCJ2YWx1ZSIsImhhc0Vycm9yIiwiZmllbGQiLCJEZXNjcmlwdGlvbkxpc3RJY29uIiwiZ3JpZEp1c3RpZnkiLCJvdmVyZmxvdyIsImNvbG9yRGVmYXVsdCIsImhlcm9XcmFwcGVyIiwiaGVyb0NvdmVyIiwib3BhY2l0eSIsImhlcm9CZyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsIm5vQ292ZXJPcGFjaXR5IiwiSGVyb0JhY2tncm91bmQiLCJkaXNiYWxlQ292ZXJPcGFjaXR5IiwiYmFja2dyb3VuZEltZyIsImJhY2tncm91bmRQb3NpdGlvbiIsImNvbnRlbnRTZWN0aW9uQ2xhc3NOYW1lIiwidXNlQ3VzdG9tU3R5bGVzIiwiY292ZXJCZyIsImJhY2tncm91bmRJbWFnZSIsImN1c3RvbUNsYXNzZXMiLCJoZXJvIiwibGF5b3V0IiwiY29udGVudFdpZHRoIiwiZG93biIsImhlcm9MZWZ0U2lkZSIsImhlcm9SaWdodFNpZGUiLCJmbGV4IiwiaGVyb0ltYWdlQ29udGFpbmVyIiwiaGVyb0ltYWdlIiwic2hhcGVPdXRzaWRlIiwiY2xpcFBhdGgiLCJIZXJvU2hhcGVkIiwibGVmdFNpZGUiLCJyaWdodFNpZGUiLCJpbWFnZVdyYXBwZXIiLCJtYXhIZWlnaHQiLCJjb3ZlciIsIkhlcm9TaWRlSW1hZ2UiLCJpbWFnZVNyYyIsImltYWdlU3JjU2V0IiwicmV2ZXJzZSIsIkhlcm9TaW1wbGVCYWNrZ3JvdW5kIiwidXNlQmFja2dyb3VuZCIsIk1hcCIsInpvb20iLCJwaW5zIiwiTCIsInJlcXVpcmUiLCJEZWZhdWx0IiwicHJvdG90eXBlIiwiX2dldEljb25VcmwiLCJtYXJrZXJJY29uMngiLCJtYXJrZXJJY29uIiwibWFya2VyU2hhZG93IiwibWVyZ2VPcHRpb25zIiwiaWNvblJldGluYVVybCIsImRlZmF1bHQiLCJpY29uVXJsIiwic2hhZG93VXJsIiwiUmVhY3RNYXAiLCJUaWxlTGF5ZXIiLCJNYXJrZXIiLCJpIiwibG9jYXRpb24iLCJ5IiwieCIsImZvbnRGYW1pbHkiLCJQYXJhbGxheCIsImphcmFsbGF4RWxlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJqYXJhbGxheCIsInNwZWVkIiwiZnVsbFdpZHRoIiwiZGlzYWJsZVBhZGRpbmciLCJuYXJyb3ciLCJTZWN0aW9uIiwiYWx0ZXJuYXRlIiwiaW5uZXIiLCJpbm5lck5hcnJvd2VkIiwiU2VjdGlvbkFsdGVybmF0ZSIsImlubmVybmFycm93ZWQiLCJTSUdOVVAiLCJMT0dJTiIsIlJFU0VUUEFTU1dPUkQiLCJGT1JHT1RQQVNTV09SRCIsIkdFVFVTRVJERVRBSUxTIiwiVVNFUkRFVEFJTFNVUERBVEUiLCJVU0VSUEFTU1dPUkRVUERBVEUiLCJVU0VSRk9SR09UUEFTU1dPUkRVUERBVEUiLCJDT1VSU0VMSVNUIiwiQ09VUlNFREVUQUlMUyIsIkNPVVJTRURFVEFJTFNBVVRIIiwiQVBQTFlDT1VQT04iLCJNQUtFUEFZTUVOVCIsIlBBWU1FTlRISVNUT1JZIiwiUFVSQ0hBU0VEQ09VUlNFIiwiQ0VSVElGSUNBVEVSRVFVRVNUIiwiQkxPR0xJU1QiLCJCTE9HREVUQUlMIiwiR0VUVU5JVkVSU0lUWSIsIkdFVENPUlBPUkFURSIsIkNPTlRBQ1RfVVMiLCJQUkVTU19SRUxFQVNFIiwiUFJFU1NfREVUQUlMUyIsIkdFVF9MTVNEQVRBX0NPVVJTRSIsIkdFVF9MTVNEQVRBX0NBVEVHT1JZIiwiTkVXU0xFVFRFUlNVQlNDUklCRSIsIkdFVFNPQ0lBTExJTktFUyIsIkdFVFBBWU1FTlRDRVJUSUZJQ0FURURFVEFJTFMiLCJNQUtFUEFZTUVOVENFUlRJRklDQVRFIiwiQ0VSVElGSUNBVEVfREFUQSIsIkdFVF9URUFNX0RBVEEiLCJBcHBDb25maWciLCJBUElfRU5EUE9JTlQiLCJwcm9jZXNzIiwiSU1BR0VfVVJMIiwiU0lURV9OQU1FIiwiQ2FuY2VsVG9rZW4iLCJBeGlvcyIsImNhbmNlbCIsImNvbnN0cnVjdG9yIiwiaG9zdCIsIl9wb3J0YWxHYXRld2F5IiwidmVyc2lvbiIsIl9hcGlWZXJzaW9uIiwiZXJyIiwic291cmNlIiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsImVuZHBvaW50IiwiYXV0aGVudGljYXRlZCIsImF1dGhUb2tlbiIsInF1ZXJ5T3B0aW9ucyIsImJvZHkiLCJyZXNwb25zZVR5cGUiLCJoZWFkZXJzIiwic3RvcmFnZVNlc3Npb24iLCJBdXRob3JpemF0aW9uIiwidG9Mb3dlckNhc2UiLCJyZXNwb25zZSIsInJlcXVlc3QiLCJwYXJhbXMiLCJleGVjdXRvciIsImMiLCJvayIsInN0YXR1cyIsImVycm9yT2JqZWN0IiwiY29kZSIsIlN1Y2Nlc3NIYW5kbGVySGVscGVyIiwiaXNDYW5jZWwiLCJlcnJvciIsIm1lc3NhZ2VzIiwiZXJyb3JIZWxwZXIiLCJFcnJvckhhbmRsZXJIZWxwZXIiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwicmF3RXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicHVzaCIsInNldEVycm9yIiwicmF3RGF0YSIsInNldFN1Y2NjZXNzIiwibG9hZGVyIiwibWluSGVpZ2h0IiwiY291cnNlRGV0YWlsV3JhcCIsInNlY3Rpb25EZXNjcmlwdGlvbiIsInNlY3Rpb25BbHRlcm5hdGVGb3JtIiwiYnRuVmlkZW8iLCJ1bF9saXN0aW5ncyIsImNvbG9yX2xpZ2h0X2JsdWUiLCJtYXJnaW50VG9wIiwiYmFubmVySW1hZ2UiLCJoZXJvQ29udGFpbmVyIiwibWluV2lkdGgiLCJjb250ZW50U2VjdGlvbiIsImxpbmVIZWlnaHQiLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nTGVmdCIsInNlY3Rpb25IZWFkZXIiLCJjb250ZW50U2VjdGlvblJldmVyc2UiLCJidG5CbG9jayIsInB1cmNoYXNlQnRuIiwidGV4dEFsaWduIiwic29jaWFsbGlua19uYXYiLCJmbGV4RmxvdyIsImxpc3RTdHlsZSIsInNvY2lhbGxpbmtfbGkiLCJibG9nY2hhaW5faGVhZGluZyIsImNhcmRfcGFyYSIsImNhcmRfaWNvbnMiLCJpbWdfZmx1aWQiLCJvYmplY3RQb3NpdGlvbiIsImltZ19jZXJ0aWZpY2F0ZSIsImJhbm5lcldyYXAiLCJwYWRkaW5nUmlnaHQiLCJmdWxsSW1hZ2UiLCJvcmRlclNwIiwib3JkZXIiLCJjZXJ0aWZpY2F0ZVdyYXAiLCJjZXJ0aWZpY2F0ZUltZ1dyYXAiLCJiYW5uZXJCb3R0b20iLCJ3aHlCbG9ja2NoYWluIiwicGJfNjAiLCJzcF9wXzAiLCJmb250U2l6ZV8xOCIsImNlcnRpZmljYXRlV3JhcHBlciIsInN1YlRpdGxlIiwiY2VydGlmaWNhdGVEZXRhaWxzIiwidGV4dENlbnRlciIsImxpbmtXcmFwcGVyIiwiY29tbW9uTGlzdCIsInJvdW5kSWNvbkltYWdlcyIsIndvcmRXcmFwcGVyIiwid29yZEJyZWFrIiwicGFkZGluZ1giLCJnZXRUZW1wbGF0ZURhdGEiLCJzZXRHZXRUZW1wbGF0ZURhdGEiLCJnZXREYXRhIiwiZmlsdGVyIiwiZSIsInRpdGxlU2x1ZyIsImJsb2NrVGl0bGUxIiwiYmxvY2tJbWFnZTUiLCJSZWFjdEh0bWxQYXJzZXIiLCJibG9jazUiLCJibG9ja0ltYWdlNiIsImJsb2NrNiIsImJsb2NrSW1hZ2U3IiwiYmxvY2s3IiwiYmxvY2tJbWFnZTEiLCJibG9jazEiLCJibG9jazIiLCJibG9ja0ltYWdlMiIsImJsb2NrMyIsImJsb2NrSW1hZ2UzIiwic2VjdGlvbldyYXBwZXIiLCJibG9ja1RpdGxlNCIsImJsb2NrNCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL2VudGVycHJpc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2VudGVycHJpc2UuanNcIik7XG4iLCIvKipcclxuICogQ2F1dGlvbjogQ29uc2lkZXIgdGhpcyBmaWxlIHdoZW4gdXNpbmcgTmV4dEpTIG9yIEdhdHNieUpTXHJcbiAqXHJcbiAqIFlvdSBtYXkgZGVsZXRlIHRoaXMgZmlsZSBhbmQgaXRzIG9jY3VycmVuY2VzIGZyb20gdGhlIHByb2plY3QgZmlsZXN5c3RlbSBpZiB5b3UgYXJlIHVzaW5nIHJlYWN0LXNjcmlwdHNcclxuICovXHJcbiBpbXBvcnQgRW50ZXJwcmlzZSBmcm9tICcuLi9zcmMvdmlld3MvRW50ZXJwcmlzZSc7XHJcbiBpbXBvcnQgeyBBcGlIZWxwZXIgfSBmcm9tIFwiaGVscGVyXCI7XHJcbiBpbXBvcnQgeyBBcGlSb3V0ZXMgfSBmcm9tIFwiY29uZmlnXCI7XHJcblxyXG4gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vIEZvciBHZXQgQ01TIERhdGFcclxuICBjb25zdCByZXNwb25zZUNNUyA9IGF3YWl0IG5ldyBBcGlIZWxwZXIoKS5GZXRjaEZyb21TZXJ2ZXIoXHJcbiAgICBBcGlSb3V0ZXMuRlJPTlRfUEFHRV9EQVRBLnNlcnZpY2UsXHJcbiAgICBBcGlSb3V0ZXMuRlJPTlRfUEFHRV9EQVRBLnVybCxcclxuICAgIEFwaVJvdXRlcy5GUk9OVF9QQUdFX0RBVEEubWV0aG9kLFxyXG4gICAgQXBpUm91dGVzLkZST05UX1BBR0VfREFUQS5hdXRoZW50aWNhdGUsXHJcbiAgICB1bmRlZmluZWQsXHJcbiAgICB1bmRlZmluZWQsXHJcbiAgICB1bmRlZmluZWRcclxuICApO1xyXG4gIGxldCBjbXNEYXRhID0gW107XHJcbiAgaWYgKHJlc3BvbnNlQ01TICYmICFyZXNwb25zZUNNUy5pc0Vycm9yKSB7XHJcbiAgICBjbXNEYXRhID0gcmVzcG9uc2VDTVMuZGF0YS5kYXRhO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNtc0RhdGFcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxMCxcclxuICB9XHJcbn1cclxuXHJcbiBleHBvcnQgZGVmYXVsdCBFbnRlcnByaXNlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyLXNoYXBlLTM1NmQwYjcwMWVhZjBiZGFmN2E4ZGFhMjgzYjkwMmQwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQlNDQU1BQUFBaEZYZlpBQUFDOTFCTVZFVk1hWEV6ZWFrMmY3STRnN2czZzdjdWE1Z3plS2c4aEpvM2dyWTRnN2MzZ3JVMGdMSTJmckUwZGFBdWJKYzJnYlF3ZDZRemVLazJnTE10ZDVzeGRLSXVhNWcxZnJBMmY3SXlkYU0wZTZ3MmZxNDFmSzAxZXFvM2dyZ3ViSmd0YTVjeGRLSTFmN0F5ZGFReWRhTXhjNkV1YkpndmJKa3djWjR1Ylprd2NKd3ViWmd1YkpjeWRxVXlkS0l4YXBndWJKY3RiSmN1YlpjdWJKY3ZiSll1YkpjdmJaa3ViSmN0YkpjdGJaY3ViSmcyZjdBdWJKY3JiWmN1YkpjdWJKY3VhNWczZ3JZMGZxOHViSmN1YkpkRWtkRXdoc3c2aTg4dmhzd3VoY3N1aE10QmpNZ3RoTXNyZzhzcmdzczZpczhxZ2NzOGk5QTlpTVl0ZzhzcGdjb29nTW83aGNNbmdNb25mOG9sZnNvNGdyOGtmY2s1aU04amZNazRpTThoZThrMWZybzdpdEFnZXNrMmhzOGVlY2d6Zkxjb2Zzc2RlTWcwaGM0Y2Q4ZzJoY3N4ZUxRYmRzZ1pkY2d4ZUxJbWZjc3poTTB2ZGE0eGdja3poTTR4Zzg0d2Y4WXhnczR1ZEtzdmZjUXVjcWhVbmRST21kTTFmSzB3Y1o4dmI1dzBlcXBRbTlNemVLaFhvTlZjcGRZeWRLTlduOVZab3RWS2x0SkZqc0l3Y0oxUm1zOU9sc2xMbXRILy8vOCtrYzllcGRZemQ2ZGJvOVZIa01NMmY3RkhtTkJDbE04eWRxVmNwTlk5aHJvM2dMTTloTGN6ZWFsUW1jdzNmYTQ2ZjdBOGdMTXhjNkkzZWFneWM2RklsZEpNbDlKU25OUlNudE5ObDlKUG5OSkZpNzVVbk05Wm9kVktrc2c4a000NWpjMDllNlpIbHRGQms4ODNnYlJCaDdwRGs5RXdjYUJ6bjc4NGc3ZEtrY1kyaTgxT205TTdqODVMbGM4MWlzMDlnN1E0Z3JZL2o5QTBlcXhLbWRGRmx0QkVqY1hmNmZGSW1kQkNpTHhKbDlGR2xORkJpNzh5aU14Vm5kRXZicG82anM3NCt2eCtwc1BQMytvL2tzNUhrY3BHbU5DandkWkNrTkRNM2VoWW9OSkVscytseE5reGg4eEhrczAramRDMXpkNUxnNnIrL3YvSDJ1Zno5L28zak0zdDgvZWR2ZE0vazg5VGg2MU9pTEJTamJaa2xiYVR0OUJmcHRkam1MMUFpY0JIajhoR2s5RkFnSzFka0xOVGpMUmVrcmRDbGMvazdmTTBpY3kweTl0Z3A5YzRqYzJOdE05RGxjOHppY3hlWFpuM0FBQUFRM1JTVGxNQUhEZFRiNHlQQStMdG5FUW1DNEwyRW1IcUI3WEEwZDBzcjQ3OHg0L1lkNWkxek9meVBrZjFzTFZxNE5oM0Z2anhvcFEyL1NUTnVGelV3Rkl3eEthZWpJTHBJQkVWOXdBQUJoVkpSRUZVZUY2czFOZHlGRWNZQmVCZW9RSWhSQWtMbFJER3JoSWdZM0JKTDhDVmVLenV5WEZ6emprbjVaeHp6dVNjZzNQTzhjS3p1NzBKa08wTGZ4ZFRVLy9wTTl2VHU3WGdmNktxT1ZUYjlYN3RvUnJWRWZCZjFIVFZqWmNjclQvMmJ5MVZWOTI4WXR5OVpiVnV1Y2R6OTBmckc4REJqbDlwVkFwYk9zdHZtTXV2VmdhTlhTZkFBZDZwR3hweTZ5eGY1cGg0M3BTLzRmM3VvYUdtMnJkdTcyUzl4ek92TXlta1pGcS9wdERyazkwbWhXN2U0emw3SEx6aHhHV1BSMjB4bVN4Si9WcWxkRzVtOVhoYVZPQTFEYWRzTmgzUHU1TDJONlF0UE8vMzJKcHFRQlZWazIwb3kvUGkyczIzV0V2eWZIYmUxdGhhZFZRdHR2bTdMbGY2NWdHbVhLNjdYdHVweW9NN0hRaG1YZExTOG9HV0pOZU9KM0M1Zkc1WENFSm5rZXozL29GZHN2Z0o0bDJBTlp3aHJKS2svN09TWGErM1Z3MldKTWxLbkdrb2JvdVlrNlQwVHlYMzBrbE9VblREOUhKNXFwY2tMM0VXL3c0WEYzWGQwRkd5d1hVcnN0cmNsVnNxejVQZC9zWEZZeURuUGRyTGNRT0RtR09LNDdJWmI0Q21pYm1NbitNWVJ6Rlo1amczM1pML0VKcldjc3pIbUFOeTNBUkJLL0lYdGNpSnk4VnNpdFBTZEUzdXVIeHpvdWdvamNVZHI4LzMyYXRuei9ldjNmL0s1d3RweFVUcGNhSTQ1enVzVkRwWXRaaStqZzBvVTliM3g3NGg3K245QUJ2WUVaZUthVnEwc2gwQXRMS3NGdHFOQmRlVDBNclN6d3dscTkreDZ4QU80dGdPdFN6YkNqck5RUWlOdlFVYlVFdWJ2ekJVZUd3MjZ5RENzUkhDb0xrVEhEYTdJZE9MSVRocy9nSHZDaHN6aDJDaW1FOHBlUnM0N2N4QU5JMGxZTkI1eTFEbGpwT0YwSWh6QkRQT1puRE9xWVliZUdLRUNiUHpXblhsdWRQcGh3NWMyWUJxNXpsd1hwaEliTzRWRENaMGduUGZVTzFUd1pvWXdBczJFeFBDZWRBdTlEQWpmUVVqeklUUWIzak5qMEtHMlNndDZCSGFRVWRZeld6K1htQmt0T0h3YW5YamFTVGN3d3ppQmN1TU90d0JtcVByVE94RlFSL0RSS0tQcXl1cjBhaVc2Y1VMWXN4NnRCbTBqWHBSL0FVV1I2SFJxOVdWVzZNUmhJcTVqTHlqYmFDVERDaWp5WUpOcENhamR5b2JQL2VUdzBpZXhCQUtrSjNnQTVLY1FiMnpCWHNJQmNrbit4VnY4amtaU2FFRkhFK2pGRWxlQUVmYXlSVTBNb3VOb0JtQi9MNTBBaS9IU0xJSHhjcnBDdm5oU1FBdWFrS3AyQy9ZYkN5bEpqWFJWeS96MytLdi9Sck5jQ28rV1V6bFZFaHpLZmZuVFFueGVOOWZXRjg4ZmlOQ1VkU1RzYXVmYUNoS1dJbkhleXN5Z2ZwSXFhZ29ha1crdlYyMEo4dXlsNlR5TktFWldWNG9SU1B5Q2tXcGdPTFNia0NPYlQ4bzJyNnRsRzU4SFFxdWY2TzB2NTB0QjdKTTdGNEVPUmQyZHgvSzB3L0tIc1ZrTFBhb1lyd2dQL3k3a3JyM1NTTUE0emorT0JnbWpZa3hjZElKUXlRUktnZzJ2aVg5SGRkaTlVQmIyOUxyS1I3Q1ZWRUVFWFdvalVrWE55ZlROREUxNFc5Z2JISk51aGpEZXR0TjNadmJPdmRPcUNEM0pwLzlsKy93SkUrOVBrWUdqeC9mcWt5czNTMnJNb3pNL28yMTA2cmZNVUlObzZoVnF6K2V1L2hkMWM0eFRnMFRBZnk1a1YrNFVHNitJdGhIVFU5d29XbXh1S05iVGZ1Q1Nmb3ZCQ3hxN0V0SHF2WUw0U202RjhHVnhzU1hITVEwN1RPaTFES3RaeGpXYWFJeWk0Q1hXanhQY2NVdzhXVmJNWVk1d3hDMW16RXlYTUpXa2xscFJsb2krS2tvcTY5c3hCVGxFbEY2YUF4WVVialhObGhsRFppbERuTTRVNVNsTjViaVJzUkhuYngzbWJlV2pFaDRtRXlpdUpEbDVYY1dWbVg1R3ZOa0ZnTFdaTTVxd3NvcDQvQVdmTGhVMWNSN2sxVlZ2Y1lDV1JrT0k2WHk1Z21ucGhDWUlrdnp1Tll6SHpvc3Eyb05rMlJ0U3M4a2hmVU9mSElEZ1I2eXNZQmFNcGw0dUVnazJVL29KVHM5QWFUU3dtYTdkVDY5Z2VBRTJacEVqVXNuMmllSk5IZUtmckkzRWNBR0oyWmFOZ1Z1QzhFQmN0Q0xjNTdQNXU1bGVkNklPQmtJWWt1UU1ybW1qQ2hzNFZrZk9lckhxU0JrUHpabGhlMDZSc2xaM3pNamsyc3NjcUt3WTBSY2pLSytMV2J6ZDdLaUhoa25jcy9zaUZKK1Y1ZVh4RDM0QjhuVnVKRXBHSk5teE4yZ0gzdlN2cDdKNzB0RitEMUVqOHFVSkQxVGtFckFORDJHWndURmcvTHVidm1naUJHM1NPdmRsc3FGUXJrRXpKQ0wxcnN0bG5WRlJPaXhab0REU3VYUUZIRVN3VkdsY3VRY01iL2I0Mk5nakxvd2g1TVRERkUzdk5CNXFTdFJJRXJkQ1FFaDZwTFBSOTJhblNVYi93QUlobGRBYURNcEdnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCa0FBQUFwQ0FZQUFBREFrNExPQUFBRmdVbEVRVlI0QWExWEE1QmpXUlROMm9XMTdkM1lhWnRyMjk2MkhVemJETnBqc3pXMjRtUnQyOHA0N3Y3enEvYlhadHJwL2xXblhyMzM3ajNuUENlODVOY3lwZ1NGZHVnQ3BXNVlvREFNUmFJTXFSaTZhS3E1RTNZcURRTzNxQXdqVldyRDhOY3EvUkJweWtkOG9aVWIva2FKdXRvdzhyMWFQOUlJMFdtTEtMSXNKeXYxdy9rcXc5Q2gyTVlkQisrMTJPbnhlZS9RTXd2ZjQvRGsvTGZwL2k0bnhUWHRPb1E0cFc1QWo3d3BpY2kxQTllcmRBTjJPSDY0eDhPU1A5ajNGdDNiN2FXa1RnL0ZtOTFzaVRyYTBmOW9uNXNRcjlJTmVqSDZDVVVVcGF2akZOcTFCK09hZGh4bW5mYThSZkVtTjhWTkFzUWhQcUY1NXhIa016ejNqU21DaFdVNmY3L1haS05IKzkraEJMT0hZb3p1S1FQeHlNUFVLa3JYL0swdVduZkZhSkdTMVFQUnRac09QdHIzTnNXMHV5aDZOTkNPa1UzWXorYlhiVDNJOEczeEU1RVhMWHRDWGJicXdDTzl6UFFZUFJUWjV2SURYRDdVK3c3ckZERW9VVWY3aWJISVI0eTZiTFZQWHJ6OEpWWkVxbDEzdHJ4d3VlL3VEaXZkM2ZrV1JiUzYvSUEyYklENHVrMFVwRjFOOHFMbGJCbFhzNEVlN0hMVGZWMWo1NEFQdk9EblNmT1dCcXRLVnZqZ0xLekY1WWRFazVld1JrR2xLMGkzM0VvZmZmYzdIVDU2akQ3LzZVK3FIM0N4N1NCTE5udEg1WUlQdk9EbnlmSVhaWVJWRFBxZ0h0THM1QUJIRDNZekx1ZXNwYjd0NzlGWTM0RGpNd3JWcmNUdXdsVDU1WU1Qdk9CblJySjRWWFRkTm5ZdWc1dWNITEJqRXB0MzA3MDFBM1RzK0hFYTczdTZkVDNGTld3ZmxZODZlTUhQaytZdStpNnB6VXBSclc3U05EZzVKSFI0S2FwbU01V3YyRThUZmNiMUhvcXFITUhVK3VXREQ3emc1NG16NS8yQlNuaXppOVQxRGc0UVFYTFRvR05Da2I2dGIxTlUrUUFsR3IxKytlQURyemhuL3U4UTJZWmhRVmxaNStDQU90cWZiaG1hVUNTMWV6TkZWbTJpbURiUG1Qbmc1d216K2d3aCtvSERjZTBlVXRRNk9HREl5UjB1VWhVc29PM3ZmRG1tZ09lekgwbVpONTl4N01CaSsrV0RMMWcvZUVpVTNhdmxpZE82NzFia0xmd2J3NVhWMlA4UHpvMHlkeTR0Mi8wZXUzM3hZU09NT0Q4aFRmNENyQnRHTVNvWGZQTGNoWCtKMHJ1U2VQdzNMWmVLMGp1UEpiWXpyaGtIMGlvN0IzazE2NGhpR3Zhd2hPS01Ma3JRTHlWcFpnOHJIRlc3RTJ1SE9MODg4SUJQbE5aMUZQenN0U0pNNjk0ZldyNlJ3cHZjSks2MCswSENJTFRCelpMRk5kdEF6SmFvaHplNjBUOHFCenloNVp1T2c1ZTd1d1FwcG9mRW1mMisrRFl2bXlTcUdCdUthaWNGMWJsUWpodUhkdkNJTXZwOHdoVFRmWnpJN1JsZHB3dFN6TCtGMSt3a2RaMlRCT1cyZ0lGODhQQlR6RC9ncGVSRUFNRWJ4bkpjYUpITkhycHpqaTBnUUNTNmhka0VlWXQ5REYvMnFQY0VDOFJNMjhId21yM3NkTnlodDAwYnlBdXQyazNndWZXTnRndE9FT0ZHVXdjWFdORGJkTmJwZ0JHeEV2S2tPUXN4aXZKeDMzaW93MFZ3NVM2U1ZUcnBWcTExeXNBMlJwN2dUZlBma3RjNnpodFhCQkMrYWRSTHNoZjZzRzJSZkhQWjVFQWM0c1ZaODN5Q04wMEZrLzRrZ2d1NDBaVHZJRW01ZzI0cXRVNEtqQnJ4L0JUVEg4aWZWQVNBRzdnS3JuV3hKRGNVN3g4WDZFY2N6aG0zbzZZaWN2c0xYV2ZoM0NoMVcwazh4MG5YRiswZkZ4Z3Q0cGh6OFF2eXBpd0NDRktNcVhDbnFYRXhqcTEwYmVIK1VVQTcrbkc2bWRHL1B1MGYzTGdGY0dybDJzMGtOTmpwbW9KOW80QjI5Q01POGRNVDRRNW94OHVpdEY2ZnFzckpPcjhxbndOYlJ6djZoU25HNXdQKzY0QzdoOWxwMzBoS050S2RXanRka2J1UEExOW5KN1R6M3pSL2liZ0FSYmhiNEFsaGF2Y0JlYm1USGNGbDJmdllFblcwb3g5eE14S0JTOGJ0SitLaUVicTl6QTRSdGhRWERoUGEwVDlURWU2OWdXdXB3YzZ1QlVwaHF1WGdmKy9Gcklqd2VIUVM0L3BkdU1lNUVSVU1IVWQ5eHY4WlI5OEN4a1M0RjJuM0VVclVaMTBFWU53N0JXbTl4MUdpUHNzaTNHZ2lHUkRLV1JZWmZYbE9OK2RmTmJNK0dnSXdZZHdBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2tBQUFBcENBUUFBQUFDYWNoOUFBQUNNVWxFUVZSNEFlM1NoWTdqUUJBRTBBb3ovZjkvSFRNemhnMXpyZEtVckpiZHgrS2QybkQ4Vk51ZGZzTC9UaC8vL2R5UU4yVEg2ZjN5L0JHcEMzNzlyVitTK3FxZXRCT3hJbU5RWEw4SkNBcjJWNGlNUVhIR05KeGVDZlpYaFNSQmNRTWZ2a09XVWR0ZnpsTGdBRU5tWkRjbW8yVFZtdDhPU00yZVh4QnAzRGpIU01GdXRxUzdTYm1lbXpCaVIreHBLQ05VSVJrZGtrWXhoQWt5R29CdnlRRkVKRWVmd1NtbXZCZkp1SjZhS3FLV25Ba3ZHWk9hWlhUVWdGcVlVTFdOU0hVY2tadVIxSElJaW1VRXh1dFJ4d3pPTFJPSUc0dkttQ0tRdDM2NG1JbGhTeXpBZjFtOWxIWkhKWnJsQU9NTXp0UlJpS2ltcC9ycGRKRGM5QXdyeTV4VFpDdGU3Rkh0dVM4d0pnZVlHcmV4Mjh4TlRkMDg2RGlrN3ZVTXNjUU9hOHk0RG9HdENDU2tBS2xOd3BnTnRwaGpyQzZNSUhVa1I2WVd4eHM2U2M1eHFuMjIybW1DUkZ6SXQ4bEVkS3graWtDdGc5MXFTMldwd1ZmQmVsSkNpUUp3dnppeGZJOWN4WlFXZ2lTSmVsS253QkVsS1l0RE9iMk1GYmhtVWlnYlJlUUJWMENnNCtxTVhTeFhTeUdVbjRVYkY4bCs3cWRTR25UQzBYTENtYWhJZ1VITGhMT2hwVkN0dzRDellYdkxRV1FiSk5teG9Dc09LQXhTZ0JKbm83NWF2b2xrUnc4aUlBRmNzZGMwMmU5aXlDZDh0SHdtZVNTb0tUb3dJZ3ZzY1NHWlVPQTdQdUNONWIyQlg5bVFNN1Mwd1loTU5VNzR6Z3NQQmozSFU3d2d1QWZueHhqRlFHQkU2cHdOK0dqTUU5ekhZN3pHcDh3VnhNU2hZWDlOWHZFV0QzSGJ3SmY0Z2lPNENGSVF4WFNjSDEvVE0rMDRra0JpQUFBQUFFbEZUa1N1UW1DQ1wiIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIGNvbG9ycyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9LFxyXG4gIGJvcmRlcjoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBib3JkZXI6ICczcHggc29saWQnLFxyXG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuZGl2aWRlcixcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNiksXHJcbiAgICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIH1cclxuICB9LFxyXG4gIGJvcmRlckRhcms6IHtcclxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuaW5kaWdvWzcwMF0sXHJcbiAgfSxcclxuICBtb2RlVG9nZ2xlcjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IGAtJHt0aGVtZS5zcGFjaW5nKDEvMil9cHhgLFxyXG4gICAgbGVmdDogYC0ke3RoZW1lLnNwYWNpbmcoMS8yKX1weGAsXHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgdHJhbnNpdGlvbjogYHRyYW5zZm9ybSAuM3MgY3ViaWMtYmV6aWVyKC40LC4wMywwLDEpYCxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW9kZVRvZ2dsZXJEYXJrOiB7XHJcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dGhlbWUuc3BhY2luZygzKX1weClgLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuaW5kaWdvWzkwMF0sXHJcbiAgfSxcclxuICBtb2RlVG9nZ2xlckljb246IHtcclxuICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS8yKSxcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMS8yKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfVxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgZGFyayBtb2RlIHRvZ2dsZXJcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBEYXJrTW9kZVRvZ2dsZXIgPSAoeyB0aGVtZU1vZGUgPSAnbGlnaHQnLCBvbkNsaWNrLCBjbGFzc05hbWUsIC4uLnJlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgIGNsYXNzZXMuYm9yZGVyLFxyXG4gICAgICAgICAgdGhlbWVNb2RlID09PSAnZGFyaycgPyBjbGFzc2VzLmJvcmRlckRhcmsgOiAnJyxcclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgY2xhc3Nlcy5tb2RlVG9nZ2xlcixcclxuICAgICAgICAgIHRoZW1lTW9kZSA9PT0gJ2RhcmsnID8gY2xhc3Nlcy5tb2RlVG9nZ2xlckRhcmsgOiAnJyxcclxuICAgICAgICApfT5cclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kZVRvZ2dsZXJJY29ufVxyXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgIHdpZHRoPVwiMTRcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTNcIlxyXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxNCAxM1wiXHJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICBkPVwiTTQuNTIyMDggNy43MTc1NEM3LjU3ODIgNy43MTc1NCAxMC4wNTU3IDUuMjQwMDYgMTAuMDU1NyAyLjE4Mzk0QzEwLjA1NTcgMS45MzQ5OCAxMC4wMzkyIDEuNjg5ODYgMTAuMDA3NCAxLjQ0OTYxQzkuOTU4MDEgMS4wNzcyNyAxMC4zNDk1IDAuNzcxMTU5IDEwLjY0NzQgMC45OTk5MkMxMi4xMTUzIDIuMTI3MTYgMTMuMDYxNSAzLjg5OTk5IDEzLjA2MTUgNS44OTM4M0MxMy4wNjE1IDkuMjk5NTggMTAuMzAwNiAxMi4wNjA1IDYuODk0ODUgMTIuMDYwNUMzLjk1MzM0IDEyLjA2MDUgMS40OTI4NiAxMC4wMDEgMC44NzY3MjggNy4yNDUyN0MwLjc5NDg0MSA2Ljg3OTAyIDEuMjM2NjggNi42NTI4OSAxLjU1MzIxIDYuODU0NTFDMi40MTEwNiA3LjQwMDk1IDMuNDI5NiA3LjcxNzU0IDQuNTIyMDggNy43MTc1NFpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG5cclxuRGFya01vZGVUb2dnbGVyLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSB0aGVtZSBtb2RlXHJcbiAgICovXHJcbiAgdGhlbWVNb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZW1lIHRvZ2dsZXIgZnVuY3Rpb25cclxuICAgKi9cclxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFya01vZGVUb2dnbGVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9EYXJrTW9kZVRvZ2dsZXInO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBOb1NzciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ob1Nzcic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgZXh0cmFTbWFsbDoge1xyXG4gICAgZm9udFNpemU6IDEwLFxyXG4gIH0sXHJcbiAgc21hbGw6IHtcclxuICAgIGZvbnRTaXplOiAyMCxcclxuICB9LFxyXG4gIG1lZGl1bToge1xyXG4gICAgZm9udFNpemU6IDMwLFxyXG4gIH0sXHJcbiAgbGFyZ2U6IHtcclxuICAgIGZvbnRTaXplOiA0MCxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGljb25cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBJY29uID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgZm9udEljb25DbGFzcywgc2l6ZSwgZm9udEljb25Db2xvciwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE5vU3NyPlxyXG4gICAgICA8aVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICdpY29uJyxcclxuICAgICAgICAgIGZvbnRJY29uQ2xhc3MsXHJcbiAgICAgICAgICBjbGFzc2VzW3NpemVdLFxyXG4gICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICl9XHJcbiAgICAgICAgc3R5bGU9e3sgY29sb3I6IGZvbnRJY29uQ29sb3IgfX1cclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgLz5cclxuICAgIDwvTm9Tc3I+XHJcbiAgKTtcclxufTtcclxuXHJcbkljb24uZGVmYXVsdFByb3BzID0ge1xyXG4gIHNpemU6ICdzbWFsbCcsXHJcbn07XHJcblxyXG5JY29uLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjbGFzc2VzIG9mIHRoZSBmb250IGljb25cclxuICAgKi9cclxuICBmb250SWNvbkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU291cmNlIHNldCBmb3IgdGhlIHJlc3BvbnNpdmUgaW1hZ2VzXHJcbiAgICovXHJcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnZXh0cmFTbWFsbCcsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSksXHJcbiAgLyoqXHJcbiAgICogQ29sb3Igb2YgdGhlIGljb25cclxuICAgKi9cclxuICBmb250SWNvbkNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSWNvbic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgbWFrZVN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlcyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgIGZsZXhXcmFwOiAnbm93cmFwJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgaWNvbiB0ZXh0XHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgSWNvblRleHQgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdGl0bGUsXHJcbiAgICBjb2xvcixcclxuICAgIGZvbnRJY29uQ2xhc3MsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBpY29uUHJvcHMsXHJcbiAgICB0eXBvZ3JhcGh5UHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnaWNvbi10ZXh0JywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxJY29uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi10ZXh0X19pY29uXCJcclxuICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgIGZvbnRJY29uQ2xhc3M9e2ZvbnRJY29uQ2xhc3N9XHJcbiAgICAgICAgZm9udEljb25Db2xvcj17Y29sb3J9XHJcbiAgICAgICAgey4uLmljb25Qcm9wc31cclxuICAgICAgLz5cclxuICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICBub1dyYXBcclxuICAgICAgICB2YXJpYW50PVwiaDNcIlxyXG4gICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnaWNvbi10ZXh0X190eXBvZ3JhcGh5JywgY2xhc3Nlcy50aXRsZSl9XHJcbiAgICAgICAgey4uLnR5cG9ncmFwaHlQcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkljb25UZXh0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBpY29uUHJvcHM6IHt9LFxyXG4gIHR5cG9ncmFwaHlQcm9wczoge30sXHJcbn07XHJcblxyXG5JY29uVGV4dC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgY2xhc3NlcyBvZiB0aGUgZm9udCBpY29uXHJcbiAgICovXHJcbiAgZm9udEljb25DbGFzczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFNvdXJjZSBzZXQgZm9yIHRoZSByZXNwb25zaXZlIGltYWdlc1xyXG4gICAqL1xyXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIG9mIHRoZSBpY29uLXRleHRcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBJY29uIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGljb25Qcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0eXBvZ3JhcGh5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uVGV4dDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSWNvblRleHQnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXMnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgZEJsb2NrOiB7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgaW1hZ2VzXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgSW1hZ2UgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBzcmMsIHNyY1NldCwgYWx0LCBsYXp5LCBsYXp5UHJvcHMsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBpZiAobGF6eSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2ltYWdlJywgY2xhc3Nlcy5yb290LCBjbGFzc2VzLmRCbG9jaywgY2xhc3NOYW1lKX1cclxuICAgICAgICBhbHQ9e2FsdH1cclxuICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICBzcmNTZXQ9e3NyY1NldH1cclxuICAgICAgICBlZmZlY3Q9XCJvcGFjaXR5XCJcclxuICAgICAgICB7Li4ubGF6eVByb3BzfVxyXG4gICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aW1nXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnaW1hZ2UnLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIGFsdD17YWx0fVxyXG4gICAgICBzcmM9e3NyY31cclxuICAgICAgc3JjU2V0PXtzcmNTZXR9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsdDogJy4uLicsXHJcbiAgbGF6eTogdHJ1ZSxcclxuICBsYXp5UHJvcHM6IHtcclxuICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICB9LFxyXG59O1xyXG5cclxuSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogU291cmNlIG9mIHRoZSBpbWFnZVxyXG4gICAqL1xyXG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFNvdXJjZSBzZXQgZm9yIHRoZSByZXNwb25zaXZlIGltYWdlc1xyXG4gICAqL1xyXG4gIHNyY1NldDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBJbWFnZSB0aXRsZVxyXG4gICAqL1xyXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBMYXp5IGxvYWRpbmcgcHJvcGVydGllc1xyXG4gICAqL1xyXG4gIGxhenlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBTaG91bGQgbGF6eSBsb2FkIHRoZSBpbWFnZVxyXG4gICAqL1xyXG4gIGxhenk6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0ltYWdlJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQXJyb3dSaWdodEFsdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHRBbHQnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgcGFkZGluZzogMCxcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBcIkxlYXJuIE1vcmVcIiBsaW5rXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgTGVhcm5Nb3JlTGluayA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBjb2xvcixcclxuICAgIGNvbXBvbmVudCxcclxuICAgIHZhcmlhbnQsXHJcbiAgICB0aXRsZSxcclxuICAgIGhyZWYsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBpY29uUHJvcHMsXHJcbiAgICB0eXBvZ3JhcGh5UHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IGNoaWxkcmVuID0gKFxyXG4gICAgPD5cclxuICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2xlYXJuLW1vcmUtbGlua19fdHlwb2dyYXBoeScsIGNsYXNzZXMudGl0bGUpfVxyXG4gICAgICAgIHZhcmlhbnQ9e3ZhcmlhbnR9XHJcbiAgICAgICAgY29sb3I9e2NvbG9yIHx8ICdwcmltYXJ5J31cclxuICAgICAgICB7Li4udHlwb2dyYXBoeVByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdsZWFybi1tb3JlLWxpbmtfX2ljb24tYnV0dG9uJywgY2xhc3Nlcy5pY29uKX1cclxuICAgICAgICBjb2xvcj17Y29sb3IgfHwgJ3ByaW1hcnknfVxyXG4gICAgICAgIHsuLi5pY29uUHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICA8QXJyb3dSaWdodEFsdEljb24gY2xhc3NOYW1lPVwibGVhcm4tbW9yZS1saW5rX19hcnJvd1wiIC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YVxyXG4gICAgICBocmVmPXtocmVmfVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2xlYXJuLW1vcmUtbGluaycsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG5cclxuTGVhcm5Nb3JlTGluay5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdmFyaWFudDogJ3N1YnRpdGxlMScsXHJcbiAgaHJlZjogJyMnLFxyXG4gIHR5cG9ncmFwaHlQcm9wczoge30sXHJcbiAgaWNvblByb3BzOiB7fSxcclxuICBjb21wb25lbnQ6ICdhJyxcclxufTtcclxuXHJcbkxlYXJuTW9yZUxpbmsucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbXBvbmVudCB0byBsb2FkIGFzIGEgbWFpbiBET01cclxuICAgKi9cclxuICBjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZihbJ0xpbmsnLCAnYSddKSxcclxuICAvKipcclxuICAgKiBUaXRsZSBvZiB0aGUgbGlua1xyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVmFyaWFudCBvZiB0aGUgbGlua1xyXG4gICAqL1xyXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2g2JywgJ3N1YnRpdGxlMScsICdzdWJ0aXRsZTInLCAnYm9keTEnLCAnYm9keTInXSksXHJcbiAgLyoqXHJcbiAgICogSHJlZiBvZiB0aGUgbGlua1xyXG4gICAqL1xyXG4gIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ29sb3Igb2YgdGhlIGxpbmtcclxuICAgKi9cclxuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgSWNvbiBjb21wb25lbnRcclxuICAgKi9cclxuICBpY29uUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdHlwb2dyYXBoeVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVhcm5Nb3JlTGluaztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTGVhcm5Nb3JlTGluayc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgdXNlU2Nyb2xsVHJpZ2dlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyJztcclxuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1VwJztcclxuaW1wb3J0IFpvb20gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvWm9vbSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFNjcm9sbFRvcCA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoe1xyXG4gICAgZGlzYWJsZUh5c3RlcmVzaXM6IHRydWUsXHJcbiAgICB0aHJlc2hvbGQ6IDEwMCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93KSB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFpvb20gaW49e3RyaWdnZXJ9PlxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSByb2xlPVwicHJlc2VudGF0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIDxGYWIgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cInNtYWxsXCIgYXJpYS1sYWJlbD1cInNjcm9sbCBiYWNrIHRvIHRvcFwiPlxyXG4gICAgICAgICAgPEtleWJvYXJkQXJyb3dVcEljb24gLz5cclxuICAgICAgICA8L0ZhYj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1pvb20+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVG9wOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1Njcm9sbFRvcCc7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBJbWFnZSB9IGZyb20gJy4vSW1hZ2UnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEljb24gfSBmcm9tICcuL0ljb24nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExlYXJuTW9yZUxpbmsgfSBmcm9tICcuL0xlYXJuTW9yZUxpbmsnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEljb25UZXh0IH0gZnJvbSAnLi9JY29uVGV4dCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGFya01vZGVUb2dnbGVyIH0gZnJvbSAnLi9EYXJrTW9kZVRvZ2dsZXInO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNjcm9sbFRvcCB9IGZyb20gJy4vU2Nyb2xsVG9wJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eVNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcic7XHJcbmltcG9ydCBDb3VudFVwIGZyb20gJ3JlYWN0LWNvdW50dXAnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgQ291bnQgVXAgTnVtYmVyc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENvdW50VXBOdW1iZXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgc3RhcnQsXHJcbiAgICBlbmQsXHJcbiAgICBzdWZmaXgsXHJcbiAgICBwcmVmaXgsXHJcbiAgICBsYWJlbCxcclxuICAgIHRleHRDb2xvcixcclxuICAgIGxhYmVsQ29sb3IsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB2aXNpYmlsaXR5U2Vuc29yUHJvcHMsXHJcbiAgICB3cmFwcGVyUHJvcHMsXHJcbiAgICBjb3VudFdyYXBwZXJQcm9wcyxcclxuICAgIGNvdW50TnVtYmVyUHJvcHMsXHJcbiAgICBsYWJlbFByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgW3ZpZXdQb3J0RW50ZXJlZCwgc2V0Vmlld1BvcnRFbnRlcmVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzZXRWaWV3UG9ydFZpc2liaWxpdHkgPSBpc1Zpc2libGUgPT4ge1xyXG4gICAgaWYgKHZpZXdQb3J0RW50ZXJlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Vmlld1BvcnRFbnRlcmVkKGlzVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdjb3VudHVwLW51bWJlcicsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cclxuICAgICAgPFZpc2liaWxpdHlTZW5zb3JcclxuICAgICAgICBvbkNoYW5nZT17aXNWaXNpYmxlID0+IHNldFZpZXdQb3J0VmlzaWJpbGl0eShpc1Zpc2libGUpfVxyXG4gICAgICAgIGRlbGF5ZWRDYWxsXHJcbiAgICAgICAgey4uLnZpc2liaWxpdHlTZW5zb3JQcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnR1cC1udW1iZXJfX3dyYXBwZXJcIiB7Li4ud3JhcHBlclByb3BzfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGNvbG9yPXt0ZXh0Q29sb3IgfHwgJ3RleHRQcmltYXJ5J31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY291bnR1cC1udW1iZXJfX2NvdW50LXdyYXBwZXJcIlxyXG4gICAgICAgICAgICB7Li4uY291bnRXcmFwcGVyUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDb3VudFVwXHJcbiAgICAgICAgICAgICAgZGVsYXk9ezF9XHJcbiAgICAgICAgICAgICAgcmVkcmF3PXtmYWxzZX1cclxuICAgICAgICAgICAgICBlbmQ9e3ZpZXdQb3J0RW50ZXJlZCA/IGVuZCA6IHN0YXJ0fVxyXG4gICAgICAgICAgICAgIHN0YXJ0PXtzdGFydH1cclxuICAgICAgICAgICAgICBzdWZmaXg9e3N1ZmZpeCB8fCAnJ31cclxuICAgICAgICAgICAgICBwcmVmaXg9e3ByZWZpeCB8fCAnJ31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3VudHVwLW51bWJlcl9fY291bnRcIlxyXG4gICAgICAgICAgICAgIHsuLi5jb3VudE51bWJlclByb3BzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgIGNvbG9yPXtsYWJlbENvbG9yIHx8ICd0ZXh0U2Vjb25kYXJ5J31cclxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb3VudHVwLW51bWJlcl9fbGFiZWxcIlxyXG4gICAgICAgICAgICB7Li4ubGFiZWxQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQ291bnRVcE51bWJlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc3RhcnQ6IDAsXHJcbiAgdmlzaWJpbGl0eVNlbnNvclByb3BzOiB7fSxcclxuICB3cmFwcGVyUHJvcHM6IHt9LFxyXG4gIGNvdW50V3JhcHBlclByb3BzOiB7fSxcclxuICBjb3VudE51bWJlclByb3BzOiB7fSxcclxuICBsYWJlbFByb3BzOiB7fSxcclxufTtcclxuXHJcbkNvdW50VXBOdW1iZXIucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIFN1ZmZpeCBvZiB0aGUgY291bnQgdXAgbnVtYmVyXHJcbiAgICovXHJcbiAgc3VmZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBQcmVmaXggb2YgdGhlIGNvdW50IHVwIG51bWJlclxyXG4gICAqL1xyXG4gIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgbGFiZWwgdGV4dCBvZiB0aGUgY291bnQgdXAgbnVtYmVyXHJcbiAgICovXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTdGFydGluZyBudW1iZXJcclxuICAgKi9cclxuICBzdGFydDogUHJvcFR5cGVzLm51bWJlcixcclxuICAvKipcclxuICAgKiBFbmQgbnVtYmVyXHJcbiAgICovXHJcbiAgZW5kOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGV4dCBjb2xvclxyXG4gICAqL1xyXG4gIHRleHRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBMYWJlbCBjb2xvclxyXG4gICAqL1xyXG4gIGxhYmVsQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIFZpc2liaWxpdHlTZW5zb3IgQ29tcG9uZW50XHJcbiAgICovXHJcbiAgdmlzaWJpbGl0eVNlbnNvclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSB3cmFwcGVyIGRpdlxyXG4gICAqL1xyXG4gIHdyYXBwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgY291bnQgd3JhcHBlciBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGNvdW50V3JhcHBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBDb3VudFVwIFJlYWN0IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGNvdW50TnVtYmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIGxhYmVsIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgbGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50VXBOdW1iZXI7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NvdW50VXBOdW1iZXInO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5LCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBkZXNjcmlwdGlvbiB3aXRoIENUQSdzXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgRGVzY3JpcHRpb25DdGEgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdGl0bGUsXHJcbiAgICBzdWJ0aXRsZSxcclxuICAgIHByaW1hcnlDdGEsXHJcbiAgICBzZWNvbmRhcnlDdGEsXHJcbiAgICBhbGlnbixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHdyYXBwZXJQcm9wcyxcclxuICAgIHRpdGxlUHJvcHMsXHJcbiAgICBzdWJ0aXRsZVByb3BzLFxyXG4gICAgYnV0dG9uR3JvdXBQcm9wcyxcclxuICAgIHByaW1hcnlCdXR0b25XcmFwcGVyUHJvcHMsXHJcbiAgICBzZWNvbmRhcnlCdXR0b25XcmFwcGVyUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNTbSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyksIHtcclxuICAgIGRlZmF1bHRNYXRjaGVzOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBsZXQganVzdGlmeUdyaWQgPSAnY2VudGVyJztcclxuICBpZiAoYWxpZ24gPT09ICdsZWZ0Jykge1xyXG4gICAganVzdGlmeUdyaWQgPSBpc1NtID8gJ2ZsZXgtZW5kJyA6ICdmbGV4LXN0YXJ0JztcclxuICB9IGVsc2UgaWYgKGFsaWduID09PSAncmlnaHQnKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9IGlzU20gPyAnZmxleC1zdGFydCcgOiAnZmxleC1lbmQnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIGNvbnRhaW5lclxyXG4gICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdkZXNjcmlwdGlvbi1jdGEnLCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1jdGFfX3dyYXBwZXJcIiB7Li4ud3JhcHBlclByb3BzfT5cclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgdmFyaWFudD1cImg1XCJcclxuICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tY3RhX190aXRsZVwiXHJcbiAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIHtzdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1jdGFfX3N1YnRpdGxlXCJcclxuICAgICAgICAgICAgey4uLnN1YnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzdWJ0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9e2p1c3RpZnlHcmlkfVxyXG4gICAgICAgICAgc3BhY2luZz17MX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWN0YV9fYnV0dG9uLWdyb3VwXCJcclxuICAgICAgICAgIHsuLi5idXR0b25Hcm91cFByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tY3RhX19wcmltYXJ5LWJ1dHRvbi13cmFwcGVyXCJcclxuICAgICAgICAgICAgey4uLnByaW1hcnlCdXR0b25XcmFwcGVyUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcmltYXJ5Q3RhfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAge3NlY29uZGFyeUN0YSAmJiAoXHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnZGVzY3JpcHRpb24tY3RhX19zZWNvbmRhcnktYnV0dG9uLXdyYXBwZXInKX1cclxuICAgICAgICAgICAgICB7Li4uc2Vjb25kYXJ5QnV0dG9uV3JhcHBlclByb3BzfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3NlY29uZGFyeUN0YX1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuRGVzY3JpcHRpb25DdGEuZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsaWduOiAnY2VudGVyJyxcclxuICB3cmFwcGVyUHJvcHM6IHt9LFxyXG4gIHRpdGxlUHJvcHM6IHt9LFxyXG4gIHN1YnRpdGxlUHJvcHM6IHt9LFxyXG4gIGJ1dHRvbkdyb3VwUHJvcHM6IHt9LFxyXG4gIHByaW1hcnlCdXR0b25XcmFwcGVyUHJvcHM6IHt9LFxyXG4gIHNlY29uZGFyeUJ1dHRvbldyYXBwZXJQcm9wczoge30sXHJcbn07XHJcblxyXG5EZXNjcmlwdGlvbkN0YS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaXRsZSBvZiB0aGUgbGlzdFxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU3VidGl0bGUgb2YgdGhlIGxpc3RcclxuICAgKi9cclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBQcmltYXJ5IENUQSBvZiB0aGUgbGlzdFxyXG4gICAqL1xyXG4gIHByaW1hcnlDdGE6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU2Vjb25kYXJ5IENUQSBvZiB0aGUgbGlzdFxyXG4gICAqL1xyXG4gIHNlY29uZGFyeUN0YTogUHJvcFR5cGVzLm5vZGUsXHJcbiAgLyoqXHJcbiAgICogQWxpZ25tZW50XHJcbiAgICovXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJ10pLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSB3cmFwcGVyIEdyaWQgaXRlbSBjb21wb25lbnRzXHJcbiAgICovXHJcbiAgd3JhcHBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSB0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudHNcclxuICAgKi9cclxuICB0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBzdWJ0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudHNcclxuICAgKi9cclxuICBzdWJ0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBidXR0b24gZ3JvdXAgZGl2IGNvbnRhaW5lclxyXG4gICAqL1xyXG4gIGJ1dHRvbkdyb3VwUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHByaW1hcnkgYnV0dG9uIHdyYXBwZXIgZGl2IGNvbnRhaW5lclxyXG4gICAqL1xyXG4gIHByaW1hcnlCdXR0b25XcmFwcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHNlY29uZGFyeSBidXR0b24gd3JhcHBlciBkaXYgY29udGFpbmVyXHJcbiAgICovXHJcbiAgc2Vjb25kYXJ5QnV0dG9uV3JhcHBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb25DdGE7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Rlc2NyaXB0aW9uQ3RhJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIGNvbG9ycyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGV4dHJhU21hbGw6IHtcclxuICAgIHdpZHRoOiAyMCxcclxuICAgIGhlaWdodDogMjAsXHJcbiAgfSxcclxuICBzbWFsbDoge1xyXG4gICAgd2lkdGg6IDUwLFxyXG4gICAgaGVpZ2h0OiA1MCxcclxuICB9LFxyXG4gIG1lZGl1bToge1xyXG4gICAgd2lkdGg6IDcwLFxyXG4gICAgaGVpZ2h0OiA3MCxcclxuICB9LFxyXG4gIGxhcmdlOiB7XHJcbiAgICB3aWR0aDogOTAsXHJcbiAgICBoZWlnaHQ6IDkwLFxyXG4gIH0sXHJcbiAgY2lyY2xlOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcclxuICB9LFxyXG4gIHNxdWFyZToge1xyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgYWx0ZXJuYXRlIGljb25cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBJY29uQWx0ZXJuYXRlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGljb25Qcm9wcyxcclxuICAgIGZvbnRJY29uQ2xhc3MsXHJcbiAgICBzaXplLFxyXG4gICAgY29sb3IsXHJcbiAgICBzaGFwZSxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB1c2VCYWNrZ3JvdW5kU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gICAgYmFja2dyb3VuZDoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcIiNlM2YyZmRcIixcclxuICAgIH0sXHJcbiAgfSkpO1xyXG4gIGNvbnN0IGJhY2tncm91bmRDbGFzc2VzID0gdXNlQmFja2dyb3VuZFN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF2YXRhclxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgXCJpY29uLWFsdGVybmF0ZVwiLFxyXG4gICAgICAgIGNsYXNzZXNbc2l6ZV0sXHJcbiAgICAgICAgY2xhc3Nlc1tzaGFwZV0sXHJcbiAgICAgICAgYmFja2dyb3VuZENsYXNzZXMuYmFja2dyb3VuZCxcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxJY29uXHJcbiAgICAgICAgc2l6ZT17c2l6ZX1cclxuICAgICAgICBmb250SWNvbkNsYXNzPXtmb250SWNvbkNsYXNzfVxyXG4gICAgICAgIGZvbnRJY29uQ29sb3I9e1wiIzUxMjBmZlwifVxyXG4gICAgICAgIGNsYXNzTmFtZT0naWNvbi1hbHRlcm5hdGVfX2ljb24nXHJcbiAgICAgICAgey4uLmljb25Qcm9wc31cclxuICAgICAgLz5cclxuICAgIDwvQXZhdGFyPlxyXG4gICk7XHJcbn07XHJcblxyXG5JY29uQWx0ZXJuYXRlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzaXplOiAnbWVkaXVtJyxcclxuICBzaGFwZTogJ3NxdWFyZScsXHJcbiAgaWNvblByb3BzOiB7fSxcclxufTtcclxuXHJcbkljb25BbHRlcm5hdGUucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNsYXNzZXMgb2YgdGhlIGZvbnQgaWNvblxyXG4gICAqL1xyXG4gIGZvbnRJY29uQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTaXplcyBvZiB0aGUgaWNvblxyXG4gICAqL1xyXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ2V4dHJhU21hbGwnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxyXG4gIC8qKlxyXG4gICAqIENvbG9yIG9mIHRoZSBpY29uXHJcbiAgICovXHJcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICBjb2xvcnMucmVkLFxyXG4gICAgY29sb3JzLnBpbmssXHJcbiAgICBjb2xvcnMucHVycGxlLFxyXG4gICAgY29sb3JzLmRlZXBQdXJwbGUsXHJcbiAgICBjb2xvcnMuaW5kaWdvLFxyXG4gICAgY29sb3JzLmJsdWUsXHJcbiAgICBjb2xvcnMubGlnaHRCbHVlLFxyXG4gICAgY29sb3JzLmN5YW4sXHJcbiAgICBjb2xvcnMudGVhbCxcclxuICAgIGNvbG9ycy5ncmVlbixcclxuICAgIGNvbG9ycy5saWdodEdyZWVuLFxyXG4gICAgY29sb3JzLmxpbWUsXHJcbiAgICBjb2xvcnMueWVsbG93LFxyXG4gICAgY29sb3JzLmFtYmVyLFxyXG4gICAgY29sb3JzLm9yYW5nZSxcclxuICAgIGNvbG9ycy5kZWVwT3JhbmdlLFxyXG4gICAgY29sb3JzLmJyb3duLFxyXG4gICAgY29sb3JzLmdyZXksXHJcbiAgICBjb2xvcnMuYmx1ZUdyZXksXHJcbiAgXSksXHJcbiAgLyoqXHJcbiAgICogVGhlIHNoYXBlIG9mIHRoZSBhbHRlcm5hdGUgaWNvblxyXG4gICAqL1xyXG4gIHNoYXBlOiBQcm9wVHlwZXMub25lT2YoWydjaXJjbGUnLCAnc3F1YXJlJ10pLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBJY29uIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGljb25Qcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25BbHRlcm5hdGU7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0ljb25BbHRlcm5hdGUnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgaW1hZ2VHcmlkOiB7XHJcbiAgICBwYWRkaW5nOiAnLjI1cmVtJyxcclxuICAgIHdpZHRoOiAnMTUwJScsXHJcbiAgICBib3hTaGFkb3c6ICcwIDEuNXJlbSA0cmVtIHJnYmEoMjIsMjgsNDUsLjEpJyxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICcmIGltZyc6IHtcclxuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxyXG4gICAgICBib3JkZXJTdHlsZTogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlR3JpZEZpcnN0SXRlbToge1xyXG4gICAgbWFyZ2luVG9wOiAnNHJlbScsXHJcbiAgfSxcclxuICBpbWFnZUdyaWRMYXN0SXRlbToge1xyXG4gICAgbWFyZ2luVG9wOiAnNnJlbScsXHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIG92ZXJsYXBlZCBpbWFnZXNcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBPdmVybGFwZWRJbWFnZXMgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBpbWFnZTEsIGltYWdlMiwgaW1hZ2UzLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBjb250YWluZXJcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdvdmVybGFwZWQtaW1hZ2VzJywgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IGNsYXNzTmFtZT1cIm92ZXJsYXBlZC1pbWFnZXNfX2l0ZW0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAnb3ZlcmxhcGVkLWltYWdlc19faXRlbS13cmFwcGVyJyxcclxuICAgICAgICAgICAgY2xhc3Nlcy5pbWFnZUdyaWQsXHJcbiAgICAgICAgICAgIGNsYXNzZXMuaW1hZ2VHcmlkRmlyc3RJdGVtLFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtpbWFnZTEuc3JjfVxyXG4gICAgICAgICAgICBzcmNTZXQ9e2ltYWdlMS5zcmNzZXR9XHJcbiAgICAgICAgICAgIGFsdD17aW1hZ2UxLmFsdH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmxhcGVkLWltYWdlc19faXRlbS1pbWFnZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IGNsYXNzTmFtZT1cIm92ZXJsYXBlZC1pbWFnZXNfX2l0ZW0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdvdmVybGFwZWQtaW1hZ2VzX19pdGVtLXdyYXBwZXInLCBjbGFzc2VzLmltYWdlR3JpZCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2UyLnNyY31cclxuICAgICAgICAgICAgc3JjU2V0PXtpbWFnZTIuc3Jjc2V0fVxyXG4gICAgICAgICAgICBhbHQ9e2ltYWdlMi5hbHR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJsYXBlZC1pbWFnZXNfX2l0ZW0taW1hZ2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXs0fSBjbGFzc05hbWU9XCJvdmVybGFwZWQtaW1hZ2VzX19pdGVtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgJ292ZXJsYXBlZC1pbWFnZXNfX2l0ZW0td3JhcHBlcicsXHJcbiAgICAgICAgICAgIGNsYXNzZXMuaW1hZ2VHcmlkLFxyXG4gICAgICAgICAgICBjbGFzc2VzLmltYWdlR3JpZExhc3RJdGVtLFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtpbWFnZTMuc3JjfVxyXG4gICAgICAgICAgICBzcmNTZXQ9e2ltYWdlMy5zcmNzZXR9XHJcbiAgICAgICAgICAgIGFsdD17aW1hZ2UzLmFsdH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmxhcGVkLWltYWdlc19faXRlbS1pbWFnZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbk92ZXJsYXBlZEltYWdlcy5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBJbWFnZSBpdGVtIC0gT2JqZWN0IG9mIHNyYywgc3Jjc2V0IGFuZCBhbHQgcHJvcGVydGllc1xyXG4gICAqL1xyXG4gIGltYWdlMTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEltYWdlIGl0ZW0gLSBPYmplY3Qgb2Ygc3JjLCBzcmNzZXQgYW5kIGFsdCBwcm9wZXJ0aWVzXHJcbiAgICovXHJcbiAgaW1hZ2UyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSW1hZ2UgaXRlbSAtIE9iamVjdCBvZiBzcmMsIHNyY3NldCBhbmQgYWx0IHByb3BlcnRpZXNcclxuICAgKi9cclxuICBpbWFnZTM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJsYXBlZEltYWdlcztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vT3ZlcmxhcGVkSW1hZ2VzJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRpc2FibGVHdXR0ZXI6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSxcclxuICBjdGE6IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAnJjpmaXJzdC1jaGlsZCc6IHtcclxuICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygwKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBzZWN0aW9uIGhlYWRlcnNcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlLFxyXG4gICAgdGl0bGVWYXJpYW50LFxyXG4gICAgc3VidGl0bGVWYXJpYW50LFxyXG4gICAgc3VidGl0bGUsXHJcbiAgICBzdWJ0aXRsZUNvbG9yLFxyXG4gICAgbGFiZWwsXHJcbiAgICBvdmVybGluZSxcclxuICAgIGZhZGVVcCxcclxuICAgIGFsaWduLFxyXG4gICAgY3RhR3JvdXAsXHJcbiAgICBkaXNhYmxlR3V0dGVyLFxyXG4gICAgdGl0bGVDbGFzc2VzLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgbGFiZWxQcm9wcyxcclxuICAgIHRpdGxlUHJvcHMsXHJcbiAgICBzdWJ0aXRsZVByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGxldCBqdXN0aWZ5R3JpZCA9ICdjZW50ZXInO1xyXG4gIGlmIChhbGlnbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9ICdmbGV4LXN0YXJ0JztcclxuICB9IGVsc2UgaWYgKGFsaWduID09PSAncmlnaHQnKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9ICdmbGV4LWVuZCc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRcclxuICAgICAgY29udGFpbmVyXHJcbiAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgIGRhdGEtYW9zPXtmYWRlVXAgPyBcImZhZGUtdXBcIiA6IFwiXCJ9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICBcInNlY3Rpb24taGVhZGVyXCIsXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIGRpc2FibGVHdXR0ZXIgPyBjbGFzc2VzLmRpc2FibGVHdXR0ZXIgOiB7fSxcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIHtvdmVybGluZSAmJiAoXHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9e2p1c3RpZnlHcmlkfVxyXG4gICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uLWhlYWRlcl9fb3ZlcmxpbmUtd3JhcHBlcidcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7b3ZlcmxpbmV9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApfVxyXG4gICAgICB7bGFiZWwgJiYgKFxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9J3NlY3Rpb24taGVhZGVyX19sYWJlbC13cmFwcGVyJz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J292ZXJsaW5lJ1xyXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgY29tcG9uZW50PSdwJ1xyXG4gICAgICAgICAgICBhbGlnbj17YWxpZ24gfHwgXCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgey4uLmxhYmVsUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICl9XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9J3NlY3Rpb24taGVhZGVyX190aXRsZS13cmFwcGVyJz5cclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgdmFyaWFudD17dGl0bGVWYXJpYW50fVxyXG4gICAgICAgICAgYWxpZ249e2FsaWduIHx8IFwiY2VudGVyXCJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgIFwic2VjdGlvbi1oZWFkZXJfX3RpdGxlXCIsXHJcbiAgICAgICAgICAgIGNsYXNzZXMudGl0bGUsXHJcbiAgICAgICAgICAgIHRpdGxlQ2xhc3NlcyA/IHRpdGxlQ2xhc3NlcyA6IHt9XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgY29sb3I9J3RleHRQcmltYXJ5J1xyXG4gICAgICAgICAgey4uLnRpdGxlUHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICB7c3VidGl0bGUgJiYgKFxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9J3NlY3Rpb24taGVhZGVyX19zdWJ0aXRsZS13cmFwcGVyJz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9e3N1YnRpdGxlVmFyaWFudCB8fCBcImg2XCJ9XHJcbiAgICAgICAgICAgIGFsaWduPXthbGlnbiB8fCBcImNlbnRlclwifVxyXG4gICAgICAgICAgICBjb2xvcj17c3VidGl0bGVDb2xvciB8fCBcInRleHRQcmltYXJ5XCJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VjdGlvbi1oZWFkZXJfX3N1YnRpdGxlJ1xyXG4gICAgICAgICAgICB7Li4uc3VidGl0bGVQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKX1cclxuICAgICAge2N0YUdyb3VwICYmIGN0YUdyb3VwLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT0nc2VjdGlvbi1oZWFkZXJfX2N0YS13cmFwcGVyJz5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17anVzdGlmeUdyaWR9XHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgICAgd3JhcD0nbm93cmFwJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3NlY3Rpb24taGVhZGVyX19jdGEtY29udGFpbmVyJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y3RhR3JvdXAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICAgIFwic2VjdGlvbi1oZWFkZXJfX2N0YS1pdGVtLXdyYXBwZXJcIixcclxuICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5jdGFcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKX1cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuU2VjdGlvbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGl0bGVWYXJpYW50OiAnaDQnLFxyXG4gIGxhYmVsUHJvcHM6IHt9LFxyXG4gIHRpdGxlUHJvcHM6IHt9LFxyXG4gIHN1YnRpdGxlUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuU2VjdGlvbkhlYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaXRsZSBvZiB0aGUgc2VjdGlvbiBoZWFkZXJcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFN1YnRpdGxlIG9mIHRoZSBzZWN0aW9uIGhlYWRlclxyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxyXG4gIC8qKlxyXG4gICAqIExhYmVsIHRpdGxlIG9mIHRoZSBzZWN0aW9uIGhlYWRlclxyXG4gICAqL1xyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBvdmVybGluZSBjb21wb25lbnQgaW4gdGhlIHNlY3Rpb24gaGVhZGVyXHJcbiAgICovXHJcbiAgb3ZlcmxpbmU6IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIEFycmF5IG9mIHRoZSBDVEFzXHJcbiAgICovXHJcbiAgY3RhR3JvdXA6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGZhZGUgdXAgb24gc2Nyb2xsXHJcbiAgICovXHJcbiAgZmFkZVVwOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBIZWFkZXIgY29udGVudCAodGl0bGUsIHN1YnRpdGxlLCBDVEFzKSBhbGlnbm1lbnRcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsncmlnaHQnLCAnbGVmdCcsICdjZW50ZXInXSksXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBkaXNhYmxlIGJvdHRvbSBtYXJnaW4gb2YgdGhlIHNlY3Rpb25cclxuICAgKi9cclxuICBkaXNhYmxlR3V0dGVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBTdHlsZXMgY2xhc3NlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgdGl0bGUgZnJvbSB0aGUgcGFyZW50IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRpdGxlQ2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaXRsZSB2YXJpYW50XHJcbiAgICovXHJcbiAgdGl0bGVWYXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddKVxyXG4gICAgLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU3ViVGl0bGUgdmFyaWFudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlVmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgICdoMScsXHJcbiAgICAnaDInLFxyXG4gICAgJ2gzJyxcclxuICAgICdoNCcsXHJcbiAgICAnaDUnLFxyXG4gICAgJ2g2JyxcclxuICAgICdzdWJ0aXRsZTEnLFxyXG4gICAgJ3N1YnRpdGxlMicsXHJcbiAgICAnYm9keTEnLFxyXG4gICAgJ2JvZHkyJyxcclxuICBdKSxcclxuICAvKipcclxuICAgKiBTdWJUaXRsZSBjb2xvclxyXG4gICAqL1xyXG4gIHN1YnRpdGxlQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICAndGV4dFByaW1hcnknLFxyXG4gICAgJ3RleHRTZWNvbmRhcnknLFxyXG4gICAgJ3ByaW1hcnknLFxyXG4gICAgJ3NlY29uZGFyeScsXHJcbiAgXSksXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIGxhYmVsIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgbGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBzdWJ0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uSGVhZGVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TZWN0aW9uSGVhZGVyJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcblxyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHpJbmRleDogJ2F1dG8nLFxyXG4gIH0sXHJcbiAgc3dpcGVyU2xpZGU6IHtcclxuICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgfSxcclxuICBzd2lwZXJOYXY6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHdpZHRoOiA4OCxcclxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgekluZGV4OiA0LFxyXG4gICAgJyYgLnN3aXBlci1idXR0b24tcHJldiwgJiAuc3dpcGVyLWJ1dHRvbi1uZXh0Jzoge1xyXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICBib3hTaGFkb3c6IGAwIDJweCAxMHB4IDAgJHt0aGVtZS5wYWxldHRlLmNhcmRTaGFkb3d9YCxcclxuICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyfWAsXHJcbiAgICAgICcmOmFmdGVyJzoge1xyXG4gICAgICAgIGZvbnRTaXplOiAnaW5pdGlhbCcsXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiAuc3dpcGVyLWJ1dHRvbi1wcmV2Jzoge1xyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgfSxcclxuICAgICcmIC5zd2lwZXItYnV0dG9uLW5leHQnOiB7XHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBpbWFnZSBzd2lwZXJcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBTd2lwZXJJbWFnZSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpdGVtcyxcclxuICAgIG5hdmlnYXRpb25CdXR0b25TdHlsZSxcclxuICAgIGltYWdlQ2xhc3NOYW1lLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAnc3dpcGVyLWNvbnRhaW5lcicsXHJcbiAgICAgICAgJ3N3aXBlci1pbWFnZScsXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLWltYWdlX193cmFwcGVyLCBzd2lwZXItd3JhcHBlclwiPlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAnc3dpcGVyLWltYWdlX19zbGlkZScsXHJcbiAgICAgICAgICAgICAgJ3N3aXBlci1zbGlkZScsXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcy5zd2lwZXJTbGlkZSxcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtpdGVtLnNyY31cclxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fVxyXG4gICAgICAgICAgICAgIHNyY1NldD17aXRlbS5zcmNTZXR9XHJcbiAgICAgICAgICAgICAgbGF6eVByb3BzPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgJ3N3aXBlci1pbWFnZV9faXRlbScsXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VDbGFzc05hbWUgPyBpbWFnZUNsYXNzTmFtZSA6IHt9LFxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdzd2lwZXItaW1hZ2VfX25hdmlnYXRpb24nLCBjbGFzc2VzLnN3aXBlck5hdil9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgJ3N3aXBlci1pbWFnZV9fbmF2aWdhdGlvbi1idXR0b24nLFxyXG4gICAgICAgICAgICAnc3dpcGVyLWltYWdlX19uYXZpZ2F0aW9uLWJ1dHRvbi0tcHJldicsXHJcbiAgICAgICAgICAgICdzd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQnV0dG9uU3R5bGUgfHwge30sXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAnc3dpcGVyLWltYWdlX19uYXZpZ2F0aW9uLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICdzd2lwZXItaW1hZ2VfX25hdmlnYXRpb24tYnV0dG9uLS1uZXh0JyxcclxuICAgICAgICAgICAgJ3N3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CdXR0b25TdHlsZSB8fCB7fSxcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuU3dpcGVySW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3NlcyBmb3IgdGhlIGltYWdlc1xyXG4gICAqL1xyXG4gIGltYWdlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBhcnJheSBvZiBpbWFnZXMgb2JqZWN0IHdoaWNoIHNob3VsZCBjb25zaXN0IG9mIHNyYywgYWx0IGFuZCBzcmNzZXQgYXR0cmlidXRlc1xyXG4gICAqL1xyXG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFN0eWxlcyBjbGFzc2VzIG9mIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvblxyXG4gICAqL1xyXG4gIG5hdmlnYXRpb25CdXR0b25TdHlsZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3aXBlckltYWdlO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Td2lwZXJJbWFnZSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnksIEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBzd2lwZXJTbGlkZToge1xyXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg2KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBudW1iZXI6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIG51bWJlciBzd2lwZXJcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBTd2lwZXJOdW1iZXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaXRlbXMsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBudW1iZXJQcm9wcyxcclxuICAgIGxhYmVsUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc01kID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKSwge1xyXG4gICAgZGVmYXVsdE1hdGNoZXM6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogaXNNZCA/IDQgOiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgZGVsYXk6IDUwMDAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICdzd2lwZXItbnVtYmVyJyxcclxuICAgICAgICAnc3dpcGVyLWNvbnRhaW5lcicsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItbnVtYmVyX193cmFwcGVyIHN3aXBlci13cmFwcGVyXCI+XHJcbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICdzd2lwZXItbnVtYmVyX19pdGVtJyxcclxuICAgICAgICAgICAgICBjbGFzc2VzLnN3aXBlclNsaWRlLFxyXG4gICAgICAgICAgICAgICdzd2lwZXItc2xpZGUnLFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJ2F1dG8nIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgc3BhY2luZz17MX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2lwZXItbnVtYmVyX19pdGVtLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwic3dpcGVyLW51bWJlcl9fbnVtYmVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdzd2lwZXItbnVtYmVyX19udW1iZXInLCBjbGFzc2VzLm51bWJlcil9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi5udW1iZXJQcm9wc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ubnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwic3dpcGVyLW51bWJlcl9fbGFiZWwtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dpcGVyLW51bWJlcl9fbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4ubGFiZWxQcm9wc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLW51bWJlcl9fcGFnaW5hdGlvbiBzd2lwZXItcGFnaW5hdGlvblwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuU3dpcGVyTnVtYmVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBudW1iZXJQcm9wczoge30sXHJcbiAgbGFiZWxQcm9wczoge30sXHJcbn07XHJcblxyXG5Td2lwZXJOdW1iZXIucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGFycmF5IG9mIG51bWJlcnMgb2JqZWN0IHdoaWNoIHNob3VsZCBjb25zaXN0IG9mIG51bWJlciBhbmQgdGl0bGVcclxuICAgKi9cclxuICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIG51bWJlciBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIG51bWJlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIFRoZSBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgbGFiZWwgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBsYWJlbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3dpcGVyTnVtYmVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Td2lwZXJOdW1iZXInO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFR5cGVkIGZyb20gJ3JlYWN0LXR5cGVkJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgdHlwZWQgYW5pbWF0ZWQgdGV4dHNcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBUeXBlZFRleHQgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIHR5cGVkUHJvcHMsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHlcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCd0eXBlZC10ZXh0JywgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxUeXBlZCBjbGFzc05hbWU9XCJ0eXBlZC10ZXh0X19pdGVtXCIgey4uLnR5cGVkUHJvcHN9IC8+XHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgKTtcclxufTtcclxuXHJcblR5cGVkVGV4dC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiByZWFjdC10eXBlZCBwcm9wZXJ0aWVzLiBGb3IgbW9yZSBpbmZvIHZpc2l0IGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LXR5cGVkXHJcbiAgICovXHJcbiAgdHlwZWRQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHlwZWRUZXh0O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UeXBlZFRleHQnO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFNlY3Rpb25IZWFkZXIgfSBmcm9tICcuL1NlY3Rpb25IZWFkZXInO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEljb25BbHRlcm5hdGUgfSBmcm9tICcuL0ljb25BbHRlcm5hdGUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN3aXBlckltYWdlIH0gZnJvbSAnLi9Td2lwZXJJbWFnZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVzY3JpcHRpb25DdGEgfSBmcm9tICcuL0Rlc2NyaXB0aW9uQ3RhJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb3VudFVwTnVtYmVyIH0gZnJvbSAnLi9Db3VudFVwTnVtYmVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBPdmVybGFwZWRJbWFnZXMgfSBmcm9tICcuL092ZXJsYXBlZEltYWdlcyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3dpcGVyTnVtYmVyIH0gZnJvbSAnLi9Td2lwZXJOdW1iZXInO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFR5cGVkVGV4dCB9IGZyb20gJy4vVHlwZWRUZXh0JztcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tbXVsdGktY29tcCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kaXNwbGF5LW5hbWUgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge1xyXG4gIFR5cG9ncmFwaHksXHJcbiAgR3JpZCxcclxuICBBY2NvcmRpb24gYXMgTXVpQWNjb3JkaW9uLFxyXG4gIEFjY29yZGlvblN1bW1hcnkgYXMgTXVpQWNjb3JkaW9uU3VtbWFyeSxcclxuICBBY2NvcmRpb25EZXRhaWxzIGFzIE11aUFjY29yZGlvbkRldGFpbHMsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xyXG5cclxuaW1wb3J0IHsgTGVhcm5Nb3JlTGluayB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gIH0sXHJcbiAgZXhwYW5kT3Blbjoge1xyXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSBhY2NvcmRpb24gdmlld1xyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBBY2NvcmRpb24gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaXRlbXMsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIHRleHRQcm9wcyxcclxuICAgIGxpbmtQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgey4uLnJlc3R9IGNsYXNzTmFtZT17Y2xzeCgnYWNjb3JkaW9uJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfT5cclxuICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcclxuICAgICAgICA8TXVpQWNjb3JkaW9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2FjY29yZGlvbl9faXRlbS13cmFwcGVyJywgY2xhc3Nlcy5saXN0SXRlbSl9XHJcbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE11aUFjY29yZGlvblN1bW1hcnlcclxuICAgICAgICAgICAgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fVxyXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtgJHtpdGVtLmlkfS1jb250ZW50YH1cclxuICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgc3BhY2luZz17MH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2Nvcmlvbl9faXRlbS10ZXh0LWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiYWNjb3Jpb25fX2l0ZW0tdGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3Jpb25faXRlbS10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgIHsuLi50aXRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAge2l0ZW0uc3VidGl0bGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImFjY29yaW9uX2l0ZW0tc3VidGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2Nvcmlvbl9pdGVtLXN1YnRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICB7Li4uc3VidGl0bGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnN1YnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9NdWlBY2NvcmRpb25TdW1tYXJ5PlxyXG4gICAgICAgICAgPE11aUFjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb25fX2NvbGxhcHNhYmxlLXRleHQtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb25fX2NvbGxhcHNhYmxlLXRleHQtd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9fY29sbGFwc2FibGUtdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHsuLi50ZXh0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIHtpdGVtLmxpbmsgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9fY29sbGFwc2FibGUtbGluay13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExlYXJuTW9yZUxpbmtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX19jb2xsYXBzYWJsZS1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICB7Li4ubGlua1Byb3BzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvTXVpQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICA8L011aUFjY29yZGlvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQWNjb3JkaW9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxuICB0ZXh0UHJvcHM6IHt9LFxyXG4gIGxpbmtQcm9wczoge30sXHJcbn07XHJcblxyXG5BY2NvcmRpb24ucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIENsYXNzbmFtZSBmcm9tIHRoZSBwYXJlbnQgY29tcG9uZW50XHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEl0ZW1zIHRvIHNob3cgaW5zaWRlIHRoZSBhY2NvcmRpb25cclxuICAgKi9cclxuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSB0ZXh0IFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGV4dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBsaW5rIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGxpbmtQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQWNjb3JkaW9uJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICB3aXRoU2hhZG93OiB7XHJcbiAgICBib3hTaGFkb3c6IGAwIDJweCAxMHB4IDAgJHt0aGVtZS5wYWxldHRlLmNhcmRTaGFkb3d9YCxcclxuICB9LFxyXG4gIG5vU2hhZG93OiB7XHJcbiAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICB9LFxyXG4gIG5vQm9yZGVyOiB7XHJcbiAgICBib3JkZXI6IDAsXHJcbiAgfSxcclxuICBub0JnOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gIH0sXHJcbiAgbGlmdFVwOiB7XHJcbiAgICB0cmFuc2l0aW9uOlxyXG4gICAgICAnYm94LXNoYWRvdyAuMjVzIGVhc2UsdHJhbnNmb3JtIC4yNXMgZWFzZSwtd2Via2l0LXRyYW5zZm9ybSAuMjVzIGVhc2UnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICAnMCAxLjVyZW0gMi41cmVtIHJnYmEoMjIsMjgsNDUsLjEpLDAgLjNyZW0gMC41cmVtIC0uNTByZW0gcmdiYSgyMiwyOCw0NSwuMDUpICFpbXBvcnRhbnQnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLC01cHgsMCknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgMiksXHJcbiAgICAnJjpsYXN0LWNoaWxkJzoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDIpLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAzKSxcclxuICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDMpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxlZnQ6IHtcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICB9LFxyXG4gIHJpZ2h0OiB7XHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxyXG4gIH0sXHJcbiAgY2VudGVyOiB7XHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGJhc2ljIGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkQmFzZSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB3aXRoU2hhZG93LFxyXG4gICAgbm9TaGFkb3csXHJcbiAgICBub0JvcmRlcixcclxuICAgIG5vQmcsXHJcbiAgICBsaWZ0VXAsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIGFsaWduLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgY2FyZENvbnRlbnRQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAnY2FyZC1iYXNlJyxcclxuICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbiAgICAgICAgd2l0aFNoYWRvdyA/IGNsYXNzZXMud2l0aFNoYWRvdyA6IHt9LFxyXG4gICAgICAgIG5vU2hhZG93ID8gY2xhc3Nlcy5ub1NoYWRvdyA6IHt9LFxyXG4gICAgICAgIG5vQm9yZGVyID8gY2xhc3Nlcy5ub0JvcmRlciA6IHt9LFxyXG4gICAgICAgIG5vQmcgPyBjbGFzc2VzLm5vQmcgOiB7fSxcclxuICAgICAgICBsaWZ0VXAgPyBjbGFzc2VzLmxpZnRVcCA6IHt9LFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxDYXJkQ29udGVudFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY2FyZC1iYXNlX19jb250ZW50JywgY2xhc3Nlcy5jb250ZW50LCBjbGFzc2VzW2FsaWduXSl9XHJcbiAgICAgICAgey4uLmNhcmRDb250ZW50UHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRCYXNlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgY2FyZENvbnRlbnRQcm9wczoge30sXHJcbn07XHJcblxyXG5DYXJkQmFzZS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgY2hpbGRyZW4gY29udGVudCBvZiB0aGUgYmFzaWMgY2FyZFxyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gc2hvdyBjdXN0b20gc2hhZG93XHJcbiAgICovXHJcbiAgd2l0aFNoYWRvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byByZW5kZXIgdGhlIGNhcmQgd2l0aG91dCBzaGFkb3dcclxuICAgKi9cclxuICBub1NoYWRvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBoaWRlIHRoZSBjYXJkIGJvcmRlcnNcclxuICAgKi9cclxuICBub0JvcmRlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBzaG93IHRyYW5zcGFyZW50IGJhY2tncm91bmRcclxuICAgKi9cclxuICBub0JnOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGxpZnQgdXAgb24gaG92ZXJcclxuICAgKi9cclxuICBsaWZ0VXA6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250ZW50IGFsaWdubWVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIENhcmRDb250ZW50IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGNhcmRDb250ZW50UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkQmFzZTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZEJhc2UnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IENhcmRCYXNlLCBEZXNjcmlwdGlvbkxpc3RJY29uIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGNhdGVnb3J5IGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkQ2F0ZWdvcnkgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBpY29uLCB0aXRsZSwgYWxpZ24sIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZSBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxEZXNjcmlwdGlvbkxpc3RJY29uIGljb249e2ljb259IHRpdGxlPXt0aXRsZX0gYWxpZ249e2FsaWdufSAvPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZENhdGVnb3J5LmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2NlbnRlcicsXHJcbn07XHJcblxyXG5DYXJkQ2F0ZWdvcnkucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogSWNvbiB0byBzaG93IGluc2lkZSB0aGUgY2F0ZWdvcnkgY2FyZFxyXG4gICAqL1xyXG4gIGljb246IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQ2F0ZWdvcnkgdGl0bGUgdG8gc2hvdyBpbnNpZGUgdGhlIGNhdGVnb3J5IGNhcmRcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250ZW50IGFsaWdubWVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRDYXRlZ29yeTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZENhdGVnb3J5JztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCBjb2xvcnMsIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBBcnJvd1JpZ2h0QWx0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dSaWdodEFsdCc7XHJcbmltcG9ydCB7IEljb25BbHRlcm5hdGUgfSBmcm9tICdjb21wb25lbnRzL21vbGVjdWxlcyc7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGZvbnRXZWlnaHQ3MDA6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICB9LFxyXG4gIGhlYWRpbmc6e1xyXG4gICAgZm9udFNpemU6XCIyNHB4XCJcclxuICB9LFxyXG4gIGNhdGVnb3J5SWNvbkJ1dHRvbjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gIH0sXHJcbiAgc3ViaGVhZGluZzp7fVxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGNhdGVnb3J5IGxpbmsgY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRDYXRlZ29yeUxpbmsgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgZm9udEljb25DbGFzcyxcclxuICAgIGNvbG9yLFxyXG4gICAgdGl0bGUsXHJcbiAgICBzdWJ0aXRsZSxcclxuICAgIGhyZWYsXHJcbiAgICBhbGlnbixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIGljb25BbHRlcm5hdGVQcm9wcyxcclxuICAgIHRpdGxlUHJvcHMsXHJcbiAgICBzdWJ0aXRsZVByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBsZXQganVzdGlmeUdyaWQgPSAnZmxleC1zdGFydCc7XHJcbiAgaWYgKGFsaWduID09PSAnY2VudGVyJykge1xyXG4gICAganVzdGlmeUdyaWQgPSAnY2VudGVyJztcclxuICB9IGVsc2UgaWYgKGFsaWduID09PSAncmlnaHQnKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9ICdmbGV4LWVuZCc7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEJhc2VcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFwiY2FyZC1jYXRlZ29yeS1saW5rXCIsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT0nY2FyZC1jYXRlZ29yeS1saW5rX193cmFwcGVyJz5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnlDb250ZW50PXtqdXN0aWZ5R3JpZH0geHM9ezEyfT5cclxuICAgICAgICAgICAgPEljb25BbHRlcm5hdGVcclxuICAgICAgICAgICAgICBmb250SWNvbkNsYXNzPXtmb250SWNvbkNsYXNzfVxyXG4gICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cclxuICAgICAgICAgICAgICBzaXplPSdtZWRpdW0nXHJcbiAgICAgICAgICAgICAgey4uLmljb25BbHRlcm5hdGVQcm9wc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICB2YXJpYW50PSdoNidcclxuICAgICAgICAgICAgICBjb2xvcj0ndGV4dFByaW1hcnknXHJcbiAgICAgICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmZvbnRXZWlnaHQ3MDApfVxyXG4gICAgICAgICAgICAgIHsuLi50aXRsZVByb3BzfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICB7c3VidGl0bGUgJiYgKFxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2JvZHkxJ1xyXG4gICAgICAgICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YmhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj0ndGV4dFByaW1hcnknXHJcbiAgICAgICAgICAgICAgICB7Li4uc3VidGl0bGVQcm9wc31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgXCJjYXJkLWNhdGVnb3J5LWxpbmtfX2l0ZW1cIixcclxuICAgICAgICAgICAgY2xhc3Nlcy5jYXRlZ29yeUljb25CdXR0b25cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPSdjYXJkLWNhdGVnb3J5LWxpbmtfX2ljb24tYnV0dG9uJz5cclxuICAgICAgICAgICAgPEFycm93UmlnaHRBbHRJY29uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXJkLWNhdGVnb3J5LWxpbmtfX2ljb24nXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzUxMjBmZlwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8Lz5cclxuICAgIDwvQ2FyZEJhc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRDYXRlZ29yeUxpbmsuZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsaWduOiAnbGVmdCcsXHJcbiAgaHJlZjogJyMnLFxyXG4gIGljb25BbHRlcm5hdGVQcm9wczoge30sXHJcbiAgdGl0bGVQcm9wczoge30sXHJcbiAgc3VidGl0bGVQcm9wczoge30sXHJcbn07XHJcblxyXG5DYXJkQ2F0ZWdvcnlMaW5rLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIHRpdGxlIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBQcm9tbyBzdWJ0aXRsZSB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIGRlc2NyaXB0aW9uIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgaHJlZjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIGZvbnQgaWNvbiBjbGFzcyBuYW1lIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgZm9udEljb25DbGFzczogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBQcm9tbyBpY29uIGNvbG9yIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICBjb2xvcnMucmVkLFxyXG4gICAgY29sb3JzLnBpbmssXHJcbiAgICBjb2xvcnMucHVycGxlLFxyXG4gICAgY29sb3JzLmRlZXBQdXJwbGUsXHJcbiAgICBjb2xvcnMuaW5kaWdvLFxyXG4gICAgY29sb3JzLmJsdWUsXHJcbiAgICBjb2xvcnMubGlnaHRCbHVlLFxyXG4gICAgY29sb3JzLmN5YW4sXHJcbiAgICBjb2xvcnMudGVhbCxcclxuICAgIGNvbG9ycy5ncmVlbixcclxuICAgIGNvbG9ycy5saWdodEdyZWVuLFxyXG4gICAgY29sb3JzLmxpbWUsXHJcbiAgICBjb2xvcnMueWVsbG93LFxyXG4gICAgY29sb3JzLmFtYmVyLFxyXG4gICAgY29sb3JzLm9yYW5nZSxcclxuICAgIGNvbG9ycy5kZWVwT3JhbmdlLFxyXG4gICAgY29sb3JzLmJyb3duLFxyXG4gICAgY29sb3JzLmdyZXksXHJcbiAgICBjb2xvcnMuYmx1ZUdyZXksXHJcbiAgXSkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudCBhbGlnbm1lbnRcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBJY29uQWx0ZXJuYXRlIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGljb25BbHRlcm5hdGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHN1YnRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRDYXRlZ29yeUxpbms7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRDYXRlZ29yeUxpbmsnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtQXZhdGFyLFxyXG4gIEF2YXRhcixcclxuICBMaXN0SXRlbVRleHQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBkb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBkb3RCaWc6IHtcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgZG90U21hbGw6IHtcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygxIC8gMiksXHJcbiAgfSxcclxuICBqb2JUaXRsZToge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gIH0sXHJcbiAgZG90TWFyZ2luOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBqb2IgY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRKb2IgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgYmFkZ2VDb2xvcixcclxuICAgIGJhZGdlVGl0bGUsXHJcbiAgICBqb2JUaXRsZSxcclxuICAgIGpvYkxvY2F0aW9uLFxyXG4gICAgam9iVHlwZSxcclxuICAgIGpvYkRhdGUsXHJcbiAgICBjb21wYW55TG9nbyxcclxuICAgIGNvbXBhbnlOYW1lLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRCYXNlXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY2FyZC1qb2InLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHhzPXsxMn0+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5kb3QsIGNsYXNzZXMuZG90QmlnKX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogYmFkZ2VDb2xvciB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInNwYW5cIiB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIHtiYWRnZVRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMuam9iVGl0bGV9PlxyXG4gICAgICAgICAgICB7am9iVGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgeHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2pvYkxvY2F0aW9ufVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZG90LCBjbGFzc2VzLmRvdFNtYWxsLCBjbGFzc2VzLmRvdE1hcmdpbil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7am9iVHlwZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPExpc3RJdGVtIGRpc2FibGVHdXR0ZXJzPlxyXG4gICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgIDxBdmF0YXIgc3JjPXtjb21wYW55TG9nb30gYWx0PXtjb21wYW55TmFtZX0gLz5cclxuICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17Y29tcGFueU5hbWV9IHNlY29uZGFyeT17am9iRGF0ZX0gLz5cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgIDwvQ2FyZEJhc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRKb2IucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQmFkZ2UgY29sb3Igb2YgdGhlIGpvYiBjYXJkXHJcbiAgICovXHJcbiAgYmFkZ2VDb2xvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEJhZGdlIHRpdGxlIG9mIHRoZSBqb2IgY2FyZFxyXG4gICAqL1xyXG4gIGJhZGdlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgdGl0bGUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiBsb2NhdGlvbiBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYkxvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIHR5cGUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIGxvY2F0aW9uIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIENvbXBhbnkgbG9nbyBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGNvbXBhbnlMb2dvOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQ29tcGFueSBuYW1lIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgY29tcGFueU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRKb2I7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRKb2InO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHksIEF2YXRhciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgQ2FyZEJhc2UgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcbmltcG9ydCB7IExlYXJuTW9yZUxpbmsgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBjb21wYW55QXZhdGFyOiB7XHJcbiAgICB3aWR0aDogNjAsXHJcbiAgICBoZWlnaHQ6IDYwLFxyXG4gIH0sXHJcbiAgZG90OiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgZG90U21hbGw6IHtcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygxIC8gMiksXHJcbiAgfSxcclxuICBjb21wYW55TmFtZToge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gIH0sXHJcbiAgZG90TWFyZ2luOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBqb2IgY2FyZCBjb21wYW55XHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZEpvYkNvbXBhbnkgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgam9iVGl0bGUsXHJcbiAgICBqb2JMb2NhdGlvbixcclxuICAgIGNvbXBhbnlMb2dvLFxyXG4gICAgY29tcGFueU5hbWUsXHJcbiAgICBqb2JzQ291bnQsXHJcbiAgICBjb21wYW55SW5mbyxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2NhcmQtY29tcGFueScsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgYWxpZ249XCJsZWZ0XCJcclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgIHNyYz17Y29tcGFueUxvZ299XHJcbiAgICAgICAgICAgIGFsdD17Y29tcGFueU5hbWV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wYW55QXZhdGFyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBhbnlOYW1lfT5cclxuICAgICAgICAgICAge2NvbXBhbnlOYW1lfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgeHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgzXCIgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cclxuICAgICAgICAgICAge2pvYlRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZG90LCBjbGFzc2VzLmRvdFNtYWxsLCBjbGFzc2VzLmRvdE1hcmdpbil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDNcIiB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxyXG4gICAgICAgICAgICB7am9iTG9jYXRpb259XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxMZWFybk1vcmVMaW5rIHRpdGxlPXtqb2JzQ291bnR9IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJzcGFuXCIgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIHtjb21wYW55SW5mb31cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ2FyZEJhc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRKb2JDb21wYW55LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEpvYiB0aXRsZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYlRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIGxvY2F0aW9uIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iTG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDb21wYW55IGxvZ28gb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBjb21wYW55TG9nbzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIENvbXBhbnkgbmFtZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGNvbXBhbnlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQ291bnQgb2YgdGhlIGpvYnMgaW4gdGhlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9ic0NvdW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQ29tcGFueSBpbmZvIGluIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgY29tcGFueUluZm86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRKb2JDb21wYW55O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkSm9iQ29tcGFueSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY29sb3JzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgYm9yZGVyOiBgc29saWQgMXB4IHJnYmEoNDMsIDQxLCA0NSwgMC4yKWAsXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgfSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgICcwIDExcHggNTVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNyksIDAgMTNweCAxOHB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjE1KScsXHJcbiAgICAgICcmIC5jYXJkLWpvYi1taW5pbWFsX190aXRsZSwgJiAuY2FyZC1qb2ItbWluaW1hbF9fbG9jYXRpb24sICYgLmNhcmQtam9iLW1pbmltYWxfX2Fycm93Jzoge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZEpvYk1pbmltYWxCb2R5OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGpvYiBjYXJkIGNvbXBhbnlcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkSm9iTWluaW1hbCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSxcclxuICAgIHN1YnRpdGxlLFxyXG4gICAgc2hvd0Fycm93LFxyXG4gICAgdGl0bGVQcm9wcyxcclxuICAgIHN1YnRpdGxlUHJvcHMsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsICdjYXJkLWpvYi1taW5pbWFsJyl9IHsuLi5yZXN0fT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmNhcmRKb2JNaW5pbWFsQm9keSwgJ2NhcmQtam9iLW1pbmltYWxfX2JvZHknKX1cclxuICAgICAgICBzdHlsZT17IXNob3dBcnJvdyA/IHsgbWFyZ2luUmlnaHQ6IDAgfSA6IHt9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWpvYi1taW5pbWFsX190aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50aXRsZSwgJ2NhcmQtam9iLW1pbmltYWxfX3RpdGxlJyl9XHJcbiAgICAgICAgICAgIHsuLi50aXRsZVByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWpvYi1taW5pbWFsX19sb2NhdGlvbi1jb25hdGluZXJcIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtam9iLW1pbmltYWxfX2xvY2F0aW9uXCJcclxuICAgICAgICAgICAgey4uLnN1YnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzdWJ0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93QXJyb3cgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWpvYi1taW5pbWFsX19hcnJvdy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgIGZvbnRJY29uQ2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIlxyXG4gICAgICAgICAgICBmb250SWNvbkNvbG9yPXtjb2xvcnMuZ3JleVs3MDBdfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWpvYi1taW5pbWFsX19hcnJvd1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkSm9iTWluaW1hbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc2hvd0Fycm93OiBmYWxzZSxcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxufTtcclxuXHJcbkNhcmRKb2JNaW5pbWFsLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEpvYiB0aXRsZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIHN1YnRpdGxlIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTaG91bGQgc2hvdyBhcnJvdyBvciBub3RcclxuICAgKi9cclxuICBzaG93QXJyb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEpvYk1pbmltYWw7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRKb2JNaW5pbWFsJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCBjb2xvcnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3JkZXJSaWdodDogYCR7dGhlbWUuc3BhY2luZygxKX1weCBzb2xpZCAke2NvbG9ycy5yZWRbNTAwXX1gLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRvdDoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGRvdEJpZzoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBkb3RTbWFsbDoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcclxuICB9LFxyXG4gIGpvYlRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxuICBkb3RNYXJnaW46IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICB9LFxyXG4gIHRhZzoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygxIC8gMiksXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQnLFxyXG4gIH0sXHJcbiAgdGV4dFdoaXRlOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGpvYiBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZEpvYlRhZyA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBiYWRnZUNvbG9yLFxyXG4gICAgYmFkZ2VUaXRsZSxcclxuICAgIGpvYlRpdGxlLFxyXG4gICAgam9iTG9jYXRpb24sXHJcbiAgICBqb2JUeXBlLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRCYXNlIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IGFsaWduPVwibGVmdFwiIHsuLi5yZXN0fT5cclxuICAgICAgPD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB4cz17MTJ9PlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ31cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiYWRnZUNvbG9yLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBiYWRnZUNvbG9yLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRXaGl0ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtiYWRnZVRpdGxlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5qb2JUaXRsZX0+XHJcbiAgICAgICAgICAgIHtqb2JUaXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7am9iTG9jYXRpb259XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5kb3QsIGNsYXNzZXMuZG90U21hbGwsIGNsYXNzZXMuZG90TWFyZ2luKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtqb2JUeXBlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8Lz5cclxuICAgIDwvQ2FyZEJhc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRKb2JUYWcucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQmFkZ2UgY29sb3Igb2YgdGhlIGpvYiBjYXJkXHJcbiAgICovXHJcbiAgYmFkZ2VDb2xvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEJhZGdlIHRpdGxlIG9mIHRoZSBqb2IgY2FyZFxyXG4gICAqL1xyXG4gIGJhZGdlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgdGl0bGUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiBsb2NhdGlvbiBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYkxvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIHR5cGUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkSm9iVGFnO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkSm9iVGFnJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBMaXN0SXRlbSwgRGl2aWRlciwgTGlzdCwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgQ2FyZEJhc2UgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgZmVhdHVyZUNoZWNrOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGpvYiBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZFByaWNpbmdTdGFuZGFyZCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSxcclxuICAgIHN1YnRpdGxlLFxyXG4gICAgcHJpY2VDb21wb25lbnQsXHJcbiAgICBmZWF0dXJlQ2hlY2tDb21wb25lbnQsXHJcbiAgICBmZWF0dXJlcyxcclxuICAgIGN0YSxcclxuICAgIGRpc2NsYWltZXIsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIGRpc2NsYWltZXJQcm9wcyxcclxuICAgIGZlYXR1cmVUaXRsZVByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRCYXNlXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY2FyZC1wcmljaW5nLXN0YW5kYXJkJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICBhbGlnbj1cImxlZnRcIlxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fd3JhcHBlclwiPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2hlYWRsaW5lXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxyXG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX190aXRsZVwiXHJcbiAgICAgICAgICAgIHsuLi50aXRsZVByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7c3VidGl0bGUgJiYgKFxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19zdWJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgey4uLnN1YnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2RpdmlkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2RpdmlkZXJcIiAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19jb250ZW50XCI+XHJcbiAgICAgICAgICB7cHJpY2VDb21wb25lbnR9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIHtmZWF0dXJlcyAmJiAoXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19mZWF0dXJlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPExpc3QgY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19mZWF0dXJlLWxpc3RcIj5cclxuICAgICAgICAgICAgICB7ZmVhdHVyZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVHdXR0ZXJzXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fZmVhdHVyZS1saXN0LWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7ZmVhdHVyZUNoZWNrQ29tcG9uZW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkLXByaWNpbmctc3RhbmRhcmRfX2ZlYXR1cmUtY2hlY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmZlYXR1cmVDaGVjayxcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmVDaGVja0NvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fZmVhdHVyZS10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmZlYXR1cmVUaXRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2N0YS13cmFwcGVyXCI+XHJcbiAgICAgICAgICB7Y3RhfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICB7ZGlzY2xhaW1lciAmJiAoXHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19kaXNjbGFpbWVyLXdyYXBwZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19kaXNjbGFpbWVyLXRpdGxlXCJcclxuICAgICAgICAgICAgICB7Li4uZGlzY2xhaW1lclByb3BzfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2Rpc2NsYWltZXJ9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NhcmRCYXNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkUHJpY2luZ1N0YW5kYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxuICBkaXNjbGFpbWVyUHJvcHM6IHt9LFxyXG4gIGZlYXR1cmVUaXRsZVByb3BzOiB7fSxcclxufTtcclxuXHJcbkNhcmRQcmljaW5nU3RhbmRhcmQucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqICBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIG9mIHRoZSBwcmljaW5nIGNhcmRcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqICBTdWJ0aXRsZSBvZiB0aGUgcHJpY2luZyBjYXJkXHJcbiAgICovXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIHByaWNpbmcgY29tcG9uZW50IG9mIHRoZSBwcmljaW5nIGNhcmRcclxuICAgKi9cclxuICBwcmljZUNvbXBvbmVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgZmVhdHVyZXMgY2hlY2sgY29tcG9uZW50IG9mIHRoZSBwcmljaW5nIGNhcmRcclxuICAgKi9cclxuICBmZWF0dXJlQ2hlY2tDb21wb25lbnQ6IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIEZlYXR1cmVzIGFycmF5IG9mIHRoZSBwcmljaW5nIGNhcmRcclxuICAgKi9cclxuICBmZWF0dXJlczogUHJvcFR5cGVzLmFycmF5LFxyXG4gIC8qKlxyXG4gICAqICBDVEEgYnV0dG9uIG9mIHRoZSBwcmljaW5nIGNhcmRcclxuICAgKi9cclxuICBjdGE6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogRGljbGFpbWVyIG9mIHRoZSBwcmljaW5nIGNhcmRcclxuICAgKi9cclxuICBkaXNjbGFpbWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgZGlzY2xhaW1lciBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGRpc2NsYWltZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIGZlYXR1cmUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBmZWF0dXJlVGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQcmljaW5nU3RhbmRhcmQ7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRQcmljaW5nU3RhbmRhcmQnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkTWVkaWEgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgd2l0aFNoYWRvdzoge1xyXG4gICAgYm94U2hhZG93OiBgMCAycHggMTBweCAwICR7dGhlbWUucGFsZXR0ZS5jYXJkU2hhZG93fWAsXHJcbiAgfSxcclxuICBub1NoYWRvdzoge1xyXG4gICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgfSxcclxuICBub0JvcmRlcjoge1xyXG4gICAgYm9yZGVyOiAwLFxyXG4gIH0sXHJcbiAgbm9CZzoge1xyXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICB9LFxyXG4gIGxpZnRVcDoge1xyXG4gICAgdHJhbnNpdGlvbjpcclxuICAgICAgJ2JveC1zaGFkb3cgLjI1cyBlYXNlLHRyYW5zZm9ybSAuMjVzIGVhc2UsLXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBlYXNlJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgJzAgMS41cmVtIDIuNXJlbSByZ2JhKDIyLDI4LDQ1LC4xKSwwIC4zcmVtIDAuNXJlbSAtLjUwcmVtIHJnYmEoMjIsMjgsNDUsLjA1KSAhaW1wb3J0YW50JyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwtNXB4LDApJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtZWRpYToge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBoZWlnaHQ6IDMwMCxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCwgMiksXHJcbiAgICAnJjpsYXN0LWNoaWxkJzoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDQsIDIpLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2LCAzKSxcclxuICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYsIDMpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxlZnQ6IHtcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICB9LFxyXG4gIHJpZ2h0OiB7XHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxyXG4gIH0sXHJcbiAgY2VudGVyOiB7XHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHByb2R1Y3QgY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRQcm9kdWN0ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIG1lZGlhQ2xhc3NOYW1lLFxyXG4gICAgd2l0aFNoYWRvdyxcclxuICAgIG5vU2hhZG93LFxyXG4gICAgbm9Cb3JkZXIsXHJcbiAgICBub0JnLFxyXG4gICAgbGlmdFVwLFxyXG4gICAgY2FyZENvbnRlbnQsXHJcbiAgICBtZWRpYUNvbnRlbnQsXHJcbiAgICBhbGlnbixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAnY2FyZC1wcm9kdWN0JyxcclxuICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbiAgICAgICAgd2l0aFNoYWRvdyA/IGNsYXNzZXMud2l0aFNoYWRvdyA6IHt9LFxyXG4gICAgICAgIG5vU2hhZG93ID8gY2xhc3Nlcy5ub1NoYWRvdyA6IHt9LFxyXG4gICAgICAgIG5vQm9yZGVyID8gY2xhc3Nlcy5ub0JvcmRlciA6IHt9LFxyXG4gICAgICAgIG5vQmcgPyBjbGFzc2VzLm5vQmcgOiB7fSxcclxuICAgICAgICBsaWZ0VXAgPyBjbGFzc2VzLmxpZnRVcCA6IHt9LFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2NhcmQtcHJvZHVjdF9fbWVkaWEnLCBjbGFzc2VzLm1lZGlhLCBtZWRpYUNsYXNzTmFtZSl9XHJcbiAgICAgID5cclxuICAgICAgICB7bWVkaWFDb250ZW50fVxyXG4gICAgICA8L0NhcmRNZWRpYT5cclxuICAgICAgPENhcmRDb250ZW50XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgJ2NhcmQtcHJvZHVjdF9fY29udGVudCcsXHJcbiAgICAgICAgICBjbGFzc2VzLmNvbnRlbnQsXHJcbiAgICAgICAgICBjbGFzc2VzW2FsaWduXSxcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NhcmRDb250ZW50fVxyXG4gICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkUHJvZHVjdC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdsZWZ0JyxcclxufTtcclxuXHJcbkNhcmRQcm9kdWN0LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXMgZm9yIHRoZSBtZWRpYVxyXG4gICAqL1xyXG4gIG1lZGlhQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gc2hvdyBjdXN0b20gc2hhZG93XHJcbiAgICovXHJcbiAgd2l0aFNoYWRvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byByZW5kZXIgdGhlIGNhcmQgd2l0aG91dCBzaGFkb3dcclxuICAgKi9cclxuICBub1NoYWRvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBoaWRlIHRoZSBjYXJkIGJvcmRlcnNcclxuICAgKi9cclxuICBub0JvcmRlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBzaG93IHRyYW5zcGFyZW50IGJhY2tncm91bmRcclxuICAgKi9cclxuICBub0JnOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGxpZnQgdXAgb24gaG92ZXJcclxuICAgKi9cclxuICBsaWZ0VXA6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBDYXJkIGNvbnRlbnRcclxuICAgKi9cclxuICBjYXJkQ29udGVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBDYXJkIE1lZGlhIGNvbnRlbnRcclxuICAgKi9cclxuICBtZWRpYUNvbnRlbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudCBhbGlnbm1lbnRcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUHJvZHVjdDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZFByb2R1Y3QnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHksIGNvbG9ycyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgSWNvbkFsdGVybmF0ZSB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcclxuaW1wb3J0IHsgQ2FyZEJhc2UgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgZm9udFdlaWdodDcwMDoge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gIH0sXHJcbiAgdGV4dEJsdWU6IHtcclxuICAgIGNvbG9yOiBcIiM1MTIwRkZcIixcclxuICB9LFxyXG4gIGltZ0ZsdWlkOlxyXG4gIHtcclxuICAgIHdpZHRoOlwiNTBweFwiLFxyXG4gICAgaGVpZ2h0OlwiNTBweFwiXHJcbiAgfSxcclxuICBwYl8wOiB7XHJcbiAgICBwYWRkaW5nQm90dG9tOiBcIjAgIWltcG9ydGFudFwiLFxyXG4gIH0sXHJcbiAgcGJfcHRfMDoge1xyXG4gICAgcGFkZGluZ1RvcDogXCIwICFpbXBvcnRhbnRcIixcclxuICAgIHBhZGRpbmdCb3R0b206IFwiMCAhaW1wb3J0YW50XCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBwcm9tbyBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZFByb21vID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdGl0bGVDb2xvcixcclxuICAgIGZvbnRJY29uQ2xhc3MsXHJcbiAgICBjb2xvcixcclxuICAgIHRpdGxlLFxyXG4gICAgc3VidGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGFsaWduLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgc3JjLFxyXG4gICAgaWNvbkFsdGVybmF0ZVByb3BzLFxyXG4gICAgdGl0bGVQcm9wcyxcclxuICAgIHN1YnRpdGxlUHJvcHMsXHJcbiAgICBkZXNjcmlwdGlvblByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBsZXQganVzdGlmeUdyaWQgPSBcImZsZXgtc3RhcnRcIjtcclxuICBpZiAoYWxpZ24gPT09IFwiY2VudGVyXCIpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gXCJjZW50ZXJcIjtcclxuICB9IGVsc2UgaWYgKGFsaWduID09PSBcInJpZ2h0XCIpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gXCJmbGV4LWVuZFwiO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRCYXNlXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcImNhcmRfX3Byb21vXCIsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBjbGFzc05hbWU9J2NhcmQtcHJvbW9fX3dyYXBwZXInPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtqdXN0aWZ5R3JpZH1cclxuICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgIGNsYXNzTmFtZT0nY2FyZC1wcm9tb19faWNvbi13cmFwcGVyJ1xyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPXtzcmN9IGFsdD17c3JjfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nRmx1aWR9Lz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcImNhcmQtcHJvbW9fX3RpdGxlLXdyYXBwZXJcIiwgY2xhc3Nlcy5wYl8wKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PSdoNCdcclxuICAgICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgXCJjYXJkLXByb21vX190aXRsZVwiLFxyXG4gICAgICAgICAgICAgIGNsYXNzZXMuZm9udFdlaWdodDcwMCxcclxuICAgICAgICAgICAgICBjbGFzc2VzLnRleHRCbHVlXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsuLi50aXRsZVByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIHtzdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFwiY2FyZC1wcm9tb19fc3VidGl0bGUtd3JhcHBlclwiLCBjbGFzc2VzLnBiX3B0XzApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2g2J1xyXG4gICAgICAgICAgICAgIGNvbG9yPSd0ZXh0UHJpbWFyeSdcclxuICAgICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFwiY2FyZC1wcm9tb19fc3VidGl0bGVcIiwgY2xhc3Nlcy5mb250V2VpZ2h0NzAwKX1cclxuICAgICAgICAgICAgICB7Li4uc3VidGl0bGVQcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzdWJ0aXRsZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Rlc2NyaXB0aW9uICYmIChcclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXCJjYXJkLXByb21vX19kZXNjcmlwdGlvbi13cmFwcGVyXCIsIGNsYXNzZXMucGJfcHRfMCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nYm9keTEnXHJcbiAgICAgICAgICAgICAgY29sb3I9J3RleHRQcmltYXJ5J1xyXG4gICAgICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQtcHJvbW9fX2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgIHsuLi5kZXNjcmlwdGlvblByb3BzfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZFByb21vLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2xlZnQnLFxyXG4gIGljb25BbHRlcm5hdGVQcm9wczoge30sXHJcbiAgdGl0bGVQcm9wczoge30sXHJcbiAgc3VidGl0bGVQcm9wczoge30sXHJcbiAgZGVzY3JpcHRpb25Qcm9wczoge30sXHJcbn07XHJcblxyXG5DYXJkUHJvbW8ucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gdGl0bGUgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIHN1YnRpdGxlIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gZGVzY3JpcHRpb24gdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBQcm9tbyBmb250IGljb24gY2xhc3MgbmFtZSB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGZvbnRJY29uQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gaWNvbiBjb2xvciB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgY29sb3JzLnJlZCxcclxuICAgIGNvbG9ycy5waW5rLFxyXG4gICAgY29sb3JzLnB1cnBsZSxcclxuICAgIGNvbG9ycy5kZWVwUHVycGxlLFxyXG4gICAgY29sb3JzLmluZGlnbyxcclxuICAgIGNvbG9ycy5ibHVlLFxyXG4gICAgY29sb3JzLmxpZ2h0Qmx1ZSxcclxuICAgIGNvbG9ycy5jeWFuLFxyXG4gICAgY29sb3JzLnRlYWwsXHJcbiAgICBjb2xvcnMuZ3JlZW4sXHJcbiAgICBjb2xvcnMubGlnaHRHcmVlbixcclxuICAgIGNvbG9ycy5saW1lLFxyXG4gICAgY29sb3JzLnllbGxvdyxcclxuICAgIGNvbG9ycy5hbWJlcixcclxuICAgIGNvbG9ycy5vcmFuZ2UsXHJcbiAgICBjb2xvcnMuZGVlcE9yYW5nZSxcclxuICAgIGNvbG9ycy5icm93bixcclxuICAgIGNvbG9ycy5ncmV5LFxyXG4gICAgY29sb3JzLmJsdWVHcmV5LFxyXG4gIF0pLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRlbnQgYWxpZ25tZW50XHJcbiAgICovXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJ10pLFxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIGNvbG9yXHJcbiAgICovXHJcbiAgdGl0bGVDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIEljb25BbHRlcm5hdGUgY29tcG9uZW50XHJcbiAgICovXHJcbiAgaWNvbkFsdGVybmF0ZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgZGVzY2lwdGlvbiBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUHJvbW87XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRQcm9tbyc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtcclxuICBHcmlkLFxyXG4gIEF2YXRhcixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1BdmF0YXIsXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgQ2FyZEJhc2UgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgcmV2aWV3IGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkUmV2aWV3ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGljb24sXHJcbiAgICB0ZXh0LFxyXG4gICAgYXV0aG9yUGhvdG8sXHJcbiAgICBhdXRob3JOYW1lLFxyXG4gICAgYXV0aG9yVGl0bGUsXHJcbiAgICBhbGlnbixcclxuICAgIHRleHRWYXJpYW50LFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdGV4dFByb3BzLFxyXG4gICAgbGlzdEl0ZW1QcmltYXJ5VHlwb2dyYXBoeVByb3BzLFxyXG4gICAgbGlzdEl0ZW1TZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGxldCBqdXN0aWZ5R3JpZCA9ICdjZW50ZXInO1xyXG4gIGlmIChhbGlnbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9ICdmbGV4LXN0YXJ0JztcclxuICB9IGVsc2UgaWYgKGFsaWduID09PSAncmlnaHQnKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9ICdmbGV4LWVuZCc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRCYXNlXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY2FyZC1yZXZpZXcnLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX3dyYXBwZXJcIj5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17anVzdGlmeUdyaWR9XHJcbiAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXJldmlld19faWNvbi13cmFwcGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aWNvbn1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X190ZXh0LXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9e3RleHRWYXJpYW50fVxyXG4gICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICB7Li4udGV4dFByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGV4dH1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X19saXRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtqdXN0aWZ5R3JpZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2xpc3Qtd3JhcHBlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaXN0IGRpc2FibGVQYWRkaW5nIGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X19saXN0XCI+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X19saXN0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhciBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fbGlzdC1pdGVtLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmF1dGhvclBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17YXV0aG9yTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fYXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X19saXN0LWl0ZW0tdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9e2F1dGhvck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17YXV0aG9yVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnlUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAuLi5saXN0SXRlbVByaW1hcnlUeXBvZ3JhcGh5UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmxpc3RJdGVtU2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NhcmRCYXNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkUmV2aWV3LmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgdGV4dFZhcmlhbnQ6ICdoNicsXHJcbiAgdGV4dFByb3BzOiB7fSxcclxuICBsaXN0SXRlbVByaW1hcnlUeXBvZ3JhcGh5UHJvcHM6IHt9LFxyXG4gIGxpc3RJdGVtU2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzOiB7fSxcclxufTtcclxuXHJcbkNhcmRSZXZpZXcucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogSWNvbiB0byBzaG93IGluc2lkZSB0aGUgcmV2aWV3IGNhcmRcclxuICAgKi9cclxuICBpY29uOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFJldmlldyB0ZXh0IHRvIHNob3cgaW5zaWRlIHRoZSByZXZpZXcgY2FyZFxyXG4gICAqL1xyXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBSZXZpZXdlciBwaG90byB0byBzaG93IGluc2lkZSB0aGUgcmV2aWV3IGNhcmQuU2hvdWxkIGJlIGFuIG9iamVjdCB3aXRoIHNyYyBhbmQgc3JjU2V0IHByb3BlcnRpZXNcclxuICAgKi9cclxuICBhdXRob3JQaG90bzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFJldmlld2VyIG5hbWUgdG8gc2hvdyBpbnNpZGUgdGhlIHJldmlldyBjYXJkXHJcbiAgICovXHJcbiAgYXV0aG9yTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFJldmlld2VyIHRpdGxlIHRvIHNob3cgaW5zaWRlIHRoZSByZXZpZXcgY2FyZFxyXG4gICAqL1xyXG4gIGF1dGhvclRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEFsaWdubWVudCBvZiB0aGUgY29udGVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxuICAvKipcclxuICAgKiBSZXZpZXcgdGV4dCB2YXJpYW50XHJcbiAgICovXHJcbiAgdGV4dFZhcmlhbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSB0ZXh0IFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGV4dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgbGlzdCBpdGVtIHByaW1hcnkgdGV4dCBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGxpc3RJdGVtUHJpbWFyeVR5cG9ncmFwaHlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIGxpc3QgaXRlbSBzZWNvbmRhcnkgdGV4dCBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGxpc3RJdGVtU2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFJldmlldztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZFJldmlldyc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBHcmlkLCBCdXR0b24sIFRleHRGaWVsZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHZhbGlkYXRlIGZyb20gJ3ZhbGlkYXRlLmpzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHNjaGVtYSA9IHtcclxuICBmdWxsbmFtZToge1xyXG4gICAgcHJlc2VuY2U6IHsgYWxsb3dFbXB0eTogZmFsc2UsIG1lc3NhZ2U6ICdpcyByZXF1aXJlZCcgfSxcclxuICAgIGxlbmd0aDoge1xyXG4gICAgICBtYXhpbXVtOiAxMjgsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIHByZXNlbmNlOiB7IGFsbG93RW1wdHk6IGZhbHNlLCBtZXNzYWdlOiAnaXMgcmVxdWlyZWQnIH0sXHJcbiAgICBlbWFpbDogdHJ1ZSxcclxuICAgIGxlbmd0aDoge1xyXG4gICAgICBtYXhpbXVtOiAzMDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWVzc2FnZToge1xyXG4gICAgcHJlc2VuY2U6IHsgYWxsb3dFbXB0eTogZmFsc2UsIG1lc3NhZ2U6ICdpcyByZXF1aXJlZCcgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBbZm9ybVN0YXRlLCBzZXRGb3JtU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICB2YWx1ZXM6IHt9LFxyXG4gICAgdG91Y2hlZDoge30sXHJcbiAgICBlcnJvcnM6IHt9LFxyXG4gIH0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZXJyb3JzID0gdmFsaWRhdGUoZm9ybVN0YXRlLnZhbHVlcywgc2NoZW1hKTtcclxuXHJcbiAgICBzZXRGb3JtU3RhdGUoZm9ybVN0YXRlID0+ICh7XHJcbiAgICAgIC4uLmZvcm1TdGF0ZSxcclxuICAgICAgaXNWYWxpZDogZXJyb3JzID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICBlcnJvcnM6IGVycm9ycyB8fCB7fSxcclxuICAgIH0pKTtcclxuICB9LCBbZm9ybVN0YXRlLnZhbHVlc10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICBldmVudC5wZXJzaXN0KCk7XHJcblxyXG4gICAgc2V0Rm9ybVN0YXRlKGZvcm1TdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5mb3JtU3RhdGUsXHJcbiAgICAgIHZhbHVlczoge1xyXG4gICAgICAgIC4uLmZvcm1TdGF0ZS52YWx1ZXMsXHJcbiAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTpcclxuICAgICAgICAgIGV2ZW50LnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnXHJcbiAgICAgICAgICAgID8gZXZlbnQudGFyZ2V0LmNoZWNrZWRcclxuICAgICAgICAgICAgOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvdWNoZWQ6IHtcclxuICAgICAgICAuLi5mb3JtU3RhdGUudG91Y2hlZCxcclxuICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhc0Vycm9yID0gZmllbGQgPT5cclxuICAgIGZvcm1TdGF0ZS50b3VjaGVkW2ZpZWxkXSAmJiBmb3JtU3RhdGUuZXJyb3JzW2ZpZWxkXSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG5hbWU9XCJjb250YWN0LWZvcm1cIlxyXG4gICAgICAgIG1ldGhvZD1cInBvc3RcIlxyXG4gICAgICAgIGFjdGlvbj1cIi9zdWJtaXRpb24uaHRtbD9jb250YWN0LWZvcm0tc3VibWl0LXN1Y2Nlc3M9dHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtLW5hbWVcIiB2YWx1ZT1cImNvbnRhY3QtZm9ybVwiIC8+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+Q29udGFjdCBVczwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgV2UgY2FyZWZ1bGx5IHJlYWQgYW5kIGFuc3dlciB0byBhbGwgb3VyIGVtYWlscy5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkZ1bGwgTmFtZSAqXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJmdWxsbmFtZVwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgaGVscGVydGV4dD17XHJcbiAgICAgICAgICAgICAgICBoYXNFcnJvcignZnVsbG5hbWUnKSA/IGZvcm1TdGF0ZS5lcnJvcnMuZnVsbG5hbWVbMF0gOiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVycm9yPXtoYXNFcnJvcignZnVsbG5hbWUnKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVN0YXRlLnZhbHVlcy5mdWxsbmFtZSB8fCAnJ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFLW1haWwgKlwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIGhlbHBlcnRleHQ9e2hhc0Vycm9yKCdlbWFpbCcpID8gZm9ybVN0YXRlLmVycm9ycy5lbWFpbFswXSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgZXJyb3I9e2hhc0Vycm9yKCdlbWFpbCcpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVN0YXRlLnZhbHVlcy5lbWFpbCB8fCAnJ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJNZXNzYWdlICpcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIGhlbHBlcnRleHQ9e1xyXG4gICAgICAgICAgICAgICAgaGFzRXJyb3IoJ21lc3NhZ2UnKSA/IGZvcm1TdGF0ZS5lcnJvcnMubWVzc2FnZVswXSA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXJyb3I9e2hhc0Vycm9yKCdtZXNzYWdlJyl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtU3RhdGUudmFsdWVzLm1lc3NhZ2UgfHwgJyd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgRmllbGRzIHRoYXQgYXJlIG1hcmtlZCB3aXRoIGFuIGFzdGVyaXNrICgqKSBzaWduIGFyZSByZXF1aXJlZC5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshZm9ybVN0YXRlLmlzVmFsaWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Db250YWN0Rm9ybSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgZGVzY3JpcHRpb24gbGlzdCB3aXRoIGljb25cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBEZXNjcmlwdGlvbkxpc3RJY29uID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlLFxyXG4gICAgc3VidGl0bGUsXHJcbiAgICBpY29uLFxyXG4gICAgYWxpZ24sXHJcbiAgICB0aXRsZVZhcmlhbnQsXHJcbiAgICBzdWJ0aXRsZVZhcmlhbnQsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgbGV0IGdyaWRKdXN0aWZ5ID0gJ2NlbnRlcic7XHJcblxyXG4gIGlmIChhbGlnbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICBncmlkSnVzdGlmeSA9ICdmbGV4LXN0YXJ0JztcclxuICB9IGVsc2UgaWYgKGFsaWduID09PSAncmlnaHQnKSB7XHJcbiAgICBncmlkSnVzdGlmeSA9ICdmbGV4LWVuZCc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRcclxuICAgICAgY29udGFpbmVyXHJcbiAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2Rlc2NyaXB0aW9uLWxpc3QtaWNvbicsIGNsYXNzTmFtZSl9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgaXRlbVxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PXtncmlkSnVzdGlmeX1cclxuICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tbGlzdC1pY29uX19pY29uLXdyYXBwZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2ljb259XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWxpc3QtaWNvbl9fdGl0bGUtd3JhcHBlclwiPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICB2YXJpYW50PXt0aXRsZVZhcmlhbnR9XHJcbiAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcclxuICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRpdGxlLCAnZGVzY3JpcHRpb24tbGlzdC1pY29uX190aXRsZScpfVxyXG4gICAgICAgICAgey4uLnRpdGxlUHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICB7c3VidGl0bGUgJiYgKFxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1saXN0LWljb25fX3N1YnRpdGxlLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9e3N1YnRpdGxlVmFyaWFudH1cclxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1saXN0LWljb25fX3N1YnRpdGxlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKX1cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuRGVzY3JpcHRpb25MaXN0SWNvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdjZW50ZXInLFxyXG4gIHRpdGxlVmFyaWFudDogJ2g2JyxcclxuICBzdWJ0aXRsZVZhcmlhbnQ6ICdib2R5MScsXHJcbiAgdGl0bGVQcm9wczoge30sXHJcbiAgc3VidGl0bGVQcm9wczoge30sXHJcbn07XHJcblxyXG5EZXNjcmlwdGlvbkxpc3RJY29uLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSB0aXRsZVxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogdGhlIHN1YnRpdGxlXHJcbiAgICovXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciBzaG91bGQgc2hvdyB0aGUgYWx0ZXJuYXRlIGljb25cclxuICAgKi9cclxuICBpY29uOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBhbGlnbm1lbnQgb2YgdGhlIGl0ZW1zXHJcbiAgICovXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJ10pLFxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIHZhcmlhbnRcclxuICAgKi9cclxuICB0aXRsZVZhcmlhbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogU3VidGl0bGUgdmFyaWFudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlVmFyaWFudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHN1YnRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2NyaXB0aW9uTGlzdEljb247XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Rlc2NyaXB0aW9uTGlzdEljb24nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgb3ZlcmZsb3c6ICd2aXNpYmxlJyxcclxuICB9LFxyXG4gIGNvbG9yRGVmYXVsdDoge1xyXG4gICAgYmFja2dyb3VuZDogY29sb3JzLmluZGlnb1s5MDBdLFxyXG4gIH0sXHJcbiAgaGVyb1dyYXBwZXI6IHtcclxuICAgIHpJbmRleDogMixcclxuICB9LFxyXG4gIGhlcm9Db3Zlcjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICBvcGFjaXR5OiAwLjIsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB6SW5kZXg6IDEsXHJcbiAgfSxcclxuICBoZXJvQmc6IHtcclxuICAgIGJhY2tncm91bmRTaXplOiAnYXV0bycsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICB9LFxyXG4gIG5vQ292ZXJPcGFjaXR5OiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgYmFja2dyb3VuZCBoZXJvXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgSGVyb0JhY2tncm91bmQgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBkaXNiYWxlQ292ZXJPcGFjaXR5LFxyXG4gICAgYmFja2dyb3VuZEltZyxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbixcclxuICAgIGJhY2tncm91bmRDb2xvcixcclxuICAgIGNvbnRlbnRTZWN0aW9uQ2xhc3NOYW1lLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB1c2VDdXN0b21TdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgICBjb3ZlckJnOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRJbWd9KWAsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmRDb2xvcixcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHtcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBiYWNrZ3JvdW5kUG9zaXRpb24sXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgY29uc3QgY3VzdG9tQ2xhc3NlcyA9IHVzZUN1c3RvbVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgJ2hlcm8tYmFja2dyb3VuZCcsXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA/IGN1c3RvbUNsYXNzZXMuYmFja2dyb3VuZENvbG9yIDogY2xhc3Nlcy5jb2xvckRlZmF1bHQsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tYmFja2dyb3VuZF9fd3JhcHBlcicsIGNsYXNzZXMuaGVyb1dyYXBwZXIpfT5cclxuICAgICAgICA8U2VjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICBjb250ZW50U2VjdGlvbkNsYXNzTmFtZSA/IGNvbnRlbnRTZWN0aW9uQ2xhc3NOYW1lIDogJycsXHJcbiAgICAgICAgICAgICdoZXJvLWJhY2tncm91bmRfX3NlY3Rpb24nLFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICdoZXJvLWJhY2tncm91bmRfX2NvdmVyJyxcclxuICAgICAgICAgIGNsYXNzZXMuaGVyb0JnLFxyXG4gICAgICAgICAgY2xhc3Nlcy5oZXJvQ292ZXIsXHJcbiAgICAgICAgICBjdXN0b21DbGFzc2VzLmNvdmVyQmcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb24gPyBjdXN0b21DbGFzc2VzLmJhY2tncm91bmRQb3NpdGlvbiA6IHt9LFxyXG4gICAgICAgICAgZGlzYmFsZUNvdmVyT3BhY2l0eSA/IGNsYXNzZXMubm9Db3Zlck9wYWNpdHkgOiB7fSxcclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm9CYWNrZ3JvdW5kLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIENoaWxkcmVuIHRvIHBsYWNlZCBpbnNpZGUgdGhlIGhlcm9cclxuICAgKi9cclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgLyoqXHJcbiAgICogQmFja2dyb3VuZCBpbWFnZSBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGJhY2tncm91bmRJbWc6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQmFja2dyb3VuZCBjb2xvciBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBCYWNrZ3JvdW5kIHBvc2l0aW9uIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEN1c3RvbSBjbGFzc2VzIGZvciB0aGUgY29udGVudCBzZWN0aW9uXHJcbiAgICovXHJcbiAgY29udGVudFNlY3Rpb25DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogU2hvdWxkIGRpc2FibGUgaGVyZSBjb3ZlciBvcGFjaXR5XHJcbiAgICovXHJcbiAgZGlzYmFsZUNvdmVyT3BhY2l0eTogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQmFja2dyb3VuZDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSGVyb0JhY2tncm91bmQnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgfSxcclxuICBoZXJvOiB7XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgbWF4V2lkdGg6IHRoZW1lLmxheW91dC5jb250ZW50V2lkdGgsXHJcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtbi1yZXZlcnNlXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaGVyb0xlZnRTaWRlOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDgpLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaGVyb1JpZ2h0U2lkZToge1xyXG4gICAgbWF4V2lkdGg6IFwiNTAlXCIsXHJcbiAgICBmbGV4OiBcIjAgMCA1MCVcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGZsZXg6IFwiMCAwIDEwMCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZXJvQ292ZXI6IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB3aWR0aDogXCI1MHZ3XCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlcm9JbWFnZUNvbnRhaW5lcjoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gIH0sXHJcbiAgaGVyb0ltYWdlOiB7XHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgbGVmdDogXCIwJVwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICBzaGFwZU91dHNpZGU6IFwicG9seWdvbigxMCUgMCUsIDEwMCUgMCwgMTAwJSAxMDAlLCAwJSAxMDAlKVwiLFxyXG4gICAgICBjbGlwUGF0aDogXCJwb2x5Z29uKDEwJSAwJSwgMTAwJSAwLCAxMDAlIDEwMCUsIDAlIDEwMCUpXCIsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgcG9zaXRpb246IFwic3RhdGljXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGltZ1wiOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTAsXHJcbiAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNTAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgc2hhcGVkIGhlcm9cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBIZXJvU2hhcGVkID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgbGVmdFNpZGUsIHJpZ2h0U2lkZSwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCAnaGVyby1zaGFwZWQnLCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNoYXBlZF9fd3JhcHBlcicsIGNsYXNzZXMuaGVybyl9PlxyXG4gICAgICAgIDxTZWN0aW9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2hhcGVkX19sZWZ0LXNpZGUnLCBjbGFzc2VzLmhlcm9MZWZ0U2lkZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xlZnRTaWRlfVxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaGFwZWRfX3JpZ2h0LXNpZGUnLCBjbGFzc2VzLmhlcm9SaWdodFNpZGUpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNoYXBlZF9fY292ZXInLCBjbGFzc2VzLmhlcm9Db3Zlcil9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgJ2hlcm8tc2hhcGVkX19pbWFnZS1jb250YWluZXInLFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5oZXJvSW1hZ2VDb250YWluZXIsXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNoYXBlZF9faW1hZ2UnLCBjbGFzc2VzLmhlcm9JbWFnZSl9PlxyXG4gICAgICAgICAgICAgICAge3JpZ2h0U2lkZX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb1NoYXBlZC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDaGlsZHJlbiB0byBwbGFjZWQgaW5zaWRlIHRoZSBzZWN0aW9uIHJpZ2h0IHNpZGVcclxuICAgKi9cclxuICByaWdodFNpZGU6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQ2hpbGRyZW4gdG8gcGxhY2VkIGluc2lkZSB0aGUgc2VjdGlvbiBsZWZ0IHNpZGVcclxuICAgKi9cclxuICBsZWZ0U2lkZTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9TaGFwZWQ7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0hlcm9TaGFwZWQnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGNvbG9ycywgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9LFxyXG4gIGltYWdlV3JhcHBlcjoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBtYXhIZWlnaHQ6IDQwMCxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgfSxcclxuICBjb3Zlcjoge1xyXG4gICAgYmFja2dyb3VuZDogY29sb3JzLmluZGlnb1s5MDBdLFxyXG4gICAgb3BhY2l0eTogMC42LFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB0b3A6ICc1MCUnLFxyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ25vbmUnLFxyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDQpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHNpZGUgaW1hZ2UgaGVyb1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEhlcm9TaWRlSW1hZ2UgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaW1hZ2VTcmMsXHJcbiAgICBpbWFnZVNyY1NldCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgYmFja2dyb3VuZENvbG9yLFxyXG4gICAgcmV2ZXJzZSxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgdXNlQ3VzdG9tU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gICAgY292ZXJCZzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgY29uc3QgY3VzdG9tQ2xhc3NlcyA9IHVzZUN1c3RvbVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRcclxuICAgICAgY29udGFpbmVyXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaWRlLWltYWdlJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICBkaXJlY3Rpb249e3JldmVyc2UgPyAncm93LXJldmVyc2UnIDogJ3Jvdyd9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGl0ZW1cclxuICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNpZGUtaW1hZ2VfX2ltYWdlLXdyYXBwZXInLCBjbGFzc2VzLmltYWdlV3JhcHBlcil9XHJcbiAgICAgID5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17aW1hZ2VTcmN9XHJcbiAgICAgICAgICBzcmNTZXQ9e2ltYWdlU3JjU2V0ID8gaW1hZ2VTcmNTZXQgOiAnJ31cclxuICAgICAgICAgIGFsdD17Jy4uLid9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2lkZS1pbWFnZV9faW1hZ2UnLCBjbGFzc2VzLmltYWdlKX1cclxuICAgICAgICAgIGxhenk9e2ZhbHNlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAnaGVyby1zaWRlLWltYWdlX19jb3ZlcicsXHJcbiAgICAgICAgICAgIGNsYXNzZXMuY292ZXIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA/IGN1c3RvbUNsYXNzZXMuY292ZXJCZyA6IHt9LFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgaXRlbVxyXG4gICAgICAgIHhzPXsxMn1cclxuICAgICAgICBtZD17Nn1cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2lkZS1pbWFnZV9fY29udGVudCcsIGNsYXNzZXMuY29udGVudCl9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb1NpZGVJbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDaGlsZHJlbiB0byBwbGFjZWQgaW5zaWRlIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIEJhY2tncm91bmQgY29sb3Igb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBiYWNrZ3JvdW5kQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogU2lkZSBpbWFnZVxyXG4gICAqL1xyXG4gIGltYWdlU3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU2lkZSBpbWFnZSBzcmNzZXRcclxuICAgKi9cclxuICBpbWFnZVNyY1NldDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBTaG91bGQgc2hvdyBpbiByZXZlcnNlIG9yZGVyXHJcbiAgICovXHJcbiAgcmV2ZXJzZTogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvU2lkZUltYWdlO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9IZXJvU2lkZUltYWdlJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgSGVyb1NpbXBsZUJhY2tncm91bmQgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZSxcclxuICAgIGJhY2tncm91bmRJbWFnZSxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB1c2VCYWNrZ3JvdW5kID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gICAgYmFja2dyb3VuZEltYWdlOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRJbWFnZX0pYCxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZToge1xyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogYmFja2dyb3VuZFNpemUsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiB7XHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYmFja2dyb3VuZFBvc2l0aW9uLFxyXG4gICAgfSxcclxuICB9KSk7XHJcbiAgY29uc3QgYmFja2dyb3VuZENsYXNzZXMgPSB1c2VCYWNrZ3JvdW5kKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAnaGVyby1zaW1wbGUtYmFja2dyb3VuZCcsXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ2xhc3Nlcy5iYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICAgICAgYmFja2dyb3VuZENsYXNzZXMuYmFja2dyb3VuZFNpemUsXHJcbiAgICAgICAgYmFja2dyb3VuZENsYXNzZXMuYmFja2dyb3VuZFBvc2l0aW9uLFxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPVwiaGVyby1zaW1wbGUtYmFja2dyb3VuZF9fc2VjdGlvblwiPntjaGlsZHJlbn08L1NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb1NpbXBsZUJhY2tncm91bmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcbn07XHJcblxyXG5IZXJvU2ltcGxlQmFja2dyb3VuZC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgbWFpbiBjb250ZW50XHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGJhY2tncm91bmQgaW1hZ2Ugb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBiYWNrZ3JvdW5kSW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgYmFja2dyb3VuZCBzaXplIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgYmFja2dyb3VuZFNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGJhY2tncm91bmQgcG9zaXRpb24gb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBiYWNrZ3JvdW5kUG9zaXRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvU2ltcGxlQmFja2dyb3VuZDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSGVyb1NpbXBsZUJhY2tncm91bmQnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBtYXBcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBNYXAgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyB6b29tLCBjZW50ZXIsIHBpbnMsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IEwgPSByZXF1aXJlKCdsZWFmbGV0Jyk7XHJcbiAgICBkZWxldGUgTC5JY29uLkRlZmF1bHQucHJvdG90eXBlLl9nZXRJY29uVXJsO1xyXG5cclxuICAgIGNvbnN0IG1hcmtlckljb24yeCA9IHJlcXVpcmUoJ2Fzc2V0cy9pbWFnZXMvbGVhZmxldC1hc3NldHMvbWFya2VyLWljb24tMngucG5nJyk7XHJcbiAgICBjb25zdCBtYXJrZXJJY29uID0gcmVxdWlyZSgnYXNzZXRzL2ltYWdlcy9sZWFmbGV0LWFzc2V0cy9tYXJrZXItaWNvbi5wbmcnKTtcclxuICAgIGNvbnN0IG1hcmtlclNoYWRvdyA9IHJlcXVpcmUoJ2Fzc2V0cy9pbWFnZXMvbGVhZmxldC1hc3NldHMvbWFya2VyLXNoYWRvdy5wbmcnKTtcclxuXHJcbiAgICBMLkljb24uRGVmYXVsdC5tZXJnZU9wdGlvbnMoe1xyXG4gICAgICBpY29uUmV0aW5hVXJsOiB0eXBlb2YgbWFya2VySWNvbjJ4ID09PSAnb2JqZWN0JyA/IG1hcmtlckljb24yeC5kZWZhdWx0IDogbWFya2VySWNvbjJ4LFxyXG4gICAgICBpY29uVXJsOiB0eXBlb2YgbWFya2VySWNvbiA9PT0gJ29iamVjdCcgPyBtYXJrZXJJY29uLmRlZmF1bHQgOiBtYXJrZXJJY29uLFxyXG4gICAgICBzaGFkb3dVcmw6IHR5cGVvZiBtYXJrZXJTaGFkb3cgPT09ICdvYmplY3QnID8gbWFya2VyU2hhZG93LmRlZmF1bHQgOiBtYXJrZXJTaGFkb3csXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IFJlYWN0TWFwID0gcmVxdWlyZSgncmVhY3QtbGVhZmxldCcpLk1hcDtcclxuICBjb25zdCBUaWxlTGF5ZXIgPSByZXF1aXJlKCdyZWFjdC1sZWFmbGV0JykuVGlsZUxheWVyO1xyXG4gIGNvbnN0IE1hcmtlciA9IHJlcXVpcmUoJ3JlYWN0LWxlYWZsZXQnKS5NYXJrZXI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3RNYXBcclxuICAgICAgem9vbT17em9vbX1cclxuICAgICAgY2VudGVyPXtjZW50ZXJ9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnbWFwJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPFRpbGVMYXllclxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1hcF9fdGlsZS1sYXllclwiXHJcbiAgICAgICAgZGV0ZWN0UmV0aW5hPXt0cnVlfVxyXG4gICAgICAgIGF0dHJpYnV0aW9uPScmYW1wO2NvcHkgPGEgaHJlZj1cImh0dHA6Ly9vc20ub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcclxuICAgICAgICB1cmw9XCJodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZ1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIHtwaW5zICYmXHJcbiAgICAgICAgcGlucy5sZW5ndGggJiZcclxuICAgICAgICBwaW5zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYXBfX21hcmtlclwiXHJcbiAgICAgICAgICAgIHBvc2l0aW9uPXtbaXRlbS5sb2NhdGlvbi55LCBpdGVtLmxvY2F0aW9uLnhdfVxyXG4gICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9SZWFjdE1hcD5cclxuICApO1xyXG59O1xyXG5cclxuTWFwLmRlZmF1bHRQcm9wcyA9IHtcclxuICB6b29tOiAxMCxcclxuICBjZW50ZXI6IFswLCAwXSxcclxufTtcclxuXHJcbk1hcC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBNYXAgem9vbVxyXG4gICAqL1xyXG4gIHpvb206IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIE1hcCBjZW50ZXJcclxuICAgKi9cclxuICBjZW50ZXI6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIGRhdGEgb2YgdGhlIGxvY2F0aW9ucy4gRXhhbXBsZTogW3sgbG9jYXRpb246IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSB9XVxyXG4gICAqL1xyXG4gIHBpbnM6IFByb3BUeXBlcy5hcnJheSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTWFwJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgLyogc3VwcG9ydCBmb3IgcGx1Z2luIGh0dHBzOi8vZ2l0aHViLmNvbS9iZnJlZC1pdC9vYmplY3QtZml0LWltYWdlcyAqL1xyXG4gICAgZm9udEZhbWlseTogJ29iamVjdC1maXQ6IGNvdmVyOycsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgekluZGV4OiAtMSxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIFBhcmFsbGF4IGJhY2tncm91bmRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgUGFyYWxsYXggPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBiYWNrZ3JvdW5kSW1hZ2UsIGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBqYXJhbGxheEVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmphcmFsbGF4Jyk7XHJcbiAgICBpZiAoIWphcmFsbGF4RWxlbXMgfHwgKGphcmFsbGF4RWxlbXMgJiYgamFyYWxsYXhFbGVtcy5sZW5ndGggPT09IDApKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBqYXJhbGxheCA9IHJlcXVpcmUoJ2phcmFsbGF4JykuamFyYWxsYXg7XHJcbiAgICBqYXJhbGxheChqYXJhbGxheEVsZW1zLCB7IHNwZWVkOiAwLjIgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnamFyYWxsYXgnLCAncGFyYWxsYXgnLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIGRhdGEtamFyYWxsYXhcclxuICAgICAgZGF0YS1zcGVlZD1cIjAuMlwiXHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdqYXJhbGxheC1pbWcnLCAncGFyYWxsYXhfX2ltYWdlJywgY2xhc3Nlcy5pbWFnZSl9XHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgIH19XHJcbiAgICAgICAgYWx0PVwiLi4uXCJcclxuICAgICAgLz5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblBhcmFsbGF4LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250ZW50XHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXJhbGxheCBiYWNrZ3JvdW5kIGltYWdlXHJcbiAgICovXHJcbiAgYmFja2dyb3VuZEltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJhbGxheDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vUGFyYWxsYXgnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXhXaWR0aDogdGhlbWUubGF5b3V0LmNvbnRlbnRXaWR0aCxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiwgMiksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCA4LCA0KSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCA2KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmdWxsV2lkdGg6IHtcclxuICAgIG1heFdpZHRoOiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGRpc2FibGVQYWRkaW5nOiB7XHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gIH0sXHJcbiAgbmFycm93OiB7XHJcbiAgICBtYXhXaWR0aDogODAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgc2VjdGlvbnNcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBTZWN0aW9uID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgZnVsbFdpZHRoLFxyXG4gICAgbmFycm93LFxyXG4gICAgZGlzYWJsZVBhZGRpbmcsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgJ3NlY3Rpb24nLFxyXG4gICAgICAgIGNsYXNzZXMucm9vdCxcclxuICAgICAgICBmdWxsV2lkdGggPyBjbGFzc2VzLmZ1bGxXaWR0aCA6IHt9LFxyXG4gICAgICAgIG5hcnJvdyA/IGNsYXNzZXMubmFycm93IDoge30sXHJcbiAgICAgICAgZGlzYWJsZVBhZGRpbmcgPyBjbGFzc2VzLmRpc2FibGVQYWRkaW5nIDoge30sXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5TZWN0aW9uLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIENoaWxkcmVuIHRvIHBsYWNlZCBpbnNpZGUgdGhlIHNlY3Rpb25cclxuICAgKi9cclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgLyoqXHJcbiAgICogU2hvdWxkIHNob3cgbmFycm93IHNlY3Rpb25zXHJcbiAgICovXHJcbiAgbmFycm93OiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBTaG91bGQgdGhlIHNlY3Rpb24gYmUgZnVsbCB3aWR0aFxyXG4gICAqL1xyXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogU2hvdWxkIHRoZSBzZWN0aW9uIHJlbmRlciB3aXRoIG5vIHBhZGRpbmdcclxuICAgKi9cclxuICBkaXNhYmxlUGFkZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TZWN0aW9uJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYWx0ZXJuYXRlLm1haW4sXHJcbiAgfSxcclxuICBpbm5lcjoge1xyXG4gICAgbWF4V2lkdGg6IHRoZW1lLmxheW91dC5jb250ZW50V2lkdGgsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiwgMiksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOCwgOCksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEyLCA4KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbm5lck5hcnJvd2VkOiB7XHJcbiAgICBtYXhXaWR0aDogODAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgYWx0ZXJuYXRpdmUgc2VjdGlvbnNcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBTZWN0aW9uQWx0ZXJuYXRlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVybmFycm93ZWQsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnc2VjdGlvbi1hbHRlcm5hdGUnLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgJ3NlY3Rpb24tYWx0ZXJuYXRlX19jb250ZW50JyxcclxuICAgICAgICAgIGNsYXNzZXMuaW5uZXIsXHJcbiAgICAgICAgICBpbm5lcm5hcnJvd2VkID8gY2xhc3Nlcy5pbm5lck5hcnJvd2VkIDoge30sXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblNlY3Rpb25BbHRlcm5hdGUucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ2hpbGRyZW4gdG8gcGxhY2VkIGluc2lkZSB0aGUgc2VjdGlvblxyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBTaG91bGQgc2hvdyBuYXJyb3cgc2VjdGlvbnNcclxuICAgKi9cclxuICBpbm5lcm5hcnJvd2VkOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25BbHRlcm5hdGU7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1NlY3Rpb25BbHRlcm5hdGUnO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFNlY3Rpb24gfSBmcm9tICcuL1NlY3Rpb24nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlY3Rpb25BbHRlcm5hdGUgfSBmcm9tICcuL1NlY3Rpb25BbHRlcm5hdGUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERlc2NyaXB0aW9uTGlzdEljb24gfSBmcm9tICcuL0Rlc2NyaXB0aW9uTGlzdEljb24nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRCYXNlIH0gZnJvbSAnLi9DYXJkQmFzZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZFJldmlldyB9IGZyb20gJy4vQ2FyZFJldmlldyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZENhdGVnb3J5IH0gZnJvbSAnLi9DYXJkQ2F0ZWdvcnknO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRKb2IgfSBmcm9tICcuL0NhcmRKb2InO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRKb2JNaW5pbWFsIH0gZnJvbSAnLi9DYXJkSm9iTWluaW1hbCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZEpvYlRhZyB9IGZyb20gJy4vQ2FyZEpvYlRhZyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZEpvYkNvbXBhbnkgfSBmcm9tICcuL0NhcmRKb2JDb21wYW55JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBBY2NvcmRpb24gfSBmcm9tICcuL0FjY29yZGlvbic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVyb1NoYXBlZCB9IGZyb20gJy4vSGVyb1NoYXBlZCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZFByb2R1Y3QgfSBmcm9tICcuL0NhcmRQcm9kdWN0JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXAgfSBmcm9tICcuL01hcCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVyb0JhY2tncm91bmQgfSBmcm9tICcuL0hlcm9CYWNrZ3JvdW5kJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZXJvU2lkZUltYWdlIH0gZnJvbSAnLi9IZXJvU2lkZUltYWdlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkUHJvbW8gfSBmcm9tICcuL0NhcmRQcm9tbyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZENhdGVnb3J5TGluayB9IGZyb20gJy4vQ2FyZENhdGVnb3J5TGluayc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVyb1NpbXBsZUJhY2tncm91bmQgfSBmcm9tICcuL0hlcm9TaW1wbGVCYWNrZ3JvdW5kJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkUHJpY2luZ1N0YW5kYXJkIH0gZnJvbSAnLi9DYXJkUHJpY2luZ1N0YW5kYXJkJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXJhbGxheCB9IGZyb20gJy4vUGFyYWxsYXgnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRhY3RGb3JtIH0gZnJvbSAnLi9Db250YWN0Rm9ybSc7IiwiZXhwb3J0IGNvbnN0IEFwaVJvdXRlcyA9IHtcclxuICAgICAgICAgU0lHTlVQOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvYXV0aFwiLFxyXG4gICAgICAgICAgIHVybDogXCIvc2lnbnVwXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBMT0dJTjoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL2xvZ2luXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBSRVNFVFBBU1NXT1JEOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvYXV0aFwiLFxyXG4gICAgICAgICAgIHVybDogXCIvcmVzZXQtcGFzc3dvcmRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEZPUkdPVFBBU1NXT1JEOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvYXV0aFwiLFxyXG4gICAgICAgICAgIHVybDogXCIvZm9yZ290LXBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBHRVRVU0VSREVUQUlMUzoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL2RldGFpbHNcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBVU0VSREVUQUlMU1VQREFURToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL3VwZGF0ZVwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIFVTRVJQQVNTV09SRFVQREFURToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL2NoYW5nZS1wYXNzd29yZFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIFVTRVJGT1JHT1RQQVNTV09SRFVQREFURToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL2ZvcmdvdC1wYXNzd29yZFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgQ09VUlNFTElTVDoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2NvdXJzZS10b3BpYy8/bGltaXQ9YWxsXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBDT1VSU0VERVRBSUxTOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvY291cnNlLXRvcGljXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi86aWRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgQ09VUlNFREVUQUlMU0FVVEg6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9jb3Vyc2UtdG9waWNcIixcclxuICAgICAgICAgICB1cmw6IFwiLzppZFwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEFQUExZQ09VUE9OOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvdHJhbnNhY3Rpb25cIixcclxuICAgICAgICAgICB1cmw6IFwiL2FwcGx5UHJvbW9cIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgTUFLRVBBWU1FTlQ6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi90cmFuc2FjdGlvblwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgUEFZTUVOVEhJU1RPUlk6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi90cmFuc2FjdGlvblwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBQVVJDSEFTRURDT1VSU0U6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9jb3Vyc2VcIixcclxuICAgICAgICAgICB1cmw6IFwiL3B1cmNoYXNlZC1jb3Vyc2VcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBDRVJUSUZJQ0FURVJFUVVFU1Q6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9jZXJ0aWZpY2F0ZS1yZXF1ZXN0XCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBCTE9HTElTVDoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2Jsb2dcIixcclxuICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEJMT0dERVRBSUw6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9ibG9nXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi86aWRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUVU5JVkVSU0lUWToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2F1dGhcIixcclxuICAgICAgICAgICB1cmw6IFwiL3VuaXZlcnNpdGllc1wiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBHRVRDT1JQT1JBVEU6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi9jb3Jwb3JhdGlvblwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBDT05UQUNUX1VTOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvZW50ZXJwcmlzZVwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIFBSRVNTX1JFTEVBU0U6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9wcmVzcy1yZWxlYXNlXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBQUkVTU19ERVRBSUxTOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvcHJlc3MtcmVsZWFzZVwiLFxyXG4gICAgICAgICAgIHVybDogXCIvOmlkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIEdFVF9MTVNEQVRBX0NPVVJTRToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL3RhbGVudExtc1wiLFxyXG4gICAgICAgICAgIHVybDogXCIvY291cnNlc1wiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBHRVRfTE1TREFUQV9DQVRFR09SWToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL3RhbGVudExtc1wiLFxyXG4gICAgICAgICAgIHVybDogXCIvY2F0ZWdvcnlcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgTkVXU0xFVFRFUlNVQlNDUklCRToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL25ld3MtbGV0dGVyXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUU09DSUFMTElOS0VTOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvc2V0dGluZ1wiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUUEFZTUVOVENFUlRJRklDQVRFREVUQUlMUzoge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2NlcnRpZmljYXRlLXJlcXVlc3QvcGF5bWVudC1pbmZvXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIi86aWRcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgTUFLRVBBWU1FTlRDRVJUSUZJQ0FURToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL2NlcnRpZmljYXRlLXJlcXVlc3QvcGF5bWVudFwiLFxyXG4gICAgICAgICAgIHVybDogXCIvOmlkXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBDRVJUSUZJQ0FURV9EQVRBOiB7XHJcbiAgICAgICAgICAgc2VydmljZTogXCIvY21zXCIsXHJcbiAgICAgICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBGUk9OVF9QQUdFX0RBVEE6IHtcclxuICAgICAgICAgICBzZXJ2aWNlOiBcIi9tYXJrZXQtY29udGVudFwiLFxyXG4gICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgR0VUX1RFQU1fREFUQToge1xyXG4gICAgICAgICAgIHNlcnZpY2U6IFwiL3RlYW1cIixcclxuICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICB9O1xyXG4iLCJjb25zdCBBcHBDb25maWcgPSB7XHJcbiAgICAvLyBGSUxFU19FTkRQT0lOVDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJTEVTX0VORFBPSU5ULFxyXG4gICAgLy8gQVBQX0VORFBPSU5UOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRU5EUE9JTlQsXHJcbiAgICBBUElfRU5EUE9JTlQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCxcclxuICAgIElNQUdFX1VSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU1BR0VfVVJMLFxyXG4gICAgU0lURV9OQU1FOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSVRFX05BTUVcclxuICAgIC8vIEFQSV9WRVJTSU9OOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX1ZFUlNJT04sXHJcbiAgICAvLyBERUZBVUxUX0RBVEVfRk9STUFUOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREVGQVVMVF9EQVRFX0ZPUk1BVCxcclxuICB9O1xyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb25maWc7IiwiZXhwb3J0ICogZnJvbSAnLi9BcGlSb3V0ZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FwcENvbmZpZyc7IiwiaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBFcnJvckhhbmRsZXJIZWxwZXIgfSBmcm9tIFwiLi9FcnJvckhhbmRsZXJIZWxwZXJcIjtcclxuaW1wb3J0IHsgU3VjY2Vzc0hhbmRsZXJIZWxwZXIgfSBmcm9tIFwiLi9TdWNjZXNzSGFuZGxlckhlbHBlclwiO1xyXG5pbXBvcnQgQXBwQ29uZmlnICBmcm9tIFwiLi4vY29uZmlnL2FwcENvbmZpZ1wiO1xyXG4vKipcclxuICogQXBpSGVscGVyIENsYXNzIC0gRm9yIG1ha2luZyBBcGkgUmVxdWVzdHNcclxuICogXHJcbiAqL1xyXG5sZXQgQ2FuY2VsVG9rZW4gPSBBeGlvcy5DYW5jZWxUb2tlbjtcclxubGV0IGNhbmNlbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGlIZWxwZXIge1xyXG4gIF9wb3J0YWxHYXRld2F5O1xyXG4gIF9hcGlWZXJzaW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3BvcnRhbEdhdGV3YXkgPSBBcHBDb25maWcuQVBJX0VORFBPSU5UO1xyXG4gICAgdGhpcy5fYXBpVmVyc2lvbiA9IFwiXCI7XHJcbiAgICB0aGlzLnNvdXJjZSA9IEF4aW9zLkNhbmNlbFRva2VuLnNvdXJjZSgpO1xyXG4gICAgdGhpcy5jYW5jZWxUb2tlbiA9IHRoaXMuc291cmNlLnRva2VuO1xyXG4gIH1cclxuICBzZXRIb3N0ID0gKGhvc3QpID0+IHtcclxuICAgIHRoaXMuX3BvcnRhbEdhdGV3YXkgPSBob3N0O1xyXG4gIH07XHJcbiAgc2V0QXBpVmVyc2lvbiA9ICh2ZXJzaW9uKSA9PiB7XHJcbiAgICB0aGlzLl9hcGlWZXJzaW9uID0gdmVyc2lvbjtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIEZldGNoZXMgZnJvbSB0aGUgR2F0ZXdheSBkZWZpbmVkIGJ5IHRoZSBpbnN0YW50aWF0ZWQgb2JqZWN0LiBBY2NlcHRzIDxUPiBhcyBvdXRwdXQgb2JqZWN0LlxyXG4gICAqIEBleGFtcGxlIDxjYXB0aW9uPlwiL0F1dGgvVXNlckFjY291bnRcIiwgXCIvR2V0Q3VycmVudFVzZXJcIiwgXCJHRVRcIiwgXCJKV1QgQ29udGVudFwiPC9jYXB0aW9uPlxyXG4gICAqIEBwYXJhbSB7c2VydmljZX0gc2VydmljZSAtIHdhbnRpbmcgdG8gYmUgYWNjZXNzIGV4LiBcIlVzZXJBdXRoL0F1dGhcIlxyXG4gICAqIEBwYXJhbSB7ZW5kcG9pbnR9IGVuZHBvaW50IC0geW91IHdpc2ggdG8gY2FsbCBleC4gXCIvTG9naW5cIlxyXG4gICAqIEBwYXJhbSB7bWV0aG9kfSBtZWhvdGQgLSBtZXRob2QgKEdFVCwgVVBEQVRFLCBERUxFVEUsIFBPU1QpXHJcbiAgICogQHBhcmFtIHtqd3R9IEpXVCAtIEpTT04gV2ViIFRva2VuIChPcHRpb25hbClcclxuICAgKiBAcGFyYW0ge3F1ZXJ5T3B0aW9uc30gUXVlcnkgLSBxdWVyeSBvcHRpb25zIGZvciBcIkdFVFwiIG1ldGhvZHMgKE9wdGlvbmFsKVxyXG4gICAqIEBwYXJhbSB7Ym9keX0gYm9keSAtIEpTT04gYm9keSBmb3IgXCJVUERBVEUsIERFTEVURSBhbmQgUE9TVFwiIG1ldGhvZHMgKE9wdGlvbmFsKVxyXG4gICAqL1xyXG4gIGFzeW5jIEZldGNoRnJvbVNlcnZlcihcclxuICAgIHNlcnZpY2UsXHJcbiAgICBlbmRwb2ludCxcclxuICAgIG1ldGhvZCxcclxuICAgIGF1dGhlbnRpY2F0ZWQgPSBmYWxzZSxcclxuICAgIGF1dGhUb2tlbixcclxuICAgIHF1ZXJ5T3B0aW9ucyA9IHVuZGVmaW5lZCxcclxuICAgIGJvZHkgPSB1bmRlZmluZWQsXHJcbiAgICByZXNwb25zZVR5cGUsXHJcbiAgKSB7XHJcbiAgICBsZXQgdXJsID0gdGhpcy5fcG9ydGFsR2F0ZXdheSArIHNlcnZpY2UgKyBlbmRwb2ludDtcclxuICAgIGxldCBoZWFkZXJzID0geyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9O1xyXG4gICAgaWYgKGF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgLy8gY29uc3Qgc3RvcmFnZVNlc3Npb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICBjb25zdCBzdG9yYWdlU2Vzc2lvbiA9IGF1dGhUb2tlbjtcclxuICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gc3RvcmFnZVNlc3Npb247XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBtZXRob2QgPSBtZXRob2QudG9Mb3dlckNhc2UoKTtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBkYXRhOiBib2R5LFxyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiBxdWVyeU9wdGlvbnMsXHJcbiAgICAgICAgY2FuY2VsVG9rZW46IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XHJcbiAgICAgICAgICAvLyBBbiBleGVjdXRvciBmdW5jdGlvbiByZWNlaXZlcyBhIGNhbmNlbCBmdW5jdGlvbiBhcyBhIHBhcmFtZXRlclxyXG4gICAgICAgICAgY2FuY2VsID0gYztcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2sgPT09IGZhbHNlIHx8IHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgICAgbGV0IGVycm9yT2JqZWN0ID0ge1xyXG4gICAgICAgICAgY29kZTogcmVzcG9uc2Uuc3RhdHVzLFxyXG4gICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aHJvdyBlcnJvck9iamVjdDtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IFN1Y2Nlc3NIYW5kbGVySGVscGVyKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YS5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChBeGlvcy5pc0NhbmNlbChlcnIpIHx8ICFlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaXNFcnJvcjogdHJ1ZSxcclxuICAgICAgICAgIGVycm9yOiBcIlJlcXVlc3QgY2FuY2VsbGVkXCIsXHJcbiAgICAgICAgICBtZXNzYWdlczogZXJyLm1lc3NhZ2UgPT09IFwiY2FuY2VsXCIgPyBbXSA6IFtcIlJlcXVlc3QgY2FuY2VsbGVkXCJdLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JIZWxwZXIgPSBuZXcgRXJyb3JIYW5kbGVySGVscGVyKGVyci5yZXNwb25zZSk7XHJcbiAgICAgICAgcmV0dXJuIGVycm9ySGVscGVyLmVycm9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIENhbmNlbHMgdGhlIGxhc3QgcmVxdWVzdC5cclxuICAgKi9cclxuICBjYW5jZWxSZXF1ZXN0ID0gKGVycikgPT4ge1xyXG4gICAgY2FuY2VsICYmIGNhbmNlbChlcnIpO1xyXG4gIH07XHJcbn1cclxuIiwiLyoqXHJcbiAqIEVycm9ySGFuZGxlckhlbHBlciBDbGFzcyAtIEZvciBtYW5hZ2luZyBlcnJvcnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBFcnJvckhhbmRsZXJIZWxwZXIge1xyXG5cdHJhd0Vycm9yO1xyXG5cdGVycm9yID0ge1xyXG5cdFx0Y29kZTogNTAwLFxyXG5cdFx0aXNFcnJvcjogdHJ1ZSxcclxuXHRcdHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuXHRcdGVycm9yOiAnVW5rbm93biBlcnJvcicsXHJcblx0XHRtZXNzYWdlczogW10sXHJcblx0XHRkYXRhOiB1bmRlZmluZWQsXHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoZXJyKSB7XHJcblx0XHR0aGlzLnJhd0Vycm9yID0gZXJyO1xyXG5cdFx0dGhpcy5zZXRFcnJvcigpO1xyXG5cdH1cclxuXHJcblx0c2V0RXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IFxyXG5cdFx0dGhpcy5yYXdFcnJvciAmJiB0aGlzLnJhd0Vycm9yLmNvZGVcclxuXHRcdFx0PyB0aGlzLnJhd0Vycm9yLmNvZGVcclxuICAgICAgICAgICAgOiB0aGlzLmVycm9yLmNvZGU7XHJcblx0XHRcdHRoaXMuZXJyb3IuY29kZSA9IHRoaXMucmF3RXJyb3Iuc3RhdHVzID09PSA0MDIgPyB0aGlzLnJhd0Vycm9yLnN0YXR1cyA6IChjb2RlID8gY29kZSA6IDQwMCk7XHJcblx0XHR0aGlzLmVycm9yLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XHJcblx0XHR0aGlzLmVycm9yLm1lc3NhZ2VzID0gW107XHJcblx0XHJcblx0XHRpZiAodGhpcy5yYXdFcnJvci5kYXRhICYmIHR5cGVvZiB0aGlzLnJhd0Vycm9yLmRhdGEgPT09ICdvYmplY3QnICYmIHRoaXMucmF3RXJyb3IuZGF0YS5tZXNzYWdlKSB7XHJcblx0XHRcdGlmICgodGhpcy5yYXdFcnJvciAmJiB0aGlzLnJhd0Vycm9yLmRhdGEubWVzc2FnZSA9PT0gXCJUb2tlbiBoYXMgZXhwaXJlZFwiKSB8fCAodGhpcy5yYXdFcnJvciAmJiB0aGlzLnJhd0Vycm9yLmRhdGEubWVzc2FnZSA9PT0gXCJVbmF1dGhvcml6ZWQsIEludmFsaWQgdG9rZW4hXCIpKXtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG5cdFx0XHR9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IubWVzc2FnZXMucHVzaCh0aGlzLnJhd0Vycm9yLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH1cclxuXHRcdGlmICghdGhpcy5lcnJvci5tZXNzYWdlcy5sZW5ndGgpIHtcclxuXHRcdFx0dGhpcy5lcnJvci5lcnJvciA9ICdVbmtub3duJztcclxuXHRcdFx0dGhpcy5lcnJvci5tZXNzYWdlcyA9IFtudWxsXTtcclxuXHRcdH1cclxuXHR9O1xyXG59IiwiLyoqXHJcbiAqIFN1Y2Nlc3NIYW5kbGVySGVscGVyIENsYXNzIC0gRm9yIG1hbmFnaW5nIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdWNjZXNzSGFuZGxlckhlbHBlciB7XHJcbiAgICByYXdEYXRhO1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgY29kZTogMjAwLFxyXG4gICAgICBpc0Vycm9yOiBmYWxzZSxcclxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICBlcnJvcjogdW5kZWZpbmVkLFxyXG4gICAgICBtZXNzYWdlczogW10sXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICB0aGlzLnJhd0RhdGEgPSBkYXRhO1xyXG4gICAgICB0aGlzLnNldFN1Y2NjZXNzKCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzZXRTdWNjY2VzcyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgbWVzc2FnZXMgPSBbXTtcclxuICBcclxuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnJhd0RhdGEpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucmF3RGF0YVtpXSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgbWVzc2FnZXMucHVzaCh0aGlzLnJhd0RhdGFbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhdGEuZGF0YSA9IHRoaXMucmF3RGF0YTtcclxuICAgICAgdGhpcy5kYXRhLm1lc3NhZ2VzID0gbWVzc2FnZXM7XHJcbiAgICB9O1xyXG4gIH0iLCJleHBvcnQgKiBmcm9tICcuL0FwaUhlbHBlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU3VjY2Vzc0hhbmRsZXJIZWxwZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0Vycm9ySGFuZGxlckhlbHBlcic7IiwiaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgbWFrZVN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlcyc7XHJcbmltcG9ydCB1c2VUaGVtZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvdXNlVGhlbWUnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5pbXBvcnQgeyBIZXJvQmFja2dyb3VuZCwgU2VjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdEh0bWxQYXJzZXIgZnJvbSBcInJlYWN0LWh0bWwtcGFyc2VyXCI7XHJcbmltcG9ydCBiYW5uZXJCb3R0b20gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9hc3NldHMvYmFubmVyLXNoYXBlLnBuZ1wiO1xyXG4vLyBGb3IgZ2V0IENtcyBEYXRhXHJcbmltcG9ydCBBcHBDb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9hcHBDb25maWdcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGxvYWRlcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBtaW5IZWlnaHQ6IFwiNzAwcHhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICB9LFxyXG4gIGNvdXJzZURldGFpbFdyYXA6IHtcclxuICAgIG1pbkhlaWdodDogXCI4MDBweFwiLFxyXG4gIH0sXHJcbiAgc2VjdGlvbkRlc2NyaXB0aW9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlWzkwMF0sXHJcbiAgfSxcclxuICBzZWN0aW9uQWx0ZXJuYXRlRm9ybToge1xyXG4gICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgJHt0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJ9IDMwMHB4LCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrfSAwJSlgLFxyXG4gIH0sXHJcbiAgdGV4dFdoaXRlOiB7XHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgbWF4V2lkdGg6IFwiODUlXCIsXHJcbiAgICBtYXJnaW46IFwiYXV0byBhdXRvXCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMjBweCAyMHB4IDBweCAtM3B4ICNkNmQ2ZDZcIixcclxuICAgIGJvcmRlcjogXCI1cHggc29saWQgI2ZmZlwiLFxyXG4gIH0sXHJcbiAgYnRuVmlkZW86IHtcclxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwcHhcIixcclxuICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgIG1hcmdpblRvcDogXCIxNTBweFwiLFxyXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICB9LFxyXG4gIGZvbnRXZWlnaHQ3MDA6IHtcclxuICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXHJcbiAgfSxcclxuICBtYXJnaW5Ub3A6IHtcclxuICAgIG1hcmdpblRvcDogXCIxMnB4XCIsXHJcbiAgfSxcclxuICB1bF9saXN0aW5nczoge1xyXG4gICAgbWFyZ2luVG9wOiBcIjEycHhcIixcclxuICAgIFwiJiBsaVwiOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgICAgbWFyZ2luQm90dG9tOiA1LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbG9yX2xpZ2h0X2JsdWU6IHtcclxuICAgIG1hcmdpblRvcDogXCIxMnB4XCIsXHJcbiAgICBmb250U2l6ZTogXCIxN3B4ICFpbXBvcnRhbnRcIixcclxuICAgIG1hcmdpbnRUb3A6IFwiMTJweFwiLFxyXG4gICAgY29sb3I6IFwiIzg1ODViZCAhaW1wb3J0YW50XCIsXHJcbiAgfSxcclxuICBiYW5uZXJJbWFnZToge1xyXG4gICAgd2lkdGg6IFwiMzUwcHhcIixcclxuICAgIG1pbkhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNDQ0NcIixcclxuICAgIGJveFNoYWRvdzogXCIwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpXCIsXHJcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgdG9wOiBcIjYwcHhcIixcclxuICAgIFwiJjo6YWZ0ZXJcIjoge1xyXG4gICAgICBjb250ZW50OiAnIFwiXCIgJyxcclxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICB3aWR0aDogXCIxNTBweFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMTUwcHhcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEQ0RDRENcIixcclxuICAgICAgdG9wOiBcIi02NXB4XCIsXHJcbiAgICAgIHJpZ2h0OiBcIi03NXB4XCIsXHJcbiAgICAgIHpJbmRleDogXCItMVwiLFxyXG4gICAgfSxcclxuICAgIFwiJjo6YmVmb3JlXCI6IHtcclxuICAgICAgY29udGVudDogJyBcIlwiICcsXHJcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgd2lkdGg6IFwiMTUwcHhcIixcclxuICAgICAgaGVpZ2h0OiBcIjE1MHB4XCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRENEQ0RDXCIsXHJcbiAgICAgIGJvdHRvbTogXCItNjVweFwiLFxyXG4gICAgICBsZWZ0OiBcIi03NXB4XCIsXHJcbiAgICAgIHpJbmRleDogXCItMVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlcm9Db250YWluZXI6IHtcclxuICAgIG1pbldpZHRoOiBcIjEyMzZweFwiLFxyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgZm9udFNpemU6IFwiMjRweFwiLFxyXG4gICAgd2lkdGg6IFwiMTAwcHhcIixcclxuICAgIGhlaWdodDogXCIxMDBweFwiLFxyXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gIH0sXHJcbiAgY29udGVudFNlY3Rpb246IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNSwgNiksXHJcbiAgICBcIiYgcFwiOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgIH0sXHJcbiAgICBcIiYgaDFcIjoge1xyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjI4cHhcIixcclxuICAgICAgcGFkZGluZ0JvdHRvbTogXCIzMHB4XCIsXHJcbiAgICAgIFwiJjo6YWZ0ZXJcIjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogXCI1cHggc29saWQgIzUxMjBGRlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiJiB1bFwiOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiBcIjMwcHhcIixcclxuICAgIH0sXHJcbiAgICBcIiYgbGlcIjoge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgZm9udFNpemU6IFwiMThweFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25IZWFkZXI6IHtcclxuICAgIHBhZGRpbmdCb3R0b206IFwiMzBweFwiLFxyXG4gIH0sXHJcbiAgY29udGVudFNlY3Rpb25SZXZlcnNlOiB7XHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBcIiYgcFwiOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgICAgbGluZUhlaWdodDogXCIyOHB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnRuQmxvY2s6IHtcclxuICAgIHBhZGRpbmc6IFwiMjBweCAwIDBcIixcclxuICB9LFxyXG4gIHB1cmNoYXNlQnRuOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgI0ZFNkI4QiAzMCUsICNGRjhFNTMgOTAlKVwiLFxyXG4gICAgcGFkZGluZzogXCIxMHB4IDMwcHhcIixcclxuICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiOTAwXCIsXHJcbiAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICBtaW5XaWR0aDogXCIyMDBweFwiLFxyXG4gIH0sXHJcbiAgc2VjdGlvbkRlc2NyaXB0aW9uOiB7XHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBcIiYgaDFcIjoge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjMwcHhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgbWluSGVpZ2h0OiBcIjM1MHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgcGFkZGluZzogXCIzMHB4XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICAgIFwiJiBoMVwiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIFwiJjo6YWZ0ZXJcIjoge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcIiBcIicsXHJcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgIHdpZHRoOiBcIjE1MHB4XCIsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjNweCBzb2xpZCAjNTEyMGZmXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICBib3R0b206IFwiMTVweFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNvY2lhbGxpbmtfbmF2OiB7XHJcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgcmlnaHQ6IFwiMFwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcclxuICAgIHpJbmRleDogXCIxMFwiLFxyXG4gICAgZmxleEZsb3c6IFwiY29sdW1uXCIsXHJcbiAgICB3aWR0aDogXCI1MHB4XCIsXHJcbiAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxyXG4gICAgcGFkZGluZzogXCI1cHggMFwiLFxyXG4gICAgYm94U2hhZG93OiBcIjAgMCAzcHggIzE4MDI2N2I4XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICB3aWR0aDogNDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc29jaWFsbGlua19saToge1xyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgZm9udFNpemU6IFwiMjRweFwiLFxyXG4gICAgY29sb3I6IFwiIzAwMFwiLFxyXG4gICAgcGFkZGluZzogXCIxMHB4IDBcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgIHBhZGRpbmc6IFwiOHB4IDBcIixcclxuICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBhXCI6IHtcclxuICAgICAgY29sb3I6IFwiIzAwMFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBwYWRkaW5nQm90dG9tOiBcIjMwcHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXHJcbiAgICBcIiY6OmFmdGVyXCI6IHtcclxuICAgICAgY29udGVudDogJ1wiIFwiJyxcclxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICB3aWR0aDogXCIxNTBweFwiLFxyXG4gICAgICBib3JkZXJCb3R0b206IFwiM3B4IHNvbGlkICM1MTIwZmZcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgYm90dG9tOiBcIjE1cHhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBibG9nY2hhaW5faGVhZGluZzoge1xyXG4gICAgbWFyZ2luQm90dG9tOiBcIjE1cHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiMjVweFwiLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZF9wYXJhOiB7XHJcbiAgICBmb250U2l6ZTogXCIxNXB4XCIsXHJcbiAgICBjb2xvcjogXCIjODU4NWJkICFpbXBvcnRhbnRcIixcclxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgIGxpbmVIZWlnaHQ6IFwiMS45ZW1cIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMS40ZW1cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkX2ljb25zOiB7XHJcbiAgICBmb250U2l6ZTogXCI0MHB4XCIsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzUxMjBmZlwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIHBhZGRpbmc6IFwiMTZweFwiLFxyXG4gICAgICBmb250U2l6ZTogXCIyOHB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1nX2ZsdWlkOiB7XHJcbiAgICBtYXhXaWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgaGVpZ2h0OiA0NzIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgIG9iamVjdFBvc2l0aW9uOiBcImNlbnRlciB0b3BcIixcclxuICAgICAgbWFyZ2luQm90dG9tOiAxMixcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltZ19jZXJ0aWZpY2F0ZToge1xyXG4gICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjM1MHB4XCIsXHJcbiAgICBib3JkZXI6IFwiNXB4IHNvbGlkICNmZmZcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgIGhlaWdodDogXCIzNTBweFwiLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIGhlaWdodDogXCIyODBweFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJhbm5lcldyYXA6IHtcclxuICAgIHBhZGRpbmdSaWdodDogMjAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICBwYWRkaW5nUmlnaHQ6IDQwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZ1bGxJbWFnZToge1xyXG4gICAgXCImID4gc3BhblwiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG9yZGVyU3A6IHtcclxuICAgIG9yZGVyOiAxLFxyXG4gIH0sXHJcbiAgY2VydGlmaWNhdGVXcmFwOiB7XHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6IDAsXHJcbiAgICAgIHBhZGRpbmdSaWdodDogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjZXJ0aWZpY2F0ZUltZ1dyYXA6IHtcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICB9LFxyXG4gIGJhbm5lckJvdHRvbToge1xyXG4gICAgXCImID4gc3BhblwiOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2sgIWltcG9ydGFudFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHdoeUJsb2NrY2hhaW46IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNSwgNiwgMiksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDUsIDQsIDIpLFxyXG4gICAgfSxcclxuICAgIFwiJiAuTXVpUGFwZXItZWxldmF0aW9uMlwiOiB7XHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMzBweCAwIDBcIixcclxuICAgICAgbWluSGVpZ2h0OiAzMzAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGJfNjA6IHtcclxuICAgIHBhZGRpbmdCb3R0b206IDYwLFxyXG4gIH0sXHJcbiAgc3BfcF8wOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZvbnRTaXplXzE4OiB7XHJcbiAgICBmb250U2l6ZTogMTgsXHJcbiAgfSxcclxuICBjZXJ0aWZpY2F0ZVdyYXBwZXI6IHtcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICBwYWRkaW5nOiAyMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdWJUaXRsZToge1xyXG4gICAgXCImIGgxXCI6IHtcclxuICAgICAgZm9udFNpemU6IFwiMS40OTkzcmVtXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIHBcIjoge1xyXG4gICAgICBmb250U2l6ZTogXCIxOHB4XCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXHJcbiAgICB9LFxyXG4gICAgXCImIHAgPiBzcGFuXCI6IHtcclxuICAgICAgZm9udFNpemU6IFwiMThweCAhaW1wb3J0YW50XCIsXHJcbiAgICAgIGZvbnRGYW1pbHk6IFwiTGF0byAhaW1wb3J0YW50XCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwICFpbXBvcnRhbnRcIixcclxuICAgICAgY29sb3I6IFwiIzJkMzc0OCAhaW1wb3J0YW50XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2VydGlmaWNhdGVEZXRhaWxzOiB7XHJcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIH0sXHJcbiAgdGV4dENlbnRlcjoge1xyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgbGlua1dyYXBwZXI6IHtcclxuICAgIFwiJiBhXCI6IHtcclxuICAgICAgY29sb3I6IFwiIzUxMjBmZlwiLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tbW9uTGlzdDoge1xyXG4gICAgXCImIGxpXCI6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHggIWltcG9ydGFudFwiXHJcbiAgICB9XHJcbiAgfSxcclxuICByb3VuZEljb25JbWFnZXM6IHtcclxuICAgIGhlaWdodDogXCI4MHB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMTAwJVwiLFxyXG4gICAgd2lkdGg6IFwiODBweFwiXHJcbiAgfSxcclxuICB3b3JkV3JhcHBlcjp7XHJcbiAgICB3b3JkQnJlYWs6XCJicmVhay1hbGxcIlxyXG4gIH0sXHJcbiAgbWFyZ2luVG9wOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiMTVweFwiXHJcbiAgfSxcclxuICBwYWRkaW5nWDpcclxuICB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgIHBhZGRpbmdMZWZ0OlwiMTVweCAhaW1wb3J0YW50XCJcclxuICAgIH0sXHJcbiAgICBcclxuICB9XHJcbn0pKTtcclxuXHJcbmNvbnN0IEVudGVycHJpc2UgPSAoe2Ntc0RhdGF9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc01kID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpLCB7XHJcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcclxuICB9KTtcclxuICAvLyBGb3IgRmV0Y2ggQ01TIERhdGFcclxuICBjb25zdCBbZ2V0VGVtcGxhdGVEYXRhLCBzZXRHZXRUZW1wbGF0ZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgLy8gRm9yIEdldCBUZW1wbGF0ZSBEYXRhXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjbXNEYXRhICYmIGNtc0RhdGEubGVuZ3RoKSB7XHJcbiAgICAgIGxldCBnZXREYXRhID0gY21zRGF0YS5maWx0ZXIoKGUpID0+IGUudGl0bGVTbHVnID09PSBcImVudGVycHJpc2VcIik7XHJcbiAgICAgIHNldEdldFRlbXBsYXRlRGF0YSguLi5nZXREYXRhKTtcclxuICAgIH1cclxuICB9LCBbY21zRGF0YV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3Vyc2VEZXRhaWxXcmFwfT5cclxuICAgICAgPD5cclxuICAgICAgICA8SGVyb0JhY2tncm91bmQgYmFja2dyb3VuZENvbG9yPXtcIiM1MTIwRkZcIn0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17aXNNZCA/IDQgOiAyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGRhdGEtYW9zPSdmYWRlLXVwJyBjbGFzc05hbWU9e2NsYXNzZXMuYmFubmVyV3JhcH0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9e2lzTWQgPyBcImgzXCIgOiBcImg0XCJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50ZXh0V2hpdGUsIGNsYXNzZXMuZm9udFdlaWdodDcwMCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSXMgWW91ciBCdXNpbmVzcyBCbG9ja2NoYWluLXJlYWR5P1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD17aXNNZCA/IFwiaDZcIiA6IFwiYm9keTJcIn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRleHRXaGl0ZSwgY2xhc3Nlcy5mb250V2VpZ2h0NzAwKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHZXQgYWhlYWQgYnkgYmVjb21pbmcgYW4gZXhwZXJ0IGluIHRoaXMgd29ybGQtY2hhbmdpbmdcclxuICAgICAgICAgICAgICAgIHRlY2hub2xvZ3kuIEdpdmUgeW91ciB0ZWFtcyB0aGUgY29tcGV0aXRpdmUgZWRnZSB3aXRoXHJcbiAgICAgICAgICAgICAgICBjdXN0b21pemFibGUgYW5kIGZ1bGx5LWNlcnRpZmllZCBsZWFybmluZyBzb2x1dGlvbnMgZnJvbVxyXG4gICAgICAgICAgICAgICAgQ29pbmlmaWRlLlxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvSGVyb0JhY2tncm91bmQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFubmVyQm90dG9tfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2Jhbm5lckJvdHRvbX0gc3JjU2V0PXtiYW5uZXJCb3R0b219IGFsdD0nYmFubmVyLWJvdHRvbScgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMud2h5QmxvY2tjaGFpbn0+XHJcbiAgICAgICAgICB7Z2V0VGVtcGxhdGVEYXRhID9cclxuICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17Mn0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD17XCJoNFwifVxyXG4gICAgICAgICAgICAgICAgYWxpZ249e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj0ndGV4dFByaW1hcnknXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ2NoYWluX2hlYWRpbmd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2dldFRlbXBsYXRlRGF0YSA/IGdldFRlbXBsYXRlRGF0YS5ibG9ja1RpdGxlMSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggcHQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgYWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7QXBwQ29uZmlnLklNQUdFX1VSTH0vJHtnZXRUZW1wbGF0ZURhdGEuYmxvY2tJbWFnZTV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvdW5kSWNvbkltYWdlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiY2FyZCBpbWFnZTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggcHQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSd0ZXh0UHJpbWFyeSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZm9udFNpemVfMTh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VGVtcGxhdGVEYXRhID8gUmVhY3RIdG1sUGFyc2VyKGdldFRlbXBsYXRlRGF0YS5ibG9jazUpIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggcHQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgYWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7QXBwQ29uZmlnLklNQUdFX1VSTH0vJHtnZXRUZW1wbGF0ZURhdGEuYmxvY2tJbWFnZTZ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvdW5kSWNvbkltYWdlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiY2FyZCBpbWFnZTVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggcHQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSd0ZXh0UHJpbWFyeSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZm9udFNpemVfMTh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VGVtcGxhdGVEYXRhID8gUmVhY3RIdG1sUGFyc2VyKGdldFRlbXBsYXRlRGF0YS5ibG9jazYpIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggcHQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgYWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7QXBwQ29uZmlnLklNQUdFX1VSTH0vJHtnZXRUZW1wbGF0ZURhdGEuYmxvY2tJbWFnZTd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvdW5kSWNvbkltYWdlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiY2FyZCBpbWFnZTVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggcHQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSd0ZXh0UHJpbWFyeSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZm9udFNpemVfMTh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VGVtcGxhdGVEYXRhID8gUmVhY3RIdG1sUGFyc2VyKGdldFRlbXBsYXRlRGF0YS5ibG9jazcpIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudFNlY3Rpb259PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e2lzTWQgPyA0IDogMn0+XHJcbiAgICAgICAgICAgIHtnZXRUZW1wbGF0ZURhdGEgJiYgZ2V0VGVtcGxhdGVEYXRhLmJsb2NrSW1hZ2UxLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9IGRhdGEtYW9zPSdmYWRlLXVwJz5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifVxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMTAwJVwifVxyXG4gICAgICAgICAgICAgICAgICBwbD17aXNNZCA/IDIgOiAwfVxyXG4gICAgICAgICAgICAgICAgICBwcj17aXNNZCA/IDIgOiAwfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBcHBDb25maWcuSU1BR0VfVVJMfS8ke2dldFRlbXBsYXRlRGF0YS5ibG9ja0ltYWdlMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyY1NldD17YCR7QXBwQ29uZmlnLklNQUdFX1VSTH0vJHtnZXRUZW1wbGF0ZURhdGEuYmxvY2tJbWFnZTF9YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9J2dpcmwgZXhwbGFpbmluZydcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nX2ZsdWlkfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAge2dldFRlbXBsYXRlRGF0YSAmJiBnZXRUZW1wbGF0ZURhdGEuYmxvY2sxLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9IGRhdGEtYW9zPSdmYWRlLXVwJz5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIHtSZWFjdEh0bWxQYXJzZXIoZ2V0VGVtcGxhdGVEYXRhLmJsb2NrMSl9XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50U2VjdGlvbn0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17aXNNZCA/IDQgOiAyfT5cclxuICAgICAgICAgICAge2dldFRlbXBsYXRlRGF0YSAmJiBnZXRUZW1wbGF0ZURhdGEuYmxvY2syLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9IGRhdGEtYW9zPSdmYWRlLXVwJz5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezJ9IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnBhcGVyLGNsYXNzZXMud29yZFdyYXBwZXIpfSA+XHJcbiAgICAgICAgICAgICAgICAgIHtSZWFjdEh0bWxQYXJzZXIoZ2V0VGVtcGxhdGVEYXRhLmJsb2NrMil9XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIHtnZXRUZW1wbGF0ZURhdGEgJiYgZ2V0VGVtcGxhdGVEYXRhLmJsb2NrSW1hZ2UyLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9IGRhdGEtYW9zPSdmYWRlLXVwJz5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifVxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMTAwJVwifVxyXG4gICAgICAgICAgICAgICAgICBwbD17aXNNZCA/IDIgOiAwfVxyXG4gICAgICAgICAgICAgICAgICBwcj17aXNNZCA/IDIgOiAwfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbEltYWdlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBcHBDb25maWcuSU1BR0VfVVJMfS8ke2dldFRlbXBsYXRlRGF0YS5ibG9ja0ltYWdlMn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyY1NldD17YCR7QXBwQ29uZmlnLklNQUdFX1VSTH0vJHtnZXRUZW1wbGF0ZURhdGEuYmxvY2tJbWFnZTJ9YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9J2dpcmwgZXhwbGFpbmluZydcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nX2ZsdWlkfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRTZWN0aW9ufT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXtpc01kID8gNCA6IDJ9PlxyXG4gICAgICAgICAgICB7Z2V0VGVtcGxhdGVEYXRhICYmIGdldFRlbXBsYXRlRGF0YS5ibG9jazMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0gZGF0YS1hb3M9J2ZhZGUtdXAnIGNsYXNzTmFtZT17Y2xhc3Nlcy5vcmRlclNwfT5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIHtSZWFjdEh0bWxQYXJzZXIoZ2V0VGVtcGxhdGVEYXRhLmJsb2NrMyl9XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIHtnZXRUZW1wbGF0ZURhdGEgJiYgZ2V0VGVtcGxhdGVEYXRhLmJsb2NrSW1hZ2UzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9IGRhdGEtYW9zPSdmYWRlLXVwJz5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifVxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMTAwJVwifVxyXG4gICAgICAgICAgICAgICAgICBwbD17aXNNZCA/IDIgOiAwfVxyXG4gICAgICAgICAgICAgICAgICBwcj17aXNNZCA/IDIgOiAwfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbEltYWdlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBcHBDb25maWcuSU1BR0VfVVJMfS8ke2dldFRlbXBsYXRlRGF0YS5ibG9ja0ltYWdlM31gfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyY1NldD17YCR7QXBwQ29uZmlnLklNQUdFX1VSTH0vJHtnZXRUZW1wbGF0ZURhdGEuYmxvY2tJbWFnZTN9YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9J2dpcmwgZXhwbGFpbmluZydcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nX2ZsdWlkfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25XcmFwcGVyfT5cclxuICAgICAgICAgIHtnZXRUZW1wbGF0ZURhdGEgJiYgZ2V0VGVtcGxhdGVEYXRhLmJsb2NrVGl0bGU0Lmxlbmd0aCA/IChcclxuICAgICAgICAgICAgPEJveCBtYj17M30gPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PXtcImg0XCJ9XHJcbiAgICAgICAgICAgICAgICBhbGlnbj17XCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgICAgIGNvbG9yPSd0ZXh0UHJpbWFyeSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9nY2hhaW5faGVhZGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Z2V0VGVtcGxhdGVEYXRhLmJsb2NrVGl0bGU0fVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuY29tbW9uTGlzdCxjbGFzc2VzLnBhZGRpbmdYKX0+XHJcbiAgICAgICAgICAgIHtnZXRUZW1wbGF0ZURhdGEgJiYgZ2V0VGVtcGxhdGVEYXRhLmJsb2NrVGl0bGU0Lmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICBSZWFjdEh0bWxQYXJzZXIoZ2V0VGVtcGxhdGVEYXRhLmJsb2NrNClcclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgIDwvPlxyXG4gICAgICB7LypcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9hZGVyfT5cclxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgfSAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRlcnByaXNlO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9FbnRlcnByaXNlJztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ZhYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL05vU3NyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvWm9vbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3VzZVRoZW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dSaWdodEFsdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiamFyYWxsYXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibGVhZmxldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvdW50dXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaHRtbC1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sZWFmbGV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXR5cGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3aXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2YWxpZGF0ZS5qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9