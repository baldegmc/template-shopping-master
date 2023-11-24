function checknumber(input, totalPrixid) {
    var nombreProduit = parseInt(input.value) ;
    var prixUnitaire = getPrixUnitaire(totalPrixid);
    var totalPrix = nombreProduit * prixUnitaire;

    var totalPrixElement = document.getElementById(totalPrixid); 
    totalPrixElement.textContent = totalPrix + ' Fcfa';

    updateCartTotal();
} 
// recuperer le prix unitaire
function getPrixUnitaire(totalPrix) {
if (totalPrix == 'totalPrix1') {
    return 1000;
}

if (totalPrix == 'totalPrix2') {
    return 9000;
}
if (totalPrix == 'totalPrix3') {
    return 19000;
}
}
/*************** liker les items *****************/
function like(toto){
toto.classList.toggle("toto")

}

//supprimer les elements du panier
function remove(button) {
    var btn = button.parentElement.parentElement;
    btn.remove();

    updateCartTotal()
}


// Mettre à jour le prix total en fonction des quantités
function updateCartTotal() {
    var totalElements = document.querySelectorAll('.total'); 
    var totalPrice =0;

    totalElements.forEach(totalElement => {
        var totalPriceText = totalElement.textContent; 
        var price = parseFloat(totalPriceText); 

            totalPrice += price;
        
    });

    // Met à jour le texte du prix total
    const priceTotalElement = document.getElementById('priceTotal');
    priceTotalElement.textContent = totalPrice + ' Fcfa';
}


