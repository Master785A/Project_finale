const prompt = require("prompt-sync")();

let i = 0;
let candidatsList = [
    {
        candidat_N: "candidat_N" + 1,
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Indépendant",
        typePolitique: "Centre",
        age: 40,
        electeurs: ["CC111", "CC222", "CC333"]
    },

    {
        candidat_N: "candidat_N" + 2,
        cin: "AD597632",
        nom: "Benabdallah",
        prenom: "Mohamed Nabil",
        partiPolitique: "(PPS) Parti du Progrès et du Socialisme",
        typePolitique: "Gauche",
        age: 67,
        electeurs: ["DD111", "DD222", "DD333"]
    },

    {
        candidat_N: "candidat_N" + 3,
        cin: "AA756321",
        nom: "Benkiran",
        prenom: "Abdelilah",
        partiPolitique: "(PJD) Parti de la Justice et du Développement",
        typePolitique: "Droite",
        age: 72,
        electeurs: ["EE111", "EE222", "EE333"]
    },

    {
        candidat_N: "candidat_N" + 4,
        cin: "AC845219",
        nom: "El Mansouri",
        prenom: "Yassine",
        partiPolitique: "(RNI) Rassemblement National des Indépendants",
        typePolitique: "Centre",
        age: 52,
        electeurs: ["FF111", "FF222", "FF333"]
    }
];











//1. Ajouter un nouveau candidat & Fonction pour ajouter un candidat
function AjouterCandidat() {

    let cin = prompt("Enter CIN : ");
    let nom = prompt("Enter nom : ");
    let prenom = prompt("Enter prénom : ");
    let age = Number(prompt("Enter âge : "));


    // Vérifier si le CIN existe déjà
    for (let i = 0; i < candidatsList.length; i++) {

        if (candidatsList[i].cin === cin) {
            console.log("Erreur : ce CIN existe déjà !");
            return;
        }
    }


    // Vérifier si le nom existe déjà
    for (let i = 0; i < candidatsList.length; i++) {

        if (candidatsList[i].nom === nom) {
            console.log("Erreur : ce nom existe déjà !");
            return;
        }
    }


    // Créer le nouveau candidat
    let nouveauCandidat = {

        candidat_N: "candidat_N" + (candidatsList.length + 1),

        cin: cin,

        nom: nom,

        prenom: prenom,

        age: age,

        electeurs: []
    };


    // Ajouter le nouveau candidat dans le tableau
    candidatsList.push(nouveauCandidat);

    console.log("Candidat ajouté avec succès !");
    console.log(candidatsList); /// After Ajoter

}

// 2. Ajouter plusieurs candidats à la fois
function AjouterPlusieursCandidats() {

    let nombre = Number(prompt("Combien de candidats voulez-vous ajouter ? "));

    for (let i = 0; i < nombre; i++) {

        console.log("===== Candidat " + (i + 1) + " =====");

        AjouterCandidat();
    }

    console.log("Tous les candidats ont été ajoutés !");
}


//3. Afficher la liste des candidats :
function afficherCandidats() {

    for (let i = 0; i < candidatsList.length; i++) {

        console.log("# Candidat " + (i + 1) + ":");
        console.log("CIN: " + candidatsList[i].cin);
        console.log("Nom: " + candidatsList[i].nom);
        console.log("-------------");
    }
}


// ===== 4. Voter pour un candidat :=====
function voterCheckerAdding(cinElecteur) {

    for (let i = 0; i < candidatsList.length; i++) {

        let candidat = candidatsList[i];

        for (let j = 0; j < candidat.electeurs.length; j++) {
            let enter = prompt('Enter your CIN  : ');

            if (candidat.electeurs[j] !== cinElecteur) {

                console.log("This CIN doesn't exist.");
                break;
            }

            if (candidat.electeurs[j] == cinElecteur) {
                console.log('Si la CIN de l’électeur existe déjà dans une liste de votes,'
                    + ' afficher le message Vous avez déjà voté et vous n’avez pas le droit de modifier' +
                    'votre vote ni de voter à nouveau .');

            }
        }

        candidat.electeurs.push(cinElecteur);
        console.log("CIN ajouté avec succès.");
        return cinElecteur;

    }
}

 //5. Modifier les informations d'un candidat :
function ModifierCandidat() {

    let cinRecherche = prompt("Enter CIN du candidat : ");

    for (let i = 0; i < candidatsList.length; i++) {

        if (candidatsList[i].cin === cinRecherche) {

            console.log("Candidat trouvé !");

            let nouveauNom = prompt("Enter nouveau nom : ");
            let nouveauPrenom = prompt("Enter nouveau prénom : ");
            let nouvelAge = Number(prompt("Enter nouvel âge : "));

            candidatsList[i].nom = nouveauNom;
            candidatsList[i].prenom = nouveauPrenom;
            candidatsList[i].age = nouvelAge;

            console.log("Candidat modifié avec succès !");

            return;
        }
    }

    console.log("Candidat introuvable !");
}


//6. Supprimer un candidat :
function SupprimerCandidat() {

    let cin = prompt("Enter CIN du candidat à supprimer : ");

    for (let i = 0; i < candidatsList.length; i++) {

        if (candidatsList[i].cin === cin) {

            // Supprimer le candidat
            candidatsList.splice(i, 1);

            console.log("Candidat supprimé avec succès !");

            return;
        }
    }

    // Si le candidat n'est pas trouvé
    console.log("Candidat introuvable !");
}



// 7. Rechercher des candidats
function RechercherCandidat() {

    let nomRecherche = prompt("Enter Nom du candidat : ");

    for (let i = 0; i < candidatsList.length; i++) {

        if (candidatsList[i].nom === nomRecherche) {

            console.log("Candidat trouvé !");
            console.log("Nom : " + candidatsList[i].nom);
            return;
        }
    }

    console.log("Candidat introuvable !");
}



//8. Statistiques de l'élection :



//9.menu affichage

//10.
