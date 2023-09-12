"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2405:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ queryClient)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: 5 * 60 * 1000,
            cacheTime: 8 * 60 * 1000
        }
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9752);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7935);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_use_intercom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6790);
/* harmony import */ var src_lib_query_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2405);
/* harmony import */ var _utils_is_client_side__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7639);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__, react_use_intercom__WEBPACK_IMPORTED_MODULE_6__, src_lib_query_client__WEBPACK_IMPORTED_MODULE_7__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__, react_use_intercom__WEBPACK_IMPORTED_MODULE_6__, src_lib_query_client__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const MyApp = ({ Component , pageProps  })=>{
    // initialise GTM
    if ((0,_utils_is_client_side__WEBPACK_IMPORTED_MODULE_8__/* .isClientSide */ .S)() && process.env.GTM_ID) react_gtm_module__WEBPACK_IMPORTED_MODULE_5___default().initialize({
        gtmId: process.env.GTM_ID
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleRouteStart = ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().start();
        const handleRouteDone = ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().done();
        next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on("routeChangeStart", handleRouteStart);
        next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on("routeChangeComplete", handleRouteDone);
        next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on("routeChangeError", handleRouteDone);
        return ()=>{
            // Make sure to remove the event handler on unmount!
            next_router__WEBPACK_IMPORTED_MODULE_2___default().events.off("routeChangeStart", handleRouteStart);
            next_router__WEBPACK_IMPORTED_MODULE_2___default().events.off("routeChangeComplete", handleRouteDone);
            next_router__WEBPACK_IMPORTED_MODULE_2___default().events.off("routeChangeError", handleRouteDone);
        };
    }, []);
    nprogress__WEBPACK_IMPORTED_MODULE_3___default().configure({
        showSpinner: false
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {
        client: src_lib_query_client__WEBPACK_IMPORTED_MODULE_7__/* .queryClient */ .E,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_use_intercom__WEBPACK_IMPORTED_MODULE_6__.IntercomProvider, {
            appId: "odj361d5",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ isClientSide)
/* harmony export */ });
const isClientSide = ()=>"undefined" !== "undefined";


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7935:
/***/ ((module) => {

module.exports = require("react-gtm-module");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 6790:
/***/ ((module) => {

module.exports = import("react-use-intercom");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2957));
module.exports = __webpack_exports__;

})();