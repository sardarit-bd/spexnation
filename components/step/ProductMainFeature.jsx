'use client'

import ProductDetails from "../../components/ProductDetails";
import ProductGallery from "../../components/ProductGallery";
import useStepStore from "../../store/useStepStore";
import LensThicknes from "./LensThicknes";
import PDType from "./PDType";
import PrescriptionInputer from "./PrescriptionInputer";
import ProtectiveCoatings from "./ProtectiveCoatings";
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
                step === 1 ? <VisionType /> : step === 2 ? <PrescriptionInputer /> : step === 3 ? <PDType /> : step === 4 ? <LensThicknes /> : step === 5 ? <ProtectiveCoatings /> : step === 6 ? <Transition /> : step === 7 ? <Review /> : <ProductDetails />
            }

        </div>
    )
}

export default ProductMainFeature;