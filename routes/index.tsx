import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import FormComponent from "../components/FormComponent.tsx";
import { validatePhone } from "../utils/NinjaAPI.ts";
import { PhoneAPI } from "../utils/types.ts";


export const handler:Handlers = {
  GET:async(req:Request, ctx:FreshContext<unknown, PhoneAPI>) => {
    const url = new URL(req.url)
    const phone = url.searchParams.get("phone")
    if(!phone) return ctx.render()
    const result:PhoneAPI = await validatePhone(phone)
    return ctx.render(result)
  }
}

export default function Home(props:PageProps<PhoneAPI>) {
  if(!props.data) return (<div><FormComponent/></div>)
  const { format_e164, country} = props.data
  return (
    <div>
      <FormComponent/>
      {!props.data.is_valid ? <h2>Número de teléfóno incorrecto</h2> : 
      <div>
        <p>Teléfono: {format_e164}</p>
        <p>País: <a href={`/country/${country}`}>{country}</a></p>
      </div>
      }
    </div>
  )
}
