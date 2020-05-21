webpackHotUpdate("static/development/pages/artist.js",{

/***/ "./components/work/Work.js":
/*!*********************************!*\
  !*** ./components/work/Work.js ***!
  \*********************************/
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
/* harmony import */ var react_image_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-image-palette */ "./node_modules/react-image-palette/es/index.js");





var _jsxFileName = "/Users/patriciot/Projects/personal/carne-frontend-v2/components/work/Work.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Work = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Work, _Component);

  var _super = _createSuper(Work);

  function Work() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Work);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Work, [{
    key: "displayPosition",
    value: function displayPosition(display) {
      if (display != null) {
        return "work--".concat(display);
      }

      return '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          currentYear = _this$props.currentYear,
          model = _this$props.model;
      var artist = model.artist,
          image = model.image,
          display = model.display,
          backgroundColor = model.backgroundColor;
      var name = artist.name,
          lastname = artist.lastname,
          rol = artist.rol,
          country = artist.country;
      return model.image.map(function (work, index) {
        var imageDisplay = work.name.replace('.jpg', '').split('-')[2];
        var imageBackground = {
          backgroundImage: imageDisplay != 'v' ? 'url(' + work.url + ')' : 'none',
          backgroundColor: '#000'
        };

        if (imageDisplay === 'v') {
          return __jsx(react_image_palette__WEBPACK_IMPORTED_MODULE_6__["default"], {
            image: work.url,
            crossOrigin: "anonymous",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 18
            }
          }, function (_ref) {
            var backgroundColor = _ref.backgroundColor,
                color = _ref.color,
                alternativeColor = _ref.alternativeColor;
            return __jsx("section", {
              className: "work ".concat(_this.displayPosition(imageDisplay)),
              style: alternativeColor,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 15
              }
            });
          });
        }

        return __jsx("section", {
          key: index,
          className: "work ".concat(_this.displayPosition(imageDisplay)),
          style: imageBackground,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 16
          }
        }, __jsx("div", {
          className: "work__content",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 11
          }
        }, __jsx("h2", {
          className: "work__content__title",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 50
          }
        }, name), " ", lastname), __jsx("h3", {
          className: "work__content__subtitle",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }
        }, rol, __jsx("br", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 60
          }
        }), country && __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 79
          }
        }, country))));
      }) // <section key={index} className={`work ${this.displayPosition(imageDisplay)}`} style={ imageBackground }>
      //     <div className="work__content">
      //       <h2 className="work__content__title"><span>{ name }</span> { lastname }</h2>
      //       <h3 className="work__content__subtitle">{ rol }<br />{ country && <span>{ country }</span> }</h3>
      //       {imageDisplay === 'v' && 
      //       <ImagePalette image={work.url} crossOrigin="anonymous">
      //         {({ backgroundColor, color, alternativeColor }) => (
      //           <div style={{ backgroundColor }} className="work__content__image">
      //             <img alt={name} src={work.url} />
      //           </div>
      //         )}
      //       </ImagePalette>
      //       }
      //     </div>
      //   </section>
      // <section className={`work ${this.displayPosition(display)}`} style={ imageBackground }>
      //   <div className="work__content">
      //     <h2 className="work__content__title"><span>{ name }</span> { lastname }</h2>
      //     <h3 className="work__content__subtitle">{ rol }<br />{ country && <span>{ country }</span> }</h3>
      //     {display && 
      //       <div className="work__content__image">
      //         <img alt={name} src={image.url} />
      //       </div>
      //     }
      //   </div>
      //   <Extra currentYear={ currentYear } />
      // </section>
      ;
    }
  }]);

  return Work;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ })

})
//# sourceMappingURL=artist.js.76c80118c89230e21fe7.hot-update.js.map