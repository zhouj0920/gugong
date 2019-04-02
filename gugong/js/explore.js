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
    $('.header .nav_main li').mouseleave(function () {
        $(this).children('b').css('visibility', 'hidden');
        $('.header .nav_child .child').eq($(this).index()).hide();
    })

    // 故宮探索开始鼠标移入
    $('.tansuo-as a').mouseenter(function () {
        $(this).siblings('a').removeClass('tansuo-bgc');
        $(this).addClass('tansuo-bgc')
    });
    // 移出
    $('.tansuo-as a').mouseleave(function () {
        $('.tansuo-as a').removeClass('tansuo-bgc');
    });
    // 图片显示
    setTimeout(function () {
        $('.tansuo-mg').fadeIn(5000);
    });
    // 图片移动
    setTimeout(function () {
        $('.tansuo-img').stop().animate({
            position: 'absolute',
            right: '0px',
            bottom: '0px'
        }, 2000);
    });
    // $(window).scroll(function () {
    //     if ($(document).scrollTop()>$('.header').height()) {
    //         $('.tansuo-img').stop().animate({
    //             position: 'absolute',
    //             right: '0px',
    //             bottom: '0px'
    //         },2000);
    //     };
    // });

    // 故宫藏书图片移动事件
    
    $(window).scroll(function () {
        // console.log($(document).scrollTop())
            if ($(document).scrollTop()> 700) {
                $('.cangpin').fadeIn(5000);
                $('.foxiang').stop().animate({
                    position: 'absolute',
                    top: '78px',
                    left: '35px'
                },2000);
            };
        });

    // 故宫藏品鼠标移入事件
    $('.div4-r img').mouseenter(function () {
        var wValue = 1.2 * $(this).width();
        var hValue = 1.2 * $(this).height();
        $(this).stop().animate({
            width: wValue,
            height: hValue,
            left: ("-" + (0.2 * $(this).width()) / 2),
            top: ("-" + (0.2 * $(this).height()) / 2)
        }, 500);
    }).mouseleave(function () {
        $(this).stop().animate({
            width: "315",
            height: "240",
            left: "0px",
            top: "0px"
        }, 500);
    });


    $('.div5-l img').mouseenter(function () {
        var wValue = 1.2 * $(this).width();
        var hValue = 1.2 * $(this).height();
        $(this).stop().animate({
            width: wValue,
            height: hValue,
            left: ("-" + (0.2 * $(this).width()) / 2),
            top: ("-" + (0.2 * $(this).height()) / 2)
        }, 500);
    }).mouseleave(function () {
        $(this).stop().animate({
            width: "315",
            height: "240",
            left: "0px",
            top: "0px"
        }, 500);
    });

    // 故宫藏书图片移动事件
    $(window).scroll(function () {
        // console.log($(document).scrollTop())
        $('.cangshu-bgc').fadeIn(6000);
        if ($(document).scrollTop() > 1460) {
            $('.cangshu-t-t').stop().animate({
                position: 'absolute',
                bottom: '0px',
                left: '0pc'
            }, 2000);
        }else if ($(document).scrollTop() > 1300) {
            $('.cangshu-t a').eq(0).stop().animate({
                position: 'relative',
                top: '0px'
            }, 500);
            $('.cangshu-t a').eq(1).stop().animate({
                position: 'relative',
                top: '0px'
            }, 1000);
            $('.cangshu-t a').eq(2).stop().animate({
                position: 'relative',
                top: '0px'
            }, 1500);
            $('.cangshu-t a').eq(3).stop().animate({
                position: 'relative',
                top: '0px'
            }, 2000);
            $('.cangshu-t a').eq(4).stop().animate({
                position: 'relative',
                top: '0px'
            }, 2500);
            $('.cangshu-t a').eq(5).stop().animate({
                position: 'relative',
                top: '0px'
            }, 2800);
            $('.cangshu-t a').eq(6).stop().animate({
                position: 'relative',
                top: '0px'
            }, 3000);
            $('.cangshu-t a').eq(7).stop().animate({
                position: 'relative',
                top: '0px'
            }, 3200);
        }
    });

// 历史开始
$(window).scroll(function () {
    console.log($(document).scrollTop())
        if ($(document).scrollTop()>2209) {
            $('.lishi h2').slideDown()
        };
    });

// 工匠轮播图
// 克隆一份图1
var firstLi = $('.gonjiang-r ul li').eq(0).clone(true);
// 放到图2后面
$('.gonjiang-r ul').append(firstLi);
var index = 0;
// 给右箭头添加点击事件
$('.bgc-right').click(function () {
    index++;
    if (index > 2) {
        $('.gonjiang-r ul').css('left', '0');
        index = 1;
    }
    var move = -index * $('.gonjiang-r').width();
    console.log(move);
    $('.gonjiang-r ul').stop().animate({
        left: move
    }, 500);
    $(this).siblings().removeClass('bgc');
    $(this).addClass('bgc')
    return false;
});

// 给左箭头添加点击事件
$('.bgc-left').click(function () {
    index--;
    if (index < 0) {
        $('.gonjiang-r ul').css('left', '-1640px');
        index = 1;
    }
    var move = -index * $('.gonjiang-r').width();
    console.log(move);
    $('.gonjiang-r ul').stop().animate({
        left: move
    }, 500);
    $(this).siblings().removeClass('bgc');
    $(this).addClass('bgc')
    return false;
});

// 底部鼠标移入事件
$('.footer .code2d a').hover(function () {
$('.footer .code2d img').toggle()
})
});