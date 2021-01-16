(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1668:function(a,t,e){"use strict";e.r(t);var r=e(0),s={data:function(){return{badge1:2,badge2:10}},methods:{increment:function(){this.badge1++,this.badge2++}}},n={components:{AvatarDefault:Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"Default","code-toggler":""}},[e("p",[a._v("Often you need to add an user's avatar to your app. In order to make this we have the component "),e("code",[a._v("vs-avatar")])]),a._v(" "),e("p",[a._v("To add an internal text value such as "),e("code",[a._v("Luis")]),a._v(" use the "),e("code",[a._v("text")]),a._v(" property")]),a._v(" "),e("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[e("span",[a._v("If the text has more than 5 letters, only the first letter will be shown as in the second avatar, the name is "),e("code",[a._v("Luis Daniel")]),a._v(" and only the letters LD will be shown if the word contains spaces the initial of each one is added.")])]),a._v(" "),e("div",{staticClass:"demo-alignment mt-5"},[e("vs-avatar"),a._v(" "),e("vs-avatar",{attrs:{text:"Luis Daniel"}}),a._v(" "),e("vs-avatar",{attrs:{text:"Luisd"}}),a._v(" "),e("vs-avatar",{attrs:{src:"https://i.imgur.com/ezM6SJ5.png"}})],1),a._v(" "),e("template",{slot:"codeContainer"},[a._v('\n<vs-avatar />\n<vs-avatar text="Luis Daniel"/>\n<vs-avatar text="Luisd"/>\n<vs-avatar src="https://i.imgur.com/ezM6SJ5.png"/>\n        ')])],2)}),[],!1,null,null,null).exports,AvatarSize:Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"size","code-toggler":""}},[e("p",[a._v("You can change the size of the Avatar with the property size the allowed values are:")]),a._v(" "),e("vx-list",{attrs:{list:["large","small","Custom measures"]}}),a._v(" "),e("vs-alert",{staticClass:"mb-1",attrs:{color:"primary",icon:"new_releases",active:"true"}},[e("span",[a._v("In the example the last avatar has the custom size of "),e("code",[a._v("70px")]),a._v(" the added value will be the avatar's "),e("strong",[a._v("height")]),a._v(" and "),e("strong",[a._v("width")])])]),a._v(" "),e("div",{staticClass:"demo-alignment mt-5"},[e("vs-avatar",{attrs:{size:"small"}}),a._v(" "),e("vs-avatar",{attrs:{text:"Luis Daniel"}}),a._v(" "),e("vs-avatar",{attrs:{size:"large",src:"https://i.imgur.com/ezM6SJ5.png"}}),a._v(" "),e("vs-avatar",{attrs:{size:"70px",src:"https://i.imgur.com/ezM6SJ5.png"}})],1),a._v(" "),e("template",{slot:"codeContainer"},[a._v('\n<vs-avatar size="small" />\n<vs-avatar text="Luis Daniel"/>\n<vs-avatar size="large" src="https://i.imgur.com/ezM6SJ5.png"/>\n<vs-avatar size="70px" src="https://i.imgur.com/ezM6SJ5.png"/>\n        ')])],2)}),[],!1,null,null,null).exports,AvatarColor:Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"Color","code-toggler":""}},[e("p",[a._v("You can change the Avatar's color by using the property "),e("code",[a._v("color")]),a._v(". If needed you could also change the text's color with the property "),e("code",[a._v("text-color")])]),a._v(" "),e("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[e("span",[a._v("If the text has more than 5 letters, only the first letter will be shown as in the second avatar, the name is "),e("code",[a._v("Luis Daniel")]),a._v(" and only the letters LD will be shown if the word contains spaces the initial of each one is added.")])]),a._v(" "),e("div",{staticClass:"demo-alignment mt-5"},[e("vs-avatar",{attrs:{color:"primary",text:"primary"}}),a._v(" "),e("vs-avatar",{attrs:{color:"success",text:"success"}}),a._v(" "),e("vs-avatar",{attrs:{color:"danger",text:"danger"}}),a._v(" "),e("vs-avatar",{attrs:{color:"warning",text:"warning"}}),a._v(" "),e("vs-avatar",{attrs:{color:"dark",text:"dark"}}),a._v(" "),e("vs-avatar",{attrs:{color:"rgb(200, 21, 129)",text:"RGB"}}),a._v(" "),e("vs-avatar",{attrs:{color:"#18cd5b",text:"HEX"}}),a._v(" "),e("vs-avatar",{attrs:{color:"#26302a","text-color":"rgb(246, 190, 16)",text:"HEX RGB"}})],1),a._v(" "),e("template",{slot:"codeContainer"},[a._v('\n<vs-avatar color="primary" text="primary"/>\n<vs-avatar color="success" text="success"/>\n<vs-avatar color="danger" text="danger"/>\n<vs-avatar color="warning" text="warning"/>\n<vs-avatar color="dark" text="dark"/>\n<vs-avatar color="rgb(200, 21, 129)" text="RGB"/>\n<vs-avatar color="#18cd5b" text="HEX"/>\n<vs-avatar color="#26302a" text-color="rgb(246, 190, 16)" text="HEX RGB"/>\n        ')])],2)}),[],!1,null,null,null).exports,AvatarWithBadge:Object(r.a)(s,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"With Badge","code-toggler":""}},[e("p",[a._v("You can add a notification label to the avatar, either a reference point or a number with the property "),e("code",[a._v("badge")])]),a._v(" "),e("p",[a._v("You could also change the badge's color by using the property "),e("code",[a._v("badge-color")]),a._v(". You are able to use the "),e("router-link",{attrs:{to:"/ui-elements/colors"}},[a._v("Main Colors")]),a._v(" or "),e("strong",[a._v("RGB")]),a._v(" and "),e("strong",[a._v("HEX")]),a._v(" colors.")],1),a._v(" "),e("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[e("span",[a._v("Only "),e("strong",[a._v("RGB")]),a._v(" and "),e("strong",[a._v("HEX")]),a._v(" colors are supported.")])]),a._v(" "),e("div",{staticClass:"demo-alignment mt-5"},[e("vs-avatar",{attrs:{badge:""}}),a._v(" "),e("vs-avatar",{attrs:{badge:a.badge1,text:"Luisdaniel"}}),a._v(" "),e("vs-avatar",{attrs:{"badge-color":"rgb(140, 23, 164)",badge:a.badge2,text:"Luisd"}}),a._v(" "),e("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:a.increment}},[a._v(" Increment Badge counter ")])],1),a._v(" "),e("template",{slot:"codeContainer"},[a._v('\n<template>\n  <vs-avatar badge />\n  <vs-avatar :badge="badge1" text="Luisdaniel" />\n  <vs-avatar badge-color="rgb(140, 23, 164)" :badge="badge2" text="Luisd" />\n  <vs-button color="primary" type="filled" @click="increment"> Increment Badge counter </vs-button>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    badge1: 2,\n    badge2: 10,\n  }),\n  methods: {\n    increment() {\n      this.badge1++\n      this.badge2++\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,AvatarIcon:Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"Icon","code-toggler":""}},[e("p",[a._v("You can change the main icon of the Avatar with the property "),e("code",[a._v("icon")])]),a._v(" "),e("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[e("p",[a._v("Vuesax uses the "),e("strong",[a._v("Google Material Icons")]),a._v(" font library by default. For a list of all available icons, visit the official "),e("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[a._v("Material Icons page")]),a._v(". Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.")]),a._v(" "),e("p",[a._v("This icon is only displayed when there is no property as "),e("code",[a._v("text")]),a._v(" or "),e("code",[a._v("src")])])]),a._v(" "),e("div",{staticClass:"demo-alignment mt-5"},[e("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-user"}}),a._v(" "),e("vs-avatar",{attrs:{color:"primary","icon-pack":"feather",icon:"icon-calendar"}}),a._v(" "),e("vs-avatar",{attrs:{color:"success","icon-pack":"feather",icon:"icon-inbox"}}),a._v(" "),e("vs-avatar",{attrs:{color:"danger","icon-pack":"feather",icon:"icon-camera"}}),a._v(" "),e("vs-avatar",{attrs:{color:"warning","icon-pack":"feather",icon:"icon-award"}}),a._v(" "),e("vs-avatar",{attrs:{color:"dark","icon-pack":"feather",icon:"icon-code"}})],1),a._v(" "),e("template",{slot:"codeContainer"},[a._v('\n<vs-avatar icon-pack="feather" icon="icon-user" />\n\n<vs-avatar color="primary" icon-pack="feather" icon="icon-calendar" />\n\n<vs-avatar color="success" icon-pack="feather" icon="icon-inbox" />\n\n<vs-avatar color="danger" icon-pack="feather" icon="icon-camera" />\n\n<vs-avatar color="warning" icon-pack="feather" icon="icon-award" />\n\n<vs-avatar color="dark" icon-pack="feather" icon="icon-code" />\n        ')])],2)}),[],!1,null,null,null).exports}},o=Object(r.a)(n,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{attrs:{id:"avatar-demo"}},[t("avatar-default"),this._v(" "),t("avatar-size"),this._v(" "),t("avatar-color"),this._v(" "),t("avatar-with-badge"),this._v(" "),t("avatar-icon")],1)}),[],!1,null,null,null);t.default=o.exports}}]);