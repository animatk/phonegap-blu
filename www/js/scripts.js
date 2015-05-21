/*! Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
/*! Zepto selector css*/
;!function(t){function n(n){return n=t(n),!(!n.width()&&!n.height())&&"none"!==n.css("display")}function e(t,n){t=t.replace(/=#\]/g,'="#"]');var e,i,r=u.exec(t);if(r&&r[2]in s&&(e=s[r[2]],i=r[3],t=r[1],i)){var o=Number(i);i=isNaN(o)?i.replace(/^["']|["']$/g,""):o}return n(t,e,i)}var i=t.zepto,r=i.qsa,o=i.matches,s=t.expr[":"]={visible:function(){return n(this)?this:void 0},hidden:function(){return n(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,n){return t===n.length-1?this:void 0},eq:function(t,n,e){return t===e?this:void 0},contains:function(n,e,i){return t(this).text().indexOf(i)>-1?this:void 0},has:function(t,n,e){return i.qsa(this,e).length?this:void 0}},u=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),c=/^\s*>/,h="Zepto"+ +new Date;i.qsa=function(n,o){return e(o,function(e,s,u){try{var a;!e&&s?e="*":c.test(e)&&(a=t(n).addClass(h),e="."+h+" "+e);var f=r(n,e)}catch(d){throw console.error("error performing selector: %o",o),d}finally{a&&a.removeClass(h)}return s?i.uniq(t.map(f,function(t,n){return s.call(t,n,f,u)})):f})},i.matches=function(t,n){return e(n,function(n,e,i){return!(n&&!o(t,n)||e&&e.call(t,null,i)!==t)})}}(Zepto)
/*! Swiper 3.0.6 - http://www.idangero.us/swiper/ - Copyright 2015, Vladimir Kharlampidi*/
!function(){"use strict";function e(e){e.fn.swiper=function(t){var a;return e(this).each(function(){var e=new Swiper(this,t);a||(a=e)}),a}}window.Swiper=function(e,a){function r(){return"horizontal"===h.params.direction}function s(){h.autoplayTimeoutId=setTimeout(function(){h.params.loop?(h.fixLoop(),h._slideNext()):h.isEnd?a.autoplayStopOnLast?h.stopAutoplay():h._slideTo(0):h._slideNext()},h.params.autoplay)}function i(e,t){var a=g(e.target);if(!a.is(t))if("string"==typeof t)a=a.parents(t);else if(t.nodeType){var r;return a.parents().each(function(e,a){a===t&&(r=t)}),r?t:void 0}return 0===a.length?void 0:a[0]}function n(e,t){t=t||{};var a=window.MutationObserver||window.WebkitMutationObserver,r=new a(function(e){e.forEach(function(e){h.onResize(),h.emit("onObserverUpdate",h,e)})});r.observe(e,{attributes:"undefined"==typeof t.attributes?!0:t.attributes,childList:"undefined"==typeof t.childList?!0:t.childList,characterData:"undefined"==typeof t.characterData?!0:t.characterData}),h.observers.push(r)}function o(e){e.originalEvent&&(e=e.originalEvent);var t=e.keyCode||e.charCode;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===t||39===t||38===t||40===t){var a=!1;if(h.container.parents(".swiper-slide").length>0&&0===h.container.parents(".swiper-slide-active").length)return;for(var s={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,n=window.innerHeight,o=h.container.offset(),l=[[o.left,o.top],[o.left+h.width,o.top],[o.left,o.top+h.height],[o.left+h.width,o.top+h.height]],d=0;d<l.length;d++){var p=l[d];p[0]>=s.left&&p[0]<=s.left+i&&p[1]>=s.top&&p[1]<=s.top+n&&(a=!0)}if(!a)return}r()?((37===t||39===t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),39===t&&h.slideNext(),37===t&&h.slidePrev()):((38===t||40===t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===t&&h.slideNext(),38===t&&h.slidePrev())}}function l(e){e.originalEvent&&(e=e.originalEvent);var t=h._wheelEvent,a=0;if(e.detail)a=-e.detail;else if("mousewheel"===t)if(h.params.mousewheelForceToAxis)if(r()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;a=e.wheelDeltaX}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;a=e.wheelDeltaY}else a=e.wheelDelta;else if("DOMMouseScroll"===t)a=-e.detail;else if("wheel"===t)if(h.params.mousewheelForceToAxis)if(r()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;a=-e.deltaX}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;a=-e.deltaY}else a=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX:-e.deltaY;if(h.params.freeMode){var s=h.getWrapperTranslate()+a;if(s>0&&(s=0),s<h.maxTranslate()&&(s=h.maxTranslate()),h.setWrapperTransition(0),h.setWrapperTranslate(s),h.updateProgress(),h.updateActiveIndex(),0===s||s===h.maxTranslate())return}else(new Date).getTime()-h._lastWheelScrollTime>60&&(0>a?h.slideNext():h.slidePrev()),h._lastWheelScrollTime=(new Date).getTime();return h.params.autoplay&&h.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}function d(e,t){e=g(e);var a,s,i;a=e.attr("data-swiper-parallax")||"0",s=e.attr("data-swiper-parallax-x"),i=e.attr("data-swiper-parallax-y"),s||i?(s=s||"0",i=i||"0"):r()?(s=a,i="0"):(i=a,s="0"),s=s.indexOf("%")>=0?parseInt(s,10)*t+"%":s*t+"px",i=i.indexOf("%")>=0?parseInt(i,10)*t+"%":i*t+"px",e.transform("translate3d("+s+", "+i+",0px)")}function p(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof Swiper))return new Swiper(e,a);var u={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,keyboardControl:!1,mousewheelControl:!1,mousewheelForceToAxis:!1,hashnav:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,pagination:null,paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationHiddenClass:"swiper-pagination-hidden",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",runCallbacksOnInit:!0},c=a&&a.virtualTranslate;a=a||{};for(var m in u)if("undefined"==typeof a[m])a[m]=u[m];else if("object"==typeof a[m])for(var f in u[m])"undefined"==typeof a[m][f]&&(a[m][f]=u[m][f]);var h=this;h.params=a,h.classNames=[];var g;if(g="undefined"==typeof t?window.Dom7||window.Zepto||window.jQuery:t,g&&(h.$=g,h.container=g(e),0!==h.container.length)){if(h.container.length>1)return void h.container.each(function(){new Swiper(this,a)});h.container[0].swiper=h,h.container.data("swiper",h),h.classNames.push("swiper-container-"+h.params.direction),h.params.freeMode&&h.classNames.push("swiper-container-free-mode"),h.support.flexbox||(h.classNames.push("swiper-container-no-flexbox"),h.params.slidesPerColumn=1),(h.params.parallax||h.params.watchSlidesVisibility)&&(h.params.watchSlidesProgress=!0),["cube","coverflow"].indexOf(h.params.effect)>=0&&(h.support.transforms3d?(h.params.watchSlidesProgress=!0,h.classNames.push("swiper-container-3d")):h.params.effect="slide"),"slide"!==h.params.effect&&h.classNames.push("swiper-container-"+h.params.effect),"cube"===h.params.effect&&(h.params.resistanceRatio=0,h.params.slidesPerView=1,h.params.slidesPerColumn=1,h.params.slidesPerGroup=1,h.params.centeredSlides=!1,h.params.spaceBetween=0,h.params.virtualTranslate=!0,h.params.setWrapperSize=!1),"fade"===h.params.effect&&(h.params.slidesPerView=1,h.params.slidesPerColumn=1,h.params.slidesPerGroup=1,h.params.watchSlidesProgress=!0,h.params.spaceBetween=0,"undefined"==typeof c&&(h.params.virtualTranslate=!0)),h.params.grabCursor&&h.support.touch&&(h.params.grabCursor=!1),h.wrapper=h.container.children("."+h.params.wrapperClass),h.params.pagination&&(h.paginationContainer=g(h.params.pagination),h.params.paginationClickable&&h.paginationContainer.addClass("swiper-pagination-clickable")),h.rtl=r()&&("rtl"===h.container[0].dir.toLowerCase()||"rtl"===h.container.css("direction")),h.rtl&&h.classNames.push("swiper-container-rtl"),h.rtl&&(h.wrongRTL="-webkit-box"===h.wrapper.css("display")),h.params.slidesPerColumn>1&&h.classNames.push("swiper-container-multirow"),h.device.android&&h.classNames.push("swiper-container-android"),h.container.addClass(h.classNames.join(" ")),h.translate=0,h.progress=0,h.velocity=0,h.lockSwipeToNext=function(){h.params.allowSwipeToNext=!1},h.lockSwipeToPrev=function(){h.params.allowSwipeToPrev=!1},h.lockSwipes=function(){h.params.allowSwipeToNext=h.params.allowSwipeToPrev=!1},h.unlockSwipeToNext=function(){h.params.allowSwipeToNext=!0},h.unlockSwipeToPrev=function(){h.params.allowSwipeToPrev=!0},h.unlockSwipes=function(){h.params.allowSwipeToNext=h.params.allowSwipeToPrev=!0},h.params.grabCursor&&(h.container[0].style.cursor="move",h.container[0].style.cursor="-webkit-grab",h.container[0].style.cursor="-moz-grab",h.container[0].style.cursor="grab"),h.imagesToLoad=[],h.imagesLoaded=0,h.loadImage=function(e,t,a,r){function s(){r&&r()}var i;e.complete&&a?s():t?(i=new Image,i.onload=s,i.onerror=s,i.src=t):s()},h.preloadImages=function(){function e(){"undefined"!=typeof h&&null!==h&&(void 0!==h.imagesLoaded&&h.imagesLoaded++,h.imagesLoaded===h.imagesToLoad.length&&(h.params.updateOnImagesReady&&h.update(),h.emit("onImagesReady",h)))}h.imagesToLoad=h.container.find("img");for(var t=0;t<h.imagesToLoad.length;t++)h.loadImage(h.imagesToLoad[t],h.imagesToLoad[t].currentSrc||h.imagesToLoad[t].getAttribute("src"),!0,e)},h.autoplayTimeoutId=void 0,h.autoplaying=!1,h.autoplayPaused=!1,h.startAutoplay=function(){return"undefined"!=typeof h.autoplayTimeoutId?!1:h.params.autoplay?h.autoplaying?!1:(h.autoplaying=!0,h.emit("onAutoplayStart",h),void s()):!1},h.stopAutoplay=function(){h.autoplayTimeoutId&&(h.autoplayTimeoutId&&clearTimeout(h.autoplayTimeoutId),h.autoplaying=!1,h.autoplayTimeoutId=void 0,h.emit("onAutoplayStop",h))},h.pauseAutoplay=function(e){h.autoplayPaused||(h.autoplayTimeoutId&&clearTimeout(h.autoplayTimeoutId),h.autoplayPaused=!0,0===e?(h.autoplayPaused=!1,s()):h.wrapper.transitionEnd(function(){h.autoplayPaused=!1,h.autoplaying?s():h.stopAutoplay()}))},h.minTranslate=function(){return-h.snapGrid[0]},h.maxTranslate=function(){return-h.snapGrid[h.snapGrid.length-1]},h.updateContainerSize=function(){h.width=h.container[0].clientWidth,h.height=h.container[0].clientHeight,h.size=r()?h.width:h.height},h.updateSlidesSize=function(){h.slides=h.wrapper.children("."+h.params.slideClass),h.snapGrid=[],h.slidesGrid=[],h.slidesSizesGrid=[];var e,t=h.params.spaceBetween,a=0,s=0,i=0;"string"==typeof t&&t.indexOf("%")>=0&&(t=parseFloat(t.replace("%",""))/100*h.size),h.virtualSize=-t,h.slides.css(h.rtl?{marginLeft:"",marginTop:""}:{marginRight:"",marginBottom:""});var n;h.params.slidesPerColumn>1&&(n=Math.floor(h.slides.length/h.params.slidesPerColumn)===h.slides.length/h.params.slidesPerColumn?h.slides.length:Math.ceil(h.slides.length/h.params.slidesPerColumn)*h.params.slidesPerColumn);var o;for(e=0;e<h.slides.length;e++){o=0;var l=h.slides.eq(e);if(h.params.slidesPerColumn>1){var d,p,u,c,m=h.params.slidesPerColumn;"column"===h.params.slidesPerColumnFill?(p=Math.floor(e/m),u=e-p*m,d=p+u*n/m,l.css({"-webkit-box-ordinal-group":d,"-moz-box-ordinal-group":d,"-ms-flex-order":d,"-webkit-order":d,order:d})):(c=n/m,u=Math.floor(e/c),p=e-u*c),l.css({"margin-top":0!==u&&h.params.spaceBetween&&h.params.spaceBetween+"px"}).attr("data-swiper-column",p).attr("data-swiper-row",u)}"none"!==l.css("display")&&("auto"===h.params.slidesPerView?o=r()?l.outerWidth(!0):l.outerHeight(!0):(o=(h.size-(h.params.slidesPerView-1)*t)/h.params.slidesPerView,r()?h.slides[e].style.width=o+"px":h.slides[e].style.height=o+"px"),h.slides[e].swiperSlideSize=o,h.slidesSizesGrid.push(o),h.params.centeredSlides?(a=a+o/2+s/2+t,0===e&&(a=a-h.size/2-t),Math.abs(a)<.001&&(a=0),i%h.params.slidesPerGroup===0&&h.snapGrid.push(a),h.slidesGrid.push(a)):(i%h.params.slidesPerGroup===0&&h.snapGrid.push(a),h.slidesGrid.push(a),a=a+o+t),h.virtualSize+=o+t,s=o,i++)}h.virtualSize=Math.max(h.virtualSize,h.size);var f;if(h.rtl&&h.wrongRTL&&("slide"===h.params.effect||"coverflow"===h.params.effect)&&h.wrapper.css({width:h.virtualSize+h.params.spaceBetween+"px"}),(!h.support.flexbox||h.params.setWrapperSize)&&h.wrapper.css(r()?{width:h.virtualSize+h.params.spaceBetween+"px"}:{height:h.virtualSize+h.params.spaceBetween+"px"}),h.params.slidesPerColumn>1&&(h.virtualSize=(o+h.params.spaceBetween)*n,h.virtualSize=Math.ceil(h.virtualSize/h.params.slidesPerColumn)-h.params.spaceBetween,h.wrapper.css({width:h.virtualSize+h.params.spaceBetween+"px"}),h.params.centeredSlides)){for(f=[],e=0;e<h.snapGrid.length;e++)h.snapGrid[e]<h.virtualSize+h.snapGrid[0]&&f.push(h.snapGrid[e]);h.snapGrid=f}if(!h.params.centeredSlides){for(f=[],e=0;e<h.snapGrid.length;e++)h.snapGrid[e]<=h.virtualSize-h.size&&f.push(h.snapGrid[e]);h.snapGrid=f,Math.floor(h.virtualSize-h.size)>Math.floor(h.snapGrid[h.snapGrid.length-1])&&h.snapGrid.push(h.virtualSize-h.size)}0===h.snapGrid.length&&(h.snapGrid=[0]),0!==h.params.spaceBetween&&h.slides.css(r()?h.rtl?{marginLeft:t+"px"}:{marginRight:t+"px"}:{marginBottom:t+"px"}),h.params.watchSlidesProgress&&h.updateSlidesOffset()},h.updateSlidesOffset=function(){for(var e=0;e<h.slides.length;e++)h.slides[e].swiperSlideOffset=r()?h.slides[e].offsetLeft:h.slides[e].offsetTop},h.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=h.translate||0),0!==h.slides.length){"undefined"==typeof h.slides[0].swiperSlideOffset&&h.updateSlidesOffset();var t=h.params.centeredSlides?-e+h.size/2:-e;h.rtl&&(t=h.params.centeredSlides?e-h.size/2:e);{h.container[0].getBoundingClientRect(),r()?"left":"top",r()?"right":"bottom"}h.slides.removeClass(h.params.slideVisibleClass);for(var a=0;a<h.slides.length;a++){var s=h.slides[a],i=h.params.centeredSlides===!0?s.swiperSlideSize/2:0,n=(t-s.swiperSlideOffset-i)/(s.swiperSlideSize+h.params.spaceBetween);if(h.params.watchSlidesVisibility){var o=-(t-s.swiperSlideOffset-i),l=o+h.slidesSizesGrid[a],d=o>=0&&o<h.size||l>0&&l<=h.size||0>=o&&l>=h.size;d&&h.slides.eq(a).addClass(h.params.slideVisibleClass)}s.progress=h.rtl?-n:n}}},h.updateProgress=function(e){"undefined"==typeof e&&(e=h.translate||0);var t=h.maxTranslate()-h.minTranslate();0===t?(h.progress=0,h.isBeginning=h.isEnd=!0):(h.progress=(e-h.minTranslate())/t,h.isBeginning=h.progress<=0,h.isEnd=h.progress>=1),h.isBeginning&&h.emit("onReachBeginning",h),h.isEnd&&h.emit("onReachEnd",h),h.params.watchSlidesProgress&&h.updateSlidesProgress(e),h.emit("onProgress",h,h.progress)},h.updateActiveIndex=function(){var e,t,a,r=h.rtl?h.translate:-h.translate;for(t=0;t<h.slidesGrid.length;t++)"undefined"!=typeof h.slidesGrid[t+1]?r>=h.slidesGrid[t]&&r<h.slidesGrid[t+1]-(h.slidesGrid[t+1]-h.slidesGrid[t])/2?e=t:r>=h.slidesGrid[t]&&r<h.slidesGrid[t+1]&&(e=t+1):r>=h.slidesGrid[t]&&(e=t);(0>e||"undefined"==typeof e)&&(e=0),a=Math.floor(e/h.params.slidesPerGroup),a>=h.snapGrid.length&&(a=h.snapGrid.length-1),e!==h.activeIndex&&(h.snapIndex=a,h.previousIndex=h.activeIndex,h.activeIndex=e,h.updateClasses())},h.updateClasses=function(){h.slides.removeClass(h.params.slideActiveClass+" "+h.params.slideNextClass+" "+h.params.slidePrevClass);var e=h.slides.eq(h.activeIndex);if(e.addClass(h.params.slideActiveClass),e.next("."+h.params.slideClass).addClass(h.params.slideNextClass),e.prev("."+h.params.slideClass).addClass(h.params.slidePrevClass),h.bullets&&h.bullets.length>0){h.bullets.removeClass(h.params.bulletActiveClass);var t;h.params.loop?(t=Math.ceil(h.activeIndex-h.loopedSlides)/h.params.slidesPerGroup,t>h.slides.length-1-2*h.loopedSlides&&(t-=h.slides.length-2*h.loopedSlides),t>h.bullets.length-1&&(t-=h.bullets.length)):t="undefined"!=typeof h.snapIndex?h.snapIndex:h.activeIndex||0,h.paginationContainer.length>1?h.bullets.each(function(){g(this).index()===t&&g(this).addClass(h.params.bulletActiveClass)}):h.bullets.eq(t).addClass(h.params.bulletActiveClass)}h.params.loop||(h.params.prevButton&&(h.isBeginning?(g(h.params.prevButton).addClass(h.params.buttonDisabledClass),h.params.a11y&&h.a11y&&h.a11y.disable(g(h.params.prevButton))):(g(h.params.prevButton).removeClass(h.params.buttonDisabledClass),h.params.a11y&&h.a11y&&h.a11y.enable(g(h.params.prevButton)))),h.params.nextButton&&(h.isEnd?(g(h.params.nextButton).addClass(h.params.buttonDisabledClass),h.params.a11y&&h.a11y&&h.a11y.disable(g(h.params.nextButton))):(g(h.params.nextButton).removeClass(h.params.buttonDisabledClass),h.params.a11y&&h.a11y&&h.a11y.enable(g(h.params.nextButton)))))},h.updatePagination=function(){if(h.params.pagination&&h.paginationContainer&&h.paginationContainer.length>0){for(var e="",t=h.params.loop?Math.ceil((h.slides.length-2*h.loopedSlides)/h.params.slidesPerGroup):h.snapGrid.length,a=0;t>a;a++)e+=h.params.paginationBulletRender?h.params.paginationBulletRender(a,h.params.bulletClass):'<span class="'+h.params.bulletClass+'"></span>';h.paginationContainer.html(e),h.bullets=h.paginationContainer.find("."+h.params.bulletClass)}},h.update=function(e){function t(){r=Math.min(Math.max(h.translate,h.maxTranslate()),h.minTranslate()),h.setWrapperTranslate(r),h.updateActiveIndex(),h.updateClasses()}if(h.updateContainerSize(),h.updateSlidesSize(),h.updateProgress(),h.updatePagination(),h.updateClasses(),h.params.scrollbar&&h.scrollbar&&h.scrollbar.set(),e){var a,r;h.params.freeMode?t():(a="auto"===h.params.slidesPerView&&h.isEnd&&!h.params.centeredSlides?h.slideTo(h.slides.length-1,0,!1,!0):h.slideTo(h.activeIndex,0,!1,!0),a||t())}},h.onResize=function(){if(h.updateContainerSize(),h.updateSlidesSize(),h.updateProgress(),("auto"===h.params.slidesPerView||h.params.freeMode)&&h.updatePagination(),h.params.scrollbar&&h.scrollbar&&h.scrollbar.set(),h.params.freeMode){var e=Math.min(Math.max(h.translate,h.maxTranslate()),h.minTranslate());h.setWrapperTranslate(e),h.updateActiveIndex(),h.updateClasses()}else h.updateClasses(),"auto"===h.params.slidesPerView&&h.isEnd&&!h.params.centeredSlides?h.slideTo(h.slides.length-1,0,!1,!0):h.slideTo(h.activeIndex,0,!1,!0)};var v=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?v=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(v=["MSPointerDown","MSPointerMove","MSPointerUp"]),h.touchEvents={start:h.support.touch||!h.params.simulateTouch?"touchstart":v[0],move:h.support.touch||!h.params.simulateTouch?"touchmove":v[1],end:h.support.touch||!h.params.simulateTouch?"touchend":v[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===h.params.touchEventsTarget?h.container:h.wrapper).addClass("swiper-wp8-"+h.params.direction),h.initEvents=function(e){var t=e?"off":"on",r=e?"removeEventListener":"addEventListener",s="container"===h.params.touchEventsTarget?h.container[0]:h.wrapper[0],i=h.support.touch?s:document,n=h.params.nested?!0:!1;h.browser.ie?(s[r](h.touchEvents.start,h.onTouchStart,!1),i[r](h.touchEvents.move,h.onTouchMove,n),i[r](h.touchEvents.end,h.onTouchEnd,!1)):(h.support.touch&&(s[r](h.touchEvents.start,h.onTouchStart,!1),s[r](h.touchEvents.move,h.onTouchMove,n),s[r](h.touchEvents.end,h.onTouchEnd,!1)),!a.simulateTouch||h.device.ios||h.device.android||(s[r]("mousedown",h.onTouchStart,!1),i[r]("mousemove",h.onTouchMove,n),i[r]("mouseup",h.onTouchEnd,!1))),window[r]("resize",h.onResize),h.params.nextButton&&(g(h.params.nextButton)[t]("click",h.onClickNext),h.params.a11y&&h.a11y&&g(h.params.nextButton)[t]("keydown",h.a11y.onEnterKey)),h.params.prevButton&&(g(h.params.prevButton)[t]("click",h.onClickPrev),h.params.a11y&&h.a11y&&g(h.params.prevButton)[t]("keydown",h.a11y.onEnterKey)),h.params.pagination&&h.params.paginationClickable&&g(h.paginationContainer)[t]("click","."+h.params.bulletClass,h.onClickIndex),(h.params.preventClicks||h.params.preventClicksPropagation)&&s[r]("click",h.preventClicks,!0)},h.attachEvents=function(){h.initEvents()},h.detachEvents=function(){h.initEvents(!0)},h.allowClick=!0,h.preventClicks=function(e){h.allowClick||(h.params.preventClicks&&e.preventDefault(),h.params.preventClicksPropagation&&(e.stopPropagation(),e.stopImmediatePropagation()))},h.onClickNext=function(e){e.preventDefault(),h.slideNext()},h.onClickPrev=function(e){e.preventDefault(),h.slidePrev()},h.onClickIndex=function(e){e.preventDefault();var t=g(this).index()*h.params.slidesPerGroup;h.params.loop&&(t+=h.loopedSlides),h.slideTo(t)},h.updateClickedSlide=function(e){var t=i(e,"."+h.params.slideClass);if(!t)return h.clickedSlide=void 0,void(h.clickedIndex=void 0);if(h.clickedSlide=t,h.clickedIndex=g(t).index(),h.params.slideToClickedSlide&&void 0!==h.clickedIndex&&h.clickedIndex!==h.activeIndex){var a,r=h.clickedIndex;if(h.params.loop)if(a=g(h.clickedSlide).attr("data-swiper-slide-index"),r>h.slides.length-h.params.slidesPerView)h.fixLoop(),r=h.wrapper.children("."+h.params.slideClass+'[data-swiper-slide-index="'+a+'"]').eq(0).index(),setTimeout(function(){h.slideTo(r)},0);else if(r<h.params.slidesPerView-1){h.fixLoop();var s=h.wrapper.children("."+h.params.slideClass+'[data-swiper-slide-index="'+a+'"]');r=s.eq(s.length-1).index(),setTimeout(function(){h.slideTo(r)},0)}else h.slideTo(r);else h.slideTo(r)}};var w,y,b,x,T,S,C,M,E,z="input, select, textarea, button",P=Date.now(),I=[];h.animating=!1,h.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var k,L;if(h.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),k="touchstart"===e.type,k||!("which"in e)||3!==e.which){if(h.params.noSwiping&&i(e,"."+h.params.noSwipingClass))return void(h.allowClick=!0);if(!h.params.swipeHandler||i(e,h.params.swipeHandler)){if(w=!0,y=!1,x=void 0,L=void 0,h.touches.startX=h.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,h.touches.startY=h.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,b=Date.now(),h.allowClick=!0,h.updateContainerSize(),h.swipeDirection=void 0,h.params.threshold>0&&(C=!1),"touchstart"!==e.type){var t=!0;g(e.target).is(z)&&(t=!1),document.activeElement&&g(document.activeElement).is(z)&&document.activeElement.blur(),t&&e.preventDefault()}h.emit("onTouchStart",h,e)}}},h.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!(k&&"mousemove"===e.type||e.preventedByNestedSwiper)){if(h.params.onlyExternal)return y=!0,void(h.allowClick=!1);if(k&&document.activeElement&&e.target===document.activeElement&&g(e.target).is(z))return y=!0,void(h.allowClick=!1);if(h.emit("onTouchMove",h,e),!(e.targetTouches&&e.targetTouches.length>1)){if(h.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,h.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof x){var t=180*Math.atan2(Math.abs(h.touches.currentY-h.touches.startY),Math.abs(h.touches.currentX-h.touches.startX))/Math.PI;x=r()?t>h.params.touchAngle:90-t>h.params.touchAngle}if(x&&h.emit("onTouchMoveOpposite",h,e),"undefined"==typeof L&&h.browser.ieTouch&&(h.touches.currentX!==h.touches.startX||h.touches.currentY!==h.touches.startY)&&(L=!0),w){if(x)return void(w=!1);if(L||!h.browser.ieTouch){h.allowClick=!1,h.emit("onSliderMove",h,e),e.preventDefault(),h.params.touchMoveStopPropagation&&!h.params.nested&&e.stopPropagation(),y||(a.loop&&h.fixLoop(),S=h.getWrapperTranslate(),h.setWrapperTransition(0),h.animating&&h.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),h.params.autoplay&&h.autoplaying&&(h.params.autoplayDisableOnInteraction?h.stopAutoplay():h.pauseAutoplay()),E=!1,h.params.grabCursor&&(h.container[0].style.cursor="move",h.container[0].style.cursor="-webkit-grabbing",h.container[0].style.cursor="-moz-grabbin",h.container[0].style.cursor="grabbing")),y=!0;var s=h.touches.diff=r()?h.touches.currentX-h.touches.startX:h.touches.currentY-h.touches.startY;s*=h.params.touchRatio,h.rtl&&(s=-s),h.swipeDirection=s>0?"prev":"next",T=s+S;var i=!0;if(s>0&&T>h.minTranslate()?(i=!1,h.params.resistance&&(T=h.minTranslate()-1+Math.pow(-h.minTranslate()+S+s,h.params.resistanceRatio))):0>s&&T<h.maxTranslate()&&(i=!1,h.params.resistance&&(T=h.maxTranslate()+1-Math.pow(h.maxTranslate()-S-s,h.params.resistanceRatio))),i&&(e.preventedByNestedSwiper=!0),!h.params.allowSwipeToNext&&"next"===h.swipeDirection&&S>T&&(T=S),!h.params.allowSwipeToPrev&&"prev"===h.swipeDirection&&T>S&&(T=S),h.params.followFinger){if(h.params.threshold>0){if(!(Math.abs(s)>h.params.threshold||C))return void(T=S);if(!C)return C=!0,h.touches.startX=h.touches.currentX,h.touches.startY=h.touches.currentY,T=S,void(h.touches.diff=r()?h.touches.currentX-h.touches.startX:h.touches.currentY-h.touches.startY)}(h.params.freeMode||h.params.watchSlidesProgress)&&h.updateActiveIndex(),h.params.freeMode&&(0===I.length&&I.push({position:h.touches[r()?"startX":"startY"],time:b}),I.push({position:h.touches[r()?"currentX":"currentY"],time:(new Date).getTime()})),h.updateProgress(T),h.setWrapperTranslate(T)}}}}}},h.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),h.emit("onTouchEnd",h,e),w){h.params.grabCursor&&y&&w&&(h.container[0].style.cursor="move",h.container[0].style.cursor="-webkit-grab",h.container[0].style.cursor="-moz-grab",h.container[0].style.cursor="grab");var t=Date.now(),a=t-b;if(h.allowClick&&(h.updateClickedSlide(e),h.emit("onTap",h,e),300>a&&t-P>300&&(M&&clearTimeout(M),M=setTimeout(function(){h&&(h.params.paginationHide&&h.paginationContainer.length>0&&!g(e.target).hasClass(h.params.bulletClass)&&h.paginationContainer.toggleClass(h.params.paginationHiddenClass),h.emit("onClick",h,e))},300)),300>a&&300>t-P&&(M&&clearTimeout(M),h.emit("onDoubleTap",h,e))),P=Date.now(),setTimeout(function(){h&&h.allowClick&&(h.allowClick=!0)},0),!w||!y||!h.swipeDirection||0===h.touches.diff||T===S)return void(w=y=!1);w=y=!1;var r;if(r=h.params.followFinger?h.rtl?h.translate:-h.translate:-T,h.params.freeMode){if(r<-h.minTranslate())return void h.slideTo(h.activeIndex);if(r>-h.maxTranslate())return void h.slideTo(h.slides.length-1);if(h.params.freeModeMomentum){if(I.length>1){var s=I.pop(),i=I.pop(),n=s.position-i.position,o=s.time-i.time;h.velocity=n/o,h.velocity=h.velocity/2,Math.abs(h.velocity)<.02&&(h.velocity=0),(o>150||(new Date).getTime()-s.time>300)&&(h.velocity=0)}else h.velocity=0;I.length=0;var l=1e3*h.params.freeModeMomentumRatio,d=h.velocity*l,p=h.translate+d;h.rtl&&(p=-p);var u,c=!1,m=20*Math.abs(h.velocity)*h.params.freeModeMomentumBounceRatio;p<h.maxTranslate()&&(h.params.freeModeMomentumBounce?(p+h.maxTranslate()<-m&&(p=h.maxTranslate()-m),u=h.maxTranslate(),c=!0,E=!0):p=h.maxTranslate()),p>h.minTranslate()&&(h.params.freeModeMomentumBounce?(p-h.minTranslate()>m&&(p=h.minTranslate()+m),u=h.minTranslate(),c=!0,E=!0):p=h.minTranslate()),0!==h.velocity&&(l=Math.abs(h.rtl?(-p-h.translate)/h.velocity:(p-h.translate)/h.velocity)),h.params.freeModeMomentumBounce&&c?(h.updateProgress(u),h.setWrapperTransition(l),h.setWrapperTranslate(p),h.onTransitionStart(),h.animating=!0,h.wrapper.transitionEnd(function(){E&&(h.emit("onMomentumBounce",h),h.setWrapperTransition(h.params.speed),h.setWrapperTranslate(u),h.wrapper.transitionEnd(function(){h.onTransitionEnd()}))})):h.velocity?(h.updateProgress(p),h.setWrapperTransition(l),h.setWrapperTranslate(p),h.onTransitionStart(),h.animating||(h.animating=!0,h.wrapper.transitionEnd(function(){h.onTransitionEnd()}))):h.updateProgress(p),h.updateActiveIndex()}return void((!h.params.freeModeMomentum||a>=h.params.longSwipesMs)&&(h.updateProgress(),h.updateActiveIndex()))}var f,v=0,x=h.slidesSizesGrid[0];for(f=0;f<h.slidesGrid.length;f+=h.params.slidesPerGroup)"undefined"!=typeof h.slidesGrid[f+h.params.slidesPerGroup]?r>=h.slidesGrid[f]&&r<h.slidesGrid[f+h.params.slidesPerGroup]&&(v=f,x=h.slidesGrid[f+h.params.slidesPerGroup]-h.slidesGrid[f]):r>=h.slidesGrid[f]&&(v=f,x=h.slidesGrid[h.slidesGrid.length-1]-h.slidesGrid[h.slidesGrid.length-2]);var C=(r-h.slidesGrid[v])/x;if(a>h.params.longSwipesMs){if(!h.params.longSwipes)return void h.slideTo(h.activeIndex);"next"===h.swipeDirection&&h.slideTo(C>=h.params.longSwipesRatio?v+h.params.slidesPerGroup:v),"prev"===h.swipeDirection&&h.slideTo(C>1-h.params.longSwipesRatio?v+h.params.slidesPerGroup:v)}else{if(!h.params.shortSwipes)return void h.slideTo(h.activeIndex);"next"===h.swipeDirection&&h.slideTo(v+h.params.slidesPerGroup),"prev"===h.swipeDirection&&h.slideTo(v)}}},h._slideTo=function(e,t){return h.slideTo(e,t,!0,!0)},h.slideTo=function(e,t,a,s){"undefined"==typeof a&&(a=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),h.snapIndex=Math.floor(e/h.params.slidesPerGroup),h.snapIndex>=h.snapGrid.length&&(h.snapIndex=h.snapGrid.length-1);var i=-h.snapGrid[h.snapIndex];h.params.autoplay&&h.autoplaying&&(s||!h.params.autoplayDisableOnInteraction?h.pauseAutoplay(t):h.stopAutoplay()),h.updateProgress(i);for(var n=0;n<h.slidesGrid.length;n++)-i>=h.slidesGrid[n]&&(e=n);if("undefined"==typeof t&&(t=h.params.speed),h.previousIndex=h.activeIndex||0,h.activeIndex=e,i===h.translate)return h.updateClasses(),!1;h.onTransitionStart(a);r()?i:0,r()?0:i;return 0===t?(h.setWrapperTransition(0),h.setWrapperTranslate(i),h.onTransitionEnd(a)):(h.setWrapperTransition(t),h.setWrapperTranslate(i),h.animating||(h.animating=!0,h.wrapper.transitionEnd(function(){h.onTransitionEnd(a)}))),h.updateClasses(),!0},h.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),h.lazy&&h.lazy.onTransitionStart(),e&&(h.emit("onTransitionStart",h),h.activeIndex!==h.previousIndex&&h.emit("onSlideChangeStart",h))},h.onTransitionEnd=function(e){h.animating=!1,h.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),h.lazy&&h.lazy.onTransitionEnd(),e&&(h.emit("onTransitionEnd",h),h.activeIndex!==h.previousIndex&&h.emit("onSlideChangeEnd",h)),h.params.hashnav&&h.hashnav&&h.hashnav.setHash()},h.slideNext=function(e,t,a){if(h.params.loop){if(h.animating)return!1;h.fixLoop();{h.container[0].clientLeft}return h.slideTo(h.activeIndex+h.params.slidesPerGroup,t,e,a)}return h.slideTo(h.activeIndex+h.params.slidesPerGroup,t,e,a)},h._slideNext=function(e){return h.slideNext(!0,e,!0)},h.slidePrev=function(e,t,a){if(h.params.loop){if(h.animating)return!1;h.fixLoop();{h.container[0].clientLeft}return h.slideTo(h.activeIndex-1,t,e,a)}return h.slideTo(h.activeIndex-1,t,e,a)},h._slidePrev=function(e){return h.slidePrev(!0,e,!0)},h.slideReset=function(e,t){return h.slideTo(h.activeIndex,t,e)},h.setWrapperTransition=function(e,t){h.wrapper.transition(e),"slide"!==h.params.effect&&h.effects[h.params.effect]&&h.effects[h.params.effect].setTransition(e),h.params.parallax&&h.parallax&&h.parallax.setTransition(e),h.params.scrollbar&&h.scrollbar&&h.scrollbar.setTransition(e),h.params.control&&h.controller&&h.controller.setTransition(e,t),h.emit("onSetTransition",h,e)},h.setWrapperTranslate=function(e,t,a){var s=0,i=0,n=0;r()?s=h.rtl?-e:e:i=e,h.params.virtualTranslate||h.wrapper.transform(h.support.transforms3d?"translate3d("+s+"px, "+i+"px, "+n+"px)":"translate("+s+"px, "+i+"px)"),h.translate=r()?s:i,t&&h.updateActiveIndex(),"slide"!==h.params.effect&&h.effects[h.params.effect]&&h.effects[h.params.effect].setTranslate(h.translate),h.params.parallax&&h.parallax&&h.parallax.setTranslate(h.translate),h.params.scrollbar&&h.scrollbar&&h.scrollbar.setTranslate(h.translate),h.params.control&&h.controller&&h.controller.setTranslate(h.translate,a),h.emit("onSetTranslate",h,h.translate)},h.getTranslate=function(e,t){var a,r,s,i;return"undefined"==typeof t&&(t="x"),h.params.virtualTranslate?h.rtl?-h.translate:h.translate:(s=window.getComputedStyle(e,null),window.WebKitCSSMatrix?i=new WebKitCSSMatrix("none"===s.webkitTransform?"":s.webkitTransform):(i=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=i.toString().split(",")),"x"===t&&(r=window.WebKitCSSMatrix?i.m41:parseFloat(16===a.length?a[12]:a[4])),"y"===t&&(r=window.WebKitCSSMatrix?i.m42:parseFloat(16===a.length?a[13]:a[5])),h.rtl&&r&&(r=-r),r||0)},h.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=r()?"x":"y"),h.getTranslate(h.wrapper[0],e)},h.observers=[],h.initObservers=function(){if(h.params.observeParents)for(var e=h.container.parents(),t=0;t<e.length;t++)n(e[t]);n(h.container[0],{childList:!1}),n(h.wrapper[0],{attributes:!1})},h.disconnectObservers=function(){for(var e=0;e<h.observers.length;e++)h.observers[e].disconnect();h.observers=[]},h.createLoop=function(){h.wrapper.children("."+h.params.slideClass+"."+h.params.slideDuplicateClass).remove();
var e=h.wrapper.children("."+h.params.slideClass);h.loopedSlides=parseInt(h.params.loopedSlides||h.params.slidesPerView,10),h.loopedSlides=h.loopedSlides+h.params.loopAdditionalSlides,h.loopedSlides>e.length&&(h.loopedSlides=e.length);var t,a=[],r=[];for(e.each(function(t,s){var i=g(this);t<h.loopedSlides&&r.push(s),t<e.length&&t>=e.length-h.loopedSlides&&a.push(s),i.attr("data-swiper-slide-index",t)}),t=0;t<r.length;t++)h.wrapper.append(g(r[t].cloneNode(!0)).addClass(h.params.slideDuplicateClass));for(t=a.length-1;t>=0;t--)h.wrapper.prepend(g(a[t].cloneNode(!0)).addClass(h.params.slideDuplicateClass))},h.destroyLoop=function(){h.wrapper.children("."+h.params.slideClass+"."+h.params.slideDuplicateClass).remove(),h.slides.removeAttr("data-swiper-slide-index")},h.fixLoop=function(){var e;h.activeIndex<h.loopedSlides?(e=h.slides.length-3*h.loopedSlides+h.activeIndex,e+=h.loopedSlides,h.slideTo(e,0,!1,!0)):("auto"===h.params.slidesPerView&&h.activeIndex>=2*h.loopedSlides||h.activeIndex>h.slides.length-2*h.params.slidesPerView)&&(e=-h.slides.length+h.activeIndex+h.loopedSlides,e+=h.loopedSlides,h.slideTo(e,0,!1,!0))},h.appendSlide=function(e){if(h.params.loop&&h.destroyLoop(),"object"==typeof e&&e.length)for(var t=0;t<e.length;t++)e[t]&&h.wrapper.append(e[t]);else h.wrapper.append(e);h.params.loop&&h.createLoop(),h.params.observer&&h.support.observer||h.update(!0)},h.prependSlide=function(e){h.params.loop&&h.destroyLoop();var t=h.activeIndex+1;if("object"==typeof e&&e.length){for(var a=0;a<e.length;a++)e[a]&&h.wrapper.prepend(e[a]);t=h.activeIndex+e.length}else h.wrapper.prepend(e);h.params.loop&&h.createLoop(),h.params.observer&&h.support.observer||h.update(!0),h.slideTo(t,0,!1)},h.removeSlide=function(e){h.params.loop&&h.destroyLoop();var t,a=h.activeIndex;if("object"==typeof e&&e.length){for(var r=0;r<e.length;r++)t=e[r],h.slides[t]&&h.slides.eq(t).remove(),a>t&&a--;a=Math.max(a,0)}else t=e,h.slides[t]&&h.slides.eq(t).remove(),a>t&&a--,a=Math.max(a,0);h.params.observer&&h.support.observer||h.update(!0),h.slideTo(a,0,!1)},h.removeAllSlides=function(){for(var e=[],t=0;t<h.slides.length;t++)e.push(t);h.removeSlide(e)},h.effects={fade:{fadeIndex:null,setTranslate:function(){for(var e=0;e<h.slides.length;e++){var t=h.slides.eq(e),a=t[0].swiperSlideOffset,s=-a;h.params.virtualTranslate||(s-=h.translate);var i=0;r()||(i=s,s=0);var n=h.params.fade.crossFade?Math.max(1-Math.abs(t[0].progress),0):1+Math.min(Math.max(t[0].progress,-1),0);n>0&&1>n&&(h.effects.fade.fadeIndex=e),t.css({opacity:n}).transform("translate3d("+s+"px, "+i+"px, 0px)")}},setTransition:function(e){if(h.slides.transition(e),h.params.virtualTranslate&&0!==e){var t=null!==h.effects.fade.fadeIndex?h.effects.fade.fadeIndex:h.activeIndex;h.slides.eq(t).transitionEnd(function(){for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)h.wrapper.trigger(e[t])})}}},cube:{setTranslate:function(){var e,t=0;h.params.cube.shadow&&(r()?(e=h.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=g('<div class="swiper-cube-shadow"></div>'),h.wrapper.append(e)),e.css({height:h.width+"px"})):(e=h.container.find(".swiper-cube-shadow"),0===e.length&&(e=g('<div class="swiper-cube-shadow"></div>'),h.container.append(e))));for(var a=0;a<h.slides.length;a++){var s=h.slides.eq(a),i=90*a,n=Math.floor(i/360);h.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(s[0].progress,1),-1),l=0,d=0,p=0;a%4===0?(l=4*-n*h.size,p=0):(a-1)%4===0?(l=0,p=4*-n*h.size):(a-2)%4===0?(l=h.size+4*n*h.size,p=h.size):(a-3)%4===0&&(l=-h.size,p=3*h.size+4*h.size*n),h.rtl&&(l=-l),r()||(d=l,l=0);var u="rotateX("+(r()?0:-i)+"deg) rotateY("+(r()?i:0)+"deg) translate3d("+l+"px, "+d+"px, "+p+"px)";if(1>=o&&o>-1&&(t=90*a+90*o,h.rtl&&(t=90*-a-90*o)),s.transform(u),h.params.cube.slideShadows){var c=s.find(r()?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),m=s.find(r()?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===c.length&&(c=g('<div class="swiper-slide-shadow-'+(r()?"left":"top")+'"></div>'),s.append(c)),0===m.length&&(m=g('<div class="swiper-slide-shadow-'+(r()?"right":"bottom")+'"></div>'),s.append(m));{s[0].progress}c.length&&(c[0].style.opacity=-s[0].progress),m.length&&(m[0].style.opacity=s[0].progress)}}if(h.wrapper.css({"-webkit-transform-origin":"50% 50% -"+h.size/2+"px","-moz-transform-origin":"50% 50% -"+h.size/2+"px","-ms-transform-origin":"50% 50% -"+h.size/2+"px","transform-origin":"50% 50% -"+h.size/2+"px"}),h.params.cube.shadow)if(r())e.transform("translate3d(0px, "+(h.width/2+h.params.cube.shadowOffset)+"px, "+-h.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+h.params.cube.shadowScale+")");else{var f=Math.abs(t)-90*Math.floor(Math.abs(t)/90),v=1.5-(Math.sin(2*f*Math.PI/360)/2+Math.cos(2*f*Math.PI/360)/2),w=h.params.cube.shadowScale,y=h.params.cube.shadowScale/v,b=h.params.cube.shadowOffset;e.transform("scale3d("+w+", 1, "+y+") translate3d(0px, "+(h.height/2+b)+"px, "+-h.height/2/y+"px) rotateX(-90deg)")}var x=h.isSafari||h.isUiWebView?-h.size/2:0;h.wrapper.transform("translate3d(0px,0,"+x+"px) rotateX("+(r()?0:t)+"deg) rotateY("+(r()?-t:0)+"deg)")},setTransition:function(e){h.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),h.params.cube.shadow&&!r()&&h.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=h.translate,t=r()?-e+h.width/2:-e+h.height/2,a=r()?h.params.coverflow.rotate:-h.params.coverflow.rotate,s=h.params.coverflow.depth,i=0,n=h.slides.length;n>i;i++){var o=h.slides.eq(i),l=h.slidesSizesGrid[i],d=o[0].swiperSlideOffset,p=(t-d-l/2)/l*h.params.coverflow.modifier,u=r()?a*p:0,c=r()?0:a*p,m=-s*Math.abs(p),f=r()?0:h.params.coverflow.stretch*p,v=r()?h.params.coverflow.stretch*p:0;Math.abs(v)<.001&&(v=0),Math.abs(f)<.001&&(f=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var w="translate3d("+v+"px,"+f+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(w),o[0].style.zIndex=-Math.abs(Math.round(p))+1,h.params.coverflow.slideShadows){var y=o.find(r()?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),b=o.find(r()?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===y.length&&(y=g('<div class="swiper-slide-shadow-'+(r()?"left":"top")+'"></div>'),o.append(y)),0===b.length&&(b=g('<div class="swiper-slide-shadow-'+(r()?"right":"bottom")+'"></div>'),o.append(b)),y.length&&(y[0].style.opacity=p>0?p:0),b.length&&(b[0].style.opacity=-p>0?-p:0)}}if(h.browser.ie){var x=h.wrapper[0].style;x.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){h.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},h.lazy={initialImageLoaded:!1,loadImageInSlide:function(e){if("undefined"!=typeof e&&0!==h.slides.length){var t=h.slides.eq(e),a=t.find("img.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");0!==a.length&&a.each(function(){var e=g(this);e.addClass("swiper-lazy-loading");var a=e.attr("data-src");h.loadImage(e[0],a,!1,function(){e.attr("src",a),e.removeAttr("data-src"),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),t.find(".swiper-lazy-preloader, .preloader").remove(),h.emit("onLazyImageReady",h,t[0],e[0])}),h.emit("onLazyImageLoad",h,t[0],e[0])})}},load:function(){if(h.params.watchSlidesVisibility)h.wrapper.children("."+h.params.slideVisibleClass).each(function(){h.lazy.loadImageInSlide(g(this).index())});else if(h.params.slidesPerView>1)for(var e=h.activeIndex;e<h.activeIndex+h.params.slidesPerView;e++)h.slides[e]&&h.lazy.loadImageInSlide(e);else h.lazy.loadImageInSlide(h.activeIndex);if(h.params.lazyLoadingInPrevNext){var t=h.wrapper.children("."+h.params.slideNextClass);t.length>0&&h.lazy.loadImageInSlide(t.index());var a=h.wrapper.children("."+h.params.slidePrevClass);a.length>0&&h.lazy.loadImageInSlide(a.index())}},onTransitionStart:function(){h.params.lazyLoading&&(h.params.lazyLoadingOnTransitionStart||!h.params.lazyLoadingOnTransitionStart&&!h.lazy.initialImageLoaded)&&(h.lazy.initialImageLoaded=!0,h.lazy.load())},onTransitionEnd:function(){h.params.lazyLoading&&!h.params.lazyLoadingOnTransitionStart&&h.lazy.load()}},h.scrollbar={set:function(){if(h.params.scrollbar){var e=h.scrollbar;e.track=g(h.params.scrollbar),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=g('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=r()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=h.size/h.virtualSize,e.moveDivider=e.divider*(e.trackSize/h.size),e.dragSize=e.trackSize*e.divider,r()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.track[0].style.display=e.divider>=1?"none":"",h.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(h.params.scrollbar){var e,t=h.scrollbar,a=(h.translate||0,t.dragSize);e=(t.trackSize-t.dragSize)*h.progress,h.rtl&&r()?(e=-e,e>0?(a=t.dragSize-e,e=0):-e+t.dragSize>t.trackSize&&(a=t.trackSize+e)):0>e?(a=t.dragSize+e,e=0):e+t.dragSize>t.trackSize&&(a=t.trackSize-e),r()?(t.drag.transform(h.support.transforms3d?"translate3d("+e+"px, 0, 0)":"translateX("+e+"px)"),t.drag[0].style.width=a+"px"):(t.drag.transform(h.support.transforms3d?"translate3d(0px, "+e+"px, 0)":"translateY("+e+"px)"),t.drag[0].style.height=a+"px"),h.params.scrollbarHide&&(clearTimeout(t.timeout),t.track[0].style.opacity=1,t.timeout=setTimeout(function(){t.track[0].style.opacity=0,t.track.transition(400)},1e3))}},setTransition:function(e){h.params.scrollbar&&h.scrollbar.drag.transition(e)}},h.controller={setTranslate:function(e,t){var a,r,s=h.params.control;if(h.isArray(s))for(var i=0;i<s.length;i++)s[i]!==t&&s[i]instanceof Swiper&&(e=s[i].rtl&&"horizontal"===s[i].params.direction?-h.translate:h.translate,a=(s[i].maxTranslate()-s[i].minTranslate())/(h.maxTranslate()-h.minTranslate()),r=(e-h.minTranslate())*a+s[i].minTranslate(),h.params.controlInverse&&(r=s[i].maxTranslate()-r),s[i].updateProgress(r),s[i].setWrapperTranslate(r,!1,h),s[i].updateActiveIndex());else s instanceof Swiper&&t!==s&&(e=s.rtl&&"horizontal"===s.params.direction?-h.translate:h.translate,a=(s.maxTranslate()-s.minTranslate())/(h.maxTranslate()-h.minTranslate()),r=(e-h.minTranslate())*a+s.minTranslate(),h.params.controlInverse&&(r=s.maxTranslate()-r),s.updateProgress(r),s.setWrapperTranslate(r,!1,h),s.updateActiveIndex())},setTransition:function(e,t){var a=h.params.control;if(h.isArray(a))for(var r=0;r<a.length;r++)a[r]!==t&&a[r]instanceof Swiper&&a[r].setWrapperTransition(e,h);else a instanceof Swiper&&t!==a&&a.setWrapperTransition(e,h)}},h.hashnav={init:function(){if(h.params.hashnav){h.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var t=0,a=0,r=h.slides.length;r>a;a++){var s=h.slides.eq(a),i=s.attr("data-hash");if(i===e&&!s.hasClass(h.params.slideDuplicateClass)){var n=s.index();h.slideTo(n,t,h.params.runCallbacksOnInit,!0)}}}},setHash:function(){h.hashnav.initialized&&h.params.hashnav&&(document.location.hash=h.slides.eq(h.activeIndex).attr("data-hash")||"")}},h.disableKeyboardControl=function(){g(document).off("keydown",o)},h.enableKeyboardControl=function(){g(document).on("keydown",o)},h._wheelEvent=!1,h._lastWheelScrollTime=(new Date).getTime(),h.params.mousewheelControl){if(void 0!==document.onmousewheel&&(h._wheelEvent="mousewheel"),!h._wheelEvent)try{new WheelEvent("wheel"),h._wheelEvent="wheel"}catch(D){}h._wheelEvent||(h._wheelEvent="DOMMouseScroll")}h.disableMousewheelControl=function(){return h._wheelEvent?(h.container.off(h._wheelEvent,l),!0):!1},h.enableMousewheelControl=function(){return h._wheelEvent?(h.container.on(h._wheelEvent,l),!0):!1},h.parallax={setTranslate:function(){h.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){d(this,h.progress)}),h.slides.each(function(){var e=g(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=Math.min(Math.max(e[0].progress,-1),1);d(this,t)})})},setTransition:function(e){"undefined"==typeof e&&(e=h.params.speed),h.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=g(this),a=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(a=0),t.transition(a)})}},h._plugins=[];for(var B in h.plugins){var A=h.plugins[B](h,h.params[B]);A&&h._plugins.push(A)}return h.callPlugins=function(e){for(var t=0;t<h._plugins.length;t++)e in h._plugins[t]&&h._plugins[t][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},h.emitterEventListeners={},h.emit=function(e){h.params[e]&&h.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var t;if(h.emitterEventListeners[e])for(t=0;t<h.emitterEventListeners[e].length;t++)h.emitterEventListeners[e][t](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);h.callPlugins&&h.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},h.on=function(e,t){return e=p(e),h.emitterEventListeners[e]||(h.emitterEventListeners[e]=[]),h.emitterEventListeners[e].push(t),h},h.off=function(e,t){var a;if(e=p(e),"undefined"==typeof t)return h.emitterEventListeners[e]=[],h;if(h.emitterEventListeners[e]&&0!==h.emitterEventListeners[e].length){for(a=0;a<h.emitterEventListeners[e].length;a++)h.emitterEventListeners[e][a]===t&&h.emitterEventListeners[e].splice(a,1);return h}},h.once=function(e,t){e=p(e);var a=function(){t(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),h.off(e,a)};return h.on(e,a),h},h.a11y={makeFocusable:function(e){return e[0].tabIndex="0",e},addRole:function(e,t){return e.attr("role",t),e},addLabel:function(e,t){return e.attr("aria-label",t),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(g(e.target).is(h.params.nextButton)?(h.onClickNext(e),h.a11y.notify(h.isEnd?h.params.lastSlideMsg:h.params.nextSlideMsg)):g(e.target).is(h.params.prevButton)&&(h.onClickPrev(e),h.a11y.notify(h.isBeginning?h.params.firstSlideMsg:h.params.prevSlideMsg)))},liveRegion:g('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var t=h.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},init:function(){if(h.params.nextButton){var e=g(h.params.nextButton);h.a11y.makeFocusable(e),h.a11y.addRole(e,"button"),h.a11y.addLabel(e,h.params.nextSlideMsg)}if(h.params.prevButton){var t=g(h.params.prevButton);h.a11y.makeFocusable(t),h.a11y.addRole(t,"button"),h.a11y.addLabel(t,h.params.prevSlideMsg)}g(h.container).append(h.a11y.liveRegion)},destroy:function(){h.a11y.liveRegion&&h.a11y.liveRegion.length>0&&h.a11y.liveRegion.remove()}},h.init=function(){h.params.loop&&h.createLoop(),h.updateContainerSize(),h.updateSlidesSize(),h.updatePagination(),h.params.scrollbar&&h.scrollbar&&h.scrollbar.set(),"slide"!==h.params.effect&&h.effects[h.params.effect]&&(h.params.loop||h.updateProgress(),h.effects[h.params.effect].setTranslate()),h.params.loop?h.slideTo(h.params.initialSlide+h.loopedSlides,0,h.params.runCallbacksOnInit):(h.slideTo(h.params.initialSlide,0,h.params.runCallbacksOnInit),0===h.params.initialSlide&&(h.parallax&&h.params.parallax&&h.parallax.setTranslate(),h.lazy&&h.params.lazyLoading&&h.lazy.load())),h.attachEvents(),h.params.observer&&h.support.observer&&h.initObservers(),h.params.preloadImages&&!h.params.lazyLoading&&h.preloadImages(),h.params.autoplay&&h.startAutoplay(),h.params.keyboardControl&&h.enableKeyboardControl&&h.enableKeyboardControl(),h.params.mousewheelControl&&h.enableMousewheelControl&&h.enableMousewheelControl(),h.params.hashnav&&h.hashnav&&h.hashnav.init(),h.params.a11y&&h.a11y&&h.a11y.init(),h.emit("onInit",h)},h.cleanupStyles=function(){h.container.removeClass(h.classNames.join(" ")).removeAttr("style"),h.wrapper.removeAttr("style"),h.slides&&h.slides.length&&h.slides.removeClass([h.params.slideVisibleClass,h.params.slideActiveClass,h.params.slideNextClass,h.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),h.paginationContainer&&h.paginationContainer.length&&h.paginationContainer.removeClass(h.params.paginationHiddenClass),h.bullets&&h.bullets.length&&h.bullets.removeClass(h.params.bulletActiveClass),h.params.prevButton&&g(h.params.prevButton).removeClass(h.params.buttonDisabledClass),h.params.nextButton&&g(h.params.nextButton).removeClass(h.params.buttonDisabledClass),h.params.scrollbar&&h.scrollbar&&(h.scrollbar.track&&h.scrollbar.track.length&&h.scrollbar.track.removeAttr("style"),h.scrollbar.drag&&h.scrollbar.drag.length&&h.scrollbar.drag.removeAttr("style"))},h.destroy=function(e,t){h.detachEvents(),h.stopAutoplay(),h.params.loop&&h.destroyLoop(),t&&h.cleanupStyles(),h.disconnectObservers(),h.params.keyboardControl&&h.disableKeyboardControl&&h.disableKeyboardControl(),h.params.mousewheelControl&&h.disableMousewheelControl&&h.disableMousewheelControl(),h.params.a11y&&h.a11y&&h.a11y.destroy(),h.emit("onDestroy"),e!==!1&&(h=null)},h.init(),h}},Swiper.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,t=e.match(/(Android);?[\s\/]+([\d.]+)?/),a=e.match(/(iPad).*OS\s([\d_]+)/),r=(e.match(/(iPod)(.*OS\s([\d_]+))?/),!a&&e.match(/(iPhone\sOS)\s([\d_]+)/));return{ios:a||r||a,android:t}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a++)if(t[a]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var t=(function(){var e=function(e){var t=this,a=0;for(a=0;a<e.length;a++)t[a]=e[a];return t.length=e.length,this},t=function(t,a){var r=[],s=0;if(t&&!a&&t instanceof e)return t;if(t)if("string"==typeof t){var i,n,o=t.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),(0===o.indexOf("<td")||0===o.indexOf("<th"))&&(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=t,s=0;s<n.childNodes.length;s++)r.push(n.childNodes[s])}else for(i=a||"#"!==t[0]||t.match(/[ .<>:~]/)?(a||document).querySelectorAll(t):[document.getElementById(t.split("#")[1])],s=0;s<i.length;s++)i[s]&&r.push(i[s])}else if(t.nodeType||t===window||t===document)r.push(t);else if(t.length>0&&t[0].nodeType)for(s=0;s<t.length;s++)r.push(t[s]);return new e(r)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var t=e.split(" "),a=0;a<t.length;a++)for(var r=0;r<this.length;r++)this[r].classList.add(t[a]);return this},removeClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a++)for(var r=0;r<this.length;r++)this[r].classList.remove(t[a]);return this},hasClass:function(e){return this[0]?this[0].classList.contains(e):!1},toggleClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a++)for(var r=0;r<this.length;r++)this[r].classList.toggle(t[a]);return this},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var a=0;a<this.length;a++)if(2===arguments.length)this[a].setAttribute(e,t);else for(var r in e)this[a][r]=e[r],this[a].setAttribute(r,e[r]);return this},removeAttr:function(e){for(var t=0;t<this.length;t++)this[t].removeAttribute(e);return this},data:function(e,t){if("undefined"==typeof t){if(this[0]){var a=this[0].getAttribute("data-"+e);return a?a:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}return void 0}for(var r=0;r<this.length;r++){var s=this[r];s.dom7ElementDataStorage||(s.dom7ElementDataStorage={}),s.dom7ElementDataStorage[e]=t}return this},transform:function(e){for(var t=0;t<this.length;t++){var a=this[t].style;a.webkitTransform=a.MsTransform=a.msTransform=a.MozTransform=a.OTransform=a.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t++){var a=this[t].style;a.webkitTransitionDuration=a.MsTransitionDuration=a.msTransitionDuration=a.MozTransitionDuration=a.OTransitionDuration=a.transitionDuration=e}return this},on:function(e,a,r,s){function i(e){var s=e.target;if(t(s).is(a))r.call(s,e);else for(var i=t(s).parents(),n=0;n<i.length;n++)t(i[n]).is(a)&&r.call(i[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof a||a===!1)for("function"==typeof a&&(r=arguments[1],s=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],r,s);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:r,liveListener:i}),this[n].addEventListener(l[o],i,s);return this},off:function(e,t,a,r){for(var s=e.split(" "),i=0;i<s.length;i++)for(var n=0;n<this.length;n++)if("function"==typeof t||t===!1)"function"==typeof t&&(a=arguments[1],r=arguments[2]||!1),this[n].removeEventListener(s[i],a,r);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===a&&this[n].removeEventListener(s[i],this[n].dom7LiveListeners[o].liveListener,r);return this},once:function(e,t,a,r){function s(n){a(n),i.off(e,t,s,r)}var i=this;"function"==typeof t&&(t=!1,a=arguments[1],r=arguments[2]),i.on(e,t,s,r)},trigger:function(e,t){for(var a=0;a<this.length;a++){var r;try{r=new CustomEvent(e,{detail:t,bubbles:!0,cancelable:!0})}catch(s){r=document.createEvent("Event"),r.initEvent(e,!0,!0),r.detail=t}this[a].dispatchEvent(r)}return this},transitionEnd:function(e){function t(i){if(i.target===this)for(e.call(this,i),a=0;a<r.length;a++)s.off(r[a],t)}var a,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=this;if(e)for(a=0;a<r.length;a++)s.on(r[a],t);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],t=e.getBoundingClientRect(),a=document.body,r=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,i=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:t.top+i-r,left:t.left+n-s}}return null},css:function(e,t){var a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a++)for(var r in e)this[a].style[r]=e[r];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a++)this[a].style[e]=t;return this}return this},each:function(e){for(var t=0;t<this.length;t++)e.call(this[t],t,this[t]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t++)this[t].innerHTML=e;return this},is:function(a){if(!this[0])return!1;var r,s;if("string"==typeof a){var i=this[0];if(i===document)return a===document;if(i===window)return a===window;if(i.matches)return i.matches(a);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(a);if(i.mozMatchesSelector)return i.mozMatchesSelector(a);if(i.msMatchesSelector)return i.msMatchesSelector(a);for(r=t(a),s=0;s<r.length;s++)if(r[s]===this[0])return!0;return!1}if(a===document)return this[0]===document;if(a===window)return this[0]===window;if(a.nodeType||a instanceof e){for(r=a.nodeType?[a]:a,s=0;s<r.length;s++)if(r[s]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],t=0;null!==(e=e.previousSibling);)1===e.nodeType&&t++;return t}return void 0},eq:function(t){if("undefined"==typeof t)return this;var a,r=this.length;return t>r-1?new e([]):0>t?(a=r+t,new e(0>a?[]:[this[a]])):new e([this[t]])},append:function(t){var a,r;for(a=0;a<this.length;a++)if("string"==typeof t){var s=document.createElement("div");for(s.innerHTML=t;s.firstChild;)this[a].appendChild(s.firstChild)}else if(t instanceof e)for(r=0;r<t.length;r++)this[a].appendChild(t[r]);else this[a].appendChild(t);return this},prepend:function(t){var a,r;for(a=0;a<this.length;a++)if("string"==typeof t){var s=document.createElement("div");for(s.innerHTML=t,r=s.childNodes.length-1;r>=0;r--)this[a].insertBefore(s.childNodes[r],this[a].childNodes[0])}else if(t instanceof e)for(r=0;r<t.length;r++)this[a].insertBefore(t[r],this[a].childNodes[0]);else this[a].insertBefore(t,this[a].childNodes[0]);return this},insertBefore:function(e){for(var a=t(e),r=0;r<this.length;r++)if(1===a.length)a[0].parentNode.insertBefore(this[r],a[0]);else if(a.length>1)for(var s=0;s<a.length;s++)a[s].parentNode.insertBefore(this[r].cloneNode(!0),a[s])},insertAfter:function(e){for(var a=t(e),r=0;r<this.length;r++)if(1===a.length)a[0].parentNode.insertBefore(this[r],a[0].nextSibling);else if(a.length>1)for(var s=0;s<a.length;s++)a[s].parentNode.insertBefore(this[r].cloneNode(!0),a[s].nextSibling)},next:function(a){return new e(this.length>0?a?this[0].nextElementSibling&&t(this[0].nextElementSibling).is(a)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(a){var r=[],s=this[0];if(!s)return new e([]);for(;s.nextElementSibling;){var i=s.nextElementSibling;a?t(i).is(a)&&r.push(i):r.push(i),s=i}return new e(r)},prev:function(a){return new e(this.length>0?a?this[0].previousElementSibling&&t(this[0].previousElementSibling).is(a)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(a){var r=[],s=this[0];if(!s)return new e([]);for(;s.previousElementSibling;){var i=s.previousElementSibling;a?t(i).is(a)&&r.push(i):r.push(i),s=i}return new e(r)},parent:function(e){for(var a=[],r=0;r<this.length;r++)e?t(this[r].parentNode).is(e)&&a.push(this[r].parentNode):a.push(this[r].parentNode);return t(t.unique(a))},parents:function(e){for(var a=[],r=0;r<this.length;r++)for(var s=this[r].parentNode;s;)e?t(s).is(e)&&a.push(s):a.push(s),s=s.parentNode;return t(t.unique(a))},find:function(t){for(var a=[],r=0;r<this.length;r++)for(var s=this[r].querySelectorAll(t),i=0;i<s.length;i++)a.push(s[i]);return new e(a)},children:function(a){for(var r=[],s=0;s<this.length;s++)for(var i=this[s].childNodes,n=0;n<i.length;n++)a?1===i[n].nodeType&&t(i[n]).is(a)&&r.push(i[n]):1===i[n].nodeType&&r.push(i[n]);return new e(t.unique(r))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,a,r=this;for(e=0;e<arguments.length;e++){var s=t(arguments[e]);for(a=0;a<s.length;a++)r[r.length]=s[a],r.length++}return r}},t.fn=e.prototype,t.unique=function(e){for(var t=[],a=0;a<e.length;a++)-1===t.indexOf(e[a])&&t.push(e[a]);return t},t}()),a=["jQuery","Zepto","Dom7"],r=0;r<a.length;r++)window[a[r]]&&e(window[a[r]]);var s;s="undefined"==typeof t?window.Dom7||window.Zepto||window.jQuery:t,s&&("transitionEnd"in s.fn||(s.fn.transitionEnd=function(e){function t(i){if(i.target===this)for(e.call(this,i),a=0;a<r.length;a++)s.off(r[a],t)}var a,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=this;if(e)for(a=0;a<r.length;a++)s.on(r[a],t);return this}),"transform"in s.fn||(s.fn.transform=function(e){for(var t=0;t<this.length;t++){var a=this[t].style;a.webkitTransform=a.MsTransform=a.msTransform=a.MozTransform=a.OTransform=a.transform=e}return this}),"transition"in s.fn||(s.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t++){var a=this[t].style;a.webkitTransitionDuration=a.MsTransitionDuration=a.msTransitionDuration=a.MozTransitionDuration=a.OTransitionDuration=a.transitionDuration=e}return this}))}(),"undefined"!=typeof module?module.exports=Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return Swiper});
//# sourceMappingURL=maps/swiper.min.js.map
!function(){function e(e,i){e.prototype=t(i.prototype),e.prototype.constructor=e,e.parent=i.prototype}function t(e){function t(){}return t.prototype=e,new t}function a(e,t,i){return"millisecond"===i?e.setMilliseconds(e.getMilliseconds()+1*t):"second"===i?e.setSeconds(e.getSeconds()+1*t):"minute"===i?e.setMinutes(e.getMinutes()+1*t):"hour"===i?e.setHours(e.getHours()+1*t):"day"===i?e.setDate(e.getDate()+1*t):"week"===i?e.setDate(e.getDate()+7*t):"month"===i?e.setMonth(e.getMonth()+1*t):"year"===i&&e.setFullYear(e.getFullYear()+1*t),e}function n(e,t){return H[t+"Duration"]*e}function s(e,t){var i=!1;for(0>e&&(i=!0,e*=-1),e=""+e,t=t?t:1;e.length<t;)e="0"+e;return i?"-"+e:e}function o(e){if(!e)return e;e=e.replace(/^\s\s*/,"");for(var t=/\s/,i=e.length;t.test(e.charAt(--i)););return e.slice(0,i+1)}function r(e){e.roundRect=function(e,t,i,a,n,s,o,r){o&&(this.fillStyle=o),r&&(this.strokeStyle=r),"undefined"==typeof n&&(n=5),this.lineWidth=s,this.beginPath(),this.moveTo(e+n,t),this.lineTo(e+i-n,t),this.quadraticCurveTo(e+i,t,e+i,t+n),this.lineTo(e+i,t+a-n),this.quadraticCurveTo(e+i,t+a,e+i-n,t+a),this.lineTo(e+n,t+a),this.quadraticCurveTo(e,t+a,e,t+a-n),this.lineTo(e,t+n),this.quadraticCurveTo(e,t,e+n,t),this.closePath(),o&&this.fill(),r&&s>0&&this.stroke()}}function l(e,t){return e-t}function h(e,t){return e.x-t.x}function d(e){var t=((16711680&e)>>16).toString(16),i=((65280&e)>>8).toString(16),a=((255&e)>>0).toString(16);return t=t.length<2?"0"+t:t,i=i.length<2?"0"+i:i,a=a.length<2?"0"+a:a,"#"+t+i+a}function c(e,t,i){var a=e<<16|t<<8|i;return a}function x(e,t,i){i=i||"normal";var a=e+"_"+t+"_"+i,n=j[a];if(isNaN(n)){try{var s="position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:"+e+"; font-size:"+t+"px; font-weight:"+i+";";if(!N){var o=document.body;N=document.createElement("span"),N.innerHTML="";var r=document.createTextNode("Mpgyi");N.appendChild(r),o.appendChild(N)}N.style.display="",N.setAttribute("style",s),n=Math.round(N.offsetHeight),N.style.display="none"}catch(l){n=Math.ceil(1.1*t)}n=Math.max(n,t),j[a]=n}return n}function p(e,t,i,a){if(e.addEventListener)e.addEventListener(t,i,a||!1);else{if(!e.attachEvent)return!1;e.attachEvent("on"+t,function(t){t=t||window.event,t.preventDefault=t.preventDefault||function(){t.returnValue=!1},t.stopPropagation=t.stopPropagation||function(){t.cancelBubble=!0},i.call(e,t)})}}function m(e,t,i){e*=$,t*=$;for(var a=i.getImageData(e,t,2,2).data,n=!0,s=0;4>s;s++)if(a[s]!==a[s+4]|a[s]!==a[s+8]|a[s]!==a[s+12]){n=!1;break}return n?c(a[0],a[1],a[2]):0}function u(e,t,i){var a="",n=e?e+"FontStyle":"fontStyle",s=e?e+"FontWeight":"fontWeight",o=e?e+"FontSize":"fontSize",r=e?e+"FontFamily":"fontFamily";a+=t[n]?t[n]+" ":i&&i[n]?i[n]+" ":"",a+=t[s]?t[s]+" ":i&&i[s]?i[s]+" ":"",a+=t[o]?t[o]+"px ":i&&i[o]?i[o]+"px ":"";var l=t[r]?t[r]+"":i&&i[r]?i[r]+"":"";if(!O&&l){var h=l.split(",")[0];"'"!==h[0]&&'"'!==h[0]&&(h="'"+h+"'"),a+=h}else a+=l;return a}function g(e,t,i){var a=e in t?t[e]:i[e];return a}function y(e,t,i){if(O&&J){var a=e.getContext("2d");Z=a.webkitBackingStorePixelRatio||a.mozBackingStorePixelRatio||a.msBackingStorePixelRatio||a.oBackingStorePixelRatio||a.backingStorePixelRatio||1,$=Q/Z,e.width=t*$,e.height=i*$,Q!==Z&&(e.style.width=t+"px",e.style.height=i+"px",a.scale($,$))}else e.width=t,e.height=i}function v(e,t){var i=document.createElement("canvas");return i.setAttribute("class","canvasjs-chart-canvas"),y(i,e,t),O||"undefined"==typeof G_vmlCanvasManager||G_vmlCanvasManager.initElement(i),i}function b(e,t,i){if(e&&t&&i){var a=i+"."+("jpeg"===t?"jpg":t),n="image/"+t,s=e.toDataURL(n),o=!1,r=document.createElement("a");r.download=a,r.href=s,r.target="_blank";if("undefined"!=typeof Blob&&new Blob){for(var l=s.replace(/^data:[a-z/]*;base64,/,""),h=atob(l),d=new ArrayBuffer(h.length),c=new Uint8Array(d),x=0;x<h.length;x++)c[x]=h.charCodeAt(x);var p=new Blob([d],{type:"image/"+t});try{window.navigator.msSaveBlob(p,a),o=!0}catch(m){r.dataset.downloadurl=[n,r.download,r.href].join(":"),r.href=window.URL.createObjectURL(p)}}if(!o)try{event=document.createEvent("MouseEvents"),event.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.dispatchEvent?r.dispatchEvent(event):r.fireEvent&&r.fireEvent("onclick")}catch(m){var u=window.open();u.document.write("<img src='"+s+"'></img><div>Please right click on the image and save it to your device</div>"),u.document.close()}}}function f(e,t,i){t.getAttribute("state")!==i&&(t.setAttribute("state",i),t.setAttribute("type","button"),t.style.position="relative",t.style.margin="0px 0px 0px 0px",t.style.padding="3px 4px 0px 4px",t.style.cssFloat="left",t.setAttribute("title",e._cultureInfo[i+"Text"]),t.innerHTML="<img style='height:16px;' src='"+et[i].image+"' alt='"+e._cultureInfo[i+"Text"]+"' />")}function T(){for(var e=null,t=0;t<arguments.length;t++)e=arguments[t],e.style&&(e.style.display="inline")}function P(){for(var e=null,t=0;t<arguments.length;t++)e=arguments[t],e&&e.style&&(e.style.display="none")}function M(e,t,i){this._defaultsKey=e;var a={};i&&R[i]&&R[i][e]&&(a=R[i][e]),this._options=t?t:{},this.setOptions(this._options,a)}function k(e,t,i){this._publicChartReference=i,t=t||{},k.parent.constructor.call(this,"Chart",t,t.theme?t.theme:"theme1");var a=this;if(this._containerId=e,this._objectsInitialized=!1,this.ctx=null,this.overlaidCanvasCtx=null,this._indexLabels=[],this._panTimerId=0,this._lastTouchEventType="",this._lastTouchData=null,this.isAnimating=!1,this.renderCount=0,this.animatedRender=!1,this.disableToolTip=!1,this.panEnabled=!1,this._defaultCursor="default",this.plotArea={canvas:null,ctx:null,x1:0,y1:0,x2:0,y2:0,width:0,height:0},this._dataInRenderedOrder=[],this._container="string"==typeof this._containerId?document.getElementById(this._containerId):this._containerId,!this._container)return void(window.console&&window.console.log('CanvasJS Error: Chart Container with id "'+this._containerId+'" was not found'));this._container.innerHTML="";var n=0,s=0;n=this._options.width?this.width:this._container.clientWidth>0?this._container.clientWidth:this.width,s=this._options.height?this.height:this._container.clientHeight>0?this._container.clientHeight:this.height,this.width=n,this.height=s,this._selectedColorSet="undefined"!=typeof U[this.colorSet]?U[this.colorSet]:U.colorSet1,this._canvasJSContainer=document.createElement("div"),this._canvasJSContainer.setAttribute("class","canvasjs-chart-container"),this._canvasJSContainer.style.position="relative",this._canvasJSContainer.style.textAlign="left",this._canvasJSContainer.style.cursor="auto",O||(this._canvasJSContainer.style.height="0px"),this._container.appendChild(this._canvasJSContainer),this.canvas=v(n,s),this.canvas.style.position="absolute",this.canvas.getContext&&(this._canvasJSContainer.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.textBaseline="top",r(this.ctx),O?this.plotArea.ctx=this.ctx:(this.plotArea.canvas=v(n,s),this.plotArea.canvas.style.position="absolute",this.plotArea.canvas.setAttribute("class","plotAreaCanvas"),this._canvasJSContainer.appendChild(this.plotArea.canvas),this.plotArea.ctx=this.plotArea.canvas.getContext("2d")),this.overlaidCanvas=v(n,s),this.overlaidCanvas.style.position="absolute",this._canvasJSContainer.appendChild(this.overlaidCanvas),this.overlaidCanvasCtx=this.overlaidCanvas.getContext("2d"),this.overlaidCanvasCtx.textBaseline="top",this._eventManager=new z(this),p(window,"resize",function(){a._updateSize()&&a.render()}),this._toolBar=document.createElement("div"),this._toolBar.setAttribute("class","canvasjs-chart-toolbar"),this._toolBar.style.cssText="position: absolute; right: 2px; top: 0px;",this._canvasJSContainer.appendChild(this._toolBar),this.bounds={x1:0,y1:0,x2:this.width,y2:this.height},p(this.overlaidCanvas,"click",function(e){a._mouseEventHandler(e)}),p(this.overlaidCanvas,"mousemove",function(e){a._mouseEventHandler(e)}),p(this.overlaidCanvas,"mouseup",function(e){a._mouseEventHandler(e)}),p(this.overlaidCanvas,"mousedown",function(e){a._mouseEventHandler(e),P(a._dropdownMenu)}),p(this.overlaidCanvas,"mouseout",function(e){a._mouseEventHandler(e)}),p(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerDown":"touchstart",function(e){a._touchEventHandler(e)}),p(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerMove":"touchmove",function(e){a._touchEventHandler(e)}),p(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerUp":"touchend",function(e){a._touchEventHandler(e)}),p(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerCancel":"touchcancel",function(e){a._touchEventHandler(e)}),this._creditLink||(this._creditLink=document.createElement("a"),this._creditLink.setAttribute("class","canvasjs-chart-credit"),this._creditLink.setAttribute("style","outline:none;margin:0px;position:absolute;right:3px;top:"+(this.height-14)+"px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),this._creditLink.setAttribute("tabIndex",-1),this._creditLink.setAttribute("target","_blank")),this._toolTip=new F(this,this._options.toolTip,this.theme),this.layoutManager=new C(this),this.data=null,this.axisX=null,this.axisY=null,this.axisY2=null,this.sessionVariables={axisX:{internalMinimum:null,internalMaximum:null},axisY:{internalMinimum:null,internalMaximum:null},axisY2:{internalMinimum:null,internalMaximum:null}})}function S(e,t){for(var i=[],a=0;a<e.length;a++)if(0!=a){var n,s,o;o=a-1,n=0===o?0:o-1,s=o===e.length-1?o:o+1;var r={x:(e[s].x-e[n].x)/t,y:(e[s].y-e[n].y)/t},l={x:e[o].x+r.x/3,y:e[o].y+r.y/3};i[i.length]=l,o=a,n=0===o?0:o-1,s=o===e.length-1?o:o+1;var h={x:(e[s].x-e[n].x)/t,y:(e[s].y-e[n].y)/t},d={x:e[o].x-h.x/3,y:e[o].y-h.y/3};i[i.length]=d,i[i.length]=e[a]}else i.push(e[0]);return i}function C(e){this._topOccupied=0,this._bottomOccupied=0,this._leftOccupied=0,this._rightOccupied=0,this.chart=e}function A(e,t){A.parent.constructor.call(this,"TextBlock",t),this.ctx=e,this._isDirty=!0,this._wrappedText=null,this._lineHeight=x(this.fontFamily,this.fontSize,this.fontWeight)}function _(e,t){_.parent.constructor.call(this,"Title",t,e.theme),this.chart=e,this.canvas=e.canvas,this.ctx=this.chart.ctx,"undefined"==typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize)),this.width=null,this.height=null,this.bounds={x1:null,y1:null,x2:null,y2:null}}function w(e,t,i){w.parent.constructor.call(this,"Legend",t,i),this.chart=e,this.canvas=e.canvas,this.ctx=this.chart.ctx,this.ghostCtx=this.chart._eventManager.ghostCtx,this.items=[],this.width=0,this.height=0,this.orientation=null,this.horizontalSpacing=10,this.dataSeries=[],this.bounds={x1:null,y1:null,x2:null,y2:null},"undefined"==typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize)),this.lineHeight=x(this.fontFamily,this.fontSize,this.fontWeight)}function I(e,t){I.parent.constructor.call(this,t),this.chart=e,this.canvas=e.canvas,this.ctx=this.chart.ctx}function L(e,t,i,a,n){L.parent.constructor.call(this,"DataSeries",t,i),this.chart=e,this.canvas=e.canvas,this._ctx=e.canvas.ctx,this.index=a,this.noDataPointsInPlotArea=0,this.id=n,this.chart._eventManager.objectMap[n]={id:n,objectType:"dataSeries",dataSeriesIndex:a},this.dataPointIds=[],this.plotUnit=[],this.axisX=null,this.axisY=null,null===this.fillOpacity&&(this.fillOpacity=this.type.match(/area/i)?.7:1),this.axisPlacement=this.getDefaultAxisPlacement(),"undefined"==typeof this._options.indexLabelFontSize&&(this.indexLabelFontSize=this.chart.getAutoFontSize(this.indexLabelFontSize))}function B(e,t,i,a){if(B.parent.constructor.call(this,"Axis",t,e.theme),this.chart=e,this.canvas=e.canvas,this.ctx=e.ctx,this.maxWidth=0,this.maxHeight=0,this.intervalstartTimePercent=0,this.labels=[],this._labels=null,this.dataInfo={min:1/0,max:-1/0,viewPortMin:1/0,viewPortMax:-1/0,minDiff:1/0},"axisX"===i?(this.sessionVariables=this.chart.sessionVariables[i],this._options.interval||(this.intervalType=null)):this.sessionVariables="left"===a||"top"===a?this.chart.sessionVariables.axisY:this.chart.sessionVariables.axisY2,"undefined"==typeof this._options.titleFontSize&&(this.titleFontSize=this.chart.getAutoFontSize(this.titleFontSize)),"undefined"==typeof this._options.labelFontSize&&(this.labelFontSize=this.chart.getAutoFontSize(this.labelFontSize)),this.type=i,"axisX"!==i||t&&"undefined"!=typeof t.gridThickness||(this.gridThickness=0),this._position=a,this.lineCoordinates={x1:null,y1:null,x2:null,y2:null,width:null},this.labelAngle=(this.labelAngle%360+360)%360,this.labelAngle>90&&this.labelAngle<=270?this.labelAngle-=180:this.labelAngle>180&&this.labelAngle<=270?this.labelAngle-=180:this.labelAngle>270&&this.labelAngle<=360&&(this.labelAngle-=360),this._options.stripLines&&this._options.stripLines.length>0){this.stripLines=[];for(var n=0;n<this._options.stripLines.length;n++)this.stripLines.push(new X(this.chart,this._options.stripLines[n],e.theme,++this.chart._eventManager.lastObjectId))}this._titleTextBlock=null,this._absoluteMinimum=null,this._absoluteMaximum=null,this.hasOptionChanged("minimum")&&(this.sessionVariables.internalMinimum=this.minimum),this.hasOptionChanged("maximum")&&(this.sessionVariables.internalMaximum=this.maximum),this.trackChanges("minimum"),this.trackChanges("maximum")}function X(e,t,i,a){X.parent.constructor.call(this,"StripLine",t,i),this._thicknessType="pixel",this.id=a,null!==this.startValue&&null!==this.endValue&&(this.value=((this.startValue.getTime?this.startValue.getTime():this.startValue)+(this.endValue.getTime?this.endValue.getTime():this.endValue))/2,this.thickness=Math.max(this.endValue-this.startValue),this._thicknessType="value")}function F(e,t,i){F.parent.constructor.call(this,"ToolTip",t,i),this.chart=e,this.canvas=e.canvas,this.ctx=this.chart.ctx,this.currentSeriesIndex=-1,this.currentDataPointIndex=-1,this._timerId=0,this._prevX=0/0,this._prevY=0/0,this._initialize()}function z(e){this.chart=e,this.lastObjectId=0;this.objectMap=[],this.rectangularRegionEventSubscriptions=[],this.previousDataPointEventObject=null,this.ghostCanvas=v(this.chart.width,this.chart.height),this.ghostCtx=this.ghostCanvas.getContext("2d");this.mouseoveredObjectMaps=[]}function Y(e,t){var i;t&&V[t]&&(i=V[t]),_.parent.constructor.call(this,"CultureInfo",i,e.theme),this.chart=e,this.canvas=e.canvas,this.ctx=this.chart.ctx}function D(e){this.chart=e,this.ctx=this.chart.plotArea.ctx,this.animations=[],this.animationRequestId=null}var E=!1,O=!!document.createElement("canvas").getContext,W={Chart:{width:500,height:400,zoomEnabled:!1,backgroundColor:"white",theme:"theme1",animationEnabled:!1,animationDuration:1200,colorSet:"colorSet1",culture:"en",creditText:"",interactivityEnabled:!0,exportEnabled:!1,exportFileName:"Chart"},Title:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:20,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,margin:5},Legend:{name:null,verticalAlign:"center",horizontalAlign:"right",fontSize:14,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",cursor:null,itemmouseover:null,itemmouseout:null,itemmousemove:null,itemclick:null},ToolTip:{enabled:!0,borderColor:null,shared:!1,animationEnabled:!0,content:null},Axis:{minimum:null,maximum:null,interval:null,intervalType:null,title:null,titleFontColor:"black",titleFontSize:20,titleFontFamily:"arial",titleFontWeight:"normal",titleFontStyle:"normal",labelAngle:0,labelFontFamily:"arial",labelFontColor:"black",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelAutoFit:!1,labelWrap:!0,labelMaxWidth:null,prefix:"",suffix:"",includeZero:!0,tickLength:5,tickColor:"black",tickThickness:1,lineColor:"black",lineThickness:1,gridColor:"A0A0A0",gridThickness:0,interlacedColor:null,valueFormatString:null,margin:2,stripLines:[]},StripLine:{value:null,startValue:null,endValue:null,color:"orange",thickness:2,label:"",labelBackgroundColor:"#EEEEEE",labelFontFamily:"arial",labelFontColor:"orange",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal"},DataSeries:{name:null,dataPoints:null,label:"",bevelEnabled:!1,cursor:null,indexLabel:"",indexLabelPlacement:"auto",indexLabelOrientation:"horizontal",indexLabelFontColor:"black",indexLabelFontSize:12,indexLabelFontStyle:"normal",indexLabelFontFamily:"Arial",indexLabelFontWeight:"normal",indexLabelBackgroundColor:null,indexLabelLineColor:null,indexLabelLineThickness:1,indexLabelMaxWidth:null,indexLabelWrap:!0,lineThickness:2,color:null,risingColor:"white",fillOpacity:null,startAngle:0,type:"column",xValueType:"number",axisYType:"primary",xValueFormatString:null,yValueFormatString:null,zValueFormatString:null,percentFormatString:null,showInLegend:null,legendMarkerType:null,legendMarkerColor:null,legendText:null,legendMarkerBorderColor:null,legendMarkerBorderThickness:null,markerType:"circle",markerColor:null,markerSize:null,markerBorderColor:null,markerBorderThickness:null,mouseover:null,mouseout:null,mousemove:null,click:null,toolTipContent:null,visible:!0},CultureInfo:{decimalSeparator:".",digitGroupSeparator:",",zoomText:"Zoom",panText:"Pan",resetText:"Reset",menuText:"More Options",saveJPGText:"Save as JPG",savePNGText:"Save as PNG",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},TextBlock:{x:0,y:0,width:null,height:null,maxWidth:null,maxHeight:null,padding:0,angle:0,text:"",horizontalAlign:"center",fontSize:12,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,textBaseline:"top"}},V={en:{}},U={colorSet1:["#369EAD","#C24642","#7F6084","#86B402","#A2D1CF","#C8B631","#6DBCEB","#52514E","#4F81BC","#A064A1","#F79647"],colorSet2:["#4F81BC","#C0504E","#9BBB58","#23BFAA","#8064A1","#4AACC5","#F79647","#33558B"],colorSet3:["#8CA1BC","#36845C","#017E82","#8CB9D0","#708C98","#94838D","#F08891","#0366A7","#008276","#EE7757","#E5BA3A","#F2990B","#03557B","#782970"]},R={theme1:{Chart:{colorSet:"colorSet1"},Title:{fontFamily:O?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",fontSize:33,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:10},Axis:{titleFontSize:26,titleFontColor:"#666666",titleFontFamily:O?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontFamily:O?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:18,labelFontColor:"grey",tickColor:"#BBBBBB",tickThickness:2,gridThickness:2,gridColor:"#BBBBBB",lineThickness:2,lineColor:"#BBBBBB"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:O?"monospace, sans-serif,arial black":"calibri"},DataSeries:{indexLabelFontColor:"grey",indexLabelFontFamily:O?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",indexLabelFontSize:18,indexLabelLineThickness:1}},theme2:{Chart:{colorSet:"colorSet2"},Title:{fontFamily:"impact, charcoal, arial black, sans-serif",fontSize:32,fontColor:"#333333",verticalAlign:"top",margin:10},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:O?"monospace, sans-serif,arial black":"arial",titleFontWeight:"bold",labelFontFamily:O?"monospace, Courier New, Courier":"arial",labelFontSize:16,labelFontColor:"grey",labelFontWeight:"bold",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineThickness:0},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:O?"monospace, sans-serif,arial black":"arial"},DataSeries:{indexLabelFontColor:"grey",indexLabelFontFamily:O?"Courier New, Courier, monospace":"arial",indexLabelFontWeight:"bold",indexLabelFontSize:18,indexLabelLineThickness:1}},theme3:{Chart:{colorSet:"colorSet1"},Title:{fontFamily:O?"Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif":"calibri",fontSize:32,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:10},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:O?"Verdana, Geneva, Calibri, sans-serif":"calibri",labelFontFamily:O?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:18,labelFontColor:"grey",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineThickness:2,lineColor:"grey"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:O?"monospace, sans-serif,arial black":"calibri"},DataSeries:{bevelEnabled:!0,indexLabelFontColor:"grey",indexLabelFontFamily:O?"Candara, Optima, Calibri, Verdana, Geneva, sans-serif":"calibri",indexLabelFontSize:18,indexLabelLineColor:"lightgrey",indexLabelLineThickness:2}}},H={numberDuration:1,yearDuration:314496e5,monthDuration:2592e6,weekDuration:6048e5,dayDuration:864e5,hourDuration:36e5,minuteDuration:6e4,secondDuration:1e3,millisecondDuration:1,dayOfWeekFromInt:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},j={},N=null,K=function(){var e=/D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,r=/[^-+\dA-Z]/g;return function(l,h,d){var c=d?d.days:t,x=d?d.months:a,p=d?d.shortDays:i,m=d?d.shortMonths:n,u="",g=!1;if(l=l&&l.getTime?l:l?new Date(l):new Date,isNaN(l))throw SyntaxError("invalid date");"UTC:"===h.slice(0,4)&&(h=h.slice(4),g=!0);var y=g?"getUTC":"get",v=l[y+"Date"](),b=l[y+"Day"](),f=l[y+"Month"](),T=l[y+"FullYear"](),P=l[y+"Hours"](),M=l[y+"Minutes"](),k=l[y+"Seconds"](),S=l[y+"Milliseconds"](),C=g?0:l.getTimezoneOffset();return u=h.replace(e,function(e){switch(e){case"D":return v;case"DD":return s(v,2);case"DDD":return p[b];case"DDDD":return c[b];case"M":return f+1;case"MM":return s(f+1,2);case"MMM":return m[f];case"MMMM":return x[f];case"Y":return parseInt(String(T).slice(-2));case"YY":return s(String(T).slice(-2),2);case"YYY":return s(String(T).slice(-3),3);case"YYYY":return s(T,4);case"h":return P%12||12;case"hh":return s(P%12||12,2);case"H":return P;case"HH":return s(P,2);case"m":return M;case"mm":return s(M,2);case"s":return k;case"ss":return s(k,2);case"f":return String(S).slice(0,1);case"ff":return s(String(S).slice(0,2),2);case"fff":return s(String(S).slice(0,3),3);case"t":return 12>P?"a":"p";case"tt":return 12>P?"am":"pm";case"T":return 12>P?"A":"P";case"TT":return 12>P?"AM":"PM";case"K":return g?"UTC":(String(l).match(o)||[""]).pop().replace(r,"");case"z":return(C>0?"-":"+")+Math.floor(Math.abs(C)/60);case"zz":return(C>0?"-":"+")+s(Math.floor(Math.abs(C)/60),2);case"zzz":return(C>0?"-":"+")+s(Math.floor(Math.abs(C)/60),2)+s(Math.abs(C)%60,2);default:return e.slice(1,e.length-1)}})}}(),G=function(e,t,i){if(null===e)return"";e=Number(e);var a=0>e?!0:!1;a&&(e*=-1);var n=i?i.decimalSeparator:".",o=i?i.digitGroupSeparator:",",r="";t=String(t);var l=1,h="",d="",c=-1,x=[],p=[],m=0,u=0,g=0,y=!1,v=0;d=t.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|‰|./g);for(var b=null,f=0;d&&f<d.length;f++)if(b=d[f],"."===b&&0>c)c=f;else{if("%"===b)l*=100;else{if("‰"===b){l*=1e3;continue}if(","===b[0]&&"."===b[b.length-1]){l/=Math.pow(1e3,b.length-1),c=f+b.length-1;continue}"E"!==b[0]&&"e"!==b[0]||"0"!==b[b.length-1]||(y=!0)}0>c?(x.push(b),"#"===b||"0"===b?m++:","===b&&g++):(p.push(b),("#"===b||"0"===b)&&u++)}if(y){var T=Math.floor(e);v=(0===T?"":String(T)).length-m,l/=Math.pow(10,v)}e*=l,0>c&&(c=f),r=e.toFixed(u);var P=r.split("."),M=(P[0]+"").split(""),k=(P[1]+"").split("");M&&"0"===M[0]&&M.shift();for(var S=0,C=0,A=0,_=0,w=0;x.length>0;)if(b=x.pop(),"#"===b||"0"===b)if(S++,S===m){var I=M;if(M=[],"0"===b)for(var L=m-C-(I?I.length:0);L>0;)I.unshift("0"),L--;for(;I.length>0;)h=I.pop()+h,w++,w%_===0&&A===g&&I.length>0&&(h=o+h);a&&(h="-"+h)}else M.length>0?(h=M.pop()+h,C++,w++):"0"===b&&(h="0"+h,C++,w++),w%_===0&&A===g&&M.length>0&&(h=o+h);else"E"!==b[0]&&"e"!==b[0]||"0"!==b[b.length-1]||!/[eE][+-]*[0]+/.test(b)?","===b?(A++,_=w,w=0,M.length>0&&(h=o+h)):h=b.length>1&&('"'===b[0]&&'"'===b[b.length-1]||"'"===b[0]&&"'"===b[b.length-1])?b.slice(1,b.length-1)+h:b+h:(b=0>v?b.replace("+","").replace("-",""):b.replace("-",""),h+=b.replace(/[0]+/,function(e){return s(v,e.length)}));for(var B="",X=!1;p.length>0;)b=p.shift(),"#"===b||"0"===b?k.length>0&&0!==Number(k.join(""))?(B+=k.shift(),X=!0):"0"===b&&(B+="0",X=!0):b.length>1&&('"'===b[0]&&'"'===b[b.length-1]||"'"===b[0]&&"'"===b[b.length-1])?B+=b.slice(1,b.length-1):"E"!==b[0]&&"e"!==b[0]||"0"!==b[b.length-1]||!/[eE][+-]*[0]+/.test(b)?B+=b:(b=0>v?b.replace("+","").replace("-",""):b.replace("-",""),B+=b.replace(/[0]+/,function(e){return s(v,e.length)}));return h+=(X?n:"")+B},q=function(e){var t=0,i=0;return e=e||window.event,e.offsetX||0===e.offsetX?(t=e.offsetX,i=e.offsetY):e.layerX||0==e.layerX?(t=e.layerX,i=e.layerY):(t=e.pageX-e.target.offsetLeft,i=e.pageY-e.target.offsetTop),{x:t,y:i}},J=!0,Q=window.devicePixelRatio||1,Z=1,$=J?Q/Z:1,et={reset:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKRSURBVEiJrdY/iF1FFMfxzwnZrGISUSR/JLGIhoh/QiRNBLWxMLIWEkwbgiAoFgoW2mhlY6dgpY2IlRBRxBSKhSAKIklWJRYuMZKAhiyopAiaTY7FvRtmZ+/ed9/zHRjezLw5v/O9d86cuZGZpmURAfdn5o9DfdZNLXpjz+LziPgyIl6MiG0jPTJzZBuyDrP4BVm0P/AKbljTb4ToY/gGewYA7KyCl+1b3DUYANvwbiHw0gCAGRzBOzjTAXEOu0cC4Ch+r5x/HrpdrcZmvIDFSucMtnYCYC++6HmNDw8FKDT34ETrf639/azOr5vwRk/g5fbeuABtgC04XWk9VQLciMP4EH/3AFzErRNC7MXlQmsesSoHsGPE23hmEoBW+61K66HMXFmIMvN8myilXS36R01ub+KfYvw43ZXwYDX+AHP4BAci4pFJomfmr/ihmNofESsBImJGk7mlncrM45n5JPbhz0kAWpsv+juxaX21YIPmVJS2uNzJMS6ZNexC0d+I7fUWXLFyz2kSZlpWPvASlmqAf/FXNXf3FAF2F/1LuFifAlionB6dRuSI2IwHi6lzmXmp6xR8XY0fiIh7psAwh+3FuDkRHQVjl+a8lkXjo0kLUKH7XaV5oO86PmZ1FTzyP4K/XGl9v/zwfbW7BriiuETGCP5ch9bc9f97HF/vcFzCa5gdEPgWq+t/4v0V63oE1uF4h0DiFJ7HnSWMppDdh1dxtsPvJ2wcBNAKbsJXa0Ck5opdaBPsRNu/usba09i1KsaAVzmLt3sghrRjuK1Tf4xkegInxwy8gKf7dKMVH2QRsV5zXR/Cftyu+aKaKbbkQrsdH+PTzLzcqzkOQAVzM+7FHdiqqe2/YT4zF/t8S/sPmawyvC974vcAAAAASUVORK5CYII="},pan:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJVSURBVFiFvZe7a1RBGMV/x2hWI4JpfKCIiSBKOoOCkID/wP4BFqIIFkE02ChIiC8QDKlSiI3YqRBsBVGwUNAUdiIEUgjiAzQIIsuKJsfizsXr5t7d+8jmwLDfzHz3nLOzc7+ZxTZlGyDgZiWOCuJ9wH2gCUyuqQFgF/AGcKJNrYkBYBj40CIet+muGQi/96kM4WS7C/Tm5VUg7whJg8BkEGkCR4BDYfodsADUgP6wErO5iCtswsuJb32hdbXy8qzL5TIdmzJinHdZoZIBZcSFkGlAKs1Z3YCketZcBtouuaQNkrblMiBpBrhme7mAgU4wMCvpcFsDkq4C54DFVRTH9h+i6vlE0r5UA5ImgCuh28jB28iIs7BIVCOeStoZD64P4uPAjUTygKSx2FsK2TIwkugfk9Qkfd/E+yMWHQCeSRqx/R3gOp3LazfaS2C4B5gHDgD7U9x3E3uAH7KNpC3AHHAwTL4FHgM9GQ8vAaPA0dB/Abxqk2/gBLA9MXba9r1k/d4LfA3JtwueBeM58ucS+edXnAW23wP10N3advEi9CXizTnyN4bPS7Zn4sH/dq3t18AY4e1YLYSy3g/csj2VnFshZPuOpOeSKHCodUINuGj7YetE6je1PV9QoNPJ9StNHKodx7nRbiWrGHBGXAi5DUiqtQwtpcWK0Jubt8CltA5MEV1IfwO7+VffPwGfia5m34CT4bXujIIX0Qna1/cGMNqV/wUJE2czxD8CQ4X5Sl7Jz7SILwCDpbjKPBRMHAd+EtX4HWV5Spdc2w8kDQGPbH8py/MXMygM69/FKz4AAAAASUVORK5CYII="},zoom:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAMqSURBVFiFvdfbj91TFMDxz57U6GUEMS1aYzyMtCSSDhWjCZMInpAI3khE/QHtgzdRkXgSCS8SES9epKLi0oRKNETjRahREq2KS1stdRujtDPtbA97n5zdn9+5zJxTK9k5v3POXmt991p7r71+IcaoGwkhTOIebMRqzOBTvIG3Y4zTXRmqSoyx5cAKbMJOHMFJnMZ8/jyFaXyMR7G6nb1aH22cP4BvcBxziG3GKfyTIR9D6BYg1KUghPBCDveFlb/24Av8iuUYw41YVsz5G7uxKcZ4aMEpwGt5NY3V/YbHsQ6rcAHOw/kYxigewr5CZw4fYGxBKcCLOFEYehXrMdRhr5yLETxVScsOLOkKAPfn1TYMPIvLFrShUlS2FDZm8XRHACzFAWl3R2xbqPMCYhmeLCAOYEMngAczbcTvuHYxzguIy/FesR9e6gSwU/OoPYHBHgHgviIKX2Flq7k34KhmcVnbi/PC8JX4MgMcxb118wZwdz5aISscqx7VRcox7MrPQ7i+btIAJrAkf9+bI9EPmZY2IAxiTSuAldLq4Y9+AcSUh78KP0tbAcwU35cXMD1JCIFUoGiehlqAz6TNB1f1C0DK+0h+nsNPrQC2a4bqGmlD9kOGcWt+Po6pVgDvSxfJaSkFd4UQBvoAsBYbCoB3a2flM7slA0R8iyt6rAFDeDPbm8eOTpVwGD9qVq7nLbIaZnmksPU1JtsCZMXNmpdRxFasWITzh6Xj3LCzra1OxcD2QjHiGVzdpfORnMqZio2PcF23ABdJF1Np4BPptlyPi6WzPYBzpJZtHe7A6xW9cnyP8TqA//SEIYRL8Bxul7rihvwgtVn78WcGGZXa9HGd5TDujDHuOePXNiHdKjWgZX/YbsxLx/ktqbjVzTlcjUSnvI5JrdlUVp6WesZZ6R1hRrpq9+EVTGS9jTjYAuKIouGpbcurEkIYxC051KNSamazsc+xK8b4S0VnEi/j0hqTP+M27O258egQwZuzs7pI7Mf4WQXIEDc5s9sux+5+1Py2EmP8UOq6GvWhIScxfdYjUERiAt9Jd84J6a16zf8JEKT3yCm8g1UxRv8CC4pyRhzR1uUAAAAASUVORK5CYII="},menu:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMTUvMTTPsvU0AAAAP0lEQVRIie2SMQoAIBDDUvH/X667g8sJJ9KOhYYOkW0qGaU1MPdC0vGSbV19EACo3YMPAFH5BUBUjsqfAPpVXtNgGDfxEDCtAAAAAElFTkSuQmCC"}};M.prototype.setOptions=function(e,t){if(W[this._defaultsKey]){var i=W[this._defaultsKey];for(var a in i)this[a]=e&&a in e?e[a]:t&&a in t?t[a]:i[a]}else E&&window.console&&console.log("defaults not set")},M.prototype.updateOption=function(e){!W[this._defaultsKey]&&E&&window.console&&console.log("defaults not set");var t=W[this._defaultsKey],i=this._options.theme?this._options.theme:this.chart&&this.chart._options.theme?this.chart._options.theme:"theme1",a={},n=this[e];return i&&R[i]&&R[i][this._defaultsKey]&&(a=R[i][this._defaultsKey]),e in t&&(n=e in this._options?this._options[e]:a&&e in a?a[e]:t[e]),n===this[e]?!1:(this[e]=n,!0)},M.prototype.trackChanges=function(e){this._options._oldOptions||(this._options._oldOptions={}),this._options._oldOptions[e]=this._options[e]},M.prototype.isBeingTracked=function(e){return this._options._oldOptions||(this._options._oldOptions={}),this._options._oldOptions[e]?!0:!1},M.prototype.hasOptionChanged=function(e){this._options._oldOptions||(this._options._oldOptions={});var t=!(this._options._oldOptions[e]===this._options[e]);return t},e(k,M),k.prototype._updateOptions=function(){var e=this;if(this.updateOption("width"),this.updateOption("height"),this.updateOption("theme"),this.updateOption("colorSet")&&(this._selectedColorSet="undefined"!=typeof U[this.colorSet]?U[this.colorSet]:U.colorSet1),this.updateOption("backgroundColor"),this.backgroundColor||(this.backgroundColor="rgba(0,0,0,0)"),this.updateOption("culture"),this._cultureInfo=new Y(this,this._options.culture),this.updateOption("animationEnabled"),this.animationEnabled=this.animationEnabled&&O,this._options.zoomEnabled?(this._zoomButton||(P(this._zoomButton=document.createElement("button")),f(this,this._zoomButton,"pan"),this._toolBar.appendChild(this._zoomButton),p(this._zoomButton,"click",function(){e.zoomEnabled?(e.zoomEnabled=!1,e.panEnabled=!0,f(e,e._zoomButton,"zoom")):(e.zoomEnabled=!0,e.panEnabled=!1,f(e,e._zoomButton,"pan")),e.render()})),this._resetButton||(P(this._resetButton=document.createElement("button")),f(this,this._resetButton,"reset"),this._toolBar.appendChild(this._resetButton),p(this._resetButton,"click",function(){e._toolTip.hide(),e.zoomEnabled||e.panEnabled?(e.zoomEnabled=!0,e.panEnabled=!1,f(e,e._zoomButton,"pan"),e._defaultCursor="default",e.overlaidCanvas.style.cursor=e._defaultCursor):(e.zoomEnabled=!1,e.panEnabled=!1),e.sessionVariables.axisX.internalMinimum=e._options.axisX&&e._options.axisX.minimum?e._options.axisX.minimum:null,e.sessionVariables.axisX.internalMaximum=e._options.axisX&&e._options.axisX.maximum?e._options.axisX.maximum:null,e.resetOverlayedCanvas(),P(e._zoomButton,e._resetButton),e.render()
}),this.overlaidCanvas.style.cursor=e._defaultCursor),this.zoomEnabled||this.panEnabled||(this._zoomButton?(e._zoomButton.getAttribute("state")===e._cultureInfo.zoomText?(this.panEnabled=!0,this.zoomEnabled=!1):(this.zoomEnabled=!0,this.panEnabled=!1),T(e._zoomButton,e._resetButton)):(this.zoomEnabled=!0,this.panEnabled=!1))):(this.zoomEnabled=!1,this.panEnabled=!1),"undefined"!=typeof this._options.exportFileName&&(this.exportFileName=this._options.exportFileName),"undefined"!=typeof this._options.exportEnabled&&(this.exportEnabled=this._options.exportEnabled),this._menuButton?this.exportEnabled?T(this._menuButton):P(this._menuButton):this.exportEnabled&&O&&(this._menuButton=document.createElement("button"),f(this,this._menuButton,"menu"),this._toolBar.appendChild(this._menuButton),p(this._menuButton,"click",function(){if("none"===e._dropdownMenu.style.display){if(e._dropDownCloseTime&&(new Date).getTime()-e._dropDownCloseTime.getTime()<=500)return;e._dropdownMenu.style.display="block",e._menuButton.blur(),e._dropdownMenu.focus()}},!0)),!this._dropdownMenu&&this.exportEnabled&&O){this._dropdownMenu=document.createElement("div"),this._dropdownMenu.setAttribute("tabindex",-1),this._dropdownMenu.style.cssText="position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 1px;top: 25px;min-width: 120px;outline: 0;border: 1px solid silver;font-size: 14px;font-family: Calibri, Verdana, sans-serif;padding: 5px 0px 5px 0px;text-align: left;background-color: #fff;line-height: 20px;box-shadow: 2px 2px 10px #888888;",e._dropdownMenu.style.display="none",this._toolBar.appendChild(this._dropdownMenu),p(this._dropdownMenu,"blur",function(){P(e._dropdownMenu),e._dropDownCloseTime=new Date},!0);var t=document.createElement("div");t.style.cssText="padding: 2px 15px 2px 10px",t.innerHTML=this._cultureInfo.saveJPGText,this._dropdownMenu.appendChild(t),p(t,"mouseover",function(){this.style.backgroundColor="#EEEEEE"},!0),p(t,"mouseout",function(){this.style.backgroundColor="transparent"},!0),p(t,"click",function(){b(e.canvas,"jpg",e.exportFileName),P(e._dropdownMenu)},!0);var t=document.createElement("div");t.style.cssText="padding: 2px 15px 2px 10px",t.innerHTML=this._cultureInfo.savePNGText,this._dropdownMenu.appendChild(t),p(t,"mouseover",function(){this.style.backgroundColor="#EEEEEE"},!0),p(t,"mouseout",function(){this.style.backgroundColor="transparent"},!0),p(t,"click",function(){b(e.canvas,"png",e.exportFileName),P(e._dropdownMenu)},!0)}if("none"!==this._toolBar.style.display&&this._zoomButton&&(this.panEnabled?f(e,e._zoomButton,"zoom"):f(e,e._zoomButton,"pan"),e._resetButton.getAttribute("state")!==e._cultureInfo.resetText&&f(e,e._resetButton,"reset")),"undefined"==typeof W.Chart.creditHref)this.creditHref="",this.creditText="";else var i=this.updateOption("creditText"),a=this.updateOption("creditHref");(0===this.renderCount||i||a)&&(this._creditLink.setAttribute("href",this.creditHref),this._creditLink.innerHTML=this.creditText),this.creditHref&&this.creditText?this._creditLink.parentElement||this._canvasJSContainer.appendChild(this._creditLink):this._creditLink.parentElement&&this._canvasJSContainer.removeChild(this._creditLink),this._options.toolTip&&this._toolTip._options!==this._options.toolTip&&(this._toolTip._options=this._options.toolTip),this._toolTip.updateOption("enabled"),this._toolTip.updateOption("shared"),this._toolTip.updateOption("animationEnabled"),this._toolTip.updateOption("borderColor"),this._toolTip.updateOption("content")},k.prototype._updateSize=function(){var e=0,t=0;return this._options.width?e=this.width:this.width=e=this._container.clientWidth>0?this._container.clientWidth:this.width,this._options.height?t=this.height:this.height=t=this._container.clientHeight>0?this._container.clientHeight:this.height,this.canvas.width!==e*$||this.canvas.height!==t*$?(y(this.canvas,e,t),y(this.overlaidCanvas,e,t),y(this._eventManager.ghostCanvas,e,t),!0):!1},k.prototype._initialize=function(){this._animator?this._animator.cancelAllAnimations():this._animator=new D(this),this.disableToolTip=!1,this.pieDoughnutClickHandler=null,this.animationRequestId&&this.cancelRequestAnimFrame.call(window,this.animationRequestId),this._updateOptions(),this.animatedRender=O&&this.animationEnabled&&0===this.renderCount,this._updateSize(),this.clearCanvas(),this.ctx.beginPath(),this.axisX=null,this.axisY=null,this.axisY2=null,this._indexLabels=[],this._dataInRenderedOrder=[],this._events=[],this._eventManager&&this._eventManager.reset(),this.plotInfo={axisPlacement:null,axisXValueType:null,plotTypes:[]},this.layoutManager.reset(),this.data=[];for(var e=0,t=0;t<this._options.data.length;t++)if(e++,!this._options.data[t].type||k._supportedChartTypes.indexOf(this._options.data[t].type)>=0){var i=new L(this,this._options.data[t],this.theme,e-1,++this._eventManager.lastObjectId);null===i.name&&(i.name="DataSeries "+e),null===i.color?this._options.data.length>1?(i._colorSet=[this._selectedColorSet[i.index%this._selectedColorSet.length]],i.color=this._selectedColorSet[i.index%this._selectedColorSet.length]):i._colorSet="line"===i.type||"stepLine"===i.type||"spline"===i.type||"area"===i.type||"stepArea"===i.type||"splineArea"===i.type||"stackedArea"===i.type||"stackedArea100"===i.type||"rangeArea"===i.type||"rangeSplineArea"===i.type||"candlestick"===i.type||"ohlc"===i.type?[this._selectedColorSet[0]]:this._selectedColorSet:i._colorSet=[i.color],null===i.markerSize&&(("line"===i.type||"stepLine"===i.type||"spline"===i.type)&&i.dataPoints&&i.dataPoints.length<this.width/16||"scatter"===i.type)&&(i.markerSize=8),"bubble"!==i.type&&"scatter"!==i.type||!i.dataPoints||i.dataPoints.sort(h),this.data.push(i);var a,n=i.axisPlacement;if("normal"===n?"xySwapped"===this.plotInfo.axisPlacement?a='You cannot combine "'+i.type+'" with bar chart':"none"===this.plotInfo.axisPlacement?a='You cannot combine "'+i.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="normal"):"xySwapped"===n?"normal"===this.plotInfo.axisPlacement?a='You cannot combine "'+i.type+'" with line, area, column or pie chart':"none"===this.plotInfo.axisPlacement?a='You cannot combine "'+i.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="xySwapped"):"none"==n&&("normal"===this.plotInfo.axisPlacement?a='You cannot combine "'+i.type+'" with line, area, column or bar chart':"xySwapped"===this.plotInfo.axisPlacement?a='You cannot combine "'+i.type+'" with bar chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="none")),a&&window.console)return void window.console.log(a)}this._objectsInitialized=!0},k._supportedChartTypes=["line","stepLine","spline","column","area","stepArea","splineArea","bar","bubble","scatter","stackedColumn","stackedColumn100","stackedBar","stackedBar100","stackedArea","stackedArea100","candlestick","ohlc","rangeColumn","rangeBar","rangeArea","rangeSplineArea","pie","doughnut","funnel"],k._supportedChartTypes.indexOf||(k._supportedChartTypes.indexOf=function(e){var t=this.length>>>0,i=Number(arguments[1])||0;for(i=0>i?Math.ceil(i):Math.floor(i),0>i&&(i+=t);t>i;i++)if(i in this&&this[i]===e)return i;return-1}),k.prototype.render=function(e){e&&(this._options=e),this._initialize();for(var t=0;t<this.data.length;t++)("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)&&(this.data[t].axisYType&&"primary"!==this.data[t].axisYType?"secondary"===this.data[t].axisYType&&(this.axisY2||("normal"===this.plotInfo.axisPlacement?this.axisY2=new B(this,this._options.axisY2,"axisY","right"):"xySwapped"===this.plotInfo.axisPlacement&&(this.axisY2=new B(this,this._options.axisY2,"axisY","top"))),this.data[t].axisY=this.axisY2):(this.axisY||("normal"===this.plotInfo.axisPlacement?this.axisY=new B(this,this._options.axisY,"axisY","left"):"xySwapped"===this.plotInfo.axisPlacement&&(this.axisY=new B(this,this._options.axisY,"axisY","bottom"))),this.data[t].axisY=this.axisY),this.axisX||("normal"===this.plotInfo.axisPlacement?this.axisX=new B(this,this._options.axisX,"axisX","bottom"):"xySwapped"===this.plotInfo.axisPlacement&&(this.axisX=new B(this,this._options.axisX,"axisX","left"))),this.data[t].axisX=this.axisX);this._processData(),this._options.title&&(this._title=new _(this,this._options.title),this._title.render()),this.legend=new w(this,this._options.legend,this.theme);for(var t=0;t<this.data.length;t++)this.data[t].showInLegend&&this.legend.dataSeries.push(this.data[t]);if(this.legend.render(),"normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement){{this.layoutManager.getFreeSpace()}B.setLayoutAndRender(this.axisX,this.axisY,this.axisY2,this.plotInfo.axisPlacement,this.layoutManager.getFreeSpace())}else{if("none"!==this.plotInfo.axisPlacement)return;this.preparePlotArea()}var i=[];if(this.animatedRender){var a=v(this.width,this.height),n=a.getContext("2d");n.drawImage(this.canvas,0,0,this.width,this.height)}for(var t=0;t<this.plotInfo.plotTypes.length;t++)for(var s=this.plotInfo.plotTypes[t],o=0;o<s.plotUnits.length;o++){var r=s.plotUnits[o],l=null;r.targetCanvas=null,this.animatedRender&&(r.targetCanvas=v(this.width,this.height),r.targetCanvasCtx=r.targetCanvas.getContext("2d")),"line"===r.type?l=this.renderLine(r):"stepLine"===r.type?l=this.renderStepLine(r):"spline"===r.type?l=this.renderSpline(r):"column"===r.type?l=this.renderColumn(r):"bar"===r.type?l=this.renderBar(r):"area"===r.type?l=this.renderArea(r):"stepArea"===r.type?l=this.renderStepArea(r):"splineArea"===r.type?l=this.renderSplineArea(r):"stackedColumn"===r.type?l=this.renderStackedColumn(r):"stackedColumn100"===r.type?l=this.renderStackedColumn100(r):"stackedBar"===r.type?l=this.renderStackedBar(r):"stackedBar100"===r.type?l=this.renderStackedBar100(r):"stackedArea"===r.type?l=this.renderStackedArea(r):"stackedArea100"===r.type?l=this.renderStackedArea100(r):"bubble"===r.type?l=l=this.renderBubble(r):"scatter"===r.type?l=this.renderScatter(r):"pie"===r.type?this.renderPie(r):"doughnut"===r.type?this.renderPie(r):"candlestick"===r.type?l=this.renderCandlestick(r):"ohlc"===r.type?l=this.renderCandlestick(r):"rangeColumn"===r.type?l=this.renderRangeColumn(r):"rangeBar"===r.type?l=this.renderRangeBar(r):"rangeArea"===r.type?l=this.renderRangeArea(r):"rangeSplineArea"===r.type&&(l=this.renderRangeSplineArea(r));for(var h=0;h<r.dataSeriesIndexes.length;h++)this._dataInRenderedOrder.push(this.data[r.dataSeriesIndexes[h]]);this.animatedRender&&l&&i.push(l)}if(this.animatedRender&&this._indexLabels.length>0){var d=v(this.width,this.height),c=d.getContext("2d");i.push(this.renderIndexLabels(c))}var x=this;if(i.length>0?(x.disableToolTip=!0,x._animator.animate(200,x.animationDuration,function(e){x.ctx.clearRect(0,0,x.width,x.height),x.ctx.drawImage(a,0,0,Math.floor(x.width*$),Math.floor(x.height*$),0,0,x.width,x.height);for(var t=0;t<i.length;t++)l=i[t],1>e&&"undefined"!=typeof l.startTimePercent?e>=l.startTimePercent&&l.animationCallback(l.easingFunction(e-l.startTimePercent,0,1,1-l.startTimePercent),l):l.animationCallback(l.easingFunction(e,0,1,1),l)},function(){i=[];for(var e=0;e<x.plotInfo.plotTypes.length;e++)for(var t=x.plotInfo.plotTypes[e],n=0;n<t.plotUnits.length;n++){var s=t.plotUnits[n];s.targetCanvas=null}a=null,x.disableToolTip=!1})):x._indexLabels.length>0&&x.renderIndexLabels(),this.attachPlotAreaEventHandlers(),this.zoomEnabled||this.panEnabled||!this._zoomButton||"none"===this._zoomButton.style.display||P(this._zoomButton,this._resetButton),this._toolTip._updateToolTip(),this.renderCount++,E){var x=this;setTimeout(function(){var e=document.getElementById("ghostCanvasCopy");if(e){y(e,x.width,x.height);var t=e.getContext("2d");t.drawImage(x._eventManager.ghostCanvas,0,0)}},2e3)}},k.prototype.attachPlotAreaEventHandlers=function(){this.attachEvent({context:this,chart:this,mousedown:this._plotAreaMouseDown,mouseup:this._plotAreaMouseUp,mousemove:this._plotAreaMouseMove,cursor:this.zoomEnabled?"col-resize":"move",cursor:this.panEnabled?"move":"default",capture:!0,bounds:this.plotArea})},k.prototype.categoriseDataSeries=function(){for(var e="",t=0;t<this.data.length;t++)if(e=this.data[t],e.dataPoints&&0!==e.dataPoints.length&&e.visible&&k._supportedChartTypes.indexOf(e.type)>=0){for(var i=null,a=!1,n=null,s=!1,o=0;o<this.plotInfo.plotTypes.length;o++)if(this.plotInfo.plotTypes[o].type===e.type){a=!0;var i=this.plotInfo.plotTypes[o];break}a||(i={type:e.type,totalDataSeries:0,plotUnits:[]},this.plotInfo.plotTypes.push(i));for(var o=0;o<i.plotUnits.length;o++)if(i.plotUnits[o].axisYType===e.axisYType){s=!0;var n=i.plotUnits[o];break}s||(n={type:e.type,previousDataSeriesCount:0,index:i.plotUnits.length,plotType:i,axisYType:e.axisYType,axisY:"primary"===e.axisYType?this.axisY:this.axisY2,axisX:this.axisX,dataSeriesIndexes:[],yTotals:[]},i.plotUnits.push(n)),i.totalDataSeries++,n.dataSeriesIndexes.push(t),e.plotUnit=n}for(var t=0;t<this.plotInfo.plotTypes.length;t++)for(var i=this.plotInfo.plotTypes[t],r=0,o=0;o<i.plotUnits.length;o++)i.plotUnits[o].previousDataSeriesCount=r,r+=i.plotUnits[o].dataSeriesIndexes.length},k.prototype.assignIdToDataPoints=function(){for(var e=0;e<this.data.length;e++){var t=this.data[e];if(t.dataPoints)for(var i=t.dataPoints.length,a=0;i>a;a++)t.dataPointIds[a]=++this._eventManager.lastObjectId}},k.prototype._processData=function(){this.assignIdToDataPoints(),this.categoriseDataSeries();for(var e=0;e<this.plotInfo.plotTypes.length;e++)for(var t=this.plotInfo.plotTypes[e],i=0;i<t.plotUnits.length;i++){var a=t.plotUnits[i];"line"===a.type||"stepLine"===a.type||"spline"===a.type||"column"===a.type||"area"===a.type||"stepArea"===a.type||"splineArea"===a.type||"bar"===a.type||"bubble"===a.type||"scatter"===a.type?this._processMultiseriesPlotUnit(a):"stackedColumn"===a.type||"stackedBar"===a.type||"stackedArea"===a.type?this._processStackedPlotUnit(a):"stackedColumn100"===a.type||"stackedBar100"===a.type||"stackedArea100"===a.type?this._processStacked100PlotUnit(a):("candlestick"===a.type||"ohlc"===a.type||"rangeColumn"===a.type||"rangeBar"===a.type||"rangeArea"===a.type||"rangeSplineArea"===a.type)&&this._processMultiYPlotUnit(a)}},k.prototype._processMultiseriesPlotUnit=function(e){if(e.dataSeriesIndexes&&!(e.dataSeriesIndexes.length<1))for(var t,i,a=e.axisY.dataInfo,n=e.axisX.dataInfo,s=!1,o=0;o<e.dataSeriesIndexes.length;o++){var r=this.data[e.dataSeriesIndexes[o]],l=0,h=!1,d=!1;if("normal"===r.axisPlacement||"xySwapped"===r.axisPlacement)var c=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-1/0,x=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:1/0;for((r.dataPoints[l].x&&r.dataPoints[l].x.getTime||"dateTime"===r.xValueType)&&(s=!0),l=0;l<r.dataPoints.length;l++){if("undefined"==typeof r.dataPoints[l].x&&(r.dataPoints[l].x=l),r.dataPoints[l].x.getTime?(s=!0,t=r.dataPoints[l].x.getTime()):t=r.dataPoints[l].x,i=r.dataPoints[l].y,t<n.min&&(n.min=t),t>n.max&&(n.max=t),i<a.min&&(a.min=i),i>a.max&&(a.max=i),l>0){var p=t-r.dataPoints[l-1].x;0>p&&(p=-1*p),n.minDiff>p&&0!==p&&(n.minDiff=p)}if(!(c>t)||h)if(!h&&(h=!0,l>0))l-=2;else{if(t>x&&!d)d=!0;else if(t>x&&d)continue;r.dataPoints[l].label&&(e.axisX.labels[t]=r.dataPoints[l].label),t<n.viewPortMin&&(n.viewPortMin=t),t>n.viewPortMax&&(n.viewPortMax=t),null!==i&&(i<a.viewPortMin&&(a.viewPortMin=i),i>a.viewPortMax&&(a.viewPortMax=i))}}this.plotInfo.axisXValueType=r.xValueType=s?"dateTime":"number"}},k.prototype._processStackedPlotUnit=function(e){if(e.dataSeriesIndexes&&!(e.dataSeriesIndexes.length<1)){for(var t,i,a=e.axisY.dataInfo,n=e.axisX.dataInfo,s=!1,o=[],r=[],l=0;l<e.dataSeriesIndexes.length;l++){var h=this.data[e.dataSeriesIndexes[l]],d=0,c=!1,x=!1;if("normal"===h.axisPlacement||"xySwapped"===h.axisPlacement)var p=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-1/0,m=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:1/0;for((h.dataPoints[d].x&&h.dataPoints[d].x.getTime||"dateTime"===h.xValueType)&&(s=!0),d=0;d<h.dataPoints.length;d++){if("undefined"==typeof h.dataPoints[d].x&&(h.dataPoints[d].x=d),h.dataPoints[d].x.getTime?(s=!0,t=h.dataPoints[d].x.getTime()):t=h.dataPoints[d].x,i=h.dataPoints[d].y,t<n.min&&(n.min=t),t>n.max&&(n.max=t),d>0){var u=t-h.dataPoints[d-1].x;0>u&&(u=-1*u),n.minDiff>u&&0!==u&&(n.minDiff=u)}if(!(p>t)||c)if(!c&&(c=!0,d>0))d-=2;else{if(t>m&&!x)x=!0;else if(t>m&&x)continue;h.dataPoints[d].label&&(e.axisX.labels[t]=h.dataPoints[d].label),t<n.viewPortMin&&(n.viewPortMin=t),t>n.viewPortMax&&(n.viewPortMax=t),null!==i&&(e.yTotals[t]=(e.yTotals[t]?e.yTotals[t]:0)+Math.abs(i),i>=0?o[t]?o[t]+=i:o[t]=i:r[t]?r[t]+=i:r[t]=i)}}this.plotInfo.axisXValueType=h.xValueType=s?"dateTime":"number"}for(d in o)if(!isNaN(d)){var g=o[d];g<a.min&&(a.min=g),g>a.max&&(a.max=g),d<n.viewPortMin||d>n.viewPortMax||(g<a.viewPortMin&&(a.viewPortMin=g),g>a.viewPortMax&&(a.viewPortMax=g))}for(d in r)if(!isNaN(d)){var g=r[d];g<a.min&&(a.min=g),g>a.max&&(a.max=g),d<n.viewPortMin||d>n.viewPortMax||(g<a.viewPortMin&&(a.viewPortMin=g),g>a.viewPortMax&&(a.viewPortMax=g))}}},k.prototype._processStacked100PlotUnit=function(e){if(e.dataSeriesIndexes&&!(e.dataSeriesIndexes.length<1)){for(var t,i,a=e.axisY.dataInfo,n=e.axisX.dataInfo,s=!1,o=!1,r=!1,l=[],h=0;h<e.dataSeriesIndexes.length;h++){var d=this.data[e.dataSeriesIndexes[h]],c=0,x=!1,p=!1;if("normal"===d.axisPlacement||"xySwapped"===d.axisPlacement)var m=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-1/0,u=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:1/0;for((d.dataPoints[c].x&&d.dataPoints[c].x.getTime||"dateTime"===d.xValueType)&&(s=!0),c=0;c<d.dataPoints.length;c++){if("undefined"==typeof d.dataPoints[c].x&&(d.dataPoints[c].x=c),d.dataPoints[c].x.getTime?(s=!0,t=d.dataPoints[c].x.getTime()):t=d.dataPoints[c].x,i=d.dataPoints[c].y,t<n.min&&(n.min=t),t>n.max&&(n.max=t),c>0){var g=t-d.dataPoints[c-1].x;0>g&&(g=-1*g),n.minDiff>g&&0!==g&&(n.minDiff=g)}if(!(m>t)||x)if(!x&&(x=!0,c>0))c-=2;else{if(t>u&&!p)p=!0;else if(t>u&&p)continue;d.dataPoints[c].label&&(e.axisX.labels[t]=d.dataPoints[c].label),t<n.viewPortMin&&(n.viewPortMin=t),t>n.viewPortMax&&(n.viewPortMax=t),null!==i&&(e.yTotals[t]=(e.yTotals[t]?e.yTotals[t]:0)+Math.abs(i),i>=0?o=!0:r=!0,l[t]?l[t]+=Math.abs(i):l[t]=Math.abs(i))}}this.plotInfo.axisXValueType=d.xValueType=s?"dateTime":"number"}o&&!r?(a.max=99,a.min=1):o&&r?(a.max=99,a.min=-99):!o&&r&&(a.max=-1,a.min=-99),a.viewPortMin=a.min,a.viewPortMax=a.max,e.dataPointYSums=l}},k.prototype._processMultiYPlotUnit=function(e){if(e.dataSeriesIndexes&&!(e.dataSeriesIndexes.length<1))for(var t,i,a,n,s=e.axisY.dataInfo,o=e.axisX.dataInfo,r=!1,l=0;l<e.dataSeriesIndexes.length;l++){var h=this.data[e.dataSeriesIndexes[l]],d=0,c=!1,x=!1;if("normal"===h.axisPlacement||"xySwapped"===h.axisPlacement)var p=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-1/0,m=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:1/0;for((h.dataPoints[d].x&&h.dataPoints[d].x.getTime||"dateTime"===h.xValueType)&&(r=!0),d=0;d<h.dataPoints.length;d++){if("undefined"==typeof h.dataPoints[d].x&&(h.dataPoints[d].x=d),h.dataPoints[d].x.getTime?(r=!0,t=h.dataPoints[d].x.getTime()):t=h.dataPoints[d].x,i=h.dataPoints[d].y,i&&i.length&&(a=Math.min.apply(null,i),n=Math.max.apply(null,i)),t<o.min&&(o.min=t),t>o.max&&(o.max=t),a<s.min&&(s.min=a),n>s.max&&(s.max=n),d>0){var u=t-h.dataPoints[d-1].x;0>u&&(u=-1*u),o.minDiff>u&&0!==u&&(o.minDiff=u)}if(!(p>t)||c)if(!c&&(c=!0,d>0))d-=2;else{if(t>m&&!x)x=!0;else if(t>m&&x)continue;h.dataPoints[d].label&&(e.axisX.labels[t]=h.dataPoints[d].label),t<o.viewPortMin&&(o.viewPortMin=t),t>o.viewPortMax&&(o.viewPortMax=t),null!==i&&(a<s.viewPortMin&&(s.viewPortMin=a),n>s.viewPortMax&&(s.viewPortMax=n))}}this.plotInfo.axisXValueType=h.xValueType=r?"dateTime":"number"}},k.prototype.getDataPointAtXY=function(e,t,i){i=i||!1;for(var a=[],n=this._dataInRenderedOrder.length-1;n>=0;n--){var s=this._dataInRenderedOrder[n],o=null;o=s.getDataPointAtXY(e,t,i),o&&a.push(o)}for(var r=null,l=!1,h=0;h<a.length;h++)if("line"===a[h].dataSeries.type||"stepLine"===a[h].dataSeries.type||"area"===a[h].dataSeries.type||"stepArea"===a[h].dataSeries.type){var d=g("markerSize",a[h].dataPoint,a[h].dataSeries)||8;if(a[h].distance<=d/2){l=!0;break}}for(h=0;h<a.length;h++)l&&"line"!==a[h].dataSeries.type&&"stepLine"!==a[h].dataSeries.type&&"area"!==a[h].dataSeries.type&&"stepArea"!==a[h].dataSeries.type||(r?a[h].distance<=r.distance&&(r=a[h]):r=a[h]);return r},k.prototype.getObjectAtXY=function(e,t,i){i=i||!1;var a=null,n=this.getDataPointAtXY(e,t,i);if(n)a=n.dataSeries.dataPointIds[n.dataPointIndex];else if(O)a=m(e,t,this._eventManager.ghostCtx);else for(var s=0;s<this.legend.items.length;s++){var o=this.legend.items[s];e>=o.x1&&e<=o.x2&&t>=o.y1&&t<=o.y2&&(a=o.id)}return a},k.prototype.getAutoFontSize=function(e,t,i){t=t||this.width,i=i||this.height;var a=e/400;return Math.round(Math.min(this.width,this.height)*a)},k.prototype.resetOverlayedCanvas=function(){this.overlaidCanvasCtx.clearRect(0,0,this.width,this.height)},k.prototype.clearCanvas=function(){this.ctx.clearRect(0,0,this.width,this.height),this.backgroundColor&&(this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height))},k.prototype.attachEvent=function(e){this._events.push(e)},k.prototype._touchEventHandler=function(e){if(e.changedTouches&&this.interactivityEnabled){var t=[],i=e.changedTouches,a=i?i[0]:e,n=null;switch(e.type){case"touchstart":case"MSPointerDown":t=["mousemove","mousedown"],this._lastTouchData=q(a),this._lastTouchData.time=new Date;break;case"touchmove":case"MSPointerMove":t=["mousemove"];break;case"touchend":case"MSPointerUp":t="touchstart"===this._lastTouchEventType||"MSPointerDown"===this._lastTouchEventType?["mouseup","click"]:["mouseup"];break;default:return}if(!(i&&i.length>1)){n=q(a),n.time=new Date;try{var s=n.y-this._lastTouchData.y,o=(n.x-this._lastTouchData.x,n.time-this._lastTouchData.time);if(Math.abs(s)>15&&(this._lastTouchData.scroll||200>o)){this._lastTouchData.scroll=!0;var r=window.parent||window;r&&r.scrollBy&&r.scrollBy(0,-s)}}catch(l){}if(this._lastTouchEventType=e.type,this._lastTouchData.scroll&&this.zoomEnabled)return this.isDrag&&this.resetOverlayedCanvas(),void(this.isDrag=!1);for(var h=0;h<t.length;h++){var d=t[h],c=document.createEvent("MouseEvent");c.initMouseEvent(d,!0,!0,window,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(c),e.preventManipulation&&e.preventManipulation(),e.preventDefault&&e.preventDefault()}}}},k.prototype._mouseEventHandler=function(e){if(this.interactivityEnabled){if(this._ignoreNextEvent)return void(this._ignoreNextEvent=!1);e.preventManipulation&&e.preventManipulation(),e.preventDefault&&e.preventDefault(),"undefined"==typeof e.target&&e.srcElement&&(e.target=e.srcElement);var t,i,a=q(e),n=e.type;if(!e){window.event}if(e.which?i=3==e.which:e.button&&(i=2==e.button),E&&window.console&&(window.console.log(n+" --> x: "+a.x+"; y:"+a.y),i&&window.console.log(e.which),"mouseup"===n&&window.console.log("mouseup")),!i){if(k.capturedEventParam)t=k.capturedEventParam,"mouseup"===n&&(k.capturedEventParam=null,t.chart.overlaidCanvas.releaseCapture?t.chart.overlaidCanvas.releaseCapture():document.body.removeEventListener("mouseup",t.chart._mouseEventHandler,!1)),t.hasOwnProperty(n)&&t[n].call(t.context,a.x,a.y);else if(this._events){for(var s=0;s<this._events.length;s++)if(this._events[s].hasOwnProperty(n)){t=this._events[s];var o=t.bounds;if(a.x>=o.x1&&a.x<=o.x2&&a.y>=o.y1&&a.y<=o.y2){t[n].call(t.context,a.x,a.y),"mousedown"===n&&t.capture===!0?(k.capturedEventParam=t,this.overlaidCanvas.setCapture?this.overlaidCanvas.setCapture():document.body.addEventListener("mouseup",this._mouseEventHandler,!1)):"mouseup"===n&&(t.chart.overlaidCanvas.releaseCapture?t.chart.overlaidCanvas.releaseCapture():document.body.removeEventListener("mouseup",this._mouseEventHandler,!1));break}t=null}e.target.style.cursor=t&&t.cursor?t.cursor:this._defaultCursor}if(this._toolTip&&this._toolTip.enabled){var r=this.plotArea;(a.x<r.x1||a.x>r.x2||a.y<r.y1||a.y>r.y2)&&this._toolTip.hide()}this.isDrag&&this.zoomEnabled||!this._eventManager||this._eventManager.mouseEventHandler(e)}}},k.prototype._plotAreaMouseDown=function(e,t){this.isDrag=!0,this.dragStartPoint="none"!==this.plotInfo.axisPlacement?{x:e,y:t,xMinimum:this.axisX.minimum,xMaximum:this.axisX.maximum}:{x:e,y:t}},k.prototype._plotAreaMouseUp=function(e,t){if(("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)&&this.isDrag){var i=0,a=0,n=this.axisX.lineCoordinates;if("xySwapped"===this.plotInfo.axisPlacement?(i=t-this.dragStartPoint.y,a=Math.abs(this.axisX.maximum-this.axisX.minimum)/n.height*i):(i=this.dragStartPoint.x-e,a=Math.abs(this.axisX.maximum-this.axisX.minimum)/n.width*i),Math.abs(i)>2){if(this.panEnabled){var s=!1,o=0;this.axisX.sessionVariables.internalMinimum<this.axisX._absoluteMinimum?(o=this.axisX._absoluteMinimum-this.axisX.sessionVariables.internalMinimum,this.axisX.sessionVariables.internalMinimum+=o,this.axisX.sessionVariables.internalMaximum+=o,s=!0):this.axisX.sessionVariables.internalMaximum>this.axisX._absoluteMaximum&&(o=this.axisX.sessionVariables.internalMaximum-this.axisX._absoluteMaximum,this.axisX.sessionVariables.internalMaximum-=o,this.axisX.sessionVariables.internalMinimum-=o,s=!0),s&&this.render()}else if(this.zoomEnabled){if(this.resetOverlayedCanvas(),!this.dragStartPoint)return;if("xySwapped"===this.plotInfo.axisPlacement){var r={y1:Math.min(this.dragStartPoint.y,t),y2:Math.max(this.dragStartPoint.y,t)};if(Math.abs(r.y1-r.y2)>1){var n=this.axisX.lineCoordinates,l=this.axisX.maximum-(this.axisX.maximum-this.axisX.minimum)/n.height*(r.y2-n.y1),h=this.axisX.maximum-(this.axisX.maximum-this.axisX.minimum)/n.height*(r.y1-n.y1);l=Math.max(l,this.axisX.dataInfo.min),h=Math.min(h,this.axisX.dataInfo.max),Math.abs(h-l)>2*Math.abs(this.axisX.dataInfo.minDiff)&&(this.axisX.sessionVariables.internalMinimum=l,this.axisX.sessionVariables.internalMaximum=h,this.render())}}else if("normal"===this.plotInfo.axisPlacement){var r={x1:Math.min(this.dragStartPoint.x,e),x2:Math.max(this.dragStartPoint.x,e)};if(Math.abs(r.x1-r.x2)>1){var n=this.axisX.lineCoordinates,l=(this.axisX.maximum-this.axisX.minimum)/n.width*(r.x1-n.x1)+this.axisX.minimum,h=(this.axisX.maximum-this.axisX.minimum)/n.width*(r.x2-n.x1)+this.axisX.minimum;l=Math.max(l,this.axisX.dataInfo.min),h=Math.min(h,this.axisX.dataInfo.max),Math.abs(h-l)>2*Math.abs(this.axisX.dataInfo.minDiff)&&(this.axisX.sessionVariables.internalMinimum=l,this.axisX.sessionVariables.internalMaximum=h,this.render())}}}this._ignoreNextEvent=!0,this.zoomEnabled&&"none"===this._zoomButton.style.display&&(T(this._zoomButton,this._resetButton),f(this,this._zoomButton,"pan"),f(this,this._resetButton,"reset"))}}this.isDrag=!1},k.prototype._plotAreaMouseMove=function(e,t){if(this.isDrag&&"none"!==this.plotInfo.axisPlacement){var i=0,a=0,s=this.axisX.lineCoordinates;if("xySwapped"===this.plotInfo.axisPlacement?(i=t-this.dragStartPoint.y,a=Math.abs(this.axisX.maximum-this.axisX.minimum)/s.height*i):(i=this.dragStartPoint.x-e,a=Math.abs(this.axisX.maximum-this.axisX.minimum)/s.width*i),Math.abs(i)>2&&Math.abs(i)<8&&(this.panEnabled||this.zoomEnabled)?this._toolTip.hide():!this._toolTip.enabled||this.panEnabled||this.zoomEnabled||this._toolTip.mouseMoveHandler(e,t),Math.abs(i)>2&&(this.panEnabled||this.zoomEnabled))if(this.panEnabled){this.axisX.sessionVariables.internalMinimum=this.dragStartPoint.xMinimum+a,this.axisX.sessionVariables.internalMaximum=this.dragStartPoint.xMaximum+a;var o=0;this.axisX.sessionVariables.internalMinimum<this.axisX._absoluteMinimum-n(this.axisX.interval,this.axisX.intervalType)?(o=this.axisX._absoluteMinimum-n(this.axisX.interval,this.axisX.intervalType)-this.axisX.sessionVariables.internalMinimum,this.axisX.sessionVariables.internalMinimum+=o,this.axisX.sessionVariables.internalMaximum+=o):this.axisX.sessionVariables.internalMaximum>this.axisX._absoluteMaximum+n(this.axisX.interval,this.axisX.intervalType)&&(o=this.axisX.sessionVariables.internalMaximum-(this.axisX._absoluteMaximum+n(this.axisX.interval,this.axisX.intervalType)),this.axisX.sessionVariables.internalMaximum-=o,this.axisX.sessionVariables.internalMinimum-=o);var r=this;clearTimeout(this._panTimerId),this._panTimerId=setTimeout(function(){r.render()},0)}else if(this.zoomEnabled){var l=this.plotArea;this.resetOverlayedCanvas();var h=this.overlaidCanvasCtx.globalAlpha;this.overlaidCanvasCtx.globalAlpha=.7,this.overlaidCanvasCtx.fillStyle="#A0ABB8","xySwapped"===this.plotInfo.axisPlacement?this.overlaidCanvasCtx.fillRect(l.x1,this.dragStartPoint.y,l.x2-l.x1,t-this.dragStartPoint.y):"normal"===this.plotInfo.axisPlacement&&this.overlaidCanvasCtx.fillRect(this.dragStartPoint.x,l.y1,e-this.dragStartPoint.x,l.y2-l.y1),this.overlaidCanvasCtx.globalAlpha=h}}else this._toolTip.enabled&&this._toolTip.mouseMoveHandler(e,t)},k.prototype.preparePlotArea=function(){var e=this.plotArea,t=this.axisY?this.axisY:this.axisY2;if(!O&&(e.x1>0||e.y1>0)&&e.ctx.translate(e.x1,e.y1),this.axisX&&t)e.x1=this.axisX.lineCoordinates.x1<this.axisX.lineCoordinates.x2?this.axisX.lineCoordinates.x1:t.lineCoordinates.x1,e.y1=this.axisX.lineCoordinates.y1<t.lineCoordinates.y1?this.axisX.lineCoordinates.y1:t.lineCoordinates.y1,e.x2=this.axisX.lineCoordinates.x2>t.lineCoordinates.x2?this.axisX.lineCoordinates.x2:t.lineCoordinates.x2,e.y2=this.axisX.lineCoordinates.y2>this.axisX.lineCoordinates.y1?this.axisX.lineCoordinates.y2:t.lineCoordinates.y2,e.width=e.x2-e.x1,e.height=e.y2-e.y1;else{var i=this.layoutManager.getFreeSpace();e.x1=i.x1,e.x2=i.x2,e.y1=i.y1,e.y2=i.y2,e.width=i.width,e.height=i.height}O||(e.canvas.width=e.width,e.canvas.height=e.height,e.canvas.style.left=e.x1+"px",e.canvas.style.top=e.y1+"px",(e.x1>0||e.y1>0)&&e.ctx.translate(-e.x1,-e.y1))},k.prototype.getPixelCoordinatesOnPlotArea=function(e,t){return{x:this.axisX.getPixelCoordinatesOnAxis(e).x,y:this.axisY.getPixelCoordinatesOnAxis(t).y}},k.prototype.renderIndexLabels=function(e){var t=e||this.plotArea.ctx;t.textBaseline="middle";for(var i=this.plotArea,a=0;a<this._indexLabels.length;a++){var n,s,o,r=this._indexLabels[a];t.fillStyle=g("indexLabelFontColor",r.dataPoint,r.dataSeries),t.font=u("indexLabel",r.dataPoint,r.dataSeries);var l=this.replaceKeywordsWithValue(g("indexLabel",r.dataPoint,r.dataSeries),r.dataPoint,r.dataSeries,null,r.indexKeyword),h={width:t.measureText(l).width,height:g("indexLabelFontSize",r.dataPoint,r.dataSeries)},d=g("indexLabelPlacement",r.dataPoint,r.dataSeries),c=g("indexLabelOrientation",r.dataPoint,r.dataSeries),o=0,x=0,p=0,m=0,y=0,v=0,b=0,f=r.direction,T=r.dataSeries.axisX,P=r.dataSeries.axisY;if(!(r.dataPoint.x<T.minimum||r.dataPoint.x>T.maximum||r.dataPoint.y<P.minimum||r.dataPoint.y>P.maximum)){if("column"===r.chartType||"stackedColumn"===r.chartType||"stackedColumn100"===r.chartType||"bar"===r.chartType||"stackedBar"===r.chartType||"stackedBar100"===r.chartType||"candlestick"===r.chartType||"ohlc"===r.chartType||"rangeColumn"===r.chartType||"rangeBar"===r.chartType){b=5,v=5;
{Math.abs(r.bounds.x1,r.bounds.x2),Math.abs(r.bounds.y1,r.bounds.y2)}"normal"===this.plotInfo.axisPlacement?("inside"!==d?(x=i.y1,p=i.y2):(x=r.bounds.y1,p=r.bounds.y2),"horizontal"===c?(n=r.point.x-h.width/2,s=f>=0?r.point.y-h.height/2-b<x+h.height/2?"auto"===d?Math.min(Math.max(r.point.y,x)+h.height/2+1,p-h.height/2-b):Math.min(x+h.height/2+1,p-h.height/2-b):Math.min(r.point.y-h.height/2-b+1,p-h.height/2-b):r.point.y+h.height/2+b>p-h.height/2-1?"auto"===d?Math.max(Math.min(r.point.y,p)-h.height/2-1,x+h.height/2+b):Math.max(p-h.height/2-1,x+h.height/2+b):Math.max(r.point.y+h.height/2+b,x+h.height/2+b)):"vertical"===c&&(n=r.point.x,s=f>=0?r.point.y-b<x+h.width+1?"auto"===d?Math.min(Math.max(r.point.y,x)+h.width+1,p):Math.min(x+h.width+1,p):Math.min(r.point.y-b,p-1):r.point.y+h.width+b>p-1?"auto"===d?Math.max(Math.min(r.point.y,p)-b,x):Math.max(p-1,x):Math.max(r.point.y+h.width+b,x),o=-90)):"xySwapped"===this.plotInfo.axisPlacement&&("inside"!==d?(m=i.x1,y=i.x2):(m=r.bounds.x1,y=r.bounds.x2),"horizontal"===c?(s=r.point.y,n=f>=0?r.point.x+v>y-h.width?"auto"===d?Math.max(Math.min(r.point.x,y)-h.width,m):Math.max(y-h.width,m):Math.max(r.point.x+v,m):r.point.x-h.width-v<m?"auto"===d?Math.min(Math.max(r.point.x,m)+1,y):Math.min(m+1,y):Math.min(r.point.x-h.width-v,y)):"vertical"===c&&(s=r.point.y+h.width/2,n=f>=0?r.point.x+h.height/2+v>y-h.height/2?"auto"===d?Math.max(Math.min(r.point.x,y)-h.height/2,m):Math.max(y-h.height/2,m):Math.max(r.point.x+h.height/2+v,m):r.point.x-h.height/2-v<m+h.height/2?"auto"===d?Math.min(Math.max(r.point.x,m)+h.height/2,y+h.height/2):Math.min(m+h.height/2,y+h.height/2):Math.min(r.point.x-h.height/2-v,y+h.height/2),o=-90))}else b=5,"horizontal"===c?(n=r.point.x-h.width/2,"bubble"===r.chartType&&(b=-h.height/2),s=f>0?Math.max(r.point.y-h.height/2-b,i.y1+h.height/2):Math.min(r.point.y+h.height/2+b,i.y2-h.height/2)):"vertical"===c&&(n=r.point.x,"bubble"===r.chartType&&(b=-h.width/2),s=f>0?Math.max(r.point.y-b,i.y1+h.width):Math.min(r.point.y+h.width+b,i.y2),o=-90);t.save(),t.translate(n,s),t.rotate(Math.PI/180*o),t.fillText(l,0,0),t.restore()}}var M={source:t,dest:this.plotArea.ctx,animationCallback:at.fadeInAnimation,easingFunction:at.easing.easeInQuad,animationBase:0,startTimePercent:.7};return M},k.prototype.renderLine=function(e){var t=e.targetCanvasCtx||this.plotArea.ctx,i=e.dataSeriesIndexes.length;if(!(0>=i)){var a=this._eventManager.ghostCtx;t.save();var n=this.plotArea;t.beginPath(),t.rect(n.x1,n.y1,n.width,n.height),t.clip();for(var s=[],o=0;o<e.dataSeriesIndexes.length;o++){var r=e.dataSeriesIndexes[o],l=this.data[r];t.lineWidth=l.lineThickness;var h=l.dataPoints,c=l.id;this._eventManager.objectMap[c]={objectType:"dataSeries",dataSeriesIndex:r};var x=d(c);a.strokeStyle=x,a.lineWidth=l.lineThickness>0?Math.max(l.lineThickness,4):0;var p=l._colorSet,m=p[0];t.strokeStyle=m;var u,g,y,v=!0,b=0;if(t.beginPath(),h.length>0){var f=!1;for(b=0;b<h.length;b++)if(y=h[b].x.getTime?h[b].x.getTime():h[b].x,!(y<e.axisX.dataInfo.viewPortMin||y>e.axisX.dataInfo.viewPortMax))if("number"==typeof h[b].y){u=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(y-e.axisX.conversionParameters.minimum)+.5<<0,g=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(h[b].y-e.axisY.conversionParameters.minimum)+.5<<0;var T=l.dataPointIds[b];if(this._eventManager.objectMap[T]={id:T,objectType:"dataPoint",dataSeriesIndex:r,dataPointIndex:b,x1:u,y1:g},v||f?(t.beginPath(),t.moveTo(u,g),O&&(a.beginPath(),a.moveTo(u,g)),v=!1,f=!1):(t.lineTo(u,g),O&&a.lineTo(u,g),b%500==0&&(t.stroke(),t.beginPath(),t.moveTo(u,g),O&&(a.stroke(),a.beginPath(),a.moveTo(u,g)))),h[b].markerSize>0||l.markerSize>0){var P=l.getMarkerProperties(b,u,g,t);s.push(P);var M=d(T);O&&s.push({x:u,y:g,ctx:a,type:P.type,size:P.size,color:M,borderColor:M,borderThickness:P.borderThickness})}(h[b].indexLabel||l.indexLabel)&&this._indexLabels.push({chartType:"line",dataPoint:h[b],dataSeries:l,point:{x:u,y:g},direction:h[b].y>=0?1:-1,color:m})}else b>0&&(t.stroke(),O&&a.stroke()),f=!0;t.stroke(),O&&a.stroke()}}nt.drawMarkers(s),t.restore(),t.beginPath(),O&&a.beginPath();var k={source:t,dest:this.plotArea.ctx,animationCallback:at.xClipAnimation,easingFunction:at.easing.linear,animationBase:0};return k}},k.prototype.renderStepLine=function(e){var t=e.targetCanvasCtx||this.plotArea.ctx,i=e.dataSeriesIndexes.length;if(!(0>=i)){var a=this._eventManager.ghostCtx;t.save();var n=this.plotArea;t.beginPath(),t.rect(n.x1,n.y1,n.width,n.height),t.clip();for(var s=[],o=0;o<e.dataSeriesIndexes.length;o++){var r=e.dataSeriesIndexes[o],l=this.data[r];t.lineWidth=l.lineThickness;var h=l.dataPoints,c=l.id;this._eventManager.objectMap[c]={objectType:"dataSeries",dataSeriesIndex:r};var x=d(c);a.strokeStyle=x,a.lineWidth=l.lineThickness>0?Math.max(l.lineThickness,4):0;var p=l._colorSet,m=p[0];t.strokeStyle=m;var u,g,y,v=!0,b=0;if(t.beginPath(),h.length>0){var f=!1;for(b=0;b<h.length;b++)if(y=h[b].getTime?h[b].x.getTime():h[b].x,!(y<e.axisX.dataInfo.viewPortMin||y>e.axisX.dataInfo.viewPortMax))if("number"==typeof h[b].y){var T=g;u=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(y-e.axisX.conversionParameters.minimum)+.5<<0,g=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(h[b].y-e.axisY.conversionParameters.minimum)+.5<<0;var P=l.dataPointIds[b];if(this._eventManager.objectMap[P]={id:P,objectType:"dataPoint",dataSeriesIndex:r,dataPointIndex:b,x1:u,y1:g},v||f?(t.beginPath(),t.moveTo(u,g),O&&(a.beginPath(),a.moveTo(u,g)),v=!1,f=!1):(t.lineTo(u,T),O&&a.lineTo(u,T),t.lineTo(u,g),O&&a.lineTo(u,g),b%500==0&&(t.stroke(),t.beginPath(),t.moveTo(u,g),O&&(a.stroke(),a.beginPath(),a.moveTo(u,g)))),h[b].markerSize>0||l.markerSize>0){var M=l.getMarkerProperties(b,u,g,t);s.push(M);var k=d(P);O&&s.push({x:u,y:g,ctx:a,type:M.type,size:M.size,color:k,borderColor:k,borderThickness:M.borderThickness})}(h[b].indexLabel||l.indexLabel)&&this._indexLabels.push({chartType:"stepLine",dataPoint:h[b],dataSeries:l,point:{x:u,y:g},direction:h[b].y>=0?1:-1,color:m})}else b>0&&(t.stroke(),O&&a.stroke()),f=!0;t.stroke(),O&&a.stroke()}}nt.drawMarkers(s),t.restore(),t.beginPath(),O&&a.beginPath();var S={source:t,dest:this.plotArea.ctx,animationCallback:at.xClipAnimation,easingFunction:at.easing.linear,animationBase:0};return S}},k.prototype.renderSpline=function(e){function t(e){var t=S(e,2);if(t.length>0){i.beginPath(),O&&n.beginPath(),i.moveTo(t[0].x,t[0].y),O&&n.moveTo(t[0].x,t[0].y);for(var a=0;a<t.length-3;a+=3)i.bezierCurveTo(t[a+1].x,t[a+1].y,t[a+2].x,t[a+2].y,t[a+3].x,t[a+3].y),O&&n.bezierCurveTo(t[a+1].x,t[a+1].y,t[a+2].x,t[a+2].y,t[a+3].x,t[a+3].y),a>0&&a%3e3===0&&(i.stroke(),i.beginPath(),i.moveTo(t[a+3].x,t[a+3].y),O&&(n.stroke(),n.beginPath(),n.moveTo(t[a+3].x,t[a+3].y)));i.stroke(),O&&n.stroke()}}var i=e.targetCanvasCtx||this.plotArea.ctx,a=e.dataSeriesIndexes.length;if(!(0>=a)){var n=this._eventManager.ghostCtx;i.save();var s=this.plotArea;i.beginPath(),i.rect(s.x1,s.y1,s.width,s.height),i.clip();for(var o=[],r=0;r<e.dataSeriesIndexes.length;r++){var l=e.dataSeriesIndexes[r],h=this.data[l];i.lineWidth=h.lineThickness;var c=h.dataPoints,x=h.id;this._eventManager.objectMap[x]={objectType:"dataSeries",dataSeriesIndex:l};var p=d(x);n.strokeStyle=p,n.lineWidth=h.lineThickness>0?Math.max(h.lineThickness,4):0;var m=h._colorSet,u=m[0];i.strokeStyle=u;var g,y,v,b=0,f=[];if(i.beginPath(),c.length>0)for(b=0;b<c.length;b++)if(v=c[b].getTime?c[b].x.getTime():c[b].x,!(v<e.axisX.dataInfo.viewPortMin||v>e.axisX.dataInfo.viewPortMax))if("number"==typeof c[b].y){g=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(v-e.axisX.conversionParameters.minimum)+.5<<0,y=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(c[b].y-e.axisY.conversionParameters.minimum)+.5<<0;var T=h.dataPointIds[b];if(this._eventManager.objectMap[T]={id:T,objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:b,x1:g,y1:y},f[f.length]={x:g,y:y},c[b].markerSize>0||h.markerSize>0){var P=h.getMarkerProperties(b,g,y,i);o.push(P);var M=d(T);O&&o.push({x:g,y:y,ctx:n,type:P.type,size:P.size,color:M,borderColor:M,borderThickness:P.borderThickness})}(c[b].indexLabel||h.indexLabel)&&this._indexLabels.push({chartType:"spline",dataPoint:c[b],dataSeries:h,point:{x:g,y:y},direction:c[b].y>=0?1:-1,color:u})}else b>0&&(t(f),f=[]);t(f)}nt.drawMarkers(o),i.restore(),i.beginPath(),O&&n.beginPath();var k={source:i,dest:this.plotArea.ctx,animationCallback:at.xClipAnimation,easingFunction:at.easing.linear,animationBase:0};return k}};var tt=function(e,t,i,a,n,s,o,r,l,h,d,c,x){"undefined"==typeof x&&(x=1),o=o||0,r=r||"black";var p=t,m=a,u=i,g=n;if(a-t>15&&n-i>15)var y=8;else var y=.35*Math.min(a-t,n-i);var v="rgba(255, 255, 255, .4)",b="rgba(255, 255, 255, 0.1)",f=s;if(e.beginPath(),e.moveTo(t,i),e.save(),e.fillStyle=f,e.globalAlpha=x,e.fillRect(t,i,a-t,n-i),e.globalAlpha=1,o>0){var T=o%2===0?0:.5;e.beginPath(),e.lineWidth=o,e.strokeStyle=r,e.moveTo(t,i),e.rect(t-T,i-T,a-t+2*T,n-i+2*T),e.stroke()}if(e.restore(),l===!0){e.save(),e.beginPath(),e.moveTo(t,i),e.lineTo(t+y,i+y),e.lineTo(a-y,i+y),e.lineTo(a,i),e.closePath();var P=e.createLinearGradient((a+t)/2,u+y,(a+t)/2,u);P.addColorStop(0,f),P.addColorStop(1,v),e.fillStyle=P,e.fill(),e.restore()}if(h===!0){e.save(),e.beginPath(),e.moveTo(t,n),e.lineTo(t+y,n-y),e.lineTo(a-y,n-y),e.lineTo(a,n),e.closePath();var P=e.createLinearGradient((a+t)/2,g-y,(a+t)/2,g);P.addColorStop(0,f),P.addColorStop(1,v),e.fillStyle=P,e.fill(),e.restore()}if(d===!0){e.save(),e.beginPath(),e.moveTo(t,i),e.lineTo(t+y,i+y),e.lineTo(t+y,n-y),e.lineTo(t,n),e.closePath();var P=e.createLinearGradient(p+y,(n+i)/2,p,(n+i)/2);P.addColorStop(0,f),P.addColorStop(1,b),e.fillStyle=P,e.fill(),e.restore()}if(c===!0){e.save(),e.beginPath(),e.moveTo(a,i),e.lineTo(a-y,i+y),e.lineTo(a-y,n-y),e.lineTo(a,n);var P=e.createLinearGradient(m-y,(n+i)/2,m,(n+i)/2);P.addColorStop(0,f),P.addColorStop(1,b),e.fillStyle=P,P.addColorStop(0,f),P.addColorStop(1,b),e.fillStyle=P,e.fill(),e.closePath(),e.restore()}};k.prototype.renderColumn=function(e){var t=e.targetCanvasCtx||this.plotArea.ctx,i=e.dataSeriesIndexes.length;if(!(0>=i)){var a,n,s,o=null,r=this.plotArea,l=0,h=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)<<0,c=Math.min(.15*this.width,this.plotArea.width/e.plotType.totalDataSeries*.9)<<0,x=e.axisX.dataInfo.minDiff,p=r.width/Math.abs(e.axisX.maximum-e.axisX.minimum)*Math.abs(x)/e.plotType.totalDataSeries*.9<<0;p>c?p=c:1/0===x?p=c:1>p&&(p=1),t.save(),O&&this._eventManager.ghostCtx.save(),t.beginPath(),t.rect(r.x1,r.y1,r.width,r.height),t.clip(),O&&(this._eventManager.ghostCtx.rect(r.x1,r.y1,r.width,r.height),this._eventManager.ghostCtx.clip());for(var m=0;m<e.dataSeriesIndexes.length;m++){var u=e.dataSeriesIndexes[m],g=this.data[u],y=g.dataPoints;if(y.length>0){var v=p>5&&g.bevelEnabled?!0:!1;for(l=0;l<y.length;l++)if(s=y[l].getTime?y[l].x.getTime():y[l].x,!(s<e.axisX.dataInfo.viewPortMin||s>e.axisX.dataInfo.viewPortMax)&&"number"==typeof y[l].y){a=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(s-e.axisX.conversionParameters.minimum)+.5<<0,n=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(y[l].y-e.axisY.conversionParameters.minimum)+.5<<0;var b,f,T=a-e.plotType.totalDataSeries*p/2+(e.previousDataSeriesCount+m)*p<<0,P=T+p<<0;if(y[l].y>=0){if(b=n,f=h,b>f){b=f,f=b}}else if(f=n,b=h,b>f){b=f,f=b}o=y[l].color?y[l].color:g._colorSet[l%g._colorSet.length],tt(t,T,b,P,f,o,0,null,v&&y[l].y>=0,y[l].y<0&&v,!1,!1,g.fillOpacity);var M=g.dataPointIds[l];this._eventManager.objectMap[M]={id:M,objectType:"dataPoint",dataSeriesIndex:u,dataPointIndex:l,x1:T,y1:b,x2:P,y2:f},o=d(M),O&&tt(this._eventManager.ghostCtx,T,b,P,f,o,0,null,!1,!1,!1,!1),(y[l].indexLabel||g.indexLabel)&&this._indexLabels.push({chartType:"column",dataPoint:y[l],dataSeries:g,point:{x:T+(P-T)/2,y:y[l].y>=0?b:f},direction:y[l].y>=0?1:-1,bounds:{x1:T,y1:Math.min(b,f),x2:P,y2:Math.max(b,f)},color:o})}}}t.restore(),O&&this._eventManager.ghostCtx.restore();var k=Math.min(h,e.axisY.boundingRect.y2),S={source:t,dest:this.plotArea.ctx,animationCallback:at.yScaleAnimation,easingFunction:at.easing.easeOutQuart,animationBase:k};return S}},k.prototype.renderStackedColumn=function(e){var t=e.targetCanvasCtx||this.plotArea.ctx,i=e.dataSeriesIndexes.length;if(!(0>=i)){var a,n,s,o=null,r=this.plotArea,l=[],h=[],c=0,x=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)<<0,p=.15*this.width<<0,m=e.axisX.dataInfo.minDiff,u=r.width/Math.abs(e.axisX.maximum-e.axisX.minimum)*Math.abs(m)/e.plotType.plotUnits.length*.9<<0;u>p?u=p:1/0===m?u=p:1>u&&(u=1),t.save(),O&&this._eventManager.ghostCtx.save(),t.beginPath(),t.rect(r.x1,r.y1,r.width,r.height),t.clip(),O&&(this._eventManager.ghostCtx.rect(r.x1,r.y1,r.width,r.height),this._eventManager.ghostCtx.clip());for(var g=0;g<e.dataSeriesIndexes.length;g++){var y=e.dataSeriesIndexes[g],v=this.data[y],b=v.dataPoints;if(b.length>0){var f=u>5&&v.bevelEnabled?!0:!1;for(t.strokeStyle="#4572A7 ",c=0;c<b.length;c++)if(s=b[c].x.getTime?b[c].x.getTime():b[c].x,!(s<e.axisX.dataInfo.viewPortMin||s>e.axisX.dataInfo.viewPortMax)&&"number"==typeof b[c].y){a=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(s-e.axisX.conversionParameters.minimum)+.5<<0,n=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(b[c].y-e.axisY.conversionParameters.minimum);var T,P,M=a-e.plotType.plotUnits.length*u/2+e.index*u<<0,k=M+u<<0;if(b[c].y>=0){var S=l[s]?l[s]:0;T=n-S,P=x-S,l[s]=S+(P-T)}else{var S=h[s]?h[s]:0;P=n+S,T=x+S,h[s]=S+(P-T)}o=b[c].color?b[c].color:v._colorSet[c%v._colorSet.length],tt(t,M,T,k,P,o,0,null,f&&b[c].y>=0,b[c].y<0&&f,!1,!1,v.fillOpacity);var C=v.dataPointIds[c];this._eventManager.objectMap[C]={id:C,objectType:"dataPoint",dataSeriesIndex:y,dataPointIndex:c,x1:M,y1:T,x2:k,y2:P},o=d(C),O&&tt(this._eventManager.ghostCtx,M,T,k,P,o,0,null,!1,!1,!1,!1),(b[c].indexLabel||v.indexLabel)&&this._indexLabels.push({chartType:"stackedColumn",dataPoint:b[c],dataSeries:v,point:{x:a,y:b[c].y>=0?T:P},direction:b[c].y>=0?1:-1,bounds:{x1:M,y1:Math.min(T,P),x2:k,y2:Math.max(T,P)},color:o})}}}t.restore(),O&&this._eventManager.ghostCtx.restore();var A=Math.min(x,e.axisY.boundingRect.y2),_={source:t,dest:this.plotArea.ctx,animationCallback:at.yScaleAnimation,easingFunction:at.easing.easeOutQuart,animationBase:A};return _}},k.prototype.renderStackedColumn100=function(e){var t=e.targetCanvasCtx||this.plotArea.ctx,i=e.dataSeriesIndexes.length;if(!(0>=i)){var a,n,s,o=null,r=this.plotArea,l=[],h=[],c=0,x=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)<<0,p=.15*this.width<<0,m=e.axisX.dataInfo.minDiff,u=r.width/Math.abs(e.axisX.maximum-e.axisX.minimum)*Math.abs(m)/e.plotType.plotUnits.length*.9<<0;u>p?u=p:1/0===m?u=p:1>u&&(u=1),t.save(),O&&this._eventManager.ghostCtx.save(),t.beginPath(),t.rect(r.x1,r.y1,r.width,r.height),t.clip(),O&&(this._eventManager.ghostCtx.rect(r.x1,r.y1,r.width,r.height),this._eventManager.ghostCtx.clip());for(var g=0;g<e.dataSeriesIndexes.length;g++){var y=e.dataSeriesIndexes[g],v=this.data[y],b=v.dataPoints;if(b.length>0){var f=u>5&&v.bevelEnabled?!0:!1;for(c=0;c<b.length;c++)if(s=b[c].x.getTime?b[c].x.getTime():b[c].x,!(s<e.axisX.dataInfo.viewPortMin||s>e.axisX.dataInfo.viewPortMax)&&"number"==typeof b[c].y){a=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(s-e.axisX.conversionParameters.minimum)+.5<<0;var T;T=0!==e.dataPointYSums[s]?b[c].y/e.dataPointYSums[s]*100:0,n=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(T-e.axisY.conversionParameters.minimum);var P,M,k=a-e.plotType.plotUnits.length*u/2+e.index*u<<0,S=k+u<<0;if(b[c].y>=0){var C=l[s]?l[s]:0;P=n-C,M=x-C,l[s]=C+(M-P)}else{var C=h[s]?h[s]:0;M=n+C,P=x+C,h[s]=C+(M-P)}o=b[c].color?b[c].color:v._colorSet[c%v._colorSet.length],tt(t,k,P,S,M,o,0,null,f&&b[c].y>=0,b[c].y<0&&f,!1,!1,v.fillOpacity);var A=v.dataPointIds[c];this._eventManager.objectMap[A]={id:A,objectType:"dataPoint",dataSeriesIndex:y,dataPointIndex:c,x1:k,y1:P,x2:S,y2:M},o=d(A),O&&tt(this._eventManager.ghostCtx,k,P,S,M,o,0,null,!1,!1,!1,!1),(b[c].indexLabel||v.indexLabel)&&this._indexLabels.push({chartType:"stackedColumn100",dataPoint:b[c],dataSeries:v,point:{x:a,y:b[c].y>=0?P:M},direction:b[c].y>=0?1:-1,bounds:{x1:k,y1:Math.min(P,M),x2:S,y2:Math.max(P,M)},color:o})}}}t.restore(),O&&this._eventManager.ghostCtx.restore();var _=Math.min(x,e.axisY.boundingRect.y2),w={source:t,dest:this.plotArea.ctx,animationCallback:at.yScaleAnimation,easingFunction:at.easing.easeOutQuart,animationBase:_};return w}},k.prototype.renderBar=function(e){var t=e.targetCanvasCtx||this.plotArea.ctx,i=e.dataSeriesIndexes.length;if(!(0>=i)){var a,n,s,o=null,r=this.plotArea,l=0,h=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)<<0,c=Math.min(.15*this.height,this.plotArea.height/e.plotType.totalDataSeries*.9)<<0,x=e.axisX.dataInfo.minDiff,p=r.height/Math.abs(e.axisX.maximum-e.axisX.minimum)*Math.abs(x)/e.plotType.totalDataSeries*.9<<0;p>c?p=c:1/0===x?p=c:1>p&&(p=1),t.save(),O&&this._eventManager.ghostCtx.save(),t.beginPath(),t.rect(r.x1,r.y1,r.width,r.height),t.clip(),O&&(this._eventManager.ghostCtx.rect(r.x1,r.y1,r.width,r.height),this._eventManager.ghostCtx.clip());for(var m=0;m<e.dataSeriesIndexes.length;m++){var u=e.dataSeriesIndexes[m],g=this.data[u],y=g.dataPoints;if(y.length>0){var v=p>5&&g.bevelEnabled?!0:!1;for(t.strokeStyle="#4572A7 ",l=0;l<y.length;l++)if(s=y[l].getTime?y[l].x.getTime():y[l].x,!(s<e.axisX.dataInfo.viewPortMin||s>e.axisX.dataInfo.viewPortMax)&&"number"==typeof y[l].y){n=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(s-e.axisX.conversionParameters.minimum)+.5<<0,a=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(y[l].y-e.axisY.conversionParameters.minimum)+.5<<0;var b,f,T=n-e.plotType.totalDataSeries*p/2+(e.previousDataSeriesCount+m)*p<<0,P=T+p<<0;y[l].y>=0?(b=h,f=a):(b=a,f=h),o=y[l].color?y[l].color:g._colorSet[l%g._colorSet.length],tt(t,b,T,f,P,o,0,null,v,!1,!1,!1,g.fillOpacity);var M=g.dataPointIds[l];this._eventManager.objectMap[M]={id:M,objectType:"dataPoint",dataSeriesIndex:u,dataPointIndex:l,x1:b,y1:T,x2:f,y2:P},o=d(M),O&&tt(this._eventManager.ghostCtx,b,T,f,P,o,0,null,!1,!1,!1,!1),this._indexLabels.push({chartType:"bar",dataPoint:y[l],dataSeries:g,point:{x:y[l].y>=0?f:b,y:T+(P-T)/2},direction:y[l].y>=0?1:-1,bounds:{x1:Math.min(b,f),y1:T,x2:Math.max(b,f),y2:P},color:o})}}}t.restore(),O&&this._eventManager.ghostCtx.restore();var k=Math.max(h,e.axisX.boundingRect.x2),S={source:t,dest:this.plotArea.ctx,animationCallback:at.xScaleAnimation,easingFunction:at.easing.easeOutQuart,animationBase:k};return S}},k.prototype.renderStackedBar=function(e){var t=e.targetCanvasCtx||this.plotArea.ctx,i=e.dataSeriesIndexes.length;if(!(0>=i)){var a,n,s,o=null,r=this.plotArea,l=[],h=[],c=0,x=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)<<0,p=.15*this.height<<0,m=e.axisX.dataInfo.minDiff,u=r.height/Math.abs(e.axisX.maximum-e.axisX.minimum)*Math.abs(m)/e.plotType.plotUnits.length*.9<<0;u>p?u=p:1/0===m?u=p:1>u&&(u=1),t.save(),O&&this._eventManager.ghostCtx.save(),t.beginPath(),t.rect(r.x1,r.y1,r.width,r.height),t.clip(),O&&(this._eventManager.ghostCtx.rect(r.x1,r.y1,r.width,r.height),this._eventManager.ghostCtx.clip());for(var g=0;g<e.dataSeriesIndexes.length;g++){var y=e.dataSeriesIndexes[g],v=this.data[y],b=v.dataPoints;if(b.length>0){var f=u>5&&v.bevelEnabled?!0:!1;for(t.strokeStyle="#4572A7 ",c=0;c<b.length;c++)if(s=b[c].x.getTime?b[c].x.getTime():b[c].x,!(s<e.axisX.dataInfo.viewPortMin||s>e.axisX.dataInfo.viewPortMax)&&"number"==typeof b[c].y){n=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(s-e.axisX.conversionParameters.minimum)+.5<<0,a=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(b[c].y-e.axisY.conversionParameters.minimum);var T,P,M=n-e.plotType.plotUnits.length*u/2+e.index*u<<0,k=M+u<<0;if(b[c].y>=0){var S=l[s]?l[s]:0;T=x+S,P=a+S,l[s]=S+(P-T)}else{var S=h[s]?h[s]:0;T=a-S,P=x-S,h[s]=S+(P-T)}o=b[c].color?b[c].color:v._colorSet[c%v._colorSet.length],tt(t,T,M,P,k,o,0,null,f,!1,!1,!1,v.fillOpacity);var C=v.dataPointIds[c];this._eventManager.objectMap[C]={id:C,objectType:"dataPoint",dataSeriesIndex:y,dataPointIndex:c,x1:T,y1:M,x2:P,y2:k},o=d(C),O&&tt(this._eventManager.ghostCtx,T,M,P,k,o,0,null,!1,!1,!1,!1),this._indexLabels.push({chartType:"stackedBar",dataPoint:b[c],dataSeries:v,point:{x:b[c].y>=0?P:T,y:n},direction:b[c].y>=0?1:-1,bounds:{x1:Math.min(T,P),y1:M,x2:Math.max(T,P),y2:k},color:o})}}}t.restore(),O&&this._eventManager.ghostCtx.restore();var A=Math.max(x,e.axisX.boundingRect.x2),_={source:t,dest:this.plotArea.ctx,animationCallback:at.xScaleAnimation,easingFunction:at.easing.easeOutQuart,animationBase:A};return _}},k.prototype.renderStackedBar100=function(e){var t=e.targetCanvasCtx||this.plotArea.ctx,i=e.dataSeriesIndexes.length;if(!(0>=i)){var a,n,s,o=null,r=this.plotArea,l=[],h=[],c=0,x=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)<<0,p=.15*this.height<<0,m=e.axisX.dataInfo.minDiff,u=r.height/Math.abs(e.axisX.maximum-e.axisX.minimum)*Math.abs(m)/e.plotType.plotUnits.length*.9<<0;u>p?u=p:1/0===m?u=p:1>u&&(u=1),t.save(),O&&this._eventManager.ghostCtx.save(),t.beginPath(),t.rect(r.x1,r.y1,r.width,r.height),t.clip(),O&&(this._eventManager.ghostCtx.rect(r.x1,r.y1,r.width,r.height),this._eventManager.ghostCtx.clip());for(var g=0;g<e.dataSeriesIndexes.length;g++){var y=e.dataSeriesIndexes[g],v=this.data[y],b=v.dataPoints;if(b.length>0){var f=u>5&&v.bevelEnabled?!0:!1;for(t.strokeStyle="#4572A7 ",c=0;c<b.length;c++)if(s=b[c].x.getTime?b[c].x.getTime():b[c].x,!(s<e.axisX.dataInfo.viewPortMin||s>e.axisX.dataInfo.viewPortMax)&&"number"==typeof b[c].y){n=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(s-e.axisX.conversionParameters.minimum)+.5<<0;var T;T=0!==e.dataPointYSums[s]?b[c].y/e.dataPointYSums[s]*100:0,a=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(T-e.axisY.conversionParameters.minimum);var P,M,k=n-e.plotType.plotUnits.length*u/2+e.index*u<<0,S=k+u<<0;if(b[c].y>=0){var C=l[s]?l[s]:0;P=x+C,M=a+C,l[s]=C+(M-P)}else{var C=h[s]?h[s]:0;P=a-C,M=x-C,h[s]=C+(M-P)}o=b[c].color?b[c].color:v._colorSet[c%v._colorSet.length],tt(t,P,k,M,S,o,0,null,f,!1,!1,!1,v.fillOpacity);var A=v.dataPointIds[c];this._eventManager.objectMap[A]={id:A,objectType:"dataPoint",dataSeriesIndex:y,dataPointIndex:c,x1:P,y1:k,x2:M,y2:S},o=d(A),O&&tt(this._eventManager.ghostCtx,P,k,M,S,o,0,null,!1,!1,!1,!1),this._indexLabels.push({chartType:"stackedBar100",dataPoint:b[c],dataSeries:v,point:{x:b[c].y>=0?M:P,y:n},direction:b[c].y>=0?1:-1,bounds:{x1:Math.min(P,M),y1:k,x2:Math.max(P,M),y2:S},color:o})}}}t.restore(),O&&this._eventManager.ghostCtx.restore();var _=Math.max(x,e.axisX.boundingRect.x2),w={source:t,dest:this.plotArea.ctx,animationCallback:at.xScaleAnimation,easingFunction:at.easing.easeOutQuart,animationBase:_};return w}},k.prototype.renderArea=function(e){function t(){M&&(x.lineThickness>0&&i.stroke(),e.axisY.minimum<=0&&e.axisY.maximum>=0?b=P:e.axisY.maximum<0?b=o.y1:e.axisY.minimum>0&&(b=s.y2),i.lineTo(g,b),i.lineTo(M.x,b),i.closePath(),i.globalAlpha=x.fillOpacity,i.fill(),i.globalAlpha=1,O&&(n.lineTo(g,b),n.lineTo(M.x,b),n.closePath(),n.fill()),i.beginPath(),i.moveTo(g,y),n.beginPath(),n.moveTo(g,y),M={x:g,y:y})}var i=e.targetCanvasCtx||this.plotArea.ctx,a=e.dataSeriesIndexes.length;if(!(0>=a)){var n=this._eventManager.ghostCtx,s=e.axisX.lineCoordinates,o=e.axisY.lineCoordinates,r=[],l=this.plotArea;i.save(),O&&n.save(),i.beginPath(),i.rect(l.x1,l.y1,l.width,l.height),i.clip(),O&&(n.beginPath(),n.rect(l.x1,l.y1,l.width,l.height),n.clip());for(var h=0;h<e.dataSeriesIndexes.length;h++){var c=e.dataSeriesIndexes[h],x=this.data[c],p=x.dataPoints,m=x.id;this._eventManager.objectMap[m]={objectType:"dataSeries",dataSeriesIndex:c};var u=d(m);n.fillStyle=u,r=[];var g,y,v,b,f=!0,T=0,P=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)+.5<<0,M=null;if(p.length>0){var k=x._colorSet[T%x._colorSet.length];i.fillStyle=k,i.strokeStyle=k,i.lineWidth=x.lineThickness;for(var S=!0;T<p.length;T++)if(v=p[T].x.getTime?p[T].x.getTime():p[T].x,!(v<e.axisX.dataInfo.viewPortMin||v>e.axisX.dataInfo.viewPortMax))if("number"==typeof p[T].y){g=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(v-e.axisX.conversionParameters.minimum)+.5<<0,y=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(p[T].y-e.axisY.conversionParameters.minimum)+.5<<0,f||S?(i.beginPath(),i.moveTo(g,y),M={x:g,y:y},O&&(n.beginPath(),n.moveTo(g,y)),f=!1,S=!1):(i.lineTo(g,y),O&&n.lineTo(g,y),T%250==0&&t());var C=x.dataPointIds[T];if(this._eventManager.objectMap[C]={id:C,objectType:"dataPoint",dataSeriesIndex:c,dataPointIndex:T,x1:g,y1:y},0!==p[T].markerSize&&(p[T].markerSize>0||x.markerSize>0)){var A=x.getMarkerProperties(T,g,y,i);r.push(A);var _=d(C);O&&r.push({x:g,y:y,ctx:n,type:A.type,size:A.size,color:_,borderColor:_,borderThickness:A.borderThickness})}(p[T].indexLabel||x.indexLabel)&&this._indexLabels.push({chartType:"area",dataPoint:p[T],dataSeries:x,point:{x:g,y:y},direction:p[T].y>=0?1:-1,color:k})}else t(),S=!0;t(),nt.drawMarkers(r)}}i.restore(),O&&this._eventManager.ghostCtx.restore();var w={source:i,dest:this.plotArea.ctx,animationCallback:at.xClipAnimation,easingFunction:at.easing.linear,animationBase:0};return w}},k.prototype.renderSplineArea=function(e){function t(){var t=S(M,2);if(t.length>0){i.beginPath(),i.moveTo(t[0].x,t[0].y),O&&(n.beginPath(),n.moveTo(t[0].x,t[0].y));for(var a=0;a<t.length-3;a+=3)i.bezierCurveTo(t[a+1].x,t[a+1].y,t[a+2].x,t[a+2].y,t[a+3].x,t[a+3].y),O&&n.bezierCurveTo(t[a+1].x,t[a+1].y,t[a+2].x,t[a+2].y,t[a+3].x,t[a+3].y);x.lineThickness>0&&i.stroke(),e.axisY.minimum<=0&&e.axisY.maximum>=0?b=T:e.axisY.maximum<0?b=o.y1:e.axisY.minimum>0&&(b=s.y2),P={x:t[0].x,y:t[0].y},i.lineTo(t[t.length-1].x,b),i.lineTo(P.x,b),i.closePath(),i.globalAlpha=x.fillOpacity,i.fill(),i.globalAlpha=1,O&&(n.lineTo(t[t.length-1].x,b),n.lineTo(P.x,b),n.closePath(),n.fill())}}var i=e.targetCanvasCtx||this.plotArea.ctx,a=e.dataSeriesIndexes.length;if(!(0>=a)){var n=this._eventManager.ghostCtx,s=e.axisX.lineCoordinates,o=e.axisY.lineCoordinates,r=[],l=this.plotArea;i.save(),O&&n.save(),i.beginPath(),i.rect(l.x1,l.y1,l.width,l.height),i.clip(),O&&(n.beginPath(),n.rect(l.x1,l.y1,l.width,l.height),n.clip());for(var h=0;h<e.dataSeriesIndexes.length;h++){var c=e.dataSeriesIndexes[h],x=this.data[c],p=x.dataPoints,m=x.id;this._eventManager.objectMap[m]={objectType:"dataSeries",dataSeriesIndex:c};var u=d(m);n.fillStyle=u,r=[];var g,y,v,b,f=0,T=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)+.5<<0,P=null,M=[];if(p.length>0){for(color=x._colorSet[f%x._colorSet.length],i.fillStyle=color,i.strokeStyle=color,i.lineWidth=x.lineThickness;f<p.length;f++)if(v=p[f].x.getTime?p[f].x.getTime():p[f].x,!(v<e.axisX.dataInfo.viewPortMin||v>e.axisX.dataInfo.viewPortMax))if("number"==typeof p[f].y){g=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(v-e.axisX.conversionParameters.minimum)+.5<<0,y=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(p[f].y-e.axisY.conversionParameters.minimum)+.5<<0;var k=x.dataPointIds[f];if(this._eventManager.objectMap[k]={id:k,objectType:"dataPoint",dataSeriesIndex:c,dataPointIndex:f,x1:g,y1:y},M[M.length]={x:g,y:y},0!==p[f].markerSize&&(p[f].markerSize>0||x.markerSize>0)){var C=x.getMarkerProperties(f,g,y,i);r.push(C);var A=d(k);O&&r.push({x:g,y:y,ctx:n,type:C.type,size:C.size,color:A,borderColor:A,borderThickness:C.borderThickness})}(p[f].indexLabel||x.indexLabel)&&this._indexLabels.push({chartType:"splineArea",dataPoint:p[f],dataSeries:x,point:{x:g,y:y},direction:p[f].y>=0?1:-1,color:color})}else f>0&&(t(),M=[]);t(),nt.drawMarkers(r)}}i.restore(),O&&this._eventManager.ghostCtx.restore();var _={source:i,dest:this.plotArea.ctx,animationCallback:at.xClipAnimation,easingFunction:at.easing.linear,animationBase:0};return _}},k.prototype.renderStepArea=function(e){function t(){M&&(x.lineThickness>0&&i.stroke(),e.axisY.minimum<=0&&e.axisY.maximum>=0?b=P:e.axisY.maximum<0?b=o.y1:e.axisY.minimum>0&&(b=s.y2),i.lineTo(g,b),i.lineTo(M.x,b),i.closePath(),i.globalAlpha=x.fillOpacity,i.fill(),i.globalAlpha=1,O&&(n.lineTo(g,b),n.lineTo(M.x,b),n.closePath(),n.fill()),i.beginPath(),i.moveTo(g,y),n.beginPath(),n.moveTo(g,y),M={x:g,y:y})}var i=e.targetCanvasCtx||this.plotArea.ctx,a=e.dataSeriesIndexes.length;if(!(0>=a)){var n=this._eventManager.ghostCtx,s=e.axisX.lineCoordinates,o=e.axisY.lineCoordinates,r=[],l=this.plotArea;i.save(),O&&n.save(),i.beginPath(),i.rect(l.x1,l.y1,l.width,l.height),i.clip(),O&&(n.beginPath(),n.rect(l.x1,l.y1,l.width,l.height),n.clip());for(var h=0;h<e.dataSeriesIndexes.length;h++){var c=e.dataSeriesIndexes[h],x=this.data[c],p=x.dataPoints,m=x.id;this._eventManager.objectMap[m]={objectType:"dataSeries",dataSeriesIndex:c};var u=d(m);n.fillStyle=u,r=[];var g,y,v,b,f=!0,T=0,P=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)+.5<<0,M=null,k=!1;if(p.length>0){var S=x._colorSet[T%x._colorSet.length];for(i.fillStyle=S,i.strokeStyle=S,i.lineWidth=x.lineThickness;T<p.length;T++)if(v=p[T].x.getTime?p[T].x.getTime():p[T].x,!(v<e.axisX.dataInfo.viewPortMin||v>e.axisX.dataInfo.viewPortMax)){var C=y;if("number"==typeof p[T].y){g=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(v-e.axisX.conversionParameters.minimum)+.5<<0,y=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(p[T].y-e.axisY.conversionParameters.minimum)+.5<<0,f||k?(i.beginPath(),i.moveTo(g,y),M={x:g,y:y},O&&(n.beginPath(),n.moveTo(g,y)),f=!1,k=!1):(i.lineTo(g,C),O&&n.lineTo(g,C),i.lineTo(g,y),O&&n.lineTo(g,y),T%250==0&&t());var A=x.dataPointIds[T];if(this._eventManager.objectMap[A]={id:A,objectType:"dataPoint",dataSeriesIndex:c,dataPointIndex:T,x1:g,y1:y},0!==p[T].markerSize&&(p[T].markerSize>0||x.markerSize>0)){var _=x.getMarkerProperties(T,g,y,i);r.push(_);var w=d(A);O&&r.push({x:g,y:y,ctx:n,type:_.type,size:_.size,color:w,borderColor:w,borderThickness:_.borderThickness})}(p[T].indexLabel||x.indexLabel)&&this._indexLabels.push({chartType:"stepArea",dataPoint:p[T],dataSeries:x,point:{x:g,y:y},direction:p[T].y>=0?1:-1,color:S})}else t(),k=!0}t(),nt.drawMarkers(r)}}i.restore(),O&&this._eventManager.ghostCtx.restore();var I={source:i,dest:this.plotArea.ctx,animationCallback:at.xClipAnimation,easingFunction:at.easing.linear,animationBase:0};return I}},k.prototype.renderStackedArea=function(e){var t=e.targetCanvasCtx||this.plotArea.ctx,i=e.dataSeriesIndexes.length;if(!(0>=i)){var a,n,s,o=null,r=[],h=this.plotArea,c=[],x=[],p=0,m=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)<<0,u=(e.axisX.dataInfo.minDiff,this._eventManager.ghostCtx);O&&u.beginPath(),t.save(),O&&u.save(),t.beginPath(),t.rect(h.x1,h.y1,h.width,h.height),t.clip(),O&&(u.beginPath(),u.rect(h.x1,h.y1,h.width,h.height),u.clip()),xValuePresent=[];for(var g=0;g<e.dataSeriesIndexes.length;g++){var y,v=e.dataSeriesIndexes[g],b=this.data[v],f=b.dataPoints;for(b.dataPointIndexes=[],p=0;p<f.length;p++)y=f[p].x.getTime?f[p].x.getTime():f[p].x,b.dataPointIndexes[y]=p,xValuePresent[y]||(x.push(y),xValuePresent[y]=!0);
x.sort(l)}for(var g=0;g<e.dataSeriesIndexes.length;g++){var v=e.dataSeriesIndexes[g],b=this.data[v],f=b.dataPoints,T=!0,P=[],M=b.id;this._eventManager.objectMap[M]={objectType:"dataSeries",dataSeriesIndex:v};var k=d(M);if(u.fillStyle=k,x.length>0){for(o=b._colorSet[0],t.fillStyle=o,t.strokeStyle=o,t.lineWidth=b.lineThickness,p=0;p<x.length;p++){s=x[p];var S=null;if(S=b.dataPointIndexes[s]>=0?f[b.dataPointIndexes[s]]:{x:s,y:0},!(s<e.axisX.dataInfo.viewPortMin||s>e.axisX.dataInfo.viewPortMax)&&"number"==typeof S.y){var a=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(s-e.axisX.conversionParameters.minimum)+.5<<0,n=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(S.y-e.axisY.conversionParameters.minimum),C=c[s]?c[s]:0;if(n-=C,P.push({x:a,y:m-C}),c[s]=m-n,T)t.beginPath(),t.moveTo(a,n),O&&(u.beginPath(),u.moveTo(a,n)),T=!1;else if(t.lineTo(a,n),O&&u.lineTo(a,n),p%250==0){for(b.lineThickness>0&&t.stroke();P.length>0;){var A=P.pop();t.lineTo(A.x,A.y),O&&u.lineTo(A.x,A.y)}t.closePath(),t.globalAlpha=b.fillOpacity,t.fill(),t.globalAlpha=1,t.beginPath(),t.moveTo(a,n),O&&(u.closePath(),u.fill(),u.beginPath(),u.moveTo(a,n)),P.push({x:a,y:m-C})}if(b.dataPointIndexes[s]>=0){var _=b.dataPointIds[b.dataPointIndexes[s]];this._eventManager.objectMap[_]={id:_,objectType:"dataPoint",dataSeriesIndex:v,dataPointIndex:b.dataPointIndexes[s],x1:a,y1:n}}if(b.dataPointIndexes[s]>=0&&0!==S.markerSize&&(S.markerSize>0||b.markerSize>0)){var w=b.getMarkerProperties(p,a,n,t);r.push(w),markerColor=d(_),O&&r.push({x:a,y:n,ctx:u,type:w.type,size:w.size,color:markerColor,borderColor:markerColor,borderThickness:w.borderThickness})}(S.indexLabel||b.indexLabel)&&this._indexLabels.push({chartType:"stackedArea",dataPoint:S,dataSeries:b,point:{x:a,y:n},direction:f[p].y>=0?1:-1,color:o})}}for(b.lineThickness>0&&t.stroke();P.length>0;){var A=P.pop();t.lineTo(A.x,A.y),O&&u.lineTo(A.x,A.y)}t.closePath(),t.globalAlpha=b.fillOpacity,t.fill(),t.globalAlpha=1,t.beginPath(),t.moveTo(a,n),O&&(u.closePath(),u.fill(),u.beginPath(),u.moveTo(a,n))}delete b.dataPointIndexes}nt.drawMarkers(r),t.restore(),O&&u.restore();var I={source:t,dest:this.plotArea.ctx,animationCallback:at.xClipAnimation,easingFunction:at.easing.linear,animationBase:0};return I}},k.prototype.renderStackedArea100=function(e){var t=e.targetCanvasCtx||this.plotArea.ctx,i=e.dataSeriesIndexes.length;if(!(0>=i)){var a,n,s,o=null,r=this.plotArea,h=[],c=[],x=[],p=0,m=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)<<0,u=.15*this.width<<0,g=e.axisX.dataInfo.minDiff,y=r.width/Math.abs(e.axisX.maximum-e.axisX.minimum)*Math.abs(g)*.9<<0,v=this._eventManager.ghostCtx;t.save(),O&&v.save(),t.beginPath(),t.rect(r.x1,r.y1,r.width,r.height),t.clip(),O&&(v.beginPath(),v.rect(r.x1,r.y1,r.width,r.height),v.clip()),xValuePresent=[];for(var b=0;b<e.dataSeriesIndexes.length;b++){var f,T=e.dataSeriesIndexes[b],P=this.data[T],M=P.dataPoints;for(P.dataPointIndexes=[],p=0;p<M.length;p++)f=M[p].x.getTime?M[p].x.getTime():M[p].x,P.dataPointIndexes[f]=p,xValuePresent[f]||(x.push(f),xValuePresent[f]=!0);x.sort(l)}for(var b=0;b<e.dataSeriesIndexes.length;b++){var T=e.dataSeriesIndexes[b],P=this.data[T],M=P.dataPoints,k=!0,S=P.id;this._eventManager.objectMap[S]={objectType:"dataSeries",dataSeriesIndex:T};var C=d(S);v.fillStyle=C,1==M.length&&(y=u),1>y?y=1:y>u&&(y=u);var A=[];if(x.length>0){o=P._colorSet[p%P._colorSet.length],t.fillStyle=o,t.strokeStyle=o,t.lineWidth=P.lineThickness;for(p=0;p<x.length;p++){s=x[p];var _=null;if(_=P.dataPointIndexes[s]>=0?M[P.dataPointIndexes[s]]:{x:s,y:0},!(s<e.axisX.dataInfo.viewPortMin||s>e.axisX.dataInfo.viewPortMax)&&"number"==typeof _.y){var w;w=0!==e.dataPointYSums[s]?_.y/e.dataPointYSums[s]*100:0;var a=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(s-e.axisX.conversionParameters.minimum)+.5<<0,n=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(w-e.axisY.conversionParameters.minimum),I=c[s]?c[s]:0;if(n-=I,A.push({x:a,y:m-I}),c[s]=m-n,k)t.beginPath(),t.moveTo(a,n),O&&(v.beginPath(),v.moveTo(a,n)),k=!1;else if(t.lineTo(a,n),O&&v.lineTo(a,n),p%250==0){for(P.lineThickness>0&&t.stroke();A.length>0;){var L=A.pop();t.lineTo(L.x,L.y),O&&v.lineTo(L.x,L.y)}t.closePath(),t.globalAlpha=P.fillOpacity,t.fill(),t.globalAlpha=1,t.beginPath(),t.moveTo(a,n),O&&(v.closePath(),v.fill(),v.beginPath(),v.moveTo(a,n)),A.push({x:a,y:m-I})}if(P.dataPointIndexes[s]>=0){var B=P.dataPointIds[P.dataPointIndexes[s]];this._eventManager.objectMap[B]={id:B,objectType:"dataPoint",dataSeriesIndex:T,dataPointIndex:P.dataPointIndexes[s],x1:a,y1:n}}if(P.dataPointIndexes[s]>=0&&0!==_.markerSize&&(_.markerSize>0||P.markerSize>0)){var X=P.getMarkerProperties(p,a,n,t);h.push(X),markerColor=d(B),O&&h.push({x:a,y:n,ctx:v,type:X.type,size:X.size,color:markerColor,borderColor:markerColor,borderThickness:X.borderThickness})}(_.indexLabel||P.indexLabel)&&this._indexLabels.push({chartType:"stackedArea100",dataPoint:_,dataSeries:P,point:{x:a,y:n},direction:M[p].y>=0?1:-1,color:o})}}for(P.lineThickness>0&&t.stroke();A.length>0;){var L=A.pop();t.lineTo(L.x,L.y),O&&v.lineTo(L.x,L.y)}t.closePath(),t.globalAlpha=P.fillOpacity,t.fill(),t.globalAlpha=1,t.beginPath(),t.moveTo(a,n),O&&(v.closePath(),v.fill(),v.beginPath(),v.moveTo(a,n))}delete P.dataPointIndexes}nt.drawMarkers(h),t.restore(),O&&v.restore();var F={source:t,dest:this.plotArea.ctx,animationCallback:at.xClipAnimation,easingFunction:at.easing.linear,animationBase:0};return F}},k.prototype.renderBubble=function(e){var t=e.targetCanvasCtx||this.plotArea.ctx,i=e.dataSeriesIndexes.length;if(!(0>=i)){var a,n,s,o=null,r=this.plotArea,l=0,h=(e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)<<0,.15*this.width<<0),c=e.axisX.dataInfo.minDiff,x=r.width/Math.abs(e.axisX.maximum-e.axisX.minimum)*Math.abs(c)/i*.9<<0;t.save(),O&&this._eventManager.ghostCtx.save(),t.beginPath(),t.rect(r.x1,r.y1,r.width,r.height),t.clip(),O&&(this._eventManager.ghostCtx.rect(r.x1,r.y1,r.width,r.height),this._eventManager.ghostCtx.clip());for(var p=-1/0,m=1/0,u=0;u<e.dataSeriesIndexes.length;u++)for(var g=e.dataSeriesIndexes[u],y=this.data[g],v=y.dataPoints,b=0,l=0;l<v.length;l++)s=s=v[l].getTime?v[l].x.getTime():v[l].x,s<e.axisX.dataInfo.viewPortMin||s>e.axisX.dataInfo.viewPortMax||"undefined"!=typeof v[l].z&&(b=v[l].z,b>p&&(p=b),m>b&&(m=b));for(var f=5*Math.PI*5,T=Math.max(Math.pow(.25*Math.min(r.height,r.width)/2,2)*Math.PI,f),u=0;u<e.dataSeriesIndexes.length;u++){var g=e.dataSeriesIndexes[u],y=this.data[g],v=y.dataPoints;if(1==v.length&&(x=h),1>x?x=1:x>h&&(x=h),v.length>0){t.strokeStyle="#4572A7 ";for(var l=0;l<v.length;l++)if(s=s=v[l].getTime?v[l].x.getTime():v[l].x,!(s<e.axisX.dataInfo.viewPortMin||s>e.axisX.dataInfo.viewPortMax)&&"number"==typeof v[l].y){a=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(s-e.axisX.conversionParameters.minimum)+.5<<0,n=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(v[l].y-e.axisY.conversionParameters.minimum)+.5<<0;var b=v[l].z,P=p===m?T/2:f+(T-f)/(p-m)*(b-m),M=Math.max(Math.sqrt(P/Math.PI)<<0,1),k=2*M,S=y.getMarkerProperties(l,t);S.size=k,t.globalAlpha=y.fillOpacity,nt.drawMarker(a,n,t,S.type,S.size,S.color,S.borderColor,S.borderThickness),t.globalAlpha=1;var C=y.dataPointIds[l];this._eventManager.objectMap[C]={id:C,objectType:"dataPoint",dataSeriesIndex:g,dataPointIndex:l,x1:a,y1:n,size:k};var A=d(C);O&&nt.drawMarker(a,n,this._eventManager.ghostCtx,S.type,S.size,A,A,S.borderThickness),(v[l].indexLabel||y.indexLabel)&&this._indexLabels.push({chartType:"bubble",dataPoint:v[l],dataSeries:y,point:{x:a,y:n},direction:1,color:o})}}}t.restore(),O&&this._eventManager.ghostCtx.restore();var _={source:t,dest:this.plotArea.ctx,animationCallback:at.fadeInAnimation,easingFunction:at.easing.easeInQuad,animationBase:0};return _}},k.prototype.renderScatter=function(e){var t=e.targetCanvasCtx||this.plotArea.ctx,i=e.dataSeriesIndexes.length;if(!(0>=i)){var a,n,s,o=null,r=this.plotArea,l=0,h=(e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)<<0,.15*this.width<<0),c=e.axisX.dataInfo.minDiff,x=r.width/Math.abs(e.axisX.maximum-e.axisX.minimum)*Math.abs(c)/i*.9<<0;t.save(),O&&this._eventManager.ghostCtx.save(),t.beginPath(),t.rect(r.x1,r.y1,r.width,r.height),t.clip(),O&&(this._eventManager.ghostCtx.rect(r.x1,r.y1,r.width,r.height),this._eventManager.ghostCtx.clip());for(var p=0;p<e.dataSeriesIndexes.length;p++){var m=e.dataSeriesIndexes[p],u=this.data[m],g=u.dataPoints;if(1==g.length&&(x=h),1>x?x=1:x>h&&(x=h),g.length>0){t.strokeStyle="#4572A7 ";for(var y=(Math.pow(.3*Math.min(r.height,r.width)/2,2)*Math.PI,0),v=0,l=0;l<g.length;l++)if(s=s=g[l].getTime?g[l].x.getTime():g[l].x,!(s<e.axisX.dataInfo.viewPortMin||s>e.axisX.dataInfo.viewPortMax)&&"number"==typeof g[l].y){a=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(s-e.axisX.conversionParameters.minimum)+.5<<0,n=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(g[l].y-e.axisY.conversionParameters.minimum)+.5<<0;var b=u.getMarkerProperties(l,a,n,t);if(t.globalAlpha=u.fillOpacity,nt.drawMarker(b.x,b.y,b.ctx,b.type,b.size,b.color,b.borderColor,b.borderThickness),t.globalAlpha=1,!(Math.sqrt((y-a)*(y-a)+(v-n)*(v-n))<Math.min(b.size,5)&&g.length>Math.min(this.plotArea.width,this.plotArea.height))){var f=u.dataPointIds[l];this._eventManager.objectMap[f]={id:f,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:l,x1:a,y1:n};var T=d(f);O&&nt.drawMarker(b.x,b.y,this._eventManager.ghostCtx,b.type,b.size,T,T,b.borderThickness),(g[l].indexLabel||u.indexLabel)&&this._indexLabels.push({chartType:"scatter",dataPoint:g[l],dataSeries:u,point:{x:a,y:n},direction:1,color:o}),y=a,v=n}}}}t.restore(),O&&this._eventManager.ghostCtx.restore();var P={source:t,dest:this.plotArea.ctx,animationCallback:at.fadeInAnimation,easingFunction:at.easing.easeInQuad,animationBase:0};return P}},k.prototype.renderCandlestick=function(e){var t=e.targetCanvasCtx||this.plotArea.ctx,i=this._eventManager.ghostCtx,a=e.dataSeriesIndexes.length;if(!(0>=a)){var n,s,o,r,l,h,c=null,x=this.plotArea,p=0,m=(e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)<<0,.015*this.width),u=e.axisX.dataInfo.minDiff,g=x.width/Math.abs(e.axisX.maximum-e.axisX.minimum)*Math.abs(u)*.7<<0;g>m?g=m:1/0===u?g=m:1>g&&(g=1),t.save(),O&&i.save(),t.beginPath(),t.rect(x.x1,x.y1,x.width,x.height),t.clip(),O&&(i.rect(x.x1,x.y1,x.width,x.height),i.clip());for(var y=0;y<e.dataSeriesIndexes.length;y++){var v=e.dataSeriesIndexes[y],b=this.data[v],f=b.dataPoints;if(f.length>0){var T=g>5&&b.bevelEnabled?!0:!1;for(p=0;p<f.length;p++)if(h=f[p].getTime?f[p].x.getTime():f[p].x,!(h<e.axisX.dataInfo.viewPortMin||h>e.axisX.dataInfo.viewPortMax)&&null!==f[p].y&&f[p].y.length&&"number"==typeof f[p].y[0]&&"number"==typeof f[p].y[1]&&"number"==typeof f[p].y[2]&&"number"==typeof f[p].y[3]){n=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(h-e.axisX.conversionParameters.minimum)+.5<<0,s=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(f[p].y[0]-e.axisY.conversionParameters.minimum)+.5<<0,o=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(f[p].y[1]-e.axisY.conversionParameters.minimum)+.5<<0,r=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(f[p].y[2]-e.axisY.conversionParameters.minimum)+.5<<0,l=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(f[p].y[3]-e.axisY.conversionParameters.minimum)+.5<<0;var P=n-g/2<<0,M=P+g<<0;c=f[p].color?f[p].color:b._colorSet[0];var k=Math.round(Math.max(1,.15*g)),S=k%2===0?0:.5,C=b.dataPointIds[p];this._eventManager.objectMap[C]={id:C,objectType:"dataPoint",dataSeriesIndex:v,dataPointIndex:p,x1:P,y1:s,x2:M,y2:o,x3:n,y3:r,x4:n,y4:l,borderThickness:k,color:c},t.strokeStyle=c,t.beginPath(),t.lineWidth=k,i.lineWidth=Math.max(k,4),"candlestick"===b.type?(t.moveTo(n-S,o),t.lineTo(n-S,Math.min(s,l)),t.stroke(),t.moveTo(n-S,Math.max(s,l)),t.lineTo(n-S,r),t.stroke(),tt(t,P,Math.min(s,l),M,Math.max(s,l),f[p].y[0]<=f[p].y[3]?b.risingColor:c,k,c,T,T,!1,!1,b.fillOpacity),O&&(c=d(C),i.strokeStyle=c,i.moveTo(n-S,o),i.lineTo(n-S,Math.min(s,l)),i.stroke(),i.moveTo(n-S,Math.max(s,l)),i.lineTo(n-S,r),i.stroke(),tt(i,P,Math.min(s,l),M,Math.max(s,l),c,0,null,!1,!1,!1,!1))):"ohlc"===b.type&&(t.moveTo(n-S,o),t.lineTo(n-S,r),t.stroke(),t.beginPath(),t.moveTo(n,s),t.lineTo(P,s),t.stroke(),t.beginPath(),t.moveTo(n,l),t.lineTo(M,l),t.stroke(),O&&(c=d(C),i.strokeStyle=c,i.moveTo(n-S,o),i.lineTo(n-S,r),i.stroke(),i.beginPath(),i.moveTo(n,s),i.lineTo(P,s),i.stroke(),i.beginPath(),i.moveTo(n,l),i.lineTo(M,l),i.stroke())),(f[p].indexLabel||b.indexLabel)&&this._indexLabels.push({chartType:b.type,dataPoint:f[p],dataSeries:b,point:{x:P+(M-P)/2,y:o},direction:1,bounds:{x1:P,y1:Math.min(o,r),x2:M,y2:Math.max(o,r)},color:c})}}}t.restore(),O&&i.restore();var A={source:t,dest:this.plotArea.ctx,animationCallback:at.fadeInAnimation,easingFunction:at.easing.easeInQuad,animationBase:0};return A}},k.prototype.renderRangeColumn=function(e){var t=e.targetCanvasCtx||this.plotArea.ctx,i=e.dataSeriesIndexes.length;if(!(0>=i)){var a,n,s,o,r=null,l=this.plotArea,h=0,c=(e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)<<0,.03*this.width),x=e.axisX.dataInfo.minDiff,p=l.width/Math.abs(e.axisX.maximum-e.axisX.minimum)*Math.abs(x)/e.plotType.totalDataSeries*.9<<0;p>c?p=c:1/0===x?p=c:1>p&&(p=1),t.save(),O&&this._eventManager.ghostCtx.save(),t.beginPath(),t.rect(l.x1,l.y1,l.width,l.height),t.clip(),O&&(this._eventManager.ghostCtx.rect(l.x1,l.y1,l.width,l.height),this._eventManager.ghostCtx.clip());for(var m=0;m<e.dataSeriesIndexes.length;m++){var u=e.dataSeriesIndexes[m],g=this.data[u],y=g.dataPoints;if(y.length>0){var v=p>5&&g.bevelEnabled?!0:!1;for(h=0;h<y.length;h++)if(o=y[h].getTime?y[h].x.getTime():y[h].x,!(o<e.axisX.dataInfo.viewPortMin||o>e.axisX.dataInfo.viewPortMax)&&null!==y[h].y&&y[h].y.length&&"number"==typeof y[h].y[0]&&"number"==typeof y[h].y[1]){a=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(o-e.axisX.conversionParameters.minimum)+.5<<0,n=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(y[h].y[0]-e.axisY.conversionParameters.minimum)+.5<<0,s=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(y[h].y[1]-e.axisY.conversionParameters.minimum)+.5<<0;var n,s,b=a-e.plotType.totalDataSeries*p/2+(e.previousDataSeriesCount+m)*p<<0,f=b+p<<0;if(r=y[h].color?y[h].color:g._colorSet[h%g._colorSet.length],n>s){var T=n;n=s,s=T}var P=g.dataPointIds[h];this._eventManager.objectMap[P]={id:P,objectType:"dataPoint",dataSeriesIndex:u,dataPointIndex:h,x1:b,y1:n,x2:f,y2:s};var M=0;tt(t,b,n,f,s,r,M,r,v,v,!1,!1,g.fillOpacity),r=d(P),O&&tt(this._eventManager.ghostCtx,b,n,f,s,r,0,null,!1,!1,!1,!1),(y[h].indexLabel||g.indexLabel)&&(this._indexLabels.push({chartType:"rangeColumn",dataPoint:y[h],dataSeries:g,indexKeyword:0,point:{x:b+(f-b)/2,y:y[h].y[1]>=y[h].y[0]?s:n},direction:y[h].y[1]>=y[h].y[0]?-1:1,bounds:{x1:b,y1:Math.min(n,s),x2:f,y2:Math.max(n,s)},color:r}),this._indexLabels.push({chartType:"rangeColumn",dataPoint:y[h],dataSeries:g,indexKeyword:1,point:{x:b+(f-b)/2,y:y[h].y[1]>=y[h].y[0]?n:s},direction:y[h].y[1]>=y[h].y[0]?1:-1,bounds:{x1:b,y1:Math.min(n,s),x2:f,y2:Math.max(n,s)},color:r}))}}}t.restore(),O&&this._eventManager.ghostCtx.restore();var k={source:t,dest:this.plotArea.ctx,animationCallback:at.fadeInAnimation,easingFunction:at.easing.easeInQuad,animationBase:0};return k}},k.prototype.renderRangeBar=function(e){var t=e.targetCanvasCtx||this.plotArea.ctx,i=e.dataSeriesIndexes.length;if(!(0>=i)){var a,n,s,o,r=null,l=this.plotArea,h=0,c=(e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)<<0,Math.min(.15*this.height,this.plotArea.height/e.plotType.totalDataSeries*.9)<<0),x=e.axisX.dataInfo.minDiff,p=l.height/Math.abs(e.axisX.maximum-e.axisX.minimum)*Math.abs(x)/e.plotType.totalDataSeries*.9<<0;p>c?p=c:1/0===x?p=c:1>p&&(p=1),t.save(),O&&this._eventManager.ghostCtx.save(),t.beginPath(),t.rect(l.x1,l.y1,l.width,l.height),t.clip(),O&&(this._eventManager.ghostCtx.rect(l.x1,l.y1,l.width,l.height),this._eventManager.ghostCtx.clip());for(var m=0;m<e.dataSeriesIndexes.length;m++){var u=e.dataSeriesIndexes[m],g=this.data[u],y=g.dataPoints;if(y.length>0){var v=p>5&&g.bevelEnabled?!0:!1;for(t.strokeStyle="#4572A7 ",h=0;h<y.length;h++)if(o=y[h].getTime?y[h].x.getTime():y[h].x,!(o<e.axisX.dataInfo.viewPortMin||o>e.axisX.dataInfo.viewPortMax)&&null!==y[h].y&&y[h].y.length&&"number"==typeof y[h].y[0]&&"number"==typeof y[h].y[1]){a=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(y[h].y[0]-e.axisY.conversionParameters.minimum)+.5<<0,n=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(y[h].y[1]-e.axisY.conversionParameters.minimum)+.5<<0,s=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(o-e.axisX.conversionParameters.minimum)+.5<<0;var b=s-e.plotType.totalDataSeries*p/2+(e.previousDataSeriesCount+m)*p<<0,f=b+p<<0;if(a>n){var T=a;a=n,n=T}r=y[h].color?y[h].color:g._colorSet[h%g._colorSet.length],tt(t,a,b,n,f,r,0,null,v,!1,!1,!1,g.fillOpacity);var P=g.dataPointIds[h];this._eventManager.objectMap[P]={id:P,objectType:"dataPoint",dataSeriesIndex:u,dataPointIndex:h,x1:a,y1:b,x2:n,y2:f},r=d(P),O&&tt(this._eventManager.ghostCtx,a,b,n,f,r,0,null,!1,!1,!1,!1),(y[h].indexLabel||g.indexLabel)&&(this._indexLabels.push({chartType:"rangeBar",dataPoint:y[h],dataSeries:g,indexKeyword:0,point:{x:y[h].y[1]>=y[h].y[0]?a:n,y:b+(f-b)/2},direction:y[h].y[1]>=y[h].y[0]?-1:1,bounds:{x1:Math.min(a,n),y1:b,x2:Math.max(a,n),y2:f},color:r}),this._indexLabels.push({chartType:"rangeBar",dataPoint:y[h],dataSeries:g,indexKeyword:1,point:{x:y[h].y[1]>=y[h].y[0]?n:a,y:b+(f-b)/2},direction:y[h].y[1]>=y[h].y[0]?1:-1,bounds:{x1:Math.min(a,n),y1:b,x2:Math.max(a,n),y2:f},color:r}))}}}t.restore(),O&&this._eventManager.ghostCtx.restore();var M={source:t,dest:this.plotArea.ctx,animationCallback:at.fadeInAnimation,easingFunction:at.easing.easeInQuad,animationBase:0};return M}},k.prototype.renderRangeArea=function(e){function t(){if(T){var e=null;c.lineThickness>0&&i.stroke();for(var t=l.length-1;t>=0;t--)e=l[t],i.lineTo(e.x,e.y),n.lineTo(e.x,e.y);if(i.closePath(),i.globalAlpha=c.fillOpacity,i.fill(),i.globalAlpha=1,n.fill(),c.lineThickness>0){i.beginPath(),i.moveTo(e.x,e.y);for(var t=0;t<l.length;t++)e=l[t],i.lineTo(e.x,e.y);i.stroke()}i.beginPath(),i.moveTo(u,g),n.beginPath(),n.moveTo(u,g),T={x:u,y:g},l=[],l.push({x:u,y:y})}}var i=e.targetCanvasCtx||this.plotArea.ctx,a=e.dataSeriesIndexes.length;if(!(0>=a)){var n=this._eventManager.ghostCtx,s=(e.axisX.lineCoordinates,e.axisY.lineCoordinates,[]),o=this.plotArea;i.save(),O&&n.save(),i.beginPath(),i.rect(o.x1,o.y1,o.width,o.height),i.clip(),O&&(n.beginPath(),n.rect(o.x1,o.y1,o.width,o.height),n.clip());for(var r=0;r<e.dataSeriesIndexes.length;r++){var l=[],h=e.dataSeriesIndexes[r],c=this.data[h],x=c.dataPoints,p=c.id;this._eventManager.objectMap[p]={objectType:"dataSeries",dataSeriesIndex:h};var m=d(p);n.fillStyle=m,s=[];var u,g,y,v,b=!0,f=0,T=(e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)+.5<<0,null);if(x.length>0){var P=c._colorSet[f%c._colorSet.length];i.fillStyle=P,i.strokeStyle=P,i.lineWidth=c.lineThickness;for(var M=!0;f<x.length;f++)if(v=x[f].x.getTime?x[f].x.getTime():x[f].x,!(v<e.axisX.dataInfo.viewPortMin||v>e.axisX.dataInfo.viewPortMax))if(null!==x[f].y&&x[f].y.length&&"number"==typeof x[f].y[0]&&"number"==typeof x[f].y[1]){u=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(v-e.axisX.conversionParameters.minimum)+.5<<0,g=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(x[f].y[0]-e.axisY.conversionParameters.minimum)+.5<<0,y=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(x[f].y[1]-e.axisY.conversionParameters.minimum)+.5<<0,b||M?(i.beginPath(),i.moveTo(u,g),T={x:u,y:g},l=[],l.push({x:u,y:y}),O&&(n.beginPath(),n.moveTo(u,g)),b=!1,M=!1):(i.lineTo(u,g),l.push({x:u,y:y}),O&&n.lineTo(u,g),f%250==0&&t());var k=c.dataPointIds[f];if(this._eventManager.objectMap[k]={id:k,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:f,x1:u,y1:g,y2:y},0!==x[f].markerSize&&(x[f].markerSize>0||c.markerSize>0)){var S=c.getMarkerProperties(f,u,y,i);s.push(S);var C=d(k);O&&s.push({x:u,y:y,ctx:n,type:S.type,size:S.size,color:C,borderColor:C,borderThickness:S.borderThickness}),S=c.getMarkerProperties(f,u,g,i),s.push(S);var C=d(k);O&&s.push({x:u,y:g,ctx:n,type:S.type,size:S.size,color:C,borderColor:C,borderThickness:S.borderThickness})}(x[f].indexLabel||c.indexLabel)&&(this._indexLabels.push({chartType:"rangeArea",dataPoint:x[f],dataSeries:c,indexKeyword:0,point:{x:u,y:g},direction:x[f].y[0]<=x[f].y[1]?-1:1,color:P}),this._indexLabels.push({chartType:"rangeArea",dataPoint:x[f],dataSeries:c,indexKeyword:1,point:{x:u,y:y},direction:x[f].y[0]<=x[f].y[1]?1:-1,color:P}))}else t(),M=!0;t(),nt.drawMarkers(s)}}i.restore(),O&&this._eventManager.ghostCtx.restore();var A={source:i,dest:this.plotArea.ctx,animationCallback:at.xClipAnimation,easingFunction:at.easing.linear,animationBase:0};return A}},k.prototype.renderRangeSplineArea=function(e){function t(){var e=S(b,2);if(e.length>0){i.beginPath(),i.moveTo(e[0].x,e[0].y),O&&(n.beginPath(),n.moveTo(e[0].x,e[0].y));for(var t=0;t<e.length-3;t+=3)i.bezierCurveTo(e[t+1].x,e[t+1].y,e[t+2].x,e[t+2].y,e[t+3].x,e[t+3].y),O&&n.bezierCurveTo(e[t+1].x,e[t+1].y,e[t+2].x,e[t+2].y,e[t+3].x,e[t+3].y);h.lineThickness>0&&i.stroke(),e=S(f,2),i.lineTo(f[f.length-1].x,f[f.length-1].y);for(var t=e.length-1;t>2;t-=3)i.bezierCurveTo(e[t-1].x,e[t-1].y,e[t-2].x,e[t-2].y,e[t-3].x,e[t-3].y),O&&n.bezierCurveTo(e[t-1].x,e[t-1].y,e[t-2].x,e[t-2].y,e[t-3].x,e[t-3].y);if(i.closePath(),i.globalAlpha=h.fillOpacity,i.fill(),i.globalAlpha=1,h.lineThickness>0){i.beginPath(),i.moveTo(f[f.length-1].x,f[f.length-1].y);for(var t=e.length-1;t>2;t-=3)i.bezierCurveTo(e[t-1].x,e[t-1].y,e[t-2].x,e[t-2].y,e[t-3].x,e[t-3].y),O&&n.bezierCurveTo(e[t-1].x,e[t-1].y,e[t-2].x,e[t-2].y,e[t-3].x,e[t-3].y);i.stroke()}i.beginPath(),O&&(n.closePath(),n.fill())}}var i=e.targetCanvasCtx||this.plotArea.ctx,a=e.dataSeriesIndexes.length;if(!(0>=a)){var n=this._eventManager.ghostCtx,s=(e.axisX.lineCoordinates,e.axisY.lineCoordinates,[]),o=this.plotArea;i.save(),O&&n.save(),i.beginPath(),i.rect(o.x1,o.y1,o.width,o.height),i.clip(),O&&(n.beginPath(),n.rect(o.x1,o.y1,o.width,o.height),n.clip());for(var r=0;r<e.dataSeriesIndexes.length;r++){var l=e.dataSeriesIndexes[r],h=this.data[l],c=h.dataPoints,x=h.id;this._eventManager.objectMap[x]={objectType:"dataSeries",dataSeriesIndex:l};var p=d(x);n.fillStyle=p,s=[];var m,u,g,y,v=0,b=(e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(0-e.axisY.conversionParameters.minimum)+.5<<0,[]),f=[];if(c.length>0){for(color=h._colorSet[v%h._colorSet.length],i.fillStyle=color,i.strokeStyle=color,i.lineWidth=h.lineThickness;v<c.length;v++)if(y=c[v].x.getTime?c[v].x.getTime():c[v].x,!(y<e.axisX.dataInfo.viewPortMin||y>e.axisX.dataInfo.viewPortMax))if(null!==c[v].y&&c[v].y.length&&"number"==typeof c[v].y[0]&&"number"==typeof c[v].y[1]){m=e.axisX.conversionParameters.reference+e.axisX.conversionParameters.pixelPerUnit*(y-e.axisX.conversionParameters.minimum)+.5<<0,u=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(c[v].y[0]-e.axisY.conversionParameters.minimum)+.5<<0,g=e.axisY.conversionParameters.reference+e.axisY.conversionParameters.pixelPerUnit*(c[v].y[1]-e.axisY.conversionParameters.minimum)+.5<<0;var T=h.dataPointIds[v];if(this._eventManager.objectMap[T]={id:T,objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:v,x1:m,y1:u,y2:g},b[b.length]={x:m,y:u},f[f.length]={x:m,y:g},0!==c[v].markerSize&&(c[v].markerSize>0||h.markerSize>0)){var P=h.getMarkerProperties(v,m,u,i);s.push(P);var M=d(T);O&&s.push({x:m,y:u,ctx:n,type:P.type,size:P.size,color:M,borderColor:M,borderThickness:P.borderThickness});var P=h.getMarkerProperties(v,m,g,i);s.push(P);var M=d(T);O&&s.push({x:m,y:g,ctx:n,type:P.type,size:P.size,color:M,borderColor:M,borderThickness:P.borderThickness})}(c[v].indexLabel||h.indexLabel)&&(this._indexLabels.push({chartType:"splineArea",dataPoint:c[v],dataSeries:h,indexKeyword:0,point:{x:m,y:u},direction:c[v].y[0]<=c[v].y[1]?-1:1,color:color}),this._indexLabels.push({chartType:"splineArea",dataPoint:c[v],dataSeries:h,indexKeyword:1,point:{x:m,y:g},direction:c[v].y[0]<=c[v].y[1]?1:-1,color:color}))}else v>0&&(t(),b=[],f=[]);t(),nt.drawMarkers(s)}}i.restore(),O&&this._eventManager.ghostCtx.restore();var k={source:i,dest:this.plotArea.ctx,animationCallback:at.xClipAnimation,easingFunction:at.easing.linear,animationBase:0};return k}};var it=function(e,t,i,a,n,s,o,r){if("undefined"==typeof r&&(r=1),!O){var l=Number((o%(2*Math.PI)).toFixed(8)),h=Number((s%(2*Math.PI)).toFixed(8));h===l&&(o-=1e-4)}if(e.save(),e.globalAlpha=r,"pie"===n)e.beginPath(),e.moveTo(t.x,t.y),e.arc(t.x,t.y,i,s,o,!1),e.fillStyle=a,e.strokeStyle="white",e.lineWidth=2,e.closePath(),e.fill();else if("doughnut"===n){var d=.6;e.beginPath(),e.arc(t.x,t.y,i,s,o,!1),e.arc(t.x,t.y,d*i,o,s,!0),e.closePath(),e.fillStyle=a,e.strokeStyle="white",e.lineWidth=2,e.fill()}e.globalAlpha=1,e.restore()};k.prototype.renderPie=function(e){function t(){if(m&&u){var e=0,t=0,i=0,a=0;for(I=0;I<u.length;I++){var n=u[I],s=m.dataPointIds[I],o={id:s,objectType:"dataPoint",dataPointIndex:I,dataSeriesIndex:0};f.push(o);var r=n.indexLabel?n.indexLabel:m.indexLabel?m.indexLabel:n.label?n.label:m.label?m.label:"";c._eventManager.objectMap[s]=o,o.center={x:S.x,y:S.y},o.y=n.y,o.radius=C,o.indexLabelText=c.replaceKeywordsWithValue(r,n,m,I),o.indexLabelPlacement=m.indexLabelPlacement,o.indexLabelLineColor=n.indexLabelLineColor?n.indexLabelLineColor:m.indexLabelLineColor?m.indexLabelLineColor:n.color?n.color:m._colorSet[I%m._colorSet.length],o.indexLabelLineThickness=n.indexLabelLineThickness?n.indexLabelLineThickness:m.indexLabelLineThickness,o.indexLabelFontColor=n.indexLabelFontColor?n.indexLabelFontColor:m.indexLabelFontColor,o.indexLabelFontStyle=n.indexLabelFontStyle?n.indexLabelFontStyle:m.indexLabelFontStyle,o.indexLabelFontWeight=n.indexLabelFontWeight?n.indexLabelFontWeight:m.indexLabelFontWeight,o.indexLabelFontSize=n.indexLabelFontSize?n.indexLabelFontSize:m.indexLabelFontSize,o.indexLabelFontFamily=n.indexLabelFontFamily?n.indexLabelFontFamily:m.indexLabelFontFamily,o.indexLabelBackgroundColor=n.indexLabelBackgroundColor?n.indexLabelBackgroundColor:m.indexLabelBackgroundColor?m.indexLabelBackgroundColor:null,o.indexLabelMaxWidth=n.indexLabelMaxWidth?n.indexLabelMaxWidth:m.indexLabelMaxWidth?m.indexLabelMaxWidth:.33*v.width,o.indexLabelWrap="undefined"!=typeof n.indexLabelWrap?n.indexLabelWrap:m.indexLabelWrap,o.startAngle=0===I?m.startAngle?m.startAngle/180*Math.PI:0:f[I-1].endAngle,o.startAngle=(o.startAngle+2*Math.PI)%(2*Math.PI),o.endAngle=o.startAngle+2*Math.PI/w*Math.abs(n.y);var l=(o.endAngle+o.startAngle)/2;l=(l+2*Math.PI)%(2*Math.PI),o.midAngle=l,o.midAngle>Math.PI/2-M&&o.midAngle<Math.PI/2+M?((0===e||f[i].midAngle>o.midAngle)&&(i=I),e++):o.midAngle>3*Math.PI/2-M&&o.midAngle<3*Math.PI/2+M&&((0===t||f[a].midAngle>o.midAngle)&&(a=I),t++),o.hemisphere=l>Math.PI/2&&l<=3*Math.PI/2?"left":"right",o.indexLabelTextBlock=new A(c.plotArea.ctx,{fontSize:o.indexLabelFontSize,fontFamily:o.indexLabelFontFamily,fontColor:o.indexLabelFontColor,fontStyle:o.indexLabelFontStyle,fontWeight:o.indexLabelFontWeight,horizontalAlign:"left",backgroundColor:o.indexLabelBackgroundColor,maxWidth:o.indexLabelMaxWidth,maxHeight:o.indexLabelWrap?5*o.indexLabelFontSize:1.5*o.indexLabelFontSize,text:o.indexLabelText,padding:0,textBaseline:"top"}),o.indexLabelTextBlock.measureText()}var h=0,d=0,x=!1;for(I=0;I<u.length;I++){var o=f[(i+I)%u.length];e>1&&o.midAngle>Math.PI/2-M&&o.midAngle<Math.PI/2+M&&(e/2>=h&&!x?(o.hemisphere="right",h++):(o.hemisphere="left",x=!0))}for(x=!1,I=0;I<u.length;I++){var o=f[(a+I)%u.length];t>1&&o.midAngle>3*Math.PI/2-M&&o.midAngle<3*Math.PI/2+M&&(t/2>=d&&!x?(o.hemisphere="left",d++):(o.hemisphere="right",x=!0))}}}function i(){var e=c.plotArea.ctx;e.fillStyle="black",e.strokeStyle="grey";e.textBaseline="middle",e.lineJoin="round";var t=0;for(t=0;t<u.length;t++){var i=f[t];if(i.indexLabelText){i.indexLabelTextBlock.y-=i.indexLabelTextBlock.height/2;var a=0;if("left"===i.hemisphere)var a="inside"!==m.indexLabelPlacement?-(i.indexLabelTextBlock.width+g):-i.indexLabelTextBlock.width/2;else var a="inside"!==m.indexLabelPlacement?g:-i.indexLabelTextBlock.width/2;if(i.indexLabelTextBlock.x+=a,i.indexLabelTextBlock.render(!0),i.indexLabelTextBlock.x-=a,i.indexLabelTextBlock.y+=i.indexLabelTextBlock.height/2,"inside"!==i.indexLabelPlacement){var n=i.center.x+C*Math.cos(i.midAngle),s=i.center.y+C*Math.sin(i.midAngle);e.strokeStyle=i.indexLabelLineColor,e.lineWidth=i.indexLabelLineThickness,e.beginPath(),e.moveTo(n,s),e.lineTo(i.indexLabelTextBlock.x,i.indexLabelTextBlock.y),e.lineTo(i.indexLabelTextBlock.x+("left"===i.hemisphere?-g:g),i.indexLabelTextBlock.y),e.stroke()}e.lineJoin="miter"}}}function a(e){var t=c.plotArea.ctx;t.clearRect(v.x1,v.y1,v.width,v.height),t.fillStyle=c.backgroundColor,t.fillRect(v.x1,v.y1,v.width,v.height);for(var i=f[0].startAngle+2*Math.PI*e,a=0;a<u.length;a++){var n=0===a?f[a].startAngle:s,s=n+(f[a].endAngle-f[a].startAngle),o=!1;s>i&&(s=i,o=!0);var r=u[a].color?u[a].color:m._colorSet[a%m._colorSet.length];if(s>n&&it(c.plotArea.ctx,f[a].center,f[a].radius,r,m.type,n,s,m.fillOpacity),o)break}}function n(e){var t=c.plotArea.ctx;t.clearRect(v.x1,v.y1,v.width,v.height),t.fillStyle=c.backgroundColor,t.fillRect(v.x1,v.y1,v.width,v.height);for(var a=0;a<u.length;a++){var n=f[a].startAngle,s=f[a].endAngle;if(s>n){var o=.07*C*Math.cos(f[a].midAngle),r=.07*C*Math.sin(f[a].midAngle),l=!1;if(u[a].exploded?(Math.abs(f[a].center.x-(S.x+o))>1e-9||Math.abs(f[a].center.y-(S.y+r))>1e-9)&&(f[a].center.x=S.x+o*e,f[a].center.y=S.y+r*e,l=!0):(Math.abs(f[a].center.x-S.x)>0||Math.abs(f[a].center.y-S.y)>0)&&(f[a].center.x=S.x+o*(1-e),f[a].center.y=S.y+r*(1-e),l=!0),l){var h={};h.dataSeries=m,h.dataPoint=m.dataPoints[a],h.index=a,c._toolTip.highlightObjects([h])}var d=u[a].color?u[a].color:m._colorSet[a%m._colorSet.length];it(c.plotArea.ctx,f[a].center,f[a].radius,d,m.type,n,s,m.fillOpacity)}}i()}function s(e,t){var i={x1:e.indexLabelTextBlock.x,y1:e.indexLabelTextBlock.y-e.indexLabelTextBlock.height/2,x2:e.indexLabelTextBlock.x+e.indexLabelTextBlock.width,y2:e.indexLabelTextBlock.y+e.indexLabelTextBlock.height/2},a={x1:t.indexLabelTextBlock.x,y1:t.indexLabelTextBlock.y-t.indexLabelTextBlock.height/2,x2:t.indexLabelTextBlock.x+t.indexLabelTextBlock.width,y2:t.indexLabelTextBlock.y+t.indexLabelTextBlock.height/2};return i.x2<a.x1-g||i.x1>a.x2+g||i.y1>a.y2+g||i.y2<a.y1-g?!1:!0}function o(e,t){var i=0,a={y:e.indexLabelTextBlock.y,y1:e.indexLabelTextBlock.y-e.indexLabelTextBlock.height/2,y2:e.indexLabelTextBlock.y+e.indexLabelTextBlock.height/2},n={y:t.indexLabelTextBlock.y,y1:t.indexLabelTextBlock.y-t.indexLabelTextBlock.height/2,y2:t.indexLabelTextBlock.y+t.indexLabelTextBlock.height/2};return i=n.y>a.y?n.y1-a.y2:a.y1-n.y2}function r(e){for(var t=null,i=1;i<u.length;i++){if(t=(e+i+f.length)%f.length,f[t].hemisphere!==f[e].hemisphere){t=null;break}if(f[t].indexLabelText&&t!==e&&(o(f[t],f[e])<0||("right"===f[e].hemisphere?f[t].indexLabelTextBlock.y>=f[e].indexLabelTextBlock.y:f[t].indexLabelTextBlock.y<=f[e].indexLabelTextBlock.y)))break;
t=null}return t}function l(e){for(var t=null,i=1;i<u.length;i++){if(t=(e-i+f.length)%f.length,f[t].hemisphere!==f[e].hemisphere){t=null;break}if(f[t].indexLabelText&&f[t].hemisphere===f[e].hemisphere&&t!==e&&(o(f[t],f[e])<0||("right"===f[e].hemisphere?f[t].indexLabelTextBlock.y<=f[e].indexLabelTextBlock.y:f[t].indexLabelTextBlock.y>=f[e].indexLabelTextBlock.y)))break;t=null}return t}function h(e,t){t=t||0;var i=0,a=S.y-1*_,n=S.y+1*_;if(e>=0&&e<u.length){var s=f[e];if(0>t&&s.indexLabelTextBlock.y<a||t>0&&s.indexLabelTextBlock.y>n)return 0;var o=t,d=0,c=0,x=0,p=0,m=0;0>o?s.indexLabelTextBlock.y-s.indexLabelTextBlock.height/2>a&&s.indexLabelTextBlock.y-s.indexLabelTextBlock.height/2+o<a&&(o=-(a-(s.indexLabelTextBlock.y-s.indexLabelTextBlock.height/2+o))):s.indexLabelTextBlock.y+s.indexLabelTextBlock.height/2<a&&s.indexLabelTextBlock.y+s.indexLabelTextBlock.height/2+o>n&&(o=s.indexLabelTextBlock.y+s.indexLabelTextBlock.height/2+o-n);var g=s.indexLabelTextBlock.y+o,y=0;y="right"===s.hemisphere?S.x+Math.sqrt(Math.pow(_,2)-Math.pow(g-S.y,2)):S.x-Math.sqrt(Math.pow(_,2)-Math.pow(g-S.y,2)),c=S.x+C*Math.cos(s.midAngle),x=S.y+C*Math.sin(s.midAngle),d=Math.sqrt(Math.pow(y-c,2)+Math.pow(g-x,2)),m=Math.acos(C/_),p=Math.acos((_*_+C*C-d*d)/(2*C*_)),o=m>p?g-s.indexLabelTextBlock.y:0;var v,P,A=l(e),w=r(e),I=0,L=0;if(0>o){if(v="right"===s.hemisphere?A:w,i=o,null!==v){var B=-o,P=s.indexLabelTextBlock.y-s.indexLabelTextBlock.height/2-(f[v].indexLabelTextBlock.y+f[v].indexLabelTextBlock.height/2);T>P-B&&(I=-B,b++,L=h(v,I),+L.toFixed(k)>+I.toFixed(k)&&(i=P>T?-(P-T):-(B-(L-I))))}}else if(o>0&&(v="right"===s.hemisphere?w:A,i=o,null!==v)){var B=o,P=f[v].indexLabelTextBlock.y-f[v].indexLabelTextBlock.height/2-(s.indexLabelTextBlock.y+s.indexLabelTextBlock.height/2);T>P-B&&(I=B,b++,L=h(v,I),+L.toFixed(k)<+I.toFixed(k)&&(i=P>T?P-T:B-(I-L)))}if(i){var X=s.indexLabelTextBlock.y+i,F=0;if(F="right"===s.hemisphere?S.x+Math.sqrt(Math.pow(_,2)-Math.pow(X-S.y,2)):S.x-Math.sqrt(Math.pow(_,2)-Math.pow(X-S.y,2)),s.midAngle>Math.PI/2-M&&s.midAngle<Math.PI/2+M){var z=(e-1+f.length)%f.length,Y=f[z],D=f[(e+1+f.length)%f.length];"left"===s.hemisphere&&"right"===Y.hemisphere&&F>Y.indexLabelTextBlock.x?F=Y.indexLabelTextBlock.x-15:"right"===s.hemisphere&&"left"===D.hemisphere&&F<D.indexLabelTextBlock.x&&(F=D.indexLabelTextBlock.x+15)}else if(s.midAngle>3*Math.PI/2-M&&s.midAngle<3*Math.PI/2+M){var z=(e-1+f.length)%f.length,Y=f[z],D=f[(e+1+f.length)%f.length];"right"===s.hemisphere&&"left"===Y.hemisphere&&F<Y.indexLabelTextBlock.x?F=Y.indexLabelTextBlock.x+15:"left"===s.hemisphere&&"right"===D.hemisphere&&F>D.indexLabelTextBlock.x&&(F=D.indexLabelTextBlock.x-15)}s.indexLabelTextBlock.y=X,s.indexLabelTextBlock.x=F,s.indexLabelAngle=Math.atan2(s.indexLabelTextBlock.y-S.y,s.indexLabelTextBlock.x-S.x)}}return i}function d(){function e(e,t,i){for(var a=[],n=0,s=t;!0&&(a.push(f[s]),s!==i);s=(s+1+u.length)%u.length);for(a.sort(function(e,t){return e.y-t.y}),s=0;s<a.length;s++){var o=a[s];if(!(e>n))break;n+=o.indexLabelTextBlock.height,o.indexLabelTextBlock.text="",o.indexLabelText="",o.indexLabelTextBlock.measureText()}}var t=c.plotArea.ctx;t.fillStyle="grey",t.strokeStyle="grey";var i=16;t.font=i+"px Arial",t.textBaseline="middle";var a=0,n=0,l=0;for(n=0;10>n&&(1>n||l>0);n++){if(C-=l,l=0,"inside"!==m.indexLabelPlacement){for(_=C*P,a=0;a<u.length;a++){var d=f[a];d.indexLabelTextBlock.x=S.x+_*Math.cos(d.midAngle),d.indexLabelTextBlock.y=S.y+_*Math.sin(d.midAngle),d.indexLabelAngle=d.midAngle,d.radius=C}var x,p;for(a=0;a<u.length;a++){var d=f[a],y=r(a);if(null!==y){x=f[a],p=f[y];var b=0;if(b=o(x,p)-T,0>b){for(var M=0,A=0,w=0;w<u.length;w++)w!==a&&f[w].hemisphere===d.hemisphere&&(f[w].indexLabelTextBlock.y<d.indexLabelTextBlock.y?M++:A++);var I=b/(M+A||1)*A,L=-1*(b-I),B=0,X=0;"right"===d.hemisphere?(B=h(a,I),L=-1*(b-B),X=h(y,L),+X.toFixed(k)<+L.toFixed(k)&&+B.toFixed(k)<=+I.toFixed(k)&&h(a,-(L-X))):(B=h(y,I),L=-1*(b-B),X=h(a,L),+X.toFixed(k)<+L.toFixed(k)&&+B.toFixed(k)<=+I.toFixed(k)&&h(y,-(L-X)))}}}}else for(a=0;a<u.length;a++){var d=f[a];_="pie"===m.type?.7*C:.8*C;var F=S.x+_*Math.cos(d.midAngle),z=S.y+_*Math.sin(d.midAngle);d.indexLabelTextBlock.x=F,d.indexLabelTextBlock.y=z}for(a=0;a<u.length;a++){d=f[a];var Y=d.indexLabelTextBlock.measureText();if(0!==Y.height&&0!==Y.width){var D=0,E=0;"right"===d.hemisphere?(D=v.x2-(d.indexLabelTextBlock.x+d.indexLabelTextBlock.width+g),D*=-1):D=v.x1-(d.indexLabelTextBlock.x-d.indexLabelTextBlock.width-g),D>0&&(Math.abs(d.indexLabelTextBlock.y-d.indexLabelTextBlock.height/2-S.y)<C||Math.abs(d.indexLabelTextBlock.y+d.indexLabelTextBlock.height/2-S.y)<C)&&(E=D/Math.abs(Math.cos(d.indexLabelAngle)),E>9&&(E=.3*E),E>l&&(l=E));var O=0,W=0;d.indexLabelAngle>0&&d.indexLabelAngle<Math.PI?(O=v.y2-(d.indexLabelTextBlock.y+d.indexLabelTextBlock.height/2+5),O*=-1):O=v.y1-(d.indexLabelTextBlock.y-d.indexLabelTextBlock.height/2-5),O>0&&Math.abs(d.indexLabelTextBlock.x-S.x)<C&&(W=O/Math.abs(Math.sin(d.indexLabelAngle)),W>9&&(W=.3*W),W>l&&(l=W))}}for(var V=-1,U=-1,R=0,w=0;w<u.length;w++)if(x=f[w],x.indexLabelText){var H=r(w);if(null!==H){var p=f[H];b=0,b=o(x,p),0>b&&s(x,p)?(0>V&&(V=w),H!==V&&(U=H),R+=-b):R>0&&(e(R,V,U),V=-1,U=-1,R=0)}}R>0&&e(R,V,U)}}var c=this,x=e.dataSeriesIndexes.length;if(!(0>=x)){for(var p=e.dataSeriesIndexes[0],m=this.data[p],u=m.dataPoints,g=10,y=500,v=this.plotArea,b=0,f=[],T=2,P=1.3,M=20/180*Math.PI,k=6,S={x:(v.x2+v.x1)/2,y:(v.y2+v.y1)/2},C="inside"===m.indexLabelPlacement?.92*Math.min(v.width,v.height)/2:.8*Math.min(v.width,v.height)/2,_=C*P,w=0,I=0;I<u.length;I++)w+=Math.abs(u[I].y);0!==w&&(this.pieDoughnutClickHandler=function(e){if(!c.isAnimating){{var t=e.dataPointIndex,i=e.dataPoint,a=this;a.dataPointIds[t]}i.exploded=i.exploded?!1:!0,a.dataPoints.length>1&&c._animator.animate(0,y,function(e){n(e)})}},t(),d(),this.disableToolTip=!0,this._animator.animate(0,this.animatedRender?this.animationDuration:0,function(e){a(e)},function(){c.disableToolTip=!1,c._animator.animate(0,c.animatedRender?y:0,function(e){n(e)})}))}},k.prototype.animationRequestId=null,k.prototype.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),k.prototype.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),C.prototype.registerSpace=function(e,t){"top"===e?this._topOccupied+=t.height:"bottom"===e?this._bottomOccupied+=t.height:"left"===e?this._leftOccupied+=t.width:"right"===e&&(this._rightOccupied+=t.width)},C.prototype.unRegisterSpace=function(e,t){"top"===e?this._topOccupied-=t.height:"bottom"===e?this._bottomOccupied-=t.height:"left"===e?this._leftOccupied-=t.width:"right"===e&&(this._rightOccupied-=t.width)},C.prototype.getFreeSpace=function(){return{x1:this._leftOccupied,y1:this._topOccupied,x2:this.chart.width-this._rightOccupied,y2:this.chart.height-this._bottomOccupied,width:this.chart.width-this._rightOccupied-this._leftOccupied,height:this.chart.height-this._bottomOccupied-this._topOccupied}},C.prototype.reset=function(){this._topOccupied=0,this._bottomOccupied=3,this._leftOccupied=0,this._rightOccupied=0},e(A,M),A.prototype.render=function(e){e&&this.ctx.save();var t=this.ctx.font;this.ctx.textBaseline=this.textBaseline;var i=0;this._isDirty&&this.measureText(this.ctx),this.ctx.translate(this.x,this.y+i),"middle"===this.textBaseline&&(i=-this._lineHeight/2),this.ctx.font=this._getFontString(),this.ctx.rotate(Math.PI/180*this.angle);var a=0,n=this.padding,s=null;(this.borderThickness>0&&this.borderColor||this.backgroundColor)&&this.ctx.roundRect(0,i,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,this.borderColor),this.ctx.fillStyle=this.fontColor;for(var o=0;o<this._wrappedText.lines.length;o++)s=this._wrappedText.lines[o],"right"===this.horizontalAlign?a=this.width-s.width-this.padding:"left"===this.horizontalAlign?a=this.padding:"center"===this.horizontalAlign&&(a=(this.width-2*this.padding)/2-s.width/2+this.padding),this.ctx.fillText(s.text,a,n),n+=s.height;this.ctx.font=t,e&&this.ctx.restore()},A.prototype.setText=function(e){this.text=e,this._isDirty=!0,this._wrappedText=null},A.prototype.measureText=function(){if(null===this.maxWidth)throw"Please set maxWidth and height for TextBlock";return this._wrapText(this.ctx),this._isDirty=!1,{width:this.width,height:this.height}},A.prototype._getLineWithWidth=function(e,t,i){if(e=String(e),i=i||!1,!e)return{text:"",width:0};var a=0,n=0,s=e.length-1,o=1/0;for(this.ctx.font=this._getFontString();s>=n;){o=Math.floor((n+s)/2);var r=e.substr(0,o+1);if(a=this.ctx.measureText(r).width,t>a)n=o+1;else{if(!(a>t))break;s=o-1}}a>t&&r.length>1&&(r=r.substr(0,r.length-1),a=this.ctx.measureText(r).width);var l=!0;if((r.length===e.length||" "===e[r.length])&&(l=!1),l){var h=r.split(" ");h.length>1&&h.pop(),r=h.join(" "),a=this.ctx.measureText(r).width}return{text:r,width:a}},A.prototype._wrapText=function(){var e=new String(o(this.text)),t=[],i=this.ctx.font,a=0,n=0;for(this.ctx.font=this._getFontString();e.length>0;){var s=this.maxWidth-2*this.padding,r=this.maxHeight-2*this.padding,l=this._getLineWithWidth(e,s,!1);if(l.height=this._lineHeight,t.push(l),n=Math.max(n,l.width),a+=l.height,e=o(e.slice(l.text.length,e.length)),r&&a>r){var l=t.pop();a-=l.height}}this._wrappedText={lines:t,width:n,height:a},this.width=n+2*this.padding,this.height=a+2*this.padding,this.ctx.font=i},A.prototype._getFontString=function(){return u("",this,null)},e(_,M),_.prototype.render=function(){if(this.text){var e,t,i=this.chart.layoutManager.getFreeSpace(),a=0,n=0,s=0,o=0,r=0;"top"===this.verticalAlign||"bottom"===this.verticalAlign?(o=i.width-2*this.margin,r=.5*i.height-2*this.margin,s=0):"center"===this.verticalAlign&&("left"===this.horizontalAlign||"right"===this.horizontalAlign?(o=i.height-2*this.margin,r=.5*i.width-2*this.margin):"center"===this.horizontalAlign&&(o=i.width-2*this.margin,r=.5*i.height-2*this.margin));var l=new A(this.ctx,{fontSize:this.fontSize,fontFamily:this.fontFamily,fontColor:this.fontColor,fontStyle:this.fontStyle,fontWeight:this.fontWeight,horizontalAlign:this.horizontalAlign,verticalAlign:this.verticalAlign,borderColor:this.borderColor,borderThickness:this.borderThickness,backgroundColor:this.backgroundColor,maxWidth:o,maxHeight:r,cornerRadius:this.cornerRadius,text:this.text,padding:this.padding,textBaseline:"top"}),h=l.measureText();"top"===this.verticalAlign||"bottom"===this.verticalAlign?("top"===this.verticalAlign?(n=this.margin,t="top"):"bottom"===this.verticalAlign&&(n=i.y2-this.margin-h.height,t="bottom"),"left"===this.horizontalAlign?a=i.x1+this.margin:"center"===this.horizontalAlign?a=i.x1+(o/2-h.width/2)+this.margin:"right"===this.horizontalAlign&&(a=i.x2-this.margin-h.width),e=this.horizontalAlign,this.width=h.width,this.height=h.height):"center"===this.verticalAlign&&("left"===this.horizontalAlign?(a=i.x1+this.margin,n=i.y2-this.margin-(o/2-h.width/2),s=-90,t="left",this.width=h.height,this.height=h.width):"right"===this.horizontalAlign?(a=i.x2-this.margin,n=i.y1+this.margin+(o/2-h.width/2),s=90,t="right",this.width=h.height,this.height=h.width):"center"===this.horizontalAlign&&(n=i.y1+(i.height/2-h.height/2),a=i.x1+(i.width/2-h.width/2),t="center",this.width=h.width,this.height=h.height),e="center"),l.x=a,l.y=n,l.angle=s,l.horizontalAlign=e,l.render(!0),this.chart.layoutManager.registerSpace(t,{width:this.width+2*this.margin,height:this.height+2*this.margin}),this.bounds={x1:a,y1:n,x2:a+this.width,y2:n+this.height},this.ctx.textBaseline="top"}},e(w,M),w.prototype.render=function(){var e=this.chart.layoutManager.getFreeSpace(),t=null,i=0,a=0,n=0,s=0,o=[],r=[];"top"===this.verticalAlign||"bottom"===this.verticalAlign?(this.orientation="horizontal",t=this.verticalAlign,n=.9*e.width,s=.5*e.height):"center"===this.verticalAlign&&(this.orientation="vertical",t=this.horizontalAlign,n=.5*e.width,s=.9*e.height);for(var l=0;l<this.dataSeries.length;l++){{var h=this.dataSeries[l],c=h.legendMarkerType?h.legendMarkerType:"line"!==h.type&&"stepLine"!==h.type&&"spline"!==h.type&&"scatter"!==h.type&&"bubble"!==h.type||!h.markerType?L.getDefaultLegendMarker(h.type):h.markerType,x=h.legendText?h.legendText:h.name,p=h.legendMarkerColor?h.legendMarkerColor:h.markerColor?h.markerColor:h._colorSet[0],m=h.markerSize||"line"!==h.type&&"stepLine"!==h.type&&"spline"!==h.type?.6*this.lineHeight:0,u=h.legendMarkerBorderColor?h.legendMarkerBorderColor:h.markerBorderColor,g=h.legendMarkerBorderThickness?h.legendMarkerBorderThickness:h.markerBorderThickness?Math.max(1,Math.round(.2*m)):0;h._colorSet[0]}if("pie"!==h.type&&"doughnut"!==h.type&&"funnel"!==h.type){var y={markerType:c,markerColor:p,text:x,textBlock:null,chartType:h.type,markerSize:m,lineColor:h._colorSet[0],dataSeriesIndex:h.index,dataPointIndex:null,markerBorderColor:u,markerBorderThickness:g};o.push(y)}else for(var v=0;v<h.dataPoints.length;v++){var b=h.dataPoints[v];c=b.legendMarkerType?b.legendMarkerType:h.legendMarkerType?h.legendMarkerType:L.getDefaultLegendMarker(h.type);var x=b.legendText?b.legendText:h.legendText?h.legendText:b.name?b.name:"DataPoint: "+(v+1),p=b.legendMarkerColor?b.legendMarkerColor:h.legendMarkerColor?h.legendMarkerColor:b.color?b.color:h.color?h.color:h._colorSet[v%h._colorSet.length],m=0===b.markerSize||0===h.markerSize&&!b.markerSize?0:.6*this.lineHeight,u=b.legendMarkerBorderColor?b.legendMarkerBorderColor:h.legendMarkerBorderColor?h.legendMarkerBorderColor:b.markerBorderColor?b.markerBorderColor:h.markerBorderColor,g=b.legendMarkerBorderThickness?b.legendMarkerBorderThickness:h.legendMarkerBorderThickness?h.legendMarkerBorderThickness:b.markerBorderThickness||h.markerBorderThickness?Math.max(1,Math.round(.2*m)):0,y={markerType:c,markerColor:p,text:x,textBlock:null,chartType:h.type,markerSize:m,dataSeriesIndex:l,dataPointIndex:v,markerBorderColor:u,markerBorderThickness:g};o.push(y)}y=null}if(o.length>0){for(var f=null,T=0,l=0;l<o.length;l++){var y=o[l];"horizontal"===this.orientation?(y.textBlock=new A(this.ctx,{x:0,y:0,maxWidth:n,maxHeight:this.lineHeight,angle:0,text:y.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"top"}),y.textBlock.measureText(),(!f||f.width+y.textBlock.width+(0===f.width?0:this.horizontalSpacing)>n)&&(f={items:[],width:0},r.push(f),this.height=r.length*(y.textBlock.height+5)),y.textBlock.x=f.width,y.textBlock.y=0,f.width+=Math.round(y.textBlock.width+y.textBlock._lineHeight+(0===f.width?0:.5*y.textBlock._lineHeight)),f.items.push(y),this.width=Math.max(f.width,this.width)):(this.height+this.lineHeight<s?(f={items:[],width:0},r.push(f),this.height=r.length*this.lineHeight):(f=r[T],T=(T+1)%r.length),y.textBlock=new A(this.ctx,{x:0,y:0,maxWidth:n,maxHeight:1.5*this.fontSize,angle:0,text:y.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"top"}),y.textBlock.measureText(),y.textBlock.x=f.width,y.textBlock.y=0,f.width+=y.textBlock.width+y.textBlock._lineHeight+(0===f.width?0:.5*y.textBlock._lineHeight),f.items.push(y),this.width=Math.max(f.width,this.width))}this.height=r.length*this.lineHeight}"top"===this.verticalAlign?(a="left"===this.horizontalAlign?e.x1+2:"right"===this.horizontalAlign?e.x2-this.width-2:e.x1+e.width/2-this.width/2,i=e.y1):"center"===this.verticalAlign?(a="left"===this.horizontalAlign?e.x1+2:"right"===this.horizontalAlign?e.x2-this.width-2:e.x1+e.width/2-this.width/2,i=e.y1+e.height/2-this.height/2):"bottom"===this.verticalAlign&&(a="left"===this.horizontalAlign?e.x1+2:"right"===this.horizontalAlign?e.x2-this.width-2:e.x1+e.width/2-this.width/2,i=e.y2-this.height-5),this.items=o;for(var l=0;l<this.items.length;l++){var y=o[l];y.id=++this.chart._eventManager.lastObjectId,this.chart._eventManager.objectMap[y.id]={id:y.id,objectType:"legendItem",legendItemIndex:l,dataSeriesIndex:y.dataSeriesIndex,dataPointIndex:y.dataPointIndex}}for(var l=0;l<r.length;l++)for(var f=r[l],P=0;P<f.items.length;P++){var y=f.items[P],M=y.textBlock.x+a+(0===P?.2*y.markerSize:.4*this.lineHeight+.2*y.markerSize),k=i+l*this.lineHeight,S=M;this.chart.data[y.dataSeriesIndex].visible||(this.ctx.globalAlpha=.5),("line"===y.chartType||"stepLine"===y.chartType||"spline"===y.chartType)&&(this.ctx.strokeStyle=y.lineColor,this.ctx.lineWidth=Math.ceil(this.lineHeight/8),this.ctx.beginPath(),this.ctx.moveTo(M-.1*this.lineHeight,k+this.lineHeight/2),this.ctx.lineTo(M+.7*this.lineHeight,k+this.lineHeight/2),this.ctx.stroke(),S-=.1*this.lineHeight),nt.drawMarker(M+y.markerSize/2,k+this.lineHeight/2,this.ctx,y.markerType,y.markerSize,y.markerColor,y.markerBorderColor,y.markerBorderThickness),y.textBlock.x=M+Math.round(.9*this.lineHeight),y.textBlock.y=k,y.textBlock.render(!0),this.chart.data[y.dataSeriesIndex].visible||(this.ctx.globalAlpha=1);var C=d(y.id);this.ghostCtx.fillStyle=C,this.ghostCtx.beginPath(),this.ghostCtx.fillRect(S,y.textBlock.y,y.textBlock.x+y.textBlock.width-S,y.textBlock.height),y.x1=this.chart._eventManager.objectMap[y.id].x1=S,y.y1=this.chart._eventManager.objectMap[y.id].y1=y.textBlock.y,y.x2=this.chart._eventManager.objectMap[y.id].x2=y.textBlock.x+y.textBlock.width,y.y2=this.chart._eventManager.objectMap[y.id].y2=y.textBlock.y+y.textBlock.height}this.chart.layoutManager.registerSpace(t,{width:this.width+2+2,height:this.height+5+5}),this.bounds={x1:a,y1:i,x2:a+this.width,y2:i+this.height}},e(I,M),I.prototype.render=function(){var e=this.chart.layoutManager.getFreeSpace();this.ctx.fillStyle="red",this.ctx.fillRect(e.x1,e.y1,e.x2,e.y2)},e(L,M),L.prototype.getDefaultAxisPlacement=function(){var e=this.type;return"column"===e||"line"===e||"stepLine"===e||"spline"===e||"area"===e||"stepArea"===e||"splineArea"===e||"stackedColumn"===e||"stackedLine"===e||"bubble"===e||"scatter"===e||"stackedArea"===e||"stackedColumn100"===e||"stackedLine100"===e||"stackedArea100"===e||"candlestick"===e||"ohlc"===e||"rangeColumn"===e||"rangeArea"===e||"rangeSplineArea"===e?"normal":"bar"===e||"stackedBar"===e||"stackedBar100"===e||"rangeBar"===e?"xySwapped":"pie"===e||"doughnut"===e||"funnel"===e?"none":(window.console.log("Unknown Chart Type: "+e),null)},L.getDefaultLegendMarker=function(e){return"column"===e||"stackedColumn"===e||"stackedLine"===e||"bar"===e||"stackedBar"===e||"stackedBar100"===e||"bubble"===e||"scatter"===e||"stackedColumn100"===e||"stackedLine100"===e||"stepArea"===e||"candlestick"===e||"ohlc"===e||"rangeColumn"===e||"rangeBar"===e||"rangeArea"===e||"rangeSplineArea"===e?"square":"line"===e||"stepLine"===e||"spline"===e||"pie"===e||"doughnut"===e||"funnel"===e?"circle":"area"===e||"splineArea"===e||"stackedArea"===e||"stackedArea100"===e?"triangle":(window.console.log("Unknown Chart Type: "+e),null)},L.prototype.getDataPointAtX=function(e,t){if(!this.dataPoints||0===this.dataPoints.length)return null;var i={dataPoint:null,distance:1/0,index:0/0},a=null,n=0,s=0,o=1,r=1/0,l=0,h=0,d=1e3,c=0;if("none"!==this.chart.plotInfo.axisPlacement){var x=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x;c=x>0?Math.min(Math.max((this.dataPoints.length-1)/x*(e-this.dataPoints[0].x)>>0,0),this.dataPoints.length):0}for(;;){if(s=o>0?c+n:c-n,s>=0&&s<this.dataPoints.length){a=this.dataPoints[s];var p=Math.abs(a.x-e);p<i.distance&&(i.dataPoint=a,i.distance=p,i.index=s);var m=Math.abs(a.x-e);if(r>=m?r=m:o>0?l++:h++,l>d&&h>d)break}else if(0>c-n&&c+n>=this.dataPoints.length)break;-1===o?(n++,o=1):o=-1}return t||i.dataPoint.x!==e?t&&null!==i.dataPoint?i:null:i},L.prototype.getDataPointAtXY=function(e,t,i){if(!this.dataPoints||0===this.dataPoints.length)return null;i=i||!1;var a=[],n=0,s=0,o=1,r=!1,l=1/0,h=0,d=0,c=1e3,x=0;if("none"!==this.chart.plotInfo.axisPlacement){var p=this.chart.axisX.getXValueAt({x:e,y:t}),m=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x;x=m>0?Math.min(Math.max((this.dataPoints.length-1)/m*(p-this.dataPoints[0].x)>>0,0),this.dataPoints.length):0}for(;;){if(s=o>0?x+n:x-n,s>=0&&s<this.dataPoints.length){var u=this.dataPointIds[s],y=this.chart._eventManager.objectMap[u],v=this.dataPoints[s],b=null;if(y){switch(this.type){case"column":case"stackedColumn":case"stackedColumn100":case"bar":case"stackedBar":case"stackedBar100":case"rangeColumn":case"rangeBar":e>=y.x1&&e<=y.x2&&t>=y.y1&&t<=y.y2&&(a.push({dataPoint:v,dataPointIndex:s,dataSeries:this,distance:Math.min(Math.abs(y.x1-e),Math.abs(y.x2-e),Math.abs(y.y1-t),Math.abs(y.y2-t))}),r=!0);break;case"line":case"stepLine":case"spline":case"area":case"stepArea":case"stackedArea":case"stackedArea100":case"splineArea":case"scatter":var f=g("markerSize",v,this)||4,T=i?20:f;b=Math.sqrt(Math.pow(y.x1-e,2)+Math.pow(y.y1-t,2)),T>=b&&a.push({dataPoint:v,dataPointIndex:s,dataSeries:this,distance:b});var P=Math.abs(y.x1-e);l>=P?l=P:o>0?h++:d++,f/2>=b&&(r=!0);break;case"rangeArea":case"rangeSplineArea":var f=g("markerSize",v,this)||4,T=i?20:f;b=Math.min(Math.sqrt(Math.pow(y.x1-e,2)+Math.pow(y.y1-t,2)),Math.sqrt(Math.pow(y.x1-e,2)+Math.pow(y.y2-t,2))),T>=b&&a.push({dataPoint:v,dataPointIndex:s,dataSeries:this,distance:b});var P=Math.abs(y.x1-e);l>=P?l=P:o>0?h++:d++,f/2>=b&&(r=!0);break;case"bubble":var f=y.size;b=Math.sqrt(Math.pow(y.x1-e,2)+Math.pow(y.y1-t,2)),f/2>=b&&(a.push({dataPoint:v,dataPointIndex:s,dataSeries:this,distance:b}),r=!0);break;case"pie":case"doughnut":var M=y.center,k="doughnut"===this.type?.6*y.radius:0;if(b=Math.sqrt(Math.pow(M.x-e,2)+Math.pow(M.y-t,2)),b<y.radius&&b>k){var S=t-M.y,C=e-M.x,A=Math.atan2(S,C);0>A&&(A+=2*Math.PI),A=Number(((A/Math.PI*180%360+360)%360).toFixed(12));var _=Number(((y.startAngle/Math.PI*180%360+360)%360).toFixed(12)),w=Number(((y.endAngle/Math.PI*180%360+360)%360).toFixed(12));0===w&&y.endAngle>1&&(w=360),_>=w&&0!==v.y&&(w+=360,_>A&&(A+=360)),A>_&&w>A&&(a.push({dataPoint:v,dataPointIndex:s,dataSeries:this,distance:0}),r=!0)}break;case"candlestick":(e>=y.x1-y.borderThickness/2&&e<=y.x2+y.borderThickness/2&&t>=y.y2-y.borderThickness/2&&t<=y.y3+y.borderThickness/2||Math.abs(y.x2-e+y.x1-e)<y.borderThickness&&t>=y.y1&&t<=y.y4)&&(a.push({dataPoint:v,dataPointIndex:s,dataSeries:this,distance:Math.min(Math.abs(y.x1-e),Math.abs(y.x2-e),Math.abs(y.y2-t),Math.abs(y.y3-t))}),r=!0);break;case"ohlc":(Math.abs(y.x2-e+y.x1-e)<y.borderThickness&&t>=y.y2&&t<=y.y3||e>=y.x1&&e<=(y.x2+y.x1)/2&&t>=y.y1-y.borderThickness/2&&t<=y.y1+y.borderThickness/2||e>=(y.x1+y.x2)/2&&e<=y.x2&&t>=y.y4-y.borderThickness/2&&t<=y.y4+y.borderThickness/2)&&(a.push({dataPoint:v,dataPointIndex:s,dataSeries:this,distance:Math.min(Math.abs(y.x1-e),Math.abs(y.x2-e),Math.abs(y.y2-t),Math.abs(y.y3-t))}),r=!0)}if(r||h>c&&d>c)break}}else if(0>x-n&&x+n>=this.dataPoints.length)break;-1===o?(n++,o=1):o=-1}for(var I=null,L=0;L<a.length;L++)I?a[L].distance<=I.distance&&(I=a[L]):I=a[L];return I},L.prototype.getMarkerProperties=function(e,t,i,a){var n=this.dataPoints,s=this,o=n[e].markerColor?n[e].markerColor:s.markerColor?s.markerColor:n[e].color?n[e].color:s.color?s.color:s._colorSet[e%s._colorSet.length],r=n[e].markerBorderColor?n[e].markerBorderColor:s.markerBorderColor?s.markerBorderColor:null,l=n[e].markerBorderThickness?n[e].markerBorderThickness:s.markerBorderThickness?s.markerBorderThickness:null,h=n[e].markerType?n[e].markerType:s.markerType,d=n[e].markerSize?n[e].markerSize:s.markerSize;return{x:t,y:i,ctx:a,type:h,size:d,color:o,borderColor:r,borderThickness:l}},e(B,M),B.prototype.createLabels=function(){var e,t,i=0,n=0,s=0,o=0;if("bottom"===this._position||"top"===this._position?(o=this.lineCoordinates.width/Math.abs(this.maximum-this.minimum)*this.interval,n=this.labelAutoFit?"undefined"==typeof this._options.labelMaxWidth?.9*o>>0:this.labelMaxWidth:"undefined"==typeof this._options.labelMaxWidth?.7*this.chart.width>>0:this.labelMaxWidth,s="undefined"==typeof this._options.labelWrap||this.labelWrap?.5*this.chart.height>>0:1.5*this.labelFontSize):("left"===this._position||"right"===this._position)&&(o=this.lineCoordinates.height/Math.abs(this.maximum-this.minimum)*this.interval,n=this.labelAutoFit?"undefined"==typeof this._options.labelMaxWidth?.3*this.chart.width>>0:this.labelMaxWidth:"undefined"==typeof this._options.labelMaxWidth?.5*this.chart.width>>0:this.labelMaxWidth,s="undefined"==typeof this._options.labelWrap||this.labelWrap?2*o>>0:1.5*this.labelFontSize),"axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType)for(t=a(new Date(this.maximum),this.interval,this.intervalType),i=this.intervalstartTimePercent;t>i;a(i,this.interval,this.intervalType)){var r=i.getTime(),l="axisX"===this.type&&this.labels[r]?this.labels[r]:K(i,this.valueFormatString,this.chart._cultureInfo);e=new A(this.ctx,{x:0,y:0,maxWidth:n,maxHeight:s,angle:this.labelAngle,text:this.prefix+l+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),this._labels.push({position:i.getTime(),textBlock:e,effectiveHeight:null})}else{if(t=this.maximum,this.labels&&this.labels.length){var h=Math.ceil(this.interval),d=Math.ceil(this.intervalstartTimePercent),c=!1;for(i=d;i<this.maximum;i+=h){if(!this.labels[i]){c=!1;break}c=!0}c&&(this.interval=h,this.intervalstartTimePercent=d)}for(i=this.intervalstartTimePercent;t>=i;i=parseFloat((i+this.interval).toFixed(14))){var l="axisX"===this.type&&this.labels[i]?this.labels[i]:G(i,this.valueFormatString,this.chart._cultureInfo);e=new A(this.ctx,{x:0,y:0,maxWidth:n,maxHeight:s,angle:this.labelAngle,text:this.prefix+l+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:i,textBlock:e,effectiveHeight:null})}}for(var i=0;i<this.stripLines.length;i++){var x=this.stripLines[i];e=new A(this.ctx,{x:0,y:0,backgroundColor:x.labelBackgroundColor,maxWidth:n,maxHeight:s,angle:this.labelAngle,text:x.label,horizontalAlign:"left",fontSize:x.labelFontSize,fontFamily:x.labelFontFamily,fontWeight:x.labelFontWeight,fontColor:x.labelFontColor,fontStyle:x.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:x.value,textBlock:e,effectiveHeight:null,stripLine:x})}},B.prototype.createLabelsAndCalculateWidth=function(){var e=0;if(this._labels=[],"left"===this._position||"right"===this._position)for(this.createLabels(),i=0;i<this._labels.length;i++){var t=this._labels[i].textBlock,a=t.measureText(),n=0;n=0===this.labelAngle?a.width:a.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+a.height/2*Math.sin(Math.PI/180*Math.abs(this.labelAngle)),n>e&&(e=n),this._labels[i].effectiveWidth=n}var s=this.title?x(this.titleFontFamily,this.titleFontSize,this.titleFontWeight)+2:0,o=s+e+this.tickLength+5;return o},B.prototype.createLabelsAndCalculateHeight=function(){var e=0;this._labels=[];var t,i=0;if(this.createLabels(),"bottom"===this._position||"top"===this._position)for(i=0;i<this._labels.length;i++){t=this._labels[i].textBlock;var a=t.measureText(),n=0;n=0===this.labelAngle?a.height:a.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+a.height/2*Math.cos(Math.PI/180*Math.abs(this.labelAngle)),n>e&&(e=n),this._labels[i].effectiveHeight=n}var s=this.title?x(this.titleFontFamily,this.titleFontSize,this.titleFontWeight)+2:0;return s+e+this.tickLength+5},B.setLayoutAndRender=function(e,t,i,a,n){var s,o,r,l,h=e.chart,d=h.ctx;if(e.calculateAxisParameters(),t&&t.calculateAxisParameters(),i&&i.calculateAxisParameters(),t&&i&&"undefined"==typeof t._options.maximum&&"undefined"==typeof t._options.minimum&&"undefined"==typeof t._options.interval&&"undefined"==typeof i._options.maximum&&"undefined"==typeof i._options.minimum&&"undefined"==typeof i._options.interval){var c=(t.maximum-t.minimum)/t.interval,x=(i.maximum-i.minimum)/i.interval;c>x?i.maximum=i.interval*c+i.minimum:x>c&&(t.maximum=t.interval*x+t.minimum)}{var p=(t&&t.lineThickness?t.lineThickness:0,i&&i.lineThickness?i.lineThickness:0,t&&t.gridThickness?t.gridThickness:0,i&&i.gridThickness?i.gridThickness:0,t?t.margin:0);t?t.margin:0}if("normal"===a){e.lineCoordinates={};var m=Math.ceil(t?t.createLabelsAndCalculateWidth():0);s=Math.round(n.x1+m+p),e.lineCoordinates.x1=s;var u=Math.ceil(i?i.createLabelsAndCalculateWidth():0);r=Math.round(n.x2-u>e.chart.width-10?e.chart.width-10:n.x2-u),e.lineCoordinates.x2=r,e.lineCoordinates.width=Math.abs(r-s);var g=Math.ceil(e.createLabelsAndCalculateHeight());o=Math.round(n.y2-g-e.margin),l=Math.round(n.y2-e.margin),e.lineCoordinates.y1=o,e.lineCoordinates.y2=o,e.boundingRect={x1:s,y1:o,x2:r,y2:l,width:r-s,height:l-o},t&&(s=Math.round(n.x1+t.margin),o=Math.round(n.y1<10?10:n.y1),r=Math.round(n.x1+m+t.margin),l=Math.round(n.y2-g-e.margin),t.lineCoordinates={x1:r,y1:o,x2:r,y2:l,height:Math.abs(l-o)},t.boundingRect={x1:s,y1:o,x2:r,y2:l,width:r-s,height:l-o}),i&&(s=Math.round(e.lineCoordinates.x2),o=Math.round(n.y1<10?10:n.y1),r=Math.round(s+u+i.margin),l=Math.round(n.y2-g-e.margin),i.lineCoordinates={x1:s,y1:o,x2:s,y2:l,height:Math.abs(l-o)},i.boundingRect={x1:s,y1:o,x2:r,y2:l,width:r-s,height:l-o}),e.calculateValueToPixelconversionParameters(),t&&t.calculateValueToPixelconversionParameters(),i&&i.calculateValueToPixelconversionParameters(),d.save(),d.rect(5,e.boundingRect.y1,e.chart.width-10,e.boundingRect.height),d.clip(),e.renderLabelsTicksAndTitle(),d.restore(),t&&t.renderLabelsTicksAndTitle(),i&&i.renderLabelsTicksAndTitle(),h.preparePlotArea();var y=e.chart.plotArea;d.save(),d.rect(y.x1,y.y1,Math.abs(y.x2-y.x1),Math.abs(y.y2-y.y1)),d.clip(),e.renderStripLinesOfThicknessType("value"),t&&t.renderStripLinesOfThicknessType("value"),i&&i.renderStripLinesOfThicknessType("value"),e.renderInterlacedColors(),t&&t.renderInterlacedColors(),i&&i.renderInterlacedColors(),d.restore(),e.renderGrid(),t&&t.renderGrid(),i&&i.renderGrid(),e.renderAxisLine(),t&&t.renderAxisLine(),i&&i.renderAxisLine(),e.renderStripLinesOfThicknessType("pixel"),t&&t.renderStripLinesOfThicknessType("pixel"),i&&i.renderStripLinesOfThicknessType("pixel")}else{var v=Math.ceil(e.createLabelsAndCalculateWidth());t&&(t.lineCoordinates={},s=Math.round(n.x1+v+e.margin),r=Math.round(n.x2>t.chart.width-10?t.chart.width-10:n.x2),t.lineCoordinates.x1=s,t.lineCoordinates.x2=r,t.lineCoordinates.width=Math.abs(r-s)),i&&(i.lineCoordinates={},s=Math.round(n.x1+v+e.margin),r=Math.round(n.x2>i.chart.width-10?i.chart.width-10:n.x2),i.lineCoordinates.x1=s,i.lineCoordinates.x2=r,i.lineCoordinates.width=Math.abs(r-s));var b=Math.ceil(t?t.createLabelsAndCalculateHeight():0),f=Math.ceil(i?i.createLabelsAndCalculateHeight():0);t&&(o=Math.round(n.y2-b-t.margin),l=Math.round(n.y2-p>t.chart.height-10?t.chart.height-10:n.y2-p),t.lineCoordinates.y1=o,t.lineCoordinates.y2=o,t.boundingRect={x1:s,y1:o,x2:r,y2:l,width:r-s,height:b}),i&&(o=Math.round(n.y1+i.margin),l=n.y1+i.margin+f,i.lineCoordinates.y1=l,i.lineCoordinates.y2=l,i.boundingRect={x1:s,y1:o,x2:r,y2:l,width:r-s,height:f}),s=Math.round(n.x1+e.margin),o=Math.round(i?i.lineCoordinates.y2:n.y1<10?10:n.y1),r=Math.round(n.x1+v+e.margin),l=Math.round(t?t.lineCoordinates.y1:n.y2-p>e.chart.height-10?e.chart.height-10:n.y2-p),e.lineCoordinates={x1:r,y1:o,x2:r,y2:l,height:Math.abs(l-o)},e.boundingRect={x1:s,y1:o,x2:r,y2:l,width:r-s,height:l-o},e.calculateValueToPixelconversionParameters(),t&&t.calculateValueToPixelconversionParameters(),i&&i.calculateValueToPixelconversionParameters(),t&&t.renderLabelsTicksAndTitle(),i&&i.renderLabelsTicksAndTitle(),e.renderLabelsTicksAndTitle(),h.preparePlotArea();var y=e.chart.plotArea;d.save(),d.rect(y.x1,y.y1,Math.abs(y.x2-y.x1),Math.abs(y.y2-y.y1)),d.clip(),e.renderStripLinesOfThicknessType("value"),t&&t.renderStripLinesOfThicknessType("value"),i&&i.renderStripLinesOfThicknessType("value"),e.renderInterlacedColors(),t&&t.renderInterlacedColors(),i&&i.renderInterlacedColors(),d.restore(),e.renderGrid(),t&&t.renderGrid(),i&&i.renderGrid(),e.renderAxisLine(),t&&t.renderAxisLine(),i&&i.renderAxisLine(),e.renderStripLinesOfThicknessType("pixel"),t&&t.renderStripLinesOfThicknessType("pixel"),i&&i.renderStripLinesOfThicknessType("pixel")
}},B.prototype.renderLabelsTicksAndTitle=function(){{var e=!1,t=0,i=1,a=0;this.conversionParameters.pixelPerUnit*this.interval}if(0!==this.labelAngle&&360!==this.labelAngle&&(i=1.2),"undefined"==typeof this._options.interval){if("bottom"===this._position||"top"===this._position){for(r=0;r<this._labels.length;r++)if(s=this._labels[r],!(s.position<this.minimum||s.stripLine)){var n=s.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+s.textBlock.height*Math.sin(Math.PI/180*this.labelAngle);t+=n}t>this.lineCoordinates.width*i&&(e=!0)}if("left"===this._position||"right"===this._position){for(r=0;r<this._labels.length;r++)if(s=this._labels[r],!(s.position<this.minimum||s.stripLine)){var n=s.textBlock.height*Math.cos(Math.PI/180*this.labelAngle)+s.textBlock.width*Math.sin(Math.PI/180*this.labelAngle);t+=n}t>this.lineCoordinates.height*i&&(e=!0)}}if("bottom"===this._position){var s,o,r=0;for(r=0;r<this._labels.length;r++)if(s=this._labels[r],!(s.position<this.minimum||s.position>this.maximum)){if(o=this.getPixelCoordinatesOnAxis(s.position),this.tickThickness&&!this._labels[r].stripLine||this._labels[r].stripLine&&"pixel"===this._labels[r].stripLine._thicknessType){this._labels[r].stripLine?(h=this._labels[r].stripLine,this.ctx.lineWidth=h.thickness,this.ctx.strokeStyle=h.color):(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor);var l=this.ctx.lineWidth%2===1?(o.x<<0)+.5:o.x<<0;this.ctx.beginPath(),this.ctx.moveTo(l,o.y<<0),this.ctx.lineTo(l,o.y+this.tickLength<<0),this.ctx.stroke()}(!e||a++%2===0||this._labels[r].stripLine)&&(0===s.textBlock.angle?(o.x-=s.textBlock.width/2,o.y+=this.tickLength+s.textBlock.fontSize/2):(o.x-=this.labelAngle<0?s.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,o.y+=this.tickLength+Math.abs(this.labelAngle<0?s.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)-5:5)),s.textBlock.x=o.x,s.textBlock.y=o.y,s.textBlock.render(!0))}this.title&&(this._titleTextBlock=new A(this.ctx,{x:this.lineCoordinates.x1,y:this.boundingRect.y2-this.titleFontSize-5,maxWidth:this.lineCoordinates.width,maxHeight:1.5*this.titleFontSize,angle:0,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.y=this.boundingRect.y2-this._titleTextBlock.height-3,this._titleTextBlock.render(!0))}else if("top"===this._position){var s,o,h,r=0;for(r=0;r<this._labels.length;r++)if(s=this._labels[r],!(s.position<this.minimum||s.position>this.maximum)){if(o=this.getPixelCoordinatesOnAxis(s.position),this.tickThickness&&!this._labels[r].stripLine||this._labels[r].stripLine&&"pixel"===this._labels[r].stripLine._thicknessType){this._labels[r].stripLine?(h=this._labels[r].stripLine,this.ctx.lineWidth=h.thickness,this.ctx.strokeStyle=h.color):(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor);var l=this.ctx.lineWidth%2===1?(o.x<<0)+.5:o.x<<0;this.ctx.beginPath(),this.ctx.moveTo(l,o.y<<0),this.ctx.lineTo(l,o.y-this.tickLength<<0),this.ctx.stroke()}(!e||a++%2===0||this._labels[r].stripLine)&&(0===s.textBlock.angle?(o.x-=s.textBlock.width/2,o.y-=this.tickLength+s.textBlock.height/2):(o.x-=this.labelAngle>0?s.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,o.y-=this.tickLength+Math.abs(this.labelAngle>0?s.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)+5:5)),s.textBlock.x=o.x,s.textBlock.y=o.y,s.textBlock.render(!0))}this.title&&(this._titleTextBlock=new A(this.ctx,{x:this.lineCoordinates.x1,y:this.boundingRect.y1+1,maxWidth:this.lineCoordinates.width,maxHeight:1.5*this.titleFontSize,angle:0,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.render(!0))}else if("left"===this._position){for(var s,o,r=0;r<this._labels.length;r++)if(s=this._labels[r],!(s.position<this.minimum||s.position>this.maximum)){if(o=this.getPixelCoordinatesOnAxis(s.position),this.tickThickness&&!this._labels[r].stripLine||this._labels[r].stripLine&&"pixel"===this._labels[r].stripLine._thicknessType){this._labels[r].stripLine?(h=this._labels[r].stripLine,this.ctx.lineWidth=h.thickness,this.ctx.strokeStyle=h.color):(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor);var d=this.ctx.lineWidth%2===1?(o.y<<0)+.5:o.y<<0;this.ctx.beginPath(),this.ctx.moveTo(o.x<<0,d),this.ctx.lineTo(o.x-this.tickLength<<0,d),this.ctx.stroke()}(!e||a++%2===0||this._labels[r].stripLine)&&(s.textBlock.x=o.x-s.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5,s.textBlock.y=0===this.labelAngle?o.y-s.textBlock.height/2+this.labelFontSize/2:o.y-s.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),s.textBlock.render(!0))}if(this.title){this._titleTextBlock=new A(this.ctx,{x:this.boundingRect.x1+1,y:this.lineCoordinates.y2,maxWidth:this.lineCoordinates.height,maxHeight:1.5*this.titleFontSize,angle:-90,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"});{this._titleTextBlock.measureText()}this._titleTextBlock.y=this.lineCoordinates.height/2+this._titleTextBlock.width/2+this.lineCoordinates.y1,this._titleTextBlock.render(!0)}}else if("right"===this._position){for(var s,o,r=0;r<this._labels.length;r++)if(s=this._labels[r],!(s.position<this.minimum||s.position>this.maximum)){if(o=this.getPixelCoordinatesOnAxis(s.position),this.tickThickness&&!this._labels[r].stripLine||this._labels[r].stripLine&&"pixel"===this._labels[r].stripLine._thicknessType){this._labels[r].stripLine?(h=this._labels[r].stripLine,this.ctx.lineWidth=h.thickness,this.ctx.strokeStyle=h.color):(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor);var d=this.ctx.lineWidth%2===1?(o.y<<0)+.5:o.y<<0;this.ctx.beginPath(),this.ctx.moveTo(o.x<<0,d),this.ctx.lineTo(o.x+this.tickLength<<0,d),this.ctx.stroke()}(!e||a++%2===0||this._labels[r].stripLine)&&(s.textBlock.x=o.x+this.tickLength+5,s.textBlock.y=0===this.labelAngle?o.y-s.textBlock.height/2+this.labelFontSize/2:o.y,s.textBlock.render(!0))}this.title&&(this._titleTextBlock=new A(this.ctx,{x:this.boundingRect.x2-1,y:this.lineCoordinates.y2,maxWidth:this.lineCoordinates.height,maxHeight:1.5*this.titleFontSize,angle:90,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.y=this.lineCoordinates.height/2-this._titleTextBlock.width/2+this.lineCoordinates.y1,this._titleTextBlock.render(!0))}},B.prototype.renderInterlacedColors=function(){var e,t,i=this.chart.plotArea.ctx,a=this.chart.plotArea,n=0,s=!0;if("bottom"!==this._position&&"top"!==this._position||!this.interlacedColor){if(("left"===this._position||"right"===this._position)&&this.interlacedColor)for(i.fillStyle=this.interlacedColor,n=0;n<this._labels.length;n++)this._labels[n].stripLine||(s?(t=this.getPixelCoordinatesOnAxis(this._labels[n].position),e=this.getPixelCoordinatesOnAxis(n+1>=this._labels.length?this.maximum:this._labels[n+1].position),i.fillRect(a.x1,e.y,Math.abs(a.x1-a.x2),Math.abs(e.y-t.y)),s=!1):s=!0)}else for(i.fillStyle=this.interlacedColor,n=0;n<this._labels.length;n++)this._labels[n].stripLine||(s?(e=this.getPixelCoordinatesOnAxis(this._labels[n].position),t=this.getPixelCoordinatesOnAxis(n+1>=this._labels.length?this.maximum:this._labels[n+1].position),i.fillRect(e.x,a.y1,Math.abs(t.x-e.x),Math.abs(a.y1-a.y2)),s=!1):s=!0);i.beginPath()},B.prototype.renderStripLinesOfThicknessType=function(e){if(this.stripLines&&this.stripLines.length>0&&e){var t=this.chart.plotArea.ctx,i=(this.chart._eventManager.ghostCtx,0);for(i=0;i<this.stripLines.length;i++){var a=this.stripLines[i];if(a._thicknessType===e&&("pixel"!==e||!(a.value<this.minimum||a.value>this.maximum))){var n=this.getPixelCoordinatesOnAxis(a.value),s=Math.abs("pixel"===e?a.thickness:this.conversionParameters.pixelPerUnit*a.thickness);if(!(0>=s)){t.strokeStyle=a.color,t.beginPath();{var o,r,l,h;d(a.id)}if(t.lineWidth=s,"bottom"===this._position||"top"===this._position){var c=t.lineWidth%2===1?(n.x<<0)+.5:n.x<<0;o=r=c,l=this.chart.plotArea.y1,h=this.chart.plotArea.y2}else if("left"===this._position||"right"===this._position){var x=t.lineWidth%2===1?(n.y<<0)+.5:n.y<<0;l=h=x,o=this.chart.plotArea.x1,r=this.chart.plotArea.x2}t.moveTo(o,l),t.lineTo(r,h),t.stroke()}}}}},B.prototype.renderGrid=function(){if(this.gridThickness&&this.gridThickness>0){var e,t=this.chart.ctx,i=this.chart.plotArea;if(t.lineWidth=this.gridThickness,t.strokeStyle=this.gridColor,"bottom"===this._position||"top"===this._position){for(n=0;n<this._labels.length&&!this._labels[n].stripLine;n++)if(!(this._labels[n].position<this.minimum||this._labels[n].position>this.maximum)){t.beginPath(),e=this.getPixelCoordinatesOnAxis(this._labels[n].position);var a=t.lineWidth%2===1?(e.x<<0)+.5:e.x<<0;t.moveTo(a,i.y1<<0),t.lineTo(a,i.y2<<0),t.stroke()}}else if("left"===this._position||"right"===this._position)for(var n=0;n<this._labels.length&&!this._labels[n].stripLine;n++)if(!(this._labels[n].position<this.minimum||this._labels[n].position>this.maximum)){t.beginPath(),e=this.getPixelCoordinatesOnAxis(this._labels[n].position);var s=t.lineWidth%2===1?(e.y<<0)+.5:e.y<<0;t.moveTo(i.x1<<0,s),t.lineTo(i.x2<<0,s),t.stroke()}}},B.prototype.renderAxisLine=function(){var e=this.chart.ctx;if("bottom"===this._position||"top"===this._position){if(this.lineThickness){e.lineWidth=this.lineThickness,e.strokeStyle=this.lineColor?this.lineColor:"black";var t=this.lineThickness%2===1?(this.lineCoordinates.y1<<0)+.5:this.lineCoordinates.y1<<0;e.beginPath(),e.moveTo(this.lineCoordinates.x1,t),e.lineTo(this.lineCoordinates.x2,t),e.stroke()}}else if(("left"===this._position||"right"===this._position)&&this.lineThickness){e.lineWidth=this.lineThickness,e.strokeStyle=this.lineColor;var i=this.lineThickness%2===1?(this.lineCoordinates.x1<<0)+.5:this.lineCoordinates.x1<<0;e.beginPath(),e.moveTo(i,this.lineCoordinates.y1),e.lineTo(i,this.lineCoordinates.y2),e.stroke()}},B.prototype.getPixelCoordinatesOnAxis=function(e){var t={},i=this.lineCoordinates.width,a=this.lineCoordinates.height;if("bottom"===this._position||"top"===this._position){var n=i/Math.abs(this.maximum-this.minimum);t.x=this.lineCoordinates.x1+n*(e-this.minimum),t.y=this.lineCoordinates.y1}if("left"===this._position||"right"===this._position){var n=a/Math.abs(this.maximum-this.minimum);t.y=this.lineCoordinates.y2-n*(e-this.minimum),t.x=this.lineCoordinates.x2}return t},B.prototype.getXValueAt=function(e){if(!e)return null;var t=null;return"left"===this._position?t=(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.height*(this.chart.axisX.lineCoordinates.y2-e.y)+this.chart.axisX.minimum:"bottom"===this._position&&(t=(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(e.x-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.minimum),t},B.prototype.calculateValueToPixelconversionParameters=function(){var e={pixelPerUnit:null,minimum:null,reference:null},t=this.lineCoordinates.width,i=this.lineCoordinates.height;e.minimum=this.minimum,("bottom"===this._position||"top"===this._position)&&(e.pixelPerUnit=t/Math.abs(this.maximum-this.minimum),e.reference=this.lineCoordinates.x1),("left"===this._position||"right"===this._position)&&(e.pixelPerUnit=-1*i/Math.abs(this.maximum-this.minimum),e.reference=this.lineCoordinates.y2),this.conversionParameters=e},B.prototype.calculateAxisParameters=function(){var e=this.chart.layoutManager.getFreeSpace();"bottom"===this._position||"top"===this._position?(this.maxWidth=e.width,this.maxHeight=e.height):(this.maxWidth=e.height,this.maxHeight=e.width);var t,i,a,n,s="axisX"===this.type?this.maxWidth<500?8:Math.max(6,Math.floor(this.maxWidth/62)):Math.max(Math.floor(this.maxWidth/40),2),o=0;if("axisX"===this.type?(t=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:this.dataInfo.viewPortMin,i=null!==this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:this.dataInfo.viewPortMax,i-t===0&&(o="undefined"==typeof this._options.interval?.4:this._options.interval,i+=o,t-=o),a=1/0!==this.dataInfo.minDiff?this.dataInfo.minDiff:i-t>1?.5*Math.abs(i-t):1):"axisY"===this.type&&(t="undefined"==typeof this._options.minimum?this.dataInfo.viewPortMin:this._options.minimum,i="undefined"==typeof this._options.maximum?this.dataInfo.viewPortMax:this._options.maximum,isFinite(t)||isFinite(i)?0===t&&0===i?(i+=9,t=0):i-t===0?(o=Math.min(Math.abs(.01*Math.abs(i)),5),i+=o,t-=o):t>i?(o=Math.min(Math.abs(.01*Math.abs(i-t)),5),i>=0?t=i-o:i=t+o):(o=Math.min(Math.abs(.01*Math.abs(i-t)),.05),0!==i&&(i+=o),0!==t&&(t-=o)):(i="undefined"==typeof this._options.interval?-1/0:this._options.interval,t=0),this.includeZero&&"undefined"==typeof this._options.minimum&&t>0&&(t=0),this.includeZero&&"undefined"==typeof this._options.maximum&&0>i&&(i=0)),"axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType?(n=i-t,this.intervalType||(s>=n/1?(this.interval=1,this.intervalType="millisecond"):s>=n/2?(this.interval=2,this.intervalType="millisecond"):s>=n/5?(this.interval=5,this.intervalType="millisecond"):s>=n/10?(this.interval=10,this.intervalType="millisecond"):s>=n/20?(this.interval=20,this.intervalType="millisecond"):s>=n/50?(this.interval=50,this.intervalType="millisecond"):s>=n/100?(this.interval=100,this.intervalType="millisecond"):s>=n/200?(this.interval=200,this.intervalType="millisecond"):s>=n/250?(this.interval=250,this.intervalType="millisecond"):s>=n/300?(this.interval=300,this.intervalType="millisecond"):s>=n/400?(this.interval=400,this.intervalType="millisecond"):s>=n/500?(this.interval=500,this.intervalType="millisecond"):n/(1*H.secondDuration)<=s?(this.interval=1,this.intervalType="second"):n/(2*H.secondDuration)<=s?(this.interval=2,this.intervalType="second"):n/(5*H.secondDuration)<=s?(this.interval=5,this.intervalType="second"):n/(10*H.secondDuration)<=s?(this.interval=10,this.intervalType="second"):n/(15*H.secondDuration)<=s?(this.interval=15,this.intervalType="second"):n/(20*H.secondDuration)<=s?(this.interval=20,this.intervalType="second"):n/(30*H.secondDuration)<=s?(this.interval=30,this.intervalType="second"):n/(1*H.minuteDuration)<=s?(this.interval=1,this.intervalType="minute"):n/(2*H.minuteDuration)<=s?(this.interval=2,this.intervalType="minute"):n/(5*H.minuteDuration)<=s?(this.interval=5,this.intervalType="minute"):n/(10*H.minuteDuration)<=s?(this.interval=10,this.intervalType="minute"):n/(15*H.minuteDuration)<=s?(this.interval=15,this.intervalType="minute"):n/(20*H.minuteDuration)<=s?(this.interval=20,this.intervalType="minute"):n/(30*H.minuteDuration)<=s?(this.interval=30,this.intervalType="minute"):n/(1*H.hourDuration)<=s?(this.interval=1,this.intervalType="hour"):n/(2*H.hourDuration)<=s?(this.interval=2,this.intervalType="hour"):n/(3*H.hourDuration)<=s?(this.interval=3,this.intervalType="hour"):n/(6*H.hourDuration)<=s?(this.interval=6,this.intervalType="hour"):n/(1*H.dayDuration)<=s?(this.interval=1,this.intervalType="day"):n/(2*H.dayDuration)<=s?(this.interval=2,this.intervalType="day"):n/(4*H.dayDuration)<=s?(this.interval=4,this.intervalType="day"):n/(1*H.weekDuration)<=s?(this.interval=1,this.intervalType="week"):n/(2*H.weekDuration)<=s?(this.interval=2,this.intervalType="week"):n/(3*H.weekDuration)<=s?(this.interval=3,this.intervalType="week"):n/(1*H.monthDuration)<=s?(this.interval=1,this.intervalType="month"):n/(2*H.monthDuration)<=s?(this.interval=2,this.intervalType="month"):n/(3*H.monthDuration)<=s?(this.interval=3,this.intervalType="month"):n/(6*H.monthDuration)<=s?(this.interval=6,this.intervalType="month"):n/(1*H.yearDuration)<=s?(this.interval=1,this.intervalType="year"):n/(2*H.yearDuration)<=s?(this.interval=2,this.intervalType="year"):n/(4*H.yearDuration)<=s?(this.interval=4,this.intervalType="year"):(this.interval=Math.floor(B.getNiceNumber(n/(s-1),!0)/H.yearDuration),this.intervalType="year")),this.minimum=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:t-a/2,this.maximum=null!==this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:i+a/2,this.valueFormatString||("year"===this.intervalType?this.valueFormatString="YYYY":"month"===this.intervalType?this.valueFormatString="MMM YYYY":"week"===this.intervalType?this.valueFormatString="MMM DD YYYY":"day"===this.intervalType?this.valueFormatString="MMM DD YYYY":"hour"===this.intervalType?this.valueFormatString="hh:mm TT":"minute"===this.intervalType?this.valueFormatString="hh:mm TT":"second"===this.intervalType?this.valueFormatString="hh:mm:ss TT":"millisecond"===this.intervalType&&(this.valueFormatString="fff'ms'")),this.intervalstartTimePercent=this.getLabelStartPoint(new Date(this.minimum),this.intervalType,this.interval)):(this.intervalType="number",n=B.getNiceNumber(i-t,!1),this.interval=this._options&&this._options.interval?this._options.interval:B.getNiceNumber(n/(s-1),!0),this.minimum=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:Math.floor(t/this.interval)*this.interval,this.maximum=null!==this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:Math.ceil(i/this.interval)*this.interval,0===this.maximum&&0===this.minimum&&(0===this._options.minimum?this.maximum+=10:0===this._options.maximum&&(this.minimum-=10),this._options&&"undefined"==typeof this._options.interval&&(this.interval=B.getNiceNumber((this.maximum-this.minimum)/(s-1),!0))),"axisX"===this.type?(null===this.sessionVariables.internalMinimum&&(this.minimum=t-a/2),null===this.sessionVariables.internalMaximum&&(this.maximum=i+a/2),this.intervalstartTimePercent=Math.floor((this.minimum+.2*this.interval)/this.interval)*this.interval):"axisY"===this.type&&(this.intervalstartTimePercent=this.minimum)),"axisX"===this.type&&(this._absoluteMinimum=this._options&&"undefined"!=typeof this._options.minimum?this._options.minimum:this.dataInfo.min-a/2,this._absoluteMaximum=this._options&&"undefined"!=typeof this._options.maximum?this._options.maximum:this.dataInfo.max+a/2),!this.valueFormatString&&(this.valueFormatString="#,##0.##",n=Math.abs(this.maximum-this.minimum),1>n)){var r=Math.floor(Math.abs(Math.log(n)/Math.LN10))+2;if((isNaN(r)||!isFinite(r))&&(r=2),r>2)for(var l=0;r-2>l;l++)this.valueFormatString+="#"}},B.getNiceNumber=function(e,t){var i,a=Math.floor(Math.log(e)/Math.LN10),n=e/Math.pow(10,a);return i=t?1.5>n?1:3>n?2:7>n?5:10:1>=n?1:2>=n?2:5>=n?5:10,Number((i*Math.pow(10,a)).toFixed(20))},B.prototype.getLabelStartPoint=function(){var e=n(this.interval,this.intervalType),t=Math.floor(this.minimum/e)*e,i=new Date(t);return"millisecond"===this.intervalType||("second"===this.intervalType?i.getMilliseconds()>0&&(i.setSeconds(i.getSeconds()+1),i.setMilliseconds(0)):"minute"===this.intervalType?(i.getSeconds()>0||i.getMilliseconds()>0)&&(i.setMinutes(i.getMinutes()+1),i.setSeconds(0),i.setMilliseconds(0)):"hour"===this.intervalType?(i.getMinutes()>0||i.getSeconds()>0||i.getMilliseconds()>0)&&(i.setHours(i.getHours()+1),i.setMinutes(0),i.setSeconds(0),i.setMilliseconds(0)):"day"===this.intervalType?(i.getHours()>0||i.getMinutes()>0||i.getSeconds()>0||i.getMilliseconds()>0)&&(i.setDate(i.getDate()+1),i.setHours(0),i.setMinutes(0),i.setSeconds(0),i.setMilliseconds(0)):"week"===this.intervalType?(i.getDay()>0||i.getHours()>0||i.getMinutes()>0||i.getSeconds()>0||i.getMilliseconds()>0)&&(i.setDate(i.getDate()+(7-i.getDay())),i.setHours(0),i.setMinutes(0),i.setSeconds(0),i.setMilliseconds(0)):"month"===this.intervalType?(i.getDate()>1||i.getHours()>0||i.getMinutes()>0||i.getSeconds()>0||i.getMilliseconds()>0)&&(i.setMonth(i.getMonth()+1),i.setDate(1),i.setHours(0),i.setMinutes(0),i.setSeconds(0),i.setMilliseconds(0)):"year"===this.intervalType&&(i.getMonth()>0||i.getDate()>1||i.getHours()>0||i.getMinutes()>0||i.getSeconds()>0||i.getMilliseconds()>0)&&(i.setFullYear(i.getFullYear()+1),i.setMonth(0),i.setDate(1),i.setHours(0),i.setMinutes(0),i.setSeconds(0),i.setMilliseconds(0))),i},e(X,M),e(F,M),F.prototype._initialize=function(){if(this.enabled){this.container=document.createElement("div"),this.container.setAttribute("class","canvasjs-chart-tooltip"),this.container.style.position="absolute",this.container.style.height="auto",this.container.style.boxShadow="1px 1px 2px 2px rgba(0,0,0,0.1)",this.container.style.zIndex="1000",this.container.style.display="none";var e='<div style=" width: auto;';e+="height: auto;",e+="min-width: 50px;",e+="line-height: 20px;",e+="margin: 0px 0px 0px 0px;",e+="padding: 5px;",e+="font-family: Calibri, Arial, Georgia, serif;",e+="font-weight: 400;",e+="font-style: "+(O?"italic;":"normal;"),e+="font-size: 14px;",e+="color: #000000;",e+="text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);",e+="text-align: left;",e+="border: 2px solid gray;",e+=O?"background: rgba(255,255,255,.9);":"background: rgb(255,255,255);",e+="text-indent: 0px;",e+="white-space: nowrap;",e+="border-radius: 5px;",e+="-moz-user-select:none;",e+="-khtml-user-select: none;",e+="-webkit-user-select: none;",e+="-ms-user-select: none;",e+="user-select: none;",O||(e+="filter: alpha(opacity = 90);",e+="filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');"),e+='} "> Sample Tooltip</div>',this.container.innerHTML=e,this.contentDiv=this.container.firstChild,this.container.style.borderRadius=this.contentDiv.style.borderRadius,this.chart._canvasJSContainer.appendChild(this.container)}},F.prototype.mouseMoveHandler=function(e,t){this._lastUpdated&&(new Date).getTime()-this._lastUpdated<40||(this._lastUpdated=(new Date).getTime(),this._updateToolTip(e,t))},F.prototype._updateToolTip=function(e,t){if(this.enabled&&!this.chart.disableToolTip){if("undefined"==typeof e||"undefined"==typeof t){if(isNaN(this._prevX)||isNaN(this._prevY))return;e=this._prevX,t=this._prevY}else this._prevX=e,this._prevY=t;var i,a=null,n=null,s=[],o=0;if(this.shared&&"none"!==this.chart.plotInfo.axisPlacement){o="xySwapped"===this.chart.plotInfo.axisPlacement?(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.height*(this.chart.axisX.lineCoordinates.y2-t)+this.chart.axisX.minimum:(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(e-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.minimum;for(var r=[],l=0;l<this.chart.data.length;l++){var h=this.chart.data[l].getDataPointAtX(o,!0);h&&h.index>=0&&(h.dataSeries=this.chart.data[l],null!==h.dataPoint.y&&r.push(h))}if(0===r.length)return;r.sort(function(e,t){return e.distance-t.distance});var d=r[0];for(l=0;l<r.length;l++)r[l].dataPoint.x.valueOf()===d.dataPoint.x.valueOf()&&s.push(r[l]);r=null}else{var c=this.chart.getDataPointAtXY(e,t,!0);if(c)this.currentDataPointIndex=c.dataPointIndex,this.currentSeriesIndex=c.dataSeries.index;else if(O){var x=m(e,t,this.chart._eventManager.ghostCtx);x>0&&"undefined"!=typeof this.chart._eventManager.objectMap[x]?(eventObject=this.chart._eventManager.objectMap[x],this.currentSeriesIndex=eventObject.dataSeriesIndex,this.currentDataPointIndex=eventObject.dataPointIndex>=0?eventObject.dataPointIndex:-1):this.currentDataPointIndex=-1}else this.currentDataPointIndex=-1;if(this.currentSeriesIndex>=0){n=this.chart.data[this.currentSeriesIndex];var h={};if(this.currentDataPointIndex>=0)a=n.dataPoints[this.currentDataPointIndex],h.dataSeries=n,h.dataPoint=a,h.index=this.currentDataPointIndex,h.distance=Math.abs(a.x-o);else{if("line"!==n.type&&"stepLine"!==n.type&&"spline"!==n.type&&"area"!==n.type&&"stepArea"!==n.type&&"splineArea"!==n.type&&"stackedArea"!==n.type&&"stackedArea100"!==n.type&&"rangeArea"!==n.type&&"rangeSplineArea"!==n.type&&"candlestick"!==n.type&&"ohlc"!==n.type)return;var o=(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(e-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.minimum.valueOf();h=n.getDataPointAtX(o,!0),h.dataSeries=n,this.currentDataPointIndex=h.index,a=h.dataPoint}null!==h.dataPoint.y&&s.push(h)}}if(s.length>0){this.highlightObjects(s);var p="";if(p=this.getToolTipInnerHTML({entries:s}),null!==p){this.contentDiv.innerHTML=p,this.contentDiv.innerHTML=p;var u=!1;"none"===this.container.style.display&&(u=!0,this.container.style.display="block");try{this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.borderColor?this.borderColor:s[0].dataPoint.color?s[0].dataPoint.color:s[0].dataSeries.color?s[0].dataSeries.color:s[0].dataSeries._colorSet[s[0].index%s[0].dataSeries._colorSet.length]}catch(g){}"pie"===s[0].dataSeries.type||"doughnut"===s[0].dataSeries.type||"funnel"===s[0].dataSeries.type||"bar"===s[0].dataSeries.type||"rangeBar"===s[0].dataSeries.type||"stackedBar"===s[0].dataSeries.type||"stackedBar100"===s[0].dataSeries.type?toolTipLeft=e-10-this.container.clientWidth:(toolTipLeft=this.chart.axisX.lineCoordinates.width/Math.abs(this.chart.axisX.maximum-this.chart.axisX.minimum)*Math.abs(s[0].dataPoint.x-this.chart.axisX.minimum)+this.chart.axisX.lineCoordinates.x1+.5-this.container.clientWidth<<0,toolTipLeft-=10),toolTipLeft<0&&(toolTipLeft+=this.container.clientWidth+20),toolTipLeft+this.container.clientWidth>this.chart._container.clientWidth&&(toolTipLeft=Math.max(0,this.chart._container.clientWidth-this.container.clientWidth)),toolTipLeft+="px",i=1!==s.length||this.shared||"line"!==s[0].dataSeries.type&&"stepLine"!==s[0].dataSeries.type&&"spline"!==s[0].dataSeries.type&&"area"!==s[0].dataSeries.type&&"stepArea"!==s[0].dataSeries.type&&"splineArea"!==s[0].dataSeries.type&&"stackedArea"!==s[0].dataSeries.type&&"stackedArea100"!==s[0].dataSeries.type?"bar"===s[0].dataSeries.type||"rangeBar"===s[0].dataSeries.type||"stackedBar"===s[0].dataSeries.type||"stackedBar100"===s[0].dataSeries.type?s[0].dataSeries.axisX.lineCoordinates.y2-s[0].dataSeries.axisX.lineCoordinates.height/Math.abs(s[0].dataSeries.axisX.maximum-s[0].dataSeries.axisX.minimum)*Math.abs(s[0].dataPoint.x-s[0].dataSeries.axisX.minimum)+.5<<0:t:s[0].dataSeries.axisY.lineCoordinates.y2-s[0].dataSeries.axisY.lineCoordinates.height/Math.abs(s[0].dataSeries.axisY.maximum-s[0].dataSeries.axisY.minimum)*Math.abs(s[0].dataPoint.y-s[0].dataSeries.axisY.minimum)+.5<<0,i=-i+10,i+this.container.clientHeight+5>0&&(i-=i+this.container.clientHeight+5-0),i+="px",this.container.style.left=toolTipLeft,this.container.style.bottom=i,!this.animationEnabled||u?this.disableAnimation():this.enableAnimation()}else this.hide(!1)}}},F.prototype.highlightObjects=function(e){if(this.enabled){var t=this.chart.overlaidCanvasCtx;this.chart.resetOverlayedCanvas(),t.save();for(var i=(this.chart.plotArea,0),a=0;a<e.length;a++){var n=e[a],s=this.chart._eventManager.objectMap[n.dataSeries.dataPointIds[n.index]];if(s&&s.objectType&&"dataPoint"===s.objectType){var o=this.chart.data[s.dataSeriesIndex],r=(this.chart.data[s.dataPointIndex],s.dataPointIndex);if("line"===o.type||"stepLine"===o.type||"spline"===o.type||"scatter"===o.type||"area"===o.type||"stepArea"===o.type||"splineArea"===o.type||"stackedArea"===o.type||"stackedArea100"===o.type||"rangeArea"===o.type||"rangeSplineArea"===o.type){var l=o.getMarkerProperties(r,s.x1,s.y1,this.chart.overlaidCanvasCtx);if(l.size=Math.max(1.5*l.size<<0,10),l.borderColor=l.borderColor||"#FFFFFF",l.borderThickness=l.borderThickness||Math.ceil(.1*l.size),nt.drawMarkers([l]),"undefined"!=typeof s.y2){var l=o.getMarkerProperties(r,s.x1,s.y2,this.chart.overlaidCanvasCtx);l.size=Math.max(1.5*l.size<<0,10),l.borderColor=l.borderColor||"#FFFFFF",l.borderThickness=l.borderThickness||Math.ceil(.1*l.size),nt.drawMarkers([l])}}else if("bubble"===o.type){var l=o.getMarkerProperties(r,s.x1,s.y1,this.chart.overlaidCanvasCtx);l.size=s.size,l.color="white",l.borderColor="white",t.globalAlpha=.3,nt.drawMarkers([l]),t.globalAlpha=1}else"column"===o.type||"stackedColumn"===o.type||"stackedColumn100"===o.type||"bar"===o.type||"rangeBar"===o.type||"stackedBar"===o.type||"stackedBar100"===o.type||"rangeColumn"===o.type?tt(t,s.x1,s.y1,s.x2,s.y2,"white",0,null,!1,!1,!1,!1,.3):"pie"===o.type||"doughnut"===o.type?it(t,s.center,s.radius,"white",o.type,s.startAngle,s.endAngle,.3):"candlestick"===o.type?(t.globalAlpha=1,t.strokeStyle=s.color,t.lineWidth=2*s.borderThickness,i=t.lineWidth%2===0?0:.5,t.beginPath(),t.moveTo(s.x3-i,s.y2),t.lineTo(s.x3-i,Math.min(s.y1,s.y4)),t.stroke(),t.beginPath(),t.moveTo(s.x3-i,Math.max(s.y1,s.y4)),t.lineTo(s.x3-i,s.y3),t.stroke(),tt(t,s.x1,Math.min(s.y1,s.y4),s.x2,Math.max(s.y1,s.y4),"transparent",2*s.borderThickness,s.color,!1,!1,!1,!1),t.globalAlpha=1):"ohlc"===o.type&&(t.globalAlpha=1,t.strokeStyle=s.color,t.lineWidth=2*s.borderThickness,i=t.lineWidth%2===0?0:.5,t.beginPath(),t.moveTo(s.x3-i,s.y2),t.lineTo(s.x3-i,s.y3),t.stroke(),t.beginPath(),t.moveTo(s.x3,s.y1),t.lineTo(s.x1,s.y1),t.stroke(),t.beginPath(),t.moveTo(s.x3,s.y4),t.lineTo(s.x2,s.y4),t.stroke(),t.globalAlpha=1)}}t.globalAlpha=1,t.beginPath()}},F.prototype.getToolTipInnerHTML=function(e){for(var t=e.entries,i=null,a=null,n=null,s=0,o="",r=!0,l=0;l<t.length;l++)if(t[l].dataSeries.toolTipContent||t[l].dataPoint.toolTipContent){r=!1;break}if(r&&this.content&&"function"==typeof this.content)i=this.content({entries:t});else if(this.shared){for(var h="",l=0;l<t.length;l++)a=t[l].dataSeries,n=t[l].dataPoint,s=t[l].index,o="",0===l&&r&&!this.content&&(h+="undefined"!=typeof this.chart.axisX.labels[n.x]?this.chart.axisX.labels[n.x]:"{x}",h+="</br>",h=this.chart.replaceKeywordsWithValue(h,n,a,s)),null===n.toolTipContent||"undefined"==typeof n.toolTipContent&&null===a._options.toolTipContent||("line"===a.type||"stepLine"===a.type||"spline"===a.type||"area"===a.type||"stepArea"===a.type||"splineArea"===a.type||"column"===a.type||"bar"===a.type||"scatter"===a.type||"stackedColumn"===a.type||"stackedColumn100"===a.type||"stackedBar"===a.type||"stackedBar100"===a.type||"stackedArea"===a.type||"stackedArea100"===a.type?o+=n.toolTipContent?n.toolTipContent:a.toolTipContent?a.toolTipContent:this.content&&"function"!=typeof this.content?this.content:"<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}":"bubble"===a.type?o+=n.toolTipContent?n.toolTipContent:a.toolTipContent?a.toolTipContent:this.content&&"function"!=typeof this.content?this.content:"<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}":"pie"===a.type||"doughnut"===a.type||"funnel"===a.type?o+=n.toolTipContent?n.toolTipContent:a.toolTipContent?a.toolTipContent:this.content&&"function"!=typeof this.content?this.content:"&nbsp;&nbsp;{y}":"rangeColumn"===a.type||"rangeBar"===a.type||"rangeArea"===a.type||"rangeSplineArea"===a.type?o+=n.toolTipContent?n.toolTipContent:a.toolTipContent?a.toolTipContent:this.content&&"function"!=typeof this.content?this.content:"<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}":("candlestick"===a.type||"ohlc"===a.type)&&(o+=n.toolTipContent?n.toolTipContent:a.toolTipContent?a.toolTipContent:this.content&&"function"!=typeof this.content?this.content:"<span style='\"'color:{color};'\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}"),null===i&&(i=""),i+=this.chart.replaceKeywordsWithValue(o,n,a,s),l<t.length-1&&(i+="</br>"));
null!==i&&(i=h+i)}else{if(a=t[0].dataSeries,n=t[0].dataPoint,s=t[0].index,null===n.toolTipContent||"undefined"==typeof n.toolTipContent&&null===a._options.toolTipContent)return null;"line"===a.type||"stepLine"===a.type||"spline"===a.type||"area"===a.type||"stepArea"===a.type||"splineArea"===a.type||"column"===a.type||"bar"===a.type||"scatter"===a.type||"stackedColumn"===a.type||"stackedColumn100"===a.type||"stackedBar"===a.type||"stackedBar100"===a.type||"stackedArea"===a.type||"stackedArea100"===a.type?o=n.toolTipContent?n.toolTipContent:a.toolTipContent?a.toolTipContent:this.content&&"function"!=typeof this.content?this.content:"<span style='\"'color:{color};'\"'>"+(n.label?"{label}":"{x}")+" :</span>&nbsp;&nbsp;{y}":"bubble"===a.type?o=n.toolTipContent?n.toolTipContent:a.toolTipContent?a.toolTipContent:this.content&&"function"!=typeof this.content?this.content:"<span style='\"'color:{color};'\"'>"+(n.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}":"pie"===a.type||"doughnut"===a.type||"funnel"===a.type?o=n.toolTipContent?n.toolTipContent:a.toolTipContent?a.toolTipContent:this.content&&"function"!=typeof this.content?this.content:(n.name?"{name}:&nbsp;&nbsp;":n.label?"{label}:&nbsp;&nbsp;":"")+"{y}":"rangeColumn"===a.type||"rangeBar"===a.type||"rangeArea"===a.type||"rangeSplineArea"===a.type?o=n.toolTipContent?n.toolTipContent:a.toolTipContent?a.toolTipContent:this.content&&"function"!=typeof this.content?this.content:"<span style='\"'color:{color};'\"'>"+(n.label?"{label}":"{x}")+" :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}":("candlestick"===a.type||"ohlc"===a.type)&&(o=n.toolTipContent?n.toolTipContent:a.toolTipContent?a.toolTipContent:this.content&&"function"!=typeof this.content?this.content:"<span style='\"'color:{color};'\"'>"+(n.label?"{label}":"{x}")+"</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}"),null===i&&(i=""),i+=this.chart.replaceKeywordsWithValue(o,n,a,s)}return i},F.prototype.enableAnimation=function(){this.container.style.WebkitTransition||(this.container.style.WebkitTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MozTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MsTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.transition="left .2s ease-out, bottom .2s ease-out")},F.prototype.disableAnimation=function(){this.container.style.WebkitTransition&&(this.container.style.WebkitTransition="",this.container.style.MozTransition="",this.container.style.MsTransition="",this.container.style.transition="")},F.prototype.hide=function(e){this.enabled&&(e="undefined"==typeof e?!0:e,this.container.style.display="none",this.currentSeriesIndex=-1,this._prevX=0/0,this._prevY=0/0,e&&this.chart.resetOverlayedCanvas())},k.prototype.replaceKeywordsWithValue=function(e,t,a,n,s){var r=/\{.*?\}|"[^"]*"|'[^']*'/g,l=this;if(s="undefined"==typeof s?0:s,(a.type.indexOf("stacked")>=0||"pie"===a.type||"doughnut"===a.type)&&(e.indexOf("#percent")>=0||e.indexOf("#total")>=0)){var h="#percent",d="#total",c=null;if(a.type.indexOf("stacked")>=0)d=0,c=t.x.getTime?t.x.getTime():t.x,c in a.plotUnit.yTotals&&(d=a.plotUnit.yTotals[c],h=isNaN(t.y)?0:t.y/d*100);else if("pie"===a.type||"doughnut"===a.type){for(d=0,i=0;i<a.dataPoints.length;i++)isNaN(a.dataPoints[i].y)||(d+=a.dataPoints[i].y);h=isNaN(t.y)?0:t.y/d*100}do{var x="";if(a.percentFormatString)x=a.percentFormatString;else{x="#,##0.";var p=Math.max(Math.ceil(Math.log(1/Math.abs(h))/Math.LN10),2);(isNaN(p)||!isFinite(p))&&(p=2);for(var m=0;p>m;m++)x+="#"}e=e.replace("#percent",G(h,x,l._cultureInfo)),e=e.replace("#total",G(d,a.yValueFormatString?a.yValueFormatString:"#,##0.########"))}while(e.indexOf("#percent")>=0||e.indexOf("#total")>=0)}var u=function(e){if('"'===e[0]&&'"'===e[e.length-1]||"'"===e[0]&&"'"===e[e.length-1])return e.slice(1,e.length-1);var i=o(e.slice(1,e.length-1));i=i.replace("#index",s);var r=null;try{var h=i.match(/(.*?)\s*\[\s*(.*?)\s*\]/);h&&h.length>0&&(r=o(h[2]),i=o(h[1]))}catch(d){}var c=null;if("color"===i)return t.color?t.color:a.color?a.color:a._colorSet[n%a._colorSet.length];if(t.hasOwnProperty(i))c=t;else{if(!a.hasOwnProperty(i))return"";c=a}var x=c[i];return null!==r&&(x=x[r]),"x"===i?l.axisX&&"dateTime"===l.plotInfo.axisXValueType?K(x,t.xValueFormatString?t.xValueFormatString:a.xValueFormatString?a.xValueFormatString:l.axisX&&l.axisX.valueFormatString?l.axisX.valueFormatString:"DD MMM YY",l._cultureInfo):G(x,t.xValueFormatString?t.xValueFormatString:a.xValueFormatString?a.xValueFormatString:"#,##0.########",l._cultureInfo):"y"===i?G(x,t.yValueFormatString?t.yValueFormatString:a.yValueFormatString?a.yValueFormatString:"#,##0.########",l._cultureInfo):"z"===i?G(x,t.zValueFormatString?t.zValueFormatString:a.zValueFormatString?a.zValueFormatString:"#,##0.########",l._cultureInfo):x};return e.replace(r,u)},z.prototype.reset=function(){this.lastObjectId=0,this.objectMap=[],this.rectangularRegionEventSubscriptions=[],this.previousDataPointEventObject=null,this.eventObjects=[],O&&(this.ghostCtx.clearRect(0,0,this.chart.width,this.chart.height),this.ghostCtx.beginPath())},z.prototype.getNewObjectTrackingId=function(){return++this.lastObjectId},z.prototype.mouseEventHandler=function(e){if("mousemove"===e.type||"click"===e.type){var t=[],i=q(e),a=null;if(a=this.chart.getObjectAtXY(i.x,i.y,!1),a&&"undefined"!=typeof this.objectMap[a]){var n=this.objectMap[a];if("dataPoint"===n.objectType){var s=this.chart.data[n.dataSeriesIndex],o=s.dataPoints[n.dataPointIndex],r=n.dataPointIndex;n.eventParameter={x:i.x,y:i.y,dataPoint:o,dataSeries:s._options,dataPointIndex:r,dataSeriesIndex:s.index,chart:this.chart._publicChartReference},n.eventContext={context:o,userContext:o,mouseover:"mouseover",mousemove:"mousemove",mouseout:"mouseout",click:"click"},t.push(n),n=this.objectMap[s.id],n.eventParameter={x:i.x,y:i.y,dataPoint:o,dataSeries:s._options,dataPointIndex:r,dataSeriesIndex:s.index,chart:this.chart._publicChartReference},n.eventContext={context:s,userContext:s._options,mouseover:"mouseover",mousemove:"mousemove",mouseout:"mouseout",click:"click"},t.push(this.objectMap[s.id])}else if("legendItem"===n.objectType){var s=this.chart.data[n.dataSeriesIndex],o=null!==n.dataPointIndex?s.dataPoints[n.dataPointIndex]:null;n.eventParameter={x:i.x,y:i.y,dataSeries:s._options,dataPoint:o,dataPointIndex:n.dataPointIndex,dataSeriesIndex:n.dataSeriesIndex,chart:this.chart._publicChartReference},n.eventContext={context:this.chart.legend,userContext:this.chart.legend._options,mouseover:"itemmouseover",mousemove:"itemmousemove",mouseout:"itemmouseout",click:"itemclick"},t.push(n)}}for(var l=[],h=0;h<this.mouseoveredObjectMaps.length;h++){for(var d=!0,c=0;c<t.length;c++)if(t[c].id===this.mouseoveredObjectMaps[h].id){d=!1;break}d?this.fireEvent(this.mouseoveredObjectMaps[h],"mouseout",e):l.push(this.mouseoveredObjectMaps[h])}this.mouseoveredObjectMaps=l;for(var h=0;h<t.length;h++){for(var x=!1,c=0;c<this.mouseoveredObjectMaps.length;c++)if(t[h].id===this.mouseoveredObjectMaps[c].id){x=!0;break}x||(this.fireEvent(t[h],"mouseover",e),this.mouseoveredObjectMaps.push(t[h])),"click"===e.type?this.fireEvent(t[h],"click",e):"mousemove"===e.type&&this.fireEvent(t[h],"mousemove",e)}}},z.prototype.fireEvent=function(e,t,i){if(e&&t){var a=e.eventParameter,n=e.eventContext,s=e.eventContext.userContext;s&&n&&s[n[t]]&&s[n[t]].call(s,a),"mouseout"!==t?s.cursor&&s.cursor!==i.target.style.cursor&&(i.target.style.cursor=s.cursor):(i.target.style.cursor=this.chart._defaultCursor,delete e.eventParameter,delete e.eventContext),"click"===t&&"dataPoint"===e.objectType&&this.chart.pieDoughnutClickHandler&&this.chart.pieDoughnutClickHandler.call(this.chart.data[e.dataSeriesIndex],a)}},e(Y,M),D.prototype.animate=function(e,t,i,a,n){var s=this;this.chart.isAnimating=!0,n=n||at.easing.linear,i&&this.animations.push({startTime:(new Date).getTime()+(e?e:0),duration:t,animationCallback:i,onComplete:a});for(var o=[];this.animations.length>0;){var r=this.animations.shift(),l=(new Date).getTime(),h=0;r.startTime<=l&&(h=n(Math.min(l-r.startTime,r.duration),0,1,r.duration),h=Math.min(h,1),(isNaN(h)||!isFinite(h))&&(h=1)),1>h&&o.push(r),r.animationCallback(h),h>=1&&r.onComplete&&r.onComplete()}this.animations=o,this.animations.length>0?this.animationRequestId=this.chart.requestAnimFrame.call(window,function(){s.animate.call(s)}):this.chart.isAnimating=!1},D.prototype.cancelAllAnimations=function(){this.animations=[],this.animationRequestId&&this.chart.cancelRequestAnimFrame.call(window,this.animationRequestId),this.animationRequestId=null,this.chart.isAnimating=!1};var at={yScaleAnimation:function(e,t){if(0!==e){var i=t.dest,a=t.source.canvas,n=t.animationBase,s=n-n*e;i.drawImage(a,0,0,a.width,a.height,0,s,i.canvas.width/$,e*i.canvas.height/$)}},xScaleAnimation:function(e,t){if(0!==e){var i=t.dest,a=t.source.canvas,n=t.animationBase,s=n-n*e;i.drawImage(a,0,0,a.width,a.height,s,0,e*i.canvas.width/$,i.canvas.height/$)}},xClipAnimation:function(e,t){if(0!==e){var i=t.dest,a=t.source.canvas;i.save(),e>0&&i.drawImage(a,0,0,a.width*e,a.height,0,0,a.width*e/$,a.height/$),i.restore()}},fadeInAnimation:function(e,t){if(0!==e){var i=t.dest,a=t.source.canvas;i.save(),i.globalAlpha=e,i.drawImage(a,0,0,a.width,a.height,0,0,i.canvas.width/$,i.canvas.height/$),i.restore()}},easing:{linear:function(e,t,i,a){return i*e/a+t},easeOutQuad:function(e,t,i,a){return-i*(e/=a)*(e-2)+t},easeOutQuart:function(e,t,i,a){return-i*((e=e/a-1)*e*e*e-1)+t},easeInQuad:function(e,t,i,a){return i*(e/=a)*e+t},easeInQuart:function(e,t,i,a){return i*(e/=a)*e*e*e+t}}},nt={drawMarker:function(e,t,i,a,n,s,o,r){if(i){var l=1;i.fillStyle=s?s:"#000000",i.strokeStyle=o?o:"#000000",i.lineWidth=r?r:0,"circle"===a?(i.moveTo(e,t),i.beginPath(),i.arc(e,t,n/2,0,2*Math.PI,!1),s&&i.fill(),r&&(o?i.stroke():(l=i.globalAlpha,i.globalAlpha=.15,i.strokeStyle="black",i.stroke(),i.globalAlpha=l))):"square"===a?(i.beginPath(),i.rect(e-n/2,t-n/2,n,n),s&&i.fill(),r&&(o?i.stroke():(l=i.globalAlpha,i.globalAlpha=.15,i.strokeStyle="black",i.stroke(),i.globalAlpha=l))):"triangle"===a?(i.beginPath(),i.moveTo(e-n/2,t+n/2),i.lineTo(e+n/2,t+n/2),i.lineTo(e,t-n/2),i.closePath(),s&&i.fill(),r&&(o?i.stroke():(l=i.globalAlpha,i.globalAlpha=.15,i.strokeStyle="black",i.stroke(),i.globalAlpha=l)),i.beginPath()):"cross"===a&&(i.strokeStyle=s,r=n/4,i.lineWidth=r,i.beginPath(),i.moveTo(e-n/2,t-n/2),i.lineTo(e+n/2,t+n/2),i.stroke(),i.moveTo(e+n/2,t-n/2),i.lineTo(e-n/2,t+n/2),i.stroke())}},drawMarkers:function(e){for(var t=0;t<e.length;t++){var i=e[t];nt.drawMarker(i.x,i.y,i.ctx,i.type,i.size,i.color,i.borderColor,i.borderThickness)}}},st={Chart:function(e,t){var i=new k(e,t,this);this.render=function(){i.render(this.options)},this.options=i._options},addColorSet:function(e,t){U[e]=t},addCultureInfo:function(e,t){V[e]=t}};st.Chart.version="v1.6.2 GA",window.CanvasJS=st}();
//{ GLOBALS
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
	isPhonegap = false, //es phonegap
	mapGraphic = null, //grafico en mapa
	SITE = 'https://irisdev.co/siluet_app/index.php/';
//}
getLang({exe: 'setText'});
function swipeHorz(box, func){
	var startx = 0, dist = 0;
	//
	box.addEventListener('touchstart', function(e){
		var touchobj = e.changedTouches[0]; // reference first touch point (ie: first finger)
		startx = parseInt(touchobj.clientX);
		if( e.target == box){
			e.preventDefault();
		}
	}, false);
	//
	box.addEventListener('touchend', function(e){
		var touchobj = e.changedTouches[0],
		dir = '',
		dis = parseInt(touchobj.clientX) - startx;
		if(touchobj.clientX > startx){
			dir = 'right';
		}else{
			dir = 'left';
		}
		if(func != undefined){
			func(dir, dis);
		}	
		if( e.target == box){
			e.preventDefault();
		}
	}, false);
}
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
	if(isPhonegap){
		return navigator.connection.type;
	}else{
		return navigator.onLine;
	}
}
/*! Onload Phonegap Event*/
document.addEventListener("deviceready", DeviceReady, false);
function DeviceReady(){
	screen.lockOrientation('portrait');
	isPhonegap = true;
	
	var menu = $('#menu .menu-lateral').get(0);
	swipeHorz( menu, function(dir, dis){
		if( dir == 'left' &&  dis < '-100' ){
			$('body').removeClass('menu-open');
		}
	});
	
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
            dis = metros.toFixed(1) + '<span class="deta-light">mt</span>'
            if( metros > 1000 ){
                dis = metros/1000;
                dis = dis.toFixed(2) + '<span class="deta-light">km</span>'
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
		$('body').removeClass('menu-open');
		
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
			es1 += '<option value="'+(i/10).toFixed(1)+'"> '+(i/10).toFixed(1)+' </option>';
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
				
				$('body').prepend('<div id="cortina"></div>');
				
				post(SITE+'main/register/'+chain, sdata, function(obj){
					if(obj.success === false){
						alert(language.err[obj.message]);
					}else{
						iniciar();
					}
					$('#cortina').remove();
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
		if(isPhonegap){
			navigator.compass.getCurrentHeading(compassSuccess, compassError);
		}
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
	
	var range = $('#sensible')
		,inival = range.val() 
		,tocero = setInterval(function() {
			var to = parseInt(range.val()) - 1;
			range.val(to); 
			var percent = Math.ceil(((to - 0) / (30-0)) * 100);
			$('#sensible').css('background', '-webkit-linear-gradient(left, #5de252 0%, #5de252 ' + percent + '%, #212024 ' + percent + '%)');
			if(to<=0){
				clearInterval(tocero);
			var	tocien = setInterval(function() {
					var to = parseInt(range.val()) + 1;
					range.val(to); 
					var percent = Math.ceil(((to - 0) / (30-0)) * 100);
					$('#sensible').css('background', '-webkit-linear-gradient(left, #5de252 0%, #5de252 ' + percent + '%, #212024 ' + percent + '%)');
					if(to>=30){
						clearInterval(tocien);
					var	toini = setInterval(function() {
							var to = parseInt(range.val()) - 1;
							range.val(to); 
							var percent = Math.ceil(((to - 0) / (30-0)) * 100);
							$('#sensible').css('background', '-webkit-linear-gradient(left, #5de252 0%, #5de252 ' + percent + '%, #212024 ' + percent + '%)');
							if(to<=inival){
								clearInterval(toini);
								range.val(inival); 
							}
						}, 20);			
					}
				}, 20);		
			}
		}, 20);
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
		$('#PopAlert').removeClass('toCenter');
		
		if(action == 'save'){
			SES['sens'] = parseInt($('#sensible').val()) / 10;
			show_config({to:'show_inicio();', tx: language.cancel});
		}

		STEP = 0;
	}else{
		$('.btnSave').html(language.save).attr('onclick', "stepsConfStop('save');");
		$('.btnVolv').html(language.volver).attr('onclick', "stepsConfStop('reset');");
		$('.textPop').html(language.sensible.replace('?', STEP));
		$('#PopAlert').addClass('toCenter');
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
function show_principal(back){
	ak_navigate('#principal', back);
}
function principal(back){
	ak_navigate('#principal', back);
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
function compassSuccess(heading){
	var num = heading.magneticHeading;
	if(num < 179.99){
		num = num + 359.99;
	}
	$('.compass-int').css('-webkit-transform','rotate(-'+(num)+'deg)');
}
function compassError(){
	//
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
	
	//map compass
	navigator.compass.getCurrentHeading(compassSuccess, compassError);

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
				ALT = (parseInt(PERFIL.height)* 0.3048).toFixed(2);
			}else{
				ALT = (parseInt(PERFIL.height)/100).toFixed(2);
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
			var mostrar = metros.toFixed(1) + '<span class="deta-light">mt</span>';
			if( metros > 1000 ){
				mostrar = metros/1000;
				mostrar = metros.toFixed(2) + '<span class="deta-light">km</span>';
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
		GeoID = navigator.geolocation.watchPosition(geoSuccess, function(error){
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
	//
	mensaje("GEO Lat: "+LAT+" Lon: "+LON);
}
function show_map(back){
	ak_navigate('#mapa', back);
	
	if(MAP == null){
		loadMapa();
	}
    
    if(mapGraphic == null){
        mapGraphic = new CanvasJS.Chart("myCanvas", {
            backgroundColor: '#37343e',
            axisX: {
                labelFontColor: '#37343e',
                gridColor: '#37343e',
                lineColor: '#37343e',
                tickColor: '#37343e',
                tickThickness: 0,
                lineThickness: 0,
                gridThickness: 0,
                labelFontSize: 1,
                labelFontSize: 1,
                margin: -23
            },
            axisY: {
                labelFontColor: '#37343e',
                gridColor: '#37343e',
                lineColor: '#37343e',
                tickColor: '#37343e',
                tickThickness: 0,
                lineThickness: 0,
                gridThickness: 0,
                labelFontSize: 1,
                margin: -12
            },
            title: {
                text: ""
            },
            data: [
            {
                type: "column",
                color: '#403B4C',
                dataPoints: [
                    { y: 71 },
                    { y: 55 },
                    { y: 50 },
                    { y: 65 },
                    { y: 95 },
                    { y: 95 },
                    { y: 68 }
                ]
            },{
                type: "line",
                color: '#63e05a',
                dataPoints: [
                    { y: 71, color: '#ccc' },
                    { y: 55, color: '#ccc' },
                    { y: 50, color: '#ccc' },
                    { y: 65, color: '#ccc' },
                    { y: 95, color: '#ccc' },
                    { y: 95, color: '#ccc' },
                    { y: 68, color: '#ccc' }
                ]
            }
            ]
        });
        mapGraphic.render();
    }
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
	PERFIL = null;
	mapGraphic = null;

	SES.removeItem('steps');
	SES.removeItem('velocidad');
	SES.removeItem('BG');

	$('.ppal-clock').html('<span class="h">00</span> : <span class="m">00</span> : <span class="s act">00</span>');
	$('.PPM, .PASOS, .DISTA, .CALOR').html('0');
	
    $('.btnSave').html(language.save).attr('onclick', "guardar('SI');");
    $('.btnVolv').html(language.discard).attr('onclick', "guardar('NO');");
    $('.textPop').html(language.save_activity);
    $('#PopAlert').addClass('toCenter');
    
//	ak_navigate('#stop');
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
	$('.toCenter, .toLeft, .toRight').not('#PopAlert').removeClass('toCenter toLeft toRight');
	$('#PopAlert').removeClass('toCenter');
    show_inicio();
}
function estadisticas(tipo){
	 CanvasJS.addColorSet("orange", ["#DB4A08" ]);
    var chart = new CanvasJS.Chart("chartContainer", {      
        axisX: {
                gridColor: '#37343e',
                lineColor: '#37343e',
                tickColor: '#37343e',
                tickThickness: 0,
                lineThickness: 0,
                gridThickness: 0,
                labelFontSize: 12
            },
            axisY: {
                gridColor: '#37343e',
                lineColor: '#37343e',
                tickColor: '#37343e',
                tickThickness: 0,
                lineThickness: 0,
                gridThickness: 0,
                labelFontSize: 1,
      },
      animationEnabled: true,
      backgroundColor: "#37343E",
      colorSet:  "orange",
      data: [{ 
         type: "stackedColumn100",
         dataPoints: [
         { x: 1, y: 10 },
         { x: 2, y: 20 },
         { x: 3, y: 30 },                                    
         { x: 4, y: 40 },
         { x: 5, y: 50 },
         { x: 6, y: 60 },
         { x: 7, y: 70 },                                    
         { x: 8, y: 80 },
         { x: 9, y: 90 }
         ]
       },{ 
         type: "stackedColumn100",
         color:"#201E23",
         dataPoints: [
         { x: 1, y: 90 },
         { x: 2, y: 80 },
         { x: 3, y: 70 },                                    
         { x: 4, y: 60 },
         { x: 5, y: 50 },
         { x: 6, y: 40 },
         { x: 7, y: 30 },                                    
         { x: 8, y: 20 },
         { x: 9, y: 10 }
         ]
       }]
     });
    chart.render();
	
	ak_navigate('#estadisticas', {to: 'show_inicio();'});
	
}
/*! end principal */
/*! map */
function map_init(){
	var styles = [{	
			"featureType": "all",
			"elementType": "all",
			"stylers": [
				{"saturation": -100},
				{"gamma": 0.5}
			]
		}];
	
	var mapOptions = {
		panControl: false
		, zoomControl: false
		, mapTypeControl: false
		, scaleControl: false
		, streetViewControl: false
		, overviewMapControl: false
		, center: { lat: LAT, lng: LON}
		, zoom: 16
		, mapTypeId: 'black'
		, mapTypeControlOptions: {
            mapTypeIds: ['black']
        //  ,google.maps.MapTypeId.ROADMAP
        }
	};
	MAP = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	//colored map
	var styledMapType = new google.maps.StyledMapType(styles, { name: 'black' });
    MAP.mapTypes.set('black', styledMapType);
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
function showDebug(){
	$('.debugbox').css('display', 'block');
}