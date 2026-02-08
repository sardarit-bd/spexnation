'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import useStepStore from "../../store/useStepStore";
import BackBtn from "./BackBtn";
import CircularProgress from "./CircularProgress";

const options = [
    {
        id: "distance",
        title: "Distance",
        description:
            "You mostly need glasses to see things in the distance, e.g. whilst driving.",
    },
    {
        id: "bifocal",
        title: "Bifocal & Varifocal",
        description:
            "You need glasses to see things up close and in the distance.",
    },
    {
        id: "reading",
        title: "Reading",
        description:
            "You mostly need glasses to see things up close, e.g. papers, documents, etc.",
    },
    {
        id: "non-prescription",
        title: "Non Prescription",
        description: "Basic lenses with no vision correction.",
    },
];


export default function VisionType() {
    const [selected, setSelected] = useState(null);
    const { step, setStep } = useStepStore();


    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 1,
                delay: 0,
                ease: "easeOut"
            }}
            className="max-w-2xl mx-auto p-6 bg-white border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between">
                <BackBtn step={step} setStep={setStep} />
                <CircularProgress initialValue={30} />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Vision Type</h2>

            {/* Options */}
            <div className="space-y-4">
                {options.map((opt, index) => (
                    <button
                        key={opt.id}
                        onClick={() => setSelected(opt.id)}
                        className={`w-full text-left p-4 rounded-xl border transition-all
              ${selected === opt.id
                                ? "border-blue-600 bg-blue-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                    >
                        <h3 className="font-semibold text-gray-900">{opt.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{opt.description}</p>
                    </button>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between border-t pt-4">
                <p
                    className="font-semibold text-gray-900">SUBTOTAL: £124</p>
            </div>


            {/* Action Buttons */}
            <div className="space-y-3 mt-6">
                <button

                    onClick={() => { setStep(step + 1) }} className="w-full pBg text-white font-bold py-4 rounded-lg transition flex items-center justify-center gap-2">
                    Next
                </button>
            </div>


        </motion.div>
    );
}
