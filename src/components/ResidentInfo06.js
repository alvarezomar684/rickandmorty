import React from 'react'

export const ResidentInfo06 = ({urlCharacter06,residentName06,residentImg06,residetStatus06,residentOrigin06,residentEpisodes06}) => {
    if(urlCharacter06){
        return (
            <div style={{border: '2px solid white' , backgroundColor: "#153e11"}}>
                <h6>Name: {residentName06}</h6>
                <img src={residentImg06} alt={residentName06} />
                <h6>Status: {residetStatus06}</h6>
                <h6>Origin: {residentOrigin06}</h6> 
                <h6>On Scenes: {residentEpisodes06}</h6>
            </div>
        )
    }
    
}
