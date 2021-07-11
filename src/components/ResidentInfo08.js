import React from 'react'

export const ResidentInfo08 = ({residentName08,residentImg08,residetStatus08,residentOrigin08,residentEpisodes08}) => {
    return (
        <div>
            <h6>{residentName08}</h6>
            <img src={residentImg08} alt={residentName08} />
            <h6>{residetStatus08}</h6>
            <h6>{residentOrigin08}</h6> 
            <h6>{residentEpisodes08}</h6>
        </div>
    )
}
