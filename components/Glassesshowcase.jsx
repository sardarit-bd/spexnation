import Image from 'next/image';
import Link from 'next/link';

export default function GlassesShowcase() {
    const showcaseImages = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80',
            username: '@elspethfit',
            alt: 'Woman with blonde hair wearing stylish black glasses',
            large: true
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&q=80',
            username: '@shaneab',
            alt: 'Man wearing sunglasses outdoors'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&q=80',
            username: '@emmahenderson',
            alt: 'Woman with blonde hair wearing glasses'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80',
            username: '@marieeee',
            alt: 'Woman with curly blonde hair wearing glasses'
        }
    ];

    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-5xl sm:text-6xl font-light text-gray-900 mb-6">
                                Your glasses,
                                <br />
                                your way
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Check out these trendy designs then showcase your look. For a chance to be
                                featured in our gallery, share your new pair of frames by tagging{' '}
                                <span className="font-medium">@glasses_direct</span> and{' '}
                                <span className="font-medium">#myglassesmyway</span>.
                            </p>

                            <Link href="/shop" className="border-2 border-gray-900 hover:border-gray-900/10 text-gray-900 px-8 py-3 font-medium hover:bg-yellow-700/90 hover:text-white transition-colors duration-300 focus:outline-none">
                                Shop Now
                            </Link>
                        </div>
                    </div>

                    {/* Right Image Grid */}
                    <div className="w-full h-full grid grid-cols-2 grid-row-2 gap-6">


                        {/* Grid of Smaller Images */}
                        {showcaseImages.map((image, index) => (
                            <div key={index} className="col-span-1 relative overflow-hidden rounded-lg group">
                                <Image
                                    src={showcaseImages[index].src}
                                    alt={showcaseImages[index].alt}
                                    fill
                                    className="object-cover w-[120px] group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}