import { useState } from "react";

export default function CircularProgress({
    size = 60,
    strokeWidth = 5,
    initialValue = 0,
}) {
    const [progress, setProgress] = useState(initialValue);

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="flex flex-col items-center gap-6">
            {/* Circle */}
            <div className="relative">
                <svg width={size} height={size}>
                    {/* Background */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeWidth={strokeWidth}
                        className="fill-none stroke-gray-200"
                    />

                    {/* Progress */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        className="fill-none stroke-yellow-600/60 transition-all duration-500 ease-out"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    />
                </svg>

                {/* Value */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold pCl">
                        {progress}%
                    </span>
                </div>
            </div>
        </div>
    );
}
