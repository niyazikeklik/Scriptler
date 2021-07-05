var count = 0;
var eklendi = "";

function cik() {
    console.log(1);
    var elements = document.getElementsByClassName('css-7ea2d1');
    elements.forEach(bakbu => {
        console.log(11);
        var eklenecek = bakbu.innerText.replace('\n', "").replace("/", "");
        if (eklendi.indexOf(eklenecek) == -1) {
            eklendi += "\"" + eklenecek + "\", ";
            count++;
        }
    });


}
var id = setInterval(function() {
    console.log(0);
    cik();
    console.log(2);
    console.clear();
    console.log(eklendi);
    if (count > 75) clearInterval(id);
}, 300);