import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import useLenseStore from "../../store/useLenseStore";


const ColorAndDarkness = () => {


    const { lens, setLens } = useLenseStore();
    const [color, setcolor] = useState('gray');
    const [darkness, setdardkness] = useState('light');

    const isOPen = lens?.Transition == "transitionxtraactive" || lens?.Transition == "tint";



    useEffect(() => {
        setLens({ ...lens, color: color, darkness: darkness })
    }, [color, darkness])





    return (
        <div className={`${isOPen ? "block" : "hidden"}`}>
            <div className="mt-6">
                <h3>Color</h3>
                <div className="flex gap-4 mt-2">
                    <div className="flex gap-2 items-center">
                        <div className="w-fit">
                            <div onClick={() => setcolor("gray")} className={`flex items-center justify-center text-white cursor-pointer w-6 h-6 ${color == "gray" ? "bg-[#808080]" : "bg-transparent border-2 border-[#808080]"}`}>
                                {
                                    color == "gray" && <TiTick className="text-2xl" />
                                }
                            </div>
                        </div>
                        <span>Grey</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div onClick={() => setcolor("brown")} className="w-fit">
                            <div className={`flex items-center justify-center text-white cursor-pointer w-6 h-6 ${color == "brown" ? "bg-[#964B00]" : "bg-transparent border-2 border-[#964B00]"}`}>
                                {
                                    color == "brown" && <TiTick className="text-2xl" />
                                }
                            </div>
                        </div>
                        <span>Brown</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div onClick={() => setcolor("green")} className="w-fit">
                            <div className={`flex items-center justify-center text-white cursor-pointer w-6 h-6 ${color == "green" ? "bg-green-600" : "bg-transparent border-2 border-green-600"}`}>
                                {
                                    color == "green" && <TiTick className="text-2xl" />
                                }
                            </div>
                        </div>
                        <span>Graphite Green</span>
                    </div>
                </div>
            </div>


            {
                lens?.Transition == "tint" && (


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