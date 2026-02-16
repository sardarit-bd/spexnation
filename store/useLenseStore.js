import { create } from "zustand";

const useLenseStore = create((set) => ({
    lens: {
        LenseName: "",
        LenseUseCase: "",
        LenseThickness: "",
        pdType: "spd",
        singlePD: "0",
        dualPD: {
            leftPD: "0",
            rightPD: "0",
        },
        sph: {
            leftSph: "0",
            rightSph: "0",
        },
        cyl: {
            leftCyl: "0",
            rightCyl: "0",
        },
        axis: {
            leftAxis: "0",
            rightAxis: "0",
        },
        add: {
            leftAdd: "0",
            rightAdd: "0",
        },

        addPrism: false,
        leftPrism: {
            vertical: "0",
            vBaseDirection: "N/A",
            horizontal: "0",
            hBaseDirection: "N/A",
        },
        rightPrism: {
            vertical: "0",
            vBaseDirection: "N/A",
            horizontal: "0",
            hBaseDirection: "N/A",
        },

        ProtectiveCoatings: [],
        Transition: "",
        color: "gray",
        darkness: "light",
        prescriptionImage: '',
        Subtotal: 0,
        Total: 0,
    },

    setLens: (newLens) => set({ lens: newLens }),
}));

export default useLenseStore;