// https://www.api-ninjas.com/api/validatephone
export type PhoneAPI = {
    is_valid: boolean
    country: string
    format_e164: string
}

// https://www.api-ninjas.com/api/country
export type CountryAPI = {
    name: string
    capital: string
}

// https://www.api-ninjas.com/api/city
export type CityAPI = {
    name: string
    latitude: number
    longitude: number
    country: string
}

// https://www.api-ninjas.com/api/weather

export type WeatherAPI = {
    temp: number
}

export type CityComplete = {
    name: string
    country: string
    temp: number
}