"use strict";(self["webpackChunkvue3_test"]=self["webpackChunkvue3_test"]||[]).push([[569],{5569:function(e,t,l){l.r(t),l.d(t,{default:function(){return Ke}});l(3480),l(2181),l(924),l(9087),l(3495);var n=l(1926),o=l(3396),a=l(7139),s=l(4870),i=l(9242),u=l(191),r=l(336),d=l(8425),m=l(3365);const p=(0,u.o8)({size:r.Pp,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),c=(0,u.o8)({...p,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),f={[d.f_]:e=>(0,a.HD)(e)||(0,m.hj)(e)||(0,m.jn)(e),[d.O7]:e=>(0,a.HD)(e)||(0,m.hj)(e)||(0,m.jn)(e)},g=Symbol("radioGroupKey"),v=(e,t)=>{const l=(0,s.iH)(),n=(0,o.f3)(g,void 0),a=(0,o.Fl)((()=>!!n)),i=(0,o.Fl)({get(){return a.value?n.modelValue:e.modelValue},set(o){a.value?n.changeEvent(o):t&&t(d.f_,o),l.value.checked=e.modelValue===e.label}}),u=(0,r.tH)((0,o.Fl)((()=>null==n?void 0:n.size))),m=(0,r.B4)((0,o.Fl)((()=>null==n?void 0:n.disabled))),p=(0,s.iH)(!1),c=(0,o.Fl)((()=>m.value||a.value&&i.value!==e.label?-1:0));return{radioRef:l,isGroup:a,radioGroup:n,focus:p,size:u,disabled:m,tabIndex:c,modelValue:i}};var b=l(5989),y=l(9668);const C=["value","name","disabled"],_={name:"ElRadio"},w=(0,o.aZ)({..._,props:c,emits:f,setup(e,{emit:t}){const l=e,n=(0,y.s)("radio"),{radioRef:u,radioGroup:r,focus:d,size:m,disabled:p,modelValue:c}=v(l,t);function f(){(0,o.Y3)((()=>t("change",c.value)))}return(e,t)=>{var l;return(0,o.wg)(),(0,o.iD)("label",{class:(0,a.C_)([(0,s.SU)(n).b(),(0,s.SU)(n).is("disabled",(0,s.SU)(p)),(0,s.SU)(n).is("focus",(0,s.SU)(d)),(0,s.SU)(n).is("bordered",e.border),(0,s.SU)(n).is("checked",(0,s.SU)(c)===e.label),(0,s.SU)(n).m((0,s.SU)(m))])},[(0,o._)("span",{class:(0,a.C_)([(0,s.SU)(n).e("input"),(0,s.SU)(n).is("disabled",(0,s.SU)(p)),(0,s.SU)(n).is("checked",(0,s.SU)(c)===e.label)])},[(0,o.wy)((0,o._)("input",{ref_key:"radioRef",ref:u,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,s.dq)(c)?c.value=e:null),class:(0,a.C_)((0,s.SU)(n).e("original")),value:e.label,name:e.name||(null==(l=(0,s.SU)(r))?void 0:l.name),disabled:(0,s.SU)(p),type:"radio",onFocus:t[1]||(t[1]=e=>d.value=!0),onBlur:t[2]||(t[2]=e=>d.value=!1),onChange:f},null,42,C),[[i.G2,(0,s.SU)(c)]]),(0,o._)("span",{class:(0,a.C_)((0,s.SU)(n).e("inner"))},null,2)],2),(0,o._)("span",{class:(0,a.C_)((0,s.SU)(n).e("label")),onKeydown:t[3]||(t[3]=(0,i.iM)((()=>{}),["stop"]))},[(0,o.WI)(e.$slots,"default",{},(()=>[(0,o.Uk)((0,a.zw)(e.label),1)]))],34)],2)}}});var S=(0,b.Z)(w,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const k=(0,u.o8)({...p,name:{type:String,default:""}}),U=["value","name","disabled"],h={name:"ElRadioButton"},x=(0,o.aZ)({...h,props:k,setup(e){const t=e,l=(0,y.s)("radio"),{radioRef:n,focus:u,size:r,disabled:d,modelValue:m,radioGroup:p}=v(t),c=(0,o.Fl)((()=>({backgroundColor:(null==p?void 0:p.fill)||"",borderColor:(null==p?void 0:p.fill)||"",boxShadow:(null==p?void 0:p.fill)?`-1px 0 0 0 ${p.fill}`:"",color:(null==p?void 0:p.textColor)||""})));return(e,t)=>{var f;return(0,o.wg)(),(0,o.iD)("label",{class:(0,a.C_)([(0,s.SU)(l).b("button"),(0,s.SU)(l).is("active",(0,s.SU)(m)===e.label),(0,s.SU)(l).is("disabled",(0,s.SU)(d)),(0,s.SU)(l).is("focus",(0,s.SU)(u)),(0,s.SU)(l).bm("button",(0,s.SU)(r))])},[(0,o.wy)((0,o._)("input",{ref_key:"radioRef",ref:n,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,s.dq)(m)?m.value=e:null),class:(0,a.C_)((0,s.SU)(l).be("button","original-radio")),value:e.label,type:"radio",name:e.name||(null==(f=(0,s.SU)(p))?void 0:f.name),disabled:(0,s.SU)(d),onFocus:t[1]||(t[1]=e=>u.value=!0),onBlur:t[2]||(t[2]=e=>u.value=!1)},null,42,U),[[i.G2,(0,s.SU)(m)]]),(0,o._)("span",{class:(0,a.C_)((0,s.SU)(l).be("button","inner")),style:(0,a.j5)((0,s.SU)(m)===e.label?(0,s.SU)(c):{}),onKeydown:t[3]||(t[3]=(0,i.iM)((()=>{}),["stop"]))},[(0,o.WI)(e.$slots,"default",{},(()=>[(0,o.Uk)((0,a.zw)(e.label),1)]))],38)],2)}}});var W=(0,b.Z)(x,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const z=(0,u.o8)({id:{type:String,default:void 0},size:r.Pp,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0}}),I=f;var $=l(3317),j=l(148),B=l(8775);const q=["id","aria-label","aria-labelledby"],N={name:"ElRadioGroup"},E=(0,o.aZ)({...N,props:z,emits:I,setup(e,{emit:t}){const l=e,n=(0,y.s)("radio"),i=(0,$.M)(),u=(0,s.iH)(),{formItem:r}=(0,j.A)(),{inputId:m,isLabeledByFormItem:p}=(0,j.p)(l,{formItemContext:r}),c=e=>{t(d.f_,e),(0,o.Y3)((()=>t("change",e)))};(0,o.bv)((()=>{const e=u.value.querySelectorAll("[type=radio]"),t=e[0];!Array.from(e).some((e=>e.checked))&&t&&(t.tabIndex=0)}));const f=(0,o.Fl)((()=>l.name||i.value));return(0,o.JJ)(g,(0,s.qj)({...(0,s.BK)(l),changeEvent:c,name:f})),(0,o.YP)((()=>l.modelValue),(()=>null==r?void 0:r.validate("change").catch((e=>(0,B.N)(e))))),(e,t)=>((0,o.wg)(),(0,o.iD)("div",{id:(0,s.SU)(m),ref_key:"radioGroupRef",ref:u,class:(0,a.C_)((0,s.SU)(n).b("group")),role:"radiogroup","aria-label":(0,s.SU)(p)?void 0:e.label||"radio-group","aria-labelledby":(0,s.SU)(p)?(0,s.SU)(r).labelId:void 0},[(0,o.WI)(e.$slots,"default")],10,q))}});var H=(0,b.Z)(E,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]),R=l(3821);(0,R.nz)(S,{RadioButton:W,RadioGroup:H});const D=(0,R.dp)(H),T=(0,R.dp)(W);var F=l(1415),M=l(8298);const V={style:{color:"cornflowerblue"}},Z=(0,o._)("p",{style:{color:"cornflowerblue"}},"父组件slot内容2222",-1),L=(0,o.Uk)("组件一"),A=(0,o.Uk)("组件二"),P=(0,o.Uk)("组件三");function Y(e,t,l,s,i,u){const r=(0,o.up)("ComponentLocal"),d=M.Kf,m=n.aE,p=(0,o.up)("ComponentEmit"),c=(0,o.up)("ComponentSlot"),f=(0,o.up)("ComponentProvide"),g=F.mi,v=T,b=D,y=n.PH;return(0,o.wg)(),(0,o.j4)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{title:"这是测试Props相关的组件"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,{msg:"这是一个局部注册组件",age:11,aa:"这是aa属性",bb:"这是bb属性",style:{color:"cornflowerblue"},onChange:u.attrClick},null,8,["onChange"])])),_:1})])),_:1}),(0,o.Wm)(m,{title:"这是emit自定义事件测试的组件"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,{onMyClick:u.emitClick,onClickRequired:u.emitClickRequired,title:i.title,"onUpdate:title":t[0]||(t[0]=e=>i.title=e),titleModifiers:{capitalize:!0},age:i.age,"onUpdate:age":t[1]||(t[1]=e=>i.age=e),ageModifiers:{number:!0}},null,8,["onMyClick","onClickRequired","title","age"]),(0,o._)("div",null,"v-model父组件title: "+(0,a.zw)(i.title),1),(0,o._)("div",null,"v-model父组件age: "+(0,a.zw)(i.age),1)])),_:1})])),_:1}),(0,o.Wm)(m,{title:"这是slot相关的"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{slot1:(0,o.w5)((e=>[(0,o._)("p",V,"父组件slot内容--"+(0,a.zw)(e),1)])),default:(0,o.w5)((()=>[Z])),_:1})])),_:1})])),_:1}),(0,o.Wm)(m,{title:"provide和inject相关"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f),(0,o.Wm)(g,{onClick:u.changeUsers},{default:(0,o.w5)((()=>[(0,o.Uk)("change users -- "+(0,a.zw)(i.title),1)])),_:1},8,["onClick"]),(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.users,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.name},(0,a.zw)(e.name)+" -- "+(0,a.zw)(e.age),1)))),128))])])),_:1})])),_:1}),(0,o.Wm)(m,{title:"异步组件和动态组件"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,{modelValue:i.radioValue,"onUpdate:modelValue":t[2]||(t[2]=e=>i.radioValue=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{label:1},{default:(0,o.w5)((()=>[L])),_:1}),(0,o.Wm)(v,{label:2},{default:(0,o.w5)((()=>[A])),_:1}),(0,o.Wm)(v,{label:3},{default:(0,o.w5)((()=>[P])),_:1})])),_:1},8,["modelValue"]),((0,o.wg)(),(0,o.j4)(o.Ob,null,[((0,o.wg)(),(0,o.j4)((0,o.LL)(u.currentTabComponent)))],1024))])),_:1})])),_:1})])),_:1})}var K=l(8478);const O={},G=(0,u.o8)({a11y:{type:Boolean,default:!0},locale:{type:(0,u.Cq)(Object)},size:r.Pp,button:{type:(0,u.Cq)(Object)},experimentalFeatures:{type:(0,u.Cq)(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:(0,u.Cq)(Object)},zIndex:Number,namespace:{type:String,default:"el"}});(0,o.aZ)({name:"ElConfigProvider",props:G,setup(e,{slots:t}){(0,o.YP)((()=>e.message),(e=>{Object.assign(O,null!=e?e:{})}),{immediate:!0,deep:!0});const l=(0,K.A)(e);return()=>(0,o.WI)(t,"default",{config:null==l?void 0:l.value})}});var J=l(6367);const Q=(0,u.o8)({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),X=["textContent"],ee={name:"ElBadge"},te=(0,o.aZ)({...ee,props:Q,setup(e,{expose:t}){const l=e,n=(0,y.s)("badge"),u=(0,o.Fl)((()=>l.isDot?"":(0,m.hj)(l.value)&&(0,m.hj)(l.max)&&l.max<l.value?`${l.max}+`:`${l.value}`));return t({content:u}),(e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,a.C_)((0,s.SU)(n).b())},[(0,o.WI)(e.$slots,"default"),(0,o.Wm)(i.uT,{name:`${(0,s.SU)(n).namespace.value}-zoom-in-center`},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("sup",{class:(0,a.C_)([(0,s.SU)(n).e("content"),(0,s.SU)(n).em("content",e.type),(0,s.SU)(n).is("fixed",!!e.$slots.default),(0,s.SU)(n).is("dot",e.isDot)]),textContent:(0,a.zw)((0,s.SU)(u))},null,10,X),[[i.F8,!e.hidden&&((0,s.SU)(u)||e.isDot)]])])),_:1},8,["name"])],2))}});var le=(0,b.Z)(te,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const ne=(0,R.nz)(le);var oe=l(3034),ae=l(1008);const se=["success","info","warning","error"],ie=(0,u.o8)({customClass:{type:String,default:""},center:{type:Boolean,default:!1},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:3e3},icon:{type:ae.AA,default:""},id:{type:String,default:""},message:{type:(0,u.Cq)([String,Object,Function]),default:""},onClose:{type:(0,u.Cq)(Function),required:!1},showClose:{type:Boolean,default:!1},type:{type:String,values:se,default:"info"},offset:{type:Number,default:20},zIndex:{type:Number,default:0},grouping:{type:Boolean,default:!1},repeatNum:{type:Number,default:1}}),ue={destroy:()=>!0};var re=l(8823);const de=(0,o.aZ)({name:"ElMessage",components:{ElBadge:ne,ElIcon:oe.gn,...ae.f5},props:ie,emits:ue,setup(e){const t=(0,y.s)("message"),l=(0,s.iH)(!1),n=(0,s.iH)(e.type?"error"===e.type?"danger":e.type:"info");let a;const i=(0,o.Fl)((()=>{const l=e.type;return{[t.bm("icon",l)]:l&&ae.Rp[l]}})),u=(0,o.Fl)((()=>e.icon||ae.Rp[e.type]||"")),r=(0,o.Fl)((()=>({top:`${e.offset}px`,zIndex:e.zIndex})));function d(){e.duration>0&&({stop:a}=(0,m.eM)((()=>{l.value&&c()}),e.duration))}function p(){null==a||a()}function c(){l.value=!1}function f({code:e}){e===re.n.esc?l.value&&c():d()}return(0,o.bv)((()=>{d(),l.value=!0})),(0,o.YP)((()=>e.repeatNum),(()=>{p(),d()})),(0,J.ORN)(document,"keydown",f),{ns:t,typeClass:i,iconComponent:u,customStyle:r,visible:l,badgeType:n,close:c,clearTimer:p,startTimer:d}}}),me=["id"],pe=["innerHTML"];function ce(e,t,l,n,s,u){const r=(0,o.up)("el-badge"),d=(0,o.up)("el-icon"),m=(0,o.up)("close");return(0,o.wg)(),(0,o.j4)(i.uT,{name:e.ns.b("fade"),onBeforeLeave:e.onClose,onAfterLeave:t[2]||(t[2]=t=>e.$emit("destroy"))},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",{id:e.id,class:(0,a.C_)([e.ns.b(),{[e.ns.m(e.type)]:e.type&&!e.icon},e.ns.is("center",e.center),e.ns.is("closable",e.showClose),e.customClass]),style:(0,a.j5)(e.customStyle),role:"alert",onMouseenter:t[0]||(t[0]=(...t)=>e.clearTimer&&e.clearTimer(...t)),onMouseleave:t[1]||(t[1]=(...t)=>e.startTimer&&e.startTimer(...t))},[e.repeatNum>1?((0,o.wg)(),(0,o.j4)(r,{key:0,value:e.repeatNum,type:e.badgeType,class:(0,a.C_)(e.ns.e("badge"))},null,8,["value","type","class"])):(0,o.kq)("v-if",!0),e.iconComponent?((0,o.wg)(),(0,o.j4)(d,{key:1,class:(0,a.C_)([e.ns.e("icon"),e.typeClass])},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e.iconComponent)))])),_:1},8,["class"])):(0,o.kq)("v-if",!0),(0,o.WI)(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.kq)(" Caution here, message could've been compromised, never use user's input as message "),(0,o._)("p",{class:(0,a.C_)(e.ns.e("content")),innerHTML:e.message},null,10,pe)],2112)):((0,o.wg)(),(0,o.iD)("p",{key:0,class:(0,a.C_)(e.ns.e("content"))},(0,a.zw)(e.message),3))])),e.showClose?((0,o.wg)(),(0,o.j4)(d,{key:2,class:(0,a.C_)(e.ns.e("closeBtn")),onClick:(0,i.iM)(e.close,["stop"])},{default:(0,o.w5)((()=>[(0,o.Wm)(m)])),_:1},8,["class","onClick"])):(0,o.kq)("v-if",!0)],46,me),[[i.F8,e.visible]])])),_:3},8,["name","onBeforeLeave"])}var fe=(0,b.Z)(de,[["render",ce],["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]),ge=l(1695),ve=l(7181);const be=[];let ye=1;const Ce=function(e={},t){if(!m.C5)return{close:()=>{}};if((0,m.hj)(O.max)&&be.length>=O.max)return{close:()=>{}};if(!(0,o.lA)(e)&&(0,a.Kn)(e)&&e.grouping&&!(0,o.lA)(e.message)&&be.length){const t=be.find((t=>{var l,n,o;return`${null!=(n=null==(l=t.vm.props)?void 0:l.message)?n:""}`===`${null!=(o=e.message)?o:""}`}));if(t)return t.vm.component.props.repeatNum+=1,t.vm.component.props.type=(null==e?void 0:e.type)||"info",{close:()=>f.component.proxy.visible=!1}}((0,a.HD)(e)||(0,o.lA)(e))&&(e={message:e});let l=e.offset||20;be.forEach((({vm:e})=>{var t;l+=((null==(t=e.el)?void 0:t.offsetHeight)||0)+16})),l+=16;const{nextZIndex:n}=(0,ge.C)(),s="message_"+ye++,u=e.onClose,r={zIndex:n(),...e,offset:l,id:s,onClose:()=>{_e(s,u)}};let d=document.body;(0,ve.kK)(e.appendTo)?d=e.appendTo:(0,a.HD)(e.appendTo)&&(d=document.querySelector(e.appendTo)),(0,ve.kK)(d)||((0,B.N)("ElMessage","the appendTo option is not an HTMLElement. Falling back to document.body."),d=document.body);const p=document.createElement("div");p.className=`container_${s}`;const c=r.message,f=(0,o.Wm)(fe,r,(0,a.mf)(c)?{default:c}:(0,o.lA)(c)?{default:()=>c}:null);return f.appContext=t||Ce._context,f.props.onDestroy=()=>{(0,i.sY)(null,p)},(0,i.sY)(f,p),be.push({vm:f}),d.appendChild(p.firstElementChild),{close:()=>f.component.proxy.visible=!1}};function _e(e,t){const l=be.findIndex((({vm:t})=>e===t.component.props.id));if(-1===l)return;const{vm:n}=be[l];if(!n)return;null==t||t(n);const o=n.el.offsetHeight;be.splice(l,1);const a=be.length;if(!(a<1))for(let s=l;s<a;s++){const e=Number.parseInt(be[s].vm.el.style["top"],10)-o-16;be[s].vm.component.props.offset=e}}function we(){var e;for(let t=be.length-1;t>=0;t--){const l=be[t].vm.component;null==(e=null==l?void 0:l.proxy)||e.close()}}se.forEach((e=>{Ce[e]=(t={},l)=>(((0,a.HD)(t)||(0,o.lA)(t))&&(t={message:t}),Ce({...t,type:e},l))})),Ce.closeAll=we,Ce._context=null;const Se=(0,R.oN)(Ce,"$message"),ke=(0,o.Uk)("点击"),Ue=(0,o.Uk)("带验证的点击"),he=["value"],xe=["value"];function We(e,t,l,n,s,i){const u=F.mi,r=M.Kf;return(0,o.wg)(),(0,o.j4)(r,{style:{"margin-top":"10px"},header:"这是emit自定义事件测试的组件"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{onClick:i.onClick},{default:(0,o.w5)((()=>[ke])),_:1},8,["onClick"]),(0,o.Wm)(u,{onClick:i.clickRequired},{default:(0,o.w5)((()=>[Ue])),_:1},8,["onClick"]),(0,o._)("div",null,[(0,o._)("p",null,"v-model子组件title："+(0,a.zw)(l.title),1),(0,o._)("p",null,"v-model子组件age："+(0,a.zw)(l.age),1),(0,o._)("input",{type:"text",value:l.title,onInput:t[0]||(t[0]=(...e)=>i.titleEmit&&i.titleEmit(...e))},null,40,he),(0,o._)("input",{type:"number",value:l.age,onInput:t[1]||(t[1]=t=>e.$emit("update:age",t.target.value))},null,40,xe)])])),_:1})}var ze={name:"ComponentEmit",props:{title:String,titleModifiers:{default:()=>({})},age:Number},emits:{myClick:null,clickRequired:({age:e})=>e>10&&e<20,"update:title":null,"update:age":null},methods:{titleEmit(e){let t=e.target.value;this.titleModifiers.capitalize&&(t=`${t.charAt(0).toUpperCase()}${t.substring(1)}`),this.$emit("update:title",t)},onClick(){this.$emit("myClick",{info:"myclick msg"})},clickRequired(){this.$emit("clickRequired",{info:"clickRequired",age:12})}}},Ie=l(89);const $e=(0,Ie.Z)(ze,[["render",We]]);var je=$e;const Be={style:{color:"red"}},qe=(0,o._)("p",null,"子组件自己的内容",-1),Ne=(0,o._)("p",null,"子组件自己的内容222",-1),Ee=(0,o._)("p",null,"子组件自己的内容333",-1),He=(0,o._)("p",null,"子组件自己的内容444",-1),Re=(0,o._)("p",null,"子组件自己的内容555",-1);function De(e,t,l,n,s,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("p",Be,(0,a.zw)(s.text),1),qe,(0,o.WI)(e.$slots,"slot1",{info:s.slot1Info}),Ne,(0,o.WI)(e.$slots,"slot2"),Ee,(0,o.WI)(e.$slots,"slot3"),He,(0,o.WI)(e.$slots,"default"),Re,(0,o.WI)(e.$slots,"default")],64)}var Te={name:"ComponentSlot",data(){return{text:"v-slot 只能添加在 <template> 上 (只有一种例外情况:独占默认插槽的缩写语法)。",slot1Info:{name:"slot1",text:"slot1 text"}}}};const Fe=(0,Ie.Z)(Te,[["render",De]]);var Me=Fe;function Ve(e,t,l,n,s,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("p",null,"父组件传值给深层次的子组件--"+(0,a.zw)(i.title),1),(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.users,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.name},(0,a.zw)(e.name)+" -- "+(0,a.zw)(e.age),1)))),128))])],64)}var Ze={name:"ComponentProvide",inject:["users","title"]};const Le=(0,Ie.Z)(Ze,[["render",Ve]]);var Ae=Le,Pe={name:"ComponentInfoIndex",components:{ComponentLocal:(0,o.RC)((()=>l.e(1).then(l.bind(l,1001)))),ComponentEmit:je,ComponentSlot:Me,ComponentProvide:Ae},provide(){return{users:this.users,title:this.title}},data(){return{radioValue:2,title:"张三",age:25,users:[{name:"张三",age:25},{name:"李四",age:26},{name:"王二",age:277},{name:"曹五",age:2325}]}},computed:{currentTabComponent(){const e=["ComponentEmit","ComponentSlot","ComponentProvide"];return e[this.radioValue-1]}},methods:{attrClick({target:e}){Se({message:`这是通过attr触发的，选中的值是：${e.value}`,type:"warning"})},emitClick(e){Se({message:`这是子组件emit过来的：${JSON.stringify(e)}`,type:"warning"})},emitClickRequired(e){Se({message:`这是子组件emit过来的：${JSON.stringify(e)}`,type:"warning"})},changeUsers(){this.users.push({name:"sadf",age:2}),this.title=`change title ${(new Date).getTime()}`}}};const Ye=(0,Ie.Z)(Pe,[["render",Y]]);var Ke=Ye}}]);
//# sourceMappingURL=569.11e899e4.js.map