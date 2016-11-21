window.onload = function(){

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
	}	
}
