


function go() {
    if(document.getElementById('pwd').value == 1209) {
        $(".loading").fadeOut();
    }

    var pips = $(".pg-pips").children().children();
    $(pips.eq(0)).hover(function() {
        document.querySelector("#product").style.visibility = "visible";
    },function() {
        document.querySelector("#product").style.visibility = "hidden";
    });
    $(pips.eq(1)).hover(function() {
        document.querySelector("#function").style.visibility = "visible";
    },function() {
        document.querySelector("#function").style.visibility = "hidden";
    });
    $(pips.eq(2)).hover(function() {
        document.querySelector("#app").style.visibility = "visible";
    },function() {
        document.querySelector("#app").style.visibility = "hidden";
    });
    $(pips.eq(3)).hover(function() {
        document.querySelector("#contents").style.visibility = "visible";
    },function() {
        document.querySelector("#contents").style.visibility = "hidden";
    });
    $(pips.eq(4)).hover(function() {
        document.querySelector("#information").style.visibility = "visible";
    },function() {
        document.querySelector("#information").style.visibility = "hidden";
    });
    /*
    if(location.hash == "" || location.hash == "#page-1") {
        show_nav(1);

        $(pips.eq(1)).hover(function() {
            document.querySelector("#function").style.visibility = "visible";
        },function() {
            document.querySelector("#function").style.visibility = "hidden";
        });
        $(pips.eq(2)).hover(function() {
            document.querySelector("#app").style.visibility = "visible";
        },function() {
            document.querySelector("#app").style.visibility = "hidden";
        });
        $(pips.eq(3)).hover(function() {
            document.querySelector("#contents").style.visibility = "visible";
        },function() {
            document.querySelector("#contents").style.visibility = "hidden";
        });
        $(pips.eq(4)).hover(function() {
            document.querySelector("#information").style.visibility = "visible";
        },function() {
            document.querySelector("#information").style.visibility = "hidden";
        });
    }
    else if (location.hash == "#page-2") {
        show_nav(2);

        $(pips.eq(0)).hover(function() {
            document.querySelector("#product").style.visibility = "visible";
        },function() {
            document.querySelector("#product").style.visibility = "hidden";
        });
        $(pips.eq(2)).hover(function() {
            document.querySelector("#app").style.visibility = "visible";
        },function() {
            document.querySelector("#app").style.visibility = "hidden";
        });
        $(pips.eq(3)).hover(function() {
            document.querySelector("#contents").style.visibility = "visible";
        },function() {
            document.querySelector("#contents").style.visibility = "hidden";
        });
        $(pips.eq(4)).hover(function() {
            document.querySelector("#information").style.visibility = "visible";
        },function() {
            document.querySelector("#information").style.visibility = "hidden";
        });
    }
    else if (location.hash == "#page-3") {
        show_nav(3);

        $(pips.eq(0)).hover(function() {
            document.querySelector("#product").style.visibility = "visible";
        },function() {
            document.querySelector("#product").style.visibility = "hidden";
        });
        $(pips.eq(1)).hover(function() {
            document.querySelector("#function").style.visibility = "visible";
        },function() {
            document.querySelector("#function").style.visibility = "hidden";
        });
        $(pips.eq(3)).hover(function() {
            document.querySelector("#contents").style.visibility = "visible";
        },function() {
            document.querySelector("#contents").style.visibility = "hidden";
        });
        $(pips.eq(4)).hover(function() {
            document.querySelector("#information").style.visibility = "visible";
        },function() {
            document.querySelector("#information").style.visibility = "hidden";
        });
    }
    else if (location.hash == "#page-4") {
        show_nav(4);

        $(pips.eq(0)).hover(function() {
            document.querySelector("#product").style.visibility = "visible";
        },function() {
            document.querySelector("#product").style.visibility = "hidden";
        });
        $(pips.eq(1)).hover(function() {
            document.querySelector("#function").style.visibility = "visible";
        },function() {
            document.querySelector("#function").style.visibility = "hidden";
        });
        $(pips.eq(2)).hover(function() {
            document.querySelector("#app").style.visibility = "visible";
        },function() {
            document.querySelector("#app").style.visibility = "hidden";
        });
        $(pips.eq(4)).hover(function() {
            document.querySelector("#information").style.visibility = "visible";
        },function() {
            document.querySelector("#information").style.visibility = "hidden";
        });
    }
    else if (location.hash == "#page-5") {
        show_nav(5);

        $(pips.eq(0)).hover(function() {
            document.querySelector("#product").style.visibility = "visible";
        },function() {
            document.querySelector("#product").style.visibility = "hidden";
        });
        $(pips.eq(1)).hover(function() {
            document.querySelector("#function").style.visibility = "visible";
        },function() {
            document.querySelector("#function").style.visibility = "hidden";
        });
        $(pips.eq(2)).hover(function() {
            document.querySelector("#app").style.visibility = "visible";
        },function() {
            document.querySelector("#app").style.visibility = "hidden";
        });
        $(pips.eq(3)).hover(function() {
            document.querySelector("#contents").style.visibility = "visible";
        },function() {
            document.querySelector("#contents").style.visibility = "hidden";
        });
    }
    */
    
    
}

//언어 설정
function set_language(e) {

    if(e[e.selectedIndex].value == "en") {
        console.log(e[e.selectedIndex].value + " page open");
        //window.location.href "index-en.html";
    }
    else if(e[e.selectedIndex].value == "ko") {
        console.log(e[e.selectedIndex].value + " 페이지 오픈");
        //window.location.href = "index.html";
    }
    else {
        return;
    }
}

//채널톡 켜지는 이벤트
//document.querySelector(".dhMiir").click();

//클릭 이벤트
//document.querySelector(".app-download img").addEventListener("click", modalOn);
//document.querySelector(".modal_close_btn").addEventListener("click", modalOff);
//document.querySelector(".modal_bg_shadow").addEventListener("click", modalOff);


//document.querySelector("#burgerIcon").addEventListener("click", hamburgerOnOff);
//document.querySelector(".hamburger_bg_shadow").addEventListener("click", hamburgerOnOff);

/*
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
*/


/*
function hamburgerOnOff() {
    if (document.querySelector(".hamburgerMenu").classList.contains("on")) {
        //메뉴 slideOut
        document.querySelector(".hamburgerMenu").classList.remove("on");
        //slideOut시 menuBtn의 img src를 menu icon으로 변경
        document.getElementById("burgerIcon").src = "https://firebasestorage.googleapis.com/v0/b/signor-84c8e.appspot.com/o/hamburger.PNG?alt=media&token=77192ebb-45c0-4914-9787-808cd880bf4e";
        $(".hamburger_bg_shadow").css({
            "display": "none"
        });
    }
    else {
        //메뉴 slideIn
        document.querySelector(".hamburgerMenu").classList.add("on");
        //slideIn시 menuBtn의 img src를 cross icon으로 변경
        document.getElementById("burgerIcon").src = "https://firebasestorage.googleapis.com/v0/b/signor-84c8e.appspot.com/o/close.PNG?alt=media&token=d684c48b-abc9-4292-a122-206ff52c97ea";
        $(".hamburger_bg_shadow").css({
            "display": "block"
        });
    }
}
*/


$(document).ready(function(){
    var pips = $(".pg-pips").children().children();
    var x, y1, y2, y3, y4, y5;
    
    x = pips.eq(0).offset().left; 
    y1 = pips.eq(0).offset().top;
    y2 = pips.eq(1).offset().top;
    y3 = pips.eq(2).offset().top;
    y4 = pips.eq(3).offset().top;
    y5 = pips.eq(4).offset().top;
    
    
    $("#product").offset({ left:x+20, top:y1 });
    $("#function").offset({ left:x+20, top:y2 });
    $("#app").offset({ left:x+20, top:y3 });
    $("#contents").offset({ left:x+20, top:y4 });
    $("#information").offset({ left:x+20, top:y5 });

    
    
    //인스타 이미지 slick
    //3p
    $('.instagram_div').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        centerMode: false,
        
        //반응형
        responsive: [
            {
                breakpoint: 1024,  //1024px 이하
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,  //768px 이하
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,  //480px 이하
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    //4p
    //큰화면
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.instagram_div2',
    });
    //작은화면
    $('.instagram_div2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});




function buy_now_btn() {
    
    //console.log(123);
}

window.onresize = function(e){
    var pips = $(".pg-pips").children().children();
    var x, y1, y2, y3, y4, y5;
    
    x = pips.eq(0).offset().left; 
    y1 = pips.eq(0).offset().top;
    y2 = pips.eq(1).offset().top;
    y3 = pips.eq(2).offset().top;
    y4 = pips.eq(3).offset().top;
    y5 = pips.eq(4).offset().top;
    
    
    $("#product").offset({ left:x+20, top:y1 });
    $("#function").offset({ left:x+20, top:y2 });
    $("#app").offset({ left:x+20, top:y3 });
    $("#contents").offset({ left:x+20, top:y4 });
    $("#information").offset({ left:x+20, top:y5 });
}

/*
function show_nav(number) {
    if (number == 1) {
        document.querySelector("#product").style.visibility = "visible";
        document.querySelector("#function").style.visibility = "hidden";
        document.querySelector("#app").style.visibility = "hidden";
        document.querySelector("#contents").style.visibility = "hidden";
        document.querySelector("#information").visibility = "hidden";
    }
    else if (number == 2) {
        document.querySelector("#product").style.visibility = "hidden";
        document.querySelector("#function").style.visibility = "visible";
        document.querySelector("#app").style.visibility = "hidden";
        document.querySelector("#contents").style.visibility = "hidden";
        document.querySelector("#information").style.visibility = "hidden";
    }
    else if (number == 3) {
        document.querySelector("#product").style.visibility = "hidden";
        document.querySelector("#function").style.visibility = "hidden";
        document.querySelector("#app").style.visibility = "visible";
        document.querySelector("#contents").style.visibility = "hidden";
        document.querySelector("#information").style.visibility = "hidden";
    }
    else if (number == 4) {
        document.querySelector("#product").style.visibility = "hidden";
        document.querySelector("#function").style.visibility = "hidden";
        document.querySelector("#app").style.visibility = "hidden";
        document.querySelector("#contents").style.visibility = "visible";
        document.querySelector("#information").style.visibility = "hidden";
    }
    else if (number == 5) {
        document.querySelector("#product").style.visibility = "hidden";
        document.querySelector("#function").style.visibility = "hidden";
        document.querySelector("#app").style.visibility = "hidden";
        document.querySelector("#contents").style.visibility = "hidden";
        document.querySelector("#information").style.visibility = "visible";
    }
}

*/