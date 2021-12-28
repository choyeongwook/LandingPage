
function isIE() {
    var agent = navigator.userAgent.toLowerCase();
    return ((agent.indexOf("msie") != -1) ||
    ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1)));
}

if (isIE()) {
    //swiper가 ie 지원하지 않음
    alert("인터넷 익스플로러는 지원하지 않습니다. 다른 브라우저로 접속해주세요.");
}

// 리소스 로딩 완료 후
window.onload = function() {
    if (!isIE()) {
            go(); 
    }
}



//const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
//const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);


//우측 네비게이터 옆 글씨 따라다니게
function followNavigatorText() {
    var pips = $(".swiper-pagination-bullet");

    var x, y1, y2, y3, y4, y5, y6, y7;
    
    x = pips.eq(0).offset().left;
    y1 = pips.eq(0).offset().top;
    y2 = pips.eq(1).offset().top;
    y3 = pips.eq(2).offset().top;
    y4 = pips.eq(3).offset().top;
    y5 = pips.eq(4).offset().top;
    y6 = pips.eq(5).offset().top;
    y7 = pips.eq(6).offset().top;

    $("#nav_note1").offset({ left: x-10-($('#nav_note1').innerWidth()), top:y1-4 });
    $("#nav_note2").offset({ left: x-10-($('#nav_note2').innerWidth()), top:y2-4 });
    $("#nav_note3").offset({ left: x-10-($('#nav_note3').innerWidth()), top:y3-4 });
    $("#nav_note4").offset({ left: x-10-($('#nav_note4').innerWidth()), top:y4-4 });
    $("#nav_note5").offset({ left: x-10-($('#nav_note5').innerWidth()), top:y5-4 });
    $("#nav_note6").offset({ left: x-10-($('#nav_note6').innerWidth()), top:y6-4 });
    $("#nav_note7").offset({ left: x-10-($('#nav_note7').innerWidth()), top:y7-4 });
}

var swiper;

var swiper2;

$(document).ready(function(){

    //swiper 생성
    swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        loop : false, // 슬라이드 반복 여부
        slidesPerView: 1, 
        spaceBetween: 0,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type : 'bullets', // 버튼 모양 결정 "bullets", "fraction" 
        },
        speed: 800,  //스피드
        threshold: 10,
        
    });


    //function 페이지 스와이퍼
    swiper2 = new Swiper(".mySwiper2", {
        loop : false, // 슬라이드 반복 여부
        slidesPerView: 1, 
        spaceBetween: 0,
        threshold: 20,
        mousewheel: false,
    });



    
    
    //창 크기가 바뀌었을 때 실행
    swiper.on('resize', function () {
        followNavigatorText();


        //function페이지 창 켜졌을 때 div들 함께 이동
        if(function_div_number != 0) {
            $(".detail" + function_div_number).offset({ left: (($(".before" + function_div_number).offset().left) + ($(".before" + function_div_number).innerWidth()/2)) });
        }
        
        //app페이지 타이틀 중앙으로
        $(".app_semi_title").css('padding-top', ($('.app_bar').innerHeight() - $('.gnb').innerHeight())/2);

    
        
        
    });

    var timer1, timer2, timer3, timer4, timer5;
    swiper.on('activeIndexChange', function () {
        setTimeout(function() {
            if(swiper.activeIndex == 0) {
                
                $('.swiper-pagination-bullet').css('background', '#CECECE');
                
                $('.swiper-pagination-bullet-active').css('background', '#8C8C97');

                $('.nav_note').css('color', '#8C8C97');
            }
            else {
            
                $('.swiper-pagination-bullet').css('background', '#8C8C97');

                $('.swiper-pagination-bullet-active').css('background', '#3D3D47');

                $('.nav_note').css('color', '#3D3D47');

            }
        }, 1);

        //design페이지 텍스트 순차적으로 나오게
        setTimeout(function() {
            if(swiper.activeIndex == 2) {
                $('#page3_semi_title_1').css('visibility', 'visible');
                $('#page3_semi_title_1').css('animation', 'fadeIn2 1.0s ease-in-out');

                $('#page3_number_1').css('visibility', 'visible');
                $('#page3_number_1').css('animation', 'fadeIn2 1.0s ease-in-out');
                timer1 = setTimeout(function() {
                $('#page3_semi_title_2').css('visibility', 'visible');
                $('#page3_semi_title_2').css('animation', 'fadeIn2 1.0s ease-in-out');

                $('#page3_number_2').css('visibility', 'visible');
                $('#page3_number_2').css('animation', 'fadeIn2 1.0s ease-in-out');
                timer2 = setTimeout(function() {
                $('#page3_number_3').css('visibility', 'visible');
                $('#page3_number_3').css('animation', 'fadeIn2 1.0s ease-in-out');
                    
                $('#page3_semi_title_3').css('visibility', 'visible');
                $('#page3_semi_title_3').css('animation', 'fadeIn2 1.0s ease-in-out');
                timer3 = setTimeout(function() {
                $('#page3_content_1').css('visibility', 'visible');
                $('#page3_content_1').css('animation', 'fadeIn2 1.0s ease-in-out');
                timer4 = setTimeout(function() {
                $('#page3_content_2').css('visibility', 'visible');
                $('#page3_content_2').css('animation', 'fadeIn2 1.0s ease-in-out');
                timer5 = setTimeout(function() {
                $('#page3_content_3').css('visibility', 'visible');
                $('#page3_content_3').css('animation', 'fadeIn2 1.0s ease-in-out');
                }, 120);  }, 120);  }, 1000);  }, 120);  }, 120); 
                

            }

            else {
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
                clearTimeout(timer4);
                clearTimeout(timer5);
                $('.page3_semi_title').css('visibility', 'hidden');
                $('.page3_semi_title').css('animation', '');
                $('.page3_content').css('visibility', 'hidden');
                $('.page3_content').css('animation', '');
                $('.page3_number').css('visibility', 'hidden');
                $('.page3_number').css('animation', '');
            }

            


        }, 700);

        
    });



    
    

   

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

//더알아보기 클릭 시
function next_page() {

    swiper.slideNext();

}

function go() {
    //if(document.getElementById('pwd').value == 1209) {
        $(".loading").fadeOut(700);
    //}

    $(".app_semi_title").css('padding-top', ($('.app_bar').innerHeight() - $('.gnb').innerHeight())/2);
    

    //1페이지 배경 사진 두개로 gif처럼 돌아가게
    $(".bg1").fadeOut(5000);
    $(".bg1").css('z-index', 10);
    $(".bg3").css('z-index', 9);

    var bg_timer = 1;
    setInterval(function() {
        if(bg_timer % 2 == 1) {
            $(".bg1").stop();
            $(".bg3").stop();
            $(".bg1").fadeIn(0);
            $(".bg3").fadeOut(5000);
            $(".bg3").css('z-index', 10);
            $(".bg1").css('z-index', 9);
            bg_timer++;
        }
        else {
            $(".bg1").stop();
            $(".bg3").stop();
            $(".bg3").fadeIn(0);
            $(".bg1").fadeOut(5000);
            $(".bg1").css('z-index', 10);
            $(".bg3").css('z-index', 9);
            bg_timer++;
        }

    }, 6000);


    followNavigatorText();
    var pips = $(".swiper-pagination-bullet");
    
    
    //우측 네비게이터 hover 이벤트
    $(pips.eq(0)).hover(function() {
        document.querySelector("#nav_note1").style.visibility = "visible";
    },function() {
        document.querySelector("#nav_note1").style.visibility = "hidden";
    });
    $(pips.eq(1)).hover(function() {
        document.querySelector("#nav_note2").style.visibility = "visible";
    },function() {
        document.querySelector("#nav_note2").style.visibility = "hidden";
    });
    $(pips.eq(2)).hover(function() {
        document.querySelector("#nav_note3").style.visibility = "visible";
    },function() {
        document.querySelector("#nav_note3").style.visibility = "hidden";
    });
    $(pips.eq(3)).hover(function() {
        document.querySelector("#nav_note4").style.visibility = "visible";
    },function() {
        document.querySelector("#nav_note4").style.visibility = "hidden";
    });
    $(pips.eq(4)).hover(function() {
        document.querySelector("#nav_note5").style.visibility = "visible";
    },function() {
        document.querySelector("#nav_note5").style.visibility = "hidden";
    });
    $(pips.eq(5)).hover(function() {
        document.querySelector("#nav_note6").style.visibility = "visible";
    },function() {
        document.querySelector("#nav_note6").style.visibility = "hidden";
    });
    $(pips.eq(6)).hover(function() {
        document.querySelector("#nav_note7").style.visibility = "visible";
    },function() {
        document.querySelector("#nav_note7").style.visibility = "hidden";
    });
    
}

//language dropdown
function set_ko() {
    console.log("한국어 페이지");
    //window.location.href = "index-en.html";  //index-en.html 영어 페이지 새로 파야함
}

function set_en() {
    console.log("English Page");
    //window.location.href = "index.html";
}


//start language dropdown
function CustomSelectBox(selector){
    this.$selectBox = null,
    this.$select = null,
    this.$list = null,
    this.$listLi = null;
    CustomSelectBox.prototype.init = function(selector){
        this.$selectBox = $(selector);
        this.$select = this.$selectBox.find('.box .select');
        this.$list = this.$selectBox.find('.box .list');
        this.$listLi = this.$list.children('li');
    }
    CustomSelectBox.prototype.initEvent = function(e){
        var that = this;
        this.$select.on('click', function(e){
            that.listOn();
        });
        this.$listLi.on('click', function(e){
            that.listSelect($(this));
        });
        $(document).on('click', function(e){
            that.listOff($(e.target));
        });
    }
    CustomSelectBox.prototype.listOn = function(){
        this.$selectBox.toggleClass('on');
        if(this.$selectBox.hasClass('on')){
            this.$list.css('display', 'block');
        }else{
            this.$list.css('display', 'none');
        };
    }
    CustomSelectBox.prototype.listSelect = function($target){
        $target.addClass('selected').siblings('li').removeClass('selected');
        this.$selectBox.removeClass('on');
        this.$select.text($target.text());
        this.$list.css('display', 'none');
    }
    CustomSelectBox.prototype.listOff = function($target){
        if(!$target.is(this.$select) && this.$selectBox.hasClass('on')){
            this.$selectBox.removeClass('on');
            this.$list.css('display', 'none');
        };
    }
    this.init(selector);
    this.initEvent();
}

$(function(){
    var select = new CustomSelectBox('.select_box');
});
//end language dropdown


//채널톡 켜지는 이벤트
//document.querySelector(".dhMiir").click();



//function페이지 기능

var before_height = "370px";
var after_width = "1200px";
var after_height = "640px";
var function_div_number = 0;

/*
function function_on(number) {
    if(function_div_number != 0) return;  //이미 켜져있는 div 있으면 이벤트 막음

    function_div_number = number;
    $('.before' + number).addClass('on');
    $(".before" + number).css('z-index', '16');
    $(".detail" + number).css('z-index', '15');

    //첫번째 div를 누른게 아니면 이동 애니메이션 추가
    if(number != 1) {
        var dif_left = $(".before1").offset().left - $(".before" + number).offset().left;
        
        $(".before" + number).animate({left: dif_left}, 500);
        //$(".before1").animate({left: (-dif_left)}, 500);

        setTimeout(function() {
            $('.before' + number).addClass('radius');
            $(".before" + number).css('height', after_height);
            

            $(".detail" + number).offset({ left: (($(".before" + number).offset().left) + ($(".before" + number).innerWidth()/2)) });
            $(".detail" + number).css('height', after_height);
            
            setTimeout(function() {
                
                $(".detail" + number).css('border-left', '0px');

                $(".detail" + number).css('width', after_width);

                
                
                setTimeout(function() {
                    //$(".arrow" + number).css('display', 'block');
                }, 500);
            }, 300);
        }, 500);
    }
    else {
        $('.before' + number).addClass('radius');
        $(".before" + number).css('height', after_height);
        $(".before" + number).css('z-index', '16');
        $(".detail" + number).css('z-index', '15');
    
        $(".detail" + number).offset({ left: (($(".before" + number).offset().left) + ($(".before" + number).innerWidth()/2)) });
        $(".detail" + number).css('height', after_height);
        
        setTimeout(function() {
            
            $(".detail" + number).css('border-left', '0px');
            $(".detail" + number).css('width', after_width);

            setTimeout(function() {
                //$(".arrow" + number).css('display', 'block');
            }, 500);

        }, 300);
    }
}


function function_off(number) {

    $(".detail" + number).css('width', '0px');
    //$(".arrow" + number).css('display', 'none');
    setTimeout(function() {
        $(".detail" + number).css('height', '0px');
        $(".before" + number).css('height', before_height);
        
        setTimeout(function() {
            
            $(".detail" + number).css('z-index', '0');
            //$(".detail" + number).css('display', 'none');
            if(number != 1) {
                $('.before'+ number).removeClass('on');
                $('.before' + number).removeClass('radius');
                $(".before" + number).animate({left: 0}, 500);
                //$(".before1").animate({left: (0)}, 500);

                
                setTimeout(function() {
                    $(".before" + number).css('z-index', '11');
                    $(".detail" + number).css('z-index', '10');
                    function_div_number = 0;
                }, 600);
                
            }
            else {
                $('.before'+ number).removeClass('on');
                $('.before' + number).removeClass('radius');
                setTimeout(function() {       
                    $(".before" + number).css('z-index', '11');
                    $(".detail" + number).css('z-index', '10');
                    function_div_number = 0;
                }, 300);
                
            }
        }, 300);
    }, 500);
}

*/
function function_on(number) {
    swiper2.slideTo(number-1, 0);
    $(".mySwiper2").css('height', after_height);
    $(".mySwiper2").css('width', after_width);
    $(".mySwiper2").css('z-index', 15);
    $(".mySwiper2").css('box-shadow', "6px 6px 9px 7px #dddddd");


    
    setTimeout(function() {
        $(".function_before").css('visibility', 'hidden');
    }, 300);
}

function function_off(number) {
    $(".mySwiper2").css('height', '0px');
    $(".mySwiper2").css('width', '0px');
    $(".mySwiper2").css('box-shadow', "none");

    $(".function_before").css('visibility', 'visible');
    setTimeout(function() {
        $(".mySwiper2").css('z-index', 10);
    }, 300);
}

function left_arrow_click() {
    swiper2.slidePrev(500);
}

function right_arrow_click() {
    swiper2.slideNext(500);
}



//click 이벤트 추가
$(".before1").click(function() {
    function_on(1);
});
$(".before2").click(function() {
    function_on(2);
});
$(".before3").click(function() {
    function_on(3);
});
$(".before4").click(function() {
    function_on(4);
});

$(".close_btn").click(function() {
    function_off();
});

$(".left_arrow").click(function() {
    left_arrow_click();
});

$(".right_arrow").click(function() {
    right_arrow_click();
});


var app_content = $(".app_content");
var content1 = app_content.eq(0);
var content2 = app_content.eq(1);
var content3 = app_content.eq(2);
var content4 = app_content.eq(3);

var app_icon = $(".app_icon");
var icon1 = app_icon.eq(0);
var icon2 = app_icon.eq(1);
var icon3 = app_icon.eq(2);
var icon4 = app_icon.eq(3);


content1.hover(function() {
    icon1.attr('src', 'images/travelrecord_hover.svg');
}, function() {
    icon1.attr('src', 'images/travelrecord.svg');
});

content2.hover(function() {
    icon2.attr('src', 'images/modecustomize_hover.svg');
}, function() {
    icon2.attr('src', 'images/modecustomize.svg');
});

content3.hover(function() {
    icon3.attr('src', 'images/remotecontrol_hover.svg');
}, function() {
    icon3.attr('src', 'images/remotecontrol.svg');
});

content4.hover(function() {
    icon4.attr('src', 'images/setroutine_hover.svg');
}, function() {
    icon4.attr('src', 'images/setroutine.svg');
});

content1.click(function() {
    travel_record();
});

function travel_record() {
    $('.app_hand').attr('src', 'images/일단아무거나.png');
    $(".app_sub").css('display', "block");

    setTimeout(function() {
        var left = $('.app_hand').offset().left - $(".app_sub").offset().left;

        $(".app_sub").animate({left: '+='+(left+339)}, 700);

        setTimeout(function() {
            $(".app_sub").css('display', "none");
            $('.app_hand').attr('src', 'images/기록하기after.png');
        }, 500);

    }, 500);
}

function cancle_travel_record() {
    
}