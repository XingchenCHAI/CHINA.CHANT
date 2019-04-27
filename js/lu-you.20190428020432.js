(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-189').hasAttr('src')) { a='src'; } $('.js-189').attr(a, (dpi>1) ? 'images/logo-96.png' : 'images/logo-48.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-106')[0]);
initMenu($('#menu-107')[0]);
initMenu($('#menu-108')[0]);
initMenu($('#menu-109')[0]);
initMenu($('#menu-110')[0]);
initMenu($('#menu-111')[0]);
initMenu($('#menu-112')[0]);
initMenu($('#menu-113')[0]);
$('.js-189').unveil(50);
$('.js-204 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-189')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-190')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-191')[0], "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.js-192')[0], "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.js-193')[0], "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.js-194')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-195')[0], "1.00s", "0.10s", 1, 100);
wl.addAnimation($('.js-196')[0], "1.00s", "1.10s", 1, 100);
wl.addAnimation($('.js-197')[0], "1.00s", "1.10s", 1, 100);
wl.addAnimation($('.js-198')[0], "1.00s", "1.10s", 1, 100);
wl.addAnimation($('.js-199')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-200')[0], "1.00s", "0.30s", 1, 100);
wl.addAnimation($('.js-201')[0], "1.00s", "1.30s", 1, 100);
wl.addAnimation($('.js-202')[0], "1.00s", "1.10s", 1, 100);
wl.addAnimation($('.js-203')[0], "1.00s", "1.10s", 1, 100);
wl.start();

});