"use strict";
exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 3599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Ssr)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/components/Sidebar.js
var Sidebar = __webpack_require__(890);
// EXTERNAL MODULE: ./src/components/Tags.js
var Tags = __webpack_require__(3980);
// EXTERNAL MODULE: ./src/components/Pagination.js
var Pagination = __webpack_require__(5445);
// EXTERNAL MODULE: ./src/lib/clickCountDB.js
var clickCountDB = __webpack_require__(3899);
;// CONCATENATED MODULE: ./src/components/NewSide.js



const NewSidebar = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "border border-gray-300 rounded-lg shadow-lg p-5 flex-grow-0 w-auto",
        children: /*#__PURE__*/ _jsxs("div", {
            class: "fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    class: "flex items-center justify-center h-14 border-b",
                    children: /*#__PURE__*/ _jsx("div", {
                        children: "Sidebar Navigation By iAmine"
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    class: "overflow-y-auto overflow-x-hidden flex-grow",
                    children: /*#__PURE__*/ _jsxs("ul", {
                        class: "flex flex-col py-4 space-y-1",
                        children: [
                            /*#__PURE__*/ _jsx("li", {
                                class: "px-5",
                                children: /*#__PURE__*/ _jsx("div", {
                                    class: "flex flex-row items-center h-8",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        class: "text-sm font-light tracking-wide text-gray-500",
                                        children: "Menu"
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                children: /*#__PURE__*/ _jsxs("a", {
                                    href: "#",
                                    class: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "inline-flex justify-center items-center ml-4",
                                            children: /*#__PURE__*/ _jsx("svg", {
                                                class: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ _jsx("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "ml-2 text-sm tracking-wide truncate",
                                            children: "Dashboard"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                children: /*#__PURE__*/ _jsxs("a", {
                                    href: "#",
                                    class: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "inline-flex justify-center items-center ml-4",
                                            children: /*#__PURE__*/ _jsx("svg", {
                                                class: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ _jsx("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "ml-2 text-sm tracking-wide truncate",
                                            children: "Inbox"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full",
                                            children: "New"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                children: /*#__PURE__*/ _jsxs("a", {
                                    href: "#",
                                    class: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "inline-flex justify-center items-center ml-4",
                                            children: /*#__PURE__*/ _jsx("svg", {
                                                class: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ _jsx("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "ml-2 text-sm tracking-wide truncate",
                                            children: "Messages"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                children: /*#__PURE__*/ _jsxs("a", {
                                    href: "#",
                                    class: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "inline-flex justify-center items-center ml-4",
                                            children: /*#__PURE__*/ _jsx("svg", {
                                                class: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ _jsx("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "ml-2 text-sm tracking-wide truncate",
                                            children: "Notifications"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full",
                                            children: "1.2k"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                class: "px-5",
                                children: /*#__PURE__*/ _jsx("div", {
                                    class: "flex flex-row items-center h-8",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        class: "text-sm font-light tracking-wide text-gray-500",
                                        children: "Tasks"
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                children: /*#__PURE__*/ _jsxs("a", {
                                    href: "#",
                                    class: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "inline-flex justify-center items-center ml-4",
                                            children: /*#__PURE__*/ _jsx("svg", {
                                                class: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ _jsx("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "ml-2 text-sm tracking-wide truncate",
                                            children: "Available Tasks"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                children: /*#__PURE__*/ _jsxs("a", {
                                    href: "#",
                                    class: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "inline-flex justify-center items-center ml-4",
                                            children: /*#__PURE__*/ _jsx("svg", {
                                                class: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ _jsx("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "ml-2 text-sm tracking-wide truncate",
                                            children: "Clients"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full",
                                            children: "15"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                class: "px-5",
                                children: /*#__PURE__*/ _jsx("div", {
                                    class: "flex flex-row items-center h-8",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        class: "text-sm font-light tracking-wide text-gray-500",
                                        children: "Settings"
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                children: /*#__PURE__*/ _jsxs("a", {
                                    href: "#",
                                    class: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "inline-flex justify-center items-center ml-4",
                                            children: /*#__PURE__*/ _jsx("svg", {
                                                class: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ _jsx("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "ml-2 text-sm tracking-wide truncate",
                                            children: "Profile"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                children: /*#__PURE__*/ _jsxs("a", {
                                    href: "#",
                                    class: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "inline-flex justify-center items-center ml-4",
                                            children: /*#__PURE__*/ _jsxs("svg", {
                                                class: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ _jsx("path", {
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        "stroke-width": "2",
                                                        d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                    }),
                                                    /*#__PURE__*/ _jsx("path", {
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        "stroke-width": "2",
                                                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "ml-2 text-sm tracking-wide truncate",
                                            children: "Settings"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                children: /*#__PURE__*/ _jsxs("a", {
                                    href: "#",
                                    class: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "inline-flex justify-center items-center ml-4",
                                            children: /*#__PURE__*/ _jsx("svg", {
                                                class: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ _jsx("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            class: "ml-2 text-sm tracking-wide truncate",
                                            children: "Logout"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const NewSide = ((/* unused pure expression or super */ null && (NewSidebar)));

// EXTERNAL MODULE: ./src/components/PopularMovies.js
var PopularMovies = __webpack_require__(866);
// EXTERNAL MODULE: ./src/components/Clickcount.js
var Clickcount = __webpack_require__(1708);
;// CONCATENATED MODULE: ./src/pages/topSSR.js
// /Volumes/SSD_1TB/next-antena2/front/src/pages/topSSR.js













function Ssr({ data, totalCount, page, limit }) {
    const itemIds = (0,external_react_.useMemo)(()=>data ? data.map((item)=>item.id) : [], [
        data
    ]);
    const [items, setItems] = (0,external_react_.useState)(itemIds);
    const [clickCounts, setClickCounts] = (0,external_react_.useState)({});
    if (!data) return null; // Ssrコンポーネントの先頭部分でこのように追加してください。
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Sidebar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-3 p-1 order-2 md:order-2",
                children: [
                    data.map((item, index)=>{
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
                            className: "border-gray-300 rounded-lg shadow-lg",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: " border-gray-200 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        onClick: ()=>{
                                            (0,clickCountDB/* handleClickCount */.D)(item.id);
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
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
                                        })
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
                        }, index);
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Pagination/* default */.Z, {
                        totalCount: totalCount,
                        pageSize: limit,
                        currentPage: page,
                        pageChangeUrl: (page)=>`/page/${page}`
                    })
                ]
            })
        ]
    });
} // useEffect(() => {
 //     const fetchClickCounts = async () => {
 //         const response = await fetch('https://api.erorice.com/click_counts', {
 //             method: 'POST',
 //             headers: {
 //                 'Content-Type': 'application/json',
 //             },
 //             body: JSON.stringify(itemIds), 
 //         });
 //         if (!response.ok) {
 //             console.error(`Error fetching click counts: ${response.status} ${response.statusText}`);
 //             return;
 //         }
 //         const initialClickCounts = await response.json();
 //         setClickCounts(initialClickCounts);
 //     };
 //     if (Array.isArray(itemIds) && itemIds.every(Number.isInteger)) {
 //         fetchClickCounts();
 //     } else {
 //         console.error("itemIds must be an array of integers", itemIds);
 //     }
 // }, [itemIds]);
 // console.log('ID一覧',itemIds);
 // console.log('クリックカウント数',clickCounts);
 // console.log('clickCountsの型:', typeof clickCounts);
 // return (
 //     <div className='container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start'>
 //         <Sidebar />
 //         <div className="md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-3 p-1 order-2 md:order-2">
 //             {data.map((item, index) => {
 //                 let date = item.published_at ? new Date(item.published_at) : null;
 //                 let formattedDate = "";
 //                 if (date && !isNaN(date.getTime())) { // Check if date is valid
 //                     formattedDate = new Intl.DateTimeFormat('ja-JP', {
 //                         year: 'numeric', month: '2-digit', day: '2-digit',
 //                         hour: '2-digit', minute: '2-digit', second: '2-digit'
 //                     }).format(date);
 //                 } else {
 //                     console.error("Invalid date: ", item.published_at);
 //                 }
 //                 let tagsArray = [];
 //                 if (item.tag) { // Check if tag exists
 //                     tagsArray = item.tag.split(',').map(tag => tag.trim());
 //                 }
 //                 return (
 //                     <div key={index} className='border-gray-300 rounded-lg shadow-lg'>
 //                         <div className=' border-gray-200 '>
 //                             <div onClick={() => {handleClickCount(item.id)}}>
 //                             <Link href="/[siteId]/[itemId]" as={`/${item.site_id}/${item.id}`}>
 //                             <div className="relative h-[270px] w-full md:h-[320px] md:w-full">
 //                                 <Image fill src={item.imgurl} className={styles.image} alt={item.title} priority />
 //                                 {/* <img src={item.imgurl} className={styles.image} alt={item.title} /> */}
 //                                 <span className="absolute rounded-md top-2 left-2 bg-white bg-opacity-90 text-red-600 text-xl font-bold tracking-widest text-center p-1">
 //                                     <FetchClickCounts itemId={item.id}/>
 //                                 </span>
 //                             </div>
 //                                 <h2 className='m-2 text-sm md:text-xl font-bold text-blue-600'>
 //                                     {item.title}
 //                                 </h2>
 //                             </Link>
 //                             </div>
 //                             <div className='tags'>
 //                             <Tags tagsArray={tagsArray} numberTags={5}/>
 //                             </div>
 //                         </div>
 //                     </div>
 //                 );
 //             })}
 //             <Pagination totalCount={totalCount} pageSize={limit} currentPage={page} pageChangeUrl={(page) => `/page/${page}`} />
 //         </div>
 //     </div>
 // );


/***/ })

};
;