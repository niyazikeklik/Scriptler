function enabledUnfollow(){
var kontrolEdildi = [];
var count_kontrol_edilen = 0;
var count_takipten_cikilan = 0;

function cik() {
    var elements = document.querySelectorAll('[data-testid=UserCell]');
    elements.forEach(element => {
        var id = element.innerText.split('\n')[1];
        id = id.startsWith('@') ? id : element.innerText.split('\n')[0];
        if (!kontrolEdildi.includes(id)) {
            kontrolEdildi.push(id);
            count_kontrol_edilen++;
            if (!element.innerText.includes("Seni")) {
                element.querySelector(`[aria-label="Takip ediliyor ${id}"]`).click();
                document.querySelectorAll('[data-testid=confirmationSheetConfirm]')[0].click();
                console.log(`Takipten çıkıldı: ${id} - ${element.innerText.split('\n')[0]}|${count_takipten_cikilan}/${count_kontrol_edilen}`);
                count_takipten_cikilan++;
            }

        }
    });
}
//var onceki = 0;
var idintrvl = setInterval(() => {
    cik();
    window.scrollBy(0, 1000);
}, 1500);
}