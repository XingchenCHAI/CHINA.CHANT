(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-26').hasAttr('src')) { a='src'; } $('.js-26').attr(a, (dpi>1) ? 'images/logo-48.png' : 'images/logo-24.png');
$('.js-29').attr('src', (dpi>1) ? 'images/3301-400.jpg' : 'images/3301-200.jpg');
$('.js-30').attr('src', (dpi>1) ? 'images/3304-400.jpg' : 'images/3304-200.jpg');
$('.js-31').attr('src', (dpi>1) ? 'images/20-400.jpg' : 'images/20-200.jpg');
$('.js-32').attr('src', (dpi>1) ? 'images/3307-400.jpg' : 'images/3307-200.jpg');
$('.js-34').attr('src', (dpi>1) ? 'images/3302-400.jpg' : 'images/3302-200.jpg');
$('.js-35').attr('src', (dpi>1) ? 'images/29-400.jpg' : 'images/29-200.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-21')[0]);
initMenu($('#menu-22')[0]);
initMenu($('#menu-23')[0]);
initMenu($('#menu-24')[0]);
initMenu($('#menu-25')[0]);
initMenu($('#menu-26')[0]);
initMenu($('#menu-27')[0]);
initMenu($('#menu-28')[0]);
$('.js-26').unveil(50);
$('.js-36 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-26')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-27')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-28')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-33')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});