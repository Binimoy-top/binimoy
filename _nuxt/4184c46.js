(window.webpackJsonp=window.webpackJsonp||[]).push([[21,3,13],{341:function(t,e,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("df5ca094",content,!0,{sourceMap:!1})},342:function(t,e,n){"use strict";n(341)},343:function(t,e,n){var o=n(17)(!1);o.push([t.i,".input-control[data-v-4404c1a2]{margin:10px 0}.input-control label[data-v-4404c1a2]{display:block;font-weight:700}.input-control input[data-v-4404c1a2],.input-control textarea[data-v-4404c1a2]{display:block;width:100%;box-sizing:border-box;font:inherit;border:1px solid #ccc;padding:5px}.input-control input[data-v-4404c1a2]:focus,.input-control textarea[data-v-4404c1a2]:focus{background-color:#eee;outline:none}",""]),t.exports=o},344:function(t,e,n){"use strict";n.r(e);var o={name:"AppInputControl",props:{controlType:{type:String,default:"input"},value:{type:String,default:""}}},r=(n(342),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-control"},[n("label",[t._t("default")],2),t._v(" "),"input"===t.controlType?n("input",t._b({domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)):t._e(),t._v(" "),"textarea"===t.controlType?n("textarea",{attrs:{rows:"10"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}):t._e()])}),[],!1,null,"4404c1a2",null);e.default=component.exports},345:function(t,e,n){"use strict";n.r(e);n(40),n(32),n(39),n(13),n(57),n(37),n(58);var o=n(24),r=n(344),c=n(142);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"AdminPostForm",components:{AppControlInput:r.default,AppButton:c.default},props:{post:{type:Object,required:!1}},data:function(){return{editedpost:this.post?d({},this.post):{author:"",title:"",content:"",PreviewText:""}}},methods:{OnSave:function(){this.$emit("submit",this.editedpost)},onCancel:function(){this.$router.push("/binimoy-admin")}}},m=n(8),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.OnSave.apply(null,arguments)}}},[n("AppControlInput",{model:{value:t.editedpost.author,callback:function(e){t.$set(t.editedpost,"author",e)},expression:"editedpost.author"}},[t._v("Author Name")]),t._v(" "),n("AppControlInput",{model:{value:t.editedpost.title,callback:function(e){t.$set(t.editedpost,"title",e)},expression:"editedpost.title"}},[t._v("Title")]),t._v(" "),n("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedpost.PreviewText,callback:function(e){t.$set(t.editedpost,"PreviewText",e)},expression:"editedpost.PreviewText"}},[t._v("previewText")]),t._v(" "),n("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedpost.content,callback:function(e){t.$set(t.editedpost,"content",e)},expression:"editedpost.content"}},[t._v("Content")]),t._v(" "),n("AppButton",{attrs:{type:"submit"}},[t._v("Save")]),t._v(" "),n("AppButton",{staticStyle:{"margin-left":"10px"},attrs:{type:"button","btn-style":"cancel"},on:{click:t.onCancel}},[t._v("Cancel")]),t._v(" "),n("AppButton",{staticStyle:{"margin-left":"10px"},attrs:{type:"button","btn-style":"cancel"},on:{click:function(e){return t.$emit("del")}}},[t._v("Delete")])],1)}),[],!1,null,null,null);e.default=component.exports},380:function(t,e,n){var content=n(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("4eadd98f",content,!0,{sourceMap:!1})},428:function(t,e,n){"use strict";n(380)},429:function(t,e,n){var o=n(17)(!1);o.push([t.i,".update-form[data-v-eb11ecb8]{width:90%;margin:20px auto}@media (min-width:780px){.update-form[data-v-eb11ecb8]{width:500px}}",""]),t.exports=o},457:function(t,e,n){"use strict";n.r(e);n(40),n(32),n(39),n(13),n(57),n(37),n(58);var o=n(24),r=n(345),c=n(33),l=n.n(c);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={layout:"binimoy_layout",components:{AdminPostForm:r.default},asyncData:function(t){return l.a.get("https://binimoy-afc76-default-rtdb.firebaseio.com/posts/"+t.params.id+".json").then((function(e){return{loadedPosts:f(f({},e.data),{},{id:t.params.id})}})).catch((function(e){return t.error(e)}))},methods:{Onsubmitted:function(t){var e=this;l.a.put("https://binimoy-afc76-default-rtdb.firebaseio.com/posts/"+this.$route.params.postid+".json",t).then((function(t){e.$router.push("/binimoy-admin")})).catch((function(t){return console.log(t)})),console.log(t)},onDelete:function(){var t=this;return l.a.delete("https://binimoy-afc76-default-rtdb.firebaseio.com/posts/"+this.$route.params.id+".json").then((function(e){alert("deleted!"),t.$router.push("/binimoy-admin")})).catch((function(t){return context.error(t)}))}},created:function(){console.log(this.$route.params.postid),console.log(this.loadedPosts)}},v=(n(428),n(8)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin-post-page"},[n("section",{staticClass:"update-form"},[n("AdminPostForm",{attrs:{post:t.loadedPosts},on:{submit:t.Onsubmitted,del:t.onDelete}})],1)])}),[],!1,null,"eb11ecb8",null);e.default=component.exports;installComponents(component,{AdminPostForm:n(345).default})}}]);