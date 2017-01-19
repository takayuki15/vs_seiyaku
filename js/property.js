function initializeT(id){
  var data = new Array();
  data.push({position: new google.maps.LatLng(35.702840, 139.504573), title: "クリオ武蔵小金井グリーンアベニュー", content: "<div id='infoWindow'><h3>クリオ武蔵小金井グリーンアベニュー</h3><div class='grp_r'><img src='./img/property/no1.jpg' alt='クリオ武蔵小金井グリーンアベニュー' /><p>交通/<br />中央本線（JR東日本）<br />「武蔵小金井」駅 徒歩7分</p></div><a href='http://www.meiwajisyo.co.jp/clio/780_Musashikoganei/' target='_blank'>公式HPはこちら ></a></div>"});
  // data.push({position: new google.maps.LatLng(35.736873, 139.631882), title: "クリオ富士見台ガーデンテラス", content: "<div id='infoWindow'><h3>クリオ富士見台ガーデンテラス</h3><div class='grp_r'><img src='./img/property/no2.jpg' alt='クリオ富士見台ガーデンテラス' /><p>交通/<br />西武池袋線<br />「富士見台」駅 徒歩3分</p></div><a href='http://www.meiwajisyo.co.jp/clio/758_Fujimidai/' target='_blank'>公式HPはこちら ></a></div>"});
  data.push({position: new google.maps.LatLng(35.629305, 139.670035), title: "クリオ駒沢公園", content: "<div id='infoWindow'><h3>クリオ駒沢公園</h3><div class='grp_r'><img src='./img/property/no3.jpg' alt='クリオ駒沢公園' /><p>交通/<br />東急田園都市線<br />「駒沢大学」駅 徒歩16分</p></div><a href='http://www.meiwajisyo.co.jp/clio/774_KomazawaKoen/' target='_blank'>公式HPはこちら ></a></div>"});
  data.push({position: new google.maps.LatLng(35.68643, 139.616793), title: "クリオ杉並高井戸", content: "<div id='infoWindow'><h3>クリオ杉並高井戸</h3><div class='grp_r'><img src='./img/property/no4.jpg' alt='クリオ杉並高井戸' /><p>交通/<br />京王井の頭線<br />「高井戸」駅徒歩8分</p></div><a href='http://www.meiwajisyo.co.jp/clio/792_SuginamiTakaido/' target='_blank'>公式HPはこちら ></a></div>"});
  // data.push({position: new google.maps.LatLng(35.774579, 139.514315), title: "クリオ清瀬元町", content: "<div id='infoWindow'><h3>クリオ清瀬元町</h3><div class='grp_r'><img src='./img/property/no5.jpg' alt='クリオ清瀬元町' /><p>交通/<br />西武池袋線<br />「清瀬」駅 徒歩6分</p></div><a href='http://www.meiwajisyo.co.jp/clio/767_KiyoseMotomachi/' target='_blank'>公式HPはこちら ></a></div>"});
  data.push({position: new google.maps.LatLng(35.702840, 139.506247), title: "クリオ武蔵小金井フロントアベニュー", content: "<div id='infoWindow'><h3>クリオ武蔵小金井フロントアベニュー</h3><div class='grp_r'><img src='./img/property/no6.jpg' alt='クリオ武蔵小金井フロントアベニュー' /><p>交通/<br />中央本線（JR東日本）<br />「武蔵小金井」駅 徒歩6分</p></div><a href='http://www.meiwajisyo.co.jp/clio/784_Musashikoganei/' target='_blank'>公式HPはこちら ></a></div>"});
  data.push({position: new google.maps.LatLng(35.750594, 139.744194), title: "クリオ ラベルヴィ王子", content: "<div id='infoWindow'><h3>クリオ ラベルヴィ王子</h3><div class='grp_r'><img src='./img/property/no7.jpg' alt='クリオ ラベルヴィ王子' /><p>交通/<br />京浜東北線<br />「王子」駅 徒歩3分</p></div><a href='http://www.meiwajisyo.co.jp/clio/785_Oji/' target='_blank'>公式HPはこちら ></a></div>"});

  var map = viewGoogleMap(id,null,data,true,"Tokyo");
}

function initializeK(id){
  var data = new Array();
  data.push({position: new google.maps.LatLng(35.456451, 139.608342), title: "クリオ横濱天王町", content: "<div id='infoWindow'><h3>クリオ横濱天王町</h3><div class='grp_r'><img src='./img/property/no8.jpg' alt='クリオ横濱天王町' /><p>交通/<br />相模鉄道線「天王町」駅徒歩7分<br />「西横浜」駅徒歩8分</p></div><a href='http://www.meiwajisyo.co.jp/clio/796_YokohamaTennocho/' target='_blank'>公式HPはこちら ></a></div>"});
  data.push({position: new google.maps.LatLng(35.458517, 139.622771), title: "クリオ横濱サザンマークス", content: "<div id='infoWindow'><h3>クリオ横濱サザンマークス</h3><div class='grp_r'><img src='./img/property/no9.jpg' alt='クリオ横濱サザンマークス' /><p>交通/<br />JR各線、東急東横線、みなとみらい線<br />京浜急行本線、相模鉄道本線「横浜」駅徒歩11分</p></div><a href='http://www.meiwajisyo.co.jp/clio/773_YokohamaSouthernMarks/' target='_blank'>公式HPはこちら ></a></div>"});
  data.push({position: new google.maps.LatLng(35.608414, 139.612878), title: "クリオ溝の口ガーデンコート", content: "<div id='infoWindow'><h3>クリオ溝の口ガーデンコート</h3><div class='grp_r'><img src='./img/property/no11.jpg' alt='クリオ溝の口ガーデンコート' /><p>交通/<br />東急田園都市線・東急大井町線<br />「高津」駅徒歩9分</p></div><a href='http://www.meiwajisyo.co.jp/clio/793_Mizonokuchi/' target='_blank'>公式HPはこちら ></a></div>"});
  data.push({position: new google.maps.LatLng(35.580934, 139.647960), title: "クリオ武蔵中原", content: "<div id='infoWindow'><h3>クリオ武蔵中原</h3><div class='grp_r'><img src='./img/property/no12.jpg' alt='クリオ武蔵中原' /><p>交通/<br />JR南武線<br />「武蔵中原」駅徒歩8分</p></div><a href='http://www.meiwajisyo.co.jp/clio/798_Musashinakahara/' target='_blank'>公式HPはこちら ></a></div>"});
  data.push({position: new google.maps.LatLng(35.577676, 139.652334), title: "クリオ ラベルヴィ武蔵小杉", content: "<div id='infoWindow'><h3>クリオ ラベルヴィ武蔵小杉</h3><div class='grp_r'><img src='./img/property/no13.jpg' alt='クリオ ラベルヴィ武蔵小杉' /><p>交通/<br />東急東横線・目黒線<br />「武蔵小杉」駅徒歩9分、「元住吉」駅徒歩7分</p></div><a href='http://www.meiwajisyo.co.jp/clio/797_Musashikosugi/' target='_blank'>公式HPはこちら ></a></div>"});
  data.push({position: new google.maps.LatLng(35.542148, 139.507410), title: "クリオ青葉台", content: "<div id='infoWindow'><h3>クリオ青葉台</h3><div class='grp_r'><img src='./img/property/no14.jpg' alt='クリオ青葉台' /><p>交通/<br />東急田園都市線<br />「青葉台」駅 徒歩5分</p></div><a href='http://www.meiwajisyo.co.jp/clio/766_Aobadai/' target='_blank'>公式HPはこちら ></a></div>"});
  // data.push({position: new google.maps.LatLng(35.344205, 139.456386), title: "クリオ湘南辻堂イーストテラス", content: "<div id='infoWindow'><h3>クリオ湘南辻堂イーストテラス</h3><div class='grp_r'><img src='./img/property/no15.jpg' alt='クリオ湘南辻堂イーストテラス' /><p>交通/<br />東海道本線<br />「辻堂」駅 徒歩14分</p></div><a href='http://www.meiwajisyo.co.jp/clio/755_ShonanTsujido/' target='_blank'>公式HPはこちら ></a></div>"});
  data.push({position: new google.maps.LatLng(35.533408, 139.690008), title: "クリオ ラベルヴィ川崎南幸町", content: "<div id='infoWindow'><h3>クリオ ラベルヴィ川崎南幸町</h3><div class='grp_r'><img src='./img/property/no16.jpg' alt='クリオ ラベルヴィ川崎南幸町' /><p>交通/<br />JR東海道本線・京浜東北線・南武線<br />「川崎」駅徒歩8分</p></div><a href='http://www.meiwajisyo.co.jp/clio/795_KawasakiMinamisaiwaicho/' target='_blank'>公式HPはこちら ></a></div>"});
  data.push({position: new google.maps.LatLng(35.510520, 139.675235), title: "クリオ鶴見豊岡町ウエストコート", content: "<div id='infoWindow'><h3>クリオ鶴見豊岡町ウエストコート</h3><div class='grp_r'><img src='./img/property/no17.jpg' alt='クリオ鶴見豊岡町ウエストコート' /><p>交通/<br />京浜東北線<br />「鶴見」駅 徒歩4分</p></div><a href='http://www.meiwajisyo.co.jp/clio/783_Tsurumi/' target='_blank'>公式HPはこちら ></a></div>"});
  data.push({position: new google.maps.LatLng(35.587975, 139.497792), title: "クリオ上麻生ガーデンコート", content: "<div id='infoWindow'><h3>クリオ上麻生ガーデンコート</h3><div class='grp_r'><img src='./img/property/no18.jpg' alt='クリオ上麻生ガーデンコート' /><p>交通/<br />小田急小田原線<br />「柿生」駅 徒歩6分</p></div><a href='http://www.meiwajisyo.co.jp/clio/786_Kamiasao/' target='_blank'>公式HPはこちら ></a></div>"});

  var map = viewGoogleMap(id,null,data,true,"Kanagawa");
}

function initializeH(id){
  var data = new Array();
  data.push({position: new google.maps.LatLng(43.041424, 141.475822), title: "クリオレジダンス新さっぽろ", content: "<div id='infoWindow'><h3>クリオレジダンス新さっぽろ</h3><div class='grp_r'><img src='./img/property/no20.jpg' alt='クリオレジダンス新さっぽろ' /><p>交通/<br />札幌市営地下鉄東西線<br />「新さっぽろ」駅 徒歩4分</p></div><a href='http://www.meiwajisyo.co.jp/clio/777_Shinsapporo/' target='_blank'>公式HPはこちら ></a></div>"});
  data.push({position: new google.maps.LatLng(43.053811, 141.359479), title: "クリオ南7条", content: "<div id='infoWindow'><h3>クリオ南7条</h3><div class='grp_r'><img src='./img/property/no21.jpg' alt='クリオ南7条' /><p>交通/<br />札幌市営地下鉄東豊線<br />「豊水すすきの」駅 徒歩3分</p></div><a href='http://www.meiwajisyo.co.jp/clio/764_Minami7/' target='_blank'>公式HPはこちら ></a></div>"});
  data.push({position: new google.maps.LatLng(43.056402, 141.350860), title: "クリオ札幌大通", content: "<div id='infoWindow'><h3>クリオ札幌大通</h3><div class='grp_r'><img src='./img/property/no22.jpg' alt='クリオ札幌大通' /><p>交通/<br />札幌市営地下鉄南北線<br />「大通」駅 徒歩6分</p></div><a href='http://www.meiwajisyo.co.jp/clio/779_SapporoOdori/' target='_blank'>公式HPはこちら ></a></div>"});
  data.push({position: new google.maps.LatLng(43.054254, 141.319919), title: "クリオ円山裏参道", content: "<div id='infoWindow'><h3>クリオ円山裏参道</h3><div class='grp_r'><img src='./img/property/no23.jpg' alt='クリオ円山裏参道' /><p>交通/<br />札幌市営地下鉄東西線<br />「円山公園」駅 徒歩4分</p></div><a href='http://www.meiwajisyo.co.jp/clio/789_Maruyamakoen/' target='_blank'>公式HPはこちら ></a></div>"});
  // data.push({position: new google.maps.LatLng(43.031869, 141.369913), title: "（仮称）クリオ平岸プロジェクト", content: "<div id='infoWindow'><h3>（仮称）クリオ平岸プロジェクト</h3><div class='grp_r'><img src='./img/property/no24.jpg' alt='（仮称）クリオ平岸プロジェクト' /><p>交通/<br />札幌市営地下鉄南北線<br />「平岸」駅徒歩4分</p></div><a href='http://www.meiwajisyo.co.jp/clio/790_Hiragishi3/' target='_blank'>公式HPはこちら ></a></div>"});

  var map = viewGoogleMap(id,null,data,true,"Hokkaido");
}

function initializeF(id){
  var data = new Array();
  data.push({position: new google.maps.LatLng(33.601345, 130.408115), title: "クリオ ラベルヴィ呉服町", content: "<div id='infoWindow'><h3>クリオ ラベルヴィ呉服町</h3><div class='grp_r'><img src='./img/property/no25.jpg' alt='クリオ ラベルヴィ呉服町' /><p>交通/<br />福岡市営地下鉄箱崎線<br />「呉服町」駅徒歩5分</p></div><a href='http://www.meiwajisyo.co.jp/clio/794_Gofukumachi/' target='_blank'>公式HPはこちら ></a></div>"});
  data.push({position: new google.maps.LatLng(33.575070, 130.334271), title: "クリオ室見", content: "<div id='infoWindow'><h3>クリオ室見</h3><div class='grp_r'><img src='./img/property/no26.jpg' alt='クリオ室見' /><p>交通/<br />福岡市地下鉄空港線<br />「室見」駅 徒歩14分</p></div><a href='http://www.meiwajisyo.co.jp/clio/782_Muromi/' target='_blank'>公式HPはこちら ></a></div>"});

  var map = viewGoogleMap(id,null,data,true,"Fukuoka");
}
