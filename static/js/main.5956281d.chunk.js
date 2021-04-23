(this["webpackJsonphabbit-tracker"]=this["webpackJsonphabbit-tracker"]||[]).push([[0],{159:function(e,n,t){},460:function(e,n,t){"use strict";t.r(n);var r,o,c,a,i,s,u,d,l,m,b,f,h,j,p,x,O=t(0),g=t.n(O),v=t(30),w=t.n(v),y=(t(159),t(16)),k=t(3),z=t(7),F={base:"10px",family:"Arial",light:300,regular:400,medium:500,bold:700,sizes:{xs:"0.75rem",s:"1rem",sm:"1.25rem",m:"1.5rem",ml:"2rem",l:"3rem"}},E={colors:{common:{black:"#000000",white:"#FFFFFF"}},font:F,margin:{xs:"0.5rem",s:"0.75rem",sm:"1rem",m:"1.25rem",ml:"1.5rem",l:"1.75rem"},time:{short:100,medium:300,long:500},zIndex:{max:1e3,medium:500,low:100},chooseFS:function(e){var n=F.sizes,t=Object.keys(n).find((function(n){return n===e}));return void 0!==t?n[t]:n.xs},sizes:{nav:"50px",dot:"20px"},media:{phone:{s:"320px"},tablet:{s:"768px",l:"1024px"},desktop:{s:"1366px",l:"1920px"}}},S="#AFE9FF",L=Object(z.a)(Object(z.a)({},E),{},{gridTile:{size:50},colors:Object(z.a)(Object(z.a)({},E.colors),{},{body:"#F3FFF2",calendar:{navigation:"#EDEFFF"},text:{primary:E.colors.common.black,secondary:"#808080",nav:"#A5A5A5"},button:{background:"#FFC136",text:"#fff"},nav:{topLeft:"#B7FF96",topRight:"#89FFED",bottomLeft:"#FDF194",bottomRight:"#FFADFC",background:"#A4FF9D",button:"#FFED67"},tile:{background:"#FFFCAF",backgroundActive:S},modalBackground:S,error:{main:"#FF9191",border:"#730000",text:"#730000"},loading:{main:"#a6fff9",border:"#1b968e",text:"#1b968e"},border:"#707070"})}),D=t(2),R=Object(O.createContext)(L),C=R.Provider,T=function(e){var n=e.children;return Object(D.jsx)(C,{value:L,children:Object(D.jsx)(k.a,{theme:L,children:n})})},A=t(9),I=new(t(155).a),N=Object(O.createContext)({token:void 0,login:function(){},logout:function(){}}),G=N.Provider,P=function(){var e=new Date;return e.setDate(e.getDate()+14),e},_=function(){return Object(O.useContext)(N)},V=function(e){var n=e.children,t=Object(O.useState)(I.get("token")),r=Object(A.a)(t,2),o=r[0],c=r[1],a={token:o,login:function(e){I.set("token",e,{path:"/",expires:P()}),c(e)},logout:function(){I.remove("token",{path:"/"}),c(void 0)}};return Object(D.jsx)(G,{value:a,children:n})},B=t(4),H=k.c.button(r||(r=Object(B.a)(["\n  position: fixed;\n  height: ",";\n  width: ",";\n  top: ",";\n  background-color: transparent;\n  border: none;\n  right: ",";\n  padding: 0;\n  ","\n  transition: ",";\n  z-index: ",";\n  &:focus {\n    outline: none;\n  }\n"])),(function(e){return e.theme.sizes.nav}),(function(e){return e.theme.sizes.nav}),(function(e){return e.theme.margin.sm}),(function(e){return e.theme.margin.sm}),(function(e){return e.open&&"transform: rotate(-45deg);"}),(function(e){var n=e.theme;return"".concat(n.time.medium,"ms")}),(function(e){return e.theme.zIndex.max})),J=k.c.div(o||(o=Object(B.a)(["\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  position: absolute;\n  opacity: ",";\n  transition: ",";\n"])),(function(e){return e.theme.sizes.dot}),(function(e){return e.theme.sizes.dot}),(function(e){return e.open?"0":"1"}),(function(e){var n=e.theme;return"".concat(n.time.medium,"ms")})),M=Object(k.c)(J)(c||(c=Object(B.a)(["\n  background-color: ",";\n  top: 0;\n  left: 0;\n"])),(function(e){return e.theme.colors.nav.topLeft})),W=Object(k.c)(J)(a||(a=Object(B.a)(["\n  background-color: ",";\n  top: 0;\n  right: 0;\n"])),(function(e){return e.theme.colors.nav.topRight})),K=Object(k.c)(J)(i||(i=Object(B.a)(["\n  background-color: ",";\n  bottom: 0;\n  left: 0;\n"])),(function(e){return e.theme.colors.nav.bottomLeft})),Y=Object(k.c)(J)(s||(s=Object(B.a)(["\n  background-color: ",";\n  bottom: 0;\n  right: 0;\n"])),(function(e){return e.theme.colors.nav.bottomRight})),q=k.c.div(u||(u=Object(B.a)(["\n  position: absolute;\n  height: 3px;\n  width: ",";\n  background-color: ",";\n  opacity: ",";\n  transition: ",";\n"])),(function(e){return e.theme.sizes.nav}),(function(e){return e.theme.colors.error.main}),(function(e){return e.open?"1":"0"}),(function(e){var n=e.theme;return"".concat(n.time.medium,"ms")})),U=Object(k.c)(q)(d||(d=Object(B.a)(["\n  transform: rotate(90deg);\n  top: 50%;\n"]))),$={DASHBOARD:"/",CALENDAR:"/calendar",LOGIN:"/login",REGISTER:"/register"},Q=k.c.section(l||(l=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),X=Object(k.c)(Q)(m||(m=Object(B.a)(["\n  height: 100vh;\n  width: 100%;\n  padding: 0 1rem;\n  @media (min-width: ",") {\n    flex-direction: row;\n    justify-content: space-between;\n    max-width: 1000px;\n    margin: 0 auto;\n  }\n"])),(function(e){return e.theme.media.tablet.s})),Z=Object(k.c)(Q)(b||(b=Object(B.a)(["\n  @media (min-width: ",") {\n    margin-right: ",";\n  }\n"])),(function(e){return e.theme.media.tablet.s}),(function(e){return e.theme.margin.l})),ee=k.c.h2(f||(f=Object(B.a)(["\n  font-size: ",";\n  margin: "," 0;\n  @media (max-width: ",") {\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.font.sizes.l}),(function(e){return e.theme.margin.sm}),(function(e){return e.theme.media.phone.s}),(function(e){return e.theme.font.sizes.ml})),ne=k.c.p(h||(h=Object(B.a)(["\n  color: ",";\n  text-align: justify;\n  font-size: ",";\n  margin-bottom: ",";\n  @media (max-width: ",") {\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.colors.text.secondary}),(function(e){return e.theme.font.sizes.m}),(function(e){return e.theme.margin.l}),(function(e){return e.theme.media.phone.s}),(function(e){return e.theme.font.sizes.sm})),te=k.c.p(j||(j=Object(B.a)(["\n  font-size: ",";\n  margin: ",";\n"])),(function(e){return e.theme.font.sizes.sm}),(function(e){return e.theme.margin.s})),re=function(){return Object(D.jsx)(Cn,{children:Object(D.jsxs)(X,{children:[Object(D.jsxs)(Z,{children:[Object(D.jsx)(ee,{children:"Habbit tracker"}),Object(D.jsx)(ne,{children:"Track your progress in very simple and personalized app"})]}),Object(D.jsxs)(Q,{children:[Object(D.jsx)(Sn,{as:y.b,to:$.REGISTER,size:"m",children:"Create account for free"}),Object(D.jsx)(te,{children:"or"}),Object(D.jsx)(Sn,{as:y.b,to:$.LOGIN,size:"m",children:"Log in"})]})]})})},oe=t(5),ce=t.n(oe),ae=t(10),ie=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],se=["January","February","March","April","May","Juny","Juni","August","September","October","November","December"],ue=function(e){var n=new Date(e),t=new Date(n.getFullYear(),0,0),r=n-t+60*(t.getTimezoneOffset()-n.getTimezoneOffset())*1e3;return Math.floor(r/864e5)},de=function(e){return e.toISOString().match(/\d{4}-\d{2}-\d{2}/)[0]},le=(t(151),t(152),t(59),t(17),t(11)),me=function(e){return{required:"Field ".concat(e," is required.")}},be={pattern:{value:/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,message:"Incorrect characters."}},fe=function(e){return Object(z.a)(Object(z.a)({},me(e)),{},{minLength:{value:6,message:"Field ".concat(e," must have at least 6 characters.")},maxLength:{value:30,message:"Field ".concat(e," must have maximum 30 characters.")}})};!function(e){e[e.LEFT=-1]="LEFT",e[e.RIGHT=1]="RIGHT"}(p||(p={}));var he,je,pe,xe,Oe,ge,ve,we,ye,ke,ze,Fe,Ee,Se,Le,De,Re,Ce,Te,Ae,Ie,Ne,Ge,Pe,_e=k.c.div(x||(x=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),Ve=k.c.div(he||(he=Object(B.a)(["\n  width: ",";\n  height: ",";\n  position: relative;\n  overflow: hidden;\n  background-color: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.gridTile.size,"px")}),(function(e){var n=e.theme;return"".concat(n.gridTile.size,"px")}),(function(e){return e.theme.colors.common.white})),Be=k.c.div(je||(je=Object(B.a)(["\n  position: absolute;\n  border-radius: 50%;\n  width: ",";\n  height: ",";\n  background-color: ",";\n  top: ",";\n  left: ",";\n  ","\n"])),(function(e){var n=e.size,t=e.alone;return"".concat(t?n/1.3:n,"px")}),(function(e){var n=e.size,t=e.alone;return"".concat(t?n/1.3:n,"px")}),(function(e){return e.color}),(function(e){var n=e.position;return"".concat(n,"px")}),(function(e){var n=e.position;return"".concat(n,"px")}),(function(e){return e.alone&&"transform: translate(-50%,-50%);top: 50%;left:50%"})),He=k.c.p(pe||(pe=Object(B.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: ",";\n"])),(function(e){return e.theme.zIndex.low})),Je=function(e,n){var t=n*(1.3+.1*(e.length-2))/e.length,r=(n-t)/(e.length-1),o=-r;return e.map((function(n){return n?(o+=r,Object(D.jsx)(Be,{position:o,alone:1===e.length,color:n.color,size:t},n.id)):null}))},Me=function(e){var n=e.colors,t=e.day,r=Object(O.useContext)(R).gridTile.size;return Object(D.jsx)(Ve,{children:-1===t?null:Object(D.jsxs)(D.Fragment,{children:[n&&Je(n,r),Object(D.jsx)(He,{children:t})]})})},We=function(e,n,t){var r=Object(O.useState)([]),o=Object(A.a)(r,2),c=o[0],a=o[1];return Object(O.useEffect)((function(){var r=new Date(t,n).getDay(),o=32-new Date(t,n,32).getDate();0===r&&(r=7),r-=1;var c=[];c=e.map((function(e){return Object(z.a)(Object(z.a)({},e),{},{numericStart:ue(e.dateStart),numericEnd:ue(e.dateEnd)})}));for(var i=[],s=[],u=ue("".concat(t,"-").concat(n+1,"-1")),d=0;d<6;d++)for(var l=function(e){if(0===d&&e<r)s.push({id:13*d+17*e+d*e,day:-1,events:[]});else{i=i.filter((function(n){return n.numericEnd>u&&n.daysOfWeek.includes(e)}));var n=7*d+e-r+1;if(n>o)return"break";c=c.filter((function(n){return n.numericStart<=u&&u<=n.numericEnd&&!i.includes(n)&&n.daysOfWeek.includes(e)&&i.push(n),u<=n.numericEnd})),s.push({id:13*d+17*e,day:n,events:i}),u+=1}},m=0;m<7;m++){if("break"===l(m))break}a(s)}),[n,t,e]),[c]},Ke=k.c.div(xe||(xe=Object(B.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n  grid-template-rows: auto;\n  max-width: 100%;\n  border: 1px solid ",";\n  border-top: none;\n  background-color: #fff;\n"])),(function(e){return e.theme.colors.border})),Ye=Object(k.c)(Ke)(Oe||(Oe=Object(B.a)(["\n  background-color: ",";\n  border-top: 1px solid ",";\n  border-bottom: none;\n"])),(function(e){return e.theme.colors.calendar.navigation}),(function(e){return e.theme.colors.border})),qe=k.c.div(ge||(ge=Object(B.a)(["\n  width: ",";\n  padding: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.gridTile.size,"px")}),(function(e){return e.theme.margin.s})),Ue=function(e){var n=e.events,t=e.month,r=e.year,o=e.moveDate,c=We(n,t,r),a=Object(A.a)(c,1)[0];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(nn,{moveDate:o,month:t,year:r}),Object(D.jsx)(Ye,{children:ie.map((function(e){return Object(D.jsx)(qe,{children:e},e)}))}),Object(D.jsx)(Ke,{children:a.map((function(e){var n=e.id,t=e.day,r=e.events;return Object(D.jsx)(Me,{colors:r.map((function(e,n){var t=e.label;return"object"===typeof t?{color:null===t||void 0===t?void 0:t.color,id:n}:{}})),day:t},n)}))})]})},$e=t(99),Qe=t(100),Xe=k.c.div(ve||(ve=Object(B.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Ze=k.c.button(we||(we=Object(B.a)(["\n  background-color: transparent;\n  border: none;\n  font-size: ",";\n"])),(function(e){return e.theme.font.sizes.m})),en=k.c.h3(ye||(ye=Object(B.a)(["\n  width: 200px;\n  text-align: center;\n  line-height: 100%;\n  margin: 0;\n"]))),nn=function(e){var n=e.month,t=e.year,r=e.moveDate;return Object(D.jsxs)(Xe,{children:[Object(D.jsx)(Ze,{onClick:function(){return r(p.LEFT)},children:Object(D.jsx)($e.a,{icon:Qe.a})}),Object(D.jsx)(en,{children:"".concat(se[n]," ").concat(t)}),Object(D.jsx)(Ze,{onClick:function(){return r(p.RIGHT)},children:Object(D.jsx)($e.a,{icon:Qe.b})})]})},tn=Object({NODE_ENV:"production",PUBLIC_URL:"/habbit-tracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND,rn="".concat(tn,"/"),on="".concat(rn,"users/"),cn="".concat(rn,"events/"),an="".concat(rn,"labels/"),sn={LOGIN:"".concat(on,"login/"),REGISTER:"".concat(on,"register/"),LOGOUT:"".concat(on,"logout/"),EVENTS:cn,LABELS:an},un=function(){var e=Object(ae.a)(ce.a.mark((function e(n,t,r){var o;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(sn.EVENTS,"?from=").concat(t,"&to=").concat(r),{headers:{"Content-Type":"application/json",Authorization:"".concat(n)},method:"GET"});case 2:if(200!==(o=e.sent).status){e.next=5;break}return e.abrupt("return",o.json());case 5:throw new Error("Something went wrong.");case 6:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),dn=function(){var e=Object(ae.a)(ce.a.mark((function e(n){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(sn.LABELS),{headers:{"Content-Type":"application/json",Authorization:"".concat(n)},method:"GET"});case 2:if(200!==(t=e.sent).status){e.next=5;break}return e.abrupt("return",t.json());case 5:throw new Error("Something went wrong.");case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ln=function(){var e=Object(O.useState)(new Date),n=Object(A.a)(e,2),t=n[0],r=(n[1],Object(O.useState)(t.getMonth())),o=Object(A.a)(r,2),c=o[0],a=o[1],i=Object(O.useState)(t.getFullYear()),s=Object(A.a)(i,2),u=s[0],d=s[1],l=Object(O.useState)([]),m=Object(A.a)(l,2),b=m[0],f=m[1],h=Object(O.useState)([]),j=Object(A.a)(h,2),x=(j[0],j[1],_().token);Object(O.useEffect)((function(){(function(){var e=Object(ae.a)(ce.a.mark((function e(){var n,t,r,o,a,i;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=de(new Date(u,c,2)),t=33-new Date(u,c,32).getDate(),r=de(new Date(u,c,t)),e.next=6,un(x,n,r);case 6:return o=e.sent,e.next=9,dn(x);case 9:a=e.sent,i=o.map((function(e){var n=a.labels.filter((function(n){return(null===e||void 0===e?void 0:e.label)===(null===n||void 0===n?void 0:n._id)}))[0];return Object(z.a)(Object(z.a)({},e),{},{label:n})})),f(i),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}})()()}),[u,c]);return Object(D.jsx)(_e,{children:Object(D.jsx)(Ue,{events:b,month:c,moveDate:function(e){e===p.LEFT?0===c?(a(11),d((function(e){return e-1}))):a((function(n){return n+e})):11===c?(a(0),d((function(e){return e+1}))):a((function(n){return n+e}))},year:u})})},mn=t(71),bn=Object(k.c)(Q)(ke||(ke=Object(B.a)(["\n  height: 100vh;\n  width: 100%;\n"]))),fn=function(){var e=Object(ae.a)(ce.a.mark((function e(n){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(sn.LOGIN,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(n)});case 2:if(200!==(t=e.sent).status){e.next=5;break}return e.abrupt("return",t.json());case 5:throw new Error("Something went wrong.");case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),hn=function(){var e=Object(O.useState)(""),n=Object(A.a)(e,2),t=n[0],r=n[1],o=Object(O.useState)(!1),c=Object(A.a)(o,2),a=c[0],i=c[1],s=_(),u=Object(mn.a)(),d=u.register,l=u.handleSubmit,m=u.errors,b=Object(le.g)(),f=function(){var e=Object(ae.a)(ce.a.mark((function e(n){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,fn(n);case 4:t=e.sent,i(!1),s.login(t.token),b.push($.CALENDAR),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),r(e.t0.message),i(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}();return s.token?Object(D.jsx)(le.a,{to:$.CALENDAR}):Object(D.jsx)(Cn,{children:Object(D.jsxs)(bn,{as:"form",onSubmit:l(f),noValidate:!0,children:[Object(D.jsx)(Pn,{name:"login",label:"Login",id:"login",refVal:d(fe("login")),minLength:6,maxLength:30,error:m.login,"data-testid":"login"}),Object(D.jsx)(Pn,{name:"password",label:"Password",id:"password",type:"password",refVal:d(fe("password")),autoComplete:"on",minLength:6,maxLength:30,error:m.password,"data-testid":"password"}),Object(D.jsx)(Jn,{error:t,loading:a}),Object(D.jsx)(Sn,{size:"m",type:"submit","data-testid":"submit",children:"Log in"})]})})},jn=function(){var e=Object(ae.a)(ce.a.mark((function e(n){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(sn.REGISTER,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(n)});case 2:if(200!==(t=e.sent).status){e.next=5;break}return e.abrupt("return",t.json());case 5:throw new Error("Something went wrong.");case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),pn=$.DASHBOARD,xn=$.CALENDAR,On=$.LOGIN,gn=$.REGISTER,vn=[{link:pn,name:"Home page"},{link:xn,name:"Your tracker"},{link:On,name:"Login"},{link:gn,name:"Register"}],wn=[{path:pn,Component:re,exact:!0},{path:xn,Component:ln,isPrivate:!0},{path:On,Component:hn},{path:gn,Component:function(){var e=Object(O.useState)(""),n=Object(A.a)(e,2),t=n[0],r=n[1],o=Object(O.useState)(!1),c=Object(A.a)(o,2),a=c[0],i=c[1],s=_(),u=Object(mn.a)(),d=u.register,l=u.handleSubmit,m=u.errors,b=Object(le.g)(),f=function(){var e=Object(ae.a)(ce.a.mark((function e(n){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.password!==n.passwordRepeat){e.next=17;break}return i(!0),e.prev=2,e.next=5,jn(n);case 5:t=e.sent,i(!1),s.login(t.token),b.push($.CALENDAR),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),r(e.t0.message),i(!1);case 15:e.next=18;break;case 17:r("Passwords must be equal.");case 18:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(n){return e.apply(this,arguments)}}();return s.token?Object(D.jsx)(le.a,{to:$.CALENDAR}):Object(D.jsx)(Cn,{children:Object(D.jsxs)(bn,{as:"form",onSubmit:l(f),noValidate:!0,children:[Object(D.jsx)("h2",{children:"Create new account"}),Object(D.jsx)(Pn,{name:"login",label:"Login",id:"login",refVal:d(fe("login")),minLength:6,maxLength:30,error:m.login,"data-testid":"login"}),Object(D.jsx)(Pn,{name:"email",label:"Email",id:"email",type:"email",refVal:d(Object(z.a)(Object(z.a)({},me("email")),be)),error:m.email,"data-testid":"email"}),Object(D.jsx)(Pn,{name:"password",label:"Password",id:"password",type:"password",refVal:d(fe("password")),autoComplete:"on",minLength:6,maxLength:30,error:m.password,"data-testid":"password"}),Object(D.jsx)(Pn,{name:"passwordRepeat",label:"Repeat password",id:"passwordRepeat",type:"password",refVal:d(fe("repeat password")),autoComplete:"on",minLength:6,maxLength:30,error:m.passwordRepeat,"data-testid":"passwordRepeat"}),Object(D.jsx)(Jn,{error:t,loading:a}),Object(D.jsx)(Sn,{size:"m",type:"submit","data-testid":"submit",children:"Create account"})]})})}}],yn=k.c.nav(ze||(ze=Object(B.a)(["\n  transform: ",";\n  opacity: ",";\n  transition: ",";\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  position: fixed;\n  background-color: ",";\n  z-index: ",";\n"])),(function(e){var n=e.open;return"scale(".concat(n?"1":"0",")")}),(function(e){return e.open?"1":"0"}),(function(e){var n=e.theme;return"opacity ".concat(n.time.medium,"ms")}),(function(e){return e.theme.colors.nav.background}),(function(e){return e.theme.zIndex.medium})),kn=k.c.div(Fe||(Fe=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),zn=Object(k.c)(y.b)(Ee||(Ee=Object(B.a)(["\n  color: ",";\n  text-decoration: none;\n  font-size: ",";\n  margin-bottom: ",";\n  transform: ",";\n  opacity: ",";\n  transition: ",";\n"])),(function(e){return e.theme.colors.text.nav}),(function(e){return e.theme.font.sizes.m}),(function(e){return e.theme.margin.m}),(function(e){var n=e.open;return"scale(".concat(n?"1":"2",") translateY(").concat(n?"0px":"-50px",")")}),(function(e){return e.open?"1":"0"}),(function(e){var n=e.theme;return e.open?"".concat(n.time.medium,"ms"):"0"})),Fn=function(e){var n=e.open,t=e.handleClose;return Object(D.jsx)(yn,{open:n,children:Object(D.jsx)(kn,{children:vn.map((function(e){var r=e.name,o=e.link;return Object(D.jsx)(zn,{open:n,to:o,onClick:function(){return t()},children:r},r)}))})})},En=function(){var e=Object(O.useState)(!1),n=Object(A.a)(e,2),t=n[0],r=n[1];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(H,{open:t,"data-testid":"navButton",onClick:function(){return r((function(e){return!e}))},children:[Object(D.jsx)(M,{open:t}),Object(D.jsx)(W,{open:t}),Object(D.jsx)(K,{open:t}),Object(D.jsx)(Y,{open:t}),Object(D.jsx)(q,{open:t}),Object(D.jsx)(U,{open:t})]}),Object(D.jsx)(Fn,{open:t,handleClose:function(){return r(!1)}})]})},Sn=k.c.button(Se||(Se=Object(B.a)(["\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  padding: ",";\n  font-size: ",";\n  min-width: ",";\n  display: inline-block;\n  text-align: center;\n"])),(function(e){return e.theme.colors.button.text}),(function(e){return e.theme.colors.button.background}),(function(e){return e.theme.colors.border}),(function(e){var n=e.theme,t=e.size;return t?n.margin[t]:n.margin.s}),(function(e){var n=e.theme,t=e.size;return t?n.font.sizes[t]:n.font.sizes.s}),(function(e){return e.noMaxWidth?"none":"150px"})),Ln=k.c.header(Le||(Le=Object(B.a)(["\n  position: fixed;\n  top: ",";\n  width: 100%;\n  text-align: center;\n  height: ",";\n  line-height: ",";\n  z-index: ",";\n  display: flex;\n  justify-content: center;\n\n  @media (max-width: ",") {\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.margin.sm}),(function(e){return e.theme.sizes.nav}),(function(e){return e.theme.sizes.nav}),(function(e){return e.theme.zIndex.max}),(function(e){return e.theme.media.phone.s}),(function(e){return e.theme.font.sizes.xs})),Dn=Object(k.c)(y.b)(De||(De=Object(B.a)(["\n  color: ",";\n  text-decoration: none;\n"])),(function(e){return e.theme.colors.common.black})),Rn=function(){return Object(D.jsx)(Ln,{children:Object(D.jsx)(Dn,{to:$.DASHBOARD,children:Object(D.jsx)("h1",{children:"Habbit tracker"})})})},Cn=k.c.main(Re||(Re=Object(B.a)(["\n  min-height: 100vh;\n  width: 100%;\n"]))),Tn=t(72),An=k.c.div(Ce||(Ce=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: ",";\n  width: 100%;\n  max-width: 300px;\n"])),(function(e){return e.theme.margin.sm})),In=k.c.label(Te||(Te=Object(B.a)(["\n  font-size: ",";\n  margin-bottom: ",";\n"])),(function(e){return e.theme.font.sizes.m}),(function(e){return e.theme.margin.s})),Nn=k.c.input(Ae||(Ae=Object(B.a)(["\n  font-size: ",";\n  width: 100%;\n  max-width: 300px;\n  border: ",";\n  &:focus {\n    outline: thin dotted;\n  }\n"])),(function(e){return e.theme.font.sizes.sm}),(function(e){var n=e.error,t=e.theme;return n&&"1px solid ".concat(t.colors.error.main)})),Gn=k.c.p(Ie||(Ie=Object(B.a)(["\n  margin-top: ",";\n  color: ",";\n  text-align: justify;\n"])),(function(e){return e.theme.margin.xs}),(function(e){return e.theme.colors.error.main})),Pn=function(e){var n=e.label,t=e.id,r=e.refVal,o=e.error,c=e.type,a=void 0===c?"text":c,i=Object(Tn.a)(e,["label","id","refVal","error","type"]);return Object(D.jsxs)(An,{children:[Object(D.jsx)(In,{htmlFor:t,children:n}),Object(D.jsx)(Nn,Object(z.a)(Object(z.a)({error:!!o,id:t,type:a},i),{},{ref:r})),o&&Object(D.jsx)(Gn,{children:null===o||void 0===o?void 0:o.message})]})};!function(e){e.ERROR="error",e.LOADING="loading"}(Ne||(Ne={}));var _n,Vn=k.c.div(Ge||(Ge=Object(B.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Bn=k.c.div(Pe||(Pe=Object(B.a)(["\n  border: ",";\n  background-color: ",";\n  color: ",";\n  border-radius: 5px;\n  padding: ",";\n  font-size: ",";\n  margin-bottom: ",";\n"])),(function(e){var n=e.type,t=e.theme;return"1px solid ".concat(t.colors[n].border)}),(function(e){var n=e.type,t=e.theme;return"".concat(t.colors[n].main)}),(function(e){var n=e.type,t=e.theme;return"".concat(t.colors[n].text)}),(function(e){return e.theme.margin.xs}),(function(e){return e.theme.font.sizes.s}),(function(e){return e.theme.margin.sm})),Hn=function(e){var n=e.children,t=void 0===n?"\u0141adowanie...":n,r=e.type,o=void 0===r?Ne.ERROR:r;return Object(D.jsx)(Vn,{children:Object(D.jsx)(Bn,{"data-testid":"alert",type:o,children:t})})},Jn=function(e){var n=e.error,t=e.loading,r=Object(Tn.a)(e,["error","loading"]);return n?Object(D.jsx)(Hn,Object(z.a)(Object(z.a)({},r),{},{children:n})):t?Object(D.jsx)(Hn,Object(z.a)(Object(z.a)({},r),{},{type:Ne.LOADING})):null},Mn=Object(k.b)(_n||(_n=Object(B.a)(["\n    body{\n        color: ",";\n        background-color: ",";\n        font-family: 'Roboto', sans-serif;\n        overflow-x: hidden;\n    }\n    * {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.body})),Wn=function(){return Object(D.jsx)(T,{children:Object(D.jsxs)(V,{children:[Object(D.jsx)(Mn,{}),Object(D.jsxs)(y.a,{basename:"/habbit-tracker",children:[Object(D.jsx)(Rn,{}),Object(D.jsx)(En,{}),Object(D.jsx)(Yn,{})]})]})})},Kn=function(e){var n=Object.assign({},e);return _().token?Object(D.jsx)(le.b,Object(z.a)({},n)):Object(D.jsx)(le.a,{to:$.LOGIN})},Yn=function(){return Object(D.jsx)(le.d,{children:wn.map((function(e){var n=e.path,t=e.Component;return e.isPrivate?Object(D.jsx)(Kn,{path:n,children:Object(D.jsx)(t,{})},n):Object(D.jsx)(le.b,{path:n,exact:!0,children:Object(D.jsx)(t,{})},n)}))})},qn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,461)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),c(e),a(e)}))};w.a.render(Object(D.jsx)(g.a.StrictMode,{children:Object(D.jsx)(Wn,{})}),document.getElementById("root")),qn()}},[[460,1,2]]]);
//# sourceMappingURL=main.5956281d.chunk.js.map