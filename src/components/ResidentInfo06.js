import React from 'react'

export const ResidentInfo06 = ({residentName06,residentImg06,residetStatus06,residentOrigin06,residentEpisodes06}) => {
    return (
        <div>
            <h6>{residentName06}</h6>
            <img src={residentImg06} alt={residentName06} />
            <h6>{residetStatus06}</h6>
            <h6>{residentOrigin06}</h6> 
            <h6>{residentEpisodes06}</h6>
        </div>
    )
}
