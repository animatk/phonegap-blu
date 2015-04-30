/*! Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
/*! Zepto selector css*/
;!function(t){function n(n){return n=t(n),!(!n.width()&&!n.height())&&"none"!==n.css("display")}function e(t,n){t=t.replace(/=#\]/g,'="#"]');var e,i,r=u.exec(t);if(r&&r[2]in s&&(e=s[r[2]],i=r[3],t=r[1],i)){var o=Number(i);i=isNaN(o)?i.replace(/^["']|["']$/g,""):o}return n(t,e,i)}var i=t.zepto,r=i.qsa,o=i.matches,s=t.expr[":"]={visible:function(){return n(this)?this:void 0},hidden:function(){return n(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,n){return t===n.length-1?this:void 0},eq:function(t,n,e){return t===e?this:void 0},contains:function(n,e,i){return t(this).text().indexOf(i)>-1?this:void 0},has:function(t,n,e){return i.qsa(this,e).length?this:void 0}},u=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),c=/^\s*>/,h="Zepto"+ +new Date;i.qsa=function(n,o){return e(o,function(e,s,u){try{var a;!e&&s?e="*":c.test(e)&&(a=t(n).addClass(h),e="."+h+" "+e);var f=r(n,e)}catch(d){throw console.error("error performing selector: %o",o),d}finally{a&&a.removeClass(h)}return s?i.uniq(t.map(f,function(t,n){return s.call(t,n,f,u)})):f})},i.matches=function(t,n){return e(n,function(n,e,i){return!(n&&!o(t,n)||e&&e.call(t,null,i)!==t)})}}(Zepto);

/**
 * Swiper 3.0.6
 * http://www.idangero.us/swiper/
 * Copyright 2015, Vladimir Kharlampidi
 */
!function(){"use strict";function e(e){e.fn.swiper=function(t){var a;return e(this).each(function(){var e=new Swiper(this,t);a||(a=e)}),a}}window.Swiper=function(e,a){function r(){return"horizontal"===h.params.direction}function s(){h.autoplayTimeoutId=setTimeout(function(){h.params.loop?(h.fixLoop(),h._slideNext()):h.isEnd?a.autoplayStopOnLast?h.stopAutoplay():h._slideTo(0):h._slideNext()},h.params.autoplay)}function i(e,t){var a=g(e.target);if(!a.is(t))if("string"==typeof t)a=a.parents(t);else if(t.nodeType){var r;return a.parents().each(function(e,a){a===t&&(r=t)}),r?t:void 0}return 0===a.length?void 0:a[0]}function n(e,t){t=t||{};var a=window.MutationObserver||window.WebkitMutationObserver,r=new a(function(e){e.forEach(function(e){h.onResize(),h.emit("onObserverUpdate",h,e)})});r.observe(e,{attributes:"undefined"==typeof t.attributes?!0:t.attributes,childList:"undefined"==typeof t.childList?!0:t.childList,characterData:"undefined"==typeof t.characterData?!0:t.characterData}),h.observers.push(r)}function o(e){e.originalEvent&&(e=e.originalEvent);var t=e.keyCode||e.charCode;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===t||39===t||38===t||40===t){var a=!1;if(h.container.parents(".swiper-slide").length>0&&0===h.container.parents(".swiper-slide-active").length)return;for(var s={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,n=window.innerHeight,o=h.container.offset(),l=[[o.left,o.top],[o.left+h.width,o.top],[o.left,o.top+h.height],[o.left+h.width,o.top+h.height]],d=0;d<l.length;d++){var p=l[d];p[0]>=s.left&&p[0]<=s.left+i&&p[1]>=s.top&&p[1]<=s.top+n&&(a=!0)}if(!a)return}r()?((37===t||39===t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),39===t&&h.slideNext(),37===t&&h.slidePrev()):((38===t||40===t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===t&&h.slideNext(),38===t&&h.slidePrev())}}function l(e){e.originalEvent&&(e=e.originalEvent);var t=h._wheelEvent,a=0;if(e.detail)a=-e.detail;else if("mousewheel"===t)if(h.params.mousewheelForceToAxis)if(r()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;a=e.wheelDeltaX}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;a=e.wheelDeltaY}else a=e.wheelDelta;else if("DOMMouseScroll"===t)a=-e.detail;else if("wheel"===t)if(h.params.mousewheelForceToAxis)if(r()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;a=-e.deltaX}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;a=-e.deltaY}else a=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX:-e.deltaY;if(h.params.freeMode){var s=h.getWrapperTranslate()+a;if(s>0&&(s=0),s<h.maxTranslate()&&(s=h.maxTranslate()),h.setWrapperTransition(0),h.setWrapperTranslate(s),h.updateProgress(),h.updateActiveIndex(),0===s||s===h.maxTranslate())return}else(new Date).getTime()-h._lastWheelScrollTime>60&&(0>a?h.slideNext():h.slidePrev()),h._lastWheelScrollTime=(new Date).getTime();return h.params.autoplay&&h.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}function d(e,t){e=g(e);var a,s,i;a=e.attr("data-swiper-parallax")||"0",s=e.attr("data-swiper-parallax-x"),i=e.attr("data-swiper-parallax-y"),s||i?(s=s||"0",i=i||"0"):r()?(s=a,i="0"):(i=a,s="0"),s=s.indexOf("%")>=0?parseInt(s,10)*t+"%":s*t+"px",i=i.indexOf("%")>=0?parseInt(i,10)*t+"%":i*t+"px",e.transform("translate3d("+s+", "+i+",0px)")}function p(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof Swiper))return new Swiper(e,a);var u={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,keyboardControl:!1,mousewheelControl:!1,mousewheelForceToAxis:!1,hashnav:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,pagination:null,paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationHiddenClass:"swiper-pagination-hidden",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",runCallbacksOnInit:!0},c=a&&a.virtualTranslate;a=a||{};for(var m in u)if("undefined"==typeof a[m])a[m]=u[m];else if("object"==typeof a[m])for(var f in u[m])"undefined"==typeof a[m][f]&&(a[m][f]=u[m][f]);var h=this;h.params=a,h.classNames=[];var g;if(g="undefined"==typeof t?window.Dom7||window.Zepto||window.jQuery:t,g&&(h.$=g,h.container=g(e),0!==h.container.length)){if(h.container.length>1)return void h.container.each(function(){new Swiper(this,a)});h.container[0].swiper=h,h.container.data("swiper",h),h.classNames.push("swiper-container-"+h.params.direction),h.params.freeMode&&h.classNames.push("swiper-container-free-mode"),h.support.flexbox||(h.classNames.push("swiper-container-no-flexbox"),h.params.slidesPerColumn=1),(h.params.parallax||h.params.watchSlidesVisibility)&&(h.params.watchSlidesProgress=!0),["cube","coverflow"].indexOf(h.params.effect)>=0&&(h.support.transforms3d?(h.params.watchSlidesProgress=!0,h.classNames.push("swiper-container-3d")):h.params.effect="slide"),"slide"!==h.params.effect&&h.classNames.push("swiper-container-"+h.params.effect),"cube"===h.params.effect&&(h.params.resistanceRatio=0,h.params.slidesPerView=1,h.params.slidesPerColumn=1,h.params.slidesPerGroup=1,h.params.centeredSlides=!1,h.params.spaceBetween=0,h.params.virtualTranslate=!0,h.params.setWrapperSize=!1),"fade"===h.params.effect&&(h.params.slidesPerView=1,h.params.slidesPerColumn=1,h.params.slidesPerGroup=1,h.params.watchSlidesProgress=!0,h.params.spaceBetween=0,"undefined"==typeof c&&(h.params.virtualTranslate=!0)),h.params.grabCursor&&h.support.touch&&(h.params.grabCursor=!1),h.wrapper=h.container.children("."+h.params.wrapperClass),h.params.pagination&&(h.paginationContainer=g(h.params.pagination),h.params.paginationClickable&&h.paginationContainer.addClass("swiper-pagination-clickable")),h.rtl=r()&&("rtl"===h.container[0].dir.toLowerCase()||"rtl"===h.container.css("direction")),h.rtl&&h.classNames.push("swiper-container-rtl"),h.rtl&&(h.wrongRTL="-webkit-box"===h.wrapper.css("display")),h.params.slidesPerColumn>1&&h.classNames.push("swiper-container-multirow"),h.device.android&&h.classNames.push("swiper-container-android"),h.container.addClass(h.classNames.join(" ")),h.translate=0,h.progress=0,h.velocity=0,h.lockSwipeToNext=function(){h.params.allowSwipeToNext=!1},h.lockSwipeToPrev=function(){h.params.allowSwipeToPrev=!1},h.lockSwipes=function(){h.params.allowSwipeToNext=h.params.allowSwipeToPrev=!1},h.unlockSwipeToNext=function(){h.params.allowSwipeToNext=!0},h.unlockSwipeToPrev=function(){h.params.allowSwipeToPrev=!0},h.unlockSwipes=function(){h.params.allowSwipeToNext=h.params.allowSwipeToPrev=!0},h.params.grabCursor&&(h.container[0].style.cursor="move",h.container[0].style.cursor="-webkit-grab",h.container[0].style.cursor="-moz-grab",h.container[0].style.cursor="grab"),h.imagesToLoad=[],h.imagesLoaded=0,h.loadImage=function(e,t,a,r){function s(){r&&r()}var i;e.complete&&a?s():t?(i=new Image,i.onload=s,i.onerror=s,i.src=t):s()},h.preloadImages=function(){function e(){"undefined"!=typeof h&&null!==h&&(void 0!==h.imagesLoaded&&h.imagesLoaded++,h.imagesLoaded===h.imagesToLoad.length&&(h.params.updateOnImagesReady&&h.update(),h.emit("onImagesReady",h)))}h.imagesToLoad=h.container.find("img");for(var t=0;t<h.imagesToLoad.length;t++)h.loadImage(h.imagesToLoad[t],h.imagesToLoad[t].currentSrc||h.imagesToLoad[t].getAttribute("src"),!0,e)},h.autoplayTimeoutId=void 0,h.autoplaying=!1,h.autoplayPaused=!1,h.startAutoplay=function(){return"undefined"!=typeof h.autoplayTimeoutId?!1:h.params.autoplay?h.autoplaying?!1:(h.autoplaying=!0,h.emit("onAutoplayStart",h),void s()):!1},h.stopAutoplay=function(){h.autoplayTimeoutId&&(h.autoplayTimeoutId&&clearTimeout(h.autoplayTimeoutId),h.autoplaying=!1,h.autoplayTimeoutId=void 0,h.emit("onAutoplayStop",h))},h.pauseAutoplay=function(e){h.autoplayPaused||(h.autoplayTimeoutId&&clearTimeout(h.autoplayTimeoutId),h.autoplayPaused=!0,0===e?(h.autoplayPaused=!1,s()):h.wrapper.transitionEnd(function(){h.autoplayPaused=!1,h.autoplaying?s():h.stopAutoplay()}))},h.minTranslate=function(){return-h.snapGrid[0]},h.maxTranslate=function(){return-h.snapGrid[h.snapGrid.length-1]},h.updateContainerSize=function(){h.width=h.container[0].clientWidth,h.height=h.container[0].clientHeight,h.size=r()?h.width:h.height},h.updateSlidesSize=function(){h.slides=h.wrapper.children("."+h.params.slideClass),h.snapGrid=[],h.slidesGrid=[],h.slidesSizesGrid=[];var e,t=h.params.spaceBetween,a=0,s=0,i=0;"string"==typeof t&&t.indexOf("%")>=0&&(t=parseFloat(t.replace("%",""))/100*h.size),h.virtualSize=-t,h.slides.css(h.rtl?{marginLeft:"",marginTop:""}:{marginRight:"",marginBottom:""});var n;h.params.slidesPerColumn>1&&(n=Math.floor(h.slides.length/h.params.slidesPerColumn)===h.slides.length/h.params.slidesPerColumn?h.slides.length:Math.ceil(h.slides.length/h.params.slidesPerColumn)*h.params.slidesPerColumn);var o;for(e=0;e<h.slides.length;e++){o=0;var l=h.slides.eq(e);if(h.params.slidesPerColumn>1){var d,p,u,c,m=h.params.slidesPerColumn;"column"===h.params.slidesPerColumnFill?(p=Math.floor(e/m),u=e-p*m,d=p+u*n/m,l.css({"-webkit-box-ordinal-group":d,"-moz-box-ordinal-group":d,"-ms-flex-order":d,"-webkit-order":d,order:d})):(c=n/m,u=Math.floor(e/c),p=e-u*c),l.css({"margin-top":0!==u&&h.params.spaceBetween&&h.params.spaceBetween+"px"}).attr("data-swiper-column",p).attr("data-swiper-row",u)}"none"!==l.css("display")&&("auto"===h.params.slidesPerView?o=r()?l.outerWidth(!0):l.outerHeight(!0):(o=(h.size-(h.params.slidesPerView-1)*t)/h.params.slidesPerView,r()?h.slides[e].style.width=o+"px":h.slides[e].style.height=o+"px"),h.slides[e].swiperSlideSize=o,h.slidesSizesGrid.push(o),h.params.centeredSlides?(a=a+o/2+s/2+t,0===e&&(a=a-h.size/2-t),Math.abs(a)<.001&&(a=0),i%h.params.slidesPerGroup===0&&h.snapGrid.push(a),h.slidesGrid.push(a)):(i%h.params.slidesPerGroup===0&&h.snapGrid.push(a),h.slidesGrid.push(a),a=a+o+t),h.virtualSize+=o+t,s=o,i++)}h.virtualSize=Math.max(h.virtualSize,h.size);var f;if(h.rtl&&h.wrongRTL&&("slide"===h.params.effect||"coverflow"===h.params.effect)&&h.wrapper.css({width:h.virtualSize+h.params.spaceBetween+"px"}),(!h.support.flexbox||h.params.setWrapperSize)&&h.wrapper.css(r()?{width:h.virtualSize+h.params.spaceBetween+"px"}:{height:h.virtualSize+h.params.spaceBetween+"px"}),h.params.slidesPerColumn>1&&(h.virtualSize=(o+h.params.spaceBetween)*n,h.virtualSize=Math.ceil(h.virtualSize/h.params.slidesPerColumn)-h.params.spaceBetween,h.wrapper.css({width:h.virtualSize+h.params.spaceBetween+"px"}),h.params.centeredSlides)){for(f=[],e=0;e<h.snapGrid.length;e++)h.snapGrid[e]<h.virtualSize+h.snapGrid[0]&&f.push(h.snapGrid[e]);h.snapGrid=f}if(!h.params.centeredSlides){for(f=[],e=0;e<h.snapGrid.length;e++)h.snapGrid[e]<=h.virtualSize-h.size&&f.push(h.snapGrid[e]);h.snapGrid=f,Math.floor(h.virtualSize-h.size)>Math.floor(h.snapGrid[h.snapGrid.length-1])&&h.snapGrid.push(h.virtualSize-h.size)}0===h.snapGrid.length&&(h.snapGrid=[0]),0!==h.params.spaceBetween&&h.slides.css(r()?h.rtl?{marginLeft:t+"px"}:{marginRight:t+"px"}:{marginBottom:t+"px"}),h.params.watchSlidesProgress&&h.updateSlidesOffset()},h.updateSlidesOffset=function(){for(var e=0;e<h.slides.length;e++)h.slides[e].swiperSlideOffset=r()?h.slides[e].offsetLeft:h.slides[e].offsetTop},h.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=h.translate||0),0!==h.slides.length){"undefined"==typeof h.slides[0].swiperSlideOffset&&h.updateSlidesOffset();var t=h.params.centeredSlides?-e+h.size/2:-e;h.rtl&&(t=h.params.centeredSlides?e-h.size/2:e);{h.container[0].getBoundingClientRect(),r()?"left":"top",r()?"right":"bottom"}h.slides.removeClass(h.params.slideVisibleClass);for(var a=0;a<h.slides.length;a++){var s=h.slides[a],i=h.params.centeredSlides===!0?s.swiperSlideSize/2:0,n=(t-s.swiperSlideOffset-i)/(s.swiperSlideSize+h.params.spaceBetween);if(h.params.watchSlidesVisibility){var o=-(t-s.swiperSlideOffset-i),l=o+h.slidesSizesGrid[a],d=o>=0&&o<h.size||l>0&&l<=h.size||0>=o&&l>=h.size;d&&h.slides.eq(a).addClass(h.params.slideVisibleClass)}s.progress=h.rtl?-n:n}}},h.updateProgress=function(e){"undefined"==typeof e&&(e=h.translate||0);var t=h.maxTranslate()-h.minTranslate();0===t?(h.progress=0,h.isBeginning=h.isEnd=!0):(h.progress=(e-h.minTranslate())/t,h.isBeginning=h.progress<=0,h.isEnd=h.progress>=1),h.isBeginning&&h.emit("onReachBeginning",h),h.isEnd&&h.emit("onReachEnd",h),h.params.watchSlidesProgress&&h.updateSlidesProgress(e),h.emit("onProgress",h,h.progress)},h.updateActiveIndex=function(){var e,t,a,r=h.rtl?h.translate:-h.translate;for(t=0;t<h.slidesGrid.length;t++)"undefined"!=typeof h.slidesGrid[t+1]?r>=h.slidesGrid[t]&&r<h.slidesGrid[t+1]-(h.slidesGrid[t+1]-h.slidesGrid[t])/2?e=t:r>=h.slidesGrid[t]&&r<h.slidesGrid[t+1]&&(e=t+1):r>=h.slidesGrid[t]&&(e=t);(0>e||"undefined"==typeof e)&&(e=0),a=Math.floor(e/h.params.slidesPerGroup),a>=h.snapGrid.length&&(a=h.snapGrid.length-1),e!==h.activeIndex&&(h.snapIndex=a,h.previousIndex=h.activeIndex,h.activeIndex=e,h.updateClasses())},h.updateClasses=function(){h.slides.removeClass(h.params.slideActiveClass+" "+h.params.slideNextClass+" "+h.params.slidePrevClass);var e=h.slides.eq(h.activeIndex);if(e.addClass(h.params.slideActiveClass),e.next("."+h.params.slideClass).addClass(h.params.slideNextClass),e.prev("."+h.params.slideClass).addClass(h.params.slidePrevClass),h.bullets&&h.bullets.length>0){h.bullets.removeClass(h.params.bulletActiveClass);var t;h.params.loop?(t=Math.ceil(h.activeIndex-h.loopedSlides)/h.params.slidesPerGroup,t>h.slides.length-1-2*h.loopedSlides&&(t-=h.slides.length-2*h.loopedSlides),t>h.bullets.length-1&&(t-=h.bullets.length)):t="undefined"!=typeof h.snapIndex?h.snapIndex:h.activeIndex||0,h.paginationContainer.length>1?h.bullets.each(function(){g(this).index()===t&&g(this).addClass(h.params.bulletActiveClass)}):h.bullets.eq(t).addClass(h.params.bulletActiveClass)}h.params.loop||(h.params.prevButton&&(h.isBeginning?(g(h.params.prevButton).addClass(h.params.buttonDisabledClass),h.params.a11y&&h.a11y&&h.a11y.disable(g(h.params.prevButton))):(g(h.params.prevButton).removeClass(h.params.buttonDisabledClass),h.params.a11y&&h.a11y&&h.a11y.enable(g(h.params.prevButton)))),h.params.nextButton&&(h.isEnd?(g(h.params.nextButton).addClass(h.params.buttonDisabledClass),h.params.a11y&&h.a11y&&h.a11y.disable(g(h.params.nextButton))):(g(h.params.nextButton).removeClass(h.params.buttonDisabledClass),h.params.a11y&&h.a11y&&h.a11y.enable(g(h.params.nextButton)))))},h.updatePagination=function(){if(h.params.pagination&&h.paginationContainer&&h.paginationContainer.length>0){for(var e="",t=h.params.loop?Math.ceil((h.slides.length-2*h.loopedSlides)/h.params.slidesPerGroup):h.snapGrid.length,a=0;t>a;a++)e+=h.params.paginationBulletRender?h.params.paginationBulletRender(a,h.params.bulletClass):'<span class="'+h.params.bulletClass+'"></span>';h.paginationContainer.html(e),h.bullets=h.paginationContainer.find("."+h.params.bulletClass)}},h.update=function(e){function t(){r=Math.min(Math.max(h.translate,h.maxTranslate()),h.minTranslate()),h.setWrapperTranslate(r),h.updateActiveIndex(),h.updateClasses()}if(h.updateContainerSize(),h.updateSlidesSize(),h.updateProgress(),h.updatePagination(),h.updateClasses(),h.params.scrollbar&&h.scrollbar&&h.scrollbar.set(),e){var a,r;h.params.freeMode?t():(a="auto"===h.params.slidesPerView&&h.isEnd&&!h.params.centeredSlides?h.slideTo(h.slides.length-1,0,!1,!0):h.slideTo(h.activeIndex,0,!1,!0),a||t())}},h.onResize=function(){if(h.updateContainerSize(),h.updateSlidesSize(),h.updateProgress(),("auto"===h.params.slidesPerView||h.params.freeMode)&&h.updatePagination(),h.params.scrollbar&&h.scrollbar&&h.scrollbar.set(),h.params.freeMode){var e=Math.min(Math.max(h.translate,h.maxTranslate()),h.minTranslate());h.setWrapperTranslate(e),h.updateActiveIndex(),h.updateClasses()}else h.updateClasses(),"auto"===h.params.slidesPerView&&h.isEnd&&!h.params.centeredSlides?h.slideTo(h.slides.length-1,0,!1,!0):h.slideTo(h.activeIndex,0,!1,!0)};var v=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?v=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(v=["MSPointerDown","MSPointerMove","MSPointerUp"]),h.touchEvents={start:h.support.touch||!h.params.simulateTouch?"touchstart":v[0],move:h.support.touch||!h.params.simulateTouch?"touchmove":v[1],end:h.support.touch||!h.params.simulateTouch?"touchend":v[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===h.params.touchEventsTarget?h.container:h.wrapper).addClass("swiper-wp8-"+h.params.direction),h.initEvents=function(e){var t=e?"off":"on",r=e?"removeEventListener":"addEventListener",s="container"===h.params.touchEventsTarget?h.container[0]:h.wrapper[0],i=h.support.touch?s:document,n=h.params.nested?!0:!1;h.browser.ie?(s[r](h.touchEvents.start,h.onTouchStart,!1),i[r](h.touchEvents.move,h.onTouchMove,n),i[r](h.touchEvents.end,h.onTouchEnd,!1)):(h.support.touch&&(s[r](h.touchEvents.start,h.onTouchStart,!1),s[r](h.touchEvents.move,h.onTouchMove,n),s[r](h.touchEvents.end,h.onTouchEnd,!1)),!a.simulateTouch||h.device.ios||h.device.android||(s[r]("mousedown",h.onTouchStart,!1),i[r]("mousemove",h.onTouchMove,n),i[r]("mouseup",h.onTouchEnd,!1))),window[r]("resize",h.onResize),h.params.nextButton&&(g(h.params.nextButton)[t]("click",h.onClickNext),h.params.a11y&&h.a11y&&g(h.params.nextButton)[t]("keydown",h.a11y.onEnterKey)),h.params.prevButton&&(g(h.params.prevButton)[t]("click",h.onClickPrev),h.params.a11y&&h.a11y&&g(h.params.prevButton)[t]("keydown",h.a11y.onEnterKey)),h.params.pagination&&h.params.paginationClickable&&g(h.paginationContainer)[t]("click","."+h.params.bulletClass,h.onClickIndex),(h.params.preventClicks||h.params.preventClicksPropagation)&&s[r]("click",h.preventClicks,!0)},h.attachEvents=function(){h.initEvents()},h.detachEvents=function(){h.initEvents(!0)},h.allowClick=!0,h.preventClicks=function(e){h.allowClick||(h.params.preventClicks&&e.preventDefault(),h.params.preventClicksPropagation&&(e.stopPropagation(),e.stopImmediatePropagation()))},h.onClickNext=function(e){e.preventDefault(),h.slideNext()},h.onClickPrev=function(e){e.preventDefault(),h.slidePrev()},h.onClickIndex=function(e){e.preventDefault();var t=g(this).index()*h.params.slidesPerGroup;h.params.loop&&(t+=h.loopedSlides),h.slideTo(t)},h.updateClickedSlide=function(e){var t=i(e,"."+h.params.slideClass);if(!t)return h.clickedSlide=void 0,void(h.clickedIndex=void 0);if(h.clickedSlide=t,h.clickedIndex=g(t).index(),h.params.slideToClickedSlide&&void 0!==h.clickedIndex&&h.clickedIndex!==h.activeIndex){var a,r=h.clickedIndex;if(h.params.loop)if(a=g(h.clickedSlide).attr("data-swiper-slide-index"),r>h.slides.length-h.params.slidesPerView)h.fixLoop(),r=h.wrapper.children("."+h.params.slideClass+'[data-swiper-slide-index="'+a+'"]').eq(0).index(),setTimeout(function(){h.slideTo(r)},0);else if(r<h.params.slidesPerView-1){h.fixLoop();var s=h.wrapper.children("."+h.params.slideClass+'[data-swiper-slide-index="'+a+'"]');r=s.eq(s.length-1).index(),setTimeout(function(){h.slideTo(r)},0)}else h.slideTo(r);else h.slideTo(r)}};var w,y,b,x,T,S,C,M,E,z="input, select, textarea, button",P=Date.now(),I=[];h.animating=!1,h.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var k,L;if(h.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),k="touchstart"===e.type,k||!("which"in e)||3!==e.which){if(h.params.noSwiping&&i(e,"."+h.params.noSwipingClass))return void(h.allowClick=!0);if(!h.params.swipeHandler||i(e,h.params.swipeHandler)){if(w=!0,y=!1,x=void 0,L=void 0,h.touches.startX=h.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,h.touches.startY=h.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,b=Date.now(),h.allowClick=!0,h.updateContainerSize(),h.swipeDirection=void 0,h.params.threshold>0&&(C=!1),"touchstart"!==e.type){var t=!0;g(e.target).is(z)&&(t=!1),document.activeElement&&g(document.activeElement).is(z)&&document.activeElement.blur(),t&&e.preventDefault()}h.emit("onTouchStart",h,e)}}},h.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!(k&&"mousemove"===e.type||e.preventedByNestedSwiper)){if(h.params.onlyExternal)return y=!0,void(h.allowClick=!1);if(k&&document.activeElement&&e.target===document.activeElement&&g(e.target).is(z))return y=!0,void(h.allowClick=!1);if(h.emit("onTouchMove",h,e),!(e.targetTouches&&e.targetTouches.length>1)){if(h.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,h.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof x){var t=180*Math.atan2(Math.abs(h.touches.currentY-h.touches.startY),Math.abs(h.touches.currentX-h.touches.startX))/Math.PI;x=r()?t>h.params.touchAngle:90-t>h.params.touchAngle}if(x&&h.emit("onTouchMoveOpposite",h,e),"undefined"==typeof L&&h.browser.ieTouch&&(h.touches.currentX!==h.touches.startX||h.touches.currentY!==h.touches.startY)&&(L=!0),w){if(x)return void(w=!1);if(L||!h.browser.ieTouch){h.allowClick=!1,h.emit("onSliderMove",h,e),e.preventDefault(),h.params.touchMoveStopPropagation&&!h.params.nested&&e.stopPropagation(),y||(a.loop&&h.fixLoop(),S=h.getWrapperTranslate(),h.setWrapperTransition(0),h.animating&&h.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),h.params.autoplay&&h.autoplaying&&(h.params.autoplayDisableOnInteraction?h.stopAutoplay():h.pauseAutoplay()),E=!1,h.params.grabCursor&&(h.container[0].style.cursor="move",h.container[0].style.cursor="-webkit-grabbing",h.container[0].style.cursor="-moz-grabbin",h.container[0].style.cursor="grabbing")),y=!0;var s=h.touches.diff=r()?h.touches.currentX-h.touches.startX:h.touches.currentY-h.touches.startY;s*=h.params.touchRatio,h.rtl&&(s=-s),h.swipeDirection=s>0?"prev":"next",T=s+S;var i=!0;if(s>0&&T>h.minTranslate()?(i=!1,h.params.resistance&&(T=h.minTranslate()-1+Math.pow(-h.minTranslate()+S+s,h.params.resistanceRatio))):0>s&&T<h.maxTranslate()&&(i=!1,h.params.resistance&&(T=h.maxTranslate()+1-Math.pow(h.maxTranslate()-S-s,h.params.resistanceRatio))),i&&(e.preventedByNestedSwiper=!0),!h.params.allowSwipeToNext&&"next"===h.swipeDirection&&S>T&&(T=S),!h.params.allowSwipeToPrev&&"prev"===h.swipeDirection&&T>S&&(T=S),h.params.followFinger){if(h.params.threshold>0){if(!(Math.abs(s)>h.params.threshold||C))return void(T=S);if(!C)return C=!0,h.touches.startX=h.touches.currentX,h.touches.startY=h.touches.currentY,T=S,void(h.touches.diff=r()?h.touches.currentX-h.touches.startX:h.touches.currentY-h.touches.startY)}(h.params.freeMode||h.params.watchSlidesProgress)&&h.updateActiveIndex(),h.params.freeMode&&(0===I.length&&I.push({position:h.touches[r()?"startX":"startY"],time:b}),I.push({position:h.touches[r()?"currentX":"currentY"],time:(new Date).getTime()})),h.updateProgress(T),h.setWrapperTranslate(T)}}}}}},h.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),h.emit("onTouchEnd",h,e),w){h.params.grabCursor&&y&&w&&(h.container[0].style.cursor="move",h.container[0].style.cursor="-webkit-grab",h.container[0].style.cursor="-moz-grab",h.container[0].style.cursor="grab");var t=Date.now(),a=t-b;if(h.allowClick&&(h.updateClickedSlide(e),h.emit("onTap",h,e),300>a&&t-P>300&&(M&&clearTimeout(M),M=setTimeout(function(){h&&(h.params.paginationHide&&h.paginationContainer.length>0&&!g(e.target).hasClass(h.params.bulletClass)&&h.paginationContainer.toggleClass(h.params.paginationHiddenClass),h.emit("onClick",h,e))},300)),300>a&&300>t-P&&(M&&clearTimeout(M),h.emit("onDoubleTap",h,e))),P=Date.now(),setTimeout(function(){h&&h.allowClick&&(h.allowClick=!0)},0),!w||!y||!h.swipeDirection||0===h.touches.diff||T===S)return void(w=y=!1);w=y=!1;var r;if(r=h.params.followFinger?h.rtl?h.translate:-h.translate:-T,h.params.freeMode){if(r<-h.minTranslate())return void h.slideTo(h.activeIndex);if(r>-h.maxTranslate())return void h.slideTo(h.slides.length-1);if(h.params.freeModeMomentum){if(I.length>1){var s=I.pop(),i=I.pop(),n=s.position-i.position,o=s.time-i.time;h.velocity=n/o,h.velocity=h.velocity/2,Math.abs(h.velocity)<.02&&(h.velocity=0),(o>150||(new Date).getTime()-s.time>300)&&(h.velocity=0)}else h.velocity=0;I.length=0;var l=1e3*h.params.freeModeMomentumRatio,d=h.velocity*l,p=h.translate+d;h.rtl&&(p=-p);var u,c=!1,m=20*Math.abs(h.velocity)*h.params.freeModeMomentumBounceRatio;p<h.maxTranslate()&&(h.params.freeModeMomentumBounce?(p+h.maxTranslate()<-m&&(p=h.maxTranslate()-m),u=h.maxTranslate(),c=!0,E=!0):p=h.maxTranslate()),p>h.minTranslate()&&(h.params.freeModeMomentumBounce?(p-h.minTranslate()>m&&(p=h.minTranslate()+m),u=h.minTranslate(),c=!0,E=!0):p=h.minTranslate()),0!==h.velocity&&(l=Math.abs(h.rtl?(-p-h.translate)/h.velocity:(p-h.translate)/h.velocity)),h.params.freeModeMomentumBounce&&c?(h.updateProgress(u),h.setWrapperTransition(l),h.setWrapperTranslate(p),h.onTransitionStart(),h.animating=!0,h.wrapper.transitionEnd(function(){E&&(h.emit("onMomentumBounce",h),h.setWrapperTransition(h.params.speed),h.setWrapperTranslate(u),h.wrapper.transitionEnd(function(){h.onTransitionEnd()}))})):h.velocity?(h.updateProgress(p),h.setWrapperTransition(l),h.setWrapperTranslate(p),h.onTransitionStart(),h.animating||(h.animating=!0,h.wrapper.transitionEnd(function(){h.onTransitionEnd()}))):h.updateProgress(p),h.updateActiveIndex()}return void((!h.params.freeModeMomentum||a>=h.params.longSwipesMs)&&(h.updateProgress(),h.updateActiveIndex()))}var f,v=0,x=h.slidesSizesGrid[0];for(f=0;f<h.slidesGrid.length;f+=h.params.slidesPerGroup)"undefined"!=typeof h.slidesGrid[f+h.params.slidesPerGroup]?r>=h.slidesGrid[f]&&r<h.slidesGrid[f+h.params.slidesPerGroup]&&(v=f,x=h.slidesGrid[f+h.params.slidesPerGroup]-h.slidesGrid[f]):r>=h.slidesGrid[f]&&(v=f,x=h.slidesGrid[h.slidesGrid.length-1]-h.slidesGrid[h.slidesGrid.length-2]);var C=(r-h.slidesGrid[v])/x;if(a>h.params.longSwipesMs){if(!h.params.longSwipes)return void h.slideTo(h.activeIndex);"next"===h.swipeDirection&&h.slideTo(C>=h.params.longSwipesRatio?v+h.params.slidesPerGroup:v),"prev"===h.swipeDirection&&h.slideTo(C>1-h.params.longSwipesRatio?v+h.params.slidesPerGroup:v)}else{if(!h.params.shortSwipes)return void h.slideTo(h.activeIndex);"next"===h.swipeDirection&&h.slideTo(v+h.params.slidesPerGroup),"prev"===h.swipeDirection&&h.slideTo(v)}}},h._slideTo=function(e,t){return h.slideTo(e,t,!0,!0)},h.slideTo=function(e,t,a,s){"undefined"==typeof a&&(a=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),h.snapIndex=Math.floor(e/h.params.slidesPerGroup),h.snapIndex>=h.snapGrid.length&&(h.snapIndex=h.snapGrid.length-1);var i=-h.snapGrid[h.snapIndex];h.params.autoplay&&h.autoplaying&&(s||!h.params.autoplayDisableOnInteraction?h.pauseAutoplay(t):h.stopAutoplay()),h.updateProgress(i);for(var n=0;n<h.slidesGrid.length;n++)-i>=h.slidesGrid[n]&&(e=n);if("undefined"==typeof t&&(t=h.params.speed),h.previousIndex=h.activeIndex||0,h.activeIndex=e,i===h.translate)return h.updateClasses(),!1;h.onTransitionStart(a);r()?i:0,r()?0:i;return 0===t?(h.setWrapperTransition(0),h.setWrapperTranslate(i),h.onTransitionEnd(a)):(h.setWrapperTransition(t),h.setWrapperTranslate(i),h.animating||(h.animating=!0,h.wrapper.transitionEnd(function(){h.onTransitionEnd(a)}))),h.updateClasses(),!0},h.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),h.lazy&&h.lazy.onTransitionStart(),e&&(h.emit("onTransitionStart",h),h.activeIndex!==h.previousIndex&&h.emit("onSlideChangeStart",h))},h.onTransitionEnd=function(e){h.animating=!1,h.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),h.lazy&&h.lazy.onTransitionEnd(),e&&(h.emit("onTransitionEnd",h),h.activeIndex!==h.previousIndex&&h.emit("onSlideChangeEnd",h)),h.params.hashnav&&h.hashnav&&h.hashnav.setHash()},h.slideNext=function(e,t,a){if(h.params.loop){if(h.animating)return!1;h.fixLoop();{h.container[0].clientLeft}return h.slideTo(h.activeIndex+h.params.slidesPerGroup,t,e,a)}return h.slideTo(h.activeIndex+h.params.slidesPerGroup,t,e,a)},h._slideNext=function(e){return h.slideNext(!0,e,!0)},h.slidePrev=function(e,t,a){if(h.params.loop){if(h.animating)return!1;h.fixLoop();{h.container[0].clientLeft}return h.slideTo(h.activeIndex-1,t,e,a)}return h.slideTo(h.activeIndex-1,t,e,a)},h._slidePrev=function(e){return h.slidePrev(!0,e,!0)},h.slideReset=function(e,t){return h.slideTo(h.activeIndex,t,e)},h.setWrapperTransition=function(e,t){h.wrapper.transition(e),"slide"!==h.params.effect&&h.effects[h.params.effect]&&h.effects[h.params.effect].setTransition(e),h.params.parallax&&h.parallax&&h.parallax.setTransition(e),h.params.scrollbar&&h.scrollbar&&h.scrollbar.setTransition(e),h.params.control&&h.controller&&h.controller.setTransition(e,t),h.emit("onSetTransition",h,e)},h.setWrapperTranslate=function(e,t,a){var s=0,i=0,n=0;r()?s=h.rtl?-e:e:i=e,h.params.virtualTranslate||h.wrapper.transform(h.support.transforms3d?"translate3d("+s+"px, "+i+"px, "+n+"px)":"translate("+s+"px, "+i+"px)"),h.translate=r()?s:i,t&&h.updateActiveIndex(),"slide"!==h.params.effect&&h.effects[h.params.effect]&&h.effects[h.params.effect].setTranslate(h.translate),h.params.parallax&&h.parallax&&h.parallax.setTranslate(h.translate),h.params.scrollbar&&h.scrollbar&&h.scrollbar.setTranslate(h.translate),h.params.control&&h.controller&&h.controller.setTranslate(h.translate,a),h.emit("onSetTranslate",h,h.translate)},h.getTranslate=function(e,t){var a,r,s,i;return"undefined"==typeof t&&(t="x"),h.params.virtualTranslate?h.rtl?-h.translate:h.translate:(s=window.getComputedStyle(e,null),window.WebKitCSSMatrix?i=new WebKitCSSMatrix("none"===s.webkitTransform?"":s.webkitTransform):(i=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=i.toString().split(",")),"x"===t&&(r=window.WebKitCSSMatrix?i.m41:parseFloat(16===a.length?a[12]:a[4])),"y"===t&&(r=window.WebKitCSSMatrix?i.m42:parseFloat(16===a.length?a[13]:a[5])),h.rtl&&r&&(r=-r),r||0)},h.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=r()?"x":"y"),h.getTranslate(h.wrapper[0],e)},h.observers=[],h.initObservers=function(){if(h.params.observeParents)for(var e=h.container.parents(),t=0;t<e.length;t++)n(e[t]);n(h.container[0],{childList:!1}),n(h.wrapper[0],{attributes:!1})},h.disconnectObservers=function(){for(var e=0;e<h.observers.length;e++)h.observers[e].disconnect();h.observers=[]},h.createLoop=function(){h.wrapper.children("."+h.params.slideClass+"."+h.params.slideDuplicateClass).remove();
var e=h.wrapper.children("."+h.params.slideClass);h.loopedSlides=parseInt(h.params.loopedSlides||h.params.slidesPerView,10),h.loopedSlides=h.loopedSlides+h.params.loopAdditionalSlides,h.loopedSlides>e.length&&(h.loopedSlides=e.length);var t,a=[],r=[];for(e.each(function(t,s){var i=g(this);t<h.loopedSlides&&r.push(s),t<e.length&&t>=e.length-h.loopedSlides&&a.push(s),i.attr("data-swiper-slide-index",t)}),t=0;t<r.length;t++)h.wrapper.append(g(r[t].cloneNode(!0)).addClass(h.params.slideDuplicateClass));for(t=a.length-1;t>=0;t--)h.wrapper.prepend(g(a[t].cloneNode(!0)).addClass(h.params.slideDuplicateClass))},h.destroyLoop=function(){h.wrapper.children("."+h.params.slideClass+"."+h.params.slideDuplicateClass).remove(),h.slides.removeAttr("data-swiper-slide-index")},h.fixLoop=function(){var e;h.activeIndex<h.loopedSlides?(e=h.slides.length-3*h.loopedSlides+h.activeIndex,e+=h.loopedSlides,h.slideTo(e,0,!1,!0)):("auto"===h.params.slidesPerView&&h.activeIndex>=2*h.loopedSlides||h.activeIndex>h.slides.length-2*h.params.slidesPerView)&&(e=-h.slides.length+h.activeIndex+h.loopedSlides,e+=h.loopedSlides,h.slideTo(e,0,!1,!0))},h.appendSlide=function(e){if(h.params.loop&&h.destroyLoop(),"object"==typeof e&&e.length)for(var t=0;t<e.length;t++)e[t]&&h.wrapper.append(e[t]);else h.wrapper.append(e);h.params.loop&&h.createLoop(),h.params.observer&&h.support.observer||h.update(!0)},h.prependSlide=function(e){h.params.loop&&h.destroyLoop();var t=h.activeIndex+1;if("object"==typeof e&&e.length){for(var a=0;a<e.length;a++)e[a]&&h.wrapper.prepend(e[a]);t=h.activeIndex+e.length}else h.wrapper.prepend(e);h.params.loop&&h.createLoop(),h.params.observer&&h.support.observer||h.update(!0),h.slideTo(t,0,!1)},h.removeSlide=function(e){h.params.loop&&h.destroyLoop();var t,a=h.activeIndex;if("object"==typeof e&&e.length){for(var r=0;r<e.length;r++)t=e[r],h.slides[t]&&h.slides.eq(t).remove(),a>t&&a--;a=Math.max(a,0)}else t=e,h.slides[t]&&h.slides.eq(t).remove(),a>t&&a--,a=Math.max(a,0);h.params.observer&&h.support.observer||h.update(!0),h.slideTo(a,0,!1)},h.removeAllSlides=function(){for(var e=[],t=0;t<h.slides.length;t++)e.push(t);h.removeSlide(e)},h.effects={fade:{fadeIndex:null,setTranslate:function(){for(var e=0;e<h.slides.length;e++){var t=h.slides.eq(e),a=t[0].swiperSlideOffset,s=-a;h.params.virtualTranslate||(s-=h.translate);var i=0;r()||(i=s,s=0);var n=h.params.fade.crossFade?Math.max(1-Math.abs(t[0].progress),0):1+Math.min(Math.max(t[0].progress,-1),0);n>0&&1>n&&(h.effects.fade.fadeIndex=e),t.css({opacity:n}).transform("translate3d("+s+"px, "+i+"px, 0px)")}},setTransition:function(e){if(h.slides.transition(e),h.params.virtualTranslate&&0!==e){var t=null!==h.effects.fade.fadeIndex?h.effects.fade.fadeIndex:h.activeIndex;h.slides.eq(t).transitionEnd(function(){for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)h.wrapper.trigger(e[t])})}}},cube:{setTranslate:function(){var e,t=0;h.params.cube.shadow&&(r()?(e=h.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=g('<div class="swiper-cube-shadow"></div>'),h.wrapper.append(e)),e.css({height:h.width+"px"})):(e=h.container.find(".swiper-cube-shadow"),0===e.length&&(e=g('<div class="swiper-cube-shadow"></div>'),h.container.append(e))));for(var a=0;a<h.slides.length;a++){var s=h.slides.eq(a),i=90*a,n=Math.floor(i/360);h.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(s[0].progress,1),-1),l=0,d=0,p=0;a%4===0?(l=4*-n*h.size,p=0):(a-1)%4===0?(l=0,p=4*-n*h.size):(a-2)%4===0?(l=h.size+4*n*h.size,p=h.size):(a-3)%4===0&&(l=-h.size,p=3*h.size+4*h.size*n),h.rtl&&(l=-l),r()||(d=l,l=0);var u="rotateX("+(r()?0:-i)+"deg) rotateY("+(r()?i:0)+"deg) translate3d("+l+"px, "+d+"px, "+p+"px)";if(1>=o&&o>-1&&(t=90*a+90*o,h.rtl&&(t=90*-a-90*o)),s.transform(u),h.params.cube.slideShadows){var c=s.find(r()?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),m=s.find(r()?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===c.length&&(c=g('<div class="swiper-slide-shadow-'+(r()?"left":"top")+'"></div>'),s.append(c)),0===m.length&&(m=g('<div class="swiper-slide-shadow-'+(r()?"right":"bottom")+'"></div>'),s.append(m));{s[0].progress}c.length&&(c[0].style.opacity=-s[0].progress),m.length&&(m[0].style.opacity=s[0].progress)}}if(h.wrapper.css({"-webkit-transform-origin":"50% 50% -"+h.size/2+"px","-moz-transform-origin":"50% 50% -"+h.size/2+"px","-ms-transform-origin":"50% 50% -"+h.size/2+"px","transform-origin":"50% 50% -"+h.size/2+"px"}),h.params.cube.shadow)if(r())e.transform("translate3d(0px, "+(h.width/2+h.params.cube.shadowOffset)+"px, "+-h.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+h.params.cube.shadowScale+")");else{var f=Math.abs(t)-90*Math.floor(Math.abs(t)/90),v=1.5-(Math.sin(2*f*Math.PI/360)/2+Math.cos(2*f*Math.PI/360)/2),w=h.params.cube.shadowScale,y=h.params.cube.shadowScale/v,b=h.params.cube.shadowOffset;e.transform("scale3d("+w+", 1, "+y+") translate3d(0px, "+(h.height/2+b)+"px, "+-h.height/2/y+"px) rotateX(-90deg)")}var x=h.isSafari||h.isUiWebView?-h.size/2:0;h.wrapper.transform("translate3d(0px,0,"+x+"px) rotateX("+(r()?0:t)+"deg) rotateY("+(r()?-t:0)+"deg)")},setTransition:function(e){h.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),h.params.cube.shadow&&!r()&&h.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=h.translate,t=r()?-e+h.width/2:-e+h.height/2,a=r()?h.params.coverflow.rotate:-h.params.coverflow.rotate,s=h.params.coverflow.depth,i=0,n=h.slides.length;n>i;i++){var o=h.slides.eq(i),l=h.slidesSizesGrid[i],d=o[0].swiperSlideOffset,p=(t-d-l/2)/l*h.params.coverflow.modifier,u=r()?a*p:0,c=r()?0:a*p,m=-s*Math.abs(p),f=r()?0:h.params.coverflow.stretch*p,v=r()?h.params.coverflow.stretch*p:0;Math.abs(v)<.001&&(v=0),Math.abs(f)<.001&&(f=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var w="translate3d("+v+"px,"+f+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(w),o[0].style.zIndex=-Math.abs(Math.round(p))+1,h.params.coverflow.slideShadows){var y=o.find(r()?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),b=o.find(r()?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===y.length&&(y=g('<div class="swiper-slide-shadow-'+(r()?"left":"top")+'"></div>'),o.append(y)),0===b.length&&(b=g('<div class="swiper-slide-shadow-'+(r()?"right":"bottom")+'"></div>'),o.append(b)),y.length&&(y[0].style.opacity=p>0?p:0),b.length&&(b[0].style.opacity=-p>0?-p:0)}}if(h.browser.ie){var x=h.wrapper[0].style;x.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){h.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},h.lazy={initialImageLoaded:!1,loadImageInSlide:function(e){if("undefined"!=typeof e&&0!==h.slides.length){var t=h.slides.eq(e),a=t.find("img.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");0!==a.length&&a.each(function(){var e=g(this);e.addClass("swiper-lazy-loading");var a=e.attr("data-src");h.loadImage(e[0],a,!1,function(){e.attr("src",a),e.removeAttr("data-src"),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),t.find(".swiper-lazy-preloader, .preloader").remove(),h.emit("onLazyImageReady",h,t[0],e[0])}),h.emit("onLazyImageLoad",h,t[0],e[0])})}},load:function(){if(h.params.watchSlidesVisibility)h.wrapper.children("."+h.params.slideVisibleClass).each(function(){h.lazy.loadImageInSlide(g(this).index())});else if(h.params.slidesPerView>1)for(var e=h.activeIndex;e<h.activeIndex+h.params.slidesPerView;e++)h.slides[e]&&h.lazy.loadImageInSlide(e);else h.lazy.loadImageInSlide(h.activeIndex);if(h.params.lazyLoadingInPrevNext){var t=h.wrapper.children("."+h.params.slideNextClass);t.length>0&&h.lazy.loadImageInSlide(t.index());var a=h.wrapper.children("."+h.params.slidePrevClass);a.length>0&&h.lazy.loadImageInSlide(a.index())}},onTransitionStart:function(){h.params.lazyLoading&&(h.params.lazyLoadingOnTransitionStart||!h.params.lazyLoadingOnTransitionStart&&!h.lazy.initialImageLoaded)&&(h.lazy.initialImageLoaded=!0,h.lazy.load())},onTransitionEnd:function(){h.params.lazyLoading&&!h.params.lazyLoadingOnTransitionStart&&h.lazy.load()}},h.scrollbar={set:function(){if(h.params.scrollbar){var e=h.scrollbar;e.track=g(h.params.scrollbar),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=g('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=r()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=h.size/h.virtualSize,e.moveDivider=e.divider*(e.trackSize/h.size),e.dragSize=e.trackSize*e.divider,r()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.track[0].style.display=e.divider>=1?"none":"",h.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(h.params.scrollbar){var e,t=h.scrollbar,a=(h.translate||0,t.dragSize);e=(t.trackSize-t.dragSize)*h.progress,h.rtl&&r()?(e=-e,e>0?(a=t.dragSize-e,e=0):-e+t.dragSize>t.trackSize&&(a=t.trackSize+e)):0>e?(a=t.dragSize+e,e=0):e+t.dragSize>t.trackSize&&(a=t.trackSize-e),r()?(t.drag.transform(h.support.transforms3d?"translate3d("+e+"px, 0, 0)":"translateX("+e+"px)"),t.drag[0].style.width=a+"px"):(t.drag.transform(h.support.transforms3d?"translate3d(0px, "+e+"px, 0)":"translateY("+e+"px)"),t.drag[0].style.height=a+"px"),h.params.scrollbarHide&&(clearTimeout(t.timeout),t.track[0].style.opacity=1,t.timeout=setTimeout(function(){t.track[0].style.opacity=0,t.track.transition(400)},1e3))}},setTransition:function(e){h.params.scrollbar&&h.scrollbar.drag.transition(e)}},h.controller={setTranslate:function(e,t){var a,r,s=h.params.control;if(h.isArray(s))for(var i=0;i<s.length;i++)s[i]!==t&&s[i]instanceof Swiper&&(e=s[i].rtl&&"horizontal"===s[i].params.direction?-h.translate:h.translate,a=(s[i].maxTranslate()-s[i].minTranslate())/(h.maxTranslate()-h.minTranslate()),r=(e-h.minTranslate())*a+s[i].minTranslate(),h.params.controlInverse&&(r=s[i].maxTranslate()-r),s[i].updateProgress(r),s[i].setWrapperTranslate(r,!1,h),s[i].updateActiveIndex());else s instanceof Swiper&&t!==s&&(e=s.rtl&&"horizontal"===s.params.direction?-h.translate:h.translate,a=(s.maxTranslate()-s.minTranslate())/(h.maxTranslate()-h.minTranslate()),r=(e-h.minTranslate())*a+s.minTranslate(),h.params.controlInverse&&(r=s.maxTranslate()-r),s.updateProgress(r),s.setWrapperTranslate(r,!1,h),s.updateActiveIndex())},setTransition:function(e,t){var a=h.params.control;if(h.isArray(a))for(var r=0;r<a.length;r++)a[r]!==t&&a[r]instanceof Swiper&&a[r].setWrapperTransition(e,h);else a instanceof Swiper&&t!==a&&a.setWrapperTransition(e,h)}},h.hashnav={init:function(){if(h.params.hashnav){h.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var t=0,a=0,r=h.slides.length;r>a;a++){var s=h.slides.eq(a),i=s.attr("data-hash");if(i===e&&!s.hasClass(h.params.slideDuplicateClass)){var n=s.index();h.slideTo(n,t,h.params.runCallbacksOnInit,!0)}}}},setHash:function(){h.hashnav.initialized&&h.params.hashnav&&(document.location.hash=h.slides.eq(h.activeIndex).attr("data-hash")||"")}},h.disableKeyboardControl=function(){g(document).off("keydown",o)},h.enableKeyboardControl=function(){g(document).on("keydown",o)},h._wheelEvent=!1,h._lastWheelScrollTime=(new Date).getTime(),h.params.mousewheelControl){if(void 0!==document.onmousewheel&&(h._wheelEvent="mousewheel"),!h._wheelEvent)try{new WheelEvent("wheel"),h._wheelEvent="wheel"}catch(D){}h._wheelEvent||(h._wheelEvent="DOMMouseScroll")}h.disableMousewheelControl=function(){return h._wheelEvent?(h.container.off(h._wheelEvent,l),!0):!1},h.enableMousewheelControl=function(){return h._wheelEvent?(h.container.on(h._wheelEvent,l),!0):!1},h.parallax={setTranslate:function(){h.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){d(this,h.progress)}),h.slides.each(function(){var e=g(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=Math.min(Math.max(e[0].progress,-1),1);d(this,t)})})},setTransition:function(e){"undefined"==typeof e&&(e=h.params.speed),h.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=g(this),a=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(a=0),t.transition(a)})}},h._plugins=[];for(var B in h.plugins){var A=h.plugins[B](h,h.params[B]);A&&h._plugins.push(A)}return h.callPlugins=function(e){for(var t=0;t<h._plugins.length;t++)e in h._plugins[t]&&h._plugins[t][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},h.emitterEventListeners={},h.emit=function(e){h.params[e]&&h.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var t;if(h.emitterEventListeners[e])for(t=0;t<h.emitterEventListeners[e].length;t++)h.emitterEventListeners[e][t](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);h.callPlugins&&h.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},h.on=function(e,t){return e=p(e),h.emitterEventListeners[e]||(h.emitterEventListeners[e]=[]),h.emitterEventListeners[e].push(t),h},h.off=function(e,t){var a;if(e=p(e),"undefined"==typeof t)return h.emitterEventListeners[e]=[],h;if(h.emitterEventListeners[e]&&0!==h.emitterEventListeners[e].length){for(a=0;a<h.emitterEventListeners[e].length;a++)h.emitterEventListeners[e][a]===t&&h.emitterEventListeners[e].splice(a,1);return h}},h.once=function(e,t){e=p(e);var a=function(){t(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),h.off(e,a)};return h.on(e,a),h},h.a11y={makeFocusable:function(e){return e[0].tabIndex="0",e},addRole:function(e,t){return e.attr("role",t),e},addLabel:function(e,t){return e.attr("aria-label",t),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(g(e.target).is(h.params.nextButton)?(h.onClickNext(e),h.a11y.notify(h.isEnd?h.params.lastSlideMsg:h.params.nextSlideMsg)):g(e.target).is(h.params.prevButton)&&(h.onClickPrev(e),h.a11y.notify(h.isBeginning?h.params.firstSlideMsg:h.params.prevSlideMsg)))},liveRegion:g('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var t=h.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},init:function(){if(h.params.nextButton){var e=g(h.params.nextButton);h.a11y.makeFocusable(e),h.a11y.addRole(e,"button"),h.a11y.addLabel(e,h.params.nextSlideMsg)}if(h.params.prevButton){var t=g(h.params.prevButton);h.a11y.makeFocusable(t),h.a11y.addRole(t,"button"),h.a11y.addLabel(t,h.params.prevSlideMsg)}g(h.container).append(h.a11y.liveRegion)},destroy:function(){h.a11y.liveRegion&&h.a11y.liveRegion.length>0&&h.a11y.liveRegion.remove()}},h.init=function(){h.params.loop&&h.createLoop(),h.updateContainerSize(),h.updateSlidesSize(),h.updatePagination(),h.params.scrollbar&&h.scrollbar&&h.scrollbar.set(),"slide"!==h.params.effect&&h.effects[h.params.effect]&&(h.params.loop||h.updateProgress(),h.effects[h.params.effect].setTranslate()),h.params.loop?h.slideTo(h.params.initialSlide+h.loopedSlides,0,h.params.runCallbacksOnInit):(h.slideTo(h.params.initialSlide,0,h.params.runCallbacksOnInit),0===h.params.initialSlide&&(h.parallax&&h.params.parallax&&h.parallax.setTranslate(),h.lazy&&h.params.lazyLoading&&h.lazy.load())),h.attachEvents(),h.params.observer&&h.support.observer&&h.initObservers(),h.params.preloadImages&&!h.params.lazyLoading&&h.preloadImages(),h.params.autoplay&&h.startAutoplay(),h.params.keyboardControl&&h.enableKeyboardControl&&h.enableKeyboardControl(),h.params.mousewheelControl&&h.enableMousewheelControl&&h.enableMousewheelControl(),h.params.hashnav&&h.hashnav&&h.hashnav.init(),h.params.a11y&&h.a11y&&h.a11y.init(),h.emit("onInit",h)},h.cleanupStyles=function(){h.container.removeClass(h.classNames.join(" ")).removeAttr("style"),h.wrapper.removeAttr("style"),h.slides&&h.slides.length&&h.slides.removeClass([h.params.slideVisibleClass,h.params.slideActiveClass,h.params.slideNextClass,h.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),h.paginationContainer&&h.paginationContainer.length&&h.paginationContainer.removeClass(h.params.paginationHiddenClass),h.bullets&&h.bullets.length&&h.bullets.removeClass(h.params.bulletActiveClass),h.params.prevButton&&g(h.params.prevButton).removeClass(h.params.buttonDisabledClass),h.params.nextButton&&g(h.params.nextButton).removeClass(h.params.buttonDisabledClass),h.params.scrollbar&&h.scrollbar&&(h.scrollbar.track&&h.scrollbar.track.length&&h.scrollbar.track.removeAttr("style"),h.scrollbar.drag&&h.scrollbar.drag.length&&h.scrollbar.drag.removeAttr("style"))},h.destroy=function(e,t){h.detachEvents(),h.stopAutoplay(),h.params.loop&&h.destroyLoop(),t&&h.cleanupStyles(),h.disconnectObservers(),h.params.keyboardControl&&h.disableKeyboardControl&&h.disableKeyboardControl(),h.params.mousewheelControl&&h.disableMousewheelControl&&h.disableMousewheelControl(),h.params.a11y&&h.a11y&&h.a11y.destroy(),h.emit("onDestroy"),e!==!1&&(h=null)},h.init(),h}},Swiper.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,t=e.match(/(Android);?[\s\/]+([\d.]+)?/),a=e.match(/(iPad).*OS\s([\d_]+)/),r=(e.match(/(iPod)(.*OS\s([\d_]+))?/),!a&&e.match(/(iPhone\sOS)\s([\d_]+)/));return{ios:a||r||a,android:t}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a++)if(t[a]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var t=(function(){var e=function(e){var t=this,a=0;for(a=0;a<e.length;a++)t[a]=e[a];return t.length=e.length,this},t=function(t,a){var r=[],s=0;if(t&&!a&&t instanceof e)return t;if(t)if("string"==typeof t){var i,n,o=t.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),(0===o.indexOf("<td")||0===o.indexOf("<th"))&&(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=t,s=0;s<n.childNodes.length;s++)r.push(n.childNodes[s])}else for(i=a||"#"!==t[0]||t.match(/[ .<>:~]/)?(a||document).querySelectorAll(t):[document.getElementById(t.split("#")[1])],s=0;s<i.length;s++)i[s]&&r.push(i[s])}else if(t.nodeType||t===window||t===document)r.push(t);else if(t.length>0&&t[0].nodeType)for(s=0;s<t.length;s++)r.push(t[s]);return new e(r)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var t=e.split(" "),a=0;a<t.length;a++)for(var r=0;r<this.length;r++)this[r].classList.add(t[a]);return this},removeClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a++)for(var r=0;r<this.length;r++)this[r].classList.remove(t[a]);return this},hasClass:function(e){return this[0]?this[0].classList.contains(e):!1},toggleClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a++)for(var r=0;r<this.length;r++)this[r].classList.toggle(t[a]);return this},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var a=0;a<this.length;a++)if(2===arguments.length)this[a].setAttribute(e,t);else for(var r in e)this[a][r]=e[r],this[a].setAttribute(r,e[r]);return this},removeAttr:function(e){for(var t=0;t<this.length;t++)this[t].removeAttribute(e);return this},data:function(e,t){if("undefined"==typeof t){if(this[0]){var a=this[0].getAttribute("data-"+e);return a?a:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}return void 0}for(var r=0;r<this.length;r++){var s=this[r];s.dom7ElementDataStorage||(s.dom7ElementDataStorage={}),s.dom7ElementDataStorage[e]=t}return this},transform:function(e){for(var t=0;t<this.length;t++){var a=this[t].style;a.webkitTransform=a.MsTransform=a.msTransform=a.MozTransform=a.OTransform=a.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t++){var a=this[t].style;a.webkitTransitionDuration=a.MsTransitionDuration=a.msTransitionDuration=a.MozTransitionDuration=a.OTransitionDuration=a.transitionDuration=e}return this},on:function(e,a,r,s){function i(e){var s=e.target;if(t(s).is(a))r.call(s,e);else for(var i=t(s).parents(),n=0;n<i.length;n++)t(i[n]).is(a)&&r.call(i[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof a||a===!1)for("function"==typeof a&&(r=arguments[1],s=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],r,s);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:r,liveListener:i}),this[n].addEventListener(l[o],i,s);return this},off:function(e,t,a,r){for(var s=e.split(" "),i=0;i<s.length;i++)for(var n=0;n<this.length;n++)if("function"==typeof t||t===!1)"function"==typeof t&&(a=arguments[1],r=arguments[2]||!1),this[n].removeEventListener(s[i],a,r);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===a&&this[n].removeEventListener(s[i],this[n].dom7LiveListeners[o].liveListener,r);return this},once:function(e,t,a,r){function s(n){a(n),i.off(e,t,s,r)}var i=this;"function"==typeof t&&(t=!1,a=arguments[1],r=arguments[2]),i.on(e,t,s,r)},trigger:function(e,t){for(var a=0;a<this.length;a++){var r;try{r=new CustomEvent(e,{detail:t,bubbles:!0,cancelable:!0})}catch(s){r=document.createEvent("Event"),r.initEvent(e,!0,!0),r.detail=t}this[a].dispatchEvent(r)}return this},transitionEnd:function(e){function t(i){if(i.target===this)for(e.call(this,i),a=0;a<r.length;a++)s.off(r[a],t)}var a,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=this;if(e)for(a=0;a<r.length;a++)s.on(r[a],t);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],t=e.getBoundingClientRect(),a=document.body,r=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,i=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:t.top+i-r,left:t.left+n-s}}return null},css:function(e,t){var a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a++)for(var r in e)this[a].style[r]=e[r];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a++)this[a].style[e]=t;return this}return this},each:function(e){for(var t=0;t<this.length;t++)e.call(this[t],t,this[t]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t++)this[t].innerHTML=e;return this},is:function(a){if(!this[0])return!1;var r,s;if("string"==typeof a){var i=this[0];if(i===document)return a===document;if(i===window)return a===window;if(i.matches)return i.matches(a);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(a);if(i.mozMatchesSelector)return i.mozMatchesSelector(a);if(i.msMatchesSelector)return i.msMatchesSelector(a);for(r=t(a),s=0;s<r.length;s++)if(r[s]===this[0])return!0;return!1}if(a===document)return this[0]===document;if(a===window)return this[0]===window;if(a.nodeType||a instanceof e){for(r=a.nodeType?[a]:a,s=0;s<r.length;s++)if(r[s]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],t=0;null!==(e=e.previousSibling);)1===e.nodeType&&t++;return t}return void 0},eq:function(t){if("undefined"==typeof t)return this;var a,r=this.length;return t>r-1?new e([]):0>t?(a=r+t,new e(0>a?[]:[this[a]])):new e([this[t]])},append:function(t){var a,r;for(a=0;a<this.length;a++)if("string"==typeof t){var s=document.createElement("div");for(s.innerHTML=t;s.firstChild;)this[a].appendChild(s.firstChild)}else if(t instanceof e)for(r=0;r<t.length;r++)this[a].appendChild(t[r]);else this[a].appendChild(t);return this},prepend:function(t){var a,r;for(a=0;a<this.length;a++)if("string"==typeof t){var s=document.createElement("div");for(s.innerHTML=t,r=s.childNodes.length-1;r>=0;r--)this[a].insertBefore(s.childNodes[r],this[a].childNodes[0])}else if(t instanceof e)for(r=0;r<t.length;r++)this[a].insertBefore(t[r],this[a].childNodes[0]);else this[a].insertBefore(t,this[a].childNodes[0]);return this},insertBefore:function(e){for(var a=t(e),r=0;r<this.length;r++)if(1===a.length)a[0].parentNode.insertBefore(this[r],a[0]);else if(a.length>1)for(var s=0;s<a.length;s++)a[s].parentNode.insertBefore(this[r].cloneNode(!0),a[s])},insertAfter:function(e){for(var a=t(e),r=0;r<this.length;r++)if(1===a.length)a[0].parentNode.insertBefore(this[r],a[0].nextSibling);else if(a.length>1)for(var s=0;s<a.length;s++)a[s].parentNode.insertBefore(this[r].cloneNode(!0),a[s].nextSibling)},next:function(a){return new e(this.length>0?a?this[0].nextElementSibling&&t(this[0].nextElementSibling).is(a)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(a){var r=[],s=this[0];if(!s)return new e([]);for(;s.nextElementSibling;){var i=s.nextElementSibling;a?t(i).is(a)&&r.push(i):r.push(i),s=i}return new e(r)},prev:function(a){return new e(this.length>0?a?this[0].previousElementSibling&&t(this[0].previousElementSibling).is(a)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(a){var r=[],s=this[0];if(!s)return new e([]);for(;s.previousElementSibling;){var i=s.previousElementSibling;a?t(i).is(a)&&r.push(i):r.push(i),s=i}return new e(r)},parent:function(e){for(var a=[],r=0;r<this.length;r++)e?t(this[r].parentNode).is(e)&&a.push(this[r].parentNode):a.push(this[r].parentNode);return t(t.unique(a))},parents:function(e){for(var a=[],r=0;r<this.length;r++)for(var s=this[r].parentNode;s;)e?t(s).is(e)&&a.push(s):a.push(s),s=s.parentNode;return t(t.unique(a))},find:function(t){for(var a=[],r=0;r<this.length;r++)for(var s=this[r].querySelectorAll(t),i=0;i<s.length;i++)a.push(s[i]);return new e(a)},children:function(a){for(var r=[],s=0;s<this.length;s++)for(var i=this[s].childNodes,n=0;n<i.length;n++)a?1===i[n].nodeType&&t(i[n]).is(a)&&r.push(i[n]):1===i[n].nodeType&&r.push(i[n]);return new e(t.unique(r))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,a,r=this;for(e=0;e<arguments.length;e++){var s=t(arguments[e]);for(a=0;a<s.length;a++)r[r.length]=s[a],r.length++}return r}},t.fn=e.prototype,t.unique=function(e){for(var t=[],a=0;a<e.length;a++)-1===t.indexOf(e[a])&&t.push(e[a]);return t},t}()),a=["jQuery","Zepto","Dom7"],r=0;r<a.length;r++)window[a[r]]&&e(window[a[r]]);var s;s="undefined"==typeof t?window.Dom7||window.Zepto||window.jQuery:t,s&&("transitionEnd"in s.fn||(s.fn.transitionEnd=function(e){function t(i){if(i.target===this)for(e.call(this,i),a=0;a<r.length;a++)s.off(r[a],t)}var a,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=this;if(e)for(a=0;a<r.length;a++)s.on(r[a],t);return this}),"transform"in s.fn||(s.fn.transform=function(e){for(var t=0;t<this.length;t++){var a=this[t].style;a.webkitTransform=a.MsTransform=a.msTransform=a.MozTransform=a.OTransform=a.transform=e}return this}),"transition"in s.fn||(s.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t++){var a=this[t].style;a.webkitTransitionDuration=a.MsTransitionDuration=a.msTransitionDuration=a.MozTransitionDuration=a.OTransitionDuration=a.transitionDuration=e}return this}))}(),"undefined"!=typeof module?module.exports=Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return Swiper});
//# sourceMappingURL=maps/swiper.min.js.map


var SES = window.localStorage,
	ALT = null, //altura
	PES = null, //peso
	lang = 'en', //lenguaje por defecto
	langs = ['en','es'], //lenguajes existentes
	language = {}, //lenguajes existentes
	LASTTTACK = 0, //ultimo registro tomado
	SECOND = 0,
	CALO = 0, //calorias
	STEP = 0, //pasos
	DISTA = 0, //distancia recorrida
	ACCE = 0, //ACCELERATION
	PAUSED = true, //status of activity
	PERFIL = null, //status of activity
	SPEED_SEG = 0, //HRM sensor 
	SPEED_STEP = 0, //HRM sensor 
	SPEED_TRACK = 0, //HRM sensor 
	PPM = 0, //HRM sensor 
	MAP = null, //map google
	LAT = 0, //map latitude
	LON = 0, //map longitude
	ICO = null, //icon map
	MAPTIMEOUT = 3000, //tiemout map
	MAPLINE = null, //linea de recorrido
	ACCELTIMEOUT = 500, //tiemout accel
	CLOCKTIMEOUT = 1000, //tiemout clock
	ACTIVITYTYPE = 1, //tipo de actividad
	ACTIVITYTIMEOUT = 1000*10, //tiemout tomar datos
	PauseSens = 0, //sensibilidad del estado de pausa para que sea mas tolerante el numero de veces indicado
	sync = null, //plugir background mode.StopAcc
	BG = null, //plugir background mode.StopAcc
	StopAcc = true, //detener accelerometro
	PickDia = null, //picker dia 
	PickMes = null, //picker mes
	PickAno = null, //picker año
	pkEstUno = null, //picker estatura uno
	pkEstDos = null, //picker estatura dos
	pkPeso = null, //picker peso
	SITE = 'https://irisdev.co/siluet_app/index.php/';
	
getLang({exe: 'setText'});
	
/*! SQL LITE */
var webdb = {};
webdb.db = null;
// Función para crear la base de datos
webdb.open = function(options) {
	if (typeof openDatabase == "undefined") return;
	// Opciones por defecto
   	var options = options || {};
	options.name = options.name || 'noname';
	options.mb = options.mb || 5;
	options.description = options.description || 'no description';
	options.version = options.version || '1.0';
	// Definimos el tamaño en MB
   	var dbSize = options.mb * 1024 * 1024;
	// Cargamos la base de datos
   	webdb.db = openDatabase(options.name, options.version, options.description, dbSize);
}
// ExecuteSql
webdb.executeSql = function(sql, data, onSuccess, onError){
	if (!webdb.db) return;
	webdb.db.transaction(function(tx){tx.executeSql(sql, data,onSuccess,onError);});
}
// Base de datos
var opt = {
	name: "sforza",
	mb: 2,
	description: "Base de datos local de sforza",
	version: "1.0"
};
// Abrimos la base de datos
webdb.open(opt);

/*! END SQL LITE */
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}	
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
/*! funcion ak_validate author @animatk 2013*/
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
	return navigator.connection.type;
}
/*! Onload Phonegap Event*/
document.addEventListener("deviceready", DeviceReady, false);
function DeviceReady(){
	if(SES['actividad']){
		pause(function(){
			principal();
		});
	}else{
		iniciar();
	}
	if(isOnLine() != 'none' && SES['chain']){
		worker({fun: 'sincronizar', url: SITE, chain: SES['chain'] }, function(data){ mensaje(data) });
	}
	geo();
}
document.addEventListener('backbutton', function(e){}, false);
function worker(obj, fun){
	if(sync == null){
		sync = new Worker('js/sync.js');
		sync.addEventListener('message', function(e) {
			if(fun != undefined){
				fun(e.data);
			}
		}, false);
		sync.postMessage(JSON.stringify(obj)); 
	}else{
		sync.postMessage(JSON.stringify(obj)); 
	}
}
function iniciar(){
	if( SES['chain'] ){
		if( SES['info_basica'] ){
			show_inicio();
		}else{
			show_paso_dos();
		}
	}else if( SES['perfil'] ){
		if( SES['info_basica'] ){
			show_paso_tres();
		}else{
			show_paso_dos();
		}
	}else{
		show_login();
	}
}
function getLang(show){
	var lang_detect = show.lang || navigator.language.substring(0,2).toLowerCase(),
		key = langs.indexOf(lang_detect);
	if(key !== -1){
		lang = langs[key];
	}	
	$.getJSON('js/lang_'+lang+'.json', function(resp){
		language = (typeof resp == 'object')? resp :JSON.parse(resp);
		if(show.exe){
			var func = window[show.exe];
			if(show.params){
				func(show.params);
			}else{
				func();
			}
		}
	});
}
function setText(param){
	if(language == null){
		getLang({exe: 'setText', params: param});
	}else{
		
		if(typeof param === 'string'){
			return language[param];
		}else{
			var par = param || {};
			var sec = $('#menu, header');
			if(par.sec){
				sec = $(par.sec);
			}
			var items = sec.find('*[data-lang]'),
				tot = items.length;
			for(var i=0; i<tot; i++){
				var it = $(items[i]),
					con = it.attr('data-lang'),
					t = language[con];
					if(t != undefined){
						it.html(t);
					}
			}
		
		}
	}
}
function unitsValue( sel, tar ){
	var sel = $(sel),
		tar = $(tar),
		tex = (sel.val() == "")? '-': sel.find('option:selected').text();
	tar.text(tex);
}
function show_inicio(from){
	show_perfil(false);
    ak_navigate('#inicio');
    //queris para determinar valores
    webdb.executeSql('SELECT * FROM actividad WHERE chain = ?', [SES['chain']],
		function(tx, r){
			var rows = r.rows,
				tot = rows.length,
                pul = 0,
                pas = 0,
                dis = 0,
                cal = 0;
                
			for(var i=0; i<tot; i++){
				var row = rows.item(i),
                    act = JSON.parse(row.json),
                    t = act.length,
                    ult = act[t-1];
					
                if(isNumber(parseFloat(ult.dis))){
					dis = dis + parseFloat(ult.dis);
				}
                pas = pas + ult.ste;
                cal = cal + parseFloat(ult.cal);  
			}
            var metro = 39.370;
            var metros = dis/metro;
            dis = metros.toFixed(1) + ' m'
            if( metros > 1000 ){
                dis = metros/1000;
                dis = dis.toFixed(2) + ' k'
            }
			
            $('#esta-pas .num').html(pas);
            $('#esta-dis .num').html(dis);
			cal = (isNumber(cal))? cal.toFixed(1): 0;
            $('#esta-cal .num').html(cal);
		},
		function(tx, e){});
    
}
/*
loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyAihfNS3dpn6vB16RXRREYAy9jXEf63yUE&callback=initialize', function(){
//	
});

function initialize() {
	var mapOptions = {
	  center: new google.maps.LatLng(-34.397, 150.644),
	  zoom: 8,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"),
		mapOptions);
		
	var data = [{"ini":"2015-02-23T17:28:53.048Z","data":[{"time":"2015-02-23T17:29:10.092Z","lat":4.6706143,"lon":-74.0559044,"ste":7,"cal":4.3,"dis":182.109872,"ppm":0},{"time":"2015-02-23T17:29:24.151Z","lat":4.6706782,"lon":-74.0560177,"ste":14,"cal":7.9,"dis":364.219744,"ppm":0},{"time":"2015-02-23T17:29:37.211Z","lat":4.6706782,"lon":-74.0560177,"ste":20,"cal":11.2,"dis":520.3139199999999,"ppm":0},{"time":"2015-02-23T17:29:48.736Z","lat":4.6706782,"lon":-74.0560177,"ste":27,"cal":14,"dis":702.4237919999999,"ppm":0},{"time":"2015-02-23T17:29:59.285Z","lat":4.6707352,"lon":-74.0560981,"ste":35,"cal":16.8,"dis":910.54936,"ppm":0},{"time":"2015-02-23T17:30:10.343Z","lat":4.6707352,"lon":-74.0560981,"ste":44,"cal":19.6,"dis":1144.6906239999998,"ppm":0},{"time":"2015-02-23T17:30:23.887Z","lat":4.6699027,"lon":-74.0554677,"ste":52,"cal":23,"dis":1352.816192,"ppm":0},{"time":"2015-02-23T17:30:34.409Z","lat":4.6698977,"lon":-74.0554549,"ste":64,"cal":25.8,"dis":1665.004544,"ppm":0},{"time":"2015-02-23T17:30:45.442Z","lat":4.6698784,"lon":-74.0554759,"ste":70,"cal":28.6,"dis":1821.09872,"ppm":0},{"time":"2015-02-23T17:30:56.494Z","lat":4.6698575,"lon":-74.0554961,"ste":76,"cal":31.4,"dis":1977.1928959999998,"ppm":0},{"time":"2015-02-23T17:31:08.016Z","lat":4.6698585,"lon":-74.0554668,"ste":85,"cal":34.2,"dis":2211.33416,"ppm":0},{"time":"2015-02-23T17:31:19.565Z","lat":4.6700621,"lon":-74.0553901,"ste":93,"cal":37.2,"dis":2419.459728,"ppm":0},{"time":"2015-02-23T17:31:35.237Z","lat":4.6701345,"lon":-74.0553742,"ste":95,"cal":41.3,"dis":2471.4911199999997,"ppm":0},{"time":"2015-02-23T17:31:47.254Z","lat":4.6701635,"lon":-74.055346,"ste":96,"cal":44.4,"dis":2497.506816,"ppm":0}],"end":"2015-02-23T17:31:52.772Z","seg":179},{"ini":"2015-02-23T17:31:54.267Z","data":[{"time":"2015-02-23T17:32:01.821Z","lat":4.6701695,"lon":-74.055351,"ste":101,"cal":47.5,"dis":2627.5852959999997,"ppm":0},{"time":"2015-02-23T17:32:14.836Z","lat":4.6703817,"lon":-74.0553188,"ste":109,"cal":50.8,"dis":2835.7108639999997,"ppm":0},{"time":"2015-02-23T17:32:26.395Z","lat":4.6705013,"lon":-74.0552024,"ste":119,"cal":53.8,"dis":3095.867824,"ppm":0},{"time":"2015-02-23T17:32:37.452Z","lat":4.6706328,"lon":-74.0551541,"ste":127,"cal":56.6,"dis":3303.993392,"ppm":0},{"time":"2015-02-23T17:32:49.464Z","lat":4.6708085,"lon":-74.0551386,"ste":135,"cal":59.7,"dis":3512.11896,"ppm":0},{"time":"2015-02-23T17:33:01.014Z","lat":4.670929,"lon":-74.055089,"ste":145,"cal":62.5,"dis":3772.2759199999996,"ppm":0},{"time":"2015-02-23T17:33:12.549Z","lat":4.671041,"lon":-74.0550142,"ste":155,"cal":65.6,"dis":4032.43288,"ppm":0},{"time":"2015-02-23T17:33:23.606Z","lat":4.6711439,"lon":-74.0548597,"ste":165,"cal":68.4,"dis":4292.58984,"ppm":0},{"time":"2015-02-23T17:33:35.644Z","lat":4.6712058,"lon":-74.0548399,"ste":172,"cal":71.4,"dis":4474.699712,"ppm":0},{"time":"2015-02-23T17:33:46.692Z","lat":4.6713463,"lon":-74.0547936,"ste":182,"cal":74.2,"dis":4734.856672,"ppm":0},{"time":"2015-02-23T17:33:59.247Z","lat":4.6714944,"lon":-74.054756,"ste":189,"cal":77.3,"dis":4916.966544,"ppm":0},{"time":"2015-02-23T17:34:09.806Z","lat":4.6716045,"lon":-74.0546378,"ste":198,"cal":80.1,"dis":5151.107808,"ppm":0},{"time":"2015-02-23T17:34:21.304Z","lat":4.6717666,"lon":-74.0545365,"ste":206,"cal":83.2,"dis":5359.233375999999,"ppm":0},{"time":"2015-02-23T17:34:32.877Z","lat":4.6718655,"lon":-74.0545163,"ste":214,"cal":86,"dis":5567.358944,"ppm":0},{"time":"2015-02-23T17:34:43.932Z","lat":4.6720078,"lon":-74.0544875,"ste":221,"cal":88.8,"dis":5749.468816,"ppm":0},{"time":"2015-02-23T17:34:55.479Z","lat":4.6721427,"lon":-74.0544679,"ste":228,"cal":91.8,"dis":5931.578688,"ppm":0},{"time":"2015-02-23T17:35:06.537Z","lat":4.6722621,"lon":-74.0544325,"ste":234,"cal":94.7,"dis":6087.672863999999,"ppm":0},{"time":"2015-02-23T17:35:19.048Z","lat":4.6724344,"lon":-74.0543366,"ste":242,"cal":97.7,"dis":6295.798432,"ppm":0},{"time":"2015-02-23T17:35:33.107Z","lat":4.6725416,"lon":-74.0541804,"ste":250,"cal":101.3,"dis":6503.924,"ppm":0},{"time":"2015-02-23T17:35:43.709Z","lat":4.6726753,"lon":-74.054162,"ste":258,"cal":104.1,"dis":6712.049567999999,"ppm":0},{"time":"2015-02-23T17:35:57.754Z","lat":4.6728001,"lon":-74.0540861,"ste":265,"cal":107.7,"dis":6894.159439999999,"ppm":0},{"time":"2015-02-23T17:36:08.811Z","lat":4.672884,"lon":-74.0540514,"ste":275,"cal":110.5,"dis":7154.3164,"ppm":0},{"time":"2015-02-23T17:36:20.312Z","lat":4.6730942,"lon":-74.0539927,"ste":283,"cal":113.5,"dis":7362.441967999999,"ppm":0},{"time":"2015-02-23T17:36:31.876Z","lat":4.6732283,"lon":-74.0538556,"ste":294,"cal":116.3,"dis":7648.614624,"ppm":0},{"time":"2015-02-23T17:36:42.361Z","lat":4.6733998,"lon":-74.0539236,"ste":301,"cal":119.1,"dis":7830.724496,"ppm":0},{"time":"2015-02-23T17:36:54.389Z","lat":4.6735333,"lon":-74.0538387,"ste":310,"cal":122.2,"dis":8064.86576,"ppm":0},{"time":"2015-02-23T17:37:08.428Z","lat":4.6736203,"lon":-74.0537167,"ste":320,"cal":125.8,"dis":8325.022719999999,"ppm":0},{"time":"2015-02-23T17:37:20.993Z","lat":4.673743,"lon":-74.0537392,"ste":331,"cal":128.8,"dis":8611.195376,"ppm":0},{"time":"2015-02-23T17:37:32.008Z","lat":4.673805,"lon":-74.0535866,"ste":339,"cal":131.6,"dis":8819.320944,"ppm":0},{"time":"2015-02-23T17:37:44.111Z","lat":4.6739508,"lon":-74.0534205,"ste":348,"cal":134.7,"dis":9053.462207999999,"ppm":0},{"time":"2015-02-23T17:37:54.624Z","lat":4.6740356,"lon":-74.053385,"ste":355,"cal":137.5,"dis":9235.57208,"ppm":0},{"time":"2015-02-23T17:38:07.716Z","lat":4.6741517,"lon":-74.0533849,"ste":363,"cal":140.8,"dis":9443.697648,"ppm":0},{"time":"2015-02-23T17:38:18.776Z","lat":4.6743049,"lon":-74.053388,"ste":372,"cal":143.6,"dis":9677.838912,"ppm":0},{"time":"2015-02-23T17:38:31.319Z","lat":4.6743843,"lon":-74.0532327,"ste":382,"cal":147,"dis":9937.995872,"ppm":0}],"end":"2015-02-23T17:38:46.880Z","seg":412},{"ini":"2015-02-23T17:39:38.073Z","data":[{"time":"2015-02-23T17:39:38.130Z","lat":4.6742672,"lon":-74.0530163,"ste":388,"cal":150.8,"dis":10094.090048,"ppm":0},{"time":"2015-02-23T17:39:51.131Z","lat":4.6745451,"lon":-74.0532468,"ste":397,"cal":154.1,"dis":10328.231312,"ppm":0},{"time":"2015-02-23T17:40:03.737Z","lat":4.6747302,"lon":-74.0532633,"ste":404,"cal":157.2,"dis":10510.341183999999,"ppm":0},{"time":"2015-02-23T17:40:16.242Z","lat":4.674845,"lon":-74.0531453,"ste":411,"cal":160.5,"dis":10692.451056,"ppm":0},{"time":"2015-02-23T17:40:30.285Z","lat":4.6749827,"lon":-74.0530302,"ste":420,"cal":164,"dis":10926.59232,"ppm":0},{"time":"2015-02-23T17:40:42.309Z","lat":4.6751122,"lon":-74.0529787,"ste":428,"cal":167.1,"dis":11134.717888,"ppm":0},{"time":"2015-02-23T17:40:54.343Z","lat":4.6752646,"lon":-74.0529123,"ste":437,"cal":170.2,"dis":11368.859151999999,"ppm":0},{"time":"2015-02-23T17:41:06.371Z","lat":4.6753886,"lon":-74.0528357,"ste":444,"cal":173.2,"dis":11550.969024,"ppm":0},{"time":"2015-02-23T17:41:19.918Z","lat":4.6755575,"lon":-74.0527713,"ste":451,"cal":176.5,"dis":11733.078895999999,"ppm":0},{"time":"2015-02-23T17:41:30.496Z","lat":4.6755155,"lon":-74.0525457,"ste":457,"cal":179.4,"dis":11889.173072,"ppm":0},{"time":"2015-02-23T17:41:42.505Z","lat":4.6755462,"lon":-74.0522268,"ste":466,"cal":182.4,"dis":12123.314336,"ppm":0},{"time":"2015-02-23T17:41:56.047Z","lat":4.6758205,"lon":-74.0528181,"ste":474,"cal":185.7,"dis":12331.439903999999,"ppm":0},{"time":"2015-02-23T17:42:10.639Z","lat":4.6760595,"lon":-74.0525965,"ste":482,"cal":189.6,"dis":12539.565471999998,"ppm":0},{"time":"2015-02-23T17:42:21.689Z","lat":4.6761473,"lon":-74.052503,"ste":491,"cal":192.4,"dis":12773.706736,"ppm":0},{"time":"2015-02-23T17:42:32.759Z","lat":4.6762557,"lon":-74.0524153,"ste":498,"cal":195.2,"dis":12955.816608,"ppm":0},{"time":"2015-02-23T17:42:43.254Z","lat":4.6765188,"lon":-74.0524825,"ste":503,"cal":198,"dis":13085.895088,"ppm":0},{"time":"2015-02-23T17:42:54.291Z","lat":4.6767054,"lon":-74.0525238,"ste":509,"cal":200.8,"dis":13241.989264,"ppm":0},{"time":"2015-02-23T17:43:05.323Z","lat":4.6768239,"lon":-74.0524163,"ste":516,"cal":203.6,"dis":13424.099135999999,"ppm":0},{"time":"2015-02-23T17:43:16.348Z","lat":4.6768592,"lon":-74.0522634,"ste":521,"cal":206.4,"dis":13554.177615999999,"ppm":0},{"time":"2015-02-23T17:43:27.403Z","lat":4.6768691,"lon":-74.0520872,"ste":527,"cal":209.2,"dis":13710.271792,"ppm":0},{"time":"2015-02-23T17:43:38.449Z","lat":4.6768709,"lon":-74.0520202,"ste":535,"cal":212,"dis":13918.397359999999,"ppm":0},{"time":"2015-02-23T17:43:49.479Z","lat":4.6768938,"lon":-74.0519369,"ste":541,"cal":214.8,"dis":14074.491536,"ppm":0},{"time":"2015-02-23T17:44:03.069Z","lat":4.6770179,"lon":-74.051895,"ste":547,"cal":218.1,"dis":14230.585711999998,"ppm":0},{"time":"2015-02-23T17:44:13.113Z","lat":4.6771338,"lon":-74.0518957,"ste":554,"cal":220.9,"dis":14412.695584,"ppm":0},{"time":"2015-02-23T17:44:24.134Z","lat":4.6772472,"lon":-74.0518979,"ste":563,"cal":223.7,"dis":14646.836847999999,"ppm":0},{"time":"2015-02-23T17:44:35.211Z","lat":4.6774431,"lon":-74.0517945,"ste":570,"cal":226.6,"dis":14828.94672,"ppm":0},{"time":"2015-02-23T17:44:50.253Z","lat":4.6776655,"lon":-74.0517005,"ste":575,"cal":230.4,"dis":14959.025199999998,"ppm":0},{"time":"2015-02-23T17:45:02.268Z","lat":4.6777618,"lon":-74.0515977,"ste":583,"cal":233.4,"dis":15167.150768,"ppm":0},{"time":"2015-02-23T17:45:14.812Z","lat":4.6778447,"lon":-74.0514718,"ste":588,"cal":236.5,"dis":15297.229248,"ppm":0},{"time":"2015-02-23T17:45:29.360Z","lat":4.6779855,"lon":-74.0513745,"ste":593,"cal":240.3,"dis":15427.307728,"ppm":0},{"time":"2015-02-23T17:45:41.891Z","lat":4.6781907,"lon":-74.051237,"ste":601,"cal":243.4,"dis":15635.433296,"ppm":0},{"time":"2015-02-23T17:45:53.485Z","lat":4.6782366,"lon":-74.0513133,"ste":607,"cal":246.5,"dis":15791.527472,"ppm":0},{"time":"2015-02-23T17:46:06.015Z","lat":4.6784066,"lon":-74.0512919,"ste":613,"cal":249.5,"dis":15947.621647999998,"ppm":0},{"time":"2015-02-23T17:46:16.579Z","lat":4.6785397,"lon":-74.0512704,"ste":617,"cal":252.3,"dis":16051.684431999998,"ppm":0},{"time":"2015-02-23T17:46:27.638Z","lat":4.6786488,"lon":-74.0511949,"ste":621,"cal":255.1,"dis":16155.747216,"ppm":0},{"time":"2015-02-23T17:46:38.183Z","lat":4.6787096,"lon":-74.0511623,"ste":628,"cal":257.9,"dis":16337.857087999999,"ppm":0},{"time":"2015-02-23T17:46:49.239Z","lat":4.678801,"lon":-74.0512145,"ste":636,"cal":260.7,"dis":16545.982656,"ppm":0},{"time":"2015-02-23T17:47:00.246Z","lat":4.6787716,"lon":-74.0513705,"ste":640,"cal":263.5,"dis":16650.045439999998,"ppm":0},{"time":"2015-02-23T17:47:13.855Z","lat":4.6788413,"lon":-74.051554,"ste":646,"cal":266.9,"dis":16806.139616,"ppm":0},{"time":"2015-02-23T17:47:25.326Z","lat":4.6789096,"lon":-74.0516238,"ste":655,"cal":269.9,"dis":17040.28088,"ppm":0},{"time":"2015-02-23T17:47:37.368Z","lat":4.6789306,"lon":-74.0517481,"ste":662,"cal":273,"dis":17222.390752,"ppm":0},{"time":"2015-02-23T17:47:48.391Z","lat":4.6788933,"lon":-74.0518296,"ste":668,"cal":275.8,"dis":17378.484927999998,"ppm":0},{"time":"2015-02-23T17:47:59.432Z","lat":4.6789254,"lon":-74.0520006,"ste":676,"cal":278.6,"dis":17586.610495999998,"ppm":0},{"time":"2015-02-23T17:48:12.528Z","lat":4.6790797,"lon":-74.0520158,"ste":682,"cal":281.9,"dis":17742.704672,"ppm":0},{"time":"2015-02-23T17:48:26.559Z","lat":4.679237,"lon":-74.0521139,"ste":689,"cal":285.5,"dis":17924.814543999997,"ppm":0},{"time":"2015-02-23T17:48:43.140Z","lat":4.6792661,"lon":-74.0522048,"ste":692,"cal":289.8,"dis":18002.861632,"ppm":0}],"end":"2015-02-23T17:48:51.125Z","seg":553},{"ini":"2015-02-23T17:53:11.324Z","data":[{"time":"2015-02-23T17:53:14.400Z","lat":4.6792661,"lon":-74.0522048,"ste":695,"cal":292.6,"dis":18080.90872,"ppm":0}],"end":"2015-02-23T17:53:18.390Z","seg":7},{"ini":"2015-02-23T17:54:39.705Z","data":[{"time":"2015-02-23T17:54:47.758Z","lat":4.6792661,"lon":-74.0522048,"ste":698,"cal":295.7,"dis":18158.955808,"ppm":0},{"time":"2015-02-23T17:55:03.347Z","lat":4.6792661,"lon":-74.0522048,"ste":699,"cal":299.5,"dis":18184.971503999997,"ppm":0},{"time":"2015-02-23T17:55:16.878Z","lat":4.679076,"lon":-74.0523212,"ste":700,"cal":303.1,"dis":18210.9872,"ppm":0}],"end":"2015-02-23T17:55:24.369Z","seg":44},{"ini":"2015-02-23T17:58:18.105Z","end":"2015-02-23T17:58:23.643Z","seg":5},{"ini":"2015-02-23T17:59:55.056Z","data":[{"time":"2015-02-23T17:59:55.082Z","lat":4.6790862,"lon":-74.0522992,"ste":704,"cal":306.2,"dis":18315.049983999997,"ppm":0},{"time":"2015-02-23T18:00:06.136Z","lat":4.6794228,"lon":-74.0520939,"ste":707,"cal":309,"dis":18393.097072,"ppm":0},{"time":"2015-02-23T18:00:17.195Z","lat":4.679361,"lon":-74.0521565,"ste":711,"cal":311.8,"dis":18497.159856,"ppm":0},{"time":"2015-02-23T18:00:31.798Z","lat":4.6791092,"lon":-74.0519971,"ste":716,"cal":315.3,"dis":18627.238336,"ppm":0},{"time":"2015-02-23T18:00:45.852Z","lat":4.6790984,"lon":-74.0518905,"ste":721,"cal":318.9,"dis":18757.316816,"ppm":0},{"time":"2015-02-23T18:00:56.907Z","lat":4.6789753,"lon":-74.051785,"ste":726,"cal":321.7,"dis":18887.395296,"ppm":0},{"time":"2015-02-23T18:01:07.929Z","lat":4.6788755,"lon":-74.0516542,"ste":733,"cal":324.5,"dis":19069.505168,"ppm":0},{"time":"2015-02-23T18:01:18.437Z","lat":4.6789118,"lon":-74.0517212,"ste":740,"cal":327.3,"dis":19251.61504,"ppm":0},{"time":"2015-02-23T18:01:31.021Z","lat":4.6788083,"lon":-74.0518091,"ste":746,"cal":330.4,"dis":19407.709216,"ppm":0},{"time":"2015-02-23T18:01:44.034Z","lat":4.6786601,"lon":-74.0519363,"ste":750,"cal":333.7,"dis":19511.771999999997,"ppm":0},{"time":"2015-02-23T18:01:55.063Z","lat":4.6785785,"lon":-74.051967,"ste":756,"cal":336.8,"dis":19667.866176,"ppm":0},{"time":"2015-02-23T18:02:06.604Z","lat":4.67847,"lon":-74.0520817,"ste":761,"cal":339.6,"dis":19797.944656,"ppm":0},{"time":"2015-02-23T18:02:17.198Z","lat":4.6783203,"lon":-74.0521069,"ste":765,"cal":342.4,"dis":19902.007439999998,"ppm":0},{"time":"2015-02-23T18:02:30.223Z","lat":4.6782197,"lon":-74.0522099,"ste":772,"cal":345.7,"dis":20084.117312,"ppm":0},{"time":"2015-02-23T18:02:41.809Z","lat":4.6781469,"lon":-74.0522699,"ste":777,"cal":348.5,"dis":20214.195792,"ppm":0},{"time":"2015-02-23T18:02:53.291Z","lat":4.6780628,"lon":-74.0522969,"ste":783,"cal":351.6,"dis":20370.289967999997,"ppm":0},{"time":"2015-02-23T18:03:06.880Z","lat":4.6779314,"lon":-74.0523772,"ste":787,"cal":354.9,"dis":20474.352752,"ppm":0},{"time":"2015-02-23T18:03:19.940Z","lat":4.6778219,"lon":-74.0524577,"ste":792,"cal":358.2,"dis":20604.431232,"ppm":0},{"time":"2015-02-23T18:03:30.407Z","lat":4.6777534,"lon":-74.0525376,"ste":796,"cal":361,"dis":20708.494015999997,"ppm":0},{"time":"2015-02-23T18:03:42.526Z","lat":4.6775838,"lon":-74.0525718,"ste":803,"cal":364.1,"dis":20890.603887999998,"ppm":0},{"time":"2015-02-23T18:03:56.550Z","lat":4.6774027,"lon":-74.0526328,"ste":808,"cal":367.6,"dis":21020.682367999998,"ppm":0},{"time":"2015-02-23T18:04:07.580Z","lat":4.6772797,"lon":-74.0526644,"ste":815,"cal":370.4,"dis":21202.79224,"ppm":0},{"time":"2015-02-23T18:04:19.103Z","lat":4.6772309,"lon":-74.0525721,"ste":821,"cal":373.5,"dis":21358.886415999998,"ppm":0},{"time":"2015-02-23T18:04:32.188Z","lat":4.6771041,"lon":-74.0524581,"ste":827,"cal":376.8,"dis":21514.980592,"ppm":0},{"time":"2015-02-23T18:04:46.263Z","lat":4.6769239,"lon":-74.0523756,"ste":835,"cal":380.4,"dis":21723.10616,"ppm":0},{"time":"2015-02-23T18:05:00.817Z","lat":4.6768155,"lon":-74.0522048,"ste":843,"cal":384,"dis":21931.231728,"ppm":0},{"time":"2015-02-23T18:05:11.831Z","lat":4.676731,"lon":-74.052112,"ste":848,"cal":386.8,"dis":22061.310208,"ppm":0},{"time":"2015-02-23T18:05:23.313Z","lat":4.6766605,"lon":-74.0520662,"ste":854,"cal":389.8,"dis":22217.404383999998,"ppm":0},{"time":"2015-02-23T18:05:34.367Z","lat":4.6766841,"lon":-74.0522476,"ste":859,"cal":392.6,"dis":22347.482863999998,"ppm":0},{"time":"2015-02-23T18:05:45.951Z","lat":4.6766118,"lon":-74.052403,"ste":866,"cal":395.4,"dis":22529.592736,"ppm":0},{"time":"2015-02-23T18:05:57.026Z","lat":4.6764941,"lon":-74.052471,"ste":874,"cal":398.3,"dis":22737.718303999998,"ppm":0},{"time":"2015-02-23T18:06:07.567Z","lat":4.6763832,"lon":-74.0525468,"ste":880,"cal":401.1,"dis":22893.812479999997,"ppm":0},{"time":"2015-02-23T18:06:18.059Z","lat":4.6763022,"lon":-74.0525806,"ste":888,"cal":403.9,"dis":23101.938048,"ppm":0},{"time":"2015-02-23T18:06:32.133Z","lat":4.6760468,"lon":-74.0525196,"ste":896,"cal":407.4,"dis":23310.063616,"ppm":0},{"time":"2015-02-23T18:06:44.145Z","lat":4.6759259,"lon":-74.0525951,"ste":904,"cal":410.5,"dis":23518.189184,"ppm":0},{"time":"2015-02-23T18:06:55.796Z","lat":4.6757741,"lon":-74.0526432,"ste":912,"cal":413.3,"dis":23726.314752,"ppm":0},{"time":"2015-02-23T18:07:08.811Z","lat":4.6755698,"lon":-74.0525758,"ste":918,"cal":416.6,"dis":23882.408927999997,"ppm":0},{"time":"2015-02-23T18:07:20.312Z","lat":4.6754692,"lon":-74.0527582,"ste":923,"cal":419.7,"dis":24012.487407999997,"ppm":0},{"time":"2015-02-23T18:07:33.344Z","lat":4.675337,"lon":-74.0528352,"ste":932,"cal":423,"dis":24246.628672,"ppm":0},{"time":"2015-02-23T18:07:44.950Z","lat":4.675213,"lon":-74.0528907,"ste":939,"cal":425.8,"dis":24428.738544,"ppm":0},{"time":"2015-02-23T18:07:57.453Z","lat":4.6750795,"lon":-74.0529853,"ste":946,"cal":429.1,"dis":24610.848415999997,"ppm":0},{"time":"2015-02-23T18:08:08.546Z","lat":4.6749755,"lon":-74.0530619,"ste":953,"cal":431.9,"dis":24792.958287999998,"ppm":0},{"time":"2015-02-23T18:08:20.608Z","lat":4.674853,"lon":-74.0531289,"ste":961,"cal":435,"dis":25001.083855999997,"ppm":0},{"time":"2015-02-23T18:08:33.641Z","lat":4.6747057,"lon":-74.0531911,"ste":968,"cal":438.3,"dis":25183.193728,"ppm":0},{"time":"2015-02-23T18:08:45.195Z","lat":4.6745959,"lon":-74.0532442,"ste":974,"cal":441.4,"dis":25339.287903999997,"ppm":0}],"end":"2015-02-23T18:08:48.209Z","seg":533},{"ini":"2015-02-23T18:09:38.854Z","data":[{"time":"2015-02-23T18:09:46.937Z","lat":4.6746053,"lon":-74.0532037,"ste":980,"cal":444.2,"dis":25495.38208,"ppm":0},{"time":"2015-02-23T18:09:58.496Z","lat":4.6744806,"lon":-74.0533064,"ste":988,"cal":447,"dis":25703.507648,"ppm":0},{"time":"2015-02-23T18:10:08.962Z","lat":4.6744278,"lon":-74.0533251,"ste":994,"cal":449.8,"dis":25859.601823999998,"ppm":0},{"time":"2015-02-23T18:10:20.020Z","lat":4.6744278,"lon":-74.0533251,"ste":1002,"cal":452.6,"dis":26067.727391999997,"ppm":0},{"time":"2015-02-23T18:10:34.570Z","lat":4.6744278,"lon":-74.0533251,"ste":1008,"cal":456.2,"dis":26223.821568,"ppm":0},{"time":"2015-02-23T18:10:47.157Z","lat":4.6744278,"lon":-74.0533251,"ste":1014,"cal":459.5,"dis":26379.915743999998,"ppm":0},{"time":"2015-02-23T18:10:58.175Z","lat":4.6744278,"lon":-74.0533251,"ste":1022,"cal":462.3,"dis":26588.041311999998,"ppm":0},{"time":"2015-02-23T18:11:09.216Z","lat":4.6735786,"lon":-74.0537359,"ste":1029,"cal":465.1,"dis":26770.151184,"ppm":0},{"time":"2015-02-23T18:11:20.251Z","lat":4.6734475,"lon":-74.0538604,"ste":1035,"cal":467.9,"dis":26926.245359999997,"ppm":0},{"time":"2015-02-23T18:11:31.851Z","lat":4.6731754,"lon":-74.0539717,"ste":1040,"cal":470.7,"dis":27056.323839999997,"ppm":0},{"time":"2015-02-23T18:11:44.355Z","lat":4.6731983,"lon":-74.0539785,"ste":1046,"cal":474,"dis":27212.418016,"ppm":0},{"time":"2015-02-23T18:11:57.398Z","lat":4.6731559,"lon":-74.0539627,"ste":1051,"cal":477.3,"dis":27342.496496,"ppm":0},{"time":"2015-02-23T18:12:09.997Z","lat":4.6729429,"lon":-74.054117,"ste":1057,"cal":480.7,"dis":27498.590672,"ppm":0},{"time":"2015-02-23T18:12:21.540Z","lat":4.6727713,"lon":-74.0541203,"ste":1065,"cal":483.5,"dis":27706.716239999998,"ppm":0},{"time":"2015-02-23T18:12:33.553Z","lat":4.6726572,"lon":-74.0541175,"ste":1072,"cal":486.5,"dis":27888.826112,"ppm":0},{"time":"2015-02-23T18:12:47.132Z","lat":4.6725528,"lon":-74.0541632,"ste":1078,"cal":490.1,"dis":28044.920287999998,"ppm":0},{"time":"2015-02-23T18:12:59.687Z","lat":4.67245,"lon":-74.0542913,"ste":1087,"cal":493.2,"dis":28279.061552,"ppm":0},{"time":"2015-02-23T18:13:12.736Z","lat":4.672433,"lon":-74.054293,"ste":1091,"cal":496.5,"dis":28383.124335999997,"ppm":0},{"time":"2015-02-23T18:13:26.235Z","lat":4.672433,"lon":-74.054293,"ste":1099,"cal":500,"dis":28591.249903999997,"ppm":0},{"time":"2015-02-23T18:13:37.274Z","lat":4.672433,"lon":-74.054293,"ste":1105,"cal":502.9,"dis":28747.34408,"ppm":0},{"time":"2015-02-23T18:13:49.864Z","lat":4.6719905,"lon":-74.0545173,"ste":1114,"cal":506.2,"dis":28981.485343999997,"ppm":0},{"time":"2015-02-23T18:14:00.939Z","lat":4.6718253,"lon":-74.0545985,"ste":1122,"cal":509,"dis":29189.610911999996,"ppm":0},{"time":"2015-02-23T18:14:12.391Z","lat":4.671706,"lon":-74.0546984,"ste":1130,"cal":511.8,"dis":29397.73648,"ppm":0},{"time":"2015-02-23T18:14:23.431Z","lat":4.6716515,"lon":-74.0546725,"ste":1136,"cal":514.6,"dis":29553.830656,"ppm":0},{"time":"2015-02-23T18:14:34.476Z","lat":4.6715699,"lon":-74.0547093,"ste":1143,"cal":517.4,"dis":29735.940528,"ppm":0},{"time":"2015-02-23T18:14:45.024Z","lat":4.6714052,"lon":-74.0545994,"ste":1148,"cal":520.2,"dis":29866.019008,"ppm":0},{"time":"2015-02-23T18:14:57.577Z","lat":4.6711761,"lon":-74.0545602,"ste":1152,"cal":523.3,"dis":29970.081791999997,"ppm":0},{"time":"2015-02-23T18:15:08.615Z","lat":4.6710741,"lon":-74.0549966,"ste":1160,"cal":526.1,"dis":30178.207359999997,"ppm":0},{"time":"2015-02-23T18:15:20.701Z","lat":4.6710879,"lon":-74.0549702,"ste":1166,"cal":529.1,"dis":30334.301536,"ppm":0},{"time":"2015-02-23T18:15:31.753Z","lat":4.671085,"lon":-74.0548169,"ste":1172,"cal":531.9,"dis":30490.395711999998,"ppm":0}],"end":"2015-02-23T18:15:36.755Z","seg":357},{"ini":"2015-02-23T18:15:54.837Z","data":[{"time":"2015-02-23T18:16:01.890Z","lat":4.6711043,"lon":-74.0548115,"ste":1177,"cal":535,"dis":30620.474191999998,"ppm":0}],"end":"2015-02-23T18:16:10.347Z","seg":15},{"ini":"2015-02-23T18:16:11.877Z","data":[{"time":"2015-02-23T18:16:15.936Z","lat":4.6710777,"lon":-74.0548495,"ste":1184,"cal":538.1,"dis":30802.584064,"ppm":0},{"time":"2015-02-23T18:16:26.988Z","lat":4.6709829,"lon":-74.0548934,"ste":1190,"cal":540.9,"dis":30958.678239999997,"ppm":0},{"time":"2015-02-23T18:16:40.968Z","lat":4.6707867,"lon":-74.0550608,"ste":1197,"cal":544.4,"dis":31140.788112,"ppm":0},{"time":"2015-02-23T18:16:54.580Z","lat":4.6706936,"lon":-74.0552595,"ste":1202,"cal":547.8,"dis":31270.866592,"ppm":0},{"time":"2015-02-23T18:17:05.593Z","lat":4.6706851,"lon":-74.0553602,"ste":1208,"cal":550.6,"dis":31426.960767999997,"ppm":0},{"time":"2015-02-23T18:17:16.632Z","lat":4.6705935,"lon":-74.055335,"ste":1213,"cal":553.4,"dis":31557.039247999997,"ppm":0},{"time":"2015-02-23T18:17:27.224Z","lat":4.6704588,"lon":-74.0554681,"ste":1218,"cal":556.2,"dis":31687.117727999997,"ppm":0},{"time":"2015-02-23T18:17:38.215Z","lat":4.6703146,"lon":-74.0553289,"ste":1225,"cal":559,"dis":31869.2276,"ppm":0},{"time":"2015-02-23T18:17:50.244Z","lat":4.6705014,"lon":-74.0555215,"ste":1233,"cal":562,"dis":32077.353167999998,"ppm":0},{"time":"2015-02-23T18:18:01.279Z","lat":4.6705017,"lon":-74.0556676,"ste":1239,"cal":564.9,"dis":32233.447343999997,"ppm":0},{"time":"2015-02-23T18:18:13.318Z","lat":4.6705755,"lon":-74.0556656,"ste":1245,"cal":567.9,"dis":32389.54152,"ppm":0}],"end":"2015-02-23T18:18:26.885Z","seg":135},{"ini":"2015-02-23T18:19:07.039Z","data":[{"time":"2015-02-23T18:19:07.065Z","lat":4.6704649,"lon":-74.0555672,"ste":1250,"cal":571.5,"dis":32519.62,"ppm":0},{"time":"2015-02-23T18:19:18.093Z","lat":4.6706787,"lon":-74.0559554,"ste":1254,"cal":574.3,"dis":32623.682783999997,"ppm":0}],"end":"2015-02-23T18:19:29.199Z","seg":22},{"ini":"2015-02-23T18:19:52.275Z","data":[{"time":"2015-02-23T18:19:52.285Z","lat":4.670689,"lon":-74.0559412,"ste":1259,"cal":577.1,"dis":32753.761263999997,"ppm":0}],"end":"2015-02-23T18:19:55.814Z","seg":3},{"ini":"2015-02-23T18:20:13.874Z","data":[{"time":"2015-02-23T18:20:44.536Z","lat":4.6707018,"lon":-74.0559049,"ste":1261,"cal":585.5,"dis":32805.792656,"ppm":0}],"end":"2015-02-23T18:20:53.093Z","seg":39},{"ini":"2015-02-23T18:20:54.556Z","end":"2015-02-23T18:20:59.617Z","seg":5},{"ini":"2015-02-23T18:21:48.786Z","data":[{"time":"2015-02-23T18:21:48.845Z","lat":4.6706958,"lon":-74.0558944,"ste":1264,"cal":589.1,"dis":32883.839744,"ppm":0}],"end":"2015-02-23T18:21:59.840Z","seg":11},{"ini":"2015-02-23T18:22:28.502Z","data":[{"time":"2015-02-23T18:22:28.529Z","lat":4.670699,"lon":-74.0558856,"ste":1266,"cal":591.9,"dis":32935.871136,"ppm":0}],"end":"2015-02-23T18:22:33.027Z","seg":4},{"ini":"2015-02-23T18:23:58.922Z","end":"2015-02-23T18:24:06.009Z","seg":7},{"ini":"2015-02-23T18:24:25.047Z","data":[{"time":"2015-02-23T18:24:25.088Z","lat":4.6706674,"lon":-74.0558183,"ste":1269,"cal":594.7,"dis":33013.918224,"ppm":0}],"end":"2015-02-23T18:24:28.574Z","seg":3},{"ini":"2015-02-23T18:26:35.142Z","data":[{"time":"2015-02-23T18:26:48.186Z","lat":4.6706824,"lon":-74.0558716,"ste":1272,"cal":598.8,"dis":33091.965312,"ppm":0},{"time":"2015-02-23T18:27:00.770Z","lat":4.6706913,"lon":-74.0559105,"ste":1276,"cal":601.8,"dis":33196.028095999995,"ppm":0},{"time":"2015-02-23T18:27:11.315Z","lat":4.6707181,"lon":-74.0560203,"ste":1284,"cal":604.7,"dis":33404.153664,"ppm":0}],"end":"2015-02-23T18:27:29.343Z","seg":54},{"ini":"2015-02-23T18:59:50.836Z","data":[{"time":"2015-02-23T18:59:50.856Z","lat":4.6707178,"lon":-74.0559566,"ste":1290,"cal":609.2,"dis":33560.247839999996,"ppm":0}],"end":"2015-02-23T18:59:54.406Z","seg":3}];
	

	var line = null;
	var ante = 0;
	var tot = data.length - 1;
	
	for(i in data){
		var obj = data[i];
		console.log(tot);
		console.log((tot/4));
		
		if(obj.data != undefined){			
			for(k in obj.data){
				var pau = obj.data[k];
				var latlng = new google.maps.LatLng( pau.lat, pau.lon );
				
				if(i==0){
					map.setCenter(latlng);
				}
				if(ante != pau.lat){
					ante = pau.lat;	
					if(line != null){
						var path = line.getPath();
						path.push(latlng);
					}else{
						var polyOptions = {
							strokeColor: '#000000',
							strokeOpacity: 0.8,
							strokeWeight: 3
						};
						line = new google.maps.Polyline(polyOptions);
						line.setMap(map);
					} 
					if(line != null){
						line.setPosition(latlng);
					}else{
						line = new google.maps.Marker({
						  position: latlng,
						  icon: {
							path: google.maps.SymbolPath.CIRCLE,
							scale: 5,
							strokeColor: '#06f'
						  },
						  map: map
						});
					}
				}
			}
		}
	}
 }
 
*/
function ak_navigate(to, back){
	if(isDevice() != 'Android'){
		$('body').addClass('ios-device');
	}
	setText({sec: to});
	switch(to){
		case "#login":
			$('header').addClass('noshow');
		break;
		case "#inicio":
			$('header').removeClass('noshow');
			$('#btn-accion-izq').addClass('oculto');
			$('#btnMenu').removeClass('oculto');
		break;
		default:
		$('header').removeClass('noshow');
	}

	var from = $('.toCenter'),
		to = $(to);
	if(from){
		var fx = (to.hasClass('toLeft'))? 'toRight' : 'toLeft';
		from.removeClass('toCenter toLeft toRight');
		from.addClass(fx);
	}
	to.removeClass('toCenter toLeft toRight');
	to.addClass('toCenter');
	$('#btn-accion-izq').addClass('oculto');
	

	if(back!=undefined && back!="" && back!== false){
		btnIzq(back);
	}
}
function btnIzq(obj){
	var str = obj.tx || language.volver;
	$('#btn-accion-izq').text(str).removeClass('oculto').attr('onclick', obj.to);
	$('#btnMenu').addClass('oculto');
}
function jsonp(url, callback) {
	var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
	if(typeof callback === 'function'){
		window[callbackName] = function(data) {
			delete window[callbackName];
			document.body.removeChild(script);
			callback(data);
		};
	}else{
		callbackName = callback;
	}

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
		,error: function(xhr, errorType, error){
			callback({success: false, message: language.reg_nonet+' : '+errorType});
		}
	});
}
/*! login */
function fbLogin(){
	//
	if(isOnLine() == 'none'){
		alert(language.reg_nonet);
		return false;
	}else{
		openFB.init({appId: '833553210051226'});
		openFB.login(
		function(response) {
			if(response.status === 'connected') {
				var accessToken = response.authResponse.token;
				jsonp('https://graph.facebook.com/v2.3/me?access_token='+accessToken+'&fields=id%2Cname%2Cemail%2Cbirthday%2Cgender&format=json&method=get&pretty=0&suppress_http_code=1'
				,function(resp){
					if(resp.error != undefined){
						alert(language.reg_errfb);
					}else{
						var data = {},
							bdate = resp.birthday.split("/");
							data.genero = (resp.gender == 'male')? 'M': 'F';
							data.nombre = resp.name;
							data.edad_day = bdate[1];
							data.edad_month = bdate[0];
							data.edad_year = bdate[2];
							data.correo = resp.email;
							data.fb_id = resp.id;
							data.fb_token = accessToken;
							data.terminos = 'SI';
							
							post(SITE+'main/register', data, function(obj){
								if(obj.success === false){
									alert(language.err[obj.message]);
								}else{
									var udata = {};
									mensaje(JSON.stringify(obj));
									udata.gender = data.genero;
									udata.name = data.nombre;
									udata.terms = data.terminos;
									udata.birthdate = data.edad_year+'-'+data.edad_month+'-'+data.edad_day;
									//
									udata.unit = (obj.udata.unit != null)? obj.udata.unit : undefined;
									udata.height = (obj.udata.height != null)? obj.udata.height : undefined;
									udata.weight = (obj.udata.weight  != null)? obj.udata.weight : undefined;
									udata.fbid = resp.id;
									udata.fbtoken = accessToken;
									
									SES['chain'] = obj.chain;
									SES['perfil'] = JSON.stringify(udata);
									SES['info_basica'] = true;
									if(udata.height == undefined 
										|| udata.weight == undefined ){
										SES.removeItem('info_basica');
									}
									
									iniciar();
								}
							});
					}
				});
			} else {
				alert('Error al conectar con facebook, intentelo nuevamente.');
			}
		}, {scope: 'email,user_birthday'});
	}
}
function show_login(back){
	$('input[name=correo]').attr('placeholder', language.correo);
	$('input[name=contrasena]').attr('placeholder', language.contrasena);
	ak_navigate('#login', back); 
}
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
						,unit : obj.unit
						,terms : obj.terms
						,birthdate : obj.birthdate
						,fbid : obj.fb_id
						,fbtoken : obj.fb_token
					};

					udata.height = (obj.height != null)? obj.height : undefined;
					udata.weight = (obj.weight  != null)? obj.weight : undefined;
					
					SES['chain'] = obj.chain;
					SES['perfil'] = JSON.stringify(udata);
					SES['info_basica'] = true;
					
					if(udata.height == undefined 
						|| udata.weight == undefined ){
						SES.removeItem('info_basica');
					}
					
					iniciar();
				}
				cortina.remove();
			});
		}
	});
	return false;
}
function CerrarSesion(){
	SES.removeItem('chain');
	SES.removeItem('perfil');
	SES.removeItem('info_basica');
	location.reload();
}
function show_perfil(nav){
	var	edad = 0,
		foto = 'img/perfil-man.jpg';
	if(SES['perfil']){
		PERFIL = JSON.parse(SES['perfil']);
		if(PERFIL.fbid != undefined && PERFIL.fbid != null && PERFIL.fbid != ""){
			foto = 'https://graph.facebook.com/'+PERFIL.fbid+'/picture?width=120&height=120';
			$('#fbConnect').addClass('oculto');
		}else{
			if(PERFIL.gender == 'F'){
				foto = 'img/perfil-woman.jpg';
			}
		}
		edad = cal_edad(PERFIL.birthdate);
		
		$('.perfil-edad').text(edad);
		$('.perfil-nombre').text(PERFIL.name);
		$('.perfil-genero').text(PERFIL.gender);
		if(SES['info_basica']){
			$('.perfil-peso').text(PERFIL.weight);
			$('.perfil-estatura').text(PERFIL.height);
		}else{
			$('#btnWizard').text('Siguiente');
			$('#btn-accion-izq, #btnMenu, #btn-accion-der').addClass('oculto');
		}
		
		$('.perfil-photo').css('background-image', 'url('+foto+')');
	}
	if(nav !== false){
		ak_navigate('#perfil', {to:'show_inicio();'});
	}
}
function cal_edad(data){
	var res = new Date() - new Date(data);
	var edad = (res / (1000 * 60 * 60 * 24 * 365));
	return Math.floor(edad * 1) / 1;
}
function wizard(paso){
	var paso = paso || 0;
	mensaje('se ejceutara el paso : '+paso );
}
/*! end login */
/*! register */
function show_paso_uno(back, edad){
	$('input[name=nombre]').attr('placeholder',language.nombre);
	$('select[name=genero]').attr('placeholder',language.gender);
	$('input[name=edad]').attr('placeholder',language.edad);
	
	if(edad != undefined){
		var e = cal_edad(edad);
		$('#textEdad').text(e);
		return false;
	}
	
	ak_navigate('#registro', back);
	
	if(SES['perfil']){
		var p = JSON.parse(SES['perfil']);
		$('input[name=nombre]').val(p.name);
		$('select[name=genero]').val(p.gender);
		$('input[name=edad]').val(p.birthdate);
		var e = cal_edad(p.birthdate);
		$('#textEdad').text(e);
	}
}
function form_paso_uno(form){
	ak_validate(form, {
		ajax: false
		,func: function(data){
			var str = data.nombre,
				cortina = $('#cortina');
				
			if(str.indexOf("jx:") > -1){
				str = str.split(':');
				eval(str[1]);
				cortina.remove();
				return false;
			}
			
			var udata = {};
			if(SES['perfil']){
				udata = JSON.parse(SES['perfil']);
			}
			udata.gender = data.genero;
			udata.name = data.nombre;
			udata.birthdate = data.edad;
				
			SES['perfil'] = JSON.stringify(udata);
			show_paso_dos();
			cortina.remove();
		}
	});
	return false;
}
function show_paso_dos(back, unid){
	var und = unid || 'M'
		,Ies1 = $('select[name=estatura]')
		,Tes1 = $('#textEstatura')
		,Ipe = $('select[name=peso]')
		,Tpe = $('#textPeso');
		
	$('.btnSave').text(language.save);
	
	var es1 = '<option value="">'+language.centimetros+'</option>',
		pes = '<option value="">'+language.kgs+'</option>';

	if(und == 'E'){
		es1 = '<option value="">'+language.feet+'</option>',
		pes = '<option value="">'+language.lbs+'</option>';

		for(var i=40; i<80; i++){
			es1 += '<option value="'+(i/10)+'"> '+(i/10).toFixed+' </option>';
		}
		for(var i=22; i<401; i++){
			pes += '<option value="'+i+'"> '+i+' </option>';
		}
		$('#symbolEstatura').text(language.feet);
		$('#symbolPeso').text(language.lbs);
		$('#textUnids').text(language.eng);
	}else{
		for(var i=100; i<181; i++){
			es1 += '<option value="'+i+'"> '+i+' </option>';
		}
		for(var i=22; i<181; i++){
			pes +='<option value="'+i+'"> '+i+' </option>';
		}
		$('#symbolEstatura').text(language.cms);
		$('#symbolPeso').text(language.kgs);
		$('#textUnids').text('Mts');
	}
	
	Ies1.html(es1).attr('placeholder', language.estatura);
	Ipe.html(pes).attr('placeholder', language.peso);
	Tes1.html(0);
	Tpe.html(0);
	
	if(back === false){
		return false;
	}
	
	if(SES['perfil']){
		var p = JSON.parse(SES['perfil']);
		if(p.unit != undefined && p.unit != null && p.unit != "" ){
		
			if(und != p.unit){
				show_paso_dos("", p.unit);
				return false;
			}
			
			Ies1.val(p.height);
			Ipe.val(p.weight);
			Tes1.html(p.height);
			Tpe.html(p.weight);
			
			$('select[name=unidad_medida]').val(p.unit);
		}
	}
	
	if(SES['chain']){
		back = {to:'show_paso_uno({to:\'show_perfil();\'});'};
		ak_navigate('#registro-2', back);
		$('#BtnRegister2').text( language.save );
	}else{
		back = {to:'show_paso_uno({to:\'show_login();\'});'};
		ak_navigate('#registro-2', back);
		
	}
}
function form_paso_dos(form){
	ak_validate(form, {
		ajax: false
		,func: function(data){
			var udata = {},
				estatura_uno = parseInt(data.estatura_uno),
				estatura_dos = parseInt(data.estatura_dos);
			
			if(SES['perfil']){
				udata = JSON.parse(SES['perfil']);
			}
			//	estat = ((((estatura_uno*12)+estatura_dos)*2.54)/100).toFixed(2);

			udata.height = data.estatura;
			udata.weight = data.peso;
			udata.unit = data.unidad_medida;
			SES['perfil'] = JSON.stringify(udata);
			SES['info_basica'] = true;
			
			if(SES['chain']){
				var chain = SES['chain'],
					sdata = {},
					bdate = udata.birthdate.split("-");
					
				sdata.genero = udata.gender;
				sdata.nombre = udata.name;
				sdata.edad_day = bdate[2];
				sdata.edad_month = bdate[1];
				sdata.edad_year = bdate[0];
				sdata.estatura = data.estatura;
				sdata.peso = data.peso;
				sdata.unit = data.unidad_medida;
			
				post(SITE+'main/register/'+chain, sdata, function(obj){
					if(obj.success === false){
						alert(language.err[obj.message]);
					}else{
						iniciar();
					}
				});
			}else{
				show_paso_tres();
			}
			
			$('#cortina').remove();
		}
	});
	return false;
}
function show_paso_tres(back){
	$('input[name=correo]').attr('placeholder', language.correo);
	$('input[name=contrasena]').attr('placeholder', language.contrasena);
	if(!SES['chain']){
		back = {to: 'show_paso_dos();'};
	}
	ak_navigate('#registro-3', back);
}
function form_paso_tres(form){
	ak_validate(form, {
		ajax: false
		,func: function(data){
			var udata = {},
				sdata = {};
				
			if(SES['perfil']){
				udata = JSON.parse(SES['perfil']);
			}
			var bdate = udata.birthdate.split("-");
			
			sdata.genero = udata.gender;
			sdata.nombre = udata.name;
			sdata.edad_day = bdate[2];
			sdata.edad_month = bdate[1];
			sdata.edad_year = bdate[0];
			sdata.estatura = udata.height;
			sdata.peso = udata.weight;
			sdata.correo = data.correo;
			sdata.contrasena = data.contrasena;
			sdata.terminos = 'SI';
			sdata.unit = udata.unit;
			//
			if(isOnLine() != 'none'){
				var chain = "";
				if(SES['chain']){
					chain = SES['chain']; 
				}
				post(SITE+'main/register/'+chain, sdata, function(obj){
					if(obj.success === false){
						alert(language.err[obj.message]);
					}else{	
						SES['chain'] = obj.chain;
						SES['perfil'] = JSON.stringify(udata);
						if(udata.height == undefined 
							|| udata.weight == undefined ){
							SES.removeItem('info_basica');
						}
						iniciar();
					}
				});
			}else{
				alert(language.reg_nonet);
			/*	var chain = 'temp-'+Math.floor(Date.now() / 1000);
				webdb.executeSql('CREATE TABLE IF NOT EXISTS tmp_users (ID INTEGER PRIMARY KEY ASC, email TEXT,  pass TEXT, chain TEXT, json TEXT)', [],
					function(tx, r){},
					function(tx, e){});
				webdb.executeSql('INSERT INTO tmp_users (email, pass, chain, json) VALUES (?,?,?,?)', 
					[ data.correo, data.contrasena, chain, JSON.stringify(sdata)],
					function(tx, r){
						SES['chain'] = chain;
						SES['perfil'] = JSON.stringify(udata);
						iniciar();
					},
					function(tx, e){
						alert(language.reg_error);
					});
			*/
			}
			$('#cortina').remove();
		}
	});
	return false;
}
/*! end register */
/*! restore */
function botonRestore(){
	ak_navigate('#restore', {to: 'show_login();'}); 
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
						show_login();
					}
					cortina.remove();
				});}});
	return false;
}
/*! end restore */
/*! Congiguracion */
function show_config(back){
	if(SES['sens']){
		ak_navigate('#config', back); 
	}else{
		show_sensibilidad(back);
	}
}
function show_sensibilidad(back){
	ak_navigate('#sensibilidad', back);
		
	$('input[type="range"]').on('input', function () {
		var percent = Math.ceil(((this.value - this.min) / (this.max - this.min)) * 100);
		$(this).css('background', '-webkit-linear-gradient(left, #5de252 0%, #5de252 ' + percent + '%, #212024 ' + percent + '%)');
	});
	
	if(SES['sens']){
		var sens = 10 * parseFloat(SES['sens']),
			percent = Math.ceil(((sens - 0) / (30-0)) * 100);
		$('#sensible').val( sens ).css('background', '-webkit-linear-gradient(left, #5de252 0%, #5de252 ' + percent + '%, #212024 ' + percent + '%)');
	}
}
function stepsConf(a){
	var x = a.x
	, y = a.y
	, z = a.z
	, m = parseFloat(((x +y +z)/3).toFixed(1))
	, s = parseInt($('#sensible').val()) / 10;

	if(ACCE > (m + s) || ACCE < (m - s)){
		STEP = STEP+1;
		$('.sensibilidad-pasos').html(STEP);
	}
	ACCE = m;
}

function stepsConfStop(action){
	stopsteps();
	if(action == 'save' || action == 'reset'){
		$('.sens-ini').removeClass('oculto');
		$('.sensibilidad-pasos').html(0);
		$('#sensEnd').addClass('oculto');
		$('#PickSensible').removeClass('toCenter');
		
		if(action == 'save'){
			SES['sens'] = parseInt($('#sensible').val()) / 10;
			show_config({to:'show_inicio();', tx: language.cancel});
		}

		STEP = 0;
	}else{
		$('.btnSave').html(language.save);
		$('.btnVolv').html(language.volver);
		$('.textSensible').html(language.sensible.replace('?', STEP));
		$('#PickSensible').addClass('toCenter');
	}
}

function tipoActividad(nu){
	ACTIVITYTYPE = nu;
	$('.actType').removeClass('btn-success');
	$('#actividad-'+nu).addClass('btn-success');
}
/*! end Congiguracion */
/*! dispositivos HRM  */
function botonDispositivos(back){
	ak_navigate('#dispositivos', back); 
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
		output += '<div class="ak-alert">'+language.nodisp+'</div>';
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
function addDisp(name, address){
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
function principal(back){
	ak_navigate('#principal', back);
	var mySwiper = new Swiper ('#principal .swiper-container', {
		direction: 'horizontal'
		,loop: false
	});
	$('#BtnPausar').removeClass('oculto');
	$('#BtnDetener').addClass('oculto');
	PAUSED = false;
	if(SES['BG']){
		cordova.plugins.backgroundMode.disable();
	}
	StopAcc = false;
	if(!SES['StepID']){
		steps();
	}
}
function trackActivity(){
	if(SES['actividad'] && !PAUSED){
		var actividad = JSON.parse(SES['actividad'])
		,endDate = new Date()
		,curIndex= actividad.length-1
		,iniTime = new Date(actividad[curIndex].ini);
		//
		actividad[curIndex].end = endDate;
		actividad[curIndex].seg = parseInt((endDate-iniTime)/1000);
		actividad[curIndex].ste = STEP;
		actividad[curIndex].cal = CALO;
		actividad[curIndex].dis = DISTA;
		actividad[curIndex].ppm = PPM;
		//
		SES['actividad'] = JSON.stringify(actividad);
		return true;
	}
	
	return false;
}
function Dist(lat1, lon1, lat2, lon2){
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
    t = '00 : 00',
    t2 = new Date(),
    dif = t2-t1;
    SECOND = parseInt((dif/1000) + segundos_mas);
    var h = parseInt( SECOND / 3600 ) % 24,
		m = parseInt( SECOND / 60 ) % 60,
		s = checkTime(parseInt( SECOND % 60 ));        
    if( h > 0 ){
        h = checkTime(h);
		m = checkTime(m);
		t = '<span class="act">'+h+'</span> : <span class="act">'+m+'</span> : <span class="act">'+s+'</span>';
    }else if( m > 0){
		m = checkTime(m);
        t = '<span>00</span> : <span class="act">'+m+'</span> : <span class="act">'+s+'</span>';
    }else{
        t = '<span>00</span> : <span>00</span> : <span class="act">'+s+'</span>';
    } 
	$('.ppal-clock').html( t );	
}
function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function steps(func){
	

	var options = { frequency: ACCELTIMEOUT };
	
	if(func == 'stepsConf'){
		$('.sens-ini').addClass('oculto');
		$('#sensEnd').removeClass('oculto');
		SES['StepID'] = navigator.accelerometer.watchAcceleration(stepsConf, function(){}, options);
	}else{
		SES['StepID'] = navigator.accelerometer.watchAcceleration(stepsSuccess, function(){}, options);
	}
	
	if(BG == null){
		cordova.plugins.backgroundMode.setDefaults({ 
			title: language.sforza_exe 
			,text: language.cal_time
		//	,ticker:'sforza'
		});
		cordova.plugins.backgroundMode.enable();
		//
		BG = true;
		SES['BG'] = true;
	}
}
function stopsteps() {
	if(SES['StepID']){
		navigator.accelerometer.clearWatch(SES['StepID']);
		SES.removeItem('StepID');
	}
	if(BG != null){
		cordova.plugins.backgroundMode.disable();
		BG = null;
	}
}
function stepsSuccess(a){
	if(ACTIVITYTYPE == 1){
		loadMapa();
	}
	if(StopAcc){
		mensaje(msj);
		return false;
	}
	//
	var x = a.x
	, y = a.y
	, z = a.z
	, m = parseFloat(((x +y +z)/3).toFixed(1))
	, s = parseFloat(SES['sens']);

	if(ACCE > (m + s) || ACCE < (m - s)){
		$('#BtnPausar').removeClass('oculto');
		$('#BtnDetener').addClass('oculto');
		//
		PAUSED = false;
		var actividad = [];
		if(SES['actividad']){
			actividad = JSON.parse(SES['actividad']);
		}
		var tot = actividad.length;
		if(tot < 1 || actividad[tot-1].seg != undefined){
			actividad.push({
				ini : new Date()
				,lat: LAT
				,lon: LON
			});
			SES['actividad'] = JSON.stringify(actividad);
		}
		//
		STEP = (SES['steps'])? parseInt(SES['steps'])+1: 1;
		SES['steps'] = STEP;
		// 1 mt. = a 39.370 pulgadas
		// mujer = altura_pulgadas * 0,413 para obtener longitud de zancada media. 
		// hombre = altura_pulgadas * 0,415 para obtener longitud de zancada media.
		
		if(PERFIL == null){
			PERFIL = JSON.parse(SES['perfil']);
		}

		var metro = 39.370, //1 metro en pulgadas
			milla = 1.609344, //1 milla en kilometros
			libra = 2.2046; //1 libra

		if(ALT == null){
			if(PERFIL.unit == 'E'){
				var a = PERFIL.height.split(' '),
					a1= parseInt(a[0]),
					a2= parseInt(a[1]);
				
				ALT = ((((a1*12)+a2)*2.54)/100).toFixed(2);
			}else{
				ALT = parseFloat(PERFIL.height).toFixed(2);
			}
		}	
		var pulgadas = ALT * metro;
		
		var med = (PERFIL.gender == 'M')? 0.415 : 0.413;

		var velocidad = {};
			velocidad.time_act = 0;
			velocidad.paso_act = 0;
			
		if(SES['velocidad']){
			velocidad = JSON.parse(SES['velocidad']);
		}
		
		if(SECOND > (velocidad.time_act + 4)){
			velocidad.time_act = SECOND;
			var pasos = (STEP - velocidad.paso_act);
			velocidad.paso_act = STEP;
			var	PasosDivSegundos = (pasos / 5).toFixed(1);
			var PpS = (PasosDivSegundos > 1.5)? PasosDivSegundos : 0;
			SES['velocidad'] = JSON.stringify(velocidad);
			var ndista = (pulgadas * (med * PpS)) * pasos;
			DISTA = DISTA + ndista;
		//	DISTA = (pulgadas * med) * STEP;
			var pulgadas = DISTA; //pulgadas
			var metros = pulgadas/metro;
			var mostrar = metros.toFixed(1) + ' m'
			if( metros > 1000 ){
				mostrar = metros/1000;
				mostrar = metros.toFixed(2) + ' k'
			}
			if(DISTA > LASTTTACK+(39.370*10)){
				if(trackActivity()){
					LASTTTACK = DISTA;
				}
			}
			$(".DISTA").html( mostrar );
			/*! calorias */
			var efficiencia = 0.6; //promedio de caminar y trotar
			if(PES == null){
				if(PERFIL.unit == 'E'){
					PES = parseInt(PERFIL.weight);
				}else{
					PES = (parseInt(PERFIL.weight) * 2.20462262).toFixed(1);
				}
			}
			// si hrm activo
			if(PPM != 0){ 
				eficiencia = 0.5*(PPM/100);
			}
			CALO = (efficiencia * PES * ((metros/1000)/milla)).toFixed(1);
			$('.CALOR').html( CALO );
			
			mensaje('Alt: '+ALT+' Pes: '+PES);
		}
		$('.PASOS').html( STEP );
		initClock();
		PauseSens = 0;
	}else{
		if(!PAUSED && PauseSens >= 3){
			mensaje('pAUSE');
			pause();
		}
		PauseSens = PauseSens+1;
	}	
	
	ACCE = m;
}
function geo(){
		var options = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
		GeoIDGeoID = navigator.geolocation.watchPosition(geoSuccess, function(error){
			mensaje("Geo Error : " + error.code + "<br/> Mensaje : " + error.message );
		}, options);

	//	var options = { enableHighAccuracy: true };
	//	navigator.geolocation.getCurrentPosition(geoSuccess, function(error){
	//
	//	}, options);	
}
function stopgeo(){
	if(GeoID){
		geolocation.clearWatch(GeoID);
		GeoID=null;
	}
}
function geoSuccess(position){
	LAT = position.coords.latitude;
	LON = position.coords.longitude;
}
function loadMapa(){
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
		if(isOnLine() != 'none' && MAP == null){
			loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyAihfNS3dpn6vB16RXRREYAy9jXEf63yUE&callback=map_init', function(){
			//	
			});
		}
	}
}
function pause(call){
	trackActivity();
	$('#BtnPausar').addClass('oculto');
	$('#BtnDetener').removeClass('oculto');
	PAUSED = true;
	if(call != undefined){
		call();
	}
}
function stop(){
	stopsteps();
	PPM = 0;
	STEP = 0;
	LASTTTACK = 0; //ultimo registro tomado
	SECOND = 0;
	CALO = 0; //calorias
	STEP = 0; //pasos
	SPEED_SEG = 0;
	SPEED_STEP = 0;
	SPEED_TRACK = 0;
	DISTA = 0; //distancia recorrida
	ACCE = 0; //ACCELERATION
	PAUSED = true; //status of activity
	MAPLINE = null; //linea de recorrido
	MAP = null; //map google
	LAT = 0; //map latitude
	LON = 0; //map longitude
	ICO = null; //icon map	
	StopAcc = true;

	SES.removeItem('steps');
	SES.removeItem('velocidad');
	SES.removeItem('BG');
	
	$('.ppal-clock').html('00:00');
	$('.PPM, .PASOS, .DISTA, .CALOR').html('0');
	
	ak_navigate('#stop');
}
function guardar(resp){
	if( SES['actividad'] ){
		if(resp == 'SI'){

			webdb.executeSql('CREATE TABLE IF NOT EXISTS actividad (ID INTEGER PRIMARY KEY ASC, chain TEXT, json TEXT, sync TEXT, data TEXT)', [],
				function(tx, r){},
				function(tx, e){});

			var actividad = JSON.parse(SES['actividad']),
			fecha = actividad[0].ini;

			webdb.executeSql('INSERT INTO actividad (chain, json, sync, data) VALUES (?,?,?,?)', 
				[ SES['chain'], SES['actividad'], 'NO', fecha],
				function(tx, r){},
				function(tx, e){});
		}
		SES.removeItem('actividad');
	}
	
    show_inicio();
}
/*! end principal */
/*! map */
function map_init(){
	var mapOptions = {
		panControl: false
		, zoomControl: false
		, mapTypeControl: false
		, scaleControl: false
		, streetViewControl: false
		, overviewMapControl: false
		, center: { lat: LAT, lng: LON}
		, zoom: 16
	};
	MAP = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
/*! end map */	
function getSQL(f){
	var FROM = f ||'actividad';
	//
	webdb.executeSql('SELECT * FROM '+FROM, [],
		function(tx, r){
			var rows = r.rows,
				tot = rows.length;
			for(var i=0; i<tot; i++){
				var row = rows.item(i);
				mensaje(JSON.stringify(row));
			}
		},
		function(tx, e){});
}
function exeSQL(sql){
	//
	webdb.executeSql(sql, [],
		function(tx, r){
			mensaje('SQL : exito');
		},
		function(tx, e){
			mensaje('SQL : error');
		});
}