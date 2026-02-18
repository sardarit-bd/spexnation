'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import SubTotal from "../../components/step/SubTotal";
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
            "Premium light-reactive lenses that darken outdoors and return clear indoors.",
        price: "79",
    },
    {
        id: "transitionxtraactive",
        title: "Transition XtraActive",
        description:
            "Extra-dark photochromic lenses with stronger activation, even behind car windscreens.",
        price: "99",
    },

    {
        id: "photochromiclenses",
        title: "Photochromic Lenses",
        description:
            "Standard light-reactive lenses that darken in sunlight and clear indoors.",
        price: "49",
    },

    {
        id: "sunglasses",
        title: "Sunglasses",
        description: "Fixed-colour tinted lenses for a stylish, sun-ready look.",
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


        // just for remove previous tints from total those is alredy in total
        const calTotal = lens.total.filter((id) => id.target !== "Tints");

        setLens({ ...lens, Transition: opt.id, total: [...calTotal, { target: "Tints", id: opt.id, name: opt.title, price: opt.price }] })
    }



    //handle next function is here
    const handleNext = (e) => {

        e.preventDefault();


        console.log(lens);


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
            className="p-6 bg-white border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between">
                <BackBtn step={step} setStep={setStep} />
                <CircularProgress initialValue={95} />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Tints</h2>

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
                <SubTotal />
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
