var tweetsayisi = 250;
// Kontrol edilece tweet sayısı.
var oran = parseInt(tweetsayisi) * 0.02;
// 100 tweet kontrol edildiğinde 2 (100 x 0,02) kereden az geçen kelimeler dikkate alınmaz.
var bu_kelimeleri_sayma = "bir,mi,ve,olmak,bu,için,o,ben,demek,çok,yapmak,ne,gibi,daha,almak,var,kendi,gelmek,ile,vermek,ama,sonra,de,da,ki,kadar,yer,en,insan,değil,her,istemek,yıl,çıkmak,görmek,gün,biz,gitmek,iş,şey,ara,ki,bilmek,el,zaman,ya,çocuk,iki,bakmak,çalışmak,içinde,büyük,yok,başlamak,yol,kalmak,neden,siz,konu,yapılmak,iyi,ev,ise,diye,bulunmak,söylemek,göz,gerekmek,dünya,baş,durum,yan,geçmek,sen,onlar,yeni,önce,başka,hâl,orta,su,girmek,yemek,hiç,bile,nasıl,bütün,karşı,bulmak,böyle,yaşamak,düşünmek,aynı,iç,ancak,kişi,bunlar,veya,ilk,göre,ön,son,biri,şekil,önemli,yüz,hem,göstermek,etmek,alt,getirmek,kullanmak,çünkü,taraf,şimdi,adam,onun,diğer,artık,üzerinde,ses,hep,doğru,durmak,kız,tüm,çekmek,konuşmak,para,anlamak,anne,az,bazı,baba,hayat,sadece,küçük,fazla,bilgi,an,sormak,bunun,öyle,yine,sağlamak,sonuç,kullanılmak,dış,ad,yani,süre,dönmek,açmak,oturmak,anlatmak,bırakmak,hemen,saat,yaş,sorun,sahip,sıra,yazmak,yüzde,ay,atmak,tutmak,bunu,olay,düşmek,duymak,söz,güzel,sevmek,biraz,zor,çıkarmak,şu,koymak,tek,sistem,birlikte,verilmek,kim,alınmak,genç,kapı,kitap,üzerine,burada,gece,alan,birbiri,işte,beklemek,uzun,hiçbir,bugün,dönem,arkadaş,ürün,aile,üç,okumak,herkes,güç,belki,gerçek,tam,ilgili,ilişki,çevre,eski,aramak,yaşam,halk,yakın,sokak,bey,tarih,özellik,bölüm,özel,akıl,kimse,pek,eğer,gerek,özellikle,anlam,yüksek,banka,kez,ayak,taşımak,geri,toplum,araç,madde,tür,karar,görülmek,hava,sayı,farklı,grup,oda,biçim,oluşmak,haber,ayrıca,gelen,birkaç,soru,arka,kazanmak,yazı,okul,açık,öğrenmek,sürmek,dil,şirket,kaynak,bitmek,program,devam etmek,hareket,renk,açılmak,hak,inanmak,çalışma,açı,parça,gazete,oluşturmak,tabi,değer,tanımak,yapı,doktor,gelir,görev,amaç,bölge,film,üzere,müşteri,zaten,telefon,eğitim,deniz,ikinci,kalkmak,hatta,etki,gelişmek,geçen,vücut,düşünce,milyon,oynamak,değişmek,temel,yaratmak,ulaşmak,sanmak,geçirmek,kültür,kurmak,fakat,buna,resim,ışık,içmek,hanım,hizmet,ihtiyaç,nokta,yön,evet,oyun,artmak,yeniden,işlem,kısa,kolay,hangi,oran,aslında,kabul etmek,orada,dikkat,uzak,bilgisayar,gelecek,görünmek,örneğin,oğul,dinlemek,uygun,lira,üretim,dakika,unutmak,yürümek,böylece,kötü,araba,ağız,duygu,uygulamak,hâlâ,örnek,birçok,izlemek,derece,mümkün,şöyle,duvar,on,sanat,ana,hastalık,öğrenci,televizyon,yöntem,masa,ölmek,takım,üst,kafa,müzik,ayrılmak,enerji,üniversite,spor,türlü,can,rağmen,kısım,ölüm,sürekli,sağlık,çeşitli,bundan,hissetmek,oysa,sabah,internet,teknik,dışarı,merkez,ortam,yerine,düzey,köy,yönetim,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64";
// Buraya eklenen kelimeler dikkate alınmaz. Genel olarak türkçede en sık kullanılan kelimeler default olarak yazılıdır.


var elementler = document.getElementsByClassName('css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-kzbkwu');
var kontroledildi = [];
var kelimeler = [];
var say = 0;

function kelimeleribul() {
    for (let i = 0; i < elementler.length; i++) {
        try {
            var tweet_link = elementler[i].getElementsByClassName('css-4rbku5 css-18t94o4 css-901oao r-111h2gw r-1loqt21 r-1q142lx r-1qd0xha r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-3s2u2q r-qvutc0')[0].getAttribute('href');
            var tweet_text = elementler[i].getElementsByClassName('css-901oao r-jwli3a r-1qd0xha r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-bnwqim r-qvutc0')[0].innerText;
            if (kontroledildi.indexOf(tweet_link) != -1) { continue; }
        } catch (error) {
            continue;
        }
        var kelimelerim = String(tweet_text).split(' ');
        for (let j = 0; j < kelimelerim.length; j++) { kelimeler.push(kelimelerim[j]); }
        kontroledildi.push(tweet_link);
    }
}

function varmi(kelime) {
    for (var i = 0; i < encokkulllanilanlist.length; i++) {
        if (encokkulllanilanlist[i] == kelime) return true;
    }
    return false;
}

function sirala(list) {
    for (let i = 0; i < list.length; i++) {
        var enk = 5000;
        var enk_indis = -1;
        for (let j = i; j < list.length; j++) {
            const element2 = list[j];
            var sayi2 = String(element2).substring(0, element2.indexOf('-'));
            if (parseInt(sayi2) < parseInt(enk)) { enk_indis = j;
                enk = sayi2; }
        }
        var bos = list[i];
        list[i] = list[enk_indis];
        list[enk_indis] = bos;
    }
    return list;
}

function sayilarinibul() {
    var sayikontrol = [];
    var kelimelervesayisi = [];
    for (let i = 0; i < kelimeler.length; i++) {
        if (sayikontrol.indexOf(kelimeler[i]) == -1) {
            var sayi = 1;
            for (let j = i + 1; j < kelimeler.length - 1; j++) {
                if (kelimeler[i] == kelimeler[j]) sayi++;

            }
            sayikontrol.push(kelimeler[i]);
            if (parseInt(sayi) >= parseInt(oran) && !varmi(kelimeler[i])) {
                kelimelervesayisi.push(sayi + "- kere: " + kelimeler[i].replaceAll("\n", "") + "\n");
            }
        }
    }
    var kelimelervesayisi = sirala(kelimelervesayisi);
    kelimelervesayisi.reverse();
    for (let i = 0; i < kelimelervesayisi.length; i++) {
        console.log(kelimelervesayisi[i]);
    }
}
var encokkulllanilanlist = bu_kelimeleri_sayma.split(',');
console.log("Bekleyin tweetler kontrol ediliyor... 1-2dk sürebilir.");
var id = setInterval(() => {
    kelimeleribul();
    if (kontroledildi.length > tweetsayisi) {
        sayilarinibul();
        clearInterval(id);
    } else
        window.scrollBy(0, 1000);

}, 200);