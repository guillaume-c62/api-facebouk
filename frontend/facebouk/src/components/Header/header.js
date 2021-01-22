const header = () => {
    var elhome = document.getElementById("btn_home");
    elhome.addEventListener("click", homebtn);

    var eldeco = document.getElementById("btn_deco");
    eldeco.addEventListener("click", decobtn);

    var elprofil = document.getElementById("btn_profil");
    elprofil.addEventListener("click", profilbtn);

    function homebtn() {
        document.location.href = "/HomePage"
    }

    function profilbtn() {
        document.location.href = "/Profil"
    }

    function decobtn() {
        sessionStorage.clear();
        document.location.href = "/"
    }
}

export default header;