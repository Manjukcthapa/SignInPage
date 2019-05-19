self.AMP_CONFIG={"amp-consent":1,"pump-early-frame":1,"chunked-amp":1,"amp-ad-ff-adx-ady":0.01,"amp-list-load-more":1,"hidden-mutation-observer":1,"expAdsenseCanonical":0.01,"canary":0,"expAdsenseUnconditionedCanonical":0.01,"amp-story-v1":1,"ad-type-custom":1,"amp-list-viewport-resize":1,"no-sync-xhr-in-ads":1,"a4aProfilingRate":0.01,"allow-url-opt-in":["pump-early-frame","twitter-default-placeholder","twitter-default-placeholder-fade","twitter-default-placeholder-pulse"],"version-locking":1,"amp-sidebar toolbar":1,"amp-auto-ads-adsense-holdout":0.1,"as-use-attr-for-format":0.01,"amp-auto-ads-adsense-responsive":0,"blurry-placeholder":1,"font-display-swap":1,"amp-ima-video":1,"amp-playbuzz":1,"flexAdSlots":0.01,"amp-auto-lightbox":1,"amp-img-auto-sizes":1,"amp-auto-ads":1,"fixed-elements-in-lightbox":1,"amp-date-picker":1,"amp-access-iframe":1,"a4aFastFetchAdSenseLaunched":0,"doubleclickSraExp":0.01,"allow-doc-opt-in":["amp-date-picker","amp-img-auto-sizes","amp-next-page","ampdoc-shell","disable-amp-story-desktop","inabox-viewport-friendly","linker-meta-opt-in","inabox-remove-height-auto"],"amp-apester-media":1,"doubleclickSraReportExcludedBlock":0.1,"amp-live-list-sorting":1,"linker-meta-opt-in":1,"ampdoc-closest":0.01,"amp-story-responsive-units":1,"user-error-reporting":1,"expAdsenseA4A":0.01,"a4aFastFetchDoubleclickLaunched":0,"linker-form":1,"no-initial-intersection":1,"sandbox-ads":1,"v":"011905091827220","type":"production"};/*AMP_CONFIG*/(function(){var h;function k(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function r(a){return k(Number(a.left),Number(a.top),Number(a.width),Number(a.height))};function t(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function w(a){var b=Object.create(null);if(!a)return b;for(var c;c=aa.exec(a);){var d=t(c[1],c[1]),e=c[2]?t(c[2],c[2]):"";b[d]=e}return b};var x="";
function y(a){var b=a||self;if(b.AMP_MODE)var c=b.AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},e=!!d.test||!1,f=w(c.location.originalHash||c.location.hash);d=d.spt;var g=w(c.location.search);x||(x=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011905091827220");c=b.AMP_MODE={localDev:!1,development:!("1"!=f.development&&!c.AMP_DEV_MODE),examiner:"2"==f.development,filter:f.filter,geoOverride:f["amp-geo"],minified:!0,lite:void 0!=g.amp_lite,test:e,log:f.log,version:"1905091827220",rtvVersion:x,singlePassType:d}}return c}
;function ba(){var a=ca;self.reportError=a}
function z(a,b,c){this.win=y().test&&a.AMP_TEST_IFRAME?a.parent:a;this.W=b;this.w=this.win.console&&this.win.console.log&&"0"!=y().log?y().test&&this.win.ENABLE_LOG?4:y().localDev&&!y().log?3:this.W({localDev:y(void 0).localDev,development:y(void 0).development,filter:y(void 0).filter,minified:y(void 0).minified,lite:y(void 0).lite,test:y(void 0).test,log:y(void 0).log,version:y(void 0).version,rtvVersion:y(void 0).rtvVersion,singlePassType:y(void 0).singlePassType}):0;this.G=c||""}
function A(a,b,c,d){if(0!=a.w){var e=a.win.console.log;"ERROR"==c?e=a.win.console.error||e:"INFO"==c?e=a.win.console.info||e:"WARN"==c&&(e=a.win.console.warn||e);y().localDev&&d.unshift("["+b+"]");e.apply(a.win.console,d)}}h=z.prototype;h.isEnabled=function(){return 0!=this.w};h.fine=function(a,b){4<=this.w&&A(this,a,"FINE",Array.prototype.slice.call(arguments,1))};h.info=function(a,b){3<=this.w&&A(this,a,"INFO",Array.prototype.slice.call(arguments,1))};
h.warn=function(a,b){2<=this.w&&A(this,a,"WARN",Array.prototype.slice.call(arguments,1))};h.O=function(a,b){if(1<=this.w)A(this,a,"ERROR",Array.prototype.slice.call(arguments,1));else{var c=B.apply(null,Array.prototype.slice.call(arguments,1));C(this,c);return c}};h.error=function(a,b){var c=this.O.apply(this,arguments);c&&(c.name=a||c.name,self.reportError(c))};h.expectedError=function(a,b){var c=this.O.apply(this,arguments);c&&(c.expected=!0,self.reportError(c))};
h.createError=function(a){var b=B.apply(null,arguments);C(this,b);return b};h.createExpectedError=function(a){var b=B.apply(null,arguments);C(this,b);b.expected=!0;return b};
h.assert=function(a,b,c){var d;if(!a){var e=(b||"Assertion failed").split("%s"),f=e.shift(),g=f,l=[],m=2;for(""!=f&&l.push(f);0<e.length;){var q=e.shift(),n=arguments[m++];n&&n.tagName&&(d=n);l.push(n);f=q.trim();""!=f&&l.push(f);f=n;g+=(f&&1==f.nodeType?f.tagName.toLowerCase()+(f.id?"#"+f.id:""):f)+q}m=Error(g);m.fromAssert=!0;m.associatedElement=d;m.messageArray=l;C(this,m);self.reportError(m);throw m;}return a};
h.assertElement=function(a,b){this.assert(a&&1==a.nodeType,(b||"Element expected")+": %s",a);return a};h.assertString=function(a,b){this.assert("string"==typeof a,(b||"String expected")+": %s",a);return a};h.assertNumber=function(a,b){this.assert("number"==typeof a,(b||"Number expected")+": %s",a);return a};h.assertArray=function(a,b){this.assert(Array.isArray(a),(b||"Array expected")+": %s",a);return a};h.assertBoolean=function(a,b){this.assert(!!a===a,(b||"Boolean expected")+": %s",a);return a};
h.assertEnumValue=function(a,b,c){a:{for(var d in a)if(a[d]===b){a=!0;break a}a=!1}if(a)return b;this.assert(!1,'Unknown %s value: "%s"',c||"enum",b)};function C(a,b){b=D(b);a.G?b.message?-1==b.message.indexOf(a.G)&&(b.message+=a.G):b.message=a.G:0<=b.message.indexOf("\u200b\u200b\u200b")&&(b.message=b.message.replace("\u200b\u200b\u200b",""))}
function D(a){var b=Object.getOwnPropertyDescriptor(a,"message");if(b&&b.writable)return a;var c=a.stack,d=Error(a.message),e;for(e in a)d[e]=a[e];d.stack=c;return d}function B(a){for(var b=null,c="",d=0;d<arguments.length;d++){var e=arguments[d];e instanceof Error&&!b?b=D(e):(c&&(c+=" "),c+=e)}b?c&&(b.message=c+": "+b.message):b=Error(c);return b}self.log=self.log||{user:null,dev:null,userForEmbed:null};var E=self.log,F=null;function G(){E.user||(E.user=da());return E.user}
function da(){var a="\u200b\u200b\u200b";if(!F)throw Error("failed to call initLogConstructor");return new F(self,function(a){var b=parseInt(a.log,10);return a.development||1<=b?4:2},a)}function H(){if(E.dev)return E.dev;if(!F)throw Error("failed to call initLogConstructor");return E.dev=new F(self,function(a){a=parseInt(a.log,10);return 3<=a?4:2<=a?3:0})};function I(a){return a||{}};function J(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};var K,L="Webkit webkit Moz moz ms O o".split(" ");function M(a,b,c){if(J(b,"--"))return b;K||(K=Object.create(null));var d=K[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<L.length;f++){var g=L[f]+e;if(void 0!==a[g]){e=g;break a}}e=""}var l=e;void 0!==a[l]&&(d=l)}c||(K[b]=d)}return d}function ea(a){var b={"pointer-events":"none"};a=a.style;for(var c in b)a.setProperty(M(a,c),b[c].toString(),"important")}
function N(a,b,c){var d;(b=M(a.style,b,void 0))&&(a.style[b]=d?c+d:c)}function O(a,b){for(var c in b)N(a,c,b[c])}function fa(a,b){for(var c=0;c<b.length;c++)N(a,b[c],null)};function ha(a,b,c){var d=150,e=c.width/2-b.width/2-b.left+"px",f=c.height/2-b.height/2-b.top+"px",g=b.top+"px",l=c.width-(b.left+b.width)+"px",m=b.left+"px",q=c.height-(b.top+b.height)+"px",n=b.height+"px",u=b.width+"px";var p=e;var v=f;"number"==typeof p&&(p+="px");void 0===v?p="translate("+p+")":("number"==typeof v&&(v+="px"),p="translate("+p+", "+v+")");O(a,{position:"fixed",top:g,right:l,left:m,bottom:q,height:n,width:u,transition:"transform "+d+"ms ease",transform:p,margin:0})};function P(a,b,c){a.requestAnimationFrame(function(){b.measure&&b.measure(c);b.mutate&&b.mutate(c)})}function ia(a){var b=200;setTimeout(a,b)};function ja(a,b,c){P(a,{measure:function(c){c.viewportSize={width:a.innerWidth,height:a.innerHeight};c.rect=r(b.getBoundingClientRect())},mutate:function(d){var e=d.viewportSize,f=k(0,0,e.width,e.height);ha(b,d.rect,d.viewportSize);ea(b);ia(function(){P(a,{mutate:function(){fa(b,["pointer-events"]);O(b,{position:"fixed","z-index":1E3,left:0,right:0,top:0,bottom:0,width:"100vw",height:"100vh",transition:null,transform:null,margin:0,border:0});c(d.rect,f)}})})}},{})}
function ka(a,b,c,d){P(a,{mutate:function(){fa(b,"position z-index left right top bottom width height margin border".split(" "));c();P(a,{measure:function(){d(r(b.getBoundingClientRect()))}})}})}var la={get expandFrame(){return ja},get collapseFrame(){return ka}};function Q(a){this.o=a;this.H=this.K=!1;this.B=null;oa(this)}function oa(a){a.o.addEventListener("resize",function(){return a.onWindowResize()})}Q.prototype.onWindowResize=function(){this.K&&(this.H=!0)};Q.prototype.expandFrame=function(a,b){var c=this;la.expandFrame(this.o,a,function(a,e){c.K=!0;c.H=!1;c.B=a;b(e)})};Q.prototype.collapseFrame=function(a,b){var c=this;la.collapseFrame(this.o,a,function(){c.K=!1;c.H||b(c.B)},function(a){c.B=a;c.H&&b(c.B)})};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function R(a,b,c){c=void 0===c?{}:c;var d=void 0===d?null:d;c.type=a;c.sentinel=b;return"amp-"+(d||"")+JSON.stringify(c)};function pa(){this.h=null}h=pa.prototype;h.add=function(a){var b=this;this.h||(this.h=[]);this.h.push(a);return function(){b.remove(a)}};h.remove=function(a){this.h&&(a=this.h.indexOf(a),-1<a&&this.h.splice(a,1))};h.removeAll=function(){this.h&&(this.h.length=0)};h.fire=function(a){if(this.h)for(var b=this.h,c=0;c<b.length;c++)(0,b[c])(a)};h.getHandlerCount=function(){return this.h?this.h.length:0};function qa(a,b){function c(c){g=null;f=a.setTimeout(d,e);b.apply(null,c)}function d(){f=0;g&&c(g)}var e=100,f=0,g=null;return function(a){for(var b=[],e=0;e<arguments.length;++e)b[e-0]=arguments[e];f?g=b:c(b)}};function S(a){this.o=a;this.F=null;var b=this.o;a=b.document;if(a.scrollingElement)a=a.scrollingElement;else{var c;if(c=a.body)b=b.navigator.userAgent,c=/WebKit/i.test(b)&&!/Edge/i.test(b);a=c?a.body:a.documentElement}this.X=a;this.I=null}
S.prototype.observe=function(a,b){var c=this;if(!this.F){this.F=new pa;var d=qa(this.o,function(){c.I=c.getViewportRect();c.F.fire()});this.I=this.getViewportRect();this.o.addEventListener("scroll",d,!0);this.o.addEventListener("resize",d,!0)}b({viewportRect:this.I,targetRect:this.getTargetRect(a)});return this.F.add(function(){b({viewportRect:c.I,targetRect:c.getTargetRect(a)})})};
S.prototype.getViewportRect=function(){var a=this.X,b=this.o,c=a.scrollLeft||b.pageXOffset,d=a.scrollTop||b.pageYOffset;return k(Math.round(c),Math.round(d),b.innerWidth,b.innerHeight)};S.prototype.getTargetRect=function(a){for(var b=r(a.getBoundingClientRect()),c=a.ownerDocument.defaultView,d=0,e=c;10>d&&e!=this.o&&e!=this.o.top;d++,e=e.parent){var f=r(e.frameElement.getBoundingClientRect());a=b;var g=f.left,l=f.top;b=0==g&&0==l||0==a.width&&0==a.height?a:k(a.left+g,a.top+l,a.width,a.height)}return b};function T(){var a=100;this.R=a;this.J=this.N=0;this.A=Object.create(null)}T.prototype.has=function(a){return!!this.A[a]};T.prototype.get=function(a){var b=this.A[a];if(b)return b.access=++this.J,b.payload};T.prototype.put=function(a,b){this.has(a)||this.N++;this.A[a]={payload:b,access:this.J};if(!(this.N<=this.R)){H().warn("lru-cache","Trimming LRU cache");a=this.A;var c=this.J+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.N--)}};var U=self.AMP_CONFIG||{},ra={thirdParty:U.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:U.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof U.thirdPartyFrameRegex?new RegExp(U.thirdPartyFrameRegex):U.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:U.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof U.cdnProxyRegex?new RegExp(U.cdnProxyRegex):U.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:U.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:U.localDev||!1};I({c:!0,v:!0,a:!0,ad:!0,action:!0});var V,sa;function ta(a){try{return!!a.location.href&&(a.test||!0)}catch(b){return!1}};var ua=["send-positions"];function W(){this.L={}}W.prototype.listen=function(a,b){this.L[a]=b};W.prototype.fire=function(a,b,c){return a in this.L?this.L[a].apply(b,c):!1};function va(a,b){this.C=b;this.j=Object.create(null);this.M=new S(a);this.D=new W;this.P=new Q(a);this.D.listen("send-positions",this.V);this.D.listen("full-overlay-frame",this.U);this.D.listen("cancel-full-overlay-frame",this.T)}h=va.prototype;
h.processMessage=function(a){var b=a.data;if("string"==typeof b&&0==b.indexOf("amp-")&&-1!=b.indexOf("{")){var c=b.indexOf("{");try{var d=JSON.parse(b.substr(c))}catch(p){H().error("MESSAGING","Failed to parse message: "+b,p),d=null}}else d=null;if(!d||!d.sentinel)return!1;a:if(b=d.sentinel,this.j[b])b=this.j[b];else{if(c=this.getMeasureableFrame(a.source))for(var e=c.contentWindow,f=0;f<this.C.length;f++)for(var g=this.C[f],l=0,m=e;10>l;l++,m=m.parent){if(g.contentWindow==m){this.j[b]={iframe:g,
measurableFrame:c};b=this.j[b];break a}if(m==window.top)break}b=null}var q=b;if(!q)return H().info("InaboxMessagingHost","Ignored message from untrusted iframe:",a),!1;var n=q.iframe.dataset.ampAllowed,u=n?n.split(/\s*,\s*/):ua;return-1===u.indexOf(d.type)?(H().info("InaboxMessagingHost","Ignored non-whitelisted message type:",a),!1):this.D.fire(d.type,this,[q.measurableFrame,d,a.source,a.origin])?!0:(H().warn("InaboxMessagingHost","Unprocessed AMP message:",a),!1)};
h.V=function(a,b,c,d){var e=this.M.getViewportRect(),f=this.M.getTargetRect(a);wa(b,c,d,I({viewportRect:e,targetRect:f}));this.j[b.sentinel].observeUnregisterFn=this.j[b.sentinel].observeUnregisterFn||this.M.observe(a,function(a){return wa(b,c,d,a)});return!0};function wa(a,b,c,d){b.postMessage(R("position",a.sentinel,d),c)}h.U=function(a,b,c,d){this.P.expandFrame(a,function(a){c.postMessage(R("full-overlay-frame-response",b.sentinel,I({success:!0,boxRect:a})),d)});return!0};
h.T=function(a,b,c,d){this.P.collapseFrame(a,function(a){c.postMessage(R("cancel-full-overlay-frame-response",b.sentinel,I({success:!0,boxRect:a})),d)});return!0};h.getMeasureableFrame=function(a){if(!a)return null;for(var b,c=0,d=a;10>c&&d!=d.top&&!ta(d);c++,b=d,d=d.parent);if(b){c=b.parent.document.querySelectorAll("iframe");d=0;for(var e=c[d];d<c.length;d++,e=c[d])if(e.contentWindow==b)return e}return a.frameElement};
h.unregisterIframe=function(a){var b=this.C.indexOf(a);-1!=b&&this.C.splice(b,1);for(var c in this.j)this.j[c].iframe==a&&(this.j[c].observeUnregisterFn&&this.j[c].observeUnregisterFn(),delete this.j[c])};function xa(a){a=a.__AMP_TOP||a;return ya(a,"ampdoc")}function za(a){var b=Aa(a);b=Aa(b);b=b.isSingleDoc()?b.win:b;return ya(b,"viewer")}function Aa(a){return a.nodeType?xa((a.ownerDocument||a).defaultView).getAmpDoc(a):a}function ya(a,b){var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};function Ba(){var a=Ca();return function(b){return setTimeout(b,a())}}function Ca(){var a=0;return function(){var b=Math.pow(1.5,a++);var c=b*(c||.3)*Math.random();.5<Math.random()&&(c*=-1);b+=c;return 1E3*b}};var Da=!1;function Ea(a){Da||(Da=!0,O(a.body,{opacity:1,visibility:"visible",animation:"none"}))};var X=self.AMPErrors||[];self.AMPErrors=X;function Y(a){Y=Ba();return Y(a)}function Fa(a){try{return JSON.stringify(a)}catch(b){return String(a)}}var Z;
function ca(a,b){try{if(a)if(void 0!==a.message){a=D(a);var c=!0}else{var d=a;a=Error(Fa(d));a.origError=d}else a=Error("Unknown error");c||!y().localDev||y().test||setTimeout(function(){var b=Error("_reported_ Error reported incorrectly: "+a);throw b;});if(a.reported)return a;a.reported=!0;var e=b||a.associatedElement;e&&e.classList&&(e.classList.add("i-amphtml-error"),y().development&&(e.classList.add("i-amphtml-element-error"),e.setAttribute("error-message",a.message)));if(self.console){var f=
console.error||console.log;a.messageArray?f.apply(console,a.messageArray):e?f.call(console,a.message,e):y().minified?f.call(console,a.message):f.call(console,a.stack)}e&&e.S&&e.S("amp:error",a.message);Ga.call(void 0,void 0,void 0,void 0,void 0,a)}catch(g){setTimeout(function(){throw g;})}return a}
function Ga(a,b,c,d,e){var f=this;this&&this.document&&Ea(this.document);if(!(y().localDev||y().development||y().test)){var g=!1;try{g=Ha()}catch(m){}if(!(g&&.01<Math.random())){var l=Ia(a,b,c,d,e,g);l&&Y(function(){return Ja(f,l)})}}}function Ja(a,b){return Ka(a,b).then(function(a){if(!a){var c=new XMLHttpRequest;c.open("POST",ra.errorReporting,!0);c.send(JSON.stringify(b))}})}
function Ka(a,b){var c=xa(a);if(!c.isSingleDoc())return Promise.resolve(!1);var d=c.getAmpDoc(),e=d.getRootNode().documentElement,f=e.hasAttribute("report-errors-to-viewer");if(!f)return Promise.resolve(!1);var g=za(d);return g.hasCapability("errorReporter")?g.isTrustedViewer().then(function(a){if(!a)return!1;g.sendMessage("error",I({m:b.m,a:b.a,s:b.s,el:b.el,v:b.v,jse:b.jse}));return!0}):Promise.resolve(!1)}
function Ia(a,b,c,d,e,f){var g=a;e&&(g=e.message?e.message:String(e));g||(g="Unknown error");a=g;var l=!(!e||!e.expected);if(!/_reported_/.test(a)&&"CANCELLED"!=a){var m=!(self&&self.window),q=Math.random();if(-1!=a.indexOf("Failed to load:")||"Script error."==a||m)if(l=!0,.001<q)return;var n=0<=a.indexOf("\u200b\u200b\u200b");if(!(n&&.1<q)){g=Object.create(null);g.v=y().rtvVersion;g.noAmp=f?"1":"0";g.m=a.replace("\u200b\u200b\u200b","");g.a=n?"1":"0";g.ex=l?"1":"0";g.dw=m?"1":"0";var u="1p";self.context&&
self.context.location?(g["3p"]="1",u="3p"):y().runtime&&(u=y().runtime);y().singlePassType&&(g.spt=y().singlePassType);g.rt=u;"inabox"===u&&(g.adid=y().a4aId);f=self;g.ca=f.AMP_CONFIG&&f.AMP_CONFIG.canary?"1":"0";f=self;g.bt=f.AMP_CONFIG&&f.AMP_CONFIG.type?f.AMP_CONFIG.type:"unknown";self.location.ancestorOrigins&&self.location.ancestorOrigins[0]&&(g.or=self.location.ancestorOrigins[0]);self.viewerState&&(g.vs=self.viewerState);self.parent&&self.parent!=self&&(g.iem="1");if(self.AMP&&self.AMP.viewer){var p=
self.AMP.viewer.getResolvedViewerUrl(),v=self.AMP.viewer.maybeGetMessagingOrigin();p&&(g.rvu=p);v&&(g.mso=v)}Z||(Z=La());g.jse=Z;var ma=[];f=self.__AMP__EXPERIMENT_TOGGLES||null;for(var na in f)ma.push(na+"="+(f[na]?"1":"0"));g.exps=ma.join(",");e?(g.el=e.associatedElement?e.associatedElement.tagName:"u",e.args&&(g.args=JSON.stringify(e.args)),n||e.ignoreStack||!e.stack||(g.s=e.stack),e.message&&(e.message+=" _reported_")):(g.f=b||"",g.l=c||"",g.c=d||"");g.r=self.document.referrer;g.ae=X.join(",");
g.fr=self.location.originalHash||self.location.hash;b=a;c=X;25<=c.length&&c.splice(0,c.length-25+1);c.push(b);return g}}}
function Ha(){for(var a=self.document.querySelectorAll("script[src]"),b=0;b<a.length;b++){var c=a[b].src.toLowerCase();if("string"==typeof c){V||(V=self.document.createElement("a"),sa=self.UrlCache||(self.UrlCache=new T));var d=sa,e=V;if(d&&d.has(c))c=d.get(c);else{e.href=c;e.protocol||(e.href=e.href);var f={href:e.href,protocol:e.protocol,host:e.host,hostname:e.hostname,port:"0"==e.port?"":e.port,pathname:e.pathname,search:e.search,hash:e.hash,origin:null};"/"!==f.pathname[0]&&(f.pathname="/"+f.pathname);
if("http:"==f.protocol&&80==f.port||"https:"==f.protocol&&443==f.port)f.port="",f.host=f.hostname;f.origin=e.origin&&"null"!=e.origin?e.origin:"data:"!=f.protocol&&f.host?f.protocol+"//"+f.host:f.href;e=y().test&&Object.freeze?Object.freeze(f):f;d&&d.put(c,e);c=e}}if(!ra.cdnProxyRegex.test(c.origin))return!0}return!1}
function La(){function a(){}a.prototype.t=function(){throw Error("message");};var b=new a;try{b.t()}catch(d){b=d.stack;if(J(b,"t@"))return"Safari";if(-1<b.indexOf(".prototype.t@"))return"Firefox";var c=b.split("\n").pop();if(/\bat .* \(/i.test(c))return"IE";if(J(b,"Error: message"))return"Chrome"}return"unknown"};new function(a){if(a.ampInaboxInitialized)H().info("inabox-host","Skip a 2nd attempt of initializing AMP inabox host.");else{a.ampInaboxInitialized=!0;F=z;H();G();ba();a.ampInaboxIframes&&!Array.isArray(a.ampInaboxIframes)&&(H().info("inabox-host","Invalid %s. %s","ampInaboxIframes",a.ampInaboxIframes),a.ampInaboxIframes=[]);var b=new va(a,a.ampInaboxIframes);a.AMP=a.AMP||{};a.AMP.inaboxUnregisterIframe?H().info("inabox-host","win.AMP[inaboxUnregisterIframe] already defined}"):a.AMP.inaboxUnregisterIframe=
b.unregisterIframe.bind(b);var c=a.ampInaboxPendingMessages,d=function(a){try{b.processMessage(a)}catch(f){H().error("inabox-host","Error processing inabox message",a,f)}};c&&(Array.isArray(c)?c.forEach(function(a){var b=!(!a.source||!a.source.postMessage);b||G().error("inabox-host","Missing message.source. message.data="+JSON.stringify(a.data));b&&d(a)}):H().info("inabox-host","Invalid %s %s","ampInaboxPendingMessages",c));a.ampInaboxPendingMessages=[];a.ampInaboxPendingMessages.push=function(){};
a.addEventListener("message",d.bind(b))}}(self);})();

//# sourceMappingURL=amp4ads-host-v0.js.map
