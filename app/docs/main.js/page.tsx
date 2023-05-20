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
                    <a href="" className="text-xl font-bold">
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
                                    Error Handling
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
                        The <code>init()</code> function is called whenever Macrogiciel needs to execute a macro with your module. The function should retrieve the data that allows you to trigger the desired action. Macrogiciel sends a JSON object as follows:
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
                        It is recommended to use a switch statement on <code>data.mode</code> to perform the appropriate actions based on the specified mode.
                    </p>
                    {/* Documentation content goes here */}
                </div>
            </section>

            {/* register() Section */}
            <section id="register" className="bg-purple-800 py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">register()</h2>
                    <p>
                        The <code>register()</code> function allows you to register the modes you have coded in Macrogiciel and provide a brief description for the end user.
                    </p>
                    <p>
                        Don't forget to export your modes with <code>module.exports.options = mode;</code> and return <code>mode</code>.
                    </p>
                    {/* Documentation content goes here */}
                </div>
            </section>

            {/* Error Handling Section */}
            <section id="error-handling" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Error Handling</h2>
                    <p>
                        When creating a module, make sure to handle errors that may occur during the execution of your module in Macrogiciel. Use error handling mechanisms such as try-catch blocks to capture and handle errors appropriately.
                    </p>
                    {/* Documentation content goes here */}
                </div>
            </section>

            {/* Get Started Button */}
            <div className="fixed bottom-4 left-4">
                <a href="/docs/get-started" className="bg-purple-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-purple-600 transition-colors">
                    Get Started
                </a>
            </div>

            {/* Publish Button */}
            <div className="fixed bottom-4 right-4">
                <a href="/docs/publish" className="bg-purple-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-purple-600 transition-colors">
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
