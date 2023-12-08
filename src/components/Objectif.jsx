
import React from 'react';
import styles from "./Objectif.module.css"
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

function Objectif({score}) {

    const data = [
        {
            name: "total",
            value: 1 - score,
            fill: "#FBFBFB"
        },
        {
            name: "objectif",
            value: score,
            fill: "#FF0000"
        }
    ];

    // https://recharts.org/en-US/api/RadialBarChart

    return (
        <ResponsiveContainer width="100%" height={265} className={styles.responsive}>
            <RadialBarChart
                innerRadius="80%"
                barSize={10}
                startAngle={90}
                endAngle={450}
                data={data}
            >
                <text x={30} y={44} fill="black" fontWeight="bold">Score</text>
                
                <RadialBar
                    label={false}
                    background="#FFF"
                    clockWise
                    cornerRadius={5}
                    dataKey="value"
                />
                <text x="44%" y={112} fill="black" fontWeight="bold">{Math.floor(score*100)}%</text>
                <text x="42%" y={132} fill="#AAA">de votre</text>
                <text x="42%" y={152} fill="#AAA">objectif</text>
            </RadialBarChart>

        </ResponsiveContainer>

    );
}

export default Objectif;