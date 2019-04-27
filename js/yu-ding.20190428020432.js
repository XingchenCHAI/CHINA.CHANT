(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-156').hasAttr('src')) { a='src'; } $('.js-156').attr(a, (dpi>1) ? 'images/logo-96.png' : 'images/logo-48.png');
};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-73')[0]);
initMenu($('#menu-74')[0]);
initMenu($('#menu-75')[0]);
initMenu($('#menu-76')[0]);
initMenu($('#menu-77')[0]);
initMenu($('#menu-78')[0]);
initMenu($('#menu-79')[0]);
initMenu($('#menu-80')[0]);
initMenu($('#menu-81')[0]);
$('.js-156').unveil(50);
$('.js-160 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-156')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-158')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-159')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});