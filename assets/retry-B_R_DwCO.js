import{i as p}from"./mock-api-D5-3cqvb.js";import{P as d}from"./index-cNCn3L7J.js";import{b8 as e,j as i,Y as m,E as f,B as C,R as B}from"./antd-BmrhB3rb.js";import{d as n,k as u,G as t,f as F}from"./vue-BjERyvPm.js";import{u as D}from"./index-Cw2evmpm.js";import"./entry/index-C8oxe8yb.js";import"./useContentViewHeight-DpsSPLeJ.js";import"./useWindowSizeFn-BF3LgexJ.js";import"./onMountedOrActivated-DcvTUt7V.js";const c=n({setup(){let o=0;const a=F(""),{loading:l,run:s}=D(p,{manual:!0,retryCount:3,onError:r=>{i.error(r.message+` count: ${o++}.`)}});return()=>u(B,{title:"错误重试"},{default:()=>[u(e,null,{default:()=>[u(e.Paragraph,null,{default:()=>[t("通过设置"),u(e.Text,{type:"danger"},{default:()=>[t(" options.retryCount ")]}),t("，指定错误重试次数，则 useRequest 在失败后会进行重试。")]}),u(e.Text,{code:!0},{default:()=>["const { data, run } = useRequest(imitateApi, { retryCount: 3 });"]})]}),u(m,{class:"mt-4"},{default:()=>[u(f,{value:a.value,"onUpdate:value":r=>a.value=r,placeholder:"Please enter username"},null),u(C,{type:"primary",disabled:l.value,onClick:()=>s(a.value,!1)},{default:()=>[l.value?"Loading":"Edit"]})]})]})}}),T=n({setup(){return()=>u(d,{title:"错误重试"},{default:()=>[u(c,null,null)],headerContent:()=>u(e,null,{default:()=>[u(e.Paragraph,null,{default:()=>[t("通过设置"),u(e.Text,{type:"danger"},{default:()=>[t(" options.retryCount ")]}),t("，指定错误重试次数，则 useRequest 在失败后会进行重试。")]}),u(e.Paragraph,null,{default:()=>[u(e.Text,null,{default:()=>[u("pre",null,[`// useRequestOption
retryCount?: number; // -1, 无限次重试
retryInterval?: number; // 重试时间间隔，单位为毫秒。如果不设置，默认采用简易的指数退避算法`])]})]})]})})}});export{T as default};
