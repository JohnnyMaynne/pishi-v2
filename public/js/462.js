"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[462,684],{3744:(e,t)=>{t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,n]of t)r[e]=n;return r}},9184:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(821),o={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"};const a={},l=(0,r(3744).Z)(a,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.renderSlot)(e.$slots,"default")])}]])},7258:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(821);const o={props:{date:[String,Date]},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,(0,n.toDisplayString)(new Date(e.date).toDateString()),1)}}}},5643:(e,t,r)=>{r.d(t,{Z:()=>B});var n=r(821),o={class:"-my-2 -mx-4 sm:-mx-6 lg:-mx-8"},a={class:"inline-block min-w-full pt-2 align-middle md:px-6 lg:px-8"},l={class:"overflow-hidden border md:rounded-md"};const c={};const s=(0,r(3744).Z)(c,[["render",function(e,t,r,c,s,i){return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("div",l,[(0,n.renderSlot)(e.$slots,"default")])])])}]]);var i={key:0,class:"bg-white select-none p-3 flex items-center justify-between border-t border-gray-200"},u={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},d=(0,n.createElementVNode)("div",null,null,-1),f={class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},p=[(0,n.createElementVNode)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,n.createElementVNode)("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1)],m=["onClick"],g=[(0,n.createElementVNode)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,n.createElementVNode)("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1)];const h={props:{current:{type:Number,default:1},total:{type:Number,default:0},perPage:{type:Number,default:9},pageRange:{type:Number,default:2},limit:{type:Number,default:4}},emits:["current-change"],setup:function(e,t){var r=t.emit,o=e,a=(0,n.computed)((function(){var e=o.current-o.pageRange;return e>0?e:1})),l=(0,n.computed)((function(){var e=o.current+o.pageRange;return e<c.value?e:c.value})),c=(0,n.computed)((function(){return Math.ceil(o.total/o.perPage)})),s=(0,n.computed)((function(){return o.current+1})),h=(0,n.computed)((function(){return o.current-1})),v=function(e){e>0&&e<=c.value&&r("current-change",e)},x=(0,n.computed)((function(){for(var e=[],t=a.value;t<=l.value;t++)e.push(t);return e}));return function(t,r){return e.total>e.perPage?((0,n.openBlock)(),(0,n.createElementBlock)("div",i,[(0,n.createElementVNode)("div",u,[d,(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("nav",f,[(0,n.createElementVNode)("button",{type:"button",onClick:r[0]||(r[0]=(0,n.withModifiers)((function(e){return v((0,n.unref)(h))}),["prevent"])),class:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm text-gray-500 hover:bg-gray-50"},p),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)((0,n.unref)(x),(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:"button",class:(0,n.normalizeClass)([[e.current===t?"z-10 bg-indigo-50 border-indigo-500 text-indigo-600":"bg-white border-gray-300 text-gray-500 hover:bg-gray-50"],"hidden md:inline-flex relative items-center px-4 py-2 border text-sm"]),key:t,onClick:(0,n.withModifiers)((function(e){return v(t)}),["prevent"])},[(0,n.createElementVNode)("span",null,(0,n.toDisplayString)(t),1)],10,m)})),128)),(0,n.createElementVNode)("button",{type:"button",onClick:r[1]||(r[1]=(0,n.withModifiers)((function(e){return v((0,n.unref)(s))}),["prevent"])),class:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm text-gray-500 hover:bg-gray-50"},g)])])])])):(0,n.createCommentVNode)("",!0)}}};var v=r(9680),x={key:0,class:"h-full"},k={class:"min-w-full divide-y divide-gray-300"},w={key:0,class:"bg-gray-50"},y=["width"],b={class:"divide-y divide-gray-200 bg-white"},N=["onClick"],V=["width"],E={class:"text-gray-500"};const B={props:{columns:{type:Array,default:function(){return[]}},data:{type:Object}},emits:["page-change","row-click"],setup:function(e,t){var r=t.emit,o=function(e,t){return t.prop.split(".").reduce((function(e,t){return e[t]}),e)},a=function(e){r("page-change",e),v.Inertia.reload({data:{page:e}})};return function(t,l){return e.data?((0,n.openBlock)(),(0,n.createElementBlock)("div",x,[(0,n.createVNode)((0,n.unref)(s),null,{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("table",k,[e.columns.length?((0,n.openBlock)(),(0,n.createElementBlock)("thead",w,[(0,n.createElementVNode)("tr",null,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.columns,(function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("th",{key:"head + ".concat(t),scope:"col",width:e.width,class:"px-3 py-3.5 text-left text-sm text-gray-900"},(0,n.toDisplayString)(e.label),9,y)})),128))])])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("tbody",b,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.data.data,(function(a,l){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",{key:"row + ".concat(l),onClick:function(e){return r("row-click",a)},class:"group"},[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.columns,(function(e,r){return(0,n.openBlock)(),(0,n.createElementBlock)("td",{key:"cell  + ".concat(r),width:e.width,class:"whitespace-nowrap group-hover:bg-gray-50 cursor-pointer px-3 py-3.5 text-sm text-gray-500"},[(0,n.renderSlot)(t.$slots,e.prop,{row:a},(function(){return[(0,n.createElementVNode)("span",E,(0,n.toDisplayString)(o(a,e)),1)]}))],8,V)})),128))],8,N)})),128))])]),(0,n.createVNode)((0,n.unref)(h),{onCurrentChange:a,current:e.data.current_page,total:e.data.total,perPage:e.data.per_page},null,8,["current","total","perPage"])]})),_:3})])):(0,n.createCommentVNode)("",!0)}}}},9587:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(821),o=r(9038);const a={props:{active:Boolean,href:String,as:String},setup:function(e){var t=e,r=(0,n.computed)((function(){return t.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition"}));return function(t,a){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,["button"==e.as?((0,n.openBlock)(),(0,n.createElementBlock)("button",{key:0,class:(0,n.normalizeClass)([(0,n.unref)(r),"w-full text-left"])},[(0,n.renderSlot)(t.$slots,"default")],2)):((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(o.rU),{key:1,href:e.href,class:(0,n.normalizeClass)((0,n.unref)(r))},{default:(0,n.withCtx)((function(){return[(0,n.renderSlot)(t.$slots,"default")]})),_:3},8,["href","class"]))])}}}},6126:(e,t,r)=>{r.d(t,{Z:()=>ke});var n=r(821),o=r(9680),a=r(9038),l={class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",alt:"Workflow"};const c={},s=(0,r(3744).Z)(c,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("img",l)}]]);var i={class:"relative"};const u={props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:function(){return["py-1","bg-white"]}}},setup:function(e){var t=e,r=(0,n.ref)(!1),o=function(e){r.value&&"Escape"===e.key&&(r.value=!1)};(0,n.onMounted)((function(){return document.addEventListener("keydown",o)})),(0,n.onUnmounted)((function(){return document.removeEventListener("keydown",o)}));var a=(0,n.computed)((function(){return{48:"w-48"}[t.width.toString()]})),l=(0,n.computed)((function(){return"left"===t.align?"origin-top-left left-0":"right"===t.align?"origin-top-right right-0":"origin-top"}));return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("div",i,[(0,n.createElementVNode)("div",{onClick:o[0]||(o[0]=function(e){return(0,n.isRef)(r)?r.value=!(0,n.unref)(r):r=!(0,n.unref)(r)})},[(0,n.renderSlot)(t.$slots,"trigger")]),(0,n.withDirectives)((0,n.createElementVNode)("div",{class:"fixed inset-0 z-40",onClick:o[1]||(o[1]=function(e){return(0,n.isRef)(r)?r.value=!1:r=!1})},null,512),[[n.vShow,(0,n.unref)(r)]]),(0,n.createVNode)(n.Transition,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["absolute z-50 mt-2 rounded-md shadow-lg",[(0,n.unref)(a),(0,n.unref)(l)]]),style:{display:"none"},onClick:o[2]||(o[2]=function(e){return(0,n.isRef)(r)?r.value=!1:r=!1})},[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["rounded-md ring-1 ring-black ring-opacity-5",e.contentClasses])},[(0,n.renderSlot)(t.$slots,"content")],2)],2),[[n.vShow,(0,n.unref)(r)]])]})),_:3})])}}};var d={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},f=["href"];const p={props:{href:String,as:String},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,["button"==e.as?((0,n.openBlock)(),(0,n.createElementBlock)("button",d,[(0,n.renderSlot)(t.$slots,"default")])):"a"==e.as?((0,n.openBlock)(),(0,n.createElementBlock)("a",{key:1,href:e.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[(0,n.renderSlot)(t.$slots,"default")],8,f)):((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(a.rU),{key:2,href:e.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:(0,n.withCtx)((function(){return[(0,n.renderSlot)(t.$slots,"default")]})),_:3},8,["href"]))])}}},m={props:{href:String,active:Boolean},setup:function(e){var t=e,r=(0,n.computed)((function(){return t.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition"}));return function(t,o){return(0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(a.rU),{href:e.href,class:(0,n.normalizeClass)((0,n.unref)(r))},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("span",null,[(0,n.renderSlot)(t.$slots,"default")])]})),_:3},8,["href","class"])}}};var g=r(9587),h=r(9184),v={class:"min-h-screen bg-gray-50"},x={class:"bg-white border-b"},k={class:"flex justify-between h-16"},w={class:"flex"},y={class:"shrink-0 flex items-center"},b={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},N=(0,n.createTextVNode)(" Последнее "),V=(0,n.createTextVNode)(" Популярное "),E=(0,n.createTextVNode)(" Закладки "),B=(0,n.createTextVNode)(" История "),C={class:"hidden sm:flex sm:items-center sm:ml-6"},_={class:"ml-3 relative"},S=["src"],$={class:"ml-3"},Z={class:"ml-3 relative"},T={type:"button",class:"inline-flex items-center border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},j=["src","alt"],z=(0,n.createElementVNode)("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Управление аккаунтом ",-1),M=(0,n.createTextVNode)(" Мастерская "),D=(0,n.createTextVNode)(" Настройки "),P=(0,n.createTextVNode)(" API Tokens "),F=(0,n.createElementVNode)("div",{class:"border-t border-gray-100"},null,-1),L=["onSubmit"],A=(0,n.createTextVNode)(" Выход "),I={class:"-mr-2 flex items-center sm:hidden"},O={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},R={class:"pt-2 pb-3 space-y-1"},U=(0,n.createTextVNode)(" Последнее "),W=(0,n.createTextVNode)(" Популярное "),q=(0,n.createTextVNode)(" Закладки "),G=(0,n.createTextVNode)(" История "),H={class:"pt-4 pb-1 border-t border-gray-200"},J={class:"flex items-center px-4"},K={key:0,class:"shrink-0 mr-3"},Q=["src","alt"],X={class:"font-medium text-base text-gray-800"},Y={class:"font-medium text-sm text-gray-500"},ee={class:"mt-3 space-y-1"},te=(0,n.createTextVNode)(" Мастерская "),re=(0,n.createTextVNode)(" Настройка "),ne=(0,n.createTextVNode)(" API Tokens "),oe=["onSubmit"],ae=(0,n.createTextVNode)(" Выход "),le=(0,n.createElementVNode)("div",{class:"border-t border-gray-200"},null,-1),ce=(0,n.createElementVNode)("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),se=(0,n.createTextVNode)(" Team Settings "),ie=(0,n.createTextVNode)(" Create New Team "),ue=(0,n.createElementVNode)("div",{class:"border-t border-gray-200"},null,-1),de=(0,n.createElementVNode)("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),fe=["onSubmit"],pe={class:"flex items-center"},me={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},ge=[(0,n.createElementVNode)("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)],he={key:0,class:"bg-white shadow"},ve={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},xe={class:"py-6"};const ke={props:{title:String},setup:function(e){var t=(0,n.ref)(!1),r=function(){o.Inertia.post(route("logout"))};return function(e,l){var c=(0,n.resolveComponent)("BellIcon");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("div",v,[(0,n.createElementVNode)("nav",x,[(0,n.createVNode)(h.Z,null,{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",k,[(0,n.createElementVNode)("div",w,[(0,n.createElementVNode)("div",y,[(0,n.createVNode)((0,n.unref)(a.rU),{href:e.route("posts.latest")},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(s,{class:"block h-9 w-auto"})]})),_:1},8,["href"])]),(0,n.createElementVNode)("div",b,[(0,n.createVNode)(m,{href:e.route("posts.latest"),active:e.route().current("posts.latest")},{default:(0,n.withCtx)((function(){return[N]})),_:1},8,["href","active"]),(0,n.createVNode)(m,{href:e.route("posts.popular"),active:e.route().current("posts.popular")},{default:(0,n.withCtx)((function(){return[V]})),_:1},8,["href","active"]),(0,n.createVNode)(m,{href:e.route("posts.favourite"),active:e.route().current("posts.favourite")},{default:(0,n.withCtx)((function(){return[E]})),_:1},8,["href","active"]),(0,n.createVNode)(m,{href:e.route("posts.recent"),active:e.route().current("posts.recent")},{default:(0,n.withCtx)((function(){return[B]})),_:1},8,["href","active"])])]),(0,n.createElementVNode)("div",C,[(0,n.createElementVNode)("div",_,[e.$page.props.jetstream.hasTeamFeatures?((0,n.openBlock)(),(0,n.createBlock)(u,{key:0,align:"right",width:"60"},{trigger:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("img",{class:"h-8 w-8 rounded-full",src:e.$page.props.user.current_team.profile_photo_url,alt:""},null,8,S)]})),_:1})):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("button",$,[(0,n.createVNode)(c,{class:"text-gray-500","stroke-width":"1.7"})]),(0,n.createElementVNode)("div",Z,[(0,n.createVNode)(u,{align:"right",width:"48"},{trigger:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("button",T,[(0,n.createElementVNode)("img",{class:"h-10 w-10 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,j)])]})),content:(0,n.withCtx)((function(){return[z,(0,n.createVNode)(p,{href:e.route("user.posts")},{default:(0,n.withCtx)((function(){return[M]})),_:1},8,["href"]),(0,n.createVNode)(p,{href:e.route("profile.show")},{default:(0,n.withCtx)((function(){return[D]})),_:1},8,["href"]),e.$page.props.jetstream.hasApiFeatures?((0,n.openBlock)(),(0,n.createBlock)(p,{key:0,href:e.route("api-tokens.index")},{default:(0,n.withCtx)((function(){return[P]})),_:1},8,["href"])):(0,n.createCommentVNode)("",!0),F,(0,n.createElementVNode)("form",{onSubmit:(0,n.withModifiers)(r,["prevent"])},[(0,n.createVNode)(p,{as:"button"},{default:(0,n.withCtx)((function(){return[A]})),_:1})],40,L)]})),_:1})])]),(0,n.createElementVNode)("div",I,[(0,n.createElementVNode)("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:l[0]||(l[0]=function(e){return t.value=!t.value})},[((0,n.openBlock)(),(0,n.createElementBlock)("svg",O,[(0,n.createElementVNode)("path",{class:(0,n.normalizeClass)({hidden:t.value,"inline-flex":!t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),(0,n.createElementVNode)("path",{class:(0,n.normalizeClass)({hidden:!t.value,"inline-flex":t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]})),_:1}),(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)([{block:t.value,hidden:!t.value},"sm:hidden"])},[(0,n.createElementVNode)("div",R,[(0,n.createVNode)(g.Z,{href:e.route("posts.latest"),active:e.route().current("posts.latest")},{default:(0,n.withCtx)((function(){return[U]})),_:1},8,["href","active"]),(0,n.createVNode)(g.Z,{href:e.route("posts.popular"),active:e.route().current("posts.popular")},{default:(0,n.withCtx)((function(){return[W]})),_:1},8,["href","active"]),(0,n.createVNode)(g.Z,{href:e.route("posts.favourite"),active:e.route().current("posts.favourite")},{default:(0,n.withCtx)((function(){return[q]})),_:1},8,["href","active"]),(0,n.createVNode)(g.Z,{href:e.route("posts.recent"),active:e.route().current("posts.recent")},{default:(0,n.withCtx)((function(){return[G]})),_:1},8,["href","active"])]),(0,n.createElementVNode)("div",H,[(0,n.createElementVNode)("div",J,[e.$page.props.jetstream.managesProfilePhotos?((0,n.openBlock)(),(0,n.createElementBlock)("div",K,[(0,n.createElementVNode)("img",{class:"h-10 w-10 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,Q)])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("div",X,(0,n.toDisplayString)(e.$page.props.user.name),1),(0,n.createElementVNode)("div",Y,(0,n.toDisplayString)(e.$page.props.user.email),1)])]),(0,n.createElementVNode)("div",ee,[(0,n.createVNode)(g.Z,{href:e.route("user.posts"),active:e.route().current("user.posts")},{default:(0,n.withCtx)((function(){return[te]})),_:1},8,["href","active"]),(0,n.createVNode)(g.Z,{href:e.route("profile.show"),active:e.route().current("profile.show")},{default:(0,n.withCtx)((function(){return[re]})),_:1},8,["href","active"]),e.$page.props.jetstream.hasApiFeatures?((0,n.openBlock)(),(0,n.createBlock)(g.Z,{key:0,href:e.route("api-tokens.index"),active:e.route().current("api-tokens.index")},{default:(0,n.withCtx)((function(){return[ne]})),_:1},8,["href","active"])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("form",{method:"POST",onSubmit:(0,n.withModifiers)(r,["prevent"])},[(0,n.createVNode)(g.Z,{as:"button"},{default:(0,n.withCtx)((function(){return[ae]})),_:1})],40,oe),e.$page.props.jetstream.hasTeamFeatures?((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,{key:1},[le,ce,(0,n.createVNode)(g.Z,{href:e.route("teams.show",e.$page.props.user.current_team),active:e.route().current("teams.show")},{default:(0,n.withCtx)((function(){return[se]})),_:1},8,["href","active"]),e.$page.props.jetstream.canCreateTeams?((0,n.openBlock)(),(0,n.createBlock)(g.Z,{key:0,href:e.route("teams.create"),active:e.route().current("teams.create")},{default:(0,n.withCtx)((function(){return[ie]})),_:1},8,["href","active"])):(0,n.createCommentVNode)("",!0),ue,de,((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.$page.props.user.all_teams,(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("form",{key:t.id,onSubmit:(0,n.withModifiers)((function(e){return function(e){o.Inertia.put(route("current-team.update"),{team_id:e.id},{preserveState:!1})}(t)}),["prevent"])},[(0,n.createVNode)(g.Z,{as:"button"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",pe,[t.id==e.$page.props.user.current_team_id?((0,n.openBlock)(),(0,n.createElementBlock)("svg",me,ge)):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("div",null,(0,n.toDisplayString)(t.name),1)])]})),_:2},1024)],40,fe)})),128))],64)):(0,n.createCommentVNode)("",!0)])])],2)]),e.$slots.header?((0,n.openBlock)(),(0,n.createElementBlock)("header",he,[(0,n.createElementVNode)("div",ve,[(0,n.renderSlot)(e.$slots,"header")])])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("main",xe,[(0,n.createVNode)(h.Z,null,{default:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"default")]})),_:3})])])])}}}},3462:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n=r(821),o=r(7684),a=r(5643),l={class:"flex items-center"},c=["src","alt"],s={class:"ml-3"};const i={props:{user:Object},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.createElementVNode)("img",{class:"h-8 w-8 rounded-full",src:e.user.profile_photo_url,alt:e.user.name},null,8,c),(0,n.createElementVNode)("div",s,(0,n.toDisplayString)(e.user.name),1)])}}};var u=r(7258),d=r(7757),f=r.n(d),p=r(9669),m=r.n(p);function g(e,t,r,n,o,a,l){try{var c=e[a](l),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}const h={props:{user:Object,has_followed:Boolean},setup:function(e){var t=e,r=function(){var e,r=(e=f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m().post("/follows/".concat(t.user.id));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function l(e){g(a,n,o,l,c,"next",e)}function c(e){g(a,n,o,l,c,"throw",e)}l(void 0)}))});return function(){return r.apply(this,arguments)}}();return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{onClick:r,class:(0,n.normalizeClass)([[e.has_followed?"bg-gray-100 text-gray-700 hover:bg-gray-200":"bg-indigo-50 text-indigo-700 hover:bg-indigo-100"],"inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"]),type:"button"},[(0,n.createElementVNode)("span",null,(0,n.toDisplayString)(e.has_followed?"Отписаться":"Подписаться"),1)],2)}}},v={props:{followings:Object},setup:function(e){var t=[{label:"Пользователь",prop:"name"},{label:"Почта",prop:"email"},{label:"Дата регистрации",prop:"created_at"},{label:"",prop:"id"}];return function(r,l){return(0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(o.default),{title:"Список подписок",subtitle:"Эта информация будет отображаться публично, поэтому будьте осторожны с тем, что вы делитесь."},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(a.Z),{columns:t,data:e.followings},{name:(0,n.withCtx)((function(e){var t=e.row;return[(0,n.createVNode)((0,n.unref)(i),{user:t},null,8,["user"])]})),created_at:(0,n.withCtx)((function(e){var t=e.row;return[(0,n.createVNode)((0,n.unref)(u.Z),{date:t.created_at},null,8,["date"])]})),id:(0,n.withCtx)((function(e){var t=e.row;return[(0,n.createVNode)((0,n.unref)(h),{user:t,has_followed:""},null,8,["user"])]})),_:1},8,["data"])]})),_:1})}}}},7684:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n=r(821),o=r(6126),a=r(9587),l={class:"flex items-center justify-between space-x-2"},c={class:"text-xl font-semibold text-gray-900"},s={class:"mt-1 max-w-2xl text-sm text-gray-500"};const i={props:{title:String,subtitle:String},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("div",c,(0,n.toDisplayString)(e.title),1),(0,n.createElementVNode)("div",s,(0,n.toDisplayString)(e.subtitle),1)]),(0,n.renderSlot)(t.$slots,"default")])}}};var u={class:"grid grid-cols-12 gap-6"},d={class:"col-span-2"},f=(0,n.createElementVNode)("span",{class:"text-sm"},"Статьи",-1),p=(0,n.createElementVNode)("span",{class:"text-sm"},"Коментарии",-1),m=(0,n.createElementVNode)("span",{class:"text-sm"},"Статистика",-1),g=(0,n.createElementVNode)("span",{class:"text-sm"},"Подписки",-1),h=(0,n.createElementVNode)("span",{class:"text-sm"},"Подписчики",-1),v=(0,n.createElementVNode)("span",{class:"text-sm"},"Черный список",-1),x={class:"col-span-10"},k={class:"bg-white border rounded-md p-6"},w={class:"mt-8"};const y={props:{title:String,subtitle:String},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createBlock)(o.Z,null,{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",u,[(0,n.createElementVNode)("div",d,[(0,n.createVNode)(a.Z,{href:t.route("user.posts"),active:t.route().current("user.posts")},{default:(0,n.withCtx)((function(){return[f]})),_:1},8,["href","active"]),(0,n.createVNode)(a.Z,{href:t.route("user.comments"),active:t.route().current("user.comments")},{default:(0,n.withCtx)((function(){return[p]})),_:1},8,["href","active"]),(0,n.createVNode)(a.Z,{href:t.route("user.statistics"),active:t.route().current("user.statistics")},{default:(0,n.withCtx)((function(){return[m]})),_:1},8,["href","active"]),(0,n.createVNode)(a.Z,{href:t.route("user.followings"),active:t.route().current("user.followings")},{default:(0,n.withCtx)((function(){return[g]})),_:1},8,["href","active"]),(0,n.createVNode)(a.Z,{href:t.route("user.followers"),active:t.route().current("user.followers")},{default:(0,n.withCtx)((function(){return[h]})),_:1},8,["href","active"]),(0,n.createVNode)(a.Z,{href:t.route("user.black-list"),active:t.route().current("user.black-list")},{default:(0,n.withCtx)((function(){return[v]})),_:1},8,["href","active"])]),(0,n.createElementVNode)("div",x,[(0,n.createElementVNode)("div",k,[(0,n.createElementVNode)("div",null,[(0,n.createVNode)((0,n.unref)(i),{title:e.title,subtitle:e.subtitle},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",null,[(0,n.renderSlot)(t.$slots,"title")])]})),_:3},8,["title","subtitle"])]),(0,n.createElementVNode)("div",w,[(0,n.renderSlot)(t.$slots,"default")])])])])]})),_:3})}}}}}]);