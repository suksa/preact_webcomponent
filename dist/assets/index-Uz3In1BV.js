(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const _ of r)if(_.type==="childList")for(const a of _.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const _={};return r.integrity&&(_.integrity=r.integrity),r.referrerPolicy&&(_.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?_.credentials="include":r.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function o(r){if(r.ep)return;r.ep=!0;const _=n(r);fetch(r.href,_)}})();var N,f,de,$,ee,he,q,S={},be=[],Ee=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,J=Array.isArray;function w(e,t){for(var n in t)e[n]=t[n];return e}function me(e){var t=e.parentNode;t&&t.removeChild(e)}function B(e,t,n){var o,r,_,a={};for(_ in t)_=="key"?o=t[_]:_=="ref"?r=t[_]:a[_]=t[_];if(arguments.length>2&&(a.children=arguments.length>3?N.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)a[_]===void 0&&(a[_]=e.defaultProps[_]);return H(e,a,o,r,null)}function H(e,t,n,o,r){var _={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++de,__i:-1,__u:0};return r==null&&f.vnode!=null&&f.vnode(_),_}function T(e){return e.children}function j(e,t){this.props=e,this.context=t}function P(e,t){if(t==null)return e.__?P(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?P(e):null}function ve(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ve(e)}}function te(e){(!e.__d&&(e.__d=!0)&&$.push(e)&&!F.__r++||ee!==f.debounceRendering)&&((ee=f.debounceRendering)||he)(F)}function F(){var e,t,n,o,r,_,a,l,c;for($.sort(q);e=$.shift();)e.__d&&(t=$.length,o=void 0,_=(r=(n=e).__v).__e,l=[],c=[],(a=n.__P)&&((o=w({},r)).__v=r.__v+1,f.vnode&&f.vnode(o),Q(a,o,r,n.__n,a.ownerSVGElement!==void 0,32&r.__u?[_]:null,l,_??P(r),!!(32&r.__u),c),o.__.__k[o.__i]=o,ke(l,o,c),o.__e!=_&&ve(o)),$.length>t&&$.sort(q));F.__r=0}function ge(e,t,n,o,r,_,a,l,c,s,u){var i,d,p,v,x,g=o&&o.__k||be,h=t.length;for(n.__d=c,He(n,t,g),c=n.__d,i=0;i<h;i++)(p=n.__k[i])!=null&&typeof p!="boolean"&&typeof p!="function"&&(d=p.__i===-1?S:g[p.__i]||S,p.__i=i,Q(e,p,d,r,_,a,l,c,s,u),v=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&X(d.ref,null,p),u.push(p.ref,p.__c||v,p)),x==null&&v!=null&&(x=v),65536&p.__u||d.__k===p.__k?c=ye(p,c,e):typeof p.type=="function"&&p.__d!==void 0?c=p.__d:v&&(c=v.nextSibling),p.__d=void 0,p.__u&=-196609);n.__d=c,n.__e=x}function He(e,t,n){var o,r,_,a,l,c=t.length,s=n.length,u=s,i=0;for(e.__k=[],o=0;o<c;o++)(r=e.__k[o]=(r=t[o])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?H(null,r,null,null,r):J(r)?H(T,{children:r},null,null,null):r.__b>0?H(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=e,r.__b=e.__b+1,l=Se(r,n,a=o+i,u),r.__i=l,_=null,l!==-1&&(u--,(_=n[l])&&(_.__u|=131072)),_==null||_.__v===null?(l==-1&&i--,typeof r.type!="function"&&(r.__u|=65536)):l!==a&&(l===a+1?i++:l>a?u>c-a?i+=l-a:i--:i=l<a&&l==a-1?l-a:0,l!==o+i&&(r.__u|=65536))):(_=n[o])&&_.key==null&&_.__e&&(_.__e==e.__d&&(e.__d=P(_)),R(_,_,!1),n[o]=null,u--);if(u)for(o=0;o<s;o++)(_=n[o])!=null&&!(131072&_.__u)&&(_.__e==e.__d&&(e.__d=P(_)),R(_,_))}function ye(e,t,n){var o,r;if(typeof e.type=="function"){for(o=e.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=e,t=ye(o[r],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function Se(e,t,n,o){var r=e.key,_=e.type,a=n-1,l=n+1,c=t[n];if(c===null||c&&r==c.key&&_===c.type)return n;if(o>(c!=null&&!(131072&c.__u)?1:0))for(;a>=0||l<t.length;){if(a>=0){if((c=t[a])&&!(131072&c.__u)&&r==c.key&&_===c.type)return a;a--}if(l<t.length){if((c=t[l])&&!(131072&c.__u)&&r==c.key&&_===c.type)return l;l++}}return-1}function ne(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ee.test(t)?n:n+"px"}function O(e,t,n,o,r){var _;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||ne(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||ne(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")_=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?o?n.u=o.u:(n.u=Date.now(),e.addEventListener(t,_?re:oe,_)):e.removeEventListener(t,_?re:oe,_);else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function oe(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(f.event?f.event(e):e)}function re(e){return this.l[e.type+!0](f.event?f.event(e):e)}function Q(e,t,n,o,r,_,a,l,c,s){var u,i,d,p,v,x,g,h,y,C,L,E,Z,D,W,k=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),_=[l=t.__e=n.__e]),(u=f.__b)&&u(t);e:if(typeof k=="function")try{if(h=t.props,y=(u=k.contextType)&&o[u.__c],C=u?y?y.props.value:u.__:o,n.__c?g=(i=t.__c=n.__c).__=i.__E:("prototype"in k&&k.prototype.render?t.__c=i=new k(h,C):(t.__c=i=new j(h,C),i.constructor=k,i.render=Te),y&&y.sub(i),i.props=h,i.state||(i.state={}),i.context=C,i.__n=o,d=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),k.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=w({},i.__s)),w(i.__s,k.getDerivedStateFromProps(h,i.__s))),p=i.props,v=i.state,i.__v=t,d)k.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(k.getDerivedStateFromProps==null&&h!==p&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(h,C),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(h,i.__s,C)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(i.props=h,i.state=i.__s,i.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(A){A&&(A.__=t)}),L=0;L<i._sb.length;L++)i.__h.push(i._sb[L]);i._sb=[],i.__h.length&&a.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(h,i.__s,C),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(p,v,x)})}if(i.context=C,i.props=h,i.__P=e,i.__e=!1,E=f.__r,Z=0,"prototype"in k&&k.prototype.render){for(i.state=i.__s,i.__d=!1,E&&E(t),u=i.render(i.props,i.state,i.context),D=0;D<i._sb.length;D++)i.__h.push(i._sb[D]);i._sb=[]}else do i.__d=!1,E&&E(t),u=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++Z<25);i.state=i.__s,i.getChildContext!=null&&(o=w(w({},o),i.getChildContext())),d||i.getSnapshotBeforeUpdate==null||(x=i.getSnapshotBeforeUpdate(p,v)),ge(e,J(W=u!=null&&u.type===T&&u.key==null?u.props.children:u)?W:[W],t,n,o,r,_,a,l,c,s),i.base=t.__e,t.__u&=-161,i.__h.length&&a.push(i),g&&(i.__E=i.__=null)}catch(A){t.__v=null,c||_!=null?(t.__e=l,t.__u|=c?160:32,_[_.indexOf(l)]=null):(t.__e=n.__e,t.__k=n.__k),f.__e(A,t,n)}else _==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Ne(n.__e,t,n,o,r,_,a,c,s);(u=f.diffed)&&u(t)}function ke(e,t,n){t.__d=void 0;for(var o=0;o<n.length;o++)X(n[o],n[++o],n[++o]);f.__c&&f.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(_){_.call(r)})}catch(_){f.__e(_,r.__v)}})}function Ne(e,t,n,o,r,_,a,l,c){var s,u,i,d,p,v,x,g=n.props,h=t.props,y=t.type;if(y==="svg"&&(r=!0),_!=null){for(s=0;s<_.length;s++)if((p=_[s])&&"setAttribute"in p==!!y&&(y?p.localName===y:p.nodeType===3)){e=p,_[s]=null;break}}if(e==null){if(y===null)return document.createTextNode(h);e=r?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),_=null,l=!1}if(y===null)g===h||l&&e.data===h||(e.data=h);else{if(_=_&&N.call(e.childNodes),g=n.props||S,!l&&_!=null)for(g={},s=0;s<e.attributes.length;s++)g[(p=e.attributes[s]).name]=p.value;for(s in g)p=g[s],s=="children"||(s=="dangerouslySetInnerHTML"?i=p:s==="key"||s in h||O(e,s,null,p,r));for(s in h)p=h[s],s=="children"?d=p:s=="dangerouslySetInnerHTML"?u=p:s=="value"?v=p:s=="checked"?x=p:s==="key"||l&&typeof p!="function"||g[s]===p||O(e,s,p,g[s],r);if(u)l||i&&(u.__html===i.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(i&&(e.innerHTML=""),ge(e,J(d)?d:[d],t,n,o,r&&y!=="foreignObject",_,a,_?_[0]:n.__k&&P(n,0),l,c),_!=null)for(s=_.length;s--;)_[s]!=null&&me(_[s]);l||(s="value",v!==void 0&&(v!==e[s]||y==="progress"&&!v||y==="option"&&v!==g[s])&&O(e,s,v,g[s],!1),s="checked",x!==void 0&&x!==e[s]&&O(e,s,x,g[s],!1))}return e}function X(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){f.__e(o,n)}}function R(e,t,n){var o,r;if(f.unmount&&f.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||X(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(_){f.__e(_,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&R(o[r],t,n||typeof e.type!="function");n||e.__e==null||me(e.__e),e.__=e.__e=e.__d=void 0}function Te(e,t,n){return this.constructor(e,n)}function z(e,t,n){var o,r,_,a;f.__&&f.__(e,t),r=(o=typeof n=="function")?null:n&&n.__k||t.__k,_=[],a=[],Q(t,e=(!o&&n||t).__k=B(T,null,[e]),r||S,S,t.ownerSVGElement!==void 0,!o&&n?[n]:r?null:t.firstChild?N.call(t.childNodes):null,_,!o&&n?n:r?r.__e:t.firstChild,o,a),ke(_,e,a)}function xe(e,t){z(e,t,xe)}function we(e,t,n){var o,r,_,a,l=w({},e.props);for(_ in e.type&&e.type.defaultProps&&(a=e.type.defaultProps),t)_=="key"?o=t[_]:_=="ref"?r=t[_]:l[_]=t[_]===void 0&&a!==void 0?a[_]:t[_];return arguments.length>2&&(l.children=arguments.length>3?N.call(arguments,2):n),H(e.type,l,o||e.key,r||e.ref,null)}N=be.slice,f={__e:function(e,t,n,o){for(var r,_,a;t=t.__;)if((r=t.__c)&&!r.__)try{if((_=r.constructor)&&_.getDerivedStateFromError!=null&&(r.setState(_.getDerivedStateFromError(e)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,o||{}),a=r.__d),a)return r.__E=r}catch(l){e=l}throw e}},de=0,j.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof e=="function"&&(e=e(w({},n),this.props)),e&&w(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),te(this))},j.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),te(this))},j.prototype.render=T,$=[],he=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,q=function(e,t){return e.__v.__b-t.__v.__b},F.__r=0;function Y(){return(Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var Le=["context","children"];function De(e){this.getChildContext=function(){return e.context};var t=e.children,n=function(o,r){if(o==null)return{};var _,a,l={},c=Object.keys(o);for(a=0;a<c.length;a++)r.indexOf(_=c[a])>=0||(l[_]=o[_]);return l}(e,Le);return we(t,n)}function Ae(){var e=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(e),this._vdom=B(De,Y({},this._props,{context:e.detail.context}),function t(n,o){if(n.nodeType===3)return n.data;if(n.nodeType!==1)return null;var r=[],_={},a=0,l=n.attributes,c=n.childNodes;for(a=l.length;a--;)l[a].name!=="slot"&&(_[l[a].name]=l[a].value,_[Ce(l[a].name)]=l[a].value);for(a=c.length;a--;){var s=t(c[a],null),u=c[a].slot;u?_[u]=B(_e,{name:u},s):r[a]=s}var i=o?B(_e,null,r):r;return B(o||n.nodeName.toLowerCase(),_,i)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?xe:z)(this._vdom,this._root)}function Ce(e){return e.replace(/-(\w)/g,function(t,n){return n?n.toUpperCase():""})}function Oe(e,t,n){if(this._vdom){var o={};o[e]=n=n??void 0,o[Ce(e)]=n,this._vdom=we(this._vdom,o),z(this._vdom,this._root)}}function je(){z(this._vdom=null,this._root)}function _e(e,t){var n=this;return B("slot",Y({},e,{ref:function(o){o?(n.ref=o,n._listener||(n._listener=function(r){r.stopPropagation(),r.detail.context=t},o.addEventListener("_preact",n._listener))):n.ref.removeEventListener("_preact",n._listener)}}))}function Ue(e,t,n,o){function r(){var _=Reflect.construct(HTMLElement,[],r);return _._vdomComponent=e,_._root=o&&o.shadow?_.attachShadow({mode:o.mode||"open"}):_,_}return(r.prototype=Object.create(HTMLElement.prototype)).constructor=r,r.prototype.connectedCallback=Ae,r.prototype.attributeChangedCallback=Oe,r.prototype.disconnectedCallback=je,n=n||e.observedAttributes||Object.keys(e.propTypes||{}),r.observedAttributes=n,n.forEach(function(_){Object.defineProperty(r.prototype,_,{get:function(){return this._vdom.props[_]},set:function(a){this._vdom?this.attributeChangedCallback(_,null,a):(this._props||(this._props={}),this._props[_]=a,this.connectedCallback());var l=typeof a;a!=null&&l!=="string"&&l!=="boolean"&&l!=="number"||this.setAttribute(_,a)}})}),customElements.define(t||e.tagName||e.displayName||e.name,r)}var I,m,V,ie,G=0,$e=[],U=[],ae=f.__b,le=f.__r,ce=f.diffed,se=f.__c,ue=f.unmount;function Be(e,t){f.__h&&f.__h(m,e,G||t),G=0;var n=m.__H||(m.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:U}),n.__[e]}function pe(e){return G=1,Me(Pe,e)}function Me(e,t,n){var o=Be(I++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):Pe(void 0,t),function(l){var c=o.__N?o.__N[0]:o.__[0],s=o.t(c,l);c!==s&&(o.__N=[s,o.__[1]],o.__c.setState({}))}],o.__c=m,!m.u)){var r=function(l,c,s){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(d){return d.__c});if(u.every(function(d){return!d.__N}))return!_||_.call(this,l,c,s);var i=!1;return u.forEach(function(d){if(d.__N){var p=d.__[0];d.__=d.__N,d.__N=void 0,p!==d.__[0]&&(i=!0)}}),!(!i&&o.__c.props===l)&&(!_||_.call(this,l,c,s))};m.u=!0;var _=m.shouldComponentUpdate,a=m.componentWillUpdate;m.componentWillUpdate=function(l,c,s){if(this.__e){var u=_;_=void 0,r(l,c,s),_=u}a&&a.call(this,l,c,s)},m.shouldComponentUpdate=r}return o.__N||o.__}function Fe(e,t){var n=Be(I++,3);!f.__s&&We(n.__H,t)&&(n.__=e,n.i=t,m.__H.__h.push(n))}function Ie(){for(var e;e=$e.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(M),e.__H.__h.forEach(K),e.__H.__h=[]}catch(t){e.__H.__h=[],f.__e(t,e.__v)}}f.__b=function(e){m=null,ae&&ae(e)},f.__r=function(e){le&&le(e),I=0;var t=(m=e.__c).__H;t&&(V===m?(t.__h=[],m.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=U,n.__N=n.i=void 0})):(t.__h.forEach(M),t.__h.forEach(K),t.__h=[],I=0)),V=m},f.diffed=function(e){ce&&ce(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&($e.push(t)!==1&&ie===f.requestAnimationFrame||((ie=f.requestAnimationFrame)||ze)(Ie)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==U&&(n.__=n.__V),n.i=void 0,n.__V=U})),V=m=null},f.__c=function(e,t){t.some(function(n){try{n.__h.forEach(M),n.__h=n.__h.filter(function(o){return!o.__||K(o)})}catch(o){t.some(function(r){r.__h&&(r.__h=[])}),t=[],f.__e(o,n.__v)}}),se&&se(e,t)},f.unmount=function(e){ue&&ue(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{M(o)}catch(r){t=r}}),n.__H=void 0,t&&f.__e(t,n.__v))};var fe=typeof requestAnimationFrame=="function";function ze(e){var t,n=function(){clearTimeout(o),fe&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);fe&&(t=requestAnimationFrame(n))}function M(e){var t=m,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),m=t}function K(e){var t=m;e.__c=e.__(),m=t}function We(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function Pe(e,t){return typeof t=="function"?t(e):t}const Ve='*,*:before,*:after{-webkit-box-sizing:border-box;box-sizing:border-box}.app{--baseBackground: #fff;--tabBackgorund: #eeeff1;--tabLineColor: #e6e6e6;--activeColor: #222;--tabBorderColor: #d0d1d2;--productColor: #222;--pageButtonBorder: #d0d1d2;--pageButtonBackground: #f6f6f9;--pageButtonImg: url(//m1.nateimg.co.kr/n3main/sets2/set_ic2.png);background:var(--baseBackground);margin:0;padding:0 0 20px;font-family:맑은 고딕,Malgun Gothic,돋움,Dotum,굴림,Gulim,Helvetica,sans-serif}@media (prefers-color-scheme: dark){.app{--baseBackground: #262626;--tabBackgorund: #1f1f1f;--tabLineColor: #393939;--activeColor: #d7d7d7;--tabBorderColor: #393939;--productColor: #d7d7d7;--pageButtonBorder: #393939;--pageButtonBackground: #1f1f1f;--pageButtonImg: url(//m1.nateimg.co.kr/n3main/sets2/set_ic2_dark.png)}}.tab{display:-webkit-box;display:-ms-flexbox;display:flex;border-top:1px solid var(--tabBorderColor)}.tab button{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0;border:0;background:var(--tabBackgorund);border-bottom:1px solid var(--tabBorderColor);height:40px;line-height:40px;-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0;font-size:14px;color:#777;font-weight:500;cursor:pointer}.tab button+button:before{content:"";position:absolute;top:13px;left:0;width:1px;height:12px;background:var(--tabLineColor)}.tab button.active{background:var(--baseBackground);color:var(--activeColor);border-bottom-color:transparent}.tab button.active:after{content:"";position:absolute;top:0;left:0;right:0;bottom:-1px;border-left:1px solid var(--tabBorderColor);border-right:1px solid var(--tabBorderColor)}.tab button.active:before,.tab button.active+button:before{content:none}.tab button.active:first-child:after{border-left:none}.tab button.active:last-child:after{border-right:none}.tab_list{padding:10px 8px}.tab_list .section{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.tab_list .section .item{width:33.33%;padding:0 2px;text-align:center;margin:0 0 15px}.tab_list .section .item a{display:block;text-decoration:none}.tab_list .section .item .thumb{font-size:0}.tab_list .section .item .thumb img{width:100%;height:auto}.tab_list .section .item .txt{margin:8px 0 0;font-size:14px;letter-spacing:-1px;line-height:16px;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;word-break:break-all;-o-text-overflow:ellipsis;text-overflow:ellipsis;-webkit-line-clamp:2;color:var(--productColor)}.pages{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.pages .btn{position:relative;display:inline-block;width:42px;height:28px;overflow:hidden;vertical-align:middle;border:1px solid var(--pageButtonBorder);font-size:0;-webkit-appearance:none;background-color:var(--pageButtonBackground);cursor:pointer}.pages .btn em{display:block;width:8px;height:14px;margin:0 auto;text-align:center;text-indent:-9999px;overflow:hidden;background:var(--pageButtonImg) 0 -288px no-repeat;background-size:64px auto}.pages .btn.prev em{background-position:0 -288px}.pages .btn.next em{background-position:-8px -288px}.pages .page{margin:0 30px;color:#999}.pages .page b{color:var(--activeColor);font-weight:400}';var qe=0;function b(e,t,n,o,r,_){var a,l,c={};for(l in t)l=="ref"?a=t[l]:c[l]=t[l];var s={type:e,props:c,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--qe,__i:-1,__u:0,__source:r,__self:_};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)c[l]===void 0&&(c[l]=a[l]);return f.vnode&&f.vnode(s),s}const Re=({data:e,itemLength:t,page:n,setPage:o})=>{const r=()=>{const c={};return e.forEach(function(u,i){c[u.mallname]={clicklink:u.clicklink,page:(i+1)/t}}),Object.keys(c).map((u,i)=>({name:u,clicklink:u==="쇼핑 트렌드"?"https://m.shopping.nate.com":c[u].clicklink,page:i===0?1:c[u].page}))},_=c=>c===e[(n-1)*t].mallname,a=c=>{_(c.name)?window.open(c.clicklink):o(c.page)},l=r();return b("div",{class:"tab",children:l.map(c=>b("button",{type:"button",class:_(c.name)?"active":"",onClick:()=>a(c),children:c.name}))})},Ge=({data:e,index:t,globalsvcpage:n})=>{const o=()=>{if(!n)return;const r="mwsb01",a=`${n}0${t+1}`,l=new Date().getTime(),c=new Image;c.src=`https://statclick.nate.com/stat/statclick.tiff?cp_url=[click_ndr.nate.com/??ndrpageid=${r}&ndrregionid=${a}&rgnparam1=&rgnparam2=&t=${l}]`};return b("div",{class:"item",children:b("a",{href:e.clicklink,target:"_blank",onClick:o,children:[b("div",{class:"thumb",children:b("img",{src:e.img,alt:"",width:"224",height:"272"})}),b("div",{class:"txt",dangerouslySetInnerHTML:{__html:e.text1}})]})})};function Ke({globalsvcpage:e,reqapidomain:t}){const[n,o]=pe(null),[r,_]=pe(1),a=9,l=n?n.length/a:1,c=t===void 0?"https://shop.nate.com":t,s=async()=>{const d=await(await fetch(`${c}/shopbox/js/data_shopbox_mobile.json`)).json();o(d)},u=i=>{i===0?_(l):i>l?_(1):_(i)};return Fe(()=>{e||console.error(`[shopBox] globalsvcpage 값을 넣어주세요.
ex) <shop-box globalSvcPage="news"></shop-box>`),s()},[]),!n||n.length===0?null:b(T,{children:[b("style",{children:Ve}),b("div",{class:"app",children:[b(Re,{data:n,itemLength:a,page:r,setPage:_}),b("div",{class:"tab_list",children:b("div",{class:"section",children:n.slice((r-1)*a,r*a).map((i,d)=>b(Ge,{data:i,index:d,globalsvcpage:e}))})}),b("div",{class:"pages",children:[b("button",{type:"button",class:"btn prev",onClick:()=>u(r-1),children:b("em",{children:"이전"})}),b("span",{class:"page",children:[b("b",{children:r})," / ",l]}),b("button",{type:"button",class:"btn next",onClick:()=>u(r+1),children:b("em",{children:"다음"})})]})]})]})}Ue(Ke,"shop-box",["globalSvcPage"],{shadow:!0});