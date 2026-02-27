'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GoPlusCircle } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import ColorSelect from "../../../../components/Deshboard/ColorSelect";
import Loading from "../../../../components/Loading";
import fileToBase64 from "../../../../lib/fileToBase64";


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
    const [thumbnail, setthumbnail] = useState('');
    const [gellary, setgellery] = useState([]);





    // handle add product form submission is here
    const handleAddProduct = async (e) => {
        e.preventDefault();



        if (!title || !price || !description || !color || !size || !weight || !meterial || !style || !thumbnail || !gellary || !collection || !shortdes) {

            toast.error('Please fill in all the required fields.');
            return;
        }


        setIsLoading(true);

        const data = {
            ProductTitle: title,
            product_price: price,
            discount: discount,
            product_Discription: description,
            color: color,
            size: size,
            weight: weight,
            style: style,
            product_thamnail: thumbnail,
            product_Images: gellary,
            collection: collection,
            shortdes: shortdes
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
            settitle('');
            setcolor('');
            setprice('');
            setdiscount('');
            setdescription('');
            setsize('');
            setweight('');
            setmeterial('');
            setstyle('');
            setthumbnail('');
            setcollection('');
            setshortdes('');
            setgellery([]);
            router.push('/dashboard/allproducts');
        } else {
            toast.error(res.message);
        }

        setIsLoading(false);
    }



    // hanndle thumnail is here
    const handleThambnail = async (e) => {
        const file = e.target.files[0];
        const base64 = await fileToBase64(file);
        setthumbnail(base64);

    }


    // handle gallery image
    const handleGallery = async (e) => {

        const files = Array.from(e.target.files);

        const base64Files = await Promise.all(
            files.map(file => fileToBase64(file))
        );

        setgellery(prev => [...prev, ...base64Files]);
    }


    // remove gallery image
    const handleRemoveGallery = (index) => {
        setgellery(prev => prev.filter((_, i) => i !== index));
    }





    return (
        <div className="bg-white py-4 px-5  border border-gray-200">
            <h1 className="text-xl font-medium text-gray-600">Add Product</h1>


            <div className="grid grid-cols-7 gap-3 mt-5">

                <div className="col-span-7 md:col-span-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                        <select value={brand} onChange={(e) => setbrand(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                            <option className="text-gray-400 checked:text-gray-400" value="">Select Brand</option>

                            {
                                brands.map((item, i) => (
                                    <option key={i} value={item}>{item}</option>
                                ))
                            }

                        </select>


                        <input value={title} onChange={(e) => settitle(e.target.value)} type="text" placeholder="Title" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />


                        <input value={shortdes} onChange={(e) => setshortdes(e.target.value)} type="text" placeholder="Short Description" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />


                        <input value={price} onChange={(e) => setprice(e.target.value)} type="number" placeholder="Price" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                        <select value={gender} onChange={(e) => setgender(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                            <option className="text-gray-400 checked:text-gray-400" value="">Select Gender</option>
                            <option className="text-gray-400 checked:text-gray-400" value="Mens">Mens</option>
                            <option className="text-gray-400 checked:text-gray-400" value="Womens">Womens</option>
                            <option className="text-gray-400 checked:text-gray-400" value="Unisex">Unisex</option>
                        </select>


                        <ColorSelect value={color} onChange={setcolor} />


                        <input value={weight} onChange={(e) => setweight(e.target.value)} type="text" placeholder="Weight" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />




                        <select value={meterial} onChange={(e) => setmeterial(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                            <option className="text-gray-400 checked:text-gray-400" value="">Select Material</option>
                            <option className="text-gray-400 checked:text-gray-400" value="Acetate">Acetate</option>
                            <option className="text-gray-400 checked:text-gray-400" value="Metal">Metal
                            </option>
                            <option className="text-gray-400 checked:text-gray-400" value="Plastic">Plastic</option>
                            <option className="text-gray-400 checked:text-gray-400" value="Titanium">Titanium</option>
                        </select>



                        <select value={fType} onChange={(e) => setfType(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                            <option className="text-gray-400 checked:text-gray-400" value="">Select Frame Type</option>
                            <option className="text-gray-400 checked:text-gray-400" value="Full Rim">Full Rim</option>
                            <option className="text-gray-400 checked:text-gray-400" value="Semi Rimless">Semi Rimless
                            </option>
                            <option className="text-gray-400 checked:text-gray-400" value="Rimless">Rimless</option>
                        </select>



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








                        <input value={weight} onChange={(e) => setweight(e.target.value)} type="text" placeholder="Lens Width (mm)" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                        <input value={weight} onChange={(e) => setweight(e.target.value)} type="text" placeholder="Lens Height (mm)" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                        <input value={weight} onChange={(e) => setweight(e.target.value)} type="text" placeholder="Bridge Width (mm)" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                        <input value={weight} onChange={(e) => setweight(e.target.value)} type="text" placeholder="Arm Length (mm)" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />






                    </div>

                    <div className="mt-4  grid grid-cols-1">
                        <textarea value={description} onChange={(e) => setdescription(e.target.value)} placeholder="Discription" className="w-full h-[200px] border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"></textarea>
                    </div>

                </div>

                <div className="col-span-7 md:col-span-2 flex flex-col gap-4 border border-gray-300 bg-gray-100 p-4">

                    <div className="h-[300px] bg-white border border-gray-300 flex items-center justify-center">


                        {
                            thumbnail ? (
                                <div className="relative">
                                    <Image src={thumbnail ? thumbnail : ""} alt="" className="w-full h-full object-cover" width={300} height={300} />
                                    <button
                                        onClick={() => setthumbnail("")}
                                        className="absolute top-0 right-0 bg-red-600 text-white p-1">
                                        <RxCross2 />
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <input onChange={(e) => handleThambnail(e)} id="file" type="file" className="hidden" />
                                    <label htmlFor="file" className="w-full h-full">
                                        <div className="flex items-center gap-2 justify-center flex-col cursor-pointer w-full h-full">
                                            <GoPlusCircle className="text-5xl text-gray-300" />
                                            <h3 className="text-gray-400">Upload Product Thumbnail</h3>
                                        </div>
                                    </label>
                                </>
                            )
                        }
                    </div>

                    <div className="h-full bg-white border border-gray-300 overflow-y-scroll p-3">

                        <div className="flex flex-wrap items-center gap-2">
                            {
                                gellary?.map((item, index) => (
                                    <div key={index} className="relative h-[60px] w-[60px] bg-gray-100 flex items-center justify-center">
                                        <Image src={item} alt="" className="w-full h-full object-cover" width={60} height={60} />
                                        <button
                                            onClick={() => handleRemoveGallery(index)}
                                            className="absolute top-0 right-0 bg-red-600 text-white text-xs p-0.5">
                                            <RxCross2 />
                                        </button>
                                    </div>
                                ))
                            }

                            <div className="h-[60px] w-[60px] bg-gray-100">
                                <input onChange={(e) => { handleGallery(e) }} id="file2" type="file" className="hidden" multiple />
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