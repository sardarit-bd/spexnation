import Image from "next/image";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import useLenseStore from "../../store/useLenseStore";


const ColorAndDarkness = () => {


    const { lens, setLens } = useLenseStore();
    const [color, setcolor] = useState('gray');
    const [darkness, setdardkness] = useState('light');

    const isOPen = lens?.Transition == "transitions" || lens?.Transition == "transitionxtraactive" || lens?.Transition == "sunglasses" || lens?.Transition == "photochromiclenses";



    useEffect(() => {
        setLens({ ...lens, color: color, darkness: darkness })
    }, [color, darkness])





    return (
        <div className={`${isOPen ? "block" : "hidden"}`}>
            <div className="mt-6">
                <h3>Color</h3>
                <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex gap-2 items-center">
                        <div onClick={() => setcolor("gray")} className={`w-fit border-2 ${color == "gray" ? "border-yellow-500" : "border-gray-100"}`}>
                            <Image src="/gray.png" alt="gray" width={1000} height={1000} className={`flex items-center justify-center text-white cursor-pointer w-20 h-20`} />
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div onClick={() => setcolor("green")} className={`w-fit border-2 ${color == "green" ? "border-yellow-500" : "border-gray-100"}`}>
                            <Image src="/green.png" alt="green" width={1000} height={1000} className={`flex items-center justify-center text-white cursor-pointer w-20 h-20`} />
                        </div>
                    </div>


                    {
                        lens?.Transition != "photochromiclenses" && (
                            <div className="flex gap-2 items-center">
                                <div onClick={() => setcolor("brown")} className={`w-fit border-2 ${color == "brown" ? "border-yellow-500" : "border-gray-100"}`}>
                                    <Image src="/brown.png" alt="brown" width={1000} height={1000} className={`flex items-center justify-center text-white cursor-pointer w-20 h-20`} />
                                </div>
                            </div>
                        )
                    }











                    {/* this color only for transition */}
                    {
                        lens?.Transition == "transitions" && (
                            <>

                                <div className="flex gap-2 items-center">
                                    <div onClick={() => setcolor("amethyst")} className={`w-fit border-2 ${color == "amethyst" ? "border-yellow-500" : "border-gray-100"}`}>
                                        <Image src="/amethyst.png" alt="amethyst" width={1000} height={1000} className={`flex items-center justify-center text-white cursor-pointer w-20 h-20`} />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div onClick={() => setcolor("emerald")} className={`w-fit border-2 ${color == "emerald" ? "border-yellow-500" : "border-gray-100"}`}>
                                        <Image src="/emerald.png" alt="emerald" width={1000} height={1000} className={`flex items-center justify-center text-white cursor-pointer w-20 h-20`} />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div onClick={() => setcolor("amber")} className={`w-fit border-2 ${color == "amber" ? "border-yellow-500" : "border-gray-100"}`}>
                                        <Image src="/amber.png" alt="Amber" width={1000} height={1000} className={`flex items-center justify-center text-white cursor-pointer w-20 h-20`} />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div onClick={() => setcolor("rubby")} className={`w-fit border-2 ${color == "rubby" ? "border-yellow-500" : "border-gray-100"}`}>
                                        <Image src="/rubby.png" alt="rubby" width={1000} height={1000} className={`flex items-center justify-center text-white cursor-pointer w-20 h-20`} />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div onClick={() => setcolor("sapphire")} className={`w-fit border-2 ${color == "sapphire" ? "border-yellow-500" : "border-gray-100"}`}>
                                        <Image src="/sapphire.png" alt="sapphire" width={1000} height={1000} className={`flex items-center justify-center text-white cursor-pointer w-20 h-20`} />
                                    </div>
                                </div>
                            </>
                        )
                    }





















                </div>
            </div>


            {
                lens?.Transition == "sunglasses" && (


                    <div className="mt-6">
                        <h3>Darkness</h3>
                        <div className="flex gap-4 mt-2">
                            <div className="flex gap-2 items-center">
                                <div className="w-fit">
                                    <div onClick={() => setdardkness("light")} className={`flex items-center justify-center text-white cursor-pointer w-6 h-6 ${darkness == "light" ? "bg-[#964B00]" : "bg-transparent border-2 border-[#964B00]"}`}>
                                        {
                                            darkness == "light" && <TiTick className="text-2xl" />
                                        }
                                    </div>
                                </div>
                                <span>{`Light (80% transmission)`}</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-fit">
                                    <div onClick={() => setdardkness("medium")} className={`flex items-center justify-center text-white cursor-pointer w-6 h-6 ${darkness == "medium" ? "bg-[#964B00]" : "bg-transparent border-2 border-[#964B00]"}`}>
                                        {
                                            darkness == "medium" && <TiTick className="text-2xl" />
                                        }
                                    </div>
                                </div>
                                <span>{`Medium (50%)`}</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-fit">
                                    <div onClick={() => setdardkness("dark")} className={`flex items-center justify-center text-white cursor-pointer w-6 h-6 ${darkness == "dark" ? "bg-[#964B00]" : "bg-transparent border-2 border-[#964B00]"}`}>
                                        {
                                            darkness == "dark" && <TiTick className="text-2xl" />
                                        }
                                    </div>
                                </div>
                                <span>{`Dark (20%)`}</span>
                            </div>
                        </div>
                    </div>


                )
            }

        </div>
    )
}

export default ColorAndDarkness;