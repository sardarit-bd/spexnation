import { motion } from "framer-motion";

import Image from "next/image";


const GallaryImageShow = ({ img }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                duration: .5,
                delay: 0,
                ease: "easeOut"
            }}
            className="mt-6 bg-white p-4 border border-gray-200 shadow-xl w-[300px] h-[150px] md:w-[450px] md:h-[300px] z-40 flex items-center justify-center">
            <div>
                <Image className="h-full w-full" src={img} alt="placeholder" width={1000} height={1000} />
            </div>
        </motion.div>
    )
}

export default GallaryImageShow;