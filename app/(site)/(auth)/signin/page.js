"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../../../components/Loading";
import setCookie from "../../../../lib/setcookie";

export default function SignInPage() {

    const router = useRouter();
    const [loading, setloading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        setloading(true);


        // Make API call to add the product
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const res = await response.json();

        if (res.success) {
            toast.success(res.message);
            setCookie("token", res?.data?.token, 1);
            setFormData({
                email: "",
                password: ""
            });
            router.push('/dashboard');
        } else {
            toast.error(res.message);
        }

        setloading(false);




    };

    return (
        <section className="h-fit bg-gray-50 flex items-center justify-center px-4 py-4 md:py-8 lg:py-14">
            <div className="max-w-lg w-full bg-white shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-1">


                {/* Right Form Section */}
                <div className="p-10">
                    <h3 className="text-2xl font-light text-gray-800 mb-6">
                        Login
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-5">


                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                placeholder="john@example.com"
                            />
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                placeholder="**********"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full pBg text-white font-medium py-3 rounded-lg flex items-center justify-center transition duration-300"
                        >


                            {
                                loading ? (
                                    <Loading />
                                ) : (
                                    <span>Sign In</span>
                                )
                            }
                        </button>
                    </form>
                    <div className="pt-3 flex items-center justify-between">
                        <span className="">Don't have an account? <Link href="/signup" className="text-yellow-600">Sign Up</Link></span>

                        <span>
                            <Link href="/forgot-pass" className="text-yellow-600">Forgot Password</Link>
                        </span>
                    </div>
                </div>
            </div>
            <Toaster />
        </section >
    );
}
