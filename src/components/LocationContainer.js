export const LocationContainer = async queryTerm => {
    const url = `https://rickandmortyapi.com/api/location/${queryTerm}`
    const response = await fetch(url).then(res => res.json())    
    return response
}
