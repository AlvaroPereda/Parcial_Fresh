import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CountryComponent from "../../components/CountryComponent.tsx";
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
    return <CountryComponent data={props.data}/>
}