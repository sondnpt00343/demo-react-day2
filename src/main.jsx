// import React from "react";
import ReactDOM from "react-dom/client";

import { Provider as ThemeProvider } from "@/contexts/ThemeContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
