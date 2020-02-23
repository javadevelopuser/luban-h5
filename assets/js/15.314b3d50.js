(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{258:function(e,t,a){"use strict";a.r(t);var n=a(30),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"migration-guide-from-v-1-8-0-to-v-1-8-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration-guide-from-v-1-8-0-to-v-1-8-1"}},[e._v("#")]),e._v(" Migration guide from v.1.8.0 to v.1.8.1")]),e._v(" "),a("p",[e._v("Upgrading your Luban-H5 application to "),a("code",[e._v("v.1.8.1")]),e._v(".")]),e._v(" "),a("p",[e._v("Here are the patch changes:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("upgrade the strapi version from beta.17.x to beta.18.4 to fix "),a("a",{attrs:{href:"https://github.com/strapi/strapi/issues/4791",target:"_blank",rel:"noopener noreferrer"}},[e._v("/upload return the url contains "),a("code",[e._v("localhost:1337")]),e._v(" after migrate from beta.13 to beta.17.8"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("see more here: "),a("a",{attrs:{href:"https://strapi.io/documentation/3.0.0-beta.x/migration-guide/migration-guide-beta.17-to-beta.18.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Strapi Migration guide from beta.17+ to beta.18"),a("OutboundLink")],1)])])]),e._v(" "),a("p",[e._v("To upgrade a project to the "),a("code",[e._v("v.1.8.1")]),e._v(" version of Luban-H5 follow the instructions below.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# clone the newest code")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# clean the h5-api cache, node_modules and admin panel")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# !! and this step will stop the api service(it will run the `./luban-h5 stop` firstly)")]),e._v("\n./luban-h5 clean\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# reinstall the dependencies and rebuild the admin panel")]),e._v("\n./luban-h5 init\n./luban-h5 start\n")])])]),a("p",[e._v("feel free open an "),a("a",{attrs:{href:"https://github.com/ly525/luban-h5/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),a("OutboundLink")],1),e._v(" if you have questions about this.")])])}),[],!1,null,null,null);t.default=r.exports}}]);