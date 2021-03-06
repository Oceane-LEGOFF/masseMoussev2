const inpNom = document.querySelector("#nom");
const inpMail = document.querySelector("#email");
const inpMdp = document.querySelector("#mdp");
const inpConfirme = document.querySelector("#mdpconf");
const inpPrenom = document.querySelector("#Prénom");

const buttonConfirm = document.querySelector("#confirm");

let check = {
  user: false,
  mdp: false,
  mail: false
};
buttonConfirm.addEventListener("click", validation);

const regexNom = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
/**
 * Fonction permettant de verifier que le format d'un nom est prénom est correcte
 * @param {*} event
 */
function validationN(event) {
  //Si le champ est vide
  if (regexNom.test(inpNom.value) == false) {
    event.preventDefault();
  }
}
/**
 * Fonction permettant que le format d'un mail est bien respecter
 */
inpMail.addEventListener("input", function(e) {
  const regexEmail = /\S+@\S+\.\S+/;

  console.log(e.target.value);
  console.log(e.target.value.search(regexEmail));
  if (e.target.value.search(regexEmail) === 0) {
    check.mail = true;
  } else if (e.target.value.search(regexEmail) === -1) {
    check.mail = false;
  }
});

// Validation création du MDP

let valeurInp;
const specialCar = /[^a-zA-Z0-9]/;
const alphabet = /[a-z]/i;
const chiffres = /[0-9]/;

let objValidation = {
  symbole: 0,
  lettre: 0,
  chiffre: 0
};

inpMdp.addEventListener("input", function(e) {
  valeurInp = e.target.value;

  if (valeurInp.search(specialCar) !== -1) {
    objValidation.symbole = 1;
  }
  if (valeurInp.search(alphabet) !== -1) {
    objValidation.lettre = 1;
  }
  if (valeurInp.search(chiffres) !== -1) {
    objValidation.chiffre = 1;
  }

  if ((e.inputType = "deleteContentBackward")) {
    if (valeurInp.search(specialCar) === -1) {
      objValidation.symbole = 0;
    }
    if (valeurInp.search(alphabet) === -1) {
      objValidation.lettre = 0;
    }
    if (valeurInp.search(chiffres) === -1) {
      objValidation.chiffre = 0;
    }
  }

  let testAll = 0;
  for (const property in objValidation) {
    if (objValidation[property] > 0) {
      testAll++;
    }
  }
  if (testAll < 3) {
    check.mdp = false;
  } else {
    check.mdp = true;
  }
});

function VerifCompte() {

console.log("début")
var email = document.getElementById("email").value;
var xhr = new XMLHttpRequest(),
    method = "GET",
    URL = 'http://localhost:3000/clients/searchM?search=' + email;

console.log("création xhr");
    

console.log("création json");
xhr.open(method, URL, true);
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
  var reponse = JSON.parse(xhr.response);
   if( xhr !== "[]"){
     console.log("réussi");
   }
 else {
   console.log("échec");
 }
  }
};
xhr.send();
}

/**
 * Fonction permettant l'enregistrement d'un utilisateur dans la BDD
 */
function creationClient() {
  var nom = document.getElementById("nom").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("bday").value;
  var prenom = document.getElementById("Prénom").value;
  var mdp = document.getElementById("mdpconf").value;

  console.log("création");
  var xhr = new XMLHttpRequest(),
    method = "POST",
    URL = "http://localhost:3000/clients";
  xhr.open(method, URL, true);

  console.log("créé");
  //Envoie les informations du header adaptées avec la requête
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  console.log("envoyéBis");

  xhr.onreadystatechange = function() {
    //Appelle une fonction au changement d'état.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      console.log("envoyé");
    }
  };
  xhr.send(
    JSON.stringify({
      "name": nom,
      "prenom": prenom,
      "naissance": date,
      "mail": email,
      "mdp": mdp
    })
  );
}
