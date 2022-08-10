function Unfollow(user) {
    button = GetTakipCikButton(user);
    if (button == null) button = GetİstekSilButton(user);
    if (button != null && !IsFollowers(user)) {
        clickButton(button);
        var log = "Takip Çıkıldı: " + GetName(user) + " (" + GetUserName(user) + ")";
        console.log(log);
    }
}


function initTakiptenCik() {
    CurrentProccess = setInterval(
        function() {
            var users = GetUsers();
            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                Unfollow(user);
            }
            pageScroll();
        }, 1000);
}