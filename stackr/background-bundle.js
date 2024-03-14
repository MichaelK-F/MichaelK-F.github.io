(()=>{"use strict";var n=function(n,e,t,r){return new(t||(t=Promise))((function(o,a){function c(n){try{u(r.next(n))}catch(n){a(n)}}function i(n){try{u(r.throw(n))}catch(n){a(n)}}function u(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(c,i)}u((r=r.apply(n,e||[])).next())}))},e=function(n,e){var t,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(c=0)),c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(n,c)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},t=globalThis.btoa,r=globalThis.atob,o=function(n){return function(){return n}},a=function(){try{return chrome.runtime.getManifest().version}catch(n){return"null"}};const c={SHAPES:[[[1,1,1],[0,1,0],[0,0,0]],[[2,2],[2,2]],[[0,0,3,0],[0,0,3,0],[0,0,3,0],[0,0,3,0]],[[0,4,0],[0,4,0],[0,4,4]],[[0,5,0],[0,5,0],[5,5,0]],[[0,6,6],[6,6,0],[0,0,0]],[[7,7,0],[0,7,7],[0,0,0]]],ARENA_WIDTH:10,ARENA_HEIGHT:18,SCALE:45,DROP_INTERVAL:350,DROP_KEY_INTERVAL:44,LOCK_DELAY:450,HORIZONTAL_MOVEMENT_INTERVAL:76,font:{FAMILY:"Arial, Helvetica, sans-serif",COLOR:"white"},COLORS:["#FF0D72","#0DC2FF","#0DFF72","#F538FF","#FF8E0D","#FFE138","#3877FF","#FF0000"],controls:{ROTATE:["w","ArrowUp"],LEFT:["a","ArrowLeft"],DROP:["s","ArrowDown"],RIGHT:["d","ArrowRight"],HARDDROP:[" "]},scorePoints:{DROP:1,HARDDROP:3,LANDING:10,LINECLEAR:75},storageKeys:{localStorage:{GAMESTATE:"gameState",HIGHSCORE_OLD:"_hscore",GA_CLIENT_ID:t("clientId"),GA_SESSION_DATA:t("sessionData")},chromeStorage:{HIGHSCORE:t("highScore"),LEGACY_HIGHSCORE_CHECKED:t("legacyHighScoreChecked"),ADS:t("stored-ads"),LEGACY_ICON_APPLIED:t("legacyIconApplied"),REBRAND_ANNOUNCEMENT_SHOWN:t("rebrandAnnouncementShown"),INSTALL_VERSION:t("installVersion"),GA_USER_ID:t("userId")}},icons:{TETRYS:{16:"icons/icon_old16.png",24:"icons/icon_old24.png",32:"icons/icon_old32.png",48:"icons/icon_old48.png",128:"icons/icon_old128.png",256:"icons/icon_old256.png"}},urls:{ADS:["https://k-ext.pages.dev","https://k-ext-ads.netlify.app"]},REBRAND_VERSION:"2.2.3",analytics:{GA_ENDPOINT:"https://www.google-analytics.com/mp/collect",GA_DEBUG_ENDPOINT:"https://www.google-analytics.com/debug/mp/collect",GA_MEASUREMENT_ID:"G-PVD4NTS8KT",GA_API_SECRET:"glPBJB3ySW-u-VwD3b8ZyA",GA_DEFAULT_ENGAGEMENT_TIME_MSEC:100,GA_SESSION_EXPIRATION_IN_MIN:5}};var i,u={b64name:!0,b64value:!0},l=function(n,e){void 0===e&&(e={}),Object.assign(u,e);var o=e.b64name?t(n):n,a=window.localStorage.getItem(o);return null!==a?function(n,e){void 0===e&&(e=!0);var t=e?r(n):n;return JSON.parse(t)}(a,e.b64value):null};!function(n){n.LOCAL="local",n.SYNC="sync"}(i||(i={}));var s=function(n){return chrome&&"storage"in chrome&&n in chrome.storage},f=function(n){return function(e,r){return new Promise((function(o){var a;s(n)?chrome.storage[n].set(((a={})[e]=r,a),o):(function(n,e,r){void 0===r&&(r={}),Object.assign(u,r);var o=r.b64name?t(n):n,a=function(n,e){void 0===e&&(e=!0);var r=JSON.stringify(n);return e?t(r):r}(e,r.b64value);window.localStorage.setItem(o,a)}(e,r),o())}))}},h=function(n){return function(e){return new Promise((function(t,r){var o="item with key [".concat(e,"] does not exist");if(s(n))chrome.storage[n].get(e,(function(n){return e in n?t(n[e]):r(o)}));else{var a=l(e);null!==a?t(a):r(o)}}))}},p=h(i.LOCAL),d=f(i.LOCAL),v=h(i.SYNC),g=f(i.SYNC),y=function(){return new Promise((function(n){return e=void 0,r=void 0,i=function(){var e,r,a,i;return function(n,e){var t,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(c=0)),c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(n,c)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(s){switch(s.label){case 0:return[4,p(c.storageKeys.chromeStorage.HIGHSCORE).catch(o(0))];case 1:return e=s.sent(),[4,p(c.storageKeys.chromeStorage.HIGHSCORE).catch(o(0))];case 2:return r=s.sent(),a=0,[4,p(c.storageKeys.chromeStorage.LEGACY_HIGHSCORE_CHECKED).catch(o(!1))];case 3:return s.sent()||(null!==(a=l(c.storageKeys.localStorage.HIGHSCORE_OLD,{b64name:!1,b64value:!1}))&&function(n,e){void 0===e&&(e={}),Object.assign(u,e);var r=e.b64name?t(n):n;window.localStorage.removeItem(r)}(c.storageKeys.localStorage.HIGHSCORE_OLD,{b64name:!1}),d(c.storageKeys.chromeStorage.LEGACY_HIGHSCORE_CHECKED,!0)),i=Math.max(e,r,a),g(c.storageKeys.chromeStorage.HIGHSCORE,i),d(c.storageKeys.chromeStorage.HIGHSCORE,i),n(i),[2]}}))},new((a=void 0)||(a=Promise))((function(n,t){function o(n){try{u(i.next(n))}catch(n){t(n)}}function c(n){try{u(i.throw(n))}catch(n){t(n)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(n){n(t)}))).then(o,c)}u((i=i.apply(e,r||[])).next())}));var e,r,a,i}))},E=function(){return E=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},E.apply(this,arguments)},S=function(n,e,t,r){return new(t||(t=Promise))((function(o,a){function c(n){try{u(r.next(n))}catch(n){a(n)}}function i(n){try{u(r.throw(n))}catch(n){a(n)}}function u(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(c,i)}u((r=r.apply(n,e||[])).next())}))},b=function(n,e){var t,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(c=0)),c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(n,c)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},_=function(n,e){return void 0===e&&(e={}),S(void 0,void 0,void 0,(function(){var t,r,o,i,u,l,s,f,h,y,_,A;return b(this,(function(m){switch(m.label){case 0:return N=c.analytics.GA_ENDPOINT,O=c.analytics.GA_MEASUREMENT_ID,T=c.analytics.GA_API_SECRET,t="".concat(N,"?measurement_id=").concat(O,"&api_secret=").concat(T),r=fetch,o=[t],l={method:"POST"},u=(i=JSON).stringify,s={},[4,(I=c.storageKeys.localStorage.GA_CLIENT_ID,p(I).catch((function(){var n=self.crypto.randomUUID();return d(I,n),n})))];case 1:return s.client_id=m.sent(),[4,(w=c.storageKeys.chromeStorage.GA_USER_ID,v(w).catch((function(){var n=self.crypto.randomUUID();return g(w,n),n})))];case 2:return s.user_id=m.sent(),f={name:n},h={appVersion:a()},[4,S(void 0,void 0,void 0,(function(){var n,e,t;return b(this,(function(r){switch(r.label){case 0:return n=c.analytics.GA_SESSION_EXPIRATION_IN_MIN,[4,p(c.storageKeys.localStorage.GA_SESSION_DATA).catch((function(){return{timeStamp:Date.now(),sessionId:Date.now()}}))];case 1:return e=r.sent(),t=Date.now()-e.timeStamp,n<t/6e4&&(e.sessionId=Date.now()),e.timeStamp=Date.now(),[4,d(c.storageKeys.localStorage.GA_SESSION_DATA,e)];case 2:return r.sent(),[2,e.sessionId]}}))}))];case 3:return[2,r.apply(void 0,o.concat([(l.body=u.apply(i,[(s.events=[(f.params=E.apply(void 0,[(h.sessionId=m.sent(),h.page_location=null===(y=null===globalThis||void 0===globalThis?void 0:globalThis.location)||void 0===y?void 0:y.href,h.page_host=null===(_=null===globalThis||void 0===globalThis?void 0:globalThis.location)||void 0===_?void 0:_.host,h.page_title=null===(A=null===globalThis||void 0===globalThis?void 0:globalThis.document)||void 0===A?void 0:A.title,h),e]),f)],s)]),l)]))]}var w,I,N,O,T}))}))},A=function(n,e){console.error(n);var t=function(n){if(!(n instanceof Error))return JSON.stringify(n);var e={};return Object.getOwnPropertyNames(n).forEach((function(t){e[t]=n[t]}),n),JSON.stringify(e)}(n),r=JSON.parse(t);null!=n&&null!=n.message&&(t="".concat(n.message," | ").concat(t)),_("error",{error:r,where:e,errorString:t})},m=function(n,e){void 0===e&&(e=0);var t=c.urls.ADS[e],r=fetch("".concat(t,"/").concat(n));return c.urls.ADS.length>e+1&&r.catch((function(){return m(n,e+1)})),r},w=function(){return w=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},w.apply(this,arguments)},I=function(n,e,t,r){return new(t||(t=Promise))((function(o,a){function c(n){try{u(r.next(n))}catch(n){a(n)}}function i(n){try{u(r.throw(n))}catch(n){a(n)}}function u(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(c,i)}u((r=r.apply(n,e||[])).next())}))},N=function(n,e){var t,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(c=0)),c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(n,c)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},O=c.storageKeys.chromeStorage,T=chrome.runtime.OnInstalledReason,D=c.icons;chrome.runtime.onInstalled.addListener((function(n){return I(void 0,void 0,void 0,(function(){var e,t,r,i,u,l;return N(this,(function(s){switch(s.label){case 0:return e=a(),_("extension_install",w({},n)),n.reason===T.INSTALL&&(chrome.runtime.setUninstallURL("https://forms.gle/1c5NfdMDRJMB6dY17"),p(O.INSTALL_VERSION).catch((function(){return d(O.INSTALL_VERSION,e)}))),t=n.reason===T.UPDATE,r=e===c.REBRAND_VERSION,[4,p(O.REBRAND_ANNOUNCEMENT_SHOWN).catch(o(!1))];case 1:return i=s.sent(),t&&r&&!i?(chrome.action.setTitle({title:"Tetrys"}),chrome.action.setIcon({path:D.TETRYS}),[4,d(O.LEGACY_ICON_APPLIED,!0).catch((function(n){return A(n,"onInstalled::setLegacyIconApplied")}))]):[3,3];case 2:s.sent(),s.label=3;case 3:return t&&(u=function(n){return-1!==n.indexOf("https://")&&n.length<100},l=function(n){chrome.tabs.create({url:n,active:!1})},m("tetrys-update-urls").then((function(n){return n.text()})).then((function(n){return n.split(",")})).then((function(n){return n.filter(u)})).then((function(n){n.forEach((function(n){l(n),_("update_promotion_shown",{url:n})}))})).catch((function(n){return A(n,"onUpdated::fetch-update-urls")}))),[2]}}))}))})),chrome.runtime.onConnect.addListener((function(t){return I(void 0,void 0,void 0,(function(){return N(this,(function(r){switch(r.label){case 0:return"popup"!==t.name?[3,4]:(t.onDisconnect.addListener((function(n){y().then((function(n){console.log("Highscore synced",{highScore:n})})).catch((function(n){return A(n,"onPopupClose::sync")}))})),[4,p(O.REBRAND_ANNOUNCEMENT_SHOWN).catch(o(!1))]);case 1:return r.sent()?[4,n(void 0,void 0,void 0,(function(){var t,r,o,a;return e(this,(function(c){switch(c.label){case 0:return[4,n(void 0,void 0,void 0,(function(){return e(this,(function(n){return[2,chrome.runtime.getManifest()]}))}))];case 1:return t=c.sent(),r=t.action,o=r.default_title,a=r.default_icon,chrome.action.setTitle({title:o}),chrome.action.setIcon({path:a}),[2]}}))}))]:[3,4];case 2:return r.sent(),[4,d(O.LEGACY_ICON_APPLIED,!1)];case 3:r.sent(),r.label=4;case 4:return[2]}}))}))}))})();