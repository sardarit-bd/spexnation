'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import useLenseStore from "../../store/useLenseStore";
import useStepStore from "../../store/useStepStore";
import Loading from "../Loading";
import BackBtn from "./BackBtn";
import CircularProgress from "./CircularProgress";
import ColorAndDarkness from "./ColorAndDarkness";


const options = [
    {
        id: "clear",
        title: "Clear",
        description: "No Transitions or Final touches",
        price: "0",
    },
    {
        id: "transitions",
        title: "Transitions",
        description:
            "ODAK Clean&CleAR 1.6 lens with anti-reflective, scratch-resistant, water repellent coating, extra durability, Anti-UV, and greater contrast.",
        price: "79",
    },
    {
        id: "transitionxtraactive",
        title: "Transition XtraActive",
        description:
            "ODAK Clean&CleAR 1.6 lens with anti-reflective, scratch-resistant, water repellent coating, extra durability, Anti-UV, and greater contrast.",
        price: "99",
    },
    {
        id: "tint",
        title: "Tint",
        description: "ODAK Clean&CleAR 1.6 lens with anti-reflective, scratch-resistant, water repellent coating, extra durability, Anti-UV, and greater contrast.",
        price: "12",
    }
];


export default function Transition() {

    const { step, setStep } = useStepStore();
    const [isLoading, setisLoading] = useState(false);
    const { lens, setLens } = useLenseStore();


    console.log(lens);


    // handle transition btn click function is here
    const handleTransitionClick = (e, opt) => {

        e.preventDefault();

        setLens({ ...lens, Transition: opt.id })
    }




    //handle next function is here
    const handleNext = (e) => {

        e.preventDefault();


        if (!lens?.Transition) {
            toast.error("Must be select Transition and Final Touches option");
            return;
        }


        setisLoading(true);
        setTimeout(() => {
            setisLoading(false);
            setStep(7);
        }, 700);
    }




    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
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
                <CircularProgress initialValue={95} />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Transition and Final Touches</h2>

            <p className="pb-6 font-medium text-lg text-gray-600/70">
                Add photochromic technology to your lenses for enhanced clarity and contrast.
            </p>

            {/* Options */}
            <div className="space-y-4">
                {options.map((opt, index) => (
                    <button
                        key={opt.id}
                        onClick={(e) => { handleTransitionClick(e, opt) }}
                        className={`w-full bg-gray-100 text-left p-4 rounded-md border transition-all
              ${lens?.Transition === opt.id
                                ? "border-yellow-500 bg-yellow-50"
                                : "border-gray-200 hover:border-yellow-500/80"
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900">{opt.title}</h3>
                            <h2 className="text-xl font-bold">£{opt.price}</h2>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{opt.description}</p>


                        {
                            lens?.Transition === opt.id && (
                                <ColorAndDarkness />
                            )
                        }



                    </button>
                ))}
            </div>


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

            <Toaster position="bottom-center" />
        </motion.div>
    );
}
