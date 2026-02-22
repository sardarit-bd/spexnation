import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const HeaderCartIcon = () => {



    const [hasData, sethasData] = useState([]);

    const loadCart = () => {
        const data = JSON.parse(localStorage.getItem("lensData")) || [];
        sethasData(data);
    };

    useEffect(() => {

        // initial load
        loadCart();

        // listen for localStorage change
        const handleStorageChange = () => {
            loadCart();
        };

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("lensUpdated", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.addEventListener("lensUpdated", handleStorageChange);
        };

    }, []);


    return (
        <Link href="/basket" className="text-gray-600 hover:text-yellow-700 relative">
            <ShoppingBag size={26} />
            <div className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2 text-[11px]">
                {hasData?.length}
            </div>
        </Link>
    )
}

export default HeaderCartIcon;