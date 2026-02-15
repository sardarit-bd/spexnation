import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useLenseStore from "../../store/useLenseStore";
import useStepStore from "../../store/useStepStore";
import Loading from "../Loading";
import BackBtn from "./BackBtn";
import CircularProgress from "./CircularProgress";
export default function Review() {


    const { step, setStep } = useStepStore();
    const router = useRouter();
    const { lens, setLens } = useLenseStore();
    const [isLoading, setisLoading] = useState(false);



    console.log(lens);



    // handle confirm function is here
    function handleConfirm() {

        setisLoading(true);
        setTimeout(() => {
            setisLoading(false);
            router.push('/basket');
        }, 700);
    }


    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: .7,
                delay: 0,
                ease: "easeOut"
            }}
            className="max-w-3xl w-full mx-auto p-6 bg-white rounded-lg shadow-sm border border-gray-200">

            {/* Header */}
            <div className="flex items-center justify-between">
                <BackBtn step={step} setStep={setStep} />
                <CircularProgress initialValue={100} />
            </div>

            {/* Header */}
            <h1 className="text-3xl font-semibold text-center text-gray-900">
                Review Your Selections
            </h1>
            <p className="mt-2 text-center text-md text-gray-500/90">
                All orders include <span className="font-medium">120-day free returns</span>.
            </p>

            {/* Prescription Details */}
            <div className="mt-8 w-full">
                <h2 className="text-lg font-medium text-gray-700/70 mb-3">
                    Prescription Details
                </h2>

                {/* Main Prescription Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 text-sm text-center">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="border px-3 py-2"></th>
                                <th className="border px-3 py-2">SPH</th>
                                <th className="border px-3 py-2">CYL</th>
                                <th className="border px-3 py-2">Axis</th>
                                <th className="border px-3 py-2">ADD</th>
                                <th className="border px-3 py-2">{lens.pdType = "spd" ? "S-PD" : "D-PD"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-3 py-2 font-medium">OD</td>
                                <td className="border px-3 py-2">{lens?.sph?.rightSph}</td>
                                <td className="border px-3 py-2">{lens?.cyl?.rightCyl}</td>
                                <td className="border px-3 py-2">{lens?.axis?.rightAxis}</td>
                                <td className="border px-3 py-2">{lens?.add?.rightAdd}</td>
                                <td className="border px-3 py-2" rowSpan={lens.pdType = "spd" ? 2 : 1}>{lens.pdType = "spd" ? lens.singlePD : lens.dualPD.rightPD}</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2 font-medium">OS</td>
                                <td className="border px-3 py-2">{lens?.sph?.leftSph}</td>
                                <td className="border px-3 py-2">{lens?.cyl?.leftCyl}</td>
                                <td className="border px-3 py-2">{lens?.axis?.leftAxis}</td>
                                <td className="border px-3 py-2">{lens?.add?.leftAdd}</td>



                                {/* {
                                    lens.pdType = "dpd" && (
                                        <td className="border px-3 py-2">{lens.dualPD.leftPD}</td>
                                    )
                                } */}

                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Prism Table */}
                {
                    lens?.addPrism && (
                        <div className="overflow-x-auto mt-6">
                            <table className="w-full border border-gray-300 text-sm text-center">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="border px-3 py-2"></th>
                                        <th className="border px-3 py-2">Vertical Prism (Δ)</th>
                                        <th className="border px-3 py-2">Base Direction</th>
                                        <th className="border px-3 py-2">Horizontal Prism (Δ)</th>
                                        <th className="border px-3 py-2">Base Direction</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-3 py-2 font-medium">OD</td>
                                        <td className="border px-3 py-2">{lens?.rightPrism?.vertical}</td>
                                        <td className="border px-3 py-2">{lens?.rightPrism?.vBaseDirection}</td>
                                        <td className="border px-3 py-2">{lens?.rightPrism?.horizontal}</td>
                                        <td className="border px-3 py-2">{lens?.rightPrism?.hBaseDirection}</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-3 py-2 font-medium">OS</td>
                                        <td className="border px-3 py-2">{lens?.leftPrism?.vertical}</td>
                                        <td className="border px-3 py-2">{lens?.leftPrism?.vBaseDirection}</td>
                                        <td className="border px-3 py-2">{lens?.leftPrism?.horizontal}</td>
                                        <td className="border px-3 py-2">{lens?.leftPrism?.hBaseDirection}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                }


            </div>

            {/* Product Summary */}
            <div className="mt-8 space-y-2 text-sm">
                <div className="flex justify-between text-md font-medium text-gray-800/90">
                    <span className="">{lens?.LenseName}</span>
                    <span className="">£336</span>
                </div>
                <div className="flex justify-between text-md font-medium text-gray-800/90">
                    <span >{lens?.LenseUseCase}</span>
                    <span>Free</span>
                </div>
                <div className="flex justify-between text-md font-medium text-gray-800/90">
                    <span>Prism</span>
                    <span>£15</span>
                </div>
                <div className="flex justify-between text-md font-medium text-gray-800/90">
                    <span>Surfacing charge</span>
                    <span>£14</span>
                </div>
            </div>

            {/* Divider */}
            <div className="my-6 border-t" />

            {/* Total */}
            <div className="flex justify-between items-center">
                <span className="text-xl text-gray-700/80 font-semibold">Subtotal</span>
                <span className="text-xl font-semibold">£365</span>
            </div>

            {/* <p className="mt-1 text-sm text-gray-500">
                3 interest-free payments of £121.67 with{" "}
                <span className="font-medium">Klarna</span>
            </p> */}

            {/* CTA */}
            <button onClick={() => { handleConfirm() }} className="mt-6 w-full pBg text-white font-semibold py-3 rounded-md transition flex items-center justify-center">

                {
                    isLoading ? <Loading /> : "Confirm & Add to Basket"
                }
            </button>
        </motion.div>
    );
}
