function TamEkran(){
    var element = document.getElementById("deskshare-video");       
    if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
  }
  document.getElementsByClassName('acorn-controls')[0].innerHTML += '<button class="acorn-fullscreen-button" onclick = "TamEkran()">Fullscreen</button>';
  document.getElementById("hd-rightColVideoPage").remove();