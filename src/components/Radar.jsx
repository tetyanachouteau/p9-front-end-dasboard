
import React from 'react';
import styles from "./Radar.module.css"
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { USER_PERFORMANCE } from "../data/data"
import { useParams } from 'react-router-dom';

function RadarComp() {

    // Récupération du paramètre "id" depuis l'URL à l'aide de useParams
    let { id } = useParams();

    let perf = USER_PERFORMANCE.filter(el => el.userId === Number.parseInt(id))[0];

    let data = perf.data;

    const customTickNameX = (data) => {
        // recupère le texte qui correspond à l'id de kind 
        return perf.kind[data];
    };

    // https://recharts.org/en-US/api/RadarChart

    return (
        <ResponsiveContainer width="100%" height={265} className={styles.responsive}>
            <RadarChart data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" stroke='#FFF' tickFormatter={customTickNameX} tickLine={false}/>
                <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
}

export default RadarComp;