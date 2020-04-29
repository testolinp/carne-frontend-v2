webpackHotUpdate("static/development/pages/issue.js",{

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./pages/issue.js":
/*!************************!*\
  !*** ./pages/issue.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Global */ "./components/Global.js");
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_Global__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_issue_Herospace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/issue/Herospace */ "./components/issue/Herospace.js");
/* harmony import */ var _components_home_Playlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home/Playlist */ "./components/home/Playlist.js");
/* harmony import */ var _components_issue_Artist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/issue/Artist */ "./components/issue/Artist.js");
var _jsxFileName = "/Users/patriciot/Projects/personal/carne-frontend-v2/pages/issue.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Issue() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Carnemag\xAE | Issues",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
}

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Issue);

/***/ })

})
//# sourceMappingURL=issue.js.b9b311ea6e8665fc5453.hot-update.js.map