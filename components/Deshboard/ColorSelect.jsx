"use client"
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const colors = [
    { name: "Black", value: "#000000" },
    { name: "Gray", value: "#808080" },
    { name: "Dark Gray", value: "#A9A9A9" },
    { name: "Light Gray", value: "#D3D3D3" },
    { name: "Silver", value: "#C0C0C0" },
    { name: "Platinum", value: "#E5E4E2" },
    { name: "Charcoal", value: "#36454F" },
    { name: "Slate", value: "#708090" },
    { name: "Ivory", value: "#FFFFF0" },
    { name: "Azure", value: "#F0FFFF" },
    { name: "White", value: "#FFFFFF" },
    { name: "Tan", value: "#D2B48C" },
    { name: "Beige", value: "#F5F5DC" },
    { name: "Cream", value: "#FFFDD0" },
    { name: "Plum", value: "#DDA0DD" },
    { name: "Orchid", value: "#DA70D6" },
    { name: "Periwinkle", value: "#CCCCFF" },
    { name: "Mint Cream", value: "#F5FFFA" },
    { name: "Snow", value: "#FFFAFA" },
    { name: "Red", value: "#FF0000" },
    { name: "Dark Red", value: "#8B0000" },
    { name: "Crimson", value: "#DC143C" },
    { name: "Tomato", value: "#FF6347" },
    { name: "Coral", value: "#FF7F50" },
    { name: "Orange", value: "#FFA500" },
    { name: "Dark Orange", value: "#FF8C00" },
    { name: "Gold", value: "#FFD700" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Light Yellow", value: "#FFFFE0" },
    { name: "Lemon", value: "#FFF44F" },
    { name: "Green", value: "#008000" },
    { name: "Dark Green", value: "#006400" },
    { name: "Lime", value: "#00FF00" },
    { name: "Olive", value: "#808000" },
    { name: "Mint", value: "#98FF98" },
    { name: "Sea Green", value: "#2E8B57" },
    { name: "Teal", value: "#008080" },
    { name: "Cyan", value: "#00FFFF" },
    { name: "Turquoise", value: "#40E0D0" },
    { name: "Sky Blue", value: "#87CEEB" },
    { name: "Light Blue", value: "#ADD8E6" },
    { name: "Blue", value: "#0000FF" },
    { name: "Navy", value: "#000080" },
    { name: "Royal Blue", value: "#4169E1" },
    { name: "Indigo", value: "#4B0082" },
    { name: "Purple", value: "#800080" },
    { name: "Violet", value: "#8F00FF" },
    { name: "Lavender", value: "#E6E6FA" },
    { name: "Magenta", value: "#FF00FF" },
    { name: "Pink", value: "#FFC0CB" },
    { name: "Hot Pink", value: "#FF69B4" },
    { name: "Deep Pink", value: "#FF1493" },
    { name: "Rose", value: "#FF007F" },
    { name: "Brown", value: "#A52A2A" },
    { name: "Saddle Brown", value: "#8B4513" },
    { name: "Chocolate", value: "#D2691E" },
    { name: "Maroon", value: "#800000" },
    { name: "Amber", value: "#FFBF00" },
    { name: "Peach", value: "#FFE5B4" },
    { name: "Apricot", value: "#FBCEB1" },
    { name: "Salmon", value: "#FA8072" },

];

export default function ColorSelect({ value = [], onChange }) {

    const [open, setOpen] = useState(false);

    const MAX = 5;
    const toggleColor = (color) => {
        const exists = value.find(c => c.value === color.value);

        let updated;

        if (exists) {
            updated = value.filter(c => c.value !== color.value);
            onChange(updated);
            return;
        }

        //  prevent selecting more than 5
        if (value.length >= MAX) {
            toast.error("You can select maximum 5 colors");
            return;
        };

        updated = [...value, color];
        onChange(updated);
    };

    return (
        <div className="relative w-full">

            {/* Selected */}
            <div
                onClick={() => setOpen(!open)}
                className="w-full border border-gray-300 p-2 flex flex-wrap gap-2 cursor-pointer min-h-[42px]"
            >
                {
                    value.length ? (
                        value.map((color, i) => (
                            <div key={i} className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded relative">
                                <div
                                    className="w-3 h-3 rounded"
                                    style={{ background: color.value }}
                                />
                                {color.name}

                                {/* Remove Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation(); // dropdown open prevent
                                        const updated = value.filter(c => c.value !== color.value);
                                        onChange(updated);
                                    }}
                                    className="absolute top-0 right-0 text-xs font-bold text-gray-500 bg-red-400 text-white w-3 h-3 rounded-full flex items-center justify-center transform translate-x-1/2 -translate-y-1/2 cursor-pointer"
                                >
                                    ✕
                                </button>
                            </div>
                        ))
                    ) : (
                        <span className="text-gray-400">Colour</span>
                    )
                }
            </div>

            {/* Dropdown */}
            {
                open && (
                    <div className="absolute w-full bg-white max-h-[400px] overflow-y-scroll border mt-1 z-50 shadow">
                        {
                            colors.map((color, i) => {
                                const selected = value.find(c => c.value === color.value);

                                return (
                                    <div
                                        key={i}
                                        onClick={() => toggleColor(color)}
                                        className={`flex items-center gap-2 p-2 cursor-pointer
                                            ${selected ? "bg-blue-50" : "hover:bg-gray-100"}
                                        `}
                                    >
                                        <div
                                            className="w-5 h-5 rounded border border-gray-200"
                                            style={{ background: color.value }}
                                        />
                                        {color.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            <Toaster />
        </div>
    );
}