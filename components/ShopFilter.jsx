import { ArrowRight } from "lucide-react";
import { TiTick } from "react-icons/ti";



const ShopFilter = () => {
    return (
        <div className="relative h-full">


            <div className="h-full">
                <h2 className="text-xl text-gray-500 font-bold mb-4 border-b pb-2 border-gray-100 h-fit">Filter:</h2>


                <div className="overflow-y-scroll h-[82%]">

                    <div>
                        <h3 className="text-md text-gray-500 font-medium">
                            Gender:
                        </h3>
                        <div className="ml-1">
                            <div className="mt-3 flex items-center gap-2">
                                <div className="w-fit">
                                    <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                        <TiTick className="text-2xl" />
                                    </div>
                                </div>
                                <p className="text-md text-gray-600/70">
                                    Mens
                                </p>
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                                <div className="w-fit">
                                    <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                        <TiTick className="text-2xl" />
                                    </div>
                                </div>
                                <p className="text-md text-gray-600/70">
                                    Womens
                                </p>
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                                <div className="w-fit">
                                    <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                        <TiTick className="text-2xl" />
                                    </div>
                                </div>
                                <p className="text-md text-gray-600/70">
                                    Unisex
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="mt-4">
                        <h3 className="text-md text-gray-500 font-medium">
                            Brand:
                        </h3>
                        <div className="ml-1">
                            <div className="mt-3 flex items-center gap-2">
                                <div className="w-fit">
                                    <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                        <TiTick className="text-2xl" />
                                    </div>
                                </div>
                                <p className="text-md text-gray-600/70">
                                    Mens
                                </p>
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                                <div className="w-fit">
                                    <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                        <TiTick className="text-2xl" />
                                    </div>
                                </div>
                                <p className="text-md text-gray-600/70">
                                    Womens
                                </p>
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                                <div className="w-fit">
                                    <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                        <TiTick className="text-2xl" />
                                    </div>
                                </div>
                                <p className="text-md text-gray-600/70">
                                    Unisex
                                </p>
                            </div>
                        </div>
                    </div>




                    <div className="mt-4">
                        <h3 className="text-md text-gray-500 font-medium">
                            Frame Shape:
                        </h3>
                        <div className="ml-1">
                            <div className="mt-3 flex items-center gap-2">
                                <div className="w-fit">
                                    <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                        <TiTick className="text-2xl" />
                                    </div>
                                </div>
                                <p className="text-md text-gray-600/70">
                                    Mens
                                </p>
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                                <div className="w-fit">
                                    <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                        <TiTick className="text-2xl" />
                                    </div>
                                </div>
                                <p className="text-md text-gray-600/70">
                                    Womens
                                </p>
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                                <div className="w-fit">
                                    <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                        <TiTick className="text-2xl" />
                                    </div>
                                </div>
                                <p className="text-md text-gray-600/70">
                                    Unisex
                                </p>
                            </div>
                        </div>
                    </div>



                    <div className="mt-4">
                        <h3 className="text-md text-gray-500 font-medium">
                            Frame Type:
                        </h3>
                        <div className="ml-1">
                            <div className="mt-3 flex items-center gap-2">
                                <div className="w-fit">
                                    <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                        <TiTick className="text-2xl" />
                                    </div>
                                </div>
                                <p className="text-md text-gray-600/70">
                                    Mens
                                </p>
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                                <div className="w-fit">
                                    <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                        <TiTick className="text-2xl" />
                                    </div>
                                </div>
                                <p className="text-md text-gray-600/70">
                                    Womens
                                </p>
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                                <div className="w-fit">
                                    <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                        <TiTick className="text-2xl" />
                                    </div>
                                </div>
                                <p className="text-md text-gray-600/70">
                                    Unisex
                                </p>
                            </div>
                        </div>
                    </div>



                    <div className="mt-4">
                        <h3 className="text-md text-gray-500 font-medium">
                            Material:
                        </h3>
                        <div className="ml-1">
                            <div className="mt-3 flex items-center gap-2">
                                <div className="w-fit">
                                    <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                        <TiTick className="text-2xl" />
                                    </div>
                                </div>
                                <p className="text-md text-gray-600/70">
                                    Mens
                                </p>
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                                <div className="w-fit">
                                    <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                        <TiTick className="text-2xl" />
                                    </div>
                                </div>
                                <p className="text-md text-gray-600/70">
                                    Womens
                                </p>
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                                <div className="w-fit">
                                    <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                        <TiTick className="text-2xl" />
                                    </div>
                                </div>
                                <p className="text-md text-gray-600/70">
                                    Unisex
                                </p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>






            <div className="absolute bottom-0 w-full h-fit">
                <button className="pBg text-white font-light px-6 py-2.5 transition flex items-center justify-center gap-2 w-full">


                    {
                        false ? (
                            <Loading />
                        ) : (
                            <>
                                Search < ArrowRight className="" size={18} />
                            </>
                        )
                    }
                </button>
            </div>
        </div>
    )
}


export default ShopFilter;