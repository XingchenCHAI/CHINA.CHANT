(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-240').hasAttr('src')) { a='src'; } $('.js-240').attr(a, (dpi>1) ? 'images/logo-96.png' : 'images/logo-48.png');
$('.js-243').attr('src', (dpi>1) ? 'images/wechatimg85-234.jpeg' : 'images/wechatimg85-117.jpeg');
$('.js-244').attr('src', (dpi>1) ? 'images/wechatimg87-250.jpeg' : 'images/wechatimg87-125.jpeg');
$('.js-245').attr('src', (dpi>1) ? 'images/wechatimg97-258.jpeg' : 'images/wechatimg97-129.jpeg');
$('.js-246').attr('src', (dpi>1) ? 'images/ping-mu-kuai-zhao-2019-04-26-xia-wu3.11.47-340.jpg' : 'images/ping-mu-kuai-zhao-2019-04-26-xia-wu3.11.47-170.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-138')[0]);
initMenu($('#menu-139')[0]);
initMenu($('#menu-140')[0]);
initMenu($('#menu-141')[0]);
initMenu($('#menu-142')[0]);
initMenu($('#menu-143')[0]);
initMenu($('#menu-144')[0]);
initMenu($('#menu-145')[0]);
$('.js-240').unveil(50);
$('.js-247 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-240')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-241')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-242')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});