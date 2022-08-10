async function KullaniciBul(user) {
    var user = new User(new GetListeInfos(user).CreateListUser(), new ProfilInfos());
    console.log(user);
    if (win == window)
        win = openInNewTab(window, user.profilURL);
    else
        win.location.href = user.profilURL;
    await sleep(2500);
    user.ProfilInfos = new ProfilInfos(win.document).CreateProfilUser();
    console.log(user);
}

async function initFiltrele() {
    var users = GetUsers();
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        await KullaniciBul(user);
    }
}