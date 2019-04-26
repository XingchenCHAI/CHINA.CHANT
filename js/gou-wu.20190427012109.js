(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-70').hasAttr('src')) { a='src'; } $('.js-70').attr(a, (dpi>1) ? 'images/logo-96.png' : 'images/logo-48.png');
$('.js-71').attr('src', (dpi>1) ? 'images/shang-chang-tu-biao-04-1--78.png' : 'images/shang-chang-tu-biao-04-1--39.png');
$('.js-74').attr('src', (dpi>1) ? 'images/bian-li-dian-2--66.png' : 'images/bian-li-dian-2--33.png');
$('.js-75').attr('src', (dpi>1) ? 'images/cha-ye-1--78.png' : 'images/cha-ye-1--39.png');
$('.js-79').attr('src', (dpi>1) ? 'images/shi-jing-ku-hou-tai-fu-zhuang-70.png' : 'images/shi-jing-ku-hou-tai-fu-zhuang-35.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-37')[0]);
initMenu($('#menu-38')[0]);
initMenu($('#menu-39')[0]);
initMenu($('#menu-40')[0]);
initMenu($('#menu-41')[0]);
initMenu($('#menu-42')[0]);
initMenu($('#menu-43')[0]);
initMenu($('#menu-44')[0]);
$('.js-70').unveil(50);
$('.js-81 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-70')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-71')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-72')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-73')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-74')[0], "1.00s", "0.10s", 1, 100);
wl.addAnimation($('.js-75')[0], "1.00s", "0.20s", 1, 100);
wl.addAnimation($('.js-76')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-77')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-78')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-79')[0], "1.00s", "0.30s", 1, 100);
wl.addAnimation($('.js-80')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});