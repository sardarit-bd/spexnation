const DashboardPage = () => {
    return (
        <div>
            {/* Top Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 mb-4 gap-4">

                <div className="bg-white p-4 border border-gray-200 h-[170px]">
                    <p className="text-gray-500 text-sm">Total Orders</p>
                    <h2 className="text-3xl font-bold mt-2">128</h2>
                    <p className="text-green-600 text-sm mt-1">+12% this week</p>
                </div>

                <div className="bg-white p-4 border border-gray-200 h-[170px] ">
                    <p className="text-gray-500 text-sm">Pending Orders</p>
                    <h2 className="text-3xl font-bold mt-2">24</h2>
                    <p className="text-yellow-600 text-sm mt-1">Need attention</p>
                </div>

                <div className="bg-white p-4 border border-gray-200 h-[170px] ">
                    <p className="text-gray-500 text-sm">Revenue</p>
                    <h2 className="text-3xl font-bold mt-2">£3,420</h2>
                    <p className="text-blue-600 text-sm mt-1">This month</p>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                {/* Recent Orders */}
                <div className="bg-white p-4 border border-gray-200 h-[350px]">
                    <h1 className="text-lg font-semibold mb-4">Recent Orders</h1>

                    <div className="space-y-3 text-sm">

                        <div className="flex justify-between border-b pb-2">
                            <span>Order #1023</span>
                            <span className="text-green-600">Completed</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span>Order #1022</span>
                            <span className="text-yellow-600">Processing</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span>Order #1021</span>
                            <span className="text-red-500">Pending</span>
                        </div>

                    </div>
                </div>

                {/* Popular Lens */}
                <div className="bg-white p-4 border border-gray-200 h-[350px]">
                    <h1 className="text-lg font-semibold mb-4">Popular Lens</h1>

                    <div className="space-y-3 text-sm">

                        <div className="flex justify-between border-b pb-2">
                            <span>Elegance TF2249</span>
                            <span className="font-medium">45 orders</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span>Ultra Thin Pro</span>
                            <span className="font-medium">32 orders</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span>Comfort Lite</span>
                            <span className="font-medium">19 orders</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default DashboardPage;