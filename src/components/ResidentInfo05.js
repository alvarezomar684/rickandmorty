import React from 'react'

export const ResidentInfo05 = ({urlCharacter05,residentName05,residentImg05,residetStatus05,residentOrigin05,residentEpisodes05}) => {
    if(urlCharacter05){
        return (
            <div style={{border: '2px solid white'}}>
                <h6>Name: {residentName05}</h6>
                <img src={residentImg05} alt={residentName05} />
                <h6>Status: {residetStatus05}</h6>
                <h6>Origin: {residentOrigin05}</h6> 
                <h6>On Scenes: {residentEpisodes05}</h6>
            </div>
        )
    }
    
}
