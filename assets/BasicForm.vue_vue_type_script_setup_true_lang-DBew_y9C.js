var He=Object.defineProperty;var be=Object.getOwnPropertySymbols;var We=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable;var Ve=(s,c,a)=>c in s?He(s,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[c]=a,L=(s,c)=>{for(var a in c||(c={}))We.call(c,a)&&Ve(s,a,c[a]);if(be)for(var a of be(c))Ye.call(c,a)&&Ve(s,a,c[a]);return s};var x=(s,c,a)=>new Promise((o,g)=>{var y=u=>{try{b(a.next(u))}catch(f){g(f)}},d=u=>{try{b(a.throw(u))}catch(f){g(f)}},b=u=>u.done?o(u.value):Promise.resolve(u.value).then(y,d);b((a=a.apply(s,c)).next())});import{u as n,g as Xe,c as q,w as ae,an as ke,y as ye,J as we,h as qe,d as Ge,K as Je,r as Ie,f as se,o as ze,Z as pe,a8 as Te,a9 as ue,k as Be,ae as le,_ as Ze,aa as he,ad as De,ac as me,F as Qe,aj as Ee,ak as Oe,al as Me}from"./vue-BjERyvPm.js";import{_ as et}from"./FormItem.vue_vue_type_script_lang-ChwIMvlA.js";import{b as tt,c as nt,_ as st}from"./BasicForm.vue_vue_type_style_index_0_lang-DdfZ7XXe.js";import{u as at,i as fe,d as $e,a as it}from"./helper-C_5MN1rk.js";import{H as Y,I as G,J as X,G as rt,u as Le,K as Ae,d as Ke,f as ot}from"./entry/index-C8oxe8yb.js";import{e as M,l as de,s as Z,ae as z,ah as _e,d as J,v as je,f as Q,aa as ct,ai as xe,aj as ut,ak as lt,U as ft,a2 as dt}from"./antd-BmrhB3rb.js";import{u as pt}from"./index-BQE9guKw.js";function ht(s,c,a){const o=/^\[(.+)\]$/;if(o.test(s)){const g=s.match(o);if(g&&g[1]){const y=g[1].split(",");return c=Array.isArray(c)?c:[c],y.forEach((d,b)=>{Z(a,d.trim(),c[b])}),!0}}}function mt(s,c,a){const o=/^\{(.+)\}$/;if(o.test(s)){const g=s.match(o);if(g&&g[1]){const y=g[1].split(",");return c=Y(c)?c:{},y.forEach(d=>{Z(a,d.trim(),c[d.trim()])}),!0}}}function At({defaultValueRef:s,getSchema:c,formModel:a,getProps:o}){function g(u){var F,O;if(!Y(u))return{};const f={};for(const D of Object.entries(u)){let[,r]=D;const[B]=D;if(!B||G(r)&&r.length===0||M(r))continue;const l=n(o).transformDateFunc;Y(r)&&(r=l==null?void 0:l(r)),G(r)&&((F=r[0])!=null&&F.format)&&((O=r[1])!=null&&O.format)&&(r=r.map(m=>l==null?void 0:l(m))),de(r)&&(r=r.trim()),!ht(B,r,f)&&!mt(B,r,f)&&Z(f,B,r)}return y(f)}function y(u){const f=n(o).fieldMapToTime;if(!f||!Array.isArray(f))return u;for(const[F,[O,D],r="YYYY-MM-DD"]of f){if(!F||!O||!D)continue;if(!z(u,F)){_e(u,F);continue}const[B,l]=z(u,F),[m,V]=Array.isArray(r)?r:[r,r];!J(B)&&!je(B)&&Z(u,O,d(B,m)),!J(l)&&!je(l)&&Z(u,D,d(l,V)),_e(u,F)}return u}function d(u,f){return f==="timestamp"?X(u).unix():f==="timestampStartDay"?X(u).startOf("day").unix():X(u).format(f)}function b(){const u=n(c),f={};u.forEach(F=>{const{defaultValue:O,defaultValueObj:D,componentProps:r={}}=F,B=Object.keys(D||{});B.length&&B.forEach(l=>{f[l]=D[l],a[l]===void 0&&(a[l]=D[l])}),J(O)||(f[F.field]=O,a[F.field]===void 0&&(a[F.field]=O)),J(r==null?void 0:r.defaultValue)||(f[F.field]=r==null?void 0:r.defaultValue,a[F.field]===void 0&&(a[F.field]=r==null?void 0:r.defaultValue))}),s.value=Q(f)}return{handleFormValues:g,initDefault:b}}const k=24;function yt({advanceState:s,emit:c,getProps:a,getSchema:o,formModel:g,defaultValueRef:y}){const d=Xe(),{realWidthRef:b,screenEnum:u,screenRef:f}=rt(),F=q(()=>{if(!s.isAdvanced)return 0;const m=n(a).emptySpan||0;if(ct(m))return m;if(Y(m)){const{span:V=0}=m,R=n(f);return m[R.toLowerCase()]||V||0}return 0}),O=Le(B,30);ae([()=>n(o),()=>s.isAdvanced,()=>n(b)],()=>{const{showAdvancedButton:m}=n(a);m&&O()},{immediate:!0});function D(m,V=0,R=!1){const _=n(b),$=parseInt(m.md)||parseInt(m.xs)||parseInt(m.sm)||m.span||k,N=parseInt(m.lg)||$,K=parseInt(m.xl)||N,U=parseInt(m.xxl)||K;return _<=u.LG?V+=$:_<u.XL?V+=N:_<u.XXL?V+=K:V+=U,R?(s.hideAdvanceBtn=!1,V<=k*2?(s.hideAdvanceBtn=!0,s.isAdvanced=!0):V>k*2&&V<=k*(n(a).autoAdvancedLine||3)?s.hideAdvanceBtn=!1:s.isLoad||(s.isLoad=!0,s.isAdvanced=!s.isAdvanced),{isAdvanced:s.isAdvanced,itemColSum:V}):V>k*(n(a).alwaysShowLines||1)?{isAdvanced:s.isAdvanced,itemColSum:V}:{isAdvanced:!0,itemColSum:V}}const r=ke({});function B(){var _;let m=0,V=0;const{baseColProps:R={}}=n(a);for(const $ of n(o)){const{show:N,ifShow:K,colProps:U}=$,H={schema:$,model:g,field:$.field,values:L(L({},n(y)),g)};let j=!0;if(j&&xe(K)&&(j=K),j&&M(K)&&(j=K(H)),j&&xe(N)&&(j=N),j&&M(N)&&(j=N(H)),j&&(U||R)){const{itemColSum:ee,isAdvanced:e}=D(L(L({},R),U),m);m=ee||0,e&&(V=m),r[$.field]=e}}(_=d==null?void 0:d.proxy)==null||_.$forceUpdate(),s.actionSpan=V%k+n(F),D(n(a).actionColOptions||{span:k},m,!0),c("advanced-change",s.isAdvanced)}function l(){s.isAdvanced=!s.isAdvanced}return{handleToggleAdvanced:l,fieldsIsAdvancedMap:r}}function Pe(s){return at.includes(s)}function vt(s,c={}){const a=/^\[(.+)\]$/;if(a.test(s)){const o=s.match(a);if(o&&o[1]){const g=o[1].split(",");if(!g.length)return;const y=[];return g.forEach((d,b)=>{Z(y,b,c[d.trim()])}),y.filter(Boolean).length?y:void 0}}}function gt({emit:s,getProps:c,formModel:a,getSchema:o,defaultValueRef:g,formElRef:y,schemaRef:d,handleFormValues:b}){function u(){return x(this,null,function*(){const{resetFunc:e,submitOnReset:i}=n(c);e&&M(e)&&(yield e()),n(y)&&(Object.keys(a).forEach(t=>{const A=n(o).find(I=>I.field===t),w=A==null?void 0:A.defaultValueObj,P=Object.keys(w||{});P.length&&P.forEach(I=>{a[I]=w[I]}),a[t]=Ft(A,g,t)}),ye(()=>U()),s("reset",we(a)),i&&j())})}const f=()=>n(o).map(e=>[...e.fields||[],e.field]).flat(1).filter(Boolean);function F(e){return x(this,null,function*(){if(Object.keys(e).length===0)return;const i=f(),p=[];i.forEach(t=>{const A=n(o).find(T=>T.field===t),w=z(e,t),P=ut(e,t),{componentProps:I}=A||{};let S=I;typeof I=="function"&&(S=S({formModel:n(a),formActionType:ee}));let W;const ie=T=>T?S!=null&&S.valueFormat?T:X(T):null;if(_(A==null?void 0:A.component)&&(W=vt(t,e),W)){const T=W||w;if(Array.isArray(T)){const re=[];for(const te of T)re.push(ie(te));n(a)[t]=re,p.push(t)}else n(a)[t]=ie(T),p.push(t)}if(Pe(A==null?void 0:A.component)){W=z(w,t);const T=W||w;T&&(G(T)?n(a)[t]=T:typeof T=="string"&&(n(a)[t]=[T])),p.push(t);return}if(P){W=z(w,t);const T=W||w;n(a)[t]=T,S!=null&&S.onChange&&(S==null||S.onChange(T)),p.push(t)}}),$(p).catch(t=>{})})}function O(e){if(!Array.isArray(e)||Array.isArray(e)&&e.length===0)return;const i=[],p=Object.keys(n(a));p&&(e.forEach(t=>{p.includes(t)&&(i.push(t),n(a)[t]=Q(n(z(g.value,t))))}),$(i).catch(t=>{}))}function D(e){return x(this,null,function*(){const i=Q(n(o));if(!e)return;let p=de(e)?[e]:e;de(e)&&(p=[e]);for(const t of p)r(t,i);d.value=i})}function r(e,i){if(de(e)){const p=i.findIndex(t=>t.field===e);p!==-1&&(delete a[e],i.splice(p,1))}}function B(e,i,p=!1){return x(this,null,function*(){const t=Q(n(o)),A=Array.isArray(e)?e.map(I=>I.field):[e.field];if(t.find(I=>A.includes(I.field))){Ae("There are schemas that have already been added");return}const w=t.findIndex(I=>I.field===i),P=Y(e)?[e]:e;!i||w===-1||p?p?t.unshift(...P):t.push(...P):w!==-1&&t.splice(w+1,0,...P),d.value=t,V(e)})}function l(e){return x(this,null,function*(){let i=[];if(Y(e)&&i.push(e),G(e)&&(i=[...e]),!i.every(t=>fe(t.component)||Reflect.has(t,"field")&&t.field)){Ae("All children of the form Schema array that need to be updated must contain the `field` field");return}d.value=i})}function m(e){return x(this,null,function*(){let i=[];if(Y(e)&&i.push(e),G(e)&&(i=[...e]),!i.every(w=>fe(w.component)||Reflect.has(w,"field")&&w.field)){Ae("All children of the form Schema array that need to be updated must contain the `field` field");return}const t=[],A=[];n(o).forEach(w=>{const P=i.find(I=>w.field===I.field);if(P){const I=Ke(w,P);A.push(I),t.push(I)}else t.push(w)}),V(A),d.value=lt(t,"field")})}function V(e){let i=[];Y(e)&&i.push(e),G(e)&&(i=[...e]);const p={},t=R();i.forEach(A=>{!fe(A.component)&&Reflect.has(A,"field")&&A.field&&!J(A.defaultValue)&&(!(A.field in t)||J(t[A.field]))&&(p[A.field]=A.defaultValue)}),F(p)}function R(){return n(y)?b(we(n(a))):{}}function _(e){return $e.includes(e)}function $(e){return x(this,null,function*(){var p;const i=yield(p=n(y))==null?void 0:p.validateFields(e);return b(i)})}function N(e){return x(this,null,function*(){var i;yield(i=n(y))==null?void 0:i.setProps(e)})}function K(e){return x(this,null,function*(){var t;let i;e===void 0?i=f():i=e===Array.isArray(e)?e:void 0;const p=yield(t=n(y))==null?void 0:t.validate(i);return b(p)})}function U(e){return x(this,null,function*(){var i;yield(i=n(y))==null?void 0:i.clearValidate(e)})}function H(e,i){return x(this,null,function*(){var p;yield(p=n(y))==null?void 0:p.scrollToField(e,i)})}function j(e){return x(this,null,function*(){e&&e.preventDefault();const{submitFunc:i}=n(c);if(i&&M(i)){yield i();return}if(n(y))try{const t=yield K();s("submit",t)}catch(t){if((t==null?void 0:t.outOfDate)===!1&&(t!=null&&t.errorFields))return;throw new Error(t)}})}const ee={getFieldsValue:R,setFieldsValue:F,resetFields:u,updateSchema:m,resetSchema:l,setProps:N,removeSchemaByField:D,appendSchemaByField:B,clearValidate:U,validateFields:$,validate:K,submit:j,scrollToField:H};return{handleSubmit:j,clearValidate:U,validate:K,validateFields:$,getFieldsValue:R,updateSchema:m,resetSchema:l,appendSchemaByField:B,removeSchemaByField:D,resetFields:u,setFieldsValue:F,scrollToField:H,resetDefaultField:O}}function Ft(s,c,a){let o=Q(c.value[a]);return Vt(s)?J(o)?void 0:o:(!o&&s&&bt(s)&&(o=[0,0]),!o&&s&&s.component==="ApiTree"&&(o=[]),o)}function bt(s){if(s.component==="Slider"&&s.componentProps&&"range"in s.componentProps)return!0}function Vt(s){return(s==null?void 0:s.component)&&it.includes(s.component)}function wt(g){return x(this,arguments,function*({getSchema:s,getProps:c,formElRef:a,isInitedDefault:o}){qe(()=>x(this,null,function*(){if(n(o)||!n(c).autoFocusFirstItem)return;yield ye();const y=n(s),d=n(a),b=d==null?void 0:d.$el;if(!d||!b||!y||y.length===0)return;const u=y[0];if(!u.component||!u.component.includes("Input"))return;const f=b.querySelector(".ant-row:first-child input");f&&(f==null||f.focus())}))})}const xt=Ge({name:"BasicForm",__name:"BasicForm",props:tt,emits:["advanced-change","reset","submit","register","field-value-change"],setup(s,{expose:c,emit:a}){const o=s,g=a,y=Je(),d=Ie({}),b=pt(),u=Ie({isAdvanced:!0,hideAdvanceBtn:!1,isLoad:!1,actionSpan:6}),f=se({}),F=se(!1),O=se(),D=se(null),r=se(null),{prefixCls:B}=ot("basic-form"),l=q(()=>L(L({},o),n(O))),m=q(()=>[B,{[`${B}--compact`]:n(l).compact}]),V=q(()=>{const{baseRowStyle:h={},rowProps:C}=n(l);return L({style:h},C)}),R=q(()=>L(L(L({},y),o),n(l))),_=q(()=>{var C;const h=Q(n(D)||n(l).schemas);for(const v of h){const{defaultValue:E,component:ne,componentProps:oe={},isHandleDateDefaultValue:Ce=!0,field:Re,isHandleDefaultValue:Ne=!0,valueFormat:ve}=v;if(Ce&&E&&ne&&$e.includes(ne)){const Ue={schema:v,tableAction:(C=o.tableAction)!=null?C:{},formModel:d,formActionType:{}},ce=oe?typeof oe=="function"?oe(Ue).valueFormat:oe.valueFormat:null;if(!Array.isArray(E))v.defaultValue=ce?X(E).format(ce):X(E);else{const ge=[];E.forEach(Fe=>{ge.push(ce?X(Fe).format(ce):X(Fe))}),v.defaultValue=ge}}E&&Pe(v==null?void 0:v.component)&&(G(E)?v.defaultValue=E:typeof E=="string"&&(v.defaultValue=[E])),Ne&&E&&ne&&M(ve)&&(v.defaultValue=ve({value:E,schema:v,model:d,field:Re}))}return n(l).showAdvancedButton?h.filter(v=>!fe(v.component)):h}),{handleToggleAdvanced:$,fieldsIsAdvancedMap:N}=yt({advanceState:u,emit:g,getProps:l,getSchema:_,formModel:d,defaultValueRef:f}),{handleFormValues:K,initDefault:U}=At({getProps:l,defaultValueRef:f,getSchema:_,formModel:d});wt({getSchema:_,getProps:l,isInitedDefault:F,formElRef:r});const{handleSubmit:H,setFieldsValue:j,clearValidate:ee,validate:e,validateFields:i,getFieldsValue:p,updateSchema:t,resetSchema:A,appendSchemaByField:w,removeSchemaByField:P,resetFields:I,scrollToField:S,resetDefaultField:W}=gt({emit:g,getProps:l,formModel:d,getSchema:_,defaultValueRef:f,formElRef:r,schemaRef:D,handleFormValues:K});nt({resetAction:I,submitAction:H}),ae(()=>n(l).model,()=>{const{model:h}=n(l);h&&j(h)},{immediate:!0}),ae(()=>o.schemas,h=>{A(h!=null?h:[])}),ae(()=>_.value,h=>{ye(()=>{var C;(C=b==null?void 0:b.redoModalHeight)==null||C.call(b)}),!n(F)&&h!=null&&h.length&&(U(),F.value=!0)}),ae(()=>d,Le(()=>{n(l).submitOnChange&&H()},300),{deep:!0});function ie(h){return x(this,null,function*(){O.value=Ke(n(O)||{},h)})}function T(h,C,v){d[h]=C,g("field-value-change",h,C),v&&v.itemProps&&!v.itemProps.autoLink&&i([h]).catch(E=>{})}function re(h){const{autoSubmitOnEnter:C}=n(l);if(C&&h.key==="Enter"&&h.target&&h.target instanceof HTMLElement){const v=h.target;v&&v.tagName&&v.tagName.toUpperCase()==="INPUT"&&H()}}const te={getFieldsValue:p,setFieldsValue:j,resetFields:I,updateSchema:t,resetSchema:A,setProps:ie,removeSchemaByField:P,appendSchemaByField:w,clearValidate:ee,validateFields:i,validate:e,submit:H,scrollToField:S,resetDefaultField:W},Se=q(()=>L(L({},l.value),u));return c(L({},te)),ze(()=>{U(),g("register",te)}),(h,C)=>(pe(),Te(n(dt),me(R.value,{class:m.value,ref_key:"formElRef",ref:r,model:d,onKeypress:Me(re,["enter"])}),{default:ue(()=>[Be(n(ft),Ee(Oe(V.value)),{default:ue(()=>[le(h.$slots,"formHeader"),(pe(!0),Ze(Qe,null,he(_.value,v=>(pe(),Te(et,{key:v.field,isAdvanced:n(N)[v.field],tableAction:h.tableAction,formActionType:te,schema:v,formProps:l.value,allDefaultValues:f.value,formModel:d,setFormModel:T},De({_:2},[he(Object.keys(h.$slots),E=>({name:E,fn:ue(ne=>[le(h.$slots,E,me({ref_for:!0},ne||{}))])}))]),1032,["isAdvanced","tableAction","schema","formProps","allDefaultValues","formModel"]))),128)),Be(st,me(Se.value,{onToggleAdvanced:n($)}),De({_:2},[he(["resetBefore","submitBefore","advanceBefore","advanceAfter"],v=>({name:v,fn:ue(E=>[le(h.$slots,v,Ee(Oe(E||{})))])}))]),1040,["onToggleAdvanced"]),le(h.$slots,"formFooter")]),_:3},16)]),_:3},16,["class","model"]))}});export{xt as _};
