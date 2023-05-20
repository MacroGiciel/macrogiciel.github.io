// /*-----------------------------------------------------------------------------------------------------------\
// |  _____     _   _____ _             _ _          _____  _____  _____  __      _______  _____  _____  _____  |
// | |_   _|   (_) /  ___| |           | (_)        / __  \|  _  |/ __  \/  |    / / __  \|  _  |/ __  \|____ | |
// |   | | __ _ _  \ `--.| |_ _   _  __| |_  ___    `' / /'| |/' |`' / /'`| |   / /`' / /'| |/' |`' / /'    / / |
// |   | |/ _` | |  `--. \ __| | | |/ _` | |/ _ \     / /  |  /| |  / /   | |  / /   / /  |  /| |  / /      \ \ |
// |   | | (_| | | /\__/ / |_| |_| | (_| | | (_) |  ./ /___\ |_/ /./ /____| |_/ /  ./ /___\ |_/ /./ /___.___/ / |
// |   \_/\__,_|_| \____/ \__|\__,_|\__,_|_|\___/   \_____/ \___/ \_____/\___/_/   \_____/ \___/ \_____/\____/  |
// \-----------------------------------------------------------------------------------------------------------*/
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';

export default function NewModule() {
    return (
        <div className="bg-gray-900 text-white">
            <Head>
                <title>Macrogiciel - Créer un nouveau module</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css"
                />
            </Head>
            {/* Section de l'en-tête */}
            <header className="bg-purple-900 text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    {/* Logo de l'entreprise */}
                    <a href="/" className="text-xl font-bold text-white">
                        Macrogiciel
                    </a>

                    {/* Menu de navigation */}
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#prerequisites" className="text-white hover:text-gray-300">Prérequis</a>
                            </li>
                            <li>
                                <a href="#create-repo" className="text-white hover:text-gray-300">Créer un dépôt</a>
                            </li>
                            <li>
                                <a href="#modify-module-json" className="text-white hover:text-gray-300">Modifier module.json</a>
                            </li>
                            <li>
                                <a href="#modify-icon" className="text-white hover:text-gray-300">Modifier l'icône</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Section des prérequis */}
            <section id="prerequisites" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Prérequis</h2>
                    <ul className="list-disc pl-6">
                        <li>Node.js version 16.18.0</li>
                        <li>Macrogiciel en dernière version</li>
                        <li>Un compte GitHub</li>
                    </ul>
                </div>
            </section>

            {/* Section de création du dépôt */}
            <section id="create-repo" className="bg-purple-800 py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Créer un dépôt sur GitHub</h2>
                    <p>Commencez par créer un nouveau dépôt sur GitHub en utilisant le modèle suivant :</p>
                    <a
                        href="https://github.com/MacroGiciel/ModuleKit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-500 hover:underline"
                    >
                        https://github.com/MacroGiciel/ModuleKit
                    </a>
                </div>
            </section>

            {/* Section de modification de module.json */}
            <section id="modify-module-json" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Modifier module.json</h2>
                    <p>Modifiez le fichier <code className="text-white">module.json</code> avec les informations de votre module :</p>
                    <pre>
                        <code className="text-white">
                            {`{
    "name": "ModuleKit",
    "description": "Module Kit pour créer votre module.",
    "author": "Tai Tetsuyuki",
    "version": "1.0.0",
    "license": "MIT",
    "main": "main.js"
}`}
                        </code>
                    </pre>
                    {/* Contenu de la documentation */}
                </div>
            </section>
            {/* Section de modification de l'icône */}
            <section id="modify-icon" className="bg-purple-800 py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Modifier l'icône du module</h2>
                    <p>Je vous recommande d'utiliser une icône d'une taille de 512x512 pixels pour votre module.</p>
                    {/* Contenu de la documentation */}
                </div>
            </section>

            {/* Section du pied de page */}
            <footer className="bg-purple-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Macrogiciel. Tous droits réservés.</p>
                    <p>Contact : contact@macrogiciel.com</p>
                    
                    <button className="fixed bottom-4 right-4 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors">
                        <a href="/fr/docs/main.js" className="text-white">Fichier main.js</a>
                    </button>
                </div>
            </footer>
        </div>
    );
}