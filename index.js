$(function(){
    var database=[
        {name:'演员',src:'mp3/薛之谦 - 演员.mp3',singer:'薛之谦',zhuanji:'绅士',time:'04:21',img:'zhuanji/yanyuan.png'},
        {name:'突然好想你',src:'mp3/五月天 - 突然好想你.mp3',singer:'五月天',zhuanji:'后青春期的诗',time:'04:21',img:'zhuanji/turanhaoxiangni.png'},
        {name:'sugar',src:'mp3/Maroon 5 (魔力红乐团) - Sugar (糖果).mp3',singer:'Maroon ',zhuanji:'sugar',time:'04:37',img:'zhuanji/sugar.png'},
        {name:'关不上的窗',src:'mp3/周传雄 - 关不上的窗.mp3',singer:'周传雄',zhuanji:'恋人创世纪',time:'04:53',img:'zhuanji/guanbushangdechuang.png'},
        {name:'那些花儿',src:'mp3/朴树 - 那些花儿.mp3',singer:'朴树',zhuanji:'我去2000年',time:'05:03',img:'zhuanji/naxiehuaer.png'},
        {name:'最初的梦想',src:'mp3/范玮琪 - 最初的梦想.mp3',singer:'范玮琪',zhuanji:'最初的梦想',time:'04:56',img:'zhuanji/zuichudemengxiang.png'},
        {name:'我们都一样',src:'mp3/张杰 - 我们都一样.mp3',singer:'张杰',zhuanji:'明天过后',time:'05:03',img:'zhuanji/womendouyiyang.png'},
        {name:'我的天空',src:'mp3/南征北战 - 我的天空.mp3',singer:'南征北战',zhuanji:'青春派',time:'03:54',img:'zhuanji/wodetiankong.png'},
        {name:'光荣',src:'mp3/BOBO - 光荣.mp3',singer:'BOBO',zhuanji:'光荣',time:'03：32',img:'zhuanji/guangrong.png'},
        /*{name:'Almost Lover',src:'mp3/Jasmine Thompson  - Almost Lover.mp3',singer:'Jasmine Thompson',zhuanji:'Bundle of Tantrums',time:'04:22',img:'zhuanji/Almost Lover.png'},*/
        {name:'梦中的婚礼',src:'mp3/Richard Clayderman - 梦中的婚礼.mp3',singer:'Richard Clayderman',zhuanji:'钢琴曲精选',time:'02:42',img:'zhuanji/mengzhongdehunli.png'},
        {name:'手掌心',src:'mp3/丁当 - 手掌心(电视剧《兰陵王》片尾曲).mp3',singer:'丁当',zhuanji:'兰陵王 电视原声带',time:'04:16',img:'zhuanji/shouzhangxin.png'},
        {name:'巴黎夜雨',src:'mp3/孙子涵 - 巴黎夜雨.mp3',singer:'孙子涵',zhuanji:'涵剧先森',time:'04:21',img:'zhuanji/baliyeyu.png'},
        {name:'画心',src:'mp3/张靓颖 - 画心(画皮 电影主题曲).mp3',singer:'张靓颖',zhuanji:'画皮 电影原声带',time:'07:12',img:'zhuanji/huaxin.png'},
        {name:'为你而活',src:'mp3/神木与瞳 - 为你而活.mp3',singer:'神木与瞳',zhuanji:'为你而活 电视原声带',time:'04:42',img:'zhuanji/weinierhuo.png'}
    ];

    var index=0;
    function dawlist(){
        $('.play-list').empty();
        $.each(database,function(i,v){
            if(i===index){
                // $('<li>').addClass('active').text(v.name+"--"+v.singer).appendTo('.play-list')
                $('<li id='+ i +'><div class="kuai" style="width: 10px;height: 10px;float: left;' +
                    'margin-top: 19px;margin-right: 3px; background: url(./img/wave.gif) no-repeat left center"></div><span class="sp1">'+v.name+'<div class="icon" style="visibility:visible;"><div class="icon1"></div><div class="icon2"></div><div class="icon3"></div><div class="icon4"></div></div></span><span class="sp2">'+v.singer+'</span><span class="sp3">'+v.zhuanji+'</span><span class="sp4">'+v.time+'</span></li>').addClass("active").css("background-img", "url(img/wave.gif);").appendTo('.play-list')
            }else{

                $('<li id='+ i +'><span class="sp1">'+v.name+'<div class="icon"><div class="icon1"></div><div class="icon2"></div><div class="icon3"></div><div class="icon4"></div></div></span><span class="sp2">'+v.singer+'</span><span class="sp3">'+v.zhuanji+'</span><span class="sp4">'+v.time+'</span></li>').appendTo('.play-list')
            }
        });
    }

    //鼠标移入
$(".play-list").on("mouseenter","li",function () {
    $(this).find(".icon").css('visibility','visible');
});
    $(".play-list").on("mouseleave","li",function () {
        $(".active").find(".icon").css('visibility','visible');
        $(this).find(".icon").css('visibility','hidden');
    })
    //删除
    $(".play-list").on("click",".icon4",function () {
       /* $(this).parentNode.parentNode.parentNode.attr(id).remove();
*/
        var inn=$(this).parent().parent().parent().attr('id');
        database.splice(inn,1);
        dawlist();

    })
    //点击列表播放
    dawlist();
    $(".play-list").on("click",".icon1",function () {
        $(this).parent().css('visibility','visible');
        $(this).css("background","url(./img/icon_21.png) no-repeat center center");
        index=$(this).parent().parent().parent().index();
        audio.src=database[index].src;
        audio.play();

    })



//点击li播放
   /* dawlist();
    $('.play-list').on('click','li',function(){
        if(audio.paused){
            index=$(this).index();
            audio.src=database[index].src;
            audio.play();
        }else{
            audio.pause();
        }

    })*/

//点下一首
   /* $('.xiayishou').on('click',function(){
        index++;
        if(index===database.length){
            index=0;
        }
        audio.src=database[index].src;
        audio.play();
    })*/

//当前这首播放完
    $('audio').on('ended',function() {
        if( $('.xunhuan').hasClass('danqu')) {
            index = index;
            if(index===database.length){
                index=0;
            }
        }
        else if ($('.xunhuan').hasClass('shunxu')) {
            index++;
            if(index===database.length){
                index=0;
            }
        }
        else if ($('.xunhuan').hasClass('suiji')) {
            index = parseInt(Math.random() * (database.length - 1));
            if(index===database.length){
                index=0;
            }

        }else{
            index++;
            if(index===database.length){
                index=0;
            }
        }
        audio.src=database[index].src;
        audio.play();
    })
//点击下一首
    $('.xiayishou').on('click',function() {
        if( $('.xunhuan').hasClass('danqu')) {
            index = index;
            if(index===database.length){
                index=0;
            }
        }
        else if ($('.xunhuan').hasClass('shunxu')) {
            index++;
            if(index===database.length){
                index=0;
            }
        }
        else if ($('.xunhuan').hasClass('suiji')) {
            index = parseInt(Math.random() * (database.length - 1));
            if(index===database.length){
                index=0;
            }

        }else{
            index++;
            if(index===database.length){
                index=0;
            }
        }
        audio.src=database[index].src;
        audio.play();
    })
//循环方式切换
    var s=0;
    $('.nav li').on('click',function(){
        s+=1;
        if(s%2==1){
            $(".nav li").css("color","#5f6061");
            if($(this).hasClass("danqu")){
                $('.xunhuan').addClass("danqu");
            }else if($(this).hasClass("shunxu")){
                $('.xunhuan').addClass("shunxu");
            }else if($(this).hasClass("suiji")){
                $('.xunhuan').addClass("suiji");
            }
            $(this).css("color","#fff");
            console.log(s)
        }else{
            $(".nav li").css("color","#5f6061");
            var str=$('.xunhuan').attr("class");
            var arr=str.split(" ");
            $('.xunhuan').removeClass(arr[1]);
            if($(this).hasClass("danqu")){
                var str=$('.xunhuan').attr("class");
                var arr=str.split(" ");
                $('.xunhuan').removeClass(arr[1]);
                $('.xunhuan').addClass("danqu");
            }else if($(this).hasClass("shunxu")){
                var str=$('.xunhuan').attr("class");
                var arr=str.split(" ");
                $('.xunhuan').removeClass(arr[1]);
                $('.xunhuan').addClass("shunxu");
            }else if($(this).hasClass("suiji")){
                var str=$('.xunhuan').attr("class");
                var arr=str.split(" ");
                $('.xunhuan').removeClass(arr[1]);
                $('.xunhuan').addClass("suiji");
            }
            $(this).css("color","#fff");
        }


    })

//上一首
    $('.shangyishou').on('click',function(){
        index--;
        if(index===-1){
            index=database.length-1;
        }
        audio.src=database[index].src;
        audio.play();
    })

    var audio=$('audio').get(0);
    $('.bofang-zanting').on('click',function(){
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }

    })
    audio.onplay=function(){
        $('.bofang-zanting').addClass('zanting')
        dawlist();
    }
    audio.onpause=function(){
        $('.bofang-zanting').removeClass('zanting')
    }
    
    
    /*分转化为秒*/
    function format(second){
        var m=parseInt(second/60);
        var s=parseInt(second%60);
        s=(s < 10)?( '0' + s):s;
        m=(m<10)?('0'+m):m;
        var time=m + ":" + s;
        return time;
    }


//歌曲播放进度
    audio.ontimeupdate=function(){
        var jindu=($('.jindu').width()-$('.jindu .yuan').width()/2)*audio.currentTime/audio.duration;
        $('.dangqianshichang').text(format(audio.currentTime));
        $('.zongshichang').text(format(audio.duration));
        $('.play-current').css({width:jindu})
        $('.jindu .yuan').css({left : $('.jindu').width()*(audio.currentTime/audio.duration)});
        $('.geming').text(database[index].name+'-'+database[index].singer)
        $('.img').css('background-image', 'url('+database[index].img+')')

    }
    $('.jindu .yuan').on("click",false);
    $('.jindu').on('click',function(e){

        audio.currentTime=audio.duration*(e.offsetX - $(this).find('.yuan').width()/2)/$(this).width();
    })

    $('.yinliangshezhi').on('click',function(e){

        audio.volume=(e.offsetX - $(this).find('.yuan').width()/2)/$(this).width();
    })

    $('.yinliang').on('click',function(){
        if( $(this).attr('pre-v') ){
            audio.volume=$(this).attr('pre-v');
            $(this).removeAttr('pre-v');
            $(this).css("backgroundImage","url(img/yl.png)");
        }else{
            $(this).attr('pre-v',audio.volume)
            $(this).css("backgroundImage","url(img/jing.png)");
            audio.volume=0;
        }
    });
    $('.yinliangshezhi .yuan').on("click",false);
    audio.onvolumechange=function(){
        if(audio.volume===0){
            $('.yinliangshezhi').addClass('voice')
        }else{
            $('.yinliangshezhi').removeClass('voice')

        }
        $('.yinliangshezhi .yuan').css({left : $('.yinliangshezhi').width()*audio.volume});
    }


    //拖动进度条
    $('.jindu .yuan').on('mousedown',function(){
        $(document).on('mousemove',function(e){
            var nbj=(e.pageX-$('.jindu').offset().left)/$('.jindu').width()*audio.duration;
            nbj=nbj>=audio.duration?audio.duration:nbj;
            nbj=nbj<=0?0:nbj;
            audio.currentTime=nbj;
        });
        $(document).on('mouseup',function(){
            $(document).off('mousemove')
            $(document).off('mouseup')
        })

    })


    //音量拖动
    $('.yinliangshezhi .yuan').on('mousedown',function(e){
        $(document).on('mousemove',function(e){
            var m=(e.pageX-$('.yinliangshezhi').offset().left)/$('.yinliangshezhi').width();
            m=(m>1)?1:m;
            m=(m<0)?0:m;
            audio.volume=m;
        })
        $(document).on('mouseup',function(){
            $(document).off('mousemove')
        })
    })
    var flag=true;
    $(".xunhuan").on("click",function () {
        if(flag){
            flag=false;
            $(".nav").css("display","block");
        }else{
            flag=true;
            $(".nav").css("display","none");
        }
        })




})