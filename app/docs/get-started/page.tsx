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
                <title>Macrogiciel - Create a New Module</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css"
                />
            </Head>
            {/* Header Section */}
            <header className="bg-purple-900 text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    {/* Company Logo */}
                    <a href="/" className="text-xl font-bold text-white">
                        Macrogiciel
                    </a>

                    {/* Navigation Menu */}
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#prerequisites" className="text-white hover:text-gray-300">Prerequisites</a>
                            </li>
                            <li>
                                <a href="#create-repo" className="text-white hover:text-gray-300">Create a Repository</a>
                            </li>
                            <li>
                                <a href="#modify-module-json" className="text-white hover:text-gray-300">Modify module.json</a>
                            </li>
                            <li>
                                <a href="#modify-icon" className="text-white hover:text-gray-300">Modify Icon</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Prerequisites Section */}
            <section id="prerequisites" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
                    <ul className="list-disc pl-6">
                        <li>Node.js version 16.18.0</li>
                        <li>Latest version of Macrogiciel</li>
                        <li>A GitHub account</li>
                    </ul>
                </div>
            </section>

            {/* Create a Repository Section */}
            <section id="create-repo" className="bg-purple-800 py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Create a Repository on GitHub</h2>
                    <p>Start by creating a new repository on GitHub using the following template:</p>
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

            {/* Modify module.json Section */}
            <section id="modify-module-json" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Modify module.json</h2>
                    <p>Modify the <code className="text-white">module.json</code> file with your module's information:</p>
                    <pre>
                        <code className="text-white">
                            {`{
    "name": "ModuleKit",
    "description": "Module Kit to create your module.",
    "author": "Tai Tetsuyuki",
    "version": "1.0.0",
    "license": "MIT",
    "main": "main.js"
}`}
                        </code>
                    </pre>
                    {/* Documentation content goes here */}
                </div>
            </section>
            {/* Modify Icon Section */}
            <section id="modify-icon" className="bg-purple-800 py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Modify the Module Icon</h2>
                    <p>I recommend using an icon with a size of 512x512 pixels for your module.</p>
                    {/* Documentation content goes here */}
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-purple-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Macrogiciel. All rights reserved.</p>
                    <p>Contact: contact@macrogiciel.com</p>

                    <button className="fixed bottom-4 right-4 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors">
                        <a href="/docs/main.js" className="text-white">main.js File</a>
                    </button>
                </div>
            </footer>
        </div>
    );
}
