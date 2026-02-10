import { create } from "zustand";

const useLenseStore = create((set) => ({
    lens: {
        LenseName: "",
        LenseUseCase: "",
        LenseThickness: "",
        ProtectiveCoatings: "",
        Transition: "",
        Subtotal: 0,
        Total: 0,
        pdType: "spd",
        singlePD: "",
        dualPD: {
            leftPD: "",
            rightPD: "",
        },
        sph: {
            leftSph: "",
            rightSph: "",
        },
        cyl: {
            leftCyl: "",
            rightCyl: "",
        },
        axis: {
            leftAxis: "",
            rightAxis: "",
        },
        add: {
            leftAdd: "",
            rightAdd: "",
        }
    },

    setLens: (newLens) => set({ lens: newLens }),
}));

export default useLenseStore;