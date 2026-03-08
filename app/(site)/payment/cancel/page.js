'use client'


export default function SuccessPage({ searchParams }) {

    return (
        <div className="h-fit py-20 bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white shadow-lg p-8 max-w-lg w-full text-center">
                <h1 className="text-3xl font-bold text-yellow-600 mb-4">Oops! </h1>
                <h1 className="text-3xl font-bold text-yellow-600 mb-4">Payment was Failed! </h1>

                <div className="mt-8 text-center">
                    <a
                        href="/basket"
                        className="inline-block bg-yellow-700 text-white px-6 py-2 rounded-lg shadow transition"
                    >
                        Try Again
                    </a>
                </div>
            </div>
        </div>
    );
}