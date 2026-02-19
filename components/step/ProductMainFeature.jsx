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

const ProductMainFeature = ({ product }) => {

    const { step } = useStepStore();



    return (
        <div className="grid grid-cols-1 md:grid-cols-7 gap-5 h-full">
            {/* Gallery */}
            <div className="md:col-span-3">
                <ProductGallery product={product} />
            </div>

            {/* Details */}
            <div className="md:col-span-4">
                {
                    step === 1 ? <VisionType /> : step === 2 ? <PrescriptionInputer /> : step === 3 ? <PDType /> : step === 4 ? <LensThicknes /> : step === 5 ? <ProtectiveCoatings /> : step === 6 ? <Transition /> : step === 7 ? <Review /> : <ProductDetails product={product} />
                }
            </div>

        </div>
    )
}

export default ProductMainFeature;