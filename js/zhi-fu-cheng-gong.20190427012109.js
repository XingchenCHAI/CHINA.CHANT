(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-165').attr('src', (dpi>1) ? 'images/xuan-ze-54.png' : 'images/xuan-ze-27.png');
$('.js-166').attr('src', (dpi>1) ? 'images/jian-tou-42.png' : 'images/jian-tou-21.png');
$('.js-167').attr('src', (dpi>1) ? 'images/gou-wu-che-66.png' : 'images/gou-wu-che-33.png');
$('.js-168').attr('src', (dpi>1) ? 'images/jian-tou-42.png' : 'images/jian-tou-21.png');
$('.js-169').attr('src', (dpi>1) ? 'images/xin-xi-que-ren-48.png' : 'images/xin-xi-que-ren-24.png');
$('.js-170').attr('src', (dpi>1) ? 'images/jian-tou-42.png' : 'images/jian-tou-21.png');
$('.js-171').attr('src', (dpi>1) ? 'images/chuang-64.png' : 'images/chuang-32.png');
var a='data-src'; if($('.js-172').hasAttr('src')) { a='src'; } $('.js-172').attr(a, (dpi>1) ? 'images/logo-96.png' : 'images/logo-48.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-82')[0]);
initMenu($('#menu-83')[0]);
initMenu($('#menu-84')[0]);
initMenu($('#menu-85')[0]);
initMenu($('#menu-86')[0]);
initMenu($('#menu-87')[0]);
initMenu($('#menu-88')[0]);
initMenu($('#menu-89')[0]);
$('.js-172').unveil(50);
$('.js-174 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-163')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-164')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-172')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-173')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});