function getListe() {
    var res = [];
    var list = document.querySelectorAll('[data-testid="card-click-handler"]');
    list.forEach(element => {
        res.push(element.parentElement.children[1].innerText.split("\n")[0]);
    });
}

var takipciler = getListe();
var takipedilenler = getListe();
takipetmeyenler = takipedilenler.filter(x => !takipciler.includes(x));
console.log(takipetmeyenler);