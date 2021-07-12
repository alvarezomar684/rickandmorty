import React from 'react'

export const ResidentInfo04 = ({urlCharacter04,residentName04,residentImg04,residetStatus04,residentOrigin04,residentEpisodes04}) => {
    if(urlCharacter04){
        return (
            <div style={{border: '2px solid white' , backgroundColor: "#153e11"}}>
                <h6>Name: {residentName04}</h6>
                <img src={residentImg04} alt={residentName04} />
                <h6>Status: {residetStatus04}</h6>
                <h6>Origin: {residentOrigin04}</h6> 
                <h6>On Scenes: {residentEpisodes04}</h6>
            </div>
        )
    }
    
}
