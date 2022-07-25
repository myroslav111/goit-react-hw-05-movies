"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[859],{7779:function(n,e,t){t.d(e,{Z:function(){return b}});t(2791);var r,a,c,i,s,u=t(6871),p=t(168),o=t(2879),l=t(3504),d=o.Z.div(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  padding-top: 60px;\n"]))),f=(0,o.Z)(l.rU)(a||(a=(0,p.Z)(["\n  background: #fff;\n  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);\n  width: 100%;\n  max-width: 200px;\n  margin: 0.5em;\n  border-radius: 10px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n    box-shadow: 0 10px 25px rgb(0 0 0 / 8%);\n  }\n"]))),h=o.Z.img(c||(c=(0,p.Z)(["\n  padding: 0;\n  margin: 0;\n  height: 260px;\n  width: 100%;\n  display: block;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n"]))),m=o.Z.div(i||(i=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 5px;\n  margin: 0;\n  font-size: 9px;\n"]))),g=t(1737),v=t(3312),x=o.Z.h1(s||(s=(0,p.Z)(["\n  /* margin-bottom: 50px;\n  margin-top: 50px; */\n  /* color: black; */\n  position: relative;\n  font-size: 1.3em;\n  text-transform: uppercase;\n  width: 100%;\n  text-align: center;\n  -webkit-box-reflect: below 1px linear-gradient(transparent, #0008);\n  line-height: 0.7em;\n  outline: none;\n  animation: animate 8s linear infinite;\n"]))),w=t(184),b=function(n){var e=n.films,t=(0,u.TH)();return(0,w.jsxs)(d,{children:[(0,w.jsx)(x,{children:"TRENDING TODAY"}),e.map((function(n){var e=n.title,r=n.poster_path,a=n.name,c=n.id,i=(0,u.Gn)(g.Z.movie,{movieId:c}),s=r?"https://image.tmdb.org/t/p/w500".concat(r):v.Z;return(0,w.jsxs)(f,{to:i,state:{from:t},children:[(0,w.jsx)(h,{src:s,alt:"poster of cinema",id:c}),(0,w.jsx)(m,{children:(0,w.jsx)("div",{children:(0,w.jsx)("h3",{children:e||a})})})]},c)}))]})}},8859:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r=t(5861),a=t(885),c=t(7757),i=t.n(c),s=t(2791),u=t(2690),p=t(7779),o=t(6066),l=t(184),d=function(){var n=(0,s.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1];return(0,s.useEffect)((function(){(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.popular();case 3:e=n.sent,c(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),o.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}),[]),(0,l.jsx)("div",{children:(0,l.jsx)(p.Z,{films:t})})}},3312:function(n,e){e.Z="https://www.boredpanda.com/blog/wp-content/uploads/2017/09/saddest-cat-luhu-maggie-liu-lanlan731-38-59c0bfed09657__700.jpg"},2690:function(n,e,t){var r=t(5861),a=t(7757),c=t.n(a),i=t(4569),s=t.n(i),u="44d416356c22cc8e7735ee915c193364",p="https://api.themoviedb.org/3/trending/all/day",o="https://api.themoviedb.org/3/search/movie",l="https://api.themoviedb.org/3/movie";function d(){return(d=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s().defaults.params={api_key:u,language:"uk-UA"},n.prev=1,n.next=4,s().get("".concat(p));case 4:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 9:n.prev=9,n.t0=n.catch(1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s().defaults.params={api_key:u,language:"uk-UA",query:"".concat(e)},n.prev=1,n.next=4,s().get("".concat(o));case 4:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 9:n.prev=9,n.t0=n.catch(1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s().defaults.params={api_key:u,language:"uk-UA"},n.prev=1,n.next=4,s().get("".concat(l,"/").concat(e));case 4:return t=n.sent,r=t.data,n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s().defaults.params={api_key:u,language:"uk-UA"},n.prev=1,n.next=4,s().get("".concat(l,"/").concat(e,"/credits"));case 4:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 9:n.prev=9,n.t0=n.catch(1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s().defaults.params={api_key:u,language:"en-US",page:1},n.prev=1,n.next=4,s().get("".concat(l,"/").concat(e,"/reviews"));case 4:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 9:n.prev=9,n.t0=n.catch(1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}var v={popular:function(){return d.apply(this,arguments)},movieById:function(n){return h.apply(this,arguments)},getReviews:function(n){return g.apply(this,arguments)},getCharacter:function(n){return m.apply(this,arguments)},getCinemaByName:function(n){return f.apply(this,arguments)}};e.Z=v}}]);
//# sourceMappingURL=859.3a117c9e.chunk.js.map