import React from 'react'

export const ResidentInfo03 = ({urlCharacter03,residentName03,residentImg03,residetStatus03,residentOrigin03,residentEpisodes03}) => {
    if(urlCharacter03){
        return (
            <div style={{border: '2px solid white'}}>
                <h6>Name: {residentName03}</h6>
                <img src={residentImg03} alt={residentName03} />
                <h6>Status: {residetStatus03}</h6>
                <h6>Origin: {residentOrigin03}</h6> 
                <h6>On Scenes: {residentEpisodes03}</h6>
            </div>
        )
    }
    
}
