import { BrowserRouter as Router, Routes, Route } from "react-router";

// Pages
import Home from "../../pages/Home";
import News from "../../pages/News";
import Contact from "../../pages/Contact";
import Navigation from "../../layouts/Navigation";

function AppRoutes() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
