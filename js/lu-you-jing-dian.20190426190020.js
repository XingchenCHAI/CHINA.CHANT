(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-203').hasAttr('src')) { a='src'; } $('.js-203').attr(a, (dpi>1) ? 'images/logo-48.png' : 'images/logo-24.png');

$('.js-208').attr('src', (dpi>1) ? 'images/di-yi-36.png' : 'images/di-yi-18.png');








};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-98')[0]);
initMenu($('#menu-99')[0]);
initMenu($('#menu-100')[0]);
initMenu($('#menu-101')[0]);
initMenu($('#menu-102')[0]);
initMenu($('#menu-103')[0]);
initMenu($('#menu-104')[0]);
initMenu($('#menu-105')[0]);
$('.js-203').unveil(50);
$('.js-218 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-203')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-204')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-205')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-206')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});