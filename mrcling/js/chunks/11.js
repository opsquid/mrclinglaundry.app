(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1487:function(t,e,i){"use strict";i(706)},1488:function(t,e,i){(t.exports=i(7)(!1)).push([t.i,".list-view-item .item-description[data-v-05fd1df4],.list-view-item .item-name[data-v-05fd1df4]{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.list-view-item .item-name[data-v-05fd1df4]{-webkit-line-clamp:2}.list-view-item .item-description[data-v-05fd1df4]{-webkit-line-clamp:5}.list-view-item .grid-view-img[data-v-05fd1df4]{max-width:100%;max-height:100%;width:auto;transition:.35s}[dir] .list-view-item[data-v-05fd1df4]:hover{transform:translateY(-5px);box-shadow:0 4px 25px 0 rgba(0,0,0,.25)}.list-view-item:hover .grid-view-img[data-v-05fd1df4]{opacity:.9}",""])},1725:function(t,e,i){"use strict";i.r(e);var s={props:{item:{type:Object,required:!0}},computed:{isInCart:function(){var t=this;return function(e){return t.$store.getters["eCommerce/isInCart"](e)}},isInWishList:function(){var t=this;return function(e){return t.$store.getters["eCommerce/isInWishList"](e)}}},methods:{toggleItemInWishList:function(t){this.$store.dispatch("eCommerce/toggleItemInWishList",t)},additemInCart:function(t){this.$store.dispatch("eCommerce/additemInCart",t)},cartButtonClicked:function(t){this.isInCart(t.objectID)?this.$router.push("/apps/eCommerce/checkout").catch((function(){})):this.additemInCart(t)},navigate_to_detail_view:function(){this.$router.push({name:"ecommerce-item-detail-view",params:{item_id:this.item.objectID}}).catch((function(){}))}}},a=(i(1487),i(0)),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vx-card",t._g({staticClass:"list-view-item overflow-hidden"},t.$listeners),[i("template",{slot:"no-body"},[i("div",{staticClass:"vx-row item-details no-gutter"},[i("div",{staticClass:"vx-col sm:w-1/4 w-full item-img-container bg-white flex items-center justify-center cursor-pointer",on:{click:t.navigate_to_detail_view}},[i("img",{staticClass:"grid-view-img p-4",attrs:{src:t.item.image,alt:t.item.name}})]),t._v(" "),i("div",{staticClass:"vx-col sm:w-1/2"},[i("div",{staticClass:"p-4 pt-6"},[t._t("item-meta",[i("h6",{staticClass:"item-name font-semibold mb-1 hover:text-primary cursor-pointer",on:{click:t.navigate_to_detail_view}},[t._v(t._s(t.item.name))]),t._v(" "),i("p",{staticClass:"text-sm mb-4"},[t._v("By "),i("span",{staticClass:"font-semibold cursor-pointer"},[t._v(t._s(t.item.brand))])]),t._v(" "),i("p",{staticClass:"item-description text-sm"},[t._v(t._s(t.item.description))])])],2)]),t._v(" "),i("div",{staticClass:"vx-col sm:w-1/4 w-full flex items-center sm:border border-0 border-solid d-theme-border-grey-light border-r-0 border-t-0 border-b-0"},[i("div",{staticClass:"p-4 flex flex-col w-full"},[i("div",{staticClass:"text-warning flex self-end border border-solid border-warning py-1 px-2 rounded"},[i("span",{staticClass:"text-sm mr-1"},[t._v(t._s(t.item.rating))]),t._v(" "),i("feather-icon",{attrs:{icon:"StarIcon",svgClasses:"h-4 w-4"}})],1),t._v(" "),i("div",{staticClass:"my-6"},[i("h5",{staticClass:"font-bold text-center"},[t._v("$"+t._s(t.item.price))]),t._v(" "),t.item.free_shipping?i("span",{staticClass:"text-grey flex items-start justify-center mt-1"},[i("feather-icon",{attrs:{icon:"ShoppingCartIcon",svgClasses:"w-4 h-4"}}),t._v(" "),i("span",{staticClass:"text-sm ml-2"},[t._v("Free Shipping")])],1):t._e()]),t._v(" "),t._t("action-buttons")],2)])])])],2)}),[],!1,null,"05fd1df4",null);e.default=r.exports},706:function(t,e,i){var s=i(1488);"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(8)(s,a);s.locals&&(t.exports=s.locals)}}]);