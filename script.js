let btnplusAll = document.querySelectorAll('.plus');
let btnmoinsAll = document.querySelectorAll('.moins');
let Ajouter = document.querySelector('.addart');
let supprimeAll = document.querySelectorAll('.supprime');
let like_img = document.querySelector('.like_img');
let Total = document.querySelector('.Total')

for (let i = 0; i < btnplusAll.length; i++) {
    btnplusAll[i].addEventListener('click',augtQuant);
}
function augtQuant() {
    augtQuantite(this)
}

function augtQuantite(elt) {
    elt.previousElementSibling.value++ ;
    let quant = parseInt(elt.previousElementSibling.value);
    let prix = parseInt(elt.parentElement.nextElementSibling.innerText);
    elt.parentElement.nextElementSibling.nextElementSibling.innerHTML = prix*quant + 'fr';
}

for (let i = 0; i < btnmoinsAll.length; i++) {
    btnmoinsAll[i].addEventListener('click',dinimQuant);
}
function dinimQuant() {
    dinimQuantite(this)
    
}
function dinimQuantite(elt) {
    if( elt.nextElementSibling.value > 0){
        elt.nextElementSibling.value--; 
    }
    Soustotal();
}

Ajouter.addEventListener('click',addArticle)
function addArticle() {
    let newarticle =  document.querySelector('.Nom-art').value;
    let newprix =  document.querySelector('.btn-pu').value;
    document.querySelector('.body').innerHTML = document.querySelector('.body').innerHTML + ' <div class="image-text-supprime"><div class="image-text"><div class="image-nom"><div class="image"><img src="images/MA.jpg" alt=""></div><div class="nom"><p>' + newarticle + '</p></div></div><div class="Quantité"><button class="moins">-</button><input type="text" readonly placeholder="Prix-Unitaire" value="1" class="quant"><button class="plus">+</button></div><div class="Prix-Unitaire"><span>'+ newprix +'  fr</span></div><div class="Soustotal"><span>1000 fr</span></div></div><div class="supprime"><button><img src="images/trash-solid.svg" alt=""></button></div></div></div>'
    btnplusAll = document.querySelectorAll('.plus');
    for (let i = 0; i < btnplusAll.length; i++) {
        btnplusAll[i].addEventListener('click',augtQuant);
    }
    let btnmoinsAll = document.querySelectorAll('.moins');
    for (let i = 0; i < btnmoinsAll.length; i++) {
        btnmoinsAll[i].addEventListener('click',dinimQuant);
    }
    let supprimeAll = document.querySelectorAll('.supprime');
    for (let i = 0; i < supprimeAll.length; i++) {
        supprimeAll[i].addEventListener('click',supprimeArt)
    }
}

for (let i = 0; i < supprimeAll.length; i++) {
    supprimeAll[i].addEventListener('click',supprimeArt)
}
function supprimeArt() {
    this.parentElement.previousElementSibling.remove()
}

like_img.addEventListener('click',likeArt);
function likeArt() {
    like_img.classList.toggle('on');
}

Total.addEventListener('click',totalPrix);
function totalPrix() {
    
}





function Soustotal() {
    let prix = parseInt(document.querySelector('.Prix-Unitaire').innerText);
    let quant = parseInt(document.querySelector('.quant').value)
    let soust = prix*quant;

    document.querySelector('.Soustotal').innerText = soust + 'fr';
}
