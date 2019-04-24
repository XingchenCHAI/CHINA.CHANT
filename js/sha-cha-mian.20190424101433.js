(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-37').hasAttr('src')) { a='src'; } $('.js-37').attr(a, (dpi>1) ? 'images/logo-48.png' : 'images/logo-24.png');
$('.js-70').attr('src', (dpi>1) ? 'images/3301-200.jpg' : 'images/3301-100.jpg');
$('.js-71').attr('src', (dpi>1) ? 'images/20-200.jpg' : 'images/20-100.jpg');
$('.js-72').attr('src', (dpi>1) ? 'images/3302-200.jpg' : 'images/3302-100.jpg');};
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
$('.js-37').unveil(50);
$('.js-73 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-37')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-38')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-39')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-40')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-41')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-42')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-43')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-44')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-45')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-46')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-47')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-48')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-49')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-50')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-51')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-52')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-53')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-54')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-55')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-56')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-57')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-58')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-59')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-60')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-61')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-62')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-63')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-64')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-65')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-66')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-67')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-68')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-69')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});