import React from 'react'

export const ResidentInfo04 = ({residentName04,residentImg04,residetStatus04,residentOrigin04,residentEpisodes04}) => {
    return (
        <div>
            <h6>{residentName04}</h6>
            <img src={residentImg04} alt={residentName04} />
            <h6>{residetStatus04}</h6>
            <h6>{residentOrigin04}</h6> 
            <h6>{residentEpisodes04}</h6>
        </div>
    )
}
