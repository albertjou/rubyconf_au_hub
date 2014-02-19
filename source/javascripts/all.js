$(document).ready(function() {
	
	//Set active call for main nav
	$(function() {
	  if(location.pathname.split("/")[1] == "")
	  {
	    $('nav ul li a.home').addClass('active');
	    originalNav = $('nav#main').html();
	  } 
	  else
	  {
		  $('nav ul li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
		  originalNav = $('nav#main').html();
	  }
	  //Responsive Nav
		if ($(window).width() <= 645)
		{	
			$('nav#main ul li a.active').parent().prependTo('nav#main ul');
			$('nav#main ul li a.active').removeAttr("href");
		}
		else if($(window).width() > 645)
		{
			$('nav#main ul').replaceWith(originalNav);
		}

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
				// Get the parent wrapper that contains the two talks
				// This will be used to toggle the active state of the two talks
				var session = $(this).parent().parent();
				
				$(session).children().each(function(){
					$(this).removeClass('active');
				})

				$(this).parent().addClass('active');	
			}
			isActive = false


			
			// Now we create/update the cookie to remember our selections
			
			var activeTitles = [];
			
			// Grab each checked event and add it to the array
			
			$('.article-wrapper.active').each(function(){
  			   activeTitles.push($(this).data('title'));
			});
        
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
  
  // Create the dropdown base
  // $("<select />").appendTo("nav");
  
  // // Create default option "Go to..."
  // $("<option />", {
  //    "selected": "selected",
  //    "value"   : "Menu",
  //    "text"    : '' 
  // }).appendTo("nav select");
  
  // // Populate dropdown with menu items
  // $("nav a").each(function() {
  //  var el = $(this);
  //  $("<option />", {
  //      "value"   : el.attr("href"),
  //      "text"    : el.text()
  //  }).appendTo("nav select");
  // });

  // $("nav select").change(function() {
  //   window.location = $(this).find("option:selected").val();
  // });
	
	if ($(window).width() <= 990)
	{	
		$('.ninefold_logo_container').insertAfter('.site-title');
	}	
	else if($(window).width() > 990)
	{
		$('.ninefold_logo_container').insertBefore('.site-title');
	}

	
	
	if ($(window).width() <= 645)
	{	
		$('nav#main ul li a.active').parent().prependTo('nav#main ul');
		$('nav#main ul li a.active').removeAttr("href");
		$('.speaker-box').each(function(){
			$(this).find('.avatar-frame').insertBefore($(this).find('.article-header'));
		});
	}
	else if($(window).width() > 645)
	{

	}
	$('nav#main').click(function(){
		if ($(window).width() <= 645){
			if($('nav#main ul').height() == 50){
				$('nav#main ul').animate({"height": "+150px"})


			}
			else{
				$('nav#main ul').animate({"height": "50px"})

			}
		}
	});
});



$(window).resize(function(){


	if ($(window).width() <= 990)
	{	
		$('.ninefold_logo_container').insertAfter('.site-title');
	}	
	else if($(window).width() > 990)
	{
	  $('.ninefold_logo_container').insertBefore('.site-title');
	}

	//Responsive Nav
	if ($(window).width() <= 645)
	{	
		$('nav#main ul li a.active').parent().prependTo('nav#main ul');
		$('nav#main ul li a.active').removeAttr("href");
		$('.speaker-box').each(function(){
			$(this).find('.avatar-frame').insertBefore($(this).find('.article-header'));
		});
	}
	else if($(window).width() > 645)
	{
		$('nav#main ul').replaceWith(originalNav);			
	}
	

});	
