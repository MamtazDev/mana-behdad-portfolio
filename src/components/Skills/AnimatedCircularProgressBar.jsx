import React, { useState, useEffect } from 'react';

const AnimatedCircularProgressBar = ({ progress, startColor, endColor }) => {
    const [value, setValue] = useState(0);
    const gradientId = `gradient-${startColor.replace('#', '')}-${endColor.replace('#', '')}`;
    useEffect(() => {

        setValue(0);

        const interval = setInterval(() => {
            setValue((oldValue) => {
                const newValue = oldValue + 1;
                if (newValue >= progress) {
                    clearInterval(interval);
                }
                return newValue;
            });
        }, 20);

        return () => clearInterval(interval);
    }, [progress]);

    const circumference = 2 * Math.PI * 15.9155;
    const offset = ((100 - value) / 100) * circumference;

    return (
        <div className="progress-bar">
            <svg className="progress" viewBox="0 0 36 36">
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={startColor} />
                        <stop offset="100%" stopColor={endColor} />
                    </linearGradient>
                </defs>
                <path
                    className="circle-bg"
                    d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                    className="circle"
                    stroke={`url(#${gradientId})`}
                    style={{ strokeDashoffset: offset }}
                    strokeDasharray={`${circumference} ${circumference}`}
                    d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
            <div className="progress-value">{`${value}%`}</div>
        </div>
    );
};

export default AnimatedCircularProgressBar;
