'use client';

import { Menu, User } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoIosLogOut } from "react-icons/io";
import Loading from "../../components/Loading";

const Header = ({ onMenuClick }) => {

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();


    const handleLogout = (e) => {

        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            router.push('/');
        }, 1600);
    };




    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
            <div className="flex items-center justify-between px-4 py-3 lg:px-6">
                {/* Left section - Mobile menu button + Logo */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden text-gray-700 hover:bg-yellow-600 hover:text-white p-2 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        <Menu size={24} />
                    </button>

                    <div className="lg:hidden">
                        <div className="h-[40px] w-48">
                            <Image src="/logo.png" alt="Spex Nation" className=" h-full" width="1000" height="1000" />
                        </div>
                    </div>
                </div>

                {/* Right section - Actions */}
                <div className="flex items-center gap-2 md:gap-4">

                    {/* User profile */}
                    <button className="flex items-center gap-2 text-gray-900 px-3 py-2 rounded-lg transition-colors relative group">
                        <span className="hidden sm:block text-gray-700/70 font-medium">Admin</span>
                        <div className="w-8 h-8 text-white  bg-yellow-600 rounded-full flex items-center justify-center">
                            <User size={18} />
                        </div>


                        <div className="hidden group-hover:block absolute top-12 right-2 bg-white border border-gray-200 p-4 w-[200px] h-fit shadow-sm text-gray-700/70 font-medium">
                            <div className="clipPath bg-gray-200 absolute top-0 translate-y-[-100%] right-3 w-2.5 h-2.5" />



                            <div className="flex items-center gap-3 text-gray-900">
                                <div className="w-10 h-10 bg-yellow-700 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-bold text-white">JD</span>
                                </div>
                                <div className="flex-1 min-w-0 text-left">
                                    <p className="text-sm font-medium truncate">John Doe</p>
                                    <p className="text-xs text-yellow-600 truncate">john@example.com</p>
                                </div>
                            </div>


                            <div
                                onClick={(e) => { handleLogout(e) }}
                                className="flex items-center justify-center gap-3 px-2 w-full py-2 mt-6 text-white bg-yellow-700 hover:text-white rounded-lg transition-colors group"
                            >


                                {
                                    isLoading ? <Loading /> : (
                                        <>
                                            <IoIosLogOut className="text-xl" />
                                            <span className="font-medium">
                                                Logout
                                            </span>
                                        </>
                                    )
                                }
                            </div>



                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};


export default Header;
