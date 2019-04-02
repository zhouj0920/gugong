$(function () {
    //头部点击事件
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
    // 中部
    // 轮播图1
    var imgIndex = 0;

    // 原点切换
    $('.winchance .item1 .foucs .nav a').click(function () {
        $(this).siblings().removeClass('now');
        $(this).addClass('now');
        imgIndex = $(this).index();
        // console.log(index);

        $('.winchance .item1 .foucs .child').eq(imgIndex).siblings().fadeOut();
        $('.winchance .item1 .foucs .child').eq(imgIndex).fadeIn(800);
        // imgIndex = $(this).index();
        // $('.winchance .item1 .foucs .child').eq(imgIndex).fadeIn().siblings().fadeOut();
        // $('.winchance .item1 .foucs .nav a').eq(imgIndex).addClass('now').siblings().removeClass('now');
    })

    // 定时器
    var i = 0;
    var tonren = function () {
        i++;
        if (i > 2) {
            i = 0;
        }
        //console.log(i);
        $('.winchance .item1 .foucs .nav a').siblings().removeClass('now');
        $('.winchance .item1 .foucs .nav a').eq(i).addClass('now');
        $('.winchance .item1 .foucs .child').eq(i).siblings().fadeOut();
        $('.winchance .item1 .foucs .child').eq(i).fadeIn(800);
    }
    var timerr = setInterval(tonren, 4000);



    // 鼠标移入移出
    $('.item1 img').hover(function () {
        clearInterval(timerr);
    }, function () {
        var timerr = setInterval(tonren, 3000);
    })





    // 轮播图2
    var imgIndex2 = 0;

    $('.winchance .item2 .foucs .nav a').click(function () {
        imgIndex2 = $(this).index();
        $('.winchance .item2 .foucs .child').eq(imgIndex2).stop().fadeIn().siblings().stop().fadeOut();
        $('.winchance .item2 .foucs .nav a').eq(imgIndex2).addClass('now').siblings().removeClass('now');
    })

    var k = 0;
    var tonren2 = function () {
        k++;
        if (k > 3) {
            k = 0;
        }
        //console.log(i);
        $('.winchance .item2 .foucs .nav a').siblings().removeClass('now');
        $('.winchance .item2 .foucs .nav a').eq(k).addClass('now');
        $('.winchance .item2 .foucs .child').eq(k).siblings().fadeOut();
        $('.winchance .item2 .foucs .child').eq(k).fadeIn(800);
    }
    var timerr2 = setInterval(tonren2, 4000);

    // 鼠标移入移出
    $('.item2 img').stop().hover(function () {
        clearInterval(timerr2);
    }, function () {
        var timerr2 = setInterval(tonren2, 3000);
    })
    // 移动生活
    $('.item3 .piclist .img').mouseover(function () {
        var index = $(this).index();
        $('.item3 .piclist .mask').eq(index).css('display','block')
    })
    $('.item3 .piclist .img').mouseout(function () {
        $('.item3 .piclist .mask').css('display','none')
    })

    // 故宫输入发皮肤


    // 故宫回声




    // 尾部
    $('.footer .code2d a').hover(function () {
        $('.footer .code2d img').toggle()
    })
    // $('.footer .code2d a').mouseleave(function () {
    //     $('.footer .code2d img').hide()
    // })
})