"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[436],{812:(n,t,e)=>{e.d(t,{U:()=>y});e(60);var r,a,o,c,i,s,p,l=e(312),d=e(740),g=e(12);const h=(0,d.cp)(g.cH)(r||(r=(0,l.c)(["\n  text-decoration: none;\n  text-align: center;\n\n  }\n"]))),x=d.cp.ul(a||(a=(0,l.c)(["\n  list-style-type: none;\n  display: grid;\n  max-width: calc(100vw - 65px);\n  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n  grid-gap: 15px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  @media screen and (min-width: 768px) {\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n    grid-gap: 40px;\n  }\n"]))),m=d.cp.li(o||(o=(0,l.c)(["\n  box-shadow: 5px 5px 9px -1px rgba(210, 105, 30, 1);\n  -webkit-box-shadow: 5px, 5px, 9px, -1px rgba(210, 105, 30, 1);\n  -moz-box-shadow: 5px, 5px, 9px, -1px rgba(210, 105, 30, 1);\n  border-radius: 15px;\n  border: 4px solid orange;\n  overflow: hidden;\n  background: black;\n"]))),u=d.cp.img(c||(c=(0,l.c)(["\n  width: 100%;\n  object-fit: cover;\n  margin-bottom: 20px;\n"]))),w=d.cp.p(i||(i=(0,l.c)(["\n  text-align: center;\n  font-weight: 700;\n  font-size: 25px;\n  color: white;\n  margin-bottom: 10px;\n@media screen and (min-width: 768px) {\n   font-size: 24px;\n  }\n  }\n"]))),f=d.cp.p(s||(s=(0,l.c)(["\n  text-align: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 10px;\n  }\n"])));d.cp.p(p||(p=(0,l.c)(["\n  font-size: 15px;\n  font-weight: 700;\n  color: white;\n  text-align: center;\n"])));var b=e(560),v=e(496);const y=n=>{let{movies:t}=n;const e=(0,b.IT)();return(0,v.jsx)("div",{children:(0,v.jsx)(x,{children:t.map((n=>{let{id:t,title:r,poster_path:a,vote_average:o}=n;return(0,v.jsxs)(m,{children:[(0,v.jsxs)(h,{to:"/movies/".concat(t),state:{from:e},children:[(0,v.jsx)(u,{width:"264px",height:"384px",src:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://netsh.pp.ua/2017/08/no-photo-placeholder-opencart",alt:r}),(0,v.jsx)(w,{children:r})]}),(0,v.jsxs)(f,{children:["User Scrore: ",Math.round(10*o),"%"]})]},t)}))})})}},760:(n,t,e)=>{e.d(t,{GU:()=>o,IJ:()=>c,Ks:()=>i,Mt:()=>p,au:()=>s});var r=e(372);const a="dc46b2bf0e575d3fd6c04fa612170e69";r.c.defaults.baseURL="https://api.themoviedb.org/3/";const o=async()=>{try{const{data:n}=await r.c.get("trending/movie/day",{params:{api_key:a,language:"en-US"}});return n.results}catch(n){throw console.error("Error fetching trends:",n),n}},c=async n=>{try{const{data:t}=await r.c.get("search/movie",{params:{api_key:a,query:n,language:"en-US"}});return t.results}catch(t){throw console.error("Error fetching movies:",t),t}},i=async n=>{try{const{data:t}=await r.c.get("movie/".concat(n),{params:{api_key:a,language:"en-US"}});return t}catch(t){throw console.error("Error fetching movie information:",t),t}},s=async n=>{try{const{data:t}=await r.c.get("movie/".concat(n,"/credits"),{params:{api_key:a,language:"en-US"}});return t.cast}catch(t){throw console.error("Error fetching cast:",t),t}},p=async n=>{try{const{data:t}=await r.c.get("movie/".concat(n,"/reviews"),{params:{api_key:a,language:"en-US"}});return t.results}catch(t){throw console.error("Error fetching reviews:",t),t}}},436:(n,t,e)=>{e.r(t),e.d(t,{default:()=>p});var r=e(812),a=e(760),o=e(60),c=e(160),i=e(732),s=e(496);const p=()=>{const[n,t]=(0,o.useState)([]),[e,p]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{p(!0),(0,a.GU)().then((n=>{t(n)})).catch((n=>{console.log(n)})).finally((()=>{p(!1)}))}),[]),(0,s.jsxs)(c.cL,{children:[(0,s.jsx)(c.i4,{children:"Trending today"}),(0,s.jsx)(r.U,{movies:n}),e&&(0,s.jsx)(i.c,{})]})}},160:(n,t,e)=>{e.d(t,{cL:()=>s,i4:()=>p,k3:()=>l});var r,a,o,c=e(312),i=e(740);const s=i.cp.div(r||(r=(0,c.c)(["\n  background-color: black;\n  color: #e6e6e6;\n  padding: 50px 100px;\n"]))),p=i.cp.h1(a||(a=(0,c.c)(["\n  color: indianRed;\n  font-size: 75px;\n  font-weight: 700;\n  margin-bottom: 20px;\n"]))),l=i.cp.p(o||(o=(0,c.c)(["\n  font-size: 15px;\n  font-weight: 700;\n  color: white;\n  text-align: center;\n"])))}}]);
//# sourceMappingURL=436.3d951f7a.chunk.js.map