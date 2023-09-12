"use strict";
exports.id = 735;
exports.ids = [735];
exports.modules = {

/***/ 7227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eb": () => (/* binding */ BlogDtoToArticlesProp),
/* harmony export */   "gv": () => (/* binding */ BlogCategoriesDtoToCategoriesProp),
/* harmony export */   "j8": () => (/* binding */ BlogDtoToMetaProp)
/* harmony export */ });
/* harmony import */ var _utils_concat_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1909);
/* harmony import */ var _constants_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3750);
/* harmony import */ var _constants_no_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8295);



const BlogDtoToArticlesProp = (data)=>data.map((article)=>({
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
const BlogDtoToMetaProp = (meta, perPage, activePage)=>({
        total: meta.filter_count,
        perPage,
        activePage
    });
const BlogCategoriesDtoToCategoriesProp = (data)=>data.map((category)=>({
            id: category.id,
            url: `${process.env.SITE_URL}/articles/category/${category.Slug}`,
            name: category.Name
        }));


/***/ }),

/***/ 2120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ BlogEndpoints)
/* harmony export */ });
var BlogEndpoints;
(function(BlogEndpoints) {
    BlogEndpoints["GetArticles"] = "/items/Blog_Article?fields=id,Slug,Date,Image.id,Image.title,Title,Short_Description,Categories.Blog_Category_id.*&limit={limit}&offset={offset}&sort=-Date&meta=filter_count";
    BlogEndpoints["GetCategories"] = "/items/Blog_Category?fields=id,Slug,Name&filter[Slug][_neq]={slug}";
})(BlogEndpoints || (BlogEndpoints = {}));


/***/ }),

/***/ 8703:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ getBlogCategoriesData),
/* harmony export */   "T": () => (/* binding */ getBlogData)
/* harmony export */ });
/* harmony import */ var src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9979);
/* harmony import */ var _constants_blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3750);
/* harmony import */ var _DtoToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7227);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2120);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__]);
src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const getBlogData = async (page)=>{
    const endpoint = _constants__WEBPACK_IMPORTED_MODULE_2__/* .BlogEndpoints.GetArticles.replace */ .f.GetArticles.replace("{limit}", _constants_blog__WEBPACK_IMPORTED_MODULE_3__/* .PER_PAGE.toString */ .LZ.toString()).replace("{offset}", (_constants_blog__WEBPACK_IMPORTED_MODULE_3__/* .PER_PAGE */ .LZ * (page - 1)).toString());
    const { data: response  } = await src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__/* .directusClient.get */ .A.get(endpoint);
    return {
        meta: (0,_DtoToProps__WEBPACK_IMPORTED_MODULE_1__/* .BlogDtoToMetaProp */ .j8)(response.meta, _constants_blog__WEBPACK_IMPORTED_MODULE_3__/* .PER_PAGE */ .LZ, page),
        articles: (0,_DtoToProps__WEBPACK_IMPORTED_MODULE_1__/* .BlogDtoToArticlesProp */ .eb)(response.data)
    };
};
const getBlogCategoriesData = async (slug)=>{
    const endpoint = _constants__WEBPACK_IMPORTED_MODULE_2__/* .BlogEndpoints.GetCategories.replace */ .f.GetCategories.replace("{slug}", slug);
    const { data: response  } = await src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__/* .directusClient.get */ .A.get(endpoint);
    return {
        categories: (0,_DtoToProps__WEBPACK_IMPORTED_MODULE_1__/* .BlogCategoriesDtoToCategoriesProp */ .gv)(response.data)
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);
/* harmony import */ var _typography_body_regular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8253);




const ArticleCountRange = ({ total , activePage , perPage  })=>{
    const from = (activePage - 1) * perPage + 1;
    const to = Math.min(activePage * perPage, total);
    const of = total;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_typography_body_regular__WEBPACK_IMPORTED_MODULE_3__/* .BodyRegular */ .F, {
            className: "text-black-500 !text-[17px]",
            children: `Article${from === to ? "" : "s"} ${from} - ${to} of ${of}`
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleCountRange);


/***/ }),

/***/ 8045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ BlogCategories)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7011);



const BlogCategories = ({ categories  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        className: "flex justify-center flex-wrap gap-4 max-w-[600px]",
        children: categories.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_category__WEBPACK_IMPORTED_MODULE_2__/* .Category */ .W, {
                category: category
            }, category.id))
    });


/***/ }),

/***/ 5442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4020);
/* harmony import */ var src_components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(104);
/* harmony import */ var src_components_typography_body_small__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2896);
/* harmony import */ var src_components_typography_label_regular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5742);
/* harmony import */ var src_utils_concat_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1909);








const Articles = ({ articles  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "articles relative flex justify-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4",
                children: articles.map((article)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: article.url,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "transition-opacity duration-300 flex flex-col group cursor-pointer mb-4 min-h-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full pt-[80%] relative",
                                    children: article.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        alt: article.image.alt,
                                        className: "w-full h-full top-0 left-0 absolute object-cover rounded-2xl",
                                        src: article.image.url
                                    })
                                }),
                                article.dateCreated && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_typography_label_regular__WEBPACK_IMPORTED_MODULE_6__/* .LabelRegular */ .H, {
                                    className: "mt-3 transition-opacity duration-500 group-hover:opacity-40",
                                    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(article.dateCreated), "EEEE MMMM do, yyyy")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_typography_body_small__WEBPACK_IMPORTED_MODULE_5__/* .BodySmall */ .B, {
                                    className: "mt-2 transition-opacity duration-500 group-hover:opacity-40",
                                    children: article.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_typography_label_regular__WEBPACK_IMPORTED_MODULE_6__/* .LabelRegular */ .H, {
                                    className: "mt-1 transition-opacity duration-500 group-hover:opacity-40 mb-6",
                                    children: (0,src_utils_concat_string__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(article.shortDescription, 80)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                                    colour: "dark",
                                    className: "mt-auto mb-0",
                                    children: "Read More"
                                })
                            ]
                        })
                    }, article.id))
            })
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Articles);


/***/ }),

/***/ 7045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hero)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "isomorphic-dompurify"
var external_isomorphic_dompurify_ = __webpack_require__(3059);
var external_isomorphic_dompurify_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_dompurify_);
// EXTERNAL MODULE: ./src/utils/concat-string.tsx
var concat_string = __webpack_require__(1909);
;// CONCATENATED MODULE: ./src/components/breadcrumbs.tsx





const Slash = ({ isLast , textClassName  })=>{
    if (isLast) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: `mx-1 ${textClassName}`,
        children: "/"
    });
};
const Breadcrumbs = ({ crumbs , textClassName , containerClassName  })=>{
    const schema = `{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [${crumbs.map((crumb, index)=>`{
            "@type": "ListItem",
            "position": ${index + 1},
            "item": {
                "name": "${crumb.text}",
                "@id": "${process.env.SITE_URL + crumb.href}"
            }
        }`).join(",")}]}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `flex-wrap flex ${containerClassName}`,
        children: [
            crumbs.map((crumb, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: crumb.href,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: `cursor-pointer ${textClassName} ${index === crumbs.length - 1 ? "underline" : ""}`,
                                children: (0,concat_string/* default */.Z)(crumb.text)
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Slash, {
                            isLast: crumbs.length === index + 1,
                            textClassName: textClassName
                        })
                    ]
                }, crumb.id)),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: external_isomorphic_dompurify_default().sanitize(schema)
                }
            })
        ]
    });
};
/* harmony default export */ const breadcrumbs = (Breadcrumbs);

// EXTERNAL MODULE: ./src/components/container.tsx
var container = __webpack_require__(104);
// EXTERNAL MODULE: ./src/components/typography/header/regular.tsx
var regular = __webpack_require__(5703);
// EXTERNAL MODULE: ./src/components/typography/body/regular.tsx
var body_regular = __webpack_require__(8253);
;// CONCATENATED MODULE: ./src/components/blog/hero.tsx






const Hero = ({ title , description , crumbs ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "blog-hero w-full py-20 md:py-40 relative flex justify-center md:justify-start items-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* default */.Z, {
                className: "z-20 text-center justify-center text-navy-dark",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(breadcrumbs, {
                        crumbs: crumbs,
                        textClassName: "text-[18px]",
                        containerClassName: "justify-center"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(regular/* HeaderRegular */.v, {
                        className: "uppercase mt-3 w-full",
                        variant: "h1",
                        children: title
                    }),
                    description && /*#__PURE__*/ jsx_runtime_.jsx(body_regular/* BodyRegular */.F, {
                        className: "mt-6 w-full mx-w-[700px]",
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "w-full h-full absolute object-cover inset-0 z-10",
                alt: "background",
                src: "/hero-background.png"
            })
        ]
    });
/* harmony default export */ const hero = (Hero);


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

/***/ 6954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ pagination)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/assets/arrow.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgArrow = function SvgArrow(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: "800px",
    height: "800px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 7.83335C12 7.4963 12.2088 7.19244 12.5291 7.06346C12.8494 6.93447 13.2181 7.00577 13.4632 7.2441L17.7489 11.4107C18.0837 11.7362 18.0837 12.2638 17.7489 12.5893L13.4632 16.7559C13.2181 16.9942 12.8494 17.0655 12.5291 16.9365C12.2088 16.8076 12 16.5037 12 16.1666V14H7C6.44771 14 6 13.5523 6 13V11C6 10.4477 6.44771 10 7 10H12V7.83335Z",
    fill: "currentColor"
  })));
};
/* harmony default export */ const arrow = (SvgArrow);
;// CONCATENATED MODULE: ./src/components/pagination.tsx




const PreviousButton = ({ isDisabled , onNavigateToPreviousPage ,  })=>{
    if (isDisabled) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-12 h-12 flex text-gray-400 items-center justify-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx(arrow, {
                className: "h-full w-full transform -scale-x-100 opacity-50 text-navy"
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: "button",
        onClick: onNavigateToPreviousPage,
        className: "w-12 h-12 flex text-primary items-center justify-center cursor-pointer",
        children: /*#__PURE__*/ jsx_runtime_.jsx(arrow, {
            className: "h-full w-full transform -scale-x-100 text-navy"
        })
    });
};
const NextButton = ({ isDisabled , onNavigateToNextPage ,  })=>{
    if (isDisabled) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-12 h-12 flex text-gray-400 items-center justify-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx(arrow, {
                className: "h-full w-full opacity-50 text-navy"
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: "button",
        onClick: onNavigateToNextPage,
        className: "w-12 h-12 flex text-primary items-center justify-center cursor-pointer",
        children: /*#__PURE__*/ jsx_runtime_.jsx(arrow, {
            className: "h-full w-full text-navy"
        })
    });
};
const Page = ({ text , onNavigateToPage , isActive ,  })=>{
    const classes = `text-center text-base p-2 w-12 h-12 rounded-full font-semibold leading-8 ${isActive ? "text-white bg-green" : "cursor-pointer hover:bg-gray-100 text-gray-700"}`;
    if (onNavigateToPage) {
        return /*#__PURE__*/ jsx_runtime_.jsx("button", {
            type: "button",
            onClick: onNavigateToPage,
            className: classes,
            children: text
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes,
        children: text
    });
};
const Pages = ({ index , onNavigateToPage , totalPages , activePage  })=>{
    // different states of pagination
    // if less than 7 pages render as:
    // <- i i a i i i i ->
    if (totalPages <= 7) {
        if (index > totalPages) {
            return null;
        }
        if (index === activePage) {
            return /*#__PURE__*/ jsx_runtime_.jsx(Page, {
                text: index.toString(),
                isActive: true
            });
        }
        return /*#__PURE__*/ jsx_runtime_.jsx(Page, {
            text: index.toString(),
            onNavigateToPage: ()=>onNavigateToPage(index)
        });
    }
    // if greater than 7 page less than 3 or greater than third to last page, render as:
    // <- i a i … i i i ->
    if (activePage <= 3 || activePage >= totalPages - 2) {
        switch(index){
            case 4:
                return /*#__PURE__*/ jsx_runtime_.jsx(Page, {
                    text: "…"
                });
            case 1:
            case 2:
            case 3:
                return /*#__PURE__*/ jsx_runtime_.jsx(Page, {
                    text: index.toString(),
                    isActive: activePage === index
                });
            case 5:
            case 6:
            case 7:
                return /*#__PURE__*/ jsx_runtime_.jsx(Page, {
                    text: index.toString(),
                    isActive: activePage === index - 7 + totalPages
                });
            default:
                return null;
        }
    }
    // if on pages 4 to the 4th to last page, render as:
    // <- i … i a i … i ->
    if (activePage > 3 && activePage < totalPages - 2) {
        switch(index){
            case 1:
                return /*#__PURE__*/ jsx_runtime_.jsx(Page, {
                    text: "1",
                    onNavigateToPage: ()=>onNavigateToPage(index)
                });
            case 2:
            case 6:
                return /*#__PURE__*/ jsx_runtime_.jsx(Page, {
                    text: "…"
                });
            case 7:
                return /*#__PURE__*/ jsx_runtime_.jsx(Page, {
                    text: totalPages.toString(),
                    onNavigateToPage: ()=>onNavigateToPage(totalPages)
                });
            case 3:
            case 5:
                return /*#__PURE__*/ jsx_runtime_.jsx(Page, {
                    text: (activePage + index - 4).toString(),
                    onNavigateToPage: ()=>onNavigateToPage(activePage + index - 4)
                });
            case 4:
                return /*#__PURE__*/ jsx_runtime_.jsx(Page, {
                    text: activePage.toString()
                });
            default:
                return null;
        }
    }
    return null;
};
const Pagination = ({ total , activePage , perPage , baseUrl  })=>{
    const totalPages = Math.ceil(total / perPage);
    const router = (0,router_.useRouter)();
    const onNavigateToPage = (index)=>{
        if (index === 1) {
            router.push(baseUrl);
            return;
        }
        router.push(`${baseUrl}/page/${index}`);
    };
    const onNavigateToPreviousPage = ()=>onNavigateToPage(activePage - 1);
    const onNavigateToNextPage = ()=>onNavigateToPage(activePage + 1);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full flex justify-center items-stretch gap-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PreviousButton, {
                isDisabled: activePage === 1,
                onNavigateToPreviousPage: onNavigateToPreviousPage
            }),
            Array.from(Array(7).keys()).map((buttonIndex)=>/*#__PURE__*/ jsx_runtime_.jsx(Pages, {
                    index: buttonIndex + 1,
                    onNavigateToPage: onNavigateToPage,
                    activePage: activePage,
                    totalPages: totalPages
                }, buttonIndex)),
            /*#__PURE__*/ jsx_runtime_.jsx(NextButton, {
                isDisabled: activePage === totalPages,
                onNavigateToNextPage: onNavigateToNextPage
            })
        ]
    });
};
/* harmony default export */ const pagination = (Pagination);


/***/ }),

/***/ 8253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ BodyRegular)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BodyRegular = ({ children , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: `text-body ${className}`,
        children: children
    });


/***/ }),

/***/ 5742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ LabelRegular)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const LabelRegular = ({ children , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
        className: `text-label block text-zinc-600 ${className}`,
        children: children
    });


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


/***/ })

};
;