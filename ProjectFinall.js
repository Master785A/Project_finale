const candidatsList = [
    {   cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Indépendant",
        typePolitique: "Centre",
        age: 40,
        electeurs: []
    },

    candidatsN2: [{
        cin: "AD597632",
        nom: "Benabdallah",
        prenom: "Mohamed Nabil",
        partiPolitique: "(PPS) Parti du Progrès et du Socialisme",
        typePolitique: "Gauche",
        age: 67,
        electeurs: []
    }],

    candidatsN3: [{
        cin: "AA756321",
        nom: "Benkiran",
        prenom: "Abdelilah ",
        partiPolitique: "(PJD) Parti de la Justice et du Développement",
        typePolitique: "Droit",
        age: 72,
        electeurs: []
    }]
]

function addElecteurs(cin, nom, prénom) {
    let electeur = {
        cin : cin,
        nom : nom,
        prénom : prénom,
    };
    let add = candidatsList.electeurs.push;
    console.log(add);
}


addElecteurs(132);


