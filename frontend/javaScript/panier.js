
import {updatePanierHeader} from './updatePanierHeader.js';


// Afficher tous les articles choisis dans le panier

function afficherPanier() {
  // let panierCommande = []

     for ( let i = 0; i < localStorage.length; i++) {
        let articleChoisieKEY = localStorage.key(i);
        let articleChoisieJSON = localStorage.getItem(articleChoisieKEY);
        let articleChoisie = JSON.parse(articleChoisieJSON);
        // panierCommande.push(articleChoisie);

        let listingPanier = document.querySelector('#vitrine');
        listingPanier.innerHTML +=  
                        `
                        <div class="jumbotron d-flex flex-column flex-md-row articles">
                           <div class="flex-fill">
                              <a href="./produit.html?id=${articleChoisie[1]}" >
                                  <img src=${articleChoisie[2]} width=300 alt="oricono oricamera  ${name}image ${articleChoisie[0]}" 
                                       class="img-thumbnail mx-auto d-block">
                              </a>
                            </div>
                            <div class="flex-fill mx-auto text-center">
                                <h2 class="mb-4 mt-4"> ${articleChoisie[0]} </h2> 
                                <p>Lentilles Choisie :  ${articleChoisie[3]}</p>
                                <div>
                                    <span>Quantite choisie : ${articleChoisie[4]} </span>
                                    <p><i class="far fa-minus-square btn"></i> &nbsp;<i class="far fa-plus-square btn"></i></p>
                                </div>
                                <p>Prix Unitaire :  ${articleChoisie[6]}€</p>
                                <p>Prix Total :  ${articleChoisie[5]}€</p>
                                <button class="btn btn-info mt-4 supprimer-article">Supprimez article</button>
                            </div>
                            <div class="d-md-flex justify-content-between text-center">
                            <div>
                        </div>
                        `;
          }

    // return panierCommande    
}

window.addEventListener("load", () => {

  afficherPanier();

});

updatePanierHeader();




// supprimer article
//-------------------

function supprimerReferenceArticle() {

  let supprimerArticle = document.querySelector('.supprimer-article');

  if (localStorage.length !== 0 ) {
      supprimerArticle.addEventListener('click', () => {
          localStorage.removeItem(this.key);
      })
  }
}



// ajuster (+ / -) quantité article et prix total
//------------------------------------------------





// vider panier
//------------------

function viderPanier() {

  let formulaireCommande = document.querySelector('.formulaire-commande');
  let videurPanier = document.querySelector('.vider-panier');
  if(localStorage.length == 0) {
    videurPanier.style.display = "none";
    formulaireCommande.style.display = "none";
  }


  videurPanier.addEventListener('click', () => {
      localStorage.clear();
      updatePanierHeader();
      afficherPanier();
      formulaireCommande.style.display = "none";
      videurPanier.style.display = "none";
  });

}


// afficher button : vider-panier
//----------------------------------





// formulaire du contact : code de validation coté client
//--------------------------------------------------------

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to

      let formulaire = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      Array.prototype.filter.call(formulaire, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


// Créer l'objet de contact
//-----------------------------------

let prenom = document.querySelector('#prenom')
let nom = document.querySelector('#nom')
let adresse = document.querySelector('#adresse')
let codePostale = document.querySelector('#code-postale')
let ville = document.querySelector('#ville')
let email = document.querySelector('#email')


let contact = {

  prenom:        prenom ,  
  nom:           nom ,
  adresse:       adresse , 
  ville:         ville ,
  codePostale,
  email:         ""
}


// Création du tableau de produits
//---------------------------------

let products = [];






















//   const cacherVideurPanier = () => {
//     if (localStorage.length  == 0 ) {
//         document.querySelector('.vider-panier').style.visibility = "hidden";
//     }
// }
// cacherVideurPanier();



  // génération de l'objet de commande : les articles + formulaire valide


//   let commande =  {
//        articles = [], 
//        formulaire = []
//     }


























