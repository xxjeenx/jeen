/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
       _
  ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */

$(document).ready(function () {
    Logic();

    $(".container").niceScroll({
        cursorcolor: "#fff",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    // ===========================================================
    //click , mouseenter , mouseleave move event section
    //===========================================================


    $('.menu .btn_menu').click(function(){

        $('#mega').toggleClass('on');
        $(this).toggleClass('on');
    });





//==============================================================
});


$(function () {

    // 메뉴부분
    $('.naviJs > li > a, .topBtn').click(function () {
        var posX = $($(this).attr('href')).position().left;
        $('.container').stop().animate({'scrollLeft': posX}, 1200, 'easeInOutExpo');
        return false;
    });

    $('#section01 .txt_box').addClass('on');
    $('#section01').addClass('on');
    $('#section01 .txt_box .txt').addClass('on');

    // 스크롤 이벤트
    $('.container').scroll(function () {
        var scrollLeft = $('.container').scrollLeft();
        $('.posNum').text(scrollLeft); // 스크롤값




        // =========================
        // scroll event section
        //==========================

        // if(scrollLeft >= 800){
        //     $('#section02 .inner .img').addClass('on');
        // } else{
        //     $('#section02 .inner .img').removeClass('on');
        // }
        // if(scrollLeft >= 1200){
        //     $('#section02 .inner .title').addClass('on');
        // } else{
        //     $('#section02 .inner .title').removeClass('on');
        // }
        // if(scrollLeft >= 1200){
        //     $('#section02 .inner .txt').addClass('on');
        // } else{
        //     $('#section02 .inner .txt').removeClass('on');
        // }
        if(scrollLeft >= 1200){
            $('#section03 .title_box').addClass('on');
        } else{
            $('#section03 .title_box').removeClass('on');
        }
        if(scrollLeft >= 2500){
            $('#section04 .img').addClass('on');
        } else{
            $('#section04 .img').removeClass('on');
        }
        if(scrollLeft >= 4800){
            $('#section04').addClass('on');
        } else{
            $('#section04').removeClass('on');
        }
        if(scrollLeft >= 5000){
            $('#section04 .sub_txt_box').addClass('on');
        } else{
            $('#section04 .sub_txt_box').removeClass('on');
        }









        //===================================================================
        // 메뉴 활성화
        $('.container .main > div').each(function (i) {
            var fastNum = 100; // 메뉴를 빨리 활성화 시키는 값
            var firstX = $('.container .main > div:first').position().left;
            var posX = $(this).position().left;
            if (scrollLeft <= firstX - fastNum) {
                $('.container .main').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollLeft >= posX - fastNum) {
                $('.container .main').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        });
    });


});
