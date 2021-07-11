import React from 'react'

export const ResidentInfo01 = ({residentName01,residentImg01,residetStatus01,residentOrigin01,residentEpisodes01}) => {
    return (
        <div>
            <h6>{residentName01}</h6>
            <img src={residentImg01} alt={residentName01} />
            <h6>{residetStatus01}</h6>
            <h6>{residentOrigin01}</h6> 
            <h6>{residentEpisodes01}</h6>
        </div>
    )
}
