import React, { useState, useEffect, useRef } from "react";

const ChangingProgressProvider = ({ values, interval = 1000, children }) => {
    const [valuesIndex, setValuesIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setValuesIndex((prevIndex) => (prevIndex + 1) % values.length);
        }, interval);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [interval, values]);

    return children(values[valuesIndex]);
};

export default ChangingProgressProvider;
