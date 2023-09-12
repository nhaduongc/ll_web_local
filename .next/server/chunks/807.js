"use strict";
exports.id = 807;
exports.ids = [807];
exports.modules = {

/***/ 6838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ PageDtoToBlocksProps),
  "n": () => (/* binding */ PageDtoToHeadProps)
});

// EXTERNAL MODULE: ./src/utils/concat-string.tsx
var concat_string = __webpack_require__(1909);
// EXTERNAL MODULE: ./src/constants/blog.ts
var blog = __webpack_require__(3750);
// EXTERNAL MODULE: ./src/constants/no-image.ts
var no_image = __webpack_require__(8295);
;// CONCATENATED MODULE: ./src/constants/colours.ts
const DEFAULT_TEXT_COLOUR = "#FFFFFF";
const DEFAULT_BACKGROUND_COLOUR = "#08122C";

;// CONCATENATED MODULE: ./src/api/page-props/DtoToProps.ts




const PageDtoToBlocksProps = ({ Blocks: blocks  })=>blocks.map((block)=>{
        switch(block.collection){
            case "Home_Hero":
                return {
                    id: block.id,
                    hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                    type: "home-hero",
                    heading: block.item.Title,
                    text: block.item.Text,
                    counterDigits: block.item.Counter_Digits,
                    appStoreButtons: block.item.App_Links.map((appLink)=>({
                            id: appLink.id,
                            url: appLink.Image_Link_id.URL,
                            ...appLink.Image_Link_id.Target && {
                                target: appLink.Image_Link_id.Target
                            },
                            ...appLink.Image_Link_id.Ref && {
                                ref: appLink.Image_Link_id.Ref
                            },
                            ...appLink.Image_Link_id.Image ? {
                                image: {
                                    id: appLink.Image_Link_id.Image.id,
                                    alt: appLink.Image_Link_id.Image.title,
                                    url: `${process.env.DIRECTUS_BASE_URL}/assets/${appLink.Image_Link_id.Image.id}`
                                }
                            } : {
                                image: no_image/* noImage */.T
                            }
                        })),
                    ...block.item.Background ? {
                        background: {
                            id: block.item.Background.id,
                            alt: block.item.Background.title,
                            url: `${process.env.DIRECTUS_BASE_URL}/assets/${block.item.Background.id}`
                        }
                    } : {
                        background: no_image/* noImage */.T
                    },
                    ...block.item.Hand ? {
                        hand: {
                            id: block.item.Hand.id,
                            alt: block.item.Hand.title,
                            url: `${process.env.DIRECTUS_BASE_URL}/assets/${block.item.Hand.id}`
                        }
                    } : {
                        hand: no_image/* noImage */.T
                    },
                    textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR
                };
            case "Text":
                return {
                    id: block.id,
                    hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                    type: "full-width-text",
                    heading: block.item.Title,
                    text: block.item.Text,
                    titleColour: block.item.Title_Colour ?? DEFAULT_TEXT_COLOUR,
                    textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR,
                    backgroundColour: block.item.Background_Colour ?? DEFAULT_BACKGROUND_COLOUR
                };
            case "Marquee":
                return {
                    id: block.id,
                    hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                    type: "marquee",
                    ...block.item.Text ? {
                        items: block.item.Text.map((text, id)=>({
                                id,
                                text: text.Text_Value
                            }))
                    } : {
                        items: []
                    },
                    reverse: block.item.Direction === "right-to-left",
                    topColour: block.item.Top_Colour ?? DEFAULT_BACKGROUND_COLOUR,
                    bottomColour: block.item.Bottom_Colour ?? DEFAULT_BACKGROUND_COLOUR,
                    speed: block.item.Speed
                };
            case "Winner_Story_Carousel":
                return {
                    id: block.id,
                    hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                    type: "previous-winners",
                    text: block.item.Text,
                    winners: block.item.Story_Carousel.map((story)=>({
                            id: story.id,
                            link: {
                                id: story.id,
                                text: story.Winner_Story_id.Link.Text,
                                url: story.Winner_Story_id.Link.URL,
                                ...story.Winner_Story_id.Link.Target && {
                                    target: story.Winner_Story_id.Link.Target
                                },
                                ...story.Winner_Story_id.Link.Ref && {
                                    ref: story.Winner_Story_id.Link.Ref
                                }
                            },
                            ...story.Winner_Story_id.Image ? {
                                image: {
                                    id: story.Winner_Story_id.Image.id,
                                    alt: story.Winner_Story_id.Image.title,
                                    url: `${process.env.DIRECTUS_BASE_URL}/assets/${story.Winner_Story_id.Image.id}`
                                }
                            } : {
                                image: no_image/* noImage */.T
                            },
                            title: story.Winner_Story_id.Title
                        })),
                    textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR
                };
            case "Winner_Carousel":
                return {
                    id: block.id,
                    hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                    type: "spot-winners",
                    winners: block.item.Winner_Carousel.map((winner)=>({
                            id: winner.id,
                            ...winner.Winner_id.Image ? {
                                image: {
                                    id: winner.Winner_id.Image.id,
                                    alt: winner.Winner_id.Image.title,
                                    url: `${process.env.DIRECTUS_BASE_URL}/assets/${winner.Winner_id.Image.id}`
                                }
                            } : {
                                image: no_image/* noImage */.T
                            },
                            name: winner.Winner_id.Name
                        })),
                    textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR
                };
            case "Screens":
                return {
                    id: block.id,
                    hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                    type: "call-to-action",
                    ...block.item.Background ? {
                        background: {
                            id: block.item.Background.id,
                            alt: block.item.Background.title,
                            url: `${process.env.DIRECTUS_BASE_URL}/assets/${block.item.Background.id}`
                        }
                    } : {
                        background: no_image/* noImage */.T
                    },
                    topContent: block.item.Top_Text,
                    bottomContent: block.item.Bottom_Text,
                    ...block.item.Logo ? {
                        logo: {
                            id: block.item.Logo.id,
                            alt: block.item.Logo.title,
                            url: `${process.env.DIRECTUS_BASE_URL}/assets/${block.item.Logo.id}`
                        }
                    } : {
                        logo: no_image/* noImage */.T
                    },
                    appStoreButtons: block.item.App_Links.map((appLink)=>({
                            id: appLink.id,
                            url: appLink.Image_Link_id.URL,
                            ...appLink.Image_Link_id.Target && {
                                target: appLink.Image_Link_id.Target
                            },
                            ...appLink.Image_Link_id.Ref && {
                                ref: appLink.Image_Link_id.Ref
                            },
                            ...appLink.Image_Link_id.Image ? {
                                image: {
                                    id: appLink.Image_Link_id.Image.id,
                                    alt: appLink.Image_Link_id.Image.title,
                                    url: `${process.env.DIRECTUS_BASE_URL}/assets/${appLink.Image_Link_id.Image.id}`
                                }
                            } : {
                                image: no_image/* noImage */.T
                            }
                        })),
                    screens: block.item.Screen_Carousel.map((screen)=>({
                            id: screen.id,
                            textColour: screen.Screen_id.Text_Colour,
                            title: screen.Screen_id.Title,
                            ...screen.Screen_id.Image ? {
                                image: {
                                    id: screen.Screen_id.Image.id,
                                    alt: screen.Screen_id.Image.title,
                                    url: `${process.env.DIRECTUS_BASE_URL}/assets/${screen.Screen_id.Image.id}`
                                }
                            } : {
                                image: no_image/* noImage */.T
                            }
                        })),
                    textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR
                };
            case "Article_Carousel":
                return {
                    id: block.id,
                    hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                    type: "article-slider",
                    title: block.item.Title,
                    articles: block.item.Blog_Articles.map((article)=>({
                            id: article.id,
                            url: `${process.env.SITE_URL}/article/${article.Blog_Article_id.Slug}`,
                            dateCreated: article.Blog_Article_id.Date,
                            ...article.Blog_Article_id.Image ? {
                                image: {
                                    id: article.Blog_Article_id.Image.id,
                                    url: `${process.env.DIRECTUS_BASE_URL}/assets/${article.Blog_Article_id.Image.id}`,
                                    alt: article.Blog_Article_id.Image.title
                                }
                            } : {
                                image: no_image/* noImage */.T
                            },
                            title: (0,concat_string/* default */.Z)(article.Blog_Article_id.Title ?? "", blog/* ARTICLE_TITLE_LENGTH */.tw),
                            shortDescription: (0,concat_string/* default */.Z)(article.Blog_Article_id.Short_Description ?? "", blog/* ARTICLE_SHORT_DESCRIPTION_LENGTH */.f$),
                            categories: []
                        })),
                    ...block.item.Background ? {
                        background: {
                            id: block.item.Background.id,
                            url: `${process.env.DIRECTUS_BASE_URL}/assets/${block.item.Background.id}`,
                            alt: block.item.Background.title
                        }
                    } : {
                        background: no_image/* noImage */.T
                    },
                    textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR
                };
            case "Hero":
                return {
                    id: block.id,
                    hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                    type: "hero",
                    heading: block.item.Title,
                    text: block.item.Text,
                    ...block.item.Background ? {
                        background: {
                            id: block.item.Background.id,
                            alt: block.item.Background.title,
                            url: `${process.env.DIRECTUS_BASE_URL}/assets/${block.item.Background.id}`
                        }
                    } : {
                        background: no_image/* noImage */.T
                    },
                    textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR
                };
            case "Contact":
                return {
                    id: block.id,
                    hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                    type: "contact",
                    title: block.item.Title,
                    text: block.item.Text,
                    redirectsTo: block.item.Redirects_To,
                    titleColour: block.item.Title_Colour,
                    textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR,
                    backgroundColour: block.item.Background_Colour ?? DEFAULT_BACKGROUND_COLOUR
                };
            case "Image":
                return {
                    id: block.id,
                    hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                    type: "image",
                    ...block.item.Image ? {
                        image: {
                            id: block.item.Image.id,
                            alt: block.item.Image.title,
                            url: `${process.env.DIRECTUS_BASE_URL}/assets/${block.item.Image.id}`
                        }
                    } : {
                        image: no_image/* noImage */.T
                    },
                    width: block.item.Width,
                    backgroundColour: block.item.Background_Colour ?? DEFAULT_BACKGROUND_COLOUR
                };
            case "Two_Column":
                return {
                    id: block.id,
                    hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                    type: "two-column",
                    reverse: block.item.Direction === "right-to-left",
                    ...block.item.Image ? {
                        image: {
                            id: block.item.Image.id,
                            alt: block.item.Image.title,
                            url: `${process.env.DIRECTUS_BASE_URL}/assets/${block.item.Image.id}`
                        }
                    } : {
                        image: no_image/* noImage */.T
                    },
                    heading: block.item.Title,
                    text: block.item.Text,
                    titleColour: block.item.Title_Colour ?? DEFAULT_TEXT_COLOUR,
                    textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR,
                    backgroundColour: block.item.Background_Colour ?? DEFAULT_BACKGROUND_COLOUR
                };
            default:
                return null;
        }
    }).filter((block)=>Boolean(block));
const PageDtoToHeadProps = (data)=>({
        metaTitle: data.Meta_Title,
        metaDescription: data.Meta_Description,
        canonical: `${process.env.SITE_URL}${data.Slug !== "" ? `/${data.Slug}` : ""}`
    });


/***/ }),

/***/ 6309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ PageEndpoints)
/* harmony export */ });
var PageEndpoints;
(function(PageEndpoints) {
    PageEndpoints["GetHomePage"] = "/items/Pages?filter[Slug][_empty]=true&fields=Meta_Title,Meta_Description,Name,Slug,Blocks.collection,Blocks.id,Blocks.item.Has_Hash_Anchor,Blocks.item.Hash_Anchor,Blocks.item.Background.title,Blocks.item.Counter_Digits,Blocks.item.Background.id,Blocks.item.Hand.title,Blocks.item.Hand.id,Blocks.item.Text,Blocks.item.Title,Blocks.item.App_Links.id,Blocks.item.App_Links.Image_Link_id.Image.id,Blocks.item.App_Links.Image_Link_id.Image.title,Blocks.item.App_Links.Image_Link_id.Ref,Blocks.item.App_Links.Image_Link_id.Target,Blocks.item.App_Links.Image_Link_id.URL,Blocks.item.Text.Text_Value,Blocks.item.Bottom_Colour,Blocks.item.Direction,Blocks.item.Top_Colour,Blocks.item.Speed,Blocks.item.Story_Carousel.id,Blocks.item.Story_Carousel.Winner_Story_id.Title,Blocks.item.Story_Carousel.Winner_Story_id.Image.id,Blocks.item.Story_Carousel.Winner_Story_id.Image.title,Blocks.item.Story_Carousel.Winner_Story_id.Link.URL,Blocks.item.Story_Carousel.Winner_Story_id.Link.Text,Blocks.item.Story_Carousel.Winner_Story_id.Link.Target,Blocks.item.Story_Carousel.Winner_Story_id.Link.Ref,Blocks.item.Winner_Carousel.id,Blocks.item.Winner_Carousel.Winner_id.Image.id,Blocks.item.Winner_Carousel.Winner_id.Image.title,Blocks.item.Winner_Carousel.Winner_id.Name,Blocks.item.Bottom_Text,Blocks.item.Top_Text,Blocks.item.Logo.id,Blocks.item.Logo.title,Blocks.item.Screen_Carousel.id,Blocks.item.Screen_Carousel.Screen_id.Title,Blocks.item.Screen_Carousel.Screen_id.Text_Colour,Blocks.item.Screen_Carousel.Screen_id.Image.id,Blocks.item.Screen_Carousel.Screen_id.Image.title,Blocks.item.Blog_Articles.id,Blocks.item.Blog_Articles.Blog_Article_id.Date,Blocks.item.Blog_Articles.Blog_Article_id.Image.id,Blocks.item.Blog_Articles.Blog_Article_id.Image.title,Blocks.item.Blog_Articles.Blog_Article_id.Slug,Blocks.item.Blog_Articles.Blog_Article_id.Title,Blocks.item.Blog_Articles.Blog_Article_id.Short_Description,Blocks.item.Redirects_To,Blocks.item.Image.title,Blocks.item.Image.id,Blocks.item.Width,Blocks.item.Image.id,Blocks.item.Image.title,Blocks.item.Text_Colour,Blocks.item.Title_Colour,Blocks.item.Background_Colour";
    PageEndpoints["GetPage"] = "/items/Pages?filter[Slug][_eq]={slug}&fields=Meta_Title,Meta_Description,Name,Slug,Blocks.collection,Blocks.id,Blocks.item.Has_Hash_Anchor,Blocks.item.Hash_Anchor,Blocks.item.Background.title,Blocks.item.Counter_Digits,Blocks.item.Background.id,Blocks.item.Hand.title,Blocks.item.Hand.id,Blocks.item.Text,Blocks.item.Title,Blocks.item.App_Links.id,Blocks.item.App_Links.Image_Link_id.Image.id,Blocks.item.App_Links.Image_Link_id.Image.title,Blocks.item.App_Links.Image_Link_id.Ref,Blocks.item.App_Links.Image_Link_id.Target,Blocks.item.App_Links.Image_Link_id.URL,Blocks.item.Text.Text_Value,Blocks.item.Bottom_Colour,Blocks.item.Direction,Blocks.item.Top_Colour,Blocks.item.Speed,Blocks.item.Story_Carousel.id,Blocks.item.Story_Carousel.Winner_Story_id.Title,Blocks.item.Story_Carousel.Winner_Story_id.Image.id,Blocks.item.Story_Carousel.Winner_Story_id.Image.title,Blocks.item.Story_Carousel.Winner_Story_id.Link.URL,Blocks.item.Story_Carousel.Winner_Story_id.Link.Text,Blocks.item.Story_Carousel.Winner_Story_id.Link.Target,Blocks.item.Story_Carousel.Winner_Story_id.Link.Ref,Blocks.item.Winner_Carousel.id,Blocks.item.Winner_Carousel.Winner_id.Image.id,Blocks.item.Winner_Carousel.Winner_id.Image.title,Blocks.item.Winner_Carousel.Winner_id.Name,Blocks.item.Bottom_Text,Blocks.item.Top_Text,Blocks.item.Logo.id,Blocks.item.Logo.title,Blocks.item.Screen_Carousel.id,Blocks.item.Screen_Carousel.Screen_id.Title,Blocks.item.Screen_Carousel.Screen_id.Text_Colour,Blocks.item.Screen_Carousel.Screen_id.Image.id,Blocks.item.Screen_Carousel.Screen_id.Image.title,Blocks.item.Blog_Articles.id,Blocks.item.Blog_Articles.Blog_Article_id.Date,Blocks.item.Blog_Articles.Blog_Article_id.Image.id,Blocks.item.Blog_Articles.Blog_Article_id.Image.title,Blocks.item.Blog_Articles.Blog_Article_id.Slug,Blocks.item.Blog_Articles.Blog_Article_id.Title,Blocks.item.Blog_Articles.Blog_Article_id.Short_Description,Blocks.item.Redirects_To,Blocks.item.Image.title,Blocks.item.Image.id,Blocks.item.Width,Blocks.item.Image.id,Blocks.item.Image.title,Blocks.item.Text_Colour,Blocks.item.Title_Colour,Blocks.item.Background_Colour";
})(PageEndpoints || (PageEndpoints = {}));


/***/ }),

/***/ 2746:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ getPageData)
/* harmony export */ });
/* harmony import */ var src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9979);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6309);
/* harmony import */ var _DtoToProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__]);
src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getPageData = async (slug)=>{
    const endpoint = slug === "" ? _constants__WEBPACK_IMPORTED_MODULE_1__/* .PageEndpoints.GetHomePage */ .H.GetHomePage : _constants__WEBPACK_IMPORTED_MODULE_1__/* .PageEndpoints.GetPage.replace */ .H.GetPage.replace("{slug}", slug);
    const { data: response  } = await src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__/* .directusClient.get */ .A.get(endpoint);
    if (response.data.length === 0) {
        throw new Error("PAGE_NOT_FOUND");
    }
    return {
        head: (0,_DtoToProps__WEBPACK_IMPORTED_MODULE_2__/* .PageDtoToHeadProps */ .n)(response.data[0]),
        blocks: (0,_DtoToProps__WEBPACK_IMPORTED_MODULE_2__/* .PageDtoToBlocksProps */ .F)(response.data[0])
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ AppStoreButtons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const AppStoreButtons = ({ buttons  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 w-full justify-center items-center",
        children: buttons.map((button)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: button.url,
                title: button.image.alt,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: button.image.url,
                    alt: button.image.alt,
                    className: "h-12 w-auto transition-opacity hover:opacity-80"
                })
            }, button.id))
    });


/***/ }),

/***/ 6114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Content = ({ html , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `content ${className}`,
        dangerouslySetInnerHTML: {
            __html: html
        }
    });


/***/ }),

/***/ 2962:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ getCounterValue)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getCounterValue = async ()=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("https://europe-west2-litterlotto.cloudfunctions.net/public/entries/entries", {}, {
        headers: {
            api_key: "ayGNUTj4rFOKVhCuCxLJ"
        }
    });
    return data.totalEntries;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Counter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_utils_format_number_with_commas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3315);
/* harmony import */ var _utils_animate_counter_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8555);
/* harmony import */ var _hooks_use_get_counter_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4502);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_get_counter_value__WEBPACK_IMPORTED_MODULE_2__]);
_hooks_use_get_counter_value__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Counter = ({ counterDigits =1  })=>{
    const { 0: counterValue , 1: setCounterValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: targetCounterValue , 1: setTargetCounterValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils_animate_counter_value__WEBPACK_IMPORTED_MODULE_3__/* .animateCounterValue */ .X)(setCounterValue, counterValue, targetCounterValue, 6000);
    }, [
        targetCounterValue
    ]);
    (0,_hooks_use_get_counter_value__WEBPACK_IMPORTED_MODULE_2__/* .useGetCounterValue */ .N)(setTargetCounterValue);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "justify-center items-center flex py-8 -mx-4 w-[calc(100%+32px)]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "rounded-lg bg-black/[.1] w-[600px] max-w-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-header-medium xs:text-header-large md:text-header-xlarge font-inconsolata tracking-tighter px-8 md:px-16 py-4 md:py-8",
                    children: (0,src_utils_format_number_with_commas__WEBPACK_IMPORTED_MODULE_4__/* .formatNumberWithCommas */ .p)(counterValue, counterDigits)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-body-small font-semibold bg-black/[.125] p-3",
                    children: "pieces of litter binned, and counting!"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4502:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useGetCounterValue)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _api_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2962);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _api_requests__WEBPACK_IMPORTED_MODULE_1__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _api_requests__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useGetCounterValue = (handleSetNewValue)=>{
    (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)({
        queryKey: [
            "counter-value"
        ],
        queryFn: ()=>(0,_api_requests__WEBPACK_IMPORTED_MODULE_1__/* .getCounterValue */ .v)(),
        refetchInterval: 8000,
        onSuccess: (data)=>{
            if (data) handleSetNewValue(data);
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* binding */ animateCounterValue)
});

;// CONCATENATED MODULE: ./src/utils/ease-out-quart.ts
const easeOutQuart = (t)=>{
    if (t === 1) return 1;
    return 1 - 2 ** (-10 * t);
};

;// CONCATENATED MODULE: ./src/components/counter/utils/animate-counter-value.ts

const animateCounterValue = (handleChangeCounterValue, start, target, duration)=>{
    const startTimestamp = new Date().getTime();
    let currentValue = 0;
    const requestNextCount = ()=>{
        handleChangeCounterValue(Math.ceil(easeOutQuart(currentValue) * (target - start) + start));
        if (currentValue === 1) return;
        window.requestAnimationFrame(()=>{
            const currentTimestamp = new Date().getTime();
            currentValue = Math.min((currentTimestamp - startTimestamp) / duration, 1);
            requestNextCount();
        });
    };
    requestNextCount();
};


/***/ }),

/***/ 798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ FeatureContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FeatureContent = ({ html , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `feature-content ${className}`,
        dangerouslySetInnerHTML: {
            __html: html
        }
    });


/***/ }),

/***/ 6268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* binding */ ArticleSlider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@splidejs/react-splide"
var react_splide_ = __webpack_require__(8702);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/typography/label/regular.tsx
var regular = __webpack_require__(5742);
// EXTERNAL MODULE: ./src/utils/concat-string.tsx
var concat_string = __webpack_require__(1909);
// EXTERNAL MODULE: ./src/components/button.tsx
var components_button = __webpack_require__(4020);
// EXTERNAL MODULE: ./src/components/typography/body/regular.tsx
var body_regular = __webpack_require__(8253);
// EXTERNAL MODULE: ./src/components/container.tsx
var container = __webpack_require__(104);
;// CONCATENATED MODULE: ./src/components/typography/header/small.tsx

const HeaderSmall = ({ children , className , variant ="h2"  })=>{
    switch(variant){
        case "h1":
            return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: `text-body-lead font-bold ${className}`,
                children: children
            });
        case "h2":
            return /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: `text-body-lead font-bold ${className}`,
                children: children
            });
        case "h3":
            return /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: `text-body-lead font-bold ${className}`,
                children: children
            });
        case "h4":
            return /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: `text-body-lead font-bold ${className}`,
                children: children
            });
        case "h5":
            return /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                className: `text-body-lead font-bold ${className}`,
                children: children
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                className: `text-body-lead font-bold ${className}`,
                children: children
            });
    }
};

;// CONCATENATED MODULE: ./src/components/page-blocks/article-slider.tsx











const ArticleSlider = ({ data  })=>{
    const options = {
        type: "loop",
        drag: "free",
        focus: "center",
        direction: "ltr",
        pagination: false,
        arrows: false,
        snap: true,
        gap: "14px",
        perPage: 1,
        mediaQuery: "min",
        breakpoints: {
            640: {
                perPage: 2
            },
            768: {
                gap: "22px",
                perPage: 3,
                arrows: true
            },
            1280: {
                perPage: 4
            },
            1536: {
                perPage: 5
            },
            1920: {
                perPage: 6
            },
            2330: {
                perPage: 7
            }
        }
    };
    const Waves = [
        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1440 320",
            width: "150%",
            height: "100%",
            preserveAspectRatio: "none",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M0,192L30,208C60,224,120,256,180,256C240,256,300,224,360,192C420,160,480,128,540,112C600,96,660,96,720,96C780,96,840,96,900,112C960,128,1020,160,1080,170.7C1140,181,1200,171,1260,160C1320,149,1380,139,1410,133.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            })
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1440 320",
            width: "150%",
            height: "100%",
            preserveAspectRatio: "none",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M0,192L30,165.3C60,139,120,85,180,101.3C240,117,300,203,360,218.7C420,235,480,181,540,160C600,139,660,149,720,170.7C780,192,840,224,900,213.3C960,203,1020,149,1080,154.7C1140,160,1200,224,1260,250.7C1320,277,1380,267,1410,261.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            })
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1440 320",
            width: "150%",
            height: "100%",
            preserveAspectRatio: "none",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M0,288L30,272C60,256,120,224,180,224C240,224,300,256,360,261.3C420,267,480,245,540,224C600,203,660,181,720,186.7C780,192,840,224,900,250.7C960,277,1020,299,1080,282.7C1140,267,1200,213,1260,197.3C1320,181,1380,203,1410,213.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            })
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1440 320",
            width: "150%",
            height: "100%",
            preserveAspectRatio: "none",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M0,128L30,122.7C60,117,120,107,180,117.3C240,128,300,160,360,192C420,224,480,256,540,250.7C600,245,660,203,720,170.7C780,139,840,117,900,112C960,107,1020,117,1080,128C1140,139,1200,149,1260,176C1320,203,1380,245,1410,266.7L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            })
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1440 320",
            width: "150%",
            height: "100%",
            preserveAspectRatio: "none",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M0,128L30,138.7C60,149,120,171,180,165.3C240,160,300,128,360,117.3C420,107,480,117,540,138.7C600,160,660,192,720,186.7C780,181,840,139,900,117.3C960,96,1020,96,1080,133.3C1140,171,1200,245,1260,266.7C1320,288,1380,256,1410,240L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            })
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1440 320",
            width: "150%",
            height: "100%",
            preserveAspectRatio: "none",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M0,0L30,16C60,32,120,64,180,112C240,160,300,224,360,218.7C420,213,480,139,540,144C600,149,660,235,720,245.3C780,256,840,192,900,181.3C960,171,1020,213,1080,245.3C1140,277,1200,299,1260,272C1320,245,1380,171,1410,133.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            })
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1440 320",
            width: "150%",
            height: "100%",
            preserveAspectRatio: "none",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M0,288L30,277.3C60,267,120,245,180,197.3C240,149,300,75,360,64C420,53,480,107,540,133.3C600,160,660,160,720,181.3C780,203,840,245,900,229.3C960,213,1020,139,1080,90.7C1140,43,1200,21,1260,64C1320,107,1380,213,1410,266.7L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            })
        }), 
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "pt-20 sm:pt-28 pb-24 sm:pb-36 bg-white text-section relative px-8 sm:px-14 flex flex-col justify-center overflow-hidden",
        id: data.hashAnchor ?? undefined,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
                className: "z-20 flex text-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        color: data.textColour
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(HeaderSmall, {
                        className: "text-3xl",
                        children: data.title
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_splide_.Splide, {
                options: options,
                className: "z-20 relative article-splide mt-8 md:mt-12",
                children: data.articles.map((article, index)=>/*#__PURE__*/ jsx_runtime_.jsx(react_splide_.SplideSlide, {
                        className: "splide__slide bg-navy rounded-2xl overflow-hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: article.url,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "transition-opacity duration-300 flex flex-col group cursor-pointer min-h-full",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-full pt-[80%] relative",
                                        children: article.image && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    alt: article.image.alt,
                                                    className: "w-full h-full top-0 left-0 absolute object-cover",
                                                    src: article.image.url
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-full h-10 text-navy absolute bottom-[-2px] left-0 z-10",
                                                    children: Waves[index % Waves.length]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-full p-6 pt-4 flex flex-col flex-grow",
                                        children: [
                                            article.dateCreated && /*#__PURE__*/ jsx_runtime_.jsx(regular/* LabelRegular */.H, {
                                                className: "transition-opacity duration-500 group-hover:opacity-40 !text-white opacity-80",
                                                children: (0,external_date_fns_.format)(new Date(article.dateCreated), "MMMM do, yyyy")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(body_regular/* BodyRegular */.F, {
                                                className: "mt-2 transition-opacity duration-500 group-hover:opacity-40 text-white",
                                                children: article.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(regular/* LabelRegular */.H, {
                                                className: "mt-1 transition-opacity duration-500 group-hover:opacity-40 mb-6 !text-white opacity-80",
                                                children: (0,concat_string/* default */.Z)(article.shortDescription, 80)
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                                                colour: "dark",
                                                className: "mt-auto mb-0",
                                                children: "Read More"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, article.id)
                    }, article.title))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: data.background.url,
                alt: data.background.alt,
                className: "w-full h-full absolute top-0 left-0 object-cover z-10"
            })
        ]
    });
};


/***/ }),

/***/ 1541:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(104);
/* harmony import */ var src_components_feature_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(798);
/* harmony import */ var src_components_work_with_us_form_hooks_useSubmitContact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9219);
/* harmony import */ var src_components_work_with_us_form_work_with_us_inline_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8355);
/* harmony import */ var src_components_typography_header_regular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5703);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_work_with_us_form_hooks_useSubmitContact__WEBPACK_IMPORTED_MODULE_5__]);
src_components_work_with_us_form_hooks_useSubmitContact__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Contact = ({ data  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleRedirect = ()=>{
        router.push(`${process.env.SITE_URL}/${data.redirectsTo}`);
    };
    const { mutate: submitContact , isError  } = (0,src_components_work_with_us_form_hooks_useSubmitContact__WEBPACK_IMPORTED_MODULE_5__/* .useSubmitForm */ ._)(handleRedirect);
    const handleSubmitForm = (payload)=>submitContact(payload);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "hero w-full py-16 md:py-32 relative flex justify-center md:justify-start items-center overflow-hidden",
        id: data.hashAnchor ?? undefined,
        style: {
            color: data.textColour,
            backgroundColor: data.backgroundColour
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            className: "z-20 text-center justify-center items-center flex flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        color: data.titleColour
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_typography_header_regular__WEBPACK_IMPORTED_MODULE_7__/* .HeaderRegular */ .v, {
                        className: "mt-3 w-full",
                        variant: "h3",
                        children: data.title
                    })
                }),
                data.text && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_feature_content__WEBPACK_IMPORTED_MODULE_4__/* .FeatureContent */ .C, {
                    html: data.text,
                    className: "mt-2 w-full max-w-[700px]"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-[600px] w-full mt-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_work_with_us_form_work_with_us_inline_form__WEBPACK_IMPORTED_MODULE_6__/* .WorkWithUsInlineForm */ .N, {
                        data: data,
                        handleSubmitForm: handleSubmitForm,
                        isSubmitError: isError
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);
/* harmony import */ var src_components_feature_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(798);
/* harmony import */ var src_components_typography_header_large__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3064);





const Hero = ({ data  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "hero w-full py-16 md:py-32 relative flex justify-center md:justify-start items-center overflow-hidden",
        id: data.hashAnchor ?? undefined,
        style: {
            color: data.textColour
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "z-20 text-center justify-center items-center flex flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_typography_header_large__WEBPACK_IMPORTED_MODULE_4__/* .HeaderLarge */ .q, {
                        className: "mt-3 w-full",
                        children: data.heading
                    }),
                    data.text && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_feature_content__WEBPACK_IMPORTED_MODULE_3__/* .FeatureContent */ .C, {
                        html: data.text,
                        className: "mt-2 w-full max-w-[700px]"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: data.background.url,
                alt: data.background.alt,
                className: "absolute inset-0 w-full h-full object-cover z-10"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 7809:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ HomeHero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_counter_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(104);
/* harmony import */ var _app_store_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2046);
/* harmony import */ var _typography_header_x_large__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6539);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6114);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_counter_counter__WEBPACK_IMPORTED_MODULE_2__]);
src_components_counter_counter__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const HomeHero = ({ data  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "relative min-h-[789px] flex items-center bg-navy text-center pb-48 overflow-hidden",
        style: {
            color: data.textColour
        },
        id: data.hashAnchor ?? undefined,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative z-20 w-[520px] lg:w-full max-w-full space-y-[30px] mx-auto py-14 z-30",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_typography_header_x_large__WEBPACK_IMPORTED_MODULE_5__/* .HeaderXLarge */ .s, {
                            className: "uppercase",
                            children: data.heading
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_content__WEBPACK_IMPORTED_MODULE_6__/* .Content */ .V, {
                            html: data.text,
                            className: "text-white w-full max-w-[520px] mx-auto feature-content"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_store_buttons__WEBPACK_IMPORTED_MODULE_4__/* .AppStoreButtons */ .W, {
                            buttons: data.appStoreButtons
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_counter_counter__WEBPACK_IMPORTED_MODULE_2__/* .Counter */ .A, {
                            counterDigits: data.counterDigits
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: data.hand.url,
                alt: data.hand.alt,
                className: "absolute right-0 bottom-0 w-auto h-[500px] 2xl:h-auto hidden lg:block z-20"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: data.background.url,
                alt: data.background.alt,
                className: "absolute inset-0 w-full h-full object-cover z-10"
            })
        ]
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);



const Image = ({ data  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "hero w-full py-16 md:py-32 relative flex justify-center md:justify-start items-center overflow-hidden",
        style: {
            backgroundColor: data.backgroundColour
        },
        id: data.hashAnchor ?? undefined,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            className: "z-20 text-center justify-center items-center text-navy-dark flex flex-col",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: data.image.url,
                alt: data.image.alt,
                className: "h-auto object-cover rounded-xl min-w-[320px]",
                style: {
                    width: `${data.width}%`
                }
            })
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);


/***/ }),

/***/ 9506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ Marquee)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Marquee = ({ data  })=>{
    const list = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const transform = data.reverse ? "rotate-[-2deg]" : "rotate-[2deg]";
    const trackWidth = "w-[calc(100%_+_40px)] max-w-[calc(100%_+_40px) -ml-4";
    const justify = data.reverse ? "justify-end" : "justify-start";
    const animation = data.reverse ? "animate-marquee-reverse" : "animate-marquee";
    const { 0: time , 1: setTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const distance = list.current?.offsetWidth ?? 0; // Width of list
        setTime(distance / (data.speed * 2) ** 2);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "relative z-10 h-[140px] flex flex-col overflow-hidden",
        style: {
            backgroundColor: data.topColour
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-1",
                style: {
                    backgroundColor: data.topColour
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-1",
                style: {
                    backgroundColor: data.bottomColour
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${trackWidth} absolute top-1/2 -translateY-[1/2] -left-[20px] h-0 flex items-center`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${transform} ${justify} bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.15)] py-[7px] overflow-x-hidden w-full flex`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: `${animation} flex justify-start`,
                        style: {
                            animationDuration: `${time}s`
                        },
                        ref: list,
                        children: Array.from(new Array(20).keys()).map((index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                                children: data.items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "text-green uppercase font-bold whitespace-nowrap px-6",
                                        "aria-hidden": index !== 0,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-body-lead",
                                            children: item.text
                                        })
                                    }, item.id))
                            }, index))
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 6690:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ PageBlocks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7809);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2590);
/* harmony import */ var _marquee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9506);
/* harmony import */ var _previous_winners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8952);
/* harmony import */ var _spot_winners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9323);
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4579);
/* harmony import */ var _article_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6268);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3227);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1541);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6244);
/* harmony import */ var _two_column__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6519);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_home_hero__WEBPACK_IMPORTED_MODULE_2__, _contact__WEBPACK_IMPORTED_MODULE_10__]);
([_home_hero__WEBPACK_IMPORTED_MODULE_2__, _contact__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const PageBlocks = ({ blocks  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: blocks.map((blockData)=>{
            switch(blockData.type){
                case "home-hero":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_hero__WEBPACK_IMPORTED_MODULE_2__/* .HomeHero */ .x, {
                        data: blockData
                    }, blockData.id);
                case "full-width-text":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .x, {
                        data: blockData
                    }, blockData.id);
                case "marquee":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_marquee__WEBPACK_IMPORTED_MODULE_4__/* .Marquee */ .R, {
                        data: blockData
                    }, blockData.id);
                case "previous-winners":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_previous_winners__WEBPACK_IMPORTED_MODULE_5__/* .PreviousWinners */ .d, {
                        data: blockData
                    }, blockData.id);
                case "spot-winners":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_spot_winners__WEBPACK_IMPORTED_MODULE_6__/* .SpotWinners */ .R, {
                        data: blockData
                    }, blockData.id);
                case "call-to-action":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_screens__WEBPACK_IMPORTED_MODULE_7__/* .Screens */ .m, {
                        data: blockData
                    }, blockData.id);
                case "article-slider":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_article_slider__WEBPACK_IMPORTED_MODULE_8__/* .ArticleSlider */ .B, {
                        data: blockData
                    }, blockData.id);
                case "hero":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hero__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        data: blockData
                    }, blockData.id);
                case "contact":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contact__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        data: blockData
                    }, blockData.id);
                case "image":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        data: blockData
                    }, blockData.id);
                case "two-column":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_two_column__WEBPACK_IMPORTED_MODULE_12__/* .TwoColumn */ .z, {
                        data: blockData
                    }, blockData.id);
                default:
                    return null;
            }
        })
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ PreviousWinners)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _splidejs_react_splide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8702);
/* harmony import */ var _splidejs_react_splide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(104);
/* harmony import */ var src_components_typography_body_regular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8253);
/* harmony import */ var src_components_feature_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(798);






const PreviousWinners = ({ data  })=>{
    const options = {
        type: "loop",
        drag: "free",
        focus: "center",
        autoWidth: true,
        autoplay: true,
        interval: 4000,
        direction: "ltr",
        pagination: false
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "py-14 bg-white text-section relative overflow-hidden max-w-full",
        id: data.hashAnchor ?? undefined,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    color: data.textColour
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_feature_content__WEBPACK_IMPORTED_MODULE_5__/* .FeatureContent */ .C, {
                        html: data.text,
                        className: "w-full max-w-[1050px] mx-auto text-center mb-10"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_2__.Splide, {
                options: options,
                children: data.winners.map((winner)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_2__.SplideSlide, {
                        className: "px-7 pt-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                            className: "text-center group transition-transform hover:-translate-y-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: winner.link.url,
                                title: winner.link.text,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rounded-lg overflow-hidden relative bg-grey transition shadow-md group-hover:shadow-xl mb-6 w-[255px] h-[310px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: winner.image.url,
                                            alt: winner.image.alt,
                                            className: "w-full h-full object-cover object-center rounded-md"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "transition-colors group-hover:text-green",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_typography_body_regular__WEBPACK_IMPORTED_MODULE_4__/* .BodyRegular */ .F, {
                                            children: winner.title
                                        })
                                    })
                                ]
                            })
                        })
                    }, winner.id))
            })
        ]
    });
};


/***/ }),

/***/ 4579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ Screens)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _splidejs_react_splide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8702);
/* harmony import */ var _splidejs_react_splide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(104);
/* harmony import */ var _typography_body_regular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8253);
/* harmony import */ var _app_store_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2046);
/* harmony import */ var _feature_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(798);







const Screens = ({ data  })=>{
    const options = {
        gap: "74px",
        perPage: 4,
        pagination: false,
        arrows: false,
        breakpoints: {
            1299: {
                perPage: 3,
                width: 900
            },
            1023: {
                perPage: 2,
                width: 600
            },
            767: {
                type: "drag",
                fixedWidth: 200,
                width: "100%",
                gap: "40px",
                focus: "center"
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "pt-14 pb-[194px] max-w-full overflow-hidden relative",
        style: {
            color: data.textColour
        },
        id: data.hashAnchor ?? undefined,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full max-w-[1050px] mx-auto flex flex-col items-center text-center mb-14 z-20 relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: data.logo.url,
                                alt: data.logo.alt,
                                className: "h-[97px] mb-14"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_feature_content__WEBPACK_IMPORTED_MODULE_6__/* .FeatureContent */ .C, {
                                html: data.topContent
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_2__.Splide, {
                        className: "mb-16 xl:px-9 app-slider z-20 relative",
                        options: options,
                        children: data.screens.map((screen)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_2__.SplideSlide, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-bold mb-6 text-center",
                                        style: {
                                            color: screen.textColour
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_typography_body_regular__WEBPACK_IMPORTED_MODULE_4__/* .BodyRegular */ .F, {
                                            children: screen.title
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full relative",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "absolute inset-0 rounded-[15%] shadow-lg"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: screen.image.url,
                                                alt: screen.image.alt,
                                                className: "w-full h-auto relative z-10"
                                            })
                                        ]
                                    })
                                ]
                            }, screen.id))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full max-w-[1050px] mx-auto flex flex-col items-center text-center mb-10 z-20 relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_feature_content__WEBPACK_IMPORTED_MODULE_6__/* .FeatureContent */ .C, {
                                className: "mb-10",
                                html: data.bottomContent
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_store_buttons__WEBPACK_IMPORTED_MODULE_5__/* .AppStoreButtons */ .W, {
                                buttons: data.appStoreButtons
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: "inset-0 w-full h-full absolute object-cover z-10",
                src: data.background.url,
                alt: data.background.alt
            })
        ]
    });
};


/***/ }),

/***/ 9323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ SpotWinners)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _splidejs_react_splide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8702);
/* harmony import */ var _splidejs_react_splide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _typography_body_regular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8253);



const SpotWinners = ({ data  })=>{
    const options = {
        type: "loop",
        drag: "free",
        focus: "center",
        autoWidth: true,
        autoplay: true,
        interval: 4000,
        direction: "ltr",
        pagination: false
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "py-14 bg-white text-section relative",
        id: data.hashAnchor ?? undefined,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_1__.Splide, {
            options: options,
            children: data.winners.map((winner)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_1__.SplideSlide, {
                    className: "splide__slide px-7",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "rounded-full overflow-hidden relative bg-grey mb-10 w-[167px] h-[167px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: winner.image.url,
                                    alt: winner.image.alt,
                                    className: "w-full h-full object-cover object-center flex items-center justify-center"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_typography_body_regular__WEBPACK_IMPORTED_MODULE_2__/* .BodyRegular */ .F, {
                                children: winner.name
                            })
                        ]
                    })
                }, winner.id))
        })
    });
};


/***/ }),

/***/ 2590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);
/* harmony import */ var src_components_typography_header_large__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3064);
/* harmony import */ var src_components_feature_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(798);





const Text = ({ data  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "pt-14 pb-[70px] text-center",
        style: {
            backgroundColor: data.backgroundColour,
            color: data.textColour
        },
        id: data.hashAnchor ?? undefined,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center space-y-[30px] text-center max-w-[900px] mx-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            color: data.titleColour
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_typography_header_large__WEBPACK_IMPORTED_MODULE_3__/* .HeaderLarge */ .q, {
                            children: data.heading
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_feature_content__WEBPACK_IMPORTED_MODULE_4__/* .FeatureContent */ .C, {
                        html: data.text
                    })
                ]
            })
        })
    });


/***/ }),

/***/ 6519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ TwoColumn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);
/* harmony import */ var src_components_typography_header_large__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3064);
/* harmony import */ var src_components_feature_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(798);





const TwoColumn = ({ data  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "py-16 md:py-28 text-center",
        style: {
            backgroundColor: data.backgroundColour
        },
        id: data.hashAnchor ?? undefined,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            className: "grid grid-cols-1 md:grid-cols-2 items-center gap-16",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: `w-full h-auto rounded-3xl ${data.reverse ? "order-2" : ""}`,
                    src: data.image.url,
                    alt: data.image.alt
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center space-y-[30px] text-center max-w-[900px] mx-auto",
                    style: {
                        color: data.textColour
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                color: data.titleColour
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_typography_header_large__WEBPACK_IMPORTED_MODULE_3__/* .HeaderLarge */ .q, {
                                children: data.heading
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_feature_content__WEBPACK_IMPORTED_MODULE_4__/* .FeatureContent */ .C, {
                            html: data.text
                        })
                    ]
                })
            ]
        })
    });


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

/***/ 3064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ HeaderLarge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const HeaderLarge = ({ children , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: `text-header-small md:text-header-large font-black ${className}`,
        children: children
    });


/***/ }),

/***/ 6539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ HeaderXLarge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const HeaderXLarge = ({ children , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: `text-header-medium md:text-header-xlarge font-black ${className}`,
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

/***/ 8355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ WorkWithUsInlineForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ContactError = ({ isSubmitError  })=>{
    if (!isSubmitError) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
        className: "top-4 transform fixed left-1/2 -translate-x-1/2 bg-[#fca5a5] text-[#991b1b] px-3 py-2 rounded-lg text-sm text-center z-[1000]",
        children: "There was an issue submitting the form. Please try again."
    });
};
const WorkWithUsInlineForm = ({ data , handleSubmitForm , isSubmitError  })=>{
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: nameError , 1: setNameError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: emailError , 1: setEmailError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: organisation , 1: setOrganisation  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: organisationError , 1: setOrganisationError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: messageError , 1: setMessageError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const updateName = (value)=>{
        setName(value);
        setNameError("");
    };
    const updateEmail = (value)=>{
        setEmail(value);
        setEmailError("");
    };
    const updateOrganisation = (value)=>{
        setOrganisation(value);
        setOrganisationError("");
    };
    const updateMessage = (value)=>{
        setMessage(value);
        setMessageError("");
    };
    const submitForm = async ()=>{
        let error = false;
        setNameError("");
        setEmailError("");
        setOrganisationError("");
        setMessageError("");
        try {
            if (name === "") {
                setNameError("Name cannot be empty");
                error = true;
            }
            if (email === "") {
                setEmailError("Email cannot be empty");
                error = true;
            }
            if (organisation === "") {
                setOrganisationError("Organisation cannot be empty");
                error = true;
            }
            if (error) {
                throw new Error();
            }
            handleSubmitForm({
                Name: name,
                Email: email,
                Organisation: organisation,
                Message: message
            });
        } catch  {
            console.error("Contact Form Error");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex flex-col justify-center items-start relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContactError, {
                isSubmitError: isSubmitError
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "text-left w-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col w-full mt-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "text-[12px]",
                                style: {
                                    color: data.textColour
                                },
                                children: "Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: name,
                                onChange: ({ target  })=>updateName(target.value),
                                name: "name",
                                className: "w-full py-3 border-b-2 border-b-white bg-transparent rounded-none outline-none",
                                style: {
                                    color: data.textColour
                                },
                                placeholder: "Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "text-[#ff4545] text-[12px] mt-2",
                                children: nameError
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col w-full mt-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "text-white text-[12px]",
                                children: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: email,
                                onChange: ({ target  })=>updateEmail(target.value),
                                name: "email",
                                className: "w-full py-3 border-b-2 border-b-white bg-transparent rounded-none outline-none",
                                style: {
                                    color: data.textColour
                                },
                                placeholder: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "text-[#ff4545] text-[12px]",
                                children: emailError
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col w-full mt-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "text-white text-[12px] mt-2",
                                children: "Organisation"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: organisation,
                                onChange: ({ target  })=>updateOrganisation(target.value),
                                name: "organisation",
                                className: "w-full py-3 border-b-2 border-b-white bg-transparent rounded-none outline-none",
                                style: {
                                    color: data.textColour
                                },
                                placeholder: "Organisation"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "text-[#ff4545] text-[12px]",
                                children: organisationError
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col w-full mt-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "text-white text-[12px] mt-2",
                                children: "Message / Enquiry"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                value: message,
                                onChange: ({ target  })=>updateMessage(target.value),
                                name: "message",
                                className: "w-full py-3 border-b-2 border-b-white bg-transparent h-40 resize-none rounded-none outline-none",
                                style: {
                                    color: data.textColour
                                },
                                placeholder: "Message"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "text-[#ff4545] text-[12px] mt-2",
                                children: messageError
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col w-full mt-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: submitForm,
                            className: "w-full py-3 bg-green-light text-navy",
                            children: "Submit"
                        })
                    })
                ]
            })
        ]
    });
};


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

/***/ 2251:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getPageServerSideProps)
/* harmony export */ });
/* harmony import */ var _utils_get_page_from_slug_prop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4220);
/* harmony import */ var _api_page_props_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2746);
/* harmony import */ var _global_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2911);
/* harmony import */ var _global_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6913);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_page_props_requests__WEBPACK_IMPORTED_MODULE_0__, _global_footer__WEBPACK_IMPORTED_MODULE_1__, _global_header__WEBPACK_IMPORTED_MODULE_2__]);
([_api_page_props_requests__WEBPACK_IMPORTED_MODULE_0__, _global_footer__WEBPACK_IMPORTED_MODULE_1__, _global_header__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getPageServerSideProps = async (context)=>{
    try {
        const page = (0,_utils_get_page_from_slug_prop__WEBPACK_IMPORTED_MODULE_3__/* .getPageFromSlugProp */ .$)(context.params?.slug);
        const { head , blocks  } = await (0,_api_page_props_requests__WEBPACK_IMPORTED_MODULE_0__/* .getPageData */ .u)(page);
        return {
            props: {
                head,
                header: await (0,_global_header__WEBPACK_IMPORTED_MODULE_2__/* .header */ .F)(),
                blocks,
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

/***/ 3315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ formatNumberWithCommas)
/* harmony export */ });
const formatNumberWithCommas = (num, zeroFillCount)=>{
    const zeroFilledNumber = num.toString().padStart(zeroFillCount, "0");
    return zeroFilledNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


/***/ }),

/***/ 4220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ getPageFromSlugProp)
/* harmony export */ });
const getPageFromSlugProp = (slugs)=>{
    const slug = Array.isArray(slugs) ? slugs.join("/") : slugs;
    if (!slug) return "";
    return slug;
};


/***/ })

};
;