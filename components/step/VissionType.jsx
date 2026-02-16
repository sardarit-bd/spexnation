'use client'

import { motion } from "framer-motion";
import Image from 'next/image';
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useLenseStore from "../../store/useLenseStore";
import useStepStore from "../../store/useStepStore";
import Loading from "../Loading";
import BackBtn from "./BackBtn";
import CircularProgress from "./CircularProgress";

const options = [
    {
        id: "distance",
        title: "Distance",
        description:
            "Best for Everyday, General Use",
        img: '/distance.png'
    },
    {
        id: "reading",
        title: "Reading",
        description:
            "Optimize for seeing close-Up",
        img: '/reading.png'
    },
    {
        id: "computerorintermediate",
        title: "Computer/Intermediate",
        description:
            "Perfect for workding at arm's length",
        img: '/cumputer.png'
    },
    {
        id: "noprescription",
        title: "No Prescription",
        description:
            "Clear lenses with no vision correction",
        img: '/noprescription.png'
    }
];


export default function VisionType() {


    const { lens, setLens } = useLenseStore();
    const { step, setStep } = useStepStore();
    const [isLoading, setisLoading] = useState(false);



    useEffect(() => {

        setLens({
            ...lens,
            sph: {
                leftSph: "0",
                rightSph: "0",
            },
            cyl: {
                leftCyl: "0",
                rightCyl: "0",
            },
            axis: {
                leftAxis: "0",
                rightAxis: "0",
            },
            add: {
                leftAdd: "0",
                rightAdd: "0",
            },

            addPrism: false,
            leftPrism: {
                vertical: "0",
                vBaseDirection: "N/A",
                horizontal: "0",
                hBaseDirection: "N/A",
            },
            rightPrism: {
                vertical: "0",
                vBaseDirection: "N/A",
                horizontal: "0",
                hBaseDirection: "N/A",
            },
        })

    }, [])




    //handle next function is here
    const handleNext = (e) => {


        e.preventDefault();


        if (lens?.LenseUseCase) {
            setisLoading(true);
            setTimeout(() => {
                setisLoading(false);
                setStep(2);
            }, 700);
        } else {
            toast.error("Must be select Glasses Use Case");
            return;
        }


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
                <CircularProgress initialValue={15} />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Select glasses use case?</h2>

            {/* Options */}
            <div className="w-full space-y-4">
                {options.map((opt, index) => (
                    <button
                        key={opt.id}
                        onClick={(e) => { setLens({ ...lens, LenseUseCase: opt?.id }) }}
                        className={`w-full h-full bg-gray-100 text-left p-2 rounded-md border transition-all
              ${lens?.LenseUseCase === opt.id
                                ? "border-yellow-500 bg-yellow-50"
                                : "border-gray-200 hover:border-yellow-500/80"
                            }`}
                    >
                        <div className="flex gap-3">
                            <div>
                                <Image className="w-[80px] h-[80px] rounded-sm object-cover object-center" src={opt.img} alt="check" width={30} height={30} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900/90">{opt.title}</h3>
                                <p className="text-md text-gray-600 mt-1">{opt.description}</p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between border-t pt-4">
                <p
                    className="text-md font-semibold text-gray-900">SUBTOTAL:</p>
                <span className="text-md font-semibold">
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
