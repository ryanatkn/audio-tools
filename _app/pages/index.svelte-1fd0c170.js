var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(r)for(var n of r(t))s.call(t,n)&&u(e,n,t[n]);return e},o=(e,r)=>t(e,n(r)),a=(e,t)=>{var n={};for(var u in e)l.call(e,u)&&t.indexOf(u)<0&&(n[u]=e[u]);if(null!=e&&r)for(var u of r(e))t.indexOf(u)<0&&s.call(e,u)&&(n[u]=e[u]);return n};import{S as i,i as p,s as m,e as d,k as f,t as $,c as h,a as v,n as g,g as y,d as _,b,f as T,F as x,I as E,H as w,J as O,K as N,j as k,m as q,o as U,x as I,u as A,v as D,L as V,D as P,G as B,M as L,r as M,w as j,l as S,N as R,O as C,h as G,C as z,P as F,Q as H,R as K,T as Y,U as J,V as Q}from"../chunks/vendor-053f67d5.js";const W=e=>Math.pow(e,2.2);function X(e){let t;return{c(){t=$("🔊")},l(e){t=y(e,"🔊")},m(e,n){T(e,t,n)},d(e){e&&_(t)}}}function Z(e){let t;return{c(){t=$("🔇")},l(e){t=y(e,"🔇")},m(e,n){T(e,t,n)},d(e){e&&_(t)}}}function ee(e){let t,n,r,l,s,u,c,o,a,i,p,m,N,k;function q(e,t){return e[1]?Z:X}let U=q(e),I=U(e);return{c(){t=d("div"),n=d("label"),r=d("input"),s=f(),u=d("span"),c=$("%"),o=f(),a=d("label"),i=d("input"),p=f(),m=d("button"),I.c(),this.h()},l(e){t=h(e,"DIV",{class:!0});var l=v(t);n=h(l,"LABEL",{});var d=v(n);r=h(d,"INPUT",{class:!0,type:!0,step:!0,min:!0,max:!0}),s=g(d),u=h(d,"SPAN",{class:!0});var f=v(u);c=y(f,"%"),f.forEach(_),d.forEach(_),o=g(l),a=h(l,"LABEL",{});var $=v(a);i=h($,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),$.forEach(_),p=g(l),m=h(l,"BUTTON",{type:!0});var b=v(m);I.l(b),b.forEach(_),l.forEach(_),this.h()},h(){b(r,"class","percent svelte-1l0y4sp"),b(r,"type","number"),r.value=l=Math.round(100*e[0]),b(r,"step","1"),b(r,"min","0"),b(r,"max","100"),b(u,"class","label-text"),b(i,"type","range"),b(i,"min",0),b(i,"max",1),b(i,"step",.01),i.value=e[0],b(i,"class","svelte-1l0y4sp"),b(m,"type","button"),b(t,"class","volume-control svelte-1l0y4sp")},m(l,d){T(l,t,d),x(t,n),x(n,r),x(n,s),x(n,u),x(u,c),x(t,o),x(t,a),x(a,i),x(t,p),x(t,m),I.m(m,null),N||(k=[E(r,"input",e[5]),E(i,"input",e[6]),E(m,"click",e[7])],N=!0)},p(e,[t]){1&t&&l!==(l=Math.round(100*e[0]))&&(r.value=l),1&t&&(i.value=e[0]),U!==(U=q(e))&&(I.d(1),I=U(e),I&&(I.c(),I.m(m,null)))},i:w,o:w,d(e){e&&_(t),I.d(),N=!1,O(k)}}}function te(e,t,n){let{volume:r}=t,{muted:l}=t,{set_volume:s}=t,{mute:u}=t,{unmute:c}=t;return e.$$set=e=>{"volume"in e&&n(0,r=e.volume),"muted"in e&&n(1,l=e.muted),"set_volume"in e&&n(2,s=e.set_volume),"mute"in e&&n(3,u=e.mute),"unmute"in e&&n(4,c=e.unmute)},[r,l,s,u,c,e=>s(Number(e.currentTarget.value)/100),e=>s(Number(e.currentTarget.value)),()=>l?c():u()]}class ne extends i{constructor(e){super(),p(this,e,te,ee,m,{volume:0,muted:1,set_volume:2,mute:3,unmute:4})}}function re(e){let t;return{c(){t=$("⇔")},l(e){t=y(e,"⇔")},m(e,n){T(e,t,n)},d(e){e&&_(t)}}}function le(e){let t;return{c(){t=$("⇒")},l(e){t=y(e,"⇒")},m(e,n){T(e,t,n)},d(e){e&&_(t)}}}function se(e){let t;return{c(){t=$("⇐")},l(e){t=y(e,"⇐")},m(e,n){T(e,t,n)},d(e){e&&_(t)}}}function ue(e){let t,n,r;function l(e,t){return-1===e[0]?se:1===e[0]?le:re}let s=l(e),u=s(e);return{c(){t=d("button"),u.c()},l(e){t=h(e,"BUTTON",{});var n=v(t);u.l(n),n.forEach(_)},m(l,s){T(l,t,s),u.m(t,null),n||(r=E(t,"click",e[1]),n=!0)},p(e,[n]){s!==(s=l(e))&&(u.d(1),u=s(e),u&&(u.c(),u.m(t,null)))},i:w,o:w,d(e){e&&_(t),u.d(),n=!1,r()}}}function ce(e,t,n){let{pan:r}=t,{set_pan:l}=t;return e.$$set=e=>{"pan"in e&&n(0,r=e.pan),"set_pan"in e&&n(2,l=e.set_pan)},[r,()=>{l(-1===r?1:1===r?0:-1)},l]}class oe extends i{constructor(e){super(),p(this,e,ce,ue,m,{pan:0,set_pan:2})}}function ae(e){let t,n,r,l,s,u,c,o,a;return{c(){t=d("label"),n=d("input"),r=f(),l=d("span"),s=$("hz"),u=f(),c=d("input"),this.h()},l(e){t=h(e,"LABEL",{});var o=v(t);n=h(o,"INPUT",{type:!0,min:!0,max:!0,step:!0}),r=g(o),l=h(o,"SPAN",{class:!0});var a=v(l);s=y(a,"hz"),a.forEach(_),o.forEach(_),u=g(e),c=h(e,"INPUT",{type:!0,min:!0,max:!0,step:!0}),this.h()},h(){b(n,"type","number"),b(n,"min",e[2]),b(n,"max",e[3]),b(n,"step",e[4]),n.value=e[0],b(l,"class","label-text"),b(c,"type","range"),b(c,"min",e[2]),b(c,"max",e[3]),b(c,"step",e[4]),c.value=e[0]},m(i,p){T(i,t,p),x(t,n),x(t,r),x(t,l),x(l,s),T(i,u,p),T(i,c,p),o||(a=[E(n,"input",e[5]),E(c,"input",e[6])],o=!0)},p(e,[t]){4&t&&b(n,"min",e[2]),8&t&&b(n,"max",e[3]),16&t&&b(n,"step",e[4]),1&t&&(n.value=e[0]),4&t&&b(c,"min",e[2]),8&t&&b(c,"max",e[3]),16&t&&b(c,"step",e[4]),1&t&&(c.value=e[0])},i:w,o:w,d(e){e&&_(t),e&&_(u),e&&_(c),o=!1,O(a)}}}function ie(e,t,n){let{frequency:r}=t,{set_frequency:l}=t,{min:s=60}=t,{max:u=880}=t,{step:c=1}=t;return e.$$set=e=>{"frequency"in e&&n(0,r=e.frequency),"set_frequency"in e&&n(1,l=e.set_frequency),"min"in e&&n(2,s=e.min),"max"in e&&n(3,u=e.max),"step"in e&&n(4,c=e.step)},[r,l,s,u,c,e=>l(Number(e.currentTarget.value)),e=>l(Number(e.currentTarget.value))]}class pe extends i{constructor(e){super(),p(this,e,ie,ae,m,{frequency:0,set_frequency:1,min:2,max:3,step:4})}}function me(e){let t;return{c(){t=$("▶️")},l(e){t=y(e,"▶️")},m(e,n){T(e,t,n)},d(e){e&&_(t)}}}function de(e){let t;return{c(){t=$("⏸︎")},l(e){t=y(e,"⏸︎")},m(e,n){T(e,t,n)},d(e){e&&_(t)}}}function fe(e){let t,n,r;function l(e,t){return e[0]?de:me}let s=l(e),u=s(e);return{c(){t=d("button"),u.c(),this.h()},l(e){t=h(e,"BUTTON",{});var n=v(t);u.l(n),n.forEach(_),this.h()},h(){N(t,"selected",e[0])},m(l,s){T(l,t,s),u.m(t,null),n||(r=E(t,"click",e[3]),n=!0)},p(e,[n]){s!==(s=l(e))&&(u.d(1),u=s(e),u&&(u.c(),u.m(t,null))),1&n&&N(t,"selected",e[0])},i:w,o:w,d(e){e&&_(t),u.d(),n=!1,r()}}}function $e(e,t,n){let{playing:r}=t,{play:l}=t,{pause:s}=t;return e.$$set=e=>{"playing"in e&&n(0,r=e.playing),"play"in e&&n(1,l=e.play),"pause"in e&&n(2,s=e.pause)},[r,l,s,()=>r?s():l()]}class he extends i{constructor(e){super(),p(this,e,$e,fe,m,{playing:0,play:1,pause:2})}}function ve(e){let t,n,r,l;return t=new he({props:{playing:e[2].playing,play:e[0].play,pause:e[0].pause}}),r=new pe({props:{frequency:e[3].frequency,set_frequency:e[1].set_frequency}}),{c(){k(t.$$.fragment),n=f(),k(r.$$.fragment)},l(e){q(t.$$.fragment,e),n=g(e),q(r.$$.fragment,e)},m(e,s){U(t,e,s),T(e,n,s),U(r,e,s),l=!0},p(e,[n]){const l={};4&n&&(l.playing=e[2].playing),1&n&&(l.play=e[0].play),1&n&&(l.pause=e[0].pause),t.$set(l);const s={};8&n&&(s.frequency=e[3].frequency),2&n&&(s.set_frequency=e[1].set_frequency),r.$set(s)},i(e){l||(I(t.$$.fragment,e),I(r.$$.fragment,e),l=!0)},o(e){A(t.$$.fragment,e),A(r.$$.fragment,e),l=!1},d(e){D(t,e),e&&_(n),D(r,e)}}}function ge(e,t,n){let r,l,s=w,u=()=>(s(),s=V(a,(e=>n(2,r=e))),a),c=w,o=()=>(c(),c=V(i,(e=>n(3,l=e))),i);e.$$.on_destroy.push((()=>s())),e.$$.on_destroy.push((()=>c()));let{input_channel:a}=t;u();let{input_source:i}=t;return o(),e.$$set=e=>{"input_channel"in e&&u(n(0,a=e.input_channel)),"input_source"in e&&o(n(1,i=e.input_source))},[a,i,r,l]}class ye extends i{constructor(e){super(),p(this,e,ge,ve,m,{input_channel:0,input_source:1})}}function _e(e){let t,n;return{c(){t=d("div"),n=$("❌"),this.h()},l(e){t=h(e,"DIV",{class:!0});var r=v(t);n=y(r,"❌"),r.forEach(_),this.h()},h(){b(t,"class","off svelte-1w1irkc")},m(e,r){T(e,t,r),x(t,n)},d(e){e&&_(t)}}}function be(e){let t,n,r,l,s,u,c,o=!e[0]&&_e();const a=e[4].default,i=P(a,e,e[3],null);return{c(){t=d("button"),n=d("div"),r=$("🎙️\n\t\t"),o&&o.c(),l=f(),i&&i.c(),this.h()},l(e){t=h(e,"BUTTON",{});var s=v(t);n=h(s,"DIV",{class:!0});var u=v(n);r=y(u,"🎙️\n\t\t"),o&&o.l(u),u.forEach(_),l=g(s),i&&i.l(s),s.forEach(_),this.h()},h(){b(n,"class","icon svelte-1w1irkc"),N(t,"selected",e[0])},m(a,p){T(a,t,p),x(t,n),x(n,r),o&&o.m(n,null),x(t,l),i&&i.m(t,null),s=!0,u||(c=E(t,"click",e[5]),u=!0)},p(e,[r]){e[0]?o&&(o.d(1),o=null):o||(o=_e(),o.c(),o.m(n,null)),i&&i.p&&(!s||8&r)&&B(i,a,e,e[3],s?r:-1,null,null),1&r&&N(t,"selected",e[0])},i(e){s||(I(i,e),s=!0)},o(e){A(i,e),s=!1},d(e){e&&_(t),o&&o.d(),i&&i.d(e),u=!1,c()}}}function Te(e,t,n){let{$$slots:r={},$$scope:l}=t,{recording:s}=t,{start:u}=t,{stop:c}=t;return e.$$set=e=>{"recording"in e&&n(0,s=e.recording),"start"in e&&n(1,u=e.start),"stop"in e&&n(2,c=e.stop),"$$scope"in e&&n(3,l=e.$$scope)},[s,u,c,l,r,()=>s?c():u()]}class xe extends i{constructor(e){super(),p(this,e,Te,be,m,{recording:0,start:1,stop:2})}}function Ee(e){let t;return{c(){t=$("[[mic controls]]")},l(e){t=y(e,"[[mic controls]]")},m(e,n){T(e,t,n)},p:w,i:w,o:w,d(e){e&&_(t)}}}function we(e,t,n){let{input_source:r}=t;return e.$$set=e=>{"input_source"in e&&n(0,r=e.input_source)},[r]}class Oe extends i{constructor(e){super(),p(this,e,we,Ee,m,{input_source:0})}}function Ne(e){let t,n,r,l;return t=new xe({props:{recording:e[2].playing,start:e[0].play,stop:e[0].pause}}),r=new Oe({props:{input_source:e[1]}}),{c(){k(t.$$.fragment),n=f(),k(r.$$.fragment)},l(e){q(t.$$.fragment,e),n=g(e),q(r.$$.fragment,e)},m(e,s){U(t,e,s),T(e,n,s),U(r,e,s),l=!0},p(e,[n]){const l={};4&n&&(l.recording=e[2].playing),1&n&&(l.start=e[0].play),1&n&&(l.stop=e[0].pause),t.$set(l);const s={};2&n&&(s.input_source=e[1]),r.$set(s)},i(e){l||(I(t.$$.fragment,e),I(r.$$.fragment,e),l=!0)},o(e){A(t.$$.fragment,e),A(r.$$.fragment,e),l=!1},d(e){D(t,e),e&&_(n),D(r,e)}}}function ke(e,t,n){let r,l=w,s=()=>(l(),l=V(u,(e=>n(2,r=e))),u);e.$$.on_destroy.push((()=>l()));let{input_channel:u}=t;s();let{input_source:c}=t;return e.$$set=e=>{"input_channel"in e&&s(n(0,u=e.input_channel)),"input_source"in e&&n(1,c=e.input_source)},[u,c,r]}class qe extends i{constructor(e){super(),p(this,e,ke,Ne,m,{input_channel:0,input_source:1})}}function Ue(e){let t;return{c(){t=$("TODO select input source")},l(e){t=y(e,"TODO select input source")},m(e,n){T(e,t,n)},p:w,i:w,o:w,d(e){e&&_(t)}}}function Ie(e){let t,n,r,l;const s=[De,Ae],u=[];function c(e,t){return"oscillator"===e[3].type?0:"mic"===e[3].type?1:-1}return~(t=c(e))&&(n=u[t]=s[t](e)),{c(){n&&n.c(),r=S()},l(e){n&&n.l(e),r=S()},m(e,n){~t&&u[t].m(e,n),T(e,r,n),l=!0},p(e,l){let o=t;t=c(e),t===o?~t&&u[t].p(e,l):(n&&(M(),A(u[o],1,1,(()=>{u[o]=null})),j()),~t?(n=u[t],n?n.p(e,l):(n=u[t]=s[t](e),n.c()),I(n,1),n.m(r.parentNode,r)):n=null)},i(e){l||(I(n),l=!0)},o(e){A(n),l=!1},d(e){~t&&u[t].d(e),e&&_(r)}}}function Ae(e){let t,n;return t=new qe({props:{input_channel:e[0],input_source:e[3]}}),{c(){k(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,r){U(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.input_channel=e[0]),8&n&&(r.input_source=e[3]),t.$set(r)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){A(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function De(e){let t,n;return t=new ye({props:{input_channel:e[0],input_source:e[3]}}),{c(){k(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,r){U(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.input_channel=e[0]),8&n&&(r.input_source=e[3]),t.$set(r)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){A(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function Ve(e){let t,n,r,l;return{c(){t=d("button"),n=$("✖")},l(e){t=h(e,"BUTTON",{});var r=v(t);n=y(r,"✖"),r.forEach(_)},m(s,u){T(s,t,u),x(t,n),r||(l=E(t,"click",(function(){L(e[1])&&e[1].apply(this,arguments)})),r=!0)},p(t,n){e=t},d(e){e&&_(t),r=!1,l()}}}function Pe(e){let t,n,r,l,s,u,c,o,a,i,p,m,$,y,w;s=new ne({props:{volume:e[2].volume,muted:e[2].muted,set_volume:e[0].set_volume,mute:e[0].mute,unmute:e[0].unmute}});const O=[Ie,Ue],N=[];function V(e,t){return e[3]?0:1}o=V(e),a=N[o]=O[o](e),p=new oe({props:{pan:e[2].pan,set_pan:e[0].set_pan}});let P=e[1]&&Ve(e);return{c(){t=d("div"),n=d("input"),l=f(),k(s.$$.fragment),u=f(),c=d("div"),a.c(),i=f(),k(p.$$.fragment),m=f(),P&&P.c(),this.h()},l(e){t=h(e,"DIV",{class:!0});var r=v(t);n=h(r,"INPUT",{type:!0,class:!0}),l=g(r),q(s.$$.fragment,r),u=g(r),c=h(r,"DIV",{class:!0});var o=v(c);a.l(o),o.forEach(_),i=g(r),q(p.$$.fragment,r),m=g(r),P&&P.l(r),r.forEach(_),this.h()},h(){b(n,"type","text"),b(n,"class","name svelte-w6bh0k"),n.value=r=e[2].name,b(c,"class","source-controls svelte-w6bh0k"),b(t,"class","item svelte-w6bh0k")},m(r,a){T(r,t,a),x(t,n),x(t,l),U(s,t,null),x(t,u),x(t,c),N[o].m(c,null),x(t,i),U(p,t,null),x(t,m),P&&P.m(t,null),$=!0,y||(w=E(n,"input",e[4]),y=!0)},p(e,[l]){(!$||4&l&&r!==(r=e[2].name)&&n.value!==r)&&(n.value=r);const u={};4&l&&(u.volume=e[2].volume),4&l&&(u.muted=e[2].muted),1&l&&(u.set_volume=e[0].set_volume),1&l&&(u.mute=e[0].mute),1&l&&(u.unmute=e[0].unmute),s.$set(u);let i=o;o=V(e),o===i?N[o].p(e,l):(M(),A(N[i],1,1,(()=>{N[i]=null})),j(),a=N[o],a?a.p(e,l):(a=N[o]=O[o](e),a.c()),I(a,1),a.m(c,null));const m={};4&l&&(m.pan=e[2].pan),1&l&&(m.set_pan=e[0].set_pan),p.$set(m),e[1]?P?P.p(e,l):(P=Ve(e),P.c(),P.m(t,null)):P&&(P.d(1),P=null)},i(e){$||(I(s.$$.fragment,e),I(a),I(p.$$.fragment,e),$=!0)},o(e){A(s.$$.fragment,e),A(a),A(p.$$.fragment,e),$=!1},d(e){e&&_(t),D(s),N[o].d(),D(p),P&&P.d(),y=!1,w()}}}function Be(e,t,n){let r,l=w,s=()=>(l(),l=V(u,(e=>n(2,r=e))),u);e.$$.on_destroy.push((()=>l()));let{input_channel:u}=t;s();let c,{remove:o=null}=t;return e.$$set=e=>{"input_channel"in e&&s(n(0,u=e.input_channel)),"remove"in e&&n(1,o=e.remove)},e.$$.update=()=>{4&e.$$.dirty&&n(3,c=r.source)},[u,o,r,c,e=>u.set_name(e.currentTarget.value)]}class Le extends i{constructor(e){super(),p(this,e,Be,Pe,m,{input_channel:0,remove:1})}}function Me(e){let t,n;return{c(){t=d("a"),n=$("download"),this.h()},l(e){t=h(e,"A",{href:!0,target:!0,class:!0});var r=v(t);n=y(r,"download"),r.forEach(_),this.h()},h(){b(t,"href",e[3]),b(t,"target","_blank"),b(t,"class","svelte-nmo533")},m(e,r){T(e,t,r),x(t,n)},p(e,n){8&n&&b(t,"href",e[3])},d(e){e&&_(t)}}}function je(e){let t,n,r,l;return{c(){t=d("button"),n=$("✖")},l(e){t=h(e,"BUTTON",{});var r=v(t);n=y(r,"✖"),r.forEach(_)},m(s,u){T(s,t,u),x(t,n),r||(l=E(t,"click",(function(){L(e[1])&&e[1].apply(this,arguments)})),r=!0)},p(t,n){e=t},d(e){e&&_(t),r=!1,l()}}}function Se(e){let t,n,r,l,s,u,c,o,a,i,p,m,O,N,k,q=e[3]&&Me(e),U=e[1]&&je(e);return{c(){t=d("div"),n=d("input"),r=f(),l=d("audio"),s=$("Your browser does not support the "),u=d("code"),c=$("audio"),o=$(" element.\n\t\t"),a=d("track"),m=f(),q&&q.c(),O=f(),U&&U.c(),this.h()},l(e){t=h(e,"DIV",{class:!0});var i=v(t);n=h(i,"INPUT",{type:!0,class:!0}),r=g(i),l=h(i,"AUDIO",{src:!0});var p=v(l);s=y(p,"Your browser does not support the "),u=h(p,"CODE",{});var d=v(u);c=y(d,"audio"),d.forEach(_),o=y(p," element.\n\t\t"),a=h(p,"TRACK",{kind:!0}),p.forEach(_),m=g(i),q&&q.l(i),O=g(i),U&&U.l(i),i.forEach(_),this.h()},h(){b(n,"type","text"),b(n,"class","name svelte-nmo533"),b(a,"kind","captions"),l.controls=i=!!e[2].blob,R(l.src,p=e[3])||b(l,"src",p),b(t,"class","item svelte-nmo533")},m(i,p){T(i,t,p),x(t,n),C(n,e[2].name),x(t,r),x(t,l),x(l,s),x(l,u),x(u,c),x(l,o),x(l,a),x(t,m),q&&q.m(t,null),x(t,O),U&&U.m(t,null),N||(k=E(n,"input",e[5]),N=!0)},p(e,[r]){4&r&&n.value!==e[2].name&&C(n,e[2].name),4&r&&i!==(i=!!e[2].blob)&&(l.controls=i),8&r&&!R(l.src,p=e[3])&&b(l,"src",p),e[3]?q?q.p(e,r):(q=Me(e),q.c(),q.m(t,O)):q&&(q.d(1),q=null),e[1]?U?U.p(e,r):(U=je(e),U.c(),U.m(t,null)):U&&(U.d(1),U=null)},i:w,o:w,d(e){e&&_(t),q&&q.d(),U&&U.d(),N=!1,k()}}}function Re(e,t,n){let r,l=w,s=()=>(l(),l=V(u,(e=>n(2,r=e))),u);e.$$.on_destroy.push((()=>l()));let{clip:u}=t;s();let c,o,{remove:a=null}=t;return e.$$set=e=>{"clip"in e&&s(n(0,u=e.clip)),"remove"in e&&n(1,a=e.remove)},e.$$.update=()=>{20&e.$$.dirty&&r.blob!==c&&(n(4,c=r.blob),n(3,o=r.blob?URL.createObjectURL(r.blob):void 0))},[u,a,r,o,c,function(){r.name=this.value,u.set(r)}]}class Ce extends i{constructor(e){super(),p(this,e,Re,Se,m,{clip:0,remove:1})}}function Ge(e){let t;return{c(){t=$("turn on mic")},l(e){t=y(e,"turn on mic")},m(e,n){T(e,t,n)},d(e){e&&_(t)}}}function ze(e){let t;return{c(){t=$("turn off mic")},l(e){t=y(e,"turn off mic")},m(e,n){T(e,t,n)},d(e){e&&_(t)}}}function Fe(e){let t;function n(e,t){return e[1]?ze:Ge}let r=n(e),l=r(e);return{c(){l.c(),t=S()},l(e){l.l(e),t=S()},m(e,n){l.m(e,n),T(e,t,n)},p(e,s){r!==(r=n(e))&&(l.d(1),l=r(e),l&&(l.c(),l.m(t.parentNode,t)))},d(e){l.d(e),e&&_(t)}}}function He(e){let t,n;return{c(){t=d("div"),n=$(e[0]),this.h()},l(r){t=h(r,"DIV",{class:!0});var l=v(t);n=y(l,e[0]),l.forEach(_),this.h()},h(){b(t,"class","error svelte-1k0qods")},m(e,r){T(e,t,r),x(t,n)},p(e,t){1&t&&G(n,e[0])},d(e){e&&_(t)}}}function Ke(e){let t,n,r,l;t=new xe({props:{recording:e[1],start:e[2],stop:e[3],$$slots:{default:[Fe]},$$scope:{ctx:e}}});let s=e[0]&&He(e);return{c(){k(t.$$.fragment),n=f(),s&&s.c(),r=S()},l(e){q(t.$$.fragment,e),n=g(e),s&&s.l(e),r=S()},m(e,u){U(t,e,u),T(e,n,u),s&&s.m(e,u),T(e,r,u),l=!0},p(e,[n]){const l={};2&n&&(l.recording=e[1]),34&n&&(l.$$scope={dirty:n,ctx:e}),t.$set(l),e[0]?s?s.p(e,n):(s=He(e),s.c(),s.m(r.parentNode,r)):s&&(s.d(1),s=null)},i(e){l||(I(t.$$.fragment,e),l=!0)},o(e){A(t.$$.fragment,e),l=!1},d(e){D(t,e),e&&_(n),s&&s.d(e),e&&_(r)}}}function Ye(e,t,n){let r,{mic_stream:l=null}=t,s=null;return e.$$set=e=>{"mic_stream"in e&&n(4,l=e.mic_stream)},e.$$.update=()=>{16&e.$$.dirty&&n(1,r=!!l)},[s,r,async()=>{n(0,s=null);try{n(4,l=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1}))}catch(e){n(0,s=`Failed to get mic input: ${e}`)}},()=>{if(l){for(const e of l.getTracks())console.log("stopping track",e),e.stop();n(4,l=null)}},l]}class Je extends i{constructor(e){super(),p(this,e,Ye,Ke,m,{mic_stream:4})}}const Qe=e=>{const t=(()=>{let e=0;return()=>++e})();return()=>`${e}_${t()}`},We=Qe("audio_clip"),Xe=Qe("input_channel"),Ze=e=>{const t=(e=>{const t=Xe();return{id:t,name:e||t,source:null,destination:null,playing:!1,volume:.33,muted:!1,pan:0}})(),{subscribe:n,update:r}=z(t),l=e.createStereoPanner(),s=e.createGain();l.connect(s);const u=l,a=s,i={subscribe:n,set_name:e=>r((t=>o(c({},t),{name:e}))),connect:e=>r((t=>(t.destination&&a.disconnect(),e&&a.connect(e),o(c({},t),{destination:e})))),set_source:e=>r((t=>t.source===e?t:(t.source&&t.source.disconnect(),e&&e.connect(u),o(c({},t),{source:e})))),play:()=>r((e=>(e.source&&e.source.play(),o(c({},e),{playing:!0})))),pause:()=>r((e=>(e.source&&e.source.pause(),o(c({},e),{playing:!1})))),set_volume:t=>r((n=>(n.muted||s.gain.setValueAtTime(W(t),e.currentTime),o(c({},n),{volume:t})))),mute:()=>r((t=>t.muted?t:(s.gain.setValueAtTime(0,e.currentTime),o(c({},t),{muted:!0})))),unmute:()=>r((t=>t.muted?(s.gain.setValueAtTime(W(t.volume),e.currentTime),o(c({},t),{muted:!1})):t)),set_pan:t=>r((n=>(l.pan.setValueAtTime(t,e.currentTime),o(c({},n),{pan:t}))))};return i.set_volume(t.volume),i},et=(e,t,n,r)=>{const{subscribe:l,update:s,set:u}=z(t),a=e=>{e.node&&e.destination&&e.node.connect(e.destination)},i=e=>{e.node&&e.destination&&e.node.disconnect()};return{type:e,subscribe:l,update:s,set:u,set_name:e=>s((t=>o(c({},t),{name:e}))),connect:e=>s((t=>{i(t);const n=o(c({},t),{destination:e});return a(n),n})),disconnect:()=>s((e=>(i(e),o(c({},e),{destination:null})))),play:()=>s((e=>{if(e.playing)return e;const t=n(e);return t.node!==e.node&&(i(e),a(t)),o(c({},t),{playing:!0})})),pause:()=>s((e=>{if(!e.playing)return e;const t=r(e);return t.node!==e.node&&(i(e),a(t)),o(c({},t),{playing:!1})}))}},tt=Qe("oscillator_source"),nt=(e,t)=>{const n=(e=>{const t=tt();return{id:t,name:e||t,destination:null,playing:!1,node:null,frequency:440}})(t),r=et("oscillator",n,(t=>{const n=e.createOscillator();return n.frequency.setValueAtTime(t.frequency,e.currentTime),n.start(),o(c({},t),{node:n})}),(e=>(e.node&&e.node.stop(),o(c({},e),{node:null})))),{update:l,set:s}=r,u=a(r,["update","set"]),i=o(c({},u),{set_frequency:t=>l((n=>(n.node&&n.node.frequency.setValueAtTime(t,e.currentTime),o(c({},n),{frequency:t}))))});return i.set_frequency(n.frequency),i},rt=Qe("mic_source"),lt=(e,t,n)=>{const r=et("mic",((e,t)=>{const n=rt();return{id:n,name:t||n,destination:null,playing:!1,node:null,mic_stream:e}})(t,n),(n=>o(c({},n),{node:e.createMediaStreamSource(t)})),(e=>o(c({},e),{node:null}))),{update:l,set:s}=r,u=a(r,["update","set"]);return c({},u)};function st(e,t,n){const r=e.slice();return r[38]=t[n],r}function ut(e,t,n){const r=e.slice();return r[41]=t[n],r}function ct(e){let t,n,r,l;return{c(){t=d("button"),n=$("enter the audio recording studio")},l(e){t=h(e,"BUTTON",{});var r=v(t);n=y(r,"enter the audio recording studio"),r.forEach(_)},m(s,u){T(s,t,u),x(t,n),r||(l=E(t,"click",e[14]),r=!0)},p:w,i:w,o:w,d(e){e&&_(t),r=!1,l()}}}function ot(e){let t,n,r,l,s,u,c,o,a,i,p,m,w,V,P,B,L,S,R,G,z,J,W,X,Z,ee,te=[],re=new Map,le=[],se=new Map;function ue(e,t){return e[9]?it:at}let ce=ue(e),oe=ce(e);function ae(e,t){return e[10]?mt:pt}let ie=ae(e),pe=ie(e);function me(e,t){return e[12]?ft:dt}o=new ne({props:{volume:e[5],muted:e[6],set_volume:e[13],mute:e[25],unmute:e[26]}});let de=me(e),fe=de(e);function $e(t){e[29](t)}let he={};void 0!==e[4]&&(he.mic_stream=e[4]),S=new Je({props:he}),F.push((()=>H(S,"mic_stream",$e)));let ve=e[1];const ge=e=>e[41];for(let d=0;d<ve.length;d+=1){let t=ut(e,ve,d),n=ge(t);re.set(n,te[d]=$t(n,t))}let ye=e[7];const _e=e=>e[38];for(let d=0;d<ye.length;d+=1){let t=st(e,ye,d),n=_e(t);se.set(n,le[d]=ht(n,t))}return{c(){t=d("div"),n=d("button"),oe.c(),l=f(),s=d("button"),pe.c(),c=f(),k(o.$$.fragment),a=f(),i=d("label"),p=d("input"),m=f(),fe.c(),w=f(),V=d("div"),P=d("button"),B=$("🌊 add oscillator"),L=f(),k(S.$$.fragment),G=f(),z=d("ul");for(let e=0;e<te.length;e+=1)te[e].c();J=f(),W=d("ul");for(let e=0;e<le.length;e+=1)le[e].c();this.h()},l(e){t=h(e,"DIV",{class:!0});var r=v(t);n=h(r,"BUTTON",{});var u=v(n);oe.l(u),u.forEach(_),l=g(r),s=h(r,"BUTTON",{});var d=v(s);pe.l(d),d.forEach(_),c=g(r),q(o.$$.fragment,r),r.forEach(_),a=g(e),i=h(e,"LABEL",{});var f=v(i);p=h(f,"INPUT",{type:!0}),m=g(f),fe.l(f),f.forEach(_),w=g(e),V=h(e,"DIV",{class:!0});var $=v(V);P=h($,"BUTTON",{});var b=v(P);B=y(b,"🌊 add oscillator"),b.forEach(_),L=g($),q(S.$$.fragment,$),$.forEach(_),G=g(e),z=h(e,"UL",{});var T=v(z);for(let t=0;t<te.length;t+=1)te[t].l(T);T.forEach(_),J=g(e),W=h(e,"UL",{});var x=v(W);for(let t=0;t<le.length;t+=1)le[t].l(x);x.forEach(_),this.h()},h(){n.disabled=r=!e[11],s.disabled=u=!e[11],N(s,"selected",e[10]),b(t,"class","main-controls svelte-uqd543"),b(p,"type","text"),b(V,"class","add-sources svelte-uqd543")},m(r,u){T(r,t,u),x(t,n),oe.m(n,null),x(t,l),x(t,s),pe.m(s,null),x(t,c),U(o,t,null),T(r,a,u),T(r,i,u),x(i,p),C(p,e[0]),x(i,m),fe.m(i,null),T(r,w,u),T(r,V,u),x(V,P),x(P,B),x(V,L),U(S,V,null),T(r,G,u),T(r,z,u);for(let e=0;e<te.length;e+=1)te[e].m(z,null);T(r,J,u),T(r,W,u);for(let e=0;e<le.length;e+=1)le[e].m(W,null);X=!0,Z||(ee=[E(n,"click",e[23]),E(s,"click",e[24]),E(p,"input",e[27]),E(P,"click",e[28])],Z=!0)},p(e,t){ce!==(ce=ue(e))&&(oe.d(1),oe=ce(e),oe&&(oe.c(),oe.m(n,null))),(!X||2048&t[0]&&r!==(r=!e[11]))&&(n.disabled=r),ie!==(ie=ae(e))&&(pe.d(1),pe=ie(e),pe&&(pe.c(),pe.m(s,null))),(!X||2048&t[0]&&u!==(u=!e[11]))&&(s.disabled=u),1024&t[0]&&N(s,"selected",e[10]);const l={};32&t[0]&&(l.volume=e[5]),64&t[0]&&(l.muted=e[6]),64&t[0]&&(l.mute=e[25]),64&t[0]&&(l.unmute=e[26]),o.$set(l),1&t[0]&&p.value!==e[0]&&C(p,e[0]),de===(de=me(e))&&fe?fe.p(e,t):(fe.d(1),fe=de(e),fe&&(fe.c(),fe.m(i,null)));const c={};!R&&16&t[0]&&(R=!0,c.mic_stream=e[4],K((()=>R=!1))),S.$set(c),65538&t[0]&&(ve=e[1],M(),te=Y(te,t,ge,1,e,ve,re,z,Q,$t,null,ut),j()),131200&t[0]&&(ye=e[7],M(),le=Y(le,t,_e,1,e,ye,se,W,Q,ht,null,st),j())},i(e){if(!X){I(o.$$.fragment,e),I(S.$$.fragment,e);for(let e=0;e<ve.length;e+=1)I(te[e]);for(let e=0;e<ye.length;e+=1)I(le[e]);X=!0}},o(e){A(o.$$.fragment,e),A(S.$$.fragment,e);for(let t=0;t<te.length;t+=1)A(te[t]);for(let t=0;t<le.length;t+=1)A(le[t]);X=!1},d(e){e&&_(t),oe.d(),pe.d(),D(o),e&&_(a),e&&_(i),fe.d(),e&&_(w),e&&_(V),D(S),e&&_(G),e&&_(z);for(let t=0;t<te.length;t+=1)te[t].d();e&&_(J),e&&_(W);for(let t=0;t<le.length;t+=1)le[t].d();Z=!1,O(ee)}}}function at(e){let t;return{c(){t=$("▶️ play all")},l(e){t=y(e,"▶️ play all")},m(e,n){T(e,t,n)},d(e){e&&_(t)}}}function it(e){let t;return{c(){t=$("⏸︎ pause all")},l(e){t=y(e,"⏸︎ pause all")},m(e,n){T(e,t,n)},d(e){e&&_(t)}}}function pt(e){let t;return{c(){t=$("⏺︎ start recording")},l(e){t=y(e,"⏺︎ start recording")},m(e,n){T(e,t,n)},d(e){e&&_(t)}}}function mt(e){let t;return{c(){t=$("⏹ stop recording")},l(e){t=y(e,"⏹ stop recording")},m(e,n){T(e,t,n)},d(e){e&&_(t)}}}function dt(e){let t;return{c(){t=$("mime type")},l(e){t=y(e,"mime type")},m(e,n){T(e,t,n)},p:w,d(e){e&&_(t)}}}function ft(e){let t;return{c(){t=$(e[12])},l(n){t=y(n,e[12])},m(e,n){T(e,t,n)},p(e,n){4096&n[0]&&G(t,e[12])},d(e){e&&_(t)}}}function $t(e,t){let n,r,l;function s(){return t[30](t[41])}return r=new Le({props:{input_channel:t[41],remove:s}}),{key:e,first:null,c(){n=S(),k(r.$$.fragment),this.h()},l(e){n=S(),q(r.$$.fragment,e),this.h()},h(){this.first=n},m(e,t){T(e,n,t),U(r,e,t),l=!0},p(e,n){t=e;const l={};2&n[0]&&(l.input_channel=t[41]),2&n[0]&&(l.remove=s),r.$set(l)},i(e){l||(I(r.$$.fragment,e),l=!0)},o(e){A(r.$$.fragment,e),l=!1},d(e){e&&_(n),D(r,e)}}}function ht(e,t){let n,r,l;function s(){return t[31](t[38])}return r=new Ce({props:{clip:t[38],remove:s}}),{key:e,first:null,c(){n=S(),k(r.$$.fragment),this.h()},l(e){n=S(),q(r.$$.fragment,e),this.h()},h(){this.first=n},m(e,t){T(e,n,t),U(r,e,t),l=!0},p(e,n){t=e;const l={};128&n[0]&&(l.clip=t[38]),128&n[0]&&(l.remove=s),r.$set(l)},i(e){l||(I(r.$$.fragment,e),l=!0)},o(e){A(r.$$.fragment,e),l=!1},d(e){e&&_(n),D(r,e)}}}function vt(e){let t,n,r,l;const s=[ot,ct],u=[];function c(e,t){return e[8]?0:1}return t=c(e),n=u[t]=s[t](e),{c(){n.c(),r=S()},l(e){n.l(e),r=S()},m(e,n){u[t].m(e,n),T(e,r,n),l=!0},p(e,l){let o=t;t=c(e),t===o?u[t].p(e,l):(M(),A(u[o],1,1,(()=>{u[o]=null})),j(),n=u[t],n?n.p(e,l):(n=u[t]=s[t](e),n.c()),I(n,1),n.m(r.parentNode,r))},i(e){l||(I(n),l=!0)},o(e){A(n),l=!1},d(e){u[t].d(e),e&&_(r)}}}function gt(e,t,n){let r,l,s,u,c,o,a,i="audio/webm;codecs=opus",p=[],m=[],d=!1,f=1,$=!1;const h=[];let v=!1;const g=(e,t)=>{const r=Ze(e);n(1,p=p.concat(r));const l=nt(e);r.set_source(l),r.connect(t)},y=e=>{e.pause(),n(1,p=p.filter((t=>t!==e)))},_=e=>{e.forEach((e=>e.pause())),n(1,p=p.filter((t=>!e.includes(t))))},b=e=>{n(7,m=m.filter((t=>t!==e)))};let T=!0,x=!1;const E=()=>{n(9,T=!0);for(const e of p)e.play()},w=()=>{n(9,T=!1);for(const e of p)e.pause()},O=()=>{n(10,x=!0),o.start()},N=()=>{n(10,x=!1),o.stop()};return e.$$.update=()=>{1&e.$$.dirty[0]&&n(12,r=MediaRecorder.isTypeSupported(i)?null:"mime type is not supported"),4194332&e.$$.dirty[0]&&(a?(n(22,d=!0),(async(e,t,r)=>{const l=Ze(e);n(1,p=[l,...p]);const s=lt(e,r);l.set_source(s),l.connect(t),l.play(),l.set_volume(1)})(s,u,a)):d&&_(p.filter((e=>{var t;return"mic"===(null==(t=J(e).source)?void 0:t.type)})))),18&e.$$.dirty[0]&&n(11,l=!!p.length||!!a),104&e.$$.dirty[0]&&(null==u||u.gain.setValueAtTime($?0:W(f),0))},[i,p,s,u,a,f,$,m,v,T,x,l,r,e=>{n(5,f=e)},()=>{n(2,s=new AudioContext),c=s.createMediaStreamDestination(),n(3,u=s.createGain()),u.connect(c),u.connect(s.destination),o=new MediaRecorder(c.stream,{mimeType:i}),o.ondataavailable=e=>{console.log("recorder.ondataavailable",e),h.push(e.data)},o.onstop=e=>{console.log("recorder.onstop",e),n(7,m=m.concat(z(((e,t)=>{const n=We();return{id:n,name:t||n,blob:e}})(new Blob(h,{type:i}))))),h.length=0},g(s,u),n(8,v=!0)},g,y,b,E,w,O,N,d,()=>T?w():E(),()=>x?N():O(),()=>n(6,$=!0),()=>n(6,$=!1),function(){i=this.value,n(0,i)},()=>g(s,u),function(e){a=e,n(4,a)},e=>y(e),e=>b(e)]}class yt extends i{constructor(e){super(),p(this,e,gt,vt,m,{},null,[-1,-1])}}function _t(e){let t,n,r,l,s,u;return s=new yt({}),{c(){t=d("main"),n=d("h1"),r=$("audio-tools🪱"),l=f(),k(s.$$.fragment),this.h()},l(e){t=h(e,"MAIN",{class:!0});var u=v(t);n=h(u,"H1",{class:!0});var c=v(n);r=y(c,"audio-tools🪱"),c.forEach(_),l=g(u),q(s.$$.fragment,u),u.forEach(_),this.h()},h(){b(n,"class","svelte-14kebca"),b(t,"class","svelte-14kebca")},m(e,c){T(e,t,c),x(t,n),x(n,r),x(t,l),U(s,t,null),u=!0},p:w,i(e){u||(I(s.$$.fragment,e),u=!0)},o(e){A(s.$$.fragment,e),u=!1},d(e){e&&_(t),D(s)}}}export default class extends i{constructor(e){super(),p(this,e,null,_t,m,{})}}