'use client'

import ProductDetails from "../../components/ProductDetails";
import ProductGallery from "../../components/ProductGallery";
import useStepStore from "../../store/useStepStore";
import LensCategory from "./LensCategory";
import Lenspackage from "./Lenspackage";
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
                step === 1 ? <VisionType /> : step === 2 ? <PrescriptionInputer /> : step === 3 ? <LensCategory /> : step === 4 ? <Lenspackage /> : step === 5 ? <Transition /> : step === 6 ? <Review /> : <ProductDetails />
            }

        </div>
    )
}

export default ProductMainFeature;