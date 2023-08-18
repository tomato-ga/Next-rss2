"use strict";
(() => {
var exports = {};
exports.id = 752;
exports.ids = [752];
exports.modules = {

/***/ 6617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2F_5BsiteId_5D_2F_5BitemId_5D_preferredRegion_absolutePagePath_private_next_pages_2F_5BsiteId_5D_2F_5BitemId_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2F_5BsiteId_5D_2F_5BitemId_5D_preferredRegion_absolutePagePath_private_next_pages_2F_5BsiteId_5D_2F_5BitemId_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps),
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

// NAMESPACE OBJECT: ./src/pages/[siteId]/[itemId].js
var _itemId_namespaceObject = {};
__webpack_require__.r(_itemId_namespaceObject);
__webpack_require__.d(_itemId_namespaceObject, {
  "default": () => (_itemId_),
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Header.js
var Header = __webpack_require__(3851);
// EXTERNAL MODULE: ./src/components/Sidebar.js
var Sidebar = __webpack_require__(890);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Tags.js
var Tags = __webpack_require__(3980);
// EXTERNAL MODULE: ./src/components/Clickcount.js
var Clickcount = __webpack_require__(1708);
// EXTERNAL MODULE: ./src/lib/clickCountDB.js
var clickCountDB = __webpack_require__(3899);
;// CONCATENATED MODULE: ./src/components/RelatedTagPosts.js








const RelatedTagPosts = ({ tag })=>{
    const [posts, setPosts] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        const fetchRelatedPosts = async ()=>{
            try {
                const response = await fetch(`https://api.erorice.com/tag?tag=${tag}`);
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRelatedPosts();
    }, [
        tag
    ]);
    if (!posts.length) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mt-5 mb-3 p-2 font-bold text-2xl bg-slate-400 text-black",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                    children: [
                        "「",
                        tag,
                        "」の関連動画"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-3 p-1",
                children: posts.map((post)=>{
                    const tagsArray = post.tag.split(",").map((tag)=>tag.trim());
                    return /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "border-gray-300 rounded-lg shadow-lg",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            onClick: ()=>{
                                (0,clickCountDB/* handleClickCount */.D)(post.id);
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    href: "/[siteId]/[itemId]",
                                    as: `/${post.site_id}/${post.id}`,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative h-[270px] w-full md:h-[320px] md:w-full",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: post.imgurl,
                                                    className: "w-full h-full object-cover",
                                                    alt: post.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "absolute rounded-md top-2 left-2 bg-white bg-opacity-90 text-red-600 text-xl font-bold tracking-widest text-center p-1",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(Clickcount/* default */.Z, {
                                                        itemId: post.id
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "m-2 text-sm md:text-xl font-bold text-blue-600",
                                            children: post.title
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(Tags/* default */.Z, {
                                    tagsArray: tagsArray,
                                    numberTags: 5
                                })
                            ]
                        })
                    }, post.id);
                })
            })
        ]
    });
};
/* harmony default export */ const components_RelatedTagPosts = (RelatedTagPosts);

;// CONCATENATED MODULE: ./src/components/Comment.js



const Comment = ({ rss_id })=>{
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [comment, setComment] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        // TODO : おすすめするをコメントしたら再レンダリングして、投稿を取得して表示する
        // TODO : ログインしていないとコメントは見られないようにする
        // 選択された時間を"HH:MM:SS"形式に整形し、APIへ送信する
        const formattedHours = hours.toString().padStart(2, "0");
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const formattedSeconds = seconds.toString().padStart(2, "0");
        const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        const TimeAndComment = {
            rss_id: rss_id,
            recommend_time: timeString,
            comment: comment
        };
        // console.log(timeString, typeof timeString)
        const sendComment = async ()=>{
            try {
                const fetchComment = await fetch(`https://api.erorice.com/comment`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(TimeAndComment)
                });
                if (!fetchComment.ok) {
                    const errorData = await fetchComment.json();
                    console.error("fetchCommentエラー: ", errorData.detail);
                }
            } catch (err) {
                console.error("Network error: ", err); // ネットワークエラーが発生した場合
            }
        };
        if (TimeAndComment) {
            sendComment();
        } else {
            console.error("TIMEANDCOMMENTが送信できませんでした");
        }
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setComment("");
    };
    return /*#__PURE__*/ _jsxs("form", {
        children: [
            /*#__PURE__*/ _jsxs("label", {
                children: [
                    "抜ける時間：",
                    /*#__PURE__*/ _jsx("select", {
                        value: hours,
                        onChange: (e)=>setHours(e.target.value),
                        children: Array.from({
                            length: 12
                        }, (_, i)=>i).map((value)=>/*#__PURE__*/ _jsx("option", {
                                value: value,
                                children: value
                            }, value))
                    }),
                    "時間",
                    /*#__PURE__*/ _jsx("select", {
                        value: minutes,
                        onChange: (e)=>setMinutes(e.target.value),
                        children: Array.from({
                            length: 60
                        }, (_, i)=>i).map((value)=>/*#__PURE__*/ _jsx("option", {
                                value: value,
                                children: value
                            }, value))
                    }),
                    "分",
                    /*#__PURE__*/ _jsx("select", {
                        value: seconds,
                        onChange: (e)=>setSeconds(e.target.value),
                        children: Array.from({
                            length: 60
                        }, (_, i)=>i).map((value)=>/*#__PURE__*/ _jsx("option", {
                                value: value,
                                children: value
                            }, value))
                    }),
                    "秒"
                ]
            }),
            /*#__PURE__*/ _jsx("br", {}),
            /*#__PURE__*/ _jsxs("label", {
                children: [
                    "コメント：",
                    /*#__PURE__*/ _jsx("input", {
                        type: "text",
                        value: comment,
                        onChange: (e)=>setComment(e.target.value)
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("button", {
                type: "submit",
                onClick: handleSubmit,
                children: "おすすめする"
            })
        ]
    });
};
/* harmony default export */ const components_Comment = ((/* unused pure expression or super */ null && (Comment)));

;// CONCATENATED MODULE: ./src/components/Localrireki.js




const Localrireki = ({ localData })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "flex flex-wrap justify-center lg:flex-nowrap",
        children: localData ? localData.slice(0, 5).map((articleGroup, groupIndex)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "w-full md:w-1/2 lg:w-auto mb-3",
                children: articleGroup.map((article, articleIndex)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        onClick: ()=>{
                            (0,clickCountDB/* handleClickCount */.D)(article.id);
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/[siteId]/[itemId]",
                            as: `/${article.site_id}/${article.id}`,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mr-3 flex flex-col lg:flex-inline",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "relative flex justify-center items-center h-[200px] md:h-[170px] w-[250px] md:w-[170px] mx-auto",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            className: "",
                                            fill: true,
                                            src: article.imgurl,
                                            alt: article.title,
                                            sizes: "(max-width: 600px) 50vw, (max-width: 768px) 50vw, (max-width: 1200px) 50vw"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "p-2 text-center text-base",
                                        children: article.title
                                    })
                                ]
                            })
                        }, articleIndex)
                    }, articleIndex))
            }, groupIndex)) : null
    });
};
/* harmony default export */ const components_Localrireki = (Localrireki);

;// CONCATENATED MODULE: ./src/components/Favs.js



const Fav = ({ postId, articleData })=>{
    const [FavCount, setFavCount] = (0,external_react_.useState)(0);
    const [isFavorited, setIsFavorited] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const checkIfArticleIsFavorited = ()=>{
            // まずlocalStorageの個別のお気に入り状態を確認します
            const isFavoritedInStorage = localStorage.getItem(`fav_${postId}`) ? true : false;
            if (isFavoritedInStorage) {
                setIsFavorited(true);
                return; // すでにお気に入りとして登録されているので、この後の確認は不要です
            }
            // 次に、favArticleDataの中に記事が存在するかどうかを確認します
            const favArticlesStr = localStorage.getItem("favArticleData");
            if (favArticlesStr) {
                const favArticles = JSON.parse(favArticlesStr);
                const isArticleFavorited = favArticles.some((article)=>article.id === postId);
                setIsFavorited(isArticleFavorited);
            }
        };
        checkIfArticleIsFavorited();
    }, [
        postId
    ]);
    const incrementFavCount = async ()=>{
        console.log("Button clicked!");
        if (isFavorited) {
            // お気に入りを取り消す場合の処理を追加
            localStorage.removeItem(`fav_${postId}`);
            let favArticles = localStorage.getItem("favArticleData");
            favArticles = favArticles ? JSON.parse(favArticles) : [];
            const filteredArticles = favArticles.filter((article)=>article.id !== postId);
            localStorage.setItem("favArticleData", JSON.stringify(filteredArticles));
            setIsFavorited(false);
            return;
        }
        try {
            const updatedCount = await (0,clickCountDB/* handleFavCount */.h)(postId);
            setFavCount(updatedCount);
            // 成功したらlocalStorageに保存
            localStorage.setItem(`fav_${postId}`, "true");
            setIsFavorited(true);
            // favArticleDataにデータを追加
            let favArticles = localStorage.getItem("favArticleData");
            favArticles = favArticles ? JSON.parse(favArticles) : [];
            // postIdがすでに存在しないか確認して、存在しなければ追加
            const isArticleExist = favArticles.some((article)=>article.id === postId);
            if (!isArticleExist) {
                if (favArticles.length === 500) {
                    favArticles.pop();
                }
                favArticles.unshift(articleData); // articleDataを直接追加
                localStorage.setItem("favArticleData", JSON.stringify(favArticles));
            }
        } catch (error) {
            console.error("Failed to handle fav count", error);
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "flex gap-2 items-center",
        onClick: incrementFavCount,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
            className: `py-1.5 px-3 ${isFavorited ? "opacity-50" : "hover:text-blue-600 hover:scale-105 hover:shadow"} text-center border  rounded-md font-bold border-blue-400 text-blue-700 h-8 text-sm flex items-center gap-1 lg:gap-2`,
            children: [
                isFavorited ? "お気に入りを削除する" : "お気に入りに登録する",
                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                    className: "w-4 h-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Favs = (Fav);

// EXTERNAL MODULE: ./src/components/Footer.js
var Footer = __webpack_require__(5700);
// EXTERNAL MODULE: ./src/components/SearchBar.js
var SearchBar = __webpack_require__(8054);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/pages/[siteId]/[itemId].js



















// TODO このSSRのときに、関連記事もSSRするようにすればOK RelatedTagPostsはコンポーネントなだけだから、SSRできない
async function getServerSideProps(context) {
    const { siteId, itemId } = context.params;
    const ENDP = `https://api.erorice.com/sites/rss/${itemId}`;
    const res = await fetch(ENDP);
    const data = await res.json();
    const tags = data[0]?.tag.split(",");
    return {
        props: {
            data,
            tags
        }
    };
}
const Posts = ({ data })=>{
    const [localData, setLocalData] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        if (!data) return;
        let savedArticles = JSON.parse(localStorage.getItem("articleData")) || [];
        let currentTime = new Date().toISOString();
        let newDataWithTimestamp = {
            ...data[0],
            timestamp: currentTime
        };
        const isArticleExist = savedArticles.some((article)=>article[0].id === newDataWithTimestamp.id);
        if (isArticleExist) {
            savedArticles = savedArticles.filter((article)=>article[0].id !== newDataWithTimestamp.id);
        }
        if (savedArticles.length === 500) {
            savedArticles.pop();
        }
        savedArticles.unshift([
            newDataWithTimestamp
        ]);
        localStorage.setItem("articleData", JSON.stringify(savedArticles));
        const checkSavedArticles = ()=>{
            let savedbrowserArticles = JSON.parse(localStorage.getItem("articleData")) || [];
            savedbrowserArticles.sort((a, b)=>new Date(b[0].timestamp) - new Date(a[0].timestamp));
            if (savedbrowserArticles) {
                setLocalData(savedbrowserArticles);
            }
        };
        checkSavedArticles();
    }, [
        data
    ]);
    if (!data) {
        return /*#__PURE__*/ jsx_runtime.jsx("p", {
            children: "ロード中です。もしかしたらデータないかも"
        });
    }
    let tags = data[0].tag.split(",");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_next_seo_.NextSeo, {
                title: data[0].title,
                description: data[0].description,
                canonical: `http://localhost:3000/${data[0].site_id}/${data[0].id}`
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(SearchBar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container mx-auto px-4 py-6 flex flex-col-reverse md:flex-row",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Sidebar/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "md:w-3/4 md:ml-4 overflow-hidden",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                className: "m-2 text-xl md:text-4xl font-bold text-blue-600 border-b pb-2",
                                children: data[0].title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid md:grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "desc p-5",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: data[0].imgurl
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "p-2 md:p-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(Tags/* default */.Z, {
                                                tagsArray: tags,
                                                numberTags: 20
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(Favs, {
                                                postId: data[0].id,
                                                articleData: data
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "p-2 md:p-4"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-2xl bg-blue-700 text-white text-center font-semibold hover:bg-orange-700 rounded-md",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                        href: data[0].link,
                                        target: "_blank",
                                        children: [
                                            data[0].title,
                                            "のページを見る"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mt-5 mb-3 p-2 font-bold text-2xl bg-slate-400 text-black",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    children: "最近チェックした動画"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "relative",
                                children: /*#__PURE__*/ jsx_runtime.jsx(components_Localrireki, {
                                    localData: localData
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(components_RelatedTagPosts, {
                                tag: tags[0]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const _itemId_ = (Posts);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F%5BsiteId%5D%2F%5BitemId%5D&preferredRegion=&absolutePagePath=private-next-pages%2F%5BsiteId%5D%2F%5BitemId%5D.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2F_5BsiteId_5D_2F_5BitemId_5D_preferredRegion_absolutePagePath_private_next_pages_2F_5BsiteId_5D_2F_5BitemId_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_itemId_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(_itemId_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(_itemId_namespaceObject, "getStaticPaths");
const next_route_loaderkind_PAGES_page_2F_5BsiteId_5D_2F_5BitemId_5D_preferredRegion_absolutePagePath_private_next_pages_2F_5BsiteId_5D_2F_5BitemId_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(_itemId_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(_itemId_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(_itemId_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(_itemId_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_itemId_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(_itemId_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(_itemId_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_itemId_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/[siteId]/[itemId]",
        pathname: "/[siteId]/[itemId]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: _itemId_namespaceObject
});

//# sourceMappingURL=pages.js.map

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [37,636,61,435,734,664], () => (__webpack_exec__(6617)));
module.exports = __webpack_exports__;

})();