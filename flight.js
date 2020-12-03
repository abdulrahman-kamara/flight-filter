const vols = [{
        destination: 'Martinique',
        date_depart: '01/25/2019',
        compagnie_aerienne: 'Ryanair',
        numVol: 'xxxxx',
        prix: '350',
        dureeTrajet: '6'
    },
    {
        destination: 'Londres',
        date_depart: '07/25/2019',
        compagnie_aerienne: 'Air france',
        numVol: 'xxxxx',
        prix: '150',
        dureeTrajet: '2'
    },
    {
        destination: 'Paris',
        date_depart: '08/12/2019',
        compagnie_aerienne: 'Air france',
        numVol: 'xxxxx',
        prix: '50',
        dureeTrajet: '1'
    },
    {
        destination: 'Mexico',
        date_depart: '09/03/2019',
        compagnie_aerienne: 'Lufthansa',
        numVol: 'xxxxx',
        prix: '1350',
        dureeTrajet: '8'
    },
    {
        destination: 'Tokyo',
        date_depart: '12/12/2020',
        compagnie_aerienne: 'Air france',
        numVol: 'xxxxx',
        prix: '750',
        dureeTrajet: '14'
    },
    {
        destination: 'Tokyo',
        date_depart: '12/11/2020',
        compagnie_aerienne: 'Lufthansa',
        numVol: 'xxxxx',
        prix: '850',
        dureeTrajet: '14'
    }
];


//Affichez tous les vols (destination - Date de départ- compagnie aérienne -
//numero de vol - prix - durée du trajet)
vols.forEach((vol) => {
    console.log(vol.destination)
    console.log(vol.date_depart)
    console.log(vol.compagnie_aerienne)
    console.log(vol.numVol)
    console.log(vol.prix)
    console.log(vol.dureeTrajet)




});

//Afficher tous les vols dont le trajet est inférieur à 7h. (idem)
for (let i = 0; i < vols.length; i++) {
    if (vols[i].dureeTrajet < 7) {
        console.log(vols[i]);
    }
};

//Afficher les vols à destination de Tokyo et qui voyagent avec Air france (idem)
for (let i = 0; i < vols.length; i++) {
    if (vols[i].destination === 'Tokoyo' & vols[i].compagnie_aerienne === 'Air france') {
        console.log(vols[i]);
    }

}

//Afficher tous les vols dont le tarif est inférieur à 700 euros et qui
//voyagent avec Air france
for (let i = 0; i < vols.length; i++) {
    if (vols[i].prix < 700 & vols[i].compagnie_aerienne === "Air france") {
        console.log(vols[i]);
    }
}


//Afficher tous les vols qui voyagent avec 'Lufthansa' dont le prix est inférieur à 900 euros
//et dont la durée du trajet est inférieur à 15 heures
for (let i = 0; i < vols.length; i++) {
    if (vols[i].compagnie_aerienne === "lufthansa" & vols[i].prix < 900 & vols[i].dureeTrajet < 15) {
        console.log(vols[i])
    }
};




//Appliquer une reduc de 20% sur chaque vol organiser après 2019 et les afficher
for (let i = 0; i < vols.length; i++) {
    if (vols[i].prix < 20 % vols[i].compagnie_aerienne === "Air france" & vols[i].compagnie_aerienne === "lufthansa") {
        console.log(vols[i]);
    }
};

//Afficher tous les vols pour Paris prévus entre le "06/02/2019" et le "09/06/2019".
for (let i = 0; i < vols.length; i++) {
    if (vols[i].compagnie_aerienne === 'Air france') {
        console.log(vols[i])
    }
};


//Les tableaux
//Déclarez un tableau avec 5 villes
//Afficher la ville à l'indice 3
//Ajouter une ville au tableau
//Supprimer la ville à l'indice 2

//Les boucles
const villes = ['marseille', 'paris', 'nantes', 'lille', 'nancy']
let ville = villes[0]
console.log(ville[0] + ville[1] + ville[2]);
//Comme tu le sais sans doute, pour parcourir un tableau,
//il faut boucler sur ce tableau. Parcours le tableau suivant afin de monter chaque
//élément au carré et affiche le tableau.
const array1 = [2, 4, 8];
firstNum = array1[0];

for (let i = 0; i = array1.length; i++) {
    //console.log(array1[i]);
}


//----------------------------------------------------------------------------------



//Afficher tous les vols à partir de la date d'aujourd'hui
for (let i = 0; i < vols.length; i++) {
    if (vols[i].compagnie_aerienne === 'Lufthansa' & vols[i].compagnie_aerienne === 'Air france') {
        console.log(vols[i])
    }
};
//Un petit coup de main...
//Il faut récupèrer la date du jour avec l'objet 'date' (new Date()) fournis par Javascript.

//La fonction suivante permet de comparer deux dates et renvoie 'true' si date1 est supérieur à date2
//Pour comparer deux, celles-ci doivent avoir le même format.
const date1SupDate2 = (date1, date2) => {
    startDate = new Date(date1);
    endDate = new Date(date2);
    if (startDate > endDate) {
        return true;
    } else {
        return false;
    };
};


//console.log(date1SupDate2("12/13/2020", "12/12/2020"));



//Allez voir ce qu'est un JSON !
//https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON

//const button = document.querySelector('button');
//button.onclick = function() {
//let name = prompt('whats your name');
//alert('hello ' + +' ,nice to meet you!')
//};

const equipes = document.querySelector('#team');
console.log(equipes);