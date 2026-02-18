'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import NotavailableToolTip from "../../components/step/NotavailableToolTip";
import SubTotal from "../../components/step/SubTotal";
import useLenseStore from "../../store/useLenseStore";
import useStepStore from "../../store/useStepStore";
import Loading from "../Loading";
import BackBtn from "./BackBtn";
import CircularProgress from "./CircularProgress";
import ProtectiveImageShow from "./protectiveImageShow";

const options = [
    {
        id: "atni-glare",
        title: "Anti Glare",
        description: " Reduces reflections and glare for clearer, more comfortable vision.",
        price: "25",
        img: '/anti-glair.png'
    },
    {
        id: "hydrophobic-anti-glare",
        title: "Hydrophobic Anti-Glare",
        description:
            "Premium antiglare with a water- and oil-repellent layer for easier cleaning and fewer smudges.",
        price: "35",
        img: '/hydro-anti-glair.png'
    },
    {
        id: "blue-light-filter",
        title: "Blue Light Filter",
        description:
            "Helps reduce blue light from screens to improve visual comfort during digital use.",
        price: "29",
        img: '/blue-screen.png'
    },
    {
        id: "clear-uv-protective-coating",
        title: "Clear UV Protective Coating",
        description: "Adds extra protection by blocking harmful ultraviolet (UV) rays.",
        price: "15",
        img: '/un-sun-protecting.png'
    },
    // {
    //     id: "no-coating",
    //     title: "No Protective Coating",
    //     description: "No Protective Coating is used",
    //     price: "0",
    // },
];


export default function ProtectiveCoatings() {


    const { step, setStep } = useStepStore();
    const [isLoading, setisLoading] = useState(false);
    const { lens, setLens } = useLenseStore();
    const [disableingState, setdisableingState] = useState([]);



    // protective coating automaticely selected is here
    const automaticallySelected = (() => {

        if (lens?.LenseThickness == "1.60" || lens?.LenseThickness == "1.67") {

            setLens({
                ...lens,
                ProtectiveCoatings: ["atni-glare"],
                total: [...lens.total, { target: "Anti Glare", id: "atni-glare", name: "Anti Glare", price: 25 }]
            });
            setdisableingState(["atni-glare"]);
        }
        return;
    })



    useEffect(() => {

        automaticallySelected();

    }, []);



    //handle next function is here
    const handleNext = (e) => {

        e.preventDefault();


        if (lens?.ProtectiveCoatings?.length < 1) {
            toast.error("Must be select Protective Coating Option");
            return;
        }

        setisLoading(true);
        setTimeout(() => {
            setisLoading(false);
            setStep(6);
        }, 700);
    }



    // hanlde protective coating click
    const handleProtectiveCoatingClick = (e, opt) => {
        e.preventDefault();


        if (lens.ProtectiveCoatings.includes(opt.id)) {
            setLens({
                ...lens,
                ProtectiveCoatings: lens.ProtectiveCoatings.filter((id) => id !== opt.id),
                total: lens.total.filter((id) => id.name !== opt.title)
            });
            return;
        }

        setLens({
            ...lens,
            ProtectiveCoatings: [...lens.ProtectiveCoatings, opt.id],
            total: [...lens.total, { target: "Protective", id: opt.id, name: opt.title, price: opt.price }]
        });

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
            className="p-6 bg-white border border-gray-200 z-40">
            {/* Header */}
            <div className="flex items-center justify-between">
                <BackBtn step={step} setStep={setStep} />
                <CircularProgress initialValue={75} />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Protective Coatings</h2>

            {/* Options */}
            <div className="space-y-4 ">
                {options.map((opt, index) => (
                    <button
                        key={opt.id}
                        disabled={disableingState?.includes(opt.id)}
                        onClick={(e) => { handleProtectiveCoatingClick(e, opt) }}
                        className={`relative group w-full bg-gray-100 text-left p-4 rounded-md border transition-all disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600 disabled:border-gray-200
              ${lens?.ProtectiveCoatings?.includes(opt.id)
                                ? "border-yellow-500 bg-yellow-50"
                                : "border-gray-200 hover:border-yellow-500/80"
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900">{opt.title}</h3>
                            <h2 className="text-xl font-bold">£{opt.price}</h2>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{opt.description}</p>


                        <div className="hidden group-hover:block absolute top-0 left-0 translate-x-[-110%]">
                            <ProtectiveImageShow opt={opt} />
                        </div>


                        {
                            disableingState?.includes(opt.id) && <NotavailableToolTip text="Already included with your selected lenses" />
                        }


                    </button>
                ))}
            </div>

            <p className="pt-6 font-medium text-lg text-gray-600/70">
                Choose one of our great value packages above, or continue with basic lenses which have no protective coatings.
            </p>

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
