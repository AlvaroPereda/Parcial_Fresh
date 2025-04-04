import { FunctionalComponent } from "preact/src/index.d.ts";
import { CityComplete } from "../utils/types.ts";

type Data = {
    data: CityComplete
}

const CityComponent:FunctionalComponent<Data> = (props) => {
    const { name, country, temp} = props.data
    return (
        <div>
            <h2>{name}</h2>
            <h3>País: <a href={`/country/${country}`}>{country}</a></h3>
            <h4>Temperatura: {temp}</h4>
        </div>
    )
}

export default CityComponent