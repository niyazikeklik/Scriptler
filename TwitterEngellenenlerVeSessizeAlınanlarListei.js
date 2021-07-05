



var ilkonum = 0.0;
var list = [];
var sonrakikonum = 1.01;
var intervalid = setInterval(() => {
  //var elements = document.querySelectorAll('[data-testid = UserCell]'); // engellenecek hesaplar için
  var elements = document.getElementsByClassName(
    "css-1dbjc4n r-1habvwh r-16y2uox r-1wtj0ep r-y3t9qe r-1jucqua r-1nrc83j"
  ); // sessize alınacak kelimeler için
  for (var i = 0; i < elements.length; i++) {
    //  var id =elements[i].children[0].children[1].children[0].children[0].children[0].children[0].children[1].innerText; // engellenecekler
    var id = elements[i].children[0].innerText; // sessize alınacaklar
    if (list.indexOf(id) == -1) {
      list.push(id);
    }
  }
}, 1000);
var intervalid2 = setInterval(() => {
  ilkkonum = window.scrollY;
  window.scrollBy(1000, 1000);
  sonrakikonum = window.scrollY;
  if (ilkonum == sonrakikonum) {
    console.log("Toplam engellenmiş kişi sayısı: " + list.length);
    clearInterval(intervalid);
    clearInterval(intervalid2);
  }
}, 1150);
var cumle = "";
for (var listeleman in list) cumle += list[listeleman] + "-";
console.log(cumle);

var hesaplar =
  "@Nurullh_aktss @antikralice @torpillipstick @newendyy @emirrtimurr @llillmommy @melikerbas_ @yarenergvn @cansusuzluk @konusanlarhasan @kadin_cinayeti @wesligs @madrigalofc @daddyl0ngglegss @taladrovevo @yasirbrk @stelleuna @busrayamnn @toskofacts @xautopsyx_ @regloloji @Enes_Cingoz @ggestordpunk @OwL1804 @melisadoqann @benipellaa @birfrederick @Esnafthefuckkk @mertrobooming @YildizzTilbee @thanksnextbeyb @ozeeronurr @lldylic @vjbulentt @punkbimbo @fzaofficial @astrologelvan @geminedim @lebrizim @dizyella @cycynz1 @sessizsiir63 @emrediyosun @siiristh @Dayi @xikayar @fuckburc @leldamnright @ferhatdemebana @PoyrazKarayeel2 @ononkonser @miyavlatsana @13burctahmin @kullnmyomkanks @kelimeburc @sansursuzprof @YildizTiIbe @furkandurmazw @KuzeyGuney @netameliherr @caglarrcgrr @mupteezel @hasanbasrikck @rakiigunlugu @berkayprofil @BarbieSozler @elyvemavi @aliaktasch @aurasgood @alperk55 @vevoDuman @rasitbostanci @sorunluyumbeybi @Sozyuku @Dolukadehden @iamcardib @Benibrahimmm @kediefy @moodegram @biidurunbeee @zatenyanmisim @nolurbisev @Tugkanderrki @lanbiisus @anlatyawrum @isheniz @Hephaklliyiim @aysenimsi_2 @Sezenimderki @venusmuyumxXx @hictakmiyorum @batuyavuzzz @theilkerjk @beybigunes @dalincaa @theistumblr @grahamlicc @lisanslibuyucu @b4rbiesgun @Suatkkocax @cinkopilsuat @hayvanlardan @minmarpia @cagritaner @wtfderin @senikonusalim @yunusceliik @lutfensakinles @tinercimayki @ftmglgnn @kadrajmagazin @seldaaydnn_ @fatmalakusx @mitokondrivari @avnicnbalta @ozgunhdr @dilaaree @sergulyilmaz @holyemotions @devrimkutluu @SinanKcarslan @VBekdas";
var hesaplarlist = hesaplar.split(" ");
for (i = 0; i < hesaplarlist.length; i++) {
  window.location.href = "https://mobile.twitter.com/" + hesaplarlist[i];
}
document.getElementsByTagName("head")[0].innerHTML += '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">';


