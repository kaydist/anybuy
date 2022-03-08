import react, {useRef, useEffect} from "react";
import ReactSlider from "react-slider";
import SliderStyle from "../styles/slider.module.css"

const ResizableSlider = () => {
    return (
        <>
        
            <ReactSlider
                className="horizontal-slider w-[18rem] top-100"
                thumbClassName={SliderStyle.thumb}
                trackClassName={SliderStyle.track}
                defaultValue={[1000, 100000]}
                ariaLabelledby={['Lower-thumb', 'Upper-thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                pearling
                min={1000}
                max={100000}
                minDistance={10}
            />

            <div></div>

        </>
    );
};

export default ResizableSlider
