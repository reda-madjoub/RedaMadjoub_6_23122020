// URL SOURCE OF DATA (API)
export const DATA = async () => {
    const URL = 'src/data.json'
    let getData = await fetch(URL)
    let data = await getData.json()
    let response = await data
    return response
}
