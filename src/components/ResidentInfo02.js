import React from 'react'

export const ResidentInfo02 = ({residentName02,residentImg02,residetStatus02,residentOrigin02,residentEpisodes02}) => {
    return (
        <div>
            <h6>{residentName02}</h6>
            <img src={residentImg02} alt={residentName02} />
            <h6>{residetStatus02}</h6>
            <h6>{residentOrigin02}</h6> 
            <h6>{residentEpisodes02}</h6>
        </div>
    )
}
