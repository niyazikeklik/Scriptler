function unlike() {
    var elementim = document.querySelectorAll("[data-testid=tweet]");
    for (element of elementim) {
        if (
            element.getElementsByClassName(
                "css-1dbjc4n r-4qtqp9 r-18u37iz r-1wtj0ep r-zl2h9q"
            ).length == 0 &&
            element.querySelectorAll("[data-testid=unlike]").length == 1
        ) {
            var begenisayisi = String(
                element.children[1].children[1].children[2].children[2].innerText
            );
            if (begenisayisi.indexOf("B") == -1 && parseInt(begenisayisi) < 999) {
                element.querySelector("[data-testid=unlike]").click();
                console.log(begenisayisi + " begeni sayılı tweet silindi.");
            }
        }
    }
}

setInterval(() => {
    window.scrollBy(1000, 1000);
    unlike();
}, 250);