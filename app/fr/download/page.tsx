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
import { FiTwitter, FiDisc } from 'react-icons/fi';

export default function Download() {
    return (
        <div className="bg-gray-900 text-white">
            <Head>
                <title>Macrogiciel - Téléchargement</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css"
                />
            </Head>
            {/* Section de l'en-tête */}
            <header className="bg-purple-900 text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    {/* Logo de l'entreprise */}
                    <a href="/fr" className="text-xl font-bold">
                        Macrogiciel
                    </a>

                    {/* Menu de navigation */}
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="/fr/#features">Fonctionnalités</a>
                            </li>
                            <li>
                                <a href="/fr/#modules">Modules</a>
                            </li>
                            <li>
                                <a href="#">Téléchargement</a>
                            </li>
                            <li>
                                <a href="/fr/docs">Documentation</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Section de téléchargement */}
            <section id="download" className="py-10">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">Téléchargement de Macrogiciel</h2>
                    <p className="mb-4">
                        Macrogiciel est actuellement en cours de développement. Merci pour votre patience. Cependant, vous pouvez suivre l'avancement du projet sur les réseaux sociaux :
                    </p>
                    <div className="flex justify-center space-x-4 mb-8">
                        <a href="https://twitter.com/Macrogiciel" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-purple-500">
                            <FiTwitter />
                        </a>
                        <a href="https://discord.gg/NAh5ZFpwB9" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-purple-500">
                            <FiDisc />
                        </a>
                    </div>
                    <p className="mb-4">
                        Vous pouvez également vous inscrire à la version bêta de Macrogiciel pour accéder en avant-première aux fonctionnalités en développement. Restez à l'écoute pour les mises à jour et soyez parmi les premiers à découvrir les nouvelles fonctionnalités !
                    </p>
                    <a
                        href="https://6rclj5sugxe.typeform.com/to/udpT86qs"
                        target='_blank'
                        className="bg-purple-500 text-white px-6 py-3 mt-4 rounded-lg inline-block hover:bg-purple-600 transition-colors"
                    >
                        S'inscrire à la version bêta
                    </a>
                </div>
            </section>

            {/* Section du pied de page */}
            <footer className="bg-purple-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>Macrogiciel &copy; {new Date().getFullYear()} Tai Studio. Tous droits réservés.</p>
                    <p>Contact : macrogiciel@outlook.fr</p>
                </div>
            </footer>
        </div>
    );
}