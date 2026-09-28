const prompt = require("prompt-sync")();

let i = 0;
let candidatsList = [
    {
        candidat_N : "candidat_N"+1,
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Indépendant",
        typePolitique: "Centre",
        age: 40,
        electeurs: ["CC111", "CC222", "CC333"]
    },

    {
        candidat_N : "candidat_N"+2,
        cin: "AD597632",
        nom: "Benabdallah",
        prenom: "Mohamed Nabil",
        partiPolitique: "(PPS) Parti du Progrès et du Socialisme",
        typePolitique: "Gauche",
        age: 67,
        electeurs: ["DD111", "DD222", "DD333"]
    },

    {
        candidat_N : "candidat_N"+3,
        cin: "AA756321",
        nom: "Benkiran",
        prenom: "Abdelilah",
        partiPolitique: "(PJD) Parti de la Justice et du Développement",
        typePolitique: "Droite",
        age: 72,
        electeurs: ["EE111", "EE222", "EE333"]
    },

    {
        candidat_N : "candidat_N"+4,
        cin: "AC845219",
        nom: "El Mansouri",
        prenom: "Yassine",
        partiPolitique: "(RNI) Rassemblement National des Indépendants",
        typePolitique: "Centre",
        age: 52,
        electeurs: ["FF111", "FF222", "FF333"]
    }
];













// ===== FUNCTION: Add a voter cin =====
function voterChecker(cinElecteur) {

    for (let i = 0; i < candidatsList.length; i++) {

        let candidat = candidatsList[i];

        for (let j = 0; j < candidat.electeurs.length; j++) {
            let enter =  prompt('Enter your CIN  : ' );

            if (candidat.electeurs[j] !== cinElecteur) {

                console.log("This CIN doesn't exist.");
                break;
            }

            if (candidat.electeurs[j] == cinElecteur) {
                console.log('Si la CIN de l’électeur existe déjà dans une liste de votes,'
                +' afficher le message Vous avez déjà voté et vous n’avez pas le droit de modifier'+
                 'votre vote ni de voter à nouveau .');
            
            }
        }

        candidat.electeurs.push(cinElecteur);
        console.log("CIN ajouté avec succès.");

        return;
    }
}
