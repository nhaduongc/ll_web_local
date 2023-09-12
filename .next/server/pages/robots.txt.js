"use strict";
(() => {
var exports = {};
exports.id = 80;
exports.ids = [80];
exports.modules = {

/***/ 2263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
const getServerSideProps = async ({ res  })=>{
    // Disallow: /account
    // Noindex: /account
    const robots =  true ? `User-agent: *
Allow: /
Sitemap: ${process.env.SITE_URL}/sitemap.xml` : 0;
    res.setHeader("Content-Type", "text/plain");
    res.write(robots);
    res.end();
    return {
        props: {}
    };
};
const Robots = ()=>{};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Robots);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2263));
module.exports = __webpack_exports__;

})();