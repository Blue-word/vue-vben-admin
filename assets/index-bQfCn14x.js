import{C as n,aI as s}from"./entry/index-C8oxe8yb.js";import{P as v}from"./index-cNCn3L7J.js";import{Q as r}from"./index-B50us5BZ.js";import{b7 as u}from"./antd-BmrhB3rb.js";import{d as w,f,a7 as x,Z as C,a8 as y,a9 as o,$ as i,k as t,u as e,G as p}from"./vue-BjERyvPm.js";import"./useContentViewHeight-DpsSPLeJ.js";import"./useWindowSizeFn-BF3LgexJ.js";import"./onMountedOrActivated-DcvTUt7V.js";import"./download-XBCdAc-X.js";import"./base64Conver-bBv-IO2K.js";const h={class:"flex flex-wrap"},k=i("div",{class:"msg"},"(在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题)",-1),R=i("div",{class:"msg"},"要进行扩展绘制则不能将tag设为img",-1),a="https://www.vvbin.cn",P=w({__name:"index",setup(D){const c=f(null),d=f(null);function g(){const l=e(c);l&&l.download("文件名")}function _(){const l=e(d);l&&l.download("Qrcode")}function b({ctx:l}){l instanceof CanvasRenderingContext2D&&(l.fillStyle="black",l.font='16px "微软雅黑"',l.textBaseline="bottom",l.textAlign="center",l.fillText("你帅你先扫",100,195,200))}return(l,q)=>{const m=x("a-button");return C(),y(e(v),{title:"二维码组件使用示例"},{default:o(()=>[i("div",h,[t(e(n),{title:"基础示例",canExpand:!0,class:"text-center mb-6 w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:a})]),_:1}),t(e(n),{title:"渲染成img标签示例",class:"text-center mb-6 w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:a,tag:"img"})]),_:1}),t(e(n),{title:"配置样式示例",class:"text-center mb-6 w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:a,options:{color:{dark:"#55D187"}}})]),_:1}),t(e(n),{title:"本地logo示例",class:"text-center mb-6 w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:a,logo:e(s)},null,8,["logo"])]),_:1}),t(e(n),{title:"在线logo示例",class:"text-center mb-6 w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:a,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}})]),_:1}),t(e(n),{title:"logo配置示例",class:"text-center mb-6 w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:a,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["logo"])]),_:1}),t(e(n),{title:"下载示例",class:"text-center mb-6 w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:a,ref_key:"qrRef",ref:c,logo:e(s)},null,8,["logo"]),t(m,{class:"mb-2",type:"primary",onClick:g},{default:o(()=>[p(" 下载 ")]),_:1}),k]),_:1}),t(e(n),{title:"配置大小示例",class:"text-center w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:a,width:300})]),_:1}),t(e(n),{title:"扩展绘制示例",class:"text-center w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:a,width:200,options:{margin:5},ref_key:"qrDiyRef",ref:d,logo:e(s),onDone:b},null,8,["logo"]),t(m,{class:"mb-2",type:"primary",onClick:_},{default:o(()=>[p(" 下载 ")]),_:1}),R]),_:1}),t(e(n),{title:"Antdv QRCode",class:"text-center w-1/5 mr-6"},{default:o(()=>[t(e(u),{value:a,size:200})]),_:1}),t(e(n),{title:"Antdv QRCode 带icon",class:"text-center w-1/5 mr-6"},{default:o(()=>[t(e(u),{value:a,size:200,icon:e(s)},null,8,["icon"])]),_:1})])]),_:1})}}});export{P as default};
