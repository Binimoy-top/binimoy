(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{109:function(t,e,o){"use strict";o.r(e);var n={},r=(o(298),o(6)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"drawer-toggle",attrs:{role:"button"},on:{click:function(e){return t.$emit("toggle")}}},[o("div",{staticClass:"bar"}),t._v(" "),o("div",{staticClass:"bar"}),t._v(" "),o("div",{staticClass:"bar"})])}),[],!1,null,"96a14cc8",null);e.default=component.exports},112:function(t,e,o){"use strict";o.r(e);var n={name:"TheHeader",components:{TheSideNavToggle:o(109).default},methods:{OnLogout:function(){console.log(localStorage.clear()),localStorage.clear(),this.$router.push("/")}}},r=(o(300),o(6)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header-container"},[o("header",{staticClass:"the-header"},[o("TheSideNavToggle",{on:{toggle:function(e){return t.$emit("sidenavToggle")}}}),t._v(" "),o("div",{staticClass:"logo"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Binimoy")])],1),t._v(" "),o("div",{staticClass:"spacer"}),t._v(" "),o("div",{staticClass:"navigation-items"},[o("div",{staticClass:"dropdown"},[o("span",[o("nuxt-link",{attrs:{to:"/binimoy-admin"}},[t._v("Admin")])],1),t._v(" "),o("div",{staticClass:"dropdown-content"},[o("button",{staticClass:"btn-hover",on:{click:t.OnLogout}},[t._v("Logout")])])]),t._v(" "),t._m(0)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"nav-list"},[e("li",{staticClass:"nav-item"})])}],!1,null,"1e8e601c",null);e.default=component.exports},113:function(t,e,o){"use strict";o.r(e);var n={name:"TheSidenav",props:{show:{type:Boolean,default:!1}},methods:{OnLogout:function(){console.log(localStorage.clear()),localStorage.clear(),this.$router.push("/")}}},r=(o(302),o(6)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sidenav-container"},[t.show?o("div",{staticClass:"sidenav-backdrop",on:{click:function(e){return t.$emit("close")}}}):t._e(),t._v(" "),o("transition",{attrs:{name:"slide-side"}},[t.show?o("div",{staticClass:"sidenav"},[o("ul",{staticClass:"nav-list",on:{click:function(e){return t.$emit("close")}}},[o("li",{staticClass:"nav-item"},[o("nuxt-link",{attrs:{to:"/binimoy-posts"}},[t._v("Blog")])],1),t._v(" "),o("li",{staticClass:"nav-item"},[o("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),o("li",{staticClass:"nav-item"},[o("nuxt-link",{attrs:{to:"/binimoy-admin"}},[t._v("Admin")])],1),t._v(" "),o("li",{staticClass:"nav-item"},[o("button",{staticClass:"btn-hover",on:{click:t.OnLogout}},[t._v("Logout")])])])]):t._e()])],1)}),[],!1,null,"3b7cdc3d",null);e.default=component.exports},143:function(t,e,o){"use strict";var n=o(1),r={name:"PostList",components:{Postprev:o(209).default},props:{isAdmin:{type:Boolean,default:!1},posts:{type:Array,required:!0}}},c=(o(341),o(6)),d=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"posts-list"},t._l(t.posts,(function(e){return o("Postprev",{key:e.id,attrs:{title:e.title,PreviewText:e.PreviewText,id:e.id,postAuthor:e.author,"is-admin":t.isAdmin,postDate:e.updatedDate}})})),1)}),[],!1,null,"c0d7423c",null).exports,l=o(144);n.a.component("PostList",d),n.a.component("AppButton",l.default)},144:function(t,e,o){"use strict";o.r(e);var n={name:"AppButton",props:{btnStyle:{type:String,default:""}}},r=(o(343),o(6)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._g(t._b({staticClass:"button",class:t.btnStyle},"button",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,"5e3a1e16",null);e.default=component.exports},185:function(t,e,o){var content=o(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("2edcb286",content,!0,{sourceMap:!1})},187:function(t,e,o){var content=o(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("938f3782",content,!0,{sourceMap:!1})},188:function(t,e,o){var content=o(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("7eaec706",content,!0,{sourceMap:!1})},189:function(t,e,o){var content=o(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("4772852e",content,!0,{sourceMap:!1})},190:function(t,e,o){var content=o(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("b7fbe4f8",content,!0,{sourceMap:!1})},191:function(t,e,o){var content=o(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("3c2bff52",content,!0,{sourceMap:!1})},192:function(t,e,o){var content=o(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("6837ef42",content,!0,{sourceMap:!1})},193:function(t,e,o){var content=o(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("20d1e788",content,!0,{sourceMap:!1})},194:function(t,e,o){var content=o(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("0eb00856",content,!0,{sourceMap:!1})},195:function(t,e,o){var content=o(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("56b15182",content,!0,{sourceMap:!1})},206:function(t,e,o){var content=o(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("7cdcdb5a",content,!0,{sourceMap:!1})},207:function(t,e,o){var content=o(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("718f688d",content,!0,{sourceMap:!1})},208:function(t,e,o){var content=o(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("2385f9ca",content,!0,{sourceMap:!1})},209:function(t,e,o){"use strict";o.r(e);o(222);var n={name:"Postprev",props:{id:{type:String,required:!0},isAdmin:{type:Boolean,required:!0},title:{type:String,required:!0},postAuthor:{type:String,required:!0},postDate:{type:String,required:!0},PreviewText:{type:String,required:!0}},computed:{postLink:function(){return this.isAdmin?"/binimoy-admin/"+this.id:"/binimoy-posts/"+this.id}}},r=(o(338),o(6)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Nuxt-link",{staticClass:"post-preview",attrs:{to:t.postLink}},[o("article",[o("div",{staticClass:"post-thumbnail"},[o("h1",[t._v(t._s(t.title)+" ")])]),t._v(" "),o("p",{staticClass:"wr-style"},[o("b",[t._v(t._s(t._f("date")(t.postDate)))])]),t._v(" "),o("p",{staticClass:"wr-style"},[t._v(" by "+t._s(t.postAuthor))]),t._v(" "),o("div",{staticClass:"post-content"},[o("p",[t._v(t._s(t.PreviewText))])])])])}),[],!1,null,"8695afa6",null);e.default=component.exports},216:function(t,e,o){"use strict";var n={},r=(o(296),o(6)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container"},[o("div",{staticClass:"tab0"},[o("nuxt-link",{attrs:{to:"/"}},[t._v(" Home")])],1),t._v(" "),o("div",{staticClass:"tab1"}),t._v("\n    asdsa\n    ")]),t._v(" "),o("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},217:function(t,e,o){"use strict";var n=o(112),r=o(113),c={middleware:"log",components:{TheHeaderAdmin:n.default,TheSidenav_admin:r.default},data:function(){return{displaySidenav:!1}}},d=(o(304),o(6)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("TheHeaderAdmin",{on:{sidenavToggle:function(e){t.displaySidenav=!t.displaySidenav}}}),t._v(" "),o("TheSidenav_admin",{attrs:{show:t.displaySidenav},on:{close:function(e){t.displaySidenav=!1}}}),t._v(" "),o("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},218:function(t,e,o){"use strict";var n=o(112),r=o(113),c={middleware:"log",components:{TheHeaderAdmin:n.default,TheSidenav_admin:r.default},data:function(){return{displaySidenav:!1}}},d=(o(306),o(6)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("TheHeaderAdmin",{on:{sidenavToggle:function(e){t.displaySidenav=!t.displaySidenav}}}),t._v(" "),o("TheSidenav_admin",{attrs:{show:t.displaySidenav},on:{close:function(e){t.displaySidenav=!1}}}),t._v(" "),o("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},219:function(t,e,o){"use strict";var n=o(220),r=o(221),c={middleware:"log",components:{TheHeader:n.default,TheSidenav:r.default},data:function(){return{displaySidenav:!1}}},d=(o(312),o(6)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("TheHeader",{on:{sidenavToggle:function(e){t.displaySidenav=!t.displaySidenav}}}),t._v(" "),o("TheSidenav",{attrs:{show:t.displaySidenav},on:{close:function(e){t.displaySidenav=!1}}}),t._v(" "),o("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},220:function(t,e,o){"use strict";o.r(e);var n={name:"TheHeader",components:{TheSideNavToggle:o(109).default}},r=(o(308),o(6)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header-container"},[o("header",{staticClass:"the-header"},[o("TheSideNavToggle",{on:{toggle:function(e){return t.$emit("sidenavToggle")}}}),t._v(" "),o("div",{staticClass:"logo"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Binimoy")])],1),t._v(" "),o("div",{staticClass:"spacer"}),t._v(" "),o("div",{staticClass:"navigation-items"},[o("ul",{staticClass:"nav-list"},[o("li",{staticClass:"nav-item"},[o("nuxt-link",{attrs:{to:"/binimoy-posts/"}},[t._v("Blogs")])],1),t._v(" "),o("li",{staticClass:"nav-item"}),t._v(" "),o("li",{staticClass:"nav-item"}),t._v(" "),o("li",{staticClass:"nav-item"},[o("div",{staticClass:"dropdown"},[o("button",{staticClass:"dropbtn",staticStyle:{"padding-right":"40px"}},[t._v("Login")]),t._v(" "),o("div",{staticClass:"dropdown-content"},[o("nuxt-link",{attrs:{to:"/auth/user-login"}},[t._v("Login")]),t._v(" "),o("nuxt-link",{attrs:{to:"/auth/user-signup"}},[t._v("Registration")]),t._v(" "),o("nuxt-link",{attrs:{to:"/binimoy-admin"}},[t._v("Admin")])],1)])])])])],1)])}),[],!1,null,"56063c31",null);e.default=component.exports},221:function(t,e,o){"use strict";o.r(e);var n={name:"TheSidenav",props:{show:{type:Boolean,default:!1}},methods:{OnLogout:function(){console.log(localStorage.clear()),localStorage.clear(),this.$router.push("/")}}},r=(o(310),o(6)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sidenav-container"},[t.show?o("div",{staticClass:"sidenav-backdrop",on:{click:function(e){return t.$emit("close")}}}):t._e(),t._v(" "),o("transition",{attrs:{name:"slide-side"}},[t.show?o("div",{staticClass:"sidenav"},[o("ul",{staticClass:"nav-list",on:{click:function(e){return t.$emit("close")}}},[o("li",{staticClass:"nav-item"},[o("nuxt-link",{attrs:{to:"/binimoy-posts"}},[t._v("Blog")])],1),t._v(" "),o("li",{staticClass:"nav-item"},[o("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),o("li",{staticClass:"nav-item"},[o("nuxt-link",{attrs:{to:"/binimoy-admin"}},[t._v("Admin")])],1),t._v(" "),o("li",{staticClass:"nav-item"})])]):t._e()])],1)}),[],!1,null,"41912ec4",null);e.default=component.exports},222:function(t,e,o){"use strict";o(38),o(12);var n=o(1),r=["January","February","March","April","May","June","July","August","September","October","November","December"];n.a.filter("date",(function(t){return e=new Date(t),o=e.getFullYear(),n=e.getMonth(),e.getDate()+" "+r[n]+", "+o;var e,o,n}))},224:function(t,e,o){o(225),t.exports=o(226)},266:function(t,e,o){"use strict";o.r(e),e.default=function(t){t.store.getters.isAuthenticated||(console.log(t),t.redirect("/admin/auth"))}},267:function(t,e,o){"use strict";o.r(e),e.default=function(t){window.localStorage.getItem("token")||t.redirect("/auth/login")}},268:function(t,e,o){"use strict";o.r(e),e.default=function(t){t.store.dispatch("initauth",t.req),console.log("check auth middleware"+t)}},269:function(t,e,o){"use strict";o.r(e),e.default=function(t){console.log("middleware is active!")}},290:function(t,e,o){"use strict";o(185)},291:function(t,e,o){var n=o(17)(!1);n.push([t.i,".error-page[data-v-629329f6]{text-align:center}.error-page a[data-v-629329f6]{text-decoration:none;color:red}.error-page a[data-v-629329f6]:active,.error-page a[data-v-629329f6]:hover{color:salmon}",""]),t.exports=n},294:function(t,e,o){var content=o(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("f52d43e0",content,!0,{sourceMap:!1})},295:function(t,e,o){var n=o(17)(!1);n.push([t.i,".csstest{background-color:#00f;color:#fff}.active{background-color:brown}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}",""]),t.exports=n},296:function(t,e,o){"use strict";o(187)},297:function(t,e,o){var n=o(17)(!1);n.push([t.i,'html{font-family:"Open Sans",sans-serif}body{margin:0;padding:0}.container{height:60px;background-color:#44494d;position:fixed;width:100%;display:flex;justify-content:space-around;align-items:center}.container a{text-decoration:none;color:#fff}.tab0{padding-left:5px}.tab1{flex:1}.tabs{margin-right:10px}',""]),t.exports=n},298:function(t,e,o){"use strict";o(188)},299:function(t,e,o){var n=o(17)(!1);n.push([t.i,".drawer-toggle[data-v-96a14cc8]{display:flex;flex-direction:column;justify-content:space-around;height:50%;width:35px;cursor:pointer}@media (min-width:768px){.drawer-toggle[data-v-96a14cc8]{display:none}}.drawer-toggle .bar[data-v-96a14cc8]{width:90%;height:3.5px;border-radius:25%;background-color:#777}",""]),t.exports=n},300:function(t,e,o){"use strict";o(189)},301:function(t,e,o){var n=o(17)(!1);n.push([t.i,".header-container[data-v-1e8e601c]{height:60px}.the-header[data-v-1e8e601c]{width:100%;position:fixed;height:60px;display:flex;justify-content:space-around;align-items:center;background-color:#ef8341;z-index:100;box-sizing:border-box;padding:0 20px}.logo[data-v-1e8e601c]{margin:0 10px;font-size:1.3rem}.logo a[data-v-1e8e601c]{text-decoration:none;color:#fff}.spacer[data-v-1e8e601c]{flex:1}.navigation-items[data-v-1e8e601c]{display:none}@media (min-width:768px){.navigation-items[data-v-1e8e601c]{display:block}}.nav-list[data-v-1e8e601c]{list-style:none;padding:0;margin:0;display:flex}.nav-item[data-v-1e8e601c]{margin:0 10px}.nav-item a[data-v-1e8e601c]{text-decoration:none;color:#fff}.nav-item a.nuxt-link-active[data-v-1e8e601c],.nav-item a[data-v-1e8e601c]:active,.nav-item a[data-v-1e8e601c]:hover{color:#000}.dropdown[data-v-1e8e601c]{position:relative;display:inline-block}.dropdown a[data-v-1e8e601c]{color:#000;border:1px solid;text-decoration:none;background-color:#fff}.dropdown-content[data-v-1e8e601c]{display:none;position:absolute;background-color:#f9f9f9;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}.dropdown:hover .dropdown-content[data-v-1e8e601c]{display:block;background-color:green}.button[data-v-1e8e601c]{background-color:#e94528;border:none;color:#fff;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px}.btn-hover[data-v-1e8e601c]:hover{background-color:green}",""]),t.exports=n},302:function(t,e,o){"use strict";o(190)},303:function(t,e,o){var n=o(17)(!1);n.push([t.i,".sidenav-container[data-v-3b7cdc3d]{height:100%;width:100%}.sidenav-backdrop[data-v-3b7cdc3d]{width:100%;background-color:rgba(0,0,0,.7);z-index:1000}.sidenav[data-v-3b7cdc3d],.sidenav-backdrop[data-v-3b7cdc3d]{height:100%;position:fixed;top:0;left:0}.sidenav[data-v-3b7cdc3d]{width:300px;background-color:#fff;z-index:10000;box-sizing:border-box;padding:30px}.slide-side-enter-active[data-v-3b7cdc3d],.slide-side-leave-active[data-v-3b7cdc3d]{transition:all .3s ease-out}.slide-side-enter[data-v-3b7cdc3d],.slide-side-leave-to[data-v-3b7cdc3d]{transform:translateX(-100%)}.nav-list[data-v-3b7cdc3d]{list-style:none;padding:0;margin:0}.nav-item[data-v-3b7cdc3d]{margin:20px 0}.nav-item a[data-v-3b7cdc3d]{text-decoration:none;color:#000;font-size:1.5rem}.nav-item a[data-v-3b7cdc3d]:active,.nav-item a[data-v-3b7cdc3d]:hover{color:red}.dropdown[data-v-3b7cdc3d]{position:relative;display:inline-block}.dropdown a[data-v-3b7cdc3d]{color:#000;border:1px solid;text-decoration:none;background-color:#fff}.dropdown-content[data-v-3b7cdc3d]{display:none;position:absolute;background-color:#f9f9f9;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}.dropdown:hover .dropdown-content[data-v-3b7cdc3d]{display:block;background-color:green}.button[data-v-3b7cdc3d]{background-color:#e94528;border:none;color:#fff;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px}.btn-hover[data-v-3b7cdc3d]:hover{background-color:green}",""]),t.exports=n},304:function(t,e,o){"use strict";o(191)},305:function(t,e,o){var n=o(17)(!1);n.push([t.i,'html{font-family:"Open Sans",sans-serif}body{margin:0}',""]),t.exports=n},306:function(t,e,o){"use strict";o(192)},307:function(t,e,o){var n=o(17)(!1);n.push([t.i,'html{font-family:"Open Sans",sans-serif}body{margin:0}',""]),t.exports=n},308:function(t,e,o){"use strict";o(193)},309:function(t,e,o){var n=o(17)(!1);n.push([t.i,".dropbtn[data-v-56063c31]{background-color:#ef8341;font-size:16px;border:none}.dropdown[data-v-56063c31]{position:relative;display:inline-block}.dropdown-content[data-v-56063c31]{margin-right:100px;display:none;position:absolute;background-color:#ef8341;min-width:160px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}.dropdown-content a[data-v-56063c31]{color:#000;padding:12px 16px;text-decoration:none;display:block}.dropdown-content a[data-v-56063c31]:hover{background-color:#ddd}.dropdown:hover .dropdown-content[data-v-56063c31]{display:block}.dropdown:hover .dropbtn[data-v-56063c31]{background-color:#614242;border-radius:60px}.header-container[data-v-56063c31]{height:60px}.the-header[data-v-56063c31]{width:100%;position:fixed;height:60px;display:flex;justify-content:space-around;align-items:center;background-color:#ef8341;z-index:100;box-sizing:border-box;padding:0 20px}.logo[data-v-56063c31]{margin:0 10px;font-size:1.3rem}.logo a[data-v-56063c31]{text-decoration:none;color:#fff}.spacer[data-v-56063c31]{flex:1}.navigation-items[data-v-56063c31]{display:none}@media (min-width:768px){.navigation-items[data-v-56063c31]{display:block}}.nav-list[data-v-56063c31]{list-style:none;padding:0;margin:0;display:flex}.nav-item[data-v-56063c31]{margin:0 10px}.nav-item a[data-v-56063c31]{text-decoration:none;color:#fff}.nav-item a.nuxt-link-active[data-v-56063c31],.nav-item a[data-v-56063c31]:active,.nav-item a[data-v-56063c31]:hover{color:#000}",""]),t.exports=n},310:function(t,e,o){"use strict";o(194)},311:function(t,e,o){var n=o(17)(!1);n.push([t.i,".sidenav-container[data-v-41912ec4]{height:100%;width:100%}.sidenav-backdrop[data-v-41912ec4]{width:100%;background-color:rgba(0,0,0,.7);z-index:1000}.sidenav[data-v-41912ec4],.sidenav-backdrop[data-v-41912ec4]{height:100%;position:fixed;top:0;left:0}.sidenav[data-v-41912ec4]{width:300px;background-color:#fff;z-index:10000;box-sizing:border-box;padding:30px}.slide-side-enter-active[data-v-41912ec4],.slide-side-leave-active[data-v-41912ec4]{transition:all .3s ease-out}.slide-side-enter[data-v-41912ec4],.slide-side-leave-to[data-v-41912ec4]{transform:translateX(-100%)}.nav-list[data-v-41912ec4]{list-style:none;padding:0;margin:0}.nav-item[data-v-41912ec4]{margin:20px 0}.nav-item a[data-v-41912ec4]{text-decoration:none;color:#000;font-size:1.5rem}.nav-item a[data-v-41912ec4]:active,.nav-item a[data-v-41912ec4]:hover{color:red}.dropdown[data-v-41912ec4]{position:relative;display:inline-block}.dropdown a[data-v-41912ec4]{color:#000;border:1px solid;text-decoration:none;background-color:#fff}.dropdown-content[data-v-41912ec4]{display:none;position:absolute;background-color:#f9f9f9;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}.dropdown:hover .dropdown-content[data-v-41912ec4]{display:block;background-color:green}.button[data-v-41912ec4]{background-color:#e94528;border:none;color:#fff;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px}.btn-hover[data-v-41912ec4]:hover{background-color:green}",""]),t.exports=n},312:function(t,e,o){"use strict";o(195)},313:function(t,e,o){var n=o(17)(!1);n.push([t.i,'html{font-family:"Open Sans",sans-serif}body{margin:0}',""]),t.exports=n},314:function(t,e,o){"use strict";o.r(e);o(40),o(32),o(38),o(57),o(37),o(58);var n=o(24),r=(o(315),o(30),o(71),o(196),o(12),o(31),o(184),o(136),o(316),o(56)),c=o(33),d=o.n(c),l=o(141),v=o.n(l);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.default=function(){return new r.a.Store({state:{loadedPosts:[],token:null},mutations:{setPosts:function(t,e){t.loadedPosts=e},addpost:function(t,e){t.loadedPosts.push(e)},editpost:function(t,e){var o=t.loadedPosts.findIndex((function(t){return t.id===e.id}));t.loadedPosts[o]=e},setToken:function(t,e){t.token=e},clearToken:function(t){t.token=null}},actions:{nuxtServerInit:function(t,e){return console.log("servers side rendering"),d.a.get("https://binimoy-afc76-default-rtdb.firebaseio.com/posts.json").then((function(e){var o=[];for(var n in e.data)o.push(h(h({},e.data[n]),{},{id:n}));t.commit("setPosts",o)})).catch((function(t){return e.error(t)}))},addpost:function(t,e){var o=h(h({},e),{},{updatedDate:new Date});return d.a.post("https://nuxt-blogs-c16de-default-rtdb.firebaseio.com/posts.json?auth="+t.state.token,o).then((function(e){t.commit("addpost",h(h({},o),{},{id:e.data.name}))})).catch((function(t){return console.log(t)}))},editpost:function(t,e){return d.a.put("https://nuxt-blogs-c16de-default-rtdb.firebaseio.com/posts/"+e.id+".json?auth="+t.state.token,e).then((function(o){t.commit("editpost",e)})).catch((function(t){return console.log(t)}))},setPosts:function(t,e){t.commit("setPosts",e)},authenticateUser:function(t,e){var o="";return e.isLogin?(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB1_X-UfcXltB7iKq4nffszeiT0Vv1xkhM",console.log("login is loading")):o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB1_X-UfcXltB7iKq4nffszeiT0Vv1xkhM",d.a.post(o,{email:e.email,password:e.password,returnSecureToken:!0}).then((function(e){t.commit("setToken",e.data.idToken),localStorage.setItem("token",e.data.idToken),t.dispatch("setLogoutTimer",1e3*e.data.expiresIn),localStorage.setItem("tokenExpiration",(new Date).getTime()+1e3*e.data.expiresIn);var o=(new Date).getTime();console.log(o),v.a.set("jwt",e.data.idToken),v.a.set("expirationDate",(new Date).getTime()+1e3*e.data.expiresIn),console.log(e)})).catch((function(t){return console.log(t)}))},setLogoutTimer:function(t,e){setTimeout((function(){t.commit("clearToken")}),e)},initauth:function(t,e){var o,n;if(e){if(!e.headers.cookie)return;var r=e.headers.cookie.split(";").find((function(t){return t.trim().startsWith("jwt=")}));if(!r)return;o=r.split("=")[1],n=e.headers.cookie.split(";").find((function(t){return t.trim().startsWith("expirationDate=")})).split("=")[1]}else{var c=localStorage.getItem("token"),d=localStorage.getItem("tokenExpiration");if((new Date).getTime()>+d||!c)return}t.dispatch("setLogoutTimer",+n-(new Date).getTime()),t.commit("setToken",o)}},getters:{loadedPosts:function(t){return t.loadedPosts},isAuthenticated:function(t){return null!=t.token}}})}},338:function(t,e,o){"use strict";o(206)},339:function(t,e,o){var n=o(17),r=o(223),c=o(340),d=n(!1),l=r(c);d.push([t.i,".post-preview[data-v-8695afa6]{border:1px solid #ccc;box-shadow:0 2px 2px #ccc;background-color:#fff;width:90%;color:#585858;margin:0 10px}a[data-v-8695afa6]{text-decoration:none;color:#000}@media (min-width:850px){.post-preview[data-v-8695afa6]{width:400px;margin:10px}}.post-thumbnail[data-v-8695afa6],.wr-style[data-v-8695afa6]{text-align:center}.post-thumbnail[data-v-8695afa6]{background-image:url("+l+");background-repeat:no-repeat;background-size:300px 100px;width:100%;height:200px;background-position:50%}.post-content[data-v-8695afa6]{padding:10px;text-align:center}a:active .post-content[data-v-8695afa6],a:hover .post-content[data-v-8695afa6]{background-color:#ccc}",""]),t.exports=d},340:function(t,e,o){t.exports=o.p+"img/Blog_pic.c535b20.png"},341:function(t,e,o){"use strict";o(207)},342:function(t,e,o){var n=o(17)(!1);n.push([t.i,".posts-list[data-v-c0d7423c]{display:flex;padding:20px;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center}",""]),t.exports=n},343:function(t,e,o){"use strict";o(208)},344:function(t,e,o){var n=o(17)(!1);n.push([t.i,".button[data-v-5e3a1e16]{font:inherit;background-color:#000;color:#fff;padding:5px;cursor:pointer;border:1px solid #000}.button[data-v-5e3a1e16]:active,.button[data-v-5e3a1e16]:hover{background-color:#333;border:1px solid #000}.inverted[data-v-5e3a1e16]{color:#000}.inverted[data-v-5e3a1e16],.inverted[data-v-5e3a1e16]:active,.inverted[data-v-5e3a1e16]:hover{background-color:#fff;border:1px solid transparent}.inverted[data-v-5e3a1e16]:active,.inverted[data-v-5e3a1e16]:hover{color:#ccc}.cancel[data-v-5e3a1e16]{background-color:red}.cancel[data-v-5e3a1e16],.cancel[data-v-5e3a1e16]:active,.cancel[data-v-5e3a1e16]:hover{color:#fff;border:1px solid transparent}.cancel[data-v-5e3a1e16]:active,.cancel[data-v-5e3a1e16]:hover{background-color:salmon}",""]),t.exports=n},45:function(t,e,o){"use strict";o(290);var n=o(6),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"error-page"},[o("h1",[t._v("Oops, something went wrong!")]),t._v(" "),o("p",[t._v("Back to "),o("a",{attrs:{href:"/"}},[t._v("safety")]),t._v("!")])])}],!1,null,"629329f6",null);e.a=component.exports}},[[224,34,2,35]]]);