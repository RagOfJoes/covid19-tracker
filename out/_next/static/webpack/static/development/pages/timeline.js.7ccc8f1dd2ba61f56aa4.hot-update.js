webpackHotUpdate("static\\development\\pages\\timeline.js",{

/***/ "./page-containers/Timeline/Container.js":
/*!***********************************************!*\
  !*** ./page-containers/Timeline/Container.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Timeline */ "./page-containers/Timeline/Timeline.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Provider */ "./page-containers/Timeline/Provider.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Announcement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Announcement */ "./node_modules/@material-ui/icons/Announcement.js");
/* harmony import */ var _material_ui_icons_Announcement__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Announcement__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_hooks_useNeumorphShadow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/hooks/useNeumorphShadow */ "./lib/hooks/useNeumorphShadow/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_11___default()(function (_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing,
      typography = _ref.typography;
  return {
    container: {
      padding: spacing(3, 2)
    },
    title: {
      fontWeight: typography.fontWeightMedium
    },
    subtitle: {
      color: palette.grey[500]
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["useTheme"])();
  var classes = useStyles();

  var _useTimelineContext = Object(_Provider__WEBPACK_IMPORTED_MODULE_7__["useTimelineContext"])(),
      countries = _useTimelineContext.countries,
      timelineCountry = _useTimelineContext.timelineCountry,
      setTimlineCountry = _useTimelineContext.setTimlineCountry,
      setTimeline = _useTimelineContext.setTimeline;

  var shadow = Object(_lib_hooks_useNeumorphShadow__WEBPACK_IMPORTED_MODULE_13__["default"])({
    spread: 1,
    blurLength: 7,
    bgColor: theme.palette.secondary.main
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (countries.length === 0) return;
    setTimeline(function (prev) {
      return _objectSpread({}, prev, {
        loading: false
      });
    });

    var foundCountry = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.find(countries, function (v) {
      return v.alpha2.toLowerCase() === timelineCountry.alpha2.toLowerCase();
    });

    if (foundCountry) setTimlineCountry({
      name: foundCountry.name,
      alpha2: foundCountry.alpha2
    });
    setTimeline(function (prev) {
      return _objectSpread({}, prev, {
        loading: false
      });
    });
  }, [countries]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("title", null, timelineCountry.alpha2, " Timeline | Covid-19")), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    maxWidth: "lg",
    style: {
      overflow: 'hidden'
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    spacing: 3,
    className: classes.container
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    container: true,
    spacing: 2,
    alignItems: "center",
    justify: "space-between"
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h5",
    className: classes.title
  }, "Timeline by Country")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "subtitle1",
    className: classes.subtitle
  }, "Select a country to see its entire timeline"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    style: {
      marginLeft: 'auto'
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    passHref: true,
    href: "/latest"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    variant: "text",
    disableFocusRipple: true,
    className: shadow.root,
    endIcon: __jsx(_material_ui_icons_Announcement__WEBPACK_IMPORTED_MODULE_12___default.a, null),
    style: {
      color: theme.palette.background["default"],
      backgroundColor: theme.palette.secondary.main
    }
  }, "Latest")))), __jsx(_Timeline__WEBPACK_IMPORTED_MODULE_5__["default"], null))));
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
//# sourceMappingURL=timeline.js.7ccc8f1dd2ba61f56aa4.hot-update.js.map