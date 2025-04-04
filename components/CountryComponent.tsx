import { FunctionalComponent } from "preact/src/index.d.ts";
import { CountryAPI } from "../utils/types.ts";

type Data = {
    data: CountryAPI
}

const CountryComponent:FunctionalComponent<Data> = (props) => {
    const {name, capital} = props.data
    return (
        <div>
            <h3>{name}</h3>
            <h4>Capital: <a href={`/city/${capital}`}>{capital}</a></h4>
        </div>
    )
}

export default CountryComponent