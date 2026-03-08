'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuccessPage({ searchParams }) {
    const [session, setSession] = useState(null);
    const sessionId = useSearchParams().get('session_id');

    console.log(sessionId);

    useEffect(() => {
        if (!sessionId) return;

        async function fetchData() {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/stripe-session?session_id=${sessionId}`,
                    { cache: "no-store" });

                const response = await res.json();
                setSession(response);

            } catch (err) {
                console.error(err);
            }
        }

        fetchData();


    }, [sessionId]);


    if (!sessionId) return <p className="min-h-[50vh] text-center mt-20 text-red-500">No session ID provided.</p>;
    if (!session) return <p className="min-h-[50vh] text-center mt-20">Loading your order...</p>;


    return (
        <div className="h-fit py-20 bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white shadow-lg p-8 max-w-lg w-full text-center">
                <h1 className="text-3xl font-bold text-yellow-600 mb-4">Payment Successful! </h1>
                <p className="text-gray-700 mb-6">Thank you for your order.</p>

                <div className="mb-4 flex gap-2 items-center justify-center">
                    <p className="text-gray-600 font-medium">Order ID:</p>
                    <p className="text-gray-800/70">{session.client_reference_id || "N/A"}</p>
                </div>


                <div className="mt-8 text-center">
                    <a
                        href="/dashboard/user"
                        className="inline-block bg-yellow-700 text-white px-6 py-2 rounded-lg shadow transition"
                    >
                        Go to Dashboard to view your order
                    </a>
                </div>
            </div>
        </div>
    );
}