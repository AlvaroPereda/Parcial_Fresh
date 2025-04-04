import { FunctionalComponent } from "preact/src/index.d.ts";

const Header:FunctionalComponent = () => {
    return (
        <header>
            <h1>Información países</h1>
            <button type="submit"><a href="/">Casa</a></button>
        </header>
    )
}

export default Header