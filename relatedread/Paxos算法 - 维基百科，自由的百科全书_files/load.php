function isCompatible(){if(navigator.appVersion.indexOf('MSIE')!==-1&&parseFloat(navigator.appVersion.split('MSIE')[1])<6){return false;}return true;}var startUp=function(){mw.config=new mw.Map(true);mw.loader.addSource({"local":{"loadScript":"//bits.wikimedia.org/zh.wikipedia.org/load.php","apiScript":"/w/api.php"}});(function(name,version,dependencies,group,source){})("MediaWikiSupport.loader","20130204T161557Z",[],null,"local");(function(name,version,dependencies,group,source){(function(mw,$){$(function(event){var $selected=$(mw.config.get('EmbedPlayer.RewriteSelector'));if($selected.length){var inx=0;var checkSetDone=function(){if(inx<$selected.length){$selected.slice(inx,inx+1).embedPlayer(function(){setTimeout(function(){checkSetDone();},5);});}inx++;};checkSetDone();}});$.fn.embedPlayer=function(readyCallback){var playerSet=this;mw.log('jQuery.fn.embedPlayer :: '+$(this).length);var dependencySet=['mw.EmbedPlayer'];var rewriteElementCount=0;$(this).each(function(inx,
playerElement){var skinName='';$(playerElement).removeAttr('controls');if(!$.browser.mozilla){$(playerElement).parent().getAbsoluteOverlaySpinner().attr('id','loadingSpinner_'+$(playerElement).attr('id'));}$(mw).trigger('EmbedPlayerUpdateDependencies',[playerElement,dependencySet]);});dependencySet=$.uniqueArray(dependencySet);mediaWiki.loader.using(dependencySet,function(){window.gM=mw.jqueryMsg.getMessageFunction({});mw.processEmbedPlayers(playerSet,readyCallback);},function(e){throw new Error('Error loading EmbedPlayer dependency set: '+e.message);});};})(window.mediaWiki,window.jQuery);})("EmbedPlayer.loader","20130204T161657Z",[],null,"local");(function(name,version,dependencies,group,source){(function(mw,$){$(mw).bind('EmbedPlayerUpdateDependencies',function(event,playerElement,classRequest){if(mw.isTimedTextSupported(playerElement)){classRequest=$.merge(classRequest,['mw.TimedText']);}});$(mw).bind('EmbedPlayerNewPlayer',function(event,embedPlayer){if(mw.isTimedTextSupported(
embedPlayer)){embedPlayer.timedText=new mw.TimedText(embedPlayer);}});mw.isTimedTextSupported=function(embedPlayer){var mwprovider=embedPlayer['data-mwprovider']||$(embedPlayer).data('mwprovider');var showInterface=mw.config.get('TimedText.ShowInterface.'+mwprovider)||mw.config.get('TimedText.ShowInterface');if(showInterface=='always'){return true;}else if(showInterface=='off'){return false;}if($(embedPlayer).find('track').length!=0){return true;}else{return false;}};})(window.mediaWiki,window.jQuery);})("TimedText.loader","20130204T161658Z",[],null,"local");(function(name,version,dependencies,group,source){(function(mw,$){$(mw).bind('EmbedPlayerUpdateDependencies',function(event,embedPlayer,dependencySet){if($(embedPlayer).attr('data-mwtitle')){$.merge(dependencySet,['mw.MediaWikiPlayerSupport']);}});})(window.mediaWiki,jQuery);})("mw.MediaWikiPlayer.loader","20130204T161658Z",[],null,"local");mw.loader.register([["site","1359900892",[],"site"],["noscript","1347062400",[],"noscript"],
["startup","1361399487",[],"startup"],["filepage","1347062400"],["user.groups","1347062400",[],"user"],["user","1347062400",[],"user"],["user.cssprefs","1347062400",["mediawiki.user"],"private"],["user.options","1347062400",[],"private"],["user.tokens","1347062400",[],"private"],["mediawiki.language.data","1361399487",["mediawiki.language.init"]],["skins.chick","1359994232"],["skins.cologneblue","1359994232"],["skins.modern","1359994232"],["skins.monobook","1359994232"],["skins.nostalgia","1359994232"],["skins.simple","1359994232"],["skins.standard","1359994232"],["skins.vector","1359994232"],["jquery","1359994231"],["jquery.appear","1359994231"],["jquery.arrowSteps","1359994231"],["jquery.async","1359994231"],["jquery.autoEllipsis","1359994231",["jquery.highlightText"]],["jquery.badge","1359994231"],["jquery.byteLength","1359994231"],["jquery.byteLimit","1359994231",["jquery.byteLength"]],["jquery.checkboxShiftClick","1359994231"],["jquery.client","1359994231"],[
"jquery.collapsibleTabs","1359994231",["jquery.delayedBind"]],["jquery.color","1359994231",["jquery.colorUtil"]],["jquery.colorUtil","1359994231"],["jquery.cookie","1359994231"],["jquery.delayedBind","1359994231"],["jquery.expandableField","1359994231",["jquery.delayedBind"]],["jquery.farbtastic","1359994231",["jquery.colorUtil"]],["jquery.footHovzer","1359994231"],["jquery.form","1359994231"],["jquery.getAttrs","1359994231"],["jquery.hidpi","1359994231"],["jquery.highlightText","1359994231",["jquery.mwExtension"]],["jquery.hoverIntent","1359994231"],["jquery.json","1359994231"],["jquery.localize","1359994231"],["jquery.makeCollapsible","1361328812"],["jquery.mockjax","1359994232"],["jquery.mw-jump","1359994232"],["jquery.mwExtension","1359994232"],["jquery.placeholder","1359994232"],["jquery.qunit","1359994232"],["jquery.qunit.completenessTest","1359994232",["jquery.qunit"]],["jquery.spinner","1359994232"],["jquery.jStorage","1359994231",["jquery.json"]],["jquery.suggestions",
"1359994232",["jquery.autoEllipsis"]],["jquery.tabIndex","1359994232"],["jquery.tablesorter","1361329109",["jquery.mwExtension"]],["jquery.textSelection","1359994232",["jquery.client"]],["jquery.validate","1359994232"],["jquery.xmldom","1359994232"],["jquery.tipsy","1359994231"],["jquery.ui.core","1359994231",["jquery"],"jquery.ui"],["jquery.ui.widget","1359994231",[],"jquery.ui"],["jquery.ui.mouse","1359994231",["jquery.ui.widget"],"jquery.ui"],["jquery.ui.position","1359994231",[],"jquery.ui"],["jquery.ui.draggable","1359994231",["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget"],"jquery.ui"],["jquery.ui.droppable","1359994231",["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget","jquery.ui.draggable"],"jquery.ui"],["jquery.ui.resizable","1359994231",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.selectable","1359994231",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.sortable","1359994231",["jquery.ui.core",
"jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.accordion","1359994231",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.autocomplete","1359994231",["jquery.ui.core","jquery.ui.widget","jquery.ui.position"],"jquery.ui"],["jquery.ui.button","1359994231",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.datepicker","1359994231",["jquery.ui.core"],"jquery.ui"],["jquery.ui.dialog","1359994231",["jquery.ui.core","jquery.ui.widget","jquery.ui.button","jquery.ui.draggable","jquery.ui.mouse","jquery.ui.position","jquery.ui.resizable"],"jquery.ui"],["jquery.ui.progressbar","1359994231",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.slider","1359994231",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.tabs","1359994231",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.effects.core","1359994231",["jquery"],"jquery.ui"],["jquery.effects.blind","1359994231",["jquery.effects.core"],"jquery.ui"],[
"jquery.effects.bounce","1359994231",["jquery.effects.core"],"jquery.ui"],["jquery.effects.clip","1359994231",["jquery.effects.core"],"jquery.ui"],["jquery.effects.drop","1359994231",["jquery.effects.core"],"jquery.ui"],["jquery.effects.explode","1359994231",["jquery.effects.core"],"jquery.ui"],["jquery.effects.fade","1359994231",["jquery.effects.core"],"jquery.ui"],["jquery.effects.fold","1359994231",["jquery.effects.core"],"jquery.ui"],["jquery.effects.highlight","1359994231",["jquery.effects.core"],"jquery.ui"],["jquery.effects.pulsate","1359994231",["jquery.effects.core"],"jquery.ui"],["jquery.effects.scale","1359994231",["jquery.effects.core"],"jquery.ui"],["jquery.effects.shake","1359994231",["jquery.effects.core"],"jquery.ui"],["jquery.effects.slide","1359994231",["jquery.effects.core"],"jquery.ui"],["jquery.effects.transfer","1359994231",["jquery.effects.core"],"jquery.ui"],["mediawiki","1360762335"],["mediawiki.api","1359994232",["mediawiki.util"]],["mediawiki.api.category",
"1359994232",["mediawiki.api","mediawiki.Title"]],["mediawiki.api.edit","1359994232",["mediawiki.api","mediawiki.Title"]],["mediawiki.api.parse","1359994232",["mediawiki.api"]],["mediawiki.api.titleblacklist","1359994232",["mediawiki.api","mediawiki.Title"]],["mediawiki.api.watch","1359994232",["mediawiki.api","user.tokens"]],["mediawiki.debug","1359994232",["jquery.footHovzer"]],["mediawiki.debug.init","1359994232",["mediawiki.debug"]],["mediawiki.feedback","1359994232",["mediawiki.api.edit","mediawiki.Title","mediawiki.jqueryMsg","jquery.ui.dialog"]],["mediawiki.hidpi","1359994232",["jquery.hidpi"]],["mediawiki.htmlform","1359994232"],["mediawiki.notification","1359994232",["mediawiki.page.startup"]],["mediawiki.notify","1359994232"],["mediawiki.searchSuggest","1361328813",["jquery.autoEllipsis","jquery.client","jquery.placeholder","jquery.suggestions"]],["mediawiki.Title","1359994232",["mediawiki.util"]],["mediawiki.Uri","1359994232"],["mediawiki.user","1359994232",["jquery.cookie",
"mediawiki.api","user.options","user.tokens"]],["mediawiki.util","1361328888",["jquery.client","jquery.cookie","jquery.mwExtension","mediawiki.notify"]],["mediawiki.action.edit","1359994232",["jquery.textSelection","jquery.byteLimit"]],["mediawiki.action.edit.preview","1359994232",["jquery.form","jquery.spinner"]],["mediawiki.action.history","1359994232",[],"mediawiki.action.history"],["mediawiki.action.history.diff","1359994232",[],"mediawiki.action.history"],["mediawiki.action.view.dblClickEdit","1360296837",["mediawiki.util","mediawiki.page.startup"]],["mediawiki.action.view.metadata","1361328870"],["mediawiki.action.view.rightClickEdit","1359994232"],["mediawiki.action.watch.ajax","1347062400",["mediawiki.page.watch.ajax"]],["mediawiki.language","1359994232",["mediawiki.language.data","mediawiki.cldr"]],["mediawiki.cldr","1359994232",["mediawiki.libs.pluralruleparser"]],["mediawiki.libs.pluralruleparser","1359994232"],["mediawiki.language.init","1359994232"],["mediawiki.jqueryMsg",
"1360762335",["mediawiki.util","mediawiki.language"]],["mediawiki.libs.jpegmeta","1359994232"],["mediawiki.page.ready","1359994232",["jquery.checkboxShiftClick","jquery.makeCollapsible","jquery.placeholder","jquery.mw-jump","mediawiki.util"]],["mediawiki.page.startup","1359994232",["jquery.client","mediawiki.util"]],["mediawiki.page.patrol.ajax","1361329480",["mediawiki.page.startup","mediawiki.api","mediawiki.util","mediawiki.Title","mediawiki.notify","jquery.spinner","user.tokens"]],["mediawiki.page.watch.ajax","1361328813",["mediawiki.page.startup","mediawiki.api.watch","mediawiki.util","mediawiki.notify","jquery.mwExtension"]],["mediawiki.special","1359994232"],["mediawiki.special.block","1359994232",["mediawiki.util"]],["mediawiki.special.changeemail","1361340482",["mediawiki.util"]],["mediawiki.special.changeslist","1359994232",["jquery.makeCollapsible"]],["mediawiki.special.movePage","1359994232",["jquery.byteLimit"]],["mediawiki.special.preferences","1359994232"],[
"mediawiki.special.recentchanges","1359994232",["mediawiki.special"]],["mediawiki.special.search","1361328813"],["mediawiki.special.undelete","1359994232"],["mediawiki.special.upload","1361366206",["mediawiki.libs.jpegmeta","mediawiki.util"]],["mediawiki.special.userlogin.signup","1359994232"],["mediawiki.special.javaScriptTest","1359994232",["jquery.qunit"]],["mediawiki.tests.qunit.testrunner","1359994234",["jquery.qunit","jquery.qunit.completenessTest","mediawiki.page.startup","mediawiki.page.ready"]],["mediawiki.legacy.ajax","1359994232",["mediawiki.util","mediawiki.legacy.wikibits"]],["mediawiki.legacy.commonPrint","1359994232"],["mediawiki.legacy.config","1359994232",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.IEFixes","1359994232",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.protect","1359994232",["mediawiki.legacy.wikibits","jquery.byteLimit"]],["mediawiki.legacy.shared","1359994232"],["mediawiki.legacy.oldshared","1359994232"],["mediawiki.legacy.upload","1359994232",
["mediawiki.legacy.wikibits","mediawiki.util"]],["mediawiki.legacy.wikibits","1359994232",["mediawiki.util"]],["mediawiki.legacy.wikiprintable","1359994232"],["ext.gadget.HotCat","1347062400"],["ext.gadget.Cat-a-lot","1347062400",["jquery.ui.dialog"]],["ext.gadget.PreviewWithVariant","1347062400",["ext.gadget.site-lib"]],["ext.gadget.Edittools-vector","1347062400",["user.options"]],["ext.gadget.Edittools-vplus","1347062400",["ext.gadget.Edittools-vector"]],["ext.gadget.Edittools-vote","1347180496",["ext.gadget.Edittools-vector"]],["ext.gadget.Edittools-delh","1347639524",["ext.gadget.Edittools-vector"]],["ext.gadget.Edittools-refToolbar","1347062400"],["ext.gadget.Navigation_popups","1353678560",["ext.gadget.site-lib"]],["ext.gadget.UTCLiveClock","1347062400"],["ext.gadget.shareTool","1360503298",["ext.gadget.site-lib"]],["ext.gadget.WikiMiniAtlas","1347062400"],["ext.gadget.fullwidth-search-fix","1347062400",["mediawiki.util"]],["ext.gadget.ReferenceTooltips","1357346640"],[
"ext.gadget.AdvancedSiteNotices","1348844554",["ext.gadget.site-lib"]],["ext.gadget.blinktalk","1347062400",["mediawiki.util","ext.gadget.site-lib"]],["ext.gadget.hantsect","1347062400"],["ext.gadget.popupUserLanguage","1347062400"],["ext.gadget.hideConversionTab","1347062400"],["ext.gadget.Blackskin","1347062400"],["ext.gadget.disableAnimationCollapse","1347062400"],["ext.gadget.SimplifyRefNotesTag","1347062400"],["ext.gadget.large-font","1359299150"],["ext.gadget.OldDiff","1347062400"],["ext.gadget.internalLinkHelper-redonly","1347062400"],["ext.gadget.internalLinkHelper-redtipsy","1347062400",["mediawiki.util","jquery.tipsy","ext.gadget.site-lib"]],["ext.gadget.internalLinkHelper-redplain","1347062400",["mediawiki.util"]],["ext.gadget.internalLinkHelper-external","1347062400",["mediawiki.util"]],["ext.gadget.internalLinkHelper-suffix","1347062400",["mediawiki.util"]],["ext.gadget.internalLinkHelper-cravix","1347062400",["mediawiki.util","ext.gadget.site-lib"]],[
"ext.gadget.internalLinkHelper-altcolor","1347062400",["mediawiki.util","jquery.tipsy","ext.gadget.site-lib"]],["ext.gadget.noteTA","1351440258",["jquery.ui.dialog","mediawiki.api","ext.gadget.site-lib","jquery.makeCollapsible"]],["ext.gadget.noteTAvector","1349174710",["site","ext.gadget.site-lib"]],["ext.gadget.Twinkle","1361025811",["jquery.ui.dialog","jquery.tipsy"]],["ext.gadget.npp","1347062400",["ext.gadget.site-lib"]],["ext.gadget.dyktool","1352496462",["ext.gadget.site-lib"]],["ext.gadget.site-lib","1347062400",["mediawiki.legacy.wikibits","mediawiki.util"]],["ext.gadget.mainpage-localtime","1361397672"],["ext.gadget.mainpage-customization","1347062400"],["mw.MwEmbedSupport","1359994557",["jquery.triggerQueueCallback","Spinner","jquery.loadingSpinner","jquery.mwEmbedUtil","mw.MwEmbedSupport.style"]],["Spinner","1359994557"],["iScroll","1359994557"],["jquery.loadingSpinner","1359994557"],["mw.MwEmbedSupport.style","1359994557"],["mediawiki.UtilitiesTime","1359994557"],[
"mediawiki.client","1359994557"],["mediawiki.absoluteUrl","1359994557"],["mw.ajaxProxy","1359994557"],["fullScreenApi","1359994557"],["jquery.embedMenu","1359994557"],["jquery.ui.touchPunch","1359994557",["jquery.ui.core","jquery.ui.mouse"]],["jquery.triggerQueueCallback","1359994557"],["jquery.mwEmbedUtil","1359994557",["jquery.ui.dialog"]],["jquery.debouncedresize","1359994557"],["mw.Language.names","1359994557"],["mw.Api","1359994557"],["mw.MediaElement","1359994618"],["mw.MediaPlayer","1359994618"],["mw.MediaPlayers","1359994618",["mw.MediaPlayer"]],["mw.MediaSource","1359994618"],["mw.EmbedTypes","1359994618",["mw.MediaPlayers","mediawiki.Uri"]],["mw.EmbedPlayer","1361328932",["mediawiki.client","mediawiki.UtilitiesTime","mediawiki.Uri","mediawiki.absoluteUrl","mediawiki.jqueryMsg","fullScreenApi","mw.EmbedPlayerNative","mw.MediaElement","mw.MediaPlayers","mw.MediaSource","mw.EmbedTypes","jquery.client","jquery.hoverIntent","jquery.cookie","jquery.ui.mouse",
"jquery.debouncedresize","jquery.embedMenu","jquery.ui.slider","jquery.ui.touchPunch","mw.PlayerSkinKskin"]],["mw.EmbedPlayerKplayer","1359994617"],["mw.EmbedPlayerGeneric","1359994617"],["mw.EmbedPlayerJava","1359994617"],["mw.EmbedPlayerNative","1359994617"],["mw.EmbedPlayerImageOverlay","1359994617"],["mw.EmbedPlayerVlc","1359994617"],["mw.PlayerSkinKskin","1359994618"],["mw.PlayerSkinMvpcf","1359994618"],["mw.TimedText","1361328932",["mw.EmbedPlayer","jquery.ui.dialog","mw.TextSource"]],["mw.TextSource","1359994618",["mediawiki.UtilitiesTime","mw.ajaxProxy"]],["ext.articleFeedback.startup","1359994398",["mediawiki.util","mediawiki.user"]],["ext.articleFeedback","1361329103",["jquery.ui.dialog","jquery.ui.button","jquery.articleFeedback","jquery.cookie","jquery.clickTracking","ext.articleFeedback.ratingi18n"]],["ext.articleFeedback.ratingi18n","1347062400"],["ext.articleFeedback.dashboard","1359994398"],["jquery.articleFeedback","1361329103",["jquery.appear","jquery.tipsy",
"jquery.json","jquery.localize","jquery.ui.dialog","jquery.ui.button","jquery.cookie","jquery.clickTracking","mediawiki.jqueryMsg","mediawiki.language"]],["mobile.device.default","1361312968"],["mobile.device.","1347062400"],["mobile.device.ie","1361312968"],["mobile.device.iphone","1361312968"],["mobile.device.kindle","1361312968"],["mobile.device.blackberry","1361312968"],["mobile.device.simple","1361312969"],["mobile.device.psp","1361312969"],["mobile.device.wii","1361312969"],["mobile.device.operamini","1361312969"],["mobile.device.operamobile","1361312969"],["mobile.device.nokia","1361312968"],["ext.wikihiero","1359994771"],["ext.wikihiero.Special","1359994771",["jquery.spinner"]],["ext.cite","1359994435",["jquery.tooltip"]],["jquery.tooltip","1359994435"],["ext.specialcite","1359994435"],["ext.geshi.local","1347062400"],["ext.categoryTree","1361328876"],["ext.categoryTree.css","1359994413"],["ext.quiz","1359994586"],["ext.nuke","1359994561"],["ext.centralauth","1361330550",[
"mediawiki.util"]],["ext.centralauth.noflash","1359994426"],["ext.centralauth.globalusers","1359994426"],["ext.centralauth.globalgrouppermissions","1359994426"],["ext.centralNotice.interface","1359994430",["jquery.ui.datepicker"]],["ext.centralNotice.bannerStats","1359994430"],["ext.centralNotice.bannerController","1359994430"],["ext.abuseFilter","1359994390"],["ext.abuseFilter.edit","1361356020",["mediawiki.util","jquery.textSelection","jquery.spinner"]],["ext.abuseFilter.tools","1359994390",["mediawiki.util","jquery.spinner"]],["ext.abuseFilter.examine","1359994390",["mediawiki.util"]],["ext.vector.collapsibleNav","1361329136",["mediawiki.util","jquery.client","jquery.cookie","jquery.tabIndex"],"ext.vector"],["ext.vector.collapsibleTabs","1359994678",["jquery.collapsibleTabs","jquery.delayedBind"],"ext.vector"],["ext.vector.editWarning","1361329136",[],"ext.vector"],["ext.vector.expandableSearch","1359994678",["jquery.client","jquery.expandableField","jquery.delayedBind"],
"ext.vector"],["ext.vector.footerCleanup","1359994678",["mediawiki.jqueryMsg","jquery.cookie"],"ext.vector"],["ext.vector.sectionEditLinks","1359994678",["jquery.cookie","jquery.clickTracking"],"ext.vector"],["contentCollector","1359994725",[],"ext.wikiEditor"],["jquery.wikiEditor","1361329021",["jquery.client","jquery.textSelection","jquery.delayedBind"],"ext.wikiEditor"],["jquery.wikiEditor.iframe","1359994725",["jquery.wikiEditor","contentCollector"],"ext.wikiEditor"],["jquery.wikiEditor.dialogs","1359994725",["jquery.wikiEditor","jquery.wikiEditor.toolbar","jquery.ui.dialog","jquery.ui.button","jquery.ui.draggable","jquery.ui.resizable","jquery.tabIndex"],"ext.wikiEditor"],["jquery.wikiEditor.dialogs.config","1361329098",["jquery.wikiEditor","jquery.wikiEditor.dialogs","jquery.wikiEditor.toolbar.i18n","jquery.suggestions","mediawiki.Title","mediawiki.jqueryMsg"],"ext.wikiEditor"],["jquery.wikiEditor.highlight","1359994725",["jquery.wikiEditor","jquery.wikiEditor.iframe"],
"ext.wikiEditor"],["jquery.wikiEditor.preview","1359994725",["jquery.wikiEditor"],"ext.wikiEditor"],["jquery.wikiEditor.previewDialog","1359994725",["jquery.wikiEditor","jquery.wikiEditor.dialogs"],"ext.wikiEditor"],["jquery.wikiEditor.publish","1359994725",["jquery.wikiEditor","jquery.wikiEditor.dialogs"],"ext.wikiEditor"],["jquery.wikiEditor.templateEditor","1359994725",["jquery.wikiEditor","jquery.wikiEditor.iframe","jquery.wikiEditor.dialogs"],"ext.wikiEditor"],["jquery.wikiEditor.templates","1359994725",["jquery.wikiEditor","jquery.wikiEditor.iframe"],"ext.wikiEditor"],["jquery.wikiEditor.toc","1359994725",["jquery.wikiEditor","jquery.wikiEditor.iframe","jquery.ui.draggable","jquery.ui.resizable","jquery.autoEllipsis","jquery.color"],"ext.wikiEditor"],["jquery.wikiEditor.toolbar","1359994725",["jquery.wikiEditor","jquery.wikiEditor.toolbar.i18n"],"ext.wikiEditor"],["jquery.wikiEditor.toolbar.config","1359994725",["jquery.wikiEditor","jquery.wikiEditor.toolbar.i18n",
"jquery.wikiEditor.toolbar","jquery.cookie","jquery.async"],"ext.wikiEditor"],["jquery.wikiEditor.toolbar.i18n","1347062400",[],"ext.wikiEditor"],["ext.wikiEditor","1359994725",["jquery.wikiEditor"],"ext.wikiEditor"],["ext.wikiEditor.dialogs","1359994725",["ext.wikiEditor","ext.wikiEditor.toolbar","jquery.wikiEditor.dialogs","jquery.wikiEditor.dialogs.config"],"ext.wikiEditor"],["ext.wikiEditor.highlight","1359994725",["ext.wikiEditor","jquery.wikiEditor.highlight"],"ext.wikiEditor"],["ext.wikiEditor.preview","1359994725",["ext.wikiEditor","jquery.wikiEditor.preview"],"ext.wikiEditor"],["ext.wikiEditor.previewDialog","1359994725",["ext.wikiEditor","jquery.wikiEditor.previewDialog"],"ext.wikiEditor"],["ext.wikiEditor.publish","1359994725",["ext.wikiEditor","jquery.wikiEditor.publish"],"ext.wikiEditor"],["ext.wikiEditor.templateEditor","1359994725",["ext.wikiEditor","ext.wikiEditor.highlight","jquery.wikiEditor.templateEditor"],"ext.wikiEditor"],["ext.wikiEditor.templates","1359994725",[
"ext.wikiEditor","ext.wikiEditor.highlight","jquery.wikiEditor.templates"],"ext.wikiEditor"],["ext.wikiEditor.toc","1359994725",["ext.wikiEditor","ext.wikiEditor.highlight","jquery.wikiEditor.toc"],"ext.wikiEditor"],["ext.wikiEditor.tests.toolbar","1359994725",["ext.wikiEditor.toolbar"],"ext.wikiEditor"],["ext.wikiEditor.toolbar","1359994725",["ext.wikiEditor","jquery.wikiEditor.toolbar","jquery.wikiEditor.toolbar.config"],"ext.wikiEditor"],["ext.wikiEditor.toolbar.hideSig","1359994725",[],"ext.wikiEditor"],["jquery.clickTracking","1359994437",["jquery.cookie","mediawiki.util"]],["ext.clickTrackingSidebar","1359994437",["jquery.clickTracking"]],["ext.UserBuckets","1359994437",["jquery.clickTracking","jquery.json","jquery.cookie"]],["ext.wikiLove.icon","1359994727"],["ext.wikiLove.defaultOptions","1361329256"],["ext.wikiLove.startup","1361329256",["ext.wikiLove.defaultOptions","jquery.ui.dialog","jquery.ui.button","jquery.localize","jquery.elastic"]],["ext.wikiLove.local","1361329472"],
["ext.wikiLove.init","1359994726",["ext.wikiLove.startup"]],["jquery.elastic","1359994727"],["mobile.site","1352776723",[],"site"],["mobile.desktop","1361312968",["jquery.cookie"]],["mobile.watchlist.schema","1347062400",["ext.eventLogging"]],["ext.math.mathjax","1359994542",[],"ext.math.mathjax"],["ext.math.mathjax.enabler","1360879890"],["ext.babel","1359994411"],["ext.apiSandbox","1361350009",["mediawiki.util","jquery.ui.button"]],["ext.interwiki.specialpage","1359994524",["jquery.makeCollapsible"]],["ext.eventLogging","1359994491",["jquery.json","mediawiki.util"]],["ext.eventLogging.jsonSchema","1360877747"],["ext.TemplateSandbox","1359994613"],["ext.checkUser","1359994433",["mediawiki.util"]],["mw.PopUpMediaTransform","1359994618",["jquery.ui.dialog"]],["embedPlayerIframeStyle","1359994618"],["ext.tmh.transcodetable","1361346895"],["mw.MediaWikiPlayerSupport","1359994618",["mw.Api"]]]);mw.config.set({"wgLoadScript":"//bits.wikimedia.org/zh.wikipedia.org/load.php","debug":false,
"skin":"vector","stylepath":"//bits.wikimedia.org/static-1.21wmf9/skins","wgUrlProtocols":"http\\:\\/\\/|https\\:\\/\\/|ftp\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|gopher\\:\\/\\/|telnet\\:\\/\\/|nntp\\:\\/\\/|worldwind\\:\\/\\/|mailto\\:|news\\:|svn\\:\\/\\/|git\\:\\/\\/|mms\\:\\/\\/|\\/\\/","wgArticlePath":"/wiki/$1","wgScriptPath":"/w","wgScriptExtension":".php","wgScript":"/w/index.php","wgVariantArticlePath":"/$2/$1","wgActionPaths":{},"wgServer":"//zh.wikipedia.org","wgUserLanguage":"zh-cn","wgContentLanguage":"zh","wgVersion":"1.21wmf9","wgEnableAPI":true,"wgEnableWriteAPI":true,"wgMainPageTitle":"Wikipedia:首页","wgFormattedNamespaces":{"-2":"Media","-1":"Special","0":"","1":"Talk","2":"User","3":"User talk","4":"Wikipedia","5":"Wikipedia talk","6":"File","7":"File talk","8":"MediaWiki","9":"MediaWiki talk","10":"Template","11":"Template talk","12":"Help","13":"Help talk","14":"Category","15":"Category talk","100":"Portal","101":"Portal talk"},"wgNamespaceIds":{"media":-2,
"special":-1,"":0,"talk":1,"user":2,"user_talk":3,"wikipedia":4,"wikipedia_talk":5,"file":6,"file_talk":7,"mediawiki":8,"mediawiki_talk":9,"template":10,"template_talk":11,"help":12,"help_talk":13,"category":14,"category_talk":15,"portal":100,"portal_talk":101,"媒体":-2,"媒體":-2,"特殊":-1,"对话":1,"對話":1,"讨论":1,"討論":1,"用户":2,"用戶":2,"用户对话":3,"用戶對話":3,"用户讨论":3,"用戶討論":3,"图像":6,"圖像":6,"档案":6,"檔案":6,"文件":6,"图像对话":7,"圖像對話":7,"图像讨论":7,"圖像討論":7,"档案对话":7,"檔案對話":7,"档案讨论":7,"檔案討論":7,"文件对话":7,"文件對話":7,"文件讨论":7,"文件討論":7,"模板":10,"样板":10,"樣板":10,"模板对话":11,"模板對話":11,"模板讨论":11,"模板討論":11,"样板对话":11,"樣板對話":11,"样板讨论":11,"樣板討論":11,"帮助":12,"幫助":12,"帮助对话":13,"幫助對話":13,"帮助讨论":13,"幫助討論":13,"分类":14,"分類":14,
"分类对话":15,"分類對話":15,"分类讨论":15,"分類討論":15,"维基百科":4,"維基百科":4,"wp":4,"维基百科讨论":5,"维基百科对话":5,"維基百科討論":5,"維基百科對話":5,"t":10,"wt":5,"cat":14,"h":12,"p":100,"image":6,"image_talk":7,"project":4,"project_talk":5},"wgSiteName":"Wikipedia","wgFileExtensions":["png","gif","jpg","jpeg","xcf","pdf","mid","ogg","ogv","svg","djvu","tiff","tif","ogg","ogv","oga","webm"],"wgDBname":"zhwiki","wgFileCanRotate":true,"wgAvailableSkins":{"chick":"Chick","monobook":"MonoBook","vector":"Vector","myskin":"MySkin","nostalgia":"Nostalgia","simple":"Simple","standard":"Standard","modern":"Modern","cologneblue":"CologneBlue"},"wgExtensionAssetsPath":"//bits.wikimedia.org/static-1.21wmf9/extensions","wgCookiePrefix":"zhwiki","wgResourceLoaderMaxQueryLength":-1,"wgCaseSensitiveNamespaces":[],"EmbedPlayer.DirectFileLinkWarning":true,"EmbedPlayer.EnableOptionsMenu":true,"EmbedPlayer.DisableJava":false,
"EmbedPlayer.DisableHTML5FlashFallback":true,"TimedText.ShowInterface":"always","TimedText.ShowAddTextLink":true,"EmbedPlayer.WebPath":"//bits.wikimedia.org/static-1.21wmf9/extensions/TimedMediaHandler/MwEmbedModules/EmbedPlayer","wgCortadoJarFile":false,"TimedText.ShowInterface.local":"off","AjaxRequestTimeout":30,"MediaWiki.DefaultProvider":"local","MediaWiki.ApiProviders":{"wikimediacommons":{"url":"//commons.wikimedia.org/w/api.php"}},"MediaWiki.ApiPostActions":["login","purge","rollback","delete","undelete","protect","block","unblock","move","edit","upload","emailuser","import","userrights"],"EmbedPlayer.OverlayControls":true,"EmbedPlayer.CodecPreference":["webm","h264","ogg"],"EmbedPlayer.DisableVideoTagSupport":false,"EmbedPlayer.ReplaceSources":null,"EmbedPlayer.EnableFlavorSelector":false,"EmbedPlayer.EnableIpadHTMLControls":true,"EmbedPlayer.WebKitPlaysInline":false,"EmbedPlayer.EnableIpadNativeFullscreen":false,"EmbedPlayer.iPhoneShowHTMLPlayScreen":true,
"EmbedPlayer.ForceLargeReplayButton":false,"EmbedPlayer.LibraryPage":"http://www.kaltura.org/project/HTML5_Video_Media_JavaScript_Library","EmbedPlayer.RewriteSelector":"video,audio,playlist","EmbedPlayer.DefaultSize":"400x300","EmbedPlayer.ControlsHeight":31,"EmbedPlayer.TimeDisplayWidth":85,"EmbedPlayer.KalturaAttribution":true,"EmbedPlayer.AttributionButton":{"title":"Kaltura html5 video library","href":"http://www.kaltura.com","class":"kaltura-icon","style":[],"iconurl":false},"EmbedPlayer.EnableRightClick":true,"EmbedPlayer.EnabledOptionsMenuItems":["playerSelect","download","share","aboutPlayerLibrary"],"EmbedPlayer.WaitForMeta":true,"EmbedPlayer.ShowNativeWarning":true,"EmbedPlayer.ShowPlayerAlerts":true,"EmbedPlayer.EnableFullscreen":true,"EmbedPlayer.EnableTimeDisplay":true,"EmbedPlayer.EnableVolumeControl":true,"EmbedPlayer.NewWindowFullscreen":false,"EmbedPlayer.FullscreenTip":true,"EmbedPlayer.FirefoxLink":"http://www.mozilla.com/en-US/firefox/upgrade.html?from=mwEmbed",
"EmbedPlayer.NativeControls":false,"EmbedPlayer.NativeControlsMobileSafari":true,"EmbedPlayer.FullScreenZIndex":999998,"EmbedPlayer.ShareEmbedMode":"iframe","EmbedPlayer.SkinList":["mvpcf","kskin"],"EmbedPlayer.DefaultSkin":"mvpcf","EmbedPlayer.MonitorRate":250,"EmbedPlayer.UseFlashOnAndroid":false,"EmbedPlayer.EnableURLTimeEncoding":"flash","EmbedPLayer.IFramePlayer.DomainWhiteList":"*","EmbedPlayer.EnableIframeApi":true,"EmbedPlayer.PageDomainIframe":true,"EmbedPlayer.NotPlayableDownloadLink":true,"EmbedPlayer.BlackPixel":"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%01%00%00%00%01%08%02%00%00%00%90wS%DE%00%00%00%01sRGB%00%AE%CE%1C%E9%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%07tIME%07%DB%0B%0A%17%041%80%9B%E7%F2%00%00%00%19tEXtComment%00Created%20with%20GIMPW%81%0E%17%00%00%00%0CIDAT%08%D7c%60%60%60%00%00%00%04%00%01\'4\'%0A%00%00%00%00IEND%AEB%60%82","TimedText.ShowRequestTranscript":false,"TimedText.NeedsTranscriptCategory":
"Videos needing subtitles","TimedText.BottomPadding":10,"TimedText.BelowVideoBlackBoxHeight":40,"wgCollapsibleNavBucketTest":false,"wgCollapsibleNavForceNewVersion":false,"wgWikiEditorToolbarClickTracking":false,"wgWikiEditorMagicWords":{"redirect":"#重定向","img_right":"右","img_left":"左","img_none":"无","img_center":"居中","img_thumbnail":"缩略图","img_framed":"有框","img_frameless":"无框"},"wgArticleFeedbackSMaxage":2592000,"wgArticleFeedbackCategories":[],"wgArticleFeedbackBlacklistCategories":["消歧义","条目删除候选","怀疑侵犯版权页面","快速删除候选","禁止索引的页面"],"wgArticleFeedbackLotteryOdds":100,"wgArticleFeedbackTracking":{"buckets":{"track":100,"ignore":0},"version":10,"expires":30,"tracked":false},"wgArticleFeedbackOptions":{"buckets":{"show":100,"hide":0},"version":8,"expires":30,"tracked":false},"wgArticleFeedbackNamespaces":[0],"wgArticleFeedbackWhatsThisPage":"Project:条目评分工具",
"wgArticleFeedbackRatingTypesFlipped":{"trustworthy":1,"objective":2,"complete":3,"wellwritten":4},"wgCookiePath":"/","wgMFStopRedirectCookieHost":".wikipedia.org","wgEventLoggingBaseUri":"//bits.wikimedia.org/event.gif","wgNoticeFundraisingUrl":"https://donate.wikimedia.org/wiki/Special:LandingCheck","wgCentralPagePath":"//meta.wikimedia.org/w/index.php","wgNoticeBannerListLoader":"Special:横幅列表装载器","wgCentralBannerDispatcher":"//meta.wikimedia.org/wiki/Special:BannerRandom","wgCentralBannerRecorder":"//meta.wikimedia.org/wiki/Special:RecordImpression","wgNoticeXXCountries":["XX","EU","AP","A1","A2","O1"],"wgNoticeNumberOfBuckets":4,"wgNoticeBucketExpiry":7,"wgNoticeNumberOfControllerBuckets":2,"wgNoticeCookieShortExpiry":1209600});};if(isCompatible()){document.write(
"\x3cscript src=\"//bits.wikimedia.org/zh.wikipedia.org/load.php?debug=false\x26amp;lang=zh-cn\x26amp;modules=jquery%2Cmediawiki%2CSpinner%7Cjquery.triggerQueueCallback%2CloadingSpinner%2CmwEmbedUtil%7Cmw.MwEmbedSupport\x26amp;only=scripts\x26amp;skin=vector\x26amp;version=20130213T133215Z\"\x3e\x3c/script\x3e");}delete isCompatible;
/* cache key: zhwiki:resourceloader:filter:minify-js:7:06343dfb5df5059869353804c42f9cdd */