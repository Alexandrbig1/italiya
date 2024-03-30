import{u as r,p as n,L as b,b as h,e as j,j as t,H as v,f as C,l as S}from"./index-mBbPgKR3.js";import{B as s,a as $,L as T,T as g,b as k,c as I,F as B,d as E,e as F,f as H,g as W}from"./emailRegex-DInc9mX0.js";const z=r(s)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 1.2rem;
  overflow-x: hidden;

  background: radial-gradient(
    circle,
    rgba(196, 196, 196, 0) 2%,
    ${e=>e.theme.colors.mainBgColor} 98%
  );
`,L=r(s)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  background: ${e=>e.theme.colors.mainBgColor};
  max-width: 300px;
  padding: 2.4rem;

  @media (min-width: 365px) {
    max-width: 335px;
  }

  @media (min-width: 768px) {
    padding: 4rem;
    max-width: 424px;
  }
`;r(s)`
  width: 100%;
`;const P=r($)`
  width: 100%;
  height: 4.9rem;
`,q=r.div`
  width: 100%;
  max-width: 260px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }

  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
  background-color: ${e=>e.theme.colors.accentColor};
  font-size: 2.4rem;

  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.signUpBgHoverBtn};
  }
`,D=r.span`
  color: ${e=>e.theme.colors.white};
  font-family: ${n};
  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,O=r(T)`
  color: ${e=>e.theme.colors.accentColor};
`,R=r(b)`
  color: ${e=>e.theme.colors.mainHeaderTextColorLowOp};
  font-family: ${n};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;

  transition: all var(--primary-transition);

  &:hover {
    color: ${e=>e.theme.colors.mainHeaderTextColor};
    cursor: pointer;
  }
`,U=r(g)`
  color: ${e=>e.theme.colors.blackColor};
`,Y=r(g)`
  color: ${e=>e.theme.colors.mainHeaderTextColor};
  font-family: ${n};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;

  transition: all var(--primary-transition);

  &:hover {
    color: ${e=>e.theme.colors.mainHeaderTextColor};
    cursor: pointer;
  }
`,p=r(k)`
  width: 100%;
  max-width: 260px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }

  input {
    border-radius: 0.4rem;
    color: ${e=>e.theme.colors.mainHeaderTextColor};
    font-family: ${n};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
    border-radius: 4px;
    transition: all var(--primary-transition);

    outline: 1px solid
      ${e=>e.error?e.theme.colors.errorColor:e.theme.colors.inputColor};
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

    &:focus-within {
      outline: none;
    }

    &::placeholder {
      color: ${e=>e.theme.colors.mainHeaderTextColor};
      font-family: ${n};
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.28px;
      font-size: 1.4rem;
    }
  }

  fieldset {
    border: 1px solid
      ${e=>e.error?e.theme.colors.errorColor:e.theme.colors.inputColor};
  }

  &:hover fieldset {
    border: none;
  }

  &:focus-within fieldset {
    border: 1px solid
      ${e=>e.error?e.theme.colors.errorColor:e.theme.colors.inputColor};
  }
`,A=r.div`
  position: relative;
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }
`,M=r.span`
  position: absolute;
  top: 50%;
  right: 1.2rem;

  transform: translateY(-35%);
  font-size: 2rem;
  color: ${e=>e.theme.colors.mainHeaderTextColorLowOp};

  &:hover {
    cursor: pointer;
  }
`,x=r.p`
  position: absolute;
  top: -0.4rem;
  right: 0;
  color: ${e=>e.theme.colors.errorColor};
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`,N=H({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function V(e){return t.jsxs(U,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:["Alex Smagin © ",t.jsx(O,{color:"inherit",href:"https://alexandrbig1.github.io/italiya/",target:"_blank",children:"Italiya"})," ",new Date().getFullYear(),"."]})}function J(){const[e,u]=h.useState(!1),[o,m]=h.useState({}),w=j(),f=()=>{u(!e)},y=c=>{c.preventDefault();const a=c.currentTarget,l=a.elements.email.value,d=a.elements.password.value,i={};l.trim().length===0?i.email="Email address is required":W.test(l)||(i.email="Please enter a valid email address"),(d.length<6||d.length>20)&&(i.password="Password must be between 6 and 20 characters"),m(i),Object.keys(i).length===0&&(m({}),w(S({email:l,password:d})),a.reset())};return t.jsxs(t.Fragment,{children:[t.jsx(v,{children:t.jsxs(C,{children:[t.jsx("title",{children:"Italiya - Sign In"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t.jsx("meta",{property:"og:url",content:"https://alexandrbig1.github.io/italiya/"}),t.jsx("meta",{name:"description",content:"Sign in to Italiya's Whisker Wonders website and explore a world of cat-themed treasures."}),t.jsx("meta",{property:"og:title",content:"Italiya's Whisker Wonders - Sign In"}),t.jsx("meta",{property:"og:type",content:"website"}),t.jsx("meta",{property:"og:description",content:"Sign in to Italiya's Whisker Wonders website and explore a world of cat-themed treasures."})]})}),t.jsx(I,{theme:N,children:t.jsxs(z,{children:[t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},children:t.jsxs(L,{children:[t.jsxs(s,{style:{display:"flex",alignItems:"center",gap:"1.4rem",position:"relative"},children:[t.jsx(R,{to:"/italiya/signup",children:"Sign Up"}),t.jsx(Y,{variant:"h5",children:"Sign In"})]}),t.jsxs(s,{component:"form",onSubmit:y,noValidate:!0,sx:{mt:2,width:{sm:"376px",xs:"312px"}},children:[t.jsxs(B,{children:[t.jsx(p,{margin:"normal",required:!0,fullWidth:!0,id:"email",placeholder:"Enter your email",name:"email",autoComplete:"email",autoFocus:!0,error:!!o.email}),o.email&&t.jsx(x,{children:o.email})]}),t.jsxs(A,{children:[t.jsx(p,{placeholder:"Confirm a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"current-password",type:e?"text":"password",error:!!o.password}),o.password&&t.jsx(x,{children:o.password}),t.jsx(M,{onClick:f,children:e?t.jsx(E,{}):t.jsx(F,{})})]}),t.jsx(q,{children:t.jsx(P,{type:"submit",color:"inherit",children:t.jsx(D,{children:"Log In Now"})})})]})]})}),t.jsx(V,{sx:{mt:8,mb:4}})]})})]})}export{J as default};
