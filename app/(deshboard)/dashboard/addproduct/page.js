'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GoPlusCircle } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import Loading from "../../../../components/Loading";
import fileToBase64 from "../../../../lib/fileToBase64";
const colors = [
    { name: "Black", value: "#000000" },
    { name: "Gray", value: "#808080" },
    { name: "Dark Gray", value: "#A9A9A9" },
    { name: "Light Gray", value: "#D3D3D3" },
    { name: "Silver", value: "#C0C0C0" },
    { name: "Platinum", value: "#E5E4E2" },
    { name: "Charcoal", value: "#36454F" },
    { name: "Slate", value: "#708090" },
    { name: "Ivory", value: "#FFFFF0" },
    { name: "Azure", value: "#F0FFFF" },
    { name: "White", value: "#FFFFFF" },
    { name: "Tan", value: "#D2B48C" },
    { name: "Beige", value: "#F5F5DC" },
    { name: "Cream", value: "#FFFDD0" },
    { name: "Plum", value: "#DDA0DD" },
    { name: "Orchid", value: "#DA70D6" },
    { name: "Periwinkle", value: "#CCCCFF" },
    { name: "Mint Cream", value: "#F5FFFA" },
    { name: "Snow", value: "#FFFAFA" },
    { name: "Red", value: "#FF0000" },
    { name: "Dark Red", value: "#8B0000" },
    { name: "Crimson", value: "#DC143C" },
    { name: "Tomato", value: "#FF6347" },
    { name: "Coral", value: "#FF7F50" },
    { name: "Orange", value: "#FFA500" },
    { name: "Dark Orange", value: "#FF8C00" },
    { name: "Gold", value: "#FFD700" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Light Yellow", value: "#FFFFE0" },
    { name: "Lemon", value: "#FFF44F" },
    { name: "Green", value: "#008000" },
    { name: "Dark Green", value: "#006400" },
    { name: "Lime", value: "#00FF00" },
    { name: "Olive", value: "#808000" },
    { name: "Mint", value: "#98FF98" },
    { name: "Sea Green", value: "#2E8B57" },
    { name: "Teal", value: "#008080" },
    { name: "Cyan", value: "#00FFFF" },
    { name: "Turquoise", value: "#40E0D0" },
    { name: "Sky Blue", value: "#87CEEB" },
    { name: "Light Blue", value: "#ADD8E6" },
    { name: "Blue", value: "#0000FF" },
    { name: "Navy", value: "#000080" },
    { name: "Royal Blue", value: "#4169E1" },
    { name: "Indigo", value: "#4B0082" },
    { name: "Purple", value: "#800080" },
    { name: "Violet", value: "#8F00FF" },
    { name: "Lavender", value: "#E6E6FA" },
    { name: "Magenta", value: "#FF00FF" },
    { name: "Pink", value: "#FFC0CB" },
    { name: "Hot Pink", value: "#FF69B4" },
    { name: "Deep Pink", value: "#FF1493" },
    { name: "Rose", value: "#FF007F" },
    { name: "Brown", value: "#A52A2A" },
    { name: "Saddle Brown", value: "#8B4513" },
    { name: "Chocolate", value: "#D2691E" },
    { name: "Maroon", value: "#800000" },
    { name: "Amber", value: "#FFBF00" },
    { name: "Peach", value: "#FFE5B4" },
    { name: "Apricot", value: "#FBCEB1" },
    { name: "Salmon", value: "#FA8072" },

];

const brands = [
    "Arden",
    "Aspire",
    "Ben Sherman",
    "Burberry",
    "Caterpillar",
    "Champion",
    "Coach",
    "Dolce&Gabbana",
    "Emporio Armani",
    "Finelight",
    "GD Collection",
    "Gucci",
    "Visage",
    "Harrington",
    "Harrington Sport",
    "Hart",
    "Hugo Boss",
    "Jimmy Choo",
    "Kate Spade",
    "Levi's",
    "Lipsy London",
    "London Retro",
    "Marc Jacobs",
    "New Balance",
    "Oakley",
    "Perri Kiely X LR",
    "Persol",
    "Pink Ribbon",
    "Polaroid",
    "Polo Ralph Lauren",
    "Puma",
    "Ralph",
    "Ray-Ban",
    "Scout",
    "Scout Made In Italy",
    "Swarovski",
    "Ted Baker",
    "Tiffany & Co.",
    "Tom Ford",
    "Tommy Hilfiger",
    "Vogue Eyewear"
];




const AddproductPage = () => {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const [brand, setbrand] = useState('');
    const [title, settitle] = useState('');
    const [shortdes, setshortdes] = useState('');
    const [price, setprice] = useState('');
    const [gender, setgender] = useState('');
    const [description, setdescription] = useState('');
    const [color, setcolor] = useState([]);
    const [weight, setweight] = useState('');
    const [meterial, setmeterial] = useState('');
    const [fType, setfType] = useState('');
    const [fShape, setfShape] = useState('');
    const [lensWidth, setlensWidth] = useState('');
    const [lensHeight, setlensHeight] = useState('');
    const [BridgeWidth, setBridgeWidth] = useState('');
    const [ArmLength, setArmLength] = useState('');
    const [gellary, setgellery] = useState([]);





    // handle add product form submission is here
    const handleAddProduct = async (e) => {
        e.preventDefault();



        if (!brand || !title || !shortdes || !price || !description || gellary.length < 1) {

            toast.error('Please fill in all the required fields.');
            return;
        }

        setIsLoading(true);

        const data = {
            brand: brand,
            ProductTitle: title,
            shortdes: shortdes,
            product_price: price,
            gender: gender,
            weight: weight,
            meterial: meterial,
            fType: fType,
            fShape: fShape,
            lensWidth: lensWidth,
            lensHeight: lensHeight,
            BridgeWidth: BridgeWidth,
            ArmLength: ArmLength,
            product_Images: gellary,
            product_Discription: description,

        }


        // Make API call to add the product
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/createProduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const res = await response.json();

        if (res.success) {
            toast.success(res.message);
            setbrand('');
            settitle('');
            setshortdes('');
            setprice('');
            setgender('');
            setweight('');
            setmeterial('');
            setfType('');
            setfShape('');
            setlensWidth('');
            setlensHeight('');
            setBridgeWidth('');
            setArmLength('');
            setdescription('');
            setgellery([]);
            router.push('/dashboard/allproducts');
        } else {
            toast.error(res.message);
        }

        setIsLoading(false);
    }


    // handle gallery image
    const handleGallery = async (e) => {

        if (gellary?.length >= 5) {
            toast.error("You can add only 5 images");
            return;
        }


        const file = e.target.files[0];
        const base64 = await fileToBase64(file);

        setgellery(prev => [...prev, {
            img: base64,
            color: [],
        }]);
    }


    // remove gallery image
    const handleRemoveGallery = (index) => {
        setgellery(prev => prev.filter((_, i) => i !== index));
    }




    function handleColorSelect(e, index) {

        e.preventDefault();

        const selectedColor = JSON.parse(e.target.value);

        setgellery(prev =>
            prev.map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        color: [selectedColor] // single select
                    };
                }
                return item;
            })
        );



    }



    return (
        <div className="bg-white py-4 px-5  border border-gray-200">
            <h1 className="text-xl font-medium text-gray-600">Add Product</h1>


            <div className="grid grid-cols-7 gap-3 mt-5">

                <div className="col-span-7 md:col-span-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                Brand <span className="text-xs text-red-600">Required</span>
                            </label>
                            <select value={brand} onChange={(e) => setbrand(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                <option className="text-gray-400 checked:text-gray-400" value="">Select Brand</option>

                                {
                                    brands.map((item, i) => (
                                        <option key={i} value={item}>{item}</option>
                                    ))
                                }

                            </select>
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                Title <span className="text-xs text-red-600">Required</span>
                            </label>
                            <input value={title} onChange={(e) => settitle(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                Short Description <span className="text-xs text-red-600">Required</span>
                            </label>
                            <input value={shortdes} onChange={(e) => setshortdes(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                Price <span className="text-xs text-red-600">Required</span>
                            </label>
                            <input value={price} onChange={(e) => setprice(e.target.value)} type="number" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                Gender
                            </label>
                            <select value={gender} onChange={(e) => setgender(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                <option className="text-gray-400 checked:text-gray-400" value="">Select Gender</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Mens">Mens</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Womens">Womens</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Unisex">Unisex</option>
                            </select>
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                Weight
                            </label>
                            <input value={weight} onChange={(e) => setweight(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                        </div>



                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                Material
                            </label>
                            <select value={meterial} onChange={(e) => setmeterial(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                <option className="text-gray-400 checked:text-gray-400" value="">Select Material</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Acetate">Acetate</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Metal">Metal
                                </option>
                                <option className="text-gray-400 checked:text-gray-400" value="Plastic">Plastic</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Titanium">Titanium</option>
                            </select>
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                Frame Type
                            </label>
                            <select value={fType} onChange={(e) => setfType(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                <option className="text-gray-400 checked:text-gray-400" value="">Select Frame Type</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Full Rim">Full Rim</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Semi Rimless">Semi Rimless
                                </option>
                                <option className="text-gray-400 checked:text-gray-400" value="Rimless">Rimless</option>
                            </select>
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                Frame Shape
                            </label>
                            <select value={fShape} onChange={(e) => setfShape(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                <option className="text-gray-400 checked:text-gray-400" value="">Select Frame Shape</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Butterfly">Butterfly</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Cat Eye">Cat Eye
                                </option>
                                <option className="text-gray-400 checked:text-gray-400" value="Irregular">Irregular</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Oval">Oval</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Phantos">Phantos</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Pilot">Pilot</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Pillow">Pillow</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Rectangle">Rectangle</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Round">Round</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Square">Square</option>
                            </select>
                        </div>







                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                {"Lens Width (mm)"}
                            </label>
                            <input value={lensWidth} onChange={(e) => setlensWidth(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                {"Lens Height (mm)"}
                            </label>
                            <input value={lensHeight} onChange={(e) => setlensHeight(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                {"Bridge Width (mm)"}
                            </label>
                            <input value={BridgeWidth} onChange={(e) => setBridgeWidth(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                {"Arm Length (mm)"}
                            </label>
                            <input value={ArmLength} onChange={(e) => setArmLength(e.target.value)} type="v" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                        </div>



                    </div>

                    <div className="mt-4  grid grid-cols-1">
                        <label className="text-gray-400 flex items-start gap-2">
                            Discription <span className="text-xs text-red-600">Required</span>
                        </label>
                        <textarea value={description} onChange={(e) => setdescription(e.target.value)} className="w-full h-[200px] border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"></textarea>
                    </div>

                </div>

                <div className="col-span-7 md:col-span-2 flex flex-col gap-4 border border-gray-300 bg-gray-100 p-4 mt-6">

                    <label className="text-gray-400 flex items-start gap-2">
                        Product Images <span className="text-xs text-red-600">Required</span>
                    </label>
                    <div className="h-full bg-white border border-gray-300 overflow-y-scroll p-3">

                        <div className="flex flex-col flex-wrap gap-2">
                            {
                                gellary?.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 border border-gray-200 p-1 relative ">
                                        <div className="h-[60px] w-[60px] bg-gray-100 flex items-center justify-center">
                                            <Image src={item?.img} alt="" className="w-full h-full object-cover" width={60} height={60} />
                                        </div>
                                        <div>



                                            <select onChange={(e) => handleColorSelect(e, index)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                                <option className="text-gray-400 checked:text-gray-400" value="">Select Product Color</option>
                                                {
                                                    colors?.map((cl, idx) => (
                                                        <option key={idx} className="text-gray-900 checked:text-gray-400" style={{ backgroundColor: cl?.value }} value={JSON.stringify(cl)}>{cl?.name}</option>
                                                    ))
                                                }
                                            </select>


                                        </div>


                                        <button
                                            onClick={() => handleRemoveGallery(index)}
                                            className="absolute top-0 right-0 bg-red-600 text-white text-xs p-0.5">
                                            <RxCross2 />
                                        </button>
                                    </div>
                                ))
                            }

                            <div className="h-[60px] w-[60px] bg-gray-100">
                                <input onChange={(e) => { handleGallery(e) }} id="file2" type="file" className="hidden" />
                                <label htmlFor="file2">
                                    <div className="flex items-center gap-2 justify-center flex-col cursor-pointer w-full h-full">
                                        <GoPlusCircle className="text-5xl text-gray-300" />
                                    </div>
                                </label>
                            </div>
                        </div>

                    </div>

                </div>


            </div>







            <div className="flex justify-end">
                <button disabled={isLoading} onClick={(e) => { handleAddProduct(e) }} className="mt-4 bg-yellow-700 flex items-center  justify-center text-white px-4 py-2 hover:bg-yellow-800">
                    {
                        isLoading ? <Loading /> : 'Add Product'
                    }
                </button>
            </div>

            <Toaster position="top-center" />
        </div>
    );
};

export default AddproductPage;