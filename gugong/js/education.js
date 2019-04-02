// 鼠标移入边框变色 字体变色
$('.hd1-2 li').mouseover(function () {
    var index = $(this).index();
    // console.log(index);       
    $('.hd1-2 li .t1').eq(index).css('borderBottom', ' 1px solid #9f7b4b');
    $('.hd1-2 li .t2').eq(index).css('color', '#9f7b4b');
}).mouseout(function () {
    $('.hd1-2 li .t2').css('color', '#474747');
    $('.hd1-2 li .t1').css('borderBottom', ' 1px solid #e7e7e7');
})
$(window).scroll(function () {
    if (scrollY >= 1500) {
        $('.w-1 .img2').animate({
            opacity: 1,
            left: '-210px',
        }, 2000);
    }
    // console.log(scrollY);
});
$(window).scroll(function () {
    if (scrollY >= 2300) {
        $('.w-3 .img2').animate({
            opacity: 1,
            left: '-220px',
        }, 2000);
    }
    console.log(scrollY);
})
$(window).scroll(function () {
    if (scrollY >= 2000) {
        $('.w-2 .img2').fadeIn(2000);
    }
})
$(window).scroll(function () {
    if (scrollY >= 2300) {
        $('.w-4 .img2').fadeIn(2000);
    }

})
$(window).scroll(function () {
    if (scrollY >= 3200) {
        $('.box .girl').animate({
            opacity: 1,
            left: '-200px',
        });
    }

})

$(function () {
    // 鼠标移入边框变色 字体变色
    $('.hd1-2 li').mouseover(function () {
        var index = $(this).index();
        // console.log(index);       
        $('.hd1-2 li .t1').eq(index).css('borderBottom', ' 1px solid #9f7b4b');
        $('.hd1-2 li .t2').eq(index).css('color', '#9f7b4b');
    }).mouseout(function () {
        $('.hd1-2 li .t2').css('color', '#474747');
        $('.hd1-2 li .t1').css('borderBottom', ' 1px solid #e7e7e7');
    })
    $(window).scroll(function () {
        if (scrollY >= 1500) {
            $('.w-1 .img2').animate({
                opacity: 1,
                left: '-210px',
            }, 2000);
        }
        // console.log(scrollY);
    });
    $(window).scroll(function () {
        if (scrollY >= 2300) {
            $('.w-3 .img2').animate({
                opacity: 1,
                left: '-220px',
            }, 2000);
        }
        console.log(scrollY);
    })
    $(window).scroll(function () {
        if (scrollY >= 2000) {
            $('.w-2 .img2').fadeIn(2000);
        }
    })
    $(window).scroll(function () {
        if (scrollY >= 2300) {
            $('.w-4 .img2').fadeIn(2000);
        }

    })
    $(window).scroll(function () {
        if (scrollY >= 3200) {
            $('.box .girl').animate({
                opacity: 1,
                left: '-200px',
            });
        }

    })



    //  $('.w-1 .img2').animate({
    //      opacity:1,
    //      left:'-210px',
    //  },2000) 
    // 
    //  轮播图
    // var index = 0;
    // $('.nav-r').click(function(){
    //  index++;
    //  if(index>4){
    //     $('.chlid-c1').css('left','0');
    //     index = 1;
    //  }
    //  var move = -index*$('.chlid-c1').width();
    //                 console.log(move);
    //                 $('.chlid-c1').stop().animate({left:move},500);
    // })


})


//  $('.w-1 .img2').animate({
//      opacity:1,
//      left:'-210px',
//  },2000)