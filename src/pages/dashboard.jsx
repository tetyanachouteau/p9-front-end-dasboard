//import { useParams, Navigate } from "react-router-dom";

//import data from '../data/data.js';
import Header from "../components/Header";
//import Tag from "../components/Tag";
//import Rating from "../components/Rating";
//import styles from "./dashboard.module.css"


function Dashboard() {
    //let { id } = useParams()
    //let datalist = data.find(el => el.id === id)
    //let description= { description } 
        return (
            <div>
                Bonjour Thomas
                Félicitation ! Vous avez explosé vos objectifs hier 👏

                Activité quotidienne

                - Poids (kg)
                - Calories brûlées (kCal)


                Copiryght, SportSee 2020
1930kCal
Calories

155g
Proteines

290g
Glucides

50g
Lipides

                <Header />
                SportSee Start
            </div>
        );
}

export default Dashboard;


