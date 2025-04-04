import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import IndexComponent from "../components/IndexComponent.tsx";
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
  return <IndexComponent data={props.data}/>
}
