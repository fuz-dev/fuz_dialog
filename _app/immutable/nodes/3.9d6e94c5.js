import{n as ge,u as se,b as g,s as W,k as j,f as v,g as k,d as h,c as P,P as sl,l as D,h as u,i as S,w as _,x as ne,y as re,z as ae,m as $,D as el,X as Ie,j as de,E as Y,Q as ll,e as je,B as De}from"../chunks/scheduler.3fbf5205.js";import{S as ve,i as ke,a as A,g as fe,t as V,c as ie,b as _e,d as he,m as ue,e as pe}from"../chunks/index.3087cc47.js";import{s as Ae,c as Se,f as Ne,d as me,e as oe,u as nl,h as rl,L as al,p as ol,b as Oe}from"../chunks/package.a06b8c7c.js";import{p as tl}from"../chunks/stores.9ed577a8.js";import{e as fl}from"../chunks/singletons.c09370f4.js";function Ce(r,e,t){var o,f;const l=r.slice();l[23]=e[t],l[28]=t;const n=l[16](l[11],l[23]);l[24]=n;const s=(o=l[3])==null?void 0:o[l[28]];l[25]=s;const a=l[25]&&((f=l[5])==null?void 0:f[l[25]]);return l[26]=a,l}function Ve(r,e,t){const l=r.slice();return l[15]=e[t].name,l[29]=e[t].kind,l}const il=r=>({homepage_url:r[0]&512}),Te=r=>({homepage_url:r[9]}),cl=r=>({npm_url:r[0]&8192}),Le=r=>({npm_url:r[13]}),_l=r=>({description:r[0]&128}),Me=r=>({description:r[7]}),hl=r=>({repo_name:r[0]&4096}),We=r=>({repo_name:r[12]});function Pe(r){let e=" ",t,l;return{c(){t=j(e),l=j(r[6])},l(n){t=D(n,e),l=D(n,r[6])},m(n,s){S(n,t,s),S(n,l,s)},p(n,s){s[0]&64&&$(l,n[6])},d(n){n&&(h(t),h(l))}}}function ul(r){let e,t,l=r[6]&&Pe(r);return{c(){e=g("div"),t=j(r[12]),l&&l.c(),this.h()},l(n){e=v(n,"DIV",{class:!0});var s=k(e);t=D(s,r[12]),l&&l.l(s),s.forEach(h),this.h()},h(){u(e,"class","repo_name svelte-1rnqnfh")},m(n,s){S(n,e,s),_(e,t),l&&l.m(e,null)},p(n,s){s[0]&4096&&$(t,n[12]),n[6]?l?l.p(n,s):(l=Pe(n),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(n){n&&h(e),l&&l.d()}}}function ze(r){let e;const t=r[22].description,l=se(t,r,r[21],Me),n=l||pl(r);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,a){n&&n.m(s,a),e=!0},p(s,a){l?l.p&&(!e||a[0]&2097280)&&ne(l,t,s,s[21],e?ae(t,s[21],a,_l):re(s[21]),Me):n&&n.p&&(!e||a[0]&128)&&n.p(s,e?a:[-1,-1])},i(s){e||(A(n,s),e=!0)},o(s){V(n,s),e=!1},d(s){n&&n.d(s)}}}function pl(r){let e,t;return{c(){e=g("div"),t=j(r[7]),this.h()},l(l){e=v(l,"DIV",{class:!0});var n=k(e);t=D(n,r[7]),n.forEach(h),this.h()},h(){u(e,"class","spaced")},m(l,n){S(l,e,n),_(e,t)},p(l,n){n[0]&128&&$(t,l[7])},d(l){l&&h(e)}}}function Be(r){let e;const t=r[22].npm_url,l=se(t,r,r[21],Le),n=l||ml(r);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,a){n&&n.m(s,a),e=!0},p(s,a){l?l.p&&(!e||a[0]&2105344)&&ne(l,t,s,s[21],e?ae(t,s[21],a,cl):re(s[21]),Le):n&&n.p&&(!e||a[0]&32768)&&n.p(s,e?a:[-1,-1])},i(s){e||(A(n,s),e=!0)},o(s){V(n,s),e=!1},d(s){n&&n.d(s)}}}function ml(r){let e,t,l;return{c(){e=g("blockquote"),t=j("npm i -D "),l=j(r[15]),this.h()},l(n){e=v(n,"BLOCKQUOTE",{class:!0});var s=k(e);t=D(s,"npm i -D "),l=D(s,r[15]),s.forEach(h),this.h()},h(){u(e,"class","npm_url spaced svelte-1rnqnfh")},m(n,s){S(n,e,s),_(e,t),_(e,l)},p(n,s){s[0]&32768&&$(l,n[15])},d(n){n&&h(e)}}}function He(r){let e;const t=r[22].homepage_url,l=se(t,r,r[21],Te),n=l||dl(r);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,a){n&&n.m(s,a),e=!0},p(s,a){l?l.p&&(!e||a[0]&2097664)&&ne(l,t,s,s[21],e?ae(t,s[21],a,il):re(s[21]),Te):n&&n.p&&(!e||a[0]&16896)&&n.p(s,e?a:[-1,-1])},i(s){e||(A(n,s),e=!0)},o(s){V(n,s),e=!1},d(s){n&&n.d(s)}}}function dl(r){let e,t,l,n,s,a,o,f=Ne(r[9])+"",d;return{c(){e=g("div"),t=j(`homepage:
					`),l=g("a"),n=g("img"),o=W(),d=j(f),this.h()},l(i){e=v(i,"DIV",{class:!0});var p=k(e);t=D(p,`homepage:
					`),l=v(p,"A",{class:!0,href:!0});var c=k(l);n=v(c,"IMG",{src:!0,alt:!0}),o=P(c),d=D(c,f),c.forEach(h),p.forEach(h),this.h()},h(){Ie(n.src,s=me(r[9],"/")+"favicon.png")||u(n,"src",s),u(n,"alt",a="favicon to homepage at "+r[9]),de(n,"width","16px"),de(n,"height","16px"),de(n,"margin-right","var(--spacing_xs)"),u(l,"class","chip row svelte-1rnqnfh"),u(l,"href",r[9]),Y(l,"active",r[9]===r[14].url.href),u(e,"class","row svelte-1rnqnfh")},m(i,p){S(i,e,p),_(e,t),_(e,l),_(l,n),_(l,o),_(l,d)},p(i,p){p[0]&512&&!Ie(n.src,s=me(i[9],"/")+"favicon.png")&&u(n,"src",s),p[0]&512&&a!==(a="favicon to homepage at "+i[9])&&u(n,"alt",a),p[0]&512&&f!==(f=Ne(i[9])+"")&&$(d,f),p[0]&512&&u(l,"href",i[9]),p[0]&16896&&Y(l,"active",i[9]===i[14].url.href)},d(i){i&&h(e)}}}function Re(r){let e,t,l,n;return{c(){e=g("div"),t=j("repo: "),l=g("a"),n=j(r[12]),this.h()},l(s){e=v(s,"DIV",{class:!0});var a=k(e);t=D(a,"repo: "),l=v(a,"A",{class:!0,title:!0,href:!0});var o=k(l);n=D(o,r[12]),o.forEach(h),a.forEach(h),this.h()},h(){u(l,"class","chip svelte-1rnqnfh"),u(l,"title","repo"),u(l,"href",r[11]),u(e,"class","row svelte-1rnqnfh")},m(s,a){S(s,e,a),_(e,t),_(e,l),_(l,n)},p(s,a){a[0]&4096&&$(n,s[12]),a[0]&2048&&u(l,"href",s[11])},d(s){s&&h(e)}}}function Ue(r){let e,t,l,n;return{c(){e=g("div"),t=j("npm: "),l=g("a"),n=j(r[15]),this.h()},l(s){e=v(s,"DIV",{class:!0});var a=k(e);t=D(a,"npm: "),l=v(a,"A",{class:!0,title:!0,href:!0});var o=k(l);n=D(o,r[15]),o.forEach(h),a.forEach(h),this.h()},h(){u(l,"class","chip svelte-1rnqnfh"),u(l,"title","npm"),u(l,"href",r[13]),u(e,"class","row svelte-1rnqnfh")},m(s,a){S(s,e,a),_(e,t),_(e,l),_(l,n)},p(s,a){a[0]&32768&&$(n,s[15]),a[0]&8192&&u(l,"href",s[13])},d(s){s&&h(e)}}}function Je(r){let e,t,l,n;return{c(){e=g("div"),t=j("version: "),l=g("a"),n=j(r[8]),this.h()},l(s){e=v(s,"DIV",{class:!0});var a=k(e);t=D(a,"version: "),l=v(a,"A",{class:!0,title:!0,href:!0});var o=k(l);n=D(o,r[8]),o.forEach(h),a.forEach(h),this.h()},h(){u(l,"class","chip svelte-1rnqnfh"),u(l,"title","version"),u(l,"href",r[10]),u(e,"class","row svelte-1rnqnfh")},m(s,a){S(s,e,a),_(e,t),_(e,l),_(l,n)},p(s,a){a[0]&256&&$(n,s[8]),a[0]&1024&&u(l,"href",s[10])},d(s){s&&h(e)}}}function Qe(r){let e,t,l,n;return{c(){e=g("div"),t=j("license: "),l=g("a"),n=j(r[1]),this.h()},l(s){e=v(s,"DIV",{class:!0});var a=k(e);t=D(a,"license: "),l=v(a,"A",{class:!0,title:!0,href:!0});var o=k(l);n=D(o,r[1]),o.forEach(h),a.forEach(h),this.h()},h(){u(l,"class","chip svelte-1rnqnfh"),u(l,"title","license"),u(l,"href",r[4]),u(e,"class","row svelte-1rnqnfh")},m(s,a){S(s,e,a),_(e,t),_(e,l),_(l,n)},p(s,a){a[0]&2&&$(n,s[1]),a[0]&16&&u(l,"href",s[4])},d(s){s&&h(e)}}}function Fe(r){let e,t,l,n,s;return{c(){e=g("section"),t=j(`data:
				`),l=g("a"),n=j("package.json"),this.h()},l(a){e=v(a,"SECTION",{class:!0});var o=k(e);t=D(o,`data:
				`),l=v(o,"A",{class:!0,title:!0,href:!0});var f=k(l);n=D(f,"package.json"),f.forEach(h),o.forEach(h),this.h()},h(){u(l,"class","chip svelte-1rnqnfh"),u(l,"title","data"),u(l,"href",s=me(r[9],"/")+".well-known/package.json"),u(e,"class","row spaced svelte-1rnqnfh")},m(a,o){S(a,e,o),_(e,t),_(e,l),_(l,n)},p(a,o){o[0]&512&&s!==(s=me(a[9],"/")+".well-known/package.json")&&u(l,"href",s)},d(a){a&&h(e)}}}function Ge(r){let e,t,l=[],n=new Map,s=oe(r[2]);const a=o=>o[23];for(let o=0;o<s.length;o+=1){let f=Ce(r,s,o),d=a(f);n.set(d,l[o]=Ye(d,f))}return{c(){e=g("section"),t=g("menu");for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){e=v(o,"SECTION",{class:!0});var f=k(e);t=v(f,"MENU",{});var d=k(t);for(let i=0;i<l.length;i+=1)l[i].l(d);d.forEach(h),f.forEach(h),this.h()},h(){u(e,"class","width_full spaced")},m(o,f){S(o,e,f),_(e,t);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(t,null)},p(o,f){f[0]&67628&&(s=oe(o[2]),l=nl(l,f,a,1,o,s,n,t,rl,Ye,null,Ce))},d(o){o&&h(e);for(let f=0;f<l.length;f+=1)l[f].d()}}}function Ke(r){let e,t=oe(r[26].declarations),l=[];for(let n=0;n<t.length;n+=1)l[n]=Xe(Ve(r,t,n));return{c(){e=g("ul");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=v(n,"UL",{class:!0});var s=k(e);for(let a=0;a<l.length;a+=1)l[a].l(s);s.forEach(h),this.h()},h(){u(e,"class","declarations svelte-1rnqnfh")},m(n,s){S(n,e,s);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null)},p(n,s){if(s[0]&44){t=oe(n[26].declarations);let a;for(a=0;a<t.length;a+=1){const o=Ve(n,t,a);l[a]?l[a].p(o,s):(l[a]=Xe(o),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}},d(n){n&&h(e),ll(l,n)}}}function Xe(r){let e,t=r[15]+"",l,n,s;return{c(){e=g("li"),l=j(t),n=W(),this.h()},l(a){e=v(a,"LI",{class:!0});var o=k(e);l=D(o,t),n=P(o),o.forEach(h),this.h()},h(){u(e,"class",s="declaration chip "+r[29]+"_declaration svelte-1rnqnfh")},m(a,o){S(a,e,o),_(e,l),_(e,n)},p(a,o){o[0]&44&&t!==(t=a[15]+"")&&$(l,t),o[0]&44&&s!==(s="declaration chip "+a[29]+"_declaration svelte-1rnqnfh")&&u(e,"class",s)},d(a){a&&h(e)}}}function Ye(r,e){let t,l,n,s=e[23]+"",a,o,f,d,i=e[26]&&Ke(e);return{key:r,first:null,c(){t=g("li"),l=g("div"),n=g("a"),a=j(s),f=W(),i&&i.c(),d=W(),this.h()},l(p){t=v(p,"LI",{class:!0});var c=k(t);l=v(c,"DIV",{});var E=k(l);n=v(E,"A",{class:!0,href:!0});var q=k(n);a=D(q,s),q.forEach(h),E.forEach(h),f=P(c),i&&i.l(c),d=P(c),c.forEach(h),this.h()},h(){u(n,"class","chip svelte-1rnqnfh"),u(n,"href",o=e[24]),u(t,"class","module svelte-1rnqnfh"),Y(t,"ts",e[23].endsWith(".js")),Y(t,"svelte",e[23].endsWith(".svelte")),Y(t,"css",e[23].endsWith(".css")),Y(t,"json",e[23].endsWith(".json")),this.first=t},m(p,c){S(p,t,c),_(t,l),_(l,n),_(n,a),_(t,f),i&&i.m(t,null),_(t,d)},p(p,c){e=p,c[0]&4&&s!==(s=e[23]+"")&&$(a,s),c[0]&2052&&o!==(o=e[24])&&u(n,"href",o),e[26]?i?i.p(e,c):(i=Ke(e),i.c(),i.m(t,d)):i&&(i.d(1),i=null),c[0]&4&&Y(t,"ts",e[23].endsWith(".js")),c[0]&4&&Y(t,"svelte",e[23].endsWith(".svelte")),c[0]&4&&Y(t,"css",e[23].endsWith(".css")),c[0]&4&&Y(t,"json",e[23].endsWith(".json"))},d(p){p&&h(t),i&&i.d()}}}function gl(r){let e,t,l,n,s,a,o,f,d,i,p,c,E,q,N,z,G,X="raw data for <code>pkg: Package_Meta</code>",ee,I,C,Z=JSON.stringify(r[0],null,"	")+"",K,w;const le=r[22].repo_name,B=se(le,r,r[21],We),O=B||ul(r),te=r[22].default,y=se(te,r,r[21],null);let T=r[7]&&ze(r),L=r[13]&&Be(r),M=r[9]&&He(r),H=r[11]&&Re(r),R=r[13]&&Ue(r),U=r[10]&&Je(r),J=r[4]&&Qe(r),Q=r[9]&&Fe(r),F=r[2]&&r[11]&&Ge(r);return{c(){e=g("div"),t=g("header"),O&&O.c(),l=W(),y&&y.c(),n=W(),T&&T.c(),s=W(),L&&L.c(),a=W(),o=g("section"),M&&M.c(),f=W(),H&&H.c(),d=W(),R&&R.c(),i=W(),U&&U.c(),p=W(),J&&J.c(),c=W(),Q&&Q.c(),E=W(),F&&F.c(),q=W(),N=g("section"),z=g("details"),G=g("summary"),G.innerHTML=X,ee=W(),I=g("pre"),C=g("code"),K=j(Z),this.h()},l(m){e=v(m,"DIV",{class:!0});var b=k(e);t=v(b,"HEADER",{class:!0});var be=k(t);O&&O.l(be),be.forEach(h),l=P(b),y&&y.l(b),n=P(b),T&&T.l(b),s=P(b),L&&L.l(b),a=P(b),o=v(b,"SECTION",{class:!0});var x=k(o);M&&M.l(x),f=P(x),H&&H.l(x),d=P(x),R&&R.l(x),i=P(x),U&&U.l(x),p=P(x),J&&J.l(x),c=P(x),Q&&Q.l(x),x.forEach(h),E=P(b),F&&F.l(b),q=P(b),N=v(b,"SECTION",{class:!0});var Ee=k(N);z=v(Ee,"DETAILS",{});var ce=k(z);G=v(ce,"SUMMARY",{"data-svelte-h":!0}),sl(G)!=="svelte-k220bw"&&(G.innerHTML=X),ee=P(ce),I=v(ce,"PRE",{class:!0});var qe=k(I);C=v(qe,"CODE",{});var we=k(C);K=D(we,Z),we.forEach(h),qe.forEach(h),ce.forEach(h),Ee.forEach(h),b.forEach(h),this.h()},h(){u(t,"class","spaced"),u(o,"class","properties width_full spaced svelte-1rnqnfh"),u(I,"class","svelte-1rnqnfh"),u(N,"class","width_full spaced"),u(e,"class","package_detail svelte-1rnqnfh")},m(m,b){S(m,e,b),_(e,t),O&&O.m(t,null),_(e,l),y&&y.m(e,null),_(e,n),T&&T.m(e,null),_(e,s),L&&L.m(e,null),_(e,a),_(e,o),M&&M.m(o,null),_(o,f),H&&H.m(o,null),_(o,d),R&&R.m(o,null),_(o,i),U&&U.m(o,null),_(o,p),J&&J.m(o,null),_(o,c),Q&&Q.m(o,null),_(e,E),F&&F.m(e,null),_(e,q),_(e,N),_(N,z),_(z,G),_(z,ee),_(z,I),_(I,C),_(C,K),w=!0},p(m,b){B?B.p&&(!w||b[0]&2101248)&&ne(B,le,m,m[21],w?ae(le,m[21],b,hl):re(m[21]),We):O&&O.p&&(!w||b[0]&4160)&&O.p(m,w?b:[-1,-1]),y&&y.p&&(!w||b[0]&2097152)&&ne(y,te,m,m[21],w?ae(te,m[21],b,null):re(m[21]),null),m[7]?T?(T.p(m,b),b[0]&128&&A(T,1)):(T=ze(m),T.c(),A(T,1),T.m(e,s)):T&&(fe(),V(T,1,1,()=>{T=null}),ie()),m[13]?L?(L.p(m,b),b[0]&8192&&A(L,1)):(L=Be(m),L.c(),A(L,1),L.m(e,a)):L&&(fe(),V(L,1,1,()=>{L=null}),ie()),m[9]?M?(M.p(m,b),b[0]&512&&A(M,1)):(M=He(m),M.c(),A(M,1),M.m(o,f)):M&&(fe(),V(M,1,1,()=>{M=null}),ie()),m[11]?H?H.p(m,b):(H=Re(m),H.c(),H.m(o,d)):H&&(H.d(1),H=null),m[13]?R?R.p(m,b):(R=Ue(m),R.c(),R.m(o,i)):R&&(R.d(1),R=null),m[10]?U?U.p(m,b):(U=Je(m),U.c(),U.m(o,p)):U&&(U.d(1),U=null),m[4]?J?J.p(m,b):(J=Qe(m),J.c(),J.m(o,c)):J&&(J.d(1),J=null),m[9]?Q?Q.p(m,b):(Q=Fe(m),Q.c(),Q.m(o,null)):Q&&(Q.d(1),Q=null),m[2]&&m[11]?F?F.p(m,b):(F=Ge(m),F.c(),F.m(e,q)):F&&(F.d(1),F=null),(!w||b[0]&1)&&Z!==(Z=JSON.stringify(m[0],null,"	")+"")&&$(K,Z)},i(m){w||(A(O,m),A(y,m),A(T),A(L),A(M),w=!0)},o(m){V(O,m),V(y,m),V(T),V(L),V(M),w=!1},d(m){m&&h(e),O&&O.d(m),y&&y.d(m),T&&T.d(),L&&L.d(),M&&M.d(),H&&H.d(),R&&R.d(),U&&U.d(),J&&J.d(),Q&&Q.d(),F&&F.d()}}}function vl(r,e,t){let l,n,s,a,o,f,d,i,p,c,E,q,N,z,G,X,ee,I,C;el(r,tl,B=>t(14,C=B));let{$$slots:Z={},$$scope:K}=e,{pkg:w}=e;const le=(B,O)=>B+"/blob/main/src/lib/"+(O.endsWith(".js")?O.slice(0,-3)+".ts":O);return r.$$set=B=>{"pkg"in B&&t(0,w=B.pkg),"$$scope"in B&&t(21,K=B.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&1&&t(20,{package_json:l,npm_url:n,repo_name:s,repo_url:a,changelog_url:o,homepage_url:f}=w,l,(t(13,n),t(0,w)),(t(12,s),t(0,w)),(t(11,a),t(0,w)),(t(10,o),t(0,w)),(t(9,f),t(0,w))),r.$$.dirty[0]&1048576&&t(15,{name:d,version:i,description:p,icon:c,license:E,repository:q,exports:N,modules:z}=l,d,(t(8,i),t(20,l),t(0,w)),(t(7,p),t(20,l),t(0,w)),(t(6,c),t(20,l),t(0,w)),(t(1,E),t(20,l),t(0,w)),(t(19,q),t(20,l),t(0,w)),(t(17,N),t(20,l),t(0,w)),(t(5,z),t(20,l),t(0,w))),r.$$.dirty[0]&524288&&t(18,G=q?Ae(Se(Se(typeof q=="string"?q:q.url,".git"),"/"),"git+"):null),r.$$.dirty[0]&262146&&t(4,X=E&&G?G+"/blob/main/LICENSE":null),r.$$.dirty[0]&131072&&t(3,ee=N&&Object.keys(N)),r.$$.dirty[0]&131072&&t(2,I=N?Object.keys(N).map(B=>{const O=Ae(B,"./");return O==="."?"index.js":O}):null)},[w,E,I,ee,X,z,c,p,i,f,o,a,s,n,C,d,le,N,G,q,l,K,Z]}class kl extends ve{constructor(e){super(),ke(this,e,vl,gl,ge,{pkg:0},null,[-1,-1])}}const bl=r=>r.split("/").filter(e=>e&&e!=="."&&e!==".."),El=r=>{const e=[],t=bl(r);t.length&&e.push({type:"separator",path:"/"});let l="";for(let n=0;n<t.length;n++){const s=t[n];l+="/"+s,e.push({type:"piece",name:s,path:l}),n!==t.length-1&&e.push({type:"separator",path:l})}return e};function Ze(r,e,t){const l=r.slice();return l[11]=e[t],l}const ql=r=>({}),ye=r=>({});function wl(r){let e;return{c(){e=j("•")},l(t){e=D(t,"•")},m(t,l){S(t,e,l)},d(t){t&&h(e)}}}function Il(r){let e,t;const l=r[10].separator,n=se(l,r,r[9],ye),s=n||Dl();return{c(){e=g("span"),s&&s.c(),this.h()},l(a){e=v(a,"SPAN",{class:!0});var o=k(e);s&&s.l(o),o.forEach(h),this.h()},h(){u(e,"class","separator svelte-g6c005")},m(a,o){S(a,e,o),s&&s.m(e,null),t=!0},p(a,o){n&&n.p&&(!t||o&512)&&ne(n,l,a,a[9],t?ae(l,a[9],o,ql):re(a[9]),ye)},i(a){t||(A(s,a),t=!0)},o(a){V(s,a),t=!1},d(a){a&&h(e),s&&s.d(a)}}}function jl(r){let e,t=r[11].name+"",l,n;return{c(){e=g("a"),l=j(t),this.h()},l(s){e=v(s,"A",{href:!0,class:!0});var a=k(e);l=D(a,t),a.forEach(h),this.h()},h(){u(e,"href",n=r[0]+r[11].path),u(e,"class","svelte-g6c005"),Y(e,"selected",r[11].path===r[3])},m(s,a){S(s,e,a),_(e,l)},p(s,a){a&4&&t!==(t=s[11].name+"")&&$(l,t),a&5&&n!==(n=s[0]+s[11].path)&&u(e,"href",n),a&12&&Y(e,"selected",s[11].path===s[3])},i:De,o:De,d(s){s&&h(e)}}}function Dl(r){let e;return{c(){e=j("/")},l(t){e=D(t,"/")},m(t,l){S(t,e,l)},d(t){t&&h(e)}}}function $e(r){let e,t,l,n;const s=[jl,Il],a=[];function o(f,d){return f[11].type==="piece"?0:1}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),l=je()},l(f){t.l(f),l=je()},m(f,d){a[e].m(f,d),S(f,l,d),n=!0},p(f,d){let i=e;e=o(f),e===i?a[e].p(f,d):(fe(),V(a[i],1,1,()=>{a[i]=null}),ie(),t=a[e],t?t.p(f,d):(t=a[e]=s[e](f),t.c()),A(t,1),t.m(l.parentNode,l))},i(f){n||(A(t),n=!0)},o(f){V(t),n=!1},d(f){f&&h(l),a[e].d(f)}}}function Al(r){let e,t,l;const n=r[10].default,s=se(n,r,r[9],null),a=s||wl();let o=oe(r[2]),f=[];for(let i=0;i<o.length;i+=1)f[i]=$e(Ze(r,o,i));const d=i=>V(f[i],1,1,()=>{f[i]=null});return{c(){e=g("div"),t=g("a"),a&&a.c();for(let i=0;i<f.length;i+=1)f[i].c();this.h()},l(i){e=v(i,"DIV",{class:!0});var p=k(e);t=v(p,"A",{href:!0,class:!0});var c=k(t);a&&a.l(c),c.forEach(h);for(let E=0;E<f.length;E+=1)f[E].l(p);p.forEach(h),this.h()},h(){u(t,"href",r[1]),u(t,"class","svelte-g6c005"),Y(t,"selected",r[1]===r[3]),u(e,"class","breadcrumb svelte-g6c005")},m(i,p){S(i,e,p),_(e,t),a&&a.m(t,null);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(e,null);l=!0},p(i,[p]){if(s&&s.p&&(!l||p&512)&&ne(s,n,i,i[9],l?ae(n,i[9],p,null):re(i[9]),null),(!l||p&2)&&u(t,"href",i[1]),(!l||p&10)&&Y(t,"selected",i[1]===i[3]),p&525){o=oe(i[2]);let c;for(c=0;c<o.length;c+=1){const E=Ze(i,o,c);f[c]?(f[c].p(E,p),A(f[c],1)):(f[c]=$e(E),f[c].c(),A(f[c],1),f[c].m(e,null))}for(fe(),c=o.length;c<f.length;c+=1)d(c);ie()}},i(i){if(!l){A(a,i);for(let p=0;p<o.length;p+=1)A(f[p]);l=!0}},o(i){V(a,i),f=f.filter(Boolean);for(let p=0;p<f.length;p+=1)V(f[p]);l=!1},d(i){i&&h(e),a&&a.d(i),ll(f,i)}}}function Sl(r,e,t){let l,n,s,a,o,f;el(r,tl,q=>t(8,f=q));let{$$slots:d={},$$scope:i}=e,{path:p=void 0}=e,{selected_path:c=void 0}=e,{base_path:E=void 0}=e;return r.$$set=q=>{"path"in q&&t(4,p=q.path),"selected_path"in q&&t(5,c=q.selected_path),"base_path"in q&&t(6,E=q.base_path),"$$scope"in q&&t(9,i=q.$$scope)},r.$$.update=()=>{r.$$.dirty&272&&t(7,l=p??f.url.pathname),r.$$.dirty&160&&t(3,n=c===null?null:c===void 0?l:c),r.$$.dirty&64&&t(0,s=E??fl),r.$$.dirty&128&&t(2,a=El(l)),r.$$.dirty&1&&t(1,o=s||"/")},[s,o,a,n,p,c,E,l,f,i,d]}class xe extends ve{constructor(e){super(),ke(this,e,Sl,Al,ge,{path:4,selected_path:5,base_path:6})}}function Nl(r){let e;return{c(){e=j("🧶")},l(t){e=D(t,"🧶")},m(t,l){S(t,e,l)},d(t){t&&h(e)}}}function Ol(r){let e;return{c(){e=j("🧶")},l(t){e=D(t,"🧶")},m(t,l){S(t,e,l)},d(t){t&&h(e)}}}function Cl(r){let e,t,l,n,s,a=r[0].repo_name+"",o,f,d,i,p,c,E,q,N,z,G,X,ee;return d=new xe({props:{$$slots:{default:[Nl]},$$scope:{ctx:r}}}),E=new kl({props:{pkg:r[0]}}),z=new al({props:{pkg:r[0]}}),X=new xe({props:{$$slots:{default:[Ol]},$$scope:{ctx:r}}}),{c(){e=g("main"),t=g("div"),l=g("section"),n=g("header"),s=g("h1"),o=j(a),f=W(),_e(d.$$.fragment),i=W(),p=g("section"),c=g("div"),_e(E.$$.fragment),q=W(),N=g("section"),_e(z.$$.fragment),G=W(),_e(X.$$.fragment),this.h()},l(I){e=v(I,"MAIN",{class:!0});var C=k(e);t=v(C,"DIV",{class:!0});var Z=k(t);l=v(Z,"SECTION",{class:!0});var K=k(l);n=v(K,"HEADER",{});var w=k(n);s=v(w,"H1",{class:!0});var le=k(s);o=D(le,a),le.forEach(h),w.forEach(h),f=P(K),he(d.$$.fragment,K),K.forEach(h),Z.forEach(h),i=P(C),p=v(C,"SECTION",{class:!0});var B=k(p);c=v(B,"DIV",{class:!0});var O=k(c);he(E.$$.fragment,O),O.forEach(h),B.forEach(h),q=P(C),N=v(C,"SECTION",{class:!0});var te=k(N);he(z.$$.fragment,te),G=P(te),he(X.$$.fragment,te),te.forEach(h),C.forEach(h),this.h()},h(){u(s,"class","svelte-1tz8tj3"),u(l,"class","svelte-1tz8tj3"),u(t,"class","prose"),u(c,"class","panel padded_md width_md"),u(p,"class","box width_full spaced svelte-1tz8tj3"),u(N,"class","box svelte-1tz8tj3"),u(e,"class","width_md svelte-1tz8tj3")},m(I,C){S(I,e,C),_(e,t),_(t,l),_(l,n),_(n,s),_(s,o),_(l,f),ue(d,l,null),_(e,i),_(e,p),_(p,c),ue(E,c,null),_(e,q),_(e,N),ue(z,N,null),_(N,G),ue(X,N,null),ee=!0},p(I,[C]){const Z={};C&2&&(Z.$$scope={dirty:C,ctx:I}),d.$set(Z);const K={};C&2&&(K.$$scope={dirty:C,ctx:I}),X.$set(K)},i(I){ee||(A(d.$$.fragment,I),A(E.$$.fragment,I),A(z.$$.fragment,I),A(X.$$.fragment,I),ee=!0)},o(I){V(d.$$.fragment,I),V(E.$$.fragment,I),V(z.$$.fragment,I),V(X.$$.fragment,I),ee=!1},d(I){I&&h(e),pe(d),pe(E),pe(z),pe(X)}}}function Vl(r){return[ol(Oe.homepage,Oe)]}class zl extends ve{constructor(e){super(),ke(this,e,Vl,Cl,ge,{})}}export{zl as component};
