(this["webpackJsonpproject-3"]=this["webpackJsonpproject-3"]||[]).push([[0],{35:function(e,a,t){e.exports=t(69)},40:function(e,a,t){},42:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(3),c=t.n(l),s=(t(40),t(10)),i=t(8),m=t(13),o=t(11),u=t(12);t(41);var b=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item",href:"#"},r.a.createElement("strong",null,r.a.createElement("p",null,"Skyline Studios"))),r.a.createElement("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement("a",{className:"navbar-item"},"Home"),r.a.createElement("a",{className:"navbar-item"},"Studio"),r.a.createElement("a",{className:"navbar-item"},"Lessons"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{className:"navbar-link"},"Contact"),r.a.createElement("div",{className:"navbar-dropdown"},r.a.createElement("a",{className:"navbar-item"},"About"),r.a.createElement("a",{className:"navbar-item"},"Jobs"),r.a.createElement("a",{className:"navbar-item"},"Contact"),r.a.createElement("hr",{className:"navbar-divider"}),r.a.createElement("a",{className:"navbar-item"},"Report an issue")))),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"buttons"},r.a.createElement("a",{className:"button is-link"},r.a.createElement("strong",null,"Sign up")),r.a.createElement("a",{className:"button is-light"},"Log in")))))),r.a.createElement("section",{class:"hero is-link is-fullheight-with-navbar has-background-black"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"title"},"Skyline Studios")))))},v=t(31);t(42);var d=function(e){return r.a.createElement("button",Object.assign({},e,{type:"submit",id:"contact-submit-btn",className:"submit-btn"}),"Send")},h=t(19),E=t.n(h),f=(t(45),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={from_name:"",subject:"",from_email:"",message:""},t.sendEmail=function(e){e.preventDefault();var a={from_name:t.state.from_name,from_email:t.state.from_email,subject:t.state.subject,message:t.state.message};E.a.send("default_service","contact_form",a),t.setState({from_name:"",subject:"",from_email:"",message:""})},t.handleInputChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(v.a)({},n,r))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"initEmail",value:function(){E.a.init("user_6679HJHKrxqEfvXSqt7L6")}},{key:"componentDidMount",value:function(){this.initEmail()}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("form",{id:"contact-form"},r.a.createElement("label",{for:"from_email"},"Email:",r.a.createElement("input",{type:"email",id:"contact-email",name:"from_email",value:this.state.from_email,onChange:this.handleInputChange})),r.a.createElement("label",{for:"from_name"},"Name:",r.a.createElement("input",{type:"text",id:"contact-name",name:"from_name",value:this.state.from_name,onChange:this.handleInputChange})),r.a.createElement("label",{for:"subject"},"Subject:",r.a.createElement("input",{type:"text",id:"email-subject",name:"subject",value:this.state.subject,onChange:this.handleInputChange})),r.a.createElement("label",{for:"message"},"Message:",r.a.createElement("textarea",{id:"message",name:"message",value:this.state.message,onChange:this.handleInputChange})),r.a.createElement(d,{onClick:this.sendEmail})))}}]),a}(r.a.Component));t(46);var p=function(){return r.a.createElement("div",{className:"form-container"},r.a.createElement("h2",null,"Contact SkyLine"),r.a.createElement(f,null))},g=t(20),j=t(14),N=t.n(j),y=(t(50),t(34)),k=t.n(y);N.a.locale("en-GB");var _=Object(g.b)(N.a),O=[],C=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={cal_events:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.a.get().then((function(a){for(var t=a.data,n=0;n<t.length;n++)t[n].start=N.a.utc(t[n].start).toDate(),t[n].end=N.a.utc(t[n].end).toDate();e.setState({cal_events:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(g.a,{localizer:_,events:O,startAccessor:"start",endAccessor:"end",style:{height:500,width:700}})}}]),a}(r.a.Component);var w=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(p,null),r.a.createElement(C,null))},S=(t(68),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(w,null)}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.8cb4b4bc.chunk.js.map