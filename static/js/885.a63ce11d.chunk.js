"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[885],{8885:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r,a,c=n(5861),u=n(885),s=n(7757),p=n.n(s),o=n(2791),i=n(6871),l=n(2690),f=n(168),h=n(2879),v=n(2554),d=h.Z.ul(a||(a=(0,f.Z)(["\n  padding: 30px 30px 30px 30px;\n  ",";\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  /* color: white; */\n  color: #ff6b08;\n  font-weight: 900;\n"])),(function(e){return(0,v.iv)(r||(r=(0,f.Z)(["\n    background: url(",");\n  "])),e.p)})),g=n(5667),m=n(6066),w=n(184),x=function(){var e=(0,i.bx)(),t=e.movieId,n=e.movie,r=(0,o.useState)(null),a=(0,u.Z)(r,2),s=a[0],f=a[1];return(0,o.useEffect)((function(){(0,c.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.getReviews(t);case 3:n=e.sent,f(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m.Am.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[t]),s&&g.NY.scrollMore(400),(0,w.jsx)(w.Fragment,{children:s&&(s.length>0?(0,w.jsx)(d,{p:"https://image.tmdb.org/t/p/w500".concat(n.backdrop_path),children:s.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,w.jsxs)("li",{children:[(0,w.jsx)("p",{children:n}),(0,w.jsx)("p",{children:r})]},t)}))}):(0,w.jsx)("p",{children:"No rewiews"}))})}},2690:function(e,t,n){var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u),p="44d416356c22cc8e7735ee915c193364",o="https://api.themoviedb.org/3/trending/all/day",i="https://api.themoviedb.org/3/search/movie",l="https://api.themoviedb.org/3/movie";function f(){return(f=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s().defaults.params={api_key:p,language:"en-US"},e.prev=1,e.next=4,s().get("".concat(o));case 4:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s().defaults.params={api_key:p,language:"en-US",query:"".concat(t)},e.prev=1,e.next=4,s().get("".concat(i));case 4:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s().defaults.params={api_key:p,language:"en-US"},e.prev=1,e.next=4,s().get("".concat(l,"/").concat(t));case 4:return n=e.sent,r=n.data,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s().defaults.params={api_key:p,language:"en-US"},e.prev=1,e.next=4,s().get("".concat(l,"/").concat(t,"/credits"));case 4:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s().defaults.params={api_key:p,language:"en-US",page:1},e.prev=1,e.next=4,s().get("".concat(l,"/").concat(t,"/reviews"));case 4:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var m={popular:function(){return f.apply(this,arguments)},movieById:function(e){return v.apply(this,arguments)},getReviews:function(e){return g.apply(this,arguments)},getCharacter:function(e){return d.apply(this,arguments)},getCinemaByName:function(e){return h.apply(this,arguments)}};t.Z=m},2554:function(e,t,n){var r;n.d(t,{iv:function(){return u}});var a=n(2791),c=(n(76),n(2110),n(4804));(r||(r=n.t(a,2))).useInsertionEffect?(r||(r=n.t(a,2))).useInsertionEffect:a.useLayoutEffect;function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,c.O)(t)}}}]);
//# sourceMappingURL=885.a63ce11d.chunk.js.map