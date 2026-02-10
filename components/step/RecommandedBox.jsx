import { Star } from "lucide-react";

const RecommandedBox = () => {
    return (
        <div>
            <div className="flex items-center gap-1 sBg px-1 rounded-sm shadow-md">
                <Star size={16} className="text-white" />
                <p className="text-white">Recommended</p>
            </div>
        </div>
    )
}

export default RecommandedBox;