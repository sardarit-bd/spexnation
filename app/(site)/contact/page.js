"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* Left Info Section */}
                <div className="bg-gradient-to-br from-yellow-600 to-yellow-900 text-white p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-indigo-100 mb-8">
                        Have a project in mind or just want to say hello?
                        We’d love to hear from you.
                    </p>

                    <div className="space-y-4 text-sm">
                        <p>📍 Dhaka, Bangladesh</p>
                        <p>📧 contact@example.com</p>
                        <p>📞 +880 1234-567890</p>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="p-10">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">
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
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full pBg text-white font-medium py-3 rounded-lg transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
