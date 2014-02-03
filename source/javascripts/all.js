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
			
			// Now we create/update the cookie to remember our selections
			
			var activeTitles = [];
			
			// Grab each checked event and add it to the array
			
			$('.article-wrapper.active').each(function(){
  			   activeTitles.push($(this).data('title'));
			});
        console.log(activeTitles);
        
      // Function for creating cookies
      
      function setCookie(cname,cvalue,exdays)
      {
        var d = new Date();
        d.setTime(d.getTime()+(exdays*24*60*60*1000));
        var expires = "expires="+d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
      } 
      
      
      setCookie('multifaceted_scheduler', activeTitles, 100); 
			
		});
		
		
		
	});
	
	// Function to retrive a cookie
	function getCookie(cname)
  {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
      {
      var c = ca[i].trim();
      if (c.indexOf(name)==0) return c.substring(name.length,c.length);
      }
    return "";
  }
	
	
	function checkCookie()
  {
    // Grab the cookie and split it into an array
    var cookie = getCookie("multifaceted_scheduler");
    var checkedEvents = cookie ? cookie.split(/,/) : new Array();
    
    // Loop through the array and add active class to checked events
    if (checkedEvents!="")
    {
      checkedEvents.forEach(function(item){
         $('.article-wrapper').each(function(){
            if($(this).data('title') == item){
              $(this).addClass('active');
            }
         });
      });
    }
  }
  
  checkCookie();
	
});	