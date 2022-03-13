var kontrolEdildi = [];
listBeklemeSuresi = [5000, 6000, 7000, 8000, 9000, 10000];
var sayac = 0;

function TakiptenCik(element) {
    try {
        var id = element.innerText.split('\n')[1];
        id = id.startsWith('@') ? id : element.innerText.split('\n')[0];
        console.log(`${sayac}) Takipten çıkıldı: ${element.innerText.split('\n')[0]} | ${id}`);
        element.querySelector(`[data-testid$="unfollow"]`).click();
        document.querySelectorAll('[data-testid=confirmationSheetConfirm]')[0].click();
        kontrolEdildi.push(id);
    } catch (error) {;
    }
}

function getTakiptenCikilacaklar() {
    var elements = document.querySelectorAll('[data-testid=UserCell]');
    var TakipEdilenlist = [];
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        var id = element.innerText.split('\n')[1];
        id = id.startsWith('@') ? id : element.innerText.split('\n')[0];
        if (element.querySelectorAll("[data-testid$=unfollow]").length > 0 && !element.innerText.includes("Seni") && !kontrolEdildi.includes(id)) {
            TakipEdilenlist.push(element);
        }
    }
    return TakipEdilenlist;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function Basla(elements, beklesinMi) {
    listRandomSay = [];
    for (let index = 0; index < elements.length;) {
        const randomsay = Math.floor(Math.random() * elements.length);
        if (!listRandomSay.includes(randomsay)) {
            listRandomSay.push(randomsay);
            const element = elements[randomsay];
            TakiptenCik(element);
            if (beklesinMi) {
                await sleep(listBeklemeSuresi[Math.floor(Math.random() * listBeklemeSuresi.length)]);
            }
            index++;
        }
    }
    window.scrollBy(0, 2000);
    setTimeout(() => {
        Basla(getTakiptenCikilacaklar(), beklesinMi);
    }, 500);


}

function enabledAkilliUnfollow(beklesinMi = true) {
    sayac = 0;
    Basla(getTakiptenCikilacaklar(), beklesinMi);
}