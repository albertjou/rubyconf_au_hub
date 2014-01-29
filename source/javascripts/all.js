//= require_tree .
$(document).ready(function() {

	//Set active call for main nav
	$(function() {
	  $('nav ul li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
	});
	
	//Set active class to scheduler nav and sheduler hidden pages 
	$(function() {
	  $('#conf-days ul li').click(function(){
	  	$('#conf-days ul li').each(function(){
		  	$(this).removeClass('active')
	  	})
	  	$(this).addClass('active')
	  	
	  	var slideFrame = $(this).data('slide-id');
			$('.slide-frame').each(function(){
				$(this).removeClass('active')
			});
			
			$('.slide-frame.'+slideFrame).addClass('active');
	  	
	  });
	});
	
	// Set active class when clicking scheduler check
	$(function() {
		var isActive = false;
		$('.check-area').click(function(){
			if($(this).parent().hasClass('active')){ isActive = true;}
			if(isActive)
			{
				$(this).parent().removeClass('active');
			}
			else
			{
				$(this).parent().addClass('active');	
			}
			isActive = false
		});
	});
	
});	