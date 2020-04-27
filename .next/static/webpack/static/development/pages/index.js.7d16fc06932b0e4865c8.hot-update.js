webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Global */ "./components/Global.js");
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Global__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_home_Herospace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home/Herospace */ "./components/home/Herospace.js");
/* harmony import */ var _components_home_Playlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home/Playlist */ "./components/home/Playlist.js");
/* harmony import */ var _components_home_Artist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/home/Artist */ "./components/home/Artist.js");
/* harmony import */ var _components_home_Issue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/Issue */ "./components/home/Issue.js");

var _jsxFileName = "/Users/patriciot/Projects/personal/carne-frontend-v2/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function Index(_ref) {
  var _this = this;

  var highlight = _ref.highlight,
      playlist = _ref.playlist,
      featuredArtist = _ref.featuredArtist,
      issues = _ref.issues;
  var sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Carnemag\xAE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_components_home_Herospace__WEBPACK_IMPORTED_MODULE_5__["default"], {
    showLink: "true",
    key: "1",
    issue: highlight,
    currentYear: _components_Global__WEBPACK_IMPORTED_MODULE_3___default.a.getCurrentYear(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx(_components_home_Playlist__WEBPACK_IMPORTED_MODULE_6__["default"], {
    issuePlaylist: playlist,
    currentYear: _components_Global__WEBPACK_IMPORTED_MODULE_3___default.a.getCurrentYear(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sliderSettings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), issues.map(function (issue, index) {
    return __jsx(_components_home_Issue__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: issue.id,
      currentYear: _components_Global__WEBPACK_IMPORTED_MODULE_3___default.a.getCurrentYear(),
      issue: issue,
      current: index + 1,
      issues: issues.length,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    });
  }))));
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7d16fc06932b0e4865c8.hot-update.js.map