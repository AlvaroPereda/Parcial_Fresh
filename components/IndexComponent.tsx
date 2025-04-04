import { FunctionalComponent } from "preact/src/index.d.ts";
import { PhoneAPI } from "../utils/types.ts";
import FormComponent from "./FormComponent.tsx";

type Data = {
    data: PhoneAPI 
}

const IndexComponent:FunctionalComponent<Data> = (props) => {
    if(!props.data) return (<div><FormComponent/></div>)
    const { format_e164, country , is_valid} = props.data
    return (
        <div>
        <FormComponent/>
        {!is_valid ? <h2>Número de teléfóno incorrecto</h2> : 
        <div>
            <p>Teléfono: {format_e164}</p>
            <p>País: <a href={`/country/${country}`}>{country}</a></p>
        </div>
        }
        </div>
    )
}

export default IndexComponent