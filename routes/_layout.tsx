import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

const layout = ({Component}: PageProps) => {
    return (
        <div>
            <Header/>
            <Component/>
            <Footer/>
        </div>
    )
}

export default layout