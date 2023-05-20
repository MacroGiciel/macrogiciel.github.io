// /*-----------------------------------------------------------------------------------------------------------\
// |  _____     _   _____ _             _ _          _____  _____  _____  __      _______  _____  _____  _____  |
// | |_   _|   (_) /  ___| |           | (_)        / __  \|  _  |/ __  \/  |    / / __  \|  _  |/ __  \|____ | |
// |   | | __ _ _  \ `--.| |_ _   _  __| |_  ___    `' / /'| |/' |`' / /'`| |   / /`' / /'| |/' |`' / /'    / / |
// |   | |/ _` | |  `--. \ __| | | |/ _` | |/ _ \     / /  |  /| |  / /   | |  / /   / /  |  /| |  / /      \ \ |
// |   | | (_| | | /\__/ / |_| |_| | (_| | | (_) |  ./ /___\ |_/ /./ /____| |_/ /  ./ /___\ |_/ /./ /___.___/ / |
// |   \_/\__,_|_| \____/ \__|\__,_|\__,_|_|\___/   \_____/ \___/ \_____/\___/_/   \_____/ \___/ \_____/\____/  |
// \-----------------------------------------------------------------------------------------------------------*/
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';

export default function Home() {
    return (
        <div className="bg-gray-900 text-white">
            <Head>
                <title>Macrogiciel - Logiciel de Macro Avancé</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css"
                />
            </Head>
            {/* Section d'en-tête */}
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
                                <a href="#features">Fonctionnalités</a>
                            </li>
                            <li>
                                <a href="#modules">Modules</a>
                            </li>
                            <li>
                                <a href="#download">Téléchargement</a>
                            </li>
                            <li>
                                <a href="/fr/docs">Documentation</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Section principale */}
            <section className="bg-purple-900 py-10">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Transformez votre clavier avec Macrogiciel
                    </h1>
                    <img
                        src="/hero-image.png"
                        alt="Macrogiciel en action"
                        className="mx-auto w-1/2"
                    />
                    <a
                        href="/fr/download"
                        className="bg-purple-500 text-white px-6 py-3 mt-4 rounded-lg inline-block hover:bg-purple-600 transition-colors"
                    >
                        Télécharger maintenant
                    </a>
                </div>
            </section>

            {/* Section d'introduction */}
            <section className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Débloquez la puissance des macros</h2>
                    <p className="mb-4">
                        Macrogiciel est un logiciel de macro avancé qui vous permet de transformer chaque touche de votre clavier en une macro activable. Il prend en charge une large gamme de claviers et vous permet de créer des modules personnalisés.
                    </p>
                    <p className="mb-4">
                        Avec Macrogiciel, vous pouvez créer des dossiers, lire des fichiers audio, gérer des profils, saisir du texte et effectuer des combinaisons de touches, le tout en utilisant des macros assignées à chaque touche de votre clavier.
                    </p>
                    <p className="mb-4">
                        Que vous soyez un joueur, un streamer ou quelqu'un qui souhaite automatiser des tâches répétitives, Macrogiciel est l'outil idéal pour améliorer votre productivité.
                    </p>
                </div>
            </section>

            {/* Section des fonctionnalités */}
            <section id="features" className="bg-purple-800 py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Principales fonctionnalités</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-purple-700 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-2">Création de dossiers</h3>
                            <p>Créez des dossiers en appuyant simplement sur une touche pour une meilleure organisation.</p>
                        </div>
                        <div className="bg-purple-700 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-2">Lecture audio</h3>
                            <p>Lisez instantanément vos fichiers audio préférés à l'aide de macros dédiées.</p>
                        </div>
                        <div className="bg-purple-700 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-2">Gestion des profils</h3>
                            <p>Passez facilement d'un profil à un autre avec des macros assignées.</p>
                        </div>
                        {/* Ajoutez d'autres cartes de fonctionnalités au besoin */}
                    </div>
                </div>
            </section>

            {/* Section de présentation des modules */}
            <section id="modules" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Présentation des modules</h2>
                    <p className="mb-8">Découvrez les modules supplémentaires inclus avec Macrogiciel :</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-purple-700 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-2">Contrôle Discord</h3>
                            <p>
                                Prenez le contrôle de Discord avec des macros dédiées pour activer/désactiver le mode muet, rejoindre des canaux vocaux/textuels, et plus encore.
                            </p>
                        </div>
                        <div className="bg-purple-700 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-2">Corbeille</h3>
                            <p>Videz votre corbeille en un seul clic à l'aide du module Corbeille.</p>
                        </div>
                        <div className="bg-purple-700 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-2">Twitch</h3>
                            <p>
                                Gérez le chat et le stream de votre chaîne Twitch en toute simplicité, y compris la création de clips et les annonces de chat.
                            </p>
                        </div>
                        {/* Ajoutez d'autres cartes de modules au besoin */}
                    </div>
                </div>
            </section>

            {/* Section d'appel à l'action */}
            <section id="download" className="bg-purple-900 py-10">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">Prêt à commencer ?</h2>
                    <p className="mb-4">
                        Téléchargez Macrogiciel dès maintenant et découvrez l'univers des macros puissantes et personnalisables !
                    </p>
                    <a
                        href="/fr/download"
                        className="bg-purple-500 text-white px-6 py-3 mt-4 rounded-lg inline-block hover:bg-purple-600 transition-colors"
                    >
                        Télécharger maintenant
                    </a>
                </div>
            </section>

            {/* Section de support */}
            <section id="support" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Besoin d'aide ou avez-vous des questions ?</h2>
                    <p className="mb-4">
                        Notre équipe d'assistance est là pour vous aider.
                    </p>
                    <p className="mb-4">
                        Contactez-nous à l'adresse macrogiciel@outlook.fr
                    </p>
                    <p className="mb-4">
                        Vous pouvez également trouver une documentation utile et des FAQ sur notre site web.
                    </p>
                </div>
            </section>

            {/* Section de pied de page */}
            <footer className="bg-purple-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>Macrogiciel &copy; {new Date().getFullYear()} Tai Studio. Tous droits réservés.</p>
                    <p>Contact : macrogiciel@outlook.fr</p>
                </div>
            </footer>
        </div>
    );
}