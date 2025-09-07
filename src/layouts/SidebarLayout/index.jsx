import { Outlet } from "react-router";

import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import styles from "./SidebarLayout.module.scss";

function SidebarLayout() {
    return (
        <div>
            <Header />
            <Navigation />
            <div className={styles.container}>
                <Sidebar />
                <div className={styles.content}>
                    <Outlet />
                </div>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}

export default SidebarLayout;
