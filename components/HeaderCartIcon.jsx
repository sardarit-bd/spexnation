import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const HeaderCartIcon = () => {



    const [hasData, sethasData] = useState([]);



    useEffect(() => {
        sethasData(JSON.parse(localStorage.getItem("lensData")));
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