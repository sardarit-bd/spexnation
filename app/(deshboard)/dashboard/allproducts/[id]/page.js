'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductSinglePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const product = {
        title: "Premium Sunglasses",
        collection: "Summer Collection",
        shortDescription: "Stylish UV protected sunglasses",
        price: 120,
        discount: 10,
        quantity: 50,
        color: "Black",
        size: "Medium",
        weight: "200g",
        material: "Metal",
        shape: "Round",
        style: "Casual",
        description:
            "These premium sunglasses are designed for maximum comfort and style.",
        thumbnail: "https://via.placeholder.com/500x400",
        gallery: [
            "https://via.placeholder.com/200",
            "https://via.placeholder.com/200",
            "https://via.placeholder.com/200",
        ],
    };



    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [singleProducts, setsingleProducts] = useState([]);



    const fetchProducts = async (id) => {
        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/singleProduct/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const res = await response.json();
            setsingleProducts(res?.data);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchProducts(id);
    }, [id])







    console.log(singleProducts);








    return (
        <div className="min-h-screen bg-gray-100">
            <div className="border border-gray-200 bg-white grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
                {/* IMAGE SECTION */}
                <div>
                    <img
                        src={singleProducts?.product_thamnail}
                        className="w-full h-[300px] md:h-[400px] object-contain border border-gray-200"
                    />

                    <div className="flex gap-3 mt-4 overflow-x-auto">
                        {singleProducts?.product_Images?.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                className="w-20 h-20 rounded-lg object-contain border border gray-200"
                            />
                        ))}
                    </div>
                </div>

                {/* DETAILS */}
                <div className="space-y-4 border border-gray-200 p-5">
                    <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
                    <p className="text-gray-500">{product.shortDescription}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <Info label="Collection" value={product.collection} />
                        <Info label="Price" value={`$${product.price}`} />
                        <Info label="Discount" value={`${product.discount}%`} />
                        <Info label="Quantity" value={product.quantity} />
                        <Info label="Color" value={product.color} />
                        <Info label="Size" value={product.size} />
                        <Info label="Weight" value={product.weight} />
                        <Info label="Material" value={product.material} />
                        <Info label="Shape" value={product.shape} />
                        <Info label="Style" value={product.style} />
                    </div>

                    <div>
                        <h3 className="font-semibold">Description</h3>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                    </div>

                    <div className="flex items-center justify-end">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-yellow-700 text-white px-6 py-3 hover:opacity-80 transition w-full md:w-fit"
                        >
                            Update Product
                        </button>
                    </div>

                </div>
            </div>

            {/* MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white w-full max-w-2xl p-6 space-y-4 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Update Product</h2>
                            <button onClick={() => setIsModalOpen(false)}>✕</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input placeholder="Product Title" />
                            <Input placeholder="Collection" />
                            <Input placeholder="Short Description" />
                            <Input placeholder="Product Price" />
                            <Input placeholder="Product Discount" />
                            <Input placeholder="Product Quantity" />
                            <Input placeholder="Product Color" />
                            <Input placeholder="Product Size" />
                            <Input placeholder="Product Weight" />
                            <Input placeholder="Product Material" />
                            <Input placeholder="Product Shape" />
                            <Input placeholder="Product Style" />
                        </div>

                        <textarea
                            placeholder="Description"
                            className="w-full border p-3 min-h-[120px]"
                        />

                        <button className="bg-yellow-700 text-white w-full py-3">
                            Save Changes
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

function Info({ label, value }) {
    return (
        <div className="bg-gray-50 p-3">
            <p className="text-gray-400">{label}</p>
            <p className="font-medium">{value}</p>
        </div>
    );
}

function Input({ placeholder }) {
    return (
        <input
            placeholder={placeholder}
            className="border p-3 w-full"
        />
    );
}