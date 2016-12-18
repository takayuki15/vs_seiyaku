/************************************************

	タブ切り替え（都道府県）

************************************************/

function ChangeTab(tabname) {
   // 全部消す
  //  $("div.tab").removeClass("visible");
   $("div#tokyo").css("display","none");
   $("div#kanagawa").css("display","none");
   $("div#hokkaido").css("display","none");
   $("div#fukuoka").css("display","none");
   // 指定箇所のみ表示
  //  $("div#" + tabname).toggleClass('visible');
  //  $("div#" + tabname).fadeIn(1000);
   $("div#" + tabname).css("display","block");
   // 全部消す
   $("li#tokyo").removeClass("selected");
   $("li#kanagawa").removeClass("selected");
   $("li#hokkaido").removeClass("selected");
   $("li#fukuoka").removeClass("selected");
   // 指定箇所のみ表示
   $("li#" + tabname).addClass("selected");
   if (tabname == "kanagawa") {
     initializeK('kanagawa-map');
   } else if (tabname == "hokkaido") {
     initializeH('hokkaido-map');
   } else if (tabname == "fukuoka") {
     initializeF('fukuoka-map');
   }
}

/************************************************

	Scroll Top

************************************************/

//page-top
$(function() {
    var topBtn = $('.page-top');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});

/************************************************

	Tab Recognisation

************************************************/

// $(window).bind("load", function(){
//   alert("test");
//
// 	if(document.URL.match("#fukuoka")) {
// 		initializeF('fukuoka-map');
//       alert("testF");
// 	} else if (document.URL.match("#kanagawa")) {
//     initializeK('kanagawa-map');
//       alert("testK");
// 	} else if (document.URL.match("#hokkaido")) {
//     initializeH('hokkaido-map');
//       alert("testH");
// 	} else {
//     initializeT('tokyo-map');
//       alert("testT");
// 	}
// });
