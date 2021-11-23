
const pages = new Pageable("main");

/*
pages.on("scroll.start", data => {
    if(data.index == 4) {
        document.querySelector(".snsIcon").style.display = "none";
    }
    else {
        document.querySelector(".snsIcon").style.display = "block";
    }
});
*/

//페이지 스크롤 끝나고 실행
pages.on("scroll.end", data => {
    //마지막페이지에서 안보일것들 설정
    if(data.index == 4) {
        document.querySelector(".right_menu").style.display = "none";
    }
    else {
        document.querySelector(".right_menu").style.display = "block";
    }
});


