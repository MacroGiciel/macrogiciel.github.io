(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[170],{4359:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/modules",function(){return s(6519)}])},6519:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var n=s(1844),r=s(9008),i=s.n(r),c=s(5784);function l(){let[e,t]=(0,c.useState)([]);(0,c.useEffect)(()=>{s()},[]);let s=async()=>{try{let e=await fetch("https://raw.githubusercontent.com/MacroGiciel/Extensions/main/list.json"),s=await e.json();t(Object.values(s))}catch(e){console.error("Error fetching module list:",e)}};return(0,n.jsxs)("div",{className:"bg-gray-900 text-white",children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"Macrogiciel - Module List"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css"})]}),(0,n.jsx)("header",{className:"bg-purple-900 text-white py-4",children:(0,n.jsx)("div",{className:"container mx-auto flex justify-between items-center px-4",children:(0,n.jsx)("a",{href:"/",className:"text-xl font-bold",children:"Macrogiciel"})})}),(0,n.jsx)("section",{className:"py-10",children:(0,n.jsxs)("div",{className:"container mx-auto",children:[(0,n.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Module List"}),0===e.length?(0,n.jsx)("p",{children:"Loading..."}):(0,n.jsx)("ul",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",children:e.map(e=>(0,n.jsxs)("li",{className:"bg-gray-800 p-4 rounded-lg",children:[(0,n.jsx)("div",{className:"flex items-center justify-center mb-4",children:(0,n.jsx)("img",{src:"https://github.com/MacroGiciel/Extensions/raw/main/icons/".concat(e.package,".png"),alt:"".concat(e.name," Logo"),className:"h-12 w-12"})}),(0,n.jsx)("h3",{className:"text-xl font-bold mb-2",children:e.name}),(0,n.jsx)("p",{children:e.description}),(0,n.jsx)("div",{className:"mt-4",children:(0,n.jsx)("a",{href:"https://github.com/MacroGiciel/Extensions/blob/main/modules/".concat(e.package,".asar"),className:"bg-purple-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-purple-600 transition-colors",download:!0,children:"Download"})})]},e.package))})]})}),(0,n.jsx)("footer",{className:"bg-purple-800 text-white py-4",children:(0,n.jsxs)("div",{className:"container mx-auto text-center",children:[(0,n.jsxs)("p",{children:["Macrogiciel \xa9 ",new Date().getFullYear()," Tai Studio. All rights reserved."]}),(0,n.jsx)("p",{children:"Contact: macrogiciel@outlook.fr"})]})})]})}},9803:function(e,t,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=s(5784),r=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,s){var n,a={},o=null,d=null;for(n in void 0!==s&&(o=""+s),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:r,type:e,key:o,ref:d,props:a,_owner:c.current}}t.jsx=a,t.jsxs=a},1844:function(e,t,s){"use strict";e.exports=s(9803)},9008:function(e,t,s){e.exports=s(8316)}},function(e){e.O(0,[888,179],function(){return e(e.s=4359)}),_N_E=e.O()}]);