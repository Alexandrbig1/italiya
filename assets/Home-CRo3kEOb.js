import{u as r,r as t,p as i,a,j as o,L as s,b as c,O as l,C as d}from"./index-N0Rw8hF9.js";const m="/italiya/assets/paws-CFqkmwH1.png",h=r.div`
  display: grid;
  grid-template-columns: 1.5fr 2.5fr;
  gap: 4.8rem;

  padding: 4.8rem 0;
`,u=r.div`
  border-radius: 0.8rem;
`,g=r.img`
  width: 100%;
  height: auto;

  border-radius: 0.8rem;
`,p=r.div`
  padding: 5.6rem 2.4rem;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  position: relative;

  background: url(${m});
  background-size: contain;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
`,f=r.h1`
  font-family: ${t};
  font-weight: 500;
  font-size: 5.4rem;
  line-height: 1.11429;
  letter-spacing: 0.01em;
  color: ${e=>e.theme.colors.mainTextColor};
`,x=r.p`
  font-family: ${t};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainTextColor};
`,b=r.button`
  border: none;
  outline: none;
  background: none;
  padding: 1.2rem 2.4rem;
  background-color: ${e=>e.theme.colors.signUpBgBtn};
  width: 24rem;
  border-radius: 0.8rem;
  color: ${e=>e.theme.colors.white};
  cursor: pointer;
  font-size: 1.6rem;
  font-family: ${i};
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.signUpBgHoverBtn};
  }
`;function y(){const n=a().pathname==="/italiya/";return o.jsxs(h,{children:[o.jsx(u,{children:o.jsx(g,{src:"./images/italiya.jpg",alt:"Hello, My name is Italiya, I'm a lovely orange cat"})}),o.jsx(p,{children:n?o.jsxs(o.Fragment,{children:[o.jsx(f,{children:"Meet Italiya: The Purrsonality Behind Whisker Wonders"}),o.jsx(x,{children:"Step into the enchanting world of Italiya, our charismatic orange cat. Indulge in whisker wonders with our curated collection of cat-themed treasures — cozy t-shirts, charming cups, and delightful souvenirs. Embrace feline magic and bring a touch of Italiya's charm into your everyday moments. Explore, shop, and immerse yourself in the joy of cats!"}),o.jsx(b,{children:o.jsx(s,{to:"products",children:"showproducts"})})]}):o.jsx(c.Suspense,{children:o.jsx(l,{})})})]})}const j=r.div`
  display: block;
  background-color: ${e=>e.theme.colors.mainBgColor};
`;function w(){return o.jsx(j,{children:o.jsx(d,{children:o.jsx(y,{})})})}export{w as default};
