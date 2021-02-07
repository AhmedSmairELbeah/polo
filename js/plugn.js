$(function(){

    $(".bolets li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $("."+$(this).data("img")).css("z-index", "1").siblings().css("z-index" , "-1")
    });
    //backgroundColor in the navbar
    $(window).scroll(function(){
        if($(window).scrollTop()>=100)
        {
            $(".navbar").css({
                background:"rgb(8, 49, 202)",
                boxShadow:"rgb(43, 143, 202) 0px -3px 19px 11px"
            })
        }else
        {
            $(".navbar").css({
                backgroundColor:"transparent",
                boxShadow:"none"
            }) 
        }
    });
    //acorrdwon
    $(".about .acrrdown h2").click(function(){

        $(".about .acrrdown p").slideToggle();
        $(".about .acrrdown h2 i:nth-of-type(2)").toggleClass("fa-plus fa-minus");
    })
});