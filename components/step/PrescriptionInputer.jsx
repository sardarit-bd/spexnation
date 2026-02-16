import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import ADDNumberOPtions from "../../Data/ADDNumberOPtions";
import AxisNumberOPtion from "../../Data/AxisNumberOPtion";
import CyLNumberOPtions from "../../Data/CyLNumberOPtions";
import PrismNumberOption from "../../Data/PrismNumberOPtion";
import SpaNumberOptions from "../../Data/SpaNumberOptions";
import clearFileInput from "../../lib/clearFileInput";
import fileToBase64 from "../../lib/fileToBase64";
import useLenseStore from "../../store/useLenseStore";
import useStepStore from "../../store/useStepStore";
import Loading from "../Loading";
import BackBtn from "./BackBtn";
import CircularProgress from "./CircularProgress";
import Warn from "./Warn";



export default function EnterPrescription() {


    const { step, setStep } = useStepStore();
    const { lens, setLens } = useLenseStore();
    const fileInputRef = useRef(null);
    const [confirm, setconfirm] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [alert, setalert] = useState(false);
    const [alertMessage, setalertMessage] = useState('');



    //handle next function is here
    const handleNext = (e) => {

        e.preventDefault();

        if (!lens?.prescriptionImage) {
            toast.error("Please. Upload Prescription");
            return;
        }


        // od or os validation is here
        if (lens?.sph.rightSph == '0' && lens?.sph.leftSph == '0') {
            toast.error("Must be select OD or OS Sphere");
            return;
        } else {



            // if put value in od
            if (lens?.sph.leftSph == "0") {

                // check spare value of right/od
                if (lens?.sph.rightSph != "0") {

                    // check cylinder value of right/od
                    if (lens.cyl.rightCyl == '0') {
                        toast.error("Please. Enter Right Cylinder");
                        return;
                    } else {

                        // check axis value of right/od
                        if (lens?.axis.rightAxis == '0') {
                            toast.error("Please. Enter Right Axis");
                            return;
                        }
                    }

                } else {
                    toast.error("Please. Enter Right Sphere");
                    return;
                }
            } else {

                // check spare value of left/os
                if (lens?.sph.leftSph != "0") {

                    // check cylinder value of left/os
                    if (lens.cyl.leftCyl == '0') {
                        toast.error("Please. Enter Left Cylinder");
                        return;
                    } else {

                        // check axis value of left/os
                        if (lens?.axis.leftAxis == '0') {
                            toast.error("Please. Enter Left Axis");
                            return;
                        }
                    }

                } else {
                    toast.error("Please. Enter Left Sphere");
                    return;
                }

            }

        }





        // prism validation is here
        if (lens?.addPrism) {


            // od check
            if (lens.rightPrism?.vertical == "0") {
                toast.error("Please. Enter Right Prism Vertical");
                return;
            } else if (lens.rightPrism?.vBaseDirection == "N/A") {
                toast.error("Please. Select Right Prism Vertical Base Direction");
                return;
            } else if (lens.rightPrism?.horizontal == "0") {
                toast.error("Please. Enter Right Prism Horizontal");
                return;
            } else if (lens.rightPrism?.hBaseDirection == "N/A") {
                toast.error("Please. Select Right Prism Horizontal Base Direction");
                return;
            }


            // os check
            if (lens.leftPrism?.vertical == "0") {
                toast.error("Please. Enter Left Prism Vertical");
                return;
            } else if (lens.leftPrism?.vBaseDirection == "N/A") {
                toast.error("Please. Select Left Prism Vertical Base Direction");
                return;
            } else if (lens.leftPrism?.horizontal == "0") {
                toast.error("Please. Enter Left Prism Horizontal");
                return;
            } else if (lens.leftPrism?.hBaseDirection == "N/A") {
                toast.error("Please. Select Left Prism Horizontal Base Direction");
                return;
            }

        }







        // final comfirm validation
        if (!confirm) {
            toast.error("Please. Confirm the prescription is valid");
            return;
        }

        setisLoading(true);
        setTimeout(() => {
            setisLoading(false);
            setStep(3);
        }, 700);

    }


    // handleSHP function is here
    function handleSHP(e, eye) {

        e.preventDefault();

        eye == "od" ? setLens({ ...lens, sph: { ...lens.sph, rightSph: e.target.value } }) : setLens({ ...lens, sph: { ...lens.sph, leftSph: e.target.value } })

    }


    // handle cyl function is here
    function handleCYL(e, eye) {

        e.preventDefault();


        // remove depanded value
        if (e.target.value == "0") {
            eye == "od" ? setLens({
                ...lens,
                cyl: {
                    ...lens.cyl,
                    rightCyl: e.target.value,
                },
                axis: {
                    ...lens.axis,
                    rightAxis: "0",
                }
            }) : setLens({
                ...lens,
                cyl: {
                    ...lens.cyl,
                    leftCyl: e.target.value,
                },
                axis: {
                    ...lens.axis,
                    leftAxis: "0",
                }
            })


            return;
        }


        if (Number(e.target.value) > "+2.00" || Number(e.target.value) < "-2.00") {
            setalert(true);
            setalertMessage('High cylinder prescriptions require additional surfacing: +£15');
        }

        eye == "od" ? setLens({ ...lens, cyl: { ...lens.cyl, rightCyl: e.target.value } }) : setLens({ ...lens, cyl: { ...lens.cyl, leftCyl: e.target.value } })

    }




    // handle asix function is here
    function handleAxis(e, eye) {

        e.preventDefault();

        eye == "od" ? setLens({ ...lens, axis: { ...lens.axis, rightAxis: e.target.value } }) : setLens({ ...lens, axis: { ...lens.axis, leftAxis: e.target.value } })

    }




    // handle prism vertical function is here
    function handleVertical(e, eye) {

        e.preventDefault();


        // remove depanded value
        if (e.target.value == "0") {
            eye == "od" ? setLens({
                ...lens,
                rightPrism: {
                    ...lens.rightPrism,
                    vertical: e.target.value,
                    vBaseDirection: "N/A",
                }
            }) : setLens({
                ...lens,
                leftPrism: {
                    ...lens.leftPrism,
                    vertical: e.target.value,
                    vBaseDirection: "N/A",

                }
            })
            return;
        }



        eye == "od" ? setLens({ ...lens, rightPrism: { ...lens.rightPrism, vertical: e.target.value } }) : setLens({ ...lens, leftPrism: { ...lens.leftPrism, vertical: e.target.value } })

    }



    // handle Vertical direction function is here
    function handleVerticalDirection(e, eye) {

        e.preventDefault();

        eye == "od" ? setLens({ ...lens, rightPrism: { ...lens.rightPrism, vBaseDirection: e.target.value } }) : setLens({ ...lens, leftPrism: { ...lens.leftPrism, vBaseDirection: e.target.value } })


    }



    // handle handleherical function is here
    function handleHorizontal(e, eye) {

        e.preventDefault();



        // remove depanded value
        if (e.target.value == "0") {
            eye == "od" ? setLens({
                ...lens,
                rightPrism: {
                    ...lens.rightPrism,
                    horizontal: e.target.value,
                    hBaseDirection: "N/A",
                }
            }) : setLens({
                ...lens,
                leftPrism: {
                    ...lens.leftPrism,
                    horizontal: e.target.value,
                    hBaseDirection: "N/A",

                }
            })
            return;
        }



        eye == "od" ? setLens({ ...lens, rightPrism: { ...lens.rightPrism, horizontal: e.target.value } }) : setLens({ ...lens, leftPrism: { ...lens.leftPrism, horizontal: e.target.value } })

    }


    // handle horizontal direction function is here
    function handleHorizontalDirection(e, eye) {

        e.preventDefault();

        eye == "od" ? setLens({ ...lens, rightPrism: { ...lens.rightPrism, hBaseDirection: e.target.value } }) : setLens({ ...lens, leftPrism: { ...lens.leftPrism, hBaseDirection: e.target.value } })


    }


    // handle prescription file changes is here
    async function handleFileChanges(e) {

        const file = e.target.files[0];
        const base64 = await fileToBase64(file);
        setLens({ ...lens, prescriptionImage: base64 });

    }



    // handle remove function is here
    function handleRemoved(e) {
        e.preventDefault();
        clearFileInput(fileInputRef);
        setLens({ ...lens, prescriptionImage: "" });
    }




    // handle checked and deChecked function is here
    const handleCheckedandDeChecked = (e) => {
        e.preventDefault();


        if (lens.addPrism) {
            setLens({
                ...lens,
                addPrism: false,
                leftPrism: {
                    vertical: "",
                    vBaseDirection: "",
                    horizontal: "",
                    hBaseDirection: "",
                },
                rightPrism: {
                    vertical: "",
                    vBaseDirection: "",
                    horizontal: "",
                    hBaseDirection: "",
                },
            })
        } else {
            setLens({ ...lens, addPrism: true });

            setalert(true);
            setalertMessage('Adding Prism require additional surfacing: +£15');
        }

    }



    // handle add function is here
    function handleAdd(e, eye) {

        e.preventDefault();

        eye == "od" ? setLens({ ...lens, add: { ...lens.add, rightAdd: e.target.value } }) : setLens({ ...lens, add: { ...lens.add, leftAdd: e.target.value } })
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

            className="max-w-3xl mx-auto p-6 bg-white border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between">
                <BackBtn step={step} setStep={setStep} />
                <CircularProgress initialValue={30} />
            </div>

            <h2 className="text-2xl font-semibold mb-3">Enter your prescription</h2>

            {/* Basic Info */}
            <div className="mt-6 flex gap-3 items-center">
                <div className="w-full">
                    <label className="text-md text-gray-600/80">Upload your Prescription</label>
                    <div className="flex items-center gap-2 mt-2 h-full">
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={(e) => { handleFileChanges(e) }}
                            className="w-full border p-2 rounded-md focus:outline-yellow-500/60 text-gray-700/80 cursor-pointer"
                        />
                        {
                            lens?.prescriptionImage && (
                                <div className="relative w-auto h-full border border-gray-200 text-gray-500/40 bg-gray-200 rounded-md">
                                    <Image src={lens?.prescriptionImage} width={50} height={50} alt="prescription" />

                                    <div onClick={(e) => { handleRemoved(e) }} className="absolute top-0 right-0 w-4 h-4 bg-yellow-600 text-white translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center cursor-pointer">
                                        <RxCross2 />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="mt-8 overflow-x-auto">


                <Warn alert={alert} setalert={setalert}>
                    {alertMessage}
                </Warn>


                <table className="w-full border text-center">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="text-left pl-2">Eyes</th>
                            <th>SPH</th>
                            <th>CYL</th>
                            <th>Axis</th>
                            <th>ADD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {["od", "os"].map((eye) => (
                            <tr key={eye} className="border-t">
                                <td className="p-2 font-semibold text-left">
                                    {eye === "od" ? "OD" : "OS"}
                                    <div className="text-xs text-gray-500">
                                        {eye === "od" ? "right eye" : "left eye"}
                                    </div>
                                </td>


                                {/* SPH select */}
                                <td className="p-2">
                                    <select
                                        onChange={(e) => { handleSHP(e, eye) }}
                                        value={eye == "od" ? lens.sph.rightSph : lens.sph.leftSph}
                                        className="border p-2 rounded-md focus:outline-yellow-500/60 cursor-pointer"
                                    >
                                        <option value={"0"} className="text-md text-gray-600 font-medium">SPH</option>
                                        {SpaNumberOptions?.map((n) => (
                                            <option className="text-md text-gray-600 font-medium" key={n} value={n}>{n}</option>
                                        ))}
                                    </select>
                                </td>


                                {/* CYL select */}
                                <td className="p-2">
                                    <select
                                        onChange={(e) => { handleCYL(e, eye) }}
                                        value={eye == "od" ? lens.cyl.rightCyl : lens.cyl.leftCyl}
                                        className="border p-2 rounded-md focus:outline-yellow-500/60 cursor-pointer"
                                    >
                                        <option value={"0"} className="text-md text-gray-600/90 font-medium">CYL</option>
                                        {CyLNumberOPtions.map((n) => (
                                            <option className="text-md text-gray-600/90 font-medium" key={n} value={n}>{n}</option>
                                        ))}
                                    </select>
                                </td>


                                {/* Axis select */}
                                <td className="p-2">
                                    <select


                                        disabled={eye == "od" ? lens.cyl.rightCyl == "0" : lens.cyl.leftCyl == "0"}


                                        onChange={(e) => { handleAxis(e, eye) }}

                                        value={eye == "od" ? lens.axis.rightAxis : lens.axis.leftAxis}

                                        className="border p-2 rounded-md focus:outline-yellow-500/60 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600"
                                    >
                                        <option value={"0"} className="text-md text-gray-600 font-medium">Axis</option>
                                        {AxisNumberOPtion.map((n) => (
                                            <option className="text-md text-gray-600 font-medium" key={n} value={n}>{n}</option>
                                        ))}
                                    </select>
                                </td>


                                {/* ADD select */}
                                <td className="p-2">
                                    <select
                                        disabled={lens?.LenseUseCase === "distance"}
                                        onChange={(e) => { handleAdd(e, eye) }}
                                        value={eye == "od" ? lens.add.rightAdd : lens.add.leftAdd}
                                        className="border p-2 rounded-md focus:outline-yellow-500/60 cursor-pointer  disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600"
                                    >
                                        <option value={"0"} className="text-md text-gray-600 font-medium">ADD</option>
                                        {ADDNumberOPtions.map((n) => (
                                            <option className="text-md text-gray-600 font-medium" key={n} value={n}>{n}</option>
                                        ))}
                                    </select>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



            <div>
                <div className="mt-6 flex items-center gap-2 border-t pt-4" >
                    <div onClick={(e) => { handleCheckedandDeChecked(e) }} className={`flex items-center justify-center text-white cursor-pointer w-6 h-6 ${lens?.addPrism ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                        {
                            lens?.addPrism && <TiTick className="text-2xl" />
                        }
                    </div>
                    <p className="font-medium text-md text-gray-600/70">
                        Add Prism £15
                    </p>
                </div>
                <motion.div

                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: .7,
                        delay: 0,
                        ease: "easeOut"
                    }}

                    className={`${lens?.addPrism ? "flex" : "hidden"} mt-6 flex items-center gap-2`}>
                    <table className="w-full border text-center">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="text-left pl-2">Eyes</th>
                                <th>Vertical</th>
                                <th>Base Direction</th>
                                <th>Horizontal</th>
                                <th>Base Direction</th>
                            </tr>
                        </thead>
                        <tbody>
                            {["od", "os"].map((eye) => (
                                <tr key={eye} className="border-t">
                                    <td className="p-2 font-semibold text-left">
                                        {eye === "od" ? "OD" : "OS"}
                                        <div className="text-xs text-gray-500">
                                            {eye === "od" ? "right eye" : "left eye"}
                                        </div>
                                    </td>


                                    {/* vertical select */}
                                    <td className="p-2">
                                        <select
                                            onChange={(e) => { handleVertical(e, eye) }}
                                            value={eye == "od" ? lens.rightPrism.vertical : lens.leftPrism.vertical}
                                            className="border p-2 rounded-md focus:outline-yellow-500/60 cursor-pointer"
                                        >
                                            <option value={"0"} className="text-md text-gray-600 font-medium">N/A</option>
                                            {PrismNumberOption?.map((n) => (
                                                <option className="text-md text-gray-600 font-medium" key={n} value={n}>{n}</option>
                                            ))}
                                        </select>
                                    </td>


                                    {/* Base Direction for Vertical */}
                                    <td className="p-2">
                                        <select

                                            disabled={eye == "od" ? lens.rightPrism.vertical == "0" : lens.leftPrism.vertical == "0"}

                                            onChange={(e) => { handleVerticalDirection(e, eye) }}

                                            value={eye == "od" ? lens.rightPrism.vBaseDirection : lens.leftPrism.vBaseDirection}

                                            className="border p-2 rounded-md focus:outline-yellow-500/60 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600"
                                        >
                                            <option value={"N/A"} className="text-md text-gray-600 font-medium">N/A</option>
                                            {["Up", "Down"].map((n) => (
                                                <option className="text-md text-gray-600 font-medium" key={n} value={n}>{n}</option>
                                            ))}
                                        </select>
                                    </td>


                                    {/* horizontal select */}
                                    <td className="p-2">
                                        <select

                                            onChange={(e) => { handleHorizontal(e, eye) }}

                                            value={eye == "od" ? lens.rightPrism.horizontal : lens.leftPrism.horizontal}

                                            className="border p-2 rounded-md focus:outline-yellow-500/60 cursor-pointer"
                                        >
                                            <option value={"0"} className="text-md text-gray-600 font-medium">N/A</option>
                                            {PrismNumberOption.map((n) => (
                                                <option className="text-md text-gray-600 font-medium" key={n} value={n}>{n}</option>
                                            ))}
                                        </select>
                                    </td>


                                    {/* Base Direction for horizontal */}
                                    <td className="p-2">
                                        <select

                                            disabled={eye == "od" ? lens.rightPrism.horizontal == "0" : lens.leftPrism.horizontal == "0"}

                                            onChange={(e) => { handleHorizontalDirection(e, eye) }}

                                            value={eye == "od" ? lens.rightPrism.hBaseDirection : lens.leftPrism.hBaseDirection}

                                            className="border p-2 rounded-md focus:outline-yellow-500/60 cursor-pointer  disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600"
                                        >
                                            <option value={"N/A"} className="text-md text-gray-600 font-medium">N/A</option>
                                            {["In", "Out"].map((n) => (
                                                <option className="text-md text-gray-600 font-medium" key={n} value={n}>{n}</option>
                                            ))}
                                        </select>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>




            {/* Footer */}
            <div className="mt-8 flex items-center justify-between border-t pt-4" >
                <p
                    className="text-lg font-semibold text-gray-900/90">SUBTOTAL:</p>
                <span className="text-md text-gray-600 mt-1">
                    £124
                </span>
            </div>


            {/* Agreement */}
            <div className="mt-6 flex items-start gap-2 border-t pt-4" >

                <div className="w-fit">
                    <div onClick={(e) => { setconfirm(!confirm) }} className={`mt-1.5 flex items-center justify-center text-white cursor-pointer w-6 h-6 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                        {
                            confirm && <TiTick className="text-2xl" />
                        }
                    </div>
                </div>

                <p className="font-medium text-lg text-gray-600/70">
                    I confirm that I’ve read and agree to the <span className="underline">Terms and Conditions</span> and that the prescription is valid.
                </p>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between" >
                <button
                    onClick={(e) => { handleNext(e) }}
                    className="w-full px-6 py-3 pBg text-white font-bold rounded-md disabled:opacity-50 flex items-center justify-center"
                >
                    {
                        isLoading ? <Loading /> : "Next"
                    }
                </button>
            </div>
            <Toaster position="bottom-center" reverseOrder={false} />
        </motion.div >
    );
}
