webpackHotUpdate("static/development/pages/issues.js",{

/***/ "./components/home/Herospace.js":
/*!**************************************!*\
  !*** ./components/home/Herospace.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");
/* harmony import */ var _Extra__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Extra */ "./components/home/Extra.js");





var _jsxFileName = "/Users/patriciot/Projects/personal/carne-frontend-v2/components/home/Herospace.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Herospace = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Herospace, _Component);

  var _super = _createSuper(Herospace);

  function Herospace() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Herospace);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Herospace, [{
    key: "getDate",
    value: function getDate(date) {
      var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var newDate = new Date(date);
      return __jsx("span", {
        className: "herospace__date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 12
        }
      }, monthShortNames[newDate.getMonth()], " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 85
        }
      }, newDate.getFullYear()));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentYear = _this$props.currentYear,
          issue = _this$props.issue,
          showLink = _this$props.showLink;
      var Herospace = issue.Herospace,
          Number = issue.Number,
          highlight_artists = issue.highlight_artists,
          secondary_artists = issue.secondary_artists,
          Publish = issue.Publish;
      var imageBackground = {
        backgroundImage: 'url(' + 'http://3.21.165.5:1337/' + Herospace.url + ')'
      };
      return __jsx("section", {
        className: "herospace",
        style: imageBackground,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "herospace__content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "herospace__content__columns",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "herospace__content__left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }
      }, __jsx("h2", {
        className: "herospace__content__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }
      }, "Carne\xAE"), __jsx("h3", {
        className: "herospace__content__number",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 56
        }
      }, "Issue"), " #", Number), __jsx("div", {
        className: "herospace__content__wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "herospace__content__wrapper__pictures",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 15
        }
      }, secondary_artists))), __jsx("div", {
        className: "herospace__content__right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "herospace__content__wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "herospace__content__wrapper__pictures",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 15
        }
      }, secondary_artists)))), __jsx("div", {
        className: "herospace__content__extra",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }), __jsx("ul", {
        className: "herospace__content__share",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, __jsx("li", {
        className: "herospace__content__share__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["PinterestShareButton"], {
        media: "http://carnemag.co/dist/images/bg-large.jpg",
        url: "http://carnemag.co/",
        description: "CarneMag\xAE Visual Arts Magazine",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, __jsx("a", {
        href: "#",
        className: "icon-pinterest",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 15
        }
      }))), __jsx("li", {
        className: "herospace__content__share__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["FacebookShareButton"], {
        url: "http://carnemag.co/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      }, __jsx("a", {
        alt: "Facebook",
        href: "#",
        className: "icon-fb",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }
      }))), __jsx("li", {
        className: "herospace__content__share__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["TwitterShareButton"], {
        url: "http://carnemag.co/",
        title: "CarneMag\xAE Visual Arts Magazine",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }
      }, __jsx("a", {
        alt: "Twitter",
        href: "#",
        className: "icon-tw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 15
        }
      }))), __jsx("li", {
        className: "herospace__content__share__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }
      }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["EmailShareButton"], {
        url: "http://carnemag.co/",
        subject: "CarneMag\xAE Visual Arts Magazine",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }
      }, __jsx("a", {
        alt: "Mail",
        href: "#",
        className: "icon-mail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 15
        }
      }))))), __jsx("span", {
        className: "herospace__visual",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 7
        }
      }, "Visual Arts Magazine"), this.getDate(Publish), __jsx(_Extra__WEBPACK_IMPORTED_MODULE_8__["default"], {
        currentYear: currentYear,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 7
        }
      }));
    }
  }]);

  return Herospace;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Herospace);

/***/ })

})
//# sourceMappingURL=issues.js.3ed653b560ed5fa964bd.hot-update.js.map