$(document).ready(()=>{
    $("#menubar").click(()=>{
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    })
    $(window).on("scroll load",()=>{
        $("#menubar").removeClass('fa-times');
        $('header').removeClass('toggle');
         
        if($(window).scrollTop()>0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    })

$('a[href="#"]').on('click',(e)=>{
    e.preventDefault();
    $('html,body').animate({
        scrollTop:$($(this).attr('href')).offset().top,

    },500,"linear");
})
})
