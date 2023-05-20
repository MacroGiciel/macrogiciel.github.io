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

export default function DocumentationMain() {
    return (
        <div className="bg-gray-900 text-white">
            <Head>
                <title>Macrogiciel - Documentation main.js</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css"
                />
            </Head>

            {/* Header Section */}
            <header className="bg-purple-900 text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    {/* Company Logo */}
                    <a href="/fr" className="text-xl font-bold">
                        Macrogiciel
                    </a>
                </div>
            </header>

            {/* Publish Instructions */}
            <section className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Publier votre module</h2>
                    <p>
                        Pour publier votre module, suivez ces étapes :
                    </p>
                    <ol className="list-decimal pl-8 mt-4">
                        <li>
                            Forkez le dépôt suivant :
                            <a
                                href="https://github.com/MacroGiciel/Extensions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-500 hover:text-purple-400 ml-2"
                            >
                                MacroGiciel/Extensions
                            </a>
                        </li>
                        <li>
                            Créez un nouveau fichier JSON dans le répertoire "extensions/" avec le nom de votre extension.
                        </li>
                        <li>
                            Remplissez le fichier JSON avec les informations suivantes :
                            <pre className="mt-2">
                                <code className="text-white">
                                    {`{
  "name": "Nom de votre module",
  "description": "Description de votre module",
  "package": "Nom du fichier d'archive",
  "version": "1.0.0",
  "author": "Tai Tetsuyuki",
  "category": "Streaming",
  "license": "MIT",
  "repository": "Lien vers votre dépôt GitHub"
}`}
                                </code>
                            </pre>
                        </li>
                        <li>
                            Ouvrez une pull request pour soumettre votre module à la publication.
                        </li>
                    </ol>
                </div>
            </section>

            <div className="fixed bottom-4 left-4">
                <a href="/fr/docs/main.js" className="bg-purple-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-purple-600 transition-colors">
                    Fichier main.js
                </a>
            </div>

            {/* Footer Section */}
            <footer className="bg-purple-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>Macrogiciel &copy; {new Date().getFullYear()} Tai Studio. Tous droits réservés.</p>
                    <p>Contact : macrogiciel@outlook.fr</p>
                </div>
            </footer>
        </div>
    );
}
