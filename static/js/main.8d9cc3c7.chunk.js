(this.webpackJsonpgrootan=this.webpackJsonpgrootan||[]).push([[0],{27:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n.n(c),i=n(30),o=n.n(i),r=(n(36),n(14)),a=(n(37),n(38),n(2)),l=function(e){var t=e.test,n=Object(c.useState)([]),s=Object(r.a)(n,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){fetch("https://mockui5.free.beeceptor.com/userList").then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)("h2",{style:{color:"red",textAlign:"center"},children:"USERS LIST"}),i.map((function(e){return Object(a.jsx)("button",{onClick:function(){return t(e)},className:"names",children:e.name})}))]})},j=(n(40),function(e){var t,n,c,s,i=e.detail,o=e.navigation;console.log("loging from info"),console.log(i.id);var r=!!i.id;return console.log(r),Object(a.jsx)("div",{className:"info",children:r?Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{style:{textAlign:"center",color:"red"},children:[" ",i.name]}),Object(a.jsxs)("div",{className:"out1",children:["FIRST NAME : ",i.firstName,Object(a.jsx)("br",{}),"LAST NAME  : ",i.lastName,Object(a.jsx)("br",{}),"NAME       : ",i.name,Object(a.jsx)("br",{}),"AGE        : ",i.age,Object(a.jsx)("br",{}),"DOB        : ",i.dob,Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{className:"out1",children:["PH.NO     : ",null===i||void 0===i||null===(t=i.more)||void 0===t?void 0:t.phone,Object(a.jsx)("br",{}),"ADDRESS    : ",Object(a.jsx)("br",{}),null===i||void 0===i||null===(n=i.more)||void 0===n?void 0:n.address_line1,Object(a.jsx)("br",{}),null===i||void 0===i||null===(c=i.more)||void 0===c?void 0:c.address_line2,Object(a.jsx)("br",{}),null===i||void 0===i||null===(s=i.more)||void 0===s?void 0:s.address_line3,Object(a.jsx)("br",{})]}),Object(a.jsx)("button",{className:"button1",onClick:function(){return o("next",i.id)},children:"next"}),Object(a.jsx)("button",{className:"button2",onClick:function(){return o("prev",i.id)},children:"PREV"})]}):Object(a.jsx)("div",{className:"nouser",children:Object(a.jsx)("h3",{children:"please select some user to display "})})})}),u=(n(27),n(9)),d=n(16),b=n(20),h=(b.a.initializeApp({apiKey:"AIzaSyDsB0nAi08XISNMKluu-hdmjVLQpHrROh8",authDomain:"e-zone1.firebaseapp.com",projectId:"e-zone1",storageBucket:"e-zone1.appspot.com",messagingSenderId:"925688505263",appId:"1:925688505263:web:dba7248d6ca791f756c55a",measurementId:"G-X72QWYGD2Z"}).firestore(),b.a.auth());var O=function(){var e=Object(u.f)(),t=Object(c.useState)(""),n=Object(r.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)(""),l=Object(r.a)(o,2),j=l[0],O=l[1];return Object(a.jsx)("div",{className:"login",children:Object(a.jsxs)("div",{className:"login_container",children:[Object(a.jsx)("h3",{children:"Sign In"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("h5",{children:"E-mail"}),Object(a.jsx)("input",{type:"text",value:s,required:!0,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("h5",{children:"Password"}),Object(a.jsx)("input",{type:"password",value:j,onChange:function(e){return O(e.target.value)},required:!0,maxLength:"8"}),Object(a.jsx)("p",{children:"."}),Object(a.jsx)("button",{className:"login_signInButton",type:"submit",onClick:function(t){t.preventDefault(),h.signInWithEmailAndPassword(s,j).then((function(t){e.push("/home")})).catch((function(e){return alert(e.message)}))},children:"Sign In"}),Object(a.jsx)("h5",{className:"signup_line",children:"New to project"}),Object(a.jsx)(d.b,{to:"/signup",children:Object(a.jsx)("button",{className:"login_registerButton",children:"Create your project account"})}),Object(a.jsxs)("div",{className:"google",children:[Object(a.jsx)("p",{s:!0,children:"or sign up with"}),Object(a.jsx)("button",{onClick:function(){var t=new b.a.auth.GoogleAuthProvider;h.signInWithPopup(t).then((function(t){t.credential.accessToken,t.user;e.push("/home")})).catch((function(e){console.log(e)}))},className:"google-button",children:Object(a.jsx)("img",{width:"40",height:"40",src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg"})})]})]})]})})};var x=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),o=Object(r.a)(i,2),l=o[0],j=o[1],b=Object(c.useState)(""),O=Object(r.a)(b,2),x=O[0],g=O[1],m=Object(u.f)();return Object(a.jsx)("div",{className:"login",children:Object(a.jsxs)("div",{className:"login_container",children:[Object(a.jsx)("h3",{children:"Create Account"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("h5",{children:"Name"}),Object(a.jsx)("input",{type:"text",value:n,onChange:function(e){return s(e.target.value)},required:!0}),Object(a.jsx)("h5",{children:"E-Mail"}),Object(a.jsx)("input",{type:"email",value:l,onChange:function(e){return j(e.target.value)},required:!0}),Object(a.jsx)("h5",{children:"Password"}),Object(a.jsx)("input",{type:"password",value:x,onChange:function(e){return g(e.target.value)},required:!0,maxLength:"8"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("input",{type:"checkbox"})," I agree to the Terms of Service and privacy Policy"]}),Object(a.jsx)("button",{className:"login_signInButton",onClick:function(e){e.preventDefault(),h.createUserWithEmailAndPassword(l,x).then((function(e){console.log("auth>>>>",e.user.email),e&&(e.user.updateProfile({displayName:n}),m.push("/home"))})).catch((function(e){return alert(e.message)}))},children:"Sign up"}),Object(a.jsx)("p",{children:"______________________________________________ "}),Object(a.jsxs)("div",{className:"login_line",children:[Object(a.jsx)("h6",{children:"Already have an account? "}),Object(a.jsx)(d.b,{to:"/login",children:Object(a.jsx)("h6",{children:"Sign in"})})]})]})]})})};var g=function(){var e=Object(c.useState)({}),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)({}),o=Object(r.a)(i,2),b=o[0],h=o[1];return Object(c.useEffect)((function(){fetch("https://mockui5.free.beeceptor.com/userList").then((function(e){return e.json()})).then((function(e){h(e)}))}),[]),Object(a.jsx)(d.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{path:"/signup",children:Object(a.jsx)(x,{})}),Object(a.jsx)(u.a,{path:"/home",children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"head",children:[Object(a.jsx)(d.b,{className:"log",to:"/login",children:"LOGIN"}),Object(a.jsx)(d.b,{className:"sig",to:"/signup",children:"REGISTER"})]}),Object(a.jsx)("div",{className:"home_",children:Object(a.jsx)(l,{test:function(e){s(e)}})}),Object(a.jsx)("div",{className:"info_",children:Object(a.jsx)(j,{detail:n,navigation:function(e,t){console.log(e),console.log(t);var n=0;if("next"===e&&"undefined"==typeof t?(n=1,console.log(n)):"next"===e?n=t+1:"prev"===e&&"undefined"==typeof t?alert("sorry,no previous user "):n=t-1,!(n>b.length)&&!(n<1)){var c=b.filter((function(e){return e.id==n}));c&&s(c[0])}}})})]})}),Object(a.jsx)(u.a,{path:"/",children:Object(a.jsx)(O,{})})]})})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),i(e),o(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),m()}},[[50,1,2]]]);
//# sourceMappingURL=main.8d9cc3c7.chunk.js.map