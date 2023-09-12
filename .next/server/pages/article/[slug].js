"use strict";
(() => {
var exports = {};
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 5150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ ArticleDtoToHeadProps),
/* harmony export */   "x": () => (/* binding */ ArticleDtoToArticleProps)
/* harmony export */ });
/* harmony import */ var src_utils_concat_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1909);
/* harmony import */ var src_constants_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3750);
/* harmony import */ var src_constants_no_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8295);



const ArticleDtoToArticleProps = (data)=>({
        id: data.id,
        url: `${process.env.SITE_URL}/article/${data.Slug}`,
        dateCreated: data.Date,
        ...data.Image ? {
            image: {
                id: data.Image.id,
                url: `${process.env.DIRECTUS_BASE_URL}/assets/${data.Image.id}`,
                alt: data.Image.title
            }
        } : {
            image: src_constants_no_image__WEBPACK_IMPORTED_MODULE_0__/* .noImage */ .T
        },
        title: data.Title,
        shortDescription: (0,src_utils_concat_string__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(data.Short_Description ?? "", src_constants_blog__WEBPACK_IMPORTED_MODULE_2__/* .ARTICLE_SHORT_DESCRIPTION_LENGTH */ .f$),
        categories: data.Categories.map((category)=>({
                id: category.Blog_Category_id.id,
                url: `${process.env.SITE_URL}/articles/category/${category.Blog_Category_id.Slug}`,
                name: category.Blog_Category_id.Name
            })),
        body: data.Body
    });
const ArticleDtoToHeadProps = (data)=>({
        metaTitle: data.Meta_Title,
        metaDescription: data.Meta_Description,
        canonical: `${process.env.SITE_URL}/article/${data.Slug}`
    });


/***/ }),

/***/ 8806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ BlogEndpoints)
/* harmony export */ });
var BlogEndpoints;
(function(BlogEndpoints) {
    BlogEndpoints["getArticle"] = "/items/Blog_Article?filter[Slug][_eq]={slug}&fields=*,Categories.Blog_Category_id.*,Image.id,Image.title,Meta_Title,Meta_Description";
})(BlogEndpoints || (BlogEndpoints = {}));


/***/ }),

/***/ 9009:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getArticleData)
/* harmony export */ });
/* harmony import */ var src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9979);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8806);
/* harmony import */ var _DtoToProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5150);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__]);
src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getArticleData = async (slug)=>{
    const endpoint = _constants__WEBPACK_IMPORTED_MODULE_1__/* .BlogEndpoints.getArticle.replace */ .f.getArticle.replace("{slug}", slug);
    const { data: response  } = await src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__/* .directusClient.get */ .A.get(endpoint);
    if (response.data.length === 0) {
        throw new Error("ARTICLE_NOT_FOUND");
    }
    return {
        head: (0,_DtoToProps__WEBPACK_IMPORTED_MODULE_2__/* .ArticleDtoToHeadProps */ .a)(response.data[0]),
        article: (0,_DtoToProps__WEBPACK_IMPORTED_MODULE_2__/* .ArticleDtoToArticleProps */ .x)(response.data[0])
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3059);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_typography_header_regular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5703);
/* harmony import */ var src_components_typography_body_small__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2896);
/* harmony import */ var src_components_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7011);






const Body = ({ article  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "text relative flex items-start justify-center gap-8 sm:gap-16 w-full px-4 z-10 py-14 md:py-20",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col items-center w-full",
            children: [
                article.dateCreated && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_typography_body_small__WEBPACK_IMPORTED_MODULE_4__/* .BodySmall */ .B, {
                    className: "max-w-[700px] font-semibold",
                    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(article.dateCreated), "MMMM do, yyyy")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_typography_header_regular__WEBPACK_IMPORTED_MODULE_3__/* .HeaderRegular */ .v, {
                    variant: "h1",
                    className: "max-w-[820px] mt-4 text-center",
                    children: article.title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_typography_body_small__WEBPACK_IMPORTED_MODULE_4__/* .BodySmall */ .B, {
                    className: "max-w-[700px] text-center mt-6",
                    children: article.shortDescription
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "justify-center flex flex-wrap gap-4 max-w-[700px] my-10",
                    children: article.categories.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_category__WEBPACK_IMPORTED_MODULE_5__/* .Category */ .W, {
                            category: category
                        }, category.id))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-[1000px] w-full relative mt-6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full pt-[50%]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            alt: article.image.alt,
                            className: "absolute top-0 left-0 w-full h-full object-cover rounded-3xl",
                            src: article.image.url
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full md:w-[80%] max-w-[700px] mt-8 flex flex-col items-start justify-center z-50 order-1 md:order-none content",
                    dangerouslySetInnerHTML: {
                        __html: isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_2___default().sanitize(article.body)
                    }
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Body);


/***/ }),

/***/ 7011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _typography_body_small__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2896);



const Category = ({ category  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: category.url,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: "block px-4 py-3 text-sm bg-yellow rounded-2xl font-semibold",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_typography_body_small__WEBPACK_IMPORTED_MODULE_2__/* .BodySmall */ .B, {
                className: "text-black",
                children: category.name
            })
        })
    }, category.id);


/***/ }),

/***/ 3750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LZ": () => (/* binding */ PER_PAGE),
/* harmony export */   "f$": () => (/* binding */ ARTICLE_SHORT_DESCRIPTION_LENGTH),
/* harmony export */   "tw": () => (/* binding */ ARTICLE_TITLE_LENGTH)
/* harmony export */ });
const PER_PAGE = 24;
const ARTICLE_TITLE_LENGTH = 80;
const ARTICLE_SHORT_DESCRIPTION_LENGTH = 160;


/***/ }),

/***/ 3110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getArticleServerSideProps)
/* harmony export */ });
/* harmony import */ var src_utils_get_slug_from_slug_prop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6372);
/* harmony import */ var _api_article_props_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9009);
/* harmony import */ var _global_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2911);
/* harmony import */ var _global_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6913);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_article_props_requests__WEBPACK_IMPORTED_MODULE_0__, _global_footer__WEBPACK_IMPORTED_MODULE_1__, _global_header__WEBPACK_IMPORTED_MODULE_2__]);
([_api_article_props_requests__WEBPACK_IMPORTED_MODULE_0__, _global_footer__WEBPACK_IMPORTED_MODULE_1__, _global_header__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getArticleServerSideProps = async (context)=>{
    try {
        const slug = (0,src_utils_get_slug_from_slug_prop__WEBPACK_IMPORTED_MODULE_3__/* .getSlugFromSlugProp */ .R)(context.params?.slug);
        const { head , article  } = await (0,_api_article_props_requests__WEBPACK_IMPORTED_MODULE_0__/* .getArticleData */ .D)(slug);
        return {
            props: {
                head,
                header: await (0,_global_header__WEBPACK_IMPORTED_MODULE_2__/* .header */ .F)(),
                article,
                footer: await (0,_global_footer__WEBPACK_IMPORTED_MODULE_1__/* .footer */ .M)()
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

/***/ 1020:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Article),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_layout_main_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6028);
/* harmony import */ var src_page_props_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3110);
/* harmony import */ var src_components_article_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_layout_main_layout__WEBPACK_IMPORTED_MODULE_2__, src_page_props_article__WEBPACK_IMPORTED_MODULE_3__]);
([src_layout_main_layout__WEBPACK_IMPORTED_MODULE_2__, src_page_props_article__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const getServerSideProps = src_page_props_article__WEBPACK_IMPORTED_MODULE_3__/* .getArticleServerSideProps */ .V;
function Article(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_layout_main_layout__WEBPACK_IMPORTED_MODULE_2__/* .MainLayout */ .Z, {
        props: {
            head: props.head,
            header: props.header,
            footer: props.footer
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_article_body__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            article: props.article
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const concatString = (str, maxLength = 30)=>{
    if (str.length <= maxLength) return str;
    const trimmedStr = str.substring(0, maxLength);
    return `${trimmedStr.replace(/[ ,.!-;:]$/, "")}…`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (concatString);


/***/ }),

/***/ 6372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ getSlugFromSlugProp)
/* harmony export */ });
const getSlugFromSlugProp = (slugs)=>{
    if (!slugs) {
        throw new Error("INVALID_URL_FORMAT");
    }
    const slug = Array.isArray(slugs) ? slugs.join("/") : slugs;
    const articleSlugMatchedRegex = slug.match(/^([\w-]+)$/);
    if (!articleSlugMatchedRegex) {
        throw new Error("INVALID_URL_FORMAT");
    }
    return articleSlugMatchedRegex[1];
};


/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 3059:
/***/ ((module) => {

module.exports = require("isomorphic-dompurify");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 6790:
/***/ ((module) => {

module.exports = import("react-use-intercom");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,484], () => (__webpack_exec__(1020)));
module.exports = __webpack_exports__;

})();