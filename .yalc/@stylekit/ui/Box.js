!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("styled-is"),require("styled-components"),require("@styled-system/prop-types"),require("styled-system"),require("react")):"function"==typeof define&&define.amd?define("@stylekit/ui",["prop-types","styled-is","styled-components","@styled-system/prop-types","styled-system","react"],t):"object"==typeof exports?exports["@stylekit/ui"]=t(require("prop-types"),require("styled-is"),require("styled-components"),require("@styled-system/prop-types"),require("styled-system"),require("react")):e["@stylekit/ui"]=t(e["prop-types"],e["styled-is"],e["styled-components"],e["@styled-system/prop-types"],e["styled-system"],e.react)}(this,(function(e,t,r,n,o,i){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/lib/dist/",r(r.s=6)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t,r){"use strict";r.r(t);var n=r(5),o=r.n(n),i=r(0),u=r.n(i),c=r(2),s=r.n(c),l=r(1),p=r.n(l),f=r(3),a=r.n(f),y=r(4);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function j(){var e=P(["\n    display: flex;\n    justify-content: center;\n  "]);return j=function(){return e},e}function v(){var e=P(["\n    display: flex;\n    align-items: center;\n  "]);return v=function(){return e},e}function x(){var e=P(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "]);return x=function(){return e},e}function g(){var e=P(["\n  box-sizing: border-box;\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  ",";\n\n  ",";\n\n  ",";\n"]);return g=function(){return e},e}function P(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var h=["children","data-testid","className"],w=s.a.div.withConfig({shouldForwardProp:function(e){return h.includes(e)}})(g(),y.space,y.layout,y.color,y.flexbox,y.background,y.border,p()("centered")(x()),p()("vCentered")(v()),p()("hCentered")(j())),q=function(e){var t=e.children,r=m(e,["children"]);return o.a.createElement(w,r,t)};q.displayName="Box",q.propTypes=b(b(b(b(b(b(b({},a.a.space),a.a.layout),a.a.color),a.a.flexbox),a.a.background),a.a.border),{},{centered:u.a.bool,vCentered:u.a.bool,hCentered:u.a.bool}),q.defaultProps={centered:!1,vCentered:!1,hCentered:!1},t.default=q}])}));