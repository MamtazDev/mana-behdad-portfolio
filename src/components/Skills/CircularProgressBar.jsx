import React, { useEffect, useState } from "react";

const CircularProgressBar = ({ percentage, sqSize, strokeWidth }) => {

  const [getPercentage, setGetPercentage] = useState(percentage);
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * getPercentage) / 100;

  const gradientId = `progressGradient-${getPercentage}`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setGetPercentage(i);
      i++;
      if (i > percentage) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      {/* Background Circle with transparent fill */}
      <circle
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        fill="transparent"
      />
      {/* Progress Circle */}
      <circle
        className="circle-progress"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
          stroke: `url(#${gradientId})`,
          color: 'white',
        }}
      />
      {/* Progress Text */}
      <p
        className="circle-text text-white"
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        style={{ color: 'white' }}
      >
        {`${getPercentage}%`}
      </p>
      {/* Gradient Definition */}
      <defs>
        <linearGradient id={gradientId}>
          <stop offset="0%" stopColor="#AB5171" />
          <stop offset="1" stopColor="#FC387E" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CircularProgressBar;
