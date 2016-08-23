



window.onload = function(){

	//thumbnail img
	
	var fadeInSection = document.getElementById('header');
	var bottom_of_object, plx, bottom_of_window;


	if(document.getElementById('header') !=undefined){
		plx = document.getElementById('header');
	}

		window.onscroll = function(){

		if(screen.width >= 800) {
			if(window.scrollY>0){
				document.getElementById('header').style.transition='opacity, 1s, ease-out';
				document.getElementById('header').style.height='255px';
			}else{
				document.getElementById('header').style.transition='opacity, 1s, ease-out';
				document.getElementById('header').style.height='80vh';
			}
		}

			//fade in content effect
			if (fadeInSection!=undefined) {
				
				//bottom_of_object = contentList[i].getBoundingClientRect().bottom + ;
				bottom_of_object = fadeInSection.getBoundingClientRect().top;
				bottom_of_window = window.scrollY;

				if(bottom_of_window > bottom_of_object && fadeInSection.className.indexOf('fade-in-active') == -1){

					console.log('active.....');
					fadeInSection.className += " fade-in-active";					

				}

			}

		/*
		$('.index-section').each( function(i){

        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

		        /* If the object is completely visible in the window, fade it it */
		        /*
		        if( bottom_of_window > bottom_of_object ){

		            $(this).animate({'opacity':'1'},500);
		            $(this).animate({'bottom':'0'},500);

		        }    
		    }); 
		*/

	}	
}
