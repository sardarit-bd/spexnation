'use client';

import { useState } from 'react';
import Header from '../../components/Deshboard/Header';
import Sidebar from '../../components/Deshboard/Sidebar';

const DashboardLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

            {/* Main content area */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Header */}
                <Header onMenuClick={toggleSidebar} />

                {/* Main content */}
                <main className="flex-1 overflow-y-auto bg-gray-100 p-3 lg:p-4">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
