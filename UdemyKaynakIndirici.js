var bolumler = document.querySelectorAll('[data-purpose="curriculum-section-container"]')[0].children;
var sayac = 500;
for (let index = 0; index < bolumler.length; index++) {
    const bolum = bolumler[index];
    bolum.children[1].click();
    var dersler = bolum.querySelectorAll('[class="unstyled-list"] > li');
    for (let index2 = 0; index2 < dersler.length; index2++) {
        const ders = dersler[index2];
        var Kaynaks = ders.querySelectorAll('[aria-label="Kaynak listesi"]');
        if (Kaynaks.length >= 1) {
            Kaynaks[0].click();
            var dosyalar = document.querySelectorAll('span[class^="resource"');
            for (let index3 = 0; index3 < dosyalar.length; index3++) {
                const dosya = dosyalar[index3];
                var derstext = ders.innerText;
                derstext = derstext.substring(0, derstext.indexOf('.')).replaceAll("Ders tamamlandı\n", "");
                var bolumtext = bolum.innerText;
                bolumtext = bolumtext.substring(0, bolumtext.indexOf(':'));
                console.log(bolumtext + " - Ders: " + derstext + " Dosya: " + dosya.innerText + " İndirildi");
                setTimeout(dosya.click(), sayac += 500)
            }
        }
    }
    bolum.children[1].click();
}