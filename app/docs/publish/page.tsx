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
                    <a href="/" className="text-xl font-bold">
                        Macrogiciel
                    </a>
                </div>
            </header>

            {/* Publish Instructions */}
            <section className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Publish Your Module</h2>
                    <p>
                        To publish your module, follow these steps:
                    </p>
                    <ol className="list-decimal pl-8 mt-4">
                        <li>
                            Fork the following repository:
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
                            Create a new JSON file in the "extensions/" directory with the name of your extension.
                        </li>
                        <li>
                            Fill the JSON file with the following information:
                            <pre className="mt-2">
                                <code className="text-white">
                                    {`{
  "name": "Your Module Name",
  "description": "Your Module Description",
  "package": "Archive File Name",
  "version": "1.0.0",
  "author": "Tai Tetsuyuki",
  "category": "Streaming",
  "license": "MIT",
  "repository": "Link to Your GitHub Repository"
}`}
                                </code>
                            </pre>
                        </li>
                        <li>
                            Open a pull request to submit your module for publication.
                        </li>
                    </ol>
                </div>
            </section>

            <div className="fixed bottom-4 left-4">
                <a href="/docs/main.js" className="bg-purple-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-purple-600 transition-colors">
                    main.js File
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
