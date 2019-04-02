$(function () {




    //头部点击事件
    $('.tools .me img').click(function () {
        $('.navbar').show()
    })
    $('.popWindow .close').click(function () {
        $('.navbar').hide()
    })
    //鼠标移入显示下三角
    $('.header .nav_main li').mouseenter(function () {
        $(this).children('b').css('visibility', 'visible');
        $(this).siblings('li').children('b').css('visibility', 'hidden');
        $('.header .nav_child .child').eq($(this).index()).show().siblings().hide();
    })
    $('.header .nav_main li').mouseleave(function () {
        $(this).children('b').css('visibility', 'hidden');
    })
    $('.top').mouseenter(function () {
        $('.header .nav_child .child').hide();
    })

    //
    $('.tools .login').hover(function () {
        $('.loginbox').toggle();
    })
    $('.tools .lang').hover(function () {
        $('.language').toggle();
    })
    $('.tools .scbtn').hover(function () {
        $('.search').toggle();
    })
    // bottom: -60px;





    //尾部
    $('.footer .code2d a').hover(function () {
        $('.footer .code2d img').toggle()
    })

    //浏览建议 start
    $("#footer .btns a").bind("click", function () {
        $("#footer .proposal").animate({
            bottom: 0,
        });
        return false;
    });

    $("#footer .proposal").bind("mouseout", function (e) {
        $(this).animate({
            bottom: '-60px',
        });
    });
    //浏览建议  end
})