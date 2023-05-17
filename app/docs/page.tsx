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
                                <a href="#getting-started" className="text-white hover:text-gray-300">Getting Started</a>
                            </li>
                            <li>
                                <a href="#create-module" className="text-white hover:text-gray-300">Create a Module</a>
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

            {/* Getting Started Section */}
            <section id="getting-started" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
                    <p>Let's discover Macrogiciel in less than 5 minutes.</p>
                    {/* Documentation content goes here */}
                </div>
            </section>

            {/* Create a Module Section */}
            <section id="create-module" className="bg-purple-800 py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Create a Module</h2>
                    <p>Start by creating a new folder and opening a command prompt.</p>
                    <p>Then run the following command:</p>
                    <pre>
                        <code className="text-white">npm init</code>
                    </pre>
                    <p>You can type this command in the command prompt, PowerShell, Terminal, or any other integrated terminal in your code editor.</p>
                    <p>Create a <code className="text-white">module.json</code> file with the following content:</p>
                    <pre>
                        <code className="text-white">
                            {`{
    "name": "ModuleKit",
    "description": "Module Kit for creating your module.",
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

            {/* WebSocket Section */}
            <section id="websocket" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">WebSocket</h2>
                    <p>Macrogiciel integrates a web server that you can use to automate the execution of your macros.</p>
                    <p>Access the following URL to trigger a macro:</p>
                    <pre>
                        <code className="text-white">
                            {`http://localhost:{PORT}/run/{KEYBOARDid}/{PROFILE}/{MACROID}`}
                        </code>
                    </pre>
                    <p>By default, the port is set to 5755.</p>
                    <p>For example:</p>
                    <pre>
                        <code className="text-white">http://localhost:5755/run/0/Default/360</code>
                    </pre>
                    {/* Documentation content goes here */}
                </div>
            </section>

            {/* Support Section */}
            <section id="support" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Need Help or Have Questions?</h2>
                    <p>If you need any assistance or have questions about Macrogiciel, we're here to help!</p>
                    <p>Join our Discord community to connect with other users and get support from our team.</p>
                    <a
                        href="https://discord.gg/macrogiciel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-500 text-white px-6 py-3 mt-4 rounded-lg inline-block hover:bg-purple-600 transition-colors"
                    >
                        Join Discord
                    </a>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-purple-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Macrogiciel. All rights reserved.</p>
                    <p>Contact: contact@macrogiciel.com</p>
                </div>
            </footer>
        </div>
    );
}
