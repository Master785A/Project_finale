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
function VoterPourCandidat() {

    let cinElecteur = prompt("Entrez votre CIN : ");

    for (let i = 0; i < candidatsList.length; i++) {

        if (candidatsList[i].electeurs.includes(cinElecteur)) {

            console.log("Vous avez déjà voté !");
            return;
        }
    }

    let cinCandidat = prompt(
        "Entrez le CIN du candidat pour lequel vous voulez voter : "
    );

    for (let i = 0; i < candidatsList.length; i++) {

        if (candidatsList[i].cin === cinCandidat) {

            // 5. Ajouter l'électeur à la liste du candidat
            candidatsList[i].electeurs.push(cinElecteur);

            console.log(
                "Vote enregistré pour " +
                candidatsList[i].prenom + " " +
                candidatsList[i].nom
            );

            return;
        }
    }

    console.log("Candidat introuvable !");
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
function StatistiquesElection() {

    let totalCandidats = candidatsList.length;
    let totalVotes = 0;

    let candidatGagnant = candidatsList[0];

    for (let i = 0; i < candidatsList.length; i++) {

        totalVotes = totalVotes + candidatsList[i].electeurs.length;

        if (candidatsList[i].electeurs.length > candidatGagnant.electeurs.length) {

            candidatGagnant = candidatsList[i];
        }
    }

    console.log("===== Statistiques =====");
    console.log("Nombre de candidats : " + totalCandidats);
    console.log("Nombre total de votes : " + totalVotes);
    console.log("Candidat avec le plus de votes : " + candidatGagnant.nom);
    console.log("Nombre de votes : " + candidatGagnant.electeurs.length);
}



// 9. Menu Principal
let a = true;
function menuAffichage() {
    while (a) {
        console.log(
            "\n=== GESTION DES ÉLECTIONS ===\n" +
            "1. Ajouter un nouveau candidat\n" +
            "2. Ajouter plusieurs candidats à la fois\n" +
            "3. Afficher la liste des candidats\n" +
            "4. Voter pour un candidat\n" +
            "5. Modifier les informations d'un candidat\n" +
            "6. Supprimer un candidat\n" +
            "7. Rechercher des candidats\n" +
            "8. Statistiques de l'élection\n" +
            "0. Quitter"
        );

        let choix = prompt("Entrez votre choix (0-8) : ");

        if (choix === "0") {
            console.log("Fermeture de l'application. Au revoir !");
            break;
        }

        switch (choix) {
            case "1":
                AjouterCandidat();
                break;
            case "2":
                AjouterPlusieursCandidats();
                break;
            case "3":
                afficherCandidats();
                break;
            case "4":
                VoterPourCandidat();
                break;
            case "5":
                ModifierCandidat();
                break;
            case "6":
                SupprimerCandidat();
                break;
            case "7":
                RechercherCandidat();
                break;
            case "8":
                StatistiquesElection();
                break;
            default:
                console.log("Choix invalide, veuillez entrer un nombre entre 0 et 8.");
                break;
        }

        prompt("\nAppuyez sur Entrée pour revenir au menu principal...");
    }
}

menuAffichage();