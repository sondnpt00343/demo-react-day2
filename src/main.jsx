// import React from "react";
import ReactDOM from "react-dom/client";

import { Provider as ReduxProvider } from "@/contexts/ReduxContext";
import { Provider as ThemeProvider } from "@/contexts/ThemeContext";
import store from "@/store/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </ThemeProvider>
);
