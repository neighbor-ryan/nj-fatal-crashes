(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[792],{2404:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var a=r(1527),n=r(959),o=r(6465),s=r(6117);function i(e){let{setLL:t,setZoom:r,onClick:n,children:o}=e,i=(0,s.Sx)();return(0,s.zV)({click:e=>{console.log("leaflet click:",e),n&&n(e)},moveend:()=>t(i.getCenter()),zoom:()=>r(i.getZoom())}),(0,a.jsx)(a.Fragment,{children:o})}var l=r(8972);let u={lat:40.73,lng:-74.08};var c=r(3852),m=r.n(c),d=r(3972),h=r(1867),p=r(1641),f=r(2523),M=r(3799);let b={openstreetmap:{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"},alidade_smooth_dark:{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",attribution:'&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}};function g(e){let{map:t="alidade_smooth_dark",edgeBufferTiles:r=2,...n}=e,{url:o,attribution:s}=b[t];return(0,a.jsx)(M.I,{url:o,attribution:s})}function v(e){let{children:t,onClick:r,...s}=e,c=(0,n.useMemo)(()=>({ll:(0,l.GS)({init:u,places:4}),z:(0,l.yc)(12,!1)}),[]),{ll:[{lat:d,lng:h},p],z:[f,M]}=(0,l.QR)({params:c});(0,n.useEffect)(()=>{(0,l.hJ)(c,{ll:{lat:d,lng:h},z:f},{push:!1,log:!0})},[c,d,h,f]);let[b,v]=(0,n.useState)(12),y=(0,n.useMemo)(()=>m().canvas({tolerance:b,padding:.5}),[b]);return(0,a.jsx)(o.h,{...s,zoom:f,center:[d,h],renderer:y,children:(0,a.jsxs)(i,{setLL:p,setZoom:M,onClick:r,children:[(0,a.jsx)(g,{}),t]})})}(0,d.Lf)(function(e,t){let{url:r,...a}=e,n=new c.TileLayer(r,(0,h.q)(a,t));return(0,p.O)(n,t)},function(e,t,r){(0,f.I)(e,t,r);let{url:a}=t;null!=a&&a!==r.url&&e.setUrl(a)})},4792:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var a=r(1527),n=r(959),o=r(6117);function s(e){let t=new Set(e);return 1!==t.size?null:t.values().next().value}var i=r(3999),l=r(3972),u=r(1641),c=r(3852);let m=(0,l.SO)(function(e,t){let r=new c.Popup(e,t.overlayContainer);return(0,u.O)(r,t)},function(e,t,{position:r},a){(0,n.useEffect)(function(){let{instance:n}=e;function o(e){e.popup===n&&(n.update(),a(!0))}function s(e){e.popup===n&&a(!1)}return t.map.on({popupopen:o,popupclose:s}),null==t.overlayContainer?(null!=r&&n.setLatLng(r),n.openOn(t.map)):t.overlayContainer.bindPopup(n),function(){t.map.off({popupopen:o,popupclose:s}),t.overlayContainer?.unbindPopup(),t.map.removeLayer(n)}},[e,t,a,r])});var d=r(2064),h=r.n(d),p=r(3115),f=r.n(p);let{sqrt:M}=Math;function b(e){let{cluster:{key:t,lat:r,lon:o,tk:l,ti:u,tv:c,crashes:d},baseRadius:p,hoveredClusterKey:b,setHoveredClusterKey:g,selectedClusterKey:v,setSelectedClusterKey:y}=e,D=d.length,S=t===b||t===v,j=(0,n.useRef)(null),x=p*M(D),k="f"===d[0].severity?"red":"i"===d[0].severity?"orange":"yellow",T=(0,n.useMemo)(()=>{if(!S)return null;let e=s(d.map(e=>{let{sri:t}=e;return t})),t=e&&s(d.map(e=>{let{mp:t}=e;return t})),n=null;e&&(n=null!==t?(0,a.jsxs)("span",{children:["SRI ",e,", MP ",t]}):(0,a.jsxs)("span",{children:["SRI ",e]}));let i=l>0,m=u>0,p=[];l&&p.push("".concat(l," killed")),u&&p.push("".concat(u," injured")),c&&p.push("".concat(c," vehicles"));let M=p.length?": ".concat(p.join(", ")):"";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[D," ",D>1?"crashes":"crash",M]}),(0,a.jsxs)("table",{className:f().clusterTable,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{colSpan:3,children:"Date"}),(0,a.jsx)("th",{children:"Time"}),i?(0,a.jsx)("th",{children:"Killed"}):null,m?(0,a.jsx)("th",{children:"Injured"}):null,(0,a.jsx)("th",{children:"Vehicles"}),e?null:(0,a.jsx)("th",{children:"SRI"}),null!==t?null:(0,a.jsx)("th",{children:"MP"})]})}),(0,a.jsx)("tbody",{children:d.map((r,n)=>{let{dt:o,tk:s,ti:l,tv:u,sri:c,mp:m}=r,p=o.getFullYear(),f=o.getMonth(),M=o.getDate(),b=p.toString(),g=o.toLocaleString("en-US",{month:"short"}),v=M.toString(),{dt:y}=n>0?d[n-1]:{dt:null};y&&(y.getFullYear()===p&&(b=""),y.getMonth()===f&&(g=""),y.getDate()===M&&(v=""));let D="☠️".repeat(s),S="\uD83C\uDFE5".repeat(l),j="\uD83D\uDE97".repeat(u);return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:b}),(0,a.jsx)("td",{children:g}),(0,a.jsx)("td",{children:v}),(0,a.jsx)("td",{children:h()("%H:%M",o)}),i?(0,a.jsx)("td",{children:s?D:""}):null,(0,a.jsx)("td",{children:l?S:""}),(0,a.jsx)("td",{children:u?j:""}),e?null:(0,a.jsx)("td",{children:c}),null!==t?null:(0,a.jsx)("td",{children:m})]},n)})})]}),(0,a.jsxs)("details",{children:[(0,a.jsx)("summary",{children:"Location"}),(0,a.jsxs)("div",{className:f().llDetails,children:[r,", ",o]}),(0,a.jsx)("div",{children:n})]})]})},[S,d,r,o,D,u,l,c]);(0,n.useEffect)(()=>{var e,t;if(T)null===(t=j.current)||void 0===t||t.openPopup();else{null===(e=j.current)||void 0===e||e.closePopup();return}},[T]);let Y=(0,n.useMemo)(()=>({mouseover:e=>{console.log("mouseover",e),g(t)},mouseout:e=>{console.log("mouseout",e)},click:e=>{console.log("click",e),y(t)}}),[t,g,y]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.C,{center:[r,o],radius:x,color:k,ref:j,key:t,eventHandlers:Y,children:(0,a.jsx)(m,{keepInView:!1,children:T})})})}var g=r(7253);let{max:v}=Math;function y(e){let{crashes:t}=e,[r,s]=(0,n.useState)(),[i,l]=(0,n.useState)(),u=(0,o.Sx)().getZoom();(0,o.zV)({movestart:()=>{},click:()=>{console.log("click"),s(void 0),l(void 0)},mousemove:e=>{}});let c=(0,n.useMemo)(()=>{let[e,t]=[12,18],[r,a]=[1,2],n=r+v(0,u-e)*(a-r)/(t-e);return console.log("baseRadius",n,"zoom",u),n},[u]),m=(0,n.useMemo)(()=>{let e={};return t.forEach(t=>{let{lat:r,lon:a}=t,n="".concat(r,",").concat(a);n in e||(e[n]=[]),e[n].push(t)}),(0,g.qh)(e).map(e=>{let[t,r]=e,{lon:a,lat:n}=r[0],o=r.map(e=>{let{lon:t,lat:r,...a}=e;return a});o.sort((e,t)=>e.dt<t.dt?-1:e.dt>t.dt?1:0);let s=0,i=0,l=0,u=0,c=0;return o.forEach(e=>{let{tk:t,ti:r,tv:a,pk:n,pi:o}=e;t&&(s+=t),r&&(i+=r),a&&(l+=a),n&&(u+=n),o&&(c+=o)}),{key:t,lat:n,lon:a,tk:s,ti:i,tv:l,pk:u,pi:c,crashes:o}})},[t]);return(0,n.useMemo)(()=>{console.log("clustersElem");let e={baseRadius:c,hoveredClusterKey:r,setHoveredClusterKey:s,selectedClusterKey:i,setSelectedClusterKey:l};return(0,a.jsx)(a.Fragment,{children:m.map(t=>(0,a.jsx)(b,{cluster:t,...e},t.key))})},[m,c,r,s,i,l])}var D=r(2404),S=r(4421);function j(e){let{crashes:t,hudco:r,...n}=e;return(0,a.jsxs)(D.Z,{...n,children:[(0,a.jsx)(S.Q,{data:r,style:{fillColor:"yellow",color:"yellow",opacity:.5,fillOpacity:0}}),(0,a.jsx)(y,{crashes:t})]})}},3115:function(e){e.exports={clusterTable:"cluster_clusterTable__S_jCx",clusterIcon:"cluster_clusterIcon__K1tJm",cluster:"cluster_cluster__1d7nf",llDetails:"cluster_llDetails__JzNXp"}},2064:function(e){!function(){var t={de_DE:{identifier:"de-DE",days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],shortDays:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],shortMonths:["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d.%m.%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},en_CA:{identifier:"en-CA",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ordinalSuffixes:["st","nd","rd","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","st","nd","rd","th","th","th","th","th","th","th","st"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%r",x:"%D"}},en_US:{identifier:"en-US",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ordinalSuffixes:["st","nd","rd","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","st","nd","rd","th","th","th","th","th","th","th","st"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%m/%d/%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%r",x:"%D"}},es_MX:{identifier:"es-MX",days:["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"],shortDays:["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],months:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],shortMonths:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},fr_FR:{identifier:"fr-FR",days:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],shortDays:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],months:["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"],shortMonths:["janv.","f\xe9vr.","mars","avril","mai","juin","juil.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},it_IT:{identifier:"it-IT",days:["domenica","luned\xec","marted\xec","mercoled\xec","gioved\xec","venerd\xec","sabato"],shortDays:["dom","lun","mar","mer","gio","ven","sab"],months:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],shortMonths:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},nl_NL:{identifier:"nl-NL",days:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],shortDays:["zo","ma","di","wo","do","vr","za"],months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],shortMonths:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d-%m-%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},pt_BR:{identifier:"pt-BR",days:["domingo","segunda","ter\xe7a","quarta","quinta","sexta","s\xe1bado"],shortDays:["Dom","Seg","Ter","Qua","Qui","Sex","S\xe1b"],months:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d-%m-%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},ru_RU:{identifier:"ru-RU",days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],shortDays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],shortMonths:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X",D:"%d.%m.%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},tr_TR:{identifier:"tr-TR",days:["Pazar","Pazartesi","Salı","\xc7arşamba","Perşembe","Cuma","Cumartesi"],shortDays:["Paz","Pzt","Sal","\xc7rş","Prş","Cum","Cts"],months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eyl\xfcl","Ekim","Kasım","Aralık"],shortMonths:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],AM:"\xd6\xd6",PM:"\xd6S",am:"\xd6\xd6",pm:"\xd6S",formats:{c:"%a %d %b %Y %X %Z",D:"%d-%m-%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},zh_CN:{identifier:"zh-CN",days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],shortDays:["日","一","二","三","四","五","六"],months:["一月份","二月份","三月份","四月份","五月份","六月份","七月份","八月份","九月份","十月份","十一月份","十二月份"],shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],AM:"上午",PM:"下午",am:"上午",pm:"下午",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%r",x:"%D"}}},r=t.en_US,a=new function e(a,m,d){var h,p=a||r,f=m||0,M=d||!1,b=0,g=function(e,t){var r;if(t){if(r=t.getTime(),M){var a=u(t);u(t=new Date(r+a+f))!==a&&(t=new Date(r+u(t)+f))}}else{var m=Date.now();m>b?(h=new Date(b=m),r=b,M&&(h=new Date(b+u(h)+f))):r=b,t=h}return function e(t,r,a,u){for(var m="",d=null,h=!1,p=t.length,b=!1,g=0;g<p;g++){var v=t.charCodeAt(g);if(!0===h){if(45===v){d="";continue}if(95===v){d=" ";continue}if(48===v){d="0";continue}if(58===v){b&&c("[WARNING] detected use of unsupported %:: or %::: modifiers to strftime"),b=!0;continue}switch(v){case 37:m+="%";break;case 65:m+=a.days[r.getDay()];break;case 66:m+=a.months[r.getMonth()];break;case 67:m+=n(Math.floor(r.getFullYear()/100),d);break;case 68:m+=e(a.formats.D,r,a,u);break;case 70:m+=e(a.formats.F,r,a,u);break;case 72:m+=n(r.getHours(),d);break;case 73:m+=n(s(r.getHours()),d);break;case 76:m+=o(Math.floor(u%1e3));break;case 77:m+=n(r.getMinutes(),d);break;case 80:m+=12>r.getHours()?a.am:a.pm;break;case 82:m+=e(a.formats.R,r,a,u);break;case 83:m+=n(r.getSeconds(),d);break;case 84:m+=e(a.formats.T,r,a,u);break;case 85:m+=n(i(r,"sunday"),d);break;case 87:m+=n(i(r,"monday"),d);break;case 88:m+=e(a.formats.X,r,a,u);break;case 89:m+=r.getFullYear();break;case 90:M&&0===f?m+="GMT":m+=function(e,t){if(null==t)return null;var r=e.toLocaleString(t,{timeZoneName:"short"}).match(/\s([\w]+)$/);return r&&r[1]}(r,void 0)||function(e){var t=e.toString().match(/\(([\w\s]+)\)/);return t&&t[1]}(r)||"";break;case 97:m+=a.shortDays[r.getDay()];break;case 98:case 104:m+=a.shortMonths[r.getMonth()];break;case 99:m+=e(a.formats.c,r,a,u);break;case 100:m+=n(r.getDate(),d);break;case 101:m+=n(r.getDate(),null==d?" ":d);break;case 106:var y=new Date(r.getFullYear(),0,1),D=Math.ceil((r.getTime()-y.getTime())/864e5);m+=o(D);break;case 107:m+=n(r.getHours(),null==d?" ":d);break;case 108:m+=n(s(r.getHours()),null==d?" ":d);break;case 109:m+=n(r.getMonth()+1,d);break;case 110:m+="\n";break;case 111:var D=r.getDate();a.ordinalSuffixes?m+=String(D)+(a.ordinalSuffixes[D-1]||l(D)):m+=String(D)+l(D);break;case 112:m+=12>r.getHours()?a.AM:a.PM;break;case 114:m+=e(a.formats.r,r,a,u);break;case 115:m+=Math.floor(u/1e3);break;case 116:m+="	";break;case 117:var D=r.getDay();m+=0===D?7:D;break;case 118:m+=e(a.formats.v,r,a,u);break;case 119:m+=r.getDay();break;case 120:m+=e(a.formats.x,r,a,u);break;case 121:m+=n(r.getFullYear()%100,d);break;case 122:if(M&&0===f)m+=b?"+00:00":"+0000";else{var S,j=(S=0!==f?f/6e4:-r.getTimezoneOffset())<0?"-":"+",x=b?":":"",k=Math.floor(Math.abs(S/60)),T=Math.abs(S%60);m+=j+n(k)+x+n(T)}break;default:h&&(m+="%"),m+=t[g]}d=null,h=!1;continue}if(37===v){h=!0;continue}m+=t[g]}return m}(e,t,p,r)};return g.localize=function(t){return new e(t||p,f,M)},g.localizeByIdentifier=function(e){var r=t[e];return r?g.localize(r):(c('[WARNING] No locale found with identifier "'+e+'".'),g)},g.timezone=function(t){var r=f,a=M,n=typeof t;return("number"===n||"string"===n)&&(a=!0,"string"===n?r=("-"===t[0]?-1:1)*(60*parseInt(t.slice(1,3),10)+parseInt(t.slice(3,5),10))*6e4:"number"===n&&(r=6e4*t)),new e(p,r,a)},g.utc=function(){return new e(p,f,!0)},g}(r,0,!1);function n(e,t){return""===t||e>9?""+e:(null==t&&(t="0"),t+e)}function o(e){return e>99?e:e>9?"0"+e:"00"+e}function s(e){return 0===e?12:e>12?e-12:e}function i(e,t){t=t||"sunday";var r=e.getDay();"monday"===t&&(0===r?r=6:r--);var a=Date.UTC(e.getFullYear(),0,1);return Math.floor((Math.floor((Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())-a)/864e5)+7-r)/7)}function l(e){var t=e%10,r=e%100;if(r>=11&&r<=13||0===t||t>=4)return"th";switch(t){case 1:return"st";case 2:return"nd";case 3:return"rd"}}function u(e){return 6e4*(e.getTimezoneOffset()||0)}function c(e){"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(e)}e.exports=a,"function"!=typeof Date.now&&(Date.now=function(){return+new Date})}()}}]);