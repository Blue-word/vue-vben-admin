import{b as c}from"./antd-BmrhB3rb.js";import{r as l}from"./index-DUNswd9P.js";import{r}from"./htmlmixed-DNU5-SOn.js";import{r as s}from"./multiplex-sulCxN_z.js";function a(o,d){for(var e=0;e<d.length;e++){const m=d[e];if(typeof m!="string"&&!Array.isArray(m)){for(const t in m)if(t!=="default"&&!(t in o)){const n=Object.getOwnPropertyDescriptor(m,t);n&&Object.defineProperty(o,t,n.get?n:{enumerable:!0,get:()=>m[t]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var u={exports:{}};(function(o,d){(function(e){e(l(),r(),s())})(function(e){e.defineMode("htmlembedded",function(m,t){var n=t.closeComment||"--%>";return e.multiplexingMode(e.getMode(m,"htmlmixed"),{open:t.openComment||"<%--",close:n,delimStyle:"comment",mode:{token:function(i){return i.skipTo(n)||i.skipToEnd(),"comment"}}},{open:t.open||t.scriptStartRegex||"<%",close:t.close||t.scriptEndRegex||"%>",mode:e.getMode(m,t.scriptingModeSpec)})},"htmlmixed"),e.defineMIME("application/x-ejs",{name:"htmlembedded",scriptingModeSpec:"javascript"}),e.defineMIME("application/x-aspx",{name:"htmlembedded",scriptingModeSpec:"text/x-csharp"}),e.defineMIME("application/x-jsp",{name:"htmlembedded",scriptingModeSpec:"text/x-java"}),e.defineMIME("application/x-erb",{name:"htmlembedded",scriptingModeSpec:"ruby"})})})();var p=u.exports;const x=c(p),M=a({__proto__:null,default:x},[p]);export{M as h};
