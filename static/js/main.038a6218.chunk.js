(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),u=(a(13),a(7)),m=a(1);a(14);var o=function(e){var t=e.transactions,a=Object(n.useState)(0),c=Object(m.a)(a,2),l=c[0],u=c[1];return Object(n.useEffect)((function(){u(t.reduce((function(e,t){return e+t.amount}),0))}),[t]),r.a.createElement("div",{className:"balance"},r.a.createElement("h4",null,"YOUR BALANCE"),r.a.createElement("h2",null,"$",l))};var i=function(e){var t=e.name,a=e.amount,n=e.remove,c=e.id;return r.a.createElement("div",{className:"transaction_item"},r.a.createElement("div",{className:"removeNode",onClick:function(){n(c)}},r.a.createElement("span",null,"X")),r.a.createElement("div",{class:"itemName"},r.a.createElement("span",null,t)),r.a.createElement("div",null,r.a.createElement("span",null,a)))};var s=function(e){var t=e.transactions,a=e.remove,c=Object(n.useState)(),l=Object(m.a)(c,2),u=l[0],o=l[1];return Object(n.useEffect)((function(){o(t.map((function(e){return r.a.createElement(i,{name:e.text,amount:e.amount,key:e.id,id:e.id,remove:a})})))}),[t]),r.a.createElement("div",{className:"history"},r.a.createElement("h2",null,"History"),u)},E=a(2);var d=function(e){var t=e.add,a=Object(n.useState)({text:"",amount:0}),c=Object(m.a)(a,2),l=c[0],u=c[1];return r.a.createElement("div",{className:"add_transaction"},r.a.createElement("form",{id:"form",onSubmit:function(e){return e.preventDefault(),t(Object(E.a)(Object(E.a)({},l),{},{id:Math.floor(1e10*Math.random())}))}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{for:"text"},"Text"),r.a.createElement("input",{type:"text",id:"text",placeholder:"Enter text...",onChange:function(e){return u(Object(E.a)(Object(E.a)({},l),{},{text:e.target.value}))},value:l.text})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{for:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",id:"amount",placeholder:"Enter amount...",onChange:function(e){return u(Object(E.a)(Object(E.a)({},l),{},{amount:parseInt(e.target.value)}))},value:l.amount})),r.a.createElement("button",{className:"btn",disabled:!1},"Add transaction")))};var f=function(e){var t=e.transactions,a=Object(n.useState)(0),c=Object(m.a)(a,2),l=c[0],u=c[1],o=Object(n.useState)(0),i=Object(m.a)(o,2),s=i[0],E=i[1];return Object(n.useEffect)((function(){u(t.reduce((function(e,t){return t.amount>=0&&(e+=t.amount),e}),0)),E(t.reduce((function(e,t){return t.amount<0&&(e+=t.amount),e}),0))}),[t]),r.a.createElement("div",{className:"in_exp_container"},r.a.createElement("div",{className:"income"},r.a.createElement("h3",null,r.a.createElement("span",null,"INCOME")),r.a.createElement("h3",null,r.a.createElement("span",null,"$",l.toFixed(2)))),r.a.createElement("div",{className:"expense"},r.a.createElement("h3",null,r.a.createElement("span",null,"EXPENSE")),r.a.createElement("h3",null,r.a.createElement("span",null,"$",(-1*s).toFixed(2)))))},v=[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}];var b=function(){var e=Object(n.useState)(v),t=Object(m.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("h2",{className:"title"},r.a.createElement("span",null,"Expense Tracker")),r.a.createElement(o,{transactions:a}),r.a.createElement(f,{transactions:a}),r.a.createElement(s,{transactions:a,remove:function(e){c(a.filter((function(t){return t.id!==e})))}}),r.a.createElement(d,{add:function(e){c([].concat(Object(u.a)(a),[e]))}}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.038a6218.chunk.js.map