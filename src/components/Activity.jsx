
import React from 'react';
import { BarChart, Bar, Label, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data from "../data/data"

function Activity() {

    return (
        <BarChart
            width={500}
            height={300}
            data={data.USER_ACTIVITY[0].sessions}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <Label value="Activité quotidienne (Poids1)" offset={0} position="insideTopLeft" />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="kilogram" label="Poids (kg)" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="calories" label="Calories brûlées (kCal)" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
    );
}

export default Activity;