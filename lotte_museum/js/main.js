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


$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.
    Logic();



    $(".container").niceScroll({
        cursorcolor: "#000",
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

    // =========================
    // on event section      ===
    //==========================





    $('#intro').delay(1000).queueAddClass('on');


    setTimeout(function(){

        $('.black_box').addClass('on');

        $('#intro .title_d').delay(1720).queueAddClass('on').delay(1000).queueRemoveClass('on');

        $('.intro_text').delay(1000).addClass('on');


        $('#intro').delay(1000).queueAddClass('off');


        $('#section01').delay(1000).queueAddClass('open');

        setTimeout(function(){
            $('.intro_text').delay(500).queueAddClass('on2');



        },5000)
    },2000);


    $('#section01').delay(500).queueAddClass('on');
    $('#section01 .right_box .tittle > div').addClass('on');



    const video = document.querySelector('#popVideo');
    $('.video_box').click(function(){
        $('.pop').addClass('on');
        video.play();
    });
    $('#popVideo').click(function(){
        $('.pop').removeClass('on');
        video.pause();
        video.currentTime = 0;
    });

    const container = document.querySelector('#container .main');

    container.addEventListener('mousewheel',function(e){
        if(e.deltaY < 0){

            $('#header').removeClass('off');

        }else if(e.deltaY > 0){
           $('#header').addClass('off');
        }
    });








//==============================================================
});


$(function () {

    // scroll event
    $('.container').scroll(function () {
        var scrollTop = $('.container').scrollTop();
        $('.posNum').text(scrollTop); // 스크롤값


        // =========================
        // scroll event section  ===
        //==========================


        // $("#section03 .left_box .text").css({"transform": "translateY(" + parseInt((0) + -scrollTop*0.5) + "px)"});


        if(scrollTop >= 10){
            $('#header').addClass('bg');
        }else{
            $('#header').removeClass('bg');
        }
        if(scrollTop >= 300){
            $('#section02 .inner .move_text').addClass('on');

        }else{
            $('#section02 .inner .move_text').removeClass('on');
        }

        if(scrollTop >= 1100){
            $('#section03 .left_box').addClass('on');

        }else{
            $('#section03 .left_box').removeClass('on');
        }
        if(scrollTop >= 1460){
            $('#section03 .right_box').addClass('on');

        }else{
            $('#section03 .right_box').removeClass('on');
        }

// 섹션4 진입구간
        if(scrollTop >= 1200 && scrollTop <= 4050){

            // $("#section04").css({"background-position": "0px (" + parseInt((287) + -scrollTop*0.1) + "px)"});
            // $(".fix_elem").css({"background-position": "0px "+ parseInt((2041) + -scrollTop * 0.5) +"px"});
            $(".fix_elem").css({"background-position": "0px "+ parseInt((2000) + -scrollTop * 0.5) +"px"});
        }else{
            // $('.fix_elem').css('position','absolute');
        }
// 섹션4 퇴장구
        if(scrollTop >= 7200 && scrollTop <= 10000){

            // $("#section04").css({"background-position": "0px (" + parseInt((287) + -scrollTop*0.1) + "px)"});
            $(".fix_elem").css({"background-position": "0px "+ parseInt((7200) + -scrollTop ) +"px"});
        }else{
            $('.fix_elem').css('position','absolute');
        }

        if(scrollTop >= 8800){
            $('#section05 .inner .circle_fitter').addClass('on');

        }else{
            $('#section05 .inner .circle_fitter').removeClass('on');
        }

        if(scrollTop >= 9740){
            $('#section06 .inner .c1').addClass('on');

        }else{
            $('#section06 .inner .c1').removeClass('on');
        }

        if(scrollTop >= 10440){
            $('#section06 .inner .c2').addClass('on');

        }else{
            $('#section06 .inner .c2').removeClass('on');
        }

        if(scrollTop >= 11298){
            $('#section06 .inner .c3').addClass('on');

        }else{
            $('#section06 .inner .c3').removeClass('on');
        }
        if(scrollTop >= 11320){
            $('#section06 .inner .c3 .txt2').addClass('on');

        }else{
            $('#section06 .inner .c3 .txt2').removeClass('on');
        }
        if(scrollTop >= 12600){
            $('#section07 .c1').addClass('on');

        }else{
            $('#section07 .c1').removeClass('on');
        }
        if(scrollTop >= 12810){
            $('#section07 .c2 .left').addClass('on');

        }else{
            $('#section07 .c2 .left').removeClass('on');
        }
        if(scrollTop >= 12950){
            $('#section07 .c2').addClass('on');

        }else{
            $('#section07 .c2').removeClass('on');
        }
        if(scrollTop >= 14060){
            $('#section07 .c3').addClass('on');

        }else{
            $('#section07 .c3').removeClass('on');
        }
        if(scrollTop >= 14730){
            $('#section07 .c3 .a1').addClass('on');

        }else{
            $('#section07 .c3 .a1').removeClass('on');
        }
        if(scrollTop >= 15372){
            $('#section08 .inner .c01').addClass('on');

        }else{
            $('#section08 .inner .c01').removeClass('on');
        }
        if(scrollTop >= 15576){
            $('#section08 .inner .c02').addClass('on');

        }else{
            $('#section08 .inner .c02').removeClass('on');
        }
        if(scrollTop >= 15600){
            $('#section08 .inner .c02 .txt .t1').addClass('on');

        }else{
            $('#section08 .inner .c02 .txt .t1').removeClass('on');
        }
        if(scrollTop >= 16030){
            $('#section08 .inner .c02 .txt .t2').addClass('on');

        }else{
            $('#section08 .inner .c02 .txt .t2').removeClass('on');
        }
        if(scrollTop >= 16752){
            $('#section09').addClass('on');

        }else{
            $('#section09').removeClass('on');
        }
        if(scrollTop >= 17180){
            $('#section09 .txt').addClass('on');

        }else{
            $('#section09 .txt').removeClass('on');
        }


        // if(scrollTop >= 8000){
        //     $('.fix_elem').addClass('on');
        // }else{
        //     $('.fix_elem').removeClass('on');
        // }

        // #section04 .some_text





        // $("").stop().animate({"margin-top": -scrollTop * 0.1}, 200);





        //===================================================================
        // nav on/off event
        $('.container .main > section').each(function (i) {
            var fastNum = 100;
            var firstY = $('.container .main > section:first').position().top;
            var posY = $(this).position().top;
            if (scrollTop <= firstY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollTop >= posY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        })

    });
});
