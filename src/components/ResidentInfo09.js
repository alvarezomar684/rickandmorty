import React from 'react'

export const ResidentInfo09 = ({urlCharacter09,residentName09,residentImg09,residetStatus09,residentOrigin09,residentEpisodes09}) => {
    if(urlCharacter09){
        return (
            <div style={{border: '2px solid white'}}>
                <h6>Name: {residentName09}</h6>
                <img src={residentImg09} alt={residentName09} />
                <h6>Status: {residetStatus09}</h6>
                <h6>Origin: {residentOrigin09}</h6> 
                <h6>On Scenes: {residentEpisodes09}</h6>
            </div>
        )
    }
    
}
