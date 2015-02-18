/*! Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);

/*
 * Swiper 2.7.6
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: February 11, 2015
*/
var Swiper=function(a,b){"use strict";function c(a,b){return document.querySelectorAll?(b||document).querySelectorAll(a):jQuery(a,b)}function d(a){return"[object Array]"===Object.prototype.toString.apply(a)?!0:!1}function e(){var a=G-J;return b.freeMode&&(a=G-J),b.slidesPerView>D.slides.length&&!b.centeredSlides&&(a=0),0>a&&(a=0),a}function f(){function a(a){var c,d,e=function(){"undefined"!=typeof D&&null!==D&&(void 0!==D.imagesLoaded&&D.imagesLoaded++,D.imagesLoaded===D.imagesToLoad.length&&(D.reInit(),b.onImagesReady&&D.fireCallback(b.onImagesReady,D)))};a.complete?e():(d=a.currentSrc||a.getAttribute("src"),d?(c=new Image,c.onload=e,c.onerror=e,c.src=d):e())}var d=D.h.addEventListener,e="wrapper"===b.eventTarget?D.wrapper:D.container;if(D.browser.ie10||D.browser.ie11?(d(e,D.touchEvents.touchStart,p),d(document,D.touchEvents.touchMove,q),d(document,D.touchEvents.touchEnd,r)):(D.support.touch&&(d(e,"touchstart",p),d(e,"touchmove",q),d(e,"touchend",r)),b.simulateTouch&&(d(e,"mousedown",p),d(document,"mousemove",q),d(document,"mouseup",r))),b.autoResize&&d(window,"resize",D.resizeFix),g(),D._wheelEvent=!1,b.mousewheelControl){if(void 0!==document.onmousewheel&&(D._wheelEvent="mousewheel"),!D._wheelEvent)try{new WheelEvent("wheel"),D._wheelEvent="wheel"}catch(f){}D._wheelEvent||(D._wheelEvent="DOMMouseScroll"),D._wheelEvent&&d(D.container,D._wheelEvent,j)}if(b.keyboardControl&&d(document,"keydown",i),b.updateOnImagesReady){D.imagesToLoad=c("img",D.container);for(var h=0;h<D.imagesToLoad.length;h++)a(D.imagesToLoad[h])}}function g(){var a,d=D.h.addEventListener;if(b.preventLinks){var e=c("a",D.container);for(a=0;a<e.length;a++)d(e[a],"click",n)}if(b.releaseFormElements){var f=c("input, textarea, select",D.container);for(a=0;a<f.length;a++)d(f[a],D.touchEvents.touchStart,o,!0),D.support.touch&&b.simulateTouch&&d(f[a],"mousedown",o,!0)}if(b.onSlideClick)for(a=0;a<D.slides.length;a++)d(D.slides[a],"click",k);if(b.onSlideTouch)for(a=0;a<D.slides.length;a++)d(D.slides[a],D.touchEvents.touchStart,l)}function h(){var a,d=D.h.removeEventListener;if(b.onSlideClick)for(a=0;a<D.slides.length;a++)d(D.slides[a],"click",k);if(b.onSlideTouch)for(a=0;a<D.slides.length;a++)d(D.slides[a],D.touchEvents.touchStart,l);if(b.releaseFormElements){var e=c("input, textarea, select",D.container);for(a=0;a<e.length;a++)d(e[a],D.touchEvents.touchStart,o,!0),D.support.touch&&b.simulateTouch&&d(e[a],"mousedown",o,!0)}if(b.preventLinks){var f=c("a",D.container);for(a=0;a<f.length;a++)d(f[a],"click",n)}}function i(a){var b=a.keyCode||a.charCode;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey)){if(37===b||39===b||38===b||40===b){for(var c=!1,d=D.h.getOffset(D.container),e=D.h.windowScroll().left,f=D.h.windowScroll().top,g=D.h.windowWidth(),h=D.h.windowHeight(),i=[[d.left,d.top],[d.left+D.width,d.top],[d.left,d.top+D.height],[d.left+D.width,d.top+D.height]],j=0;j<i.length;j++){var k=i[j];k[0]>=e&&k[0]<=e+g&&k[1]>=f&&k[1]<=f+h&&(c=!0)}if(!c)return}N?((37===b||39===b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),39===b&&D.swipeNext(),37===b&&D.swipePrev()):((38===b||40===b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),40===b&&D.swipeNext(),38===b&&D.swipePrev())}}function j(a){var c=D._wheelEvent,d=0;if(a.detail)d=-a.detail;else if("mousewheel"===c)if(b.mousewheelControlForceToAxis)if(N){if(!(Math.abs(a.wheelDeltaX)>Math.abs(a.wheelDeltaY)))return;d=a.wheelDeltaX}else{if(!(Math.abs(a.wheelDeltaY)>Math.abs(a.wheelDeltaX)))return;d=a.wheelDeltaY}else d=a.wheelDelta;else if("DOMMouseScroll"===c)d=-a.detail;else if("wheel"===c)if(b.mousewheelControlForceToAxis)if(N){if(!(Math.abs(a.deltaX)>Math.abs(a.deltaY)))return;d=-a.deltaX}else{if(!(Math.abs(a.deltaY)>Math.abs(a.deltaX)))return;d=-a.deltaY}else d=Math.abs(a.deltaX)>Math.abs(a.deltaY)?-a.deltaX:-a.deltaY;if(b.freeMode){var f=D.getWrapperTranslate()+d;if(f>0&&(f=0),f<-e()&&(f=-e()),D.setWrapperTransition(0),D.setWrapperTranslate(f),D.updateActiveSlide(f),0===f||f===-e())return}else(new Date).getTime()-V>60&&(0>d?D.swipeNext():D.swipePrev()),V=(new Date).getTime();return b.autoplay&&D.stopAutoplay(!0),a.preventDefault?a.preventDefault():a.returnValue=!1,!1}function k(a){D.allowSlideClick&&(m(a),D.fireCallback(b.onSlideClick,D,a))}function l(a){m(a),D.fireCallback(b.onSlideTouch,D,a)}function m(a){if(a.currentTarget)D.clickedSlide=a.currentTarget;else{var c=a.srcElement;do{if(c.className.indexOf(b.slideClass)>-1)break;c=c.parentNode}while(c);D.clickedSlide=c}D.clickedSlideIndex=D.slides.indexOf(D.clickedSlide),D.clickedSlideLoopIndex=D.clickedSlideIndex-(D.loopedSlides||0)}function n(a){return D.allowLinks?void 0:(a.preventDefault?a.preventDefault():a.returnValue=!1,b.preventLinksPropagation&&"stopPropagation"in a&&a.stopPropagation(),!1)}function o(a){return a.stopPropagation?a.stopPropagation():a.returnValue=!1,!1}function p(a){if(b.preventLinks&&(D.allowLinks=!0),D.isTouched||b.onlyExternal)return!1;var c=a.target||a.srcElement;document.activeElement&&document.activeElement!==document.body&&document.activeElement!==c&&document.activeElement.blur();var d="input select textarea".split(" ");if(b.noSwiping&&c&&t(c))return!1;if(_=!1,D.isTouched=!0,$="touchstart"===a.type,!$&&"which"in a&&3===a.which)return D.isTouched=!1,!1;if(!$||1===a.targetTouches.length){D.callPlugins("onTouchStartBegin"),!$&&!D.isAndroid&&d.indexOf(c.tagName.toLowerCase())<0&&(a.preventDefault?a.preventDefault():a.returnValue=!1);var e=$?a.targetTouches[0].pageX:a.pageX||a.clientX,f=$?a.targetTouches[0].pageY:a.pageY||a.clientY;D.touches.startX=D.touches.currentX=e,D.touches.startY=D.touches.currentY=f,D.touches.start=D.touches.current=N?e:f,D.setWrapperTransition(0),D.positions.start=D.positions.current=D.getWrapperTranslate(),D.setWrapperTranslate(D.positions.start),D.times.start=(new Date).getTime(),I=void 0,b.moveStartThreshold>0&&(X=!1),b.onTouchStart&&D.fireCallback(b.onTouchStart,D,a),D.callPlugins("onTouchStartEnd")}}function q(a){if(D.isTouched&&!b.onlyExternal&&(!$||"mousemove"!==a.type)){var c=$?a.targetTouches[0].pageX:a.pageX||a.clientX,d=$?a.targetTouches[0].pageY:a.pageY||a.clientY;if("undefined"==typeof I&&N&&(I=!!(I||Math.abs(d-D.touches.startY)>Math.abs(c-D.touches.startX))),"undefined"!=typeof I||N||(I=!!(I||Math.abs(d-D.touches.startY)<Math.abs(c-D.touches.startX))),I)return void(D.isTouched=!1);if(N){if(!b.swipeToNext&&c<D.touches.startX||!b.swipeToPrev&&c>D.touches.startX)return}else if(!b.swipeToNext&&d<D.touches.startY||!b.swipeToPrev&&d>D.touches.startY)return;if(a.assignedToSwiper)return void(D.isTouched=!1);if(a.assignedToSwiper=!0,b.preventLinks&&(D.allowLinks=!1),b.onSlideClick&&(D.allowSlideClick=!1),b.autoplay&&D.stopAutoplay(!0),!$||1===a.touches.length){if(D.isMoved||(D.callPlugins("onTouchMoveStart"),b.loop&&(D.fixLoop(),D.positions.start=D.getWrapperTranslate()),b.onTouchMoveStart&&D.fireCallback(b.onTouchMoveStart,D)),D.isMoved=!0,a.preventDefault?a.preventDefault():a.returnValue=!1,D.touches.current=N?c:d,D.positions.current=(D.touches.current-D.touches.start)*b.touchRatio+D.positions.start,D.positions.current>0&&b.onResistanceBefore&&D.fireCallback(b.onResistanceBefore,D,D.positions.current),D.positions.current<-e()&&b.onResistanceAfter&&D.fireCallback(b.onResistanceAfter,D,Math.abs(D.positions.current+e())),b.resistance&&"100%"!==b.resistance){var f;if(D.positions.current>0&&(f=1-D.positions.current/J/2,D.positions.current=.5>f?J/2:D.positions.current*f),D.positions.current<-e()){var g=(D.touches.current-D.touches.start)*b.touchRatio+(e()+D.positions.start);f=(J+g)/J;var h=D.positions.current-g*(1-f)/2,i=-e()-J/2;D.positions.current=i>h||0>=f?i:h}}if(b.resistance&&"100%"===b.resistance&&(D.positions.current>0&&(!b.freeMode||b.freeModeFluid)&&(D.positions.current=0),D.positions.current<-e()&&(!b.freeMode||b.freeModeFluid)&&(D.positions.current=-e())),!b.followFinger)return;if(b.moveStartThreshold)if(Math.abs(D.touches.current-D.touches.start)>b.moveStartThreshold||X){if(!X)return X=!0,void(D.touches.start=D.touches.current);D.setWrapperTranslate(D.positions.current)}else D.positions.current=D.positions.start;else D.setWrapperTranslate(D.positions.current);return(b.freeMode||b.watchActiveIndex)&&D.updateActiveSlide(D.positions.current),b.grabCursor&&(D.container.style.cursor="move",D.container.style.cursor="grabbing",D.container.style.cursor="-moz-grabbin",D.container.style.cursor="-webkit-grabbing"),Y||(Y=D.touches.current),Z||(Z=(new Date).getTime()),D.velocity=(D.touches.current-Y)/((new Date).getTime()-Z)/2,Math.abs(D.touches.current-Y)<2&&(D.velocity=0),Y=D.touches.current,Z=(new Date).getTime(),D.callPlugins("onTouchMoveEnd"),b.onTouchMove&&D.fireCallback(b.onTouchMove,D,a),!1}}}function r(a){if(I&&D.swipeReset(),!b.onlyExternal&&D.isTouched){D.isTouched=!1,b.grabCursor&&(D.container.style.cursor="move",D.container.style.cursor="grab",D.container.style.cursor="-moz-grab",D.container.style.cursor="-webkit-grab"),D.positions.current||0===D.positions.current||(D.positions.current=D.positions.start),b.followFinger&&D.setWrapperTranslate(D.positions.current),D.times.end=(new Date).getTime(),D.touches.diff=D.touches.current-D.touches.start,D.touches.abs=Math.abs(D.touches.diff),D.positions.diff=D.positions.current-D.positions.start,D.positions.abs=Math.abs(D.positions.diff);var c=D.positions.diff,d=D.positions.abs,f=D.times.end-D.times.start;5>d&&300>f&&D.allowLinks===!1&&(b.freeMode||0===d||D.swipeReset(),b.preventLinks&&(D.allowLinks=!0),b.onSlideClick&&(D.allowSlideClick=!0)),setTimeout(function(){"undefined"!=typeof D&&null!==D&&(b.preventLinks&&(D.allowLinks=!0),b.onSlideClick&&(D.allowSlideClick=!0))},100);var g=e();if(!D.isMoved&&b.freeMode)return D.isMoved=!1,b.onTouchEnd&&D.fireCallback(b.onTouchEnd,D,a),void D.callPlugins("onTouchEnd");if(!D.isMoved||D.positions.current>0||D.positions.current<-g)return D.swipeReset(),b.onTouchEnd&&D.fireCallback(b.onTouchEnd,D,a),void D.callPlugins("onTouchEnd");if(D.isMoved=!1,b.freeMode){if(b.freeModeFluid){var h,i=1e3*b.momentumRatio,j=D.velocity*i,k=D.positions.current+j,l=!1,m=20*Math.abs(D.velocity)*b.momentumBounceRatio;-g>k&&(b.momentumBounce&&D.support.transitions?(-m>k+g&&(k=-g-m),h=-g,l=!0,_=!0):k=-g),k>0&&(b.momentumBounce&&D.support.transitions?(k>m&&(k=m),h=0,l=!0,_=!0):k=0),0!==D.velocity&&(i=Math.abs((k-D.positions.current)/D.velocity)),D.setWrapperTranslate(k),D.setWrapperTransition(i),b.momentumBounce&&l&&D.wrapperTransitionEnd(function(){_&&(b.onMomentumBounce&&D.fireCallback(b.onMomentumBounce,D),D.callPlugins("onMomentumBounce"),D.setWrapperTranslate(h),D.setWrapperTransition(300))}),D.updateActiveSlide(k)}return(!b.freeModeFluid||f>=300)&&D.updateActiveSlide(D.positions.current),b.onTouchEnd&&D.fireCallback(b.onTouchEnd,D,a),void D.callPlugins("onTouchEnd")}H=0>c?"toNext":"toPrev","toNext"===H&&300>=f&&(30>d||!b.shortSwipes?D.swipeReset():D.swipeNext(!0,!0)),"toPrev"===H&&300>=f&&(30>d||!b.shortSwipes?D.swipeReset():D.swipePrev(!0,!0));var n=0;if("auto"===b.slidesPerView){for(var o,p=Math.abs(D.getWrapperTranslate()),q=0,r=0;r<D.slides.length;r++)if(o=N?D.slides[r].getWidth(!0,b.roundLengths):D.slides[r].getHeight(!0,b.roundLengths),q+=o,q>p){n=o;break}n>J&&(n=J)}else n=F*b.slidesPerView;"toNext"===H&&f>300&&(d>=n*b.longSwipesRatio?D.swipeNext(!0,!0):D.swipeReset()),"toPrev"===H&&f>300&&(d>=n*b.longSwipesRatio?D.swipePrev(!0,!0):D.swipeReset()),b.onTouchEnd&&D.fireCallback(b.onTouchEnd,D,a),D.callPlugins("onTouchEnd")}}function s(a,b){return a&&a.getAttribute("class")&&a.getAttribute("class").indexOf(b)>-1}function t(a){var c=!1;do s(a,b.noSwipingClass)&&(c=!0),a=a.parentElement;while(!c&&a.parentElement&&!s(a,b.wrapperClass));return!c&&s(a,b.wrapperClass)&&s(a,b.noSwipingClass)&&(c=!0),c}function u(a,b){var c,d=document.createElement("div");return d.innerHTML=b,c=d.firstChild,c.className+=" "+a,c.outerHTML}function v(a,c,d){function e(){var f=+new Date,l=f-g;h+=i*l/(1e3/60),k="toNext"===j?h>a:a>h,k?(D.setWrapperTranslate(Math.ceil(h)),D._DOMAnimating=!0,window.setTimeout(function(){e()},1e3/60)):(b.onSlideChangeEnd&&("to"===c?d.runCallbacks===!0&&D.fireCallback(b.onSlideChangeEnd,D,j):D.fireCallback(b.onSlideChangeEnd,D,j)),D.setWrapperTranslate(a),D._DOMAnimating=!1)}var f="to"===c&&d.speed>=0?d.speed:b.speed,g=+new Date;if(D.support.transitions||!b.DOMAnimation)D.setWrapperTranslate(a),D.setWrapperTransition(f);else{var h=D.getWrapperTranslate(),i=Math.ceil((a-h)/f*(1e3/60)),j=h>a?"toNext":"toPrev",k="toNext"===j?h>a:a>h;if(D._DOMAnimating)return;e()}D.updateActiveSlide(a),b.onSlideNext&&"next"===c&&d.runCallbacks===!0&&D.fireCallback(b.onSlideNext,D,a),b.onSlidePrev&&"prev"===c&&d.runCallbacks===!0&&D.fireCallback(b.onSlidePrev,D,a),b.onSlideReset&&"reset"===c&&d.runCallbacks===!0&&D.fireCallback(b.onSlideReset,D,a),"next"!==c&&"prev"!==c&&"to"!==c||d.runCallbacks!==!0||w(c)}function w(a){if(D.callPlugins("onSlideChangeStart"),b.onSlideChangeStart)if(b.queueStartCallbacks&&D.support.transitions){if(D._queueStartCallbacks)return;D._queueStartCallbacks=!0,D.fireCallback(b.onSlideChangeStart,D,a),D.wrapperTransitionEnd(function(){D._queueStartCallbacks=!1})}else D.fireCallback(b.onSlideChangeStart,D,a);if(b.onSlideChangeEnd)if(D.support.transitions)if(b.queueEndCallbacks){if(D._queueEndCallbacks)return;D._queueEndCallbacks=!0,D.wrapperTransitionEnd(function(c){D.fireCallback(b.onSlideChangeEnd,c,a)})}else D.wrapperTransitionEnd(function(c){D.fireCallback(b.onSlideChangeEnd,c,a)});else b.DOMAnimation||setTimeout(function(){D.fireCallback(b.onSlideChangeEnd,D,a)},10)}function x(){var a=D.paginationButtons;if(a)for(var b=0;b<a.length;b++)D.h.removeEventListener(a[b],"click",z)}function y(){var a=D.paginationButtons;if(a)for(var b=0;b<a.length;b++)D.h.addEventListener(a[b],"click",z)}function z(a){for(var c,d=a.target||a.srcElement,e=D.paginationButtons,f=0;f<e.length;f++)d===e[f]&&(c=f);b.autoplay&&D.stopAutoplay(!0),D.swipeTo(c)}function A(){ab=setTimeout(function(){b.loop?(D.fixLoop(),D.swipeNext(!0,!0)):D.swipeNext(!0,!0)||(b.autoplayStopOnLast?(clearTimeout(ab),ab=void 0):D.swipeTo(0)),D.wrapperTransitionEnd(function(){"undefined"!=typeof ab&&A()})},b.autoplay)}function B(){D.calcSlides(),b.loader.slides.length>0&&0===D.slides.length&&D.loadSlides(),b.loop&&D.createLoop(),D.init(),f(),b.pagination&&D.createPagination(!0),b.loop||b.initialSlide>0?D.swipeTo(b.initialSlide,0,!1):D.updateActiveSlide(0),b.autoplay&&D.startAutoplay(),D.centerIndex=D.activeIndex,b.onSwiperCreated&&D.fireCallback(b.onSwiperCreated,D),D.callPlugins("onSwiperCreated")}if(!document.body.outerHTML&&document.body.__defineGetter__&&HTMLElement){var C=HTMLElement.prototype;C.__defineGetter__&&C.__defineGetter__("outerHTML",function(){return(new XMLSerializer).serializeToString(this)})}if(window.getComputedStyle||(window.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"===b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:null},this}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){for(var c=b||0,d=this.length;d>c;c++)if(this[c]===a)return c;return-1}),(document.querySelectorAll||window.jQuery)&&"undefined"!=typeof a&&(a.nodeType||0!==c(a).length)){var D=this;D.touches={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,diff:0,abs:0},D.positions={start:0,abs:0,diff:0,current:0},D.times={start:0,end:0},D.id=(new Date).getTime(),D.container=a.nodeType?a:c(a)[0],D.isTouched=!1,D.isMoved=!1,D.activeIndex=0,D.centerIndex=0,D.activeLoaderIndex=0,D.activeLoopIndex=0,D.previousIndex=null,D.velocity=0,D.snapGrid=[],D.slidesGrid=[],D.imagesToLoad=[],D.imagesLoaded=0,D.wrapperLeft=0,D.wrapperRight=0,D.wrapperTop=0,D.wrapperBottom=0,D.isAndroid=navigator.userAgent.toLowerCase().indexOf("android")>=0;var E,F,G,H,I,J,K={eventTarget:"wrapper",mode:"horizontal",touchRatio:1,speed:300,freeMode:!1,freeModeFluid:!1,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,slidesPerView:1,slidesPerGroup:1,slidesPerViewFit:!0,simulateTouch:!0,followFinger:!0,shortSwipes:!0,longSwipesRatio:.5,moveStartThreshold:!1,onlyExternal:!1,createPagination:!0,pagination:!1,paginationElement:"span",paginationClickable:!1,paginationAsRange:!0,resistance:!0,scrollContainer:!1,preventLinks:!0,preventLinksPropagation:!1,noSwiping:!1,noSwipingClass:"swiper-no-swiping",initialSlide:0,keyboardControl:!1,mousewheelControl:!1,mousewheelControlForceToAxis:!1,useCSS3Transforms:!0,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,loop:!1,loopAdditionalSlides:0,roundLengths:!1,calculateHeight:!1,cssWidthAndHeight:!1,updateOnImagesReady:!0,releaseFormElements:!0,watchActiveIndex:!1,visibilityFullFit:!1,offsetPxBefore:0,offsetPxAfter:0,offsetSlidesBefore:0,offsetSlidesAfter:0,centeredSlides:!1,queueStartCallbacks:!1,queueEndCallbacks:!1,autoResize:!0,resizeReInit:!1,DOMAnimation:!0,loader:{slides:[],slidesHTMLType:"inner",surroundGroups:1,logic:"reload",loadAllSlides:!1},swipeToPrev:!0,swipeToNext:!0,slideElement:"div",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",wrapperClass:"swiper-wrapper",paginationElementClass:"swiper-pagination-switch",paginationActiveClass:"swiper-active-switch",paginationVisibleClass:"swiper-visible-switch"};b=b||{};for(var L in K)if(L in b&&"object"==typeof b[L])for(var M in K[L])M in b[L]||(b[L][M]=K[L][M]);else L in b||(b[L]=K[L]);D.params=b,b.scrollContainer&&(b.freeMode=!0,b.freeModeFluid=!0),b.loop&&(b.resistance="100%");var N="horizontal"===b.mode,O=["mousedown","mousemove","mouseup"];D.browser.ie10&&(O=["MSPointerDown","MSPointerMove","MSPointerUp"]),D.browser.ie11&&(O=["pointerdown","pointermove","pointerup"]),D.touchEvents={touchStart:D.support.touch||!b.simulateTouch?"touchstart":O[0],touchMove:D.support.touch||!b.simulateTouch?"touchmove":O[1],touchEnd:D.support.touch||!b.simulateTouch?"touchend":O[2]};for(var P=D.container.childNodes.length-1;P>=0;P--)if(D.container.childNodes[P].className)for(var Q=D.container.childNodes[P].className.split(/\s+/),R=0;R<Q.length;R++)Q[R]===b.wrapperClass&&(E=D.container.childNodes[P]);D.wrapper=E,D._extendSwiperSlide=function(a){return a.append=function(){return b.loop?a.insertAfter(D.slides.length-D.loopedSlides):(D.wrapper.appendChild(a),D.reInit()),a},a.prepend=function(){return b.loop?(D.wrapper.insertBefore(a,D.slides[D.loopedSlides]),D.removeLoopedSlides(),D.calcSlides(),D.createLoop()):D.wrapper.insertBefore(a,D.wrapper.firstChild),D.reInit(),a},a.insertAfter=function(c){if("undefined"==typeof c)return!1;var d;return b.loop?(d=D.slides[c+1+D.loopedSlides],d?D.wrapper.insertBefore(a,d):D.wrapper.appendChild(a),D.removeLoopedSlides(),D.calcSlides(),D.createLoop()):(d=D.slides[c+1],D.wrapper.insertBefore(a,d)),D.reInit(),a},a.clone=function(){return D._extendSwiperSlide(a.cloneNode(!0))},a.remove=function(){D.wrapper.removeChild(a),D.reInit()},a.html=function(b){return"undefined"==typeof b?a.innerHTML:(a.innerHTML=b,a)},a.index=function(){for(var b,c=D.slides.length-1;c>=0;c--)a===D.slides[c]&&(b=c);return b},a.isActive=function(){return a.index()===D.activeIndex?!0:!1},a.swiperSlideDataStorage||(a.swiperSlideDataStorage={}),a.getData=function(b){return a.swiperSlideDataStorage[b]},a.setData=function(b,c){return a.swiperSlideDataStorage[b]=c,a},a.data=function(b,c){return"undefined"==typeof c?a.getAttribute("data-"+b):(a.setAttribute("data-"+b,c),a)},a.getWidth=function(b,c){return D.h.getWidth(a,b,c)},a.getHeight=function(b,c){return D.h.getHeight(a,b,c)},a.getOffset=function(){return D.h.getOffset(a)},a},D.calcSlides=function(a){var c=D.slides?D.slides.length:!1;D.slides=[],D.displaySlides=[];for(var d=0;d<D.wrapper.childNodes.length;d++)if(D.wrapper.childNodes[d].className)for(var e=D.wrapper.childNodes[d].className,f=e.split(/\s+/),i=0;i<f.length;i++)f[i]===b.slideClass&&D.slides.push(D.wrapper.childNodes[d]);for(d=D.slides.length-1;d>=0;d--)D._extendSwiperSlide(D.slides[d]);c!==!1&&(c!==D.slides.length||a)&&(h(),g(),D.updateActiveSlide(),D.params.pagination&&D.createPagination(),D.callPlugins("numberOfSlidesChanged"))},D.createSlide=function(a,c,d){c=c||D.params.slideClass,d=d||b.slideElement;var e=document.createElement(d);return e.innerHTML=a||"",e.className=c,D._extendSwiperSlide(e)},D.appendSlide=function(a,b,c){return a?a.nodeType?D._extendSwiperSlide(a).append():D.createSlide(a,b,c).append():void 0},D.prependSlide=function(a,b,c){return a?a.nodeType?D._extendSwiperSlide(a).prepend():D.createSlide(a,b,c).prepend():void 0},D.insertSlideAfter=function(a,b,c,d){return"undefined"==typeof a?!1:b.nodeType?D._extendSwiperSlide(b).insertAfter(a):D.createSlide(b,c,d).insertAfter(a)},D.removeSlide=function(a){if(D.slides[a]){if(b.loop){if(!D.slides[a+D.loopedSlides])return!1;D.slides[a+D.loopedSlides].remove(),D.removeLoopedSlides(),D.calcSlides(),D.createLoop()}else D.slides[a].remove();return!0}return!1},D.removeLastSlide=function(){return D.slides.length>0?(b.loop?(D.slides[D.slides.length-1-D.loopedSlides].remove(),D.removeLoopedSlides(),D.calcSlides(),D.createLoop()):D.slides[D.slides.length-1].remove(),!0):!1},D.removeAllSlides=function(){for(var a=D.slides.length,b=D.slides.length-1;b>=0;b--)D.slides[b].remove(),b===a-1&&D.setWrapperTranslate(0)},D.getSlide=function(a){return D.slides[a]},D.getLastSlide=function(){return D.slides[D.slides.length-1]},D.getFirstSlide=function(){return D.slides[0]},D.activeSlide=function(){return D.slides[D.activeIndex]},D.fireCallback=function(){var a=arguments[0];if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)"function"==typeof a[c]&&a[c](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);else"[object String]"===Object.prototype.toString.call(a)?b["on"+a]&&D.fireCallback(b["on"+a],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]):a(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},D.addCallback=function(a,b){var c,e=this;return e.params["on"+a]?d(this.params["on"+a])?this.params["on"+a].push(b):"function"==typeof this.params["on"+a]?(c=this.params["on"+a],this.params["on"+a]=[],this.params["on"+a].push(c),this.params["on"+a].push(b)):void 0:(this.params["on"+a]=[],this.params["on"+a].push(b))},D.removeCallbacks=function(a){D.params["on"+a]&&(D.params["on"+a]=null)};var S=[];for(var T in D.plugins)if(b[T]){var U=D.plugins[T](D,b[T]);U&&S.push(U)}D.callPlugins=function(a,b){b||(b={});for(var c=0;c<S.length;c++)a in S[c]&&S[c][a](b)},!D.browser.ie10&&!D.browser.ie11||b.onlyExternal||D.wrapper.classList.add("swiper-wp8-"+(N?"horizontal":"vertical")),b.freeMode&&(D.container.className+=" swiper-free-mode"),D.initialized=!1,D.init=function(a,c){var d=D.h.getWidth(D.container,!1,b.roundLengths),e=D.h.getHeight(D.container,!1,b.roundLengths);if(d!==D.width||e!==D.height||a){D.width=d,D.height=e;var f,g,h,i,j,k,l;J=N?d:e;var m=D.wrapper;if(a&&D.calcSlides(c),"auto"===b.slidesPerView){var n=0,o=0;b.slidesOffset>0&&(m.style.paddingLeft="",m.style.paddingRight="",m.style.paddingTop="",m.style.paddingBottom=""),m.style.width="",m.style.height="",b.offsetPxBefore>0&&(N?D.wrapperLeft=b.offsetPxBefore:D.wrapperTop=b.offsetPxBefore),b.offsetPxAfter>0&&(N?D.wrapperRight=b.offsetPxAfter:D.wrapperBottom=b.offsetPxAfter),b.centeredSlides&&(N?(D.wrapperLeft=(J-this.slides[0].getWidth(!0,b.roundLengths))/2,D.wrapperRight=(J-D.slides[D.slides.length-1].getWidth(!0,b.roundLengths))/2):(D.wrapperTop=(J-D.slides[0].getHeight(!0,b.roundLengths))/2,D.wrapperBottom=(J-D.slides[D.slides.length-1].getHeight(!0,b.roundLengths))/2)),N?(D.wrapperLeft>=0&&(m.style.paddingLeft=D.wrapperLeft+"px"),D.wrapperRight>=0&&(m.style.paddingRight=D.wrapperRight+"px")):(D.wrapperTop>=0&&(m.style.paddingTop=D.wrapperTop+"px"),D.wrapperBottom>=0&&(m.style.paddingBottom=D.wrapperBottom+"px")),k=0;var p=0;for(D.snapGrid=[],D.slidesGrid=[],h=0,l=0;l<D.slides.length;l++){f=D.slides[l].getWidth(!0,b.roundLengths),g=D.slides[l].getHeight(!0,b.roundLengths),b.calculateHeight&&(h=Math.max(h,g));var q=N?f:g;if(b.centeredSlides){var r=l===D.slides.length-1?0:D.slides[l+1].getWidth(!0,b.roundLengths),s=l===D.slides.length-1?0:D.slides[l+1].getHeight(!0,b.roundLengths),t=N?r:s;if(q>J){if(b.slidesPerViewFit)D.snapGrid.push(k+D.wrapperLeft),D.snapGrid.push(k+q-J+D.wrapperLeft);else for(var u=0;u<=Math.floor(q/(J+D.wrapperLeft));u++)D.snapGrid.push(0===u?k+D.wrapperLeft:k+D.wrapperLeft+J*u);D.slidesGrid.push(k+D.wrapperLeft)}else D.snapGrid.push(p),D.slidesGrid.push(p);p+=q/2+t/2}else{if(q>J)if(b.slidesPerViewFit)D.snapGrid.push(k),D.snapGrid.push(k+q-J);else if(0!==J)for(var v=0;v<=Math.floor(q/J);v++)D.snapGrid.push(k+J*v);else D.snapGrid.push(k);else D.snapGrid.push(k);D.slidesGrid.push(k)}k+=q,n+=f,o+=g}b.calculateHeight&&(D.height=h),N?(G=n+D.wrapperRight+D.wrapperLeft,b.cssWidthAndHeight&&"height"!==b.cssWidthAndHeight||(m.style.width=n+"px"),b.cssWidthAndHeight&&"width"!==b.cssWidthAndHeight||(m.style.height=D.height+"px")):(b.cssWidthAndHeight&&"height"!==b.cssWidthAndHeight||(m.style.width=D.width+"px"),b.cssWidthAndHeight&&"width"!==b.cssWidthAndHeight||(m.style.height=o+"px"),G=o+D.wrapperTop+D.wrapperBottom)}else if(b.scrollContainer)m.style.width="",m.style.height="",i=D.slides[0].getWidth(!0,b.roundLengths),j=D.slides[0].getHeight(!0,b.roundLengths),G=N?i:j,m.style.width=i+"px",m.style.height=j+"px",F=N?i:j;else{if(b.calculateHeight){for(h=0,j=0,N||(D.container.style.height=""),m.style.height="",l=0;l<D.slides.length;l++)D.slides[l].style.height="",h=Math.max(D.slides[l].getHeight(!0),h),N||(j+=D.slides[l].getHeight(!0));g=h,D.height=g,N?j=g:(J=g,D.container.style.height=J+"px")}else g=N?D.height:D.height/b.slidesPerView,b.roundLengths&&(g=Math.ceil(g)),j=N?D.height:D.slides.length*g;for(f=N?D.width/b.slidesPerView:D.width,b.roundLengths&&(f=Math.ceil(f)),i=N?D.slides.length*f:D.width,F=N?f:g,b.offsetSlidesBefore>0&&(N?D.wrapperLeft=F*b.offsetSlidesBefore:D.wrapperTop=F*b.offsetSlidesBefore),b.offsetSlidesAfter>0&&(N?D.wrapperRight=F*b.offsetSlidesAfter:D.wrapperBottom=F*b.offsetSlidesAfter),b.offsetPxBefore>0&&(N?D.wrapperLeft=b.offsetPxBefore:D.wrapperTop=b.offsetPxBefore),b.offsetPxAfter>0&&(N?D.wrapperRight=b.offsetPxAfter:D.wrapperBottom=b.offsetPxAfter),b.centeredSlides&&(N?(D.wrapperLeft=(J-F)/2,D.wrapperRight=(J-F)/2):(D.wrapperTop=(J-F)/2,D.wrapperBottom=(J-F)/2)),N?(D.wrapperLeft>0&&(m.style.paddingLeft=D.wrapperLeft+"px"),D.wrapperRight>0&&(m.style.paddingRight=D.wrapperRight+"px")):(D.wrapperTop>0&&(m.style.paddingTop=D.wrapperTop+"px"),D.wrapperBottom>0&&(m.style.paddingBottom=D.wrapperBottom+"px")),G=N?i+D.wrapperRight+D.wrapperLeft:j+D.wrapperTop+D.wrapperBottom,parseFloat(i)>0&&(!b.cssWidthAndHeight||"height"===b.cssWidthAndHeight)&&(m.style.width=i+"px"),parseFloat(j)>0&&(!b.cssWidthAndHeight||"width"===b.cssWidthAndHeight)&&(m.style.height=j+"px"),k=0,D.snapGrid=[],D.slidesGrid=[],l=0;l<D.slides.length;l++)D.snapGrid.push(k),D.slidesGrid.push(k),k+=F,parseFloat(f)>0&&(!b.cssWidthAndHeight||"height"===b.cssWidthAndHeight)&&(D.slides[l].style.width=f+"px"),parseFloat(g)>0&&(!b.cssWidthAndHeight||"width"===b.cssWidthAndHeight)&&(D.slides[l].style.height=g+"px")}D.initialized?(D.callPlugins("onInit"),b.onInit&&D.fireCallback(b.onInit,D)):(D.callPlugins("onFirstInit"),b.onFirstInit&&D.fireCallback(b.onFirstInit,D)),D.initialized=!0}},D.reInit=function(a){D.init(!0,a)},D.resizeFix=function(a){D.callPlugins("beforeResizeFix"),D.init(b.resizeReInit||a),b.freeMode?D.getWrapperTranslate()<-e()&&(D.setWrapperTransition(0),D.setWrapperTranslate(-e())):(D.swipeTo(b.loop?D.activeLoopIndex:D.activeIndex,0,!1),b.autoplay&&(D.support.transitions&&"undefined"!=typeof ab?"undefined"!=typeof ab&&(clearTimeout(ab),ab=void 0,D.startAutoplay()):"undefined"!=typeof bb&&(clearInterval(bb),bb=void 0,D.startAutoplay()))),D.callPlugins("afterResizeFix")},D.destroy=function(a){var c=D.h.removeEventListener,d="wrapper"===b.eventTarget?D.wrapper:D.container;if(D.browser.ie10||D.browser.ie11?(c(d,D.touchEvents.touchStart,p),c(document,D.touchEvents.touchMove,q),c(document,D.touchEvents.touchEnd,r)):(D.support.touch&&(c(d,"touchstart",p),c(d,"touchmove",q),c(d,"touchend",r)),b.simulateTouch&&(c(d,"mousedown",p),c(document,"mousemove",q),c(document,"mouseup",r))),b.autoResize&&c(window,"resize",D.resizeFix),h(),b.paginationClickable&&x(),b.mousewheelControl&&D._wheelEvent&&c(D.container,D._wheelEvent,j),b.keyboardControl&&c(document,"keydown",i),b.autoplay&&D.stopAutoplay(),a){D.wrapper.removeAttribute("style");for(var e=0;e<D.slides.length;e++)D.slides[e].removeAttribute("style")}D.callPlugins("onDestroy"),window.jQuery&&window.jQuery(D.container).data("swiper")&&window.jQuery(D.container).removeData("swiper"),window.Zepto&&window.Zepto(D.container).data("swiper")&&window.Zepto(D.container).removeData("swiper"),D=null},D.disableKeyboardControl=function(){b.keyboardControl=!1,D.h.removeEventListener(document,"keydown",i)},D.enableKeyboardControl=function(){b.keyboardControl=!0,D.h.addEventListener(document,"keydown",i)};var V=(new Date).getTime();if(D.disableMousewheelControl=function(){return D._wheelEvent?(b.mousewheelControl=!1,D.h.removeEventListener(D.container,D._wheelEvent,j),!0):!1},D.enableMousewheelControl=function(){return D._wheelEvent?(b.mousewheelControl=!0,D.h.addEventListener(D.container,D._wheelEvent,j),!0):!1},b.grabCursor){var W=D.container.style;W.cursor="move",W.cursor="grab",W.cursor="-moz-grab",W.cursor="-webkit-grab"}D.allowSlideClick=!0,D.allowLinks=!0;var X,Y,Z,$=!1,_=!0;D.swipeNext=function(a,c){"undefined"==typeof a&&(a=!0),!c&&b.loop&&D.fixLoop(),!c&&b.autoplay&&D.stopAutoplay(!0),D.callPlugins("onSwipeNext");var d=D.getWrapperTranslate().toFixed(2),f=d;if("auto"===b.slidesPerView){for(var g=0;g<D.snapGrid.length;g++)if(-d>=D.snapGrid[g].toFixed(2)&&-d<D.snapGrid[g+1].toFixed(2)){f=-D.snapGrid[g+1];break}}else{var h=F*b.slidesPerGroup;f=-(Math.floor(Math.abs(d)/Math.floor(h))*h+h)}return f<-e()&&(f=-e()),f===d?!1:(v(f,"next",{runCallbacks:a}),!0)},D.swipePrev=function(a,c){"undefined"==typeof a&&(a=!0),!c&&b.loop&&D.fixLoop(),!c&&b.autoplay&&D.stopAutoplay(!0),D.callPlugins("onSwipePrev");var d,e=Math.ceil(D.getWrapperTranslate());if("auto"===b.slidesPerView){d=0;for(var f=1;f<D.snapGrid.length;f++){if(-e===D.snapGrid[f]){d=-D.snapGrid[f-1];break}if(-e>D.snapGrid[f]&&-e<D.snapGrid[f+1]){d=-D.snapGrid[f];break}}}else{var g=F*b.slidesPerGroup;d=-(Math.ceil(-e/g)-1)*g}return d>0&&(d=0),d===e?!1:(v(d,"prev",{runCallbacks:a}),!0)},D.swipeReset=function(a){"undefined"==typeof a&&(a=!0),D.callPlugins("onSwipeReset");{var c,d=D.getWrapperTranslate(),f=F*b.slidesPerGroup;-e()}if("auto"===b.slidesPerView){c=0;for(var g=0;g<D.snapGrid.length;g++){if(-d===D.snapGrid[g])return;if(-d>=D.snapGrid[g]&&-d<D.snapGrid[g+1]){c=D.positions.diff>0?-D.snapGrid[g+1]:-D.snapGrid[g];break}}-d>=D.snapGrid[D.snapGrid.length-1]&&(c=-D.snapGrid[D.snapGrid.length-1]),d<=-e()&&(c=-e())}else c=0>d?Math.round(d/f)*f:0,d<=-e()&&(c=-e());return b.scrollContainer&&(c=0>d?d:0),c<-e()&&(c=-e()),b.scrollContainer&&J>F&&(c=0),c===d?!1:(v(c,"reset",{runCallbacks:a}),!0)},D.swipeTo=function(a,c,d){a=parseInt(a,10),D.callPlugins("onSwipeTo",{index:a,speed:c}),b.loop&&(a+=D.loopedSlides);var f=D.getWrapperTranslate();if(!(!isFinite(a)||a>D.slides.length-1||0>a)){var g;return g="auto"===b.slidesPerView?-D.slidesGrid[a]:-a*F,g<-e()&&(g=-e()),g===f?!1:("undefined"==typeof d&&(d=!0),v(g,"to",{index:a,speed:c,runCallbacks:d}),!0)}},D._queueStartCallbacks=!1,D._queueEndCallbacks=!1,D.updateActiveSlide=function(a){if(D.initialized&&0!==D.slides.length){D.previousIndex=D.activeIndex,"undefined"==typeof a&&(a=D.getWrapperTranslate()),a>0&&(a=0);var c;if("auto"===b.slidesPerView){if(D.activeIndex=D.slidesGrid.indexOf(-a),D.activeIndex<0){for(c=0;c<D.slidesGrid.length-1&&!(-a>D.slidesGrid[c]&&-a<D.slidesGrid[c+1]);c++);var d=Math.abs(D.slidesGrid[c]+a),e=Math.abs(D.slidesGrid[c+1]+a);
D.activeIndex=e>=d?c:c+1}}else D.activeIndex=Math[b.visibilityFullFit?"ceil":"round"](-a/F);if(D.activeIndex===D.slides.length&&(D.activeIndex=D.slides.length-1),D.activeIndex<0&&(D.activeIndex=0),D.slides[D.activeIndex]){if(D.calcVisibleSlides(a),D.support.classList){var f;for(c=0;c<D.slides.length;c++)f=D.slides[c],f.classList.remove(b.slideActiveClass),D.visibleSlides.indexOf(f)>=0?f.classList.add(b.slideVisibleClass):f.classList.remove(b.slideVisibleClass);D.slides[D.activeIndex].classList.add(b.slideActiveClass)}else{var g=new RegExp("\\s*"+b.slideActiveClass),h=new RegExp("\\s*"+b.slideVisibleClass);for(c=0;c<D.slides.length;c++)D.slides[c].className=D.slides[c].className.replace(g,"").replace(h,""),D.visibleSlides.indexOf(D.slides[c])>=0&&(D.slides[c].className+=" "+b.slideVisibleClass);D.slides[D.activeIndex].className+=" "+b.slideActiveClass}if(b.loop){var i=D.loopedSlides;D.activeLoopIndex=D.activeIndex-i,D.activeLoopIndex>=D.slides.length-2*i&&(D.activeLoopIndex=D.slides.length-2*i-D.activeLoopIndex),D.activeLoopIndex<0&&(D.activeLoopIndex=D.slides.length-2*i+D.activeLoopIndex),D.activeLoopIndex<0&&(D.activeLoopIndex=0)}else D.activeLoopIndex=D.activeIndex;b.pagination&&D.updatePagination(a)}}},D.createPagination=function(a){if(b.paginationClickable&&D.paginationButtons&&x(),D.paginationContainer=b.pagination.nodeType?b.pagination:c(b.pagination)[0],b.createPagination){var d="",e=D.slides.length,f=e;b.loop&&(f-=2*D.loopedSlides);for(var g=0;f>g;g++)d+="<"+b.paginationElement+' class="'+b.paginationElementClass+'"></'+b.paginationElement+">";D.paginationContainer.innerHTML=d}D.paginationButtons=c("."+b.paginationElementClass,D.paginationContainer),a||D.updatePagination(),D.callPlugins("onCreatePagination"),b.paginationClickable&&y()},D.updatePagination=function(a){if(b.pagination&&!(D.slides.length<1)){var d=c("."+b.paginationActiveClass,D.paginationContainer);if(d){var e=D.paginationButtons;if(0!==e.length){for(var f=0;f<e.length;f++)e[f].className=b.paginationElementClass;var g=b.loop?D.loopedSlides:0;if(b.paginationAsRange){D.visibleSlides||D.calcVisibleSlides(a);var h,i=[];for(h=0;h<D.visibleSlides.length;h++){var j=D.slides.indexOf(D.visibleSlides[h])-g;b.loop&&0>j&&(j=D.slides.length-2*D.loopedSlides+j),b.loop&&j>=D.slides.length-2*D.loopedSlides&&(j=D.slides.length-2*D.loopedSlides-j,j=Math.abs(j)),i.push(j)}for(h=0;h<i.length;h++)e[i[h]]&&(e[i[h]].className+=" "+b.paginationVisibleClass);b.loop?void 0!==e[D.activeLoopIndex]&&(e[D.activeLoopIndex].className+=" "+b.paginationActiveClass):e[D.activeIndex]&&(e[D.activeIndex].className+=" "+b.paginationActiveClass)}else b.loop?e[D.activeLoopIndex]&&(e[D.activeLoopIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass):e[D.activeIndex]&&(e[D.activeIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass)}}}},D.calcVisibleSlides=function(a){var c=[],d=0,e=0,f=0;N&&D.wrapperLeft>0&&(a+=D.wrapperLeft),!N&&D.wrapperTop>0&&(a+=D.wrapperTop);for(var g=0;g<D.slides.length;g++){d+=e,e="auto"===b.slidesPerView?N?D.h.getWidth(D.slides[g],!0,b.roundLengths):D.h.getHeight(D.slides[g],!0,b.roundLengths):F,f=d+e;var h=!1;b.visibilityFullFit?(d>=-a&&-a+J>=f&&(h=!0),-a>=d&&f>=-a+J&&(h=!0)):(f>-a&&-a+J>=f&&(h=!0),d>=-a&&-a+J>d&&(h=!0),-a>d&&f>-a+J&&(h=!0)),h&&c.push(D.slides[g])}0===c.length&&(c=[D.slides[D.activeIndex]]),D.visibleSlides=c};var ab,bb;D.startAutoplay=function(){if(D.support.transitions){if("undefined"!=typeof ab)return!1;if(!b.autoplay)return;D.callPlugins("onAutoplayStart"),b.onAutoplayStart&&D.fireCallback(b.onAutoplayStart,D),A()}else{if("undefined"!=typeof bb)return!1;if(!b.autoplay)return;D.callPlugins("onAutoplayStart"),b.onAutoplayStart&&D.fireCallback(b.onAutoplayStart,D),bb=setInterval(function(){b.loop?(D.fixLoop(),D.swipeNext(!0,!0)):D.swipeNext(!0,!0)||(b.autoplayStopOnLast?(clearInterval(bb),bb=void 0):D.swipeTo(0))},b.autoplay)}},D.stopAutoplay=function(a){if(D.support.transitions){if(!ab)return;ab&&clearTimeout(ab),ab=void 0,a&&!b.autoplayDisableOnInteraction&&D.wrapperTransitionEnd(function(){A()}),D.callPlugins("onAutoplayStop"),b.onAutoplayStop&&D.fireCallback(b.onAutoplayStop,D)}else bb&&clearInterval(bb),bb=void 0,D.callPlugins("onAutoplayStop"),b.onAutoplayStop&&D.fireCallback(b.onAutoplayStop,D)},D.loopCreated=!1,D.removeLoopedSlides=function(){if(D.loopCreated)for(var a=0;a<D.slides.length;a++)D.slides[a].getData("looped")===!0&&D.wrapper.removeChild(D.slides[a])},D.createLoop=function(){if(0!==D.slides.length){D.loopedSlides="auto"===b.slidesPerView?b.loopedSlides||1:Math.floor(b.slidesPerView)+b.loopAdditionalSlides,D.loopedSlides>D.slides.length&&(D.loopedSlides=D.slides.length);var a,c="",d="",e="",f=D.slides.length,g=Math.floor(D.loopedSlides/f),h=D.loopedSlides%f;for(a=0;g*f>a;a++){var i=a;if(a>=f){var j=Math.floor(a/f);i=a-f*j}e+=D.slides[i].outerHTML}for(a=0;h>a;a++)d+=u(b.slideDuplicateClass,D.slides[a].outerHTML);for(a=f-h;f>a;a++)c+=u(b.slideDuplicateClass,D.slides[a].outerHTML);var k=c+e+E.innerHTML+e+d;for(E.innerHTML=k,D.loopCreated=!0,D.calcSlides(),a=0;a<D.slides.length;a++)(a<D.loopedSlides||a>=D.slides.length-D.loopedSlides)&&D.slides[a].setData("looped",!0);D.callPlugins("onCreateLoop")}},D.fixLoop=function(){var a;D.activeIndex<D.loopedSlides?(a=D.slides.length-3*D.loopedSlides+D.activeIndex,D.swipeTo(a,0,!1)):("auto"===b.slidesPerView&&D.activeIndex>=2*D.loopedSlides||D.activeIndex>D.slides.length-2*b.slidesPerView)&&(a=-D.slides.length+D.activeIndex+D.loopedSlides,D.swipeTo(a,0,!1))},D.loadSlides=function(){var a="";D.activeLoaderIndex=0;for(var c=b.loader.slides,d=b.loader.loadAllSlides?c.length:b.slidesPerView*(1+b.loader.surroundGroups),e=0;d>e;e++)a+="outer"===b.loader.slidesHTMLType?c[e]:"<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+e+'">'+c[e]+"</"+b.slideElement+">";D.wrapper.innerHTML=a,D.calcSlides(!0),b.loader.loadAllSlides||D.wrapperTransitionEnd(D.reloadSlides,!0)},D.reloadSlides=function(){var a=b.loader.slides,c=parseInt(D.activeSlide().data("swiperindex"),10);if(!(0>c||c>a.length-1)){D.activeLoaderIndex=c;var d=Math.max(0,c-b.slidesPerView*b.loader.surroundGroups),e=Math.min(c+b.slidesPerView*(1+b.loader.surroundGroups)-1,a.length-1);if(c>0){var f=-F*(c-d);D.setWrapperTranslate(f),D.setWrapperTransition(0)}var g;if("reload"===b.loader.logic){D.wrapper.innerHTML="";var h="";for(g=d;e>=g;g++)h+="outer"===b.loader.slidesHTMLType?a[g]:"<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+g+'">'+a[g]+"</"+b.slideElement+">";D.wrapper.innerHTML=h}else{var i=1e3,j=0;for(g=0;g<D.slides.length;g++){var k=D.slides[g].data("swiperindex");d>k||k>e?D.wrapper.removeChild(D.slides[g]):(i=Math.min(k,i),j=Math.max(k,j))}for(g=d;e>=g;g++){var l;i>g&&(l=document.createElement(b.slideElement),l.className=b.slideClass,l.setAttribute("data-swiperindex",g),l.innerHTML=a[g],D.wrapper.insertBefore(l,D.wrapper.firstChild)),g>j&&(l=document.createElement(b.slideElement),l.className=b.slideClass,l.setAttribute("data-swiperindex",g),l.innerHTML=a[g],D.wrapper.appendChild(l))}}D.reInit(!0)}},B()}};Swiper.prototype={plugins:{},wrapperTransitionEnd:function(a,b){"use strict";function c(h){if(h.target===f&&(a(e),e.params.queueEndCallbacks&&(e._queueEndCallbacks=!1),!b))for(d=0;d<g.length;d++)e.h.removeEventListener(f,g[d],c)}var d,e=this,f=e.wrapper,g=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"];if(a)for(d=0;d<g.length;d++)e.h.addEventListener(f,g[d],c)},getWrapperTranslate:function(a){"use strict";var b,c,d,e,f=this.wrapper;return"undefined"==typeof a&&(a="horizontal"===this.params.mode?"x":"y"),this.support.transforms&&this.params.useCSS3Transforms?(d=window.getComputedStyle(f,null),window.WebKitCSSMatrix?e=new WebKitCSSMatrix("none"===d.webkitTransform?"":d.webkitTransform):(e=d.MozTransform||d.OTransform||d.MsTransform||d.msTransform||d.transform||d.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),b=e.toString().split(",")),"x"===a&&(c=window.WebKitCSSMatrix?e.m41:parseFloat(16===b.length?b[12]:b[4])),"y"===a&&(c=window.WebKitCSSMatrix?e.m42:parseFloat(16===b.length?b[13]:b[5]))):("x"===a&&(c=parseFloat(f.style.left,10)||0),"y"===a&&(c=parseFloat(f.style.top,10)||0)),c||0},setWrapperTranslate:function(a,b,c){"use strict";var d,e=this.wrapper.style,f={x:0,y:0,z:0};3===arguments.length?(f.x=a,f.y=b,f.z=c):("undefined"==typeof b&&(b="horizontal"===this.params.mode?"x":"y"),f[b]=a),this.support.transforms&&this.params.useCSS3Transforms?(d=this.support.transforms3d?"translate3d("+f.x+"px, "+f.y+"px, "+f.z+"px)":"translate("+f.x+"px, "+f.y+"px)",e.webkitTransform=e.MsTransform=e.msTransform=e.MozTransform=e.OTransform=e.transform=d):(e.left=f.x+"px",e.top=f.y+"px"),this.callPlugins("onSetWrapperTransform",f),this.params.onSetWrapperTransform&&this.fireCallback(this.params.onSetWrapperTransform,this,f)},setWrapperTransition:function(a){"use strict";var b=this.wrapper.style;b.webkitTransitionDuration=b.MsTransitionDuration=b.msTransitionDuration=b.MozTransitionDuration=b.OTransitionDuration=b.transitionDuration=a/1e3+"s",this.callPlugins("onSetWrapperTransition",{duration:a}),this.params.onSetWrapperTransition&&this.fireCallback(this.params.onSetWrapperTransition,this,a)},h:{getWidth:function(a,b,c){"use strict";var d=window.getComputedStyle(a,null).getPropertyValue("width"),e=parseFloat(d);return(isNaN(e)||d.indexOf("%")>0||0>e)&&(e=a.offsetWidth-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-left"))-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-right"))),b&&(e+=parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-left"))+parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-right"))),c?Math.ceil(e):e},getHeight:function(a,b,c){"use strict";if(b)return a.offsetHeight;var d=window.getComputedStyle(a,null).getPropertyValue("height"),e=parseFloat(d);return(isNaN(e)||d.indexOf("%")>0||0>e)&&(e=a.offsetHeight-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-top"))-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-bottom"))),b&&(e+=parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-top"))+parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-bottom"))),c?Math.ceil(e):e},getOffset:function(a){"use strict";var b=a.getBoundingClientRect(),c=document.body,d=a.clientTop||c.clientTop||0,e=a.clientLeft||c.clientLeft||0,f=window.pageYOffset||a.scrollTop,g=window.pageXOffset||a.scrollLeft;return document.documentElement&&!window.pageYOffset&&(f=document.documentElement.scrollTop,g=document.documentElement.scrollLeft),{top:b.top+f-d,left:b.left+g-e}},windowWidth:function(){"use strict";return window.innerWidth?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:void 0},windowHeight:function(){"use strict";return window.innerHeight?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:void 0},windowScroll:function(){"use strict";return"undefined"!=typeof pageYOffset?{left:window.pageXOffset,top:window.pageYOffset}:document.documentElement?{left:document.documentElement.scrollLeft,top:document.documentElement.scrollTop}:void 0},addEventListener:function(a,b,c,d){"use strict";"undefined"==typeof d&&(d=!1),a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},removeEventListener:function(a,b,c,d){"use strict";"undefined"==typeof d&&(d=!1),a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)}},setTransform:function(a,b){"use strict";var c=a.style;c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=b},setTranslate:function(a,b){"use strict";var c=a.style,d={x:b.x||0,y:b.y||0,z:b.z||0},e=this.support.transforms3d?"translate3d("+d.x+"px,"+d.y+"px,"+d.z+"px)":"translate("+d.x+"px,"+d.y+"px)";c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=e,this.support.transforms||(c.left=d.x+"px",c.top=d.y+"px")},setTransition:function(a,b){"use strict";var c=a.style;c.webkitTransitionDuration=c.MsTransitionDuration=c.msTransitionDuration=c.MozTransitionDuration=c.OTransitionDuration=c.transitionDuration=b+"ms"},support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){"use strict";return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){"use strict";var a=document.createElement("div").style;return"webkitPerspective"in a||"MozPerspective"in a||"OPerspective"in a||"MsPerspective"in a||"perspective"in a}(),transforms:window.Modernizr&&Modernizr.csstransforms===!0||function(){"use strict";var a=document.createElement("div").style;return"transform"in a||"WebkitTransform"in a||"MozTransform"in a||"msTransform"in a||"MsTransform"in a||"OTransform"in a}(),transitions:window.Modernizr&&Modernizr.csstransitions===!0||function(){"use strict";var a=document.createElement("div").style;return"transition"in a||"WebkitTransition"in a||"MozTransition"in a||"msTransition"in a||"MsTransition"in a||"OTransition"in a}(),classList:function(){"use strict";var a=document.createElement("div");return"classList"in a}()},browser:{ie8:function(){"use strict";var a=-1;if("Microsoft Internet Explorer"===navigator.appName){var b=navigator.userAgent,c=new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);null!==c.exec(b)&&(a=parseFloat(RegExp.$1))}return-1!==a&&9>a}(),ie10:window.navigator.msPointerEnabled,ie11:window.navigator.pointerEnabled}},(window.jQuery||window.Zepto)&&!function(a){"use strict";a.fn.swiper=function(b){var c;return this.each(function(d){var e=a(this),f=new Swiper(e[0],b);d||(c=f),e.data("swiper",f)}),c}}(window.jQuery||window.Zepto),"undefined"!=typeof module?module.exports=Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return Swiper});

var SES = window.localStorage,
	LASTTTACK = 0, //ultimo registro tomado
	SECOND = 0,
	CALO = 0, //calorias
	STEP = 0, //pasos
	ACCE = 0, //ACCELERATION
	PAUSED = true, //status of activity
	PERFIL = null, //status of activity
	PPM = 0, //HRM sensor 
	StepID = null, //acelerometro id
	watchID = null, //gps track
	MAP = null, //map google
	LAT = 0, //map latitude
	LON = 0, //map longitude
	ICO = null, //icon map
	MAPTIMEOUT = 3000, //tiemout map
	MAPLINE = null, //linea de recorrido
	ACCELTIMEOUT = 500, //tiemout mapa
	CLOCKTIMEOUT = 1000, //tiemout clock
	ACTIVITYTYPE = 1, //tipo de actividad
	ACTIVITYTIMEOUT = 1000*10, //tiemout tomar datos
	PauseSens = 0, //sensibilidad del estado de pausa para que sea mas tolerante el numero de veces indicado
	bgGeo = null, //plugir background mode.
	SITE = 'https://irisdev.co/siluet_app/index.php/';

function ak_buscalabel(form, ipt){
	var str = ipt.attr('name');
	if(str.indexOf("[]") >= 0){ 
		var name = str.replace('[]', '');
	}else{
		var name = str;
	}
	var label = form.find('label[for='+name+']');
	
	if(label.length > 0){
		return label.text();	
	}else{
		return ipt.attr('placeholder');	
	}
}

function serializeObject(form){
   var o = {};
   var a = $(form).serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};

function ak_buscalabel(form, ipt){
	var str = ipt.attr('name');
	if(str.indexOf("[]") >= 0){ 
		var name = str.replace('[]', '');
	}else{
		var name = str;
	}
	var label = form.find('label[for='+name+']');
	
	if(label.length > 0){
		return label.text();	
	}else{
		return ipt.attr('placeholder');	
	}
}


/*
	funcion ak_validate
	author @animatk 2013
*/
function ak_validate( form, opts ){
	//@opts { bt, ajax, func}
	var options = {};
	$.extend(options, opts);
	var form = $(form);
	var btn = (options.bt != undefined)? $(options.bt) : form.find('input[type=submit]');
	var inputs = form.find('input, textarea, select');
	var tip = $('.ak-tooltip');

	for(var i = 0; i < inputs.length; i++)
	{
		ipt = $(inputs[i]);
		//
		if(ipt.hasClass('required') && ipt.val() == ""){
			label = ak_buscalabel(form, ipt);
			ipt.addClass('error');
			ak_showtip( ipt, label+': Este campo es obligatorio');
			return false;
		}else{
			tip.remove();
			ipt.removeClass('error');
		}
		if(ipt.hasClass('email') && ipt.val() != ""){
			if(ipt.val().indexOf('@') == '-1' || ipt.val().indexOf('.') == '-1'){
				label = ak_buscalabel(form, ipt);
				ipt.addClass('error');
				ak_showtip( ipt, 'Verifique el correo electr&oacute;nico.');
				return false;
			}else{
				tip.remove();
				ipt.removeClass('error');
			}
		}
		if(ipt.hasClass('price') && ipt.val() != ""){
			var filter=/^([0-9.,]+)*$/;
			if(!filter.test(ipt.val())){
				label = ak_buscalabel(form, ipt);
				ipt.addClass('error');
				ak_showtip( ipt, label+': Este campo solo permite n&uacute;meros y punto despues de los centavos.');
				return false;
			}else{
				tip.remove();
				ipt.removeClass('error');
			}
		}
		
		if(ipt.hasClass('onlynum') && ipt.val() != ""){
			var filter=/^([0-9]+)*$/;
			if(!filter.test(ipt.val())){
				label = ak_buscalabel(form, ipt);
				ipt.addClass('error');
				ak_showtip( ipt, label+': Este campo solo permite n&uacute;meros.');
				return false;
			}else{
				tip.remove();
				ipt.removeClass('error');
			}
		}
		if(ipt.hasClass('onlydot') && ipt.val() != ""){
			var filter=/^([0-9.]+)*$/;
			if(!filter.test(ipt.val())){
				label = ak_buscalabel(form, ipt);
				ipt.addClass('error');
				ak_showtip( ipt, label+': Este campo solo permite n&uacute;meros y punto (.)');
				return false;
			}else{
				tip.remove();
				ipt.removeClass('error');
			}
		}
		if(ipt.hasClass('cedula') && ipt.val() != ""){
			var filter=/^([0-9.-]+)*$/;
			if(!filter.test(ipt.val())){
				label = ak_buscalabel(form, ipt);
				ipt.addClass('error');
				ak_showtip( ipt, label+': Este campo solo permite n&uacute;meros, punto (.) y guion (-)');
				return false;
			}else{
				tip.remove();
				ipt.removeClass('error');
			}
		}
		if(ipt.hasClass('nicename') && ipt.val() != ""){
			var filter=/^([a-zA-Z0-9\-]+)*$/;
			if(!filter.test(ipt.val())){
				label = ak_buscalabel(form, ipt);
				ipt.addClass('error');
				ak_showtip( ipt, label+': No puede contener caracteres $&?!, mayusculas, acentos ni espacios.');
				return false;
			}else{
				tip.remove();
				ipt.removeClass('error');
			}
		}
		//
		if(ipt.hasClass('phone') && ipt.val() != ""){
			var filter=/^([0-9-\s]+)*$/;
			if(!filter.test(ipt.val())){
				label = ak_buscalabel(form, ipt);
				ipt.addClass('error');
				ak_showtip( ipt, label+' Verifique este campo.');
				return false;
			}else{
				tip.remove();
				ipt.removeClass('error');
			}
		}
		
		if(ipt.hasClass('estatura') && ipt.val() != ""){
			var filter=/([0-2]{1})\.([0-9]{2})*$/;
			if(!filter.test(ipt.val())){
				label = ak_buscalabel(form, ipt);
				ipt.addClass('error');
				ak_showtip( ipt, label+' El formato correcto es similar a 1.65');
				return false;
			}else{
				tip.remove();
				ipt.removeClass('error');
			}
		}
		
		if(ipt.hasClass('fecha') && ipt.val() != ""){
			var filter=/([0-9]{4})-([0-9]{2})-([0-9]{2})*$/;
			if(!filter.test(ipt.val())){
				label = ak_buscalabel(form, ipt);
				ipt.addClass('error');
				ak_showtip( ipt, label+' El formato correcto es similar a 1980-07-23');
				return false;
			}else{
				tip.remove();
				ipt.removeClass('error');
			}
		}
		
		if(ipt.hasClass('fecha-hora') && ipt.val() != ""){
			var filter=/([0-9]{4})-([0-9]{2})-([0-9]{2})\s([0-9]{2}):([0-9]{2}):([0-9]{2})*$/;
			if(!filter.test(ipt.val())){
				label = ak_buscalabel(form, ipt);
				ipt.addClass('error');
				ak_showtip( ipt, label+' El formato correcto es similar a 1980-07-23 10:45:00');
				return false;
			}else{
				tip.remove();
				ipt.removeClass('error');
			}
		}
		
		if(ipt.hasClass('fecha-dma') && ipt.val() != ""){
			var filter=/([0-9]{2})\/([0-9]{2})\/([0-9]{4})*$/;
			if(!filter.test(ipt.val())){
				label = ak_buscalabel(form, ipt);
				ipt.addClass('error');
				ak_showtip( ipt, label+' El formato correcto es similar a 15/03/1980');
				return false;
			}else{
				tip.remove();
				ipt.removeClass('error');
			}
		}
		
		if(ipt.hasClass('estatura') && ipt.val() != ""){
			var filter=/([0-2]{1})\.([0-9]{2})*$/;
			if(!filter.test(ipt.val())){
				label = ak_buscalabel(form, ipt);
				ipt.addClass('error');
				ak_showtip( ipt, label+' El formato correcto es similar a 1.65');
				return false;
			}else{
				tip.remove();
				ipt.removeClass('error');
			}
		}
		
		if(ipt.data('compair')){
			com = form.find(ipt.attr('data-compair'));
			if(ipt.val() != com.val() && ipt.val() != ""){
				label = ak_buscalabel(form, ipt);
				label2 = ak_buscalabel(form, com);
				ipt.addClass('error');
				com.addClass('error');
				ak_showtip( ipt, label+' y '+label2+' Estos campos no pueden ser diferenrtes.');
				return false;
			}else{
				tip.remove();
				ipt.removeClass('error');
				com.removeClass('error');
			}
		}		
	}
	
	if(btn.hasClass('deactive') === false){
		btn.addClass('deactive');
		var cortina = $('#cortina');
		var org = btn.html();
		btn.html(' Espere.. ');
		
		if(cortina.length <= 0){
			$('body').prepend('<div id="cortina">&nbsp;</div>');
			cortina = $('#cortina');
		}
		//

		if(options.ajax === false){
			var obj = serializeObject(form);
			btn.removeClass('deactive');
			btn.html(org);
			func = options.func;
			func(obj);
			return false;
		}else if( options.ajax != undefined && options.ajax != false){
			
			 $.ajax({
				type : 'POST',
				data : form.serialize(),
				url : options.ajax,
				success: function(data){
					btn.removeClass('deactive');
					btn.html(org);
					if(options.func != undefined){
						cortina.remove();
						func = options.func;
						func(data);
					}
				},
				error : function(xhr, ajaxOptions, thrownError){
					btn.removeClass('deactive');
					btn.html(org);
					cortina.remove();
					if(options.error != undefined){
						error = options.error;
						error();
					}
				}
			});
		}else{
			form.submit();
			return true;
		}
 	}
	return false;
}

function ak_showtip(ipt, msj){
	//
	$('.ak-tooltip').remove();
	if(ipt == 'remove'){
		return false;
	}
	//
	ipt.focus();
	var tip = $('<div class="ak-tooltip">');
	var wid = (ipt.width() > 80)? ipt.width() : 80;
	tip.html('<div class="ak-tooltip-int" onclick="ak_showtip(\'remove\');">'+msj+'</div>');
	tip.css({
		width: wid
		,top: ipt.offset().top - 6
		,left: ipt.offset().left
	});	
	$('body').prepend(tip);
}

function isDevice(){
	return (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i)
													) == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)
													) == "Android" ? "Android" : false;
}

function isOnLine(){
	return navigator.onLine;
}


function iniciar(){
	if( SES['chain'] ){
		if( SES['info_basica'] ){
			ak_navigate('#inicio', '#config');
			$('#btnMenu').addClass('oculto');
			btnIzq({
				text: 'Cancelar'	
				,from: '#config'	
				,to: '#inicio'	
				,fx: 'toRight'	
				,fn: '$(\'#btnMenu\').removeClass(\'oculto\')'
			});
		}else{
			ak_navigate('#inicio', '#perfil');
		}
	}else{
		ak_navigate('#inicio', '#login');
		$('#btnMenu').addClass('oculto');
		btnIzq({
			text: 'Cancelar'	
			,from: '#login'	
			,to: '#inicio'	
			,fx: 'toRight'	
			,fn: '$(\'#btnMenu\').removeClass(\'oculto\')'
		});
	}
}

function ak_navigate(from, to, effect){
	var fx = (effect != undefined)? effect : 'toLeft';
	$(from).removeClass('toCenter toLeft toRight');
	$( to ).removeClass('toCenter toLeft toRight');
	$(from).addClass(fx);
	$( to ).addClass('toCenter');
}

function btnIzq(obj){
	var btmI = $('#btn-accion-izq'),
	effect = (obj.fx)? ", '"+obj.fx+"'" : "",
	func = (obj.fn)? obj.fn : "";
	btmI.html(obj.text);
	btmI.attr('onclick', "ak_navigate('"+obj.from+"', '"+obj.to+"' "+effect+"); $(this).addClass('oculto'); "+func );
	btmI.removeClass('oculto');
}

function jsonp(url, callback) {
	var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
	window[callbackName] = function(data) {
		delete window[callbackName];
		document.body.removeChild(script);
		callback(data);
	};

	var script = document.createElement('script');
	script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
	document.body.appendChild(script);
}

function loadScript(url, func) {
    var sc = document.createElement("script");
    sc.type = "text/javascript";
    if (sc.readyState != undefined) {
        sc.onreadystatechange = function () {
            if (sc.readyState == "loaded" || sc.readyState == "complete") {
                sc.onreadystatechange = null;
                func();
            }
        };
    }else{ 
        sc.onload = function () {
            func();
        };
    }
    sc.src = url;
    document.getElementsByTagName("head")[0].appendChild(sc);
}

function post(url, data, callback) {
	$.ajax({
		url: url
		,type: 'POST'
		,data: data
		,dataType: "json"
		,crossDomain: true
		,success: function(data){
			callback(data);
		}
	});
}

/*! login */
function login(form){
	ak_validate( 
		form, 
		{ bt: '#BtnLogin'
		, ajax: false
		, func: function(data){
			var cortina = $('#cortina');
			post(SITE+'main/login', data, function(obj){
				if(obj.success === false){
					alert(obj.message);
				}else{
					
					var udata = {
						gender : obj.gender
						,name : obj.name
						,height : obj.height
						,weight : obj.weight
						,terms : obj.terms
						,birthdate : obj.birthdate
					};
					
					SES['chain'] = obj.chain;
					SES['perfil'] = JSON.stringify(udata);
					SES['info_basica'] = true;
					
					ak_navigate('#login', '#config');
					$('#btnMenu').addClass('oculto');
					btnIzq({
						text: 'Cancelar'	
						,from: '#config'	
						,to: '#inicio'	
						,fx: 'toRight'	
						,fn: '$(\'#btnMenu\').removeClass(\'oculto\')'
					});
				}
				
				cortina.remove();
			});
			
		}
	});
	return false;
}
/*! end login */

/*! register */
function botonRegistrar(){
	ak_navigate('#login','#registro'); 
	btnIzq({
		text: 'Volver'
		,from: '#registro'
		,to: '#login'
		,fx: 'toRight'
		,fn: 'btnIzq({ text:\'Cancelar\', from:\'#login\', to:\'#inicio\', fx:\'toRight\', fn:"$(\'#btnMenu\').removeClass(\'oculto\');"});'
	});
	
	var dias = '<option value="">Día</option>';
	for(var i=1; i<32; i++){
		dias += '<option value="'+i+'">'+i+'</option>';
	}
	$('select[name=edad_day]').html(dias);
	
	var years = '<option value="">Año</option>';
	var year = new Date().getFullYear();
	for(var i=0; i<69; i++){
		years += '<option value="'+(year-i)+'">'+(year-i)+'</option>';
	}
	$('select[name=edad_year]').html(years);
}

function register(form){
	ak_validate( 
		form, 
		{ bt: '#BtnRegister'
			, ajax: false
			, func: function(data){
				var cortina = $('#cortina');
				post(SITE+'main/register', data, function(obj){
					if(obj.success === false){
						alert(obj.message);
					}else{
						//
						var udata = {
							gender : data.genero
							,name : data.nombre
							,height : data.estatura
							,weight : data.peso
							,terms : data.terminos
							,birthdate : data.edad_year+'-'+data.edad_month+'-'+data.edad_day
						};
						
						SES['chain'] = obj.chain;
						SES['perfil'] = JSON.stringify(udata);
						SES['info_basica'] = true;
						
						ak_navigate('#registro', '#config');
						$('#btnMenu').addClass('oculto');
						btnIzq({
							text: 'Cancelar'
							,from: '#config'
							,to: '#inicio'
							,fx: 'toRight'
							,fn: '$(\'#btnMenu\').removeClass(\'oculto\')'
						});
					}
					cortina.remove();
				});}});
	return false;
}
/*! end register */
/*! restore */
function botonRestore(){
	ak_navigate('#login','#restore'); 
	btnIzq({
		text: 'Volver'
		,from: '#restore'
		,to: '#login'
		,fx: 'toRight'
		,fn: 'btnIzq({ text:\'Cancelar\', from:\'#login\', to:\'#inicio\', fx:\'toRight\', fn:"$(\'#btnMenu\').removeClass(\'oculto\');"});'
	});	
}

function restore(form){
	ak_validate( 
		form, 
		{ bt: '#BtnRestore'
			, ajax: false
			, func: function(data){
				var cortina = $('#cortina');
				post(SITE+'main/restore', data, function(obj){
					if(obj.success === false){
						alert(obj.message);
					}else{
						alert(obj.message);
						ak_navigate('#restore', '#login', 'toRight');
						$('#btnMenu').addClass('oculto');
						btnIzq({
							text: 'Cancelar'	
							,from: '#login'	
							,to: '#inicio'	
							,fx: 'toRight'	
							,fn: '$(\'#btnMenu\').removeClass(\'oculto\')'
						});
					}
					cortina.remove();
				});}});
	return false;
}
/*! end restore */
/*! Congiguracion */
function tipoActividad(nu){
	ACTIVITYTYPE = nu;
	$('.actType').removeClass('btn-success');
	$('#actividad-'+nu).addClass('btn-success');
}
/*! end Congiguracion */
/*! dispositivos HRM  */
function botonDispositivos(accion){
	//navegacion
	ak_navigate('#config','#dispositivos'); 
	btnIzq({
		text: 'Volver'
		,from: '#dispositivos'
		,to: '#config'
		,fx: 'toRight'
		,fn: 'btnIzq({ text:\'Cancelar\', from:\'#config\', to:\'#inicio\', fx:\'toRight\', fn:"$(\'#btnMenu\').removeClass(\'oculto\');"});'
	});	
	
	listarDispositivos();
}

function listarDispositivos(){
	var dispositivos = new Array(),
	output = "";
	if(SES['dispositivos']){
		dispositivos = JSON.parse( SES['dispositivos'] );
	}
	var tot = dispositivos.length;
	if( tot > 0){
		for(var i=0; i<tot; i++){
			var obj = dispositivos[i];
			output += '<div data-add="'+obj.address+'" class="disp-item btn btn-default" onclick="isInitialized(); DEVICE=\''+obj.address+'\'; "> '+obj.name+' </div>';
		}
			
	}else{
		//
		output += '<div class="ak-alert"> No hay dispositivos recordados </div>';
	}
	
	$('.disp-list').html(output);
}


function botonDispositivosFind(){
	$('#dispMain').addClass('oculto');
	$('#btn-accion-izq').addClass('oculto');
	$('#dispFind').removeClass('oculto');
	isInitialized();
}

function botonDispositivosCancel(){
	stopScan();
	$('#dispMain').removeClass('oculto');
	$('#btn-accion-izq').removeClass('oculto');
	$('#dispFind').addClass('oculto');	
}


function addDisp(name, address)
{
	stopScan();
	mensaje("Funcion addDisp llamada con: "+name+' y '+ address );
	var dispositivos = new Array(),
	insert = true;
	if(SES['dispositivos']){
		dispositivos = JSON.parse( SES['dispositivos'] );
		var tot = dispositivos.length;
		for(var i=0; i<tot; i++){
			var obj = dispositivos[i];
			if(obj.address == address){
				insert = false;
			}}}
	//si la orden es insertarlo
	if(insert){
		dispositivos.push({name: name, address: address});
	}
	//crear o resetear la variable de sesion de dispositivos
	SES['dispositivos'] = JSON.stringify(dispositivos);
	//conectar al dispositivo
	isInitialized(); 
	DEVICE=address;
	$('#dispMain').removeClass('oculto');
	$('#btn-accion-izq').removeClass('oculto');
	$('#dispFind').addClass('oculto');
	listarDispositivos();
}
/*! end dispositivos HRM */
/*! principal */
function principal(form){
	ak_navigate( form ,'#principal');
	var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		direction: 'horizontal'
		,loop: false
		// If we need pagination
	//	pagination: '.swiper-pagination',
		// Navigation arrows
	//	nextButton: '.swiper-button-next',
	//	prevButton: '.swiper-button-prev',
		// And if we need scrollbar
	//	scrollbar: '.swiper-scrollbar',
	});
	$('#BtnPausar').removeClass('oculto');
	$('#BtnContinuar').addClass('oculto');
	$('#BtnDetener').addClass('oculto');
	PAUSED = false;
//	initClock();
	steps();
	geo();
//	trackActivity();
//	window.plugin.backgroundMode.enable();
}
function trackActivity(){
	if(SES['actividad'] && !PAUSED){
		var actividad = JSON.parse(SES['actividad']),
		curIndex= actividad.length-1,
		actual = actividad[curIndex];
		//
		if(actual.data == undefined){
			actual.data = [];
		}
		actual.data.push({
			time: new Date(),
			lat : LAT,
			lon : LON,
			ste : STEP,
			cal : CALO,
			ppm : PPM
		});
		actividad[curIndex] = actual;
		//
		SES['actividad'] = JSON.stringify(actividad);
	//	setTimeout(function(){ trackActivity(); }, ACTIVITYTIMEOUT);
	}
}
function Dist(lat1, lon1, lat2, lon2)
{
  rad = function(x) {return x*Math.PI/180;}
  var R     = 6378.137; //Radio de la tierra en km
  var dLat  = rad( lat2 - lat1 );
  var dLong = rad( lon2 - lon1 );
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
      Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d.toFixed(3);//Retorna tres decimales
}

function initClock(obj, segundos) {
	if(PAUSED){
		return false;
	}
	var actividad = [],
	segundos_mas = 0;
	if(obj != undefined){			
		actividad = obj;
	}else{
		if(SES['actividad']){
			actividad = JSON.parse(SES['actividad']);
		}
	}
	if(segundos != undefined){
		segundos_mas = segundos;
	}else{
		var tot = actividad.length;
		//
		if(tot > 1){			
			for(var a=0; a<tot-1; a++){
				var act = actividad[a];
				if(act.seg != undefined){
					segundos_mas = segundos_mas + act.seg;
				}
			}
		}
	}
	var actual = actividad[actividad.length-1];
	var time_ini = new Date();
	if(actual.ini != undefined){
		time_ini = actual.ini;
	}
	var t1 = new Date(time_ini),
    t2 = new Date(),
    dif = t2-t1,
    SECOND = parseInt((dif/1000) + segundos_mas),
    h = parseInt( SECOND / 3600 ) % 24,
    m = checkTime(parseInt( SECOND / 60 ) % 60),
    s = checkTime(parseInt( SECOND % 60 ));        
    if( h > 0 ){
        var h = checkTime(h);
        $('.ppal-clock').html( h+":"+m+":"+s);
    }else{
        $('.ppal-clock').html( m+":"+s );
    } 
	
	/*! contador calorias */
	
	if(PERFIL == null){
		PERFIL = JSON.parse(SES['perfil']);
	}
	
	var minutes = (SECOND/60),
	level = .142,
	aux_calories = (PERFIL.weight*2.2)*minutes*level;
	CALO = Math.round(aux_calories*10)/10;
	$(".CALOR").html( CALO );

	if(SECOND > LASTTTACK+10){
		LASTTTACK = SECOND;
		trackActivity();
	}

  //  var t = setTimeout(function(){ initClock(actividad, segundos_mas); }, CLOCKTIMEOUT);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


function steps(){
//	mensaje("-pasos-" );
	var options = { frequency: ACCELTIMEOUT };
	StepID = navigator.accelerometer.watchAcceleration(stepsSuccess, function(){
	  //error
	}, options);
}

function stepsSuccess(a){
	//
	var x = a.x
	, s = parseInt($('#sensible').val())
	, y = a.y
	, z = a.z
	, m = Math.round((x +y +z)/3);
	//
	mensaje('aCCE : '+ACCE+' pMED : '+m);
	
	if(ACCE != m){
		//
		if(ACCE > (m + s)){ 
		//	|| ACCE < (m - s)){
			STEP = STEP+1;
			PAUSED = false;
			
			var actividad = [];
			if(SES['actividad']){
				actividad = JSON.parse(SES['actividad']);
			}
			var tot = actividad.length;
			if(tot < 1 || actividad[tot-1].seg != undefined){
				actividad.push({
					ini : new Date()
				});
				SES['actividad'] = JSON.stringify(actividad);
			}			
			initClock();
		}
		ACCE = m;
		PauseSens = 0;
	}else{
		if(!PAUSED && PauseSens >= 5){
			mensaje('pAUSE');
			pause();
		}
		PauseSens = PauseSens+1;
	}	
	$('.PASOS').html(STEP);
}

function stopsteps() {
	if (StepID) {
		navigator.accelerometer.clearWatch(StepID);
		StepID = null;
	}
}

function geo(){
	if(isDevice() == 'Android'){
		var options = { timeout: MAPTIMEOUT, enableHighAccuracy: true };
	//	var options = { enableHighAccuracy: true };
		watchID = navigator.geolocation.watchPosition(geoSuccess, function(error){
	//	watchID = navigator.geolocation.getCurrentPosition(geoSuccess, function(error){
		  mensaje("Geo Error : " + error.code + "<br/> Mensaje : " + error.message );
		}, options);
	}else{
	//	var options = { timeout: MAPTIMEOUT, enableHighAccuracy: true };
		var options = { enableHighAccuracy: true };
	//	watchID = navigator.geolocation.watchPosition(geoSuccess, function(error){
		watchID = navigator.geolocation.getCurrentPosition(geoSuccess, function(error){
		  mensaje("Geo Error : " + error.code + "<br/> Mensaje : " + error.message );
		}, options);	
	}
	
	if(bgGeo == null){
		bgGeo = window.plugins.backgroundGeoLocation;
		bgGeo.configure( function(){
			//
		}, function(error) {
			mensaje('BackgroundGeoLocation error');
		}, {
			desiredAccuracy: 0
			, stationaryRadius: 3
			, distanceFilter: 3
			, notificationTitle: 'Siluet se esta ejecutando.'
			, notificationText: 'Tomando datos'
			, activityType: 'AutomotiveNavigation'
			, debug: false
			, stopOnTerminate: false 
		});
		bgGeo.start();
	}
}

function geoSuccess(position){
	
	if(isDevice() != 'Android'){
		setTimeout(function(){ geo(); }, MAPTIMEOUT);
	}

	mensaje('Ejecutando GPS');
	
	if(PAUSED){
		return false;
	}
	
	
	if(position.coords != undefined){
		LAT = position.coords.latitude;
		LON = position.coords.longitude;
	}else{
		LAT = position.latitude;
		LON = position.longitude;
	}
	
	mensaje('lat: '+LAT+' lon: '+LON);
	
	if(MAP != null){
		var latlng = new google.maps.LatLng( LAT, LON );
		/*
		if(MAPLINE != null){
			var path = MAPLINE.getPath();
			path.push(latlng);
		}else{
			var polyOptions = {
				strokeColor: '#000000',
				strokeOpacity: 0.8,
				strokeWeight: 1
			};
			MAPLINE = new google.maps.Polyline(polyOptions);
			MAPLINE.setMap(MAP);
		} */
		
		if(ICO != null){
			ICO.setPosition(latlng);
		}else{
			ICO = new google.maps.Marker({
			  position: latlng,
			  icon: {
				path: google.maps.SymbolPath.CIRCLE,
				scale: 6,
				strokeColor: '#06f'
			  },
			  map: MAP
			});
		}
		
		MAP.setCenter(latlng);
	}else{
		if(isOnLine() && MAP == null){
			loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyAihfNS3dpn6vB16RXRREYAy9jXEf63yUE&callback=map_init', function(){
			//	
			});
		}
	}
	//
}

function pause(){
	if(SES['actividad']){
		var actividad = JSON.parse(SES['actividad']),
		endDate = new Date(),
		curIndex= actividad.length-1,
		iniTime = new Date(actividad[curIndex].ini);
		//
		actividad[curIndex].end = endDate;
		actividad[curIndex].seg = parseInt((endDate-iniTime)/1000);
		//
		SES['actividad'] = JSON.stringify(actividad);
	}
	$('#BtnPausar').addClass('oculto');
	$('#BtnDetener').removeClass('oculto');
	$('#BtnContinuar').removeClass('oculto');
	PAUSED = true;
//	window.plugin.backgroundMode.disable();
}
function stop(){
	if(SES['actividad']){
		mensaje(SES['actividad']);
		SES.removeItem('actividad');
	}
	
	if(bgGeo != null){
		bgGeo.stop();
		bgGeo = null;
	}
	STEP = 0;
	PPM = 0;
	if(MAPLINE != null){
		MAPLINE.setMap(null);
		MAPLINE = null;
	}
	
	stopsteps();
	if(isDevice() == 'Android'){
		geolocation.clearWatch(watchID);
	}
	
	ak_navigate('#principal','#inicio');
	$('#btn-accion-izq').addClass('oculto');
	$('#btn-accion-der').addClass('oculto');
	$('#btnMenu').removeClass('oculto');
}

/*! end principal */
/*! map */
function map_init(){
	var mapOptions = {
		panControl: false,
		zoomControl: false,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		overviewMapControl: false,
		center: { lat: LAT, lng: LON},
		zoom: 16
	};
	MAP = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
/*! end map */

/*!
var myWeight;
var myDistance;

function HowMany(form){
	var difference;
	difference = (myDistance * myWeight) * .653;
}

function getCalories()
{
	pounds = parseInt(document.CALform.pounds.value);
	minutes = parseInt(document.CALform.minutes.value);
	exercise = document.CALform.exercise[document.CALform.exercise.selectedIndex].value;
	if (exercise=="aerobic") 
	{
	   level = .046;
	}
	if (exercise=="ciclismo") 
	{
	   level = .048;
	}
	if (exercise=="bailar") 
	{
	   level = .034;
	}
	if (exercise=="correr1") 
	{
	   level = .082;
	}
	if (exercise=="correr7") 
	{
	   level = .102;
	}
	if (exercise=="correr10") 
	{
	   level = .142;
	}
	if (exercise=="tenis") 
	{
	   level = .049;
	}
	if (exercise=="caminar2") 
	{
	   level = .026;
	}
	if (exercise=="caminar3") 
	{
	   level = .035;
	}
	if (exercise=="caminar4") 
	{
	   level = .048;
	   }
	if (exercise=="futbol") 
	{
	   level = .061;
	}
	if (exercise=="golf") 
	{
	   level = .029;
	}
	if (exercise=="basket") 
	{
	   level = .045;
	}
	if (exercise=="limpiar") 
	{
	   level = .048;
	}
	if (exercise=="besar") 
	{
	   level = .008;
	}
	if (exercise=="pintar") 
	{
	   level = .048;
	}
	if (exercise=="limpiarcoche") 
	{
	   level = .034;
	}
	if (exercise=="vertv") 
	{
	   level = .008;
	}
	if (exercise=="tenis2") 
	{
	   level = .036;
	}
	if (exercise=="kayak") 
	{
	   level = .045;
	}
	if (exercise=="spinning") 
	{
	   level = .053;
	}
	
	var level=level;
	
	aux_calories = (pounds*2.2)*minutes*level;
	aux_calories = Math.round(aux_calories*10)/10;
	document.getElementById("calories").innerHTML = aux_calories;		
}
*/	