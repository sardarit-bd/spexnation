'use client'

import ProductDetails from "../../components/ProductDetails";
import ProductGallery from "../../components/ProductGallery";
import useStepStore from "../../store/useStepStore";
import PrescriptionInputer from "./PrescriptionInputer";
import VisionType from "./VissionType";

const ProductMainFeature = () => {

    const { step } = useStepStore();


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Gallery */}
            <ProductGallery />

            {/* Details */}
            {
                step === 1 ? <VisionType /> : step === 2 ? <PrescriptionInputer /> : <ProductDetails />
            }
        </div>
    )
}

export default ProductMainFeature;