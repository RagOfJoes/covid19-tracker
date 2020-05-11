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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/index.js");
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Language */ "./node_modules/@material-ui/icons/Language.js");
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading ? __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    width: 120,
    height: 20
  }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "button"
  }, country.alpha2, "(", country.name, ")"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], null, __jsx(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_3___default.a, null)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
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
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
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

/***/ }),

/***/ "./page-containers/Timeline/Timeline.js":
/*!**********************************************!*\
  !*** ./page-containers/Timeline/Timeline.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Provider */ "./page-containers/Timeline/Provider.js");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/index.js");
/* harmony import */ var _lib_formatNumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/formatNumber */ "./lib/formatNumber.js");
/* harmony import */ var _components_LineChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/LineChart */ "./components/LineChart/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles/useTheme */ "./node_modules/@material-ui/core/styles/useTheme.js");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_CountrySelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/CountrySelect */ "./components/CountrySelect/index.js");
/* harmony import */ var _components_PaginatedTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/PaginatedTable */ "./components/PaginatedTable/index.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _lib_hooks_useNeumorphShadow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../lib/hooks/useNeumorphShadow */ "./lib/hooks/useNeumorphShadow/index.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















var headCells = [{
  id: 'country',
  numeric: false,
  disablePadding: false,
  label: 'Country'
}, {
  id: 'last_update',
  numeric: true,
  disablePadding: false,
  label: 'Last Update'
}, {
  id: 'cases',
  numeric: true,
  disablePadding: false,
  label: 'Cases'
}, {
  id: 'deaths',
  numeric: true,
  disablePadding: false,
  label: 'Deaths'
}, {
  id: 'recovered',
  numeric: true,
  disablePadding: false,
  label: 'Recovered'
}];
var useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_15___default()(function (_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing,
      typography = _ref.typography;
  return {
    title: {
      fontWeight: typography.fontWeightMedium
    },
    subtitle: {
      color: palette.grey[500]
    },
    chartContainer: {
      overflow: 'hidden',
      marginTop: spacing(2)
    },
    chartTitle: {
      padding: spacing(1, 3)
    },
    chart: {
      marginTop: spacing(3),
      padding: spacing(1, 0)
    },
    paper: {
      padding: spacing(1, 3)
    },
    card: {
      padding: spacing(4, 1)
    }
  };
}, {
  name: 'timeline'
});

var CardValue = function CardValue(_ref2) {
  var loading = _ref2.loading,
      data = _ref2.data,
      title = _ref2.title,
      latestNumber = _ref2.latestNumber,
      diffNumber = _ref2.diffNumber;
  var classes = useStyles();

  if (loading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true
    }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      width: 180,
      height: 20
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true
    }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      width: 120,
      height: 39
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true
    }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      width: 80,
      height: 14
    })));
  }

  if (!loading && data.length > 0) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
      gutterBottom: true,
      variant: "subtitle2",
      className: classes.subtitle
    }, title)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
      variant: "subtitle1",
      className: classes.title
    }, latestNumber)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
      variant: "caption",
      className: classes.subtitle
    }, diffNumber >= 0 ? "+".concat(Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(diffNumber, 0)) : "".concat(Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(diffNumber, 0)))));
  }

  if (!loading && data.length === 0) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
      gutterBottom: true,
      variant: "subtitle2",
      className: classes.subtitle
    }, title)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
      variant: "subtitle1",
      className: classes.title
    }, "0")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
      variant: "caption",
      className: classes.subtitle
    }, "+0")));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var theme = _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_12___default()();
  var classes = useStyles();
  var shadow = Object(_lib_hooks_useNeumorphShadow__WEBPACK_IMPORTED_MODULE_17__["default"])({
    bgColor: theme.palette.background["default"]
  });

  var _useTimelineContext = Object(_Provider__WEBPACK_IMPORTED_MODULE_7__["useTimelineContext"])(),
      timeline = _useTimelineContext.timeline,
      countries = _useTimelineContext.countries,
      setCountries = _useTimelineContext.setCountries,
      timelineCountry = _useTimelineContext.timelineCountry,
      setTimlineCountry = _useTimelineContext.setTimlineCountry;

  var latestCaseNumber = timeline.data.length > 1 && Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(timeline.data[0].cases, 0);
  var latestDeathsNumber = timeline.data.length > 1 && Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(timeline.data[0].deaths, 0);
  var latestRecoveredNumber = timeline.data.length > 1 && Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(timeline.data[0].recovered, 0);
  var diffCaseNumbers = timeline.data.length > 1 && timeline.data[0].cases - timeline.data[1].cases;
  var diffDeathsNumers = timeline.data.length > 1 && timeline.data[0].deaths - timeline.data[1].deaths;
  var diffRecoveredNumbers = timeline.data.length > 1 && timeline.data[0].recovered - timeline.data[1].recovered;
  var latestDate = timeline.data.length > 1 && moment__WEBPACK_IMPORTED_MODULE_3___default()(timeline.data[0].last_update).format('M/D/YYYY');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    container: true,
    alignItems: "center",
    justify: "flex-end"
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true
  }, __jsx(_components_CountrySelect__WEBPACK_IMPORTED_MODULE_13__["default"], {
    countries: countries,
    country: timelineCountry,
    loading: timeline.loading,
    setCountries: setCountries,
    setCountry: function setCountry(c) {
      setTimlineCountry(_objectSpread({}, c));
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
        query: c.alpha2,
        pathname: '/timeline'
      }, "/timeline/".concat(c.alpha2), {
        shallow: true
      });
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    sm: 4,
    xs: 12
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "".concat(classes.card, " ").concat(shadow.root),
    style: {
      borderBottom: "3px solid ".concat(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["orange"][200])
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    direction: "column",
    alignItems: "center"
  }, __jsx(CardValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, timeline, {
    diffNumber: diffCaseNumbers,
    latestNumber: latestCaseNumber,
    title: "Cases since ".concat(latestDate)
  }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    sm: 4,
    xs: 12
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "".concat(classes.card, " ").concat(shadow.root),
    style: {
      borderBottom: "3px solid ".concat(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["green"][400])
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    direction: "column",
    alignItems: "center"
  }, __jsx(CardValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, timeline, {
    diffNumber: diffRecoveredNumbers,
    latestNumber: latestRecoveredNumber,
    title: "Recovered since ".concat(latestDate)
  }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    sm: 4,
    xs: 12
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "".concat(classes.card, " ").concat(shadow.root),
    style: {
      borderBottom: "3px solid ".concat(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["red"][600])
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    direction: "column",
    alignItems: "center"
  }, __jsx(CardValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, timeline, {
    diffNumber: diffDeathsNumers,
    latestNumber: latestDeathsNumber,
    title: "Deaths since ".concat(latestDate)
  }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    container: true,
    direction: "column",
    className: classes.chartContainer
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6"
  }, "Graph")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "subtitle2",
    className: classes.subtitle
  }, timeline.data.length > 1 && "".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()(timeline.data[timeline.data.length - 1].last_update).format('M/D/YYYY'), " - ").concat(moment__WEBPACK_IMPORTED_MODULE_3___default()(timeline.data[0].last_update).format('M/D/YYYY')))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    elevation: 0,
    style: {
      backgroundColor: 'transparent'
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    className: classes.chart
  }, __jsx(_components_LineChart__WEBPACK_IMPORTED_MODULE_10__["default"], {
    height: 355,
    data: timeline.data,
    tooltipProps: {
      content: function content(_ref3) {
        var active = _ref3.active,
            label = _ref3.label,
            payload = _ref3.payload;
        return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: classes.paper
        }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
          container: true,
          direction: "column"
        }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
          item: true
        }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
          variant: "subtitle1"
        }, "Date: ", moment__WEBPACK_IMPORTED_MODULE_3___default()(label).format('M/D/YYYY'))), payload && payload.map(function (entry, index) {
          var name = entry.name,
              value = entry.value;
          return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
            key: "item-".concat(index),
            variant: "subtitle2"
          }, name.charAt(0).toUpperCase() + name.slice(1), ":", ' ', Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(value, 0));
        })));
      }
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12
  }, __jsx(_components_PaginatedTable__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: "Table",
    data: timeline.data,
    headCells: headCells,
    defaultOrder: "last_update",
    loading: timeline.loading
  })));
});

/***/ })

})
//# sourceMappingURL=timeline.js.f9ad3d9258f88b184bc9.hot-update.js.map