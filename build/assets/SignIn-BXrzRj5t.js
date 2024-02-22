import{u as o,p as r,L as s,j as t,H as d,e as m}from"./index-C8YgIz7n.js";import{B as i,a as c,L as p,T as l,b as h,c as x,F as g,d as u}from"./SignUp.styled-CHmOnFtP.js";const w=o(i)`
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
`,f=o(i)`
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
`;o(i)`
  width: 100%;
`;const y=o(c)`
  width: 100%;
  height: 4.9rem;
`,b=o.div`
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
`,j=o.span`
  color: ${e=>e.theme.colors.white};
  font-family: ${r};
  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,v=o(p)`
  color: ${e=>e.theme.colors.accentColor};
`,$=o(s)`
  color: ${e=>e.theme.colors.mainHeaderTextColorLowOp};
  font-family: ${r};
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
`,C=o(l)`
  color: ${e=>e.theme.colors.blackColor};
`,S=o(l)`
  color: ${e=>e.theme.colors.mainHeaderTextColorLowOp};
  font-family: ${r};
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
`,a=o(h)`
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
    font-family: ${r};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
    border-radius: 4px;
    outline: 1px solid
      ${e=>e.error?e.theme.colors.errorColor:e.theme.colors.accentColor};
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

    &:focus-within {
      outline: none;
      /* border: 1px solid transparent; */
    }

    &::placeholder {
      color: ${e=>e.theme.colors.mainHeaderTextColor};
      font-family: ${r};
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.28px;
      font-size: 1.4rem;
    }
  }
`,T=o.div`
  position: relative;
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }
`;o.span`
  position: absolute;
  top: 50%;
  right: 1.2rem;

  transform: translateY(-35%);
  font-size: 2rem;
  color: ${e=>e.theme.colors.white};

  &:hover {
    cursor: pointer;
  }
`;o.p`
  position: absolute;
  top: -0.4rem;
  right: 0;
  color: red;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;const k=u({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function I(e){return t.jsxs(C,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:["Alex Smagin © ",t.jsx(v,{color:"inherit",href:"https://alexandrbig1.github.io/italiya/",target:"_blank",children:"Italiya"})," ",new Date().getFullYear(),"."]})}function z(){function e(n){n.preventDefault(),console.log(n)}return t.jsxs(t.Fragment,{children:[t.jsx(d,{children:t.jsxs(m,{children:[t.jsx("title",{children:"Italiya - Sign In"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t.jsx("meta",{property:"og:url",content:"https://alexandrbig1.github.io/italiya/"}),t.jsx("meta",{name:"description",content:"Sign in to Italiya's Whisker Wonders website and explore a world of cat-themed treasures."}),t.jsx("meta",{property:"og:title",content:"Italiya's Whisker Wonders - Sign In"}),t.jsx("meta",{property:"og:type",content:"website"}),t.jsx("meta",{property:"og:description",content:"Sign in to Italiya's Whisker Wonders website and explore a world of cat-themed treasures."})]})}),t.jsx(x,{theme:k,children:t.jsxs(w,{children:[t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},children:t.jsxs(f,{children:[t.jsxs(i,{style:{display:"flex",alignItems:"center",gap:"1.4rem",position:"relative"},children:[t.jsx($,{to:"/italiya/signup",children:"Sign Up"}),t.jsx(S,{variant:"h5",children:"Sign In"})]}),t.jsxs(i,{component:"form",onSubmit:e,noValidate:!0,sx:{mt:2,width:{sm:"376px",xs:"312px"}},children:[t.jsx(g,{children:t.jsx(a,{margin:"normal",required:!0,fullWidth:!0,id:"email",placeholder:"Enter your email",name:"email",autoComplete:"email",autoFocus:!0})}),t.jsx(T,{children:t.jsx(a,{placeholder:"Confirm a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"current-password"})}),t.jsx(b,{children:t.jsx(y,{type:"submit",color:"inherit",children:t.jsx(j,{children:"Log In Now"})})})]})]})}),t.jsx(I,{sx:{mt:8,mb:4}})]})})]})}export{z as default};
