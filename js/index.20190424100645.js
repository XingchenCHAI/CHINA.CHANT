(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js').hasAttr('src')) { a='src'; } $('.js').attr(a, (dpi>1) ? 'images/logo-150.png' : 'images/logo-75.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('form').h5Validate();initMenu($('#menu-1')[0]);
initMenu($('#menu-2')[0]);
initMenu($('#menu-3')[0]);
initMenu($('#menu-4')[0]);
initMenu($('#menu-5')[0]);
initMenu($('#menu-6')[0]);
initMenu($('#menu-7')[0]);
initMenu($('#menu-8')[0]);
initMenu($('#menu-9')[0]);
initMenu($('#menu-10')[0]);
initMenu($('#menu-11')[0]);
initMenu($('#menu-12')[0]);
$('.js').unveil(50);
$('.js-3 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-2')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});