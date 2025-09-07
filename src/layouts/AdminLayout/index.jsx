import { Outlet } from "react-router";

import Footer from "./components/Footer";

function AdminLayout() {
    return (
        <div>
            <h1>Admin</h1>
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default AdminLayout;
