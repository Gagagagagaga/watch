$(document).ready(function(){
	var i;

	for (i=0; i < $(".partners_list a").length; i++){
		$(".partners_list a").eq(i).css("backgroundImage", "url('img/partners/" + (i+1) + ".png')")	
	};

});