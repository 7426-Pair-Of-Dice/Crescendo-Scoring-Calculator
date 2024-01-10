import{s as Ce,n as Ee,r as Me,b as ae,f as re,h as ce,c as at,u as rt,g as it,d as ct}from"../chunks/scheduler.Woq52Yk-.js";import{S as $e,i as we,g as C,m as M,s as T,h as $,j as N,n as L,f as p,c as V,y as Te,k as g,a as G,x as _,z as Oe,A as ge,o as ke,B as ot,l as he,d as P,p as Le,b as Ue,t as R,C as He,e as We,D as ie,r as W,u as Z,v as Q,w as Y,E as ut}from"../chunks/index.ibmgEkrh.js";function Ve(l){return l?.length!==void 0?l:Array.from(l)}function ft(l){let t,e,s,o,c,n,r,a,m="-",i,f,v,h,b="+",u,w;return{c(){t=C("div"),e=C("span"),s=M(l[1]),n=T(),r=C("div"),a=C("button"),a.textContent=m,i=T(),f=C("input"),v=T(),h=C("button"),h.textContent=b,this.h()},l(k){t=$(k,"DIV",{class:!0});var A=N(t);e=$(A,"SPAN",{class:!0,title:!0});var D=N(e);s=L(D,l[1]),D.forEach(p),n=V(A),r=$(A,"DIV",{class:!0});var E=N(r);a=$(E,"BUTTON",{class:!0,"data-svelte-h":!0}),Te(a)!=="svelte-1si2c2i"&&(a.textContent=m),i=V(E),f=$(E,"INPUT",{type:!0,min:!0,max:!0,class:!0}),v=V(E),h=$(E,"BUTTON",{class:!0,"data-svelte-h":!0}),Te(h)!=="svelte-1m6dhnb"&&(h.textContent=b),E.forEach(p),A.forEach(p),this.h()},h(){g(e,"class",o="label "+(l[4]?"title":"")+" svelte-42ixwr"),g(e,"title",c=l[2]>0?"+/- "+l[2]+" Points":l[1]),g(a,"class","svelte-42ixwr"),g(f,"type","number"),g(f,"min","0"),g(f,"max",l[3]),g(f,"class","svelte-42ixwr"),g(h,"class","svelte-42ixwr"),g(r,"class","counter svelte-42ixwr"),g(t,"class","container svelte-42ixwr")},m(k,A){G(k,t,A),_(t,e),_(e,s),_(t,n),_(t,r),_(r,a),_(r,i),_(r,f),Oe(f,l[0]),_(r,v),_(r,h),u||(w=[ge(a,"click",l[9]),ge(f,"input",l[10]),ge(h,"click",l[11])],u=!0)},p(k,[A]){A&2&&ke(s,k[1]),A&16&&o!==(o="label "+(k[4]?"title":"")+" svelte-42ixwr")&&g(e,"class",o),A&6&&c!==(c=k[2]>0?"+/- "+k[2]+" Points":k[1])&&g(e,"title",c),A&8&&g(f,"max",k[3]),A&1&&ot(f.value)!==k[0]&&Oe(f,k[0])},i:Ee,o:Ee,d(k){k&&p(t),u=!1,Me(w)}}}function _t(l,t,e){let{label:s,increment:o=1,decrement:c=o,multiplier:n=0,max:r=void 0,title:a=!1}=t,{value:m=0}=t,i=()=>{e(0,m+=o)},f=()=>{e(0,m-=c)};const v=()=>f();function h(){m=ot(this.value),e(0,m),e(3,r)}const b=()=>i();return l.$$set=u=>{"label"in u&&e(1,s=u.label),"increment"in u&&e(7,o=u.increment),"decrement"in u&&e(8,c=u.decrement),"multiplier"in u&&e(2,n=u.multiplier),"max"in u&&e(3,r=u.max),"title"in u&&e(4,a=u.title),"value"in u&&e(0,m=u.value)},l.$$.update=()=>{l.$$.dirty&9&&(m<0&&e(0,m=0),r&&m>r&&e(0,m=r))},[m,s,n,r,a,i,f,o,c,v,h,b]}class ze extends $e{constructor(t){super(),we(this,t,_t,ft,Ce,{label:1,increment:7,decrement:8,multiplier:2,max:3,title:4,value:0})}}function Ze(l,t,e){const s=l.slice();return s[8]=t[e],s}function Qe(l,t,e){const s=l.slice();return s[11]=t[e],s[12]=t,s[13]=e,s}function ht(l){let t,e,s;function o(n){l[7](n,l[11])}let c={label:l[11].label,multiplier:l[11].increment,max:l[11].max};return l[11].value!==void 0&&(c.value=l[11].value),t=new ze({props:c}),ae.push(()=>ie(t,"value",o)),{c(){W(t.$$.fragment)},l(n){Z(t.$$.fragment,n)},m(n,r){Q(t,n,r),s=!0},p(n,r){l=n;const a={};r&17&&(a.label=l[11].label),r&17&&(a.multiplier=l[11].increment),r&17&&(a.max=l[11].max),!e&&r&17&&(e=!0,a.value=l[11].value,re(()=>e=!1)),t.$set(a)},i(n){s||(P(t.$$.fragment,n),s=!0)},o(n){R(t.$$.fragment,n),s=!1},d(n){Y(t,n)}}}function dt(l){let t,e,s;function o(n){l[6](n)}let c={label:l[11].label,multiplier:l[11].increment,max:l[11].max};return l[2]!==void 0&&(c.value=l[2]),t=new ze({props:c}),ae.push(()=>ie(t,"value",o)),{c(){W(t.$$.fragment)},l(n){Z(t.$$.fragment,n)},m(n,r){Q(t,n,r),s=!0},p(n,r){const a={};r&17&&(a.label=n[11].label),r&17&&(a.multiplier=n[11].increment),r&17&&(a.max=n[11].max),!e&&r&4&&(e=!0,a.value=n[2],re(()=>e=!1)),t.$set(a)},i(n){s||(P(t.$$.fragment,n),s=!0)},o(n){R(t.$$.fragment,n),s=!1},d(n){Y(t,n)}}}function Ye(l){let t,e,s,o;const c=[dt,ht],n=[];function r(a,m){return a[11].coopertition?0:1}return t=r(l),e=n[t]=c[t](l),{c(){e.c(),s=T()},l(a){e.l(a),s=V(a)},m(a,m){n[t].m(a,m),G(a,s,m),o=!0},p(a,m){let i=t;t=r(a),t===i?n[t].p(a,m):(Le(),R(n[i],1,1,()=>{n[i]=null}),Ue(),e=n[t],e?e.p(a,m):(e=n[t]=c[t](a),e.c()),P(e,1),e.m(s.parentNode,s))},i(a){o||(P(e),o=!0)},o(a){R(e),o=!1},d(a){a&&p(s),n[t].d(a)}}}function xe(l){let t,e=l[8]+"",s,o,c,n,r=Ve(l[0].category[l[8]]),a=[];for(let i=0;i<r.length;i+=1)a[i]=Ye(Qe(l,r,i));const m=i=>R(a[i],1,1,()=>{a[i]=null});return{c(){t=C("span"),s=M(e),o=T();for(let i=0;i<a.length;i+=1)a[i].c();c=We(),this.h()},l(i){t=$(i,"SPAN",{class:!0});var f=N(t);s=L(f,e),f.forEach(p),o=V(i);for(let v=0;v<a.length;v+=1)a[v].l(i);c=We(),this.h()},h(){g(t,"class","svelte-r1vuxt")},m(i,f){G(i,t,f),_(t,s),G(i,o,f);for(let v=0;v<a.length;v+=1)a[v]&&a[v].m(i,f);G(i,c,f),n=!0},p(i,f){if((!n||f&16)&&e!==(e=i[8]+"")&&ke(s,e),f&21){r=Ve(i[0].category[i[8]]);let v;for(v=0;v<r.length;v+=1){const h=Qe(i,r,v);a[v]?(a[v].p(h,f),P(a[v],1)):(a[v]=Ye(h),a[v].c(),P(a[v],1),a[v].m(c.parentNode,c))}for(Le(),v=r.length;v<a.length;v+=1)m(v);Ue()}},i(i){if(!n){for(let f=0;f<r.length;f+=1)P(a[f]);n=!0}},o(i){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)R(a[f]);n=!1},d(i){i&&(p(t),p(o),p(c)),He(a,i)}}}function gt(l){let t,e,s,o=l[0].name+"",c,n,r,a,m,i,f,v=Ve(l[4]),h=[];for(let u=0;u<v.length;u+=1)h[u]=xe(Ze(l,v,u));const b=u=>R(h[u],1,1,()=>{h[u]=null});return{c(){t=C("div"),e=C("div"),s=C("h3"),c=M(o),n=T(),r=C("h3"),a=M(l[1]),m=T(),i=C("div");for(let u=0;u<h.length;u+=1)h[u].c();this.h()},l(u){t=$(u,"DIV",{class:!0,style:!0});var w=N(t);e=$(w,"DIV",{class:!0});var k=N(e);s=$(k,"H3",{class:!0});var A=N(s);c=L(A,o),A.forEach(p),n=V(k),r=$(k,"H3",{class:!0});var D=N(r);a=L(D,l[1]),D.forEach(p),k.forEach(p),m=V(w),i=$(w,"DIV",{class:!0});var E=N(i);for(let U=0;U<h.length;U+=1)h[U].l(E);E.forEach(p),w.forEach(p),this.h()},h(){g(s,"class","label svelte-r1vuxt"),g(r,"class","score svelte-r1vuxt"),g(e,"class","header svelte-r1vuxt"),g(i,"class","body svelte-r1vuxt"),g(t,"class","container svelte-r1vuxt"),he(t,"--border-color",l[3])},m(u,w){G(u,t,w),_(t,e),_(e,s),_(s,c),_(e,n),_(e,r),_(r,a),_(t,m),_(t,i);for(let k=0;k<h.length;k+=1)h[k]&&h[k].m(i,null);f=!0},p(u,[w]){if((!f||w&1)&&o!==(o=u[0].name+"")&&ke(c,o),(!f||w&2)&&ke(a,u[1]),w&21){v=Ve(u[4]);let k;for(k=0;k<v.length;k+=1){const A=Ze(u,v,k);h[k]?(h[k].p(A,w),P(h[k],1)):(h[k]=xe(A),h[k].c(),P(h[k],1),h[k].m(i,null))}for(Le(),k=v.length;k<h.length;k+=1)b(k);Ue()}(!f||w&8)&&he(t,"--border-color",u[3])},i(u){if(!f){for(let w=0;w<v.length;w+=1)P(h[w]);f=!0}},o(u){h=h.filter(Boolean);for(let w=0;w<h.length;w+=1)R(h[w]);f=!1},d(u){u&&p(t),He(h,u)}}}function mt(l,t,e){let{score:s=0,color:o="#393939",count:c=0}=t,{config:n}=t,r=Object.keys(n.category),{coopertition:a=0}=t;function m(f){a=f,e(2,a)}function i(f,v){l.$$.not_equal(v.value,f)&&(v.value=f,e(0,n))}return l.$$set=f=>{"score"in f&&e(1,s=f.score),"color"in f&&e(3,o=f.color),"count"in f&&e(5,c=f.count),"config"in f&&e(0,n=f.config),"coopertition"in f&&e(2,a=f.coopertition)},l.$$.update=()=>{if(l.$$.dirty&17){let f=0,v=0;r.forEach(h=>{n.category[h].forEach(b=>{f+=b.value*b.increment,v+=b.value})}),e(1,s=f),e(5,c=v)}},[n,s,a,o,r,c,m,i]}class Xe extends $e{constructor(t){super(),we(this,t,mt,gt,Ce,{score:1,color:3,count:5,config:0,coopertition:2})}}function vt(l){let t,e,s,o,c,n,r,a,m,i,f,v;return{c(){t=C("div"),e=C("span"),s=M("🤝"),c=T(),n=C("span"),r=M("🎵"),m=T(),i=C("span"),f=M("🎶"),this.h()},l(h){t=$(h,"DIV",{class:!0});var b=N(t);e=$(b,"SPAN",{class:!0,title:!0});var u=N(e);s=L(u,"🤝"),u.forEach(p),c=V(b),n=$(b,"SPAN",{class:!0,title:!0});var w=N(n);r=L(w,"🎵"),w.forEach(p),m=V(b),i=$(b,"SPAN",{class:!0,title:!0});var k=N(i);f=L(k,"🎶"),k.forEach(p),b.forEach(p),this.h()},h(){g(e,"class",o="point"+(l[0].coopertition?" active":"")+" svelte-q5fa9q"),g(e,"title","Coopertition"),g(n,"class",a="point"+(l[0].melody?" active":"")+" color svelte-q5fa9q"),g(n,"title","Melody"),g(i,"class",v="point"+(l[0].ensemble?" active":"")+" color svelte-q5fa9q"),g(i,"title","Ensemble"),g(t,"class","ranking-points svelte-q5fa9q")},m(h,b){G(h,t,b),_(t,e),_(e,s),_(t,c),_(t,n),_(n,r),_(t,m),_(t,i),_(i,f)},p(h,[b]){b&1&&o!==(o="point"+(h[0].coopertition?" active":"")+" svelte-q5fa9q")&&g(e,"class",o),b&1&&a!==(a="point"+(h[0].melody?" active":"")+" color svelte-q5fa9q")&&g(n,"class",a),b&1&&v!==(v="point"+(h[0].ensemble?" active":"")+" color svelte-q5fa9q")&&g(i,"class",v)},i:Ee,o:Ee,d(h){h&&p(t)}}}function pt(l,t,e){let{points:s}=t;return l.$$set=o=>{"points"in o&&e(0,s=o.points)},[s]}class bt extends $e{constructor(t){super(),we(this,t,pt,vt,Ce,{points:0})}}function kt(l){let t,e,s,o,c,n,r,a,m,i,f,v,h,b,u,w,k,A,D,E,U,F,O,z,le,fe,y;return{c(){t=C("div"),e=C("span"),s=M(l[1]),c=T(),n=C("div"),r=C("button"),a=M("X"),i=T(),f=C("button"),v=M("P"),b=T(),u=C("button"),w=M("L"),A=T(),D=C("button"),E=M("C"),F=T(),O=C("button"),z=M("R"),this.h()},l(J){t=$(J,"DIV",{class:!0});var B=N(t);e=$(B,"SPAN",{class:!0,title:!0});var de=N(e);s=L(de,l[1]),de.forEach(p),c=V(B),n=$(B,"DIV",{class:!0,style:!0});var H=N(n);r=$(H,"BUTTON",{title:!0,class:!0});var me=N(r);a=L(me,"X"),me.forEach(p),i=V(H),f=$(H,"BUTTON",{title:!0,class:!0});var ve=N(f);v=L(ve,"P"),ve.forEach(p),b=V(H),u=$(H,"BUTTON",{title:!0,class:!0});var K=N(u);w=L(K,"L"),K.forEach(p),A=V(H),D=$(H,"BUTTON",{title:!0,class:!0});var S=N(D);E=L(S,"C"),S.forEach(p),F=V(H),O=$(H,"BUTTON",{title:!0,class:!0});var q=N(O);z=L(q,"R"),q.forEach(p),H.forEach(p),B.forEach(p),this.h()},h(){g(e,"class",o="label "+(l[2]?"title":"")+" svelte-o1gr0v"),g(e,"title",l[1]),g(r,"title","Not interacting with stage"),g(r,"class",m=ce(l[0]==0?"selected":"")+" svelte-o1gr0v"),g(f,"title","Parked"),g(f,"class",h=ce(l[0]==1?"selected":"")+" svelte-o1gr0v"),g(u,"title","Left Onstage"),g(u,"class",k=ce(l[0]==2?"selected":"")+" svelte-o1gr0v"),g(D,"title","Center Onstage"),g(D,"class",U=ce(l[0]==3?"selected":"")+" svelte-o1gr0v"),g(O,"title","Right Onstage"),g(O,"class",le=ce(l[0]==4?"selected":"")+" svelte-o1gr0v"),g(n,"class","radio svelte-o1gr0v"),he(n,"--alliance-color",l[3]),g(t,"class","container svelte-o1gr0v")},m(J,B){G(J,t,B),_(t,e),_(e,s),_(t,c),_(t,n),_(n,r),_(r,a),_(n,i),_(n,f),_(f,v),_(n,b),_(n,u),_(u,w),_(n,A),_(n,D),_(D,E),_(n,F),_(n,O),_(O,z),fe||(y=[ge(r,"click",l[5]),ge(f,"click",l[6]),ge(u,"click",l[7]),ge(D,"click",l[8]),ge(O,"click",l[9])],fe=!0)},p(J,[B]){B&2&&ke(s,J[1]),B&4&&o!==(o="label "+(J[2]?"title":"")+" svelte-o1gr0v")&&g(e,"class",o),B&2&&g(e,"title",J[1]),B&1&&m!==(m=ce(J[0]==0?"selected":"")+" svelte-o1gr0v")&&g(r,"class",m),B&1&&h!==(h=ce(J[0]==1?"selected":"")+" svelte-o1gr0v")&&g(f,"class",h),B&1&&k!==(k=ce(J[0]==2?"selected":"")+" svelte-o1gr0v")&&g(u,"class",k),B&1&&U!==(U=ce(J[0]==3?"selected":"")+" svelte-o1gr0v")&&g(D,"class",U),B&1&&le!==(le=ce(J[0]==4?"selected":"")+" svelte-o1gr0v")&&g(O,"class",le),B&8&&he(n,"--alliance-color",J[3])},i:Ee,o:Ee,d(J){J&&p(t),fe=!1,Me(y)}}}function Et(l,t,e){let{label:s,title:o=!1,color:c="#E4A234"}=t,{value:n=0}=t;function r(h){e(0,n=h)}const a=()=>r(0),m=()=>r(1),i=()=>r(2),f=()=>r(3),v=()=>r(4);return l.$$set=h=>{"label"in h&&e(1,s=h.label),"title"in h&&e(2,o=h.title),"color"in h&&e(3,c=h.color),"value"in h&&e(0,n=h.value)},l.$$.update=()=>{l.$$.dirty&1&&n<0&&e(0,n=0)},[n,s,o,c,r,a,m,i,f,v]}class je extends $e{constructor(t){super(),we(this,t,Et,kt,Ce,{label:1,title:2,color:3,value:0})}}function Ct(l){let t,e,s="Spotlight",o,c,n,r,a,m,i,f,v,h,b,u,w,k,A;return{c(){t=C("div"),e=C("span"),e.textContent=s,o=T(),c=C("div"),n=C("button"),r=M("L"),m=T(),i=C("button"),f=M("C"),h=T(),b=C("button"),u=M("R"),this.h()},l(D){t=$(D,"DIV",{class:!0});var E=N(t);e=$(E,"SPAN",{class:!0,title:!0,"data-svelte-h":!0}),Te(e)!=="svelte-157iv3a"&&(e.textContent=s),o=V(E),c=$(E,"DIV",{class:!0,style:!0});var U=N(c);n=$(U,"BUTTON",{title:!0,class:!0});var F=N(n);r=L(F,"L"),F.forEach(p),m=V(U),i=$(U,"BUTTON",{title:!0,class:!0});var O=N(i);f=L(O,"C"),O.forEach(p),h=V(U),b=$(U,"BUTTON",{title:!0,class:!0});var z=N(b);u=L(z,"R"),z.forEach(p),U.forEach(p),E.forEach(p),this.h()},h(){g(e,"class","label svelte-in9y7t"),g(e,"title","Spotlight"),g(n,"title","Left Spotlight"),g(n,"class",a=ce(l[0][0]?"selected":"")+" svelte-in9y7t"),g(i,"title","Center Spotlight"),g(i,"class",v=ce(l[0][1]?"selected":"")+" svelte-in9y7t"),g(b,"title","Right Spotlight"),g(b,"class",w=ce(l[0][2]?"selected":"")+" svelte-in9y7t"),g(c,"class","radio svelte-in9y7t"),he(c,"--alliance-color",l[1]),g(t,"class","container svelte-in9y7t")},m(D,E){G(D,t,E),_(t,e),_(t,o),_(t,c),_(c,n),_(n,r),_(c,m),_(c,i),_(i,f),_(c,h),_(c,b),_(b,u),k||(A=[ge(n,"click",l[3]),ge(i,"click",l[4]),ge(b,"click",l[5])],k=!0)},p(D,[E]){E&1&&a!==(a=ce(D[0][0]?"selected":"")+" svelte-in9y7t")&&g(n,"class",a),E&1&&v!==(v=ce(D[0][1]?"selected":"")+" svelte-in9y7t")&&g(i,"class",v),E&1&&w!==(w=ce(D[0][2]?"selected":"")+" svelte-in9y7t")&&g(b,"class",w),E&2&&he(c,"--alliance-color",D[1])},i:Ee,o:Ee,d(D){D&&p(t),k=!1,Me(A)}}}function $t(l,t,e){let{color:s="#E4A234"}=t,{spotlight:o=[!1,!1,!1]}=t;function c(m){e(0,o[m]=!o[m],o)}const n=()=>c(0),r=()=>c(1),a=()=>c(2);return l.$$set=m=>{"color"in m&&e(1,s=m.color),"spotlight"in m&&e(0,o=m.spotlight)},[o,s,c,n,r,a]}class wt extends $e{constructor(t){super(),we(this,t,$t,Ct,Ce,{color:1,spotlight:0})}}function Dt(l){let t,e,s,o="Stage",c,n,r,a,m,i,f,v,h,b,u,w,k,A,D,E,U,F,O,z;function le(S){l[7](S)}let fe={label:"Notes in Traps",max:3,multiplier:5};l[5]!==void 0&&(fe.value=l[5]),i=new ze({props:fe}),ae.push(()=>ie(i,"value",le));function y(S){l[8](S)}let J={label:"Robot 1",color:l[2]};l[3][0]!==void 0&&(J.value=l[3][0]),h=new je({props:J}),ae.push(()=>ie(h,"value",y));function B(S){l[9](S)}let de={label:"Robot 2",color:l[2]};l[3][1]!==void 0&&(de.value=l[3][1]),w=new je({props:de}),ae.push(()=>ie(w,"value",B));function H(S){l[10](S)}let me={label:"Robot 3",color:l[2]};l[3][2]!==void 0&&(me.value=l[3][2]),D=new je({props:me}),ae.push(()=>ie(D,"value",H));function ve(S){l[11](S)}let K={color:l[2]};return l[4]!==void 0&&(K.spotlight=l[4]),F=new wt({props:K}),ae.push(()=>ie(F,"spotlight",ve)),{c(){t=C("div"),e=C("div"),s=C("h3"),s.textContent=o,c=T(),n=C("h3"),r=M(l[0]),a=T(),m=C("div"),W(i.$$.fragment),v=T(),W(h.$$.fragment),u=T(),W(w.$$.fragment),A=T(),W(D.$$.fragment),U=T(),W(F.$$.fragment),this.h()},l(S){t=$(S,"DIV",{class:!0,style:!0});var q=N(t);e=$(q,"DIV",{class:!0});var ne=N(e);s=$(ne,"H3",{class:!0,"data-svelte-h":!0}),Te(s)!=="svelte-9jht9l"&&(s.textContent=o),c=V(ne),n=$(ne,"H3",{class:!0});var pe=N(n);r=L(pe,l[0]),pe.forEach(p),ne.forEach(p),a=V(q),m=$(q,"DIV",{class:!0});var x=N(m);Z(i.$$.fragment,x),v=V(x),Z(h.$$.fragment,x),u=V(x),Z(w.$$.fragment,x),A=V(x),Z(D.$$.fragment,x),U=V(x),Z(F.$$.fragment,x),x.forEach(p),q.forEach(p),this.h()},h(){g(s,"class","label svelte-35d0fx"),g(n,"class","score svelte-35d0fx"),g(e,"class","header svelte-35d0fx"),g(m,"class","body svelte-35d0fx"),g(t,"class","container svelte-35d0fx"),he(t,"--border-color",l[1])},m(S,q){G(S,t,q),_(t,e),_(e,s),_(e,c),_(e,n),_(n,r),_(t,a),_(t,m),Q(i,m,null),_(m,v),Q(h,m,null),_(m,u),Q(w,m,null),_(m,A),Q(D,m,null),_(m,U),Q(F,m,null),z=!0},p(S,[q]){(!z||q&1)&&ke(r,S[0]);const ne={};!f&&q&32&&(f=!0,ne.value=S[5],re(()=>f=!1)),i.$set(ne);const pe={};q&4&&(pe.color=S[2]),!b&&q&8&&(b=!0,pe.value=S[3][0],re(()=>b=!1)),h.$set(pe);const x={};q&4&&(x.color=S[2]),!k&&q&8&&(k=!0,x.value=S[3][1],re(()=>k=!1)),w.$set(x);const De={};q&4&&(De.color=S[2]),!E&&q&8&&(E=!0,De.value=S[3][2],re(()=>E=!1)),D.$set(De);const Ie={};q&4&&(Ie.color=S[2]),!O&&q&16&&(O=!0,Ie.spotlight=S[4],re(()=>O=!1)),F.$set(Ie),(!z||q&2)&&he(t,"--border-color",S[1])},i(S){z||(P(i.$$.fragment,S),P(h.$$.fragment,S),P(w.$$.fragment,S),P(D.$$.fragment,S),P(F.$$.fragment,S),z=!0)},o(S){R(i.$$.fragment,S),R(h.$$.fragment,S),R(w.$$.fragment,S),R(D.$$.fragment,S),R(F.$$.fragment,S),z=!1},d(S){S&&p(t),Y(i),Y(h),Y(w),Y(D),Y(F)}}}function Ne(l,t){let e=0;return l.forEach(s=>{s==t&&(e+=1)}),e}function It(l,t,e){let{score:s=0,color:o="#393939",radioColor:c=void 0}=t,n=[0,0,0],r=[!1,!1,!1],{ensemble:a=!1}=t,m=0;function i(u){m=u,e(5,m)}function f(u){l.$$.not_equal(n[0],u)&&(n[0]=u,e(3,n))}function v(u){l.$$.not_equal(n[1],u)&&(n[1]=u,e(3,n))}function h(u){l.$$.not_equal(n[2],u)&&(n[2]=u,e(3,n))}function b(u){r=u,e(4,r)}return l.$$set=u=>{"score"in u&&e(0,s=u.score),"color"in u&&e(1,o=u.color),"radioColor"in u&&e(2,c=u.radioColor),"ensemble"in u&&e(6,a=u.ensemble)},l.$$.update=()=>{if(l.$$.dirty&121){let u=0;for(let w=0;w<3;w++)switch(n[w]){case 1:u+=1;break;case 2:case 3:case 4:r[n[w]-2]?u+=4:u+=3}u+=Math.max((Ne(n,2)-1)*2,0),u+=Math.max((Ne(n,3)-1)*2,0),u+=Math.max((Ne(n,4)-1)*2,0),u+=m*5,e(0,s=u),e(6,a=s>=10&&Ne(n,2)+Ne(n,3)+Ne(n,4)>=2),console.log("ensemble: ",a),console.log("Score: ",s>=10,", Onstage: ",Ne(n,2)+Ne(n,3)+Ne(n,4)>=2)}},[s,o,c,n,r,m,a,i,f,v,h,b]}class At extends $e{constructor(t){super(),we(this,t,It,Dt,Ce,{score:0,color:1,radioColor:2,ensemble:6})}}function Nt(l){let t,e,s,o,c,n,r,a,m,i,f,v,h,b,u=l[1].score+"",w,k,A,D,E,U,F,O,z,le,fe,y,J,B,de,H,me,ve,K,S,q;f=new bt({props:{points:l[0]}});function ne(d){l[9](d)}function pe(d){l[10](d)}let x={config:l[4]};l[2].speaker!==void 0&&(x.score=l[2].speaker),l[3].speaker!==void 0&&(x.count=l[3].speaker),D=new Xe({props:x}),ae.push(()=>ie(D,"score",ne)),ae.push(()=>ie(D,"count",pe));function De(d){l[11](d)}function Ie(d){l[12](d)}let be={config:l[5]};l[2].amp!==void 0&&(be.score=l[2].amp),l[3].amp!==void 0&&(be.count=l[3].amp),O=new Xe({props:be}),ae.push(()=>ie(O,"score",De)),ae.push(()=>ie(O,"count",Ie));function qe(d){l[13](d)}function Je(d){l[14](d)}let Pe={radioColor:l[1].color};l[2].stage!==void 0&&(Pe.score=l[2].stage),l[0].ensemble!==void 0&&(Pe.ensemble=l[0].ensemble),y=new At({props:Pe}),ae.push(()=>ie(y,"score",qe)),ae.push(()=>ie(y,"ensemble",Je));function Ae(d){l[15](d)}function X(d){l[16](d)}let Be={config:l[6]};return l[2].general!==void 0&&(Be.score=l[2].general),l[0].coopertition!==void 0&&(Be.coopertition=l[0].coopertition),H=new Xe({props:Be}),ae.push(()=>ie(H,"score",Ae)),ae.push(()=>ie(H,"coopertition",X)),{c(){t=C("div"),e=C("div"),s=C("div"),o=C("div"),c=C("input"),n=T(),r=C("div"),a=C("input"),i=T(),W(f.$$.fragment),v=T(),h=C("h2"),b=M("Total Score: "),w=M(u),k=T(),A=C("div"),W(D.$$.fragment),F=T(),W(O.$$.fragment),fe=T(),W(y.$$.fragment),de=T(),W(H.$$.fragment),this.h()},l(d){t=$(d,"DIV",{class:!0});var I=N(t);e=$(I,"DIV",{class:!0});var ee=N(e);s=$(ee,"DIV",{class:!0});var j=N(s);o=$(j,"DIV",{class:!0,style:!0});var te=N(o);c=$(te,"INPUT",{type:!0,maxlength:!0,class:!0}),te.forEach(p),n=V(j),r=$(j,"DIV",{class:!0});var se=N(r);a=$(se,"INPUT",{class:!0,size:!0,type:!0,maxlength:!0,placeholder:!0}),se.forEach(p),j.forEach(p),i=V(ee),Z(f.$$.fragment,ee),v=V(ee),h=$(ee,"H2",{class:!0});var oe=N(h);b=L(oe,"Total Score: "),w=L(oe,u),oe.forEach(p),ee.forEach(p),k=V(I),A=$(I,"DIV",{class:!0,style:!0});var _e=N(A);Z(D.$$.fragment,_e),F=V(_e),Z(O.$$.fragment,_e),fe=V(_e),Z(y.$$.fragment,_e),de=V(_e),Z(H.$$.fragment,_e),_e.forEach(p),I.forEach(p),this.h()},h(){g(c,"type","color"),g(c,"maxlength","16"),g(c,"class","svelte-s32kh0"),g(o,"class","input color svelte-s32kh0"),he(o,"--alliance-color",l[1].color),g(a,"class","editable-name svelte-s32kh0"),g(a,"size",m=l[1].name.length??0),g(a,"type","text"),g(a,"maxlength","20"),g(a,"placeholder","New Alliance"),g(r,"class","input svelte-s32kh0"),g(s,"class","inputs svelte-s32kh0"),g(h,"class","score svelte-s32kh0"),g(e,"class","header svelte-s32kh0"),g(A,"class","container svelte-s32kh0"),he(A,"--border-color",l[1].color),g(t,"class","wrapper svelte-s32kh0")},m(d,I){G(d,t,I),_(t,e),_(e,s),_(s,o),_(o,c),Oe(c,l[1].color),_(s,n),_(s,r),_(r,a),Oe(a,l[1].name),_(e,i),Q(f,e,null),_(e,v),_(e,h),_(h,b),_(h,w),_(t,k),_(t,A),Q(D,A,null),_(A,F),Q(O,A,null),_(A,fe),Q(y,A,null),_(A,de),Q(H,A,null),K=!0,S||(q=[ge(c,"input",l[7]),ge(a,"input",l[8])],S=!0)},p(d,[I]){I&2&&Oe(c,d[1].color),(!K||I&2)&&he(o,"--alliance-color",d[1].color),(!K||I&2&&m!==(m=d[1].name.length??0))&&g(a,"size",m),I&2&&a.value!==d[1].name&&Oe(a,d[1].name);const ee={};I&1&&(ee.points=d[0]),f.$set(ee),(!K||I&2)&&u!==(u=d[1].score+"")&&ke(w,u);const j={};!E&&I&4&&(E=!0,j.score=d[2].speaker,re(()=>E=!1)),!U&&I&8&&(U=!0,j.count=d[3].speaker,re(()=>U=!1)),D.$set(j);const te={};!z&&I&4&&(z=!0,te.score=d[2].amp,re(()=>z=!1)),!le&&I&8&&(le=!0,te.count=d[3].amp,re(()=>le=!1)),O.$set(te);const se={};I&2&&(se.radioColor=d[1].color),!J&&I&4&&(J=!0,se.score=d[2].stage,re(()=>J=!1)),!B&&I&1&&(B=!0,se.ensemble=d[0].ensemble,re(()=>B=!1)),y.$set(se);const oe={};!me&&I&4&&(me=!0,oe.score=d[2].general,re(()=>me=!1)),!ve&&I&1&&(ve=!0,oe.coopertition=d[0].coopertition,re(()=>ve=!1)),H.$set(oe),(!K||I&2)&&he(A,"--border-color",d[1].color)},i(d){K||(P(f.$$.fragment,d),P(D.$$.fragment,d),P(O.$$.fragment,d),P(y.$$.fragment,d),P(H.$$.fragment,d),K=!0)},o(d){R(f.$$.fragment,d),R(D.$$.fragment,d),R(O.$$.fragment,d),R(y.$$.fragment,d),R(H.$$.fragment,d),K=!1},d(d){d&&p(t),Y(f),Y(D),Y(O),Y(y),Y(H),S=!1,Me(q)}}}function St(l,t,e){let{alliance:s}=t,o={speaker:0,amp:0,stage:0,general:0},c={amp:0,speaker:0},{special:n={coopertition:0,ensemble:!1,melody:!1}}=t,r={name:"Speaker",category:{Auto:[{label:"Note",value:0,increment:5}],Teleop:[{label:"Note",value:0,increment:2},{label:"Amplified Note",value:0,increment:5}]}},a={name:"Amp",category:{Auto:[{label:"Note",value:0,increment:2}],Teleop:[{label:"Note",value:0,increment:1}]}},m={name:"General",category:{Auto:[{label:"Robot Left Start",value:0,increment:2,max:3}],Coopertition:[{label:"Buttons pressed",value:0,increment:0,coopertition:!0,max:1}]}};function i(){s.color=this.value,e(1,s),e(2,o),e(0,n),e(3,c)}function f(){s.name=this.value,e(1,s),e(2,o),e(0,n),e(3,c)}function v(E){l.$$.not_equal(o.speaker,E)&&(o.speaker=E,e(2,o))}function h(E){l.$$.not_equal(c.speaker,E)&&(c.speaker=E,e(3,c))}function b(E){l.$$.not_equal(o.amp,E)&&(o.amp=E,e(2,o))}function u(E){l.$$.not_equal(c.amp,E)&&(c.amp=E,e(3,c))}function w(E){l.$$.not_equal(o.stage,E)&&(o.stage=E,e(2,o))}function k(E){l.$$.not_equal(n.ensemble,E)&&(n.ensemble=E,e(0,n),e(2,o),e(3,c))}function A(E){l.$$.not_equal(o.general,E)&&(o.general=E,e(2,o))}function D(E){l.$$.not_equal(n.coopertition,E)&&(n.coopertition=E,e(0,n),e(2,o),e(3,c))}return l.$$set=E=>{"alliance"in E&&e(1,s=E.alliance),"special"in E&&e(0,n=E.special)},l.$$.update=()=>{if(l.$$.dirty&13){e(1,s.score=o.speaker+o.amp+o.stage+o.general,s);let E=n.coopertition?15:18;e(0,n.melody=c.speaker+c.amp>=E,n)}},[n,s,o,c,r,a,m,i,f,v,h,b,u,w,k,A,D]}class Tt extends $e{constructor(t){super(),we(this,t,St,Nt,Ce,{alliance:1,special:0})}}function et(l,t,e){const s=l.slice();return s[2]=t[e],s}function tt(l){let t,e,s=l[2].name+"",o,c,n,r=l[2].score+"",a,m;return{c(){t=C("div"),e=C("h4"),o=M(s),c=T(),n=C("span"),a=M(r),m=T(),this.h()},l(i){t=$(i,"DIV",{class:!0,style:!0});var f=N(t);e=$(f,"H4",{class:!0});var v=N(e);o=L(v,s),v.forEach(p),c=V(f),n=$(f,"SPAN",{class:!0});var h=N(n);a=L(h,r),h.forEach(p),m=V(f),f.forEach(p),this.h()},h(){g(e,"class","svelte-14f6il4"),g(n,"class","score svelte-14f6il4"),g(t,"class","row svelte-14f6il4"),he(t,"--alliance-color",l[2].color)},m(i,f){G(i,t,f),_(t,e),_(e,o),_(t,c),_(t,n),_(n,a),_(t,m)},p(i,f){f&1&&s!==(s=i[2].name+"")&&ke(o,s),f&1&&r!==(r=i[2].score+"")&&ke(a,r),f&1&&he(t,"--alliance-color",i[2].color)},d(i){i&&p(t)}}}function Vt(l){let t,e=Ve(l[0]),s=[];for(let o=0;o<e.length;o+=1)s[o]=tt(et(l,e,o));return{c(){t=C("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){t=$(o,"DIV",{class:!0});var c=N(t);for(let n=0;n<s.length;n+=1)s[n].l(c);c.forEach(p),this.h()},h(){g(t,"class","leaderboard svelte-14f6il4")},m(o,c){G(o,t,c);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(t,null)},p(o,[c]){if(c&1){e=Ve(o[0]);let n;for(n=0;n<e.length;n+=1){const r=et(o,e,n);s[n]?s[n].p(r,c):(s[n]=tt(r),s[n].c(),s[n].m(t,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=e.length}},i:Ee,o:Ee,d(o){o&&p(t),He(s,o)}}}function qt(l,t,e){let{alliances:s}=t,o=[];return l.$$set=c=>{"alliances"in c&&e(1,s=c.alliances)},l.$$.update=()=>{l.$$.dirty&3&&(e(0,o=s.map(c=>({...c}))),o.sort((c,n)=>n.score-c.score))},[o,s]}class Pt extends $e{constructor(t){super(),we(this,t,qt,Vt,Ce,{alliances:1})}}function lt(l){let t,e;return{c(){t=C("h3"),e=M(l[1]),this.h()},l(s){t=$(s,"H3",{class:!0});var o=N(t);e=L(o,l[1]),o.forEach(p),this.h()},h(){g(t,"class","svelte-13ett77")},m(s,o){G(s,t,o),_(t,e)},p(s,o){o&2&&ke(e,s[1])},d(s){s&&p(t)}}}function Rt(l){let t,e,s,o,c,n,r,a,m,i;const f=l[4].default,v=at(f,l,l[3],null);let h=l[1]&&lt(l);return{c(){t=C("div"),e=C("div"),s=C("span"),v&&v.c(),c=T(),n=C("div"),h&&h.c(),r=T(),a=C("p"),m=M(l[0]),this.h()},l(b){t=$(b,"DIV",{class:!0});var u=N(t);e=$(u,"DIV",{class:!0});var w=N(e);s=$(w,"SPAN",{class:!0});var k=N(s);v&&v.l(k),k.forEach(p),w.forEach(p),c=V(u),n=$(u,"DIV",{class:!0});var A=N(n);h&&h.l(A),r=V(A),a=$(A,"P",{class:!0});var D=N(a);m=L(D,l[0]),D.forEach(p),A.forEach(p),u.forEach(p),this.h()},h(){g(s,"class",o="point"+(l[2]?" colored":"")+(l[1]?" large":"")+" svelte-13ett77"),g(e,"class","key svelte-13ett77"),g(a,"class","svelte-13ett77"),g(n,"class","info"),g(t,"class","container svelte-13ett77")},m(b,u){G(b,t,u),_(t,e),_(e,s),v&&v.m(s,null),_(t,c),_(t,n),h&&h.m(n,null),_(n,r),_(n,a),_(a,m),i=!0},p(b,[u]){v&&v.p&&(!i||u&8)&&rt(v,f,b,b[3],i?ct(f,b[3],u,null):it(b[3]),null),(!i||u&6&&o!==(o="point"+(b[2]?" colored":"")+(b[1]?" large":"")+" svelte-13ett77"))&&g(s,"class",o),b[1]?h?h.p(b,u):(h=lt(b),h.c(),h.m(n,r)):h&&(h.d(1),h=null),(!i||u&1)&&ke(m,b[0])},i(b){i||(P(v,b),i=!0)},o(b){R(v,b),i=!1},d(b){b&&p(t),v&&v.d(b),h&&h.d()}}}function Ot(l,t,e){let{$$slots:s={},$$scope:o}=t,{description:c,title:n=!1,colored:r=!1}=t;return l.$$set=a=>{"description"in a&&e(0,c=a.description),"title"in a&&e(1,n=a.title),"colored"in a&&e(2,r=a.colored),"$$scope"in a&&e(3,o=a.$$scope)},[c,n,r,o,s]}class Se extends $e{constructor(t){super(),we(this,t,Ot,Rt,Ce,{description:0,title:1,colored:2})}}function nt(l,t,e){const s=l.slice();return s[4]=t[e],s[5]=t,s[6]=e,s}function Bt(l){let t;return{c(){t=M("X")},l(e){t=L(e,"X")},m(e,s){G(e,t,s)},d(e){e&&p(t)}}}function Mt(l){let t;return{c(){t=M("P")},l(e){t=L(e,"P")},m(e,s){G(e,t,s)},d(e){e&&p(t)}}}function Lt(l){let t;return{c(){t=M("L")},l(e){t=L(e,"L")},m(e,s){G(e,t,s)},d(e){e&&p(t)}}}function Ut(l){let t;return{c(){t=M("C")},l(e){t=L(e,"C")},m(e,s){G(e,t,s)},d(e){e&&p(t)}}}function Ht(l){let t;return{c(){t=M("R")},l(e){t=L(e,"R")},m(e,s){G(e,t,s)},d(e){e&&p(t)}}}function zt(l){let t;return{c(){t=M("🤝")},l(e){t=L(e,"🤝")},m(e,s){G(e,t,s)},d(e){e&&p(t)}}}function Jt(l){let t;return{c(){t=M("🎵")},l(e){t=L(e,"🎵")},m(e,s){G(e,t,s)},d(e){e&&p(t)}}}function Xt(l){let t;return{c(){t=M("🎶")},l(e){t=L(e,"🎶")},m(e,s){G(e,t,s)},d(e){e&&p(t)}}}function st(l){let t,e,s;function o(n){l[3](n,l[4],l[5],l[6])}let c={};return l[4]!==void 0&&(c.alliance=l[4]),t=new Tt({props:c}),ae.push(()=>ie(t,"alliance",o)),{c(){W(t.$$.fragment)},l(n){Z(t.$$.fragment,n)},m(n,r){Q(t,n,r),s=!0},p(n,r){l=n;const a={};!e&&r&2&&(e=!0,a.alliance=l[4],re(()=>e=!1)),t.$set(a)},i(n){s||(P(t.$$.fragment,n),s=!0)},o(n){R(t.$$.fragment,n),s=!1},d(n){Y(t,n)}}}function jt(l){let t,e,s,o,c='<a href="https://www.firstinspires.org/robotics/frc/game-and-season"><img class="logo svelte-15e077f" src="./crescendo.png" alt="Crescendo Logo"/></a> <h4 class="svelte-15e077f">Scoring Calculator</h4> <p class="svelte-15e077f">Created by <a href="https://github.com/murphy28">Ohlin Arellano</a></p> <p class="svelte-15e077f">From <a href="https://pairofdice.vegas/">Pair of Dice 7426</a></p> <div class="links svelte-15e077f"><a href="https://github.com/7426-Pair-Of-Dice/Crescendo-Scoring-Calculator" class="svelte-15e077f">Github</a> <a href="https://www.chiefdelphi.com/t/crescendo-web-scoring-calculator/448827" class="svelte-15e077f">Chief Delphi</a></div>',n,r,a="Stage Actions",m,i,f,v,h,b,u,w,k,A,D,E,U,F="Ranking Points",O,z,le,fe,y,J,B,de,H,me="Leaderboard",ve,K,S,q,ne,pe,x,De,Ie,be,qe;f=new Se({props:{description:"Robot has not interacted with stage.",$$slots:{default:[Bt]},$$scope:{ctx:l}}}),h=new Se({props:{description:"Robot is parked on stage.",$$slots:{default:[Mt]},$$scope:{ctx:l}}}),u=new Se({props:{description:"Robot has climbed onto left of stage.",$$slots:{default:[Lt]},$$scope:{ctx:l}}}),k=new Se({props:{description:"Robot has climbed onto right of stage.",$$slots:{default:[Ut]},$$scope:{ctx:l}}}),D=new Se({props:{description:"Robot has climbed onto center of stage.",$$slots:{default:[Ht]},$$scope:{ctx:l}}}),le=new Se({props:{title:"Coopertition Bonus",description:"Melody threshold set to 15.",$$slots:{default:[zt]},$$scope:{ctx:l}}}),y=new Se({props:{title:"Melody",description:"18 or more notes scored.",colored:!0,$$slots:{default:[Jt]},$$scope:{ctx:l}}}),B=new Se({props:{title:"Ensemble",description:"2 robots onstage and 10 or more stage points.",colored:!0,$$slots:{default:[Xt]},$$scope:{ctx:l}}}),K=new Pt({props:{alliances:l[1]}});function Je(d){l[2](d)}let Pe={label:"Alliances",max:30,multiplier:0,title:!0};l[0]!==void 0&&(Pe.value=l[0]),ne=new ze({props:Pe}),ae.push(()=>ie(ne,"value",Je));let Ae=Ve(l[1]),X=[];for(let d=0;d<Ae.length;d+=1)X[d]=st(nt(l,Ae,d));const Be=d=>R(X[d],1,1,()=>{X[d]=null});return{c(){t=T(),e=C("main"),s=C("div"),o=C("div"),o.innerHTML=c,n=T(),r=C("h3"),r.textContent=a,m=T(),i=C("div"),W(f.$$.fragment),v=T(),W(h.$$.fragment),b=T(),W(u.$$.fragment),w=T(),W(k.$$.fragment),A=T(),W(D.$$.fragment),E=T(),U=C("h3"),U.textContent=F,O=T(),z=C("div"),W(le.$$.fragment),fe=T(),W(y.$$.fragment),J=T(),W(B.$$.fragment),de=T(),H=C("h3"),H.textContent=me,ve=T(),W(K.$$.fragment),S=T(),q=C("div"),W(ne.$$.fragment),x=T(),De=C("br"),Ie=T(),be=C("div");for(let d=0;d<X.length;d+=1)X[d].c();this.h()},l(d){ut("svelte-1pibc79",document.head).forEach(p),t=V(d),e=$(d,"MAIN",{class:!0});var ee=N(e);s=$(ee,"DIV",{class:!0});var j=N(s);o=$(j,"DIV",{class:!0,"data-svelte-h":!0}),Te(o)!=="svelte-148u4wy"&&(o.innerHTML=c),n=V(j),r=$(j,"H3",{"data-svelte-h":!0}),Te(r)!=="svelte-a98m21"&&(r.textContent=a),m=V(j),i=$(j,"DIV",{class:!0});var te=N(i);Z(f.$$.fragment,te),v=V(te),Z(h.$$.fragment,te),b=V(te),Z(u.$$.fragment,te),w=V(te),Z(k.$$.fragment,te),A=V(te),Z(D.$$.fragment,te),te.forEach(p),E=V(j),U=$(j,"H3",{"data-svelte-h":!0}),Te(U)!=="svelte-13i8nqp"&&(U.textContent=F),O=V(j),z=$(j,"DIV",{class:!0});var se=N(z);Z(le.$$.fragment,se),fe=V(se),Z(y.$$.fragment,se),J=V(se),Z(B.$$.fragment,se),se.forEach(p),de=V(j),H=$(j,"H3",{"data-svelte-h":!0}),Te(H)!=="svelte-5eafub"&&(H.textContent=me),ve=V(j),Z(K.$$.fragment,j),j.forEach(p),S=V(ee),q=$(ee,"DIV",{class:!0});var oe=N(q);Z(ne.$$.fragment,oe),x=V(oe),De=$(oe,"BR",{}),Ie=V(oe),be=$(oe,"DIV",{class:!0});var _e=N(be);for(let Re=0;Re<X.length;Re+=1)X[Re].l(_e);_e.forEach(p),oe.forEach(p),ee.forEach(p),this.h()},h(){document.title="Crescendo Calculator",g(o,"class","header svelte-15e077f"),g(i,"class","legend"),g(z,"class","legend"),g(s,"class","controls svelte-15e077f"),g(be,"class","teams svelte-15e077f"),g(q,"class","teams-wrapper svelte-15e077f"),g(e,"class","svelte-15e077f")},m(d,I){G(d,t,I),G(d,e,I),_(e,s),_(s,o),_(s,n),_(s,r),_(s,m),_(s,i),Q(f,i,null),_(i,v),Q(h,i,null),_(i,b),Q(u,i,null),_(i,w),Q(k,i,null),_(i,A),Q(D,i,null),_(s,E),_(s,U),_(s,O),_(s,z),Q(le,z,null),_(z,fe),Q(y,z,null),_(z,J),Q(B,z,null),_(s,de),_(s,H),_(s,ve),Q(K,s,null),_(e,S),_(e,q),Q(ne,q,null),_(q,x),_(q,De),_(q,Ie),_(q,be);for(let ee=0;ee<X.length;ee+=1)X[ee]&&X[ee].m(be,null);qe=!0},p(d,[I]){const ee={};I&128&&(ee.$$scope={dirty:I,ctx:d}),f.$set(ee);const j={};I&128&&(j.$$scope={dirty:I,ctx:d}),h.$set(j);const te={};I&128&&(te.$$scope={dirty:I,ctx:d}),u.$set(te);const se={};I&128&&(se.$$scope={dirty:I,ctx:d}),k.$set(se);const oe={};I&128&&(oe.$$scope={dirty:I,ctx:d}),D.$set(oe);const _e={};I&128&&(_e.$$scope={dirty:I,ctx:d}),le.$set(_e);const Re={};I&128&&(Re.$$scope={dirty:I,ctx:d}),y.$set(Re);const Ge={};I&128&&(Ge.$$scope={dirty:I,ctx:d}),B.$set(Ge);const ye={};I&2&&(ye.alliances=d[1]),K.$set(ye);const Fe={};if(!pe&&I&1&&(pe=!0,Fe.value=d[0],re(()=>pe=!1)),ne.$set(Fe),I&2){Ae=Ve(d[1]);let ue;for(ue=0;ue<Ae.length;ue+=1){const Ke=nt(d,Ae,ue);X[ue]?(X[ue].p(Ke,I),P(X[ue],1)):(X[ue]=st(Ke),X[ue].c(),P(X[ue],1),X[ue].m(be,null))}for(Le(),ue=Ae.length;ue<X.length;ue+=1)Be(ue);Ue()}},i(d){if(!qe){P(f.$$.fragment,d),P(h.$$.fragment,d),P(u.$$.fragment,d),P(k.$$.fragment,d),P(D.$$.fragment,d),P(le.$$.fragment,d),P(y.$$.fragment,d),P(B.$$.fragment,d),P(K.$$.fragment,d),P(ne.$$.fragment,d);for(let I=0;I<Ae.length;I+=1)P(X[I]);qe=!0}},o(d){R(f.$$.fragment,d),R(h.$$.fragment,d),R(u.$$.fragment,d),R(k.$$.fragment,d),R(D.$$.fragment,d),R(le.$$.fragment,d),R(y.$$.fragment,d),R(B.$$.fragment,d),R(K.$$.fragment,d),R(ne.$$.fragment,d),X=X.filter(Boolean);for(let I=0;I<X.length;I+=1)R(X[I]);qe=!1},d(d){d&&(p(t),p(e)),Y(f),Y(h),Y(u),Y(k),Y(D),Y(le),Y(y),Y(B),Y(K),Y(ne),He(X,d)}}}function Gt(){return"#"+Math.floor(Math.random()*16777215).toString(16)}function yt(){let l=["Otto","Ohlin","Anthony","Aidan","Aspen","West","Goblo","Cohen","Eli","Brian","Jo","Annabelle","Alex","Vieira","Miller","Jackie","Jonathan","Stephen","Zach","Armando","Marco","Rose","Skylar","John","Bechtler","Myers","Ollie"];return l[Math.floor(Math.random()*l.length)]}function Ft(l,t,e){let s=2,o=[{name:"Red Alliance",color:"#ff304f",score:0},{name:"Blue Alliance",color:"#2f89fc",score:0}];function c(r){s=r,e(0,s),e(1,o)}function n(r,a,m,i){m[i]=r,e(1,o),e(0,s)}return l.$$.update=()=>{if(l.$$.dirty&3){for(s<1&&e(0,s=1),s>30&&e(0,s=30);o.length<s;)e(1,o=[...o,{name:`${yt()} Alliance`,color:Gt(),score:0}]);for(;o.length>s;)e(1,o=o.slice(0,-1))}},[s,o,c,n]}class Zt extends $e{constructor(t){super(),we(this,t,Ft,jt,Ce,{})}}export{Zt as component};