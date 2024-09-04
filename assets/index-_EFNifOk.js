function f(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function $(e){return f(e)==="object"}function te(e){return Array.isArray(e)&&e.length>0&&e.every(m=>"message"in m)}function X(e,m){return e.length<124?e:m}const re="graphql-transport-ws";var g;(function(e){e[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(g||(g={}));var c;(function(e){e.ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete"})(c||(c={}));function Z(e){if(!$(e))throw new Error(`Message is expected to be an object, but got ${f(e)}`);if(!e.type)throw new Error("Message is missing the 'type' property");if(typeof e.type!="string")throw new Error(`Message is expects the 'type' property to be a string, but got ${f(e.type)}`);switch(e.type){case c.ConnectionInit:case c.ConnectionAck:case c.Ping:case c.Pong:{if(e.payload!=null&&!$(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);break}case c.Subscribe:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${f(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!$(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${f(e.payload)}`);if(typeof e.payload.query!="string")throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${f(e.payload.query)}`);if(e.payload.variables!=null&&!$(e.payload.variables))throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${f(e.payload.variables)}`);if(e.payload.operationName!=null&&f(e.payload.operationName)!=="string")throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${f(e.payload.operationName)}`);if(e.payload.extensions!=null&&!$(e.payload.extensions))throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${f(e.payload.extensions)}`);break}case c.Next:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${f(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!$(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${f(e.payload)}`);break}case c.Error:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${f(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!te(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);break}case c.Complete:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${f(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);break}default:throw new Error(`Invalid message 'type' property "${e.type}"`)}return e}function ne(e,m){return Z(typeof e=="string"?JSON.parse(e,m):e)}function W(e,m){return Z(e),JSON.stringify(e,m)}var A=function(e){return this instanceof A?(this.v=e,this):new A(e)},oe=function(e,m,R){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var M=R.apply(e,m||[]),b,w=[];return b={},E("next"),E("throw"),E("return"),b[Symbol.asyncIterator]=function(){return this},b;function E(u){M[u]&&(b[u]=function(r){return new Promise(function(S,L){w.push([u,r,S,L])>1||I(u,r)})})}function I(u,r){try{q(M[u](r))}catch(S){j(w[0][3],S)}}function q(u){u.value instanceof A?Promise.resolve(u.value.v).then(z,G):j(w[0][2],u)}function z(u){I("next",u)}function G(u){I("throw",u)}function j(u,r){u(r),w.shift(),w.length&&I(w[0][0],w[0][1])}};function ce(e){const{url:m,connectionParams:R,lazy:M=!0,onNonLazyError:b=console.error,lazyCloseTimeout:w=0,keepAlive:E=0,disablePong:I,connectionAckWaitTimeout:q=0,retryAttempts:z=5,retryWait:G=async function(a){let t=1e3;for(let o=0;o<a;o++)t*=2;await new Promise(o=>setTimeout(o,t+Math.floor(Math.random()*2700+300)))},shouldRetry:j=D,isFatalConnectionProblem:u,on:r,webSocketImpl:S,generateID:L=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{const t=Math.random()*16|0;return(a=="x"?t:t&3|8).toString(16)})},jsonMessageReplacer:U,jsonMessageReviver:v}=e;let T;if(S){if(!se(S))throw new Error("Invalid WebSocket implementation provided");T=S}else typeof WebSocket<"u"?T=WebSocket:typeof global<"u"?T=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(T=window.WebSocket||window.MozWebSocket);if(!T)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const N=T,d=(()=>{const n=(()=>{const t={};return{on(o,s){return t[o]=s,()=>{delete t[o]}},emit(o){var s;"id"in o&&((s=t[o.id])===null||s===void 0||s.call(t,o))}}})(),a={connecting:r!=null&&r.connecting?[r.connecting]:[],opened:r!=null&&r.opened?[r.opened]:[],connected:r!=null&&r.connected?[r.connected]:[],ping:r!=null&&r.ping?[r.ping]:[],pong:r!=null&&r.pong?[r.pong]:[],message:r!=null&&r.message?[n.emit,r.message]:[n.emit],closed:r!=null&&r.closed?[r.closed]:[],error:r!=null&&r.error?[r.error]:[]};return{onMessage:n.on,on(t,o){const s=a[t];return s.push(o),()=>{s.splice(s.indexOf(o),1)}},emit(t,...o){for(const s of[...a[t]])s(...o)}}})();function J(n){const a=[d.on("error",t=>{a.forEach(o=>o()),n(t)}),d.on("closed",t=>{a.forEach(o=>o()),n(t)})]}let h,k=0,Q,O=!1,B=0,H=!1;async function C(){clearTimeout(Q);const[n,a]=await(h??(h=new Promise((s,y)=>(async()=>{if(O){if(await G(B),!k)return h=void 0,y({code:1e3,reason:"All Subscriptions Gone"});B++}d.emit("connecting",O);const i=new N(typeof m=="function"?await m():m,re);let x,_;function F(){isFinite(E)&&E>0&&(clearTimeout(_),_=setTimeout(()=>{i.readyState===N.OPEN&&(i.send(W({type:c.Ping})),d.emit("ping",!1,void 0))},E))}J(l=>{h=void 0,clearTimeout(x),clearTimeout(_),y(l),l instanceof Y&&(i.close(4499,"Terminated"),i.onerror=null,i.onclose=null)}),i.onerror=l=>d.emit("error",l),i.onclose=l=>d.emit("closed",l),i.onopen=async()=>{try{d.emit("opened",i);const l=typeof R=="function"?await R():R;if(i.readyState!==N.OPEN)return;i.send(W(l?{type:c.ConnectionInit,payload:l}:{type:c.ConnectionInit},U)),isFinite(q)&&q>0&&(x=setTimeout(()=>{i.close(g.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},q)),F()}catch(l){d.emit("error",l),i.close(g.InternalClientError,X(l instanceof Error?l.message:new Error(l).message,"Internal client error"))}};let P=!1;i.onmessage=({data:l})=>{try{const p=ne(l,v);if(d.emit("message",p),p.type==="ping"||p.type==="pong"){d.emit(p.type,!0,p.payload),p.type==="pong"?F():I||(i.send(W(p.payload?{type:c.Pong,payload:p.payload}:{type:c.Pong})),d.emit("pong",!1,p.payload));return}if(P)return;if(p.type!==c.ConnectionAck)throw new Error(`First message cannot be of type ${p.type}`);clearTimeout(x),P=!0,d.emit("connected",i,p.payload,O),O=!1,B=0,s([i,new Promise((ae,ee)=>J(ee))])}catch(p){i.onmessage=null,d.emit("error",p),i.close(g.BadResponse,X(p instanceof Error?p.message:new Error(p).message,"Bad response"))}}})())));n.readyState===N.CLOSING&&await a;let t=()=>{};const o=new Promise(s=>t=s);return[n,t,Promise.race([o.then(()=>{if(!k){const s=()=>n.close(1e3,"Normal Closure");isFinite(w)&&w>0?Q=setTimeout(()=>{n.readyState===N.OPEN&&s()},w):s()}}),a])]}function K(n){if(D(n)&&(ie(n.code)||[g.InternalServerError,g.InternalClientError,g.BadRequest,g.BadResponse,g.Unauthorized,g.SubprotocolNotAcceptable,g.SubscriberAlreadyExists,g.TooManyInitialisationRequests].includes(n.code)))throw n;if(H)return!1;if(D(n)&&n.code===1e3)return k>0;if(!z||B>=z||!j(n)||u!=null&&u(n))throw n;return O=!0}M||(async()=>{for(k++;;)try{const[,,n]=await C();await n}catch(n){try{if(!K(n))return}catch(a){return b==null?void 0:b(a)}}})();function V(n,a){const t=L(n);let o=!1,s=!1,y=()=>{k--,o=!0};return(async()=>{for(k++;;)try{const[i,x,_]=await C();if(o)return x();const F=d.onMessage(t,P=>{switch(P.type){case c.Next:{a.next(P.payload);return}case c.Error:{s=!0,o=!0,a.error(P.payload),y();return}case c.Complete:{o=!0,y();return}}});i.send(W({id:t,type:c.Subscribe,payload:n},U)),y=()=>{!o&&i.readyState===N.OPEN&&i.send(W({id:t,type:c.Complete},U)),k--,o=!0,x()},await _.finally(F);return}catch(i){if(!K(i))return}})().then(()=>{s||a.complete()}).catch(i=>{a.error(i)}),()=>{o||y()}}return{on:d.on,subscribe:V,iterate(n){const a=[],t={done:!1,error:null,resolve:()=>{}},o=V(n,{next(y){a.push(y),t.resolve()},error(y){t.done=!0,t.error=y,t.resolve()},complete(){t.done=!0,t.resolve()}}),s=function(){return oe(this,arguments,function*(){for(;;){for(a.length||(yield A(new Promise(x=>t.resolve=x)));a.length;)yield yield A(a.shift());if(t.error)throw t.error;if(t.done)return yield A(void 0)}})}();return s.throw=async y=>(t.done||(t.done=!0,t.error=y,t.resolve()),{done:!0,value:void 0}),s.return=async()=>(o(),{done:!0,value:void 0}),s},async dispose(){if(H=!0,h){const[n]=await h;n.close(1e3,"Normal Closure")}},terminate(){h&&d.emit("closed",new Y)}}}class Y extends Error{constructor(){super(...arguments),this.name="TerminatedCloseEvent",this.message="4499: Terminated",this.code=4499,this.reason="Terminated",this.wasClean=!1}}function D(e){return $(e)&&"code"in e&&"reason"in e}function ie(e){return[1e3,1001,1006,1005,1012,1013,1014].includes(e)?!1:e>=1e3&&e<=1999}function se(e){return typeof e=="function"&&"constructor"in e&&"CLOSED"in e&&"CLOSING"in e&&"CONNECTING"in e&&"OPEN"in e}export{g as CloseCode,re as GRAPHQL_TRANSPORT_WS_PROTOCOL,c as MessageType,Y as TerminatedCloseEvent,ce as createClient,ne as parseMessage,W as stringifyMessage,Z as validateMessage};
