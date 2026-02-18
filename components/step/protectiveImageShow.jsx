import { motion } from "framer-motion";

import Image from "next/image";


const ProtectiveImageShow = ({ opt }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                duration: .5,
                delay: 0,
                ease: "easeOut"
            }}
            className="mt-6 bg-white p-4 border border-gray-200 shadow-xl w-[80vw] md:w-[440px] h-fit z-50">
            <div className="clipPath bg-gray-300 w-6 h-6 absolute rotate-90  top-10 right-0 translate-x-[100%]" />
            <div>
                <h3 className="text-lg font-medium text-gray-700">{opt?.title}</h3>
                <p className="text-md font-medium text-gray-700/70">{opt?.description}</p>
                <div className="mt-3 w-full">
                    <Image className="h-full w-full" src={opt?.img} alt="placeholder" width={100} height={100} />
                </div>
            </div>
        </motion.div>
    )
}

export default ProtectiveImageShow;