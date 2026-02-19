const ProductCardSkeleton = () => {
    return (
        <div className="border overflow-hidden animate-pulse">

            {/* Image */}
            <div className="h-52 w-full bg-gray-200" />

            {/* Content */}
            <div className="p-4 space-y-3 bg-white border-t">

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                        <div className="h-3 w-3 bg-gray-200" />
                        <div className="h-3 w-3 bg-gray-200" />
                        <div className="h-3 w-3 bg-gray-200" />
                        <div className="h-3 w-3 bg-gray-200" />
                        <div className="h-3 w-3 bg-gray-200" />
                    </div>
                    <div className="h-3 w-16 bg-gray-200 " />
                </div>

                {/* Title */}
                <div className="h-4 w-32 bg-gray-300 " />

                {/* Price + Stock */}
                <div className="flex justify-between items-center">
                    <div className="h-4 w-12 bg-gray-200 " />
                    <div className="h-5 w-20 bg-gray-200 " />
                </div>

                {/* Button */}
                <div className="h-10 w-full bg-gray-300 mt-2" />

            </div>
        </div>
    );
};





const BestSellingProductSkalaton = () => {
    return (
        <div className="w-full max-w-7xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
            ))}
        </div>
    );
};




export default BestSellingProductSkalaton;