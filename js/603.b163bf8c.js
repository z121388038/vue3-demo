"use strict";(self["webpackChunkvue3_test"]=self["webpackChunkvue3_test"]||[]).push([[603],{4603:function(e,t,l){l.r(t),l.d(t,{default:function(){return Ut}});l(3480),l(9087),l(2181),l(924),l(3495);var n=l(1926),a=l(3396),o=l(4870),i=l(7139),s=l(9242),r=l(6367),u=l(3365),c=l(1727),d=l(3034),p=l(581);let v;const m="\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n",f=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function w(e){const t=window.getComputedStyle(e),l=t.getPropertyValue("box-sizing"),n=Number.parseFloat(t.getPropertyValue("padding-bottom"))+Number.parseFloat(t.getPropertyValue("padding-top")),a=Number.parseFloat(t.getPropertyValue("border-bottom-width"))+Number.parseFloat(t.getPropertyValue("border-top-width")),o=f.map((e=>`${e}:${t.getPropertyValue(e)}`)).join(";");return{contextStyle:o,paddingSize:n,borderSize:a,boxSizing:l}}function g(e,t=1,l){var n;v||(v=document.createElement("textarea"),document.body.appendChild(v));const{paddingSize:a,borderSize:o,boxSizing:i,contextStyle:s}=w(e);v.setAttribute("style",`${s};${m}`),v.value=e.value||e.placeholder||"";let r=v.scrollHeight;const c={};"border-box"===i?r+=o:"content-box"===i&&(r-=a),v.value="";const d=v.scrollHeight-a;if((0,u.hj)(t)){let e=d*t;"border-box"===i&&(e=e+a+o),r=Math.max(e,r),c.minHeight=`${e}px`}if((0,u.hj)(l)){let e=d*l;"border-box"===i&&(e=e+a+o),r=Math.min(e,r)}return c.height=`${r}px`,null==(n=v.parentNode)||n.removeChild(v),v=void 0,c}var h=l(191),y=l(336),S=l(1008),x=l(4248),_=l(8425);const b=(0,h.o8)({id:{type:String,default:void 0},size:y.Pp,disabled:Boolean,modelValue:{type:(0,h.Cq)([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:(0,h.Cq)([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String,default:""},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:S.AA,default:""},prefixIcon:{type:S.AA,default:""},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:(0,h.Cq)([Object,Array,String]),default:()=>(0,x.N)({})}}),U={[_.f_]:e=>(0,i.HD)(e),input:e=>(0,i.HD)(e),change:e=>(0,i.HD)(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent};var k=l(5989),C=(l(6699),l(8149)),H=l(8775);const D=["class","style"],W=/^on[A-Z]/,z=(e={})=>{const{excludeListeners:t=!1,excludeKeys:l}=e,n=(0,a.Fl)((()=>((null==l?void 0:l.value)||[]).concat(D))),o=(0,a.FN)();return o?(0,a.Fl)((()=>{var e;return(0,C.Z)(Object.entries(null==(e=o.proxy)?void 0:e.$attrs).filter((([e])=>!n.value.includes(e)&&!(t&&W.test(e)))))})):((0,H.N)("use-attrs","getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"),(0,a.Fl)((()=>({}))))};var F=l(148),q=l(9668);function I(e){const t=(0,o.iH)();function l(){if(void 0==e.value)return;const{selectionStart:l,selectionEnd:n,value:a}=e.value;if(null==l||null==n)return;const o=a.slice(0,Math.max(0,l)),i=a.slice(Math.max(0,n));t.value={selectionStart:l,selectionEnd:n,value:a,beforeTxt:o,afterTxt:i}}function n(){if(void 0==e.value||void 0==t.value)return;const{value:l}=e.value,{beforeTxt:n,afterTxt:a,selectionStart:o}=t.value;if(void 0==n||void 0==a||void 0==o)return;let i=l.length;if(l.endsWith(a))i=l.length-a.length;else if(l.startsWith(n))i=n.length;else{const e=n[o-1],t=l.indexOf(e,o-1);-1!==t&&(i=t+1)}e.value.setSelectionRange(i,i)}return[l,n]}const $=e=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e),j=["role"],M=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder"],V=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder"],Y={name:"ElInput",inheritAttrs:!1},N=(0,a.aZ)({...Y,props:b,emits:U,setup(e,{expose:t,emit:l}){const n=e,v={suffix:"append",prefix:"prepend"},m=(0,a.FN)(),f=(0,a.l1)(),w=(0,a.Rr)(),h=(0,a.Fl)((()=>{const e={};return"combobox"===n.containerRole&&(e["aria-haspopup"]=f["aria-haspopup"],e["aria-owns"]=f["aria-owns"],e["aria-expanded"]=f["aria-expanded"]),e})),x=z({excludeKeys:(0,a.Fl)((()=>Object.keys(h.value)))}),{form:b,formItem:U}=(0,F.A)(),{inputId:k}=(0,F.p)(n,{formItemContext:U}),C=(0,y.tH)(),D=(0,y.B4)(),W=(0,q.s)("input"),Y=(0,q.s)("textarea"),N=(0,o.XI)(),Z=(0,o.XI)(),E=(0,o.iH)(!1),P=(0,o.iH)(!1),T=(0,o.iH)(!1),A=(0,o.iH)(!1),L=(0,o.iH)(),B=(0,o.XI)(n.inputStyle),K=(0,a.Fl)((()=>N.value||Z.value)),O=(0,a.Fl)((()=>{var e;return null!=(e=null==b?void 0:b.statusIcon)&&e})),R=(0,a.Fl)((()=>(null==U?void 0:U.validateState)||"")),G=(0,a.Fl)((()=>S.rU[R.value])),X=(0,a.Fl)((()=>A.value?p.G7x:p.caK)),Q=(0,a.Fl)((()=>[f.style,n.inputStyle])),J=(0,a.Fl)((()=>[n.inputStyle,B.value,{resize:n.resize}])),ee=(0,a.Fl)((()=>(0,c.Z)(n.modelValue)?"":String(n.modelValue))),te=(0,a.Fl)((()=>n.clearable&&!D.value&&!n.readonly&&!!ee.value&&(E.value||P.value))),le=(0,a.Fl)((()=>n.showPassword&&!D.value&&!n.readonly&&(!!ee.value||E.value))),ne=(0,a.Fl)((()=>n.showWordLimit&&!!x.value.maxlength&&("text"===n.type||"textarea"===n.type)&&!D.value&&!n.readonly&&!n.showPassword)),ae=(0,a.Fl)((()=>Array.from(ee.value).length)),oe=(0,a.Fl)((()=>!!ne.value&&ae.value>Number(x.value.maxlength))),ie=(0,a.Fl)((()=>!!w.suffix||!!n.suffixIcon||te.value||n.showPassword||ne.value||!!R.value&&O.value)),[se,re]=I(N);(0,r.yU7)(Z,(e=>{if(!ne.value||"both"!==n.resize)return;const t=e[0],{width:l}=t.contentRect;L.value={right:`calc(100% - ${l+15+6}px)`}}));const ue=()=>{const{type:e,autosize:t}=n;if(u.C5&&"textarea"===e)if(t){const e=(0,i.Kn)(t)?t.minRows:void 0,l=(0,i.Kn)(t)?t.maxRows:void 0;B.value={...g(Z.value,e,l)}}else B.value={minHeight:g(Z.value).minHeight}},ce=()=>{const e=K.value;e&&e.value!==ee.value&&(e.value=ee.value)},de=e=>{const{el:t}=m.vnode;if(!t)return;const l=Array.from(t.querySelectorAll(`.${W.e(e)}`)),n=l.find((e=>e.parentNode===t));if(!n)return;const a=v[e];w[a]?n.style.transform=`translateX(${"suffix"===e?"-":""}${t.querySelector(`.${W.be("group",a)}`).offsetWidth}px)`:n.removeAttribute("style")},pe=()=>{de("prefix"),de("suffix")},ve=async e=>{se();let{value:t}=e.target;n.formatter&&(t=n.parser?n.parser(t):t,t=n.formatter(t)),T.value||t!==ee.value&&(l(_.f_,t),l("input",t),await(0,a.Y3)(),ce(),re())},me=e=>{l("change",e.target.value)},fe=e=>{l("compositionstart",e),T.value=!0},we=e=>{var t;l("compositionupdate",e);const n=null==(t=e.target)?void 0:t.value,a=n[n.length-1]||"";T.value=!$(a)},ge=e=>{l("compositionend",e),T.value&&(T.value=!1,ve(e))},he=()=>{A.value=!A.value,ye()},ye=async()=>{var e;await(0,a.Y3)(),null==(e=K.value)||e.focus()},Se=()=>{var e;return null==(e=K.value)?void 0:e.blur()},xe=e=>{E.value=!0,l("focus",e)},_e=e=>{var t;E.value=!1,l("blur",e),n.validateEvent&&(null==(t=null==U?void 0:U.validate)||t.call(U,"blur").catch((e=>(0,H.N)(e))))},be=e=>{P.value=!1,l("mouseleave",e)},Ue=e=>{P.value=!0,l("mouseenter",e)},ke=e=>{l("keydown",e)},Ce=()=>{var e;null==(e=K.value)||e.select()},He=()=>{l(_.f_,""),l("change",""),l("clear"),l("input","")};return(0,a.YP)((()=>n.modelValue),(()=>{var e;(0,a.Y3)((()=>ue())),n.validateEvent&&(null==(e=null==U?void 0:U.validate)||e.call(U,"change").catch((e=>(0,H.N)(e))))})),(0,a.YP)(ee,(()=>ce())),(0,a.YP)((()=>n.type),(async()=>{await(0,a.Y3)(),ce(),ue(),pe()})),(0,a.bv)((async()=>{!n.formatter&&n.parser&&(0,H.N)("ElInput","If you set the parser, you also need to set the formatter."),ce(),pe(),await(0,a.Y3)(),ue()})),(0,a.ic)((async()=>{await(0,a.Y3)(),pe()})),t({input:N,textarea:Z,ref:K,textareaStyle:J,autosize:(0,o.Vh)(n,"autosize"),focus:ye,blur:Se,select:Ce,clear:He,resizeTextarea:ue}),(e,t)=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",(0,a.dG)((0,o.SU)(h),{class:["textarea"===e.type?(0,o.SU)(Y).b():(0,o.SU)(W).b(),(0,o.SU)(W).m((0,o.SU)(C)),(0,o.SU)(W).is("disabled",(0,o.SU)(D)),(0,o.SU)(W).is("exceed",(0,o.SU)(oe)),{[(0,o.SU)(W).b("group")]:e.$slots.prepend||e.$slots.append,[(0,o.SU)(W).bm("group","append")]:e.$slots.append,[(0,o.SU)(W).bm("group","prepend")]:e.$slots.prepend,[(0,o.SU)(W).m("prefix")]:e.$slots.prefix||e.prefixIcon,[(0,o.SU)(W).m("suffix")]:e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword,[(0,o.SU)(W).bm("suffix","password-clear")]:(0,o.SU)(te)&&(0,o.SU)(le)},e.$attrs.class],style:(0,o.SU)(Q),role:e.containerRole,onMouseenter:Ue,onMouseleave:be}),[(0,a.kq)(" input "),"textarea"!==e.type?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a.kq)(" prepend slot "),e.$slots.prepend?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,i.C_)((0,o.SU)(W).be("group","prepend"))},[(0,a.WI)(e.$slots,"prepend")],2)):(0,a.kq)("v-if",!0),(0,a._)("div",{class:(0,i.C_)([(0,o.SU)(W).e("wrapper"),(0,o.SU)(W).is("focus",E.value)])},[(0,a.kq)(" prefix slot "),e.$slots.prefix||e.prefixIcon?((0,a.wg)(),(0,a.iD)("span",{key:0,class:(0,i.C_)((0,o.SU)(W).e("prefix"))},[(0,a._)("span",{class:(0,i.C_)((0,o.SU)(W).e("prefix-inner"))},[(0,a.WI)(e.$slots,"prefix"),e.prefixIcon?((0,a.wg)(),(0,a.j4)((0,o.SU)(d.gn),{key:0,class:(0,i.C_)((0,o.SU)(W).e("icon"))},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(e.prefixIcon)))])),_:1},8,["class"])):(0,a.kq)("v-if",!0)],2)],2)):(0,a.kq)("v-if",!0),(0,a._)("input",(0,a.dG)({id:(0,o.SU)(k),ref_key:"input",ref:N,class:(0,o.SU)(W).e("inner")},(0,o.SU)(x),{type:e.showPassword?A.value?"text":"password":e.type,disabled:(0,o.SU)(D),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,onCompositionstart:fe,onCompositionupdate:we,onCompositionend:ge,onInput:ve,onFocus:xe,onBlur:_e,onChange:me,onKeydown:ke}),null,16,M),(0,a.kq)(" suffix slot "),(0,o.SU)(ie)?((0,a.wg)(),(0,a.iD)("span",{key:1,class:(0,i.C_)((0,o.SU)(W).e("suffix"))},[(0,a._)("span",{class:(0,i.C_)((0,o.SU)(W).e("suffix-inner"))},[(0,o.SU)(te)&&(0,o.SU)(le)&&(0,o.SU)(ne)?(0,a.kq)("v-if",!0):((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a.WI)(e.$slots,"suffix"),e.suffixIcon?((0,a.wg)(),(0,a.j4)((0,o.SU)(d.gn),{key:0,class:(0,i.C_)((0,o.SU)(W).e("icon"))},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(e.suffixIcon)))])),_:1},8,["class"])):(0,a.kq)("v-if",!0)],64)),(0,o.SU)(te)?((0,a.wg)(),(0,a.j4)((0,o.SU)(d.gn),{key:1,class:(0,i.C_)([(0,o.SU)(W).e("icon"),(0,o.SU)(W).e("clear")]),onMousedown:t[0]||(t[0]=(0,s.iM)((()=>{}),["prevent"])),onClick:He},{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(p.K41))])),_:1},8,["class"])):(0,a.kq)("v-if",!0),(0,o.SU)(le)?((0,a.wg)(),(0,a.j4)((0,o.SU)(d.gn),{key:2,class:(0,i.C_)([(0,o.SU)(W).e("icon"),(0,o.SU)(W).e("password")]),onClick:he},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)((0,o.SU)(X))))])),_:1},8,["class"])):(0,a.kq)("v-if",!0),(0,o.SU)(ne)?((0,a.wg)(),(0,a.iD)("span",{key:3,class:(0,i.C_)((0,o.SU)(W).e("count"))},[(0,a._)("span",{class:(0,i.C_)((0,o.SU)(W).e("count-inner"))},(0,i.zw)((0,o.SU)(ae))+" / "+(0,i.zw)((0,o.SU)(x).maxlength),3)],2)):(0,a.kq)("v-if",!0),(0,o.SU)(R)&&(0,o.SU)(G)&&(0,o.SU)(O)?((0,a.wg)(),(0,a.j4)((0,o.SU)(d.gn),{key:4,class:(0,i.C_)([(0,o.SU)(W).e("icon"),(0,o.SU)(W).e("validateIcon"),(0,o.SU)(W).is("loading","validating"===(0,o.SU)(R))])},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)((0,o.SU)(G))))])),_:1},8,["class"])):(0,a.kq)("v-if",!0)],2)],2)):(0,a.kq)("v-if",!0)],2),(0,a.kq)(" append slot "),e.$slots.append?((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,i.C_)((0,o.SU)(W).be("group","append"))},[(0,a.WI)(e.$slots,"append")],2)):(0,a.kq)("v-if",!0)],64)):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.kq)(" textarea "),(0,a._)("textarea",(0,a.dG)({id:(0,o.SU)(k),ref_key:"textarea",ref:Z,class:(0,o.SU)(Y).e("inner")},(0,o.SU)(x),{tabindex:e.tabindex,disabled:(0,o.SU)(D),readonly:e.readonly,autocomplete:e.autocomplete,style:(0,o.SU)(J),"aria-label":e.label,placeholder:e.placeholder,onCompositionstart:fe,onCompositionupdate:we,onCompositionend:ge,onInput:ve,onFocus:xe,onBlur:_e,onChange:me,onKeydown:ke}),null,16,V),(0,o.SU)(ne)?((0,a.wg)(),(0,a.iD)("span",{key:0,style:(0,i.j5)(L.value),class:(0,i.C_)((0,o.SU)(W).e("count"))},(0,i.zw)((0,o.SU)(ae))+" / "+(0,i.zw)((0,o.SU)(x).maxlength),7)):(0,a.kq)("v-if",!0)],64))],16,j)),[[s.F8,"hidden"!==e.type]])}});var Z=(0,k.Z)(N,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]),E=l(3821);const P=(0,E.nz)(Z);var T=l(1415),A=l(8298),L=l(9547);const B=(0,h.o8)({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:L.k,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),K={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},O={name:"ElTag"},R=(0,a.aZ)({...O,props:B,emits:K,setup(e,{emit:t}){const l=e,n=(0,y.tH)(),r=(0,q.s)("tag"),u=(0,a.Fl)((()=>{const{type:e,hit:t,effect:a,closable:o,round:i}=l;return[r.b(),r.is("closable",o),r.m(e),r.m(n.value),r.m(a),r.is("hit",t),r.is("round",i)]})),c=e=>{t("close",e)},v=e=>{t("click",e)};return(e,t)=>e.disableTransitions?((0,a.wg)(),(0,a.j4)(s.uT,{key:1,name:`${(0,o.SU)(r).namespace.value}-zoom-in-center`},{default:(0,a.w5)((()=>[(0,a._)("span",{class:(0,i.C_)((0,o.SU)(u)),style:(0,i.j5)({backgroundColor:e.color}),onClick:v},[(0,a._)("span",{class:(0,i.C_)((0,o.SU)(r).e("content"))},[(0,a.WI)(e.$slots,"default")],2),e.closable?((0,a.wg)(),(0,a.j4)((0,o.SU)(d.gn),{key:0,class:(0,i.C_)((0,o.SU)(r).e("close")),onClick:(0,s.iM)(c,["stop"])},{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(p.x8P))])),_:1},8,["class","onClick"])):(0,a.kq)("v-if",!0)],6)])),_:3},8,["name"])):((0,a.wg)(),(0,a.iD)("span",{key:0,class:(0,i.C_)((0,o.SU)(u)),style:(0,i.j5)({backgroundColor:e.color}),onClick:v},[(0,a._)("span",{class:(0,i.C_)((0,o.SU)(r).e("content"))},[(0,a.WI)(e.$slots,"default")],2),e.closable?((0,a.wg)(),(0,a.j4)((0,o.SU)(d.gn),{key:0,class:(0,i.C_)((0,o.SU)(r).e("close")),onClick:(0,s.iM)(c,["stop"])},{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(p.x8P))])),_:1},8,["class","onClick"])):(0,a.kq)("v-if",!0)],6))}});var G=(0,k.Z)(R,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const X=(0,E.nz)(G),Q=["textContent"];var J=(0,a.aZ)({name:"VText",setup(e){const t=(0,o.iH)("这是v-text的文案啊");return(e,l)=>((0,a.wg)(),(0,a.iD)("p",{textContent:(0,i.zw)(t.value)},null,8,Q))}});const ee=J;var te=ee;const le=["innerHTML"];var ne=(0,a.aZ)({name:"VHtml",setup(e){const t=(0,o.iH)('<h2>这是v-html的h2标签啊</h2><h3 style="color: red;">这是v-html的h3标签啊,红色字体</h3>');return(e,l)=>((0,a.wg)(),(0,a.iD)("div",{innerHTML:t.value},null,8,le))}});const ae=ne;var oe=ae;const ie=(0,a._)("p",null," 跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。 ",-1),se=(0,a._)("p",null," 通俗点说：比如你显示{{ xxx }}这样的文字，如果带上v-pre指令，编译的时候就不会去解析这个节点，你原本是什么样的就给你展示成什么样的 ",-1),re=(0,a._)("p",null,"{{ this will not be compiled }}",-1);function ue(e,t){return(0,a.wg)(),(0,a.iD)(a.HY,null,[ie,se,re],64)}var ce=l(89);const de={},pe=(0,ce.Z)(de,[["render",ue]]);var ve=pe;const me=(0,a._)("p",null,"v-show该节点会一直存在，只是切换元素的 display",-1),fe=(0,a.Uk)("点击显示隐藏");var we=(0,a.aZ)({name:"VShow",setup(e){const t=(0,o.iH)(!1);return(e,l)=>{const n=T.mi;return(0,a.wg)(),(0,a.iD)(a.HY,null,[me,(0,a.Wm)(n,{onClick:l[0]||(l[0]=e=>t.value=!t.value)},{default:(0,a.w5)((()=>[fe])),_:1}),(0,a.wy)((0,a._)("p",null,(0,i.zw)(t.value),513),[[s.F8,t.value]])],64)}}});const ge=we;var he=ge;function ye(e,t){return(0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)({name:"张三",age:26,gender:"男"},((e,t,l)=>(0,a._)("p",{key:t},(0,i.zw)(t)+"："+(0,i.zw)(e)+"--"+(0,i.zw)(l),1))),64)}const Se={},xe=(0,ce.Z)(Se,[["render",ye]]);var _e=xe;const be=(0,a._)("p",null," 只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。 ",-1),Ue=(0,a._)("p",null,"自 3.2 开始，你还可以通过 v-memo 来记住带有失效条件的部分模板。",-1);var ke=(0,a.aZ)({name:"VOnce",setup(e){const t=(0,o.iH)("hello");return(e,l)=>((0,a.wg)(),(0,a.iD)("div",null,[be,l[0]||((0,a.qZ)(-1),l[0]=(0,a._)("p",null,[(0,a.Uk)("这是msg: "+(0,i.zw)(t.value),1)]),(0,a.qZ)(1),l[0]),Ue]))}});const Ce=ke;var He=Ce;const De=(0,a._)("p",null,"3.2新增指令",-1),We=(0,a._)("p",null," 记住一个模板的子树，元素和组件都可使用。该指令接受一个固定长度的数组作为依赖值进行记忆比对。如果数组中的每个值和上次渲染的时候相同，则整个该子树的更新都会被跳过 ",-1),ze=(0,a._)("p",null," v-memo 仅供性能敏感场景的针对性优化，会用到的场景应该很少。渲染 v-for 长列表 (长度大于 1000) 可能是它最有用的场景： ",-1),Fe=(0,a.Uk)(" 当组件的 selected 状态发生变化时，即使绝大多数 item 都没有发生任何变化，大量的 VNode 仍将被创建。此处使用的 v-memo 本质上代表着“仅在 item 从未选中变为选中时更新它，反之亦然”。这允许每个未受影响的 item 重用之前的 VNode，并完全跳过差异比较。注意，我们不需要把 item.id 包含在记忆依赖数组里面，因为 Vue 可以自动从 item 的 :key 中把它推断出来。 ");var qe=(0,a.aZ)({name:"VMemo",setup(e){const t=(0,o.qj)([{name:"张三",id:1},{name:"李四",id:2},{name:"王二",id:3},{name:"赵五",id:4},{name:"曹六",id:5}]),l=(0,o.iH)(1);return(e,n)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[De,We,ze,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t,((e,t,n,o)=>{const s=[e.id===l.value];if(o&&o.key===e.id&&(0,a.nQ)(o,s))return o;const r=((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a._)("p",null,"ID: "+(0,i.zw)(e.id)+" - selected: "+(0,i.zw)(e.id===l.value),1)]));return r.memo=s,r}),n,0),128)),Fe],64))}});const Ie=qe;var $e=Ie;const je=(0,a._)("h4",null,"修饰符有以下几种：",-1),Me=(0,a._)("ul",null,[(0,a._)("li",null,".lazy：把默认的监听 input 事件改为监听 change"),(0,a._)("li",null,".number：输入字符串转为有效的数字"),(0,a._)("li",null,".trim：去除输入的首尾空格")],-1),Ve=(0,a._)("h4",null,"该指令只能用于：input、textarea、select、components这几个标签",-1);var Ye=(0,a.aZ)({name:"VModel",setup(e){const t=(0,o.iH)("");return(e,l)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),placeholder:"请输入"},null,512),[[s.nr,t.value,void 0,{trim:!0}]]),(0,a._)("p",null,"value值为: "+(0,i.zw)(t.value),1),je,Me,Ve],64))}});const Ne=Ye;var Ze=Ne;const Ee=(0,a._)("p",null," 这个指令保持在元素上直到关联组件实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到组件实例准备完毕。 ",-1),Pe=(0,a._)("h4",null,"作用：为了防止在页面加载时先出现变量名闪烁的情况，造成不好的用户体验",-1),Te=["innerHTML"],Ae=(0,a._)("p",null,"用法：",-1),Le=(0,a._)("p",{innerHTML:"html中： {{ msg }}"},null,-1),Be=(0,a._)("p",{innerHTML:"css中[v-cloak] { display:none }"},null,-1);var Ke=(0,a.aZ)({name:"VCloak",setup(e){const t=(0,o.iH)("hello");return(e,l)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",null,(0,i.zw)(t.value),1),Ee,Pe,(0,a._)("p",{innerHTML:"例如：{{ msg }} (闪一下)=> hello"},null,8,Te),Ae,Le,Be],64))}});const Oe=Ke;var Re=Oe;const Ge=(0,a.uE)("<h4> 绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。 </h4><h4>缩写为：@[event]=&quot;xxx&quot;</h4><h4>修饰符有以下几种：</h4><ul><li>.stop：阻止单击事件继续冒泡</li><li>.prevent：阻止浏览器默认行为</li><li>.capture：添加事件侦听器时使用事件捕获模式</li><li>.self：只执行直接作用在该元素身上的事件，会忽略其他元素的冒泡或者捕获事件</li><li>.once：事件只会触发一次</li><li>.passive：告诉浏览器不用去查询，我们没用preventDefault阻止默认行为</li><li>.{keyAlias}：仅当事件是从特定键触发时才触发回调。</li><li>.left：只当点击鼠标左键时触发。</li><li>.right：只当点击鼠标右键时触发。</li><li>.middle：只当点击鼠标中键时触发。</li></ul>",4);function Xe(e,t){return Ge}const Qe={},Je=(0,ce.Z)(Qe,[["render",Xe]]);var et=Je;const tt=(0,a._)("p",null,"动态地绑定一个或多个 attribute，或一个组件 prop 到表达式。",-1),lt=(0,a._)("h4",null,"缩写为: 或 . (当使用 .prop 修饰符时)",-1),nt=(0,a._)("h4",null,"修饰符有以下几种：",-1),at=(0,a._)("ul",null,[(0,a._)("li",null,".camel：将 kebab-case attribute 名转换为 camelCase。"),(0,a._)("li",null,".attr：将一个绑定强制设置为一个 DOM attribute。（3.2新增）"),(0,a._)("li",null,".prop：将一个绑定强制设置为一个 DOM property。（3.2新增）")],-1);function ot(e,t){return(0,a.wg)(),(0,a.iD)(a.HY,null,[tt,lt,nt,at],64)}const it={},st=(0,ce.Z)(it,[["render",ot]]);var rt=st;const ut=(0,a._)("h4",null,"提供具名插槽或需要接收 prop 的插槽。",-1),ct=(0,a._)("h4",null,"插槽名 (可选，默认值是 default)",-1),dt=(0,a._)("h4",null,"缩写为：#",-1),pt=(0,a._)("h4",null,"适用于：template标签上面",-1);function vt(e,t){return(0,a.wg)(),(0,a.iD)(a.HY,null,[ut,ct,dt,pt],64)}const mt={},ft=(0,ce.Z)(mt,[["render",vt]]);var wt=ft;const gt=(0,a._)("ul",null,[(0,a._)("li",null,"v-is: 已在 3.1.0 中被废弃。请换用带有 vue: 前缀的 is attribute。"),(0,a._)("li",null,"v-memo: 3.2新增指令")],-1),ht=(0,a.Uk)("自己先想想指令有哪些钩子，再点击看对不对"),yt={key:0},St=(0,a.Uk)("setup中局部注册自定义指令"),xt=(0,a._)("p",null," setup中局部注册自定义指令必须以 vNameOfDirective 的形式来命名本地自定义指令，以使得它们可以直接在模板中使用。 ",-1);var _t=(0,a.aZ)({name:"Directive",setup(e){const t={mounted:e=>{e.style.background="red"}},l=(0,o.iH)(["v-text","v-html","v-pre","v-if","v-else","v-else-if","v-show","v-for","v-once","v-memo","v-slot","v-on","v-bind","v-model","v-cloak","v-is"]),s=(0,o.iH)((new Date).getTime()),r=()=>s.value=(new Date).getTime(),u=(0,o.iH)("#4598d2"),c=()=>u.value=`#${("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)}`,d=(0,o.iH)(""),p=(0,o.iH)(!1),v=(0,o.iH)([{name:"created",desc:"在绑定元素的 attribute 或事件监听器被应用之前调用。在指令需要附加在普通的 v-on 事件监听器调用前的事件监听器中时，这很有用。",showDesc:!1},{name:"beforeMount",desc:"当指令第一次绑定到元素并且在挂载父组件之前调用。",showDesc:!1},{name:"mounted",desc:"在绑定元素的父组件被挂载后调用。",showDesc:!1},{name:"beforeUpdate",desc:"在更新包含组件的 VNode 之前调用。",showDesc:!1},{name:"updated",desc:"在包含组件的 VNode 及其子组件的 VNode 更新后调用。",showDesc:!1},{name:"beforeUnmount",desc:"在卸载绑定元素的父组件之前调用",showDesc:!1},{name:"unmounted",desc:"当指令与元素解除绑定且父组件已卸载时，只调用一次。",showDesc:!1}]);return(e,o)=>{const m=X,f=A.Kf,w=T.mi,g=P,h=n.aE,y=n.PH,S=(0,a.Q2)("debounce"),x=(0,a.Q2)("background");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(f,{header:`vue内置指令：${l.value.length} 个`},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.value,(e=>((0,a.wg)(),(0,a.j4)(m,{key:e,style:{"margin-bottom":"5px","margin-right":"5px"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e),1)])),_:2},1024)))),128)),gt])),_:1},8,["header"]),(0,a.Wm)(f,{header:"有哪些钩子",style:{"margin-top":"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{onClick:o[0]||(o[0]=e=>p.value=!p.value)},{default:(0,a.w5)((()=>[ht])),_:1}),(0,a.Wm)(g,{style:{"margin-top":"10px"},modelValue:d.value,"onUpdate:modelValue":o[1]||(o[1]=e=>d.value=e),placeholder:"请输入你想的钩子"},null,8,["modelValue"]),p.value?((0,a.wg)(),(0,a.iD)("ul",yt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(v.value,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.name},[(0,a.Wm)(w,{type:"text",onClick:t=>e.showDesc=!e.showDesc},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.name)+"："+(0,i.zw)(e.showDesc?e.desc:"描述又是啥呢？"),1)])),_:2},1032,["onClick"])])))),128))])):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(f,{style:{"margin-top":"10px"},header:"自定义指令"},{default:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.j4)(w,null,{default:(0,a.w5)((()=>[(0,a.Uk)("这里是防抖指令，快速点击试试:"+(0,i.zw)(s.value),1)])),_:1})),[[S,r]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(w,{style:{color:"white"},onClick:c},{default:(0,a.w5)((()=>[(0,a.Uk)(" 这里是设置背景色指令："+(0,i.zw)(u.value),1)])),_:1})),[[x,u.value]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(w,{style:{color:"white"}},{default:(0,a.w5)((()=>[St])),_:1})),[[t]]),xt])),_:1}),(0,a.Wm)(f,{header:"16个内置指令示例",style:{"margin-top":"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,{title:"v-text示例"},{default:(0,a.w5)((()=>[(0,a.Wm)(te)])),_:1}),(0,a.Wm)(h,{title:"v-html示例"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe)])),_:1}),(0,a.Wm)(h,{title:"v-pre示例"},{default:(0,a.w5)((()=>[(0,a.Wm)(ve)])),_:1}),(0,a.Wm)(h,{title:"v-show示例"},{default:(0,a.w5)((()=>[(0,a.Wm)(he)])),_:1}),(0,a.Wm)(h,{title:"v-for示例"},{default:(0,a.w5)((()=>[(0,a.Wm)(_e)])),_:1}),(0,a.Wm)(h,{title:"v-once示例"},{default:(0,a.w5)((()=>[(0,a.Wm)(He)])),_:1}),(0,a.Wm)(h,{title:"v-mome示例"},{default:(0,a.w5)((()=>[(0,a.Wm)($e)])),_:1}),(0,a.Wm)(h,{title:"v-model示例"},{default:(0,a.w5)((()=>[(0,a.Wm)(Ze)])),_:1}),(0,a.Wm)(h,{title:"v-on示例"},{default:(0,a.w5)((()=>[(0,a.Wm)(et)])),_:1}),(0,a.Wm)(h,{title:"v-bind示例"},{default:(0,a.w5)((()=>[(0,a.Wm)(rt)])),_:1}),(0,a.Wm)(h,{title:"v-slot示例"},{default:(0,a.w5)((()=>[(0,a.Wm)(wt)])),_:1}),(0,a.Wm)(h,{title:"v-cloak示例"},{default:(0,a.w5)((()=>[(0,a.Wm)(Re)])),_:1})])),_:1})])),_:1})],64)}}});const bt=_t;var Ut=bt}}]);
//# sourceMappingURL=603.b163bf8c.js.map