(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-246').hasAttr('src')) { a='src'; } $('.js-246').attr(a, (dpi>1) ? 'images/logo-48.png' : 'images/logo-24.png');
$('.js-250').attr('src', (dpi>1) ? 'images/ping-mu-kuai-zhao-2019-04-26-xia-wu3.11.15-340.jpg' : 'images/ping-mu-kuai-zhao-2019-04-26-xia-wu3.11.15-170.jpg');
$('.js-251').attr('src', (dpi>1) ? 'images/ping-mu-kuai-zhao-2019-04-26-xia-wu3.11.26-334.jpg' : 'images/ping-mu-kuai-zhao-2019-04-26-xia-wu3.11.26-167.jpg');
$('.js-252').attr('src', (dpi>1) ? 'images/ping-mu-kuai-zhao-2019-04-26-xia-wu3.11.37-340.jpg' : 'images/ping-mu-kuai-zhao-2019-04-26-xia-wu3.11.37-170.jpg');
$('.js-253').attr('src', (dpi>1) ? 'images/ping-mu-kuai-zhao-2019-04-26-xia-wu3.11.47-340.jpg' : 'images/ping-mu-kuai-zhao-2019-04-26-xia-wu3.11.47-170.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-130')[0]);
initMenu($('#menu-131')[0]);
initMenu($('#menu-132')[0]);
initMenu($('#menu-133')[0]);
initMenu($('#menu-134')[0]);
initMenu($('#menu-135')[0]);
initMenu($('#menu-136')[0]);
initMenu($('#menu-137')[0]);
$('.js-246').unveil(50);
$('.js-254 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-246')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-247')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-248')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-249')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});