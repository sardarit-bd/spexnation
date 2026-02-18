import getTotalPrice from "../../lib/getTotalPrice";
import useLenseStore from "../../store/useLenseStore";

const SubTotal = () => {

    const { lens } = useLenseStore();

    return (
        <div className="flex justify-between items-center w-full">
            <span className="text-xl text-gray-700/80 font-semibold">Subtotal</span>
            <span className="text-xl font-semibold">£{getTotalPrice(lens?.total)}</span>
        </div>
    )
}

export default SubTotal;