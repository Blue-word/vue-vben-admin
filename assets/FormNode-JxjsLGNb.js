var I=Object.defineProperty,g=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var i=(e,o,t)=>o in e?I(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,n=(e,o)=>{for(var t in o||(o={}))F.call(o,t)&&i(e,t,o[t]);if(a)for(var t of a(o))k.call(o,t)&&i(e,t,o[t]);return e},p=(e,o)=>g(e,C(o));import v from"./FormNodeOperate-CjTQx4mv.js";import{u as N}from"./useFormDesignState-DaR4Tnkk.js";import S from"./index-tbdcu3Yh.js";import{d as b,r as y,I as V,a7 as c,Z as $,_ as B,$ as f,k as d,a0 as O,a1 as _,B as D}from"./vue-BjERyvPm.js";import{c as w}from"./entry/index-C8oxe8yb.js";import"./index-DrPvFpAA.js";import"./antd-BmrhB3rb.js";import"./formItemConfig-DK_3YsQA.js";import"./componentMap-BjeB5RNL.js";import"./useFormItem-B4KjxddK.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DSt9Yvqv.js";import"./index-BCH_H2aN.js";import"./index-BQE9guKw.js";import"./useWindowSizeFn-BF3LgexJ.js";import"./uuid-D0SLUWHI.js";import"./useSortable-BKAjMRfQ.js";import"./download-XBCdAc-X.js";import"./base64Conver-bBv-IO2K.js";import"./index-DYdzx-DC.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BeXMV2gG.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-oiA3_LDv.js";import"./index-BY7Q_dtO.js";const M=b({name:"FormNode",components:{VFormItem:S,FormNodeOperate:v},props:{schema:{type:Object,required:!0}},setup(e){const{formConfig:o,formDesignMethods:t}=N(),r=y({}),m=()=>{t.handleSetSelectItem(e.schema)};return p(n({},V(r)),{handleSelectItem:m,formConfig:o})}}),j={class:"form-item-box"},q={class:"show-key-box"};function z(e,o,t,r,m,E){var s;const l=c("VFormItem"),h=c("FormNodeOperate");return $(),B("div",{class:_(["drag-move-box",{active:e.schema.key===((s=e.formConfig.currentItem)==null?void 0:s.key)}]),onClick:o[0]||(o[0]=D((...u)=>e.handleSelectItem&&e.handleSelectItem(...u),["stop"]))},[f("div",j,[d(l,{formConfig:e.formConfig,schema:e.schema},null,8,["formConfig","schema"])]),f("div",q,O(e.schema.label+(e.schema.field?"/"+e.schema.field:"")),1),d(h,{schema:e.schema,currentItem:e.formConfig.currentItem},null,8,["schema","currentItem"])],2)}const ne=w(M,[["render",z]]);export{ne as default};
