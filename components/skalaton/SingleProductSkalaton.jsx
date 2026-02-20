const SingleProductSkalaton = () => {
    return (
        <div className="animate-pulse max-w-7xl mx-auto py-12 p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* LEFT IMAGE SECTION */}
                <div className="space-y-4">

                    {/* Main Image */}
                    <div className="w-full h-[320px] bg-gray-200" />

                    {/* Thumbnail */}
                    <div className="flex gap-3">
                        <div className="w-20 h-16 bg-gray-200 " />
                        <div className="w-20 h-16 bg-gray-200 " />
                        <div className="w-20 h-16 bg-gray-200 " />
                    </div>

                </div>

                {/* RIGHT CONTENT */}
                <div className="space-y-4">

                    {/* Collection */}
                    <div className="h-4 w-32 bg-gray-200 " />

                    {/* Title */}
                    <div className="h-8 w-40 bg-gray-200 " />

                    {/* Subtitle */}
                    <div className="h-4 w-60 bg-gray-200 " />

                    {/* Rating */}
                    <div className="flex gap-2">
                        <div className="h-4 w-4 bg-gray-200" />
                        <div className="h-4 w-4 bg-gray-200 " />
                        <div className="h-4 w-4 bg-gray-200 " />
                        <div className="h-4 w-4 bg-gray-200 " />
                        <div className="h-4 w-4 bg-gray-200 " />
                    </div>

                    {/* Includes */}
                    <div className="h-4 w-48 bg-gray-200 " />

                    {/* Price */}
                    <div className="h-8 w-24 bg-gray-300 " />

                    {/* Stock */}
                    <div className="h-4 w-40 bg-gray-200 " />

                    {/* Button */}
                    <div className="h-12 w-full bg-gray-300  mt-4" />

                </div>

            </div>

            {/* TAB SECTION */}
            <div className="mt-10 space-y-6">

                {/* Tabs */}
                <div className="flex gap-6">
                    <div className="h-4 w-24 bg-gray-200 " />
                    <div className="h-4 w-24 bg-gray-200 " />
                    <div className="h-4 w-32 bg-gray-200 " />
                </div>

                {/* Frame Spec Title */}
                <div className="h-6 w-48 bg-gray-300 " />

                {/* Specs */}
                <div className="space-y-3">
                    <div className="h-4 w-32 bg-gray-200 " />
                    <div className="h-4 w-40 bg-gray-200 " />
                    <div className="h-4 w-28 bg-gray-200 " />
                </div>

            </div>
        </div>
    );
};

export default SingleProductSkalaton;
