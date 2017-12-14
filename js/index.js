$(document).ready(function(){
	$(".panel-tab-ul li[data-tab]").click(function(){
		$(".tabContent").css("display","none");
		$("."+$(this).data("tab")).fadeIn("slow");
	});
});