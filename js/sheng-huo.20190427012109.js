(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-4').hasAttr('src')) { a='src'; } $('.js-4').attr(a, (dpi>1) ? 'images/logo-96.png' : 'images/logo-48.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-13')[0]);
initMenu($('#menu-14')[0]);
initMenu($('#menu-15')[0]);
initMenu($('#menu-16')[0]);
initMenu($('#menu-17')[0]);
initMenu($('#menu-18')[0]);
initMenu($('#menu-19')[0]);
initMenu($('#menu-20')[0]);
$('.js-4').unveil(50);
$('.js-23 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-4')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-5')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-6')[0], "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.js-7')[0], "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.js-8')[0], "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.js-9')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-10')[0], "1.00s", "0.10s", 1, 100);
wl.addAnimation($('.js-11')[0], "1.00s", "1.10s", 1, 100);
wl.addAnimation($('.js-12')[0], "1.00s", "1.10s", 1, 100);
wl.addAnimation($('.js-13')[0], "1.00s", "1.10s", 1, 100);
wl.addAnimation($('.js-14')[0], "1.00s", "0.20s", 1, 100);
wl.addAnimation($('.js-15')[0], "1.00s", "1.20s", 1, 100);
wl.addAnimation($('.js-16')[0], "1.00s", "1.10s", 1, 100);
wl.addAnimation($('.js-17')[0], "1.00s", "1.10s", 1, 100);
wl.addAnimation($('.js-18')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-19')[0], "1.00s", "0.30s", 1, 100);
wl.addAnimation($('.js-20')[0], "1.00s", "1.30s", 1, 100);
wl.addAnimation($('.js-21')[0], "1.00s", "1.10s", 1, 100);
wl.addAnimation($('.js-22')[0], "1.00s", "1.10s", 1, 100);
wl.start();

});