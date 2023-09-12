"use strict";
exports.id = 484;
exports.ids = [484];
exports.modules = {

/***/ 9979:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ directusClient)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7202);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const directusClient = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: _constants__WEBPACK_IMPORTED_MODULE_1__/* .directusBaseUrl */ .h
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ directusBaseUrl)
/* harmony export */ });
const directusBaseUrl = process.env.DIRECTUS_BASE_URL;


/***/ }),

/***/ 8908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ FooterDtoToProps)
/* harmony export */ });
/* harmony import */ var src_constants_no_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8295);

const FooterDtoToProps = (data)=>({
        text: data.Main_Text,
        ...data.Left_Image && {
            leftImage: {
                id: data.Left_Image.id,
                url: `${process.env.DIRECTUS_BASE_URL}/assets/${data.Left_Image.id}`,
                alt: data.Left_Image.title
            }
        },
        logo: {
            id: data.Logo.id,
            url: `${process.env.DIRECTUS_BASE_URL}/assets/${data.Logo.id}`,
            alt: data.Logo.title
        },
        images: data.Images.map((image)=>({
                id: image.directus_files_id.id,
                url: `${process.env.DIRECTUS_BASE_URL}/assets/${image.directus_files_id.id}`,
                alt: image.directus_files_id.title
            })),
        links: data.Links.map((link)=>link ? {
                id: link.Link_id.id,
                url: link.Link_id.URL,
                text: link.Link_id.Text
            } : null),
        socialLinks: data.Social_Links.map((socialLink)=>({
                id: socialLink.Image_Link_id.id,
                url: socialLink.Image_Link_id.URL,
                ...socialLink.Image_Link_id.Ref && {
                    ref: socialLink.Image_Link_id.Ref
                },
                ...socialLink.Image_Link_id.Target && {
                    target: socialLink.Image_Link_id.Target
                },
                ...socialLink.Image_Link_id.Image ? {
                    image: {
                        id: socialLink.Image_Link_id.Image.id,
                        url: `${process.env.DIRECTUS_BASE_URL}/assets/${socialLink.Image_Link_id.Image.id}`,
                        title: socialLink.Image_Link_id.Image.title
                    }
                } : {
                    image: src_constants_no_image__WEBPACK_IMPORTED_MODULE_0__/* .noImage */ .T
                }
            }))
    });


/***/ }),

/***/ 4154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ FooterEndpoints)
/* harmony export */ });
var FooterEndpoints;
(function(FooterEndpoints) {
    FooterEndpoints["GetFooter"] = "/items/Footer?fields=Main_Text,Images.directus_files_id.id,Images.directus_files_id.title,Logo.id,Logo.title,Logo.title,Links.Link_id.id,Links.Link_id.Ref,Links.Link_id.Target,Links.Link_id.Text,Links.Link_id.URL,Social_Links.Image_Link_id.id,Social_Links.Image_Link_id.id,Social_Links.Image_Link_id.Ref,Social_Links.Image_Link_id.Target,Social_Links.Image_Link_id.URL,Social_Links.Image_Link_id.Image.id,Social_Links.Image_Link_id.Image.title";
})(FooterEndpoints || (FooterEndpoints = {}));


/***/ }),

/***/ 6037:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ getFooterData)
/* harmony export */ });
/* harmony import */ var src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9979);
/* harmony import */ var _DtoToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8908);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4154);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__]);
src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getFooterData = async ()=>{
    const { data: response  } = await src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__/* .directusClient.get */ .A.get(_constants__WEBPACK_IMPORTED_MODULE_2__/* .FooterEndpoints.GetFooter */ .e.GetFooter);
    return (0,_DtoToProps__WEBPACK_IMPORTED_MODULE_1__/* .FooterDtoToProps */ .L)(response.data);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ HeaderDtoToProps)
/* harmony export */ });
/* harmony import */ var _constants_no_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8295);

const HeaderDtoToProps = (data)=>({
        logo: data.Logo ? {
            id: data.Logo.id,
            url: `${process.env.DIRECTUS_BASE_URL}/assets/${data.Logo.id}`,
            alt: data.Logo.title
        } : _constants_no_image__WEBPACK_IMPORTED_MODULE_0__/* .noImage */ .T,
        links: data.Links.map((link)=>link ? {
                id: link.Link_id.id,
                url: link.Link_id.URL,
                text: link.Link_id.Text
            } : null)
    });


/***/ }),

/***/ 9037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ HeaderEndpoints)
/* harmony export */ });
var HeaderEndpoints;
(function(HeaderEndpoints) {
    HeaderEndpoints["GetHeader"] = "/items/Header?fields=Logo.id,Logo.title,Links.Link_id.id,Links.Link_id.URL,Links.Link_id.Text";
})(HeaderEndpoints || (HeaderEndpoints = {}));


/***/ }),

/***/ 1375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ getHeaderData)
/* harmony export */ });
/* harmony import */ var src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9979);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9037);
/* harmony import */ var _DtoToProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3481);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__]);
src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getHeaderData = async ()=>{
    const { data: response  } = await src_api_directus_client__WEBPACK_IMPORTED_MODULE_0__/* .directusClient.get */ .A.get(_constants__WEBPACK_IMPORTED_MODULE_1__/* .HeaderEndpoints.GetHeader */ .Q.GetHeader);
    return (0,_DtoToProps__WEBPACK_IMPORTED_MODULE_2__/* .HeaderDtoToProps */ .c)(response.data);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Button = ({ href , colour , children , onClick , className  })=>{
    const colourClasses = {
        dark: "text-green",
        light: "bg-transparent hover:bg-white active:bg-grey active:border-grey active:text-green text-white hover:text-green border-white"
    };
    if (href) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: href,
            onClick: onClick,
            className: `inline-flex items-center justify-center h-[49px] px-[27px] border-[3px] whitespace-nowrap leading-5 rounded-full min-w-button
                         text-body-small font-semibold overflow-hidden transition-colors ${colourClasses[colour]} ${className}`,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        onClick: onClick,
        className: `inline-flex items-center justify-center h-[49px] px-[27px] border-[3px] whitespace-nowrap leading-5 rounded-full min-w-button
                         text-body-small font-semibold overflow-hidden transition-colors ${colourClasses[colour]} ${className}`,
        children: children
    });
};


/***/ }),

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Container = ({ children , className ,  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container px-8 mx-auto ${className}`,
        children: children
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 5295:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);
/* harmony import */ var _work_with_us_form_work_with_us_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9528);
/* harmony import */ var _typography_header_regular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5703);
/* harmony import */ var _typography_body_small__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2896);
/* harmony import */ var _work_with_us_form_hooks_useSubmitContact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9219);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_work_with_us_form_hooks_useSubmitContact__WEBPACK_IMPORTED_MODULE_6__]);
_work_with_us_form_hooks_useSubmitContact__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Footer = ({ footer  })=>{
    const { 0: isWorkWithUsFormOpen , 1: setIsWorkWithUsFormOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openWorkWithUsForm = ()=>{
        setIsWorkWithUsFormOpen(true);
    };
    const handleCloseWorkWithUsForm = ()=>{
        setIsWorkWithUsFormOpen(false);
    };
    const { mutate: submitContact , isError  } = (0,_work_with_us_form_hooks_useSubmitContact__WEBPACK_IMPORTED_MODULE_6__/* .useSubmitForm */ ._)(handleCloseWorkWithUsForm);
    const handleSubmitForm = (payload)=>submitContact(payload);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_work_with_us_form_work_with_us_form__WEBPACK_IMPORTED_MODULE_3__/* .WorkWithUsForm */ .i, {
                isOpen: isWorkWithUsFormOpen,
                onClose: handleCloseWorkWithUsForm,
                handleSubmitForm: handleSubmitForm,
                isSubmitError: isError
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                className: "flex-shrink-1 flex-grow-0 text-center text-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-navy py-16",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-green mb-12",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_typography_header_regular__WEBPACK_IMPORTED_MODULE_4__/* .HeaderRegular */ .v, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-black",
                                                children: footer.text
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex items-center justify-center space-x-9",
                                        children: footer.socialLinks.map((social)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: social.url,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: social.image.url,
                                                    alt: social.image.alt
                                                })
                                            }, social.id))
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-green py-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col space-y-8 items-center font-semibold order-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/logo-white.svg",
                                        alt: "LitterLotto Logo",
                                        className: "h-[53px] mb-2"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "flex flex-col lg:flex-row space-y-8 md:space-y-0 lg:space-x-8 justify-center",
                                        children: [
                                            footer.links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: link.url,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "transition-opacity text-white hover:opacity-75",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_typography_body_small__WEBPACK_IMPORTED_MODULE_5__/* .BodySmall */ .B, {
                                                            children: link.text
                                                        })
                                                    })
                                                }, link.id)),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    onClick: openWorkWithUsForm,
                                                    id: "work-with-us",
                                                    className: "transition-opacity text-white hover:opacity-75",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_typography_body_small__WEBPACK_IMPORTED_MODULE_5__/* .BodySmall */ .B, {
                                                        children: "Partner with us"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-wrap justify-center",
                                        children: footer.images.map((image)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "h-16 flex-shrink-0",
                                                src: image.url,
                                                alt: image.alt
                                            }, image.id))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_typography_body_small__WEBPACK_IMPORTED_MODULE_5__/* .BodySmall */ .B, {
                                        children: [
                                            "\xa9 LitterLotto ",
                                            new Date().getFullYear()
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Head)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const Head = ({ head  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                charSet: "UTF-8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: head.metaTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: head.metaDescription
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                href: head.canonical
            })
        ]
    });


/***/ }),

/***/ 8996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/container.tsx
var container = __webpack_require__(104);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/menu.tsx


const Menu = ({ menuOpen , setMenuOpen , children  })=>{
    const burgerLine = `h-1 w-10 my-1 rounded-full bg-white transition ease transform duration-300`;
    // Close menu on button click
    const handleButtonClick = (event)=>{
        if (event.target instanceof Element && !event.target.closest("a")) setMenuOpen(false);
    };
    const toggleMenu = ()=>setMenuOpen(!menuOpen);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: "lg:hidden flex flex-col h-12 w-12 rounded justify-center items-center group",
                onClick: toggleMenu,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col items-center justify-center scale-75 md:scale-100",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: [
                                burgerLine,
                                menuOpen ? "rotate-45 translate-y-3" : ""
                            ].join(" ")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: [
                                burgerLine,
                                menuOpen ? "opacity-0" : "opacity-100"
                            ].join(" ")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: [
                                burgerLine,
                                menuOpen ? "-rotate-45 -translate-y-3" : ""
                            ].join(" ")
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: [
                    "fixed lg:relative -z-10 lg:z-0",
                    "inset-0 lg:inset-auto",
                    "flex justify-center items-center lg:justify-start lg:items-start",
                    "bg-green/90 lg:bg-transparent",
                    menuOpen ? "opacity-100 visible" : "opacity-0 invisible",
                    "transition-all lg:visible lg:opacity-100", 
                ].join(" "),
                onClick: handleButtonClick,
                children: children
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/components/button.tsx
var components_button = __webpack_require__(4020);
;// CONCATENATED MODULE: ./src/components/header.tsx





const Header = ({ menuOpen , setMenuOpen , header  })=>{
    const handleCloseMenu = ()=>setMenuOpen(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "sticky z-50 w-100 h-16 md:h-[82px] top-0 right-0 left-0 bg-green text-white flex items-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-start gap-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mr-auto pb-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: header.logo && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: header.logo.url,
                                alt: header.logo.alt,
                                className: "h-8 md:h-11 w-auto cursor-pointer"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                        menuOpen: menuOpen,
                        setMenuOpen: setMenuOpen,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-col lg:flex-row space-y-9 lg:space-y-0 lg:space-x-4",
                            children: header.links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                                    colour: "light",
                                    href: link.url,
                                    onClick: handleCloseMenu,
                                    children: link.text
                                }, link.id))
                        })
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 2896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ BodySmall)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BodySmall = ({ children , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: `text-body-small ${className}`,
        children: children
    });


/***/ }),

/***/ 5703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ HeaderRegular)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const HeaderRegular = ({ children , className , variant ="h3"  })=>{
    switch(variant){
        case "h1":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: `text-body-lead md:text-header-medium font-bold ${className}`,
                children: children
            });
        case "h2":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: `text-body-lead md:text-header-medium font-bold ${className}`,
                children: children
            });
        case "h3":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: `text-body-lead md:text-header-medium font-bold ${className}`,
                children: children
            });
        case "h4":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: `text-body-lead md:text-header-medium font-bold ${className}`,
                children: children
            });
        case "h5":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: `text-body-lead md:text-header-medium font-bold ${className}`,
                children: children
            });
        default:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                className: `text-body-lead md:text-header-medium font-bold ${className}`,
                children: children
            });
    }
};


/***/ }),

/***/ 7952:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ postContact)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const postContact = async (payload)=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${process.env.DIRECTUS_BASE_URL}/items/Contact_Requests`, payload);
    return data.id;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9219:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useSubmitForm)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _api_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7952);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _api_requests__WEBPACK_IMPORTED_MODULE_1__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _api_requests__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useSubmitForm = (handleCloseWorkWithUsForm)=>(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_api_requests__WEBPACK_IMPORTED_MODULE_1__/* .postContact */ .D, {
        onSuccess: (data)=>{
            handleCloseWorkWithUsForm();
            return data || null;
        }
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ WorkWithUsForm)
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
const WorkWithUsForm = ({ isOpen , onClose , handleSubmitForm , isSubmitError  })=>{
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "work-with-us-modal",
        className: `w-screen h-screen top-0 left-0 fixed z-[1000] overflow-y-scroll transition-opacity duration-300 ${!isOpen && "opacity-0 pointer-events-none"}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full flex flex-col justify-center items-center relative",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    "aria-label": "close form",
                    className: "w-full min-h-full bg-black/[.4] absolute top-0 left-0",
                    onClick: onClose
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContactError, {
                    isSubmitError: isSubmitError
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: "work-with-us-success",
                    className: "top-4 transform fixed left-1/2 -translate-x-1/2 transition-[opacity,transform] duration-500 opacity-0 pointer-events-none -translate-y-5 bg-[#86efac] text-[#166534] px-3 py-2 rounded-lg text-sm text-center z-[1000]",
                    children: "Request Received. Thank you!"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-40 flex-shrink-0 w-full"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-navy rounded-md shadow-xl px-4 py-16 xs:px-12 sm:px-16 md:p-20 max-w-[calc(100%-30px)] sm:max-w-[calc(100%-60px)] w-[600px] relative z-50 flex-shrink-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: onClose,
                            type: "button",
                            "aria-label": "close form",
                            className: "w-6 h-6 absolute top-6 right-6 before:w-7 before:h-[2px] before:absolute before:left-[-2px] before:rotate-45 before:top-1/2 before:transform before:-translate-y-1/2 before:bg-white after:w-[28px] after:h-[2px] after:absolute after:left-[-2px] after:-rotate-45 after:top-1/2 after:transform after:-translate-y-1/2 after:bg-white"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-white text-body sm:text-body-lead font-black uppercase",
                            children: "Partner with us"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-white text-body-small mt-3",
                            children: `Want to partner with us? Fill out the form below and we'll be in touch.`
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col w-full mt-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "text-white text-[12px]",
                                            children: "Name"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            value: name,
                                            onChange: ({ target  })=>updateName(target.value),
                                            name: "name",
                                            className: "w-full py-3 border-b-2 border-b-white bg-transparent text-white rounded-none outline-none",
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
                                            className: "w-full py-3 border-b-2 border-b-white bg-transparent text-white rounded-none outline-none",
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
                                            className: "w-full py-3 border-b-2 border-b-white bg-transparent text-white rounded-none outline-none",
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
                                            className: "w-full py-3 border-b-2 border-b-white bg-transparent h-40 resize-none text-white rounded-none outline-none",
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
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-40 flex-shrink-0 w-full"
                })
            ]
        })
    });
};


/***/ }),

/***/ 8295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ noImage)
/* harmony export */ });
const noImage = {
    id: "0000-0000-0000-0000",
    url: `${process.env.DIRECTUS_BASE_URL}/assets/${process.env.NO_IMAGE}`,
    alt: "No Image"
};


/***/ }),

/***/ 6028:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use_intercom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6790);
/* harmony import */ var src_components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5295);
/* harmony import */ var src_components_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5245);
/* harmony import */ var src_components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8996);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_use_intercom__WEBPACK_IMPORTED_MODULE_2__, src_components_footer__WEBPACK_IMPORTED_MODULE_3__]);
([react_use_intercom__WEBPACK_IMPORTED_MODULE_2__, src_components_footer__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const MainLayout = ({ children , props  })=>{
    const { 0: menuOpen , 1: setMenuOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (menuOpen) {
            document.body.classList.add("overflow-hidden");
            return;
        }
        document.body.classList.remove("overflow-hidden");
    }, [
        menuOpen
    ]);
    const { boot  } = (0,react_use_intercom__WEBPACK_IMPORTED_MODULE_2__.useIntercom)();
    if (false) {}
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_head__WEBPACK_IMPORTED_MODULE_4__/* .Head */ .F, {
                head: props.head
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_header__WEBPACK_IMPORTED_MODULE_5__/* .Header */ .h, {
                        menuOpen: menuOpen,
                        setMenuOpen: setMenuOpen,
                        header: props.header
                    }),
                    children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        footer: props.footer
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2911:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ footer)
/* harmony export */ });
/* harmony import */ var src_api_footer_props_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6037);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_api_footer_props_requests__WEBPACK_IMPORTED_MODULE_0__]);
src_api_footer_props_requests__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const footer = async ()=>(0,src_api_footer_props_requests__WEBPACK_IMPORTED_MODULE_0__/* .getFooterData */ .t)();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6913:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var src_api_header_props_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1375);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_api_header_props_requests__WEBPACK_IMPORTED_MODULE_0__]);
src_api_header_props_requests__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const header = async ()=>(0,src_api_header_props_requests__WEBPACK_IMPORTED_MODULE_0__/* .getHeaderData */ .X)();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;