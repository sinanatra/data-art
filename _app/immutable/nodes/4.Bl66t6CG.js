import{s as x,l as _,i as h,n as i,f as a,o as E,e as u,c as d,b as p,p as m,x as w,a as V,g as $,h as H,H as D,y as S}from"../chunks/scheduler.DqNCwPbu.js";import{e as f}from"../chunks/each.CuoFfUpC.js";import{S as I,i as M}from"../chunks/index.BfffwfwO.js";import{c as O}from"../chunks/transform.F0c4RWRn.js";const q=!0,Q=Object.freeze(Object.defineProperty({__proto__:null,prerender:q},Symbol.toStringTag,{value:"Module"}));function g(n,l,r){const c=n.slice();return c[2]=l[r],c[4]=r,c}function b(n,l,r){const c=n.slice();return c[5]=l[r],c[7]=r,c}function z(n){return{c:i,l:i,m:i,p:i,d:i}}function B(n){let l,r=f(n[0]),c=[];for(let e=0;e<r.length;e+=1)c[e]=y(g(n,r,e));return{c(){l=u("div");for(let e=0;e<c.length;e+=1)c[e].c();this.h()},l(e){l=d(e,"DIV",{class:!0});var t=p(l);for(let s=0;s<c.length;s+=1)c[s].l(t);t.forEach(a),this.h()},h(){m(l,"class","container svelte-vop1sc")},m(e,t){h(e,l,t);for(let s=0;s<c.length;s+=1)c[s]&&c[s].m(l,null)},p(e,t){if(t&1){r=f(e[0]);let s;for(s=0;s<r.length;s+=1){const o=g(e,r,s);c[s]?c[s].p(o,t):(c[s]=y(o),c[s].c(),c[s].m(l,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=r.length}},d(e){e&&a(l),w(c,e)}}}function P(n){let l,r,c=n[5]+"";return{c(){l=u("div"),r=new D(!1),this.h()},l(e){l=d(e,"DIV",{class:!0});var t=p(l);r=S(t,!1),t.forEach(a),this.h()},h(){r.a=null,m(l,"class","cell svelte-vop1sc")},m(e,t){h(e,l,t),r.m(c,l)},p(e,t){t&1&&c!==(c=e[5]+"")&&r.p(c)},d(e){e&&a(l)}}}function R(n){let l,r,c=n[5]+"";return{c(){l=u("div"),r=new D(!1),this.h()},l(e){l=d(e,"DIV",{class:!0});var t=p(l);r=S(t,!1),t.forEach(a),this.h()},h(){r.a=null,m(l,"class","cell header svelte-vop1sc")},m(e,t){h(e,l,t),r.m(c,l)},p(e,t){t&1&&c!==(c=e[5]+"")&&r.p(c)},d(e){e&&a(l)}}}function k(n){let l;function r(t,s){return t[4]===0||t[7]===0?R:P}let e=r(n)(n);return{c(){e.c(),l=_()},l(t){e.l(t),l=_()},m(t,s){e.m(t,s),h(t,l,s)},p(t,s){e.p(t,s)},d(t){t&&a(l),e.d(t)}}}function y(n){let l,r,c=f(n[2]),e=[];for(let t=0;t<c.length;t+=1)e[t]=k(b(n,c,t));return{c(){l=u("div");for(let t=0;t<e.length;t+=1)e[t].c();r=V(),this.h()},l(t){l=d(t,"DIV",{class:!0});var s=p(l);for(let o=0;o<e.length;o+=1)e[o].l(s);r=$(s),s.forEach(a),this.h()},h(){m(l,"class","row svelte-vop1sc")},m(t,s){h(t,l,s);for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(l,null);H(l,r)},p(t,s){if(s&1){c=f(t[2]);let o;for(o=0;o<c.length;o+=1){const v=b(t,c,o);e[o]?e[o].p(v,s):(e[o]=k(v),e[o].c(),e[o].m(l,r))}for(;o<e.length;o+=1)e[o].d(1);e.length=c.length}},d(t){t&&a(l),w(e,t)}}}function U(n){let l;function r(t,s){return t[0].length>0?B:z}let c=r(n),e=c(n);return{c(){e.c(),l=_()},l(t){e.l(t),l=_()},m(t,s){e.m(t,s),h(t,l,s)},p(t,[s]){c===(c=r(t))&&e?e.p(t,s):(e.d(1),e=c(t),e&&(e.c(),e.m(l.parentNode,l)))},i,o:i,d(t){t&&a(l),e.d(t)}}}const j="https://docs.google.com/spreadsheets/d/1k3pYfMouxEuUSszoOD2xKOtbBdUiVMvDBWhQrxB0cHc/gviz/tq?tqx=out:csv";function C(n,l,r){let c=[];const e={schedule:"gid=649727592"};return E(async()=>{try{const t=await fetch(`${j}&${e.schedule}`);if(t.ok){const s=await t.text();r(0,c=O(s))}}catch(t){console.error("Error fetching or parsing data:",t)}}),[c]}class W extends I{constructor(l){super(),M(this,l,C,U,x,{})}}export{W as component,Q as universal};
