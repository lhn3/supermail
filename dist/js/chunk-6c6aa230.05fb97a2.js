(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c6aa230"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(n(t))}},"150e":function(t,e,r){"use strict";r("3da0")},"3da0":function(t,e,r){},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),i=r("9bdd"),a=r("e95a"),c=r("50c4"),s=r("8418"),u=r("35a1");t.exports=function(t){var e,r,f,l,d,p,h=o(t),m="function"==typeof this?this:Array,b=arguments.length,v=b>1?arguments[1]:void 0,y=void 0!==v,g=u(h),w=0;if(y&&(v=n(v,b>2?arguments[2]:void 0,2)),void 0==g||m==Array&&a(g))for(e=c(h.length),r=new m(e);e>w;w++)p=y?v(h[w],w):h[w],s(r,w,p);else for(l=g.call(h),d=l.next,r=new m;!(f=d.call(l)).done;w++)p=y?i(l,v,[f.value,w],!0):f.value,s(r,w,p);return r.length=w,r}},"4e03":function(t,e,r){},"5cbe":function(t,e,r){t.exports=r.p+"img/recommend_bg.794b6628.jpg"},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(a){throw o(t),a}}},"9c8a":function(t,e,r){},a19c:function(t,e,r){"use strict";r("c668")},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),p=r("861d"),h=r("825a"),m=r("7b0b"),b=r("fc6a"),v=r("c04e"),y=r("5c6c"),g=r("7c73"),w=r("df75"),S=r("241c"),O=r("057f"),_=r("7418"),C=r("06cf"),k=r("9bf2"),j=r("d1e7"),$=r("9112"),x=r("6eeb"),A=r("5692"),T=r("f772"),E=r("d012"),H=r("90e3"),N=r("b622"),G=r("e538"),P=r("746f"),L=r("d44e"),I=r("69f3"),V=r("b727").forEach,F=T("hidden"),U="Symbol",B="prototype",J=N("toPrimitive"),M=I.set,R=I.getterFor(U),D=Object[B],Q=o.Symbol,W=i("JSON","stringify"),q=C.f,z=k.f,K=O.f,X=j.f,Y=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),et=A("symbol-to-string-registry"),rt=A("wks"),nt=o.QObject,ot=!nt||!nt[B]||!nt[B].findChild,it=c&&f((function(){return 7!=g(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=q(D,e);n&&delete D[e],z(t,e,r),n&&t!==D&&z(D,e,n)}:z,at=function(t,e){var r=Y[t]=g(Q[B]);return M(r,{type:U,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},st=function(t,e,r){t===D&&st(Z,e,r),h(t);var n=v(e,!0);return h(r),l(Y,n)?(r.enumerable?(l(t,F)&&t[F][n]&&(t[F][n]=!1),r=g(r,{enumerable:y(0,!1)})):(l(t,F)||z(t,F,y(1,{})),t[F][n]=!0),it(t,n,r)):z(t,n,r)},ut=function(t,e){h(t);var r=b(e),n=w(r).concat(ht(r));return V(n,(function(e){c&&!lt.call(r,e)||st(t,e,r[e])})),t},ft=function(t,e){return void 0===e?g(t):ut(g(t),e)},lt=function(t){var e=v(t,!0),r=X.call(this,e);return!(this===D&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,F)&&this[F][e])||r)},dt=function(t,e){var r=b(t),n=v(e,!0);if(r!==D||!l(Y,n)||l(Z,n)){var o=q(r,n);return!o||!l(Y,n)||l(r,F)&&r[F][n]||(o.enumerable=!0),o}},pt=function(t){var e=K(b(t)),r=[];return V(e,(function(t){l(Y,t)||l(E,t)||r.push(t)})),r},ht=function(t){var e=t===D,r=K(e?Z:b(t)),n=[];return V(r,(function(t){!l(Y,t)||e&&!l(D,t)||n.push(Y[t])})),n};if(s||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=H(t),r=function(t){this===D&&r.call(Z,t),l(this,F)&&l(this[F],e)&&(this[F][e]=!1),it(this,e,y(1,t))};return c&&ot&&it(D,e,{configurable:!0,set:r}),at(e,t)},x(Q[B],"toString",(function(){return R(this).tag})),x(Q,"withoutSetter",(function(t){return at(H(t),t)})),j.f=lt,k.f=st,C.f=dt,S.f=O.f=pt,_.f=ht,G.f=function(t){return at(N(t),t)},c&&(z(Q[B],"description",{configurable:!0,get:function(){return R(this).description}}),a||x(D,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:Q}),V(w(rt),(function(t){P(t)})),n({target:U,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:f((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(m(t))}}),W){var mt=!s||f((function(){var t=Q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));n({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),o[1]=e,W.apply(null,o)}})}Q[B][J]||$(Q[B],J,Q[B].valueOf),L(Q,U),E[F]=!0},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},b3d7:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("NavBar",{staticClass:"home-nav"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物街")])]),r("TabControl",{directives:[{name:"show",rawName:"v-show",value:t.top_control,expression:"top_control"}],ref:"tabControl1",staticClass:"top-control",attrs:{title:t.title},on:{tabClick:t.tabClick}}),r("Scroll",{ref:"scroll",staticClass:"content",attrs:{probeNum:3,pullUp:!0},on:{xy:t.xy,pullUpLoad:t.pullUpLoad}},[r("HomeSwiper",{attrs:{banners:t.banners},on:{swiperload:t.swiperload}}),r("RecommendView",{attrs:{recommend:t.recommend}}),r("FeatureView"),r("TabControl",{ref:"tabControl2",attrs:{title:t.title},on:{tabClick:t.tabClick}}),r("GoodsList",{attrs:{goods:t.showGoods}})],1),r("BackTop",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],nativeOn:{click:function(e){return t.back_top.apply(null,arguments)}}})],1)},o=[];function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return i(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function c(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0");function s(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return a(t)||c(t)||s(t)||u()}var l=r("a7ac"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-control"},t._l(t.title,(function(e,n){return r("div",{key:n,staticClass:"tab-control-item",class:{activate:n===t.activate},on:{click:function(e){return t.show(n)}}},[r("span",[t._v(t._s(e))])])})),0)},p=[],h={name:"TabControl",props:{title:{type:Array,default:function(){return[]}}},data:function(){return{activate:0}},methods:{show:function(t){this.activate=t,this.$emit("tabClick",t)}}},m=h,b=(r("a19c"),r("2877")),v=Object(b["a"])(m,d,p,!1,null,"ed4f78f0",null),y=v.exports,g=r("6d71"),w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Swiper",t._l(t.banners,(function(e,n){return r("SwiperItem",{key:n},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""},on:{load:t.swiperLoad}})])])})),1)],1)},S=[],O=r("dc2c"),_={name:"HomeSwiper",props:{banners:{type:Array,default:function(){return[]}}},data:function(){return{img:!0}},components:{Swiper:O["a"],SwiperItem:O["b"]},methods:{swiperLoad:function(){this.img&&(this.$emit("swiperload"),this.img=!1)}}},C=_,k=Object(b["a"])(C,w,S,!1,null,"58361221",null),j=k.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"recommend"},t._l(t.recommend,(function(e,n){return r("div",{key:n,staticClass:"recommend-item"},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""}}),r("div",{staticClass:"title"},[t._v(t._s(e.title))])])])})),0)},x=[],A={name:"RecommendView",props:{recommend:{type:Array,default:function(){return[]}}}},T=A,E=(r("fcd9"),Object(b["a"])(T,$,x,!1,null,"537773a2",null)),H=E.exports,N=r("1bab");function G(){return Object(N["a"])({url:"/home/multidata"})}function P(t,e){return Object(N["a"])({url:"/home/data",params:{type:t,page:e}})}var L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feature"},[n("a",{attrs:{href:""}},[n("img",{attrs:{src:r("5cbe"),alt:""}})])])}],V={name:"FeatureView"},F=V,U=(r("cf50"),Object(b["a"])(F,L,I,!1,null,"fc6c2494",null)),B=U.exports,J=r("5d17"),M=r("fdd6"),R={name:"Home",components:{NavBar:l["a"],HomeSwiper:j,RecommendView:H,FeatureView:B,TabControl:y,GoodsList:g["a"],Scroll:J["a"],BackTop:M["a"]},data:function(){return{banners:[],recommend:[],title:["流行","新款","精选"],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",isShow:!1,top_control:!1,offsettop:0,savey:0}},created:function(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},methods:{getHomeMultidata:function(){var t=this;G().then((function(e){t.banners=e.data.banner.list,t.recommend=e.data.recommend.list})).catch()},getHomeGoods:function(t){var e=this,r=this.goods[t]["page"]+=1;P(t,r).then((function(n){var o;(o=e.goods[t].list).push.apply(o,f(n.data.list)),e.goods[t]["page"]=r})).catch()},tabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl1.activate=t,this.$refs.tabControl2.activate=t},back_top:function(){this.$refs.scroll.scrollto(0,0,500)},xy:function(t){this.isShow=-t.y>1500,this.top_control=-t.y>this.offsettop},pullUpLoad:function(){this.getHomeGoods(this.currentType),this.$refs.scroll.refreshes(),this.$refs.scroll.finishpullup()},swiperload:function(){this.offsettop=this.$refs.tabControl2.$el.offsetTop}},computed:{showGoods:function(){return this.goods[this.currentType].list}},activated:function(){this.$refs.scroll.refreshes(),this.$refs.scroll.scrollto(0,this.savey,0)},deactivated:function(){this.savey=this.$refs.scroll.scroll.on("scroll",(function(t){})).y}},D=R,Q=(r("150e"),Object(b["a"])(D,n,o,!1,null,"69dccc61",null));e["default"]=Q.exports},c668:function(t,e,r){},cf50:function(t,e,r){"use strict";r("4e03")},d28b:function(t,e,r){var n=r("746f");n("iterator")},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),a=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var p=d.prototype=f.prototype;p.constructor=d;var h=p.toString,m="Symbol(test)"==String(f("test")),b=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=h.call(t);if(a(l,t))return"";var r=m?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),i=r("e8b5"),a=r("23cb"),c=r("50c4"),s=r("fc6a"),u=r("8418"),f=r("b622"),l=r("1dde"),d=l("slice"),p=f("species"),h=[].slice,m=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var r,n,f,l=s(this),d=c(l.length),b=a(t,d),v=a(void 0===e?d:e,d);if(i(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[p],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(l,b,v);for(n=new(void 0===r?Array:r)(m(v-b,0)),f=0;b<v;b++,f++)b in l&&u(n,f,l[b]);return n.length=f,n}})},fcd9:function(t,e,r){"use strict";r("9c8a")}}]);
//# sourceMappingURL=chunk-6c6aa230.05fb97a2.js.map