
const pages = new Pageable("main");


//페이지 스크롤 끝나고 실행
pages.on("scroll.end", function(data) {
    /*
    var pips = $(".pg-pips").children().children();

    if(data.index == 0) {
        show_nav(1);
        $(pips.eq(0)).unbind('mouseenter mouseleave');
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
    else if(data.index == 1) {
        show_nav(2);
        $(pips.eq(1)).unbind('mouseenter mouseleave');
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
    else if(data.index == 2) {
        show_nav(3);
        $(pips.eq(2)).unbind('mouseenter mouseleave');
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
    else if(data.index == 3) {
        show_nav(4);
        $(pips.eq(3)).unbind('mouseenter mouseleave');
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
    else if(data.index == 4) {
        show_nav(5);
        $(pips.eq(4)).unbind('mouseenter mouseleave');
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

    //마지막페이지에서 안보일것들 설정
    if(data.index == 4) {
        document.querySelector(".right_menu").style.display = "none";
    }
    else {
        document.querySelector(".right_menu").style.display = "block";
    }

});


/*
function show_nav(number) {
    if (number == 1) {
        document.querySelector("#product").style.visibility = "visible";
        document.querySelector("#function").style.visibility = "hidden";
        document.querySelector("#app").style.visibility = "hidden";
        document.querySelector("#contents").style.visibility = "hidden";
        document.querySelector("#information").style.visibility = "hidden";
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