import React from 'react';
import styles from "./KPI.module.css"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
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
    // Extraction des propriétés nécessaires de l'objet data
    let { payload, active, coordinate, viewBox } = data;

    // Vérifie si le tooltip est actif et s'il y a des données à afficher
    if (active && payload && payload.length) {
        // Calcul de la largeur du fond en fonction de la position de la barre
        const backgroundWidth = viewBox.width - coordinate.x;

        // Rendu du fond du tooltip avec une largeur dynamique
        return (
            <div className={styles.background} style={{ width: backgroundWidth + "px", height: '265px', marginTop: '-50px' }}>
                {/* Rendu du contenu du tooltip avec la valeur de la barre */}
                <div className={styles.content} style={{ top: coordinate.y + "px" }}>
                    {payload[0].value}min
                </div>
            </div>
        );
    }

    // Si le tooltip n'est pas actif ou s'il n'y a pas de données à afficher, retourne null
    return null;
};

    // Méthode qui permet de personnaliser l'affichage des labels sur l'axe X
const CustomXAxis = ({ x, y, payload }) => {
    // Si on est sur les bords, on ajoute un offset pour ajuster la position du label
    let offset = payload.value === 1 ? 10 : payload.value === 7 ? -10 : 0;

    // Rendu du label avec un déplacement (offset) personnalisé
    return (
        <g transform={`translate(${x},${y})`}>
            {/* Texte du label */}
            <text 
                x={0}         // Position horizontale du texte par rapport au point de transformation
                y={0}         // Position verticale du texte par rapport au point de transformation
                dy={40}       // Déplacement vertical du texte par rapport au point de transformation
                dx={offset}   // Déplacement horizontal du texte par rapport au point de transformation (ajout de l'offset)
                textAnchor="middle"  // Alignement horizontal du texte au centre
                fill="#FFF"   // Couleur du texte en blanc
            >
                {/* Récupération du jour correspondant à la valeur du payload */}
                {day[payload.value - 1]}
            </text>
        </g>
    );
};


   // Composant personnalisé pour afficher la durée moyenne des sessions
return (
    // Utilisation du conteneur réactif pour rendre le graphique adaptatif
    <ResponsiveContainer width="100%" height={265} className={styles.responsive}>
        {/* LineChart avec différentes propriétés */}
        <LineChart
            data={sessions.sessions}  // Données pour le graphique
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
                axisLine={false}      // Désactivation de la ligne de l'axe X
                tickLine={false}      // Désactivation des lignes de repère sur l'axe X
                dataKey="day"         // Clé de données pour les jours de la semaine
                tick={<CustomXAxis />} // Utilisation du composant CustomXAxis pour personnaliser les étiquettes
                interval="preserveStartEnd" // Préserver les extrémités de l'axe X
            />

            {/* Axe Y caché avec la durée des sessions comme données */}
            <YAxis hide={true} dataKey="sessionLength" />

            {/* Tooltip personnalisé avec contenu provenant du composant CustomTooltip */}
            <Tooltip content={<CustomTooltip />} offset={0} />

            {/* Ligne représentant la durée moyenne des sessions */}
            <Line
                type="natural"           // Type de la ligne (courbe naturelle)
                dataKey="sessionLength"  // Clé de données pour la durée des sessions
                stroke="#FFF"            // Couleur de la ligne en blanc
                dot={false}              // Désactivation des points sur la ligne
                activeDot={{ r: 4 }}     // Style du point actif lorsqu'on survole la ligne
                strokeWidth={2}          // Épaisseur de la ligne
            />
        </LineChart>
    </ResponsiveContainer>
);
}

export default KPI;
