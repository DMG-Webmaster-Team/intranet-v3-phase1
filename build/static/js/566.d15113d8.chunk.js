"use strict";(self.webpackChunkintranet=self.webpackChunkintranet||[]).push([[566],{9882:function(e,i,a){var t=a(2791),s=(a(9133),a(1779)),n=a(4901),l=a(184);i.Z=function(e){var i=e.data,a=(0,t.useContext)(n.I).colorTheme;return(0,l.jsx)(s.ww.div,{initial:{x:"-100vw"},animate:{x:0},transition:{duration:1,type:"spring"},id:"Header",className:"header ".concat(a," row"),children:(0,l.jsx)("h3",{className:"page_header-header text-white text-center",children:i})})}},5377:function(e,i,a){a.d(i,{Z:function(){return l}});var t=a(8683),s=(a(2791),a(5717)),n=(a(3037),a(8688),a(184)),l=function(e){var i=e.isArabic,a=e.data,l=e.home,r={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,lazyLoad:!0,autoplaySpeed:3e3,prevArrow:(0,n.jsx)("button",{type:"button",children:(0,n.jsx)("i",{className:"bi bi-arrow-left"})}),nextArrow:(0,n.jsx)("button",{type:"button",children:(0,n.jsx)("i",{className:"bi bi-arrow-right"})})};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.Z,(0,t.Z)((0,t.Z)({},r),{},{children:a.length>0&&"undefined"!==typeof a&&null!==a&&a.map((function(e,a){return(0,n.jsx)("div",{className:l?"mySlides":" mySlides mySlides-news",children:(0,n.jsx)("img",{src:e.image,alt:i?e.title_ar:e.title,className:l?"  slider-img":"img-fluid slider-img-news"})},a)}))}))})}},3868:function(e,i,a){a.r(i),a.d(i,{default:function(){return j}});var t=a(885),s=a(2791),n=a(4901),l=a(9882),r=a(4749),c=a(2982),d=a(1523),o=a(1779),m=a(184),x=function(e){var i=e.isArabic,a=e.weeklyNews;return(0,m.jsx)("div",{className:"weekly2-news-area weekly2-pading  ",children:(0,m.jsx)("div",{className:"container mt-5",children:(0,m.jsx)("div",{className:"weekly2-wrapper",children:(0,m.jsx)("div",{className:"row",children:a.map((function(e,a){return(0,m.jsx)("div",{className:"col-12 col-sm-6   col-lg-3 mb-5 mb-sm-0 ",children:(0,m.jsx)("div",{className:"weekly2-news-active dot-style d-flex dot-style",children:(0,m.jsx)(d.rU,{to:"/news/".concat(e.count),children:(0,m.jsxs)(o.ww.div,{className:"weekly2-single mx-auto w-100",whileHover:{scale:1.1},children:[(0,m.jsx)("div",{className:"weekly2-img ",children:(0,m.jsx)("img",{src:e.image,alt:"pic",className:"weekly2-img-image"})}),(0,m.jsx)("div",{className:i?"weekly2-caption mt-4 text-right":"weekly2-caption mt-4",children:(0,m.jsx)("h6",{children:i?e.title_ar:e.title})})]})})})},a)}))})})})})},u=a(5377),w=function(e){var i=e.news,a=e.isArabic;console.log(i);var t=(0,c.Z)(i).slice(0,2),s=i.slice(2);return(0,m.jsx)(m.Fragment,{children:i&&0!==i.length?(0,m.jsxs)(o.ww.main,{initial:{opacity:0},animate:{opacity:1},transition:{duration:2},children:[(0,m.jsx)(u.Z,{data:t,isArabic:a}),(0,m.jsx)(x,{isArabic:a,weeklyNews:s})]}):(0,m.jsx)(o.ww.div,{className:"text-center  text-capitalize mx-auto d-block",initial:{y:"100vh"},animate:{y:0},transition:{duration:1,type:"spring"},children:(0,m.jsx)("div",{className:"text-center no-data-available",children:(0,m.jsx)(r.xv,{tid:"noDataAvailable"})})})})},h=a(3266),j=function(){var e=(0,s.useState)([]),i=(0,t.Z)(e,2),a=i[0],c=i[1],d=(0,s.useState)(!1),o=(0,t.Z)(d,2),x=o[0],u=o[1],j=(0,s.useContext)(n.I),v=j.getLang,y=j.fetchData,g=j.isDataLoading;return(0,s.useEffect)((function(){y("news").then((function(e){c(e.news)})),u(v())}),[]),console.log(a),g?(0,m.jsx)(h.Z,{}):(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:" ",children:[(0,m.jsx)(l.Z,{data:(0,m.jsx)(r.xv,{tid:"navNews"})}),(0,m.jsx)(w,{news:a,isArabic:x})]})})}}}]);
//# sourceMappingURL=566.d15113d8.chunk.js.map