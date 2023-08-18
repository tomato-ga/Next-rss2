"use strict";
exports.id = 373;
exports.ids = [373];
exports.modules = {

/***/ 5445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
// /Volumes/SSD_1TB/next-antena2/front/src/components/Pagination.js



const Pagination = ({ totalCount, pageSize, currentPage, pageChangeUrl })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentPage);
    const totalPages = Math.ceil(totalCount.count / pageSize);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setCurrent(currentPage);
    }, [
        currentPage
    ]);
    const changePage = (newPage)=>{
        if (newPage >= 1 && newPage <= totalPages) {
            router.push(pageChangeUrl(newPage)).then(()=>window.scrollTo(0, 0)).catch((error)=>console.error(error));
        }
    };
    const pageLinks = ()=>{
        let links = [];
        let startPage = Math.max(1, current - 2);
        let endPage = Math.min(totalPages, startPage + 4);
        // startPageが1より小さくならないように調整
        if (startPage < 1) {
            startPage = 1;
            endPage = startPage + 4;
        }
        // endPageがtotalPagesより大きくならないように調整
        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - 4);
        }
        for(let i = startPage; i <= endPage; i++){
            links.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: `flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white dark:bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 ${current === i ? "font-bold text-2xl" : ""}`,
                onClick: ()=>changePage(i),
                children: i
            }, i));
        }
        return links;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "inline-flex -space-x-px text-base h-10 ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white dark:bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700",
                    disabled: current === 1,
                    onClick: ()=>changePage(current - 1),
                    children: "前"
                }),
                pageLinks(),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700",
                    disabled: current === totalPages,
                    onClick: ()=>changePage(current + 1),
                    children: "次"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ }),

/***/ 866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




const PopularMovies = ({ popumoviesRes })=>{
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const ENDP = `https://api.erorice.com/top_movies`;
    //             const res = await fetch(ENDP);
    //             const data = await res.json();
    //             setData(data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     fetchData();
    // }, [])
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "justify-center text-center font-bold",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "mb-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "border-b-2 pb-1 border-blue-300 text-2xl",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/Mostpopular",
                        children: "人気動画"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-wrap justify-center sm:grid-cols-2 lg:flex gap-3",
                children: popumoviesRes.map((movie, movieIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mr-3 mb-3 flex flex-col",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative w-[160px] h-[150px] md:w-[180px] md:h-[170px] mx-auto",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/[siteId]/[itemId]",
                                as: `/${movie.rss.site_id}/${movie.rss.id}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute inset-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: movie.rss.imgurl,
                                        className: "w-full h-full object-cover",
                                        alt: movie.rss.title
                                    })
                                })
                            })
                        })
                    }, movieIndex))
            })
        ]
    });
// 2023/08/18 Imageコンポーネントを削除してimgタグへ変更した
// ImageコンポーネントのときのJSX
//     return (
//     <div className="justify-center text-center font-bold">
//         <h2 className="mb-4">
//             <span className="border-b-2 pb-1 border-blue-300 text-2xl">
//                 <Link href="/Mostpopular">
//                 人気動画
//                 </Link>
//             </span>
//         </h2>
//         <div className="flex flex-wrap justify-center sm:grid-cols-2 lg:flex gap-3">
//             {popumoviesRes.map((movie, movieIndex) => (
//                 <div key={movieIndex} className="mr-3 mb-3 flex flex-col">
//                     <div className="relative flex justify-center items-center h-[150px] w-[160px] md:h-[170px] md:w-[180px] mx-auto">
//                         <Link href="/[siteId]/[itemId]" as={`/${movie.rss.site_id}/${movie.rss.id}`}>
//                             <Image fill src={movie.rss.imgurl} alt={movie.rss.title}  />
//                         </Link>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularMovies);


/***/ })

};
;