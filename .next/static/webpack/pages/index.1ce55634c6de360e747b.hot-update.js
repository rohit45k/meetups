webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\udemy\\next-project\\pages\\index.js",
    _this = undefined;


var DUMMYY_MEETS = [{
  id: 1,
  image: 'https://c8.alamy.com/comp/2AP0F64/streets-of-paris-france-with-their-famous-buildings-and-traffic-during-the-day-2AP0F64.jpg',
  title: 'France TopHill Meeting',
  address: 'TopHill Building, New Queen Street, France',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
}, {
  id: 2,
  image: 'https://c8.alamy.com/comp/2AP0F64/streets-of-paris-france-with-their-famous-buildings-and-traffic-during-the-day-2AP0F64.jpg',
  title: 'France TopHill Meeting',
  address: 'TopHill Building, New Queen Street, France',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
}, {
  id: 3,
  image: 'https://c8.alamy.com/comp/2AP0F64/streets-of-paris-france-with-their-famous-buildings-and-traffic-during-the-day-2AP0F64.jpg',
  title: 'France TopHill Meeting',
  address: 'TopHill Building, New Queen Street, France',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
}, {
  id: 4,
  image: 'https://c8.alamy.com/comp/2AP0F64/streets-of-paris-france-with-their-famous-buildings-and-traffic-during-the-day-2AP0F64.jpg',
  title: 'France TopHill Meeting',
  address: 'TopHill Building, New Queen Street, France',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
}];

var HomePage = function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 10
  }, _this);
};

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlZX01FRVRTIiwiaWQiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FDbkI7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUNILDhIQUhKO0FBSUVDLE9BQUssRUFBRSx3QkFKVDtBQUtFQyxTQUFPLEVBQUUsNENBTFg7QUFNRUMsYUFBVyxFQUNUO0FBUEosQ0FEbUIsRUFVbkI7QUFDRUosSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUNILDhIQUhKO0FBSUVDLE9BQUssRUFBRSx3QkFKVDtBQUtFQyxTQUFPLEVBQUUsNENBTFg7QUFNRUMsYUFBVyxFQUNUO0FBUEosQ0FWbUIsRUFtQm5CO0FBQ0VKLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFDSCw4SEFISjtBQUlFQyxPQUFLLEVBQUUsd0JBSlQ7QUFLRUMsU0FBTyxFQUFFLDRDQUxYO0FBTUVDLGFBQVcsRUFDVDtBQVBKLENBbkJtQixFQTRCbkI7QUFDRUosSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUNILDhIQUhKO0FBSUVDLE9BQUssRUFBRSx3QkFKVDtBQUtFQyxTQUFPLEVBQUUsNENBTFg7QUFNRUMsYUFBVyxFQUNUO0FBUEosQ0E1Qm1CLENBQXJCOztBQXVDQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsc0JBQU8scUVBQUMsc0VBQUQ7QUFBWSxXQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FGRDs7S0FBTUYsUTs7QUEwQlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFjZTU1NjM0YzZkZTM2MGU3NDdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xyXG5cclxuY29uc3QgRFVNTVlZX01FRVRTID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgICdodHRwczovL2M4LmFsYW15LmNvbS9jb21wLzJBUDBGNjQvc3RyZWV0cy1vZi1wYXJpcy1mcmFuY2Utd2l0aC10aGVpci1mYW1vdXMtYnVpbGRpbmdzLWFuZC10cmFmZmljLWR1cmluZy10aGUtZGF5LTJBUDBGNjQuanBnJyxcclxuICAgIHRpdGxlOiAnRnJhbmNlIFRvcEhpbGwgTWVldGluZycsXHJcbiAgICBhZGRyZXNzOiAnVG9wSGlsbCBCdWlsZGluZywgTmV3IFF1ZWVuIFN0cmVldCwgRnJhbmNlJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIGRpc3RyYWN0ZWQgYnkgdGhlIHJlYWRhYmxlIGNvbnRlbnQgb2YgYSBwYWdlIHdoZW4gbG9va2luZyBhdCBpdHMgbGF5b3V0LiBUaGUgcG9pbnQgb2YgdXNpbmcgTG9yZW0gSXBzdW0gaXMgdGhhdCBpdCBoYXMgYSBtb3JlLW9yLWxlc3Mgbm9ybWFsIGRpc3RyaWJ1dGlvbiBvZiBsZXR0ZXJzLCBhcyBvcHBvc2VkIHRvIHVzaW5nICwgbWFraW5nIGl0IGxvb2sgbGlrZSByZWFkYWJsZSBFbmdsaXNoLiBNYW55IGRlc2t0b3AgcHVibGlzaGluZyBwYWNrYWdlcyBhbmQgd2ViIHBhZ2UgZWRpdG9ycyBub3cgdXNlIExvcmVtIElwc3VtIGFzIHRoZWlyIGRlZmF1bHQgbW9kZWwgdGV4dCwgYW5kIGEgc2VhcmNoIGZvciAgd2lsbCB1bmNvdmVyIG1hbnkgd2ViIHNpdGVzIHN0aWxsIGluIHRoZWlyIGluZmFuY3kuIFZhcmlvdXMgdmVyc2lvbnMgaGF2ZSBldm9sdmVkIG92ZXIgdGhlIHllYXJzLCBzb21ldGltZXMgYnkgYWNjaWRlbnQsIHNvbWV0aW1lcyBvbiBwdXJwb3NlIChpbmplY3RlZCBodW1vdXIgYW5kIHRoZSBsaWtlKS4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgJ2h0dHBzOi8vYzguYWxhbXkuY29tL2NvbXAvMkFQMEY2NC9zdHJlZXRzLW9mLXBhcmlzLWZyYW5jZS13aXRoLXRoZWlyLWZhbW91cy1idWlsZGluZ3MtYW5kLXRyYWZmaWMtZHVyaW5nLXRoZS1kYXktMkFQMEY2NC5qcGcnLFxyXG4gICAgdGl0bGU6ICdGcmFuY2UgVG9wSGlsbCBNZWV0aW5nJyxcclxuICAgIGFkZHJlc3M6ICdUb3BIaWxsIEJ1aWxkaW5nLCBOZXcgUXVlZW4gU3RyZWV0LCBGcmFuY2UnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuIFRoZSBwb2ludCBvZiB1c2luZyBMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhIG1vcmUtb3ItbGVzcyBub3JtYWwgZGlzdHJpYnV0aW9uIG9mIGxldHRlcnMsIGFzIG9wcG9zZWQgdG8gdXNpbmcgLCBtYWtpbmcgaXQgbG9vayBsaWtlIHJlYWRhYmxlIEVuZ2xpc2guIE1hbnkgZGVza3RvcCBwdWJsaXNoaW5nIHBhY2thZ2VzIGFuZCB3ZWIgcGFnZSBlZGl0b3JzIG5vdyB1c2UgTG9yZW0gSXBzdW0gYXMgdGhlaXIgZGVmYXVsdCBtb2RlbCB0ZXh0LCBhbmQgYSBzZWFyY2ggZm9yICB3aWxsIHVuY292ZXIgbWFueSB3ZWIgc2l0ZXMgc3RpbGwgaW4gdGhlaXIgaW5mYW5jeS4gVmFyaW91cyB2ZXJzaW9ucyBoYXZlIGV2b2x2ZWQgb3ZlciB0aGUgeWVhcnMsIHNvbWV0aW1lcyBieSBhY2NpZGVudCwgc29tZXRpbWVzIG9uIHB1cnBvc2UgKGluamVjdGVkIGh1bW91ciBhbmQgdGhlIGxpa2UpLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGltYWdlOlxyXG4gICAgICAnaHR0cHM6Ly9jOC5hbGFteS5jb20vY29tcC8yQVAwRjY0L3N0cmVldHMtb2YtcGFyaXMtZnJhbmNlLXdpdGgtdGhlaXItZmFtb3VzLWJ1aWxkaW5ncy1hbmQtdHJhZmZpYy1kdXJpbmctdGhlLWRheS0yQVAwRjY0LmpwZycsXHJcbiAgICB0aXRsZTogJ0ZyYW5jZSBUb3BIaWxsIE1lZXRpbmcnLFxyXG4gICAgYWRkcmVzczogJ1RvcEhpbGwgQnVpbGRpbmcsIE5ldyBRdWVlbiBTdHJlZXQsIEZyYW5jZScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC4gVGhlIHBvaW50IG9mIHVzaW5nIExvcmVtIElwc3VtIGlzIHRoYXQgaXQgaGFzIGEgbW9yZS1vci1sZXNzIG5vcm1hbCBkaXN0cmlidXRpb24gb2YgbGV0dGVycywgYXMgb3Bwb3NlZCB0byB1c2luZyAsIG1ha2luZyBpdCBsb29rIGxpa2UgcmVhZGFibGUgRW5nbGlzaC4gTWFueSBkZXNrdG9wIHB1Ymxpc2hpbmcgcGFja2FnZXMgYW5kIHdlYiBwYWdlIGVkaXRvcnMgbm93IHVzZSBMb3JlbSBJcHN1bSBhcyB0aGVpciBkZWZhdWx0IG1vZGVsIHRleHQsIGFuZCBhIHNlYXJjaCBmb3IgIHdpbGwgdW5jb3ZlciBtYW55IHdlYiBzaXRlcyBzdGlsbCBpbiB0aGVpciBpbmZhbmN5LiBWYXJpb3VzIHZlcnNpb25zIGhhdmUgZXZvbHZlZCBvdmVyIHRoZSB5ZWFycywgc29tZXRpbWVzIGJ5IGFjY2lkZW50LCBzb21ldGltZXMgb24gcHVycG9zZSAoaW5qZWN0ZWQgaHVtb3VyIGFuZCB0aGUgbGlrZSkuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgICdodHRwczovL2M4LmFsYW15LmNvbS9jb21wLzJBUDBGNjQvc3RyZWV0cy1vZi1wYXJpcy1mcmFuY2Utd2l0aC10aGVpci1mYW1vdXMtYnVpbGRpbmdzLWFuZC10cmFmZmljLWR1cmluZy10aGUtZGF5LTJBUDBGNjQuanBnJyxcclxuICAgIHRpdGxlOiAnRnJhbmNlIFRvcEhpbGwgTWVldGluZycsXHJcbiAgICBhZGRyZXNzOiAnVG9wSGlsbCBCdWlsZGluZywgTmV3IFF1ZWVuIFN0cmVldCwgRnJhbmNlJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIGRpc3RyYWN0ZWQgYnkgdGhlIHJlYWRhYmxlIGNvbnRlbnQgb2YgYSBwYWdlIHdoZW4gbG9va2luZyBhdCBpdHMgbGF5b3V0LiBUaGUgcG9pbnQgb2YgdXNpbmcgTG9yZW0gSXBzdW0gaXMgdGhhdCBpdCBoYXMgYSBtb3JlLW9yLWxlc3Mgbm9ybWFsIGRpc3RyaWJ1dGlvbiBvZiBsZXR0ZXJzLCBhcyBvcHBvc2VkIHRvIHVzaW5nICwgbWFraW5nIGl0IGxvb2sgbGlrZSByZWFkYWJsZSBFbmdsaXNoLiBNYW55IGRlc2t0b3AgcHVibGlzaGluZyBwYWNrYWdlcyBhbmQgd2ViIHBhZ2UgZWRpdG9ycyBub3cgdXNlIExvcmVtIElwc3VtIGFzIHRoZWlyIGRlZmF1bHQgbW9kZWwgdGV4dCwgYW5kIGEgc2VhcmNoIGZvciAgd2lsbCB1bmNvdmVyIG1hbnkgd2ViIHNpdGVzIHN0aWxsIGluIHRoZWlyIGluZmFuY3kuIFZhcmlvdXMgdmVyc2lvbnMgaGF2ZSBldm9sdmVkIG92ZXIgdGhlIHllYXJzLCBzb21ldGltZXMgYnkgYWNjaWRlbnQsIHNvbWV0aW1lcyBvbiBwdXJwb3NlIChpbmplY3RlZCBodW1vdXIgYW5kIHRoZSBsaWtlKS4nLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgJ21vbmdvZGIrc3J2Oi8vcm9oaXQ6MGJ1WVNDeU5BbzdVZ2tFNUBjbHVzdGVyMC5ma2l0M2xzLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuXHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpZDogbWVldHVwLl9pZC5TdHJpbmcoKSxcclxuICAgICAgfSkpLFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=