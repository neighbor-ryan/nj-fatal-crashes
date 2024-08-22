(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[557],{47557:function(e,n,t){"use strict";t.r(n),t.d(n,{DOTEnd:function(){return M},DOTStart:function(){return P},H2:function(){return D},__N_SSG:function(){return k},default:function(){return E}});var s=t(52676),c=t(68976),l=t(19418),a=t(75271),i=t(18715),o=t(17546),r=t(63974),u=t(59660);let d={"Serious Injuries":"If victim has a serious non-fatal injury which includes:\n• Severe laceration resulting in exposure of underlying tissues/muscle/organs or resulting in significant loss of blood\n• Broken or distorted extremity (arm or leg)\n• Crush injuries\n• Suspected skull, chest or abdominal injury other than bruises or minor lacerations\n• Significant burns (second and third degree burns over 10% or more of the body)\n• Unconsciousness when taken from the crash scene\n• Paralysis","Minor Injuries":"An evident injury, other than fatal and serious injuries. Examples include lump on the head, abrasions, bruises, minor lacerations (cuts on the skin surface with minimal bleeding and no exposure of deeper tissue/muscle).","Other Reported Injuries":"Reported injury that is not fatal, serious or minor. Examples include momentary loss of consciousness, claim of injury, limping, or complaint of pain or nausea. Possible injuries are those which are reported by the person or are indicated by his/her behavior, but no wounds or injuries are readily evident."},h={k:0,fc:0,si:0,sic:0,mi:0,mic:0,pi:0,pic:0,ni:0,nic:0};function f(e){let n={...h},t={};return e.forEach(e=>{let{y:s,condition:c,total:l,num_crashes:a}=e;s in t||(t[s]={...h});let i=[null,"k","si","mi","pi","ni"][c];t[s][i]+=l,n[i]+=l;let o=[null,"fc","sic","mic","pic","nic"][c];t[s][o]+=a,n[o]+=a}),t.totals=n,t}var m=t(55170),p=t(94001),g=t(27170),j=t(66568),x=t.n(j),_=t(77779),y=t.n(_),b=t(87483);function v(e){let{city:n,setCity:t,cities:c}=e,l=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(l.current){let{fontSize:e,fontWeight:t,fontFamily:s}=window.getComputedStyle(l.current),c="".concat(t," ").concat(e," ").concat(s);console.log("CitySelect font:",c,n);let a=(0,b.mY)(n,c);console.log("CitySelect setting width:",a),l.current.style.width="".concat(a+30,"px")}},[n]),(0,s.jsx)("select",{className:y().countySelect,ref:l,value:n,onChange:e=>{t(e.target.value)},children:c.map(e=>(0,s.jsx)("option",{value:e,children:e},e))})}var w=t(34273),I=t(95074),N=t(69906),S=t(99197),C=t(62249),Z=t(4297),k=!0;let P="2001-01-01",M="2021-12-31";function D(e){let{id:n,className:t=x().idTarget,children:c}=e;return(0,s.jsxs)("h2",{children:[(0,s.jsx)("span",{id:n,className:t}),(0,s.jsx)(N.Z,{href:"#".concat(n),children:c})]})}function E(e){let{urls:n,barProps:t,cp:h,Counties:j,crashes:_,totals:y,...k}=e,[E,Y]=(0,a.useState)(65536),{cc:T,mc:B,cn:F,mn:R,mc2mn:L,cc2mc2mn:V,setCounty:z,setCity:U}=(0,i.Z)({...k,urlPrefix:"/c"}),W=(0,o.im)({id:"njdot-crashes"},{start:P,end:M}),H=function(e){let{cc:n,mc:t,timerId:s="year-stats",...c}=e,l=(0,a.useMemo)(()=>{let e=n?"where cc=".concat(n).concat(t?" and mc=".concat(t):""):"",s=(n?"c":"")+(t?"m":"")+"yc";return"\n                select y, condition,\n                drivers + passengers + pedestrians + cyclists as total,\n                num_crashes as num_crashes\n                from ".concat(s,"\n                ").concat(e,"\n                order by y desc, condition asc\n            ")},[n,t]),i=(0,r.id)({query:l,timerId:s,...c});return i?(0,u.UI)(f)(i):null}({url:n.dot.cmymc,cc:T,mc:B,requestChunkSize:E}),O=(0,m.v4)({urls:n,cc:T,cn:F,mc:B,cc2mc2mn:V,...W,requestChunkSize:E}),q=(0,o.lS)(H,e=>{let{fc:n,sic:t,mic:s,pic:c}=e.totals;return n+t+s+c},W),G=(0,o.Le)({id:"njsp-crashes"}),Q=(0,p.I)({crashes:_,urls:n,cc:T,cn:F,mc:B,cc2mc2mn:V,...G}),A=(0,p.t$)({totals:y,urls:n,cc:T,mc:B,requestChunkSize:E}),$=(0,o.lo)(A,e=>(0,g.Z)(e).total,G),K=(null!=R?R:F)?"".concat(R," County"):"New Jersey",J=R&&(0,s.jsxs)("span",{children:["(",(0,s.jsxs)(N.Z,{href:"/c/".concat(h),children:[F," County"]}),")"]});return(0,s.jsx)("div",{className:x().body,children:(0,s.jsxs)("div",{className:x().container,children:[(0,s.jsxs)("h1",{className:x().title,children:[(0,s.jsx)("span",{className:x().home,children:(0,s.jsx)(N.Z,{href:"/",children:(0,s.jsx)(Z.Z,{fontSize:"medium"})})}),U&&B&&L?(0,s.jsx)(v,{city:L[B],setCity:U,cities:(0,c.VO)(L)}):z?(0,s.jsx)(b.RY,{county:null!=F?F:null,setCounty:z,Counties:j}):K]}),J&&(0,s.jsx)("div",{className:x().subtitle,children:J}),t?(0,s.jsx)("div",{className:x().section,children:(0,s.jsx)("div",{className:x().njspPlot,children:(0,s.jsx)(l.l_,{...t,county:null!=F?F:null,Heading:"h1",heading:(0,s.jsx)(D,{id:"by-type",children:"Car crash deaths"}),spec:w.xW})})}):null,Q&&(0,s.jsxs)("div",{className:x().section,children:[(0,s.jsx)(D,{id:"recent",children:"Recent fatal crashes"}),(0,s.jsx)("div",{className:x().sectionSubtitle,children:"2008 – present"}),(0,s.jsx)(I.W,{result:Q,pagination:$}),(0,s.jsx)(C.Zk,{})]}),O&&(0,s.jsxs)("div",{className:x().section,children:[(0,s.jsx)(D,{id:"dot",children:"Fatal / Injury crash details"}),(0,s.jsx)("div",{className:x().sectionSubtitle,children:"2001-2021"}),(0,s.jsx)(I.W,{result:O,pagination:q}),(0,s.jsx)(C.il,{})]}),H&&(0,s.jsxs)("div",{className:x().section,children:[(0,s.jsx)(D,{id:"stats",children:"Annual stats"}),(0,s.jsx)("div",{className:x().sectionSubtitle,children:"2001-2021"}),(0,s.jsx)(I.W,{className:x().withTotals,result:(0,u.UI)(e=>(function(e){let{ysds:n}=e;return(0,c._I)(n,(e,n)=>{let{k:t,fc:s,si:c,sic:l,mi:a,mic:i,pi:o,pic:r,nic:u}=n;return{key:e,Year:"totals"===e?"2001–2021":e,"Total crashes":(s+l+i+r+u).toLocaleString(),Deaths:t.toLocaleString(),"Serious Injuries":c.toLocaleString(),"Minor Injuries":a.toLocaleString(),"Other Reported Injuries":o.toLocaleString()}})})({ysds:e}))(H),colTitles:d}),(0,s.jsx)(C.il,{})]}),(0,s.jsx)(S.Z,{})]})})}},92711:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(52676),c=t(48787),l=t(78368),a=t.n(l);function i(e){let{cc:n,mc:t,cc2mc2mn:l}=e,{cn:i,mc2mn:o}=l[n],r=o[t],u=(0,c.F)(r);return(0,s.jsx)(a(),{href:"/c/".concat((0,c.F)(i),"/").concat(u),children:r})}},81810:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(52676),c=t(48787),l=t(78368),a=t.n(l);function i(e){let{cc:n,cc2mc2mn:t}=e;if(!t)throw Error("`cc2mc2mn` is required for `mc` col");let{cn:l}=t[n];return(0,s.jsx)(a(),{href:"/c/".concat((0,c.F)(l)),children:l})}},17546:function(e,n,t){"use strict";t.d(n,{$2:function(){return T},Le:function(){return S},im:function(){return k},lS:function(){return M},lo:function(){return P},tl:function(){return D}});var s=t(52676),c=t(4589),l=t.n(c),a=t(75271),i=t(59660),o=t(83379),r=t.n(o),u=t(3640),d=t(4194),h=t(48072),f=t(34238),m=t(25522),p=t(64057),g=t(86701),j=t.n(g),x=t(4220),_=t(31799),y=t(33588);let b=[10,20,50],v=b[0],w=e=>"".concat(e,"-per-page"),I=e=>"".concat(e,"-page"),N=e=>"".concat(e,"-before");function S(e){var n,t;let{id:s}=e,[c,l]=(0,p.Z)(w(s),{defaultValue:null!==(n=e.perPage)&&void 0!==n?n:v}),[a,i]=(0,p.Z)(I(s),{defaultValue:null!==(t=e.page)&&void 0!==t?t:0});return{perPage:c,setPerPage:l,page:a,setPage:i}}let C=RegExp("(?<m>\\d\\d?)\\/(?<d>\\d\\d?)\\/(?<y>\\d\\d)"),Z=RegExp("(?<y>\\d\\d\\d\\d)-(?<m>\\d\\d)-(?<d>\\d\\d)");function k(e,n){var t,s;let{start:c,end:l}=n,{id:i}=e,[o,r]=(0,p.Z)(w(i),{defaultValue:null!==(t=e.perPage)&&void 0!==t?t:v}),[u,d]=(0,p.Z)(N(i),{defaultValue:null!==(s=null!=l?l:e.before)&&void 0!==s?s:j()("%Y-%m-%d",new Date),serializer:{parse:e=>e.match(Z)?e:(console.warn("useDatePaginationControls: invalid date",e),null!=l?l:j()("%Y-%m-%d",new Date)),stringify:e=>e.match(Z)?e:(console.warn("useDatePaginationControls: invalid date",e),null!=l?l:j()("%Y-%m-%d",new Date))}}),h=(0,a.useMemo)(()=>null!=l?l:j()("%Y-%m-%d",new Date),[l]);return{perPage:o,setPerPage:r,before:u,setBefore:(0,a.useCallback)(e=>{console.log("setBefore:",e),e.match(Z)?e>h?d(h):d(e):console.warn("setBefore: invalid date",e)},[d,h]),start:c,end:l}}function P(e,n,t){let{page:s,setPage:c,perPage:l,setPerPage:o}=t,r=(0,a.useMemo)(()=>e?(0,i.g_)(()=>null,n)(e):null,[e]);return(0,a.useMemo)(()=>null===r?void 0:{page:s,setPage:c,perPage:l,setPerPage:o,total:r},[s,c,l,o,r])}function M(e,n,t){let{before:s,setBefore:c,start:l,end:o,perPage:r,setPerPage:u}=t,d=(0,a.useMemo)(()=>e?(0,i.g_)(()=>null,n)(e):null,[e]);return(0,a.useMemo)(()=>null===d?void 0:{before:s,setBefore:c,start:l,end:o,perPage:r,setPerPage:u,total:d},[s,c,l,o,r,u,d])}function D(e){let{page:n,setPage:t,perPage:c,setPerPage:l,total:i}=e,o=(0,a.useMemo)(()=>Math.floor(i/c),[i,c]),[p,g]=(0,a.useState)((n+1).toString()),[j,x]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{g((n+1).toString()),x(!1)},[n]),(0,s.jsxs)("div",{className:r().tablePagination,children:[(0,s.jsxs)("label",{className:r().curPage,children:[n*c+1,"-",(0,m.VV)(i,(n+1)*c)," of ",i.toLocaleString()]}),(0,s.jsxs)("label",{className:r().pageNum,children:["Page:",(0,s.jsx)("input",{className:j?r().dirty:"",type:"number",value:p,onChange:e=>{let s=e.target.value||"";g(s);let c=parseInt(s)-1;if(!c&&0!==c||c<0||c>o){x(!0);return}c===n&&j&&x(!1),console.log("onPageChange:",e,c),t(c)}})]}),(0,s.jsxs)("label",{className:r().pageSize,children:["Page size:",(0,s.jsx)("select",{value:c,onChange:e=>{let s=parseInt(e.target.value);console.log("onRowsPerPageChange:",e,s),l(s),t((0,m.GW)(n*c/s))},children:b.map(e=>(0,s.jsx)("option",{children:e},e))})]}),(0,s.jsxs)("span",{className:r().pageCount,children:[(0,s.jsx)("button",{disabled:0===n,onClick:()=>{console.log("⇽: page 0"),t(0)},children:(0,s.jsx)(u.Z,{})}),(0,s.jsx)("button",{disabled:0===n,onClick:()=>{console.log("⇽: page ".concat(n-1)),t(n-1)},children:(0,s.jsx)(d.Z,{})}),(0,s.jsx)("button",{disabled:n===o,onClick:()=>{console.log("⇾: page ".concat(n+1)),t(n+1)},children:(0,s.jsx)(h.Z,{})}),(0,s.jsx)("button",{disabled:n===o,onClick:()=>{console.log("⇾: page ".concat(o)),t(o)},children:(0,s.jsx)(f.Z,{})})]})]})}let E="America/New_York";function Y(e){let{cur:n,disabled:t,add:c,unit:a,Icon:i,setBefore:o,className:u}=e;return(0,s.jsx)(y.Z,{title:c?"Forward 1 ".concat(a):"Back 1 ".concat(a),children:(0,s.jsx)("span",{children:(0,s.jsx)("button",{disabled:t,onClick:()=>{let e=l().tz(n,E),t=(e=c?e.add(1,a):e.subtract(1,a)).format("YYYY-MM-DD");console.log("new date: ".concat(t)),o(t)},children:(0,s.jsx)(i,{className:"".concat(null!=u?u:""," ").concat(c?r().left:"")})})})})}function T(e){let{before:n,setBefore:t,start:c,end:i,perPage:o,setPerPage:d,total:f}=e;console.log("DatePagination: before",n,"end:",i);let[m,p]=(0,a.useState)(n),[g,v]=(0,a.useState)(!1),w=(0,a.useMemo)(()=>l().tz(n,E).format("M/D/YY"),[n]);(0,a.useEffect)(()=>{p(w),v(!1)},[n,w]);let I=(0,a.useMemo)(()=>n>=(null!=i?i:j()("%Y-%m-%d",new Date)),[n,i]);return(0,s.jsxs)("div",{className:r().tablePagination,children:[(0,s.jsxs)("label",{className:r().curPage,children:[f.toLocaleString()," total"]}),(0,s.jsxs)("label",{className:r().pageSize,children:["Page size:",(0,s.jsx)("select",{value:o,onChange:e=>{let n=parseInt(e.target.value);console.log("onRowsPerPageChange:",e,n),d(n)},children:b.map(e=>(0,s.jsx)("option",{children:e},e))})]}),(0,s.jsxs)("label",{className:r().beforeDate,children:["On or before:",(0,s.jsx)("input",{className:g?r().dirty:"",type:"text",value:m,onChange:e=>{let s=e.target.value||"";p(s);let c=s.match(C);if(!c){v(!0);return}let{y:l,m:a,d:o}=c.groups,r="20".concat(l,"-").concat(a.padStart(2,"0"),"-").concat(o.padStart(2,"0"));i&&r>i&&(r=i),s==n&&g&&v(!1),console.log('new "before" date:',r),t(r)}})]}),(0,s.jsxs)("span",{className:r().pageCount,children:[(0,s.jsx)(y.Z,{title:"Seek to end (".concat(i,")"),children:(0,s.jsx)("span",{children:(0,s.jsx)("button",{disabled:I,onClick:()=>{console.log("⇾: end",i),t(null!=i?i:j()("%Y-%m-%d",new Date))},children:(0,s.jsx)(u.Z,{})})})}),(0,s.jsx)(Y,{cur:n,Icon:x.Z,add:!0,unit:"year",setBefore:t,disabled:I}),(0,s.jsx)(Y,{cur:n,Icon:_.Z,add:!0,unit:"month",setBefore:t,className:r().reduce,disabled:I}),(0,s.jsx)(Y,{cur:n,Icon:h.Z,add:!0,unit:"day",setBefore:t,disabled:I}),(0,s.jsx)(Y,{cur:n,Icon:h.Z,add:!1,unit:"day",setBefore:t}),(0,s.jsx)(Y,{cur:n,Icon:_.Z,add:!1,unit:"month",setBefore:t,className:r().reduce}),(0,s.jsx)(Y,{cur:n,Icon:x.Z,add:!1,unit:"year",setBefore:t})]})]})}},95074:function(e,n,t){"use strict";t.d(n,{W:function(){return _}});var s=t(52676),c=t(93688),l=t.n(c),a=t(45037),i=t(50451),o=t(6533),r=t(84325),u=t(21673),d=t(85937),h=t(82686);t(75271);var f=t(68976),m=t(59660),p=t(40769),g=t(17546),j=t(61128);function x(e){var n;let{rows:t,colTitles:c,className:m,pagination:x}=e;return(0,s.jsx)(a.Z,{component:i.Z,style:{boxShadow:"none"},className:"".concat(l().rowsTable," ").concat(m||""),children:(0,s.jsxs)(o.Z,{stickyHeader:!0,sx:{minWidth:450},size:"small","aria-label":"simple table",children:[(0,s.jsx)(r.Z,{className:l().tableHead,children:(0,s.jsx)(u.Z,{children:(0,f.XP)(null!==(n=t[0])&&void 0!==n?n:{}).map(e=>"key"!==e&&(0,s.jsx)(j.u,{title:null==c?void 0:c[e],arrow:!0,children:(0,s.jsx)(d.Z,{align:"right",className:l().noselect,children:e})},e))})}),(0,s.jsx)(h.Z,{children:t.map(e=>{let{key:n}=e;return(0,s.jsx)(u.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:(0,f._I)(e,(e,n)=>"key"!==e&&(0,s.jsx)(d.Z,{align:"right",children:n},e))},n)})}),x&&(0,s.jsx)(p.Z,{children:(0,s.jsx)(u.Z,{children:(0,s.jsx)("td",{colSpan:6,children:"before"in x?(0,s.jsx)(g.$2,{...x}):(0,s.jsx)(g.tl,{...x})})})})]})})}function _(e){let{result:n,colTitles:t,className:c,pagination:a}=e;return(0,m.g_)(e=>(0,s.jsxs)("div",{className:l().sqlError,children:[(0,s.jsx)("h2",{children:"Error"}),(0,s.jsx)("pre",{children:e.message})]}),e=>(0,s.jsx)(x,{rows:e,className:"".concat(l().crashesTable," ").concat(c||""),colTitles:t,pagination:a}))(n)}},63974:function(e,n,t){"use strict";t.d(n,{Q3:function(){return l},id:function(){return c}});var s=t(9629);function c(e){let{maxBytesToRead:n=20971520,...t}=e;return s.qU({maxBytesToRead:n,...t})}function l(e){let{maxBytesToRead:n=20971520,init:t,...c}=e;return s.id({maxBytesToRead:n,init:t,...c})}},55170:function(e,n,t){"use strict";t.d(n,{WI:function(){return I},v4:function(){return S}});var s=t(52676),c=t(75271),l=t(63974),a=t(59660),i=t(86701),o=t.n(i),r=t(68976),u=t(62249),d=t(16742),h=t.n(d),f=t(9629),m=t(69906),p=t(61128),g=t(4589),j=t.n(g),x=t(92711),_=t(81810);let y={id:"ID",dt:"Date/Time",cc:"County",mc:"Municipality",casualties:"Casualties",road:"Road",cross_street:"Cross Street",mp:"MP",ll:"Lat, Lon"},b="#777",v="#d00",w=[{title:"Vehicle damage unknown",fill:b},{title:"Vehicle undamaged",fill:"green"},{title:"Vehicle sustained minor damage",fill:"orange"},{title:"Vehicle sustained moderate damage",fill:v},{title:"Vehicle disabled",fill:"black"}],I=[{txt:"condition unknown",fill:b},{txt:"deceased",fill:"black"},{txt:"serious injury",fill:v},{txt:"moderate injury",fill:"orange"},{txt:"possible injury",fill:"#8B8000"}];function N(e){let{occupants:n,pedestrians:t,vehicles:c}=e,l=[],a=[],i=[],o=[],r=[[],l,a,i,o];return null==n||n.forEach((e,n)=>{let{pos:t,condition:c,eject:l,age:a,sex:i,inj_loc:o,inj_type:d}=e;c=null!=c?c:0;let h="";switch(l){case 2:h="partially ejected";break;case 3:h="ejected";break;case 4:h="trapped"}let[f,m]=1===t?["Driver",u.HB]:["Passenger",u.wh],{txt:p,fill:g}=I[c],j="".concat(null!=a?a:"").concat("M"===i||"F"===i?i:""),x="".concat(f).concat(j?", ".concat(j,","):""," ").concat(p).concat(h?", ".concat(h):""),_=(0,s.jsx)(m,{title:x,style:{fill:g}},n);r[c].push(_)}),null==t||t.forEach((e,n)=>{let{condition:t,age:c,sex:l,inj_loc:a,inj_type:i,cyclist:o}=e;t=null!=t?t:0;let[d,h]=o?["Cyclist",u.MC]:["Pedestrian",u.S0],{txt:f,fill:m}=I[t],p="".concat(null!=c?c:"").concat("M"===l||"F"===l?l:""),g="".concat(d).concat(p?", ".concat(p,","):""," ").concat(f),j=(0,s.jsx)(h,{title:g,style:{fill:m}},n);r[t].push(j)}),(0,s.jsxs)("div",{className:h().icons,children:[l.length?(0,s.jsx)("span",{className:h().typeIcons,children:l}):null,a.length?(0,s.jsx)("span",{className:h().typeIcons,children:a}):null,i.length?(0,s.jsx)("span",{className:h().typeIcons,children:i}):null,o.length?(0,s.jsx)("span",{className:h().typeIcons,children:o}):null,(null==c?void 0:c.length)?(0,s.jsx)("span",{className:h().typeIcons,children:c.map((e,n)=>{let{damage:t,damage_loc:c,impact_loc:l,departure:a}=e,i=4===(t=null!=t?t:0)||3===a||5===a;i&&(t=4);let o=a>=3,r=4===a||5===a,{title:d}=w[t],{fill:h}=w[i||o||r?4:t];return 1===a&&(d+=", driven away"),2===a&&(d+=", left at scene"),o&&(d+=", towed"),r&&(d+=", impounded"),(0,s.jsx)(u.lG,{style:{fill:h},title:d},n)})}):null]})}function S(e){let{cc2mc2mn:n,...t}=e,i=function(e){let{cc:n,mc:t,before:s,perPage:a,timerId:i="njdot-crashes",urls:o,...r}=e,u=["i","f"],d=(0,c.useMemo)(()=>{let e=u.map(e=>"severity='".concat(e,"'")).join(" or "),c=n?"cc=".concat(n).concat(t?" and mc=".concat(t):""," and "):"",l=j().tz(s,"America/New_York").add(1,"day").format("YYYY-MM-DD");return"\n                select * from crashes\n                where ".concat(e?"(".concat(e,") and "):"").concat(c).concat("dt<='".concat(l,"'"),"\n                order by dt desc\n                limit ").concat(a,"\n            ")},[s,a,u,n,t]);return(0,l.id)({...r,url:o.dot.crashes,timerId:i,query:d})}({...t}),u=function(e){let{crashesResult:n,urls:t,...s}=e,[l,i]=(0,c.useState)(null),o=(0,f.tI)({url:t.dot.occupants,timerId:"occupants",...s});return(0,c.useEffect)(()=>{n&&(console.log("occupants effect"),(0,a.UI)(e=>{var n;let t=e.map(e=>{let{id:n}=e;return n}),s="\n                        select crash_id, pos, condition, eject, age, sex, inj_loc, inj_type\n                        from occupants\n                        where crash_id in (".concat(t.join(", "),") and condition >= 1 and condition < 5\n                        order by crash_id, condition, pos\n                    ");console.log("Fetching occupants"),null===(n=o(s))||void 0===n||n.then(e=>{(0,a.g_)(e=>(console.error("error fetching occupants:",e),null),e=>{console.log("crashOccupants:",e);let n={};for(let t of e){let{crash_id:e}=t;n[e]||(n[e]=[]),n[e].push(t)}i(n)})(e)})})(n))},[n,o]),l}({crashesResult:i,...t}),d=function(e){let{crashesResult:n,urls:t,...s}=e,[l,i]=(0,c.useState)(null),o=(0,f.tI)({url:t.dot.pedestrians,timerId:"pedestrians",...s});return(0,c.useEffect)(()=>{n&&(console.log("pedestrian effect"),(0,a.UI)(e=>{var n;let t=e.map(e=>{let{id:n}=e;return n}),s="\n                        select crash_id, condition, age, sex, inj_loc, inj_type, cyclist\n                        from pedestrians\n                        where crash_id in (".concat(t.join(", "),") and condition >= 1 and condition < 5\n                        order by crash_id, condition, cyclist\n                    ");console.log("Fetching pedestrians"),null===(n=o(s))||void 0===n||n.then(e=>{(0,a.g_)(e=>(console.error("error fetching pedestrians:",e),null),e=>{console.log("crashPedestrians:",e);let n={};for(let t of e){let{crash_id:e}=t;n[e]||(n[e]=[]),n[e].push(t)}i(n)})(e)})})(n))},[n,o]),l}({crashesResult:i,...t}),h=function(e){let{crashesResult:n,urls:t,...s}=e,[l,i]=(0,c.useState)(null),o=(0,f.tI)({url:t.dot.vehicles,timerId:"vehicles",...s});return(0,c.useEffect)(()=>{n&&(console.log("vehicles effect"),(0,a.UI)(e=>{var n;let t=e.map(e=>{let{id:n}=e;return n}),s="\n                        select\n                            crash_id,\n                            damage,\n                            damage_loc,\n                            impact_loc,\n                            departure,\n                            type\n                        from vehicles v\n                        where crash_id in (".concat(t.join(", "),")\n                    ");console.log("Fetching vehicles"),null===(n=o(s))||void 0===n||n.then(e=>{(0,a.g_)(e=>(console.error("error fetching vehicles:",e),null),e=>{console.log("crashVehicles:",e);let n={};for(let t of e){let{crash_id:e}=t;n[e]||(n[e]=[]),n[e].push(t)}i(n)})(e)})})(n))},[n,o]),l}({crashesResult:i,...t}),g=["dt",...t.cc?[]:["cc"],...t.mc?[]:["mc"],"casualties","road","cross_street","mp"];return(0,c.useMemo)(()=>{if(i)return console.log("crashRows effect"),(0,a.UI)(e=>(function(e){let{rows:n,cols:t,cc2mc2mn:c,crashOccupants:l,crashPedestrians:a,crashVehicles:i}=e;return n.map(e=>{let{id:n}=e,u=null==l?void 0:l[n],d=null==a?void 0:a[n],h=null==i?void 0:i[n];return(0,r.sq)([["key",n],...t.map(t=>{let l="";if("dt"==t)l=(0,s.jsx)(p.u,{title:"Crash ID: ".concat(n),children:(0,s.jsx)("span",{children:o()("%-m/%-d/%y %-I:%M%p",new Date(e.dt))})});else if("ll"==t){let{ilat:n,ilon:t,olat:s,olon:c}=e,[a,i]=n&&t?[n,t]:[s,c];l=a&&i?"".concat(null==a?void 0:a.toFixed(6),", ").concat(null==i?void 0:i.toFixed(6)):""}else if("road"==t){let{road:n,sri:t}=e;l=(0,s.jsx)(p.u,{title:t?"SRI ".concat(t):void 0,children:(0,s.jsx)("span",{children:n})})}else if("casualties"==t)l=(0,s.jsx)(N,{occupants:u,pedestrians:d,vehicles:h});else if("cc"==t)l=(0,s.jsx)(_.Z,{cc:e.cc,cc2mc2mn:c});else if("mc"==t)l=(0,s.jsx)(x.Z,{...e,cc2mc2mn:c});else if("mp"==t){let{mp:n,ilat:t,ilon:c}=e;if(n&&(l=n.toFixed(2),t&&c)){let e=function(e){let{lat:n,lon:t}=e;return"https://www.google.com/maps/?q=".concat(n,",").concat(t)}({lat:t,lon:c});l=(0,s.jsx)(m.Z,{href:e,children:l})}}else{var a;l=null!==(a=e[t])&&void 0!==a?a:""}return[y[t],l]})])})})({rows:e,cols:g,cc2mc2mn:n,crashOccupants:u,crashPedestrians:d,crashVehicles:h}))(i)},[i,g,u])}},94001:function(e,n,t){"use strict";t.d(n,{I:function(){return v},t$:function(){return y}});var s=t(52676),c=t(75271),l=t(63974),a=t(59660),i=t(55170),o=t(68976),r=t(38272),u=t(86701),d=t.n(u),h=t(16742),f=t.n(h),m=t(62249),p=t(61128),g=t(92711),j=t(81810),x=t(34273);let _={id:"ID",dt:"Date/Time",cc:"County",mc:"Municipality",casualties:"Casualties",location:"Location",street:"Street",highway:"Highway"};function y(e){let{cc:n,mc:t,timerId:s="njsp-crashes-total",urls:a,totals:i,...o}=e,r=(0,c.useMemo)(()=>(function(e){let{cc:n,mc:t}=e,s=n?"where cc=".concat(n).concat(t?" and mc=".concat(t):""):"";return"\n        select count(*) as total from crashes\n        ".concat(s,"\n    ")})({cc:n,mc:t}),[n,t]);return(0,l.Q3)({...o,url:a.njsp.crashes,timerId:s,query:r,init:i})}function b(e){let{tk:n,dk:t,ok:c,pk:l,bk:a,ti:o}=e,u=i.WI[0].fill;return(0,s.jsx)("div",{className:f().icons,children:(0,s.jsxs)("span",{className:f().typeIcons,children:[(0,r.w6)(t).map(e=>(0,s.jsx)(m.HB,{title:"Driver killed"},e)),(0,r.w6)(c).map(e=>(0,s.jsx)(m.wh,{title:"Passenger killed"},e)),(0,r.w6)(l).map(e=>(0,s.jsx)(m.S0,{title:"Pedestrian killed"},e)),(0,r.w6)(a).map(e=>(0,s.jsx)(m.MC,{title:"Cyclist killed"},e)),(0,r.w6)(n-t-c-l-a).map(e=>(0,s.jsx)(m.Fc,{title:"Person killed"},e)),(0,r.w6)(o).map(e=>(0,s.jsx)(m.Fc,{title:"Person injured",style:{fill:u}},e))]})})}function v(e){let{cc2mc2mn:n,...t}=e,i=function(e){let{cc:n,mc:t,page:s,perPage:a,timerId:i="njsp-crashes",urls:o,crashes:r,...u}=e,d=(0,c.useMemo)(()=>(function(e){let{cc:n,mc:t,page:s,perPage:c}=e,l=n?"where cc=".concat(n).concat(t?" and mc=".concat(t):""):"";return"\n        select * from crashes\n        ".concat(l,"\n        order by dt desc\n        limit ").concat(c," offset ").concat(s*c,"\n    ")})({cc:n,mc:t,page:s,perPage:a}),[n,t,s,a]);return(0,l.Q3)({...u,url:o.njsp.crashes,timerId:i,query:d,init:r})}({...t}),r=["dt",...t.cc?[]:["cc"],...t.mc?[]:["mc"],"casualties","location"];return(0,c.useMemo)(()=>(0,a.UI)(e=>(function(e){let{rows:n,cols:t,cc2mc2mn:c}=e;return n.map(e=>{let{id:n}=e;return(0,o.sq)([["key",n],...t.map(t=>{let l="";if("dt"==t){let t=new Date(e.dt),c=t.getFullYear()==x.$B?"%a %b %-d %-I:%M%p":"%-m/%-d/%y, %-I:%M%p";l=(0,s.jsx)(p.u,{title:"NJSP ACCID: ".concat(n),children:(0,s.jsx)("span",{children:d()(c,t)})})}else if("casualties"==t)l=(0,s.jsx)(b,{...e});else if("cc"==t)l=(0,s.jsx)(j.Z,{cc:e.cc,cc2mc2mn:c});else if("mc"==t)l=(0,s.jsx)(g.Z,{...e,cc2mc2mn:c});else{var a;l=null!==(a=e[t])&&void 0!==a?a:""}return[_[t],l]})])})})({rows:e,cols:r,cc2mc2mn:n}))(i),[i,r])}},83379:function(e){e.exports={tablePagination:"pagination_tablePagination__lC3mW",curPage:"pagination_curPage__dxmzj",pageNum:"pagination_pageNum__WgUES",dirty:"pagination_dirty__T8K2y",beforeDate:"pagination_beforeDate__Q6Cge",pageSize:"pagination_pageSize__W5eRI",pageCount:"pagination_pageCount___YeaQ",left:"pagination_left__nvvgL",reduce:"pagination_reduce__ZMeGM"}},66568:function(e){e.exports={body:"region-page_body__HkLid",container:"region-page_container__DAGWG",title:"region-page_title__k4sSU",home:"region-page_home__Olpja",subtitle:"region-page_subtitle__h2BBD",withTotals:"region-page_withTotals__Uho81",njspPlot:"region-page_njspPlot__PtERd",section:"region-page_section__OtUiB",sectionSubtitle:"region-page_sectionSubtitle__VSKpQ",idTarget:"region-page_idTarget__lG_r5"}},93688:function(e){e.exports={crashesTable:"result-table_crashesTable__ai3ED",sqlError:"result-table_sqlError__4KsON",tableHead:"result-table_tableHead__jkTt6",noselect:"result-table_noselect__eGqI4",rowsTable:"result-table_rowsTable__9gjgP"}},16742:function(e){e.exports={icons:"use-crashes_icons__Hn8TQ",typeIcons:"use-crashes_typeIcons__Eca3F",typeIcon:"use-crashes_typeIcon__9988a"}}}]);