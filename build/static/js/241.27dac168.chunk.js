"use strict";(self.webpackChunkintranet=self.webpackChunkintranet||[]).push([[241],{9882:function(e,s,n){var i=n(2791),c=(n(9133),n(1779)),a=n(6125),t=n(184);s.Z=function(e){var s=e.data,n=(0,i.useContext)(a.I),o=(n.logout,n.loggedIn,n.colorTheme);return(0,t.jsx)(c.ww.div,{initial:{x:"-100vw"},animate:{x:0},transition:{duration:1,type:"spring"},id:"Header",className:"header ".concat(o," row"),children:(0,t.jsx)("h3",{className:"page_header-header text-white text-center",children:s})})}},1293:function(e,s,n){n.r(s),n.d(s,{default:function(){return f}});var i=n.p+"static/media/Learning.db779b8b4101da753246.jpg",c=n.p+"static/media/Policies.0b3a8bd34e1cef5912fc.jpg",a=n.p+"static/media/Benefits.4d729ea708aa93311687.jpg",t=n.p+"static/media/Employe history.f867041bbfda4e12fb37.jpg",o=n.p+"static/media/compensation.f185b56d5577cc148003.jpg",l=n(7863),d=n.p+"static/media/performance.729dd499e621c62bd37f.jpg",r=n.p+"static/media/req.203994bbbbd890554571.jpg",m=n(4749),x=n(9882),h=n(1523),j=n(1779),p=n(2791),g=n(6125),v=(n(4569),n(8329)),N=n(184),f=function(){var e=(0,p.useContext)(g.I),s=(e.loggedIn,e.colorTheme),n=v.Z.get("user"),f="undefined"!==n&&JSON.parse(n),w=f.userId,u=f.userEmail;var y=window.btoa(w.split("").reverse().join(""));return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(x.Z,{data:(0,N.jsx)(m.xv,{tid:"Employees Hub"})}),(0,N.jsxs)("div",{className:"container",children:[(0,N.jsxs)("div",{className:"row  mt-md-1 mt-2 justify-content-center text-center",children:[(0,N.jsx)("div",{className:"col-12 col-md-6 col-lg-3 my-2",children:(0,N.jsxs)(h.rU,{to:"/learning-development",className:"icon overlayCont ".concat(s),id:"learning-development",children:[(0,N.jsx)(j.ww.img,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},id:"icon",src:i,alt:"university-icon",className:"rounded image"}),(0,N.jsx)("div",{className:"middle",children:(0,N.jsx)("div",{className:"text",children:"Learning & Development"})}),(0,N.jsx)("div",{className:"more-cont ".concat(s),children:"View more"})]})}),(0,N.jsx)("div",{className:"col-12 col-md-6 col-lg-3 my-2",children:(0,N.jsxs)(h.rU,{to:"/hr-policies",className:"icon overlayCont ".concat(s),id:"policies",children:[(0,N.jsx)(j.ww.img,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},id:"icon",src:c,alt:"jobs-icon",className:"rounded image"}),(0,N.jsx)("div",{className:"middle",children:(0,N.jsx)("div",{className:"text text-nowrap",children:"HR Policies"})}),(0,N.jsx)("div",{className:"more-cont ".concat(s),children:"View more"})]})}),(0,N.jsx)("div",{className:"col-12 col-md-6 col-lg-3 my-2",children:(0,N.jsxs)(h.rU,{to:"/requests",className:"icon overlayCont ".concat(s),id:"",children:[(0,N.jsx)(j.ww.img,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},id:"icon",src:r,alt:"news-icon",className:"rounded image"}),(0,N.jsx)("div",{className:"middle",children:(0,N.jsx)("div",{className:"text text-nowrap",children:"HR Requests"})}),(0,N.jsx)("div",{className:"more-cont ".concat(s),children:"View more"})]})}),(0,N.jsx)("div",{className:"col-12 col-md-6 col-lg-3 my-2",id:"benefitsLogin",children:(0,N.jsxs)("a",{className:"icon overlayCont ".concat(s),onClick:function(){var e=Date.now(),s=window.btoa(JSON.stringify("employee_email="+u+e+"&fromMobileApplication=TRUE&date="+e));document.getElementById("benefitsLogin").insertAdjacentHTML("afterbegin",'<form\n        style="display:none !important"\n        method="post"\n        id="attLoginForm"\n        action="https://dmgian.corp-dmg.com/benefits/login/"\n      >\n        <input name="body" value="'+s+'" />\n      </form>'),document.getElementById("attLoginForm").submit()},children:[(0,N.jsx)(j.ww.img,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},id:"icon",src:a,alt:"announcments-icon",className:"rounded image"}),(0,N.jsx)("div",{className:"middle",children:(0,N.jsxs)("div",{className:"text",children:[(0,N.jsx)("span",{className:"fs-1 mazaya",children:"\u0645\u0632\u0627\u064a\u0627"})," Benefits"]})}),(0,N.jsx)("div",{className:"more-cont ".concat(s),children:"View more"})]})})]}),(0,N.jsxs)("div",{className:"row  mt-1 justify-content-center text-center",children:[(0,N.jsx)("div",{className:"col-12 col-md-6 col-lg-3 my-2",children:(0,N.jsxs)("a",{href:"https://ehda.login.em2.oraclecloud.com/",className:"icon overlayCont ".concat(s),id:"benefits",children:[(0,N.jsx)(j.ww.img,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},id:"icon",src:d,alt:"announcments-icon",className:"rounded image"}),(0,N.jsx)("div",{className:"middle",children:(0,N.jsx)("div",{className:"text",children:(0,N.jsx)("span",{className:"",children:"Performance"})})}),(0,N.jsx)("div",{className:"more-cont ".concat(s),children:"View more"})]})}),(0,N.jsx)("div",{className:"col-12 col-md-6 col-lg-3 my-2",children:(0,N.jsxs)(h.rU,{to:"/attendance",className:"icon overlayCont ".concat(s),id:"benefits",children:[(0,N.jsx)(j.ww.img,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},id:"icon",src:l,alt:"announcments-icon",className:"rounded image"}),(0,N.jsx)("div",{className:"middle",children:(0,N.jsx)("div",{className:"text",children:(0,N.jsx)("span",{className:"",children:"Attendance"})})}),(0,N.jsx)("div",{className:"more-cont ".concat(s),children:"View more"})]})}),(0,N.jsx)("div",{className:"col-12 col-md-6 col-lg-3 my-2",children:(0,N.jsxs)(h.rU,{to:"/compensation",className:"icon overlayCont ".concat(s),id:"benefits",children:[(0,N.jsx)(j.ww.img,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},id:"icon",src:o,alt:"announcments-icon",className:"rounded image"}),(0,N.jsx)("div",{className:"middle",children:(0,N.jsxs)("div",{className:"text",children:[(0,N.jsx)("span",{className:"text-nowrap",children:"My Compensation"}),(0,N.jsx)("br",{})]})}),(0,N.jsx)("div",{className:"more-cont ".concat(s),children:"Coming Soon..."})]})}),(0,N.jsx)("div",{className:"col-12 col-md-6 col-lg-3 my-2",children:(0,N.jsxs)("a",{href:"http://10.1.11.83:8080/ords/f?p=154:70:::::P70_CRYBTO:".concat(y),className:"icon overlayCont ".concat(s),children:[(0,N.jsx)(j.ww.img,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},id:"icon",src:t,alt:"announcments-icon",className:"rounded image"}),(0,N.jsx)("div",{className:"middle",children:(0,N.jsx)("div",{className:"text",children:(0,N.jsx)("span",{className:"",children:"Employment History"})})}),(0,N.jsx)("div",{className:"more-cont ".concat(s),children:"View more"})]})})]})]})]})}},7863:function(e,s,n){e.exports=n.p+"static/media/attendance.2f401ceb757fe62873b3.jpg"}}]);
//# sourceMappingURL=241.27dac168.chunk.js.map