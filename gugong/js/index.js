$(function(){
    //头部点击事件
    $('.tools .me img').click(function(){
        $('.navbar').show()
    })
    $('.popWindow .close').click(function(){
        $('.navbar').hide()
    })
    //鼠标移入显示下三角
    $('.header .nav_main li').mouseenter(function(){
        $(this).children('b').css('visibility','visible');
        $(this).siblings('li').children('b').css('visibility','hidden');
        $('.header .nav_child .child').eq($(this).index()).show().siblings().hide();
    })
    $('.header .nav_main li').mouseleave(function(){
        $(this).children('b').css('visibility','hidden');
    })
    $('.top').mouseenter(function(){
        $('.header .nav_child .child').hide();
    })

    //
    $('.tools .login').hover(function(){
        $('.loginbox').toggle();
    })
    $('.tools .lang').hover(function(){
        $('.language').toggle();
    })
    $('.tools .scbtn').hover(function(){
        $('.search').toggle();
    })

    //轮播图
    var imgIndex = 0;
    //点击右箭头
    $('.arrowr').click(function(){
        imgIndex++;
        if(imgIndex > 4){
            imgIndex = 0;
        }
        //当前的li淡入,他的兄弟淡出
        // $('.breathe li').eq(imgIndex).stop().fadeIn().siblings('li').stop().fadeOut();
        $('.breathe li').eq(imgIndex).addClass('current').siblings('li').removeClass('current');
        //圆点切换
        $('.circle li').eq(imgIndex).addClass('active').siblings('li').removeClass('active')
    })

    //点击左箭头
    $('.arrowl').click(function(){
        imgIndex--;
        if(imgIndex < 0){
            imgIndex = 4;
        }
        //当前的li淡入,他的兄弟淡出
        // $('.breathe li').eq(imgIndex).stop().fadeIn().siblings('li').stop().fadeOut();
        $('.breathe li').eq(imgIndex).addClass('current').siblings('li').removeClass('current');
        //圆点切换
        $('.circle li').eq(imgIndex).addClass('active').siblings('li').removeClass('active')
    })

    //点击圆点
    $('.circle li').click(function(){
        imgIndex = $(this).index();
        //当前的li淡入,他的兄弟淡出
        $(this).addClass('active').siblings('li').removeClass('active');
        // $('.breathe li').eq(imgIndex).stop().fadeIn().siblings('li').stop().fadeOut();
        $('.breathe li').eq(imgIndex).addClass('current').siblings('li').removeClass('current');
    })

    //定时切换
    var timer = setInterval(function(){
        $('.arrowr').click();
    },3000)

    $('.top').hover(function(){
        clearInterval(timer)
    },function(){
        timer = setInterval(function(){
            $('.arrowr').click();
        },3000)
    });

    $('span').mouseenter(function(){
        $('.arrowl').css('opacity',1);
        $('.arrowr').css('opacity',1);
    }).mouseleave(function(){
        $('.arrowl').css('opacity',0);
        $('.arrowr').css('opacity',0);
    })

    //图片缓慢显示
    


    //侧边固定导航栏
    $(window).scroll(function(){
        //图片缓慢显示
        if(scrollY>=300){
            $('.content').animate({
            top:0,
            },1000)
        }
        if(scrollY>=500){
            $('.onebt-con ul').show(3000);
        }
        // console.log($(document).scrollTop());
        if($(document).scrollTop()>1200){
            $('.subnav').show();
        }else{
            $('.subnav').hide();
        }
        if($(document).scrollTop()>1300&& $(document).scrollTop()<1390){
            var a =0;
	        var timer1 = setInterval(function(){
		    a += 5000;
		    if(a>=1862690){
		        a = 1+','+862+','+690;
		        clearInterval(timer1);
		    }
		    $('.num b').text(a);
            },5);
        }
    })

    // .refer点击事件
    $('.refer').click(function(){
        $('.pop-type').show();
    })
    $('.pop-type .close1').click(function(){
        $('.pop-type').hide();
    })

    var s=new sHover("sHoverItem","sIntro");
    s.set({
        slideSpeed:5,
        opacityChange:true,
        opacity:80
    });
    var x=new sHover("public","mask");
    x.set({
        slideSpeed:5,
        opacityChange:true,
        opacity:80
    });

    // 鼠标经过显示.subnav li div
    $('.subnav li').hover(function(){
        $(this).children('div').toggle();
        $(this).children('a').toggle();
    })

    //点击.close ul都隐藏 换背景图
    $('.close').click(function(){
        $('.subnav ul').toggle();
        $(this).toggleClass('cloa').toggleClass('clob');
    })
    
    //回到顶部
    $('.gotop').click(function(){
        $("html,body").animate({scrollTop:0},500);
    })

    //尾部
    $('.footer .code2d a').hover(function(){
        $('.footer .code2d img').toggle()
    })
    
    //浏览建议 start
    $("#footer .btns a").bind("click", function() {
        $("#footer .proposal").animate({
            bottom: 0,
        });
        return false;
    });
    
    $("#footer .proposal").bind("mouseout", function(e) {
        $(this).animate({
            bottom: '-60px',
        });
    });
    //浏览建议  end




    




})