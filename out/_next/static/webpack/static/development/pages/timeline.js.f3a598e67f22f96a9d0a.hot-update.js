webpackHotUpdate("static\\development\\pages\\timeline.js",{

/***/ "./lib/hooks/useCountries.js":
/*!***********************************!*\
  !*** ./lib/hooks/useCountries.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAsync */ "./lib/hooks/useAsync/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (setCountries) {
  return Object(_useAsync__WEBPACK_IMPORTED_MODULE_1__["default"])(function _callee() {
    var res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("/api/countries"));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

          case 5:
            json = _context.sent;
            setCountries(json);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }, []);
});

/***/ }),

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
//# sourceMappingURL=timeline.js.f3a598e67f22f96a9d0a.hot-update.js.map