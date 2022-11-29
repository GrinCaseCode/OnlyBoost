$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}

$("input[type='file']").change(function(){
	const file = this.files[0];
	//var filename_text = $(this).parent().siblings(".name-upload");
	var this_image = $(this).parent().find("img");
	//var filename = $(this).val().replace(/.*\\/, "");
	//filename_text.html(filename);
	if (file) {
		let reader = new FileReader();
		reader.onload = function (event) {
			$(this_image).attr("src", event.target.result);
		};
		reader.readAsDataURL(file);
	}
});



/*range slider*/

$(".range-main_buy .range-main__input").ionRangeSlider({
	min: 5,
	max: 600,
	from: 100,
	prettify_enabled: true,
});

	//кнопка sandwich
	$(".sandwich").click(function() {
		$(this).toggleClass("active");
		if ($(".menu").is(":hidden")) {
			$(".menu").slideDown(200);
		} else {
			$(".menu").slideUp(200);
		}
	});

	$(".link-big_open").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".catalog-wrapper").toggleClass("active");
		if ($(".catalog-wrapper .row_catalog > div:nth-child(n+9)").is(":hidden")) {
			$(".catalog-wrapper .row_catalog > div:nth-child(n+9)").slideDown(200);
			$(this).html("<<< SHOW LESS >>>");
		} else {
			$(".catalog-wrapper .row_catalog > div:nth-child(n+9)").slideUp(200);
			$(this).html("<<< SHOW MORE >>>");
		}
	});

	$(".link-big_order").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".orders-wrapper").toggleClass("active");
		if ($(".orders-wrapper .row_orders > div:nth-child(n+5)").is(":hidden")) {
			$(".orders-wrapper .row_orders > div:nth-child(n+5)").slideDown(200);
			$(this).html("<<< SHOW LESS >>>");
		} else {
			$(".orders-wrapper .row_orders > div:nth-child(n+5)").slideUp(200);
			$(this).html("<<< SHOW MORE >>>");
		}
	});

	$(".item-question__head").click(function() {
		$(this).toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(".item-question").not(this).removeClass("active");
		$(".item-question__head").not(this).siblings(".item-question__content").slideUp(200);
	});


	//слайдер
	$('.tabs-title a').click(function(event) {
		event.preventDefault();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$(".tab-pane-catalog").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
	}); 

	$('.tabs-page a').click(function(event) {
		event.preventDefault();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$(".tab-pane-page").fadeOut(0);
		var selectTab2 = $(this).attr("href");
		$(selectTab2).fadeIn(200);
	}); 

	$('.slider-catalog').each(function(){
		var swiper = new Swiper(this, {
			direction: 'horizontal',
			navigation: {
				prevEl: ".arrow-swiper_left",
				nextEl: ".arrow-swiper_right",
			},
			scrollbar: {
				el: ".swiper-scrollbar",
				draggable: true,
			},
			slidesPerView: 'auto',
			spaceBetwen: 30,
			slidesPerGroup: 1,
			loop: false,
		});

		$('.tabs-title a').click(function(event) {
			swiper.update()
		}); 

	});


	$('.slider-images').slick({
		arrows: true,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});

	$(".input-phone").mask("+7 (999) 999-99-99");




	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

