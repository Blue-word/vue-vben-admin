import{i as F}from"./mock-api-D5-3cqvb.js";import{P as n}from"./index-cNCn3L7J.js";import{b8 as e,G as s,R as l}from"./antd-BmrhB3rb.js";import{d as r,k as u,G as t}from"./vue-BjERyvPm.js";import{u as i}from"./index-Cw2evmpm.js";import"./entry/index-C8oxe8yb.js";import"./useContentViewHeight-DpsSPLeJ.js";import"./useWindowSizeFn-BF3LgexJ.js";import"./onMountedOrActivated-DcvTUt7V.js";const p=r({setup(){const{data:a,loading:o}=i(F,{refreshOnWindowFocus:!0});return()=>u(l,{title:"屏幕聚焦重新请求"},{default:()=>[u(e,null,{default:()=>[u(e.Paragraph,null,{default:()=>[t("通过设置"),u(e.Text,{type:"danger"},{default:()=>[t(" options.refreshOnWindowFocus ")]}),t("，在浏览器窗口 refocus 和 revisible 时, 会重新发起请求。")]}),u(e.Paragraph,null,{default:()=>[u(e.Text,{code:!0},{default:()=>["const { data, run } = useRequest(imitateApi, { refreshOnWindowFocus: true });"]})]}),u(e.Paragraph,null,{default:()=>[t("你可以点击浏览器外部，再点击当前页面来体验效果（或者隐藏当前页面，重新展示）,如果和上一次请求间隔大于 5000ms, 则会重新请求一次。")]})]}),u(s,{spinning:o.value},{default:()=>[u("div",null,[t("Username: "),a.value])]})]})}}),g=r({setup(){return()=>u(n,null,{default:()=>[u(p,null,null)]})}});export{g as default};
