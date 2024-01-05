//chercher données, ajout une variable 
//en mode date ou api, on separe composant et on recherche des données
//seule axe depuis exterieur
import ProfilModel from "./ProfilModel";
import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from '../data/data'

function getProfil(id) {
    //find sur main date pour une bonne prsonne
    //si mock data ou api, découpage avec autres fonctions pour simplifier
    const infos = USER_MAIN_DATA.find(el => el.id === Number.parseInt(id));
    console.log(USER_MAIN_DATA);
    console.log(infos);
    //méthode de constructeur s'il existe on l'appelle ? rare destructeur s'il y a un
    return new ProfilModel(infos);
}

export default getProfil;