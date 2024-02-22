import{u as o,p as i,L as x,b as s,j as t,H as g,e as u}from"./index-B8p4UyuZ.js";import{B as n,a as w,L as f,T as m,b as y,c as b,F as j,d as C,e as v,f as S}from"./SignUp.styled-Du3W94Ts.js";const $=o(n)`
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
`,T=o(n)`
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
`;o(n)`
  width: 100%;
`;const k=o(w)`
  width: 100%;
  height: 4.9rem;
`,I=o.div`
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
`,B=o.span`
  color: ${e=>e.theme.colors.white};
  font-family: ${i};
  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,F=o(f)`
  color: ${e=>e.theme.colors.accentColor};
`,H=o(x)`
  color: ${e=>e.theme.colors.mainHeaderTextColorLowOp};
  font-family: ${i};
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
`,W=o(m)`
  color: ${e=>e.theme.colors.blackColor};
`,z=o(m)`
  color: ${e=>e.theme.colors.mainHeaderTextColor};
  font-family: ${i};
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
`,l=o(y)`
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
    font-family: ${i};
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
      font-family: ${i};
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
`,E=o.div`
  position: relative;
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }
`,L=o.span`
  position: absolute;
  top: 50%;
  right: 1.2rem;

  transform: translateY(-35%);
  font-size: 2rem;
  color: ${e=>e.theme.colors.mainHeaderTextColorLowOp};

  &:hover {
    cursor: pointer;
  }
`,d=o.p`
  position: absolute;
  top: -0.4rem;
  right: 0;
  color: ${e=>e.theme.colors.errorColor};
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`,P=S({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function q(e){return t.jsxs(W,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:["Alex Smagin © ",t.jsx(F,{color:"inherit",href:"https://alexandrbig1.github.io/italiya/",target:"_blank",children:"Italiya"})," ",new Date().getFullYear(),"."]})}function U(){const[e,c]=s.useState(!1),[r,D]=s.useState({}),h=()=>{c(!e)};function p(a){a.preventDefault(),console.log(a)}return t.jsxs(t.Fragment,{children:[t.jsx(g,{children:t.jsxs(u,{children:[t.jsx("title",{children:"Italiya - Sign In"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t.jsx("meta",{property:"og:url",content:"https://alexandrbig1.github.io/italiya/"}),t.jsx("meta",{name:"description",content:"Sign in to Italiya's Whisker Wonders website and explore a world of cat-themed treasures."}),t.jsx("meta",{property:"og:title",content:"Italiya's Whisker Wonders - Sign In"}),t.jsx("meta",{property:"og:type",content:"website"}),t.jsx("meta",{property:"og:description",content:"Sign in to Italiya's Whisker Wonders website and explore a world of cat-themed treasures."})]})}),t.jsx(b,{theme:P,children:t.jsxs($,{children:[t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},children:t.jsxs(T,{children:[t.jsxs(n,{style:{display:"flex",alignItems:"center",gap:"1.4rem",position:"relative"},children:[t.jsx(z,{variant:"h5",children:"Sign In"}),t.jsx(H,{to:"/italiya/signup",children:"Sign Up"})]}),t.jsxs(n,{component:"form",onSubmit:p,noValidate:!0,sx:{mt:2,width:{sm:"376px",xs:"312px"}},children:[t.jsxs(j,{children:[t.jsx(l,{margin:"normal",required:!0,fullWidth:!0,id:"email",placeholder:"Enter your email",name:"email",autoComplete:"email",autoFocus:!0,error:!!r.email}),r.email&&t.jsx(d,{children:r.email})]}),t.jsxs(E,{children:[t.jsx(l,{placeholder:"Confirm a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"current-password",type:e?"text":"password",error:!!r.password}),r.password&&t.jsx(d,{children:r.password}),t.jsx(L,{onClick:h,children:e?t.jsx(C,{}):t.jsx(v,{})})]}),t.jsx(I,{children:t.jsx(k,{type:"submit",color:"inherit",children:t.jsx(B,{children:"Log In Now"})})})]})]})}),t.jsx(q,{sx:{mt:8,mb:4}})]})})]})}export{U as default};
