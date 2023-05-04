"use strict";(self.webpackChunknew_gatsby=self.webpackChunknew_gatsby||[]).push([[538],{5075:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var o=a(7294),n=a(4854),r=a(8032),i=a(486),l=a(6089),s=a(7182),d=a(2658),c=a(3366),p=a(7462),u=a(6010),m=a(7925),v=a(4780),h=a(1796),b=a(948),g=a(1657),x=a(2228),S=a(8216),y=a(1588),z=a(4867);function f(e){return(0,z.Z)("MuiButton",e)}var Z=(0,y.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var w=o.createContext({}),C=a(5893);const $=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],E=e=>(0,p.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),I=(0,b.ZP)(x.Z,{shouldForwardProp:e=>(0,b.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`${a.variant}${(0,S.Z)(a.color)}`],t[`size${(0,S.Z)(a.size)}`],t[`${a.variant}Size${(0,S.Z)(a.size)}`],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var a,o;const n="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],r="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,p.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,p.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,h.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,h.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,h.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:r,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,p.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${Z.focusVisible}`]:(0,p.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${Z.disabled}`]:(0,p.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,h.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(a=(o=e.palette).getContrastText)?void 0:a.call(o,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:n,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Z.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Z.disabled}`]:{boxShadow:"none"}})),k=(0,b.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.startIcon,t[`iconSize${(0,S.Z)(a.size)}`]]}})((({ownerState:e})=>(0,p.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},E(e)))),R=(0,b.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.endIcon,t[`iconSize${(0,S.Z)(a.size)}`]]}})((({ownerState:e})=>(0,p.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},E(e))));var W=o.forwardRef((function(e,t){const a=o.useContext(w),n=(0,m.Z)(a,e),r=(0,g.Z)({props:n,name:"MuiButton"}),{children:i,color:l="primary",component:s="button",className:d,disabled:h=!1,disableElevation:b=!1,disableFocusRipple:x=!1,endIcon:y,focusVisibleClassName:z,fullWidth:Z=!1,size:E="medium",startIcon:W,type:B,variant:M="text"}=r,P=(0,c.Z)(r,$),T=(0,p.Z)({},r,{color:l,component:s,disabled:h,disableElevation:b,disableFocusRipple:x,fullWidth:Z,size:E,type:B,variant:M}),F=(e=>{const{color:t,disableElevation:a,fullWidth:o,size:n,variant:r,classes:i}=e,l={root:["root",r,`${r}${(0,S.Z)(t)}`,`size${(0,S.Z)(n)}`,`${r}Size${(0,S.Z)(n)}`,"inherit"===t&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,S.Z)(n)}`],endIcon:["endIcon",`iconSize${(0,S.Z)(n)}`]},s=(0,v.Z)(l,f,i);return(0,p.Z)({},i,s)})(T),N=W&&(0,C.jsx)(k,{className:F.startIcon,ownerState:T,children:W}),L=y&&(0,C.jsx)(R,{className:F.endIcon,ownerState:T,children:y});return(0,C.jsxs)(I,(0,p.Z)({ownerState:T,className:(0,u.Z)(a.className,F.root,d),component:s,disabled:h,focusRipple:!x,focusVisibleClassName:(0,u.Z)(F.focusVisible,z),ref:t,type:B},P,{classes:F,children:[N,i,L]}))})),B=a(7380),M=a(916),P=a(1996);var T=e=>{let{data:t}=e;const{name:a,price:c,image:p,description:u}=t.productsJson,m=(0,r.c)(p);return o.createElement(M.a,{theme:B.r},o.createElement(P.GlobalStyle,null),o.createElement(i.Z,null),o.createElement(l.Z,{sx:{mt:"5rem"}},o.createElement(s.ZP,{container:!0,spacing:2},o.createElement(s.ZP,{item:!0,sm:3},o.createElement(r.G,{image:m,alt:a})),o.createElement(s.ZP,{item:!0,sm:9},o.createElement(d.Z,{variant:"h4",component:"h4"},a),o.createElement(d.Z,{variant:"body1",component:"p"},u),o.createElement(d.Z,{style:{marginTop:20},variant:"body1",color:"text.secondary"},"$",c),o.createElement(W,{component:n.rU,to:"/",style:{marginTop:60},size:"small",color:"primary"},"Go home")))))}}}]);
//# sourceMappingURL=component---src-templates-singlepage-tsx-5deb2d743055336afb4b.js.map