'use client'

import { ArrowLeft } from 'lucide-react';
import useLenseStore from '../../store/useLenseStore';

const BackBtn = ({ step, setStep }) => {

    const { lens, setLens } = useLenseStore();

    const handleBack = (e) => {
        e.preventDefault();


        if (lens?.LenseUseCase == "noprescription" && step == 5) {
            setStep(1);
            return;
        }

        setStep(step - 1);
    }

    return (
        <div className="flex items-center justify-between mb-6">
            <button onClick={(e) => { handleBack(e) }} className="text-gray-600 text-sm bg-gray-200 px-2 cursor-pointer py-1 rounded-md flex items-center gap-1">
                <ArrowLeft />
                <span className="text-md font-semibold">Back</span>
            </button>
        </div>
    )
}

export default BackBtn;