System.register(["./chunk-vendor.js","./chunk-frameworks.js"],(function(){"use strict";var e,t,n,r,i;return{setters:[function(i){e=i._,t=i.t,n=i.g,r=i.c},function(e){i=e.a2}],execute:function(){let o=class ReadmeTocElement extends HTMLElement{connectedCallback(){var e;null===(e=this.trigger)||void 0===e||e.addEventListener("menu:activate",this.onMenuOpened.bind(this));const t=this.getHeadings();this.observer=new IntersectionObserver((()=>this.observerCallback()),{root:null,rootMargin:"0px",threshold:1});for(const n of t||[])this.observer.observe(n)}disconnectedCallback(){var e,t;null===(e=this.trigger)||void 0===e||e.removeEventListener("menu:activate",this.onMenuOpened),null===(t=this.observer)||void 0===t||t.disconnect()}blur(){window.setTimeout((()=>{document.activeElement&&document.activeElement.blur()}),0)}onMenuOpened(e){const t=e.currentTarget,n=t.getAttribute("data-menu-hydro-click")||"",r=t.getAttribute("data-menu-hydro-click-hmac")||"",o=t.getAttribute("data-hydro-client-context")||"";i(n,r,o),this.observerCallback()}getHeadings(){return this.content?this.content.querySelectorAll("h1,h2,h3,h4,h5,h6"):null}observerCallback(){const e=Array.prototype.slice.call(this.getHeadings()).filter((e=>this.isElementInViewPort(e)))[0];for(const t of this.entries||[])t.removeAttribute("aria-current");if(e){const t=this.mapHeadingToListItemUsingAnchor(e);if(t){t.setAttribute("aria-current","page");const e=t.closest("div");e&&t.offsetTop&&(e.scrollTop=t.offsetTop-parseInt(getComputedStyle(e).paddingTop))}}}isElementInViewPort(e){return e.getBoundingClientRect().y>=0}mapHeadingToListItemUsingAnchor(e){const t=e.getElementsByTagName("a")[0];if(t&&this.entries)return this.entries.find((e=>e.href.replace("user-content-","")===t.href))}};e([t],o.prototype,"trigger",void 0),e([t],o.prototype,"content",void 0),e([n],o.prototype,"entries",void 0),o=e([r],o)}}}));
//# sourceMappingURL=chunk-readme-toc-element-00082c09.js.map