var kontrolEdildi = [];

function searchElement(un) {
    for (const element of kontrolEdildi) {
        if (element[0] == un) {
            return element[1];
        }
    }
    return null;
}

function getElementByText(searchText, elementname, doc) {
    var aTags = doc.getElementsByTagName(elementname);
    var found;
    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].innerHTML.endsWith(searchText)) {
            found = aTags[i];
            break;
        }
    }
    return found;
}
doc = window;
class Sleeper {
    constructor(ms = 50) {
        this.ms = ms;
    }

    async sleep() {
        return new Promise(resolve => setTimeout(resolve, this.ms));
    }
    IsSayfaLoading(doc) {
        if (doc == null) doc = window;
        try {
            return doc.document.querySelectorAll('[role="progressbar"]').length > 0 || doc.document.querySelectorAll('[aria-label="Loading…"]').length > 0;
        } catch (e) {
            try {
                return doc.querySelectorAll('[role="progressbar"]').length > 0 || doc.querySelectorAll('[aria-label="Loading…"]').length > 0;;
            } catch (error) {
                console.log("hata: " + error);
                console.log(doc);
            }

        }

    }
    async WaitForLoading(doc) {
        await this.sleep(50);
        if (this.IsSayfaLoading(doc))
            return await this.WaitForLoading(doc);
        else
            return;
    }
}


//tab open method
function openInNewTab(wind, url) {
    return wind.open(url, '_blank', "height=550,width=450");
}

function ScrollPage() {
    window.scrollTo(0, document.body.scrollHeight);
}

function GetUsers() {
    return document.querySelectorAll('[data-testid=UserCell]');
}

function onaylaButtonClick() {
    document.querySelector('[data-testid="confirmationSheetConfirm"]').click();
}

async function pageScroll() {
    var currenScroll = window.pageYOffset;
    ScrollPage();
    await new Sleeper(500).sleep();
    var newScroll = window.pageYOffset;
    if (currenScroll == newScroll)
        return false;
    return true;
}

function clickAndConfirm(button) {
    button.click();
    onaylaButtonClick();
}

function killProcces() {
    if (CurrentProccess != null)
        clearInterval(CurrentProccess);
    if (CurrentListener != null)
        document.removeEventListener('scroll', CurrentListener);
}

function Donustur(metin) {
    metin = metin.replace(" Beğeniler", "");
    metin = metin.replace(" Beğeni", "");
    metin = metin.replace(" Tweetler", "");
    metin = metin.replace(" Tweet", "");
    var re = new RegExp(String.fromCharCode(160), "g");
    metin = metin.replace(re, "");
    metin = String(metin).replaceAll("Mn", "000000");
    if (!metin.includes(',') && !metin.includes('.'))
        metin = metin.replaceAll("B", "000").replaceAll("K", "000");
    else
        metin = metin.replaceAll("B", "00").replaceAll("K", "00");
    metin = metin.replace(",", "");

    return Number(metin);
}

function UyelikSuresi(kayittarihi) {
    var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

    var AyAdi = kayittarihi.split(' ')[0];
    var Index = Months.indexOf(AyAdi);
    var Yil = Number(kayittarihi.split(' ')[1]);
    var secondDate = new Date();
    var Ay = Index >= 12 ? Index - 12 : Index;
    var firstDate = new Date(Yil, Ay, 15);
    var fark = Math.round(Math.abs((firstDate - secondDate) / (24 * 60 * 60 * 1000)));
    return (fark);
}
//#endregion
//#region Entitys
class ListeUser {
    constructor(name, userName, isFollowers, followStatus, bio, button, gender, profilURL, FotoURL) {
        this.name = name;
        this.userName = userName;
        this.isFollowers = isFollowers;
        this.followStatus = followStatus;
        this.bio = bio;
        this.button = button;
        this.gender = gender;
        this.profilURL = profilURL;
        this.FotoURL = FotoURL;
    }
}
class ProfilUser {
    constructor(takipSayisi, userName, takipciSayisi, tweetSayisi, konum, katilmaTarihi, webSite, sonTweetler, sonBegenilenler, begeniSayisi) {
        this.userName = userName;
        this.takipSayisi = takipSayisi;
        this.takipciSayisi = takipciSayisi;
        this.begeniSayisi = begeniSayisi;
        this.tweetSayisi = tweetSayisi;
        this.konum = konum;
        this.katilmaTarihi = katilmaTarihi;
        this.webSite = webSite;
        this.sonTweetler = sonTweetler;
        this.sonBegenilenler = sonBegenilenler;
    }
}
class User {
    constructor(un, ListeUser, ProfilUser, IstatıcInfo) {
        this.UserName = un;
        this.ListeUser = ListeUser;
        this.ProfilUser = ProfilUser;
        this.IstatıcInfo = IstatıcInfo;
    }
}
class Tweet {
    constructor(isSabit, tweet, tweetURL, tweetDate, tweetUser, isRT, rtCount, begeniCount, yorumCount) {
        this.isSabit = isSabit;
        this.tweet = tweet;
        this.tweetURL = tweetURL;
        this.tweetDate = tweetDate;
        this.tweetUser = tweetUser;
        this.isRT = isRT;
        this.rtCount = rtCount;
        this.begeniCount = begeniCount;
        this.yorumCount = yorumCount;
    }
}
class IstatıcInfo {
    constructor(sonTweetTarihi, sonTweetlerinOrtTarihi, gunlukTweetSayisi, sonBegeniTarihi, sonBegenilerinOrtTarihi, gunlukBegeniSayisi, retweetOrani) {
        this.sonTweetTarihi = sonTweetTarihi;
        this.sonTweetlerinOrtTarihi = sonTweetlerinOrtTarihi;
        this.gunlukTweetSayisi = gunlukTweetSayisi;
        this.sonBegeniTarihi = sonBegeniTarihi;
        this.sonBegenilerinOrtTarihi = sonBegenilerinOrtTarihi;
        this.gunlukBegeniSayisi = gunlukBegeniSayisi;
        this.retweetOrani = retweetOrani;
    }
}
//#endregion

//#region Dtolar
class ProfilInfos {
    constructor(user) {
        this.win = user;
        this.DomUpdate();
    }
    async DomUpdate() {
        await new Sleeper(150).WaitForLoading(this.win.document);
        this.user = this.win.document.querySelector('[data-testid="primaryColumn"]');
    }

    //data-testid=UserName
    GetUserName() {
        return this.user.querySelector('[data-testid="UserName"]').innerText.split("\n")[1];
    }

    async GetTakipSayisi() {
        await new Sleeper(150).WaitForLoading(this.win.document);
        this.DomUpdate();
        this.userName = this.GetUserName();
        return Donustur(this.user.querySelector("a[href$=following] > span").innerText);
    }
    GetTakipcilerSayisi() {
        return Donustur(this.user.querySelector("a[href$=followers] > span").innerText);
    }
    async GetBegenilerSayisi() {
        return await this.GetTweetSayisi();
    }
    async GetTweetSayisi() {
        await this.DomUpdate();
        var text = this.user.innerText.split('\n')[1];
        text = String(text)
            .replace(" Tweetler", "")
            .replace(" Tweet", "")
            .replace(" Beğeniler", "")
            .replace(" Beğeni", "");;
        return Donustur(text);
    }
    GetKonum() {
        return this.user.querySelector('[data-testid="UserLocation"]') ? .innerText;
    }
    GetKatilmaTarihi() {
        return UyelikSuresi(this.user.querySelector('[data-testid="UserJoinDate"]').innerText);
    }
    GetWebSite() {
        return this.user.querySelector('[data-testid="UserUrl"]') ? .innerText;
    }
    async GetSonTweetler() {
        await new Sleeper(350).sleep();
        await new Sleeper().WaitForLoading(this.win.document);
        await this.DomUpdate();
        var list = this.user.querySelectorAll('[data-testid="tweet"]');
        var listTweet = [];
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            var tweet2 = await new TweetInfos(element, this.userName).CreateTweet();
            listTweet.push(tweet2);
        }
        return listTweet;
    }
    async GetSonBegenilenler() {
        if (this.OnClickBegeniSekmesi()) {
            return await this.GetSonTweetler();
        }


    }
    GetIsPrivate() {
        return this.user.querySelectorAll('[aria-label=\"Korumalı hesap\"]').length > 0;
    }
    OnClickBegeniSekmesi() {
        this.user.querySelector('[href$="likes"]').click();
        return true;
    }
    async CreateProfilUser() {
        return new ProfilUser(
            await this.GetTakipSayisi(),
            this.GetUserName(),
            this.GetTakipcilerSayisi(),
            await this.GetTweetSayisi(),
            this.GetKonum(),
            this.GetKatilmaTarihi(),
            this.GetWebSite(),
            await this.GetSonTweetler(),
            await this.GetSonBegenilenler(),
            await this.GetBegenilerSayisi()
        );
    }


}
class ListeInfos {
    constructor(user) {
        this.user = user;
    }

    GetProfilURL() {
        return this.user.querySelector('a').href;
    }

    GetUserButton() {
        return this.user.querySelector('[role="button"]');
    }

    GetUserName() {
        return this.user.innerText.split('\n')[1];
    }

    GetName() {
        return this.user.innerText.split('\n')[0];
    }

    IsFollowersString() {
        return this.user.innerText.includes('Seni');
    }

    IsFollowers() {
        return this.user.querySelectorAll('[data-testid="userFollowIndicator"]').length > 0 ? true : IsFollowersString(this.user);;
    }

    GetTakipCikButton() {
        var list = this.user.querySelectorAll('[data-testid$="unfollow"]');
        return list.length > 0 ? list[0] : null;
    }

    GetİstekSilButton() {
        var list = this.user.querySelectorAll('[data-testid$="cancel"]');
        return list.length > 0 ? list[0] : null;
    }
    GetFotoURL() {
        return this.user.querySelector('img').src;
    }
    GetBio() {
        // return this.user.querySelector('[data-testid=userBio]').innerText;
        return "";
    }


    CreateListUser() {
        return new ListeUser(
            this.GetName(),
            this.GetUserName(),
            this.IsFollowers(),
            this.GetUserButton().innerText,
            this.GetBio(),
            this.GetUserButton(),
            "Kadın",
            this.GetProfilURL(),
            this.GetFotoURL()
        );

    }
}
class TweetInfos {
    constructor(tweet, un) {
        this.tweet = tweet;
        this.un = un;
    }
    async IsSabit() {
        return await this.tweet.innerText.includes("Sabitlenmiş Tweet");
    }
    async GetTweet() {
        return await this.tweet.querySelector('[data-testid="tweetText"]') ? .innerText;
    }
    async GetTweetURL() {
        return await this.tweet.querySelector('a[href*=status]').href;
    }
    async GetTweetDate() {
        return await Number(new Date() - new Date(this.tweet.querySelector('time').dateTime)) / (3600000 * 24);
    }
    async GetTweetUser() {
        return await this.tweet.querySelector('[data-testid="User-Names"]').innerText.split('\n')[1];
    }
    async IsRT() {
        return await this.GetTweetUser() != this.un;
    }
    async CreateTweet() {
        return new Tweet(
            await this.IsSabit(),
            await this.GetTweet(),
            await this.GetTweetURL(),
            await this.GetTweetDate(),
            await this.GetTweetUser(),
            await this.IsRT(),
            1, 1, 1
        );
    }

}
class IstaticInfos {
    constructor(liste, profil) {
        this.liste = liste;
        this.profil = profil;

    }
    GetSonTweetTarihi(list = this.profil.sonTweetler, sorgusuz = false) {
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (!element.isSabit && (element.tweetUser == this.liste.userName || sorgusuz))
                return element.tweetDate;
        }
    }
    GetSonTweetlerinOrtTarihi(sonTweetler = this.profil.sonTweetler, sorgusuz = false) {
        var toplam = 0;
        var count = 0;
        for (let index = 0; index < sonTweetler.length; index++) {
            const element = sonTweetler[index];
            var tarih = element.tweetDate;
            if (!element.isSabit && (element.tweetUser == this.liste.userName || sorgusuz)) {
                toplam += tarih;
                count++;
            }
        }
        return toplam / count;
    }
    GetGunlukTweetSayisi(sayi = this.profil.tweetSayisi) {
        var tweetSayi = sayi;
        var katilmaTarihi = this.profil.katilmaTarihi;
        return tweetSayi / (katilmaTarihi);
    }
    GetSonBegeniTarihi() {
        return this.GetSonTweetTarihi(this.profil.sonBegenilenler, true);
    }
    GetSonBegenilerinOrtTarihi() {
        return this.GetSonTweetlerinOrtTarihi(this.profil.sonBegenilenler, true);
    }
    GetGunlukBegeniSayisi() {
        return this.GetGunlukTweetSayisi(this.profil.begeniSayisi);
    }
    GetRetweetOrani() {
        var list = this.profil.sonTweetler;
        var retweetSayi = 0;
        for (let index = 0; index < list.length; index++) {
            const element = list[index].isRT;
            if (element)
                retweetSayi++;
        }
        return retweetSayi / list.length;
    }
    CreateIstaticInfo() {
        return new IstatıcInfo(
            this.GetSonTweetTarihi(),
            this.GetSonTweetlerinOrtTarihi(),
            this.GetGunlukTweetSayisi(),
            this.GetSonBegeniTarihi(),
            this.GetSonBegenilerinOrtTarihi(),
            this.GetGunlukBegeniSayisi(),
            this.GetRetweetOrani()
        );
    }
}
class UserInfo {
    constructor(un, liste, profil, istatik) {
        this.UserName = un;
        this.liste = liste;
        this.profil = profil;
        this.istatik = istatik;
    }
}
async function init() {
    var users = GetUsers();
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        if (user == null) continue;
        if (user.getElementsByClassName("ozelBut").length > 0) continue;
        var button = document.createElement("button");
        button.innerText = "Getir";
        button.classList.add("ozelBut");
        await button.addEventListener('click', async function() {
            await GetUserruser(user);
        });
        user.appendChild(button)
    }
}
async function GetUserruser(user) {
    var liste = new ListeInfos(user).CreateListUser();
    var user2 = searchElement(liste.userName);
    if (user2 == null) {
        if (doc == window) {
            doc = openInNewTab(window, liste.profilURL);
            await new Sleeper(1500).sleep();
        } else
            doc.location.href = liste.profilURL;

        await new Sleeper(150).WaitForLoading(doc);
        try {
            var profil = await new ProfilInfos(doc).CreateProfilUser();
            var istatik = new IstaticInfos(liste, profil).CreateIstaticInfo();
            user2 = new UserInfo(liste.userName, liste, profil, istatik);
            kontrolEdildi.push([profil.userName, user2]);
        } catch (error) {
            console.log("HATA!!: " + error);
        }
    }
    new TableCreator().CreateTablo(user, user2);
}
class TableCreator {

    constructor() {
        this.table = document.createElement("table");
        // this.sutunSatiri = document.createElement("tr");
        // this.table.appendChild(this.sutunSatiri);
        this.table.classList.add("ozelTav");
        this.table.style.border = "1px solid black";
        this.table.style.borderCollapse = "collapse";
        this.table.style.textAlign = "left";
    }
    sutunEkle(name) {
        var sutun = document.createElement("th");
        sutun.innerText = name;
        this.sutunSatiri.appendChild(sutun);
    }
    satirEkle(baslikk, value) {
        var satir = document.createElement("tr");
        satir.style.border = "1px solid black";
        var baslik = document.createElement("th");
        baslik.innerText = baslikk;
        var deger = document.createElement("td");
        deger.innerText = value;
        satir.appendChild(baslik);
        satir.appendChild(deger);
        this.table.appendChild(satir);
    }
    CreateTablo(element, user2) {
        var tables = element.getElementsByClassName("ozelTav");
        if (tables.length > 0) tables[0].remove();
        this.satirEkle("Konum:", user2 ? .profil ? .konum);
        this.satirEkle("Katılma Tarihi: " + user2 ? .profil.katilmaTarihi)
        this.satirEkle("Takipci:", user2 ? .profil ? .takipciSayisi);
        this.satirEkle("Takip:", user2 ? .profil ? .takipSayisi);
        this.satirEkle("Tweet:", user2 ? .profil ? .tweetSayisi);
        this.satirEkle("Beğeni:", user2 ? .profil ? .begeniSayisi);
        this.satirEkle("Günlük Tweet:", user2 ? .istatik ? .gunlukTweetSayisi);
        this.satirEkle("Son Tweetlerin Ort. Tarihi:", user2 ? .istatik ? .sonTweetlerinOrtTarihi);
        this.satirEkle("Son tweet:", user2 ? .istatik ? .sonTweetTarihi);
        this.satirEkle("Günlük Beğeni:", user2 ? .istatik ? .gunlukBegeniSayisi);
        this.satirEkle("Son Beğenilerin Ort. Tarihi:", user2 ? .istatik ? .sonBegenilerinOrtTarihi);
        this.satirEkle("Son Beğeni:", user2 ? .istatik ? .sonBegeniTarihi);
        this.satirEkle("RT Oranı:", user2 ? .istatik ? .retweetOrani);
        this.satirEkle("URL:", user2 ? .istatik ? .webSite);
        element.appendChild(this.table);
    }
}


document.addEventListener("scroll", () => { init(); });