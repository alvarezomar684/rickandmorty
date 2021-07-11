import React from 'react'

export const ResidentInfo09 = ({residentName09,residentImg09,residetStatus09,residentOrigin09,residentEpisodes09}) => {
    return (
        <div>
            <h6>{residentName09}</h6>
            <img src={residentImg09} alt={residentName09} />
            <h6>{residetStatus09}</h6>
            <h6>{residentOrigin09}</h6> 
            <h6>{residentEpisodes09}</h6>
        </div>
    )
}
