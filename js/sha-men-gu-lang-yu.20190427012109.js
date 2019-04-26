(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-210').hasAttr('src')) { a='src'; } $('.js-210').attr(a, (dpi>1) ? 'images/logo-96.png' : 'images/logo-48.png');




var a='data-src'; if($('.js-215').hasAttr('src')) { a='src'; } $('.js-215').attr(a, (dpi>1) ? 'images/ping-mu-kuai-zhao-2019-04-26-xia-wu2.42.46-1966.jpg' : 'images/ping-mu-kuai-zhao-2019-04-26-xia-wu2.42.46-983.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-114')[0]);
initMenu($('#menu-115')[0]);
initMenu($('#menu-116')[0]);
initMenu($('#menu-117')[0]);
initMenu($('#menu-118')[0]);
initMenu($('#menu-119')[0]);
initMenu($('#menu-120')[0]);
initMenu($('#menu-121')[0]);
$('.js-210').unveil(50);
$('.js-216 source').unveil(50);
$('.js-217').mouseenter(function() { $.loadImages('images/21cc_m-300.jpg', function() { }) });
$('.js-217').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-217-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/21cc_m-300.jpg'; } } });
$('.js-213 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 1100,dots: true,arrows: true,infinite: true});$('.js-218').mouseenter(function() { $.loadImages('images/ping-mu-kuai-zhao-2019-04-26-xia-wu2.42.46-1546.jpg', function() { }) });
$('.js-218').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-218-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/ping-mu-kuai-zhao-2019-04-26-xia-wu2.42.46-1546.jpg'; } } });
$('.js-215').unveil(50);
$('.js-219 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-210')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-211')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-212')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-214')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-215')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});