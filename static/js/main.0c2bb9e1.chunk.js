/*! For license information please see main.0c2bb9e1.chunk.js.LICENSE.txt */
(this.webpackJsonpzpark=this.webpackJsonpzpark||[]).push([[0],{12:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){var n={"./TeslaModel3-mobile.avif":40,"./TeslaModel3.avif":41,"./TeslaModelS-mobile.avif":42,"./TeslaModelS.avif":43,"./TeslaModelX-mobile.avif":44,"./TeslaModelX.avif":45,"./TeslaModelY-mobile.avif":46,"./TeslaModelY.avif":47};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=39},40:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/TeslaModel3-mobile.3741891a.avif"},41:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/TeslaModel3.fb8732d3.avif"},42:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/TeslaModelS-mobile.866dec0a.avif"},43:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/TeslaModelS.39f2a870.avif"},44:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/TeslaModelX-mobile.de8e830b.avif"},45:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/TeslaModelX.4c27132f.avif"},46:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/TeslaModelY-mobile.b4f5eb0e.avif"},47:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/TeslaModelY.18c83b8c.avif"},66:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(26),c=a.n(r),l=(a(33),a(12),a(8)),i=a(9),o=a(11),b=a(10),u=a(2),d=a(0);var j=function(e){return e.isLoggedIn?Object(d.jsx)(u.a,{to:"/Home"}):Object(d.jsx)(u.a,{to:"/MainMenu"})},m=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={redirect:!1,loggedIn:!1,loaded:!1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;null!==window.localStorage.getItem("username")?this.id=setTimeout((function(){return e.setState({redirect:!0,loggedIn:!0,loaded:e.state.loaded})}),4e3):this.id=setTimeout((function(){return e.setState({redirect:!0,loggedIn:!1,loaded:e.state.loaded})}),4e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.id)}},{key:"render",value:function(){var e=this;return this.state.redirect?Object(d.jsx)(j,{isLoggedIn:this.state.loggedIn}):Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("div",{id:"App",className:"fade-in-out",children:Object(d.jsx)("img",{style:this.state.loaded?{}:{display:"none"},onLoad:function(){return e.setState({redirect:e.state.redirect,loggedIn:e.state.loggedIn,loaded:!0})},src:"zpark-start.png",alt:"logo"})})})}}]),a}(s.a.Component),h=m,f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))},p=a(7);var O=function(){return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(p.b,{className:"Link",to:"/SignIn",children:Object(d.jsx)("button",{className:"btn link-btn btn-pushable",id:"signin",children:Object(d.jsx)("span",{className:"btn-front",children:"Sign In!"})})}),Object(d.jsx)(p.b,{className:"Link",to:"/SignUp",children:Object(d.jsx)("button",{className:"btn link-btn btn-pushable",id:"signup",children:Object(d.jsx)("span",{className:"btn-front",children:"Sign Up!"})})}),Object(d.jsx)(p.b,{className:"Link",to:"/RFID",children:Object(d.jsx)("button",{className:"btn link-btn btn-pushable",id:"rfid",children:Object(d.jsx)("span",{className:"btn-front",children:"RFID"})})})]})},x=a(3),g=a(28),v="6LfgTG8dAAAAAJA8Sz5q8c7Ppf242Oz7XQ0gA7s8";var N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dark";return Object(d.jsx)("div",{className:"captcha-wrapper",children:Object(d.jsx)("div",{id:"g-recaptcha",children:Object(d.jsx)(g.a,{sitekey:v,onChange:e,theme:t})})})},y=s.a.forwardRef((function(e,t){var a=e.label,n=e.type,s=e.id,r=e.classes,c=s||"form__field-"+String(a).split(" ").join(""),l="form__field "+(r||a);return Object(d.jsxs)("div",{className:"form__group field",children:[Object(d.jsx)("input",{name:a,ref:t,type:n,className:l,id:c,placeholder:a}),Object(d.jsxs)("label",{htmlFor:a,className:"form__label",children:[a,":"]})]})})),S={textAlign:"right",fontSize:"12px",color:"#9b9b9b"},w=function(e){var t=e.onSubmit,a=s.a.useState(""),n=Object(x.a)(a,2),r=n[0],c=n[1];var l=s.a.useRef(),i=s.a.useRef(),o=s.a.useRef(),b=s.a.useRef();return Object(d.jsxs)("form",{className:"auth-form",onSubmit:function(e){e.preventDefault();var a={username:l.current.value,password:i.current.value,email:o.current.value,recaptcha:r,vehicleNumber:b.current.value};t(a)},children:[Object(d.jsx)(y,{ref:l,label:"Username",type:"text"}),Object(d.jsx)("p",{style:S,id:"err-user",className:"err"}),Object(d.jsx)(y,{ref:o,label:"Email",type:"email"}),Object(d.jsx)("p",{style:S,id:"err-email",className:"err"}),Object(d.jsx)(y,{ref:i,label:"Password",type:"password"}),Object(d.jsx)("p",{style:S,id:"err-pass",className:"err"}),Object(d.jsx)(y,{ref:b,label:"Vehicle Number",type:"text"}),Object(d.jsx)("p",{style:S,id:"err-vehicle",className:"err"}),N((function(e){c(e),console.log("Captcha value:",e)})),Object(d.jsx)("div",{className:"auth-btn-wrapper",children:Object(d.jsx)("button",{className:"btn btn-pushable auth-btn",type:"submit",children:Object(d.jsx)("span",{className:"btn-front",children:"Sign Up!"})})})]})},C=function(){var e=Object(u.g)();return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)(w,{onSubmit:function(t){Array.from(document.getElementsByClassName("form__field")).forEach((function(e){""===e.value?e.style.borderBottom="2px solid red":e.style.borderBottom="2px solid #9b9b9b"}));var a,n,s=t.password,r={Password:!1,Username:!1,Email:!1,VehicleNumber:!1,Captcha:!1};""===t.Email?(document.getElementById("err-email").innerHTML="Email empty",r.Email=!0):(a=t.email,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase())?(document.getElementById("err-email").innerHTML="",r.Email=!1):(document.getElementById("err-email").innerHTML="Email invalid",r.Email=!0)),""===t.username?(document.getElementById("err-user").innerHTML="Username empty",r.Username=!0):r.Username=!1,(s.length<8||s.search(/[a-z]/i)<0||s.search(/[0-9]/)<0)&&(document.getElementById("err-pass").innerHTML="Your password must be at least 8 characters",r.Password=!0),t.vehicleNumber&&(n=t.vehicleNumber,/^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/.test(String(n)))||(document.getElementById("err-vehicle").innerHTML="Invalid Vechicle Number.",r.VehicleNumber=!0),r.Captcha=""===t.recaptcha;for(var c=0,l=0,i=Object.entries(r);l<i.length;l++){var o=Object(x.a)(i[l],2),b=o[0],u=o[1];if("Captcha"!==b){var d=document.getElementById("form__field-"+b);!0===u?(c++,d.style.borderBottom="2px solid red"):d.style.borderBottom="2px solid #9b9b9b"}else!0===u&&c++}0===c&&e("/SignIn")}})})},M=function(e){var t=e.onSubmit,a=s.a.useState(""),n=Object(x.a)(a,2),r=n[0],c=n[1];var l=Object(u.g)();window.localStorage.getItem("username")&&l("/Home");var i=s.a.useRef(),o=s.a.useRef();return Object(d.jsxs)("form",{className:"auth-form",onSubmit:function(e){e.preventDefault();var a={username:i.current.value,password:o.current.value,recaptcha:r};t(a)},children:[Object(d.jsx)(y,{ref:i,label:"Username",type:"text"}),Object(d.jsx)(y,{ref:o,label:"Password",type:"password"}),N((function(e){c(e),console.log("Captcha value:",e)})),Object(d.jsx)("div",{className:"auth-btn-wrapper",children:Object(d.jsx)("button",{className:"btn btn-pushable auth-btn",type:"submit",children:Object(d.jsx)("span",{className:"btn-front",children:"Sign In!"})})})]})},I=function(){var e=Object(u.g)();return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)(M,{onSubmit:function(t){console.log(t);var a={Password:!1,Username:!1,Captcha:!1},n=0;a.Username=""===t.username,a.Password=""===t.password,a.Captcha=""===t.recaptcha,a.Username||function(e,t){var a,n={username:"admin",password:"admin"};return(a=n).username===e&&a.password===t||(a=n={username:"user",password:"user"}).username===e&&a.password===t}(t.username,t.password)||n++;for(var s=0,r=Object.entries(a);s<r.length;s++){var c=Object(x.a)(r[s],2),l=c[0],i=c[1];if("Captcha"!==l){var o=document.getElementById("form__field-"+l);!0===i?(n++,o.style.borderBottom="2px solid red"):o.style.borderBottom="2px solid #9b9b9b"}else!0===i&&n++}0===n&&(window.localStorage.setItem("username",t.username),"admin"===t.username?e("/RFID"):e("/Home"))}})})},T=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)(I,{})}}]),a}(s.a.Component),k=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)(p.b,{to:"/",children:Object(d.jsx)("button",{className:"btn-pushable btn-logout btn",onClick:function(){window.localStorage.removeItem("username")},children:Object(d.jsx)("span",{className:"btn-front",children:"Logout"})})})}}]),a}(s.a.Component);var E=function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)("img",{src:"zpark-start.png",alt:"logo",className:"logo"})})},B=[{Name:"Tesla Model S",Charge:20,Charging:!0,VehicleNumber:""},{Name:"Tesla Model 3",Charge:20,Charging:!0,VehicleNumber:""},{Name:"Tesla Model X",Charge:20,Charging:!0,VehicleNumber:""},{Name:"Tesla Model Y",Charge:20,Charging:!0,VehicleNumber:""}];function U(e){return e.map((function(e){return function(e){return Object(d.jsx)(p.b,{to:"/VehicleState",state:{vehicle:e},className:"Link",children:Object(d.jsx)("button",{className:"btn-pushable ind-vehicle",children:Object(d.jsx)("span",{className:"btn-front",children:e.Name})})},e.Name)}(e)}))}var L,R=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).vehicles=[],n.state={vehicle:null},n}return Object(i.a)(a,[{key:"componentWillMount",value:function(){this.setState({vehicles:function(e){var t;return"user"===e&&(t=B),t}(localStorage.getItem("username"))})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(k,{}),Object(d.jsx)("div",{className:"vehicle-box",children:U(this.state.vehicles)}),Object(d.jsx)(E,{})]})}}]),a}(s.a.Component),D=a(39);function A(){var e=Object(n.useState)("Check Status"),t=Object(x.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(function(){var e=Object(u.f)();return e.state?e.state.vehicle:{Name:"Dummy",Charge:20,charging:!1,VehicleNumber:""}}()),c=Object(x.a)(r,2),l=c[0],i=c[1];return L=l,Object(d.jsxs)("div",{className:"vehicle-card",children:[Object(d.jsx)("h1",{className:"card-heading",children:l.Name}),Object(d.jsxs)("div",{className:"op-score",children:["Operational Score: ",Object(d.jsxs)("span",{id:"charge-perc",children:[l.Charge,"%"]})]}),Object(d.jsx)("button",{className:"btn btn-pushable btn-charging",onClick:function(){l.charging=!l.charging;var e=l.charging;i(l),s(e?"Stop Charging":"Start Charging")},children:Object(d.jsx)("span",{className:"btn-front",id:"btn-charging",children:a})})]})}var _=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e="./".concat(L.Name.split(" ").join(""));e.includes("Dummy")&&(e="./TeslaModelY"),window.matchMedia("screen and (max-width: 768px)").matches&&(e+="-mobile");var t=D(e+".avif").default;console.log(e),document.getElementsByClassName("wrapper")[0].style.background="url(".concat(t,") no-repeat 100%")}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(k,{}),Object(d.jsx)(A,{}),Object(d.jsx)(E,{})]})}}]),a}(s.a.Component),H=a(17),F=a.n(H);function z(e){return Object(d.jsxs)("tr",{className:"UserDetailsRow",children:[Object(d.jsxs)("td",{children:[" ",e.rfid," "]}),Object(d.jsxs)("td",{children:[" ",e.username," "]}),Object(d.jsxs)("td",{children:[" ",e.car," "]}),Object(d.jsxs)("td",{children:[" ",e.charge," "]}),Object(d.jsxs)("td",{children:[" ",e.bal," "]})]},e.rfid)}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object(d.jsx)("div",{className:"table-container",children:Object(d.jsxs)("table",{id:"users",style:{display:"none"},children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"RFID"}),Object(d.jsx)("th",{children:"UserName"}),Object(d.jsx)("th",{children:"Car"}),Object(d.jsx)("th",{children:"Charge"}),Object(d.jsx)("th",{children:"Balance"})]})}),Object(d.jsx)("tbody",{children:e.map((function(e){return z(e)}))})]})})}var P=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),a=t[0],s=t[1],r=Object(n.useRef)(),c=Object(n.useRef)(),l=Object(n.useRef)(),i=Object(n.useRef)(),o=Object(n.useRef)(),b=Object(n.useState)(!0),u=Object(x.a)(b,2),j=u[0],m=u[1];return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(k,{}),Object(d.jsxs)("form",{className:"auth-form form-border",onSubmit:function(e){e.preventDefault(),F.a.post("http://localhost:3001/insert",{rfid:r.current.value,username:o.current.value,car:c.current.value,charge:i.current.value,bal:l.current.value}).then((function(){console.log("success")}))},children:[Object(d.jsx)(y,{ref:r,type:"text",label:"RFID"}),Object(d.jsx)(y,{ref:o,type:"text",label:"Username"}),Object(d.jsx)(y,{ref:c,type:"text",label:"Car"}),Object(d.jsx)(y,{ref:i,type:"text",label:"Charge"}),Object(d.jsx)(y,{ref:l,type:"text",label:"Balance"}),Object(d.jsx)("div",{className:"auth-btn-wrapper",children:Object(d.jsx)("button",{className:"btn btn-pushable auth-btn",type:"submit",children:Object(d.jsx)("span",{className:"btn-front",children:"Submit"})})})]}),Object(d.jsx)("button",{className:"btn btn-pushable",style:{marginTop:"25px"},onClick:function(){F.a.get("http://localhost:3001/get").then((function(e){s(e.data)})),1==j?(document.getElementById("users").style.display="table",document.getElementsByClassName("form-border")[0].style.display="none",document.getElementsByClassName("change-text")[0].innerHTML="Hide Users"):(document.getElementById("users").style.display="none",document.getElementsByClassName("form-border")[0].style.display="block",document.getElementsByClassName("change-text")[0].innerHTML="Show Users"),m(!j)},children:Object(d.jsx)("span",{className:"btn-front change-text",children:"Show Users"})}),V(a)]})};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p.a,{basename:"zpark/",children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{exact:!0,path:"/SignIn",element:Object(d.jsx)(T,{})}),Object(d.jsx)(u.b,{exact:!0,path:"/SignUp",element:Object(d.jsx)(C,{})}),Object(d.jsx)(u.b,{exact:!0,path:"/VehicleState",element:Object(d.jsx)(_,{})}),Object(d.jsx)(u.b,{exact:!0,path:"/Home",element:Object(d.jsx)(R,{})}),Object(d.jsx)(u.b,{exact:!0,path:"/MainMenu",element:Object(d.jsx)(O,{})}),Object(d.jsx)(u.b,{exact:!0,path:"/RFID",element:Object(d.jsx)(P,{})}),Object(d.jsx)(u.b,{path:"*",element:Object(d.jsx)(h,{})})]})})}),document.getElementById("root")),f()}},[[66,1,2]]]);
//# sourceMappingURL=main.0c2bb9e1.chunk.js.map