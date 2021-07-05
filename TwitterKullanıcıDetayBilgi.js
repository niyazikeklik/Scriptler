var oldHref = document.location.href;
if (oldHref != document.location.href) {
  oldHref = document.location.href;
  var re = new RegExp(String.fromCharCode(160), "gi");
  setTimeout(() => {
    if (
      document.querySelectorAll("[data-testid=UserProfileHeader_Items]")
        .length > 0
    ) {
      function kayittarihiekle(metin) {
        return (
          '<span class="css-901oao css-16my406 r-111h2gw r-4qtqp9 r-poiln3 r-1b7u577 r-bcqeeo r-qvutc0"><svg viewBox="0 0 24 24" claDss="r-111h2gw r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg>' +
          metin +
          "</span>"
        );
      }
      function elementekle(baslik, deger) {
        return (
          '<div class="css-1dbjc4n r-1mf7evn"><a dir="auto" role="link" data-focusable="true" class="css-4rbku5 css-18t94o4 css-901oao r-jwli3a r-1loqt21 r-1qd0xha r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-jwli3a r-poiln3 r-b88u0q r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">' +
          deger +
          '</span></span> <span class="css-901oao css-16my406 r-111h2gw r-poiln3 r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">' +
          baslik +
          "</span></span></a></div>"
        );
      }
      function Kayittarihi(uyeliktarihi) {
        var ilkbosluk = uyeliktarihi.indexOf(" ");
        var ayadi = uyeliktarihi.substring(0, ilkbosluk);
        var yil = uyeliktarihi.substring(ilkbosluk, ilkbosluk + 5);
        var aylar = new Array(
          "Ocak",
          "Şubat",
          "Mart",
          "Nisan",
          "Mayıs",
          "Haziran",
          "Temmuz",
          "Ağustos",
          "Eylül",
          "Ekim",
          "Kasım",
          "Aralık"
        );
        var kacinciay = aylar.indexOf(ayadi) + 1;
        var bugun = new Date();
        var gecmis = new Date(yil, kacinciay, 15);
        return Math.round((bugun - gecmis) / (1000 * 60 * 60 * 24));
      }
      function Donustur(metin) {
        metin = metin.replaceAll(" ", "");
        if (String(metin).indexOf(",") == -1) {
          metin = metin.replace("B", "000");
        } else {
          metin = metin.replace("B", "00");
        }
        metin = metin.replace(",", "");
        metin = metin.replace(".", "").replaceAll(" ", "");
        return metin;
      }

      document
        .getElementsByClassName("css-1dbjc4n r-13awgt0 r-18u37iz r-1w6e6rj")[0]
        .children[1].classList.add("r-1mf7evn");
      var tweetsayisi = document
        .getElementsByClassName(
          "css-901oao css-bfa6kz r-111h2gw r-1qd0xha r-n6v787 r-16dba41 r-1sf4r6n r-bcqeeo r-qvutc0"
        )[0]
        .innerText.replace("Tweet", "")
        .replace(re, "");
      var uyeliktarihi = document.querySelector(
        "[data-testid=UserProfileHeader_Items]"
      ).lastElementChild.innerText;
      var gunluktweet = (
        Donustur(tweetsayisi) / Kayittarihi(uyeliktarihi)
      ).toFixed(0);
      var daas = "1.23 B";
      var yedek = parseFloat(gunluktweet);
      var element = document.getElementsByClassName(
        "css-1dbjc4n r-13awgt0 r-18u37iz r-1w6e6rj"
      )[0];
      if (yedek >= 1) {
        element.innerHTML += elementekle("Günlük tweet", gunluktweet);
        // document.getElementsByClassName("css-901oao css-bfa6kz r-111h2gw r-1qd0xha r-n6v787 r-16dba41 r-1sf4r6n r-bcqeeo r-qvutc0")[0].innerText = " Günde " + gunluktweet + " tweet atıyor.";
      } else {
        element.innerHTML += elementekle(
          "Günde bir tweet atıyor.",
          (Kayittarihi(uyeliktarihi) / Donustur(tweetsayisi)).toFixed(0)
        );
        // document.getElementsByClassName("css-901oao css-bfa6kz r-111h2gw r-1qd0xha r-n6v787 r-16dba41 r-1sf4r6n r-bcqeeo r-qvutc0")[0].innerText = (Kayittarihi(uyeliktarihi) / Donustur(tweetsayisi)).toFixed(1) + " Günde bir tweet atıyor.";
      }
      element = document.querySelectorAll(
        "[data-testid=UserProfileHeader_Items]"
      )[0].lastElementChild;
      // element.lastElementChild.remove();
      var gunsayisi = Kayittarihi(uyeliktarihi);
      var deger = "";
      if (gunsayisi > 364) {
        var yilsayisi = parseInt(gunsayisi / 365);
        var aysayisi = ((gunsayisi - yilsayisi * 365) / 30).toFixed(0);
        element.innerHTML =
          '<svg viewBox="0 0 24 24" class="r-111h2gw r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg>' +
          yilsayisi +
          " yıl " +
          aysayisi +
          " aydır üye.";
      } else if (gunsayisi > 29) {
        var aysayisi = parseInt(gunsayisi / 30);
        var gunsayisi2 = gunsayisi - aysayisi * 30;
        element.innerHTML =
          '<svg viewBox="0 0 24 24" class="r-111h2gw r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg>' +
          aysayisi +
          " ay " +
          gunsayisi2 +
          " gündür üye.";
      }
    }
  }, 2000);
}
