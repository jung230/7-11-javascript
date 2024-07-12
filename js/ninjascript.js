$(function(){

    
    $(".tt").click(function(){
        var me = $(this).children("h2"); // 펼침
        var sib = $(this).siblings().children("h2"); // 닫힘
        

            // if(조건식){
            //     조건에 참일 때
            // }else{
            //     조건에 거짓일 때
            // }//if

        if( me.hasClass("on") == true ){
            // on 있을 때는 removeClass 이미지와 p 보이지 않게
            me.removeClass("on");
            me.prev().fadeOut();
            me.next().slideUp();
        }else{
            // on 없을 때는 removeClass 이미지와 p 보이게
            me.addClass("on");
            me.prev().fadeIn();
            me.next().slideDown();

            sib.removeClass("on");
            sib.prev().fadeOut();
            sib.next().slideUp();
        }
    })// tt click
    
    $(".logo").click(function(){
        $(".ninja h2").removeClass("on");
        $(".ninja img").fadeOut("on");
        $(".ninja p").slideUp("on");
    })



})// jquery