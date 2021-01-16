(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1472:function(s,a){s.exports="/images/register.jpg?cfd9ef099bfc1f99c6f2970ae05a6a4a"},1473:function(s,a,t){"use strict";t(703)},1474:function(s,a,t){(s.exports=t(7)(!1)).push([s.i,".register-tabs-container{min-height:517px}[dir] .register-tabs-container .con-tab{padding-bottom:23px}",""])},1687:function(s,a,t){"use strict";t.r(a);var e={data:function(){return{displayName:"",email:"",password:"",confirm_password:"",isTermsConditionAccepted:!0}},computed:{validateForm:function(){return!this.errors.any()&&""!==this.displayName&&""!==this.email&&""!==this.password&&""!==this.confirm_password&&!0===this.isTermsConditionAccepted}},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},registerUserJWt:function(){if(this.validateForm&&this.checkLogin()){var s={userDetails:{displayName:this.displayName,email:this.email,password:this.password,confirmPassword:this.confirm_password},notify:this.$vs.notify};this.$store.dispatch("auth/registerUserJWT",s)}}}},i=t(0),r={components:{RegisterJwt:Object(i.a)(e,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"clearfix"},[t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_dash|min:3",expression:"'required|alpha_dash|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur","label-placeholder":"Name",name:"displayName",placeholder:"Name"},model:{value:s.displayName,callback:function(a){s.displayName=a},expression:"displayName"}}),s._v(" "),t("span",{staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("displayName")))]),s._v(" "),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",name:"email",type:"email","label-placeholder":"Email",placeholder:"Email"},model:{value:s.email,callback:function(a){s.email=a},expression:"email"}}),s._v(" "),t("span",{staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("email")))]),s._v(" "),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10",expression:"'required|min:6|max:10'"}],ref:"password",staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur",name:"password","label-placeholder":"Password",placeholder:"Password"},model:{value:s.password,callback:function(a){s.password=a},expression:"password"}}),s._v(" "),t("span",{staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("password")))]),s._v(" "),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|max:10|confirmed:password",expression:"'min:6|max:10|confirmed:password'"}],staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur","data-vv-as":"password",name:"confirm_password","label-placeholder":"Confirm Password",placeholder:"Confirm Password"},model:{value:s.confirm_password,callback:function(a){s.confirm_password=a},expression:"confirm_password"}}),s._v(" "),t("span",{staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("confirm_password")))]),s._v(" "),t("vs-checkbox",{staticClass:"mt-6",model:{value:s.isTermsConditionAccepted,callback:function(a){s.isTermsConditionAccepted=a},expression:"isTermsConditionAccepted"}},[s._v("I accept the terms & conditions.")]),s._v(" "),t("vs-button",{staticClass:"mt-6",attrs:{type:"border",to:"/pages/login"}},[s._v("Login")]),s._v(" "),t("vs-button",{staticClass:"float-right mt-6",attrs:{disabled:!s.validateForm},on:{click:s.registerUserJWt}},[s._v("Register")])],1)}),[],!1,null,null,null).exports}},l=(t(1473),Object(i.a)(r,(function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"},[a("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"},[a("vx-card",[a("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[a("div",{staticClass:"vx-row no-gutter"},[a("div",{staticClass:"vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"},[a("img",{staticClass:"mx-auto",attrs:{src:t(1472),alt:"register"}})]),this._v(" "),a("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg"},[a("div",{staticClass:"px-8 pt-8 register-tabs-container"},[a("div",{staticClass:"vx-card__title mb-4"},[a("h4",{staticClass:"mb-4"},[this._v("Create Account")]),this._v(" "),a("p",[this._v("Fill the below form to create a new account.")])]),this._v(" "),a("vs-tabs",[a("vs-tab",{attrs:{label:"JWT"}},[a("register-jwt")],1)],1)],1)])])])])],1)])}),[],!1,null,null,null));a.default=l.exports},703:function(s,a,t){var e=t(1474);"string"==typeof e&&(e=[[s.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(8)(e,i);e.locals&&(s.exports=e.locals)}}]);