import React from 'react'

export const ResidentInfo10 = ({urlCharacter10,residentName10,residentImg10,residetStatus10,residentOrigin10,residentEpisodes10}) => {
    if(urlCharacter10){
        return (
            <div style={{border: '2px solid white'}}>
                <h6>Name: {residentName10}</h6>
                <img src={residentImg10} alt={residentName10} />
                <h6>Status: {residetStatus10}</h6>
                <h6>Origin: {residentOrigin10}</h6> 
                <h6>On Scenes: {residentEpisodes10}</h6>
            </div>
        )
    }
    
}
