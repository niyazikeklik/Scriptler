setInterval(() => {
    document.querySelectorAll('[aria-label="İsteği İptal Et"]').forEach(element => element.click());
    document.querySelector('[aria-label="Gönderilen İstekler"]').children[2].scrollBy(0,1000);
}, 500);


//veya m.facebook için

setInterval(() => {
    document.querySelectorAll('[value="İptal"]').forEach(element => element.click());
    window.scrollBy(0,1000);
}, 500);