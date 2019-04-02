$(function(){
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

})
//cont-l鼠标经过事件
$(function(){
    $('.cont-l li a').mouseenter(function(){
        $(this).css('color','#909090');
    });
    $('.cont-l li a').mouseleave(function(){
        $(this).css('color','#474747');
    });
})

//lists 鼠标经过事件
$(function(){
    $('.lists li a').mouseenter(function(){
        $(this).css('border','1px solid #fff').css('border-radius','10px').css('font-size','18px')
        });
    $('.lists li a').mouseleave(function(){
        $(this).css('border','').css('font-size','16px');
    });
})

//box-r 鼠标经过事件
$(function(){
    $('.box-r li a').mouseenter(function(){
        $(this).css('color','#909090');
        });
    $('.box-r li a').mouseleave(function(){
        $(this).css('color','#474747');
    });
})

//block1中tab菜单
$(function(){
    $('.title li').click(function(){
        $(this).addClass('current').siblings('li').removeClass('current');//添加current
        $(this).siblings('li').find('img').addClass('Hide');
        $(this).find('img').removeClass('Hide');
        $('.items').eq($(this).index()).addClass('active').siblings().removeClass('active');
    });
})

//box中轮播切换
$(function(){
    //无缝轮播
    //克隆第一张图片,并将添加至ul中
    var fistLi = $('#imgBox li').eq(0).clone(true);
    $('#imgBox').append(fistLi);
    //先记录当前图片的位置
    var imgIndex = 0;
    //给焦点添加点击事件
    $('#dianBox li').click(function(){
        //焦点切换
        $(this).addClass('dian').siblings('li').removeClass('dian');
         //点击焦点实现图片切换 图片向左移动
         imgIndex++;
        //焦点和图片同步
         imgIndex = $(this).index();
         var move = -imgIndex*$('.box-l').width();
         $('#imgBox').stop().animate({left:move},500);
    });

    //右箭头添加点击事件
    $('#arrowRight').click(function(){
        imgIndex++;
        if(imgIndex >3){
            //瞬间回到第一张图
            $('#imgBox').css('left',0);
            imgIndex = 1;
        }
        //移动ul的left值
        var move = -imgIndex*$('.box-l').width();
        //添加动画移动ul
        $('#imgBox').stop().animate({left:move},500);
        console.log(move);
        
        //实现焦点的切换
        if(imgIndex ==3){//索引等于3是焦点切换到第一个
            $('#dianBox li').eq(0).addClass('dian').siblings().removeClass('dian');
        }
            $('#dianBox li').eq(imgIndex).addClass('dian').siblings().removeClass('dian');
    });

    //左箭头点击事件
       $('#arrowLeft').click(function(){
           imgIndex--;
           if(imgIndex < 0){
               $('#imgBox').css('left',-1380);
               imgIndex = 2;
           }
           var move = -imgIndex*$('.box-l').width();
           $('#imgBox').stop().animate({left:move},500);
           console.log(move);
           $('#dianBox li').eq(imgIndex).addClass('dian').siblings().removeClass('dian'); 
       });

       //添加定时器
       var timer = setInterval(function(){
           $('#arrowRight').click()
       },2000);
      //当鼠标移入取消定时器
       $('.box-l').mouseenter(function(){
           clearInterval(timer);
       });
       //当鼠标离开时重启定时器
       $('.box-l').mouseleave(function(){
           timer = setInterval(function(){
               $('#arrowRight').click()
           },2000)
       })
})
//底部footer
$(function(){
    $('.footer .code2d a').click(function () {
        $('.footer .code2d img').toggle()
    })
})