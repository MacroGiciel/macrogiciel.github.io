import Head from 'next/head';
import Link from 'next/link';

export default function InternalServerError() {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
            <Head>
                <title>500 Internal Server Error</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css"
                />
            </Head>

            <h1 className="text-4xl font-bold mb-4">500 Internal Server Error</h1>
            <p className="text-lg mb-8">Oops! Something went wrong on our server.</p>
            <a href="/" className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors" >
                Go to Home
            </a>
        </div>
    );
}
