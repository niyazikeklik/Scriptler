setInterval(() => {
    var elements = document.querySelectorAll('[aria-label="Menü"]');
    const element = elements[1];
    element.click();
    setTimeout(() => {
        var elems = document.querySelector('[role="menu"]').children[0].children[0].children[0].children[0].children[0].children[0].children;
        for (let index = 0; index < elems.length; index++) {
            const menuItem = elems[index];
            if (menuItem.textContent.includes("Sil")) menuItem.click();
        }
        setTimeout(() => {
            document.querySelector('[aria-label="Sohbeti Sil"]').click();
        }, 150);
    }, 150);
}, 450);