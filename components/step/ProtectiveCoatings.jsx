'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import useLenseStore from "../../store/useLenseStore";
import useStepStore from "../../store/useStepStore";
import Loading from "../Loading";
import BackBtn from "./BackBtn";
import CircularProgress from "./CircularProgress";

const options = [
    {
        id: "atni-glare",
        title: "Anti Glare",
        description: "Anti Glare is used as a protective coating",
        price: "£00",
    },
    {
        id: "hydrophobic-anti-glare",
        title: "Hydrophobic Anti-Glare",
        description:
            "ODAK Clean&CleAR 1.6 lens with anti-reflective, scratch-resistant, water repellent coating, extra durability, Anti-UV, and greater contrast.",
        price: "£39",
    },
    {
        id: "blue-light-filter",
        title: "Blue Light Filter",
        description:
            "ODAK Clean&CleAR 1.6 lens with anti-reflective, scratch-resistant, water repellent coating, extra durability, Anti-UV, and greater contrast.",
        price: "£99",
    },
    {
        id: "clear-uv-protective-coating",
        title: "Clear UV Protective Coating",
        description: "ODAK Clean&CleAR 1.6 lens with anti-reflective, scratch-resistant, water repellent coating, extra durability, Anti-UV, and greater contrast.",
        price: "£29",
    },
    {
        id: "no-coating",
        title: "No Protective Coating",
        description: "No Protective Coating is used",
        price: "£00",
    },
];


export default function ProtectiveCoatings() {


    const { step, setStep } = useStepStore();
    const [isLoading, setisLoading] = useState(false);
    const [seemore, setseemore] = useState(false);
    const { lens, setLens } = useLenseStore();



    console.log(lens);



    //handle next function is here
    const handleNext = (e) => {

        e.preventDefault();

        setisLoading(true);
        setTimeout(() => {
            setisLoading(false);
            setStep(6);
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
                <CircularProgress initialValue={75} />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Protective Coatings</h2>

            {/* Options */}
            <div className="space-y-4 max-h-[50vh] overflow-y-scroll">
                {options.map((opt, index) => (
                    <button
                        key={opt.id}
                        onClick={() => { setLens({ ...lens, ProtectiveCoatings: opt.id }) }}
                        className={`w-full bg-gray-100 text-left p-4 rounded-md border transition-all
              ${lens?.ProtectiveCoatings === opt.id
                                ? "border-yellow-500 bg-yellow-50"
                                : "border-gray-200 hover:border-yellow-500/80"
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900">{opt.title}</h3>
                            <h2 className="text-xl font-bold">{opt.price}</h2>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{opt.description}</p>


                        {
                            seemore && (
                                <div className="mt-6">
                                    <h3>Benefits</h3>
                                    <ul className="list-disc ml-4 mb-3 text-sm">
                                        <li>Reduces reflections and glare from screens & headlights</li>
                                        <li>Makes lenses easier to clean</li>
                                        <li>mproves night driving visibility</li>
                                        <li>Enhances visual clarity & contrast</li>
                                    </ul>
                                </div>
                            )

                        }


                        {/* <button onClick={() => { setseemore(!seemore) }} className="text-xs font-semibold text-gray-600 mt-1 bg-green-100 border border-green-300 py-1 px-2 rounded-md">{seemore ? "See More" : "See Less"}</button> */}

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

                    onClick={(e) => { handleNext(e) }} className="w-full pBg text-white font-bold py-4 rounded-lg transition flex items-center justify-center gap-2">
                    {
                        isLoading ? <Loading /> : "Next"
                    }
                </button>
            </div>


        </motion.div>
    );
}
