var kapsayicilar = document.getElementsByClassName('full-row-thumbs');
for (let index = 0; index < kapsayicilar.length; index++) {
    const element = kapsayicilar[index];
    element.style.cssText += "grid-template-columns: repeat(2,1fr);"
}
document.getElementById("videoCategory").style.cssText += "grid-template-columns: repeat(2,1fr);";
var kapsayicilarCatehory = document.getElementById("videoCategory").getElementsByClassName("videoBox");
for (let index = 0; index < kapsayicilarCatehory.length; index++) {
    const element = kapsayicilarCatehory[index];
    element.style.cssText += "max-width: 1350px;"
}

