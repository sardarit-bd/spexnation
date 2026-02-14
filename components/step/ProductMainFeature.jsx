'use client'

import ProductDetails from "../../components/ProductDetails";
import ProductGallery from "../../components/ProductGallery";
import useStepStore from "../../store/useStepStore";
import LensCategory from "./LensCategory";
import Lenspackage from "./Lenspackage";
import PDType from "./PDType";
import PrescriptionInputer from "./PrescriptionInputer";
import Review from "./Review";
import Transition from "./Transition";
import VisionType from "./VissionType";

const ProductMainFeature = () => {

    const { step } = useStepStore();


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {/* Gallery */}
            <ProductGallery />

            {/* Details */}
            {
                step === 1 ? <PrescriptionInputer /> : step === 2 ? <PDType /> : step === 3 ? <VisionType /> : step === 4 ? <LensCategory /> : step === 5 ? <Lenspackage /> : step === 6 ? <Transition /> : step === 7 ? <Review /> : <ProductDetails />
            }

        </div>
    )
}

export default ProductMainFeature;