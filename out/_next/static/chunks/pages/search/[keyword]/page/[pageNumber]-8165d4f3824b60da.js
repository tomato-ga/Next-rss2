(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[539],{6836:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search/[keyword]/page/[pageNumber]",function(){return s(8268)}])},5445:function(e,t,s){"use strict";var r=s(5893),l=s(7294),a=s(1163);t.Z=e=>{let{totalCount:t,pageSize:s,currentPage:i,pageChangeUrl:n}=e,c=(0,a.useRouter)(),[d,o]=(0,l.useState)(i),x=Math.ceil(t.count/s);(0,l.useEffect)(()=>{o(i)},[i]);let h=e=>{e>=1&&e<=x&&c.push(n(e)).then(()=>window.scrollTo(0,0)).catch(e=>console.error(e))};return(0,r.jsx)("div",{children:(0,r.jsxs)("ul",{className:"inline-flex -space-x-px text-base h-10 ",children:[(0,r.jsx)("button",{className:"flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white dark:bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700",disabled:1===d,onClick:()=>h(d-1),children:"前"}),(()=>{let e=[],t=Math.max(1,d-2),s=Math.min(x,t+4);t<1&&(s=(t=1)+4),s>x&&(t=Math.max(1,(s=x)-4));for(let l=t;l<=s;l++)e.push((0,r.jsx)("button",{className:"flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white dark:bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 ".concat(d===l?"font-bold text-2xl":""),onClick:()=>h(l),children:l},l));return e})(),(0,r.jsx)("button",{className:"flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700",disabled:d===x,onClick:()=>h(d+1),children:"次"})]})})}},866:function(e,t,s){"use strict";var r=s(5893),l=s(1664),a=s.n(l);s(7294),s(5675),t.Z=e=>{let{popumoviesRes:t}=e;return(0,r.jsxs)("div",{className:"justify-center text-center font-bold",children:[(0,r.jsx)("h2",{className:"mb-4",children:(0,r.jsx)("span",{className:"border-b-2 pb-1 border-blue-300 text-2xl",children:(0,r.jsx)(a(),{href:"/Mostpopular",children:"人気動画"})})}),(0,r.jsx)("div",{className:"flex flex-wrap justify-center sm:grid-cols-2 lg:flex gap-3",children:t.map((e,t)=>(0,r.jsx)("div",{className:"mr-3 mb-3 flex flex-col",children:(0,r.jsx)("div",{className:"relative w-[160px] h-[150px] md:w-[180px] md:h-[170px] mx-auto",children:(0,r.jsx)(a(),{href:"/[siteId]/[itemId]",as:"/".concat(e.rss.site_id,"/").concat(e.rss.id),children:(0,r.jsx)("div",{className:"absolute inset-0",children:(0,r.jsx)("img",{src:e.rss.imgurl,className:"w-full h-full object-cover",alt:e.rss.title})})})})},t))})]})}},1419:function(e,t,s){"use strict";var r=s(5893),l=s(1664),a=s.n(l);s(7294),t.Z=e=>{let{popuTagsRes:t}=e;return(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsxs)("div",{className:"text-center font-bold p-10 md:w-1/2 w-full",children:[(0,r.jsx)("h2",{className:"mb-4",children:(0,r.jsx)("span",{className:"border-b-2 pb-1 border-blue-300 text-2xl",children:"人気キーワード"})}),(0,r.jsx)("ul",{className:"flex flex-wrap space-x-2 justify-center",children:t.map((e,t)=>(0,r.jsx)("div",{className:"",children:(0,r.jsx)("li",{className:"inline-block bg-pink-50 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-pink-600 mr-2 mb-2",children:(0,r.jsxs)(a(),{href:"/tag/".concat(e,"/page/1"),children:["#",e]})})},t))})]})})}},7211:function(e,t,s){"use strict";s(7294)},8268:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return g},default:function(){return b}});var r=s(5893);s(7294);var l=s(3851),a=s(890),i=s(3980),n=s(5445);s(7211);var c=s(1664),d=s.n(c);s(5675);var o=s(1163),x=s(3899),h=s(1708),u=s(8054);s(866),s(1419);var m=s(5700),g=!0,b=e=>{let{posts:t,totalCount:s,keyword:c,pageNumber:g,pageSize:b}=e,f=(0,o.useRouter)();return s.count,(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(u.Z,{}),(0,r.jsx)("div",{className:"justify-center text-center font-bold",children:(0,r.jsx)("h2",{className:"mb-4",children:(0,r.jsxs)("span",{className:"border-b-2 pb-1 border-blue-300 text-2xl",children:[c,"の関連動画"]})})}),(0,r.jsxs)("div",{className:"container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start",children:[(0,r.jsx)(a.Z,{}),(0,r.jsxs)("div",{className:"md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-3 p-1 order-2 md:order-2",children:[t.map((e,t)=>{let s=e.published_at?new Date(e.published_at):null;s&&!isNaN(s.getTime())?new Intl.DateTimeFormat("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(s):console.error("Invalid date: ",e.published_at);let l=[];return e.tag&&(l=e.tag.split(",").map(e=>e.trim())),(0,r.jsx)("div",{className:"border-gray-300 rounded shadow-md",children:(0,r.jsx)("div",{onClick:()=>{(0,x.D)(e.id)},children:(0,r.jsxs)("div",{className:"border-gray-200",children:[(0,r.jsxs)(d(),{href:"/[siteId]/[itemId]",as:"/".concat(e.site_id,"/").concat(e.id),children:[(0,r.jsxs)("div",{className:"relative h-[270px] w-full md:h-[320px] md:w-full",children:[(0,r.jsx)("img",{src:e.imgurl,className:"w-full h-full object-cover",alt:e.title}),(0,r.jsx)("span",{className:"absolute rounded-md top-2 left-2 bg-white bg-opacity-90 text-red-600 text-xl font-bold tracking-widest text-center p-1",children:(0,r.jsx)(h.Z,{itemId:e.id})})]}),(0,r.jsx)("h2",{className:"m-2 text-sm md:text-xl font-bold text-blue-600",children:e.title})]}),(0,r.jsx)("div",{className:"tags",children:(0,r.jsx)(i.Z,{tagsArray:l,numberTags:5})})]})})},t)}),(0,r.jsx)(n.Z,{totalCount:s,pageSize:b,currentPage:g,changePage:e=>{f.push("/search/".concat(c,"/page/").concat(e))},pageChangeUrl:e=>"/tag/".concat(c,"/page/").concat(e)})]})]}),(0,r.jsx)(m.Z,{})]})}}},function(e){e.O(0,[61,76,774,888,179],function(){return e(e.s=6836)}),_N_E=e.O()}]);