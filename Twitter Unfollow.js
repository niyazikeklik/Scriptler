var list = [];
var count_kontrol_edilen = 0;
var count_takipten_cikilan = 0;

function cik() {
    var element = document.querySelectorAll('[data-testid=UserCell]');
    for (var i = 0; i < element.length; i++) {
        var id = element[i].innerText.split('\n')[1];
        if (id.indexOf('@') == -1) { id = element[i].innerText.split('\n')[0] };
        if (list.indexOf(id) == -1) {
            list.push(id);
            count_kontrol_edilen++;
            if (element[i].innerText.indexOf("Seni takip") == -1) {
                //if (count_takipten_cikilan < 100) { count_takipten_cikilan++; continue; }
                element[i].querySelector('[aria-label="Takip ediliyor ' + id + '"]').click();
                document.querySelectorAll('[data-testid=confirmationSheetConfirm]')[0].click();
                console.log("Takipten çıkıldı: " + id + " - " + element[i].innerText.split('\n')[0] + ' ' + count_takipten_cikilan + "/" + count_kontrol_edilen);
                count_takipten_cikilan++;
            }

        }
    }
}
var onceki = 0;

var idintrvl = setInterval(() => {
    cik();
    window.scrollBy(0, 1000);
    if (window.scrollY == onceki) clearInterval(idintrvl);
    onceki = window.scrollY;
}, 1000);