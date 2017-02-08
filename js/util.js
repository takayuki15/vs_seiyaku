(function($) {

	if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
		$("html").addClass("mobile");
		var mobile = true;
	}else{
		var mobile = false;
	}


	$(function() {
		$.GMutil.ie_scroll();
		$.GMutil.selflink();
		$.GMutil.rollover();
		$.GMutil.nav();
		$.GMutil.scroll();
		$.GMutil.popup();
		$.GMutil.telnum();
		$.GMutil.rwdImageMaps();
		$.GMutil.headhide();
		$.GMutil.loading();
		$.GMutil.sp2x();

	});

	//---------------------------------------------------------------------

	$.GMutil = {
		ie_scroll: function (options) {

			//IE SCROLL
			var ua=window.navigator.userAgent;

			scrLength = 200;
			scrSpeed = 300;
			scrEasing = 'swing';

			if (ua.match(/Win(dows )?NT 10\.0/) || ua.match(/Win(dows )?NT 6\.3/) || ua.match(/Win(dows )?NT 6\.2/)) {
				if(ua.match(/Trident/)){

					var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
					$(document).on(mousewheelevent,function(e){
						e.preventDefault();
						var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
						if (delta < 0){
							scrSet =  $(document).scrollTop()+scrLength;
						} else {
							scrSet =  $(document).scrollTop()-scrLength;
						}
						$('html,body').stop().animate({scrollTop:scrSet},scrSpeed,scrEasing);
						return false;
					});
				}
			}

		},
		selflink: function (options) {

			$("a").each(function(){
				var urlLink = location.href;
				var tgLink = $(this).prop("href");
				if ( tgLink == urlLink ) {
					$(this).addClass("cr");
				} else if (0 <= urlLink.search(tgLink)) {
					$(this).addClass("cr");
				}
			});

		},
		//ロールオーバー
		rollover: function(options) {

			$(".fade, #gnavi>li").find("img").parent().each(function() {
				$(this).css("position","relative");
				$(this).find("img").addClass("off");
				$(this).append($(this).find("img.off").clone(true).removeClass("off").addClass("on"));
				var onsrc =  $(this).find("img.on").attr("src").replace(new RegExp('(_on)?(\.gif|\.jpg|\.png)$'), "_on$2");
				$(this).find("img.on").attr("src", onsrc);
			});

		},
		nav: function(options) {

			var nav_btn = "#menu_btn";
			var sp_nav = "#gnavi";

			$(nav_btn).click(function() {
				$(sp_nav).stop().slideToggle(800,"swing");
				$("body").toggleClass("nav_open");
				$(nav_btn).toggleClass("opened");
			});

			$(window).resize(function(){
				$(sp_nav).removeAttr("style");
				$("body").removeClass("nav_open");
				$(nav_btn).removeClass("opened");
			});

		},
		//ページ内リンクはするするスクロール
		scroll: function(options) {
			//ドキュメントのスクロールを制御するオブジェクト
			$("a[href^=#]:not(.modalopen)").click(function(){
				var Hash = $(this.hash);
				var HashOffset = $(Hash).offset().top;
				$("html,body").animate({
				scrollTop: HashOffset
				}, 500);
				return false;
			});
		},
		popup: function(options) {
			$("a.popup").click(function(){
  					window.open(this.href,'null','scrollbars=yes,resizable=yes,width=880,height=800');
					return false;
			});
			$("a.popup_map").click(function(){
  					window.open(this.href,'null','scrollbars=yes,resizable=yes,width=750,height=800');
					return false;
			});
		},
		telnum: function(options) {

			if (mobile) {
				$(".telnumber").each(function() {
					$(this).wrapInner('<a href="tel:'+ $(this).attr("rel").match(/[0-9]/g).join("") +'"></a>');
				});
			}

			$("a[href^=tel]").click(function(){
				location.href =  $(this).attr("href");
				return false;
			});

		},
		rwdImageMaps: function(options) {

			$('img[usemap]').rwdImageMaps();

		},
		loading: function(options) {

		//	LOADING

			var loadTimer = 0;
			var imgNum = imagesLoaded('body').images.length;
			var loadedImg = 0;
			var progressNowPosition = 0;

			if(location.hash == "#skip" || ( mobile && $("body").attr("id") != "top" )){
				$("body").addClass("loaded");
				$("#loading").hide();
				clearInterval(loadTimer);
				$(".loadfade").each(function(){
					$(this).addClass("fadeview");
				});

				if(($("body").attr("id") == "access" || $("body").attr("id") == "lifestyle" || $("body").attr("id") == "hilltop") && !mobile){
					var $video = document.getElementById("access_video");
					$video.play();
				}

			}else if(location.hash == "#capture"){
				$(".loadfade").each(function(){
					$(this).addClass("fadeview");
				});
				$("body").addClass("loaded");
				$("#loading").hide();
				clearInterval(loadTimer);
				$("html").addClass("capture");

				if(($("body").attr("id") == "access" || $("body").attr("id") == "lifestyle"  || $("body").attr("id") == "hilltop") && !mobile){
					var $video = document.getElementById("access_video");
					$video.play();
				}

			}else{
				loadTimer = setInterval(progressMonitor, 1000/50);
			}


			imagesLoaded('body').on('progress', function(){
				loadedImg++;
			});

			function progressMonitor(){
				var progressPosition = (loadedImg/imgNum) * 100;
				var videoloadflag = 0;
				progressNowPosition += (progressPosition-progressNowPosition) * 0.1;
				$('#progressBar').css('width', progressNowPosition+'%');
				//$('#progressTxt').text(Math.floor(progressNowPosition)+'%');

				if(progressNowPosition >= 100){

					$("body").addClass("loaded");
					$(".loadfade").each(function(){
						$(this).addClass("fadeview");
					});
					clearInterval(loadTimer);
					$("#loading").fadeOut(1000);

					if(($("body").attr("id") == "access" || $("body").attr("id") == "lifestyle"  || $("body").attr("id") == "hilltop")  && !mobile){

						var $video = document.getElementById("access_video");
						$video.play();
					}else{
					}

				}

				// 繧､繝ｼ繧ｸ繝ｳ繧ｰ險育ｮ励ｒ螳御ｺ�＆縺帙ｋ
				if(progressNowPosition > 99.9){
					progressNowPosition = 100;
				}
			}

		},
		headhide: function(options) {

			var scrflag = 0;

				$(window).scroll(function(){

					var scr = $(window).scrollTop();

					var win_h = $("#contents_wrap").offset().top-111;

					if(scr < win_h){
						if( scrflag != 0){
							$("#header_wrap").stop(true,true).fadeIn(220);
							$("#smallhead_head").stop(true,true).fadeOut(220);
							$("#gnavi").removeClass("small");
							scrflag = 0;
							//$("#canvas").fadeOut(1000);
						}
					}else{
						if( scrflag != 1){
							$("#header_wrap").stop(true,true).fadeOut(220);
							$("#smallhead_head").stop(true,true).fadeIn(220);
							$("#gnavi").addClass("small");
							scrflag = 1;
							//init();
							//$("#canvas").show();
						}
					}

				});



		},
		sp2x: function(options) {

			if (mobile) {

				$("img.2x").each(function() {
					$(this).attr("srcset",$(this).attr("src").replace(new RegExp('(@2x)?(\.gif|\.jpg|\.png)$'), "@2x$2") +" 2x");
				});
			}

		}
	};




})(jQuery);
