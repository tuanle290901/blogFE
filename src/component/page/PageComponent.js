import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import HomeComponent from "./HomeComponent";
import {Outlet} from "react-router-dom";

export default function PageComponent(){
    return (
        <div>
            <NavbarComponent/>
            <Outlet></Outlet>
            <FooterComponent/>
        </div>
    )
}