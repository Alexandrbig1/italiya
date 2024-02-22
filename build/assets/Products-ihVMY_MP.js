import{G as y,u as s,c as L,r as b,s as P,d as S,b as C,j as r}from"./index-Dry7BwFM.js";function z(e){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"},child:[]}]})(e)}const T=s.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 2.4rem;

  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 66.4rem;

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: transparent;
  }

  ${e=>(e==null?void 0:e.$scrollable)&&L`
      &::-webkit-scrollbar-thumb {
        background-color: ${p=>p.theme.colors.accentColor};
      }
      &::-webkit-scrollbar-track {
        background-color: ${p=>p.theme.colors.scrollBgColor};
      }
    `}
`,B=s.div`
  position: absolute;
  top: 0;
  right: 0.8rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    cursor: pointer;
  }
`,A=s(z)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.mainHeaderTextColor};
  transition: all var(--primary-transition);

  &:hover {
    color: ${e=>e.theme.colors.signUpBgBtn};
    transform: rotate(-90deg);
  }
`,F=s.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 3.2rem;
`,l=s.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  height: 9.4rem;

  position: relative;

  border-left: 1px solid white;
  border-right: 1px solid white;
  border-bottom: 1px solid white;

  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;

  background-color: ${e=>e.theme.colors.mainBgColorLowOp};

  backdrop-filter: blur(1px);

  transition: all var(--primary-transition);
`,t=s.div`
  display: flex;
  flex-direction: column;

  &:hover {
    ${l} {
      backdrop-filter: blur(100px);
    }
  }
`,n=s.div`
  height: 36rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;

  overflow: hidden;

  position: relative;
`,u=s.div`
  position: absolute;
  top: 0.4rem;
  left: 0.4rem;

  width: 4.2rem;
  height: 4.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  border-radius: 20rem;
  background-color: ${e=>e!=null&&e.$cardsColors?e==null?void 0:e.$cardsColors:""};

  font-family: ${b};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.33333;
  color: #fafafa;
`,c=s.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`,d=s.h3`
  font-family: ${b};
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.33333;
  color: ${e=>e.theme.colors.mainCardsTextColor};
`,m=s.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,g=s.div`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 4px;
  border: 1px solid #b5ac9b;
  background-color: ${e=>e!=null&&e.$cardsColors?e==null?void 0:e.$cardsColors:""};
`,o=s.span`
  font-family: ${b};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainCardsTextColor};
`,a=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.2rem;
  border-radius: 50rem;
  background-color: ${e=>e.theme.colors.mainLogoColor};

  position: absolute;
  top: -50%;
  right: 0.4rem;

  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  z-index: 5;
`,h=s.span`
  font-family: ${P};
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainCardsTextColor};
  color: #fafafa;
`,x=s.span`
  font-family: ${b};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainCardsTextColor};
  color: #fafafa;
`,j=s.button`
  border: none;
  outline: none;
  background: none;
  padding: 0.6rem;
  cursor: pointer;

  position: absolute;
  top: 85%;
  left: 50%;

  transform: translateX(-50%);

  border-radius: 8px;

  width: calc(100% - 2.4rem);

  background-color: #d00000;
  color: #fafafa;
  transition: all var(--primary-transition);

  &:hover {
    background-color: #ef233c;
  }
`,i={shirt:"#e2d7c2",bag:"#E7C495",white:"#FFFFFF",black:"#000",green:"#20c997",top:"#4263eb",sale:"#f03e3e"};function O(){const e=S(),[p,w]=C.useState(!1),$=C.useRef(),k=()=>{e(-1)};return C.useEffect(()=>{const f=$.current,v=()=>{w(f.scrollTop>0)};return f.addEventListener("scroll",v),()=>{f.removeEventListener("scroll",v)}},[]),r.jsxs(T,{ref:$,$scrollable:p,children:[r.jsx(B,{onClick:k,children:r.jsx(A,{})}),r.jsxs(F,{children:[r.jsx("li",{children:r.jsxs(t,{children:[r.jsxs(n,{children:[r.jsx(u,{$cardsColors:i.top,children:"Top"}),r.jsx(c,{src:"./images/product1.jpg",alt:"Unisex Tri-Blend T-Shirt"})]}),r.jsxs(l,{children:[r.jsx(d,{children:"Unisex Tri-Blend T-Shirt"}),r.jsxs(m,{children:[r.jsx(o,{children:"Color:"}),r.jsx(g,{$cardsColors:i.shirt}),r.jsx(o,{children:"Oatmeal Triblend"})]}),r.jsx("div",{children:r.jsx(o,{children:"Size: XS/S/M/L/XL"})}),r.jsxs(a,{children:[r.jsx(h,{children:"$"}),r.jsx(x,{children:"24.75"})]}),r.jsx(j,{type:"button",children:"Add to cart"})]})]})}),r.jsx("li",{children:r.jsxs(t,{children:[r.jsx(n,{children:r.jsx(c,{src:"./images/product2.jpg",alt:"Large Eco Tote"})}),r.jsxs(l,{children:[r.jsx(d,{children:"Large Eco Tote"}),r.jsxs(m,{children:[r.jsx(o,{children:"Color:"}),r.jsx(g,{$cardsColors:i.bag}),r.jsx(o,{children:"Oyster"})]}),r.jsx("div",{children:r.jsx(o,{children:"Size: One size"})}),r.jsxs(a,{children:[r.jsx(h,{children:"$"}),r.jsx(x,{children:"24.95"})]}),r.jsx(j,{type:"button",children:"Add to cart"})]})]})}),r.jsx("li",{children:r.jsxs(t,{children:[r.jsxs(n,{children:[r.jsx(u,{$cardsColors:i.green,children:"New"}),r.jsx(c,{src:"./images/product3.jpg",alt:"Laptop Sleeve"})]}),r.jsxs(l,{children:[r.jsx(d,{children:"Laptop Sleeve"}),r.jsx("div",{children:r.jsx(o,{children:"Size: 13″"})}),r.jsxs(a,{children:[r.jsx(h,{children:"$"}),r.jsx(x,{children:"24.95"})]}),r.jsx(j,{type:"button",children:"Add to cart"})]})]})}),r.jsx("li",{children:r.jsxs(t,{children:[r.jsxs(n,{children:[r.jsx(u,{$cardsColors:i.sale,children:"Sale"}),r.jsx(c,{src:"./images/product4.jpg",alt:"Snap Case for iPhone"})]}),r.jsxs(l,{children:[r.jsx(d,{children:"Snap Case for iPhone"}),r.jsxs(m,{children:[r.jsx(o,{children:"Color:"}),r.jsx(g,{$cardsColors:i.white}),r.jsx(o,{children:"Glossy"})]}),r.jsx("div",{children:r.jsx(o,{children:"Size: iPhone 13"})}),r.jsxs(a,{children:[r.jsx(h,{children:"$"}),r.jsx(x,{children:"19.95"})]}),r.jsx(j,{type:"button",children:"Add to cart"})]})]})}),r.jsx("li",{children:r.jsxs(t,{children:[r.jsx(n,{children:r.jsx(c,{src:"./images/product5.jpg",alt:"All-Over Print Premium Pillow"})}),r.jsxs(l,{children:[r.jsx(d,{children:"All-Over Premium Pillow"}),r.jsxs(m,{children:[r.jsx(o,{children:"Color:"}),r.jsx(g,{$cardsColors:i.white}),r.jsx(o,{children:"White"})]}),r.jsx("div",{children:r.jsx(o,{children:"Size: 18″×18″"})}),r.jsxs(a,{children:[r.jsx(h,{children:"$"}),r.jsx(x,{children:"25.95"})]}),r.jsx(j,{type:"button",children:"Add to cart"})]})]})}),r.jsx("li",{children:r.jsxs(t,{children:[r.jsx(n,{children:r.jsx(c,{src:"./images/product6.jpg",alt:"Jigsaw Puzzle"})}),r.jsxs(l,{children:[r.jsx(d,{children:"Jigsaw Puzzle"}),r.jsx("div",{children:r.jsx(o,{children:"Size: 252 pieces"})}),r.jsxs(a,{children:[r.jsx(h,{children:"$"}),r.jsx(x,{children:"22.95"})]}),r.jsx(j,{type:"button",children:"Add to cart"})]})]})}),r.jsx("li",{children:r.jsxs(t,{children:[r.jsx(n,{children:r.jsx(c,{src:"./images/product7.jpg",alt:"Premium Luster Photo Paper Framed Poster"})}),r.jsxs(l,{children:[r.jsx(d,{children:"Premium Framed Poster"}),r.jsxs(m,{children:[r.jsx(o,{children:"Color:"}),r.jsx(g,{$cardsColors:i.white}),r.jsx(o,{children:"White"})]}),r.jsx("div",{children:r.jsx(o,{children:"Size: 8″×10″"})}),r.jsxs(a,{children:[r.jsx(h,{children:"$"}),r.jsx(x,{children:"28"})]}),r.jsx(j,{type:"button",children:"Add to cart"})]})]})}),r.jsx("li",{children:r.jsxs(t,{children:[r.jsxs(n,{children:[r.jsx(u,{$cardsColors:i.sale,children:"Sale"}),r.jsx(c,{src:"./images/product8.jpg",alt:"Hardcover Bound Notebook"})]}),r.jsxs(l,{children:[r.jsx(d,{children:"Hardcover Notebook"}),r.jsxs(m,{children:[r.jsx(o,{children:"Color:"}),r.jsx(g,{$cardsColors:i.black}),r.jsx(o,{children:"Black"})]}),r.jsx("div",{children:r.jsx(o,{children:"Size: 5.5″×8.5″"})}),r.jsxs(a,{children:[r.jsx(h,{children:"$"}),r.jsx(x,{children:"19.95"})]}),r.jsx(j,{type:"button",children:"Add to cart"})]})]})})]})]})}export{O as default};
