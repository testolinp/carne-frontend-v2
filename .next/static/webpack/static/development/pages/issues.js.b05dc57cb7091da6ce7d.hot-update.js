webpackHotUpdate("static/development/pages/issues.js",{

/***/ "./pages/issues.js":
/*!*************************!*\
  !*** ./pages/issues.js ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Global */ "./components/Global.js");
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Global__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_home_Herospace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/Herospace */ "./components/home/Herospace.js");
var _jsxFileName = "/Users/patriciot/Projects/personal/carne-frontend-v2/pages/issues.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Issues(_ref) {
  var _this = this;

  var issues = _ref.issues;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Carnemag\xAE | Issues",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, issues.map(function (issue, index) {
    return __jsx(_components_home_Herospace__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      issue: issue,
      currentYear: _components_Global__WEBPACK_IMPORTED_MODULE_1___default.a.getCurrentYear(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    });
  })));
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Issues);

/***/ })

})
//# sourceMappingURL=issues.js.b05dc57cb7091da6ce7d.hot-update.js.map