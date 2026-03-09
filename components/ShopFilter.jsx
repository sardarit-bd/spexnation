'use client'

import { FaChevronDown } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import RangeSlider from "./RangeSlider";




const brands = [
    "Ambri",
    "Colt",
    "Cube",
    "Elite",
    "Ferucci",
    "Joia",
    "MBOS",
    "NHi",
    "Sightique",
    "SUNGLASSES",
    "Synergy",
    "Visage",
    "Others"
];

const gender = [
    "Mens",
    "Womens",
    // "Unisex"
];


const material = [
    "Stainless Steel",
    "Metal",
    "Plastic",
    "Titanium"
];




const ShopFilter = ({ fopen, setfOpen, selectedBrand, setslectedBrand, selectedGender, setselectedGender, selectedMatarial, setselectedMatarial, selectedPrice, setselectedPrice, selectedLenWidth, setselectedLenWidth, selectedBrideWidth, setselectedBrideWidth, handleClearFilter, filterLength }) => {



    // handle selected brand is here
    function handleSeletectedBrand(e, item) {


        e.preventDefault();


        if (selectedBrand?.includes(item)) {
            setslectedBrand(prev => prev.filter((i) => i !== item));
        } else {
            setslectedBrand(prev => [...prev, item]);
        }
    }


    // handle selected gender is here
    function handleSeletectedGender(e, item) {


        e.preventDefault();


        if (selectedGender?.includes(item)) {
            setselectedGender(prev => prev.filter((i) => i !== item));
        } else {
            setselectedGender(prev => [...prev, item]);
        }
    }




    // handle selected matarial is here
    function handleSeletectedMatarial(e, item) {


        e.preventDefault();


        if (selectedMatarial?.includes(item)) {
            setselectedMatarial(prev => prev.filter((i) => i !== item));
        } else {
            setselectedMatarial(prev => [...prev, item]);
        }
    }






    return (
        <div className="relative h-full w-full select-none">


            <div className="h-full">

                <div className="border-b pb-2 border-gray-100 h-fit flex items-center justify-between">
                    <h2 className="text-xl text-gray-500 font-bold ">Filter: {filterLength}</h2>
                    <div className="flex items-center gap-1">
                        <div>
                            <span onClick={(e) => { handleClearFilter(e) }} className="text-xs bg-gray-200 px-2 py-1 text-gray-600 cursor-pointer">Clear</span>
                        </div>
                        <div onClick={() => setfOpen(!fopen)} className="hover:bg-gray-200 w-8 h-8 flex lg:hidden items-center justify-center cursor-pointer">
                            <FaChevronDown className={`${fopen ? "rotate-180" : ""}`} />
                        </div>
                    </div>
                </div>


                <div className={`overflow-y-scroll h-[93%] w-full ${fopen ? "block" : "hidden lg:block "}`}>




                    <div className="">
                        <div className="flex items-center justify-between">
                            <h3 className="text-md text-gray-500 font-medium">
                                Brand:
                            </h3>
                        </div>
                        <div className="ml-1">

                            {
                                brands?.map((item, index) => {
                                    return (
                                        <div key={index} onClick={(e) => handleSeletectedBrand(e, item)} className="mt-1 flex items-center gap-2">
                                            <div className="w-fit">
                                                <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${selectedBrand?.includes(item) ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                                    <TiTick className="text-2xl" />
                                                </div>
                                            </div>
                                            <p className="text-md text-gray-600/70">
                                                {item}
                                            </p>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>


                    <div className="mt-4">
                        <h3 className="text-md text-gray-500 font-medium">
                            Gender:
                        </h3>
                        <div className="ml-1">
                            {
                                gender?.map((item, index) => {
                                    return (
                                        <div key={index} onClick={(e) => handleSeletectedGender(e, item)} className="mt-1 flex items-center gap-2">
                                            <div className="w-fit">
                                                <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${selectedGender?.includes(item) ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                                    <TiTick className="text-2xl" />
                                                </div>
                                            </div>
                                            <p className="text-md text-gray-600/70">
                                                {item}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>



                    <div className="mt-4">
                        <h3 className="text-md text-gray-500 font-medium">
                            Material:
                        </h3>
                        <div className="ml-1">
                            {
                                material?.map((item, index) => {
                                    return (
                                        <div key={index} onClick={(e) => handleSeletectedMatarial(e, item)} className="mt-1 flex items-center gap-2">
                                            <div className="w-fit">
                                                <div className={`flex items-center justify-center text-white cursor-pointer w-4 h-4 ${selectedMatarial?.includes(item) ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                                    <TiTick className="text-2xl" />
                                                </div>
                                            </div>
                                            <p className="text-md text-gray-600/70">
                                                {item}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>


                    <div className="mt-4">
                        <h3 className="text-md text-gray-500 font-medium">
                            Price:
                        </h3>
                        <div className="">
                            <RangeSlider
                                min={10}
                                max={500}
                                step={10}
                                value={selectedPrice}
                                setValue={setselectedPrice} />
                        </div>
                    </div>


                    <div className="mt-4">
                        <h3 className="text-md text-gray-500 font-medium">
                            Lens Width (mm):
                        </h3>
                        <div className="">
                            <RangeSlider
                                min={20}
                                max={50}
                                step={10}
                                value={selectedLenWidth}
                                setValue={setselectedLenWidth} />
                        </div>
                    </div>



                    <div className="mt-4">
                        <h3 className="text-md text-gray-500 font-medium">
                            Bridge Width (mm):
                        </h3>
                        <div className="">
                            <RangeSlider
                                min={10}
                                max={90}
                                step={10}
                                value={selectedBrideWidth}
                                setValue={setselectedBrideWidth} />
                        </div>
                    </div>


                </div>
            </div>






            {/* <div className={`${fopen ? "block" : "hidden lg:block "} ${"absolute bottom-0 w-full h-fit"}`}>
                <button onClick={(e) => { handleSearchFunction(e) }} className="pBg text-white font-light px-6 py-2.5 transition flex items-center justify-center gap-2 w-full">


                    {
                        searchLoading ? (
                            <Loading />
                        ) : (
                            <>
                                Search < ArrowRight className="" size={18} />
                            </>
                        )
                    }
                </button>
            </div> */}
        </div >
    )
}


export default ShopFilter;