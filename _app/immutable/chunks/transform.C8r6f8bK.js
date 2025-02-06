import{t as Cn,a as En}from"./index.B6lFNMyu.js";import{E as $n}from"./scheduler.BWX28_B0.js";function Wi(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Ji(t,n){Cn(t,1,1,()=>{n.delete(t.key)})}function Qi(t,n,e,r,i,o,s,a,u,f,c,l){let h=t.length,p=o.length,d=h;const _={};for(;d--;)_[t[d].key]=d;const w=[],b=new Map,N=new Map,v=[];for(d=p;d--;){const g=l(i,o,d),y=e(g);let k=s.get(y);k?v.push(()=>k.p(g,n)):(k=f(y,g),k.c()),b.set(y,w[d]=k),y in _&&N.set(y,Math.abs(d-_[y]))}const I=new Set,$=new Set;function F(g){En(g,1),g.m(a,c),s.set(g.key,g),c=g.first,p--}for(;h&&p;){const g=w[p-1],y=t[h-1],k=g.key,j=y.key;g===y?(c=g.first,h--,p--):b.has(j)?!s.has(k)||I.has(k)?F(g):$.has(j)?h--:N.get(k)>N.get(j)?($.add(k),F(g)):(I.add(j),h--):(u(y,s),h--)}for(;h--;){const g=t[h];b.has(g.key)||u(g,s)}for(;p;)F(w[p-1]);return $n(v),w}var kn={value:()=>{}};function Jt(){for(var t=0,n=arguments.length,e={},r;t<n;++t){if(!(r=arguments[t]+"")||r in e||/[\s.]/.test(r))throw new Error("illegal type: "+r);e[r]=[]}return new rt(e)}function rt(t){this._=t}function Sn(t,n){return t.trim().split(/^|\s+/).map(function(e){var r="",i=e.indexOf(".");if(i>=0&&(r=e.slice(i+1),e=e.slice(0,i)),e&&!n.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:r}})}rt.prototype=Jt.prototype={constructor:rt,on:function(t,n){var e=this._,r=Sn(t+"",e),i,o=-1,s=r.length;if(arguments.length<2){for(;++o<s;)if((i=(t=r[o]).type)&&(i=Tn(e[i],t.name)))return i;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++o<s;)if(i=(t=r[o]).type)e[i]=It(e[i],t.name,n);else if(n==null)for(i in e)e[i]=It(e[i],t.name,null);return this},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new rt(t)},call:function(t,n){if((i=arguments.length-2)>0)for(var e=new Array(i),r=0,i,o;r<i;++r)e[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],r=0,i=o.length;r<i;++r)o[r].value.apply(n,e)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};function Tn(t,n){for(var e=0,r=t.length,i;e<r;++e)if((i=t[e]).name===n)return i.value}function It(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=kn,t=t.slice(0,r).concat(t.slice(r+1));break}return e!=null&&t.push({name:n,value:e}),t}var xt="http://www.w3.org/1999/xhtml";const Ft={svg:"http://www.w3.org/2000/svg",xhtml:xt,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ht(t){var n=t+="",e=n.indexOf(":");return e>=0&&(n=t.slice(0,e))!=="xmlns"&&(t=t.slice(e+1)),Ft.hasOwnProperty(n)?{space:Ft[n],local:t}:t}function Rn(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===xt&&n.documentElement.namespaceURI===xt?n.createElement(t):n.createElementNS(e,t)}}function Mn(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Qt(t){var n=ht(t);return(n.local?Mn:Rn)(n)}function In(){}function $t(t){return t==null?In:function(){return this.querySelector(t)}}function Fn(t){typeof t!="function"&&(t=$t(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o=n[i],s=o.length,a=r[i]=new Array(s),u,f,c=0;c<s;++c)(u=o[c])&&(f=t.call(u,u.__data__,c,o))&&("__data__"in u&&(f.__data__=u.__data__),a[c]=f);return new C(r,this._parents)}function Dn(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function Hn(){return[]}function jt(t){return t==null?Hn:function(){return this.querySelectorAll(t)}}function On(t){return function(){return Dn(t.apply(this,arguments))}}function Xn(t){typeof t=="function"?t=On(t):t=jt(t);for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var s=n[o],a=s.length,u,f=0;f<a;++f)(u=s[f])&&(r.push(t.call(u,u.__data__,f,s)),i.push(u));return new C(r,i)}function tn(t){return function(){return this.matches(t)}}function nn(t){return function(n){return n.matches(t)}}var qn=Array.prototype.find;function Pn(t){return function(){return qn.call(this.children,t)}}function Ln(){return this.firstElementChild}function Vn(t){return this.select(t==null?Ln:Pn(typeof t=="function"?t:nn(t)))}var Un=Array.prototype.filter;function Yn(){return Array.from(this.children)}function Bn(t){return function(){return Un.call(this.children,t)}}function zn(t){return this.selectAll(t==null?Yn:Bn(typeof t=="function"?t:nn(t)))}function Kn(t){typeof t!="function"&&(t=tn(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o=n[i],s=o.length,a=r[i]=[],u,f=0;f<s;++f)(u=o[f])&&t.call(u,u.__data__,f,o)&&a.push(u);return new C(r,this._parents)}function en(t){return new Array(t.length)}function Zn(){return new C(this._enter||this._groups.map(en),this._parents)}function st(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}st.prototype={constructor:st,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function Gn(t){return function(){return t}}function Wn(t,n,e,r,i,o){for(var s=0,a,u=n.length,f=o.length;s<f;++s)(a=n[s])?(a.__data__=o[s],r[s]=a):e[s]=new st(t,o[s]);for(;s<u;++s)(a=n[s])&&(i[s]=a)}function Jn(t,n,e,r,i,o,s){var a,u,f=new Map,c=n.length,l=o.length,h=new Array(c),p;for(a=0;a<c;++a)(u=n[a])&&(h[a]=p=s.call(u,u.__data__,a,n)+"",f.has(p)?i[a]=u:f.set(p,u));for(a=0;a<l;++a)p=s.call(t,o[a],a,o)+"",(u=f.get(p))?(r[a]=u,u.__data__=o[a],f.delete(p)):e[a]=new st(t,o[a]);for(a=0;a<c;++a)(u=n[a])&&f.get(h[a])===u&&(i[a]=u)}function Qn(t){return t.__data__}function jn(t,n){if(!arguments.length)return Array.from(this,Qn);var e=n?Jn:Wn,r=this._parents,i=this._groups;typeof t!="function"&&(t=Gn(t));for(var o=i.length,s=new Array(o),a=new Array(o),u=new Array(o),f=0;f<o;++f){var c=r[f],l=i[f],h=l.length,p=te(t.call(c,c&&c.__data__,f,r)),d=p.length,_=a[f]=new Array(d),w=s[f]=new Array(d),b=u[f]=new Array(h);e(c,l,_,w,b,p,n);for(var N=0,v=0,I,$;N<d;++N)if(I=_[N]){for(N>=v&&(v=N+1);!($=w[v])&&++v<d;);I._next=$||null}}return s=new C(s,r),s._enter=a,s._exit=u,s}function te(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function ne(){return new C(this._exit||this._groups.map(en),this._parents)}function ee(t,n,e){var r=this.enter(),i=this,o=this.exit();return typeof t=="function"?(r=t(r),r&&(r=r.selection())):r=r.append(t+""),n!=null&&(i=n(i),i&&(i=i.selection())),e==null?o.remove():e(o),r&&i?r.merge(i).order():i}function re(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,o=r.length,s=Math.min(i,o),a=new Array(i),u=0;u<s;++u)for(var f=e[u],c=r[u],l=f.length,h=a[u]=new Array(l),p,d=0;d<l;++d)(p=f[d]||c[d])&&(h[d]=p);for(;u<i;++u)a[u]=e[u];return new C(a,this._parents)}function ie(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r=t[n],i=r.length-1,o=r[i],s;--i>=0;)(s=r[i])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function oe(t){t||(t=se);function n(l,h){return l&&h?t(l.__data__,h.__data__):!l-!h}for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var s=e[o],a=s.length,u=i[o]=new Array(a),f,c=0;c<a;++c)(f=s[c])&&(u[c]=f);u.sort(n)}return new C(i,this._parents).order()}function se(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function ae(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function ue(){return Array.from(this)}function fe(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var s=r[i];if(s)return s}return null}function ce(){let t=0;for(const n of this)++t;return t}function le(){return!this.node()}function he(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i=n[e],o=0,s=i.length,a;o<s;++o)(a=i[o])&&t.call(a,a.__data__,o,i);return this}function pe(t){return function(){this.removeAttribute(t)}}function de(t){return function(){this.removeAttributeNS(t.space,t.local)}}function _e(t,n){return function(){this.setAttribute(t,n)}}function ge(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function we(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttribute(t):this.setAttribute(t,e)}}function ye(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function ve(t,n){var e=ht(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((n==null?e.local?de:pe:typeof n=="function"?e.local?ye:we:e.local?ge:_e)(e,n))}function rn(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function xe(t){return function(){this.style.removeProperty(t)}}function me(t,n,e){return function(){this.style.setProperty(t,n,e)}}function be(t,n,e){return function(){var r=n.apply(this,arguments);r==null?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function Ne(t,n,e){return arguments.length>1?this.each((n==null?xe:typeof n=="function"?be:me)(t,n,e??"")):P(this.node(),t)}function P(t,n){return t.style.getPropertyValue(n)||rn(t).getComputedStyle(t,null).getPropertyValue(n)}function Ae(t){return function(){delete this[t]}}function Ce(t,n){return function(){this[t]=n}}function Ee(t,n){return function(){var e=n.apply(this,arguments);e==null?delete this[t]:this[t]=e}}function $e(t,n){return arguments.length>1?this.each((n==null?Ae:typeof n=="function"?Ee:Ce)(t,n)):this.node()[t]}function on(t){return t.trim().split(/^|\s+/)}function kt(t){return t.classList||new sn(t)}function sn(t){this._node=t,this._names=on(t.getAttribute("class")||"")}sn.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function an(t,n){for(var e=kt(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function un(t,n){for(var e=kt(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function ke(t){return function(){an(this,t)}}function Se(t){return function(){un(this,t)}}function Te(t,n){return function(){(n.apply(this,arguments)?an:un)(this,t)}}function Re(t,n){var e=on(t+"");if(arguments.length<2){for(var r=kt(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each((typeof n=="function"?Te:n?ke:Se)(e,n))}function Me(){this.textContent=""}function Ie(t){return function(){this.textContent=t}}function Fe(t){return function(){var n=t.apply(this,arguments);this.textContent=n??""}}function De(t){return arguments.length?this.each(t==null?Me:(typeof t=="function"?Fe:Ie)(t)):this.node().textContent}function He(){this.innerHTML=""}function Oe(t){return function(){this.innerHTML=t}}function Xe(t){return function(){var n=t.apply(this,arguments);this.innerHTML=n??""}}function qe(t){return arguments.length?this.each(t==null?He:(typeof t=="function"?Xe:Oe)(t)):this.node().innerHTML}function Pe(){this.nextSibling&&this.parentNode.appendChild(this)}function Le(){return this.each(Pe)}function Ve(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Ue(){return this.each(Ve)}function Ye(t){var n=typeof t=="function"?t:Qt(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function Be(){return null}function ze(t,n){var e=typeof t=="function"?t:Qt(t),r=n==null?Be:typeof n=="function"?n:$t(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})}function Ke(){var t=this.parentNode;t&&t.removeChild(this)}function Ze(){return this.each(Ke)}function Ge(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function We(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Je(t){return this.select(t?We:Ge)}function Qe(t){return arguments.length?this.property("__data__",t):this.node().__data__}function je(t){return function(n){t.call(this,n,this.__data__)}}function tr(t){return t.trim().split(/^|\s+/).map(function(n){var e="",r=n.indexOf(".");return r>=0&&(e=n.slice(r+1),n=n.slice(0,r)),{type:n,name:e}})}function nr(t){return function(){var n=this.__on;if(n){for(var e=0,r=-1,i=n.length,o;e<i;++e)o=n[e],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):n[++r]=o;++r?n.length=r:delete this.__on}}}function er(t,n,e){return function(){var r=this.__on,i,o=je(n);if(r){for(var s=0,a=r.length;s<a;++s)if((i=r[s]).type===t.type&&i.name===t.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=e),i.value=n;return}}this.addEventListener(t.type,o,e),i={type:t.type,name:t.name,value:n,listener:o,options:e},r?r.push(i):this.__on=[i]}}function rr(t,n,e){var r=tr(t+""),i,o=r.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var u=0,f=a.length,c;u<f;++u)for(i=0,c=a[u];i<o;++i)if((s=r[i]).type===c.type&&s.name===c.name)return c.value}return}for(a=n?er:nr,i=0;i<o;++i)this.each(a(r[i],n,e));return this}function fn(t,n,e){var r=rn(t),i=r.CustomEvent;typeof i=="function"?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function ir(t,n){return function(){return fn(this,t,n)}}function or(t,n){return function(){return fn(this,t,n.apply(this,arguments))}}function sr(t,n){return this.each((typeof n=="function"?or:ir)(t,n))}function*ar(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length,s;i<o;++i)(s=r[i])&&(yield s)}var ur=[null];function C(t,n){this._groups=t,this._parents=n}function J(){return new C([[document.documentElement]],ur)}function fr(){return this}C.prototype=J.prototype={constructor:C,select:Fn,selectAll:Xn,selectChild:Vn,selectChildren:zn,filter:Kn,data:jn,enter:Zn,exit:ne,join:ee,merge:re,selection:fr,order:ie,sort:oe,call:ae,nodes:ue,node:fe,size:ce,empty:le,each:he,attr:ve,style:Ne,property:$e,classed:Re,text:De,html:qe,raise:Le,lower:Ue,append:Ye,insert:ze,remove:Ze,clone:Je,datum:Qe,on:rr,dispatch:sr,[Symbol.iterator]:ar};function St(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function cn(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function Q(){}var K=.7,at=1/K,q="\\s*([+-]?\\d+)\\s*",Z="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",S="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",cr=/^#([0-9a-f]{3,8})$/,lr=new RegExp(`^rgb\\(${q},${q},${q}\\)$`),hr=new RegExp(`^rgb\\(${S},${S},${S}\\)$`),pr=new RegExp(`^rgba\\(${q},${q},${q},${Z}\\)$`),dr=new RegExp(`^rgba\\(${S},${S},${S},${Z}\\)$`),_r=new RegExp(`^hsl\\(${Z},${S},${S}\\)$`),gr=new RegExp(`^hsla\\(${Z},${S},${S},${Z}\\)$`),Dt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};St(Q,G,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Ht,formatHex:Ht,formatHex8:wr,formatHsl:yr,formatRgb:Ot,toString:Ot});function Ht(){return this.rgb().formatHex()}function wr(){return this.rgb().formatHex8()}function yr(){return ln(this).formatHsl()}function Ot(){return this.rgb().formatRgb()}function G(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=cr.exec(t))?(e=n[1].length,n=parseInt(n[1],16),e===6?Xt(n):e===3?new m(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):e===8?tt(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):e===4?tt(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=lr.exec(t))?new m(n[1],n[2],n[3],1):(n=hr.exec(t))?new m(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=pr.exec(t))?tt(n[1],n[2],n[3],n[4]):(n=dr.exec(t))?tt(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=_r.exec(t))?Lt(n[1],n[2]/100,n[3]/100,1):(n=gr.exec(t))?Lt(n[1],n[2]/100,n[3]/100,n[4]):Dt.hasOwnProperty(t)?Xt(Dt[t]):t==="transparent"?new m(NaN,NaN,NaN,0):null}function Xt(t){return new m(t>>16&255,t>>8&255,t&255,1)}function tt(t,n,e,r){return r<=0&&(t=n=e=NaN),new m(t,n,e,r)}function vr(t){return t instanceof Q||(t=G(t)),t?(t=t.rgb(),new m(t.r,t.g,t.b,t.opacity)):new m}function mt(t,n,e,r){return arguments.length===1?vr(t):new m(t,n,e,r??1)}function m(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}St(m,mt,cn(Q,{brighter(t){return t=t==null?at:Math.pow(at,t),new m(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?K:Math.pow(K,t),new m(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new m(O(this.r),O(this.g),O(this.b),ut(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:qt,formatHex:qt,formatHex8:xr,formatRgb:Pt,toString:Pt}));function qt(){return`#${H(this.r)}${H(this.g)}${H(this.b)}`}function xr(){return`#${H(this.r)}${H(this.g)}${H(this.b)}${H((isNaN(this.opacity)?1:this.opacity)*255)}`}function Pt(){const t=ut(this.opacity);return`${t===1?"rgb(":"rgba("}${O(this.r)}, ${O(this.g)}, ${O(this.b)}${t===1?")":`, ${t})`}`}function ut(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function O(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function H(t){return t=O(t),(t<16?"0":"")+t.toString(16)}function Lt(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new A(t,n,e,r)}function ln(t){if(t instanceof A)return new A(t.h,t.s,t.l,t.opacity);if(t instanceof Q||(t=G(t)),!t)return new A;if(t instanceof A)return t;t=t.rgb();var n=t.r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),s=NaN,a=o-i,u=(o+i)/2;return a?(n===o?s=(e-r)/a+(e<r)*6:e===o?s=(r-n)/a+2:s=(n-e)/a+4,a/=u<.5?o+i:2-o-i,s*=60):a=u>0&&u<1?0:s,new A(s,a,u,t.opacity)}function mr(t,n,e,r){return arguments.length===1?ln(t):new A(t,n,e,r??1)}function A(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}St(A,mr,cn(Q,{brighter(t){return t=t==null?at:Math.pow(at,t),new A(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?K:Math.pow(K,t),new A(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new m(_t(t>=240?t-240:t+120,i,r),_t(t,i,r),_t(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new A(Vt(this.h),nt(this.s),nt(this.l),ut(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=ut(this.opacity);return`${t===1?"hsl(":"hsla("}${Vt(this.h)}, ${nt(this.s)*100}%, ${nt(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Vt(t){return t=(t||0)%360,t<0?t+360:t}function nt(t){return Math.max(0,Math.min(1,t||0))}function _t(t,n,e){return(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)*255}const hn=t=>()=>t;function br(t,n){return function(e){return t+e*n}}function Nr(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}function Ar(t){return(t=+t)==1?pn:function(n,e){return e-n?Nr(n,e,t):hn(isNaN(n)?e:n)}}function pn(t,n){var e=n-t;return e?br(t,e):hn(isNaN(t)?n:t)}const Ut=function t(n){var e=Ar(n);function r(i,o){var s=e((i=mt(i)).r,(o=mt(o)).r),a=e(i.g,o.g),u=e(i.b,o.b),f=pn(i.opacity,o.opacity);return function(c){return i.r=s(c),i.g=a(c),i.b=u(c),i.opacity=f(c),i+""}}return r.gamma=t,r}(1);function D(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}var bt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,gt=new RegExp(bt.source,"g");function Cr(t){return function(){return t}}function Er(t){return function(n){return t(n)+""}}function $r(t,n){var e=bt.lastIndex=gt.lastIndex=0,r,i,o,s=-1,a=[],u=[];for(t=t+"",n=n+"";(r=bt.exec(t))&&(i=gt.exec(n));)(o=i.index)>e&&(o=n.slice(e,o),a[s]?a[s]+=o:a[++s]=o),(r=r[0])===(i=i[0])?a[s]?a[s]+=i:a[++s]=i:(a[++s]=null,u.push({i:s,x:D(r,i)})),e=gt.lastIndex;return e<n.length&&(o=n.slice(e),a[s]?a[s]+=o:a[++s]=o),a.length<2?u[0]?Er(u[0].x):Cr(n):(n=u.length,function(f){for(var c=0,l;c<n;++c)a[(l=u[c]).i]=l.x(f);return a.join("")})}var Yt=180/Math.PI,Nt={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function dn(t,n,e,r,i,o){var s,a,u;return(s=Math.sqrt(t*t+n*n))&&(t/=s,n/=s),(u=t*e+n*r)&&(e-=t*u,r-=n*u),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,u/=a),t*r<n*e&&(t=-t,n=-n,u=-u,s=-s),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Yt,skewX:Math.atan(u)*Yt,scaleX:s,scaleY:a}}var et;function kr(t){const n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?Nt:dn(n.a,n.b,n.c,n.d,n.e,n.f)}function Sr(t){return t==null||(et||(et=document.createElementNS("http://www.w3.org/2000/svg","g")),et.setAttribute("transform",t),!(t=et.transform.baseVal.consolidate()))?Nt:(t=t.matrix,dn(t.a,t.b,t.c,t.d,t.e,t.f))}function _n(t,n,e,r){function i(f){return f.length?f.pop()+" ":""}function o(f,c,l,h,p,d){if(f!==l||c!==h){var _=p.push("translate(",null,n,null,e);d.push({i:_-4,x:D(f,l)},{i:_-2,x:D(c,h)})}else(l||h)&&p.push("translate("+l+n+h+e)}function s(f,c,l,h){f!==c?(f-c>180?c+=360:c-f>180&&(f+=360),h.push({i:l.push(i(l)+"rotate(",null,r)-2,x:D(f,c)})):c&&l.push(i(l)+"rotate("+c+r)}function a(f,c,l,h){f!==c?h.push({i:l.push(i(l)+"skewX(",null,r)-2,x:D(f,c)}):c&&l.push(i(l)+"skewX("+c+r)}function u(f,c,l,h,p,d){if(f!==l||c!==h){var _=p.push(i(p)+"scale(",null,",",null,")");d.push({i:_-4,x:D(f,l)},{i:_-2,x:D(c,h)})}else(l!==1||h!==1)&&p.push(i(p)+"scale("+l+","+h+")")}return function(f,c){var l=[],h=[];return f=t(f),c=t(c),o(f.translateX,f.translateY,c.translateX,c.translateY,l,h),s(f.rotate,c.rotate,l,h),a(f.skewX,c.skewX,l,h),u(f.scaleX,f.scaleY,c.scaleX,c.scaleY,l,h),f=c=null,function(p){for(var d=-1,_=h.length,w;++d<_;)l[(w=h[d]).i]=w.x(p);return l.join("")}}}var Tr=_n(kr,"px, ","px)","deg)"),Rr=_n(Sr,", ",")",")"),L=0,Y=0,V=0,gn=1e3,ft,B,ct=0,X=0,pt=0,W=typeof performance=="object"&&performance.now?performance:Date,wn=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Tt(){return X||(wn(Mr),X=W.now()+pt)}function Mr(){X=0}function lt(){this._call=this._time=this._next=null}lt.prototype=yn.prototype={constructor:lt,restart:function(t,n,e){if(typeof t!="function")throw new TypeError("callback is not a function");e=(e==null?Tt():+e)+(n==null?0:+n),!this._next&&B!==this&&(B?B._next=this:ft=this,B=this),this._call=t,this._time=e,At()},stop:function(){this._call&&(this._call=null,this._time=1/0,At())}};function yn(t,n,e){var r=new lt;return r.restart(t,n,e),r}function Ir(){Tt(),++L;for(var t=ft,n;t;)(n=X-t._time)>=0&&t._call.call(void 0,n),t=t._next;--L}function Bt(){X=(ct=W.now())+pt,L=Y=0;try{Ir()}finally{L=0,Dr(),X=0}}function Fr(){var t=W.now(),n=t-ct;n>gn&&(pt-=n,ct=t)}function Dr(){for(var t,n=ft,e,r=1/0;n;)n._call?(r>n._time&&(r=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:ft=e);B=t,At(r)}function At(t){if(!L){Y&&(Y=clearTimeout(Y));var n=t-X;n>24?(t<1/0&&(Y=setTimeout(Bt,t-W.now()-pt)),V&&(V=clearInterval(V))):(V||(ct=W.now(),V=setInterval(Fr,gn)),L=1,wn(Bt))}}function zt(t,n,e){var r=new lt;return n=n==null?0:+n,r.restart(i=>{r.stop(),t(i+n)},n,e),r}var Hr=Jt("start","end","cancel","interrupt"),Or=[],vn=0,Kt=1,Ct=2,it=3,Zt=4,Et=5,ot=6;function dt(t,n,e,r,i,o){var s=t.__transition;if(!s)t.__transition={};else if(e in s)return;Xr(t,e,{name:n,index:r,group:i,on:Hr,tween:Or,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:vn})}function Rt(t,n){var e=E(t,n);if(e.state>vn)throw new Error("too late; already scheduled");return e}function T(t,n){var e=E(t,n);if(e.state>it)throw new Error("too late; already running");return e}function E(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Xr(t,n,e){var r=t.__transition,i;r[n]=e,e.timer=yn(o,0,e.time);function o(f){e.state=Kt,e.timer.restart(s,e.delay,e.time),e.delay<=f&&s(f-e.delay)}function s(f){var c,l,h,p;if(e.state!==Kt)return u();for(c in r)if(p=r[c],p.name===e.name){if(p.state===it)return zt(s);p.state===Zt?(p.state=ot,p.timer.stop(),p.on.call("interrupt",t,t.__data__,p.index,p.group),delete r[c]):+c<n&&(p.state=ot,p.timer.stop(),p.on.call("cancel",t,t.__data__,p.index,p.group),delete r[c])}if(zt(function(){e.state===it&&(e.state=Zt,e.timer.restart(a,e.delay,e.time),a(f))}),e.state=Ct,e.on.call("start",t,t.__data__,e.index,e.group),e.state===Ct){for(e.state=it,i=new Array(h=e.tween.length),c=0,l=-1;c<h;++c)(p=e.tween[c].value.call(t,t.__data__,e.index,e.group))&&(i[++l]=p);i.length=l+1}}function a(f){for(var c=f<e.duration?e.ease.call(null,f/e.duration):(e.timer.restart(u),e.state=Et,1),l=-1,h=i.length;++l<h;)i[l].call(t,c);e.state===Et&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){e.state=ot,e.timer.stop(),delete r[n];for(var f in r)return;delete t.__transition}}function qr(t,n){var e=t.__transition,r,i,o=!0,s;if(e){n=n==null?null:n+"";for(s in e){if((r=e[s]).name!==n){o=!1;continue}i=r.state>Ct&&r.state<Et,r.state=ot,r.timer.stop(),r.on.call(i?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete e[s]}o&&delete t.__transition}}function Pr(t){return this.each(function(){qr(this,t)})}function Lr(t,n){var e,r;return function(){var i=T(this,t),o=i.tween;if(o!==e){r=e=o;for(var s=0,a=r.length;s<a;++s)if(r[s].name===n){r=r.slice(),r.splice(s,1);break}}i.tween=r}}function Vr(t,n,e){var r,i;if(typeof e!="function")throw new Error;return function(){var o=T(this,t),s=o.tween;if(s!==r){i=(r=s).slice();for(var a={name:n,value:e},u=0,f=i.length;u<f;++u)if(i[u].name===n){i[u]=a;break}u===f&&i.push(a)}o.tween=i}}function Ur(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r=E(this.node(),e).tween,i=0,o=r.length,s;i<o;++i)if((s=r[i]).name===t)return s.value;return null}return this.each((n==null?Lr:Vr)(e,t,n))}function Mt(t,n,e){var r=t._id;return t.each(function(){var i=T(this,r);(i.value||(i.value={}))[n]=e.apply(this,arguments)}),function(i){return E(i,r).value[n]}}function xn(t,n){var e;return(typeof n=="number"?D:n instanceof G?Ut:(e=G(n))?(n=e,Ut):$r)(t,n)}function Yr(t){return function(){this.removeAttribute(t)}}function Br(t){return function(){this.removeAttributeNS(t.space,t.local)}}function zr(t,n,e){var r,i=e+"",o;return function(){var s=this.getAttribute(t);return s===i?null:s===r?o:o=n(r=s,e)}}function Kr(t,n,e){var r,i=e+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===i?null:s===r?o:o=n(r=s,e)}}function Zr(t,n,e){var r,i,o;return function(){var s,a=e(this),u;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),u=a+"",s===u?null:s===r&&u===i?o:(i=u,o=n(r=s,a)))}}function Gr(t,n,e){var r,i,o;return function(){var s,a=e(this),u;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),u=a+"",s===u?null:s===r&&u===i?o:(i=u,o=n(r=s,a)))}}function Wr(t,n){var e=ht(t),r=e==="transform"?Rr:xn;return this.attrTween(t,typeof n=="function"?(e.local?Gr:Zr)(e,r,Mt(this,"attr."+t,n)):n==null?(e.local?Br:Yr)(e):(e.local?Kr:zr)(e,r,n))}function Jr(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function Qr(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function jr(t,n){var e,r;function i(){var o=n.apply(this,arguments);return o!==r&&(e=(r=o)&&Qr(t,o)),e}return i._value=n,i}function ti(t,n){var e,r;function i(){var o=n.apply(this,arguments);return o!==r&&(e=(r=o)&&Jr(t,o)),e}return i._value=n,i}function ni(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;var r=ht(t);return this.tween(e,(r.local?jr:ti)(r,n))}function ei(t,n){return function(){Rt(this,t).delay=+n.apply(this,arguments)}}function ri(t,n){return n=+n,function(){Rt(this,t).delay=n}}function ii(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?ei:ri)(n,t)):E(this.node(),n).delay}function oi(t,n){return function(){T(this,t).duration=+n.apply(this,arguments)}}function si(t,n){return n=+n,function(){T(this,t).duration=n}}function ai(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?oi:si)(n,t)):E(this.node(),n).duration}function ui(t,n){if(typeof n!="function")throw new Error;return function(){T(this,t).ease=n}}function fi(t){var n=this._id;return arguments.length?this.each(ui(n,t)):E(this.node(),n).ease}function ci(t,n){return function(){var e=n.apply(this,arguments);if(typeof e!="function")throw new Error;T(this,t).ease=e}}function li(t){if(typeof t!="function")throw new Error;return this.each(ci(this._id,t))}function hi(t){typeof t!="function"&&(t=tn(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o=n[i],s=o.length,a=r[i]=[],u,f=0;f<s;++f)(u=o[f])&&t.call(u,u.__data__,f,o)&&a.push(u);return new M(r,this._parents,this._name,this._id)}function pi(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),s=new Array(r),a=0;a<o;++a)for(var u=n[a],f=e[a],c=u.length,l=s[a]=new Array(c),h,p=0;p<c;++p)(h=u[p]||f[p])&&(l[p]=h);for(;a<r;++a)s[a]=n[a];return new M(s,this._parents,this._name,this._id)}function di(t){return(t+"").trim().split(/^|\s+/).every(function(n){var e=n.indexOf(".");return e>=0&&(n=n.slice(0,e)),!n||n==="start"})}function _i(t,n,e){var r,i,o=di(n)?Rt:T;return function(){var s=o(this,t),a=s.on;a!==r&&(i=(r=a).copy()).on(n,e),s.on=i}}function gi(t,n){var e=this._id;return arguments.length<2?E(this.node(),e).on.on(t):this.each(_i(e,t,n))}function wi(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function yi(){return this.on("end.remove",wi(this._id))}function vi(t){var n=this._name,e=this._id;typeof t!="function"&&(t=$t(t));for(var r=this._groups,i=r.length,o=new Array(i),s=0;s<i;++s)for(var a=r[s],u=a.length,f=o[s]=new Array(u),c,l,h=0;h<u;++h)(c=a[h])&&(l=t.call(c,c.__data__,h,a))&&("__data__"in c&&(l.__data__=c.__data__),f[h]=l,dt(f[h],n,e,h,f,E(c,e)));return new M(o,this._parents,n,e)}function xi(t){var n=this._name,e=this._id;typeof t!="function"&&(t=jt(t));for(var r=this._groups,i=r.length,o=[],s=[],a=0;a<i;++a)for(var u=r[a],f=u.length,c,l=0;l<f;++l)if(c=u[l]){for(var h=t.call(c,c.__data__,l,u),p,d=E(c,e),_=0,w=h.length;_<w;++_)(p=h[_])&&dt(p,n,e,_,h,d);o.push(h),s.push(c)}return new M(o,s,n,e)}var mi=J.prototype.constructor;function bi(){return new mi(this._groups,this._parents)}function Ni(t,n){var e,r,i;return function(){var o=P(this,t),s=(this.style.removeProperty(t),P(this,t));return o===s?null:o===e&&s===r?i:i=n(e=o,r=s)}}function mn(t){return function(){this.style.removeProperty(t)}}function Ai(t,n,e){var r,i=e+"",o;return function(){var s=P(this,t);return s===i?null:s===r?o:o=n(r=s,e)}}function Ci(t,n,e){var r,i,o;return function(){var s=P(this,t),a=e(this),u=a+"";return a==null&&(u=a=(this.style.removeProperty(t),P(this,t))),s===u?null:s===r&&u===i?o:(i=u,o=n(r=s,a))}}function Ei(t,n){var e,r,i,o="style."+n,s="end."+o,a;return function(){var u=T(this,t),f=u.on,c=u.value[o]==null?a||(a=mn(n)):void 0;(f!==e||i!==c)&&(r=(e=f).copy()).on(s,i=c),u.on=r}}function $i(t,n,e){var r=(t+="")=="transform"?Tr:xn;return n==null?this.styleTween(t,Ni(t,r)).on("end.style."+t,mn(t)):typeof n=="function"?this.styleTween(t,Ci(t,r,Mt(this,"style."+t,n))).each(Ei(this._id,t)):this.styleTween(t,Ai(t,r,n),e).on("end.style."+t,null)}function ki(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}function Si(t,n,e){var r,i;function o(){var s=n.apply(this,arguments);return s!==i&&(r=(i=s)&&ki(t,s,e)),r}return o._value=n,o}function Ti(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(n==null)return this.tween(r,null);if(typeof n!="function")throw new Error;return this.tween(r,Si(t,n,e??""))}function Ri(t){return function(){this.textContent=t}}function Mi(t){return function(){var n=t(this);this.textContent=n??""}}function Ii(t){return this.tween("text",typeof t=="function"?Mi(Mt(this,"text",t)):Ri(t==null?"":t+""))}function Fi(t){return function(n){this.textContent=t.call(this,n)}}function Di(t){var n,e;function r(){var i=t.apply(this,arguments);return i!==e&&(n=(e=i)&&Fi(i)),n}return r._value=t,r}function Hi(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,Di(t))}function Oi(){for(var t=this._name,n=this._id,e=bn(),r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],a=s.length,u,f=0;f<a;++f)if(u=s[f]){var c=E(u,n);dt(u,t,e,f,s,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new M(r,this._parents,t,e)}function Xi(){var t,n,e=this,r=e._id,i=e.size();return new Promise(function(o,s){var a={value:s},u={value:function(){--i===0&&o()}};e.each(function(){var f=T(this,r),c=f.on;c!==t&&(n=(t=c).copy(),n._.cancel.push(a),n._.interrupt.push(a),n._.end.push(u)),f.on=n}),i===0&&o()})}var qi=0;function M(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function bn(){return++qi}var R=J.prototype;M.prototype={constructor:M,select:vi,selectAll:xi,selectChild:R.selectChild,selectChildren:R.selectChildren,filter:hi,merge:pi,selection:bi,transition:Oi,call:R.call,nodes:R.nodes,node:R.node,size:R.size,empty:R.empty,each:R.each,on:gi,attr:Wr,attrTween:ni,style:$i,styleTween:Ti,text:Ii,textTween:Hi,remove:yi,tween:Ur,delay:ii,duration:ai,ease:fi,easeVarying:li,end:Xi,[Symbol.iterator]:R[Symbol.iterator]};function Pi(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var Li={time:null,delay:0,duration:250,ease:Pi};function Vi(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}function Ui(t){var n,e;t instanceof M?(n=t._id,t=t._name):(n=bn(),(e=Li).time=Tt(),t=t==null?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],a=s.length,u,f=0;f<a;++f)(u=s[f])&&dt(u,t,n,f,s,e||Vi(u,n));return new M(r,this._parents,t,n)}J.prototype.interrupt=Pr;J.prototype.transition=Ui;var Gt={},wt={},yt=34,U=10,vt=13;function Nn(t){return new Function("d","return {"+t.map(function(n,e){return JSON.stringify(n)+": d["+e+'] || ""'}).join(",")+"}")}function Yi(t,n){var e=Nn(t);return function(r,i){return n(e(r),i,t)}}function Wt(t){var n=Object.create(null),e=[];return t.forEach(function(r){for(var i in r)i in n||e.push(n[i]=i)}),e}function x(t,n){var e=t+"",r=e.length;return r<n?new Array(n-r+1).join(0)+e:e}function Bi(t){return t<0?"-"+x(-t,6):t>9999?"+"+x(t,6):x(t,4)}function zi(t){var n=t.getUTCHours(),e=t.getUTCMinutes(),r=t.getUTCSeconds(),i=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":Bi(t.getUTCFullYear())+"-"+x(t.getUTCMonth()+1,2)+"-"+x(t.getUTCDate(),2)+(i?"T"+x(n,2)+":"+x(e,2)+":"+x(r,2)+"."+x(i,3)+"Z":r?"T"+x(n,2)+":"+x(e,2)+":"+x(r,2)+"Z":e||n?"T"+x(n,2)+":"+x(e,2)+"Z":"")}function Ki(t){var n=new RegExp('["'+t+`
\r]`),e=t.charCodeAt(0);function r(l,h){var p,d,_=i(l,function(w,b){if(p)return p(w,b-1);d=w,p=h?Yi(w,h):Nn(w)});return _.columns=d||[],_}function i(l,h){var p=[],d=l.length,_=0,w=0,b,N=d<=0,v=!1;l.charCodeAt(d-1)===U&&--d,l.charCodeAt(d-1)===vt&&--d;function I(){if(N)return wt;if(v)return v=!1,Gt;var F,g=_,y;if(l.charCodeAt(g)===yt){for(;_++<d&&l.charCodeAt(_)!==yt||l.charCodeAt(++_)===yt;);return(F=_)>=d?N=!0:(y=l.charCodeAt(_++))===U?v=!0:y===vt&&(v=!0,l.charCodeAt(_)===U&&++_),l.slice(g+1,F-1).replace(/""/g,'"')}for(;_<d;){if((y=l.charCodeAt(F=_++))===U)v=!0;else if(y===vt)v=!0,l.charCodeAt(_)===U&&++_;else if(y!==e)continue;return l.slice(g,F)}return N=!0,l.slice(g,d)}for(;(b=I())!==wt;){for(var $=[];b!==Gt&&b!==wt;)$.push(b),b=I();h&&($=h($,w++))==null||p.push($)}return p}function o(l,h){return l.map(function(p){return h.map(function(d){return c(p[d])}).join(t)})}function s(l,h){return h==null&&(h=Wt(l)),[h.map(c).join(t)].concat(o(l,h)).join(`
`)}function a(l,h){return h==null&&(h=Wt(l)),o(l,h).join(`
`)}function u(l){return l.map(f).join(`
`)}function f(l){return l.map(c).join(t)}function c(l){return l==null?"":l instanceof Date?zi(l):n.test(l+="")?'"'+l.replace(/"/g,'""')+'"':l}return{parse:r,parseRows:i,format:s,formatBody:a,formatRows:u,formatRow:f,formatValue:c}}var An=Ki(","),ji=An.parse,to=An.parseRows;function z(t,n,e){this.k=t,this.x=n,this.y=e}z.prototype={constructor:z,scale:function(t){return t===1?this:new z(this.k*t,this.x,this.y)},translate:function(t,n){return t===0&n===0?this:new z(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};z.prototype;export{ji as a,to as c,Wi as e,Ji as o,Qi as u};
