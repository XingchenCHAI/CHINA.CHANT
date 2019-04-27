(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-175').attr('src', (dpi>1) ? 'images/xuan-ze-54.png' : 'images/xuan-ze-27.png');
$('.js-176').attr('src', (dpi>1) ? 'images/jian-tou-42.png' : 'images/jian-tou-21.png');
$('.js-177').attr('src', (dpi>1) ? 'images/gou-wu-che-66.png' : 'images/gou-wu-che-33.png');
$('.js-178').attr('src', (dpi>1) ? 'images/jian-tou-42.png' : 'images/jian-tou-21.png');
$('.js-179').attr('src', (dpi>1) ? 'images/xin-xi-que-ren-48.png' : 'images/xin-xi-que-ren-24.png');
$('.js-180').attr('src', (dpi>1) ? 'images/jian-tou-42.png' : 'images/jian-tou-21.png');
$('.js-181').attr('src', (dpi>1) ? 'images/chuang-64.png' : 'images/chuang-32.png');
var a='data-src'; if($('.js-182').hasAttr('src')) { a='src'; } $('.js-182').attr(a, (dpi>1) ? 'images/logo-96.png' : 'images/logo-48.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-90')[0]);
initMenu($('#menu-91')[0]);
initMenu($('#menu-92')[0]);
initMenu($('#menu-93')[0]);
initMenu($('#menu-94')[0]);
initMenu($('#menu-95')[0]);
initMenu($('#menu-96')[0]);
initMenu($('#menu-97')[0]);
$('.js-182').unveil(50);
$('.js-184 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-173')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-174')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-182')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-183')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});