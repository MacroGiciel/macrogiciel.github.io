/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';

export default function Home() {
    return (
        <div className="bg-gray-900 text-white">
            <Head>
                <title>Macrogiciel - Advanced Macro Software</title>
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

                    {/* Navigation Menu */}
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#features">Features</a>
                            </li>
                            <li>
                                <a href="#modules">Modules</a>
                            </li>
                            <li>
                                <a href="#download">Download</a>
                            </li>
                            <li>
                                <a href="/docs">Documentation</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-purple-900 py-10">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Transform Your Keyboard with Macrogiciel
                    </h1>
                    <img
                        src="/hero-image.png"
                        alt="Macrogiciel in action"
                        className="mx-auto w-1/2"
                    />
                    <a
                        href="/download"
                        className="bg-purple-500 text-white px-6 py-3 mt-4 rounded-lg inline-block hover:bg-purple-600 transition-colors"
                    >
                        Download Now
                    </a>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Unlock the Power of Macros</h2>
                    <p className="mb-4">
                        Macrogiciel is an advanced macro software that lets you turn every
                        key on your keyboard into an activatable macro. It supports a wide
                        range of keyboards and allows you to create custom modules.
                    </p>
                    <p className="mb-4">
                        With Macrogiciel, you can create folders, play audio files, manage
                        profiles, input text, and perform key combinations, all using macros
                        assigned to each keyboard key.
                    </p>
                    <p className="mb-4">
                        Whether you're a gamer, streamer, or someone who wants to automate
                        repetitive tasks, Macrogiciel is the perfect tool to enhance your
                        productivity.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="bg-purple-800 py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-purple-700 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-2">Folder Creation</h3>
                            <p>Create folders with a single key press for better organization.</p>
                        </div>
                        <div className="bg-purple-700 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-2">Audio Playback</h3>
                            <p>Play your favorite audio files instantly using dedicated macros.</p>
                        </div>
                        <div className="bg-purple-700 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-2">Profile Management</h3>
                            <p>Effortlessly switch between different profiles with assigned macros.</p>
                        </div>
                        {/* Add more feature cards as needed */}
                    </div>
                </div>
            </section>

            {/* Module Showcase Section */}
            <section id="modules" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Module Showcase</h2>
                    <p className="mb-8">Discover the additional modules that come with Macrogiciel:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-purple-700 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-2">Discord Control</h3>
                            <p>
                                Take control of Discord with dedicated macros for muting/unmuting, joining
                                voice/text channels, and more.
                            </p>
                        </div>
                        <div className="bg-purple-700 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-2">Trash</h3>
                            <p>Empty your trash with a single click using the Trash module.</p>
                        </div>
                        <div className="bg-purple-700 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-2">Twitch</h3>
                            <p>
                                Manage your Twitch chat and stream with ease, including clip creation and
                                chat announcements.
                            </p>
                        </div>
                        {/* Add more module cards as needed */}
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section id="download" className="bg-purple-900 py-10">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="mb-4">
                        Download Macrogiciel now and unlock the world of powerful and
                        customizable macros!
                    </p>
                    <a
                        href="/download"
                        className="bg-purple-500 text-white px-6 py-3 mt-4 rounded-lg inline-block hover:bg-purple-600 transition-colors"
                    >
                        Download Now
                    </a>
                </div>
            </section>

            {/* Support Section */}
            <section id="support" className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Need Help or Have Questions?</h2>
                    <p className="mb-4">
                        Our support team is here to assist you.
                    </p>
                    <p className="mb-4">
                        Contact us at macrogiciel@outlook.fr
                    </p>
                    <p className="mb-4">
                        You can also find helpful documentation and FAQs on our website.
                    </p>
                </div>
            </section>

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
