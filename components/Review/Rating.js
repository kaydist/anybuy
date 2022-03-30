import React from 'react'
import styled from 'styled-components'

function Rating({star, percent}) {

    const Bar = styled.div`
    width: ${props => props.width};
   `;

    return (
        <div className="flex flex-row justify-between items-center">
            <p>{star} Star</p> 
            <div className="w-[60%] bg-[#C4C4C4] h-1 rounded-full relative"> 
                <Bar className="absolute top-0 bottom-0 left-0 rounded-full bg-primary" width={percent} />
            </div> 
            <p>{percent}</p>
        </div>   
    )
}

export default Rating
