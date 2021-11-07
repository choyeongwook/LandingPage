let isModalOn = false;

function modalOn() {
    document.querySelector(".modal").classList.add("on");
    document.querySelector(".app-download").classList.add("off");

    $(".modal_bg_shadow").css({
        "display": "block"
    });
}

function modalOff() {
    document.querySelector(".modal").classList.remove("on");
    document.querySelector(".app-download").classList.remove("off");

    $(".modal_bg_shadow").css({
        "display": "none"
    });
}



function hamburgerOnOff() {
    if (document.querySelector(".hamburgerMenu").classList.contains("on")) {
        //메뉴 slideOut
        document.querySelector(".hamburgerMenu").classList.remove("on");
        //slideOut시 menuBtn의 img src를 menu icon으로 변경
        document.getElementById("burgerIcon").src = "img/hamburger.png";
        $(".hamburger_bg_shadow").css({
            "display": "none"
        });
    }
    else {
        //메뉴 slideIn
        document.querySelector(".hamburgerMenu").classList.add("on");
        //slideIn시 menuBtn의 img src를 cross icon으로 변경
        document.getElementById("burgerIcon").src = "img/close.png";
        $(".hamburger_bg_shadow").css({
            "display": "block"
        });
    }
}




document.querySelector(".app-download img").addEventListener("click", modalOn);
document.querySelector(".pc-modal-close").addEventListener("click", modalOff);
document.querySelector(".modal_bg_shadow").addEventListener("click", modalOff);

document.querySelector("#burgerIcon").addEventListener("click", hamburgerOnOff);
document.querySelector(".hamburger_bg_shadow").addEventListener("click", hamburgerOnOff);


