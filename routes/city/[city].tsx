import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getCapital, getCity, getWeather } from "../../utils/NinjaAPI.ts";
import { CityComplete } from "../../utils/types.ts";

export const handler:Handlers = {
    GET: async(_req:Request, ctx:FreshContext<unknown, CityComplete>) => {
        const {city} = ctx.params
        const resultCity = await getCity(city) 
        const resultWeather = await getWeather(resultCity.latitude, resultCity.longitude)
        console.log(resultCity.country)
        const country = await getCapital(resultCity.country)
        return ctx.render({
            ...resultCity,
            temp: resultWeather.temp,
            country: country.name            
        })
    }
}

export default (props:PageProps<CityComplete>) => {
    const { name, country, temp} = props.data
    return (
        <div>
            <h2>{name}</h2>
            <h3>País: <a href={`/country/${country}`}>{country}</a></h3>
            <h4>Temperatura: {temp}</h4>
        </div>
    )
}