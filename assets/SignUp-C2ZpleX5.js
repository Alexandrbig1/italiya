import{b as w,j as t,g as O,e as _,H as D,f as K,h as q}from"./index-mBbPgKR3.js";import{h as A,i as H,s as J,_ as h,u as Z,j as Y,k as Q,l as X,r as v,m as W,n as ee,c as te,C as re,o as se,B as G,p as ne,q as ie,F as N,t as k,E as T,v as ae,P as oe,w as le,d as ce,e as ue,S as de,x as pe,y as me,f as ge,z as xe,A as fe,g as he}from"./emailRegex-DInc9mX0.js";const we=w.createContext(),U=we;function ye(e){return A("MuiGrid",e)}const Se=[0,1,2,3,4,5,6,7,8,9,10],je=["column-reverse","column","row-reverse","row"],ve=["nowrap","wrap-reverse","wrap"],f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],y=H("MuiGrid",["root","container","item","zeroMinWidth",...Se.map(e=>`spacing-xs-${e}`),...je.map(e=>`direction-xs-${e}`),...ve.map(e=>`wrap-xs-${e}`),...f.map(e=>`grid-xs-${e}`),...f.map(e=>`grid-sm-${e}`),...f.map(e=>`grid-md-${e}`),...f.map(e=>`grid-lg-${e}`),...f.map(e=>`grid-xl-${e}`)]),be=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function x(e){const s=parseFloat(e);return`${s}${String(e).replace(String(s),"")||"px"}`}function $e({theme:e,ownerState:s}){let r;return e.breakpoints.keys.reduce((i,n)=>{let a={};if(s[n]&&(r=s[n]),!r)return i;if(r===!0)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(r==="auto")a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const u=v({values:s.columns,breakpoints:e.breakpoints.values}),d=typeof u=="object"?u[n]:u;if(d==null)return i;const c=`${Math.round(r/d*1e8)/1e6}%`;let l={};if(s.container&&s.item&&s.columnSpacing!==0){const o=e.spacing(s.columnSpacing);if(o!=="0px"){const m=`calc(${c} + ${x(o)})`;l={flexBasis:m,maxWidth:m}}}a=h({flexBasis:c,flexGrow:0,maxWidth:c},l)}return e.breakpoints.values[n]===0?Object.assign(i,a):i[e.breakpoints.up(n)]=a,i},{})}function ke({theme:e,ownerState:s}){const r=v({values:s.direction,breakpoints:e.breakpoints.values});return W({theme:e},r,i=>{const n={flexDirection:i};return i.indexOf("column")===0&&(n[`& > .${y.item}`]={maxWidth:"none"}),n})}function z({breakpoints:e,values:s}){let r="";Object.keys(s).forEach(n=>{r===""&&s[n]!==0&&(r=n)});const i=Object.keys(e).sort((n,a)=>e[n]-e[a]);return i.slice(0,i.indexOf(r))}function We({theme:e,ownerState:s}){const{container:r,rowSpacing:i}=s;let n={};if(r&&i!==0){const a=v({values:i,breakpoints:e.breakpoints.values});let u;typeof a=="object"&&(u=z({breakpoints:e.breakpoints.values,values:a})),n=W({theme:e},a,(d,c)=>{var l;const o=e.spacing(d);return o!=="0px"?{marginTop:`-${x(o)}`,[`& > .${y.item}`]:{paddingTop:x(o)}}:(l=u)!=null&&l.includes(c)?{}:{marginTop:0,[`& > .${y.item}`]:{paddingTop:0}}})}return n}function Ce({theme:e,ownerState:s}){const{container:r,columnSpacing:i}=s;let n={};if(r&&i!==0){const a=v({values:i,breakpoints:e.breakpoints.values});let u;typeof a=="object"&&(u=z({breakpoints:e.breakpoints.values,values:a})),n=W({theme:e},a,(d,c)=>{var l;const o=e.spacing(d);return o!=="0px"?{width:`calc(100% + ${x(o)})`,marginLeft:`-${x(o)}`,[`& > .${y.item}`]:{paddingLeft:x(o)}}:(l=u)!=null&&l.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${y.item}`]:{paddingLeft:0}}})}return n}function Ee(e,s,r={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[r[`spacing-xs-${String(e)}`]];const i=[];return s.forEach(n=>{const a=e[n];Number(a)>0&&i.push(r[`spacing-${n}-${String(a)}`])}),i}const Be=J("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e,{container:i,direction:n,item:a,spacing:u,wrap:d,zeroMinWidth:c,breakpoints:l}=r;let o=[];i&&(o=Ee(u,l,s));const m=[];return l.forEach(p=>{const g=r[p];g&&m.push(s[`grid-${p}-${String(g)}`])}),[s.root,i&&s.container,a&&s.item,c&&s.zeroMinWidth,...o,n!=="row"&&s[`direction-xs-${String(n)}`],d!=="wrap"&&s[`wrap-xs-${String(d)}`],...m]}})(({ownerState:e})=>h({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),ke,We,Ce,$e);function Pe(e,s){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const r=[];return s.forEach(i=>{const n=e[i];if(Number(n)>0){const a=`spacing-${i}-${String(n)}`;r.push(a)}}),r}const Ge=e=>{const{classes:s,container:r,direction:i,item:n,spacing:a,wrap:u,zeroMinWidth:d,breakpoints:c}=e;let l=[];r&&(l=Pe(a,c));const o=[];c.forEach(p=>{const g=e[p];g&&o.push(`grid-${p}-${String(g)}`)});const m={root:["root",r&&"container",n&&"item",d&&"zeroMinWidth",...l,i!=="row"&&`direction-xs-${String(i)}`,u!=="wrap"&&`wrap-xs-${String(u)}`,...o]};return ee(m,ye,s)},Ne=w.forwardRef(function(s,r){const i=Z({props:s,name:"MuiGrid"}),{breakpoints:n}=Y(),a=Q(i),{className:u,columns:d,columnSpacing:c,component:l="div",container:o=!1,direction:m="row",item:p=!1,rowSpacing:g,spacing:b=0,wrap:M="wrap",zeroMinWidth:I=!1}=a,$=X(a,be),V=g||b,F=c||b,R=w.useContext(U),C=o?d||12:R,E={},B=h({},$);n.keys.forEach(S=>{$[S]!=null&&(E[S]=$[S],delete B[S])});const P=h({},a,{columns:C,container:o,direction:m,item:p,rowSpacing:V,columnSpacing:F,wrap:M,zeroMinWidth:I,spacing:b},E,{breakpoints:n.keys}),L=Ge(P);return t.jsx(U.Provider,{value:C,children:t.jsx(Be,h({ownerState:P,className:O(L.root,u),as:l,ref:r},B))})}),j=Ne,Te=ge({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function Ue(e){return t.jsxs(xe,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:["Alex Smagin © ",t.jsx(fe,{color:"inherit",href:"https://alexandrbig1.github.io/italiya/",target:"_blank",children:"Italiya"})," ",new Date().getFullYear(),"."]})}function Ie(){const[e,s]=w.useState(!1),[r,i]=w.useState({}),n=_(),a=()=>{s(!e)},u=d=>{d.preventDefault();const c=d.currentTarget,l=c.elements.name.value,o=c.elements.email.value,m=c.elements.password.value,p={};l.trim().length===0?p.name="Name is required":l.trim().length<3&&(p.name="Name must be at least 3 characters"),o.trim().length===0?p.email="Email address is required":he.test(o)||(p.email="Please enter a valid email address"),(m.length<6||m.length>20)&&(p.password="Password must be between 6 and 20 characters"),i(p),Object.keys(p).length===0&&(i({}),n(q({name:l,email:o,password:m})),c.reset())};return t.jsxs(t.Fragment,{children:[t.jsx(D,{children:t.jsxs(K,{children:[t.jsx("title",{children:"Italiya - Sign Up"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t.jsx("meta",{name:"description",content:"Join Italiya's Whisker Wonders website and become part of the cat-loving community. Explore a world of delightful cat-themed treasures."}),t.jsx("meta",{property:"og:type",content:"website"}),t.jsx("meta",{property:"og:title",content:"Join Italiya's Whisker Wonders"}),t.jsx("meta",{property:"og:description",content:"Join Italiya's Whisker Wonders website and become part of the cat-loving community. Explore a world of delightful cat-themed treasures."}),t.jsx("meta",{property:"og:url",content:"https://alexandrbig1.github.io/italiya/"})]})}),t.jsx(te,{theme:Te,children:t.jsxs(re,{children:[t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},children:t.jsxs(se,{children:[t.jsxs(G,{style:{display:"flex",alignItems:"center",gap:"1.4rem",position:"relative"},children:[t.jsx(ne,{variant:"h5",children:"Sign Up"}),t.jsx(ie,{to:"/italiya/signin",children:"Sign In"})]}),t.jsxs(G,{component:"form",noValidate:!0,onSubmit:u,sx:{mt:2,width:{sm:"376px",xs:"312px"}},children:[t.jsxs(j,{container:!0,spacing:2,children:[t.jsx(j,{item:!0,xs:12,style:{marginTop:"0.4rem"},children:t.jsxs(N,{children:[t.jsx(k,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",placeholder:"Enter your name",autoFocus:!0,error:!!r.name}),r.name&&t.jsx(T,{children:r.name})]})}),t.jsx(j,{item:!0,xs:12,style:{marginTop:"0.4rem"},children:t.jsxs(N,{children:[t.jsx(k,{required:!0,fullWidth:!0,id:"email",placeholder:"Enter your email",name:"email",autoComplete:"email",error:!!r.email}),r.email&&t.jsx(T,{children:r.email})]})}),t.jsx(j,{item:!0,xs:12,style:{position:"relative"},children:t.jsxs(ae,{children:[t.jsx(k,{placeholder:"Create a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"new-password",type:e?"text":"password",error:!!r.password}),r.password&&t.jsx(oe,{children:r.password}),t.jsx(le,{onClick:a,children:e?t.jsx(ce,{}):t.jsx(ue,{})})]})})]}),t.jsx(de,{children:t.jsx(pe,{type:"submit",color:"inherit",children:t.jsx(me,{children:"Register Now"})})})]})]})}),t.jsx(Ue,{sx:{mt:5}})]})})]})}export{Ie as default};