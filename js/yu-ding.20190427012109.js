(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-146').hasAttr('src')) { a='src'; } $('.js-146').attr(a, (dpi>1) ? 'images/logo-96.png' : 'images/logo-48.png');
};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-65')[0]);
initMenu($('#menu-66')[0]);
initMenu($('#menu-67')[0]);
initMenu($('#menu-68')[0]);
initMenu($('#menu-69')[0]);
initMenu($('#menu-70')[0]);
initMenu($('#menu-71')[0]);
initMenu($('#menu-72')[0]);
initMenu($('#menu-73')[0]);
$('.js-146').unveil(50);
$('.js-150 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-146')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-148')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-149')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});