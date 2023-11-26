import React from 'react';
import styles from "./KPI.module.css"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import { USER_AVERAGE_SESSIONS } from "../data/data"
import { useParams } from 'react-router-dom';
//https://recharts.org/en-US/examples/TinyLineChart

function KPI() {
    // Récupération du paramètre "id" depuis l'URL à l'aide de useParams
    let { id } = useParams();

    // Jours de la semaine pour l'axe X du graphique
    let day = ["L", "M", "M", "J", "V", "S", "D"];

    // Filtrage des données de sessions moyennes pour l'utilisateur spécifique
    let sessions = USER_AVERAGE_SESSIONS.filter(el => el.userId === Number.parseInt(id))[0];

    // Composant personnalisé pour définir le contenu du Tooltip
    const CustomTooltip = (data) => {
        let { payload, active, coordinate, viewBox } = data;
        if (active && payload && payload.length) {
            console.log(data)
            return (
                <div className={styles.background} style={{ width: (viewBox.width - coordinate.x) + "px", height: '265px', marginTop: '-50px' }}>
                    <div className={styles.content} style={{ top: coordinate.y + "px" }}>
                        {payload[0].value}min
                    </div>
                </div>
            );
        }

        return null;
    };

    // methode qui permet de personnalisé l'affichage des labels sur l'axe X
    const CustomXAxis = ({ x, y, payload }) => {

        console.log(payload)

        // si on est sur les bords on ajoute un offset 
        let offset = payload.value === 1 ? 10 : payload.value === 7 ? -10 : 0;

        return (<g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={40} dx={offset} textAnchor="middle" fill="#FFF">
                {day[payload.value - 1]}
            </text>
        </g>)
    };

    return (
        // Utilisation du conteneur réactif pour rendre le graphique adaptatif
        <ResponsiveContainer width="100%" height={265} className={styles.responsive}>
            {/* LineChart avec différentes propriétés */}
            <LineChart
                data={sessions.sessions}
                margin={{
                    top: 50,
                    right: 0,
                    left: 0,
                    bottom: 40,
                }}
            >
                {/* Titre personnalisé au-dessus du graphique */}
                <text x={20} y={30} fill="#FFFFFF" fontWeight="bold">Durée moyenne des sessions</text>

                {/* Axe X personnalisé avec les jours de la semaine */}
                <XAxis
                    axisLine={false}
                    tickLine={false}
                    dataKey="day"
                    tick={<CustomXAxis />}
                    interval="preserveStartEnd"
                />

                {/* Axe Y caché avec la durée des sessions comme données */}
                <YAxis hide={true} dataKey="sessionLength" />

                {/* Tooltip personnalisé avec contenu provenant du composant CustomTooltip */}
                <Tooltip content={<CustomTooltip />} offset={0} />

                {/* Ligne représentant la durée moyenne des sessions */}
                <Line
                    type="natural"
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
