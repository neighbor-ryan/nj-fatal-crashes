(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{1601:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var a=r(5893),n=r(7294),o=r(5715),s=r(9153);function i(e){let{setLL:t,setZoom:r,children:n}=e,o=(0,s.Sx)();return(0,s.zV)({moveend:()=>t(o.getCenter()),zoom:()=>r(o.getZoom())}),(0,a.jsx)(a.Fragment,{children:n})}var u=r(5083);let l={lat:40.725527,lng:-74.042037};var c=r(5243),d=r.n(c),m=r(1512),h=r(1802),p=r(7999),f=r(1469);let M={openstreetmap:{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"},alidade_smooth_dark:{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",attribution:'&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}},b=(0,m.Lf)(function(e,t){let{url:r,...a}=e,n=new c.TileLayer(r,(0,h.q)(a,t));return(0,p.O)(n,t)},function(e,t,r){(0,f.I)(e,t,r);let{url:a}=t;null!=a&&a!==r.url&&e.setUrl(a)});function g(e){let{map:t="alidade_smooth_dark",edgeBufferTiles:r=2,...n}=e,{url:o,attribution:s}=M[t];return(0,a.jsx)(b,{url:o,attribution:s,...n})}function v(e){let{children:t,...r}=e,s=(0,n.useMemo)(()=>({ll:(0,u.GS)({init:l,places:4}),z:(0,u.yc)(11,!1)}),[]),{ll:[{lat:c,lng:m},h],z:[p,f]}=(0,u.QR)({params:s});(0,n.useEffect)(()=>{(0,u.hJ)(s,{ll:{lat:c,lng:m},z:p},{push:!1,log:!0})},[s,c,m,p]);let[M,b]=(0,n.useState)(12),v=(0,n.useMemo)(()=>d().canvas({tolerance:M,padding:.5}),[M]);return(0,a.jsx)(o.h,{...r,zoom:p,center:[c,m],renderer:v,children:(0,a.jsxs)(i,{setLL:h,setZoom:f,children:[(0,a.jsx)(g,{}),t]})})}},8486:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var a=r(5893),n=r(7294),o=r(9153);function s(e){let t=new Set(e);return 1!==t.size?null:t.values().next().value}var i=r(6036),u=r(1512),l=r(7999),c=r(5243);let d=(0,u.SO)(function(e,t){let r=new c.Popup(e,t.overlayContainer);return(0,l.O)(r,t)},function(e,t,{position:r},a){(0,n.useEffect)(function(){let{instance:n}=e;function o(e){e.popup===n&&(n.update(),a(!0))}function s(e){e.popup===n&&a(!1)}return t.map.on({popupopen:o,popupclose:s}),null==t.overlayContainer?(null!=r&&n.setLatLng(r),n.openOn(t.map)):t.overlayContainer.bindPopup(n),function(){t.map.off({popupopen:o,popupclose:s}),t.overlayContainer?.unbindPopup(),t.map.removeLayer(n)}},[e,t,a,r])});var m=r(2001),h=r.n(m),p=r(6285),f=r.n(p);let{sqrt:M}=Math;function b(e){let{cluster:{key:t,lat:r,lon:o,tk:u,ti:l,tv:c,crashes:m},baseRadius:p,hoveredClusterKey:b,setHoveredClusterKey:g,selectedClusterKey:v,setSelectedClusterKey:x}=e,y=m.length,D=t===b||t===v,S=(0,n.useRef)(null),j=p*M(y),k="f"===m[0].severity?"red":"i"===m[0].severity?"orange":"yellow",T=(0,n.useMemo)(()=>{if(!D)return null;let e=s(m.map(e=>{let{sri:t}=e;return t})),t=e&&s(m.map(e=>{let{mp:t}=e;return t})),n=null;e&&(n=t?(0,a.jsxs)("span",{children:["SRI ",e,", MP ",t]}):(0,a.jsxs)("span",{children:["SRI ",e]}));let i=u>0,d=[];u&&d.push("".concat(u," killed")),l&&d.push("".concat(l," injured")),c&&d.push("".concat(c," vehicles"));let p=d.length?": ".concat(d.join(", ")):"";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[y," ",y>1?"crashes":"crash",p]}),(0,a.jsxs)("table",{className:f().clusterTable,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{colSpan:3,children:"Date"}),(0,a.jsx)("th",{children:"Time"}),i?(0,a.jsx)("th",{children:"Killed"}):null,l>0?(0,a.jsx)("th",{children:"Injured"}):null,(0,a.jsx)("th",{children:"Vehicles"}),e?null:(0,a.jsx)("th",{children:"SRI"}),t?null:(0,a.jsx)("th",{children:"MP"})]})}),(0,a.jsx)("tbody",{children:m.map((r,n)=>{let{dt:o,tk:s,ti:u,tv:l,sri:c,mp:d}=r,p=o.getFullYear(),f=o.getMonth(),M=o.getDate(),b=p.toString(),g=o.toLocaleString("en-US",{month:"short"}),v=M.toString(),{dt:x}=n>0?m[n-1]:{dt:null};x&&(x.getFullYear()===p&&(b=""),x.getMonth()===f&&(g=""),x.getDate()===M&&(v=""));let y="☠️".repeat(s),D="\uD83C\uDFE5".repeat(u),S="\uD83D\uDE97".repeat(l);return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:b}),(0,a.jsx)("td",{children:g}),(0,a.jsx)("td",{children:v}),(0,a.jsx)("td",{children:h()("%H:%M",o)}),i?(0,a.jsx)("td",{children:s?y:""}):null,(0,a.jsx)("td",{children:u?D:""}),(0,a.jsx)("td",{children:l?S:""}),e?null:(0,a.jsx)("td",{children:c}),t?null:(0,a.jsx)("td",{children:d})]},n)})})]}),(0,a.jsxs)("details",{children:[(0,a.jsx)("summary",{children:"Location"}),(0,a.jsxs)("div",{className:f().llDetails,children:[r,", ",o]}),(0,a.jsx)("div",{children:n})]})]})},[D,m,r,o,y,l,u,c]);(0,n.useEffect)(()=>{var e,t;if(T)null===(t=S.current)||void 0===t||t.openPopup();else{null===(e=S.current)||void 0===e||e.closePopup();return}},[T]);let Y=(0,n.useMemo)(()=>({mouseover:e=>{console.log("mouseover",e),g(t)},mouseout:e=>{console.log("mouseout",e)},click:e=>{console.log("click",e),x(t)}}),[t,g,x]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.C,{center:[r,o],radius:j,color:k,ref:S,key:t,eventHandlers:Y,children:(0,a.jsx)(d,{keepInView:!1,children:T})})})}var g=r(2174);let{max:v}=Math;function x(e){let{crashes:t}=e,[r,s]=(0,n.useState)(),[i,u]=(0,n.useState)(),l=(0,o.Sx)(),c=l.getZoom();(0,o.zV)({movestart:()=>{},click:()=>{console.log("click"),s(void 0),u(void 0)},mousemove:e=>{}});let d=(0,n.useMemo)(()=>{let[e,t]=[12,18],[r,a]=[1,2],n=r+v(0,c-e)*(a-r)/(t-e);return console.log("baseRadius",n,"zoom",c),n},[c]),m=(0,n.useMemo)(()=>{let e={};return t.forEach(t=>{let{lat:r,lon:a}=t,n="".concat(r,",").concat(a);n in e||(e[n]=[]),e[n].push(t)}),(0,g.qh)(e).map(e=>{let[t,r]=e,{lon:a,lat:n}=r[0],o=r.map(e=>{let{lon:t,lat:r,...a}=e;return a});o.sort((e,t)=>e.dt<t.dt?-1:e.dt>t.dt?1:0);let s=0,i=0,u=0,l=0,c=0;return o.forEach(e=>{let{tk:t,ti:r,tv:a,pk:n,pi:o}=e;t&&(s+=t),r&&(i+=r),a&&(u+=a),n&&(l+=n),o&&(c+=o)}),{key:t,lat:n,lon:a,tk:s,ti:i,tv:u,pk:l,pi:c,crashes:o}})},[t]),h=(0,n.useMemo)(()=>{console.log("clustersElem");let e={baseRadius:d,hoveredClusterKey:r,setHoveredClusterKey:s,selectedClusterKey:i,setSelectedClusterKey:u};return(0,a.jsx)(a.Fragment,{children:m.map(t=>(0,a.jsx)(b,{cluster:t,...e},t.key))})},[m,d,r,s,i,u]);return h}r(4464);var y=r(1601);function D(e){let{crashes:t,...r}=e;return(0,a.jsx)(y.Z,{...r,children:(0,a.jsx)(x,{crashes:t})})}},6285:function(e){e.exports={clusterTable:"cluster_clusterTable__AcN8s",clusterIcon:"cluster_clusterIcon__mMQQ8",cluster:"cluster_cluster__f1CuB",llDetails:"cluster_llDetails__BGHsP"}},2001:function(e){!function(){var t={de_DE:{identifier:"de-DE",days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],shortDays:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],shortMonths:["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d.%m.%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},en_CA:{identifier:"en-CA",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ordinalSuffixes:["st","nd","rd","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","st","nd","rd","th","th","th","th","th","th","th","st"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%r",x:"%D"}},en_US:{identifier:"en-US",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ordinalSuffixes:["st","nd","rd","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","st","nd","rd","th","th","th","th","th","th","th","st"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%m/%d/%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%r",x:"%D"}},es_MX:{identifier:"es-MX",days:["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"],shortDays:["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],months:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],shortMonths:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},fr_FR:{identifier:"fr-FR",days:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],shortDays:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],months:["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"],shortMonths:["janv.","f\xe9vr.","mars","avril","mai","juin","juil.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},it_IT:{identifier:"it-IT",days:["domenica","luned\xec","marted\xec","mercoled\xec","gioved\xec","venerd\xec","sabato"],shortDays:["dom","lun","mar","mer","gio","ven","sab"],months:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],shortMonths:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},nl_NL:{identifier:"nl-NL",days:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],shortDays:["zo","ma","di","wo","do","vr","za"],months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],shortMonths:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d-%m-%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},pt_BR:{identifier:"pt-BR",days:["domingo","segunda","ter\xe7a","quarta","quinta","sexta","s\xe1bado"],shortDays:["Dom","Seg","Ter","Qua","Qui","Sex","S\xe1b"],months:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d-%m-%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},ru_RU:{identifier:"ru-RU",days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],shortDays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],shortMonths:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X",D:"%d.%m.%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},tr_TR:{identifier:"tr-TR",days:["Pazar","Pazartesi","Salı","\xc7arşamba","Perşembe","Cuma","Cumartesi"],shortDays:["Paz","Pzt","Sal","\xc7rş","Prş","Cum","Cts"],months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eyl\xfcl","Ekim","Kasım","Aralık"],shortMonths:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],AM:"\xd6\xd6",PM:"\xd6S",am:"\xd6\xd6",pm:"\xd6S",formats:{c:"%a %d %b %Y %X %Z",D:"%d-%m-%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},zh_CN:{identifier:"zh-CN",days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],shortDays:["日","一","二","三","四","五","六"],months:["一月份","二月份","三月份","四月份","五月份","六月份","七月份","八月份","九月份","十月份","十一月份","十二月份"],shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],AM:"上午",PM:"下午",am:"上午",pm:"下午",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%r",x:"%D"}}},r=t.en_US,a=new function e(a,d,m){var h,p=a||r,f=d||0,M=m||!1,b=0,g=function(e,t){var r;if(t){if(r=t.getTime(),M){var a=l(t);if(l(t=new Date(r+a+f))!==a){var d=l(t);t=new Date(r+d+f)}}}else{var m=Date.now();m>b?(b=m,h=new Date(b),r=b,M&&(h=new Date(b+l(h)+f))):r=b,t=h}return function e(t,r,a,l){for(var d="",m=null,h=!1,p=t.length,b=!1,g=0;g<p;g++){var v=t.charCodeAt(g);if(!0===h){if(45===v){m="";continue}if(95===v){m=" ";continue}if(48===v){m="0";continue}if(58===v){b&&c("[WARNING] detected use of unsupported %:: or %::: modifiers to strftime"),b=!0;continue}switch(v){case 37:d+="%";break;case 65:d+=a.days[r.getDay()];break;case 66:d+=a.months[r.getMonth()];break;case 67:d+=n(Math.floor(r.getFullYear()/100),m);break;case 68:d+=e(a.formats.D,r,a,l);break;case 70:d+=e(a.formats.F,r,a,l);break;case 72:d+=n(r.getHours(),m);break;case 73:d+=n(s(r.getHours()),m);break;case 76:d+=o(Math.floor(l%1e3));break;case 77:d+=n(r.getMinutes(),m);break;case 80:d+=12>r.getHours()?a.am:a.pm;break;case 82:d+=e(a.formats.R,r,a,l);break;case 83:d+=n(r.getSeconds(),m);break;case 84:d+=e(a.formats.T,r,a,l);break;case 85:d+=n(i(r,"sunday"),m);break;case 87:d+=n(i(r,"monday"),m);break;case 88:d+=e(a.formats.X,r,a,l);break;case 89:d+=r.getFullYear();break;case 90:M&&0===f?d+="GMT":d+=function(e,t){if(null==t)return null;var r=e.toLocaleString(t,{timeZoneName:"short"}).match(/\s([\w]+)$/);return r&&r[1]}(r,void 0)||function(e){var t=e.toString().match(/\(([\w\s]+)\)/);return t&&t[1]}(r)||"";break;case 97:d+=a.shortDays[r.getDay()];break;case 98:case 104:d+=a.shortMonths[r.getMonth()];break;case 99:d+=e(a.formats.c,r,a,l);break;case 100:d+=n(r.getDate(),m);break;case 101:d+=n(r.getDate(),null==m?" ":m);break;case 106:var x=new Date(r.getFullYear(),0,1),y=Math.ceil((r.getTime()-x.getTime())/864e5);d+=o(y);break;case 107:d+=n(r.getHours(),null==m?" ":m);break;case 108:d+=n(s(r.getHours()),null==m?" ":m);break;case 109:d+=n(r.getMonth()+1,m);break;case 110:d+="\n";break;case 111:var y=r.getDate();a.ordinalSuffixes?d+=String(y)+(a.ordinalSuffixes[y-1]||u(y)):d+=String(y)+u(y);break;case 112:d+=12>r.getHours()?a.AM:a.PM;break;case 114:d+=e(a.formats.r,r,a,l);break;case 115:d+=Math.floor(l/1e3);break;case 116:d+="	";break;case 117:var y=r.getDay();d+=0===y?7:y;break;case 118:d+=e(a.formats.v,r,a,l);break;case 119:d+=r.getDay();break;case 120:d+=e(a.formats.x,r,a,l);break;case 121:d+=n(r.getFullYear()%100,m);break;case 122:if(M&&0===f)d+=b?"+00:00":"+0000";else{var D,S=(D=0!==f?f/6e4:-r.getTimezoneOffset())<0?"-":"+",j=b?":":"",k=Math.floor(Math.abs(D/60)),T=Math.abs(D%60);d+=S+n(k)+j+n(T)}break;default:h&&(d+="%"),d+=t[g]}m=null,h=!1;continue}if(37===v){h=!0;continue}d+=t[g]}return d}(e,t,p,r)};return g.localize=function(t){return new e(t||p,f,M)},g.localizeByIdentifier=function(e){var r=t[e];return r?g.localize(r):(c('[WARNING] No locale found with identifier "'+e+'".'),g)},g.timezone=function(t){var r=f,a=M,n=typeof t;return("number"===n||"string"===n)&&(a=!0,"string"===n?r=("-"===t[0]?-1:1)*(60*parseInt(t.slice(1,3),10)+parseInt(t.slice(3,5),10))*6e4:"number"===n&&(r=6e4*t)),new e(p,r,a)},g.utc=function(){return new e(p,f,!0)},g}(r,0,!1);function n(e,t){return""===t||e>9?""+e:(null==t&&(t="0"),t+e)}function o(e){return e>99?e:e>9?"0"+e:"00"+e}function s(e){return 0===e?12:e>12?e-12:e}function i(e,t){t=t||"sunday";var r=e.getDay();"monday"===t&&(0===r?r=6:r--);var a=Date.UTC(e.getFullYear(),0,1);return Math.floor((Math.floor((Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())-a)/864e5)+7-r)/7)}function u(e){var t=e%10,r=e%100;if(r>=11&&r<=13||0===t||t>=4)return"th";switch(t){case 1:return"st";case 2:return"nd";case 3:return"rd"}}function l(e){return 6e4*(e.getTimezoneOffset()||0)}function c(e){"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(e)}e.exports=a,"function"!=typeof Date.now&&(Date.now=function(){return+new Date})}()}}]);