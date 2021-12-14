(self.webpackChunk=self.webpackChunk||[]).push([[974],{77439:function(rt,j,t){"use strict";t.d(j,{It:function(){return V},hX:function(){return Y},x4:function(){return K},RX:function(){return J},YC:function(){return F},Ho:function(){return I},Mh:function(){return H}});var E=t(49719),r=t.n(E),z=t(42475),h=t.n(z),w=t(25551),C=t.n(w),k=t(73507),O=t.n(k),q=t(86657),g=t.n(q),S=t(1005),G=t(30283),at=t(89214),B=t(84295),D=t(86806),M=t(22043),L=t.n(M),b=t(75534),Z=t.n(b),W=t(8139),R=t.n(W),A=t(14206),U=t.n(A);function x(n,a){var o=r()(n);if(h()){var e=h()(n);a&&(e=C()(e).call(e,function(m){return O()(n,m).enumerable})),o.push.apply(o,e)}return o}function X(n){for(var a=1;a<arguments.length;a++){var o=arguments[a]!=null?arguments[a]:{};a%2?x(Object(o),!0).forEach(function(e){(0,S.Z)(n,e,o[e])}):g()?Object.defineProperties(n,g()(o)):x(Object(o)).forEach(function(e){Object.defineProperty(n,e,O()(o,e))})}return n}var T=U().create({timeout:6e4,responseType:"text",withCredentials:!0,headers:{Pragma:"no-cache",Accept:"application/json","Cache-Control":"no-cache, no-store, must-revalidate"},baseURL:"/"});T.interceptors.request.use(function(n){return n},function(n){return Z().reject(n)}),T.interceptors.response.use(function(n){return n},function(n){return Z().reject(n)});function $(n){return T.request(n).then(function(){var a=(0,D.Z)(L().mark(function o(e){var m,d,y,i,p,s,c,l;return L().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(m=e.data,d=m===void 0?{}:m,y=e.status,i=d.code,p=d.resultMessage,s=d.data,c=d.pagination,l=n.responseType,!(Number(i)===200||y===200)){f.next=5;break}return f.abrupt("return",c?{data:s,pagination:c}:s);case 5:if(l!=="blob"){f.next=7;break}return f.abrupt("return",e);case 7:return i===401&&(B.ZP.warn("\u9000\u51FA\u767B\u5F55"),window.location.href="/"),f.abrupt("return",Z().reject(new Error(p)));case 9:case"end":return f.stop()}},o)}));return function(o){return a.apply(this,arguments)}}(),function(a){return Z().reject(new Error(a.message))})}var u=function(a){var o=a,e="GET",m=a.split(" ");if(m.length===2){var d=m,y=(0,G.Z)(d,2);e=y[0],o=y[1]}return function(i,p){var s;return $(X((s={url:o,method:e},(0,S.Z)(s,e==="GET"?"params":"data",i),(0,S.Z)(s,"paramsSerializer",function(l){return R().stringify(l,{indices:!1})}),s),p))}},_=function(a){return API("POST /mock/login/account?name=".concat(a))},V=u("GET /douban/v2/movie/us_box"),Y=u("GET /mock/getlunbo"),F=u("GET /api/testget?name=1"),I=u("POST /api/testpost"),H=u("PUT /mock/put"),J=u("DELETE /mock/delete"),K=u("GET /api/getmethods"),tt=u("GET /nodejs/getInfo")},35442:function(rt,j,t){"use strict";t.r(j),t.d(j,{default:function(){return y}});var E=t(17462),r=t(27378),z=t(99139),h=t.n(z),w=t(55661),C=t(9696),k=t(69973),O=t(62593),q=t(66744),g=t(69185),S=t(93114),G=t(87292),at=t(89214),B=t(84295),D=t(86806),M=t(50623),L=t(1489),b=t(71445),Z=t(41340),W=t(62622),R=t(13707),A=t(1005),U=t(22043),x=t.n(U),X=t(62286),T=t.n(X),$=t(77439),u=t(53169),_=t(52314),V=t(39404),Y=t(69635),F,I;function H(i){var p=J();return function(){var c=(0,R.Z)(i),l;if(p){var P=(0,R.Z)(this).constructor;l=h()(c,arguments,P)}else l=c.apply(this,arguments);return(0,W.Z)(this,l)}}function J(){if(typeof Reflect=="undefined"||!h()||h().sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(h()(Boolean,[],function(){})),!0}catch{return!1}}var K=u.ZP.div(F||(F=(0,E.Z)([`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 20px;
`]))),tt=u.ZP.div(I||(I=(0,E.Z)([`
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
`]))),n={},a=function(i){(0,Z.Z)(s,i);var p=H(s);function s(){var c,l;(0,M.Z)(this,s);for(var P=arguments.length,f=new Array(P),N=0;N<P;N++)f[N]=arguments[N];return l=p.call.apply(p,T()(c=[this]).call(c,f)),(0,A.Z)((0,b.Z)(l),"state",n),(0,A.Z)((0,b.Z)(l),"handleSubmit",function(){var ot=(0,D.Z)(x().mark(function nt(st){var Q,et;return x().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.prev=0,v.next=3,(0,$.x4)(st);case 3:Q=v.sent,console.log(Q),v.next=10;break;case 7:v.prev=7,v.t0=v.catch(0),console.log(v.t0);case 10:Q&&(B.ZP.success("\u767B\u5F55\u6210\u529F"),et=l.props.history,et.push("/dashboard"));case 11:case"end":return v.stop()}},nt,null,[[0,7]])}));return function(nt){return ot.apply(this,arguments)}}()),l}return(0,L.Z)(s,[{key:"render",value:function(){return r.createElement(K,null,r.createElement(tt,null,r.createElement("p",{className:"title"},"levis\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF"),r.createElement(g.Z,{className:"login-form",initialValues:{username:"levis",password:"1234556",checked:!0},onFinish:this.handleSubmit},r.createElement(g.Z.Item,{name:"username",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7"}]},r.createElement(G.Z,{prefix:r.createElement(_.Z,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"levi"})),r.createElement(g.Z.Item,{name:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]},r.createElement(G.Z,{prefix:r.createElement(V.Z,{style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"levi123"})),r.createElement(g.Z.Item,null,r.createElement(g.Z.Item,{name:"checked",valuePropName:"checked",noStyle:!0},r.createElement(O.Z,null,"Remember me")),r.createElement(C.Z,{type:"link",size:"small",className:"login-form-forgot"},"\u5FD8\u8BB0\u5BC6\u7801"),r.createElement(C.Z,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u767B\u5F55")))))}}]),s}(r.Component),o=(0,Y.EN)(a),e,m=u.ZP.div(e||(e=(0,E.Z)([`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg') no-repeat;
    background-color:#f0f2f5 
  background-size: 100% 100%;
  background-position: bottom;
`]))),d=function(){return r.createElement(m,null,r.createElement(o,null))},y=d},96553:function(){}}]);
