webpackHotUpdate("static/development/pages/artist.js",{

/***/ "./pages/artist.js":
/*!*************************!*\
  !*** ./pages/artist.js ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Global */ "./components/Global.js");
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Global__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_artist_Detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/artist/Detail */ "./components/artist/Detail.js");
/* harmony import */ var _components_work_Work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/work/Work */ "./components/work/Work.js");
var _jsxFileName = "/Users/patriciot/Projects/personal/carne-frontend-v2/pages/artist.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Artist(_ref) {
  var artist = _ref.artist;
  // getWorks(works) {
  //   const model = works.map(el => [`id_in=${el.id}`]).join('&')
  //   fetch(`http://3.21.165.5:1337/works/?${model}`)
  //     .then(response => response.json())
  //     .then( worksList => this.setState({ worksList }))
  // }
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, artist && __jsx(_components_artist_Detail__WEBPACK_IMPORTED_MODULE_2__["default"], {
    model: artist,
    currentYear: _components_Global__WEBPACK_IMPORTED_MODULE_1___default.a.getCurrentYear(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }));
}

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Artist);

/***/ })

})
//# sourceMappingURL=artist.js.bab442212882995b5a11.hot-update.js.map