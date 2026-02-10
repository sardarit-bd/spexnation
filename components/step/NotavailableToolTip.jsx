import { motion } from "framer-motion";

const NotavailableToolTip = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1,
                delay: 0,
                ease: "easeOut"
            }}
            className="hidden group-hover:flex absolute top-0 right-5 flex items-center justify-center translate-y-[-150%] shadow-lg">
            <div className="sBg text-white py-1.5 px-2 rounded shadow-lg relative">
                <p className="font-semibold">Not available in your prescription</p>
                <div className="clipPath sBg absolute rotate-180 right-5 w-5 h-5" />
            </div>
        </motion.div>
    );
};


export default NotavailableToolTip