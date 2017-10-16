$(document).ready(function(){
	$(".about").on('click',function(e){
		e.preventDefault();
		$(".modal-intro").addClass("visible");
	});

	$(".modal-intro").on('click', function(){
		$(this).removeClass("visible");
	});
});