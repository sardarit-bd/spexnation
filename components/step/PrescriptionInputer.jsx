import { motion } from "framer-motion";
import React from "react";
import useStepStore from "../../store/useStepStore";
import BackBtn from "./BackBtn";
import CircularProgress from "./CircularProgress";
const numberOptions = Array.from({ length: 41 }, (_, i) => (i * 0.25).toFixed(2));
const pdOptions = Array.from({ length: 21 }, (_, i) => 50 + i);

export default function EnterPrescription() {


    const { step, setStep } = useStepStore();

    const [form, setForm] = React.useState({
        name: "My Rx 1",
        date: "",
        od: { sph: "0.00", cyl: "0.00", axis: "--", add: "n/a" },
        os: { sph: "0.00", cyl: "0.00", axis: "--", add: "n/a" },
        pd: "66",
        agree: false,
    });

    const updateEye = (eye, field, value) => {
        setForm((prev) => ({
            ...prev,
            [eye]: { ...prev[eye], [field]: value },
        }));
    };


    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 1,
                delay: 0,
                ease: "easeOut"
            }}

            className="max-w-3xl mx-auto p-6 bg-white border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between">
                <BackBtn step={step} setStep={setStep} />
                <CircularProgress initialValue={60} />
            </div>

            <h2 className="text-2xl font-semibold mb-2">Enter your prescription</h2>
            <a href="#" className="text-sm text-blue-600 underline">
                Learn how to read your prescription
            </a>

            {/* Basic Info */}
            <div className="mt-6 flex gap-3 items-center">
                <div className="">
                    <label className="text-sm text-gray-600">Prescription name</label>
                    <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border p-2 rounded-md"
                    />
                </div>
                <div className="">
                    <label className="text-sm text-gray-600">Date of prescription *</label>
                    <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full border p-2 rounded-md"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="mt-8 overflow-x-auto">
                <table className="w-full border text-center">
                    <thead className="bg-gray-200">
                        <tr>
                            <th></th>
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
                                {["sph", "cyl"].map((field) => (
                                    <td key={field} className="p-2">
                                        <select
                                            value={form[eye][field]}
                                            onChange={(e) => updateEye(eye, field, e.target.value)}
                                            className="border p-2 rounded-md"
                                        >
                                            {numberOptions.map((n) => (
                                                <option key={n}>{n}</option>
                                            ))}
                                        </select>
                                    </td>
                                ))}
                                <td className="p-2 text-gray-400">--</td>
                                <td className="p-2">
                                    <select className="border p-2 rounded-md" disabled>
                                        <option>n/a</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* PD */}
            <div className="mt-6">
                <label className="text-sm font-medium">PD</label>
                <select
                    value={form.pd}
                    onChange={(e) => setForm({ ...form, pd: e.target.value })}
                    className="border p-2 rounded-md ml-3"
                >
                    {pdOptions.map((pd) => (
                        <option key={pd}>{pd}</option>
                    ))}
                </select>
            </div>

            <button className="mt-4 text-sm text-gray-600 underline">More options</button>

            {/* Agreement */}
            <div className="mt-6 flex items-start gap-2">
                <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                />
                <p className="text-sm text-gray-600">
                    I confirm that I’ve read and agree to the <span className="underline">Terms and Conditions</span> and that the prescription is valid.
                </p>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between">
                <button
                    disabled={!form.agree}
                    className="px-6 py-3 bg-teal-600 text-white rounded-md disabled:opacity-50"
                >
                    SAVE & CONTINUE
                </button>
                <div className="text-right">
                    <p className="font-semibold">SUBTOTAL: £273</p>
                    <p className="text-sm text-gray-600">3 interest-free payments of £91</p>
                </div>
            </div>
        </motion.div>
    );
}
