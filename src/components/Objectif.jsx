import React from 'react';
import styles from "./Objectif.module.css"
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

function Objectif({ score }) {

    // Définir les données pour le graphique radial

    //Ces données sont ensuite utilisées dans le composant RadialBarChart pour 
    //construire le graphique radial en fonction des valeurs spécifiées dans le tableau data. 

    //Chaque élément du tableau représente une section du graphique, avec les propriétés suivantes :

    //name: Le nom de la section, utilisé pour référencer la section dans le graphique.
    //value: La valeur associée à la section. Dans le cas de la première section ("total"), 
        //la valeur est le complément à 1 du score, et dans le cas de la deuxième section ("objectif"), la valeur est le score lui-même.
    //fill: La couleur de remplissage de la section: couleur grise, pour la deuxième section: couleur rouge.

    const data = [
        {
            name: "total",        // Nom de la première section du graphique
            value: 1 - score,     // Valeur associée à la première section (complément à 1 du score)
            fill: "#FBFBFB"       // Couleur de remplissage pour la première section
        },
        {
            name: "objectif",     // Nom de la deuxième section du graphique
            value: score,         // Valeur associée à la deuxième section (score)
            fill: "#FF0000"       // Couleur de remplissage pour la deuxième section
        }
    ];

    // Configuration du composant Recharts RadialBarChart
    // Plus d'informations: https://recharts.org/en-US/api/RadialBarChart
    return (
        <ResponsiveContainer width="100%" height={265} className={styles.responsive}>
            <RadialBarChart
                innerRadius="80%"   // Définir le rayon intérieur du graphique radial
                barSize={10}        // Définir la taille des barres radiales
                startAngle={90}     // Définir l'angle de départ du graphique
                endAngle={450}      // Définir l'angle de fin du graphique
                data={data}
            >
                {/* Ajouter une étiquette pour le score */}
                <text x={30} y={44} fill="black" fontWeight="bold">Score</text>

                {/* Configurer la barre radiale */}
                <RadialBar
                    label={false}
                    background="#FFF"
                    clockWise
                    cornerRadius={5}
                    dataKey="value"
                />

                {/* Afficher le pourcentage du score */}
                <text
                    x="44%"
                    y={112}
                    fill="black"
                    fontWeight="bold"
                >
                    {Math.floor(score * 100)}% {/* Afficher le pourcentage du score */}
                </text>

                {/* Ajouter des textes d'information */}
                <text x="42%" y={132} fill="#AAA">de votre</text>
                <text x="42%" y={152} fill="#AAA">objectif</text>
            </RadialBarChart>
        </ResponsiveContainer>
    );
}

export default Objectif;
