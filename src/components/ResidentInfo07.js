import React from 'react'

export const ResidentInfo07 = ({urlCharacter07,residentName07,residentImg07,residetStatus07,residentOrigin07,residentEpisodes07}) => {
    if(urlCharacter07){
        return (
            <div style={{border: '2px solid white', backgroundColor: "#153e11"}}>
                <h6>Name: {residentName07}</h6>
                <img src={residentImg07} alt={residentName07} />
                <h6>Status: {residetStatus07}</h6>
                <h6>Origin: {residentOrigin07}</h6> 
                <h6>On Scenes: {residentEpisodes07}</h6>
            </div>
        )
    }
    
}
