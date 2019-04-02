$(function(){
    // 头部
    $('.tools .me img').click(function () {
        $('.navbar').show()
    })
    $('.popWindow .close').click(function () {
        $('.navbar').hide()
    })
    // 登录界面
    $('.header .login').hover(function () {
        $('.header .loginbox').toggle();
    })
    // cn
    $('.header .lang').hover(function () {
        $('.header .language').toggle();
    })
    // 搜索框
    $('.header .scbtn img').click(function () {
        $('.header .search').toggle();
    })
    $('.winchance').click(function () {
        $('.header .search').hide();
    })
   
    //鼠标移入显示下三角
    $('.header .nav_main li').hover(function () {
        $(this).children('b').css('visibility', 'visible');
        $(this).siblings('li').children('b').css('visibility', 'hidden');
        $('.header .nav_child .child').eq($(this).index()).show().siblings().hide();
    })
    $('.header .nav_child .child').mouseover(function () {
        $('.header .nav_child .child').eq($(this).index()).show();
    })
    $('.header .nav_child .child').mouseout(function () {
        $('.header .nav_child .child').eq($(this).index()).hide();
        $('.header .nav_main li').children('b').css('visibility', 'visible');
        $('.header .nav_main li').siblings('li').children('b').css('visibility', 'hidden');
    })
    // 头部结束
    $('#code2d a').mouseenter(function(){
        $('#code2d img').css('display' , 'block')
    }).mouseout(function(){
        $('#code2d img').css('display' , 'none')
    })
    // $('#btns').click(function(){
    //     $('#proposal').css('bottom','0')
    // })
    // $('#proposal').mouseout(function(){
    //     $('#proposal').css('bottom','-60px')
    // })
    $('#a').click(function(){
        $('#layer').css('display','block')
    })
    $('#close').click(function(){
        $('#layer').css('display','none')
    })
    $('#prev').click(function(){
        $('#')
    })
})