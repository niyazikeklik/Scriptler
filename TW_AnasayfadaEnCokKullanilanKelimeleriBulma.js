var bu_kelimeleri_sayma = "bir,mi,ve,olmak,bu,için,o,ben,demek,çok,yapmak,ne,gibi,daha,almak,var,kendi,gelmek,ile,vermek,ama,sonra,de,da,ki,kadar,yer,en,insan,değil,her,istemek,yıl,çıkmak,görmek,gün,biz,gitmek,iş,şey,ara,ki,bilmek,el,zaman,ya,çocuk,iki,bakmak,çalışmak,içinde,büyük,yok,başlamak,yol,kalmak,neden,siz,konu,yapılmak,iyi,ev,ise,diye,bulunmak,söylemek,göz,gerekmek,dünya,baş,durum,yan,geçmek,sen,onlar,yeni,önce,başka,hâl,orta,su,girmek,yemek,hiç,bile,nasıl,bütün,karşı,bulmak,böyle,yaşamak,düşünmek,aynı,iç,ancak,kişi,bunlar,veya,ilk,göre,ön,son,biri,şekil,önemli,yüz,hem,göstermek,etmek,alt,getirmek,kullanmak,çünkü,taraf,şimdi,adam,onun,diğer,artık,üzerinde,ses,hep,doğru,durmak,kız,tüm,çekmek,konuşmak,para,anlamak,anne,az,bazı,baba,hayat,sadece,küçük,fazla,bilgi,an,sormak,bunun,öyle,yine,sağlamak,sonuç,kullanılmak,dış,ad,yani,süre,dönmek,açmak,oturmak,anlatmak,bırakmak,hemen,saat,yaş,sorun,sahip,sıra,yazmak,yüzde,ay,atmak,tutmak,bunu,olay,düşmek,duymak,söz,güzel,sevmek,biraz,zor,çıkarmak,şu,koymak,tek,sistem,birlikte,verilmek,kim,alınmak,genç,kapı,kitap,üzerine,burada,gece,alan,birbiri,işte,beklemek,uzun,hiçbir,bugün,dönem,arkadaş,ürün,aile,üç,okumak,herkes,güç,belki,gerçek,tam,ilgili,ilişki,çevre,eski,aramak,yaşam,halk,yakın,sokak,bey,tarih,özellik,bölüm,özel,akıl,kimse,pek,eğer,gerek,özellikle,anlam,yüksek,banka,kez,ayak,taşımak,geri,toplum,araç,madde,tür,karar,görülmek,hava,sayı,farklı,grup,oda,biçim,oluşmak,haber,ayrıca,gelen,birkaç,soru,arka,kazanmak,yazı,okul,açık,öğrenmek,sürmek,dil,şirket,kaynak,bitmek,program,devam etmek,hareket,renk,açılmak,hak,inanmak,çalışma,açı,parça,gazete,oluşturmak,tabi,değer,tanımak,yapı,doktor,gelir,görev,amaç,bölge,film,üzere,müşteri,zaten,telefon,eğitim,deniz,ikinci,kalkmak,hatta,etki,gelişmek,geçen,vücut,düşünce,milyon,oynamak,değişmek,temel,yaratmak,ulaşmak,sanmak,geçirmek,kültür,kurmak,fakat,buna,resim,ışık,içmek,hanım,hizmet,ihtiyaç,nokta,yön,evet,oyun,artmak,yeniden,işlem,kısa,kolay,hangi,oran,aslında,kabul etmek,orada,dikkat,uzak,bilgisayar,gelecek,görünmek,örneğin,oğul,dinlemek,uygun,lira,üretim,dakika,unutmak,yürümek,böylece,kötü,araba,ağız,duygu,uygulamak,hâlâ,örnek,birçok,izlemek,derece,mümkün,şöyle,duvar,on,sanat,ana,hastalık,öğrenci,televizyon,yöntem,masa,ölmek,takım,üst,kafa,müzik,ayrılmak,enerji,üniversite,spor,türlü,can,rağmen,kısım,ölüm,sürekli,sağlık,çeşitli,bundan,hissetmek,oysa,sabah,internet,teknik,dışarı,merkez,ortam,yerine,düzey,köy,yönetim,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64";
// Buraya eklenen kelimeler dikkate alınmaz. Genel olarak türkçede en sık kullanılan kelimeler yazılıdır.
var sikkullanilan = Cevir(bu_kelimeleri_sayma).split(",");

function Cevir(text) {
    var trMap = {
        'çÇ': 'c',
        'ğĞ': 'g',
        'şŞ': 's',
        'üÜ': 'u',
        'ıİ': 'i',
        'öÖ': 'o'
    };
    for (var key in trMap) {
        text = text.replace(new RegExp('[' + key + ']', 'g'), trMap[key]);
    }
    /*  return text.replace(/[^-a-zA-Z0-9\s]+/ig, '')
          .replace(/\s/gi, "-")
          .replace(/[-]+/gi, "-")
          .toLowerCase();*/
    return text.replaceAll("\n", "");

}

function removeAllInstances(arr) {

    for (var i = arr.length; i > 0; i--) {
        for (var j = sikkullanilan.length; j > 0; j--) {
            if (arr[i] === sikkullanilan[j]) {
                arr.splice(i, 1);
                break;
            }
        }

    }
    return arr;
}

function subsets(array) {
    var list = "";
    for (let i = 0; i < array.length - 1; i++) {
        var alt = [array[i] + " "];
        for (let j = i + 1; j < array.length; j++) {

            alt.push(array[j]);
            list += alt + "\n";
        }

    }
    var list2 = [];
    list.split("\n").forEach(element => {
        list2.push(element.split(","));
    });
    list2.pop();
    return list2;
    /*
        while (offset < array.length) {
          let first = array[offset++];
          for (let subset of subsets(array, offset)) {
            subset.push(first);
            yield subset;
          }
        }
        return yield [];*/
}

var kontroledildi = [];
var kelimeler = [];

function kelimeleribul(elementler) {
    elementler.forEach(element => {
        try {
            var tweet_link = element.getElementsByTagName("time")[0].parentElement.getAttribute("href");
            if (kontroledildi.indexOf(tweet_link) == -1) {
                var tweet_text = element.querySelector('[lang=tr]').innerText;
                tweet_text = Cevir(tweet_text).toLowerCase();
                var kelimelerim = String(tweet_text).split(' ');
                kelimelerim = removeAllInstances(kelimelerim);

                kelimelerim.forEach(element => {
                    kelimeler.push(element);
                });

                if (kelimelerim.length < 20) {
                    subsets(kelimelerim).forEach(element => {
                        var cumle = "";
                        element.forEach(element2 => {
                            cumle += element2 + " ";
                        });
                        kelimeler.push(cumle);
                    });
                }

                kontroledildi.push(tweet_link);

            }
        } catch (error) {
            kontroledildi.push(tweet_link);
        }

    });
}
console.clear();
console.log("Bekleyin tweetler kontrol ediliyor... 1-2dk sürebilir.");
const counts = {};
var sortedArr = [];

var clr = setInterval(() => {
    var elementler = document.querySelectorAll("[data-testid=tweet]");
    kelimeleribul(elementler);
    var x = window.scrollY;
    window.scrollBy(0, 1000);
    setTimeout(() => {
        var y = window.scrollY;
        if (x == y || kontroledildi.length >= 50) {
            clearInterval(clr);
            kelimeler.forEach(function(x) { counts[x] = (counts[x] || 0) + 1; });
            var sortable = [];
            for (var vehicle in counts)
                sortable.push([vehicle, counts[vehicle]]);
            sortedArr = sortable.sort(function(a, b) {
                return a[1] - b[1];
            }).reverse();
            var array = [];
            sortedArr.forEach(element => {
                console.log(parseInt(element[1]))
                if (parseInt(element[1]) >= 1)
                    array.push(element);
            });
            var jsArr = JSON.stringify(array, null, 2);
            console.log(jsArr.replaceAll("[", "").replaceAll("]", "").replaceAll(",", ""));
            var myWindow = window.open("data:,", "_blank");
            myWindow.document.write("<code>" + jsArr.replaceAll("[", "<br>[") + "</code>");
        }
    }, 500)

}, 2000);