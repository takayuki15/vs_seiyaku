/**
 * GoogleMapの表示
 * @param {String} id 表示領域ID
 * @param {Object} option google.maps.Mapに設定するオプション
 * @param {Object} markerArray マーカーデータ配列
 * @param {Object} isNumberPin 番号付きマーカーで表示するか
 * @param {Object} location 番号付きマーカーで表示するか
 */
var viewGoogleMap = function(id, option, markerArray, isNumberPin, location){
  /**
   * マーカーのクリックイベントリスナーの登録
   * @param {google.maps.Marker} marker マーカーオブジェクト
   * @param {Object} markerData マーカーに設定する情報ウィンドウデータ
   */
  var setMarkerClickListener = function(marker, markerData) {
    google.maps.event.addListener(marker, 'click', function(event) {
      if (openInfoWindow) {
        openInfoWindow.close();
      }
      openInfoWindow = new google.maps.InfoWindow({
        content: markerData.content
      });
      google.maps.event.addListener(openInfoWindow,'closeclick',function(){
        openInfoWindow = null;
      })
      openInfoWindow.open(marker.getMap(), marker);
    });
  };

  /**
   * マーカーデータのセット
   * @param {Object} makerArray マーカーデータ
   */
  var setMarkerData = function(makerArray) {

    if (location == "Tokyo") {
      // 登録データ分のマーカーを作成
      for (var i = 0; i < makerArray.length; i++) {
        var marker = new google.maps.Marker({
          position: makerArray[i].position,
          title: makerArray[i].title,
          map: gmap,
          icon: isNumberPin ? "./img/pin/pin" + (i+1) + ".png" : null
        });

        // マーカーのclickリスナー登録
        setMarkerClickListener(marker, makerArray[i], true);
      }
    } else if (location == "Kanagawa") {
      // 登録データ分のマーカーを作成
      for (var i = 0; i < makerArray.length; i++) {
        var marker = new google.maps.Marker({
          position: makerArray[i].position,
          title: makerArray[i].title,
          map: gmap,
          icon: isNumberPin ? "./img/pin/pin" + (i+8) + ".png" : null
        });

        // マーカーのclickリスナー登録
        setMarkerClickListener(marker, makerArray[i], true);
      }
    } else if (location == "Hokkaido") {
      // 登録データ分のマーカーを作成
      for (var i = 0; i < makerArray.length; i++) {
        var marker = new google.maps.Marker({
          position: makerArray[i].position,
          title: makerArray[i].title,
          map: gmap,
          icon: isNumberPin ? "./img/pin/pin" + (i+18) + ".png" : null
        });

        // マーカーのclickリスナー登録
        setMarkerClickListener(marker, makerArray[i], true);
      }
    } else {
      // 登録データ分のマーカーを作成
      for (var i = 0; i < makerArray.length; i++) {
        var marker = new google.maps.Marker({
          position: makerArray[i].position,
          title: makerArray[i].title,
          map: gmap,
          icon: isNumberPin ? "./img/pin/pin" + (i+23) + ".png" : null
        });

        // マーカーのclickリスナー登録
        setMarkerClickListener(marker, makerArray[i], true);
      }
    }
  };

  option = option ? option : {};
  // if(id == null){
  //   return;
  // }
  if (location == "Tokyo") {
    var mapOption = {
      zoom: option.zoom || 11,
      center:option.center || new google.maps.LatLng(35.704498,139.619058),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      navigationControlOptions: {
        style: google.maps.NavigationControlStyle.DEFAULT
      }
    };
  } else if (location == "Kanagawa") {
    var mapOption = {
      zoom: option.zoom || 11,
      center:option.center || new google.maps.LatLng(35.551455,139.612675),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      navigationControlOptions: {
        style: google.maps.NavigationControlStyle.DEFAULT
      }
    };
  } else if (location == "Hokkaido") {
    var mapOption = {
      zoom: option.zoom || 12,
      center:option.center || new google.maps.LatLng(43.046343,141.395505
),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      navigationControlOptions: {
        style: google.maps.NavigationControlStyle.DEFAULT
      }
    };
  } else {
    var mapOption = {
      zoom: option.zoom || 13,
      center:option.center || new google.maps.LatLng(33.591088,130.371312),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      navigationControlOptions: {
        style: google.maps.NavigationControlStyle.DEFAULT
      }
    };
  }


  var gmap = new google.maps.Map(document.getElementById(id), mapOption);

  var openInfoWindow;

  if(markerArray){
    setMarkerData(markerArray);
  }
}
