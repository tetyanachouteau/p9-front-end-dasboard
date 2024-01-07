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
//2 recherches de l'info data ou api
const mockData = true;
//transformation en arrow function)
const getUserInfos = (id) => {
    let infos;
    if (mockData) {
        infos = USER_MAIN_DATA.find(el => el.id === Number.parseInt(id));
    } else {
        //point pour chercher info user avec axios ou fetch
        //continuer pareil + appele au backoffice fauls backend
    }


    return infos;
}

function getActivities(id) {

    let activities;
    if (mockData) {
        activities = USER_ACTIVITY.find(el => el.userId === Number.parseInt(id, 10));
    } else {
        //point pour chercher info user avec axios ou fetch
        //continuer pareil + appele au backoffice fauls backend
    }
    console.log(activities);

    return activities;
}

function getAverageSessions(id) {
    let averageSessions;
    if (mockData) {
        averageSessions = USER_AVERAGE_SESSIONS.find(el => el.userId === Number.parseInt(id));
    } else {
        //point pour chercher info user avec axios ou fetch
        //continuer pareil + appele au backoffice fauls backend
    }
    return averageSessions;
}

function getPerfomances(id) {
    let perfomances;
    if (mockData) {
        perfomances = USER_PERFORMANCE.find(el => el.userId === Number.parseInt(id));
    } else {
        //point pour chercher info user avec axios ou fetch
        //continuer pareil + appele au backoffice fauls backend
    }
    return perfomances;
}

function getProfil(id) {
    //find sur main date pour une bonne prsonne
    //si mock data ou api, découpage avec autres fonctions pour simplifier
    const infos = getUserInfos(id);
    console.log(infos);
    //méthode de constructeur
    // s'il existe on l'appelle ? rare destructeur s'il y a un
    const activities = getActivities(id);
    const averageSessions = getAverageSessions(id);
    const perfomances = getPerfomances(id);
    console.log(activities, averageSessions, perfomances);
    return new ProfilModel(infos, activities.sessions, averageSessions.sessions, perfomances.data);
}

export default getProfil;