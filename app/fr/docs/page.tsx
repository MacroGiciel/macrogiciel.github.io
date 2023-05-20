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

export default function Docs() {
    return (
        <div className="bg-gray-900 text-white">
            <Head>
                <title>Macrogiciel - Documentation</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css"
                />
            </Head>
            {/* Section de l'en-tête */}
            <header className="bg-purple-900 text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    {/* Logo de l'entreprise */}
                    <a href="/fr" className="text-xl font-bold text-white">
                        Macrogiciel
                    </a>

                    {/* Menu de navigation */}
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#getting-started" className="text-white hover:text-gray-300">Commencer</a>
                            </li>
                            <li>
                                <a href="#create-module" className="text-white hover:text-gray-300">Créer un module</a>
                            </li>
                            <li>
                                <a href="#websocket" className="text-white hover:text-gray-300">WebSocket</a>
                            </li>
                            <li>
                                <a href="#support" className="text-white hover:text-gray-300">Support</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Section de démarrage */}
            <section id="getting-started" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Commencer</h2>
                    <p>Découvrez Macrogiciel en moins de 5 minutes.</p>
                    {/* Contenu de la documentation */}
                </div>
            </section>

            {/* Section de création d'un module */}
            <section id="create-module" className="bg-purple-800 py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Créer un module</h2>
                    <p>Commencez par créer un nouveau dossier et ouvrez une invite de commandes.</p>
                    <p>Ensuite, exécutez la commande suivante :</p>
                    <pre>
                        <code className="text-white">npm init</code>
                    </pre>
                    <p>Vous pouvez taper cette commande dans l'invite de commandes, PowerShell, Terminal ou tout autre terminal intégré dans votre éditeur de code.</p>
                    <p>Créez un fichier <code className="text-white">module.json</code> avec le contenu suivant :</p>
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
            {/* Section WebSocket */}
            <section id="websocket" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">WebSocket</h2>
                    <p>Macrogiciel intègre un serveur Web que vous pouvez utiliser pour automatiser l'exécution de vos macros.</p>
                    <p>Accédez à l'URL suivante pour déclencher une macro :</p>
                    <pre>
                        <code className="text-white">
                            {`http://localhost:{PORT}/run/{KEYBOARDid}/{PROFILE}/{MACROID}`}
                        </code>
                    </pre>
                    <p>Par défaut, le port est réglé sur 5755.</p>
                    <p>Par exemple :</p>
                    <pre>
                        <code className="text-white">http://localhost:5755/run/0/Default/360</code>
                    </pre>
                    {/* Contenu de la documentation */}
                </div>
            </section>

            {/* Section de support */}
            <section id="support" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Besoin d'aide ou avez-vous des questions ?</h2>
                    <p>Si vous avez besoin d'aide ou si vous avez des questions sur Macrogiciel, nous sommes là pour vous aider !</p>
                    <p>Rejoignez notre communauté Discord pour vous connecter avec d'autres utilisateurs et obtenir le soutien de notre équipe.</p>
                    <a
                        href="https://discord.gg/macrogiciel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-500 text-white px-6 py-3 mt-4 rounded-lg inline-block hover:bg-purple-600 transition-colors"
                    >
                        Rejoindre Discord
                    </a>
                </div>
            </section>

            {/* Section du pied de page */}
            <footer className="bg-purple-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Macrogiciel. Tous droits réservés.</p>
                    <p>Contact : contact@macrogiciel.com</p>
                </div>
            </footer>
        </div>
    );
}