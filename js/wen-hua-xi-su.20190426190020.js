(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-265').hasAttr('src')) { a='src'; } $('.js-265').attr(a, (dpi>1) ? 'images/logo-48.png' : 'images/logo-24.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-154')[0]);
initMenu($('#menu-155')[0]);
initMenu($('#menu-156')[0]);
initMenu($('#menu-157')[0]);
initMenu($('#menu-158')[0]);
initMenu($('#menu-159')[0]);
initMenu($('#menu-160')[0]);
initMenu($('#menu-161')[0]);
$('.js-265').unveil(50);
$('.js-269 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-265')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-266')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-267')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-268')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});