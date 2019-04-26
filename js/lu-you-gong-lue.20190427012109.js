(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-220').hasAttr('src')) { a='src'; } $('.js-220').attr(a, (dpi>1) ? 'images/logo-96.png' : 'images/logo-48.png');
$('.js-223').attr('src', (dpi>1) ? 'images/timg-432.jpeg' : 'images/timg-216.jpeg');
$('.js-224').attr('src', (dpi>1) ? 'images/23155401-290.jpg' : 'images/23155401-145.jpg');



};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-122')[0]);
initMenu($('#menu-123')[0]);
initMenu($('#menu-124')[0]);
initMenu($('#menu-125')[0]);
initMenu($('#menu-126')[0]);
initMenu($('#menu-127')[0]);
initMenu($('#menu-128')[0]);
initMenu($('#menu-129')[0]);
$('.js-220').unveil(50);
$('.js-229 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-220')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-221')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-222')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});