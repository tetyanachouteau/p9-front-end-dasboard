
import React from 'react';
// Importer votre composant Tooltip personnalisé
// Importer votre composant de forme de barre personnalisé
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { USER_ACTIVITY } from "../data/data"
import { useParams } from 'react-router-dom';
import styles from './Activity.module.css';
//https://recharts.org/en-US/examples/SimpleBarChart

// Ce composant rend un graphique BarChart réactif avec des fonctionnalités personnalisées.

function Activity() {
    // Récupération du paramètre "id" depuis l'URL à l'aide de useParams
    let { id } = useParams();
    // Filtrage des données d'activité pour l'utilisateur spécifique
    let activity = USER_ACTIVITY.filter(el => el.userId === Number.parseInt(id))[0];

    // Composant personnalisé pour définir la forme des barres dans le graphique
    const MaBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <Rectangle x={x} y={y} fill={fill} width={width} height={height} radius={[4, 4, 0, 0]} />;
    };
    //Composant personnalisé pour définir le contenu du Tooltip:
    //CustomTooltip: Ces propriétés sont fournies par Recharts 
    //pour gérer l'état d'activité du Tooltip et les données associées aux barres survolées.
    //active: Indique si le Tooltip est actif (visible) ou non.
    //payload: Un tableau contenant les données associées à chaque barre survolée.
    //La fonction vérifie si le Tooltip est actif et s'il y a des données (payload). 
    //Si c'est le cas, elle renvoie un JSX (format de balisage utilisé par React)
    // qui représente le contenu du Tooltip.
    // Ici le contenu est constitué de deux paragraphes (<p>) affichant le poids (payload[0].value en kg) et les calories (payload[1].value en Kcal).
    //Si le Tooltip n'est pas actif ou s'il n'y a pas de données, la fonction renvoie null, ce qui signifie que le Tooltip ne sera pas affiché.
    //Cette approche permet de personnaliser le contenu du Tooltip en fonction de besoins spécifiques. 
    //Vous pouvez ajuster cette fonction en fonction des informations que vous souhaitez afficher dans le Tooltip lors du survol des barres dans votre graphique.


    // Composant personnalisé pour définir le contenu du Tooltip
    const CustomTooltip = ({ active, payload }) => {
        // Vérifier si le Tooltip est actif et si des données sont disponibles
        if (active && payload && payload.length) {
            return (
                // Conteneur du Tooltip avec la classe CSS styles.content
                <div className={styles.content}>
                    {/* Affichage du poids */}
                    <p>{payload[0].value}kg</p>
                    {/* Les données sont divisées par 4, donc on les remultiplie */}
                    <p>{payload[1].value}Kcal</p>
                </div>
            );
        }

        // Retourner null si le Tooltip n'est pas actif ou s'il n'y a pas de données
        return null;
    };


    const customTickNameX = (data) => {
        // fonction ajouter + 1 à l'index
        return data + 1;
    };

    return (
        // Utilisation du conteneur réactif pour rendre le graphique adaptatif
        // Il enveloppe le graphique et assure qu'il s'ajuste de manière réactive à la largeur et à la hauteur de son conteneur.
        <ResponsiveContainer width="100%" height={300} minWidth={550} className={styles.responsive}>
            {/* BarChart avec différentes propriétés */}
            <BarChart data={activity.sessions} margin={{ top: 30, right: 30, left: 30, bottom: 30 }}>
                {/* Titre personnalisé en svg et non en html : https://github.com/recharts/recharts/issues/478 */}
                <text x={30} y={44} fill="black" fontWeight="bold">Activité quotidienne</text>
                {/* Grille cartésienne */}
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                {/* Axe X sans lignes de repère et les données sont issues de la fonction customDataDate (plus haut) */}
                <XAxis tickLine={false} tickFormatter={customTickNameX} />

                {/* Axe Y à droite sans ligne d'axe ni lignes de repère, data +1 et -1 pour max min, data key =kg */}

                <YAxis
                    yAxisId="left"
                    hide={false}
                />


                <YAxis
                    yAxisId="right"
                    orientation="right"
                    axisLine={false}
                    tickLine={false}
                    dataKey="kilogram"
                    domain={["dataMin-1", "dataMax+1"]}
                    allowDecimals={false}
                />

                {/* Tooltip personnalisé avec contenu provenant du composant CustomTooltip */}
                <Tooltip content={<CustomTooltip />} offset={60} position={{ y: 50 }} />
                {/* Légende avec alignement vertical en haut et à droite */}
                <Legend verticalAlign="top" align="right" iconType='circle' height={100} />
                {/* Barres avec des couleurs et des formes personnalisées
                
                Reduire 
                */}
                <Bar yAxisId="right" dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize={8} shape={<MaBar />} />
                <Bar yAxisId="left" dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" barSize={8} shape={<MaBar />} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Activity;

//La bibliothèque Recharts est utilisée pour créer des graphiques dans les applications React.
// Elle offre une variété de composants pour créer différents types de graphiques,
// tels que les graphiques à barres, les graphiques linéaires, les graphiques à secteurs, etc.
//Voici une brève explication de chaque composant Recharts qu'on trouve
//dans le composant que nous avons discuté précédemment : ResponsiveContainer... 