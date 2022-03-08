import React from 'react'
import styled from 'styled-components'

function Rating({star, percent}) {

    const Bar = styled.div`
    width: ${percent}
   `;

    return (
        <div className="flex flex-row justify-between items-center">
            <p>{star} Star</p> 
            <div className="w-[60%] bg-[#C4C4C4] h-1 rounded-full relative"> 
                <Bar className="absolute top-0 bottom-0 left-0 rounded-full" style={{backgroundColor: 'bg-primary'}} />
            </div> 
            <p>{percent}</p>
        </div>   
    )
}

export default Rating
