import{G as e,u as r,c as i,j as o}from"./index-N0Rw8hF9.js";function a(t){return e({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"},child:[]}]})(t)}const s=r.div`
  display: block;
`,c=r.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    cursor: pointer;
  }
`,l=r(a)`
  font-size: 2.4rem;
  color: ${t=>t.theme.colors.mainHeaderTextColor};
  transition: all var(--primary-transition);

  &:hover {
    color: ${t=>t.theme.colors.signUpBgBtn};
    transform: rotate(-90deg);
  }
`;function d(){const t=i(),n=()=>{t(-1)};return o.jsx(s,{children:o.jsx(c,{onClick:n,children:o.jsx(l,{})})})}export{d as default};
