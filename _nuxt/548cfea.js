(window.webpackJsonp=window.webpackJsonp||[]).push([[21,3,13],{337:function(t,e,o){var content=o(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("df5ca094",content,!0,{sourceMap:!1})},338:function(t,e,o){"use strict";o(337)},339:function(t,e,o){var n=o(20)(!1);n.push([t.i,".input-control[data-v-4404c1a2]{margin:10px 0}.input-control label[data-v-4404c1a2]{display:block;font-weight:700}.input-control input[data-v-4404c1a2],.input-control textarea[data-v-4404c1a2]{display:block;width:100%;box-sizing:border-box;font:inherit;border:1px solid #ccc;padding:5px}.input-control input[data-v-4404c1a2]:focus,.input-control textarea[data-v-4404c1a2]:focus{background-color:#eee;outline:none}",""]),t.exports=n},340:function(t,e,o){"use strict";o.r(e);var n={name:"AppInputControl",props:{controlType:{type:String,default:"input"},value:{type:String,default:""}}},r=(o(338),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"input-control"},[o("label",[t._t("default")],2),t._v(" "),"input"===t.controlType?o("input",t._b({domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)):t._e(),t._v(" "),"textarea"===t.controlType?o("textarea",{attrs:{rows:"10"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}):t._e()])}),[],!1,null,"4404c1a2",null);e.default=component.exports},341:function(t,e,o){"use strict";o.r(e);o(40),o(32),o(39),o(13),o(57),o(37),o(58);var n=o(24),r=o(340),c=o(142);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"AdminPostForm",components:{AppControlInput:r.default,AppButton:c.default},props:{post:{type:Object,required:!1}},data:function(){return{editedpost:this.post?d({},this.post):{author:"",title:"",content:"",PreviewText:""}}},methods:{OnSave:function(){this.$emit("submit",this.editedpost)},onCancel:function(){this.$router.push("/admin")}}},v=o(8),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:function(e){return e.preventDefault(),t.OnSave.apply(null,arguments)}}},[o("AppControlInput",{model:{value:t.editedpost.author,callback:function(e){t.$set(t.editedpost,"author",e)},expression:"editedpost.author"}},[t._v("Author Name")]),t._v(" "),o("AppControlInput",{model:{value:t.editedpost.title,callback:function(e){t.$set(t.editedpost,"title",e)},expression:"editedpost.title"}},[t._v("Title")]),t._v(" "),o("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedpost.PreviewText,callback:function(e){t.$set(t.editedpost,"PreviewText",e)},expression:"editedpost.PreviewText"}},[t._v("previewText")]),t._v(" "),o("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedpost.content,callback:function(e){t.$set(t.editedpost,"content",e)},expression:"editedpost.content"}},[t._v("Content")]),t._v(" "),o("AppButton",{attrs:{type:"submit"}},[t._v("Save")]),t._v(" "),o("AppButton",{staticStyle:{"margin-left":"10px"},attrs:{type:"button","btn-style":"cancel"},on:{click:t.onCancel}},[t._v("Cancel")])],1)}),[],!1,null,null,null);e.default=component.exports},376:function(t,e,o){var content=o(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("13d3b51e",content,!0,{sourceMap:!1})},424:function(t,e,o){"use strict";o(376)},425:function(t,e,o){var n=o(20)(!1);n.push([t.i,".update-form[data-v-30565082]{width:90%;margin:20px auto}@media (min-width:780px){.update-form[data-v-30565082]{width:500px}}",""]),t.exports=n},453:function(t,e,o){"use strict";o.r(e);o(40),o(32),o(39),o(13),o(57),o(37),o(58);var n=o(24),r=o(341),c=o(33),l=o.n(c);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={layout:"admin",components:{AdminPostForm:r.default},asyncData:function(t){return l.a.get("https://binimoy-afc76-default-rtdb.firebaseio.com/posts/"+t.params.id+".json").then((function(e){return{loadedPosts:f(f({},e.data),{},{id:t.params.id})}})).catch((function(e){return t.error(e)}))},methods:{},created:function(){console.log(this.$route.params.postid),console.log(this.loadedPosts)}},m=(o(424),o(8)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"admin-post-page"},[o("section",{staticClass:"update-form"},[o("AdminPostForm",{attrs:{post:t.loadedPosts},on:{submit:t.Onsubmitted}})],1)])}),[],!1,null,"30565082",null);e.default=component.exports;installComponents(component,{AdminPostForm:o(341).default})}}]);