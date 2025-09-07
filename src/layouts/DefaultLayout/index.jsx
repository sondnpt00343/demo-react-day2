import { Outlet } from "react-router";

import Footer from "./components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

function DefaultLayout() {
    return (
        <div>
            <Header />
            <Navigation />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
