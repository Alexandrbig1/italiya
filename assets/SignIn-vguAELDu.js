import{u as t,p as i,L as x,b as s,j as o,H as g,e as u}from"./index-ClwS1g-S.js";import{B as n,a as w,L as f,T as m,b as y,c as b,F as j,d as C,e as v,f as $}from"./SignUp.styled-CUgFwZIU.js";const S=t(n)`
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
`,T=t(n)`
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
`;t(n)`
  width: 100%;
`;const k=t(w)`
  width: 100%;
  height: 4.9rem;
`,I=t.div`
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
`,B=t.span`
  color: ${e=>e.theme.colors.white};
  font-family: ${i};
  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,H=t(f)`
  color: ${e=>e.theme.colors.accentColor};
`,F=t(x)`
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

  &.active {
    color: ${e=>e.theme.colors.mainHeaderTextColor};
  }
`,L=t(m)`
  color: ${e=>e.theme.colors.blackColor};
`,W=t(m)`
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

  &.active {
    color: ${e=>e.theme.colors.mainHeaderTextColor};
  }
`,l=t(y)`
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
`,z=t.div`
  position: relative;
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }
`,E=t.span`
  position: absolute;
  top: 50%;
  right: 1.2rem;

  transform: translateY(-35%);
  font-size: 2rem;
  color: ${e=>e.theme.colors.mainHeaderTextColorLowOp};

  &:hover {
    cursor: pointer;
  }
`,d=t.p`
  position: absolute;
  top: -0.4rem;
  right: 0;
  color: ${e=>e.theme.colors.errorColor};
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`,P=$({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function O(e){return o.jsxs(L,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:["Alex Smagin © ",o.jsx(H,{color:"inherit",href:"https://alexandrbig1.github.io/italiya/",target:"_blank",children:"Italiya"})," ",new Date().getFullYear(),"."]})}function U(){const[e,c]=s.useState(!1),[r,q]=s.useState({}),h=()=>{c(!e)};function p(a){a.preventDefault(),console.log(a)}return o.jsxs(o.Fragment,{children:[o.jsx(g,{children:o.jsxs(u,{children:[o.jsx("title",{children:"Italiya - Sign In"}),o.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),o.jsx("meta",{property:"og:url",content:"https://alexandrbig1.github.io/italiya/"}),o.jsx("meta",{name:"description",content:"Sign in to Italiya's Whisker Wonders website and explore a world of cat-themed treasures."}),o.jsx("meta",{property:"og:title",content:"Italiya's Whisker Wonders - Sign In"}),o.jsx("meta",{property:"og:type",content:"website"}),o.jsx("meta",{property:"og:description",content:"Sign in to Italiya's Whisker Wonders website and explore a world of cat-themed treasures."})]})}),o.jsx(b,{theme:P,children:o.jsxs(S,{children:[o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},children:o.jsxs(T,{children:[o.jsxs(n,{style:{display:"flex",alignItems:"center",gap:"1.4rem",position:"relative"},children:[o.jsx(W,{variant:"h5",children:"Sign In"}),o.jsx(F,{to:"/italiya/signup",children:"Sign Up"})]}),o.jsxs(n,{component:"form",onSubmit:p,noValidate:!0,sx:{mt:2,width:{sm:"376px",xs:"312px"}},children:[o.jsxs(j,{children:[o.jsx(l,{margin:"normal",required:!0,fullWidth:!0,id:"email",placeholder:"Enter your email",name:"email",autoComplete:"email",autoFocus:!0,error:!!r.email}),r.email&&o.jsx(d,{children:r.email})]}),o.jsxs(z,{children:[o.jsx(l,{placeholder:"Confirm a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"current-password",type:e?"text":"password",error:!!r.password}),r.password&&o.jsx(d,{children:r.password}),o.jsx(E,{onClick:h,children:e?o.jsx(C,{}):o.jsx(v,{})})]}),o.jsx(I,{children:o.jsx(k,{type:"submit",color:"inherit",children:o.jsx(B,{children:"Log In Now"})})})]})]})}),o.jsx(O,{sx:{mt:8,mb:4}})]})})]})}export{U as default};
