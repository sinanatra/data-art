import{s as x,e as p,c as b,b as D,f as m,p as _,i as I,R as se,n as S,S as ne,o as Y,r as ae,a as C,g as L,x as G,h as v,t as J,d as K,j as Q,T as re,U as le,V as ie,W as oe}from"../chunks/scheduler.CcH826MA.js";import{S as M,i as z,b as R,d as A,m as P,a as T,t as H,e as O}from"../chunks/index.CeglsHge.js";import{_ as ce}from"../chunks/preload-helper.C1FmrZbK.js";import{b as F}from"../chunks/paths.BDJa8OFr.js";function fe(i){let e,s,n;return{c(){e=p("div"),this.h()},l(r){e=b(r,"DIV",{style:!0,class:!0}),D(e).forEach(m),this.h()},h(){_(e,"style",i[0]),_(e,"class","m-0")},m(r,c){I(r,e,c),s||(n=se(i[1].call(null,e)),s=!0)},p(r,[c]){c&1&&_(e,"style",r[0])},i:S,o:S,d(r){r&&m(e),s=!1,n()}}}function de(i,e){return e.forEach(([s,n])=>i[s]=n),i}function ue(i,e,s){let{target:n=void 0}=e,{sketch:r=void 0}=e,{parentDivStyle:c="display: block;"}=e,{debug:t=!1}=e,a;const l=ne(),o={ref(){l("ref",n)},instance(){l("instance",a)}};function g(f){return s(2,n=f),{destroy(){s(2,n=void 0)}}}return Y(async()=>{const f=await ce(()=>import("../chunks/p5.min.BwJiqC9S.js").then(u=>u.p),[],import.meta.url),{default:d}=f,E=Object.entries(f).filter(([u,w])=>w instanceof Function&&u[0]!=="_"&&u!=="default");t&&console.log("available p5 native classes",E),a=new d(u=>(u=de(u,E),t&&console.log("p5 instance",u),window._p5Instance=u,r(u)),n),o.ref(),o.instance()}),i.$$set=f=>{"target"in f&&s(2,n=f.target),"sketch"in f&&s(3,r=f.sketch),"parentDivStyle"in f&&s(0,c=f.parentDivStyle),"debug"in f&&s(4,t=f.debug)},[c,g,n,r,t]}class he extends M{constructor(e){super(),z(this,e,ue,fe,x,{target:2,sketch:3,parentDivStyle:0,debug:4})}}function me(i){let e,s,n;return s=new he({props:{sketch:i[1]}}),{c(){e=p("div"),R(s.$$.fragment),this.h()},l(r){e=b(r,"DIV",{class:!0});var c=D(e);A(s.$$.fragment,c),c.forEach(m),this.h()},h(){_(e,"class","viz-container svelte-rudtad")},m(r,c){I(r,e,c),P(s,e,null),i[2](e),n=!0},p:S,i(r){n||(T(s.$$.fragment,r),n=!0)},o(r){H(s.$$.fragment,r),n=!1},d(r){r&&m(e),O(s),i[2](null)}}}function _e(i,e,s){let n;const r=t=>{let a=200,l=2,o=[],g=[],f;t.setup=()=>{f=n?n.offsetHeight:300,t.createCanvas(t.windowWidth-10,f),t.noStroke(),t.rectMode(t.CORNER),d(),y(),t.background(255)},t.draw=()=>{t.background(255);const h=t.width/a,k=t.height/l,W=t.millis()*.01;for(let $=0;$<l;$++){const j=o[$]*.01,N=g[$%g.length];for(let V=0;V<a;V++){const q=V*h,Z=$*k,B=E(V,$,W,j,N),ee=t.map(B,0,1,0,255),te=t.map(B,0,1,k*.1,k);t.fill(245,245,245,ee),t.rect(q,Z,h,te)}}};const d=()=>{o=[];for(let h=0;h<l;h++)o.push(t.random(-2,2))},y=()=>{g=[];for(let h=0;h<l;h++)g.push(t.random(.1,.9))},E=(h,k,W,$,j)=>{const N=t.createVector(h,k),V=t.createVector(-W*Math.max(a,l)*$,0),q=t.createVector(t.floor(N.x+V.x),t.floor(N.y+V.y));return u(j,w(q))},u=(h,k)=>k<h?0:1,w=h=>t.fract(Math.sin(h.x*12.9898+h.y*78.233)*43758.5453123);t.windowResized=()=>{f=n?n.offsetHeight:300,t.resizeCanvas(t.windowWidth-10,f)}};function c(t){ae[t?"unshift":"push"](()=>{n=t,s(0,n)})}return[n,r,c]}class ge extends M{constructor(e){super(),z(this,e,_e,me,x,{})}}function U(i){let e;return{c(){e=J(i[1])},l(s){e=K(s,i[1])},m(s,n){I(s,e,n)},p(s,n){n&2&&Q(e,s[1])},d(s){s&&m(e)}}}function X(i){let e;return{c(){e=J(i[2])},l(s){e=K(s,i[2])},m(s,n){I(s,e,n)},p(s,n){n&4&&Q(e,s[2])},d(s){s&&m(e)}}}function ve(i){let e,s,n,r="|",c,t=i[0]&&U(i),a=i[0]&&X(i);return{c(){e=p("section"),t&&t.c(),s=C(),n=p("span"),n.textContent=r,c=C(),a&&a.c(),this.h()},l(l){e=b(l,"SECTION",{class:!0});var o=D(e);t&&t.l(o),s=L(o),n=b(o,"SPAN",{class:!0,"data-svelte-h":!0}),G(n)!=="svelte-1dytxz4"&&(n.textContent=r),c=L(o),a&&a.l(o),o.forEach(m),this.h()},h(){_(n,"class","divider svelte-b54y35"),_(e,"class","svelte-b54y35")},m(l,o){I(l,e,o),t&&t.m(e,null),v(e,s),v(e,n),v(e,c),a&&a.m(e,null)},p(l,[o]){l[0]?t?t.p(l,o):(t=U(l),t.c(),t.m(e,s)):t&&(t.d(1),t=null),l[0]?a?a.p(l,o):(a=X(l),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:S,o:S,d(l){l&&m(e),t&&t.d(),a&&a.d()}}}const pe="data",be="art",ye=500,we=3e3;function $e(i,e,s){let n=!1,r="",c="";const t=[...pe].reverse(),a=[...be];Y(()=>{s(0,n=!0),l()});function l(){let o=0;s(1,r=""),s(2,c="");const g=Math.max(t.length,a.length),f=setInterval(()=>{o<t.length&&s(1,r=t[o]+r),o<a.length&&s(2,c+=a[o]),o++,o>=g&&(clearInterval(f),setTimeout(()=>{l()},we))},ye)}return[n,r,c]}class De extends M{constructor(e){super(),z(this,e,$e,ve,x,{})}}function Ee(i){let e,s,n,r,c,t,a,l,o,g=`<a href="${F}/" class="svelte-dbdiut">Participants</a> |
            <a href="${F}/schedule" class="svelte-dbdiut">Schedule</a> |`,f;return r=new De({}),a=new ge({}),{c(){e=p("header"),s=p("div"),n=p("div"),R(r.$$.fragment),c=C(),t=p("div"),R(a.$$.fragment),l=C(),o=p("div"),o.innerHTML=g,this.h()},l(d){e=b(d,"HEADER",{class:!0});var y=D(e);s=b(y,"DIV",{class:!0});var E=D(s);n=b(E,"DIV",{class:!0});var u=D(n);A(r.$$.fragment,u),u.forEach(m),E.forEach(m),c=L(y),t=b(y,"DIV",{class:!0});var w=D(t);A(a.$$.fragment,w),l=L(w),o=b(w,"DIV",{class:!0,"data-svelte-h":!0}),G(o)!=="svelte-1aw603b"&&(o.innerHTML=g),w.forEach(m),y.forEach(m),this.h()},h(){_(n,"class","header-title svelte-dbdiut"),_(s,"class","header-grid svelte-dbdiut"),_(o,"class","links svelte-dbdiut"),_(t,"class","viz svelte-dbdiut"),_(e,"class","svelte-dbdiut")},m(d,y){I(d,e,y),v(e,s),v(s,n),P(r,n,null),v(e,c),v(e,t),P(a,t,null),v(t,l),v(t,o),f=!0},p:S,i(d){f||(T(r.$$.fragment,d),T(a.$$.fragment,d),f=!0)},o(d){H(r.$$.fragment,d),H(a.$$.fragment,d),f=!1},d(d){d&&m(e),O(r),O(a)}}}class ke extends M{constructor(e){super(),z(this,e,null,Ee,x,{})}}function Ve(i){let e,s,n,r;s=new ke({});const c=i[1].default,t=re(c,i,i[0],null);return{c(){e=p("main"),R(s.$$.fragment),n=C(),t&&t.c(),this.h()},l(a){e=b(a,"MAIN",{class:!0});var l=D(e);A(s.$$.fragment,l),n=L(l),t&&t.l(l),l.forEach(m),this.h()},h(){_(e,"class","svelte-1ay00s4")},m(a,l){I(a,e,l),P(s,e,null),v(e,n),t&&t.m(e,null),r=!0},p(a,[l]){t&&t.p&&(!r||l&1)&&le(t,c,a,a[0],r?oe(c,a[0],l,null):ie(a[0]),null)},i(a){r||(T(s.$$.fragment,a),T(t,a),r=!0)},o(a){H(s.$$.fragment,a),H(t,a),r=!1},d(a){a&&m(e),O(s),t&&t.d(a)}}}function Ie(i,e,s){let{$$slots:n={},$$scope:r}=e;return i.$$set=c=>{"$$scope"in c&&s(0,r=c.$$scope)},[r,n]}class He extends M{constructor(e){super(),z(this,e,Ie,Ve,x,{})}}export{He as component};
