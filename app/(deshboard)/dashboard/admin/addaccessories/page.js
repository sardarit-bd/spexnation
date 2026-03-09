'use client';

import { Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { GoPlusCircle } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import Loading from "../../../../../components/Loading";
import clearFileInput from "../../../../../lib/clearFileInput";
import fileToBase64 from "../../../../../lib/fileToBase64";
import getTookn from "../../../../../lib/getTookn";
import defaultImage from "../../../../../public/defaultImage.png";


const AccessoriesPage = () => {


    const fileInputRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [token, settoken] = useState(null);
    const [Name, setName] = useState('');
    const [price, setprice] = useState(0);
    const [description, setdescription] = useState('');
    const [allAccessories, setallAccessories] = useState([]);
    const [img, setimg] = useState('');
    const [rowID, setrowID] = useState('');


    const fetchAccessories = async () => {
        setIsLoading(true);
        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/allaccessories`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const res = await response.json();
            setallAccessories(res?.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setIsLoading(false);
        }
    };


    useEffect(() => {
        const tkn = getTookn();
        settoken(tkn);
        fetchAccessories();
    }, [])



    // handle add product form submission is here
    const handleAccessories = async (e) => {


        e.preventDefault();


        if (!Name || !price || !description || !img) {
            toast.error('Please fill in all the required fields.');
            return;
        }

        setIsLoading(true);

        // Make API call to add the product
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/addaccessories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ name: Name, price: price, description: description, img: img, productType: "Accessories" }),
        });

        const res = await response.json();

        setIsLoading(false);

        console.log(res);

        if (res.success) {
            toast.success(res.message);
            setName('');
            setprice(0);
            setdescription('');
            handleRemovedImage(e);
            fetchAccessories();
        } else {
            toast.error(res.message);
        }


    }



    // handle delect coupon function is here
    const handleDeleteAccessories = async (e, id) => {

        e.preventDefault();


        setIsLoading(true);

        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/deleteaccessories/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`,
                }
            });

            const res = await response.json();
            fetchAccessories();
            toast.success(res.message);
        } catch (error) {
            console.error('Error fetching Accessories:', error);
        }

        setIsLoading(false);

    }






    // handle prescription file changes is here
    async function handleImageChange(e) {

        const file = e.target.files[0];
        const base64 = await fileToBase64(file);
        setimg(base64);

    }



    // handle remove function is here
    function handleRemovedImage(e) {
        e.preventDefault();
        clearFileInput(fileInputRef);
        setimg('');
    }






    const [isEdit, setisEdit] = useState(false);


    //  handle accessrorise update function is here
    const handleUpdateAccessories = (e, row) => {
        e.preventDefault();

        setisEdit(true);
        setName(row?.name);
        setprice(row?.price);
        setdescription(row?.description);
        setimg(row?.img);
        setrowID(row?._id);


        window.scrollTo(0, 0);

    }





    const handleaccessoriesUpdateerFinal = async (e, rowID) => {
        e.preventDefault();


        if (!Name || !price || !description || !img) {
            toast.error('Please fill in all the required fields.');
            return;
        }

        setIsLoading(true);

        // Make API call to add the product
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/updateaccessories/${rowID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ name: Name, price: price, description: description, img: img, productType: "Accessories" }),
        });

        const res = await response.json();

        setIsLoading(false);

        if (res?.success) {
            toast.success("Accessories Updated Successfully");
            fetchAccessories();
        } else {
            toast.error(res?.message);
        }


    }



    console.log(allAccessories);








    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <div className="bg-yellow-700 px-5 py-2 w-fit">
                    <Loading />
                </div>
            </div>
        )
    }





    return (
        <div className=" bg-white py-4 px-5  border border-gray-200">
            <h1 className="text-xl font-medium text-gray-600">Accessories</h1>

            <div className="mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                <div>
                    <label className="text-gray-400 flex items-start gap-1">
                        Accessories Name <span className="text-md text-red-600">*</span>
                    </label>
                    <input value={Name} onChange={(e) => setName(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                </div>

                <div>
                    <label className="text-gray-400 flex items-start gap-1">
                        Accessories Price <span className="text-md text-red-600">*</span>
                    </label>
                    <input type="number" value={price} onChange={(e) => setprice(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                </div>


                <div>
                    <label className="text-gray-400 flex items-start gap-1">
                        Accessories Discriptions <span className="text-md text-red-600">*</span>
                    </label>
                    <input type="text" value={description} onChange={(e) => setdescription(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                </div>

                <div>
                    <div className="">
                        <label className="text-md text-gray-600/80 flex flex-col">
                            <span>
                                Upload Accessories Image <span className="text-md text-red-600">*</span>
                            </span>
                            <span className="text-[10px] bg-yellow-100  px-1 w-fit">jpg, jpeg, png files are allowed</span>
                        </label>
                        <div className="flex items-center gap-2 mt-2 h-full">
                            <input
                                id="file2"
                                ref={fileInputRef}
                                type="file"
                                accept=".png,.jpg,.jpeg"
                                onChange={(e) => { handleImageChange(e) }}
                                className="hidden w-full border p-2 rounded-md focus:outline-yellow-500/60 text-gray-700/80 cursor-pointer"
                            />

                            {
                                img ? (

                                    <div>
                                        <div className="relative w-auto h-[60px] md:h-[100px] border border-gray-200 text-gray-500/40 bg-gray-200">

                                            <Image className="w-full h-full object-cover" src={img ? img : defaultImage} width={100} height={1000} alt="prescription" />


                                            <div onClick={(e) => { handleRemovedImage(e) }} className="absolute top-0 right-0 w-4 h-4 bg-yellow-600 text-white translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center cursor-pointer">
                                                <RxCross2 />
                                            </div>
                                        </div>
                                    </div>

                                ) : (

                                    <div className="flex items-center gap-2">
                                        <label htmlFor="file2">
                                            <div className="flex items-center gap-2 justify-center flex-col cursor-pointer w-full h-full border border-gray-200 bg-gray-100 p-2">
                                                <GoPlusCircle className="text-5xl text-gray-300" />
                                            </div>
                                        </label>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div >

            </div >


            <div className="flex justify-end">
                <button onClick={(e) => { isEdit ? handleaccessoriesUpdateerFinal(e, rowID) : handleAccessories(e) }} className="mt-4 bg-yellow-700 flex items-center  justify-center text-white px-4 py-2 hover:bg-yellow-800">
                    {
                        isLoading ? <Loading /> : isEdit ? ('Update Accessories') : ('Add Accessories')
                    }
                </button>
            </div>










            <div className="mt-8">
                <div className="">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-medium text-gray-600">All Accessories : {allAccessories?.length}</h1>
                    </div>
                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                            <thead className="bg-gray-100">
                                <tr className="text-center">
                                    <th className="p-3 border">Sl</th>
                                    <th className="p-3 border">Image</th>
                                    <th className="p-3 border">Accessories Name</th>
                                    <th className="p-3 border">Accessories Price</th>
                                    <th className="p-3 border">Accessories Disscription</th>
                                    <th className="p-3 border">Action</th>
                                </tr>
                            </thead>

                            <tbody className="text-center">
                                {allAccessories?.map((row, index) => (
                                    <tr key={index} className="hover:bg-gray-50">

                                        <td className="p-2 border text-center text-gray-500">
                                            {index + 1}
                                        </td>

                                        <td className="p-2 border text-center text-gray-500 flex justify-center items-center">
                                            <div className="bg-gray-100 w-[80px] h-[80px]">
                                                <Image src={row?.img} alt="accessoriseImage" className="w-full h-full" width="1000" height="1000" />
                                            </div>
                                        </td>


                                        <td className="p-2 border text-center text-gray-500">
                                            {row?.name}
                                        </td>

                                        <td className="p-2 border text-center text-gray-500">
                                            {row?.price}
                                        </td>

                                        <td className="p-2 border text-center text-gray-500">
                                            {row?.description}
                                        </td>

                                        <td className="p-2 border-b text-center text-gray-500">

                                            <div className="flex items-center gap-2">
                                                <button onClick={(e) => handleUpdateAccessories(e, row)} className="bg-green-400 cursor-pointer text-white px-1 py-1">
                                                    <CiEdit size={17} />
                                                </button>

                                                <button onClick={(e) => handleDeleteAccessories(e, row?._id)} className="bg-red-400 cursor-pointer text-white px-1 py-1">
                                                    <Trash size={17} />
                                                </button>
                                            </div>


                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div >
            </div>

            <Toaster />
        </div >
    );
};

export default AccessoriesPage;