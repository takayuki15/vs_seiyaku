/************************************************

	タブ切り替え（都道府県）

************************************************/

function ChangeTab(tabname) {
   // 全部消す
   $("div#tokyo").css("display","none");
   $("div#kanagawa").css("display","none");
   $("div#hokkaido").css("display","none");
   $("div#fukuoka").css("display","none");
   // 指定箇所のみ表示
   $("div#" + tabname).css("display","block");
   // 全部消す
   $("li#tokyo").removeClass("selected");
   $("li#kanagawa").removeClass("selected");
   $("li#hokkaido").removeClass("selected");
   $("li#fukuoka").removeClass("selected");
   // 指定箇所のみ表示
   $("li#" + tabname).addClass("selected");
}

/************************************************

	Google Map

************************************************/

function initMap() {
  var map = new google.maps.Map(document.getElementById('tokyo-map'), {
    zoom: 4,
    center: {lat: -25.363882, lng: 131.044922 }
  });

  var bounds = {
    north: -25.363882,
    south: -31.203405,
    east: 131.044922,
    west: 125.244141
  };

  // Display the area between the location southWest and northEast.
  map.fitBounds(bounds);

  // Add 5 markers to map at random locations.
  // For each of these markers, give them a title with their index, and when
  // they are clicked they should open an infowindow with text from a secret
  // message.
  var secretMessages = [
      "<div id='infoWindow'><h3>クリオ武蔵小金井グリーンアベニュー</h3><div class='grp_r'><img src='./img/tmp01.jpg' alt='クリオ武蔵小金井グリーンアベニュー' /><p>交通/<br />中央本線（JR東日本）<br />「武蔵小金井」駅 徒歩7分</p></div><a href='#' target='_blank'>公式HPはこちら</a></div>",
      '<div id="infoWindow">  <div class="grp_l"><img src="logo.jpg"></div>  <div class="grp_r">     <p class="sName">岐阜：本社オフィス</p>     <p>〒500-8847</p>     <p>岐阜県岐阜市金宝町1-3 第一生命ビル</p>     <p>TEL：058-267-1430</p>     <p>FAX：058-267-1433</p>     <p>MAIL：info@axis-corp.com</p>     <div class="sLink">       <a href="#" onclick="zoomIn(35.415272, 136.758887);">岐阜オフィス</a>       <a href="#" onclick="zoomIn(35.646390, 139.702661);">東京オフィス</a>       <a href="#" onclick="zoomIn(33.795478, -118.317748);">米国オフィス</a>     </div>   </div></div>',
      'is',
      'the',
      'secret',
      'message'];

  var lngSpan = bounds.east - bounds.west;
  var latSpan = bounds.north - bounds.south;
  for (var i = 0; i < secretMessages.length; ++i) {
    var marker = new google.maps.Marker({
      position: {
        lat: bounds.south + latSpan * Math.random(),
        lng: bounds.west + lngSpan * Math.random()
      },
      map: map
    });
    attachSecretMessage(marker, secretMessages[i]);
  }
}

// Attaches an info window to a marker with the provided message. When the
// marker is clicked, the info window will open with the secret message.
function attachSecretMessage(marker, secretMessage) {
  var infowindow = new google.maps.InfoWindow({
    content: secretMessage
  });

  marker.addListener('click', function() {
    infowindow.open(marker.get('map'), marker);
  });
}
