		
			$(document).ready(function() {
			    
			    var slides = $('.slide');
			    var slideIndex = 0;
			    
			    // Show the first slide
			    $(slides[slideIndex]).show();
			        // Set interval to change slides
					    setInterval(function() {
					      $(slides[slideIndex]).fadeOut();
					      
					      // Increment index or reset to 0
					     slideIndex = (slideIndex + 1) % slides.length;
					      
					      // Show the next slide
					      $(slides[slideIndex]).fadeIn();
					 }, 3000); 
			 });
