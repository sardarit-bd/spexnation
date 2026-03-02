'use client';


import { Code, FileText, Home, PackageSearch, Settings, Target, X } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import getTookn from "../../lib/getTookn";
import verifyJWT from "../../lib/verifyJWT";

const Sidebar = ({ isOpen, onClose }) => {


    const menuItemsForAdmin = [
        { icon: Home, label: 'Dashboard', href: '/dashboard' },
        { icon: Settings, label: 'Users', href: '/dashboard/users' },
        { icon: FileText, label: 'Orders', href: '/dashboard/orders' },
        { icon: Target, label: 'Add Product', href: '/dashboard/addproduct' },
        { icon: PackageSearch, label: 'All Products', href: '/dashboard/allproducts' },
        { icon: Code, label: 'Coupon Code', href: '/dashboard/coupon' },
        { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
    ];


    const menuItemsForCustomer = [
        { icon: Home, label: 'Dashboard', href: '/dashboard' },
        { icon: FileText, label: 'My Orders', href: '/dashboard/myorders' },
    ];


    const [email, setemail] = useState('');
    const [name, setname] = useState('');
    const [role, setrole] = useState('');
    const pathname = usePathname();

    useEffect(() => {

        let isMounted = true;

        const loadUser = async () => {
            try {
                const token = getTookn();

                if (!token) return;

                const decoded = await verifyJWT(token);

                if (isMounted && decoded) {
                    setname(decoded?.name);
                    setemail(decoded?.email);
                    setrole(decoded?.role);
                }

            } catch (err) {
                console.error("User load failed:", err);
            }
        };

        loadUser();

        return () => {
            isMounted = false; // cleanup
        };

    }, []);


    // role finder
    const menuItems = role === 'admin' ? menuItemsForAdmin : menuItemsForCustomer;



    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={onClose}
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out border-r border-gray-200 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Mobile close button */}
                    <div className="flex items-center justify-between p-4 lg:hidden">
                        <h2 className="text-gray-700 text-xl font-bold">Menu</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-800 hover:text-white hover:bg-yellow-700 p-2 rounded-lg transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Logo/Brand */}
                    <div className="hidden lg:flex items-center justify-center p-4 border-b border-gray-200">

                        <div className="h-[40px]">
                            <Link className="h-full w-full" href="/">
                                <Image src="/logo.png" alt="Spex Nation" className=" h-full" width="1000" height="1000" />
                            </Link>
                        </div>

                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 overflow-y-auto p-4">
                        <ul className="space-y-2">
                            {menuItems?.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className={`flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-yellow-700 hover:text-white rounded-lg transition-colors group ${pathname === item.href && 'bg-yellow-700 text-white'}`}
                                        >
                                            <Icon size={20} className="flex-shrink-0" />
                                            <span className="font-medium">{item.label}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* User section at bottom */}
                    <div className="p-2 border-t border-gray-200">
                        <div className="flex items-center gap-3 px-4 py-3 text-gray-900">
                            <div className="w-10 h-10 bg-yellow-700 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold text-white">{name?.slice(0, 2)}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{name}</p>
                                <p className="text-xs text-yellow-600 truncate">{email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
