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

	// Récupération de la div
	var div = document.getElementById('8mort6blesse');
	var input = document.getElementById("site-search").value;
	var xhr = new XMLHttpRequest(),
    method = "GET",
    url = 'http://localhost:3000/beer/search?search=' + input;
	// Requête à l'API
	xhr.open(method, url, true);
	xhr.onreadystatechange = function () {
  	if(xhr.readyState === 4 && xhr.status === 200) {
		// Clear des recherches
		div.innerHTML = "";
		var beerTab = JSON.parse(xhr.responseText);
		beerTab.forEach(element => {
			// Récupération des informations texte des bières recherchées
			var name = element.name;
			var price = ", " + element.price + " $ : ";
			var desc = element.description;
			var imgUrl = element.photo;
			var txt = document.createElement('p');
			// Modification du CSS
			txt.style.letterSpacing = "1px";
			txt.style.borderTop = "thick solid #faa381";
			txt.style.lineHeight = "1.5";
			txt.style.marginLeft = "15px";
			txt.style.marginRight = "15px";
			txt.style.textAlign = "center";
			// Récupération de l'image des bières
			var img = document.createElement('img');
			txt.innerText = name + price + desc;
			img.src = imgUrl;
			img.style.height = '300px';
			img.style.marginLeft = '1000px';
			// Affichage du texte et des images
			div.appendChild(txt);
			div.appendChild(img);
		});
  	}
};
xhr.send();
}

loadDoc();