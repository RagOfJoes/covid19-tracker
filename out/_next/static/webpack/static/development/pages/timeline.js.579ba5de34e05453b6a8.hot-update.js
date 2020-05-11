webpackHotUpdate("static\\development\\pages\\timeline.js",{

/***/ "./page-containers/Timeline/Provider.js":
/*!**********************************************!*\
  !*** ./page-containers/Timeline/Provider.js ***!
  \**********************************************/
/*! exports provided: useTimelineContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTimelineContext", function() { return useTimelineContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hooks_useCountries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/hooks/useCountries */ "./lib/hooks/useCountries.js");
/* harmony import */ var _lib_hooks_useTimelineByCountry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/hooks/useTimelineByCountry */ "./lib/hooks/useTimelineByCountry.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var TimelineContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  countries: [],
  setCountries: function setCountries() {},
  timelineCountry: '',
  setTimlineCountry: function setTimlineCountry() {},
  timeline: {
    loading: false,
    data: []
  },
  setTimeline: function setTimeline() {}
});

var TimelineProvider = function TimelineProvider(_ref) {
  var country = _ref.country,
      children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      countries = _useState[0],
      setCountries = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    alpha2: country || 'US',
    name: ''
  }),
      timelineCountry = _useState2[0],
      setTimlineCountry = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    loading: false,
    data: [{
      cases: 0,
      deaths: 0,
      recovered: 0,
      last_update: new Date()
    }]
  }),
      timeline = _useState3[0],
      setTimeline = _useState3[1];

  Object(_lib_hooks_useCountries__WEBPACK_IMPORTED_MODULE_1__["default"])(setCountries);
  Object(_lib_hooks_useTimelineByCountry__WEBPACK_IMPORTED_MODULE_2__["default"])(timelineCountry.alpha2, setTimeline);
  console.log(countries);
  var value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      countries: countries,
      setCountries: setCountries,
      timeline: timeline,
      setTimeline: setTimeline,
      timelineCountry: timelineCountry,
      setTimlineCountry: setTimlineCountry
    };
  }, [countries, timeline]);
  return __jsx(TimelineContext.Provider, {
    value: value
  }, children);
};

var useTimelineContext = function useTimelineContext() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TimelineContext);
};
/* harmony default export */ __webpack_exports__["default"] = (TimelineProvider);

/***/ })

})
//# sourceMappingURL=timeline.js.579ba5de34e05453b6a8.hot-update.js.map