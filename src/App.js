import './App.css';
import { LocationContainer } from './components/LocationContainer';
import { useEffect, useState } from "react";
import { Searchbox } from './components/Searchbox';
import { LocationInfo } from './components/LocationInfo';
import { ResidentInfo01 } from './components/ResidentInfo01';
import { ResidentInfo02 } from './components/ResidentInfo02';
import { ResidentInfo03 } from './components/ResidentInfo03';
import { ResidentInfo04 } from './components/ResidentInfo04';
import { ResidentInfo05 } from './components/ResidentInfo05';
import { ResidentInfo06 } from './components/ResidentInfo06';
import { ResidentInfo07 } from './components/ResidentInfo07';
import { ResidentInfo08 } from './components/ResidentInfo08';
import { ResidentInfo09 } from './components/ResidentInfo09';
import { ResidentInfo10 } from './components/ResidentInfo10';
// import Prueba from './components/Prueba';



function App() {


  const [infoPlanet, setinfoPlanet] = useState(null)
  const [queryTerm, setQueryTerm] = useState('')
  const [characters,setCharacters] = useState([]) 
  


  useEffect(() => {
    if (queryTerm) {

      const func = async () => {
        const res = await LocationContainer(queryTerm)      
        setinfoPlanet(res)
      }

      func()


    }
  }, [queryTerm])

  useEffect(()=> {
    if(infoPlanet){
      setCharacters(infoPlanet.residents)
      if(characters.length > 9){
        characters.splice(10,characters.length)
      }
      
    }
  },[infoPlanet,characters])
  

  const handleSearch = (query) => {
    setQueryTerm(query)
  }


 
 

  const urlCharacter01 = characters[0]
  const urlCharacter02 = characters[1]
  const urlCharacter03 = characters[2]
  const urlCharacter04 = characters[3]
  const urlCharacter05 = characters[4]
  const urlCharacter06 = characters[5]
  const urlCharacter07 = characters[6]
  const urlCharacter08 = characters[7]
  const urlCharacter09 = characters[8]
  const urlCharacter10 = characters[9]  

  
 

  

  const [residentName01, setResidentName01] = useState("")
  const [residentImg01, setResidentImg01] = useState("")
  const [residetStatus01, setResidentStatus01] = useState("")
  const [residentOrigin01, setResidentOrigin01] = useState("")
  const [residentEpisodes01, setResidentEpisodes01] = useState("")

  const [residentName02, setResidentName02] = useState("")
  const [residentImg02, setResidentImg02] = useState("")
  const [residetStatus02, setResidentStatus02] = useState("")
  const [residentOrigin02, setResidentOrigin02] = useState("")
  const [residentEpisodes02, setResidentEpisodes02] = useState("")

  const [residentName03, setResidentName03] = useState("")
  const [residentImg03, setResidentImg03] = useState("")
  const [residetStatus03, setResidentStatus03] = useState("")
  const [residentOrigin03, setResidentOrigin03] = useState("")
  const [residentEpisodes03, setResidentEpisodes03] = useState("")

  const [residentName04, setResidentName04] = useState("")
  const [residentImg04, setResidentImg04] = useState("")
  const [residetStatus04, setResidentStatus04] = useState("")
  const [residentOrigin04, setResidentOrigin04] = useState("")
  const [residentEpisodes04, setResidentEpisodes04] = useState("")

  const [residentName05, setResidentName05] = useState("")
  const [residentImg05, setResidentImg05] = useState("")
  const [residetStatus05, setResidentStatus05] = useState("")
  const [residentOrigin05, setResidentOrigin05] = useState("")
  const [residentEpisodes05, setResidentEpisodes05] = useState("")

  const [residentName06, setResidentName06] = useState("")
  const [residentImg06, setResidentImg06] = useState("")
  const [residetStatus06, setResidentStatus06] = useState("")
  const [residentOrigin06, setResidentOrigin06] = useState("")
  const [residentEpisodes06, setResidentEpisodes06] = useState("")

  const [residentName07, setResidentName07] = useState("")
  const [residentImg07, setResidentImg07] = useState("")
  const [residetStatus07, setResidentStatus07] = useState("")
  const [residentOrigin07, setResidentOrigin07] = useState("")
  const [residentEpisodes07, setResidentEpisodes07] = useState("")

  const [residentName08, setResidentName08] = useState("")
  const [residentImg08, setResidentImg08] = useState("")
  const [residetStatus08, setResidentStatus08] = useState("")
  const [residentOrigin08, setResidentOrigin08] = useState("")
  const [residentEpisodes08, setResidentEpisodes08] = useState("")

  const [residentName09, setResidentName09] = useState("")
  const [residentImg09, setResidentImg09] = useState("")
  const [residetStatus09, setResidentStatus09] = useState("")
  const [residentOrigin09, setResidentOrigin09] = useState("")
  const [residentEpisodes09, setResidentEpisodes09] = useState("")

  const [residentName10, setResidentName10] = useState("")
  const [residentImg10, setResidentImg10] = useState("")
  const [residetStatus10, setResidentStatus10] = useState("")
  const [residentOrigin10, setResidentOrigin10] = useState("")
  const [residentEpisodes10, setResidentEpisodes10] = useState("")

  useEffect (()=>{
    if(urlCharacter01){
      ;(async()=>{        
        let url = urlCharacter01
        const response = await fetch(url).then(res => res.json())        
        setResidentName01(response.name)
        setResidentImg01(response.image)
        setResidentStatus01(response.status)
        setResidentOrigin01(response.origin.name)
        setResidentEpisodes01(response.episode.length)
        
      })()
      
    }
  },[urlCharacter01])

  useEffect (()=>{
    if(urlCharacter02){
      ;(async()=>{        
        let url = urlCharacter02
        const response = await fetch(url).then(res => res.json())        
        setResidentName02(response.name)
        setResidentImg02(response.image)
        setResidentStatus02(response.status)
        setResidentOrigin02(response.origin.name)
        setResidentEpisodes02(response.episode.length)
        
      })()
      
    }
  },[urlCharacter02])

  useEffect (()=>{
    if(urlCharacter03){
      ;(async()=>{        
        let url = urlCharacter03
        const response = await fetch(url).then(res => res.json())        
        setResidentName03(response.name)
        setResidentImg03(response.image)
        setResidentStatus03(response.status)
        setResidentOrigin03(response.origin.name)
        setResidentEpisodes03(response.episode.length)
        
      })()
      
    }
  },[urlCharacter03])

  useEffect (()=>{
    if(urlCharacter04){
      ;(async()=>{        
        let url = urlCharacter04
        const response = await fetch(url).then(res => res.json())       
        setResidentName04(response.name)
        setResidentImg04(response.image)
        setResidentStatus04(response.status)
        setResidentOrigin04(response.origin.name)
        setResidentEpisodes04(response.episode.length)
        
      })()
      
    }
  },[urlCharacter04])

  useEffect (()=>{
    if(urlCharacter05){
      ;(async()=>{        
        let url = urlCharacter05
        const response = await fetch(url).then(res => res.json())        
        setResidentName05(response.name)
        setResidentImg05(response.image)
        setResidentStatus05(response.status)
        setResidentOrigin05(response.origin.name)
        setResidentEpisodes05(response.episode.length)
        
      })()
      
    }
  },[urlCharacter05])

  useEffect (()=>{
    if(urlCharacter06){
      ;(async()=>{        
        let url = urlCharacter06
        const response = await fetch(url).then(res => res.json())        
        setResidentName06(response.name)
        setResidentImg06(response.image)
        setResidentStatus06(response.status)
        setResidentOrigin06(response.origin.name)
        setResidentEpisodes06(response.episode.length)
        
      })()
      
    }
  },[urlCharacter06])

  useEffect (()=>{
    if(urlCharacter07){
      ;(async()=>{        
        let url = urlCharacter07
        const response = await fetch(url).then(res => res.json())        
        setResidentName07(response.name)
        setResidentImg07(response.image)
        setResidentStatus07(response.status)
        setResidentOrigin07(response.origin.name)
        setResidentEpisodes07(response.episode.length)
        
      })()
      
    }
  },[urlCharacter07])

  useEffect (()=>{
    if(urlCharacter08){
      ;(async()=>{        
        let url = urlCharacter08
        const response = await fetch(url).then(res => res.json())        
        setResidentName08(response.name)
        setResidentImg08(response.image)
        setResidentStatus08(response.status)
        setResidentOrigin08(response.origin.name)
        setResidentEpisodes08(response.episode.length)
        
      })()
      
    }
  },[urlCharacter08])

  useEffect (()=>{
    if(urlCharacter09){
      ;(async()=>{        
        let url = urlCharacter09
        const response = await fetch(url).then(res => res.json())        
        setResidentName09(response.name)
        setResidentImg09(response.image)
        setResidentStatus09(response.status)
        setResidentOrigin09(response.origin.name)
        setResidentEpisodes09(response.episode.length)
        
      })()
      
    }
  },[urlCharacter09])

  useEffect (()=>{
    if(urlCharacter10){
      ;(async()=>{        
        let url = urlCharacter10
        const response = await fetch(url).then(res => res.json())        
        setResidentName10(response.name)
        setResidentImg10(response.image)
        setResidentStatus10(response.status)
        setResidentOrigin10(response.origin.name)
        setResidentEpisodes10(response.episode.length)
        
      })()
      
    }
  },[urlCharacter10])


  // const styles1 = {
  //   backgroundColor: "green",
  //   color: "white"
  // }

  
  // const styles = {
  //   border: '1px solid red',
  //   color: "blue"
    
  // }

  // const [changeStyle, setChangeStyle] = useState(styles1)

 

  // useEffect(()=>{
  //   if(infoPlanet != null){
  //     setChangeStyle(styles)
  //   } 
  // },[infoPlanet])
  

  return (
    <div className="App">
      <header >
      {/* <div className="search">
          <div>
            <Searchbox onSearch={handleSearch} /> 
          </div>
          <div>
            {infoPlanet && <LocationInfo infoPlanet={infoPlanet} nameLocation={infoPlanet.name} type={infoPlanet.type} dimension={infoPlanet.dimension}  />}
          </div>  
        </div>  */}
        <div className="search">          
          <Searchbox onSearch={handleSearch}  />          
          {infoPlanet && <LocationInfo infoPlanet={infoPlanet} nameLocation={infoPlanet.name} type={infoPlanet.type} dimension={infoPlanet.dimension}  />}          
        </div>              
        <div className="info-characters" >
          {urlCharacter01 && <ResidentInfo01 residentName01={residentName01}  residentImg01={residentImg01}  residetStatus01={residetStatus01}  residentOrigin01={residentOrigin01}  residentEpisodes01={residentEpisodes01} />}
          {urlCharacter02 && <ResidentInfo02 residentName02={residentName02}  residentImg02={residentImg02}  residetStatus02={residetStatus02}  residentOrigin02={residentOrigin02}  residentEpisodes02={residentEpisodes02} />}
          {urlCharacter03 && <ResidentInfo03 residentName03={residentName03}  residentImg03={residentImg03}  residetStatus03={residetStatus03}  residentOrigin03={residentOrigin03}  residentEpisodes03={residentEpisodes03} />}
          {urlCharacter04 && <ResidentInfo04 residentName04={residentName04}  residentImg04={residentImg04}  residetStatus04={residetStatus04}  residentOrigin04={residentOrigin04}  residentEpisodes04={residentEpisodes04} />}
          {urlCharacter05 && <ResidentInfo05 residentName05={residentName05}  residentImg05={residentImg05}  residetStatus05={residetStatus05}  residentOrigin05={residentOrigin05}  residentEpisodes05={residentEpisodes05} />}
          {urlCharacter06 && <ResidentInfo06 residentName06={residentName06}  residentImg06={residentImg06}  residetStatus06={residetStatus06}  residentOrigin06={residentOrigin06}  residentEpisodes06={residentEpisodes06} />}
          {urlCharacter07 && <ResidentInfo07 residentName07={residentName07}  residentImg07={residentImg07}  residetStatus07={residetStatus07}  residentOrigin07={residentOrigin07}  residentEpisodes07={residentEpisodes07} />}
          {urlCharacter08 && <ResidentInfo08 residentName08={residentName08}  residentImg08={residentImg08}  residetStatus08={residetStatus08}  residentOrigin08={residentOrigin08}  residentEpisodes08={residentEpisodes08} />}
          {urlCharacter09 && <ResidentInfo09 residentName09={residentName09}  residentImg09={residentImg09}  residetStatus09={residetStatus09}  residentOrigin09={residentOrigin09}  residentEpisodes09={residentEpisodes09} />}
          {urlCharacter10 && <ResidentInfo10 residentName10={residentName10}  residentImg10={residentImg10}  residetStatus10={residetStatus10}  residentOrigin10={residentOrigin10}  residentEpisodes10={residentEpisodes10} />}
        </div>
        
        
        {/* {list} */}
        
      </header>
    </div>
  );
}

export default App;


 //Son los links ya en lista de los personajes
  // let personajes = [] 
    
  //   characters.forEach((e,i) => {
  //     personajes.push({url:characters[i]})
      
  //   });   

  // const list = personajes.map(e => <Prueba key={e.url} url={e.url} />)  

  




