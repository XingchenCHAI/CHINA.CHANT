(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-34').hasAttr('src')) { a='src'; } $('.js-34').attr(a, (dpi>1) ? 'images/logo-96.png' : 'images/logo-48.png');
$('.js-36').attr('src', (dpi>1) ? 'images/3301-400.jpg' : 'images/3301-200.jpg');
$('.js-37').attr('src', (dpi>1) ? 'images/3304-400.jpg' : 'images/3304-200.jpg');
$('.js-38').attr('src', (dpi>1) ? 'images/20-400.jpg' : 'images/20-200.jpg');
$('.js-39').attr('src', (dpi>1) ? 'images/3307-400.jpg' : 'images/3307-200.jpg');
$('.js-41').attr('src', (dpi>1) ? 'images/3302-400.jpg' : 'images/3302-200.jpg');
$('.js-42').attr('src', (dpi>1) ? 'images/29-400.jpg' : 'images/29-200.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-29')[0]);
initMenu($('#menu-30')[0]);
initMenu($('#menu-31')[0]);
initMenu($('#menu-32')[0]);
initMenu($('#menu-33')[0]);
initMenu($('#menu-34')[0]);
initMenu($('#menu-35')[0]);
initMenu($('#menu-36')[0]);
$('.js-34').unveil(50);
$('.js-43 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-34')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-35')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-40')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});