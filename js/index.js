$(document).ready(function() {
    /*$(".panel-tab-ul li[data-tab]").click(function(){
    	$(".tabContent").css("display","none");
    	$("."+$(this).data("tab")).fadeIn("slow");
    });*/

    /*页面初次显示动画*/
    var imgsArray = $(".my-hobby-ul>li>img");
    if (!Tools.isOldIE) {
        new WOW().init();
        imgsArray.each(function() {
            $(this).attr("src", "./images/" + $(this).data("imgsrcname") + ".svg");
        });
    } else {
        imgsArray.each(function() {
            $(this).attr("src", "./images/" + $(this).data("imgsrcname") + ".png");
        });
    }

});