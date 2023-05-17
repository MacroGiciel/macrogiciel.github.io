// /*-----------------------------------------------------------------------------------------------------------\
// |  _____     _   _____ _             _ _          _____  _____  _____  __      _______  _____  _____  _____  |
// | |_   _|   (_) /  ___| |           | (_)        / __  \|  _  |/ __  \/  |    / / __  \|  _  |/ __  \|____ | |
// |   | | __ _ _  \ `--.| |_ _   _  __| |_  ___    `' / /'| |/' |`' / /'`| |   / /`' / /'| |/' |`' / /'    / / |
// |   | |/ _` | |  `--. \ __| | | |/ _` | |/ _ \     / /  |  /| |  / /   | |  / /   / /  |  /| |  / /      \ \ |
// |   | | (_| | | /\__/ / |_| |_| | (_| | | (_) |  ./ /___\ |_/ /./ /____| |_/ /  ./ /___\ |_/ /./ /___.___/ / |
// |   \_/\__,_|_| \____/ \__|\__,_|\__,_|_|\___/   \_____/ \___/ \_____/\___/_/   \_____/ \___/ \_____/\____/  |
// \-----------------------------------------------------------------------------------------------------------*/
import Head from 'next/head';
import Image from 'next/image';

const LoadingPage = () => {
    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
            <Head>
                <title>Chargement - Macrogiciel</title>
            </Head>

            <div className="flex flex-col items-center">
                <Image src="/icon_512x512.png" alt="Macrogiciel Logo" width={200} height={200} />

                <h1 className="text-white text-2xl font-bold mt-4">Chargement...</h1>
            </div>
        </div>
    );
};

export default LoadingPage;
