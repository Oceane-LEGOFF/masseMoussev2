$(function(){
	$(document).on('scroll',function(){ // Détection du scroll
		
		// Calcul de la hauteur "utile"
		var hauteur = $(document).height()-$(window).height();
		
		// Récupération de la position verticale
		var position = $(document).scrollTop();

		// Récupération de la largeur de la fenêtre
		var largeur = $(window).width();

		// Calcul de la largeur de la barre		
		var barre = position / hauteur * largeur;
		
		// Modification du CSS pour élargir ou réduire la barre		
		$("#progress").css("width",barre);
	});
});


function loadDoc() {
	
var input = document.getElementById("site-search").value;
var xhr = new XMLHttpRequest(),
    method = "GET",
    url = 'http://localhost:3000/beer/search?search=' + input;

xhr.open(method, url, true);
var div = document.getElementById('8mort6blesse');
div.innerText = "";
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
	var sheesh = JSON.parse(xhr.responseText);
	sheesh.forEach(element => {
		div.innerText += (element.name);
	});
  }
};
xhr.send();
}

loadDoc();