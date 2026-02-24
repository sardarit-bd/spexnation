const StatusBadge = ({ type, value }) => {

    const paymentStyles = {
        paid: "bg-green-100 text-green-700 border-green-300",
        pending: "bg-yellow-100 text-yellow-700 border-yellow-300",
        failed: "bg-red-100 text-red-700 border-red-300",
        refunded: "bg-blue-100 text-blue-700 border-blue-300",
    };

    const deliveryStyles = {
        processing: "bg-purple-100 text-purple-700 border-purple-300",
        shipped: "bg-indigo-100 text-indigo-700 border-indigo-300",
        delivered: "bg-green-100 text-green-700 border-green-300",
        cancelled: "bg-red-100 text-red-700 border-red-300",
    };

    const styles =
        type === "payment"
            ? paymentStyles[value]
            : deliveryStyles[value];

    return (
        <span
            className={`px-2 py-1 text-xs font-medium rounded-full border ${styles}`}
        >
            {value}
        </span>
    );
};

export default StatusBadge;