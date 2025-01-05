import{s as Pe,n as Ae,r as Le,e as te,x as le,y as Ne,c as st,u as rt,g as it,a as ut}from"../chunks/scheduler.C-8Dn-37.js";import{S as De,i as Ie,e as E,b as G,s as A,c as w,d as T,f as W,g as V,h as q,y as ke,o as g,j as Z,k as u,z as Re,A as de,l as Ce,B as Ue,p as ve,t as U,q as ze,n as Je,a as J,C as je,m as Qe,D as ne,u as Q,v as Y,w as y,x as $,E as ct}from"../chunks/index.BvhLw5Hn.js";function Be(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function ft(t){let l,e,n,s,f,o,i,a,p="-",c,r,d,_,P="+",m,C;return{c(){l=E("div"),e=E("span"),n=G(t[1]),o=A(),i=E("div"),a=E("button"),a.textContent=p,c=A(),r=E("input"),d=A(),_=E("button"),_.textContent=P,this.h()},l(v){l=w(v,"DIV",{class:!0});var h=T(l);e=w(h,"SPAN",{class:!0,title:!0});var I=T(e);n=W(I,t[1]),I.forEach(V),o=q(h),i=w(h,"DIV",{class:!0});var b=T(i);a=w(b,"BUTTON",{class:!0,"data-svelte-h":!0}),ke(a)!=="svelte-1si2c2i"&&(a.textContent=p),c=q(b),r=w(b,"INPUT",{type:!0,min:!0,max:!0,class:!0}),d=q(b),_=w(b,"BUTTON",{class:!0,"data-svelte-h":!0}),ke(_)!=="svelte-1m6dhnb"&&(_.textContent=P),b.forEach(V),h.forEach(V),this.h()},h(){g(e,"class",s="label "+(t[4]?"title":"")+" svelte-42ixwr"),g(e,"title",f=t[2]>0?"+/- "+t[2]+" Points":t[1]),g(a,"class","svelte-42ixwr"),g(r,"type","number"),g(r,"min","0"),g(r,"max",t[3]),g(r,"class","svelte-42ixwr"),g(_,"class","svelte-42ixwr"),g(i,"class","counter svelte-42ixwr"),g(l,"class","container svelte-42ixwr")},m(v,h){Z(v,l,h),u(l,e),u(e,n),u(l,o),u(l,i),u(i,a),u(i,c),u(i,r),Re(r,t[0]),u(i,d),u(i,_),m||(C=[de(a,"click",t[9]),de(r,"input",t[10]),de(_,"click",t[11])],m=!0)},p(v,[h]){h&2&&Ce(n,v[1]),h&16&&s!==(s="label "+(v[4]?"title":"")+" svelte-42ixwr")&&g(e,"class",s),h&6&&f!==(f=v[2]>0?"+/- "+v[2]+" Points":v[1])&&g(e,"title",f),h&8&&g(r,"max",v[3]),h&1&&Ue(r.value)!==v[0]&&Re(r,v[0])},i:Ae,o:Ae,d(v){v&&V(l),m=!1,Le(C)}}}function _t(t,l,e){let{label:n,increment:s=1,decrement:f=s,multiplier:o=0,max:i=void 0,title:a=!1}=l,{value:p=0}=l,c=()=>{e(0,p+=s)},r=()=>{e(0,p-=f)};const d=()=>r();function _(){p=Ue(this.value),e(0,p),e(3,i)}const P=()=>c();return t.$$set=m=>{"label"in m&&e(1,n=m.label),"increment"in m&&e(7,s=m.increment),"decrement"in m&&e(8,f=m.decrement),"multiplier"in m&&e(2,o=m.multiplier),"max"in m&&e(3,i=m.max),"title"in m&&e(4,a=m.title),"value"in m&&e(0,p=m.value)},t.$$.update=()=>{t.$$.dirty&9&&(p<0&&e(0,p=0),i&&p>i&&e(0,p=i))},[p,n,o,i,a,c,r,s,f,d,_,P]}class Ge extends De{constructor(l){super(),Ie(this,l,_t,ft,Pe,{label:1,increment:7,decrement:8,multiplier:2,max:3,title:4,value:0})}}function Ye(t,l,e){const n=t.slice();return n[8]=l[e],n}function ye(t,l,e){const n=t.slice();return n[11]=l[e],n[12]=l,n[13]=e,n}function ht(t){let l,e,n;function s(o){t[7](o,t[11])}let f={label:t[11].label,multiplier:t[11].increment,max:t[11].max};return t[11].value!==void 0&&(f.value=t[11].value),l=new Ge({props:f}),te.push(()=>ne(l,"value",s)),{c(){Q(l.$$.fragment)},l(o){Y(l.$$.fragment,o)},m(o,i){y(l,o,i),n=!0},p(o,i){t=o;const a={};i&17&&(a.label=t[11].label),i&17&&(a.multiplier=t[11].increment),i&17&&(a.max=t[11].max),!e&&i&17&&(e=!0,a.value=t[11].value,le(()=>e=!1)),l.$set(a)},i(o){n||(U(l.$$.fragment,o),n=!0)},o(o){J(l.$$.fragment,o),n=!1},d(o){$(l,o)}}}function gt(t){let l,e,n;function s(o){t[6](o)}let f={label:t[11].label,multiplier:t[11].increment,max:t[11].max};return t[2]!==void 0&&(f.value=t[2]),l=new Ge({props:f}),te.push(()=>ne(l,"value",s)),{c(){Q(l.$$.fragment)},l(o){Y(l.$$.fragment,o)},m(o,i){y(l,o,i),n=!0},p(o,i){const a={};i&17&&(a.label=o[11].label),i&17&&(a.multiplier=o[11].increment),i&17&&(a.max=o[11].max),!e&&i&4&&(e=!0,a.value=o[2],le(()=>e=!1)),l.$set(a)},i(o){n||(U(l.$$.fragment,o),n=!0)},o(o){J(l.$$.fragment,o),n=!1},d(o){$(l,o)}}}function $e(t){let l,e,n,s;const f=[gt,ht],o=[];function i(a,p){return a[11].coopertition?0:1}return l=i(t),e=o[l]=f[l](t),{c(){e.c(),n=A()},l(a){e.l(a),n=q(a)},m(a,p){o[l].m(a,p),Z(a,n,p),s=!0},p(a,p){let c=l;l=i(a),l===c?o[l].p(a,p):(ze(),J(o[c],1,1,()=>{o[c]=null}),Je(),e=o[l],e?e.p(a,p):(e=o[l]=f[l](a),e.c()),U(e,1),e.m(n.parentNode,n))},i(a){s||(U(e),s=!0)},o(a){J(e),s=!1},d(a){a&&V(n),o[l].d(a)}}}function xe(t){let l,e=t[8]+"",n,s,f,o,i=Be(t[0].category[t[8]]),a=[];for(let c=0;c<i.length;c+=1)a[c]=$e(ye(t,i,c));const p=c=>J(a[c],1,1,()=>{a[c]=null});return{c(){l=E("span"),n=G(e),s=A();for(let c=0;c<a.length;c+=1)a[c].c();f=Qe(),this.h()},l(c){l=w(c,"SPAN",{class:!0});var r=T(l);n=W(r,e),r.forEach(V),s=q(c);for(let d=0;d<a.length;d+=1)a[d].l(c);f=Qe(),this.h()},h(){g(l,"class","svelte-r1vuxt")},m(c,r){Z(c,l,r),u(l,n),Z(c,s,r);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(c,r);Z(c,f,r),o=!0},p(c,r){if((!o||r&16)&&e!==(e=c[8]+"")&&Ce(n,e),r&21){i=Be(c[0].category[c[8]]);let d;for(d=0;d<i.length;d+=1){const _=ye(c,i,d);a[d]?(a[d].p(_,r),U(a[d],1)):(a[d]=$e(_),a[d].c(),U(a[d],1),a[d].m(f.parentNode,f))}for(ze(),d=i.length;d<a.length;d+=1)p(d);Je()}},i(c){if(!o){for(let r=0;r<i.length;r+=1)U(a[r]);o=!0}},o(c){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)J(a[r]);o=!1},d(c){c&&(V(l),V(s),V(f)),je(a,c)}}}function dt(t){let l,e,n,s=t[0].name+"",f,o,i,a,p,c,r,d=Be(t[4]),_=[];for(let m=0;m<d.length;m+=1)_[m]=xe(Ye(t,d,m));const P=m=>J(_[m],1,1,()=>{_[m]=null});return{c(){l=E("div"),e=E("div"),n=E("h3"),f=G(s),o=A(),i=E("h3"),a=G(t[1]),p=A(),c=E("div");for(let m=0;m<_.length;m+=1)_[m].c();this.h()},l(m){l=w(m,"DIV",{class:!0,style:!0});var C=T(l);e=w(C,"DIV",{class:!0});var v=T(e);n=w(v,"H3",{class:!0});var h=T(n);f=W(h,s),h.forEach(V),o=q(v),i=w(v,"H3",{class:!0});var I=T(i);a=W(I,t[1]),I.forEach(V),v.forEach(V),p=q(C),c=w(C,"DIV",{class:!0});var b=T(c);for(let M=0;M<_.length;M+=1)_[M].l(b);b.forEach(V),C.forEach(V),this.h()},h(){g(n,"class","label svelte-r1vuxt"),g(i,"class","score svelte-r1vuxt"),g(e,"class","header svelte-r1vuxt"),g(c,"class","body svelte-r1vuxt"),g(l,"class","container svelte-r1vuxt"),ve(l,"--border-color",t[3])},m(m,C){Z(m,l,C),u(l,e),u(e,n),u(n,f),u(e,o),u(e,i),u(i,a),u(l,p),u(l,c);for(let v=0;v<_.length;v+=1)_[v]&&_[v].m(c,null);r=!0},p(m,[C]){if((!r||C&1)&&s!==(s=m[0].name+"")&&Ce(f,s),(!r||C&2)&&Ce(a,m[1]),C&21){d=Be(m[4]);let v;for(v=0;v<d.length;v+=1){const h=Ye(m,d,v);_[v]?(_[v].p(h,C),U(_[v],1)):(_[v]=xe(h),_[v].c(),U(_[v],1),_[v].m(c,null))}for(ze(),v=d.length;v<_.length;v+=1)P(v);Je()}(!r||C&8)&&ve(l,"--border-color",m[3])},i(m){if(!r){for(let C=0;C<d.length;C+=1)U(_[C]);r=!0}},o(m){_=_.filter(Boolean);for(let C=0;C<_.length;C+=1)J(_[C]);r=!1},d(m){m&&V(l),je(_,m)}}}function pt(t,l,e){let{score:n=0,color:s="#393939",count:f=0}=l,{config:o}=l,i=Object.keys(o.category),{coopertition:a=0}=l;function p(r){a=r,e(2,a)}function c(r,d){t.$$.not_equal(d.value,r)&&(d.value=r,e(0,o))}return t.$$set=r=>{"score"in r&&e(1,n=r.score),"color"in r&&e(3,s=r.color),"count"in r&&e(5,f=r.count),"config"in r&&e(0,o=r.config),"coopertition"in r&&e(2,a=r.coopertition)},t.$$.update=()=>{if(t.$$.dirty&17){let r=0,d=0;i.forEach(_=>{o.category[_].forEach(P=>{r+=P.value*P.increment,d+=P.value})}),e(1,n=r),e(5,f=d)}},[o,n,a,s,i,f,p,c]}class et extends De{constructor(l){super(),Ie(this,l,pt,dt,Pe,{score:1,color:3,count:5,config:0,coopertition:2})}}function mt(t){let l,e,n,s,f,o,i,a,p,c,r,d,_,P,m,C;return{c(){l=E("div"),e=E("span"),n=G("🤝"),f=A(),o=E("span"),i=G("🤖"),p=A(),c=E("span"),r=G("🪸"),_=A(),P=E("span"),m=G("🤿"),this.h()},l(v){l=w(v,"DIV",{class:!0});var h=T(l);e=w(h,"SPAN",{class:!0,title:!0});var I=T(e);n=W(I,"🤝"),I.forEach(V),f=q(h),o=w(h,"SPAN",{class:!0,title:!0});var b=T(o);i=W(b,"🤖"),b.forEach(V),p=q(h),c=w(h,"SPAN",{class:!0,title:!0});var M=T(c);r=W(M,"🪸"),M.forEach(V),_=q(h),P=w(h,"SPAN",{class:!0,title:!0});var O=T(P);m=W(O,"🤿"),O.forEach(V),h.forEach(V),this.h()},h(){g(e,"class",s="point"+(t[0].coopertition?" active":"")+" svelte-1q20777"),g(e,"title","Coopertition"),g(o,"class",a="point"+(t[0].auto?" active":"")+" color svelte-1q20777"),g(o,"title","Auto"),g(c,"class",d="point"+(t[0].coral?" active":"")+" color svelte-1q20777"),g(c,"title","Coral"),g(P,"class",C="point"+(t[0].barge?" active":"")+" color svelte-1q20777"),g(P,"title","Barge"),g(l,"class","ranking-points svelte-1q20777")},m(v,h){Z(v,l,h),u(l,e),u(e,n),u(l,f),u(l,o),u(o,i),u(l,p),u(l,c),u(c,r),u(l,_),u(l,P),u(P,m)},p(v,[h]){h&1&&s!==(s="point"+(v[0].coopertition?" active":"")+" svelte-1q20777")&&g(e,"class",s),h&1&&a!==(a="point"+(v[0].auto?" active":"")+" color svelte-1q20777")&&g(o,"class",a),h&1&&d!==(d="point"+(v[0].coral?" active":"")+" color svelte-1q20777")&&g(c,"class",d),h&1&&C!==(C="point"+(v[0].barge?" active":"")+" color svelte-1q20777")&&g(P,"class",C)},i:Ae,o:Ae,d(v){v&&V(l)}}}function vt(t,l,e){let{points:n}=l;return t.$$set=s=>{"points"in s&&e(0,n=s.points)},[n]}class bt extends De{constructor(l){super(),Ie(this,l,vt,mt,Pe,{points:0})}}function Vt(t){let l,e,n,s,f,o,i,a,p="-",c,r,d,_,P="+",m,C,v,h="-",I,b,M,O,x="+",j,k;return{c(){l=E("div"),e=E("span"),n=G(t[2]),f=A(),o=E("div"),i=E("div"),a=E("button"),a.textContent=p,c=A(),r=E("input"),d=A(),_=E("button"),_.textContent=P,m=A(),C=E("div"),v=E("button"),v.textContent=h,I=A(),b=E("input"),M=A(),O=E("button"),O.textContent=x,this.h()},l(B){l=w(B,"DIV",{class:!0});var N=T(l);e=w(N,"SPAN",{class:!0});var z=T(e);n=W(z,t[2]),z.forEach(V),f=q(N),o=w(N,"DIV",{class:!0});var F=T(o);i=w(F,"DIV",{class:!0,title:!0});var se=T(i);a=w(se,"BUTTON",{class:!0,"data-svelte-h":!0}),ke(a)!=="svelte-vojdyh"&&(a.textContent=p),c=q(se),r=w(se,"INPUT",{type:!0,min:!0,max:!0,class:!0}),d=q(se),_=w(se,"BUTTON",{class:!0,"data-svelte-h":!0}),ke(_)!=="svelte-1trzu74"&&(_.textContent=P),se.forEach(V),m=q(F),C=w(F,"DIV",{class:!0,title:!0});var ee=T(C);v=w(ee,"BUTTON",{class:!0,"data-svelte-h":!0}),ke(v)!=="svelte-12tqyih"&&(v.textContent=h),I=q(ee),b=w(ee,"INPUT",{type:!0,min:!0,max:!0,class:!0}),M=q(ee),O=w(ee,"BUTTON",{class:!0,"data-svelte-h":!0}),ke(O)!=="svelte-1o9zxvw"&&(O.textContent=x),ee.forEach(V),F.forEach(V),N.forEach(V),this.h()},h(){g(e,"class",s="label "+(t[4]?"title":"")+" svelte-no5x9g"),g(a,"class","svelte-no5x9g"),g(r,"type","number"),g(r,"min","0"),g(r,"max",t[3]),g(r,"class","svelte-no5x9g"),g(_,"class","svelte-no5x9g"),g(i,"class","counter svelte-no5x9g"),g(i,"title","Autonomous"),g(v,"class","svelte-no5x9g"),g(b,"type","number"),g(b,"min","0"),g(b,"max",t[3]),g(b,"class","svelte-no5x9g"),g(O,"class","svelte-no5x9g"),g(C,"class","counter svelte-no5x9g"),g(C,"title","Teleop"),g(o,"class","counters svelte-no5x9g"),g(l,"class","container svelte-no5x9g")},m(B,N){Z(B,l,N),u(l,e),u(e,n),u(l,f),u(l,o),u(o,i),u(i,a),u(i,c),u(i,r),Re(r,t[0]),u(i,d),u(i,_),u(o,m),u(o,C),u(C,v),u(C,I),u(C,b),Re(b,t[1]),u(C,M),u(C,O),j||(k=[de(a,"click",t[11]),de(r,"input",t[12]),de(_,"click",t[13]),de(v,"click",t[14]),de(b,"input",t[15]),de(O,"click",t[16])],j=!0)},p(B,[N]){N&4&&Ce(n,B[2]),N&16&&s!==(s="label "+(B[4]?"title":"")+" svelte-no5x9g")&&g(e,"class",s),N&8&&g(r,"max",B[3]),N&1&&Ue(r.value)!==B[0]&&Re(r,B[0]),N&8&&g(b,"max",B[3]),N&2&&Ue(b.value)!==B[1]&&Re(b,B[1])},i:Ae,o:Ae,d(B){B&&V(l),j=!1,Le(k)}}}function kt(t,l,e){let{label:n,increment:s=1,decrement:f=s,max:o=void 0,title:i=!1}=l,{autoValue:a=0}=l,{teleopValue:p=0}=l,c=()=>{e(0,a+=s)},r=()=>{e(0,a-=f)},d=()=>{e(1,p+=s)},_=()=>{e(1,p-=f)};const P=()=>r();function m(){a=Ue(this.value),e(0,a),e(3,o),e(1,p)}const C=()=>c(),v=()=>_();function h(){p=Ue(this.value),e(1,p),e(0,a),e(3,o)}const I=()=>d();return t.$$set=b=>{"label"in b&&e(2,n=b.label),"increment"in b&&e(9,s=b.increment),"decrement"in b&&e(10,f=b.decrement),"max"in b&&e(3,o=b.max),"title"in b&&e(4,i=b.title),"autoValue"in b&&e(0,a=b.autoValue),"teleopValue"in b&&e(1,p=b.teleopValue)},t.$$.update=()=>{t.$$.dirty&11&&(a<0&&e(0,a=0),o&&a>o&&e(0,a=o),p<0&&e(1,p=0),o&&p>o&&e(1,p=o))},[a,p,n,o,i,c,r,d,_,s,f,P,m,C,v,h,I]}class Me extends De{constructor(l){super(),Ie(this,l,kt,Vt,Pe,{label:2,increment:9,decrement:10,max:3,title:4,autoValue:0,teleopValue:1})}}function Ct(t){let l,e,n,s="Reef",f,o,i,a,p,c,r='<span class="svelte-ctk1ni">Auto</span> <span class="svelte-ctk1ni">Teleop</span>',d,_,P,m,C,v,h,I,b,M,O,x,j,k,B,N,z;function F(S){t[6](S)}function se(S){t[7](S)}let ee={label:"Trough",max:12};t[2][0].auto!==void 0&&(ee.autoValue=t[2][0].auto),t[2][0].teleop!==void 0&&(ee.teleopValue=t[2][0].teleop),_=new Me({props:ee}),te.push(()=>ne(_,"autoValue",F)),te.push(()=>ne(_,"teleopValue",se));function fe(S){t[8](S)}function qe(S){t[9](S)}let ie={label:"Level 2",max:12};t[2][1].auto!==void 0&&(ie.autoValue=t[2][1].auto),t[2][1].teleop!==void 0&&(ie.teleopValue=t[2][1].teleop),v=new Me({props:ie}),te.push(()=>ne(v,"autoValue",fe)),te.push(()=>ne(v,"teleopValue",qe));function pe(S){t[10](S)}function ue(S){t[11](S)}let ce={label:"Level 3",max:12};t[2][2].auto!==void 0&&(ce.autoValue=t[2][2].auto),t[2][2].teleop!==void 0&&(ce.teleopValue=t[2][2].teleop),M=new Me({props:ce}),te.push(()=>ne(M,"autoValue",pe)),te.push(()=>ne(M,"teleopValue",ue));function He(S){t[12](S)}function Oe(S){t[13](S)}let Te={label:"Level 4",max:12};return t[2][3].auto!==void 0&&(Te.autoValue=t[2][3].auto),t[2][3].teleop!==void 0&&(Te.teleopValue=t[2][3].teleop),k=new Me({props:Te}),te.push(()=>ne(k,"autoValue",He)),te.push(()=>ne(k,"teleopValue",Oe)),{c(){l=E("div"),e=E("div"),n=E("h3"),n.textContent=s,f=A(),o=E("h3"),i=G(t[0]),a=A(),p=E("div"),c=E("div"),c.innerHTML=r,d=A(),Q(_.$$.fragment),C=A(),Q(v.$$.fragment),b=A(),Q(M.$$.fragment),j=A(),Q(k.$$.fragment),this.h()},l(S){l=w(S,"DIV",{class:!0,style:!0});var X=T(l);e=w(X,"DIV",{class:!0});var _e=T(e);n=w(_e,"H3",{class:!0,"data-svelte-h":!0}),ke(n)!=="svelte-lowz1b"&&(n.textContent=s),f=q(_e),o=w(_e,"H3",{class:!0});var Ee=T(o);i=W(Ee,t[0]),Ee.forEach(V),_e.forEach(V),a=q(X),p=w(X,"DIV",{class:!0});var re=T(p);c=w(re,"DIV",{class:!0,"data-svelte-h":!0}),ke(c)!=="svelte-mplj0i"&&(c.innerHTML=r),d=q(re),Y(_.$$.fragment,re),C=q(re),Y(v.$$.fragment,re),b=q(re),Y(M.$$.fragment,re),j=q(re),Y(k.$$.fragment,re),re.forEach(V),X.forEach(V),this.h()},h(){g(n,"class","label svelte-ctk1ni"),g(o,"class","score svelte-ctk1ni"),g(e,"class","header svelte-ctk1ni"),g(c,"class","legend svelte-ctk1ni"),g(p,"class","body svelte-ctk1ni"),g(l,"class","container svelte-ctk1ni"),ve(l,"--border-color",t[1])},m(S,X){Z(S,l,X),u(l,e),u(e,n),u(e,f),u(e,o),u(o,i),u(l,a),u(l,p),u(p,c),u(p,d),y(_,p,null),u(p,C),y(v,p,null),u(p,b),y(M,p,null),u(p,j),y(k,p,null),z=!0},p(S,[X]){(!z||X&1)&&Ce(i,S[0]);const _e={};!P&&X&4&&(P=!0,_e.autoValue=S[2][0].auto,le(()=>P=!1)),!m&&X&4&&(m=!0,_e.teleopValue=S[2][0].teleop,le(()=>m=!1)),_.$set(_e);const Ee={};!h&&X&4&&(h=!0,Ee.autoValue=S[2][1].auto,le(()=>h=!1)),!I&&X&4&&(I=!0,Ee.teleopValue=S[2][1].teleop,le(()=>I=!1)),v.$set(Ee);const re={};!O&&X&4&&(O=!0,re.autoValue=S[2][2].auto,le(()=>O=!1)),!x&&X&4&&(x=!0,re.teleopValue=S[2][2].teleop,le(()=>x=!1)),M.$set(re);const be={};!B&&X&4&&(B=!0,be.autoValue=S[2][3].auto,le(()=>B=!1)),!N&&X&4&&(N=!0,be.teleopValue=S[2][3].teleop,le(()=>N=!1)),k.$set(be),(!z||X&2)&&ve(l,"--border-color",S[1])},i(S){z||(U(_.$$.fragment,S),U(v.$$.fragment,S),U(M.$$.fragment,S),U(k.$$.fragment,S),z=!0)},o(S){J(_.$$.fragment,S),J(v.$$.fragment,S),J(M.$$.fragment,S),J(k.$$.fragment,S),z=!1},d(S){S&&V(l),$(_),$(v),$(M),$(k)}}}function Et(t,l,e){let{score:n=0,color:s="#393939",autoCount:f=0,coopertition:o=0,coralRP:i=0}=l,a=[{auto:0,teleop:0},{auto:0,teleop:0},{auto:0,teleop:0},{auto:0,teleop:0}],p={auto:[3,4,6,7],teleop:[2,3,4,5]};function c(h){t.$$.not_equal(a[0].auto,h)&&(a[0].auto=h,e(2,a))}function r(h){t.$$.not_equal(a[0].teleop,h)&&(a[0].teleop=h,e(2,a))}function d(h){t.$$.not_equal(a[1].auto,h)&&(a[1].auto=h,e(2,a))}function _(h){t.$$.not_equal(a[1].teleop,h)&&(a[1].teleop=h,e(2,a))}function P(h){t.$$.not_equal(a[2].auto,h)&&(a[2].auto=h,e(2,a))}function m(h){t.$$.not_equal(a[2].teleop,h)&&(a[2].teleop=h,e(2,a))}function C(h){t.$$.not_equal(a[3].auto,h)&&(a[3].auto=h,e(2,a))}function v(h){t.$$.not_equal(a[3].teleop,h)&&(a[3].teleop=h,e(2,a))}return t.$$set=h=>{"score"in h&&e(0,n=h.score),"color"in h&&e(1,s=h.color),"autoCount"in h&&e(3,f=h.autoCount),"coopertition"in h&&e(5,o=h.coopertition),"coralRP"in h&&e(4,i=h.coralRP)},t.$$.update=()=>{if(t.$$.dirty&44){let h=0,I=0;e(3,f=0);for(let b=0;b<a.length;b++)h+=a[b].auto*p.auto[b]+a[b].teleop*p.teleop[b],e(3,f+=a[b].auto),a[b].auto+a[b].teleop>=5&&(I+=1);e(0,n=h),I>=4||o&&I>=3?e(4,i=1):e(4,i=0)}},[n,s,a,f,i,o,c,r,d,_,P,m,C,v]}class wt extends De{constructor(l){super(),Ie(this,l,Et,Ct,Pe,{score:0,color:1,autoCount:3,coopertition:5,coralRP:4})}}function Pt(t){let l,e,n,s,f,o,i,a,p,c,r,d,_,P,m,C,v,h,I,b,M,O,x;return{c(){l=E("div"),e=E("span"),n=G(t[1]),f=A(),o=E("div"),i=E("button"),a=G("X"),c=A(),r=E("button"),d=G("P"),P=A(),m=E("button"),C=G("S"),h=A(),I=E("button"),b=G("D"),this.h()},l(j){l=w(j,"DIV",{class:!0});var k=T(l);e=w(k,"SPAN",{class:!0,title:!0});var B=T(e);n=W(B,t[1]),B.forEach(V),f=q(k),o=w(k,"DIV",{class:!0,style:!0});var N=T(o);i=w(N,"BUTTON",{title:!0,class:!0});var z=T(i);a=W(z,"X"),z.forEach(V),c=q(N),r=w(N,"BUTTON",{title:!0,class:!0});var F=T(r);d=W(F,"P"),F.forEach(V),P=q(N),m=w(N,"BUTTON",{title:!0,class:!0});var se=T(m);C=W(se,"S"),se.forEach(V),h=q(N),I=w(N,"BUTTON",{title:!0,class:!0});var ee=T(I);b=W(ee,"D"),ee.forEach(V),N.forEach(V),k.forEach(V),this.h()},h(){g(e,"class",s="label "+(t[2]?"title":"")+" svelte-o1gr0v"),g(e,"title",t[1]),g(i,"title","Not interacting with barge"),g(i,"class",p=Ne(t[0]==0?"selected":"")+" svelte-o1gr0v"),g(r,"title","Parked"),g(r,"class",_=Ne(t[0]==1?"selected":"")+" svelte-o1gr0v"),g(m,"title","Shallow Cage Hang"),g(m,"class",v=Ne(t[0]==2?"selected":"")+" svelte-o1gr0v"),g(I,"title","Deep Cage Hang"),g(I,"class",M=Ne(t[0]==3?"selected":"")+" svelte-o1gr0v"),g(o,"class","radio svelte-o1gr0v"),ve(o,"--alliance-color",t[3]),g(l,"class","container svelte-o1gr0v")},m(j,k){Z(j,l,k),u(l,e),u(e,n),u(l,f),u(l,o),u(o,i),u(i,a),u(o,c),u(o,r),u(r,d),u(o,P),u(o,m),u(m,C),u(o,h),u(o,I),u(I,b),O||(x=[de(i,"click",t[5]),de(r,"click",t[6]),de(m,"click",t[7]),de(I,"click",t[8])],O=!0)},p(j,[k]){k&2&&Ce(n,j[1]),k&4&&s!==(s="label "+(j[2]?"title":"")+" svelte-o1gr0v")&&g(e,"class",s),k&2&&g(e,"title",j[1]),k&1&&p!==(p=Ne(j[0]==0?"selected":"")+" svelte-o1gr0v")&&g(i,"class",p),k&1&&_!==(_=Ne(j[0]==1?"selected":"")+" svelte-o1gr0v")&&g(r,"class",_),k&1&&v!==(v=Ne(j[0]==2?"selected":"")+" svelte-o1gr0v")&&g(m,"class",v),k&1&&M!==(M=Ne(j[0]==3?"selected":"")+" svelte-o1gr0v")&&g(I,"class",M),k&8&&ve(o,"--alliance-color",j[3])},i:Ae,o:Ae,d(j){j&&V(l),O=!1,Le(x)}}}function Dt(t,l,e){let{label:n,title:s=!1,color:f="#E4A234"}=l,{value:o=0}=l;function i(d){e(0,o=d)}const a=()=>i(0),p=()=>i(1),c=()=>i(2),r=()=>i(3);return t.$$set=d=>{"label"in d&&e(1,n=d.label),"title"in d&&e(2,s=d.title),"color"in d&&e(3,f=d.color),"value"in d&&e(0,o=d.value)},t.$$.update=()=>{t.$$.dirty&1&&o<0&&e(0,o=0)},[o,n,s,f,i,a,p,c,r]}class Xe extends De{constructor(l){super(),Ie(this,l,Dt,Pt,Pe,{label:1,title:2,color:3,value:0})}}function It(t){let l,e,n,s="Barge",f,o,i,a,p,c,r,d,_,P,m,C,v,h;function I(k){t[5](k)}let b={label:"Robot 1",color:t[2]};t[3][0]!==void 0&&(b.value=t[3][0]),c=new Xe({props:b}),te.push(()=>ne(c,"value",I));function M(k){t[6](k)}let O={label:"Robot 2",color:t[2]};t[3][1]!==void 0&&(O.value=t[3][1]),_=new Xe({props:O}),te.push(()=>ne(_,"value",M));function x(k){t[7](k)}let j={label:"Robot 3",color:t[2]};return t[3][2]!==void 0&&(j.value=t[3][2]),C=new Xe({props:j}),te.push(()=>ne(C,"value",x)),{c(){l=E("div"),e=E("div"),n=E("h3"),n.textContent=s,f=A(),o=E("h3"),i=G(t[0]),a=A(),p=E("div"),Q(c.$$.fragment),d=A(),Q(_.$$.fragment),m=A(),Q(C.$$.fragment),this.h()},l(k){l=w(k,"DIV",{class:!0,style:!0});var B=T(l);e=w(B,"DIV",{class:!0});var N=T(e);n=w(N,"H3",{class:!0,"data-svelte-h":!0}),ke(n)!=="svelte-1hs6vkw"&&(n.textContent=s),f=q(N),o=w(N,"H3",{class:!0});var z=T(o);i=W(z,t[0]),z.forEach(V),N.forEach(V),a=q(B),p=w(B,"DIV",{class:!0});var F=T(p);Y(c.$$.fragment,F),d=q(F),Y(_.$$.fragment,F),m=q(F),Y(C.$$.fragment,F),F.forEach(V),B.forEach(V),this.h()},h(){g(n,"class","label svelte-35d0fx"),g(o,"class","score svelte-35d0fx"),g(e,"class","header svelte-35d0fx"),g(p,"class","body svelte-35d0fx"),g(l,"class","container svelte-35d0fx"),ve(l,"--border-color",t[1])},m(k,B){Z(k,l,B),u(l,e),u(e,n),u(e,f),u(e,o),u(o,i),u(l,a),u(l,p),y(c,p,null),u(p,d),y(_,p,null),u(p,m),y(C,p,null),h=!0},p(k,[B]){(!h||B&1)&&Ce(i,k[0]);const N={};B&4&&(N.color=k[2]),!r&&B&8&&(r=!0,N.value=k[3][0],le(()=>r=!1)),c.$set(N);const z={};B&4&&(z.color=k[2]),!P&&B&8&&(P=!0,z.value=k[3][1],le(()=>P=!1)),_.$set(z);const F={};B&4&&(F.color=k[2]),!v&&B&8&&(v=!0,F.value=k[3][2],le(()=>v=!1)),C.$set(F),(!h||B&2)&&ve(l,"--border-color",k[1])},i(k){h||(U(c.$$.fragment,k),U(_.$$.fragment,k),U(C.$$.fragment,k),h=!0)},o(k){J(c.$$.fragment,k),J(_.$$.fragment,k),J(C.$$.fragment,k),h=!1},d(k){k&&V(l),$(c),$(_),$(C)}}}function Rt(t,l,e){let{score:n=0,color:s="#393939",radioColor:f=void 0,bargeRP:o=0}=l,i=[0,0,0];function a(r){t.$$.not_equal(i[0],r)&&(i[0]=r,e(3,i))}function p(r){t.$$.not_equal(i[1],r)&&(i[1]=r,e(3,i))}function c(r){t.$$.not_equal(i[2],r)&&(i[2]=r,e(3,i))}return t.$$set=r=>{"score"in r&&e(0,n=r.score),"color"in r&&e(1,s=r.color),"radioColor"in r&&e(2,f=r.radioColor),"bargeRP"in r&&e(4,o=r.bargeRP)},t.$$.update=()=>{t.$$.dirty&9&&(e(0,n=0),i.forEach(r=>{switch(r){case 1:e(0,n+=2);break;case 2:e(0,n+=6);break;case 3:e(0,n+=12);break}}),n>=14?e(4,o=1):e(4,o=0))},[n,s,f,i,o,a,p,c]}class At extends De{constructor(l){super(),Ie(this,l,Rt,It,Pe,{score:0,color:1,radioColor:2,bargeRP:4})}}function qt(t){let l,e,n,s,f,o,i,a,p,c,r,d,_,P,m=t[0].score+"",C,v,h,I,b,M,O,x,j,k,B,N,z,F,se,ee,fe,qe,ie,pe,ue,ce;r=new bt({props:{points:t[1]}});function He(D){t[8](D)}function Oe(D){t[9](D)}function Te(D){t[10](D)}function S(D){t[11](D)}let X={};t[2].reef!==void 0&&(X.score=t[2].reef),t[1].coopertition!==void 0&&(X.coopertition=t[1].coopertition),t[1].coral!==void 0&&(X.coralRP=t[1].coral),t[3]!==void 0&&(X.autoCount=t[3]),I=new wt({props:X}),te.push(()=>ne(I,"score",He)),te.push(()=>ne(I,"coopertition",Oe)),te.push(()=>ne(I,"coralRP",Te)),te.push(()=>ne(I,"autoCount",S));function _e(D){t[12](D)}let Ee={config:t[4]};t[2].algae!==void 0&&(Ee.score=t[2].algae),k=new et({props:Ee}),te.push(()=>ne(k,"score",_e));function re(D){t[13](D)}function be(D){t[14](D)}let K={radioColor:t[0].color};t[2].barge!==void 0&&(K.score=t[2].barge),t[1].barge!==void 0&&(K.bargeRP=t[1].barge),z=new At({props:K}),te.push(()=>ne(z,"score",re)),te.push(()=>ne(z,"bargeRP",be));function Fe(D){t[15](D)}function R(D){t[16](D)}let L={config:t[5]};return t[2].general!==void 0&&(L.score=t[2].general),t[1].coopertition!==void 0&&(L.coopertition=t[1].coopertition),fe=new et({props:L}),te.push(()=>ne(fe,"score",Fe)),te.push(()=>ne(fe,"coopertition",R)),{c(){l=E("div"),e=E("div"),n=E("div"),s=E("div"),f=E("input"),o=A(),i=E("div"),a=E("input"),c=A(),Q(r.$$.fragment),d=A(),_=E("h2"),P=G("Total Score: "),C=G(m),v=A(),h=E("div"),Q(I.$$.fragment),j=A(),Q(k.$$.fragment),N=A(),Q(z.$$.fragment),ee=A(),Q(fe.$$.fragment),this.h()},l(D){l=w(D,"DIV",{class:!0});var H=T(l);e=w(H,"DIV",{class:!0});var ae=T(e);n=w(ae,"DIV",{class:!0});var oe=T(n);s=w(oe,"DIV",{class:!0,style:!0});var he=T(s);f=w(he,"INPUT",{type:!0,maxlength:!0,class:!0}),he.forEach(V),o=q(oe),i=w(oe,"DIV",{class:!0});var Ve=T(i);a=w(Ve,"INPUT",{class:!0,size:!0,type:!0,maxlength:!0,placeholder:!0}),Ve.forEach(V),oe.forEach(V),c=q(ae),Y(r.$$.fragment,ae),d=q(ae),_=w(ae,"H2",{class:!0});var me=T(_);P=W(me,"Total Score: "),C=W(me,m),me.forEach(V),ae.forEach(V),v=q(H),h=w(H,"DIV",{class:!0,style:!0});var we=T(h);Y(I.$$.fragment,we),j=q(we),Y(k.$$.fragment,we),N=q(we),Y(z.$$.fragment,we),ee=q(we),Y(fe.$$.fragment,we),we.forEach(V),H.forEach(V),this.h()},h(){g(f,"type","color"),g(f,"maxlength","16"),g(f,"class","svelte-s32kh0"),g(s,"class","input color svelte-s32kh0"),ve(s,"--alliance-color",t[0].color),g(a,"class","editable-name svelte-s32kh0"),g(a,"size",p=t[0].name.length??0),g(a,"type","text"),g(a,"maxlength","20"),g(a,"placeholder","New Alliance"),g(i,"class","input svelte-s32kh0"),g(n,"class","inputs svelte-s32kh0"),g(_,"class","score svelte-s32kh0"),g(e,"class","header svelte-s32kh0"),g(h,"class","container svelte-s32kh0"),ve(h,"--border-color",t[0].color),g(l,"class","wrapper svelte-s32kh0")},m(D,H){Z(D,l,H),u(l,e),u(e,n),u(n,s),u(s,f),Re(f,t[0].color),u(n,o),u(n,i),u(i,a),Re(a,t[0].name),u(e,c),y(r,e,null),u(e,d),u(e,_),u(_,P),u(_,C),u(l,v),u(l,h),y(I,h,null),u(h,j),y(k,h,null),u(h,N),y(z,h,null),u(h,ee),y(fe,h,null),pe=!0,ue||(ce=[de(f,"input",t[6]),de(a,"input",t[7])],ue=!0)},p(D,[H]){H&1&&Re(f,D[0].color),(!pe||H&1)&&ve(s,"--alliance-color",D[0].color),(!pe||H&1&&p!==(p=D[0].name.length??0))&&g(a,"size",p),H&1&&a.value!==D[0].name&&Re(a,D[0].name);const ae={};H&2&&(ae.points=D[1]),r.$set(ae),(!pe||H&1)&&m!==(m=D[0].score+"")&&Ce(C,m);const oe={};!b&&H&4&&(b=!0,oe.score=D[2].reef,le(()=>b=!1)),!M&&H&2&&(M=!0,oe.coopertition=D[1].coopertition,le(()=>M=!1)),!O&&H&2&&(O=!0,oe.coralRP=D[1].coral,le(()=>O=!1)),!x&&H&8&&(x=!0,oe.autoCount=D[3],le(()=>x=!1)),I.$set(oe);const he={};!B&&H&4&&(B=!0,he.score=D[2].algae,le(()=>B=!1)),k.$set(he);const Ve={};H&1&&(Ve.radioColor=D[0].color),!F&&H&4&&(F=!0,Ve.score=D[2].barge,le(()=>F=!1)),!se&&H&2&&(se=!0,Ve.bargeRP=D[1].barge,le(()=>se=!1)),z.$set(Ve);const me={};!qe&&H&4&&(qe=!0,me.score=D[2].general,le(()=>qe=!1)),!ie&&H&2&&(ie=!0,me.coopertition=D[1].coopertition,le(()=>ie=!1)),fe.$set(me),(!pe||H&1)&&ve(h,"--border-color",D[0].color)},i(D){pe||(U(r.$$.fragment,D),U(I.$$.fragment,D),U(k.$$.fragment,D),U(z.$$.fragment,D),U(fe.$$.fragment,D),pe=!0)},o(D){J(r.$$.fragment,D),J(I.$$.fragment,D),J(k.$$.fragment,D),J(z.$$.fragment,D),J(fe.$$.fragment,D),pe=!1},d(D){D&&V(l),$(r),$(I),$(k),$(z),$(fe),ue=!1,Le(ce)}}}function Tt(t,l,e){let{alliance:n}=l,s={reef:0,algae:0,barge:0,general:0},f=0,{special:o={coopertition:0,auto:0,coral:0,barge:0}}=l,i={name:"Algae",category:{Location:[{label:"Processor",value:0,increment:6},{label:"Net",value:0,increment:4}]}},a={name:"General",category:{Auto:[{label:"Robot Left Start",value:0,increment:3,max:3}],Coopertition:[{label:"2 algae in each processor",value:0,increment:0,coopertition:!0,max:1}]}};function p(){n.color=this.value,e(0,n),e(2,s),e(3,f)}function c(){n.name=this.value,e(0,n),e(2,s),e(3,f)}function r(b){t.$$.not_equal(s.reef,b)&&(s.reef=b,e(2,s))}function d(b){t.$$.not_equal(o.coopertition,b)&&(o.coopertition=b,e(1,o),e(2,s),e(3,f))}function _(b){t.$$.not_equal(o.coral,b)&&(o.coral=b,e(1,o),e(2,s),e(3,f))}function P(b){f=b,e(3,f)}function m(b){t.$$.not_equal(s.algae,b)&&(s.algae=b,e(2,s))}function C(b){t.$$.not_equal(s.barge,b)&&(s.barge=b,e(2,s))}function v(b){t.$$.not_equal(o.barge,b)&&(o.barge=b,e(1,o),e(2,s),e(3,f))}function h(b){t.$$.not_equal(s.general,b)&&(s.general=b,e(2,s))}function I(b){t.$$.not_equal(o.coopertition,b)&&(o.coopertition=b,e(1,o),e(2,s),e(3,f))}return t.$$set=b=>{"alliance"in b&&e(0,n=b.alliance),"special"in b&&e(1,o=b.special)},t.$$.update=()=>{t.$$.dirty&12&&(e(0,n.score=s.algae+s.barge+s.general+s.reef,n),e(1,o.auto=s.general>=9&&f>=1?1:0,o))},[n,o,s,f,i,a,p,c,r,d,_,P,m,C,v,h,I]}class Nt extends De{constructor(l){super(),Ie(this,l,Tt,qt,Pe,{alliance:0,special:1})}}function tt(t,l,e){const n=t.slice();return n[2]=l[e],n}function lt(t){let l,e,n=t[2].name+"",s,f,o,i=t[2].score+"",a,p;return{c(){l=E("div"),e=E("h4"),s=G(n),f=A(),o=E("span"),a=G(i),p=A(),this.h()},l(c){l=w(c,"DIV",{class:!0,style:!0});var r=T(l);e=w(r,"H4",{class:!0});var d=T(e);s=W(d,n),d.forEach(V),f=q(r),o=w(r,"SPAN",{class:!0});var _=T(o);a=W(_,i),_.forEach(V),p=q(r),r.forEach(V),this.h()},h(){g(e,"class","svelte-14f6il4"),g(o,"class","score svelte-14f6il4"),g(l,"class","row svelte-14f6il4"),ve(l,"--alliance-color",t[2].color)},m(c,r){Z(c,l,r),u(l,e),u(e,s),u(l,f),u(l,o),u(o,a),u(l,p)},p(c,r){r&1&&n!==(n=c[2].name+"")&&Ce(s,n),r&1&&i!==(i=c[2].score+"")&&Ce(a,i),r&1&&ve(l,"--alliance-color",c[2].color)},d(c){c&&V(l)}}}function St(t){let l,e=Be(t[0]),n=[];for(let s=0;s<e.length;s+=1)n[s]=lt(tt(t,e,s));return{c(){l=E("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){l=w(s,"DIV",{class:!0});var f=T(l);for(let o=0;o<n.length;o+=1)n[o].l(f);f.forEach(V),this.h()},h(){g(l,"class","leaderboard svelte-14f6il4")},m(s,f){Z(s,l,f);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(l,null)},p(s,[f]){if(f&1){e=Be(s[0]);let o;for(o=0;o<e.length;o+=1){const i=tt(s,e,o);n[o]?n[o].p(i,f):(n[o]=lt(i),n[o].c(),n[o].m(l,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=e.length}},i:Ae,o:Ae,d(s){s&&V(l),je(n,s)}}}function Bt(t,l,e){let{alliances:n}=l,s=[];return t.$$set=f=>{"alliances"in f&&e(1,n=f.alliances)},t.$$.update=()=>{t.$$.dirty&3&&(e(0,s=n.map(f=>({...f}))),s.sort((f,o)=>o.score-f.score))},[s,n]}class Ht extends De{constructor(l){super(),Ie(this,l,Bt,St,Pe,{alliances:1})}}function nt(t){let l,e;return{c(){l=E("h3"),e=G(t[1]),this.h()},l(n){l=w(n,"H3",{class:!0});var s=T(l);e=W(s,t[1]),s.forEach(V),this.h()},h(){g(l,"class","svelte-ecbh7c")},m(n,s){Z(n,l,s),u(l,e)},p(n,s){s&2&&Ce(e,n[1])},d(n){n&&V(l)}}}function Ot(t){let l,e,n,s,f,o,i,a,p,c;const r=t[4].default,d=st(r,t,t[3],null);let _=t[1]&&nt(t);return{c(){l=E("div"),e=E("div"),n=E("span"),d&&d.c(),f=A(),o=E("div"),_&&_.c(),i=A(),a=E("p"),p=G(t[0]),this.h()},l(P){l=w(P,"DIV",{class:!0});var m=T(l);e=w(m,"DIV",{class:!0});var C=T(e);n=w(C,"SPAN",{class:!0});var v=T(n);d&&d.l(v),v.forEach(V),C.forEach(V),f=q(m),o=w(m,"DIV",{class:!0});var h=T(o);_&&_.l(h),i=q(h),a=w(h,"P",{class:!0});var I=T(a);p=W(I,t[0]),I.forEach(V),h.forEach(V),m.forEach(V),this.h()},h(){g(n,"class",s="point"+(t[2]?" colored":"")+(t[1]?" large":"")+" svelte-ecbh7c"),g(e,"class","key svelte-ecbh7c"),g(a,"class","svelte-ecbh7c"),g(o,"class","info svelte-ecbh7c"),g(l,"class","container svelte-ecbh7c")},m(P,m){Z(P,l,m),u(l,e),u(e,n),d&&d.m(n,null),u(l,f),u(l,o),_&&_.m(o,null),u(o,i),u(o,a),u(a,p),c=!0},p(P,[m]){d&&d.p&&(!c||m&8)&&rt(d,r,P,P[3],c?ut(r,P[3],m,null):it(P[3]),null),(!c||m&6&&s!==(s="point"+(P[2]?" colored":"")+(P[1]?" large":"")+" svelte-ecbh7c"))&&g(n,"class",s),P[1]?_?_.p(P,m):(_=nt(P),_.c(),_.m(o,i)):_&&(_.d(1),_=null),(!c||m&1)&&Ce(p,P[0])},i(P){c||(U(d,P),c=!0)},o(P){J(d,P),c=!1},d(P){P&&V(l),d&&d.d(P),_&&_.d()}}}function Ut(t,l,e){let{$$slots:n={},$$scope:s}=l,{description:f,title:o=!1,colored:i=!1}=l;return t.$$set=a=>{"description"in a&&e(0,f=a.description),"title"in a&&e(1,o=a.title),"colored"in a&&e(2,i=a.colored),"$$scope"in a&&e(3,s=a.$$scope)},[f,o,i,s,n]}class Se extends De{constructor(l){super(),Ie(this,l,Ut,Ot,Pe,{description:0,title:1,colored:2})}}function ot(t,l,e){const n=t.slice();return n[4]=l[e],n[5]=l,n[6]=e,n}function Mt(t){let l;return{c(){l=G("X")},l(e){l=W(e,"X")},m(e,n){Z(e,l,n)},d(e){e&&V(l)}}}function Lt(t){let l;return{c(){l=G("P")},l(e){l=W(e,"P")},m(e,n){Z(e,l,n)},d(e){e&&V(l)}}}function zt(t){let l;return{c(){l=G("S")},l(e){l=W(e,"S")},m(e,n){Z(e,l,n)},d(e){e&&V(l)}}}function Jt(t){let l;return{c(){l=G("D")},l(e){l=W(e,"D")},m(e,n){Z(e,l,n)},d(e){e&&V(l)}}}function jt(t){let l;return{c(){l=G("🤝")},l(e){l=W(e,"🤝")},m(e,n){Z(e,l,n)},d(e){e&&V(l)}}}function Ft(t){let l;return{c(){l=G("🤖")},l(e){l=W(e,"🤖")},m(e,n){Z(e,l,n)},d(e){e&&V(l)}}}function Xt(t){let l;return{c(){l=G("🪸")},l(e){l=W(e,"🪸")},m(e,n){Z(e,l,n)},d(e){e&&V(l)}}}function Gt(t){let l;return{c(){l=G("🤿")},l(e){l=W(e,"🤿")},m(e,n){Z(e,l,n)},d(e){e&&V(l)}}}function at(t){let l,e,n;function s(o){t[3](o,t[4],t[5],t[6])}let f={};return t[4]!==void 0&&(f.alliance=t[4]),l=new Nt({props:f}),te.push(()=>ne(l,"alliance",s)),{c(){Q(l.$$.fragment)},l(o){Y(l.$$.fragment,o)},m(o,i){y(l,o,i),n=!0},p(o,i){t=o;const a={};!e&&i&2&&(e=!0,a.alliance=t[4],le(()=>e=!1)),l.$set(a)},i(o){n||(U(l.$$.fragment,o),n=!0)},o(o){J(l.$$.fragment,o),n=!1},d(o){$(l,o)}}}function Wt(t){let l,e,n,s,f='<a href="https://www.firstinspires.org/robotics/frc/game-and-season"><img class="logo svelte-1n41sr6" src="./reefscape.png" alt="Reefscape Logo"/></a> <h4 class="svelte-1n41sr6">Scoring Calculator</h4> <p class="svelte-1n41sr6">Created by <a href="https://github.com/murphy28">Ohlin Arellano</a></p> <p class="svelte-1n41sr6">From <a href="https://pairofdice.vegas/">Pair of Dice 7426</a></p> <div class="links svelte-1n41sr6"><a href="https://github.com/7426-Pair-Of-Dice/FRC-Scoring-Calculator" class="svelte-1n41sr6">Github</a> <a href="https://www.chiefdelphi.com/t/reefscape-web-scoring-calculator/478718" class="svelte-1n41sr6">Chief Delphi</a></div>',o,i,a="Barge Actions",p,c,r,d,_,P,m,C,v,h,I,b="Ranking Points",M,O,x,j,k,B,N,z,F,se,ee,fe="Leaderboard",qe,ie,pe,ue,ce,He,Oe,Te,S,X,_e;r=new Se({props:{description:"Robot has not interacted with barge.",$$slots:{default:[Mt]},$$scope:{ctx:t}}}),_=new Se({props:{description:"Robot is parked in the barge zone.",$$slots:{default:[Lt]},$$scope:{ctx:t}}}),m=new Se({props:{description:"Robot is off-the-ground via shallow cage.",$$slots:{default:[zt]},$$scope:{ctx:t}}}),v=new Se({props:{description:"Robot is off-the-ground via deep cage.",$$slots:{default:[Jt]},$$scope:{ctx:t}}}),x=new Se({props:{title:"Coopertition Bonus",description:"At least 2 algae scored in each processor",$$slots:{default:[jt]},$$scope:{ctx:t}}}),k=new Se({props:{title:"Auto",description:"All robots leave and score 1 or more coral in auto",colored:!0,$$slots:{default:[Ft]},$$scope:{ctx:t}}}),N=new Se({props:{title:"Coral",description:"If at least 5 coral scored on each level. If co-op bonus, at least 5 coral scored on at least 3 levels",colored:!0,$$slots:{default:[Xt]},$$scope:{ctx:t}}}),F=new Se({props:{title:"Barge",description:"At least 14 barge points scored",colored:!0,$$slots:{default:[Gt]},$$scope:{ctx:t}}}),ie=new Ht({props:{alliances:t[1]}});function Ee(R){t[2](R)}let re={label:"Alliances",max:30,multiplier:0,title:!0};t[0]!==void 0&&(re.value=t[0]),ce=new Ge({props:re}),te.push(()=>ne(ce,"value",Ee));let be=Be(t[1]),K=[];for(let R=0;R<be.length;R+=1)K[R]=at(ot(t,be,R));const Fe=R=>J(K[R],1,1,()=>{K[R]=null});return{c(){l=A(),e=E("main"),n=E("div"),s=E("div"),s.innerHTML=f,o=A(),i=E("h3"),i.textContent=a,p=A(),c=E("div"),Q(r.$$.fragment),d=A(),Q(_.$$.fragment),P=A(),Q(m.$$.fragment),C=A(),Q(v.$$.fragment),h=A(),I=E("h3"),I.textContent=b,M=A(),O=E("div"),Q(x.$$.fragment),j=A(),Q(k.$$.fragment),B=A(),Q(N.$$.fragment),z=A(),Q(F.$$.fragment),se=A(),ee=E("h3"),ee.textContent=fe,qe=A(),Q(ie.$$.fragment),pe=A(),ue=E("div"),Q(ce.$$.fragment),Oe=A(),Te=E("br"),S=A(),X=E("div");for(let R=0;R<K.length;R+=1)K[R].c();this.h()},l(R){ct("svelte-bu8891",document.head).forEach(V),l=q(R),e=w(R,"MAIN",{class:!0});var D=T(e);n=w(D,"DIV",{class:!0});var H=T(n);s=w(H,"DIV",{class:!0,"data-svelte-h":!0}),ke(s)!=="svelte-ozkkrz"&&(s.innerHTML=f),o=q(H),i=w(H,"H3",{"data-svelte-h":!0}),ke(i)!=="svelte-1knqic"&&(i.textContent=a),p=q(H),c=w(H,"DIV",{class:!0});var ae=T(c);Y(r.$$.fragment,ae),d=q(ae),Y(_.$$.fragment,ae),P=q(ae),Y(m.$$.fragment,ae),C=q(ae),Y(v.$$.fragment,ae),ae.forEach(V),h=q(H),I=w(H,"H3",{"data-svelte-h":!0}),ke(I)!=="svelte-13i8nqp"&&(I.textContent=b),M=q(H),O=w(H,"DIV",{class:!0});var oe=T(O);Y(x.$$.fragment,oe),j=q(oe),Y(k.$$.fragment,oe),B=q(oe),Y(N.$$.fragment,oe),z=q(oe),Y(F.$$.fragment,oe),oe.forEach(V),se=q(H),ee=w(H,"H3",{"data-svelte-h":!0}),ke(ee)!=="svelte-5eafub"&&(ee.textContent=fe),qe=q(H),Y(ie.$$.fragment,H),H.forEach(V),pe=q(D),ue=w(D,"DIV",{class:!0});var he=T(ue);Y(ce.$$.fragment,he),Oe=q(he),Te=w(he,"BR",{}),S=q(he),X=w(he,"DIV",{class:!0});var Ve=T(X);for(let me=0;me<K.length;me+=1)K[me].l(Ve);Ve.forEach(V),he.forEach(V),D.forEach(V),this.h()},h(){document.title="Reefscape Calculator",g(s,"class","header svelte-1n41sr6"),g(c,"class","legend"),g(O,"class","legend"),g(n,"class","controls svelte-1n41sr6"),g(X,"class","teams svelte-1n41sr6"),g(ue,"class","teams-wrapper svelte-1n41sr6"),g(e,"class","svelte-1n41sr6")},m(R,L){Z(R,l,L),Z(R,e,L),u(e,n),u(n,s),u(n,o),u(n,i),u(n,p),u(n,c),y(r,c,null),u(c,d),y(_,c,null),u(c,P),y(m,c,null),u(c,C),y(v,c,null),u(n,h),u(n,I),u(n,M),u(n,O),y(x,O,null),u(O,j),y(k,O,null),u(O,B),y(N,O,null),u(O,z),y(F,O,null),u(n,se),u(n,ee),u(n,qe),y(ie,n,null),u(e,pe),u(e,ue),y(ce,ue,null),u(ue,Oe),u(ue,Te),u(ue,S),u(ue,X);for(let D=0;D<K.length;D+=1)K[D]&&K[D].m(X,null);_e=!0},p(R,[L]){const D={};L&128&&(D.$$scope={dirty:L,ctx:R}),r.$set(D);const H={};L&128&&(H.$$scope={dirty:L,ctx:R}),_.$set(H);const ae={};L&128&&(ae.$$scope={dirty:L,ctx:R}),m.$set(ae);const oe={};L&128&&(oe.$$scope={dirty:L,ctx:R}),v.$set(oe);const he={};L&128&&(he.$$scope={dirty:L,ctx:R}),x.$set(he);const Ve={};L&128&&(Ve.$$scope={dirty:L,ctx:R}),k.$set(Ve);const me={};L&128&&(me.$$scope={dirty:L,ctx:R}),N.$set(me);const we={};L&128&&(we.$$scope={dirty:L,ctx:R}),F.$set(we);const We={};L&2&&(We.alliances=R[1]),ie.$set(We);const Ke={};if(!He&&L&1&&(He=!0,Ke.value=R[0],le(()=>He=!1)),ce.$set(Ke),L&2){be=Be(R[1]);let ge;for(ge=0;ge<be.length;ge+=1){const Ze=ot(R,be,ge);K[ge]?(K[ge].p(Ze,L),U(K[ge],1)):(K[ge]=at(Ze),K[ge].c(),U(K[ge],1),K[ge].m(X,null))}for(ze(),ge=be.length;ge<K.length;ge+=1)Fe(ge);Je()}},i(R){if(!_e){U(r.$$.fragment,R),U(_.$$.fragment,R),U(m.$$.fragment,R),U(v.$$.fragment,R),U(x.$$.fragment,R),U(k.$$.fragment,R),U(N.$$.fragment,R),U(F.$$.fragment,R),U(ie.$$.fragment,R),U(ce.$$.fragment,R);for(let L=0;L<be.length;L+=1)U(K[L]);_e=!0}},o(R){J(r.$$.fragment,R),J(_.$$.fragment,R),J(m.$$.fragment,R),J(v.$$.fragment,R),J(x.$$.fragment,R),J(k.$$.fragment,R),J(N.$$.fragment,R),J(F.$$.fragment,R),J(ie.$$.fragment,R),J(ce.$$.fragment,R),K=K.filter(Boolean);for(let L=0;L<K.length;L+=1)J(K[L]);_e=!1},d(R){R&&(V(l),V(e)),$(r),$(_),$(m),$(v),$(x),$(k),$(N),$(F),$(ie),$(ce),je(K,R)}}}function Kt(){return"#"+Math.floor(Math.random()*16777215).toString(16)}function Zt(){let t=["Otto","Ohlin","Anthony","Aidan","Aspen","West","Goblo","Cohen","Eli","Brian","Jo","Annabelle","Alex","Vieira","Miller","Jackie","Jonathan","Stephen","Zach","Armando","Marco","Rose","Skylar","John","Bechtler","Myers","Ollie","Drake","Jory","Ella","Cole"];return t[Math.floor(Math.random()*t.length)]}function Qt(t,l,e){let n=2,s=[{name:"Red Alliance",color:"#ff304f",score:0},{name:"Blue Alliance",color:"#2f89fc",score:0}];function f(i){n=i,e(0,n),e(1,s)}function o(i,a,p,c){p[c]=i,e(1,s),e(0,n)}return t.$$.update=()=>{if(t.$$.dirty&3){for(n<1&&e(0,n=1),n>30&&e(0,n=30);s.length<n;)e(1,s=[...s,{name:`${Zt()} Alliance`,color:Kt(),score:0}]);for(;s.length>n;)e(1,s=s.slice(0,-1))}},[n,s,f,o]}class $t extends De{constructor(l){super(),Ie(this,l,Qt,Wt,Pe,{})}}export{$t as component};
