import { createContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const values = {
        theme,
        toggle() {
            setTheme(theme === "light" ? "dark" : "light");
        },
    };

    return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { Context, Provider };
