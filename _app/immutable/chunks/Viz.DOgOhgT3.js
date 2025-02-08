import{s as G,e as z,c as V,b as j,f as I,p as E,i as P,B as Y,n as D,C as J,o as K,k as Q,u as Z}from"./scheduler.DK6SwrJy.js";import{S as A,i as O,b as p,d as $,m as ee,a as te,t as ie,e as ne}from"./index.vhr6xDWb.js";import{p as se}from"./stores.DXxUSKai.js";import{_ as ae}from"./preload-helper.C1FmrZbK.js";function re(l){let i,t,a;return{c(){i=z("div"),this.h()},l(n){i=V(n,"DIV",{style:!0,class:!0}),j(i).forEach(I),this.h()},h(){E(i,"style",l[0]),E(i,"class","m-0")},m(n,f){P(n,i,f),t||(a=Y(l[1].call(null,i)),t=!0)},p(n,[f]){f&1&&E(i,"style",n[0])},i:D,o:D,d(n){n&&I(i),t=!1,a()}}}function ce(l,i){return i.forEach(([t,a])=>l[t]=a),l}function le(l,i,t){let{target:a=void 0}=i,{sketch:n=void 0}=i,{parentDivStyle:f="display: block;"}=i,{debug:h=!1}=i,_;const y=J(),b={ref(){y("ref",a)},instance(){y("instance",_)}};function d(r){return t(2,a=r),{destroy(){t(2,a=void 0)}}}return K(async()=>{const r=await ae(()=>import("./p5.min.BwJiqC9S.js").then(c=>c.p),[],import.meta.url),{default:o}=r,s=Object.entries(r).filter(([c,x])=>x instanceof Function&&c[0]!=="_"&&c!=="default");h&&console.log("available p5 native classes",s),_=new o(c=>(c=ce(c,s),h&&console.log("p5 instance",c),window._p5Instance=c,n(c)),a),b.ref(),b.instance()}),l.$$set=r=>{"target"in r&&t(2,a=r.target),"sketch"in r&&t(3,n=r.sketch),"parentDivStyle"in r&&t(0,f=r.parentDivStyle),"debug"in r&&t(4,h=r.debug)},[f,d,a,n,h]}class fe extends A{constructor(i){super(),O(this,i,le,re,G,{target:2,sketch:3,parentDivStyle:0,debug:4})}}function oe(l){let i,t,a;return t=new fe({props:{sketch:l[1]}}),{c(){i=z("div"),p(t.$$.fragment),this.h()},l(n){i=V(n,"DIV",{class:!0});var f=j(i);$(t.$$.fragment,f),f.forEach(I),this.h()},h(){E(i,"class","viz-container svelte-1c5n77j")},m(n,f){P(n,i,f),ee(t,i,null),l[12](i),a=!0},p:D,i(n){a||(te(t.$$.fragment,n),a=!0)},o(n){ie(t.$$.fragment,n),a=!1},d(n){n&&I(i),ne(t),l[12](null)}}}function ge(l,i,t){let a;Q(l,se,e=>t(11,a=e));let{asciiGradient:n="▚▀▓▒░#@■□▪▫/*+=-~◆◇⬤▚▀▓▒░◯○^:,._▚▀▓▒░#@■□▪▫:·"}=i,{grid:f=15}=i,{scale:h=.01}=i,{speed:_=.005}=i,{highlite:y="#0000ff"}=i,{imageURL:b=""}=i,{imageWidth:d=1200}=i,{imageHeight:r=800}=i,o,U=0,s,c=null,x=e=>{e.setup=()=>{const g=o.offsetWidth,u=o.offsetHeight;e.createCanvas(g,u),e.textFont("Courier"),e.textAlign(e.CENTER,e.CENTER),e.noStroke(),e.frameRate(20),e._asciiGradient=n,e._grid=f,e._scale=h,e._speed=_,e._highlite=y,e._imageURL=b,e._imageWidth=d,e._imageHeight=r,t(10,s=e)},e.draw=()=>{e.background("#efefef");const g=1;if(U+=g*e._speed,T(U,g,e._scale),e._imageURL&&(!c||c.url!==e._imageURL)&&e.loadImage(e._imageURL,u=>{u.url=e._imageURL,c=u}),c){let u=f*3,C=e._imageWidth-2*u,k=e._imageHeight-2*u,H=Math.min(C/c.width,k/c.height),m=c.width*H,L=c.height*H,S=(e._imageWidth-m)/2,R=(e._imageHeight-L)/2;e.image(c,S,R,m,L)}};function T(g,u,C){const k=e.floor(e.width/e._grid),H=e.floor(e.height/e._grid),m=e.width/k;e.textSize(m);const L=g*.9,S=g*.9;for(let R=0;R<H;R++)for(let w=0;w<k;w++){const F=e.noise((w+L)*C,(R+S)*C,g),M=e.sin(g+R*.1),N=e.cos(g+w*.1),q=e.floor(e.map(F,0,1,0,e._asciiGradient.length-1)),W=e._asciiGradient.charAt(q),B=w*m+m/2+M,X=R*m+m/2+N;W==="▪"||W==="○"||W==="◇"?e.fill(e._highlite):e.fill("#ffffff"),e.push(),e.translate(B,X),e.text(W,0,0),e.pop()}}e.windowResized=()=>{e.resizeCanvas(o==null?void 0:o.offsetWidth,o==null?void 0:o.offsetHeight)}};function v(e){Z[e?"unshift":"push"](()=>{o=e,t(0,o)})}return l.$$set=e=>{"asciiGradient"in e&&t(2,n=e.asciiGradient),"grid"in e&&t(3,f=e.grid),"scale"in e&&t(4,h=e.scale),"speed"in e&&t(5,_=e.speed),"highlite"in e&&t(6,y=e.highlite),"imageURL"in e&&t(7,b=e.imageURL),"imageWidth"in e&&t(8,d=e.imageWidth),"imageHeight"in e&&t(9,r=e.imageHeight)},l.$$.update=()=>{l.$$.dirty&2044&&s&&(t(10,s._asciiGradient=n,s),t(10,s._grid=f,s),t(10,s._scale=h,s),t(10,s._speed=_,s),t(10,s._highlite=y,s),t(10,s._imageURL=b,s),t(10,s._imageWidth=d,s),t(10,s._imageHeight=r,s)),l.$$.dirty&3840&&s&&d&&r&&a.route=="/toolkit"&&s.resizeCanvas(d,r)},[o,x,n,f,h,_,y,b,d,r,s,a,v]}class _e extends A{constructor(i){super(),O(this,i,ge,oe,G,{asciiGradient:2,grid:3,scale:4,speed:5,highlite:6,imageURL:7,imageWidth:8,imageHeight:9})}}export{_e as V};
