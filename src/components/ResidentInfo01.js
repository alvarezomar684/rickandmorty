import React from 'react'

export const ResidentInfo01 = ({urlCharacter01,residentName01,residentImg01,residetStatus01,residentOrigin01,residentEpisodes01}) => {
    if(urlCharacter01){
        return (        
            <div style={{border: '2px solid white', backgroundColor: "#153e11"}}>
                <h6>Name: {residentName01}</h6>
                <img src={residentImg01} alt={residentName01} />
                <h6>Status: {residetStatus01}</h6>
                <h6>Origin: {residentOrigin01}</h6> 
                <h6>On Scenes: {residentEpisodes01}</h6>
            </div>
        )
    }  
}
