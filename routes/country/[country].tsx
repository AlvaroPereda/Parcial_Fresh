import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getCapital } from "../../utils/NinjaAPI.ts";
import { CountryAPI } from "../../utils/types.ts";

export const handler:Handlers = {
    GET: async(_req:Request, ctx:FreshContext<unknown, CountryAPI>) => {
        const {country} = ctx.params
        const result:CountryAPI = await getCapital(country)
        return ctx.render(result)
    }
}

export default (props:PageProps<CountryAPI>) => {
    const {name, capital} = props.data
    console.log(capital)
    return (
        <div>
            <h3>{name}</h3>
            <h4>Capital: <a href={`/city/${capital}`}>{capital}</a></h4>
        </div>
    )
}