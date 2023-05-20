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

                    {/* Navigation Menu */}
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#init" className="text-white hover:text-gray-300">
                                    init()
                                </a>
                            </li>
                            <li>
                                <a href="#register" className="text-white hover:text-gray-300">
                                    register()
                                </a>
                            </li>
                            <li>
                                <a href="#error-handling" className="text-white hover:text-gray-300">
                                    Gestion des erreurs
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* init() Section */}
            <section id="init" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">init()</h2>
                    <p>
                        La fonction <code>init()</code> est appelée chaque fois que Macrogiciel doit exécuter une macro avec votre module. La fonction doit récupérer les données qui vous permettent de déclencher l'action souhaitée. Macrogiciel envoie un JSON comme suit :
                    </p>
                    <pre>
                        <code className="text-white">
                            {`{
  "mode": "selectScene",
  "argument": "Pause"
}`}
                        </code>
                    </pre>
                    <p>
                        Il est recommandé d'utiliser une instruction switch sur <code>data.mode</code> pour exécuter les actions appropriées en fonction du mode spécifié.
                    </p>
                    {/* Documentation content goes here */}
                </div>
            </section>

            {/* register() Section */}
            <section id="register" className="bg-purple-800 py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">register()</h2>
                    <p>
                        La fonction <code>register()</code> permet d'enregistrer dans Macrogiciel les modes que vous avez codés, ainsi que de définir une brève description pour l'utilisateur final.
                    </p>
                    <p>
                        N'oubliez pas d'exporter vos modes avec <code>module.exports.options = mode;</code> et de retourner <code>mode</code>.
                    </p>
                    {/* Documentation content goes here */}
                </div>
            </section>

            {/* Error Handling Section */}
            <section id="error-handling" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Gestion des erreurs</h2>
                    <p>
                        Lorsque vous créez un module, veillez à bien gérer les erreurs qui pourraient survenir pendant l'exécution de votre module dans Macrogiciel. Utilisez des mécanismes de gestion des erreurs tels que les blocs try-catch pour capturer et traiter les erreurs de manière appropriée.
                    </p>
                    {/* Documentation content goes here */}
                </div>
            </section>

            {/* Get Started Button */}
            <div className="fixed bottom-4 left-4">
                <a href="/fr/docs/get-started" className="bg-purple-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-purple-600 transition-colors">
                    Get Started
                </a>
            </div>

            {/* Publish Button */}
            <div className="fixed bottom-4 right-4">
                <a href="/fr/docs/publish" className="bg-purple-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-purple-600 transition-colors">
                    Publish
                </a>
            </div>

            {/* Footer Section */}
            <footer className="bg-purple-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>Macrogiciel &copy; {new Date().getFullYear()} Tai Studio. All rights reserved.</p>
                    <p>Contact: macrogiciel@outlook.fr</p>
                </div>
            </footer>
        </div>
    );
}
