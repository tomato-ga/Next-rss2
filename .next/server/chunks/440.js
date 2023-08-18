"use strict";
exports.id = 440;
exports.ids = [440];
exports.modules = {

/***/ 547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// /Volumes/SSD_1TB/next-antena2/front/src/hooks/useTagPagination.js

function NoneuseTagPagination(baseUrl, tag, pageSize) {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Set initial page to 1
    const changePage = (newPage)=>{
        setCurrentPage(Number(newPage)); // Make sure newPage is a Number
    };
    useEffect(()=>{
        if (!baseUrl || !tag) {
            // Do not fetch if baseUrl or tag is empty
            return;
        }
        const controller = new AbortController(); // Create new AbortController
        const signal = controller.signal;
        const fetchUrl = `${baseUrl}/tag?tag=${tag}&page=${currentPage}&limit=${pageSize}`;
        fetch(fetchUrl, {
            signal
        }) // Add signal to the fetch options
        .then((response)=>response.json()).then((jsonData)=>setData(jsonData)).catch((error)=>{
            if (error.name === "AbortError") {
                console.log("Fetch cancelled");
            } else {
                console.error(error);
            }
        });
        return ()=>{
            controller.abort(); // Abort fetch on unmount or when dependencies change
        };
    }, [
        currentPage,
        pageSize,
        baseUrl,
        tag
    ]);
    return [
        data,
        currentPage,
        changePage
    ];
}


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


/***/ })

};
;