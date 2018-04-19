!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("lodash"));else if("function"==typeof define&&define.amd)define(["lodash"],n);else{var r=n("object"==typeof exports?require("lodash"):t.lodash);for(var o in r)("object"==typeof exports?exports:t)[o]=r[o]}}(this,function(t){return function(t){function n(o){if(r[o])return r[o].exports;var e=r[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,n),e.l=!0,e.exports}var r={};return n.m=t,n.c=r,n.i=function(t){return t},n.d=function(t,r,o){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=4)}([function(n,r){n.exports=t},function(t,n,r){"use strict";function o(t){var n=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase()};return""+c(t).reduce(function(t,r,o){return t.concat([n(o)+": "+r])},[]).join(";")}function e(t){var n=t.height,r=t.width,o=t.minHeight;return{height:c.isUndefined(n)?"auto":w(n),width:c.isUndefined(r)?"":w(r),minHeight:c.isUndefined(o)?"":w(o)}}function i(t,n,r,o){var u=r.cssGridVariant;void 0===o&&(o=0);var a=0===o,f=t.components;if(c.isEmpty(f))return{hierarchy:(_={},_[n]=[],_),styles:(U={},U[n]=e({height:t.height,width:t.width,minHeight:t.minHeight}),U)};var s="ms"===u,p=c.sortBy(f,h),m=c.sortBy(f,g),d=$(t,p,m),l=D(p,d),v=Z(l,d,o,n),b=c(v).map("components").flatten().value(),y=E(v),w=nt(t,d),x=it(t,w),j=ut(t,w),B=at(s,t,y,m,w),R=n+"-gridWrapper",S=n+"-gridContainer",H=(k={},k[n]=[R],k[R]=[S],k[S]=[],k),M=(P={},P[n]=x,P[R]=j,P[S]=B,P),O=function(t){if(H[S].push(t.id),t.wedge)return void c.assign(M,(r={},r[t.id]=ft(y,t,s),r));if(c.assign(M,(e={},e[t.id]=st(y,t,s,!a),e)),t.dynamicBlock){var n=i(t,t.id,{cssGridVariant:u},o+1);c.forEach(n.styles,function(t,n){M[n]=c.assign({},M[n],t)}),c.assign(H,n.hierarchy)}var r,e};return c.forEach(b,O),{hierarchy:H,styles:M};var _,U,k,P}function u(t,n){var r=void 0===n?{}:n,e=r.shouldStringify,u=void 0!==e&&e,a=r.cssGridVariant,f=void 0===a?"standard":a,s=(r.softMargin,c.isUndefined(t.id)?"root":t.id),p=i(t,s,{cssGridVariant:f}),m=p.hierarchy,d=p.styles,h=u?o:c.identity;return{structure:ct(m,s),styles:c.mapValues(d,h)}}var a=this&&this.__assign||Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t};Object.defineProperty(n,"__esModule",{value:!0});var c=r(0),f=function(){function t(){}return t}();n.Margins=f;var s=function(){function t(){}return t}();n.Dock=s;var p=function(){function t(){}return t}();n.Layout=p;var m=function(){function t(){}return t}();n.Container=m;var d=function(){function t(){}return t}();n.Mesh=d;var h=function(t){return t.top},l=function(t){return t.left},g=function(t){return t.top+t.height},v=function(t){return t.left+t.width},b=function(t){return{top:h(t),bottom:g(t)}},y=function(t){return{left:l(t),right:v(t)}},w=function(t){return t+"px"},x=function(t){return c.isNumber(t)?w(t):function(t){return"calc("+w(t.px)+" + "+t.pct+"%)"}(t)},j=function(t,n){return t.bottom===n.top},B=function(t,n){return n.top-t.bottom},R=function(t,n,r,o,e){return{id:e+"-wedge-"+r+"-"+o,left:0,top:t,width:0,height:n+(t<0?-1*t:0),wedge:!0}},S=function(t,n,r){var o=[],e=function(t,n,r){return o.push({area:t,components:n,subRows:r})};e(t[0].area,t[0].components,t[0].subRows);for(var i=1;i<t.length;i++){var u=t[i-1].area,a=t[i].area,f=t[i].components,s=t[i].subRows;if(j(u,a))e(a,f,s);else{var p=B(u,a);if(p<=20){var m=c.defaults({top:a.top-p},a);e(m,f,s)}else{var m=c.defaults({top:a.top-20},a);!function(t,o,i,u){e({top:t.bottom,bottom:o.top},[R(n.top,o.top,i,u,r)],[])}(u,m,i,i),e(m,f,s)}}}return o},E=function(t){return c.reduce(t,function(t,n){var r=n.area,o=n.subRows;if(c.isEmpty(o))t.push(a({},r,{isSubRow:!1}));else for(var e=[r.top].concat(o,[r.bottom]),i=1;i<e.length;i++)t.push({top:e[i-1],bottom:e[i],isSubRow:!0});return t},[])},H=function(t){return function(n,r,o,e){return t?{"-ms-grid-row":n,"-ms-grid-column":r,"-ms-grid-row-span":o-n,"-ms-grid-column-span":e-r}:{gridArea:[n,r,o,e].join(" / ")}}},M=function(t,n){return c.findLastIndex(t,function(t){return t.top<=h(n)})},O=function(t,n){return c.findIndex(t,function(t){return t.bottom>=g(n)})},_=function(t,n){return t===n.length-1},U=function(t,n){var r=n.bottom-g(t);return c.min([r,20])},k=function(t,n){return n.bottom-g(t)},P=function(t,n,r,o){var e=n[r],i=e.isSubRow;return _(r,n)?o?0:U(t,e):i?k(t,e):0},T=function(t,n,r){return h(t)-n[r].top},V=function(t,n,r){var o=M(t,n),e=O(t,n);return{marginTop:T(n,t,o),marginBottom:P(n,t,e,r),left:l(n),rowStart:o+1,columnStart:1,rowEnd:e+2,columnEnd:2}},q=function(t,n){return{top:c.min([t.top,n.top]),bottom:c.max([t.bottom,n.bottom])}},C=function(t,n){return q(t,b(n))},G=function(t,n){return{left:c.min([t.left,n.left]),right:c.max([t.right,n.right])}},L=function(t,n){return G(t,y(n))},D=function(t,n){var r=function(t){return{components:[t],area:b(t)}},o=[];if(0===t.length)return o;var e=r(t[0]);e.area.top=n.top;for(var i=1;i<t.length;i++)!function(t,n){return h(n)<t.bottom}(e.area,t[i])?(o.push(e),e=r(t[i])):e=function(t,n){return{components:t.components.concat([n]),area:C(t.area,n)}}(e,t[i]);return e.area.bottom=n.bottom,o.push(e),o},A=function(t){var n=function(t){return{components:[t],area:y(t)}},r=[];if(0===t.length)return r;for(var o=n(t[0]),e=1;e<t.length;e++)!function(t,n){return l(n)<t.right}(o.area,t[e])?(r.push(o),o=n(t[e])):o=function(t,n){return{components:t.components.concat([n]),area:L(t.area,n)}}(o,t[e]);return r.push(o),r},I=function(t){return c.max([t.height||0,t.minHeight||0])},$=function(t,n,r){return{top:c.min([0,h(c.first(n))]),bottom:c.max([t.height||0,t.minHeight||0,g(c.last(r))])}},z=function(t){return{left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top}},N=function(t,n,r,o,e,i){var u=z(a({},n,r));return a({id:i+"-dynamic-block-"+o+"-"+e},u,{components:c.map(t,function(t){return a({},t,{left:t.left-u.left,top:t.top-u.top})}),dynamicBlock:!0})},W=function(t,n,r,o){return c.map(t,function(t,e){var i=t.components,u=t.area;return 1===i.length?i[0]:N(i,n,u,e,r,o)})},Z=function(t,n,r,o){var e=c.map(t,function(t,n){var e=K(t),i=e.length>0,u=i&&r<3,a=t.components;if(u){var f=A(c.sortBy(a,l));if(f.length>1)return{area:t.area,components:W(f,t.area,n,o),subRows:[]}}return{area:t.area,components:a,subRows:e}});return S(e,n,o)},F=function(t){return c(t).map(g).uniq().value()},J=function(t,n){var r=F(n),o=c.sortBy([t.top].concat(r)),e=0,i=function(t){for(;o[e+1]<t;)e++;return o[e]};return c(n).map(function(t){return i(h(t))}).uniq().reject(function(n){return n===t.top}).value()},K=function(t){var n=t.area,r=t.components,o=c.sortBy(r,h);return J(n,o)},Q=function(t){return c(t).map(function(n,r){return _(r,t)?"1fr":"min-content"}).join(" ")},X=function(t,n){return r={},r[n?"-ms-grid-rows":"gridTemplateRows"]=Q(t),r;var r},Y=function(t,n){return t-n>20},tt=function(t,n,r,o){var e,i=c.isUndefined(t);if(i)e=n;else{var u=g(c.last(r));e=Y(t,u)?c.max([t,n]):n}return c.isUndefined(e)?"auto":w(e+o.top)},nt=function(t,n){var r=!c.isUndefined(t.height),o=r&&I(t);return{top:0-n.top,bottom:r?n.bottom-o:0}},rt=function(t){return t.top>0||t.bottom>0},ot={top:"marginTop",bottom:"marginBottom"},et=function(t){return c(t).pickBy(function(t){return t>0}).reduce(function(t,n,r){return t[ot[r]]=w(-1*n),t},{})},it=function(t,n){return{height:"auto",width:t.width?w(t.width):""}},ut=function(t,n){return rt(n)?{display:"flex"}:{}},at=function(t,n,r,o,e){return a({position:"relative",display:t?"-ms-grid":"grid",height:"auto",minHeight:tt(n.height,n.minHeight,o,e)},et(e),X(r,t))},ct=function(t,n){var r=function(n,o){return void 0===o&&(o=[]),{id:n,children:c.map(o,function(n){return r(n,t[n])})}};return r(n,t[n])},ft=function(t,n,r){var o=H(r),e=M(t,n),i=O(t,n);return a({visibility:"hidden",height:w(n.height),width:0},o(e+1,1,i+2,2))},st=function(t,n,r,o){var e=H(r),i=V(t,n,o),u=i.marginTop,c=i.marginBottom,f=i.left,s=i.rowStart,p=i.columnStart,m=i.rowEnd,d=i.columnEnd;return a({position:"relative",marginTop:x(u),marginBottom:x(c),left:w(f)},e(s,p,m,d),(h={},h[r?"-ms-grid-column-align":"justifySelf"]="start",h[r?"-ms-grid-row-align":"alignSelf"]="start",h));var h};n.createMeshData=i,n.structure2mesh=u},,,function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=r(1);n.structure2mesh=o.structure2mesh;var e=function(){function t(){}return t}();n.Margins=e;var i=function(){function t(){}return t}();n.Dock=i;var u=function(){function t(){}return t}();n.Layout=u;var a=function(){function t(){}return t}();n.Container=a}])});
//# sourceMappingURL=main.js.map