import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import HomeComponent from "./HomeComponent";

export default function PageComponent(){
    return (
        <div>
            <NavbarComponent/>
            <HomeComponent/>
            <FooterComponent/>
        </div>
    )
}