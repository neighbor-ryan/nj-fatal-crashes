(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[500],{54263:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/map/hudson/diffs",function(){return t(95880)}])},95880:function(e,n,t){"use strict";t.r(n),t.d(n,{Map:function(){return _},__N_SSG:function(){return f},default:function(){return p}});var u=t(52676),r=t(78692),a=t.n(r),o=t(96709),i=t.n(o),s=t(92603),c=t(75271),l=t(25504),f=!0;let _=a()(()=>Promise.all([t.e(48),t.e(36)]).then(t.bind(t,25036)),{loadableGenerated:{webpack:()=>[25036]},ssr:!1});function p(e){let{encodedCrashes:n,hudco:t}=e,r=(0,l.L)(),a=(0,c.useMemo)(()=>(0,s.J)(n),[n]),o=(0,c.useMemo)(()=>(console.log("page render map"),(0,u.jsx)(_,{...r,crashes:a,hudco:t})),[a,t]);return(0,u.jsx)("div",{className:i().container,children:o})}},92603:function(e,n,t){"use strict";function u(e){let{rows:n,cols:t,dicts:u}=e;return n.map(e=>{let n={};return e.forEach((e,r)=>{let a=t[r];if(a in u){let t=u[a];if(t instanceof Array)n[a]=t[e];else{let{start:u,unit:r}=t;n[a]=new Date((u+e)*("s"===r?1e3:"m"===r?6e4:36e5))}}else n[a]=e}),n})}t.d(n,{J:function(){return u}})},25504:function(e,n,t){"use strict";t.d(n,{L:function(){return s}});var u=t(75271),r=t(17077),a=t(96709),o=t.n(a);let i={lat:40.73,lng:-74.08};function s(){let e=(0,u.useMemo)(()=>({ll:(0,r.GS)({init:i,places:4}),z:(0,r.yc)(12,!1)}),[]),{ll:[n,t],z:[a,s]}=(0,r.QR)({params:e});(0,u.useEffect)(()=>{(0,r.hJ)(e,{ll:n,z:a},{push:!1,log:!0})},[e,n,a]);let[c,l]=(0,u.useState)(12);return{center:n,setCenter:t,zoom:a,setZoom:s,tolerance:c,setTolerance:l,className:o().map,maxZoom:18}}},96709:function(e){e.exports={map:"map_map__sZIuw",container:"map_container__ZrsuQ",info:"map_info__8Yok7",heading:"map_heading__Q8vbH"}}},function(e){e.O(0,[201,747,888,774,179],function(){return e(e.s=54263)}),_N_E=e.O()}]);