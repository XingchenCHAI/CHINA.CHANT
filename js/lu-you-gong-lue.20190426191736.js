(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-230').hasAttr('src')) { a='src'; } $('.js-230').attr(a, (dpi>1) ? 'images/logo-48.png' : 'images/logo-24.png');
$('.js-234').attr('src', (dpi>1) ? 'images/timg-432.jpeg' : 'images/timg-216.jpeg');
$('.js-235').attr('src', (dpi>1) ? 'images/23155401-290.jpg' : 'images/23155401-145.jpg');



};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-114')[0]);
initMenu($('#menu-115')[0]);
initMenu($('#menu-116')[0]);
initMenu($('#menu-117')[0]);
initMenu($('#menu-118')[0]);
initMenu($('#menu-119')[0]);
initMenu($('#menu-120')[0]);
initMenu($('#menu-121')[0]);
$('.js-230').unveil(50);
$('.js-240 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-230')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-231')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-232')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-233')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});