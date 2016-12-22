 $(document).ready(function(){
    $(".ad_hd li").hover(function(event){
     $(this).addClass("current").siblings().removeClass("current");
    	$(".ad_bd ul").eq($(this).index()).show().siblings().hide();
	});
 });
                           