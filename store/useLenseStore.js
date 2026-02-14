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
        addPrism: false,
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
        },

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
    },

    setLens: (newLens) => set({ lens: newLens }),
}));

export default useLenseStore;