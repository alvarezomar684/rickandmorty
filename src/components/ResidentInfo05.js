import React from 'react'

export const ResidentInfo05 = ({residentName05,residentImg05,residetStatus05,residentOrigin05,residentEpisodes05}) => {
    return (
        <div>
            <h6>{residentName05}</h6>
            <img src={residentImg05} alt={residentName05} />
            <h6>{residetStatus05}</h6>
            <h6>{residentOrigin05}</h6> 
            <h6>{residentEpisodes05}</h6>
        </div>
    )
}
