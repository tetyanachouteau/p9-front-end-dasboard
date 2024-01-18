import React from 'react';
import styles from "./Radar.module.css"
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

function RadarComp({perf}) {
    // Extraire les données de performance spécifiques pour le graphique radar
    let data = perf.data.sort((a,b) => {return b.kind-a.kind});

    //Dans cette partie du code, vous effectuez plusieurs opérations :

//perf.data: Vous accédez à la propriété data de l'objet perf. 
//Il est supposé que perf est un objet passé en tant que prop au composant RadarComp, 
//et data contient les données de performance nécessaires pour le graphique radar.

//.sort((a, b) => { return b.kind - a.kind }): tri les données par la propriété kind de manière décroissante. 
//Cela signifie que les données seront triées en fonction de la valeur de kind de chaque élément, 
//de la plus grande à la plus petite. 
//Le tri est effectué en utilisant une fonction de comparaison ((a, b) => { return b.kind - a.kind }), 
//où a et b sont deux éléments à comparer. Cette opération peut être utile si on 
//affiche les catégories du graphique radar dans un ordre spécifique basé sur la valeur de kind.

//En résumé, cette ligne de code extrait les données de performance spécifiques pour le graphique radar à partir de l'objet perf
// et les trie en fonction de la propriété kind de manière décroissante. 
//Cela peut être important pour garantir un ordre spécifique des catégories sur le graphique radar.

    // Mapper les catégories pour les axes X avec des noms plus conviviaux
    let translate = {'cardio': 'Cardio',
    'energy': 'Energie',
    'endurance': 'Endurance',
    'strength': 'Force',
    'speed': 'Vitesse',
    'intensity': 'Intensité'}

    // Fonction personnalisée pour le formatage des noms d'axe X
    const customTickNameX = (data) => {
        // Récupérer le texte qui correspond à l'ID de "kind" dans les données de performance
        return translate[perf.kind[data]];
    };

    // Configuration du composant Recharts RadarChart
    // Plus d'informations: https://recharts.org/en-US/api/RadarChart
    return (
        // Conteneur réactif pour le graphique (s'adapte à la largeur et à la hauteur de son parent)
        <ResponsiveContainer width="100%" height={265} className={styles.responsive}>
            {/* RadarChart avec Recharts */}
            <RadarChart data={data} outerRadius="45%">
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
