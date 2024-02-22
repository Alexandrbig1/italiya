import{u as r,r as t,p as i,a,j as e,L as s,b as c,O as l,C as d}from"./index-Dry7BwFM.js";const m="/italiya/assets/paws-CFqkmwH1.png",h=r.div`
  display: grid;
  grid-template-columns: 1.5fr 2.5fr;
  gap: 4.8rem;

  padding: 4.8rem 0;

  width: 100%;
  height: 100%;
`,u=r.div`
  border-radius: 0.8rem;
  height: 66.4rem;
`,g=r.img`
  width: 100%;
  height: auto;

  border-radius: 0.8rem;
`,p=r.div`
  /* padding: 5.6rem 2.4rem; */
  border-radius: 0.8rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  position: relative;

  background: url(${m});
  background-size: contain;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
`,f=r.div`
  padding: 0 2.4rem;
  margin-top: 5.6rem;
`,x=r.h1`
  font-family: ${t};
  font-weight: 500;
  font-size: 5.4rem;
  line-height: 1.11429;
  letter-spacing: 0.01em;
  color: ${o=>o.theme.colors.mainTextColor};
`,b=r.p`
  font-family: ${t};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${o=>o.theme.colors.mainTextColor};
`,y=r.button`
  border: none;
  outline: none;
  background: none;
  padding: 1.2rem 2.4rem;
  background-color: ${o=>o.theme.colors.signUpBgBtn};
  width: 24rem;
  border-radius: 0.8rem;
  color: ${o=>o.theme.colors.white};
  cursor: pointer;
  font-size: 1.6rem;
  font-family: ${i};
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${o=>o.theme.colors.signUpBgHoverBtn};
  }
`;function j(){const n=a().pathname==="/italiya/";return e.jsxs(h,{children:[e.jsx(u,{children:e.jsx(g,{src:"./images/italiya.jpg",alt:"Hello, My name is Italiya, I'm a lovely orange cat"})}),e.jsx(p,{children:n?e.jsxs(f,{children:[e.jsx(x,{children:"Meet Italiya: The Purrsonality Behind Whisker Wonders"}),e.jsx(b,{children:"Step into the enchanting world of Italiya, our charismatic orange cat. Indulge in whisker wonders with our curated collection of cat-themed treasures — cozy t-shirts, charming cups, and delightful souvenirs. Embrace feline magic and bring a touch of Italiya's charm into your everyday moments. Explore, shop, and immerse yourself in the joy of cats!"}),e.jsx(y,{children:e.jsx(s,{to:"products",children:"showproducts"})})]}):e.jsx(c.Suspense,{children:e.jsx(l,{})})})]})}const w=r.div`
  display: block;
  background-color: ${o=>o.theme.colors.mainBgColor};
`;function v(){return e.jsx(w,{children:e.jsx(d,{children:e.jsx(j,{})})})}export{v as default};
