"use strict";
(() => {
var exports = {};
exports.id = 539;
exports.ids = [539];
exports.modules = {

/***/ 8329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fsearch_2F_5Bkeyword_5D_2Fpage_2F_5BpageNumber_5D_preferredRegion_absolutePagePath_private_next_pages_2Fsearch_2F_5Bkeyword_5D_2Fpage_2F_5BpageNumber_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fsearch_2F_5Bkeyword_5D_2Fpage_2F_5BpageNumber_5D_preferredRegion_absolutePagePath_private_next_pages_2Fsearch_2F_5Bkeyword_5D_2Fpage_2F_5BpageNumber_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/search/[keyword]/page/[pageNumber].js
var _pageNumber_namespaceObject = {};
__webpack_require__.r(_pageNumber_namespaceObject);
__webpack_require__.d(_pageNumber_namespaceObject, {
  "default": () => (_pageNumber_),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./src/pages/_document.js
var _document = __webpack_require__(894);
// EXTERNAL MODULE: ./src/pages/_app.js + 3 modules
var _app = __webpack_require__(318);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Header.js
var Header = __webpack_require__(3851);
// EXTERNAL MODULE: ./src/components/Sidebar.js
var Sidebar = __webpack_require__(890);
// EXTERNAL MODULE: ./src/components/Tags.js
var Tags = __webpack_require__(3980);
// EXTERNAL MODULE: ./src/components/Pagination.js
var Pagination = __webpack_require__(5445);
// EXTERNAL MODULE: ./src/hooks/useTotalCount.js
var useTotalCount = __webpack_require__(7211);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/hooks/useSearchPagination.js
// /Volumes/SSD_1TB/next-antena2/front/src/hooks/useSearchPagination.js

function useSearchPagination(baseUrl, keyword, pageSize) {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Set initial page to 1
    const changePage = (newPage)=>{
        setCurrentPage(Number(newPage)); // Make sure newPage is a Number
    };
    useEffect(()=>{
        if (!baseUrl || !keyword) {
            // Do not fetch if baseUrl or tag is empty
            return;
        }
        const fetchUrl = `${baseUrl}/search?q=${keyword}&page=${currentPage}&limit=${pageSize}`;
        fetch(fetchUrl).then((response)=>response.json()).then((jsonData)=>setData(jsonData)).catch((error)=>console.error(error));
    }, [
        currentPage,
        pageSize,
        baseUrl,
        keyword
    ]);
    return [
        data,
        currentPage,
        changePage
    ];
}

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/lib/clickCountDB.js
var clickCountDB = __webpack_require__(3899);
// EXTERNAL MODULE: ./src/components/Clickcount.js
var Clickcount = __webpack_require__(1708);
// EXTERNAL MODULE: ./src/components/SearchBar.js
var SearchBar = __webpack_require__(8054);
// EXTERNAL MODULE: ./src/components/PopularMovies.js
var PopularMovies = __webpack_require__(866);
// EXTERNAL MODULE: ./src/components/PopularTags.js
var PopularTags = __webpack_require__(1419);
// EXTERNAL MODULE: ./src/components/Footer.js
var Footer = __webpack_require__(5700);
;// CONCATENATED MODULE: ./src/pages/search/[keyword]/page/[pageNumber].js
// /Volumes/SSD_1TB/next-antena2/front/src/pages/tag/[tagpage]/page/[pageNumber].js


















const SearchPage = ({ posts, totalCount, keyword, pageNumber, pageSize })=>{
    const router = (0,router_.useRouter)();
    const totalPages = Math.ceil(totalCount.count / pageSize);
    const changePage = (newPage)=>{
        router.push(`/search/${keyword}/page/${newPage}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(SearchBar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "justify-center text-center font-bold",
                children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                    className: "mb-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "border-b-2 pb-1 border-blue-300 text-2xl",
                        children: [
                            keyword,
                            "の関連動画"
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Sidebar/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-3 p-1 order-2 md:order-2",
                        children: [
                            posts.map((item, index)=>{
                                let date = item.published_at ? new Date(item.published_at) : null;
                                let formattedDate = "";
                                if (date && !isNaN(date.getTime())) {
                                    formattedDate = new Intl.DateTimeFormat("ja-JP", {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit"
                                    }).format(date);
                                } else {
                                    console.error("Invalid date: ", item.published_at);
                                }
                                let tagsArray = [];
                                if (item.tag) {
                                    tagsArray = item.tag.split(",").map((tag)=>tag.trim());
                                }
                                return /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "border-gray-300 rounded shadow-md",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        onClick: ()=>{
                                            (0,clickCountDB/* handleClickCount */.D)(item.id);
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "/[siteId]/[itemId]",
                                                    as: `/${item.site_id}/${item.id}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative h-[270px] w-full md:h-[320px] md:w-full",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src: item.imgurl,
                                                                    className: "w-full h-full object-cover",
                                                                    alt: item.title
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "absolute rounded-md top-2 left-2 bg-white bg-opacity-90 text-red-600 text-xl font-bold tracking-widest text-center p-1",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx(Clickcount/* default */.Z, {
                                                                        itemId: item.id
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                            className: "m-2 text-sm md:text-xl font-bold text-blue-600",
                                                            children: item.title
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "tags",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(Tags/* default */.Z, {
                                                        tagsArray: tagsArray,
                                                        numberTags: 5
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }, index);
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Pagination/* default */.Z, {
                                totalCount: totalCount,
                                pageSize: pageSize,
                                currentPage: pageNumber,
                                changePage: changePage,
                                pageChangeUrl: (page)=>{
                                    return `/tag/${keyword}/page/${page}`;
                                }
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
        ]
    });
};
async function getServerSideProps({ params }) {
    const pageSize = 20;
    const keyword = params.keyword;
    const pageNumber = params.pageNumber || 1;
    // SSRのためにデータフェッチを直接行う
    const fetchUrl = `https://api.erorice.com/search?tag=${keyword}&page=${pageNumber}&limit=${pageSize}`;
    const res = await fetch(fetchUrl);
    const posts = await res.json();
    const totalRes = await fetch(`https://api.erorice.com/search_count?tag=${keyword}`);
    const totalCount = await totalRes.json();
    return {
        props: {
            posts,
            totalCount,
            keyword,
            pageNumber: parseInt(pageNumber),
            pageSize
        }
    };
}
/* harmony default export */ const _pageNumber_ = (SearchPage);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fsearch%2F%5Bkeyword%5D%2Fpage%2F%5BpageNumber%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fsearch%2F%5Bkeyword%5D%2Fpage%2F%5BpageNumber%5D.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fsearch_2F_5Bkeyword_5D_2Fpage_2F_5BpageNumber_5D_preferredRegion_absolutePagePath_private_next_pages_2Fsearch_2F_5Bkeyword_5D_2Fpage_2F_5BpageNumber_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_pageNumber_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(_pageNumber_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(_pageNumber_namespaceObject, "getStaticPaths");
const next_route_loaderkind_PAGES_page_2Fsearch_2F_5Bkeyword_5D_2Fpage_2F_5BpageNumber_5D_preferredRegion_absolutePagePath_private_next_pages_2Fsearch_2F_5Bkeyword_5D_2Fpage_2F_5BpageNumber_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(_pageNumber_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(_pageNumber_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(_pageNumber_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(_pageNumber_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_pageNumber_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(_pageNumber_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(_pageNumber_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_pageNumber_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/search/[keyword]/page/[pageNumber]",
        pathname: "/search/[keyword]/page/[pageNumber]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: _pageNumber_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 7211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useTotalCount(apiUrl) {
    const [totalCount, setTotalCount] = useState(0);
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch(apiUrl);
            const data = await res.json();
            setTotalCount(data.count);
        };
        fetchData();
    }, [
        apiUrl
    ]);
    return totalCount;
}


/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [37,636,61,435,734,664,373,419], () => (__webpack_exec__(8329)));
module.exports = __webpack_exports__;

})();