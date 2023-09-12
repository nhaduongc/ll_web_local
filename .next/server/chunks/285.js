"use strict";
exports.id = 285;
exports.ids = [285];
exports.modules = {

/***/ 2285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getBlogServerSideProps)
/* harmony export */ });
/* harmony import */ var src_utils_get_blog_page_from_slug_prop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4480);
/* harmony import */ var src_api_blog_props_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8703);
/* harmony import */ var _global_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6913);
/* harmony import */ var _global_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2911);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_api_blog_props_requests__WEBPACK_IMPORTED_MODULE_0__, _global_header__WEBPACK_IMPORTED_MODULE_1__, _global_footer__WEBPACK_IMPORTED_MODULE_2__]);
([src_api_blog_props_requests__WEBPACK_IMPORTED_MODULE_0__, _global_header__WEBPACK_IMPORTED_MODULE_1__, _global_footer__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getBlogServerSideProps = async (context)=>{
    try {
        const page = (0,src_utils_get_blog_page_from_slug_prop__WEBPACK_IMPORTED_MODULE_3__/* .getBlogPageFromSlugProp */ .D)(context.params?.slug);
        const { meta: articlesMeta , articles  } = await (0,src_api_blog_props_requests__WEBPACK_IMPORTED_MODULE_0__/* .getBlogData */ .T)(page);
        const { categories  } = await (0,src_api_blog_props_requests__WEBPACK_IMPORTED_MODULE_0__/* .getBlogCategoriesData */ .E)("null");
        const outsidePaginationRange = (articlesMeta.activePage - 1) * articlesMeta.perPage > articlesMeta.total;
        if (outsidePaginationRange) {
            throw new Error("OVER_PAGINATED");
        }
        const id = 1;
        const name = "All Article";
        const url = `${process.env.SITE_URL}/articles`;
        const crumbs = [
            {
                id: 0,
                href: `${process.env.SITE_URL}/articles`,
                text: "Articles"
            },
            {
                id: 1,
                href: `${process.env.SITE_URL}/articles`,
                text: "All"
            }, 
        ];
        const head = {
            metaTitle: "Blog | LitterLotto",
            metaDescription: `LitterLotto® is a free to enter Prize Draw, with regular spot prizes and huge jackpots, supported by the brands that want a cleaner environment. To enter, simply use the app to take a picture of litter as you place it in the bin. Each time you submit a new piece of litter it's another chance to win!`,
            canonical: `${process.env.SITE_URL}/articles${page !== 1 ? `/page/${page}` : ""}`
        };
        return {
            props: {
                head,
                header: await (0,_global_header__WEBPACK_IMPORTED_MODULE_1__/* .header */ .F)(),
                id,
                name,
                url,
                crumbs,
                categories,
                articles,
                articlesMeta,
                footer: await (0,_global_footer__WEBPACK_IMPORTED_MODULE_2__/* .footer */ .M)()
            }
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getBlogPageFromSlugProp)
/* harmony export */ });
const getBlogPageFromSlugProp = (slugs)=>{
    if (!slugs) {
        return 1;
    }
    const slug = Array.isArray(slugs) ? slugs.join("/") : slugs;
    const pageMatchedRegex = slug.match(/^page\/(\d+)$/);
    if (!pageMatchedRegex) {
        throw new Error("INVALID_URL_FORMAT");
    }
    return Number(pageMatchedRegex[1]);
};


/***/ })

};
;