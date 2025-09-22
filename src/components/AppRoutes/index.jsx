import { BrowserRouter as Router, Routes, Route } from "react-router";

// Pages
import Home from "@/pages/Home";
import News from "@/pages/News";
import Contact from "@/pages/Contact";
import Dashboard from "@/pages/Dashboard";
import NewsTrashed from "@/pages/NewsTrashed";
import UseState from "@/pages/UseState";

// Layouts
import DefaultLayout from "@/layouts/DefaultLayout";
import SidebarLayout from "@/layouts/SidebarLayout";
import AdminLayout from "@/layouts/AdminLayout";
import PostDetail from "@/pages/PostDetail";

// Components
import ScrollToTop from "@/components/ScrollToTop";
import Cleanup from "@/pages/Cleanup";
import Cleanup2 from "@/pages/Cleanup2";
import Hooks from "@/pages/Hooks";
import HOC from "@/pages/HOC";
import RenderProps from "@/pages/RenderProps";
import CustomHook from "@/pages/CustomHook";
import Debounce from "@/pages/Debounce";
import TabsDemo from "@/pages/TabsDemo";
import Forms from "@/pages/Forms";
import ContextAPI from "@/pages/ContextAPI";
import Redux from "@/pages/Redux";

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
                    <Route path="news" element={<News />} />
                    <Route path="news/:id" element={<PostDetail />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="cleanup" element={<Cleanup />} />
                </Route>

                {/* Sidebar layout pages */}
                <Route element={<SidebarLayout />}>
                    <Route path="news/trashed" element={<NewsTrashed />} />
                </Route>

                {/* No layout */}
                <Route index element={<Home />} />
                <Route path="use-state" element={<UseState />} />
                <Route path="cleanup2" element={<Cleanup2 />} />
                <Route path="hooks" element={<Hooks />} />
                <Route path="hoc" element={<HOC />} />
                <Route path="render-props" element={<RenderProps />} />
                <Route path="custom-hook" element={<CustomHook />} />
                <Route path="debounce" element={<Debounce />} />
                <Route path="tabs-demo" element={<TabsDemo />} />
                <Route path="forms" element={<Forms />} />
                <Route path="context-api" element={<ContextAPI />} />
                <Route path="redux" element={<Redux />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
