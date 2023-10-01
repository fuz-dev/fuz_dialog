import{r as Q,n as W,u as X,e as f,s as w,v as Z,d as c,c as E,w as U,i as d,x as $,y as ee,z as te,H as ae,A as ne,b as R,f as A,g as se,h as u,B as q,C as F}from"../chunks/scheduler.ed0c62fe.js";import{S as le,i as _e,a as N,t as j,b as oe,d as ce,m as de,e as ge}from"../chunks/index.190c283e.js";import{w as G}from"../chunks/index.2ca3bd05.js";const ue=!0,Ue=Object.freeze(Object.defineProperty({__proto__:null,prerender:ue},Symbol.toStringTag,{value:"Module"}));const fe=[{name:"hue_1",light:"210",comment:"blue"},{name:"color_1",light:"hsl(var(--hue_1), 55%, 50%)",dark:"hsl(var(--hue_1), 55%, 75%)"},{name:"hue_2",light:"120",comment:"green, triad with `--color_3` and `--color_4`"},{name:"color_2",light:"hsl(var(--hue_2), 55%, 32%)",dark:"hsl(var(--hue_2), 45%, 70%)",comment:"same as THEME_COLOR"},{name:"hue_3",light:"251",comment:"purple, triad with `--color_2` and `--color_4`"},{name:"color_3",light:"hsl(var(--hue_3), 50%, 50%)",dark:"hsl(var(--hue_3), 50%, 75%)"},{name:"hue_4",light:"26",comment:"orange, triad with `--color_2` and `--color_3`"},{name:"color_4",light:"hsl(var(--hue_4), 55%, 50%)",dark:"hsl(var(--hue_4), 65%, 75%)"},{name:"hue_5",light:"0",comment:"red"},{name:"color_5",light:"hsl(var(--hue_5), 50%, 50%)",dark:"hsl(var(--hue_5), 50%, 65%)"},{name:"hue_6",light:"32",comment:"brown"},{name:"color_6",light:"hsl(var(--hue_6), 97%, 22%)",dark:"hsl(var(--hue_6), 32%, 75%)"},{name:"hue_7",light:"335",comment:"pink"},{name:"color_7",light:"hsl(var(--hue_7), 74%, 56%)",dark:"hsl(var(--hue_7), 74%, 76%)"},{name:"darken_1",light:"#0000000f",comment:"6%"},{name:"darken_2",light:"#0000001f",comment:"12%"},{name:"darken_3",light:"#00000036",comment:"21%"},{name:"darken_4",light:"#00000052",comment:"32%"},{name:"darken_5",light:"#00000073",comment:"45%"},{name:"darken_6",light:"#000000a6",comment:"65%"},{name:"darken_7",light:"#000000cc",comment:"80%"},{name:"darken_8",light:"#000000e3",comment:"89%"},{name:"darken_9",light:"#000000f5",comment:"96%"},{name:"lighten_1",light:"#ffffff0f",comment:"6%"},{name:"lighten_2",light:"#ffffff1f",comment:"12%"},{name:"lighten_3",light:"#ffffff36",comment:"21%"},{name:"lighten_4",light:"#ffffff52",comment:"32%"},{name:"lighten_5",light:"#ffffff73",comment:"45%"},{name:"lighten_6",light:"#ffffffa6",comment:"65%"},{name:"lighten_7",light:"#ffffffcc",comment:"80%"},{name:"lighten_8",light:"#ffffffe3",comment:"89%"},{name:"lighten_9",light:"#fffffff5",comment:"96%"},{name:"tint_hue",light:"var(--hue_4)"},{name:"tint_saturation",light:"11%"},{name:"bg",light:"hsl(var(--tint_hue), var(--tint_saturation), 96%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 7%)"},{name:"fg",light:"hsl(var(--tint_hue), var(--tint_saturation), 7%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 96%)"},{name:"bg_1",light:"var(--lighten_1)",dark:"var(--darken_1)"},{name:"bg_2",light:"var(--lighten_2)",dark:"var(--darken_2)"},{name:"bg_3",light:"var(--lighten_3)",dark:"var(--darken_3)"},{name:"bg_4",light:"var(--lighten_4)",dark:"var(--darken_4)"},{name:"bg_5",light:"var(--lighten_5)",dark:"var(--darken_5)"},{name:"bg_6",light:"var(--lighten_6)",dark:"var(--darken_6)"},{name:"bg_7",light:"var(--lighten_7)",dark:"var(--darken_7)"},{name:"bg_8",light:"var(--lighten_8)",dark:"var(--darken_8)"},{name:"bg_9",light:"var(--lighten_9)",dark:"var(--darken_9)"},{name:"fg_1",light:"var(--darken_1)",dark:"var(--lighten_1)"},{name:"fg_2",light:"var(--darken_2)",dark:"var(--lighten_2)"},{name:"fg_3",light:"var(--darken_3)",dark:"var(--lighten_3)"},{name:"fg_4",light:"var(--darken_4)",dark:"var(--lighten_4)"},{name:"fg_5",light:"var(--darken_5)",dark:"var(--lighten_5)"},{name:"fg_6",light:"var(--darken_6)",dark:"var(--lighten_6)"},{name:"fg_7",light:"var(--darken_7)",dark:"var(--lighten_7)"},{name:"fg_8",light:"var(--darken_8)",dark:"var(--lighten_8)"},{name:"fg_9",light:"var(--darken_9)",dark:"var(--lighten_9)"},{name:"text_color",light:"var(--text_1)"},{name:"text_1",light:"hsl(var(--tint_hue), var(--tint_saturation), 16%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 80%)"},{name:"text_2",light:"hsl(var(--tint_hue), var(--tint_saturation), 32%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 65%)"},{name:"text_3",light:"hsl(var(--tint_hue), var(--tint_saturation), 48%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 50%)"},{name:"text_disabled",light:"var(--text_3)"},{name:"text_active",light:"hsl(var(--hue_1), 55%, 40%);",dark:"hsl(var(--hue_1), 65%, 65%);"},{name:"line_height",light:"1.25"},{name:"font_family",light:"system-ui, ui-sans-serif, 'Segoe UI Variable Text', 'Segoe UI', Meiryo, Roboto, 'Helvetica Neue', Arial, sans-serif"},{name:"font_family_mono",light:"ui-monospace, 'Fira Mono', monospace"},{name:"size_xs",light:"1rem"},{name:"size_sm",light:"1.3rem"},{name:"size_md",light:"1.6rem"},{name:"size_lg",light:"2.04rem"},{name:"size_xl",light:"2.59rem"},{name:"size_xl2",light:"3.29rem"},{name:"size_xl3",light:"4.19rem"},{name:"size_xl4",light:"5.33rem"},{name:"size_xl5",light:"6.78rem"},{name:"size_xl6",light:"8.62rem"},{name:"size_xl7",light:"10.97rem"},{name:"size_xl8",light:"13.95rem"},{name:"size_xl9",light:"17.74rem"},{name:"link_color",light:"hsl(var(--hue_1), 61%, 35%)",dark:"hsl(var(--hue_1), 61%, 58%)"},{name:"text_decoration",light:"none"},{name:"text_decoration_hover",light:"underline"},{name:"text_decoration_selected",light:"underline"},{name:"link_active",light:"var(--text_color)"},{name:"spacing_xs5",light:"0.1rem"},{name:"spacing_xs4",light:"0.2rem"},{name:"spacing_xs3",light:"0.3rem"},{name:"spacing_xs2",light:"0.4rem"},{name:"spacing_xs",light:"0.6rem"},{name:"spacing_sm",light:"0.8rem"},{name:"spacing_md",light:"1rem"},{name:"spacing_lg",light:"1.3rem"},{name:"spacing_xl",light:"1.6rem"},{name:"spacing_xl2",light:"2.1rem"},{name:"spacing_xl3",light:"2.6rem"},{name:"spacing_xl4",light:"3.3rem"},{name:"spacing_xl5",light:"4.2rem"},{name:"spacing_xl6",light:"5.4rem"},{name:"spacing_xl7",light:"6.9rem"},{name:"spacing_xl8",light:"8.7rem"},{name:"spacing_xl9",light:"11.1rem"},{name:"width_md",light:"800px"},{name:"width_sm",light:"320px"},{name:"border_color",light:"var(--border_3)"},{name:"border_1",light:"hsl(var(--tint_hue), 60%, 20%, 15%)",dark:"hsl(var(--tint_hue), 60%, 80%, 85%)"},{name:"border_2",light:"hsl(var(--tint_hue), 60%, 20%, 25%)",dark:"hsl(var(--tint_hue), 60%, 80%, 70%)"},{name:"border_3",light:"hsl(var(--tint_hue), 60%, 20%, 35%)",dark:"hsl(var(--tint_hue), 60%, 80%, 50%)"},{name:"border_4",light:"hsl(var(--tint_hue), 60%, 20%, 45%)",dark:"hsl(var(--tint_hue), 60%, 80%, 40%)"},{name:"border_5",light:"hsl(var(--tint_hue), 60%, 20%, 60%)",dark:"hsl(var(--tint_hue), 60%, 80%, 30%)"},{name:"border_disabled",light:"var(--border_3)"},{name:"border_width",light:"var(--border_width_1)"},{name:"border_width_1",light:"1px"},{name:"border_width_2",light:"2px"},{name:"border_width_3",light:"3px"},{name:"border_width_4",light:"4px"},{name:"border_width_5",light:"6px"},{name:"border_width_6",light:"8px"},{name:"border_style",light:"solid"},{name:"outline_width",light:"var(--outline_width_1)"},{name:"outline_width_1",light:"0"},{name:"outline_width_2",light:"var(--border_width_2)"},{name:"outline_width_3",light:"var(--border_width_1)"},{name:"outline_style",light:"solid"},{name:"outline_color",light:"var(--color_1)"},{name:"button_bg",light:"var(--fg_1)"},{name:"button_bg_hover",light:"var(--fg_2)"},{name:"button_bg_active",light:"var(--bg_3)"},{name:"button_bg_disabled",light:"transparent"},{name:"input_bg",light:"var(--bg_5)"},{name:"input_padding_y",light:"var(--spacing_md)"},{name:"input_padding_x",light:"var(--spacing_lg)"},{name:"input_width_min",light:"100px"},{name:"input_height",light:"var(--spacing_xl5)"},{name:"input_height_sm",light:"var(--spacing_xl4)"},{name:"input_height_inner",light:"calc(var(--input_height) - 2 * var(--border_width) - 2 * var(--input_padding_y))"},{name:"box_shadow",light:"2px 4px 9px hsla(var(--tint_hue), var(--tint_saturation), 7%, 0.28), 2px 14px 48px hsla(var(--tint_hue), var(--tint_saturation), 7%, 0.28)",dark:"2px 4px 9px hsla(var(--tint_hue), var(--tint_saturation), 82%, var(--faded_5)), 2px 14px 48px hsla(var(--tint_hue), var(--tint_saturation), 82%, var(--faded_5))"},{name:"box_shadow_lg",light:"2px 6px 14px hsla(var(--tint_hue), var(--tint_saturation), 7%, 0.8), 2px 6px 48px hsla(var(--tint_hue), var(--tint_saturation), 7%, 0.8)",dark:"2px 6px 18px hsla(var(--tint_hue), var(--tint_saturation), 82%, var(--faded_5)), 2px 6px 48px hsla(var(--tint_hue), var(--tint_saturation), 82%, var(--faded_5))"},{name:"drop_shadow",light:"drop-shadow(var(--box_shadow))"},{name:"drop_shadow_lg",light:"drop-shadow(var(--box_shadow_lg))"},{name:"icon_size",light:"var(--icon_size_md)"},{name:"icon_size_xs",light:"18px"},{name:"icon_size_sm",light:"32px"},{name:"icon_size_md",light:"48px"},{name:"icon_size_lg",light:"80px"},{name:"icon_size_xl",light:"128px"},{name:"icon_size_xl2",light:"196px"},{name:"icon_size_xl3",light:"316px"},{name:"icon_size_xl4",light:"512px"},{name:"duration_1",light:"0.08s"},{name:"duration_2",light:"0.2s"},{name:"duration_3",light:"0.5s"},{name:"duration_4",light:"1s"},{name:"duration_5",light:"1.5s"},{name:"duration_6",light:"3s"},{name:"faded_1",light:"86%"},{name:"faded_2",light:"62%"},{name:"faded_3",light:"38%"},{name:"faded_4",light:"24%"},{name:"faded_5",light:"15%"},{name:"faded_6",light:"9%"},{name:"disabled_opacity",light:"var(--faded_1)"},{name:"border_radius",light:"var(--border_radius_md)"},{name:"border_radius_md",light:"calc(var(--input_height) / 2)"},{name:"border_radius_sm",light:"calc(var(--border_radius_md) / 1.618)"},{name:"border_radius_xs",light:"calc(var(--border_radius_sm) / 1.618)"},{name:"border_radius_xs2",light:"calc(var(--border_radius_xs) / 1.618)"}],re={name:"base",variables:[]},ie=[re,{name:"low contrast",variables:[{name:"tint_saturation",light:"8%"},{name:"bg",light:"hsl(var(--tint_hue), var(--tint_saturation), 86%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 18%)"}]},{name:"high contrast",variables:[{name:"bg",light:"#fff",dark:"#000"},{name:"text_1",light:"hsl(var(--tint_hue), var(--tint_saturation), 8%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 90%)"},{name:"text_2",light:"hsl(var(--tint_hue), var(--tint_saturation), 16%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 83%)"},{name:"text_3",light:"hsl(var(--tint_hue), var(--tint_saturation), 24%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 75%)"}]}],ve=["light","auto","dark"],ke="#257e25",be=e=>{e==="dark"||e!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},K="color-scheme",pe=(e,a=K)=>{try{e===null?localStorage.removeItem(a):localStorage.setItem(a,e)}catch{}},xe=(e="auto",a=K)=>{let t;try{t=localStorage.getItem(a)}catch{return e}return ve.includes(t)?t:e},he="theme",ye=(e,a=he)=>{try{e===null?localStorage.removeItem(a):localStorage.setItem(a,JSON.stringify(e))}catch{}},we=(e=ie[0],a=he)=>{try{const t=localStorage.getItem(a),n=t===null?t:JSON.parse(t);if(n)return n}catch{}return e},Ee=(e="light",a=K)=>`
	try {
		let c = localStorage.getItem('${a}');
		if (c === 'auto' || (c !== 'dark' && c !== 'light')) {
			c = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		if (c === 'dark') document.documentElement.classList.add('dark');
	} catch (_) { ${e==="dark"?"document.documentElement.classList.add('dark');":""} }
`,ze=e=>`<style nonce="%sveltekit.nonce%">
	${e}
</style>`,Se=(e,a={})=>{const{comments:t=!1,id:n=null,empty_default_theme:l=!0,specificity:_=2}=a,r=e.name===ie[0].name?l?null:fe:e.variables;if(!(r!=null&&r.length))return"";const s=r.map(o=>J(o)).filter(Boolean),h=r.map(o=>J(o,!0,t)).filter(Boolean),i=(n?"#"+n:":root").repeat(_);return`${s.length?`${i} {
	${s.join(`
	`)}
}`:""}
${h.length?`${i}.dark {
	${h.join(`
	`)}
}`:""}
`.trim()},J=(e,a=!1,t=!0)=>{const n=a?e.dark:e.light;return n?"--"+e.name+": "+n+";"+(t&&e.comment?" /* "+e.comment+" */":""):""},Me=Symbol("theme"),Te=e=>Q(Me,e),Oe=Symbol("color_scheme"),He=e=>Q(Oe,e),Ce=e=>({style:e&1,theme_style_html:e&2,theme_setup_script:e&4,selected_theme:e&8,selected_color_scheme:e&16}),P=e=>({style:e[0],theme_style_html:e[1],theme_setup_script:e[2],selected_theme:e[3],selected_color_scheme:e[4]});function D(e){let a,t;return{c(){a=new ae(!1),t=f(),this.h()},l(n){a=ne(n,!1),t=f(),this.h()},h(){a.a=t},m(n,l){a.m(e[1],n,l),d(n,t,l)},p(n,l){l&2&&a.p(n[1])},d(n){n&&(c(t),a.d())}}}function V(e){let a,t,n,l,_,r;return{c(){a=R("meta"),t=w(),n=R("meta"),l=w(),_=R("script"),r=new ae(!1),this.h()},l(s){a=A(s,"META",{name:!0,content:!0}),t=E(s),n=A(s,"META",{name:!0,content:!0}),l=E(s),_=A(s,"SCRIPT",{});var h=se(_);r=ne(h,!1),h.forEach(c),this.h()},h(){u(a,"name","color-scheme"),u(a,"content",e[6]),u(n,"name","theme-color"),u(n,"content",e[5]),r.a=null},m(s,h){d(s,a,h),d(s,t,h),d(s,n,h),d(s,l,h),d(s,_,h),r.m(e[2],_)},p(s,h){h&64&&u(a,"content",s[6]),h&32&&u(n,"content",s[5]),h&4&&r.p(s[2])},d(s){s&&(c(a),c(t),c(n),c(l),c(_))}}}function Ie(e){let a,t,n,l,_=e[1]&&D(e),r=e[2]&&V(e);const s=e[22].default,h=X(s,e,e[21],P);return{c(){_&&_.c(),a=f(),r&&r.c(),t=f(),n=w(),h&&h.c()},l(i){const o=Z("svelte-1qw2uo0",document.head);_&&_.l(o),a=f(),r&&r.l(o),t=f(),o.forEach(c),n=E(i),h&&h.l(i)},m(i,o){_&&_.m(document.head,null),U(document.head,a),r&&r.m(document.head,null),U(document.head,t),d(i,n,o),h&&h.m(i,o),l=!0},p(i,[o]){i[1]?_?_.p(i,o):(_=D(i),_.c(),_.m(a.parentNode,a)):_&&(_.d(1),_=null),i[2]?r?r.p(i,o):(r=V(i),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null),h&&h.p&&(!l||o&2097183)&&$(h,s,i,i[21],l?te(s,i[21],o,Ce):ee(i[21]),P)},i(i){l||(N(h,i),l=!0)},o(i){j(h,i),l=!1},d(i){i&&c(n),_&&_.d(i),c(a),r&&r.d(i),c(t),h&&h.d(i)}}}function Le(e,a,t){let n,l,_,r,s=q,h=()=>(s(),s=F(p,m=>t(19,r=m)),p),i,o=q,Y=()=>(o(),o=F(x,m=>t(20,i=m)),x);e.$$.on_destroy.push(()=>s()),e.$$.on_destroy.push(()=>o());let{$$slots:me={},$$scope:B}=a,{sync_color_scheme:v=be}=a,{load_color_scheme:z=xe}=a,{save_color_scheme:k=pe}=a,{load_theme:S=we}=a,{save_theme:b=ye}=a,{selected_theme:p=G(S())}=a;h(),Te(p);let{selected_color_scheme:x=G(z())}=a;Y(),He(x);let{color_scheme_fallback:g=void 0}=a,{color_scheme_css:M=void 0}=a,{theme_color:T=void 0}=a,{style:y=null}=a,{theme_style_html:O=null}=a,{theme_setup_script:H=null}=a,C=0,I=0,L=0;return e.$$set=m=>{"sync_color_scheme"in m&&t(7,v=m.sync_color_scheme),"load_color_scheme"in m&&t(8,z=m.load_color_scheme),"save_color_scheme"in m&&t(9,k=m.save_color_scheme),"load_theme"in m&&t(10,S=m.load_theme),"save_theme"in m&&t(11,b=m.save_theme),"selected_theme"in m&&h(t(3,p=m.selected_theme)),"selected_color_scheme"in m&&Y(t(4,x=m.selected_color_scheme)),"color_scheme_fallback"in m&&t(12,g=m.color_scheme_fallback),"color_scheme_css"in m&&t(13,M=m.color_scheme_css),"theme_color"in m&&t(14,T=m.theme_color),"style"in m&&t(0,y=m.style),"theme_style_html"in m&&t(1,O=m.theme_style_html),"theme_setup_script"in m&&t(2,H=m.theme_setup_script),"$$scope"in m&&t(21,B=m.$$scope)},e.$$.update=()=>{e.$$.dirty&524288&&t(18,n=r.name),e.$$.dirty&786432&&t(0,y=n===re.name?null:Se(r)),e.$$.dirty&1&&t(1,O=y?ze(y):null),e.$$.dirty&4096&&t(2,H=Ee(g)),e.$$.dirty&1081472&&t(15,C++,C)&&(v==null||v(i)),e.$$.dirty&1114624&&t(16,I++,I)&&(k==null||k(i)),e.$$.dirty&657408&&t(17,L++,L)&&(b==null||b(r)),e.$$.dirty&12288&&t(6,l=M??(g==="dark"||g==="light"?g:matchMedia("(prefers-color-scheme: dark)").matches?"dark light":"light dark")),e.$$.dirty&16384&&t(5,_=T??ke)},[y,O,H,p,x,_,l,v,z,k,S,b,g,M,T,C,I,L,n,r,i,B,me]}class Re extends le{constructor(a){super(),_e(this,a,Le,Ie,W,{sync_color_scheme:7,load_color_scheme:8,save_color_scheme:9,load_theme:10,save_theme:11,selected_theme:3,selected_color_scheme:4,color_scheme_fallback:12,color_scheme_css:13,theme_color:14,style:0,theme_style_html:1,theme_setup_script:2})}}function Ae(e){let a;const t=e[0].default,n=X(t,e,e[1],null);return{c(){n&&n.c()},l(l){n&&n.l(l)},m(l,_){n&&n.m(l,_),a=!0},p(l,_){n&&n.p&&(!a||_&2)&&$(n,t,l,l[1],a?te(t,l[1],_,null):ee(l[1]),null)},i(l){a||(N(n,l),a=!0)},o(l){j(n,l),a=!1},d(l){n&&n.d(l)}}}function Ne(e){let a,t,n;return t=new Re({props:{$$slots:{default:[Ae]},$$scope:{ctx:e}}}),{c(){a=w(),oe(t.$$.fragment),this.h()},l(l){Z("svelte-ozoap1",document.head).forEach(c),a=E(l),ce(t.$$.fragment,l),this.h()},h(){document.title="@fuz.dev/fuz_dialog"},m(l,_){d(l,a,_),de(t,l,_),n=!0},p(l,[_]){const r={};_&2&&(r.$$scope={dirty:_,ctx:l}),t.$set(r)},i(l){n||(N(t.$$.fragment,l),n=!0)},o(l){j(t.$$.fragment,l),n=!1},d(l){l&&c(a),ge(t,l)}}}function je(e,a,t){let{$$slots:n={},$$scope:l}=a;return e.$$set=_=>{"$$scope"in _&&t(1,l=_.$$scope)},[n,l]}class qe extends le{constructor(a){super(),_e(this,a,je,Ne,W,{})}}export{qe as component,Ue as universal};