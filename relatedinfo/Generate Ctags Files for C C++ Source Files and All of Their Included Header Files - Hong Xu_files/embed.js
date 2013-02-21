var DISQUS=function(e){var i=e.DISQUS||{};i.AssertionError=function(b){this.message=b};i.AssertionError.prototype.toString=function(){return"Assertion Error: "+(this.message||"[no message]")};i.assert=function(b,c,g){if(!b)if(g)e.console&&e.console.log("DISQUS assertion failed: "+c);else throw new i.AssertionError(c);};var c=[];i.define=function(b,n){typeof b==="function"&&(n=b,b="");for(var g=b.split("."),a=g.shift(),d=i,l=(n||function(){return{}}).call({overwrites:function(a){a.__overwrites__=!0;
return a}},e);a;)d=d[a]?d[a]:d[a]={},a=g.shift();for(var j in l)l.hasOwnProperty(j)&&(!l.__overwrites__&&d[j]!==null&&i.assert(!d.hasOwnProperty(j),"Unsafe attempt to redefine existing module: "+j,!0),d[j]=l[j],c.push(function(a,d){return function(){delete a[d]}}(d,j)));return d};i.use=function(b){return i.define(b)};i.cleanup=function(){for(var b=0;b<c.length;b++)c[b]()};return i}(window);
DISQUS.define(function(e,i){var c=e.DISQUS,b=e.document,n=b.getElementsByTagName("head")[0]||b.body,g={running:!1,timer:null,queue:[]};c.defer=function(a,d){function b(){var a=g.queue;if(a.length===0)g.running=!1,clearInterval(g.timer);for(var d=0,c;c=a[d];d++)c[0]()&&(a.splice(d--,1),c[1]())}g.queue.push([a,d]);b();if(!g.running)g.running=!0,g.timer=setInterval(b,100)};c.each=function(a,d){var b=a.length,c=Array.prototype.forEach;if(isNaN(b))for(var e in a)a.hasOwnProperty(e)&&d(a[e],e,a);else if(c)c.call(a,
d);else for(c=0;c<b;c++)d(a[c],c,a)};c.extend=function(a){c.each(Array.prototype.slice.call(arguments,1),function(d){for(var b in d)a[b]=d[b]});return a};c.serializeArgs=function(a){var d=[];c.each(a,function(a,b){a!==i&&d.push(b+(a!==null?"="+encodeURIComponent(a):""))});return d.join("&")};c.isString=function(a){return Object.prototype.toString.call(a)==="[object String]"};c.serialize=function(a,d,b){d&&(a+=~a.indexOf("?")?a.charAt(a.length-1)=="&"?"":"&":"?",a+=c.serializeArgs(d));if(b)return d=
{},d[(new Date).getTime()]=null,c.serialize(a,d);d=a.length;return a.charAt(d-1)=="&"?a.slice(0,d-1):a};c.require=function(a,d,e,j,g){function i(a){if(a.type=="load"||/^(complete|loaded)$/.test(a.target.readyState))j&&j(),q&&clearTimeout(q),c.bean.remove(a.target,m,i)}var h=b.createElement("script"),m=h.addEventListener?"load":"readystatechange",q=null;h.src=c.serialize(a,d,e);h.async=!0;h.charset="UTF-8";(j||g)&&c.bean.add(h,m,i);g&&(q=setTimeout(function(){g()},2E4));n.appendChild(h);return c};
c.requireStylesheet=function(a,d,e){var j=b.createElement("link");j.rel="stylesheet";j.type="text/css";j.href=c.serialize(a,d,e);n.appendChild(j);return c};c.requireSet=function(a,b,e){var j=a.length;c.each(a,function(a){c.require(a,{},b,function(){--j===0&&e()})})};c.injectCss=function(a){var d=b.createElement("style");d.setAttribute("type","text/css");a=a.replace(/\}/g,"}\n");e.location.href.match(/^https/)&&(a=a.replace(/http:\/\//g,"https://"));d.styleSheet?d.styleSheet.cssText=a:d.appendChild(b.createTextNode(a));
n.appendChild(d)}});
DISQUS.define("JSON",function(){function e(a){return a<10?"0"+a:a}function i(b){a.lastIndex=0;return a.test(b)?'"'+b.replace(a,function(a){var b=j[a];return typeof b==="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+b+'"'}function c(a,b){var m,f,e,j,g=d,h,o=b[a];o&&typeof o==="object"&&typeof o.toJSON==="function"&&!n&&(o=o.toJSON(a));typeof p==="function"&&(o=p.call(b,a,o));switch(typeof o){case "string":return i(o);case "number":return isFinite(o)?String(o):"null";case "boolean":case "null":return String(o);
case "object":if(!o)return"null";d+=l;h=[];if(Object.prototype.toString.apply(o)==="[object Array]"){j=o.length;for(m=0;m<j;m+=1)h[m]=c(m,o)||"null";e=h.length===0?"[]":d?"[\n"+d+h.join(",\n"+d)+"\n"+g+"]":"["+h.join(",")+"]";d=g;return e}if(p&&typeof p==="object"){j=p.length;for(m=0;m<j;m+=1)f=p[m],typeof f==="string"&&(e=c(f,o))&&h.push(i(f)+(d?": ":":")+e)}else for(f in o)Object.hasOwnProperty.call(o,f)&&(e=c(f,o))&&h.push(i(f)+(d?": ":":")+e);e=h.length===0?"{}":d?"{\n"+d+h.join(",\n"+d)+"\n"+
g+"}":"{"+h.join(",")+"}";d=g;return e}}var b={},n=!1;if(typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+e(this.getUTCMonth()+1)+"-"+e(this.getUTCDate())+"T"+e(this.getUTCHours())+":"+e(this.getUTCMinutes())+":"+e(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var g=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
a=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,d,l,j={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},p;b.stringify=function(a,b,m){var f;l=d="";if(typeof m==="number")for(f=0;f<m;f+=1)l+=" ";else typeof m==="string"&&(l=m);if((p=b)&&typeof b!=="function"&&(typeof b!=="object"||typeof b.length!=="number"))throw Error("JSON.stringify");return c("",{"":a})};b.parse=function(a,b){function d(a,
f){var m,c,e=a[f];if(e&&typeof e==="object")for(m in e)Object.hasOwnProperty.call(e,m)&&(c=d(e,m),c!==void 0?e[m]=c:delete e[m]);return b.call(a,f,e)}var f,a=String(a);g.lastIndex=0;g.test(a)&&(a=a.replace(g,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return f=eval("("+a+")"),
typeof b==="function"?d({"":f},""):f;throw new SyntaxError("JSON.parse");};var k={a:[1,2,3]},h,m;if(Object.toJSON&&Object.toJSON(k).replace(/\s/g,"")==='{"a":[1,2,3]}')h=Object.toJSON;typeof String.prototype.evalJSON==="function"&&(k='{"a":[1,2,3]}'.evalJSON(),k.a&&k.a.length===3&&k.a[2]===3&&(m=function(a){return a.evalJSON()}));(function(){var a=[1,2,3];typeof a.toJSON==="function"&&(a=a.toJSON(),n=!(a&&a.length===3&&a[2]===3))})();if(n||!h||!m)return{stringify:b.stringify,parse:b.parse};return{stringify:h,
parse:m}});
DISQUS.define(function(){function e(b){for(a=1;b=i.shift();)b()}var i=[],c,b=document,n=b.documentElement,g=n.doScroll,a=/^loade|c/.test(b.readyState),d;b.addEventListener&&b.addEventListener("DOMContentLoaded",c=function(){b.removeEventListener("DOMContentLoaded",c,!1);e()},!1);g&&b.attachEvent("onreadystatechange",c=function(){/^c/.test(b.readyState)&&(b.detachEvent("onreadystatechange",c),e())});d=g?function(b){self!=top?a?b():i.push(b):function(){try{n.doScroll("left")}catch(a){return setTimeout(function(){d(b)},50)}b()}()}:
function(b){a?b():i.push(b)};return{domready:d}});
DISQUS.define("Events",function(){var e=/\s+/,i={on:function(c,b,i){var g,a;if(!b)return this;c=c.split(e);for(g=this._callbacks||(this._callbacks={});a=c.shift();)a=g[a]||(g[a]=[]),a.push(b),a.push(i);return this},off:function(c,b,i){var g,a,d;if(!(a=this._callbacks))return this;if(!c&&!b&&!i)return delete this._callbacks,this;for(c=c?c.split(e):_.keys(a);g=c.shift();)if(!(d=a[g])||!b&&!i)delete a[g];else for(g=d.length-2;g>=0;g-=2)b&&d[g]!==b||i&&d[g+1]!==i||d.splice(g,2);return this},trigger:function(c){var b,
i,g,a,d,l,j;if(!(i=this._callbacks))return this;j=[];c=c.split(e);a=1;for(d=arguments.length;a<d;a++)j[a-1]=arguments[a];for(;b=c.shift();){if(l=i.all)l=l.slice();if(g=i[b])g=g.slice();if(g){a=0;for(d=g.length;a<d;a+=2)g[a].apply(g[a+1]||this,j)}if(l){b=[b].concat(j);a=0;for(d=l.length;a<d;a+=2)l[a].apply(l[a+1]||this,b)}}return this}};i.bind=i.on;i.unbind=i.off;return i});
DISQUS.define(function(e){function i(){throw Error(Array.prototype.join.call(arguments," "));}function c(a,b,d){if(a.addEventListener)a.addEventListener(b,d,!1);else if(a.attachEvent)a.attachEvent("on"+b,d);else throw Error("No event support.");}var b=e.document,n=DISQUS.use("JSON"),g={},a={},d=0;if(!(DISQUS.version&&DISQUS.version()==="2")){c(e,"message",function(b){var d,c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)&&b.origin==a[c].origin){d=!0;break}if(d)switch(d=n.parse(b.data),(c=
a[d.sender])||i("Message from our server but with invalid sender UID:",d.sender),d.scope){case "host":c.trigger(d.name,d.data);break;case "global":DISQUS.trigger(d.name,d.data);break;default:i("Message",d.scope,"not supported. Sender:",b.origin)}},!1);c(e,"hashchange",function(){DISQUS.trigger("window.hashchange",{hash:e.location.hash})},!1);c(e,"resize",function(){DISQUS.trigger("window.resize")},!1);var l=function(){DISQUS.trigger("window.scroll")};(function(a,b,d,e){var f=(new Date).getTime();
c(a,b,function(){var a=(new Date).getTime();a-f>=e&&(f=a,d())})})(e,"scroll",l,250);(function(a,b,d,e){var f;c(a,b,function(a){f&&clearTimeout(f);f=setTimeout(function(){d(a)},e)})})(e,"scroll",l,300);c(b,"click",function(){DISQUS.trigger("window.click")});l=function(){this.uid=d++;g[this.uid]=this};DISQUS.extend(l.prototype,DISQUS.Events);l.prototype.destroy=function(){delete g[this.uid]};DISQUS.extend(l,{listByKey:function(){var a={},b;for(b in g)Object.prototype.hasOwnProperty.call(g,b)&&(a[b]=
g[b]);return a},list:function(){var a=[],b;for(b in g)Object.prototype.hasOwnProperty.call(g,b)&&a.push(g[b]);return a},get:function(a){if(Object.prototype.hasOwnProperty.call(g,a))return g[a];return null}});var j=function(a){a=a||{};this.isReady=!1;this.uid=a.uid||d++;this.elem=null;this.styles={};this.role=a.role||"application"};j.prototype.load=function(){var a=this.elem=b.createElement("iframe");a.setAttribute("id","dsq"+this.uid);a.setAttribute("data-disqus-uid",this.uid);a.setAttribute("allowTransparency",
"true");a.setAttribute("frameBorder","0");a.setAttribute("role",this.role);for(var d in this.styles)this.styles.hasOwnProperty(d)&&(a.style[d]=this.styles[d])};j.prototype.destroy=function(){this.elem&&this.elem.parentNode.removeChild(this.elem)};var p=function(b){var d=this;j.call(d,b);d.listeners={};d.origin=b.origin;d.target=b.target;d.container=b.container;d.styles=DISQUS.extend({width:"100%",border:"none",overflow:"hidden",display:"none"},b.styles||{});a[d.uid]=d;d.on("ready",function(){d.isReady=
!0})};DISQUS.extend(p.prototype,DISQUS.Events);p.prototype.load=function(a){j.prototype.load.call(this);var d=this.elem;d.setAttribute("width","100%");d.setAttribute("src",this.target+"#"+this.uid);c(d,"load",function(){d.style.display="";a&&a()});(b.getElementById(this.container)||b.body).appendChild(d);this.elem=d};p.prototype.sendMessage=function(a,b){var d=function(a,b,d){return function(){d.elem.contentWindow.postMessage(a,b)}}(n.stringify({scope:"client",data:{eventName:a,data:b}}),this.origin,
this);if(this.isReady)d();else this.on("ready",d)};p.prototype.getPosition=function(){for(var a=this.elem,b=0,d=0;a;)b+=a.offsetLeft,d+=a.offsetTop,a=a.offsetParent;return{top:d,left:b}};p.prototype.inViewport=function(a){var a=a||this.getPosition(),a=a.top,b=a+this.elem.offsetHeight,d=e.pageYOffset;return!(a>d+e.innerHeight||b<d)};p.prototype.destroy=function(){this.off();j.prototype.destroy.call(this)};var k=function(a){j.call(this,a);this.contents=a.contents;this.container=a.container;this.styles=
{width:"100%",border:"none",overflow:"hidden"};a.styles=a.styles||{};for(var b in a.styles)a.styles.hasOwnProperty(b)&&(this.styles[b]=a.styles[b])};k.prototype.load=function(){j.prototype.load.call(this);var a=this.elem;a.setAttribute("scrolling","no");(b.getElementById(this.container)||b.body).appendChild(a);this.element=a;this.window=a.contentWindow;try{this.window.document.open()}catch(d){a.src="javascript:var d=document.open();d.domain='"+b.domain+"';void(0);"}this.document=this.window.document;
this.document.write(this.contents);this.document.close();if(a=this.document.body){var c=this.element.style;c.height=c.minHeight=c.maxHeight=a.offsetHeight+"px"}};k.prototype.exec=function(a){a.call(this,this.window,this.document)};k.prototype.hide=function(){var a=this.element.style.display;if(a!=="none")this._display=a;this.element.style.display="none"};k.prototype.show=function(){this.element.style.display=this._display||"block"};k.prototype.click=function(a){c(this.document.body,"click",function(b){a(b)})};
k.prototype.destroy=j.prototype.destroy;var h=DISQUS.extend({},DISQUS.Events);return{IFRAME:"__widget_iframe__",log:function(a){var d=b.getElementById("messages");if(d){var c=b.createElement("p");c.innerHTML=a;d.appendChild(c)}},version:function(){return"2"},on:h.on,off:h.off,trigger:h.trigger,Channel:p,Sandbox:k,App:l}}});
DISQUS.define("next.publisher",function(e){function i(a,b,c){var j,c=c||b;if(a===g)return"";e.getComputedStyle?j=g.defaultView.getComputedStyle(a,null).getPropertyValue(b):a.currentStyle&&(j=a.currentStyle[b]?a.currentStyle[b]:a.currentStyle[c]);return j=="transparent"||j===""||j=="rgba(0, 0, 0, 0)"?i(a.parentNode,b,c):j||null}function c(a){function b(a){a=Number(a).toString(16);return a.length==1?"0"+a:a}if(a.substr(0,1)==="#")return a;var c=/.*?rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(a);if(!c||c.length!==
4)return"";var a=b(c[1]),e=b(c[2]),c=b(c[3]);return"#"+a+e+c}function b(a,b,c,e){DISQUS.isString(b)&&(b=g.createElement(b));var n=null;b.style.visibility="hidden";a.appendChild(b);n=i(b,c,e);a.removeChild(b);return n}function n(a){return a.toLowerCase().replace(/^\s+|\s+$/g,"").replace(/['"]/g,"")}var g=e.document;return{getContrastYIQ:function(a){a.match("^rgb")&&(a=c(a).substr(1));var b=parseInt(a.substr(0,2),16),e=parseInt(a.substr(2,2),16),a=parseInt(a.substr(4,2),16);return(b*299+e*587+a*114)/
1E3},colorToHex:c,getElementStyle:b,getAnchorColor:function(a){var d=g.createElement("a");d.href=+new Date;return b(a,d,"color")},normalizeFontValue:n,isSerif:function(a){for(var a=b(a,"span","font-family","fontFamily").split(","),d={courier:1,times:1,"times new roman":1,georgia:1,palatino:1,serif:1},c,e=0;e<a.length;e++)if(c=n(a[e]),d.hasOwnProperty(c))return!0;return!1}}});
DISQUS.define(function(){function e(e){DISQUS.App.call(this);this.switches={};var c={target:e.useSSL?"https://securecdn.disqus.com/1361242869/build/next-switches/client_ssl.html":"http://mediacdn.disqus.com/1361242869/build/next-switches/client.html",container:e.container};c.origin=e.useSSL?"https://securecdn.disqus.com":"http://mediacdn.disqus.com";this.frame=new DISQUS.Channel(c);var b=this;this.frame.load(function(){b.frame.elem.style.display="none"})}e.prototype=DISQUS.extend({fetch:function(e){var c=
this,e=e||{},b=e.success;delete e.success;this.frame.on("switches.received",function(e){c.switches=e;DISQUS.trigger("switches.changed",e);b&&b(e)});this.frame.sendMessage("fetch",e)},enabled:function(e){return this.switches[e]?this.switches[e]:!1}},DISQUS.App.prototype);return{Switches:function(i){return new e(i)}}});
DISQUS.define(function(e){var i=function(c){DISQUS.App.call(this);this.settings=c;this.frame=null};DISQUS.extend(i.prototype,DISQUS.App.prototype);i.prototype.init=function(){var c=this.settings,b="http://disqus.com/embed/profile/",i="http://disqus.com";c.useSSL&&(b="https://disqus.com/embed/profile/",i="https://disqus.com");var g=this.frame=new DISQUS.Channel({origin:i,target:DISQUS.serialize(b,{f:c.forum}),container:c.container,uid:this.uid,styles:{height:"100%",position:"fixed",top:0,left:0,zIndex:999999}});
g.on("ready",function d(){g.off("ready",d);g.sendMessage("init",{referrer:e.location.href});this.trigger("loading.init")},this);g.on("close",function(){this.frame.elem.style.display="none";e.focus()},this);g.load();this.trigger("loading.start")};i.prototype.showProfile=function(c){var b=this.frame;if(!b.isReady)return void b.on("ready",function g(){b.off("ready",g);this.showProfile(c)},this);b.sendMessage("showProfile",c);b.elem.style.display="block"};i.prototype.destroy=function(){DISQUS.App.prototype.destroy.call(this)};
return{Profile:function(c){return new i(c)}}});
DISQUS.define("backplane",function(){var e;try{localStorage.setItem("disqus.localStorageTest","disqus"),localStorage.removeItem("disqus.localStorageTest"),e=!0}catch(i){e=!1}var c=function(b){this.frame=b;this.credentials="unset";var c=this;typeof Backplane==="function"&&typeof Backplane.version==="string"&&typeof Backplane.subscribe==="function"&&e&&Backplane(function(){c.initialize()})};DISQUS.extend(c.prototype,{frameEvents:{invalidate:"clearCredentials"},initialize:function(){var b=this;DISQUS.each(this.frameEvents,
function(c,e){b.frame.on("backplane."+e,typeof c==="function"?c:b[c],b)});this.credentialsFromLocalStorage()&&this.frame.sendMessage("login",{backplane:this.credentials});this.subscribe()},subscribe:function(){var b=this;Backplane.subscribe(function(c){var e=b.handlers[c.type];e&&e.call(b,c)})},handlers:{"identity/login":function(b){var c=b.messageURL,b=b.channel;this.credentials!=="unset"&&this.credentials!==null&&this.credentials.channel===b&&this.credentials.messageUrl===c||(this.setCredentials(b,
c),this.frame.sendMessage("login",{backplane:this.getCredentials()}))}},credentialsFromLocalStorage:function(){var b=localStorage.getItem("disqus.backplane.channel"),c=localStorage.getItem("disqus.backplane.messageUrl");this.setCredentials(b,c,!0);return this.credentials},setCredentials:function(b,c,e){if(!b||!c)return void this.clearCredentials();e||(localStorage.setItem("disqus.backplane.channel",b),localStorage.setItem("disqus.backplane.messageUrl",c));this.credentials={channel:b,messageUrl:c}},
getCredentials:function(){if(this.credentials!=="unset")return this.credentials;return this.credentialsFromLocalStorage()},clearCredentials:function(b){b=b||{};this.credentials=null;localStorage.removeItem("disqus.backplane.channel");localStorage.removeItem("disqus.backplane.messageUrl");if(b.redirectUrl)window.location=b.redirectUrl}});return{BackplaneIntegration:c}});
DISQUS.define(function(e,i){function c(a,b,c,d,e,g){return'<img width="'+a+'" height="'+b+'" alt="'+d+'" src="data:image/'+c+";base64,"+e+'"'+(g?' style="'+g+'"':"")+"/>"}function b(a){for(var b=DISQUS.App.list(),c=0,e=b.length,b=b[c];c<e;c++)b instanceof d&&a(b)}var n=e.document,g=["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","TkSuQmCC"],a=["R0lGODlhEAALAPQAAP///z2LqeLt8dvp7u7090GNqz2LqV+fuJ/F1IW2ycrf51aatHWs","waXJ14i4ys3h6FmctUCMqniuw+vz9eHs8fb5+meku+Tu8vT4+cfd5bbT3tbm7PH2+AAA","AAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQu","aW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27if","DgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeR","vsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjoth",
"LOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh","+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+","YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY","5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAs","AAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00k","j5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpy","HCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAA","BS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7",
"AAAAAAAAAAAA"],d=function(a){DISQUS.App.call(this);this.settings=a;this.indicators={north:null,south:null};this._boundGlobalEvents=[];this.frame=null};DISQUS.extend(d.prototype,DISQUS.App.prototype);d.prototype.init=function(){function b(a,c,d){f.on("affiliateLink",function(b){var e=DISQUS.vglnk.$;if(!e)return void f.sendMessage("affiliateLink");e.request(a+"/click",{format:"jsonp",out:b.url,key:c,loc:f.target,subId:d},{fn:function(a){return function(b){var c={token:a};if(b)c.url=b;f.sendMessage("affiliateLink",
c)}}(b.token),timeout:DISQUS.vglnk.opt("click_timeout")})})}function d(a,b){k._boundGlobalEvents.push(a);DISQUS.on(a,b,k)}var k=this,h=k.settings,m="http://disqus.com/embed/comments/",l="http://disqus.com";h.useSSL&&(m="https://disqus.com/embed/comments/",l="https://disqus.com");var r={f:h.forum,t_i:h.identifier,t_u:h.url||e.location.href,t_s:h.slug,t:h.title||h.documentTitle,t_e:h.title,t_d:h.documentTitle,t_c:h.category,s_o:h.sortOrder,c:h.useConman||i};if(h.notSupported)r.n_s=1;var t=DISQUS.isString(h.container)?
n.getElementById(h.container):h.container,f=k.frame=new DISQUS.Channel({origin:l,target:DISQUS.serialize(m,r),container:h.container,uid:this.uid});if(h.notSupported)f.styles.height="500px";var u=!1,s,v;if(!h.notSupported)s=n.createElement("div"),s.innerHTML=c(71,17,"png","DISQUS",g.join(""))+c(16,11,"gif","...",a.join(""),"margin:0 0 3px 5px"),t.appendChild(s);m=function(){var a=f.getPosition(),b=e.pageYOffset,c=e.innerHeight,d=f.inViewport(a);d?(u=!0,f.sendMessage("window.scroll",{frameOffset:a,
pageOffset:b,height:c}),f.sendMessage("window.inViewport")):u&&!d&&(u=!1,f.sendMessage("window.scrollOffViewport"))};f.on("ready",function o(a){f.off("ready",o);s&&s.parentNode===t&&t.removeChild(s);e.clearTimeout(v);var b={permalink:h.permalink,anchorColor:h.anchorColor,referrer:e.location.href,colorScheme:h.colorScheme,language:h.language,typeface:h.typeface,remoteAuthS3:h.remoteAuthS3,apiKey:h.apiKey,sso:h.sso,externalAudienceSync:h.externalAudienceSync,parentWindowHash:e.location.hash};if(e.navigator.userAgent.match(/(iPad|iPhone|iPod)/))b.width=
f.elem.offsetWidth;f.inViewport()&&f.sendMessage("window.inViewport");k.clientData=a;f.sendMessage("init",b);k.trigger("loading.init")});f.on("resize",function(a){f.elem.style.height=a.height+"px"});f.on("reload",function(){e.location.reload()});f.on("reset",function(){DISQUS.reset({reload:!0})});if(h.externalAudienceSync)f.on("audiencesync.initiate",function(a){k.trigger("audiencesync.initiate",a)});f.on("session.identify",function(a){k.trigger("session.identify",a)});f.on("posts.paginate",function(){k.trigger("posts.paginate")});
f.on("posts.create",function(a){k.trigger("posts.create",{id:a.id,text:a.raw_message})});f.on("scrollTo",function(a){var b=f.getPosition(),b=a.relative==="window"?a.top:b.top+a.top;(a.force||!(b>e.pageYOffset&&b<e.pageYOffset+e.innerHeight))&&e.scrollTo(0,b)});f.on("fakeScroll",m);f.on("realtime.init",function(a){for(var b=["north","south"],c,d,e=0;e<b.length;e++)d=b[e],c=new DISQUS.Sandbox({uid:"-indicator-"+d,container:k.settings.container,contents:a[d].contents,styles:a[d].styles}),c.load(),c.hide(),
function(a){c.click(function(){f.sendMessage("realtime.click",a)})}(d),k.indicators[d]=c});f.on("realtime.showNorth",function(a){var b=k.indicators.north;b.document.getElementById("message").innerHTML=a;b.show()});f.on("realtime.hideNorth",function(){k.indicators.north.hide()});f.on("realtime.showSouth",function(a){var b=k.indicators.south;b.document.getElementById("message").innerHTML=a;b.show()});f.on("realtime.hideSouth",function(){k.indicators.south.hide()});f.on("mainViewRendered",function(){DISQUS.trigger("lounge:mainViewRendered");
k.trigger("loading.done")});f.on("profile.show",function(a){if(!k.profile)k.profile=DISQUS.Profile({container:h.container,useSSL:h.useSSL,forum:h.forum}),k.profile.init();k.profile.showProfile(a.username)});f.on("loadLinkAffiliator",function(a){f.off("loadLinkAffiliator");if(!e.vglnk_self&&!e.vglnk&&!function(){for(var a in e)if(a.indexOf("skimlinks")===0||a.indexOf("skimwords")===0)return!0;return!1}()){var c=a.apiUrl,d=a.key,g=String(a.id);if(!(a.clientUrl==null||c==null||d==null||a.id==null))DISQUS.define("vglnk",
function(){return{api_url:c,key:d,sub_id:g}}),e.vglnk_self="DISQUS.vglnk",DISQUS.require(a.clientUrl),DISQUS.defer(function(){return DISQUS.vglnk.opt},function(){f.sendMessage("affiliationOptions",{timeout:DISQUS.vglnk.opt("click_timeout")})}),b(c,d,g)}});f.on("loadBackplane",function(){f.off("loadBackplane");k.backplane=new DISQUS.backplane.BackplaneIntegration(f)});v=e.setTimeout(function(){(new Image).src=DISQUS.serialize("//juggler.services.disqus.com/stat.gif",{event:"slow_embed"});s.innerHTML+=
'<p>DISQUS seems to be taking longer than usual. <a href="#" onclick="DISQUS.reset({reload: true}); return false;">Reload</a>?</p>'},1E4);f.load(function(){h.notSupported?(f.elem.setAttribute("height","500px"),f.elem.setAttribute("scrolling","yes"),f.elem.setAttribute("horizontalscrolling","no"),f.elem.setAttribute("verticalscrolling","yes")):(f.elem.setAttribute("scrolling","no"),f.elem.setAttribute("horizontalscrolling","no"),f.elem.setAttribute("verticalscrolling","no"))});d("window.hashchange",
function(a){f.sendMessage("window.hashchange",a.hash)});d("window.resize",function(){f.sendMessage("window.resize")});d("window.scroll",m);d("window.click",function(){f.sendMessage("window.click")});d("switches.changed",function(a){f.sendMessage("switches.changed",a)});k.trigger("loading.start")};d.prototype.destroy=function(){var a=this.indicators;this.off();if(this._boundGlobalEvents.length)DISQUS.off(this._boundGlobalEvents.join(" "),null,this),this._boundGlobalEvents=null;this.frame&&this.frame.destroy();
if(a.north)a.north.destroy(),a.north=null;if(a.south)a.south.destroy(),a.south=null;DISQUS.App.prototype.destroy.call(this)};var l=function(a){return new d(a)};DISQUS.extend(l,{listByKey:function(){var a={};b(function(b){a[b.uid]=b});return a},list:function(){var a=[];b(function(b){a.push(b)});return a},get:function(a){a=DISQUS.App.get(a);return a instanceof d&&a}});return{Lounge:l}});
(function(e,i,c){function b(){function a(b){var b=b.getAttribute?b.getAttribute("src"):b.src,c=[/(https?:)\/\/(www\.)?disqus\.com\/forums\/([\w_\-]+)/i,/(https?:)\/\/(www\.)?([\w_\-]+)\.disqus\.com/i,/(https?:)\/\/(www\.)?dev\.disqus\.org\/forums\/([\w_\-]+)/i,/(https?:)\/\/(www\.)?([\w_\-]+)\.dev\.disqus\.org/i],d=c.length;if(!b||b.substring(b.length-8)!="embed.js")return null;for(var e=0;e<d;e++){var f=b.match(c[e]);if(f&&f.length&&f.length==4)return j=f[1]||null,f[3]}return null}for(var b=i.getElementsByTagName("script"),
c=b.length-1;c>=0;c--){var d=a(b[c]);if(d!==null)return d}return null}function n(){if(e.location.protocol==="https:")return!0;j===c&&b();return j==="https:"}function g(){for(var a=i.getElementsByTagName("h1"),b=i.title,d=b.length,e=b,g=0.6,h=0;h<a.length;h++)(function(a){var a=a.textContent||a.innerText,f;if(!(a===null||a===c)){f=0;for(var i=Array(b.length),h=0;h<=b.length;h++){i[h]=Array(a.length);for(var j=0;j<=a.length;j++)i[h][j]=0}for(h=0;h<b.length;h++)for(j=0;j<a.length;j++)b[h]==a[j]&&(i[h+
1][j+1]=i[h][j]+1,i[h+1][j+1]>f&&(f=i[h+1][j+1]));f/=d;f>g&&(g=f,e=a)}})(a[h]);return e}function a(){var a=i.getElementById(l);if(a){a.innerHTML="";var b=k.page;if(!e.postMessage||!e.JSON)r=!0;if(e.navigator.appName==="Microsoft Internet Explorer"&&(!i.documentMode||i.documentMode<8))r=!0;a={container:l,forum:h,sortOrder:"popular",permalink:p,useSSL:n(),language:k.language,typeface:d.isSerif(a)?"serif":"sans-serif",anchorColor:d.getAnchorColor(a),colorScheme:128<d.getContrastYIQ(d.getElementStyle(a,
"span","color"))?"dark":"light",url:b.url||e.location.href.replace(/#.*$/,""),title:b.title,documentTitle:g(),slug:b.slug,category:b.category_id,identifier:b.identifier,apiKey:b.api_key,remoteAuthS3:b.remote_auth_s3,sso:k.sso,externalAudienceSync:k.callbacks.onAudienceSync.length>0,useConman:e.disqus_demo,notSupported:r};q=DISQUS.Lounge(a);var c={onReady:"loading.done",onNewComment:"posts.create",onPaginate:"posts.paginate",onIdentify:"session.identify",onAudienceSync:"audiencesync.initiate"};DISQUS.each(k.callbacks,
function(a,b){c[b]&&DISQUS.each(a,function(a){q.on(c[b],a)})});q.init()}else(a=e.console)&&typeof a.log==="function"&&a.log("DISQUS: Container (disqus_thread) element is missing.")}var d=DISQUS.use("next.publisher"),l=e.disqus_container_id||"disqus_thread",j,p=function(){var a=e.location.hash;return(a=a&&a.match(/comment\-([0-9]+)/))&&a[1]}(),k={page:{url:c,title:c,slug:c,category_id:c,identifier:c,language:c,api_key:c,remote_auth_s3:c,author_s3:c,developer:c},strings:c,sso:{},callbacks:{preData:[],
preInit:[],onInit:[],afterRender:[],onReady:[],onNewComment:[],preReset:[],onPaginate:[],onIdentify:[],onAudienceSync:[]}};DISQUS.each(["developer","shortname","identifier","url","title","category_id","language","slug"],function(a){var b=e["disqus_"+a];typeof b!=="undefined"&&(k.page[a]=b)});var h=e.disqus_shortname||b(),h=h.toLowerCase();if(typeof e.disqus_config==="function")try{e.disqus_config.call(k)}catch(m){}var q,r=!1;a();if(!r){var t=DISQUS.Switches({container:l,useSSL:n()});t.fetch({data:{forum:h}});
DISQUS.domready(function(){if(i.getElementsByClassName){var a=i.getElementsByClassName("dsq-brlink");a&&a.length&&a[0].parentNode.removeChild(a[0])}});DISQUS.request={get:function(a,b,c){DISQUS.require(a,b,c)}};DISQUS.reset=function(b){b=b||{};if(typeof b.config==="function")try{b.config.call(k)}catch(c){}q&&(q.destroy(),q=null);b.reload&&(a(),DISQUS.trigger("switches.changed",t.switches))}}})(this,this.document);