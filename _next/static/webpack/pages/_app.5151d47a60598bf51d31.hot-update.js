self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Head.tsx":
/*!*****************************!*\
  !*** ./components/Head.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": function() { return /* binding */ Head; }
/* harmony export */ });
/* harmony import */ var _usr_local_programming_node_seimani_only_2021_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _foundation_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/foundation/route */ "./foundation/route.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/usr/local/programming/node/seimani-only-2021/components/Head.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_usr_local_programming_node_seimani_only_2021_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Head = function Head(props) {
  _s();

  var _route$title;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  var route = _foundation_route__WEBPACK_IMPORTED_MODULE_5__.routes.find(function (x) {
    return x.pathname === router.pathname;
  });
  var title = "政剣マニフェスティアオンリー同人誌即売会 緊急交流イベント 漕ぎ出せ！ソクバイ海Ⅳ";
  var subTitle = (route === null || route === void 0 ? void 0 : route.pathname) === "/top" ? "" : (_route$title = route === null || route === void 0 ? void 0 : route.title) !== null && _route$title !== void 0 ? _route$title : "";
  var fullTitle = subTitle ? "".concat(title, " | ").concat(subTitle) : title;
  var description = "".concat(title, "\u306E\u516C\u5F0F\u30B5\u30A4\u30C8\u3067\u3059");
  var origin = "https://festia.moe";
  var ogpImage = "".concat(origin, "/ogp_icon.jpg");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
      children: fullTitle
    }, "title", false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width"
    }, "viewport", false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
      name: "google",
      content: "notranslate"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
      property: "og:type",
      content: "website"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
      property: "og:locale",
      content: "ja_JP"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
      property: "og:title",
      content: fullTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
      property: "og:url",
      content: origin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
      property: "og:description",
      content: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
      property: "og:image",
      content: ogpImage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
      name: "twitter:card",
      content: "summary"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
      rel: "canonical",
      href: "".concat(origin).concat(router.pathname)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_s(Head, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Head;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkLnRzeCJdLCJuYW1lcyI6WyJIZWFkIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyb3V0ZSIsInJvdXRlcyIsIngiLCJwYXRobmFtZSIsInRpdGxlIiwic3ViVGl0bGUiLCJmdWxsVGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9yaWdpbiIsIm9ncEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsSUFBZSxHQUFHLFNBQWxCQSxJQUFrQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQTs7QUFDeEMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLEtBQUssR0FBR0MsMERBQUEsQ0FBWSxVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDQyxRQUFGLEtBQWVMLE1BQU0sQ0FBQ0ssUUFBN0I7QUFBQSxHQUFaLENBQWQ7QUFDQSxNQUFNQyxLQUFLLEdBQ1QsMkNBREY7QUFFQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQUwsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxZQUFBQSxLQUFLLENBQUVHLFFBQVAsTUFBb0IsTUFBcEIsR0FBNkIsRUFBN0IsbUJBQWtDSCxLQUFsQyxhQUFrQ0EsS0FBbEMsdUJBQWtDQSxLQUFLLENBQUVJLEtBQXpDLHVEQUFrRCxFQUFuRTtBQUNBLE1BQU1FLFNBQVMsR0FBR0QsUUFBUSxhQUFNRCxLQUFOLGdCQUFpQkMsUUFBakIsSUFBOEJELEtBQXhEO0FBQ0EsTUFBTUcsV0FBVyxhQUFNSCxLQUFOLHFEQUFqQjtBQUNBLE1BQU1JLE1BQU0sR0FBRyxvQkFBZjtBQUNBLE1BQU1DLFFBQVEsYUFBTUQsTUFBTixrQkFBZDtBQUVBLHNCQUNFLDhEQUFDLGtEQUFELGtDQUFjWCxLQUFkO0FBQUEsNEJBQ0U7QUFBQSxnQkFBb0JTO0FBQXBCLE9BQVcsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUNFLFVBQUksRUFBQyxVQURQO0FBRUUsYUFBTyxFQUFDO0FBRlYsT0FHTSxVQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQU9FO0FBQU0sVUFBSSxFQUFDLFFBQVg7QUFBb0IsYUFBTyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVFFO0FBQU0sY0FBUSxFQUFDLFNBQWY7QUFBeUIsYUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQVNFO0FBQU0sY0FBUSxFQUFDLFdBQWY7QUFBMkIsYUFBTyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURixlQVVFO0FBQU0sY0FBUSxFQUFDLFVBQWY7QUFBMEIsYUFBTyxFQUFFQTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsZUFXRTtBQUFNLGNBQVEsRUFBQyxRQUFmO0FBQXdCLGFBQU8sRUFBRUU7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGLGVBWUU7QUFBTSxjQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsYUFBTyxFQUFFRDtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkYsZUFhRTtBQUFNLGNBQVEsRUFBQyxVQUFmO0FBQTBCLGFBQU8sRUFBRUU7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLGVBY0U7QUFBTSxVQUFJLEVBQUMsY0FBWDtBQUEwQixhQUFPLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRGLGVBZUU7QUFBTSxTQUFHLEVBQUMsTUFBVjtBQUFpQixVQUFJLEVBQUMsY0FBdEI7QUFBcUMsVUFBSSxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRixlQWdCRTtBQUFNLFNBQUcsRUFBQyxXQUFWO0FBQXNCLFVBQUksWUFBS0QsTUFBTCxTQUFjVixNQUFNLENBQUNLLFFBQXJCO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0EvQk07O0dBQU1QLEk7VUFDSUcsa0Q7OztLQURKSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTE1MWQ0N2E2MDU5OGJmNTFkMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOZXh0SGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gXCJ+L2ZvdW5kYXRpb24vcm91dGVcIjtcblxuZXhwb3J0IGNvbnN0IEhlYWQ6IFJlYWN0LlZGQyA9IChwcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgcm91dGUgPSByb3V0ZXMuZmluZCgoeCkgPT4geC5wYXRobmFtZSA9PT0gcm91dGVyLnBhdGhuYW1lKTtcbiAgY29uc3QgdGl0bGUgPVxuICAgIFwi5pS/5Ymj44Oe44OL44OV44Kn44K544OG44Kj44Ki44Kq44Oz44Oq44O85ZCM5Lq66KqM5Y2z5aOy5LyaIOe3iuaApeS6pOa1geOCpOODmeODs+ODiCDmvJXjgY7lh7rjgZvvvIHjgr3jgq/jg5DjgqTmtbfihaNcIjtcbiAgY29uc3Qgc3ViVGl0bGUgPSByb3V0ZT8ucGF0aG5hbWUgPT09IFwiL3RvcFwiID8gXCJcIiA6IHJvdXRlPy50aXRsZSA/PyBcIlwiO1xuICBjb25zdCBmdWxsVGl0bGUgPSBzdWJUaXRsZSA/IGAke3RpdGxlfSB8ICR7c3ViVGl0bGV9YCA6IHRpdGxlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGAke3RpdGxlfeOBruWFrOW8j+OCteOCpOODiOOBp+OBmWA7XG4gIGNvbnN0IG9yaWdpbiA9IFwiaHR0cHM6Ly9mZXN0aWEubW9lXCI7XG4gIGNvbnN0IG9ncEltYWdlID0gYCR7b3JpZ2lufS9vZ3BfaWNvbi5qcGdgO1xuXG4gIHJldHVybiAoXG4gICAgPE5leHRIZWFkIHsuLi5wcm9wc30+XG4gICAgICA8dGl0bGUga2V5PVwidGl0bGVcIj57ZnVsbFRpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YVxuICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgIGtleT1cInZpZXdwb3J0XCJcbiAgICAgIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiZ29vZ2xlXCIgY29udGVudD1cIm5vdHJhbnNsYXRlXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImphX0pQXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtmdWxsVGl0bGV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e29yaWdpbn0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtvZ3BJbWFnZX0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YCR7b3JpZ2lufSR7cm91dGVyLnBhdGhuYW1lfWB9IC8+XG4gICAgPC9OZXh0SGVhZD5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9