webpackHotUpdate("static\\development\\pages\\timeline.js",{

/***/ "./components/CountrySelect/CountrySelect.js":
/*!***************************************************!*\
  !*** ./components/CountrySelect/CountrySelect.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/index.js");
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Language */ "./node_modules/@material-ui/icons/Language.js");
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var loading = _ref.loading,
      country = _ref.country,
      setCountry = _ref.setCountry,
      countries = _ref.countries,
      setCountries = _ref.setCountries;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      toggleOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      countryRef = _useState2[0],
      setCountryRef = _useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading ? __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: 80,
    height: 40,
    component: "p"
  }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "button"
  }, country.alpha2, "(", country.name, ")"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    onClick: function onClick(e) {
      setCountryRef(e.currentTarget);
      toggleOpen(true);
    }
  }, __jsx(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_2___default.a, null)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    open: open,
    keepMounted: true,
    anchorEl: countryRef,
    getContentAnchorEl: null,
    onClose: function onClose() {
      return toggleOpen(false);
    },
    anchorOrigin: {
      horizontal: 'left',
      vertical: 'bottom'
    },
    PaperProps: {
      style: {
        width: '100%',
        maxWidth: 250,
        maxHeight: 48 * 4.5
      }
    }
  }, !loading && countries.map(function (option) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      key: option.alpha2,
      selected: country.alpha2 === option.alpha2,
      onClick: function onClick() {
        toggleOpen(false);
        country.alpha2 !== option.alpha2 && setCountry({
          alpha2: option.alpha2,
          name: option.name
        });
      }
    }, option.name);
  })));
});

/***/ })

})
//# sourceMappingURL=timeline.js.e7d0bc02b63f828583aa.hot-update.js.map