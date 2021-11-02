let isModalOn = false;

function modalOn() {
    isModalOn = true;
    $(".app-download").css({
        "display": "none"
    });
    $(".modal").css({
        "display": "block"
    });
    $(".bg_shadow").css({
        "display": "block"
    });
}

function modalOff() {
    isModalOn = false;
    $(".app-download").css({
        "display": "block"
    });
    $(".modal").css({
        "display": "none"
    });
    $(".bg_shadow").css({
        "display": "none"
    });
}


document.querySelector(".app-download img").addEventListener("click", modalOn);
document.querySelector(".pc-modal-close").addEventListener("click", modalOff);
document.querySelector(".bg_shadow").addEventListener("click", modalOff);


document.querySelector(".hamburger").addEventListener("click", function (e) {
    if (document.querySelector(".hamburgerMenu").classList.contains("on")) {
        //메뉴 slideOut
        document.querySelector(".hamburgerMenu").classList.remove("on");
        //slideOut시 menuBtn의 img src를 menu icon으로 변경
        document.getElementById("burgerIcon").src = "img/hamburger.png";
    }
    else {
        //메뉴 slideIn
        document.querySelector(".hamburgerMenu").classList.add("on");
        //slideIn시 menuBtn의 img src를 cross icon으로 변경
        document.getElementById("burgerIcon").src = "img/close.png";
    }
});
