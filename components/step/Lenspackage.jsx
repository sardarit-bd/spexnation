'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import useStepStore from "../../store/useStepStore";
import Loading from "../Loading";
import BackBtn from "./BackBtn";
import CircularProgress from "./CircularProgress";

const options = [
    {
        id: "no-coating",
        title: "No Coating",
        description: "",
        price: "£00",
    },
    {
        id: "anti-glare-surface",
        title: "Anti Glare Surface",
        description:
            "ODAK Clean&CleAR 1.6 lens with anti-reflective, scratch-resistant, water repellent coating, extra durability, Anti-UV, and greater contrast.",
        price: "£39",
    },
    {
        id: "Blue-Light-Filter",
        title: "Blue Light Filter",
        description:
            "ODAK Clean&CleAR 1.6 lens with anti-reflective, scratch-resistant, water repellent coating, extra durability, Anti-UV, and greater contrast.",
        price: "£99",
    },
    {
        id: "tinted-lens",
        title: "Tinted Lens",
        description: "ODAK Clean&CleAR 1.6 lens with anti-reflective, scratch-resistant, water repellent coating, extra durability, Anti-UV, and greater contrast.",
        price: "£29",
    },

    {
        id: "Oleophobic Anti Reflective",
        title: "Oleophobic Anti Reflective",
        description: "ODAK Clean&CleAR 1.6 lens with anti-reflective, scratch-resistant, water repellent coating, extra durability, Anti-UV, and greater contrast.",
        price: "£39",
    },
];


export default function Lenspackage() {

    const [selected, setSelected] = useState(null);
    const { step, setStep } = useStepStore();
    const [isLoading, setisLoading] = useState(false);




    //handle next function is here
    const handleNext = () => {
        setisLoading(true);
        setTimeout(() => {
            setisLoading(false);
            setStep(5);
        }, 700);
    }



    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: .7,
                delay: 0,
                ease: "easeOut"
            }}
            className="max-w-2xl mx-auto p-6 bg-white border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between">
                <BackBtn step={step} setStep={setStep} />
                <CircularProgress initialValue={65} />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Protective Coatings</h2>

            {/* Options */}
            <div className="space-y-4">
                {options.map((opt, index) => (
                    <button
                        key={opt.id}
                        onClick={() => setSelected(opt.id)}
                        className={`w-full bg-gray-100 text-left p-4 rounded-md border transition-all
              ${selected === opt.id
                                ? "border-yellow-500 bg-yellow-50"
                                : "border-gray-200 hover:border-yellow-500/80"
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900">{opt.title}</h3>
                            <h2 className="text-xl font-bold">{opt.price}</h2>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{opt.description}</p>
                    </button>
                ))}
            </div>

            <p className="pt-6 font-medium text-lg text-gray-600/70">
                Choose one of our great value packages above, or continue with basic lenses which have no protective coatings.
            </p>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between border-t pt-4">
                <p
                    className="text-lg font-semibold text-gray-900/90">SUBTOTAL:</p>
                <span className="text-md text-gray-600 mt-1">
                    £124
                </span>
            </div>


            {/* Action Buttons */}
            <div className="space-y-3 mt-6">
                <button

                    onClick={() => { handleNext() }} className="w-full pBg text-white font-bold py-4 rounded-lg transition flex items-center justify-center gap-2">
                    {
                        isLoading ? <Loading /> : "Next"
                    }
                </button>
            </div>


        </motion.div>
    );
}
