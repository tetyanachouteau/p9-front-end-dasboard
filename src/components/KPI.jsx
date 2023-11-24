import React from 'react';
import styles from "./KPI.module.css"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { USER_AVERAGE_SESSIONS } from "../data/data"
import { useParams } from 'react-router-dom';

function KPI() {
    // Récupération du paramètre "id" depuis l'URL à l'aide de useParams
    let { id } = useParams();

    // Jours de la semaine pour l'axe X du graphique
    let day = ["L", "M", "M", "J", "V", "S", "D"];

    // Filtrage des données de sessions moyennes pour l'utilisateur spécifique
    let sessions = USER_AVERAGE_SESSIONS.filter(el => el.userId === Number.parseInt(id))[0];

    // Composant personnalisé pour définir le contenu du Tooltip
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
        // Utilisation du conteneur réactif pour rendre le graphique adaptatif
        <ResponsiveContainer width="100%" height={265} className={styles.responsive}>
            {/* LineChart avec différentes propriétés */}
            <LineChart
                data={sessions.sessions}
                margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 20,
                }}
            >
                {/* Titre personnalisé au-dessus du graphique */}
                <text x={30} y={44} fill="#FFFFFF" fontWeight="bold">Durée moyenne des sessions</text>

                {/* Axe X personnalisé avec les jours de la semaine */}
                <XAxis
                    axisLine={false}
                    tickLine={false}
                    dataKey={(props) => { return day[props.day - 1] }}
                    tick={{ stroke: "#FFFFFF" }}
                    interval="preserveStartEnd"
                />

                {/* Axe Y caché avec la durée des sessions comme données */}
                <YAxis hide={true} dataKey="sessionLength" />

                {/* Tooltip personnalisé avec contenu provenant du composant CustomTooltip */}
                <Tooltip content={<CustomTooltip />} offset={5} />

                {/* Ligne représentant la durée moyenne des sessions */}
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="#FFF"
                    dot={false}
                    activeDot={{ r: 4 }}
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default KPI;
