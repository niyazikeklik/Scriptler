var kontrolEdildi = [];
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function kontrolEdilecek() {
    var list = document.querySelectorAll('[data-testid=conversation]');
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        var username = element.innerText.split('\n')[1];
        if (!kontrolEdildi.includes(username)) {
            element.click();
            document.querySelector('a[href$="/info"]').click();
            kontrolEdildi.push(username);
            return username;
        }
    }
    window.scrollBy(0, 1000);
    setTimeout(() => {
        return kontrolEdilecek();
    }, 50);
}

function getSohbetSilButon() {
    var listbutons = document.querySelectorAll('[role="button"]');
    for (let index = 0; index < listbutons.length; index++) {
        const element = listbutons[index];
        if(element.innerText.includes("Sohbetten ayrıl")){
            return element;
        }
    }
   
}

function Kontrolet() {
    username = kontrolEdilecek();
    setTimeout(() => {
        if (!document.querySelector('[data-testid=UserCell]').innerText.includes("Takip ediliyor")) {
                var username = document.querySelector('[data-testid=UserCell]').innerText.split("\n")[1];
                getSohbetSilButon().click();
                document.querySelectorAll('[data-testid=confirmationSheetConfirm]')[0].click();
                console.log("Mesajları silindi: " + username);
        } else {
            document.querySelector('[data-testid=app-bar-back]').click();
            document.querySelector('[data-testid=app-bar-back]').click();
        }

    }, 500);
}
function enabledMesajSil() {
    setInterval(() => {
        Kontrolet();
    }, 750);
}
