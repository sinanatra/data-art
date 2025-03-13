import{s as S,l as _,i as h,n as i,f as a,o as j,e as u,c as d,b as p,p as m,x,a as E,g as V,h as $,H as w,y as D}from"../chunks/scheduler.DqNCwPbu.js";import{e as f}from"../chunks/each.CuoFfUpC.js";import{S as H,i as I}from"../chunks/index.BfffwfwO.js";import{c as M}from"../chunks/transform.F0c4RWRn.js";const O=!0,Q=Object.freeze(Object.defineProperty({__proto__:null,prerender:O},Symbol.toStringTag,{value:"Module"}));function g(o,l,s){const c=o.slice();return c[2]=l[s],c[4]=s,c}function b(o,l,s){const c=o.slice();return c[5]=l[s],c[7]=s,c}function q(o){return{c:i,l:i,m:i,p:i,d:i}}function z(o){let l,s=f(o[0]),c=[];for(let e=0;e<s.length;e+=1)c[e]=y(g(o,s,e));return{c(){l=u("div");for(let e=0;e<c.length;e+=1)c[e].c();this.h()},l(e){l=d(e,"DIV",{class:!0});var t=p(l);for(let r=0;r<c.length;r+=1)c[r].l(t);t.forEach(a),this.h()},h(){m(l,"class","container svelte-1kxixaj")},m(e,t){h(e,l,t);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(l,null)},p(e,t){if(t&1){s=f(e[0]);let r;for(r=0;r<s.length;r+=1){const n=g(e,s,r);c[r]?c[r].p(n,t):(c[r]=y(n),c[r].c(),c[r].m(l,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=s.length}},d(e){e&&a(l),x(c,e)}}}function B(o){let l,s,c=o[5]+"";return{c(){l=u("div"),s=new w(!1),this.h()},l(e){l=d(e,"DIV",{class:!0});var t=p(l);s=D(t,!1),t.forEach(a),this.h()},h(){s.a=null,m(l,"class","cell svelte-1kxixaj")},m(e,t){h(e,l,t),s.m(c,l)},p(e,t){t&1&&c!==(c=e[5]+"")&&s.p(c)},d(e){e&&a(l)}}}function P(o){let l,s,c=o[5]+"";return{c(){l=u("div"),s=new w(!1),this.h()},l(e){l=d(e,"DIV",{class:!0});var t=p(l);s=D(t,!1),t.forEach(a),this.h()},h(){s.a=null,m(l,"class","cell header svelte-1kxixaj")},m(e,t){h(e,l,t),s.m(c,l)},p(e,t){t&1&&c!==(c=e[5]+"")&&s.p(c)},d(e){e&&a(l)}}}function k(o){let l;function s(t,r){return t[4]===0||t[7]===0?P:B}let e=s(o)(o);return{c(){e.c(),l=_()},l(t){e.l(t),l=_()},m(t,r){e.m(t,r),h(t,l,r)},p(t,r){e.p(t,r)},d(t){t&&a(l),e.d(t)}}}function y(o){let l,s,c=f(o[2]),e=[];for(let t=0;t<c.length;t+=1)e[t]=k(b(o,c,t));return{c(){l=u("div");for(let t=0;t<e.length;t+=1)e[t].c();s=E(),this.h()},l(t){l=d(t,"DIV",{class:!0});var r=p(l);for(let n=0;n<e.length;n+=1)e[n].l(r);s=V(r),r.forEach(a),this.h()},h(){m(l,"class","row svelte-1kxixaj")},m(t,r){h(t,l,r);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,null);$(l,s)},p(t,r){if(r&1){c=f(t[2]);let n;for(n=0;n<c.length;n+=1){const v=b(t,c,n);e[n]?e[n].p(v,r):(e[n]=k(v),e[n].c(),e[n].m(l,s))}for(;n<e.length;n+=1)e[n].d(1);e.length=c.length}},d(t){t&&a(l),x(e,t)}}}function R(o){let l;function s(t,r){return t[0].length>0?z:q}let c=s(o),e=c(o);return{c(){e.c(),l=_()},l(t){e.l(t),l=_()},m(t,r){e.m(t,r),h(t,l,r)},p(t,[r]){c===(c=s(t))&&e?e.p(t,r):(e.d(1),e=c(t),e&&(e.c(),e.m(l.parentNode,l)))},i,o:i,d(t){t&&a(l),e.d(t)}}}const U="https://docs.google.com/spreadsheets/d/1k3pYfMouxEuUSszoOD2xKOtbBdUiVMvDBWhQrxB0cHc/gviz/tq?tqx=out:csv";function C(o,l,s){let c=[];const e={schedule:"gid=649727592"};return j(async()=>{try{const t=await fetch(`${U}&${e.schedule}`);if(t.ok){const r=await t.text();s(0,c=M(r))}}catch(t){console.error("Error fetching or parsing data:",t)}}),[c]}class W extends H{constructor(l){super(),I(this,l,C,R,S,{})}}export{W as component,Q as universal};
