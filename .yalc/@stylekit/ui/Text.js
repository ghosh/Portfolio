!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("styled-components"),require("@styled-system/prop-types"),require("styled-system"),require("react")):"function"==typeof define&&define.amd?define("@stylekit/ui",["styled-components","@styled-system/prop-types","styled-system","react"],t):"object"==typeof exports?exports["@stylekit/ui"]=t(require("styled-components"),require("@styled-system/prop-types"),require("styled-system"),require("react")):e["@stylekit/ui"]=t(e["styled-components"],e["@styled-system/prop-types"],e["styled-system"],e.react)}(this,(function(e,t,r,n){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/lib/dist/",r(r.s=11)}([,,function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},,,,,,function(e,t,r){"use strict";r.r(t);var n=r(5),o=r.n(n),u=r(2),i=r.n(u),c=r(3),s=r.n(c),l=r(4);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function d(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  box-sizing: border-box;\n\n  ","\n  ","\n  ","\n  ","\n"]);return d=function(){return e},e}var b=["children","data-testid","className"],O=i.a.p.withConfig({shouldForwardProp:function(e){return b.includes(e)}})(d(),l.space,l.color,l.typography,l.layout),m=function(e){var t=e.children,r=a(e,["children"]);return o.a.createElement(O,r,t)};m.propTypes=f(f(f(f({},s.a.space),s.a.typography),s.a.layout),s.a.color),t.default=m}])}));