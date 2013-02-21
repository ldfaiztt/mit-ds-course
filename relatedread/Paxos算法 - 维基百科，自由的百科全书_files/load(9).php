mw.loader.implement("mediawiki.Uri",function(){(function(mw,$){function cat(pre,val,post,raw){if(val===undefined||val===null||val===''){return'';}return pre+(raw?val:mw.Uri.encode(val))+post;}var parser={strict:/^(?:([^:\/?#]+):)?(?:\/\/(?:(?:([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?([^:\/?#]*)(?::(\d*))?)?((?:[^?#\/]*\/)*[^?#]*)(?:\?([^#]*))?(?:#(.*))?/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?(?:(?:([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?([^:\/?#]*)(?::(\d*))?((?:\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?[^?#\/]*)(?:\?([^#]*))?(?:#(.*))?/},properties=['protocol','user','password','host','port','path','query','fragment'];mw.UriRelative=function(documentLocation){var defaultUri;function Uri(uri,options){options=typeof options==='object'?options:{strictMode:!!options};options=$.extend({strictMode:false,overrideKeys:false},options);if(uri!==undefined&&uri!==null&&uri!==''){if(typeof uri==='string'){this.parse(uri,options);}else if(typeof uri==='object'){for(var prop in uri){if
(uri.hasOwnProperty(prop)){if($.isArray(uri[prop])||$.isPlainObject(uri[prop])){this[prop]=$.extend(true,{},uri[prop]);}else{this[prop]=uri[prop];}}}if(!this.query){this.query={};}}}else{return defaultUri.clone();}if(!this.protocol){this.protocol=defaultUri.protocol;}if(!this.host){this.host=defaultUri.host;if(!this.port){this.port=defaultUri.port;}}if(this.path&&this.path.charAt(0)!=='/'){throw new Error('Bad constructor arguments');}if(!(this.protocol&&this.host&&this.path)){throw new Error('Bad constructor arguments');}}Uri.encode=function(s){return encodeURIComponent(s).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A').replace(/%20/g,'+');};Uri.decode=function(s){return decodeURIComponent(s.replace(/\+/g,'%20'));};Uri.prototype={parse:function(str,options){var q,uri=this,matches=parser[options.strictMode?'strict':'loose'].exec(str);$.each(properties,function(i,property){uri[property]=matches[i+1];});q={};if(uri.query){uri.query.
replace(/(?:^|&)([^&=]*)(?:(=)([^&]*))?/g,function($0,$1,$2,$3){var k,v;if($1){k=Uri.decode($1);v=($2===''||$2===undefined)?null:Uri.decode($3);if(options.overrideKeys||q[k]===undefined){q[k]=v;}else{if(typeof q[k]==='string'){q[k]=[q[k]];}if($.isArray(q[k])){q[k].push(v);}}}});}this.query=q;},getUserInfo:function(){return cat('',this.user,cat(':',this.password,''));},getHostPort:function(){return this.host+cat(':',this.port,'');},getAuthority:function(){return cat('',this.getUserInfo(),'@')+this.getHostPort();},getQueryString:function(){var args=[];$.each(this.query,function(key,val){var k=Uri.encode(key),vals=$.isArray(val)?val:[val];$.each(vals,function(i,v){if(v===null){args.push(k);}else if(k==='title'){args.push(k+'='+mw.util.wikiUrlencode(v));}else{args.push(k+'='+Uri.encode(v));}});});return args.join('&');},getRelativePath:function(){return this.path+cat('?',this.getQueryString(),'',true)+cat('#',this.fragment,'');},toString:function(){return this.protocol+'://'+this.
getAuthority()+this.getRelativePath();},clone:function(){return new Uri(this);},extend:function(parameters){$.extend(this.query,parameters);return this;}};defaultUri=new Uri(documentLocation);return Uri;};if(document&&document.location&&document.location.href){mw.Uri=mw.UriRelative(document.location.href);}}(mediaWiki,jQuery));;},{},{});
/* cache key: zhwiki:resourceloader:filter:minify-js:7:ec08d92325d56509f60b0e4d7d5a2c1b */