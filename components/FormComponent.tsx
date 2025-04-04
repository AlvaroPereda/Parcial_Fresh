import { FunctionalComponent } from "preact/src/index.d.ts";

const FormComponent:FunctionalComponent = () => {
    return (
        <form action="/" method="GET">
            <input type="text" name="phone" placeholder="Teléfono" required/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default FormComponent