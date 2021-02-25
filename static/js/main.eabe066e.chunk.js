(this["webpackJsonpit-logger"]=this["webpackJsonpit-logger"]||[]).push([[0],{29:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(10),l=c.n(r),i=(c(29),c(30),c(5)),o=c.n(i),d=c(3),j=c(4),u=c.n(j),h=c(8),b="GET_LOGS",O="ADD_LOG",m="DELETE_LOG",p="SET_CURRENT",x="CLEAR_CURRENT",f="UPDATE_LOG",g="SET_LOADING",v="LOGS_ERROR",N="SEARCH_LOGS",y=function(){return{type:g}},w=Object(d.b)(null,{searchLogs:function(e){return function(){var t=Object(h.a)(u.a.mark((function t(c){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y(),t.next=4,fetch("/logs?q=".concat(e));case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,c({type:N,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:v,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.searchLogs,c=Object(n.useRef)("");return Object(a.jsx)("nav",{style:{marginBottom:"30px"},className:"blue",children:Object(a.jsx)("div",{className:"nav-wrapper",children:Object(a.jsx)("form",{children:Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("input",{id:"search",type:"search",placeholder:"Search Logs...",ref:c,onChange:function(e){t(c.current.value)}}),Object(a.jsx)("label",{className:"label-icon",htmlFor:"search",children:Object(a.jsx)("i",{className:"material-icons",children:"search"})}),Object(a.jsx)("i",{className:"material-icons",children:"close"})]})})})})})),L=c(21),S=c.n(L),E=Object(d.b)(null,{deleteLog:function(e){return function(){var t=Object(h.a)(u.a.mark((function t(c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y(),t.next=4,fetch("/logs/".concat(e),{method:"DELETE"});case 4:c({type:m,payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c({type:v,payload:t.t0.response.statusText});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},setCurrent:function(e){return{type:p,payload:e}}})((function(e){var t=e.log,c=e.deleteLog,n=e.setCurrent;return Object(a.jsx)("li",{className:"collection-item",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{href:"#edit-log-modal",className:"modal-trigger ".concat(t.attention?"red-text":"blue-text"),onClick:function(){return n(t)},children:t.message}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{className:"grey-text",children:[Object(a.jsxs)("span",{className:"black-text",children:["ID #",t.id," "]}),"last updated by",Object(a.jsxs)("span",{className:"black-text",children:[" ",t.tech]})," on ",Object(a.jsx)(S.a,{format:"MMMM Do YYYY, h:mm:ss a",children:t.date})]}),Object(a.jsx)("a",{href:"#!",onClick:function(){c(t.id),o.a.toast({html:"Log Deleted"})},className:"secondary-content",children:Object(a.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})})),T=function(){return Object(a.jsx)("div",{className:"progress blue lighten-4",children:Object(a.jsx)("div",{className:"indeterminate blue"})})},k=c(9),C=c.n(k),R=function(e){var t=e.log,c=t.logs,s=t.loading,r=e.getLogs;return Object(n.useEffect)((function(){r()}),[]),s||null===c?Object(a.jsx)(T,{}):Object(a.jsxs)("ul",{className:"collection with-header",children:[Object(a.jsx)("li",{className:"collection-header",children:Object(a.jsx)("h4",{className:"center",children:"System Logs"})}),s||0!==c.length?c.map((function(e){return Object(a.jsx)(E,{log:e},e.id)})):Object(a.jsx)("p",{children:"No logs to show.."})]})};R.protoTypes={log:C.a.object.isRequired,getLogs:C.a.func.isRequired};var D=Object(d.b)((function(e){return{log:e.log}}),{getLogs:function(){return function(){var e=Object(h.a)(u.a.mark((function e(t){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(),e.next=4,fetch("/logs");case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,t({type:b,payload:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:v,payload:e.t0.response.statusText});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()}})(R),_=function(){return Object(a.jsxs)("div",{className:"fixed-action-btn",children:[Object(a.jsx)("a",{href:"#add-log-modal",className:"btn-floating btn-large blue darken-2 modal-trigger",children:Object(a.jsx)("i",{className:"large material-icons",children:"add"})}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#tech-list-modal",className:"btn-floating green modal-trigger",children:Object(a.jsx)("i",{className:"material-icons",children:"person"})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#add-tech-modal",className:"btn-floating red modal-trigger",children:Object(a.jsx)("i",{className:"material-icons",children:"person_add"})})})]})]})},G=c(6),F=function(){return function(){var e=Object(h.a)(u.a.mark((function e(t){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(),e.next=4,fetch("/techs");case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,t({type:"GET_TECHS",payload:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:"TECHS_ERROR",payload:e.t0.response.statusText});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},A=function(){return{type:g}},J=Object(d.b)((function(e){return{tech:e.tech}}),{getTechs:F})((function(e){var t=e.getTechs,c=e.tech,s=c.techs,r=c.loading;return Object(n.useEffect)((function(){t()}),[]),!r&&void 0!==s&&s.map((function(e){return Object(a.jsxs)("option",{value:"".concat(e.firstName," ").concat(e.lastName),children:[e.firstNam," ",e.lastName]},e.id)}))})),M={width:"75%",height:"75%"},P=Object(d.b)(null,{addLog:function(e){return function(){var t=Object(h.a)(u.a.mark((function t(c){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y(),t.next=4,fetch("/logs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,c({type:O,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:v,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addLog,c=Object(n.useState)(""),s=Object(G.a)(c,2),r=s[0],l=s[1],i=Object(n.useState)(!1),d=Object(G.a)(i,2),j=d[0],u=d[1],h=Object(n.useState)(""),b=Object(G.a)(h,2),O=b[0],m=b[1];return Object(a.jsxs)("div",{id:"add-log-modal",className:"modal",style:M,children:[Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsx)("h4",{children:"Enter System Log"}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("input",{type:"text",name:"message",value:r,onChange:function(e){return l(e.target.value)}}),Object(a.jsx)("label",{htmlFor:"message",className:"active",children:"Log message"})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"input-field",children:Object(a.jsxs)("select",{name:"tech",value:O,className:"browser-default",onChange:function(e){return m(e.target.value)},children:[Object(a.jsx)("option",{value:"",disabled:!0,children:"Select tech"}),Object(a.jsx)(J,{})]})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("p",{children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",className:"filled-in",checked:j,value:j,onChange:function(e){return u(!j)}}),Object(a.jsx)("span",{children:"Needs attention"})]})})})})]}),Object(a.jsx)("div",{className:"modal-footer",children:Object(a.jsx)("a",{href:"#!",onClick:function(){if(""===r||""===O)o.a.toast({html:" Please enter a message and tech"});else{var e={message:r,attention:j,tech:O,date:new Date};t(e),o.a.toast({html:"Log added by ".concat(O)}),l(""),m(""),u(!1)}},className:"modal-close waves-effect waves-green btn",children:"Enter"})})]})})),q={width:"75%",height:"75%"},I=Object(d.b)((function(e){return{current:e.log.current}}),{updateLog:function(e){return function(){var t=Object(h.a)(u.a.mark((function t(c){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y(),t.next=4,fetch("/logs/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,c({type:f,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:v,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.current,c=e.updateLog,s=Object(n.useState)(""),r=Object(G.a)(s,2),l=r[0],i=r[1],d=Object(n.useState)(!1),j=Object(G.a)(d,2),u=j[0],h=j[1],b=Object(n.useState)(""),O=Object(G.a)(b,2),m=O[0],p=O[1];Object(n.useEffect)((function(){t&&(i(t.message),h(t.attention),p(t.tech))}),[t]);return Object(a.jsxs)("div",{id:"edit-log-modal",className:"modal",style:q,children:[Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsx)("h4",{children:"Enter System Log"}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{type:"text",name:"message",value:l,onChange:function(e){return i(e.target.value)}})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"input-field",children:Object(a.jsxs)("select",{name:"tech",value:m,className:"browser-default",onChange:function(e){return p(e.target.value)},children:[Object(a.jsx)("option",{value:"",disabled:!0,children:"Select tech"}),Object(a.jsx)("option",{value:"John Doe",children:"John Doe"}),Object(a.jsx)("option",{value:"Sam Smith",children:"Sam Smith"}),Object(a.jsx)("option",{value:"Roy Keane",children:"Roy Keane"}),Object(a.jsx)("option",{value:"Cris Ronaldo",children:"Cris Ronaldo"})]})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("p",{children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",className:"filled-in",checked:u,value:u,onChange:function(e){return h(!u)}}),Object(a.jsx)("span",{children:"Needs attention"})]})})})})]}),Object(a.jsx)("div",{className:"modal-footer",children:Object(a.jsx)("a",{href:"#!",onClick:function(){if(""===l||""===m)o.a.toast({html:" Please enter a message and tech"});else{var e={id:t.id,message:l,attention:u,tech:m,date:new Date};c(e),o.a.toast({html:"Log updated by ".concat(m)})}},className:"modal-close waves-effect waves-green btn",children:"Enter"})})]})})),U=function(){var e=Object(n.useState)(""),t=Object(G.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),l=Object(G.a)(r,2),i=l[0],d=l[1];return Object(a.jsxs)("div",{id:"add-tech-modal",className:"modal",children:[Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsx)("h4",{children:"New Technician"}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("input",{type:"text",name:"firstName",value:c,onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("label",{htmlFor:"firstName",className:"active",children:"First Name"})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("input",{type:"text",name:"last",value:i,onChange:function(e){return d(e.target.value)}}),Object(a.jsx)("label",{htmlFor:"lastName",className:"active",children:"Last name"})]})})]}),Object(a.jsx)("div",{className:"modal-footer",children:Object(a.jsx)("a",{href:"#!",onClick:function(){""===c||""===i?o.a.toast({html:" Please enter First Name and Last name"}):(console.log(c,i),s(""),d(""))},className:"modal-close waves-effect waves-green btn",children:"Enter"})})]})},Y=function(e){var t=e.tech;return Object(a.jsx)("li",{className:"collection-item",children:Object(a.jsxs)("div",{children:[t.firstName," ",t.lastName,Object(a.jsx)("a",{href:"#!",className:"secondary-content",children:Object(a.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})},H=Object(d.b)((function(e){return{tech:e.tech,getTechs:C.a.func.isRequired}}),{getTechs:F})((function(e){var t=e.getTechs,c=e.tech,s=c.techs,r=c.loading;return Object(n.useEffect)((function(){t()}),[]),Object(a.jsx)("div",{id:"tech-list-modal",className:"modal",children:Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsx)("h4",{children:"Technician List"}),Object(a.jsx)("ul",{className:"collection",children:!r&&(null===s||void 0===s?void 0:s.techs.map((function(e){return Object(a.jsx)(Y,{tech:e},e.id)})))})]})})})),B=c(7),K=c(22),W=c(23),z=c(24),Q=c(2),V=(c(37),{logs:null,current:null,loading:!1,error:null}),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(Q.a)(Object(Q.a)({},e),{},{loading:!0});case b:return Object(Q.a)(Object(Q.a)({},e),{},{logs:t.payload,loading:!1});case O:return Object(Q.a)(Object(Q.a)({},e),{},{logs:[].concat(Object(z.a)(e.logs),[t.payload]),loading:!1});case m:return Object(Q.a)(Object(Q.a)({},e),{},{logs:e.logs.filter((function(e){return e.id!==t.payload})),loading:!1});case f:return Object(Q.a)(Object(Q.a)({},e),{},{logs:e.logs.map((function(e){return e.id===t.payload.id?t.payload:e}))});case N:return Object(Q.a)(Object(Q.a)({},e),{},{logs:t.payload});case p:return Object(Q.a)(Object(Q.a)({},e),{},{current:t.payload});case x:return Object(Q.a)(Object(Q.a)({},e),{},{current:null});case v:return console.error(t.payload),Object(Q.a)(Object(Q.a)({},e),{},{error:t.payload});default:return e}},Z=Object(B.combineReducers)({log:X,tech:X}),$=[W.a],ee=Object(B.createStore)(Z,{},Object(K.composeWithDevTools)(B.applyMiddleware.apply(void 0,$))),te=function(){return Object(n.useEffect)((function(){o.a.AutoInit()})),Object(a.jsx)(d.a,{store:ee,children:Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)(w,{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(_,{}),Object(a.jsx)(P,{}),Object(a.jsx)(I,{}),Object(a.jsx)(U,{}),Object(a.jsx)(H,{}),Object(a.jsx)(D,{})]})]})})};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(te,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.eabe066e.chunk.js.map