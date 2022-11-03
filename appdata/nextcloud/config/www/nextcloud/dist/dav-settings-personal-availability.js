/*! For license information please see dav-settings-personal-availability.js.LICENSE.txt */
!function(){var n,e={44435:function(n,e,a){"use strict";var r=a(20144),o=a(9944),i=a(51796),l=a(16453),c=a(26932),s=a(81063),u=a(4820),d=a(56580),p=a.n(d),A=a(79753),v=a(22200),f=p()((function(n){return u.default.defaults.headers["X-Requested-With"]="XMLHttpRequest",s.getPatcher().patch("request",u.default),s.createClient((0,A.generateRemoteUrl)("dav/".concat(n,"/").concat((0,v.getCurrentUser)().uid)))})),b=(0,a(17499).IY)().setApp("dav").detectUser().build(),m=a(7582);function y(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function g(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?y(Object(e),!0).forEach((function(t){x(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function x(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function C(n){return function(n){if(Array.isArray(n))return h(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return h(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?h(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}function w(n,t,e,a,r,o,i){try{var l=n[o](i),c=l.value}catch(n){return void e(n)}l.done?t(c):Promise.resolve(c).then(a,r)}function k(n){return function(){var t=this,e=arguments;return new Promise((function(a,r){var o=n.apply(t,e);function i(n){w(o,a,r,i,l,"next",n)}function l(n){w(o,a,r,i,l,"throw",n)}i(void 0)}))}}function O(){return S.apply(this,arguments)}function S(){return(S=k(regeneratorRuntime.mark((function n(){var t,e,a,r,o,l,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=f("calendars"),n.next=3,r.customRequest("inbox",{method:"PROPFIND",data:'<?xml version="1.0"?>\n\t\t\t<x0:propfind xmlns:x0="DAV:">\n\t\t\t  <x0:prop>\n\t\t\t\t<x1:calendar-availability xmlns:x1="urn:ietf:params:xml:ns:caldav"/>\n\t\t\t  </x0:prop>\n\t\t\t</x0:propfind>'});case 3:return o=n.sent,n.next=6,(0,m.parseXML)(o.data);case 6:if(l=n.sent){n.next=9;break}return n.abrupt("return",void 0);case 9:if(c=null==l||null===(t=l.multistatus)||void 0===t||null===(e=t.response[0])||void 0===e||null===(a=e.propstat)||void 0===a?void 0:a.prop["calendar-availability"]){n.next=12;break}return n.abrupt("return",void 0);case 12:return n.abrupt("return",(0,i.Xg)(c));case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function B(n,t){return P.apply(this,arguments)}function P(){return(P=k(regeneratorRuntime.mark((function n(t,e){var a,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=C(Object.keys(t).flatMap((function(n){return t[n].map((function(t){return g(g({},t),{},{day:n})}))}))),r=(0,i.ST)(a,e),b.debug("New availability ical created",{vavailability:r}),o=f("calendars"),n.next=6,o.customRequest("inbox",{method:"PROPPATCH",data:'<?xml version="1.0"?>\n\t\t\t<x0:propertyupdate xmlns:x0="DAV:">\n\t\t\t  <x0:set>\n\t\t\t\t<x0:prop>\n\t\t\t\t  <x1:calendar-availability xmlns:x1="urn:ietf:params:xml:ns:caldav">'.concat(r,"</x1:calendar-availability>\n\t\t\t\t</x0:prop>\n\t\t\t  </x0:set>\n\t\t\t</x0:propertyupdate>")});case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n,t,e,a,r,o,i){try{var l=n[o](i),c=l.value}catch(n){return void e(n)}l.done?t(c):Promise.resolve(c).then(a,r)}function D(n){return function(){var t=this,e=arguments;return new Promise((function(a,r){var o=n.apply(t,e);function i(n){j(o,a,r,i,l,"next",n)}function l(n){j(o,a,r,i,l,"throw",n)}i(void 0)}))}}function E(){return R.apply(this,arguments)}function R(){return(R=D(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.default.post((0,A.generateOcsUrl)("/apps/provisioning_api/api/v1/config/users/{appId}/{configKey}",{appId:"dav",configKey:"user_status_automation"}),{configValue:"yes"});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function _(){return $.apply(this,arguments)}function $(){return($=D(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.default.delete((0,A.generateOcsUrl)("/apps/provisioning_api/api/v1/config/users/{appId}/{configKey}",{appId:"dav",configKey:"user_status_automation"}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var T=a(55586),z=a.n(T),I=a(10861),U=a.n(I),N=a(20571),M=a.n(N),F=a(13299),q=a.n(F),Z=a(31144),W=a.n(Z);function Y(n,t,e,a,r,o,i){try{var l=n[o](i),c=l.value}catch(n){return void e(n)}l.done?t(c):Promise.resolve(c).then(a,r)}function H(n){return function(){var t=this,e=arguments;return new Promise((function(a,r){var o=n.apply(t,e);function i(n){Y(o,a,r,i,l,"next",n)}function l(n){Y(o,a,r,i,l,"throw",n)}i(void 0)}))}}var K={name:"Availability",components:{NcButton:U(),NcCheckboxRadioSwitch:M(),CalendarAvailability:i.Dx,NcSettingsSection:q(),NcTimezonePicker:W()},data:function(){var n=z().determine();return{loading:!0,saving:!1,timezone:n?n.name():"UTC",slots:{MO:[],TU:[],WE:[],TH:[],FR:[],SA:[],SU:[]},automated:"yes"===(0,l.loadState)("dav","user_status_automation")}},mounted:function(){var n=this;return H(regeneratorRuntime.mark((function e(){var a,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:(a=e.sent)?(r=a.slots,o=a.timezoneId,n.slots=r,o&&(n.timezone=o),console.info("availability loaded",n.slots,n.timezoneId)):(console.info("no availability is set"),n.slots={MO:[],TU:[],WE:[],TH:[],FR:[],SA:[],SU:[]}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("could not load existing availability",e.t0),(0,c.showError)(t("dav","Failed to load availability"));case 11:return e.prev=11,n.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,7,11,14]])})))()},methods:{save:function(){var n=this;return H(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.saving=!0,e.next=4,B(n.slots,n.timezone);case 4:if(!n.automated){e.next=9;break}return e.next=7,E();case 7:e.next=11;break;case 9:return e.next=11,_();case 11:(0,c.showSuccess)(t("dav","Saved availability")),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.error("could not save availability",e.t0),(0,c.showError)(t("dav","Failed to save availability"));case 18:return e.prev=18,n.saving=!1,e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,14,18,21]])})))()}}},X=a(93379),V=a.n(X),L=a(7795),G=a.n(L),Q=a(90569),J=a.n(Q),nn=a(3565),tn=a.n(nn),en=a(19216),an=a.n(en),rn=a(44589),on=a.n(rn),ln=a(13099),cn={};cn.styleTagTransform=on(),cn.setAttributes=tn(),cn.insert=J().bind(null,"head"),cn.domAPI=G(),cn.insertStyleElement=an(),V()(ln.Z,cn),ln.Z&&ln.Z.locals&&ln.Z.locals;var sn=(0,a(51900).Z)(K,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("NcSettingsSection",{attrs:{title:n.$t("dav","Availability"),description:n.$t("dav","If you configure your working hours, other users will see when you are out of office when they book a meeting.")}},[e("div",{staticClass:"time-zone"},[e("strong",[n._v("\n\t\t\t"+n._s(n.$t("dav","Time zone:"))+"\n\t\t")]),n._v(" "),e("span",{staticClass:"time-zone-text"},[e("NcTimezonePicker",{model:{value:n.timezone,callback:function(t){n.timezone=t},expression:"timezone"}})],1)]),n._v(" "),e("CalendarAvailability",{attrs:{slots:n.slots,loading:n.loading,"l10n-to":n.$t("dav","to"),"l10n-delete-slot":n.$t("dav","Delete slot"),"l10n-empty-day":n.$t("dav","No working hours set"),"l10n-add-slot":n.$t("dav","Add slot"),"l10n-monday":n.$t("dav","Monday"),"l10n-tuesday":n.$t("dav","Tuesday"),"l10n-wednesday":n.$t("dav","Wednesday"),"l10n-thursday":n.$t("dav","Thursday"),"l10n-friday":n.$t("dav","Friday"),"l10n-saturday":n.$t("dav","Saturday"),"l10n-sunday":n.$t("dav","Sunday")},on:{"update:slots":function(t){n.slots=t}}}),n._v(" "),e("NcCheckboxRadioSwitch",{attrs:{checked:n.automated},on:{"update:checked":function(t){n.automated=t}}},[n._v("\n\t\t"+n._s(n.$t("dav",'Automatically set user status to "Do not disturb" outside of availability to mute all notifications.'))+"\n\t")]),n._v(" "),e("NcButton",{attrs:{disabled:n.loading||n.saving,type:"primary"},on:{click:n.save}},[n._v("\n\t\t"+n._s(n.$t("dav","Save"))+"\n\t")])],1)}),[],!1,null,"e90bacba",null).exports;r.ZP.prototype.$t=o.translate,new(r.ZP.extend(sn))({}).$mount("#settings-personal-availability")},13099:function(n,t,e){"use strict";var a=e(87537),r=e.n(a),o=e(23645),i=e.n(o)()(r());i.push([n.id,".availability-day[data-v-e90bacba]{padding:0 10px 0 10px;position:absolute}.availability-slots[data-v-e90bacba]{display:flex;white-space:nowrap}.availability-slot[data-v-e90bacba]{display:flex;flex-direction:row;align-items:center}.availability-slot-group[data-v-e90bacba]{display:flex;flex-direction:column}[data-v-e90bacba] .mx-input-wrapper{width:85px}[data-v-e90bacba] .mx-datepicker{width:97px}[data-v-e90bacba] .multiselect{border:1px solid var(--color-border-dark);width:120px}.time-zone[data-v-e90bacba]{padding:32px 12px 12px 0}.grid-table[data-v-e90bacba]{display:grid;margin-bottom:32px;grid-column-gap:24px;grid-row-gap:6px;grid-template-columns:min-content min-content min-content}.button[data-v-e90bacba]{align-self:flex-end}.label-weekday[data-v-e90bacba]{position:relative;display:inline-flex;padding-top:4px}.delete-slot[data-v-e90bacba]{background-color:rgba(0,0,0,0);border:none;padding-bottom:12px;opacity:.5}.delete-slot[data-v-e90bacba]:hover{opacity:1}.add-another[data-v-e90bacba]{background-color:rgba(0,0,0,0);border:none;opacity:.5;display:inline-flex;padding:0;margin:0;margin-bottom:3px}.add-another[data-v-e90bacba]:hover{opacity:1}.to-text[data-v-e90bacba]{padding-right:12px}.time-zone-text[data-v-e90bacba]{padding-left:22px}.empty-content[data-v-e90bacba]{color:var(--color-text-lighter);margin-top:4px}","",{version:3,sources:["webpack://./apps/dav/src/views/Availability.vue"],names:[],mappings:"AAkIA,mCACC,qBAAA,CACA,iBAAA,CAED,qCACC,YAAA,CACA,kBAAA,CAED,oCACC,YAAA,CACA,kBAAA,CACA,kBAAA,CAED,0CACC,YAAA,CACA,qBAAA,CAED,oCACC,UAAA,CAED,iCACC,UAAA,CAED,+BACC,yCAAA,CACA,WAAA,CAED,4BACC,wBAAA,CAED,6BACC,YAAA,CACA,kBAAA,CACA,oBAAA,CACA,gBAAA,CACA,yDAAA,CAED,yBACC,mBAAA,CAED,gCACC,iBAAA,CACA,mBAAA,CACA,eAAA,CAED,8BACC,8BAAA,CACA,WAAA,CACA,mBAAA,CACA,UAAA,CACA,oCACC,SAAA,CAIF,8BACC,8BAAA,CACA,WAAA,CACA,UAAA,CACA,mBAAA,CACA,SAAA,CACA,QAAA,CACA,iBAAA,CAEA,oCACC,SAAA,CAGF,0BACC,kBAAA,CAED,iCACC,iBAAA,CAED,gCACC,+BAAA,CACA,cAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.availability-day {\n\tpadding: 0 10px 0 10px;\n\tposition: absolute;\n}\n.availability-slots {\n\tdisplay: flex;\n\twhite-space: nowrap;\n}\n.availability-slot {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n}\n.availability-slot-group {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n::v-deep .mx-input-wrapper {\n\twidth: 85px;\n}\n::v-deep .mx-datepicker {\n\twidth: 97px;\n}\n::v-deep .multiselect {\n\tborder: 1px solid var(--color-border-dark);\n\twidth: 120px;\n}\n.time-zone {\n\tpadding: 32px 12px 12px 0;\n}\n.grid-table {\n\tdisplay: grid;\n\tmargin-bottom: 32px;\n\tgrid-column-gap: 24px;\n\tgrid-row-gap: 6px;\n\tgrid-template-columns: min-content min-content min-content;\n}\n.button {\n\talign-self: flex-end;\n}\n.label-weekday {\n\tposition: relative;\n\tdisplay: inline-flex;\n\tpadding-top: 4px;\n}\n.delete-slot {\n\tbackground-color: transparent;\n\tborder: none;\n\tpadding-bottom: 12px;\n\topacity: .5;\n\t&:hover {\n\t\topacity: 1;\n\t}\n}\n\n.add-another {\n\tbackground-color: transparent;\n\tborder: none;\n\topacity: .5;\n\tdisplay: inline-flex;\n\tpadding: 0;\n\tmargin: 0;\n\tmargin-bottom: 3px;\n\n\t&:hover {\n\t\topacity: 1;\n\t}\n}\n.to-text {\n\tpadding-right: 12px;\n}\n.time-zone-text{\n\tpadding-left: 22px;\n}\n.empty-content {\n\tcolor: var(--color-text-lighter);\n\tmargin-top: 4px;\n}\n\n"],sourceRoot:""}]),t.Z=i},69862:function(){},40964:function(){}},a={};function r(n){var t=a[n];if(void 0!==t)return t.exports;var o=a[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},n=[],r.O=function(t,e,a,o){if(!e){var i=1/0;for(u=0;u<n.length;u++){e=n[u][0],a=n[u][1],o=n[u][2];for(var l=!0,c=0;c<e.length;c++)(!1&o||i>=o)&&Object.keys(r.O).every((function(n){return r.O[n](e[c])}))?e.splice(c--,1):(l=!1,o<i&&(i=o));if(l){n.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=n.length;u>0&&n[u-1][2]>o;u--)n[u]=n[u-1];n[u]=[e,a,o]},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,{a:t}),t},r.d=function(n,t){for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},r.j=3347,function(){r.b=document.baseURI||self.location.href;var n={3347:0};r.O.j=function(t){return 0===n[t]};var t=function(t,e){var a,o,i=e[0],l=e[1],c=e[2],s=0;if(i.some((function(t){return 0!==n[t]}))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(c)var u=c(r)}for(t&&t(e);s<i.length;s++)o=i[s],r.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return r.O(u)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}(),r.nc=void 0;var o=r.O(void 0,[7874],(function(){return r(44435)}));o=r.O(o)}();
//# sourceMappingURL=dav-settings-personal-availability.js.map?v=48a58d1e0811a2cabee7