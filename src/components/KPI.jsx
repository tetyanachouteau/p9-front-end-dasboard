
import React from 'react';
import styles from "./KPI.module.css"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { USER_AVERAGE_SESSIONS } from "../data/data"
import { useParams } from 'react-router-dom';

function KPI() {

    let { id } = useParams();

    let day = ["L","M","M","J","V","S","D"];

    let sessions = USER_AVERAGE_SESSIONS.filter(el => el.userId === Number.parseInt(id))[0];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.content}>
                    {payload[0].value}min
                </div>
            );
        }

        return null;
    };

    return (
        <ResponsiveContainer width="100%" height={265} className={styles.responsive}>
            <LineChart
                data={sessions.sessions}
                margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 20,
                }}
            >
                <text x={30} y={44} fill="#FFFFFF" fontWeight="bold">Durée moyenne des sessions</text>
                <XAxis axisLine={false} 
                tickLine={false} 
                dataKey={(props)=>{ return day[props.day - 1] }} 
                tick={{ stroke: "#FFFFFF" }}
                interval="preserveStartEnd"/>
                <YAxis hide={true} dataKey="sessionLength" />
                <Tooltip content={<CustomTooltip />} offset={5} />
                <Line type="monotone" dataKey="sessionLength" 
                stroke="#FFF" 
                dot={false} 
                activeDot={{ r: 4 }} 
                strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default KPI;