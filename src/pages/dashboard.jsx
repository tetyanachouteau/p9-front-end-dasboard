//import { useParams, Navigate } from "react-router-dom";
//import data from '../data/data.js';
import React from 'react';
import MesuresDashboard from "../components/MesuresDashboard";
import HeaderDashboard from '../components/HeaderDashboard';
import Poids1 from '../components/Poids1';
import Radar2 from '../components/Radar2';
import Objectifs3 from '../components/Objectifs3';
import KPI4 from '../components/KPI4';
function Dashboard() {
    //let { id } = useParams()
    //let datalist = data.find(el => el.id === id)
    //let description= { description } 
    return (
        <div>
            <HeaderDashboard />
            <Poids1/>
            <Radar2/>
            <Objectifs3/>
            <KPI4/>
            <MesuresDashboard/>
        </div>
    );
}

export default Dashboard;


