"use strict";(self.webpackChunksage=self.webpackChunksage||[]).push([[143],{813:(e,t,s)=>{const o=async e=>{function t(e,t,s){for(let t=0;t<e.length;t++)e[t].classList.remove("this-is-active"),s[t].classList.remove("this-is-active");e[t].classList.add("this-is-active"),s[t].classList.add("this-is-active")}function s(e){document.body.classList.toggle("modal-is-active"),document.querySelector("#js-modal-".concat(e)).classList.toggle("modal-is-active")}function o(e){document.body.classList.remove("modal-is-active"),document.querySelector("#js-modal-".concat(e)).classList.remove("modal-is-active")}function i(e,t){const i=e.getAttribute("block-id");o(t),s(i)}function c(){const e=document.querySelectorAll(".c-block");e.length>0&&e.forEach((e=>{const c=e.getAttribute("id");e.querySelectorAll(".js-toggle-modal").forEach((e=>{e.addEventListener("click",(()=>{s(c)}))})),e.querySelector(".c-modal").addEventListener("click",(t=>{e.querySelector(".c-modal__content").contains(t.target)||o(c)}));const l=e.querySelectorAll(".js-gallery-image");if(l.length>0){const s=e.querySelectorAll(".js-gallery-dot");let o=0;l[o].classList.add("this-is-active"),s[o].classList.add("this-is-active");const i=e.querySelector(".js-gallery-next");i&&i.addEventListener("click",(()=>{o++,o>=l.length&&(o=0),t(l,o,s)}));const c=e.querySelector(".js-gallery-prev");c&&c.addEventListener("click",(()=>{o--,o<0&&(o=l.length-1),t(l,o,s)}))}const n=e.querySelector(".js-modal-next");n&&(n.hasAttribute("block-id")?n.addEventListener("click",(()=>{i(n,c)})):n.classList.add("is-disabled"));const a=e.querySelector(".js-modal-prev");a&&(a.hasAttribute("block-id")?a.addEventListener("click",(()=>{i(a,c)})):a.classList.add("is-disabled"))}))}function l(){document.querySelector("#gallery-filter")&&(window.location.search.includes("?_sft_category")?document.querySelector("#gallery-filter").classList.add("is-filtered"):document.querySelector("#gallery-filter").classList.remove("is-filtered"))}let n;e&&console.error(e),c(),jQuery(document).on("sf:ajaxfinish",(()=>{c(),window.history.pushState(null,null,"#gallery-filter"),l()})),n=window.innerWidth>768?.7:0;let a=null;const r=new IntersectionObserver((e=>{e.forEach((e=>{const t=e.target.getAttribute("ID");if(null!==t&&e.isIntersecting){if(document.querySelector('.js-primary-nav-link[href="/#'+t+'"]').classList.add("this-is-active"),a&&a!==e.target){const e=a.getAttribute("ID");document.querySelector('.js-primary-nav-link[href="/#'+e+'"]').classList.remove("this-is-active")}a=e.target}}))}),{threshold:[n]}),d=document.querySelectorAll("section");d.length>0&&d.forEach((e=>{r.observe(e)}));const u=document.querySelectorAll('a[href^="/#"]');function g(){document.body.classList.remove("primary-nav-is-active"),document.querySelector(".c-primary-nav__menu-toggle").classList.remove("primary-nav-is-active")}u.length>0&&u.forEach((e=>{e.addEventListener("click",(t=>{window.location.href+"/"==window.location.protocol+"//"+window.location.host&&t.preventDefault(),function(e){const t=document.querySelector(".c-header").getBoundingClientRect().height;let s;s=document.querySelector(e)?document.querySelector(e).offsetTop-t:t,window.scrollTo({top:s,behavior:"smooth"})}(e.hash),window.history.pushState(null,null,e.hash)}))})),document.addEventListener("DOMContentLoaded",(function(){-1!==window.location.href.indexOf("?_sft_category")||-1!==window.location.href.indexOf("sf_paged")?document.getElementById("gallery-filter").scrollIntoView():window.location.hash&&function(){const e=function(e){const t=e.indexOf("#");if(t>=0){const s=e.indexOf("?",t);return s>=0?e.substring(t+1,s):e.substring(t+1)}return""}(window.location.hash),t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}(),l()}));const m=document.querySelectorAll(".js-primary-nav-link");m.length>0&&(m.forEach((e=>{e.addEventListener("click",(()=>{g()}))})),document.addEventListener("click",(e=>{document.querySelector("body").classList.contains("primary-nav-is-active")&&(document.querySelector(".c-primary-nav__parent-list").contains(e.target)||g())})),document.addEventListener("scroll",(()=>{document.querySelector("body").classList.contains("primary-nav-is-active")&&g()})));const h=document.querySelector("#gallery-filter");var v;h&&h.addEventListener("click",(e=>{if(e.target.matches(".read-more")){const t=e.target.parentElement.parentElement;e.preventDefault(),t.querySelector(".js-block-body-more").classList.remove("this-is-active"),t.querySelector(".js-block-body-full").classList.add("this-is-active")}})),[...(v=document).querySelectorAll(".js-toggle:not(.js-toggle--initialized)")].forEach((e=>{e.classList.add("js-toggle--initialized"),e.addEventListener("click",(t=>{e.classList.contains("js-not-stop")||(t.preventDefault(),t.stopPropagation()),function(e){const t=e.dataset.prefix||"this";let s=null;s="this"==e.dataset.toggled?[...e.closest(".js-this")]:[...document.querySelectorAll(e.dataset.toggled)],"true"==e.getAttribute("aria-expanded")?e.setAttribute("aria-expanded","true"):e.setAttribute("aria-expanded","false"),e.classList.toggle(t+"-is-active"),s&&s.length&&s.forEach((e=>{e.classList.toggle(t+"-is-active")})),e.dataset.removeClass&&document.querySelector("."+e.dataset.removeClass).classList.remove(e.dataset.removeClass)}(e)}))})),[...v.querySelectorAll(".js-toggle-parent:not(.js-toggle-parent--initialized)")].forEach((e=>{e.classList.add("js-toggle-parent--initialized"),e.addEventListener("click",(t=>{e.classList.contains("js-not-stop")||t.preventDefault(),e.classList.toggle("this-is-active"),e.parentElement.classList.toggle("this-is-active")}))}))};(0,s(575).Z)(o)},31:()=>{},705:()=>{},171:()=>{},824:()=>{},752:()=>{},484:()=>{},570:()=>{},358:()=>{},959:()=>{},188:()=>{},245:()=>{},8:()=>{},696:()=>{},617:()=>{},786:()=>{},59:()=>{},701:()=>{},182:()=>{},675:()=>{},422:()=>{},819:()=>{},949:()=>{},344:()=>{},966:()=>{},765:()=>{},875:()=>{},728:()=>{},815:()=>{},14:()=>{},262:()=>{},54:()=>{},139:()=>{},906:()=>{},193:()=>{},365:()=>{},958:()=>{},493:()=>{},550:()=>{},881:()=>{},454:()=>{},479:()=>{},99:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[575],(()=>(t(813),t(31),t(705),t(171),t(824),t(752),t(484),t(570),t(358),t(959),t(99),t(728),t(875),t(188),t(245),t(786),t(59),t(906),t(815),t(14),t(262),t(54),t(139),t(8),t(696),t(617),t(701),t(675),t(182),t(422),t(949),t(819),t(344),t(966),t(765),t(193),t(365),t(958),t(493),t(550),t(881),t(454),t(479)))),e.O()}]);