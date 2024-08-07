function hide(){
	dots = document.getElementById('dots');
	tohide = document.getElementById('tohide');
	btn1 = document.getElementById('btn1');

	if(tohide.style.display ==="none")
	{
		dots.style.display = "none";
		btn1.innerHTML = "Read less";
		tohide.style.display = "inline";
	}else{
		dots.style.display = "inline";
		btn1.innerHTML = "Read More";
		tohide.style.display = "none";
	}
}
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

	