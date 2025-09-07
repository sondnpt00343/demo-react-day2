import { BrowserRouter as Router, Routes, Route } from "react-router";

// Pages
import Home from "../../pages/Home";
import News from "../../pages/News";
import Contact from "../../pages/Contact";
import Dashboard from "../../pages/Dashboard";
import NewsTrashed from "../../pages/NewsTrashed";
import UseState from "../../pages/UseState";

// Layouts
import DefaultLayout from "../../layouts/DefaultLayout";
import SidebarLayout from "../../layouts/SidebarLayout";
import AdminLayout from "../../layouts/AdminLayout";
import PostDetail from "../../pages/PostDetail";

// Components
import ScrollToTop from "../../components/ScrollToTop";

function AppRoutes() {
    return (
        <Router>
            <ScrollToTop />

            <Routes>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                </Route>

                {/* Default layout pages */}
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="news" element={<News />} />
                    <Route path="news/:id" element={<PostDetail />} />
                    <Route path="contact" element={<Contact />} />
                </Route>

                {/* Sidebar layout pages */}
                <Route element={<SidebarLayout />}>
                    <Route path="news/trashed" element={<NewsTrashed />} />
                </Route>

                {/* No layout */}
                <Route path="use-state" element={<UseState />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
