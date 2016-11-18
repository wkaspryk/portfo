window.onload = function(){
	var fadeInSection = document.getElementById('header');
	var bottom_of_object, plx, bottom_of_window;

	if(document.getElementById('header') !=undefined){
		plx = document.getElementById('header');
	}

		window.onscroll = function(){

		if(screen.width >= 800) {
			if(window.scrollY>0){
				document.getElementById('header').style.transition='opacity, 1s, ease-out';
				document.getElementById('header').style.height='155px';
				document.getElementById('header').style.opacity='.0';
			}else{
				document.getElementById('header').style.transition='opacity, 1s, ease-out';
				document.getElementById('header').style.height='80vh';
				document.getElementById('header').style.opacity='1';
			}
		}

			//fade in content effect
			if (fadeInSection!=undefined) {
				
				//bottom_of_object = contentList[i].getBoundingClientRect().bottom + ;
				bottom_of_object = fadeInSection.getBoundingClientRect().top;
				bottom_of_window = window.scrollY;

				if(bottom_of_window > bottom_of_object && fadeInSection.className.indexOf('fade-in-active') == -1){

					fadeInSection.className += " fade-in-active";					

				}

			}
	}	
}
