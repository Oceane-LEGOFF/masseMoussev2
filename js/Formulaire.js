const inpNom = document.querySelector("#Nom");
const inpMail = document.querySelector("#email");
const inpMdp = document.querySelector("#mdp");
const inpConfirme = document.querySelector("#mdpconf");

const buttonConfirm = document.querySelector("#confirm");

let check = {
  user: false,
  mdp: false,
  mail: false
};
buttonConfirm.addEventListener("click", validation);

const regexNom = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

function validation(event) {
  //Si le champ est vide
  if (regexNom.test(inpNom.value) == false) {
    event.preventDefault();
  }
}

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
	
  var email = document.getElementById("email").value;
  var xhr = new XMLHttpRequest(),
      method = "GET",
      URL = 'http://localhost:3000/clients/email?email=' + email;
  
  xhr.open(method, url, true);
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      
    }
    else {
      alert("Compte inexistant");
    }
  };
  xhr.send();
  }


