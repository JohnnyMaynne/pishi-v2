"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[754],{7041:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(821),n=["type"];const l={props:{type:{type:String,default:"submit"}},setup:function(e){return function(t,r){return(0,s.openBlock)(),(0,s.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[(0,s.renderSlot)(t.$slots,"default")],8,n)}}}},1754:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var s=r(821),n=r(7041),l=r(9038),o={class:"md:flex md:items-center md:justify-between md:space-x-5"},a={class:"flex items-center space-x-5"},c={class:"flex-shrink-0"},d={class:"relative"},u=["src","alt"],i=(0,s.createElementVNode)("span",{class:"absolute inset-0 shadow-inner rounded-full","aria-hidden":"true"},null,-1),m=(0,s.createElementVNode)("p",{class:"text-sm font-medium text-gray-500"},[(0,s.createTextVNode)("Дата регистрации профиля "),(0,s.createElementVNode)("time",{datetime:"2020-08-25"},"Август 25, 2020")],-1),f={class:"mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"},p=(0,s.createTextVNode)("Подписаться");const x={props:{user:Object},setup:function(e){return function(t,r){return(0,s.openBlock)(),(0,s.createElementBlock)("div",o,[(0,s.createElementVNode)("div",a,[(0,s.createElementVNode)("div",c,[(0,s.createElementVNode)("div",d,[(0,s.createElementVNode)("img",{class:"h-16 w-16 rounded-full",src:e.user.profile_photo_url,alt:e.user.name},null,8,u),i])]),(0,s.createElementVNode)("div",null,[(0,s.createVNode)((0,s.unref)(l.rU),{href:t.route("user.show",{user:e.user.slug}),class:"hover:underline underline-offset-2 decoration-gray-300 transition text-2xl font-bold text-gray-900"},{default:(0,s.withCtx)((function(){return[(0,s.createTextVNode)((0,s.toDisplayString)(e.user.name),1)]})),_:1},8,["href"]),m])]),(0,s.createElementVNode)("div",f,[(0,s.createVNode)(n.Z,null,{default:(0,s.withCtx)((function(){return[p]})),_:1})])])}}}}}]);