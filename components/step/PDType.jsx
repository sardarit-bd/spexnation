'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { PDNumberOptionForDual, PDNumberOptionForSingle } from "../../Data/PDNumberOption";
import useLenseStore from "../../store/useLenseStore";
import useStepStore from "../../store/useStepStore";
import Loading from "../Loading";
import BackBtn from "./BackBtn";
import CircularProgress from "./CircularProgress";


export default function PDType() {


    const { lens, setLens } = useLenseStore();
    const { step, setStep } = useStepStore();
    const [isLoading, setisLoading] = useState(false);




    // handle single PD function is here
    const hanldeSinglePD = (e) => {
        setLens({
            ...lens,
            pdType: 'spd',
            dualPD: {
                leftPD: "",
                rightPD: "",
            }
        })
    }



    // handle dual PD function is here
    const handleDualPD = (e) => {
        setLens({
            ...lens,
            pdType: 'dpd',
            singlePD: "",
        })
    }



    //handle next function is here
    const handleNext = (e) => {


        e.preventDefault();


        if (lens?.pdType) {

            if (lens?.pdType === 'spd') {
                if (lens?.singlePD) {
                    setisLoading(true);
                    setTimeout(() => {
                        setisLoading(false);
                        setStep(4);
                    }, 700);
                } else {
                    toast.error("Please select Single PD option");
                    return;
                }
            } else {
                if (lens?.dualPD.leftPD && lens?.dualPD.rightPD) {
                    setisLoading(true);
                    setTimeout(() => {
                        setisLoading(false);
                        setStep(4);
                    }, 700);
                } else {
                    toast.error("Please select Dual PD option, Right and Left Both");
                    return;
                }
            }



        } else {
            toast.error("Please select an option");
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
            className="w-full max-w-2xl mx-auto p-6 bg-white border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between">
                <BackBtn step={step} setStep={setStep} />
                <CircularProgress initialValue={45} />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Select PD Type</h2>


            {/* PD */}
            <div className="mt-6">
                <div className="flex flex-col items-start gap-2">
                    <h2 className="font-semibold text-lg text-gray-600">PD Type: </h2>
                    <div className="flex gap-3 items-center">
                        <button onClick={(e) => { hanldeSinglePD(e) }} className={` px-2 py-1 ${lens?.pdType === 'spd' ? 'sBg text-white' : 'bg-gray-300 text-gray-600'}`}>Single PD</button>
                        <button onClick={(e) => { handleDualPD(e) }} className={` px-2 py-1 ${lens?.pdType === 'dpd' ? 'sBg text-white' : 'bg-gray-300 text-gray-600'}`}>Dual PD</button>
                    </div>
                </div>
                <div className="flex items-center gap-6">


                    {
                        lens?.pdType === 'dpd' ? (
                            <>

                                <div className="flex flex-col items-start gap-1 mt-5 w-full">
                                    <h2 className="font-semibold text-sm text-gray-600">{`Right PD (MM)`} </h2>
                                    <div className="w-full">
                                        <select
                                            value={lens?.dualPD.rightPD}
                                            onChange={(e) => { setLens({ ...lens, dualPD: { ...lens.dualPD, rightPD: e.target.value } }) }}
                                            className="w-full border p-2 rounded-md focus:outline-yellow-500/60"
                                        >
                                            <option className="text-md text-gray-600 font-medium" value={''}>Select Right PD</option>

                                            {PDNumberOptionForDual?.map((n) => (
                                                <option className="text-md text-gray-600 font-medium" key={n} value={n}>{n}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>


                                <div className="flex flex-col items-start gap-1 mt-5 w-full">
                                    <h2 className="font-semibold text-sm text-gray-600">{`Left PD (MM)`} </h2>
                                    <div className="w-full">
                                        <select
                                            value={lens?.dualPD.leftPD}
                                            onChange={(e) => { setLens({ ...lens, dualPD: { ...lens.dualPD, leftPD: e.target.value } }) }}
                                            className="w-full border p-2 rounded-md focus:outline-yellow-500/60"
                                        >
                                            <option className="text-md text-gray-600 font-medium" value={''}>Select Left PD</option>

                                            {PDNumberOptionForDual?.map((n) => (
                                                <option className="text-md text-gray-600 font-medium" key={n} value={n}>{n}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                            </>

                        ) : (

                            <div className="flex flex-col items-start gap-1 mt-5 w-full">
                                <h2 className="font-semibold text-sm text-gray-600">{`Single PD (MM)`} </h2>
                                <div className="w-full">
                                    <select
                                        value={lens?.singlePD}
                                        onChange={(e) => { setLens({ ...lens, singlePD: e.target.value }) }}
                                        className="w-full border p-2 rounded-md focus:outline-yellow-500/60"
                                    >
                                        <option className="text-md text-gray-600 font-medium" value={''}>Select Single PD</option>

                                        {PDNumberOptionForSingle?.map((n) => (
                                            <option className="text-md text-gray-600 font-medium" key={n} value={n}>{n}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>


                        )
                    }
                </div>
            </div >



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
