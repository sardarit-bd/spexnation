'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import disableAndRecommandedLogic from "../../lib/disableAndRecommandedLogic";
import useLenseStore from "../../store/useLenseStore";
import useStepStore from "../../store/useStepStore";
import Loading from "../Loading";
import BackBtn from "./BackBtn";
import CircularProgress from "./CircularProgress";
import NotavailableToolTip from "./NotavailableToolTip";
import RecommandedBox from "./RecommandedBox";

const options = [
    {
        id: "standard",
        title: "Standard",
        description: "Standard 1.5 lens with anti-reflective, scratch-resistant coating.",
    },
    {
        id: "1.60",
        title: "1.60",
        description:
            "Thin 1.6 lens with anti-reflective, scratch-resistant, and Anti-UV coating.",
    },
    {
        id: "1.67",
        title: "1.67",
        description:
            "ODAK Clean&CleAR 1.6 lens with anti-reflective, scratch-resistant, water repellent coating, extra durability, Anti-UV, and greater contrast.",
    }
];


export default function LensCategory() {

    const [selected, setSelected] = useState(null);
    const { step, setStep } = useStepStore();
    const { lens, setLens } = useLenseStore();
    const [isLoading, setisLoading] = useState(false);
    const [disAndRecommanded, setdisAndRecommanded] = useState({});



    //handle next function is here
    const handleNext = () => {
        setisLoading(true);

        setTimeout(() => {
            setisLoading(false);
            setStep(4);
        }, 700);
    }




    useEffect(() => {
        const result = disableAndRecommandedLogic(lens);
        setdisAndRecommanded(result);
    }, [lens]);



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
                <CircularProgress initialValue={45} />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Lens Thickness</h2>

            {/* Options */}
            <div className="space-y-4">
                {options.map((opt, index) => (
                    <button
                        key={opt.id}
                        disabled={disAndRecommanded?.disables?.includes(opt.id)}
                        onClick={() => { setLens({ ...lens, LenseThickness: opt.id }) }}
                        className={`relative group w-full bg-gray-100 text-left p-4 rounded-md border transition-all disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600
                            ${lens?.LenseThickness === opt.id
                                ? "border-yellow-500 bg-yellow-50"
                                : `border-gray-200 ${!disAndRecommanded?.disables?.includes(opt.id)
                                && "hover:border-yellow-500/80"}`
                            }`}
                    >
                        <div className="flex items-center gap-1 justify-between">
                            <h3 className="text-xl font-semibold text-gray-900">{opt.title}</h3>
                            <div>
                                {
                                    opt?.id == disAndRecommanded?.recommanded && <RecommandedBox />
                                }
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{opt.description}</p>

                        {
                            disAndRecommanded?.disables?.includes(opt.id) && <NotavailableToolTip />
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

                    onClick={() => { handleNext() }} className="w-full pBg text-white font-bold py-4 rounded-lg transition flex items-center justify-center gap-2">
                    {
                        isLoading ? <Loading /> : "Next"
                    }
                </button>
            </div>


        </motion.div>
    );
}
