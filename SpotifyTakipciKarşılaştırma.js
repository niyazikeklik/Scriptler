// ONCE BUNU
var takipciler = document.getElementsByClassName(
    "_45331a50e3963ecc26575a06f1fd5292-scss _3957b7dd066dbbba6a311b40a427c59f-scss"
  );
  var cumle = "";
  for (var i = 0; i < takipciler.length; i++) {
    cumle = '"' + takipciler[i].innerText + '" ,';
  }
  console.log(cumle);

  //SONRA BUNU ÇALIŞTIR
  var takipedilenler = document.getElementsByClassName(
    "_45331a50e3963ecc26575a06f1fd5292-scss _3957b7dd066dbbba6a311b40a427c59f-scss"
  );
  
  var takipciler = [
    "Abdullah",
    "ikinciremedios",
    "Ilayda Bostan",
    "Magnitizdat",
    "Serdar",
    "Kübra",
    "95yyhtdwgfoysdpo47uyxl0el",
    "Ezgi",
    "Burcu Özder",
    "Zilan Gökçe",
    "daniel",
    "demirinanc",
    "eyl",
    "Bahar Bostancı",
    "ihsanmelihaldemir",
    "İrem Özdemir",
    "Kübra",
    "nisa",
    "niyazikeklikk-tr",
    "duygumerc",
    "sinemsumnuuu",
    "Şükran Yücel",
    "umay",
    "yesiimaydin",
  ];
  for (var i = 0; i < takipedilenler.length; i++) {
    var varmi = false;
    for (var j = 0; j < takipciler.length; j++) {
      if (takipciler[j] == takipedilenler[i].innerText) {
        varmi = true;
  
        break;
      }
    }
    if (varmi == false) {
      console.log(takipedilenler[i].innerText);
    }
  }