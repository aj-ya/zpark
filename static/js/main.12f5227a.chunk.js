/*! For license information please see main.12f5227a.chunk.js.LICENSE.txt */
(this.webpackJsonpzpark=this.webpackJsonpzpark||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},,,,,,,,,,function(e,t,a){},,,,,,function(e,t,a){var n={"./TeslaModel3-mobile.avif":28,"./TeslaModel3.avif":29,"./TeslaModelS-mobile.avif":30,"./TeslaModelS.avif":31,"./TeslaModelX-mobile.avif":32,"./TeslaModelX.avif":33,"./TeslaModelY-mobile.avif":34,"./TeslaModelY.avif":35};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=27},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/TeslaModel3-mobile.3741891a.avif"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/TeslaModel3.fb8732d3.avif"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/TeslaModelS-mobile.866dec0a.avif"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/TeslaModelS.39f2a870.avif"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/TeslaModelX-mobile.de8e830b.avif"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/TeslaModelX.4c27132f.avif"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/TeslaModelY-mobile.b4f5eb0e.avif"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/TeslaModelY.18c83b8c.avif"},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(14),c=a.n(s),i=(a(21),a(11),a(7)),l=a(8),o=a(10),u=a(9),d=a(2),b=a(0);var m=function(e){return e.isLoggedIn?Object(b.jsx)(d.a,{to:"/Home"}):Object(b.jsx)(d.a,{to:"/MainMenu"})},j=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={redirect:!1,loggedIn:!1,loaded:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;null!==window.localStorage.getItem("username")?this.id=setTimeout((function(){return e.setState({redirect:!0,loggedIn:!0,loaded:e.state.loaded})}),4e3):this.id=setTimeout((function(){return e.setState({redirect:!0,loggedIn:!1,loaded:e.state.loaded})}),4e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.id)}},{key:"render",value:function(){var e=this;return this.state.redirect?Object(b.jsx)(m,{isLoggedIn:this.state.loggedIn}):Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)("div",{id:"App",className:"fade-in-out",children:Object(b.jsx)("img",{style:this.state.loaded?{}:{display:"none"},onLoad:function(){return e.setState({redirect:e.state.redirect,loggedIn:e.state.loggedIn,loaded:!0})},src:"zpark-start.png",alt:"logo"})})})}}]),a}(r.a.Component),h=j,f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))},p=a(6);var O=function(){return Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(p.b,{className:"Link",to:"/SignIn",children:Object(b.jsx)("button",{className:"btn link-btn btn-pushable",id:"signin",children:Object(b.jsx)("span",{className:"btn-front",children:"Sign In!"})})}),Object(b.jsx)(p.b,{className:"Link",to:"/SignUp",children:Object(b.jsx)("button",{className:"btn link-btn btn-pushable",id:"signup",children:Object(b.jsx)("span",{className:"btn-front",children:"Sign Up!"})})}),Object(b.jsx)(p.b,{className:"Link",to:"/RFID",children:Object(b.jsx)("button",{className:"btn link-btn btn-pushable",id:"rfid",children:Object(b.jsx)("span",{className:"btn-front",children:"RFID"})})})]})},v=a(3),g=a(16),x="6LfgTG8dAAAAAJA8Sz5q8c7Ppf242Oz7XQ0gA7s8";var N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dark";return Object(b.jsx)("div",{className:"captcha-wrapper",children:Object(b.jsx)("div",{id:"g-recaptcha",children:Object(b.jsx)(g.a,{sitekey:x,onChange:e,theme:t})})})},y={textAlign:"right",fontSize:"12px",color:"#9b9b9b"},S=r.a.forwardRef((function(e,t){var a=e.label,n=e.type,r=e.id,s=e.classes,c=r||"form__field-"+String(a).split(" ").join(""),i="form__field "+(s||a);return console.log(c),Object(b.jsxs)("div",{className:"form__group field",children:[Object(b.jsx)("input",{name:a,ref:t,type:n,className:i,id:c,placeholder:a}),Object(b.jsxs)("label",{htmlFor:a,className:"form__label",children:[a,":"]})]})})),w=function(e){var t=e.onSubmit,a=r.a.useState(""),n=Object(v.a)(a,2),s=n[0],c=n[1];var i=r.a.useRef(),l=r.a.useRef(),o=r.a.useRef(),u=r.a.useRef();return Object(b.jsxs)("form",{className:"auth-form",onSubmit:function(e){e.preventDefault();var a={username:i.current.value,password:l.current.value,email:o.current.value,recaptcha:s,vehicleNumber:u.current.value};t(a)},children:[Object(b.jsx)(S,{ref:i,label:"Username",type:"text"}),Object(b.jsx)("p",{style:y,id:"err-user",className:"err"}),Object(b.jsx)(S,{ref:o,label:"Email",type:"email"}),Object(b.jsx)("p",{style:y,id:"err-email",className:"err"}),Object(b.jsx)(S,{ref:l,label:"Password",type:"password"}),Object(b.jsx)("p",{style:y,id:"err-pass",className:"err"}),Object(b.jsx)(S,{ref:u,label:"Vehicle Number",type:"text"}),Object(b.jsx)("p",{style:y,id:"err-vehicle",className:"err"}),N((function(e){c(e),console.log("Captcha value:",e)})),Object(b.jsx)("div",{className:"auth-btn-wrapper",children:Object(b.jsx)("button",{className:"btn btn-pushable auth-btn",type:"submit",children:Object(b.jsx)("span",{className:"btn-front",children:"Sign Up!"})})})]})},M=function(){var e=Object(d.g)();return Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)(w,{onSubmit:function(t){Array.from(document.getElementsByClassName("form__field")).forEach((function(e){""===e.value?e.style.borderBottom="2px solid red":e.style.borderBottom="2px solid #9b9b9b"}));var a,n,r=t.password,s={Password:!1,Username:!1,Email:!1,VehicleNumber:!1,Captcha:!1};""===t.Email?(document.getElementById("err-email").innerHTML="Email empty",s.Email=!0):(a=t.email,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase())?(document.getElementById("err-email").innerHTML="",s.Email=!1):(document.getElementById("err-email").innerHTML="Email invalid",s.Email=!0)),""===t.username?(document.getElementById("err-user").innerHTML="Username empty",s.Username=!0):s.Username=!1,(r.length<8||r.search(/[a-z]/i)<0||r.search(/[0-9]/)<0)&&(document.getElementById("err-pass").innerHTML="Your password must be at least 8 characters",s.Password=!0),t.vehicleNumber&&(n=t.vehicleNumber,/^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/.test(String(n)))||(document.getElementById("err-vehicle").innerHTML="Invalid Vechicle Number.",s.VehicleNumber=!0),s.Captcha=""===t.recaptcha;for(var c=0,i=0,l=Object.entries(s);i<l.length;i++){var o=Object(v.a)(l[i],2),u=o[0],d=o[1];if("Captcha"!==u){var b=document.getElementById("form__field-"+u);!0===d?(c++,b.style.borderBottom="2px solid red"):b.style.borderBottom="2px solid #9b9b9b"}else!0===d&&c++}0!==c&&e("/SignIn")}})})},C=r.a.forwardRef((function(e,t){var a=e.label,n=e.type,r=e.id,s=e.classes,c=r||"form__field-"+String(a).split(" ").join(""),i="form__field "+(s||a);return Object(b.jsxs)("div",{className:"form__group field",children:[Object(b.jsx)("input",{name:a,ref:t,type:n,className:i,id:c,placeholder:a}),Object(b.jsxs)("label",{htmlFor:a,className:"form__label",children:[a,":"]})]})})),T=function(e){var t=e.onSubmit,a=r.a.useState(""),n=Object(v.a)(a,2),s=n[0],c=n[1];var i=Object(d.g)();window.localStorage.getItem("username")&&i("/Home");var l=r.a.useRef(),o=r.a.useRef();return Object(b.jsxs)("form",{className:"auth-form",onSubmit:function(e){e.preventDefault();var a={username:l.current.value,password:o.current.value,recaptcha:s};t(a)},children:[Object(b.jsx)(C,{ref:l,label:"Username",type:"text"}),Object(b.jsx)(C,{ref:o,label:"Password",type:"password"}),N((function(e){c(e),console.log("Captcha value:",e)})),Object(b.jsx)("div",{className:"auth-btn-wrapper",children:Object(b.jsx)("button",{className:"btn btn-pushable auth-btn",type:"submit",children:Object(b.jsx)("span",{className:"btn-front",children:"Sign In!"})})})]})},k=function(){var e=Object(d.g)();return Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)(T,{onSubmit:function(t){console.log(t);var a={Password:!1,Username:!1,Captcha:!1},n=0;a.Username=""===t.username,a.Password=""===t.password,a.Captcha=""===t.recaptcha,a.Username||function(e,t){var a;return(a={username:"ajeya",password:"ajeya"}).username===e&&a.password===t}(t.username,t.password)||n++;for(var r=0,s=Object.entries(a);r<s.length;r++){var c=Object(v.a)(s[r],2),i=c[0],l=c[1];if("Captcha"!==i){var o=document.getElementById("form__field-"+i);!0===l?(n++,o.style.borderBottom="2px solid red"):o.style.borderBottom="2px solid #9b9b9b"}else!0===l&&n++}0===n&&(window.localStorage.setItem("username",t.username),e("/Home"))}})})},I=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)(k,{})}}]),a}(r.a.Component),_=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)(p.b,{to:"/",children:Object(b.jsx)("button",{className:"btn-pushable btn-logout btn",onClick:function(){window.localStorage.removeItem("username")},children:Object(b.jsx)("span",{className:"btn-front",children:"Logout"})})})}}]),a}(r.a.Component);var E=function(){return Object(b.jsx)("div",{className:"footer",children:Object(b.jsx)("img",{src:"zpark-start.png",alt:"logo",className:"logo"})})},L=[{Name:"Tesla Model S",Charge:20,Charging:!0,VehicleNumber:""},{Name:"Tesla Model 3",Charge:20,Charging:!0,VehicleNumber:""},{Name:"Tesla Model X",Charge:20,Charging:!0,VehicleNumber:""},{Name:"Tesla Model Y",Charge:20,Charging:!0,VehicleNumber:""}];function B(e){return e.map((function(e){return function(e){return Object(b.jsx)(p.b,{to:"/VehicleState",state:{vehicle:e},className:"Link",children:Object(b.jsx)("button",{className:"btn-pushable ind-vehicle",children:Object(b.jsx)("span",{className:"btn-front",children:e.Name})})},e.Name)}(e)}))}var A,U=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).vehicles=[],n.state={vehicle:null},n}return Object(l.a)(a,[{key:"componentWillMount",value:function(){this.setState({vehicles:function(e){var t;return"ajeya"===e&&(t=L),t}(localStorage.getItem("username"))})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(_,{}),Object(b.jsx)("div",{className:"vehicle-box",children:B(this.state.vehicles)}),Object(b.jsx)(E,{})]})}}]),a}(r.a.Component),z=a(27);function D(){var e=Object(n.useState)("Check Status"),t=Object(v.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(function(){var e=Object(d.f)();return e.state?e.state.vehicle:{Name:"Dummy",Charge:20,charging:!1,VehicleNumber:""}}()),c=Object(v.a)(s,2),i=c[0],l=c[1];return A=i,Object(b.jsxs)("div",{className:"vehicle-card",children:[Object(b.jsx)("h1",{className:"card-heading",children:i.Name}),Object(b.jsxs)("div",{class:"op-score",children:["Operational Score: ",Object(b.jsxs)("span",{id:"charge-perc",children:[i.Charge,"%"]})]}),Object(b.jsx)("button",{className:"btn btn-pushable btn-charging",onClick:function(){i.charging=!i.charging;var e=i.charging;l(i),r(e?"Stop Charging":"Start Charging")},children:Object(b.jsx)("span",{className:"btn-front",id:"btn-charging",children:a})})]})}var V=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e="./".concat(A.Name.split(" ").join(""));e.includes("Dummy")&&(e="./TeslaModelY"),window.matchMedia("screen and (max-width: 768px)").matches&&(e+="-mobile");var t=z(e+".avif").default;console.log(e),document.getElementsByClassName("wrapper")[0].style.background="url(".concat(t,") no-repeat 100%")}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(_,{}),Object(b.jsx)(D,{}),Object(b.jsx)(E,{})]})}}]),a}(r.a.Component);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(p.a,{basename:"zpark/",children:Object(b.jsxs)(d.d,{children:[Object(b.jsx)(d.b,{exact:!0,path:"/SignIn",element:Object(b.jsx)(I,{})}),Object(b.jsx)(d.b,{exact:!0,path:"/SignUp",element:Object(b.jsx)(M,{})}),Object(b.jsx)(d.b,{exact:!0,path:"/VehicleState",element:Object(b.jsx)(V,{})}),Object(b.jsx)(d.b,{exact:!0,path:"/Home",element:Object(b.jsx)(U,{})}),Object(b.jsx)(d.b,{exact:!0,path:"/MainMenu",element:Object(b.jsx)(O,{})}),Object(b.jsx)(d.b,{path:"*",element:Object(b.jsx)(h,{})})]})})}),document.getElementById("root")),f()}],[[36,1,2]]]);
//# sourceMappingURL=main.12f5227a.chunk.js.map