webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/Playlist.js":
/*!*************************************!*\
  !*** ./components/home/Playlist.js ***!
  \*************************************/
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
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-iframe */ "./node_modules/react-iframe/dist/es/iframe.js");
/* harmony import */ var _Extra__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Extra */ "./components/home/Extra.js");





var _jsxFileName = "/Users/patriciot/Projects/personal/carne-frontend-v2/components/home/Playlist.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Playlist = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Playlist, _Component);

  var _super = _createSuper(Playlist);

  function Playlist() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Playlist);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Playlist, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentYear = _this$props.currentYear,
          issuePlaylist = _this$props.issuePlaylist;
      var spotify = issuePlaylist.spotify,
          nickname = issuePlaylist.nickname,
          artist = issuePlaylist.artist,
          background = issuePlaylist.background,
          issue = issuePlaylist.issue;
      console.log('issue', issue);
      var imageBackground = {
        backgroundImage: 'url(' + background.url + ')'
      };
      return __jsx("section", {
        className: "playlist",
        style: imageBackground,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "playlist__content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "playlist__content__left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }
      }, __jsx("span", {
        className: "playlist__content__issue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }
      }, "issue", __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 61
        }
      }, "#", issue.Number)), __jsx("h2", {
        className: "playlist__content__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }
      }, "Playlist ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 63
        }
      }, "#", issue.Number)), __jsx("h3", {
        className: "playlist__content__name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }
      }, "by ", nickname, " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 69
        }
      }, artist)), __jsx("p", {
        className: "playlist__content__spotify",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }
      }, "Listen to this playlist ", __jsx("span", {
        className: "icon-spotify",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 79
        }
      }, "on Spotify"))), __jsx("div", {
        className: "playlist__content__right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "playlist__content__spotifyBox",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "playlist__content__spotifyBox__content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }
      }, __jsx(react_iframe__WEBPACK_IMPORTED_MODULE_6__["default"], {
        url: spotify,
        width: "100%",
        height: "100%",
        display: "initial",
        position: "relative",
        allowFullScreen: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "playlist__content__spotifyBox__text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 15
        }
      }, "Issue ", __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 74
        }
      }, "N\xBA", issue.Number))))), __jsx(_Extra__WEBPACK_IMPORTED_MODULE_7__["default"], {
        currentYear: currentYear,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Playlist;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Playlist);

/***/ })

})
//# sourceMappingURL=index.js.5d6dca3ce2c235615f45.hot-update.js.map