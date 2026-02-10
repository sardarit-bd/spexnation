import { motion } from "framer-motion";
import { useState } from "react";
import ADDNumberOPtions from "../../Data/ADDNumberOPtions";
import AxisNumberOPtion from "../../Data/AxisNumberOPtion";
import CyLNumberOPtions from "../../Data/CyLNumberOPtions";
import PDNumberOption from "../../Data/PDNumberOption";
import SpaNumberOptions from "../../Data/SpaNumberOptions";
import useLenseStore from "../../store/useLenseStore";
import useStepStore from "../../store/useStepStore";
import Loading from "../Loading";
import BackBtn from "./BackBtn";
import CircularProgress from "./CircularProgress";



export default function EnterPrescription() {


    const { step, setStep } = useStepStore();
    const { lens, setLens } = useLenseStore();
    const [isLoading, setisLoading] = useState(false);
    const [pdt, setpdt] = useState('spd');


    //handle next function is here
    const handleNext = () => {
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

        eye == "od" ? setLens({ ...lens, cyl: { ...lens.cyl, rightCyl: e.target.value } }) : setLens({ ...lens, cyl: { ...lens.cyl, leftCyl: e.target.value } })

    }




    // handle asix function is here
    function handleAxis(e, eye) {

        e.preventDefault();

        eye == "od" ? setLens({ ...lens, axis: { ...lens.axis, rightAxis: e.target.value } }) : setLens({ ...lens, axis: { ...lens.axis, leftAxis: e.target.value } })

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
            {/* <div className="mt-6 flex gap-3 items-center">
                <div className="">
                    <label className="text-md text-gray-600/80">Prescription name</label>
                    <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border p-2 rounded-md focus:outline-yellow-500/60 text-gray-700/80"
                    />
                </div>
                <div className="">
                    <label className="text-md text-gray-600/80">Date of prescription *</label>
                    <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full border p-2 rounded-md focus:outline-yellow-500/60 text-gray-700/80"
                    />
                </div>
            </div> */}

            {/* Table */}
            <div className="mt-8 overflow-x-auto">
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
                                        <option value={""} className="text-md text-gray-600 font-medium">SPH</option>
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
                                        <option value={""} className="text-md text-gray-600 font-medium">CYL</option>
                                        {CyLNumberOPtions.map((n) => (
                                            <option className="text-md text-gray-600 font-medium" key={n} value={n}>{n}</option>
                                        ))}
                                    </select>
                                </td>


                                {/* Axis select */}
                                <td className="p-2">
                                    <select

                                        onChange={(e) => { handleAxis(e, eye) }}

                                        value={eye == "od" ? lens.axis.rightAxis : lens.axis.leftAxis}

                                        className="border p-2 rounded-md focus:outline-yellow-500/60 cursor-pointer"
                                    >
                                        <option value={""} className="text-md text-gray-600 font-medium">Axis</option>
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
                                        <option value={""} className="text-md text-gray-600 font-medium">ADD</option>
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

            {/* PD */}
            <div className="mt-6">
                <div className="flex flex-col items-start gap-2">
                    <h2 className="font-semibold text-lg text-gray-600">PD Type: </h2>
                    <div className="flex gap-3 items-center">
                        <button onClick={() => { setLens({ ...lens, pdType: 'spd' }) }} className={` px-2 py-1 ${lens?.pdType === 'spd' ? 'sBg text-white' : 'bg-gray-300 text-gray-600'}`}>Single PD</button>
                        <button onClick={() => { setLens({ ...lens, pdType: 'dpd' }) }} className={` px-2 py-1 ${lens?.pdType === 'dpd' ? 'sBg text-white' : 'bg-gray-300 text-gray-600'}`}>Dual PD</button>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex flex-col items-start gap-1 mt-5">
                        <h2 className="font-semibold text-sm text-gray-600">{pdt === 'spd' ? `Single PD (MM)` : `Right PD (MM)`} </h2>
                        <td className="">
                            <select
                                // value={field}
                                className="border p-2 rounded-md focus:outline-yellow-500/60"
                            >
                                {PDNumberOption?.map((n) => (
                                    <option className="text-md text-gray-600 font-medium" key={n} value={n}>{n}</option>
                                ))}
                            </select>
                        </td>
                    </div>


                    {
                        pdt === 'dpd' && (
                            <div className="flex flex-col items-start gap-1 mt-5">
                                <h2 className="font-semibold text-sm text-gray-600">{`Left PD (MM)`} </h2>
                                <td className="">
                                    <select
                                        // value={field}
                                        className="border p-2 rounded-md focus:outline-yellow-500/60"
                                    >
                                        {PDNumberOption?.map((n) => (
                                            <option className="text-md text-gray-600 font-medium" key={n} value={n}>{n}</option>
                                        ))}
                                    </select>
                                </td>
                            </div>
                        )
                    }





                </div>
            </div >

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
                <input
                    className="mt-1.5 w-6 h-6"
                    type="checkbox"
                // checked={form.agree}
                // onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                />
                <p className="font-medium text-lg text-gray-600/70">
                    I confirm that I’ve read and agree to the <span className="underline">Terms and Conditions</span> and that the prescription is valid.
                </p>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between" >
                <button
                    // disabled={!form.agree}
                    onClick={handleNext}
                    className="w-full px-6 py-3 pBg text-white font-bold rounded-md disabled:opacity-50 flex items-center justify-center"
                >
                    {
                        isLoading ? <Loading /> : "SAVE & CONTINUE"
                    }
                </button>
            </div>
        </motion.div >
    );
}
