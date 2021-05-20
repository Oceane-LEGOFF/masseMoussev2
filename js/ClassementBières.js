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

	var div = document.getElementById('8mort6blesse');
	var input = document.getElementById("site-search").value;
	var xhr = new XMLHttpRequest(),
    method = "GET",
    url = 'http://localhost:3000/beer/search?search=' + input;

	xhr.open(method, url, true);
	xhr.onreadystatechange = function () {
  	if(xhr.readyState === 4 && xhr.status === 200) {
		div.innerHTML = "";
		var sheesh = JSON.parse(xhr.responseText);
		sheesh.forEach(element => {
			var name = element.name;
			var price = ", " + element.price + " $ : ";
			var desc = element.description;
			var imgUrl = element.photo;
			var txt = document.createElement('p');
			var img = document.createElement('img');
			txt.innerText = name + price + desc;
			img.src = imgUrl;
			img.style.height = '200px';
			div.appendChild(txt);
			div.appendChild(img);
		});
  	}
};
xhr.send();
}

loadDoc();