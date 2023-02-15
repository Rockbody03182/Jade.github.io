$(document).ready(function(){

});
//<![CDATA[
			var num = 1; 

			function prevGallery(){
				num--; 
				if ( num < 1) num = 7; 
				document.getElementById('parent').src = 'images/products/product'+num+'.png'; 
				
				return false;
			}

			function nextGallery(){
				num++; 
				if ( num > 7) num = 1; 
				document.getElementById('parent').src = 'images/products/product'+num+'.png';
			
				return false;
				
			
			}
		//]]>