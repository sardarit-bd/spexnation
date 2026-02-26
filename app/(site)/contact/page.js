"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../../components/Loading";

export default function ContactPage() {

    const [loading, setloading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setloading(true);


        try {
            // Make API call to add the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const res = await response.json();

            if (res.success) {
                toast.success(res.message);
                setFormData({ name: "", email: "", message: "" });
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            console.error('Error adding product:', error);
            toast.error(res.message);
        }







        setloading(false);
    };

    return (
        <section className="h-fit bg-gray-50 flex items-center justify-center px-4 py-4 md:py-8 lg:py-14">
            <div className="max-w-6xl w-full bg-white shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* Left Info Section */}
                <div className="bg-gradient-to-br from-yellow-600 to-yellow-900 text-white p-10 flex flex-col justify-center">
                    <h2 className="text-4xl font-light mb-4">Get in Touch</h2>
                    <p className="text-indigo-100 font-light mb-8">
                        Have a project in mind or just want to say hello?
                        We’d love to hear from you.
                    </p>

                    <div className="space-y-4 text-sm">
                        <p> 890 Street Village, Atalanta, Italy</p>
                        <p> contact@example.com</p>
                        <p> +61 089 988 8722</p>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="p-10">
                    <h3 className="text-4xl font-light text-gray-800 mb-6">
                        Contact Us
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Email Address
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
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                required
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full pBg text-white font-medium py-3 rounded-lg transition duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-600"
                        >



                            {
                                loading ? (
                                    <Loading />
                                ) : (
                                    <span>Send Message</span>
                                )
                            }
                        </button>
                    </form>
                </div>
            </div>
            <Toaster />
        </section>
    );
}
