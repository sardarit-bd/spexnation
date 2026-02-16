"use client";

import Image from "next/image";

const cartItems = [
    {
        id: 1,
        name: "TF2249",
        brand: "Tiffany & Co.",
        price: 336,
        lensPrice: 14,
        image: "https://spexnation.co.uk/wp-content/uploads/2026/01/V4671-C60.jpg", // replace with real image
        color: "Black",
        stock: 14,
    },
    {
        id: 2,
        name: "TF2249",
        brand: "Tiffany & Co.",
        price: 336,
        lensPrice: 14,
        image: "https://spexnation.co.uk/wp-content/uploads/2026/01/V4671-C60.jpg",
        color: "Black",
        stock: 14,
    },
];

export default function CartPage() {
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price + item.lensPrice,
        0
    );

    return (
        <section className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* CART ITEMS */}
                <div className="lg:col-span-2 space-y-6">
                    <h1 className="text-2xl font-light text-gray-800 bg-white border p-3">
                        Your Basket ({cartItems.length})
                    </h1>

                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white border p-6 flex gap-6"
                        >
                            {/* IMAGE */}
                            <div className="w-40 shrink-0">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={160}
                                    height={100}
                                    className="object-contain"
                                />
                                <p className="text-sm text-red-500 mt-2">
                                    Only {item.stock} pairs left. Hurry to checkout!
                                </p>
                            </div>

                            {/* DETAILS */}
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-xs uppercase text-gray-400 font-semibold">
                                            {item.brand}
                                        </p>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {item.name} (£350)
                                        </h3>
                                    </div>
                                    <button className="text-gray-400 hover:text-red-500">
                                        ✕
                                    </button>
                                </div>

                                <div className="mt-3 space-y-1 text-sm text-gray-600">
                                    <p>Color: {item.color}</p>
                                    <p>
                                        Distance <span className="text-blue-600">(Details)</span>
                                    </p>
                                </div>

                                <div className="mt-4 space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Frame</span>
                                        <span>£{item.price}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Lens</span>
                                        <span>£{item.lensPrice}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* SUMMARY */}
                <div className="bg-white border p-6 h-fit sticky top-28">
                    <h2 className="text-xl font-light mb-4">Summary</h2>

                    <p className="text-sm text-teal-600 mb-4">
                        Enjoy free shipping
                    </p>

                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span>Items:</span>
                            <span>{cartItems.length}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>£{subtotal}</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-semibold text-lg">
                            <span>Order Total</span>
                            <span>£{subtotal}</span>
                        </div>
                    </div>

                    <button className="w-full mt-6 bg-yellow-700 hover:bg-teal-700 text-lg text-white py-3 rounded-lg font-light transition">
                        Proceed to checkout
                    </button>
                </div>
            </div>
        </section>
    );
}
