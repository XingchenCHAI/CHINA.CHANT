(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-220').hasAttr('src')) { a='src'; } $('.js-220').attr(a, (dpi>1) ? 'images/logo-96.png' : 'images/logo-48.png');




var a='data-src'; if($('.js-225').hasAttr('src')) { a='src'; } $('.js-225').attr(a, (dpi>1) ? 'images/ping-mu-kuai-zhao-2019-04-26-xia-wu2.42.46-1966.jpg' : 'images/ping-mu-kuai-zhao-2019-04-26-xia-wu2.42.46-983.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-122')[0]);
initMenu($('#menu-123')[0]);
initMenu($('#menu-124')[0]);
initMenu($('#menu-125')[0]);
initMenu($('#menu-126')[0]);
initMenu($('#menu-127')[0]);
initMenu($('#menu-128')[0]);
initMenu($('#menu-129')[0]);
$('.js-220').unveil(50);
$('.js-226 source').unveil(50);
$('.js-227').mouseenter(function() { $.loadImages('images/21cc_m-300.jpg', function() { }) });
$('.js-227').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-227-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/21cc_m-300.jpg'; } } });
$('.js-223 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 1100,dots: true,arrows: true,infinite: true});$('.js-228').mouseenter(function() { $.loadImages('images/ping-mu-kuai-zhao-2019-04-26-xia-wu2.42.46-1546.jpg', function() { }) });
$('.js-228').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-228-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/ping-mu-kuai-zhao-2019-04-26-xia-wu2.42.46-1546.jpg'; } } });
$('.js-225').unveil(50);
$('.js-229 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-220')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-221')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-222')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-224')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-225')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});