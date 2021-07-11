import React from 'react'

export const ResidentInfo07 = ({residentName07,residentImg07,residetStatus07,residentOrigin07,residentEpisodes07}) => {
    return (
        <div>
            <h6>{residentName07}</h6>
            <img src={residentImg07} alt={residentName07} />
            <h6>{residetStatus07}</h6>
            <h6>{residentOrigin07}</h6> 
            <h6>{residentEpisodes07}</h6>
        </div>
    )
}
