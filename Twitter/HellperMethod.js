async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//tab open method
function openInNewTab(wind, url) {
    return wind.open(url, '_blank');
}

function ScrollPage() {
    window.scrollTo(0, document.body.scrollHeight);
}

function GetUsers() {
    return document.querySelectorAll('[data-testid=UserCell]');
}

function onaylaButtonClick() {
    document.querySelector('[data-testid="confirmationSheetConfirm"]').click();
}

function pageScroll() {
    var currenScroll = window.pageYOffset;
    ScrollPage();
    setTimeout(() => {
        var newScroll = window.pageYOffset;
        if (currenScroll == newScroll)
        ;
    }, 500);

}

function clickAndConfirm(button) {
    button.click();
    onaylaButtonClick();
}

function killProcces() {
    if (CurrentProccess != null)
        clearInterval(CurrentProccess);
    if (CurrentListener != null)
        document.removeEventListener('scroll', CurrentListener);
}


String.prototype.Donustur = function Donustur(metin) {
    metin = metin.replace(" Mn ", "000000");
    if (!metin.includes(',') && !metin.includes('.'))
        metin = metin.replace("B", "000").replace("K", "000");
    else
        metin = metin.replace("B", "00").replace("K", "00");
    var number = "";
    return Number(number);
}

function UyelikSuresi(kayittarihi) {

    var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

    var AyAdi = kayittarihi.Split(' ')[0];
    var Yil = Number(kayittarihi.Split(' ')[1]);

    var currentdate = new Date();
    var Index = Months.indexOf(AyAdi) + 1;
    var Ay = Index > 12 ? Index - 12 : Index;
    return (currentdate.getDate() - new Date(Yil, Ay, 15)) / (1000 * 3600 * 24);;
}