import { CityAPI, CountryAPI, PhoneAPI, WeatherAPI } from "./types.ts";

export const validatePhone = async(phone: string):Promise<PhoneAPI> => {
    const API_KEY = Deno.env.get("API_KEY")
    if(!API_KEY) throw new Error("Error con la API_KEY")
    
    const url = `https://api.api-ninjas.com/v1/validatephone?number=${phone}`
    const data = await fetch(url, {
        headers: {
            'X-Api-Key': API_KEY
          },
    })
    const result:PhoneAPI = await data.json()
    return result
}

export const getCapital = async(country: string):Promise<CountryAPI> => {
    const API_KEY = Deno.env.get("API_KEY")
    if(!API_KEY) throw new Error("Error con la API_KEY")
    
    const url = `https://api.api-ninjas.com/v1/country?name=${country}`
    const data = await fetch(url, {
        headers: {
            'X-Api-Key': API_KEY
          },
    })
    const result:CountryAPI[] = await data.json()
    return result[0]
}

export const getCity = async(city: string):Promise<CityAPI> => {
    const API_KEY = Deno.env.get("API_KEY")
    if(!API_KEY) throw new Error("Error con la API_KEY")
    
    const url = `https://api.api-ninjas.com/v1/city?name=${city}`
    const data = await fetch(url, {
        headers: {
            'X-Api-Key': API_KEY
          },
    })
    const result:CityAPI[] = await data.json()
    return result[0]
}

export const getWeather = async(lat: number, lon: number):Promise<WeatherAPI> => {
    const API_KEY = Deno.env.get("API_KEY")
    if(!API_KEY) throw new Error("Error con la API_KEY")
    
    const url = `https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${lon}`
    const data = await fetch(url, {
        headers: {
            'X-Api-Key': API_KEY
          },
    })
    const result:WeatherAPI = await data.json()
    return result
}