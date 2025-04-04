async function takip_et() {

    const takipEtButonlari = Array.from(document.querySelectorAll('button'))
        .filter(button => button.innerText.trim().toLowerCase() === 'takip et');

    let tıklamaSayisi = 0;

    if (takipEtButonlari.length === 0) {
        console.log('Takip edilecek kullanıcı bulunamadı.');
        window.scrollBy(0, 7500);
        setTimeout(async () => {
            await takip_et();
        }, 1000);
    }

    console.log(Toplam ${takipEtButonlari.length} "Takip et" butonu bulundu.);

    for (let i = 0; i < takipEtButonlari.length; i++) {
        const button = takipEtButonlari[i];

        button.click();
        tıklamaSayisi++;

        console.log(Tıklama sayısı: ${tıklamaSayisi});

        await new Promise(resolve => setTimeout(resolve, 800));

        // 2000 butona ulaşıldığında sayfayı 1500px kadar kaydır
        if (tıklamaSayisi === takipEtButonlari.length) {
            window.scrollBy(0, 7500);
            console.log('Sayfa kaydırılıyor...');
            setTimeout(async () => {
                await takip_et();
            }, 1000);
        }
    }

    console.log('İşlem tamamlandı.');
}

async function takip_cikar(){
    // 1. İçerisinde "Sizi Takip Ediyor" yazısı geçmeyen <a> elementlerini seç
    const links = document.querySelectorAll('a');
    const filteredLinks = Array.from(links).filter(link =>
        !link.innerHTML.trim().toLowerCase().includes('sizi takip ediyor')
    );

    if(filteredLinks.length === 0) {
        console.log('Takipten çıkacak kullanıcı bulunamadı.');
        window.scrollBy(0, 7500);
        setTimeout(async () => {
            await takip_cikar();
        }, 1000);
    }

    // 2. Bu <a> elementlerinin içindeki butonları ve innerText'i "takip ediliyor" olanları seç
    const buttonsWithText = filteredLinks.map(link => {
        const button = link.querySelector('button');
        if (button && button.trim().toLowerCase().innerText === 'takip ediliyor') {
            return button;
        }
    }).filter(button => button !== undefined);

    let tıklamaSayisi = 0;
    console.log(Toplam ${buttonsWithText.length} "Takip ediliyor" butonu bulundu.);
    for (let i = 0; i < buttonsWithText.length; i++) {
        const button = buttonsWithText[i];

        button.click();
        tıklamaSayisi++;

        console.log(Tıklama sayısı: ${tıklamaSayisi});

        await new Promise(resolve => setTimeout(resolve, 800));

        // 2000 butona ulaşıldığında sayfayı 1500px kadar kaydır
        if (tıklamaSayisi === buttonsWithText.length) {
            window.scrollBy(0, 7500);
            console.log('Sayfa kaydırılıyor...');
            setTimeout(async () => {
                await takip_cikar();
            }, 1000);
        }
    }
}


async function takip_cikar_herkes(){
    // 1. İçerisinde "Sizi Takip Ediyor" yazısı geçmeyen <a> elementlerini seç
    const links = document.querySelectorAll('a');
    const filteredLinks = links;

    if(filteredLinks.length === 0) {
        console.log('Takipten çıkacak kullanıcı bulunamadı.');
        window.scrollBy(0, 7500);
        setTimeout(async () => {
            await takip_cikar_herkes();
        }, 1000);
    }

    // 2. Bu <a> elementlerinin içindeki butonları ve innerText'i "takip ediliyor" olanları seç
    const buttonsWithText = filteredLinks.map(link => {
        const button = link.querySelector('button');
        if (button && button.trim().toLowerCase().innerText === 'takip ediliyor') {
            return button;
        }
    }).filter(button => button !== undefined);

    let tıklamaSayisi = 0;
    console.log(Toplam ${buttonsWithText.length} "Takip ediliyor" butonu bulundu.);
    for (let i = 0; i < buttonsWithText.length; i++) {
        const button = buttonsWithText[i];

        button.click();
        tıklamaSayisi++;

        console.log(Tıklama sayısı: ${tıklamaSayisi});

        await new Promise(resolve => setTimeout(resolve, 800));

        // 2000 butona ulaşıldığında sayfayı 1500px kadar kaydır
        if (tıklamaSayisi === buttonsWithText.length) {
            window.scrollBy(0, 7500);
            console.log('Sayfa kaydırılıyor...');
            setTimeout(async () => {
                await takip_cikar_herkes();
            }, 1000);
        }
    }
}
