function fiyatal() {
  return document.getElementsByClassName("css-uliqdc")[0].firstElementChild
    .innerText;
  // return window.prompt("Sayı gir: ", "0");
}
function AsayısındanBsayınaYuzdeKacArtti(guncelFiyat, maliyet) {
  return ((guncelFiyat - maliyet) / maliyet) * 100;
}
function satisEkrani(time) {
  setTimeout(() => {
    document.getElementsByClassName("css-v57pmm")[0].click();
  }, time);
}
function piyasaGiris(time) {
  setTimeout(() => {
    document.querySelectorAll("[data-testid = MarketType]")[1].click();
  }, time);
}
function yuzdelikSec(time, yuzde) {
  setTimeout(() => {
    document.getElementsByClassName("css-1mt8d1e")[1].children[yuzde].click();
  }, time);
}
function limitGiris(time) {
  setTimeout(() => {
    document.querySelectorAll("[data-testid = LimitType]")[1].click();
  }, time);
}

function StoplimitGiris(time) {
  setTimeout(() => {
    document.querySelectorAll("[data-testid = stopLimit]")[3].click();
  }, time);
}
function satisFiyatiGir(time, satisFiyat) {
  setTimeout(() => {
    document.getElementById("FormRow-SELL-price").value = satisFiyat;
  }, time);
}
function satEmri(time) {
  setTimeout(() => {
    document.getElementById("orderformSellBtn").click();
  }, time);
}
function tumEmirleriİptalEtBtnClick(time) {
  setTimeout(() => {
    document.getElementsByClassName("css-3ymp74")[0].click();
  }, time);
}
function tumEmirleriİptalEtOnay(time) {
  setTimeout(() => {
    document.querySelector("[data-testid=confirmButton]").click();
  }, time);
}
function tumEmirleriİptalEt() {
  if (document.getElementsByClassName("css-1ltda9e").length == 0) {
    tumEmirleriİptalEtBtnClick(50);
    tumEmirleriİptalEtOnay(200);
  }
}
function stopLimitStopDegeriGir(deger, time) {
  setTimeout(() => {
    document.getElementById("FormRow-SELL-stopPrice").value = deger;
  }, time);
}
function stopLimitLimitDegeriGir(deger, time) {
  setTimeout(() => {
    document.getElementById("FormRow-SELL-stopLimitPrice").value = deger;
  }, time);
}

function limitSatisHazirlik(satisFiyat) {
  satisEkrani(50);
  limitGiris(200);
  yuzdelikSec(350, 3);
  satisFiyatiGir(370, satisFiyat);
  satEmri(400);
}
function piyasaSatisHazirlik() {
  satisEkrani(50);
  piyasaGiris(500);
  yuzdelikSec(1000, 3);
  satEmri(1200);
}
function stopLimitHazirlik(stopFiyati, SatisFiyati) {
  satisEkrani(50);
  StoplimitGiris(500);
  yuzdelikSec(600, 3);
  stopLimitLimitDegeriGir(SatisFiyati, 650);
  stopLimitStopDegeriGir(stopFiyati, 665);
  satEmri(680);
}
function iptalveYenidenLimitOlustur(fiyat) {
  setTimeout(() => {
    tumEmirleriİptalEt();
  }, 100);
  setTimeout(() => {
    limitSatisHazirlik(fiyat);
  }, 600);
}
function iptalveYenidenPiyasaSatisYap() {
  setTimeout(() => {
    tumEmirleriİptalEt();
  }, 100);
  setTimeout(() => {
    piyasaSatisHazirlik();
  }, 600);
}
function iptalveYenidenStopOlustur(Stopfiyat, limitfiyat) {
  //stop: bu değere gelince calis limit: burdan sat örnek: 65 stopuna gelip tekrar 70 limit olunca sat.
  setTimeout(() => {
    tumEmirleriİptalEt();
  }, 100);
  setTimeout(() => {
    stopLimitHazirlik(stopFiyati, limitfiyat);
  }, 600);
}
var kilitMaliyettenDonerse = false;
var kilitTaban = false;
var kilitSufiyataSuFiyataGeriDönerse = false;

var suFiyatagelir = 0.061;
var fiyataGeldimi = false;
var tekrarSuFiyataGelirse = 0.65;

var tabanFiyat = 0.058;
var maliyetFiyat = 0.075;
var İslemAcicikorOrani = 3.0;
var stopOrani = -4.0;
var maliyetFiyataGeldiMi = false;
var limitKoyuldumu = false;
var guncellenmisMaliyet = 0.0;
var count = 0;
var karLimitCount = 0;
var oncekiFiyat = 0.0;

//  var limitDegeri = 0.0;
guncellenmisMaliyet = maliyetFiyat;
var intervalid = setInterval(() => {
  count++;
  var fiyat = fiyatal();
  console.log(
    count +
      ") " +
      fiyat +
      " Artis Orani: " +
      AsayısındanBsayınaYuzdeKacArtti(fiyat, oncekiFiyat).toFixed(3)
  );
  if (count % 5 == 0) {
    oncekiFiyat = fiyat;
  }
  if (!maliyetFiyataGeldiMi && fiyat >= maliyetFiyat) {
    maliyetFiyataGeldiMi = true;
    console.log("True oldu.");
  }

  /*  if (limitKoyuldumu && fiyat <= limitDegeri ){ 
        piyasaSatisHazirlik(); 
        console.log(fiyat + " fiyattan satış gerçekleşti."); 
        clearInterval(intervalid); 
      }*/
  if (!kilitTaban && fiyat == tabanFiyat) {
    iptalveYenidenPiyasaSatisYap();
    console.log(
      "fiyat: " +
        fiyat +
        " Belirlediğiniz taban fiyata (" +
        tabanFiyat +
        ") geldiği için satıldı."
    );
    clearInterval(intervalid);
  } else if (
    !kilitSufiyataSuFiyataGeriDönerse &&
    fiyat - fiyat * 0.022 <= suFiyatagelir
  ) {
    iptalveYenidenStopOlustur(suFiyatagelir, tekrarSuFiyataGelirse);
    console.log(
      "fiyat: " +
        fiyat +
        " Belirlediğiniz fiyata (" +
        suFiyatagelir +
        ") geldiği için " +
        tekrarSuFiyataGelirse +
        " fiyattan stop emri oluşturdu."
    );
  } else if (
    !kilitMaliyettenDonerse &&
    AsayısındanBsayınaYuzdeKacArtti(fiyat, maliyetFiyat).toFixed(3) <=
      stopOrani &&
    maliyetFiyataGeldiMi
  ) {
    iptalveYenidenPiyasaSatisYap();
    console.log(
      "fiyat: " +
        fiyat +
        " maliyet fiyatına gelip ve tekrar onun %" +
        AsayısındanBsayınaYuzdeKacArtti(fiyat, maliyetFiyat).toFixed(3) +
        " altına düştüğü için (limitiniz: " +
        stopOrani +
        " idi) satıldı."
    );
    clearInterval(intervalid);
  } else if (fiyat >= maliyetFiyat) {
    var karOrani = 0;
    karOrani = AsayısındanBsayınaYuzdeKacArtti(
      fiyat,
      guncellenmisMaliyet
    ).toFixed(3);
    if (karOrani >= İslemAcicikorOrani) {
      karLimitCount++;
      if (guncellenmisMaliyet < maliyetFiyat)
        guncellenmisMaliyet = maliyetFiyat;
      iptalveYenidenStopOlustur(
        (guncellenmisMaliyet += guncellenmisMaliyet * 0.014),
        guncellenmisMaliyet
      );
      //  limitDegeri = guncellenmisMaliyet;
      console.log(
        fiyat +
          " - %" +
          karOrani +
          " Kara geçtiğiniz için fiyat, karını korumak için " +
          guncellenmisMaliyet +
          " altında stop limit satış emri konuldu."
      );
      guncellenmisMaliyet = fiyat - fiyat * 0.02;
    }
  }
}, 950);