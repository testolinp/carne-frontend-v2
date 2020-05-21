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
        return __jsx("section", {
          key: index,
          className: "work ".concat(_this.displayPosition(imageDisplay)),
          style: imageBackground,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 16
          }
        }, __jsx("div", {
          className: "work__content",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 11
          }
        }, __jsx("h2", {
          className: "work__content__title",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 50
          }
        }, name), " ", lastname), __jsx("h3", {
          className: "work__content__subtitle",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }
        }, rol, __jsx("br", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 60
          }
        }), country && __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 79
          }
        }, country)), imageDisplay === 'v' && __jsx("div", {
          className: "work__content__image",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }
        }, __jsx("img", {
          alt: name,
          src: work.url,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }
        }))));
      }) // <section className={`work ${this.displayPosition(display)}`} style={ imageBackground }>
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

/***/ }),

/***/ "./node_modules/lodash.camelcase/index.js":
false,

/***/ "./node_modules/lodash.invoke/index.js":
false,

/***/ "./node_modules/lodash/_DataView.js":
false,

/***/ "./node_modules/lodash/_Hash.js":
false,

/***/ "./node_modules/lodash/_ListCache.js":
false,

/***/ "./node_modules/lodash/_Map.js":
false,

/***/ "./node_modules/lodash/_MapCache.js":
false,

/***/ "./node_modules/lodash/_Promise.js":
false,

/***/ "./node_modules/lodash/_Set.js":
false,

/***/ "./node_modules/lodash/_SetCache.js":
false,

/***/ "./node_modules/lodash/_Stack.js":
false,

/***/ "./node_modules/lodash/_Symbol.js":
false,

/***/ "./node_modules/lodash/_Uint8Array.js":
false,

/***/ "./node_modules/lodash/_WeakMap.js":
false,

/***/ "./node_modules/lodash/_apply.js":
false,

/***/ "./node_modules/lodash/_arrayEach.js":
false,

/***/ "./node_modules/lodash/_arrayFilter.js":
false,

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
false,

/***/ "./node_modules/lodash/_arrayMap.js":
false,

/***/ "./node_modules/lodash/_arrayPush.js":
false,

/***/ "./node_modules/lodash/_arraySome.js":
false,

/***/ "./node_modules/lodash/_assignValue.js":
false,

/***/ "./node_modules/lodash/_assocIndexOf.js":
false,

/***/ "./node_modules/lodash/_baseAssign.js":
false,

/***/ "./node_modules/lodash/_baseAssignIn.js":
false,

/***/ "./node_modules/lodash/_baseAssignValue.js":
false,

/***/ "./node_modules/lodash/_baseClone.js":
false,

/***/ "./node_modules/lodash/_baseCreate.js":
false,

/***/ "./node_modules/lodash/_baseEach.js":
false,

/***/ "./node_modules/lodash/_baseFilter.js":
false,

/***/ "./node_modules/lodash/_baseFor.js":
false,

/***/ "./node_modules/lodash/_baseForOwn.js":
false,

/***/ "./node_modules/lodash/_baseGet.js":
false,

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
false,

/***/ "./node_modules/lodash/_baseGetTag.js":
false,

/***/ "./node_modules/lodash/_baseHasIn.js":
false,

/***/ "./node_modules/lodash/_baseIsArguments.js":
false,

/***/ "./node_modules/lodash/_baseIsEqual.js":
false,

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
false,

/***/ "./node_modules/lodash/_baseIsMap.js":
false,

/***/ "./node_modules/lodash/_baseIsMatch.js":
false,

/***/ "./node_modules/lodash/_baseIsNative.js":
false,

/***/ "./node_modules/lodash/_baseIsSet.js":
false,

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
false,

/***/ "./node_modules/lodash/_baseIteratee.js":
false,

/***/ "./node_modules/lodash/_baseKeys.js":
false,

/***/ "./node_modules/lodash/_baseKeysIn.js":
false,

/***/ "./node_modules/lodash/_baseMatches.js":
false,

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
false,

/***/ "./node_modules/lodash/_baseProperty.js":
false,

/***/ "./node_modules/lodash/_basePropertyDeep.js":
false,

/***/ "./node_modules/lodash/_baseRest.js":
false,

/***/ "./node_modules/lodash/_baseSetToString.js":
false,

/***/ "./node_modules/lodash/_baseTimes.js":
false,

/***/ "./node_modules/lodash/_baseToString.js":
false,

/***/ "./node_modules/lodash/_baseUnary.js":
false,

/***/ "./node_modules/lodash/_cacheHas.js":
false,

/***/ "./node_modules/lodash/_castPath.js":
false,

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
false,

/***/ "./node_modules/lodash/_cloneBuffer.js":
false,

/***/ "./node_modules/lodash/_cloneDataView.js":
false,

/***/ "./node_modules/lodash/_cloneRegExp.js":
false,

/***/ "./node_modules/lodash/_cloneSymbol.js":
false,

/***/ "./node_modules/lodash/_cloneTypedArray.js":
false,

/***/ "./node_modules/lodash/_copyArray.js":
false,

/***/ "./node_modules/lodash/_copyObject.js":
false,

/***/ "./node_modules/lodash/_copySymbols.js":
false,

/***/ "./node_modules/lodash/_copySymbolsIn.js":
false,

/***/ "./node_modules/lodash/_coreJsData.js":
false,

/***/ "./node_modules/lodash/_createBaseEach.js":
false,

/***/ "./node_modules/lodash/_createBaseFor.js":
false,

/***/ "./node_modules/lodash/_defineProperty.js":
false,

/***/ "./node_modules/lodash/_equalArrays.js":
false,

/***/ "./node_modules/lodash/_equalByTag.js":
false,

/***/ "./node_modules/lodash/_equalObjects.js":
false,

/***/ "./node_modules/lodash/_freeGlobal.js":
false,

/***/ "./node_modules/lodash/_getAllKeys.js":
false,

/***/ "./node_modules/lodash/_getAllKeysIn.js":
false,

/***/ "./node_modules/lodash/_getMapData.js":
false,

/***/ "./node_modules/lodash/_getMatchData.js":
false,

/***/ "./node_modules/lodash/_getNative.js":
false,

/***/ "./node_modules/lodash/_getPrototype.js":
false,

/***/ "./node_modules/lodash/_getRawTag.js":
false,

/***/ "./node_modules/lodash/_getSymbols.js":
false,

/***/ "./node_modules/lodash/_getSymbolsIn.js":
false,

/***/ "./node_modules/lodash/_getTag.js":
false,

/***/ "./node_modules/lodash/_getValue.js":
false,

/***/ "./node_modules/lodash/_hasPath.js":
false,

/***/ "./node_modules/lodash/_hashClear.js":
false,

/***/ "./node_modules/lodash/_hashDelete.js":
false,

/***/ "./node_modules/lodash/_hashGet.js":
false,

/***/ "./node_modules/lodash/_hashHas.js":
false,

/***/ "./node_modules/lodash/_hashSet.js":
false,

/***/ "./node_modules/lodash/_initCloneArray.js":
false,

/***/ "./node_modules/lodash/_initCloneByTag.js":
false,

/***/ "./node_modules/lodash/_initCloneObject.js":
false,

/***/ "./node_modules/lodash/_isIndex.js":
false,

/***/ "./node_modules/lodash/_isIterateeCall.js":
false,

/***/ "./node_modules/lodash/_isKey.js":
false,

/***/ "./node_modules/lodash/_isKeyable.js":
false,

/***/ "./node_modules/lodash/_isMasked.js":
false,

/***/ "./node_modules/lodash/_isPrototype.js":
false,

/***/ "./node_modules/lodash/_isStrictComparable.js":
false,

/***/ "./node_modules/lodash/_listCacheClear.js":
false,

/***/ "./node_modules/lodash/_listCacheDelete.js":
false,

/***/ "./node_modules/lodash/_listCacheGet.js":
false,

/***/ "./node_modules/lodash/_listCacheHas.js":
false,

/***/ "./node_modules/lodash/_listCacheSet.js":
false,

/***/ "./node_modules/lodash/_mapCacheClear.js":
false,

/***/ "./node_modules/lodash/_mapCacheDelete.js":
false,

/***/ "./node_modules/lodash/_mapCacheGet.js":
false,

/***/ "./node_modules/lodash/_mapCacheHas.js":
false,

/***/ "./node_modules/lodash/_mapCacheSet.js":
false,

/***/ "./node_modules/lodash/_mapToArray.js":
false,

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
false,

/***/ "./node_modules/lodash/_memoizeCapped.js":
false,

/***/ "./node_modules/lodash/_nativeCreate.js":
false,

/***/ "./node_modules/lodash/_nativeKeys.js":
false,

/***/ "./node_modules/lodash/_nativeKeysIn.js":
false,

/***/ "./node_modules/lodash/_nodeUtil.js":
false,

/***/ "./node_modules/lodash/_objectToString.js":
false,

/***/ "./node_modules/lodash/_overArg.js":
false,

/***/ "./node_modules/lodash/_overRest.js":
false,

/***/ "./node_modules/lodash/_root.js":
false,

/***/ "./node_modules/lodash/_setCacheAdd.js":
false,

/***/ "./node_modules/lodash/_setCacheHas.js":
false,

/***/ "./node_modules/lodash/_setToArray.js":
false,

/***/ "./node_modules/lodash/_setToString.js":
false,

/***/ "./node_modules/lodash/_shortOut.js":
false,

/***/ "./node_modules/lodash/_stackClear.js":
false,

/***/ "./node_modules/lodash/_stackDelete.js":
false,

/***/ "./node_modules/lodash/_stackGet.js":
false,

/***/ "./node_modules/lodash/_stackHas.js":
false,

/***/ "./node_modules/lodash/_stackSet.js":
false,

/***/ "./node_modules/lodash/_stringToPath.js":
false,

/***/ "./node_modules/lodash/_toKey.js":
false,

/***/ "./node_modules/lodash/_toSource.js":
false,

/***/ "./node_modules/lodash/clone.js":
false,

/***/ "./node_modules/lodash/constant.js":
false,

/***/ "./node_modules/lodash/defaults.js":
false,

/***/ "./node_modules/lodash/eq.js":
false,

/***/ "./node_modules/lodash/filter.js":
false,

/***/ "./node_modules/lodash/get.js":
false,

/***/ "./node_modules/lodash/hasIn.js":
false,

/***/ "./node_modules/lodash/identity.js":
false,

/***/ "./node_modules/lodash/isArguments.js":
false,

/***/ "./node_modules/lodash/isArray.js":
false,

/***/ "./node_modules/lodash/isArrayLike.js":
false,

/***/ "./node_modules/lodash/isBuffer.js":
false,

/***/ "./node_modules/lodash/isFunction.js":
false,

/***/ "./node_modules/lodash/isLength.js":
false,

/***/ "./node_modules/lodash/isMap.js":
false,

/***/ "./node_modules/lodash/isObject.js":
false,

/***/ "./node_modules/lodash/isObjectLike.js":
false,

/***/ "./node_modules/lodash/isSet.js":
false,

/***/ "./node_modules/lodash/isSymbol.js":
false,

/***/ "./node_modules/lodash/isTypedArray.js":
false,

/***/ "./node_modules/lodash/keys.js":
false,

/***/ "./node_modules/lodash/keysIn.js":
false,

/***/ "./node_modules/lodash/memoize.js":
false,

/***/ "./node_modules/lodash/property.js":
false,

/***/ "./node_modules/lodash/stubArray.js":
false,

/***/ "./node_modules/lodash/stubFalse.js":
false,

/***/ "./node_modules/lodash/toString.js":
false,

/***/ "./node_modules/node-vibrant/lib/browser.js":
false,

/***/ "./node_modules/node-vibrant/lib/builder.js":
false,

/***/ "./node_modules/node-vibrant/lib/color.js":
false,

/***/ "./node_modules/node-vibrant/lib/filter/default.js":
false,

/***/ "./node_modules/node-vibrant/lib/filter/index.js":
false,

/***/ "./node_modules/node-vibrant/lib/generator/default.js":
false,

/***/ "./node_modules/node-vibrant/lib/generator/index.js":
false,

/***/ "./node_modules/node-vibrant/lib/image/base.js":
false,

/***/ "./node_modules/node-vibrant/lib/image/browser.js":
false,

/***/ "./node_modules/node-vibrant/lib/quantizer/index.js":
false,

/***/ "./node_modules/node-vibrant/lib/quantizer/mmcq.js":
false,

/***/ "./node_modules/node-vibrant/lib/quantizer/pqueue.js":
false,

/***/ "./node_modules/node-vibrant/lib/quantizer/vbox.js":
false,

/***/ "./node_modules/node-vibrant/lib/util.js":
false,

/***/ "./node_modules/node-vibrant/lib/vibrant.js":
false,

/***/ "./node_modules/react-palette/dist/react-palette.umd.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false

})
//# sourceMappingURL=artist.js.f1f9ef225ce82aa14eb2.hot-update.js.map