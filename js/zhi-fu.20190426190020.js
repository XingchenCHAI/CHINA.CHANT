(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-161').attr('src', (dpi>1) ? 'images/xuan-ze-54.png' : 'images/xuan-ze-27.png');
$('.js-162').attr('src', (dpi>1) ? 'images/jian-tou-42.png' : 'images/jian-tou-21.png');
$('.js-163').attr('src', (dpi>1) ? 'images/gou-wu-che-66.png' : 'images/gou-wu-che-33.png');
$('.js-164').attr('src', (dpi>1) ? 'images/jian-tou-42.png' : 'images/jian-tou-21.png');
$('.js-165').attr('src', (dpi>1) ? 'images/xin-xi-que-ren-48.png' : 'images/xin-xi-que-ren-24.png');
$('.js-166').attr('src', (dpi>1) ? 'images/jian-tou-42.png' : 'images/jian-tou-21.png');
$('.js-167').attr('src', (dpi>1) ? 'images/chuang-64.png' : 'images/chuang-32.png');
var a='data-src'; if($('.js-168').hasAttr('src')) { a='src'; } $('.js-168').attr(a, (dpi>1) ? 'images/logo-48.png' : 'images/logo-24.png');
$('.js-170').attr('src', (dpi>1) ? 'images/u-2364378661-2507009615-fm-26-gp-0-284.jpg' : 'images/u-2364378661-2507009615-fm-26-gp-0-142.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-74')[0]);
initMenu($('#menu-75')[0]);
initMenu($('#menu-76')[0]);
initMenu($('#menu-77')[0]);
initMenu($('#menu-78')[0]);
initMenu($('#menu-79')[0]);
initMenu($('#menu-80')[0]);
initMenu($('#menu-81')[0]);
$('.js-168').unveil(50);
$('.js-171 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-159')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-160')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-168')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-169')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});