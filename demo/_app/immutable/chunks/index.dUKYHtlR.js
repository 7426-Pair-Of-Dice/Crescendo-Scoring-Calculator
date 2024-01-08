import{r as h,n as p,h as v,i as S,j as N,k as E,l as b,m as C,p as j,q as w,v as B,w as I,x as L}from"./scheduler.kbUpF6kE.js";let $=!1;function P(){$=!0}function T(){$=!1}function q(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function D(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let s=0;s<t.length;s++){const o=t[s];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let r=0;r<t.length;r++){const s=t[r].claim_order,o=(l>0&&t[n[l]].claim_order<=s?l+1:q(1,l,_=>t[n[_]].claim_order,s))-1;i[r]=n[o]+1;const c=o+1;n[c]=r,l=Math.max(c,l)}const f=[],a=[];let u=t.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(f.push(t[r-1]);u>=r;u--)a.push(t[u]);u--}for(;u>=0;u--)a.push(t[u]);f.reverse(),a.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<a.length;r++){for(;s<f.length&&a[r].claim_order>=f[s].claim_order;)s++;const o=s<f.length?f[s]:null;e.insertBefore(a[r],o)}}function H(e,t){if($){for(D(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function X(e,t,n){$&&!n?H(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function M(e){e.parentNode&&e.parentNode.removeChild(e)}function Y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function O(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function Z(){return y(" ")}function k(){return y("")}function ee(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function te(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ne(e){return e.dataset.svelteH}function ie(e){return e===""?null:+e}function z(e){return Array.from(e.childNodes)}function R(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function A(e,t,n,i,l=!1){R(e);const f=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const u=e[a];if(t(u)){const r=n(u);return r===void 0?e.splice(a,1):e[a]=r,l||(e.claim_info.last_index=a),u}}for(let a=e.claim_info.last_index-1;a>=0;a--){const u=e[a];if(t(u)){const r=n(u);return r===void 0?e.splice(a,1):e[a]=r,l?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,u}}return i()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function U(e,t,n,i){return A(e,l=>l.nodeName===t,l=>{const f=[];for(let a=0;a<l.attributes.length;a++){const u=l.attributes[a];n[u.name]||f.push(u.name)}f.forEach(a=>l.removeAttribute(a))},()=>i(t))}function re(e,t,n){return U(e,t,n,O)}function V(e,t){return A(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>y(t),!0)}function se(e){return V(e," ")}function ae(e,t){t=""+t,e.data!==t&&(e.data=t)}function le(e,t){e.value=t??""}function ue(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function fe(e,t){return new e(t)}const m=new Set;let d;function ce(){d={r:0,c:[],p:d}}function oe(){d.r||h(d.c),d=d.p}function W(e,t){e&&e.i&&(m.delete(e),e.i(t))}function de(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function _e(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function me(e){e&&e.c()}function he(e,t){e&&e.l(t)}function F(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),b(()=>{const f=e.$$.on_mount.map(B).filter(N);e.$$.on_destroy?e.$$.on_destroy.push(...f):h(f),e.$$.on_mount=[]}),l.forEach(b)}function G(e,t){const n=e.$$;n.fragment!==null&&(C(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function J(e,t){e.$$.dirty[0]===-1&&(I.push(e),L(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function $e(e,t,n,i,l,f,a=null,u=[-1]){const r=j;w(e);const s=e.$$={fragment:null,ctx:[],props:f,update:p,not_equal:l,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:v(),dirty:u,skip_bound:!1,root:t.target||r.$$.root};a&&a(s.root);let o=!1;if(s.ctx=n?n(e,t.props||{},(c,_,...x)=>{const g=x.length?x[0]:_;return s.ctx&&l(s.ctx[c],s.ctx[c]=g)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](g),o&&J(e,c)),_}):[],s.update(),o=!0,h(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){P();const c=z(t.target);s.fragment&&s.fragment.l(c),c.forEach(M)}else s.fragment&&s.fragment.c();t.intro&&W(e.$$.fragment),F(e,t.target,t.anchor),T(),S()}w(r)}class pe{$$=void 0;$$set=void 0;$destroy(){G(this,1),this.$destroy=p}$on(t,n){if(!N(n))return p;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!E(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const K="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(K);export{ee as A,ie as B,Y as C,_e as D,pe as S,X as a,oe as b,se as c,W as d,k as e,M as f,O as g,re as h,$e as i,z as j,te as k,ue as l,y as m,V as n,ae as o,ce as p,fe as q,me as r,Z as s,de as t,he as u,F as v,G as w,H as x,ne as y,le as z};
