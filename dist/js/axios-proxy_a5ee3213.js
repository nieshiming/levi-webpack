(self.webpackChunk=self.webpackChunk||[]).push([[635],{83091:function(W,C,e){W.exports=e(5681)},65856:function(W,C,e){"use strict";e.d(C,{It:function(){return Y},hX:function(){return Q},x4:function(){return m},RX:function(){return U},YC:function(){return B},Ho:function(){return V},Mh:function(){return w}});var x=e(49719),b=e.n(x),k=e(42475),j=e.n(k),q=e(25551),T=e.n(q),ee=e(73507),D=e.n(ee),re=e(86657),L=e.n(re),y=e(1005),G=e(30283),R=e(89214),$=e(84295),S=e(86806),I=e(22043),P=e.n(I),M=e(75534),O=e.n(M),d=e(8139),J=e.n(d),z=e(14206),F=e.n(z);function h(t,a){var n=b()(t);if(j()){var s=j()(t);a&&(s=T()(s).call(s,function(u){return D()(t,u).enumerable})),n.push.apply(n,s)}return n}function N(t){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?h(Object(n),!0).forEach(function(s){(0,y.Z)(t,s,n[s])}):L()?Object.defineProperties(t,L()(n)):h(Object(n)).forEach(function(s){Object.defineProperty(t,s,D()(n,s))})}return t}var A=F().create({timeout:6e4,responseType:"text",withCredentials:!0,headers:{Pragma:"no-cache",Accept:"application/json","Cache-Control":"no-cache, no-store, must-revalidate"},baseURL:"/"});A.interceptors.request.use(function(t){return t},function(t){return O().reject(t)}),A.interceptors.response.use(function(t){return t},function(t){return O().reject(t)});function X(t){return A.request(t).then(function(){var a=(0,S.Z)(P().mark(function n(s){var u,i,v,l,f,r,o,g;return P().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(u=s.data,i=u===void 0?{}:u,v=s.status,l=i.code,f=i.resultMessage,r=i.data,o=i.pagination,g=t.responseType,!(Number(l)===200||v===200)){_.next=5;break}return _.abrupt("return",o?{data:r,pagination:o}:r);case 5:if(g!=="blob"){_.next=7;break}return _.abrupt("return",s);case 7:return l===401&&($.ZP.warn("\u9000\u51FA\u767B\u5F55"),window.location.href="/"),_.abrupt("return",O().reject(new Error(f)));case 9:case"end":return _.stop()}},n)}));return function(n){return a.apply(this,arguments)}}(),function(a){return O().reject(new Error(a.message))})}var c=function(a){var n=a,s="GET",u=a.split(" ");if(u.length===2){var i=u,v=(0,G.Z)(i,2);s=v[0],n=v[1]}return function(l,f){var r;return X(N((r={url:n,method:s},(0,y.Z)(r,s==="GET"?"params":"data",l),(0,y.Z)(r,"paramsSerializer",function(g){return J().stringify(g,{indices:!1})}),r),f))}};E=c;var E;$RefreshReg$(E,"ApiGenerator");var H=function(a){return API("POST /mock/login/account?name=".concat(a))},Y=c("GET /douban/v2/movie/us_box"),Q=c("GET /mock/getlunbo"),B=c("GET /api/testget?name=1"),V=c("POST /api/testpost"),w=c("PUT /mock/put"),U=c("DELETE /mock/delete"),m=c("GET /api/getmethods"),p=c("GET /nodejs/getInfo")},79974:function(W,C,e){"use strict";e.r(C);var x=e(67484),b=e(58836),k=e(33099),j=e(35062),q=e(33999),T=e(10374),ee=e(55661),D=e(9696),re=e(89214),L=e(84295),y=e(50623),G=e(1489),R=e(71445),$=e(41340),S=e(62622),I=e(13707),P=e(1005),M=e(86806),O=e(22043),d=e.n(O),J=e(75534),z=e.n(J),F=e(62286),h=e.n(F),N=e(83091),A=e.n(N),X=e(99139),c=e.n(X),E=e(27378),H=e(65856);function Y(m){var p=Q();return function(){var a=(0,I.Z)(m),n;if(p){var s=(0,I.Z)(this).constructor;n=c()(a,arguments,s)}else n=a.apply(this,arguments);return(0,S.Z)(this,n)}}function Q(){if(typeof Reflect=="undefined"||!c()||c().sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(c()(Boolean,[],function(){})),!0}catch{return!1}}var B=function(){var m=(0,M.Z)(d().mark(function p(t){var a,n=arguments;return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return a=n.length>1&&n[1]!==void 0?n[1]:2e3,console.log("jsonp start"),u.abrupt("return",new(z())(function(i,v){var l,f,r=t.url,o=t.params,g=t.callback,Z=h()(l="".concat(g,"_")).call(l,Date.now()),_=A()(r).call(r,"?")>-1?r:"".concat(r,"?");for(var te in o){var ne;_+=h()(ne="&".concat(te,"=")).call(ne,o[te])}var K=document.createElement("script");K.setAttribute("src",h()(f="".concat(_,"&callback=")).call(f,encodeURIComponent(Z))),document.body.appendChild(K);var oe=setTimeout(function(){v()},a),ae=function(){clearTimeout(oe),delete window[Z],document.body.removeChild(K)};window[Z]=function(se){ae(),i(se)},K.addEventListener("error",function(){ae(),v()})}));case 3:case"end":return u.stop()}},p)}));return function(t){return m.apply(this,arguments)}}();U=B;var V={},w=function(m){(0,$.Z)(t,m);var p=Y(t);function t(){var a,n;(0,y.Z)(this,t);for(var s=arguments.length,u=new Array(s),i=0;i<s;i++)u[i]=arguments[i];return n=p.call.apply(p,h()(a=[this]).call(a,u)),(0,P.Z)((0,R.Z)(n),"state",V),(0,P.Z)((0,R.Z)(n),"apigetProxyData",(0,M.Z)(d().mark(function v(){var l,f;return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,(0,H.hX)();case 3:l=o.sent,f=l.data,console.log(f),o.next=11;break;case 8:o.prev=8,o.t0=o.catch(0),console.log(o.t0);case 11:case"end":return o.stop()}},v,null,[[0,8]])}))),(0,P.Z)((0,R.Z)(n),"getMovieList",(0,M.Z)(d().mark(function v(){var l;return d().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,H.It)();case 3:l=r.sent,console.log(l),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}},v,null,[[0,7]])}))),(0,P.Z)((0,R.Z)(n),"onMockJsonpRequest",(0,M.Z)(d().mark(function v(){var l;return d().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,B({params:{name:"levi",date:Date.now()},callback:"callback",url:"http://10.180.21.95:8081"});case 3:l=r.sent,console.log(l),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),L.ZP.warning(r.t0);case 10:case"end":return r.stop()}},v,null,[[0,7]])}))),n}return(0,G.Z)(t,[{key:"render",value:function(){return E.createElement(b.Z,null,E.createElement(j.Z,{justify:"start",gutter:20},E.createElement(T.Z,null,E.createElement(D.Z,{type:"primary",onClick:this.onMockJsonpRequest},"nodejs\u6570\u636E")),E.createElement(T.Z,null,E.createElement(D.Z,{type:"primary",onClick:this.apigetProxyData},"\u542F\u52A8\u4EE3\u7406\u6570\u636E")),E.createElement(T.Z,null,E.createElement(D.Z,{type:"ghost",onClick:this.getMovieList},"\u5317\u7F8E\u7968\u623F\u699C"))))}}]),t}(E.Component);C.default=w;var U;$RefreshReg$(U,"Jsonp")},96553:function(){}}]);
