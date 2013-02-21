var SiteTag=SiteTag||{};SiteTag.config=SiteTag.config||{prefix:"sitetag",pubhost:"http://pub.sitetag.us",statichost:"http://static.sitetag.us",logoHtml:"SiteTag",filename:"badge.js",apihost:"http://apis.sitetag.us",lang:"zh-tw",total:0};
SiteTag.lang=SiteTag.lang||{en:{title:"Your website tags generator.",waiting:"which is producing tags, please wait for a moment......"},tw:{title:"\u7db2\u7ad9\u6a19\u7c64\u7522\u751f\u5668",waiting:"\u6b63\u5728\u7522\u751f\u6a19\u7c64\uff0c\u8acb\u7a0d\u5f8c......"},cn:{title:"\u7f51\u7ad9\u6807\u7c64\u4ea7\u751f\u5668",waiting:"\u6b63\u5728\u4ea7\u751f\u6807\u7c64\uff0c\u8bf7\u7a0d\u540e......"}};
if(!String.prototype.toCamel)String.prototype.toCamel=function(){return String(this).replace(/[-_\s]\D/gi,function(e){return e.charAt(e.length-1).toUpperCase()})};
(function(){SiteTag.util=SiteTag.util||{};var e=SiteTag.util;SiteTag.util.Dom=SiteTag.util.Dom||{_reClassNameCache:{},_getClassRegEx:function(a){var b=e.Dom._reClassNameCache[a];if(!b){b=RegExp("(?:^|\\s+)"+a+"(?:\\s+|$)");e.Dom._reClassNameCache[a]=b}return b},getElementsByClassName:function(a,b,c,d){b=b||"*";c=c||document;var f=[];b=c.getElementsByTagName(b);a=e.Dom._getClassRegEx(a);c=0;for(var h=b.length;c<h;c++)if(a.test(b[c].className)){f[f.length]=b[c];d&&d.call(b[c],b[c])}return f},batch:function(a,
b,c,d){var f=[];d=d?c:window;if(a&&b){if(a.tagName||a.length===undefined)return b.call(d,a,c);for(var h=0;h<a.length;h++)f[f.length]=b.call(d,a[h],c)}else return false;return f},hasClass:function(a,b){return e.Dom.batch(a,e.Dom._hasClass,b)},_hasClass:function(a,b){var c=false;if(a&&b){c=a.className||"";c=b.exec?b.test(c):b&&(" "+c+" ").indexOf(" "+b+"")>-1}return c},addClass:function(a,b){return e.Dom.batch(a,e.Dom._addClass,b)},_addClass:function(a,b){var c=false,d;if(a&&b){d=a.className||"";if(!e.Dom._hasClass(a,
b)){a.className=d+" "+b;c=true}}return c},removeClass:function(a,b){return e.Dom.batch(a,e.Dom._removeClass,b)},_removeClass:function(a,b){var c=false;if(a&&b){c=a.className||"";a.className=c.replace(e.Dom._getClassRegEx(b),"");c=true}return c},setStyle:function(a,b,c){e.Dom.batch(a,e.Dom._setStyle,{prop:b,val:c})},_setStyle:function(){return document.uniqueID?function(a,b){var c=b.prop.toCamel(),d=b.val;if(a)switch(c){case "opacity":if(a.style.filter){a.style.filter="alpha(opacity="+d*100+")";if(!a.currentStyle||
!a.currentStyle.hasLayout)a.style.zoom=1}break;case "float":c="styleFloat";default:a.style[c]=d}}:function(a,b){var c=b.prop.toCamel(),d=b.val;if(a){if(c=="float")c="cssFloat";a.style[c]=d}}}()}})();
(function(){var e=SiteTag.util.Dom;SiteTag.util.createEl=SiteTag.util.createEl||{get:function(a,b,c){a=document.createElement(a);for(var d in b)a[d]=b[d];if(c)a.innerHTML=c;this.append(a);return a},append:function(a){(document.getElementsByTagName("head")[0]||document.body).appendChild(a)},remove:function(a){setTimeout(function(){a.parentNode.removeChild(a);a=null},0)},js:function(a,b){var c=this.get("script",{src:a,type:"text/javascript"},null);b&&c.setAttribute("charset",b);return c},css:function(a,
b){b||(b="all");return this.get("link",{href:a,rel:"stylesheet",type:"text/css",media:b},null,"head")},template:function(a,b){a.className=a.className||SiteTag.config.prefix;document.write('<iframe frameborder="no" frameBorder="no" marginWidth="0" marginHeight="0" border="0" scrolling="no" width="100%" height="137" src="about:blank" class="'+a.className+'"></iframe>');var c=e.getElementsByClassName(a.className,"iframe")[0];e.setStyle(c,"margin-bottom","10px");var d=c.contentWindow;if(b){d.document.open();
d.document.write(b);d.document.close()}return c}}})();
(function(){var e=SiteTag.util,a=document.getElementsByTagName("head")[0];SiteTag.util.JSONP=SiteTag.util.JSONP||{_oRequests:{},request:function(b){var c=document.getElementsByTagName("script"),d=new Date;d=d.getMonth()+1+"_"+d.getDate()+"_"+d.getFullYear();var f="req_"+c.length+"_"+d;c={};c.sRequestId=f;c.callback=function(h){e.JSONP.callback(f,h)};c.realCallback=b.callback;c.onTimeout=b.onTimeout;b.callback="SiteTag.util.JSONP._oRequests."+f+".callback";if(b.url.indexOf("?")==-1)b.url+="?";d="";
if(d=="")d+="&";d+="callback="+b.callback;b.url+=d;d=document.createElement("script");c.script=d;d.setAttribute("src",b.url);d.setAttribute("type","text/javascript");c.timeout=setTimeout(function(){e.JSONP.timeoutClear(f)},5E3);a.appendChild(d);e.JSONP._oRequests[f]=c},callback:function(b,c){var d=e.JSONP._oRequests[b];d&&clearTimeout(d.timeout);d.realCallback(c);delete e.JSONP._oRequests[b]},timeoutClear:function(b){var c=e.JSONP._oRequests[b];if(c){var d={};d.sRequestId=c.sRequestId;d.oConfig={};
for(var f in c.oConfig)d.oConfig[f]=c.oConfig[f];f=c.onTimeout;delete c[b];f&&f(d)}}}})();
(function(){SiteTag.config.total=!SiteTag.config.total?0:SiteTag.config.total;SiteTag.config.total++;var e=SiteTag.util.Dom,a=function(g,k){g=g.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var i=RegExp("[\\?&]"+g+"=([^&#]*)");return!i.exec(k)?"":i.exec(k)[1]};dScripts=document.body.getElementsByTagName("script");var b,c,d,f,h,l,m,n,o="",q=false,r=dScripts[dScripts.length-1],j=r.src.toString();/\/(\w+\.js)\?/.exec(j);if(r.src&&RegExp.$1===SiteTag.config.filename){b=a("hash",j);if(!b)return;c=(c=a("background_color",
j))?"#"+c:"#fff";h=(h=a("color",j))?"#"+h:"#000";a("width",j);f=(f=a("border_width",j))?f+"px":"4px";d=(d=a("border_color",j))?"#"+d:"#999";l=(l=a("limit",j))?l:"30";m=(m=a("inner_background_color",j))?"#"+m:"#ffc";o=(o=a("extra",j))?o:"shortuser";n=(n=a("open",j))?n:"default";a=navigator.browserLanguage?navigator.browserLanguage:navigator.userLanguage?navigator.userLanguage:navigator.language;SiteTag.config.lang=a.toLowerCase();q=true}if(q){c=["<!doctype html public '-//W3C//DTD HTML 4.01//EN' 'http://www.w3.org/TR/html4/strict.dtd'>",
"<html>","<head>",'<base target="_top">','<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />','<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/combo?2.8.0r4/build/reset-fonts-grids/reset-fonts-grids.css">','<style type="text/css">',"body {background-color:"+c+";}",".sitetag {-moz-border-radius:8px;-webkit-border-radius:8px;*border:solid 1px #444;*border-width:0 1px 1px 0;background:"+d+";width:100%;}",".sitetag-hd {text-align:left;}",".sitetag-hd div {text-align:center;margin:0 5px 0;padding:0;visibility:hidden;height:"+
f+";overflow:hidden;}",".sitetag-bd {zoom:1;text-align:left;-moz-border-radius:8px;-webkit-border-radius:8px;margin:0 "+f+" 2px !important;background:"+m+";*border:solid 1px #444;*border-width:1px 0 0 1px;}",".sitetag-bd div {padding:5px;}",".sitetag-bd .loading {background:url(http://static.sitetag.us/loading.gif) center center no-repeat;height:100px;}",".sitetag-bd {line-height:1.5;}",".sitetag-bd a:link,",".sitetag-bd a:visited {margin-right:10px;font-family:Arial;color:"+h+";text-decoration:none;}",
".sitetag-bd a:hover {text-decoration:underline;}",".sitetag-bd .level1 {font-size:77%;}",".sitetag-bd .level2 {font-size:85%;}",".sitetag-bd .level3 {font-size:100%;}",".sitetag-bd .level4 {font-size:108%;}",".sitetag-bd .level5 {font-size:138.5%;}",".sitetag-bd #last {color:"+h+";}",".sitetag-ft {text-align:right;}",".sitetag-ft img {border:none;}",".sitetag-ft cite {display:block;padding:"+parseInt(f)/2+"px 10px "+parseInt(f)/2+"px;color:#fff;font:normal 9px Verdana;text-decoration:none;}",".sitetag-ft cite a:link,.sitetag-ft cite a:visited {color:#333;font-family:Georgia !important;font-weight:bold;font-size:100% !important;font-style:italic !important;}",
"</style>","</head>","<body>",'<div class="'+SiteTag.config.prefix+'">','<div class="'+SiteTag.config.prefix+'-hd"><div></div></div>','<div class="'+SiteTag.config.prefix+'-bd">','<div class="'+SiteTag.config.prefix+'-bd-container loading">',"</div>","</div>",'<div class="'+SiteTag.config.prefix+'-ft">','<cite>Powered By <a href="http://sitetag.us/">'+SiteTag.config.logoHtml+"</a></cite>","</div>","</div>","</body>","</html>"];var p=SiteTag.util.createEl.template({className:SiteTag.config.prefix+
"-badge-iframe-"+SiteTag.config.total},c.join(""));c=null;c=(new Date).getFullYear();b={url:"http://apis.sitetag.us/api.php?hash="+b+"&method=sitetag.getTagListBySite&output=json&limit="+l+"&extra="+o+"&r="+c,callback:function(g){var k;g=g.rsp.keywords;if(g.length!==0){k=[];for(var i=0,u=g.length;i<u;i++)k[k.length]='<a id="'+(i==g.length-1?"last":"")+'" '+(n=="blank"?'target="_blank"':"")+' class="level'+g[i].level+'" href="'+g[i].url+'">'+g[i].keyword+"</a><wbr>"}else{switch(SiteTag.config.lang){case "en":g=
SiteTag.lang.en.title;i=SiteTag.lang.en.waiting;break;case "zh-cn":g=SiteTag.lang.cn.title;i=SiteTag.lang.cn.waiting;break;default:g=SiteTag.lang.tw.title;i=SiteTag.lang.tw.waiting}k=['<div class="empty">','<span id="last"><a style="font-family:Georgia;font-size:123.1%;font-style:italic;margin-right:0;" target="_blank" href="http://sitetag.us">SiteTag</a> - <em style="font-style:normal;">'+g+"</em><br/>"+i+"</span>","</div>"]}(function(){if(p.contentWindow.document.body){var s=e.getElementsByClassName(SiteTag.config.prefix,
"div",p.contentWindow.document)[0],t=e.getElementsByClassName(SiteTag.config.prefix+"-bd-container","div",s)[0];t.innerHTML=k.join("");e.removeClass(t,"loading");e.setStyle(p,"height",s.offsetHeight+"px")}else setTimeout(arguments.callee,1)})()}};SiteTag.util.JSONP.request(b);b=null}})();
