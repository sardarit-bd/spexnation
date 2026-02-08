import { create } from "zustand";

const useStepStore = create((set) => ({
    step: 0,
    setStep: (newStep) => set({ step: newStep }),
}));

export default useStepStore;