(()=>{"use strict";var n,e,t,o,i,a,r,d,s,c,p,l,u,f,m={426:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(81),i=t.n(o),a=t(645),r=t.n(a)()(i());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap);"]),r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200&display=swap);"]),r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@500&display=swap);"]),r.push([n.id,'*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  font-family: "Rubik", sans-serif;\n}\n\nbody {\n  line-height: 1.5;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n  hyphens: auto;\n}\n\n#content {\n  display: flex;\n  flex-direction: row;\n  gap: 90px;\n  height: 850px;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-width: 300px;\n  background: hsl(224, 7%, 96%);\n  padding: 10px 14px;\n  border-radius: 4px;\n  padding-top: 38px;\n  height: 650px;\n}\n\n#sidebar_bottom {\n  width: 400px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n#greeting-message {\n  padding-bottom: 20px;\n}\n\nh1 {\n  font-size: 13px;\n  font-weight: 600;\n  padding: 0 8px;\n  padding-bottom: 10px;\n}\n\nh2 {\n  font-size: 14px;\n}\n\n.today,\n.projects {\n  font-size: 13px;\n  padding: 10px 8px;\n  border-radius: 4px;\n}\n\n.today:hover,\n.projects:hover {\n  background: hsl(223, 7%, 98%);\n}\n\nli {\n  font-size: 13px;\n  list-style: inside;\n}\n\n.day {\n  font-family: \'Ibarra Real Nova\', serif;\n  font-size: 14px;\n  font-weight: 550;\n  font-style: italic;\n}\n\nul {\n  margin-left: -40px;\n}\n\n#actions {\n  font-size: 14px;\n  font-weight: 500;\n  padding-bottom: 25px;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  padding-top: 38px;\n  padding-left: 25px;\n  height: 100%;\n  width: 400px;\n}\n\n.title-date {\n  font-size: 17px;\n  padding-bottom: 22px;\n}\n\ndetails > summary {\n  list-style-type: none;\n}\n\ndetails {\n  font-size: 15px;\n  color: hsl(0deg 0% 25%);\n  border-radius: 4px;\n}\n\nsummary {\n  cursor: pointer;\n  padding: 12px;\n  outline-offset: 5px;\n  display: flex;\n  flex-direction: row;\n  font-weight: 700;\n}\n\n.more {\n  padding-bottom: 8px;\n  font-size: 13px;\n  font-style: italic;\n  padding-left: 25px;\n}\n\n.input {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 2px;\n}\n\n#task-container {\n  min-height: 370px;\n  max-height: 370px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  overflow: hidden;\n}\n\n.task {\n  font-family: "Fira Sans", sans-serif;\n}\n\n.buttonContainer {\n  padding-top: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n\n#taskButton {\n  color: black;\n  background: #ffffff;\n  display: inline-block;\n  cursor: pointer;\n  text-align: center;\n  border: 1px solid hsl(46, 4%, 16%);\n  padding: 7px 16px;\n  border-radius: 4px;\n  font-weight: 500;\n  font-size: 14px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px;\n  width: 100px;\n}\n\n#modal-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  text-align: center;\n  height: 50%;\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  transition: opacity 0.3s ease;\n  pointer-events: none;\n  z-index: 1;\n}\n\n#modal {\n  display: flex;\n  padding: 10px 15px;\n  flex-direction: column;\n  text-align: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  width: 350px;\n  height: 300px;\n  gap: 15px;\n  text-align: center;\n  background: white;\n  border-radius: 5px;\n  transition: transform 0.3s ease;\n}\n\n#close-container {\n  display: flex;\n  justify-content: flex-end;\n}\n\n#close {\n  color: black;\n  cursor: pointer;\n  font-size: 14px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px;\n  cursor: pointer;\n}\n\n#close:hover {\n  font-weight: 800;\n\n}\n\n#modal-container.show {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n',""]);const d=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(r[s]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);o&&r[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},r=[],d=0;d<n.length;d++){var s=n[d],c=o.base?s[0]+o.base:s[0],p=a[c]||0,l="".concat(c," ").concat(p);a[c]=p+1;var u=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=i(f,o);o.byIndex=d,e.splice(d,0,{identifier:l,updater:m,references:1})}r.push(l)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var d=t(a[r]);e[d].references--}for(var s=o(n,i),c=0;c<a.length;c++){var p=t(a[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function x(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return m[n](t,t.exports,x),t.exports}x.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return x.d(e,{a:e}),e},x.d=(n,e)=>{for(var t in e)x.o(e,t)&&!x.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},x.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=x(379),e=x.n(n),t=x(795),o=x.n(t),i=x(569),a=x.n(i),r=x(565),d=x.n(r),s=x(216),c=x.n(s),p=x(589),l=x.n(p),u=x(426),(f={}).styleTagTransform=l(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=c(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,(()=>{const n=document.createElement("div");document.body.appendChild(n),n.id="content",console.log(n)})(),(()=>{const n=document.getElementById("content"),e=document.createElement("div");n.appendChild(e),e.classList.add("sidebar");const t=document.createElement("div");t.id="sidebar-top",e.appendChild(t);const o=document.createElement("div");o.id="actions",t.appendChild(o);const i=document.createElement("h1");i.innerText="ACTIONS",o.appendChild(i);const a=document.createElement("div");a.classList.add("today"),a.innerText="Today",o.appendChild(a);const r=document.createElement("div");r.classList.add("projects"),r.innerText="Projects",o.appendChild(r);const d=document.createElement("div");d.id="greeting-message",e.appendChild(d);const s=document.createElement("div");s.classList.add("day"),d.appendChild(s),s.innerText="Enjoy the rest of your Thursday!"})(),(()=>{const n=document.getElementById("content"),e=document.createElement("div");e.id="container",n.appendChild(e);const t=document.createElement("h2");t.classList.add("title-date"),t.innerText="Today",e.appendChild(t);const o=document.createElement("div");o.id="task-container",e.appendChild(o)})(),(()=>{const n=document.getElementById("actions"),e=document.createElement("div");e.classList.add("buttonContainer"),n.appendChild(e);const t=document.createElement("button");t.innerText="Add task",t.classList.add("taskButton"),t.id="taskButton",e.appendChild(t)})(),(()=>{const n=document.getElementById("content"),e=document.createElement("div");e.id="modal-container",n.appendChild(e);const t=document.createElement("div");t.id="modal",e.appendChild(t);const o=document.createElement("div");o.id="close-container",t.appendChild(o);const i=document.createElement("div");i.id="close",o.appendChild(i),i.innerText="X";const a=document.createElement("h1");t.appendChild(a)})(),(()=>{const n=document.getElementById("taskButton"),e=document.getElementById("modal-container"),t=document.getElementById("close");n.addEventListener("click",(()=>{e.classList.add("show")})),t.addEventListener("click",(()=>{e.classList.remove("show")}))})()})();