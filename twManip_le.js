function enableManip() {
    var isimler = getisimler();
    isimler = isimler.toLowerCase();

    function cevir(pixel) {
        var pixelyuzde = pixel * 0.72;
        var list = document.querySelectorAll('[data-testid=UserCell]');
        list.forEach(element => {
            element.style.height = "400px";

            element.getElementsByTagName('a')[0].style.width = pixel + "px";
            element.getElementsByTagName('a')[0].style.height = pixel + "px";
            element.getElementsByTagName('a')[0].style.position = "fixed"
            var img = element.getElementsByTagName("img")[0].parentElement.children[0];
            img.style.backgroundImage = img.style.backgroundImage.replace("x96", "400x400").replace("bigger", "400x400");
            element.children[0].children[1].style = " margin-left:" + pixelyuzde + "px";
        });
    }


    function boya() {
        var users = document.querySelectorAll('[data-testid=UserCell]');
        users.forEach(element => {
            if (element.innerHTML.indexOf("default_profile") > -1)  element.remove(); 
            else {
                var kullaniciad = element.innerText.split('\n')[0].split(' ')[0].toLowerCase();
                if (isimler.indexOf(kullaniciad + "', 'e'") > -1)
                    element.remove();
                // else if (isimler.indexOf(kullaniciad + "', 'k'") > -1)
                //     element.remove();
                // else if (isimler.indexOf(kullaniciad + "', 'u'") > -1)
                //     element.remove();
                // else
                //     element.remove();
            }
        });
    }

    document.addEventListener('scroll', function () {
        boya();
        cevir(400);
    });
}