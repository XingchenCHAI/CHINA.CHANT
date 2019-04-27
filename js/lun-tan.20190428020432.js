(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-260').hasAttr('src')) { a='src'; } $('.js-260').attr(a, (dpi>1) ? 'images/logo-96.png' : 'images/logo-48.png');
$('.js-264').attr('src', (dpi>1) ? 'images/super_nova-wallpaper-2880x1800-166.jpg' : 'images/super_nova-wallpaper-2880x1800-83.jpg');
$('.js-265').attr('src', (dpi>1) ? 'images/super_nova-wallpaper-2880x1800-166.jpg' : 'images/super_nova-wallpaper-2880x1800-83.jpg');
$('.js-266').attr('src', (dpi>1) ? 'images/super_nova-wallpaper-2880x1800-166.jpg' : 'images/super_nova-wallpaper-2880x1800-83.jpg');
$('.js-267').attr('src', (dpi>1) ? 'images/super_nova-wallpaper-2880x1800-166.jpg' : 'images/super_nova-wallpaper-2880x1800-83.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-170')[0]);
initMenu($('#menu-171')[0]);
initMenu($('#menu-172')[0]);
initMenu($('#menu-173')[0]);
initMenu($('#menu-174')[0]);
initMenu($('#menu-175')[0]);
initMenu($('#menu-176')[0]);
initMenu($('#menu-177')[0]);
$('.js-260').unveil(50);
$('.js-268 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-260')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-261')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-262')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-263')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});