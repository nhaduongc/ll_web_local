"use strict";
(() => {
var exports = {};
exports.id = 437;
exports.ids = [437];
exports.modules = {

/***/ 3340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Df": () => (/* binding */ BlogCategoryDtoToCategoryProp),
/* harmony export */   "J3": () => (/* binding */ BlogCategoryDtoToArticlesProp),
/* harmony export */   "JV": () => (/* binding */ BlogCategoryDtoToCrumbsProp),
/* harmony export */   "Le": () => (/* binding */ BlogCategoryDtoToHeadProp)
/* harmony export */ });
/* harmony import */ var _utils_concat_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1909);
/* harmony import */ var _constants_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3750);
/* harmony import */ var _constants_no_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8295);



const BlogCategoryDtoToArticlesProp = (data)=>data.map((article)=>({
            id: article.id,
            url: `${process.env.SITE_URL}/article/${article.Slug}`,
            dateCreated: article.Date,
            ...article.Image ? {
                image: {
                    id: article.Image.id,
                    url: `${process.env.DIRECTUS_BASE_URL}/assets/${article.Image.id}`,
                    alt: article.Image.title
                }
            } : {
                image: _constants_no_image__WEBPACK_IMPORTED_MODULE_0__/* .noImage */ .T
            },
            title: (0,_utils_concat_string__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(article.Title ?? "", _constants_blog__WEBPACK_IMPORTED_MODULE_2__/* .ARTICLE_TITLE_LENGTH */ .tw),
            shortDescription: (0,_utils_concat_string__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(article.Short_Description ?? "", _constants_blog__WEBPACK_IMPORTED_MODULE_2__/* .ARTICLE_SHORT_DESCRIPTION_LENGTH */ .f$),
            categories: article.Categories.map((category)=>({
                    id: category.Blog_Category_id.id,
                    url: `${process.env.SITE_URL}/articles/category/${category.Blog_Category_id.Slug}`,
                    name: category.Blog_Category_id.Name
                }))
        }));
const BlogCategoryDtoToCategoryProp = (data)=>({
        id: data.id,
        url: `${process.env.SITE_URL}/articles/category/${data.Slug}`,
        name: data.Name,
        description: data.Description
    });
const BlogCategoryDtoToHeadProp = (data, page)=>({
        metaTitle: `${data.Name} | LitterLotto`,
        metaDescription: data.Description,
        canonical: `${process.env.SITE_URL}/articles/category/${data.Slug}${page !== 1 ? `/page/${page}` : ""}`
    });
const BlogCategoryDtoToCrumbsProp = (data)=>[
        {
            id: 0,
            href: `${process.env.SITE_URL}/articles`,
            text: "Articles"
        },
        {
            id: data.id,
            href: `${process.env.SITE_URL}/articles/category/${data.Slug}`,
            text: data.Name
        }, 
    ];


/***/ }),

/***/ 4276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ BlogEndpoints)
/* harmony export */ });
var BlogEndpoints;
(function(BlogEndpoints) {
    BlogEndpoints["GetCategory"] = "/items/Blog_Category?filter[Slug][_eq]={slug}&fields=Description,Name,id,Slug";
    BlogEndpoints["GetCategoryArticles"] = "/items/Blog_Article?filter[Categories][Blog_Category_id][Slug][_eq]={slug}&fields=id,Slug,Date,Image.id,Image.title,Title,Short_Description,Categories.Blog_Category_id.*&limit={limit}&offset={offset}&sort=-Date&meta=filter_count";
})(BlogEndpoints || (BlogEndpoints = {}));


/***/ }),

/***/ 2003:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ getBlogCategoryData),
/* harmony export */   "g": () => (/* binding */ getBlogCategoryArticlesData)
/* harmony export */ });
/* harmony import */ var src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9979);
/* harmony import */ var _constants_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3750);
/* harmony import */ var _blog_props_DtoToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7227);
/* harmony import */ var _DtoToProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3340);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4276);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__]);
src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const getBlogCategoryData = async (slug, page)=>{
    const endpoint = _constants__WEBPACK_IMPORTED_MODULE_3__/* .BlogEndpoints.GetCategory.replace */ .f.GetCategory.replace("{slug}", slug);
    const { data: response  } = await src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__/* .directusClient.get */ .A.get(endpoint);
    return {
        head: (0,_DtoToProps__WEBPACK_IMPORTED_MODULE_2__/* .BlogCategoryDtoToHeadProp */ .Le)(response.data[0], page),
        category: (0,_DtoToProps__WEBPACK_IMPORTED_MODULE_2__/* .BlogCategoryDtoToCategoryProp */ .Df)(response.data[0]),
        crumbs: (0,_DtoToProps__WEBPACK_IMPORTED_MODULE_2__/* .BlogCategoryDtoToCrumbsProp */ .JV)(response.data[0])
    };
};
const getBlogCategoryArticlesData = async (slug, page)=>{
    const endpoint = _constants__WEBPACK_IMPORTED_MODULE_3__/* .BlogEndpoints.GetCategoryArticles.replace */ .f.GetCategoryArticles.replace("{limit}", _constants_blog__WEBPACK_IMPORTED_MODULE_4__/* .PER_PAGE.toString */ .LZ.toString()).replace("{offset}", (_constants_blog__WEBPACK_IMPORTED_MODULE_4__/* .PER_PAGE */ .LZ * (page - 1)).toString()).replace("{slug}", slug);
    const { data: response  } = await src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__/* .directusClient.get */ .A.get(endpoint);
    return {
        articles: (0,_DtoToProps__WEBPACK_IMPORTED_MODULE_2__/* .BlogCategoryDtoToArticlesProp */ .J3)(response.data),
        articlesMeta: (0,_blog_props_DtoToProps__WEBPACK_IMPORTED_MODULE_1__/* .BlogDtoToMetaProp */ .j8)(response.meta, _constants_blog__WEBPACK_IMPORTED_MODULE_4__/* .PER_PAGE */ .LZ, page)
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ GeneralError)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/assets/error.svg
var _title, _g;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgError = function SvgError(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: "800px",
    height: "800px",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), _title || (_title = /*#__PURE__*/external_react_.createElement("title", null, "error")), _g || (_g = /*#__PURE__*/external_react_.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/external_react_.createElement("g", {
    id: "add",
    fill: "currentColor",
    transform: "translate(42.666667, 42.666667)"
  }, /*#__PURE__*/external_react_.createElement("path", {
    d: "M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.232,42.6666667 42.6666667,119.232 42.6666667,213.333333 C42.6666667,307.434667 119.232,384 213.333333,384 C307.434667,384 384,307.434667 384,213.333333 C384,119.232 307.434667,42.6666667 213.333333,42.6666667 Z M262.250667,134.250667 L292.416,164.416 L243.498667,213.333333 L292.416,262.250667 L262.250667,292.416 L213.333333,243.498667 L164.416,292.416 L134.250667,262.250667 L183.168,213.333333 L134.250667,164.416 L164.416,134.250667 L213.333333,183.168 L262.250667,134.250667 Z",
    id: "error"
  })))));
};
/* harmony default export */ const error = (SvgError);
;// CONCATENATED MODULE: ./src/components/general-error.tsx


const GeneralError = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center py-20 justify-center gap-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(error, {
                className: "text-green w-14 h-14"
            }),
            children
        ]
    });


/***/ }),

/***/ 4875:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getBlogCategoryServerSideProps)
/* harmony export */ });
/* harmony import */ var src_utils_get_blog_category_slug_and_page_from_slug_prop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7690);
/* harmony import */ var src_api_blog_category_props_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2003);
/* harmony import */ var src_api_blog_props_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8703);
/* harmony import */ var _global_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2911);
/* harmony import */ var _global_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6913);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_api_blog_category_props_requests__WEBPACK_IMPORTED_MODULE_0__, src_api_blog_props_requests__WEBPACK_IMPORTED_MODULE_1__, _global_footer__WEBPACK_IMPORTED_MODULE_2__, _global_header__WEBPACK_IMPORTED_MODULE_3__]);
([src_api_blog_category_props_requests__WEBPACK_IMPORTED_MODULE_0__, src_api_blog_props_requests__WEBPACK_IMPORTED_MODULE_1__, _global_footer__WEBPACK_IMPORTED_MODULE_2__, _global_header__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const getBlogCategoryServerSideProps = async (context)=>{
    try {
        const { slug , page  } = (0,src_utils_get_blog_category_slug_and_page_from_slug_prop__WEBPACK_IMPORTED_MODULE_4__/* .getBlogCategorySlugAndPageFromSlugProp */ .n)(context.params?.slug);
        const { head , category , crumbs  } = await (0,src_api_blog_category_props_requests__WEBPACK_IMPORTED_MODULE_0__/* .getBlogCategoryData */ .C)(slug, page);
        const { categories  } = await (0,src_api_blog_props_requests__WEBPACK_IMPORTED_MODULE_1__/* .getBlogCategoriesData */ .E)(slug);
        const { articlesMeta , articles  } = await (0,src_api_blog_category_props_requests__WEBPACK_IMPORTED_MODULE_0__/* .getBlogCategoryArticlesData */ .g)(slug, page);
        const { id , name , url , description  } = category;
        return {
            props: {
                head,
                header: await (0,_global_header__WEBPACK_IMPORTED_MODULE_3__/* .header */ .F)(),
                crumbs,
                id,
                name,
                description,
                url,
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

/***/ 1471:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_layout_main_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6028);
/* harmony import */ var src_components_blog_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7045);
/* harmony import */ var src_components_blog_articles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5442);
/* harmony import */ var src_components_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6954);
/* harmony import */ var src_page_props_blog_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4875);
/* harmony import */ var src_components_article_count_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7482);
/* harmony import */ var src_components_blog_categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8045);
/* harmony import */ var src_components_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(104);
/* harmony import */ var src_components_general_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6983);
/* harmony import */ var src_components_typography_body_regular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8253);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_layout_main_layout__WEBPACK_IMPORTED_MODULE_1__, src_page_props_blog_category__WEBPACK_IMPORTED_MODULE_5__]);
([src_layout_main_layout__WEBPACK_IMPORTED_MODULE_1__, src_page_props_blog_category__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const getServerSideProps = src_page_props_blog_category__WEBPACK_IMPORTED_MODULE_5__/* .getBlogCategoryServerSideProps */ .W;
const BlogCategoryPage = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_layout_main_layout__WEBPACK_IMPORTED_MODULE_1__/* .MainLayout */ .Z, {
        props: {
            head: props.head,
            header: props.header,
            footer: props.footer
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_blog_hero__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: props.name,
                description: props.description,
                crumbs: props.crumbs
            }),
            props.articles.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                className: "flex flex-col gap-8 md:gap-14 pt-10 md:pt-16 pb-14 md:pb-24",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_blog_categories__WEBPACK_IMPORTED_MODULE_7__/* .BlogCategories */ .z, {
                        categories: props.categories
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_article_count_range__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        total: props.articlesMeta.total,
                        perPage: props.articlesMeta.perPage,
                        activePage: props.articlesMeta.activePage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_blog_articles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        articles: props.articles
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_pagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        total: props.articlesMeta.total,
                        perPage: props.articlesMeta.perPage,
                        activePage: props.articlesMeta.activePage,
                        baseUrl: props.url
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                className: "flex flex-col gap-8 md:gap-14 pt-10 md:pt-16 pb-14 md:pb-24",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_blog_categories__WEBPACK_IMPORTED_MODULE_7__/* .BlogCategories */ .z, {
                        categories: props.categories
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_general_error__WEBPACK_IMPORTED_MODULE_9__/* .GeneralError */ .a, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_typography_body_regular__WEBPACK_IMPORTED_MODULE_10__/* .BodyRegular */ .F, {
                            children: "No articles to display"
                        })
                    })
                ]
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCategoryPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ getBlogCategorySlugAndPageFromSlugProp)
/* harmony export */ });
const getBlogCategorySlugAndPageFromSlugProp = (slugs)=>{
    if (!slugs) {
        throw new Error("INVALID_URL_FORMAT");
    }
    const slug = Array.isArray(slugs) ? slugs.join("/") : slugs;
    const categoryMatchedRegex = slug.match(/^([\w-]+)$/);
    const categoryAndPageMatchedRegex = slug.match(/^([\w-]+)\/page\/(\d+)$/);
    if (categoryAndPageMatchedRegex) {
        return {
            slug: categoryAndPageMatchedRegex[1],
            page: Number(categoryAndPageMatchedRegex[2])
        };
    }
    if (categoryMatchedRegex) {
        return {
            slug: categoryMatchedRegex[1],
            page: 1
        };
    }
    throw new Error("INVALID_URL_FORMAT");
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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,484,735], () => (__webpack_exec__(1471)));
module.exports = __webpack_exports__;

})();