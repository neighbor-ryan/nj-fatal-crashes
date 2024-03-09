(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{95606:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(257)}])},257:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return x},default:function(){return b}});var a=n(11527),r=n(50959),s=n(41949),o=n(65185),c=n.n(o),i=n(27149);n(71676),n(10926);var l={dropbtn:"dropbtn",dropdown:"dropdown",dropdownContent:"dropdown-content",hamburger:"hamburger",hover:"hover",menu:"menu",open:"open",topnav:"pccqzj0"};function d({name:e,sections:t,hover:n=!0,log:a}){let[s,o]=(0,r.useState)("");return r.createElement("div",{className:`${l.dropdown} ${l.menu} ${s}`,onMouseEnter:e=>{a&&console.log("dropdown onMouseEnter"),o(n?l.open:l.hover),e.stopPropagation()},onMouseLeave:e=>{a&&console.log("dropdown onMouseLeave"),o("")}},r.createElement("button",{className:l.dropbtn,onClick:e=>{a&&console.log("dropdown onClick"),e.stopPropagation(),o(s==l.open?"":l.open)}},e," ",r.createElement("i",{className:`fa fa-caret-${s==l.open?"down":"right"}`})),r.createElement("div",{className:l.dropdownContent},t.map(({id:e,name:t})=>r.createElement("a",{key:e,href:`#${e}`},t))))}function u({id:e,classes:t="",theme:n="p4iws93",menus:a,hover:s,log:o,children:c}){let[i,u]=(0,r.useState)(0),[m,h]=(0,r.useState)(!1),[p,f]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let t=()=>{let t=document?.getElementById(e);if(!t)return;let n=t.offsetHeight,a=window.scrollY;i&&!m&&a>=i?t.style.top=`-${n}px`:(t.classList.remove("absolute"),t.style.top="0"),u(a),h(!1)};return window.removeEventListener("scroll",t),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[m,h,i,u]),r.createElement("div",{id:e,className:`${l.topnav} ${t} ${n} ${p?l.open:""}`,onClick:()=>{o&&console.log("nav onClick"),f(!p),h(!0)},onMouseEnter:()=>{o&&console.log("nav onMouseEnter"),f(!0)},onMouseLeave:()=>{o&&console.log("nav onMouseLeave"),f(!1)}},r.createElement("button",{key:"hamburger",className:l.hamburger},"☰"),a.map(({id:e,name:t,sections:n})=>n?r.createElement(d,{key:t,name:t,sections:n,hover:s,log:o}):r.createElement("a",{key:t,href:`#${e}`,className:l.menu},t)),c)}var m=n(21358),h=n(13105),p=n(46928),f=n(34310),y=n(4555),g=n(4172),j=n(66038),w=n(41796),x=!0,b=e=>{let{plotsDict:t,njspProps:n}=e,o=(0,m.b)(),{rundate:l,yearTotalsMap:d}=n,x={rundate:l,yearTotalsMap:d},[b,...v]=y.Vv,N=(0,g.RY)(b,t[b.id],x),_=(0,g.mB)(v,t,x),S=[N,..._].map(e=>{let{id:t,title:n,menuName:a,dropdownSection:r}=e;return{id:t,name:a||n,dropdownSection:r}}),T=[{id:"NJSP",name:"NJSP"},{id:"state-years",name:"State x Years"},{id:"county-years",name:"Counties x Years"},{id:"state-months",name:"State x Months"},{id:"county-months",name:"Counties x Months"}].map(e=>({...e,sections:S.filter(t=>{let{dropdownSection:n}=t;return e.name==n})})),C="NJ Traffic Crash Data";return(0,a.jsxs)("div",{className:c().container,children:[(0,a.jsx)(s.F,{title:C,description:"Analysis & Visualization of traffic crash data published by NJ State Police and NJ DOT",url:p.H,thumbnail:"".concat(p.H,"/plots/fatalities_per_year_by_type.png")}),(0,a.jsx)(u,{id:"nav",classes:"collapsed",menus:T,hover:!1,children:(0,a.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"})}),(0,a.jsxs)("main",{className:c().main,children:[(0,a.jsx)("h1",{className:c().title,children:C}),(0,a.jsxs)("p",{children:[(0,a.jsx)(i.Z,{href:"#per-year",children:"The first 5 plots below"})," come from ",(0,a.jsx)(i.Z,{title:"NJ State Police fatal crash data",href:w.jy,children:"NJ State Police fatal crash data"})," (2008-present). ","It's generally current to the previous day."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)(i.Z,{href:"#njdot",children:"Below that"})," are plots of ",(0,a.jsx)(i.Z,{title:"NJ DOT raw crash data",href:w.Iv,children:"NJ DOT raw crash data"}),", which includes 6MM property-damage, injury, and fatal crashes from 2001-2021. ","It's a richer dataset, but less up to date."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:c().bold,children:"Work in progress"})," map of NJDOT data: 5 years (2017-2021) of fatal and injury crashes in Hudson County:"]}),(0,a.jsx)("iframe",{src:"".concat(o,"/map/hudson"),className:c().map}),(0,a.jsxs)("ul",{style:{listStyle:"none"},children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.Z,{href:"/map/hudson",children:"Full screen map here"})}),(0,a.jsxs)("li",{children:["Code and cleaned data are ",(0,a.jsx)(i.Z,{href:f.Tf.href,children:"here on GitHub"}),"."]}),(0,a.jsx)("li",{children:"Click / double-click legend entries below to toggle traces on/off."})]}),(0,a.jsxs)("div",{className:c()["plot-container"],children:[(0,a.jsx)(j.l_,{...n}),(0,a.jsx)("hr",{})]},b.id),_.map((e,t)=>{let{id:n,...s}=e;return(0,a.jsxs)(r.Fragment,{children:[t==T[0].sections.length&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{id:"njdot",children:(0,a.jsx)("a",{href:"#njdot",children:"NJ DOT Raw Crash Data"})}),(0,a.jsxs)("p",{children:["NJ DOT ",(0,a.jsx)(i.Z,{title:"NJ DOT raw crash data",href:"https://www.state.nj.us/transportation/refdata/accident/rawdata01-current.shtm",children:"publishes raw crash data"}),", including property-damage, injury, and fatal crashes, going back to 2001 (≈6MM records)."]}),(0,a.jsx)("p",{children:"The data currently ends in 2020, after a drop in all types of crashes due to COVID, and just before a spike in all crash types in 2021 and 2022 (based on the NJSP data above, and other sources). 2021 data should land in early 2023."})]}),(0,a.jsxs)("div",{className:c()["plot-container"],children:[(0,a.jsx)(y.XN,{id:n,basePath:o,...s,margin:{b:30},data:{rundate:l,yearTotalsMap:d}}),(0,a.jsx)("hr",{})]},n)]},n)}),(0,a.jsxs)("p",{children:["Code and data are ",(0,a.jsx)(i.Z,{href:f.Tf.href,children:"on GitHub"}),"; feedback / issues ",(0,a.jsx)(i.Z,{href:"".concat(f.Tf.href,"/issues/new"),children:"here"}),")."]}),(0,a.jsx)(h.I_,{socials:[f.Tf,{name:"Hudson County Complete Streets",title:"Hudson County Complete Streets",href:"https://hudcostreets.org",src:"/logos/hccs.png"}]})]})]})}},17618:function(e,t,n){"use strict";n.d(t,{HQ:function(){return r},Of:function(){return a}});let a="".concat("hudcostreets","/").concat("nj-crashes"),r="https://github.com/".concat(a)},66038:function(e,t,n){"use strict";n.d(t,{f:function(){return d},l_:function(){return m}});var a=n(11527),r=n(78912).Buffer;async function s(e){let t,{db:n,tableData:a,stem:s}=e;if("csv"===a.kind){let e="".concat(s,".csv");t="'".concat(e,"'"),await n.registerFileText(e,a.data)}else{let e="".concat(s,".parquet");t="parquet_scan('".concat(e,"')");let o=new Uint8Array(r.from(a.base64,"base64"));await n.registerFileBuffer(e,o)}return t}var o=n(8068),c=n(4555),i=n(50959);async function l(e){let{db:t,target:n,typeProjections:a,initialPlotData:r,types:s,county:i}=e,l="\n        SELECT\n            year,\n            CAST(sum(driver) as INT) as driver,\n            CAST(sum(pedestrian) as INT) as pedestrian,\n            CAST(sum(cyclist) as INT) as cyclist,\n            CAST(sum(passenger) as INT) as passenger,\n            CAST(sum(driver + pedestrian + cyclist + passenger) as INT) as total,\n            NULL as projected\n        FROM ".concat(n,"\n        ").concat(i?"WHERE county = '".concat(i,"'"):"","\n        GROUP BY year\n    "),d=await (0,o.Vn)(t,l),u=Array.from(s),m={Drivers:"driver",Pedestrians:"pedestrian",Cyclists:"cyclist",Passengers:"passenger",Projected:"projected"},h=u.map(e=>{let t=m[e];return t in a?a[t]:0}).reduce((e,t)=>e+t,0),p=d[d.length-1];if(p.year==c.$B){let e=u.map(e=>p[m[e]]).reduce((e,t)=>e+t,0);p.projected=h-e}else console.warn("getPlotData: last year is not ".concat(c.$B,":"),p," (county: ".concat(i,")")),d.push({year:c.$B,driver:0,pedestrian:0,cyclist:0,passenger:0,total:0,projected:h});console.log("got ytc data:",d);let f=1===s.size,y=r.map(e=>{let{name:t}=e,n=m[t],a={...e};return a.x=d.map(e=>e.year),a.y=d.map(e=>e[n]),a.visible=!!s.has(t)||"legendonly",f||(a.textposition="inside"),a}),g=f?[]:d.map(e=>{let{year:t,projected:n}=e,a=u.map(t=>e[m[t]]).reduce((e,t)=>e+t,0);return{x:t,y:a,text:"".concat(a),showarrow:!1,yshift:10}});return{rows:d,data:y,annotations:g}}let d="New Jersey Car Crash Deaths",u=["Drivers","Pedestrians","Cyclists","Passengers","Projected"];function m(e){let{params:t,tableData:n,typeProjections:r,rundate:m,yearTotalsMap:h,county:p,title:f,heading:y,spec:g}=e,{src:j,name:w}=g=null!=g?g:c.xW;j=null!=j?j:"plots/".concat(w,".png");let[x,b]=(0,i.useState)(new Set(u)),[v,N]=(0,i.useState)(null),[_,S]=(0,i.useState)(null),{data:T,layout:C,...E}=t,[D,J]=(0,i.useState)(T),[k,P]=(0,i.useState)(C.annotations),[M,O]=(0,i.useState)(null),$=(0,i.useCallback)(e=>{if(x.has(e)){console.log("types: disable ".concat(e));let t=new Set(Array.from(x));t.delete(e),b(t)}else{console.log("types: enable ".concat(e));let t=new Set(Array.from(x));t.add(e),b(t)}return!1},[x]),H=(0,i.useCallback)(e=>(x.size<=1?(console.log("types: remove solo ".concat(e)),b(new Set(u))):(console.log("types: solo ".concat(e)),b(new Set([e]))),!1),[x]);return(0,i.useEffect)(()=>{(async function(){let e=await (0,o.Vx)();console.log("got db:",e),N(e);let t=await s({db:e,tableData:n,stem:"ytc"});console.log("registered target:",t),O(t)})()},[n]),(0,i.useEffect)(()=>{(async function(){if(!v||!M)return;let{rows:e,data:t,annotations:n}=await l({db:v,target:M,typeProjections:r,initialPlotData:T,types:x,county:p});S(e),J(t),P(n)})()},[v,M,r,T,x,p]),(0,a.jsx)(c.XN,{...g,params:{data:D,layout:{...C,annotations:k,margin:{t:0,r:10,b:0,l:0}},...E},src:j,title:null!=f?f:d,heading:y,data:{rundate:m,yearTotalsMap:h},onLegendClick:$,onLegendDoubleClick:H})}},4555:function(e,t,n){"use strict";n.d(t,{$B:function(){return u},Vv:function(){return w},XN:function(){return h},eF:function(){return g},xW:function(){return j}});var a=n(11527);n(50959);var r=n(4172),s=n(27149),o=n(34310),c=n(17618);let{HalfRoundWiden:i,filterIdxs:l,filterValues:d}=r,u=new Date().getFullYear(),m=u-1;function h(e){return r.XN(e)}let p=[],f=p.concat(...["y","m"].map(e=>p.concat(...["s","c"].map(t=>p.concat(...["d","i","p"].map(n=>{let a="".concat(n).concat(t).concat(e),r={s:"State",c:"County"}[t],s={y:"Year",m:"Month"}[e],o="".concat({s:"State",c:"Counties"}[t]," x ").concat(s,"s"),c={i:"Traffic Crash Injuries",p:"Property Damage Crashes",d:"Traffic Deaths"}[n],i="State"==r?"NJ ".concat(c," per ").concat(s):"NJ ".concat(c," per {").concat(r,", ").concat(s,"}");return"dcm"==a&&(i+=" (12mo avgs)"),{id:a,name:"njdot/".concat(a),title:i,menuName:({i:"Injuries",p:"Property Damage",d:"Deaths"})[n],dropdownSection:o,style:"County"==r&&{height:580}}})))))),y="https://nbviewer.org/github/".concat(c.Of,"/blob/main/njsp/update-projections.ipynb");function g(e){let{rundate:t,yearTotalsMap:n,includeWorstYearsBlurb:r}=e,c=n["2021"].total,i=n["2022"].total,l=n[m].total,d=n[u];if(!d)return console.warn("NjspChildren: yearTotalsMap doesn't contain ".concat(u,":"),n),null;let{total:h,projected:p}=d,f=h+p,g=new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"Click/Double-click the legend labels to toggle or solo each type."}),!1!==r&&(0,a.jsxs)("p",{children:["2021 and 2022 were the worst years in the NJSP record (since 2008), with ",c," and ",i," deaths, resp."]}),(0,a.jsxs)("p",{children:[(0,a.jsxs)(s.Z,{href:"".concat(o.Tf.href,"/commits/main"),children:["As of ",g]}),", ",u," has ",h," reported deaths, and ",(0,a.jsx)(s.Z,{href:y,children:"is on pace"})," for ",f,f>l?", exceeding ".concat(m,"'s ").concat(l):"","."]})]})}let j={title:"NJ Traffic Deaths per Year",id:"per-year",name:"fatalities_per_year_by_type",menuName:"Traffic Deaths / Year",dropdownSection:"NJSP",filter:d({mapRange:i}),children:g},w=[j,{id:"ytd",name:"ytd-deaths",title:"NJ Traffic Deaths per Year",menuName:"YTD",dropdownSection:"NJSP",filter:l,children:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("p",{children:"Some data arrives weeks or months after the fact, so current year numbers are especially subject to change."})})},{id:"vs-homicides",name:"crash_homicide_cmp",title:"NJ Traffic Deaths vs. Homicides",menuName:"vs. Homicides",dropdownSection:"NJSP",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"Traffic crashes kill 1.5-2x as many people as homicides in NJ."}),(0,a.jsxs)("p",{children:["Homicide data comes from ",(0,a.jsx)(s.Z,{href:"https://nj.gov/njsp/ucr/uniform-crime-reports.shtml",children:"NJ State Police"})," and ",(0,a.jsx)(s.Z,{href:"https://www.disastercenter.com/crime/njcrimn.htm",children:"Disaster Center"}),"."]})]})},{id:"per-month",name:"fatalities_per_month",title:"NJ Traffic Deaths per Month",menuName:"Per Month",dropdownSection:"NJSP"},{id:"per-month-type",name:"fatalities_per_month_by_type",title:"NJ Traffic Deaths per Month (by Victim Type)",menuName:"By Victim Type",dropdownSection:"NJSP"},{id:"by-month-bars",name:"fatalities_by_month_bars",title:"NJ Traffic Deaths, grouped by month",menuName:"Grouped by Month",dropdownSection:"NJSP"},...f]},46928:function(e,t,n){"use strict";n.d(t,{H:function(){return r},n:function(){return a}});let a="crashes.hudcostreets.org",r="https://".concat(a)},34310:function(e,t,n){"use strict";n.d(t,{Tf:function(){return s},UY:function(){return i}});var a=n(13105);n(27842),n(20557);var r=n(17618);let s=a.Tf(r.Of,"svg"),o=a.tL("hudcostreets"),c=a.mr("hudcostreets"),i=[s,a._F("@neighborryan"),o,c]},41796:function(e,t,n){"use strict";n.d(t,{Iv:function(){return o},jy:function(){return s},mB:function(){return c}});var a=n(21358),r=n(62400);let s="https://nj.gov/njsp/info/fatalacc/",o="https://www.state.nj.us/transportation/refdata/accident/rawdata01-current.shtm";function c(){let e=r.env.S3_DBS?"https://nj-crashes.s3.amazonaws.com/njdot/data":"".concat((0,a.b)(),"/njdot");return{crashes:"".concat(e,"/crashes.db"),occupants:"".concat(e,"/occupants.db"),pedestrians:"".concat(e,"/pedestrians.db"),vehicles:"".concat(e,"/vehicles.db"),drivers:"".concat(e,"/drivers.db"),cmym:"".concat(e,"/cmym.db"),cmymc:"".concat(e,"/cmymc.db")}}},71676:function(){},10926:function(){},65185:function(e){e.exports={container:"index_container__9GuY8",main:"index_main__c2BVR",title:"index_title__a_HQY","plot-container":"index_plot-container__NCtTQ",map:"index_map__G_wnO",bold:"index_bold__yXydk"}},955:function(e,t,n){e.exports=n(20621)},41949:function(e,t,n){"use strict";n.d(t,{F:function(){return o}});var a=n(50959),r=n(955),s=n(21358);function o({title:e,description:t,type:n="website",url:o,thumbnail:c,favicon:i,twitterCard:l="summary_large_image",children:d}){let u=(0,s.b)();return i=i||`${u}/favicon.ico`,a.createElement(r,null,a.createElement("title",null,e),a.createElement("link",{rel:"icon",href:i}),a.createElement("meta",{name:"description",content:t}),a.createElement("meta",{property:"og:title",content:e}),a.createElement("meta",{property:"og:description",content:t}),a.createElement("meta",{property:"og:type",content:n}),a.createElement("meta",{property:"og:url",content:o}),a.createElement("meta",{property:"og:image",content:c}),a.createElement("meta",{name:"twitter:title",content:e}),a.createElement("meta",{name:"twitter:description",content:t}),a.createElement("meta",{name:"twitter:image",content:c}),a.createElement("meta",{name:"twitter:card",content:l}),d)}}},function(e){e.O(0,[68,149,461,774,888,179],function(){return e(e.s=95606)}),_N_E=e.O()}]);