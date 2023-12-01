
import React from 'react';
import styles from "./Radar.module.css"
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { USER_PERFORMANCE } from "../data/data"
import { useParams } from 'react-router-dom';

function RadarComp() {
    // Récupération du paramètre "id" depuis l'URL à l'aide de useParams
    let { id } = useParams();

    // Filtrer les données de performance pour l'utilisateur spécifié par l'ID
    let perf = USER_PERFORMANCE.filter(el => el.userId === Number.parseInt(id))[0];

    // Extraire les données de performance spécifiques pour le graphique radar
    let data = perf.data;

    // Fonction personnalisée pour le formatage des noms d'axe X
    const customTickNameX = (data) => {
        // Récupérer le texte qui correspond à l'ID de "kind" dans les données de performance
        return perf.kind[data];
    };


    // https://recharts.org/en-US/api/RadarChart

    // Composant RadarChart personnalisé
return (
    // Conteneur réactif pour le graphique (s'adapte à la largeur et à la hauteur de son parent)
    <ResponsiveContainer width="100%" height={265} className={styles.responsive}>
        {/* RadarChart avec Recharts */}
        <RadarChart data={data}>
            {/* Grille polaire pour le graphique radar */}
            <PolarGrid />
            {/* Axe des angles polaires (axe X) */}
            <PolarAngleAxis
                dataKey="kind"              // Clé de données pour les angles (les catégories à afficher sur l'axe X)
                stroke='#FFF'               // Couleur de la ligne de l'axe des angles polaires en blanc
                tickFormatter={customTickNameX}  // Fonction de formatage des étiquettes de l'axe X
                tickLine={false}            // Désactivation des lignes de repère sur l'axe X
            />
            {/* Données radar à afficher sur le graphique */}
            <Radar
                dataKey="value"              // Clé de données pour les valeurs radar
                fill="#FF0101"               // Couleur de remplissage du radar en rouge
                fillOpacity={0.6}            // Opacité du remplissage du radar
            />
        </RadarChart>
    </ResponsiveContainer>
);

}

export default RadarComp;