//import { useParams, Navigate } from "react-router-dom";

//import data from '../data/data.js';

//import Tag from "../components/Tag";
//import Rating from "../components/Rating";
//import styles from "./dashboard.module.css"
import React from 'react';
import HeaderDashboard from '../components/HeaderDashboard';


function Dashboard() {
    //let { id } = useParams()
    //let datalist = data.find(el => el.id === id)
    //let description= { description } 
        return (
            <div>
                <HeaderDashboard />
                

                Activité quotidienne

                - Poids (kg)
                - Calories brûlées (kCal)


                
1930kCal
Calories

155g
Proteines

290g
Glucides

50g
Lipides

                
                SportSee Start
            </div>
        );
}

export default Dashboard;


