"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[599],{5445:function(e,t,r){var s=r(5893),l=r(7294),a=r(1163);t.Z=e=>{let{totalCount:t,pageSize:r,currentPage:i,pageChangeUrl:d}=e,n=(0,a.useRouter)(),[c,o]=(0,l.useState)(i),x=Math.ceil(t.count/r);(0,l.useEffect)(()=>{o(i)},[i]);let h=e=>{e>=1&&e<=x&&n.push(d(e)).then(()=>window.scrollTo(0,0)).catch(e=>console.error(e))};return(0,s.jsx)("div",{children:(0,s.jsxs)("ul",{className:"inline-flex -space-x-px text-base h-10 ",children:[(0,s.jsx)("button",{className:"flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white dark:bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700",disabled:1===c,onClick:()=>h(c-1),children:"前"}),(()=>{let e=[],t=Math.max(1,c-2),r=Math.min(x,t+4);t<1&&(r=(t=1)+4),r>x&&(t=Math.max(1,(r=x)-4));for(let l=t;l<=r;l++)e.push((0,s.jsx)("button",{className:"flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white dark:bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 ".concat(c===l?"font-bold text-2xl":""),onClick:()=>h(l),children:l},l));return e})(),(0,s.jsx)("button",{className:"flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700",disabled:c===x,onClick:()=>h(c+1),children:"次"})]})})}},866:function(e,t,r){var s=r(5893),l=r(1664),a=r.n(l);r(7294),r(5675),t.Z=e=>{let{popumoviesRes:t}=e;return(0,s.jsxs)("div",{className:"justify-center text-center font-bold",children:[(0,s.jsx)("h2",{className:"mb-4",children:(0,s.jsx)("span",{className:"border-b-2 pb-1 border-blue-300 text-2xl",children:(0,s.jsx)(a(),{href:"/Mostpopular",children:"人気動画"})})}),(0,s.jsx)("div",{className:"flex flex-wrap justify-center sm:grid-cols-2 lg:flex gap-3",children:t.map((e,t)=>(0,s.jsx)("div",{className:"mr-3 mb-3 flex flex-col",children:(0,s.jsx)("div",{className:"relative w-[160px] h-[150px] md:w-[180px] md:h-[170px] mx-auto",children:(0,s.jsx)(a(),{href:"/[siteId]/[itemId]",as:"/".concat(e.rss.site_id,"/").concat(e.rss.id),children:(0,s.jsx)("div",{className:"absolute inset-0",children:(0,s.jsx)("img",{src:e.rss.imgurl,className:"w-full h-full object-cover",alt:e.rss.title})})})})},t))})]})}},3599:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var s=r(5893),l=r(7294),a=r(1664),i=r.n(a);r(5675);var d=r(890),n=r(3980),c=r(5445),o=r(3899);r(866);var x=r(1708);function h(e){let{data:t,totalCount:r,page:a,limit:h}=e,m=(0,l.useMemo)(()=>t?t.map(e=>e.id):[],[t]),[u,g]=(0,l.useState)(m),[b,f]=(0,l.useState)({});return t?(0,s.jsxs)("div",{className:"container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start",children:[(0,s.jsx)(d.Z,{}),(0,s.jsxs)("div",{className:"md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-3 p-1 order-2 md:order-2",children:[t.map((e,t)=>{let r=e.published_at?new Date(e.published_at):null;r&&!isNaN(r.getTime())?new Intl.DateTimeFormat("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(r):console.error("Invalid date: ",e.published_at);let l=[];return e.tag&&(l=e.tag.split(",").map(e=>e.trim())),(0,s.jsx)("div",{className:"border-gray-300 rounded-lg shadow-lg",children:(0,s.jsxs)("div",{className:" border-gray-200 ",children:[(0,s.jsx)("div",{onClick:()=>{(0,o.D)(e.id)},children:(0,s.jsxs)(i(),{href:"/[siteId]/[itemId]",as:"/".concat(e.site_id,"/").concat(e.id),children:[(0,s.jsxs)("div",{className:"relative h-[270px] w-full md:h-[320px] md:w-full",children:[(0,s.jsx)("img",{src:e.imgurl,className:"w-full h-full object-cover",alt:e.title}),(0,s.jsx)("span",{className:"absolute rounded-md top-2 left-2 bg-white bg-opacity-90 text-red-600 text-xl font-bold tracking-widest text-center p-1",children:(0,s.jsx)(x.Z,{itemId:e.id})})]}),(0,s.jsx)("h2",{className:"m-2 text-sm md:text-xl font-bold text-blue-600",children:e.title})]})}),(0,s.jsx)("div",{className:"tags",children:(0,s.jsx)(n.Z,{tagsArray:l,numberTags:5})})]})},t)}),(0,s.jsx)(c.Z,{totalCount:r,pageSize:h,currentPage:a,pageChangeUrl:e=>"/page/".concat(e)})]})]}):null}}}]);