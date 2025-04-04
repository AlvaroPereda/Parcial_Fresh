import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CityComponent from "../../components/CityComponent.tsx";
import { getCapital, getCity, getWeather } from "../../utils/NinjaAPI.ts";
import { CityComplete } from "../../utils/types.ts";

export const handler:Handlers = {
    GET: async(_req:Request, ctx:FreshContext<unknown, CityComplete>) => {
        const {city} = ctx.params
        const resultCity = await getCity(city) 
        const resultWeather = await getWeather(resultCity.latitude, resultCity.longitude)
        const country = await getCapital(resultCity.country)
        return ctx.render({
            ...resultCity,
            temp: resultWeather.temp,
            country: country.name            
        })
    }
}

export default (props:PageProps<CityComplete>) => {
    return <CityComponent data={props.data}/>
}