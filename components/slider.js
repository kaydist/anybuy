import React, {useState, useEffect} from "react";
import ReactSlider from "react-slider";
import SliderStyle from "../styles/slider.module.css"

const ResizableSlider = ({thumb, onclick, onchange}) => {
    const [onthumb, setonThumb] = useState(thumb)

    

    return (
        <div onClick={onclick} onChange={onchange} onChangeCapture={onclick}>
        
            <ReactSlider
                className="horizontal-slider w-[18rem] top-100"
                thumbClassName={SliderStyle.thumb}
                trackClassName={SliderStyle.track}
                defaultValue={[50000, 100000]}
                ariaLabelledby={['Lower-thumb', 'Upper-thumb']}
                ariaValuetext={state => {               
                }}
                onChange={state => {
                        setonThumb({
                            lower: state[0],
                            upper: state[1]
                        })       
                        // console.log(onthumb)       
                }}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                pearling
                min={50000}
                max={100000}
                minDistance={500}
            />

            <div>
                
            </div>

        </div>
    );
};

export default ResizableSlider
