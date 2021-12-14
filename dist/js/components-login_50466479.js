(self.webpackChunk=self.webpackChunk||[]).push([[974],{65856:function(ut,C,t){"use strict";t.d(C,{It:function(){return w},hX:function(){return N},x4:function(){return W},RX:function(){return B},YC:function(){return z},Ho:function(){return k},Mh:function(){return q}});var R=t(49719),r=t.n(R),U=t(42475),h=t.n(U),tt=t(25551),$=t.n(tt),et=t(73507),G=t.n(et),nt=t(86657),d=t.n(nt),O=t(1005),S=t(30283),it=t(89214),X=t(84295),V=t(86806),Y=t(22043),L=t.n(Y),b=t(75534),Z=t.n(b),H=t(8139),A=t.n(H),F=t(14206),J=t.n(F);function T(e,a){var o=r()(e);if(h()){var n=h()(e);a&&(n=$()(n).call(n,function(u){return G()(e,u).enumerable})),o.push.apply(o,n)}return o}function K(e){for(var a=1;a<arguments.length;a++){var o=arguments[a]!=null?arguments[a]:{};a%2?T(Object(o),!0).forEach(function(n){(0,O.Z)(e,n,o[n])}):d()?Object.defineProperties(e,d()(o)):T(Object(o)).forEach(function(n){Object.defineProperty(e,n,G()(o,n))})}return e}var P=J().create({timeout:6e4,responseType:"text",withCredentials:!0,headers:{Pragma:"no-cache",Accept:"application/json","Cache-Control":"no-cache, no-store, must-revalidate"},baseURL:"/"});P.interceptors.request.use(function(e){return e},function(e){return Z().reject(e)}),P.interceptors.response.use(function(e){return e},function(e){return Z().reject(e)});function Q(e){return P.request(e).then(function(){var a=(0,V.Z)(L().mark(function o(n){var u,f,p,g,E,i,y,v;return L().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(u=n.data,f=u===void 0?{}:u,p=n.status,g=f.code,E=f.resultMessage,i=f.data,y=f.pagination,v=e.responseType,!(Number(g)===200||p===200)){s.next=5;break}return s.abrupt("return",y?{data:i,pagination:y}:i);case 5:if(v!=="blob"){s.next=7;break}return s.abrupt("return",n);case 7:return g===401&&(X.ZP.warn("\u9000\u51FA\u767B\u5F55"),window.location.href="/"),s.abrupt("return",Z().reject(new Error(E)));case 9:case"end":return s.stop()}},o)}));return function(o){return a.apply(this,arguments)}}(),function(a){return Z().reject(new Error(a.message))})}var l=function(a){var o=a,n="GET",u=a.split(" ");if(u.length===2){var f=u,p=(0,S.Z)(f,2);n=p[0],o=p[1]}return function(g,E){var i;return Q(K((i={url:o,method:n},(0,O.Z)(i,n==="GET"?"params":"data",g),(0,O.Z)(i,"paramsSerializer",function(v){return A().stringify(v,{indices:!1})}),i),E))}};I=l;var I;$RefreshReg$(I,"ApiGenerator");var rt=function(a){return API("POST /mock/login/account?name=".concat(a))},w=l("GET /douban/v2/movie/us_box"),N=l("GET /mock/getlunbo"),z=l("GET /api/testget?name=1"),k=l("POST /api/testpost"),q=l("PUT /mock/put"),B=l("DELETE /mock/delete"),W=l("GET /api/getmethods"),at=l("GET /nodejs/getInfo")},60703:function(ut,C,t){"use strict";t.r(C),t.d(C,{default:function(){return E}});var R=t(17462),r=t(27378),U=t(99139),h=t.n(U),tt=t(55661),$=t(9696),et=t(69973),G=t(62593),nt=t(66744),d=t(69185),O=t(93114),S=t(87292),it=t(89214),X=t(84295),V=t(86806),Y=t(50623),L=t(1489),b=t(71445),Z=t(41340),H=t(62622),A=t(13707),F=t(1005),J=t(22043),T=t.n(J),K=t(62286),P=t.n(K),Q=t(65856),l=t(53169),I=t(52314),rt=t(39404),w=t(69635),N,z;function k(v){var j=q();return function(){var x=(0,A.Z)(v),m;if(j){var D=(0,A.Z)(this).constructor;m=h()(x,arguments,D)}else m=x.apply(this,arguments);return(0,H.Z)(this,m)}}function q(){if(typeof Reflect=="undefined"||!h()||h().sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(h()(Boolean,[],function(){})),!0}catch{return!1}}var B=l.ZP.div(N||(N=(0,R.Z)([`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 20px;
`])));o=B;var W=l.ZP.div(z||(z=(0,R.Z)([`
  background: #fff;
  border-radius: 10px;
  padding: 45px 50px;
  box-sizing: content-box;
  min-width: 310px;
  .title {
    color: #02a7f0;
    font-size: 16px;
    text-align: center;
    margin-bottom: 30px;
  }
  .ant-btn {
    margin-top: 30px;
  }
  .ant-input {
    border-radius: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-color: #ebedf2;
    letter-spacing: 1px;
    &:focus,
    &:hover {
      box-shadow: none !important;
      border-color: #ebedf2 !important;
    }
    &:-webkit-autofill {
      box-shadow: 0 0 0px 1000px white inset !important;
    }
  }
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
`])));n=W;var at={},e=function(v){(0,Z.Z)(s,v);var j=k(s);function s(){var x,m;(0,Y.Z)(this,s);for(var D=arguments.length,ot=new Array(D),M=0;M<D;M++)ot[M]=arguments[M];return m=j.call.apply(j,P()(x=[this]).call(x,ot)),(0,F.Z)((0,b.Z)(m),"state",at),(0,F.Z)((0,b.Z)(m),"handleSubmit",function(){var ct=(0,V.Z)(T().mark(function st(ft){var _,lt;return T().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,(0,Q.x4)(ft);case 3:_=c.sent,console.log(_),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),console.log(c.t0);case 10:_&&(X.ZP.success("\u767B\u5F55\u6210\u529F"),lt=m.props.history,lt.push("/dashboard"));case 11:case"end":return c.stop()}},st,null,[[0,7]])}));return function(st){return ct.apply(this,arguments)}}()),m}return(0,L.Z)(s,[{key:"render",value:function(){return r.createElement(B,null,r.createElement(W,null,r.createElement("p",{className:"title"},"levis\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF"),r.createElement(d.Z,{className:"login-form",initialValues:{username:"levis",password:"1234556",checked:!0},onFinish:this.handleSubmit},r.createElement(d.Z.Item,{name:"username",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7"}]},r.createElement(S.Z,{prefix:r.createElement(I.Z,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"levi"})),r.createElement(d.Z.Item,{name:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]},r.createElement(S.Z,{prefix:r.createElement(rt.Z,{style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"levi123"})),r.createElement(d.Z.Item,null,r.createElement(d.Z.Item,{name:"checked",valuePropName:"checked",noStyle:!0},r.createElement(G.Z,null,"Remember me")),r.createElement($.Z,{type:"link",size:"small",className:"login-form-forgot"},"\u5FD8\u8BB0\u5BC6\u7801"),r.createElement($.Z,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u767B\u5F55")))))}}]),s}(r.Component),a=u=(0,w.EN)(e),o,n,u;$RefreshReg$(o,"Wrapper"),$RefreshReg$(n,"FormWrapper"),$RefreshReg$(u,"%default%");var f,p=l.ZP.div(f||(f=(0,R.Z)([`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg') no-repeat;
    background-color:#f0f2f5 
  background-size: 100% 100%;
  background-position: bottom;
`])));i=p;var g=function(){return r.createElement(p,null,r.createElement(a,null))};y=g;var E=g,i,y;$RefreshReg$(i,"Wrapper"),$RefreshReg$(y,"Login")},96553:function(){}}]);
