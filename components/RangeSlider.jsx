import { useRef } from "react";

export default function RangeSlider({ min = 0, max = 100, value, setValue,
}) {
    const range = useRef(null);

    const getPercent = (val) => ((val - min) / (max - min)) * 100;

    const handleMin = (e) => {
        const val = Math.min(Number(e.target.value), value.max - 1);
        setValue({ ...value, min: val });
    };

    const handleMax = (e) => {
        const val = Math.max(Number(e.target.value), value.min + 1);
        setValue({ ...value, max: val });
    };

    return (
        <div className="w-full max-w-md">



            <div className="relative h-6">

                {/* base track */}
                <div className="absolute top-2 w-full h-1 bg-gray-300 rounded" />

                {/* active range */}
                <div
                    ref={range}
                    className="absolute top-2 h-1 bg-gray-300 rounded"
                    style={{
                        left: `${getPercent(value.min)}%`,
                        width: `${getPercent(value.max) - getPercent(value.min)}%`
                    }}
                />

                {/* min slider */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value.min}
                    onChange={handleMin}
                    className="absolute w-full cursor-grab pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-yellow-700"
                />

                {/* max slider */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value.max}
                    onChange={handleMax}
                    className="absolute w-full cursor-grab pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-yellow-700"
                />

            </div>


            {/* values */}
            <div className="flex justify-between text-black mb-2">
                <span className="text-gray-400 text-sm">{value.min}</span>
                <span className="text-gray-400 text-sm" >{value.max}</span>
            </div>

        </div>
    );
}