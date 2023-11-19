
import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { USER_ACTIVITY } from "../data/data"
import { useParams } from 'react-router-dom';
import styles from './Activity.module.css';

function Activity() {
    let { id } = useParams();

    let activity = USER_ACTIVITY.filter(el => el.userId === Number.parseInt(id))[0]
    console.log(activity)

    const MaBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <Rectangle x={x} y={y} fill={fill} width={width} height={height} radius={[4, 4, 0, 0]} />
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.wrapper}>
                    <p>{payload[0].value}kg</p>
                    <p>{payload[1].value}Kcal</p>
                </div>
            );
        }

        return null;
    };

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activity.sessions}>
                <text x={0} y={20} fill="black" fontWeight="bold">Activité quotidienne</text>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis tickLine={false} />
                <YAxis orientation="right" axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} offset={60} position={{ y: 0 }} />
                <Legend verticalAlign="top" align="right" iconType='circle' height={50} />
                <Bar dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize={8} shape={<MaBar />} />
                <Bar dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" barSize={8} shape={<MaBar />} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Activity;