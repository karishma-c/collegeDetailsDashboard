import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import './Slider.css';

const Slider= () => {
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    
    return(
        <div>
            <div className="range">
                <MultiRangeSlider
                    min={1}
                    max={100}
                    step={5}
                    minValue={minValue}
                    maxValue={maxValue}
                    barInnerColor= "#333333"
                    onInput={(e) => {
                        handleInput(e);
                    }}
                />
            </div>
        </div>
    );
}
export default Slider;