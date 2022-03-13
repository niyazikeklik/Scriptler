winlist = [];

var bootstrap = document.createElement('link');
bootstrap.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");
bootstrap.setAttribute("rel", "stylesheet");
bootstrap.setAttribute("integrity", "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3");
bootstrap.setAttribute("crossorigin", "anonymous");
document.head.appendChild(bootstrap);


function Kapat() {
    for (let index = 0; index < winlist.length; index++) {
        const element = winlist[index];
        element.close();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function WaitForProfilBilgileriLoad(win) {
    while (!win.document.querySelectorAll('[href$=followers]').length > 0) {
        await sleep(100);
    }
}

class User {
    constructor(CountTakipEdiken, CountTakipci, CountTweetSayisi, KatilimTarihi, Konum) {
        this.CountTakipEdiken = CountTakipEdiken;
        this.CountTakipci = CountTakipci;
        this.CountTweetSayisi = CountTweetSayisi;
        this.KatilimTarihi = KatilimTarihi;
        this.Konum = Konum;
    }
}


function getTakipEdilen(win) {
    return win.document.querySelector('[href$=following]').children[0].innerText;
}

function getTakipci(win) {
    return win.document.querySelector('[href$=followers]').children[0].innerText;
}

function getTweetSayisi(win) {
    return win.document.querySelector('[data-testid=primaryColumn]').innerText.split('\n')[1].replace(" Tweet", "");
}

function getKatilimTarihi(win) {
    var x = win.document.querySelector('[data-testid="UserProfileHeader_Items"]').children;
    return x[x.length - 1].innerText.replace(" tarihinde katıldı", "");
}

function getKonum(win) {
    var loc = win.document.querySelectorAll('[data-testid=UserLocation]');
    if (loc.length > 0) {
        return loc[0].innerText;
    } else return "Yok";
}

function GetProfil(win) {
    const takipedilen = getTakipEdilen(win);
    const takipci = getTakipci(win);
    const konum = getKonum(win);
    const tweetsayisi = getTweetSayisi(win);
    const tarih = getKatilimTarihi(win);

    var user = new User(takipedilen, takipci, tweetsayisi, tarih, konum);
    console.log(user);
    return user;

}



async function ProfileGit(username, element) {
    const url = "https://twitter.com/" + username;
    var win = window.open(url);
    window.focus();
    winlist.push(win);
    await WaitForProfilBilgileriLoad(win);
    try {
        var x = GetProfil(win);
        Isle(x, element);
    } catch (error) {
        console.log(error);
    } finally {
        win.close();
    }

}

function CreateButton(name, value) {
    let sutun = document.createElement("div");
    sutun.className = "css-1dbjc4n r-1mf7evn";
    var a = document.createElement("a");
    a.className = "css-4rbku5 css-18t94o4 css-901oao r-18jsvk2 r-1loqt21 r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0";

    var span1 = document.createElement("span");
    span1.className = "css-901oao css-16my406 r-18jsvk2 r-poiln3 r-b88u0q r-bcqeeo r-qvutc0";
    var spanchild1 = document.createElement("span");
    spanchild1.className = "css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0";
    spanchild1.innerText = value;

    var span2 = document.createElement("span");
    span2.className = "css-901oao css-16my406 r-14j79pv r-poiln3 r-bcqeeo r-qvutc0";
    var spanchild2 = document.createElement("span");
    spanchild2.className = "css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0";
    spanchild2.innerText = name;

    span1.appendChild(spanchild1);
    span2.appendChild(spanchild2);
    a.appendChild(span1);
    a.appendChild(span2);
    sutun.appendChild(a);
    return sutun;

}

function Isle(user, element) {

    let a = document.createElement("div");
    a.appendChild(CreateButton(" Takipçi", user.CountTakipci));
    a.appendChild(CreateButton(" Takip Edilen", user.CountTakipEdiken));
    a.appendChild(CreateButton(" Tweet Sayısı", user.CountTweetSayisi));
    a.appendChild(CreateButton(" Konum", user.Konum));
    element.appendChild(a);
}

async function dene() {
    var list = document.querySelectorAll('[data-testid=UserCell]');
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        const username = element.innerText.split('\n')[1];
        if (index % 5 == 0)
            await ProfileGit(username, element);
        else
            ProfileGit(username, element);
    }
}