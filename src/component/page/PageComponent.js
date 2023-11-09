import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import {Outlet} from "react-router-dom";
import LoaderComponent from "./LoaderComponent";

export default function PageComponent(){
    return (
        <div>
            <NavbarComponent/>
            <Outlet></Outlet>
            <FooterComponent/>
        </div>
    )
}