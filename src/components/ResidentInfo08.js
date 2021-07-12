import React from 'react'

export const ResidentInfo08 = ({urlCharacter08,residentName08,residentImg08,residetStatus08,residentOrigin08,residentEpisodes08}) => {
    if(urlCharacter08){
        return (
            <div style={{border: '2px solid white', backgroundColor: "#153e11"}}>
                <h6>Name: {residentName08}</h6>
                <img src={residentImg08} alt={residentName08} />
                <h6>Status: {residetStatus08}</h6>
                <h6>Origin: {residentOrigin08}</h6> 
                <h6>On Scenes: {residentEpisodes08}</h6>
            </div>
        )
    }
    
}
