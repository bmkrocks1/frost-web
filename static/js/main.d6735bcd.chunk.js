(this["webpackJsonpfrost-web"]=this["webpackJsonpfrost-web"]||[]).push([[0],{128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=a(25),s=a(37),l=a(62),u=a(21),m=a(18),d=a.n(m),p=a(53),f=a.n(p).a.create({baseURL:"https://frost.met.no",auth:{username:"9e0e4f43-d6da-4572-8dd9-f6bad9d545c0",password:"not_in_use"}}),v=function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(f.get("observations/v0.jsonld",{params:e}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},b=function(){var e,t=arguments;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:{},a.next=3,d.a.awrap(f.get("sources/v0.jsonld",{params:e}));case 3:return a.abrupt("return",a.sent);case 4:case"end":return a.stop()}}))},E=function(e){return e().observations},g=function(e){var t=e.station,a=e.timeInterval,n=e.elements;return t&&a?{sources:t.id,referencetime:"".concat(a.from,"/").concat(a.to),elements:n.join(",")}:null},y="observations/GET_OBSERVATIONS_ASYNC",O="observations/GET_OBSERVATIONS_SUCCESS",h="observations/GET_OBSERVATIONS_ERROR",w="observations/SET_STATION",S="observations/CLEAR_ERROR",j=function(){return function(e,t){var a,n,r;return d.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(a=E(t),!(n=g(Object(u.a)({},a)))){o.next=14;break}return e({type:y,payload:null}),o.prev=4,o.next=7,d.a.awrap(v(n));case 7:r=o.sent,e({type:O,payload:r.data}),o.next=14;break;case 11:o.prev=11,o.t0=o.catch(4),e({type:h,payload:o.t0.response.data});case 14:case"end":return o.stop()}}),null,null,[[4,11]])}},T=function(){return{type:S,payload:null}},x={stationsFilter:{types:"SensorSystem",country:"NO",municipality:"OSLO"},stations:[],station:null,timeIntervals:["Today","Yesterday","Last 7 Days","Last 30 Days"],timeInterval:null,observations:[],elements:["air_temperature","wind_speed","boolean_fair_weather(cloud_area_fraction P1D)"],error:null,loading:!1},I=Object(s.c)({observations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(u.a)({},e,{loading:!0,observations:[],error:null});case O:return Object(u.a)({},e,{observations:t.payload.data,error:null,loading:!1});case h:return Object(u.a)({},e,{error:t.payload.error,observations:[],loading:!1});case"observations/GET_STATIONS_SUCCESS":return Object(u.a)({},e,{stations:t.payload.data});case"observations/GET_STATIONS_ERROR":return Object(u.a)({},e,{error:t.payload.error});case w:return Object(u.a)({},e,{station:t.payload});case"observations/SET_TIME_INTERVAL":return Object(u.a)({},e,{timeInterval:t.payload});case S:return Object(u.a)({},e,{error:null});default:return e}}});var _=a(35),N=a(29),R=a(3),C=a(77),k=a(23),A=a(183),B=a(182),D=a(185),L=a(192),G=a(175),P=a(178),z=a(130),M=a(186),V=a(187),W=a(184),H=a(58),U=a(81),Y=a.n(U),F=a(83),q=a.n(F),J=a(87),X=a.n(J),K=a(86),Q=a.n(K),Z=a(82),$=a.n(Z),ee=a(84),te=a.n(ee),ae=a(85),ne=a.n(ae),re=a(194),oe=a(176),ce=a(195),ie=a(188),se=a(179),le=a(180),ue=a(193),me=a(181),de=a(191),pe=a(189),fe=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.observations})),a=t.error,r=t.stations,o=t.station;return Object(n.useEffect)((function(){e((function(e,t){var a,n;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=E(t).stationsFilter,r.prev=1,e({type:"observations/GET_STATIONS_ASYNC",payload:null}),r.next=5,d.a.awrap(b(a));case 5:n=r.sent,e({type:"observations/GET_STATIONS_SUCCESS",payload:n.data}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),e({type:"observations/GET_STATIONS_ERROR",payload:r.t0.response.data});case 12:case"end":return r.stop()}}),null,null,[[1,9]])}))}),[]),[a,r,o,function(t){t&&e(function(e){return function(t,a){return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:w,payload:e}),n.next=3,d.a.awrap(j()(t,a));case 3:case"end":return n.stop()}}))}}(t))},function(){e(T())}]},ve=a(57),be=a(88),Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object(ve.a)(Object(be.a)(new Date,e),"yyyy-MM-dd")},ge={Today:function(){var e=Ee();return["R24/"+e,e+"/PT1H"]},Yesterday:function(){var e=Ee(1);return["R24/"+e,e+"/PT1H"]},"Last 7 Days":function(){var e=Ee(7);return["R7/".concat(e,"T12"),"".concat(e,"T12/P1D")]},"Last 30 Days":function(){var e=Ee(30);return["R30/".concat(e,"T12"),"".concat(e,"T12/P1D")]}},ye=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.observations}));return[t.timeIntervals,t.timeInterval,function(t){if(t&&ge[t]){var a=ge[t](),n=Object(_.a)(a,2),r=n[0],o=n[1];e(function(e){return function(t,a){return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"observations/SET_TIME_INTERVAL",payload:e}),n.next=3,d.a.awrap(j()(t,a));case 3:case"end":return n.stop()}}))}}({name:t,from:r,to:o}))}}]},Oe=a(129),he=a(168),we=Object(C.a)((function(e){return{root:{flexGrow:1},paper:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingTop:e.spacing(1),marginTop:15,marginBottom:20}}})),Se=function(e,t){return r.a.createElement(H.a,{variant:"body2",color:"textSecondary",component:"div",gutterBottom:!0},e,":\xa0",r.a.createElement(H.a,{variant:"body2",color:"textPrimary",display:"inline"},t))},je=function(e){var t=we(),a=e.station,n=e.timeInterval,o=e.count;return r.a.createElement("div",{className:t.root},r.a.createElement(Oe.a,{className:t.paper},r.a.createElement(H.a,{variant:"overline",component:"h6",gutterBottom:!0},r.a.createElement("strong",null,"Information")),r.a.createElement(he.a,{container:!0,spacing:3},r.a.createElement(he.a,{item:!0,xs:!0},Se("Station ID",a?a.id:""),Se("Name",a?a.name:""),Se("Short Name",a?a.shortName:""),Se("Municipality",a?a.municipality:"")),r.a.createElement(he.a,{item:!0,xs:!0},Se("Reference Time",n?"".concat(n.from,"/").concat(n.to):""),Se("Observations Count",a&&n?o:"")))))},Te=a(169),xe=a(170),Ie=a(171),_e=a(172),Ne=a(173),Re=a(174),Ce=Object(C.a)({container:{maxHeight:440}}),ke=function(e,t){var a=Object(ve.a)(new Date(e.referenceTime),"PPpp");return r.a.createElement(xe.a,{hover:!0,key:"".concat(e.sourceId,":").concat(t)},r.a.createElement(Te.a,{component:"th",scope:"row"},a),function(e,t,a){var n=Array(3).fill(null);return e.reduce((function(e,t){switch(t.elementId){case"air_temperature":return e[0]=t.value,e;case"wind_speed":return e[1]=t.value,e;case"boolean_fair_weather(cloud_area_fraction P1D)":return e[2]="0"===t.value?"Cloudy":"Sunny",e;default:return e}}),n).map((function(e,n){return r.a.createElement(Te.a,{align:"right",key:"".concat(t,":").concat(a,"-").concat(n)},e||"-")}))}(e.observations,e.sourceId,t))},Ae=function(e){var t=e.data,a=Ce();return r.a.createElement(Ie.a,{component:Oe.a,className:a.container},r.a.createElement(_e.a,{stickyHeader:!0,size:"small"},r.a.createElement(Ne.a,null,r.a.createElement(xe.a,null,r.a.createElement(Te.a,null,"Date & Time"),r.a.createElement(Te.a,{align:"right"},"Air Temperature\xa0(\xb0C)"),r.a.createElement(Te.a,{align:"right"},"Wind Speed\xa0(m/s)"),r.a.createElement(Te.a,{align:"right"},"Weather"))),r.a.createElement(Re.a,null,t.map(ke))))};function Be(e){return r.a.createElement(pe.a,Object.assign({elevation:6,variant:"filled"},e))}var De=Object(C.a)((function(e){return Object(re.a)({backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},filtersContainer:{marginBottom:20},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},selectStation:{width:280},selectTimeInt:{width:200}})})),Le=function(){var e=De(),t=fe(),a=Object(_.a)(t,4),n=a[0],o=a[1],c=a[2],s=a[3],l=ye(),u=Object(_.a)(l,3),m=u[0],d=u[1],p=u[2],f=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.observations}));return[t.loading,t.error,t.observations,function(){e(T())}]}(),v=Object(_.a)(f,4),b=v[0],E=v[1],g=v[2],y=v[3],O=n||E||null;return r.a.createElement("div",null,r.a.createElement(H.a,{variant:"h6",component:"h2"},"Observations"),r.a.createElement(je,{station:c,timeInterval:d,count:g.length}),r.a.createElement("div",{className:e.filtersContainer},r.a.createElement(oe.a,{className:e.formControl},r.a.createElement(ce.a,{id:"station-select"},"Station"),r.a.createElement(ie.a,{className:e.selectStation,labelId:"station-select",id:"station-select",value:c?c.id:"",onChange:function(e){s(o.find((function(t){return t.id===e.target.value})))}},o.map((function(e){var t=e.id,a=e.name;return r.a.createElement(se.a,{key:t,value:t},t," - ",a)}))),!c&&r.a.createElement(le.a,null,"Required")),r.a.createElement(oe.a,{className:e.formControl},r.a.createElement(ce.a,{id:"time-interval-select"},"Time Range"),r.a.createElement(ie.a,{className:e.selectTimeInt,labelId:"time-interval-select",id:"time-interval-select",value:d?d.name:"",onChange:function(e){p(e.target.value)}},m.map((function(e){return r.a.createElement(se.a,{key:e,value:e},e)}))),!d&&r.a.createElement(le.a,null,"Required"))),r.a.createElement(Ae,{data:g}),r.a.createElement(ue.a,{className:e.backdrop,open:b},r.a.createElement(me.a,{color:"inherit"})),r.a.createElement(de.a,{open:!!O},r.a.createElement(Be,{severity:"error",onClose:y},O&&O.reason)))},Ge=Object(C.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(N.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(u.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}})),Pe=[{text:"Observations",icon:r.a.createElement(Y.a,null)},{text:"Sources",icon:r.a.createElement($.a,null)},{text:"Elements",icon:r.a.createElement(q.a,null)},{text:"Locations",icon:r.a.createElement(te.a,null)}],ze=Object(s.d)(I,Object(s.a)(l.a,(function(e){return function(t){return function(a){console.group(a.type),console.info("dispatching",a);var n=t(a);return console.log("next state",e.getState()),console.groupEnd(),n}}})));c.a.render(r.a.createElement(i.a,{store:ze},r.a.createElement((function(){var e,t,a=Ge(),o=Object(k.a)(),c=Object(n.useState)(!1),i=Object(_.a)(c,2),s=i[0],l=i[1];return r.a.createElement("div",{className:a.root},r.a.createElement(B.a,null),r.a.createElement(A.a,{position:"fixed",className:Object(R.a)(a.appBar,Object(N.a)({},a.appBarShift,s))},r.a.createElement(W.a,null,r.a.createElement(G.a,{color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},edge:"start",className:Object(R.a)(a.menuButton,Object(N.a)({},a.hide,s))},r.a.createElement(ne.a,null)),r.a.createElement(H.a,{variant:"h6",noWrap:!0},"Frost Web Application"))),r.a.createElement(L.a,{variant:"permanent",className:Object(R.a)(a.drawer,(e={},Object(N.a)(e,a.drawerOpen,s),Object(N.a)(e,a.drawerClose,!s),e)),classes:{paper:Object(R.a)((t={},Object(N.a)(t,a.drawerOpen,s),Object(N.a)(t,a.drawerClose,!s),t))}},r.a.createElement("div",{className:a.toolbar},r.a.createElement(G.a,{onClick:function(){l(!1)}},"rtl"===o.direction?r.a.createElement(Q.a,null):r.a.createElement(X.a,null))),r.a.createElement(D.a,null),r.a.createElement(P.a,null,Pe.map((function(e,t){var a=e.text,n=e.icon;return r.a.createElement(z.a,{button:!0,key:a,selected:0===t},r.a.createElement(M.a,null,n),r.a.createElement(V.a,{primary:a}))})))),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(Le,null)))}),null)),document.getElementById("root"))},99:function(e,t,a){e.exports=a(128)}},[[99,1,2]]]);
//# sourceMappingURL=main.d6735bcd.chunk.js.map