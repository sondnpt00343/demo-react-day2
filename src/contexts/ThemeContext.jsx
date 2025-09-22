import { createContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    // Global state
    const values = {
        theme,
        toggle() {
            setTheme(theme === "light" ? "dark" : "light");
        },
        currentUser: {
            name: "Nguyen Van A",
        },
        myCourses: [
            // ...
        ],
        // more...
    };

    return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { Context, Provider };
