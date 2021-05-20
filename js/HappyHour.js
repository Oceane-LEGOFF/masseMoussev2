
console.log('inside init')
function init() {
    const paris = {
        lat: 48.8566969,
        lng: 2.3514616
    }

    const zoomLevel = 13;
    const map = L.map('mapid').setView([paris.lat, paris.lng], zoomLevel);
    const mainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
   
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 14,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2FudmFsIiwiYSI6ImNrZzZud2VrYTE2NjYyeG81dTB1bTBsMm8ifQ.E_NxlROXHhq-UodTYSsAGg'
});

mainLayer.addTo(map);
let marker 
let someMillisecondValue = Date.now();
let date = new Date();
let hour = date.getHours();
var img = document.createElement ("img"); 
img.src = "Image/biere.png";
img.src ="Image/biereNB.png"
let beerIcon = L.icon({
    iconUrl: 'Image/biere.png',
    iconSize: [45, 45],
    iconAnchor : [0, 45],
    popupAnchor: [22.5, -45],
});

let beerIconNB = L.icon({
    iconUrl : 'Image/biereNB.png',
    iconSize : [45, 45],
    iconAnchor : [0,45],
    popupAnchor : [22.5, -45],
});

marker = L.marker([48.8859366,2.2911862], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>Angelus</b><br>HappyHour de 16h à 22h à 5€<br>4 Place de la Porte de Champerret, 75017 Paris").openPopup();
marker = L.marker([48.8856013,2.2920887], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>Le St Cyr</b><br>HappyHour de 16h à 22h à 7€<br>147 Avenue de Villiers, 75017 Paris").openPopup();
marker = L.marker([48.8847711,2.289338], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>Goupil le Bistrot</b><br>HappyHour de 16h à 22h à ??€<br>4 Rue Claude Debussy, 75017 Paris").openPopup();
marker = L.marker([48.854971,2.370733], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>Le Leche Vin</b><br>HappyHour de 16H à 22H à 3,80€<br>13 Rue Daval, 75011 Paris").openPopup();
marker = L.marker([48.8429884,2.3495493], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>Le Fifth Bar</b><br>HappyHour de 16h00 à  22h00 à 6€<br>62 Rue Mouffetard, 75005 Paris").openPopup();
marker = L.marker([48.862725,2.287592], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>Le Cri du Glaçon</b><br>HappyHour de 17h à 20h à 7€<br>74 Rue Jean-Pierre Timbaud, 75011 Paris").openPopup();
marker = L.marker([48.874089,2.3752436], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>Café Cheri(e)</b><br>HappyHour de 17h à 20h à 3.50€<br>44 Rue de la Villette, 75019 Paris").openPopup();
marker = L.marker([48.874089,2.3752436], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>La Cordonnerie</b><br>HappyHour de 17h à 20h à 2,50€<br>142 Rue Saint-Denis, 75002 Paris").openPopup();
marker = L.marker([48.8512146,2.3785397], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>The Bottle Shop</b><br>HappyHour de 17h à 20h à 5€<br>5 Rue Trousseau, 75011 Paris").openPopup();
marker = L.marker([48.8538078,2.3276035], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>Le Kitch</b><br>HappyHour de 17h à 21h à 5€<br>10 rue Oberkampf 75011 Paris").openPopup();
marker = L.marker([48.8799303,2.3704165], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>La Maison</b><br>HappyHour de 17h à 21h à 4€<br>65 Boulevard de la Villette, 75019 Paris").openPopup();
marker = L.marker([48.8333616,2.353938], {icon : beerIconNB}).addTo(map);
//marker.bindPopup("<b>La Maison</b><br>HappyHour de 17h à 21h à 5,50€<br>62 avenue des Gobelins, 75013 Paris").openPopup();
//marker = L.marker([48.8656828,2.3846983], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>Le Mo'Town</b><br>HappyHour de 17h à 22h à 3,50€<br>116 Boulevard de Ménilmontant, 75020 Paris").openPopup();
marker = L.marker([48.8564018,2.3624948], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>Le Piment Café</b><br>HappyHour de 18h à 21h à 3,50€<br>15 Rue de Sévigné, 75004 Paris").openPopup();
marker = L.marker([48.8618745,2.3423944], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>ACT 21</b><br>HappyHour de 18h à 21h à 5€<br>5 rue Sauval 75001 Paris").openPopup();
marker = L.marker([48.8671573,2.3753889], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>L'Orange Mécanique</b><br>HappyHour de 18h à 20h à 4€b<br>72 Bis Rue Jean-Pierre Timbaud, 75011 Paris").openPopup();
marker = L.marker([48.8869539,2.3474488], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>Au Clair de la Lune</b><br>HappyHour de 18h à 22h à 3,50€<br>name  ").openPopup();
marker = L.marker([48.8768310546875,2.3354170322418213], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>CHEZ BIBI</b><br>HappyHour de 18h à 22h à 4€<br>9 rue Saint Lazare, 75009 Paris").openPopup();
marker = L.marker([48.8624452,2.352598], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>Le Bistrot de l'Horloge</b><br>HappyHour de 17h à 00h à 3,50€<br>7 rue Bernard de Clairvaux, 75003 Paris").openPopup();
marker = L.marker([48.8534008,2.3665925], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>Le Rempart</b><br>HappyHour de 16h à 23h à 4,50€<br>15 rue Saint Antoine, 75004 Paris").openPopup();
marker = L.marker([48.8514857,2.3379094], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>Fubar</b><br>HappyHour de 14h à 22h à 3,50€<br>5 rue Saint Sulpice, 75006 Paris").openPopup();
marker = L.marker([48.8765997,2.3232513], {icon : beerIconNB}).addTo(map);
marker.bindPopup("<b>Le Pub 27</b><br>HappyHour de 15h à 19h à 5€<br>27 Rue de Rome, 75008 Paris").openPopup();

if (hour >= 16 && hour <= 22){
    marker = L.marker([48.8859366,2.2911862], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>Angelus</b><br>HappyHour de 16h à 22h à 5€<br>4 Place de la Porte de Champerret, 75017 Paris").openPopup();
    marker = L.marker([48.8856013,2.2920887], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>Le St Cyr</b><br>HappyHour de 16h à 22h à 7€<br>147 Avenue de Villiers, 75017 Paris").openPopup();
    marker = L.marker([48.8847711,2.289338], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>Goupil le Bistrot</b><br>HappyHour de 16h à 22h à ??€<br>4 Rue Claude Debussy, 75017 Paris").openPopup();
    marker = L.marker([48.854971,2.370733], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>Le Leche Vin</b><br>HappyHour de 16H à 22H à 3,80€<br>13 Rue Daval, 75011 Paris").openPopup();
    marker = L.marker([48.8429884,2.3495493], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>Le Fifth Bar</b><br>Hour tous les jours de 16h00 à  22h00 à 6€<br>62 Rue Mouffetard, 75005 Paris").openPopup();
}

if (hour >= 17 && hour <= 20){
    marker = L.marker([48.862725,2.287592], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>Le Cri du Glaçon</b><br>HappyHour de 17h à 20h à 7€<br>74 Rue Jean-Pierre Timbaud, 75011 Paris").openPopup();
    marker = L.marker([48.874089,2.3752436], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>Café Cheri(e)</b><br>HappyHour de 17h à 20h à 3.50€<br>44 Rue de la Villette, 75019 Paris").openPopup();
    marker = L.marker([48.874089,2.3752436], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>Café Cheri(e)</b><br>HappyHour de 17h à 20h à 3.50€<br>44 Rue de la Villette, 75019 Paris").openPopup();
    marker = L.marker([48.8652592,2.3505143], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>La Cordonnerie</b><br>HappyHour de 17h à 20h à 2,50€<br>142 Rue Saint-Denis, 75002 Paris").openPopup();
    marker = L.marker([48.8512146,2.3785397], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>The Bottle Shop</b><br>HappyHour de 17h à 20h à 5€<br>5 Rue Trousseau, 75011 Paris").openPopup();
    marker = L.marker([48.8538078,2.3276035], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b></b><br>HappyHour de 17h à 20h à 5€<br>5 Rue Trousseau, 75011 Paris").openPopup();
    marker = L.marker([48.8301027,2.3921971], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b></b><br>HappyHour de 17h à 20h à 3,50€<br>117 Bis Boulevard Poniatowski, 75012 Paris").openPopup();
}

if (hour >= 17 && hour <= 21){
    marker = L.marker([48.8630409,2.3685331], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>Le Kitch</b><br>HappyHour de 17h à 21h à 5€<br>10 rue Oberkampf 75011 Paris").openPopup();
    marker = L.marker([48.8799303,2.3704165], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>La Maison</b><br>HappyHour de 17h à 21h à 4€<br>65 Boulevard de la Villette, 75019 Paris").openPopup();
    marker = L.marker([48.8333616,2.353938], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>La Maison</b><br>HappyHour de 17h à 21h à 5,50€<br>62 avenue des Gobelins, 75013 Paris").openPopup();
}

if (hour >= 17 && hour <= 22){
    marker = L.marker([48.8656828,2.3846983], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>Le Mo'Town</b><br>HappyHour de 17h à 22h à 3,50€<br>116 Boulevard de Ménilmontant, 75020 Paris").openPopup();
}

if (hour >= 18 && hour <= 21){
    marker = L.marker([48.8564018,2.3624948], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>Le Piment Café</b><br>HappyHour de 18h à 21h à 3,50€<br>15 Rue de Sévigné, 75004 Paris").openPopup();
    marker = L.marker([48.8618745,2.3423944], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>ACT 21</b><br>HappyHour de 18h à 21h à 5€<br>5 rue Sauval 75001 Paris").openPopup();
}

if (hour >= 18 && hour <= 20) {
    marker = L.marker([48.8671573,2.3753889], {icon : beerIcon}).addTo(map);
marker.bindPopup("<b>L'Orange Mécanique</b><br>HappyHour de 18h à 20h à 4€b<br>72 Bis Rue Jean-Pierre Timbaud, 75011 Paris").openPopup();

}

if (hour >= 18 && hour <= 22) {
    marker = L.marker([48.8869539,2.3474488], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>Au Clair de la Lune</b><br>HappyHour de 18h à 22h à 3,50€<br>1 Rue Ramey, 75018 Paris").openPopup();
    marker = L.marker([48.8768310546875,2.3354170322418213], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>CHEZ BIBI</b><br>HappyHour de 18h à 22h à 4€<br>9 rue Saint Lazare, 75009 Paris").openPopup();

}

if (hour >= 17 && hour <= 0) {
    marker = L.marker([48.8624452,2.352598], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>Le Bistrot de l'Horloge</b><br>Hour tous les jours de 17h00 à  00h00 à 3,50€<br>7 rue Bernard de Clairvaux, 75003 Paris").openPopup();

}

if (hour >= 16 && hour <= 23){
    marker = L.marker([48.8534008,2.3665925], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>Le Rempart</b><br>Hour tous les jours de 16h00 à  23h00 à 4,50€<br>15 rue Saint Antoine, 75004 Paris").openPopup();
}

if (hour >= 14 && hour <= 22){
    marker = L.marker([48.8514857,2.3379094], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>Fubar</b><br>Happy Hour tous les jours de 14h00 à 22h00 à 3,50€<br>5 rue Saint Sulpice, 75006 Paris").openPopup();
}
if (hour >= 15 && hour <= 19){
    marker = L.marker([48.8765997,2.3232513], {icon : beerIcon}).addTo(map);
    marker.bindPopup("<b>Le Pub 27</b><br>Happy Hour tous les jours de 15h00 à 19h00 à 5€<br>27 Rue de Rome, 75008 Paris").openPopup();
}
}