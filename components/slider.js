import react, {useState, useEffect} from "react";
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
                defaultValue={[1, 10]}
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
                min={1}
                max={10}
                minDistance={1}
            />

            <div>
                
            </div>

        </div>
    );
};

export default ResizableSlider
