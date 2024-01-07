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
const mockData = false;
//transformation en arrow function)
const getUserInfos = async (id) => {
    let infos;
    if (mockData) {
        infos = USER_MAIN_DATA.find(el => el.id === Number.parseInt(id));
    } else {
        const response = await fetch('http://localhost:3100/user/' + id);
        infos = await response.json();
        infos = infos.data;
    }

    console.log(infos);

    return infos;
}

async function getActivities(id) {
    let activities;
    if (mockData) {
        activities = USER_ACTIVITY.find(el => el.userId === Number.parseInt(id, 10));
    } else {
        const response = await fetch('http://localhost:3100/user/' + id + '/activity');
        activities = await response.json();
        activities = activities.data;
    }

    console.log(activities);

    return activities;
}

async function getAverageSessions(id) {
    let averageSessions;
    if (mockData) {
        averageSessions = USER_AVERAGE_SESSIONS.find(el => el.userId === Number.parseInt(id));
    } else {
        const response = await fetch('http://localhost:3100/user/' + id + '/average-sessions');
        averageSessions = await response.json();
        averageSessions = averageSessions.data;
    }

    console.log(averageSessions);

    return averageSessions;
}

async function getPerfomances(id) {
    let perfomances;
    if (mockData) {
        perfomances = USER_PERFORMANCE.find(el => el.userId === Number.parseInt(id));
    } else {
        const response = await fetch('http://localhost:3100/user/' + id + '/performance');
        perfomances = await response.json();
        perfomances = perfomances.data;
    }

    console.log(perfomances);

    return perfomances;
}

async function getProfil(id) {
    //find sur main date pour une bonne prsonne
    //si mock data ou api, découpage avec autres fonctions pour simplifier
    const infos = await getUserInfos(id);
    console.log(infos);
    //méthode de constructeur
    // s'il existe on l'appelle ? rare destructeur s'il y a un
    const activities = await getActivities(id);
    const averageSessions = await getAverageSessions(id);
    const perfomances = await getPerfomances(id);
    console.log(activities, averageSessions, perfomances);
    return new ProfilModel(infos, activities.sessions, averageSessions.sessions, perfomances.data);
}

export default getProfil;