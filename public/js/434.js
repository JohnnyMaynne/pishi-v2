"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[434],{7041:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(821),r=["type"];const l={props:{type:{type:String,default:"submit"}},setup:function(e){return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[(0,n.renderSlot)(t.$slots,"default")],8,r)}}}},7100:(e,t,o)=>{o.d(t,{Z:()=>u});var n=o(821),r=o(312),l={class:"px-6 py-4"},a={class:"text-lg"},s={class:"mt-4"},c={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"};const u={props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup:function(e,t){var o=t.emit,u=function(){o("close")};return function(t,o){return(0,n.openBlock)(),(0,n.createBlock)(r.Z,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:u},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("div",a,[(0,n.renderSlot)(t.$slots,"title")]),(0,n.createElementVNode)("div",s,[(0,n.renderSlot)(t.$slots,"content")])]),(0,n.createElementVNode)("div",c,[(0,n.renderSlot)(t.$slots,"footer")])]})),_:3},8,["show","max-width","closeable"])}}}},1959:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(821),r=["value"];const l={props:{modelValue:String},emits:["update:modelValue"],setup:function(e,t){var o=t.expose,l=(0,n.ref)(null);return(0,n.onMounted)((function(){l.value.hasAttribute("autofocus")&&l.value.focus()})),o({focus:function(){return l.value.focus()}}),function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("input",{ref_key:"input",ref:l,class:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",value:e.modelValue,onInput:o[0]||(o[0]=function(e){return t.$emit("update:modelValue",e.target.value)})},null,40,r)}}}},7088:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(821),r={class:"block text-sm font-medium text-gray-700 mb-1"},l={key:0},a={key:1};const s={props:{value:String},setup:function(e){return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("label",r,[e.value?((0,n.openBlock)(),(0,n.createElementBlock)("span",l,(0,n.toDisplayString)(e.value),1)):((0,n.openBlock)(),(0,n.createElementBlock)("span",a,[(0,n.renderSlot)(t.$slots,"default")]))])}}}},312:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(821),r={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},l=[(0,n.createElementVNode)("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1)];const a={props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup:function(e,t){var o=t.emit,a=e;(0,n.watch)((function(){return a.show}),(function(){a.show?document.body.style.overflow="hidden":document.body.style.overflow=null}));var s=function(){a.closeable&&o("close")},c=function(e){"Escape"===e.key&&a.show&&s()};(0,n.onMounted)((function(){return document.addEventListener("keydown",c)})),(0,n.onUnmounted)((function(){document.removeEventListener("keydown",c),document.body.style.overflow=null}));var u=(0,n.computed)((function(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[a.maxWidth]}));return function(t,o){return(0,n.openBlock)(),(0,n.createBlock)(n.Teleport,{to:"body"},[(0,n.createVNode)(n.Transition,{"leave-active-class":"duration-200"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",r,[(0,n.createVNode)(n.Transition,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",{class:"fixed inset-0 transform transition-all",onClick:s},l,512),[[n.vShow,e.show]])]})),_:1}),(0,n.createVNode)(n.Transition,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",(0,n.unref)(u)])},[e.show?(0,n.renderSlot)(t.$slots,"default",{key:0}):(0,n.createCommentVNode)("",!0)],2),[[n.vShow,e.show]])]})),_:3})],512),[[n.vShow,e.show]])]})),_:3})])}}}},2575:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(821),r=["type"];const l={props:{type:{type:String,default:"button"}},setup:function(e){return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition"},[(0,n.renderSlot)(t.$slots,"default")],8,r)}}}},4434:(e,t,o)=>{o.r(t),o.d(t,{default:()=>y});var n=o(821),r=o(7100),l=o(1959),a=o(7088),s=o(7041),c=o(2575),u=(0,n.createTextVNode)(" Создать новую статью "),i={class:"grid grid-cols-1 gap-4"},d=(0,n.createTextVNode)("Название статьи"),f=(0,n.createTextVNode)("Категория"),m=(0,n.createTextVNode)(" Отмена "),p=(0,n.createTextVNode)(" Создать ");const y={setup:function(e){return function(e,t){return(0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(r.Z),{show:""},{title:(0,n.withCtx)((function(){return[u]})),content:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",null,[(0,n.createVNode)((0,n.unref)(a.Z),null,{default:(0,n.withCtx)((function(){return[d]})),_:1}),(0,n.createVNode)((0,n.unref)(l.Z),{type:"text"})]),(0,n.createElementVNode)("div",null,[(0,n.createVNode)((0,n.unref)(a.Z),null,{default:(0,n.withCtx)((function(){return[f]})),_:1}),(0,n.createVNode)((0,n.unref)(l.Z),{type:"text"})])])]})),footer:(0,n.withCtx)((function(){return[(0,n.createVNode)(c.Z,null,{default:(0,n.withCtx)((function(){return[m]})),_:1}),(0,n.createVNode)(s.Z,{class:"ml-3"},{default:(0,n.withCtx)((function(){return[p]})),_:1})]})),_:1})}}}}}]);