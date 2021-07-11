import React from 'react'

export const ResidentInfo10 = ({residentName10,residentImg10,residetStatus10,residentOrigin10,residentEpisodes10}) => {
    return (
        <div>
            <h6>{residentName10}</h6>
            <img src={residentImg10} alt={residentName10} />
            <h6>{residetStatus10}</h6>
            <h6>{residentOrigin10}</h6> 
            <h6>{residentEpisodes10}</h6>
        </div>
    )
}
