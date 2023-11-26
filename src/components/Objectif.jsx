
import React from 'react';
import styles from "./Objectif.module.css"
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

function Objectif({score}) {

    console.log(score)

    const data = [
        {
            name: "objectif",
            uv: score,
            fill: "#8884d8"
        }
    ];

    // https://recharts.org/en-US/api/RadialBarChart

    return (
        <ResponsiveContainer width="100%" height={265} className={styles.responsive}>
            <RadialBarChart
                innerRadius={20}
                outerRadius={140}
                barSize={10}
                data={data}
            >
                <RadialBar
                    minAngle={15}
                    label={{ position: "insideStart", fill: "#fff" }}
                    background
                    clockWise
                    dataKey="uv"
                />
            </RadialBarChart>

        </ResponsiveContainer>

    );
}

export default Objectif;