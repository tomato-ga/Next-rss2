"use strict";
exports.id = 734;
exports.ids = [734];
exports.modules = {

/***/ 1708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// ClickCounts.js


const FetchClickCounts = ({ itemId })=>{
    const [clickCount, setClickCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchClickCounts = async ()=>{
            if (typeof itemId !== "number") {
                console.error("itemId must be a number", itemId);
                return;
            }
            const response = await fetch("https://api.erorice.com/click_counts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify([
                    itemId
                ])
            });
            if (!response.ok) {
                console.error(`Error fetching click counts: ${response.status} ${response.statusText}`);
                return;
            }
            const initialClickCounts = await response.json();
            setClickCount(initialClickCounts[itemId] || 0);
        };
        fetchClickCounts();
    }, [
        itemId
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: "absolute rounded-md top-2 left-2 bg-white bg-opacity-90 text-red-600 text-xl font-bold tracking-widest text-center p-1",
        children: [
            clickCount,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-xs",
                children: "Click"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FetchClickCounts);


/***/ }),

/***/ 890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Sidebar = ()=>{
    const [topTags, settopTags] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const ENDP = `https://api.erorice.com/top_tags`;
                const res = await fetch(ENDP);
                const data = await res.json();
                settopTags(data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData(); // 非同期関数を呼び出す
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border border-gray-300 rounded-lg shadow-lg p-5 flex-grow-0 w-56",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-xl mb-4 text-center",
                children: "人気のキーワード"
            }),
            topTags.slice(0, 10).map((tag, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "space-y-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "list-disc text-blue-500 font-bold",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: `/tag/${tag}/page/1`,
                                children: tag
                            })
                        })
                    })
                }, index))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ }),

/***/ 3980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const { default: Link } = __webpack_require__(1664);
const Tags = ({ tagsArray, numberTags })=>{
    const cleanedTags = tagsArray.map((tag)=>tag.trim());
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "tags flex sm:m-auto flex-wrap p-2",
        children: cleanedTags.slice(0, numberTags).map((tag, tagIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Link, {
                href: "/tag/[tagpage]/page/[pageNumber]",
                as: `/tag/${tag}/page/1`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "inline-block bg-pink-50 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-pink-600 mr-2 mb-2",
                    children: [
                        "#",
                        tag
                    ]
                })
            }, tagIndex))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tags);


/***/ }),

/***/ 3899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ handleClickCount),
/* harmony export */   h: () => (/* binding */ handleFavCount)
/* harmony export */ });
// /Volumes/SSD_1TB/next-antena2/front/src/lib/clickCountDB.js
const handleClickCount = async (postitemid)=>{
    try {
        const response = await fetch(`https://api.erorice.com/click_count/${postitemid}`, {
            method: "PUT"
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
};
const handleFavCount = async (postId)=>{
    try {
        const response = await fetch(`https://api.erorice.com/fav_count/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(response);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        return data.count; // APIから返された実際のカウントを返します。
    } catch (error) {
        console.error("Failed to handle fav count", error);
        throw error;
    }
}; // export const getClickCount = async (postitemid) => {
 //     let response;
 //     try {
 //         response = await fetch(`https://api.erorice.com/click_count/${postitemid}`, {
 //             method: 'GET',
 //         });
 //         if (!response.ok) {
 //             throw new Error(response.statusText);
 //         }
 //     } catch (error) {
 //         console.error(error);
 //     }
 //     const data = await response.json();
 //     return data.count;
 // };


/***/ })

};
;