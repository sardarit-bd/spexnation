import { motion } from "framer-motion";

import Image from "next/image";


const HowPdMesure = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                duration: .5,
                delay: 0,
                ease: "easeOut"
            }}
            className="mt-6 bg-white p-4 border border-gray-200 shadow-xl w-[80vw] md:w-[440px] h-fit z-40">
            <div className="clipPath bg-gray-300 w-6 h-6 absolute  top-0 right-[45%] md:right-5" />
            <div>
                <h3 className="text-lg font-medium text-gray-700">{`Measure your Pupillary Distance (PD)`}</h3>
                <p className="text-md font-medium text-gray-700/70">It only takes 30 seconds</p>
                <div className="my-4 w-full">
                    <Image className="h-full w-full" src="/pdMesureImage.png" alt="placeholder" width={100} height={100} />
                </div>
                <p className="text-gray-400 text-sm">Align the <b>0mm</b> mark <b>a millimetre ruler with the centre of your left pupil.</b> Then, look straight and read the mm number lined up with the centre of <b>your right pupil.</b></p>
                <b className="pt-4 text-md">Most adults: 54-74mm</b>
            </div>
        </motion.div>
    )
}

export default HowPdMesure;