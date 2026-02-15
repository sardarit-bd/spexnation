import { motion } from "framer-motion";
import { useEffect } from "react";
import { MdNotificationImportant } from "react-icons/md";

const Warn = ({ alert, setalert, children }) => {


    useEffect(() => {
        if (alert) {
            const timer = setTimeout(() => {
                setalert(false);
            }, 6000);
            return () => clearTimeout(timer);
        }
    }, [alert]);


    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                duration: .7,
                delay: 0,
                ease: "easeOut"
            }}
            className={`bg-yellow-100 border border-yellow-400 mb-8 text-yellow-700 px-2 py-2 rounded relative ${alert ? 'block' : 'hidden'}`} role="alert">
            <span className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                    <MdNotificationImportant className="text-2xl" />
                    <b>NOTE:</b>
                </div>
                <span>
                    {children}
                </span>
            </span>
        </motion.div>
    )
}

export default Warn;