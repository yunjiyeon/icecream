$(document).ready(function(){
    $('.hamBars').click(function(){
        $('nav').animate({left:0},400,'swing'); // 시간 안 쓰면 0.4s 가 기본 
    });

    $('nav button').click(function(){
        $('nav').animate({left:-300},200);
    });

    $(window).resize(function(){
        $('nav').removeAttr('style'); // removeAttr 지워준다 
    });
});