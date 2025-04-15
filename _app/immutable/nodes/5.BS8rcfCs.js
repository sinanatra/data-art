import{s as Y,e as b,c as k,b as y,f as g,p as E,q as U,i as w,t as P,a as R,d as V,g as j,h as _,j as x,I as Z,o as ee,n as v}from"../chunks/scheduler.DqNCwPbu.js";import{S as F,i as G,g as J,c as X,a as I,t as M,f as te,h as ae,b as le,d as se,m as re,e as ne}from"../chunks/index.BfffwfwO.js";import{a as oe}from"../chunks/transform.F0c4RWRn.js";import{e as H,u as ie,o as ce}from"../chunks/each.CuoFfUpC.js";import{p as K,f as ue,a as fe}from"../chunks/stores.xHvTW30t.js";const he=!0,Ce=Object.freeze(Object.defineProperty({__proto__:null,prerender:he},Symbol.toStringTag,{value:"Module"}));function Q(c,t,e){const l=c.slice();return l[6]=t[e],l}function W(c,t){let e,l,n=t[6].displayDate+"",o,i,s,a=t[6].Time+"",r,u,d,m=t[6].Speaker+"",C,q,$,D=t[6].Event+"",T,B,O,S,p;return{key:c,first:null,c(){e=b("div"),l=b("p"),o=P(n),i=R(),s=b("p"),r=P(a),u=R(),d=b("p"),C=P(m),q=R(),$=b("p"),T=P(D),B=R(),this.h()},l(h){e=k(h,"DIV",{class:!0,style:!0});var f=y(e);l=k(f,"P",{class:!0});var z=y(l);o=V(z,n),z.forEach(g),i=j(f),s=k(f,"P",{class:!0});var L=y(s);r=V(L,a),L.forEach(g),u=j(f),d=k(f,"P",{class:!0});var N=y(d);C=V(N,m),N.forEach(g),q=j(f),$=k(f,"P",{class:!0});var A=y($);T=V(A,D),A.forEach(g),B=j(f),f.forEach(g),this.h()},h(){E(l,"class","date svelte-1lx77b1"),E(s,"class","time svelte-1lx77b1"),E(d,"class","speaker svelte-1lx77b1"),E($,"class","event-title svelte-1lx77b1"),E(e,"class","grid-row svelte-1lx77b1"),U(e,"background-image","linear-gradient(to left, "+t[1][t[6].Category]+",var(--highlite-1))"),this.first=e},m(h,f){w(h,e,f),_(e,l),_(l,o),_(e,i),_(e,s),_(s,r),_(e,u),_(e,d),_(d,C),_(e,q),_(e,$),_($,T),_(e,B),p=!0},p(h,f){t=h,(!p||f&1)&&n!==(n=t[6].displayDate+"")&&x(o,n),(!p||f&1)&&a!==(a=t[6].Time+"")&&x(r,a),(!p||f&1)&&m!==(m=t[6].Speaker+"")&&x(C,m),(!p||f&1)&&D!==(D=t[6].Event+"")&&x(T,D),(!p||f&1)&&U(e,"background-image","linear-gradient(to left, "+t[1][t[6].Category]+",var(--highlite-1))")},i(h){p||(h&&Z(()=>{p&&(S&&S.end(1),O=te(e,ue,{y:500,duration:300}),O.start())}),p=!0)},o(h){O&&O.invalidate(),h&&(S=ae(e,fe,{})),p=!1},d(h){h&&g(e),h&&S&&S.end()}}}function _e(c){let t,e=[],l=new Map,n,o=H(c[0]);const i=s=>s[6].key;for(let s=0;s<o.length;s+=1){let a=Q(c,o,s),r=i(a);l.set(r,e[s]=W(r,a))}return{c(){t=b("section");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=k(s,"SECTION",{class:!0,style:!0});var a=y(t);for(let r=0;r<e.length;r+=1)e[r].l(a);a.forEach(g),this.h()},h(){E(t,"class","grid-container svelte-1lx77b1"),U(t,"min-height",c[2].length*2+"px")},m(s,a){w(s,t,a);for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(t,null);n=!0},p(s,[a]){a&3&&(o=H(s[0]),J(),e=ie(e,a,i,1,s,o,l,t,ce,W,null,Q),X())},i(s){if(!n){for(let a=0;a<o.length;a+=1)I(e[a]);n=!0}},o(s){for(let a=0;a<e.length;a+=1)M(e[a]);n=!1},d(s){s&&g(t);for(let a=0;a<e.length;a+=1)e[a].d()}}}function de(c,t,e){let{data:l}=t;const n=l.reduce((r,u)=>(r[u.Date]||(r[u.Date]=[]),r[u.Date].push(u),r),{}),o=l.reduce((r,u)=>{if(!r[u.Category]){const d=Object.keys(r).length%K.length;r[u.Category]=K[d]}return r},{});let i=[],s=[];Object.entries(n).forEach(([r,u])=>{u.forEach((d,m)=>{s.push({...d,key:`${r}-${d.Event}-${m}`,displayDate:m===0?r:""})})});function a(){i.length<s.length&&(e(0,i=[...i,s[i.length]]),setTimeout(a,100))}return a(),c.$$set=r=>{"data"in r&&e(3,l=r.data)},[i,o,s,l]}class pe extends F{constructor(t){super(),G(this,t,de,_e,Y,{data:3})}}function ge(c){return{c:v,l:v,m:v,p:v,i:v,o:v,d:v}}function me(c){let t,e;return t=new pe({props:{data:c[0]}}),{c(){le(t.$$.fragment)},l(l){se(t.$$.fragment,l)},m(l,n){re(t,l,n),e=!0},p(l,n){const o={};n&1&&(o.data=l[0]),t.$set(o)},i(l){e||(I(t.$$.fragment,l),e=!0)},o(l){M(t.$$.fragment,l),e=!1},d(l){ne(t,l)}}}function ve(c){let t,e,l,n;const o=[me,ge],i=[];function s(a,r){return a[0].length>0?0:1}return e=s(c),l=i[e]=o[e](c),{c(){t=b("article"),l.c(),this.h()},l(a){t=k(a,"ARTICLE",{class:!0});var r=y(t);l.l(r),r.forEach(g),this.h()},h(){E(t,"class","svelte-1d2aph0")},m(a,r){w(a,t,r),i[e].m(t,null),n=!0},p(a,[r]){let u=e;e=s(a),e===u?i[e].p(a,r):(J(),M(i[u],1,1,()=>{i[u]=null}),X(),l=i[e],l?l.p(a,r):(l=i[e]=o[e](a),l.c()),I(l,1),l.m(t,null))},i(a){n||(I(l),n=!0)},o(a){M(l),n=!1},d(a){a&&g(t),i[e].d()}}}const be="https://docs.google.com/spreadsheets/d/1k3pYfMouxEuUSszoOD2xKOtbBdUiVMvDBWhQrxB0cHc/gviz/tq?tqx=out:csv";function ke(c,t,e){let l=[];const n={schedule:"gid=190532547"};return ee(async()=>{try{const o=await fetch(`${be}&${n.schedule}`);if(o.ok){const i=await o.text();e(0,l=oe(i,s=>({Date:s.Date,Time:s.Time,Event:s.Event,Speaker:s.Speaker,Category:s.Category,Visible:s.Visible})).filter(s=>s.Visible=="TRUE"))}}catch(o){console.error("Error fetching or parsing data:",o)}}),[l]}class Te extends F{constructor(t){super(),G(this,t,ke,ve,Y,{})}}export{Te as component,Ce as universal};
