function k(){}const X=t=>t;function D(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function Y(){return Object.create(null)}function B(t){t.forEach(P)}function M(t){return typeof t=="function"}function Z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function $(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function tt(t){return Object.keys(t).length===0}function O(t,...e){if(t==null){for(const r of e)r(void 0);return k}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function et(t,e,n){t.$$.on_destroy.push(O(e,n))}function nt(t,e,n,r){if(t){const i=A(t,e,n,r);return t[0](i)}}function A(t,e,n,r){return t[1]&&r?D(n.ctx.slice(),t[1](r(e))):n.ctx}function rt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],c=Math.max(e.dirty.length,i.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|i[s];return o}return e.dirty|i}return e.dirty}function it(t,e,n,r,i,o){if(i){const c=A(e,n,r,o);t.p(c,i)}}function ct(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function lt(t){return t&&M(t.destroy)?t.destroy:k}function st(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let p=!1;function ot(){p=!0}function ut(){p=!1}function T(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function F(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(i>0&&e[n[i]].claim_order<=u?i+1:T(1,i,q=>e[n[q]].claim_order,u))-1;r[l]=n[a]+1;const w=a+1;n[w]=l,i=Math.max(w,i)}const o=[],c=[];let s=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(o.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[l],a)}}function H(t,e){t.appendChild(e)}function I(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function at(t){const e=j("style");return e.textContent="/* empty */",L(I(t),e),e.sheet}function L(t,e){return H(t.head||t,e),e.sheet}function R(t,e){if(p){for(F(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ft(t,e,n){p&&!n?R(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function _t(t){t.parentNode&&t.parentNode.removeChild(t)}function dt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function j(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function ht(){return x(" ")}function mt(){return x("")}function pt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bt(t){return t.dataset.svelteH}function gt(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,e,n,r,i=!1){z(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,i||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function U(t,e,n,r){return C(t,i=>i.nodeName===e,i=>{const o=[];for(let c=0;c<i.attributes.length;c++){const s=i.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>i.removeAttribute(c))},()=>r(e))}function xt(t,e,n){return U(t,e,n,j)}function W(t,e){return C(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>x(e),!0)}function vt(t){return W(t," ")}function wt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Et(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function G(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function Nt(t,e){return new t(e)}let m;function y(t){m=t}function v(){if(!m)throw new Error("Function called outside component initialization");return m}function kt(t){v().$$.on_mount.push(t)}function At(t){v().$$.after_update.push(t)}function jt(){const t=v();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const o=G(e,n,{cancelable:r});return i.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}const d=[],E=[];let _=[];const N=[],S=Promise.resolve();let g=!1;function J(){g||(g=!0,S.then(Q))}function Ct(){return J(),S}function K(t){_.push(t)}const b=new Set;let f=0;function Q(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const e=d[f];f++,y(e),V(e.$$)}}catch(e){throw d.length=0,f=0,e}for(y(null),d.length=0,f=0;E.length;)E.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];b.has(n)||(b.add(n),n())}_.length=0}while(d.length);for(;N.length;)N.pop()();g=!1,b.clear(),y(t)}function V(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}function St(t){const e=[],n=[];_.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),_=e}export{K as A,$ as B,I as C,at as D,B as E,M as F,G,Y as H,Q as I,tt as J,St as K,m as L,y as M,P as N,d as O,J as P,ot as Q,ut as R,lt as S,jt as T,bt as U,nt as V,it as W,ct as X,rt as Y,ht as a,gt as b,xt as c,W as d,j as e,_t as f,vt as g,R as h,ft as i,wt as j,et as k,mt as l,At as m,k as n,kt as o,yt as p,Et as q,E as r,Z as s,x as t,Nt as u,Ct as v,dt as w,X as x,st as y,pt as z};
