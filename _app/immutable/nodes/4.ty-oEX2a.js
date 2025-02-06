import{s as F,e as v,c as k,b as y,f as _,p as b,q as z,i as B,t as T,a as P,d as O,g as R,h,j as V,A as x,o as ee,n as w}from"../chunks/scheduler.BWX28_B0.js";import{S as G,i as J,g as X,c as Z,a as j,t as M,f as te,h as ae,b as se,d as le,m as re,e as ne}from"../chunks/index.B6lFNMyu.js";import{e as K,u as oe,o as ie,a as ce}from"../chunks/transform.C8r6f8bK.js";import{p as Q,f as ue,a as fe}from"../chunks/stores.DOHNUqzZ.js";const de=!0,Se=Object.freeze(Object.defineProperty({__proto__:null,prerender:de},Symbol.toStringTag,{value:"Module"}));function W(c,t,e){const a=c.slice();return a[6]=t[e],a}function Y(c,t){let e,a,n=t[6].displayDate+"",o,i,l,s=t[6].Time+"",r,u,p,m=t[6].Speaker+"",S,I,E,$=t[6].Event+"",C,U,q,D,g;return{key:c,first:null,c(){e=v("div"),a=v("p"),o=T(n),i=P(),l=v("p"),r=T(s),u=P(),p=v("p"),S=T(m),I=P(),E=v("p"),C=T($),U=P(),this.h()},l(d){e=k(d,"DIV",{class:!0,style:!0});var f=y(e);a=k(f,"P",{class:!0});var A=y(a);o=O(A,n),A.forEach(_),i=R(f),l=k(f,"P",{class:!0});var L=y(l);r=O(L,s),L.forEach(_),u=R(f),p=k(f,"P",{class:!0});var N=y(p);S=O(N,m),N.forEach(_),I=R(f),E=k(f,"P",{class:!0});var H=y(E);C=O(H,$),H.forEach(_),U=R(f),f.forEach(_),this.h()},h(){b(a,"class","date svelte-1mdoqcf"),b(l,"class","time svelte-1mdoqcf"),b(p,"class","speaker svelte-1mdoqcf"),b(E,"class","event-title svelte-1mdoqcf"),b(e,"class","grid-row svelte-1mdoqcf"),z(e,"background-image","linear-gradient(to left, "+t[1][t[6].Category]+",var(--highlite-1))"),this.first=e},m(d,f){B(d,e,f),h(e,a),h(a,o),h(e,i),h(e,l),h(l,r),h(e,u),h(e,p),h(p,S),h(e,I),h(e,E),h(E,C),h(e,U),g=!0},p(d,f){t=d,(!g||f&1)&&n!==(n=t[6].displayDate+"")&&V(o,n),(!g||f&1)&&s!==(s=t[6].Time+"")&&V(r,s),(!g||f&1)&&m!==(m=t[6].Speaker+"")&&V(S,m),(!g||f&1)&&$!==($=t[6].Event+"")&&V(C,$),(!g||f&1)&&z(e,"background-image","linear-gradient(to left, "+t[1][t[6].Category]+",var(--highlite-1))")},i(d){g||(d&&x(()=>{g&&(D&&D.end(1),q=te(e,ue,{y:500,duration:300}),q.start())}),g=!0)},o(d){q&&q.invalidate(),d&&(D=ae(e,fe,{})),g=!1},d(d){d&&_(e),d&&D&&D.end()}}}function he(c){let t,e=[],a=new Map,n,o=K(c[0]);const i=l=>l[6].key;for(let l=0;l<o.length;l+=1){let s=W(c,o,l),r=i(s);a.set(r,e[l]=Y(r,s))}return{c(){t=v("section");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=k(l,"SECTION",{class:!0,style:!0});var s=y(t);for(let r=0;r<e.length;r+=1)e[r].l(s);s.forEach(_),this.h()},h(){b(t,"class","grid-container svelte-1mdoqcf"),z(t,"min-height",c[2].length*2+"px")},m(l,s){B(l,t,s);for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(t,null);n=!0},p(l,[s]){s&3&&(o=K(l[0]),X(),e=oe(e,s,i,1,l,o,a,t,ie,Y,null,W),Z())},i(l){if(!n){for(let s=0;s<o.length;s+=1)j(e[s]);n=!0}},o(l){for(let s=0;s<e.length;s+=1)M(e[s]);n=!1},d(l){l&&_(t);for(let s=0;s<e.length;s+=1)e[s].d()}}}function _e(c,t,e){let{data:a}=t;const n=a.reduce((r,u)=>(r[u.Date]||(r[u.Date]=[]),r[u.Date].push(u),r),{}),o=a.reduce((r,u)=>{if(!r[u.Category]){const p=Object.keys(r).length%Q.length;r[u.Category]=Q[p]}return r},{});let i=[],l=[];Object.entries(n).forEach(([r,u])=>{u.forEach((p,m)=>{l.push({...p,key:`${r}-${p.Event}-${m}`,displayDate:m===0?r:""})})});function s(){i.length<l.length&&(e(0,i=[...i,l[i.length]]),setTimeout(s,100))}return s(),c.$$set=r=>{"data"in r&&e(3,a=r.data)},[i,o,l,a]}class pe extends G{constructor(t){super(),J(this,t,_e,he,F,{data:3})}}function ge(c){let t;return{c(){t=v("p")},l(e){t=k(e,"P",{}),y(t).forEach(_)},m(e,a){B(e,t,a)},p:w,i:w,o:w,d(e){e&&_(t)}}}function me(c){let t,e;return t=new pe({props:{data:c[0]}}),{c(){se(t.$$.fragment)},l(a){le(t.$$.fragment,a)},m(a,n){re(t,a,n),e=!0},p(a,n){const o={};n&1&&(o.data=a[0]),t.$set(o)},i(a){e||(j(t.$$.fragment,a),e=!0)},o(a){M(t.$$.fragment,a),e=!1},d(a){ne(t,a)}}}function ve(c){let t,e,a,n;const o=[me,ge],i=[];function l(s,r){return s[0].length>0?0:1}return e=l(c),a=i[e]=o[e](c),{c(){t=v("article"),a.c(),this.h()},l(s){t=k(s,"ARTICLE",{class:!0});var r=y(t);a.l(r),r.forEach(_),this.h()},h(){b(t,"class","svelte-1dfhicv")},m(s,r){B(s,t,r),i[e].m(t,null),n=!0},p(s,[r]){let u=e;e=l(s),e===u?i[e].p(s,r):(X(),M(i[u],1,1,()=>{i[u]=null}),Z(),a=i[e],a?a.p(s,r):(a=i[e]=o[e](s),a.c()),j(a,1),a.m(t,null))},i(s){n||(j(a),n=!0)},o(s){M(a),n=!1},d(s){s&&_(t),i[e].d()}}}const ke="https://docs.google.com/spreadsheets/d/1k3pYfMouxEuUSszoOD2xKOtbBdUiVMvDBWhQrxB0cHc/gviz/tq?tqx=out:csv";function ye(c,t,e){let a=[];const n={schedule:"gid=190532547"};return ee(async()=>{try{const o=await fetch(`${ke}&${n.schedule}`);if(o.ok){const i=await o.text();e(0,a=ce(i,l=>({Date:l.Date,Time:l.Time,Event:l.Event,Speaker:l.Speaker,Category:l.Category,Visible:l.Visible})).filter(l=>l.Visible=="TRUE"))}}catch(o){console.error("Error fetching or parsing data:",o)}}),[a]}class Ce extends G{constructor(t){super(),J(this,t,ye,ve,F,{})}}export{Ce as component,Se as universal};
