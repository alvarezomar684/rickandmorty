import React from 'react'

export const ResidentInfo03 = ({residentName03,residentImg03,residetStatus03,residentOrigin03,residentEpisodes03}) => {
    return (
        <div>
            <h6>{residentName03}</h6>
            <img src={residentImg03} alt={residentName03} />
            <h6>{residetStatus03}</h6>
            <h6>{residentOrigin03}</h6> 
            <h6>{residentEpisodes03}</h6>
        </div>
    )
}
