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

    //开放时间图片移入高亮显示开始

    $('#imgBox .item img').mouseover(function () {

        $(this).animate({
            "opacity": 0.7
        }, 300);
    }).mouseleave(function () {
        $(this).animate({
            "opacity": 1
        }, 300);

        //开放时间图片移入高亮显示结束

        //开放公告文字移入高亮显示开始
        $('#lista div h2').mouseover(function () {
            // alert(123)
            $(this).css('color', '#999999');
        }).mouseleave(function () {
            $(this).css('color', '#fff');
        })
        //开放公告文字移入高亮显示结束

        $('.page-opentime .block1 .left .nav_l2').click
    })

    // 地图点击事件
    $('.page-opentime .block1 .left .nav_l2').click(function () {
        alert(123);
    })


    // 购票须知点击菜单切换
    $('.page-opentime .block4 .list .lyc_tabs .s1').click(function () {
        $('.page-opentime .block4 .list .lyc_tabs .s1').addClass('now');
        $('.page-opentime .block4 .list .lyc_tabs .s2').toggleClass('now');
        $('.page-opentime .block4 .list .child').eq($(this).index()).css('display','block').siblings().css('disolay','none');
    })

    $('.page-opentime .block4 .list .lyc_tabs .s2').click(function () {
        $('.page-opentime .block4 .list .lyc_tabs .s2').addClass('now');
        $('.page-opentime .block4 .list .lyc_tabs .s1').toggleClass('now');
        $('.page-opentime .block4 .list .child').eq($(this).index()).css('display','block').siblings().css('disolay','none');
    })

    // 尾部
    $('.footer .code2d a').hover(function () {
        $('.footer .code2d img').toggle()
    })
    // $('.footer .code2d a').mouseleave(function () {
    //     $('.footer .code2d img').hide()
    // })
})