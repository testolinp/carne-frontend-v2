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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_artist_Detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/artist/Detail */ "./components/artist/Detail.js");
/* harmony import */ var _components_artist_Herospace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/artist/Herospace */ "./components/artist/Herospace.js");
/* harmony import */ var _components_work_Work__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/work/Work */ "./components/work/Work.js");
var _jsxFileName = "/Users/patriciot/Projects/personal/carne-frontend-v2/pages/artist.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Artist(_ref) {
  var _this = this;

  var artist = _ref.artist,
      worksList = _ref.worksList;
  // getWorks(works) {
  //   const model = works.map(el => [`id_in=${el.id}`]).join('&')
  //   fetch(`http://3.21.165.5:1337/works/?${model}`)
  //     .then(response => response.json())
  //     .then( worksList => this.setState({ worksList }))
  // }
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: 'Carnemag® | ' + artist.name + ' ' + artist.lastname,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, artist && __jsx(_components_artist_Herospace__WEBPACK_IMPORTED_MODULE_4__["default"], {
    model: artist,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }) // <ArtistDetail key="1" model={ artist } currentYear={ Global.getCurrentYear() } />
  , worksList && worksList.map(function (work, index) {
    return __jsx(_components_work_Work__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: index,
      model: work,
      currentYear: _components_Global__WEBPACK_IMPORTED_MODULE_1___default.a.getCurrentYear(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    });
  })));
}

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Artist);

/***/ })

})
//# sourceMappingURL=artist.js.8af1fabc164616ac730f.hot-update.js.map