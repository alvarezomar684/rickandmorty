import React from 'react'

export const ResidentInfo02 = ({urlCharacter02,residentName02,residentImg02,residetStatus02,residentOrigin02,residentEpisodes02}) => {
    if(urlCharacter02){
        return (
            <div style={{border: '2px solid white', backgroundColor: "#153e11"}}>
                <h6>Name: {residentName02}</h6>
                <img src={residentImg02} alt={residentName02} />
                <h6>Status: {residetStatus02}</h6>
                <h6>Origin: {residentOrigin02}</h6> 
                <h6>On Scenes: {residentEpisodes02}</h6>
            </div>
        )
    }
    
}
