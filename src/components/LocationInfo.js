import {React,useState,useEffect} from 'react'

export const LocationInfo = ({nameLocation,type,dimension,infoPlanet}) => {

    const [people, setPeople] = useState(0)

    useEffect(()=>{
      
      if (infoPlanet) {
        const residentsLength = infoPlanet.residents.length    
        if (residentsLength <= 10) {          
          setPeople(residentsLength)    
        } else {          
          setPeople(10)
        }
    
      }
    },[infoPlanet])
      

    return (
        <div>
            
            <h4>{nameLocation}</h4>
            <h4>{type}</h4>
            <h4>{dimension}</h4>
            <h4>{people}</h4>

            
            



            {/* {nameLocation}
            {type}
            {dimension} */}
            

        </div>
    )
}
