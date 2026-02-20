'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GoPlusCircle } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import Loading from "../../../../components/Loading";
import fileToBase64 from "../../../../lib/fileToBase64";

const AddproductPage = () => {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [title, settitle] = useState('');
    const [price, setprice] = useState('');
    const [discount, setdiscount] = useState('');
    const [description, setdescription] = useState('');
    const [color, setcolor] = useState('');
    const [quentity, setquantity] = useState('');
    const [size, setsize] = useState('');
    const [weight, setweight] = useState('');
    const [meterial, setmeterial] = useState('');
    const [shape, setshape] = useState('');
    const [style, setstyle] = useState('');
    const [thumbnail, setthumbnail] = useState('');
    const [gellary, setgellery] = useState([]);
    const [collection, setcollection] = useState('');
    const [shortdes, setshortdes] = useState('');




    // handle add product form submission is here
    const handleAddProduct = async (e) => {
        e.preventDefault();



        if (!title || !price || !discount || !description || !color || !quentity || !size || !weight || !meterial || !shape || !style || !thumbnail || !gellary || !collection || !shortdes) {

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
            quentity: quentity,
            size: size,
            weight: weight,
            meterial: meterial,
            shape: shape,
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
            setquantity('');
            setsize('');
            setweight('');
            setmeterial('');
            setshape('');
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

                        <input value={title} onChange={(e) => settitle(e.target.value)} type="text" placeholder="Product Title" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />


                        <input value={collection} onChange={(e) => setcollection(e.target.value)} type="text" placeholder="Collection" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />


                        <input value={shortdes} onChange={(e) => setshortdes(e.target.value)} type="text" placeholder="Short Description" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />


                        <input value={price} onChange={(e) => setprice(e.target.value)} type="number" placeholder="Product Price" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                        <input value={discount} onChange={(e) => setdiscount(e.target.value)} type="number" placeholder="Product Discount" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                        <input value={quentity} onChange={(e) => setquantity(e.target.value)} type="number" placeholder="Product Quantity" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                        <input value={color} onChange={(e) => setcolor(e.target.value)} type="text" placeholder="Product Color" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                        <input value={size} onChange={(e) => setsize(e.target.value)} type="text" placeholder="Product Size" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                        <input value={weight} onChange={(e) => setweight(e.target.value)} type="text" placeholder="Product Weight" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                        <input value={meterial} onChange={(e) => setmeterial(e.target.value)} type="text" placeholder="Product Meterial" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />

                        <input value={shape} onChange={(e) => setshape(e.target.value)} type="text" placeholder="Product Shape" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />


                        <input value={style} onChange={(e) => setstyle(e.target.value)} type="text" placeholder="Product Style" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />


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