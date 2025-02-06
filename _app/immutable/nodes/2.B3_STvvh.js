import{s as F,e as b,a as V,c as y,b as S,g as $,f as p,p as v,q as j,i as D,h as m,o as J,t as P,d as U,j as I,l as z,z as ie,A as ne,r as oe,B as L}from"../chunks/scheduler.BspYEHQY.js";import{S as X,i as Z,g as x,c as ee,a as B,t as O,f as ce,h as fe,b as te,d as se,m as le,e as re}from"../chunks/index.DinvU5Fi.js";import{e as A,u as ue,o as de,c as he,a as N}from"../chunks/transform.CJF5ByQx.js";import{p as H,f as _e,a as pe}from"../chunks/stores.DCUceb5P.js";const ve=!0,Ve=Object.freeze(Object.defineProperty({__proto__:null,prerender:ve},Symbol.toStringTag,{value:"Module"}));function w(c,e,s){const t=c.slice();return t[12]=e[s],t}function G(c){let e,s,t;return{c(){e=b("div"),s=b("p"),t=P(c[0]),this.h()},l(l){e=y(l,"DIV",{class:!0});var i=S(e);s=y(i,"P",{class:!0});var o=S(s);t=U(o,c[0]),o.forEach(p),i.forEach(p),this.h()},h(){v(s,"class","placeholder-text svelte-vnse3f"),v(e,"class","description-container svelte-vnse3f")},m(l,i){D(l,e,i),m(e,s),m(s,t)},p(l,i){i&1&&I(t,l[0])},d(l){l&&p(e)}}}function K(c){let e,s,t,l,i,o=c[12].Speaker+"",f,h,_,n=c[12].Bio+"",a,k,E,d=c[12].Picture&&Q(c),r=c[12].Url&&W(c);return{c(){e=b("div"),s=b("div"),d&&d.c(),t=V(),l=b("div"),i=b("h3"),f=P(o),h=V(),_=b("p"),a=P(n),k=V(),r&&r.c(),E=V(),this.h()},l(u){e=y(u,"DIV",{class:!0});var g=S(e);s=y(g,"DIV",{class:!0});var C=S(s);d&&d.l(C),t=$(C),l=y(C,"DIV",{class:!0});var T=S(l);i=y(T,"H3",{class:!0});var M=S(i);f=U(M,o),M.forEach(p),h=$(T),_=y(T,"P",{class:!0});var q=S(_);a=U(q,n),q.forEach(p),k=$(T),r&&r.l(T),T.forEach(p),C.forEach(p),E=$(g),g.forEach(p),this.h()},h(){v(i,"class","svelte-vnse3f"),v(_,"class","svelte-vnse3f"),v(l,"class","speaker-info svelte-vnse3f"),v(s,"class","selected-speaker svelte-vnse3f"),v(e,"class","detail-row svelte-vnse3f")},m(u,g){D(u,e,g),m(e,s),d&&d.m(s,null),m(s,t),m(s,l),m(l,i),m(i,f),m(l,h),m(l,_),m(_,a),m(l,k),r&&r.m(l,null),m(e,E)},p(u,g){u[12].Picture?d?d.p(u,g):(d=Q(u),d.c(),d.m(s,t)):d&&(d.d(1),d=null),g&8&&o!==(o=u[12].Speaker+"")&&I(f,o),g&8&&n!==(n=u[12].Bio+"")&&I(a,n),u[12].Url?r?r.p(u,g):(r=W(u),r.c(),r.m(l,null)):r&&(r.d(1),r=null)},d(u){u&&p(e),d&&d.d(),r&&r.d()}}}function Q(c){let e,s,t;return{c(){e=b("img"),this.h()},l(l){e=y(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){L(e.src,s=c[12].Picture)||v(e,"src",s),v(e,"alt",t=c[12].Speaker),v(e,"class","svelte-vnse3f")},m(l,i){D(l,e,i)},p(l,i){i&8&&!L(e.src,s=l[12].Picture)&&v(e,"src",s),i&8&&t!==(t=l[12].Speaker)&&v(e,"alt",t)},d(l){l&&p(e)}}}function W(c){let e,s=c[12].Url+"",t,l;return{c(){e=b("a"),t=P(s),this.h()},l(i){e=y(i,"A",{href:!0,target:!0,rel:!0,class:!0});var o=S(e);t=U(o,s),o.forEach(p),this.h()},h(){v(e,"href",l=c[12].Url),v(e,"target","_blank"),v(e,"rel","noopener noreferrer"),v(e,"class","svelte-vnse3f")},m(i,o){D(i,e,o),m(e,t)},p(i,o){o&8&&s!==(s=i[12].Url+"")&&I(t,s),o&8&&l!==(l=i[12].Url)&&v(e,"href",l)},d(i){i&&p(e)}}}function Y(c,e){let s,t,l=e[12].Speaker+"",i,o,f,h,_,n,a,k;function E(){return e[7](e[12])}let d=e[1]&&e[1].key===e[12].key&&K(e);return{key:c,first:null,c(){s=b("div"),t=b("div"),i=P(l),h=V(),d&&d.c(),_=z(),this.h()},l(r){s=y(r,"DIV",{class:!0});var u=S(s);t=y(u,"DIV",{class:!0,style:!0});var g=S(t);i=U(g,l),g.forEach(p),u.forEach(p),h=$(r),d&&d.l(r),_=z(),this.h()},h(){v(t,"class","name svelte-vnse3f"),j(t,"background-image","linear-gradient(to right, var(--highlite-1), "+e[4][e[12].Category]+")"),v(s,"class","grid-row name-entry svelte-vnse3f"),this.first=s},m(r,u){D(r,s,u),m(s,t),m(t,i),D(r,h,u),d&&d.m(r,u),D(r,_,u),n=!0,a||(k=ie(s,"click",E),a=!0)},p(r,u){e=r,(!n||u&8)&&l!==(l=e[12].Speaker+"")&&I(i,l),(!n||u&8)&&j(t,"background-image","linear-gradient(to right, var(--highlite-1), "+e[4][e[12].Category]+")"),e[1]&&e[1].key===e[12].key?d?d.p(e,u):(d=K(e),d.c(),d.m(_.parentNode,_)):d&&(d.d(1),d=null)},i(r){n||(r&&ne(()=>{n&&(f&&f.end(1),o=ce(s,_e,{y:500,duration:300}),o.start())}),n=!0)},o(r){o&&o.invalidate(),r&&(f=fe(s,pe,{})),n=!1},d(r){r&&(p(s),p(h),p(_)),r&&f&&f.end(),d&&d.d(r),a=!1,k()}}}function ke(c){let e,s,t,l=[],i=new Map,o,f=c[0]&&G(c),h=A(c[3]);const _=n=>n[12].key;for(let n=0;n<h.length;n+=1){let a=w(c,h,n),k=_(a);i.set(k,l[n]=Y(k,a))}return{c(){e=b("section"),f&&f.c(),s=V(),t=b("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=y(n,"SECTION",{class:!0,style:!0});var a=S(e);f&&f.l(a),s=$(a),t=y(a,"DIV",{class:!0});var k=S(t);for(let E=0;E<l.length;E+=1)l[E].l(k);k.forEach(p),a.forEach(p),this.h()},h(){v(t,"class","speakers-list svelte-vnse3f"),v(e,"class","grid-container svelte-vnse3f"),j(e,"min-height",c[5].length*40+"px")},m(n,a){D(n,e,a),f&&f.m(e,null),m(e,s),m(e,t);for(let k=0;k<l.length;k+=1)l[k]&&l[k].m(t,null);c[8](e),o=!0},p(n,[a]){n[0]?f?f.p(n,a):(f=G(n),f.c(),f.m(e,s)):f&&(f.d(1),f=null),a&26&&(h=A(n[3]),x(),l=ue(l,a,_,1,n,h,i,t,de,Y,null,w),ee())},i(n){if(!o){for(let a=0;a<h.length;a+=1)B(l[a]);o=!0}},o(n){for(let a=0;a<l.length;a+=1)O(l[a]);o=!1},d(n){n&&p(e),f&&f.d();for(let a=0;a<l.length;a+=1)l[a].d();c[8](null)}}}function ge(c,e,s){let{data:t}=e,{introductionText:l}=e,i=null,o;const f=t.reduce((r,u)=>(r[u.Date]||(r[u.Date]=[]),r[u.Date].push(u),r),{}),h=t.reduce((r,u)=>{if(!r[u.Category]){const g=Object.keys(r).length%H.length;r[u.Category]=H[g]}return r},{});let _=[],n=[];Object.entries(f).forEach(([r,u])=>{u.forEach((g,C)=>{n.push({...g,key:`${r}-${g.Speaker}-${C}`,date:r,delay:n.length*100})})});function a(){_.length<n.length&&(s(3,_=[..._,n[_.length]]),setTimeout(a,100))}a();function k(r){o&&!o.contains(r.target)&&s(1,i=null)}J(()=>(document.addEventListener("click",k),()=>{document.removeEventListener("click",k)}));const E=r=>s(1,i=i&&i.key===r.key?null:r);function d(r){oe[r?"unshift":"push"](()=>{o=r,s(2,o)})}return c.$$set=r=>{"data"in r&&s(6,t=r.data),"introductionText"in r&&s(0,l=r.introductionText)},[l,i,o,_,h,n,t,E,d]}class ae extends X{constructor(e){super(),Z(this,e,ge,ke,F,{data:6,introductionText:0})}}function me(c){let e,s;return e=new ae({props:{data:c[1],introductionText:c[0]}}),{c(){te(e.$$.fragment)},l(t){se(e.$$.fragment,t)},m(t,l){le(e,t,l),s=!0},p(t,l){const i={};l&2&&(i.data=t[1]),l&1&&(i.introductionText=t[0]),e.$set(i)},i(t){s||(B(e.$$.fragment,t),s=!0)},o(t){O(e.$$.fragment,t),s=!1},d(t){re(e,t)}}}function be(c){let e,s;return e=new ae({props:{data:c[1],introductionText:c[0]}}),{c(){te(e.$$.fragment)},l(t){se(e.$$.fragment,t)},m(t,l){le(e,t,l),s=!0},p(t,l){const i={};l&2&&(i.data=t[1]),l&1&&(i.introductionText=t[0]),e.$set(i)},i(t){s||(B(e.$$.fragment,t),s=!0)},o(t){O(e.$$.fragment,t),s=!1},d(t){re(e,t)}}}function ye(c){let e,s,t,l;const i=[be,me],o=[];function f(h,_){return h[1].length>0?0:1}return s=f(c),t=o[s]=i[s](c),{c(){e=b("article"),t.c(),this.h()},l(h){e=y(h,"ARTICLE",{class:!0});var _=S(e);t.l(_),_.forEach(p),this.h()},h(){v(e,"class","svelte-1dfhicv")},m(h,_){D(h,e,_),o[s].m(e,null),l=!0},p(h,[_]){let n=s;s=f(h),s===n?o[s].p(h,_):(x(),O(o[n],1,1,()=>{o[n]=null}),ee(),t=o[s],t?t.p(h,_):(t=o[s]=i[s](h),t.c()),B(t,1),t.m(e,null))},i(h){l||(B(t),l=!0)},o(h){O(t),l=!1},d(h){h&&p(e),o[s].d()}}}const R="https://docs.google.com/spreadsheets/d/1k3pYfMouxEuUSszoOD2xKOtbBdUiVMvDBWhQrxB0cHc/gviz/tq?tqx=out:csv";function Se(c,e,s){let t="",l=[],i=[];const o={introduction:"gid=931769239",speakers:"gid=0",schedule:"gid=190532547"};return J(async()=>{try{const f=await fetch(`${R}&${o.introduction}`);if(f.ok){const n=await f.text(),a=he(n);s(0,t=a.flat().join(" "))}const h=await fetch(`${R}&${o.speakers}`);if(h.ok){const n=await h.text();s(1,l=N(n,a=>({Date:a.Date,Speaker:a.Speaker,Source:a.Source,Bio:a.Bio,Picture:a.Picture,Url:a.Url,Category:a.Category,Visible:a.Visible})).filter(a=>a.Visible=="TRUE"))}const _=await fetch(`${R}&${o.schedule}`);if(_.ok){const n=await _.text();i=N(n,a=>({Date:a.Date,Time:a.Time,Event:a.Event,Speaker:a.Speaker,Category:a.Category}))}}catch(f){console.error("Error fetching or parsing data:",f)}}),[t,l]}class $e extends X{constructor(e){super(),Z(this,e,Se,ye,F,{})}}export{$e as component,Ve as universal};
