webpackHotUpdate("static/development/pages/artist.js",{

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

/***/ "./pages/artist.js":
/*!*************************!*\
  !*** ./pages/artist.js ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Global */ "./components/Global.js");
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_Global__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_artist_Detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/artist/Detail */ "./components/artist/Detail.js");
/* harmony import */ var _components_work_Work__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/work/Work */ "./components/work/Work.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Artist(_ref) {
  var artist = _ref.artist;
  // getWorks(works) {
  //   const model = works.map(el => [`id_in=${el.id}`]).join('&')
  //   fetch(`http://3.21.165.5:1337/works/?${model}`)
  //     .then(response => response.json())
  //     .then( worksList => this.setState({ worksList }))
  // }
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "hola");
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Artist);

/***/ })

})
//# sourceMappingURL=artist.js.f4bdc23ac4dd9bb37b74.hot-update.js.map