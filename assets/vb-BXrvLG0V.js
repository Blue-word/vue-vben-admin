import{b as U}from"./antd-BmrhB3rb.js";import{r as $}from"./index-DUNswd9P.js";function J(a,s){for(var o=0;o<s.length;o++){const c=s[o];if(typeof c!="string"&&!Array.isArray(c)){for(const d in c)if(d!=="default"&&!(d in a)){const u=Object.getOwnPropertyDescriptor(c,d);u&&Object.defineProperty(a,d,u.get?u:{enumerable:!0,get:()=>c[d]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var M={exports:{}};(function(a,s){(function(o){o($())})(function(o){o.defineMode("vb",function(c,d){var u="error";function l(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var E=new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]"),R=new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),z=new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),C=new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),S=new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))"),_=new RegExp("^[_A-Za-z][_A-Za-z0-9]*"),h=["class","module","sub","enum","select","while","if","function","get","set","property","try","structure","synclock","using","with"],g=["else","elseif","case","catch","finally"],y=["next","loop"],b=["and","andalso","or","orelse","xor","in","not","is","isnot","like"],j=l(b),w=["#const","#else","#elseif","#end","#if","#region","addhandler","addressof","alias","as","byref","byval","cbool","cbyte","cchar","cdate","cdbl","cdec","cint","clng","cobj","compare","const","continue","csbyte","cshort","csng","cstr","cuint","culng","cushort","declare","default","delegate","dim","directcast","each","erase","error","event","exit","explicit","false","for","friend","gettype","goto","handles","implements","imports","infer","inherits","interface","isfalse","istrue","lib","me","mod","mustinherit","mustoverride","my","mybase","myclass","namespace","narrowing","new","nothing","notinheritable","notoverridable","of","off","on","operator","option","optional","out","overloads","overridable","overrides","paramarray","partial","private","protected","public","raiseevent","readonly","redim","removehandler","resume","return","shadows","shared","static","step","stop","strict","then","throw","to","true","trycast","typeof","until","until","when","widening","withevents","writeonly"],x=["object","boolean","char","string","byte","sbyte","short","ushort","int16","uint16","integer","uinteger","int32","uint32","long","ulong","int64","uint64","decimal","single","double","float","date","datetime","intptr","uintptr"],F=l(w),T=l(x),A='"',D=l(h),m=l(g),k=l(y),I=l(["end"]),L=l(["do"]);o.registerHelper("hintWords","vb",h.concat(g).concat(y).concat(b).concat(w).concat(x));function p(e,n){n.currentIndent++}function f(e,n){n.currentIndent--}function v(e,n){if(e.eatSpace())return null;var r=e.peek();if(r==="'")return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.a-f]/i,!1)){var t=!1;if((e.match(/^\d*\.\d+F?/i)||e.match(/^\d+\.\d*F?/)||e.match(/^\.\d+F?/))&&(t=!0),t)return e.eat(/J/i),"number";var i=!1;if(e.match(/^&H[0-9a-f]+/i)||e.match(/^&O[0-7]+/i)?i=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),i=!0):e.match(/^0(?![\dx])/i)&&(i=!0),i)return e.eat(/L/i),"number"}return e.match(A)?(n.tokenize=K(e.current()),n.tokenize(e,n)):e.match(S)||e.match(C)?null:e.match(z)||e.match(E)||e.match(j)?"operator":e.match(R)?null:e.match(L)?(p(e,n),n.doInCurrentLine=!0,"keyword"):e.match(D)?(n.doInCurrentLine?n.doInCurrentLine=!1:p(e,n),"keyword"):e.match(m)?"keyword":e.match(I)?(f(e,n),f(e,n),"keyword"):e.match(k)?(f(e,n),"keyword"):e.match(T)||e.match(F)?"keyword":e.match(_)?"variable":(e.next(),u)}function K(e){var n=e.length==1,r="string";return function(t,i){for(;!t.eol();){if(t.eatWhile(/[^'"]/),t.match(e))return i.tokenize=v,r;t.eat(/['"]/)}if(n){if(d.singleLineStringErrors)return u;i.tokenize=v}return r}}function P(e,n){var r=n.tokenize(e,n),t=e.current();if(t===".")return r=n.tokenize(e,n),r==="variable"?"variable":u;var i="[({".indexOf(t);return i!==-1&&p(e,n),i="])}".indexOf(t),i!==-1&&f(e,n)?u:r}var H={electricChars:"dDpPtTfFeE ",startState:function(){return{tokenize:v,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1}},token:function(e,n){e.sol()&&(n.currentIndent+=n.nextLineIndent,n.nextLineIndent=0,n.doInCurrentLine=0);var r=P(e,n);return n.lastToken={style:r,content:e.current()},r},indent:function(e,n){var r=n.replace(/^\s+|\s+$/g,"");return r.match(k)||r.match(I)||r.match(m)?c.indentUnit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*c.indentUnit},lineComment:"'"};return H}),o.defineMIME("text/x-vb","vb")})})();var O=M.exports;const W=U(O),B=J({__proto__:null,default:W},[O]);export{B as v};
