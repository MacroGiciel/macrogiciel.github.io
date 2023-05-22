import Head from 'next/head';
import { useEffect, useState } from 'react';

interface Module {
    name: string;
    description: string;
    package: string;
}

export default function ModuleList() {
    const [moduleList, setModuleList] = useState<Module[]>([]);

    useEffect(() => {
        fetchModuleList();
    }, []);

    const fetchModuleList = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/MacroGiciel/Extensions/main/list.json');
            const data = await response.json();
            setModuleList(data);
        } catch (error) {
            console.error('Error fetching module list:', error);
        }
    };

    return (
        <div className="bg-gray-900 text-white">
            <Head>
                <title>Macrogiciel - Liste des modules</title>
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

            {/* Module List */}
            <section className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Liste des modules</h2>
                    {moduleList.length === 0 ? (
                        <p>Loading...</p>
                    ) : (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {Object.entries(moduleList).map(([key, module]) => (
                                <li key={key} className="bg-gray-800 p-4 rounded-lg">
                                    <h3 className="text-xl font-bold mb-2">{module.name}</h3>
                                    <p>{module.description}</p>
                                    <div className="mt-4">
                                        <a
                                            href={`https://github.com/MacroGiciel/Extensions/blob/main/modules/${module.package}.asar`}
                                            className="bg-purple-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-purple-600 transition-colors"
                                            download
                                        >
                                            Télécharger
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>

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
