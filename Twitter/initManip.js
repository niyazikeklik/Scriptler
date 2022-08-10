function initManip(k = true, e = false, u = false, b = false, pixell = 400) {

    function ResimBuyut(pixel, user) {
        var pixelyuzde = pixel * 0.72;
        user.style.height = "400px";
        var tag = user.getElementsByTagName('a')[0];
        tag.style.width = pixel + "px";
        tag.style.height = pixel + "px";
        tag.style.position = "fixed"
        var img = user.getElementsByTagName("img")[0].parentElement.children[0];
        img.style.backgroundImage = img.style.backgroundImage.replace("x96", "400x400").replace("bigger", "400x400");
        user.children[0].children[1].style = " margin-left:" + pixelyuzde + "px";
    }

    function Filtlere() {
        var users = GetUsers();
        users.forEach(user => {
            if (user.innerHTML.indexOf("default_profile") > -1)
                user.remove();
            else {
                var name = GetName(user).split(' ')[0].toLowerCase();
                if (!e && isimler.indexOf(name + "', 'e'") > -1)
                    user.remove();
                else if (!k && isimler.indexOf(name + "', 'k'") > -1)
                    user.remove();
                else if (!u && isimler.indexOf(name + "', 'u'") > -1)
                    user.remove();
                else if (!b && isimler.indexOf(name + "', 'b'") > -1)
                    user.remove();
                else {
                    ResimBuyut(pixell, user);
                }
            }
        });
    }

    var isimler = getisimler();
    isimler = isimler.toLowerCase();
    CurrentListener = document.addEventListener('scroll', Filtlere);
}