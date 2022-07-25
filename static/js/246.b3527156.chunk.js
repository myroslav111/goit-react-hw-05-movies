"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[246],{7779:function(n,e,t){t.d(e,{Z:function(){return w}});t(2791);var r,a,i,o,c,s=t(6871),p=t(168),u=t(2879),l=t(3504),d=u.Z.div(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  padding-top: 60px;\n  @media screen and (max-width: 500px) {\n    padding-top: 60px;\n  }\n"]))),f=(0,u.Z)(l.rU)(a||(a=(0,p.Z)(["\n  background: #fff;\n  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);\n  width: 100%;\n  max-width: 200px;\n  margin: 0.5em;\n  border-radius: 10px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n    box-shadow: 0 10px 25px rgb(0 0 0 / 8%);\n  }\n"]))),x=u.Z.img(i||(i=(0,p.Z)(["\n  padding: 0;\n  margin: 0;\n  height: 260px;\n  width: 100%;\n  display: block;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n"]))),h=u.Z.div(o||(o=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 5px;\n  margin: 0;\n  font-size: 9px;\n"]))),g=t(1737),m=t(3312),b=u.Z.h1(c||(c=(0,p.Z)(["\n  /* margin-bottom: 50px;\n  margin-top: 50px; */\n  /* color: black; */\n  position: relative;\n  font-size: 1.3em;\n  text-transform: uppercase;\n  width: 100%;\n  text-align: center;\n  -webkit-box-reflect: below 1px linear-gradient(transparent, #0008);\n  line-height: 0.7em;\n  outline: none;\n  animation: animate 8s linear infinite;\n"]))),v=t(184),w=function(n){var e=n.films,t=n.bool,r=(0,s.TH)();return(0,v.jsxs)(d,{children:[!t&&(0,v.jsx)(b,{children:"TRENDING TODAY"}),e.map((function(n){var e=n.title,t=n.poster_path,a=n.name,i=n.id,o=(0,s.Gn)(g.Z.movie,{movieId:i}),c=t?"https://image.tmdb.org/t/p/w500".concat(t):m.Z;return(0,v.jsxs)(f,{to:o,state:{from:r},children:[(0,v.jsx)(x,{src:c,alt:"poster of cinema",id:i}),(0,v.jsx)(h,{children:(0,v.jsx)("div",{children:(0,v.jsx)("h3",{children:e||a})})})]},i)}))]})}},9246:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,i,o=t(5861),c=t(885),s=t(7757),p=t.n(s),u=t(2791),l=t(168),d=t(2879),f=d.Z.div(r||(r=(0,l.Z)(["\n  padding-top: 70px;\n  padding-left: 10px;\n  position: fixed;\n  top: -61px;\n  z-index: 100;\n  @media screen and (max-width: 500px) {\n    position: relative;\n    padding-top: 150px;\n    display: block;\n    z-index: 0;\n  }\n"]))),x=d.Z.form(a||(a=(0,l.Z)(["\n  outline: 0;\n  float: left;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-radius: 4px;\n\n  & > input {\n    outline: 0;\n    height: 42px;\n    width: 244px;\n    line-height: 42px;\n    padding: 0 16px;\n    background-color: rgba(255, 255, 255, 0.8);\n    color: #212121;\n    border: 0;\n    float: left;\n    border-radius: 4px 0 0 4px;\n  }\n  & > input:focus {\n    outline: 0;\n    background-color: #fff;\n  }\n  & > button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    outline: 0;\n    background: none;\n    background-color: rgba(38, 50, 56, 0.8);\n    float: left;\n    height: 42px;\n    width: 42px;\n    text-align: center;\n    line-height: 42px;\n    border: 0;\n    color: #fff;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: 16px;\n    text-rendering: auto;\n    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n    transition: background-color 0.4s ease;\n    border-radius: 0 4px 4px 0;\n  }\n  & > button:hover {\n    background-color: rgba(0, 150, 136, 0.8);\n    & > svg {\n      width: 1.4em;\n      height: 1.4em;\n    }\n  }\n  svg {\n    display: inline-block;\n    width: 1.2em;\n    height: 1.2em;\n    stroke-width: 0;\n    stroke: currentColor;\n    fill: currentColor;\n  }\n"]))),h=t(2134),g=t(6066),m=t(184),b=function(n){var e=n.onSubmit,t=(0,u.useState)(""),r=(0,c.Z)(t,2),a=r[0],i=r[1],o=function(){i("")};return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(f,{children:(0,m.jsxs)(x,{onSubmit:function(n){n.preventDefault(),console.log("click");var t=a.trim();""!==t?(e(t),o()):g.Am.error("fill in the fields")},children:[(0,m.jsx)("input",{type:"text",placeholder:"Search",value:a,onChange:function(n){var e=n.currentTarget.value.toLowerCase();i(e)}}),(0,m.jsx)("button",{type:"submit",children:(0,m.jsx)(h.RB5,{})})]})})})},v=t(2690),w=t(7779),k=d.Z.div(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),y=function(){var n=(0,u.useState)(null),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,u.useState)(!1),i=(0,c.Z)(a,2),s=i[0],l=i[1],d=function(){var n=(0,o.Z)(p().mark((function n(e){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.Z.getCinemaByName(e);case 3:if(0!==(t=n.sent).length){n.next=7;break}return g.Am.info(" ".concat(e," not found!")),n.abrupt("return");case 7:r(t),l(!0),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),g.Am.error(n.t0.message);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}();return(0,m.jsxs)(k,{children:[(0,m.jsx)(b,{onSubmit:d}),t&&(0,m.jsx)(w.Z,{films:t,bool:s})]})}},3312:function(n,e){e.Z="https://www.boredpanda.com/blog/wp-content/uploads/2017/09/saddest-cat-luhu-maggie-liu-lanlan731-38-59c0bfed09657__700.jpg"},2690:function(n,e,t){var r=t(5861),a=t(7757),i=t.n(a),o=t(4569),c=t.n(o),s="44d416356c22cc8e7735ee915c193364",p="https://api.themoviedb.org/3/trending/all/day",u="https://api.themoviedb.org/3/search/movie",l="https://api.themoviedb.org/3/movie";function d(){return(d=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c().defaults.params={api_key:s,language:"uk-UA"},n.prev=1,n.next=4,c().get("".concat(p));case 4:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 9:n.prev=9,n.t0=n.catch(1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c().defaults.params={api_key:s,language:"uk-UA",query:"".concat(e)},n.prev=1,n.next=4,c().get("".concat(u));case 4:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 9:n.prev=9,n.t0=n.catch(1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c().defaults.params={api_key:s,language:"uk-UA"},n.prev=1,n.next=4,c().get("".concat(l,"/").concat(e));case 4:return t=n.sent,r=t.data,n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c().defaults.params={api_key:s,language:"uk-UA"},n.prev=1,n.next=4,c().get("".concat(l,"/").concat(e,"/credits"));case 4:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 9:n.prev=9,n.t0=n.catch(1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c().defaults.params={api_key:s,language:"en-US",page:1},n.prev=1,n.next=4,c().get("".concat(l,"/").concat(e,"/reviews"));case 4:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 9:n.prev=9,n.t0=n.catch(1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}var m={popular:function(){return d.apply(this,arguments)},movieById:function(n){return x.apply(this,arguments)},getReviews:function(n){return g.apply(this,arguments)},getCharacter:function(n){return h.apply(this,arguments)},getCinemaByName:function(n){return f.apply(this,arguments)}};e.Z=m}}]);
//# sourceMappingURL=246.b3527156.chunk.js.map