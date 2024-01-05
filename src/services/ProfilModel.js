//indité=modele vers data (peu importe d'ou vient la date)
class ProfilModel {
    //méthode de constructeaur fname, last name, age, tous mes scores, 3 kall glus, lypydes (chaque fois)
    constructor(infos) {
        this.id = infos.id;
        this.firstName = infos.userInfos.firstName;
        this.lastName = infos.userInfos.lastName;
        this.age = infos.userInfos.age;
        this.score = infos.todayScore ?? infos.score;
        this.calorie = infos.keyData.calorieCount;
        this.proteine = infos.keyData.proteinCount;
        this.glucide = infos.keyData.carbohydrateCount;
        this.lipide = infos.keyData.lipidCount;
    }
}

export default ProfilModel;