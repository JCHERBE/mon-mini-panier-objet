document.getElementById('btn-1').addEventListener("click",clickButton);
document.getElementById('btn-2').addEventListener("click",clickButton);
document.getElementById('btn-3').addEventListener("click",clickButton);
document.getElementById('btn-clean').addEventListener("click",btnClean);

/*declaration de notre tableau d article*/
var panier = [];


/*défintion des articles, art1, art2, art3*/
var art1 = {
	img: "../Mon%20mini%20panier%20objet/img/Foodshot_2016_21_3.jpg",
	label: "Frites",
	cat: "déjeuner",
	prix: 7
};

var art2 = {
	img:"../Mon%20mini%20panier%20objet/img/Foodshot_2016_16_3.jpg",
	label: "Creme",
	cat: "déjeuner",
	prix: 5
};

var art3 = {
	img:"../Mon%20mini%20panier%20objet/img/Foodshot_2016_18_7.jpg",
	label: "Muffin",
	cat: "déjeuner",
	prix: 2
};
/*fonctyion qui est appelé lors du click sur un bouton*/
function clickButton() {
	if(this.id == "btn-1")	{
	ajouterArticle(art1)
	}

	if(this.id == "btn-2")	{
   	ajouterArticle(art2);
   }

	if(this.id == "btn-3")	{
	ajouterArticle(art3);	
	}


function btnClean() {
	//alert("clean");
	//var tblPanier = document.getElementById("detail-panier");
	//console.log(tblPanier.childNodes);
	var ligneASupprimer = document.getElementsByClassName("ligne-custom");
	tableau = document.getElementById("detail-panier");
	for (var i =  ligneASupprimer.length - 1; i >=0; i--) {
		tableau.removeChild(ligneASupprimer [i]);
	}

	panier.length = 0; 
	calculerTotal()
	
}
/*défintion des ajouts*/
function ajouterArticle(article) {
		panier.push(article);
		var tr = document.createElement("tr");
		tr.className = "ligne-custom";


		var tdImg = document.createElement("td");
		tdImg.className = "img-article";
		tdImg.style.backgroundImage="url("+ article.img +")";
		tr.appendChild(tdImg);

		var tdLabel = document.createElement("td");
		tdLabel.textContent = article.label;
		tr.appendChild(tdLabel);
		

		var tdCat = document.createElement("td");
		tdCat.textContent = article.cat;
		tr.appendChild(tdCat);
		

		var tdPrix = document.createElement("td");
		tdPrix.textContent = article.prix;
		tr.appendChild(tdPrix);
		
		
		document.getElementById("detail-panier").appendChild(tr);
}

/*ajout dans le tableau final*/
function calculerTotal() {
		var total = 0;
		for (var i = panier.length - 1; i >=0; i--) 
			total += panier[i].prix;
		}	
	
		if(panier.length == 0) {
			//document.getElementById('texte-panier').textContent = " Votre panier est vide ";
		}
		else {
		document.getElementById('texte-panier').textContent = " j'ai pris " + panier.length + " artricle(s) pour un total de " + total + " € ";
		}
}


/*document.getElementsByTagName("tag") fonction return, renvoie un tableau d'éléments*/
//document.getElementsByClass("renvoie un tableau")